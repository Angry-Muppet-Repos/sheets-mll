/**
 * Column & Co. — The Foundation v2.1
 * 13 · Bank CSV import, paste-zone clearing, ledger maintenance, help.
 */

function importTransactions() {
  var ss = SpreadsheetApp.getActive();
  var imp = ss.getSheetByName(TABS.IMPORT);
  var tx = ss.getSheetByName(TABS.TX);
  if (!imp || !tx) return;

  var account = String(imp.getRange(IMPORT_ACCOUNT_CELL).getValue() || '').trim();
  var raw = String(imp.getRange(IMPORT_PASTE_ANCHOR).getValue() || '').trim();
  if (!raw) { ss.toast('Paste a CSV into the green zone first.', CC.BRAND, 4); return; }

  var lines = raw.split(/\r?\n/).filter(function (l) { return l.trim() !== ''; });
  if (lines.length < 2) { ss.toast('No data rows found.', CC.BRAND, 4); return; }

  var header = parseCsvLine_(lines[0]);
  var cols = sniffColumns_(header);
  if (cols.amount < 0 || cols.date < 0) {
    ss.toast('Could not detect Date/Amount columns. Supported: Chase, BoA, Wells, Cap One, Ally, Citi, USAA, Discover, Amex.', CC.BRAND, 6);
    return;
  }

  var rules = loadKeywordRules_(ss);
  var out = [], income = [];
  for (var i = 1; i < lines.length; i++) {
    var f = parseCsvLine_(lines[i]);
    if (f.length < 2) continue;
    var date = parseDate_(f[cols.date]);
    var desc = (f[cols.desc] || '').trim();
    var amount = parseAmount_(f, cols);
    if (amount === null) continue;
    var category = (amount > 0) ? 'Income' : categorize_(desc, rules);
    out.push([date, desc, amount, category, account, '']);
    if (amount > 0) income.push([date, desc, amount]);
  }
  if (!out.length) { ss.toast('No valid rows parsed.', CC.BRAND, 4); return; }

  var firstEmpty = findFirstEmptyTxRow_(tx);
  tx.getRange(firstEmpty, 1, out.length, 6).setValues(out);

  // surface income rows in the Review block (Bank Import row 26+)
  if (income.length) {
    imp.getRange(26, 1, income.length, 3).setValues(income);
    imp.getRange(26, 1, income.length, 1).setNumberFormat('mmm d, yyyy');
    imp.getRange(26, 3, income.length, 1).setNumberFormat('$#,##0.00');
  }

  renumberLedger();
  ss.toast('Imported ' + out.length + ' transactions', CC.BRAND, 4);
}

function clearPasteZone() {
  var ui = SpreadsheetApp.getUi();
  var resp = ui.alert('Clear Paste Zone', 'Reset the paste zone to the placeholder CSV?', ui.ButtonSet.YES_NO);
  if (resp !== ui.Button.YES) return;
  var imp = SpreadsheetApp.getActive().getSheetByName(TABS.IMPORT);
  imp.getRange(IMPORT_PASTE_ANCHOR).setValue(DEFAULT_PASTE_CSV);
}

function renumberLedger() {
  var ss = SpreadsheetApp.getActive();
  var tx = ss.getSheetByName(TABS.TX);
  var headerRow = CONTENT_START_ROW + 3; // titleRow occupies 6-7, header at 9
  // Find the actual header row by scanning col A for 'Date'
  var finder = tx.getRange(1, 1, 12, 1).getValues();
  for (var i = 0; i < finder.length; i++) { if (finder[i][0] === 'Date') { headerRow = i + 1; break; } }
  var firstData = headerRow + 1;

  tx.getRange(firstData, 1, 5000, 1).setNumberFormat('mmm d, yyyy');
  tx.getRange(firstData, 3, 5000, 1).setNumberFormat('$#,##0.00');
  tx.getRange(firstData, 7, 5000, 1).setFormulaR1C1('=IF(RC1="","",TEXT(RC1,"yyyy-mm"))');

  var catList = SpreadsheetApp.newDataValidation().requireValueInList(CATEGORIES.concat(['Income', 'Transfer']), true).build();
  tx.getRange(firstData, 4, 5000, 1).setDataValidation(catList);
  ss.toast('Ledger formats refreshed', CC.BRAND, 3);
}

function openHelpSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('Help').setTitle('Column & Co. · Help');
  SpreadsheetApp.getUi().showSidebar(html);
}

// ── CSV + parsing helpers ─────────────────────────────────────────────
function parseCsvLine_(line) {
  var out = [], cur = '', inQ = false;
  for (var i = 0; i < line.length; i++) {
    var ch = line[i];
    if (ch === '"') { if (inQ && line[i + 1] === '"') { cur += '"'; i++; } else inQ = !inQ; }
    else if (ch === ',' && !inQ) { out.push(cur); cur = ''; }
    else cur += ch;
  }
  out.push(cur);
  return out.map(function (s) { return s.trim(); });
}

function sniffColumns_(header) {
  var lower = header.map(function (h) { return h.toLowerCase(); });
  var find = function (keys) {
    for (var k = 0; k < keys.length; k++) {
      for (var i = 0; i < lower.length; i++) if (lower[i].indexOf(keys[k]) !== -1) return i;
    }
    return -1;
  };
  return {
    date: find(['date', 'posting date', 'transaction date']),
    desc: find(['description', 'memo', 'payee', 'name']),
    amount: find(['amount', 'debit']),
    debit: find(['debit']),
    credit: find(['credit'])
  };
}

function parseAmount_(fields, cols) {
  // Banks with split debit/credit columns
  if (cols.debit >= 0 && cols.credit >= 0 && cols.debit !== cols.credit) {
    var d = cleanNum_(fields[cols.debit]), c = cleanNum_(fields[cols.credit]);
    if (d) return -Math.abs(d);
    if (c) return Math.abs(c);
    return null;
  }
  var v = cleanNum_(fields[cols.amount]);
  return v === null ? null : v;
}

function cleanNum_(s) {
  if (s == null) return null;
  s = String(s).replace(/[$,\s]/g, '');
  if (s === '') return null;
  var paren = /^\(.*\)$/.test(s);
  s = s.replace(/[()]/g, '');
  var n = Number(s);
  if (isNaN(n)) return null;
  return paren ? -n : n;
}

function parseDate_(s) {
  var d = new Date(s);
  return isNaN(d.getTime()) ? s : d;
}

function categorize_(desc, rules) {
  var up = (desc || '').toUpperCase();
  for (var i = 0; i < rules.length; i++) {
    if (rules[i].keyword && up.indexOf(rules[i].keyword) !== -1) return rules[i].category;
  }
  return 'Misc';
}

function loadKeywordRules_(ss) {
  var cats = ss.getSheetByName(TABS.CATEGORIES);
  var values = cats.getRange('E11:F200').getValues();
  var rules = [];
  values.forEach(function (row) {
    if (row[0]) rules.push({ keyword: String(row[0]).toUpperCase(), category: row[1] || 'Misc' });
  });
  return rules;
}

function findFirstEmptyTxRow_(tx) {
  var finder = tx.getRange(1, 1, 12, 1).getValues();
  var headerRow = 9;
  for (var i = 0; i < finder.length; i++) { if (finder[i][0] === 'Date') { headerRow = i + 1; break; } }
  var colA = tx.getRange(headerRow + 1, 1, 5000, 1).getValues();
  for (var r = 0; r < colA.length; r++) { if (!colA[r][0]) return headerRow + 1 + r; }
  return headerRow + 1;
}
