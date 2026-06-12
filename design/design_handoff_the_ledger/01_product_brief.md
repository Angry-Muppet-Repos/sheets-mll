# 01 · Product Brief — The Ledger

## What this is

**Column & Co. — The Ledger v1** is a premium Google Sheets business-finance system for solo sellers and freelancers, sold on Etsy for a one-time price. Same delivery model as The Foundation: a `.gs`-generated workbook in MOCK_DATA and BLANK variants, instant download, no subscription, no third party holding the buyer's data.

It is The Foundation's architecture retargeted at a business buyer: a transaction ledger with CSV import, a monthly P&L, and the hero feature — a **quarterly tax escrow tracker** that answers the one question every 1099 worker is afraid of: *"Have I set aside enough for taxes?"*

## Who buys it

**Solo operators filing Schedule C.** Freelancers, contractors, Etsy/Shopify sellers, coaches, side-hustlers. They are literally shopping on Etsy already. They've outgrown a notes-app tally but won't pay QuickBooks $30/mo for a business with no payroll and no inventory system. Comfortable with AI tools; not coders. They dread quarterly estimated taxes and usually find out in April that they're behind.

## Scope guardrails (what this is NOT)

- ✗ Not corporate accounting. No payroll, no double-entry, no balance sheet, no depreciation schedules.
- ✗ Not inventory management. One "Materials & Supplies (COGS)" category with a note — no Part III inventory accounting.
- ✗ Not invoicing software. The Invoices tab tracks status of invoices created elsewhere; it does not generate PDFs and is deliberately NOT wired into the P&L (revenue comes from the ledger when money actually lands — cash basis).
- ✗ Not tax software. Every tax figure is an estimate with a visible disclaimer. See 03_data_model for the verbatim disclaimer copy.

## The wedge — listing-copy differentiators (each must be genuinely true of the build)

1. **Quarterly Tax Center.** Recommended set-aside per quarter, IRS due dates, what's been paid, and the gap — live from real transactions. The screenshot that sells the product.
2. **Schedule-C-mapped categories.** Every expense category carries its Schedule C line. At tax time the buyer hands the P&L to their accountant and is done.
3. **Owner-draw aware.** Imports auto-flag owner draws and personal transfers so they never inflate or deflate profit — the #1 books mistake solo operators make.
4. **Real bank CSV import** with header sniffing, dedupe, and keyword rules (inherited from Foundation, proven).
5. **LLM-ready _Schema.** "Attach the sheet to Claude and ask which expenses are eating your margin."
6. **24 swappable palettes** (inherited).
7. **Mock-data story** that shows the buyer their own future: a seller two weeks from a quarterly due date, behind on escrow.
8. **One-time price, owned, no SaaS.**

## Brand, voice, naming

All Foundation rules apply verbatim (see `design/design_handoff_foundation_v2/01_product_brief.md`): Column & Co. brand chrome, Playfair/Jost, middle-dot separators, no exclamation points, second person, lead with the problem. Product name is **The Ledger** — never "Column & Co. Business Template."

Footer line every tab: `The Ledger v1.0 · columnandco.com · Do not distribute without license`

Listing hook direction (draft, Dan approves later):
> "June 15th is coming. You know roughly what you made. You have no idea what you owe."

## Pricing

Business buyers tolerate higher price points than household buyers. Working band **$45–60**; final number is Dan's call at listing time.
