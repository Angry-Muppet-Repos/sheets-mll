# Tab Tour · Every tab, in order

The Foundation has twelve visible tabs plus three hidden system tabs. They're ordered left-to-right in the workbook in roughly the order you'll use them. Below: what each tab is for, what you touch, and what's computed for you.

---

## Start Here

The first tab you see when you open the workbook. Re-orients you on a return visit, walks a new buyer through the 5-step setup, and surfaces the two hero features — the **16-palette tile picker** and the **LLM-ready prompt block** you can paste into Claude or ChatGPT.

**You touch:** the palette tiles to swap your theme, and the buyer-names cells (these feed the Owner dropdown on Accounts).

**Computed for you:** nothing — this tab is static content.

> If the menu didn't appear, you're probably here because the script hasn't been installed yet. Jump to *Quickstart · Step 2*.

---

## Trends

Six, twelve, or twenty-four months of history. Income vs Expenses bars with a savings-rate overlay, plus a category sparkline table so you can see at a glance which lines are creeping up.

**You touch:** the `6 mo · 12 mo · 24 mo` toggle near the top right. Click a pill to switch the window — every figure on the tab updates.

**Computed for you:**
- Four KPIs averaged over the active window (Avg Income, Avg Expenses, Avg Net, Avg Savings Rate)
- A combo chart — paired Forest/Canopy bars per month with a Harvest Gold savings-rate line
- One sparkline per category, colored by status (Forest on, Gold fair, Garnet over), with a delta chip showing change since the start of the window

The sparklines and chart read from the hidden `_Engine` aggregation — you'll never see the SUMIFS that drive them.

---

## Dashboard

Your everyday view. Current-month money at a glance — KPIs, top spending categories, donut breakdown, and the **AI Insights panel** (Leak / Subs / Win).

**You touch:** the month-selector pills at the top. Default is the current month; pick any of the six visible to scrub backward.

**Computed for you:**
- Four KPIs (Income, Expenses, Net Cash Flow, Savings Rate) with vs-last-month deltas
- Top Spending — eight categories with pacing bars and On / Fair / Over chips
- Month Snapshot — Avg Daily Spend, Transaction Count, Largest Expense, and the rest
- Spending Breakdown donut — 12 segments, Forest → Canopy → Gold → Garnet ramp
- AI Insights — three auto-computed callouts:
  - **LEAK** — the category with the biggest positive month-over-month drift
  - **SUBS** — total subscription count and how many you've added in six months
  - **WIN** — your strongest Health Score indicator

---

## Monthly Budget

Where you tell the sheet what you *want* to spend. Pick one of ten profiles or set every target yourself.

**You touch:**
- Your monthly income (the big number near the top — buyer-edited)
- A profile from `💳 Column & Co. → Apply Budget Profile`. The active profile gets a `✓`.
- Any yellow cell in the targets table. Editing a yellow cell flips you into **Custom** mode and saves your values for later.

**Computed for you:**
- The 20 category targets fill from the profile
- Total Budgeted with `+$X free` or `-$X over` against your income
- Savings Rate from your Savings line
- The pacing bars and chips on Dashboard and Health Score read from these targets

**The ten profiles:** Dave Ramsey · 50/30/20 · FIRE · Zero-Based · Anti-Budget · Kakeibo · New Parent · Self-Employed · HCOL Renter · Custom. Each comes with a one-line blurb explaining when it fits.

> **Switching profiles overwrites your targets.** If you've made edits in Custom mode and switch away, the script snapshots your Custom values first so they survive a round trip back.

---

## Health Score

A composite 0–100 across five weighted indicators. The point isn't the number — it's the **Biggest Opportunity** callout that tells you what one move would lift you the most, with a `72 → 78` delta arrow.

**You touch:** nothing. This tab is read-only.

**Computed for you:**

| Indicator | Weight | What "good" looks like |
|---|---|---|
| Savings Rate | 25% | ≥ 20% of income saved |
| Expense-to-Income | 20% | ≤ 80% of income spent |
| Emergency Fund | 20% | ≥ 3 months of expenses |
| Budget Adherence | 20% | ≥ 80% of categories on budget |
| Debt-to-Income | 15% | ≤ 36% debt payments |

Each indicator gets its own row with a 0–100 bar and an On / Fair / Over chip. Composite is the weighted sum.

---

## Goals

Savings targets, debt payoffs, spending limits, and savings-rate goals. The **Current** column reads from the ledger automatically — you never double-enter.

**You touch:** the rows. Add a Goal Name, pick a Type, set a Target, set a Deadline.

**Computed for you:**
- **Current** — branches on Type:
  - *Savings Target* — balance of the linked savings account
  - *Debt Payoff* — starting balance minus current balance of the linked debt account
  - *Spending Limit* — SUMIFS over the current month's transactions in the linked category
  - *Savings Rate* — your live savings rate from `_Engine`
- A progress bar (Forest under 85%, Gold 85–100%, Garnet over)
- A status chip
- A **forecast strip** below the table — one line per off-track goal, in brand voice:
  > "Japan Trip Fund hits target by Oct 2026 — one month late. Bump monthly transfer from $200 to $275 and you hit September."

