/**
 * Column & Co. — The Foundation v2.1
 * 04 · Data + system tabs: _Config, _Schema, Categories, Accounts,
 *      Transactions, _Engine.
 *
 * _Engine is formula-driven (SUMIFS over Transactions) so every view
 * updates automatically as the buyer imports — the cross-tab guarantee
 * in the QA checklist. The mock variant seeds a realistic 6-month ledger
 * so the demo shows real numbers through the same formulas.
 */

// ── _Config — palette table, profile table, active selections ─────────
function buildConfig_(sheet) {
  sheet.getRange('A1').setValue('palettes');
  var palHdr = ['id', 'name', 'primary', 'mid', 'accent', 'bg', 'zebra', 'dark', 'accentLight'];
  sheet.getRange(2, 1, 1, palHdr.length).setValues([palHdr]).setFontWeight('bold');
  var palRows = PALETTES.map(function (p) {
    return [p.id, p.name, p.primary, p.mid, p.accent, p.bg, p.zebra, p.dark, p.accentLight];
  });
  sheet.getRange(3, 1, palRows.length, palHdr.length).setValues(palRows);

  sheet.getRange('C20').setValue('profiles');
  var profHdr = ['id', 'name', 'sub', 'blurb', 'income'].concat(CATEGORIES);
  sheet.getRange(21, 3, 1, profHdr.length).setValues([profHdr]).setFontWeight('bold');
  var profRows = PROFILE_ORDER.map(function (id) {
    var p = PROFILES[id];
    return [id, p.name, p.sub, p.blurb, p.income].concat(p.targets);
  });
  sheet.getRange(22, 3, profRows.length, profHdr.length).setValues(profRows);

  sheet.getRange('A40').setValue('active_palette'); sheet.getRange('B40').setValue(DEFAULT_PALETTE);
  sheet.getRange('A41').setValue('active_profile'); sheet.getRange('B41').setValue(DEFAULT_PROFILE);
}

// ── _Schema — LLM-readable plain-English description (the wedge) ───────
function buildSchema_(sheet) {
  var lines = [
    'The Foundation v2.1 — Workbook Schema for AI assistants',
    '========================================================',
    '',
    "This workbook tracks a household's budget. Demo buyer: Marcus & Elena Brooks.",
    '',
    'Tabs:',
    '  • Transactions — every transaction. Columns: Date, Description, Amount',
    '    (negative = expense, positive = income), Category, Account, Notes, Month.',
    '  • Accounts — register of bank accounts, credit cards, savings, and loans.',
    '  • Categories — 20 spending categories + keyword rules for auto-categorization.',
    '  • Monthly Budget — current targets per category, from one of 10 profiles',
    '    (Dave Ramsey, 50/30/20, FIRE, Zero-Based, Anti-Budget, Kakeibo,',
    '     New Parent, Self-Employed, HCOL Renter, Custom).',
    '  • Goals — 4 goal types (Savings Target, Debt Payoff, Spending Limit, Savings Rate).',
    '  • Net Worth — total assets minus total liabilities.',
    '  • Dashboard, Trends, Health Score — read-only views over the data.',
    '  • _Engine — pre-aggregated per-month x per-category sums. 24-month window.',
    '',
    'Conventions:',
    '  • Months in Transactions.Month are formatted YYYY-MM.',
    '  • Amounts: negative = expense, positive = income.',
    '  • Status chips: "On Track" if spent <= budget, "Fair" if <= 110%, "Over" otherwise.',
    '  • Health Score: 5 indicators weighted 25/20/20/20/15, summing to a 0-100 composite.',
    '  • Fonts: Playfair Display is substituted with Lora, Jost with Roboto (Sheets-native).',
    '',
    'For analysis, query the Transactions sheet. Typical questions:',
    '  • Which categories drifted over budget for 3+ months in a row?',
    "  • What's the trajectory of dining/subscriptions/shopping over 6 months?",
    '  • Which subscriptions should they cancel?',
    '  • How would changing X affect the Health Score?'
  ];
  sheet.getRange(1, 1, lines.length, 1).setValues(lines.map(function (l) { return [l]; }));
  sheet.getRange(1, 1, lines.length, 1).setFontFamily('Roboto Mono').setFontSize(10);
  sheet.setColumnWidth(1, 720);
}

