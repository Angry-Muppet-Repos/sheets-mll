# Menu Reference · 💳 Column & Co.

The `💳 Column & Co.` menu sits between **Extensions** and **Help** in the Google Sheets menu bar. Every action the sheet does beyond what spreadsheet cells can do on their own lives here.

Items are listed in display order. Each entry tells you *what it does*, *when to use it*, *what it touches*, and *the gotcha* — the one thing buyers get wrong.

---

## Add Account…

**What it does.** Prompts you for an account name, then appends a new row to the Accounts tab with `Type = Checking`, `Owner = Joint`, today's date in Last Updated, and the cursor parked on the Starting Balance cell so you can type it immediately.

**When to use it.** When a new account enters your life — opening a savings account, getting a card, starting a loan — and you want it on the books without leaving the Bank Import Guide.

**What it touches.** The Accounts tab (first empty row in the `cc_accounts_list` range, A10:A21). Sets columns A · B · C · F. Activates Accounts and selects the Starting Balance cell (D).

**Gotcha.** Duplicate names are rejected (case-insensitive). If you mean to add a second account at the same bank, give them distinct names — `Chase Joint Checking` and `Chase Joint Savings`, not two `Chase`. Capacity is 12 rows; rebuilding the workbook resets capacity, your data does not auto-migrate.

---

## Import Bank Transactions

**What it does.** Reads the paste zone on Bank Import Guide, parses the CSV, sniffs the header against nine bank formats, deduplicates against the live ledger, auto-categorizes each row against your keyword rules, appends to Transactions, sorts the ledger newest-first, and surfaces two follow-up queues:

- **Review Income** — every positive-amount row, for Yes/No confirmation.
- **Uncategorized Merchants** — every Misc row, grouped by suggested keyword, with a Category dropdown so one pick saves a permanent rule.

The cursor jumps to whichever queue has work for you. The toast tells you what happened: `Imported 47 · 3 duplicates skipped · 5 fell to Misc · 1 income row for review`.

**When to use it.** Once a month, after you export your bank CSV and paste it into the green zone.

**What it touches.** Reads C10 (account name) and the paste zone (A12:H61). Writes to Transactions (appends rows), the Review Income block (A65:E84), and the Uncategorized Merchants block (A89:F108).

**Gotchas.**

- C10 must contain an account name from your Accounts list. The cell is dropdown-validated — if you typed by hand and the value doesn't match, the import refuses.
- Duplicates are detected by `Date + Description + Amount`. Re-importing the same CSV is safe; nothing gets double-counted.
- If the first row of your paste is metadata (some banks prepend `"Account: XXXX-1234"`), delete those lines first. The script needs row 1 to be the header.
- Positive amounts auto-tag as `Income` regardless of merchant. Negative amounts run through the keyword rules.

---

## Clear Paste Zone

**What it does.** Empties the 50×8 paste-zone grid (A12:H61) on Bank Import Guide. Asks for confirmation first.

**When to use it.** After an import, when you want a clean slate for the next bank's CSV. Or when you pasted something weird and want to start over.

**What it touches.** Only the paste zone cells. Your Review Income and Uncategorized queues are untouched — those stay until the next import overwrites them.

**Gotcha.** None. It's idempotent and confirmation-gated.

---

## Recategorize Ledger from Rules

**What it does.** Walks every row in Transactions whose category is currently `Misc`. Runs each row's Description through your keyword rules (longest match wins). Updates the category if a rule matches.

**When to use it.** After you've edited keyword rules on the Categories tab — adding rows for merchants the importer kept missing — and you want past Misc rows updated too, not just future imports.

**What it touches.** Only `Misc` rows on Transactions. Rows you've manually categorized are never overwritten.

**Toast tells you.** `Recategorized 14 rows`, or `No Misc rows matched any rule.`

**Gotcha.** Rules are longest-keyword-wins, not first-match. `AMAZON PRIME` beats `AMAZON` regardless of order — order in the keyword rules table doesn't matter, specificity does.

---

## Sort Transactions by Date

**What it does.** Sorts the ledger newest-first. Imports already trigger this — the menu item is there for after you've manually added or edited rows.

**When to use it.** When the ledger looks out of order because you back-filled a transaction by hand.

**What it touches.** Columns A-F of Transactions. Column G (the hidden `Month` formula) is row-relative and recomputes after the sort.

**Gotcha.** None.

---

## Apply Theme ▸

