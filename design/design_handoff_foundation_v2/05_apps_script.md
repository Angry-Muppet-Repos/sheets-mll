# 05 · Apps Script Architecture

The Foundation v2.1 ships with a single `.gs` file (`ColumnCo_Foundation_v2.gs`) bound to the workbook. This doc is the spec for that file — every function, when it runs, what it touches.

A drop-in patch for the new `applyProfile` system is already drafted at `apps_script/applyProfile.gs`. Use it as a template for the rest.

---

## Entry points

### `onOpen()`

Runs when the workbook opens. Builds the `💳 Column & Co.` menu and hides system tabs.

```javascript
function onOpen() {
  buildMenu_();
  hideSystemTabs_();
  if (!PropertiesService.getDocumentProperties().getProperty('cc_first_open')) {
    SpreadsheetApp.getActive().getSheetByName('Start Here').activate();
    PropertiesService.getDocumentProperties().setProperty('cc_first_open', 'true');
  }
}
```

### `onEdit(e)`

Runs on every cell edit. Used for:
- Stamping `Last Updated` in the Accounts tab when column E changes
- Detecting that the buyer typed in a yellow Custom-mode budget cell and auto-saving via `saveCustomProfile()` (debounced)

### `onSelectionChange(e)`

Runs on selection change. Used for the in-sheet "click a pill" interaction model (if used instead of the menu submenu) on Monthly Budget and Trends window selector.

---

## Menu builder

```javascript
function buildMenu_() {
  const ui = SpreadsheetApp.getUi();
  const menu = ui.createMenu('💳 Column & Co.');
  menu.addItem('Import Bank Transactions', 'importTransactions');
  menu.addItem('Clear Paste Zone', 'clearPasteZone');
  menu.addSeparator();
  menu.addSubMenu(buildThemeMenu_());        // 24 palettes
  menu.addSubMenu(buildProfileMenu_());      // 10 profiles  (v2.1 new)
  menu.addSeparator();
  menu.addItem('Renumber Ledger', 'renumberLedger');
  menu.addSeparator();
  menu.addItem('Help…', 'openHelpSidebar');
  menu.addToUi();
}
```

See `apps_script/applyProfile.gs` for the full `buildProfileMenu_()` implementation including the active-profile checkmark and per-profile zero-arg wrappers.

---

## Core functions

### `importTransactions()`

**What it does:** parses the CSV pasted into the Bank Import Guide paste zone, applies the keyword rules from the Categories tab, appends to Transactions, and surfaces income-flagged rows in the Review block.

**Logic:**
1. Read the merged paste-zone cell value.
2. Split by newline, parse each row as CSV (handle quoted fields with commas).
3. Sniff the header row — detect bank format by header pattern (Chase, BoA, Wells, Cap One, Ally, Citi, USAA, Discover, Amex have distinct column orders).
4. Map columns to Date / Description / Amount.
5. For each row, read keyword rules from the Categories tab; assign the first matching category. If none match, category is "Misc".
6. Append rows to the Transactions tab.
7. For positive amounts (income), append to the Review Income block on the Bank Import Guide tab.
8. Toast the buyer: `Imported 47 transactions`.

### `clearPasteZone()`

Wipes the paste zone back to the default 5-row placeholder CSV. Confirmation dialog first.

### `applyTheme(paletteId)`

Reads the palette row from `_Config` and applies its colors to every Sheet's content area (NOT the brand chrome — those rows stay locked).

**What it touches:**
- Cell fills for KPI cards, section headers, alternating zebra rows
- Sparkline colors
- Status chip colors don't change (those are functional)
- The 24-palette tile picker's active-state border

**Stores** the active palette ID in Document Properties so it survives reload.

### `applyProfile(profileId)`  *(v2.1 new)*

See `apps_script/applyProfile.gs` for the full implementation. Writes the 20 target values into the Monthly Budget tab's editable column. For Custom, prefers saved overrides from Document Properties.

### `saveCustomProfile()`  *(v2.1 new)*

Snapshots the current Custom column values to Document Properties so they survive switching to other profiles and back.

### `renumberLedger()`

Re-applies data validation dropdowns and number formats to the Transactions tab after a CSV import that may have expanded the range past the existing format extent. Idempotent — safe to run anytime.

### `openHelpSidebar()`

Opens an HTML sidebar (`HtmlService.createHtmlOutput(...)`) with the help content. The sidebar mirrors the Start Here tab's setup-guide content.

---

## Helper functions

### `hideSystemTabs_()`

Hides `_Engine`, `_Config`, `_Schema` from the bottom tab strip.

### `_loadCustomOverrides_()` / `_saveCustomOverrides_(obj)`

Read/write the buyer's Custom profile from Document Properties.

### `columnLetterToNumber_(letter)`

Converts `C` → `3`. Useful when sheet ref cells are configured as strings.

---

## Document Properties keys

These persist across sessions per workbook copy:

| Key | Value | Set by |
|---|---|---|
| `cc_first_open` | `'true'` | `onOpen()` |
| `cc_active_palette` | palette id | `applyTheme()` |
| `cc_active_profile` | profile id | `applyProfile()` |
| `cc_custom_profile` | JSON string of category → target | `saveCustomProfile()` |
| `cc_buyer_names` | JSON `[name1, name2]` | Start Here input |

---

## Authorization

First time the buyer opens the workbook and clicks a menu item, Google prompts for authorization. The `appsscript.json` manifest must request:

```json
{
  "oauthScopes": [
    "https://www.googleapis.com/auth/spreadsheets.currentonly",
    "https://www.googleapis.com/auth/script.container.ui"
  ]
}
```

`spreadsheets.currentonly` is the narrowest scope that lets us read/write the bound workbook and is what the Etsy buyer will see in the auth dialog. Keep it narrow — broader scopes scare buyers.

---

## Triggers

Installable triggers (created on first authorization):

- `onOpen` — simple trigger, no install needed
- `onEdit` — installable, used for the Accounts last-updated stamping and Monthly Budget Custom auto-save
- `onSelectionChange` — installable, used for in-sheet picker interactions

The installable triggers are created in an `onInstall()` function or on first menu interaction.
