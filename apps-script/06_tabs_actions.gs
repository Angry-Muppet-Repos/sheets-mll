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
    .setFormula("=INDEX('" + TABS.ENGINE + "'!$B$27:$Y$27,1,24)")
    .setNumberFormat('$#,##0').setBackground(BRAND.YELLOW)
    .setBorder(true, true, true, true, false, false, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);
  sheet.getRange(BUDGET_PICKER_CELL).setFontColor(BRAND.CAPTION).setFontSize(9);

  // hero KPI cards (right, cols H-L) at row 6 — % is the primary unit
  kpiCard_(sheet, 'H6', 2, 'PRESET TOTAL', '=SUM(C17:C41)',
    '="$"&TEXT(SUM(C17:C41)*$C$13,"#,##0")&" of $"&TEXT($C$13,"#,##0")', BRAND.FOREST);
  kpiCard_(sheet, 'J6', 3, 'WITH OVERRIDES', '=SUM(E17:E41)',
    '="$"&TEXT(SUM(F17:F41),"#,##0")&" · "&IF(ABS(SUM(E17:E41)-SUM(C17:C41))<0.0005,"on preset",IF(SUM(E17:E41)>SUM(C17:C41),TEXT(SUM(E17:E41)-SUM(C17:C41),"0.0%")&" above preset",TEXT(SUM(C17:C41)-SUM(E17:E41),"0.0%")&" below preset"))', BRAND.GOLD);
  sheet.getRange(7, 8).setNumberFormat('0.0%');
  sheet.getRange(7, 10).setNumberFormat('0.0%');

  // Category targets table
  sectionLabel_(sheet, 'A15', 'F15', 'CATEGORY TARGETS · 20 FIXED + 5 CUSTOM');
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
      '=SPARKLINE(F' + rr + ',{"charttype","bar";"max",MAX($F$17:$F$41);"color1",SWITCH(B' + rr +
      ',"Savings","' + BRAND.GOLD + '","Debt Payments","' + BRAND.GARNET + '","' + BRAND.FOREST + '")})');
  }
  // 5 custom-slot rows (37-41). Category name is a formula reading Categories!A31..A35.
  // Override / Target / Δ behave identically — blank slot name renders a blank row.
  for (var cs = 0; cs < CUSTOM_CATEGORY_SLOTS; cs++) {
    var crr = BUDGET_TARGETS_FIRST_ROW + 20 + cs;   // 37..41
    sheet.getRange(crr, 2).setFormula("='" + TABS.CATEGORIES + "'!A" + (31 + cs))
      .setFontFamily(FONT.BODY).setFontSize(11).setFontColor(BRAND.BODY).setFontStyle('italic');
    sheet.getRange(crr, 3).setNumberFormat('0.0%').setBackground(BRAND.CREAM).setFontColor(BRAND.CAPTION);
    themable_(sheet.getName(), 'section', sheet.getRange(crr, 3).getA1Notation());
    sheet.getRange(crr, 4).setNumberFormat('0.0%').setBackground(BRAND.YELLOW)
      .setBorder(true, true, true, true, false, false, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);
    sheet.getRange(crr, 5).setFormula('=IF(D' + crr + '="",C' + crr + ',D' + crr + ')')
      .setNumberFormat('0.0%').setFontWeight('bold');
    sheet.getRange(crr, 6).setFormula('=E' + crr + '*$C$13').setNumberFormat('$#,##0').setFontWeight('bold');
    sheet.getRange(crr, 7).setFormula('=IF(D' + crr + '="",0,D' + crr + '-C' + crr + ')')
      .setNumberFormat('+0.0%;−0.0%;"—"');
    sheet.getRange(crr, 8).setFormula(
      '=IF(B' + crr + '="","",SPARKLINE(F' + crr + ',{"charttype","bar";"max",MAX($F$17:$F$41);"color1","' + BRAND.GOLD + '"}))');
  }

  // Δ column color: red over preset, green under preset, neutral at zero/blank
  var rules = sheet.getConditionalFormatRules();
  var deltaRange = sheet.getRange('G17:G41');
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
    'Pick a type, a source, a target. Current and Status track live from your data.');

  var hdr = ['Goal Name', 'Type', 'Source', 'Target', 'Current', '% Complete', 'Deadline', 'Status', 'Note'];
  sheet.getRange(r, 1, 1, 9).setValues([hdr]).setFontWeight('bold').setBackground(BRAND.FOREST)
    .setFontColor(BRAND.PARCHMENT).setFontFamily(FONT.BODY).setFontSize(10);
  themable_(sheet.getName(), 'primary', sheet.getRange(r, 1, 1, 9).getA1Notation());
  var start = r + 1;
  var goals = (mode === 'mock') ? MOCK.goals : [];
  var rowCount = Math.max(goals.length, 7);

  // Hidden helper: union of Accounts + Categories names for the Source dropdown.
  // Spills from M{start}; FILTER drops blanks (custom-slot rows, empty account rows).
  sheet.getRange(start, 13).setFormula(
    '={FILTER(cc_accounts_list,LEN(cc_accounts_list)>0);FILTER(cc_tx_categories,LEN(cc_tx_categories)>0)}');

  for (var i = 0; i < rowCount; i++) {
    var rr = start + i;
    if (i < goals.length) {
      var g = goals[i];
      sheet.getRange(rr, 1).setValue(g[0]);                 // A: name
      sheet.getRange(rr, 2).setValue(g[1]);                 // B: type
      sheet.getRange(rr, 3).setValue(g[2]).setBackground(BRAND.YELLOW); // C: source
      sheet.getRange(rr, 4).setValue(g[3]).setBackground(BRAND.YELLOW); // D: target
      sheet.getRange(rr, 7).setValue(g[4]);                 // G: deadline
    } else {
      // Empty seed rows still get yellow on Source/Target/Note so the buyer
      // sees where to type.
      sheet.getRange(rr, 3).setBackground(BRAND.YELLOW);
      sheet.getRange(rr, 4).setBackground(BRAND.YELLOW);
    }
    sheet.getRange(rr, 9).setBackground(BRAND.YELLOW).setWrap(true); // I: note (always editable)

    // Per-row number format: Savings Rate uses %, all others $.
    var fmt = '=IF($B' + rr + '="Savings Rate","0.0%","$#,##0")';
    // Apps Script doesn't accept formula-as-format, so we just set both based on
    // mock data here. When the buyer changes Type later, they'll need to adjust
    // the format manually OR we set both formats unconditionally to a smart one.
    // Use a per-row check at build time:
    var isRate = (i < goals.length && goals[i][1] === 'Savings Rate');
    sheet.getRange(rr, 4).setNumberFormat(isRate ? '0.0%' : '$#,##0');
    sheet.getRange(rr, 5).setNumberFormat(isRate ? '0.0%' : '$#,##0');

    // E: Current — type-aware live formula.
    sheet.getRange(rr, 5).setFormula(
      '=IFS(' +
        '$B' + rr + '="Spending Limit", IFERROR(INDEX(_Engine!$B$2:$Y$26,MATCH($C' + rr + ',_Engine!$A$2:$A$26,0),cc_dashboard_month+1),""),' +
        '$B' + rr + '="Savings Target", IFERROR(VLOOKUP($C' + rr + ',Accounts!$A$10:$E$21,5,FALSE),""),' +
        '$B' + rr + '="Debt Payoff", IFERROR(VLOOKUP($C' + rr + ',Accounts!$A$10:$D$21,4,FALSE)-VLOOKUP($C' + rr + ',Accounts!$A$10:$E$21,5,FALSE),""),' +
        '$B' + rr + '="Savings Rate", IFERROR(INDEX(_Engine!$B$30:$Y$30,1,cc_dashboard_month+1),0),' +
        'TRUE,"")');

    // F: % Complete — sparkline bar, type-aware color (high=good for save/debt/rate; high=bad for spend).
    sheet.getRange(rr, 6).setFormula(
      '=IFERROR(SPARKLINE($E' + rr + ',{"charttype","bar";"max",$D' + rr + ';"color1",' +
        'IF(OR($B' + rr + '="Savings Target",$B' + rr + '="Debt Payoff",$B' + rr + '="Savings Rate"),' +
          'IF($E' + rr + '/$D' + rr + '>=1,"' + BRAND.FOREST + '",IF($E' + rr + '/$D' + rr + '>=0.75,"' + BRAND.GOLD + '","' + BRAND.GARNET + '")),' +
          'IF($E' + rr + '/$D' + rr + '>1,"' + BRAND.GARNET + '",IF($E' + rr + '/$D' + rr + '>0.85,"' + BRAND.GOLD + '","' + BRAND.FOREST + '"))' +
        ')}),"")');

    // H: Status — type-aware.
    sheet.getRange(rr, 8).setFormula(
      '=IFS(' +
        'OR($B' + rr + '="",$E' + rr + '="",$D' + rr + '=""),"",' +
        '$B' + rr + '="Spending Limit", IF($E' + rr + '<=$D' + rr + ',"On Track",IF($E' + rr + '<=$D' + rr + '*1.1,"Fair","Over")),' +
        '$B' + rr + '="Savings Target", IF($E' + rr + '>=$D' + rr + ',"On Track",IF($E' + rr + '>=$D' + rr + '*0.75,"Fair","Over")),' +
        '$B' + rr + '="Debt Payoff", IF($E' + rr + '>=$D' + rr + ',"On Track",IF($E' + rr + '>=$D' + rr + '*0.75,"Fair","Over")),' +
        '$B' + rr + '="Savings Rate", IF($E' + rr + '>=0.2,"On Track",IF($E' + rr + '>=0.1,"Fair","Over")),' +
        'TRUE,"")');

    // N (hidden): forecast gap helper — positive remaining $ for incomplete Savings Target goals only.
    sheet.getRange(rr, 14).setFormula(
      '=IF(AND($B' + rr + '="Savings Target",ISNUMBER($E' + rr + '),$E' + rr + '<$D' + rr + '),$D' + rr + '-$E' + rr + ',0)');

    if (i % 2 === 1) { var z = sheet.getRange(rr, 1, 1, 9).getA1Notation(); sheet.getRange(z).setBackground(PALETTE_BY_ID.light.zebra); themable_(sheet.getName(), 'zebra', z); }
  }

  // Type dropdown
  var typeRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Savings Target', 'Debt Payoff', 'Spending Limit', 'Savings Rate'], true).build();
  sheet.getRange(start, 2, rowCount, 1).setDataValidation(typeRule);

  // Source dropdown — union of accounts + categories, sourced from hidden col M.
  var sourceRule = SpreadsheetApp.newDataValidation()
    .requireValueInRange(sheet.getRange(start, 13, 50, 1), true).setAllowInvalid(true).build();
  sheet.getRange(start, 3, rowCount, 1).setDataValidation(sourceRule);

  statusChipCF_(sheet, sheet.getRange(start, 8, rowCount, 1).getA1Notation());

  // Forecast strip — Forest panel with a live formula picking the biggest-gap
  // Savings Target goal and projecting months at current NetCashFlow pace.
  var fr = start + rowCount + 1;
  setCell_(sheet, 'A' + fr, { value: 'FORECAST', merge: 'L' + fr,
    font: FONT.BODY, size: 10, bold: true, color: BRAND.GOLD, bg: BRAND.FOREST, v: 'middle' });
  themable_(sheet.getName(), 'primary', sheet.getRange(fr, 1, 1, 12).getA1Notation());

  var gapRange = 'N' + start + ':N' + (start + rowCount - 1);
  var nameRange = 'A' + start + ':A' + (start + rowCount - 1);
  var ncf = 'INDEX(_Engine!$B$29:$Y$29,1,cc_dashboard_month+1)';
  setCell_(sheet, 'A' + (fr + 1), {
    formula: '=IF(MAX(' + gapRange + ')<=0,"All Savings Target goals met — pick a new target!",' +
      'IF(' + ncf + '<=0,"Negative cash flow this month — trim before adding a new goal.",' +
      'INDEX(' + nameRange + ',MATCH(MAX(' + gapRange + '),' + gapRange + ',0))&" hits target in ~"&' +
      'ROUND(MAX(' + gapRange + ')/' + ncf + ',0)&" months at current pace ($"&TEXT(' + ncf + ',"#,##0")&"/mo saved)."))',
    merge: 'L' + (fr + 2), font: FONT.BODY, size: 13, color: BRAND.PARCHMENT, bg: BRAND.FOREST, wrap: true, v: 'middle' });
  themable_(sheet.getName(), 'primary', sheet.getRange(fr + 1, 1, 2, 12).getA1Notation());

  footer_(sheet, fr + 4, 'L');
  setColWidths_(sheet, [140, 110, 130, 80, 80, 110, 90, 80, 180, 60, 60, 60]);
  sheet.hideColumns(13, 2);  // M (source union) + N (forecast gaps)
}

