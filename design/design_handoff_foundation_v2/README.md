# Handoff: The Foundation v2.1 — Column & Co. Household Budget System

A complete developer handoff package for rebuilding **The Foundation v2.1** — a 14-tab Google Sheets household budget template — from scratch.

---

## ⚠ Read this first

The HTML files in `reference/` are **design references**, not production code. They are a React + Babel prototype that renders the entire sheet faithfully in a browser so the visual + interaction design can be reviewed. **Do not ship the HTML.** The job is to recreate this design in the target shipping environment:

- **Primary target — Google Sheets** with an Apps Script `.gs` file driving the menu, theming, bank import, profile application, etc. This is the deliverable the buyer downloads from Etsy.
- **Secondary target — Excel `.xlsx`** with named ranges, XLOOKUP, and Data Validation. No script layer. Same visual structure, fewer interactions.

The product currently ships as `the_foundation_v2_BLANK.xlsx` + `ColumnCo_Foundation_v2.gs`. This handoff is for the **next version** (v2.1) which adds 5 new budget profiles, the 24-palette tile picker, an AI Insights panel on Dashboard, sparklines on Trends, and several other documented upgrades.

---

## Fidelity

**High-fidelity (hifi).** Every color, font, spacing value, palette, mock-data figure, and Apps Script behavior in `reference/` is intentional and matches either the brand guidelines or the existing shipping product. Pixel-fidelity to the HTML mockup is the goal for the Sheets implementation, *within the constraints of what Google Sheets can render*.

The mockup includes a few elements that don't translate 1:1 to Sheets — those are called out in the relevant per-tab spec under "Spreadsheet implementation notes."

---

## How to use this folder

1. **Start with `01_product_brief.md`** to understand what's being built, who buys it, and what the wedge is. Don't skip — the design decisions only make sense once you know the buyer.
2. **Read `02_design_tokens.md` and `03_brand_chrome.md`** to internalize the visual system. The 3-row brand chrome (Forest header → Canopy sub-band → Harvest Gold rule) is non-negotiable — it appears on every tab.
3. **Per-tab specs in `04_tabs/`** — twelve files, one per tab, each describing layout, components, formulas, named ranges, conditional formatting, and which figures/states come from where.
4. **`05_apps_script.md`** is the Apps Script architecture — menu structure, every function the existing `.gs` exposes, plus the new functions for v2.1.
5. **`06_data_model.md`** is the spreadsheet-side data model — every named range, the `_Engine` aggregation, the `_Config` palette table, the `_Schema` LLM-readable hidden tab.
6. **`07_qa_checklist.md`** is a runnable QA pass for the finished workbook.
7. **`reference/`** holds the HTML prototype. Open `reference/index.html` in a browser to see the design live; click each tab in the bottom strip and switch palettes via the top-right swatch button to verify your build matches.
8. **`data/profiles.json`** and **`data/palettes.json`** are canonical data tables. Use these to seed the corresponding hidden sheets — don't retype figures from the docs.

---

## Folder map

```
design_handoff_foundation_v2/
├── README.md                            ← you are here
├── 01_product_brief.md
├── 02_design_tokens.md
├── 03_brand_chrome.md
├── 04_tabs/
│   ├── 00_start_here.md
│   ├── 01_trends.md
│   ├── 02_dashboard.md
│   ├── 03_monthly_budget.md             ← v2.1 hero change (10 profiles)
│   ├── 04_health_score.md
│   ├── 05_goals.md
│   ├── 06_transactions.md
│   ├── 07_bank_import.md
│   ├── 08_net_worth.md
│   ├── 09_accounts.md
│   ├── 10_categories.md
│   └── 11_engine.md
├── 05_apps_script.md
├── 06_data_model.md
├── 07_qa_checklist.md
├── data/
│   ├── profiles.json                    ← 10 budget profiles × 20 categories
│   └── palettes.json                    ← 24 in-sheet palettes
├── apps_script/
│   └── applyProfile.gs                  ← drop-in patch for the profile picker
└── reference/                           ← HTML mockup (visual source of truth)
    ├── index.html
    ├── data.js
    ├── components.jsx
    ├── chrome.jsx
    ├── tabs-overview.jsx
    ├── tabs-analysis.jsx
    ├── tabs-actions.jsx
    ├── colors_and_type.css
    └── screenshots/                     ← flat PNG visual index
        ├── 00-start-here.png
        ├── 00-start-here-palette-picker.png
        ├── 02-dashboard.png
        ├── 03-monthly-budget.png
        └── palette-retint-example.png
```

