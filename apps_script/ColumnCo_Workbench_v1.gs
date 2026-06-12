/**
 * Column & Co. — The Workbench v1.0
 * 00 · Constants — single source of truth for the whole build.
 *
 * Brand colors, type tokens, the 24 in-sheet palettes, the 30-step launch
 * template, the capacity constants (the scale dials), channel fee
 * defaults, and the Juniper Paper Co. mock data. Skeleton copied from
 * ColumnCo_Ledger_v1.gs / ColumnCo_Foundation_v2.gs (same numbering).
 */

// ── Product identity ──────────────────────────────────────────────────
var CC = {
  VERSION: 'v1.0',
  BRAND: 'Column & Co.',
  PRODUCT: 'The Workbench',
  TAGLINE: 'LIFE,  ORGANIZED.',
  FOOTER: 'The Workbench v1.0  ·  columnandco.com  ·  Do not distribute without license',
  MENU_TITLE: '💳 Column & Co.'
};

// ── Brand colors (locked — never themed) ──────────────────────────────
var BRAND = {
  FOREST: '#1C3D2E',
  FOREST_HI: '#1F4734',
  CANOPY: '#2D5C45',
  GOLD: '#C5A95A',
  CREAM: '#F0EBD8',
  PARCHMENT: '#FAF8F2',
  YELLOW: '#FFFDE7',
  GARNET: '#832F30',
  CHIP_ON_BG: '#E5F5EA',
  CHIP_FAIR_BG: '#FFF3C0',
  CHIP_OVER_BG: '#FFE5E5',
  BODY: '#4B5F54',
  CAPTION: '#8D9990',
  HAIRLINE: '#DCE3DD',
  PARCHMENT_60: '#9DA79F',
  // group band fills for the Products checklist (Forest→Canopy ramp)
  GROUP_FILLS: ['#1C3D2E', '#2D5C45', '#3E7E5C', '#5C9D72', '#8FAF7E']
};

var FONT = {
  DISPLAY: 'Lora',   // Playfair Display -> Lora (closest native serif)
  BODY: 'Roboto'     // Jost -> Roboto
};

// ── Capacity constants — THE SCALE DIALS (03_data_model.md) ───────────
// Raising any of these is one constant + Setup ▸ Build workbook rerun.
var PRODUCT_CAPACITY  = 250;     // product rows + engine matrix rows
var SALES_CAPACITY    = 10000;   // Sales Log rows
var MARKETING_CAPACITY = 2000;   // Marketing Log rows
var STATS_CAPACITY    = 3000;    // Stats rows
var CHANNEL_SLOTS     = 12;      // Channels registry rows 10-21

// ── The 30-step launch template (+5 custom columns) ───────────────────
var STEP_GROUPS = [
  ['BUILD',   ['Handoff folder written', 'Brief approved', 'Tab specs locked', 'Data model locked', 'UI kit mocked', 'Visual approval', 'Script written', 'Static verification green']],
  ['QA',      ['Mock build clean', 'Blank build clean', 'Flow test', 'Theme pass (3 palettes)', 'xlsx exports', 'Brand-voice read-through']],
  ['ASSETS',  ['Screenshots (hero order)', 'Watermarks applied', 'Thumbnail', 'Listing copy drafted', 'Tags + SEO list', 'Price set']],
  ['LISTING', ['Listing created', 'Files attached', 'Preview checked', 'Published', 'URL logged here']],
  ['POST',    ['First-sale check', 'Review request sent', 'Week-1 stats logged', 'Retro note written', 'Next-version ideas filed']]
];
var STEPS = (function () {
  var s = []; STEP_GROUPS.forEach(function (g) { g[1].forEach(function (st) { s.push(st); }); }); return s;
})();
var STEP_COUNT = STEPS.length;        // 30 — progress runs on these only
var CUSTOM_STEP_SLOTS = 5;            // extra credit, outside the %

var PRODUCT_STATUSES = ['Idea', 'Building', 'QA', 'Assets', 'Listing', 'Listed', 'Retired'];
var MARKETING_ACTIVITIES = ['Ads', 'Social', 'Email', 'Sale event', 'Price test', 'Other'];

// ── Products tab column contract (cols are 1-based) ───────────────────
// A # · B Name · C Status · D Price · E Listing URL · F Target date ·
// G Launched · H Notes · I.. 30 steps · then 5 custom · then computed.
var PROD = {
  HEADER_BAND_ROW: 9, HEADER_ROW: 10, FIRST_ROW: 11,
  COL_NUM: 1, COL_NAME: 2, COL_STATUS: 3, COL_PRICE: 4, COL_URL: 5,
  COL_TARGET: 6, COL_LAUNCHED: 7, COL_NOTES: 8,
  COL_STEP_FIRST: 9,                                  // I
  COL_CUSTOM_FIRST: 9 + 30,                           // 39 (AM)
  COL_PROGRESS: 9 + 30 + 5,                           // 44 (AR)
  COL_NEXT: 45,                                       // AS
  COL_DAYS: 46,                                       // AT
  COL_STALE: 47,                                      // AU — days since last sale
  COL_RANK_HELPER: 48,                                // AV — pipeline ranking (hidden)
  COL_LISTED_HELPER: 49                               // AW — recently-listed ranking (hidden)
};
var PROD_LAST_ROW = PROD.FIRST_ROW + PRODUCT_CAPACITY - 1;   // 260

// ── Channel fee defaults (settings, BOTH modes — editable, captioned) ──
// Knowledge-based defaults (fee schedules drift): Etsy 6.5% transaction
// + ~3% + $0.25 processing + $0.20 listing folded to 9.5% + $0.45/order.
// The in-sheet caption tells the owner to verify their plan's fees; Net
// always reads the registry, never these constants.
var CHANNEL_DEFAULTS = [
  ['Etsy',    0.095, 0.45, 'Yes', 'transaction + processing + listing, folded — verify your plan'],
  ['Shopify', 0.029, 0.30, 'Yes', 'payments processing, plan-dependent'],
  ['Gumroad', 0.10,  0.50, 'Yes', 'flat platform fee'],
  ['Direct',  0,     0,    'Yes', 'owner-defined']
];

// ── 24 in-sheet palettes (verbatim from the Foundation _Config) ───────
var PALETTES = [
  { id: 'light',         name: 'Light',           primary: '#1C3D2E', mid: '#2D5C45', accent: '#C5A95A', bg: '#FAF8F2', zebra: '#EEF2EC', dark: '#111827', accentLight: '#F0EBD8' },
  { id: 'warm-greige',   name: 'Warm Greige',     primary: '#3D2B1F', mid: '#5C4033', accent: '#C8873A', bg: '#FAF6F1', zebra: '#F0E8DC', dark: '#1C1009', accentLight: '#F5E6D3' },
  { id: 'cool-slate',    name: 'Cool Slate',      primary: '#1E3A5F', mid: '#2D5282', accent: '#64748B', bg: '#F8FAFC', zebra: '#EFF6FF', dark: '#0F2440', accentLight: '#E2E8F0' },
  { id: 'sage',          name: 'Sage',            primary: '#2D4A3E', mid: '#3D6455', accent: '#8FAF7E', bg: '#F4F9F1', zebra: '#EAF4E3', dark: '#1A2E25', accentLight: '#E8F5E0' },
  { id: 'espresso',      name: 'Espresso',        primary: '#2C1810', mid: '#4A2C1A', accent: '#C8873A', bg: '#FAF5F0', zebra: '#F0E5D8', dark: '#120A04', accentLight: '#F5E6D3' },
  { id: 'maize-navy',    name: 'Maize & Navy',    primary: '#003366', mid: '#004080', accent: '#FFCB05', bg: '#F5F8FF', zebra: '#E8F0FF', dark: '#001A33', accentLight: '#FFF5B0' },
  { id: 'scarlet-gray',  name: 'Scarlet & Gray',  primary: '#BB0000', mid: '#CC0000', accent: '#808080', bg: '#F9F9F9', zebra: '#EFEFEF', dark: '#2C0000', accentLight: '#E8E8E8' },
  { id: 'orange-navy',   name: 'Orange & Navy',   primary: '#002D6D', mid: '#003D94', accent: '#F47920', bg: '#F5F8FF', zebra: '#E8F0FF', dark: '#001540', accentLight: '#FFE4C4' },
  { id: 'green-gold',    name: 'Green & Gold',    primary: '#154734', mid: '#1A5C43', accent: '#CBA135', bg: '#F3FAF5', zebra: '#E5F5EA', dark: '#0A2419', accentLight: '#FFF3C0' },
  { id: 'purple-gold',   name: 'Purple & Gold',   primary: '#4A1C7C', mid: '#5E2499', accent: '#FFC72C', bg: '#FAF5FF', zebra: '#F3E8FF', dark: '#280D45', accentLight: '#FFF5B5' },
  { id: 'crimson-white', name: 'Crimson & White', primary: '#9B1B30', mid: '#B52238', accent: '#FFFFFF', bg: '#FFF8F9', zebra: '#FFE8EC', dark: '#4A0010', accentLight: '#F5F5F5' },
  { id: 'garnet-gold',   name: 'Garnet & Gold',   primary: '#782F40', mid: '#9B3B52', accent: '#CBA135', bg: '#FFF8F5', zebra: '#FFE8DC', dark: '#3D0A1A', accentLight: '#FFF3C0' },
  { id: 'forest-white',  name: 'Forest & White',  primary: '#154733', mid: '#1E6048', accent: '#FFFFFF', bg: '#F4FBF6', zebra: '#E8F5EC', dark: '#0A2819', accentLight: '#F0FFF4' },
  { id: 'royal-gold',    name: 'Royal & Gold',    primary: '#002D72', mid: '#003D9C', accent: '#B5A642', bg: '#F0F5FF', zebra: '#E0ECFF', dark: '#001040', accentLight: '#F5F0C0' },
  { id: 'silver-black',  name: 'Silver & Black',  primary: '#1A1A1A', mid: '#2D2D2D', accent: '#A8A9AD', bg: '#F5F5F5', zebra: '#EBEBEB', dark: '#000000', accentLight: '#E8E8E8' },
  { id: 'midnight',      name: 'Midnight',        primary: '#0B1F3A', mid: '#142E55', accent: '#14B8A6', bg: '#F0F4F8', zebra: '#E2E8F0', dark: '#050E1C', accentLight: '#99F6E4' },
  { id: 'burgundy',      name: 'Burgundy',        primary: '#5C0A1A', mid: '#7A0E22', accent: '#E8D5B5', bg: '#FAF5F0', zebra: '#F0E6DA', dark: '#2E0510', accentLight: '#F5E8D5' },
  { id: 'mocha',         name: 'Mocha',           primary: '#5C3A21', mid: '#7A4F2D', accent: '#D4A574', bg: '#FAF3EA', zebra: '#F0E2CE', dark: '#2E1D10', accentLight: '#F0DCC2' },
  { id: 'indigo-blush',  name: 'Indigo & Blush',  primary: '#2E1F6B', mid: '#3D2A8C', accent: '#EAB0B8', bg: '#F7F4FA', zebra: '#ECE5F5', dark: '#170F36', accentLight: '#F8DEE3' },
  { id: 'pine-brass',    name: 'Pine & Brass',    primary: '#1F3A2E', mid: '#2E5544', accent: '#B8964A', bg: '#F2F8F4', zebra: '#E1F0E7', dark: '#0E1D17', accentLight: '#E8D9A8' },
  { id: 'ocean-coral',   name: 'Ocean & Coral',   primary: '#0F4858', mid: '#166075', accent: '#F47B6A', bg: '#F0F8FA', zebra: '#DCEFF2', dark: '#062430', accentLight: '#FBC8BD' },
  { id: 'charcoal-mint', name: 'Charcoal & Mint', primary: '#2C2C2E', mid: '#44444A', accent: '#A8D5BA', bg: '#F5F5F5', zebra: '#E8E8E8', dark: '#161617', accentLight: '#D0EAD9' },
  { id: 'olive-cream',   name: 'Olive & Cream',   primary: '#3D4A1F', mid: '#56672E', accent: '#C8B27A', bg: '#F7F4E8', zebra: '#ECE5D0', dark: '#1E2410', accentLight: '#E8D9A8' },
  { id: 'custom',        name: 'Custom',          primary: '#1B2A4A', mid: '#2C3E6B', accent: '#C8873A', bg: '#F3F4F6', zebra: '#EEF0F5', dark: '#111827', accentLight: '#F5D9B0' }
];
var PALETTE_BY_ID = (function () { var m = {}; PALETTES.forEach(function (p) { m[p.id] = p; }); return m; })();
var DEFAULT_PALETTE = 'light';

// ── Tab names + order (the bottom strip) ──────────────────────────────
var TABS = {
  START: 'Start Here', DASHBOARD: 'Dashboard', PIPELINE: 'Pipeline',
  PRODUCT_VIEW: 'Product View', TRENDS: 'Trends', SALES: 'Sales Log',
  MARKETING: 'Marketing Log', STATS: 'Stats', PRODUCTS: 'Products',
  CHANNELS: 'Channels', ENGINE: '_Engine', CONFIG: '_Config', SCHEMA: '_Schema'
};
var TAB_ORDER = [
  TABS.START, TABS.DASHBOARD, TABS.PIPELINE, TABS.PRODUCT_VIEW, TABS.TRENDS,
  TABS.SALES, TABS.MARKETING, TABS.STATS, TABS.PRODUCTS, TABS.CHANNELS,
  TABS.ENGINE, TABS.CONFIG, TABS.SCHEMA
];
var SYSTEM_TABS = [TABS.ENGINE, TABS.CONFIG, TABS.SCHEMA];

var CONTENT_START_ROW = 6;     // chrome rows 1-5; title block rows 6-8

// ── Engine row contract ───────────────────────────────────────────────
var ENGINE_ROWS = {
  GROSS: 2, FEES: 3, NET: 4, UNITS: 5, SPEND: 6, NET_AFTER: 7,
  SALES_ROWS: 8, ACTIVE: 9,
  CHANNEL_FIRST: 12,                       // rows 12-23 (12 slots)
  PRODUCT_FIRST: 30                        // rows 30..(29+PRODUCT_CAPACITY)
};
var ENGINE_PRODUCT_LAST = ENGINE_ROWS.PRODUCT_FIRST + PRODUCT_CAPACITY - 1;  // 279

// Registry/log layout contracts
var CHAN = { FIRST_ROW: 10, ROWS: CHANNEL_SLOTS };                 // Channels 10-21
var SALES = { HEADER_ROW: 9, FIRST_ROW: 10 };                      // data 10..10009
var MKT  = { HEADER_ROW: 9, FIRST_ROW: 10 };                       // data 10..2009
var STATSL = { HEADER_ROW: 9, FIRST_ROW: 10 };                     // data 10..3009

// ── Mock data — Juniper Paper Co. (design_handoff_the_workbench/04) ───
// 9 trailing months ending at build month. Headline truths the harness
// asserts: net ramp m0→m8 between 2.0× and 2.4× · hero ≈ 55-65% of
// lifetime net at ROAS 3.5-4.5 · dud net < $60 with ROAS < 0.5 · Recipe
// Card Set views +40% while conversion at most halves-ish · pipeline
// progress exactly 47% / 17% / 0%.
var MOCK = {
  owner: { shop: 'Juniper Paper Co.', name: 'Jules Hartley' },

  // [name, status, price, listedMonthsAgo|null, targetDaysFromToday|null,
  //  ticks (array of 0-based ticked step indices, or 'all'), unitsByMonth]
  products: [
    ['Wedding Suite No. 4',   'Listed',   24, 12,  null, 'all', [23, 25, 27, 31, 34, 39, 45, 54, 66]],
    ['Everyday Planner Kit',  'Listed',   16, 10,  null, 'all', [17, 18, 20, 20, 21, 21, 22, 22, 23]],
    ['Recipe Card Set',       'Listed',    9,  9,  null, 'all', [28, 27, 25, 23, 22, 21, 20, 20, 19]],
    ['Teacher Bundle',        'Listed',   14,  1.5, null, 'tb', [0, 0, 0, 0, 0, 0, 0, 10, 21]],
    ['Minimal Budget Sheets', 'Listed',    7,  7,  null, 'all', [0, 0, 1, 1, 1, 2, 2, 1, 1]],
    ['Holiday Gift Tags',     'Assets',  null, null,  9, 14,    null],
    ['Wedding Suite No. 5',   'Building', null, null, 30, 5,    null],
    ['Kids Chore Charts',     'Idea',    null, null, null, 0,   null]
  ],

  // channel weights per listed product (Etsy/Shopify/Gumroad)
  channel_split: {
    'Wedding Suite No. 4':   [0.70, 0.20, 0.10],
    'Everyday Planner Kit':  [0.80, 0.20, 0],
    'Recipe Card Set':       [1, 0, 0],
    'Teacher Bundle':        [1, 0, 0],
    'Minimal Budget Sheets': [1, 0, 0]
  },

  // Marketing: hero Etsy Ads months 3-8, dud months 2-5; plus events.
  marketing: {
    hero_spend: [0, 0, 0, 280, 300, 300, 310, 310, 320],   // = 1,820
    dud_spend:  [0, 0, 35, 35, 35, 35, 0, 0, 0]            // = 140
  },

  // Stats (per month, listed products): views grow; RCS conversion halves.
  stats: {
    'Wedding Suite No. 4':   { views0: 1400, views8: 3080, favPct: 0.08 },
    'Everyday Planner Kit':  { views0: 900,  views8: 1150, favPct: 0.07 },
    'Recipe Card Set':       { views0: 800,  views8: 1120, favPct: 0.06 },
    'Teacher Bundle':        { views0: 0,    views8: 760,  favPct: 0.09 },
    'Minimal Budget Sheets': { views0: 300,  views8: 240,  favPct: 0.03 }
  },

  ai_insights: [
    ['SCALE', 'Wedding Suite No. 4 returns about four dollars of net for every ad dollar. Raise the budget before Q4.'],
    ['KILL', 'Minimal Budget Sheets has cost more in ads than it has ever earned. Retire it or stop the spend.'],
    ['WATCH', 'Recipe Card Set gets more views than ever and converts half as well. The price test is overdue.']
  ]
};
// Teacher Bundle tick plan: steps 1-27 + 'Retro note written' (index 28),
// leaving 'Week-1 stats logged' as the next unchecked step. 28 of 30.
var MOCK_TB_TICKS = (function () {
  var t = []; for (var i = 0; i < 27; i++) t.push(i); t.push(28); return t;
})();
/**
 * Column & Co. — The Workbench v1.0
 * 01 · Helpers — styling utilities + the theme registry.
 *
 * Copied from ColumnCo_Foundation_v2.gs. Tab builders call these to stay
 * terse. The theme registry records which ranges are "themable" so
 * applyTheme() can repaint the content area without ever touching the
 * locked brand chrome.
 */

