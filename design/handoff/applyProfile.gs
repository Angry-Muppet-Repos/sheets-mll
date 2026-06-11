/**
 * Column & Co. — The Foundation v2.1
 * Monthly Budget Profile expansion (10 profiles, was 5)
 *
 * DROP-IN PATCH for ColumnCo_Foundation_v2.gs
 * ----------------------------------------------------------------------
 * What this adds:
 *   1. PROFILES constant       — full data for 10 budget methodologies
 *   2. applyProfile(id)        — writes 20 target values into the Monthly
 *                                Budget sheet's editable column
 *   3. buildProfileMenu_()     — submenu wired into the Column & Co. menu
 *   4. saveCustomProfile()     — snapshots current Custom edits to props
 *
 * INTEGRATION STEPS
 *   a. Paste this entire file's contents at the bottom of
 *      ColumnCo_Foundation_v2.gs
 *   b. In your existing onOpen(), append:
 *           menu.addSubMenu(buildProfileMenu_());
 *      directly above the .addToUi() call
 *   c. Confirm the named ranges below exist (one-time setup, see comments
 *      under SHEET_REFS). Adjust ranges to your actual sheet layout.
 *   d. File ▸ Save. Reload the workbook. The menu item appears under
 *      💳 Column & Co. ▸ Apply Budget Profile.
 *
 * Companion data file: handoff/profiles.json — same data, JSON form, for
 * the Excel .xlsx variant (use XLOOKUP against a hidden _Profiles sheet).
 */

// ─────────────────────────────────────────────────────────────────────
//  SHEET REFS — adjust if your Monthly Budget tab uses different cells
// ─────────────────────────────────────────────────────────────────────
var BUDGET_SHEET_NAME   = 'Monthly Budget';
var PROFILE_PICKER_CELL = 'C5';   // single cell holding the active profile id
var INCOME_CELL         = 'C7';   // monthly income input
// 20 target cells — column C, rows 10..29, one per category (in CATEGORIES order)
var TARGETS_FIRST_ROW   = 10;
var TARGETS_COL_LETTER  = 'C';

var CATEGORIES = [
  'Housing', 'Food & Dining', 'Transportation', 'Shopping',
  'Utilities', 'Entertainment', 'Subscriptions', 'Personal Care',
  'Gifts & Donations', 'Health & Medical', 'Insurance', 'Savings',
  'Debt Payments', 'Education', 'Travel', 'Pets',
  'Childcare', 'Business', 'Taxes', 'Misc'
];

// ─────────────────────────────────────────────────────────────────────
//  PROFILES — keep in sync with handoff/profiles.json
// ─────────────────────────────────────────────────────────────────────
var PROFILES = {
  'dave-ramsey': {
    name: 'Dave Ramsey', sub: 'Envelopes · Baby Steps', income: 10230,
    targets: [2400, 900, 800, 250, 360, 150, 60, 150, 250, 200, 450, 1500, 1500, 0, 0, 100, 0, 0, 0, 160]
  },
  '50-30-20': {
    name: '50/30/20', sub: 'Needs · Wants · Savings', income: 10230,
    targets: [2400, 750, 650, 620, 380, 400, 180, 200, 300, 200, 450, 1500, 550, 100, 400, 150, 0, 0, 0, 700]
  },
  'fire': {
    name: 'FIRE', sub: 'Financial Independence · Retire Early', income: 10230,
    targets: [1800, 500, 400, 200, 340, 100, 30, 80, 150, 150, 400, 5200, 300, 0, 200, 80, 0, 0, 0, 300]
  },
  'zero-based': {
    name: 'Zero-Based', sub: 'Every dollar gets a job · YNAB-style', income: 10230,
    targets: [2400, 750, 600, 500, 380, 240, 120, 200, 300, 200, 450, 2200, 700, 50, 300, 130, 0, 0, 0, 710]
  },
  'anti-budget': {
    name: 'Anti-Budget', sub: 'Paula Pant · Save first, spend the rest', income: 10230,
    targets: [2200, 700, 550, 600, 360, 350, 150, 180, 300, 200, 420, 2050, 500, 100, 400, 130, 0, 0, 0, 1040]
  },
  'kakeibo': {
    name: 'Kakeibo', sub: 'Japanese 4-bucket · Needs · Wants · Culture · Unexpected', income: 10230,
    targets: [2200, 750, 550, 350, 360, 300, 90, 150, 250, 200, 420, 2200, 400, 300, 350, 100, 0, 0, 0, 1260]
  },
  'new-parent': {
    name: 'New Parent', sub: 'Young family · childcare + 529 priority', income: 10230,
    targets: [2400, 900, 550, 350, 380, 100, 80, 120, 150, 350, 550, 1100, 500, 200, 100, 80, 1800, 0, 0, 520]
  },
  'self-employed': {
    name: 'Self-Employed', sub: '1099 · 25% tax set-aside · biz expenses', income: 10230,
    targets: [1900, 600, 450, 250, 320, 150, 100, 120, 150, 200, 700, 1200, 400, 150, 200, 80, 0, 600, 2560, 100]
  },
  'hcol-renter': {
    name: 'HCOL Renter', sub: 'High-cost city · 40% housing · student loans', income: 10230,
    targets: [4100, 800, 350, 300, 280, 200, 100, 150, 100, 150, 280, 900, 1100, 50, 300, 80, 0, 0, 0, 990]
  },
  'custom': {
    name: 'Custom', sub: 'You set every target', income: 10230,
    targets: [2400, 650, 600, 500, 380, 240, 120, 200, 300, 180, 400, 1800, 700, 50, 250, 120, 0, 0, 0, 200]
  }
};

