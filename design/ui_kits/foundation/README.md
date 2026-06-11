# The Foundation v2 — UI Kit

A high-fidelity recreation of Column & Co.'s flagship product as it appears inside Google Sheets, plus a few **proposed visual upgrades** that lean into the differentiators worth selling on Etsy.

Open `index.html` to see it.

---

## What's in this kit

| File | What it does |
|---|---|
| `index.html` | Host page — React + Babel, palette + tab state |
| `data.js` | Marcus & Elena Brooks mock dataset (matches the xlsx hero file: 6 months, 8 accounts, 7 goals, 5 health indicators, 24 palettes) |
| `components.jsx` | Atoms: KPI card, status chip, progress bar, money formatter, section label, column header, data row, sheet header/footer |
| `chrome.jsx` | Google Sheets-style chrome — toolbar, formula bar, tab strip, fake "💳 Column & Co." menu, the **24-palette picker** |
| `tabs-overview.jsx` | Start Here · Dashboard |
| `tabs-analysis.jsx` | Trends · Health Score · Net Worth |
| `tabs-actions.jsx` | Goals · Bank Import Guide · stub tabs for the rest |

---

## What's recreated faithfully

Sourced directly from `the_foundation_v2_MOCK_DATA.xlsx`, `ColumnCo_Foundation_v2.gs`, and the project state docs:

- **14-tab architecture** in the bottom strip (Start Here · Trends · Dashboard · Monthly Budget · Health Score · Goals · Transactions · Bank Import Guide · Net Worth · Accounts · Categories · _Engine).
- **The 3-row brand chrome at the top of every sheet:** Forest header bar → Canopy sub-band → 3px Harvest Gold accent rule. This is the brand's "letterhead pattern."
- **Apps Script menu** as a faked dropdown (`💳 Column & Co. → Import Bank Transactions / Clear Paste Zone / Apply Theme / Renumber Ledger / Help`).
- **Mock-data story** — Marcus & Elena, the dining/subscription creep, savings rate sliding 39.8% → 31.8%, the 8 real account names, the 5 investment accounts totaling $202,500.
- **All 24 palettes** (Light, Warm Greige, Cool Slate, Sage, Espresso, plus ten named color pairings, plus Custom) with the exact hex codes from `_Config`.
- **Yellow input cells** (`#FFFDE7`) on every editable buyer field.
- **Health Score scale** — 0 ─ Critical ─ 45 ─ Needs Work ─ 60 ─ Fair ─ 75 ─ Good ─ 90 ─ Excellent ─ 100 with the composite indicator pip.
- **5 weighted indicators** (Savings Rate · Expense-to-Income · Emergency Fund · Budget Adherence · DTI) with the documented weights and benchmarks.
- **Footer line:** `The Foundation v2.0 · columnandco.com · Do not distribute without license`.

---

## Proposed visual upgrades (these elevate above what's on Etsy today)

Per the brief: *"develop a more robust sheet experience for buyers with better features that provide real value … visually stunning and will sell on Etsy."* These are the changes vs. the current xlsx. None of them require leaving Google Sheets — they're achievable in the next build pass.

1. **The 24-palette picker as a hero feature.** In the current product, palette selection is a dropdown buried on the Start Here tab. In this kit it's a tile grid showing live previews of all 24 palettes, plus a floating top-right swatch button visible from every tab. **This alone is unique on Etsy.** No other Sheets budget template ships twenty-four palettes as a one-click swap.

2. **AI Insights panel on Dashboard.** The brand's positioning is "LLM-ready." Currently that's a footnote. The kit promotes it to a Forest-on-Cream panel surfacing three auto-computed callouts:
   - LEAK · "Dining is creeping up — $380 → $922/mo. That's $9.7K/yr if it holds."
   - SUBS · "12 active subscriptions. You added 9 in the last 6 months."
   - WIN · "Emergency fund healthy at 3.3 months."
   Plus a "copy this prompt into Claude/ChatGPT" block on Start Here — operationalizing the differentiator.

