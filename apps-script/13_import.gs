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
  if (!account) { ss.toast('Type an account name in C10 first.', CC.BRAND, 4); return; }

  // Account-name validation against the Accounts list (cc_accounts_list)
  var acctNamed = ss.getRangeByName('cc_accounts_list');
  if (acctNamed) {
    var accounts = acctNamed.getValues()
      .map(function (r) { return String(r[0] || '').trim(); })
      .filter(Boolean);
    if (accounts.indexOf(account) === -1) {
      ss.toast('Account "' + account + '" not in Accounts list. Add it there or fix C10.', CC.BRAND, 6);
      return;
    }
  }

  // Read the paste zone. If A12 contains a multi-line string the buyer
  // pasted plain text — use the legacy CSV-text path. Otherwise read the
  // unmerged 50×8 grid that tabular paste lands into.
  var firstCell = imp.getRange(12, 1).getValue();
  var rowsAsArrays;
  if (typeof firstCell === 'string' && firstCell.indexOf('\n') !== -1) {
    // Legacy text paste: A12 contains the whole CSV as one string.
    var lines = String(firstCell).split(/\r?\n/).filter(function (l) { return l.trim() !== ''; });
    rowsAsArrays = lines.map(parseCsvLine_);
  } else {
    var raw = imp.getRange(12, 1, IMPORT_PASTE_ROW_COUNT, IMPORT_PASTE_COL_COUNT).getValues();
    rowsAsArrays = raw
      .map(function (r) { return r.map(function (c) { return c === null ? '' : c; }); })
      .filter(function (r) { return r.some(function (c) { return String(c).trim() !== ''; }); });
  }
  if (rowsAsArrays.length < 2) {
    ss.toast('Paste a CSV into the green zone first (header row + at least one data row).', CC.BRAND, 5);
    return;
  }

  var header = rowsAsArrays[0].map(function (c) { return String(c); });
  var cols = sniffColumns_(header);
  if (cols.amount < 0 || cols.date < 0) {
    ss.toast('Could not detect Date/Amount columns. Supported headers: Date, Description/Memo/Payee, Amount (or Debit/Credit pair).', CC.BRAND, 6);
    return;
  }

  // Build existing-row dedup index from the live ledger.
  var tz = ss.getSpreadsheetTimeZone();
  var dedupKey = function (d, desc, amt) {
    var ds = (d instanceof Date) ? Utilities.formatDate(d, tz, 'yyyy-MM-dd') : String(d || '').trim();
    return ds + '|' + String(desc || '').trim() + '|' + Number(amt).toFixed(2);
  };
  var seen = {};
  var existing = readExistingTx_(tx);
  for (var e = 0; e < existing.length; e++) {
    seen[dedupKey(existing[e][0], existing[e][1], existing[e][2])] = true;
  }

  var rules = loadKeywordRules_(ss);
  var out = [], income = [], miscDescs = [], skipped = 0, misc = 0;
  for (var i = 1; i < rowsAsArrays.length; i++) {
    var f = rowsAsArrays[i];
    if (!f || f.length < 2) continue;
    var date = parseDate_(f[cols.date]);
    var desc = String(f[cols.desc] != null ? f[cols.desc] : '').trim();
    var amount = parseAmount_(f, cols);
    if (amount === null) continue;
    var key = dedupKey(date, desc, amount);
    if (seen[key]) { skipped++; continue; }
    seen[key] = true;
    var category;
    if (amount > 0) {
      category = 'Income';
    } else {
      category = categorize_(desc, rules);
      if (category === 'Misc') { misc++; miscDescs.push(desc); }
    }
    out.push([date, desc, amount, category, account, '']);
    if (amount > 0) income.push([date, desc, amount]);
  }
  if (!out.length && !skipped) { ss.toast('No valid rows parsed.', CC.BRAND, 4); return; }

  if (out.length) {
    var firstEmpty = findFirstEmptyTxRow_(tx);
    tx.getRange(firstEmpty, 1, out.length, 6).setValues(out);
  }

  // Refresh the Review Income block (REVIEW_INCOME_FIRST_ROW × 5 cols).
  imp.getRange(REVIEW_INCOME_FIRST_ROW, 1, REVIEW_INCOME_ROW_COUNT, 5).clearContent();
  var shown = 0;
  if (income.length) {
    shown = Math.min(income.length, REVIEW_INCOME_ROW_COUNT);
    imp.getRange(REVIEW_INCOME_FIRST_ROW, 1, shown, 3).setValues(income.slice(0, shown));
    imp.getRange(REVIEW_INCOME_FIRST_ROW, 1, shown, 1).setNumberFormat('mmm d, yyyy');
    imp.getRange(REVIEW_INCOME_FIRST_ROW, 3, shown, 1).setNumberFormat('$#,##0.00');
  }

  // Refresh the Uncategorized Merchants block — group Misc descs by suggested
  // keyword, sort by hit count, write up to UNCAT_ROW_COUNT rows.
  imp.getRange(UNCAT_FIRST_ROW, 1, UNCAT_ROW_COUNT, 5).clearContent();
  if (miscDescs.length) {
    var groups = {};
    for (var m = 0; m < miscDescs.length; m++) {
      var d = miscDescs[m];
      var k = suggestKeyword_(d);
      if (!k) continue;
      if (!groups[k]) groups[k] = { sample: d, hits: 0, keyword: k };
      groups[k].hits++;
    }
    var rows = Object.keys(groups).map(function (k) { return groups[k]; })
      .sort(function (a, b) { return b.hits - a.hits; })
      .slice(0, UNCAT_ROW_COUNT);
    if (rows.length) {
      var grid = rows.map(function (g) { return [g.sample, g.hits, g.keyword, '', '']; });
      imp.getRange(UNCAT_FIRST_ROW, 1, rows.length, 5).setValues(grid);
    }
  }

  renumberLedger();

  var parts = ['Imported ' + out.length];
  if (skipped) parts.push(skipped + ' duplicates skipped');
  if (misc) parts.push(misc + ' fell to Misc');
  if (income.length) parts.push(income.length + ' income row' + (income.length === 1 ? '' : 's') + ' for review');
  if (income.length > REVIEW_INCOME_ROW_COUNT) {
    parts.push('(' + (income.length - REVIEW_INCOME_ROW_COUNT) + ' beyond the review block)');
  }
  ss.toast(parts.join(' · '), CC.BRAND, 6);
}

