# Tab · Bank Import Guide

The buyer's "paste your bank CSV here" surface. Triggers the Apps Script CSV importer.

**Visual reference:** open `reference/index.html`, click **Bank Import Guide**.

**Source file:** `reference/tabs-actions.jsx` → `BankImportTab()`

---

## Layout (top to bottom)

1. **3-row brand chrome**
2. **Tab title** — "Bank Import Guide" + "Paste a CSV. We figure out the rest."
3. **3-step instruction row** — numbered cards: (1) Type the account name in C6 · (2) Paste the CSV below · (3) Run `💳 Column & Co. → Import Bank Transactions`
4. **Account name input** — cell C6, buyer types the account name (must match an entry on the Accounts tab)
5. **Paste zone** (v2.1 upgrade) — full-bleed Green (`#E5F5EA`) zone, ~12 rows tall, with a realistic-looking 5-row CSV preview already inside as placeholder. Header row in monospace, data rows with realistic-looking dates/amounts/descriptions.
6. **Review Income block** — under the paste zone, lists rows the importer flagged as possible income (positive amounts). Each row gets a Yes/No dropdown + Notes field.
7. **Supported banks list** — small caption row: "Sniffs headers from Chase, BoA, Wells Fargo, Cap One, Ally, Citi, USAA, Discover, Amex."
8. **Footer**

---

## Paste zone — realistic 5-row CSV preview

The mockup shows this verbatim. Use as the default placeholder:

```
Date,Description,Amount
05/12/2026,WHOLE FOODS MARKET #347,-87.42
05/12/2026,STARBUCKS STORE 4421,-6.75
05/11/2026,DIRECT DEPOSIT - ACME CO,4250.00
05/11/2026,NETFLIX.COM,-15.49
05/10/2026,SHELL OIL 575421,-52.18
```

---

## Spreadsheet implementation

- The paste zone is a single large merged cell with fill `#E5F5EA`, monospace font, left-aligned, top-aligned, wrap text.
- Apps Script `importTransactions()`:
  1. Reads the merged cell's value
  2. Splits by newline, parses CSV (handles quoted fields with commas)
  3. Sniffs the header row to detect the bank format
  4. Maps columns to Date/Description/Amount
  5. For each row, runs the keyword-categorization rules from the Categories tab (e.g., `WHOLE FOODS` → `Food & Dining`)
  6. Appends to the Transactions tab
  7. Surfaces income-flagged rows in the Review block
  8. Clears the paste zone (with confirmation)
- `clearPasteZone()` menu item wipes the merged cell content back to the default placeholder.

---

## What's new in v2.1

- **Green paste zone with realistic CSV preview** — replaces the plain-text instructions in v2.
- **Review Income block** — new. Surfaces ambiguous rows for buyer confirmation.
