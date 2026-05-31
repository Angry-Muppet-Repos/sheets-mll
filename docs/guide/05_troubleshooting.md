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

### "Account not in Accounts list"

**C10** is a dropdown sourced from your Accounts list. If the dropdown is empty or doesn't show the account you mean, you need to add it first.

Either:

- **`💳 Column & Co. → Add Account…`** — type the name, the script appends a row to Accounts with sensible defaults and parks your cursor on the Starting Balance cell.
- Or open the Accounts tab directly and fill in a row by hand.

Either way, return to Bank Import Guide and pick the new name from the C10 dropdown.

### Half my transactions came in as `Misc`

The keyword rules don't cover those merchants — but the script makes this a one-click fix.

**Best option — the Uncategorized Merchants block** on Bank Import Guide (rows 89-108). After every import, Misc rows are grouped here by a suggested keyword, with their hit count and a sample amount. Pick a category from the dropdown in column E — the script:

1. Saves a permanent keyword rule on the Categories tab.
2. Reapplies it to past Misc rows in the ledger.
3. Writes a confirmation in the Status column: `Rule saved ✓ · 5 rows updated`.

**One-off fix.** Open Transactions and change the Category dropdown on the specific row. Doesn't save a rule, so the next import of the same merchant will hit Misc again.

**Manual rule add.** Open Categories, scroll to the Keyword Rules table (columns E-G), add a row: keyword (case-insensitive, UPPERCASE convention, longest-match-wins) + Category dropdown. Then run `💳 Column & Co. → Recategorize Ledger from Rules` to re-tag past Misc rows.

### Income rows came in as expenses (or vice versa)

The sign convention is: **negative = expense, positive = income.** Most banks export this way. Some (e.g. some Wells Fargo formats) export expenses as positive and use a separate column for sign. If your import is sign-flipped, multiply the Amount column by -1 manually, or contact us — that bank's format may need a parser tweak.

### Duplicate transactions after re-importing the same month

The script deduplicates by `Date + Description + Amount`. Re-importing the same CSV is safe — duplicates are skipped, and the toast tells you how many: `Imported 47 · 3 duplicates skipped`.

If you're seeing actual duplicates in the ledger:

- Two transactions with the same date, description, and amount on the same account are legitimately ambiguous (e.g. two $6.75 Starbucks on the same morning). The script can't distinguish them and treats one as a duplicate. Add the missing row by hand on Transactions if you need to.
- A description that differs by a single character (`SHELL OIL 575421` vs `SHELL OIL 575422`) is *not* a duplicate by the script's definition. That's correct behavior — different stores, different receipts.

---

## Theme & Profile

### The palette didn't paint

Some cell you manually filled is overriding the script. The script writes the palette colors, but a hard cell fill or a custom conditional format wins.

Try: pick the palette again. If certain cells still look wrong, select them, **Format → Clear formatting**, then re-pick the palette.

### The profile switched but my overrides disappeared

Each profile keeps its own overrides under a Document Property key (`cc_overrides_<profile-id>`). They should survive any profile switch.

If they don't:

- Confirm you weren't in a different profile than you think. The active profile is the one with a `✓` in the menu submenu.
- Confirm you didn't run `Clear overrides for current profile…` — that's the only menu action that wipes them.
- A workbook rebuild (`💳 → Setup → Build workbook (...)`) intentionally wipes every saved override. If you ran one, the overrides are gone for good.

### The active profile checkmark is wrong

The checkmark reads from Document Properties. If you cleared properties or restored the workbook from a backup, the marker can drift. Re-pick your profile from the submenu — the checkmark resyncs.

---

## Data & display

### I imported a new month but Dashboard still shows last month

The Dashboard pills represent the trailing 6 months of the rolling `_Engine` window. Three things can be true at once here:

1. **The pill itself didn't appear yet.** Reload the sheet. `onOpen` checks the calendar against the engine's last column and rolls the window forward if today is past. The new pill appears after the reload.
2. **The active month didn't change.** Pills don't auto-select. After the new month appears, click its pill to make it active.
3. **The import already rolled it.** When `Import Bank Transactions` finds a row past the current engine window, the toast tells you: `… · engine rolled to 2026-09`. If you didn't see that in the toast, no roll happened — your imported rows are within the existing 24-month window.

If the pill still doesn't appear after a reload, unhide `_Engine` (right-click any tab → Show hidden sheets) and check that row 1 column Y has today's month code. If it doesn't, run `💳 → Setup → Build workbook` to re-anchor (destructive — back up first).

### A formula shows `#REF!` or `#NAME?`

Most often this means a named range got deleted. The sheet relies on about 15 named ranges (`cc_dashboard_month`, `cc_budget_targets`, `cc_trends_window`, etc.) — see the Appendix.

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