// Accumulated during a build, then persisted to Document Properties.
// Shape: { sheetName: { bg:[a1..], zebra:[a1..], section:[a1..], primary:[a1..], mid:[a1..], accent:[a1..] } }
var THEME_MAP = {};

function themable_(sheetName, role, a1) {
  if (!THEME_MAP[sheetName]) THEME_MAP[sheetName] = {};
  if (!THEME_MAP[sheetName][role]) THEME_MAP[sheetName][role] = [];
  THEME_MAP[sheetName][role].push(a1);
}

function persistThemeMap_() {
  PropertiesService.getDocumentProperties()
    .setProperty('cc_theme_map', JSON.stringify(THEME_MAP));
}

function columnLetterToNumber_(letter) {
  var col = 0;
  for (var i = 0; i < letter.length; i++) {
    col = col * 26 + (letter.charCodeAt(i) - 64);
  }
  return col;
}

/**
 * setCell_ — style a single cell or range in one call.
 * opts: { value, formula, font, size, bold, italic, color, bg, h, v,
 *         wrap, format, merge (a1 to merge with) }
 */
function setCell_(sheet, a1, opts) {
  opts = opts || {};
  var rng = sheet.getRange(opts.merge ? (a1 + ':' + opts.merge) : a1);
  if (opts.merge) rng.merge();
  if (opts.formula != null) rng.setFormula(opts.formula);
  else if (opts.value != null) rng.setValue(opts.value);
  if (opts.font) rng.setFontFamily(opts.font);
  if (opts.size) rng.setFontSize(opts.size);
  if (opts.bold != null) rng.setFontWeight(opts.bold ? 'bold' : 'normal');
  if (opts.italic != null) rng.setFontStyle(opts.italic ? 'italic' : 'normal');
  if (opts.color) rng.setFontColor(opts.color);
  if (opts.bg) rng.setBackground(opts.bg);
  if (opts.h) rng.setHorizontalAlignment(opts.h);
  if (opts.v) rng.setVerticalAlignment(opts.v);
  if (opts.wrap != null) rng.setWrap(opts.wrap);
  if (opts.format) rng.setNumberFormat(opts.format);
  return rng;
}

// Section label: UPPERCASE tracked-out gold-on-cream divider.
function sectionLabel_(sheet, a1, mergeTo, text) {
  var rng = setCell_(sheet, a1, {
    value: text, merge: mergeTo, font: FONT.BODY, size: 10, bold: true,
    color: BRAND.GOLD, bg: BRAND.CREAM, h: 'left', v: 'middle'
  });
  themable_(sheet.getName(), 'section', rng.getA1Notation());
  return rng;
}

// Tab title block: display title + one-line description at rows 6-7.
function titleRow_(sheet, lastColLetter, name, desc) {
  var r = CONTENT_START_ROW;
  setCell_(sheet, 'A' + r, {
    value: name, merge: lastColLetter + r, font: FONT.DISPLAY, size: 28,
    bold: true, color: BRAND.FOREST, h: 'left', v: 'bottom'
  });
  setCell_(sheet, 'A' + (r + 1), {
    value: desc, merge: lastColLetter + (r + 1), font: FONT.BODY, size: 13,
    color: BRAND.BODY, h: 'left', v: 'top'
  });
  sheet.setRowHeight(r, 38);
  sheet.setRowHeight(r + 1, 22);
  return r + 3; // next free content row (one spacer row)
}

/**
 * KPI card — a 3-row merged block: tracked label, big value, sub-caption.
 */
function kpiCard_(sheet, topLeftA1, widthCols, label, valueOrFormula, sub, accentColor) {
  var cell = sheet.getRange(topLeftA1);
  var r = cell.getRow(), c = cell.getColumn();
  var labelRng = sheet.getRange(r, c, 1, widthCols).merge();
  var valRng = sheet.getRange(r + 1, c, 1, widthCols).merge();
  var subRng = sheet.getRange(r + 2, c, 1, widthCols).merge();

  labelRng.setValue(label).setFontFamily(FONT.BODY).setFontSize(10).setFontWeight('bold')
    .setFontColor(BRAND.CAPTION).setBackground(BRAND.PARCHMENT)
    .setVerticalAlignment('middle').setHorizontalAlignment('left');
  if (typeof valueOrFormula === 'string' && valueOrFormula.charAt(0) === '=') valRng.setFormula(valueOrFormula);
  else valRng.setValue(valueOrFormula);
  valRng.setFontFamily(FONT.DISPLAY).setFontSize(22).setFontWeight('bold')
    .setFontColor(accentColor || BRAND.FOREST).setBackground(BRAND.PARCHMENT)
    .setVerticalAlignment('middle').setHorizontalAlignment('left');
  if (typeof sub === 'string' && sub.charAt(0) === '=') subRng.setFormula(sub);
  else subRng.setValue(sub);
  subRng.setFontFamily(FONT.BODY).setFontSize(11)
    .setFontColor(BRAND.CAPTION).setBackground(BRAND.PARCHMENT)
    .setVerticalAlignment('top').setHorizontalAlignment('left');

  // hairline frame
  sheet.getRange(r, c, 3, widthCols)
    .setBorder(true, true, true, true, false, false, BRAND.HAIRLINE, SpreadsheetApp.BorderStyle.SOLID);
  // top accent rule
  sheet.getRange(r, c, 1, widthCols)
    .setBorder(true, null, null, null, null, null, accentColor || BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID_MEDIUM);

  themable_(sheet.getName(), 'bg', sheet.getRange(r, c, 3, widthCols).getA1Notation());
}

/**
 * Status chip conditional formatting on a range whose cells read
 * "On Track" / "Fair" / "Over". Applies fills + text colors.
 */
function statusChipCF_(sheet, a1) {
  var rng = sheet.getRange(a1);
  var rules = sheet.getConditionalFormatRules();
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo('On Track').setBackground(BRAND.CHIP_ON_BG).setFontColor(BRAND.CANOPY)
    .setRanges([rng]).build());
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo('Fair').setBackground(BRAND.CHIP_FAIR_BG).setFontColor(BRAND.GOLD)
    .setRanges([rng]).build());
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo('Over').setBackground(BRAND.CHIP_OVER_BG).setFontColor(BRAND.GARNET)
    .setRanges([rng]).build());
  sheet.setConditionalFormatRules(rules);
  rng.setHorizontalAlignment('center').setFontWeight('bold').setFontSize(10).setFontFamily(FONT.BODY);
}

// SPARKLINE bar formula string (status-colored).
function sparkBar_(valueRef, maxRef, color) {
  return '=SPARKLINE(' + valueRef + ', {"charttype","bar";"max",' + maxRef +
    ';"color1","' + color + '"})';
}
// SPARKLINE line formula string.
function sparkLine_(rangeRef, color) {
  return '=SPARKLINE(' + rangeRef + ', {"charttype","line";"color","' + color + '";"linewidth",2})';
}

// Grow the sheet's grid to at least rows × cols BEFORE writing past the
// 1,000 × 26 default. Writing beyond the grid is what surfaces as the
// opaque "Service Spreadsheets failed while accessing document" error —
// the Products tab (49 columns) and the logs (10,000+ rows) both exceed
// a fresh sheet's grid.
function ensureGrid_(sheet, rows, cols) {
  var maxR = sheet.getMaxRows();
  if (rows > maxR) sheet.insertRowsAfter(maxR, rows - maxR);
  var maxC = sheet.getMaxColumns();
  if (cols > maxC) sheet.insertColumnsAfter(maxC, cols - maxC);
}

// Run fn(startRow, nRows) over row slabs, flushing between them, so huge
// writes land as several digestible mutations instead of one giant one.
function forEachSlab_(firstRow, totalRows, slabSize, fn) {
  for (var start = firstRow; start < firstRow + totalRows; start += slabSize) {
    var n = Math.min(slabSize, firstRow + totalRows - start);
    fn(start, n);
    SpreadsheetApp.flush();
  }
}

// Set several column widths at once: widths is an array starting at col 1.
function setColWidths_(sheet, widths) {
  for (var i = 0; i < widths.length; i++) sheet.setColumnWidth(i + 1, widths[i]);
}

function money_(n) {
  var neg = n < 0; n = Math.abs(Math.round(n));
  var s = String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (neg ? '−$' : '$') + s;
}

// ── Engine month helpers ──────────────────────────────────────────────
// _Engine is a 24-column rolling window. Its row-1 headers are 'YYYY-MM'
// strings ending in the anchor's calendar month.

// 'YYYY-MM' for the given Date's calendar month.
function monthCodeOfDate_(d) {
  var y = d.getFullYear();
  var m = d.getMonth() + 1;
  return y + '-' + (m < 10 ? '0' + m : '' + m);
}

// Returns 24 'YYYY-MM' strings, oldest first, newest = anchor's calendar
// month. So index 23 is the anchor month, index 0 is 23 months earlier.
function monthCodesEndingAt_(anchorDate) {
  var codes = [];
  var y = anchorDate.getFullYear();
  var m = anchorDate.getMonth();   // 0-based
  for (var i = 23; i >= 0; i--) {
    var dy = y, dm = m - i;
    while (dm < 0) { dm += 12; dy -= 1; }
    var mm = dm + 1;
    codes.push(dy + '-' + (mm < 10 ? '0' + mm : '' + mm));
  }
  return codes;
}
/**
 * Column & Co. — The Workbench v1.0
 * 02 · Brand chrome — the non-negotiable 3-row letterhead + footer.
 *
 * Rows 1-2  Forest header  (nameplate left, breadcrumb right)
 * Row 3     Canopy sub-band (optional gold tracked sub-label, right)
 * Row 4     Harvest Gold accent rule — exactly 3px
 * Row 5     spacer
 * Chrome is LOCKED — applyTheme() never repaints it.
 */

function chrome_(sheet, tabName, lastColLetter, subLabel) {
  var lastCol = columnLetterToNumber_(lastColLetter);
  var splitCol = Math.max(2, lastCol - 3);
  var name = sheet.getName();

  // Row 1-2 Forest header. Left = nameplate, right = breadcrumb.
  var left = sheet.getRange(1, 1, 2, splitCol - 1).merge();
  left.setBackground(BRAND.FOREST).setVerticalAlignment('middle')
    .setHorizontalAlignment('left').setFontColor(BRAND.PARCHMENT)
    .setFontFamily(FONT.DISPLAY).setFontSize(20).setFontWeight('bold')
    .setValue('  ' + CC.BRAND);
  themable_(name, 'primary', left.getA1Notation());

  var right = sheet.getRange(1, splitCol, 2, lastCol - splitCol + 1).merge();
  right.setBackground(BRAND.FOREST).setVerticalAlignment('middle')
    .setHorizontalAlignment('right').setFontColor(BRAND.PARCHMENT)
    .setFontFamily(FONT.BODY).setFontSize(11)
    .setValue(CC.PRODUCT + ' ' + CC.VERSION + '  ·  ' + tabName + '  ');
  themable_(name, 'primary', right.getA1Notation());

  sheet.setRowHeight(1, 30);
  sheet.setRowHeight(2, 30);

  // Row 3 — Canopy sub-band + optional gold tracked sub-label (right).
  var band = sheet.getRange(3, 1, 1, lastCol).merge();
  band.setBackground(BRAND.CANOPY).setVerticalAlignment('middle')
    .setHorizontalAlignment('right').setFontColor(BRAND.GOLD)
    .setFontFamily(FONT.BODY).setFontSize(9).setFontWeight('bold')
    .setValue(subLabel ? (subLabel + '  ') : '');
  themable_(name, 'mid', band.getA1Notation());
  sheet.setRowHeight(3, 26);

  // Row 4 — Harvest Gold accent rule, exactly 3px.
  var rule = sheet.getRange(4, 1, 1, lastCol).merge();
  rule.setBackground(BRAND.GOLD);
  themable_(name, 'accent', rule.getA1Notation());
  sheet.setRowHeight(4, 3);

  // Row 5 — spacer.
  sheet.getRange(5, 1, 1, lastCol).setBackground(BRAND.PARCHMENT);
  sheet.setRowHeight(5, 18);
}

// Footer — thin Forest bar with the brand line at the given row.
function footer_(sheet, row, lastColLetter) {
  var lastCol = columnLetterToNumber_(lastColLetter);
  var bar = sheet.getRange(row, 1, 1, lastCol).merge();
  bar.setBackground(BRAND.FOREST).setFontColor(BRAND.PARCHMENT_60)
    .setFontFamily(FONT.BODY).setFontSize(10)
    .setHorizontalAlignment('center').setVerticalAlignment('middle')
    .setValue(CC.FOOTER);
  themable_(sheet.getName(), 'primary', bar.getA1Notation());
  sheet.setRowHeight(row, 28);
}
/**
 * Column & Co. — The Workbench v1.0
 * 03 · Build orchestrator.
 *
 * buildWorkbook(mode) constructs the entire 13-tab workbook from scratch.
 *   mode = 'mock'  → ships Juniper Paper Co. pre-populated (demo)
 *   mode = 'blank' → editable cells cleared for a real owner
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

  // 2-3. Registries before the logs and engine that reference them, then
  // the presentation tabs. Each step toasts + flushes so a failure names
  // its tab and the backend digests the build in pieces.
  var plan = [
    [TABS.CONFIG,       function () { buildConfig_(sheets[TABS.CONFIG]); }],
    [TABS.SCHEMA,       function () { buildSchema_(sheets[TABS.SCHEMA], mode); }],
    [TABS.CHANNELS,     function () { buildChannels_(sheets[TABS.CHANNELS]); }],
    [TABS.PRODUCTS,     function () { buildProducts_(sheets[TABS.PRODUCTS], mode); }],
    [TABS.SALES,        function () { buildSalesLog_(sheets[TABS.SALES], mode); }],
    [TABS.MARKETING,    function () { buildMarketingLog_(sheets[TABS.MARKETING], mode); }],
    [TABS.STATS,        function () { buildStats_(sheets[TABS.STATS], mode); }],
    [TABS.ENGINE,       function () { buildEngine_(sheets[TABS.ENGINE], mode); }],
    [TABS.START,        function () { buildStartHere_(sheets[TABS.START]); }],
    [TABS.DASHBOARD,    function () { buildDashboard_(sheets[TABS.DASHBOARD], mode); }],
    [TABS.PIPELINE,     function () { buildPipeline_(sheets[TABS.PIPELINE], mode); }],
    [TABS.PRODUCT_VIEW, function () { buildProductView_(sheets[TABS.PRODUCT_VIEW], mode); }],
    [TABS.TRENDS,       function () { buildTrends_(sheets[TABS.TRENDS], mode); }]
  ];
  for (var p = 0; p < plan.length; p++) {
    ss.toast('Building ' + plan[p][0] + ' · ' + (p + 1) + ' of ' + plan.length, CC.BRAND, 5);
    plan[p][1]();
    SpreadsheetApp.flush();
  }

  // 4. Named ranges (catalog from 03_data_model.md).
  setNamedRanges_(ss);

  // 5. Order, hide, remove strays.
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
  dp.setProperty('cc_build_mode', mode);
  dp.deleteProperty('cc_first_open');

  // 7. Land on Start Here.
  sheets[TABS.START].activate();
  ss.toast('Built ' + CC.PRODUCT + ' ' + CC.VERSION + ' (' + mode + ' data)', CC.BRAND, 5);
}

function getOrCreateSheet_(ss, name) {
  var sh = ss.getSheetByName(name);
  if (!sh) sh = ss.insertSheet(name);
  try { sh.getRange(1, 1, sh.getMaxRows(), sh.getMaxColumns()).breakApart(); } catch (e) {}
  sh.getRange(1, 1, sh.getMaxRows(), sh.getMaxColumns()).clearDataValidations();
  sh.clear();
  sh.clearConditionalFormatRules();
  sh.getCharts().forEach(function (c) { sh.removeChart(c); });
  sh.setHiddenGridlines(true);
  try { sh.showRows(1, sh.getMaxRows()); } catch (e) {}
  try { sh.showColumns(1, sh.getMaxColumns()); } catch (e) {}
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
    'cc_active_palette':   TABS.CONFIG + '!B40',
    'cc_palettes':         TABS.CONFIG + '!A3:I26',
    'cc_products_list':    TABS.PRODUCTS + '!B' + PROD.FIRST_ROW + ':B' + PROD_LAST_ROW,
    'cc_products_status':  TABS.PRODUCTS + '!C' + PROD.FIRST_ROW + ':C' + PROD_LAST_ROW,
    'cc_products_table':   TABS.PRODUCTS + '!A' + PROD.FIRST_ROW + ':AW' + PROD_LAST_ROW,
    'cc_channels_list':    TABS.CHANNELS + '!A10:A21',
    'cc_channel_fees':     TABS.CHANNELS + '!A10:C21',
    'cc_sales_log':        TABS.SALES + '!A' + SALES.FIRST_ROW + ':I' + (SALES.FIRST_ROW + SALES_CAPACITY - 1),
    'cc_engine_months':    TABS.ENGINE + '!B1:Y1',
    'cc_engine_portfolio': TABS.ENGINE + '!B2:Y9',
    'cc_engine_products':  TABS.ENGINE + '!B' + ENGINE_ROWS.PRODUCT_FIRST + ':Y' + ENGINE_PRODUCT_LAST,
    'cc_dashboard_month':  TABS.DASHBOARD + '!N4',
    'cc_trends_window':    TABS.TRENDS + '!N7',
    'cc_selected_product': TABS.PRODUCT_VIEW + '!C10'
  };
  Object.keys(defs).forEach(function (name) {
    try { ss.setNamedRange(name, ss.getRange(defs[name])); } catch (e) {}
  });
}
/**
 * Column & Co. — The Workbench v1.0
 * 04 · Data + system tabs: _Config, _Schema, Channels, Products,
 *      Sales Log, Marketing Log, Stats, _Engine.
 */

