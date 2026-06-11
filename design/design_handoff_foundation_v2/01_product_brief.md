# 01 · Product Brief

## What this is

**Column & Co. — The Foundation v2** is a premium Google Sheets household budget template sold on Etsy for a one-time price. It is a single `.gs`-backed Google Sheet (with an Excel `.xlsx` fallback) delivered as an instant download. No subscription, no SaaS, no third party holding the buyer's data. The buyer makes a copy and owns it forever.

## Who buys it

**Medium-tech users.** Comfortable with AI tools (Claude, ChatGPT). Not coders. Has tried YNAB / Monarch / Copilot Money and bounced off subscriptions or third-party data access. Wants control, ownership, and a clean visual system that doesn't look like fintech.

Concretely: the persona is the kind of person who has already opened ChatGPT to ask "how should I budget" and wants a tool that meets them there — not a 90-day onboarding flow.

## The wedge — what makes this different on Etsy

These are the differentiators worth surfacing in listing copy and screenshot order. The build should make sure each one is genuinely true of the shipped product:

1. **LLM-ready substrate.** A hidden `_Schema` tab documents the sheet's structure in plain English so Claude/ChatGPT can read it directly. "Ask AI to find your subscription leaks" is a real, demonstrable feature.
2. **24 swappable in-sheet color palettes.** One-click theme swap via the Apps Script menu (`Apply Theme`). A surface area bigger than any competing Etsy template.
3. **Real bank CSV import** with header-sniffing auto-categorization (Chase, BoA, Wells, Cap One, Ally, Citi, USAA, Discover, Amex).
4. **Composite Health Score** (0–100, 5 weighted indicators) — gamifies budgeting without being patronizing.
5. **Mock-data story** — the file ships with Marcus & Elena Brooks pre-populated so buyers see what "good" looks like instantly. (The blank version ships without this.)
6. **Goals with live linkage** — Goals pull `Current` from the ledger automatically. Buyers don't double-enter.
7. **Net Worth tab** — separates Budget Accounts (auto) from Investments (manual entry).
8. **One-time price, owned, no SaaS.**

## Brand voice (one line)

> "Sharp. Confident. Direct. No fluff. Like a smart friend who's good at systems — not like a financial institution."

### Voice rules

- **Second person.** "You already know something's off." Not "Many people find…"
- **Short sentences. One idea per sentence.** Periods carry the rhythm.
- **Em-dashes for asides and pivots** — used freely.
- **Specifics over generalities.** `"$35, one time"` not `"affordable"`. `"454 transactions"` not `"lots of data"`.
- **The middle-dot `·`** is the brand's signature separator. Always wrapped in spaces. Used in nameplates, chrome, navigation.
- **No exclamation points** in brand copy.
- **Lead with the problem,** not the product.

### Words to use

"Budget system," "money tool," "The Foundation," "get clear," "get your life in order," "leak you don't notice," "build your system," "out of the box," "owned," "instant download," "one-time," "no subscription."

### Words to AVOID

- ❌ "Financial template" (use "budget system" or "The Foundation")
- ❌ Jargon: "synergy," "streamline," "leverage," "empower"
- ❌ "Easy," "simple" — **show** it instead
- ❌ Pure black `#000` or pure white `#FFF` — use Forest and Parchment

## Naming and casing rules

- **Brand name:** `Column & Co.` — always with the ampersand and the period. The shop handle `columnandco` is the only place it loses the ampersand.
- **Product name:** `The Foundation` (or `The Foundation v2` / `v2.1` when versioning).
- **Tagline:** `Life, Organized.` — comma after Life, period after Organized. When used as a label under the logo: ALL CAPS with `0.2em` letter-spacing in Harvest Gold (`#C5A95A`).
- **Tab names and column labels:** Title Case ("Bank Import Guide", "Net Worth", "Health Score").
- **Section headers inside the sheet:** UPPERCASE tracked-out labels (`SETUP GUIDE`, `KEY METRICS`).

## Emoji & Unicode

- **`💳`** in the Apps Script menu title (`💳 Column & Co.`) — and only there.
- **`·` (middle dot, U+00B7)** as separator, with spaces around it.
- **`✓ ⚠`** for status chips inside the sheet.
- **`⚡`** for the "Biggest Opportunity" callout on Health Score — the one decorative exception.
- **`─` (box-drawing)** in the Health Score scale: `0 ─── Critical ─── 45 ─── Needs Work ─── 60 …`
- **`← →`** as instructional pointers in copy ("← then run").
- **No other emoji.** No ✨🎉.

## Logo

3×5 grid mark. **Column 1** is solid Harvest Gold in a 2-1-2 vertical rhythm (a tall block, a single cell, another tall block). **Columns 2 and 3** are fading tone studies — each cell is the base color (Forest on light backgrounds, Cream on dark) at one of three opacities: `0.85`, `0.45`, `0.18`. Reads as data captured against a column of structure.

**Never** drop-shadow the logo (explicit brand rule).

## Footer line (every printed tab)

`The Foundation v2.0 · columnandco.com · Do not distribute without license`

Bump to `v2.1` when this build ships.

---

*Read next: `02_design_tokens.md` for the full visual system.*
