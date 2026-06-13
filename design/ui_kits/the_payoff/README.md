# The Payoff v1 — UI Kit

High-fidelity mock of the debt-payoff product inside Google Sheets.
Every figure is computed by the engine simulation (the 03 amortization
run in node), not invented.

## Start here

**`full_mockup.html`** — the canonical, navigable all-tabs prototype.
Open it and click the bottom tab strip to walk the whole product; swap
palettes with the pill; open the 💳 menu. This is the "feel the product"
artifact Dan approved (2026-06-13). All nine visible tabs:

| Tab | What it shows |
|---|---|
| Start Here | setup steps + the temple anatomy vocabulary |
| **Dashboard** | the Wall + the **Temple** (hero) on its Stylobate + KPIs + this-month payments · "Watch the build" |
| **The Plan** | strategy + extra + headline date + what-if chips + the **Time Machine** month scrubber |
| **Compare** | the **strategy race** — snowball vs avalanche mini-temples filling at different rates |
| Debts | the registry (In-plan toggle, Underwater chip, override) |
| Payments Log | the append-only payment record |
| **Progress** | the **Stylobate** (buffer, contributions ledger, customizable goal) + streaks |
| **The Hall** | the trophy room — slain-debt plaques + record trophies + locked future |
| Bank Import | paste → map → dedupe → append |

## Iteration history (superseded by full_mockup.html)

The `concepts_*.html` files are the gamification design exploration, in
order: `concepts.html` / `concepts_v2.html` (idea boards) →
`concepts_live.html` (Column + Demolition working demo) →
`concepts_temple.html` / `concepts_temple_v3.html` (the multi-debt
temple, scrubber, race) → `concepts_hall.html` (the Hall) →
`concepts_stylobate.html` (the buffer base). Kept for the record; the
integrated product is `full_mockup.html`.

The React component files (`components.jsx`, `chrome.jsx`,
`tabs-*.jsx`, `data.js`, `index.html`) are the earlier pre-gamification
tab mocks — superseded by `full_mockup.html` for the product feel, kept
as atom references.

## Locked story truths (engine-computed)

Casey Alvarez, 14 months into a snowball with $250 extra. Total
$40,950 → $31,741 now; $9,209 slain; two kills (Store card Sep 2025,
Medical bill Apr 2026). Snowball 51 mo / $10,381 interest vs avalanche
49 mo / $8,230 (saves $2,151, first win 15 mo sooner). Debt-free
**Jul 2029**, 37 months out; $28,533 saved vs minimums (which never
finish — $15,559 still owed at the 10-yr horizon). Stylobate $600 of a
$1,000 goal. The gamification spec is
`design/design_handoff_the_payoff/05_gamification.md`.
