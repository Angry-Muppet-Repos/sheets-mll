/* Static-verification harness for ColumnCo_Workbench_v1.gs (template era)
   - executes mock + blank builds against a stub SpreadsheetApp with
     GRID ENFORCEMENT (1,000×26 default; writes beyond throw unless
     ensureGrid_ grew the sheet) and a CELL VALUE STORE
   - checks: b formula balance · c cross-reference audit · d mode audit ·
     e mock integrity · f functional tests (intake + save-as-template)   */
'use strict';
const fs = require('fs');
const src = fs.readFileSync('apps_script/ColumnCo_Workbench_v1.gs', 'utf8');

const COL = s => { let c = 0; for (const ch of s) c = c * 26 + ch.charCodeAt(0) - 64; return c; };
const LETTER = n => { let s = ''; while (n > 0) { const m = (n - 1) % 26; s = String.fromCharCode(65 + m) + s; n = Math.floor((n - 1) / 26); } return s; };
function parseA1(ref) {
  const m = ref.match(/^([A-Z]+)(\d+)(?::([A-Z]+)(\d+))?$/);
  if (!m) throw new Error('bad A1: ' + ref);
  const c1 = COL(m[1]), r1 = +m[2];
  const c2 = m[3] ? COL(m[3]) : c1, r2 = m[4] ? +m[4] : r1;
  return { row: Math.min(r1, r2), col: Math.min(c1, c2), numRows: Math.abs(r2 - r1) + 1, numCols: Math.abs(c2 - c1) + 1 };
}

const captures = { mock: [], blank: [], func: [] };
let CURRENT_MODE = 'mock';
const record = rec => { if (CURRENT_MODE !== 'func') captures[CURRENT_MODE].push(rec); };

class RangeStub {
  constructor(sheet, row, col, numRows, numCols) {
    Object.assign(this, { sheet, row, col, numRows, numCols });
  }
  assertInGrid() {
    if (this.row + this.numRows - 1 > this.sheet.maxRows ||
        this.col + this.numCols - 1 > this.sheet.maxCols) {
      throw new Error('Service Spreadsheets failed (emulated): write at ' + this.sheet.name + '!' + this.getA1Notation() +
        ' exceeds grid ' + this.sheet.maxRows + 'x' + this.sheet.maxCols + ' — missing ensureGrid_?');
    }
  }
  getA1Notation() {
    const a = LETTER(this.col) + this.row;
    if (this.numRows === 1 && this.numCols === 1) return a;
    return a + ':' + LETTER(this.col + this.numCols - 1) + (this.row + this.numRows - 1);
  }
  getRow() { return this.row; }
  getColumn() { return this.col; }
  store(r, c, v) { this.sheet.cells[(this.row + r) + ',' + (this.col + c)] = v; }
  fetch(r, c) { const v = this.sheet.cells[(this.row + r) + ',' + (this.col + c)]; return v === undefined ? '' : v; }
  setValue(v) {
    this.assertInGrid();
    this.store(0, 0, v);
    record({ sheet: this.sheet.name, a1: this.getA1Notation(), kind: 'value', val: v });
    return this;
  }
  setValues(vals) {
    this.assertInGrid();
    if (!Array.isArray(vals) || vals.length !== this.numRows || vals.some(r => !Array.isArray(r) || r.length !== this.numCols)) {
      throw new Error('setValues dim mismatch at ' + this.sheet.name + '!' + this.getA1Notation() +
        ' expected ' + this.numRows + 'x' + this.numCols + ' got ' + vals.length + 'x' + (vals[0] ? vals[0].length : '?'));
    }
    for (let r = 0; r < vals.length; r++) for (let c = 0; c < vals[r].length; c++) {
      this.store(r, c, vals[r][c]);
      record({ sheet: this.sheet.name, a1: LETTER(this.col + c) + (this.row + r), kind: 'value', val: vals[r][c] });
    }
    return this;
  }
  setFormulas(vals) {
    this.assertInGrid();
    if (!Array.isArray(vals) || vals.length !== this.numRows || vals.some(r => !Array.isArray(r) || r.length !== this.numCols)) {
      throw new Error('setFormulas dim mismatch at ' + this.sheet.name + '!' + this.getA1Notation());
    }
    for (let r = 0; r < vals.length; r++) for (let c = 0; c < vals[r].length; c++) {
      if (vals[r][c]) record({ sheet: this.sheet.name, a1: LETTER(this.col + c) + (this.row + r), kind: 'formula', val: vals[r][c] });
    }
    return this;
  }
  setFormula(f) {
    this.assertInGrid();
    record({ sheet: this.sheet.name, a1: this.getA1Notation(), kind: 'formula', val: f });
    return this;
  }
  setFormulaR1C1(f) {
    this.assertInGrid();
    record({ sheet: this.sheet.name, a1: this.getA1Notation(), kind: 'formulaR1C1', val: f });
    return this;
  }
  getValues() {
    const out = [];
    for (let r = 0; r < this.numRows; r++) {
      const row = [];
      for (let c = 0; c < this.numCols; c++) row.push(this.fetch(r, c));
      out.push(row);
    }
    return out;
  }
  getValue() { return this.fetch(0, 0); }
  createFilter() { return { remove() {} }; }
}
['setBorder','setFontFamily','setFontSize','setFontWeight','setFontStyle',
 'setFontColor','setHorizontalAlignment','setVerticalAlignment','setWrap',
 'breakApart','clearDataValidations','clearContent','sort','activate',
 'setFontLine','setTextRotation'].forEach(m => { RangeStub.prototype[m] = function () { return this; }; });
