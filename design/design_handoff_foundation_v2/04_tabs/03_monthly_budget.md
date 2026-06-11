# Tab · Monthly Budget  *(v2.1 hero change)*

Where the buyer sets their target spending per category for the month. The v2.1 upgrade is the **10-profile picker** with the slim horizontal-scroll pill row.

**Visual reference:** open `reference/index.html`, click **Monthly Budget** in the bottom tab strip.

**Source file:** `reference/tabs-actions.jsx` → `MonthlyBudgetTab()` and the `BUDGET_PROFILES` object

**Canonical data:** `data/profiles.json` — use this to seed the `_Profiles` hidden sheet.

---

## Purpose

- Let the buyer apply one of 10 budget methodologies, OR set every target manually (Custom)
- Show the active profile's hero info (name, sub, blurb) + summary KPIs
- Let the buyer edit any value in Custom mode (yellow cells)
- Feed Dashboard's `% of Budget` calculations and Health Score's `Budget Adherence` indicator

---

## Layout (top to bottom)

1. **3-row brand chrome**
2. **Hero row** (flex, two halves):
   - **Left:** `DESIRED FINANCIAL PROFILE / PICK A PROFILE OR SET YOUR OWN` section label, then the active profile's name in Playfair Display 30px Forest, sub in Jost 500 11px Gold tracked `0.14em`, blurb in Jost 300 13px Forest 75%, max-width 540px.
   - **Right:** 3 KPI cards in a `repeat(3,1fr)` grid — Monthly Income, Total Budgeted, Savings Rate. Total Budgeted shows `+$X free` or `-$X over` as sub-line.
3. **Profile picker — slim horizontal scroll pill row** *(see "Profile picker" section below)*
4. **Category Targets section** — section label `CATEGORY TARGETS · 20 CATEGORIES` with sub-label `EDIT ANY YELLOW CELL` (Custom mode) or `PRESET FROM PROFILE`.
5. **Two-column 20-row table** (10 rows per column). Columns: Category · Target · % Inc · Share bar.
6. **Footer summary bar** — full-bleed Forest, 4 KPIs: Monthly Income, Total Budgeted, Unallocated/Over, Savings Rate.
7. **Caption:** "Targets feed Dashboard's % of Budget and Health Score's Budget Adherence"
8. **Footer**

---

## Profile picker (the v2.1 hero change)

A single-line horizontal scroll of pill chips. Replaces the chunky 5-tile grid from earlier iterations.

### Visual spec

- One row, horizontal scroll if needed (mask-fade edges)
- Each pill: ~36px tall, pill-shape (`border-radius: 999px`)
- **Active pill:** Forest fill, Parchment text, gold dot (7px circle) on the left, small `0 1px 2px rgba(28,61,46,0.18)` shadow
- **Inactive pill:** Parchment fill, Forest text, neutral dot (`rgba(28,61,46,0.22)`)
- Pill content: dot · profile name (Jost 500 12.5px) · vertical hairline · `XX% save` stat (Jost 10.5px tabular-nums at 55–75% opacity)
- Edge-fade mask via `mask-image: linear-gradient(...)`

### 10 profiles (in display order)

| # | ID | Name | Hero blurb (truncated) |
|---|---|---|---|
| 1 | `dave-ramsey` | Dave Ramsey | "The Ramsey Method: big slices for housing and food, every dollar named, aggressive debt snowball." |
| 2 | `50-30-20` | 50/30/20 | "Senator Warren's rule. 50% needs, 30% wants, 20% savings + debt." |
| 3 | `fire` | FIRE | "Optimized for a 50%+ savings rate. Lean fixed costs, max retirement contributions." |
| 4 | `zero-based` | Zero-Based | "Income minus expenses equals zero. Nothing left unassigned. YNAB-style." |
| 5 | `anti-budget` | Anti-Budget | "Paula Pant: pay yourself 20% off the top. Don't track the rest by category." *(v2.1 new)* |
| 6 | `kakeibo` | Kakeibo | "100-year-old Japanese mindful method. 4 buckets: Needs / Wants / Culture / Unexpected." *(v2.1 new)* |
| 7 | `new-parent` | New Parent | "Childcare is now the second-largest line. 529 priority. Less discretionary." *(v2.1 new)* |
| 8 | `self-employed` | Self-Employed | "1099. 25% of every dollar escrowed for quarterly taxes. Heavier own-paid insurance." *(v2.1 new)* |
| 9 | `hcol-renter` | HCOL Renter | "NYC, SF, Seattle, Boston, DC. Rent eats 40%. Student loans get a serious line." *(v2.1 new)* |
| 10 | `custom` | Custom | "Click any yellow cell to edit. Totals update live." |

