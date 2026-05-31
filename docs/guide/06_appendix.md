# Appendix · Reference tables

Quick-lookup data. Most buyers won't need this section. It's here so power users can navigate the workbook with confidence.

---

## A · The 24 palettes

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
| Midnight | `#0B1F3A` | `#142E55` | `#14B8A6` |
| Burgundy | `#5C0A1A` | `#7A0E22` | `#E8D5B5` |
| Mocha | `#5C3A21` | `#7A4F2D` | `#D4A574` |
| Indigo & Blush | `#2E1F6B` | `#3D2A8C` | `#EAB0B8` |
| Pine & Brass | `#1F3A2E` | `#2E5544` | `#B8964A` |
| Ocean & Coral | `#0F4858` | `#166075` | `#F47B6A` |
| Charcoal & Mint | `#2C2C2E` | `#44444A` | `#A8D5BA` |
| Olive & Cream | `#3D4A1F` | `#56672E` | `#C8B27A` |
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

## C · The 20 fixed categories (locked order) + 5 custom slots

The 20 fixed categories:

```
Housing, Food & Dining, Transportation, Shopping,
Utilities, Entertainment, Subscriptions, Personal Care,
Gifts & Donations, Health & Medical, Insurance, Savings,
Debt Payments, Education, Travel, Pets,
Childcare, Business, Taxes, Misc
```

Plus **5 buyer-named custom slots** (the yellow rows on the Categories tab). Name them anything (`Vacation 2026`, `Sailing`, `In-Laws`) — slot names flow into:

- The Transactions Category dropdown
- The Monthly Budget targets table (rows 37-41)
- The `_Engine` aggregation rows (rows 22-26)
- The Categories keyword-rules dropdown (so you can route a merchant straight into a custom slot)
- The Trends sparkline table

Don't rename the fixed 20 — the keyword rules and `_Engine` SUMIFS reference those strings verbatim.

Two reserved system categories — `Income` and `Transfer` — exist on Categories rows 36-37 so the Transactions dropdown picks them up. Don't delete them.

---

## D · Named ranges

These are the named ranges the workbook ships with. **Data → Named ranges** to view in the live sheet. Most buyers never touch them — they're listed so power users can write their own formulas against the data model.

| Range | Where | What it holds |
|---|---|---|
| `cc_active_palette` | `_Config!B40` | Currently active palette ID. |
| `cc_active_profile` | `_Config!B41` | Currently active profile ID. |
| `cc_palettes` | `_Config!A3:I18` | Palette table (id · name · primary · mid · accent · bg · zebra · dark · accentLight). |
| `cc_profiles` | `_Config!C22:X31` | 10 profiles × 20 categories + metadata. |
| `cc_categories` | `Categories!A11:A35` | 20 fixed category names + 5 custom slots. |
| `cc_tx_categories` | `Categories!A11:A37` | Source for the Transactions Category dropdown (the 25 above plus Income and Transfer). |
| `cc_keyword_rules` | `Categories!E11:G200` | Keyword → category → note rule table. |
| `cc_budget_income` | `Monthly Budget!C13` | Live formula from `_Engine` — most-recent month's income. |
| `cc_budget_targets` | `Monthly Budget!F17:F41` | 25 Target $ values (Target % × income). |
| `cc_engine_months` | `_Engine!B1:Y1` | 24 month codes (YYYY-MM), Jun24..May26. |
| `cc_engine_data` | `_Engine!B2:Y30` | The full aggregation block — 29 rows × 24 months. |
| `cc_dashboard_month` | `Dashboard!N4` | Active-month index, 0..23. Drives every figure on Dashboard. |
| `cc_trends_window` | `Trends!N7` | `6`, `12`, or `24`. |
| `cc_health_composite` | `Health Score!B9` | The live 0–100 composite. |
| `cc_accounts_list` | `Accounts!A10:A21` | Source for the Account dropdown on Transactions and Bank Import. |

---

## E · Document Properties

These persist per workbook copy across reloads. Apps Script writes them; the buyer never sees them directly.

| Key | Value | Set by |
|---|---|---|
| `cc_first_open` | `'true'` | `onOpen()` on first open. Controls the auto-jump to Start Here. |
| `cc_active_palette` | Palette ID | `applyTheme()` |
| `cc_active_profile` | Profile ID | `applyProfile()` |
| `cc_overrides_<profile-id>` | JSON `{ category: percent }` of overrides per profile | `onEdit` on the Override column |
| `cc_theme_map` | JSON map of `{ sheetName: { role: [a1, ...] } }` recorded at build time | `buildWorkbook()` |
| `cc_build_mode` | `'mock'` or `'blank'` | `buildWorkbook()` |

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
