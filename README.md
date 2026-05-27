# Column & Co. — The Foundation v2.1

A self-building Google Sheets household-budget template, driven entirely by
Apps Script. Running one function constructs the whole 14-tab workbook from
scratch — brand chrome, formatting, formulas, named ranges, charts, and
(optionally) the Marcus & Elena Brooks demo data — so the product is fully
reproducible from source instead of hand-built in the Sheets UI.

This implements the design handoff in `Column _ Co. Design System.zip`
(`design_handoff_foundation_v2/`).

## What it builds

14 tabs in order: **Start Here · Trends · Dashboard · Monthly Budget ·
Health Score · Goals · Transactions · Bank Import Guide · Net Worth ·
Accounts · Categories**, plus three hidden system tabs **_Engine ·
_Config · _Schema**.

Runtime features (the `💳 Column & Co.` menu):

- **Apply Theme** — 16 in-sheet palettes; retint the content area while the
  3-row brand chrome (Forest / Canopy / Gold) stays locked.
- **Apply Budget Profile** — 10 methodologies (Dave Ramsey → HCOL Renter →
  Custom), active one checkmarked; Custom edits persist to Document Properties.
- **Import Bank Transactions** — paste a CSV, header-sniff the bank format,
  auto-categorize via keyword rules, append to the ledger, surface income.
- **Clear Paste Zone · Renumber Ledger · Help…**
- **Setup ▸ Build workbook (mock / blank)** — the from-scratch builder.

`_Engine` is formula-driven (`SUMIFS` over Transactions), so every view
updates automatically as transactions are imported. The mock variant seeds a
6-month ledger whose monthly category sums reproduce the demo story through
those same formulas (May 2026: $10,230 income, $6,980 expenses, 31.8% savings).

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

In **Extensions ▸ Apps Script**, create one script file per `.gs` in
`apps-script/` (paste contents), add `Help.html`, and set the manifest to
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
| `00_constants.gs` | Brand, type, 16 palettes, 10 profiles, 20 categories, mock data |
| `01_helpers.gs` | Styling helpers + the theme registry |
| `02_chrome.gs` | 3-row brand chrome + footer |
| `03_build.gs` | `buildWorkbook()` orchestrator, named ranges, ordering |
| `04_data_tabs.gs` | _Config, _Schema, Categories, Accounts, Transactions, _Engine |
| `05_tabs_views.gs` | Start Here, Dashboard, Trends, Health Score, Net Worth |
| `06_tabs_actions.gs` | Monthly Budget, Goals, Bank Import Guide |
| `10_menu.gs` | `onOpen` / `onEdit` / `onSelectionChange`, menu |
| `11_theme.gs` | `applyTheme()` + theme menu |
| `12_profile.gs` | `applyProfile()`, Custom persistence + profile menu |
| `13_import.gs` | CSV import, paste-zone, ledger maintenance, help |
| `Help.html` | Sidebar help |

## Known Sheets-vs-mockup deltas

These follow the per-tab "doesn't translate to Sheets" notes in the handoff:

- **Fonts:** Playfair Display → **Lora**, Jost → **Roboto** (closest
  Sheets-native; documented in `_Schema`).
- **Palette picker** is the menu submenu (not a floating swatch button or a
  modal tile grid). Start Here still shows a 16-tile preview strip.
- **Profile picker** is the menu submenu (not the horizontal-scroll pill row;
  Sheets cells can't render rounded pills).
- **AI Insights / forecast / biggest-opportunity** copy is seeded from the
  mock story; wiring them to fully dynamic formulas is a follow-up.
- Native charts (donut, income-vs-expenses) float over cells and may need a
  small manual nudge after the first build.

*Column & Co. · Life, Organized.*
