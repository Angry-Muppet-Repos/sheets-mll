# 02 · Tab Architecture — The Ledger v1

15 tabs. Every tab carries the standard brand chrome (rows 1–5: Forest header, Canopy band, Gold rule, spacer; title block rows 6–8) exactly as Foundation's `chrome_()` / `titleRow_()` build it. Reuse those helpers unchanged.

**Tab order (bottom strip):**
Start Here · Dashboard · P&L · Tax Center · Trends · Invoices · Mileage · Transactions · Bank Import Guide · Clients · Accounts · Categories · _Engine · _Config (hidden) · _Schema (hidden)

Reuse legend: **[REUSE]** = lift the Foundation pattern with renames only. **[ADAPT]** = Foundation pattern, modified per spec below. **[NEW]** = no Foundation equivalent.

---

## 1 · Start Here — [ADAPT]
Foundation layout: palette tile picker (24), setup steps, LLM teaser. Changes:
- 6 steps reworded: Install script → Add accounts → Add clients & streams → Set your tax rate (Tax Center) → Import transactions → Check your quarter.
- LLM teaser prompt swapped: "Which expense categories grew fastest over the last 6 months, and what's my projected Q3 tax set-aside at current pace?"

## 2 · Dashboard — [ADAPT]
Foundation Dashboard structure with business KPIs:
- Month pills + active month index at `N4` (named `cc_dashboard_month`), same seeding formula.
- KPI row: **REVENUE · EXPENSES · NET PROFIT · PROFIT MARGIN** (margin formatted 0.0%, sub-line "goal: set in Tax Center? no — static 'vs last month' live deltas, same as Foundation post-cleanup).
- Top Spending table (8 rows, live LARGE/MATCH off _Engine expense rows) with Budget column reading the Categories tab Monthly Target col, status chips reused.
- Month Snapshot panel: Revenue, Expenses, Net Profit, Margin, Invoices Outstanding (from Invoices tab), Tax Escrow balance (Accounts row tagged Escrow), Transactions count.
- Spending donut: live from _Engine expense rows for active month (Foundation post-cleanup pattern — formulas, never static values).
- AI Insights panel: mock-gated exactly like Foundation post-cleanup. Mock copy in 04_mock_data; blank copy reuses Foundation's ASK/PASTE/START pattern with business wording.

## 3 · P&L — [NEW] (the structured report tab)
Monthly + quarterly + YTD profit & loss. Layout:
- Row A: view selector (yellow): **Month / Quarter / YTD** dropdown + period selector driven by `cc_dashboard_month` (Month view) or a quarter dropdown (Q1–Q4 + year, see Tax Center year cell).
- REVENUE section: one row per stream (8 slots, names from Clients registry, amounts from _Engine rows 27–34 summed over the selected period) + Total Revenue.
- EXPENSES section: 20 fixed categories + 5 custom, each row showing `Category · Schedule C line · Amount · % of revenue`, summed over the selected period. Zebra striping, zero rows allowed to show $0 (a P&L shows its lines).
- NET PROFIT bar (Forest panel): Revenue − Expenses, margin %, and an "Owner draws this period (not in profit): $X" caption line — draws shown for awareness, never in the math.
- Implementation note: period summing = SUMPRODUCT over `_Engine` month columns matching the selected period; build one hidden helper row of month-match flags rather than 25 mega-formulas.

## 4 · Tax Center — [NEW] (the hero tab)
- INPUTS panel (yellow): Tax year (default current), Set-aside preset dropdown (**Standard 25% / Conservative 30% / Lean 20% / Custom**), Custom % cell, Effective income-tax rate (for the detail panel, default 15%), Mileage rate (default 0.70, caption: "IRS standard rate — verify current year").
- QUARTER CARDS — four Forest-on-parchment cards (Q1–Q4) each showing: due date text (Apr 15 · Jun 15 · Sep 15 · Jan 15 next yr), **Net profit this quarter** (live), **Recommended set-aside** (= net profit × set-aside%), **Paid** (yellow input), **Remaining** (with status chip: On Track when paid ≥ recommended, Fair within 90%, Over otherwise — reuse `statusChipCF_`).
- ESCROW TRACKER strip: "Recommended set-aside YTD: $A · In your Tax Escrow account: $B · Gap: $A−B" — B = balance of the Accounts row whose Type = "Tax Escrow". Forest panel, the screenshot moment.
- ESTIMATE DETAIL panel (collapsible feel, plain section): SE earnings = net profit × 0.9235; SE tax = × 15.3%; income tax = net profit × effective rate; mileage deduction = YTD miles × rate shown as a reducing line. Caption: estimates only.
- DISCLAIMER row (verbatim copy in 03_data_model) — non-negotiable, every build mode.

## 5 · Trends — [REUSE]
Foundation Trends verbatim with relabeled series: Revenue vs Expenses line, Profit Margin line, category sparkline table (20 expense categories), 6/12/24 window toggle. Same engine wiring pattern.

## 6 · Invoices — [NEW]
- Summary cards: **Outstanding · Overdue · Paid this month** (SUMIFS over the table).
- Table, 25 rows: `# (auto) · Client (dropdown from cc_clients_list) · Description · Issued · Due · Amount · Status (dropdown: Draft/Sent/Paid) · Paid date · Notes`. Yellow input on all editable cols.
- Overdue is DERIVED, not a dropdown option: CF paints the row's status cell Over-red when Status≠Paid AND Due<TODAY(); the summary "Overdue" SUMIFS uses the same condition.
- Caption: "Invoices are tracked here for follow-up. Revenue enters the books when the money lands in Transactions — cash basis, no double-counting."

## 7 · Mileage — [NEW]
- Table, 100 rows: `Date · Purpose · Miles · Deduction (= miles × Tax Center rate)`. Yellow inputs.
- Summary: Total miles YTD, Total deduction YTD (feeds Tax Center estimate-detail panel via named range `cc_mileage_ytd`).

## 8 · Transactions — [ADAPT]
Foundation ledger with one structural change — a Client/Stream column:
`Date · Description · Amount (signed) · Type · Category · Client/Stream · Account · Notes · Month (hidden helper, YYYY-MM)`
- **Type** dropdown: `Revenue / Expense / Transfer / Owner`. Owner = draws and contributions — excluded from every P&L figure.
- Category applies to Expense rows (dropdown from cc_tx_categories); Client/Stream applies to Revenue rows (dropdown from cc_clients_list). Each blank for the other type.
- Validations to row 5000; zebra to 1000 (Foundation scale rules).

## 9 · Bank Import Guide — [ADAPT]
Foundation 5-step import flow + paste zone + Review block + Uncategorized Merchants block, with classifier changes:
- Credits → **Revenue** (review block asks "Revenue? Yes/No — pick Client/Stream" with a stream dropdown column).
- Debits → Expense; transfer keywords → Transfer (reuse list).
- NEW keyword class **OWNER_KEYWORDS** (`owner draw`, `owner's draw`, `member draw`, `personal`, `atm withdrawal`, `venmo`, `zelle`, `cash app`) → Type=Owner, surfaced in the review block for confirmation. This is wedge #3 — it must work in the import path, not just as a manual dropdown.
- Account prefill mock-only (Foundation post-cleanup rule).

## 10 · Clients — [NEW] (Clients & Streams registry)
- Table, 12 rows (data rows 10–21 to mirror Accounts convention): `Name · Type (Client/Platform/Affiliate/Other) · Platform fee % (optional) · Active · Notes`. Yellow inputs.
- Named range `cc_clients_list` = names col. Feeds: Transactions Client/Stream dropdown, Invoices Client dropdown, _Engine revenue-by-stream rows 27–34 (first 8 active streams).

## 11 · Accounts — [REUSE]
Foundation Accounts registry, rows 10–21, with Type list extended: `Checking / Savings / Tax Escrow / Credit / Loan / Payment Processor`. Exactly one row is expected as Tax Escrow (Tax Center reads it via SUMIF on Type).

## 12 · Categories — [ADAPT]
Foundation layout + one new column:
- Rows 11–30: 20 fixed expense categories with `Name · Schedule C line · Monthly Target (yellow) ·` (full list + lines in 03_data_model). Rows 31–35: 5 custom slots (yellow name + line + target). Rows 36–38: system rows Revenue / Transfer / Owner (locked).
- Keyword rules region cols E–G exactly like Foundation; seed list in 03_data_model (business merchants: Adobe, Canva, Shopify, Etsy fees, Stripe, USPS, UPS, Upwork…).

## 13 · _Engine — [ADAPT] (hidden in spirit, visible — Foundation rule stands)
Transposed, 24 month columns B:Y, months YYYY-MM in row 1.
- Rows 2–21: 20 expense categories (SUMIFS: Type=Expense, Category=row, Month=col).
- Rows 22–26: 5 custom expense slots.
- Rows 27–34: revenue by stream (8 slots; SUMIFS: Type=Revenue, Client/Stream=name, Month=col).
- Row 35: **Revenue** (all Type=Revenue) · 36: **Expenses** · 37: **NetProfit** (35−36) · 38: **Margin** (37/35, IFERROR 0) · 39: **OwnerDraws** (info) · 40: **EscrowTransfers** (Transfers into the Tax Escrow account, info).
All formulas IF-guarded for empty months. Named `cc_engine_months` = row 1 months.

## 14 · _Config — [REUSE]
24 palettes verbatim from Foundation `_Config` / `design/.../data/palettes.json`. Replace the budget-profiles table with the **set-aside presets** table (Standard/Conservative/Lean/Custom + blurbs). Active palette + active preset rows.

## 15 · _Schema — [ADAPT]
Foundation prose pattern rewritten for The Ledger: tabs, conventions (signed amounts, Owner type excluded from profit, cash basis, quarter math), typical analysis questions ("Which categories grew fastest?", "Am I on pace for Q3?", "Which clients drive margin?"). Mock-gated demo-buyer line; no line may begin with `=` (Foundation lesson).

---

## What does NOT exist in The Ledger (deliberate cuts vs Foundation)
- No Monthly Budget tab / profile engine — replaced by the Monthly Target column on Categories and the set-aside presets in Tax Center. Cuts the largest single subsystem; the business buyer budgets less and escrows more.
- No Health Score — the Tax Center status chips and P&L margin carry that job. (Candidate for v1.1 as a "Business Health" composite if buyers ask.)
- No Goals tab in v1. (v1.1 candidate: revenue targets per stream.)