['merge','setBackground','setNumberFormat','setDataValidation','insertCheckboxes'].forEach(m => {
  RangeStub.prototype[m] = function () { this.assertInGrid(); return this; };
});

class SheetStub {
  constructor(ss, name) { this.ss = ss; this.name = name; this.maxRows = 1000; this.maxCols = 26; this.cells = {}; }
  getName() { return this.name; }
  insertRowsAfter(after, n) { this.maxRows += n; return this; }
  insertColumnsAfter(after, n) { this.maxCols += n; return this; }
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
  getMaxRows() { return this.maxRows; }
  getMaxColumns() { return this.maxCols; }
  clear() { this.cells = {}; return this; }
  clearConditionalFormatRules() { return this; }
  getConditionalFormatRules() { return []; }
  setConditionalFormatRules() { return this; }
  getCharts() { return []; }
  removeChart() {}
  insertChart() {}
  newChart() { return chartBuilder(); }
  setHiddenGridlines() { return this; }
  setRowHeight() { return this; } setRowHeights() { return this; }
  setColumnWidth() { return this; } setColumnWidths() { return this; }
  hideColumns() {} hideRows() {} showRows() {} showColumns() {}
  setFrozenRows() {} setFrozenColumns() {}
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
  getRangeByName() { return null; }
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
  src + '\n;return { buildWorkbook, TABS, ENGINE_ROWS, PALETTES, MOCK, TEMPLATES, MOCK_TB_TICKS, CHANNEL_DEFAULTS, PROD, generateMockSales_, generateMockMarketing_, generateMockStats_, generateMockChecklist_, createProductFromIntake, saveStepsAsTemplateCore_, listTemplateNames_, getTemplateSteps_, parseStep_, PRODUCT_CAPACITY };');
const api = factory(SpreadsheetApp, PropertiesService, Utilities, Logger, HtmlService);

const namedByMode = {};
for (const mode of ['mock', 'blank']) {
  CURRENT_MODE = mode;
  ss = new SSStub();
  api.buildWorkbook(mode);
  namedByMode[mode] = { ...ss.named };
}
console.log('both build modes executed under grid enforcement: OK');
console.log('captured writes — mock: ' + captures.mock.length + ', blank: ' + captures.blank.length);

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
let bad = 0, formulaCount = 0;
for (const mode of ['mock', 'blank']) {
  for (const rec of captures[mode]) {
    if (rec.kind === 'formula' || rec.kind === 'formulaR1C1') {
      formulaCount++;
      if (!balanced(rec.val)) { bad++; console.log('  UNBALANCED [' + mode + '] ' + rec.sheet + '!' + rec.a1 + ' :: ' + rec.val); }
      if (rec.kind === 'formula' && rec.val.charAt(0) !== '=') { bad++; console.log('  NOT-A-FORMULA [' + mode + '] ' + rec.sheet + '!' + rec.a1); }
    }
  }
}
console.log('b. formula balance: ' + (bad === 0 ? 'OK' : 'FAIL') + ' (' + formulaCount + ' formula writes checked, ' + bad + ' bad)');

