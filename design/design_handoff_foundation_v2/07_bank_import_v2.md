# 07 · Bank Import v2 — the de-friction core (SPEC · NOT YET BUILT)

> **Status: SPEC APPROVED for drafting by Dan 2026-06-14 ("direction B" of
> the bank-upload-friction memo). Nothing here is built.** Building is a
> separate go/no-go from Dan. Foundation builds first; Payoff/Ledger
> inherit via the adapter contract (§8). Workbench is out of scope.

## Why (the friction, decomposed)

Live experience (Dan, June 2026): loading 6 months × multiple accounts
through the paste-one-CSV-at-a-time flow is the series' worst UX tax, and
buyers will feel it worse. Three distinct frictions:

1. **Acquisition** — many exports, banks with PDF-only or 90-day-capped
   CSV history; AI PDF→CSV conversion silently hallucinates/flips signs.
2. **Completeness anxiety** — no way to SEE what got in; trust is a
   feeling, not arithmetic.
3. **Duplication anxiety** — overlapping export windows + re-imports.
   Plus a REAL LATENT BUG this spec fixes: Foundation and Ledger dedupe on
   `date|desc|amount` **without the account**
   (`dedupKey` at ColumnCo_Foundation_v2.gs ~2498 and
   ColumnCo_Ledger_v1.gs ~2548), so the same charge on two different
   cards — e.g. one Netflix subscription billed to two cards — collides
   and one row is **silently dropped**. The Payoff is unaffected
   (`keyOf_` includes the debt).

Constraints honored throughout: one-time price (no Dan-run server, no
subscription), the privacy wedge (nothing leaves the buyer's Google
account), buyers are AI-comfortable non-coders. Everything below runs in
the buyer's own Apps Script authorization (DriveApp + the existing stack).

## 1 · The Inbox flow (replaces paste-one-at-a-time)

- Menu: **💳 → Scan Bank Inbox**. First run creates a Drive folder
  `Column & Co. — Bank Inbox` (+ subfolder `Imported ✓`); folder ID
  persisted in Document Properties (`cc_inbox_folder_id`). A "Where is my
  inbox?" menu item toasts the folder URL.
- The buyer drags **all** exports in — any bank, any order, overlapping
  date ranges welcome. CSV/TSV read directly. XLSX → per-file guidance
  ("open → File → Download → CSV"); PDF → per-file pointer to the PDF
  flow (out of scope here; see the friction memo, direction C).
- Scan pipeline per file: read → recipe detection (§2) → normalize to
  `{date, desc, amountSigned, account}` → stage → dedupe classify (§3).
  Nothing is appended during scan; scan is read-only and repeat-safe.
- **Preview table** (Bank Import tab, contract in §6): one row per file —
  filename · matched recipe/bank · account (dropdown; prefilled by
  filename last-4 heuristic; the filename-pattern→account choice is
  remembered in Document Properties) · parsed rows · date span ·
  NEW / DUPLICATE / REVIEW counts · status flag.
- **Append all** = a checkbox cell + onEdit (Sheets has no buttons),
  same pattern as the sibling action cells. On append: rows land in the
  product's log via the adapter (§8), each file moves to `Imported ✓`,
  the inbox empties itself, and the coverage map (§4) refreshes.
- The v1 paste zone stays as the fallback path (small banks, one-offs),
  relabeled "Paste a single export (fallback)".

## 2 · Recipe library (kills format + sign chaos)

Recipe object (section 00 constant `IMPORT_RECIPES`, ~20 built-ins):

| field | meaning |
|---|---|
| `id` | 'chase-card', 'boa-checking', … |
| `detect.headers` | sorted, lowercased header names joined with `\|` (exact signature) |
| `detect.filename` | fallback regex on the filename |
| `date`, `desc` | column indexes or header names |
| `amount` | single column OR `{debit, credit}` pair |
| `signFlip` | true for card exports that report charges as positives |
| `dateFormat` | hint when `new Date()` is ambiguous (e.g. `dd/MM/yyyy`) |
| `skipRows` | banks that prepend preamble rows |

- Ship recipes for: Chase, Bank of America, Wells Fargo, Citi,
  Capital One, Amex, Discover, USAA, Ally, Apple Card, SoFi, Chime,
  PNC, US Bank, Truist, Fidelity, Schwab, Venmo, PayPal, Cash App.
  (Header signatures to be captured from real exports at build time —
  a QA task, not guesswork.)
- Detection precedence: exact header signature → filename regex →
  generic sniffing (the existing `sniffColumns_`) → **"teach me"**: a
  one-time mapping row the buyer fills (source column letters + sign)
  that is saved as a buyer recipe in a small editable table on the Bank
  Import tab (Foundation keyword-rules pattern).
- **Sign contract**: internal convention stays "expenses negative,
  income positive". Card recipes flip. Per-file sanity check: if >90% of
  a card-account file's rows are positive → garnet "check sign?" flag in
  the preview with one-tap flip.
- **Stretch (build-time option)**: OFX/QFX support. The format is a
  trivial SGML-ish parse, far more stable than CSV, and its `FITID`
  field is a bank-issued unique transaction id — perfect dedupe keys at
  the root. High value per line of code; include if budget allows.

## 3 · Dedupe v2 (kills duplication anxiety; fixes the silent-drop bug)

- **Exact key** becomes `account|date|normalizedDesc|amount(2dp)`
  (adds the account — the bug fix). `normalizedDesc` = uppercase +
  collapsed whitespace (deliberately conservative in v2.0).
