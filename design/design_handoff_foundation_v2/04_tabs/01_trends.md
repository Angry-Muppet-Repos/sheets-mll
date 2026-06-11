# Tab · Trends

The 6/12/24-month time-series view. Shows where the buyer's money has gone over time, with sparklines per category and an Income-vs-Expenses chart.

**Visual reference:** open `reference/index.html`, click **Trends** in the bottom tab strip.

**Source file:** `reference/tabs-analysis.jsx` → `TrendsTab()`

---

## Purpose

- Show 6/12/24 months of income, expenses, net cash flow, savings rate
- Per-category sparklines with status color (Forest = on, Gold = fair, Garnet = over) and delta chip (`+275%`)
- Fused Income vs Expenses chart with savings-rate overlay

---

## Layout (top to bottom)

1. **3-row brand chrome**
2. **Tab title** — "Trends" + "Six months in, twenty-four months out. Where your money has gone."
3. **Window selector** — 3-pill toggle: `6 mo` · `12 mo` · `24 mo`. Default `6 mo`. Active pill is Forest fill.
4. **KPI strip** — 4 cards: Avg Income, Avg Expenses, Avg Net, Avg Savings Rate (over the selected window).
5. **Income vs Expenses chart** — paired bars per month (Forest income, Canopy expenses) with a Harvest-Gold savings-rate line overlay (right Y-axis %). Heading: `INCOME vs EXPENSES · SAVINGS RATE`.
6. **Category sparkline table** — one row per category, 4 columns: Category · Sparkline · Last Month · Δ vs first-of-window. Sparkline is colored by status. Δ chip is the status chip.
7. **Footer**

---

## Data sources

- `window.CC_DATA.months` (6 months) and `window.CC_DATA.months_24` (24 months) — pick the slice based on the active window. Maps to the `_Engine` aggregation table in the real sheet.
- Category-level series: derived from `_Engine` per-month per-category sums. The mockup synthesizes a few values for readability — in the real sheet these are SUMIFS over the Transactions ledger by month/category.

---

## Spreadsheet implementation notes

- **Sparklines** use the native `SPARKLINE()` function:
  ```
  =SPARKLINE(B10:M10, {"charttype","line"; "color","#1C3D2E"; "linewidth",2})
  ```
  Status color is driven by a `SWITCH(status, "on","#1C3D2E", "fair","#C5A95A", "over","#832F30")` wrapper around the color option.
- **Income vs Expenses chart** is a native Sheets combo chart (column + line). Insert via Apps Script `Charts.newDataSourceChart()...` or pre-place in the workbook.
- **Window selector** is a 3-cell row near top-right. Apps Script `onSelectionChange()` watches for clicks; clicking writes the window value to a hidden cell, conditional formatting paints the active pill.

---

## Named ranges

- `trends_window` — single cell holding `6` / `12` / `24`
- `trends_months` — dynamic range, references the relevant slice of `_Engine`
- `trends_category_rows` — the per-category rows that drive the sparkline table

---

## What's new in v2.1

- Per-category sparklines with status-colored lines and delta chips — **new in v2.1.**
- Fused Income/Expenses/Savings-Rate chart — replaces the existing 3-separate-plots layout.
- 24-month window option — the existing `_Engine` is wired for 24mo but the Trends UI only exposed 6mo.
