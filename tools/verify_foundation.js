/* Static-verification harness for ColumnCo_Foundation_v2.gs — the
   Foundation's FIRST harness, created alongside the Bank Import v2 build.
   Runs on the shared stub (tools/lib/gas_stub.js): 1,000×26 grid
   enforcement, value store, filter + merge-overlap semantics, DriveApp
   fixtures. Layers:
     a parse/build both modes · b formula balance · i merge-overlap ·
     d mode audit / blank-leak (BUYER-SPECIFIC strings only — merchant
       keywords legitimately ship in both modes via KEYWORD_RULES) ·
     c cross-reference audit (named ranges + engine/TX contracts + IMP2) ·
     j pixel text-fit ·
     r IMPORT V2 pure layers (recipes · signs · dedupe v2 incl. the
       two-cards-same-charge regression · near-dupes · coverage/gaps ·
       reconciliation math) ·
     f IMPORT V2 functional (fixture inbox → scan → append → idempotent
       rescan · legacy paste regression) ·
     g rebuild resilience over a stale workbook.                        */
'use strict';
const fs = require('fs');
const src = fs.readFileSync('apps_script/ColumnCo_Foundation_v2.gs', 'utf8');
const makeStubEnv = require('./lib/gas_stub.js');

const captures = { mock: [], blank: [], func: [] };
let CURRENT_MODE = 'mock';
const env = makeStubEnv({
  onRecord: rec => { if (CURRENT_MODE !== 'func') captures[CURRENT_MODE].push(rec); },
  getMode: () => CURRENT_MODE,
  recordStyles: true
});
const { SpreadsheetApp, PropertiesService, Utilities, Logger, HtmlService, DriveApp } = env;
let ss;

// ───────────────────────── run both builds ─────────────────────────
const EXPORTS = [
  'buildWorkbook', 'TABS', 'TAB_ORDER', 'MOCK', 'KEYWORD_RULES',
  'generateMockLedger_', 'parseCsvLine_', 'sniffColumns_', 'parseAmount_',
  'cleanNum_', 'parseDate_', 'categorize_', 'suggestKeyword_',
  'importTransactions', 'findFirstEmptyTxRow_', 'sortTxByDateDesc_',
  // Bank Import v2
  'IMP2', 'STAGE', 'IMPORT_RECIPES', 'IMPORT_ACCOUNT_CELL', 'IMPORT_PASTE_FIRST_ROW',
  'headerSig_', 'detectRecipe_', 'normalizeCsv_', 'txKey_', 'nearDupe_',
  'computeCoverageRow_', 'guessAccount_', 'scanBankInbox', 'appendStagedImports',
  'resolveReviewedRows', 'refreshCoverage', 'createSampleInbox', 'ensureInboxFolder_'
];
const factory = new Function('SpreadsheetApp', 'PropertiesService', 'Utilities', 'Logger', 'HtmlService', 'DriveApp',
  src + '\n;return {' + EXPORTS.map(n => n + ': (typeof ' + n + '!=="undefined")?' + n + ':undefined').join(',') + '};');
const api = factory(SpreadsheetApp, PropertiesService, Utilities, Logger, HtmlService, DriveApp);

const namedByMode = {};
const geoByMode = {};
for (const mode of ['mock', 'blank']) {
  CURRENT_MODE = mode;
  ss = env.newSS();
  api.buildWorkbook(mode);
  namedByMode[mode] = { ...ss.named };
  geoByMode[mode] = {};
  Object.keys(ss.sheets).forEach(n => {
    const sh = ss.sheets[n];
    geoByMode[mode][n] = { merges: sh.merges.slice(), colW: { ...sh.colWidthMap }, styles: sh.styles };
  });
}
console.log('a. both build modes executed under grid enforcement: OK');
console.log('   captured writes — mock: ' + captures.mock.length + ', blank: ' + captures.blank.length);

let FAILS = 0;
const section = (label, fails, total) => {
  console.log(label + ': ' + (fails === 0 ? 'OK' + (total != null ? ' (' + total + ' checks)' : '') : 'FAIL (' + fails + (total != null ? ' of ' + total : '') + ')'));
  FAILS += fails;
};

