/**
 * Column & Co. — The Payoff v1.0
 * 00 · Constants — single source of truth for the whole build.
 *
 * A Google Sheets debt-payoff product. One bound .gs builds MOCK_DATA +
 * BLANK workbooks. The differentiator is the motivational layer: The
 * Temple (debts become columns), the Stylobate (savings buffer), The Hall
 * (trophy room), the strategy Race, the Time Machine, streaks. Brand
 * chrome / theme engine / helper sections are the Foundation/Ledger/
 * Workbench skeleton (same numbering). Engine + gamification are new.
 *
 * Source specs: design/design_handoff_the_payoff/ 01–05 (LOCKED 2026-06-13).
 */

// ── Product identity ──────────────────────────────────────────────────
var CC = {
  VERSION: 'v1.0',
  BRAND: 'Column & Co.',
  PRODUCT: 'The Payoff',
  TAGLINE: 'LIFE,  ORGANIZED.',
  FOOTER: 'The Payoff v1.0  ·  columnandco.com  ·  Do not distribute without license',
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
  GREEN_ZONE: '#EAF4E3'
};

var FONT = {
  DISPLAY: 'Lora',   // Playfair Display -> Lora (closest native serif)
  BODY: 'Roboto'     // Jost -> Roboto
};

// ── The monument material set — FIXED stone-and-gold (05 § color rule) ──
// The 24 palettes theme chrome / KPIs / tables only. The temple, wall,
// Hall, and stylobate do NOT recolor: a curated stone/parchment set, a
// fixed five-step on-brand DEBT RAMP (deepest forest → pale sage, one
// color per debt slot, cycled past five), and GOLD reserved everywhere
// for achievement / motion. These are constants, NOT palette-derived.
var DEBT_RAMP = ['#93B27E', '#6E9560', '#3E7E5C', '#2D5C45', '#1C3D2E'];
var STONE = {
  BEAM: '#D8D0BE',        // entablature + pediment (unbuilt) + stylobate steps
  EMPTY: '#EAE4D6',       // an unfilled column cell
  PARCHMENT: '#F4EFE3',   // plaque face / Hall card
  SAND: '#EFE9DB',        // unlaid stylobate
  WALL_BG: '#EDE7D8',     // the wall track
  HALL_BG: '#16301F',     // the Hall interior (forest)
  HALL_BG2: '#0E2418'
};
var GOLD_ACHIEVE = '#C5A95A';   // a capital topping out, a finished pediment, motion now

// ── The monument PANEL — the Hall treatment, generalized (fixed, never
// themed). The temple sits inside a framed deep-parchment field with a gold
// hairline edge and a forest plinth band carrying its caption. Deep
// parchment (NOT Hall forest) because the two darkest ramp colors would
// vanish against forest. Stone shifts one step darker ON the panel so
// ground / stone / structure stay three legible steps.
var PANEL = {
  FIELD: '#EFE8DA',        // the panel field (below tab bg #FAF8F2)
  EDGE: '#C5A95A',         // gold hairline frame
  PLINTH: '#16301F',       // forest caption band at the panel bottom
  PLINTH_TEXT: '#C9B07A'   // gold small-caps caption on the plinth
};
var STONE_ON_PANEL = {
  EMPTY: '#E0D6BE',        // unfilled column cell on the panel field
  BEAM: '#C9BC9C',         // entablature / pediment / base on the panel
  SAND: '#E8DFC9'          // unlaid stylobate on the panel
};
// The Wall strip (Dashboard): remaining debt as one banded row — ramp
// colors pulled 45% toward the panel field so the wall reads as ghost
// masonry, clearly quieter than the temple below it.
var WALL_TINTS = ['#BCCAA7', '#A8BA96', '#8EAE95', '#849B88', '#7B8A7B'];

// returns the fixed debt-ramp color for a 0-based slot (cycled past five)
function debtColor_(slotIdx) { return DEBT_RAMP[slotIdx % DEBT_RAMP.length]; }

// ── Capacity constants — THE SCALE DIALS (03_data_model.md) ───────────
// Raising any of these is one constant + Setup ▸ Build workbook rerun.
var DEBT_CAPACITY = 25;            // Debts rows 10-34 · engine columns/block
var PAYOFF_HORIZON_MONTHS = 120;   // engine block rows; longer reads "beyond horizon · 10+ yrs"
var PAYMENTS_CAPACITY = 5000;      // Payments Log rows
var SCENARIO_EXTRAS = [50, 100];   // the two what-if engine blocks
var ACTUALS_MONTHS = 24;           // Progress actuals window (rolls like the siblings)

var DEBT_TYPES = ['Card', 'Auto', 'Student', 'Personal', 'Medical', 'Mortgage', 'Other'];
var STRATEGIES = [
  'Snowball — smallest balance first',
  'Avalanche — highest APR first',
  'My Order — use my ranking'
];
var STRATEGY_DEFAULT = STRATEGIES[0];
var STYLOBATE_GOAL_DEFAULT = 1000;

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
  START: 'Start Here', DASHBOARD: 'Dashboard', PLAN: 'The Plan', COMPARE: 'Compare',
  DEBTS: 'Debts', PAYMENTS: 'Payments Log', PROGRESS: 'Progress', HALL: 'The Hall',
  IMPORT: 'Bank Import', ENGINE: '_Engine', CONFIG: '_Config', SCHEMA: '_Schema'
};
var TAB_ORDER = [
  TABS.START, TABS.DASHBOARD, TABS.PLAN, TABS.COMPARE, TABS.DEBTS, TABS.PAYMENTS,
  TABS.PROGRESS, TABS.HALL, TABS.IMPORT, TABS.ENGINE, TABS.CONFIG, TABS.SCHEMA
];
var SYSTEM_TABS = [TABS.ENGINE, TABS.CONFIG, TABS.SCHEMA];
var CONTENT_START_ROW = 6;     // chrome rows 1-5; title block rows 6-8

// ── Debts registry column contract (03 · rows 10-34) ──────────────────
// A # · B Name · C Type · D Statement balance (yellow anchor) · E APR ·
// F Min · G Due day · H In plan? · I My order · J Last checked ·
// K Current balance · L Status · M Payoff date · N Projected interest ·
// O Share bar | (gap P) | Q Keyword · R Maps to debt (cc_keyword_rules) |
// hidden: S Start balance · T Anchored on.
var DEBT = {
  HEADER_ROW: 9, FIRST_ROW: 10,
  COL_NUM: 1, COL_NAME: 2, COL_TYPE: 3, COL_STMT: 4, COL_APR: 5, COL_MIN: 6,
  COL_DUE: 7, COL_INPLAN: 8, COL_ORDER: 9, COL_CHECKED: 10, COL_CURRENT: 11,
  COL_STATUS: 12, COL_PAYOFF: 13, COL_PROJINT: 14, COL_SHARE: 15,
  COL_KW: 17, COL_KWDEBT: 18, COL_START: 19, COL_ANCHOR: 20
};
var DEBT_LAST_ROW = DEBT.FIRST_ROW + DEBT_CAPACITY - 1;   // 34

// ── Payments Log column contract (03) ─────────────────────────────────
// A Date · B Debt · C Amount · D Est. interest · E Est. principal ·
// F Note · G Month (hidden helper).
var PAY = {
  HEADER_ROW: 9, FIRST_ROW: 10,
  COL_DATE: 1, COL_DEBT: 2, COL_AMOUNT: 3, COL_INT: 4, COL_PRIN: 5, COL_NOTE: 6, COL_MONTH: 7
};
var PAY_LAST_ROW = PAY.FIRST_ROW + PAYMENTS_CAPACITY - 1;  // 5009

// ── _Engine layout contract — the projection math (03) ────────────────
// 25 debt slots live in cols B..Z. Helpers AA target · AB pool · AC
// in-plan total · AD interest-this-month. Mirror rows up top; six
// schedule blocks below (snowball · avalanche · custom · +$50 · +$100 ·
// minimums-only baseline), each PAYOFF_HORIZON_MONTHS × DEBT_CAPACITY.
var ENG = {
  SLOT_FIRST: 2, SLOT_LAST: 26,          // B..Z = 25 debt slots
  COL_TARGET: 27, COL_POOL: 28, COL_TOTAL: 29, COL_INT: 30,   // AA AB AC AD
  // mirror rows (each across B..Z)
  ROW_COLIDX: 1, ROW_BAL0: 2, ROW_R: 3, ROW_MIN: 4, ROW_EXISTS: 5,
  ROW_ALIVE: 6, ROW_INPLAN: 7, ROW_CONSUMER: 8, ROW_START: 9, ROW_ORDERVAL: 10,
  ROW_RANK_SNOW: 11, ROW_RANK_AVAL: 12, ROW_RANK_CUST: 13, ROW_RANK_ACTIVE: 14,
  ROW_ACTIVE_IDX: 15,                    // B15 = 1/2/3 from cc_active_strategy
  ROW_ACTIVE_PAYOFF: 16, ROW_ACTIVE_INT: 17, ROW_SCALARS: 18,
  // six blocks, each: SUMMARY row · PAYOFF row · INT row · spare · 121 data rows
  FIRST_BLOCK_TOP: 21, BLOCK_HEIGHT: 130, BLOCK_DATA_OFFSET: 4
};
// block index → name + which rank row + extra + whether the pool applies
var ENG_BLOCKS = [
  { key: 'snow', label: 'SNOWBALL', rankRow: ENG.ROW_RANK_SNOW, extra: 'base', pool: true },
  { key: 'aval', label: 'AVALANCHE', rankRow: ENG.ROW_RANK_AVAL, extra: 'base', pool: true },
  { key: 'cust', label: 'CUSTOM · MY ORDER', rankRow: ENG.ROW_RANK_CUST, extra: 'base', pool: true },
  { key: 'p50',  label: 'ACTIVE +$' + SCENARIO_EXTRAS[0], rankRow: ENG.ROW_RANK_ACTIVE, extra: SCENARIO_EXTRAS[0], pool: true },
  { key: 'p100', label: 'ACTIVE +$' + SCENARIO_EXTRAS[1], rankRow: ENG.ROW_RANK_ACTIVE, extra: SCENARIO_EXTRAS[1], pool: true },
  { key: 'base', label: 'MINIMUMS-ONLY BASELINE', rankRow: 0, extra: 0, pool: false }
];
function engBlockTop_(i) { return ENG.FIRST_BLOCK_TOP + i * ENG.BLOCK_HEIGHT; }
function engBlockByKey_(k) { for (var i = 0; i < ENG_BLOCKS.length; i++) if (ENG_BLOCKS[i].key === k) return { i: i, top: engBlockTop_(i), def: ENG_BLOCKS[i] }; return null; }
var ENG_DATA0 = function (top) { return top + ENG.BLOCK_DATA_OFFSET; };           // m=0 row
var ENG_LASTROW = engBlockTop_(ENG_BLOCKS.length - 1) + ENG.BLOCK_DATA_OFFSET + PAYOFF_HORIZON_MONTHS + 2;

// ── Mock data — Casey Alvarez (04_mock_data_and_qa.md) ────────────────
// 14 months into a snowball with $250 extra. Two debts dead, the third on
// the ropes, the mortgage tracked-not-in-plan. Headline truths the math
// layer re-verifies: snowball 47 mo / $7,487 · avalanche 46 mo / $6,515
// (saves $972, first win 15 mo sooner) · +$50 → 2 mo · +$100 → 6 mo ·
// $26,772 saved through the horizon (minimums still owe $15,559).
// debt row: [name, type, start, apr, min, dueDay, inPlan, myOrder,
//            currentBalance(K), killedMonthsAgo|null, anchorMonthsAgo,
//            stmtBalance(D)] — currentBalance is what the engine projects
// from; stmtBalance/anchor reproduce the Debts!K formula (K = D − Σ
// principal of payments after the anchor). For most debts anchor=now so
// D=K; the Student loan anchors a month back to demo the true-up.
var MOCK = {
  owner: { name: 'Casey Alvarez' },
  histMonths: 14,
  extra: 250,
  stylobateGoal: STYLOBATE_GOAL_DEFAULT,
  debts: [
    // name,               type,       start, apr,    min,  due, inPlan, order, K,     killedAgo, anchorAgo, D
    ['Rooms+ Store Card',  'Card',     1150,  0.2799, 35,   6,   true,  null,  0,     9,    0,  0],
    ['Medical bill',       'Medical',  3400,  0,      150,  1,   true,  null,  0,     2,    0,  0],
    ['Visa ····4417',      'Card',     9800,  0.2499, 196,  17,  true,  3,     9930,  null, 0,  9930],
    ['Auto loan',          'Auto',     8400,  0.069,  212,  3,   true,  2,     5148,  null, 0,  5148],
    ['Student loan',       'Student',  18200, 0.055,  190,  21,  true,  1,     16663, null, 0,  16663],
    ['Mortgage',           'Mortgage', 148000,0.061,  1055, 1,   false, null,  142840,null, 0,  142840]
  ],
  // Stylobate contributions (Progress) — SAVED computed = sum of these.
  contributions: [[5, 200], [3, 150], [1, 250]],   // [monthsAgo, amount] → $600 of $1,000
  ai_insights: [
    ['MOMENTUM', 'Two debts down. The Visa dies next — every dollar of the old minimums is already working on it.'],
    ['TRADE-OFF', 'Avalanche would save about five hundred dollars but delays your next win by four months. Momentum has a price; so does interest.'],
    ['LEVER', 'Fifty more dollars a month moves your debt-free date up by months, not weeks. The Plan tab shows exactly how many.']
  ]
};

// ── In-plan, still-alive mock debts the engine projects from ──────────
// (Store card + Medical are paid; Mortgage is out of plan.)
function mockInPlanDebts_() {
  var out = [];
  MOCK.debts.forEach(function (d) {
    var inPlan = d[6], K = d[8];
    if (inPlan && K > 0) out.push({ name: d[0], bal0: K, apr: d[3], min: d[4], order: d[7] });
  });
  return out;
}

/**
 * Column & Co. — The Payoff v1.0
 * 00b · The amortization TWIN — a plain-JS re-implementation of the 03
 * iteration, identical to the _Engine formula recurrence. It drives the
 * "Watch the build" replay frames and the mock headline derivations, and
 * tools/verify_payoff.js (the math layer) asserts an INDEPENDENT third
 * implementation matches it exactly. Keeping the twin and the formula
 * engine line-for-line parallel is the contract; the harness guards it.
 */

// strategy → { slotIndex: rank } (1-based). Ties break by array order.
function rankDebts_(debts, strategy) {
  var idx = debts.map(function (d, i) { return i; });
  var keyOf;
  if (strategy === 'avalanche') keyOf = function (d) { return -d.apr; };
  else if (strategy === 'custom') keyOf = null;          // handled below
  else keyOf = function (d) { return d.bal0; };           // snowball
  if (strategy === 'custom') {
    idx.sort(function (a, b) {
      var oa = (debts[a].order == null || debts[a].order === '') ? Infinity : Number(debts[a].order);
      var ob = (debts[b].order == null || debts[b].order === '') ? Infinity : Number(debts[b].order);
      if (oa !== ob) return oa - ob;
      if (debts[a].bal0 !== debts[b].bal0) return debts[a].bal0 - debts[b].bal0;
      return a - b;
    });
  } else {
    idx.sort(function (a, b) { var ka = keyOf(debts[a]), kb = keyOf(debts[b]); if (ka !== kb) return ka - kb; return a - b; });
  }
  var rank = {}; idx.forEach(function (i, pos) { rank[i] = pos + 1; }); return rank;
}

// one schedule: { months, interestTotal, payoff:[m|null...], firstKill:{m,name}, total:[m] }
function simulateSchedule_(debts, rankMap, extra) {
  var N = debts.length, H = PAYOFF_HORIZON_MONTHS, EPS = 1e-9;
  var r = debts.map(function (d) { return d.apr / 12; });
  var bal = debts.map(function (d) { return [d.bal0]; });
  var interest = debts.map(function () { return 0; });
  var payoff = debts.map(function () { return null; });
  var total = [debts.reduce(function (a, d) { return a + d.bal0; }, 0)];
  for (var m = 1; m <= H; m++) {
    var target = Infinity;
    for (var d = 0; d < N; d++) if (bal[d][m - 1] > EPS) target = Math.min(target, rankMap[d]);
    var pool = extra;
    for (d = 0; d < N; d++) if (bal[d][m - 1] <= EPS) pool += debts[d].min;
    var tot = 0;
    for (d = 0; d < N; d++) {
      var prev = bal[d][m - 1];
      if (prev <= EPS) { bal[d][m] = 0; continue; }
      interest[d] += prev * r[d];
      var pay = debts[d].min + (rankMap[d] === target ? pool : 0);
      var nb = prev * (1 + r[d]) - pay; if (nb < 0) nb = 0;
      bal[d][m] = nb;
      if (nb <= EPS && payoff[d] === null) payoff[d] = m;
      tot += nb;
    }
    total.push(tot);
  }
  var cnt = 0; for (m = 0; m <= H; m++) if (total[m] > 0.005) cnt++;
  var months = cnt > H ? Infinity : cnt;
  var firstKill = { m: Infinity, name: null };
  debts.forEach(function (d, i) { if (payoff[i] !== null && payoff[i] < firstKill.m) firstKill = { m: payoff[i], name: d.name }; });
  return {
    months: months,
    interestTotal: Math.round(interest.reduce(function (a, b) { return a + b; }, 0) * 100) / 100,
    payoff: debts.map(function (d, i) { return payoff[i]; }),
    perInterest: interest.map(function (x) { return Math.round(x * 100) / 100; }),
    firstKill: firstKill, total: total, bal: bal
  };
}

// minimums-only baseline: each debt alone at its min, no pool/extra, thru
// the horizon. The honest "what happens if you only pay minimums" line.
function simulateBaseline_(debts) {
  var H = PAYOFF_HORIZON_MONTHS, EPS = 1e-9;
  var r = debts.map(function (d) { return d.apr / 12; });
  var interestTotal = 0, remain = 0;
  debts.forEach(function (d, i) {
    var b = d.bal0;
    for (var m = 1; m <= H; m++) { if (b <= EPS) break; interestTotal += b * r[i]; b = b * (1 + r[i]) - d.min; if (b < 0) b = 0; }
    remain += Math.max(0, b);
  });
  return { interestTotal: Math.round(interestTotal * 100) / 100, remainAtHorizon: Math.round(remain * 100) / 100 };
}

// est interest for one logged payment: the same balance×APR/12 the
// projection uses, capped at the amount (the bill's hidden split, shown).
function paymentEstInterest_(statementBal, apr, amount) {
  var i = (Number(statementBal) || 0) * (Number(apr) || 0) / 12;
  return Math.round(Math.min(Number(amount) || 0, i) * 100) / 100;
}

/**
 * Column & Co. — The Payoff v1.0
 * 01 · Helpers — styling utilities + the theme registry. Copied from the
 * sibling scripts; tab builders call these to stay terse. The theme
 * registry records which ranges are "themable" so applyTheme() repaints
 * the content area without ever touching the locked brand chrome — or the
 * fixed stone-and-gold monument (its cells are simply never registered).
 */
var THEME_MAP = {};
function themable_(sheetName, role, a1) {
  if (!THEME_MAP[sheetName]) THEME_MAP[sheetName] = {};
  if (!THEME_MAP[sheetName][role]) THEME_MAP[sheetName][role] = [];
  THEME_MAP[sheetName][role].push(a1);
}
function persistThemeMap_() {
  PropertiesService.getDocumentProperties().setProperty('cc_theme_map', JSON.stringify(THEME_MAP));
}
function columnLetterToNumber_(letter) {
  var col = 0;
  for (var i = 0; i < letter.length; i++) col = col * 26 + (letter.charCodeAt(i) - 64);
  return col;
}
function columnToLetter_(col) {
  var s = '';
  while (col > 0) { var m = (col - 1) % 26; s = String.fromCharCode(65 + m) + s; col = Math.floor((col - 1) / 26); }
  return s;
}

// Merge a range without ever aborting the build. A partial-overlap merge
// throws "You must select all cells in a merged range…" in Apps Script —
// an uncaught one kills the whole build mid-way (hard-won lesson). Routing
// every merge through here makes a stray overlap a no-op cell, not a fatal
// exception. tools/verify_payoff.js models the overlap and FAILS the build
// statically so overlaps are caught before they ship, not swallowed blind.
function safeMerge_(rng) {
  try { rng.merge(); } catch (e) {}
  return rng;
}

/**
 * setCell_ — style a single cell or range in one call.
 * opts: { value, formula, font, size, bold, italic, color, bg, h, v,
 *         wrap, format, note, merge (a1 to merge with) }
 */
