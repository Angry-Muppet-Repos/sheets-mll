# Column & Co. — The Foundation v2.1

A self-building Google Sheets household-budget template, driven entirely by
Apps Script. Running one function constructs the whole 14-tab workbook from
scratch — brand chrome, formatting, formulas, named ranges, charts, and
(optionally) the Marcus & Elena Brooks demo data — so the product is fully
reproducible from source instead of hand-built in the Sheets UI.

This implements the design handoff in `Column _ Co. Design System.zip`
(`design_handoff_foundation_v2/`).

## What it builds

11 visible tabs in order: **Start Here · Trends · Dashboard · Monthly Budget ·
Health Score · Goals · Transactions · Bank Import Guide · Net Worth ·
Accounts · Categories**, plus three hidden system tabs **_Engine · _Config ·
_Schema**.

Runtime features (the `💳 Column & Co.` menu):

- **Add Account…** — prompt for a new account name; appends to the Accounts
  list and jumps the cursor to Starting Balance.
- **Import Bank Transactions** — paste a CSV (or table), header-sniff the
  bank format, auto-categorize via ~80 keyword rules, dedup against the
  existing ledger, append, surface income + uncategorized merchants for
  review.
- **Clear Paste Zone · Recategorize Ledger from Rules · Sort Transactions by
  Date · Renumber Ledger · Help…**
- **Apply Theme** — 24 in-sheet palettes; the entire brand chrome plus every
  internal Forest panel retint together via the theme registry.
- **Apply Budget Profile** — 10 methodologies (Dave Ramsey → HCOL Renter →
  Custom). Picking a profile writes the locked Preset column; per-category
  Override values persist independently per profile in Document Properties.
- **Setup ▸ Build workbook (mock / blank)** — the from-scratch builder.

`_Engine` is formula-driven (`SUMIFS` over Transactions), so every view
updates automatically as transactions are imported. The mock variant seeds a
6-month ledger whose monthly category sums reproduce the demo story through
those same formulas (May 2026: $10,230 income, $6,980 expenses, 31.8%
savings).

Key tab features:

- **Transactions** — native per-column filter / sort icons on the header row;
  newest-first by default; 20 fixed + 5 user-named custom categories in the
  dropdown.
- **Monthly Budget** — locked **Preset %** column + yellow editable
  **Override %**, with Target / Target $ / Δ derived; overrides persist
  per-profile so the buyer's Dave-Ramsey-with-tweaks survives a switch to
  FIRE-and-back.
- **Bank Import Guide** — paste zone, account validation, dedup, two review
  queues (Review Income, Uncategorized Merchants → click a category dropdown
  to save a keyword rule and recategorize matching past TX in one shot).
- **Dashboard** — month picker drives all KPIs, Top Spending (top 8 dynamic),
  and Month Snapshot (Income/Expenses/Net/Savings Rate from `_Engine`; Avg
  Daily / TX count / Largest Expense from the live ledger).
- **Goals** — type-aware (Spending Limit / Savings Target / Debt Payoff /
  Savings Rate); Current/Status/% Complete computed; Forecast strip projects
  months-to-target at current cash-flow pace.

## Deploy

### Option A — clasp (recommended)

```bash
cd apps-script
cp .clasp.json.example .clasp.json   # paste your bound-script ID
clasp push
```

Create the bound script first: in a new Google Sheet, **Extensions ▸ Apps
Script**, copy the Script ID from **Project Settings**, then `clasp push`.

### Option B — manual paste

In **Extensions ▸ Apps Script**, paste the contents of `apps-script/dist/Code.gs`
into a single script file (the dist is a hand-concatenated bundle of all 11
source `.gs` files), add `Help.html`, and set the manifest to
`appsscript.json`.

### Then build

1. Reload the spreadsheet. Authorize when prompted (scope:
   `spreadsheets.currentonly` only).
2. **💳 Column & Co. ▸ Setup ▸ Build workbook (mock data)** — or run
   `buildMockWorkbook` from the editor. Use `buildBlankWorkbook` for the
   empty buyer variant.

## File map

| File | Purpose |
|---|---|
| `appsscript.json` | Manifest (V8, narrow OAuth scope) |
| `00_constants.gs` | Brand, type, 24 palettes, 10 profiles, 20 categories, mock data |
| `01_helpers.gs` | Styling helpers + the theme registry |
| `02_chrome.gs` | 3-row brand chrome + footer |
| `03_build.gs` | `buildWorkbook()` orchestrator, named ranges, ordering |
| `04_data_tabs.gs` | _Config, _Schema, Categories, Accounts, Transactions, _Engine |
| `05_tabs_views.gs` | Start Here, Dashboard, Trends, Health Score, Net Worth |
| `06_tabs_actions.gs` | Monthly Budget, Goals, Bank Import Guide |
| `10_menu.gs` | `onOpen` / `onEdit` / `onSelectionChange`, menu |
| `11_theme.gs` | `applyTheme()` + theme menu |
| `12_profile.gs` | `applyProfile()`, override persistence + profile menu |
| `13_import.gs` | CSV import, dedup, paste-zone, ledger maintenance, help |
| `Help.html` | Sidebar help |
| `dist/Code.gs` | Hand-concatenated single-file bundle (paste target) |

See `CLAUDE.md` for development conventions (the dist concat rule, column-
index gotchas, no-MOCK-outside-input-tabs invariant, etc.).

## Known Sheets-vs-mockup deltas

These follow the per-tab "doesn't translate to Sheets" notes in the handoff:

- **Fonts:** Playfair Display → **Lora**, Jost → **Roboto** (closest
  Sheets-native; documented in `_Schema`).
- **Palette picker** is the menu submenu (not a floating swatch button or a
  modal tile grid). Start Here still shows a 24-tile preview strip.
- **Profile picker** is the menu submenu (not the horizontal-scroll pill row;
  Sheets cells can't render rounded pills).
- **AI Insights** copy on the Dashboard is still seeded from the mock story;
  wiring to live formula-driven leak/subscription/win detection is in
  `NEXT_STEPS.md`.
- **Net Worth 6-month sparkline** is static (the rest of the Net Worth hero
  is live). True history needs a daily/monthly balance-snapshot job — also
  in `NEXT_STEPS.md`.
- Native charts (donut, income-vs-expenses) float over cells and may need a
  small manual nudge after the first build.

*Column & Co. · Life, Organized.*
