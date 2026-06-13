# 02 · Tab Architecture — The Payoff v1

12 tabs (9 visible + 3 system). Standard brand chrome rows 1–5, title
block rows 6–8, exactly as the sibling products' `chrome_()` /
`titleRow_()` build them. Reuse those helpers unchanged — and every
hard-won build lesson in CLAUDE.md (grid pre-sizing, slabbed writes,
rebuild teardown + geometry normalization, no future-dated mock rows,
right-aligned numeric headers).

The motivational layer (Temple, Stylobate, Hall, streaks, Letters) is
fully specified in **05_gamification.md** — this file says which tab
each surface lives on; 05 says how it works.

**Tab order (bottom strip):**
Start Here · Dashboard · The Plan · Compare · Debts · Payments Log ·
Progress · The Hall · Bank Import · _Engine · _Config (hidden) ·
_Schema (hidden)

Reuse legend: **[REUSE]** = lift the Foundation/Ledger/Workbench pattern
with renames only. **[ADAPT]** = existing pattern, modified per spec.
**[NEW]** = no equivalent.

Scale rules: debts are rows (25 slots), the strategy is a dropdown, the
engine owns every projection. The only typing that grows with use is
one Payments Log row per payment (and optional Stylobate contributions).

---

## 1 · Start Here — [ADAPT]
Foundation layout: palette tile picker (24), setup steps, LLM teaser,
plus the **temple anatomy explainer** (Stylobate → Column → Capital →
Entablature → Pediment — the vocabulary the product speaks).
- 6 steps reworded: Install script → List your debts (balance, APR,
  minimum) → Pick a strategy on The Plan → Set your extra monthly
  amount → Log payments as you make them (or Bank Import) → Watch the
  temple rise on the Dashboard.
- LLM teaser prompt: "Which payoff order saves me the most interest,
  and what happens to my debt-free date if I add $75 a month?"

## 2 · Dashboard — [ADAPT] (the Temple is the hero — 05)
- **The Temple** (hero, top): the colonnade at today's state — one
  column per debt (width ∝ size, fills by % paid), the Wall of remaining
  debt above, the Stylobate base below, pediment crown. The signature
  screenshot. `Watch the build` replays it (05).
- KPI row: **TOTAL DEBT NOW · PAID OFF TO DATE · DEBT-FREE DATE ·
  SAVED vs MINIMUMS** (date + saved from the active strategy block; the
  saved sub-line carries the never-finishes figure when a min is
  underwater — 03).
- **Next payments** panel: per active debt — due day, minimum, covered?
- AI Insights panel: mock-gated like the siblings (copy in 04).

## 3 · The Plan — [NEW] (strategy + the Time Machine)
- **Strategy picker**: yellow dropdown (named `cc_active_strategy`):
  `Snowball — smallest balance first` · `Avalanche — highest APR
  first` · `My Order — use my ranking`. One yellow **Extra monthly**
  cell (named `cc_extra_monthly`).
- **The headline block**: DEBT-FREE {Month Year} (display-size) ·
  months left · total interest on this plan · interest saved vs
  minimums-only.
- **What-if chips**: "+$50 → {date} · −{n} months" and "+$100 →
  {date} · −{n} months" — live from the two scenario engine blocks.
- **The Time Machine** (05): a month scrubber/active-month cell that
  re-renders the temple at any month, past or future, on the current
  plan. Default visit = the debt-free month.
- **Payoff order table** (25 slots, computed): order # · debt ·
  balance now · APR · payoff month ({Mon YYYY} or "beyond horizon ·
  10+ yrs") · interest paid on plan · a months-left bar (SPARKLINE).
  Out-of-plan debts listed below the line, dimmed, labeled "tracked,
  not in plan".
- **Balance timeline**: total in-plan balance by month, column
  SPARKLINE over the engine's monthly totals + scale anchors (start ·
  now · zero at {date}) — the Workbench trend-anchor pattern.
- Caption: estimates-not-advice disclaimer (verbatim in 03).

## 4 · Compare — [NEW] (the Strategy Race — full side-by-side, 05)
Two mini-**temples** (Snowball | Avalanche), each rendering from its own
complete engine schedule; My Order joins as a third when active. Same
money, different order — the columns fill at different rates and
different columns top out at different months (the teaching animation +
sales screenshot).
- Per lane: debt-free date · months · total interest · first kill
  ("{Debt} · {Mon YYYY}").
- **Verdict line** (computed): "Avalanche saves ${x} over the snowball ·
  the snowball's first win lands {n} months earlier."
- A shared month scrubber drives both lanes (race them).
- The extra-monthly cell applies to BOTH lanes (the fair comparison); a
  caption says so.

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
  TRACKED when out of plan · **UNDERWATER** when the minimum doesn't
  cover one month's interest — the warning every card statement hides)
  · Payoff date (active strategy) · Projected interest ·
  share-of-total bar.
- "In plan? = No" guidance caption names the mortgage case explicitly.

## 6 · Payments Log — [ADAPT of the sibling logs]
`Date · Debt (dropdown) · Amount · Interest portion (optional, from the
statement) · Note · Month (hidden helper)`
- Capacity **5,000 rows**; prewired validations + Month formula; filter
  + frozen header; Renumber Payments menu item (Sales Log pattern).
- Principal applied = Amount − Interest portion (blank portion ⇒ the
  whole payment counts as principal; the override column on Debts is
  the monthly truth-up for the difference).

## 7 · Progress — [NEW] (the Stylobate + streaks — the saving tab, 05)
- **The Stylobate**: the buffer as the temple's stone base. SAVED
  (computed sum of logged contributions) toward GOAL (`cc_stylobate_goal`,
  editable, default $1,000); sand → laying → solid-stone states; a
  contributions ledger; each contribution toasts. Centered under the
  temple's columns at any width.
- **Streaks** (data-derived): beat-the-minimum · no-new-debt · weekly
  check-in. High-water marks per column.
- **Actual vs plan**: total balance by month — actuals from the engine's
  actuals block, plan line from the active schedule; "ahead/behind by
  ${x}" chip.

## 8 · The Hall — [NEW] (the trophy room — 05)
A room you enter (forest interior, flanking colonnade): **slain-debt
plaques** on the walls (name · amount · date · duration · optional
signature), **record trophies** on pedestals (longest streak ·
no-new-debt · fastest kill · total slain), and **locked future
trophies** (Halfway · $10k slain · Debt-Free) that name what earns them.
Plaques + trophies are cell-cards that appear as you achieve. 💳 → Frame
a win for sharing isolates a card for a clean screenshot.

## 9 · Bank Import — [REUSE Foundation section 13]
Paste a bank CSV export: header sniffing, dedupe, keyword rules mapping
descriptions → debt names, preview, append to Payments Log. Keyword
rules live on the Debts tab (cols mirroring the Foundation pattern).

## 10 · _Engine — [NEW] (hidden; all projection math)
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

## 11 · _Config — [REUSE]
24 palettes verbatim; `active_palette` cell; build-mode flag. Per-debt
color ramp derives from the active palette (the temple recolors).

## 12 · _Schema — [ADAPT]
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
