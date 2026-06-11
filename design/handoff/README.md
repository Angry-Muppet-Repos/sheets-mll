# Foundation v2.1 — Monthly Budget Profile Expansion · Handoff Package

This folder is the bridge between the **HTML design mockup** at `ui_kits/foundation/index.html` (Monthly Budget tab) and the **shipping spreadsheet** (`ColumnCo_Foundation_v2.gs` + `the_foundation_v2_MOCK_DATA.xlsx`).

It contains everything an engineer needs to wire the 5 new budget profiles into both the Google Sheets (Apps Script) and Excel (.xlsx with XLOOKUP) variants of the product.

---

## What changed

The mockup grew the profile picker from **5 → 10 profiles** and replaced the chunky tile grid with a slim horizontal-scroll pill row.

| Profile | Status | What it unlocks |
|---|---|---|
| Dave Ramsey | existing | — |
| 50/30/20 | existing | — |
| FIRE | existing | — |
| Zero-Based | existing | — |
| **Anti-Budget** | **NEW** | Save 20% off the top, rest unassigned (Paula Pant method) |
| **Kakeibo** | **NEW** | Japanese 4-bucket mindful budgeting |
| **New Parent** | **NEW** | Activates the **Childcare** line that was $0 in every original profile |
| **Self-Employed** | **NEW** | Activates **Taxes** ($2,560 set-aside) + **Business** lines |
| **HCOL Renter** | **NEW** | 40% housing — for NYC/SF/Seattle/Boston/DC buyers |
| Custom | existing | — |

---

## Files in this folder

### `profiles.json`
Canonical data — 10 profiles × 20 categories × income baseline. Use this for:
- The **Excel .xlsx variant**: paste into a hidden `_Profiles` sheet, drive the Monthly Budget tab via `XLOOKUP(profile_id, _Profiles!A:A, _Profiles!B:U)` (one column per category).
- Any future port (Numbers, Notion, Airtable, web app).
- Source of truth — if you edit a target, edit it **here** and regenerate the .gs PROFILES constant.

### `applyProfile.gs`
Drop-in patch for `ColumnCo_Foundation_v2.gs`. Adds:
- `PROFILES` constant (same data as the JSON, but as a JS object for runtime use)
- `applyProfile(id)` — writes 20 target values into the Monthly Budget sheet's editable column in one batched `setValues` call
- `buildProfileMenu_()` — submenu wired into the existing 💳 Column & Co. menu
- `saveCustomProfile()` — lets buyers snapshot their Custom edits to Document Properties so they survive across sessions
- Per-profile zero-arg wrapper functions (Apps Script menus can't pass arguments)

Integration is 3 steps; see the file header for the exact instructions.

---

## Visual mockup → spreadsheet translation

The HTML mockup uses CSS that has no Google Sheets equivalent. Here's what survives, what reinterprets, what gets dropped:

| Mockup element | Sheet equivalent |
|---|---|
| Pill-chip horizontal scroller | **Menu submenu** (`💳 Column & Co. ▸ Apply Budget Profile ▸ …`) — auto-marked with `✓` for the active profile. Looks native, no Sheets layout gymnastics. |
| Hero (profile name + sub + blurb) | Static text in rows 1–4 of the Monthly Budget sheet, refreshed by `applyProfile()` writing into named ranges `profile_name`, `profile_sub`, `profile_blurb`. |
| 3 KPI cards (Income, Total Budgeted, Savings Rate) | Three merged-cell blocks at the top, formulas: `=SUM(targets)`, `=savings_target/income`, etc. Conditional formatting handles the red "over" / green "free" state. |
| 20-category target table | Existing layout — no change. `applyProfile()` writes column C, rows 10–29. |
| Yellow editable cells (Custom mode only) | `_toggleEditableHighlight_()` toggles `#FFFDE7` fill + `#C5A95A` border on column C whenever Custom is active. |
| Share bars (the thin horizontal fills) | `SPARKLINE(C10, {"charttype","bar"; "max", MAX($C$10:$C$29)})` per row, or `=REPT("▮", ROUND(C10/MAX($C$10:$C$29)*20,0))` as a text fallback. |
| Smooth animations, hover states, fade-mask scroll | **Dropped.** Spreadsheets don't animate. The HTML stays as the Etsy listing photography. |

---

## QA checklist (after wiring)

Run these in a fresh copy of the workbook:

1. Open the workbook → menu reads `💳 Column & Co.` with `Apply Budget Profile` submenu containing all 10 profiles
2. Click each of the 10 menu items in order. After each click confirm:
   - Active profile cell (`C5`) updates
   - Income (`C7`) shows $10,230
   - Column C rows 10–29 update with that profile's targets
   - The toast confirms which profile was applied
   - `✓` checkmark moves to the new active profile on next menu open
3. Click `Apply Budget Profile ▸ ✓ Custom`. Verify column C cells turn yellow with gold borders. All other profiles: cream fill, no border.
4. Edit a few cells while Custom is active. Click `Apply Budget Profile ▸ Save current values as Custom…`. Switch to FIRE, then back to Custom — your saved values should restore (not the seed values).
5. Confirm `applyProfile('new-parent')` writes $1,800 to the Childcare row (row 26).
6. Confirm `applyProfile('self-employed')` writes $2,560 to the Taxes row (row 28) and $600 to Business (row 27).
7. Confirm `applyProfile('hcol-renter')` writes $4,100 to Housing (row 10).
8. Sanity-check totals — sum of column C should be ≤ $10,230 for every profile (FIRE and Zero-Based hit exactly $10,230; others leave a small unallocated buffer, which is intentional).

---

## Excel .xlsx path (no Apps Script)

For the Excel variant of the product:

1. Add a hidden sheet named `_Profiles`. Column A = profile id, column B = name, columns C–V = the 20 target columns in `CATEGORIES` order (see `profiles.json`).
2. On Monthly Budget, use Data Validation in `C5` with the list `_Profiles!$A:$A`.
3. Column C target cells use `=XLOOKUP($C$5, _Profiles!$A:$A, _Profiles!C:C)` (and so on per category).
4. The yellow Custom-mode highlight becomes a Conditional Formatting rule: `=$C$5="custom"`.
5. No menu — buyers select profile from the dropdown.

This loses the "Save my Custom" feature (no persistence layer in Excel without VBA), but everything else works.

---

## Future expansion

If you ever want to add an 11th profile (a buyer-suggestion roadmap is likely), the workflow is:

1. Add the profile to `profiles.json` (preserve the 20-category order)
2. Mirror it into `applyProfile.gs` → `PROFILES` and `PROFILE_ORDER`
3. Add a wrapper function: `function _applyProfile_<id>() { applyProfile('<id>'); }`
4. Update the HTML mockup's `BUDGET_PROFILES` object at `ui_kits/foundation/tabs-actions.jsx` (line ~195)
5. Update the Etsy listing photography

The HTML mockup is the source of truth for **the buyer's first impression**; this folder is the source of truth for **the working product**.
