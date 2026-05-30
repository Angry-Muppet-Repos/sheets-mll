# Troubleshooting & FAQ

The short version: 90% of the time, something not working means the script isn't installed, or an account name doesn't match between Bank Import Guide and Accounts. Check those two things first.

---

## Setup & install

### The `💳 Column & Co.` menu didn't appear

The script isn't installed yet, or the sheet wasn't reloaded after install.

1. **Extensions → Apps Script.** Confirm `ColumnCo_Foundation_v2.gs` is present and not empty.
2. Close the Apps Script tab.
3. **Reload the sheet** (Cmd/Ctrl-R). The menu loads on `onOpen()`, which fires on reload — not on save.

If it still doesn't appear, open Apps Script again, click **Run** on `onOpen`. Google will prompt for authorization — approve. Reload again.

### Google is asking for permission

Expected on first run. The script asks for `spreadsheets.currentonly` and `script.container.ui` — the narrowest scopes that let it read and write *this workbook* and show menus/sidebars. It can't see any other file in your Drive.

Approve. The prompt won't appear again unless you revoke access.

### Apps Script says "Authorization required"

You closed the auth dialog without approving. Re-run the action — the dialog reopens.

### The script's there but the menu still doesn't load

You may have copied the script into a *standalone* Apps Script project rather than the one *bound to this workbook*. Open the script from **Extensions → Apps Script** inside the sheet (not from script.google.com). If the URL of the Apps Script editor contains `?usp=sharing` or you opened it from a separate tab, it might be unbound. Re-paste into the bound project.

---

## Bank Import

### "No rows imported"

The header row wasn't recognized. The script sniffs against nine bank formats — if yours doesn't match, no rows land.

1. Open your CSV in a text editor.
2. Confirm the first non-blank line is a header (e.g. `Date,Description,Amount` or `Transaction Date,Post Date,Description,Amount,...`).
3. Delete any preamble lines (some banks prepend `"Account: XXXX-1234"` metadata above the header).
4. Re-paste. Re-run.

### "Account not found"

The name you typed in **C6** doesn't exactly match a row on the Accounts tab. It's case-sensitive and whitespace-sensitive.

1. Open Accounts.
2. Copy the exact account name from column A.
3. Paste into **C6** on Bank Import Guide.
4. Re-run the import.

### Half my transactions came in as `Misc`

The keyword rules don't cover those merchants. Two ways to fix:

- **One-off:** open Transactions, change the Category dropdown on each row.
- **Permanent:** open Categories. In the Keyword Rules table, add a row: keyword (case-insensitive partial match, e.g. `TRADER JOE`) and Category (e.g. `Food & Dining`). Then run `💳 Column & Co. → Recategorize Ledger from Rules` to re-tag the rows already in the ledger.

### Income rows came in as expenses (or vice versa)

The sign convention is: **negative = expense, positive = income.** Most banks export this way. Some (e.g. some Wells Fargo formats) export expenses as positive and use a separate column for sign. If your import is sign-flipped, multiply the Amount column by -1 manually, or contact us — that bank's format may need a parser tweak.

### Duplicate transactions after re-importing the same month

The script doesn't de-duplicate. Import the same CSV twice and you get the rows twice. Two strategies:

- **Sort by date, eyeball, delete duplicates.** Fast for small imports.
- **Be disciplined: each CSV export covers a date range. Don't overlap them.** Export 5/1–5/31, then 6/1–6/30. Never 5/1–6/15.

---

## Theme & Profile

### The palette didn't paint

Some cell you manually filled is overriding the script. The script writes the palette colors, but a hard cell fill or a custom conditional format wins.

Try: pick the palette again. If certain cells still look wrong, select them, **Format → Clear formatting**, then re-pick the palette.

### The profile switched but my Custom values disappeared

The script snapshots Custom values to Document Properties when you switch *away from* Custom. If the snapshot wasn't there, switching back to Custom shows empty cells.

