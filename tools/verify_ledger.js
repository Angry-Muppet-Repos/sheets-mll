/* Static-verification harness for ColumnCo_Ledger_v1.gs
   Executes buildWorkbook('mock') and buildWorkbook('blank') against a stub
   SpreadsheetApp, capturing every formula and value written to every sheet.
   Checks:
     b. paren/quote balance of every constructed formula string
     c. cross-reference audit (row/col/cell contracts from 02/03)
     d. mode audit (no mock data reachable in blank mode; no value cells
        beginning with "="; MOCK.* only behind mode gates)               */
'use strict';
const fs = require('fs');
const src = fs.readFileSync('apps_script/ColumnCo_Ledger_v1.gs', 'utf8');

// ───────────────────────── stub Sheets API ─────────────────────────
const COL = s => { let c = 0; for (const ch of s) c = c * 26 + ch.charCodeAt(0) - 64; return c; };
const LETTER = n => { let s = ''; while (n > 0) { const m = (n - 1) % 26; s = String.fromCharCode(65 + m) + s; n = Math.floor((n - 1) / 26); } return s; };
function parseA1(ref) {
  // returns {row,col,numRows,numCols}; accepts A1, A1:B2
  const m = ref.match(/^([A-Z]+)(\d+)(?::([A-Z]+)(\d+))?$/);
  if (!m) throw new Error('bad A1: ' + ref);
  const c1 = COL(m[1]), r1 = +m[2];
  const c2 = m[3] ? COL(m[3]) : c1, r2 = m[4] ? +m[4] : r1;
  return { row: Math.min(r1, r2), col: Math.min(c1, c2), numRows: Math.abs(r2 - r1) + 1, numCols: Math.abs(c2 - c1) + 1 };
}

const captures = { mock: [], blank: [] };
let CURRENT_MODE = 'mock';
const record = rec => captures[CURRENT_MODE].push(rec);

class RangeStub {
  constructor(sheet, row, col, numRows, numCols) {
    Object.assign(this, { sheet, row, col, numRows, numCols });
  }
  getA1Notation() {
    const a = LETTER(this.col) + this.row;
    if (this.numRows === 1 && this.numCols === 1) return a;
    return a + ':' + LETTER(this.col + this.numCols - 1) + (this.row + this.numRows - 1);
  }
  getRow() { return this.row; }
  getColumn() { return this.col; }
  setValue(v) {
    record({ sheet: this.sheet.name, a1: this.getA1Notation(), kind: 'value', val: v });
    return this;
  }
  setValues(vals) {
    if (!Array.isArray(vals) || vals.length !== this.numRows || vals.some(r => !Array.isArray(r) || r.length !== this.numCols)) {
      throw new Error('setValues dim mismatch at ' + this.sheet.name + '!' + this.getA1Notation() +
        ' expected ' + this.numRows + 'x' + this.numCols + ' got ' + vals.length + 'x' + (vals[0] ? vals[0].length : '?'));
    }
    for (let r = 0; r < vals.length; r++) for (let c = 0; c < vals[r].length; c++) {
      record({ sheet: this.sheet.name, a1: LETTER(this.col + c) + (this.row + r), kind: 'value', val: vals[r][c] });
    }
    return this;
  }
  setFormula(f) {
    record({ sheet: this.sheet.name, a1: this.getA1Notation(), kind: 'formula', val: f });
    return this;
  }
  setFormulaR1C1(f) {
    record({ sheet: this.sheet.name, a1: this.getA1Notation(), kind: 'formulaR1C1', val: f });
    return this;
  }
  getValues() {
    return Array.from({ length: this.numRows }, () => Array.from({ length: this.numCols }, () => ''));
  }
  getValue() { return ''; }
  createFilter() { return { remove() {} }; }
}
// chainable no-ops
['merge','setBackground','setBorder','setFontFamily','setFontSize','setFontWeight','setFontStyle',
 'setFontColor','setHorizontalAlignment','setVerticalAlignment','setWrap','setNumberFormat',
 'setDataValidation','breakApart','clearDataValidations','clearContent','sort','activate',
 'setFontLine'].forEach(m => { RangeStub.prototype[m] = function () { return this; }; });

