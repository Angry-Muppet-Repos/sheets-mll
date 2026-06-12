# The Ledger v1 — UI Kit

A high-fidelity recreation of Column & Co.'s business-finance product as it
appears inside Google Sheets. Built from `design/ui_kits/foundation/`
(same chrome, same atoms, same 24-palette picker) with the five hero tabs
mocked against the Maya Chen story from
`design/design_handoff_the_ledger/04_mock_data_and_qa.md`.

Open `index.html` to see it. It lands on the **Tax Center** — the screenshot
that sells the product.

---

## What's in this kit

| File | What it does |
|---|---|
| `index.html` | Host page — React + Babel, palette + tab state, 13-tab strip |
| `data.js` | Maya Chen mock dataset (6 months Jan–Jun 2026, locked story figures) |
| `components.jsx` | Atoms from the Foundation kit + `YellowInput` + `TabTitle` |
| `chrome.jsx` | Sheets chrome — toolbar, 💳 menu, tab strip, 24-palette picker |
| `tabs-tax.jsx` | **Tax Center** (hero) · **P&L** |
| `tabs-overview.jsx` | **Dashboard** + donut + AI Insights panel |
| `tabs-business.jsx` | **Invoices** · **Mileage** · stub tabs for the rest |

## The five hero tabs

1. **Tax Center** — yellow inputs panel (year, preset, custom %, effective
   rate, mileage rate), four quarter cards with live net/recommended/paid/
   remaining + status chips, the Forest escrow-gap strip ($5,147 recommended ·
   $2,400 escrowed · **$2,747 gap**), the SE-tax estimate detail, and the
   verbatim disclaimer.
2. **Dashboard** — Revenue / Expenses / Net Profit / Margin KPIs, Top Spending
   vs the Categories monthly targets, escrow-aware Month Snapshot, 12-segment
   donut, AI Insights (ESCROW / SUBS / WIN).
3. **P&L** — Month/Quarter/YTD selector, revenue by client & stream, all 20
   Schedule-C-mapped expense lines ($0 rows shown — a P&L shows its lines),
   Forest net-profit bar with the owner-draw caption.
4. **Invoices** — Outstanding / Overdue / Paid-this-month cards, 25-row
   register, derived-overdue row painting (Hawthorn & Co., 15 days late).
5. **Mileage** — 14-trip log, 310 miles, deduction at the Tax Center rate
   ($0.725/mi — IRS 2026 standard rate).

## Story figures (locked)

Q1 net **$13,790** · Q1 recommended **$3,448** vs paid **$2,400** · escrow
**$2,400** vs **$5,147** recommended YTD → gap **$2,747** · margin
**71.0% → 58.0%** · Jun revenue **$6,900**. Maya set aside in January and
February, then a strong Q1 made her comfortable — and she stopped, two weeks
before the June 15 due date.

## Screenshot priority (Etsy listing)

| # | Tab | Palette |
|---|---|---|
| 1 | Tax Center | Light (default) |
| 2 | Dashboard | Light |
| 3 | P&L | Light |
| 4 | Invoices | Sage |
| 5 | Trends (workbook build) | Warm Greige |

Screenshot the in-app sheet area (skip the prototype browser bar), apply the
10%-opacity icon-mark watermark bottom-right per brand spec.

## Substitutions / caveats

- HTML prototype, not a real Sheet — `applyTheme()` is simulated by CSS
  custom properties on `data-cc-palette`.
- Quarter-card "DUE JUN 15 · 3 DAYS" countdown is static copy here; the
  workbook computes it live.
- Editing, dropdowns, and import flows are not wired — fidelity kit, not a
  sheet engine.