A submenu of 24 in-sheet palettes. The active palette has a `✓`. Clicking any item invokes `applyTheme(paletteId)` — the script reads the recorded theme map from Document Properties and repaints every themable cell on every tab. The 3-row brand chrome (Forest header, Canopy sub-band, Harvest Gold rule) is never in the theme map, so it never changes.

**The 24 palettes** (in menu order):

| Palette | Primary | Notes |
|---|---|---|
| Light | Forest `#1C3D2E` | The default. Brand-aligned. |
| Warm Greige | `#3D2B1F` | Earthy. Goes with wood and leather. |
| Cool Slate | `#1E3A5F` | Restrained blue. Tech-leaning. |
| Sage | `#2D4A3E` | Softer green than Light. |
| Espresso | `#2C1810` | Deepest brown. High contrast. |
| Maize & Navy | `#003366` | University of Michigan. |
| Scarlet & Gray | `#BB0000` | Ohio State. |
| Orange & Navy | `#002D6D` | Virginia, Illinois, Auburn. |
| Green & Gold | `#154734` | Baylor, Oregon, Norfolk State. |
| Purple & Gold | `#4A1C7C` | LSU, ECU, Tennessee Tech. |
| Crimson & White | `#9B1B30` | Alabama, Oklahoma, Indiana. |
| Garnet & Gold | `#782F40` | Florida State, South Carolina. |
| Forest & White | `#154733` | Tulane, Dartmouth, Vermont. |
| Royal & Gold | `#002D72` | Air Force, William & Mary. |
| Silver & Black | `#1A1A1A` | Las Vegas Raiders. |
| Midnight | `#0B1F3A` | Deep blue with teal accent. |
| Burgundy | `#5C0A1A` | Wine, with warm cream. |
| Mocha | `#5C3A21` | Coffee-leaning brown. |
| Indigo & Blush | `#2E1F6B` | Deep purple with pink accent. |
| Pine & Brass | `#1F3A2E` | Forest with brushed metal. |
| Ocean & Coral | `#0F4858` | Teal with warm coral pop. |
| Charcoal & Mint | `#2C2C2E` | Near-black with cool mint. |
| Olive & Cream | `#3D4A1F` | Earthy green, warm cream. |
| Custom | `#1B2A4A` | Buyer-defined seed palette. |

**Gotcha.** The theme repaints recorded cells. If you've manually filled a cell with a custom color, the script paints over it. To preserve manual fills, copy the color value, apply the theme, then paint your custom color back on the specific cell.

---

## Apply Budget Profile ▸

A submenu of 10 budget profiles plus a `Clear overrides for current profile…` action. The active profile has a `✓`. Clicking a profile writes the Preset column on Monthly Budget and loads that profile's saved overrides.

### How the Preset/Override model works

The Monthly Budget tab has two columns the buyer cares about:

- **Preset %** (C, locked Cream) — the canonical numbers for the active profile. You can't edit these.
- **Override %** (D, yellow editable) — your tweaks. Blank means "use the preset." Any value you type takes precedence.

**Target %** (E) computes as `IF(D="", C, D)`. **Target $** (F) multiplies Target % by your Monthly Income (from C13). Dashboard and Health Score read from Target $.

Each profile keeps its **own** overrides. Switching from Dave Ramsey to FIRE doesn't lose your Dave Ramsey tweaks — they come back when you switch back.

**The 10 profiles** (in menu order):

| Profile | Sub | One-line blurb |
|---|---|---|
| Dave Ramsey | Envelopes · Baby Steps | Big slices for housing and food. Aggressive debt snowball. |
| 50/30/20 | Needs · Wants · Savings | 50% needs, 30% wants, 20% savings + debt. |
| FIRE | Financial Independence · Retire Early | 50%+ savings rate. Lean fixed costs. |
| Zero-Based | Every dollar gets a job · YNAB-style | Nothing left unassigned. Disciplined savings. |
| Anti-Budget | Paula Pant · Save first, spend the rest | 20% off the top into savings + retirement. |
| Kakeibo | Japanese 4-bucket | Needs · Wants · Culture · Unexpected. |
| New Parent | Young family · childcare + 529 priority | Childcare is the second-largest line. |
| Self-Employed | 1099 · 25% tax set-aside · biz expenses | A quarter escrowed for quarterly taxes. |
| HCOL Renter | High-cost city · 40% housing · student loans | NYC, SF, Seattle, Boston, DC. |
| Custom | You set every target | Click any yellow cell to edit. |

