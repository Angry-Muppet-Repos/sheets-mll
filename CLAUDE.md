# Claude — read this first

## What this repo is

This is the **Column & Co. — The Foundation v2.1** project. A 14-tab Google
Sheets household-budget product sold on Etsy. The deliverable buyers download
is `ColumnCo_Foundation_v2.gs` + a workbook (`.xlsx` or Sheets template) in
two variants: **MOCK_DATA** and **BLANK**.

## Required reading at the start of every session

Before making any change — even a tiny one — extract and read the design
system:

```bash
unzip -o "Column _ Co. Design System.zip" -d /tmp/chco
```

Then read at minimum:

- `/tmp/chco/design_handoff_foundation_v2/README.md` — orientation
- `/tmp/chco/design_handoff_foundation_v2/01_product_brief.md` — buyer, wedge, voice
- `/tmp/chco/design_handoff_foundation_v2/05_apps_script.md` — function catalog
- `/tmp/chco/design_handoff_foundation_v2/06_data_model.md` — named ranges
- the specific `04_tabs/*.md` for whichever tab the change touches

These specs are the source of truth. Memory from past sessions is not.

## What this repo does NOT contain

- The production `ColumnCo_Foundation_v2.gs` is **not in this repo** — it
  lives in the bound Google Sheets workbook. If you need to see the menu
  builder, the import function, or the build functions (`buildMockWorkbook`,
  `buildBlankWorkbook`), ask Dan to paste the relevant block. Do not guess
  signatures or cell refs.
- The actual workbook layout is also not in this repo. When SHEET_REFS
  matter (column letters, row counts, named range cells), confirm against
  spec OR ask Dan to share his workbook. The two spec docs sometimes
  contradict (e.g. tab spec vs. data-model named-range catalog) — when they
  do, the workbook is ground truth.

## Confirmed workbook facts (verified May 2026)

- **Categories tab — Region 1** (rows 2-26, cols A/B/C):
  - Rows 2-21: 20 fixed categories. Type column B locked at `Expense`.
  - Rows 22-26: 5 editable custom slots. Type column B has a dropdown
    (`Expense` / `Income` / `Transfer`). Wired by `_applyCustomSlotTypeValidation_()`
    called from `buildMockWorkbook` and `buildBlankWorkbook`.
- **Categories tab — Region 2** (cols E/F/G): keyword rules
  (E=Keyword, F=Category, G=Notes). Named range `cc_keyword_rules`.
- Buyers never run setup. Everything ships configured by the build functions.

## How to work on this product

1. Read README + relevant spec files first.
2. Make the smallest change that satisfies the request. No surrounding
   cleanup, no adding menu items, no diagnostic helpers unless asked.
3. If the change needs to touch the workbook at runtime, route it through
   `buildMockWorkbook` / `buildBlankWorkbook` so buyers don't see it. Never
   add buyer-facing "setup" menu items.
4. Anything substantive — verify with Dan before shipping. Speculative
   commits are noise.

## Branch policy

Develop on the feature branch specified in the session prompt. Reset/force-push
only with explicit permission.