function setCell_(sheet, a1, opts) {
  opts = opts || {};
  var rng = sheet.getRange(opts.merge ? (a1 + ':' + opts.merge) : a1);
  if (opts.merge) safeMerge_(rng);
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
  if (opts.note != null) rng.setNote(opts.note);
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
    color: BRAND.BODY, h: 'left', v: 'top', wrap: true
  });
  sheet.setRowHeight(r, 36);
  sheet.setRowHeight(r + 1, 20);
  return r + 3; // next free content row (one spacer row)
}

// KPI card — a 3-row merged block: tracked label, big value, sub-caption.
function kpiCard_(sheet, topLeftA1, widthCols, label, valueOrFormula, sub, accentColor) {
  var cell = sheet.getRange(topLeftA1);
  var r = cell.getRow(), c = cell.getColumn();
  var labelRng = safeMerge_(sheet.getRange(r, c, 1, widthCols));
  var valRng = safeMerge_(sheet.getRange(r + 1, c, 1, widthCols));
  var subRng = safeMerge_(sheet.getRange(r + 2, c, 1, widthCols));

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
    .setVerticalAlignment('top').setHorizontalAlignment('left').setWrap(true);

  sheet.getRange(r, c, 3, widthCols)
    .setBorder(true, true, true, true, false, false, BRAND.HAIRLINE, SpreadsheetApp.BorderStyle.SOLID);
  sheet.getRange(r, c, 1, widthCols)
    .setBorder(true, null, null, null, null, null, accentColor || BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID_MEDIUM);
  themable_(sheet.getName(), 'bg', sheet.getRange(r, c, 3, widthCols).getA1Notation());
}

// SPARKLINE helpers (formula strings).
function sparkBar_(valueRef, maxRef, color) {
  return '=SPARKLINE(' + valueRef + ', {"charttype","bar";"max",' + maxRef + ';"color1","' + color + '"})';
}
function sparkLine_(rangeRef, color) {
  return '=SPARKLINE(' + rangeRef + ', {"charttype","line";"color","' + color + '";"linewidth",2})';
}
function sparkCol_(rangeRef, color) {
  return '=SPARKLINE(' + rangeRef + ', {"charttype","column";"color","' + color + '"})';
}

// Grow the grid to at least rows × cols BEFORE writing past the 1,000×26
// default. Out-of-grid writes surface as the opaque "Service Spreadsheets
// failed while accessing document" error.
function ensureGrid_(sheet, rows, cols) {
  var maxR = sheet.getMaxRows();
  if (rows > maxR) sheet.insertRowsAfter(maxR, rows - maxR);
  var maxC = sheet.getMaxColumns();
  if (cols > maxC) sheet.insertColumnsAfter(maxC, cols - maxC);
}

// Run fn(startRow, nRows) over row slabs, flushing between them, so huge
// writes land as several digestible mutations.
function forEachSlab_(firstRow, totalRows, slabSize, fn) {
  for (var start = firstRow; start < firstRow + totalRows; start += slabSize) {
    var n = Math.min(slabSize, firstRow + totalRows - start);
    fn(start, n);
  }
  // One flush after the slab group — the slabbed writes still avoid a single
  // giant mutation, but we don't force a recalc after every 40-row slice
  // (the engine is 6 blocks × 120 × 25, so per-slab flushes were costly).
  SpreadsheetApp.flush();
}

function setColWidths_(sheet, widths) {
  for (var i = 0; i < widths.length; i++) sheet.setColumnWidth(i + 1, widths[i]);
}

function money_(n) {
  var neg = n < 0; n = Math.abs(Math.round(n));
  var s = String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (neg ? '−$' : '$') + s;
}

// ── Month helpers ─────────────────────────────────────────────────────
function monthCodeOfDate_(d) {
  var y = d.getFullYear(), m = d.getMonth() + 1;
  return y + '-' + (m < 10 ? '0' + m : '' + m);
}
// short "Mon YYYY" for a month offset from a Date.
function monthLabelOffset_(anchorDate, offset) {
  var d = new Date(anchorDate.getFullYear(), anchorDate.getMonth() + offset, 1);
  var names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return names[d.getMonth()] + ' ' + d.getFullYear();
}
function addMonths_(d, n) { return new Date(d.getFullYear(), d.getMonth() + n, d.getDate()); }

/**
 * Column & Co. — The Payoff v1.0
 * 02 · Brand chrome — the non-negotiable letterhead + footer. Rows 1-2
 * Forest header · row 3 Canopy band · row 4 Gold rule (3px) · row 5
 * spacer. LOCKED — applyTheme() never repaints chrome.
 */
function chrome_(sheet, tabName, lastColLetter, subLabel, splitColOpt) {
  var lastCol = columnLetterToNumber_(lastColLetter);
  // breadcrumb needs ~300px — on mixed-width (zone) tabs the caller passes
  // the split column; on uniform canvases the last 4 columns suffice.
  var splitCol = splitColOpt || Math.max(2, lastCol - 3);
  var name = sheet.getName();

  var left = safeMerge_(sheet.getRange(1, 1, 2, splitCol - 1));
  left.setBackground(BRAND.FOREST).setVerticalAlignment('middle')
    .setHorizontalAlignment('left').setFontColor(BRAND.PARCHMENT)
    .setFontFamily(FONT.DISPLAY).setFontSize(20).setFontWeight('bold')
    .setValue('  ' + CC.BRAND);
  themable_(name, 'primary', left.getA1Notation());

  var right = safeMerge_(sheet.getRange(1, splitCol, 2, lastCol - splitCol + 1));
  right.setBackground(BRAND.FOREST).setVerticalAlignment('middle')
    .setHorizontalAlignment('right').setFontColor(BRAND.PARCHMENT)
    .setFontFamily(FONT.BODY).setFontSize(11)
    .setValue(CC.PRODUCT + ' ' + CC.VERSION + '  ·  ' + tabName + '  ');
  themable_(name, 'primary', right.getA1Notation());
  sheet.setRowHeight(1, 30); sheet.setRowHeight(2, 30);

  var band = safeMerge_(sheet.getRange(3, 1, 1, lastCol));
  band.setBackground(BRAND.CANOPY).setVerticalAlignment('middle')
    .setHorizontalAlignment('right').setFontColor(BRAND.GOLD)
    .setFontFamily(FONT.BODY).setFontSize(9).setFontWeight('bold')
    .setValue(subLabel ? (subLabel + '  ') : '');
  themable_(name, 'mid', band.getA1Notation());
  sheet.setRowHeight(3, 26);

  var rule = safeMerge_(sheet.getRange(4, 1, 1, lastCol));
  rule.setBackground(BRAND.GOLD);
  themable_(name, 'accent', rule.getA1Notation());
  sheet.setRowHeight(4, 3);

  sheet.getRange(5, 1, 1, lastCol).setBackground(BRAND.PARCHMENT);
  sheet.setRowHeight(5, 18);
}

function footer_(sheet, row, lastColLetter) {
  var lastCol = columnLetterToNumber_(lastColLetter);
  var bar = safeMerge_(sheet.getRange(row, 1, 1, lastCol));
  bar.setBackground(BRAND.FOREST).setFontColor(BRAND.PARCHMENT_60)
    .setFontFamily(FONT.BODY).setFontSize(10)
    .setHorizontalAlignment('center').setVerticalAlignment('middle')
    .setValue(CC.FOOTER);
  themable_(sheet.getName(), 'primary', bar.getA1Notation());
  sheet.setRowHeight(row, 28);
}

// Paint the content background (rows 6..endRow) Parchment so the sheet
// reads as one card. Registered as a themable 'bg' range.
function paintContentBg_(sheet, endRow, lastColLetter) {
  var lastCol = columnLetterToNumber_(lastColLetter);
  var rng = sheet.getRange(CONTENT_START_ROW, 1, endRow - CONTENT_START_ROW + 1, lastCol);
  rng.setBackground(BRAND.PARCHMENT);
  themable_(sheet.getName(), 'bg', rng.getA1Notation());
}

// ── Control-cell contract (the named yellow inputs the engine reads) ──
// Inputs sit on row 10 (labels on row 9 above them) for a clean control bar.
var CTRL = {
  STRATEGY: "'" + TABS.PLAN + "'!C10",        // cc_active_strategy (single real cell)
  EXTRA:    "'" + TABS.PLAN + "'!D10",        // cc_extra_monthly (single real cell)
  TIME_MACHINE: "'" + TABS.PLAN + "'!C32",    // cc_time_machine (month index)
  COMPARE_MONTH: "'" + TABS.COMPARE + "'!C10",
  STYLO_GOAL: "'" + TABS.PROGRESS + "'!C10",  // cc_stylobate_goal
  ENGINE_ANCHOR: "'" + TABS.CONFIG + "'!B41"  // cc_engine_anchor (first of current month)
};

/**
 * Column & Co. — The Payoff v1.0
 * 03 · Build orchestrator. buildWorkbook(mode) constructs the whole
 * 12-tab workbook from scratch.
 *   mode = 'mock'  → ships Casey Alvarez pre-populated (demo)
 *   mode = 'blank' → editable cells cleared for a real owner
 */
function buildMockWorkbook()  { buildWorkbook('mock'); }
function buildBlankWorkbook() { buildWorkbook('blank'); }

function buildWorkbook(mode) {
  mode = (mode === 'blank') ? 'blank' : 'mock';
  var ss = SpreadsheetApp.getActive();
  THEME_MAP = {};

  var sheets = {};
  TAB_ORDER.forEach(function (name) { sheets[name] = getOrCreateSheet_(ss, name); });

  // Registries + engine before the views that read them. Each step toasts
  // + flushes so a failure names its tab and the backend digests the
  // build in pieces (the slabbed-write lesson).
  var plan = [
    [TABS.CONFIG,    function () { buildConfig_(sheets[TABS.CONFIG], mode); }],
    [TABS.SCHEMA,    function () { buildSchema_(sheets[TABS.SCHEMA], mode); }],
    [TABS.DEBTS,     function () { buildDebts_(sheets[TABS.DEBTS], mode); }],
    [TABS.PAYMENTS,  function () { buildPaymentsLog_(sheets[TABS.PAYMENTS], mode); }],
    [TABS.ENGINE,    function () { buildEngine_(sheets[TABS.ENGINE], mode); }],
    [TABS.PLAN,      function () { buildPlan_(sheets[TABS.PLAN], mode); }],
    [TABS.COMPARE,   function () { buildCompare_(sheets[TABS.COMPARE], mode); }],
    [TABS.PROGRESS,  function () { buildProgress_(sheets[TABS.PROGRESS], mode); }],
    [TABS.DASHBOARD, function () { buildDashboard_(sheets[TABS.DASHBOARD], mode); }],
    [TABS.HALL,      function () { buildHall_(sheets[TABS.HALL], mode); }],
    [TABS.START,     function () { buildStartHere_(sheets[TABS.START], mode); }],
    [TABS.IMPORT,    function () { buildBankImport_(sheets[TABS.IMPORT], mode); }]
  ];
  for (var p = 0; p < plan.length; p++) {
    ss.toast('Building ' + plan[p][0] + ' · ' + (p + 1) + ' of ' + plan.length, CC.BRAND, 5);
    plan[p][1]();
    SpreadsheetApp.flush();
  }

  setNamedRanges_(ss);
  reorderTabs_(ss);
  ss.getSheets().forEach(function (sh) {
    if (TAB_ORDER.indexOf(sh.getName()) === -1) { try { ss.deleteSheet(sh); } catch (e) {} }
  });
  SYSTEM_TABS.forEach(function (n) { var sh = ss.getSheetByName(n); if (sh) sh.hideSheet(); });

  persistThemeMap_();
  var dp = PropertiesService.getDocumentProperties();
  dp.setProperty('cc_active_palette', DEFAULT_PALETTE);
  dp.setProperty('cc_build_mode', mode);
  dp.deleteProperty('cc_first_open');

  sheets[TABS.START].activate();
  ss.toast('Built ' + CC.PRODUCT + ' ' + CC.VERSION + ' (' + mode + ' data)', CC.BRAND, 5);
}

// Tear down AND normalize geometry first — clear() removes neither filters,
// merges, validations, row heights, column widths, nor hidden rows/cols.
function getOrCreateSheet_(ss, name) {
  var sh = ss.getSheetByName(name);
  if (!sh) sh = ss.insertSheet(name);
  var existingFilter = sh.getFilter();
  if (existingFilter) existingFilter.remove();
  try { sh.getRange(1, 1, sh.getMaxRows(), sh.getMaxColumns()).breakApart(); } catch (e) {}
  sh.getRange(1, 1, sh.getMaxRows(), sh.getMaxColumns()).clearDataValidations();
  sh.clear();
  sh.clearConditionalFormatRules();
  sh.getCharts().forEach(function (c) { sh.removeChart(c); });
  sh.showRows(1, sh.getMaxRows());
  sh.showColumns(1, sh.getMaxColumns());
  sh.setRowHeights(1, sh.getMaxRows(), 21);
  sh.setColumnWidths(1, sh.getMaxColumns(), 100);
  sh.setHiddenGridlines(true);
  try { sh.showRows(1, sh.getMaxRows()); } catch (e) {}
  try { sh.showColumns(1, sh.getMaxColumns()); } catch (e) {}
  return sh;
}

function reorderTabs_(ss) {
  for (var i = 0; i < TAB_ORDER.length; i++) {
    var sh = ss.getSheetByName(TAB_ORDER[i]);
    if (!sh) continue;
    ss.setActiveSheet(sh);
    ss.moveActiveSheet(i + 1);
  }
}

function setNamedRanges_(ss) {
  var defs = {
    'cc_active_palette':  TABS.CONFIG + '!B40',
    'cc_palettes':        TABS.CONFIG + '!A3:I26',
    'cc_engine_anchor':   TABS.CONFIG + '!B41',
    'cc_debts_list':      TABS.DEBTS + '!B' + DEBT.FIRST_ROW + ':B' + DEBT_LAST_ROW,
    'cc_debts_table':     TABS.DEBTS + '!A' + DEBT.FIRST_ROW + ':O' + DEBT_LAST_ROW,
    'cc_keyword_rules':   TABS.DEBTS + '!Q' + DEBT.FIRST_ROW + ':R' + DEBT_LAST_ROW,
    'cc_payments_log':    "'" + TABS.PAYMENTS + "'!A" + PAY.FIRST_ROW + ':G' + PAY_LAST_ROW,
    'cc_active_strategy': CTRL.STRATEGY,
    'cc_extra_monthly':   CTRL.EXTRA,
    'cc_time_machine':    CTRL.TIME_MACHINE,
    'cc_compare_month':   CTRL.COMPARE_MONTH,
    'cc_stylobate_goal':  CTRL.STYLO_GOAL
  };
  Object.keys(defs).forEach(function (name) {
    try { ss.setNamedRange(name, ss.getRange(defs[name])); } catch (e) {}
  });
}

/**
 * Column & Co. — The Payoff v1.0
 * 04 · Data + system tabs: _Config, _Schema, Debts, Payments Log, _Engine.
 */

// ── _Config — palette table + active selections + engine anchor ───────
function buildConfig_(sheet, mode) {
  sheet.getRange('A1').setValue('palettes');
  var palHdr = ['id', 'name', 'primary', 'mid', 'accent', 'bg', 'zebra', 'dark', 'accentLight'];
  sheet.getRange(2, 1, 1, palHdr.length).setValues([palHdr]).setFontWeight('bold');
  var palRows = PALETTES.map(function (p) {
    return [p.id, p.name, p.primary, p.mid, p.accent, p.bg, p.zebra, p.dark, p.accentLight];
  });
  sheet.getRange(3, 1, palRows.length, palHdr.length).setValues(palRows);
  sheet.getRange('A40').setValue('active_palette'); sheet.getRange('B40').setValue(DEFAULT_PALETTE);
  // Engine anchor = first of the CURRENT month, always live (payoff dates
  // read EDATE(anchor, months) so they never go stale).
  sheet.getRange('A41').setValue('engine_anchor');
  sheet.getRange('B41').setFormula('=DATE(YEAR(TODAY()),MONTH(TODAY()),1)').setNumberFormat('yyyy-mm-dd');
  sheet.getRange('A42').setValue('build_mode'); sheet.getRange('B42').setValue(mode);
}

// ── _Schema — LLM-readable plain-English description (the wedge) ───────
// No line may begin with "=" (a leading = turns prose into a broken formula).
function buildSchema_(sheet, mode) {
  var lines = [
    'The Payoff v1.0 — Workbook Schema for AI assistants',
    '────────────────────────────────────────────────────────',
    '',
    (mode === 'mock')
      ? 'This workbook is a debt-payoff planner. Demo owner: Casey Alvarez (fictional), 14 months into a snowball with $250/month extra.'
      : 'This workbook is a debt-payoff planner: list your debts, pick a strategy, log payments, and it computes when you are free and what gets you there faster.',
    '',
    'Tabs:',
    '  • Debts — the registry. One row per debt (' + DEBT_CAPACITY + ' slots): name, type,',
    '    Statement balance (your latest statement — the anchor you re-type',
    '    monthly), APR, minimum, due day, In plan? (No = tracked but kept',
    '    out of the strategy and the debt-free date), My order (rank for the',
    '    My Order strategy). Computed: Current balance, Status, Payoff date,',
    '    Projected interest, share bar.',
    '  • Payments Log — one row when money goes out. You type Date, Debt,',
    '    Amount only. Est. interest = balance × APR ÷ 12; Est. principal =',
    '    Amount − that. The sheet shows the split your bill hides.',
    '  • The Plan — pick a strategy and an extra monthly amount; see the',
    '    debt-free date, months left, interest on the plan, and interest',
    '    saved vs minimums. The Time Machine scrubs the temple to any month.',
    '  • Compare — snowball vs avalanche side by side, each from its own',
    '    full schedule: date, months, interest, first kill, and a verdict.',
    '  • Dashboard — the Temple (debts becoming columns) on its Stylobate,',
    '    KPIs, and this month\'s payments.',
    '  • Progress — the Stylobate (a savings buffer toward a goal) and',
    '    data-derived streaks; actual balance vs the plan.',
    '  • The Hall — slain-debt plaques and record trophies.',
    '  • Bank Import — paste a bank CSV; it maps descriptions to debts and',
    '    appends to the Payments Log.',
    '  • _Engine — the projection math (hidden). Five payoff schedules',
    '    (snowball, avalanche, your order, +$' + SCENARIO_EXTRAS[0] + ', +$' + SCENARIO_EXTRAS[1] + ') plus a',
    '    minimums-only baseline, each at ' + DEBT_CAPACITY + ' debts × ' + PAYOFF_HORIZON_MONTHS + ' months.',
    '',
    'Conventions:',
    '  • Projections are estimates at monthly compounding (APR/12), not',
    '    financial advice and not a servicing statement. Your lender\'s',
    '    figures are the truth — re-type your statement balance monthly.',
    '  • The In-plan toggle: a mortgage (or any debt you do not want driving',
    '    the plan) is tracked but excluded from the strategy and the date.',
    '  • Rollover simplification: when a payment overshoots a dying debt, the',
    '    surplus rolls into next month\'s pool rather than cascading the same',
    '    month — at most one month of precision, every cell auditable.',
    '  • Capacity dials (rebuild to grow): ' + DEBT_CAPACITY + ' debts, ' + PAYOFF_HORIZON_MONTHS + '-month horizon,',
    '    ' + PAYMENTS_CAPACITY + ' payment rows.',
    '  • Fonts: Playfair Display is substituted with Lora, Jost with Roboto.',
    '',
    'Typical questions to ask of this sheet:',
    '  • Which payoff order saves me the most interest?',
    '  • What does +$75 a month buy me — how much sooner am I free?',
    '  • When does my Visa die under each strategy?'
  ];
  if (mode === 'mock') {
    lines.push('');
    lines.push('Demo note: Casey owes $31,741 across a Visa, an auto loan, and a');
    lines.push('student loan, with a tracked mortgage. Snowball frees her in 47');
    lines.push('months; avalanche saves about $972 but its first win lands later.');
  }
  sheet.getRange(1, 1, lines.length, 1).setValues(lines.map(function (l) { return [l]; }));
  sheet.getRange(1, 1, lines.length, 1).setFontFamily('Roboto Mono').setFontSize(10);
  sheet.setColumnWidth(1, 760);
}