- Exact duplicates: auto-skipped, counted in the preview ("37 duplicates
  skipped"), never silently.
- **Near-duplicates** (same account + same amount + date within ±2 days
  + token-similar desc): NOT auto-resolved. They land in a REVIEW block
  (≤15 rows: both candidates side by side, keep/skip checkboxes, one
  Resolve action). Applied both across files within one scan (overlapping
  exports) and against the live log (re-imports).
- When OFX `FITID` is present it wins outright (exact id match = dupe).

## 4 · Coverage map (kills completeness anxiety — the hero surface)

- Per account: one strip row on the Bank Import tab; one narrow cell per
  calendar month over a rolling 12–24-month window (painted cells, the
  Payoff banded-strip technique; fixed colors, never themed):
  - filled (stone) = month has imported rows
  - **garnet = GAP** — zero rows in a month between that account's first
    and last imported months (the "Amex missing May 12–31" answer)
  - **gold ✓** = month reconciled (§5)
- Caption per account: `Jan 3 – Jun 28 · 214 rows`.
- Recomputed at every scan/append + a "Refresh coverage" menu item.

## 5 · Statement reconciliation (turns trust into arithmetic)

- Grid on the Bank Import tab: rows = accounts, columns = trailing 6
  statement months (extendable). ONE yellow input per account-month: the
  statement's **ending balance** — the number printed large on every
  statement (the Payoff's "statement is the truth" pattern applied to
  the Foundation).
- Computed per cell: prior anchor (previous ✓ month, else the Accounts
  tab starting balance) + Σ(imported signed amounts in the month) →
  expected ending. Match within $0.01 → ✓ (and the coverage cell goes
  gold); else ✗ with the delta shown ("−$42.18 — a missing or duplicate
  row").
- Credit-card accounts reconcile with the same signed math (payments
  positive, charges negative after normalization).

## 6 · Bank Import tab layout contract (v2)

Rebuilt by `buildBankImport_` (chrome rows 1–5, title 6–8 as always).
Fixed-row contract in the `IMP2` constant (exact rows set at build):

| block | contents |
|---|---|
| INBOX | folder status line · Scan checkbox · Append-all checkbox · last-scan summary |
| FILES (≤20 rows) | the per-file preview table (§1) |
| REVIEW (≤15 rows) | near-duplicate pairs + keep/skip + Resolve |
| COVERAGE | §4 strips, one row per account (Accounts-tab capacity) |
| RECONCILE | §5 grid, accounts × 6 months |
| RECIPES | buyer "teach me" recipe rows (editable) |
| PASTE (fallback) | the v1 50×8 paste zone, relocated below |

v1 blocks that this replaces/moves: paste zone at row 12
(`IMPORT_PASTE_ROW_COUNT` 50×8), Review-Income block (row 65),
Uncategorized block (row 89) — Review-Income and Uncategorized survive
unchanged below the new blocks; exact rows assigned at build and
mirrored into the harness cross-reference audit.

## 7 · Verification plan (for the eventual build)

- **Foundation gets a harness** (`tools/verify_foundation.js`, currently
  missing) on the shared stub `tools/lib/gas_stub.js`, with a DriveApp
  stub (folder + file fixtures) added to the stub library.
- Pure-function layers: recipe detection table (every shipped recipe's
  signature detects; foreign headers fall through), sign normalization
  (incl. the >90%-positive card check), dedupe v2 — **including the
  two-cards-same-charge regression test** — near-dupe classifier edges
  (±2 days boundary, token similarity), coverage/gap math (first/last
  month windows, single-month accounts), reconciliation math (anchor
  chaining, credit-card signs, $0.01 tolerance).
- Functional layer: scan → preview → append over fixture files with
  overlapping ranges; idempotent rescan (second scan appends zero).
- `tools/render_preview.js` renders the new Bank Import layout; iterate
  the tab against PNGs before Dan rebuilds (established practice).
- Mock mode gets a QA menu item **"Create sample inbox"** that writes 3
  fixture CSVs into the folder (overlapping ranges, one sign-flipped
  card file, one near-dupe pair) so live QA of the whole flow takes two
  clicks.

## 8 · Shared module + per-product adapters

One `section 13 v2` block, byte-identical across products, parameterized
by an adapter object:

```
IMPORT_ADAPTER = {
  logSheet, headerRow, firstRow,          // where rows land
  colMap: { date, desc, amount, ... },    // product log columns
  accountsList,                            // named range of accounts/debts
  categorize(desc) -> value | null,        // Foundation keyword rules; Payoff debt match
  filterRow(row) -> bool,                  // Payoff: keep only debt-matched payments
  postAppend()                             // renumber/sort hooks
}
```

- Foundation: Transactions log + keyword-rule categorization + Accounts
  list; income-review behavior unchanged.
- Payoff: Payments Log; amounts abs()'d; `filterRow` keeps only rows
  matching a debt (`cc_keyword_rules`); reconciliation anchors on the
  Debts statement balance instead of the Accounts grid.
- Ledger: its Transactions log; also inherits the dedupe bug fix.
- Rollout: Foundation first (the pain center), then backport in one
  session per product with the shared harness layers re-run.

## Explicitly out of scope for v2.0

PDF parsing (direction C of the memo), aggregator connections
(SimpleFIN — direction A), Gmail alert ingestion, XLSX reading,
promo/step APRs, anything requiring Dan-run infrastructure.
