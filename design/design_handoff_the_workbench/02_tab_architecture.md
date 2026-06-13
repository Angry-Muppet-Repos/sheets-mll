# 02 · Tab Architecture — The Workbench v1

15 tabs (12 visible + 3 system). Standard brand chrome rows 1–5, title
block rows 6–8, exactly as Foundation/Ledger `chrome_()` / `titleRow_()`
build them. Reuse those helpers unchanged.

**Tab order (bottom strip):**
Start Here · Dashboard · Pipeline · Product View · Trends · Sales Log ·
Marketing Log · Stats · Products · Checklist · Templates · Channels ·
_Engine · _Config (hidden) · _Schema (hidden)

Reuse legend: **[REUSE]** = lift the Foundation/Ledger pattern with renames
only. **[ADAPT]** = existing pattern, modified per spec. **[NEW]** = no
equivalent.

Scale rules that bind every tab here: products are rows, selectors are
dropdowns, rankings are top-N. See 01 § scale contract.

---

## 1 · Start Here — [ADAPT]
Foundation layout: palette tile picker (24), setup steps, LLM teaser.
- 6 steps reworded: Install script → Add channels → Add your first product
  → Tick steps as you build → Log sales as they land → Read the Dashboard.
- LLM teaser prompt: "Which three products earned the most net revenue per
  month since launch, and which listed product hasn't sold in 60 days?"

## 2 · Dashboard — [ADAPT]
Foundation Dashboard structure, portfolio-wide:
- Month pills + active month index at `N4` (named `cc_dashboard_month`),
  same seeding formula (newest engine month with revenue).
- KPI row: **NET REVENUE · UNITS SOLD · MARKETING SPEND · NET AFTER SPEND**
  (live vs-last-month delta sub-lines, Ledger pattern).
- **Top Products** table (10 rows): rank by net revenue for the active
  month via LARGE/MATCH over the engine product matrix — Product · Net ·
  Units · Share-of-portfolio bar (SPARKLINE) · Status chip (from Products).
- **Portfolio Snapshot** panel: Listed count · In-pipeline count · Net MTD
  · Best seller · Stalest listed product (longest since last sale) ·
  Sales rows this month.
- **Needs Attention** strip (replaces donut): top 5 active pipeline
  products by lowest progress — Product · Stage · Next step · Target chip.
- AI Insights panel: mock-gated exactly like the Ledger (mock copy in 04;
  blank uses the ASK/PASTE/START pattern with portfolio wording).

## 3 · Pipeline — [NEW] (computed, read-only — the PM view)
Everything here derives from the Products table. No inputs.
- **Stage bar**: counts per stage (Idea / Building / QA / Assets / Listing
  / Listed / Retired) as Forest-on-parchment figures.
- **In Flight** table (15 rows): active products (status not Listed and not
  Retired) ranked by progress descending — Product · Status · Progress %
  (SPARKLINE bar) · Next step (first unchecked step name) · Target date ·
  days-left chip (On Track ≥7 days · Fair 0–7 · Over when past).
- **Recently Listed** table (5 rows): most recent Launched dates, with
  week-one net.
- Implementation: LARGE/MATCH + INDEX over computed helper columns on
  Products (see 03). No QUERY-of-QUERY chains; everything indexes one
  helper block.

## 4 · Product View — [NEW] (the decision tab)
- **Selector**: yellow dropdown cell validated against `cc_products_list`
  (a dropdown, not pills — pills die at hundreds). Named
  `cc_selected_product`.
- KPI row for the selection: Net (active month) · Net lifetime · Units
  lifetime · Days since last sale.
- **Trend**: 12-month net SPARKLINE filling the panel height + scale
  anchors beside it (this month · peak with its month · avg active
  month — a sparkline can't draw an axis, so the anchors say what the
  bars are worth), computed on demand via SUMIFS over Sales Log for the
  selected product only (the scale trick: no per-product detail
  matrices in the engine).
- **Channel split** table: per channel — units, gross, fees, net (SUMIFS
  on demand).
- **Marketing vs. net** strip: spend lifetime + last-90-days vs. net same
  periods; caption verdict chip (Scale when net/spend ≥ 3 · Watch 1–3 ·
  Over when spend > net — reuse `statusChipCF_` with relabeled text).
- **Funnel** (from Stats): views → favorites → orders for the trailing 3
  logged months — conversion % and revenue per 100 views.
- **Checklist readout**: the selected product's stage, progress, and its
  next 3 unchecked steps (INDEX/MATCH against the Products row).
