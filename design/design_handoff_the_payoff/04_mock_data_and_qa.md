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
| Medical bill | Medical | $2,600 | 0% | $150 | **PAID ✓ month 13** — second kill, 0% APR row exercised |
| Visa ····4417 | Card | $4,800 | 24.99% | $96 | ACTIVE — current snowball target, dying soon |
| Auto loan | Auto | $9,400 | 6.9% | $212 | ACTIVE |
| Student loan | Student | $18,200 | 5.5% | $190 | ACTIVE |
| Mortgage | Mortgage | $148,000 | 6.1% | $1,055 | **In plan? = No** — tracked, excluded from the date (the toggle demo) |

Starting consumer total **$36,150**; minimums $683 + $250 extra.

## Locked headline truths (generator-verified by the harness math layer)

- Two kills on the Dashboard Kill List with month-stamped PAID chips.
- Debt-free date ≈ **40–48 months from start** (exact figure comes from
  the engine and is pinned by the harness once the generator lands —
  the brief's "~46 months" is the design target).
- Interest saved vs minimums-only in the **$5,500–7,500** band.
- Compare tab tells the honest story: avalanche finishes 1–3 months
  earlier and ~$300–700 cheaper; snowball's first kill lands ~4 months
  sooner. Verdict line renders both clauses.
- What-if chips: +$50 and +$100 each pull the date in by a visible
  number of months (≥ 2).
- Mortgage row shows current balance and "TRACKED" status, appears in
  totals-tracked but NOT in the debt-free date, payoff table
  below-the-line.
- Payments Log ≈ **90 rows** (14 months × active debts + extras), some
  with interest portions filled, most blank — both paths demoed. One
  Balance override filled (the student loan) to demo the true-up.
- Progress: actual line slightly AHEAD of plan (≈ $400) — the
  motivating screenshot; milestone strip shows $35k and $30k crossed.

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
