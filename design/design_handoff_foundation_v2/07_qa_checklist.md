# 07 · QA Checklist

Run these in a fresh copy of the finished workbook before shipping. The checklist is split by **build target** (Google Sheets with Apps Script vs. Excel .xlsx) and then by tab.

---

## Build-target smoke tests

### Google Sheets (.gs)

1. ☐ Open the workbook → menu bar shows `💳 Column & Co.` between Extensions and Help.
2. ☐ Menu expands to: Import Bank Transactions · Clear Paste Zone · Apply Theme ▶ · Apply Budget Profile ▶ · Renumber Ledger · Help…
3. ☐ Apply Theme submenu lists all 24 palettes with `✓` on the active one (default: Light).
4. ☐ Apply Budget Profile submenu lists all 10 profiles with `✓` on the active one (default: Dave Ramsey).
5. ☐ Hidden tabs (`_Engine`, `_Config`, `_Schema`) are NOT visible in the bottom tab strip on first open.
6. ☐ Authorization dialog shows narrow scope: `spreadsheets.currentonly` only.
7. ☐ First open lands on Start Here.

### Excel (.xlsx)

1. ☐ Workbook opens in Excel without errors.
2. ☐ Apply Theme is a Data Validation dropdown in a single cell on Start Here. Changes retint via conditional formatting.
3. ☐ Apply Budget Profile is a Data Validation dropdown in Monthly Budget!C5. Changes pull new targets via XLOOKUP.
4. ☐ Bank Import Guide tab clarifies that CSV import is a Google-Sheets-only feature.
5. ☐ All 14 tabs visible, all numbers calculate correctly.

---

## Brand chrome (every tab)

1. ☐ Row 1 is Forest (`#1C3D2E`) full-bleed, 64–72px tall, contains logo lockup left, breadcrumb right.
2. ☐ Row 2 is Canopy (`#2D5C45`) full-bleed, ~32px tall.
3. ☐ Row 3 is Harvest Gold (`#C5A95A`) full-bleed, **exactly 3px tall**.
4. ☐ Footer is a Forest bar with `The Foundation v2.1 · columnandco.com · Do not distribute without license`.
5. ☐ Active palette does NOT retint the chrome — chrome stays Forest/Canopy/Gold.

---

## Start Here

1. ☐ Hero greeting: "Open it. Add your information. Get clear." in Playfair Display 38px Forest.
2. ☐ 24-palette tile grid is interactive — clicking a tile retints all content tabs.
3. ☐ 5 setup steps numbered 1–5 with Playfair Display italic titles.
4. ☐ LLM-ready callout is a Forest panel with the starter prompt in monospace.
5. ☐ Footer note: "Thank you for your purchase · Questions? columnandco.com"

## Trends

1. ☐ 6/12/24 window selector toggles correctly; KPI strip and chart re-window.
2. ☐ Per-category sparklines render with status colors (Forest/Gold/Garnet).
3. ☐ Delta chips show `+X%` or `-X%` and use the same status colors.
4. ☐ Income vs Expenses chart shows paired bars + Harvest-Gold savings-rate line.

## Dashboard

1. ☐ 4 KPI cards calculate correctly for the selected month.
2. ☐ Top Spending table has progress bars + status chips.
3. ☐ Donut renders with 12 segments using the Forest→Canopy→Gold→Garnet ramp.
4. ☐ AI Insights panel shows 3 callouts (LEAK / SUBS / WIN) auto-computed from data.
5. ☐ Month selector pills change the active month; everything reactives.

## Monthly Budget

1. ☐ All 10 profiles applicable via menu (Dave Ramsey → HCOL Renter → Custom).
2. ☐ Applying a profile updates: hero name/sub/blurb, 3 hero KPI cards, 20 target rows, footer summary, and the active checkmark in the menu.
3. ☐ Total Budgeted sub-line shows green "$X free" when income > targets, red "$X over" when targets > income.
4. ☐ Custom mode turns target cells yellow with gold borders. Other profiles: cream fill, no border.
5. ☐ Editing a target in Custom mode auto-updates the totals.
6. ☐ `Save current values as Custom…` persists the buyer's edits to Document Properties.
7. ☐ Switching to FIRE then back to Custom restores the buyer's saved values (not the seeds).
8. ☐ New Parent profile writes $1,800 to Childcare (verify the right row).
9. ☐ Self-Employed writes $2,560 to Taxes and $600 to Business.
10. ☐ HCOL Renter writes $4,100 to Housing.
11. ☐ FIRE, Zero-Based, Anti-Budget, Kakeibo, New Parent, Self-Employed, HCOL Renter all sum to exactly $10,230.
12. ☐ Dave Ramsey sums to $9,230 (intentional $1,000 unallocated).

