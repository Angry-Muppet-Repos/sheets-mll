# Claude Design — Foundation v2.1 Product Guide PDF

> Copy everything below this line into a fresh Claude Design (Canva) session. It's a complete, self-contained brief — brand tokens, page-by-page layout, copy, and image placement. Don't paraphrase; the voice and the figures are deliberate.

---

# Build: The Foundation v2.1 — Product Guide

A 32–40 page PDF user manual for a premium Google Sheets household-budget template sold on Etsy by **Column & Co.** under the product name **The Foundation v2.1**. The PDF ships inside the Etsy `.zip` download alongside the workbook and the Apps Script file.

Output: a single PDF, US Letter portrait (8.5" × 11"), 32–40 pages, brand-locked, print-ready.

---

## Brand identity — locked, do not improvise

### Colors (exact hex — do not substitute)

| Token | Hex | Where it lives |
|---|---|---|
| Forest (primary) | `#1C3D2E` | Headers, hero bars, big numerals, footer |
| Canopy (mid) | `#2D5C45` | Sub-bands, section labels, body emphasis |
| Harvest Gold (accent) | `#C5A95A` | Tagline, separator dots, callout labels, 3px accent rule |
| Cream (warm bg) | `#F0EBD8` | Section backgrounds, alternating rows |
| Parchment (light bg) | `#FAF8F2` | Page background — never pure white |
| Garnet (warning) | `#832F30` | "Over budget," errors |
| Body text | Forest at 75% opacity | All running text |
| Caption text | Forest at 50% opacity | Sub-labels, captions |

**Never use pure black (`#000000`) or pure white (`#FFFFFF`).** Forest and Parchment instead. **No gradients.** **No drop shadow on the logo, ever.**

### Typography

- **Display:** Playfair Display, 700 weight. Brand name, hero numerals, tab titles. Italic 400 for sub-labels. **Never below 18pt.**
- **Body:** Jost, 300 weight, 0.02em letter-spacing, at 75% Forest opacity.
- **Labels & captions:** Jost 500, 10pt, tracked 0.18–0.20em, ALL CAPS, often in Harvest Gold.
- **Numbers:** Jost 500, `font-variant-numeric: tabular-nums`.

Pull both from Google Fonts. If forced to substitute: Playfair Display → Lora or EB Garamond. Jost → Roboto.

### Spacing

8-point scale: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96. **Medium density** — this is a tool, not a luxury brochure. 32–48px between sections, **not** 96+.

### The 3-row brand chrome (every page header)

Top of every page, three stacked full-bleed strips:

```
████████████████  Forest #1C3D2E, ~64pt tall, contains the brand mark on left + breadcrumb on right
████████████████  Canopy #2D5C45, ~24pt tall, often contains a section sub-label in Harvest Gold tracked caps
████████████████  Harvest Gold #C5A95A, exactly 3pt tall — the brand's signature accent rule
```

After the gold rule, content begins 24pt down.

### Logo

3×5 grid mark. **Column 1** is solid Harvest Gold in a 2-1-2 vertical rhythm (tall block, single cell, tall block). **Columns 2 and 3** are tone studies: each cell is Forest (or Cream on dark backgrounds) at one of three opacities — 0.85, 0.45, 0.18. Reads as data captured against a column of structure. **Never apply drop-shadow.** I'll provide an SVG; if I don't, render it from this spec.

### Footer (every page)

Forest bar, full-bleed, ~32pt tall. Centered text:

> The Foundation v2.1 · columnandco.com · Do not distribute without license

Jost 400, 10pt, Parchment at 60% opacity, middle-dots with spaces.

---

## Voice — locked, do not improvise

> "Sharp. Confident. Direct. No fluff. Like a smart friend who's good at systems — not like a financial institution."

- **Second person.** "You already know something's off."
- **Short sentences.** One idea per sentence. Periods carry the rhythm.
- **Em-dashes for asides and pivots** — used freely.
- **Specifics over generalities.** `"$35, one time"` not `"affordable"`.
- **The middle-dot `·` is the brand separator.** Always wrapped in spaces.
- **No exclamation points.**
- **Banned words:** "easy," "simple," "streamline," "synergy," "leverage," "empower." If a heading reads `"Easy setup,"` rewrite to `"Five steps to a working sheet."`

---

## Page-by-page layout

Page numbers are approximate — let the content breathe but don't pad.

### Page 1 — Cover

- Full Forest background (`#1C3D2E`).
- Center the 3×5 logo mark at ~120pt tall in the upper third.
- Below the logo, centered:
  - **Brand name:** "Column & Co." — Playfair Display 700, 48pt, Parchment.
  - **Tagline:** "LIFE,  ORGANIZED." — Jost 500, 12pt, Harvest Gold, tracked 0.2em, ALL CAPS, two spaces between words.