// ───────────── i. merge-overlap audit ─────────────
let iFail = 0;
const seenViol = {};
for (const v of env.mergeViolations.filter(v => v.mode !== 'func')) {
  const k = v.sheet + '!' + v.a1 + (v.op || '');
  if (seenViol[k]) continue; seenViol[k] = true; iFail++;
  console.log('  OVERLAP [' + v.mode + '] ' + (v.op || 'merge') + ' ' + v.sheet + '!' + v.a1 + ' over merge at ' + v.over);
}
section('i. merge-overlap audit', iFail);

// ───────────── b. formula balance ─────────────
function balanced(f) {
  let depth = 0, inQ = false;
  for (let i = 0; i < f.length; i++) {
    const ch = f[i];
    if (ch === '"') inQ = !inQ;
    else if (!inQ) {
      if (ch === '(') depth++;
      if (ch === ')') { depth--; if (depth < 0) return false; }
    }
  }
  return depth === 0 && !inQ;
}
let bBad = 0, formulaCount = 0;
for (const mode of ['mock', 'blank']) {
  for (const rec of captures[mode]) {
    if (rec.kind === 'formula' || rec.kind === 'formulaR1C1') {
      formulaCount++;
      if (!balanced(String(rec.val))) { bBad++; console.log('  UNBALANCED [' + mode + '] ' + rec.sheet + '!' + rec.a1 + ' :: ' + rec.val); }
      if (rec.kind === 'formula' && String(rec.val).charAt(0) !== '=') { bBad++; console.log('  NOT-A-FORMULA [' + mode + '] ' + rec.sheet + '!' + rec.a1 + ' :: ' + rec.val); }
    }
  }
}
section('b. formula balance (' + formulaCount + ' formula writes)', bBad);

// ───────────── d. mode audit / blank-leak ─────────────
let d1 = 0;
for (const mode of ['mock', 'blank']) {
  for (const rec of captures[mode]) {
    if (rec.kind === 'value' && typeof rec.val === 'string' && rec.val.charAt(0) === '=') {
      d1++; console.log('  VALUE-STARTS-WITH-= [' + mode + '] ' + rec.sheet + '!' + rec.a1 + ' :: ' + String(rec.val).slice(0, 60));
    }
  }
}
section('d1. no value writes begin with "="', d1);

// Buyer-specific strings only. Merchant keywords (WHOLE FOODS, NETFLIX…)
// seed Categories keyword rules in BOTH modes by design — not leaks.
const forbidden = ['Marcus & Elena Brooks', 'Chase Joint Checking', 'Amex Gold Card',
  'Chase Sapphire Card', 'Elena Checking', 'Marcus Checking', 'Ally Savings',
  'Ally Sinking Fund', 'Marcus Auto Loan', 'DIRECT DEPOSIT - ACME CO', 'Demo buyer'];
let d2 = 0;
for (const rec of captures.blank) {
  if (typeof rec.val !== 'string') continue;
  for (const f of forbidden) {
    if (rec.val.indexOf(f) !== -1) { d2++; console.log('  MOCK-LEAK [blank] ' + rec.sheet + '!' + rec.a1 + ' :: ' + String(rec.val).slice(0, 70)); }
  }
}
section('d2. blank build mock-leak scan (buyer-specific strings)', d2);

// ───────────── c. cross-reference audit ─────────────
const writes = {}, formulas = {};
for (const rec of captures.mock) {
  if (rec.kind === 'value') writes[rec.sheet + '!' + rec.a1] = rec.val;
  else if (rec.kind === 'formula') formulas[rec.sheet + '!' + rec.a1] = rec.val;
}
const has = (m, k, sub) => String(m[k] || '').indexOf(sub) !== -1;
const named = namedByMode.mock;
const expectNamed = {
  cc_active_palette: '_Config!B40',
  cc_categories: 'Categories!A11:A35',
  cc_tx_categories: 'Categories!A11:A37',
  cc_keyword_rules: 'Categories!E11:G200',
  cc_accounts_list: 'Accounts!A10:A21',
  cc_engine_months: '_Engine!B1:Y1',
  cc_dashboard_month: 'Dashboard!N4'
};
const audits = [];
for (const [k, v] of Object.entries(expectNamed)) audits.push(['named range ' + k + ' = ' + v, named[k] === v, named[k]]);
audits.push(['blank defines the same named ranges', JSON.stringify(namedByMode.blank) === JSON.stringify(namedByMode.mock), '']);
// TX log contract (the engine reads C/D/G whole-column — layout is load-bearing)
audits.push(['TX header row 9: Date..Month in A..G', writes['Transactions!A9'] === 'Date' && writes['Transactions!C9'] === 'Amount' && writes['Transactions!D9'] === 'Category' && writes['Transactions!E9'] === 'Account' && writes['Transactions!G9'] === 'Month', writes['Transactions!A9']]);
audits.push(['Accounts starting balance lives in D (reconcile anchor)', writes['Accounts!D9'] === 'Starting Balance', writes['Accounts!D9']]);
let cFail = 0;
for (const [name2, ok, got] of audits) { if (!ok) { cFail++; console.log('  FAIL got: ' + got + '  ' + name2); } }
section('c. cross-reference audit', cFail, audits.length);

