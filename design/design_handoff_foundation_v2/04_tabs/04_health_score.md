# Tab · Health Score

A composite 0–100 score across 5 weighted indicators. The "gamification without being patronizing" angle.

**Visual reference:** open `reference/index.html`, click **Health Score**.

**Source file:** `reference/tabs-analysis.jsx` → `HealthScoreTab()`

**Mock data:** `window.CC_DATA.health` in `reference/data.js`.

---

## Purpose

- One number, 0–100, that summarizes financial health
- 5 indicators with weights, benchmarks, and status
- "Biggest Opportunity" callout that quantifies the cost of the worst leak with a delta arrow (`72 → 78`)

---

## Layout (top to bottom)

1. **3-row brand chrome**
2. **Tab title** — "Health Score" + "A composite 0–100 across five weighted indicators. Where you stand, and what to fix first."
3. **Hero block** — Playfair Display 96px composite score (`72`), grade label below (`Good`), and the box-drawing scale:
   ```
   0 ─── Critical ─── 45 ─── Needs Work ─── 60 ─── Fair ─── 75 ─── Good ─── 90 ─── Excellent ─── 100
   ```
   Composite indicator pip (▼) sits above the scale at the score's x-position.
4. **5 indicator rows** — each row: Name · Value · Bench · Weight · 0–100 bar · Status chip
5. **Biggest Opportunity callout** (v2.1) — Forest panel, `⚡ BIGGEST OPPORTUNITY` label in Gold. Body explains the leak. **Delta arrow** beside the composite: `72 → 78`.
6. **Footer**

---

## 5 indicators (locked)

| Name | Weight | Benchmark | Current value | Score |
|---|---|---|---|---|
| Savings Rate | 25% | ≥ 20% of income saved | 31.8% | 88 |
| Expense-to-Income | 20% | ≤ 80% of income spent | 68.2% | 74 |
| Emergency Fund | 20% | ≥ 3 months of expenses | 3.3 mo | 80 |
| Budget Adherence | 20% | ≥ 80% categories on budget | 6 of 8 | 50 |
| Debt-to-Income | 15% | ≤ 36% debt payments | 14.5% | 92 |

Composite = `SUMPRODUCT(scores, weights) / 100`.

---

## Spreadsheet implementation

- The 0–100 scale visualization is built from box-drawing characters in a single merged cell, monospace font.
- Composite indicator pip is a Unicode `▼` positioned via a series of leading spaces calculated from the score (`=REPT(" ",ROUND(B5/100*40,0))&"▼"`).
- Indicator bars: `=SPARKLINE(score, {"charttype","bar"; "max",100; "color1","#1C3D2E"})`
- Status chips: same conditional formatting pattern as Dashboard (On / Fair / Over).
- Biggest Opportunity is a hard-coded Forest panel (8×4 merged cells) with the `⚡` glyph and the delta arrow.

---

## What's new in v2.1

- **Delta arrow** (`72 → 78`) quantifying the biggest leak — new.
- All else unchanged from v2.