class SheetStub {
  constructor(ss, name) { this.ss = ss; this.name = name; }
  getName() { return this.name; }
  getRange(...args) {
    if (args.length === 1 && typeof args[0] === 'string') {
      let ref = args[0];
      if (ref.includes('!')) ref = ref.split('!')[1];
      const p = parseA1(ref.replace(/\$/g, ''));
      return new RangeStub(this, p.row, p.col, p.numRows, p.numCols);
    }
    const [r, c, nr = 1, nc = 1] = args;
    return new RangeStub(this, r, c, nr, nc);
  }
  getMaxRows() { return 1000; }
  getMaxColumns() { return 26; }
  clear() { return this; }
  clearConditionalFormatRules() { return this; }
  getConditionalFormatRules() { return []; }
  setConditionalFormatRules() { return this; }
  getCharts() { return []; }
  removeChart() {}
  insertChart() {}
  newChart() { return chartBuilder(); }
  setHiddenGridlines() { return this; }
  setRowHeight() { return this; }
  setRowHeights() { return this; }
  setColumnWidth() { return this; }
  setColumnWidths() { return this; }
  hideColumns() {} hideRows() {} showRows() {} showColumns() {}
  setFrozenRows() {}
  getFilter() { return null; }
  getLastRow() { return 9; }
  hideSheet() {} activate() {}
}
function chartBuilder() {
  const b = {};
  ['asPieChart','asColumnChart','setOption','addRange','setPosition','setNumHeaders'].forEach(m => b[m] = () => b);
  b.build = () => ({});
  return b;
}
class SSStub {
  constructor() { this.sheets = {}; this.named = {}; }
  getSheetByName(n) { return this.sheets[n] || null; }
  insertSheet(n) { return (this.sheets[n] = new SheetStub(this, n)); }
  getSheets() { return Object.values(this.sheets); }
  deleteSheet() {}
  setActiveSheet() {} moveActiveSheet() {}
  setNamedRange(name, range) { this.named[name] = range.sheet.name + '!' + range.getA1Notation(); }
  getRangeByName() { return null; }   // force literal fallbacks
  getRange(ref) {
    const [sheetName, a1] = ref.replace(/^'/, '').split(/'?!/);
    const sh = this.sheets[sheetName] || this.insertSheet(sheetName);
    return sh.getRange(a1);
  }
  toast() {}
  getSpreadsheetTimeZone() { return 'America/Detroit'; }
}
const validationBuilder = () => {
  const b = {};
  ['requireValueInList','requireValueInRange','setAllowInvalid'].forEach(m => b[m] = () => b);
  b.build = () => ({});
  return b;
};
const cfBuilder = () => {
  const b = {};
  b.whenTextEqualTo = () => b;
  b.whenFormulaSatisfied = f => { record({ sheet: '(cf)', a1: '(cf)', kind: 'formula', val: f }); return b; };
  ['setBackground','setFontColor','setBold','setRanges'].forEach(m => b[m] = () => b);
  b.build = () => ({});
  return b;
};
let ss;
const SpreadsheetApp = {
  getActive: () => ss,
  getUi: () => ({ createMenu: () => menuBuilder(), alert: () => {}, prompt: () => {}, showSidebar: () => {}, ButtonSet: {} }),
  newDataValidation: validationBuilder,
  newConditionalFormatRule: cfBuilder,
  BorderStyle: { SOLID: 1, SOLID_MEDIUM: 2 },
  flush: () => {},
};
function menuBuilder() { const m = {}; ['addItem','addSeparator','addSubMenu','addToUi'].forEach(k => m[k] = () => m); return m; }
const PropertiesService = {
  getDocumentProperties: () => ({ getProperty: () => null, setProperty: () => {}, deleteProperty: () => {} })
};
const Utilities = { formatDate: (d) => d.toISOString().slice(0, 10) };
const Logger = { log: () => {} };
const HtmlService = { createHtmlOutput: () => ({ setTitle: () => ({}) }) };

// ───────────────────────── run both builds ─────────────────────────
const factory = new Function('SpreadsheetApp', 'PropertiesService', 'Utilities', 'Logger', 'HtmlService',
  src + '\n;return { buildWorkbook, TABS, CATEGORIES, LEDGER_CATEGORIES, ENGINE_ROWS, PALETTES, KEYWORD_RULES, MOCK, TAX, SETASIDE_PRESETS };');