// ── Debts — the registry (the only setup typing) ──────────────────────
function buildDebts_(sheet, mode) {
  var existingFilter = sheet.getFilter();
  if (existingFilter) existingFilter.remove();
  ensureGrid_(sheet, DEBT_LAST_ROW + 6, 22);
  var lastColLetter = 'R';                 // hidden helpers S/T live past chrome
  chrome_(sheet, TABS.DEBTS, lastColLetter, 'YOUR DEBTS · ' + DEBT_CAPACITY + ' SLOTS');
  titleRow_(sheet, lastColLetter, 'Debts',
    'List each debt once. Type your current statement balance, the APR, and the minimum — yellow is yours; everything else computes. Re-type your statement balance each month: it is the truth, and it absorbs interest, promo rates, fees, or new charges.');

  var hdrRow = DEBT.HEADER_ROW;
  var hdr = ['#', 'Debt', 'Type', 'Statement balance', 'APR', 'Min', 'Due day',
    'In plan?', 'My order', 'Last checked', 'Balance now', 'Status', 'Payoff date',
    'Projected interest', 'Share of total'];
  sheet.getRange(hdrRow, 1, 1, hdr.length).setValues([hdr])
    .setFontWeight('bold').setFontColor(BRAND.PARCHMENT).setBackground(BRAND.FOREST)
    .setFontFamily(FONT.BODY).setFontSize(10);
  themable_(sheet.getName(), 'primary', sheet.getRange(hdrRow, 1, 1, hdr.length).getA1Notation());
  [DEBT.COL_STMT, DEBT.COL_APR, DEBT.COL_MIN, DEBT.COL_DUE, DEBT.COL_CURRENT, DEBT.COL_PROJINT]
    .forEach(function (c) { sheet.getRange(hdrRow, c).setHorizontalAlignment('right'); });

  var n = DEBT_CAPACITY, first = DEBT.FIRST_ROW, last = DEBT_LAST_ROW;

  // # column (blank when the row is empty)
  var numF = [];
  for (var r = first; r <= last; r++) numF.push(['=IF($B' + r + '="","",ROW()-' + (first - 1) + ')']);
  sheet.getRange(first, DEBT.COL_NUM, n, 1).setFormulas(numF)
    .setFontColor(BRAND.CAPTION).setFontSize(9).setHorizontalAlignment('center');

  // yellow editable inputs B..I
  sheet.getRange(first, DEBT.COL_NAME, n, 8).setBackground(BRAND.YELLOW)
    .setBorder(true, true, true, true, true, true, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID)
    .setFontFamily(FONT.BODY).setFontSize(11);
  sheet.getRange(first, DEBT.COL_STMT, n, 1).setNumberFormat('$#,##0');
  sheet.getRange(first, DEBT.COL_APR, n, 1).setNumberFormat('0.00%');
  sheet.getRange(first, DEBT.COL_MIN, n, 1).setNumberFormat('$#,##0');
  sheet.getRange(first, DEBT.COL_DUE, n, 1).setHorizontalAlignment('center');
  sheet.getRange(first, DEBT.COL_ORDER, n, 1).setHorizontalAlignment('center');

  // validations
  var typeRule = SpreadsheetApp.newDataValidation().requireValueInList(DEBT_TYPES, true).setAllowInvalid(true).build();
  sheet.getRange(first, DEBT.COL_TYPE, n, 1).setDataValidation(typeRule);
  var inPlanRule = SpreadsheetApp.newDataValidation().requireValueInList(['Yes', 'No'], true).build();
  sheet.getRange(first, DEBT.COL_INPLAN, n, 1).setDataValidation(inPlanRule);
  var dueRule = SpreadsheetApp.newDataValidation().requireNumberBetween(1, 28).setAllowInvalid(true).build();
  sheet.getRange(first, DEBT.COL_DUE, n, 1).setDataValidation(dueRule);

  // computed columns J..O (formulas, both modes)
  var jF = [], kF = [], lF = [], mF = [], nF = [], oF = [];
  var PL = "'" + TABS.PAYMENTS + "'", PLast = PAY_LAST_ROW, ER = "'_Engine'";
  for (var R = first; R <= last; R++) {
    var s = R - first;                       // 0-based slot → engine col s+1
    jF.push(['=IF($D' + R + '="","",MAX($T' + R + ',IFERROR(MAXIFS(' + PL + '!$A$10:$A$' + PLast + ',' + PL + '!$B$10:$B$' + PLast + ',$B' + R + '),0)))']);
    kF.push(['=IF($D' + R + '="","",MAX(0,ROUND($D' + R + '-SUMIFS(' + PL + '!$E$10:$E$' + PLast + ',' + PL + '!$B$10:$B$' + PLast + ',$B' + R + ',' + PL + '!$A$10:$A$' + PLast + ',">"&$T' + R + '),2)))']);
    lF.push(['=IF($B' + R + '="","",IF($H' + R + '="No","TRACKED",IF($K' + R + '<=0,"PAID ✓",IF($F' + R + '<=$K' + R + '*$E' + R + '/12,"UNDERWATER","ACTIVE"))))']);
    var poRef = 'INDEX(' + ER + '!$B$' + ENG.ROW_ACTIVE_PAYOFF + ':$Z$' + ENG.ROW_ACTIVE_PAYOFF + ',1,' + (s + 1) + ')';
    mF.push(['=IF($B' + R + '="","",IF($H' + R + '="No","tracked",IF($K' + R + '<=0,"paid ✓",IFERROR(IF(' + poRef + '>=' + PAYOFF_HORIZON_MONTHS + ',"beyond horizon · 10+ yrs",TEXT(EDATE(cc_engine_anchor,' + poRef + '),"mmm yyyy")),"—"))))']);
    nF.push(['=IF($B' + R + '="","",IF($H' + R + '="No","—",IFERROR(INDEX(' + ER + '!$B$' + ENG.ROW_ACTIVE_INT + ':$Z$' + ENG.ROW_ACTIVE_INT + ',1,' + (s + 1) + '),"—")))']);
    oF.push(['=IF($K' + R + '<=0,"",SPARKLINE($K' + R + ',{"charttype","bar";"max",MAX(1,SUM($K$' + first + ':$K$' + last + '));"color1","' + debtColor_(s) + '"}))']);
  }
  sheet.getRange(first, DEBT.COL_CHECKED, n, 1).setFormulas(jF).setNumberFormat('mmm d').setFontColor(BRAND.CAPTION).setFontSize(10);
  sheet.getRange(first, DEBT.COL_CURRENT, n, 1).setFormulas(kF).setNumberFormat('$#,##0').setFontWeight('bold');
  sheet.getRange(first, DEBT.COL_STATUS, n, 1).setFormulas(lF).setHorizontalAlignment('center').setFontSize(10).setFontWeight('bold');
  sheet.getRange(first, DEBT.COL_PAYOFF, n, 1).setFormulas(mF).setFontColor(BRAND.BODY).setFontSize(10);
  sheet.getRange(first, DEBT.COL_PROJINT, n, 1).setFormulas(nF).setNumberFormat('$#,##0').setFontColor(BRAND.BODY);
  sheet.getRange(first, DEBT.COL_SHARE, n, 1).setFormulas(oF);
  statusChipDebts_(sheet, 'L' + first + ':L' + last);

  // mock fill (yellow inputs + hidden start/anchor)
  if (mode === 'mock') {
    var rows = generateMockDebts_();
    var inputs = rows.map(function (d) { return [d.name, d.type, d.stmt, d.apr, d.min, d.due, d.inPlan, d.order]; });
    sheet.getRange(first, DEBT.COL_NAME, rows.length, 8).setValues(inputs);
    var startCol = rows.map(function (d) { return [d.start]; });
    var anchCol = rows.map(function (d) { return [d.anchor]; });
    sheet.getRange(first, DEBT.COL_START, rows.length, 1).setValues(startCol);
    sheet.getRange(first, DEBT.COL_ANCHOR, rows.length, 1).setValues(anchCol);
  }

  // keyword rules (cols Q/R) — Foundation pattern: match text → debt name
  setCell_(sheet, 'Q' + (hdrRow), { value: 'Keyword (Bank Import)', font: FONT.BODY, size: 10, bold: true, color: BRAND.PARCHMENT, bg: BRAND.CANOPY });
  setCell_(sheet, 'R' + (hdrRow), { value: 'Maps to debt', font: FONT.BODY, size: 10, bold: true, color: BRAND.PARCHMENT, bg: BRAND.CANOPY });
  sheet.getRange(first, DEBT.COL_KW, n, 2).setBackground(BRAND.PARCHMENT)
    .setBorder(true, true, true, true, true, true, BRAND.HAIRLINE, SpreadsheetApp.BorderStyle.SOLID);
  var debtRule = SpreadsheetApp.newDataValidation().requireValueInRange(sheet.getRange('B' + first + ':B' + last), true).setAllowInvalid(true).build();
  sheet.getRange(first, DEBT.COL_KWDEBT, n, 1).setDataValidation(debtRule);
  if (mode === 'mock') {
    sheet.getRange(first, DEBT.COL_KW, 4, 2).setValues([
      ['CHASE CARD', 'Visa ····4417'], ['TOYOTA FIN', 'Auto loan'],
      ['SALLIE MAE', 'Student loan'], ['MORTGAGE', 'Mortgage']]);
  }

  // captions
  var capRow = last + 1;
  setCell_(sheet, 'A' + capRow, {
    value: 'Statement balance is the one number every bill shows. Between check-ins, logged payments nudge "Balance now" by the estimated principal; re-typing the statement re-anchors to truth. In plan? = No keeps a mortgage tracked without driving the date. UNDERWATER = the minimum does not cover a month of interest.',
    merge: 'O' + capRow, font: FONT.BODY, size: 10, italic: true, color: BRAND.CAPTION, wrap: true });
  sheet.setRowHeight(capRow, 44);

  footer_(sheet, capRow + 2, lastColLetter);

  // hidden helpers + geometry
  sheet.hideColumns(DEBT.COL_START, 2);   // S, T
  setColWidths_(sheet, [34, 150, 88, 116, 64, 64, 64, 70, 70, 84, 96, 104, 132, 110, 96, 22, 150, 110, 90, 90]);
  try { sheet.setFrozenRows(hdrRow); } catch (e) {}
  SpreadsheetApp.flush();
}

// Status-chip conditional formatting for the Debts Status column.
function statusChipDebts_(sheet, a1) {
  var rng = sheet.getRange(a1);
  var rules = sheet.getConditionalFormatRules();
  var add = function (txt, bg, fg) {
    rules.push(SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo(txt)
      .setBackground(bg).setFontColor(fg).setRanges([rng]).build());
  };
  add('PAID ✓', BRAND.CHIP_ON_BG, BRAND.CANOPY);
  add('ACTIVE', BRAND.CHIP_FAIR_BG, '#7d6420');
  add('UNDERWATER', BRAND.CHIP_OVER_BG, BRAND.GARNET);
  add('TRACKED', '#ECEFEA', BRAND.CAPTION);
  sheet.setConditionalFormatRules(rules);
}

// Casey Alvarez registry rows (mock). Anchor = build month so Balance now
// = Statement balance for a clean story; the true-up mechanic is live.
function generateMockDebts_() {
  var today = new Date();
  return MOCK.debts.map(function (d) {
    var anchorAgo = d[10];
    var anchor = anchorAgo > 0 ? new Date(today.getFullYear(), today.getMonth() - anchorAgo, 1) : today;
    return {
      name: d[0], type: d[1], start: d[2], apr: d[3], min: d[4], due: d[5],
      inPlan: d[6] ? 'Yes' : 'No', order: (d[7] == null ? '' : d[7]), stmt: d[11], anchor: anchor
    };
  });
}

// ── Payments Log — append-only payment record (you type Date/Debt/Amount) ─
function buildPaymentsLog_(sheet, mode) {
  var existingFilter = sheet.getFilter();
  if (existingFilter) existingFilter.remove();
  ensureGrid_(sheet, PAY_LAST_ROW + 4, 8);
  chrome_(sheet, TABS.PAYMENTS, 'G', 'YOU TYPE ONLY THE AMOUNT');
  titleRow_(sheet, 'G', 'Payments Log',
    'One row when money goes out. You type Date, Debt, and Amount — the sheet estimates the interest and principal from the APR, so you never need the split your bill hides.');

  var hdrRow = PAY.HEADER_ROW, first = PAY.FIRST_ROW, last = PAY_LAST_ROW;
  var hdr = ['Date', 'Debt', 'Amount', 'Est. interest', 'Est. principal', 'Note', 'Month'];
  sheet.getRange(hdrRow, 1, 1, hdr.length).setValues([hdr])
    .setFontWeight('bold').setFontColor(BRAND.PARCHMENT).setBackground(BRAND.FOREST)
    .setFontFamily(FONT.BODY).setFontSize(10);
  themable_(sheet.getName(), 'primary', sheet.getRange(hdrRow, 1, 1, hdr.length).getA1Notation());
  sheet.getRange(hdrRow, PAY.COL_AMOUNT, 1, 3).setHorizontalAlignment('right');

  // yellow inputs A..C + F; computed D/E + hidden G
  var DB = "'" + TABS.DEBTS + "'";
  var dl = 'cc_debts_list';
  forEachSlab_(first, PAYMENTS_CAPACITY, 1000, function (startRow, nRows) {
    var dF = [], eF = [], gF = [];
    for (var i = 0; i < nRows; i++) {
      var R = startRow + i;
      // Est. interest = MIN(amount, statement balance × APR / 12) of the debt
      dF.push(['=IF($A' + R + '="","",IF($B' + R + '="","",ROUND(MIN($C' + R + ',IFERROR(INDEX(' + DB + '!$D$10:$D$' + DEBT_LAST_ROW + ',MATCH($B' + R + ',' + dl + ',0))*INDEX(' + DB + '!$E$10:$E$' + DEBT_LAST_ROW + ',MATCH($B' + R + ',' + dl + ',0))/12,0)),2)))']);
      eF.push(['=IF($A' + R + '="","",IF($C' + R + '="","",$C' + R + '-$D' + R + '))']);
      gF.push(['=IF($A' + R + '="","",TEXT($A' + R + ',"yyyy-mm"))']);
    }
    sheet.getRange(startRow, PAY.COL_INT, nRows, 1).setFormulas(dF);
    sheet.getRange(startRow, PAY.COL_PRIN, nRows, 1).setFormulas(eF);
    sheet.getRange(startRow, PAY.COL_MONTH, nRows, 1).setFormulas(gF);
  });

  sheet.getRange(first, PAY.COL_DATE, PAYMENTS_CAPACITY, 3).setBackground(BRAND.YELLOW);
  sheet.getRange(first, PAY.COL_NOTE, PAYMENTS_CAPACITY, 1).setBackground(BRAND.YELLOW);
  sheet.getRange(first, PAY.COL_DATE, PAYMENTS_CAPACITY, 1).setNumberFormat('mmm d, yyyy');
  sheet.getRange(first, PAY.COL_AMOUNT, PAYMENTS_CAPACITY, 3).setNumberFormat('$#,##0.00');
  var debtRule = SpreadsheetApp.newDataValidation().requireValueInRange(sheet.getRange("'" + TABS.DEBTS + "'!B10:B" + DEBT_LAST_ROW), true).setAllowInvalid(true).build();
  sheet.getRange(first, PAY.COL_DEBT, PAYMENTS_CAPACITY, 1).setDataValidation(debtRule);

  if (mode === 'mock') {
    var pays = generateMockPayments_();
    if (pays.length) sheet.getRange(first, 1, pays.length, 3).setValues(pays.map(function (p) { return [p[0], p[1], p[2]]; }));
    var notes = pays.map(function (p) { return [p[3] || '']; });
    if (pays.length) sheet.getRange(first, PAY.COL_NOTE, pays.length, 1).setValues(notes);
  }

  setCell_(sheet, 'A' + (last + 1), {
    value: 'Yellow is the only thing you type. Est. interest = balance × APR ÷ 12 (the same math behind your projections); est. principal = amount − that. The estimate moves your temple now; your monthly statement balance on the Debts tab trues it up.',
    merge: 'G' + (last + 1), font: FONT.BODY, size: 10, italic: true, color: BRAND.CAPTION, wrap: true });

  sheet.hideColumns(PAY.COL_MONTH);
  setColWidths_(sheet, [110, 150, 100, 110, 110, 280, 80]);
  try { sheet.setFrozenRows(hdrRow); } catch (e) {}
  try { sheet.getRange(hdrRow, 1, PAYMENTS_CAPACITY + 1, 7).createFilter(); } catch (e) {}
  SpreadsheetApp.flush();
}

// ~14 months of Casey's payments (no future dates). The split is shown by
// the log's formulas; these rows just need Date/Debt/Amount + a few notes.
function generateMockPayments_() {
  var out = [], today = new Date();
  var active = [
    { name: 'Auto loan', min: 212, apr: 0.069, die: null },
    { name: 'Visa ····4417', min: 196, apr: 0.2499, die: null },
    { name: 'Student loan', min: 190, apr: 0.055, die: null },
    { name: 'Rooms+ Store Card', min: 35, apr: 0.2799, die: 9 },   // killed 9 months ago
    { name: 'Medical bill', min: 150, apr: 0, die: 2 }              // killed 2 months ago
  ];
  var dueDay = { 'Auto loan': 3, 'Visa ····4417': 17, 'Student loan': 21, 'Rooms+ Store Card': 6, 'Medical bill': 1 };
  for (var ago = MOCK.histMonths - 1; ago >= 0; ago--) {
    var base = new Date(today.getFullYear(), today.getMonth() - ago, 1);
    active.forEach(function (d) {
      if (d.die != null && ago < d.die) return;          // already dead this month
      var day = Math.min(dueDay[d.name] || 10, 27);
      var when = new Date(base.getFullYear(), base.getMonth(), day);
      if (when > today) return;                           // never future-dated
      // target debt (Auto, snowball) carries the pool; others pay the min
      var amt = d.min;
      if (d.name === 'Auto loan' && ago <= 11) amt = d.min + 250 + 150 + 35;   // freed mins + extra
      if (d.die != null && ago === d.die) amt = d.min + 40;                     // final knockout
      var note = '';
      if (d.name === 'Auto loan') note = 'target — gets the pool';
      if (d.name === 'Visa ····4417') note = 'minimum while Auto dies';
      out.push([when, d.name, amt, note]);
    });
  }
  return out;
}

// Stylobate contributions (Progress) — [date, amount].
function generateMockContributions_() {
  var out = [], today = new Date();
  MOCK.contributions.forEach(function (c) {
    var when = new Date(today.getFullYear(), today.getMonth() - c[0], 12);
    if (when <= today) out.push([when, c[1]]);
  });
  return out;
}

