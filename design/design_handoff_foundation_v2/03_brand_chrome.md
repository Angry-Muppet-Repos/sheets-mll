# 03 · Brand Chrome — the 3-row letterhead pattern

Every tab in The Foundation v2.1 opens with a **3-row chrome** at the very top. This is the brand's signature "letterhead pattern" — non-negotiable, identical across all 12 visible tabs, and locked in brand colors (palette swaps do NOT retint the chrome).

There are also two surrounding contexts to render:

1. **Above the sheet itself** — the Google Sheets browser UI (URL bar, share button, file menu, formula bar). The HTML mockup faithfully recreates these for screenshot purposes. In the real product these are just Google Sheets — the chrome we control sits underneath.
2. **The bottom of the screen** — the tab strip. Google Sheets renders this natively; we don't draw it. But the **tab order, names, and the `_Engine` tab being marked as system** are part of the product spec.

This doc covers the in-sheet chrome we control, plus the bottom tab strip ordering, plus the fake `💳 Column & Co.` Apps Script menu.

---

## The 3-row chrome

Visualized:

```
Row 1  ████████████████████████████████████████████████  ← Forest (#1C3D2E), 64–72px tall
Row 2  ████████████████████████████████████████████████  ← Canopy (#2D5C45), ~32px tall
Row 3  ████████████████████████████████████████████████  ← Harvest Gold (#C5A95A), 3px tall
```

Then the content of the tab starts.

### Row 1 — Forest header