---

## Transactions

The ledger. Every transaction lives here — imported from CSV via Bank Import Guide, or typed by hand.

**You touch:** any cell. Most often you'll re-categorize a row the import flagged as `Misc`.

**Columns:** Date · Description · Amount · Category · Account · Notes. (Plus a hidden `Month` column that powers SUMIFS in other tabs.)

**Capacity:** 5,000 rows by default — four to five years for a typical buyer. After a big import, run `💳 Column & Co. → Renumber Ledger` to re-apply the dropdowns to any new rows.

**Negative is expense, positive is income.** Stick to that sign convention and everything else works.

---

## Bank Import Guide

The "paste your CSV here" surface. Three steps, one button.

**You touch:**
1. **C6** — type the account name. Must match an entry on the Accounts tab exactly.
2. **The green paste zone** — paste your CSV. A 5-row preview is already there as a placeholder; your paste replaces it.
3. **💳 Column & Co. → Import Bank Transactions** — run it.

**Computed for you:**
- The header row is sniffed against nine bank formats (Chase, BoA, Wells Fargo, Cap One, Ally, Citi, USAA, Discover, Amex). The right Date / Description / Amount columns are picked automatically.
- Each row is categorized against the keyword rules on the Categories tab.
- Unmatched rows become `Misc` — clean them up on Transactions.
- Positive-amount rows surface in the **Review Income** block below the paste zone. Confirm Yes/No on each before they're treated as income in your Health Score.

> When you're done, run `💳 Column & Co. → Clear Paste Zone` to wipe the box back to its placeholder.

---

## Net Worth

Your full balance sheet. Splits **Budget Accounts** (auto-pulled from the Accounts tab) from **Investments** (you enter manually).

**You touch:**
- The Investments table — Account name, Type, Value. Yellow cells, you edit monthly.
- Nothing in the Budget Accounts table — those values mirror Accounts.

**Computed for you:**
- A hero block at the top with your **Total Net Worth** in big numbers, a six-month sparkline of history, and side-by-side Total Assets / Total Liabilities cards.
- Monthly delta — `+$3,250 this month` — based on the change since last month's snapshot.

> Why split budget accounts from investments? Because investments move with the market and budget accounts move with you. The two are different stories — putting them in different tables makes both readable.

---

## Accounts

The register of every place your money lives. Updates feed Net Worth automatically.

**You touch:**
- Account Name, Type (Checking · Savings · Credit · Loan · Investment), Owner (Joint · or one of the two buyer names from Start Here), Starting Balance, Current Balance, Notes.

**Computed for you:**
- **Last Updated** stamps itself when you change a Current Balance — don't touch this column.
- The Account Name list (column A) is the source for the Account dropdown on Transactions.

**Maintenance cadence:** update Current Balance once a month, right after you import that month's CSVs.

---

## Categories

The 20 spending categories and the keyword rules that drive auto-categorization on CSV import.

**You touch:** the keyword rules table. Add a row when you find a merchant the importer keeps mis-categorizing.

**The 20 categories:**

```
Housing, Food & Dining, Transportation, Shopping,
Utilities, Entertainment, Subscriptions, Personal Care,
Gifts & Donations, Health & Medical, Insurance, Savings,
Debt Payments, Education, Travel, Pets,
Childcare, Business, Taxes, Misc
```

Ships pre-populated with about 80 default rules covering the major US merchants (Whole Foods, Trader Joe's, Starbucks, Shell, Chevron, Netflix, Spotify, Amazon, Target, Comcast, PG&E, Geico, and the rest).

**Order matters.** When two keywords could match a transaction, the first one wins. Reorder rows manually if you need to.

> After editing rules, run `💳 Column & Co. → Recategorize Ledger from Rules` to re-apply them to transactions you've already imported.

---

## _Engine *(hidden)*

The aggregation tab. Twenty-two rows × twenty-four months of SUMIFS results that every chart and table reads from. Hidden because performance and because you don't want to accidentally edit it.

**You touch:** nothing. It's hidden for a reason.

**Computed for you:** every per-month per-category sum in the workbook. Dashboard, Trends, Health Score, and Goals all read from here instead of running SUMIFS against the 5,000-row ledger.

If you ever need to unhide it for debugging: right-click any tab → Show hidden sheets. Re-hide before sharing the file.

---

## _Config *(hidden)*

Stores the 16 palette definitions, the 10 profile definitions, and a few other lookups. Hidden, system-managed.

---

## _Schema *(hidden — the LLM-ready substrate)*

Plain-English documentation of every column in every tab, formatted so Claude or ChatGPT can read it directly. This is what makes the *"ask AI to find your subscription leaks"* prompt actually work.

**You touch:** nothing.

When you share the workbook with Claude or ChatGPT, the assistant reads `_Schema` first to understand the structure, then answers your question against the data. See *Recipes · Ask Claude to read your sheet*.

---

*Read next: `04_recipes.md` for end-to-end walkthroughs.*
