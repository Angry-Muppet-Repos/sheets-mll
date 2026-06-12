# 03 · Data Model — The Workbench v1

## Capacity constants (the scale dials — section 00 of the .gs)

| Constant | Default | Bound by |
|---|---|---|
| `PRODUCT_CAPACITY` | 250 | engine matrix rows + Products rows; raising it is one constant + rebuild |
| `SALES_CAPACITY` | 10,000 | Sales Log rows |
| `MARKETING_CAPACITY` | 2,000 | Marketing Log rows |
| `STATS_CAPACITY` | 3,000 | Stats rows |
| `CHANNEL_SLOTS` | 12 | Channels registry rows 10–21 + engine channel rows |

Scale posture: per-product × month SUMIFS exist ONLY in the engine's net
matrix. Per-product detail (units, gross, spend, funnel) computes on
demand for the single selected product on Product View. Rankings are
top-N (LARGE/MATCH), never full enumerations.

## Sales Log row (the canonical money record)

| Col | Field | Rule |
|---|---|---|
| A | Date | required |
| B | Product | dropdown `cc_products_list` |
| C | Channel | dropdown `cc_channels_list` |
| D | Units | number, default 1 |
| E | Gross | number |
| F | Fees | optional — leave blank to use channel defaults |
| G | Net | FORMULA: `=IF(F="", E - (E×fee% + flat×D), E - F)` via channel lookup; prewired to capacity, overtype-safe (Renumber restores) |
| H | Notes | free |
| I | Month | hidden helper `=TEXT(A,"yyyy-mm")` |

Cash basis: a row exists when money lands (per sale or per payout-day —
both work; Units carries the count either way).

## Launch-step template (30 fixed + 5 custom checkbox columns on Products)

| Group | Steps |
|---|---|
| BUILD (8) | Handoff folder written · Brief approved · Tab specs locked · Data model locked · UI kit mocked · Visual approval · Script written · Static verification green |
| QA (6) | Mock build clean · Blank build clean · Flow test (import/entry) · Theme pass (≥3 palettes) · xlsx exports generated · Brand-voice read-through |
| ASSETS (6) | Screenshots (hero order) · Watermarks applied · Thumbnail · Listing copy drafted · Tags + SEO list · Price set |
| LISTING (5) | Listing created · Files attached · Preview checked · Published · URL logged here |
| POST (5) | First-sale check · Review request sent · Week-1 stats logged · Retro note written · Next-version ideas filed |

Custom slots: 5 extra checkbox columns, header cells yellow/renameable —
extra credit OUTSIDE the progress math. **Progress % and Next-step run on
the 30 fixed steps only** (a fully ticked fixed set reads 100% / "Done"),
so renamed custom columns never distort the pipeline.

Computed columns (locked, right of the checklist):
- **Progress** `=COUNTIF(fixed 30 checkrange, TRUE)/30` formatted 0%
- **Next step** `=IFERROR(INDEX(stepHeaderRow, MATCH(FALSE, checkrange, 0)), "Done")`
- **Days to target** `=IF(target="","—", target−TODAY())` + chip CF
  (On Track ≥ 7 · Fair 0–6 · Over < 0)

## Channels registry (rows 10–21) + fee defaults

`Channel · Fee % · Flat fee/order · Active · Notes`

Seed rows (BOTH modes — these are settings, not mock data; the caption
says "Defaults — verify your plan's current fees." Figures re-verified at
build time, never hardcoded into formulas — Net always reads this table):

| Channel | Fee % | Flat/order | Basis to verify at build |
|---|---|---|---|
| Etsy | 9.5% | $0.45 | 6.5% transaction + ~3% + $0.25 payment processing + $0.20 listing — folded into a single editable pair |
| Shopify | 2.9% | $0.30 | payments processing, plan-dependent |
| Gumroad | 10% | $0.50 | flat platform fee |
| Direct | 0% | $0.00 | owner-defined |

## Named ranges (cc_ prefix)

`cc_engine_months` (B1:Y1) · `cc_engine_portfolio` (_Engine!B2:Y9) ·
`cc_engine_products` (product matrix block) · `cc_dashboard_month`
(Dashboard!N4) · `cc_trends_window` (Trends!N7) · `cc_selected_product`
(Product View selector cell) · `cc_products_list` · `cc_products_status` ·
`cc_products_table` · `cc_channels_list` · `cc_channel_fees` ·
`cc_sales_log` · `cc_active_palette`

## Engine layout (hidden)

| Rows | Content |
|---|---|
| 1 | 24 rolling YYYY-MM headers (B:Y) |
| 2–9 | Portfolio: GrossRevenue · Fees · NetRevenue · Units · MarketingSpend · NetAfterSpend · SalesRows · ActiveProducts |
| 12–23 | Channel net × month (12 slots, names ← Channels!A10:A21, IF-guarded) |
| 30–279 | Product net × month (250 slots, names ← Products name column, IF-guarded SUMIFS over Sales Log Net by Product + Month) |

All money formulas IF-guarded for empty slots; Margin-style ratios IFERROR
to 0. Row indices are constants in section 00 (`ENGINE_ROWS`), audited in
static verification like the Ledger.

## Metric definitions (so the dashboard never lies)

- **Net revenue** = Sales Log Net summed (fees already out).
- **Net after spend** = net revenue − Marketing Log spend, same period.
- **Stale** (listed product) = days since MAXIFS(sale date, product) —
  surfaced when > 60.
- **Spend verdict** (Product View chip) = lifetime net ÷ lifetime spend:
  ≥ 3 On Track ("scale") · 1–3 Fair ("watch") · < 1 Over ("losing money").
- **Conversion** = orders ÷ views per logged Stats month; revenue per 100
  views = net ÷ views × 100.

## Modes

- **MOCK_DATA**: Juniper Paper Co. story (04) — fictional, screenshot-safe.
- **BLANK**: registries empty except Channels defaults; logs empty;
  checklist unticked; zero `#ERROR!` anywhere (em-dash/`$0` states);
  AI Insights shows instructional copy. Foundation cleanup standard:
  no mock names, figures, or copy reachable in blank mode.
- Dogfood note (not a build mode): Dan's instance = blank build + three
  real rows — The Foundation (Listed), The Ledger (QA stage), The
  Workbench (Build stage).