// ── Categories — 20-category list + ~50 keyword rules ─────────────────
function buildCategories_(sheet, mode) {
  chrome_(sheet, TABS.CATEGORIES, 'H');
  var r = titleRow_(sheet, 'H', 'Categories',
    'The 20 spending categories and the keyword rules that auto-tag your imports.');

  sectionLabel_(sheet, 'A' + r, 'C' + r, 'CATEGORY LIST · 20 CATEGORIES');
  r += 1;
  sheet.getRange(r, 1, 1, 3).setValues([['Category Name', 'Type', 'Monthly Target']])
    .setFontWeight('bold').setFontColor(BRAND.BODY).setFontFamily(FONT.BODY).setFontSize(10);
  sheet.getRange(r + 1, 1, 20, 1).setValues(CATEGORIES.map(function (c) { return [c]; }));
  sheet.getRange(r + 1, 2, 20, 1).setValue('Expense');
  for (var i = 0; i < 20; i++) {
    sheet.getRange(r + 1 + i, 3).setFormula("='" + TABS.BUDGET + "'!C" + (17 + i)).setNumberFormat('$#,##0');
  }
  // zebra
  for (var z = 0; z < 20; z++) {
    if (z % 2 === 1) {
      var a1 = sheet.getRange(r + 1 + z, 1, 1, 3).getA1Notation();
      sheet.getRange(a1).setBackground(PALETTE_BY_ID.light.zebra);
      themable_(sheet.getName(), 'zebra', a1);
    }
  }

  // Keyword rules region (cols E-G) — start at row 9 so it clears the
  // title row (rows 6-7 are merged full-width by titleRow_).
  sectionLabel_(sheet, 'E9', 'G9', 'KEYWORD RULES · AUTO-CATEGORIZATION');
  var kr = 10;
  sheet.getRange(kr, 5, 1, 3).setValues([['Keyword', 'Category', 'Note']])
    .setFontWeight('bold').setFontColor(BRAND.BODY).setFontFamily(FONT.BODY).setFontSize(10);
  sheet.getRange(kr + 1, 5, KEYWORD_RULES.length, 3).setValues(KEYWORD_RULES);

  footer_(sheet, kr + KEYWORD_RULES.length + 3, 'H');
  setColWidths_(sheet, [150, 90, 110, 24, 150, 130, 200, 40]);
  applyCategoryValidation_(sheet, r + 1);
}

function applyCategoryValidation_(sheet, firstRow) {
  var rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Expense', 'Income', 'Transfer'], true).build();
  sheet.getRange(firstRow, 2, 20, 1).setDataValidation(rule);
}

// ── Accounts — register feeding Net Worth + Transactions dropdown ─────
function buildAccounts_(sheet, mode) {
  chrome_(sheet, TABS.ACCOUNTS, 'H');
  var r = titleRow_(sheet, 'H', 'Accounts',
    'Every account you track. Current balances feed Net Worth automatically.');

  var hdr = ['Account Name', 'Type', 'Owner', 'Starting Balance', 'Current Balance', 'Last Updated', 'Notes'];
  sheet.getRange(r, 1, 1, hdr.length).setValues([hdr]).setFontWeight('bold')
    .setBackground(BRAND.FOREST).setFontColor(BRAND.PARCHMENT).setFontFamily(FONT.BODY).setFontSize(10);

  var firstRow = r + 1;
  var rows = (mode === 'mock')
    ? MOCK.net_worth.budget_accounts.map(function (a) {
        return [a[0], a[1], a[2], a[3], a[3], new Date(2026, 4, 1), ''];
      })
    : [];
  var capacity = Math.max(rows.length, 12);
  if (rows.length) sheet.getRange(firstRow, 1, rows.length, 7).setValues(rows);
  sheet.getRange(firstRow, 4, capacity, 2).setNumberFormat('$#,##0');
  sheet.getRange(firstRow, 6, capacity, 1).setNumberFormat('mmm d, yyyy');

  // yellow input cells: starting + current balance
  sheet.getRange(firstRow, 4, capacity, 2).setBackground(BRAND.YELLOW)
    .setBorder(true, true, true, true, true, true, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);

  // validations
  var typeRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Checking', 'Savings', 'Credit', 'Loan', 'Investment'], true).build();
  sheet.getRange(firstRow, 2, capacity, 1).setDataValidation(typeRule);
  var ownerRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Joint', 'Marcus', 'Elena'], true).build();
  sheet.getRange(firstRow, 3, capacity, 1).setDataValidation(ownerRule);

  footer_(sheet, firstRow + capacity + 2, 'H');
  setColWidths_(sheet, [200, 110, 90, 130, 130, 120, 200]);
}