// ───────────── j. pixel text-fit ─────────────
const VIEW_TABS = new Set(['Start Here', 'Dashboard', 'Trends', 'Monthly Budget', 'Health Score', 'Goals', 'Bank Import Guide', 'Net Worth']);
const PX_PER_CHAR_PT = 0.5;
// Reviewed overflow-safe cells: the label's right neighbor is EMPTY, so real
// Sheets overflows the text instead of clipping (the heuristic can't see
// neighbors). Add here only after checking the neighbor really is empty.
const J_ALLOW = new Set(['Monthly Budget!A13', 'Monthly Budget!A14']);
let jFail = 0;
const jSeen = {};
for (const mode of ['mock', 'blank']) {
  for (const rec of captures[mode]) {
    if (rec.kind !== 'value' || typeof rec.val !== 'string') continue;
    if (rec.val.length < 4 || rec.val.charAt(0) === '=') continue;
    if (!VIEW_TABS.has(rec.sheet) || rec.a1.indexOf(':') !== -1) continue;
    const g = geoByMode[mode] && geoByMode[mode][rec.sheet];
    if (!g) continue;
    const m = rec.a1.match(/^([A-Z]+)(\d+)$/);
    if (!m) continue;
    const c = env.COL(m[1]), r = Number(m[2]);
    let nc = 1, anchor = true;
    for (const M of g.merges) {
      if (r >= M.r && r < M.r + M.nr && c >= M.c && c < M.c + M.nc) {
        if (M.r === r && M.c === c) nc = M.nc; else anchor = false;
        break;
      }
    }
    if (!anchor) continue;
    const st = g.styles[r + ',' + c] || {};
    if (st.wrap) continue;
    let width = 0;
    for (let i = 0; i < nc; i++) width += (g.colW[c + i] != null ? g.colW[c + i] : 100);
    const est = rec.val.length * (st.size || 10) * PX_PER_CHAR_PT;
    if (est > width) {
      const key = rec.sheet + '!' + rec.a1;
      if (jSeen[key] || J_ALLOW.has(key)) continue;
      jSeen[key] = true;
      jFail++;
      console.log('  CLIP-RISK [' + mode + '] ' + key + ' "' + rec.val.slice(0, 32) + '" needs ~' + Math.round(est) + 'px, has ' + width + 'px');
    }
  }
}
section('j. text-fit (pixel) audit', jFail);

// ───────────── r. Import v2 — pure layers ─────────────
let rFail = 0, rChecks = 0;
const rA = (name, ok, got) => { rChecks++; if (!ok) { rFail++; console.log('  FAIL got ' + JSON.stringify(got) + '  ' + name); } };

// recipe detection: every shipped signature detects its own recipe;
// foreign headers fall through to null (generic sniffing)
CURRENT_MODE = 'func';
ss = env.newSS();
api.buildWorkbook('mock');          // live sheets for detectRecipe_'s teach-me lookup
const impSheet = ss.sheets[api.TABS.IMPORT];
for (const rec of api.IMPORT_RECIPES) {
  if (!rec.h) continue;
  const headers = rec.h.split('|');
  const found = api.detectRecipe_(headers, 'whatever.csv', impSheet);
  rA('recipe ' + rec.id + ' detected by signature', found && found.id === rec.id, found && found.id);
}
rA('foreign headers → no recipe (generic sniffing)', api.detectRecipe_(['Fancy A', 'Fancy B', 'Fancy C'], 'mystery.csv', impSheet) === null, '');
// teach-me row wins for its signature
impSheet.getRange(api.IMP2.RECIPE_FIRST, 1, 1, 8).setValues([['MyBank', 'fancy a', 'Fancy A', 'Fancy B', 'Fancy C', '', '', 'Yes']]);
const taught = api.detectRecipe_(['Fancy A', 'Fancy B', 'Fancy C'], 'mystery.csv', impSheet);
rA('teach-me recipe detected + flip honored', taught && taught.id === 'buyer:MyBank' && taught.flip === true, taught && taught.id);