function readExistingTx_(tx) {
  var finder = tx.getRange(1, 1, 12, 1).getValues();
  var headerRow = 9;
  for (var i = 0; i < finder.length; i++) { if (finder[i][0] === 'Date') { headerRow = i + 1; break; } }
  var lastRow = tx.getLastRow();
  if (lastRow <= headerRow) return [];
  return tx.getRange(headerRow + 1, 1, lastRow - headerRow, 3).getValues()
    .filter(function (r) { return r[0] !== '' && r[0] !== null; });
}

function clearPasteZone() {
  var ui = SpreadsheetApp.getUi();
  var resp = ui.alert('Clear Paste Zone', 'Empty the paste zone?', ui.ButtonSet.YES_NO);
  if (resp !== ui.Button.YES) return;
  var imp = SpreadsheetApp.getActive().getSheetByName(TABS.IMPORT);
  var zone = imp.getRange(12, 1, IMPORT_PASTE_ROW_COUNT, IMPORT_PASTE_COL_COUNT);
  zone.clearContent();
  zone.setBackground(BRAND.GREEN_ZONE);
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

  var catRange = ss.getRangeByName('cc_tx_categories') ||
    ss.getRange("'" + TABS.CATEGORIES + "'!A11:A37");
  var catList = SpreadsheetApp.newDataValidation()
    .requireValueInRange(catRange, true).build();
  tx.getRange(firstData, 4, 5000, 1).setDataValidation(catList);
  ss.toast('Ledger formats refreshed', CC.BRAND, 3);
}

