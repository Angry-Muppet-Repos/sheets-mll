# Next steps

What's deferred after the v2.1 shipping cut. Pick the next thing here when
starting a new session.

## Wired but cosmetic

These look live and pass casual inspection, but a power user will notice
they don't move. Worth doing in this order; the first two are the most
visible.

### Net Worth — 6-month historical sparkline

Currently the hero number, Assets, and Liabilities all read live from the
Accounts tab; the "+$X this month" sub-line approximates from `_Engine`
NetCashFlow. **The 6-month sparkline beneath the hero is still static.**

Real history requires a snapshot mechanism. Simplest design: a hidden
`_Snapshots` tab with one row per (date, total_net_worth, total_assets,
total_liabilities), written by either (a) a daily time-driven trigger
calling a `snapshotNetWorth_()` function, or (b) an `onEdit` trigger on
the Accounts balance column that writes a row when the day's date is new.
Sparkline reads `LARGE(_Snapshots!B:B, 1..6)` or similar.

Trade-offs:
- Time trigger needs user authorization for `script.triggers` scope —
  bumps the manifest beyond the current `currentonly` minimum.
- onEdit-based snapshot only fires when the buyer actually edits — gaps
  if nobody touches the sheet for a week.
- Mock builds need a way to seed 6 historical points so the sparkline
  looks real on first build.

### Dashboard AI Insights — wire to live formulas

The 3 Forest callouts on the Dashboard (LEAK / SUBS / WIN) read from
`MOCK.ai_insights`. Plausible live derivations:

- **LEAK** — highest-overage category for the active month: pick the
  category where Actual − Target $ is largest positive; format as
  "$X over on <category>. That's $Y/year if it sticks."
- **SUBS** — count of TX rows whose category is `Subscriptions` for the
  active month; format as "N subscriptions ate $X. Cancel the ones you
  forgot about."
- **WIN** — best-performing category vs. budget (largest negative Actual
  − Target $); format as "Under budget by $X on <category>. Move it to
  Savings?"

Forecast strip on Goals is a good reference for how to drive copy from
a single MATCH/INDEX pair without making the cell unreadable.

## New features the owner has hinted at

### Named filter views on Transactions

We shipped a basic per-column filter. Saved filter views (e.g. "Last 30
days", "Just Amex Gold") need the Advanced Sheets API and a small picker
UI. Skip unless asked.

### Investments as a first-class tab

Today investments are a small yellow editable block on the Accounts tab,
summed into Net Worth. A real Investments tab could track holdings
(ticker, shares, cost basis, current price), an unrealized-gain column,
and a manual "refresh prices" menu item that hits Google Finance via
`=GOOGLEFINANCE(...)`.

### Multi-currency support

Single base currency today (USD). Multi-currency means a base-currency
selector, an FX rates lookup (Google Finance again), and a per-account
currency column on Accounts. Affects every dollar-format cell.

### Transfer detection in the importer

The keyword rules include `Transfer` as a category but the importer
doesn't pair transfers between two of the buyer's accounts. Result: a
$500 transfer from Chase → Marcus looks like both a $500 expense and a
$500 income. Detection: same day ± 1, same absolute amount, opposite
sign, both rows' accounts in `cc_accounts_list`. Mark both as Transfer
and exclude from Income/Expense rollups.

## Smaller polish items

- **Mobile / narrow viewport** — chrome rows, KPI cards, and pill rows
  were laid out for laptop widths. Worth a pass on phone-Sheets to see
  what wraps badly.
- **Help sidebar refresh** — `Help.html` is from earlier in the build
  and doesn't mention Add Account, Recategorize, per-profile overrides,
  custom-category slots, or the Transactions filter. Update copy.
- **Onboarding tour** — the 6-step setup guide on Start Here is static.
  Adding `onOpen` detection of "fresh workbook" + a one-time toast
  walking through the first step would help.
- **Theme persistence across rebuilds** — today rebuild always resets
  to the `light` palette. Persist the active palette ID and re-apply
  after build.

## Tech debt / paper cuts

- The mock ledger's "income on day 1, expenses on days 3–26" pattern is
  unrealistic — real ledgers have direct deposits on the 15th, weekly
  paycheck patterns, etc. Doesn't affect formulas, but a screenshot of
  Transactions looks generated.
- `00_constants.gs` is ~600 lines. The MOCK block in particular is
  large and could split into `00_mock.gs` if it grows.
- `13_import.gs` is doing too much (parse, dedup, categorize, write,
  surface review queues, account validation). Worth a refactor pass
  if any of those branches grow further.

## Won't fix

- **Static AI prompt on Start Here** — the suggestion text in the
  green panel ("Find every category where I'm trending over budget…")
  is intentionally static. It's marketing copy, not a feature.
- **Inactive Dashboard/Trends month pills** — they use a Cream
  background by design (not themed). The active pill themes.
