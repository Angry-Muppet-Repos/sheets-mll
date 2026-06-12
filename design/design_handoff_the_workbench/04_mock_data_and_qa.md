# 04 · Mock Data Story — The Workbench v1

Fictional shop **Juniper Paper Co.**, owner **Jules Hartley** (fictional —
never a real name on public screenshots). Sells printable stationery and
planner inserts. Mock window: trailing **9 months** ending at build month
(dates slide like the Ledger; figures fixed).

## Products (8 — enough to demo every state without bloat)

| Product | Status | Price | The story it tells |
|---|---|---|---|
| Wedding Suite No. 4 | Listed | $24 | the hero — ~60% of net, ROAS ≈ 4 on Etsy Ads |
| Everyday Planner Kit | Listed | $16 | steady mid-earner, no spend |
| Recipe Card Set | Listed | $9 | slow decay — views up, conversion down (price test candidate). Printed line: runs **Physical / Handmade** (28/28) |
| Teacher Bundle | Listed | $14 | listed 6 weeks ago, ramping |
| Minimal Budget Sheets | Listed | $7 | the dud — ad spend > net (the KILL demo) |
| Holiday Gift Tags | Assets | — | printed line, **Physical / Handmade**: 11 of 28 done (39%), next step "Photos shot (hero order)", target in 9 days |
| Wedding Suite No. 5 | Building | — | 5 of 30 done (17%), next step "Final files exported", target in 30 days |
| Kids Chore Charts | Idea | — | 0 of 30, no target — the backlog row |

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
- Checklists (TWO sections — the multi-process screenshot): **Digital
  Product** carries six products (hero · Planner · Teacher Bundle ·
  Minimal · WS5 · Chore Charts); **Physical / Handmade** carries the
  printed line (Recipe Card Set · Holiday Gift Tags). Listed digitals
  fully ticked (100% · "Done"), Recipe 28/28 on its own section; Teacher
  Bundle 28 of 30 (next: "Week-1 stats logged"); the three unlisted land
  exactly 39% / 17% / 0% with next steps per the table above.

## Mock AI Insights (Dashboard, mock build only)

- ['SCALE', 'Wedding Suite No. 4 returns about four dollars of net for every ad dollar. Raise the budget before Q4.']
- ['KILL', 'Minimal Budget Sheets has cost more in ads than it has ever earned. Retire it or stop the spend.']
- ['WATCH', 'Recipe Card Set gets more views than ever and converts half as well. The price test is overdue.']

For listing screenshots: lead with **Pipeline**, then Dashboard, Product
View (hero selected), Checklist sections (both processes visible),
Sales Log.

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
  In Flight shows 39% / 17% / 0%; days-left chips paint correctly
- [ ] Checklist: TWO horizontal sections (Digital ×6, Physical ×2); step
  headers readable at 45° with hover notes; left block (# · Product ·
  Progress · Next step) frozen while steps scroll; first section's
  header row frozen; ticking a box moves that row's Progress/Next and
  Products/Pipeline instantly; a fully ticked product reads 100% / "Done"
- [ ] Intake: 💳 → Add Product… → create "QA Test" on Quick List → Products
  gains the row AND a new Quick List section appears at the bottom of
  the Checklist with the product's row in it, progress 0%
- [ ] Per-process customization: rename a step header in the Quick List
  section — every row in the section follows; type a name into a gold
  ghost slot — the step joins that section's math (progress
  denominators move) and a fresh ghost slot appears; blank a header —
  it drops out of the math
- [ ] Add Process…: 💳 → Add Process… walks foundation → phases → steps →
  save; the review-loop button inserts review › fix › re-check; saving
  lands a new Templates column; "open Add Product after saving" chains;
  adding a product on the new process spawns its section
- [ ] Save Steps as Template… ("QA Process") with the customized section →
  Templates gains a column carrying the renames/added steps; Add
  Product on it → new section matches the customized process
- [ ] Templates: all four starters present with editable yellow cells; step
  counts read 30 / 28 / 20 / 10
- [ ] Product View: selector dropdown lists all 8; hero shows ROAS chip
  "On Track"; the dud shows "Over"; funnel renders; checklist position
  shows stage · progress % · next step
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
- [ ] No Juniper/Jules anywhere; logs empty; Checklist shows ONE empty
  Digital Product section with the "Add your first product" caption (the
  caption clears when the first product lands); Templates shows the four
  starters (library, ships both modes); Channels shows the four default
  rows with the verify-fees caption
- [ ] Zero #ERROR!/#N/A/#REF! on any tab (walk every tab)
- [ ] Dashboard/Pipeline/Product View show $0/em-dash states; selector
  works with an empty product list (no crash)
- [ ] AI Insights shows instructional copy
