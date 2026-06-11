# Tab · Goals

Buyer-defined savings, debt-payoff, spending-limit, and savings-rate goals. Current values pull live from the ledger or Health Score so the buyer never double-enters.

**Visual reference:** open `reference/index.html`, click **Goals**.

**Source file:** `reference/tabs-actions.jsx` → `GoalsTab()`

**Mock data:** `window.CC_DATA.goals` (7 goals).

---

## Layout (top to bottom)

1. **3-row brand chrome**
2. **Tab title** — "Goals" + "Pick a type, a target, a deadline. Progress tracks automatically as transactions come in."
3. **Goals table** — columns: Goal Name · Type · Target · Current · % Complete (bar + %) · Deadline · Status · Note
4. **Forecast strip** (v2.1) — Forest panel below the table with one-line concrete forecast for each off-track goal:
   > "Japan Trip Fund hits target by Oct 2026 — one month late. Bump monthly transfer from $200 to $275 and you hit September."
5. **Footer**

---

## 4 goal types

| Type | Target | Current source |
|---|---|---|
| Savings Target | $ amount | Sum of balances in the linked savings account |
| Debt Payoff | $ amount | Starting balance − current balance of the linked debt account |
| Spending Limit | $ per period | SUMIFS over current month's transactions in the linked category |
| Savings Rate | % | Current savings rate from `_Engine` |

---

## Spreadsheet implementation

- Goal name in column A (buyer types). Type in column B (data validation dropdown). Target column C, Current column D (formula that branches on Type).
- Current formula example for Spending Limit:
  ```
  =SUMIFS(Transactions.amount, Transactions.category, B2, Transactions.month, MONTH(TODAY()))
  ```
- Progress bar: `=SPARKLINE(D2, {"charttype","bar"; "max",C2; "color1", IF(D2/C2>1, "#832F30", IF(D2/C2>0.85, "#C5A95A", "#1C3D2E"))})`
- Status chip: same conditional formatting pattern.

---

## What's new in v2.1

- **Forecast strip** below the table — new. Auto-generated brand-voice copy for any off-track goal.
- Everything else unchanged from v2.