// ── Transactions — the ledger (mock: generated 6-month ledger) ────────
function buildTransactions_(sheet, mode) {
  chrome_(sheet, TABS.TX, 'G');
  var r = titleRow_(sheet, 'G', 'Transactions',
    'Your ledger. Import a CSV or type by hand. Feeds every other tab.');

  var hdr = ['Date', 'Description', 'Amount', 'Category', 'Account', 'Notes', 'Month'];
  var headerRow = r;
  sheet.getRange(headerRow, 1, 1, 7).setValues([hdr]).setFontWeight('bold')
    .setBackground(BRAND.FOREST).setFontColor(BRAND.PARCHMENT).setFontFamily(FONT.BODY).setFontSize(10);
  SpreadsheetApp.flush();  // commit chrome merges before freezing
  try { sheet.setFrozenRows(headerRow); } catch (e) {}

  var firstData = headerRow + 1;
  var ledger = (mode === 'mock') ? generateMockLedger_() : [];
  if (ledger.length) {
    sheet.getRange(firstData, 1, ledger.length, 6).setValues(ledger);
  }

  // capacity: 5000 rows
  var lastRow = firstData + 4999;
  sheet.getRange(firstData, 1, 5000, 1).setNumberFormat('mmm d, yyyy');
  sheet.getRange(firstData, 3, 5000, 1).setNumberFormat('$#,##0.00');
  // Month formula column G across full capacity
  sheet.getRange(firstData, 7, 5000, 1)
    .setFormulaR1C1('=IF(RC1="","",TEXT(RC1,"yyyy-mm"))');

  // dropdowns — explicit category list (avoids depending on Categories row offsets)
  var catList = SpreadsheetApp.newDataValidation().requireValueInList(CATEGORIES.concat(['Income', 'Transfer']), true).build();
  sheet.getRange(firstData, 4, 5000, 1).setDataValidation(catList);
  var acctRule = SpreadsheetApp.newDataValidation()
    .requireValueInRange(SpreadsheetApp.getActive().getRangeByName('cc_accounts_list') ||
      SpreadsheetApp.getActive().getRange("'" + TABS.ACCOUNTS + "'!A10:A41"), true).build();
  sheet.getRange(firstData, 5, 5000, 1).setDataValidation(acctRule);

  setColWidths_(sheet, [110, 280, 110, 150, 170, 200, 90]);
  sheet.hideColumns(7); // Month is a helper column
}

// Build a realistic 6-month ledger (Dec 2025 – May 2026) whose monthly
// category sums reproduce the mock story so the formula-driven _Engine
// shows the right numbers.
function generateMockLedger_() {
  var rows = [];
  var months = MOCK.months_24.slice(18); // last 6 = Dec25..May26
  var accounts = ['Chase Joint Checking', 'Amex Gold Card', 'Chase Sapphire Card', 'Elena Checking', 'Marcus Checking'];
  // category spend weights from the current-month breakdown
  var breakdownMap = {}; MOCK.breakdown.forEach(function (b) { breakdownMap[b[0]] = b[1]; });
  var totalBreakdown = MOCK.breakdown.reduce(function (s, b) { return s + b[1]; }, 0);

  for (var m = 0; m < months.length; m++) {
    var label = months[m][0];                 // e.g. 'May 2026'
    var parts = label.split(' ');
    var monthIdx = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].indexOf(parts[0]);
    var year = Number(parts[1]);
    var income = months[m][1], expenses = months[m][2];

    // income — one direct-deposit row
    rows.push([new Date(year, monthIdx, 1), 'DIRECT DEPOSIT - ACME CO', income, 'Income', 'Chase Joint Checking', '']);

    // expenses — distribute across categories by breakdown weight, scaled to this month's total
    CATEGORIES.forEach(function (cat, ci) {
      var weight = (breakdownMap[cat] || 0) / totalBreakdown;
      if (weight <= 0) return;
      var amt = Math.round(expenses * weight);
      if (amt <= 0) return;
      var desc = mockMerchant_(cat);
      var acct = accounts[(ci + m) % accounts.length];
      var day = 3 + (ci % 24);
      rows.push([new Date(year, monthIdx, day), desc, -amt, cat, acct, '']);
    });
  }
  return rows;
}

