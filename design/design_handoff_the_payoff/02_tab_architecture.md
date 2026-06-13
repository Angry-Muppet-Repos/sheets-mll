# 02 · Tab Architecture — The Payoff v1

11 tabs (8 visible + 3 system). Standard brand chrome rows 1–5, title
block rows 6–8, exactly as the sibling products' `chrome_()` /
`titleRow_()` build them. Reuse those helpers unchanged — and every
hard-won build lesson in CLAUDE.md (grid pre-sizing, slabbed writes,
rebuild teardown + geometry normalization, no future-dated mock rows,
right-aligned numeric headers).

**Tab order (bottom strip):**
Start Here · Dashboard · The Plan · Compare · Debts · Payments Log ·
Progress · Bank Import · _Engine · _Config (hidden) · _Schema (hidden)

Reuse legend: **[REUSE]** = lift the Foundation/Ledger/Workbench pattern
with renames only. **[ADAPT]** = existing pattern, modified per spec.
**[NEW]** = no equivalent.

Scale rules: debts are rows (25 slots), the strategy is a dropdown, the
engine owns every projection. The only typing that grows with use is
one Payments Log row per payment.

---

## 1 · Start Here — [ADAPT]
Foundation layout: palette tile picker (24), setup steps, LLM teaser.
- 6 steps reworded: Install script → List your debts (balance, APR,
  minimum) → Pick a strategy on The Plan → Set your extra monthly
  amount → Log payments as you make them (or Bank Import) → Watch the
  date move on the Dashboard.
- LLM teaser prompt: "Which payoff order saves me the most interest,
  and what happens to my debt-free date if I add $75 a month?"

