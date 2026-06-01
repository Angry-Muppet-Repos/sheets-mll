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

## Source of truth: the bound .gs file

The production Apps Script lives at `apps_script/ColumnCo_Foundation_v2.gs`
(committed to this repo). Edit it directly when fixing bugs — do not
ship "drop-in patches" or new helper files unless the user asks for that
format. Push the updated full file; Dan will paste it back into the
bound workbook editor and re-run `Setup → Build workbook (mock data)`
and `Setup → Build workbook (blank)` to regenerate the shipping templates.

Files in the .gs are organized into numbered sections (00 · Constants,
01 · Helpers, 02 · Brand chrome, 03 · Build orchestrator, 04 · Data + system
tabs, 05 · View tabs, 06 · Action tabs, 10 · Menu + triggers, 11 · Theme
engine, 12 · Budget-profile engine, 13 · Bank CSV import) — grep by
function name to find what you need.

If Dan edits the .gs in the workbook editor between sessions, he should
re-paste the latest version here so the repo stays in sync. If the two
diverge, the workbook is ground truth.

## Confirmed workbook facts (verified May 2026)

- Rows 1-5 of every tab: locked brand chrome (Forest header, Canopy band,
  Gold rule, spacer). Title block at rows 6-8.
- **Categories tab** (built by `buildCategories_` in section 04):
  - Row 9: section labels. Row 10: column headers.
  - Rows 11-30: 20 fixed categories. Type col B = `Expense` (dropdown).
  - Rows 31-35: 5 editable custom slots. Yellow Name + yellow Type
    dropdown (`Expense` / `Income` / `Transfer`). Wired by
    `applyCategoryValidation_(sheet, 11)` which now covers all 25 rows.
  - Rows 36-37: Income / Transfer system rows (locked).
  - Cols E/F/G rows 11+: keyword rules. Named range `cc_keyword_rules`.
- Buyers never run setup. Everything ships configured by `buildWorkbook(mode)`
  which is invoked via `Setup → Build workbook (mock data)` / `(blank)`.

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
