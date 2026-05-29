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
var IMPORT_PASTE_ANCHOR = 'A12';            // top-left of the unmerged paste grid
var IMPORT_PASTE_ROW_COUNT = 50;            // 50 rows × 8 cols = paste capacity
var IMPORT_PASTE_COL_COUNT = 8;
var IMPORT_PASTE_LAST_ROW = 12 + IMPORT_PASTE_ROW_COUNT - 1;   // 61
var REVIEW_INCOME_HEADER_ROW = 64;
var REVIEW_INCOME_FIRST_ROW  = 65;
var REVIEW_INCOME_ROW_COUNT  = 20;
var UNCAT_SECTION_ROW = 87;       // section label
var UNCAT_HEADER_ROW  = 88;
var UNCAT_FIRST_ROW   = 89;
var UNCAT_ROW_COUNT   = 20;

// ── Monthly Budget ────────────────────────────────────────────────────
// Columns: B Category · C Preset% (locked) · D Override% (yellow editable)
// · E Target% (= override or preset) · F Target$ (= Target% × income) · G Δ% · H Share
function buildMonthlyBudget_(sheet, mode) {
  chrome_(sheet, TABS.BUDGET, 'L', 'PICK A PROFILE · TWEAK ANY CATEGORY');

  // Hero (left) — section label, profile name/sub/blurb (written by writeProfileToBudget_)
  sectionLabel_(sheet, 'A6', 'F6', 'DESIRED FINANCIAL PROFILE');
  setCell_(sheet, BUDGET_NAME_CELL, { merge: 'F8', font: FONT.DISPLAY, size: 28, bold: true, color: BRAND.FOREST, v: 'bottom' });
  setCell_(sheet, BUDGET_SUB_CELL, { merge: 'F9', font: FONT.BODY, size: 11, bold: true, color: BRAND.GOLD });
  setCell_(sheet, BUDGET_BLURB_CELL, { merge: 'F11', font: FONT.BODY, size: 13, color: BRAND.BODY, wrap: true, v: 'top' });
  sheet.setRowHeight(11, 36);

  // income + picker input cells
  setCell_(sheet, 'A13', { value: 'Monthly income', font: FONT.BODY, size: 11, bold: true, color: BRAND.BODY });
  setCell_(sheet, 'A14', { value: 'Active profile', font: FONT.BODY, size: 9, color: BRAND.CAPTION });
  sheet.getRange(BUDGET_INCOME_CELL)
    .setFormula("=INDEX('" + TABS.ENGINE + "'!$B$22:$Y$22,1,24)")
    .setNumberFormat('$#,##0').setBackground(BRAND.YELLOW)
    .setBorder(true, true, true, true, false, false, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);
  sheet.getRange(BUDGET_PICKER_CELL).setFontColor(BRAND.CAPTION).setFontSize(9);

  // hero KPI cards (right, cols H-L) at row 6 — % is the primary unit
  kpiCard_(sheet, 'H6', 2, 'PRESET TOTAL', '=SUM(C17:C36)',
    '="$"&TEXT(SUM(C17:C36)*$C$13,"#,##0")&" of $"&TEXT($C$13,"#,##0")', BRAND.FOREST);
  kpiCard_(sheet, 'J6', 3, 'WITH OVERRIDES', '=SUM(E17:E36)',
    '="$"&TEXT(SUM(F17:F36),"#,##0")&" · "&IF(ABS(SUM(E17:E36)-SUM(C17:C36))<0.0005,"on preset",IF(SUM(E17:E36)>SUM(C17:C36),TEXT(SUM(E17:E36)-SUM(C17:C36),"0.0%")&" above preset",TEXT(SUM(C17:C36)-SUM(E17:E36),"0.0%")&" below preset"))', BRAND.GOLD);
  sheet.getRange(7, 8).setNumberFormat('0.0%');
  sheet.getRange(7, 10).setNumberFormat('0.0%');

  // Category targets table
  sectionLabel_(sheet, 'A15', 'F15', 'CATEGORY TARGETS · 20 CATEGORIES');
  setCell_(sheet, 'G15', { value: 'PRESET LOCKED · TYPE A % INTO OVERRIDE TO TWEAK', merge: 'L15',
    font: FONT.BODY, size: 9, bold: true, color: BRAND.GOLD, bg: BRAND.CREAM, h: 'right', v: 'middle' });
  sheet.getRange(16, 2, 1, 7).setValues([['Category', 'Preset %', 'Override %', 'Target %', 'Target $', 'Δ %', 'Share']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  for (var i = 0; i < CATEGORIES.length; i++) {
    var rr = BUDGET_TARGETS_FIRST_ROW + i;
    sheet.getRange(rr, 2).setValue(CATEGORIES[i]).setFontFamily(FONT.BODY).setFontSize(11).setFontColor(BRAND.BODY);
    // Preset % col (locked, cream — themable as section so it follows palette)
    sheet.getRange(rr, 3).setNumberFormat('0.0%').setBackground(BRAND.CREAM).setFontColor(BRAND.CAPTION);
    themable_(sheet.getName(), 'section', sheet.getRange(rr, 3).getA1Notation());
    // Override % col (yellow editable always)
    sheet.getRange(rr, 4).setNumberFormat('0.0%').setBackground(BRAND.YELLOW)
      .setBorder(true, true, true, true, false, false, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);
    // Target % — effective percentage (override if present, else preset)
    sheet.getRange(rr, 5).setFormula('=IF(D' + rr + '="",C' + rr + ',D' + rr + ')')
      .setNumberFormat('0.0%').setFontWeight('bold');
    // Target $ — Target % × income
    sheet.getRange(rr, 6).setFormula('=E' + rr + '*$C$13').setNumberFormat('$#,##0').setFontWeight('bold');
    // Δ % from preset (signed)
    sheet.getRange(rr, 7).setFormula('=IF(D' + rr + '="",0,D' + rr + '-C' + rr + ')')
      .setNumberFormat('+0.0%;−0.0%;"—"');
    // Share bar based on Target $
    sheet.getRange(rr, 8).setFormula(
      '=SPARKLINE(F' + rr + ',{"charttype","bar";"max",MAX($F$17:$F$36);"color1",SWITCH(B' + rr +
      ',"Savings","' + BRAND.GOLD + '","Debt Payments","' + BRAND.GARNET + '","' + BRAND.FOREST + '")})');
  }

  // Δ column color: red over preset, green under preset, neutral at zero/blank
  var rules = sheet.getConditionalFormatRules();
  var deltaRange = sheet.getRange('G17:G36');
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenNumberGreaterThan(0).setFontColor(BRAND.GARNET).setRanges([deltaRange]).build());
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenNumberLessThan(0).setFontColor(BRAND.CANOPY).setRanges([deltaRange]).build());
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenNumberEqualTo(0).setFontColor(BRAND.CAPTION).setRanges([deltaRange]).build());
  sheet.setConditionalFormatRules(rules);

  // Footer summary bar (Forest)
  var sumRow = BUDGET_TARGETS_FIRST_ROW + 20 + 1;
  sheet.getRange(sumRow, 1, 1, 12).setBackground(BRAND.FOREST);
  themable_(sheet.getName(), 'primary', sheet.getRange(sumRow, 1, 1, 12).getA1Notation());
  var parts = [
    ['MONTHLY INCOME', '=' + BUDGET_INCOME_CELL, '$#,##0'],
    ['PRESET TOTAL', '=SUM(C17:C36)*$C$13', '$#,##0'],
    ['WITH OVERRIDES', '=SUM(F17:F36)', '$#,##0'],
    ['SAVINGS RATE', '=E' + BUDGET_SAVINGS_ROW, '0.0%']
  ];
  for (var p = 0; p < 4; p++) {
    var c0 = 1 + p * 3;
    setCell_(sheet, sheet.getRange(sumRow, c0).getA1Notation(), { value: parts[p][0],
      merge: sheet.getRange(sumRow, c0 + 2).getA1Notation(), font: FONT.BODY, size: 9, bold: true,
      color: BRAND.GOLD, bg: BRAND.FOREST, h: 'left', v: 'middle' });
  }
  var valRow = sumRow + 1;
  for (var q = 0; q < 4; q++) {
    var cc = 1 + q * 3;
    var vc = sheet.getRange(valRow, cc, 1, 3).merge();
    vc.setFormula(parts[q][1]).setNumberFormat(parts[q][2]).setFontFamily(FONT.DISPLAY).setFontSize(18)
      .setFontWeight('bold').setFontColor(BRAND.PARCHMENT).setBackground(BRAND.FOREST).setHorizontalAlignment('left');
  }
  sheet.getRange(valRow, 1, 1, 12).setBackground(BRAND.FOREST);
  themable_(sheet.getName(), 'primary', sheet.getRange(valRow, 1, 1, 12).getA1Notation());

  setCell_(sheet, 'A' + (valRow + 1), { value: "Override cells take a % of income. Target $ feeds Dashboard, Health Score, and Categories.",
    merge: 'L' + (valRow + 1), font: FONT.BODY, size: 11, italic: true, color: BRAND.CAPTION });

  footer_(sheet, valRow + 3, 'L');
  setColWidths_(sheet, [40, 160, 80, 95, 80, 100, 80, 90, 80, 80, 80, 80]);

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
  themable_(sheet.getName(), 'primary', sheet.getRange(r, 1, 1, 8).getA1Notation());
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
  themable_(sheet.getName(), 'primary', sheet.getRange(fr, 1, 1, 12).getA1Notation());
  setCell_(sheet, 'A' + (fr + 1), {
    value: 'Japan Trip Fund hits target by Oct 2026 — one month late. Bump the monthly transfer from $200 to $275 and you hit September.',
    merge: 'L' + (fr + 2), font: FONT.BODY, size: 13, color: BRAND.PARCHMENT, bg: BRAND.FOREST, wrap: true, v: 'middle' });
  themable_(sheet.getName(), 'primary', sheet.getRange(fr + 1, 1, 2, 12).getA1Notation());

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
    themable_(sheet.getName(), 'primary', sheet.getRange(r, c0).getA1Notation());
    setCell_(sheet, sheet.getRange(r, c0 + 1).getA1Notation(), { value: steps[s][1],
      merge: sheet.getRange(r, c0 + 3).getA1Notation(), font: FONT.BODY, size: 11, color: BRAND.BODY, wrap: true, v: 'middle' });
  }
  sheet.setRowHeight(r, 40);

  // account name input — dropdown sourced from the Accounts list so the
  // buyer doesn't retype it. Named range may not exist yet (setNamedRanges_
  // runs after this build); fall back to the literal A10:A41 range.
  setCell_(sheet, 'A' + (r + 2), { value: 'Account name', font: FONT.BODY, size: 11, bold: true, color: BRAND.BODY });
  sheet.getRange(IMPORT_ACCOUNT_CELL).setValue('Chase Joint Checking').setBackground(BRAND.YELLOW)
    .setBorder(true, true, true, true, false, false, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);
  sheet.getRange(IMPORT_ACCOUNT_CELL + ':E10').merge();
  var ss = SpreadsheetApp.getActive();
  var acctRange = ss.getRangeByName('cc_accounts_list') ||
    ss.getRange("'" + TABS.ACCOUNTS + "'!A10:A41");
  var acctRule = SpreadsheetApp.newDataValidation()
    .requireValueInRange(acctRange, true).setAllowInvalid(false).build();
  sheet.getRange(IMPORT_ACCOUNT_CELL).setDataValidation(acctRule);

  // paste zone caption (row 11) + unmerged grid (A12:H61)
  setCell_(sheet, 'A11', { value: 'Paste your CSV anywhere below — the first non-empty row is treated as the header.',
    merge: 'L11', font: FONT.BODY, size: 11, italic: true, color: BRAND.CAPTION });
  var zone = sheet.getRange(IMPORT_PASTE_ANCHOR + ':H' + IMPORT_PASTE_LAST_ROW);
  zone.setBackground(BRAND.GREEN_ZONE).setFontFamily('Roboto Mono').setFontSize(10)
    .setHorizontalAlignment('left').setVerticalAlignment('middle').setWrap(false)
    .setBorder(true, true, true, true, true, true, BRAND.HAIRLINE, SpreadsheetApp.BorderStyle.SOLID);

  // Review Income block — 20 rows of pre-validated review capacity
  var sec = REVIEW_INCOME_HEADER_ROW - 1;  // row 63 section label
  sectionLabel_(sheet, 'A' + sec, 'L' + sec, 'REVIEW INCOME · CONFIRM POSITIVE-AMOUNT ROWS');
  sheet.getRange(REVIEW_INCOME_HEADER_ROW, 1, 1, 5)
    .setValues([['Date', 'Description', 'Amount', 'Income?', 'Notes']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  var ynRule = SpreadsheetApp.newDataValidation().requireValueInList(['Yes', 'No'], true).build();
  sheet.getRange(REVIEW_INCOME_FIRST_ROW, 4, REVIEW_INCOME_ROW_COUNT, 1).setDataValidation(ynRule);

  // Uncategorized Merchants block — turn any Misc row into a rule with a
  // single dropdown pick. Populated by importTransactions after each import.
  sectionLabel_(sheet, 'A' + UNCAT_SECTION_ROW, 'L' + UNCAT_SECTION_ROW,
    'UNCATEGORIZED MERCHANTS · PICK A CATEGORY TO ADD A RULE');
  sheet.getRange(UNCAT_HEADER_ROW, 1, 1, 5)
    .setValues([['Sample Description', 'Hits', 'Keyword', 'Category', 'Status']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  // Keyword column (C): yellow, editable.
  sheet.getRange(UNCAT_FIRST_ROW, 3, UNCAT_ROW_COUNT, 1).setBackground(BRAND.YELLOW)
    .setFontFamily('Roboto Mono').setFontSize(10);
  // Category column (D): yellow + dropdown of the 20 categories.
  sheet.getRange(UNCAT_FIRST_ROW, 4, UNCAT_ROW_COUNT, 1).setBackground(BRAND.YELLOW);
  var uncatRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(CATEGORIES, true).setAllowInvalid(false).build();
  sheet.getRange(UNCAT_FIRST_ROW, 4, UNCAT_ROW_COUNT, 1).setDataValidation(uncatRule);

  var captionRow = UNCAT_FIRST_ROW + UNCAT_ROW_COUNT + 1;
  setCell_(sheet, 'A' + captionRow, { value: 'Sniffs headers from Chase, BoA, Wells Fargo, Cap One, Ally, Citi, USAA, Discover, Amex. Duplicates (same date + description + amount) are skipped on re-import. Picking a Category above saves a keyword rule and reapplies it to past Misc rows.',
    merge: 'L' + captionRow, font: FONT.BODY, size: 11, italic: true, color: BRAND.CAPTION, wrap: true });

  footer_(sheet, captionRow + 2, 'L');
  setColWidths_(sheet, [220, 50, 130, 130, 110, 80, 80, 80, 60, 60, 60, 60]);
}
