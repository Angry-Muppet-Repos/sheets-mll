/**
 * Column & Co. — The Foundation v2.1
 * 10 · Menu + triggers (onOpen / onEdit / onSelectionChange).
 */

function onOpen() {
  buildMenu_();
  hideSystemTabs_();
  var dp = PropertiesService.getDocumentProperties();
  if (!dp.getProperty('cc_first_open')) {
    var start = SpreadsheetApp.getActive().getSheetByName(TABS.START);
    if (start) start.activate();
    dp.setProperty('cc_first_open', 'true');
  }
}

function buildMenu_() {
  var ui = SpreadsheetApp.getUi();
  var menu = ui.createMenu(CC.MENU_TITLE);
  menu.addItem('Import Bank Transactions', 'importTransactions');
  menu.addItem('Clear Paste Zone', 'clearPasteZone');
  menu.addSeparator();
  menu.addSubMenu(buildThemeMenu_());
  menu.addSubMenu(buildProfileMenu_());
  menu.addSeparator();
  menu.addItem('Renumber Ledger', 'renumberLedger');
  menu.addSeparator();
  menu.addItem('Help…', 'openHelpSidebar');
  menu.addSeparator();
  menu.addSubMenu(ui.createMenu('Setup')
    .addItem('Build workbook (mock data)', 'buildMockWorkbook')
    .addItem('Build workbook (blank)', 'buildBlankWorkbook'));
  menu.addToUi();
}

function hideSystemTabs_() {
  var ss = SpreadsheetApp.getActive();
  SYSTEM_TABS.forEach(function (n) {
    var sh = ss.getSheetByName(n);
    if (sh) sh.hideSheet();
  });
}

function onEdit(e) {
  if (!e || !e.range) return;
  var sheet = e.range.getSheet();
  var name = sheet.getName();

  // Accounts: stamp Last Updated (col F) when Current Balance (col E) changes
  if (name === TABS.ACCOUNTS && e.range.getColumn() === 5 && e.range.getRow() >= 10) {
    sheet.getRange(e.range.getRow(), 6).setValue(new Date());
  }

  // Monthly Budget: auto-save Override-column edits (% of income) to the active profile.
  // Normalize bare numbers > 1 — typing "10" in a percent cell stores 10 (= 1000%);
  // assume the buyer meant 10% and rewrite as 0.10.
  if (name === TABS.BUDGET && e.range.getColumn() === 4 &&
      e.range.getRow() >= BUDGET_TARGETS_FIRST_ROW && e.range.getRow() <= BUDGET_TARGETS_FIRST_ROW + 19) {
    var v = e.range.getValue();
    if (typeof v === 'number' && v > 1) {
      e.range.setValue(v / 100);
    }
    var pid = String(sheet.getRange(BUDGET_PICKER_CELL).getValue() || '');
    if (pid) saveOverrides_(pid);
  }
}

function onSelectionChange(e) {
  if (!e || !e.range) return;
  var sheet = e.range.getSheet();
  var name = sheet.getName();
  var a1 = e.range.getA1Notation();

  // Dashboard month pills (row of 6 at the month-selector row)
  if (name === TABS.DASHBOARD) {
    var col = e.range.getColumn();
    var row = e.range.getRow();
    // pills sit in the title+3 row across cols F..K
    if (col >= 6 && col <= 11) {
      var idx = 18 + (col - 6); // Dec25..May26 => engine indices 18..23
      sheet.getRange('N4').setValue(idx);
    }
  }

  // Trends window pills (cols I/J/K on the title row)
  if (name === TABS.TRENDS) {
    var c = e.range.getColumn();
    if (c >= 9 && c <= 11) {
      sheet.getRange('N7').setValue([6, 12, 24][c - 9]);
    }
  }
}
