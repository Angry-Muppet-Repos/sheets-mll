# 03 · Data Model — The Payoff v1

## Capacity constants (the scale dials — section 00 of the .gs)

| Constant | Default | Bound by |
|---|---|---|
| `DEBT_CAPACITY` | 25 | Debts rows 10–34 · engine columns per block |
| `PAYOFF_HORIZON_MONTHS` | 120 | engine block rows; longer debts read "beyond horizon · 10+ yrs" |
| `PAYMENTS_CAPACITY` | 5,000 | Payments Log rows |
| `SCENARIO_EXTRAS` | [50, 100] | the two what-if engine blocks |
| `ACTUALS_MONTHS` | 24 | Progress actuals window (rolls like the siblings) |

Engine load: 5 schedule blocks × (120 × 25) ≈ 15,000 arithmetic cells
plus helpers — more cells than the Workbench matrix, lighter per cell
(no SUMIFS over 10k-row logs inside the blocks; each cell reads its
neighbors and the registry mirror). Slab-written with per-tab toasts.

## Debts registry row (rows 10–34)

| Col | Field | Rule |
|---|---|---|
| A | # | auto |
| B | Debt name | yellow, required |
| C | Type | dropdown: Card · Auto · Student · Personal · Medical · Mortgage · Other |
| D | Statement balance | yellow — your current balance from the latest statement (also the setup anchor). Re-enter monthly to true up. |
| E | APR | yellow, percent |
| F | Min payment | yellow, number |
| G | Due day | yellow, 1–28 |
| H | In plan? | dropdown Yes/No, default Yes — No = tracked, excluded from strategy + date |
| I | My order | yellow rank, used only by the My Order strategy (blanks sort last by balance) |
| J | Last checked | computed — the date of the most recent statement-balance entry / payment since |
| K | Current balance | computed: statement balance (D) − Σ estimated principal of payments logged since it was entered |
| L | Status | computed chip: ACTIVE · PAID ✓ (current ≤ 0) · TRACKED (H = No) · UNDERWATER (min ≤ bal×APR/12) |
| M | Payoff date | computed from the active engine block ("beyond horizon · 10+ yrs" past the dial) |
| N | Projected interest | computed from the active block |
| O | Share bar | SPARKLINE of K ÷ total |

**The owner never enters interest.** Each logged payment's interest is
**estimated by the engine** from the APR (`running balance × APR/12` —
the same math the projection uses), and principal = Amount − that
estimate. Current balance (K) = the **statement balance** (D) minus the
estimated principal of payments logged since D was last entered — so a
payment moves the temple immediately (estimate), and re-typing the
statement balance each month **re-anchors to truth**, silently absorbing
estimate drift, promo rates, annual fees, or new charges. The one number
every bill shows clearly is the balance; the interest split (which bills
often hide) is never required.

Keyword-rule columns for Bank Import sit to the right (Foundation
pattern: match text → debt name), named `cc_keyword_rules`.

## Payments Log row

| Col | Field | Rule |
|---|---|---|
| A | Date | required |
| B | Debt | dropdown `cc_debts_list` |
| C | Amount | number (the only money you type) |
| D | Est. interest | **computed**, read-only: `running balance × APR/12` at this payment (transparency — where the money went) |
| E | Est. principal | **computed**, read-only: Amount − Est. interest |
| F | Note | free |
| G | Month | hidden helper `=TEXT(A,"yyyy-mm")` |

The owner types Date · Debt · Amount only. D/E are the engine showing its
work; nothing depends on the owner knowing them. The monthly statement
check-in on Debts!D is the true-up.

## The projection engine (the product's heart)

**Inputs per debt d:** `bal0(d)` = current balance (registry K),
`r(d)` = APR/12, `min(d)` = minimum, in-plan flag, and a strategy rank.

