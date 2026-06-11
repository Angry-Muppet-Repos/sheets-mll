# Tab · _Engine  *(system, hidden by default)*

The aggregation layer. Six months of per-month, per-category sums feed every chart and table. Wired for 24 months (IF-guarded). **Buyer should never need to open this.**

---

## Purpose

- Pre-aggregate the Transactions ledger by month × category × type
- Cache results so dashboard/trends formulas don't all run SUMIFS against the full 5,000-row ledger
- One source-of-truth that every other tab references via named ranges

---

## Structure

Per-month columns. Per-category rows. Each cell is a SUMIFS over the Transactions ledger for that month + that category. 24 month columns total (6 visible + 18 hidden by default).

```
              Jun24  Jul24  Aug24  ... May26
Housing       1800   1850   1820   ... 2400
Food&Dining   620    640    580    ... 922
Transportation 540   525    560    ... 540
...
Income        9820   9870   9900   ... 10230
Expenses      5840   5910   5950   ... 6980
NetCashFlow   3980   3960   3950   ... 3250
SavingsRate   40.5%  40.1%  39.9%  ... 31.8%
```

Each cell formula:
```
=SUMIFS(Transactions.amount, Transactions.category, $A2, Transactions.month, B$1)
```

---

## Why it's hidden

- Performance: dashboard formulas reference a 22-row × 24-col block, not a 5,000-row ledger.
- Cleanliness: buyer doesn't see the gears.
- Stability: if a buyer accidentally edits this tab, dashboards break. Hiding reduces accidents.

`Sheet.hideSheet()` on first open via `onOpen()`.

---

## What's new in v2.1

Nothing structurally. The 24-month window was already wired in v2 but only 6 months were exposed in the Trends UI — v2.1 exposes 12 and 24 windows too. No `_Engine` changes needed for that.
