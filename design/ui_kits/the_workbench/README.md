# The Workbench v1 — UI Kit

A high-fidelity recreation of Column & Co.'s portfolio command deck as it
appears inside Google Sheets. Built from `design/ui_kits/the_ledger/`
(same chrome, atoms, 24-palette picker) with the hero tabs mocked against
the Juniper Paper Co. story from
`design/design_handoff_the_workbench/04_mock_data_and_qa.md`.

Open `index.html` — it lands on the **Checklist**, the surface under
review for the v3 rework (see
`design/design_handoff_the_workbench/05_revision_brief_checklist_v2.md`).

## Checklist v3 — what this mock is for

The horizontal tick-across-a-row checklist, reworked per Dan's decisions:

- **One section per process in use** (Option A): template band → colored
  group bands → step names angled ~45° (hover any header for the full
  `GROUP · Step` text) → product rows of checkboxes. The left block
  (# · Product · Progress · Next step) stays frozen while the steps
  scroll — scroll the table sideways to feel it.
- **Headers edit in place**: dashed yellow slots after each section's
  last step mock the pre-wired blank columns — type a name in the build
  and the step joins that process for every product in the section.
- **Add Process…** — the guided builder (💳 menu or the button on the
  Checklist tab): name the process, pick what you're making (digital ·
  physical/made-to-order · service · blank), plan the phase waterfall,
  then walk each phase naming steps — with one-click review loops for
  the iterative part. Fully interactive in the mock; seeded with a
  3D-print maker story.
- **Two processes in the mock catalog**: Juniper's printed line (Recipe
  Card Set · Holiday Gift Tags) runs Physical / Handmade as a second
  section — the multi-process screenshot for the listing.

| File | What it does |
|---|---|
| `index.html` | Host page — React + Babel, palette + tab + wizard state |
| `data.js` | Juniper Paper Co. dataset (8 products, two process sections) |
| `components.jsx` | Atoms from the Ledger kit (KPI card, chips, yellow inputs…) |
| `chrome.jsx` | Sheets chrome — toolbar, 💳 menu (with Add Process…), tab strip, palettes |
| `tabs-pipeline.jsx` | **Pipeline** · **Products** (slim) · **Checklist** (v3 sections) · **Templates** |
| `tabs-overview.jsx` | **Dashboard** + AI Insights |
| `tabs-product.jsx` | **Product View** · **Sales Log** · stubs |
| `wizard-add-process.jsx` | **Add Process…** — the hybrid waterfall · iterative builder sidebar |

## The headline truths (locked, generator-verified in the build)

Portfolio net ramps ~$940 → ~$2,100/mo · Wedding Suite No. 4 ≈ 60% of
lifetime net at **ROAS ≈ 4** (SCALE) · Minimal Budget Sheets ad spend
exceeds lifetime net, ROAS < 0.5 (KILL) · Recipe Card Set views +40%
while conversion halves (WATCH) · progress = ticked ÷ that section's
named steps; processes are customized per template section, and the
library grows via Add Process… / Save Steps as Template….

## Scale story the kit demonstrates

Products are rows; the Product View selector is a dropdown, not pills;
rankings are top-N. Checklist sections exist only for processes in use.
The build ships 250 product slots as a single capacity constant.

## Screenshot priority (Etsy listing)

Pipeline (Light) → Dashboard (Light) → Product View, hero selected
(Light) → Checklist sections (Sage) → Sales Log (Warm Greige).
Screenshot the in-app sheet area, watermark per brand spec.