- Lower third, centered:
  - **Product name:** "The Foundation" — Playfair Display italic 400, 38pt, Parchment.
  - **Version line:** "Version 2.1 · Product Guide" — Jost 400, 14pt, Parchment at 70% opacity, middle-dot with spaces.
- Bottom strip (3pt): Harvest Gold rule edge-to-edge.

### Page 2 — Welcome (single page)

3-row brand chrome header. Tab title:

**Welcome** — Playfair Display 28pt Forest.  
"A premium household budget system. Yours forever, on your own Drive. No subscription, no third party holding your data." — Jost 300, 13pt, Forest at 75%.

Body (one short column, ~480pt wide, centered):

> You already know something's off — the dining line keeps climbing, the savings rate stalled in March, you're not sure why. The Foundation is the budget system that gives you the read in two clicks and the controls to do something about it.
>
> Twelve tabs, sixteen color palettes, ten budget profiles, one bank-CSV importer that recognizes nine US banks out of the box, and a hidden `_Schema` tab that lets Claude or ChatGPT read your data and tell you what to fix.
>
> This guide is a tour. The first five pages get you operational in ten minutes. The rest is reference — read what you need, ignore what you don't.

Below the body, a small "What's in this guide" stack:

- **Quickstart** — five steps to a working sheet
- **Menu Reference** — every item in the `💳 Column & Co.` menu
- **Tab Tour** — twelve tabs, what each one does
- **Recipes** — end-to-end walkthroughs
- **Troubleshooting** — when something doesn't work
- **Appendix** — palettes, profiles, named ranges

### Pages 3–7 — Quickstart (one page per step)

3-row chrome header on every page, with the Canopy sub-band reading `SETUP GUIDE · STEP X OF 5` right-aligned in Harvest Gold tracked caps.

Each step page has:

- A **giant Playfair Display step number** at the top-left of the content area: `01`, `02`, etc. — Playfair 700, 96pt, Harvest Gold.
- A **step title** beside the number: Playfair 28pt Forest.
- **Step body** below: 13pt Jost 300 body, max 540pt wide.
- A **screenshot or branded illustration** of the relevant sheet area on the right half of the page, with a 1px Harvest Gold hairline border.

**Step copy (use verbatim):**

**Step 1 · Make your copy.** Open `the_foundation_v2_BLANK.xlsx` in Google Drive. Right-click → Open with → Google Sheets. Then File → Save as Google Sheets. The file lives in your Drive — Column & Co. never sees it.

**Step 2 · Install the script.** Extensions → Apps Script. Delete the placeholder content. Paste in `ColumnCo_Foundation_v2.gs` from your download. Save. Reload the sheet. The `💳 Column & Co.` menu appears between Extensions and Help. The first click prompts for permission — the scope is `spreadsheets.currentonly`, the narrowest Google offers. Approve.

**Step 3 · Add your accounts.** Go to the Accounts tab. One row per checking account, credit card, savings account. Name · Type · Owner · current balance. The Last Updated column stamps itself — don't touch it. Investments live on Net Worth, not Accounts.

**Step 4 · Import your first month.** On Bank Import Guide, type the account name in cell C6. Paste your bank CSV into the green paste-zone box below. Run `💳 Column & Co. → Import Bank Transactions`. The script sniffs nine bank formats (Chase, BoA, Wells, Cap One, Ally, Citi, USAA, Discover, Amex) and auto-categorizes against your Categories rules.

**Step 5 · Pick your look.** Top-right swatch button on any tab — sixteen palettes. Pick one, sheet repaints. Then pick a budget profile from `💳 Column & Co. → Apply Budget Profile`. Ten profiles from Dave Ramsey to Kakeibo. Editing any yellow cell flips you to Custom mode, and your values are saved.

### Pages 8–11 — Menu Reference

3-row chrome. Canopy sub-band reads `MENU REFERENCE · 💳 COLUMN & CO.`

A 2-column layout. Each menu item is one entry: name in Jost 500 13pt Forest, then a 12pt Jost 300 paragraph. Items separated by a 1px Harvest Gold hairline at 24pt vertical spacing.

> *Note for design pass: the canonical content for this section is being written against the live `.gs` file. If the markdown file `02_menu_reference.md` is still showing "pending" entries, hold this section blank — do not improvise menu behavior.*

Menu items to lay out (in order):

1. Add Account…
2. Import Bank Transactions
3. Clear Paste Zone
4. Recategorize Ledger from Rules
5. Sort Transactions by Date
6. Apply Theme ▸ *(submenu — list all 16 palettes as a single dense reference, see appendix table)*
7. Apply Budget Profile ▸ *(submenu — list all 10 profiles, see appendix table)*
8. Renumber Ledger
9. Help…
10. Setup ▸

For the two submenus, drop a small 2-column table inline showing palette/profile name + one-line description.

