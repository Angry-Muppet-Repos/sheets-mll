# 02 · Design Tokens

All visual tokens used in The Foundation v2.1. **The CSS file `reference/colors_and_type.css` is the authoritative source** — when implementing in Sheets, copy the hex codes from there or from this doc, never re-derive them from a screenshot.

---

## Brand colors (locked — 5 colors, no additions)

| Role | Token | Hex | Where it lives |
|---|---|---|---|
| Primary | `--cc-forest` | `#1C3D2E` | Logo, headings, dark hero bars, KPI cards, header row |
| Mid | `--cc-canopy` | `#2D5C45` | Sub-bands, section labels in the sheet, second row of chrome |
| Accent | `--cc-harvest-gold` | `#C5A95A` | Logo column 1, tagline, key callouts — **sparingly, never as a large background** |
| Warm bg | `--cc-cream` | `#F0EBD8` | Section backgrounds, alternating rows, zebra |
| Light bg | `--cc-parchment` | `#FAF8F2` | Page background, card background |

### Functional colors

| Use | Hex | Notes |
|---|---|---|
| Yellow input cell | `#FFFDE7` | Every buyer-editable cell. Border: 1px `#C5A95A`. |
| Status — On Track | `#2D5C45` | Canopy. Chip background: `#E5F5EA` at 10% opacity. |
| Status — Fair | `#C5A95A` | Harvest Gold. Chip background: `#FFF3C0` at 25% opacity. |
| Status — Over | `#832F30` | Garnet. Chip background: `#FFE5E5` at 25% opacity. |
| Hairline border | `rgba(28,61,46,0.12)` | 1px Forest at 12% opacity. |
| Gold rule (3px) | `#C5A95A` | The third row of the chrome — non-negotiable. |
| Body text | `rgba(28,61,46,0.75)` | Forest at 75% opacity. |
| Caption text | `rgba(28,61,46,0.50)` | Forest at 50% opacity. |

### Secondary colorway — Navy & Gold (parked, future products)

Activate by setting `data-cc-colorway="navy"` on the root element of any layout. **Don't use in v2.1** — everything ships under Green & Gold.

| Role | Token | Hex |
|---|---|---|
| Primary | `--cc-navy` | `#1B2A4A` |
| Mid | `--cc-navy-mid` | `#2C3E6B` |
| Accent | `--cc-navy-gold` | `#C8873A` |
| Gold tint | `--cc-navy-gold-lt` | `#F5D9B0` |
| Cream | `--cc-navy-cream` | `#F7F6F2` |

---

## 24 in-sheet palettes (product feature, NOT brand)

These are the buyer-selectable interior palettes. They retint the *sheet content area* but **never** the brand chrome (the Forest header / Canopy sub-band / Gold accent rule stay locked in brand colors).

The full data lives in `data/palettes.json`. The implementation should seed this into a hidden `_Config` sheet (one row per palette) and have `applyTheme(paletteId)` read from it.

