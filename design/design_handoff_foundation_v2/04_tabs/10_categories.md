# Tab · Categories

The 20-category list and the keyword rules that drive auto-categorization on bank CSV import.

---

## Purpose

- Define the 20 spending categories the product uses
- Define keyword rules so `WHOLE FOODS` auto-tags as `Food & Dining`, `NETFLIX` as `Subscriptions`, etc.
- Let the buyer edit the rules — future imports respect their changes

---

## Layout

Two regions:

### Region 1 — Category list

A simple 20-row table:

| Col | Name |
|---|---|
| A | Category Name |
| B | Type | Dropdown — `Expense` / `Income` / `Transfer` (all 20 are Expense in the default) |
| C | Monthly Target | Pulled from Monthly Budget — read-only |

### Region 2 — Keyword rules

| Col | Name |
|---|---|
| A | Keyword (case-insensitive, partial match) |
| B | Category |
| C | Notes |

Ships pre-populated with ~80 default rules covering the major US merchants. Examples:

```
WHOLE FOODS    → Food & Dining
TRADER JOE     → Food & Dining
STARBUCKS      → Food & Dining
SHELL          → Transportation
CHEVRON        → Transportation
NETFLIX        → Subscriptions
SPOTIFY        → Subscriptions
AMAZON         → Shopping
TARGET         → Shopping
COMCAST        → Utilities
PG&E           → Utilities
GEICO          → Insurance
…
```

---

## Spreadsheet implementation

- Apps Script `importTransactions()` reads this tab on every import and applies the first matching rule per transaction description.
- Order matters when rules overlap (e.g. `AMAZON PRIME` could be `Subscriptions` or `Shopping`). The script uses first-match-wins; buyers can reorder rules manually.
- Region 2 ships with ~80 rows of defaults plus ~20 empty rows for buyer additions.

---

## What's new in v2.1

Nothing. Carry forward from v2.