**Strategy ranks (registry mirror helper rows):**
- Snowball: in-plan debts ranked by current balance ascending.
- Avalanche: ranked by APR descending.
- My Order: registry col I; blanks rank after all ranked, by balance.
- Ties break by row order. Out-of-plan debts get no rank and never
  receive pooled money; their schedule column still amortizes at
  minimum payment so their row can show a date when it fits the
  horizon.

**Monthly iteration, per block — cell `bal(m,d)`:**

```
target(m)  = rank of the lowest-ranked debt still alive at m−1   (helper col)
pooled(m)  = extra + Σ min(d) over debts dead at m−1             (helper col)
pay(m,d)   = min(d) + IF(rank(d) = target(m), pooled(m), 0)
bal(m,d)   = IF(bal(m−1,d) ≤ 0, 0,
              MAX(0, bal(m−1,d) × (1 + r(d)) − pay(m,d)))
```

**Documented simplification (also in _Schema):** when a payment
overshoots a dying debt, the surplus rolls into NEXT month's pool
rather than cascading to the next debt in the same month. Off-the-shelf
snowball sheets do the same; it costs at most one month of precision
and keeps every cell auditable.

**Derived per block:**
- `monthly_total(m)` = Σ in-plan balances — the timeline column.
- months-to-zero = `MATCH(TRUE, monthly_total ≤ 0)`; date = engine
  anchor month + months; beyond 120 ⇒ the horizon state.
- interest(d) = `Σ_m bal(m−1,d) × r(d)` while alive; block total = Σ.
- first kill = earliest m where any bal hits 0, with the debt name.
- minimums-only baseline (a sixth, extra = 0 run? NO — computed as the
  snowball block with pooled = freed minimums only and extra = 0 would
  still roll… the honest baseline pays each debt its own minimum with
  NO rollover: closed-form per debt, `NPER`/log formula per slot, one
  row — no sixth block needed). INTEREST SAVED = baseline interest −
  active-plan interest.

**The five blocks:** Snowball · Avalanche · Custom · Active+$50 ·
Active+$100. The scenario blocks read `cc_active_strategy`'s rank row
and `cc_extra_monthly + 50/100`.

## Named ranges (cc_ prefix)

`cc_debts_list` (Debts!B10:B34) · `cc_debts_table` (A10:O34) ·
`cc_active_strategy` (The Plan strategy cell) · `cc_extra_monthly` ·
`cc_payments_log` · `cc_keyword_rules` · `cc_engine_anchor` (month-0
code) · `cc_active_palette` — exact A1s land in section 00 and the
harness inventory at build time.

## Metric definitions (so the headline never lies)

- **Debt-free date** = anchor month + active block's months-to-zero
  (in-plan debts only).
- **Interest saved vs minimums** = minimums-only interest THROUGH THE
  HORIZON − active plan interest (in-plan debts only). When any
  minimum doesn't cover its own month's interest, minimums-only never
  finishes — the KPI sub-line then reads "on minimums alone you'd
  still owe $X after 10 years" (computed: balances remaining at the
  horizon under minimums). A per-debt **Underwater** status fires when
  `min ≤ bal × APR/12`.
- **Paid off to date** = Σ starting balances − Σ current balances
  (floor 0 per debt).
- **Ahead/behind** (Progress) = plan's projected total for the current
  month − actual total.

## Disclaimer (verbatim, The Plan + _Schema)

> Projections are estimates at monthly compounding, not financial
> advice and not a servicing statement. Your lender's figures are the
> truth — check in monthly using the Balance override column.

## Modes

- **MOCK_DATA**: the Casey Alvarez story (04) — fictional,
  screenshot-safe, generator-verified, no future-dated rows.
- **BLANK**: registry empty, logs empty, strategy seeded to Snowball,
  extra = $0; every headline shows em-dash/"add your first debt"
  states; zero `#ERROR!` anywhere.
- Verification: `tools/verify_payoff.js` mirrors the Workbench harness
  (layers a–h incl. rebuild resilience + reference inventory) plus a
  **math layer**: re-run the amortization in plain JS and assert the
  engine's months/interest/order per strategy match exactly.