// ── Bank Import Guide ─────────────────────────────────────────────────
function buildBankImport_(sheet) {
  chrome_(sheet, TABS.IMPORT, 'L');
  var r = titleRow_(sheet, 'L', 'Bank Import Guide', 'Paste a CSV. We figure out the rest. After import, the cursor jumps to whichever step still needs you.');

  // 5-step row, 12 cols total: 3+2+2+2+3. Steps 1-3 are static; steps 4-5
  // show a live pending count that flips to ✓ when the queue is empty.
  var dRev = REVIEW_INCOME_FIRST_ROW;                                   // 65
  var dRevEnd = REVIEW_INCOME_FIRST_ROW + REVIEW_INCOME_ROW_COUNT - 1;  // 84
  var dUnc = UNCAT_FIRST_ROW;                                           // 89
  var dUncEnd = UNCAT_FIRST_ROW + UNCAT_ROW_COUNT - 1;                  // 108
  var reviewCountFormula =
    '=IF(COUNTA(A' + dRev + ':A' + dRevEnd + ')=0,"4",' +
    'IF(COUNTA(A' + dRev + ':A' + dRevEnd + ')=COUNTA(D' + dRev + ':D' + dRevEnd + '),"✓",' +
    'COUNTA(A' + dRev + ':A' + dRevEnd + ')-COUNTA(D' + dRev + ':D' + dRevEnd + ')))';
  var uncatCountFormula =
    '=IF(COUNTA(A' + dUnc + ':A' + dUncEnd + ')=0,"5",' +
    'IF(COUNTA(A' + dUnc + ':A' + dUncEnd + ')=COUNTA(E' + dUnc + ':E' + dUncEnd + '),"✓",' +
    'COUNTA(A' + dUnc + ':A' + dUncEnd + ')-COUNTA(E' + dUnc + ':E' + dUncEnd + ')))';

  var steps = [
    { digit: '1', label: 'Pick account (C10)',     digitCol: 1, labelStart: 2, labelEnd: 3 },
    { digit: '2', label: 'Paste CSV below',        digitCol: 4, labelStart: 5, labelEnd: 5 },
    { digit: '3', label: 'Run Import',             digitCol: 6, labelStart: 7, labelEnd: 7 },
    { digit: reviewCountFormula, label: 'Review Income ↓', digitCol: 8, labelStart: 9, labelEnd: 9 },
    { digit: uncatCountFormula,  label: 'Save merchant rules ↓', digitCol: 10, labelStart: 11, labelEnd: 12 }
  ];
  for (var s = 0; s < steps.length; s++) {
    var st = steps[s];
    var digitA1 = sheet.getRange(r, st.digitCol).getA1Notation();
    var digitOpts = {
      font: FONT.DISPLAY, size: 16, bold: true, color: BRAND.PARCHMENT,
      bg: BRAND.FOREST, h: 'center', v: 'middle'
    };
    if (String(st.digit).charAt(0) === '=') digitOpts.formula = st.digit;
    else digitOpts.value = st.digit;
    setCell_(sheet, digitA1, digitOpts);
    themable_(sheet.getName(), 'primary', digitA1);

    var labelStartA1 = sheet.getRange(r, st.labelStart).getA1Notation();
    var labelEndA1 = sheet.getRange(r, st.labelEnd).getA1Notation();
    setCell_(sheet, labelStartA1, {
      value: st.label,
      merge: st.labelEnd > st.labelStart ? labelEndA1 : null,
      font: FONT.BODY, size: 11, color: BRAND.BODY, wrap: true, v: 'middle'
    });
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
    ss.getRange("'" + TABS.ACCOUNTS + "'!A10:A21");
  var acctRule = SpreadsheetApp.newDataValidation()
    .requireValueInRange(acctRange, true).setAllowInvalid(false).build();
  sheet.getRange(IMPORT_ACCOUNT_CELL).setDataValidation(acctRule);

  // paste zone caption (row 11) + unmerged grid (A12:H61)
  setCell_(sheet, 'A11', { value: 'Paste your CSV anywhere below — the first non-empty row is treated as the header.  New account? Use 💳 → Add Account… first.',
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
  sheet.getRange(UNCAT_HEADER_ROW, 1, 1, 6)
    .setValues([['Sample Description', 'Hits', 'Sample Amount', 'Keyword', 'Category', 'Status']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  // Sample Amount column (C): currency, locked.
  sheet.getRange(UNCAT_FIRST_ROW, 3, UNCAT_ROW_COUNT, 1)
    .setNumberFormat('$#,##0.00;[red]-$#,##0.00')
    .setFontFamily('Roboto Mono').setFontSize(10).setHorizontalAlignment('right');
  // Keyword column (D): yellow, editable.
  sheet.getRange(UNCAT_FIRST_ROW, 4, UNCAT_ROW_COUNT, 1).setBackground(BRAND.YELLOW)
    .setFontFamily('Roboto Mono').setFontSize(10);
  // Category column (E): yellow + dropdown (pulls from cc_tx_categories so
  // routing a Misc merchant straight into a custom slot works).
  sheet.getRange(UNCAT_FIRST_ROW, 5, UNCAT_ROW_COUNT, 1).setBackground(BRAND.YELLOW);
  var uncatRange = SpreadsheetApp.getActive().getRangeByName('cc_tx_categories') ||
    SpreadsheetApp.getActive().getRange("'" + TABS.CATEGORIES + "'!A11:A37");
  var uncatRule = SpreadsheetApp.newDataValidation()
    .requireValueInRange(uncatRange, true).setAllowInvalid(false).build();
  sheet.getRange(UNCAT_FIRST_ROW, 5, UNCAT_ROW_COUNT, 1).setDataValidation(uncatRule);

  var captionRow = UNCAT_FIRST_ROW + UNCAT_ROW_COUNT + 1;
  setCell_(sheet, 'A' + captionRow, { value: 'Sniffs headers from Chase, BoA, Wells Fargo, Cap One, Ally, Citi, USAA, Discover, Amex. Duplicates (same date + description + amount) are skipped on re-import. Picking a Category above saves a keyword rule and reapplies it to past Misc rows.',
    merge: 'L' + captionRow, font: FONT.BODY, size: 11, italic: true, color: BRAND.CAPTION, wrap: true });

  footer_(sheet, captionRow + 2, 'L');
  setColWidths_(sheet, [170, 50, 130, 130, 110, 80, 80, 80, 110, 60, 60, 60]);

  // Pin chrome + step pills + account-name input so the buyer always sees
  // the 5 steps (and the live pending counts on 4 & 5) while scrolling the
  // paste / review / uncategorized grids below.
  SpreadsheetApp.flush();
  try { sheet.setFrozenRows(10); } catch (e) {}
}
