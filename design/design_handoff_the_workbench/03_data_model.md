# 03 · Data Model — The Workbench v1

## Capacity constants (the scale dials — section 00 of the .gs)

| Constant | Default | Bound by |
|---|---|---|
| `PRODUCT_CAPACITY` | 250 | engine matrix rows + Products rows; raising it is one constant + rebuild |
| `SALES_CAPACITY` | 10,000 | Sales Log rows |
| `MARKETING_CAPACITY` | 2,000 | Marketing Log rows |
| `STATS_CAPACITY` | 3,000 | Stats rows |
| `CHECKLIST_CAPACITY` | 7,500 | Checklist rows (~250 products × 30 steps) |
| `TEMPLATE_SLOTS` × `STEPS_PER_TEMPLATE` | 8 × 50 | Templates library columns × step cells |
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

## The template system (per-product processes)

**Templates tab** — the library. Columns B–I: name (row 9) + up to 50
step cells (rows 11–60) per column, every cell yellow/editable. Step
convention `GROUP · Step name`. Four starters ship in BOTH modes:

| Template | Steps | Groups |
|---|---|---|
| Digital Product (default) | 30 | BUILD 8 · QA 6 · ASSETS 6 · LISTING 5 · POST 5 |
| Physical / Handmade | 28 | SOURCE 5 · MAKE 6 · ASSETS 6 · LISTING 6 · POST 5 |
| Service / Custom Order | 20 | OFFER 5 · SETUP 5 · LISTING 4 · POST 6 |
| Quick List | 10 | MAKE 3 · LIST 4 · POST 3 |

**Checklist tab** — long format, one row per product × step:
`Product · Group · Step · Done(checkbox) · #(order) · Key(hidden,
=Product&"|"&order)`. Created by the intake flow; freely editable per
product afterward.

**Flows** (script, section 12): `Add Product…` opens a sidebar intake
form (name · template dropdown · status · price · target date) →
`createProductFromIntake` appends the Products row + the template's steps
as Checklist rows. `Save Steps as Template…` →
`saveStepsAsTemplateCore_(product, name)` writes a product's current
steps into the next free library column.

Computed columns on Products (locked):
- **Progress** `=COUNTIFS(chkProduct, name, chkDone, TRUE) / COUNTIF(chkProduct, name)` — each product against its OWN step count; blank when it has no steps
- **Next step** `=INDEX(chkStep, MATCH(name & "|" & MINIFS(chkOrder, chkProduct, name, chkDone, FALSE), chkKey, 0))` → "Done" when nothing unchecked
- **Days to target** `=target − TODAY()` + chip CF (On Track ≥ 7 · Fair 0–6 · Over < 0)

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
(Product View!C10) · `cc_products_list` (Products!B10:B259) ·
`cc_products_status` · `cc_products_table` (A10:O259) ·
`cc_templates_list` (Templates!B9:I9) · `cc_checklist`
(Checklist!A10:F7509) · `cc_channels_list` · `cc_channel_fees` ·
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
