# 06 · Data Model

The spreadsheet-side data architecture: every named range, hidden tab, and the relationships between them.

---

## Visible tabs (12)

Order matters. See `03_brand_chrome.md` for the full strip definition.

```
Start Here · Trends · Dashboard · Monthly Budget · Health Score · Goals
Transactions · Bank Import Guide · Net Worth · Accounts · Categories · _Engine
```

`_Engine` is visible-but-system (color-tagged different in the bottom strip), or fully hidden — buyer's choice via Start Here. Default: hidden.

---

## Hidden tabs (3)

### `_Config`

Stores the 24-palette table and the 10-profile table. Seeded from `data/palettes.json` and `data/profiles.json` at first open. Read by `applyTheme()` and `applyProfile()`.

Structure:

```
Sheet: _Config
  A1: ['palettes']
  A2: id, name, primary, mid, accent, bg, zebra, dark, accentLight
  A3..A18: one row per palette (16 total)

  C20: ['profiles']
  C21: id, name, sub, blurb, income, [20 category target columns]
  C22..C31: one row per profile (10 total)

  A40: ['active']
  B40: active_palette = 'light'
  B41: active_profile = 'dave-ramsey'
```

### `_Schema`

The LLM-readable plain-English description of the workbook. The buyer's wedge.

```
Sheet: _Schema

The Foundation v2.1 — Workbook Schema for AI assistants
========================================================

This workbook tracks a household's budget. The buyer is Marcus & Elena Brooks.

Tabs:
  • Transactions — every transaction. Columns: Date, Description, Amount
    (negative = expense, positive = income), Category, Account, Notes, Month.
  • Accounts — register of bank accounts, credit cards, savings, and loans.
  • Categories — 20 spending categories + keyword rules for auto-categorization.
  • Monthly Budget — current month's targets per category, sourced from one
    of 10 profiles (Dave Ramsey, 50/30/20, FIRE, Zero-Based, Anti-Budget,
    Kakeibo, New Parent, Self-Employed, HCOL Renter, Custom).
  • Goals — 4 goal types (Savings Target, Debt Payoff, Spending Limit,
    Savings Rate). Current values pull from the ledger automatically.
  • Net Worth — total assets minus total liabilities. Budget accounts pull
    from the Accounts tab; investments are manually entered.
  • Dashboard, Trends, Health Score — read-only views over the data.
  • _Engine — pre-aggregated per-month × per-category sums. 24-month window.

Conventions:
  • Months in `Transactions.Month` are formatted as `YYYY-MM`.
  • Amounts: negative = expense, positive = income.
  • Status chips: "On Track" if spent ≤ budget, "Fair" if ≤ 110%, "Over" if more.
  • Health Score: 5 indicators weighted 25/20/20/20/15, summing to a 0–100 composite.

For analysis, query the `Transactions` sheet. The buyer typically wants to know:
  • Which categories drifted over budget for 3+ months in a row?
  • What's the trajectory of dining/subscriptions/shopping over the last 6 months?
  • Which subscriptions should they cancel?
  • How would changing X affect the Health Score?
```

This is what makes the "Ask Claude/ChatGPT to read your sheet" wedge real. Keep it updated when the schema changes.

### `_Engine`

The aggregation layer. See `04_tabs/11_engine.md` for structure.

---

## Named ranges (catalog)

| Name | Range | Purpose |
|---|---|---|
| `cc_buyer_name_1` | Start Here!B12 | First buyer's name |
| `cc_buyer_name_2` | Start Here!B13 | Second buyer's name (optional) |
| `cc_active_palette` | _Config!B40 | Current palette ID |
| `cc_active_profile` | _Config!B41 | Current budget profile ID |
| `cc_palettes` | _Config!A3:I26 | The 24-palette table |
| `cc_profiles` | _Config!C22:W31 | The 10-profile table (sub-ranged by profile_id within) |
| `cc_categories` | Categories!A2:A21 | The 20-category list |
| `cc_keyword_rules` | Categories!E2:G | Bank-CSV keyword rules (dynamic range) |
| `cc_budget_income` | Monthly Budget!C7 | Buyer's monthly income |
| `cc_budget_targets` | Monthly Budget!C10:C29 | The 20 target values for the active profile |
| `cc_engine_months` | _Engine!B1:Y1 | 24 month headers |
| `cc_engine_data` | _Engine!B2:Y23 | The aggregation table (22 metric rows × 24 months) |
| `cc_dashboard_month` | Dashboard!H4 | Currently-viewed month on the Dashboard |
| `cc_trends_window` | Trends!B6 | 6 / 12 / 24 month window selector |
| `cc_health_composite` | Health Score!E5 | Composite 0–100 score |
| `cc_health_indicators` | Health Score!B10:G14 | 5 indicator rows |
| `cc_goals` | Goals!A4:H10 | The goals table (7 rows × 8 cols, expandable) |
| `cc_networth_total` | Net Worth!D6 | Calculated total |
| `cc_accounts_list` | Accounts!A2:A | Dynamic — feeds Transactions account dropdown |
| `cc_paste_zone` | Bank Import Guide!B10 | The merged paste-zone cell |

---

## Mock data

The MOCK_DATA variant ships pre-populated. The BLANK variant ships empty. Both use the same structure.

**Mock buyer:** Marcus & Elena Brooks  
**Mock window:** 6 months — December 2025 through May 2026  
**Mock month under view:** May 2026  
**Mock income:** $10,230/mo  
**Mock savings rate trajectory:** 39.8% → 31.8% (the "leak" story)

Full mock data is in `reference/data.js` under `window.CC_DATA`:
- `months` (6) and `months_24` (24) — for Trends
- `top_spending` — 8 rows for Dashboard
- `snapshot` — 7 key/value pairs for Dashboard
- `breakdown` — 12 rows for the donut
- `goals` — 7 goal rows
- `health` — composite, indicators, biggest_opportunity
- `net_worth` — totals, 8 budget accounts, 5 investments
- `palettes` — 24 palettes (also in `data/palettes.json`)
- `tabs` — the 12 visible tabs

---

## Profile data

10 profiles × 20 categories. See `data/profiles.json` for the canonical table. The categories array is the same 20-category list used everywhere; order matters and is fixed.

Each profile's targets ideally sum to `income` ($10,230). Some intentionally leave a small unallocated buffer:

| Profile | Sum | Unallocated |
|---|---|---|
| Dave Ramsey | $9,230 | $1,000 (intentional buffer) |
| 50/30/20 | $9,930 | $300 |
| FIRE | $10,230 | $0 |
| Zero-Based | $10,230 | $0 |
| Anti-Budget | $10,230 | $0 |
| Kakeibo | $10,230 | $0 |
| New Parent | $10,230 | $0 |
| Self-Employed | $10,230 | $0 |
| HCOL Renter | $10,230 | $0 |
| Custom | $9,090 | $1,140 (seed only — buyer edits) |
