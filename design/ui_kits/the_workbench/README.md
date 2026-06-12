# The Workbench v1 — UI Kit

A high-fidelity recreation of Column & Co.'s portfolio command deck as it
appears inside Google Sheets. Built from `design/ui_kits/the_ledger/`
(same chrome, atoms, 24-palette picker) with the five hero tabs mocked
against the Juniper Paper Co. story from
`design/design_handoff_the_workbench/04_mock_data_and_qa.md`.

Open `index.html` — it lands on the **Pipeline** (the screenshot that
sells the product).

| File | What it does |
|---|---|
| `index.html` | Host page — React + Babel, palette + tab state, 11-tab strip |
| `data.js` | Juniper Paper Co. dataset (8 products, locked headline truths) |
| `components.jsx` | Atoms from the Ledger kit (KPI card, chips, yellow inputs…) |
| `chrome.jsx` | Sheets chrome — toolbar, 💳 menu, tab strip, 24-palette picker |
| `tabs-pipeline.jsx` | **Pipeline** (computed PM board) · **Products** (slim) · **Checklist** · **Templates** |
| `tabs-overview.jsx` | **Dashboard** + AI Insights |
| `tabs-product.jsx` | **Product View** (dropdown-selected deep dive) · **Sales Log** · stubs |

## The headline truths (locked, generator-verified in the build)

Portfolio net ramps ~$940 → ~$2,100/mo over 9 months · Wedding Suite No. 4
≈ 60% of lifetime net at **ROAS ≈ 4** (SCALE) · Minimal Budget Sheets ad
spend exceeds lifetime net, ROAS < 0.5 (KILL) · Recipe Card Set views +40%
while conversion halves (WATCH) · progress = done ÷ each product's own step
list; the template library drives per-product processes.

## Scale story the kit demonstrates

Products are rows; the Product View selector is a dropdown, not pills;
rankings are top-N. The build ships 250 product slots as a single
capacity constant.

## Screenshot priority (Etsy listing)

Pipeline (Light) → Dashboard (Light) → Product View, hero selected (Light)
→ Products checklist block (Sage) → Sales Log (Warm Greige). Screenshot the
in-app sheet area, watermark per brand spec.
