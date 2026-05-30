# Development conventions

A future Claude session should read this before editing.

## The codebase in one sentence

11 numbered Apps Script source files build a Google Sheets budget template
end-to-end; one of them — `dist/Code.gs` — is a hand-concatenated single-file
bundle that is the actual artifact pasted into Apps Script.

## The dist/Code.gs concat rule

**Every source edit MUST be mirrored in `apps-script/dist/Code.gs`.** The
buyer pastes the dist as one script file; if source and dist drift, the
shipping artifact is wrong.

Concat order (matches the numeric file prefix):

```
00_constants → 01_helpers → 02_chrome → 03_build → 04_data_tabs
→ 05_tabs_views → 06_tabs_actions → 10_menu → 11_theme → 12_profile
→ 13_import
```

The one-liner for a full rebuild is permitted in
`.claude/settings.local.json` — use it when many files changed; for one or
two edits, mirror by hand with `Edit` (avoids regenerating the whole file).

## Invariants

### No MOCK outside the buyer's input tabs

`MOCK.*` constants in `00_constants.gs` may only seed `Transactions` and
`Accounts` (the buyer's input surfaces). **Every other tab MUST read live
from `_Engine`, `Accounts`, `Monthly Budget`, or `Transactions` via
formulas.** This rule existed implicitly and was violated for months —
Goals, Top Spending, Net Worth, Trends chart, Month Snapshot, Forecast
strip, and Health Score's Biggest Opportunity all wrote MOCK values that
*looked* live. The cleanup commits (`Kill static MOCK across...`, `Health
Score: ... read Target $`, etc.) wired them to formulas. Do not regress.

A grep for `MOCK\.` at review time outside `04_data_tabs.gs::generateMockLedger_`,
`buildAccounts_`, and `00_constants.gs` should be near-empty.

### Column-index gotchas (cost us multiple bug bounces)

**Transactions tab — 7 columns:**

| Col | Field |
|---|---|
| A | Date |
| B | Description |
| C | Amount |
| D | Category |
| E | Account |
| F | Notes |
| G | Month (formula `=TEXT(A,"yyyy-mm")`, hidden) |

Month is **column G**, not H. Any `SUMIFS / COUNTIFS / MINIFS` filtering by
month must reference `Transactions!$G:$G`.

**Monthly Budget tab — table starts at row 17, columns B–H:**

| Col | Field |
|---|---|
| B | Category |
| C | Preset % (locked) |
| D | Override % (yellow editable) |
| E | Target % (= override or preset) |
| F | **Target $** (= Target % × income) |
| G | Δ % |
| H | Share sparkline |

Use **column F** when comparing dollar actuals to budget. Column E is a
percent fraction (e.g. `0.235`); formulas that read E and treat it like
dollars produce values off by ~10000×. The Health Score Budget Adherence
indicator and the Dashboard Top Spending VLOOKUP both hit this trap before.

### Apps Script menus need static function names

`menu.addItem(label, functionName)` requires a top-level function name
string. Theme and profile menus iterate `PALETTES` / `PROFILES` but **each
id still needs a matching `_applyTheme_<sanitized_id>` / `_applyProfile_<id>`
shim function**. When adding a palette or profile, update:

- `00_constants.gs` (entry in the array)
- `11_theme.gs` or `12_profile.gs` (the per-id shim)
- `dist/Code.gs` (both of the above)

### Filters survive `sheet.clear()`

`Sheet.clear()` does **not** remove basic filters. Any builder that calls
`createFilter()` must first call `sheet.getFilter() && sheet.getFilter().remove()`
to be idempotent across rebuilds.

### Named ranges

`cc_accounts_list` (`Accounts!A10:A21`), `cc_categories` (`Categories!A11:A35`),
`cc_tx_categories` (`Categories!A11:A37`, includes Income/Transfer), and
`cc_dashboard_month` (`Dashboard!N4`) are referenced by name across many
formulas. Changing a range requires updating `03_build.gs::setNamedRanges_`,
not just the producing builder.

## Build & verify flow

1. Edit source files in `apps-script/`.
2. Mirror edits in `apps-script/dist/Code.gs`.
3. (Optional) Sanity-check the bundle parses as JS:
   `node -e "new Function(require('fs').readFileSync('apps-script/dist/Code.gs','utf8')); console.log('Syntax OK')"`.
4. Paste `dist/Code.gs` into Apps Script (replace the whole file).
5. Reload the Sheet; **💳 Column & Co. ▸ Setup ▸ Build workbook (mock data)**.
6. For visual changes, screenshot the relevant tab and compare against the
   handoff in `Column _ Co. Design System.zip`.

We don't run automated tests on this project. Verification is manual.

## Commit & branch conventions

- Commits land on the per-session feature branch declared in the session's
  setup instructions (e.g. `claude/<name>`).
- Commit messages explain the **why** in the body, not just the what.
  Recent good examples: `Health Score: Budget Adherence + Biggest
  Opportunity read Target $`, `Transactions: write mock ledger
  newest-first`. Title ≤ 70 chars, body wraps at ~72.
- Do not open a PR unless asked.

## Things not to do

- Don't reintroduce MOCK reads on view tabs.
- Don't reference `Transactions!H:H` (Month is G).
- Don't reference `Monthly Budget!E` for dollar comparisons (use F).
- Don't add UI niceties (toasts, confirmations, helper sidebars) unless
  asked. The product is intentionally lean.
- Don't add unit tests, build scripts, or CI configs — this project is
  small enough that the manual verify loop is faster than maintaining
  scaffolding.
- Don't bump the version string in chrome (`The Foundation v2.1`) without
  the owner asking.
