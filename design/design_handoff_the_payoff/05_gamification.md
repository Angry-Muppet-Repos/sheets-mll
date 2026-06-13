# 05 · Gamification — The Payoff v1 (LOCKED 2026-06-13)

The motivational layer, locked by Dan after the mockup-gate iteration
(concept boards + working interactive mocks in
`design/ui_kits/the_payoff/concepts_*.html`). All of it is **real
Sheets** — painted cell grids, conditional formatting, cell notes, a
scripted flush-repaint loop, emoji. No images. Every figure traces to
the engine (03).

## Color rule — the monument is fixed stone-and-gold (LOCKED 2026-06-13)

The 24-palette picker themes the **chrome, KPIs, and tables** like every
sibling product — but the **temple, wall, Hall, and stylobate do NOT
recolor.** They use a fixed, curated material set: a stone/parchment
"unbuilt" tone, a five-step on-brand **debt ramp** (deepest forest →
pale sage, one fixed color per debt slot), and **gold (#C5A95A) reserved
for achievement/motion** (capitals, the finished pediment, a laid
stylobate, blocks in motion). Rationale (proven in
`concepts_temple_color.html`): deriving the temple from an arbitrary
palette collapses the five debt hues into indistinguishable tints on
monochromatic palettes, and on the six white/gray-accent palettes
(Crimson & White, Forest & White, Silver & Black, Scarlet & Gray, Cool
Slate, Burgundy) the "you won" gold turns white/gray and vanishes into
the parchment. A monument is stone and gold; it is not repainted. The
debt-ramp colors are constants in section 00 of the `.gs`, independent
of `active_palette`.

## The metaphor — build a temple from your debts

Column & Co.'s mark is a column. Paying off each debt raises a column;
all debts paid is a finished temple. The **named anatomy** is the
product's vocabulary across every tab, toast, and listing line:

| Part | Is | In the product |
|---|---|---|
| **Stylobate** | the stepped stone base | your starter **buffer** (savings) |
| **Column** | one upright | one **debt**, rising as you pay it |
| **Capital** | the crown of a column | a debt **paid in full** (goes gold) |
| **Entablature** | the beam columns carry | the roofline goal |
| **Pediment** | the triangular crown | **debt-free** (goes gold at 100%) |

Gold is reserved for one meaning everywhere: **achievement / motion now**
(blocks moving this payment, a capital topping out, the finished
pediment). Each debt otherwise owns a fixed color from the curated debt
ramp (see the color rule above — NOT palette-derived).

## The Temple — Dashboard hero

- **Grammar A**: uniform column height `H`, width ∝ starting balance
  (floor 2 cells), each column fills bottom-up by % of ITS debt paid.
- **The Wall**: combined remaining debt sits above, banded by debt
  color, and shrinks as the temple rises — blocks are conserved
  (wall→column), so the wall emptying IS the temple completing.
- **Completion**: every column capped → entablature + pediment gold + a
  `DEBT-FREE · {month}` banner.
- **Watch the build** (💳 menu): scripted replay, course by course,
  past → present → projection to completion, toasting each kill.
- **Sheets build**: a painted grid (debt columns × `H` rows), one CF
  rule per debt color keyed off `paid/start`; the wall is a banded
  range; the replay rewrites the fill range with `flush()` + a short
  `sleep` per frame (~0.5–0.7s/step — dignified, not 60fps).

## The Time Machine — The Plan (a month scrubber)

A slider / active-month cell scrubs the temple to **any month, past or
future, on the current plan** — the empty right side fills toward the
complete temple. Default = today. A straight INDEX into the engine
schedule (03), so it costs nothing. Default visit = the debt-free month.

## The Strategy Race — Compare

Two temples (Snowball | Avalanche; My Order joins as a third when
active) fill at **different rates** from their own full schedules —
different columns light up at different months. Readouts per lane:
debt-free date, total interest, first kill. A verdict line states the
trade honestly ("Avalanche saves $X; the snowball's first win lands N
months sooner"). The extra-monthly applies to both lanes (fair compare).

## The Stylobate — Progress (the saving mechanic)

The temple's stone base = the owner's **starter buffer**.
- **SAVED is computed**, never typed: the running sum of logged
  contributions (mirrors Payments Log → balances). **GOAL** is an
  editable target (`cc_stylobate_goal`, default **$1,000**, fully
  customizable). Funded via a **contributions log** (date · amount);
  each contribution toasts ("+$X laid in stone · N% solid · $Y to go")
  and joins a visible ledger.
- **States**: sand (no buffer — warning: "blocks fall back to the wall")
  → laying → solid stone (funded). Centered on the temple's column axis
  at any width.
- **Drawdowns** are negative entries — if the owner taps the buffer the
  stylobate honestly cracks back toward sand (it did its job; relay it).

## Streaks — Progress (data-derived, no extra typing)

- **Beat-the-minimum** — months paid more than the minimum (from
  Payments Log).
- **No-new-debt** — months no balance rose (revolving discipline; pairs
  with the new-debt handling in 03).
- **Weekly check-in** — one-tap engagement streak (the best predictor of
  finishing).
- **High-water mark** — a thin gold line on each column marking the most
  ever built, so a backslide reads as "you were here," not erasure.

## The Trophy Case (mints) → The Hall (displays)

- Each kill **mints a screenshot-ready plaque** (crop marks, no balances
  unless opted in) + a **payment receipt** toast (days bought, interest
  dodged, bricks torn). "Shareable" is honest: a **Frame a win** menu
  item isolates the card for a clean screenshot (r/debtfree, Instagram,
  Facebook payoff groups, TikTok) plus a copy-ready caption — **no
  social API, no auto-post**.
- **The Hall** is a tab you enter: slain-debt **plaques** on the walls,
  best-streak **trophies** on pedestals, and **locked future trophies**
  (Halfway, $10k slain, Debt-Free) that name what earns them. Grows as
  you achieve; the empty pedestals are the pull.

## Letters — sealed notes

Pre-written per rank (brand-voiced, universal) so setup needs **zero
writing**; optional to personalize. They unseal (script-unhide) when the
owner crosses each rank. **Grace tokens** (2/yr) let one brutal month
dent a streak instead of killing it — broken streaks are where trackers
get abandoned.

## Honest-Sheets constraints (state these; never overpromise)

- The replay is a flush+sleep loop (~0.5–0.7s/step), not animation.
- No social posting; sharing = screenshot-optimized cards + caption.
- Backsliding shows truthfully (columns un-build; stylobate cracks);
  high-water marks soften it. No faked monotonic progress — the honesty
  is a selling point against gimmicky trackers.
