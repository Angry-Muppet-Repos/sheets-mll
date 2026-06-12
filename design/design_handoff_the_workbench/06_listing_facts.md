# 06 · Listing Facts — The Workbench v1.0

Single source of truth for Etsy listing copy. Every figure below is read
from the build (`apps_script/ColumnCo_Workbench_v1.gs`) — if the build
changes, update this file in the same commit so listing copy never drifts.

## The product

| Fact | Value |
|---|---|
| Product name | The Workbench |
| Version | v1.0 |
| Platform | Google Sheets + bound Apps Script (one `.gs` file) |
| Variants | MOCK_DATA (Juniper Paper Co. demo) · BLANK |
| Tabs | **13** — Start Here · Dashboard · Pipeline · Product View · Trends · Sales Log · Marketing Log · Stats · Products · Channels · _Engine · _Config (hidden) · _Schema (hidden) |
| Product capacity | **250 slots** out of the box — a single constant raises it |
| Sales capacity | **10,000 rows**, Net auto-computed from channel fee defaults |
| Launch checklist | **30 steps** (Build 8 · QA 6 · Assets 6 · Listing 5 · Post 5) + 5 custom columns |
| Palettes | **24** swappable in-sheet palettes (brand chrome stays locked) |
| Price band | $50–70 (final number is Dan's call at listing time) |

## Feature list (each one is true of the build)

1. **Launch pipeline with a real checklist** — 30 steps per product as
   checkboxes; stage, progress %, and your literal next action compute
   themselves. The Pipeline board ranks everything in flight.
2. **Sales by channel with honest margins** — log Gross, leave Fees blank,
   and Net computes from editable channel defaults (Etsy, Shopify,
   Gumroad, Direct seeded). Type the real fee and it wins.
3. **Net after marketing spend** — the Marketing Log joins the math, so
   the Dashboard shows what the catalog actually earned.
4. **Kill / watch / scale verdicts** — Product View takes any product
   (dropdown — works at 8 or 800) and shows trend, channel split, net per
   ad dollar with a verdict chip, and the views→orders funnel.
5. **Scales to hundreds of products** — products are rows, rankings are
   top-N, and the one cross-product matrix is capacity-capped by design.
6. **Stale-product alarm** — days since last sale per listed product;
   the dashboard names your stalest listing.
7. **LLM-ready _Schema** — attach the sheet to Claude or ChatGPT and ask
   which products to double down on and which to retire.
8. **24 swappable palettes** — one click, brand letterhead stays put.
9. **One-time price, owned, no SaaS.**

## Channel fee defaults shipped (editable, captioned "verify your plan")

| Channel | Fee % | Flat/order |
|---|---|---|
| Etsy | 9.5% | $0.45 |
| Shopify | 2.9% | $0.30 |
| Gumroad | 10% | $0.50 |
| Direct | 0% | $0.00 |

Etsy's pair folds the 6.5% transaction fee + ~3% + $0.25 payment
processing + $0.20 listing fee into one editable pair. Set from June 2026
knowledge — Etsy blocks automated verification, so confirm against
etsy.com/legal/fees at listing time (the in-sheet caption tells buyers the
same).

## Mock-data story (MOCK_DATA variant)

Juniper Paper Co. (Jules Hartley, fictional) — printable stationery, 8
products, 9 months, 602 sales rows. Net ramps ~$950 → ~$2,100/mo. Wedding
Suite No. 4 earns ≈ 60% of lifetime net at ROAS ≈ 4 (SCALE) · Minimal
Budget Sheets cost more in ads than it ever earned (KILL) · Recipe Card
Set's views are up 40% while conversion halves (WATCH) · two products
mid-pipeline at 47% and 17% with computed next steps, one idea row at 0%.

## Listing hook (draft — Dan approves at listing time)

> "Twelve products live. One actually pays you. Which one?"

Screenshot order: Pipeline → Dashboard → Product View (hero) → Products
checklist block → Sales Log.
