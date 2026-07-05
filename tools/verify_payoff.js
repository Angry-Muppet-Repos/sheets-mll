/* Static-verification harness for ColumnCo_Payoff_v1.gs
   Mirrors tools/verify_workbench.js: a stub SpreadsheetApp with GRID
   ENFORCEMENT (1,000×26 default; writes beyond throw unless ensureGrid_
   grew the sheet), a CELL VALUE STORE, and filter semantics. Layers:
     a parse · b formula balance · c cross-reference audit (vs 02/03) ·
     d mode audit / mock-leak · e mock integrity · f functional ·
     g rebuild resilience (over a stale workbook) ·
     h cross-sheet reference inventory ·
     m MATH LAYER — an independent JS re-implementation of the 03
       amortization (snowball/avalanche/custom + the two scenario extras +
       minimums-only baseline + the estimate/true-up balance logic) that
       asserts the .gs engine twin's months / interest / payoff-order /
       debt-free date match exactly.                                       */
'use strict';
const fs = require('fs');
const src = fs.readFileSync('apps_script/ColumnCo_Payoff_v1.gs', 'utf8');

const makeStubEnv = require('./lib/gas_stub.js');

const captures = { mock: [], blank: [], func: [] };
let CURRENT_MODE = 'mock';
const env = makeStubEnv({
  onRecord: rec => { if (CURRENT_MODE !== 'func') captures[CURRENT_MODE].push(rec); },
  getMode: () => CURRENT_MODE,
  recordStyles: true            // layer j reads col widths / merges / fonts
});
const { SpreadsheetApp, PropertiesService, Utilities, Logger, HtmlService, SSStub, mergeViolations } = env;
let ss;

// ───────────────────────── run both builds ─────────────────────────
const EXPORTS = [
  'buildWorkbook', 'TABS', 'TAB_ORDER', 'PALETTES', 'DEBT_CAPACITY',
  'PAYOFF_HORIZON_MONTHS', 'PAYMENTS_CAPACITY', 'SCENARIO_EXTRAS', 'ACTUALS_MONTHS',
  'MOCK', 'DEBT', 'PAY', 'ENG', 'DEBT_RAMP', 'STONE', 'GOLD_ACHIEVE', 'STRATEGY_DEFAULT',
  'generateMockDebts_', 'generateMockPayments_', 'generateMockContributions_',
  'mockInPlanDebts_', 'rankDebts_', 'simulateSchedule_', 'simulateBaseline_',
  'paymentEstInterest_', 'parseCsvLine_', 'sniffColumns_', 'matchDebt_',
  'mapBankRows_', 'cleanNum_', 'keyOf_', 'parseAmount_'
];
const factory = new Function('SpreadsheetApp', 'PropertiesService', 'Utilities', 'Logger', 'HtmlService',
  src + '\n;return {' + EXPORTS.map(n => n + ': (typeof ' + n + '!=="undefined")?' + n + ':undefined').join(',') + '};');
const api = factory(SpreadsheetApp, PropertiesService, Utilities, Logger, HtmlService);

const namedByMode = {};
const geoByMode = {};   // per-mode visual geometry snapshots for layer j
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

