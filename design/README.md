# Column & Co. — Design System

**Brand:** Column & Co.
**Tagline:** Life, Organized.
**Shop handle:** `columnandco`
**Current product:** The Foundation v2 — a Google Sheets household budget system

---

## What Column & Co. is

Column & Co. sells **premium Google Sheets templates on Etsy**. The current single product, **The Foundation v2**, is a 14-tab household budget system with a custom Apps Script menu (`💳 Column & Co.`), bank CSV import, auto-categorization, a 24-palette theming system, a composite Health Score, goals, trends, and a Net Worth tab.

The brand's wedge: **LLM-ready substrate.** The sheet is pre-structured so a general-purpose LLM (Claude, ChatGPT) can operate on it directly — a hidden `_Schema` tab documents the structure for AI assistants. The buyer owns the file, no subscription, no third party holding their data. Positioned for **"medium-tech" users** — comfortable with AI, not coders.

**Run by:** Dan (Column & Co. founder). Clint is business partner / strategic sounding board.

---

## Source materials (provided)

All inputs live in `/uploads`:

| File | What it is |
|---|---|
| `COLUMN_CO_BRAND_GUIDELINES.md` | Brand v1.0 — palette, type, logo rules, voice, Etsy setup |
| `COLUMN_CO_PROJECT__1_.md` · `COLUMN_CO_PROJECT (2).md` | Project state — product status, theming details, bug log, mock-data story |
| `ColumnCo_Foundation_v2 (16).gs` | Apps Script — `onOpen`, `importTransactions`, `applyTheme`, `renumberLedger`, help sidebar |
| `the_foundation_v2_MOCK_DATA.xlsx` | Hero file — 454 txns / 8 accounts / Marcus & Elena Brooks fictional couple |
| `the_foundation_v2_BLANK (2).xlsx` | Buyer deliverable — empty structure, 0 errors |

**No** Figma file, **no** codebase, **no** marketing site, **no** slide deck were provided. Everything below is reconstructed from the brand guidelines, the script source, and the xlsx contents.

---

## Index

```
README.md                   ← you are here
SKILL.md                    ← entry-point for Claude (and Claude Code)
colors_and_type.css         ← all design tokens (CSS custom properties)
fonts/README.md             ← font hosting strategy (Google Fonts)
assets/                     ← logos, shop icon (SVG)
preview/                    ← Design System tab cards
ui_kits/
  foundation/               ← The Foundation v2 — sheet recreation, 6/12/24-mo Trends toggle, retintable chrome
    README.md
    index.html              ← interactive prototype
    *.jsx                   ← components, chrome, tab content
  etsy_listing/             ← Etsy-ready visuals: banner, shop icon, 3 thumbnail directions, watermark spec, listing copy
    README.md
    index.html
```

---

## Content fundamentals

> **Voice in one line: "Sharp. Confident. Direct. No fluff. Like a smart friend who's good at systems — not like a financial institution."**

### Casing & punctuation
- **Brand name** is always written `Column & Co.` — with the ampersand, with the period, in title case. The shop handle `columnandco` is the only place it loses the ampersand.
- **Product name** is `The Foundation` (or `The Foundation v2` when versioning matters). Never "Column & Co. Budget Template" — the brand does the heavy lifting, the product is a proper noun.
- **Tagline** is `Life, Organized.` — comma after Life, period after Organized, title case as a sentence. When used as a label under the logo it goes ALL CAPS with `0.2em` tracking and the gold (`#C5A95A`).
- **Tab names and column labels** inside the sheet use Title Case (e.g. "Bank Import Guide", "Net Worth", "Health Score").
- **Section headers in copy** use UPPERCASE tracked-out labels (e.g. `SETUP GUIDE`, `KEY METRICS`).
- **No exclamation points** in brand copy. Acceptable in social/casual; **never** in Etsy listings or brand materials.

### Person
- **Second person.** "You already know something's off." Not "Many people find…"
- "I" is rare. We don't talk about ourselves much.
- Lead with the **problem**, not the product.

### Sentence structure
- **Short sentences. One idea per sentence.** Periods carry the rhythm.
- Em-dashes for asides and pivots — used freely.
- **Specifics** over generalities. `"$35, one time"` not `"affordable"`. `"454 transactions"` not `"lots of data"`.
- The middle-dot `·` (U+00B7) is the brand's signature separator — used in nameplates, slide chrome, navigation. Always wrapped in spaces: `Column & Co.  ·  The Foundation v2  ·  Dashboard`.