## Health Score

1. ☐ Composite shown as Playfair Display 96px number with grade label.
2. ☐ 0–100 scale rendered in box-drawing characters with composite pip (`▼`) at correct position.
3. ☐ 5 indicators show: name, value, benchmark, weight, 0–100 bar, status chip.
4. ☐ Biggest Opportunity callout includes `⚡` and the delta arrow (`72 → 78`).

## Goals

1. ☐ 4 goal types selectable via dropdown.
2. ☐ Current column auto-pulls from ledger (Spending Limit/Debt Payoff) or Health Score (Savings Rate).
3. ☐ Progress bars color by status.
4. ☐ Forecast strip generates brand-voice copy for off-track goals.

## Transactions

1. ☐ Frozen header row.
2. ☐ Category dropdown shows all 20 categories.
3. ☐ Account dropdown reads from Accounts tab.
4. ☐ Default capacity ≥5,000 rows with dropdowns pre-extended.

## Bank Import Guide

1. ☐ Green paste zone (`#E5F5EA`) renders with the placeholder 5-row CSV.
2. ☐ Account name input (C6) is a yellow cell.
3. ☐ Pasting a CSV and running Import: rows appear in Transactions, categorized via Categories rules.
4. ☐ Review Income block populates with positive-amount rows for buyer confirmation.

## Net Worth

1. ☐ Hero block: $222,640 in Playfair 64px, monthly delta below, 6-month sparkline right.
2. ☐ Asset/Liability cards: $244,100 / $21,460 in Parchment-on-Forest.
3. ☐ Budget Accounts table pulls from Accounts (no manual entry).
4. ☐ Investments table has yellow input cells for manual entry.

## Accounts

1. ☐ Type dropdown: Checking · Savings · Credit · Loan · Investment.
2. ☐ Owner dropdown reads from Start Here buyer-name cells.
3. ☐ Editing Current Balance auto-stamps Last Updated.

## Categories

1. ☐ 20-category list with locked names (matches `data/profiles.json` categories array).
2. ☐ Keyword rules table ships pre-populated with ~80 rows of US merchants.
3. ☐ Editing a rule and re-importing applies the new rule.

## _Engine

1. ☐ Tab is hidden by default.
2. ☐ Unhiding it shows the 22-row × 24-col aggregation table.
3. ☐ Editing a Transactions row updates the relevant `_Engine` cell automatically.

---

## Cross-tab regression checks

1. ☐ Switching palettes from any tab repaints all content tabs but leaves chrome locked.
2. ☐ Applying a profile only changes Monthly Budget — no other tab's data changes.
3. ☐ Adding a transaction to Transactions updates: Dashboard KPIs, Trends sparklines, Top Spending, donut, Health Score, Goals (where linked), Net Worth (where the account is linked), and `_Engine`.
4. ☐ Editing an account balance updates: Net Worth, Accounts, and any Goal linked to that account.
5. ☐ The footer line on every tab reads `v2.1` (not `v2.0`).

---

## Brand-voice spot checks

1. ☐ No exclamation points in any in-sheet copy.
2. ☐ Brand name written `Column & Co.` everywhere (ampersand, period).
3. ☐ The middle-dot `·` is used as separator (with spaces) in the breadcrumb, footer, and section labels.
4. ☐ No emoji other than `💳` (menu title only) and `⚡` (Health Score callout only).
5. ☐ Body text is Forest at 75% opacity, not pure black or gray.
6. ☐ Pure black `#000` and pure white `#FFF` are NOT used anywhere. Use `#1C3D2E` and `#FAF8F2` instead.

---

## Final acceptance

The workbook ships when every box is checked AND a screenshot of the Dashboard, Monthly Budget, and Net Worth tabs (in Light palette) is visually indistinguishable from `reference/index.html`'s corresponding tabs except for elements explicitly called out as "doesn't translate to Sheets" in the per-tab specs.