// normalization: amex card flips signs; capone debit/credit pair works
const amex = api.IMPORT_RECIPES.find(r => r.id === 'amex-card');
const nAmex = api.normalizeCsv_([['Date', 'Description', 'Amount'], ['06/07/2026', 'STARBUCKS', '6.45'], ['06/08/2026', 'REFUND', '-12.00']], amex);
rA('amex charge 6.45 → −6.45 (flip)', nAmex.rows[0].amount === -6.45, nAmex.rows[0].amount);
rA('amex refund −12 → +12 (flip)', nAmex.rows[1].amount === 12, nAmex.rows[1].amount);
const capone = api.IMPORT_RECIPES.find(r => r.id === 'capone-card');
const nCap = api.normalizeCsv_([
  ['Transaction Date', 'Posted Date', 'Card No.', 'Description', 'Category', 'Debit', 'Credit'],
  ['2026-06-01', '2026-06-02', '1234', 'AMZN', 'Shopping', '42.13', ''],
  ['2026-06-03', '2026-06-04', '1234', 'PAYMENT', 'Payment', '', '100.00']], capone);
rA('capone debit → negative', nCap.rows[0].amount === -42.13, nCap.rows[0].amount);
rA('capone credit → positive', nCap.rows[1].amount === 100, nCap.rows[1].amount);
const nGen = api.normalizeCsv_([['Date', 'Description', 'Amount'], ['06/07/2026', 'X', '-5.00']], null);
rA('generic sniffing path normalizes', nGen.rows && nGen.rows.length === 1 && nGen.rows[0].amount === -5, nGen.rows && nGen.rows.length);
rA('undetectable columns → rows null', api.normalizeCsv_([['Foo', 'Bar'], ['1', '2']], null).rows === null, '');

// dedupe v2 — THE two-cards-same-charge regression
const d1r = new Date(2026, 5, 9);
rA('REGRESSION: same charge on two accounts = two DIFFERENT keys',
  api.txKey_('Amex Gold Card', d1r, 'NETFLIX.COM', -15.49) !== api.txKey_('Chase Sapphire Card', d1r, 'NETFLIX.COM', -15.49), '');
rA('same account same charge = same key (desc normalized)',
  api.txKey_('Amex Gold Card', d1r, ' netflix.com ', -15.49) === api.txKey_('Amex Gold Card', d1r, 'NETFLIX.COM', -15.49), '');

// near-dupes: ±2-day boundary, similarity, amount/account guards
const base = { account: 'A', date: new Date(2026, 5, 10), desc: 'NETFLIX.COM', amount: -15.49 };
const mk = (d, desc, amt, acct) => ({ account: acct || 'A', date: new Date(2026, 5, d), desc: desc, amount: amt != null ? amt : -15.49 });
rA('near-dupe: +2 days similar desc → true', api.nearDupe_(base, mk(12, 'NETFLIX COM')), '');
rA('near-dupe: +3 days → false', !api.nearDupe_(base, mk(13, 'NETFLIX COM')), '');
rA('near-dupe: different amount → false', !api.nearDupe_(base, mk(10, 'NETFLIX.COM', -15.5)), '');
rA('near-dupe: different account → false', !api.nearDupe_(base, mk(10, 'NETFLIX.COM', null, 'B')), '');
rA('near-dupe: dissimilar desc → false', !api.nearDupe_(base, mk(10, 'WHOLE FOODS MARKET')), '');

// coverage math: fill / gap-in-span / gold-when-reconciled / empty outside
const counts12 = [0, 0, 3, 4, 0, 6, 2, 1, 5, 2, 0, 4];   // span m2..m11, gaps at m4 & m10
const recon6 = [false, false, true, false, false, false]; // month index 8 reconciled
const cov = api.computeCoverageRow_(counts12, recon6);
rA('coverage: pre-span months empty', cov[0] === '#F3EFE4' && cov[1] === '#F3EFE4', cov[0]);
rA('coverage: imported month filled', cov[2] === '#D8D0BE', cov[2]);
rA('coverage: gap INSIDE span garnet', cov[4] === '#B96A6B' && cov[10] === '#B96A6B', cov[4]);
rA('coverage: reconciled month gold', cov[8] === '#C5A95A', cov[8]);
rA('coverage: all-empty account stays empty (no false gaps)', api.computeCoverageRow_(new Array(12).fill(0), new Array(6).fill(false)).every(c => c === '#F3EFE4'), '');

