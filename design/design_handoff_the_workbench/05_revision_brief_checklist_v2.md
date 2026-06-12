# 05 · Revision Brief — Checklist v3 (READ THIS BEFORE TOUCHING THE WORKBENCH)

**Status: the latest Workbench commit (`f899a6a`, on PR #3) was REJECTED by
Dan in live QA.** This brief is the contract for the rework. It records
what was built, why it was rejected, what Dan actually wants, and what the
next session must do differently.

## The story so far (three states of the checklist)

1. **v1 — horizontal matrix** (commit `3f499e9`): Products tab with one
   row per product and 30 launch steps as checkbox COLUMNS under colored
   group bands. Dan's verdict: right UX shape, but **illegible** (step
   names were 8pt text rotated 90° in 26px columns — read as "blank
   boxes") and the steps were **hardcoded** (and were Column & Co.'s
   internal dev process, not a sellable default).
2. **v2 — long format** (commit `f899a6a`, REJECTED): moved the checklist
   to a vertical tab (one row per product × step) + a Templates library
   tab + an Add Product intake sidebar + Save Steps as Template.
   Dan's verdict: **"more complicated and less user friendly… an unusable
   vertical checklist with each product stacked vertically — that makes
   no sense."** The session error: Dan asked for the horizontal checklist
   to be *customizable and readable*; the session replaced the layout
   instead of fixing it.
3. **v3 — the rework (this brief).** Keep the horizontal tick-across UX.
   Make it readable. Make it customizable via the template system. Get
   Dan's visual approval on a mockup BEFORE writing any .gs.

## What Dan wants (the requirement, in plain terms)

- The **horizontal checklist**: products as rows, steps as columns,
  tick across a row. That layout is the product. Do not ship a vertical
  per-step list as the primary surface again.
- **Readable steps** — you must be able to tell what every box means at
  a glance (the v1 rotated-8pt headers failed this).
- **Customizable processes**: a default template, prefilled starter
  templates, a way to create/save custom templates ("an intake form for
  each individual product/process type… it can spin up and save a
  different template for each process and it all gets melded into the
  system").
- Still bound by the scale contract (01) and the unwieldy guard.

## The architectural tension (be honest with Dan about it)

A sheet has ONE header row per table, so step COLUMNS can't differ per
product row within a single table. Reconciling "horizontal" with
"multiple processes" has two honest shapes — present both, recommend one,
and let Dan pick at kickoff:

- **Option A — template sections (recommended).** One Checklist tab,
  horizontal, but organized as per-template SECTIONS: each template gets
  its own block — a colored group band + ITS step names as column
  headers (readable: ~45° rotation, wider columns, hover notes, plus a
  step key) + the rows of the products assigned to that template. The
  intake flow assigns a product to a template section and inserts its
  row there; Save-as-template creates a new section. Horizontal ticking
  preserved; different processes coexist as stacked horizontal blocks
  (each block is products-as-rows — NOT one-row-per-step). Script
  manages section membership; progress/next-step formulas read each
  section's own header row.
- **Option B — one active template per workbook (simplest).** The single
  v1-style matrix, but the header row is written from a chosen template
  ("Apply template" menu/flow), every header cell is renameable in
  place, blanked headers drop out of the math (progress = ticked ÷ named
  columns). Prefilled templates + save-your-own still exist; the
  limitation is all products share one process at a time.
- Per-product unique processes inside one pure matrix is NOT possible —
  that's what drove v2 off the cliff. Don't rediscover this.

Either option must include the v1 legibility fixes regardless: angled
(≈45°) readable headers, hover notes on every step header, and a visible
step key. The Day-one default template stays the generic
**Digital Product 30** (Dan approved replacing the CC-dev steps; he'll
save his own "CC Software Build" template in his copy).

## Reusable assets (don't rebuild these from scratch)

- **From `f899a6a` (the rejected commit — UX wrong, plumbing good):**
  the Templates library tab (`buildTemplates_`), the intake sidebar +
  `createProductFromIntake`, `saveStepsAsTemplateCore_`,
  `listTemplateNames_` / `getTemplateSteps_` / `parseStep_`, the four
  starter templates (generic 30 / handmade 28 / service 20 / quick 10),
  and the harness's functional-test layer.
- **From `3f499e9`:** the horizontal matrix builder (group bands, checkbox
  columns, computed progress/next-step/days chips) — `git show 3f499e9:apps_script/ColumnCo_Workbench_v1.gs`.
- **`tools/verify_workbench.js`** — the static-verification harness
  (stub SpreadsheetApp with 1,000×26 GRID ENFORCEMENT + cell value
  store; checks: parse, formula balance, cross-ref audit, mode audit,
  mock integrity, functional intake/save tests). Update its contracts to
  v3 and keep it green. `tools/verify_ledger.js` is the Ledger's.
- **Non-negotiable build lessons already paid for:** `ensureGrid_` before
  any write past 1,000 rows / 26 columns (the "Service Spreadsheets
  failed" fix), `forEachSlab_` + flush for big mutations, per-tab
  progress toasts, filter teardown before `createFilter`.

## Process requirements for the rework (the v2 failure was process, not just design)

1. Read CLAUDE.md + this folder (01–04, 06) + this brief first.
2. Propose the design (A vs B + anything better) — **WAIT for Dan's pick.**
3. Mock the chosen checklist UX in `design/ui_kits/the_workbench/`
   — **WAIT for Dan's visual approval.** This gate was skipped in v2;
   that's how an unusable layout reached his workbook. Iterate on the
   mock; it's cheap. The .gs is not.
4. Only then implement in `apps_script/ColumnCo_Workbench_v1.gs`, run the
   full harness green, true up docs 02/03/04/06 (they currently describe
   the REJECTED v2 layout), commit, push to PR #3, send Dan the .gs.

## Current repo state (June 2026)

- **Foundation v2.1** — listed, untouchable here.
- **The Ledger v1** — merged (PR #2), paused before Dan's live QA.
- **The Workbench v1** — PR #3 open on the working branch; history:
  `0ed1d0a` UI kit → `fe75f4d` first .gs → `3f499e9` grid fix (v1
  matrix, last layout Dan accepted in spirit) → `f899a6a` v2 long-format
  (REJECTED). Docs 02/03/04/06 + UI kit currently describe v2.
