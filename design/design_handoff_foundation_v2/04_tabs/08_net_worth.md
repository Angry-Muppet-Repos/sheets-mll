# Tab · Net Worth

The buyer's full balance sheet. Splits Budget Accounts (auto-pulled from the ledger) from Investments (manual entry).

**Visual reference:** open `reference/index.html`, click **Net Worth**.

**Source file:** `reference/tabs-analysis.jsx` → `NetWorthTab()`

**Mock data:** `window.CC_DATA.net_worth`.

---

## Layout (top to bottom)

1. **3-row brand chrome**
2. **Hero block** (v2.1) — Forest panel, full-bleed:
   - **Left:** Big composite — Playfair Display 64px `$222,640`, label "Total Net Worth" above, monthly delta below (`+$3,250 this month`).
   - **Right:** 6-month Harvest-Gold sparkline of net worth history.
   - **Bottom strip:** Side-by-side Total Assets / Total Liabilities cards (Parchment text on Forest, Playfair 28px).
3. **Two-column tables row:**
   - **Budget Accounts** (left) — Account · Type · Owner · Balance. Footer row: "Budget Net" in Canopy fill.
   - **Investments** (right) — Account · Type · Value. Footer row: "Investments Net."
4. **Footer**

---

## Mock data

8 budget accounts: Chase Joint Checking $7,200 · Elena Checking $2,400 · Marcus Checking $3,100 · Ally Savings $22,800 · Ally Sinking Fund $6,400 · Amex Gold Card −$1,840 · Chase Sapphire Card −$1,320 · Marcus Auto Loan −$18,600.

5 investments: Marcus 401(k) $98,500 · Elena 403(b) $41,200 · Joint Brokerage $27,800 · Marcus Roth IRA $19,400 · Elena Roth IRA $15,600.

Total assets: $244,100. Total liabilities: $21,460. Net worth: $222,640.

---

## Spreadsheet implementation

- Hero block is merged across the top ~8 rows. Sparkline is a `=SPARKLINE()` in a single merged cell, color `#C5A95A`, line width 2.
- Total Assets / Liabilities / Net Worth formulas:
  ```
  total_assets = SUMIF(budget_balances, ">0") + SUM(investments_values)
  total_liabilities = -SUMIF(budget_balances, "<0")
  net_worth = total_assets - total_liabilities
  ```
- Budget Accounts pull from the Accounts tab (auto). Investments are manual entry — Account name, Type, Value (yellow `#FFFDE7` cells).

---

## What's new in v2.1

- **Hero block with sparkline** + side-by-side asset/liability cards — new. v2 had two long tables and nothing else.