| ID | Name | Primary | Mid | Accent | Bg | Zebra |
|---|---|---|---|---|---|---|
| `light` | Light | `#1C3D2E` | `#2D5C45` | `#C5A95A` | `#FAF8F2` | `#EEF2EC` |
| `warm-greige` | Warm Greige | `#3D2B1F` | `#5C4033` | `#C8873A` | `#FAF6F1` | `#F0E8DC` |
| `cool-slate` | Cool Slate | `#1E3A5F` | `#2D5282` | `#64748B` | `#F8FAFC` | `#EFF6FF` |
| `sage` | Sage | `#2D4A3E` | `#3D6455` | `#8FAF7E` | `#F4F9F1` | `#EAF4E3` |
| `espresso` | Espresso | `#2C1810` | `#4A2C1A` | `#C8873A` | `#FAF5F0` | `#F0E5D8` |
| `maize-navy` | Maize & Navy | `#003366` | `#004080` | `#FFCB05` | `#F5F8FF` | `#E8F0FF` |
| `scarlet-gray` | Scarlet & Gray | `#BB0000` | `#CC0000` | `#808080` | `#F9F9F9` | `#EFEFEF` |
| `orange-navy` | Orange & Navy | `#002D6D` | `#003D94` | `#F47920` | `#F5F8FF` | `#E8F0FF` |
| `green-gold` | Green & Gold | `#154734` | `#1A5C43` | `#CBA135` | `#F3FAF5` | `#E5F5EA` |
| `purple-gold` | Purple & Gold | `#4A1C7C` | `#5E2499` | `#FFC72C` | `#FAF5FF` | `#F3E8FF` |
| `crimson-white` | Crimson & White | `#9B1B30` | `#B52238` | `#FFFFFF` | `#FFF8F9` | `#FFE8EC` |
| `garnet-gold` | Garnet & Gold | `#782F40` | `#9B3B52` | `#CBA135` | `#FFF8F5` | `#FFE8DC` |
| `forest-white` | Forest & White | `#154733` | `#1E6048` | `#FFFFFF` | `#F4FBF6` | `#E8F5EC` |
| `royal-gold` | Royal & Gold | `#002D72` | `#003D9C` | `#B5A642` | `#F0F5FF` | `#E0ECFF` |
| `silver-black` | Silver & Black | `#1A1A1A` | `#2D2D2D` | `#A8A9AD` | `#F5F5F5` | `#EBEBEB` |
| `midnight` | Midnight | `#0B1F3A` | `#142E55` | `#14B8A6` | `#F0F4F8` | `#E2E8F0` |
| `burgundy` | Burgundy | `#5C0A1A` | `#7A0E22` | `#E8D5B5` | `#FAF5F0` | `#F0E6DA` |
| `mocha` | Mocha | `#5C3A21` | `#7A4F2D` | `#D4A574` | `#FAF3EA` | `#F0E2CE` |
| `indigo-blush` | Indigo & Blush | `#2E1F6B` | `#3D2A8C` | `#EAB0B8` | `#F7F4FA` | `#ECE5F5` |
| `pine-brass` | Pine & Brass | `#1F3A2E` | `#2E5544` | `#B8964A` | `#F2F8F4` | `#E1F0E7` |
| `ocean-coral` | Ocean & Coral | `#0F4858` | `#166075` | `#F47B6A` | `#F0F8FA` | `#DCEFF2` |
| `charcoal-mint` | Charcoal & Mint | `#2C2C2E` | `#44444A` | `#A8D5BA` | `#F5F5F5` | `#E8E8E8` |
| `olive-cream` | Olive & Cream | `#3D4A1F` | `#56672E` | `#C8B27A` | `#F7F4E8` | `#ECE5D0` |
| `custom` | Custom | `#1B2A4A` | `#2C3E6B` | `#C8873A` | `#F3F4F6` | `#EEF0F5` |

`light` is the default. Buyers can save their last-used palette to Document Properties (Apps Script side) so it survives reload.

---

## Typography

Two families. Both free, both via Google Fonts.

### Display — Playfair Display

- 700 weight for brand name, big numbers, slide titles
- 400 italic for product names and section sub-labels
- **Never below 18px**

### Body — Jost

- 500 weight for labels, tagline (tracked out `0.2em`)
- 300 weight for body copy (tracked `0.02em`), at 75% Forest opacity
- All numbers use `font-variant-numeric: tabular-nums` and Jost 500

### Type scale (from `colors_and_type.css`)

| Token | px | Common use |
|---|---|---|
| `--cc-text-9` | 9 | Smallest caption / column header |
| `--cc-text-10` | 10 | Caption, tagline, section sub-label |
| `--cc-text-11` | 11 | Small label |
| `--cc-text-12` | 12 | Body small, table row |
| `--cc-text-13` | 13 | Body |
| `--cc-text-14` | 14 | Body large, blurb |
| `--cc-text-16` | 16 | Subhead |
| `--cc-text-18` | 18 | Section header (display minimum) |
| `--cc-text-22` | 22 | KPI value |
| `--cc-text-28` | 28 | Tab title |
| `--cc-text-32` | 32 | Brand name minimum |
| `--cc-text-48` | 48 | Hero number (Net Worth total) |
| `--cc-text-64` | 64 | Splash only |

### Google Fonts import

```html
<link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
```

### Sheets font fallback

Google Sheets doesn't have Playfair Display or Jost as built-in fonts but supports custom fonts via the font picker. **Set both fonts via Apps Script** at initial sheet setup or first open, OR substitute:

- Playfair Display → **Lora** (closest Sheets-native serif) or **EB Garamond**
- Jost → **Roboto** (Sheets default) — Jost is geometric, Roboto is humanist, but it's the closest with native support

Document the substitution in `_Schema` so the buyer knows what fonts they got.

---

## Spacing