// Display order for the menu (active profile gets a check ✓)
var PROFILE_ORDER = [
  'dave-ramsey', '50-30-20', 'fire', 'zero-based',
  'anti-budget', 'kakeibo', 'new-parent', 'self-employed', 'hcol-renter',
  'custom'
];

// ─────────────────────────────────────────────────────────────────────
//  PUBLIC API
// ─────────────────────────────────────────────────────────────────────

/**
 * Write the 20 target values for a profile into the Monthly Budget tab.
 * For 'custom', restores the user's last saved overrides from Properties
 * (or the seed values if none exist yet).
 */
function applyProfile(profileId) {
  var p = PROFILES[profileId];
  if (!p) throw new Error('Unknown profile: ' + profileId);

  var ss    = SpreadsheetApp.getActive();
  var sheet = ss.getSheetByName(BUDGET_SHEET_NAME);
  if (!sheet) throw new Error('Missing sheet: ' + BUDGET_SHEET_NAME);

  // Record active profile
  sheet.getRange(PROFILE_PICKER_CELL).setValue(profileId);
  sheet.getRange(INCOME_CELL).setValue(p.income);

  // For Custom, prefer the user's saved overrides
  var targets = p.targets.slice();
  if (profileId === 'custom') {
    var saved = _loadCustomOverrides_();
    if (saved) {
      for (var i = 0; i < CATEGORIES.length; i++) {
        if (saved[CATEGORIES[i]] != null) targets[i] = saved[CATEGORIES[i]];
      }
    }
  }

  // Write all 20 targets in one batched call
  var range = sheet.getRange(
    TARGETS_FIRST_ROW, columnLetterToNumber_(TARGETS_COL_LETTER),
    targets.length, 1
  );
  range.setValues(targets.map(function (v) { return [v]; }));

  // Yellow-fill editable cells only when Custom is active
  _toggleEditableHighlight_(sheet, profileId === 'custom');

  ss.toast('Profile applied: ' + p.name, 'Column & Co.', 3);
}

/**
 * Save the user's current Monthly Budget column as their Custom profile.
 * Persists to Document Properties so it survives across sessions.
 */
function saveCustomProfile() {
  var sheet = SpreadsheetApp.getActive().getSheetByName(BUDGET_SHEET_NAME);
  var values = sheet.getRange(
    TARGETS_FIRST_ROW, columnLetterToNumber_(TARGETS_COL_LETTER),
    CATEGORIES.length, 1
  ).getValues();

  var overrides = {};
  for (var i = 0; i < CATEGORIES.length; i++) {
    overrides[CATEGORIES[i]] = Number(values[i][0]) || 0;
  }
  PropertiesService.getDocumentProperties()
    .setProperty('cc_custom_profile', JSON.stringify(overrides));

  SpreadsheetApp.getActive().toast('Custom profile saved', 'Column & Co.', 3);
}

// ─────────────────────────────────────────────────────────────────────
//  MENU WIRING — call from onOpen()
// ─────────────────────────────────────────────────────────────────────

function buildProfileMenu_() {
  var ui   = SpreadsheetApp.getUi();
  var menu = ui.createMenu('Apply Budget Profile');
  var active = SpreadsheetApp.getActive()
    .getSheetByName(BUDGET_SHEET_NAME)
    .getRange(PROFILE_PICKER_CELL).getValue();

  PROFILE_ORDER.forEach(function (id) {
    var p = PROFILES[id];
    var label = (id === active ? '✓ ' : '   ') + p.name;
    // Each menu item maps to a generated wrapper function
    menu.addItem(label, '_applyProfile_' + id.replace(/[^a-z0-9]/gi, '_'));
  });

  menu.addSeparator();
  menu.addItem('Save current values as Custom…', 'saveCustomProfile');
  return menu;
}

// ─────────────────────────────────────────────────────────────────────
//  Menu wrappers — Apps Script menus cannot pass arguments, so we
//  generate one zero-arg wrapper per profile.
// ─────────────────────────────────────────────────────────────────────
function _applyProfile_dave_ramsey()    { applyProfile('dave-ramsey'); }
function _applyProfile_50_30_20()       { applyProfile('50-30-20'); }
function _applyProfile_fire()           { applyProfile('fire'); }
function _applyProfile_zero_based()     { applyProfile('zero-based'); }
function _applyProfile_anti_budget()    { applyProfile('anti-budget'); }
function _applyProfile_kakeibo()        { applyProfile('kakeibo'); }
function _applyProfile_new_parent()     { applyProfile('new-parent'); }
function _applyProfile_self_employed()  { applyProfile('self-employed'); }
function _applyProfile_hcol_renter()    { applyProfile('hcol-renter'); }
function _applyProfile_custom()         { applyProfile('custom'); }

// ─────────────────────────────────────────────────────────────────────
//  Internal helpers
// ─────────────────────────────────────────────────────────────────────

function _loadCustomOverrides_() {
  var raw = PropertiesService.getDocumentProperties()
    .getProperty('cc_custom_profile');
  if (!raw) return null;
  try { return JSON.parse(raw); } catch (e) { return null; }
}

function _toggleEditableHighlight_(sheet, on) {
  var range = sheet.getRange(
    TARGETS_FIRST_ROW, columnLetterToNumber_(TARGETS_COL_LETTER),
    CATEGORIES.length, 1
  );
  range.setBackground(on ? '#FFFDE7' : '#FAF8F2');   // buyer yellow vs cream
  range.setBorder(on, on, on, on, false, false,
                  '#C5A95A', SpreadsheetApp.BorderStyle.SOLID);
}

function columnLetterToNumber_(letter) {
  var col = 0;
  for (var i = 0; i < letter.length; i++) {
    col = col * 26 + (letter.charCodeAt(i) - 64);
  }
  return col;
}