// ── Add Account (menu item) ───────────────────────────────────────────
// Prompts for an account name and appends it to the Accounts list with
// sensible defaults so the buyer doesn't have to leave Bank Import to
// register a new account. Direct editing on the Accounts tab still works.
function addAccount() {
  var ui = SpreadsheetApp.getUi();
  var ss = SpreadsheetApp.getActive();
  var acct = ss.getSheetByName(TABS.ACCOUNTS);
  if (!acct) { ui.alert('Accounts tab not found.'); return; }

  var resp = ui.prompt('Add Account',
    'Account name (e.g. "Chase Joint Checking"):', ui.ButtonSet.OK_CANCEL);
  if (resp.getSelectedButton() !== ui.Button.OK) return;
  var name = String(resp.getResponseText() || '').trim();
  if (!name) return;

  var range = ss.getRangeByName('cc_accounts_list') || acct.getRange('A10:A41');
  var vals = range.getValues();
  var target = -1;
  for (var i = 0; i < vals.length; i++) {
    if (!vals[i][0]) { target = range.getRow() + i; break; }
    if (String(vals[i][0]).trim().toLowerCase() === name.toLowerCase()) {
      ui.alert('"' + name + '" is already in the Accounts list.');
      return;
    }
  }
  if (target === -1) {
    ui.alert('Accounts list is full. Add capacity in buildAccounts_.');
    return;
  }
  acct.getRange(target, 1).setValue(name);
  acct.getRange(target, 2).setValue('Checking');
  acct.getRange(target, 3).setValue('Joint');
  acct.getRange(target, 6).setValue(new Date());
  acct.activate();
  acct.getRange(target, 4).activate();
  ss.toast('Added "' + name + '" — fill in the starting balance →', CC.BRAND, 4);
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

// Longest-keyword-wins. Removes the historical "AMAZON PRIME before AMAZON"
// ordering trap — load order no longer matters; the most specific keyword
// always wins.
function categorize_(desc, rules) {
  var up = (desc || '').toUpperCase();
  var best = null;
  for (var i = 0; i < rules.length; i++) {
    var k = rules[i].keyword;
    if (k && up.indexOf(k) !== -1) {
      if (!best || k.length > best.keyword.length) best = rules[i];
    }
  }
  return best ? best.category : 'Misc';
}

// Heuristic: strip standalone digits, ACH/PMT cruft, and reduce to the first
// two words. Buyer can edit the suggestion before picking a category.
function suggestKeyword_(desc) {
  var s = String(desc || '').toUpperCase()
    .replace(/[#0-9][#0-9\-]+.*$/, '')
    .replace(/\s*-\s*(ACH|PMT|PAYMENT|PAYROLL|DIRECT|DEPOSIT|CRCARDPMT|CCPYMT).*$/, '')
    .replace(/[^A-Z0-9\s\.\!\&\-]/g, ' ')
    .trim();
  var parts = s.split(/\s+/).filter(Boolean);
  return parts.slice(0, 2).join(' ');
}

// Append a new rule to Categories!E:G. If the keyword already exists, just
// update its category (still keeps the buyer's note column).
function addKeywordRule_(keyword, category) {
  var ss = SpreadsheetApp.getActive();
  var cats = ss.getSheetByName(TABS.CATEGORIES);
  if (!cats) return;
  var existing = cats.getRange('E11:G200').getValues();
  var key = String(keyword || '').toUpperCase().trim();
  for (var i = 0; i < existing.length; i++) {
    var k = String(existing[i][0] || '').toUpperCase().trim();
    if (k === key) {
      cats.getRange(11 + i, 6).setValue(category);
      return;
    }
    if (!k) {
      cats.getRange(11 + i, 5, 1, 3).setValues([[key, category, '(added from Bank Import)']]);
      return;
    }
  }
}

// Find every TX row whose description contains `keyword` and whose category
// is currently 'Misc', and rewrite the category. Returns the count touched.
function recategorizeWhereDesc_(keyword, category) {
  var ss = SpreadsheetApp.getActive();
  var tx = ss.getSheetByName(TABS.TX);
  if (!tx) return 0;
  var finder = tx.getRange(1, 1, 12, 1).getValues();
  var headerRow = 9;
  for (var i = 0; i < finder.length; i++) { if (finder[i][0] === 'Date') { headerRow = i + 1; break; } }
  var lastRow = tx.getLastRow();
  if (lastRow <= headerRow) return 0;
  var n = lastRow - headerRow;
  var descCol = tx.getRange(headerRow + 1, 2, n, 1).getValues();
  var catCol  = tx.getRange(headerRow + 1, 4, n, 1).getValues();
  var key = String(keyword || '').toUpperCase().trim();
  var touched = 0;
  for (var r = 0; r < n; r++) {
    if (String(catCol[r][0]) === 'Misc' &&
        String(descCol[r][0] || '').toUpperCase().indexOf(key) !== -1) {
      catCol[r][0] = category;
      touched++;
    }
  }
  if (touched) tx.getRange(headerRow + 1, 4, n, 1).setValues(catCol);
  return touched;
}

// Menu item: walk every Misc row in the ledger and reapply rules. Used after
// the buyer edits keyword rules by hand in the Categories tab.
function recategorizeAll() {
  var ss = SpreadsheetApp.getActive();
  var tx = ss.getSheetByName(TABS.TX);
  if (!tx) return;
  var rules = loadKeywordRules_(ss);
  var finder = tx.getRange(1, 1, 12, 1).getValues();
  var headerRow = 9;
  for (var i = 0; i < finder.length; i++) { if (finder[i][0] === 'Date') { headerRow = i + 1; break; } }
  var lastRow = tx.getLastRow();
  if (lastRow <= headerRow) { ss.toast('Ledger is empty.', CC.BRAND, 3); return; }
  var n = lastRow - headerRow;
  var descCol = tx.getRange(headerRow + 1, 2, n, 1).getValues();
  var catCol  = tx.getRange(headerRow + 1, 4, n, 1).getValues();
  var touched = 0;
  for (var r = 0; r < n; r++) {
    if (String(catCol[r][0]) === 'Misc') {
      var c = categorize_(descCol[r][0], rules);
      if (c && c !== 'Misc') { catCol[r][0] = c; touched++; }
    }
  }
  if (touched) tx.getRange(headerRow + 1, 4, n, 1).setValues(catCol);
  ss.toast(touched ? ('Recategorized ' + touched + ' row' + (touched === 1 ? '' : 's')) : 'No Misc rows matched any rule.', CC.BRAND, 4);
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