const api = factory(SpreadsheetApp, PropertiesService, Utilities, Logger, HtmlService);

const namedByMode = {};
for (const mode of ['mock', 'blank']) {
  CURRENT_MODE = mode;
  ss = new SSStub();
  api.buildWorkbook(mode);
  namedByMode[mode] = { ...ss.named };
}
console.log('both build modes executed against the stub: OK');
console.log('captured writes — mock: ' + captures.mock.length + ', blank: ' + captures.blank.length);

// ───────────── b. formula paren/quote balance ─────────────
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
let bad = 0, formulaCount = 0;
for (const mode of ['mock', 'blank']) {
  for (const rec of captures[mode]) {
    if (rec.kind === 'formula' || rec.kind === 'formulaR1C1') {
      formulaCount++;
      if (!balanced(rec.val)) { bad++; console.log('  UNBALANCED [' + mode + '] ' + rec.sheet + '!' + rec.a1 + ' :: ' + rec.val); }
      if (rec.kind === 'formula' && rec.val.charAt(0) !== '=') { bad++; console.log('  NOT-A-FORMULA [' + mode + '] ' + rec.sheet + '!' + rec.a1 + ' :: ' + rec.val); }
    }
  }
}
console.log('b. formula balance: ' + (bad === 0 ? 'OK' : 'FAIL') + ' (' + formulaCount + ' formula writes checked, ' + bad + ' bad)');

// ───────────── d. mode audit ─────────────
// d1: no VALUE write may begin with "=" (prose accidentally becoming a formula)
let d1 = 0;
for (const mode of ['mock', 'blank']) {
  for (const rec of captures[mode]) {
    if (rec.kind === 'value' && typeof rec.val === 'string' && rec.val.charAt(0) === '=') {
      d1++; console.log('  VALUE-STARTS-WITH-= [' + mode + '] ' + rec.sheet + '!' + rec.a1 + ' :: ' + rec.val.slice(0, 60));
    }
  }
}
console.log('d1. no value writes begin with "=": ' + (d1 === 0 ? 'OK' : 'FAIL (' + d1 + ')'));

// d2: blank build must contain no mock identifiers / story figures
const forbidden = ['Maya', 'Chen Studio', 'Brightline', 'Hawthorn', 'Affiliate Links', 'Etsy Shop',
  'Novo', 'Tax Escrow (Ally)', 'PayPal Balance', 'Square Balance', 'MAYA', 'Packaging design',
  'Brand refresh', 'Summer campaign', 'Logo variations', 'Q3 retainer', 'Design expo', 'Uline',
  'Escrow holds', 'Six tools added', 'Pricing is working'];
let d2 = 0;
for (const rec of captures.blank) {
  if (typeof rec.val !== 'string') continue;
  for (const f of forbidden) {
    if (rec.val.indexOf(f) !== -1) { d2++; console.log('  MOCK-LEAK [blank] ' + rec.sheet + '!' + rec.a1 + ' :: ' + rec.val.slice(0, 70)); }
  }
}
console.log('d2. blank build mock-leak scan: ' + (d2 === 0 ? 'OK (no mock names/copy reachable)' : 'FAIL (' + d2 + ')'));

