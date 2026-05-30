# Appendix · Reference tables

Quick-lookup data. Most buyers won't need this section. It's here so power users can navigate the workbook with confidence.

---

## A · The 16 palettes

These are the buyer-selectable interior palettes. The brand chrome (Forest header, Canopy sub-band, Harvest Gold rule) **never** changes — only the content area.

| Name | Primary | Mid | Accent |
|---|---|---|---|
| Light *(default)* | `#1C3D2E` | `#2D5C45` | `#C5A95A` |
| Warm Greige | `#3D2B1F` | `#5C4033` | `#C8873A` |
| Cool Slate | `#1E3A5F` | `#2D5282` | `#64748B` |
| Sage | `#2D4A3E` | `#3D6455` | `#8FAF7E` |
| Espresso | `#2C1810` | `#4A2C1A` | `#C8873A` |
| Maize & Navy | `#003366` | `#004080` | `#FFCB05` |
| Scarlet & Gray | `#BB0000` | `#CC0000` | `#808080` |
| Orange & Navy | `#002D6D` | `#003D94` | `#F47920` |
| Green & Gold | `#154734` | `#1A5C43` | `#CBA135` |
| Purple & Gold | `#4A1C7C` | `#5E2499` | `#FFC72C` |
| Crimson & White | `#9B1B30` | `#B52238` | `#FFFFFF` |
| Garnet & Gold | `#782F40` | `#9B3B52` | `#CBA135` |
| Forest & White | `#154733` | `#1E6048` | `#FFFFFF` |
| Royal & Gold | `#002D72` | `#003D9C` | `#B5A642` |
| Silver & Black | `#1A1A1A` | `#2D2D2D` | `#A8A9AD` |
| Custom | `#1B2A4A` | `#2C3E6B` | `#C8873A` |

---

## B · The 10 budget profiles

Each profile fills the 20 target cells on Monthly Budget. Default income baseline used in the shipped mock data: $10,230/month.

| Profile | Sub | One line |
|---|---|---|
| Dave Ramsey | Envelopes · Baby Steps | Big housing and food slices. Aggressive debt snowball. 3–6 month emergency fund. |
| 50/30/20 | Needs · Wants · Savings | Half on needs, 30% wants, 20% savings + debt. |
| FIRE | Financial Independence · Retire Early | 50%+ savings rate. Lean fixed costs. Max retirement contributions. |
| Zero-Based | Every dollar gets a job | Income minus expenses equals zero. YNAB-style. Nothing unassigned. |
| Anti-Budget | Paula Pant | Pay yourself 20% off the top. Don't track the rest. |
| Kakeibo | Japanese mindful method | Four buckets: Needs / Wants / Culture / Unexpected. |
| New Parent | After the baby | Childcare is the second-largest line. 529 priority. Less discretionary. |
| Self-Employed | 1099 income | 25% of every dollar escrowed for quarterly taxes. Heavier own-paid insurance. |
| HCOL Renter | High cost of living | NYC, SF, Seattle, Boston, DC. Rent eats 40%. Student loans get a serious line. |
| Custom | Buyer-defined | Click any yellow cell to edit. Totals update live. |

Full per-category numbers are in `data/profiles.json` in the design handoff.

---

## C · The 20 categories (locked order)

```
Housing, Food & Dining, Transportation, Shopping,
Utilities, Entertainment, Subscriptions, Personal Care,
Gifts & Donations, Health & Medical, Insurance, Savings,
Debt Payments, Education, Travel, Pets,
Childcare, Business, Taxes, Misc
```

This list is shared by Monthly Budget, Transactions, Categories, and the Dashboard breakdown. Don't rename — the categorization rules and the `_Engine` SUMIFS reference these strings verbatim.

---

## D · Named ranges

These are the named ranges the workbook ships with. **Data → Named ranges** to view in the live sheet. Most buyers never touch them — they're listed so power users can write their own formulas against the data model.

### Dashboard

| Range | What it holds |
|---|---|
| `dashboard_active_month` | Single cell. Index 0..23 into `_Engine` for the currently selected month. |
| `dashboard_kpi_income` | Current-month income KPI value. |
| `dashboard_kpi_expenses` | Current-month expenses KPI. |
| `dashboard_kpi_net` | Current-month net cash flow. |
| `dashboard_kpi_savings_rate` | Current-month savings rate (decimal). |
| `dashboard_top_spending` | 8-row × 4-column block driving the Top Spending table. |
| `dashboard_breakdown` | 12-row × 2-column block driving the donut. |

### Trends

| Range | What it holds |
|---|---|
| `trends_window` | Single cell. `6`, `12`, or `24`. |
| `trends_months` | Dynamic — the active slice of `_Engine`'s month columns. |
| `trends_category_rows` | The per-category rows driving the sparkline table. |

### Monthly Budget

| Range | What it holds |
|---|---|
| `budget_active_profile` | Single cell. Profile ID string (`dave-ramsey`, `50-30-20`, `custom`, etc.). |
| `budget_income` | Monthly income value. |
| `budget_targets` | `C10:C29` — the 20 target cells. |
| `budget_total` | `=SUM(budget_targets)`. |
| `budget_savings_rate` | Savings row / income. |

---

## E · Document Properties

These persist per workbook copy across reloads. Apps Script writes them; the buyer never sees them directly.

| Key | Value | Set by |
|---|---|---|
| `cc_first_open` | `'true'` | `onOpen()` on first open. Controls the auto-jump to Start Here. |
| `cc_active_palette` | Palette ID | `applyTheme()` |
| `cc_active_profile` | Profile ID | `applyProfile()` |
| `cc_custom_profile` | JSON string of category → target | `saveCustomProfile()` |
| `cc_buyer_names` | JSON `[name1, name2]` | Start Here input |

To inspect from Apps Script: `PropertiesService.getDocumentProperties().getProperties()`. To reset all (use sparingly): `.deleteAllProperties()`.

---

## F · Glossary

| Term | Definition |
|---|---|
| **AI Insights** | The Leak / Subs / Win panel on Dashboard. Auto-computed from your data. |
| **Brand chrome** | The 3-row header (Forest / Canopy / Harvest Gold rule) at the top of every tab. Locked — palette swaps don't touch it. |
| **Canopy** | The mid-green brand color (`#2D5C45`). Used for sub-bands and section labels. |
| **Composite Score** | The single 0–100 number on Health Score. Weighted average of five indicators. |
| **Custom profile** | Your own budget targets, saved automatically when you edit any preset. |
| **Forest** | The primary brand color (`#1C3D2E`). Used for headers, hero bars, big numerals. |
| **Harvest Gold** | The brand accent color (`#C5A95A`). Used for the 3px rule, the tagline, callout labels. |
| **`_Engine`** | Hidden system tab. 22 rows × 24 months of pre-aggregated SUMIFS that drive every chart. |
| **`_Schema`** | Hidden system tab. Plain-English data dictionary that lets Claude or ChatGPT read your workbook. |
| **Named range** | A label that points to a cell or range, so formulas reference `budget_targets` instead of `'Monthly Budget'!C10:C29`. |
| **Pacing bar** | The horizontal bar in the Top Spending table showing percent of budget consumed. |
| **Profile** | A pre-set budget methodology (Dave Ramsey, 50/30/20, FIRE, etc.). 10 ship. |
| **Sparkline** | A tiny inline chart. Used per-category on Trends and as the 6-month line on Net Worth. |
| **Status chip** | On Track / Fair / Over. Color-coded label on Dashboard, Health Score, and Goals. |
| **Tile picker** | The 16-palette grid you open from the top-right swatch button. |