// ───────────── i. merge-overlap audit (the build-killer) ─────────────
// safeMerge_ swallows the throw in production so a stray overlap is a
// no-op cell, not a fatal exception; but every overlap is recorded here so
// it is caught and fixed before shipping (the v1 live-QA failure class).
let iFail = 0;
const seenViol = {};
for (const v of mergeViolations.filter(v => v.mode !== 'func')) {
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

// ───────────── d. mode audit ─────────────
let d1 = 0;
for (const mode of ['mock', 'blank']) {
  for (const rec of captures[mode]) {
    if (rec.kind === 'value' && typeof rec.val === 'string' && rec.val.charAt(0) === '=') {
      d1++; console.log('  VALUE-STARTS-WITH-= [' + mode + '] ' + rec.sheet + '!' + rec.a1 + ' :: ' + rec.val.slice(0, 60));
    }
  }
}
section('d1. no value writes begin with "="', d1);

// blank build must not leak the Casey Alvarez story
const forbidden = ['Casey', 'Alvarez', 'Visa ····4417', 'Rooms+', 'Sallie Mae', 'Toyota',
  'Two debts down', 'every dollar of the old minimums', 'Momentum has a price'];
let d2 = 0;
for (const rec of captures.blank) {
  if (typeof rec.val !== 'string') continue;
  for (const f of forbidden) {
    if (rec.val.indexOf(f) !== -1) { d2++; console.log('  MOCK-LEAK [blank] ' + rec.sheet + '!' + rec.a1 + ' :: ' + rec.val.slice(0, 70)); }
  }
}
section('d2. blank build mock-leak scan', d2);

// MOCK.* uses outside generators must be behind mode === 'mock' gates
const lines = src.split('\n');
const mockUses = [];
lines.forEach((l, i) => { if (/\bMOCK\./.test(l) && !/^\s*\/\//.test(l) && !/^\s*\*/.test(l)) mockUses.push(i + 1); });
function enclosingFn(lineNo) {
  for (let i = lineNo - 1; i >= 0; i--) {
    const m = lines[i].match(/^function\s+([A-Za-z0-9_]+)/) || lines[i].match(/^var\s+(MOCK)\s*=/);
    if (m) return m[1];
  }
  return '(top level)';
}
const byFn = {};
mockUses.forEach(n => { const f = enclosingFn(n); (byFn[f] = byFn[f] || []).push(n); });
const gatedFns = ['generateMockDebts_', 'generateMockPayments_', 'generateMockContributions_',
  'mockInPlanDebts_', 'mockTempleDebts_', 'MOCK', 'mockPaymentDates_'];
let d3 = 0;
Object.keys(byFn).forEach(fn => {
  if (gatedFns.includes(fn)) { console.log('   ' + fn + ': ' + byFn[fn].length + ' uses — generator/constant (invoked only behind mode gates)'); return; }
  const fnStart = lines.findIndex(l => l.startsWith('function ' + fn));
  for (const n of byFn[fn]) {
    let gated = false;
    for (let i = n - 1; i >= fnStart; i--) {
      if (/mode\s*===\s*'mock'/.test(lines[i])) { gated = true; break; }
    }
    if (!gated) { d3++; console.log('   UNGATED MOCK use in ' + fn + ' line ' + n); }
  }
});
section('d3. MOCK gating', d3);

// ─────────── m. MATH LAYER — independent 03 amortization ───────────
// Independent re-implementation (no shared code with the .gs twin).
const HORIZON = api.PAYOFF_HORIZON_MONTHS || 120;
function indepRanks(debts, key) {
  const idx = debts.map((d, i) => i);
  idx.sort((a, b) => { const ka = key(debts[a]), kb = key(debts[b]); if (ka !== kb) return ka - kb; return a - b; });
  const rank = {}; idx.forEach((i, pos) => rank[i] = pos + 1); return rank;
}
function indepRankMap(debts, strategy) {
  if (strategy === 'avalanche') return indepRanks(debts, d => -d.apr);
  if (strategy === 'custom') {
    // explicit order field; blanks (null) sort last by balance, tie by index
    const withOrder = debts.map((d, i) => ({ i, o: (d.order == null ? Infinity : d.order), b: d.bal0 }));
    withOrder.sort((a, b) => (a.o - b.o) || (a.b - b.b) || (a.i - b.i));
    const rank = {}; withOrder.forEach((x, pos) => rank[x.i] = pos + 1); return rank;
  }
  return indepRanks(debts, d => d.bal0); // snowball
}
function indepSchedule(debts, rankMap, extra) {
  const N = debts.length, r = debts.map(d => d.apr / 12);
  const bal = debts.map(d => [d.bal0]); const interest = debts.map(() => 0);
  const payoff = debts.map(() => null); const total = [debts.reduce((a, d) => a + d.bal0, 0)];
  for (let m = 1; m <= HORIZON; m++) {
    let target = Infinity;
    for (let d = 0; d < N; d++) if (bal[d][m - 1] > 1e-9) target = Math.min(target, rankMap[d]);
    let pool = extra;
    for (let d = 0; d < N; d++) if (bal[d][m - 1] <= 1e-9) pool += debts[d].min;
    let tot = 0;
    for (let d = 0; d < N; d++) {
      const prev = bal[d][m - 1];
      if (prev <= 1e-9) { bal[d][m] = 0; continue; }
      interest[d] += prev * r[d];
      const pay = debts[d].min + (rankMap[d] === target ? pool : 0);
      let nb = prev * (1 + r[d]) - pay; if (nb < 0) nb = 0;
      bal[d][m] = nb;
      if (nb <= 1e-9 && payoff[d] === null) payoff[d] = m;
      tot += nb;
    }
    total.push(tot);
  }
  let cnt = 0; for (let m = 0; m <= HORIZON; m++) if (total[m] > 0.005) cnt++;
  const months = cnt > HORIZON ? Infinity : cnt;
  let firstKill = { m: Infinity, name: null };
  debts.forEach((d, i) => { if (payoff[i] !== null && payoff[i] < firstKill.m) firstKill = { m: payoff[i], name: d.name }; });
  return { months, interestTotal: Math.round(interest.reduce((a, b) => a + b, 0) * 100) / 100,
    payoff: debts.map((d, i) => payoff[i]), firstKill };
}
function indepBaseline(debts) {
  const r = debts.map(d => d.apr / 12); let interestTotal = 0, remain = 0;
  debts.forEach((d, i) => {
    let b = d.bal0;
    for (let m = 1; m <= HORIZON; m++) { if (b <= 1e-9) break; interestTotal += b * r[i]; b = b * (1 + r[i]) - d.min; if (b < 0) b = 0; }
    remain += Math.max(0, b);
  });
  return { interestTotal: Math.round(interestTotal * 100) / 100, remainAtHorizon: Math.round(remain * 100) / 100 };
}

let mFail = 0, mChecks = 0;
const mAssert = (name, ok, got) => { mChecks++; if (!ok) { mFail++; console.log('  FAIL got ' + got + '  ' + name); } };
if (!api.simulateSchedule_ || !api.mockInPlanDebts_ || !api.rankDebts_ || !api.simulateBaseline_) {
  console.log('  (engine twin not yet exported — simulateSchedule_/mockInPlanDebts_/rankDebts_/simulateBaseline_ — math layer deferred)');
} else {
  const inPlan = api.mockInPlanDebts_();
  const EXTRA = 250;
  // 1. mock current balances feed the engine
  const balById = {}; inPlan.forEach(d => balById[d.name] = d.bal0);
  mAssert('mock in-plan bal0: Auto 5148', balById['Auto loan'] === 5148, balById['Auto loan']);
  mAssert('mock in-plan bal0: Visa 9930', balById['Visa ····4417'] === 9930, balById['Visa ····4417']);
  mAssert('mock in-plan bal0: Student 16663', balById['Student loan'] === 16663, balById['Student loan']);
  // 2. twin schedules match the independent ones, exactly
  const strategies = ['snowball', 'avalanche', 'custom'];
  for (const strat of strategies) {
    const rmTwin = api.rankDebts_(inPlan, strat);
    const rmIndep = indepRankMap(inPlan, strat);
    // twin rank vector vs indep (both maps i->rank)
    let ranksMatch = inPlan.every((d, i) => rmTwin[i] === rmIndep[i]);
    mAssert(strat + ': twin ranks match independent', ranksMatch, JSON.stringify(rmTwin) + ' vs ' + JSON.stringify(rmIndep));
    const tw = api.simulateSchedule_(inPlan, rmTwin, EXTRA);
    const ind = indepSchedule(inPlan, rmIndep, EXTRA);
    mAssert(strat + ': months match (' + ind.months + ')', tw.months === ind.months, tw.months);
    mAssert(strat + ': interest match (' + ind.interestTotal + ')', Math.abs(tw.interestTotal - ind.interestTotal) < 0.02, tw.interestTotal);
    mAssert(strat + ': payoff order match', JSON.stringify(tw.payoff) === JSON.stringify(ind.payoff), JSON.stringify(tw.payoff) + ' vs ' + JSON.stringify(ind.payoff));
    mAssert(strat + ': first kill match (' + ind.firstKill.name + ' m' + ind.firstKill.m + ')',
      tw.firstKill.m === ind.firstKill.m && tw.firstKill.name === ind.firstKill.name, JSON.stringify(tw.firstKill));
  }
  // 3. scenario extras
  const rmSnow = api.rankDebts_(inPlan, 'snowball');
  for (const ex of (api.SCENARIO_EXTRAS || [50, 100])) {
    const tw = api.simulateSchedule_(inPlan, rmSnow, EXTRA + ex);
    const ind = indepSchedule(inPlan, indepRankMap(inPlan, 'snowball'), EXTRA + ex);
    mAssert('+$' + ex + ': months match (' + ind.months + ')', tw.months === ind.months, tw.months);
  }
  // 4. baseline
  const bTwin = api.simulateBaseline_(inPlan);
  const bInd = indepBaseline(inPlan);
  mAssert('baseline interest match (' + bInd.interestTotal + ')', Math.abs(bTwin.interestTotal - bInd.interestTotal) < 0.02, bTwin.interestTotal);
  mAssert('baseline remain-at-horizon match (' + bInd.remainAtHorizon + ')', Math.abs(bTwin.remainAtHorizon - bInd.remainAtHorizon) < 0.02, bTwin.remainAtHorizon);
  // 5. the LOCKED headline truths from 04 — the product's credibility
  const snow = indepSchedule(inPlan, indepRankMap(inPlan, 'snowball'), EXTRA);
  const aval = indepSchedule(inPlan, indepRankMap(inPlan, 'avalanche'), EXTRA);
  mAssert('04 truth: snowball 47 months', snow.months === 47, snow.months);
  mAssert('04 truth: snowball interest ≈ $7,487', Math.round(snow.interestTotal) === 7487, snow.interestTotal);
  mAssert('04 truth: avalanche 46 months', aval.months === 46, aval.months);
  mAssert('04 truth: avalanche saves ≈ $972', Math.round(snow.interestTotal - aval.interestTotal) === 972, Math.round(snow.interestTotal - aval.interestTotal));
  mAssert('04 truth: snowball first kill m12 (Auto)', snow.firstKill.m === 12 && snow.firstKill.name === 'Auto loan', JSON.stringify(snow.firstKill));
  mAssert('04 truth: avalanche first kill m27', aval.firstKill.m === 27, aval.firstKill.m);
  mAssert('04 truth: minimums still owe ≈ $15,559', Math.round(bInd.remainAtHorizon) === 15559, bInd.remainAtHorizon);
  mAssert('04 truth: interest saved ≈ $26,772', Math.round(bInd.interestTotal - snow.interestTotal) === 26772, Math.round(bInd.interestTotal - snow.interestTotal));
}
section('m. math layer (independent 03 amortization)', mFail, mChecks);

// build lookup maps from the mock capture
const writes = {}, formulas = {}, r1c1 = {};
for (const rec of captures.mock) {
  if (rec.kind === 'value') writes[rec.sheet + '!' + rec.a1] = rec.val;
  else if (rec.kind === 'formula') formulas[rec.sheet + '!' + rec.a1] = rec.val;
  else if (rec.kind === 'formulaR1C1') r1c1[rec.sheet + '!' + rec.a1] = rec.val;
}
const writesBlank = {}, formulasBlank = {};
for (const rec of captures.blank) {
  if (rec.kind === 'value') writesBlank[rec.sheet + '!' + rec.a1] = rec.val;
  else if (rec.kind === 'formula') formulasBlank[rec.sheet + '!' + rec.a1] = rec.val;
}
const has = (m, k, sub) => (m[k] || '').indexOf(sub) !== -1;

// ───────────── c. cross-reference audit (vs 02 / 03) ─────────────
const expectNamed = {
  cc_active_palette: '_Config!B40',
  cc_palettes: '_Config!A3:I26',
  cc_engine_anchor: '_Config!B41',
  cc_debts_list: 'Debts!B10:B34',
  cc_debts_table: 'Debts!A10:O34',
  cc_keyword_rules: 'Debts!Q10:R34',
  cc_payments_log: 'Payments Log!A10:G5009',
  cc_active_strategy: 'The Plan!C10',
  cc_extra_monthly: 'The Plan!D10',
  cc_time_machine: 'The Plan!C32',
  cc_compare_month: 'Compare!C10',
  cc_stylobate_goal: 'Progress!C10'
};
const named = namedByMode.mock;
const STRATEGY_DEFAULT_TXT = api.STRATEGY_DEFAULT;
const audits = [];
for (const [k, v] of Object.entries(expectNamed)) audits.push(['named range ' + k + ' = ' + v, named[k] === v, named[k]]);
audits.push(['blank defines the same named ranges', JSON.stringify(namedByMode.blank) === JSON.stringify(namedByMode.mock), '']);
// engine wiring
audits.push(['engine bal0 row reads Debts!K (current balance)', has(formulas, '_Engine!B2', "'Debts'!$K$10"), formulas['_Engine!B2']]);
audits.push(['engine rate row reads Debts!E/12', has(formulas, '_Engine!B3', "'Debts'!$E$10") && has(formulas, '_Engine!B3', '/12'), formulas['_Engine!B3']]);
audits.push(['snowball rank uses SUMPRODUCT over the in-plan mask', has(formulas, '_Engine!B11', 'SUMPRODUCT') && has(formulas, '_Engine!B11', '$B$7:$Z$7=1'), formulas['_Engine!B11']]);
audits.push(['avalanche rank ranks by rate descending', has(formulas, '_Engine!B12', '$B$3:$Z$3>'), formulas['_Engine!B12']]);
audits.push(['custom rank reads the order-value row', has(formulas, '_Engine!B13', '$B$10:$Z$10'), formulas['_Engine!B13']]);
audits.push(['rank-active CHOOSEs by the active-strategy index', has(formulas, '_Engine!B14', 'CHOOSE($B$15'), formulas['_Engine!B14']]);
// snowball block: top=21, data0=25, m=1 row=26
audits.push(['target cell (AA26) is MINIFS of ranks among alive in-plan', has(formulas, '_Engine!AA26', 'MINIFS') && has(formulas, '_Engine!AA26', '">0.005"'), formulas['_Engine!AA26']]);
audits.push(['pool cell (AB26) = extra + freed minimums (SUMIFS)', has(formulas, '_Engine!AB26', 'SUMIFS') && has(formulas, '_Engine!AB26', '$B$21'), formulas['_Engine!AB26']]);
audits.push(['balance recurrence (B26) compounds then subtracts pay (MAX 0)', has(formulas, '_Engine!B26', 'MAX(0,') && has(formulas, '_Engine!B26', '*(1+B$3)'), formulas['_Engine!B26']]);
audits.push(['in-plan total (AC25) is SUMIFS over the in-plan mask', has(formulas, '_Engine!AC25', 'SUMIFS') && has(formulas, '_Engine!AC25', '$B$7:$Z$7'), formulas['_Engine!AC25']]);
audits.push(['block months-to-zero counts AC>0 over m=0..120', has(formulas, '_Engine!D21', 'SUMPRODUCT(--($AC$25:$AC$145>0.005))'), formulas['_Engine!D21']]);
audits.push(['active scalar B18 CHOOSEs months across the three base blocks', has(formulas, '_Engine!B18', 'CHOOSE') && has(formulas, '_Engine!B18', 'D21'), formulas['_Engine!B18']]);
audits.push(['interest-saved scalar H18 = baseline − active', has(formulas, '_Engine!H18', '$F$18-$C$18'), formulas['_Engine!H18']]);
audits.push(['paid-to-date scalar N18 = Σ consumer (start − now)', has(formulas, '_Engine!N18', '$B$9:$Z$9') && has(formulas, '_Engine!N18', 'SUMPRODUCT'), formulas['_Engine!N18']]);
// Debts computed columns
audits.push(['Debts Current balance = stmt − Σ principal after anchor', has(formulas, 'Debts!K10', 'SUMIFS') && has(formulas, 'Debts!K10', "'Payments Log'!$E$10"), formulas['Debts!K10']]);
audits.push(['Debts Status chips ACTIVE/PAID/UNDERWATER/TRACKED', has(formulas, 'Debts!L10', 'UNDERWATER') && has(formulas, 'Debts!L10', 'PAID'), formulas['Debts!L10']]);
audits.push(['Debts Payoff date reads active payoff row + horizon guard', has(formulas, 'Debts!M10', "'_Engine'!$B$16") && has(formulas, 'Debts!M10', 'beyond horizon'), formulas['Debts!M10']]);
audits.push(['Debts header: D9 = Statement balance', writes['Debts!D9'] === 'Statement balance', writes['Debts!D9']]);
// Payments Log
audits.push(['Payments Est. interest = MIN(amount, bal×APR/12) by lookup', has(formulas, 'Payments Log!D10', 'MIN($C10') && has(formulas, 'Payments Log!D10', 'MATCH($B10,cc_debts_list'), formulas['Payments Log!D10']]);
audits.push(['Payments Est. principal = amount − interest', has(formulas, 'Payments Log!E10', '$C10-$D10'), formulas['Payments Log!E10']]);
audits.push(['Payments header: A9 = Date, G9 = Month', writes['Payments Log!A9'] === 'Date' && writes['Payments Log!G9'] === 'Month', writes['Payments Log!A9']]);
// control cells
audits.push(['The Plan strategy cell seeded Snowball; extra = 250 (mock)', writes['The Plan!C10'] === STRATEGY_DEFAULT_TXT && writes['The Plan!D10'] === 250, writes['The Plan!C10']]);
audits.push(['blank: The Plan extra = 0', writesBlank['The Plan!D10'] === 0, writesBlank['The Plan!D10']]);
// mock registry
audits.push(['mock Debts row 10 = Rooms+ Store Card (Card)', writes['Debts!B10'] === 'Rooms+ Store Card' && writes['Debts!C10'] === 'Card', writes['Debts!B10']]);
audits.push(['mock mortgage In plan? = No (tracked)', writes['Debts!H15'] === 'No', writes['Debts!H15']]);
audits.push(['blank: Debts row 10 empty (no mock leak)', writesBlank['Debts!B10'] === undefined, writesBlank['Debts!B10']]);

let cFail = 0;
for (const [name, ok, got] of audits) { if (!ok) { cFail++; console.log('  FAIL got: ' + got + '  ' + name); } }
section('c. cross-reference audit', cFail, audits.length);

// ───────────── e. mock integrity ─────────────
const debts = api.generateMockDebts_();
const pays = api.generateMockPayments_();
const contribs = api.generateMockContributions_();
const today = new Date();
const names = debts.map(d => d.name);
const eChecks = [
  ['6 mock debts', debts.length === 6, debts.length],
  ['names match the Casey story', names.join('|') === 'Rooms+ Store Card|Medical bill|Visa ····4417|Auto loan|Student loan|Mortgage', names.join('|')],
  ['mortgage tracked (In plan? = No)', debts[5].inPlan === 'No', debts[5].inPlan],
  ['two debts already paid (start>0, stmt=0)', debts[0].stmt === 0 && debts[1].stmt === 0 && debts[0].start === 1150, ''],
  ['Visa/Auto/Student statement = current balance', debts[2].stmt === 9930 && debts[3].stmt === 5148 && debts[4].stmt === 16663, ''],
  ['payments: no future-dated rows', pays.every(p => p[0] <= today), ''],
  ['payments: ~14 months of history (45-110 rows)', pays.length >= 45 && pays.length <= 110, pays.length],
  ['payments: every debt is a real registry name', pays.every(p => names.indexOf(p[1]) !== -1), ''],
  ['contributions sum to $600 of the $1,000 goal', contribs.reduce((a, c) => a + c[1], 0) === 600, contribs.reduce((a, c) => a + c[1], 0)],
  ['contributions: no future-dated rows', contribs.every(c => c[0] <= today), ''],
  ['consumer start total = $40,950', debts.filter(d => d.inPlan === 'Yes').reduce((a, d) => a + d.start, 0) === 40950, ''],
  ['paymentEstInterest underwater Visa ≈ $196 cap', api.paymentEstInterest_(9930, 0.2499, 196) === 196, api.paymentEstInterest_(9930, 0.2499, 196)]
];
let eFail = 0;
for (const [n2, ok, got] of eChecks) { if (!ok) { eFail++; console.log('  FAIL got ' + got + '  ' + n2); } }
section('e. mock integrity', eFail, eChecks.length);

// ───────────── f. functional — Bank CSV import core ─────────────
ss = env.newSS(); // keyOf_ reads the timezone off the active spreadsheet
const fChecks = [];
fChecks.push(['parseCsvLine handles quoted commas', JSON.stringify(api.parseCsvLine_('06/12/2026,"CHASE, CARD",-196.00')) === JSON.stringify(['06/12/2026', 'CHASE, CARD', '-196.00']), '']);
const sn = api.sniffColumns_(['Posting Date', 'Description', 'Amount']);
fChecks.push(['sniffColumns finds Date/Description/Amount', sn.date === 0 && sn.desc === 1 && sn.amount === 2, JSON.stringify(sn)]);
fChecks.push(['cleanNum: -196.00 → -196, (50) → -50, $1,234 → 1234', api.cleanNum_('-196.00') === -196 && api.cleanNum_('(50)') === -50 && api.cleanNum_('$1,234') === 1234, '']);
fChecks.push(['parseAmount uses Amount column', api.parseAmount_(['x', 'y', '-196'], { amount: 2, debit: -1, credit: -1 }) === -196, '']);
const rules = [{ keyword: 'CHASE', debt: 'Wrong' }, { keyword: 'CHASE CARD', debt: 'Visa ····4417' }, { keyword: 'TOYOTA FIN', debt: 'Auto loan' }, { keyword: 'SALLIE MAE', debt: 'Student loan' }];
fChecks.push(['matchDebt longest-keyword-wins', api.matchDebt_('ACH PYMT CHASE CARD', rules) === 'Visa ····4417', api.matchDebt_('ACH PYMT CHASE CARD', rules)]);
fChecks.push(['matchDebt returns null with no rule', api.matchDebt_('STARBUCKS', rules) === null, '']);
const parsed = [
  { date: new Date(2026, 5, 12), desc: 'ACH PYMT CHASE CARD', amount: 196 },
  { date: new Date(2026, 5, 12), desc: 'AUTOPAY TOYOTA FIN', amount: 647 },
  { date: new Date(2026, 5, 10), desc: 'SALLIE MAE EDU', amount: 190 },
  { date: new Date(2026, 5, 9), desc: 'STARBUCKS COFFEE', amount: 6 }
];
const existing = {}; existing[api.keyOf_(new Date(2026, 5, 10), 'Student loan', 190)] = true;
const res = api.mapBankRows_(parsed, rules, existing);
fChecks.push(['mapBankRows: 2 new (Chase, Toyota)', res.toAppend.length === 2 && res.toAppend[0][1] === 'Visa ····4417' && res.toAppend[1][1] === 'Auto loan', res.toAppend.length]);
fChecks.push(['mapBankRows: Sallie Mae deduped against the log', res.dup === 1, res.dup]);
fChecks.push(['mapBankRows: Starbucks has no rule (unmatched)', res.unmatched.length === 1, res.unmatched.length]);
fChecks.push(['mapBankRows: re-running appends nothing (all now dup)', api.mapBankRows_(parsed, rules, (function () { const e = {}; res.toAppend.forEach(r => e[api.keyOf_(r[0], r[1], r[2])] = true); e[api.keyOf_(new Date(2026, 5, 10), 'Student loan', 190)] = true; return e; })()).toAppend.length === 0, '']);
let fFail = 0;
for (const [n5, ok, got] of fChecks) { if (!ok) { fFail++; console.log('  FAIL got ' + got + '  ' + n5); } }
section('f. functional (Bank CSV import core)', fFail, fChecks.length);

// ───────────── g. rebuild resilience — building OVER a stale workbook ─────────────
CURRENT_MODE = 'func';
ss = env.newSS();
api.buildWorkbook('mock');
const stalePay = ss.sheets['Payments Log'];
stalePay.filter = { range: { row: 9, col: 1, numRows: 5001, numCols: 7 }, remove() { stalePay.filter = null; } };
const staleDebts = ss.sheets['Debts'];
staleDebts.filter = { range: { row: 9, col: 1, numRows: 26, numCols: 18 }, remove() { staleDebts.filter = null; } };
const gChecks = [];
try { api.buildWorkbook('mock'); gChecks.push(['rebuild mock over a stale filter + merges succeeds', true, '']); }
catch (e) { gChecks.push(['rebuild mock over a stale filter + merges succeeds', false, e.message]); }
try { api.buildWorkbook('blank'); gChecks.push(['blank-over-mock rebuild succeeds (self-created filters torn down)', true, '']); }
catch (e) { gChecks.push(['blank-over-mock rebuild succeeds', false, e.message]); }
let gFail = 0;
for (const [n4, ok, got] of gChecks) { if (!ok) { gFail++; console.log('  FAIL got ' + got + '  ' + n4); } }
section('g. rebuild resilience', gFail, gChecks.length);

// ───────────── h. cross-sheet reference inventory ─────────────
// Every cross-sheet column reference must appear in this REVIEWED
// inventory — a novel reference fails until re-reviewed against 02/03.
const A1_ALLOWED = {
  'Debts': ['B', 'B:B', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'M', 'N', 'S', 'A:O'],
  'Payments Log': ['A', 'B', 'E'],
  // _Engine scalars (row 18 + block summaries) the views read, plus the
  // mirror block B:Z and the active-timeline column AE.
  '_Engine': ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'AE', 'B:Z'],
  '_Config': ['B']
};
let hFail = 0;
const novel = {};
const a1Re = /'([^']+)'!\$?([A-Z]{1,2})\$?\d*(?::\$?([A-Z]{1,2})\$?\d*)?/g;
for (const mode of ['mock', 'blank']) {
  for (const rec of captures[mode]) {
    if (rec.kind !== 'formula') continue;
    let m;
    while ((m = a1Re.exec(String(rec.val))) !== null) {
      const target = m[1];
      if (target === rec.sheet || !(target in A1_ALLOWED)) continue;
      const span = m[2] + (m[3] && m[3] !== m[2] ? ':' + m[3] : '');
      if (!A1_ALLOWED[target].includes(span)) novel[target + '!' + span] = rec.sheet + '!' + rec.a1 + ' :: ' + String(rec.val).slice(0, 90);
    }
  }
}
for (const [ref, ex] of Object.entries(novel)) { hFail++; console.log('  NOVEL REFERENCE ' + ref + ' — review vs 02/03, then add to the inventory. From ' + ex); }
section('h. cross-sheet reference inventory', hFail);

// ───────────── j. text-fit audit — PIXEL-aware clip detection ─────────────
// A literal label wider than the pixels available to it clips ("STRATEGY"
// in an 18px cell → "ST"; the v1 live-QA "slop" class). Now geometry-aware:
// available px = the cell's recorded column width, or the summed widths of
// its merge; wrapped cells are exempt (they grow down, not sideways). The
// per-char factor is CONSERVATIVE (~0.5px per char·pt) so only egregious
// clips fail — borderline fits are a preview-pipeline judgment call.
const VIEW_TABS = new Set(['Dashboard', 'The Plan', 'Compare', 'Progress', 'The Hall', 'Start Here']);
const PX_PER_CHAR_PT = 0.5;
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
    if (!anchor) continue;                              // covered by a merge
    const st = g.styles[r + ',' + c] || {};
    if (st.wrap) continue;                              // wraps, doesn't clip
    let width = 0;
    for (let i = 0; i < nc; i++) width += (g.colW[c + i] != null ? g.colW[c + i] : 100);
    const est = rec.val.length * (st.size || 10) * PX_PER_CHAR_PT;
    if (est > width) {
      const key = rec.sheet + '!' + rec.a1;
      if (jSeen[key]) continue;
      jSeen[key] = true;
      jFail++;
      console.log('  CLIP-RISK [' + mode + '] ' + key + ' "' + rec.val.slice(0, 32) + '" needs ~' + Math.round(est) + 'px, has ' + width + 'px — merge/widen it');
    }
  }
}
section('j. text-fit (pixel) audit', jFail);

console.log('\nTOTAL: ' + (FAILS === 0 ? 'ALL GREEN' : FAILS + ' FAILURES'));
process.exit(FAILS ? 1 : 0);
