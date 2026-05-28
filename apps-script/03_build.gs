/**
 * Column & Co. — The Foundation v2.1
 * 03 · Build orchestrator.
 *
 * buildWorkbook(mode) constructs the entire 14-tab workbook from scratch:
 * brand chrome, all tabs, named ranges, seeded hidden sheets, mock data.
 *   mode = 'mock'  → ships Marcus & Elena Brooks pre-populated (demo)
 *   mode = 'blank' → editable cells cleared for a real buyer
 *
 * Run once from the Apps Script editor (or the 💳 Column & Co. ▸ Setup menu)
 * against an empty bound spreadsheet.
 */

function buildMockWorkbook()  { buildWorkbook('mock'); }
function buildBlankWorkbook() { buildWorkbook('blank'); }

function buildWorkbook(mode) {
  mode = (mode === 'blank') ? 'blank' : 'mock';
  var ss = SpreadsheetApp.getActive();
  THEME_MAP = {};

  // 1. Create/clear every sheet up front so cross-tab formulas resolve.
  var sheets = {};
  TAB_ORDER.forEach(function (name) { sheets[name] = getOrCreateSheet_(ss, name); });

  // 2. Hidden data + system sheets first.
  buildConfig_(sheets[TABS.CONFIG]);
  buildSchema_(sheets[TABS.SCHEMA]);
  buildCategories_(sheets[TABS.CATEGORIES], mode);
  buildAccounts_(sheets[TABS.ACCOUNTS], mode);
  buildTransactions_(sheets[TABS.TX], mode);
  buildEngine_(sheets[TABS.ENGINE], mode);

  // 3. Presentation + action tabs.
  buildStartHere_(sheets[TABS.START]);
  buildTrends_(sheets[TABS.TRENDS], mode);
  buildDashboard_(sheets[TABS.DASHBOARD], mode);
  buildMonthlyBudget_(sheets[TABS.BUDGET], mode);
  buildHealthScore_(sheets[TABS.HEALTH], mode);
  buildGoals_(sheets[TABS.GOALS], mode);
  buildBankImport_(sheets[TABS.IMPORT]);
  buildNetWorth_(sheets[TABS.NETWORTH], mode);

  // 4. Named ranges (catalog from 06_data_model.md, trimmed to what's wired).
  setNamedRanges_(ss);

  // 5. Order, color, hide. Remove any stray sheets (e.g. default Sheet1).
  reorderTabs_(ss);
  ss.getSheets().forEach(function (sh) {
    if (TAB_ORDER.indexOf(sh.getName()) === -1) {
      try { ss.deleteSheet(sh); } catch (e) {}
    }
  });
  SYSTEM_TABS.forEach(function (n) { ss.getSheetByName(n).hideSheet(); });

  // 6. Persist build state.
  persistThemeMap_();
  var dp = PropertiesService.getDocumentProperties();
  dp.setProperty('cc_active_palette', DEFAULT_PALETTE);
  dp.setProperty('cc_active_profile', DEFAULT_PROFILE);
  dp.setProperty('cc_build_mode', mode);
  dp.deleteProperty('cc_first_open');

  // 7. Land on Start Here.
  sheets[TABS.START].activate();
  ss.toast('Built The Foundation ' + CC.VERSION + ' (' + mode + ' data)', CC.BRAND, 5);
}

function getOrCreateSheet_(ss, name) {
  var sh = ss.getSheetByName(name);
  if (!sh) sh = ss.insertSheet(name);
  // Fully unmerge the whole grid first — clear() does NOT remove merges, and
  // leftover merges from a prior build collide with the new chrome merges.
  try { sh.getRange(1, 1, sh.getMaxRows(), sh.getMaxColumns()).breakApart(); } catch (e) {}
  sh.clear();
  sh.clearConditionalFormatRules();
  sh.getCharts().forEach(function (c) { sh.removeChart(c); });
  sh.setHiddenGridlines(true);
  return sh;
}

function reorderTabs_(ss) {
  for (var i = 0; i < TAB_ORDER.length; i++) {
    var sh = ss.getSheetByName(TAB_ORDER[i]);
    ss.setActiveSheet(sh);
    ss.moveActiveSheet(i + 1);
  }
}

function setNamedRanges_(ss) {
  var defs = {
    'cc_active_palette':  TABS.CONFIG + '!B40',
    'cc_active_profile':  TABS.CONFIG + '!B41',
    'cc_palettes':        TABS.CONFIG + '!A3:I18',
    'cc_profiles':        TABS.CONFIG + '!C22:X31',
    'cc_categories':      TABS.CATEGORIES + '!A11:A30',
    'cc_keyword_rules':   TABS.CATEGORIES + '!E11:G200',
    'cc_budget_income':   TABS.BUDGET + '!C13',
    'cc_budget_targets':  TABS.BUDGET + '!F17:F36',
    'cc_engine_months':   TABS.ENGINE + '!B1:Y1',
    'cc_engine_data':     TABS.ENGINE + '!B2:Y23',
    'cc_dashboard_month': TABS.DASHBOARD + '!N4',
    'cc_trends_window':   TABS.TRENDS + '!N7',
    'cc_health_composite':TABS.HEALTH + '!B9',
    'cc_accounts_list':   TABS.ACCOUNTS + '!A10:A41'
  };
  Object.keys(defs).forEach(function (name) {
    try { ss.setNamedRange(name, ss.getRange(defs[name])); } catch (e) {}
  });
}
