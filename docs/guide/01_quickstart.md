# Quickstart · Five steps to a working sheet

You can stop reading after this section and have The Foundation running. Everything else in this guide is reference for when you want to go deeper.

Time: about ten minutes. You need a Google account, your bank's CSV export, and the file you just downloaded.

---

## 1 · Make your copy

Open `the_foundation_v2_BLANK.xlsx` in Google Drive. Right-click → **Open with → Google Sheets**. Then **File → Save as Google Sheets**.

You now own a Google Sheets copy of the workbook. The original `.xlsx` is your backup — keep it.

> A note on ownership: this copy lives in your Drive. Column & Co. never sees it. No subscription, no third party. The file is yours.

---

## 2 · Install the script

The `.gs` file in your download is what wires up the `💳 Column & Co.` menu — CSV import, theme swaps, profile picker, and the rest.

1. In your copy of the sheet, go to **Extensions → Apps Script**. A new tab opens.
2. Delete the placeholder `Code.gs` content.
3. Open `ColumnCo_Foundation_v2.gs` from your download in a text editor. Copy the entire file.
4. Paste it into the Apps Script editor. Click the **save** icon (or `Cmd/Ctrl + S`).
5. Close the Apps Script tab and reload your sheet.

A new menu appears at the top: **💳 Column & Co.** That's the control panel for everything the sheet does beyond what spreadsheet cells can do on their own.

The first time you click an item in that menu, Google asks for permission. The script needs to read and write *this workbook only* — the scope is `spreadsheets.currentonly`, the narrowest one Google offers. Approve it.

---

## 3 · Add your accounts

Go to the **Accounts** tab. Add one row per place your money lives:

- Every checking account
- Every credit card
- Every savings account
- Every cash envelope you care about

For each row: type the account name, pick the type, enter today's balance, and (for credit cards) the statement day. The **Last Updated** column stamps itself when you edit a balance — don't touch it.

If you have investments — brokerage, 401(k), Roth IRA — those go on the **Net Worth** tab, not Accounts. Accounts is for the money that moves day to day. Net Worth is for the money that sits.

---

## 4 · Import your first month

Go to the **Bank Import Guide** tab.

1. In your bank's website, export the last 30 days as CSV.
2. Open the CSV in any text editor (or the bank's download itself). Copy all of it.
3. In cell **C6** of the Bank Import Guide, type the account name you want these transactions to land in. Use the same spelling as the **Accounts** tab.
4. Paste your CSV into the merged paste-zone box below.
5. Open **💳 Column & Co. → Import Bank Transactions**.

A toast appears: `Imported 47 transactions`. The rows land in the **Transactions** tab, categorized using the keyword rules on the **Categories** tab. Anything the rules don't match becomes `Misc` — you'll clean that up in a few minutes.

The sheet recognizes nine bank CSV formats out of the box: Chase, Bank of America, Wells Fargo, Capital One, Ally, Citi, USAA, Discover, Amex. If yours isn't one of those, the script still tries to sniff the columns.

> Income shows up in a separate **Review Income** block on the same tab. Confirm each row, then it joins the ledger.

---

## 5 · Pick your look

Top-right corner of any tab, there's a swatch button — sixteen color palettes. Click it, pick one. The whole sheet repaints.

The brand chrome on every tab (Forest header, Canopy sub-band, Harvest Gold rule) stays put — that's the constant. Everything inside it is yours to color.

You can also pick a budget profile: **💳 Column & Co. → Apply Budget Profile**. Ten profiles ship with the sheet — 50/30/20, Zero-Based, Anti-Budget, Kakeibo, New Parent, Self-Employed, HCOL Renter, and three more. Pick the one closest to your life. The Monthly Budget tab fills in. You can edit any number after — that switches you into Custom mode automatically, and your numbers are saved.

---

## You're operational

Open the **Dashboard** tab. Your KPI cards, donut chart, and AI Insights panel are reading from the transactions you just imported. Open **Trends** — six-month sparklines, one per category. Open **Health Score** — a 0–100 read on your money, with the biggest opportunity called out at the top.

From here:

- **Set a goal** — see *Recipes · Track a Goal*.
- **Ask Claude or ChatGPT to read your sheet** — see *Recipes · The AI prompt*.
- **Make the budget yours** — see *Recipes · Build a Custom budget*.
- **Something not working** — see *Troubleshooting*.

The reference sections that follow document every menu item, every tab, and every recipe in detail. Read what you need, ignore the rest.

— *Column & Co. · Life, Organized.*
