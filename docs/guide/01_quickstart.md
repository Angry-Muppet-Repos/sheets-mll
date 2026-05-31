# Quickstart · Six steps to a working sheet

You can stop reading after this section and have The Foundation running. Everything else in this guide is reference for when you want to go deeper.

Time: about ten minutes. You need a Google account, your bank's CSV export, and the file you just downloaded.

---

## 1 · Install the script

The `.gs` files in your download are what wire up the `💳 Column & Co.` menu — CSV import, theme swaps, profile picker, the rest.

1. Open your `the_foundation_v2_BLANK.xlsx` in Google Drive. Right-click → **Open with → Google Sheets**, then **File → Save as Google Sheets**.
2. Go to **Extensions → Apps Script**. A new tab opens.
3. Delete the placeholder `Code.gs` content.
4. Open each `.gs` file from your download in a text editor, copy the contents, and paste each into a new script file in the editor (`File → New → Script`). Name them to match (`00_constants.gs`, `01_helpers.gs`, and so on). Save (`Cmd/Ctrl + S`).
5. Add the sidebar: `File → New → HTML`, name it `Help` (the script loads it via `HtmlService.createHtmlOutputFromFile('Help')`). Paste in `Help.html` from your download. Save.
6. Close the Apps Script tab and reload your sheet.

A new menu appears at the top: **💳 Column & Co.** That's the control panel.

> First click of any menu item triggers a Google permission dialog. The script requests `spreadsheets.currentonly` — the narrowest scope Google offers. It can read and write *this workbook only*. Approve.

---

## 2 · Build the workbook

The freshly-pasted script is a blank canvas. Run the builder to lay out all 14 tabs, the brand chrome, named ranges, and seed data.

- `💳 Column & Co. → Setup → Build workbook (mock data)` — populates everything with the Marcus & Elena Brooks demo. Useful so you can see what "good" looks like before importing your own data.
- `💳 Column & Co. → Setup → Build workbook (blank)` — same layout, no transactions or accounts. Start here if you don't want to delete demo data later.

Either one runs in a few seconds. The sheet lands you on **Start Here**.

> **This is destructive.** Both options wipe every tab. Don't run a build over data you care about.

---

## 3 · Add your accounts

Go to the **Accounts** tab. One row per place your money lives:

- Every checking account
- Every credit card
- Every savings account
- Every cash envelope you care about

For each row: type the account name, pick the type from the dropdown (Checking · Savings · Credit · Loan · Investment), pick the owner, enter today's balance. The **Last Updated** column stamps itself when you edit a balance — don't touch it.

If you have investments — brokerage, 401(k), Roth IRA — those go on the **Net Worth** tab, not Accounts. Accounts is for the money that moves day to day. Net Worth is for the money that sits.

**Shortcut.** From Bank Import Guide, use `💳 Column & Co. → Add Account…` to add a row without leaving the import flow. The dialog asks for a name, the script appends a row with sensible defaults (Checking, Joint, today's date) and parks your cursor on the Starting Balance cell.

---

## 4 · Pick your profile

Go to **Monthly Budget**. Run `💳 Column & Co. → Apply Budget Profile` and pick the one closest to your life:

| Profile | Best for |
|---|---|
| Dave Ramsey | Aggressive debt-snowball. Big housing/food slices. |
| 50/30/20 | Senator Warren's rule. Half on needs, 30% wants, 20% savings + debt. |
| FIRE | Optimized for a 50%+ savings rate. Lean fixed costs. |
| Zero-Based | YNAB-style. Every dollar named. Nothing unassigned. |
| Anti-Budget | Paula Pant. Pay yourself 20% off the top. |
| Kakeibo | Japanese mindful method. Four buckets. |
| New Parent | Childcare is the second-largest line. 529 priority. |
| Self-Employed | 1099. 25% escrowed for quarterly taxes. |
| HCOL Renter | NYC, SF, Seattle, Boston, DC. Rent eats 40%. |
| Custom | Click any yellow cell to edit. |

The **Preset %** column (Cream, locked) fills with that profile's recommended percentages. The **Override %** column (yellow, editable) is where your tweaks go — leave it blank to use the preset, or type a percent (`10%` or just `10`) to override that line. Target % and Target $ recompute automatically.

Each profile keeps its **own** overrides. Switching to FIRE and back to Dave Ramsey doesn't lose your Ramsey tweaks.

---

## 5 · Import your first month

Go to the **Bank Import Guide** tab. Five steps are pinned at the top — the digits on steps 4 and 5 turn into live counts when there's work to do.

1. In your bank's website, export the last 30 days as CSV.
2. Open the CSV in any text editor (or the download itself). Copy all of it.
3. On Bank Import Guide, pick your account from the **C10** dropdown.
4. Paste your CSV anywhere in the green zone. First non-empty row is treated as the header.
5. Open **💳 Column & Co. → Import Bank Transactions**.

The toast tells you what happened: `Imported 47 · 3 duplicates skipped · 5 fell to Misc · 1 income row for review`. The cursor jumps to whichever queue still needs you:

- **Review Income** (rows 65-84) — every positive-amount row, with a Yes/No dropdown. Confirm each before it counts toward income.
- **Uncategorized Merchants** (rows 89-108) — every `Misc` row, grouped by suggested keyword. Pick a category from the dropdown in column E — the script saves a permanent rule *and* reapplies it to your past Misc rows in one move.

The sheet recognizes nine bank CSV formats out of the box (Chase, BoA, Wells Fargo, Cap One, Ally, Citi, USAA, Discover, Amex). Duplicates are detected by `Date + Description + Amount` — re-importing the same CSV is safe.

---

## 6 · Pick your look

Top-right of the menu: **`💳 Column & Co. → Apply Theme`**. Twenty-four palettes, from `Light` (the brand-aligned default) through `Sage`, `Espresso`, `Maize & Navy`, `Garnet & Gold`, all the way to `Olive & Cream`. The active one has a `✓`.

Pick one. Every KPI card, every zebra row, every section header, every sparkline takes the new colors. The brand chrome (Forest header, Canopy sub-band, Harvest Gold rule) **does not change** — that's the constant.

Your choice persists across reloads.

---

## You're operational

Open the **Dashboard** tab. KPI cards, donut chart, top spending, and the AI Insights panel are all reading from the transactions you just imported. Open **Trends** — six-month sparklines, one per category, plus an Income-vs-Expenses combo chart. Open **Health Score** — a live 0–100 composite, five weighted indicators, and a "Biggest Opportunity" callout that names the single category most worth fixing.

From here:

- **Set a goal** — see *Recipes · Track a Goal*.
- **Ask Claude or ChatGPT to read your sheet** — see *Recipes · The AI prompt*.
- **Tweak your budget** — see *Recipes · Override a budget profile*.
- **Something not working** — see *Troubleshooting*.

— *Column & Co. · Life, Organized.*