### Clear overrides for current profile…

Confirmation dialog, then wipes the Override column for the active profile. The Preset stays — only your tweaks are cleared. Use this when you've drifted too far from a preset and want a clean slate without switching profiles.

**Gotchas.**

- Editing a yellow cell auto-saves to the active profile. If you typed something by accident, undo (Cmd/Ctrl-Z) before switching profiles.
- The cell is percent-formatted. Typing `10` is normalized to `10%` (`0.10`) — the script catches bare numbers > 1 and divides by 100.
- Monthly Income (C13) is a live formula from `_Engine` — it reflects your most-recent month's actual income. Don't overtype it.

---

## Renumber Ledger

**What it does.** Re-applies number formats and data validation dropdowns to all 5,000 capacity rows on the Transactions tab. Resets the `Month` helper formula in column G.

**When to use it.** After a CSV import expands the populated range past where the dropdowns were applied. Or after you accidentally cleared a cell's formatting.

**What it touches.** Number format on columns A (date) and C (amount). Data validation on column D (category — dropdown from `cc_tx_categories`). Formula on column G.

**Toast.** `Ledger formats refreshed`.

**Gotcha.** None. Idempotent and safe to run anytime.

---

## Help…

**What it does.** Opens a sidebar with the Quickstart, Menu Reference, Tab guide, and Troubleshooting. Same content as this guide, condensed for in-sheet reading.

**When to use it.** Whenever. The sidebar is the fastest way to look up a menu item without leaving the workbook.

**Gotcha.** The sidebar runs `HtmlService.createHtmlOutputFromFile('Help')` — it needs an `Help.html` file in the same Apps Script project as `Code.gs`. If the sidebar fails with "File not found," the HTML wasn't copied alongside the script.

---

## Setup ▸

A submenu of two destructive actions. Both rebuild the entire workbook from scratch.

### Build workbook (mock data)

Wipes every tab and rebuilds with Marcus & Elena Brooks pre-populated — 6 months of generated transactions, the canonical mock accounts and investments, all 10 profiles seeded, the default palette applied. Used to set up the demo file that ships on Etsy.

### Build workbook (blank)

Same rebuild, but the Transactions tab and the Accounts/Investments rows are empty. Used to set up the blank file the buyer fills in themselves.

**When to use them.** Once, after you paste the `.gs` into a fresh workbook. Or when an existing build broke and you want to start over.

**What they touch.** Everything. Every sheet is recreated; every named range is reset; every saved Document Property (active palette, active profile, saved overrides) is wiped. Your data in Accounts and Transactions is overwritten or cleared.

**Gotcha — this is destructive.** Make a copy first (`File → Make a copy`) if you have data you don't want to lose. There's no confirmation dialog; the menu item runs immediately.

---

## How the menu gets built

`onOpen()` runs every time the workbook opens. It rebuilds the menu so the active palette and active profile checkmarks reflect the current Document Properties. If you've just switched profile via the menu and re-opened the file, the `✓` follows.

System tabs (`_Engine`, `_Config`, `_Schema`) are hidden on every open. If you unhid one to peek, it re-hides on next reload.

## Triggers

The script wires three triggers:

- **`onOpen`** — builds the menu, hides system tabs, jumps to Start Here on first open.
- **`onEdit`** — three responsibilities:
  - **Accounts column E** edited → stamps Last Updated in column F.
  - **Bank Import row 89-108 column E** edited → saves a keyword rule from column D and reapplies it to past Misc rows. Toast: `Rule saved ✓ · 3 rows updated`.
  - **Monthly Budget column D rows 17-36** edited → auto-saves the override to the active profile's Document Property. Numbers > 1 are auto-divided by 100.
- **`onSelectionChange`** — drives the Dashboard month pills (cols F-K) and Trends window pills (cols J-L). Clicking a pill writes the cell value (`N4` for Dashboard, `N7` for Trends) and the whole tab updates.

## Authorization

First click on any menu item triggers the Google permission dialog. The script requests:

```json
{
  "oauthScopes": [
    "https://www.googleapis.com/auth/spreadsheets.currentonly",
    "https://www.googleapis.com/auth/script.container.ui"
  ]
}
```

`spreadsheets.currentonly` is the narrowest scope Google offers — the script can read and write *this workbook only*. It can't see anything else in your Drive.

Approve. The prompt won't appear again unless you revoke access.