// ───────────── d. mode audit ─────────────
let d1 = 0;
for (const mode of ['mock', 'blank']) {
  for (const rec of captures[mode]) {
    if (rec.kind === 'value' && typeof rec.val === 'string' && rec.val.charAt(0) === '=') {
      d1++; console.log('  VALUE-STARTS-WITH-= [' + mode + '] ' + rec.sheet + '!' + rec.a1 + ' :: ' + rec.val.slice(0, 60));
    }
  }
}
console.log('d1. no value writes begin with "=": ' + (d1 === 0 ? 'OK' : 'FAIL (' + d1 + ')'));

const forbidden = ['Juniper', 'Jules', 'Wedding Suite', 'Everyday Planner', 'Recipe Card',
  'Teacher Bundle', 'Minimal Budget Sheets', 'Holiday Gift Tags', 'Kids Chore Charts', 'junipr',
  'Raise the budget', 'Retire it or stop', 'price test is overdue'];
let d2 = 0;
for (const rec of captures.blank) {
  if (typeof rec.val !== 'string') continue;
  for (const f of forbidden) {
    if (rec.val.indexOf(f) !== -1) { d2++; console.log('  MOCK-LEAK [blank] ' + rec.sheet + '!' + rec.a1 + ' :: ' + rec.val.slice(0, 70)); }
  }
}
console.log('d2. blank build mock-leak scan: ' + (d2 === 0 ? 'OK (templates/channels seed both modes by design)' : 'FAIL (' + d2 + ')'));

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
const gatedFns = ['generateMockSales_', 'generateMockMarketing_', 'generateMockStats_', 'generateMockChecklist_', 'MOCK', 'mockMonthDates_', 'MOCK_TB_TICKS'];
let d3bad = 0;
Object.keys(byFn).forEach(fn => {
  if (gatedFns.includes(fn)) { console.log('   ' + fn + ': ' + byFn[fn].length + ' uses — constants/generator (invoked only behind mode gates)'); return; }
  const fnStart = lines.findIndex(l => l.startsWith('function ' + fn));
  let allGated = true;
  for (const n of byFn[fn]) {
    let gated = false;
    for (let i = n - 1; i >= fnStart; i--) {
      if (/mode\s*===\s*'mock'/.test(lines[i])) { gated = true; break; }
    }
    if (!gated) { d3bad++; allGated = false; console.log('   UNGATED MOCK use in ' + fn + ' line ' + n); }
  }
  if (allGated) console.log('   ' + fn + ': ' + byFn[fn].length + ' uses — all behind mode === \'mock\' gates');
});
console.log('d3. MOCK gating: ' + (d3bad === 0 ? 'OK' : 'FAIL (' + d3bad + ')'));

// ───────────── c. cross-reference audit ─────────────
const writes = {};
for (const rec of captures.mock) if (rec.kind === 'value') writes[rec.sheet + '!' + rec.a1] = rec.val;
const formulas = {};
for (const rec of captures.mock) if (rec.kind === 'formula') formulas[rec.sheet + '!' + rec.a1] = rec.val;
const r1c1 = {};
for (const rec of captures.mock) if (rec.kind === 'formulaR1C1') r1c1[rec.sheet + '!' + rec.a1] = rec.val;