// ── _Engine — all projection math (hidden). Registry mirror + six
// schedule blocks (snowball · avalanche · custom · +$50 · +$100 ·
// minimums-only baseline), each PAYOFF_HORIZON_MONTHS × DEBT_CAPACITY.
// Every cell IF-guarded for empty slots; zero #ERROR! in blank mode. ──
function buildEngine_(sheet, mode) {
  ensureGrid_(sheet, ENG_LASTROW + 6, ENG.COL_INT + 2);

  // labels down col A so the hidden tab is legible if a buyer unhides it
  var labels = {};
  labels[ENG.ROW_COLIDX] = 'slot #'; labels[ENG.ROW_BAL0] = 'balance now';
  labels[ENG.ROW_R] = 'monthly rate'; labels[ENG.ROW_MIN] = 'minimum';
  labels[ENG.ROW_EXISTS] = 'exists'; labels[ENG.ROW_ALIVE] = 'alive';
  labels[ENG.ROW_INPLAN] = 'in plan'; labels[ENG.ROW_CONSUMER] = 'consumer';
  labels[ENG.ROW_START] = 'start bal'; labels[ENG.ROW_ORDERVAL] = 'order val';
  labels[ENG.ROW_RANK_SNOW] = 'rank snowball'; labels[ENG.ROW_RANK_AVAL] = 'rank avalanche';
  labels[ENG.ROW_RANK_CUST] = 'rank custom'; labels[ENG.ROW_RANK_ACTIVE] = 'rank active';
  labels[ENG.ROW_ACTIVE_IDX] = 'active idx'; labels[ENG.ROW_ACTIVE_PAYOFF] = 'active payoff mo';
  labels[ENG.ROW_ACTIVE_INT] = 'active interest'; labels[ENG.ROW_SCALARS] = 'scalars →';
  Object.keys(labels).forEach(function (rw) {
    sheet.getRange(Number(rw), 1).setValue(labels[rw]).setFontColor(BRAND.CAPTION).setFontSize(9);
  });

  var SL = function (s) { return columnToLetter_(ENG.SLOT_FIRST + s); };   // B..Z
  var slotRow = function (rowNum, fn) {
    var a = [];
    for (var s = 0; s < DEBT_CAPACITY; s++) a.push(fn(s, SL(s), DEBT.FIRST_ROW + s));
    sheet.getRange(rowNum, ENG.SLOT_FIRST, 1, DEBT_CAPACITY).setFormulas([a]);
  };
  var DB = "'" + TABS.DEBTS + "'";

  // colidx 1..25 (values)
  var idx = []; for (var s = 0; s < DEBT_CAPACITY; s++) idx.push(s + 1);
  sheet.getRange(ENG.ROW_COLIDX, ENG.SLOT_FIRST, 1, DEBT_CAPACITY).setValues([idx]);

  // mirror rows
  slotRow(ENG.ROW_BAL0, function (s, L, dr) { return '=IF(' + DB + '!$K$' + dr + '="",0,MAX(0,' + DB + '!$K$' + dr + '))'; });
  slotRow(ENG.ROW_R, function (s, L, dr) { return '=IF(' + DB + '!$E$' + dr + '="",0,' + DB + '!$E$' + dr + '/12)'; });
  slotRow(ENG.ROW_MIN, function (s, L, dr) { return '=IF(' + DB + '!$F$' + dr + '="",0,' + DB + '!$F$' + dr + ')'; });
  slotRow(ENG.ROW_EXISTS, function (s, L, dr) { return '=IF(' + DB + '!$B$' + dr + '="",0,1)'; });
  slotRow(ENG.ROW_ALIVE, function (s, L, dr) { return '=IF(AND(' + L + '$' + ENG.ROW_EXISTS + '=1,' + L + '$' + ENG.ROW_BAL0 + '>0.005),1,0)'; });
  slotRow(ENG.ROW_INPLAN, function (s, L, dr) { return '=IF(AND(' + L + '$' + ENG.ROW_ALIVE + '=1,' + DB + '!$H$' + dr + '<>"No"),1,0)'; });
  slotRow(ENG.ROW_CONSUMER, function (s, L, dr) { return '=IF(AND(' + L + '$' + ENG.ROW_EXISTS + '=1,' + DB + '!$H$' + dr + '<>"No"),1,0)'; });
  slotRow(ENG.ROW_START, function (s, L, dr) { return '=IF(' + DB + '!$S$' + dr + '="",0,' + DB + '!$S$' + dr + ')'; });
  slotRow(ENG.ROW_ORDERVAL, function (s, L, dr) { return '=IF(' + L + '$' + ENG.ROW_INPLAN + '=0,"",IF(' + DB + '!$I$' + dr + '="",1000000,' + DB + '!$I$' + dr + '))'; });

  var IP = '$B$' + ENG.ROW_INPLAN + ':$Z$' + ENG.ROW_INPLAN;
  var B0 = '$B$' + ENG.ROW_BAL0 + ':$Z$' + ENG.ROW_BAL0;
  var RR = '$B$' + ENG.ROW_R + ':$Z$' + ENG.ROW_R;
  var OV = '$B$' + ENG.ROW_ORDERVAL + ':$Z$' + ENG.ROW_ORDERVAL;
  var CI = '$B$' + ENG.ROW_COLIDX + ':$Z$' + ENG.ROW_COLIDX;
  slotRow(ENG.ROW_RANK_SNOW, function (s, L) {
    return '=IF(' + L + '$' + ENG.ROW_INPLAN + '=0,"",1+SUMPRODUCT((' + IP + '=1)*(' + B0 + '<' + L + '$' + ENG.ROW_BAL0 + '))+SUMPRODUCT((' + IP + '=1)*(' + B0 + '=' + L + '$' + ENG.ROW_BAL0 + ')*(' + CI + '<' + L + '$' + ENG.ROW_COLIDX + ')))';
  });
  slotRow(ENG.ROW_RANK_AVAL, function (s, L) {
    return '=IF(' + L + '$' + ENG.ROW_INPLAN + '=0,"",1+SUMPRODUCT((' + IP + '=1)*(' + RR + '>' + L + '$' + ENG.ROW_R + '))+SUMPRODUCT((' + IP + '=1)*(' + RR + '=' + L + '$' + ENG.ROW_R + ')*(' + CI + '<' + L + '$' + ENG.ROW_COLIDX + ')))';
  });
  slotRow(ENG.ROW_RANK_CUST, function (s, L) {
    return '=IF(' + L + '$' + ENG.ROW_INPLAN + '=0,"",1+SUMPRODUCT((' + IP + '=1)*(' + OV + '<' + L + '$' + ENG.ROW_ORDERVAL + '))+SUMPRODUCT((' + IP + '=1)*(' + OV + '=' + L + '$' + ENG.ROW_ORDERVAL + ')*(' + B0 + '<' + L + '$' + ENG.ROW_BAL0 + '))+SUMPRODUCT((' + IP + '=1)*(' + OV + '=' + L + '$' + ENG.ROW_ORDERVAL + ')*(' + B0 + '=' + L + '$' + ENG.ROW_BAL0 + ')*(' + CI + '<' + L + '$' + ENG.ROW_COLIDX + ')))';
  });
  slotRow(ENG.ROW_RANK_ACTIVE, function (s, L) {
    return '=IF(' + L + '$' + ENG.ROW_INPLAN + '=0,"",CHOOSE($B$' + ENG.ROW_ACTIVE_IDX + ',' + L + '$' + ENG.ROW_RANK_SNOW + ',' + L + '$' + ENG.ROW_RANK_AVAL + ',' + L + '$' + ENG.ROW_RANK_CUST + '))';
  });

  // active strategy index (1/2/3) from cc_active_strategy
  sheet.getRange(ENG.ROW_ACTIVE_IDX, 2).setFormula('=IFERROR(IF(LEFT(cc_active_strategy,4)="Aval",2,IF(LEFT(cc_active_strategy,2)="My",3,1)),1)');

  // six schedule blocks
  for (var i = 0; i < ENG_BLOCKS.length; i++) writeEngineBlock_(sheet, i);

  // active per-slot payoff + interest (CHOOSE among the three base blocks)
  var snowTop = engBlockByKey_('snow').top, avalTop = engBlockByKey_('aval').top, custTop = engBlockByKey_('cust').top;
  slotRow(ENG.ROW_ACTIVE_PAYOFF, function (s, L) {
    return '=IF(' + L + '$' + ENG.ROW_EXISTS + '=0,"",CHOOSE($B$' + ENG.ROW_ACTIVE_IDX + ',' + L + (snowTop + 1) + ',' + L + (avalTop + 1) + ',' + L + (custTop + 1) + '))';
  });
  slotRow(ENG.ROW_ACTIVE_INT, function (s, L) {
    return '=IF(' + L + '$' + ENG.ROW_EXISTS + '=0,"",CHOOSE($B$' + ENG.ROW_ACTIVE_IDX + ',' + L + (snowTop + 2) + ',' + L + (avalTop + 2) + ',' + L + (custTop + 2) + '))';
  });

  // scalars (row 18) — the figures every view tab reads
  var sr = ENG.ROW_SCALARS, st = function (k) { return engBlockByKey_(k).top; };
  var scalars = {
    B: '=CHOOSE($B$' + ENG.ROW_ACTIVE_IDX + ',D' + st('snow') + ',D' + st('aval') + ',D' + st('cust') + ')',
    C: '=CHOOSE($B$' + ENG.ROW_ACTIVE_IDX + ',E' + st('snow') + ',E' + st('aval') + ',E' + st('cust') + ')',
    D: '=CHOOSE($B$' + ENG.ROW_ACTIVE_IDX + ',F' + st('snow') + ',F' + st('aval') + ',F' + st('cust') + ')',
    E: '=CHOOSE($B$' + ENG.ROW_ACTIVE_IDX + ',G' + st('snow') + ',G' + st('aval') + ',G' + st('cust') + ')',
    F: '=E' + st('base'),
    G: '=C' + st('base'),
    H: '=MAX(0,$F$' + sr + '-$C$' + sr + ')',
    I: '=D' + st('p50'),
    J: '=D' + st('p100'),
    K: '=MAX(0,$B$' + sr + '-$I$' + sr + ')',
    L: '=MAX(0,$B$' + sr + '-$J$' + sr + ')',
    M: '=SUMPRODUCT($B$' + ENG.ROW_CONSUMER + ':$Z$' + ENG.ROW_CONSUMER + ',$B$' + ENG.ROW_BAL0 + ':$Z$' + ENG.ROW_BAL0 + ')',
    N: '=SUMPRODUCT($B$' + ENG.ROW_CONSUMER + ':$Z$' + ENG.ROW_CONSUMER + ',$B$' + ENG.ROW_START + ':$Z$' + ENG.ROW_START + '-$B$' + ENG.ROW_BAL0 + ':$Z$' + ENG.ROW_BAL0 + ')',
    O: '=SUMPRODUCT($B$' + ENG.ROW_CONSUMER + ':$Z$' + ENG.ROW_CONSUMER + ',$B$' + ENG.ROW_START + ':$Z$' + ENG.ROW_START + ')',
    P: '=IF(SUMPRODUCT($B$' + ENG.ROW_INPLAN + ':$Z$' + ENG.ROW_INPLAN + ')=0,"—",IF($B$' + sr + '>=' + PAYOFF_HORIZON_MONTHS + ',"beyond horizon",TEXT(EDATE(cc_engine_anchor,$B$' + sr + '),"mmm yyyy")))'
  };
  Object.keys(scalars).forEach(function (c) { sheet.getRange(c + sr).setFormula(scalars[c]); });

  // active monthly-total timeline (col AE) — the balance line The Plan reads
  var snowD = ENG_DATA0(engBlockByKey_('snow').top), avalD = ENG_DATA0(engBlockByKey_('aval').top), custD = ENG_DATA0(engBlockByKey_('cust').top);
  var tl = [];
  for (var k = 0; k <= PAYOFF_HORIZON_MONTHS; k++) tl.push(['=CHOOSE($B$' + ENG.ROW_ACTIVE_IDX + ',AC' + (snowD + k) + ',AC' + (avalD + k) + ',AC' + (custD + k) + ')']);
  sheet.getRange(snowD, 31, tl.length, 1).setFormulas(tl);
  ENG.TIMELINE_FIRST = snowD; ENG.TIMELINE_LAST = snowD + PAYOFF_HORIZON_MONTHS;

  SpreadsheetApp.flush();
}

// One schedule block at row `top`. SUMMARY row (top) · PAYOFF row (top+1) ·
// INT row (top+2) · spare · 121 data rows (m=0..120) × 25 slots + helpers
// AA target · AB pool · AC in-plan total · AD interest-this-month.
function writeEngineBlock_(sheet, blockIdx) {
  var def = ENG_BLOCKS[blockIdx], top = engBlockTop_(blockIdx);
  var DATA0 = top + ENG.BLOCK_DATA_OFFSET, DEND = DATA0 + PAYOFF_HORIZON_MONTHS;
  var rankRow = def.rankRow, pool = def.pool, extraA1 = '$B$' + top;
  var SL = function (s) { return columnToLetter_(ENG.SLOT_FIRST + s); };
  var IP = '$B$' + ENG.ROW_INPLAN + ':$Z$' + ENG.ROW_INPLAN;
  var MN = '$B$' + ENG.ROW_MIN + ':$Z$' + ENG.ROW_MIN;
  var RR = '$B$' + ENG.ROW_R + ':$Z$' + ENG.ROW_R;

  sheet.getRange(top, 1).setValue(def.label).setFontColor(BRAND.GOLD).setFontSize(9).setFontWeight('bold');
  // extra used by this block
  var extraF = !pool ? '=0' : (def.extra === 'base' ? '=cc_extra_monthly' : '=cc_extra_monthly+' + def.extra);
  sheet.getRange(top, 2).setFormula(extraF);
  // summary scalars on the header row
  sheet.getRange(top, 3).setFormula('=$AC$' + DEND);                                  // remain at horizon
  sheet.getRange(top, 4).setFormula('=SUMPRODUCT(--($AC$' + DATA0 + ':$AC$' + DEND + '>0.005))');   // months to zero
  sheet.getRange(top, 5).setFormula('=SUM($AD$' + (DATA0 + 1) + ':$AD$' + DEND + ')');               // total interest
  sheet.getRange(top, 6).setFormula('=IFERROR(MINIFS($B$' + (top + 1) + ':$Z$' + (top + 1) + ',' + IP + ',1,$B$' + (top + 1) + ':$Z$' + (top + 1) + ',"<' + PAYOFF_HORIZON_MONTHS + '"),0)');  // first kill month
  sheet.getRange(top, 7).setFormula('=IFERROR(INDEX(cc_debts_list,MATCH($F$' + top + ',$B$' + (top + 1) + ':$Z$' + (top + 1) + ',0)),"")');                                                  // first kill name

  // PAYOFF + INT rows (per slot)
  var payRow = [], intRow = [];
  for (var s = 0; s < DEBT_CAPACITY; s++) {
    var L = SL(s);
    payRow.push('=IF(' + L + '$' + ENG.ROW_EXISTS + '=0,"",SUMPRODUCT(--(' + L + DATA0 + ':' + L + (DATA0 + 119) + '>0.005)))');
    intRow.push('=IF(' + L + '$' + ENG.ROW_EXISTS + '=0,"",' + L + '$' + ENG.ROW_R + '*SUM(' + L + DATA0 + ':' + L + (DATA0 + 119) + '))');
  }
  sheet.getRange(top + 1, ENG.SLOT_FIRST, 1, DEBT_CAPACITY).setFormulas([payRow]);
  sheet.getRange(top + 2, ENG.SLOT_FIRST, 1, DEBT_CAPACITY).setFormulas([intRow]);

  // month index col A
  var mIdx = []; for (var m = 0; m <= PAYOFF_HORIZON_MONTHS; m++) mIdx.push([m]);
  sheet.getRange(DATA0, 1, mIdx.length, 1).setValues(mIdx).setFontColor(BRAND.CAPTION).setFontSize(8);

  // data region B..AD (cols 2..30) — slab-written
  var all = [];
  for (var k = 0; k <= PAYOFF_HORIZON_MONTHS; k++) {
    var dr = DATA0 + k, prevR = dr - 1, row = [];
    for (var sc = 0; sc < DEBT_CAPACITY; sc++) {
      var LL = SL(sc);
      if (k === 0) { row.push('=' + LL + '$' + ENG.ROW_BAL0); continue; }
      var prev = LL + prevR;
      var pay = pool
        ? (LL + '$' + ENG.ROW_MIN + '+IF(AND(' + LL + '$' + ENG.ROW_INPLAN + '=1,' + LL + '$' + rankRow + '=$AA' + dr + '),$AB' + dr + ',0)')
        : (LL + '$' + ENG.ROW_MIN);
      row.push('=IF(' + prev + '<=0.005,0,MAX(0,' + prev + '*(1+' + LL + '$' + ENG.ROW_R + ')-(' + pay + ')))');
    }
    // AA target
    row.push((k === 0 || !pool) ? '' : '=MINIFS($B$' + rankRow + ':$Z$' + rankRow + ',B' + prevR + ':Z' + prevR + ',">0.005",' + IP + ',1)');
    // AB pool
    row.push((k === 0 || !pool) ? '' : '=' + extraA1 + '+SUMIFS(' + MN + ',B' + prevR + ':Z' + prevR + ',"<=0.005",' + IP + ',1)');
    // AC in-plan total
    row.push('=SUMIFS(B' + dr + ':Z' + dr + ',' + IP + ',1)');
    // AD interest this month
    row.push(k === 0 ? '' : '=SUMPRODUCT(' + IP + ',' + RR + ',B' + prevR + ':Z' + prevR + ')');
    all.push(row);
  }
  forEachSlab_(0, all.length, 40, function (startK, nRows) {
    sheet.getRange(DATA0 + startK, ENG.SLOT_FIRST, nRows, 29).setFormulas(all.slice(startK, startK + nRows));
  });
}

/**
 * Column & Co. — The Payoff v1.0
 * 05 · View tabs — Start Here, Dashboard, The Plan, Compare, Progress,
 * The Hall. (Scaffolded here with chrome + the control cells the engine
 * reads; the gamified surfaces are painted in section 12.)
 */

// ── The banded L-layout (the Sheets-native translation) ───────────────
// Rows are shared across a sheet and columns are shared down it, so pixel
// art and text tables fight when they share a grid — that was the root of
// both the "merge soup" and the chunky temple. Resolution:
//   · TEXT lives on ~11 REAL columns at sibling widths (B..L, ~608px) —
//     real tables, near-zero merging (kpiCard_ triplets are the sanctioned
//     exception).
//   · The MONUMENT lives in its own narrow-column zone (N..AM, 26 × 12px)
//     inside exactly ONE short-row band per tab (10–12px rows). Inside
//     that band the text zone holds only FULL-BAND-HEIGHT merges (a
//     sparkline panel, an italic caption) — never per-row text. A merge
//     spanning the whole band is immune to short rows.
var ZONES = {
  COLS: 40, LAST: 'AN',
  MARGIN_W: 12, GUTTER_W: 16, MON_CELL_W: 12,
  TEXT_FIRST: 2, TEXT_LAST: 12,           // B..L (11 text columns)
  GUTTER: 13,                              // M
  MON_FIRST: 14, MON_LAST: 39              // N..AM (26 monument columns)
};
// default text-zone widths (B..L) — per-tab overrides passed to zonesSetup_
var ZONE_TEXT_WIDTHS = [140, 72, 72, 68, 60, 52, 44, 32, 24, 22, 22];   // = 608

function zonesSetup_(sheet, tabName, subLabel, endRow, textWidths) {
  ensureGrid_(sheet, endRow, ZONES.COLS);
  chrome_(sheet, tabName, ZONES.LAST, subLabel, ZONES.MON_FIRST);
  sheet.setColumnWidth(1, ZONES.MARGIN_W);
  var tw = textWidths || ZONE_TEXT_WIDTHS;
  for (var i = 0; i < 11; i++) sheet.setColumnWidth(ZONES.TEXT_FIRST + i, tw[i]);
  sheet.setColumnWidth(ZONES.GUTTER, ZONES.GUTTER_W);
  for (var c = ZONES.MON_FIRST; c <= ZONES.MON_LAST; c++) sheet.setColumnWidth(c, ZONES.MON_CELL_W);
  sheet.setColumnWidth(ZONES.COLS, ZONES.MARGIN_W);
  // Parchment backdrop, NOT registered as themable — the fixed stone-and-
  // gold monument sits on it and must never recolor with the palette (05).
  sheet.getRange(CONTENT_START_ROW, 1, endRow - CONTENT_START_ROW + 1, ZONES.COLS).setBackground(BRAND.PARCHMENT);
}

// Fine full-width canvas — Compare only (its content is all monuments +
// merges; it was never the merge-soup tab). Also still used by The Hall.
var GRID = { COLS: 52, LAST: 'AZ', CELL_W: 18 };
var COMPARE_GRID = { cols: 64, cellW: 15 };  // 960px — two lanes side by side
var CARD_GRID = { cols: 30, cellW: 32 };     // 960px — the Hall's card canvas
// Progress contributions ledger lives at FIXED rows so the SAVED line and
// the Log-a-contribution menu action always target it (the temple above is
// a fixed height — debts are columns, not rows — so it never reaches here).
var PROG_LEDGER_TOP = 44, PROG_LEDGER_ROWS = 24;

function useGrid_(cols, cellW) { GRID = { COLS: cols, LAST: columnToLetter_(cols), CELL_W: cellW }; return GRID; }
function canvasSetup_(sheet, tabName, subLabel, endRow, grid) {
  grid = grid || CARD_GRID;
  useGrid_(grid.cols, grid.cellW);
  ensureGrid_(sheet, endRow, GRID.COLS);
  chrome_(sheet, tabName, GRID.LAST, subLabel);
  for (var c = 1; c <= GRID.COLS; c++) sheet.setColumnWidth(c, GRID.CELL_W);
  sheet.getRange(CONTENT_START_ROW, 1, endRow - CONTENT_START_ROW + 1, GRID.COLS).setBackground(BRAND.PARCHMENT);
}
// content area = cols 2 .. COLS-1 (one margin column each side) — canvas tabs
function contentCols_() { return { first: 2, last: GRID.COLS - 1, span: GRID.COLS - 2 }; }
function evenCols_(n, gap) {
  gap = (gap == null) ? 1 : gap;
  var ca = contentCols_(), w = Math.floor((ca.span - gap * (n - 1)) / n), out = [], c = ca.first;
  for (var i = 0; i < n; i++) { out.push({ col: c, w: w }); c += w + gap; }
  return out;
}
function weightedCols_(weights, gap) {
  gap = gap || 0;
  var ca = contentCols_(), sum = weights.reduce(function (a, b) { return a + b; }, 0);
  var avail = ca.span - gap * (weights.length - 1), out = [], c = ca.first;
  for (var i = 0; i < weights.length; i++) {
    var w = (i === weights.length - 1) ? (ca.last - c + 1) : Math.max(1, Math.round(avail * weights[i] / sum));
    out.push({ col: c, w: w }); c += w + gap;
  }
  return out;
}

