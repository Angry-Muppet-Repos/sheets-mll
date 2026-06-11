# Tab · Transactions

The ledger. Every transaction lives here — imported from the buyer's bank CSV or typed by hand.

**Visual reference:** open `reference/index.html`, click **Transactions** (stub in the mockup, see `StubTab` description).

---

## Purpose

- Single source of truth for all money movement
- Feeds Dashboard, Trends, Health Score, Goals, Net Worth
- 5,000-row capacity (4–5 years for a typical buyer)
- Buyer can manually add transactions or import via CSV

---

## Columns (left to right)

| Col | Name | Type | Notes |
|---|---|---|---|
| A | Date | Date | Required. ISO format displayed as `Mon DD, YYYY`. |
| B | Description | Text | The merchant or memo as it came from the bank. |
| C | Amount | Number | Negative for expenses, positive for income. Tabular nums. |
| D | Category | Dropdown (Data Validation) | From the 20-category list. Auto-filled by import. |
| E | Account | Dropdown | From the Accounts tab's list. |
| F | Notes | Text | Buyer's annotation. Optional. |
| G | Month | Formula | `=TEXT(A2,"yyyy-mm")` — used by SUMIFS in other tabs. |

---

## Spreadsheet implementation

- Data validation on Category (col D) is the 20-category list from `data/profiles.json` → `categories` array.
- Data validation on Account (col E) is a dynamic range from the Accounts tab.
- Column G `Month` is a hidden formula column used by SUMIFS in `_Engine`.
- Default to **5,000 data rows** with dropdowns pre-extended. Apps Script `renumberLedger()` re-applies dropdowns and number formats after a CSV import expands the range.
- Frozen header row (row 1 of this tab's content area, just below the brand chrome).

---

## Mock-data story

The shipped MOCK_DATA file has 454 transactions across 6 months for Marcus & Elena Brooks. The blank file has zero. **Don't ship mock data in the blank file.** Ship it only in the MOCK_DATA variant.

---

## What's new in v2.1

Nothing. Carry forward from v2.