const expectNamed = {
  cc_active_palette: '_Config!B40',
  cc_palettes: '_Config!A3:I26',
  cc_products_list: 'Products!B10:B259',
  cc_products_status: 'Products!C10:C259',
  cc_products_table: 'Products!A10:O259',
  cc_templates_list: 'Templates!B9:I9',
  cc_checklist: 'Checklist!A10:F7509',
  cc_channels_list: 'Channels!A10:A21',
  cc_channel_fees: 'Channels!A10:C21',
  cc_sales_log: 'Sales Log!A10:I10009',
  cc_engine_months: '_Engine!B1:Y1',
  cc_engine_portfolio: '_Engine!B2:Y9',
  cc_engine_products: '_Engine!B30:Y279',
  cc_dashboard_month: 'Dashboard!N4',
  cc_trends_window: 'Trends!N7',
  cc_selected_product: 'Product View!C10',
};
const audits = [];
const named = namedByMode.mock;
for (const [k, v] of Object.entries(expectNamed)) {
  audits.push(['named range ' + k + ' = ' + v, named[k] === v, named[k]]);
}
audits.push(['blank build defines the same named ranges', JSON.stringify(namedByMode.blank) === JSON.stringify(namedByMode.mock), '']);
// engine
audits.push(['_Engine A4 = NetRevenue', writes['_Engine!A4'] === 'NetRevenue', writes['_Engine!A4']]);
audits.push(['engine product names offset is R[-20]C2 (Products data row 10)', (r1c1['_Engine!A30:A79'] || '').includes('R[-20]C2'), r1c1['_Engine!A30:A79']]);
audits.push(['product matrix first slab at B30:Y79', (r1c1['_Engine!B30:Y79'] || '').includes('SUMIFS'), '']);
// templates
audits.push(['Templates name row: B9 = Digital Product', writes['Templates!B9'] === 'Digital Product', writes['Templates!B9']]);
audits.push(['Templates E9 = Quick List', writes['Templates!E9'] === 'Quick List', writes['Templates!E9']]);
audits.push(['Templates first step at B11', writes['Templates!B11'] === 'BUILD · Concept locked', writes['Templates!B11']]);
audits.push(['Templates seeded in blank too (library, not mock)', captures.blank.some(x => x.kind === 'value' && x.sheet === 'Templates' && x.val === 'Digital Product'), '']);
// checklist
audits.push(['Checklist headers A9..F9', writes['Checklist!A9'] === 'Product' && writes['Checklist!D9'] === 'Done' && writes['Checklist!F9'] === 'Key', '']);
audits.push(['Checklist key R1C1 prewired (first slab F10:F1009)', (r1c1['Checklist!F10:F1009'] || '').includes('RC1&"|"&RC5'), r1c1['Checklist!F10:F1009']]);
audits.push(['Checklist first mock row = Wedding Suite step 1', writes['Checklist!A10'] === 'Wedding Suite No. 4' && writes['Checklist!C10'] === 'Concept locked', writes['Checklist!C10']]);
audits.push(['blank build seeds NO checklist rows', !captures.blank.some(x => x.sheet === 'Checklist' && x.kind === 'value' && x.a1 === 'A10' && x.val !== ''), '']);
// products
audits.push(['Products header B9/J9/K9', writes['Products!B9'] === 'Product' && writes['Products!J9'] === 'Progress' && writes['Products!K9'] === 'Next step', '']);
audits.push(['Progress formula counts the product\'s own steps', (formulas['Products!J10'] || '').includes('COUNTIFS') && (formulas['Products!J10'] || '').includes("'Checklist'"), '']);
audits.push(['Next-step formula uses MINIFS over order + key match', (formulas['Products!K10'] || '').includes('MINIFS') && (formulas['Products!K10'] || '').includes('&"|"&'), '']);
audits.push(['Stale formula MAXIFS over Sales Log', (formulas['Products!M10'] || '').includes('MAXIFS'), '']);
audits.push(['Mock product row has template name', writes['Products!D10'] === 'Digital Product', writes['Products!D10']]);
// sales (unchanged contracts)
audits.push(['Sales Net R1C1 uses cc_channel_fees', (r1c1['Sales Log!G10:G2009'] || '').includes('VLOOKUP(RC3,cc_channel_fees'), '']);
// product view
audits.push(['PV full-checklist rows key-match the selected product', Object.entries(formulas).some(([k, v]) => k.startsWith('Product View!') && v.includes('cc_selected_product&"|"&1') && v.includes('MATCH')), '']);
audits.push(['PV trend helper at row 100', (formulas['Product View!B100'] || '').includes('cc_selected_product'), '']);