If the snapshot is gone for good: rebuild Custom from the closest preset, then run `💳 Column & Co. → Save Current Values as Custom` (if your menu has this item) to save the snapshot. Going forward it'll persist.

### The active profile checkmark is wrong

The checkmark reads from Document Properties. If you cleared properties or restored the workbook from a backup, the marker can drift. Re-pick your profile from the submenu — the checkmark resyncs.

---

## Data & display

### A formula shows `#REF!` or `#NAME?`

Most often this means a named range got deleted. The sheet relies on about 15 named ranges (`dashboard_active_month`, `budget_targets`, `trends_window`, etc.) — see the Appendix.

**Data → Named ranges** to inspect. If one is missing, recreate it from the spec in the Appendix.

### A formula shows `#N/A`

A lookup didn't find its key. Most often: an account name on Transactions doesn't exist on Accounts. Fix the typo on Transactions.

### Sparklines are blank or all the same color

The status logic reads from a helper cell. If a category has no transactions yet for the current month, the SPARKLINE input is empty. As soon as data flows, the sparklines paint.

### The Dashboard donut is missing slices

Same — categories with zero spend in the active month aren't represented. They reappear once you import a transaction in them.

### The sheet feels slow

Past about 3,000 transactions, Google Sheets recalc lags. Try:

- `💳 Column & Co. → Renumber Ledger` to consolidate format extents.
- Archive older months to a separate copy of the workbook. Keep only the trailing 24 months in the live file.
- Close any other heavy Sheets tabs in your browser.

---

## Hidden tabs

### I accidentally unhid `_Engine` and now I'm scared

It's fine. **Don't edit anything.** Right-click the `_Engine` tab → **Hide sheet**. Reload.

If you edited a cell by mistake: undo (Cmd/Ctrl-Z) until you're back. If you can't undo, the formulas in `_Engine` are documented in the design handoff under `04_tabs/11_engine.md` — each cell is `=SUMIFS(Transactions.amount, Transactions.category, $A2, Transactions.month, B$1)`.

### `_Schema` isn't an AI-readable schema, it's just a table

That's right — it's prose plus a structured table, designed so any LLM reading the workbook treats it as the data dictionary. You don't need to do anything with it. The AI prompts in **Recipes** read it automatically.

---

## File & ownership

### Can I share my sheet with my partner?

Yes. **File → Share** as normal. Give them edit access if you want them to add transactions. The script runs under whoever's signed in.

> If both of you are using the sheet at the same time and both click `Import Bank Transactions`, you can get race conditions. Coordinate.

### Can I roll back if I break something?

**File → Version history → See version history.** Google saves snapshots every few minutes. Restore any prior version.

The original `.xlsx` you downloaded is also a backup. Make another Google copy from it any time.

### Can I make multiple copies for different scenarios?

Yes. `File → Make a copy`. Each copy has its own Document Properties (palette, profile, custom snapshot) — they don't share state.

### Can I use this on the Google Sheets mobile app?

Read-only on mobile, basically. The `💳 Column & Co.` menu doesn't render in the mobile app — Apps Script menus are desktop-only. Use the mobile app to glance at the Dashboard or add a one-off transaction; use desktop for everything else.

### Can I use it offline?

Yes — install the Google Docs offline extension. The script can't run offline (no Apps Script in offline mode), but you can view and edit cells. Imports happen when you're back online.

---

## Updating to a newer version

When v2.2 ships:

1. Make a backup copy of your current sheet (`File → Make a copy`).
2. Download the new `.xlsx` from Etsy. Open in Drive, save as Google Sheets.
3. Copy your Accounts, Transactions, and Categories tabs from the old sheet into the new sheet (column by column, or tab-duplicate).
4. Install the new `.gs` (same process as Quickstart · Step 2).
5. Apply your theme and profile via the menu.

We're working on a one-click migration script. For now it's manual.

---

## Still stuck?

The Etsy listing has our support email. We answer within two business days. Include:

- Which step you're on
- A screenshot of the issue (crop the relevant area)
- What you've already tried

We don't ask for your sheet — your data stays yours.
