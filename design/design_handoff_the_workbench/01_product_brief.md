# 01 · Product Brief — The Workbench

## What this is

**Column & Co. — The Workbench v1** is the portfolio command deck for a
digital-product business: every product's path to listed (project
management) and every product's performance after listing (sales by
channel, marketing spend, stats) in **one workbook**. Same stack and
delivery model as The Foundation and The Ledger: a `.gs`-generated
workbook in MOCK_DATA and BLANK variants.

**It is internal-first.** Column & Co. runs its own catalog on The
Workbench from day one (The Foundation, The Ledger, and The Workbench
itself are the first three rows). The sellable variant is the same build
with a fictional mock story. Nothing in the build may assume "this is
Dan's copy" — the dogfood instance is just a blank build with real rows
typed in.

## Who buys it (when listed)

The multi-product digital seller. Same person who buys The Ledger, six
months later: 4, 14, or 240 listings across Etsy / Shopify / Gumroad, a
notes file of half-launched ideas, and no idea which product actually
earns. They don't want Notion databases or a PM SaaS — they want their
catalog in one sheet they own.

## The scale contract (non-negotiable, drives every layout decision)

The workbook must stay usable from **3 products to hundreds**. Concretely:

- Product capacity is a single build constant (`PRODUCT_CAPACITY`,
  default **250** rows) — growing it is one constant + rebuild.
- Nothing in the UI is per-product *columns* (that dies at 20 products).
  Products are always **rows**; selectors are **dropdowns**, never pill
  rows; rankings show **top movers**, never all products.
- Cross-product matrices in `_Engine` exist only where ranking needs them
  (net revenue per product × month). Everything else about a single
  product computes on demand for the **selected** product only.
- Entry surfaces never grow with the catalog: one sales row per sale, one
  checkbox tick per step, one stats row per product-month.

## The unwieldy guard (the other non-negotiable)

The only things the owner ever types:

1. a **Sales Log** row when money lands (~10 seconds),
2. **checkbox ticks** on the Products table as launch steps finish,
3. an optional **Stats** row per product per month and a **Marketing Log**
   row per campaign/spend.

Everything else — pipeline, stages, progress, dashboards, rankings,
margins, conversion — is computed. If a tab requires typing that scales
with catalog size, the design is wrong.

## The wedge — listing-copy differentiators (each must be true)

1. **Launch pipeline with a real checklist.** A 30-step template
   (Build → QA → Assets → Listing → Post-launch) per product, with stage
   and progress computed from the ticks. The screenshot is a Pipeline
   board that knows your next action for every product.
2. **Sales by channel with honest margins.** Channel fee defaults compute
   net when you don't feel like typing fees. Ad spend joins the math —
   you see net *after* marketing, per product.
3. **Kill / iterate / scale answers.** Product View shows one product's
   trend, channel split, spend vs. net, and funnel (views → favorites →
   orders) — the three decisions a catalog owner actually makes.
4. **Scales to hundreds of products** without slowing to sludge — by
   design, not by hope.
5. **LLM-ready _Schema** — "Attach the sheet and ask which products to
   double down on and which to retire."
6. **24 swappable palettes** (inherited).
7. **One-time price, owned, no SaaS.**

## Brand, voice, naming

All Foundation rules apply verbatim (see
`design/design_handoff_foundation_v2/01_product_brief.md`): Column & Co.
chrome, middle-dot separators, no exclamation points, second person, lead
with the problem. Product name is **The Workbench** — never
"Column & Co. Product Tracker."

Footer line every tab:
`The Workbench v1.0 · columnandco.com · Do not distribute without license`

Listing hook direction (draft, Dan approves later):
> "Twelve products live. One actually pays you. Which one?"

## Pricing

Sits above The Ledger — it manages a whole catalog. Working band
**$50–70**; final number is Dan's call at listing time.