let cFail = 0;
for (const [name, ok, got] of audits) {
  if (!ok) cFail++;
  console.log('  ' + (ok ? 'PASS' : 'FAIL got: ' + got) + '  ' + name);
}
console.log('c. cross-reference audit: ' + (cFail === 0 ? 'OK (' + audits.length + ' checks)' : 'FAIL (' + cFail + ' of ' + audits.length + ')'));

// ───────────── e. mock integrity ─────────────
const sales = api.generateMockSales_();
const mk = api.generateMockMarketing_();
const chkRows = api.generateMockChecklist_();
const fee = {}; api.CHANNEL_DEFAULTS.forEach(c => fee[c[0]] = { p: c[1], f: c[2] });
const code = d => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
const net = r => Math.round((r[4] - (r[4] * fee[r[2]].p + fee[r[2]].f * r[3])) * 100) / 100;
const months = [...new Set(sales.map(r => code(r[0])))].sort();
const byM = {}; months.forEach(m => byM[m] = 0);
const byP = {};
for (const r of sales) { const n = net(r); byM[code(r[0])] += n; byP[r[1]] = (byP[r[1]] || 0) + n; }
const totalNet = Object.values(byP).reduce((a, b) => a + b, 0);
const heroNet = byP['Wedding Suite No. 4'] || 0;
const dudNet = byP['Minimal Budget Sheets'] || 0;
const heroSpend = mk.filter(r => r[1] === 'Wedding Suite No. 4').reduce((a, r) => a + r[4], 0);
const dudSpend = mk.filter(r => r[1] === 'Minimal Budget Sheets').reduce((a, r) => a + r[4], 0);
const m0 = byM[months[0]], m8 = byM[months[8]];
// checklist truths
const perProduct = {};
for (const r of chkRows) {
  perProduct[r[0]] = perProduct[r[0]] || { total: 0, done: 0, firstFalse: null };
  perProduct[r[0]].total++;
  if (r[3]) perProduct[r[0]].done++;
  else if (perProduct[r[0]].firstFalse === null) perProduct[r[0]].firstFalse = r[2];
}
const pp = n => perProduct[n] || {};
const eChecks = [
  ['9 mock months', months.length === 9, months.length],
  ['net ramp m8/m0 in [1.9, 2.5]', m8 / m0 > 1.9 && m8 / m0 < 2.5, (m8 / m0).toFixed(2)],
  ['hero share 55-65% of lifetime net', heroNet / totalNet > 0.55 && heroNet / totalNet < 0.65, (heroNet / totalNet * 100).toFixed(1) + '%'],
  ['hero ROAS 3.5-4.5', heroNet / heroSpend > 3.5 && heroNet / heroSpend < 4.5, (heroNet / heroSpend).toFixed(2)],
  ['dud net < $60 with ROAS < 0.5', dudNet < 60 && dudNet / dudSpend < 0.5, dudNet.toFixed(2)],
  ['sales rows 450-750', sales.length >= 450 && sales.length <= 750, sales.length],
  ['checklist = 8 products × 30 steps = 240 rows', chkRows.length === 240, chkRows.length],
  ['4 listed products fully ticked', ['Wedding Suite No. 4', 'Everyday Planner Kit', 'Recipe Card Set', 'Minimal Budget Sheets'].every(n => pp(n).done === 30), ''],
  ['Teacher Bundle 28/30, next = Week-1 stats logged', pp('Teacher Bundle').done === 28 && pp('Teacher Bundle').firstFalse === 'Week-1 stats logged', pp('Teacher Bundle').firstFalse],
  ['Gift Tags 14/30 (47%), next = Screenshots (hero order)', pp('Holiday Gift Tags').done === 14 && pp('Holiday Gift Tags').firstFalse === 'Screenshots (hero order)', pp('Holiday Gift Tags').firstFalse],
  ['WS5 5/30 (17%), next = Final files exported', pp('Wedding Suite No. 5').done === 5 && pp('Wedding Suite No. 5').firstFalse === 'Final files exported', pp('Wedding Suite No. 5').firstFalse],
  ['Chore Charts 0/30', pp('Kids Chore Charts').done === 0, pp('Kids Chore Charts').done],
  ['template library: 4 starters, step counts 30/28/20/10',
    api.TEMPLATES.length === 4 && JSON.stringify(api.TEMPLATES.map(t => t[1].length)) === '[30,28,20,10]',
    api.TEMPLATES.map(t => t[1].length).join('/')],
  ['every template step parses GROUP · Step', api.TEMPLATES.every(t => t[1].every(st => api.parseStep_(st).group !== 'GENERAL')), ''],
];
let eFail = 0;
for (const [n2, ok, got] of eChecks) { if (!ok) eFail++; console.log('  ' + (ok ? 'PASS' : 'FAIL got ' + got) + '  ' + n2); }
console.log('e. mock integrity: ' + (eFail === 0 ? 'OK (' + eChecks.length + ' checks)' : 'FAIL (' + eFail + ')'));