// reconciliation formulas: anchor + cumulative vs typed cell (audited as strings)
const stageGeo = geoByMode.mock['_ImportStage'];
rA('_ImportStage helper exists in build', !!stageGeo, '');
const stageFormulas = {};
for (const rec of captures.mock) if (rec.kind === 'formula' && rec.sheet === '_ImportStage') stageFormulas[rec.a1] = rec.val;
const anyRecon = Object.values(stageFormulas).some(f => String(f).indexOf("'Accounts'!$D$10") !== -1 && String(f).indexOf('SUMPRODUCT') !== -1 && String(f).indexOf('<=0.01') !== -1);
rA('reconcile helper: Accounts!D anchor + cumulative TX sum + $0.01 tolerance', anyRecon, '');
const anyCov = Object.values(stageFormulas).some(f => String(f).indexOf('COUNTIFS') !== -1 && String(f).indexOf("'Transactions'!$E:$E") !== -1 && String(f).indexOf("'Transactions'!$G:$G") !== -1);
rA('coverage helper: COUNTIFS over TX account+month columns', anyCov, '');
section('r. import v2 pure layers', rFail, rChecks);

// ───────────── f. Import v2 — functional (fixture inbox, full flow) ─────────────
let fFail = 0, fChecks = 0;
const fA = (name, ok, got) => { fChecks++; if (!ok) { fFail++; console.log('  FAIL got ' + JSON.stringify(got) + '  ' + name); } };
// fresh func build
ss = env.newSS();
api.buildWorkbook('mock');
const imp2 = ss.sheets[api.TABS.IMPORT], tx2 = ss.sheets[api.TABS.TX], stage2 = ss.sheets[api.TABS.STAGE];
const txRowsBefore = tx2.getLastRow() - 9;

api.createSampleInbox();
const inbox = api.ensureInboxFolder_();
fA('sample inbox holds 3 fixture files', (() => { let n = 0, it = inbox.getFiles(); while (it.hasNext()) { it.next(); n++; } return n; })() === 3, '');

api.scanBankInbox();
const meta1 = imp2.getRange(api.IMP2.FILES_FIRST, 1, 3, 9).getValues();
fA('scan lists 3 files with parsed row counts', meta1.every(r => r[0] && Number(r[3]) > 0), meta1.map(r => r[3]));
fA('amex fixture detected as amex-card (sign flip)', meta1.some(r => String(r[1]) === 'amex-card'), meta1.map(r => r[1]));

// assign accounts on the FILES table (checking → Chase Joint, card → Amex Gold)
for (let i = 0; i < 3; i++) {
  const nm = String(meta1[i][0]).toLowerCase();
  imp2.getRange(api.IMP2.FILES_FIRST + i, 3).setValue(nm.indexOf('amex') !== -1 ? 'Amex Gold Card' : 'Chase Joint Checking');
}
api.appendStagedImports();
const appended1 = tx2.getLastRow() - 9 - txRowsBefore;
// fixtures: 10 checking rows (2 exact dups inside) + 3 card rows = 11 unique,
// minus 1 near-dupe (NETFLIX COM ±1d) held for review = 10 appended
fA('append lands 10 unique rows (2 exact dups skipped, 1 held for review)', appended1 === 10, appended1);
const reviewVals = imp2.getRange(api.IMP2.REVIEW_FIRST, 2, 3, 4).getValues();
fA('near-dupe (NETFLIX COM) sits in the REVIEW block', String(reviewVals[0][1]).indexOf('NETFLIX') !== -1, reviewVals[0][1]);
fA('files archived to Imported ✓ (inbox empty)', (() => { let n = 0, it = inbox.getFiles(); while (it.hasNext()) { it.next(); n++; } return n; })() === 0, '');