### Words to use
- "Budget system," "money tool," "The Foundation" — when describing the product.
- "Get clear," "get your life in order," "leak you don't notice," "build your system," "out of the box."
- "Owned," "instant download," "one-time," "no subscription" — for positioning.

### Words to AVOID
- ❌ "Financial template" (use "budget system" or just "The Foundation")
- ❌ Jargon: "synergy," "streamline," "leverage," "empower"
- ❌ "Easy," "simple" — **show** it instead
- ❌ Pure black `#000` or pure white `#FFF` — use Forest and Parchment

### Emoji & Unicode
- **Sparingly.** The brand uses two recurring glyphs:
  - `💳` in the Apps Script menu title (`💳 Column & Co.`)
  - `·` (middle dot) as a separator everywhere
- Status chips inside the sheet use ✓ ⚠ — never decorative emoji like ✨🎉.
- Health Score uses `⚡` ("⚡ BIGGEST OPPORTUNITY"). That's the one decorative exception.
- Box-drawing characters (`─`) are used in the Health Score scale: `0 ─── Critical ─── 45 ─── Needs Work ─── 60 …`
- An arrow (`←` / `→`) sometimes appears as inline pointing direction in instructions: `"← then run"`, `"→ Apply Theme"`.

### Examples (lifted from product)
- Etsy shop announcement: *"Google Sheets templates for people who want their life a little more organized. Instant download. One-time price. No subscriptions."*
- Setup step: *"Open Bank Import Guide tab. Type your account name in C6. Paste your bank CSV. Run 💳 Column & Co. → Import Bank Transactions."*
- Goal note: *"Biggest leak. Cut delivery apps — cook 4 nights/week."*
- Footer: *"The Foundation v2.0 · columnandco.com · Do not distribute without license"*

---

## Visual foundations

### Color
Five brand colors, locked. No additions in brand-facing communications.

| Role | Token | Hex | Where it lives |
|---|---|---|---|
| Primary | `--cc-forest` | `#1C3D2E` | Logo, headings, dark hero bars, KPI cards |
| Mid | `--cc-canopy` | `#2D5C45` | Sub-bands, section labels in sheet |
| Accent | `--cc-harvest-gold` | `#C5A95A` | Logo cells, tagline, key callouts — **sparingly, never as a large background** |
| Warm bg | `--cc-cream` | `#F0EBD8` | Section backgrounds, alternating rows, zebra |
| Light bg | `--cc-parchment` | `#FAF8F2` | Page background, card background |

**Imagery vibe:** warm. Cream + parchment + forest reads as cabin-meets-letterpress: the brand is craft + clarity, not fintech and not wellness. No grain, no watercolor, no pastel.

#### Secondary colorway — Navy & Gold (future products)

A second brand colorway exists for **future products in the line**. Today everything ships under Green & Gold; Navy & Gold is parked.

| Role | Token | Hex |
|---|---|---|
| Primary | `--cc-navy` | `#1B2A4A` |
| Mid | `--cc-navy-mid` | `#2C3E6B` |
| Accent | `--cc-navy-gold` | `#C8873A` (warmer gold) |
| Gold tint | `--cc-navy-gold-lt` | `#F5D9B0` |
| Cream | `--cc-navy-cream` | `#F7F6F2` (warmer cream) |

Activate by setting `data-cc-colorway="navy"` on the root element of any layout. `colors_and_type.css` has an override block that swaps the brand variables (`--cc-forest`, `--cc-canopy`, `--cc-harvest-gold`, etc.) to their Navy & Gold equivalents — every component that uses brand tokens retints automatically, no per-file edits needed.

Navy lockups + icons ship as separate files in `assets/`:
- `logo-lockup-navy.svg` · `logo-lockup-on-navy.svg`
- `logo-icon-navy.svg` · `logo-icon-on-navy.svg`

The 24 in-sheet palettes (Light, Warm Greige, etc.) are independent of which colorway is active — they're product features, not brand modes.

**Inside the sheet (NOT brand):** 24 swappable interior palettes — Light, Warm Greige, Cool Slate, Sage, Espresso, plus ten named color pairings (Maize and Navy, Scarlet and Gray, Garnet and Gold, etc.), plus Custom. These are a **product feature** so a buyer can match their personal taste. They never escape the sheet — brand comms are always Forest/Cream/Parchment.