// ───────────── f. functional tests — intake + save-as-template ─────────────
CURRENT_MODE = 'func';
ss = new SSStub();
api.buildWorkbook('mock');
const fChecks = [];
const msg1 = api.createProductFromIntake({ name: 'Test Product', template: 'Digital Product', status: 'Building', price: '12', target: '2026-08-01' });
fChecks.push(['intake returns Added…30 steps', msg1 === 'Added "Test Product" with 30 steps.', msg1]);
const prodsSheet = ss.sheets['Products'];
fChecks.push(['intake wrote Products row 18 (after 8 mock rows)', prodsSheet.getRange(18, 2).getValue() === 'Test Product' && prodsSheet.getRange(18, 3).getValue() === 'Building', prodsSheet.getRange(18, 2).getValue()]);
const chkSheet = ss.sheets['Checklist'];
fChecks.push(['intake appended checklist block at row 250', chkSheet.getRange(250, 1).getValue() === 'Test Product' && chkSheet.getRange(250, 3).getValue() === 'Concept locked', String(chkSheet.getRange(250, 1).getValue()) + '/' + String(chkSheet.getRange(250, 3).getValue())]);
fChecks.push(['intake rejects duplicates', api.createProductFromIntake({ name: 'Test Product', template: 'Quick List' }).indexOf('already') !== -1, '']);
fChecks.push(['intake rejects blank name', api.createProductFromIntake({ name: '  ', template: 'Quick List' }).indexOf('Type a product name') !== -1, '']);
const msg2 = api.saveStepsAsTemplateCore_('Test Product', 'My Process');
fChecks.push(['save-as-template returns Saved…30 steps', msg2 === 'Saved "My Process" (30 steps) to the Templates library.', msg2]);
const tplSheet = ss.sheets['Templates'];
fChecks.push(['new template landed in col F (next free)', tplSheet.getRange(9, 6).getValue() === 'My Process' && tplSheet.getRange(11, 6).getValue() === 'BUILD · Concept locked', String(tplSheet.getRange(9, 6).getValue())]);
fChecks.push(['library now lists 5 templates', api.listTemplateNames_().length === 5, api.listTemplateNames_().length]);
fChecks.push(['save-as-template rejects duplicate name', api.saveStepsAsTemplateCore_('Test Product', 'Quick List').indexOf('already exists') !== -1, '']);
fChecks.push(['save-as-template rejects unknown product', api.saveStepsAsTemplateCore_('Nope', 'Another').indexOf('No checklist rows') !== -1, '']);
let fFail = 0;
for (const [n3, ok, got] of fChecks) { if (!ok) fFail++; console.log('  ' + (ok ? 'PASS' : 'FAIL got ' + got) + '  ' + n3); }
console.log('f. functional (intake + save-as-template): ' + (fFail === 0 ? 'OK (' + fChecks.length + ' checks)' : 'FAIL (' + fFail + ')'));

process.exit(bad + d1 + d2 + d3bad + cFail + eFail + fFail ? 1 : 0);
