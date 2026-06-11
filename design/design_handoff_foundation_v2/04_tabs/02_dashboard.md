# Tab · Dashboard

The buyer's everyday view. Current-month money at a glance.

**Visual reference:** open `reference/index.html`, click **Dashboard** in the bottom tab strip. This is the default tab in the mockup — it opens here.

**Source file:** `reference/tabs-overview.jsx` → `DashboardTab()`

---

## Purpose

- 4 KPIs for the current month (Income, Expenses, Net Cash Flow, Savings Rate) with vs-last-month deltas
- Top spending categories with pacing bars and status chips
- Spending breakdown donut with legend
- **AI Insights panel** (v2.1) with auto-computed Leak / Subs / Win callouts
- Month-Snapshot side rail with secondary metrics

---

## Layout (top to bottom)

1. **3-row brand chrome**
2. **Tab title** — "Dashboard" + "Your money at a glance. Updated automatically as transactions come in."
3. **Month selector** — Playfair Display 30px current month label on the left, right-aligned row of 6 month pills (Dec, Jan, Feb, Mar, Apr, May). Active month is Forest-filled pill. Tiny caption `← change to update all figures` beside the label.
4. **KPI row** — 4 cards in a 4-column grid:
   - Total Income · primary accent · sub: "vs last month +0.1%"
   - Total Expenses · danger accent · sub: "vs last month +1.1%"
   - Net Cash Flow · primary accent · sub: "vs last month −$65"
   - Savings Rate · gold accent · sub: "goal: 20%+ — crushing it"
5. **Two-column row** (~1.7fr / 1fr):
   - **Top Spending** table — Category · Spent · Budget · % of Budget (progress bar) · Status chip. 8 rows.
   - **Month Snapshot** card — vertical key/value list (Income, Expenses, Net, Savings Rate, Avg Daily Spend, Transactions, Largest Expense).
6. **Two-column row** (1fr / 1fr):
   - **Spending Breakdown donut** with 12-segment legend grid.
   - **AI Insights panel** (v2.1) — Forest-on-Cream, three callouts (LEAK / SUBS / WIN).
7. **Footer**

---

## Data sources

- `window.CC_DATA.snapshot` — the 7 month-snapshot metrics
- `window.CC_DATA.top_spending` — 8 rows with `{cat, spent, budget, status}`
- `window.CC_DATA.breakdown` — 12 rows with `{cat, amount}` for the donut
- All driven by SUMIFS over the Transactions ledger by current-month + category in the real sheet

---

## AI Insights panel (v2.1 — new)

Forest-on-Cream panel, 3-column. Each column is a callout with a label, value, and one-line takeaway. Auto-computed from the data.

| Slot | Label | Mock value | Logic |
|---|---|---|---|
| 1 | `LEAK` | "Dining is creeping up — $380 → $922/mo. That's $9.7K/yr if it holds." | Find the category with the largest positive month-over-month delta over the trailing 3 months. |
| 2 | `SUBS` | "12 active subscriptions. You added 9 in the last 6 months." | Count distinct merchant names in the Subscriptions category. |
| 3 | `WIN` | "Emergency fund healthy at 3.3 months." | Pick the strongest Health Score indicator. |

Each label is Jost 500 10px tracked `0.20em` Harvest Gold. Value below is Playfair Display 18px Parchment. Takeaway is Jost 300 12px Parchment at 80% opacity.

---

## Spreadsheet implementation notes

- **KPI cards** are 4 merged regions (4×3 cells each). Top row is the label (Jost 500 10px tracked). Below is the big value in Playfair Display 28px. Sub-caption below in Jost 11px at 65% opacity.
- **Top Spending progress bars** use `=REPT("▮", ROUND(pct*20,0))` or `=SPARKLINE(spent, {"charttype","bar"; "max",budget; "color1","#1C3D2E"})` — the SPARKLINE bar version is cleaner.
- **Status chips** are single cells with conditional formatting:
  - `="On Track"` if `spent <= budget`
  - `="Fair"` if `spent <= budget * 1.10`
  - `="Over"` otherwise

  Cell fill changes per state: Cream / `#FFF3C0` / `#FFE5E5`. Text color matches: Canopy / Harvest Gold / Garnet (`#832F30`).
- **Donut** is a native Sheets pie chart with 12 segments. Colors are a Forest → Canopy → Gold → Garnet ramp:
  ```
  ['#1C3D2E', '#2D5C45', '#3E7E5C', '#5C9D72', '#8FAF7E', '#C5A95A',
   '#D4B86C', '#C8873A', '#A65B30', '#832F30', '#6B2528', '#4A1A1C']
  ```
- **Month selector pills** — 6 merged-cell pills in a row. Hidden cell `dashboard_active_month` holds the chosen month index. Apps Script `onSelectionChange` updates it. All formulas across the tab reference `dashboard_active_month` so changing it updates everything.

---

## Named ranges

- `dashboard_active_month` — index 0..23 into `_Engine`
- `dashboard_kpi_income`, `dashboard_kpi_expenses`, `dashboard_kpi_net`, `dashboard_kpi_savings_rate`
- `dashboard_top_spending` — 8 rows × 4 cols
- `dashboard_breakdown` — 12 rows × 2 cols

---

## What's new in v2.1

- **AI Insights panel** — new. Operationalizes the LLM-ready wedge inside the dashboard itself.
- **Donut chart** replaces the existing list-only "Spending Breakdown."
- **Pacing bars + percent** added to the Top Spending rows (was just Spent / Budget).
