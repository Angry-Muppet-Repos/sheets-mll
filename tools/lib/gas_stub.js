/* Shared SpreadsheetApp stub for the Column & Co. verification + preview
   tools. Extracted from tools/verify_payoff.js so both tools execute builds
   against IDENTICAL semantics: 1,000×26 grid enforcement, cell value store,
   filter semantics, and merge-overlap geometry (the two live-QA build-killer
   classes are modeled here).

   makeStubEnv(opts) → env
     opts.onRecord(rec)     every value/formula write (verify's capture hook)
     opts.getMode()         current build-mode label (tags merge violations)
     opts.recordStyles      when true, record the visual state that the
                            verify harness treats as no-ops — backgrounds,
                            fonts, alignments, wrap, number formats, borders,
                            row heights, column widths, hidden rows/cols —
                            per sheet, for tools/render_preview.js.

   env: { SpreadsheetApp, PropertiesService, Utilities, Logger, HtmlService,
          SSStub, newSS(), getActive(), mergeViolations, LETTER, COL, parseA1 }

   Style-recording stores (per SheetStub, only when recordStyles):
     sheet.styles        { 'r,c': {bg,font,size,bold,italic,color,h,v,wrap} }
     sheet.formulaCells  { 'r,c': '=…' }
     sheet.formats       { 'r,c': '$#,##0' }
     sheet.rowHeightMap  { row: px }   (default 21)
     sheet.colWidthMap   { col: px }   (default 100)
     sheet.borderRecs    [ {r,c,nr,nc,args:[…9]} ]
     sheet.hiddenColSet / sheet.hiddenRowSet   Set of indices
     sheet.merges        [ {r,c,nr,nc} ]  (always modeled, styles or not)   */
'use strict';

const COL = s => { let c = 0; for (const ch of s) c = c * 26 + ch.charCodeAt(0) - 64; return c; };
const LETTER = n => { let s = ''; while (n > 0) { const m = (n - 1) % 26; s = String.fromCharCode(65 + m) + s; n = Math.floor((n - 1) / 26); } return s; };
function parseA1(ref) {
  const m = ref.match(/^([A-Z]+)(\d+)(?::([A-Z]+)(\d+))?$/);
  if (!m) throw new Error('bad A1: ' + ref);
  const c1 = COL(m[1]), r1 = +m[2];
  const c2 = m[3] ? COL(m[3]) : c1, r2 = m[4] ? +m[4] : r1;
  return { row: Math.min(r1, r2), col: Math.min(c1, c2), numRows: Math.abs(r2 - r1) + 1, numCols: Math.abs(c2 - c1) + 1 };
}

const rectsOverlap = (a, b) => !(a.r + a.nr - 1 < b.r || b.r + b.nr - 1 < a.r || a.c + a.nc - 1 < b.c || b.c + b.nc - 1 < a.c);
const rectContains = (a, b) => b.r >= a.r && b.c >= a.c && b.r + b.nr - 1 <= a.r + a.nr - 1 && b.c + b.nc - 1 <= a.c + a.nc - 1;
const rectEqual = (a, b) => a.r === b.r && a.c === b.c && a.nr === b.nr && a.nc === b.nc;