### Pages 12–23 — Tab Tour (one page per visible tab)

3-row chrome. Canopy sub-band reads the tab name in tracked caps: `TAB · DASHBOARD`, etc.

Twelve pages. Each follows the same template:

- **Tab title** (Playfair 28pt Forest) and one-line description (13pt Jost 300, 75% Forest).
- **"You touch"** — a Cream-fill callout with a bulleted list of buyer-editable cells/columns.
- **"Computed for you"** — a second callout with what's auto-populated.
- **A large annotated screenshot** of the live sheet tab. Annotations are Forest arrows with Jost 11pt labels on a Cream chip.
- **A "Watch out for" line** at the bottom, in italic Playfair 13pt — the one thing buyers get wrong on this tab.

Tab order (the workbook's natural left-to-right):

1. Start Here
2. Trends
3. Dashboard
4. Monthly Budget
5. Health Score
6. Goals
7. Transactions
8. Bank Import Guide
9. Net Worth
10. Accounts
11. Categories
12. _Engine / _Config / _Schema (system tabs, one combined page)

Body content comes from `03_tab_tour.md` in the markdown source. Use those words verbatim where possible.

### Pages 24–30 — Recipes (one or two pages per recipe)

3-row chrome. Canopy sub-band reads `RECIPES · CHAPTER N`.

Each recipe is a narrative walkthrough. Structure:

- **Recipe title** in Playfair Display italic 24pt Forest.
- **One-sentence setup** in 14pt Jost 300.
- **"You'll need"** mini-callout (gray Cream box, single line).
- **Numbered steps** as Playfair circles (Forest fill, Parchment numeral) with the step text in 12.5pt Jost 300 beside each.
- **A side-bar "What you now have"** in a vertical Forest panel on the right side of the last page of each recipe, with Parchment Playfair text.

Five recipes (full copy in `04_recipes.md`):

1. Import your first Chase month
2. Swap your look — themes and profiles
3. Ask Claude or ChatGPT to read your sheet
4. Build a Custom budget profile and save it
5. Track a Goal and read the forecast

### Pages 31–34 — Troubleshooting & FAQ

3-row chrome. Canopy sub-band reads `TROUBLESHOOTING · WHEN IT DOESN'T WORK`.

Use a two-column Q&A layout. Each Q in Jost 500 13pt Forest, each A in 12pt Jost 300 body. 1px Harvest Gold hairline between entries at 18pt spacing. Headings (`Setup & install`, `Bank Import`, `Theme & Profile`, `Data & display`, `Hidden tabs`, `File & ownership`) in 16pt Playfair italic Forest, full-width spans.

Pull all entries verbatim from `05_troubleshooting.md`.

### Pages 35–38 — Appendix

3-row chrome. Canopy sub-band reads `APPENDIX · REFERENCE TABLES`.

#### Appendix A — Palette table (one full page)

A 4×4 grid of 16 palette tiles. Each tile is ~120pt × 100pt:

- Three horizontal stripes showing Primary / Mid / Accent
- Below the stripes: palette name in Playfair italic 13pt
- Below the name: the three hex codes in Jost 11pt tabular nums, Forest at 60%

Use the exact hex codes from the table below.

| Name | Primary | Mid | Accent |
|---|---|---|---|
| Light | `#1C3D2E` | `#2D5C45` | `#C5A95A` |
| Warm Greige | `#3D2B1F` | `#5C4033` | `#C8873A` |
| Cool Slate | `#1E3A5F` | `#2D5282` | `#64748B` |
| Sage | `#2D4A3E` | `#3D6455` | `#8FAF7E` |
| Espresso | `#2C1810` | `#4A2C1A` | `#C8873A` |
| Maize & Navy | `#003366` | `#004080` | `#FFCB05` |
| Scarlet & Gray | `#BB0000` | `#CC0000` | `#808080` |
| Orange & Navy | `#002D6D` | `#003D94` | `#F47920` |
| Green & Gold | `#154734` | `#1A5C43` | `#CBA135` |
| Purple & Gold | `#4A1C7C` | `#5E2499` | `#FFC72C` |
| Crimson & White | `#9B1B30` | `#B52238` | `#FFFFFF` |
| Garnet & Gold | `#782F40` | `#9B3B52` | `#CBA135` |
| Forest & White | `#154733` | `#1E6048` | `#FFFFFF` |
| Royal & Gold | `#002D72` | `#003D9C` | `#B5A642` |
| Silver & Black | `#1A1A1A` | `#2D2D2D` | `#A8A9AD` |
| Custom | `#1B2A4A` | `#2C3E6B` | `#C8873A` |

#### Appendix B — Budget profile table (one full page)

A 2-column list of all 10 profiles. Each entry:

- Profile name in Playfair italic 18pt Forest
- Sub-label in Jost 500 10pt tracked Harvest Gold
- Blurb in 12pt Jost 300, max 4 lines
- Top 3 categories by allocation, as a small inline figure: `Housing $2,400 · Food $900 · Savings $1,500` in Jost 11pt tabular

Profiles in order:

| Name | Sub | Top 3 categories ($ at $10,230 income) |
|---|---|---|
| Dave Ramsey | Envelopes · Baby Steps | Housing $2,400 · Debt Payments $1,500 · Savings $1,500 |
| 50/30/20 | Needs · Wants · Savings | Housing $2,400 · Savings $1,500 · Food $750 |
| FIRE | Financial Independence · Retire Early | Savings $5,200 · Housing $1,800 · Food $500 |
| Zero-Based | Every dollar gets a job | Housing · Savings · Food *(values from `data/profiles.json`)* |
| Anti-Budget | Pay yourself 20% off the top | Savings $2,046 · Housing · everything else lumped |
| Kakeibo | Mindful · Needs / Wants / Culture / Unexpected | Needs · Wants · Culture · Unexpected — 4 buckets |
| New Parent | Childcare is the second-largest line | Housing · Childcare · 529 |
| Self-Employed | 25% escrowed for quarterly taxes | Housing · Taxes · Insurance |
| HCOL Renter | Rent eats 40% | Housing · Food · Student Loans |
| Custom | Click any yellow cell to edit | Buyer-defined |

#### Appendix C — Named ranges (one page)

A two-column reference table.

| Named range | What it holds |
|---|---|
| `dashboard_active_month` | Index 0..23 into `_Engine` |
| `dashboard_kpi_income` | Current-month income KPI |
| `dashboard_top_spending` | 8×4 table of top categories |
| `dashboard_breakdown` | 12×2 table for donut |
| `trends_window` | `6` / `12` / `24` |
| `trends_months` | Active slice of `_Engine` |
| `trends_category_rows` | Per-category sparkline rows |
| `budget_active_profile` | Profile ID string |
| `budget_income` | Monthly income |
| `budget_targets` | 20 category target cells |
| `budget_total` | `=SUM(budget_targets)` |
| `budget_savings_rate` | Savings row / income |

#### Appendix D — Glossary (one page)

Short definitions of: AI Insights · Brand chrome · Canopy · Composite Score · Custom profile · Forest · Harvest Gold · `_Engine` · `_Schema` · Named range · Pacing bar · Profile · Sparkline · Status chip · Tile picker.

### Page 39 — Closing

Full Forest background, centered:

- 3×5 logo mark at 100pt, Parchment with Harvest Gold accents per the spec.
- Below: **"Life, Organized."** — Playfair Display italic 32pt, Parchment.
- Smaller, below: "columnandco.com" — Jost 400, 14pt, Harvest Gold.

### Page 40 — License & support

3-row chrome. Body:

- **Ownership.** This file is yours. One-time purchase. No subscription. The workbook lives in your Drive — Column & Co. never accesses it. Make as many copies as you want for personal use.
- **License.** Single-buyer license. Don't redistribute the `.gs` or the `.xlsx`. Sharing the link to your sheet with your partner or your accountant is fine.
- **Support.** The Etsy listing has our email. We answer within two business days. Include your step, a screenshot, and what you've already tried.
- **Updates.** When v2.2 ships, you'll get notified through Etsy. Migration is manual today — see *Troubleshooting · Updating to a newer version*.

Footer.

---

## Image placement notes for the design pass

Wherever a screenshot is called for, I'll deliver a cropped PNG at 2x retina with these guidelines:

- Crop tight — don't include the entire Sheets browser chrome unless it's the *Extensions menu* shot in Step 2.
- Annotation arrows are Forest (`#1C3D2E`), 2pt stroke, with arrowheads.
- Annotation labels are 11pt Jost 500 on a Cream chip with a 1px Harvest Gold border.
- Don't drop-shadow screenshots. A 1px Harvest Gold hairline is the only border.

If a screenshot isn't available, render a **branded illustration** of the sheet area instead — Forest header, Canopy sub-band, Gold rule, then a simplified content area in Cream with placeholder rows. Don't fabricate dollar figures; use the canonical mock-data figures (Marcus & Elena Brooks, $10,230 monthly income, etc.).

---

## Output requirements

- US Letter, 8.5" × 11" portrait
- 32–40 pages
- Embedded fonts: Playfair Display, Jost (both via Google Fonts)
- Image DPI ≥ 300 for any embedded screenshot
- Page count includes cover and back cover
- Export as PDF/X-1a if Canva offers it; otherwise standard PDF, "Print" quality
- File name: `Foundation_v2.1_Product_Guide.pdf`

When the design is done, send back the PDF. I'll review for voice, brand fidelity, and figure accuracy before it ships in the Etsy `.zip`.
