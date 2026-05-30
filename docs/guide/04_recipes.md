# Recipes · End-to-end walkthroughs

Five concrete jobs. Each one is something a real buyer does in their first month. Each one ends with a sheet that does something it didn't do before.

---

## Recipe 1 · Import your first Chase month

You've made your copy, installed the script, and added your accounts. Now you want a populated Transactions tab and a moving Dashboard.

**You'll need:** a Chase CSV export and 5 minutes.

1. **Get the CSV from Chase.** Log in, pick the card or checking account, go to **Statements & Activity → Download account activity**. Date range: the last 30 days. Format: **CSV**. Save to your desktop.
2. **Open the CSV in any text editor** (TextEdit, Notepad, VS Code). You'll see a header row like `Transaction Date,Post Date,Description,Category,Type,Amount,Memo`. **Select all, copy.**
3. **In the sheet, go to Bank Import Guide.** In cell **C6**, type the account name exactly as it appears on the Accounts tab — for example, `Chase Sapphire Card`. Case-sensitive.
4. **Click anywhere in the green paste zone.** Paste. The whole CSV lands in the merged cell. Don't worry about formatting — the script handles parsing.
5. **Run `💳 Column & Co. → Import Bank Transactions`.** A toast appears: `Imported 47 transactions`. The rows land in Transactions, categorized by the keyword rules.
6. **Open the Transactions tab.** Sort by date — newest at top. Scan for rows tagged `Misc` — those are merchants the keyword rules didn't recognize. Fix them in the Category column (it's a dropdown).
7. **Open Dashboard.** Pick the current month from the pill row at top. Your KPIs, donut, and top-spending bars are now reading your data.

> If the import said "no rows imported," the header row probably wasn't recognized. Confirm the first line of your paste is the Chase header, not a metadata row. Some Chase exports prepend a `"Account Number","Description","..."` block — delete those lines before pasting.

**What you now have:** a working ledger, a categorized month, and a Dashboard that responds. From here, every monthly import is a 90-second repeat of steps 1–5.

---

## Recipe 2 · Swap your look — themes and profiles

The Foundation ships with 16 in-sheet palettes and 10 budget profiles. The point is that you can try them on without committing.

### Swap a theme

1. Open any tab. Top-right corner: the swatch button (a small 4-square palette tile).
2. Click it. A panel opens with 16 palette tiles. Each tile shows a 3-stripe preview — primary, mid, accent.
3. Click a tile. The sheet repaints in under a second. Every KPI card, every zebra row, every sparkline takes the new colors.

The brand chrome (the Forest header, Canopy sub-band, and Harvest Gold rule at the top of every tab) **does not change.** That's the constant. Everything inside it is yours.

Your choice persists across reloads — the script saves the palette ID to Document Properties.

> Try `Sage` if you want softer greens. Try `Espresso` for the warmest. Try `Maize & Navy` or `Scarlet & Gray` if you went to that school.

### Swap a profile

1. Open **💳 Column & Co. → Apply Budget Profile**.
2. The submenu shows all 10 profiles. The active one has a `✓`.
3. Pick one. The Monthly Budget tab repaints — the 20 target cells fill with the profile's recommended numbers, the hero shows the profile name and a one-line description, the section sub-label reads `PRESET FROM PROFILE`.

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

> **Switching profiles overwrites the target cells.** If you've been in Custom mode and switch to a preset, the script snapshots your Custom values first — they come back when you re-select Custom.

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

## Recipe 4 · Build a Custom budget profile and save it

The 10 shipped profiles are starting points. Your real budget probably doesn't match any of them.

1. **Pick the closest profile.** `💳 Column & Co. → Apply Budget Profile → 50/30/20` (or whichever is nearest). The target cells fill.
2. **Edit any cell.** As soon as you change one target value, the script flips the active profile to `Custom`. The section sub-label changes from `PRESET FROM PROFILE` to `EDIT ANY YELLOW CELL`. The yellow fill appears on every editable target cell.
3. **Tune all 20 lines.** Use last month's actual numbers from the Dashboard as a sanity check — if your Dining actual was $922, a $400 target is wishful.
4. **Watch the Total Budgeted indicator.** If it shows `-$X over` in red, you're over your income — reduce a line. If it shows `+$X free` in green, you have unassigned money — increase your Savings line.
5. **Save the snapshot.** Run `💳 Column & Co. → Save Current Values as Custom` *(if your shipped menu has this item — see Menu Reference)*. Your numbers persist across profile switches forever.

The trick: build Custom by starting from a preset and editing toward reality. From scratch is slower and usually less accurate.

---

## Recipe 5 · Track a Goal and read the forecast

Goals are the lightest-touch feature in the sheet and the one most buyers under-use. Set one and you get a live read on whether you're on track and what to change if you're not.

### Add a Savings goal

1. Open the **Goals** tab.
2. In the first empty row: type a name (e.g. `Japan Trip Fund`). Pick `Savings Target` from the Type dropdown. Set a Target (e.g. `$5,000`). Pick the linked Account from the dropdown — pick the savings account where this money is actually accumulating. Set a Deadline (e.g. `Oct 2026`).
3. **The Current column fills automatically.** It reads the linked account's balance. You never type it.
4. The progress bar paints. The status chip turns Forest (on track), Gold (fair), or Garnet (behind).

### Read the forecast strip

Below the Goals table, the **Forecast strip** writes one sentence per off-track goal:

> "Japan Trip Fund hits target by Oct 2026 — one month late. Bump monthly transfer from $200 to $275 and you hit September."

That's actionable. Change your auto-transfer to $275, and at the next month's update, the Forecast strip recalculates and either confirms or recommends another bump.

### Other goal types

- **Debt Payoff.** Pick the credit card or loan from Account. Target = starting balance. Current = how much you've paid down. Useful when you're snowballing.
- **Spending Limit.** Pick a category (e.g. `Food & Dining`). Target = monthly cap (e.g. `$700`). Current = this month's actual from Transactions. Resets each month.
- **Savings Rate.** No linked account. Target = the percentage (e.g. `25%`). Current = your live savings rate from `_Engine`.

> One goal per type is plenty. The sheet supports more, but past four or five goals the table gets noisy and you stop reading it.

---

*Read next: `05_troubleshooting.md` for everything that can go sideways.*
