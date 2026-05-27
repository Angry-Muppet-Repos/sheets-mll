/**
 * Column & Co. — The Foundation v2.1
 * 06 · Action tabs: Monthly Budget, Goals, Bank Import Guide.
 */

// Cell contract shared with 12_profile.gs (all internal — change together
// with setNamedRanges_ and buildCategories_ if you move these).
var BUDGET_NAME_CELL   = 'A7';   // active profile display name
var BUDGET_SUB_CELL    = 'A9';   // sub
var BUDGET_BLURB_CELL  = 'A10';  // blurb
var BUDGET_INCOME_CELL = 'C13';  // monthly income input
var BUDGET_PICKER_CELL = 'C14';  // active profile id
var BUDGET_TARGETS_FIRST_ROW = 17;  // C17..C36 targets, B17..B36 categories
var BUDGET_SAVINGS_ROW = 28;     // Savings is category index 11 -> row 28

// Bank Import cell contract
var IMPORT_ACCOUNT_CELL = 'C10';
var IMPORT_PASTE_ANCHOR = 'A12';     // merged A12:L23 green paste zone

// ── Monthly Budget ────────────────────────────────────────────────────
function buildMonthlyBudget_(sheet, mode) {
  chrome_(sheet, TABS.BUDGET, 'L', 'PICK A PROFILE OR SET YOUR OWN');

  // Hero (left) — section label, profile name/sub/blurb (written by writeProfileToBudget_)
  sectionLabel_(sheet, 'A6', 'F6', 'DESIRED FINANCIAL PROFILE');
  setCell_(sheet, BUDGET_NAME_CELL, { merge: 'F8', font: FONT.DISPLAY, size: 28, bold: true, color: BRAND.FOREST, v: 'bottom' });
  setCell_(sheet, BUDGET_SUB_CELL, { merge: 'F9', font: FONT.BODY, size: 11, bold: true, color: BRAND.GOLD });
  setCell_(sheet, BUDGET_BLURB_CELL, { merge: 'F11', font: FONT.BODY, size: 13, color: BRAND.BODY, wrap: true, v: 'top' });
  sheet.setRowHeight(11, 36);

  // income + picker input cells
  setCell_(sheet, 'A13', { value: 'Monthly income', font: FONT.BODY, size: 11, bold: true, color: BRAND.BODY });
  setCell_(sheet, 'A14', { value: 'Active profile', font: FONT.BODY, size: 9, color: BRAND.CAPTION });
  sheet.getRange(BUDGET_INCOME_CELL).setNumberFormat('$#,##0').setBackground(BRAND.YELLOW)
    .setBorder(true, true, true, true, false, false, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);
  sheet.getRange(BUDGET_PICKER_CELL).setFontColor(BRAND.CAPTION).setFontSize(9);

  // hero KPI cards (right, cols H-L) at row 6
  kpiCard_(sheet, 'H6', 2, 'MONTHLY INCOME', '=' + BUDGET_INCOME_CELL, '', BRAND.FOREST);
  kpiCard_(sheet, 'J6', 3, 'TOTAL BUDGETED', '=SUM(C17:C36)',
    '=IF(C13-SUM(C17:C36)>=0,"$"&TEXT(C13-SUM(C17:C36),"#,##0")&" free","$"&TEXT(SUM(C17:C36)-C13,"#,##0")&" over")', BRAND.GOLD);
  sheet.getRange(7, 8).setNumberFormat('$#,##0');
  sheet.getRange(7, 10).setNumberFormat('$#,##0');

  // Category targets table
  sectionLabel_(sheet, 'A15', 'F15', 'CATEGORY TARGETS · 20 CATEGORIES');
  setCell_(sheet, 'G15', { value: 'EDIT ANY YELLOW CELL IN CUSTOM MODE', merge: 'L15',
    font: FONT.BODY, size: 9, bold: true, color: BRAND.GOLD, bg: BRAND.CREAM, h: 'right', v: 'middle' });
  sheet.getRange(16, 2, 1, 4).setValues([['Category', 'Target', '% Inc', 'Share']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  for (var i = 0; i < CATEGORIES.length; i++) {
    var rr = BUDGET_TARGETS_FIRST_ROW + i;
    sheet.getRange(rr, 2).setValue(CATEGORIES[i]).setFontFamily(FONT.BODY).setFontSize(11).setFontColor(BRAND.BODY);
    sheet.getRange(rr, 3).setNumberFormat('$#,##0');
    sheet.getRange(rr, 4).setFormula('=IF($C$13=0,0,C' + rr + '/$C$13)').setNumberFormat('0.0%');
    sheet.getRange(rr, 5).setFormula(
      '=SPARKLINE(C' + rr + ',{"charttype","bar";"max",MAX($C$17:$C$36);"color1",SWITCH(B' + rr +
      ',"Savings","' + BRAND.GOLD + '","Debt Payments","' + BRAND.GARNET + '","' + BRAND.FOREST + '")})');
    if (i % 2 === 1) { var z = sheet.getRange(rr, 2, 1, 4).getA1Notation(); sheet.getRange(z).setBackground(PALETTE_BY_ID.light.zebra); themable_(sheet.getName(), 'zebra', z); }
  }

  // Custom-mode yellow highlight via conditional formatting
  var rules = sheet.getConditionalFormatRules();
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied('=$C$14="custom"')
    .setBackground(BRAND.YELLOW)
    .setRanges([sheet.getRange('C17:C36')]).build());
  sheet.setConditionalFormatRules(rules);

  // Footer summary bar (Forest)
  var sumRow = BUDGET_TARGETS_FIRST_ROW + 20 + 1;
  sheet.getRange(sumRow, 1, 1, 12).setBackground(BRAND.FOREST);
  var parts = [
    ['MONTHLY INCOME', '=' + BUDGET_INCOME_CELL, '$#,##0'],
    ['TOTAL BUDGETED', '=SUM(C17:C36)', '$#,##0'],
    ['UNALLOCATED', '=C13-SUM(C17:C36)', '$#,##0'],
    ['SAVINGS RATE', '=C' + BUDGET_SAVINGS_ROW + '/C13', '0.0%']
  ];
  for (var p = 0; p < 4; p++) {
    var c0 = 1 + p * 3;
    setCell_(sheet, sheet.getRange(sumRow, c0).getA1Notation(), { value: parts[p][0],
      merge: sheet.getRange(sumRow, c0 + 2).getA1Notation(), font: FONT.BODY, size: 9, bold: true,
      color: BRAND.GOLD, bg: BRAND.FOREST, h: 'left', v: 'middle' });
  }
  // values one row below (overlay): place value cells on next row
  var valRow = sumRow + 1;
  for (var q = 0; q < 4; q++) {
    var cc = 1 + q * 3;
    var vc = sheet.getRange(valRow, cc, 1, 3).merge();
    vc.setFormula(parts[q][1]).setNumberFormat(parts[q][2]).setFontFamily(FONT.DISPLAY).setFontSize(18)
      .setFontWeight('bold').setFontColor(BRAND.PARCHMENT).setBackground(BRAND.FOREST).setHorizontalAlignment('left');
  }
  sheet.getRange(valRow, 1, 1, 12).setBackground(BRAND.FOREST);

  setCell_(sheet, 'A' + (valRow + 1), { value: "Targets feed Dashboard's % of Budget and Health Score's Budget Adherence.",
    merge: 'L' + (valRow + 1), font: FONT.BODY, size: 11, italic: true, color: BRAND.CAPTION });

  footer_(sheet, valRow + 3, 'L');
  setColWidths_(sheet, [40, 150, 100, 70, 120, 40, 60, 90, 90, 70, 70, 70]);

  // seed the default profile
  writeProfileToBudget_(sheet, DEFAULT_PROFILE);
}

// ── Goals ─────────────────────────────────────────────────────────────
function buildGoals_(sheet, mode) {
  chrome_(sheet, TABS.GOALS, 'L');
  var r = titleRow_(sheet, 'L', 'Goals',
    'Pick a type, a target, a deadline. Progress tracks automatically as transactions come in.');

  var hdr = ['Goal Name', 'Type', 'Target', 'Current', '% Complete', 'Deadline', 'Status', 'Note'];
  sheet.getRange(r, 1, 1, 8).setValues([hdr]).setFontWeight('bold').setBackground(BRAND.FOREST)
    .setFontColor(BRAND.PARCHMENT).setFontFamily(FONT.BODY).setFontSize(10);
  var start = r + 1;
  var goals = (mode === 'mock') ? MOCK.goals : [];
  for (var i = 0; i < Math.max(goals.length, 7); i++) {
    var rr = start + i;
    if (i < goals.length) {
      var g = goals[i];
      sheet.getRange(rr, 1).setValue(g[0]);
      sheet.getRange(rr, 2).setValue(g[1]);
      sheet.getRange(rr, 3).setValue(g[2]).setNumberFormat(g[1] === 'Savings Rate' ? '0"%"' : '$#,##0');
      sheet.getRange(rr, 4).setValue(g[3]).setNumberFormat(g[1] === 'Savings Rate' ? '0.0"%"' : '$#,##0');
      sheet.getRange(rr, 5).setFormula('=SPARKLINE(D' + rr + ',{"charttype","bar";"max",C' + rr +
        ';"color1",IF(D' + rr + '/C' + rr + '>1,"' + BRAND.GARNET + '",IF(D' + rr + '/C' + rr + '>0.85,"' + BRAND.GOLD + '","' + BRAND.FOREST + '"))})');
      sheet.getRange(rr, 6).setValue(g[4]);
      sheet.getRange(rr, 7).setValue(statusText_(g[5]));
      sheet.getRange(rr, 8).setValue(g[6]).setFontColor(BRAND.BODY).setWrap(true);
    }
    if (i % 2 === 1) { var z = sheet.getRange(rr, 1, 1, 8).getA1Notation(); sheet.getRange(z).setBackground(PALETTE_BY_ID.light.zebra); themable_(sheet.getName(), 'zebra', z); }
  }
  var typeRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Savings Target', 'Debt Payoff', 'Spending Limit', 'Savings Rate'], true).build();
  sheet.getRange(start, 2, 7, 1).setDataValidation(typeRule);
  statusChipCF_(sheet, sheet.getRange(start, 7, 7, 1).getA1Notation());

  // Forecast strip — Forest panel: gold label row + brand-voice copy row
  var fr = start + Math.max(goals.length, 7) + 1;
  setCell_(sheet, 'A' + fr, { value: 'FORECAST', merge: 'L' + fr,
    font: FONT.BODY, size: 10, bold: true, color: BRAND.GOLD, bg: BRAND.FOREST, v: 'middle' });
  setCell_(sheet, 'A' + (fr + 1), {
    value: 'Japan Trip Fund hits target by Oct 2026 — one month late. Bump the monthly transfer from $200 to $275 and you hit September.',
    merge: 'L' + (fr + 2), font: FONT.BODY, size: 13, color: BRAND.PARCHMENT, bg: BRAND.FOREST, wrap: true, v: 'middle' });

  footer_(sheet, fr + 4, 'L');
  setColWidths_(sheet, [170, 130, 90, 90, 120, 90, 80, 220, 60, 60, 60, 60]);
}

// ── Bank Import Guide ─────────────────────────────────────────────────
function buildBankImport_(sheet) {
  chrome_(sheet, TABS.IMPORT, 'L');
  var r = titleRow_(sheet, 'L', 'Bank Import Guide', 'Paste a CSV. We figure out the rest.');

  // 3-step row
  var steps = [
    ['1', 'Type the account name in C10 (must match an Accounts entry).'],
    ['2', 'Paste your bank CSV into the green zone below.'],
    ['3', 'Run 💳 Column & Co. → Import Bank Transactions.']
  ];
  for (var s = 0; s < 3; s++) {
    var c0 = 1 + s * 4;
    setCell_(sheet, sheet.getRange(r, c0).getA1Notation(), { value: steps[s][0],
      font: FONT.DISPLAY, size: 16, bold: true, color: BRAND.PARCHMENT, bg: BRAND.FOREST, h: 'center', v: 'middle' });
    setCell_(sheet, sheet.getRange(r, c0 + 1).getA1Notation(), { value: steps[s][1],
      merge: sheet.getRange(r, c0 + 3).getA1Notation(), font: FONT.BODY, size: 11, color: BRAND.BODY, wrap: true, v: 'middle' });
  }
  sheet.setRowHeight(r, 40);

  // account name input
  setCell_(sheet, 'A' + (r + 2), { value: 'Account name', font: FONT.BODY, size: 11, bold: true, color: BRAND.BODY });
  sheet.getRange(IMPORT_ACCOUNT_CELL).setValue('Chase Joint Checking').setBackground(BRAND.YELLOW)
    .setBorder(true, true, true, true, false, false, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);
  sheet.getRange(IMPORT_ACCOUNT_CELL + ':E10').merge();

  // paste zone — merged green cell A12:L23
  var zone = sheet.getRange(IMPORT_PASTE_ANCHOR + ':L23').merge();
  zone.setBackground(BRAND.GREEN_ZONE).setFontFamily('Roboto Mono').setFontSize(11)
    .setHorizontalAlignment('left').setVerticalAlignment('top').setWrap(true)
    .setValue(DEFAULT_PASTE_CSV);

  // Review Income block
  var rr = 25;
  sectionLabel_(sheet, 'A' + rr, 'L' + rr, 'REVIEW INCOME · CONFIRM POSITIVE-AMOUNT ROWS');
  rr += 1;
  sheet.getRange(rr, 1, 1, 5).setValues([['Date', 'Description', 'Amount', 'Income?', 'Notes']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  var ynRule = SpreadsheetApp.newDataValidation().requireValueInList(['Yes', 'No'], true).build();
  sheet.getRange(rr + 1, 4, 8, 1).setDataValidation(ynRule);

  rr += 10;
  setCell_(sheet, 'A' + rr, { value: 'Sniffs headers from Chase, BoA, Wells Fargo, Cap One, Ally, Citi, USAA, Discover, Amex.',
    merge: 'L' + rr, font: FONT.BODY, size: 11, italic: true, color: BRAND.CAPTION });

  footer_(sheet, rr + 2, 'L');
  setColWidths_(sheet, [110, 280, 110, 90, 200, 60, 60, 60, 60, 60, 60, 60]);
}