// ── _Config — palette table, launch-step template, active selections ──
function buildConfig_(sheet) {
  sheet.getRange('A1').setValue('palettes');
  var palHdr = ['id', 'name', 'primary', 'mid', 'accent', 'bg', 'zebra', 'dark', 'accentLight'];
  sheet.getRange(2, 1, 1, palHdr.length).setValues([palHdr]).setFontWeight('bold');
  var palRows = PALETTES.map(function (p) {
    return [p.id, p.name, p.primary, p.mid, p.accent, p.bg, p.zebra, p.dark, p.accentLight];
  });
  sheet.getRange(3, 1, palRows.length, palHdr.length).setValues(palRows);

  sheet.getRange('A40').setValue('active_palette'); sheet.getRange('B40').setValue(DEFAULT_PALETTE);

  // Launch-step template (rows 45+) — reference copy for _Schema/Help.
  sheet.getRange('A45').setValue('launch_steps');
  sheet.getRange(46, 1, 1, 2).setValues([['group', 'step']]).setFontWeight('bold');
  var rows = [];
  STEP_GROUPS.forEach(function (g) { g[1].forEach(function (st) { rows.push([g[0], st]); }); });
  sheet.getRange(47, 1, rows.length, 2).setValues(rows);
}

// ── _Schema — LLM-readable plain-English description (the wedge) ───────
// No line may begin with "=" (a leading = turns prose into a broken formula).
function buildSchema_(sheet, mode) {
  var lines = [
    'The Workbench v1.0 — Workbook Schema for AI assistants',
    '────────────────────────────────────────────────────────',
    '',
    (mode === 'mock')
      ? 'This workbook runs a digital-product catalog. Demo owner: Jules Hartley, Juniper Paper Co.'
      : 'This workbook runs a digital-product catalog: every product\'s path to listed, and its sales after.',
    '',
    'Tabs:',
    '  • Products — the master table. One row per product (' + PRODUCT_CAPACITY + ' slots):',
    '    name, status, price, listing URL, dates, then 30 launch-step',
    '    checkboxes (BUILD/QA/ASSETS/LISTING/POST) plus 5 custom step',
    '    columns, then computed Progress, Next step, Days to target, and',
    '    Days since last sale. Progress counts the 30 fixed steps only.',
    '  • Sales Log — one row when money lands. Columns: Date, Product,',
    '    Channel, Units, Gross, Fees, Net, Notes, Month. When Fees is blank,',
    '    Net computes from the Channels fee defaults.',
    '  • Marketing Log — date, product, channel, activity, spend, result.',
    '  • Stats — optional: per product per month, Views / Favorites / Orders',
    '    typed from shop stats. Powers the conversion funnel.',
    '  • Channels — fee defaults per sales channel (editable).',
    '  • Pipeline — computed board: stage counts, in-flight ranking, next',
    '    actions. Nothing is typed here.',
    '  • Product View — one product picked by dropdown: trend, channel',
    '    split, marketing vs net, funnel, checklist position.',
    '  • Dashboard, Trends — portfolio views over the data.',
    '  • _Engine — months × portfolio/channel/product aggregates. The one',
    '    cross-product matrix (net by product by month) lives here.',
    '',
    'Conventions:',
    '  • Months are YYYY-MM strings (hidden helper columns on the logs).',
    '  • Net revenue means after channel fees; Net after spend also',
    '    subtracts Marketing Log spend.',
    '  • Cash basis: the Sales Log is the only money truth.',
    '  • Status chips: "On Track" / "Fair" / "Over".',
    '  • Capacity dials (rebuild to grow): ' + PRODUCT_CAPACITY + ' products, ' + SALES_CAPACITY + ' sales rows,',
    '    ' + MARKETING_CAPACITY + ' marketing rows, ' + STATS_CAPACITY + ' stats rows.',
    '  • Fonts: Playfair Display is substituted with Lora, Jost with Roboto.',
    '',
    'For analysis, query Sales Log + Products. Typical questions:',
    '  • Which products should I scale, watch, or retire — and why?',
    '  • Where does ad spend lose money after fees?',
    '  • What is my next action on every in-flight product?',
    '  • Which channel earns the best net margin per unit?'
  ];
  sheet.getRange(1, 1, lines.length, 1).setValues(lines.map(function (l) { return [l]; }));
  sheet.getRange(1, 1, lines.length, 1).setFontFamily('Roboto Mono').setFontSize(10);
  sheet.setColumnWidth(1, 720);
}

// ── Channels — fee-default registry (rows 10-21, BOTH modes) ──────────
function buildChannels_(sheet) {
  chrome_(sheet, TABS.CHANNELS, 'H');
  var r = titleRow_(sheet, 'H', 'Channels',
    'Fee defaults per channel. Net computes from these whenever you leave Fees blank on the Sales Log.');

  var hdr = ['Channel', 'Fee %', 'Flat fee/order', 'Active', 'Notes'];
  sheet.getRange(r, 1, 1, hdr.length).setValues([hdr]).setFontWeight('bold')
    .setBackground(BRAND.FOREST).setFontColor(BRAND.PARCHMENT).setFontFamily(FONT.BODY).setFontSize(10);
  themable_(sheet.getName(), 'primary', sheet.getRange(r, 1, 1, hdr.length).getA1Notation());

  var firstRow = r + 1;   // row 10
  sheet.getRange(firstRow, 1, CHANNEL_DEFAULTS.length, 5).setValues(CHANNEL_DEFAULTS);
  sheet.getRange(firstRow, 1, CHAN.ROWS, 5).setBackground(BRAND.YELLOW)
    .setBorder(true, true, true, true, true, true, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);
  sheet.getRange(firstRow, 2, CHAN.ROWS, 1).setNumberFormat('0.0%');
  sheet.getRange(firstRow, 3, CHAN.ROWS, 1).setNumberFormat('$0.00');
  var activeRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Yes', 'No'], true).build();
  sheet.getRange(firstRow, 4, CHAN.ROWS, 1).setDataValidation(activeRule);

  setCell_(sheet, 'A' + (firstRow + CHAN.ROWS + 1), {
    value: 'Defaults — verify your plan\'s current fees. Fee schedules change; these cells are yours to edit and every Net formula reads them live.',
    merge: 'H' + (firstRow + CHAN.ROWS + 1), font: FONT.BODY, size: 10, italic: true, color: BRAND.CAPTION, wrap: true });

  footer_(sheet, 45, 'H');
  setColWidths_(sheet, [140, 80, 110, 70, 320, 40, 40, 40]);
}

// ── Products — the master table (the only wide tab) ───────────────────
function buildProducts_(sheet, mode) {
  // clear() does not remove a basic filter and a second createFilter throws
  var existingFilter = sheet.getFilter();
  if (existingFilter) existingFilter.remove();
  var LAST_COL = PROD.COL_LISTED_HELPER;            // 49 (AW)
  // 49 columns > the 26-column default grid — grow it BEFORE any write.
  ensureGrid_(sheet, PROD_LAST_ROW + 5, LAST_COL);
  var lastColLetter = columnToLetter_(LAST_COL);
  chrome_(sheet, TABS.PRODUCTS, lastColLetter);
  titleRow_(sheet, lastColLetter, 'Products',
    'The master table. One row per product — name it, price it, tick the steps as you go. ' + PRODUCT_CAPACITY + ' slots.');

  // Group band (row 9): identity spacer + five colored group bands +
  // CUSTOM + COMPUTED.
  var band = PROD.HEADER_BAND_ROW;
  sheet.getRange(band, 1, 1, 8).merge().setBackground(BRAND.CREAM);
  themable_(sheet.getName(), 'section', sheet.getRange(band, 1, 1, 8).getA1Notation());
  var col = PROD.COL_STEP_FIRST;
  for (var g = 0; g < STEP_GROUPS.length; g++) {
    var width = STEP_GROUPS[g][1].length;
    setCell_(sheet, sheet.getRange(band, col).getA1Notation(), {
      value: STEP_GROUPS[g][0], merge: sheet.getRange(band, col + width - 1).getA1Notation(),
      font: FONT.BODY, size: 9, bold: true, color: BRAND.PARCHMENT, bg: BRAND.GROUP_FILLS[g],
      h: 'center', v: 'middle' });
    col += width;
  }
  setCell_(sheet, sheet.getRange(band, PROD.COL_CUSTOM_FIRST).getA1Notation(), {
    value: 'CUSTOM', merge: sheet.getRange(band, PROD.COL_CUSTOM_FIRST + CUSTOM_STEP_SLOTS - 1).getA1Notation(),
    font: FONT.BODY, size: 9, bold: true, color: BRAND.BODY, bg: BRAND.YELLOW, h: 'center', v: 'middle' });
  setCell_(sheet, sheet.getRange(band, PROD.COL_PROGRESS).getA1Notation(), {
    value: 'COMPUTED', merge: sheet.getRange(band, PROD.COL_STALE).getA1Notation(),
    font: FONT.BODY, size: 9, bold: true, color: BRAND.GOLD, bg: BRAND.CREAM, h: 'center', v: 'middle' });

  // Header row (10): identity + rotated step names + computed labels.
  var hdrRow = PROD.HEADER_ROW;
  sheet.getRange(hdrRow, 1, 1, 8).setValues([[
    '#', 'Product', 'Status', 'Price', 'Listing URL', 'Target date', 'Launched', 'Notes']])
    .setFontWeight('bold').setFontColor(BRAND.PARCHMENT).setBackground(BRAND.FOREST)
    .setFontFamily(FONT.BODY).setFontSize(10);
  themable_(sheet.getName(), 'primary', sheet.getRange(hdrRow, 1, 1, 8).getA1Notation());
  sheet.getRange(hdrRow, PROD.COL_STEP_FIRST, 1, STEP_COUNT).setValues([STEPS])
    .setFontFamily(FONT.BODY).setFontSize(8).setFontColor(BRAND.BODY)
    .setTextRotation(90).setVerticalAlignment('bottom').setHorizontalAlignment('center');
  var customHdrs = [];
  for (var cs = 1; cs <= CUSTOM_STEP_SLOTS; cs++) customHdrs.push('Custom ' + cs);
  sheet.getRange(hdrRow, PROD.COL_CUSTOM_FIRST, 1, CUSTOM_STEP_SLOTS).setValues([customHdrs])
    .setFontFamily(FONT.BODY).setFontSize(8).setFontColor(BRAND.BODY)
    .setBackground(BRAND.YELLOW).setTextRotation(90).setVerticalAlignment('bottom').setHorizontalAlignment('center');
  sheet.getRange(hdrRow, PROD.COL_PROGRESS, 1, 4).setValues([['Progress', 'Next step', 'Days to target', 'Days since sale']])
    .setFontWeight('bold').setFontColor(BRAND.BODY).setFontFamily(FONT.BODY).setFontSize(9);
  sheet.setRowHeight(hdrRow, 110);

  var first = PROD.FIRST_ROW, n = PRODUCT_CAPACITY;

  // Identity columns: # auto, yellow name, status dropdown, price/url/dates.
  sheet.getRange(first, PROD.COL_NUM, n, 1)
    .setFormulaR1C1('=IF(RC2="","",ROW()-' + (first - 1) + ')')
    .setFontColor(BRAND.CAPTION).setFontSize(9);
  sheet.getRange(first, PROD.COL_NAME, n, 1).setBackground(BRAND.YELLOW)
    .setBorder(true, true, true, true, true, true, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);
  var statusRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(PRODUCT_STATUSES, true).build();
  sheet.getRange(first, PROD.COL_STATUS, n, 1).setDataValidation(statusRule);
  sheet.getRange(first, PROD.COL_PRICE, n, 1).setNumberFormat('$#,##0.00').setBackground(BRAND.YELLOW);
  sheet.getRange(first, PROD.COL_URL, n, 1).setBackground(BRAND.YELLOW);
  sheet.getRange(first, PROD.COL_TARGET, n, 2).setNumberFormat('mmm d, yyyy').setBackground(BRAND.YELLOW);
  sheet.getRange(first, PROD.COL_NOTES, n, 1).setBackground(BRAND.YELLOW);

  // Checklist: real checkboxes across fixed + custom step columns —
  // slabbed (8,750 cells in one mutation chokes the Sheets backend).
  forEachSlab_(first, n, 50, function (slabStart, slabRows) {
    sheet.getRange(slabStart, PROD.COL_STEP_FIRST, slabRows, STEP_COUNT + CUSTOM_STEP_SLOTS).insertCheckboxes();
  });

  // Computed columns — Progress + Next-step run on the 30 fixed steps only.
  // Built as per-column formula arrays and written in ONE setFormulas call
  // each (250 rows x 6 computed columns would be 1,500 slow per-cell calls).
  var stepFirstL = columnToLetter_(PROD.COL_STEP_FIRST);                       // I
  var stepLastL = columnToLetter_(PROD.COL_STEP_FIRST + STEP_COUNT - 1);       // AL
  var progL = columnToLetter_(PROD.COL_PROGRESS);
  var fProgress = [], fNext = [], fDays = [], fStale = [], fRank = [], fListed = [];
  for (var pr = 0; pr < n; pr++) {
    var rr = first + pr;
    fProgress.push(['=IF($B' + rr + '="","",COUNTIF($' + stepFirstL + rr + ':$' + stepLastL + rr + ',TRUE)/' + STEP_COUNT + ')']);
    fNext.push(['=IF($B' + rr + '="","",IFERROR(INDEX($' + stepFirstL + '$' + hdrRow + ':$' + stepLastL + '$' + hdrRow + ',1,MATCH(FALSE,$' + stepFirstL + rr + ':$' + stepLastL + rr + ',FALSE)),"Done"))']);
    fDays.push(['=IF(OR($B' + rr + '="",$F' + rr + '=""),"",$F' + rr + '-TODAY())']);
    fStale.push(['=IF(OR($B' + rr + '="",$C' + rr + '<>"Listed"),"",IFERROR(TODAY()-MAXIFS(\'' + TABS.SALES + '\'!$A:$A,\'' + TABS.SALES + '\'!$B:$B,$B' + rr + '),""))']);
    fRank.push(['=IF(OR($B' + rr + '="",$C' + rr + '="Listed",$C' + rr + '="Retired"),"",' + progL + rr + '+ROW()/1000000)']);
    fListed.push(['=IF(AND($B' + rr + '<>"",$C' + rr + '="Listed",$G' + rr + '<>""),$G' + rr + '+ROW()/1000000,"")']);
  }
  forEachSlab_(first, n, 50, function (slabStart, slabRows) {
    var off = slabStart - first;
    sheet.getRange(slabStart, PROD.COL_PROGRESS, slabRows, 1).setFormulas(fProgress.slice(off, off + slabRows));
    sheet.getRange(slabStart, PROD.COL_NEXT, slabRows, 1).setFormulas(fNext.slice(off, off + slabRows));
    sheet.getRange(slabStart, PROD.COL_DAYS, slabRows, 1).setFormulas(fDays.slice(off, off + slabRows));
    sheet.getRange(slabStart, PROD.COL_STALE, slabRows, 1).setFormulas(fStale.slice(off, off + slabRows));
    sheet.getRange(slabStart, PROD.COL_RANK_HELPER, slabRows, 1).setFormulas(fRank.slice(off, off + slabRows));
    sheet.getRange(slabStart, PROD.COL_LISTED_HELPER, slabRows, 1).setFormulas(fListed.slice(off, off + slabRows));
  });
  sheet.getRange(first, PROD.COL_PROGRESS, n, 1).setNumberFormat('0%');
  sheet.getRange(first, PROD.COL_DAYS, n, 1).setNumberFormat('0" d"');
  sheet.getRange(first, PROD.COL_STALE, n, 1).setNumberFormat('0" d"');

  // Days-to-target chips: On Track ≥ 7 · Fair 0-6 · Over < 0.
  var daysRange = sheet.getRange(first, PROD.COL_DAYS, n, 1);
  var daysL = columnToLetter_(PROD.COL_DAYS);
  var rules = sheet.getConditionalFormatRules();
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied('=AND(ISNUMBER($' + daysL + first + '),$' + daysL + first + '<0)')
    .setBackground(BRAND.CHIP_OVER_BG).setFontColor(BRAND.GARNET).setBold(true).setRanges([daysRange]).build());
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied('=AND(ISNUMBER($' + daysL + first + '),$' + daysL + first + '<7)')
    .setBackground(BRAND.CHIP_FAIR_BG).setFontColor(BRAND.GOLD).setBold(true).setRanges([daysRange]).build());
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied('=ISNUMBER($' + daysL + first + ')')
    .setBackground(BRAND.CHIP_ON_BG).setFontColor(BRAND.CANOPY).setBold(true).setRanges([daysRange]).build());
  sheet.setConditionalFormatRules(rules);

  // Mock catalog — names, statuses, dates, prices, ticks.
  if (mode === 'mock') {
    var today = new Date();
    for (var i = 0; i < MOCK.products.length; i++) {
      var p = MOCK.products[i];
      var row = first + i;
      sheet.getRange(row, PROD.COL_NAME).setValue(p[0]);
      sheet.getRange(row, PROD.COL_STATUS).setValue(p[1]);
      if (p[2] != null) sheet.getRange(row, PROD.COL_PRICE).setValue(p[2]);
      if (p[1] === 'Listed') {
        sheet.getRange(row, PROD.COL_URL).setValue('etsy.com/listing/junipr-' + (i + 1));
        var monthsAgo = p[3];
        sheet.getRange(row, PROD.COL_LAUNCHED).setValue(
          new Date(today.getFullYear(), today.getMonth() - Math.floor(monthsAgo), today.getDate() - Math.round((monthsAgo % 1) * 30)));
      }
      if (p[4] != null) {
        sheet.getRange(row, PROD.COL_TARGET).setValue(
          new Date(today.getFullYear(), today.getMonth(), today.getDate() + p[4]));
      }
      // ticks: 'all' = all 30 · 'tb' = the Teacher Bundle plan · number =
      // first N steps · array = explicit indices
      var ticks = p[5];
      var flags = [];
      for (var s = 0; s < STEP_COUNT; s++) flags.push(false);
      if (ticks === 'all') { for (var a = 0; a < STEP_COUNT; a++) flags[a] = true; }
      else if (ticks === 'tb') { MOCK_TB_TICKS.forEach(function (ix) { flags[ix] = true; }); }
      else if (typeof ticks === 'number') { for (var f = 0; f < ticks; f++) flags[f] = true; }
      sheet.getRange(row, PROD.COL_STEP_FIRST, 1, STEP_COUNT).setValues([flags]);
    }
  }

  // Layout: freeze identity, narrow step columns, hide ranking helpers.
  SpreadsheetApp.flush();
  try { sheet.setFrozenRows(hdrRow); } catch (e) {}
  try { sheet.setFrozenColumns(PROD.COL_STATUS); } catch (e) {}
  sheet.setColumnWidth(PROD.COL_NUM, 36);
  sheet.setColumnWidth(PROD.COL_NAME, 185);
  sheet.setColumnWidth(PROD.COL_STATUS, 86);
  sheet.setColumnWidth(PROD.COL_PRICE, 70);
  sheet.setColumnWidth(PROD.COL_URL, 150);
  sheet.setColumnWidth(PROD.COL_TARGET, 100);
  sheet.setColumnWidth(PROD.COL_LAUNCHED, 100);
  sheet.setColumnWidth(PROD.COL_NOTES, 140);
  sheet.setColumnWidths(PROD.COL_STEP_FIRST, STEP_COUNT + CUSTOM_STEP_SLOTS, 26);
  sheet.setColumnWidth(PROD.COL_PROGRESS, 70);
  sheet.setColumnWidth(PROD.COL_NEXT, 170);
  sheet.setColumnWidth(PROD.COL_DAYS, 86);
  sheet.setColumnWidth(PROD.COL_STALE, 86);
  sheet.hideColumns(PROD.COL_RANK_HELPER, 2);
  sheet.getRange(PROD.HEADER_ROW, 1, 1 + PRODUCT_CAPACITY, PROD.COL_STALE).createFilter();

  footer_(sheet, PROD_LAST_ROW + 2, lastColLetter);
}