- Full-bleed Forest (`#1C3D2E`)
- 64–72px tall (8 rows in a sheet with default row height 21px works out close — use merged cells `A1:Z2` or wider, depending on the tab's column count)
- **Left:** the logo lockup — the 3×5 grid mark + "Column & Co." in Playfair Display 700, 32px, Parchment color (`#FAF8F2`). Tagline beneath in Jost 500, 10px, Harvest Gold, ALL CAPS with `0.2em` letter-spacing: `LIFE,  ORGANIZED.`
- **Right:** the breadcrumb — `The Foundation v2  ·  <Tab Name>` in Jost 400, 12px, Parchment at 85% opacity. The `·` is the brand middle-dot, with spaces.

#### Sheet implementation

Use a merged cell across rows 1–2, all columns the tab uses. Set the background fill to Forest. Insert the logo SVG as an over-cell image (`SpreadsheetApp.getActive().getSheetByName('Dashboard').insertImage(...)`) anchored to A1, or use the imported logo PNG. The breadcrumb is right-aligned text in the merged cell.

### Row 2 — Canopy sub-band

- Full-bleed Canopy (`#2D5C45`)
- ~32px tall (1–2 sheet rows, depending on row-height choices)
- **Empty visually** — its job is to separate the brand mark from the gold rule and let the chrome breathe. Some tabs (Start Here, Dashboard) place a small section sub-label here in Harvest-Gold tracked-out type ("SETUP GUIDE · STEP 1 OF 6", "VIEWING MONTH · MAY 2026") right-aligned at 9.5px Jost 500.

### Row 3 — Harvest Gold accent rule

- Full-bleed Harvest Gold (`#C5A95A`)
- **Exactly 3px tall** — this is the brand's signature accent rule. Don't approximate as 1 sheet row (too tall) — use Apps Script to set the row height to 3px:
  ```javascript
  sheet.setRowHeight(3, 3);
  ```
- No content. It's a visual divider only.

### After row 3

The tab content begins. The first row of content sits **24px** below the gold rule. In sheet terms, that's typically one empty row at default height, then the first content row.

---

## Footer (every tab)

A thin Forest bar at the bottom of every tab. Same color as Row 1 (`#1C3D2E`), 28–36px tall. Content centered or left-aligned:

```
The Foundation v2.1  ·  columnandco.com  ·  Do not distribute without license
```

Jost 400, 10px, Parchment at 60% opacity, letter-spacing `0.04em`. Middle-dots with spaces.

---

## The `💳 Column & Co.` Apps Script menu

This is the buyer's primary interaction surface. Apps Script's `onOpen()` builds the menu; it appears in the Google Sheets menu bar between **Extensions** and **Help**.

### Menu structure

```
💳 Column & Co.
├── Import Bank Transactions
├── Clear Paste Zone
├── ─────────
├── Apply Theme  ▶
│   ├── ✓ Light
│   ├──   Warm Greige
│   ├──   Cool Slate
│   ├──   Sage
│   ├──   Espresso
│   ├──   Maize & Navy
│   ├──   Scarlet & Gray
│   ├──   Orange & Navy
│   ├──   Green & Gold
│   ├──   Purple & Gold
│   ├──   Crimson & White
│   ├──   Garnet & Gold
│   ├──   Forest & White
│   ├──   Royal & Gold
│   ├──   Silver & Black
│   └──   Custom…
├── Apply Budget Profile  ▶                          ← NEW IN v2.1
│   ├── ✓ Dave Ramsey
│   ├──   50/30/20
│   ├──   FIRE
│   ├──   Zero-Based
│   ├──   Anti-Budget                                ← NEW
│   ├──   Kakeibo                                    ← NEW
│   ├──   New Parent                                 ← NEW
│   ├──   Self-Employed                              ← NEW
│   ├──   HCOL Renter                                ← NEW
│   ├──   Custom
│   ├── ─────────
│   └──   Save current values as Custom…             ← NEW
├── ─────────
├── Renumber Ledger
├── ─────────
└── Help…
```

- **Checkmark prefix** (`✓ `) shows the currently active selection in both submenus. Inactive items use three spaces for indent alignment (Apps Script menus don't support per-item icons, so this is the convention).
- **Separators** are `menu.addSeparator()`.

See `05_apps_script.md` for the function signatures and per-item behavior.

---

## Bottom tab strip — tab order

Google Sheets renders the tab strip natively. The order matters — it's the buyer's navigation. **Don't alphabetize.** The order tells a story:

| # | Tab id | Label | Notes |
|---|---|---|---|
| 1 | `start` | Start Here | First open lands here. Setup checklist + LLM prompt block. |
| 2 | `trends` | Trends | 6/12/24-month sparklines + income vs expenses chart. |
| 3 | `dashboard` | Dashboard | KPI cards + top spending + AI Insights panel. |
| 4 | `budget` | Monthly Budget | 20 categories × profile picker. v2.1 hero change. |
| 5 | `health` | Health Score | Composite 0–100 + 5 indicators + delta arrows. |
| 6 | `goals` | Goals | 7 goal types + forecast strip. |
| 7 | `tx` | Transactions | The ledger. 5,000-row capacity. |
| 8 | `import` | Bank Import Guide | Paste zone + 5-row CSV preview + review block. |
| 9 | `networth` | Net Worth | Hero block + budget accounts + investments. |
| 10 | `accounts` | Accounts | Register of every account. Feeds Net Worth. |
| 11 | `cats` | Categories | Category list + keyword rules for auto-categorization. |
| 12 | `engine` | _Engine | **System tab — hidden by default.** 6/24-month aggregates. Buyer should never need to open it. |

Two additional hidden tabs (no entries in the visible strip):

- **`_Config`** — palette table, profile table, named ranges. Read by `applyTheme()` and `applyProfile()`.
- **`_Schema`** — LLM-readable plain-English description of the workbook structure. The "AI-ready" wedge.

### How to color the active tab

Google Sheets tabs can have a color. Apply Forest (`#1C3D2E`) to the active tab on open. Either let the buyer navigate freely (Sheets handles active state visually with an underline anyway) or use a `Sheet.activate()` + recolor pattern on tab switches.

---

## Per-tab title row

Below the gold rule, every content tab has a **title row** identifying the tab. This sits in the buyer's content area (not the chrome) but is still part of the brand pattern.

Format:

```
TAB NAME
A brief one-line description of what this tab is for.
```

- Tab name: Playfair Display 700, 28px, Forest. Title Case.
- Description: Jost 300, 13px, Forest at 75% opacity. Sentence case, ends with period.
- 24px below the description, content begins.

Examples:
- **Dashboard** / "Your money at a glance. Updated automatically as transactions come in."
- **Monthly Budget** / "Pick a profile or set your own targets. Feeds Dashboard's % of Budget and Health Score's Budget Adherence."
- **Health Score** / "A composite 0–100 across five weighted indicators. Where you stand, and what to fix first."

The exact copy for every tab is in the per-tab specs under `04_tabs/`.

---

## 24-palette picker (the hero feature)

This is a v2.1 upgrade — the palette picker becomes a visible feature, not a buried dropdown.

### Where it lives

A **floating top-right swatch button** visible from every tab. Inside the sheet, this is implemented as either:

1. **An over-cell image** anchored to the top-right of the visible region, with an `onClick`-equivalent (assign a script via right-click → "Assign script") triggering `openPaletteDialog()`.
2. OR a styled merged cell with the active palette's three swatches and the active palette name, sitting at the top-right of each tab. The merged cell has a single-click handler via `onSelectionChange()` trigger.

### What it does

Clicking the swatch button opens a **modal dialog** (`SpreadsheetApp.getUi().showModalDialog(...)`) with a tile grid showing all 24 palettes. Each tile is ~120px wide × 80px tall and shows:

- A live preview using the palette's primary/mid/accent/bg colors as a mini-mockup of a Forest header + Gold accent rule + Cream content area
- The palette's name in Jost 500, 11px, centered below the preview
- The active palette gets a Forest border + a small `✓` in the top-right corner

Clicking a tile invokes `applyTheme(paletteId)` and dismisses the dialog. The sheet retints in place.

### Visual reference

Open `reference/index.html` and click the swatch button in the top-right (above the sheet area, under the Sheets browser chrome) to see the modal dialog and tile grid in the HTML mockup.

---

*Read next: the per-tab specs in `04_tabs/`, starting with `00_start_here.md`.*