function mockMerchant_(cat) {
  var map = {
    'Housing': 'GREYSTONE PROPERTY MGMT', 'Food & Dining': 'WHOLE FOODS MARKET #347',
    'Transportation': 'SHELL OIL 575421', 'Shopping': 'AMAZON.COM*RT4D9',
    'Utilities': 'COMCAST XFINITY', 'Entertainment': 'AMC THEATRES #88',
    'Subscriptions': 'NETFLIX.COM', 'Personal Care': 'SEPHORA #221',
    'Gifts & Donations': 'RED CROSS DONATION', 'Health & Medical': 'CVS PHARMACY #4471',
    'Insurance': 'GEICO AUTO', 'Savings': 'TRANSFER TO ALLY SAVINGS',
    'Debt Payments': 'CHASE CARD PAYMENT', 'Education': 'COURSERA SUBSCRIPTION',
    'Travel': 'DELTA AIR LINES', 'Pets': 'CHEWY.COM', 'Childcare': 'BRIGHT HORIZONS',
    'Business': 'ADOBE CREATIVE CLOUD', 'Taxes': 'IRS EFTPS PAYMENT', 'Misc': 'VENMO PAYMENT'
  };
  return map[cat] || 'MISC PURCHASE';
}

// ── _Engine — formula-driven aggregation (SUMIFS over Transactions) ───
function buildEngine_(sheet, mode) {
  // Row 1: 24 month headers (YYYY-MM), Jun24..May26
  var monthCodes = MOCK.months_24.map(function (m) {
    var parts = m[0].split(' ');
    var mi = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].indexOf(parts[0]) + 1;
    return parts[1] + '-' + ('0' + mi).slice(-2);
  });
  sheet.getRange('A1').setValue('metric \\ month').setFontWeight('bold');
  sheet.getRange(1, 2, 1, 24).setValues([monthCodes]).setFontWeight('bold');

  // Rows 2-21: categories. Each cell SUMIFS expenses (abs) for that month+cat.
  var txAmount = "'" + TABS.TX + "'!$C:$C";
  var txCat = "'" + TABS.TX + "'!$D:$D";
  var txMonth = "'" + TABS.TX + "'!$G:$G";
  for (var i = 0; i < CATEGORIES.length; i++) {
    var row = 2 + i;
    sheet.getRange(row, 1).setValue(CATEGORIES[i]);
    for (var c = 0; c < 24; c++) {
      var col = 2 + c;
      var colL = columnToLetter_(col);
      sheet.getRange(row, col).setFormula(
        '=ABS(SUMIFS(' + txAmount + ',' + txCat + ',$A' + row + ',' + txMonth + ',' + colL + '$1))'
      );
    }
  }
  // Row 22 Income, 23 Expenses, 24 NetCashFlow, 25 SavingsRate
  sheet.getRange(22, 1).setValue('Income');
  sheet.getRange(23, 1).setValue('Expenses');
  sheet.getRange(24, 1).setValue('NetCashFlow');
  sheet.getRange(25, 1).setValue('SavingsRate');
  for (var c2 = 0; c2 < 24; c2++) {
    var colL2 = columnToLetter_(2 + c2);
    // Income = SUMIFS positive amounts where category = Income
    sheet.getRange(22, 2 + c2).setFormula(
      '=SUMIFS(' + txAmount + ',' + txCat + ',"Income",' + txMonth + ',' + colL2 + '$1)');
    // Expenses = sum of category rows 2..21
    sheet.getRange(23, 2 + c2).setFormula('=SUM(' + colL2 + '2:' + colL2 + '21)');
    sheet.getRange(24, 2 + c2).setFormula('=' + colL2 + '22-' + colL2 + '23');
    sheet.getRange(25, 2 + c2).setFormula(
      '=IF(' + colL2 + '22=0,0,' + colL2 + '24/' + colL2 + '22)').setNumberFormat('0.0%');
  }
  sheet.getRange(2, 2, 24, 24).setNumberFormat('$#,##0');
  sheet.getRange(25, 2, 1, 24).setNumberFormat('0.0%');
}

function columnToLetter_(col) {
  var letter = '';
  while (col > 0) { var m = (col - 1) % 26; letter = String.fromCharCode(65 + m) + letter; col = Math.floor((col - 1) / 26); }
  return letter;
}