8-point scale with a 4-pixel half-step at the bottom:

```
4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96
```

**Density is medium.** This brand isn't airy/luxe; it's a tool. Section labels sit close to their content (8–12px). Sections are separated by 32–48px of vertical air, **not** 96+.

---

## Corners

**Small radii.** Column & Co. is structural, not soft.

- Cards and buttons: `2–4px`
- Sheet cells: `0` (Sheets has no cell-level radius anyway)
- Pills: reserved for status chips and the budget profile picker only
- **No colored-left-border-only cards** — that's an AI-slop pattern. Never use it.

---

## Borders

- Hairlines: `1px solid rgba(28,61,46,0.12)` (1px Forest at 12% opacity)
- Accent rules under section dividers: `1px solid #C5A95A`
- Strong container borders: `2px solid #1C3D2E`
- Brand chrome's signature gold rule: `3px solid #C5A95A` (the third row of every tab)

---

## Shadows

Restrained. Shadows are NOT the main elevation system — color blocks and borders are.

```css
--cc-shadow-card:   0 1px 2px rgba(28, 61, 46, 0.08);     /* barely-there */
--cc-shadow-raised: 0 4px 12px rgba(28, 61, 46, 0.12);    /* modals, dropdowns */
```

- **Never** drop-shadow the logo (explicit brand rule).
- Focus rings use a 3px Harvest-Gold halo at 35% opacity:
  ```css
  outline: 3px solid rgba(197, 169, 90, 0.35);
  outline-offset: 1px;
  ```

---

## Backgrounds

- **Page background:** Parchment (`#FAF8F2`)
- **Section backgrounds:** Cream (`#F0EBD8`) — used to chunk content vertically
- **Hero/footer bars:** full-bleed Forest
- **No gradients.** (One exception: the Etsy shop banner has an optional subtle radial Harvest-Gold glow top-right. Not applicable inside the sheet.)
- **No background images** behind text.
- **No repeating patterns or textures.** The grid logo *is* the brand's repeating pattern — used as a 10%-opacity watermark or hero motif.

---

## Hover & press states

- **Buttons / interactive surfaces:** darken by ~8% on hover. (Forest → near-black-green; Parchment → light cream.) **Never opacity-only** — opacity hovers feel cheap.
- **Links:** underline on hover with 1px Harvest-Gold, underline-offset `2px`.
- **Press:** `translateY(1px)` and no extra shadow change. Sharp brands stay snappy, not bouncy.

---

## Animation

- **Functional only.** No bounces, no spring physics, no flourishes.
- Durations:
  - `120ms` for micro-feedback (button press)
  - `180ms` for state changes (open/close, tab switch)
  - `320ms` max for content reveals
- Easing: `cubic-bezier(0.4, 0.0, 0.2, 1)` by default; `ease-out` for entrances.
- Fades and slides are okay. Scaling, rotating, and bouncing are not.
- Inside Google Sheets, animation is mostly limited to scroll behavior and chart transitions — that's fine, the constraint matches the brand.

---

## Transparency & blur

- Body text sits at **75% Forest opacity**, not solid black, not gray. Captions at 50%. This is the brand's signature softness — text is muted while remaining warm.
- **No glass / blur effects.** This brand doesn't use frosted backgrounds. Surfaces are flat.

---

## Iconography

Three sources, in priority order:

1. **The grid mark itself** — the 3×5 highlighted-cell logo doubles as a section ornament and watermark. At 10% opacity, bottom-right corner, it's the standard product-screenshot watermark.
2. **Unicode & box-drawing** — leans into typographic glyphs over icons. `·` separator, `← →` pointers, `─` scales, `✓ ⚠` status, `⚡` for the Health Score "Biggest Opportunity" callout.
3. **Lucide** (CDN) at **1.5px stroke**, 16–20px, colored Forest or Canopy when a real icon is needed. **This is a Claude substitution flagged for Dan's approval.** Don't use Heroicons (too plump) or Font Awesome (too detailed).

```html
<!-- Lucide via CDN, when needed in HTML layouts -->
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="trending-up" style="color:#1C3D2E;width:18px;height:18px;stroke-width:1.5"></i>
<script>lucide.createIcons();</script>
```

Inside Sheets, Lucide isn't easily renderable — use Unicode glyphs and the brand's `·` / `→` instead.

---

*Read next: `03_brand_chrome.md` for the 3-row letterhead pattern that appears on every tab.*