3. **6-month sparklines on every Trends category row.** Replaces the existing wall-of-numbers Spending-by-Category table. A buyer can scan eight sparklines in two seconds and see exactly which envelopes are drifting. Each sparkline color-codes by status (Forest = on track, Gold = fair, Garnet = over) and pairs with a delta chip (`+275%`).

4. **Goal forecasting callout.** The current Goals tab shows percent complete. This kit adds a Forest forecast strip below the table: *"Japan Trip Fund hits target by Oct 2026 — one month late. Bump monthly transfer from $200 to $275 and you hit September."* Concrete, brand-voice, actionable.

5. **Health Score "delta arrows."** A `72 → 78` arrow on the Health Score tab quantifies what's lost to the biggest leak. Turns a vanity number into a behavior change.

6. **Net Worth sparkline + asset/liability split.** The current Net Worth tab is two long tables. The kit leads with a Forest hero block: big $222,640 + a 6-month gold sparkline + side-by-side Total Assets / Total Liabilities. Tables sit underneath, still complete.

7. **Donut + legend on Dashboard.** Replaces the existing list-only "Spending Breakdown" with a 12-segment donut using a Forest → Canopy → Gold → Garnet ramp, total dollars in the center. The breakdown table is preserved as a side legend with percentages.

8. **Income vs Expenses chart with savings-rate overlay.** The existing Trends chart shows three separate plots. The kit fuses them into one: paired bars per month (Forest income, Canopy expenses) with a gold savings-rate line and right-side percentage axis.

9. **Real-feel Bank Import flow.** The existing tab is text instructions. The kit shows a green paste zone with a realistic-looking 5-row CSV inside, then the Review-Income block underneath with proper Yes/No dropdowns and notes — exactly what a buyer sees mid-import.

10. **Pacing badges on category rows.** Where the current sheet shows "Spent / Budget", the kit adds a thin progress bar and percent-of-budget number in line with the chip — three signals visible at once without scrolling.

---

## Interactive behaviors

- **Tab strip** (bottom) — clickable. Switches between Start Here, Dashboard, Trends, Goals, Health Score, Net Worth, Bank Import Guide, plus stub copy for the remaining tabs.
- **Palette button** (top-right) — opens a 24-tile picker. Click any palette to recolor the entire sheet content area (the brand chrome stays Forest/Gold — it's brand, not theme).
- **💳 Column &amp; Co. menu** (in the file-menu row) — opens the Apps Script menu as a real dropdown.

---

## Substitutions / caveats

- **No real Google Sheets** — this is an HTML prototype. The Apps Script `applyTheme()` repaint behavior is simulated by swapping CSS custom properties on a `data-cc-palette` attribute.
- **Chart data** is mostly from the documented mock-data story; a few sparkline values were synthesized to keep month-over-month deltas readable.
- **Icons** are Unicode and inline SVG (Lucide-style, 1.5px stroke) — no icon library bundled, no CDN dependency at runtime besides the React + Google Fonts CDNs.
- **Editing** — buyer interactions in the actual product (data-validation dropdowns, formula bar editing, sort/filter) are not wired. This is a fidelity kit, not a sheet engine.

---

## How to use this kit

If you're building a marketing image or a slide that needs to show *what the product looks like*, screenshot the kit at the desired palette and tab. The 4 Etsy-listing-priority screenshots from `COLUMN_CO_PROJECT.md`:

| # | Tab | Palette suggestion |
|---|---|---|
| 1 | Dashboard | Light (default) |
| 2 | Goals | Light |
| 3 | Health Score | Sage |
| 4 | Trends | Warm Greige |
| 5 | Net Worth | Light |
| 6 | Start Here | Light |

Open `index.html`, switch the palette + tab, screenshot the in-app sheet area (skip the gray prototype browser bar at the top), apply the 10%-opacity icon-mark watermark bottom-right per brand spec.
