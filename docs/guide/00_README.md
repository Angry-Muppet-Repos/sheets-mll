# The Foundation v2.1 — Product Guide (source)

This folder is the canonical source for the buyer-facing product guide. It powers three surfaces:

1. **PDF** — bundled in the Etsy `.zip` download. Designed in Claude Design (Canva) from `claude_design_prompt.md`.
2. **In-sheet Help sidebar** — `sidebar/help.html`, served by `openHelpSidebar()` in `ColumnCo_Foundation_v2.gs`.
3. *(Future)* Hosted HTML on columnandco.com.

Edit the markdown here. The PDF and sidebar are downstream renders — keep them in sync from one source.

## Files

| File | Role |
|---|---|
| `01_quickstart.md` | 5-step setup. Smallest readable unit. Also drives the sidebar. |
| `02_menu_reference.md` | One entry per `💳 Column & Co.` menu item. |
| `03_tab_tour.md` | One section per visible tab. Rewritten from `04_tabs/*.md` in buyer voice. |
| `04_recipes.md` | Story-driven walkthroughs (CSV import, theme/profile swap, AI prompts, Custom budget, Goals). |
| `05_troubleshooting.md` | FAQ + common errors. |
| `claude_design_prompt.md` | Self-contained brief to paste into Claude Design to render the PDF. |
| `sidebar/help.html` | Sidebar markup for `openHelpSidebar()`. |
| `screenshots/` | Annotated cropped PNGs of the live sheet. |

## Voice rules (from `01_product_brief.md`)

- Second person. Short sentences. Em-dashes for asides.
- No exclamation points. No "easy" / "simple" / "streamline" / "synergy" / "leverage" / "empower."
- Middle dot `·` with spaces around it as the brand separator.
- Specifics over generalities — `"$35, one time"` not `"affordable"`.

## How to regenerate

1. Edit markdown here.
2. Run the voice pass: `grep -nE '(!|\beasy\b|\bsimple\b|\bstreamline\b|\bsynergy\b|\bleverage\b|\bempower\b)' docs/guide/*.md` — should return nothing inside body copy.
3. Update `claude_design_prompt.md` if structure changed.
4. Paste `claude_design_prompt.md` into Claude Design, export PDF.
5. Drop the PDF into the Etsy `.zip` next to `the_foundation_v2_BLANK.xlsx`.
6. For the sidebar: ensure `sidebar/help.html` reflects current Quickstart + Menu Reference summary, then deploy via the bound `.gs` workbook.