### Type
- **Display:** Playfair Display (700 for brand name, 400 italic for sub/product names). Never below 18px.
- **Body:** Jost (500 for labels/tagline tracked out 0.2em, 300 for body copy with 0.02em tracking, 75% opacity Forest).
- **In-sheet figures:** treat all numbers as tabular nums in Jost 500.
- See `colors_and_type.css` for the full scale — `--cc-text-9` (9px) through `--cc-text-64` (64px). Brand name lives at 32–48px, product name at 20–28px, tagline at 10–12px, body at 12–14px, captions at 9–10px.

### Spacing
8-pt scale with a 4px half-step at the bottom: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96`. Density is medium — the brand isn't airy/luxe, it's a tool. Section labels sit close to their content; sections are separated by 32–48px of vertical air, not 96+.

### Corners & borders
**Small radii.** Column & Co. is structural, not soft. Cards and buttons are `2–4px`. Sheet cells are `0`. Pills are reserved for status chips only. Borders are 1px Forest at 12% opacity for hairlines, 1px Harvest Gold for accent rules under section dividers, 2px Forest for strong containers. **No colored-left-border-only cards** — that's an AI-slop pattern, never use it.

### Shadows
Restrained. Shadows are NOT the main elevation system — color blocks and borders are. Two shadow tokens:
- `--cc-shadow-card`: barely-there, for cards on cream sections.
- `--cc-shadow-raised`: for modals, dropdowns, the help sidebar.
- **Never** drop-shadow the logo (explicit brand rule).
- Focus rings use a 3px Harvest-Gold halo at 35% opacity.

### Backgrounds
- **Pages:** Parchment (`#FAF8F2`).
- **Section backgrounds:** Cream (`#F0EBD8`) — used to chunk content vertically.
- **Hero/footer bars:** full-bleed Forest.
- **No gradients** in brand communications. (One exception: the brand guidelines mention an optional subtle radial Harvest-Gold glow top-right corner on the Etsy shop banner — that's the only sanctioned gradient effect.)
- **No background images** behind text. Imagery, when used, sits in its own block or full-bleed at the top of a layout — never as a wash under content.
- **No repeating patterns or textures.** The grid logo *is* the brand's repeating pattern — used as a watermark or hero motif at low opacity is the most decorative this brand gets.

### Hover & press states
- **Buttons / interactive surfaces** darken by ~8% on hover (Forest → near-black-green; Parchment → light cream). Never opacity-only — opacity hovers feel cheap.
- **Links** underline on hover with a 1px Harvest-Gold underline-offset.
- **Press:** translateY(1px) and no extra shadow change. Sharp brands stay snappy, not bouncy.

### Animation
- Functional only. No bounces, no spring physics, no flourishes.
- Durations: `120ms` for micro-feedback (button press), `180ms` for state changes (open/close), `320ms` for content reveals (max).
- Easing: `cubic-bezier(0.4, 0.0, 0.2, 1)` (Material standard) by default; `ease-out` for entrances.
- Fades are okay; slides are okay; scaling/rotating/bouncing is not.

### Transparency & blur
- Body text sits at **75% opacity Forest**, not solid black, not gray. Captions at 50%. This is the brand's signature softness — text is muted while remaining warm.
- **No glass / blur effects.** This brand doesn't use frosted backgrounds. Surfaces are flat.

### Imagery vibe (when product photography is added)
- **Warm, not cool.** Cream sheets, natural wood, brass, leather — think editorial home & office, not stock photography.
- **No people stock.** No couples at laptops. No briefcase metaphors.
- **No dollar-sign / chart-explosion / handshake / Wall-Street imagery.** The brand is explicitly NOT fintech.

### Layout rules
- **Header row** (full-bleed, ~64–72px high, Forest): contains lockup left, breadcrumb right, separated by `·`.
- **Accent rule** (3px solid Harvest Gold) sits directly under the Forest header on every full layout — this is the brand's signature.
- **Body** sits on Parchment with cards in Cream or white-Parchment.
- **Footer** is a thin Forest bar with cream "The Foundation v2.0 · columnandco.com · Do not distribute without license"-style line.
- Inside the sheet: row 1 = Forest header, row 2 = Canopy sub-band, row 3 = Harvest-Gold accent rule. This 3-row chrome is the brand's "letterhead" pattern and must be preserved across all sheet tabs.

---

## Iconography

**Column & Co. uses iconography sparingly and never as decoration.**

There is **no proprietary icon font**. Three sources, in priority order:

1. **The grid mark itself** — the 3×5 highlighted-cell logo doubles as a section ornament and watermark. At 10% opacity, bottom-right corner, it's the standard product-screenshot watermark.
2. **Unicode & box-drawing** — the brand leans into typographic glyphs over icons. `·` (middle dot) as separator. `←` `→` for instructional pointers. `─` for inline scales. `✓` `⚠` for status. `⚡` for the Health Score "Biggest Opportunity" callout.
3. **CDN icon system (substitution — flag with user):** when a real icon is needed (e.g. for the UI kit recreations), use **Lucide** at the same 1.5px stroke weight, sized 16–20px, colored Forest (`#1C3D2E`) or Canopy (`#2D5C45`). Lucide's monoline calm geometry matches the brand voice better than Heroicons (too plump) or Font Awesome (too detailed). **This is a Claude substitution — flag to Dan for review.**

```html
<!-- Lucide via CDN -->
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="trending-up" style="color:#1C3D2E;width:18px;height:18px;stroke-width:1.5"></i>
<script>lucide.createIcons();</script>
```

**Emoji:** the brand uses two — `💳` in the Apps Script menu title, and that's it for true emoji. Status uses Unicode glyphs (`✓ ⚠`), not emoji.

**Logo & shop assets in `assets/`:**
- `logo-lockup-primary.svg` — primary lockup, Forest on Parchment
- `logo-lockup-on-forest.svg` — reverse, Cream + Gold on Forest
- `logo-icon.svg` — icon only, primary
- `logo-icon-on-forest.svg` — icon only, reverse
- `logo-icon-cream.svg` — icon only, transparent background (use this on retinted chrome, palette-driven backgrounds, or anywhere the parent bg should show through)
- `shop-icon-500.svg` — 500×500 Etsy/Pinterest shop icon (Forest bg, 20% padding)

**Logo design — gold spine, fading tonal columns:**
The 3×5 grid mark uses **column 1 as a solid Harvest Gold spine** in a 2-1-2 vertical rhythm (a tall block, a single cell, another tall block). **Columns 2 and 3 are fading tone studies** — each cell is the base color (Forest on light backgrounds, Cream on dark) at one of three opacities: `0.85` (full), `0.45` (mid), or `0.18` (dim). The combination reads as data captured against a column of structure — gold standing firm while the noise to its right resolves into a textured fade.

> ⚠ **Heads up:** the brand guidelines describe but don't ship the logo files. I've reconstructed them from the v1.0 spec with this falling-cascade interpretation. If the official files differ, replace these and re-register.

---

## Differentiators worth leaning into (for the Etsy listing)

These came out of reading the script + xlsx. Worth surfacing in listing copy and screenshot order:

1. **24 swappable color palettes** — a hue selection wider than anything else on Etsy in this category. Buyers can dial the sheet to their personal taste with one click.
2. **LLM-ready `_Schema` tab** — the file is structured so Claude/ChatGPT can read it directly. "Ask AI to find your subscription leaks" is a real, demonstrable feature.
3. **Real bank CSV import** with auto-categorization — most Etsy sheet templates require manual entry. The Apps Script supports Chase, BoA, Wells Fargo, Cap One, Ally, Citi, USAA, Discover, Amex by header sniffing.
4. **Composite Health Score** (0–100 across 5 weighted indicators) — gamifies budgeting without being patronizing.
5. **Mock-data story** (Marcus & Elena, dining/subscription creep) — the listing photos can tell a *narrative*, not just show a clean empty grid.
6. **Goals with live linkage** — Goals pull `Current` from the ledger automatically. Buyers don't double-enter.
7. **Net Worth tab** — separates Budget Accounts (auto) from Investments (manual entry). Most $35 Etsy templates don't track net worth.
8. **One-time price, owned, no SaaS** — the strongest positioning move against YNAB/Monarch/Copilot.

See `ui_kits/etsy_listing/` for in-progress listing-image concepts that lead with these.

---

## Substitutions / open questions

| Item | Status | Action |
|---|---|---|
| Logo SVG files | **Reconstructed from spec, then re-styled per direction:** falling-cascade pattern with 2 Harvest Gold cells + 3 green-shade cells. | Replace if Dan has official files |
| Playfair Display & Jost | Linked via Google Fonts (free) — same as brand spec | None |
| Icon library | **Substituted with Lucide CDN** | Flag for Dan to approve |
| Real product screenshots | Not provided | Need exported PNGs from Sheets to refine listing kit |
| Etsy listing copy file | Referenced in project state (`COLUMN_CO_ETSY_LISTING.md`) but not uploaded — I drafted a starter inside `ui_kits/etsy_listing/` | Compare against Dan's working copy when available |
| Onboarding deck (`Starting_a_New_Build.pptx`) | Referenced but not uploaded | Request if you want a slide template too |

---

*Column & Co. · Life, Organized.*
