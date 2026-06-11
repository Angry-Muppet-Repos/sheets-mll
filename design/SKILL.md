---
name: columnco-design
description: Use this skill to generate well-branded interfaces and assets for Column & Co. — the premium Etsy Google-Sheets template brand (The Foundation v2 budget system). Contains essential design guidelines, the 5-color brand palette + 24 swappable sheet palettes, the Playfair Display + Jost type system, fonts, logo assets, voice and copy rules, and a high-fidelity UI kit recreating the Foundation product for prototyping screenshots, listing assets, slide content, or production code.
user-invocable: true
---

# Column & Co. — Design Skill

Column & Co. sells premium Google Sheets templates on Etsy. Tagline: **Life, Organized.** Current single product: **The Foundation v2** — a 14-tab household budget system with an Apps Script menu (💳 Column & Co.), bank-CSV import, 24 swappable interior color palettes, a composite Health Score, and an LLM-ready `_Schema` tab. Run by Dan; Clint is business partner.

Brand voice in one line: **Sharp. Confident. Direct. No fluff. A smart friend who's good at systems — not a financial institution.**

---

## Read these first

1. **`README.md`** — full context, voice rules, visual foundations, iconography. Always read before producing brand-facing work.
2. **`colors_and_type.css`** — all design tokens (5 brand colors, 16 sheet palettes, type scale, spacing, radii, shadows). Import this in any artifact you generate.
3. **`fonts/README.md`** — Playfair Display + Jost via Google Fonts (free, no substitution flagged).
4. **`assets/`** — logos and shop icon as SVG. Copy these out; don't redraw them.
5. **`preview/`** — design system cards. Useful as visual reference for the look and feel.
6. **`ui_kits/foundation/`** — high-fidelity recreation of The Foundation v2 (the actual product). Open `index.html`. Read the kit README for the list of proposed visual upgrades worth pitching.

---

## When you're asked to make something

**If the brief is unclear, ask.** Typical questions for Column & Co. work:
- Is this **brand communication** (Etsy listing, shop banner, email, slide deck) — use the Forest/Cream/Gold brand palette only.
- Or **in-product** (the sheet itself, an in-sheet panel) — you may use any of the 16 sheet palettes.
- What size? (Etsy banner 3360×840, shop icon 500×500, listing thumbnail 2000×1500, product photo 2000×1500.)
- Which palette inside the sheet?
- Mock data or empty state?
- Should the screenshot include the brand chrome (Forest header row), a watermark (10% icon, bottom-right), or both?

---

## Rules that aren't negotiable

- **Default colorway is Green & Gold.** A second Navy & Gold colorway exists for future products — activate it with `data-cc-colorway="navy"` on the root element. The 5 brand color tokens (`--cc-forest`, `--cc-canopy`, `--cc-harvest-gold`, `--cc-cream`, `--cc-parchment`) swap automatically and everything that uses them retints. Don't hand-pick Navy lockup files unless you also set the attribute, and vice versa.
- **Never use pure `#000` or pure `#FFF`.** Use `--cc-forest` and `--cc-parchment` instead.
- **Use the brand fonts.** Playfair Display for display/brand/product names. Jost for body/labels/captions. Both load from Google Fonts (the `@import` at the top of `colors_and_type.css` covers it).
- **No exclamation points** in brand copy. (Acceptable in social/casual; never in listings or brand assets.)
- **Second person.** "You already know something's off." Not "Many people find..."
- **Short sentences. One idea per sentence.** Specifics over generalities.
- **Brand name = `Column & Co.`** Ampersand + period. Always. Shop handle `columnandco` is the only place without.
- **Tagline = `Life, Organized.`** Comma + period. ALL CAPS + 0.2em tracking + gold when used as a label.
- **Harvest Gold is an accent, not a background.** Use it for the tagline, the logo cells, key callouts. Never paint a large area gold.
- **No bluish-purple gradients, emoji decoration, dollar-sign clip art, briefcase metaphors, watercolor textures, or pastel pinks.** This brand is craft + clarity, not fintech and not wellness.
- **Radii are small** (0–8px, plus pill for status only). Sharp and structured, not soft.
- **No drop-shadow on the logo. Ever.**

---

## What to produce

If creating **visual artifacts** (slides, mocks, throwaway prototypes, listing screenshots):
- Copy the assets you need out of `assets/` and reference them with relative paths.
- Link `colors_and_type.css` so all tokens are available.
- Build a static HTML file the user can open and download/screenshot.
- For sheet recreations, follow the pattern in `ui_kits/foundation/` — the 3-row chrome (Forest header → Canopy sub-band → 3px gold rule) on every sheet tab.

If working on **production code** (the .gs script, the xlsx template, a marketing site), read the rules here and use the design tokens. Don't invent new colors or new font choices.

If the user **invokes this skill with no other guidance**, ask what they want to make — listing image, slide deck, Etsy banner, in-sheet element, or something else — then ask the questions in "When you're asked to make something" above and proceed.

---

## Differentiators worth leading with

When writing Etsy copy, social posts, listings, or slide decks for Column & Co., these are the proof points (full reasoning in the root `README.md` under "Differentiators worth leaning into"):

1. **24 swappable color palettes** — Light, Warm Greige, Cool Slate, Sage, Espresso, Midnight, Burgundy, Mocha, plus fifteen named color pairings, plus Custom. A hue range wider than anything else in this Etsy category.
2. **LLM-ready** — a `_Schema` tab lets Claude/ChatGPT read the sheet directly.
3. **Real bank-CSV import** — Apps Script auto-detects Chase, BoA, Wells Fargo, Cap One, Ally, Citi, USAA, Discover, Amex.
4. **Composite Health Score** — 0–100 across 5 weighted indicators with a Biggest Opportunity callout.
5. **Goals with live linkage** — pull `Current` from the ledger automatically.
6. **Net Worth tab** — Budget Accounts auto-pulled, Investments entered directly. Most $35 Etsy templates skip this.
7. **One-time price, owned, no SaaS** — the strongest positioning move against YNAB/Monarch/Copilot.

---

*Column & Co. · Life, Organized.*
