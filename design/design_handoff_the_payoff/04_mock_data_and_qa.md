# 04 · Mock Data Story — The Payoff v1

Fictional debtor **Casey Alvarez** (never a real name on public
screenshots), 14 months into a snowball with $250/month extra. The
story sells momentum: two debts already dead, the third on the ropes,
a visible finish line. Mock window: trailing 14 months ending at build
month (dates slide; figures fixed; **no future-dated rows** — the
Workbench lesson).

## The debts (6 rows — every state demonstrated)

| Debt | Type | Start | APR | Min | State in the story |
|---|---|---|---|---|---|
| Rooms+ Store Card | Card | $1,150 | 27.99% | $35 | **PAID ✓ month 5** — first kill |
| Medical bill | Medical | $3,400 | 0% | $150 | **PAID ✓ month 12** — second kill, 0% APR row exercised |
| Visa ····4417 | Card | $9,800 | 24.99% | $196 | ACTIVE — the **underwater minimum**: $196 < ~$204/mo interest, so it crept UP to $9,930 while the small debts died. The engine exposes it (Underwater chip) |
| Auto loan | Auto | $8,400 | 6.9% | $212 | ACTIVE — current snowball target ($5,148 now) |
| Student loan | Student | $18,200 | 5.5% | $190 | ACTIVE ($16,663 now) — carries the Balance-override demo |
| Mortgage | Mortgage | $148,000 | 6.1% | $1,055 | **In plan? = No** — tracked, excluded from the date (the toggle demo) |

Starting consumer total **$40,950**; minimums $683 + $250 extra.
Visa bigger than the auto at a far higher APR — so snowball (auto
first) and avalanche (Visa first) genuinely diverge on Compare.

## Locked headline truths (computed by the 03 iteration, re-verified by the harness math layer)

- Current consumer total **$31,741** · paid off to date **$9,209** ·
  two kills on the Dashboard Kill List (months 5 and 12).
- Active snowball from now: **47 months** · debt-free {build month +
  47} · $7,487 interest on plan · kills Auto m12 → Visa m31 →
  Student m47.
- Avalanche: 46 months · $6,515 — **saves $972 and finishes 1 month
  earlier; snowball's first kill lands 15 months sooner** (m12 vs
  m27). The verdict line renders both clauses.
- What-if chips: **+$50 → 2 months sooner · +$100 → 6 months sooner.**
- Interest-saved KPI uses the horizon window: **$26,772 saved through
  10 years** — and the never-finishes state fires: "on minimums alone
  you'd still owe **$15,559** after 10 years" (the Visa's minimum
  never escapes its own interest).
- Mortgage row shows current balance and "TRACKED" status, appears in
  tracked totals but NOT in the debt-free date; below-the-line on The
  Plan.
- Payments Log ≈ **90 rows** (14 months × active debts + extras), some
  with interest portions filled, most blank — both paths demoed. One
  Balance override filled (the student loan) to demo the true-up.
- Progress: actual line slightly AHEAD of plan (≈ $400) — the
  motivating screenshot; milestone strip shows $40k, $35k crossed and
  $30k about to fall.

## Mock AI Insights (Dashboard, mock build only)

- ['MOMENTUM', 'Two debts down. The Visa dies next — every dollar of the old minimums is already working on it.']
- ['TRADE-OFF', 'Avalanche would save about five hundred dollars but delays your next win by four months. Momentum has a price; so does interest.']
- ['LEVER', 'Fifty more dollars a month moves your debt-free date up by months, not weeks. The Plan tab shows exactly how many.']

For listing screenshots: lead with **The Plan** (the date), then
Compare, Dashboard (kill list), Debts, Progress.

---

# 05 · QA Checklist — The Payoff v1 (run on the built workbook)

## Setup
- [ ] Fresh Sheet → paste `ColumnCo_Payoff_v1.gs` → 💳 menu appears →
  Setup → Build workbook (mock data) completes; strip order matches 02
- [ ] Build workbook (blank) on a second sheet completes; REBUILD mock
  over blank and blank over mock (stale-geometry/filter lesson)

## Math spot-checks (by hand, the product's credibility)
- [ ] Pick the Visa: hand-amortize THREE months (balance × (1+.2499/12)
  − payment) and match the engine's schedule cells exactly
- [ ] A 0% APR debt amortizes linearly (medical row history)
- [ ] Minimums-only baseline for one debt matches the closed-form
  months figure
- [ ] Strategy flip Snowball → Avalanche reorders the payoff table,
  moves the date and interest figures; flip back restores
- [ ] My Order: type ranks, pick My Order — order follows the ranks;
  blanks fall to the end
- [ ] Extra monthly +$50 typed manually matches the +$50 what-if chip's
  date exactly

## Mock build
- [ ] Dashboard: two kills listed; KPIs populated; date matches The
  Plan's headline; milestone strip shows $35k/$30k
- [ ] The Plan: headline date renders; what-if chips move when extra
  changes; out-of-plan mortgage below the line, dimmed
- [ ] Compare: full side-by-side renders; verdict line reads both
  clauses; shared-scale timelines
- [ ] Debts: PAID ✓ chips on two rows; TRACKED on the mortgage;
  override on the student loan wins over the computed balance
- [ ] Payments Log: row with Interest portion reduces principal
  applied; Renumber restores formats/validations
- [ ] Bank Import: paste a sample CSV → keyword rules map to debts →
  dedupe on re-paste → rows land in the log
- [ ] Progress: ahead-by chip ≈ $400; paid-by-month chart; streak
- [ ] Apply Theme across ≥3 palettes — chrome locked, yellow inputs
  intact

## Edge + blank build
- [ ] Blank: zero #ERROR!/#N/A on every tab; headline shows the
  add-your-first-debt state; strategy seeded Snowball, extra $0
- [ ] One debt only: plan/compare degrade sensibly
- [ ] All debts In plan? = No: date shows the em-dash state, no errors
- [ ] A debt longer than the horizon reads "beyond horizon · 10+ yrs"
  everywhere it appears
- [ ] 25 dummy debts + 1,000 dummy payment rows: recalc stays
  interactive (scale smoke)