- DISCLAIMER-grade caption: figures are cash-basis from the Sales Log;
  stats are whatever the owner logged — no scraping, no API.

## 5 · Trends — [REUSE]
Ledger Trends verbatim with relabeled series: Net Revenue vs Marketing
Spend columns chart, Units line readout, top-category… replaced by
**top-product sparkline table (12 rows)**: the 12 highest products by
the ACTIVE dashboard month's net — name · 6-mo sparkline · latest month
· Δ vs first of the window (engine-backed).
6/12/24 window toggle at N7 (`cc_trends_window`), same pills + CF.

## 6 · Sales Log — [ADAPT of Ledger Transactions]
The append-only ledger of money landing. Columns:
`Date · Product (dropdown) · Channel (dropdown) · Units · Gross · Fees ·
Net (formula) · Notes · Month (hidden helper, YYYY-MM)`
- **Net formula** per row: if Fees blank → Gross − (Gross × channel fee %
  + flat fee × Units) from the Channels registry; else Gross − Fees.
  Owner can always overtype Fees with the real number from the payout.
- Header row 9, data rows 10+; capacity **10,000 rows**; validations
  prewired; filter + frozen header; `renumberLedger`-style maintenance
  reapplies formats/validations/Net formulas (menu: Renumber Sales Log).
- No CSV import in v1 (Etsy's order CSV differs per shop settings; v1.1
  candidate). Manual row per sale or per payout-day is the contract.

## 7 · Marketing Log — [NEW]
`Date · Product (dropdown, or "— Portfolio —") · Channel · Activity
(dropdown: Ads · Social · Email · Sale event · Price test · Other) ·
Spend · Result note · Month (hidden)`
- Capacity 2,000 rows. Spend rolls into the engine (portfolio × month and
  on-demand per product).
- "— Portfolio —" rows count toward portfolio spend but no product.

## 8 · Stats — [NEW] (optional-use funnel data)
One row per product per month, typed from Etsy/Shopify stats screens:
`Month (YYYY-MM dropdown-free text) · Product (dropdown) · Views ·
Favorites · Orders · Notes`
- Capacity 3,000 rows. Feeds Product View funnel + a Dashboard caption.
  Skipping it breaks nothing — every consumer IFERRORs to em-dash states.

## 9 · Products — [NEW] (the master table, slim)
One row per product — identity + computed; the steps live on the Checklist.
- Identity (frozen): `# (auto) · Product (yellow) · Status (dropdown: Idea /
  Building / QA / Assets / Listing / Listed / Retired) · Template
  (dropdown from the library, informational) · Price · Listing URL ·
  Target date · Launched date · Notes`
- **Computed block** (locked): Progress % and Next step (both pulled off
  the product's Checklist row by name MATCH — each Checklist row computes
  against its own section's header) · Days to target (chip CF:
  On Track ≥ 7 · Fair 0–6 · Over past) · Days since last sale · two
  hidden ranking helpers for Pipeline.
- Capacity `PRODUCT_CAPACITY` = **250 rows** (data rows 10–259). Filter on,
  identity frozen. Products are created by the intake form (💳 → Add
  Product…), which also inserts their Checklist row.

## 9b · Checklist — [NEW] (horizontal sections — the ticking surface)
Products as rows, steps as checkbox COLUMNS, tick across the row. One
**section per process template in use**, stacked down the tab. Section
anatomy (script-managed, found by scanning a hidden META column at BC):
- **Band** — merged Forest row: template name + LIVE step/product counts
  (formula). Theme role `primary`, regenerated by scan on every
  structural change.
- **Group bands** — merged colored segments (`BRAND.GROUP_FILLS` ramp)
  over the named step columns. Left labels (PRODUCT · PROGRESS · NEXT
  STEP) sit on this row, A:B merged so column B only ever holds names.
- **Header row** — step names at **45°**, 9pt, ~42px columns, a NOTE on
  every cell with the full `GROUP · Step` text. Slots beyond the named
  steps are **ghost columns** (gold dashed, pre-wired): typing a name
  adds the step to the whole section; renaming/blanking a header edits
  the process in place — no script involved.
- **Product rows** — `# (MATCH into Products) · Name · Progress · Next
  step` then 50 checkbox columns. Progress = `SUMPRODUCT((header<>"")*
  (ticks=TRUE)) / COUNTA(header)`; Next = first unchecked NAMED column.
  Formulas reference the section header row absolutely and keep tracking
  through row inserts.