// ── Sales Log — the append-only money record (10,000 rows) ────────────
function buildSalesLog_(sheet, mode) {
  var existingFilter = sheet.getFilter();
  if (existingFilter) existingFilter.remove();

  ensureGrid_(sheet, SALES.FIRST_ROW + SALES_CAPACITY + 5, 26);
  chrome_(sheet, TABS.SALES, 'I');
  var r = titleRow_(sheet, 'I', 'Sales Log',
    'One row when money lands. Leave Fees blank and Net computes from your channel defaults.');

  var hdr = ['Date', 'Product', 'Channel', 'Units', 'Gross', 'Fees', 'Net', 'Notes', 'Month'];
  var headerRow = SALES.HEADER_ROW;   // 9
  sheet.getRange(headerRow, 1, 1, 9).setValues([hdr]).setFontWeight('bold')
    .setBackground(BRAND.FOREST).setFontColor(BRAND.PARCHMENT).setFontFamily(FONT.BODY).setFontSize(10);
  themable_(sheet.getName(), 'primary', sheet.getRange(headerRow, 1, 1, 9).getA1Notation());
  SpreadsheetApp.flush();
  try { sheet.setFrozenRows(headerRow); } catch (e) {}

  var firstData = SALES.FIRST_ROW;   // 10
  var rows = (mode === 'mock') ? generateMockSales_() : [];
  if (rows.length) {
    // cols A-F only — G (Net) and I (Month) keep their prewired formulas
    sheet.getRange(firstData, 1, rows.length, 6).setValues(rows);
  }

  sheet.getRange(firstData, 1, SALES_CAPACITY, 1).setNumberFormat('mmm d, yyyy');
  sheet.getRange(firstData, 4, SALES_CAPACITY, 1).setNumberFormat('#,##0');
  sheet.getRange(firstData, 5, SALES_CAPACITY, 2).setNumberFormat('$#,##0.00');
  sheet.getRange(firstData, 7, SALES_CAPACITY, 1).setNumberFormat('$#,##0.00');

  var ss = SpreadsheetApp.getActive();
  var prodRule = SpreadsheetApp.newDataValidation()
    .requireValueInRange(ss.getRangeByName('cc_products_list') ||
      ss.getRange("'" + TABS.PRODUCTS + "'!B" + PROD.FIRST_ROW + ':B' + PROD_LAST_ROW), true).build();
  var chRule = SpreadsheetApp.newDataValidation()
    .requireValueInRange(ss.getRangeByName('cc_channels_list') ||
      ss.getRange("'" + TABS.CHANNELS + "'!A10:A21"), true).build();
  // Net: explicit Fees wins; else Gross − (Gross × fee% + flat × Units),
  // fee defaults VLOOKUPed live from the Channels registry. Formulas +
  // validations land in 2,000-row slabs — 10,000-row single mutations are
  // what the Sheets backend gives up on.
  forEachSlab_(firstData, SALES_CAPACITY, 2000, function (slabStart, slabRows) {
    sheet.getRange(slabStart, 7, slabRows, 1).setFormulaR1C1(
      '=IF(RC1="","",IF(RC6<>"",RC5-RC6,ROUND(RC5-(RC5*IFERROR(VLOOKUP(RC3,cc_channel_fees,2,FALSE),0)+IFERROR(VLOOKUP(RC3,cc_channel_fees,3,FALSE),0)*IF(RC4="",1,RC4)),2)))');
    sheet.getRange(slabStart, 9, slabRows, 1).setFormulaR1C1('=IF(RC1="","",TEXT(RC1,"yyyy-mm"))');
    sheet.getRange(slabStart, 2, slabRows, 1).setDataValidation(prodRule);
    sheet.getRange(slabStart, 3, slabRows, 1).setDataValidation(chRule);
  });

  setColWidths_(sheet, [105, 220, 105, 60, 90, 90, 95, 200, 80]);
  sheet.hideColumns(9); // Month is a helper column

  sheet.getRange(headerRow, 1, 1 + SALES_CAPACITY, 9).createFilter();
}

// ── Marketing Log (2,000 rows) ────────────────────────────────────────
function buildMarketingLog_(sheet, mode) {
  var existingFilter = sheet.getFilter();
  if (existingFilter) existingFilter.remove();

  ensureGrid_(sheet, MKT.FIRST_ROW + MARKETING_CAPACITY + 5, 26);
  chrome_(sheet, TABS.MARKETING, 'G');
  var r = titleRow_(sheet, 'G', 'Marketing Log',
    'One row per campaign or spend. Feeds net-after-spend and the per-product verdicts.');

  var hdr = ['Date', 'Product', 'Channel', 'Activity', 'Spend', 'Result note', 'Month'];
  var headerRow = MKT.HEADER_ROW;
  sheet.getRange(headerRow, 1, 1, 7).setValues([hdr]).setFontWeight('bold')
    .setBackground(BRAND.FOREST).setFontColor(BRAND.PARCHMENT).setFontFamily(FONT.BODY).setFontSize(10);
  themable_(sheet.getName(), 'primary', sheet.getRange(headerRow, 1, 1, 7).getA1Notation());
  SpreadsheetApp.flush();
  try { sheet.setFrozenRows(headerRow); } catch (e) {}

  var firstData = MKT.FIRST_ROW;
  var rows = (mode === 'mock') ? generateMockMarketing_() : [];
  if (rows.length) sheet.getRange(firstData, 1, rows.length, 6).setValues(rows);

  sheet.getRange(firstData, 1, MARKETING_CAPACITY, 1).setNumberFormat('mmm d, yyyy');
  sheet.getRange(firstData, 5, MARKETING_CAPACITY, 1).setNumberFormat('$#,##0.00');
  forEachSlab_(firstData, MARKETING_CAPACITY, 2000, function (slabStart, slabRows) {
    sheet.getRange(slabStart, 7, slabRows, 1).setFormulaR1C1('=IF(RC1="","",TEXT(RC1,"yyyy-mm"))');
  });

  var ss = SpreadsheetApp.getActive();
  // Product validation allows invalid so "— Portfolio —" rows are typeable.
  var prodRule = SpreadsheetApp.newDataValidation()
    .requireValueInRange(ss.getRangeByName('cc_products_list') ||
      ss.getRange("'" + TABS.PRODUCTS + "'!B" + PROD.FIRST_ROW + ':B' + PROD_LAST_ROW), true)
    .setAllowInvalid(true).build();
  sheet.getRange(firstData, 2, MARKETING_CAPACITY, 1).setDataValidation(prodRule);
  var chRule = SpreadsheetApp.newDataValidation()
    .requireValueInRange(ss.getRangeByName('cc_channels_list') ||
      ss.getRange("'" + TABS.CHANNELS + "'!A10:A21"), true).setAllowInvalid(true).build();
  sheet.getRange(firstData, 3, MARKETING_CAPACITY, 1).setDataValidation(chRule);
  var actRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(MARKETING_ACTIVITIES, true).build();
  sheet.getRange(firstData, 4, MARKETING_CAPACITY, 1).setDataValidation(actRule);

  setColWidths_(sheet, [105, 220, 105, 110, 90, 280, 80]);
  sheet.hideColumns(7);
  sheet.getRange(headerRow, 1, 1 + MARKETING_CAPACITY, 7).createFilter();
}

// ── Stats — optional funnel data (3,000 rows) ─────────────────────────
function buildStats_(sheet, mode) {
  var existingFilter = sheet.getFilter();
  if (existingFilter) existingFilter.remove();

  ensureGrid_(sheet, STATSL.FIRST_ROW + STATS_CAPACITY + 5, 26);
  chrome_(sheet, TABS.STATS, 'F');
  var r = titleRow_(sheet, 'F', 'Stats',
    'Optional. One row per product per month — views, favorites, orders from your shop stats. Skipping it breaks nothing.');

  var hdr = ['Month', 'Product', 'Views', 'Favorites', 'Orders', 'Notes'];
  var headerRow = STATSL.HEADER_ROW;
  sheet.getRange(headerRow, 1, 1, 6).setValues([hdr]).setFontWeight('bold')
    .setBackground(BRAND.FOREST).setFontColor(BRAND.PARCHMENT).setFontFamily(FONT.BODY).setFontSize(10);
  themable_(sheet.getName(), 'primary', sheet.getRange(headerRow, 1, 1, 6).getA1Notation());
  SpreadsheetApp.flush();
  try { sheet.setFrozenRows(headerRow); } catch (e) {}

  var firstData = STATSL.FIRST_ROW;
  var rows = (mode === 'mock') ? generateMockStats_() : [];
  if (rows.length) sheet.getRange(firstData, 1, rows.length, 6).setValues(rows);

  // Month is a YYYY-MM string — force text so locales don't date-parse it.
  sheet.getRange(firstData, 1, STATS_CAPACITY, 1).setNumberFormat('@');
  sheet.getRange(firstData, 3, STATS_CAPACITY, 3).setNumberFormat('#,##0');
  var ss = SpreadsheetApp.getActive();
  var prodRule = SpreadsheetApp.newDataValidation()
    .requireValueInRange(ss.getRangeByName('cc_products_list') ||
      ss.getRange("'" + TABS.PRODUCTS + "'!B" + PROD.FIRST_ROW + ':B' + PROD_LAST_ROW), true).build();
  sheet.getRange(firstData, 2, STATS_CAPACITY, 1).setDataValidation(prodRule);

  setColWidths_(sheet, [90, 220, 80, 90, 80, 280]);
  sheet.getRange(headerRow, 1, 1 + STATS_CAPACITY, 6).createFilter();
}

// ── Mock generators — PURE (no Sheets calls) so the Node verification
// harness can run them and assert the headline truths. ────────────────

// Trailing 9 (year, monthIdx) pairs ending in today's calendar month.
function mockMonthDates_() {
  var today = new Date();
  var out = [];
  for (var k = 8; k >= 0; k--) {
    var d = new Date(today.getFullYear(), today.getMonth() - k, 1);
    out.push({ year: d.getFullYear(), monthIdx: d.getMonth() });
  }
  return out;
}

// Sales rows [Date, Product, Channel, Units, Gross, Fees('')] — Fees stays
// blank so the prewired Net formula demos the channel defaults. Units per
// product-month come from MOCK.products; rows of 1-3 units each.
function generateMockSales_() {
  var rows = [];
  var months = mockMonthDates_();
  var channels = ['Etsy', 'Shopify', 'Gumroad'];

  MOCK.products.forEach(function (p) {
    var name = p[0], price = p[2], unitsByMonth = p[6];
    if (!unitsByMonth) return;
    var split = MOCK.channel_split[name] || [1, 0, 0];

    for (var m = 0; m < 9; m++) {
      var total = unitsByMonth[m];
      if (!total) continue;
      // channel unit allocation (largest-remainder on the split)
      var alloc = [Math.round(total * split[0]), Math.round(total * split[1]), 0];
      alloc[2] = total - alloc[0] - alloc[1];
      if (alloc[2] < 0) { alloc[0] += alloc[2]; alloc[2] = 0; }
      for (var c = 0; c < 3; c++) {
        var left = alloc[c], i = 0;
        while (left > 0) {
          var u = Math.min(left, (i % 3 === 2) ? 2 : 1);   // mostly single-unit rows
          var day = 2 + ((i * 5 + c * 3 + m) % 26);
          rows.push([new Date(months[m].year, months[m].monthIdx, day),
            name, channels[c], u, u * price, '']);
          left -= u; i++;
        }
      }
    }
  });
  rows.sort(function (a, b) { return b[0] - a[0]; });
  return rows;
}

// Marketing rows [Date, Product, Channel, Activity, Spend, Result note]
function generateMockMarketing_() {
  var rows = [];
  var months = mockMonthDates_();
  for (var m = 0; m < 9; m++) {
    var hero = MOCK.marketing.hero_spend[m];
    if (hero) rows.push([new Date(months[m].year, months[m].monthIdx, 5),
      'Wedding Suite No. 4', 'Etsy', 'Ads', hero, 'Etsy Ads month budget']);
    var dud = MOCK.marketing.dud_spend[m];
    if (dud) rows.push([new Date(months[m].year, months[m].monthIdx, 7),
      'Minimal Budget Sheets', 'Etsy', 'Ads', dud, 'Etsy Ads test']);
  }
  // a sale event and two price tests — zero-spend actions, logged anyway
  rows.push([new Date(months[6].year, months[6].monthIdx, 14), '— Portfolio —', 'Etsy', 'Sale event', 0, 'Site-wide 20% weekend']);
  rows.push([new Date(months[4].year, months[4].monthIdx, 3), 'Recipe Card Set', 'Etsy', 'Price test', 0, '$9 → $11 trial, reverted']);
  rows.push([new Date(months[7].year, months[7].monthIdx, 9), 'Everyday Planner Kit', 'Etsy', 'Price test', 0, '$16 → $18 trial, kept two weeks']);
  rows.sort(function (a, b) { return b[0] - a[0]; });
  return rows;
}

// Stats rows [MonthCode, Product, Views, Favorites, Orders, '']
function generateMockStats_() {
  var rows = [];
  var months = mockMonthDates_();
  var codes = months.map(function (md) {
    var mm = md.monthIdx + 1;
    return md.year + '-' + (mm < 10 ? '0' + mm : '' + mm);
  });
  MOCK.products.forEach(function (p) {
    var name = p[0], unitsByMonth = p[6];
    var st = MOCK.stats[name];
    if (!st || !unitsByMonth) return;
    for (var m = 0; m < 9; m++) {
      if (name === 'Teacher Bundle' && m < 7) continue;   // listed in month 7
      var views = Math.round(st.views0 + (st.views8 - st.views0) * (m / 8));
      if (name === 'Teacher Bundle') views = m === 7 ? 520 : st.views8;
      var orders = unitsByMonth[m];
      rows.push([codes[m], name, views, Math.round(views * st.favPct), orders, '']);
    }
  });
  return rows;
}