// ── Temple anchor rows — ONE source of truth per monument, consumed by the
// builders AND onEdit / replayTemple_ / runTheRace (a drifted literal here
// once pointed the replay at the KPI zone). Band = the short-row region.
var ANCHOR = {
  DASH_BAND_TOP: 31, DASH_TEMPLE_H: 12,
  PLAN_BAND_TOP: 33, PLAN_TEMPLE_H: 12,
  PROG_BAND_TOP: 18, PROG_TEMPLE_H: 10,
  CMP_BAND_TOP: 22, CMP_TEMPLE_H: 12
};

function buildPlan_(sheet, mode)      { zonesSetup_(sheet, TABS.PLAN, '', 58, [26, 200, 60, 44, 56, 54, 56, 44, 40, 32, 30]); buildPlanBody_(sheet, mode); }
function buildCompare_(sheet, mode)   { canvasSetup_(sheet, TABS.COMPARE, 'SAME MONEY · TWO ROADS', 48, COMPARE_GRID); buildCompareBody_(sheet, mode); }
function buildProgress_(sheet, mode)  { zonesSetup_(sheet, TABS.PROGRESS, 'THE STYLOBATE + YOUR STREAKS', 74, [104, 60, 48, 14, 88, 60, 48, 14, 88, 60, 48]); buildProgressBody_(sheet, mode); }
function buildDashboard_(sheet, mode) { zonesSetup_(sheet, TABS.DASHBOARD, 'YOUR TEMPLE TODAY', 64, [118, 56, 50, 52, 52, 14, 84, 62, 52, 52, 52]); buildDashboardBody_(sheet, mode); }
function buildHall_(sheet, mode)      { canvasSetup_(sheet, TABS.HALL, 'STEP INSIDE THE TEMPLE', 70, CARD_GRID); buildHallBody_(sheet, mode); }
function buildStartHere_(sheet, mode) {
  ensureGrid_(sheet, 32, 12);
  chrome_(sheet, TABS.START, 'L', 'SETUP', 9);
  setColWidths_(sheet, [24, 200, 90, 90, 90, 90, 90, 66, 66, 66, 60, 28]);
  sheet.getRange(CONTENT_START_ROW, 1, 27, 12).setBackground(BRAND.PARCHMENT);
  buildStartBody_(sheet, mode);
}

/**
 * Column & Co. — The Payoff v1.0
 * 10 · Menu + triggers.
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
  menu.addItem('Add a debt…', 'addDebt');
  menu.addItem('Log a payment…', 'logPayment');
  menu.addItem('Log a Stylobate contribution…', 'logContribution');
  menu.addSeparator();
  menu.addItem('Watch the build', 'watchTheBuild');
  menu.addItem('Run the race (Compare)', 'runTheRace');
  menu.addItem('Frame a win for sharing…', 'frameAWin');
  menu.addSeparator();
  menu.addItem('Import Bank CSV…', 'importPayments');
  menu.addItem('Renumber Payments', 'renumberPayments');
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
  SYSTEM_TABS.forEach(function (n) { var sh = ss.getSheetByName(n); if (sh) sh.hideSheet(); });
}

function onEdit(e) {
  if (!e || !e.range) return;
  var sheet = e.range.getSheet();
  var name = sheet.getName();
  var row = e.range.getRow(), col = e.range.getColumn();

  // Debts: re-typing the Statement balance re-anchors the true-up to today
  // (stamps the hidden Anchor) and seeds the Start balance on first entry.
  if (name === TABS.DEBTS && col === DEBT.COL_STMT && row >= DEBT.FIRST_ROW && row <= DEBT_LAST_ROW) {
    var v = e.range.getValue();
    if (v !== '' && v != null) {
      sheet.getRange(row, DEBT.COL_ANCHOR).setValue(new Date());
      if (!sheet.getRange(row, DEBT.COL_START).getValue()) sheet.getRange(row, DEBT.COL_START).setValue(v);
    }
  }

  // The Plan: scrubbing the Time Machine (C32) re-paints the temple at that
  // month on the active plan. (Live only; the build paints the default view.)
  if (name === TABS.PLAN && row === 32 && col === 3) {
    try {
      var mP = Number(e.range.getValue()) || 0;
      repaintTempleAt_(sheet, liveTempleInfo_(SpreadsheetApp.getActive()), mP,
        { bandTop: ANCHOR.PLAN_BAND_TOP, H: ANCHOR.PLAN_TEMPLE_H, caption: 'THE TIME MACHINE · STANDING IN MONTH ' + mP });
    } catch (e3) {}
  }
  // Compare: the shared race month (C10) re-paints both lanes.
  if (name === TABS.COMPARE && row === 10 && col === 3) {
    try {
      var ssc = SpreadsheetApp.getActive(), mm = Number(e.range.getValue()) || 0;
      repaintTempleAt_(sheet, liveTempleInfo_(ssc, 'snowball'), mm,
        { bandTop: ANCHOR.CMP_BAND_TOP, H: ANCHOR.CMP_TEMPLE_H, win: [2, 31], caption: 'SNOWBALL · MONTH ' + mm + ' OF THE RACE' });
      repaintTempleAt_(sheet, liveTempleInfo_(ssc, 'avalanche'), mm,
        { bandTop: ANCHOR.CMP_BAND_TOP, H: ANCHOR.CMP_TEMPLE_H, win: [34, 63], caption: 'AVALANCHE · MONTH ' + mm + ' OF THE RACE' });
    } catch (e4) {}
  }
}

/**
 * Column & Co. — The Payoff v1.0
 * 11 · Theme engine. applyTheme(id) repaints the content area from the
 * theme map. Brand chrome and the fixed stone-and-gold monument are never
 * in the map, so they stay locked.
 */
