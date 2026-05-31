# Recipes · End-to-end walkthroughs

Five concrete jobs. Each one is something a real buyer does in their first month. Each one ends with a sheet that does something it didn't do before.

---

## Recipe 1 · Import your first Chase month

You've made your copy, installed the script, and added your accounts. Now you want a populated Transactions tab and a moving Dashboard.

**You'll need:** a Chase CSV export and 5 minutes.

1. **Get the CSV from Chase.** Log in, pick the card or checking account, go to **Statements & Activity → Download account activity**. Date range: the last 30 days. Format: **CSV**. Save to your desktop.
2. **Open the CSV in any text editor** (TextEdit, Notepad, VS Code). You'll see a header row like `Transaction Date,Post Date,Description,Category,Type,Amount,Memo`. **Select all, copy.**
3. **Go to Bank Import Guide.** From the **C10** dropdown, pick the account these transactions belong to — for example, `Chase Sapphire Card`. (The dropdown is sourced from your Accounts list — if your account isn't there yet, run `💳 → Add Account…` first.)
4. **Click anywhere in the green paste zone** (A12). Paste. The CSV lands across the 50×8 grid. Don't worry about formatting — the script handles parsing.
5. **Run `💳 Column & Co. → Import Bank Transactions`.** The toast tells you what happened: `Imported 47 · 0 duplicates skipped · 5 fell to Misc · 1 income row for review`. Your cursor jumps to whichever queue still needs you.
6. **Confirm Review Income.** Each positive-amount row is listed with a Yes/No dropdown — confirm the rows that are real income (your paycheck), reject the rows that aren't (a refund, a transfer in).
7. **Categorize the Misc rows.** The Uncategorized Merchants block (rows 89-108) shows your Misc rows grouped by a suggested keyword. Pick a Category from the dropdown in column E. The script saves a permanent rule *and* reapplies it to past Misc rows in one move — the Status column tells you how many.
8. **Open Dashboard.** Pick the current month from the pill row at top. Your KPIs, donut, top spending, and AI Insights are all reading your data.

> If the import said "no rows imported," the header row probably wasn't recognized. Confirm the first line of your paste is the Chase header, not a metadata row. Some Chase exports prepend a `"Account Number","Description","..."` block — delete those lines before pasting.

> Re-importing the same CSV is safe — duplicates (same date, description, amount) are skipped and the toast counts them for you.

**What you now have:** a working ledger, a categorized month, and a Dashboard that responds. Every future Misc merchant you see is one click away from becoming a permanent rule. Monthly imports become a 90-second repeat of steps 1–5.

---

## Recipe 2 · Swap your look — themes and profiles

The Foundation ships with 16 in-sheet palettes and 10 budget profiles. The point is that you can try them on without committing.

### Swap a theme

1. Open `💳 Column & Co. → Apply Theme`. The submenu lists all 24 palettes — the active one has a `✓`.
2. Click a palette name. The sheet repaints in under a second. Every KPI card, every zebra row, every sparkline takes the new colors.

The brand chrome (the Forest header, Canopy sub-band, and Harvest Gold rule at the top of every tab) **does not change.** That's the constant. Everything inside it is yours.

Your choice persists across reloads — the script saves the palette ID to Document Properties and the `✓` follows the active palette in the menu.

> Try `Sage` if you want softer greens. Try `Espresso` for the warmest. Try `Maize & Navy` or `Scarlet & Gray` if you went to that school. The 24 palettes are listed in *Appendix · A*.

### Swap a profile

1. Open **💳 Column & Co. → Apply Budget Profile**.
2. The submenu shows all 10 profiles. The active one has a `✓`.
3. Pick one. The Monthly Budget tab repaints — the **Preset %** column (Cream) fills with the profile's recommended percentages, the hero shows the profile name + sub + blurb, and the **Override %** column loads any saved tweaks for that profile.

The 10 profiles:

| Profile | Best for |
|---|---|
| Dave Ramsey | Aggressive debt-snowball. Big housing/food slices. |
| 50/30/20 | Senator Warren's rule. Half on needs, 30% wants, 20% savings + debt. |
| FIRE | Optimized for a 50%+ savings rate. Lean fixed costs. |
| Zero-Based | YNAB-style. Every dollar named. Nothing unassigned. |
| Anti-Budget | Paula Pant. Pay yourself 20% off the top; don't track the rest. |
| Kakeibo | Japanese mindful method. Needs / Wants / Culture / Unexpected. |
| New Parent | Childcare is the second-largest line. 529 priority. |
| Self-Employed | 1099. 25% escrowed for quarterly taxes. |
| HCOL Renter | NYC, SF, Seattle, Boston, DC. Rent eats 40%. |
| Custom | Click any yellow cell to edit. Totals update live. |

> **Switching profiles does not lose your tweaks.** The Preset column is locked; your overrides live in a separate column the script saves per profile. Switch from Dave Ramsey to FIRE and back — your Ramsey overrides come back exactly as you left them.

---

## Recipe 3 · Ask Claude or ChatGPT to read your sheet

This is the wedge. The Foundation has a hidden `_Schema` tab that documents every column for an AI in plain English. Any assistant that can read a spreadsheet can read this one fluently.

### Setup

1. **Share your sheet with the assistant.** In Claude: drag the file into the chat, or paste the share URL. In ChatGPT: upload via the file picker. (For Drive-shared sheets, set link sharing to "anyone with the link can view.")
2. **Paste one of the prompts below.** The assistant reads `_Schema` first to understand the structure, then runs the analysis you asked for.

### Starter prompts

**Find subscription leaks**

> Find every category where I'm trending over budget for three or more months in a row. Estimate the annual cost of that drift. List the top three subscriptions I should cancel.

**Spot the dining creep**

> My Dining category has crept up. Show me the month-over-month progression for the last six months and tell me what specifically changed — was it more meals, or pricier meals?

**Validate my Health Score**

> Read my Health Score tab. Tell me which of the five indicators is the cheapest to lift by 10 points and what specific change would do it.

**Forecast my Goals**

> For each Goal that isn't on track, tell me the exact monthly transfer increase that would get me to my deadline. Use the current pace from my Transactions tab.

**Rebalance my categories**

> Compare my Monthly Budget targets against my actual six-month average from `_Engine`. Suggest a rebalanced budget that's closer to reality but still saves 20%.

### What good output looks like

The assistant should cite specific transactions, specific months, and specific dollar figures — not generalities. If the answer says "you spend a lot on dining," push back with *"Quote the figures."* The `_Schema` tab tells the AI it can.

> Privacy note: when you share the file with an external AI, the AI sees the data. Some assistants train on your data by default; check the assistant's settings. Claude does not train on Pro/Team API conversations by default. If you don't want to share, redact account numbers and names before uploading.

---

## Recipe 4 · Override a budget profile

The 10 shipped profiles are starting points. Your real budget probably doesn't match any of them line-by-line. You don't need to abandon the profile — just override the lines that don't fit.

1. **Pick the closest profile.** `💳 Column & Co. → Apply Budget Profile → 50/30/20` (or whichever is nearest). The Preset column fills.
2. **Type into the Override column (D, yellow).** Type a percent — `15%`, `8.5%`, or just `15` (the script normalizes bare numbers to percent). Leave a cell blank to use the Preset.
3. **Watch Δ %.** Column G shows how far your override drifts from the preset — Garnet over, Canopy under, neutral at zero.
4. **Tune all 20 lines.** Use last month's actuals from Dashboard as a sanity check — if your Dining actual was $922 on a $10,230 income, that's 9% of income; a 4% target is wishful.
5. **Watch the hero KPIs.** The right-side KPI cards show **Preset Total** (the canonical sum) vs **With Overrides** (your tuned sum). The sub-line tells you "1.2% above preset" or "0.8% below preset" so you know where you've drifted.
6. **No save step.** Every Override edit is auto-saved to that profile's Document Property. Reload, switch profiles, come back — your tweaks are there.

> Want to start over within a profile? `💳 Column & Co. → Apply Budget Profile → Clear overrides for current profile…` wipes only the Override column. The Preset stays.

The trick: tune toward reality from the nearest preset. Starting from `Custom` (an empty profile) is slower and usually less accurate.

---

## Recipe 5 · Track a Goal and read the forecast

Goals are the lightest-touch feature in the sheet and the one most buyers under-use. Set one and you get a live read on whether you're on track and what to change if you're not.

### Add a Savings goal

1. Open the **Goals** tab.
2. In the first empty row: type a name (e.g. `Japan Trip Fund`). Pick `Savings Target` from the Type dropdown (column B). Pick the linked account from the Source dropdown (column C, yellow) — the savings account where this money is actually accumulating. Set a Target (e.g. `$5,000`, yellow column D). Set a Deadline (column G, free text — `Oct 2026`).
3. **The Current column fills automatically.** Type-aware: for Savings Target it reads the linked account's balance. You never type it.
4. The progress bar (sparkline) paints. The Status chip turns Forest (on track), Gold (fair), or Garnet (behind), with the threshold appropriate to the goal type.

### Read the forecast strip

Below the Goals table, the **Forecast strip** picks the biggest-gap Savings Target goal and projects months at your current NetCashFlow pace:

> "Japan Trip Fund hits target in ~12 months at current pace ($410/mo saved)."

Or, if you're cash-flow negative this month:

> "Negative cash flow this month — trim before adding a new goal."

Or, if every Savings Target is met:

> "All Savings Target goals met — pick a new target!"

The forecast updates with every transaction you import. Change your auto-transfer and watch the projection move.

### Other goal types

- **Debt Payoff.** Source = the credit card or loan from your Accounts list. Target = starting balance. Current = how much you've paid down. Useful when you're snowballing.
- **Spending Limit.** Source = a category (e.g. `Food & Dining`). Target = the monthly cap (e.g. `$700`). Current = this month's actual from Transactions. Resets each month — Status flips to `On Track` / `Fair` / `Over` as the month progresses.
- **Savings Rate.** Source = blank. Target = the percentage (e.g. `20%`). Current = your live savings rate from `_Engine` for the active Dashboard month.

> One goal per type is plenty. The sheet supports more, but past four or five goals the table gets noisy and you stop reading it.

---

*Read next: `05_troubleshooting.md` for everything that can go sideways.*
