/**
 * Column & Co. — The Foundation v2.1
 * 12 · Budget-profile engine. Writes the 20 targets + hero copy into the
 * Monthly Budget tab. Custom mode persists buyer edits to Document Properties.
 */

function buildProfileMenu_() {
  var ui = SpreadsheetApp.getUi();
  var menu = ui.createMenu('Apply Budget Profile');
  var active = PropertiesService.getDocumentProperties().getProperty('cc_active_profile') || DEFAULT_PROFILE;
  PROFILE_ORDER.forEach(function (id) {
    var label = (id === active ? '✓ ' : '   ') + PROFILES[id].name;
    menu.addItem(label, '_applyProfile_' + sanitizeId_(id));
  });
  menu.addSeparator();
  menu.addItem('Save current values as Custom…', 'saveCustomProfile');
  return menu;
}

// Shared writer used by both buildWorkbook and applyProfile.
function writeProfileToBudget_(sheet, profileId) {
  var p = PROFILES[profileId];
  if (!p) throw new Error('Unknown profile: ' + profileId);

  sheet.getRange(BUDGET_PICKER_CELL).setValue(profileId);
  sheet.getRange(BUDGET_INCOME_CELL).setValue(p.income);
  sheet.getRange(BUDGET_NAME_CELL).setValue(p.name);
  sheet.getRange(BUDGET_SUB_CELL).setValue(p.sub);
  sheet.getRange(BUDGET_BLURB_CELL).setValue(p.blurb);

  var targets = p.targets.slice();
  if (profileId === 'custom') {
    var saved = _loadCustomOverrides_();
    if (saved) {
      for (var i = 0; i < CATEGORIES.length; i++) {
        if (saved[CATEGORIES[i]] != null) targets[i] = saved[CATEGORIES[i]];
      }
    }
  }
  sheet.getRange(BUDGET_TARGETS_FIRST_ROW, 3, targets.length, 1)
    .setValues(targets.map(function (v) { return [v]; }))
    .setNumberFormat('$#,##0');
}

function applyProfile(profileId) {
  var ss = SpreadsheetApp.getActive();
  var sheet = ss.getSheetByName(TABS.BUDGET);
  if (!sheet) throw new Error('Missing sheet: ' + TABS.BUDGET);

  writeProfileToBudget_(sheet, profileId);

  PropertiesService.getDocumentProperties().setProperty('cc_active_profile', profileId);
  var cfg = ss.getSheetByName(TABS.CONFIG);
  if (cfg) cfg.getRange('B41').setValue(profileId);
  buildMenu_();
  ss.toast('Profile applied: ' + PROFILES[profileId].name, CC.BRAND, 3);
}

function saveCustomProfile() {
  var sheet = SpreadsheetApp.getActive().getSheetByName(TABS.BUDGET);
  var values = sheet.getRange(BUDGET_TARGETS_FIRST_ROW, 3, CATEGORIES.length, 1).getValues();
  var overrides = {};
  for (var i = 0; i < CATEGORIES.length; i++) overrides[CATEGORIES[i]] = Number(values[i][0]) || 0;
  PropertiesService.getDocumentProperties().setProperty('cc_custom_profile', JSON.stringify(overrides));
  SpreadsheetApp.getActive().toast('Custom profile saved', CC.BRAND, 3);
}

function _loadCustomOverrides_() {
  var raw = PropertiesService.getDocumentProperties().getProperty('cc_custom_profile');
  if (!raw) return null;
  try { return JSON.parse(raw); } catch (e) { return null; }
}

// Zero-arg menu wrappers
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
