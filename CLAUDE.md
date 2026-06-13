# Claude — read this first

## What this repo is

This is the **Column & Co. — The Foundation v2.1** project. A 14-tab Google
Sheets household-budget product sold on Etsy. The deliverable buyers download
is `ColumnCo_Foundation_v2.gs` + a workbook (`.xlsx` or Sheets template) in
two variants: **MOCK_DATA** and **BLANK**.

Dan is the founder and sole decision-maker, including pricing.

## Repo layout

- `apps_script/ColumnCo_Foundation_v2.gs` — the production script (source of truth)
- `design/` — the full Column & Co. design system, committed as plain files
  (the old "Column _ Co. Design System.zip" is retired — read these directly):
  - `design/design_handoff_foundation_v2/` — the v2.1 build spec (product
    brief, design tokens, brand chrome, 12 per-tab specs, apps-script
    catalog, data model, QA checklist, reference React prototype + screenshots)
  - `design/assets/` — production logo SVGs (lockups, icons, shop-icon-500)
  - `design/colors_and_type.css` + `design/styles.css` + `design/_ds_manifest.json`
    — the design-token system (brand colors, navy alt colorway, all 24
    in-sheet palettes as CSS scopes, type scale, spacing, shadows)
  - `design/ui_kits/foundation/` — hi-fi React recreation of the product
    (24-palette picker, all components) — the starting point for mocking
    any NEW product's tabs
  - `design/ui_kits/etsy_listing/` — Etsy listing pack: banner 3360×840,
    shop icon, 3 thumbnail directions, watermark spec, copy
  - `design/site/` — the columnandco.com website source (UNPUBLISHED):
    Home, Product, Money problem page, IA wireframes, 39-page Product Guide
  - `design/listing/`, `design/preview/`, `design/export/`, `design/handoff/`
    — listing canvas, component preview cards, prototype export, profile data

## Required reading at the start of every session

Before making any change — even a tiny one — read at minimum:

- `design/design_handoff_foundation_v2/README.md` — orientation
- `design/design_handoff_foundation_v2/01_product_brief.md` — buyer, wedge, voice
- `design/design_handoff_foundation_v2/05_apps_script.md` — function catalog
- `design/design_handoff_foundation_v2/06_data_model.md` — named ranges
- the specific `04_tabs/*.md` for whichever tab the change touches

These specs are the source of truth. Memory from past sessions is not.

## Source of truth: the bound .gs file

The production Apps Script lives at `apps_script/ColumnCo_Foundation_v2.gs`
(committed to this repo). Edit it directly when fixing bugs — do not
ship "drop-in patches" or new helper files unless the user asks for that
format. Push the updated full file; Dan will paste it back into the
bound workbook editor and re-run `Setup → Build workbook (mock data)`
and `Setup → Build workbook (blank)` to regenerate the shipping templates.

Files in the .gs are organized into numbered sections (00 · Constants,
01 · Helpers, 02 · Brand chrome, 03 · Build orchestrator, 04 · Data + system
tabs, 05 · View tabs, 06 · Action tabs, 10 · Menu + triggers, 11 · Theme
engine, 12 · Budget-profile engine, 13 · Bank CSV import) — grep by
function name to find what you need.

If Dan edits the .gs in the workbook editor between sessions, he should
re-paste the latest version here so the repo stays in sync. If the two
diverge, the workbook is ground truth.

## Confirmed workbook facts (verified May–June 2026)

- Rows 1-5 of every tab: locked brand chrome (Forest header, Canopy band,
  Gold rule, spacer). Title block at rows 6-8.
- **Categories tab** (built by `buildCategories_` in section 04):
  - Row 9: section labels. Row 10: column headers.
  - Rows 11-30: 20 fixed categories. Type col B = `Expense` (dropdown).
  - Rows 31-35: 5 editable custom slots. Yellow Name + yellow Type
    dropdown (`Expense` / `Income` / `Transfer`). Wired by
    `applyCategoryValidation_(sheet, 11)` which covers all 25 rows.
  - Rows 36-37: Income / Transfer system rows (locked).
  - Cols E/F/G rows 11+: keyword rules. Named range `cc_keyword_rules`.
- Buyers never run setup. Everything ships configured by `buildWorkbook(mode)`
  which is invoked via `Setup → Build workbook (mock data)` / `(blank)`.
- June 2026 cleanup: blank-build mock leakage purged (Net Worth investments,
  AI Insights, donut data, Bank Import prefill, _Schema demo line) and
  blank-state edge cases gated (Health Score has-data gate at N9, Goals
  source-dropdown IFERROR, live KPI delta sub-lines). Both build modes must
  be verified after any change to a build function.

## How to work on this product

1. Read README + relevant spec files first.
2. Make the smallest change that satisfies the request. No surrounding
   cleanup, no adding menu items, no diagnostic helpers unless asked.
3. If the change needs to touch the workbook at runtime, route it through
   `buildMockWorkbook` / `buildBlankWorkbook` so buyers don't see it. Never
   add buyer-facing "setup" menu items.
4. Anything substantive — verify with Dan before shipping. Speculative
   commits are noise.

## Current product state (June 2026)

- **The Foundation v2.1** — listed on Etsy. Do not touch its files in
  other products' work.
