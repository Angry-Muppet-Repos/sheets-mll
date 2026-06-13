# 01 · Product Brief — The Payoff

> **Status: APPROVED by Dan 2026-06-13.** Decisions locked at kickoff:
> name **The Payoff** · strategy comparison **full side-by-side** ·
> mortgages handled by a per-debt **"In plan?" toggle** (see scale
> contract) · wedge list approved as drafted. Pricing stays a
> listing-time call. Next gates: tab specs (02–04) → visual mockup
> (`design/ui_kits/the_payoff/`) → script.

## What this is

**Column & Co. — The Payoff v1** is a premium Google Sheets debt-payoff
system sold on Etsy for a one-time price. Same stack and delivery model
as the rest of the shop: a `.gs`-generated workbook in MOCK_DATA and
BLANK variants, instant download, no subscription, no third party
holding the buyer's data.

It is the Foundation's architecture retargeted at the single most
purchased spreadsheet job on Etsy: getting out of consumer debt. List
every debt once, log payments as they happen (or import them from a
bank CSV), and the workbook answers the question every debtor actually
has: **"When am I free, and what gets me there faster?"** — a computed
debt-free date, a payoff order, and the dollars-and-months difference
between strategies.

## Who buys it

The Foundation's buyer at a harder moment. Households carrying the
classic mix — cards, auto, student, a personal loan — who have tried a
notes-app tally and a free printable and still can't see the finish
line. They search "debt snowball spreadsheet" and "debt payoff tracker"
on Etsy (a top-volume category), they're motivated by visible momentum,
and they won't pay a subscription to escape debt. Comfortable with AI
tools; not coders.

## The wedge — listing-copy differentiators (each must be true of the build)

1. **A debt-free date, computed.** Not a coloring chart — a real
   amortization engine per debt. The hero screenshot: "Debt-free
   March 2030 · 46 months · $6,214 interest saved vs minimums."
2. **Snowball vs avalanche vs your own order, side by side.** Pick a
   strategy and see exactly what it costs against the alternative — in
   months and in interest dollars. Custom ordering is a first-class
   citizen, not a hack.
3. **The what-if lever.** One yellow cell for extra monthly payment;
   the date, timeline, and interest-saved figures all move live. "+$100
   buys you 9 months" is the screenshot that converts.
4. **Momentum made visible.** Paid-off debts celebrate (the kill list),
   a milestone strip tracks balance thresholds, and Progress charts
   actual balance against the plan.
5. **Real bank CSV import** for payments — header sniffing, dedupe,
   keyword rules, inherited from the Foundation and proven.
6. **LLM-ready _Schema.** "Attach the sheet and ask which order saves
   the most, or what happens if you pay $75 more."
7. **24 swappable palettes** (inherited).
8. **One-time price, owned, no SaaS.**

## Scope guardrails (what this is NOT)

- ✗ Not a budget. No income, no spending categories — that's The
  Foundation (cross-sell in the guide, not duplication in the build).
- ✗ Not credit-score tracking or credit-bureau anything.
- ✗ Not a loan marketplace: no refinance shopping math beyond an
  editable APR per debt (rate changes are an edit, not a feature).
- ✗ Not financial advice: projection figures carry a visible
  "estimates, not advice" caption (Ledger disclaimer pattern).

## The scale contract (drives the engine design)

- `DEBT_CAPACITY` = **25** debt slots (typical buyer carries 3–12;
  raising it is one constant + rebuild).
- `PAYOFF_HORIZON_MONTHS` = **120** projection months (dial). Debts
  that outlive the horizon show "beyond horizon · 10+ yrs" gracefully —
  never an error.
- **The "In plan?" toggle** (per debt, default Yes): a mortgage — or
  any debt the buyer doesn't want driving the plan — can be tracked
  (balance, payments, totals) while excluded from the payoff strategy
  and the debt-free date. Without it, one mortgage row would drag
  "Debt-free March 2030" out to 2049 and kill the product's promise;
  excluding mortgages outright would turn those buyers away. The
  toggle serves both.
- Full side-by-side comparison (Dan's pick): the engine computes
  complete month × debt schedules for snowball AND avalanche AND the
  custom order, plus two what-if scenario runs (+$50 / +$100 on the
  active strategy) — five blocks of `25 × 120` guarded arithmetic,
  heavier than the Workbench matrix in cells but lighter per cell.
  Slab-written, capacity-dialed. The only typing that scales is one
  Payments Log row per payment.

## Brand, voice, naming

All Foundation rules apply verbatim: Column & Co. chrome, Playfair/
Jost, middle-dot separators, no exclamation points, second person, lead
with the problem. Listing keywords ("debt snowball", "debt tracker")
live in listing copy and tags — never in the product name.

**Name (locked by Dan 2026-06-13): The Payoff** — names the outcome,
not a method, and sits naturally beside The Foundation / The Ledger /
The Workbench. (Alternates considered and passed: The Snowball, The
Clean Slate, The Countdown.)

Footer line every tab:
`The Payoff v1.0 · columnandco.com · Do not distribute without license`

Listing hook direction (draft, Dan approves later):
> "Five debts. One date. Watch it move closer every month."

## Mock-data story (sketch — locked numbers come in 04)

**Casey Alvarez** (fictional), 14 months into a snowball: store card
and a small personal loan already killed (the momentum story), Visa
$4,800 @ 24.99%, auto $9,400 @ 6.9%, student loan $18,200 @ 5.5% still
standing. ~$650/mo minimums + $250 extra. Debt-free date ~46 months
out; avalanche comparison visibly cheaper in interest but later on the
first kill — the strategy trade-off shown honestly in one screenshot.

## Pricing

⚑ Household buyer, single-job product: working band **$30–45**,
positioned at or just under The Foundation. Final number is Dan's call
at listing time.

## Decisions locked at kickoff (Dan, 2026-06-13)

1. Name: **The Payoff**.
2. Mortgages: per-debt **"In plan?" toggle** — tracked but excluded
   from the strategy and the debt-free date by default guidance.
3. Strategy comparison: **full side-by-side schedules** (a dedicated
   Compare tab), not summary figures.
4. Wedge list approved as drafted; nothing added or cut.
