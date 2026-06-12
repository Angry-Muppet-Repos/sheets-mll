# 04 · Mock Data Story — The Workbench v1

Fictional shop **Juniper Paper Co.**, owner **Jules Hartley** (fictional —
never a real name on public screenshots). Sells printable stationery and
planner inserts. Mock window: trailing **9 months** ending at build month
(dates slide like the Ledger; figures fixed).

## Products (8 — enough to demo every state without bloat)

| Product | Status | Price | The story it tells |
|---|---|---|---|
| Wedding Suite No. 4 | Listed | $24 | the hero — ~55% of net, ROAS ≈ 4 on Etsy Ads |
| Everyday Planner Kit | Listed | $16 | steady mid-earner, no spend |
| Recipe Card Set | Listed | $9 | slow decay — views up, conversion down (price test candidate) |
| Teacher Bundle | Listed | $14 | listed 6 weeks ago, ramping |
| Minimal Budget Sheets | Listed | $7 | the dud — ad spend > net (the KILL demo) |
| Holiday Gift Tags | Assets | — | pipeline 47% (BUILD + QA ticked), next step "Screenshots (hero order)", target in 9 days |
| Wedding Suite No. 5 | Building | — | pipeline 17% (first 5 BUILD steps ticked), next step "Visual approval", target in 30 days |
| Kids Chore Charts | Idea | — | 0%, no target — the backlog row |

## The numbers (locked targets for the generator)

- ~600 Sales Log rows over 9 months across Etsy (~70% of net), Shopify
  (~20%), Gumroad (~10%). Channel fees via defaults (Fees column blank on
  most rows — demos the computed Net).
- Portfolio net ramps ~$940/mo → ~$2,100/mo. Wedding Suite No. 4 ≈ 60%
  of lifetime net; the dud totals < $60 net lifetime against $140 ad spend.
- Marketing Log: ~25 rows — Etsy Ads daily-ish spend on the hero (ROAS ≈ 4)
  and the dud (ROAS ≈ 0.4), one site-wide sale event, two price tests.
- Stats: 9 months × the 5 listed products — the Recipe Card Set shows
  views +40% while conversion halves (the WATCH insight).
- Checklists: four listed products fully ticked (100% · "Done"); Teacher
  Bundle at 28 of 30 (next: "Week-1 stats logged"); the three unlisted land
  exactly 47% / 17% / 0% with next steps per the table above.

## Mock AI Insights (Dashboard, mock build only)

- ['SCALE', 'Wedding Suite No. 4 returns about four dollars of net for every ad dollar. Raise the budget before Q4.']
- ['KILL', 'Minimal Budget Sheets has cost more in ads than it has ever earned. Retire it or stop the spend.']
- ['WATCH', 'Recipe Card Set gets more views than ever and converts half as well. The price test is overdue.']

For listing screenshots: lead with **Pipeline**, then Dashboard, Product
View (hero selected), Sales Log, Products checklist block.

---

# 05 · QA Checklist — The Workbench v1 (run on the built workbook)

## Setup
- [ ] Fresh Sheet → paste `ColumnCo_Workbench_v1.gs` → 💳 menu appears →
  Setup → Build workbook (mock data) completes; strip order matches spec
- [ ] Build workbook (blank) on a second sheet completes

## Mock build — figures + chains
- [ ] Dashboard: KPI deltas live; Top Products ranks Wedding Suite No. 4
  first; Needs Attention lists Holiday Gift Tags with its next step
- [ ] Pipeline: stage counts = 5 Listed · 1 Assets · 1 Building · 1 Idea;
  In Flight shows 47% / 17% / 0%; days-left chips paint correctly
- [ ] Products: ticking any unticked box moves Progress % and Next step
  instantly; a fully ticked row (30 fixed) reads 100% / "Done"; custom
  columns change nothing
- [ ] Product View: selector dropdown lists all 8; hero shows ROAS chip
  "On Track"; the dud shows "Over"; funnel renders for logged months
- [ ] Sales Log: a new row with Fees blank computes Net from the channel
  defaults; overtyping Fees wins; engine + Dashboard update
- [ ] Stale check: hero shows recent sale; no listed product shows
  60-day staleness except as designed
- [ ] Trends: 6/12/24 toggle re-windows; 12-row top-product sparkline table
- [ ] Apply Theme across ≥3 palettes — chrome locked, yellow inputs intact

## Scale smoke test (the contract)
- [ ] Fill 100 dummy product rows (fill-down) + 1,000 dummy sales rows →
  recalc stays interactive; Dashboard/Pipeline/Product View still respond
  in seconds, not minutes
- [ ] Engine matrix shows zeros (not errors) for empty product slots

## Blank build
- [ ] No Juniper/Jules anywhere; logs empty; checklist unticked; Channels
  shows the four default rows with the verify-fees caption
- [ ] Zero #ERROR!/#N/A/#REF! on any tab (walk every tab)
- [ ] Dashboard/Pipeline/Product View show $0/em-dash states; selector
  works with an empty product list (no crash)
- [ ] AI Insights shows instructional copy