- **The Payoff v1** (in design — NOT yet built) — the next product, a
  debt-payoff system. Brief + specs in `design/design_handoff_the_payoff/`
  (01 brief · 02 tabs · 03 data model · 04 mock+QA · 05 gamification —
  LOCKED 2026-06-13). The motivational layer is the differentiator:
  **The Temple** (debts become columns; Column & Co.'s mark is a column),
  the **Stylobate** (a customizable savings buffer as the temple's base),
  **The Hall** (trophy room), the strategy **Race**, the **Time Machine**
  scrubber, pre-written **Letters**, and data-derived streaks — full
  anatomy vocabulary Stylobate·Column·Capital·Entablature·Pediment.
  Dan approved the full all-tabs mockup (`design/ui_kits/the_payoff/
  full_mockup.html`, the canonical navigable prototype; the `concepts_*.html`
  are the iteration history). Color decision LOCKED: the 24 palettes
  theme chrome/KPIs/tables only — the temple/wall/Hall/stylobate are a
  FIXED stone-and-gold material set + fixed debt ramp (05 § color rule).
  Interest is engine-estimated (balance×APR/12); the owner types only
  payment amount + the monthly statement balance (03). **BUILT (2026-06-13):**
  `apps_script/ColumnCo_Payoff_v1.gs` (12 tabs) + `tools/verify_payoff.js`
  (harness layers a–h + a MATH LAYER that re-implements the 03 amortization
  in JS and asserts the .gs engine twin's months/interest/payoff-order/
  debt-free date match exactly — incl. the locked 04 truths: snowball
  47 mo / $7,487 · avalanche saves $972 · +$50 2mo / +$100 6mo · $26,772
  saved · $15,559 still owed). Hidden `_Engine` is SIX live-formula blocks
  (snowball·avalanche·custom·+$50·+$100·minimums-only-baseline) at 120×25
  + a registry mirror; the monument is painted cell grids in a fixed
  stone-and-gold set (section 00 constants, never palette-derived). Build
  decision logged: the baseline is its own iterative block (the 03 "no
  sixth block / closed-form" note was an optimization; an iterative block
  is exact + auditable + matches the math layer). NOT yet live-QA'd by Dan
  — the replay/Time-Machine repaint + onEdit re-anchor are live-only
  (static + math verified, never live-executed). Letters (sealed notes) +
  grace tokens are specified in 05 but deferred from v1 (noted in handback).
- **The Ledger v1** (`apps_script/ColumnCo_Ledger_v1.gs`) — merged via
  PR #2, statically verified, paused before Dan's live QA. NOT yet
  listed — it has never been live-QA'd.
- **The Workbench v1** (`apps_script/ColumnCo_Workbench_v1.gs`) — PR #3
  open. Checklist v3 (horizontal template sections + Add Process wizard)
  built June 2026 after Dan's design pick and visual-mockup approval,
  then LIVE-QA'D BY DAN through five fix rounds (rebuild teardown,
  geometry normalization, future-dated mock sales, alignment/chrome
  polish, Pipeline launched-column drift — all in PR #3 history).
  Dan paused development 2026-06-12 satisfied with the workbook.
  Remaining before listing (Dan's levers): merge PR #3, write the
  Product Guide (requirements recorded in
  `design_handoff_the_workbench/06_listing_facts.md`), listing
  screenshots per 04, pricing call. Harness layers a–h green,
  including the rebuild-resilience and cross-sheet
  reference-inventory layers.

Hard-won build lessons (apply to every product's .gs):
- Grow the grid (`ensureGrid_`) before writing past 1,000 rows / 26
  columns — out-of-grid writes surface as the opaque "Service
  Spreadsheets failed while accessing document" error.
- Rebuilds happen IN PLACE over old workbooks: `clear()` removes neither
  filters, merges, validations, row heights, column widths, nor hidden
  rows/columns. `getOrCreateSheet_` must tear down AND normalize
  geometry first — a stale filter makes any merge that crosses its
  border throw ("can't merge cells that cross the borders of an existing
  filter"), and a stale 110px row height resurfaced as a giant empty
  first data row (both June 2026 live-QA failures). The Workbench
  harness models filter semantics and rebuilds over a stale workbook
  (layer g). Mock data generators must never produce future dates —
  staleness math goes negative.
- Land huge mutations in slabs with flushes (`forEachSlab_`); toast
  per-tab progress so failures name their tab.
- Static-verification harnesses live in `tools/` (verify_workbench.js,
  verify_ledger.js): stub SpreadsheetApp with grid enforcement + value
  store. Keep them green; update their contracts with the design.
- Mock the UX in `design/ui_kits/<product>/` and get Dan's visual
  approval BEFORE writing tab builders — layout changes that skip the
  mockup gate get rejected in live QA (see the Workbench checklist v2).

## New products

Future Column & Co. products (single evocative names: The Ledger, The
Planner, etc. — never "Column & Co. [Category] Template") reuse this stack:
- Brand chrome, theme engine, and helper sections of the .gs are the
  starting skeleton for any new product's script.
- `design/ui_kits/foundation/` is the component library for mocking new
  tabs before building them in Apps Script.
- Each product gets its own `design_handoff_<product>/` folder following
  the same structure (brief → tokens ref → per-tab specs → data model → QA).

## Branch policy

Develop on the feature branch specified in the session prompt. Reset/force-push
only with explicit permission. Never push to main without explicit permission.