## Visual index

The `reference/screenshots/` folder has flat PNGs of the most-changed tabs in v2.1, captured from `reference/index.html`:

- **`00-start-here.png`** — Start Here with the hero greeting + setup guide
- **`00-start-here-palette-picker.png`** — same tab, 24-palette picker modal open
- **`02-dashboard.png`** — Dashboard with 4 KPI cards + Top Spending table
- **`03-monthly-budget.png`** — Monthly Budget showing the new slim pill-row profile picker (10 profiles)
- **`palette-retint-example.png`** — same dashboard, palette swapped, to show how retinting works

For the other 8 tabs (Trends, Health Score, Goals, Transactions, Bank Import Guide, Net Worth, Accounts, Categories, _Engine), open `reference/index.html` in a browser and click the tab in the bottom strip to capture your own. The HTML is the source of truth — screenshots are a quick-scan accelerator, not the spec.

---

## What ships in v2.1 (vs. the current v2)

This is the buildable diff between today's shipping product and what this handoff describes:

1. **Monthly Budget — 5 new profiles** (Anti-Budget, Kakeibo, New Parent, Self-Employed, HCOL Renter). Profile picker becomes a menu submenu instead of a single dropdown cell. Active profile is checkmarked. See `04_tabs/03_monthly_budget.md`.
2. **Dashboard — AI Insights panel** (Leak / Subs / Win callouts) and donut chart with 12-segment color ramp. See `04_tabs/02_dashboard.md`.
3. **Trends — 6-month sparklines** on every category row, status-colored, with delta chips. See `04_tabs/01_trends.md`.
4. **Goals — forecast strip** ("On track to hit by Oct 2026 — one month late. Bump $200 → $275 to hit Sep."). See `04_tabs/05_goals.md`.
5. **Health Score — delta arrows** (`72 → 78`) on the biggest-opportunity callout. See `04_tabs/04_health_score.md`.
6. **Net Worth — hero sparkline + asset/liability split** on top, tables below. See `04_tabs/08_net_worth.md`.
7. **Bank Import Guide — real-feel paste zone** with realistic 5-row CSV preview. See `04_tabs/07_bank_import.md`.
8. **24-palette tile picker** as a hero feature (always-visible top-right swatch button, opens a 24-tile grid with live previews). See `03_brand_chrome.md`.

Everything else from v2 (the 14-tab architecture, the `💳 Column & Co.` menu, bank CSV import, the mock-data story, the Health Score scale, the 24 palette tokens, the 3-row brand chrome) is preserved unchanged.

---

## Substitutions and unknowns

| Item | Status | Action for Claude Code |
|---|---|---|
| Original `ColumnCo_Foundation_v2.gs` source | **Not bundled** — referenced in `05_apps_script.md`. Rebuild the menu structure and function signatures from that spec; copy the runtime behavior described per-function. | Implement the .gs from spec; the per-function descriptions are detailed enough. |
| Original `the_foundation_v2_MOCK_DATA.xlsx` | **Not bundled** — the mock-data story is fully reconstructed in `reference/data.js` and called out in each tab spec. | Use `data.js` as the seed data. Same buyer (Marcus & Elena Brooks), same 6-month story, same 8 accounts, same 5 investments. |
| Real Etsy listing copy file | Not provided | Use brand voice rules from `01_product_brief.md`; the existing voice notes are sufficient. |
| Logo SVG files | Not provided here — referenced in the parent project's `assets/`. | If needed for sheet watermarks, generate from the spec in `01_product_brief.md`: 3×5 grid, columns 1 = Harvest Gold (2-1-2 vertical rhythm), columns 2-3 = Forest at 0.85 / 0.45 / 0.18 opacity. |

---

## License & ownership note

Column & Co. is operated by Dan (founder). Clint is business partner. This handoff is for the Column & Co. development workflow and is not for redistribution.

*Column & Co. · Life, Organized.*
