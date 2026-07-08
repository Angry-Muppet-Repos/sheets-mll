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
  'importTransactions', 'findFirstEmptyTxRow_', 'sortTxByDateDesc_'
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

// Import-v2 layers (r, f) and rebuild resilience (g) are appended as the
// v2 build lands — this file must be green at every step.
console.log('\nTOTAL: ' + (FAILS === 0 ? 'ALL GREEN' : FAILS + ' FAILURES'));
process.exit(FAILS ? 1 : 0);