// ── _Engine — the one cross-product matrix + portfolio/channel rows ───
function buildEngine_(sheet, mode) {
  ensureGrid_(sheet, ENGINE_PRODUCT_LAST + 5, 26);
  var monthCodes = monthCodesEndingAt_(new Date());
  sheet.getRange('A1').setValue('metric \\ month').setFontWeight('bold');
  sheet.getRange(1, 2, 1, 24).setNumberFormat('@').setValues([monthCodes]).setFontWeight('bold');

  var sales = "'" + TABS.SALES + "'";
  var mkt = "'" + TABS.MARKETING + "'";

  // Portfolio rows 2-9 — one R1C1 template per row (24 columns each).
  var labels = ['GrossRevenue', 'Fees', 'NetRevenue', 'Units', 'MarketingSpend', 'NetAfterSpend', 'SalesRows', 'ActiveProducts'];
  for (var i = 0; i < labels.length; i++) sheet.getRange(2 + i, 1).setValue(labels[i]);
  sheet.getRange(ENGINE_ROWS.GROSS, 2, 1, 24).setFormulaR1C1(
    '=SUMIFS(' + sales + '!C5,' + sales + '!C9,R1C[0])');
  sheet.getRange(ENGINE_ROWS.FEES, 2, 1, 24).setFormulaR1C1(
    '=R[-1]C[0]-R[1]C[0]');
  sheet.getRange(ENGINE_ROWS.NET, 2, 1, 24).setFormulaR1C1(
    '=SUMIFS(' + sales + '!C7,' + sales + '!C9,R1C[0])');
  sheet.getRange(ENGINE_ROWS.UNITS, 2, 1, 24).setFormulaR1C1(
    '=SUMIFS(' + sales + '!C4,' + sales + '!C9,R1C[0])');
  sheet.getRange(ENGINE_ROWS.SPEND, 2, 1, 24).setFormulaR1C1(
    '=SUMIFS(' + mkt + '!C5,' + mkt + '!C7,R1C[0])');
  sheet.getRange(ENGINE_ROWS.NET_AFTER, 2, 1, 24).setFormulaR1C1(
    '=R[-3]C[0]-R[-1]C[0]');
  sheet.getRange(ENGINE_ROWS.SALES_ROWS, 2, 1, 24).setFormulaR1C1(
    '=COUNTIFS(' + sales + '!C9,R1C[0])');
  sheet.getRange(ENGINE_ROWS.ACTIVE, 2, 1, 24).setFormulaR1C1(
    '=SUMPRODUCT(--(R' + ENGINE_ROWS.PRODUCT_FIRST + 'C[0]:R' + ENGINE_PRODUCT_LAST + 'C[0]>0))');

  // Channel rows 12-23 — names from the registry; net per channel-month.
  sheet.getRange(11, 1).setValue('— channel net × month —').setFontColor(BRAND.CAPTION).setFontSize(8);
  sheet.getRange(ENGINE_ROWS.CHANNEL_FIRST, 1, CHANNEL_SLOTS, 1).setFormulaR1C1(
    "=IF('" + TABS.CHANNELS + "'!R[-2]C1=\"\",\"\",'" + TABS.CHANNELS + "'!R[-2]C1)");
  sheet.getRange(ENGINE_ROWS.CHANNEL_FIRST, 2, CHANNEL_SLOTS, 24).setFormulaR1C1(
    '=IF(RC1="",0,SUMIFS(' + sales + '!C7,' + sales + '!C3,RC1,' + sales + '!C9,R1C[0]))');

  // Product matrix rows 30-279 — names from Products col B (offset −19);
  // net per product-month. ONE R1C1 template covers the whole matrix.
  sheet.getRange(29, 1).setValue('— product net × month —').setFontColor(BRAND.CAPTION).setFontSize(8);
  // 250 × 25 formulas — slabbed so the matrix lands as several mutations.
  forEachSlab_(ENGINE_ROWS.PRODUCT_FIRST, PRODUCT_CAPACITY, 50, function (slabStart, slabRows) {
    sheet.getRange(slabStart, 1, slabRows, 1).setFormulaR1C1(
      "=IF('" + TABS.PRODUCTS + "'!R[-" + (ENGINE_ROWS.PRODUCT_FIRST - PROD.FIRST_ROW) + "]C2=\"\",\"\",'" + TABS.PRODUCTS + "'!R[-" + (ENGINE_ROWS.PRODUCT_FIRST - PROD.FIRST_ROW) + "]C2)");
    sheet.getRange(slabStart, 2, slabRows, 24).setFormulaR1C1(
      '=IF(RC1="",0,SUMIFS(' + sales + '!C7,' + sales + '!C2,RC1,' + sales + '!C9,R1C[0]))');
  });

  sheet.getRange(2, 2, 6, 24).setNumberFormat('$#,##0');
  sheet.getRange(ENGINE_ROWS.UNITS, 2, 1, 24).setNumberFormat('#,##0');
  sheet.getRange(ENGINE_ROWS.SALES_ROWS, 2, 2, 24).setNumberFormat('#,##0');
  sheet.getRange(ENGINE_ROWS.CHANNEL_FIRST, 2, CHANNEL_SLOTS, 24).setNumberFormat('$#,##0');
  sheet.getRange(ENGINE_ROWS.PRODUCT_FIRST, 2, PRODUCT_CAPACITY, 24).setNumberFormat('$#,##0');
}

function columnToLetter_(col) {
  var letter = '';
  while (col > 0) { var m = (col - 1) % 26; letter = String.fromCharCode(65 + m) + letter; col = Math.floor((col - 1) / 26); }
  return letter;
}

// ── Rolling 24-month window maintenance (Foundation pattern) ──────────
function rollEngineForward_(anchorDate) {
  var ss = SpreadsheetApp.getActive();
  var eng = ss.getSheetByName(TABS.ENGINE);
  if (!eng) return false;
  var newCodes = monthCodesEndingAt_(anchorDate);
  var current = eng.getRange(1, 2, 1, 24).getValues()[0];
  var same = true;
  for (var i = 0; i < 24; i++) {
    if (String(current[i]) !== newCodes[i]) { same = false; break; }
  }
  if (same) return false;
  eng.getRange(1, 2, 1, 24).setNumberFormat('@').setValues([newCodes]);
  return true;
}

function lastEngineMonthCode_() {
  var ss = SpreadsheetApp.getActive();
  var eng = ss.getSheetByName(TABS.ENGINE);
  if (!eng) return '';
  return String(eng.getRange(1, 25).getValue() || '');
}
/**
 * Column & Co. — The Workbench v1.0
 * 05 · View tabs: Start Here, Dashboard, Pipeline, Product View, Trends.
 */

var ENG = "'" + '_Engine' + "'";
var CUR_MONTH_IDX = 23;

// ── Start Here ────────────────────────────────────────────────────────
function buildStartHere_(sheet) {
  chrome_(sheet, TABS.START, 'L', 'SETUP GUIDE');
  var r = CONTENT_START_ROW;

  setCell_(sheet, 'A' + r, { value: 'Every product. One workbench.',
    merge: 'L' + r, font: FONT.DISPLAY, size: 26, bold: true, color: BRAND.FOREST, v: 'bottom' });
  sheet.setRowHeight(r, 40);
  setCell_(sheet, 'A' + (r + 1), {
    value: 'A portfolio command deck you own. The path to listed for every product, and the sales story after — three products or three hundred, same five-minute week.',
    merge: 'L' + (r + 1), font: FONT.BODY, size: 13, color: BRAND.BODY, wrap: true, v: 'top' });
  sheet.setRowHeight(r + 1, 36);

  r += 3;
  sectionLabel_(sheet, 'A' + r, 'L' + r, 'CHOOSE YOUR THEME · 24 PALETTES · APPLY VIA 💳 COLUMN & CO. ▸ APPLY THEME');
  r += 1;
  var tileTop = r;
  var TILES_PER_ROW = 12;
  for (var i = 0; i < PALETTES.length; i++) {
    var p = PALETTES[i];
    var rowBlock = Math.floor(i / TILES_PER_ROW);
    var colInRow = i % TILES_PER_ROW;
    var topRow = tileTop + rowBlock * 3;
    var col = 1 + colInRow;
    sheet.getRange(topRow, col).setBackground(p.primary);
    sheet.getRange(topRow + 1, col).setBackground(p.accent);
    setCell_(sheet, sheet.getRange(topRow + 2, col).getA1Notation(),
      { value: p.name, font: FONT.BODY, size: 8, color: BRAND.BODY, h: 'center', wrap: true });
  }
  sheet.setColumnWidths(1, 12, 62);

  r = tileTop + 7;
  sectionLabel_(sheet, 'A' + r, 'L' + r, 'SETUP GUIDE · 6 STEPS');
  r += 1;
  var steps = [
    ['1', 'Install the Script', 'Extensions → Apps Script → paste the ColumnCo file. A 💳 Column & Co. menu appears.'],
    ['2', 'Check Your Channels', 'Etsy, Shopify, Gumroad fee defaults are seeded. Verify them against your plan.'],
    ['3', 'Add Your First Product', 'One row on Products. Name it, set a status, tick the steps you have already done.'],
    ['4', 'Tick Steps As You Build', 'Pipeline computes your stage, progress, and next action from the boxes.'],
    ['5', 'Log Sales As They Land', 'One row each on the Sales Log. Leave Fees blank — Net computes itself.'],
    ['6', 'Read the Dashboard', 'Top products, what needs attention, and what the catalog earned after spend.']
  ];
  for (var s = 0; s < steps.length; s++) {
    var c0 = 1 + s * 2;
    setCell_(sheet, sheet.getRange(r, c0).getA1Notation(),
      { value: steps[s][0], merge: sheet.getRange(r, c0 + 1).getA1Notation(),
        font: FONT.DISPLAY, size: 18, bold: true, color: BRAND.PARCHMENT, bg: BRAND.FOREST, h: 'center', v: 'middle' });
    themable_(sheet.getName(), 'primary', sheet.getRange(r, c0, 1, 2).getA1Notation());
    setCell_(sheet, sheet.getRange(r + 1, c0).getA1Notation(),
      { value: steps[s][1], merge: sheet.getRange(r + 1, c0 + 1).getA1Notation(),
        font: FONT.DISPLAY, size: 12, italic: true, color: BRAND.FOREST, h: 'left', v: 'middle' });
    setCell_(sheet, sheet.getRange(r + 2, c0).getA1Notation(),
      { value: steps[s][2], merge: sheet.getRange(r + 2, c0 + 1).getA1Notation(),
        font: FONT.BODY, size: 10, color: BRAND.BODY, wrap: true, v: 'top' });
  }
  sheet.setRowHeight(r + 2, 56);

  r += 4;
  sheet.getRange(r, 1, 5, 12).setBackground(BRAND.FOREST).setVerticalAlignment('top');
  themable_(sheet.getName(), 'primary', sheet.getRange(r, 1, 5, 12).getA1Notation());
  setCell_(sheet, 'A' + r, { value: 'Ask Claude or ChatGPT to read your catalog.', merge: 'F' + r,
    font: FONT.DISPLAY, size: 18, bold: true, color: BRAND.PARCHMENT, bg: BRAND.FOREST, wrap: true });
  setCell_(sheet, 'A' + (r + 1), {
    value: 'A hidden _Schema tab documents every column for an AI. Copy the prompt, paste it in your assistant, attach your sheet. You get portfolio answers in seconds.',
    merge: 'F' + (r + 4), font: FONT.BODY, size: 12, color: BRAND.PARCHMENT, bg: BRAND.FOREST, wrap: true, v: 'top' });
  var code = sheet.getRange(r, 7, 5, 6).merge();
  code.setBackground(BRAND.FOREST_HI).setFontFamily('Roboto Mono').setFontSize(10)
    .setFontColor(BRAND.CREAM).setWrap(true).setVerticalAlignment('middle').setHorizontalAlignment('left')
    .setValue('Which three products earned the most net revenue per month since launch, and which listed product hasn\'t sold in 60 days?');
  themable_(sheet.getName(), 'primary', code.getA1Notation());
  sheet.setRowHeight(r, 32);
  sheet.setRowHeight(r + 1, 24); sheet.setRowHeight(r + 2, 24);
  sheet.setRowHeight(r + 3, 24); sheet.setRowHeight(r + 4, 24);

  footer_(sheet, r + 6, 'L');
  setColWidths_(sheet, [78, 78, 78, 78, 78, 78, 78, 78, 70, 70, 70, 70]);
}

