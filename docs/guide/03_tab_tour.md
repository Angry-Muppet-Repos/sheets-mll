# Tab Tour · Every tab, in order

The Foundation has twelve visible tabs plus three hidden system tabs. They're ordered left-to-right in the workbook in roughly the order you'll use them. Below: what each tab is for, what you touch, and what's computed for you.

---

## Start Here

The first tab you see when you open the workbook. Re-orients you on a return visit, walks a new buyer through the 6-step setup, and surfaces the two hero features — the **24-palette tile grid** and the **LLM-ready prompt block** you can paste into Claude or ChatGPT.

**You touch:** the palette tiles for at-a-glance reference (theme swaps actually run from `💳 Column & Co. → Apply Theme`). The LLM prompt block is a copy-paste source — select the text in the dark code block and paste it into Claude or ChatGPT.

**Computed for you:** nothing — this tab is static content.

> If the menu didn't appear, you're probably here because the script hasn't been installed yet. Jump to *Quickstart · Step 1*.

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

Where you tell the sheet what you *want* to spend. Pick one of ten profiles. Tweak any line. The Preset stays locked; your tweaks live in a separate Override column the script auto-saves per profile.

**You touch:**
- A profile from `💳 Column & Co. → Apply Budget Profile`. The active profile gets a `✓`.
- Any cell in the **Override %** column (yellow, column D). Leave blank to use the Preset; type a percent (`10%` or just `10`) to override.
- The 5 custom-category-slot names on the **Categories** tab — those names flow back into the budget as additional rows automatically.

**Computed for you:**
- **Preset %** (C, locked Cream) — the canonical numbers for the active profile.
- **Target %** (E) — `IF(D="", C, D)`. Override wins; otherwise Preset.
- **Target $** (F) — `Target % × Monthly Income`. This is what Dashboard and Health Score read from.
- **Δ %** (G) — how far your override drifts from the preset, colored Garnet over and Canopy under.
- The hero KPIs at top right (Preset Total vs With Overrides) and the Forest footer bar (Monthly Income, Preset Total, With Overrides, Savings Rate).

**The ten profiles:** Dave Ramsey · 50/30/20 · FIRE · Zero-Based · Anti-Budget · Kakeibo · New Parent · Self-Employed · HCOL Renter · Custom. Each comes with a one-line blurb explaining when it fits.

**Each profile keeps its own overrides.** Switching from Dave Ramsey to FIRE doesn't lose your Ramsey tweaks — they come back when you switch back. To start over within a profile, use `💳 Column & Co. → Apply Budget Profile → Clear overrides for current profile…`.

> **Monthly Income (C13) is a live formula** reading the most-recent month's actual income from `_Engine`. Don't overtype it — let it follow your data.

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

The "paste your CSV here" surface. Five live steps pinned to the top — the digits on steps 4 and 5 turn into live counts when there's work to do (or `✓` when there isn't).

**You touch:**
1. **C10** — the account dropdown. Pick the account these transactions belong to. (If the dropdown doesn't include it, use `💳 → Add Account…` first.)
2. **The green paste zone** (A12:H61) — paste your CSV anywhere inside. First non-empty row is treated as the header.
3. **💳 Column & Co. → Import Bank Transactions** — run it.
4. **Review Income** (rows 65-84) — confirm Yes/No for each positive-amount row before it counts as income.
5. **Uncategorized Merchants** (rows 89-108) — pick a Category from the dropdown to save a permanent keyword rule *and* recategorize past Misc rows in one move.

**Computed for you:**
- The header row is sniffed against nine bank formats (Chase, BoA, Wells Fargo, Cap One, Ally, Citi, USAA, Discover, Amex). The right Date / Description / Amount (or Debit/Credit pair) columns are picked automatically.
- Each row is categorized against the keyword rules on the Categories tab (longest match wins).
- Duplicates are detected by `Date + Description + Amount` — re-importing the same CSV is safe.
- The cursor jumps to whichever follow-up queue has work for you.

> When the queues are clear, run `💳 Column & Co. → Clear Paste Zone` to empty the box for the next bank.

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

The 20 fixed spending categories, the 5 custom slots you can name yourself, and the keyword rules that drive auto-categorization on CSV import.

**You touch:**
- The 5 yellow **custom-slot** rows. Type a name (e.g. `Vacation 2026`) and the slot flows into the Transactions category dropdown, the Monthly Budget targets table, and the `_Engine` aggregation rows automatically. Leave a slot blank to skip it.
- The **keyword rules** table (columns E-G). Add a row when you find a merchant the importer keeps mis-categorizing. The Category column is a dropdown — picking a custom-slot name routes future imports straight into your custom category.

**The 20 fixed categories:**

```
Housing, Food & Dining, Transportation, Shopping,
Utilities, Entertainment, Subscriptions, Personal Care,
Gifts & Donations, Health & Medical, Insurance, Savings,
Debt Payments, Education, Travel, Pets,
Childcare, Business, Taxes, Misc
```

Ships pre-populated with about 130 keyword rules covering the major US merchants (Whole Foods, Trader Joe's, Starbucks, Shell, Chevron, Netflix, Spotify, Amazon Prime, Amazon, Target, Comcast, PG&E, Geico, IRS, Treasury, and the rest).

**Longest match wins.** When two rules could match a description, the longer keyword takes priority. `AMAZON PRIME` beats `AMAZON`. Rule order doesn't matter; specificity does.

> After editing rules — adding a row, fixing a typo — run `💳 Column & Co. → Recategorize Ledger from Rules` to re-apply them to Misc rows already in your ledger. Rows you've manually categorized are never overwritten.

---

## _Engine *(hidden)*

The aggregation tab. Twenty-nine rows (20 fixed categories + 5 custom slots + Income / Expenses / NetCashFlow / SavingsRate) × a **rolling 24-month window ending in the current calendar month**.

**You touch:** nothing. It's hidden for a reason.

**Computed for you:** every per-month per-category sum in the workbook. Dashboard, Trends, Health Score, Net Worth, and Goals all read from here via INDEX into the monthly columns instead of running SUMIFS against the 5,000-row ledger.

**The window rolls automatically.** Column Y is always "this month"; column B is 23 months earlier. The window re-anchors in three places:

- On `💳 → Setup → Build workbook` — anchored to today.
- On open — if the calendar has moved past column Y since last opened, the window quietly shifts forward.
- On `Import Bank Transactions` — if any imported row's month is past column Y, the window shifts to include it. The import toast tells you: `… · engine rolled to 2026-09`.

If you ever need to unhide it for debugging: right-click any tab → Show hidden sheets. Re-hide before sharing the file.

---

## _Config *(hidden)*

Stores the 24 palette definitions, the 10 profile definitions, and a few other lookups. Hidden, system-managed.

---

## _Schema *(hidden — the LLM-ready substrate)*

Plain-English documentation of every column in every tab, formatted so Claude or ChatGPT can read it directly. This is what makes the *"ask AI to find your subscription leaks"* prompt actually work.

**You touch:** nothing.

When you share the workbook with Claude or ChatGPT, the assistant reads `_Schema` first to understand the structure, then answers your question against the data. See *Recipes · Ask Claude to read your sheet*.

---

*Read next: `04_recipes.md` for end-to-end walkthroughs.*