// card signs landed flipped (charges negative)
const txAll = tx2.getRange(10, 1, tx2.getLastRow() - 9, 5).getValues();
// the mock ledger already carries Amex rows — assert on the three FIXTURE descs
const fixtureDescs = ['STARBUCKS STORE 112', 'AMAZON MKTPL', 'SPOTIFY'];
const amexRows = txAll.filter(r => fixtureDescs.indexOf(String(r[1])) !== -1);
fA('amex charges landed NEGATIVE (flip applied end-to-end)', amexRows.length === 3 && amexRows.every(r => Number(r[2]) < 0), amexRows.map(r => r[2]));
// categorization ran (NETFLIX → keyword rules)
fA('keyword categorization applied on append', txAll.some(r => String(r[1]).indexOf('NETFLIX') !== -1 && r[3] && r[3] !== 'Misc'), '');

// resolve: keep the near-dupe
imp2.getRange(api.IMP2.REVIEW_FIRST, 1).setValue(true);
api.resolveReviewedRows();
const appended2 = tx2.getLastRow() - 9 - txRowsBefore;
fA('resolve(keep) appends the reviewed row', appended2 === 11, appended2);

// idempotent rescan: same fixtures again → everything dup, nothing appended
api.createSampleInbox();
api.scanBankInbox();
for (let i = 0; i < 3; i++) {
  const nm2 = String(imp2.getRange(api.IMP2.FILES_FIRST + i, 1).getValue()).toLowerCase();
  imp2.getRange(api.IMP2.FILES_FIRST + i, 3).setValue(nm2.indexOf('amex') !== -1 ? 'Amex Gold Card' : 'Chase Joint Checking');
}
api.appendStagedImports();
const appended3 = tx2.getLastRow() - 9 - txRowsBefore;
fA('IDEMPOTENT: re-import of the same files appends zero', appended3 === 11, appended3 - 11);

// legacy paste path: account-scoped dedupe regression end-to-end
const nfDate = txAll.find(r => String(r[1]) === 'NETFLIX.COM' && r[4] === 'Chase Joint Checking');
imp2.getRange(api.IMPORT_ACCOUNT_CELL).setValue('Chase Sapphire Card');
imp2.getRange(api.IMPORT_PASTE_FIRST_ROW, 1, 2, 3).setValues([
  ['Date', 'Description', 'Amount'],
  ['06/09/2026', 'NETFLIX.COM', '-15.49']]);
api.importTransactions();
const txFinal = tx2.getRange(10, 1, tx2.getLastRow() - 9, 5).getValues().filter(r => r[0] !== '');
const nfCount = txFinal.filter(r => String(r[1]).indexOf('NETFLIX') === 0 && Math.abs(Number(r[2]) + 15.49) < 0.001).length;
fA('LEGACY PATH REGRESSION: same charge on a second card is KEPT', nfCount >= 2, nfCount);
// and a true duplicate on the SAME account is skipped
const before2 = tx2.getLastRow();
api.importTransactions();   // identical paste, same account
fA('legacy path: identical re-paste appends zero', tx2.getLastRow() === before2, tx2.getLastRow() - before2);

// refreshCoverage runs without throwing (formula values are blank in the stub)
let covOk = true;
try { api.refreshCoverage(); } catch (e) { covOk = false; }
fA('refreshCoverage paints without throwing', covOk, '');
section('f. import v2 functional (inbox flow end-to-end)', fFail, fChecks);

// ───────────── g. rebuild resilience over a stale workbook ─────────────
const gChecks = [];
CURRENT_MODE = 'func';
ss = env.newSS();
api.buildWorkbook('mock');
const staleTx = ss.sheets['Transactions'];
staleTx.filter = { range: { row: 9, col: 1, numRows: 5001, numCols: 7 }, remove() { staleTx.filter = null; } };
try { api.buildWorkbook('mock'); gChecks.push(['rebuild over a stale Transactions filter succeeds', true, '']); }
catch (e) { gChecks.push(['rebuild over a stale Transactions filter succeeds', false, e.message]); }
try { api.buildWorkbook('blank'); gChecks.push(['blank-over-mock rebuild succeeds', true, '']); }
catch (e) { gChecks.push(['blank-over-mock rebuild succeeds', false, e.message]); }
let gFail = 0;
for (const [n4, ok, got] of gChecks) { if (!ok) { gFail++; console.log('  FAIL got ' + got + '  ' + n4); } }
section('g. rebuild resilience', gFail, gChecks.length);

console.log('\nTOTAL: ' + (FAILS === 0 ? 'ALL GREEN' : FAILS + ' FAILURES'));
process.exit(FAILS ? 1 : 0);
