# Tab · Accounts

The register of every bank account, credit card, savings account, and loan the buyer wants tracked. Current balances feed Net Worth automatically.

---

## Columns

| Col | Name | Type | Notes |
|---|---|---|---|
| A | Account Name | Text | e.g. "Chase Joint Checking" |
| B | Type | Dropdown | Checking · Savings · Credit · Loan · Investment |
| C | Owner | Dropdown | Joint · Buyer 1 · Buyer 2 (buyer names settable in Start Here) |
| D | Starting Balance | Number (yellow input) | What it was at the start of tracking |
| E | Current Balance | Number (yellow input) | Manually maintained — buyer updates monthly |
| F | Last Updated | Date | Auto-stamped by `onEdit` when E changes |
| G | Notes | Text | Optional |

---

## Spreadsheet implementation

- Default ships with ~12 empty rows, dropdowns pre-applied.
- Owner dropdown reads from two cells on Start Here (buyer names).
- The Account Name list (`A2:A`) is the source for the Account dropdown on Transactions.
- An `onEdit` trigger updates `F` (Last Updated) when column E changes.

---

## What's new in v2.1

Nothing. Carry forward from v2.
