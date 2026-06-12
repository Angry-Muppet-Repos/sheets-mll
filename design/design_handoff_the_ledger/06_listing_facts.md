# 06 · Listing Facts — The Ledger v1.0

Single source of truth for Etsy listing copy. Every figure below is read
from the build (`apps_script/ColumnCo_Ledger_v1.gs`) — if the build
changes, update this file in the same commit so listing copy never drifts.

## The product

| Fact | Value |
|---|---|
| Product name | The Ledger |
| Version | v1.0 |
| Platform | Google Sheets + bound Apps Script (one `.gs` file) |
| Variants | MOCK_DATA (Maya Chen demo) · BLANK |
| Tabs | **15** — Start Here · Dashboard · P&L · Tax Center · Trends · Invoices · Mileage · Transactions · Bank Import Guide · Clients · Accounts · Categories · _Engine · _Config (hidden) · _Schema (hidden) |
| Palettes | **24** swappable in-sheet palettes, one-click via 💳 Column & Co. ▸ Apply Theme (brand chrome stays locked) |
| Categories | **20** fixed expense categories, every one mapped to its Schedule C line, **+ 5 custom slots** |
| Keyword rules | **90** pre-seeded auto-categorization + type-routing rules |
| Ledger capacity | 5,000 transaction rows, dropdowns pre-extended |
| Price band | $45–60 (final number is Dan's call at listing time) |

## Feature list (each one is true of the build)

1. **Quarterly Tax Center** — recommended set-aside per quarter (live from
   transactions), IRS due dates (Apr 15 · Jun 15 · Sep 15 · Jan 15), what's
   been paid, and the escrow gap. Set-aside presets: Standard 25% ·
   Conservative 30% · Lean 20% · Custom.
2. **Schedule-C-mapped categories** — the P&L prints every line with its
   Schedule C box; hand it to your accountant and you're done.
3. **Owner-draw aware** — imports auto-flag owner draws and personal
   transfers (VENMO, ZELLE, ATM, PERSONAL…) as Owner; they never inflate
   or deflate profit.
4. **Real bank CSV import** — header sniffing (Chase, BoA, Wells Fargo,
   Cap One, Ally, Citi, USAA, Discover, Amex), duplicate skipping, credit
   review with a client/stream dropdown, one-click merchant rules.
5. **Monthly / Quarterly / YTD P&L** — revenue by client & stream, 25
   expense lines, profit margin, owner draws shown but never counted.
6. **Invoices** — Draft / Sent / Paid tracking with derived overdue
   painting and Outstanding / Overdue / Paid-this-month cards. Cash basis —
   no double-counting.
7. **Mileage log** — 100 rows; deduction at the IRS standard rate
   ($0.725/mi for 2026, editable) feeds the Tax Center estimate.
8. **LLM-ready _Schema** — attach the sheet to Claude or ChatGPT and ask
   which expenses are eating your margin.
9. **24 swappable palettes** — the brand letterhead stays Forest/Canopy/
   Gold; everything else retints in one click.
10. **One-time price, owned, no SaaS** — no subscription, no third party
    holding the buyer's books.

## Verified tax figures (June 2026)

| Figure | Value | Source |
|---|---|---|
| Business mileage rate (2026) | $0.725/mile | IRS Notice 2026-10 (Dec 29 2025) — ships as a yellow editable cell, never hardcoded in formulas |
| SE tax estimate | net × 92.35% × 15.3% | Schedule SE |
| Estimated-tax due dates (TY2026) | Apr 15 · Jun 15 · Sep 15 2026 · Jan 15 2027 | 2026 Form 1040-ES |

The Tax Center disclaimer ships verbatim in both build modes:

> "These are planning estimates from your own numbers — not tax advice and
> not a filing. Rates, brackets, SE-tax caps, and deduction rules change
> and vary by situation. Confirm your actual estimated payments with a tax
> professional or IRS Form 1040-ES."

## Mock-data story (MOCK_DATA variant)

Maya Chen, Chen Studio — digital planners on Etsy + freelance brand design.
Six months ending the current month, ~290 transactions. Strong Q1
(net $13,790 → recommended $3,448, she paid $2,400), escrow transfers in
months 1–2 only ($2,400 total), then she stopped — recommended YTD $5,147
against $2,400 escrowed → **gap $2,747**, two weeks before the June 15 due
date. Margin slides 71.0% → 58.0% on subscription creep ($85 → $240/mo,
six tools added) and platform fees scaling with revenue. Owner draws
$2,500/mo, visible and provably absent from profit.

## Listing hook (draft — Dan approves at listing time)

> "June 15th is coming. You know roughly what you made. You have no idea
> what you owe."

Screenshot order: Tax Center (the gap) → Dashboard → P&L → Invoices → Trends.