## 2 · Dashboard — [ADAPT]
- KPI row: **TOTAL DEBT NOW · PAID OFF TO DATE · DEBT-FREE DATE ·
  INTEREST SAVED vs MINIMUMS** (date + saved figures from the active
  strategy's engine block).
- **The Kill List** strip: paid-off debts as celebration chips — name ·
  starting balance · "PAID" date. Empty state: "Your first kill lands
  here."
- **Next payments** panel: per active debt — due day, minimum, and
  whether this month's logged payments cover it (chip CF).
- **Milestones** strip: every $5,000 threshold crossed, with the month
  it fell (computed from the actuals block).
- AI Insights panel: mock-gated exactly like the siblings (mock copy in
  04; blank uses ASK/PASTE/START with payoff wording).

## 3 · The Plan — [NEW] (the hero tab)
- **Strategy picker**: yellow dropdown (named `cc_active_strategy`):
  `Snowball — smallest balance first` · `Avalanche — highest APR
  first` · `My Order — use my ranking`. One yellow **Extra monthly**
  cell (named `cc_extra_monthly`).
- **The headline block**: DEBT-FREE {Month Year} (display-size) ·
  months left · total interest on this plan · interest saved vs
  minimums-only. The screenshot that sells the product.
- **What-if chips**: "+$50 → {date} · −{n} months" and "+$100 →
  {date} · −{n} months" — live from the two scenario engine blocks.
- **Payoff order table** (25 slots, computed): order # · debt ·
  balance now · APR · payoff month ({Mon YYYY} or "beyond horizon ·
  10+ yrs") · interest paid on plan · a months-left bar (SPARKLINE).
  Out-of-plan debts listed below the line, dimmed, labeled "tracked,
  not in plan".
- **Balance timeline**: total in-plan balance by month, column
  SPARKLINE over the engine's monthly totals + scale anchors (start ·
  now · zero at {date}) — the Workbench trend-anchor pattern.
- Caption: estimates-not-advice disclaimer (verbatim in 03).

## 4 · Compare — [NEW] (full side-by-side, Dan's pick)
Two strategy columns (Snowball | Avalanche), each rendering from its
own complete engine schedule; when My Order is active it joins as a
third column.
- Per strategy: debt-free date · months · total interest · first kill
  ("{Debt} · {Mon YYYY}") — the honest trade-off: snowball usually
  kills first sooner, avalanche usually costs less.
- **Verdict line** (computed): "Avalanche saves ${x} over snowball ·
  snowball's first win lands {n} months earlier."
- Full payoff order per strategy, side by side (25 slots each, same
  row anatomy as The Plan's table, compact).
- Dual balance-timeline sparklines on a shared scale.
- The extra-monthly cell applies to BOTH columns (that's the fair
  comparison); a caption says so.

## 5 · Debts — [NEW] (the registry — the only setup typing)
Rows 10–34 (25 slots):
- Editable (yellow): `Debt name · Type (dropdown: Card / Auto /
  Student / Personal / Medical / Mortgage / Other) · Starting balance ·
  APR · Min payment · Due day (1–28) · In plan? (Yes/No) · My order
  (rank, used by My Order strategy) · Balance override`
- **Balance override** is the statement true-up: leave blank and
  current balance computes from Starting − principal logged; type the
  statement figure and it wins (caption: "check in monthly — your
  statement is the truth").
- Computed (locked): Current balance · Status chip (ACTIVE · PAID ✓ ·
  TRACKED when out of plan) · Payoff date (active strategy) ·
  Projected interest · share-of-total bar.
- "In plan? = No" guidance caption names the mortgage case explicitly.

## 6 · Payments Log — [ADAPT of the sibling logs]
`Date · Debt (dropdown) · Amount · Interest portion (optional, from the
statement) · Note · Month (hidden helper)`
- Capacity **5,000 rows**; prewired validations + Month formula; filter
  + frozen header; Renumber Payments menu item (Sales Log pattern).
- Principal applied = Amount − Interest portion (blank portion ⇒ the
  whole payment counts as principal; the override column on Debts is
  the monthly truth-up for the difference).

## 7 · Progress — [NEW] (the momentum tab)
- **Actual vs plan**: total balance by month — actuals from the
  engine's actuals block, plan line from the active schedule; column
  chart + "ahead/behind by ${x}" chip.
- **Paid by month** columns (12 trailing months) with streak readout
  (consecutive months hitting planned payment).
- Milestones table: threshold · month crossed · what killed it.

## 8 · Bank Import — [REUSE Foundation section 13]
Paste a bank CSV export: header sniffing, dedupe, keyword rules mapping
descriptions → debt names, preview, append to Payments Log. Keyword
rules live on the Debts tab (cols mirroring the Foundation pattern).

## 9 · _Engine — [NEW] (hidden; all projection math)
- **Registry mirror** row block: per slot — current balance, APR/12,
  min, in-plan flag, plus per-strategy rank rows (snowball = balance
  asc · avalanche = APR desc · custom = My order, blanks last).
- **Five schedule blocks**, each `PAYOFF_HORIZON_MONTHS × DEBT_CAPACITY`
  (120 × 25): Snowball · Avalanche · Custom · Active+$50 · Active+$100.
  Cell math + the documented rollover simplification in 03. Each block
  carries two helper columns (target rank this month · pooled extra)
  and a monthly-total column.
- **Summary rows** per block: months to zero, total interest, first
  kill, per-debt payoff month + interest.
- **Actuals block**: month × total balance from Payments Log +
  overrides (trailing 24 months, rolling like the siblings).
- All IF-guarded for empty slots; zero #ERROR! in blank mode.

## 10 · _Config — [REUSE]
24 palettes verbatim; `active_palette` cell; build-mode flag.

## 11 · _Schema — [ADAPT]
Payoff prose: tabs, conventions (estimates-not-advice, the In-plan
toggle, rollover simplification, capacity dials), typical questions
("Which order saves the most?", "What does +$75/month buy me?", "When
does my Visa die under each strategy?"). Mock-gated demo-owner line; no
line begins with `=`.

---

## What does NOT exist in v1 (deliberate cuts)
- No budget features (income, categories) — that's The Foundation;
  cross-sell in the guide.
- No credit-score tracking, no refinance shopping math (APR is an
  editable cell; a rate change is an edit).
- No promo-APR step schedules (model as an APR edit when the promo
  ends; documented in _Schema).
- No daily-interest precision: monthly compounding at APR/12, stated
  plainly — this is a planning tool, not a servicing statement.