function buildThemeMenu_() {
  var ui = SpreadsheetApp.getUi();
  var menu = ui.createMenu('Apply Theme');
  var active = PropertiesService.getDocumentProperties().getProperty('cc_active_palette') || DEFAULT_PALETTE;
  PALETTES.forEach(function (p) {
    menu.addItem((p.id === active ? '✓ ' : '   ') + p.name, '_applyTheme_' + sanitizeId_(p.id));
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
    paintRole_(sh, roles.mid, pal.mid);
    paintRole_(sh, roles.accent, pal.accent);
  });
  PropertiesService.getDocumentProperties().setProperty('cc_active_palette', paletteId);
  var cfg = ss.getSheetByName(TABS.CONFIG);
  if (cfg) cfg.getRange('B40').setValue(paletteId);
  buildMenu_();
  ss.toast('Theme applied: ' + pal.name, CC.BRAND, 3);
}
function paintRole_(sheet, a1List, color) {
  if (!a1List) return;
  a1List.forEach(function (a1) { try { sheet.getRange(a1).setBackground(color); } catch (e) {} });
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

// ── Menu-item handlers ────────────────────────────────────────────────
function addDebt() {
  var ui = SpreadsheetApp.getUi(), ss = SpreadsheetApp.getActive();
  var debts = ss.getSheetByName(TABS.DEBTS);
  var resp = ui.prompt('Add a debt', 'Debt name (e.g. "Visa ····1234"):', ui.ButtonSet.OK_CANCEL);
  if (resp.getSelectedButton() !== ui.Button.OK) return;
  var name = String(resp.getResponseText() || '').trim();
  if (!name) return;
  var col = debts.getRange(DEBT.FIRST_ROW, DEBT.COL_NAME, DEBT_CAPACITY, 1).getValues();
  for (var i = 0; i < col.length; i++) {
    if (String(col[i][0]).trim().toLowerCase() === name.toLowerCase()) { ui.alert('"' + name + '" is already listed.'); return; }
    if (!col[i][0]) {
      var row = DEBT.FIRST_ROW + i;
      debts.getRange(row, DEBT.COL_NAME).setValue(name);
      debts.getRange(row, DEBT.COL_INPLAN).setValue('Yes');
      debts.activate(); debts.getRange(row, DEBT.COL_STMT).activate();
      ss.toast('Added "' + name + '" — fill in the statement balance, APR, and minimum →', CC.BRAND, 5);
      return;
    }
  }
  ui.alert('The registry is full (' + DEBT_CAPACITY + ' slots). Raise DEBT_CAPACITY and rebuild.');
}

function logPayment() {
  var ui = SpreadsheetApp.getUi(), ss = SpreadsheetApp.getActive();
  var r1 = ui.prompt('Log a payment', 'Debt name (exactly as on the Debts tab):', ui.ButtonSet.OK_CANCEL);
  if (r1.getSelectedButton() !== ui.Button.OK) return;
  var debt = String(r1.getResponseText() || '').trim(); if (!debt) return;
  var r2 = ui.prompt('Log a payment', 'Amount paid to "' + debt + '":', ui.ButtonSet.OK_CANCEL);
  if (r2.getSelectedButton() !== ui.Button.OK) return;
  var amt = cleanNum_(r2.getResponseText()); if (amt == null) { ui.alert('Type a number.'); return; }
  var pay = ss.getSheetByName(TABS.PAYMENTS), row = findFirstEmptyRow_(pay, PAY.COL_DATE, PAY.FIRST_ROW, PAYMENTS_CAPACITY);
  pay.getRange(row, PAY.COL_DATE).setValue(new Date());
  pay.getRange(row, PAY.COL_DEBT).setValue(debt);
  pay.getRange(row, PAY.COL_AMOUNT).setValue(Math.abs(amt));
  ss.toast('Logged ' + money_(Math.abs(amt)) + ' to ' + debt + ' — your temple just moved.', CC.BRAND, 5);
}

function logContribution() {
  var ui = SpreadsheetApp.getUi(), ss = SpreadsheetApp.getActive();
  var prog = ss.getSheetByName(TABS.PROGRESS);
  var resp = ui.prompt('Log a Stylobate contribution', 'Amount to lay in stone (negative to draw down):', ui.ButtonSet.OK_CANCEL);
  if (resp.getSelectedButton() !== ui.Button.OK) return;
  var amt = cleanNum_(resp.getResponseText()); if (amt == null) { ui.alert('Type a number.'); return; }
  var row = findFirstEmptyRow_(prog, LC_DATE_COL, PROG_LEDGER_TOP, PROG_LEDGER_ROWS);
  prog.getRange(row, LC_DATE_COL).setValue(new Date());
  prog.getRange(row, LC_AMT_COL).setValue(amt);
  var goal = Number(prog.getRange('C10').getValue()) || STYLOBATE_GOAL_DEFAULT;
  var saved = 0, vals = prog.getRange(PROG_LEDGER_TOP, LC_AMT_COL, PROG_LEDGER_ROWS, 1).getValues();
  vals.forEach(function (v) { saved += Number(v[0]) || 0; });
  var pct = Math.min(100, Math.round(saved / goal * 100));
  ss.toast(saved >= goal ? '✦ The Stylobate is complete — solid stone under your temple.'
    : '+' + money_(amt) + ' laid in stone · ' + pct + '% solid · ' + money_(goal - saved) + ' to go.', CC.BRAND, 5);
}

function watchTheBuild() {
  var ss = SpreadsheetApp.getActive(), dash = ss.getSheetByName(TABS.DASHBOARD);
  if (!dash) return;
  dash.activate();
  ss.toast('Watch the build — replaying your climb, course by course.', CC.BRAND, 4);
  // Live replay: re-paint the Dashboard temple at each month, past →
  // present → projection, flush + a dignified pause per frame (~0.6s).
  try { replayTemple_(dash); } catch (e) {}
}

// The Strategy Race — animate both Compare lanes month by month, snowball
// vs avalanche filling at different rates (the mockup's "Run the race").
// flush + a dignified pause per frame (~0.55s/step — not 60fps).
function runTheRace() {
  var ss = SpreadsheetApp.getActive(), cmp = ss.getSheetByName(TABS.COMPARE);
  if (!cmp) return;
  cmp.activate();
  ss.toast('Running the race — snowball vs avalanche, month by month.', CC.BRAND, 4);
  try {
    var snow = liveTempleInfo_(ss, 'snowball'), aval = liveTempleInfo_(ss, 'avalanche');
    if (!snow || !snow.debts.length) return;
    var frames = Math.min(PAYOFF_HORIZON_MONTHS, Math.max(snow.months, aval.months) + 2);
    var step = Math.max(1, Math.round(frames / 28));
    for (var m = 0; m <= frames; m += step) {
      repaintTempleAt_(cmp, snow, m, { bandTop: ANCHOR.CMP_BAND_TOP, H: ANCHOR.CMP_TEMPLE_H, win: [2, 31], caption: 'SNOWBALL · MONTH ' + m });
      repaintTempleAt_(cmp, aval, m, { bandTop: ANCHOR.CMP_BAND_TOP, H: ANCHOR.CMP_TEMPLE_H, win: [34, 63], caption: 'AVALANCHE · MONTH ' + m });
      cmp.getRange('C10').setValue(m);          // keep the race-month cell in sync
      SpreadsheetApp.flush();
      Utilities.sleep(550);
    }
    cmp.getRange('C10').setValue(Math.min(23, frames));
  } catch (e) {}
}

function frameAWin() {
  SpreadsheetApp.getActive().toast('Frame a win — open The Hall, crop a plaque or trophy card, and share it. ' +
    'No auto-post; the card + a caption are yours to screenshot.', CC.BRAND, 6);
}
function openHelpSidebar() { SpreadsheetApp.getActive().toast('Open the Start Here tab — setup is six steps.', CC.BRAND, 4); }

function findFirstEmptyRow_(sheet, col, first, count) {
  var vals = sheet.getRange(first, col, count, 1).getValues();
  for (var i = 0; i < vals.length; i++) if (!vals[i][0]) return first + i;
  return first + count;
}

/**
 * Column & Co. — The Payoff v1.0
 * 12 · View bodies + the gamified monument (Temple · Time Machine · Race ·
 * Stylobate · Hall). Painted cell grids + cell notes; the debt ramp + gold
 * are FIXED constants (05 color rule), never palette-derived, never
 * registered as themable.
 */
function clamp01_(x) { return Math.max(0, Math.min(1, x)); }
// (view formulas reference the hidden engine as \'_Engine\'!$X$nn — quoted)

// merged text cell across w columns (the building block of canvas tables)
function gridText_(sheet, row, col, w, val, opts) {
  opts = opts || {};
  var a1 = columnToLetter_(col) + row, b1 = columnToLetter_(col + w - 1) + row;
  var rng = sheet.getRange(a1 + ':' + b1);
  if (w > 1) safeMerge_(rng);
  if (opts.formula != null) rng.setFormula(opts.formula); else if (val != null) rng.setValue(val);
  rng.setFontFamily(opts.font || FONT.BODY).setFontSize(opts.size || 11)
    .setFontColor(opts.color || BRAND.BODY).setHorizontalAlignment(opts.h || 'left')
    .setVerticalAlignment(opts.v || 'middle');
  if (opts.bold) rng.setFontWeight('bold');
  if (opts.italic) rng.setFontStyle('italic');
  if (opts.bg) rng.setBackground(opts.bg);
  if (opts.format) rng.setNumberFormat(opts.format);
  if (opts.wrap) rng.setWrap(true);
  if (opts.note) rng.setNote(opts.note);
  return rng;
}
function zlabel_(sheet, row, text) {
  gridText_(sheet, row, 2, GRID.COLS - 2, text, { size: 9, bold: true, color: BRAND.GOLD });
}

/* The Temple, grammar v2 — iconic, framed, fine-grained (the Sheets-native
   render of the mockup's colonnade). Painted inside a bordered PANEL (the
   Hall treatment on deep parchment): 12px square cells, slender pillars
   whose width ∝ balance but QUANTIZED to 2/3/4 cells, no cell borders (flat
   fills at 12px granularity ARE the texture), gold reserved for capitals /
   completion. All colors are section-00 constants — never themed.

   paintTemple2_(sheet, opts):
     bandTop      first row of the short-row band (from ANCHOR)
     H            column-body rows (14 dash/plan · 12 compare · 10 progress)
     debts        [{start, balAt, color, short}] — in-plan debts only
     win          [firstCol,lastCol] panel columns (default the ZONES zone)
     wall         paint the 1-row remaining-debt tint strip (Dashboard only)
     stylobate    paint the 3-step base (Progress only) + savedFrac 0..1
     caption      plinth text (caller composes; painter golds it when done)
   Returns the row AFTER the band. Sets every band row's height itself.

   Degradation ladder past ~8 debts (interior = 24 cells): tiered widths →
   all 2-cell → no gaps → 1-cell pillars → first N + the rest dropped. */
function paintTemple2_(sheet, opts) {
  opts = opts || {};
  // repaint mode (animations + onEdit scrubs): rewrite ONLY backgrounds and
  // text values into the merges built at build time. No merge, no border,
  // no row-height, no styling calls — in the live UI, re-merging a range
  // holding the user's selection remaps it (the viewport snaps to it), and
  // per-frame row-height writes force re-layouts. Frames must never touch
  // geometry; this flag is what keeps the race scroll-stable.
  var RP = !!opts.repaint;
  var H = opts.H || 14, debts = (opts.debts || []).slice();
  var winL = (opts.win && opts.win[0]) || ZONES.MON_FIRST;
  var winR = (opts.win && opts.win[1]) || ZONES.MON_LAST;
  var panelW = winR - winL + 1;
  var inL = winL + 1, inR = winR - 1, inW = inR - inL + 1;   // interior
  var r = opts.bandTop;
  var setH = function (row, px) { if (!RP) sheet.setRowHeight(row, px); };

  // band skeleton rows
  var rows = { pad: r };
  var next = r + 1;
  if (opts.wall) { rows.wall = next; next += 1; rows.wallGap = next; next += 1; }
  rows.ped1 = next; rows.ped2 = next + 1; rows.ent = next + 2; rows.cap = next + 3;
  rows.body = next + 4; rows.base = rows.body + H; rows.pct = rows.base + 1;
  rows.legend = rows.pct + 1;
  next = rows.legend + 1;
  if (opts.stylobate) { rows.sty = next; next += 3; }
  rows.plinth = next;
  var bandEnd = rows.plinth;

  // the panel: field + gold hairline + forest plinth. On repaint, reset the
  // field ABOVE the plinth only (the plinth keeps its forest bg) and skip
  // the border — geometry and frame are already built.
  sheet.getRange(r, winL, (RP ? rows.plinth - r : bandEnd - r + 1), panelW).setBackground(PANEL.FIELD);
  if (!RP) {
    sheet.getRange(r, winL, bandEnd - r + 1, panelW)
      .setBorder(true, true, true, true, false, false, PANEL.EDGE, SpreadsheetApp.BorderStyle.SOLID);
  }
  setH(rows.pad, 6);

  // pillar widths — quantized tiers, then the degradation ladder
  var n = debts.length, widths = [], gap = 1;
  if (n) {
    var maxStart = Math.max.apply(null, debts.map(function (d) { return Math.max(1, d.start); }));
    widths = debts.map(function (d) {
      var f = Math.max(0, d.start) / maxStart;
      return f < 0.3 ? 2 : (f < 0.7 ? 3 : 4);
    });
    var tw = function () { return widths.reduce(function (a, b) { return a + b; }, 0) + gap * (n - 1); };
    if (tw() > inW) { widths = widths.map(function () { return 2; }); }
    if (tw() > inW) gap = 0;
    if (tw() > inW) { widths = widths.map(function () { return 1; }); }
    while (tw() > inW && widths.length > 1) { widths.pop(); debts = debts.slice(0, widths.length); n = widths.length; }
  }
  var TW = n ? widths.reduce(function (a, b) { return a + b; }, 0) + gap * (n - 1) : 0;
  var left = inL + Math.max(0, Math.floor((inW - TW) / 2));
  var done = n > 0 && debts.every(function (d) { return d.balAt <= 0.005; });
  var beam = done ? GOLD_ACHIEVE : STONE_ON_PANEL.BEAM;

  if (!n) {
    // empty state — the panel invites the first debt
    var mid = rows.body + Math.floor(H / 2) - 1;
    if (!RP) {
      safeMerge_(sheet.getRange(mid, inL, 1, inW));
      sheet.getRange(mid, inL).setValue('your temple rises here')
        .setFontFamily(FONT.DISPLAY).setFontStyle('italic').setFontSize(11)
        .setFontColor(BRAND.CAPTION).setHorizontalAlignment('center').setVerticalAlignment('middle');
    } else {
      sheet.getRange(mid, inL).setValue('your temple rises here');
    }
  } else {
    // wall strip — remaining debt as ghost masonry (tints, no labels)
    if (opts.wall) {
      var owed = debts.reduce(function (a, d) { return a + Math.max(0, d.balAt); }, 0);
      if (owed > 0.005) {
        var c0 = inL, remCols = inW;
        debts.forEach(function (d, i) {
          if (d.balAt <= 0.005 || remCols <= 0) return;
          var seg = Math.max(1, Math.round(inW * Math.max(0, d.balAt) / owed));
          seg = Math.min(seg, remCols);
          sheet.getRange(rows.wall, c0, 1, seg).setBackground(WALL_TINTS[i % WALL_TINTS.length]);
          c0 += seg; remCols -= seg;
        });
      }
      setH(rows.wall, 12); setH(rows.wallGap, 4);
    }
    // pediment (stepped, centered) + entablature (1-cell overhang)
    var p1w = Math.max(2, Math.round(TW * 0.34)), p2w = Math.max(3, Math.round(TW * 0.64));
    sheet.getRange(rows.ped1, left + Math.floor((TW - p1w) / 2), 1, p1w).setBackground(beam);
    sheet.getRange(rows.ped2, left + Math.floor((TW - p2w) / 2), 1, p2w).setBackground(beam);
    var entL = Math.max(inL, left - 1), entR = Math.min(inR, left + TW);
    sheet.getRange(rows.ent, entL, 1, entR - entL + 1).setBackground(beam);

    // pillars
    var c = left;
    debts.forEach(function (d, i) {
      var w = widths[i], pct = clamp01_((d.start - d.balAt) / Math.max(1, d.start));
      var fill = Math.max(0, Math.min(H, Math.round(pct * H))), paid = d.balAt <= 0.005;
      if (paid || done) sheet.getRange(rows.cap, c, 1, w).setBackground(GOLD_ACHIEVE);
      var grid = [];
      for (var rr = 0; rr < H; rr++) {
        var rowArr = [], on = rr >= (H - fill);
        for (var k = 0; k < w; k++) rowArr.push(on ? d.color : STONE_ON_PANEL.EMPTY);
        grid.push(rowArr);
      }
      sheet.getRange(rows.body, c, H, w).setBackgrounds(grid);
      sheet.getRange(rows.base, c, 1, w).setBackground(beam);
      if (w >= 2) {
        if (!RP) {
          safeMerge_(sheet.getRange(rows.pct, c, 1, w));
          sheet.getRange(rows.pct, c).setFontFamily(FONT.BODY).setFontSize(8).setFontWeight('bold')
            .setHorizontalAlignment('center').setVerticalAlignment('middle');
        }
        sheet.getRange(rows.pct, c).setValue(paid ? '✦' : Math.round(pct * 100) + '%')
          .setFontColor(paid ? '#7a5a1e' : BRAND.FOREST);
      }
      c += w + gap;
    });
    // legend: names in pillar order (no per-pillar name fitting to clip)
    if (!RP) {
      safeMerge_(sheet.getRange(rows.legend, inL, 1, inW));
      sheet.getRange(rows.legend, inL).setValue(debts.map(function (d) { return d.short; }).join('  ·  '))
        .setFontFamily(FONT.BODY).setFontSize(8).setFontColor(BRAND.CAPTION)
        .setHorizontalAlignment('center').setVerticalAlignment('middle');
    }
    // stylobate — three steps widening downward; the bottom tranche fills first
    if (opts.stylobate) {
      var sf = clamp01_(opts.savedFrac || 0);
      for (var s = 0; s < 3; s++) {              // s: 0 top … 2 bottom
        var row = rows.sty + s, stepW = Math.min(inW, TW + 2 + s * 4);
        var stepLeft = Math.max(inL, Math.min(inR - stepW + 1, left + Math.floor((TW - stepW) / 2)));
        var ft = clamp01_(sf * 3 - (2 - s));
        sheet.getRange(row, stepLeft, 1, stepW).setBackground(ft > 0 ? STONE_ON_PANEL.BEAM : STONE_ON_PANEL.SAND);
        var goldW = Math.round(stepW * ft);
        if (goldW > 0) sheet.getRange(row, stepLeft, 1, Math.min(stepW, goldW)).setBackground(GOLD_ACHIEVE);
        setH(row, 10);
      }
    }
  }

  // the plinth — forest band carrying the caption in gold small caps
  if (!RP) {
    safeMerge_(sheet.getRange(rows.plinth, winL, 1, panelW));
    sheet.getRange(rows.plinth, winL)
      .setBackground(PANEL.PLINTH).setFontFamily(FONT.BODY).setFontSize(8).setFontWeight('bold')
      .setHorizontalAlignment('center').setVerticalAlignment('middle');
  }
  sheet.getRange(rows.plinth, winL).setValue(opts.caption || '')
    .setFontColor(done ? GOLD_ACHIEVE : PANEL.PLINTH_TEXT);

  // band row heights (the short-row band; the text zone may only merge across it)
  setH(rows.ped1, 10); setH(rows.ped2, 10); setH(rows.ent, 10); setH(rows.cap, 8);
  for (var b = rows.body; b < rows.body + H; b++) setH(b, 12);
  setH(rows.base, 8); setH(rows.pct, 13); setH(rows.legend, 12); setH(rows.plinth, 16);
  return bandEnd + 1;
}

// the consumer debts as temple columns at month M on a strategy (mock only)
function mockTempleDebts_(monthM, strategy) {
  var inPlan = mockInPlanDebts_(), rank = rankDebts_(inPlan, strategy);
  var sched = simulateSchedule_(inPlan, rank, MOCK.extra), byName = {};
  inPlan.forEach(function (d, i) { byName[d.name] = sched.bal[i]; });
  var SHORT = { 'Rooms+ Store Card': 'Store', 'Medical bill': 'Medical', 'Visa ····4417': 'Visa', 'Auto loan': 'Auto', 'Student loan': 'Student' };
  var out = [], ci = 0;
  MOCK.debts.forEach(function (d) {
    if (!d[6]) return;                               // out-of-plan: not a column
    var arr = byName[d[0]], balAt = arr ? arr[Math.min(monthM, arr.length - 1)] : 0;
    out.push({ start: d[2], balAt: balAt, color: debtColor_(ci), short: SHORT[d[0]] || d[0] });
    ci++;
  });
  return out;
}

// the named yellow controls on The Plan — SINGLE real cells (no merged
// inputs; a merged dropdown clips its arrow and reads as a broken control)
function planControls_(sheet, mode) {
  var EN = "'_Engine'", sr = ENG.ROW_SCALARS;
  gridText_(sheet, 9, 3, 1, 'STRATEGY', { size: 9, bold: true, color: BRAND.CANOPY });
  gridText_(sheet, 9, 4, 1, 'EXTRA/MO', { size: 9, bold: true, color: BRAND.CANOPY });
  gridText_(sheet, 9, 8, 5, 'WHAT AN EXTRA $50 OR $100 BUYS', { size: 9, bold: true, color: BRAND.CANOPY });
  var strat = SpreadsheetApp.newDataValidation().requireValueInList(STRATEGIES, true).build();
  setCell_(sheet, 'C10', { value: STRATEGY_DEFAULT, bg: BRAND.YELLOW, font: FONT.BODY, size: 10, bold: true, color: BRAND.FOREST, h: 'left' })
    .setBorder(true, true, true, true, false, false, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID).setDataValidation(strat);
  setCell_(sheet, 'D10', { value: (mode === 'mock') ? MOCK.extra : 0, bg: BRAND.YELLOW, font: FONT.BODY, size: 12, bold: true, color: BRAND.FOREST, format: '$#,##0', h: 'center' })
    .setBorder(true, true, true, true, false, false, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);
  // what-if chips (live from the scenario blocks), stacked right of the inputs
  gridText_(sheet, 10, 8, 5, null, { h: 'center', size: 10, bold: true, color: '#7d6420', bg: BRAND.CHIP_FAIR_BG,
    formula: '="+$' + SCENARIO_EXTRAS[0] + '/mo  →  "&' + EN + '!$K$' + sr + '&" months sooner"' });
  gridText_(sheet, 11, 8, 5, null, { h: 'center', size: 10, bold: true, color: '#7d6420', bg: BRAND.CHIP_FAIR_BG,
    formula: '="+$' + SCENARIO_EXTRAS[1] + '/mo  →  "&' + EN + '!$L$' + sr + '&" months sooner"' });
}

function buildPlanBody_(sheet, mode) {
  titleRow_(sheet, ZONES.LAST, 'The Plan',
    'Pick a strategy and your extra payment. This is exactly what you owe, the order you attack it, and the month you are free.');
  planControls_(sheet, mode);
  var sr = ENG.ROW_SCALARS, EN = "'_Engine'", DB = "'" + TABS.DEBTS + "'";

  // headline forest band (rows 13-16): the debt-free date is the hero
  sheet.getRange(13, 2, 4, ZONES.COLS - 2).setBackground(BRAND.FOREST);
  gridText_(sheet, 13, 3, 4, 'DEBT-FREE ON THIS PLAN', { size: 9, bold: true, color: BRAND.GOLD });
  safeMerge_(sheet.getRange(14, 3, 2, 4));
  sheet.getRange(14, 3).setFormula('=' + EN + '!$P$' + sr)
    .setFontFamily(FONT.DISPLAY).setFontSize(30).setFontWeight('bold')
    .setFontColor(BRAND.PARCHMENT).setHorizontalAlignment('left').setVerticalAlignment('middle');
  var stat = function (col, w, valF, cap) {
    gridText_(sheet, 14, col, w, null, { formula: valF, font: FONT.DISPLAY, bold: true, size: 18, color: BRAND.PARCHMENT });
    gridText_(sheet, 15, col, w, cap, { size: 9, color: '#C9D6CE' });
  };
  stat(8, 2, '=' + EN + '!$B$' + sr + '&" mo"', 'left on this plan');
  stat(10, 3, '=TEXT(' + EN + '!$C$' + sr + ',"$#,##0")', 'interest, total');
  stat(14, 12, '=TEXT(' + EN + '!$H$' + sr + ',"$#,##0")', 'saved vs minimums');
  sheet.setRowHeight(14, 26); sheet.setRowHeight(15, 16); sheet.setRowHeight(16, 6);
  [8, 12, 17, 20, 30].forEach(function (r) { sheet.setRowHeight(r, 10); });
  sheet.setRowHeight(22, 18); sheet.setRowHeight(29, 16);
  for (var tr3 = 23; tr3 <= 28; tr3++) sheet.setRowHeight(tr3, 19);

  // the plan, in one plain line
  zoneSummary_(sheet, 18, planSummaryF_());

  // YOUR PAYOFF ORDER — the hero table, on REAL columns B..G
  zoneLabel_(sheet, 21, 'YOUR PAYOFF ORDER · WHAT YOU OWE, AND WHEN EACH DEBT DIES');
  var hdr = ['#', 'Debt', 'Balance', 'APR', 'Gone by', 'Interest'];
  hdr.forEach(function (h, j) {
    gridText_(sheet, 22, 2 + j, 1, h, { bold: true, size: 9, color: BRAND.PARCHMENT, bg: BRAND.FOREST, h: j >= 2 ? 'right' : 'left' });
  });
  for (var i = 0; i < 6; i++) {
    var R = DEBT.FIRST_ROW + i, row = 23 + i;
    if (i % 2 === 1) {
      var z = sheet.getRange(row, 2, 1, 6);
      z.setBackground('#EEF2EC');
      themable_(sheet.getName(), 'zebra', z.getA1Notation());
    }
    gridText_(sheet, row, 2, 1, null, { formula: '=IF(' + DB + '!$B$' + R + '="","",IFERROR(INDEX(' + EN + '!$B$' + ENG.ROW_RANK_ACTIVE + ':$Z$' + ENG.ROW_RANK_ACTIVE + ',1,' + (i + 1) + '),"·"))', h: 'center', size: 10, color: BRAND.CAPTION });
    gridText_(sheet, row, 3, 1, null, { formula: '=' + DB + '!$B$' + R, size: 10, color: BRAND.FOREST });
    gridText_(sheet, row, 4, 1, null, { formula: '=IF(' + DB + '!$B$' + R + '="","",' + DB + '!$K$' + R + ')', h: 'right', size: 10, format: '$#,##0' });
    gridText_(sheet, row, 5, 1, null, { formula: '=IF(' + DB + '!$B$' + R + '="","",' + DB + '!$E$' + R + ')', h: 'right', size: 10, color: BRAND.BODY, format: '0.0%' });
    gridText_(sheet, row, 6, 1, null, { formula: '=' + DB + '!$M$' + R, h: 'right', size: 10, bold: true, color: BRAND.FOREST });
    gridText_(sheet, row, 7, 1, null, { formula: '=' + DB + '!$N$' + R, h: 'right', size: 10, color: BRAND.BODY });
  }
  gridText_(sheet, 29, 3, ZONES.COLS - 3, 'A mortgage (or any debt you toggle "In plan? = No" on the Debts tab) is tracked but kept out of this order and the date.', { size: 9, italic: true, color: BRAND.CAPTION });

  // THE TIME MACHINE — the scrubber + its monument band
  zoneLabel_(sheet, 31, 'THE TIME MACHINE · STAND IN ANY MONTH OF YOUR PLAN');
  setCell_(sheet, 'C32', { formula: '=IFERROR(MIN(' + PAYOFF_HORIZON_MONTHS + ',' + EN + '!$B$' + sr + '),0)', bg: BRAND.YELLOW, font: FONT.BODY, size: 12, bold: true, color: BRAND.FOREST, h: 'center' })
    .setBorder(true, true, true, true, false, false, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);
  gridText_(sheet, 32, 4, 9, null, { size: 10, italic: true, color: BRAND.CAPTION, formula: '="month "&C32&" of your plan — type 0 for today, or any month; the temple repaints there"' });

  var caption;
  if (mode === 'mock') {
    var m = simulateSchedule_(mockInPlanDebts_(), rankDebts_(mockInPlanDebts_(), 'snowball'), MOCK.extra).months;
    caption = 'STANDING IN ' + monthLabelOffset_(new Date(), m).toUpperCase() + ' · THE FINISHED TEMPLE';
    paintTemple2_(sheet, { bandTop: ANCHOR.PLAN_BAND_TOP, H: ANCHOR.PLAN_TEMPLE_H, debts: mockTempleDebts_(m, 'snowball'), caption: caption });
  } else {
    paintTemple2_(sheet, { bandTop: ANCHOR.PLAN_BAND_TOP, H: ANCHOR.PLAN_TEMPLE_H, debts: [], caption: 'PICK A STRATEGY · THE TIME MACHINE AWAITS' });
  }
  // left of the panel: the balance timeline, then the disclaimer
  bandMerge_(sheet, ANCHOR.PLAN_BAND_TOP + 1, ANCHOR.PLAN_BAND_TOP + 12)
    .setFormula(sparkCol_("'_Engine'!$AE$" + ENG.TIMELINE_FIRST + ':$AE$' + ENG.TIMELINE_LAST, BRAND.CANOPY));
  bandMerge_(sheet, ANCHOR.PLAN_BAND_TOP + 14, ANCHOR.PLAN_BAND_TOP + 20)
    .setValue('Your in-plan balance falling to zero, month by month (above). Projections are estimates at monthly compounding, not financial advice and not a servicing statement — your lender\'s figures are the truth; re-type your statement balance monthly on the Debts tab.')
    .setFontFamily(FONT.BODY).setFontSize(9).setFontStyle('italic').setFontColor(BRAND.CAPTION)
    .setHorizontalAlignment('left').setVerticalAlignment('top').setWrap(true);
  footer_(sheet, ANCHOR.PLAN_BAND_TOP + 22, ZONES.LAST);
}

function buildCompareBody_(sheet, mode) {
  titleRow_(sheet, GRID.LAST, 'Compare',
    'Snowball against avalanche, computed in full. Same debts, same extra — watch them fill different columns.');
  var EN = "'_Engine'", snowT = engBlockByKey_('snow').top, avalT = engBlockByKey_('aval').top;
  // race scrubber (label row 9, input row 10)
  gridText_(sheet, 9, 3, 8, 'RACE · MONTH', { size: 9, bold: true, color: BRAND.CANOPY });
  setCell_(sheet, 'C10', { value: (mode === 'mock') ? 23 : 0, merge: 'F10', bg: BRAND.YELLOW, font: FONT.BODY, size: 12, bold: true, color: BRAND.FOREST, h: 'center' })
    .setBorder(true, true, true, true, false, false, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);
  gridText_(sheet, 10, 8, 26, 'same extra on both lanes — type a month to scrub the race.', { size: 10, italic: true, color: BRAND.CAPTION });
  gridText_(sheet, 10, 36, GRID.COLS - 36, '▶  RUN THE RACE — 💳 menu · both temples fill month by month', { size: 10, bold: true, color: '#7d6420', bg: BRAND.CHIP_FAIR_BG, h: 'center' });

  // verdict panel (rows 12-15) — the value, made obvious
  sheet.getRange(12, 2, 4, GRID.COLS - 2).setBackground(BRAND.FOREST);
  gridText_(sheet, 12, 4, 28, 'THE TRADE-OFF · SAME MONEY, TWO ROADS', { size: 10, bold: true, color: BRAND.GOLD });
  gridText_(sheet, 13, 4, 26, null, { formula: '=TEXT(MAX(0,' + EN + '!$E$' + snowT + '-' + EN + '!$E$' + avalT + '),"$#,##0")', font: FONT.DISPLAY, bold: true, size: 26, color: BRAND.PARCHMENT });
  gridText_(sheet, 14, 4, 26, 'saved in interest by going Avalanche', { size: 10, color: '#C9D6CE' });
  gridText_(sheet, 13, 34, 26, null, { formula: '=MAX(0,' + EN + '!$F$' + avalT + '-' + EN + '!$F$' + snowT + ')&" months"', font: FONT.DISPLAY, bold: true, size: 26, color: BRAND.PARCHMENT });
  gridText_(sheet, 14, 34, 26, 'sooner first win by going Snowball', { size: 10, color: '#C9D6CE' });
  sheet.setRowHeight(13, 34);

  var self = this;
  var lane = function (label, sub, blockTop, win, strat, capMock) {
    var w = win[1] - win[0] + 1;
    gridText_(sheet, 17, win[0], Math.floor(w / 2), label, { font: FONT.DISPLAY, bold: true, size: 16, color: BRAND.FOREST });
    gridText_(sheet, 18, win[0], w, sub, { size: 10, italic: true, color: BRAND.CAPTION });
    gridText_(sheet, 19, win[0], 8, null, { formula: '=' + EN + '!$D$' + blockTop + '&" mo"', font: FONT.DISPLAY, bold: true, size: 17, color: BRAND.FOREST });
    gridText_(sheet, 19, win[0] + 8, w - 8, null, { formula: '=TEXT(' + EN + '!$E$' + blockTop + ',"$#,##0")&" interest"', size: 11, color: BRAND.BODY });
    gridText_(sheet, 20, win[0], w, null, { formula: '="first kill: "&' + EN + '!$G$' + blockTop + '&"  ·  "&IFERROR(TEXT(EDATE(cc_engine_anchor,' + EN + '!$F$' + blockTop + '),"mmm yyyy"),"—")', size: 10, color: BRAND.CANOPY });
    paintTemple2_(sheet, { bandTop: ANCHOR.CMP_BAND_TOP, H: ANCHOR.CMP_TEMPLE_H, win: win,
      debts: (mode === 'mock') ? mockTempleDebts_(23, strat) : [], caption: capMock });
  };
  [8, 11, 16, 21].forEach(function (r) { sheet.setRowHeight(r, 10); });
  sheet.setRowHeight(15, 8);
  var snowCap = (mode === 'mock') ? 'SNOWBALL · MONTH 23 OF THE RACE' : 'SNOWBALL LANE';
  var avalCap = (mode === 'mock') ? 'AVALANCHE · MONTH 23 OF THE RACE' : 'AVALANCHE LANE';
  lane('Snowball', 'smallest balance first — momentum: the first win lands sooner', snowT, [2, 31], 'snowball', snowCap);
  lane('Avalanche', 'highest APR first — economics: less interest overall', avalT, [34, 63], 'avalanche', avalCap);
  footer_(sheet, ANCHOR.CMP_BAND_TOP + 23, GRID.LAST);
}

// Progress contributions ledger: two REAL columns at the fixed contract
// rows — Date in B, Amount in C (the menu action + SAVED sum target these).
var LC_DATE_COL = 2, LC_AMT_COL = 3, LC_CELL_W = 1;
function buildProgressBody_(sheet, mode) {
  titleRow_(sheet, ZONES.LAST, 'Progress',
    'Build the stone you stand on, and keep your streaks alive — the habits that keep you out of debt for good.');
  var contribs = (mode === 'mock') ? generateMockContributions_() : [];
  var saved = contribs.reduce(function (a, c) { return a + c[1]; }, 0);
  var sumF = 'SUM(' + columnToLetter_(LC_AMT_COL) + PROG_LEDGER_TOP + ':' + columnToLetter_(LC_AMT_COL) + (PROG_LEDGER_TOP + PROG_LEDGER_ROWS - 1) + ')';

  // editable goal (label row 9 · single-cell input row 10) + live SAVED line
  gridText_(sheet, 9, 2, 1, 'STYLOBATE GOAL', { size: 9, bold: true, color: BRAND.CANOPY });
  setCell_(sheet, 'C10', { value: STYLOBATE_GOAL_DEFAULT, bg: BRAND.YELLOW, font: FONT.BODY, size: 12, bold: true, color: BRAND.FOREST, format: '$#,##0', h: 'center' })
    .setBorder(true, true, true, true, false, false, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);
  safeMerge_(sheet.getRange(9, 6, 2, ZONES.COLS - 6));
  sheet.getRange(9, 6).setFormula('="SAVED  "&TEXT(' + sumF + ',"$#,##0")&"  of  "&TEXT(C10,"$#,##0")&" laid in stone"')
    .setFontFamily(FONT.DISPLAY).setFontSize(16).setFontWeight('bold').setFontStyle('italic')
    .setFontColor('#7a5a1e').setHorizontalAlignment('left').setVerticalAlignment('middle');

  // streaks — three record cards on the text zone
  zoneLabel_(sheet, 12, 'YOUR STREAKS · THE HABITS THAT KEEP YOU FREE');
  var sv = (mode === 'mock') ? '14 mo' : '—', wk = (mode === 'mock') ? '9 wks' : '—';
  kpiCard_(sheet, 'B13', 3, '🔥  BEAT THE MINIMUM', sv, 'months you paid more than required', null);
  kpiCard_(sheet, 'F13', 3, '🛡️  NO NEW DEBT', sv, 'no balance has risen since you started', null);
  kpiCard_(sheet, 'J13', 3, '✓  WEEKLY CHECK-IN', wk, 'the habit that predicts finishing', null);
  sheet.setRowHeight(13, 14); sheet.setRowHeight(14, 24); sheet.setRowHeight(15, 24);
  [8, 11, 16, 40, 42].forEach(function (r) { sheet.setRowHeight(r, 10); });
  sheet.setRowHeight(43, 18);

  // the stylobate monument band — the ONLY tab with the 3-step base
  zoneLabel_(sheet, 17, 'THE STYLOBATE · YOUR BUFFER, THE TEMPLE\'S BASE');
  var frac = mode === 'mock' ? saved / STYLOBATE_GOAL_DEFAULT : 0;
  var caption = mode === 'mock'
    ? 'THE STYLOBATE · ' + money_(saved) + ' OF ' + money_(STYLOBATE_GOAL_DEFAULT) + ' LAID IN STONE'
    : 'YOUR BUFFER · THE TEMPLE\'S BASE';
  paintTemple2_(sheet, { bandTop: ANCHOR.PROG_BAND_TOP, H: ANCHOR.PROG_TEMPLE_H, debts: (mode === 'mock') ? mockTempleDebts_(0, 'snowball') : [], stylobate: true, savedFrac: frac, caption: caption });
  // beside the panel: the stylobate's state, then the honest mechanics
  bandMerge_(sheet, ANCHOR.PROG_BAND_TOP + 1, ANCHOR.PROG_BAND_TOP + 9)
    .setFormula('=IF(' + sumF + '>=C10,"✦ The Stylobate is laid — your temple stands on solid stone.","The temple stands on the stone you set aside. "&TEXT(' + sumF + ',"$#,##0")&" of "&TEXT(C10,"$#,##0")&" is laid — keep laying it.")')
    .setFontFamily(FONT.DISPLAY).setFontSize(13).setFontStyle('italic').setFontColor(BRAND.FOREST)
    .setHorizontalAlignment('left').setVerticalAlignment('middle').setWrap(true);
  bandMerge_(sheet, ANCHOR.PROG_BAND_TOP + 11, ANCHOR.PROG_BAND_TOP + 21)
    .setValue('SAVED is the running sum of your contributions below — never typed. A drawdown is a negative entry; the stylobate honestly cracks back toward sand (it did its job). Log one with 💳 → Log a Stylobate contribution, or type into the ledger.')
    .setFontFamily(FONT.BODY).setFontSize(9).setFontStyle('italic').setFontColor(BRAND.CAPTION)
    .setHorizontalAlignment('left').setVerticalAlignment('top').setWrap(true);

  // contributions ledger — two REAL yellow columns at the fixed rows
  zoneLabel_(sheet, 41, 'CONTRIBUTIONS · EACH ONE LAID IN STONE');
  gridText_(sheet, 43, LC_DATE_COL, 1, 'Date', { bold: true, size: 9, color: BRAND.PARCHMENT, bg: BRAND.FOREST });
  gridText_(sheet, 43, LC_AMT_COL, 1, 'Amount', { bold: true, size: 9, color: BRAND.PARCHMENT, bg: BRAND.FOREST, h: 'right' });
  sheet.getRange(PROG_LEDGER_TOP, LC_DATE_COL, PROG_LEDGER_ROWS, 2).setBackground(BRAND.YELLOW)
    .setBorder(true, true, true, true, true, true, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);
  sheet.getRange(PROG_LEDGER_TOP, LC_DATE_COL, PROG_LEDGER_ROWS, 1).setNumberFormat('mmm d, yyyy');
  sheet.getRange(PROG_LEDGER_TOP, LC_AMT_COL, PROG_LEDGER_ROWS, 1).setNumberFormat('$#,##0').setHorizontalAlignment('right');
  if (mode === 'mock' && contribs.length) {
    sheet.getRange(PROG_LEDGER_TOP, LC_DATE_COL, contribs.length, 1).setValues(contribs.map(function (c) { return [c[0]]; }));
    sheet.getRange(PROG_LEDGER_TOP, LC_AMT_COL, contribs.length, 1).setValues(contribs.map(function (c) { return [c[1]]; }));
  }
  footer_(sheet, PROG_LEDGER_TOP + PROG_LEDGER_ROWS + 2, ZONES.LAST);
}

// ── zone helpers (banded L-layout tabs) ───────────────────────────────
function zoneLabel_(sheet, row, text) {
  gridText_(sheet, row, 2, ZONES.COLS - 2, text, { size: 9, bold: true, color: BRAND.GOLD });
  sheet.setRowHeight(row, 16);
}
// full-width plain-English summary band (cream), 2 rows tall
function zoneSummary_(sheet, row, formula) {
  var rng = sheet.getRange(row, 2, 2, ZONES.COLS - 2);
  rng.setBackground(BRAND.CREAM);
  safeMerge_(sheet.getRange(row, 3, 2, ZONES.COLS - 4));
  sheet.getRange(row, 3).setFormula(formula)
    .setFontFamily(FONT.BODY).setFontSize(11).setFontColor(BRAND.FOREST)
    .setHorizontalAlignment('left').setVerticalAlignment('middle').setWrap(true);
  sheet.setRowHeight(row, 17); sheet.setRowHeight(row + 1, 17);
}
// a full-band-height merge in the text zone of a monument band (the ONLY
// content allowed beside the monument — immune to the short rows)
function bandMerge_(sheet, rowTop, rowBottom) {
  safeMerge_(sheet.getRange(rowTop, ZONES.TEXT_FIRST, rowBottom - rowTop + 1, ZONES.TEXT_LAST - ZONES.TEXT_FIRST + 1));
  return sheet.getRange(rowTop, ZONES.TEXT_FIRST);
}
// the shared plain-English plan summary formula
function planSummaryF_() {
  var sr = ENG.ROW_SCALARS, EN = "'_Engine'";
  return '=IF(COUNTA(cc_debts_list)=0,"Your plan appears here the moment you list your first debt on the Debts tab.",' +
    '"Your plan:  "&IF(LEFT(cc_active_strategy,4)="Aval","Avalanche (highest APR first)",IF(LEFT(cc_active_strategy,2)="My","your own ranking","Snowball (smallest balance first)"))&' +
    '".    Put your "&TEXT(cc_extra_monthly,"$#,##0")&"/mo extra on "&IFERROR(INDEX(cc_debts_list,MATCH(1,' + EN + '!$B$' + ENG.ROW_RANK_ACTIVE + ':$Z$' + ENG.ROW_RANK_ACTIVE + ',0)),"your first debt")&' +
    '" until it is paid, then roll it to the next.    Debt-free "&' + EN + '!$P$' + sr + '&"  ("&' + EN + '!$B$' + sr + '&" months from now).")';
}

function buildDashboardBody_(sheet, mode) {
  titleRow_(sheet, ZONES.LAST, 'Dashboard', 'Where you stand today — the numbers first, then your debts becoming a temple.');
  var sr = ENG.ROW_SCALARS, EN = "'_Engine'", DB = "'" + TABS.DEBTS + "'";

  // 1 · the plan, in one plain line
  zoneSummary_(sheet, 9, planSummaryF_());

  // 2 · the numbers — 2×2 KPI cards on the text zone (real columns)
  zoneLabel_(sheet, 12, 'WHERE YOU STAND');
  kpiCard_(sheet, 'B13', 5, 'TOTAL DEBT NOW', '=TEXT(' + EN + '!$M$' + sr + ',"$#,##0")', '=" of "&TEXT(' + EN + '!$O$' + sr + ',"$#,##0")&" at the start"', null);
  kpiCard_(sheet, 'H13', 5, 'DEBT-FREE DATE', '=' + EN + '!$P$' + sr, '=' + EN + '!$B$' + sr + '&" months on this plan"', null);
  kpiCard_(sheet, 'B17', 5, 'PAID OFF TO DATE', '=TEXT(' + EN + '!$N$' + sr + ',"$#,##0")', 'torn from the wall, made permanent', null);
  kpiCard_(sheet, 'H17', 5, 'SAVED vs MINIMUMS', '=TEXT(' + EN + '!$H$' + sr + ',"$#,##0")', '=IF(' + EN + '!$G$' + sr + '>0,"minimums never finish — still "&TEXT(' + EN + '!$G$' + sr + ',"$#,##0")&" owed at 10 yrs","vs paying only the minimums")', null);
  [13, 17].forEach(function (r) { sheet.setRowHeight(r, 14); sheet.setRowHeight(r + 1, 24); sheet.setRowHeight(r + 2, 20); });
  [8, 11, 20, 29, ANCHOR.DASH_BAND_TOP + 23].forEach(function (r) { sheet.setRowHeight(r, 10); });
  sheet.setRowHeight(16, 6);
  sheet.setRowHeight(22, 18);
  for (var tr2 = 23; tr2 <= 28; tr2++) sheet.setRowHeight(tr2, 19);

  // 3 · this month — what is due, on REAL columns (B Debt · C Due · D Min ·
  // E..L Status). Status merges E..L per row — the one sanctioned row merge.
  zoneLabel_(sheet, 21, 'THIS MONTH · WHAT IS DUE');
  gridText_(sheet, 22, 2, 1, 'Debt', { bold: true, size: 9, color: BRAND.PARCHMENT, bg: BRAND.FOREST });
  gridText_(sheet, 22, 3, 1, 'Due', { bold: true, size: 9, color: BRAND.PARCHMENT, bg: BRAND.FOREST });
  gridText_(sheet, 22, 4, 1, 'Min', { bold: true, size: 9, color: BRAND.PARCHMENT, bg: BRAND.FOREST, h: 'right' });
  gridText_(sheet, 22, 5, 8, 'Status', { bold: true, size: 9, color: BRAND.PARCHMENT, bg: BRAND.FOREST });
  for (var i = 0; i < 6; i++) {
    var R = DEBT.FIRST_ROW + i, row = 23 + i;
    if (i % 2 === 1) {
      var z = sheet.getRange(row, 2, 1, 11);
      z.setBackground('#EEF2EC');
      themable_(sheet.getName(), 'zebra', z.getA1Notation());
    }
    gridText_(sheet, row, 2, 1, null, { formula: '=IF(' + DB + '!$B$' + R + '="","",' + DB + '!$B$' + R + ')', size: 10, color: BRAND.FOREST });
    gridText_(sheet, row, 3, 1, null, { formula: '=IF(' + DB + '!$G$' + R + '="","","day "&' + DB + '!$G$' + R + ')', size: 10, color: BRAND.CAPTION });
    gridText_(sheet, row, 4, 1, null, { formula: '=IF(' + DB + '!$B$' + R + '="","",' + DB + '!$F$' + R + ')', h: 'right', size: 10, format: '$#,##0' });
    gridText_(sheet, row, 5, 8, null, { formula: '=IF(' + DB + '!$B$' + R + '="","",' + DB + '!$L$' + R + ')', size: 10, italic: true, color: BRAND.CANOPY });
  }

  // 4 · the monument band — temple panel right, timeline + explainer left
  zoneLabel_(sheet, 30, 'THE TEMPLE · WHAT YOU HAVE MADE PERMANENT');
  var caption;
  if (mode === 'mock') {
    var ip = mockInPlanDebts_();
    var startTot = MOCK.debts.filter(function (d) { return d[6]; }).reduce(function (a, d) { return a + d[2]; }, 0);
    var nowTot = MOCK.debts.filter(function (d) { return d[6]; }).reduce(function (a, d) { return a + d[8]; }, 0);
    caption = 'THE TEMPLE  ·  ' + Math.round((startTot - nowTot) / startTot * 100) + '% BUILT  ·  ' + money_(nowTot) + ' STILL STANDING';
    paintTemple2_(sheet, { bandTop: ANCHOR.DASH_BAND_TOP, H: ANCHOR.DASH_TEMPLE_H, debts: mockTempleDebts_(0, 'snowball'), wall: true, caption: caption });
  } else {
    paintTemple2_(sheet, { bandTop: ANCHOR.DASH_BAND_TOP, H: ANCHOR.DASH_TEMPLE_H, debts: [], wall: false, caption: 'LIST YOUR DEBTS · THE TEMPLE RISES AS YOU PAY' });
  }
  // left of the panel: the balance timeline (one full-band merge) …
  bandMerge_(sheet, ANCHOR.DASH_BAND_TOP + 1, ANCHOR.DASH_BAND_TOP + 13)
    .setFormula(sparkCol_("'_Engine'!$AE$" + ENG.TIMELINE_FIRST + ':$AE$' + ENG.TIMELINE_LAST, BRAND.CANOPY));
  // … and the explainer (a second full-band merge)
  bandMerge_(sheet, ANCHOR.DASH_BAND_TOP + 15, ANCHOR.DASH_BAND_TOP + 22)
    .setValue('Balance falling to zero on your plan (above).  In the temple, each column is one debt — its width is the debt\'s size. It fills as you pay; the capital goes gold the month it is cleared. The strip above the pediment is the wall of debt still to tear down.  💳 menu → Watch the build replays your climb.')
    .setFontFamily(FONT.BODY).setFontSize(9).setFontStyle('italic').setFontColor(BRAND.CAPTION)
    .setHorizontalAlignment('left').setVerticalAlignment('top').setWrap(true);

  // 5 · AI insights (mock only)
  var after = ANCHOR.DASH_BAND_TOP + 24;
  if (mode === 'mock') {
    zoneLabel_(sheet, after, 'AI INSIGHTS · ATTACH THE SHEET AND ASK');
    MOCK.ai_insights.forEach(function (ins, i) {
      gridText_(sheet, after + 1 + i, 2, 1, ins[0], { bold: true, size: 9, color: BRAND.GOLD, bg: BRAND.CREAM, h: 'center' });
      gridText_(sheet, after + 1 + i, 3, ZONES.COLS - 3, ins[1], { size: 10, color: BRAND.BODY });
      sheet.setRowHeight(after + 1 + i, 19);
    });
    footer_(sheet, after + 5, ZONES.LAST);
  } else {
    footer_(sheet, after, ZONES.LAST);
  }
}

function buildHallBody_(sheet, mode) {
  titleRow_(sheet, GRID.LAST, 'The Hall',
    'A room you enter. Every debt you slay mounts a plaque; every record takes a pedestal. The empty places are waiting.');
  // forest interior
  sheet.getRange(9, 2, 40, GRID.COLS - 2).setBackground(STONE.HALL_BG);
  gridText_(sheet, 9, 2, GRID.COLS - 2, '— you have entered the temple —', { h: 'center', italic: true, size: 11, color: '#C9B07A', bg: STONE.HALL_BG });
  gridText_(sheet, 10, 2, GRID.COLS - 2, 'The Hall of the Paid', { h: 'center', font: FONT.DISPLAY, bold: true, size: 18, color: BRAND.PARCHMENT, bg: STONE.HALL_BG });

  gridText_(sheet, 12, 2, GRID.COLS - 2, '◆ DEBTS SLAIN ◆', { h: 'center', size: 9, bold: true, color: '#C9B07A', bg: STONE.HALL_BG });
  var plaque = function (col, w, name, amt, sub, locked) {
    var rng = sheet.getRange(14, col, 4, w);
    rng.setBackground(locked ? STONE.HALL_BG2 : STONE.PARCHMENT)
      .setBorder(true, true, true, true, false, false, GOLD_ACHIEVE, SpreadsheetApp.BorderStyle.SOLID);
    gridText_(sheet, 14, col, w, locked ? '◇' : '✦', { h: 'center', size: 14, bold: true, color: locked ? '#6B7A6F' : '#7a5a1e', bg: locked ? STONE.HALL_BG2 : STONE.PARCHMENT });
    gridText_(sheet, 15, col, w, name, { h: 'center', font: FONT.DISPLAY, bold: true, size: 12, color: locked ? '#9DB0A2' : BRAND.FOREST, bg: locked ? STONE.HALL_BG2 : STONE.PARCHMENT });
    gridText_(sheet, 16, col, w, amt, { h: 'center', size: 10, bold: true, color: locked ? '#9DB0A2' : '#7a5a1e', bg: locked ? STONE.HALL_BG2 : STONE.PARCHMENT });
    gridText_(sheet, 17, col, w, sub, { h: 'center', size: 8, color: locked ? '#7C8C81' : BRAND.CAPTION, bg: locked ? STONE.HALL_BG2 : STONE.PARCHMENT });
  };
  if (mode === 'mock') {
    plaque(3, 8, 'Store card', '$1,150 slain', 'SEP 2025 · FIRST BLOOD', false);
    plaque(12, 8, 'Medical bill', '$3,400 slain', 'APR 2026 · SECOND KILL', false);
    plaque(21, 8, 'Auto loan', 'next to fall', 'IN PROGRESS', true);
  } else {
    plaque(11, 10, 'Your first win', 'waiting', 'PAY A DEBT TO FULL TO MOUNT ITS PLAQUE', true);
  }

  gridText_(sheet, 19, 2, GRID.COLS - 2, '◆ RECORDS ◆', { h: 'center', size: 9, bold: true, color: '#C9B07A', bg: STONE.HALL_BG });
  var trophy = function (top, col, w, icon, val, label, locked, valFormula) {
    sheet.getRange(top, col, 3, w).setBackground(STONE.HALL_BG)
      .setBorder(true, true, true, true, false, false, locked ? '#3A5446' : GOLD_ACHIEVE, SpreadsheetApp.BorderStyle.SOLID);
    gridText_(sheet, top, col, w, icon, { h: 'center', size: 16, bg: STONE.HALL_BG });
    if (valFormula) gridText_(sheet, top + 1, col, w, null, { formula: valFormula, h: 'center', font: FONT.DISPLAY, bold: true, size: 13, color: GOLD_ACHIEVE, bg: STONE.HALL_BG });
    else gridText_(sheet, top + 1, col, w, val, { h: 'center', font: FONT.DISPLAY, bold: true, size: 13, color: locked ? '#7C8C81' : GOLD_ACHIEVE, bg: STONE.HALL_BG });
    gridText_(sheet, top + 2, col, w, label, { h: 'center', size: 8, color: '#A9BBAE', bg: STONE.HALL_BG });
  };
  if (mode === 'mock') {
    trophy(21, 3, 6, '🏆', '14 mo', 'longest streak', false);
    trophy(21, 10, 6, '🛡️', '14 mo', 'no new debt', false);
    trophy(21, 17, 6, '⚡', '5 mo', 'fastest kill', false);
    trophy(21, 24, 6, '🏛️', null, 'total slain', false, '=TEXT(\'_Engine\'!$N$' + ENG.ROW_SCALARS + ',"$#,##0")');
    trophy(25, 3, 8, '½', 'halfway', 'unlocks at half your debt slain', true);
    trophy(25, 12, 8, '★', 'debt-free', 'the golden temple', true);
  } else {
    trophy(21, 3, 8, '🏆', '—', 'longest streak', true);
    trophy(21, 12, 8, '⚡', '—', 'fastest kill', true);
    trophy(21, 21, 8, '★', 'debt-free', 'the golden temple', true);
  }

  // Letters — pre-written, zero-setup, sealed until you cross each rank.
  gridText_(sheet, 29, 2, GRID.COLS - 2, '◆ SEALED LETTERS ◆', { h: 'center', size: 9, bold: true, color: '#C9B07A', bg: STONE.HALL_BG });
  var letter = function (col, w, title, body, unsealed) {
    var bg = unsealed ? STONE.PARCHMENT : STONE.HALL_BG2;
    sheet.getRange(31, col, 4, w).setBackground(bg)
      .setBorder(true, true, true, true, false, false, unsealed ? GOLD_ACHIEVE : '#3A5446', SpreadsheetApp.BorderStyle.SOLID);
    gridText_(sheet, 31, col, w, (unsealed ? '✉ ' : '🔒 ') + title, { h: 'center', font: FONT.DISPLAY, bold: true, italic: true, size: 11, color: unsealed ? BRAND.FOREST : '#9DB0A2', bg: bg });
    gridText_(sheet, 32, col, w, unsealed ? body : 'sealed', { h: 'center', size: 9, italic: true, color: unsealed ? BRAND.BODY : '#7C8C81', bg: bg, wrap: true });
  };
  var first = (mode === 'mock');
  letter(3, 8, 'First Blood', 'You did the hardest thing — you started, and you finished. One column stands; the rest fall in behind it.', first);
  letter(12, 8, 'Halfway', 'Unseals when half your debt is slain.', false);
  letter(21, 8, 'Debt-Free', 'Unseals when the temple is whole and you owe no one.', false);

  footer_(sheet, 37, GRID.LAST);
}

// Start Here — plain 12 normal columns (the Foundation pattern; no canvas).
function buildStartBody_(sheet, mode) {
  titleRow_(sheet, 'L', 'Every debt. One date.',
    'A plan you own — list your debts, pick a strategy, and watch your temple rise as you pay.');
  gridText_(sheet, 9, 2, 10, 'THE ANATOMY · THE VOCABULARY OF THE PRODUCT', { size: 9, bold: true, color: BRAND.GOLD });
  var anat = [['STYLOBATE', 'the stone you stand on — your buffer'], ['COLUMN', 'one debt, rising as you pay'],
    ['CAPITAL', 'a debt paid in full — it goes gold'], ['ENTABLATURE', 'the roofline goal'], ['PEDIMENT', 'debt-free']];
  anat.forEach(function (a, i) {
    var row = 10 + i;
    gridText_(sheet, row, 2, 1, a[0], { bold: true, size: 10, color: BRAND.GOLD, bg: BRAND.CREAM, h: 'center' });
    gridText_(sheet, row, 3, 9, a[1], { size: 11, color: BRAND.BODY });
  });
  gridText_(sheet, 16, 2, 10, 'SETUP · 6 STEPS', { size: 9, bold: true, color: BRAND.GOLD });
  var steps = [
    ['Install the script', 'Extensions → Apps Script → paste the file. A 💳 menu appears.'],
    ['List your debts', 'Debts tab — name, statement balance, APR, minimum. One row each.'],
    ['Pick a strategy', 'The Plan — Snowball, Avalanche, or your own order.'],
    ['Set your extra', 'One cell. Watch the debt-free date jump closer.'],
    ['Log payments', 'Payments Log as money lands — or paste a bank CSV.'],
    ['Watch it rise', 'The Dashboard temple builds itself from your payments.']];
  gridText_(sheet, 17, 2, 1, 'Step', { bold: true, size: 9, color: BRAND.PARCHMENT, bg: BRAND.FOREST });
  gridText_(sheet, 17, 3, 9, 'What you do', { bold: true, size: 9, color: BRAND.PARCHMENT, bg: BRAND.FOREST });
  steps.forEach(function (s, i) {
    var row = 18 + i;
    if (i % 2 === 1) {
      var z = sheet.getRange(row, 2, 1, 10);
      z.setBackground('#EEF2EC');
      themable_(sheet.getName(), 'zebra', z.getA1Notation());
    }
    gridText_(sheet, row, 2, 1, (i + 1) + ' · ' + s[0], { bold: true, size: 11, color: BRAND.FOREST });
    gridText_(sheet, row, 3, 9, s[1], { size: 10, color: BRAND.BODY });
  });
  gridText_(sheet, 25, 2, 10, 'ASK YOUR AI', { size: 9, bold: true, color: BRAND.GOLD });
  gridText_(sheet, 26, 2, 10, 'Attach the sheet to Claude or ChatGPT and ask: "Which payoff order saves me the most interest, and what happens to my debt-free date if I add $75 a month?" The hidden _Schema tab explains your sheet.', { size: 11, italic: true, color: BRAND.BODY, bg: BRAND.CREAM, wrap: true });
  sheet.setRowHeight(26, 40);
  footer_(sheet, 29, 'L');
}

/**
 * Column & Co. — The Payoff v1.0
 * 13 · Bank CSV import (adapted from the Foundation, section 13). Paste a
 * bank export; sniff Date/Description/Amount; map descriptions → debts via
 * the keyword rules on the Debts tab; dedupe against the Payments Log;
 * append. The split (Est. interest / principal) is computed by the log.
 */
var IMP = { PASTE_ROW: 12, PASTE_ROWS: 40, PASTE_COLS: 6, PREVIEW_ROW: 56, PREVIEW_ROWS: 20 };

function buildBankImport_(sheet, mode) {
  ensureGrid_(sheet, IMP.PREVIEW_ROW + IMP.PREVIEW_ROWS + 6, 12);
  chrome_(sheet, TABS.IMPORT, 'L', 'PASTE · MAP · APPEND');
  var r = titleRow_(sheet, 'L', 'Bank Import',
    'Paste your bank export below. The Payoff sniffs the columns, maps descriptions to your debts (keyword rules live on the Debts tab), dedupes, and appends to the Payments Log.');

  sectionLabel_(sheet, 'A9', 'L9', '1 · PASTE YOUR CSV  (include the header row)');
  var zone = sheet.getRange(IMP.PASTE_ROW, 1, IMP.PASTE_ROWS, IMP.PASTE_COLS);
  zone.setBackground(BRAND.GREEN_ZONE).setBorder(true, true, true, true, true, true, BRAND.CANOPY, SpreadsheetApp.BorderStyle.DASHED);
  setCell_(sheet, 'A' + IMP.PASTE_ROW, { value: 'Date', font: FONT.BODY, size: 10, color: BRAND.CAPTION });
  setCell_(sheet, 'B' + IMP.PASTE_ROW, { value: 'Description', font: FONT.BODY, size: 10, color: BRAND.CAPTION });
  setCell_(sheet, 'C' + IMP.PASTE_ROW, { value: 'Amount', font: FONT.BODY, size: 10, color: BRAND.CAPTION });
  if (mode === 'mock') {
    sheet.getRange(IMP.PASTE_ROW + 1, 1, 3, 3).setValues([
      ['06/12/2026', 'ACH PYMT CHASE CARD', -196], ['06/12/2026', 'AUTOPAY TOYOTA FIN', -647], ['06/10/2026', 'SALLIE MAE EDU', -190]]);
  }

  sectionLabel_(sheet, 'A' + (IMP.PREVIEW_ROW - 2), 'L' + (IMP.PREVIEW_ROW - 2), '2 · MAPPED  (run 💳 → Import Bank CSV to fill this)');
  var hdr = ['Description', 'Matched debt', 'Amount', 'Status'];
  sheet.getRange(IMP.PREVIEW_ROW - 1, 1, 1, 4).setValues([hdr]).setFontWeight('bold')
    .setBackground(BRAND.FOREST).setFontColor(BRAND.PARCHMENT).setFontFamily(FONT.BODY).setFontSize(10);

  setCell_(sheet, 'A' + (IMP.PREVIEW_ROW + IMP.PREVIEW_ROWS + 1), {
    value: 'Keyword rules map descriptions to debts — edit them on the Debts tab (the Keyword / Maps to debt columns). Re-pasting the same export is safe: duplicates are skipped.',
    merge: 'L' + (IMP.PREVIEW_ROW + IMP.PREVIEW_ROWS + 1), font: FONT.BODY, size: 10, italic: true, color: BRAND.CAPTION, wrap: true });

  footer_(sheet, IMP.PREVIEW_ROW + IMP.PREVIEW_ROWS + 4, 'L');
  setColWidths_(sheet, [120, 240, 100, 90, 90, 90, 40, 40, 40, 40, 40, 40]);
}

function importPayments() {
  var ss = SpreadsheetApp.getActive(), imp = ss.getSheetByName(TABS.IMPORT), pay = ss.getSheetByName(TABS.PAYMENTS);
  if (!imp || !pay) return;
  var raw = imp.getRange(IMP.PASTE_ROW, 1, IMP.PASTE_ROWS, IMP.PASTE_COLS).getValues();
  var rowsAsArrays;
  var firstCell = raw[0][0];
  if (typeof firstCell === 'string' && firstCell.indexOf('\n') !== -1) {
    rowsAsArrays = String(firstCell).split(/\r?\n/).filter(function (l) { return l.trim() !== ''; }).map(parseCsvLine_);
  } else {
    rowsAsArrays = raw.map(function (r) { return r.map(function (c) { return c == null ? '' : c; }); })
      .filter(function (r) { return r.some(function (c) { return String(c).trim() !== ''; }); });
  }
  if (rowsAsArrays.length < 2) { ss.toast('Paste a CSV (header + at least one row) into the green zone first.', CC.BRAND, 5); return; }

  var cols = sniffColumns_(rowsAsArrays[0].map(String));
  if (cols.date < 0 || cols.amount < 0) { ss.toast('Could not detect Date/Amount columns. Headers: Date, Description, Amount.', CC.BRAND, 6); return; }

  var parsed = [];
  for (var i = 1; i < rowsAsArrays.length; i++) {
    var f = rowsAsArrays[i]; if (!f || f.length < 2) continue;
    var amt = parseAmount_(f, cols); if (amt == null) continue;
    parsed.push({ date: parseDate_(f[cols.date]), desc: String(f[cols.desc] != null ? f[cols.desc] : '').trim(), amount: Math.abs(amt) });
  }
  var rules = loadKeywordRules_(ss);
  var existing = existingPaymentKeys_(pay);
  var res = mapBankRows_(parsed, rules, existing);

  // mapped preview
  imp.getRange(IMP.PREVIEW_ROW, 1, IMP.PREVIEW_ROWS, 4).clearContent();
  var preview = [];
  parsed.forEach(function (p) {
    var debt = matchDebt_(p.desc, rules);
    var status = !debt ? 'no rule — skipped' : (existing[keyOf_(p.date, debt, p.amount)] ? 'duplicate — skip' : 'new');
    preview.push([p.desc, debt || '—', p.amount, status]);
  });
  if (preview.length) imp.getRange(IMP.PREVIEW_ROW, 1, Math.min(preview.length, IMP.PREVIEW_ROWS), 4).setValues(preview.slice(0, IMP.PREVIEW_ROWS));

  if (res.toAppend.length) {
    var row = findFirstEmptyRow_(pay, PAY.COL_DATE, PAY.FIRST_ROW, PAYMENTS_CAPACITY);
    pay.getRange(row, 1, res.toAppend.length, 6).setValues(res.toAppend);
  }
  var parts = ['Imported ' + res.toAppend.length];
  if (res.dup) parts.push(res.dup + ' duplicate' + (res.dup === 1 ? '' : 's') + ' skipped');
  if (res.unmatched.length) parts.push(res.unmatched.length + ' with no keyword rule (add one on Debts)');
  ss.toast(parts.join(' · '), CC.BRAND, (res.dup || res.unmatched.length) ? 10 : 6);
}

// Pure, testable core: map parsed bank rows → rows to append.
function mapBankRows_(parsed, rules, existing) {
  var toAppend = [], dup = 0, unmatched = [], seen = {};
  Object.keys(existing).forEach(function (k) { seen[k] = true; });
  parsed.forEach(function (p) {
    var debt = matchDebt_(p.desc, rules);
    if (!debt) { unmatched.push(p.desc); return; }
    var key = keyOf_(p.date, debt, p.amount);
    if (seen[key]) { dup++; return; }
    seen[key] = true;
    toAppend.push([p.date, debt, p.amount, '', '', 'imported · ' + String(p.desc).slice(0, 40)]);
  });
  return { toAppend: toAppend, dup: dup, unmatched: unmatched };
}

function keyOf_(date, debt, amount) {
  var ds = (date instanceof Date) ? Utilities.formatDate(date, Session_tz_(), 'yyyy-MM-dd') : String(date || '').trim();
  return ds + '|' + String(debt || '').trim() + '|' + Number(amount).toFixed(2);
}
function Session_tz_() { try { return SpreadsheetApp.getActive().getSpreadsheetTimeZone(); } catch (e) { return 'America/Detroit'; } }

function existingPaymentKeys_(pay) {
  var keys = {}, vals = pay.getRange(PAY.FIRST_ROW, 1, PAYMENTS_CAPACITY, 3).getValues();
  for (var i = 0; i < vals.length; i++) {
    if (!vals[i][0]) continue;
    keys[keyOf_(vals[i][0], vals[i][1], Math.abs(Number(vals[i][2]) || 0))] = true;
  }
  return keys;
}

// longest-keyword-wins — load order never matters.
function matchDebt_(desc, rules) {
  var up = String(desc || '').toUpperCase(), best = null;
  for (var i = 0; i < rules.length; i++) {
    var k = rules[i].keyword;
    if (k && up.indexOf(k) !== -1) { if (!best || k.length > best.keyword.length) best = rules[i]; }
  }
  return best ? best.debt : null;
}

function loadKeywordRules_(ss) {
  var named = ss.getRangeByName('cc_keyword_rules');
  var vals = named ? named.getValues() : ss.getSheetByName(TABS.DEBTS).getRange('Q' + DEBT.FIRST_ROW + ':R' + DEBT_LAST_ROW).getValues();
  var rules = [];
  vals.forEach(function (r) { if (r[0] && r[1]) rules.push({ keyword: String(r[0]).toUpperCase().trim(), debt: String(r[1]).trim() }); });
  return rules;
}

function parseCsvLine_(line) {
  var out = [], cur = '', inQ = false;
  for (var i = 0; i < line.length; i++) {
    var ch = line[i];
    if (ch === '"') { if (inQ && line[i + 1] === '"') { cur += '"'; i++; } else inQ = !inQ; }
    else if (ch === ',' && !inQ) { out.push(cur); cur = ''; }
    else cur += ch;
  }
  out.push(cur);
  return out.map(function (s) { return s.trim(); });
}
function sniffColumns_(header) {
  var lower = header.map(function (h) { return String(h).toLowerCase(); });
  var find = function (keys) {
    for (var k = 0; k < keys.length; k++) for (var i = 0; i < lower.length; i++) if (lower[i].indexOf(keys[k]) !== -1) return i;
    return -1;
  };
  return { date: find(['date', 'posting']), desc: find(['description', 'memo', 'payee', 'name']), amount: find(['amount', 'debit']), debit: find(['debit']), credit: find(['credit']) };
}
function parseAmount_(fields, cols) {
  if (cols.debit >= 0 && cols.credit >= 0 && cols.debit !== cols.credit) {
    var d = cleanNum_(fields[cols.debit]), c = cleanNum_(fields[cols.credit]);
    if (d) return -Math.abs(d); if (c) return Math.abs(c); return null;
  }
  return cleanNum_(fields[cols.amount]);
}
function cleanNum_(s) {
  if (s == null) return null;
  if (typeof s === 'number') return s;
  s = String(s).replace(/[$,\s]/g, ''); if (s === '') return null;
  var paren = /^\(.*\)$/.test(s); s = s.replace(/[()]/g, '');
  var n = Number(s); if (isNaN(n)) return null; return paren ? -n : n;
}
function parseDate_(s) { if (s instanceof Date) return s; var d = new Date(s); return isNaN(d.getTime()) ? s : d; }

function renumberPayments() {
  var ss = SpreadsheetApp.getActive(), pay = ss.getSheetByName(TABS.PAYMENTS);
  if (!pay) return;
  var first = PAY.FIRST_ROW;
  pay.getRange(first, PAY.COL_DATE, PAYMENTS_CAPACITY, 1).setNumberFormat('mmm d, yyyy');
  pay.getRange(first, PAY.COL_AMOUNT, PAYMENTS_CAPACITY, 3).setNumberFormat('$#,##0.00');
  var debtRule = SpreadsheetApp.newDataValidation().requireValueInRange(ss.getRange("'" + TABS.DEBTS + "'!B10:B" + DEBT_LAST_ROW), true).setAllowInvalid(true).build();
  pay.getRange(first, PAY.COL_DEBT, PAYMENTS_CAPACITY, 1).setDataValidation(debtRule);
  ss.toast('Payments Log formats refreshed.', CC.BRAND, 3);
}

// ── The replay + live temple repaint (live execution only) ────────────
// "Watch the build" re-paints the Dashboard temple at each month, course
// by course, with flush + a dignified pause (~0.6s/step — not animation).
// Every repaint targets the ANCHOR rows — the same constants the builders
// painted at, so a replay can never land on the wrong band.
function replayTemple_(dash) {
  var ss = SpreadsheetApp.getActive();
  var info = liveTempleInfo_(ss);
  if (!info || !info.debts.length) return;
  var frames = Math.min(PAYOFF_HORIZON_MONTHS, info.months + 2);
  for (var m = 0; m <= frames; m += Math.max(1, Math.round(frames / 24))) {
    repaintTempleAt_(dash, info, m, { bandTop: ANCHOR.DASH_BAND_TOP, H: ANCHOR.DASH_TEMPLE_H, wall: true,
      caption: 'WATCH THE BUILD · MONTH ' + m + ' OF YOUR CLIMB' });
    SpreadsheetApp.flush();
    Utilities.sleep(600);
  }
  repaintTempleAt_(dash, info, 0, { bandTop: ANCHOR.DASH_BAND_TOP, H: ANCHOR.DASH_TEMPLE_H, wall: true,
    caption: 'THE TEMPLE · BACK TO TODAY' });
}

// Read the live engine to rebuild the per-debt schedule for a repaint.
function liveTempleInfo_(ss, stratOverride) {
  var eng = ss.getSheetByName(TABS.ENGINE), debtsSh = ss.getSheetByName(TABS.DEBTS);
  if (!eng || !debtsSh) return null;
  var reg = debtsSh.getRange(DEBT.FIRST_ROW, 1, DEBT_CAPACITY, DEBT.COL_ANCHOR).getValues();
  var debts = [], inPlan = [];
  reg.forEach(function (r) {
    var name = r[DEBT.COL_NAME - 1]; if (!name || String(r[DEBT.COL_INPLAN - 1]) === 'No') return;
    var start = Number(r[DEBT.COL_START - 1]) || Number(r[DEBT.COL_STMT - 1]) || 0;
    var K = Number(r[DEBT.COL_CURRENT - 1]) || 0;
    debts.push({ start: start, K: K, name: name });
    if (K > 0) inPlan.push({ name: name, bal0: K, apr: Number(r[DEBT.COL_APR - 1]) || 0, min: Number(r[DEBT.COL_MIN - 1]) || 0, order: r[DEBT.COL_ORDER - 1] });
  });
  var stratTxt = String(ss.getRangeByName('cc_active_strategy') ? ss.getRangeByName('cc_active_strategy').getValue() : '');
  var strat = stratOverride || (stratTxt.indexOf('Aval') === 0 ? 'avalanche' : (stratTxt.indexOf('My') === 0 ? 'custom' : 'snowball'));
  var extra = Number(ss.getRangeByName('cc_extra_monthly') ? ss.getRangeByName('cc_extra_monthly').getValue() : 0) || 0;
  var sched = simulateSchedule_(inPlan, rankDebts_(inPlan, strat), extra), byName = {};
  inPlan.forEach(function (d, i) { byName[d.name] = sched.bal[i]; });
  var ci = 0, cols = debts.map(function (d) { var c = { start: d.start, color: debtColor_(ci++), short: shortName_(d.name), arr: byName[d.name] || null }; return c; });
  return { debts: cols, months: sched.months === Infinity ? PAYOFF_HORIZON_MONTHS : sched.months };
}
function repaintTempleAt_(sheet, info, m, opts) {
  var data = info.debts.map(function (d) { return { start: d.start, balAt: d.arr ? d.arr[Math.min(m, d.arr.length - 1)] : 0, color: d.color, short: d.short }; });
  // repaint: true — animation/scrub frames rewrite colors + captions only;
  // merges, borders, and row heights are never touched after the build
  // (touching them mid-animation yanks the user's scroll position).
  paintTemple2_(sheet, { bandTop: opts.bandTop, H: opts.H, debts: data, win: opts.win,
    wall: opts.wall, stylobate: opts.stylobate, savedFrac: opts.savedFrac, caption: opts.caption, repaint: true });
}
function shortName_(name) {
  var SHORT = { 'Rooms+ Store Card': 'Store', 'Medical bill': 'Medical', 'Visa ····4417': 'Visa', 'Auto loan': 'Auto', 'Student loan': 'Student' };
  return SHORT[name] || String(name).split(' ')[0];
}