- Layout: first section's header frozen + left block frozen (cols A–D);
  `tuneChecklistColumns_` shows the widest section's named columns + 2
  ghost slots and hides the rest (onEdit re-tunes when a header is
  typed). No filter on this tab (it would sort band rows into data) —
  ranking lives on Pipeline/Products. Row budget `CHK.ROW_BUDGET` =
  **400** (sections + 250 product rows). 55 columns — `ensureGrid_`
  REQUIRED before any write.
- Blank build ships ONE empty Digital Product section with an
  "Add your first product" caption; sections for other templates
  materialize on first use. Mock build ships two sections (04).

## 9c · Templates — [NEW] (the process library)
Templates as columns: names row 9 (yellow), up to **50 step cells** per
column (rows 11–60), `TEMPLATE_SLOTS` = **8** columns. Step cells read
`GROUP · Step name` (split on the first middle dot; no dot ⇒ GENERAL).
- Seeded in BOTH modes with four starters: **Digital Product** (30 steps,
  the default) · **Physical / Handmade** (28) · **Service / Custom Order**
  (20) · **Quick List** (10).
- `Add Product…` (sidebar intake form: name, template, status, price,
  target) writes the Products row and inserts the product's row into its
  template's Checklist section — creating the section on first use.
- `Add Process…` (sidebar wizard, NEW) — the guided builder on a hybrid
  waterfall · iterative foundation: name the process, pick a kind
  (digital download · physical/made-to-order · service · blank — each
  seeds a phase plan), arrange the phase waterfall, then walk each phase
  naming steps, with a one-click **review loop** (review › fix ›
  re-check) for the iterative part. Saves a `GROUP · Step` column into
  the library (`createProcessFromWizard`); optional chain into Add
  Product…
- `Save Steps as Template…` reads a SECTION's current headers (renames,
  ghost-added steps and all; groups carried from the group bands) into
  the next free column — evolved processes meld back into the library.

## 10 · Channels — [REUSE registry pattern]
Rows 10–21 (12 slots): `Channel · Fee % · Flat fee/order · Active · Notes`.
Seeded with Etsy / Shopify / Gumroad / Direct rows in BOTH modes (defaults
with a "verify your plan's fees" caption — fee schedules change; verified
at build time and editable forever). Named `cc_channels_list`,
`cc_channel_fees`.

## 11 · _Engine — [ADAPT] (hidden; the only cross-product matrices)
24 month columns B:Y, months YYYY-MM in row 1, rolling window (reuse
`monthCodesEndingAt_` / `rollEngineForward_`).
- Rows 2–9: **portfolio rows** — GrossRevenue · Fees · NetRevenue · Units
  · MarketingSpend · NetAfterSpend · SalesRows · ActiveProducts (SUMIFS /
  COUNTIFS over the logs).
- Rows 12–23: **channel net × month** (12 channel slots, names from
  Channels registry; IF-guarded when blank).
- Rows 30–(29+`PRODUCT_CAPACITY`): **product net × month matrix** — one
  SUMIFS row per product slot, IF($A="" guarded. This is the ONLY
  per-product matrix; it powers Top Products, Trends sparklines, and
  staleness. Default 250 rows × 24 cols ≈ 6,000 guarded SUMIFS — heavy but
  workable; the capacity constant is the documented scale dial.
- Named `cc_engine_months` (B1:Y1), `cc_engine_portfolio` (B2:Y9),
  `cc_engine_products` (the matrix block).

## 12 · _Config — [REUSE]
24 palettes verbatim (rows 3–26, presets lane kept clear — Ledger layout).
Below: the **launch-step template** (30 rows: group · step name · column
letter) so _Schema and Help can describe it, and active rows
(`active_palette` B40).

## 13 · _Schema — [ADAPT]
Workbench prose: tabs, conventions (cash basis, computed Net, checkbox
pipeline, capacity constants), typical questions ("Which products should I
retire?", "Where does ad spend lose money?", "What's my next action per
product?"). Mock-gated demo-owner line; no line begins with `=`.

---

## What does NOT exist in v1 (deliberate cuts)
- No Etsy/Shopify CSV or API import — manual logs are the contract (v1.1
  candidate: order-CSV paste mapper, reusing the Ledger import skeleton).
- No per-product P&L with COGS — that's The Ledger's job; the Workbench
  tracks revenue-side and spend. The two link by owning both.
- No time tracking, no kanban drag-and-drop theater, no Gantt. Stage +
  next step + target date answer the actual question: "what do I do next?"