// d3: every MOCK.* reference in the source sits inside a mock gate or the
// generator/constants. Report each MOCK usage with its enclosing function +
// whether that function is gated where it matters.
const lines = src.split('\n');
const mockUses = [];
lines.forEach((l, i) => { if (/\bMOCK\./.test(l) && !/^\s*\/\//.test(l) && !/^\s*\*/.test(l)) mockUses.push(i + 1); });
console.log('d3. MOCK.* usages found on ' + mockUses.length + ' lines (audited below)');
// find enclosing function for each
function enclosingFn(lineNo) {
  for (let i = lineNo - 1; i >= 0; i--) {
    const m = lines[i].match(/^function\s+([A-Za-z0-9_]+)/) || lines[i].match(/^var\s+(MOCK)\s*=/);
    if (m) return m[1];
  }
  return '(top level)';
}
const byFn = {};
mockUses.forEach(n => { const f = enclosingFn(n); (byFn[f] = byFn[f] || []).push(n); });
const gatedFns = ['generateMockLedger_', 'MOCK'];       // pure data/generator — only invoked behind gates
const inlineGated = {};                                  // builders where each use must be inside `mode === 'mock'`
Object.keys(byFn).forEach(fn => {
  if (gatedFns.includes(fn)) { console.log('   ' + fn + ': ' + byFn[fn].length + ' uses — constants/generator (invoked only behind mode gates)'); return; }
  // verify each use line is within a mode==='mock' conditional by scanning backwards for the gate within the function
  const fnStart = lines.findIndex(l => l.startsWith('function ' + fn));
  let allGated = true;
  for (const n of byFn[fn]) {
    let gated = false;
    for (let i = n - 1; i >= fnStart; i--) {
      if (/mode\s*===\s*'mock'/.test(lines[i])) { gated = true; break; }
    }
    if (!gated) { allGated = false; console.log('   UNGATED MOCK use in ' + fn + ' line ' + n + ': ' + lines[n - 1].trim().slice(0, 80)); }
  }
  if (allGated) console.log('   ' + fn + ': ' + byFn[fn].length + ' uses — all behind mode === \'mock\' gates');
});

// ───────────── c. cross-reference audit ─────────────
const writes = {};   // mock-mode value map "Sheet!A1" -> last value
for (const rec of captures.mock) if (rec.kind === 'value') writes[rec.sheet + '!' + rec.a1] = rec.val;
const formulas = {};
for (const rec of captures.mock) if (rec.kind === 'formula') formulas[rec.sheet + '!' + rec.a1] = rec.val;

const expectNamed = {
  cc_active_palette: '_Config!B40',
  cc_palettes: '_Config!A3:I26',
  cc_setaside_table: '_Config!B31:C34',
  cc_categories: 'Categories!A11:A35',
  cc_tx_categories: 'Categories!A11:A38',
  cc_keyword_rules: 'Categories!E11:G200',
  cc_clients_list: 'Clients!A10:A21',
  cc_accounts_list: 'Accounts!A10:A21',
  cc_engine_months: '_Engine!B1:Y1',
  cc_engine_data: '_Engine!B2:Y40',
  cc_dashboard_month: 'Dashboard!N4',
  cc_trends_window: 'Trends!N7',
  cc_tax_year: 'Tax Center!A11',
  cc_setaside_pct: 'Tax Center!K11',
  cc_mileage_rate: 'Tax Center!I11',
  cc_escrow_balance: 'Tax Center!E22',
  cc_mileage_ytd: 'Mileage!G11',
};
const audits = [];
const named = namedByMode.mock;
for (const [k, v] of Object.entries(expectNamed)) {
  audits.push(['named range ' + k + ' = ' + v, named[k] === v, named[k]]);
}
// engine row labels
audits.push(['_Engine A2 = first category', writes['_Engine!A2'] === 'Advertising & Marketing', writes['_Engine!A2']]);
audits.push(['_Engine A21 = 20th category (Misc)', writes['_Engine!A21'] === 'Misc', writes['_Engine!A21']]);
audits.push(['_Engine A35 = Revenue', writes['_Engine!A35'] === 'Revenue', writes['_Engine!A35']]);
audits.push(['_Engine A36 = Expenses', writes['_Engine!A36'] === 'Expenses', writes['_Engine!A36']]);
audits.push(['_Engine A37 = NetProfit', writes['_Engine!A37'] === 'NetProfit', writes['_Engine!A37']]);
audits.push(['_Engine A38 = Margin', writes['_Engine!A38'] === 'Margin', writes['_Engine!A38']]);
audits.push(['_Engine A39 = OwnerDraws', writes['_Engine!A39'] === 'OwnerDraws', writes['_Engine!A39']]);
audits.push(['_Engine A40 = EscrowTransfers', writes['_Engine!A40'] === 'EscrowTransfers', writes['_Engine!A40']]);
audits.push(['_Engine custom slot A22 reads Categories!A31', (formulas['_Engine!A22'] || '').includes("'Categories'!A31"), formulas['_Engine!A22']]);
audits.push(['_Engine stream row A27 reads Clients!A10', (formulas['_Engine!A27'] || '').includes("'Clients'!A10"), formulas['_Engine!A27']]);
audits.push(['_Engine B2 SUMIFS gated on Type=Expense', (formulas['_Engine!B2'] || '').includes('"Expense"'), '']);
audits.push(['_Engine B27 SUMIFS gated on Type=Revenue', (formulas['_Engine!B27'] || '').includes('"Revenue"'), '']);
audits.push(['_Engine B40 counts transfers into escrow (>0)', (formulas['_Engine!B40'] || '').includes('">0"') && (formulas['_Engine!B40'] || '').includes('"Transfer"'), '']);
// categories contract
audits.push(['Categories A11 = first category', writes['Categories!A11'] === 'Advertising & Marketing', writes['Categories!A11']]);
audits.push(['Categories B11 = Line 8', writes['Categories!B11'] === 'Line 8', writes['Categories!B11']]);
audits.push(['Categories A30 = Misc (20th fixed row)', writes['Categories!A30'] === 'Misc', writes['Categories!A30']]);
audits.push(['Categories A36/A37/A38 = Revenue/Transfer/Owner',
  writes['Categories!A36'] === 'Revenue' && writes['Categories!A37'] === 'Transfer' && writes['Categories!A38'] === 'Owner', '']);
audits.push(['Categories E11 = first keyword (ETSY)', writes['Categories!E11'] === 'ETSY', writes['Categories!E11']]);
// transactions contract
audits.push(['TX header row 9 col A = Date', writes['Transactions!A9'] === 'Date', writes['Transactions!A9']]);
audits.push(['TX header col D = Type', writes['Transactions!D9'] === 'Type', writes['Transactions!D9']]);
audits.push(['TX header col F = Client/Stream', writes['Transactions!F9'] === 'Client/Stream', writes['Transactions!F9']]);
audits.push(['TX header col I = Month', writes['Transactions!I9'] === 'Month', writes['Transactions!I9']]);
// registries
audits.push(['Clients data starts row 10 (mock: Etsy Shop)', writes['Clients!A10'] === 'Etsy Shop', writes['Clients!A10']]);
audits.push(['Accounts data starts row 10 (mock: Biz Checking)', writes['Accounts!A10'] === 'Biz Checking (Novo)', writes['Accounts!A10']]);
// tax center contract
audits.push(['Tax Center K11 resolver uses cc_setaside_table', (formulas['Tax Center!K11:L11'] || formulas['Tax Center!K11'] || '').includes('cc_setaside_table'), '']);
audits.push(['Escrow balance formula SUMIFs Accounts Type', (formulas['Tax Center!E22:G22'] || '').includes('"Tax Escrow"'), '']);
audits.push(['Quarter card Q1 net SUMPRODUCTs engine row 37 × flags row 60',
  (formulas['Tax Center!C16'] || '').includes('$B$37:$Y$37') && (formulas['Tax Center!C16'] || '').includes('$B$60:$Y$60'), formulas['Tax Center!C16']]);
audits.push(['Disclaimer present verbatim (mock)', Object.values(writes).some(v => v === api.TAX.DISCLAIMER), '']);
audits.push(['Disclaimer present verbatim (blank)', captures.blank.some(r => r.kind === 'value' && r.val === api.TAX.DISCLAIMER), '']);
audits.push(['Mileage D15 formula uses cc_mileage_rate', (formulas['Mileage!D15'] || '').includes('cc_mileage_rate'), '']);
audits.push(['Mileage G11 total formula present', (formulas['Mileage!G11'] || '').includes('SUM'), '']);
audits.push(['Invoices register first data row 15 (#1001 formula)', (formulas['Invoices!A15'] || '').includes('1001'), formulas['Invoices!A15']]);
audits.push(['P&L flags live in row 60', !!formulas['P&L!B60'], formulas['P&L!B60'] ? 'present' : 'missing']);
audits.push(['Dashboard N4 seed targets engine revenue row', (formulas['Dashboard!N4'] || '').includes('$B$35:$Y$35'), '']);

let cFail = 0;
for (const [name, ok, got] of audits) {
  if (!ok) cFail++;
  console.log('  ' + (ok ? 'PASS' : 'FAIL got: ' + got) + '  ' + name);
}
console.log('c. cross-reference audit: ' + (cFail === 0 ? 'OK (' + audits.length + ' checks)' : 'FAIL (' + cFail + ' of ' + audits.length + ')'));

process.exit(bad + d1 + d2 + cFail ? 1 : 0);
