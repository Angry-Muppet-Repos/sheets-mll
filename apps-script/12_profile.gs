/**
 * Column & Co. — The Foundation v2.1
 * 12 · Budget-profile engine. Writes the canonical Preset column and
 * loads per-profile Overrides from Document Properties. Every profile is
 * customizable via the Override column; each profile's overrides are
 * stored under `cc_overrides_<profileId>` so switching profiles never
 * loses your tweaks.
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
  menu.addItem('Clear overrides for current profile…', 'clearCurrentOverrides');
  return menu;
}

/**
 * Seed the Monthly Budget tab for a given profile.
 *  • Preset column (C17:C36) ← PROFILES[id].targets (canonical, locked)
 *  • Override column (D17:D36) ← saved cc_overrides_<id> (blank if none)
 *  Target column (E) is a formula and updates automatically.
 */
function writeProfileToBudget_(sheet, profileId) {
  var p = PROFILES[profileId];
  if (!p) throw new Error('Unknown profile: ' + profileId);

  sheet.getRange(BUDGET_PICKER_CELL).setValue(profileId);
  sheet.getRange(BUDGET_INCOME_CELL).setValue(p.income);
  sheet.getRange(BUDGET_NAME_CELL).setValue(p.name);
  sheet.getRange(BUDGET_SUB_CELL).setValue(p.sub);
  sheet.getRange(BUDGET_BLURB_CELL).setValue(p.blurb);

  // Preset column — canonical values
  sheet.getRange(BUDGET_TARGETS_FIRST_ROW, 3, p.targets.length, 1)
    .setValues(p.targets.map(function (v) { return [v]; }))
    .setNumberFormat('$#,##0');

  // Override column — per-profile saved tweaks, or blank
  var saved = _loadOverrides_(profileId);
  var overrideVals = CATEGORIES.map(function (cat) {
    var v = saved && saved[cat];
    return [(v === 0 || (v && !isNaN(Number(v)))) ? Number(v) : ''];
  });
  sheet.getRange(BUDGET_TARGETS_FIRST_ROW, 4, overrideVals.length, 1)
    .setValues(overrideVals)
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

/**
 * Snapshot the current Override column (D17:D36) as the saved overrides
 * for `profileId`. Called by onEdit when the user types into an override
 * cell.
 */
function saveOverrides_(profileId) {
  var sheet = SpreadsheetApp.getActive().getSheetByName(TABS.BUDGET);
  var values = sheet.getRange(BUDGET_TARGETS_FIRST_ROW, 4, CATEGORIES.length, 1).getValues();
  var overrides = {};
  for (var i = 0; i < CATEGORIES.length; i++) {
    var v = values[i][0];
    if (v !== '' && v !== null && !isNaN(Number(v))) {
      overrides[CATEGORIES[i]] = Number(v);
    }
  }
  PropertiesService.getDocumentProperties()
    .setProperty('cc_overrides_' + profileId, JSON.stringify(overrides));
}

/** Menu item: wipe overrides for the currently-active profile. */
function clearCurrentOverrides() {
  var ui = SpreadsheetApp.getUi();
  var ss = SpreadsheetApp.getActive();
  var sheet = ss.getSheetByName(TABS.BUDGET);
  var pid = String(sheet.getRange(BUDGET_PICKER_CELL).getValue() || '');
  if (!pid) return;
  var p = PROFILES[pid];
  var resp = ui.alert('Clear overrides',
    'Wipe all overrides for ' + (p ? p.name : pid) + '? Preset stays; only your tweaks are cleared.',
    ui.ButtonSet.YES_NO);
  if (resp !== ui.Button.YES) return;
  PropertiesService.getDocumentProperties().deleteProperty('cc_overrides_' + pid);
  sheet.getRange(BUDGET_TARGETS_FIRST_ROW, 4, CATEGORIES.length, 1).clearContent();
  ss.toast('Overrides cleared for ' + (p ? p.name : pid), CC.BRAND, 3);
}

function _loadOverrides_(profileId) {
  var raw = PropertiesService.getDocumentProperties()
    .getProperty('cc_overrides_' + profileId);
  if (!raw) return null;
  try { return JSON.parse(raw); } catch (e) { return null; }
}

// Zero-arg menu wrappers (Apps Script menus can't pass arguments)
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