// ── Dashboard ─────────────────────────────────────────────────────────
function buildDashboard_(sheet, mode) {
  chrome_(sheet, TABS.DASHBOARD, 'L', 'VIEWING MONTH');
  sheet.getRange('A3').setFormula(
    '="VIEWING MONTH · "&UPPER(TEXT(IFERROR(DATEVALUE(INDEX(cc_engine_months,1,N4+1)&"-01"),INDEX(cc_engine_months,1,N4+1)),"mmm yyyy"))&"  "');
  var r = titleRow_(sheet, 'L', 'Dashboard',
    'The whole catalog at a glance. Updated automatically as sales land.');

  // Active month index (named cc_dashboard_month) — newest engine month
  // with net revenue, else the current month.
  sheet.getRange('N4').setFormula(
    '=IFERROR(LARGE(ARRAYFORMULA(IF(' + ENG + '!$B$' + ENGINE_ROWS.NET + ':$Y$' + ENGINE_ROWS.NET +
    '>0,COLUMN(' + ENG + '!$B$' + ENGINE_ROWS.NET + ':$Y$' + ENGINE_ROWS.NET + ')-2)),1),' + CUR_MONTH_IDX + ')');
  sheet.getRange('N3').setValue('active_month_idx (0-23)').setFontColor(BRAND.CAPTION).setFontSize(8);

  setCell_(sheet, 'A' + r, {
    formula: '=TEXT(IFERROR(DATEVALUE(INDEX(cc_engine_months,1,N4+1)&"-01"),INDEX(cc_engine_months,1,N4+1)),"mmmm yyyy")',
    merge: 'C' + r, font: FONT.DISPLAY, size: 26, bold: true, color: BRAND.FOREST });
  for (var i = 0; i < 6; i++) {
    var col = 6 + i;
    var engineIdx = 19 + i;
    var pillCellA1 = sheet.getRange(r, col).getA1Notation();
    setCell_(sheet, pillCellA1, {
      formula: '=TEXT(IFERROR(DATEVALUE(INDEX(cc_engine_months,1,' + engineIdx +
        ')&"-01"),INDEX(cc_engine_months,1,' + engineIdx + ')),"mmm")',
      font: FONT.BODY, size: 11, bold: true, h: 'center', v: 'middle',
      bg: BRAND.FOREST, color: BRAND.PARCHMENT });
    themable_(sheet.getName(), 'primary', pillCellA1);
  }
  var pillRange = sheet.getRange(r, 6, 1, 6);
  var inactiveRule = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied('=COLUMN()<>$N$4-12')
    .setBackground(BRAND.CREAM).setFontColor(BRAND.BODY).setBold(true)
    .setRanges([pillRange]).build();
  sheet.setConditionalFormatRules(sheet.getConditionalFormatRules().concat([inactiveRule]));
  r += 2;

  // KPI row — NET REVENUE · UNITS · MARKETING SPEND · NET AFTER SPEND
  var rowRef = function (row, at) { return 'INDEX(' + ENG + '!$B$' + row + ':$Y$' + row + ',1,' + at + ')'; };
  var netF   = '=' + rowRef(ENGINE_ROWS.NET, 'N4+1');
  var unitsF = '=' + rowRef(ENGINE_ROWS.UNITS, 'N4+1');
  var spendF = '=' + rowRef(ENGINE_ROWS.SPEND, 'N4+1');
  var nasF   = '=' + rowRef(ENGINE_ROWS.NET_AFTER, 'N4+1');
  var netSub = '=IF(N4=0,"first month",IF(' + rowRef(ENGINE_ROWS.NET, 'N4') + '=0,"vs last month —","vs last month "&TEXT((' +
    rowRef(ENGINE_ROWS.NET, 'N4+1') + '-' + rowRef(ENGINE_ROWS.NET, 'N4') + ')/' + rowRef(ENGINE_ROWS.NET, 'N4') + ',"+0.0%;-0.0%;0.0%")))';
  var unitsSub = '=IF(N4=0,"first month","vs last month "&TEXT(' + rowRef(ENGINE_ROWS.UNITS, 'N4+1') + '-' + rowRef(ENGINE_ROWS.UNITS, 'N4') + ',"+0;-0;0"))';
  var spendSub = '=IF(' + rowRef(ENGINE_ROWS.SPEND, 'N4+1') + '=0,"no spend logged this month","from the Marketing Log")';
  var nasSub = '=IF(N4=0,"first month","vs last month "&TEXT(' + rowRef(ENGINE_ROWS.NET_AFTER, 'N4+1') + '-' + rowRef(ENGINE_ROWS.NET_AFTER, 'N4') + ',"+$#,##0;-$#,##0;$0"))';
  kpiCard_(sheet, 'A' + r, 3, 'NET REVENUE', netF, netSub, BRAND.FOREST);
  kpiCard_(sheet, 'D' + r, 3, 'UNITS SOLD', unitsF, unitsSub, BRAND.CANOPY);
  kpiCard_(sheet, 'G' + r, 3, 'MARKETING SPEND', spendF, spendSub, BRAND.GARNET);
  kpiCard_(sheet, 'J' + r, 3, 'NET AFTER SPEND', nasF, nasSub, BRAND.GOLD);
  sheet.getRange(r + 1, 1).setNumberFormat('$#,##0');
  sheet.getRange(r + 1, 4).setNumberFormat('#,##0');
  sheet.getRange(r + 1, 7).setNumberFormat('$#,##0');
  sheet.getRange(r + 1, 10).setNumberFormat('$#,##0');
  r += 4;

  // Top Products (left, A-H) + Portfolio Snapshot (right, I-L)
  sectionLabel_(sheet, 'A' + r, 'H' + r, 'TOP PRODUCTS');
  sheet.getRange('A' + r).setFormula(
    '="TOP PRODUCTS · "&UPPER(TEXT(IFERROR(DATEVALUE(INDEX(cc_engine_months,1,N4+1)&"-01"),INDEX(cc_engine_months,1,N4+1)),"mmm yyyy"))');
  sectionLabel_(sheet, 'I' + r, 'L' + r, 'PORTFOLIO SNAPSHOT');
  r += 1;
  sheet.getRange(r, 1, 1, 5).setValues([['Product', 'Net', 'Units', 'Share', 'Status']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  var tsStart = r + 1;
  var TOP_N = 10;
  var matrixCol = 'INDEX(cc_engine_products,,cc_dashboard_month+1)';
  var monthCode = 'INDEX(cc_engine_months,1,cc_dashboard_month+1)';
  var prodNames = ENG + '!$A$' + ENGINE_ROWS.PRODUCT_FIRST + ':$A$' + ENGINE_PRODUCT_LAST;
  for (var t = 0; t < TOP_N; t++) {
    var rank = t + 1;
    var rr = tsStart + t;
    sheet.getRange(rr, 1).setFormula(
      '=IFERROR(IF(LARGE(' + matrixCol + ',' + rank + ')<=0,"",INDEX(' + prodNames + ',MATCH(LARGE(' + matrixCol + ',' + rank + '),' + matrixCol + ',0))),"")');
    sheet.getRange(rr, 2).setFormula('=IF($A' + rr + '="","",LARGE(' + matrixCol + ',' + rank + '))').setNumberFormat('$#,##0');
    sheet.getRange(rr, 3).setFormula(
      "=IF($A" + rr + "=\"\",\"\",SUMIFS('" + TABS.SALES + "'!$D:$D,'" + TABS.SALES + "'!$B:$B,$A" + rr + ",'" + TABS.SALES + "'!$I:$I," + monthCode + '))').setNumberFormat('#,##0');
    sheet.getRange(rr, 4).setFormula(
      '=IF($A' + rr + '="","",IFERROR(B' + rr + '/' + rowRef(ENGINE_ROWS.NET, 'cc_dashboard_month+1') + ',0))').setNumberFormat('0%');
    sheet.getRange(rr, 5).setFormula(
      "=IF($A" + rr + "=\"\",\"\",IFERROR(VLOOKUP($A" + rr + ",'" + TABS.PRODUCTS + "'!$B$" + PROD.FIRST_ROW + ':$C$' + PROD_LAST_ROW + ',2,FALSE),"—"))');
    sheet.getRange(rr, 6, 1, 2).merge();
    sheet.getRange(rr, 6).setFormula(
      '=IF($A' + rr + '="","",SPARKLINE(B' + rr + ',{"charttype","bar";"max",MAX(B$' + tsStart + ':B$' + (tsStart + TOP_N - 1) + ');"color1","' + BRAND.FOREST + '"}))');
    if (t % 2 === 1) { var z = sheet.getRange(rr, 1, 1, 5).getA1Notation(); sheet.getRange(z).setBackground(PALETTE_BY_ID.light.zebra); themable_(sheet.getName(), 'zebra', z); }
  }

  // Snapshot — counts and callouts over Products + engine.
  var statusRange = "'" + TABS.PRODUCTS + "'!$C$" + PROD.FIRST_ROW + ':$C$' + PROD_LAST_ROW;
  var staleL = columnToLetter_(PROD.COL_STALE);
  var staleRange = "'" + TABS.PRODUCTS + "'!$" + staleL + '$' + PROD.FIRST_ROW + ':$' + staleL + '$' + PROD_LAST_ROW;
  var nameRange = "'" + TABS.PRODUCTS + "'!$B$" + PROD.FIRST_ROW + ':$B$' + PROD_LAST_ROW;
  var snap = [
    ['Listed Products', '=COUNTIF(' + statusRange + ',"Listed")', '#,##0'],
    ['In Pipeline', '=COUNTIF(' + statusRange + ',"Idea")+COUNTIF(' + statusRange + ',"Building")+COUNTIF(' + statusRange + ',"QA")+COUNTIF(' + statusRange + ',"Assets")+COUNTIF(' + statusRange + ',"Listing")', '#,##0'],
    ['Net This Month', '=IFERROR(' + rowRef(ENGINE_ROWS.NET, 'cc_dashboard_month+1') + ',0)', '$#,##0'],
    ['Best Seller', '=IFERROR(IF(LARGE(' + matrixCol + ',1)<=0,"—",INDEX(' + prodNames + ',MATCH(LARGE(' + matrixCol + ',1),' + matrixCol + ',0))),"—")', '@'],
    ['Stalest Listed', '=IFERROR(INDEX(' + nameRange + ',MATCH(MAX(' + staleRange + '),' + staleRange + ',0))&" · "&MAX(' + staleRange + ')&" d","—")', '@'],
    ['Sales Rows', '=IFERROR(' + rowRef(ENGINE_ROWS.SALES_ROWS, 'cc_dashboard_month+1') + ',0)', '#,##0']
  ];
  for (var sI = 0; sI < snap.length; sI++) {
    var sr = tsStart + sI;
    setCell_(sheet, sheet.getRange(sr, 9).getA1Notation(), { value: snap[sI][0], merge: sheet.getRange(sr, 10).getA1Notation(), font: FONT.BODY, size: 11, color: BRAND.BODY });
    var vcell = sheet.getRange(sr, 11, 1, 2).merge();
    vcell.setFormula(snap[sI][1]).setNumberFormat(snap[sI][2])
      .setFontFamily(FONT.BODY).setFontWeight('bold').setFontColor(BRAND.FOREST).setHorizontalAlignment('right');
  }
  r = tsStart + TOP_N + 1;

  // Needs Attention (left) + AI Insights (right)
  sectionLabel_(sheet, 'A' + r, 'F' + r, 'NEEDS ATTENTION · PIPELINE');
  sectionLabel_(sheet, 'G' + r, 'L' + r, 'AI INSIGHTS');
  r += 1;
  var rankL = columnToLetter_(PROD.COL_RANK_HELPER);
  var rankRange = "'" + TABS.PRODUCTS + "'!$" + rankL + '$' + PROD.FIRST_ROW + ':$' + rankL + '$' + PROD_LAST_ROW;
  var nextL = columnToLetter_(PROD.COL_NEXT);
  var nextRange = "'" + TABS.PRODUCTS + "'!$" + nextL + '$' + PROD.FIRST_ROW + ':$' + nextL + '$' + PROD_LAST_ROW;
  var naStart = r;
  for (var na = 0; na < 5; na++) {
    var nr = naStart + na;
    // lowest progress first — SMALL over the hidden ranking helper
    sheet.getRange(nr, 1, 1, 2).merge();
    sheet.getRange(nr, 1).setFormula(
      '=IFERROR(INDEX(' + nameRange + ',MATCH(SMALL(' + rankRange + ',' + (na + 1) + '),' + rankRange + ',0)),"")');
    sheet.getRange(nr, 3).setFormula(
      '=IF($A' + nr + '="","",IFERROR(VLOOKUP($A' + nr + ",'" + TABS.PRODUCTS + "'!$B$" + PROD.FIRST_ROW + ':$C$' + PROD_LAST_ROW + ',2,FALSE),""))');
    sheet.getRange(nr, 4, 1, 3).merge();
    sheet.getRange(nr, 4).setFormula(
      '=IF($A' + nr + '="","",IFERROR(INDEX(' + nextRange + ',MATCH(SMALL(' + rankRange + ',' + (na + 1) + '),' + rankRange + ',0)),""))');
  }
  // AI insights — Forest-on-cream, mock-gated.
  var insights = (mode === 'mock') ? MOCK.ai_insights : [
    ['ASK', 'Attach this sheet to Claude or ChatGPT and ask which products to scale, watch, or retire. The hidden _Schema tab does the explaining.'],
    ['PASTE', 'Drop the best findings here so they stare back at you all month.'],
    ['START', 'Add a product and log a sale first — insights need data to find.']
  ];
  for (var a = 0; a < insights.length; a++) {
    var ar = naStart + a * 2;
    setCell_(sheet, sheet.getRange(ar, 7).getA1Notation(), { value: insights[a][0], merge: sheet.getRange(ar, 12).getA1Notation(),
      font: FONT.BODY, size: 10, bold: true, color: BRAND.GOLD, bg: BRAND.FOREST, h: 'left', v: 'middle' });
    themable_(sheet.getName(), 'primary', sheet.getRange(ar, 7, 1, 6).getA1Notation());
    setCell_(sheet, sheet.getRange(ar + 1, 7).getA1Notation(), { value: insights[a][1], merge: sheet.getRange(ar + 1, 12).getA1Notation(),
      font: FONT.BODY, size: 12, color: BRAND.PARCHMENT, bg: BRAND.FOREST, wrap: true, v: 'top' });
    themable_(sheet.getName(), 'primary', sheet.getRange(ar + 1, 7, 1, 6).getA1Notation());
    sheet.setRowHeight(ar + 1, 34);
  }

  r = naStart + 7;
  footer_(sheet, r, 'L');
  setColWidths_(sheet, [150, 80, 70, 70, 80, 60, 60, 60, 110, 90, 80, 80]);
}

// ── Pipeline — computed PM board, read-only ───────────────────────────
function buildPipeline_(sheet, mode) {
  chrome_(sheet, TABS.PIPELINE, 'L');
  var r = titleRow_(sheet, 'L', 'Pipeline',
    "Every product's path to listed. Computed from the Products checklist — nothing to type here.");

  // Stage bar — 7 count boxes
  sectionLabel_(sheet, 'A' + r, 'L' + r, 'CATALOG BY STAGE');
  r += 1;
  var statusRange = "'" + TABS.PRODUCTS + "'!$C$" + PROD.FIRST_ROW + ':$C$' + PROD_LAST_ROW;
  for (var st = 0; st < PRODUCT_STATUSES.length; st++) {
    var c0 = 1 + st;
    setCell_(sheet, sheet.getRange(r, c0).getA1Notation(), {
      formula: '=COUNTIF(' + statusRange + ',"' + PRODUCT_STATUSES[st] + '")',
      font: FONT.DISPLAY, size: 22, bold: true, color: BRAND.PARCHMENT, bg: BRAND.FOREST, h: 'center', v: 'middle' });
    themable_(sheet.getName(), 'primary', sheet.getRange(r, c0).getA1Notation());
    setCell_(sheet, sheet.getRange(r + 1, c0).getA1Notation(), {
      value: PRODUCT_STATUSES[st].toUpperCase(), font: FONT.BODY, size: 8, bold: true,
      color: BRAND.CAPTION, h: 'center' });
  }
  sheet.setRowHeight(r, 36);
  r += 3;

  // In Flight — 15 rows ranked by progress descending.
  sectionLabel_(sheet, 'A' + r, 'L' + r, 'IN FLIGHT · RANKED BY PROGRESS');
  r += 1;
  sheet.getRange(r, 1, 1, 6).setValues([['Product', '', 'Status', 'Progress', 'Next step', 'Target']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  r += 1;
  var rankL = columnToLetter_(PROD.COL_RANK_HELPER);
  var rankRange = "'" + TABS.PRODUCTS + "'!$" + rankL + '$' + PROD.FIRST_ROW + ':$' + rankL + '$' + PROD_LAST_ROW;
  var nameRange = "'" + TABS.PRODUCTS + "'!$B$" + PROD.FIRST_ROW + ':$B$' + PROD_LAST_ROW;
  var nextL = columnToLetter_(PROD.COL_NEXT);
  var nextRange = "'" + TABS.PRODUCTS + "'!$" + nextL + '$' + PROD.FIRST_ROW + ':$' + nextL + '$' + PROD_LAST_ROW;
  var progLtr = columnToLetter_(PROD.COL_PROGRESS);
  var progRange = "'" + TABS.PRODUCTS + "'!$" + progLtr + '$' + PROD.FIRST_ROW + ':$' + progLtr + '$' + PROD_LAST_ROW;
  var daysL = columnToLetter_(PROD.COL_DAYS);
  var daysRange = "'" + TABS.PRODUCTS + "'!$" + daysL + '$' + PROD.FIRST_ROW + ':$' + daysL + '$' + PROD_LAST_ROW;
  var IN_FLIGHT = 15;
  var ifStart = r;
  for (var f = 0; f < IN_FLIGHT; f++) {
    var fr = ifStart + f;
    var matchExpr = 'MATCH(LARGE(' + rankRange + ',' + (f + 1) + '),' + rankRange + ',0)';
    sheet.getRange(fr, 1, 1, 2).merge();
    sheet.getRange(fr, 1).setFormula('=IFERROR(INDEX(' + nameRange + ',' + matchExpr + '),"")');
    sheet.getRange(fr, 3).setFormula('=IF($A' + fr + '="","",IFERROR(INDEX(' + statusRange + ',' + matchExpr + '),""))');
    sheet.getRange(fr, 4).setFormula('=IF($A' + fr + '="","",IFERROR(INDEX(' + progRange + ',' + matchExpr + '),""))').setNumberFormat('0%');
    sheet.getRange(fr, 5).setFormula('=IF($A' + fr + '="","",IFERROR(INDEX(' + nextRange + ',' + matchExpr + '),""))');
    sheet.getRange(fr, 6).setFormula('=IF($A' + fr + '="","",IFERROR(INDEX(' + daysRange + ',' + matchExpr + '),"—"))').setNumberFormat('0" d"');
    sheet.getRange(fr, 7, 1, 3).merge();
    sheet.getRange(fr, 7).setFormula(
      '=IF($A' + fr + '="","",SPARKLINE(N(D' + fr + '),{"charttype","bar";"max",1;"color1","' + BRAND.FOREST + '"}))');
    if (f % 2 === 1) { var z = sheet.getRange(fr, 1, 1, 9).getA1Notation(); sheet.getRange(z).setBackground(PALETTE_BY_ID.light.zebra); themable_(sheet.getName(), 'zebra', z); }
  }
  r = ifStart + IN_FLIGHT + 1;

  // Recently Listed — 5 rows by launched date.
  sectionLabel_(sheet, 'A' + r, 'L' + r, 'RECENTLY LISTED');
  r += 1;
  sheet.getRange(r, 1, 1, 4).setValues([['Product', '', 'Listed on', 'Week-one net']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  r += 1;
  var listedL = columnToLetter_(PROD.COL_LISTED_HELPER);
  var listedRange = "'" + TABS.PRODUCTS + "'!$" + listedL + '$' + PROD.FIRST_ROW + ':$' + listedL + '$' + PROD_LAST_ROW;
  var launchedRange = "'" + TABS.PRODUCTS + "'!$G$" + PROD.FIRST_ROW + ':$G$' + PROD_LAST_ROW;
  var rlStart = r;
  for (var rl = 0; rl < 5; rl++) {
    var rr2 = rlStart + rl;
    var mExpr = 'MATCH(LARGE(' + listedRange + ',' + (rl + 1) + '),' + listedRange + ',0)';
    sheet.getRange(rr2, 1, 1, 2).merge();
    sheet.getRange(rr2, 1).setFormula('=IFERROR(INDEX(' + nameRange + ',' + mExpr + '),"")');
    sheet.getRange(rr2, 3).setFormula('=IF($A' + rr2 + '="","",TEXT(IFERROR(INDEX(' + launchedRange + ',' + mExpr + '),""),"mmm d, yyyy"))');
    sheet.getRange(rr2, 4).setFormula(
      "=IF($A" + rr2 + "=\"\",\"\",IFERROR(SUMIFS('" + TABS.SALES + "'!$G:$G,'" + TABS.SALES + "'!$B:$B,$A" + rr2 + ",'" + TABS.SALES + "'!$A:$A,\">=\"&INDEX(" + launchedRange + ',' + mExpr + "),'" + TABS.SALES + "'!$A:$A,\"<\"&INDEX(" + launchedRange + ',' + mExpr + ')+7),0))').setNumberFormat('$#,##0');
  }
  r = rlStart + 5 + 1;
  setCell_(sheet, 'A' + r, {
    value: 'Stage counts, rankings, and next actions all derive from the Products checklist. To change anything here, tick a box there.',
    merge: 'L' + r, font: FONT.BODY, size: 11, italic: true, color: BRAND.CAPTION });
  footer_(sheet, r + 2, 'L');
  setColWidths_(sheet, [150, 95, 80, 80, 180, 70, 70, 70, 70, 80, 80, 80]);
}

// ── Product View — one product, every angle, computed on demand ───────
var PV = { SELECTOR_CELL: 'C10', TREND_HELPER_ROW: 60 };

function buildProductView_(sheet, mode) {
  chrome_(sheet, TABS.PRODUCT_VIEW, 'L');
  var r = titleRow_(sheet, 'L', 'Product View',
    'One product, every angle. Pick from the dropdown — works the same at eight products or eight hundred.');

  // Selector (named cc_selected_product)
  setCell_(sheet, 'A' + r, { value: 'Product', font: FONT.BODY, size: 11, bold: true, color: BRAND.BODY, v: 'middle' });
  var sel = sheet.getRange(PV.SELECTOR_CELL + ':E10').merge();
  sel.setBackground(BRAND.YELLOW)
    .setBorder(true, true, true, true, false, false, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID)
    .setFontFamily(FONT.BODY).setFontSize(12).setHorizontalAlignment('center');
  var ss = SpreadsheetApp.getActive();
  var prodRule = SpreadsheetApp.newDataValidation()
    .requireValueInRange(ss.getRangeByName('cc_products_list') ||
      ss.getRange("'" + TABS.PRODUCTS + "'!B" + PROD.FIRST_ROW + ':B' + PROD_LAST_ROW), true)
    .setAllowInvalid(true).build();
  sheet.getRange(PV.SELECTOR_CELL).setDataValidation(prodRule);
  if (mode === 'mock') sheet.getRange(PV.SELECTOR_CELL).setValue('Wedding Suite No. 4');
  r += 2;

  var SEL = 'cc_selected_product';
  var sales = "'" + TABS.SALES + "'";
  var mkt = "'" + TABS.MARKETING + "'";
  var statsTab = "'" + TABS.STATS + "'";
  var monthCode = 'INDEX(cc_engine_months,1,cc_dashboard_month+1)';

  // KPI row
  var kNet = '=IF(' + SEL + '="",0,SUMIFS(' + sales + '!$G:$G,' + sales + '!$B:$B,' + SEL + ',' + sales + '!$I:$I,' + monthCode + '))';
  var kLife = '=IF(' + SEL + '="",0,SUMIFS(' + sales + '!$G:$G,' + sales + '!$B:$B,' + SEL + '))';
  var kUnits = '=IF(' + SEL + '="",0,SUMIFS(' + sales + '!$D:$D,' + sales + '!$B:$B,' + SEL + '))';
  var kLast = '=IF(' + SEL + '="","—",IFERROR(TEXT(MAXIFS(' + sales + '!$A:$A,' + sales + '!$B:$B,' + SEL + '),"mmm d"),"—"))';
  kpiCard_(sheet, 'A' + r, 3, 'NET · ACTIVE MONTH', kNet, 'follows the Dashboard month', BRAND.FOREST);
  kpiCard_(sheet, 'D' + r, 3, 'NET · LIFETIME', kLife, 'after channel fees', BRAND.FOREST);
  kpiCard_(sheet, 'G' + r, 3, 'UNITS · LIFETIME', kUnits, 'across all channels', BRAND.CANOPY);
  kpiCard_(sheet, 'J' + r, 3, 'LAST SALE', kLast, 'staleness alarm at 60 days', BRAND.GOLD);
  sheet.getRange(r + 1, 1).setNumberFormat('$#,##0');
  sheet.getRange(r + 1, 4).setNumberFormat('$#,##0');
  sheet.getRange(r + 1, 7).setNumberFormat('#,##0');
  r += 4;

  // Trend — hidden helper row of 12 monthly nets + sparkline + readout.
  sectionLabel_(sheet, 'A' + r, 'F' + r, 'NET REVENUE · TRAILING 12 MONTHS');
  sectionLabel_(sheet, 'G' + r, 'L' + r, 'CHANNEL SPLIT · LIFETIME');
  r += 1;
  for (var j = 0; j < 12; j++) {
    var engCol = 13 + j;   // engine cols 13..24 = trailing 12 months
    sheet.getRange(PV.TREND_HELPER_ROW, 2 + j).setFormula(
      '=IF(' + SEL + '="",0,SUMIFS(' + sales + '!$G:$G,' + sales + '!$B:$B,' + SEL + ',' + sales + '!$I:$I,INDEX(cc_engine_months,1,' + engCol + ')))');
  }
  sheet.getRange(PV.TREND_HELPER_ROW, 1).setValue('trend helper (hidden)').setFontColor(BRAND.CAPTION).setFontSize(8);
  var trendRange = 'B' + PV.TREND_HELPER_ROW + ':M' + PV.TREND_HELPER_ROW;
  sheet.getRange(r, 1, 1, 4).merge();
  sheet.getRange(r, 1).setFormula(
    '=IF(SUM(' + trendRange + ')=0,"",SPARKLINE(' + trendRange + ',{"charttype","column";"color","' + BRAND.FOREST + '"}))');
  sheet.getRange(r, 5).setFormula('=INDEX(' + trendRange + ',1,12)')
    .setNumberFormat('$#,##0').setFontFamily(FONT.DISPLAY).setFontSize(16).setFontWeight('bold').setFontColor(BRAND.FOREST);
  sheet.getRange(r, 6).setValue('this month').setFontColor(BRAND.CAPTION).setFontSize(10).setFontFamily(FONT.BODY);
  sheet.setRowHeight(r, 44);

  // Channel split — 12 registry slots, on-demand SUMIFS.
  var csStart = r;
  sheet.getRange(csStart, 7, 1, 6).setValues([['Channel', '', 'Units', 'Gross', 'Fees', 'Net']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  for (var ch = 0; ch < CHANNEL_SLOTS; ch++) {
    var cr = csStart + 1 + ch;
    var chCell = "'" + TABS.CHANNELS + "'!$A$" + (CHAN.FIRST_ROW + ch);
    sheet.getRange(cr, 7, 1, 2).merge();
    sheet.getRange(cr, 7).setFormula('=IF(' + chCell + '="","",' + chCell + ')');
    sheet.getRange(cr, 9).setFormula('=IF($G' + cr + '="","",SUMIFS(' + sales + '!$D:$D,' + sales + '!$B:$B,' + SEL + ',' + sales + '!$C:$C,$G' + cr + '))').setNumberFormat('#,##0');
    sheet.getRange(cr, 10).setFormula('=IF($G' + cr + '="","",SUMIFS(' + sales + '!$E:$E,' + sales + '!$B:$B,' + SEL + ',' + sales + '!$C:$C,$G' + cr + '))').setNumberFormat('$#,##0');
    sheet.getRange(cr, 12).setFormula('=IF($G' + cr + '="","",SUMIFS(' + sales + '!$G:$G,' + sales + '!$B:$B,' + SEL + ',' + sales + '!$C:$C,$G' + cr + '))').setNumberFormat('$#,##0');
    sheet.getRange(cr, 11).setFormula('=IF($G' + cr + '="","",N(J' + cr + ')-N(L' + cr + '))').setNumberFormat('$#,##0');
  }
  r = csStart + CHANNEL_SLOTS + 2;

  // Marketing vs net (Forest strip) + checklist readout
  sheet.getRange(r, 1, 3, 6).setBackground(BRAND.FOREST);
  themable_(sheet.getName(), 'primary', sheet.getRange(r, 1, 3, 6).getA1Notation());
  setCell_(sheet, 'A' + r, { value: 'MARKETING vs NET', merge: 'F' + r, font: FONT.BODY, size: 9.5, bold: true, color: BRAND.GOLD, bg: BRAND.FOREST });
  var spendLife = 'SUMIFS(' + mkt + '!$E:$E,' + mkt + '!$B:$B,' + SEL + ')';
  setCell_(sheet, 'A' + (r + 1), { formula: '=IF(' + SEL + '="",0,' + spendLife + ')', merge: 'B' + (r + 1),
    font: FONT.DISPLAY, size: 20, bold: true, color: BRAND.PARCHMENT, bg: BRAND.FOREST, format: '$#,##0' });
  setCell_(sheet, 'A' + (r + 2), { value: 'spend lifetime', merge: 'B' + (r + 2), font: FONT.BODY, size: 9, color: BRAND.PARCHMENT_60, bg: BRAND.FOREST });
  setCell_(sheet, 'C' + (r + 1), { formula: '=IF(OR(' + SEL + '="",' + spendLife + '=0),"—",TEXT(' + kLife.substring(1) + '/' + spendLife + ',"0.0")&"×")', merge: 'D' + (r + 1),
    font: FONT.DISPLAY, size: 20, bold: true, color: BRAND.PARCHMENT, bg: BRAND.FOREST });
  setCell_(sheet, 'C' + (r + 2), { value: 'net per ad dollar', merge: 'D' + (r + 2), font: FONT.BODY, size: 9, color: BRAND.PARCHMENT_60, bg: BRAND.FOREST });
  var verdict = sheet.getRange(r + 1, 5, 1, 2).merge();
  verdict.setFormula(
    '=IF(OR(' + SEL + '="",' + spendLife + '=0),"—",IF(' + kLife.substring(1) + '>=3*' + spendLife + ',"On Track",IF(' + kLife.substring(1) + '>=' + spendLife + ',"Fair","Over")))');
  statusChipCF_(sheet, verdict.getA1Notation());

  // Checklist readout
  sectionLabel_(sheet, 'H' + r, 'L' + r, 'CHECKLIST POSITION');
  var vlookTable = "'" + TABS.PRODUCTS + "'!$B$" + PROD.FIRST_ROW + ':$' + columnToLetter_(PROD.COL_NEXT) + '$' + PROD_LAST_ROW;
  var progOffset = PROD.COL_PROGRESS - PROD.COL_NAME + 1;   // VLOOKUP index for Progress
  var nextOffset = PROD.COL_NEXT - PROD.COL_NAME + 1;
  setCell_(sheet, 'H' + (r + 1), { formula: '=IF(' + SEL + '="","—",IFERROR(VLOOKUP(' + SEL + ',' + vlookTable + ',2,FALSE),"—"))',
    merge: 'I' + (r + 1), font: FONT.BODY, size: 12, bold: true, color: BRAND.FOREST });
  setCell_(sheet, 'J' + (r + 1), { formula: '=IF(' + SEL + '="","",IFERROR(VLOOKUP(' + SEL + ',' + vlookTable + ',' + progOffset + ',FALSE),""))',
    font: FONT.DISPLAY, size: 16, bold: true, color: BRAND.FOREST, format: '0%' });
  setCell_(sheet, 'K' + (r + 1), { formula: '=IF(' + SEL + '="","",IFERROR("next: "&VLOOKUP(' + SEL + ',' + vlookTable + ',' + nextOffset + ',FALSE),""))',
    merge: 'L' + (r + 1), font: FONT.BODY, size: 10.5, color: BRAND.BODY, wrap: true });
  r += 4;

  // Funnel — trailing 3 engine months from the Stats log.
  sectionLabel_(sheet, 'A' + r, 'F' + r, 'FUNNEL · FROM YOUR STATS LOG');
  r += 1;
  sheet.getRange(r, 1, 1, 6).setValues([['Month', 'Views', 'Favorites', 'Orders', 'Conv', 'Net / 100 views']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  r += 1;
  for (var fm = 0; fm < 3; fm++) {
    var engIdx = 22 + fm;   // engine months 22..24 (trailing 3)
    var mc = 'INDEX(cc_engine_months,1,' + engIdx + ')';
    var fr2 = r + fm;
    sheet.getRange(fr2, 1).setFormula('=' + mc).setNumberFormat('@');
    sheet.getRange(fr2, 2).setFormula('=IF(' + SEL + '="","",SUMIFS(' + statsTab + '!$C:$C,' + statsTab + '!$B:$B,' + SEL + ',' + statsTab + '!$A:$A,' + mc + '))').setNumberFormat('#,##0');
    sheet.getRange(fr2, 3).setFormula('=IF(' + SEL + '="","",SUMIFS(' + statsTab + '!$D:$D,' + statsTab + '!$B:$B,' + SEL + ',' + statsTab + '!$A:$A,' + mc + '))').setNumberFormat('#,##0');
    sheet.getRange(fr2, 4).setFormula('=IF(' + SEL + '="","",SUMIFS(' + statsTab + '!$E:$E,' + statsTab + '!$B:$B,' + SEL + ',' + statsTab + '!$A:$A,' + mc + '))').setNumberFormat('#,##0');
    sheet.getRange(fr2, 5).setFormula('=IF(OR($A' + fr2 + '="",N(B' + fr2 + ')=0),"—",N(D' + fr2 + ')/N(B' + fr2 + '))').setNumberFormat('0.0%');
    sheet.getRange(fr2, 6).setFormula('=IF(OR($A' + fr2 + '="",N(B' + fr2 + ')=0),"—",ROUND(SUMIFS(' + sales + '!$G:$G,' + sales + '!$B:$B,' + SEL + ',' + sales + '!$I:$I,$A' + fr2 + ')/N(B' + fr2 + ')*100,2))').setNumberFormat('$#,##0.00');
  }
  r += 4;
  setCell_(sheet, 'A' + r, {
    value: 'Cash basis from your Sales Log; stats are what you logged. Everything on this tab computes for the selected product only — nothing slows down as the catalog grows.',
    merge: 'L' + r, font: FONT.BODY, size: 11, italic: true, color: BRAND.CAPTION, wrap: true });

  footer_(sheet, r + 2, 'L');
  sheet.hideRows(PV.TREND_HELPER_ROW - 1, 3);
  setColWidths_(sheet, [95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95]);
}

// ── Trends ────────────────────────────────────────────────────────────
function buildTrends_(sheet, mode) {
  chrome_(sheet, TABS.TRENDS, 'L');
  var r = titleRow_(sheet, 'L', 'Trends',
    'Six months in, twenty-four months out. Where the catalog is heading.');

  sheet.getRange('N7').setValue(6);
  sheet.getRange('N6').setValue('window (6/12/24)').setFontColor(BRAND.CAPTION).setFontSize(8);
  var wins = [6, 12, 24];
  for (var i = 0; i < 3; i++) {
    setCell_(sheet, sheet.getRange(r, 10 + i).getA1Notation(), { value: wins[i] + ' mo',
      font: FONT.BODY, size: 11, bold: true, h: 'center', v: 'middle',
      bg: BRAND.FOREST, color: BRAND.PARCHMENT });
    themable_(sheet.getName(), 'primary', sheet.getRange(r, 10 + i).getA1Notation());
  }
  var winRange = sheet.getRange(r, 10, 1, 3);
  var winInactive = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied('=' + sheet.getRange(r, 10).getA1Notation() + '<>$N$7&" mo"')
    .setBackground(BRAND.CREAM).setFontColor(BRAND.BODY).setBold(true)
    .setRanges([winRange]).build();
  sheet.setConditionalFormatRules(sheet.getConditionalFormatRules().concat([winInactive]));

  var avg = function (row) {
    return '=AVERAGE(INDEX(' + ENG + '!$B$' + row + ':$Y$' + row + ',1,24-N7+1):INDEX(' + ENG + '!$B$' + row + ':$Y$' + row + ',1,24))';
  };
  kpiCard_(sheet, 'A' + r, 3, 'AVG NET REVENUE', avg(ENGINE_ROWS.NET), 'over selected window', BRAND.FOREST);
  kpiCard_(sheet, 'D' + r, 3, 'AVG MARKETING SPEND', avg(ENGINE_ROWS.SPEND), 'over selected window', BRAND.GARNET);
  kpiCard_(sheet, 'G' + r, 3, 'AVG NET AFTER SPEND', avg(ENGINE_ROWS.NET_AFTER), 'over selected window', BRAND.GOLD);
  sheet.getRange(r + 1, 1).setNumberFormat('$#,##0');
  sheet.getRange(r + 1, 4).setNumberFormat('$#,##0');
  sheet.getRange(r + 1, 7).setNumberFormat('$#,##0');
  r += 4;

  sectionLabel_(sheet, 'A' + r, 'L' + r, 'NET REVENUE vs MARKETING SPEND · LAST 6 MONTHS');
  r += 1;
  buildTrendsChart_(sheet, r);
  r += 12;

  // Top products sparkline table — 12 rows ranked by the active month.
  sectionLabel_(sheet, 'A' + r, 'L' + r, "TOP PRODUCTS · BY THIS MONTH'S NET · LAST 6 MONTHS");
  r += 1;
  sheet.getRange(r, 1, 1, 5).setValues([['Product', '', 'Sparkline (6 mo)', 'Last Month', 'Δ vs first']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  var start = r + 1;
  var matrixCol = 'INDEX(cc_engine_products,,cc_dashboard_month+1)';
  var prodNames = ENG + '!$A$' + ENGINE_ROWS.PRODUCT_FIRST + ':$A$' + ENGINE_PRODUCT_LAST;
  var matrixT = ENG + '!$T$' + ENGINE_ROWS.PRODUCT_FIRST + ':$Y$' + ENGINE_PRODUCT_LAST;
  for (var c = 0; c < 12; c++) {
    var rr = start + c;
    sheet.getRange(rr, 1, 1, 2).merge();
    sheet.getRange(rr, 1).setFormula(
      '=IFERROR(IF(LARGE(' + matrixCol + ',' + (c + 1) + ')<=0,"",INDEX(' + prodNames + ',MATCH(LARGE(' + matrixCol + ',' + (c + 1) + '),' + matrixCol + ',0))),"")');
    sheet.getRange(rr, 3, 1, 1).setFormula(
      '=IF($A' + rr + '="","",SPARKLINE(INDEX(' + matrixT + ',MATCH($A' + rr + ',' + prodNames + ',0),0),{"charttype","line";"color","' + BRAND.FOREST + '";"linewidth",2}))');
    sheet.getRange(rr, 4).setFormula(
      '=IF($A' + rr + '="","",INDEX(' + ENG + '!$Y$' + ENGINE_ROWS.PRODUCT_FIRST + ':$Y$' + ENGINE_PRODUCT_LAST + ',MATCH($A' + rr + ',' + prodNames + ',0)))').setNumberFormat('$#,##0');
    sheet.getRange(rr, 5).setFormula(
      '=IF($A' + rr + '="","",IFERROR(INDEX(' + ENG + '!$Y$' + ENGINE_ROWS.PRODUCT_FIRST + ':$Y$' + ENGINE_PRODUCT_LAST + ',MATCH($A' + rr + ',' + prodNames + ',0))-INDEX(' + ENG + '!$T$' + ENGINE_ROWS.PRODUCT_FIRST + ':$T$' + ENGINE_PRODUCT_LAST + ',MATCH($A' + rr + ',' + prodNames + ',0)),0))').setNumberFormat('+$#,##0;−$#,##0');
    if (c % 2 === 1) { var z = sheet.getRange(rr, 1, 1, 5).getA1Notation(); sheet.getRange(z).setBackground(PALETTE_BY_ID.light.zebra); themable_(sheet.getName(), 'zebra', z); }
  }
  footer_(sheet, start + 12 + 2, 'L');
  setColWidths_(sheet, [150, 95, 180, 90, 90, 60, 60, 60, 60, 70, 70, 70]);
}

function buildTrendsChart_(sheet, atRow) {
  sheet.getRange(atRow, 16, 1, 3).setValues([['Month', 'Net Revenue', 'Marketing Spend']]);
  for (var i = 0; i < 6; i++) {
    var rr = atRow + 1 + i;
    var engineCol = 19 + i;
    var monthCell = 'INDEX(' + ENG + '!$B$1:$Y$1,1,' + engineCol + ')';
    sheet.getRange(rr, 16).setFormula(
      '=TEXT(IFERROR(DATEVALUE(' + monthCell + '&"-01"),' + monthCell + '),"mmm yyyy")');
    sheet.getRange(rr, 17).setFormula('=INDEX(' + ENG + '!$B$' + ENGINE_ROWS.NET + ':$Y$' + ENGINE_ROWS.NET + ',1,' + engineCol + ')');
    sheet.getRange(rr, 18).setFormula('=INDEX(' + ENG + '!$B$' + ENGINE_ROWS.SPEND + ':$Y$' + ENGINE_ROWS.SPEND + ',1,' + engineCol + ')');
  }
  var range = sheet.getRange(atRow, 16, 7, 3);
  var chart = sheet.newChart().asColumnChart()
    .addRange(range).setPosition(atRow, 1, 0, 0)
    .setOption('colors', [BRAND.FOREST, BRAND.GARNET])
    .setOption('legend', { position: 'top' })
    .setOption('width', 720).setOption('height', 220)
    .build();
  sheet.insertChart(chart);
}
/**
 * Column & Co. — The Workbench v1.0
 * 10 · Menu + triggers (onOpen / onEdit / onSelectionChange).
 */

function onOpen() {
  buildMenu_();
  hideSystemTabs_();
  try {
    var lastCode = lastEngineMonthCode_();
    var todayCode = monthCodeOfDate_(new Date());
    if (lastCode && todayCode > lastCode) rollEngineForward_(new Date());
  } catch (e) {}
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
  menu.addItem('Add Product…', 'addProduct');
  menu.addItem('Add Channel…', 'addChannel');
  menu.addSeparator();
  menu.addItem('Sort Sales by Date', 'sortSales');
  menu.addItem('Renumber Sales Log', 'renumberSalesLog');
  menu.addSeparator();
  menu.addSubMenu(buildThemeMenu_());
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
  var row = e.range.getRow();
  var col = e.range.getColumn();

  // Products: stamping the Launched date when Status flips to Listed.
  if (name === TABS.PRODUCTS && col === PROD.COL_STATUS &&
      row >= PROD.FIRST_ROW && row <= PROD_LAST_ROW) {
    if (String(e.range.getValue()) === 'Listed' &&
        !sheet.getRange(row, PROD.COL_LAUNCHED).getValue()) {
      sheet.getRange(row, PROD.COL_LAUNCHED).setValue(new Date());
    }
  }
}

function onSelectionChange(e) {
  if (!e || !e.range) return;
  var sheet = e.range.getSheet();
  var name = sheet.getName();

  // Dashboard month pills — row 9, cols F..K map to engine indices 18..23.
  if (name === TABS.DASHBOARD && e.range.getRow() === 9) {
    var col = e.range.getColumn();
    if (col >= 6 && col <= 11) {
      sheet.getRange('N4').setValue(18 + (col - 6));
    }
  }

  // Trends window pills — row 9, cols J/K/L set the 6/12/24 window.
  if (name === TABS.TRENDS && e.range.getRow() === 9) {
    var c = e.range.getColumn();
    if (c >= 10 && c <= 12) {
      sheet.getRange('N7').setValue([6, 12, 24][c - 10]);
    }
  }
}
/**
 * Column & Co. — The Workbench v1.0
 * 11 · Theme engine. applyTheme(id) repaints the content area using the
 * theme map recorded at build time. The 3-row brand chrome is never in
 * the map, so it stays locked in Forest / Canopy / Gold.
 */

function buildThemeMenu_() {
  var ui = SpreadsheetApp.getUi();
  var menu = ui.createMenu('Apply Theme');
  var active = PropertiesService.getDocumentProperties().getProperty('cc_active_palette') || DEFAULT_PALETTE;
  PALETTES.forEach(function (p) {
    var label = (p.id === active ? '✓ ' : '   ') + p.name;
    menu.addItem(label, '_applyTheme_' + sanitizeId_(p.id));
  });
  return menu;
}

function applyTheme(paletteId) {
  var pal = PALETTE_BY_ID[paletteId];
  if (!pal) throw new Error('Unknown palette: ' + paletteId);
  var ss = SpreadsheetApp.getActive();
  var raw = PropertiesService.getDocumentProperties().getProperty('cc_theme_map');
  var map = raw ? JSON.parse(raw) : {};

  Object.keys(map).forEach(function (sheetName) {
    var sh = ss.getSheetByName(sheetName);
    if (!sh) return;
    var roles = map[sheetName];
    paintRole_(sh, roles.bg, pal.bg);
    paintRole_(sh, roles.zebra, pal.zebra);
    paintRole_(sh, roles.section, pal.accentLight);
    paintRole_(sh, roles.primary, pal.primary);
    paintRole_(sh, roles.mid,     pal.mid);
    paintRole_(sh, roles.accent,  pal.accent);
  });

  PropertiesService.getDocumentProperties().setProperty('cc_active_palette', paletteId);
  var cfg = ss.getSheetByName(TABS.CONFIG);
  if (cfg) cfg.getRange('B40').setValue(paletteId);
  buildMenu_();
  ss.toast('Theme applied: ' + pal.name, CC.BRAND, 3);
}

function paintRole_(sheet, a1List, color) {
  if (!a1List) return;
  a1List.forEach(function (a1) {
    try { sheet.getRange(a1).setBackground(color); } catch (e) {}
  });
}

function sanitizeId_(id) { return id.replace(/[^a-z0-9]/gi, '_'); }

function _applyTheme_light()         { applyTheme('light'); }
function _applyTheme_warm_greige()   { applyTheme('warm-greige'); }
function _applyTheme_cool_slate()    { applyTheme('cool-slate'); }
function _applyTheme_sage()          { applyTheme('sage'); }
function _applyTheme_espresso()      { applyTheme('espresso'); }
function _applyTheme_maize_navy()    { applyTheme('maize-navy'); }
function _applyTheme_scarlet_gray()  { applyTheme('scarlet-gray'); }
function _applyTheme_orange_navy()   { applyTheme('orange-navy'); }
function _applyTheme_green_gold()    { applyTheme('green-gold'); }
function _applyTheme_purple_gold()   { applyTheme('purple-gold'); }
function _applyTheme_crimson_white() { applyTheme('crimson-white'); }
function _applyTheme_garnet_gold()   { applyTheme('garnet-gold'); }
function _applyTheme_forest_white()  { applyTheme('forest-white'); }
function _applyTheme_royal_gold()    { applyTheme('royal-gold'); }
function _applyTheme_silver_black()  { applyTheme('silver-black'); }
function _applyTheme_midnight()      { applyTheme('midnight'); }
function _applyTheme_burgundy()      { applyTheme('burgundy'); }
function _applyTheme_mocha()         { applyTheme('mocha'); }
function _applyTheme_indigo_blush()  { applyTheme('indigo-blush'); }
function _applyTheme_pine_brass()    { applyTheme('pine-brass'); }
function _applyTheme_ocean_coral()   { applyTheme('ocean-coral'); }
function _applyTheme_charcoal_mint() { applyTheme('charcoal-mint'); }
function _applyTheme_olive_cream()   { applyTheme('olive-cream'); }
function _applyTheme_custom()        { applyTheme('custom'); }
/**
 * Column & Co. — The Workbench v1.0
 * 12 · Catalog utilities (menu items).
 */

function addProduct() {
  var ui = SpreadsheetApp.getUi();
  var ss = SpreadsheetApp.getActive();
  var prods = ss.getSheetByName(TABS.PRODUCTS);
  if (!prods) { ui.alert('Products tab not found.'); return; }

  var resp = ui.prompt('Add Product',
    'Product name (e.g. "Wedding Suite No. 6"):', ui.ButtonSet.OK_CANCEL);
  if (resp.getSelectedButton() !== ui.Button.OK) return;
  var name = String(resp.getResponseText() || '').trim();
  if (!name) return;

  var range = ss.getRangeByName('cc_products_list') ||
    prods.getRange('B' + PROD.FIRST_ROW + ':B' + PROD_LAST_ROW);
  var vals = range.getValues();
  var target = -1;
  for (var i = 0; i < vals.length; i++) {
    if (!vals[i][0]) { target = range.getRow() + i; break; }
    if (String(vals[i][0]).trim().toLowerCase() === name.toLowerCase()) {
      ui.alert('"' + name + '" is already on the Products table.');
      return;
    }
  }
  if (target === -1) {
    ui.alert('Products table is full. Raise PRODUCT_CAPACITY in the script and rebuild.');
    return;
  }
  prods.getRange(target, PROD.COL_NAME).setValue(name);
  prods.getRange(target, PROD.COL_STATUS).setValue('Idea');
  prods.activate();
  prods.getRange(target, PROD.COL_STATUS).activate();
  ss.toast('Added "' + name + '" — set its status and start ticking →', CC.BRAND, 4);
}

function addChannel() {
  var ui = SpreadsheetApp.getUi();
  var ss = SpreadsheetApp.getActive();
  var ch = ss.getSheetByName(TABS.CHANNELS);
  if (!ch) { ui.alert('Channels tab not found.'); return; }

  var resp = ui.prompt('Add Channel',
    'Channel name (e.g. "Creative Market"):', ui.ButtonSet.OK_CANCEL);
  if (resp.getSelectedButton() !== ui.Button.OK) return;
  var name = String(resp.getResponseText() || '').trim();
  if (!name) return;

  var range = ss.getRangeByName('cc_channels_list') || ch.getRange('A10:A21');
  var vals = range.getValues();
  var target = -1;
  for (var i = 0; i < vals.length; i++) {
    if (!vals[i][0]) { target = range.getRow() + i; break; }
    if (String(vals[i][0]).trim().toLowerCase() === name.toLowerCase()) {
      ui.alert('"' + name + '" is already on the Channels tab.');
      return;
    }
  }
  if (target === -1) {
    ui.alert('Channels registry is full. Raise CHANNEL_SLOTS in the script and rebuild.');
    return;
  }
  ch.getRange(target, 1).setValue(name);
  ch.getRange(target, 2).setValue(0);
  ch.getRange(target, 3).setValue(0);
  ch.getRange(target, 4).setValue('Yes');
  ch.activate();
  ch.getRange(target, 2).activate();
  ss.toast('Added "' + name + '" — set its fee defaults →', CC.BRAND, 4);
}
/**
 * Column & Co. — The Workbench v1.0
 * 13 · Sales-log maintenance + help.
 */

function findSalesHeaderRow_(sh) {
  var finder = sh.getRange(1, 1, 12, 1).getValues();
  for (var i = 0; i < finder.length; i++) { if (finder[i][0] === 'Date') return i + 1; }
  return SALES.HEADER_ROW;
}

function findFirstEmptySalesRow_(sh) {
  var headerRow = findSalesHeaderRow_(sh);
  var colA = sh.getRange(headerRow + 1, 1, SALES_CAPACITY, 1).getValues();
  for (var r = 0; r < colA.length; r++) { if (!colA[r][0]) return headerRow + 1 + r; }
  return headerRow + 1;
}

// Reapply formats, validations, and the Net/Month formulas across the full
// capacity — safe anytime; overtyped Net cells are restored to the formula.
function renumberSalesLog() {
  var ss = SpreadsheetApp.getActive();
  var sh = ss.getSheetByName(TABS.SALES);
  if (!sh) return;
  var headerRow = findSalesHeaderRow_(sh);
  var firstData = headerRow + 1;

  sh.getRange(firstData, 1, SALES_CAPACITY, 1).setNumberFormat('mmm d, yyyy');
  sh.getRange(firstData, 4, SALES_CAPACITY, 1).setNumberFormat('#,##0');
  sh.getRange(firstData, 5, SALES_CAPACITY, 2).setNumberFormat('$#,##0.00');
  var prodRule = SpreadsheetApp.newDataValidation()
    .requireValueInRange(ss.getRangeByName('cc_products_list') ||
      ss.getRange("'" + TABS.PRODUCTS + "'!B" + PROD.FIRST_ROW + ':B' + PROD_LAST_ROW), true).build();
  var chRule = SpreadsheetApp.newDataValidation()
    .requireValueInRange(ss.getRangeByName('cc_channels_list') ||
      ss.getRange("'" + TABS.CHANNELS + "'!A10:A21"), true).build();
  sh.getRange(firstData, 7, SALES_CAPACITY, 1).setNumberFormat('$#,##0.00');
  forEachSlab_(firstData, SALES_CAPACITY, 2000, function (slabStart, slabRows) {
    sh.getRange(slabStart, 7, slabRows, 1).setFormulaR1C1(
      '=IF(RC1="","",IF(RC6<>"",RC5-RC6,ROUND(RC5-(RC5*IFERROR(VLOOKUP(RC3,cc_channel_fees,2,FALSE),0)+IFERROR(VLOOKUP(RC3,cc_channel_fees,3,FALSE),0)*IF(RC4="",1,RC4)),2)))');
    sh.getRange(slabStart, 9, slabRows, 1).setFormulaR1C1('=IF(RC1="","",TEXT(RC1,"yyyy-mm"))');
    sh.getRange(slabStart, 2, slabRows, 1).setDataValidation(prodRule);
    sh.getRange(slabStart, 3, slabRows, 1).setDataValidation(chRule);
  });
  ss.toast('Sales Log formats refreshed', CC.BRAND, 3);
}

// Sort by Date descending. Cols 1-8 only — col 9 (Month) is a row-relative
// formula that recomputes after the sort.
function sortSales() {
  var ss = SpreadsheetApp.getActive();
  var sh = ss.getSheetByName(TABS.SALES);
  if (!sh) return;
  var headerRow = findSalesHeaderRow_(sh);
  var firstEmpty = findFirstEmptySalesRow_(sh);
  var n = firstEmpty - 1 - headerRow;
  if (n <= 0) { ss.toast('Sales Log is empty.', CC.BRAND, 3); return; }
  sh.getRange(headerRow + 1, 1, n, 8).sort({ column: 1, ascending: false });
  ss.toast('Sorted ' + n + ' sale' + (n === 1 ? '' : 's') + ' by date (newest first).', CC.BRAND, 3);
}

function openHelpSidebar() {
  // One-file rule: the help content is inlined (no Help.html companion).
  var html = HtmlService.createHtmlOutput(
    '<div style="font-family:Roboto,Arial,sans-serif;font-size:13px;color:#1C3D2E;padding:8px 4px;line-height:1.5">' +
    '<h2 style="font-size:16px;margin:0 0 4px">The Workbench · Quick Reference</h2>' +
    '<p style="color:#4B5F54">A portfolio command deck you own. Six steps on Start Here get you running.</p>' +
    '<h3 style="font-size:13px;margin:14px 0 4px">The weekly five minutes</h3>' +
    '<p style="color:#4B5F54">Log a Sales Log row when money lands (leave Fees blank — Net computes from your Channels defaults). Tick Products checkboxes as launch steps finish. Once a month, add a Stats row per listed product if you want the funnel.</p>' +
    '<h3 style="font-size:13px;margin:14px 0 4px">Reading the deck</h3>' +
    '<p style="color:#4B5F54">Pipeline shows stage counts, in-flight progress, and the next action per product. Dashboard shows top products and net after marketing spend. Product View answers scale / watch / retire for any one product — pick it from the dropdown.</p>' +
    '<h3 style="font-size:13px;margin:14px 0 4px">Scaling up</h3>' +
    '<p style="color:#4B5F54">250 product slots, 10,000 sales rows out of the box. Need more? Raise the capacity constants at the top of the script and rerun Setup → Build workbook.</p>' +
    '<h3 style="font-size:13px;margin:14px 0 4px">Themes</h3>' +
    '<p style="color:#4B5F54">💳 Column &amp; Co. → Apply Theme swaps any of the 24 palettes. The Forest/Canopy/Gold letterhead stays put — that is the brand, not the theme.</p>' +
    '<p style="color:#8D9990;margin-top:18px">The Workbench v1.0 · columnandco.com</p>' +
    '</div>'
  ).setTitle('Column & Co. · Help');
  SpreadsheetApp.getUi().showSidebar(html);
}