function makeStubEnv(opts) {
  opts = opts || {};
  const record = opts.onRecord || (() => {});
  const getMode = opts.getMode || (() => 'mock');
  const RS = !!opts.recordStyles;
  const mergeViolations = [];
  let activeSS = null;

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
    getNumRows() { return this.numRows; }
    getNumColumns() { return this.numCols; }
    getSheet() { return this.sheet; }
    offset(dr, dc, nr, nc) { return new RangeStub(this.sheet, this.row + dr, this.col + dc, nr == null ? this.numRows : nr, nc == null ? this.numCols : nc); }
    store(r, c, v) { this.sheet.cells[(this.row + r) + ',' + (this.col + c)] = v; }
    fetch(r, c) { const v = this.sheet.cells[(this.row + r) + ',' + (this.col + c)]; return v === undefined ? '' : v; }
    // style recorder: merge a property over every cell of the range
    styleEach(fn) {
      if (!RS) return this;
      for (let r = 0; r < this.numRows; r++) for (let c = 0; c < this.numCols; c++) {
        const k = (this.row + r) + ',' + (this.col + c);
        let st = this.sheet.styles[k];
        if (!st) st = this.sheet.styles[k] = {};
        fn(st, r, c);
      }
      return this;
    }
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
        if (vals[r][c]) {
          record({ sheet: this.sheet.name, a1: LETTER(this.col + c) + (this.row + r), kind: 'formula', val: vals[r][c] });
          if (RS) this.sheet.formulaCells[(this.row + r) + ',' + (this.col + c)] = vals[r][c];
        }
      }
      return this;
    }
    setFormula(f) {
      this.assertInGrid();
      record({ sheet: this.sheet.name, a1: this.getA1Notation(), kind: 'formula', val: f });
      if (RS) this.sheet.formulaCells[this.row + ',' + this.col] = f;
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
    // Filter semantics: one filter per sheet, clear() does NOT remove it,
    // and merges that cross its borders throw (the rebuild-over-stale lesson).
    createFilter() {
      this.assertInGrid();
      if (this.sheet.filter) {
        throw new Error("You can't create a filter in a sheet containing a filter (emulated): " + this.sheet.name);
      }
      const sheet = this.sheet;
      sheet.filter = {
        range: { row: this.row, col: this.col, numRows: this.numRows, numCols: this.numCols },
        remove() { sheet.filter = null; },
      };
      return sheet.filter;
    }
    rect() { return { r: this.row, c: this.col, nr: this.numRows, nc: this.numCols }; }
    merge() {
      this.assertInGrid();
      const f = this.sheet.filter;
      if (f) {
        const r = f.range;
        const intersects = !(this.row + this.numRows - 1 < r.row || r.row + r.numRows - 1 < this.row ||
                             this.col + this.numCols - 1 < r.col || r.col + r.numCols - 1 < this.col);
        const contained = this.row >= r.row && this.col >= r.col &&
          this.row + this.numRows - 1 <= r.row + r.numRows - 1 &&
          this.col + this.numCols - 1 <= r.col + r.numCols - 1;
        if (intersects && !contained) {
          throw new Error("You can't merge cells that cross the borders of an existing filter (emulated): " +
            this.sheet.name + '!' + this.getA1Notation());
        }
      }
      const R = this.rect();
      for (const M of this.sheet.merges) {
        if (rectEqual(R, M)) return this;                       // idempotent re-merge
        if (rectsOverlap(R, M) && !rectContains(R, M)) {
          mergeViolations.push({ mode: getMode(), sheet: this.sheet.name, a1: this.getA1Notation(), over: LETTER(M.c) + M.r });
          throw new Error('You must select all cells in a merged range to merge or unmerge them (emulated): ' +
            this.sheet.name + '!' + this.getA1Notation() + ' partially overlaps the merge at ' + LETTER(M.c) + M.r);
        }
      }
      this.sheet.merges = this.sheet.merges.filter(M => !rectContains(R, M));
      this.sheet.merges.push(R);
      return this;
    }
    mergeAcross() { return this.merge(); }
    breakApart() {
      const R = this.rect();
      for (const M of this.sheet.merges) {
        if (rectsOverlap(R, M) && !rectContains(R, M)) {
          mergeViolations.push({ mode: getMode(), sheet: this.sheet.name, a1: this.getA1Notation(), op: 'breakApart', over: LETTER(M.c) + M.r });
          throw new Error('breakApart crosses a merge border (emulated): ' + this.sheet.name + '!' + this.getA1Notation());
        }
      }
      this.sheet.merges = this.sheet.merges.filter(M => !rectContains(R, M));
      return this;
    }
  }
  // Fluent styling — no grid enforcement (as in real Sheets they'd apply to
  // the intersection); records visual state when the recorder is on.
  const styleSetters = {
    setFontFamily: (st, v) => { st.font = v; },
    setFontSize: (st, v) => { st.size = v; },
    setFontWeight: (st, v) => { st.bold = (v === 'bold'); },
    setFontStyle: (st, v) => { st.italic = (v === 'italic'); },
    setFontColor: (st, v) => { st.color = v; },
    setHorizontalAlignment: (st, v) => { st.h = v; },
    setVerticalAlignment: (st, v) => { st.v = v; },
    setWrap: (st, v) => { st.wrap = !!v; },
  };
  Object.keys(styleSetters).forEach(m => {
    RangeStub.prototype[m] = function (v) { return this.styleEach(st => styleSetters[m](st, v)); };
  });
  ['setFontColors','setWraps','clearDataValidations','sort','activate','setComment',
   'setFontLine','setTextRotation','setHorizontalAlignments','setVerticalAlignments',
   'setFontFamilies','setFontSizes','setFontWeights','setFontStyles','setShowHyphenation',
   'clearFormat','clearNote','setBackgroundRGB','copyTo','setVerticalText'].forEach(m => { RangeStub.prototype[m] = function () { return this; }; });
  // Grid-enforced writes that touch cells.
  RangeStub.prototype.setBackground = function (color) {
    this.assertInGrid();
    return this.styleEach(st => { st.bg = color; });
  };
  RangeStub.prototype.setBackgrounds = function (matrix) {
    this.assertInGrid();
    if (RS && Array.isArray(matrix)) {
      this.styleEach((st, r, c) => { if (matrix[r] && matrix[r][c] != null) st.bg = matrix[r][c]; });
    }
    return this;
  };
  RangeStub.prototype.setNumberFormat = function (fmt) {
    this.assertInGrid();
    if (RS) for (let r = 0; r < this.numRows; r++) for (let c = 0; c < this.numCols; c++) this.sheet.formats[(this.row + r) + ',' + (this.col + c)] = fmt;
    return this;
  };
  RangeStub.prototype.setBorder = function () {
    if (RS) this.sheet.borderRecs.push({ r: this.row, c: this.col, nr: this.numRows, nc: this.numCols, args: Array.prototype.slice.call(arguments) });
    return this;
  };
  ['setNumberFormats','setDataValidation','setDataValidations','insertCheckboxes',
   'removeCheckboxes','setNote','setNotes'].forEach(m => {
    RangeStub.prototype[m] = function () { this.assertInGrid(); return this; };
  });
  RangeStub.prototype.clearContent = function () {
    for (let r = 0; r < this.numRows; r++) for (let c = 0; c < this.numCols; c++) this.store(r, c, '');
    return this;
  };
  RangeStub.prototype.clear = function () { return this.clearContent(); };

  class SheetStub {
    constructor(ss, name) {
      this.ss = ss; this.name = name; this.maxRows = 1000; this.maxCols = 26;
      this.cells = {}; this.filter = null; this.hidden = false; this.merges = [];
      this.styles = {}; this.formulaCells = {}; this.formats = {};
      this.rowHeightMap = {}; this.colWidthMap = {}; this.borderRecs = [];
      this.hiddenColSet = new Set(); this.hiddenRowSet = new Set();
      this.gridlinesHidden = false; this.frozenRows = 0;
    }
    getName() { return this.name; }
    insertRowsAfter(after, n) { this.maxRows += n; return this; }
    insertColumnsAfter(after, n) { this.maxCols += n; return this; }
    insertRowsBefore(before, n) { this.maxRows += n; return this; }
    insertColumnsBefore(before, n) { this.maxCols += n; return this; }
    deleteRows() { return this; } deleteColumns() { return this; }
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
    clear() { this.cells = {}; if (RS) { this.styles = {}; this.formulaCells = {}; this.formats = {}; this.borderRecs = []; } return this; }
    clearContents() { this.cells = {}; return this; }
    clearConditionalFormatRules() { return this; }
    getConditionalFormatRules() { return []; }
    setConditionalFormatRules() { return this; }
    getCharts() { return []; }
    removeChart() {}
    insertChart() {}
    newChart() { return chartBuilder(); }
    setHiddenGridlines(b) { if (RS) this.gridlinesHidden = (b !== false); return this; }
    setRowHeight(row, h) { if (RS) this.rowHeightMap[row] = h; return this; }
    setRowHeights(start, n, h) { if (RS) for (let i = 0; i < n; i++) this.rowHeightMap[start + i] = h; return this; }
    setColumnWidth(col, w) { if (RS) this.colWidthMap[col] = w; return this; }
    setColumnWidths(start, n, w) { if (RS) for (let i = 0; i < n; i++) this.colWidthMap[start + i] = w; return this; }
    autoResizeColumn() { return this; }
    hideColumns(col, n) { if (RS) for (let i = 0; i < (n || 1); i++) this.hiddenColSet.add(col + i); }
    hideRows(row, n) { if (RS) for (let i = 0; i < (n || 1); i++) this.hiddenRowSet.add(row + i); }
    showRows(row, n) { if (RS) for (let i = 0; i < (n || 1); i++) this.hiddenRowSet.delete(row + i); }
    showColumns(col, n) { if (RS) for (let i = 0; i < (n || 1); i++) this.hiddenColSet.delete(col + i); }
    hideColumn() {} hideRow() {} showColumn() {} showRow() {}
    setFrozenRows(n) { if (RS) this.frozenRows = n || 0; }
    setFrozenColumns() {}
    getFilter() { return this.filter; }
    // real semantics: last row containing content (clearContent stores '')
    getLastRow() {
      let last = 0;
      for (const k in this.cells) {
        if (this.cells[k] === '' || this.cells[k] == null) continue;
        const r = Number(k.slice(0, k.indexOf(',')));
        if (r > last) last = r;
      }
      return last;
    }
    getLastColumn() { return 1; }
    setActiveRange() { return this; }
    setActiveSelection() { return this; }
    hideSheet() { this.hidden = true; } showSheet() { this.hidden = false; } activate() {}
    setTabColor() { return this; }
    getRowHeight(r) { return (RS && this.rowHeightMap[r] != null) ? this.rowHeightMap[r] : 21; }
    getColumnWidth(c) { return (RS && this.colWidthMap[c] != null) ? this.colWidthMap[c] : 100; }
  }
  function chartBuilder() {
    const b = {};
    ['asPieChart','asColumnChart','asLineChart','asAreaChart','setOption','addRange',
     'setPosition','setNumHeaders','setColors','setBackgroundColor'].forEach(m => b[m] = () => b);
    b.build = () => ({});
    return b;
  }
  class SSStub {
    constructor() { this.sheets = {}; this.named = {}; this.order = []; }
    getSheetByName(n) { return this.sheets[n] || null; }
    insertSheet(n) { this.order.push(n); return (this.sheets[n] = new SheetStub(this, n)); }
    getSheets() { return this.order.map(n => this.sheets[n]).filter(Boolean); }
    deleteSheet(sh) { const n = typeof sh === 'string' ? sh : sh.getName(); delete this.sheets[n]; this.order = this.order.filter(x => x !== n); }
    setActiveSheet() {} moveActiveSheet() {}
    setNamedRange(name, range) { this.named[name] = range.sheet.name + '!' + range.getA1Notation(); }
    removeNamedRange(name) { delete this.named[name]; }
    getRangeByName(name) {
      const ref = this.named[name];
      if (!ref) return null;
      return this.getRange(ref);
    }
    getRange(ref) {
      const [sheetName, a1] = ref.replace(/^'/, '').split(/'?!/);
      const sh = this.sheets[sheetName] || this.insertSheet(sheetName);
      return sh.getRange(a1);
    }
    toast() {}
    getSpreadsheetTimeZone() { return 'America/Detroit'; }
    getId() { return 'STUB_SS_ID'; }
    getName() { return 'The Payoff (stub)'; }
  }
  const validationBuilder = () => {
    const b = {};
    ['requireValueInList','requireValueInRange','setAllowInvalid','requireNumberBetween',
     'requireCheckbox','setHelpText','requireNumberGreaterThan','requireNumberGreaterThanOrEqualTo',
     'requireDate','requireFormulaSatisfied','requireTextIsEmail'].forEach(m => b[m] = () => b);
    b.build = () => ({});
    return b;
  };
  const cfBuilder = () => {
    const b = {};
    b.whenFormulaSatisfied = f => { record({ sheet: '(cf)', a1: '(cf)', kind: 'formula', val: f }); return b; };
    ['whenTextEqualTo','whenTextContains','whenTextStartsWith','whenNumberGreaterThan',
     'whenNumberGreaterThanOrEqualTo','whenNumberLessThan','whenNumberLessThanOrEqualTo',
     'whenNumberEqualTo','whenNumberBetween','whenCellNotEmpty','whenCellEmpty',
     'setBackground','setFontColor','setBold','setItalic','setRanges','setGradientMaxpoint',
     'setGradientMinpoint','setGradientMidpointWithValue','setGradientMaxpointWithValue',
     'setGradientMinpointWithValue','setUnderline'].forEach(m => b[m] = () => b);
    b.build = () => ({});
    return b;
  };
  function menuBuilder() { const m = {}; ['addItem','addSeparator','addSubMenu','addToUi'].forEach(k => m[k] = () => m); return m; }
  const SpreadsheetApp = {
    getActive: () => activeSS,
    getActiveSpreadsheet: () => activeSS,
    getUi: () => ({
      createMenu: () => menuBuilder(),
      alert: () => 'ok', prompt: () => ({ getSelectedButton: () => 'ok', getResponseText: () => '' }),
      showSidebar: () => {}, showModalDialog: () => {}, showModelessDialog: () => {},
      ButtonSet: { YES_NO: 1, OK_CANCEL: 2, OK: 3 }, Button: { YES: 'YES', NO: 'NO', OK: 'OK', CANCEL: 'CANCEL' }
    }),
    newDataValidation: validationBuilder,
    newConditionalFormatRule: cfBuilder,
    BorderStyle: { SOLID: 1, SOLID_MEDIUM: 2, SOLID_THICK: 3, DASHED: 4, DOTTED: 5, DOUBLE: 6 },
    WrapStrategy: { WRAP: 1, OVERFLOW: 2, CLIP: 3 },
    flush: () => {},
  };
  const _props = {};
  const PropertiesService = {
    getDocumentProperties: () => ({
      getProperty: k => (k in _props ? _props[k] : null),
      setProperty: (k, v) => { _props[k] = v; }, deleteProperty: k => { delete _props[k]; },
      getProperties: () => ({ ..._props })
    }),
    getScriptProperties: () => PropertiesService.getDocumentProperties(),
    getUserProperties: () => PropertiesService.getDocumentProperties()
  };
  const Utilities = {
    formatDate: (d, tz, fmt) => {
      if (!(d instanceof Date)) return String(d);
      const p = n => String(n).padStart(2, '0');
      return (fmt || 'yyyy-MM-dd')
        .replace(/yyyy/g, d.getFullYear())
        .replace(/MM/g, p(d.getMonth() + 1))
        .replace(/dd/g, p(d.getDate()));
    },
    sleep: () => {},
    getUuid: () => 'uuid'
  };
  const Logger = { log: () => {} };

  // ── DriveApp stub — folder/file fixtures for the Bank-Inbox flow ──────
  // Test setup: env.DriveApp.createFolder('…') then folder.createFile(name,
  // csvText). getBlob().getDataAsString() returns the content; moveTo()
  // reparents. Iterators follow the GAS hasNext/next shape.
  let _driveSeq = 0;
  const _driveIndex = {};   // id → folder
  function driveIter(arr) { let i = 0; return { hasNext: () => i < arr.length, next: () => arr[i++] }; }
  class DriveFileStub {
    constructor(name, content, parent) { this.name = name; this.content = content == null ? '' : String(content); this.parent = parent; this.id = 'file_' + (++_driveSeq); }
    getId() { return this.id; }
    getName() { return this.name; }
    setName(n) { this.name = n; return this; }
    getBlob() { const c = this.content; return { getDataAsString: () => c, getBytes: () => Buffer.from(c) }; }
    getSize() { return this.content.length; }
    getMimeType() { return this.name.toLowerCase().endsWith('.pdf') ? 'application/pdf' : 'text/plain'; }
    moveTo(folder) {
      if (this.parent) this.parent.files = this.parent.files.filter(f => f !== this);
      folder.files.push(this); this.parent = folder; return this;
    }
    setTrashed() { if (this.parent) this.parent.files = this.parent.files.filter(f => f !== this); return this; }
  }
  class DriveFolderStub {
    constructor(name) { this.name = name; this.files = []; this.folders = []; this.id = 'fld_' + (++_driveSeq); _driveIndex[this.id] = this; }
    getId() { return this.id; }
    getName() { return this.name; }
    getUrl() { return 'https://drive.google.com/drive/folders/' + this.id; }
    createFile(name, content) { const f = new DriveFileStub(name, content, this); this.files.push(f); return f; }
    createFolder(name) { const fo = new DriveFolderStub(name); this.folders.push(fo); return fo; }
    getFiles() { return driveIter(this.files.slice()); }
    getFolders() { return driveIter(this.folders.slice()); }
    getFoldersByName(name) { return driveIter(this.folders.filter(f => f.name === name)); }
    getFilesByName(name) { return driveIter(this.files.filter(f => f.name === name)); }
  }
  const _driveRoot = new DriveFolderStub('My Drive');
  const DriveApp = {
    getRootFolder: () => _driveRoot,
    createFolder: name => _driveRoot.createFolder(name),
    getFolderById: id => { const f = _driveIndex[id]; if (!f) throw new Error('DriveApp.getFolderById (emulated): not found ' + id); return f; },
    getFoldersByName: name => {
      const all = [];
      (function walk(fo) { if (fo.name === name) all.push(fo); fo.folders.forEach(walk); })(_driveRoot);
      return driveIter(all.filter(f => f !== _driveRoot || f.name === name));
    }
  };

  const HtmlService = {
    createHtmlOutput: () => ({ setTitle: () => ({ setWidth: () => ({}) }), setWidth: () => ({}) }),
    createHtmlOutputFromFile: () => ({ setTitle: () => ({ setWidth: () => ({}) }) }),
    createTemplateFromFile: () => ({ evaluate: () => ({ setTitle: () => ({}) }) })
  };

  return {
    SpreadsheetApp, PropertiesService, Utilities, Logger, HtmlService, DriveApp,
    SSStub, DriveFolderStub, DriveFileStub,
    newSS() { activeSS = new SSStub(); return activeSS; },
    setActive(s) { activeSS = s; },
    getActive: () => activeSS,
    mergeViolations,
    LETTER, COL, parseA1
  };
}

module.exports = makeStubEnv;