**Full profile data (name, sub, blurb, income, 20 targets) is in `data/profiles.json`.** Don't retype — copy from there.

---

## Category list (20, locked order)

```
Housing, Food & Dining, Transportation, Shopping,
Utilities, Entertainment, Subscriptions, Personal Care,
Gifts & Donations, Health & Medical, Insurance, Savings,
Debt Payments, Education, Travel, Pets,
Childcare, Business, Taxes, Misc
```

This list is shared with Transactions (auto-categorization), Categories (the keyword-rule tab), and the Dashboard breakdown.

---

## Spreadsheet implementation notes

### Profile picker

Sheets cannot render a horizontal-scroll pill row natively. Two implementation paths:

1. **Menu submenu** (recommended — see `apps_script/applyProfile.gs`):
   - The picker becomes `💳 Column & Co. ▸ Apply Budget Profile ▸ <profile>`. Active profile gets a `✓` prefix.
   - The hero row in-sheet shows just the active profile's name/sub/blurb — no inline picker.
   - This is the cleanest implementation and is documented in `apps_script/applyProfile.gs`.

2. **In-sheet row of 10 merged "pills":**
   - 10 merged regions in row N, each ~120px wide, with the profile name centered.
   - Conditional formatting paints the active one Forest with Parchment text.
   - `onSelectionChange` reads which pill was clicked and calls `applyProfile(id)`.

   The visual won't match the HTML's rounded pills (Sheets cells don't round corners) but the interaction model matches.

### Custom mode

When `_Profiles!active_profile = "custom"`:
- Target cells (column C, rows 10–29) become editable. Apply yellow fill `#FFFDE7` and 1px Harvest-Gold border via conditional formatting:
  ```
  CONDITIONAL FORMAT  range C10:C29  if  =$C$5="custom"  →  fill #FFFDE7, border #C5A95A
  ```
- The section label sub-text changes from `PRESET FROM PROFILE` to `EDIT ANY YELLOW CELL`.
- Apps Script's `saveCustomProfile()` (menu item) snapshots the buyer's edits into Document Properties so they survive across sessions and across-profile switches.

### Hero KPIs

- **Monthly Income:** `=INCOME_CELL` (single value, $10,230 in the mock — buyers edit this)
- **Total Budgeted:** `=SUM(C10:C29)`
- **Total Budgeted sub-line:** `=IF(C7-SUM(C10:C29)>=0, "$"&TEXT(C7-SUM(C10:C29),"#,##0")&" free", "$"&TEXT(SUM(C10:C29)-C7,"#,##0")&" over")` — conditional format: green text when free, red when over.
- **Savings Rate:** `=C21/C7` formatted as `0.0%` (assumes Savings is row 21 — verify against your category row mapping).

### Footer summary bar

Full-bleed Forest, 4 cells: Monthly Income / Total Budgeted / Unallocated / Savings Rate. Same data as the hero KPIs but inverted-color (Parchment text on Forest bg).

---

## Named ranges

- `budget_active_profile` — single cell, profile ID string
- `budget_income` — monthly income value
- `budget_targets` — `C10:C29`, the 20 target values
- `budget_total` — `=SUM(budget_targets)`
- `budget_savings_rate` — savings row / income

---

## Conditional formatting rules

1. **Yellow input cells** (Custom only):  
   Range `C10:C29` · Custom formula `=$C$5="custom"` · Fill `#FFFDE7`, border `#C5A95A`.
2. **Total Budgeted color:**  
   Range = the Total Budgeted KPI sub-line cell · Custom formula `=budget_income-budget_total<0` · Color `#832F30`.  
   Else color `#2D5C45`.
3. **Share-column bar coloring:**  
   Use a helper column with `=SPARKLINE(C10, {"charttype","bar"; "max",MAX($C$10:$C$29); "color1", SWITCH(B10, "Savings","#C5A95A", "Debt Payments","#832F30", "#1C3D2E")})`

---

## What's new in v2.1

- **5 new profiles** (Anti-Budget, Kakeibo, New Parent, Self-Employed, HCOL Renter)
- **Profile picker** → menu submenu (replaces single-cell dropdown)
- **Save current values as Custom** menu item — persistence via Document Properties
- **Childcare, Business, Taxes** lines now used (they were $0 in every original profile)
