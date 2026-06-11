# Tab · Start Here

The first tab a buyer sees on opening the workbook. Sells the product *back to the buyer* (so they remember why they bought it) and walks them through setup.

**Visual reference:** open `reference/index.html`, click **Start Here** in the bottom tab strip.

**Source file:** `reference/tabs-overview.jsx` → `StartHereTab()`

---

## Purpose

- Re-orient a returning buyer
- Walk a new buyer through the 5-step setup
- Sell the **LLM-ready** wedge with a copy-paste prompt block
- Surface the **24-palette picker** as a hero feature

---

## Layout (top to bottom)

1. **3-row brand chrome** — Forest header / Canopy sub-band / Gold rule. See `03_brand_chrome.md`.
2. **Hero greeting** — Playfair Display 38px Forest "Open it. Add your information. Get clear." with Jost 14.5px body description below.
3. **"Choose Your Theme" panel** — grid of 24 palette tiles, each showing a 3-stripe preview (primary / mid / accent) + palette name underneath. Clicking a tile invokes `applyTheme(paletteId)`.
4. **"Setup Guide" — 5 steps** — horizontal row of 5 numbered cards (Jost 12px description, Playfair italic title). Numbers are Forest circles with Parchment text.
5. **LLM-ready callout** — full-bleed Forest panel, 2-column. Left: heading + body. Right: a Cream-on-Forest code block with a starter prompt for Claude/ChatGPT.
6. **Footer** — Forest bar with brand line.

---

## Components

### Setup steps (exact copy)

| # | Title | Description |
|---|---|---|
| 1 | Install the Script | Extensions → Apps Script → paste `ColumnCo_Foundation_v2.gs`. A `💳 Column & Co.` menu appears. |
| 2 | Set Up Accounts | Add every bank account, credit card, and savings account. Enter current balances. |
| 3 | Import Transactions | Type the account name in C6. Paste your bank CSV. Run Import. Done. |
| 4 | Set Your Goals | Pick a Type, a Category or Account, a Target. Progress tracks automatically. |
| 5 | Explore Your Data | Dashboard, Trends, Health Score, and Net Worth update as you import. |

### LLM-ready callout copy

**Heading:** "Ask Claude or ChatGPT to read your sheet."

**Body:** "A hidden `_Schema` tab documents every column for an AI. Copy a prompt below, paste in your favorite assistant, attach your sheet. You get insights in seconds."

**Prompt** (in monospace, inside the code block):
> "Find every category where I'm trending over budget for three or more months in a row. Estimate the annual cost of that drift. List the top three subscriptions I should cancel."

---

## Spreadsheet implementation notes

- The 24-palette tile grid is **a real interactive element in Sheets**. Each tile is a merged cell (3–4 cells wide × 3 cells tall) with fills using the palette's primary/mid/accent. The script-assigned `onClick` handler reads the palette ID from a hidden lookup row beneath the tile and calls `applyTheme(id)`.
- The 5 setup steps can be a 5-column row of single-cell-wide content. Use merged cells for the number circle, title, and body. Set the title and number font to Playfair Display via Apps Script.
- The LLM callout is a merged Forest region. The code block inside is a sub-merged cell with `#FAF8F2` 6% opacity overlay (use `'#1F4734'` as the fill — Forest at +3% lightness, hand-picked).
- **No live formulas** on this tab — everything is static content. No named ranges needed.

---

## Conditional formatting

- Active palette tile gets a 2px Forest border. Apply via conditional formatting on a hidden status row (each tile has an "active" cell that gets `TRUE` when matching the active palette, conditional formatting paints the border).

---

## States

- **First open:** Sheet opens to this tab. Trigger via Apps Script `onOpen()` setting the active sheet to "Start Here" if a flag `cc_first_open` is not set in Document Properties (then set it).
- **Returning buyer:** No special behavior. They navigate here manually if they want.

---

## What's new in v2.1

- The palette tile grid is **promoted** from a buried Start Here dropdown to a hero feature on this tab AND a floating top-right swatch button visible from every tab.
- The LLM callout is **new** — operationalizes the "LLM-ready" wedge from the brand positioning.
- The 5-step Setup Guide replaces the old freeform text instructions.
