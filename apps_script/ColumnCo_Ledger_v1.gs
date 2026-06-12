/**
 * Column & Co. — The Ledger v1.0
 * 00 · Constants — single source of truth for the whole build.
 *
 * Brand colors, type tokens, the 24 in-sheet palettes, the set-aside
 * presets, the 20 Schedule-C-mapped categories + 5 custom slots, the
 * keyword/type rules, the 2026 tax defaults, and the Maya Chen mock data.
 * Skeleton copied from ColumnCo_Foundation_v2.gs (same section numbering);
 * tax figures verified against IRS Notice 2026-10 and Form 1040-ES (2026).
 */

// ── Product identity ──────────────────────────────────────────────────
var CC = {
  VERSION: 'v1.0',
  BRAND: 'Column & Co.',
  PRODUCT: 'The Ledger',
  TAGLINE: 'LIFE,  ORGANIZED.',
  FOOTER: 'The Ledger v1.0  ·  columnandco.com  ·  Do not distribute without license',
  MENU_TITLE: '💳 Column & Co.'
};

// ── Brand colors (locked — never themed) ──────────────────────────────
var BRAND = {
  FOREST: '#1C3D2E',
  FOREST_HI: '#1F4734',   // hand-picked +3% lightness for the LLM code block
  CANOPY: '#2D5C45',
  GOLD: '#C5A95A',
  CREAM: '#F0EBD8',
  PARCHMENT: '#FAF8F2',
  YELLOW: '#FFFDE7',      // every buyer-editable cell
  GREEN_ZONE: '#E5F5EA',  // bank import paste zone
  GARNET: '#832F30',
  // status chip fills
  CHIP_ON_BG: '#E5F5EA',
  CHIP_FAIR_BG: '#FFF3C0',
  CHIP_OVER_BG: '#FFE5E5',
  // text opacities expressed as solid hexes over parchment (Sheets has no per-text alpha)
  BODY: '#4B5F54',        // ~Forest @ 75%
  CAPTION: '#8D9990',     // ~Forest @ 50%
  HAIRLINE: '#DCE3DD',    // ~Forest @ 12%
  PARCHMENT_60: '#9DA79F' // footer text ~Parchment @ 60% over Forest -> light
};

// Fonts — Sheets-native fallbacks for Playfair Display / Jost.
// Documented in _Schema so the buyer knows the substitution.
var FONT = {
  DISPLAY: 'Lora',   // Playfair Display -> Lora (closest native serif)
  BODY: 'Roboto'     // Jost -> Roboto (closest native geometric-ish)
};

// ── 12-segment donut ramp (Forest -> Canopy -> Gold -> Garnet) ─────────
var DONUT_RAMP = [
  '#1C3D2E', '#2D5C45', '#3E7E5C', '#5C9D72', '#8FAF7E', '#C5A95A',
  '#D4B86C', '#C8873A', '#A65B30', '#832F30', '#6B2528', '#4A1A1C'
];

// ── 20 categories (locked order — shared everywhere) + Schedule C map ──
// [name, schedule C line]. The order is fixed: Transactions dropdowns,
// Engine SUMIFS rows, P&L rows, and the mock expense plan all index it.
var LEDGER_CATEGORIES = [
  ['Advertising & Marketing',     'Line 8'],
  ['Platform & Payment Fees',     'Line 10'],
  ['Contract Labor',              'Line 11'],
  ['Materials & Supplies (COGS)', 'Part III'],
  ['Insurance',                   'Line 15'],
  ['Legal & Professional',        'Line 17'],
  ['Office Expense',              'Line 18'],
  ['Shipping & Postage',          'Line 18 / 27a'],
  ['Rent (workspace/equip)',      'Line 20'],
  ['Repairs & Maintenance',       'Line 21'],
  ['Supplies',                    'Line 22'],
  ['Taxes & Licenses',            'Line 23'],
  ['Travel',                      'Line 24a'],
  ['Meals (50% note)',            'Line 24b'],
  ['Utilities',                   'Line 25'],
  ['Software & Subscriptions',    'Line 27a'],
  ['Education & Training',        'Line 27a'],
  ['Home Office',                 'Form 8829'],
  ['Bank & Merchant Fees',        'Line 27a'],
  ['Misc',                        'Line 27a']
];
var CATEGORIES = LEDGER_CATEGORIES.map(function (c) { return c[0]; });
var CUSTOM_CATEGORY_SLOTS = 5;

// Transaction types. Owner = draws/contributions — NEVER in profit.
var TX_TYPES = ['Revenue', 'Expense', 'Transfer', 'Owner'];

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

// ── Set-aside presets (replaces the Foundation budget profiles) ───────
// The dropdown on Tax Center shows `label`; the resolver VLOOKUPs `pct`
// from _Config. Custom reads the yellow Custom % cell instead.
var SETASIDE_PRESETS = [
  { id: 'standard',     label: 'Standard 25%',     pct: 0.25, blurb: 'The common rule of thumb for most solo operators.' },
  { id: 'conservative', label: 'Conservative 30%', pct: 0.30, blurb: 'Higher-bracket or state-tax-heavy. Sleep-at-night setting.' },
  { id: 'lean',         label: 'Lean 20%',         pct: 0.20, blurb: 'Low bracket, big deductions, or W-2 withholding elsewhere covering part of the bill.' },
  { id: 'custom',       label: 'Custom',           pct: '',   blurb: 'You set the % in the yellow cell.' }
];
var DEFAULT_PRESET = 'Standard 25%';

// ── Tax constants (verified June 2026 — see 06_listing_facts.md) ──────
// Mileage rate: IRS Notice 2026-10 (published Dec 29 2025) — 72.5¢/mile
// for 2026 business use. It seeds a YELLOW EDITABLE CELL; formulas only
// ever read the cell (cc_mileage_rate), never this constant.
// SE constants: net profit × 92.35% × 15.3% (Schedule SE). Due dates per
// 2026 Form 1040-ES: Apr 15 · Jun 15 · Sep 15 · Jan 15 (following year).
var TAX = {
  MILEAGE_RATE_DEFAULT: 0.725,
  SE_FACTOR: 0.9235,
  SE_RATE: 0.153,
  EFFECTIVE_RATE_DEFAULT: 0.15,
  QUARTER_DUE: ['Apr 15', 'Jun 15', 'Sep 15', 'Jan 15 (next yr)'],
  // [month, day] of each due date; Q4 is Jan 15 of year+1
  QUARTER_DUE_MD: [[4, 15], [6, 15], [9, 15], [1, 15]],
  DISCLAIMER: 'These are planning estimates from your own numbers — not tax advice and not a filing. Rates, brackets, SE-tax caps, and deduction rules change and vary by situation. Confirm your actual estimated payments with a tax professional or IRS Form 1040-ES.'
};

// ── Keyword + type rules (Categories!E11:G200 seed) ───────────────────
// Category values 'Revenue' / 'Transfer' / 'Owner' are TYPE rules: the
// importer routes the row's Type instead of its expense Category. This is
// wedge #3 — owner draws auto-flag in the import path. Longest keyword wins.
var KEYWORD_RULES = [
  // Platform & Payment Fees
  ['ETSY', 'Platform & Payment Fees', ''],
  ['ETSY FEE', 'Platform & Payment Fees', ''],
  ['SHOPIFY', 'Platform & Payment Fees', ''],
  ['STRIPE FEE', 'Platform & Payment Fees', ''],
  ['PAYPAL FEE', 'Platform & Payment Fees', ''],
  ['SQUARE FEE', 'Platform & Payment Fees', ''],
  ['EBAY FEE', 'Platform & Payment Fees', ''],
  ['AMAZON SELLER', 'Platform & Payment Fees', ''],
  ['GUMROAD', 'Platform & Payment Fees', ''],
  // Software & Subscriptions
  ['ADOBE', 'Software & Subscriptions', ''],
  ['CANVA', 'Software & Subscriptions', ''],
  ['FIGMA', 'Software & Subscriptions', ''],
  ['NOTION', 'Software & Subscriptions', ''],
  ['DROPBOX', 'Software & Subscriptions', ''],
  ['GOOGLE WORKSPACE', 'Software & Subscriptions', ''],
  ['GSUITE', 'Software & Subscriptions', ''],
  ['MICROSOFT 365', 'Software & Subscriptions', ''],
  ['ZOOM', 'Software & Subscriptions', ''],
  ['QUICKBOOKS', 'Software & Subscriptions', ''],
  ['MAILCHIMP', 'Software & Subscriptions', ''],
  ['CONVERTKIT', 'Software & Subscriptions', ''],
  ['SQUARESPACE', 'Software & Subscriptions', ''],
  ['WIX', 'Software & Subscriptions', ''],
  ['GODADDY', 'Software & Subscriptions', ''],
  ['NAMECHEAP', 'Software & Subscriptions', ''],
  ['OPENAI', 'Software & Subscriptions', ''],
  ['ANTHROPIC', 'Software & Subscriptions', ''],
  ['MIDJOURNEY', 'Software & Subscriptions', ''],
  // Shipping & Postage
  ['USPS', 'Shipping & Postage', ''],
  ['UPS', 'Shipping & Postage', ''],
  ['FEDEX', 'Shipping & Postage', ''],
  ['PIRATE SHIP', 'Shipping & Postage', ''],
  ['SHIPSTATION', 'Shipping & Postage', ''],
  ['STAMPS.COM', 'Shipping & Postage', ''],
  ['DHL', 'Shipping & Postage', ''],
  // Advertising & Marketing
  ['FACEBOOK ADS', 'Advertising & Marketing', ''],
  ['META ADS', 'Advertising & Marketing', ''],
  ['GOOGLE ADS', 'Advertising & Marketing', ''],
  ['ETSY ADS', 'Advertising & Marketing', ''],
  ['PINTEREST ADS', 'Advertising & Marketing', ''],
  ['TIKTOK ADS', 'Advertising & Marketing', ''],
  // Contract Labor
  ['UPWORK', 'Contract Labor', ''],
  ['FIVERR', 'Contract Labor', ''],
  ['99DESIGNS', 'Contract Labor', ''],
  // Materials & Supplies (COGS)
  ['ULINE', 'Materials & Supplies (COGS)', ''],
  ['MICHAELS', 'Materials & Supplies (COGS)', ''],
  ['JOANN', 'Materials & Supplies (COGS)', ''],
  ['HOBBY LOBBY', 'Materials & Supplies (COGS)', ''],
  ['PRINTFUL', 'Materials & Supplies (COGS)', ''],
  ['PRINTIFY', 'Materials & Supplies (COGS)', ''],
  // Office Expense
  ['STAPLES', 'Office Expense', ''],
  ['OFFICE DEPOT', 'Office Expense', ''],
  ['AMZN', 'Office Expense', ''],
  ['AMAZON', 'Office Expense', ''],
  // Travel
  ['DELTA', 'Travel', ''],
  ['UNITED', 'Travel', ''],
  ['SOUTHWEST', 'Travel', ''],
  ['MARRIOTT', 'Travel', ''],
  ['HILTON', 'Travel', ''],
  ['AIRBNB', 'Travel', ''],
  // Meals
  ['STARBUCKS', 'Meals (50% note)', ''],
  ['RESTAURANT', 'Meals (50% note)', ''],
  ['DOORDASH', 'Meals (50% note)', ''],
  ['CAFE', 'Meals (50% note)', ''],
  // Bank & Merchant Fees
  ['SERVICE FEE', 'Bank & Merchant Fees', ''],
  ['MONTHLY FEE', 'Bank & Merchant Fees', ''],
  ['WIRE FEE', 'Bank & Merchant Fees', ''],
  ['OVERDRAFT', 'Bank & Merchant Fees', ''],
  // Taxes & Licenses
  ['IRS', 'Taxes & Licenses', ''],
  ['FRANCHISE TAX', 'Taxes & Licenses', ''],
  ['LLC FEE', 'Taxes & Licenses', ''],
  ['STATE OF', 'Taxes & Licenses', ''],
  // Revenue (TYPE rules)
  ['ETSY DEPOSIT', 'Revenue', 'type rule'],
  ['SHOPIFY PAYOUT', 'Revenue', 'type rule'],
  ['STRIPE PAYOUT', 'Revenue', 'type rule'],
  ['PAYPAL TRANSFER IN', 'Revenue', 'type rule'],
  ['SQUARE DEPOSIT', 'Revenue', 'type rule'],
  ['DIRECT DEPOSIT', 'Revenue', 'type rule'],
  // Owner (TYPE rules) — wedge #3, the books mistake the import catches
  ['OWNER DRAW', 'Owner', 'type rule'],
  ["OWNER'S DRAW", 'Owner', 'type rule'],
  ['MEMBER DRAW', 'Owner', 'type rule'],
  ['PERSONAL', 'Owner', 'type rule'],
  ['ATM WITHDRAWAL', 'Owner', 'type rule'],
  ['VENMO', 'Owner', 'type rule'],
  ['ZELLE', 'Owner', 'type rule'],
  ['CASH APP', 'Owner', 'type rule'],
  // Transfer (TYPE rule)
  ['TRANSFER', 'Transfer', 'type rule'],
  ['XFER', 'Transfer', 'type rule']
];

// ── Tab names + order (the bottom strip) ──────────────────────────────
var TABS = {
  START: 'Start Here', DASHBOARD: 'Dashboard', PNL: 'P&L', TAX: 'Tax Center',
  TRENDS: 'Trends', INVOICES: 'Invoices', MILEAGE: 'Mileage',
  TX: 'Transactions', IMPORT: 'Bank Import Guide', CLIENTS: 'Clients',
  ACCOUNTS: 'Accounts', CATEGORIES: 'Categories',
  ENGINE: '_Engine', CONFIG: '_Config', SCHEMA: '_Schema'
};
var TAB_ORDER = [
  TABS.START, TABS.DASHBOARD, TABS.PNL, TABS.TAX, TABS.TRENDS,
  TABS.INVOICES, TABS.MILEAGE, TABS.TX, TABS.IMPORT, TABS.CLIENTS,
  TABS.ACCOUNTS, TABS.CATEGORIES, TABS.ENGINE, TABS.CONFIG, TABS.SCHEMA
];
var SYSTEM_TABS = [TABS.ENGINE, TABS.CONFIG, TABS.SCHEMA];

var GRID_COLS = 12;            // A..L content grid for presentation tabs
var CHROME_LAST_ROW = 4;       // rows 1-2 forest, 3 canopy, 4 gold rule
var CONTENT_START_ROW = 6;     // first content row (row 5 is a 24px spacer)

// ── Layout contracts (the cross-reference audit pins these) ───────────
// Categories: headers row 10 · fixed cats rows 11-30 · custom 31-35 ·
//   system rows 36-38 (Revenue/Transfer/Owner) · keyword rules E11:G200.
// Registries: Clients + Accounts data rows 10-21.
// Transactions: header row 9 · data rows 10-5009 · Month helper col I.
// _Engine: months B1:Y1 · expense cats rows 2-21 · custom 22-26 ·
//   revenue streams 27-34 · Revenue 35 · Expenses 36 · NetProfit 37 ·
//   Margin 38 · OwnerDraws 39 · EscrowTransfers 40.
var ENGINE_ROWS = {
  CAT_FIRST: 2, CUSTOM_FIRST: 22, STREAM_FIRST: 27, STREAM_COUNT: 8,
  REVENUE: 35, EXPENSES: 36, NET: 37, MARGIN: 38, OWNER: 39, ESCROW: 40
};
var REGISTRY_FIRST_ROW = 10;   // Clients + Accounts data rows 10-21
var REGISTRY_ROW_COUNT = 12;

// ── Mock data — Maya Chen, Chen Studio (design_handoff_the_ledger/04) ──
// Six months ending "now". Story figures locked: Q1 net $13,790 ·
// Q1 recommended $3,448 vs paid $2,400 · escrow $2,400 vs $5,147
// recommended YTD -> gap $2,747 · margin 71.0% -> 58.0% · Jun rev $6,900.
// The generator slides DATES to the trailing 6 calendar months ending
// today (Foundation pattern) so the demo always lines up with the rolling
// engine window; the figures themselves are fixed.
var MOCK = {
  buyer: { name: 'Maya Chen', biz: 'Chen Studio' },

  // Monthly revenue, oldest first (Jan..Jun in the canonical story)
  revenue_by_month: [6400, 6700, 6900, 5500, 5600, 6900],
  // Stream split: Etsy 55% · Brightline 27% · Hawthorn 13% · Affiliate rest
  stream_split: { etsy: 0.55, brightline: 0.27, hawthorn: 0.13 },

  // Per-category monthly expense plan (cols = the 6 mock months, oldest
  // first). Column sums are EXACT: 1856 · 2077 · 2277 · 2090 · 2212 · 2898
  // -> nets 4544 · 4623 · 4623 · 3410 · 3388 · 4002 -> margins 71.0% ->
  // 58.0%. Keyed by category index in LEDGER_CATEGORIES.
  expense_plan: {
    'Advertising & Marketing':     [230, 260, 290, 280, 300, 380],
    'Platform & Payment Fees':     [300, 330, 360, 330, 345, 460],
    'Contract Labor':              [150, 200, 250, 250, 300, 350],
    'Materials & Supplies (COGS)': [280, 300, 320, 300, 310, 420],
    'Insurance':                   [45, 45, 45, 45, 45, 45],
    'Office Expense':              [60, 70, 75, 70, 75, 95],
    'Shipping & Postage':          [240, 260, 280, 250, 260, 360],
    'Meals (50% note)':            [40, 55, 60, 55, 60, 80],
    'Utilities':                   [90, 90, 90, 90, 90, 90],
    'Software & Subscriptions':    [85, 110, 150, 185, 215, 240],
    'Education & Training':        [0, 60, 0, 60, 0, 60],
    'Home Office':                 [120, 120, 120, 120, 120, 120],
    'Bank & Merchant Fees':        [16, 22, 22, 25, 27, 28],
    'Misc':                        [200, 155, 215, 30, 65, 170]
  },

  // The subscription creep: roster grows 2 -> 8 tools (six added since
  // month 1 — the SUBS insight). Month m uses the first `subs_roster_size[m]`.
  subs_roster: ['ADOBE CREATIVE CLOUD', 'CANVA PRO', 'NOTION', 'CONVERTKIT',
    'MIDJOURNEY', 'DROPBOX', 'ZOOM.US', 'GOOGLE WORKSPACE'],
  subs_roster_size: [2, 3, 4, 5, 6, 8],

  owner_draw_monthly: 2500,       // visible info lines, provably absent from profit
  escrow_transfer: { months: [0, 1], amount: 1200 },  // Jan + Feb, then she stopped

  clients: [
    ['Etsy Shop',         'Platform',  9.5, 'Yes', ''],
    ['Brightline Studio', 'Client',    '',  'Yes', ''],
    ['Hawthorn & Co.',    'Client',    '',  'Yes', ''],
    ['Affiliate Links',   'Affiliate', '',  'Yes', '']
  ],

  // [name, type, institution, starting, current]
  accounts: [
    ['Biz Checking (Novo)', 'Checking',          'Novo',   5200, 6840],
    ['Tax Escrow (Ally)',   'Tax Escrow',        'Ally',   0,    2400],
    ['Biz Credit Card',     'Credit',            'Chase',  0,    -1180],
    ['PayPal Balance',      'Payment Processor', 'PayPal', 180,  640],
    ['Square Balance',      'Payment Processor', 'Square', 60,   210]
  ],

  // Monthly Target seeds for the Categories tab (col C, yellow)
  category_targets: {
    'Advertising & Marketing': 350, 'Platform & Payment Fees': 400,
    'Contract Labor': 400, 'Materials & Supplies (COGS)': 450,
    'Insurance': 50, 'Legal & Professional': 50, 'Office Expense': 100,
    'Shipping & Postage': 400, 'Rent (workspace/equip)': 0,
    'Repairs & Maintenance': 50, 'Supplies': 50, 'Taxes & Licenses': 50,
    'Travel': 100, 'Meals (50% note)': 100, 'Utilities': 100,
    'Software & Subscriptions': 150, 'Education & Training': 75,
    'Home Office': 120, 'Bank & Merchant Fees': 30, 'Misc': 150
  },

  // Invoices — issued/due/paid as day offsets from TODAY so the overdue
  // painting and the Paid-this-month card always demo correctly.
  // [num, client, description, issuedOffset, dueOffset, amount, status, paidOffset|null]
  invoices: [
    [1001, 'Brightline Studio', 'Brand refresh — phase 2', -45, -31, 2400, 'Paid', -29],
    [1002, 'Hawthorn & Co.',    'Packaging design',        -29, -15, 1800, 'Sent', null],
    [1003, 'Brightline Studio', 'Summer campaign assets',   -7,   7, 2200, 'Sent', null],
    [1004, 'Hawthorn & Co.',    'Logo variations',         -21,  -7,  950, 'Paid', -7],
    [1005, 'Brightline Studio', 'Q3 retainer (draft)',      -1,  13, 1500, 'Draft', null]
  ],

  // Mileage — [monthIdx 0-5, day, purpose, miles] · 310 mi total
  mileage: [
    [0, 9,  'Post office run', 9],
    [0, 21, 'Client meeting · Brightline Studio', 24],
    [1, 6,  'Supply pickup · Uline', 26],
    [1, 17, 'Post office run', 9],
    [1, 26, 'Client meeting · Hawthorn & Co.', 32],
    [2, 10, 'Post office run', 9],
    [2, 19, 'Client meeting · Brightline Studio', 24],
    [2, 31, 'Materials run · Michaels', 19],
    [3, 9,  'Post office run', 9],
    [3, 22, 'Design expo · convention center', 58],
    [4, 7,  'Client meeting · Hawthorn & Co.', 32],
    [4, 18, 'Supply pickup · Uline', 26],
    [5, 3,  'Post office run', 9],
    [5, 10, 'Client meeting · Brightline Studio', 24]
  ],

  // Tax Center mock inputs
  quarter_paid: [2400, 0, 0, 0],   // Q1 paid $2,400 — Q2 is the gap story

  ai_insights: [
    ['ESCROW', 'Q2 estimated taxes due Jun 15. Escrow holds $2,400 against $5,150 recommended — $2,750 short.'],
    ['SUBS', 'Software is up $85 → $240/mo. Six tools added since January.'],
    ['WIN', 'Margin held above 55% even as fees scaled. Pricing is working.']
  ]
};

// Donut row labels — 11 highest-signal expense categories + Other.
// Values are live engine formulas; only the labels are static.
var DONUT_CATS = [
  'Platform & Payment Fees', 'Materials & Supplies (COGS)',
  'Advertising & Marketing', 'Shipping & Postage', 'Contract Labor',
  'Software & Subscriptions', 'Misc', 'Home Office', 'Office Expense',
  'Utilities', 'Meals (50% note)'
];
/**
 * Column & Co. — The Ledger v1.0
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
 * Column & Co. — The Ledger v1.0
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
 * Column & Co. — The Ledger v1.0
 * 03 · Build orchestrator.
 *
 * buildWorkbook(mode) constructs the entire 15-tab workbook from scratch:
 * brand chrome, all tabs, named ranges, seeded hidden sheets, mock data.
 *   mode = 'mock'  → ships Maya Chen / Chen Studio pre-populated (demo)
 *   mode = 'blank' → editable cells cleared for a real buyer
 *
 * Run once from the Apps Script editor (or 💳 Column & Co. ▸ Setup)
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
  buildSchema_(sheets[TABS.SCHEMA], mode);
  buildCategories_(sheets[TABS.CATEGORIES], mode);
  buildClients_(sheets[TABS.CLIENTS], mode);
  buildAccounts_(sheets[TABS.ACCOUNTS], mode);
  buildTransactions_(sheets[TABS.TX], mode);
  buildEngine_(sheets[TABS.ENGINE], mode);

  // 3. Presentation + action tabs.
  buildStartHere_(sheets[TABS.START]);
  buildDashboard_(sheets[TABS.DASHBOARD], mode);
  buildPnl_(sheets[TABS.PNL], mode);
  buildTaxCenter_(sheets[TABS.TAX], mode);
  buildTrends_(sheets[TABS.TRENDS], mode);
  buildInvoices_(sheets[TABS.INVOICES], mode);
  buildMileage_(sheets[TABS.MILEAGE], mode);
  buildBankImport_(sheets[TABS.IMPORT], mode);

  // 4. Named ranges (catalog from 03_data_model.md).
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
  dp.setProperty('cc_build_mode', mode);
  dp.deleteProperty('cc_first_open');

  // 7. Land on Start Here.
  sheets[TABS.START].activate();
  ss.toast('Built ' + CC.PRODUCT + ' ' + CC.VERSION + ' (' + mode + ' data)', CC.BRAND, 5);
}

function getOrCreateSheet_(ss, name) {
  var sh = ss.getSheetByName(name);
  if (!sh) sh = ss.insertSheet(name);
  // Fully unmerge the whole grid first — clear() does NOT remove merges, and
  // leftover merges from a prior build collide with the new chrome merges.
  try { sh.getRange(1, 1, sh.getMaxRows(), sh.getMaxColumns()).breakApart(); } catch (e) {}
  // Same story for data validations: clear() leaves them in place, so dropdowns
  // from a previous build would linger.
  sh.getRange(1, 1, sh.getMaxRows(), sh.getMaxColumns()).clearDataValidations();
  sh.clear();
  sh.clearConditionalFormatRules();
  sh.getCharts().forEach(function (c) { sh.removeChart(c); });
  sh.setHiddenGridlines(true);
  // Builders hide helper rows/cols on rebuild-able sheets; unhide first so
  // a rebuild starts from a clean grid.
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
    'cc_active_palette':  TABS.CONFIG + '!B40',
    'cc_palettes':        TABS.CONFIG + '!A3:I26',
    'cc_setaside_table':  TABS.CONFIG + '!B31:C34',
    'cc_categories':      TABS.CATEGORIES + '!A11:A35',
    'cc_tx_categories':   TABS.CATEGORIES + '!A11:A38',
    'cc_keyword_rules':   TABS.CATEGORIES + '!E11:G200',
    'cc_clients_list':    TABS.CLIENTS + '!A10:A21',
    'cc_accounts_list':   TABS.ACCOUNTS + '!A10:A21',
    'cc_engine_months':   TABS.ENGINE + '!B1:Y1',
    'cc_engine_data':     TABS.ENGINE + '!B2:Y40',
    'cc_dashboard_month': TABS.DASHBOARD + '!N4',
    'cc_trends_window':   TABS.TRENDS + '!N7',
    'cc_tax_year':        TABS.TAX + '!A11',
    'cc_setaside_pct':    TABS.TAX + '!K11',
    'cc_mileage_rate':    TABS.TAX + '!I11',
    'cc_escrow_balance':  TABS.TAX + '!E22',
    'cc_mileage_ytd':     TABS.MILEAGE + '!G11'
  };
  Object.keys(defs).forEach(function (name) {
    try { ss.setNamedRange(name, ss.getRange(defs[name])); } catch (e) {}
  });
}
/**
 * Column & Co. — The Ledger v1.0
 * 04 · Data + system tabs: _Config, _Schema, Categories, Clients,
 *      Accounts, Transactions, _Engine.
 *
 * _Engine is formula-driven (SUMIFS over Transactions) so every view
 * updates automatically as the buyer imports. The mock variant seeds a
 * realistic 6-month ledger so the demo shows real numbers through the
 * same formulas.
 */

// ── _Config — palette table, set-aside presets, active selections ─────
// The presets block sits BELOW the 24 palette rows (3-26). The Foundation
// parked its profiles at C20, which collides with palette rows 20-26 once
// the table grew to 24 — the Ledger keeps the lanes separate.
function buildConfig_(sheet) {
  sheet.getRange('A1').setValue('palettes');
  var palHdr = ['id', 'name', 'primary', 'mid', 'accent', 'bg', 'zebra', 'dark', 'accentLight'];
  sheet.getRange(2, 1, 1, palHdr.length).setValues([palHdr]).setFontWeight('bold');
  var palRows = PALETTES.map(function (p) {
    return [p.id, p.name, p.primary, p.mid, p.accent, p.bg, p.zebra, p.dark, p.accentLight];
  });
  sheet.getRange(3, 1, palRows.length, palHdr.length).setValues(palRows);

  sheet.getRange('A29').setValue('setaside_presets');
  sheet.getRange(30, 1, 1, 4).setValues([['id', 'label', 'pct', 'blurb']]).setFontWeight('bold');
  var presetRows = SETASIDE_PRESETS.map(function (p) { return [p.id, p.label, p.pct, p.blurb]; });
  sheet.getRange(31, 1, presetRows.length, 4).setValues(presetRows);

  sheet.getRange('A40').setValue('active_palette'); sheet.getRange('B40').setValue(DEFAULT_PALETTE);
  sheet.getRange('A41').setValue('active_preset');  sheet.getRange('B41').setValue(DEFAULT_PRESET);
}

// ── _Schema — LLM-readable plain-English description (the wedge) ───────
// No line may begin with "=" (a leading = turns prose into a broken formula).
function buildSchema_(sheet, mode) {
  var lines = [
    'The Ledger v1.0 — Workbook Schema for AI assistants',
    '────────────────────────────────────────────────────',
    '',
    (mode === 'mock')
      ? 'This workbook tracks a solo business (Schedule C). Demo buyer: Maya Chen, Chen Studio.'
      : 'This workbook tracks a solo business (Schedule C).',
    '',
    'Tabs:',
    '  • Transactions — every transaction. Columns: Date, Description, Amount',
    '    (negative = money out, positive = money in), Type, Category,',
    '    Client/Stream, Account, Notes, Month.',
    '  • Clients — registry of clients and income streams (Etsy shop, retainer',
    '    clients, affiliates). Feeds the P&L revenue rows.',
    '  • Accounts — business accounts. Exactly one row is typed "Tax Escrow";',
    '    the Tax Center reads its balance.',
    '  • Categories — 20 expense categories, each mapped to its Schedule C line,',
    '    plus 5 custom slots, monthly targets, and keyword rules for imports.',
    '  • Invoices — invoice tracking (Draft / Sent / Paid). Cash basis: revenue',
    '    enters the books when money lands in Transactions, never from here.',
    '  • Mileage — business-mile log. Deduction = miles × the Tax Center rate.',
    '  • Tax Center — quarterly estimated-tax planner: recommended set-aside',
    '    per quarter, due dates, payments, and the escrow gap.',
    '  • P&L — profit & loss by Month / Quarter / YTD, Schedule-C-mapped.',
    '  • Dashboard, Trends — read-only views over the data.',
    '  • _Engine — pre-aggregated month × category/stream sums. 24-month window.',
    '',
    'Conventions:',
    '  • Months in Transactions.Month are formatted YYYY-MM.',
    '  • Amounts are signed: negative = money out, positive = money in.',
    '  • Type drives the books: Revenue and Expense hit the P&L; Transfer moves',
    '    money between own accounts; Owner = draws/contributions and is NEVER',
    '    counted in profit (the #1 solo-books mistake, handled).',
    '  • Cash basis. Quarter math: net profit per quarter × the set-aside %',
    '    (preset or custom) = recommended estimated-tax set-aside.',
    '  • Status chips: "On Track" / "Fair" (within 110%) / "Over".',
    '  • Fonts: Playfair Display is substituted with Lora, Jost with Roboto',
    '    (Sheets-native).',
    '',
    'For analysis, query the Transactions sheet. Typical questions:',
    '  • Which expense categories grew fastest over the last 6 months?',
    '  • Am I on pace for the next quarterly estimated-tax payment?',
    '  • Which clients or streams drive margin, and which drag it?',
    '  • What subscriptions crept in, and what do they cost per year?'
  ];
  sheet.getRange(1, 1, lines.length, 1).setValues(lines.map(function (l) { return [l]; }));
  sheet.getRange(1, 1, lines.length, 1).setFontFamily('Roboto Mono').setFontSize(10);
  sheet.setColumnWidth(1, 720);
}

// ── Categories — 20 Schedule-C categories + keyword rules ─────────────
function buildCategories_(sheet, mode) {
  chrome_(sheet, TABS.CATEGORIES, 'H');
  var r = titleRow_(sheet, 'H', 'Categories',
    'Every expense category carries its Schedule C line. Keyword rules auto-tag your imports.');

  sectionLabel_(sheet, 'A' + r, 'C' + r, 'CATEGORY LIST · 20 FIXED + 5 CUSTOM SLOTS');
  r += 1;  // row 10 — column headers
  sheet.getRange(r, 1, 1, 3).setValues([['Name', 'Schedule C line', 'Monthly Target']])
    .setFontWeight('bold').setFontColor(BRAND.BODY).setFontFamily(FONT.BODY).setFontSize(10);

  // Rows 11-30: 20 fixed categories (locked names + Schedule C lines).
  // Monthly Target (col C) is a yellow input — it feeds the Dashboard
  // Top Spending budget column. Mock seeds Maya's targets; blank ships empty.
  var firstCat = r + 1;  // row 11
  sheet.getRange(firstCat, 1, 20, 2).setValues(LEDGER_CATEGORIES);
  sheet.getRange(firstCat, 2, 25, 1).setFontColor(BRAND.CAPTION).setFontSize(10);
  if (mode === 'mock') {
    var targets = CATEGORIES.map(function (c) { return [MOCK.category_targets[c] || 0]; });
    sheet.getRange(firstCat, 3, 20, 1).setValues(targets);
  }
  sheet.getRange(firstCat, 3, 25, 1).setNumberFormat('$#,##0').setBackground(BRAND.YELLOW)
    .setBorder(true, true, true, true, true, true, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);
  // zebra (fixed rows, name + schedule cols only — target col stays yellow)
  for (var z = 0; z < 20; z++) {
    if (z % 2 === 1) {
      var a1 = sheet.getRange(firstCat + z, 1, 1, 2).getA1Notation();
      sheet.getRange(a1).setBackground(PALETTE_BY_ID.light.zebra);
      themable_(sheet.getName(), 'zebra', a1);
    }
  }
  // Meals + COGS scope notes (03_data_model — buyer-facing captions).
  setCell_(sheet, 'A37', { value: '', }); // placeholder, real captions below the table

  // Rows 31-35: 5 custom slots — yellow Name + yellow Schedule C line.
  var customStart = firstCat + 20;   // row 31
  sheet.getRange(customStart, 1, CUSTOM_CATEGORY_SLOTS, 2).setBackground(BRAND.YELLOW)
    .setBorder(true, true, true, true, true, true, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);

  // Rows 36-38: system rows — Revenue / Transfer / Owner (locked). They make
  // the type rules valid dropdown picks and document the type model.
  var sysStart = customStart + CUSTOM_CATEGORY_SLOTS;   // row 36
  sheet.getRange(sysStart, 1, 3, 1).setValues([['Revenue'], ['Transfer'], ['Owner']]).setFontColor(BRAND.CAPTION);
  sheet.getRange(sysStart, 2, 3, 1).setValues([['system — type rule'], ['system — type rule'], ['system — type rule']])
    .setFontColor(BRAND.CAPTION).setFontSize(9);

  // Scope captions (row 40+): COGS + meals notes ship verbatim from the data model.
  setCell_(sheet, 'A40', {
    value: 'Materials & Supplies totals what you spent on materials. Full inventory accounting (Schedule C Part III) is out of scope — if you carry significant inventory, track it with your accountant.',
    merge: 'H40', font: FONT.BODY, size: 10, italic: true, color: BRAND.CAPTION, wrap: true });
  setCell_(sheet, 'A41', {
    value: 'Most business meals are 50% deductible — the P&L shows what you spent; your tax pro applies the limit.',
    merge: 'H41', font: FONT.BODY, size: 10, italic: true, color: BRAND.CAPTION, wrap: true });

  // Keyword rules region (cols E-G), header row 10, rules from row 11.
  sectionLabel_(sheet, 'E9', 'G9', 'KEYWORD RULES · AUTO-CATEGORIZATION + TYPE ROUTING');
  var kr = 10;
  sheet.getRange(kr, 5, 1, 3).setValues([['Keyword', 'Category', 'Note']])
    .setFontWeight('bold').setFontColor(BRAND.BODY).setFontFamily(FONT.BODY).setFontSize(10);
  sheet.getRange(kr + 1, 5, KEYWORD_RULES.length, 3).setValues(KEYWORD_RULES);
  // Category column (F): dropdown sourced from cc_tx_categories so custom
  // slot names + the Revenue/Transfer/Owner type rules all show up.
  var ruleCatRange = SpreadsheetApp.getActive().getRangeByName('cc_tx_categories') ||
    sheet.getRange('A11:A38');
  var ruleCatVal = SpreadsheetApp.newDataValidation()
    .requireValueInRange(ruleCatRange, true)
    .setAllowInvalid(false).build();
  sheet.getRange(kr + 1, 6, 190, 1).setDataValidation(ruleCatVal);

  footer_(sheet, 44, 'H');
  setColWidths_(sheet, [185, 110, 100, 24, 160, 170, 110, 40]);
}

// ── Clients — clients & income streams registry (rows 10-21) ──────────
function buildClients_(sheet, mode) {
  chrome_(sheet, TABS.CLIENTS, 'H');
  var r = titleRow_(sheet, 'H', 'Clients',
    'Clients and income streams. Feeds the Transactions and Invoices dropdowns and the P&L revenue rows.');

  var hdr = ['Name', 'Type', 'Platform fee %', 'Active', 'Notes'];
  sheet.getRange(r, 1, 1, hdr.length).setValues([hdr]).setFontWeight('bold')
    .setBackground(BRAND.FOREST).setFontColor(BRAND.PARCHMENT).setFontFamily(FONT.BODY).setFontSize(10);
  themable_(sheet.getName(), 'primary', sheet.getRange(r, 1, 1, hdr.length).getA1Notation());

  var firstRow = r + 1;   // row 10
  if (mode === 'mock') {
    sheet.getRange(firstRow, 1, MOCK.clients.length, 5).setValues(MOCK.clients);
  }
  // yellow inputs across the registry
  sheet.getRange(firstRow, 1, REGISTRY_ROW_COUNT, 5).setBackground(BRAND.YELLOW)
    .setBorder(true, true, true, true, true, true, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);
  sheet.getRange(firstRow, 3, REGISTRY_ROW_COUNT, 1).setNumberFormat('0.0"%"');

  var typeRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Client', 'Platform', 'Affiliate', 'Other'], true).build();
  sheet.getRange(firstRow, 2, REGISTRY_ROW_COUNT, 1).setDataValidation(typeRule);
  var activeRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Yes', 'No'], true).build();
  sheet.getRange(firstRow, 4, REGISTRY_ROW_COUNT, 1).setDataValidation(activeRule);

  setCell_(sheet, 'A' + (firstRow + REGISTRY_ROW_COUNT + 1), {
    value: 'The first 8 rows feed the revenue-by-stream lines on the P&L. Platform fee % is reference only — actual fees land in Platform & Payment Fees as they post.',
    merge: 'H' + (firstRow + REGISTRY_ROW_COUNT + 1), font: FONT.BODY, size: 10, italic: true, color: BRAND.CAPTION, wrap: true });

  // Footer parked at row 45 so it can never fall inside cc_clients_list.
  footer_(sheet, 45, 'H');
  setColWidths_(sheet, [200, 110, 110, 80, 240, 40, 40, 40]);
}

// ── Accounts — register (rows 10-21), one row typed Tax Escrow ────────
function buildAccounts_(sheet, mode) {
  chrome_(sheet, TABS.ACCOUNTS, 'H');
  var r = titleRow_(sheet, 'H', 'Accounts',
    'Every business account. Type exactly one row Tax Escrow — the Tax Center reads its balance.');

  var hdr = ['Account Name', 'Type', 'Institution', 'Starting Balance', 'Current Balance', 'Last Updated', 'Notes'];
  sheet.getRange(r, 1, 1, hdr.length).setValues([hdr]).setFontWeight('bold')
    .setBackground(BRAND.FOREST).setFontColor(BRAND.PARCHMENT).setFontFamily(FONT.BODY).setFontSize(10);
  themable_(sheet.getName(), 'primary', sheet.getRange(r, 1, 1, hdr.length).getA1Notation());

  var firstRow = r + 1;   // row 10
  var rows = (mode === 'mock')
    ? MOCK.accounts.map(function (a) {
        return [a[0], a[1], a[2], a[3], a[4], new Date(), ''];
      })
    : [];
  if (rows.length) sheet.getRange(firstRow, 1, rows.length, 7).setValues(rows);
  sheet.getRange(firstRow, 4, REGISTRY_ROW_COUNT, 2).setNumberFormat('$#,##0');
  sheet.getRange(firstRow, 6, REGISTRY_ROW_COUNT, 1).setNumberFormat('mmm d, yyyy');

  // yellow input cells: starting + current balance
  sheet.getRange(firstRow, 4, REGISTRY_ROW_COUNT, 2).setBackground(BRAND.YELLOW)
    .setBorder(true, true, true, true, true, true, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);

  var typeRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Checking', 'Savings', 'Tax Escrow', 'Credit', 'Loan', 'Payment Processor'], true).build();
  sheet.getRange(firstRow, 2, REGISTRY_ROW_COUNT, 1).setDataValidation(typeRule);

  // Footer parked at row 45 so it can never fall inside cc_accounts_list.
  footer_(sheet, 45, 'H');
  setColWidths_(sheet, [200, 130, 100, 130, 130, 120, 180]);
}

// ── Transactions — the ledger (mock: generated 6-month ledger) ────────
function buildTransactions_(sheet, mode) {
  // sheet.clear() (via getOrCreateSheet_) does not remove a basic filter,
  // and a second createFilter() throws. Tear down any prior filter first.
  var existingFilter = sheet.getFilter();
  if (existingFilter) existingFilter.remove();

  chrome_(sheet, TABS.TX, 'I');
  var r = titleRow_(sheet, 'I', 'Transactions',
    'Your ledger. Import a CSV or type by hand. Owner rows never touch profit.');

  var hdr = ['Date', 'Description', 'Amount', 'Type', 'Category', 'Client/Stream', 'Account', 'Notes', 'Month'];
  var headerRow = r;   // row 9
  sheet.getRange(headerRow, 1, 1, 9).setValues([hdr]).setFontWeight('bold')
    .setBackground(BRAND.FOREST).setFontColor(BRAND.PARCHMENT).setFontFamily(FONT.BODY).setFontSize(10);
  themable_(sheet.getName(), 'primary', sheet.getRange(headerRow, 1, 1, 9).getA1Notation());
  SpreadsheetApp.flush();  // commit chrome merges before freezing
  try { sheet.setFrozenRows(headerRow); } catch (e) {}

  var firstData = headerRow + 1;   // row 10
  var ledger = (mode === 'mock') ? generateMockLedger_() : [];
  if (ledger.length) {
    sheet.getRange(firstData, 1, ledger.length, 8).setValues(ledger);
  }

  // capacity: 5000 rows (validations to row 5009; zebra is skipped at this
  // scale — the filter + frozen header carry the readability)
  sheet.getRange(firstData, 1, 5000, 1).setNumberFormat('mmm d, yyyy');
  sheet.getRange(firstData, 3, 5000, 1).setNumberFormat('$#,##0.00');
  // Month formula column I across full capacity
  sheet.getRange(firstData, 9, 5000, 1)
    .setFormulaR1C1('=IF(RC1="","",TEXT(RC1,"yyyy-mm"))');

  // dropdowns — Type, Category (cc_tx_categories), Client/Stream, Account
  var ss = SpreadsheetApp.getActive();
  var typeRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(TX_TYPES, true).build();
  sheet.getRange(firstData, 4, 5000, 1).setDataValidation(typeRule);
  var catRange = ss.getRangeByName('cc_tx_categories') ||
    ss.getRange("'" + TABS.CATEGORIES + "'!A11:A38");
  var catList = SpreadsheetApp.newDataValidation()
    .requireValueInRange(catRange, true).build();
  sheet.getRange(firstData, 5, 5000, 1).setDataValidation(catList);
  var clientRule = SpreadsheetApp.newDataValidation()
    .requireValueInRange(ss.getRangeByName('cc_clients_list') ||
      ss.getRange("'" + TABS.CLIENTS + "'!A10:A21"), true).build();
  sheet.getRange(firstData, 6, 5000, 1).setDataValidation(clientRule);
  var acctRule = SpreadsheetApp.newDataValidation()
    .requireValueInRange(ss.getRangeByName('cc_accounts_list') ||
      ss.getRange("'" + TABS.ACCOUNTS + "'!A10:A21"), true).build();
  sheet.getRange(firstData, 7, 5000, 1).setDataValidation(acctRule);

  setColWidths_(sheet, [105, 270, 100, 95, 175, 150, 165, 170, 80]);
  sheet.hideColumns(9); // Month is a helper column

  // Per-column filter icons on the header row (incl. the hidden Month
  // helper, so unhiding I lets a power user filter by yyyy-mm).
  sheet.getRange(headerRow, 1, 1 + 5000, 9).createFilter();
}

// ── Mock ledger generator — PURE (no Sheets calls), so the Node-side
// verification harness can run it and assert the story figures. ────────
// Returns rows of 8: [Date, Description, Amount, Type, Category,
// Client/Stream, Account, Notes]. Monthly sums reproduce MOCK exactly.
function generateMockLedger_() {
  var rows = [];
  var checking = 'Biz Checking (Novo)';
  var escrow = 'Tax Escrow (Ally)';
  var card = 'Biz Credit Card';
  var paypal = 'PayPal Balance';

  // Trailing 6 (year, monthIdx) pairs ending in today's calendar month,
  // oldest first — positionally aligned with the mock month arrays.
  var today = new Date();
  var monthDates = [];
  for (var k = 5; k >= 0; k--) {
    var d = new Date(today.getFullYear(), today.getMonth() - k, 1);
    monthDates.push({ year: d.getFullYear(), monthIdx: d.getMonth() });
  }

  // Split an amount into n near-equal integer parts (parts sum exactly).
  var split = function (amount, n) {
    var parts = [], base = Math.floor(amount / n), rem = amount - base * n;
    for (var i = 0; i < n; i++) parts.push(base + (i < rem ? 1 : 0));
    return parts;
  };

  // Expense merchants per category (cycled when a month emits several rows)
  var merchants = {
    'Advertising & Marketing':     ['ETSY ADS', 'PINTEREST ADS', 'META ADS', 'GOOGLE ADS'],
    'Platform & Payment Fees':     ['ETSY FEE', 'STRIPE FEE', 'PAYPAL FEE', 'SQUARE FEE'],
    'Contract Labor':              ['UPWORK', 'FIVERR', '99DESIGNS'],
    'Materials & Supplies (COGS)': ['ULINE', 'MICHAELS', 'JOANN', 'PRINTFUL'],
    'Insurance':                   ['HISCOX BIZ INSURANCE'],
    'Office Expense':              ['STAPLES', 'AMZN MKTP'],
    'Shipping & Postage':          ['USPS', 'PIRATE SHIP', 'UPS', 'FEDEX'],
    'Meals (50% note)':            ['STARBUCKS', 'CAFE LUNA'],
    'Utilities':                   ['COMCAST BUSINESS', 'VERIZON'],
    'Education & Training':        ['SKILLSHARE'],
    'Home Office':                 ['HOME OFFICE ALLOCATION'],
    'Bank & Merchant Fees':        ['NOVO SERVICE FEE'],
    'Misc':                        ['SQUARE INC MISC', 'USPS PO BOX', 'NOTARY SERVICE']
  };
  var acctFor = function (cat, j) {
    if (cat === 'Platform & Payment Fees') return j % 2 === 0 ? checking : paypal;
    if (cat === 'Bank & Merchant Fees') return checking;
    return j % 2 === 0 ? card : checking;
  };
  var rowsFor = function (amt) { return amt >= 200 ? 4 : amt >= 100 ? 3 : amt >= 50 ? 2 : 1; };

  for (var m = 0; m < 6; m++) {
    var year = monthDates[m].year;
    var monthIdx = monthDates[m].monthIdx;

    // — Revenue: Etsy weekly deposits + client ACH + affiliate payout —
    var rev = MOCK.revenue_by_month[m];
    var etsy = Math.round(rev * MOCK.stream_split.etsy);
    var bright = Math.round(rev * MOCK.stream_split.brightline);
    var haw = Math.round(rev * MOCK.stream_split.hawthorn);
    var aff = rev - etsy - bright - haw;
    var etsyParts = split(etsy, 4);
    for (var w = 0; w < 4; w++) {
      rows.push([new Date(year, monthIdx, 4 + w * 7), 'ETSY DEPOSIT', etsyParts[w], 'Revenue', '', 'Etsy Shop', checking, '']);
    }
    rows.push([new Date(year, monthIdx, 12), 'ACH CREDIT BRIGHTLINE STUDIO', bright, 'Revenue', '', 'Brightline Studio', checking, '']);
    rows.push([new Date(year, monthIdx, 19), 'ACH CREDIT HAWTHORN AND CO', haw, 'Revenue', '', 'Hawthorn & Co.', checking, '']);
    rows.push([new Date(year, monthIdx, 25), 'AFFILIATE PAYOUT', aff, 'Revenue', '', 'Affiliate Links', paypal, '']);

    // — Expenses: per-category plan, split into realistic merchant rows —
    for (var c = 0; c < CATEGORIES.length; c++) {
      var cat = CATEGORIES[c];
      var plan = MOCK.expense_plan[cat];
      if (!plan) continue;
      var amt = plan[m];
      if (amt <= 0) continue;

      if (cat === 'Software & Subscriptions') {
        // The creep: a growing roster of tools, total = plan amount.
        var size = MOCK.subs_roster_size[m];
        var parts = split(amt, size);
        for (var t = 0; t < size; t++) {
          rows.push([new Date(year, monthIdx, 2 + t * 3), MOCK.subs_roster[t], -parts[t], 'Expense', cat, '', card, '']);
        }
      } else {
        var n = rowsFor(amt);
        var pieces = split(amt, n);
        var names = merchants[cat] || ['MISC PURCHASE'];
        for (var j = 0; j < n; j++) {
          var day = 3 + ((c * 3 + j * 7) % 24);
          rows.push([new Date(year, monthIdx, day), names[j % names.length], -pieces[j], 'Expense', cat, '', acctFor(cat, j), '']);
        }
      }
    }

    // — Owner draw: visible info line, provably absent from profit —
    rows.push([new Date(year, monthIdx, 28), 'OWNER DRAW — MAYA CHEN', -MOCK.owner_draw_monthly, 'Owner', '', '', checking, '']);

    // — Escrow transfers (the story: January + February, then she stopped) —
    if (MOCK.escrow_transfer.months.indexOf(m) !== -1) {
      rows.push([new Date(year, monthIdx, 6), 'TRANSFER TO TAX ESCROW', -MOCK.escrow_transfer.amount, 'Transfer', '', '', checking, '']);
      rows.push([new Date(year, monthIdx, 6), 'TRANSFER FROM CHECKING', MOCK.escrow_transfer.amount, 'Transfer', '', '', escrow, '']);
    }
  }
  rows.sort(function (a, b) { return b[0] - a[0]; });
  return rows;
}

// ── _Engine — formula-driven aggregation (SUMIFS over Transactions) ───
function buildEngine_(sheet, mode) {
  // Row 1: 24 rolling-window month headers (YYYY-MM) ending in today's
  // calendar month. Column Y is always "this month".
  var monthCodes = monthCodesEndingAt_(new Date());
  sheet.getRange('A1').setValue('metric \\ month').setFontWeight('bold');
  // Force text format BEFORE setValues — otherwise some locales auto-parse
  // "2026-05" to a date, which then breaks downstream string matches.
  sheet.getRange(1, 2, 1, 24).setNumberFormat('@').setValues([monthCodes]).setFontWeight('bold');

  var txAmount = "'" + TABS.TX + "'!$C:$C";
  var txType   = "'" + TABS.TX + "'!$D:$D";
  var txCat    = "'" + TABS.TX + "'!$E:$E";
  var txStream = "'" + TABS.TX + "'!$F:$F";
  var txAcct   = "'" + TABS.TX + "'!$G:$G";
  var txMonth  = "'" + TABS.TX + "'!$I:$I";

  // Rows 2-21: 20 fixed expense categories.
  for (var i = 0; i < CATEGORIES.length; i++) {
    var row = ENGINE_ROWS.CAT_FIRST + i;
    sheet.getRange(row, 1).setValue(CATEGORIES[i]);
    for (var c = 0; c < 24; c++) {
      var colL = columnToLetter_(2 + c);
      sheet.getRange(row, 2 + c).setFormula(
        '=ABS(SUMIFS(' + txAmount + ',' + txType + ',"Expense",' + txCat + ',$A' + row + ',' + txMonth + ',' + colL + '$1))'
      );
    }
  }
  // Rows 22-26: 5 custom-category slots (names pulled from Categories tab).
  for (var cs = 0; cs < CUSTOM_CATEGORY_SLOTS; cs++) {
    var crow = ENGINE_ROWS.CUSTOM_FIRST + cs;
    sheet.getRange(crow, 1).setFormula("='" + TABS.CATEGORIES + "'!A" + (31 + cs));
    for (var cc = 0; cc < 24; cc++) {
      var ccolL = columnToLetter_(2 + cc);
      sheet.getRange(crow, 2 + cc).setFormula(
        '=IF($A' + crow + '="",0,ABS(SUMIFS(' + txAmount + ',' + txType + ',"Expense",' + txCat + ',$A' + crow + ',' + txMonth + ',' + ccolL + '$1)))'
      );
    }
  }
  // Rows 27-34: revenue by stream — first 8 Clients-registry rows.
  for (var s = 0; s < ENGINE_ROWS.STREAM_COUNT; s++) {
    var srow = ENGINE_ROWS.STREAM_FIRST + s;
    sheet.getRange(srow, 1).setFormula("='" + TABS.CLIENTS + "'!A" + (REGISTRY_FIRST_ROW + s));
    for (var sc = 0; sc < 24; sc++) {
      var scolL = columnToLetter_(2 + sc);
      sheet.getRange(srow, 2 + sc).setFormula(
        '=IF($A' + srow + '="",0,SUMIFS(' + txAmount + ',' + txType + ',"Revenue",' + txStream + ',$A' + srow + ',' + txMonth + ',' + scolL + '$1))'
      );
    }
  }
  // Z1 helper: the name of the (single) Tax Escrow account — feeds row 40.
  sheet.getRange('Z1').setFormula(
    "=IFERROR(INDEX('" + TABS.ACCOUNTS + "'!$A$10:$A$21,MATCH(\"Tax Escrow\",'" + TABS.ACCOUNTS + "'!$B$10:$B$21,0)),\"\")");
  sheet.getRange('Z2').setValue('escrow account (auto)').setFontColor(BRAND.CAPTION).setFontSize(8);

  // Rows 35-40: Revenue, Expenses, NetProfit, Margin, OwnerDraws, EscrowTransfers.
  sheet.getRange(ENGINE_ROWS.REVENUE, 1).setValue('Revenue');
  sheet.getRange(ENGINE_ROWS.EXPENSES, 1).setValue('Expenses');
  sheet.getRange(ENGINE_ROWS.NET, 1).setValue('NetProfit');
  sheet.getRange(ENGINE_ROWS.MARGIN, 1).setValue('Margin');
  sheet.getRange(ENGINE_ROWS.OWNER, 1).setValue('OwnerDraws');
  sheet.getRange(ENGINE_ROWS.ESCROW, 1).setValue('EscrowTransfers');
  for (var c2 = 0; c2 < 24; c2++) {
    var L = columnToLetter_(2 + c2);
    sheet.getRange(ENGINE_ROWS.REVENUE, 2 + c2).setFormula(
      '=SUMIFS(' + txAmount + ',' + txType + ',"Revenue",' + txMonth + ',' + L + '$1)');
    sheet.getRange(ENGINE_ROWS.EXPENSES, 2 + c2).setFormula(
      '=SUM(' + L + ENGINE_ROWS.CAT_FIRST + ':' + L + (ENGINE_ROWS.CUSTOM_FIRST + CUSTOM_CATEGORY_SLOTS - 1) + ')');
    sheet.getRange(ENGINE_ROWS.NET, 2 + c2).setFormula(
      '=' + L + ENGINE_ROWS.REVENUE + '-' + L + ENGINE_ROWS.EXPENSES);
    sheet.getRange(ENGINE_ROWS.MARGIN, 2 + c2).setFormula(
      '=IF(' + L + ENGINE_ROWS.REVENUE + '=0,0,' + L + ENGINE_ROWS.NET + '/' + L + ENGINE_ROWS.REVENUE + ')');
    sheet.getRange(ENGINE_ROWS.OWNER, 2 + c2).setFormula(
      '=ABS(SUMIFS(' + txAmount + ',' + txType + ',"Owner",' + txMonth + ',' + L + '$1,' + txAmount + ',"<0"))');
    sheet.getRange(ENGINE_ROWS.ESCROW, 2 + c2).setFormula(
      '=IF($Z$1="",0,SUMIFS(' + txAmount + ',' + txType + ',"Transfer",' + txAcct + ',$Z$1,' + txMonth + ',' + L + '$1,' + txAmount + ',">0"))');
  }
  sheet.getRange(2, 2, ENGINE_ROWS.NET - 1, 24).setNumberFormat('$#,##0');
  sheet.getRange(ENGINE_ROWS.MARGIN, 2, 1, 24).setNumberFormat('0.0%');
  sheet.getRange(ENGINE_ROWS.OWNER, 2, 2, 24).setNumberFormat('$#,##0');
}

function columnToLetter_(col) {
  var letter = '';
  while (col > 0) { var m = (col - 1) % 26; letter = String.fromCharCode(65 + m) + letter; col = Math.floor((col - 1) / 26); }
  return letter;
}

// ── Re-anchor the engine's rolling 24-month window ────────────────────
// Rewrites _Engine!B1:Y1 to end in anchorDate's calendar month.
// Idempotent. Returns true if the window actually shifted.
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

// Returns the 'YYYY-MM' currently in _Engine!Y1, or '' if engine missing.
function lastEngineMonthCode_() {
  var ss = SpreadsheetApp.getActive();
  var eng = ss.getSheetByName(TABS.ENGINE);
  if (!eng) return '';
  return String(eng.getRange(1, 25).getValue() || '');
}
/**
 * Column & Co. — The Ledger v1.0
 * 05 · View tabs: Start Here, Dashboard, P&L, Trends.
 *
 * _Engine month columns: B..Y = a rolling 24-month window ending in the
 * current calendar month. Column Y is always "this month". Views read the
 * active month via cc_dashboard_month (Dashboard!N4) so the month pills
 * re-drive every figure.
 */

var ENG = "'" + '_Engine' + "'";       // qualified sheet ref
var CUR_MONTH_IDX = 23;                 // 0-based — Y is the active default

// ── Start Here ────────────────────────────────────────────────────────
function buildStartHere_(sheet) {
  chrome_(sheet, TABS.START, 'L', 'SETUP GUIDE');
  var r = CONTENT_START_ROW;

  setCell_(sheet, 'A' + r, { value: 'Open it. Add your numbers. Know what you owe.',
    merge: 'L' + r, font: FONT.DISPLAY, size: 26, bold: true, color: BRAND.FOREST, v: 'bottom' });
  sheet.setRowHeight(r, 40);
  setCell_(sheet, 'A' + (r + 1), {
    value: 'A business-finance system you own. No subscription, no third party holding your books. Track the money, see the profit, and never get surprised by a quarterly tax bill again.',
    merge: 'L' + (r + 1), font: FONT.BODY, size: 13, color: BRAND.BODY, wrap: true, v: 'top' });
  sheet.setRowHeight(r + 1, 36);

  // Choose Your Theme — 24 tiles in a 12x2 grid (one tile per column, A..L)
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

  // Setup guide — 6 steps spanning A..L (2 cols each)
  r = tileTop + 7;
  sectionLabel_(sheet, 'A' + r, 'L' + r, 'SETUP GUIDE · 6 STEPS');
  r += 1;
  var steps = [
    ['1', 'Install the Script', 'Extensions → Apps Script → paste the ColumnCo file. A 💳 Column & Co. menu appears.'],
    ['2', 'Add Accounts', 'Register every business account. Type exactly one as Tax Escrow.'],
    ['3', 'Add Clients & Streams', 'List your shop, clients, and affiliates on the Clients tab. They feed the P&L.'],
    ['4', 'Set Your Tax Rate', 'Open Tax Center. Pick a set-aside preset — or set your own % in yellow.'],
    ['5', 'Import Transactions', 'Pick the account in C10 of Bank Import. Paste your bank CSV. Run Import.'],
    ['6', 'Check Your Quarter', 'Tax Center shows what to set aside, what you paid, and the gap before each due date.']
  ];
  for (var s = 0; s < steps.length; s++) {
    var c0 = 1 + s * 2; // each step spans 2 cols: (A-B), (C-D), ..., (K-L)
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

  // LLM-ready callout — full-bleed Forest panel
  r += 4;
  sheet.getRange(r, 1, 5, 12).setBackground(BRAND.FOREST).setVerticalAlignment('top');
  themable_(sheet.getName(), 'primary', sheet.getRange(r, 1, 5, 12).getA1Notation());
  setCell_(sheet, 'A' + r, { value: 'Ask Claude or ChatGPT to read your books.', merge: 'F' + r,
    font: FONT.DISPLAY, size: 18, bold: true, color: BRAND.PARCHMENT, bg: BRAND.FOREST, wrap: true });
  setCell_(sheet, 'A' + (r + 1), {
    value: 'A hidden _Schema tab documents every column for an AI. Copy the prompt, paste it in your assistant, attach your sheet. You get answers in seconds.',
    merge: 'F' + (r + 4), font: FONT.BODY, size: 12, color: BRAND.PARCHMENT, bg: BRAND.FOREST, wrap: true, v: 'top' });
  var code = sheet.getRange(r, 7, 5, 6).merge();
  code.setBackground(BRAND.FOREST_HI).setFontFamily('Roboto Mono').setFontSize(10)
    .setFontColor(BRAND.CREAM).setWrap(true).setVerticalAlignment('middle').setHorizontalAlignment('left')
    .setValue('Which expense categories grew fastest over the last 6 months, and what\'s my projected Q3 tax set-aside at current pace?');
  themable_(sheet.getName(), 'primary', code.getA1Notation());
  sheet.setRowHeight(r, 32);
  sheet.setRowHeight(r + 1, 24);
  sheet.setRowHeight(r + 2, 24);
  sheet.setRowHeight(r + 3, 24);
  sheet.setRowHeight(r + 4, 24);

  footer_(sheet, r + 6, 'L');
  setColWidths_(sheet, [78, 78, 78, 78, 78, 78, 78, 78, 70, 70, 70, 70]);
}

// ── Dashboard ─────────────────────────────────────────────────────────
function buildDashboard_(sheet, mode) {
  chrome_(sheet, TABS.DASHBOARD, 'L', 'VIEWING MONTH');
  // Live breadcrumb sub-label tracks N4.
  sheet.getRange('A3').setFormula(
    '="VIEWING MONTH · "&UPPER(TEXT(IFERROR(DATEVALUE(INDEX(cc_engine_months,1,N4+1)&"-01"),INDEX(cc_engine_months,1,N4+1)),"mmm yyyy"))&"  "');
  var r = titleRow_(sheet, 'L', 'Dashboard',
    'Your business at a glance. Updated automatically as transactions come in.');

  // Active month index cell (named cc_dashboard_month) at N4. Seeded with
  // a formula that picks the newest engine column with non-zero revenue,
  // else falls back to column Y (= newest engine month = "this month").
  sheet.getRange('N4').setFormula(
    '=IFERROR(LARGE(ARRAYFORMULA(IF(' + ENG + '!$B$' + ENGINE_ROWS.REVENUE + ':$Y$' + ENGINE_ROWS.REVENUE +
    '>0,COLUMN(' + ENG + '!$B$' + ENGINE_ROWS.REVENUE + ':$Y$' + ENGINE_ROWS.REVENUE + ')-2)),1),' + CUR_MONTH_IDX + ')');
  sheet.getRange('N3').setValue('active_month_idx (0-23)').setFontColor(BRAND.CAPTION).setFontSize(8);

  // Month label + 6 pills (engine columns 19..24 = trailing 6 months).
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
  // CF: paint inactive pills cream (active pill = the one whose column matches N4-12).
  var pillRange = sheet.getRange(r, 6, 1, 6);
  var inactiveRule = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied('=COLUMN()<>$N$4-12')
    .setBackground(BRAND.CREAM).setFontColor(BRAND.BODY).setBold(true)
    .setRanges([pillRange]).build();
  sheet.setConditionalFormatRules(sheet.getConditionalFormatRules().concat([inactiveRule]));
  r += 2;

  // KPI row — REVENUE · EXPENSES · NET PROFIT · PROFIT MARGIN (3 cols each).
  // Sub-lines are live vs-last-month deltas (Foundation cleanup standard —
  // no static delta strings anywhere).
  var rowRef = function (row, at) { return 'INDEX(' + ENG + '!$B$' + row + ':$Y$' + row + ',1,' + at + ')'; };
  var revF = '=' + rowRef(ENGINE_ROWS.REVENUE, 'N4+1');
  var expF = '=' + rowRef(ENGINE_ROWS.EXPENSES, 'N4+1');
  var netF = '=' + rowRef(ENGINE_ROWS.NET, 'N4+1');
  var mgF  = '=' + rowRef(ENGINE_ROWS.MARGIN, 'N4+1');
  var revSub = '=IF(N4=0,"first month",IF(' + rowRef(ENGINE_ROWS.REVENUE, 'N4') + '=0,"vs last month —","vs last month "&TEXT((' +
    rowRef(ENGINE_ROWS.REVENUE, 'N4+1') + '-' + rowRef(ENGINE_ROWS.REVENUE, 'N4') + ')/' + rowRef(ENGINE_ROWS.REVENUE, 'N4') + ',"+0.0%;-0.0%;0.0%")))';
  var expSub = '=IF(N4=0,"first month",IF(' + rowRef(ENGINE_ROWS.EXPENSES, 'N4') + '=0,"vs last month —","vs last month "&TEXT((' +
    rowRef(ENGINE_ROWS.EXPENSES, 'N4+1') + '-' + rowRef(ENGINE_ROWS.EXPENSES, 'N4') + ')/' + rowRef(ENGINE_ROWS.EXPENSES, 'N4') + ',"+0.0%;-0.0%;0.0%")))';
  var netSub = '=IF(N4=0,"first month","vs last month "&TEXT(' + rowRef(ENGINE_ROWS.NET, 'N4+1') + '-' + rowRef(ENGINE_ROWS.NET, 'N4') + ',"+$#,##0;-$#,##0;$0"))';
  var mgSub  = '=IF(N4=0,"first month","vs last month "&TEXT((' + rowRef(ENGINE_ROWS.MARGIN, 'N4+1') + '-' + rowRef(ENGINE_ROWS.MARGIN, 'N4') + ')*100,"+0.0;-0.0;0.0")&" pts")';
  kpiCard_(sheet, 'A' + r, 3, 'REVENUE', revF, revSub, BRAND.FOREST);
  kpiCard_(sheet, 'D' + r, 3, 'EXPENSES', expF, expSub, BRAND.GARNET);
  kpiCard_(sheet, 'G' + r, 3, 'NET PROFIT', netF, netSub, BRAND.FOREST);
  kpiCard_(sheet, 'J' + r, 3, 'PROFIT MARGIN', mgF, mgSub, BRAND.GOLD);
  sheet.getRange(r + 1, 1).setNumberFormat('$#,##0');
  sheet.getRange(r + 1, 4).setNumberFormat('$#,##0');
  sheet.getRange(r + 1, 7).setNumberFormat('$#,##0');
  sheet.getRange(r + 1, 10).setNumberFormat('0.0%');
  r += 4;

  // Top spending table (left, cols A-H) + Month Snapshot (right, I-L)
  sectionLabel_(sheet, 'A' + r, 'H' + r, 'TOP SPENDING');
  sheet.getRange('A' + r).setFormula(
    '="TOP SPENDING · "&UPPER(TEXT(IFERROR(DATEVALUE(INDEX(cc_engine_months,1,N4+1)&"-01"),INDEX(cc_engine_months,1,N4+1)),"mmm yyyy"))');
  sectionLabel_(sheet, 'I' + r, 'L' + r, 'MONTH SNAPSHOT');
  r += 1;
  sheet.getRange(r, 1, 1, 5).setValues([['Category', 'Spent', 'Target', '% of Target', 'Status']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  var tsStart = r + 1;
  var TOP_N = 8;
  // Live ranking over the engine's 25 expense rows for the active month.
  var monthCol = 'cc_dashboard_month+1';
  var actualsCol = 'INDEX(' + ENG + '!$B$2:$Y$26,,' + monthCol + ')';
  for (var t = 0; t < TOP_N; t++) {
    var rank = t + 1;
    var rr = tsStart + t;
    sheet.getRange(rr, 1).setFormula(
      '=IFERROR(INDEX(' + ENG + '!$A$2:$A$26,MATCH(LARGE(' + actualsCol + ',' + rank + '),' + actualsCol + ',0)),"")');
    sheet.getRange(rr, 2).setFormula('=IFERROR(LARGE(' + actualsCol + ',' + rank + '),0)').setNumberFormat('$#,##0');
    // Target comes from the Categories tab's yellow Monthly Target column.
    sheet.getRange(rr, 3).setFormula("=IFERROR(VLOOKUP(A" + rr + ",'" + TABS.CATEGORIES + "'!$A$11:$C$35,3,FALSE),0)").setNumberFormat('$#,##0');
    sheet.getRange(rr, 4).setFormula('=IFERROR(B' + rr + '/C' + rr + ',0)').setNumberFormat('0%');
    sheet.getRange(rr, 5).setFormula(
      '=IF(A' + rr + '="","",IF(N(C' + rr + ')=0,"—",IF(B' + rr + '<=C' + rr + ',"On Track",IF(B' + rr + '<=C' + rr + '*1.1,"Fair","Over"))))');
    sheet.getRange(rr, 6, 1, 2).merge();
    sheet.getRange(rr, 6).setFormula(
      '=IF(A' + rr + '="","",SPARKLINE(B' + rr + ',{"charttype","bar";"max",MAX(B' + rr + ',C' + rr + ');"color1","' + BRAND.FOREST + '"}))');
    if (t % 2 === 1) { var z = sheet.getRange(rr, 1, 1, 5).getA1Notation(); sheet.getRange(z).setBackground(PALETTE_BY_ID.light.zebra); themable_(sheet.getName(), 'zebra', z); }
  }
  statusChipCF_(sheet, sheet.getRange(tsStart, 5, TOP_N, 1).getA1Notation());

  // Month snapshot — live formulas keyed off cc_dashboard_month.
  var monthCode = 'INDEX(cc_engine_months,1,' + monthCol + ')';
  var snap = [
    ['Revenue',              '=IFERROR(' + rowRef(ENGINE_ROWS.REVENUE, monthCol) + ',0)',  '$#,##0'],
    ['Expenses',             '=IFERROR(' + rowRef(ENGINE_ROWS.EXPENSES, monthCol) + ',0)', '$#,##0'],
    ['Net Profit',           '=IFERROR(' + rowRef(ENGINE_ROWS.NET, monthCol) + ',0)',      '$#,##0'],
    ['Profit Margin',        '=IFERROR(' + rowRef(ENGINE_ROWS.MARGIN, monthCol) + ',0)',   '0.0%'],
    ['Invoices Outstanding', "=SUMIFS('" + TABS.INVOICES + "'!$F$15:$F$39,'" + TABS.INVOICES + "'!$G$15:$G$39,\"Sent\")", '$#,##0'],
    ['Tax Escrow Balance',   '=IFERROR(cc_escrow_balance,0)',                              '$#,##0'],
    ['Transactions',         "=COUNTIFS('" + TABS.TX + "'!$I:$I," + monthCode + ",'" + TABS.TX + "'!$C:$C,\"<>0\")", '#,##0']
  ];
  for (var sI = 0; sI < snap.length; sI++) {
    var sr = tsStart + sI;
    setCell_(sheet, sheet.getRange(sr, 9).getA1Notation(), { value: snap[sI][0], merge: sheet.getRange(sr, 10).getA1Notation(), font: FONT.BODY, size: 11, color: BRAND.BODY });
    var vcell = sheet.getRange(sr, 11, 1, 2).merge();
    vcell.setFormula(snap[sI][1]).setNumberFormat(snap[sI][2])
      .setFontFamily(FONT.BODY).setFontWeight('bold').setFontColor(BRAND.FOREST).setHorizontalAlignment('right');
  }
  r = tsStart + Math.max(TOP_N, snap.length) + 2;

  // Spending Breakdown (donut, native chart) + AI Insights panel
  sectionLabel_(sheet, 'A' + r, 'F' + r, 'SPENDING BREAKDOWN');
  sectionLabel_(sheet, 'G' + r, 'L' + r, 'AI INSIGHTS');
  r += 1;
  // Donut data lives off-screen in cols N-O. Labels are static (11 highest-
  // signal categories + Other); values are LIVE from _Engine for the active
  // month — formulas, never static values (Foundation cleanup standard).
  var bdStart = r;
  var BD_COL = 14;
  var donutSumParts = [];
  for (var bd = 0; bd < DONUT_CATS.length; bd++) {
    var cat = DONUT_CATS[bd];
    var engRow = CATEGORIES.indexOf(cat) + ENGINE_ROWS.CAT_FIRST;
    sheet.getRange(bdStart + bd, BD_COL).setValue(cat);
    sheet.getRange(bdStart + bd, BD_COL + 1).setFormula(
      '=IFERROR(INDEX(' + ENG + '!$B$' + engRow + ':$Y$' + engRow + ',1,cc_dashboard_month+1),0)');
    donutSumParts.push('O' + (bdStart + bd));
  }
  // 12th slot: Other = total expenses − the 11 charted categories.
  sheet.getRange(bdStart + DONUT_CATS.length, BD_COL).setValue('Other');
  sheet.getRange(bdStart + DONUT_CATS.length, BD_COL + 1).setFormula(
    '=MAX(0,IFERROR(' + rowRef(ENGINE_ROWS.EXPENSES, 'cc_dashboard_month+1') + ',0)-SUM(' + donutSumParts.join(',') + '))');
  sheet.getRange(bdStart, BD_COL + 1, DONUT_CATS.length + 1, 1).setNumberFormat('$#,##0');
  buildDonut_(sheet, bdStart, DONUT_CATS.length + 1, BD_COL);

  // AI insights — Forest-on-cream, 3 callouts. Mock shows the Maya story;
  // blank shows honest instructional copy (the buyer asks their LLM via
  // _Schema and pastes findings — insights are not auto-generated).
  var insights = (mode === 'mock') ? MOCK.ai_insights : [
    ['ASK', 'Attach this sheet to Claude or ChatGPT and ask which expenses are eating your margin. The hidden _Schema tab does the explaining.'],
    ['PASTE', 'Drop the best findings here so they stare back at you all month.'],
    ['START', 'Import a CSV first — insights need data to find.']
  ];
  for (var a = 0; a < insights.length; a++) {
    var ar = bdStart + a * 2;
    setCell_(sheet, sheet.getRange(ar, 7).getA1Notation(), { value: insights[a][0], merge: sheet.getRange(ar, 12).getA1Notation(),
      font: FONT.BODY, size: 10, bold: true, color: BRAND.GOLD, bg: BRAND.FOREST, h: 'left', v: 'middle' });
    themable_(sheet.getName(), 'primary', sheet.getRange(ar, 7, 1, 6).getA1Notation());
    setCell_(sheet, sheet.getRange(ar + 1, 7).getA1Notation(), { value: insights[a][1], merge: sheet.getRange(ar + 1, 12).getA1Notation(),
      font: FONT.BODY, size: 12, color: BRAND.PARCHMENT, bg: BRAND.FOREST, wrap: true, v: 'top' });
    themable_(sheet.getName(), 'primary', sheet.getRange(ar + 1, 7, 1, 6).getA1Notation());
    sheet.setRowHeight(ar + 1, 34);
  }

  r = bdStart + Math.max(DONUT_CATS.length + 1, 7) + 2;
  footer_(sheet, r, 'L');
  setColWidths_(sheet, [150, 80, 80, 90, 70, 50, 60, 60, 120, 90, 70, 70]);
}

function buildDonut_(sheet, dataStartRow, n, dataCol) {
  var range = sheet.getRange(dataStartRow, dataCol || 1, n, 2);
  var chart = sheet.newChart().asPieChart().setOption('pieHole', 0.6)
    .addRange(range).setPosition(dataStartRow, 1, 0, 0)
    .setOption('legend', { position: 'right', textStyle: { fontSize: 11 } })
    .setOption('colors', DONUT_RAMP)
    .setOption('title', '')
    .setOption('width', 460).setOption('height', 260)
    .setNumHeaders(0).build();
  sheet.insertChart(chart);
}

// ── P&L — month / quarter / YTD, Schedule-C-mapped ────────────────────
// Period summing = SUMPRODUCT over the engine's month columns against ONE
// hidden row of month-match flags (row 60) — not 25 mega-formulas.
var PNL_FLAGS_ROW = 60;
var PNL_VIEW_CELL = 'B10';
var PNL_QUARTER_CELL = 'E10';

function buildPnl_(sheet, mode) {
  chrome_(sheet, TABS.PNL, 'L', 'PROFIT & LOSS');
  var r = titleRow_(sheet, 'L', 'Profit & Loss',
    'By month, quarter, or year. Every line mapped to its Schedule C box.');

  // View selector row (10): view dropdown + quarter dropdown + period readout.
  setCell_(sheet, 'A' + r, { value: 'View', font: FONT.BODY, size: 11, bold: true, color: BRAND.BODY, v: 'middle' });
  var viewCell = sheet.getRange(PNL_VIEW_CELL);
  viewCell.setValue('Month').setBackground(BRAND.YELLOW)
    .setBorder(true, true, true, true, false, false, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID)
    .setFontFamily(FONT.BODY).setFontSize(11).setHorizontalAlignment('center');
  viewCell.setDataValidation(SpreadsheetApp.newDataValidation()
    .requireValueInList(['Month', 'Quarter', 'YTD'], true).setAllowInvalid(false).build());
  setCell_(sheet, 'D' + r, { value: 'Quarter', font: FONT.BODY, size: 11, bold: true, color: BRAND.BODY, v: 'middle' });
  var qCell = sheet.getRange(PNL_QUARTER_CELL);
  qCell.setValue('Q2').setBackground(BRAND.YELLOW)
    .setBorder(true, true, true, true, false, false, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID)
    .setFontFamily(FONT.BODY).setFontSize(11).setHorizontalAlignment('center');
  qCell.setDataValidation(SpreadsheetApp.newDataValidation()
    .requireValueInList(['Q1', 'Q2', 'Q3', 'Q4'], true).setAllowInvalid(false).build());
  setCell_(sheet, 'G' + r, {
    formula: '=IF($' + PNL_VIEW_CELL + '="Month",TEXT(IFERROR(DATEVALUE(INDEX(cc_engine_months,1,cc_dashboard_month+1)&"-01"),INDEX(cc_engine_months,1,cc_dashboard_month+1)),"mmmm yyyy"),IF($' + PNL_VIEW_CELL + '="Quarter",$' + PNL_QUARTER_CELL + '&" "&cc_tax_year,"YTD "&cc_tax_year))',
    merge: 'I' + r, font: FONT.DISPLAY, size: 14, bold: true, color: BRAND.FOREST, v: 'middle' });
  setCell_(sheet, 'J' + r, { value: 'Month view follows the Dashboard month. Quarter and YTD follow the Tax Center year.',
    merge: 'L' + r, font: FONT.BODY, size: 9, italic: true, color: BRAND.CAPTION, wrap: true, v: 'middle' });
  r += 2;

  // Hidden flags row 60: 1 where the engine month belongs to the selected period.
  for (var j = 1; j <= 24; j++) {
    var mref = 'INDEX(cc_engine_months,1,' + j + ')';
    sheet.getRange(PNL_FLAGS_ROW, 1 + j).setFormula(
      '=IFERROR(IF($' + PNL_VIEW_CELL + '="Month",IF(' + j + '=cc_dashboard_month+1,1,0),' +
      'IF(VALUE(LEFT(' + mref + ',4))<>cc_tax_year,0,' +
      'IF($' + PNL_VIEW_CELL + '="YTD",1,' +
      'IF(ROUNDUP(VALUE(RIGHT(' + mref + ',2))/3,0)=VALUE(MID($' + PNL_QUARTER_CELL + ',2,1)),1,0)))),0)');
  }
  sheet.getRange(PNL_FLAGS_ROW, 1).setValue('period flags (hidden)').setFontColor(BRAND.CAPTION).setFontSize(8);
  var flags = '$B$' + PNL_FLAGS_ROW + ':$Y$' + PNL_FLAGS_ROW;
  var sumRow = function (engRow) { return 'SUMPRODUCT(' + ENG + '!$B$' + engRow + ':$Y$' + engRow + ',' + flags + ')'; };

  // REVENUE section — one row per stream (8 registry slots) + unassigned + total.
  sectionLabel_(sheet, 'A' + r, 'L' + r, 'REVENUE · BY CLIENT & STREAM');
  r += 1;
  sheet.getRange(r, 1, 1, 5).setValues([['Stream', '', '', 'Amount', '% of Revenue']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  r += 1;
  var revFirst = r;
  var totalRevRow = revFirst + ENGINE_ROWS.STREAM_COUNT + 1;   // streams + unassigned, then total
  for (var s = 0; s < ENGINE_ROWS.STREAM_COUNT; s++) {
    var er = ENGINE_ROWS.STREAM_FIRST + s;
    sheet.getRange(r, 1, 1, 3).merge();
    sheet.getRange(r, 1).setFormula('=' + ENG + '!A' + er).setFontFamily(FONT.BODY).setFontSize(11);
    sheet.getRange(r, 4).setFormula('=IF(' + ENG + '!A' + er + '="","",' + sumRow(er) + ')').setNumberFormat('$#,##0');
    sheet.getRange(r, 5).setFormula('=IF(' + ENG + '!A' + er + '="","",IFERROR(D' + r + '/D$' + totalRevRow + ',0))').setNumberFormat('0.0%');
    if (s % 2 === 1) { var za = sheet.getRange(r, 1, 1, 5).getA1Notation(); sheet.getRange(za).setBackground(PALETTE_BY_ID.light.zebra); themable_(sheet.getName(), 'zebra', za); }
    r += 1;
  }
  // Unassigned revenue (rows whose Client/Stream doesn't match a registry slot)
  sheet.getRange(r, 1, 1, 3).merge();
  sheet.getRange(r, 1).setValue('Unassigned').setFontStyle('italic').setFontColor(BRAND.CAPTION).setFontFamily(FONT.BODY).setFontSize(11);
  var streamSumParts = [];
  for (var s2 = 0; s2 < ENGINE_ROWS.STREAM_COUNT; s2++) streamSumParts.push(sumRow(ENGINE_ROWS.STREAM_FIRST + s2));
  sheet.getRange(r, 4).setFormula('=MAX(0,' + sumRow(ENGINE_ROWS.REVENUE) + '-(' + streamSumParts.join('+') + '))').setNumberFormat('$#,##0');
  sheet.getRange(r, 5).setFormula('=IFERROR(D' + r + '/D$' + totalRevRow + ',0)').setNumberFormat('0.0%');
  r += 1;
  // Total Revenue
  sheet.getRange(r, 1, 1, 3).merge();
  sheet.getRange(r, 1).setValue('Total Revenue').setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(11).setFontColor(BRAND.FOREST);
  sheet.getRange(r, 4).setFormula('=' + sumRow(ENGINE_ROWS.REVENUE)).setNumberFormat('$#,##0').setFontWeight('bold');
  sheet.getRange(r, 5).setValue(1).setNumberFormat('0.0%').setFontWeight('bold');
  sheet.getRange(r, 1, 1, 5).setBorder(true, null, null, null, null, null, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID_MEDIUM);
  r += 2;

  // EXPENSES section — 20 fixed + 5 custom, Schedule C mapped. Zero rows
  // stay visible at $0 — a P&L shows its lines.
  sectionLabel_(sheet, 'A' + r, 'L' + r, 'EXPENSES · SCHEDULE C MAPPED');
  r += 1;
  sheet.getRange(r, 1, 1, 5).setValues([['Category', '', 'Schedule C', 'Amount', '% of Revenue']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  r += 1;
  var expFirst = r;
  for (var c = 0; c < CATEGORIES.length + CUSTOM_CATEGORY_SLOTS; c++) {
    var engRow = ENGINE_ROWS.CAT_FIRST + c;
    sheet.getRange(r, 1, 1, 2).merge();
    if (c < CATEGORIES.length) {
      sheet.getRange(r, 1).setValue(CATEGORIES[c]).setFontFamily(FONT.BODY).setFontSize(11);
      sheet.getRange(r, 3).setValue(LEDGER_CATEGORIES[c][1]).setFontColor(BRAND.CAPTION).setFontSize(10);
      sheet.getRange(r, 4).setFormula('=' + sumRow(engRow)).setNumberFormat('$#,##0');
      sheet.getRange(r, 5).setFormula('=IFERROR(D' + r + '/D$' + totalRevRow + ',0)').setNumberFormat('0.0%');
    } else {
      // custom slots — name + Schedule C line follow the Categories tab
      sheet.getRange(r, 1).setFormula('=' + ENG + '!A' + engRow).setFontStyle('italic').setFontFamily(FONT.BODY).setFontSize(11);
      sheet.getRange(r, 3).setFormula("=IF('" + TABS.CATEGORIES + "'!A" + (31 + c - CATEGORIES.length) + "=\"\",\"\",'" + TABS.CATEGORIES + "'!B" + (31 + c - CATEGORIES.length) + ')').setFontColor(BRAND.CAPTION).setFontSize(10);
      sheet.getRange(r, 4).setFormula('=IF(' + ENG + '!A' + engRow + '="","",' + sumRow(engRow) + ')').setNumberFormat('$#,##0');
      sheet.getRange(r, 5).setFormula('=IF(' + ENG + '!A' + engRow + '="","",IFERROR(D' + r + '/D$' + totalRevRow + ',0))').setNumberFormat('0.0%');
    }
    if (c % 2 === 1) { var zb = sheet.getRange(r, 1, 1, 5).getA1Notation(); sheet.getRange(zb).setBackground(PALETTE_BY_ID.light.zebra); themable_(sheet.getName(), 'zebra', zb); }
    r += 1;
  }
  // Total Expenses
  sheet.getRange(r, 1, 1, 2).merge();
  sheet.getRange(r, 1).setValue('Total Expenses').setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(11).setFontColor(BRAND.FOREST);
  sheet.getRange(r, 4).setFormula('=' + sumRow(ENGINE_ROWS.EXPENSES)).setNumberFormat('$#,##0').setFontWeight('bold');
  sheet.getRange(r, 5).setFormula('=IFERROR(D' + r + '/D$' + totalRevRow + ',0)').setNumberFormat('0.0%').setFontWeight('bold');
  sheet.getRange(r, 1, 1, 5).setBorder(true, null, null, null, null, null, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID_MEDIUM);
  r += 2;

  // NET PROFIT bar — Forest panel with margin, then the owner-draw caption.
  sheet.getRange(r, 1, 2, 12).setBackground(BRAND.FOREST);
  themable_(sheet.getName(), 'primary', sheet.getRange(r, 1, 2, 12).getA1Notation());
  setCell_(sheet, 'A' + r, { value: 'NET PROFIT', merge: 'C' + r, font: FONT.BODY, size: 10, bold: true, color: BRAND.GOLD, bg: BRAND.FOREST, v: 'bottom' });
  setCell_(sheet, 'A' + (r + 1), { formula: '=' + sumRow(ENGINE_ROWS.NET), merge: 'C' + (r + 1),
    font: FONT.DISPLAY, size: 24, bold: true, color: BRAND.PARCHMENT, bg: BRAND.FOREST, format: '$#,##0', v: 'top' });
  setCell_(sheet, 'H' + r, { value: 'PROFIT MARGIN', merge: 'J' + r, font: FONT.BODY, size: 10, bold: true, color: BRAND.GOLD, bg: BRAND.FOREST, h: 'right', v: 'bottom' });
  setCell_(sheet, 'H' + (r + 1), { formula: '=IFERROR(' + sumRow(ENGINE_ROWS.NET) + '/' + sumRow(ENGINE_ROWS.REVENUE) + ',0)', merge: 'J' + (r + 1),
    font: FONT.DISPLAY, size: 24, bold: true, color: BRAND.PARCHMENT, bg: BRAND.FOREST, format: '0.0%', h: 'right', v: 'top' });
  sheet.setRowHeight(r + 1, 34);
  r += 2;
  // Owner-draw awareness caption — shown for awareness, never in the math.
  setCell_(sheet, 'A' + r, {
    formula: '="Owner draws this period (not in profit): "&TEXT(' + sumRow(ENGINE_ROWS.OWNER) + ',"$#,##0")&" — draws and contributions never touch these figures."',
    merge: 'L' + r, font: FONT.BODY, size: 11, italic: true, color: BRAND.CAPTION });
  r += 2;

  footer_(sheet, r, 'L');
  sheet.hideRows(PNL_FLAGS_ROW - 1, 3);
  setColWidths_(sheet, [150, 60, 95, 95, 95, 60, 60, 60, 60, 70, 70, 70]);
}

// ── Trends ────────────────────────────────────────────────────────────
function buildTrends_(sheet, mode) {
  chrome_(sheet, TABS.TRENDS, 'L');
  var r = titleRow_(sheet, 'L', 'Trends',
    'Six months in, twenty-four months out. Where the business is heading.');

  // window selector (cc_trends_window at N7) + 3 pills at J-L.
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

  // KPI strip — averages over the window.
  var avg = function (row) {
    return '=AVERAGE(INDEX(' + ENG + '!$B$' + row + ':$Y$' + row + ',1,24-N7+1):INDEX(' + ENG + '!$B$' + row + ':$Y$' + row + ',1,24))';
  };
  kpiCard_(sheet, 'A' + r, 3, 'AVG REVENUE', avg(ENGINE_ROWS.REVENUE), 'over selected window', BRAND.FOREST);
  kpiCard_(sheet, 'D' + r, 3, 'AVG EXPENSES', avg(ENGINE_ROWS.EXPENSES), 'over selected window', BRAND.GARNET);
  kpiCard_(sheet, 'G' + r, 3, 'AVG NET PROFIT', avg(ENGINE_ROWS.NET), 'over selected window', BRAND.FOREST);
  sheet.getRange(r + 1, 1).setNumberFormat('$#,##0');
  sheet.getRange(r + 1, 4).setNumberFormat('$#,##0');
  sheet.getRange(r + 1, 7).setNumberFormat('$#,##0');
  r += 4;

  // Revenue vs Expenses chart (engine rows 35-36, last 6 months)
  sectionLabel_(sheet, 'A' + r, 'L' + r, 'REVENUE vs EXPENSES · LAST 6 MONTHS');
  r += 1;
  buildTrendsChart_(sheet, r);
  r += 12;

  // Profit-margin line — sparkline over the trailing window + live readout.
  sectionLabel_(sheet, 'A' + r, 'L' + r, 'PROFIT MARGIN');
  r += 1;
  sheet.getRange(r, 1, 1, 4).merge();
  sheet.getRange(r, 1).setFormula(
    '=IF(SUM(' + ENG + '!T' + ENGINE_ROWS.REVENUE + ':Y' + ENGINE_ROWS.REVENUE + ')=0,"",SPARKLINE(' + ENG + '!T' + ENGINE_ROWS.MARGIN + ':Y' + ENGINE_ROWS.MARGIN + ',{"charttype","line";"color","' + BRAND.GOLD + '";"linewidth",2}))');
  sheet.getRange(r, 5).setFormula('=INDEX(' + ENG + '!$B$' + ENGINE_ROWS.MARGIN + ':$Y$' + ENGINE_ROWS.MARGIN + ',1,24)')
    .setNumberFormat('0.0%').setFontFamily(FONT.DISPLAY).setFontSize(16).setFontWeight('bold').setFontColor(BRAND.FOREST);
  sheet.getRange(r, 6, 1, 3).merge();
  sheet.getRange(r, 6).setValue('this month').setFontColor(BRAND.CAPTION).setFontSize(10).setFontFamily(FONT.BODY);
  sheet.setRowHeight(r, 36);
  r += 2;

  // Category sparkline table — 20 fixed + 5 custom slots.
  sectionLabel_(sheet, 'A' + r, 'L' + r, 'CATEGORY TRENDS · LAST 6 MONTHS');
  r += 1;
  sheet.getRange(r, 1, 1, 4).setValues([['Category', 'Sparkline (6 mo)', 'Last Month', 'Δ vs first']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  var start = r + 1;
  var totalCats = CATEGORIES.length + CUSTOM_CATEGORY_SLOTS;   // 25 rows
  for (var c = 0; c < totalCats; c++) {
    var er = ENGINE_ROWS.CAT_FIRST + c;
    var rr = start + c;
    if (c < CATEGORIES.length) {
      sheet.getRange(rr, 1).setValue(CATEGORIES[c]);
    } else {
      sheet.getRange(rr, 1).setFormula('=' + ENG + '!A' + er).setFontStyle('italic');
    }
    sheet.getRange(rr, 2, 1, 1).setFormula(
      '=IF(SUM(' + ENG + '!T' + er + ':Y' + er + ')=0,"",SPARKLINE(' + ENG + '!T' + er + ':Y' + er + ',{"charttype","line";"color","' + BRAND.FOREST + '";"linewidth",2}))');
    sheet.getRange(rr, 3).setFormula('=IF(SUM(' + ENG + '!T' + er + ':Y' + er + ')=0,"",' + ENG + '!Y' + er + ')').setNumberFormat('$#,##0');
    sheet.getRange(rr, 4).setFormula('=IF(SUM(' + ENG + '!T' + er + ':Y' + er + ')=0,"",IFERROR(' + ENG + '!Y' + er + '-' + ENG + '!T' + er + ',0))').setNumberFormat('+$#,##0;−$#,##0');
    if (c % 2 === 1) { var z = sheet.getRange(rr, 1, 1, 4).getA1Notation(); sheet.getRange(z).setBackground(PALETTE_BY_ID.light.zebra); themable_(sheet.getName(), 'zebra', z); }
  }
  footer_(sheet, start + totalCats + 2, 'L');
  setColWidths_(sheet, [165, 180, 90, 90, 60, 60, 60, 60, 70, 70, 70, 70]);
}

function buildTrendsChart_(sheet, atRow) {
  // Live chart data: last 6 months read straight from _Engine (cols T..Y).
  sheet.getRange(atRow, 16, 1, 3).setValues([['Month', 'Revenue', 'Expenses']]);
  for (var i = 0; i < 6; i++) {
    var rr = atRow + 1 + i;
    var engineCol = 19 + i;
    var monthCell = 'INDEX(' + ENG + '!$B$1:$Y$1,1,' + engineCol + ')';
    sheet.getRange(rr, 16).setFormula(
      '=TEXT(IFERROR(DATEVALUE(' + monthCell + '&"-01"),' + monthCell + '),"mmm yyyy")');
    sheet.getRange(rr, 17).setFormula('=INDEX(' + ENG + '!$B$' + ENGINE_ROWS.REVENUE + ':$Y$' + ENGINE_ROWS.REVENUE + ',1,' + engineCol + ')');
    sheet.getRange(rr, 18).setFormula('=INDEX(' + ENG + '!$B$' + ENGINE_ROWS.EXPENSES + ':$Y$' + ENGINE_ROWS.EXPENSES + ',1,' + engineCol + ')');
  }
  var range = sheet.getRange(atRow, 16, 7, 3);
  var chart = sheet.newChart().asColumnChart()
    .addRange(range).setPosition(atRow, 1, 0, 0)
    .setOption('colors', [BRAND.FOREST, BRAND.CANOPY])
    .setOption('legend', { position: 'top' })
    .setOption('width', 720).setOption('height', 220)
    .build();
  sheet.insertChart(chart);
}
/**
 * Column & Co. — The Ledger v1.0
 * 06 · Action tabs: Tax Center, Invoices, Mileage, Bank Import Guide.
 */

// ── Tax Center cell contract ──────────────────────────────────────────
var TAXC = {
  YEAR_CELL: 'A11', PRESET_CELL: 'C11', CUSTOM_CELL: 'E11',
  EFF_CELL: 'G11', MILEAGE_CELL: 'I11', RESOLVED_CELL: 'K11',
  CARD_TOP: 15,            // quarter cards rows 15-20
  STRIP_ROW: 21,           // escrow tracker rows 21-23
  FLAGS_FIRST_ROW: 60,     // hidden: Q1..Q4 flags rows 60-63, complete-months row 64
  PAID_ROW: 18             // yellow Paid input row inside each card
};

function buildTaxCenter_(sheet, mode) {
  chrome_(sheet, TABS.TAX, 'L', 'QUARTERLY ESTIMATED TAXES');
  var r = titleRow_(sheet, 'L', 'Tax Center',
    "What to set aside, when it's due, and whether your escrow covers it.");

  // ── INPUTS panel (row 9 label, 10 sub-labels, 11 yellow inputs, 12 captions)
  sectionLabel_(sheet, 'A' + r, 'L' + r, 'INPUTS · SET ONCE, ADJUST ANYTIME');
  var labels = [
    ['A10', 'B10', 'TAX YEAR'],
    ['C10', 'D10', 'SET-ASIDE PRESET'],
    ['E10', 'F10', 'CUSTOM % (IF CUSTOM)'],
    ['G10', 'H10', 'EFFECTIVE INCOME-TAX RATE'],
    ['I10', 'J10', 'MILEAGE RATE'],
    ['K10', 'L10', 'RESOLVED SET-ASIDE %']
  ];
  labels.forEach(function (L) {
    setCell_(sheet, L[0], { value: L[2], merge: L[1], font: FONT.BODY, size: 9, bold: true, color: BRAND.CAPTION, v: 'middle' });
  });
  var yellow = function (a1, mergeTo) {
    var rng = setCell_(sheet, a1, { merge: mergeTo, bg: BRAND.YELLOW, font: FONT.BODY, size: 12, h: 'center', v: 'middle' });
    rng.setBorder(true, true, true, true, false, false, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);
    return rng;
  };
  // Tax year — defaults to the current year via formula; buyer can overtype.
  yellow(TAXC.YEAR_CELL, 'B11').setFormula('=YEAR(TODAY())').setNumberFormat('0');
  // Preset dropdown
  var presetCell = yellow(TAXC.PRESET_CELL, 'D11');
  presetCell.setValue(DEFAULT_PRESET);
  presetCell.setDataValidation(SpreadsheetApp.newDataValidation()
    .requireValueInList(SETASIDE_PRESETS.map(function (p) { return p.label; }), true)
    .setAllowInvalid(false).build());
  // Custom %
  yellow(TAXC.CUSTOM_CELL, 'F11').setNumberFormat('0.0%');
  // Effective income-tax rate
  yellow(TAXC.EFF_CELL, 'H11').setValue(TAX.EFFECTIVE_RATE_DEFAULT).setNumberFormat('0.0%');
  // Mileage rate — IRS standard rate, yellow + editable, never hardcoded
  // into formulas (everything reads cc_mileage_rate = this cell).
  yellow(TAXC.MILEAGE_CELL, 'J11').setValue(TAX.MILEAGE_RATE_DEFAULT).setNumberFormat('$0.000');
  // Resolved set-aside % (locked formula — named cc_setaside_pct)
  setCell_(sheet, TAXC.RESOLVED_CELL, { merge: 'L11',
    formula: '=IF($' + TAXC.PRESET_CELL + '="Custom",IF(ISNUMBER($' + TAXC.CUSTOM_CELL + '),$' + TAXC.CUSTOM_CELL + ',0.25),IFERROR(VLOOKUP($' + TAXC.PRESET_CELL + ',cc_setaside_table,2,FALSE),0.25))',
    font: FONT.DISPLAY, size: 14, bold: true, color: BRAND.FOREST, h: 'center', v: 'middle', format: '0.0%' });
  setCell_(sheet, 'C12', { value: 'Standard 25 · Conservative 30 · Lean 20 · Custom', merge: 'F12', font: FONT.BODY, size: 9, italic: true, color: BRAND.CAPTION });
  setCell_(sheet, 'I12', { value: 'IRS standard rate — verify current year', merge: 'L12', font: FONT.BODY, size: 9, italic: true, color: BRAND.CAPTION });
  sheet.setRowHeight(11, 30);

  // ── QUARTER CARDS (rows 14-20) — live from the hidden flag rows.
  sectionLabel_(sheet, 'A14', 'L14', 'QUARTERLY ESTIMATED TAXES · LIVE FROM YOUR TRANSACTIONS');
  var flags = function (q) { return '$B$' + (TAXC.FLAGS_FIRST_ROW + q) + ':$Y$' + (TAXC.FLAGS_FIRST_ROW + q); };
  for (var q = 0; q < 4; q++) {
    var c0 = 1 + q * 3;                      // A, D, G, J
    var top = TAXC.CARD_TOP;                 // 15
    var colL = columnToLetter_(c0);
    var netCell  = columnToLetter_(c0 + 2) + (top + 1);
    var recCell  = columnToLetter_(c0 + 2) + (top + 2);
    var paidCell = columnToLetter_(c0 + 2) + TAXC.PAID_ROW;
    // header
    setCell_(sheet, colL + top, { value: 'Q' + (q + 1) + '  ·  due ' + TAX.QUARTER_DUE[q],
      merge: columnToLetter_(c0 + 2) + top, font: FONT.DISPLAY, size: 13, bold: true,
      color: BRAND.PARCHMENT, bg: BRAND.FOREST, h: 'left', v: 'middle' });
    themable_(sheet.getName(), 'primary', sheet.getRange(top, c0, 1, 3).getA1Notation());
    // rows: net / recommended / paid / remaining
    var rows = [
      ['Net profit',  '=ROUND(SUMPRODUCT(' + ENG + '!$B$' + ENGINE_ROWS.NET + ':$Y$' + ENGINE_ROWS.NET + ',' + flags(q) + '),0)', '$#,##0'],
      ['Recommended', '=ROUND(' + netCell + '*cc_setaside_pct,0)', '$#,##0'],
      ['Paid',        null, '$#,##0'],
      ['Remaining',   '=MAX(0,' + recCell + '-N(' + paidCell + '))', '$#,##0']
    ];
    for (var li = 0; li < rows.length; li++) {
      var rr = top + 1 + li;
      setCell_(sheet, columnToLetter_(c0) + rr, { value: rows[li][0],
        merge: columnToLetter_(c0 + 1) + rr, font: FONT.BODY, size: 10, color: BRAND.BODY, v: 'middle' });
      var vcell = sheet.getRange(rr, c0 + 2);
      if (rows[li][1]) vcell.setFormula(rows[li][1]);
      vcell.setNumberFormat(rows[li][2]).setFontFamily(FONT.BODY).setFontWeight('bold')
        .setFontColor(BRAND.FOREST).setHorizontalAlignment('right');
    }
    // Paid — yellow input (mock pre-fills the Q1 payment; blank ships empty)
    var paid = sheet.getRange(TAXC.PAID_ROW, c0 + 2);
    paid.setBackground(BRAND.YELLOW)
      .setBorder(true, true, true, true, false, false, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);
    if (mode === 'mock' && MOCK.quarter_paid[q]) paid.setValue(MOCK.quarter_paid[q]);
    // status chip — Paid >= Recommended: On Track · within 90%: Fair · else Over
    var chip = sheet.getRange(top + 5, c0, 1, 3).merge();
    chip.setFormula('=IF(' + recCell + '=0,"—",IF(N(' + paidCell + ')>=' + recCell + ',"On Track",IF(N(' + paidCell + ')>=' + recCell + '*0.9,"Fair","Over")))');
    statusChipCF_(sheet, chip.getA1Notation());
    // card frame
    sheet.getRange(top, c0, 6, 3).setBorder(true, true, true, true, false, false, BRAND.HAIRLINE, SpreadsheetApp.BorderStyle.SOLID);
  }

  // ── ESCROW TRACKER strip (rows 21-23) — the screenshot moment.
  sheet.getRange(TAXC.STRIP_ROW, 1, 3, 12).setBackground(BRAND.FOREST);
  themable_(sheet.getName(), 'primary', sheet.getRange(TAXC.STRIP_ROW, 1, 3, 12).getA1Notation());
  var stripLabels = [
    ['A' + TAXC.STRIP_ROW, 'C' + TAXC.STRIP_ROW, 'RECOMMENDED SET-ASIDE YTD'],
    ['E' + TAXC.STRIP_ROW, 'G' + TAXC.STRIP_ROW, 'IN YOUR TAX ESCROW ACCOUNT'],
    ['I' + TAXC.STRIP_ROW, 'K' + TAXC.STRIP_ROW, 'THE GAP']
  ];
  stripLabels.forEach(function (L) {
    setCell_(sheet, L[0], { value: L[2], merge: L[1], font: FONT.BODY, size: 9, bold: true, color: BRAND.GOLD, bg: BRAND.FOREST, v: 'bottom' });
  });
  var vRow = TAXC.STRIP_ROW + 1;   // 22 — value row (cc_escrow_balance = E22)
  var completeFlags = '$B$' + (TAXC.FLAGS_FIRST_ROW + 4) + ':$Y$' + (TAXC.FLAGS_FIRST_ROW + 4);
  setCell_(sheet, 'A' + vRow, { merge: 'C' + vRow,
    formula: '=ROUND(cc_setaside_pct*MAX(0,SUMPRODUCT(' + ENG + '!$B$' + ENGINE_ROWS.NET + ':$Y$' + ENGINE_ROWS.NET + ',' + completeFlags + ')),0)',
    font: FONT.DISPLAY, size: 22, bold: true, color: BRAND.PARCHMENT, bg: BRAND.FOREST, format: '$#,##0', v: 'middle' });
  setCell_(sheet, 'E' + vRow, { merge: 'G' + vRow,
    formula: "=SUMIF('" + TABS.ACCOUNTS + "'!$B$10:$B$21,\"Tax Escrow\",'" + TABS.ACCOUNTS + "'!$E$10:$E$21)",
    font: FONT.DISPLAY, size: 22, bold: true, color: BRAND.PARCHMENT, bg: BRAND.FOREST, format: '$#,##0', v: 'middle' });
  setCell_(sheet, 'I' + vRow, { merge: 'K' + vRow,
    formula: '=MAX(0,A' + vRow + '-E' + vRow + ')',
    font: FONT.DISPLAY, size: 26, bold: true, color: BRAND.PARCHMENT, bg: BRAND.FOREST, format: '$#,##0', v: 'middle' });
  var capRow = TAXC.STRIP_ROW + 2;  // 23
  setCell_(sheet, 'A' + capRow, { value: 'through your last complete month', merge: 'C' + capRow, font: FONT.BODY, size: 9, color: BRAND.PARCHMENT_60, bg: BRAND.FOREST, v: 'top' });
  setCell_(sheet, 'E' + capRow, { value: 'the Accounts row typed Tax Escrow', merge: 'G' + capRow, font: FONT.BODY, size: 9, color: BRAND.PARCHMENT_60, bg: BRAND.FOREST, v: 'top' });
  setCell_(sheet, 'I' + capRow, { value: 'move this before the due date', merge: 'K' + capRow, font: FONT.BODY, size: 9, color: BRAND.PARCHMENT_60, bg: BRAND.FOREST, v: 'top' });
  sheet.setRowHeight(vRow, 36);

  // ── ESTIMATE DETAIL (left, A-F) + SET-ASIDE PRESETS reference (right, H-L)
  var dr = TAXC.STRIP_ROW + 4;   // 25
  sectionLabel_(sheet, 'A' + dr, 'F' + dr, 'ESTIMATE DETAIL · YTD, COMPLETE MONTHS');
  sectionLabel_(sheet, 'H' + dr, 'L' + dr, 'SET-ASIDE PRESETS');
  dr += 1;
  var netYtd = 'MAX(0,SUMPRODUCT(' + ENG + '!$B$' + ENGINE_ROWS.NET + ':$Y$' + ENGINE_ROWS.NET + ',' + completeFlags + '))';
  var dFirst = dr;
  var adjCell = 'E' + (dFirst + 2);
  var detail = [
    ['Net profit YTD',                       '=' + netYtd, '$#,##0'],
    ['Less mileage deduction',               '=-IFERROR(cc_mileage_ytd,0)', '$#,##0'],
    ['Adjusted profit',                      '=MAX(0,E' + dFirst + '+E' + (dFirst + 1) + ')', '$#,##0'],
    ['SE earnings · × 0.9235',               '=ROUND(' + adjCell + '*' + TAX.SE_FACTOR + ',0)', '$#,##0'],
    ['Self-employment tax · × 15.3%',        '=ROUND(E' + (dFirst + 3) + '*' + TAX.SE_RATE + ',0)', '$#,##0'],
    ['Income tax · × effective rate',        '=ROUND(' + adjCell + '*N($' + TAXC.EFF_CELL + '),0)', '$#,##0'],
    ['Estimated total',                      '=E' + (dFirst + 4) + '+E' + (dFirst + 5), '$#,##0']
  ];
  for (var di = 0; di < detail.length; di++) {
    var drr = dFirst + di;
    setCell_(sheet, 'A' + drr, { value: detail[di][0], merge: 'D' + drr, font: FONT.BODY, size: 11,
      color: di === detail.length - 1 ? BRAND.FOREST : BRAND.BODY, bold: di === detail.length - 1 });
    sheet.getRange(drr, 5, 1, 2).merge();
    sheet.getRange(drr, 5).setFormula(detail[di][1]).setNumberFormat(detail[di][2])
      .setFontFamily(FONT.BODY).setFontWeight('bold').setFontColor(BRAND.FOREST).setHorizontalAlignment('right');
  }
  setCell_(sheet, 'A' + (dFirst + detail.length), {
    value: 'Estimates only — the set-aside presets are the simple path; this panel shows the math underneath.',
    merge: 'F' + (dFirst + detail.length), font: FONT.BODY, size: 9, italic: true, color: BRAND.CAPTION, wrap: true });
  // presets reference
  for (var pi = 0; pi < SETASIDE_PRESETS.length; pi++) {
    var prr = dFirst + pi;
    var p = SETASIDE_PRESETS[pi];
    setCell_(sheet, 'H' + prr, { value: p.label, font: FONT.DISPLAY, size: 11, bold: true, color: BRAND.FOREST });
    setCell_(sheet, 'I' + prr, { value: p.blurb, merge: 'L' + prr, font: FONT.BODY, size: 9.5, color: BRAND.BODY, wrap: true });
  }

  // ── DISCLAIMER — verbatim from 03_data_model.md, both build modes,
  // never reworded. Non-negotiable.
  var discRow = dFirst + detail.length + 2;
  setCell_(sheet, 'A' + discRow, { value: TAX.DISCLAIMER, merge: 'L' + (discRow + 1),
    font: FONT.BODY, size: 10, italic: true, color: BRAND.BODY, bg: BRAND.CREAM, wrap: true, v: 'middle' });
  themable_(sheet.getName(), 'section', sheet.getRange(discRow, 1, 2, 12).getA1Notation());

  footer_(sheet, discRow + 3, 'L');

  // ── Hidden helper rows 60-64: Q1..Q4 month flags + complete-month flags.
  // SUMPRODUCT against engine row 37 (NetProfit) gives quarter sums — one
  // flag row per quarter instead of 12-condition formulas per card.
  var flagNames = ['q1 flags', 'q2 flags', 'q3 flags', 'q4 flags', 'complete-month flags'];
  for (var f = 0; f < 5; f++) {
    sheet.getRange(TAXC.FLAGS_FIRST_ROW + f, 1).setValue(flagNames[f]).setFontColor(BRAND.CAPTION).setFontSize(8);
    for (var j = 1; j <= 24; j++) {
      var mref = 'INDEX(cc_engine_months,1,' + j + ')';
      var formula;
      if (f < 4) {
        formula = '=IFERROR(IF(VALUE(LEFT(' + mref + ',4))<>cc_tax_year,0,IF(ROUNDUP(VALUE(RIGHT(' + mref + ',2))/3,0)=' + (f + 1) + ',1,0)),0)';
      } else {
        formula = '=IFERROR(IF(AND(VALUE(LEFT(' + mref + ',4))=cc_tax_year,' + mref + '<TEXT(TODAY(),"yyyy-mm")),1,0),0)';
      }
      sheet.getRange(TAXC.FLAGS_FIRST_ROW + f, 1 + j).setFormula(formula);
    }
  }
  sheet.hideRows(TAXC.FLAGS_FIRST_ROW - 1, 7);

  setColWidths_(sheet, [105, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95]);
}

// ── Invoices — tracked for follow-up; cash basis, never in the P&L ────
var INV_FIRST_ROW = 15;
var INV_ROW_COUNT = 25;

function buildInvoices_(sheet, mode) {
  chrome_(sheet, TABS.INVOICES, 'I');
  var r = titleRow_(sheet, 'I', 'Invoices',
    "Track what's owed and chase what's late. Revenue counts when the money lands.");

  // Summary cards — Outstanding · Overdue · Paid this month (3 cols each).
  var amt = '$F$' + INV_FIRST_ROW + ':$F$' + (INV_FIRST_ROW + INV_ROW_COUNT - 1);
  var sta = '$G$' + INV_FIRST_ROW + ':$G$' + (INV_FIRST_ROW + INV_ROW_COUNT - 1);
  var due = '$E$' + INV_FIRST_ROW + ':$E$' + (INV_FIRST_ROW + INV_ROW_COUNT - 1);
  var pdd = '$H$' + INV_FIRST_ROW + ':$H$' + (INV_FIRST_ROW + INV_ROW_COUNT - 1);
  kpiCard_(sheet, 'A' + r, 3, 'OUTSTANDING',
    '=SUMIFS(' + amt + ',' + sta + ',"Sent")', 'sent, awaiting payment', BRAND.FOREST);
  kpiCard_(sheet, 'D' + r, 3, 'OVERDUE',
    '=SUMIFS(' + amt + ',' + sta + ',"Sent",' + due + ',"<"&TODAY(),' + due + ',"<>")', 'sent and past the due date', BRAND.GARNET);
  kpiCard_(sheet, 'G' + r, 3, 'PAID THIS MONTH',
    '=SUMIFS(' + amt + ',' + sta + ',"Paid",' + pdd + ',">="&EOMONTH(TODAY(),-1)+1,' + pdd + ',"<="&EOMONTH(TODAY(),0))', 'settled this calendar month', BRAND.GOLD);
  sheet.getRange(r + 1, 1).setNumberFormat('$#,##0');
  sheet.getRange(r + 1, 4).setNumberFormat('$#,##0');
  sheet.getRange(r + 1, 7).setNumberFormat('$#,##0');
  r += 4;

  // Register
  sectionLabel_(sheet, 'A' + r, 'I' + r, 'INVOICE REGISTER · STATUS IS DRAFT / SENT / PAID — OVERDUE PAINTS ITSELF');
  r += 1;
  sheet.getRange(r, 1, 1, 9).setValues([['#', 'Client', 'Description', 'Issued', 'Due', 'Amount', 'Status', 'Paid date', 'Notes']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);

  var first = INV_FIRST_ROW;
  // auto-number col A: 1001, 1002, … only when the row has a client
  for (var i = 0; i < INV_ROW_COUNT; i++) {
    sheet.getRange(first + i, 1).setFormula('=IF($B' + (first + i) + '="","",' + (1000 + i + 1) + ')')
      .setFontColor(BRAND.CAPTION).setHorizontalAlignment('left');
  }
  // yellow editable columns B-I
  sheet.getRange(first, 2, INV_ROW_COUNT, 8).setBackground(BRAND.YELLOW)
    .setBorder(true, true, true, true, true, true, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);
  sheet.getRange(first, 4, INV_ROW_COUNT, 2).setNumberFormat('mmm d, yyyy');
  sheet.getRange(first, 8, INV_ROW_COUNT, 1).setNumberFormat('mmm d, yyyy');
  sheet.getRange(first, 6, INV_ROW_COUNT, 1).setNumberFormat('$#,##0.00');

  var ss = SpreadsheetApp.getActive();
  var clientRule = SpreadsheetApp.newDataValidation()
    .requireValueInRange(ss.getRangeByName('cc_clients_list') ||
      ss.getRange("'" + TABS.CLIENTS + "'!A10:A21"), true).build();
  sheet.getRange(first, 2, INV_ROW_COUNT, 1).setDataValidation(clientRule);
  var statusRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Draft', 'Sent', 'Paid'], true).setAllowInvalid(false).build();
  sheet.getRange(first, 7, INV_ROW_COUNT, 1).setDataValidation(statusRule);

  // Overdue is DERIVED: paint the Status cell Over-red when Sent + past due.
  var statusRange = sheet.getRange(first, 7, INV_ROW_COUNT, 1);
  var rules = sheet.getConditionalFormatRules();
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied('=AND($G' + first + '="Sent",$E' + first + '<>"",$E' + first + '<TODAY())')
    .setBackground(BRAND.CHIP_OVER_BG).setFontColor(BRAND.GARNET).setBold(true)
    .setRanges([statusRange]).build());
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo('Paid').setBackground(BRAND.CHIP_ON_BG).setFontColor(BRAND.CANOPY)
    .setRanges([statusRange]).build());
  sheet.setConditionalFormatRules(rules);

  // Mock invoices — date offsets from today so the overdue painting and the
  // Paid-this-month card always demo correctly.
  if (mode === 'mock') {
    var today = new Date();
    var off = function (days) { return new Date(today.getFullYear(), today.getMonth(), today.getDate() + days); };
    var rows = MOCK.invoices.map(function (v) {
      return [v[1], v[2], off(v[3]), off(v[4]), v[5], v[6], v[7] === null ? '' : off(v[7]), ''];
    });
    sheet.getRange(first, 2, rows.length, 8).setValues(rows);
  }

  var capRow = first + INV_ROW_COUNT + 1;
  setCell_(sheet, 'A' + capRow, {
    value: 'Invoices are tracked here for follow-up. Revenue enters the books when the money lands in Transactions — cash basis, no double-counting.',
    merge: 'I' + capRow, font: FONT.BODY, size: 11, italic: true, color: BRAND.CAPTION, wrap: true });
  footer_(sheet, capRow + 2, 'I');
  setColWidths_(sheet, [55, 160, 230, 95, 95, 100, 90, 95, 160]);
}

// ── Mileage — the log that feeds the Tax Center estimate ──────────────
var MIL_FIRST_ROW = 15;
var MIL_ROW_COUNT = 100;

function buildMileage_(sheet, mode) {
  chrome_(sheet, TABS.MILEAGE, 'H');
  var r = titleRow_(sheet, 'H', 'Mileage',
    'Log business miles. The deduction feeds your Tax Center estimate automatically.');

  // Totals — G11 is the YTD deduction (named cc_mileage_ytd).
  var milesCol = '$C$' + MIL_FIRST_ROW + ':$C$' + (MIL_FIRST_ROW + MIL_ROW_COUNT - 1);
  var dedCol = '$D$' + MIL_FIRST_ROW + ':$D$' + (MIL_FIRST_ROW + MIL_ROW_COUNT - 1);
  kpiCard_(sheet, 'A' + r, 2, 'TOTAL MILES', '=SUM(' + milesCol + ')', 'logged below', BRAND.FOREST);
  kpiCard_(sheet, 'C' + r, 2, 'RATE / MILE', '=IFERROR(cc_mileage_rate,' + TAX.MILEAGE_RATE_DEFAULT + ')', 'set in Tax Center', BRAND.GOLD);
  kpiCard_(sheet, 'E' + r, 2, 'DEDUCTION YTD', '=G11', 'feeds the Tax Center estimate', BRAND.FOREST);
  sheet.getRange(r + 1, 1).setNumberFormat('#,##0');
  sheet.getRange(r + 1, 3).setNumberFormat('$0.000');
  sheet.getRange(r + 1, 5).setNumberFormat('$#,##0.00');
  // The canonical total (cc_mileage_ytd) lives at G11.
  sheet.getRange('G10').setValue('deduction total (auto)').setFontColor(BRAND.CAPTION).setFontSize(8);
  sheet.getRange('G11').setFormula('=ROUND(SUM(' + dedCol + '),2)').setNumberFormat('$#,##0.00')
    .setFontFamily(FONT.BODY).setFontWeight('bold').setFontColor(BRAND.FOREST);
  r += 4;

  sectionLabel_(sheet, 'A' + r, 'H' + r, 'MILEAGE LOG');
  r += 1;
  sheet.getRange(r, 1, 1, 4).setValues([['Date', 'Purpose', 'Miles', 'Deduction']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);

  var first = MIL_FIRST_ROW;
  // yellow inputs A-C; D computes at the Tax Center rate
  sheet.getRange(first, 1, MIL_ROW_COUNT, 3).setBackground(BRAND.YELLOW)
    .setBorder(true, true, true, true, true, true, BRAND.GOLD, SpreadsheetApp.BorderStyle.SOLID);
  sheet.getRange(first, 1, MIL_ROW_COUNT, 1).setNumberFormat('mmm d, yyyy');
  sheet.getRange(first, 3, MIL_ROW_COUNT, 1).setNumberFormat('#,##0');
  for (var i = 0; i < MIL_ROW_COUNT; i++) {
    sheet.getRange(first + i, 4).setFormula(
      '=IF($C' + (first + i) + '="","",ROUND($C' + (first + i) + '*IFERROR(cc_mileage_rate,' + TAX.MILEAGE_RATE_DEFAULT + '),2))');
  }
  sheet.getRange(first, 4, MIL_ROW_COUNT, 1).setNumberFormat('$#,##0.00');

  // Mock log — dates slide to the trailing 6 months ending today.
  if (mode === 'mock') {
    var today = new Date();
    var monthDates = [];
    for (var k = 5; k >= 0; k--) {
      var d = new Date(today.getFullYear(), today.getMonth() - k, 1);
      monthDates.push({ year: d.getFullYear(), monthIdx: d.getMonth() });
    }
    var rows = MOCK.mileage.map(function (m) {
      return [new Date(monthDates[m[0]].year, monthDates[m[0]].monthIdx, m[1]), m[2], m[3]];
    });
    sheet.getRange(first, 1, rows.length, 3).setValues(rows);
  }

  var capRow = first + MIL_ROW_COUNT + 1;
  setCell_(sheet, 'A' + capRow, {
    value: 'Deduction = miles × the rate in Tax Center. Change the rate there and every row updates.',
    merge: 'H' + capRow, font: FONT.BODY, size: 11, italic: true, color: BRAND.CAPTION });
  footer_(sheet, capRow + 2, 'H');
  setColWidths_(sheet, [105, 320, 70, 100, 40, 40, 130, 40]);
}

// ── Bank Import Guide ─────────────────────────────────────────────────
var IMPORT_ACCOUNT_CELL = 'C10';
var IMPORT_PASTE_ANCHOR = 'A12';            // top-left of the unmerged paste grid
var IMPORT_PASTE_ROW_COUNT = 50;            // 50 rows × 8 cols = paste capacity
var IMPORT_PASTE_COL_COUNT = 8;
var IMPORT_PASTE_LAST_ROW = 12 + IMPORT_PASTE_ROW_COUNT - 1;   // 61
var REVIEW_HEADER_ROW = 64;
var REVIEW_FIRST_ROW  = 65;
var REVIEW_ROW_COUNT  = 20;
var UNCAT_SECTION_ROW = 87;       // section label
var UNCAT_HEADER_ROW  = 88;
var UNCAT_FIRST_ROW   = 89;
var UNCAT_ROW_COUNT   = 20;

function buildBankImport_(sheet, mode) {
  chrome_(sheet, TABS.IMPORT, 'L');
  var r = titleRow_(sheet, 'L', 'Bank Import Guide',
    'Paste a CSV. Credits route to review, owner draws auto-flag, expenses categorize themselves.');

  // 5-step row. Steps 4-5 show a live pending count that flips to ✓.
  var dRev = REVIEW_FIRST_ROW;
  var dRevEnd = REVIEW_FIRST_ROW + REVIEW_ROW_COUNT - 1;
  var dUnc = UNCAT_FIRST_ROW;
  var dUncEnd = UNCAT_FIRST_ROW + UNCAT_ROW_COUNT - 1;
  var reviewCountFormula =
    '=IF(COUNTA(A' + dRev + ':A' + dRevEnd + ')=0,"4",' +
    'IF(COUNTA(A' + dRev + ':A' + dRevEnd + ')=COUNTA(E' + dRev + ':E' + dRevEnd + '),"✓",' +
    'COUNTA(A' + dRev + ':A' + dRevEnd + ')-COUNTA(E' + dRev + ':E' + dRevEnd + ')))';
  var uncatCountFormula =
    '=IF(COUNTA(A' + dUnc + ':A' + dUncEnd + ')=0,"5",' +
    'IF(COUNTA(A' + dUnc + ':A' + dUncEnd + ')=COUNTA(E' + dUnc + ':E' + dUncEnd + '),"✓",' +
    'COUNTA(A' + dUnc + ':A' + dUncEnd + ')-COUNTA(E' + dUnc + ':E' + dUncEnd + ')))';

  var steps = [
    { digit: '1', label: 'Pick account (C10)',          digitCol: 1, labelStart: 2, labelEnd: 3 },
    { digit: '2', label: 'Paste CSV below',             digitCol: 4, labelStart: 5, labelEnd: 5 },
    { digit: '3', label: 'Run Import',                  digitCol: 6, labelStart: 7, labelEnd: 7 },
    { digit: reviewCountFormula, label: 'Review credits & owner rows ↓', digitCol: 8, labelStart: 9, labelEnd: 9 },
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

  // account input — dropdown from the Accounts list. Mock prefill only
  // (Foundation cleanup rule: the blank build ships the cell empty).
  setCell_(sheet, 'A' + (r + 2), { value: 'Account name', font: FONT.BODY, size: 11, bold: true, color: BRAND.BODY });
  var acctCell = sheet.getRange(IMPORT_ACCOUNT_CELL);
  if (mode === 'mock') acctCell.setValue('Biz Checking (Novo)');
  acctCell.setBackground(BRAND.YELLOW)
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

  // Review block — credits land here as Revenue (pick a Client/Stream) and
  // owner-keyword rows land flagged Owner. Keep? = No reroutes to Expense.
  var sec = REVIEW_HEADER_ROW - 1;  // row 63 section label
  sectionLabel_(sheet, 'A' + sec, 'L' + sec, 'REVIEW · CREDITS LAND AS REVENUE, DRAWS AS OWNER — CONFIRM BOTH');
  sheet.getRange(REVIEW_HEADER_ROW, 1, 1, 6)
    .setValues([['Date', 'Description', 'Amount', 'Flagged as', 'Keep?', 'Client/Stream']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  var ynRule = SpreadsheetApp.newDataValidation().requireValueInList(['Yes', 'No'], true).build();
  sheet.getRange(REVIEW_FIRST_ROW, 5, REVIEW_ROW_COUNT, 1).setDataValidation(ynRule)
    .setBackground(BRAND.YELLOW);
  var streamRule = SpreadsheetApp.newDataValidation()
    .requireValueInRange(ss.getRangeByName('cc_clients_list') ||
      ss.getRange("'" + TABS.CLIENTS + "'!A10:A21"), true).build();
  sheet.getRange(REVIEW_FIRST_ROW, 6, REVIEW_ROW_COUNT, 1).setDataValidation(streamRule)
    .setBackground(BRAND.YELLOW);

  // Uncategorized Merchants block — turn any Misc row into a rule with a
  // single dropdown pick. Populated by importTransactions after each import.
  sectionLabel_(sheet, 'A' + UNCAT_SECTION_ROW, 'L' + UNCAT_SECTION_ROW,
    'UNCATEGORIZED MERCHANTS · PICK A CATEGORY TO ADD A RULE');
  sheet.getRange(UNCAT_HEADER_ROW, 1, 1, 6)
    .setValues([['Sample Description', 'Hits', 'Sample Amount', 'Keyword', 'Category', 'Status']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  sheet.getRange(UNCAT_FIRST_ROW, 3, UNCAT_ROW_COUNT, 1)
    .setNumberFormat('$#,##0.00;[red]-$#,##0.00')
    .setFontFamily('Roboto Mono').setFontSize(10).setHorizontalAlignment('right');
  sheet.getRange(UNCAT_FIRST_ROW, 4, UNCAT_ROW_COUNT, 1).setBackground(BRAND.YELLOW)
    .setFontFamily('Roboto Mono').setFontSize(10);
  sheet.getRange(UNCAT_FIRST_ROW, 5, UNCAT_ROW_COUNT, 1).setBackground(BRAND.YELLOW);
  var uncatRange = ss.getRangeByName('cc_tx_categories') ||
    ss.getRange("'" + TABS.CATEGORIES + "'!A11:A38");
  var uncatRule = SpreadsheetApp.newDataValidation()
    .requireValueInRange(uncatRange, true).setAllowInvalid(false).build();
  sheet.getRange(UNCAT_FIRST_ROW, 5, UNCAT_ROW_COUNT, 1).setDataValidation(uncatRule);

  var captionRow = UNCAT_FIRST_ROW + UNCAT_ROW_COUNT + 1;
  setCell_(sheet, 'A' + captionRow, { value: 'Sniffs headers from Chase, BoA, Wells Fargo, Cap One, Ally, Citi, USAA, Discover, Amex. Duplicates (same date + description + amount) are skipped on re-import. Credits route to the review block as Revenue; owner-draw keywords (VENMO, ZELLE, ATM, PERSONAL…) auto-flag as Owner so they never inflate or deflate profit.',
    merge: 'L' + captionRow, font: FONT.BODY, size: 11, italic: true, color: BRAND.CAPTION, wrap: true });

  footer_(sheet, captionRow + 2, 'L');
  setColWidths_(sheet, [170, 50, 130, 130, 110, 90, 80, 80, 110, 60, 60, 60]);

  // Pin chrome + step pills + account input while the buyer scrolls the
  // paste / review / uncategorized grids below.
  SpreadsheetApp.flush();
  try { sheet.setFrozenRows(10); } catch (e) {}
}
/**
 * Column & Co. — The Ledger v1.0
 * 10 · Menu + triggers (onOpen / onEdit / onSelectionChange).
 */

function onOpen() {
  buildMenu_();
  hideSystemTabs_();
  // Quiet auto-roll: if the calendar has moved past the engine's last
  // column, shift the rolling 24-month window forward to today. No-op
  // when already anchored. Wrapped — onOpen must never throw.
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
  menu.addItem('Add Account…', 'addAccount');
  menu.addItem('Add Client…', 'addClient');
  menu.addSeparator();
  menu.addItem('Import Bank Transactions', 'importTransactions');
  menu.addItem('Clear Paste Zone', 'clearPasteZone');
  menu.addItem('Recategorize Ledger from Rules', 'recategorizeAll');
  menu.addItem('Sort Transactions by Date', 'sortTransactions');
  menu.addSeparator();
  menu.addSubMenu(buildThemeMenu_());
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
  var row = e.range.getRow();
  var col = e.range.getColumn();

  // Accounts: stamp Last Updated (col F) when Current Balance (col E) changes
  if (name === TABS.ACCOUNTS && col === 5 && row >= REGISTRY_FIRST_ROW &&
      row < REGISTRY_FIRST_ROW + REGISTRY_ROW_COUNT) {
    sheet.getRange(row, 6).setValue(new Date());
  }

  // Bank Import — Uncategorized block: picking a Category in col E saves a
  // keyword rule from col D and reapplies it to past Misc rows.
  if (name === TABS.IMPORT && col === 5 &&
      row >= UNCAT_FIRST_ROW && row < UNCAT_FIRST_ROW + UNCAT_ROW_COUNT) {
    var keyword = String(sheet.getRange(row, 4).getValue() || '').trim().toUpperCase();
    var category = String(e.range.getValue() || '').trim();
    if (keyword && category) {
      addKeywordRule_(keyword, category);
      var touched = recategorizeWhereDesc_(keyword, category);
      sheet.getRange(row, 6).setValue('Rule saved ✓ · ' + touched + ' row' + (touched === 1 ? '' : 's') + ' updated')
        .setFontColor(BRAND.CANOPY).setFontStyle('italic');
    }
  }

  // Bank Import — Review block: Keep? (col E) and Client/Stream (col F)
  // write back to the matching ledger row.
  if (name === TABS.IMPORT && (col === 5 || col === 6) &&
      row >= REVIEW_FIRST_ROW && row < REVIEW_FIRST_ROW + REVIEW_ROW_COUNT) {
    applyReviewEdit_(sheet, row);
  }

  // Tax Center: normalize the Custom % cell — typing "28" in a percent cell
  // stores 28 (= 2800%); assume the buyer meant 28% and rewrite as 0.28.
  // Same guard for the effective-rate cell. Preset changes update _Config.
  if (name === TABS.TAX && row === 11) {
    if (col === 5 || col === 7) {   // E11 custom %, G11 effective rate
      var v = e.range.getValue();
      if (typeof v === 'number' && v > 1) e.range.setValue(v / 100);
    }
    if (col === 3) {                // C11 preset dropdown
      updateActivePreset_(String(e.range.getValue() || ''));
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
 * Column & Co. — The Ledger v1.0
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
  buildMenu_(); // refresh the checkmark
  ss.toast('Theme applied: ' + pal.name, CC.BRAND, 3);
}

function paintRole_(sheet, a1List, color) {
  if (!a1List) return;
  a1List.forEach(function (a1) {
    try { sheet.getRange(a1).setBackground(color); } catch (e) {}
  });
}

function sanitizeId_(id) { return id.replace(/[^a-z0-9]/gi, '_'); }

// Zero-arg menu wrappers (Apps Script menus can't pass args)
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
 * Column & Co. — The Ledger v1.0
 * 12 · Set-aside preset engine.
 *
 * The presets are an in-sheet dropdown (Tax Center C11) resolved by a
 * VLOOKUP against _Config — no menu plumbing needed (unlike the
 * Foundation's 10 budget profiles). The script's only job is bookkeeping:
 * mirror the active preset into _Config!B41 so it survives reload and
 * shows up for AI assistants reading the workbook.
 */

function updateActivePreset_(label) {
  if (!label) return;
  var cfg = SpreadsheetApp.getActive().getSheetByName(TABS.CONFIG);
  if (cfg) cfg.getRange('B41').setValue(label);
  PropertiesService.getDocumentProperties().setProperty('cc_active_preset', label);
}
/**
 * Column & Co. — The Ledger v1.0
 * 13 · Bank CSV import, review write-back, paste-zone clearing, ledger
 *      maintenance, help.
 */

function importTransactions() {
  var ss = SpreadsheetApp.getActive();
  var imp = ss.getSheetByName(TABS.IMPORT);
  var tx = ss.getSheetByName(TABS.TX);
  if (!imp || !tx) return;

  var account = String(imp.getRange(IMPORT_ACCOUNT_CELL).getValue() || '').trim();
  if (!account) { ss.toast('Pick an account in C10 first.', CC.BRAND, 4); return; }

  // Account-name validation against the Accounts list (cc_accounts_list)
  var acctNamed = ss.getRangeByName('cc_accounts_list');
  if (acctNamed) {
    var accounts = acctNamed.getValues()
      .map(function (r) { return String(r[0] || '').trim(); })
      .filter(Boolean);
    if (accounts.indexOf(account) === -1) {
      ss.toast('Account "' + account + '" not in Accounts list. Add it there or fix C10.', CC.BRAND, 6);
      return;
    }
  }

  // Read the paste zone. If A12 contains a multi-line string the buyer
  // pasted plain text — use the CSV-text path. Otherwise read the
  // unmerged 50×8 grid that tabular paste lands into.
  var firstCell = imp.getRange(12, 1).getValue();
  var rowsAsArrays;
  if (typeof firstCell === 'string' && firstCell.indexOf('\n') !== -1) {
    var lines = String(firstCell).split(/\r?\n/).filter(function (l) { return l.trim() !== ''; });
    rowsAsArrays = lines.map(parseCsvLine_);
  } else {
    var raw = imp.getRange(12, 1, IMPORT_PASTE_ROW_COUNT, IMPORT_PASTE_COL_COUNT).getValues();
    rowsAsArrays = raw
      .map(function (r) { return r.map(function (c) { return c === null ? '' : c; }); })
      .filter(function (r) { return r.some(function (c) { return String(c).trim() !== ''; }); });
  }
  if (rowsAsArrays.length < 2) {
    ss.toast('Paste a CSV into the green zone first (header row + at least one data row).', CC.BRAND, 5);
    return;
  }

  var header = rowsAsArrays[0].map(function (c) { return String(c); });
  var cols = sniffColumns_(header);
  if (cols.amount < 0 || cols.date < 0) {
    ss.toast('Could not detect Date/Amount columns. Supported headers: Date, Description/Memo/Payee, Amount (or Debit/Credit pair).', CC.BRAND, 6);
    return;
  }

  // Build existing-row dedup index from the live ledger.
  var tz = ss.getSpreadsheetTimeZone();
  var dedupKey = function (d, desc, amt) {
    var ds = (d instanceof Date) ? Utilities.formatDate(d, tz, 'yyyy-MM-dd') : String(d || '').trim();
    return ds + '|' + String(desc || '').trim() + '|' + Number(amt).toFixed(2);
  };
  var seen = {};
  var existing = readExistingTx_(tx);
  for (var e = 0; e < existing.length; e++) {
    seen[dedupKey(existing[e][0], existing[e][1], existing[e][2])] = true;
  }

  // Classify every row. Type rules (Revenue/Owner/Transfer keywords) win;
  // otherwise sign decides: unmatched credits go to the Revenue review,
  // debits become Expense rows with a keyword category (Misc fallback).
  var rules = loadKeywordRules_(ss);
  var out = [], review = [], miscDescs = [];
  var counts = { imported: 0, dup: 0, amountNull: 0, dateBad: 0, rowShort: 0, owner: 0 };
  for (var i = 1; i < rowsAsArrays.length; i++) {
    var f = rowsAsArrays[i];
    if (!f || f.length < 2) { counts.rowShort++; continue; }
    var date = parseDate_(f[cols.date]);
    var desc = String(f[cols.desc] != null ? f[cols.desc] : '').trim();
    var amount = parseAmount_(f, cols);
    if (amount === null) { counts.amountNull++; continue; }
    if (!(date instanceof Date)) counts.dateBad++;
    var key = dedupKey(date, desc, amount);
    if (seen[key]) { counts.dup++; continue; }
    seen[key] = true;

    var ruleCat = categorize_(desc, rules);
    var type, category = '', stream = '';
    if (ruleCat === 'Owner') {
      type = 'Owner'; counts.owner++;
      review.push([date, desc, amount, 'Owner']);
    } else if (ruleCat === 'Transfer') {
      type = 'Transfer';
    } else if (ruleCat === 'Revenue' || (amount > 0 && ruleCat === 'Misc')) {
      type = 'Revenue';
      review.push([date, desc, amount, 'Revenue']);
    } else {
      type = 'Expense';
      category = ruleCat;
      if (ruleCat === 'Misc') miscDescs.push({ desc: desc, amount: amount });
    }
    out.push([date, desc, amount, type, category, stream, account, '']);
    counts.imported++;
  }
  if (!out.length && !counts.dup && !counts.amountNull && !counts.dateBad) {
    ss.toast('No valid rows parsed.', CC.BRAND, 6);
    return;
  }
  var misc = miscDescs.length;

  // Roll the 24-month window forward if an imported month is past the
  // engine's last column. Anchored on the latest imported date.
  var rolledTo = '';
  if (out.length) {
    var maxDate = null;
    for (var od = 0; od < out.length; od++) {
      var d = out[od][0];
      if (d instanceof Date && (!maxDate || d > maxDate)) maxDate = d;
    }
    if (maxDate) {
      var lastCode = lastEngineMonthCode_();
      var maxCode = monthCodeOfDate_(maxDate);
      if (lastCode && maxCode > lastCode) {
        if (rollEngineForward_(maxDate)) rolledTo = maxCode;
      }
    }
  }

  if (out.length) {
    var firstEmpty = findFirstEmptyTxRow_(tx);
    tx.getRange(firstEmpty, 1, out.length, 8).setValues(out);
  }

  // Refresh the Review block (credits + owner rows, 20-row capacity).
  imp.getRange(REVIEW_FIRST_ROW, 1, REVIEW_ROW_COUNT, 6).clearContent();
  var shown = 0;
  if (review.length) {
    shown = Math.min(review.length, REVIEW_ROW_COUNT);
    imp.getRange(REVIEW_FIRST_ROW, 1, shown, 4).setValues(review.slice(0, shown));
    imp.getRange(REVIEW_FIRST_ROW, 1, shown, 1).setNumberFormat('mmm d, yyyy');
    imp.getRange(REVIEW_FIRST_ROW, 3, shown, 1).setNumberFormat('$#,##0.00;[red]-$#,##0.00');
  }

  // Refresh the Uncategorized Merchants block — group Misc descs by
  // suggested keyword, sort by hit count, write up to UNCAT_ROW_COUNT rows.
  imp.getRange(UNCAT_FIRST_ROW, 1, UNCAT_ROW_COUNT, 6).clearContent();
  if (miscDescs.length) {
    var groups = {};
    for (var m = 0; m < miscDescs.length; m++) {
      var dsc = miscDescs[m].desc;
      var am = miscDescs[m].amount;
      var k = suggestKeyword_(dsc);
      if (!k) continue;
      if (!groups[k]) groups[k] = { sample: dsc, sampleAmt: am, hits: 0, keyword: k };
      groups[k].hits++;
    }
    var grows = Object.keys(groups).map(function (k) { return groups[k]; })
      .sort(function (a, b) { return b.hits - a.hits; })
      .slice(0, UNCAT_ROW_COUNT);
    if (grows.length) {
      var grid = grows.map(function (g) { return [g.sample, g.hits, g.sampleAmt, g.keyword, '', '']; });
      imp.getRange(UNCAT_FIRST_ROW, 1, grows.length, 6).setValues(grid);
      imp.getRange(UNCAT_FIRST_ROW, 3, grows.length, 1).setNumberFormat('$#,##0.00;[red]-$#,##0.00');
    }
  }

  renumberLedger();
  sortTxByDateDesc_(tx);  // newest first so the just-imported rows surface

  // Jump cursor to whichever review queue still needs the buyer.
  imp.activate();
  if (review.length > 0) {
    imp.setActiveRange(imp.getRange(REVIEW_HEADER_ROW, 1));
  } else if (miscDescs.length > 0) {
    imp.setActiveRange(imp.getRange(UNCAT_SECTION_ROW, 1));
  }

  var parts = ['Imported ' + counts.imported];
  if (counts.dup) parts.push(counts.dup + ' duplicate' + (counts.dup === 1 ? '' : 's') + ' skipped');
  if (counts.amountNull) parts.push(counts.amountNull + ' dropped (no amount)');
  if (counts.dateBad) parts.push(counts.dateBad + ' bad date — kept but check them');
  if (counts.owner) parts.push(counts.owner + ' flagged Owner');
  if (misc) parts.push(misc + ' fell to Misc');
  if (review.length) parts.push(review.length + ' row' + (review.length === 1 ? '' : 's') + ' for review');
  if (review.length > REVIEW_ROW_COUNT) {
    parts.push('(' + (review.length - REVIEW_ROW_COUNT) + ' beyond the review block)');
  }
  if (rolledTo) parts.push('engine rolled to ' + rolledTo);
  var pinFor = (counts.dup || counts.amountNull || counts.dateBad || rolledTo) ? 12 : 8;
  ss.toast(parts.join(' · '), CC.BRAND, pinFor);
}

// Review write-back: Keep? = No reroutes a flagged row to Expense; a
// Client/Stream pick lands on the matching ledger row.
function applyReviewEdit_(imp, row) {
  var ss = SpreadsheetApp.getActive();
  var tx = ss.getSheetByName(TABS.TX);
  if (!tx) return;
  var vals = imp.getRange(row, 1, 1, 6).getValues()[0];
  var date = vals[0], desc = String(vals[1] || ''), amount = vals[2];
  var flagged = String(vals[3] || ''), keep = String(vals[4] || ''), stream = String(vals[5] || '');
  if (!desc) return;
  var txRow = matchTxRow_(tx, date, desc, amount);
  if (!txRow) return;

  if (keep === 'No') {
    // Not revenue / not an owner row after all — make it a categorized expense.
    var rules = loadKeywordRules_(ss);
    var cat = categorize_(desc, rules);
    if (cat === 'Revenue' || cat === 'Owner' || cat === 'Transfer') cat = 'Misc';
    tx.getRange(txRow, 4).setValue('Expense');
    tx.getRange(txRow, 5).setValue(cat);
    tx.getRange(txRow, 6).setValue('');
    return;
  }
  if (flagged === 'Revenue' && stream) {
    tx.getRange(txRow, 6).setValue(stream);
  }
}

// Find the ledger row matching date+description+amount. Returns 0 if absent.
function matchTxRow_(tx, date, desc, amount) {
  var tz = SpreadsheetApp.getActive().getSpreadsheetTimeZone();
  var keyOf = function (d, s, a) {
    var ds = (d instanceof Date) ? Utilities.formatDate(d, tz, 'yyyy-MM-dd') : String(d || '').trim();
    return ds + '|' + String(s || '').trim() + '|' + Number(a).toFixed(2);
  };
  var want = keyOf(date, desc, amount);
  var headerRow = findTxHeaderRow_(tx);
  var lastRow = tx.getLastRow();
  if (lastRow <= headerRow) return 0;
  var n = lastRow - headerRow;
  var data = tx.getRange(headerRow + 1, 1, n, 3).getValues();
  for (var r = 0; r < n; r++) {
    if (data[r][0] === '' || data[r][0] === null) continue;
    if (keyOf(data[r][0], data[r][1], data[r][2]) === want) return headerRow + 1 + r;
  }
  return 0;
}

function readExistingTx_(tx) {
  var headerRow = findTxHeaderRow_(tx);
  var lastRow = tx.getLastRow();
  if (lastRow <= headerRow) return [];
  return tx.getRange(headerRow + 1, 1, lastRow - headerRow, 3).getValues()
    .filter(function (r) { return r[0] !== '' && r[0] !== null; });
}

function findTxHeaderRow_(tx) {
  var finder = tx.getRange(1, 1, 12, 1).getValues();
  for (var i = 0; i < finder.length; i++) { if (finder[i][0] === 'Date') return i + 1; }
  return 9;
}

function clearPasteZone() {
  var ui = SpreadsheetApp.getUi();
  var resp = ui.alert('Clear Paste Zone', 'Empty the paste zone?', ui.ButtonSet.YES_NO);
  if (resp !== ui.Button.YES) return;
  var imp = SpreadsheetApp.getActive().getSheetByName(TABS.IMPORT);
  var zone = imp.getRange(12, 1, IMPORT_PASTE_ROW_COUNT, IMPORT_PASTE_COL_COUNT);
  zone.clearContent();
  zone.setBackground(BRAND.GREEN_ZONE);
}

function renumberLedger() {
  var ss = SpreadsheetApp.getActive();
  var tx = ss.getSheetByName(TABS.TX);
  var headerRow = findTxHeaderRow_(tx);
  var firstData = headerRow + 1;

  tx.getRange(firstData, 1, 5000, 1).setNumberFormat('mmm d, yyyy');
  tx.getRange(firstData, 3, 5000, 1).setNumberFormat('$#,##0.00');
  tx.getRange(firstData, 9, 5000, 1).setFormulaR1C1('=IF(RC1="","",TEXT(RC1,"yyyy-mm"))');

  var typeRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(TX_TYPES, true).build();
  tx.getRange(firstData, 4, 5000, 1).setDataValidation(typeRule);
  var catRange = ss.getRangeByName('cc_tx_categories') ||
    ss.getRange("'" + TABS.CATEGORIES + "'!A11:A38");
  var catList = SpreadsheetApp.newDataValidation()
    .requireValueInRange(catRange, true).build();
  tx.getRange(firstData, 5, 5000, 1).setDataValidation(catList);
  var clientRule = SpreadsheetApp.newDataValidation()
    .requireValueInRange(ss.getRangeByName('cc_clients_list') ||
      ss.getRange("'" + TABS.CLIENTS + "'!A10:A21"), true).build();
  tx.getRange(firstData, 6, 5000, 1).setDataValidation(clientRule);
  var acctRule = SpreadsheetApp.newDataValidation()
    .requireValueInRange(ss.getRangeByName('cc_accounts_list') ||
      ss.getRange("'" + TABS.ACCOUNTS + "'!A10:A21"), true).build();
  tx.getRange(firstData, 7, 5000, 1).setDataValidation(acctRule);
  ss.toast('Ledger formats refreshed', CC.BRAND, 3);
}

// ── Add Account (menu item) ───────────────────────────────────────────
function addAccount() {
  var ui = SpreadsheetApp.getUi();
  var ss = SpreadsheetApp.getActive();
  var acct = ss.getSheetByName(TABS.ACCOUNTS);
  if (!acct) { ui.alert('Accounts tab not found.'); return; }

  var resp = ui.prompt('Add Account',
    'Account name (e.g. "Biz Checking (Novo)"):', ui.ButtonSet.OK_CANCEL);
  if (resp.getSelectedButton() !== ui.Button.OK) return;
  var name = String(resp.getResponseText() || '').trim();
  if (!name) return;

  var range = ss.getRangeByName('cc_accounts_list') || acct.getRange('A10:A21');
  var vals = range.getValues();
  var target = -1;
  for (var i = 0; i < vals.length; i++) {
    if (!vals[i][0]) { target = range.getRow() + i; break; }
    if (String(vals[i][0]).trim().toLowerCase() === name.toLowerCase()) {
      ui.alert('"' + name + '" is already in the Accounts list.');
      return;
    }
  }
  if (target === -1) {
    ui.alert('Accounts list is full. Add capacity in buildAccounts_.');
    return;
  }
  acct.getRange(target, 1).setValue(name);
  acct.getRange(target, 2).setValue('Checking');
  acct.getRange(target, 6).setValue(new Date());
  acct.activate();
  acct.getRange(target, 4).activate();
  ss.toast('Added "' + name + '" — fill in the starting balance →', CC.BRAND, 4);
}

// ── Add Client (menu item) ────────────────────────────────────────────
function addClient() {
  var ui = SpreadsheetApp.getUi();
  var ss = SpreadsheetApp.getActive();
  var cl = ss.getSheetByName(TABS.CLIENTS);
  if (!cl) { ui.alert('Clients tab not found.'); return; }

  var resp = ui.prompt('Add Client',
    'Client or stream name (e.g. "Etsy Shop"):', ui.ButtonSet.OK_CANCEL);
  if (resp.getSelectedButton() !== ui.Button.OK) return;
  var name = String(resp.getResponseText() || '').trim();
  if (!name) return;

  var range = ss.getRangeByName('cc_clients_list') || cl.getRange('A10:A21');
  var vals = range.getValues();
  var target = -1;
  for (var i = 0; i < vals.length; i++) {
    if (!vals[i][0]) { target = range.getRow() + i; break; }
    if (String(vals[i][0]).trim().toLowerCase() === name.toLowerCase()) {
      ui.alert('"' + name + '" is already in the Clients list.');
      return;
    }
  }
  if (target === -1) {
    ui.alert('Clients list is full. Add capacity in buildClients_.');
    return;
  }
  cl.getRange(target, 1).setValue(name);
  cl.getRange(target, 2).setValue('Client');
  cl.getRange(target, 4).setValue('Yes');
  cl.activate();
  cl.getRange(target, 2).activate();
  ss.toast('Added "' + name + '" — set its type →', CC.BRAND, 4);
}

function openHelpSidebar() {
  // One-file rule: the help content is inlined (no Help.html companion).
  var html = HtmlService.createHtmlOutput(
    '<div style="font-family:Roboto,Arial,sans-serif;font-size:13px;color:#1C3D2E;padding:8px 4px;line-height:1.5">' +
    '<h2 style="font-size:16px;margin:0 0 4px">The Ledger · Quick Reference</h2>' +
    '<p style="color:#4B5F54">A business-finance system you own. Six steps on Start Here get you running.</p>' +
    '<h3 style="font-size:13px;margin:14px 0 4px">Importing</h3>' +
    '<p style="color:#4B5F54">Pick the account in C10 of Bank Import Guide, paste your bank CSV in the green zone, run 💳 Column &amp; Co. → Import Bank Transactions. Credits land in the review block — confirm them and pick a Client/Stream. Owner-draw keywords (VENMO, ZELLE, ATM, PERSONAL) auto-flag as Owner and never touch profit.</p>' +
    '<h3 style="font-size:13px;margin:14px 0 4px">Tax Center</h3>' +
    '<p style="color:#4B5F54">Pick a set-aside preset (Standard 25 · Conservative 30 · Lean 20 · Custom). Each quarter card shows net profit, the recommended set-aside, what you paid, and the remainder. The escrow strip compares the recommendation to the balance of your Tax Escrow account.</p>' +
    '<p style="color:#4B5F54;font-style:italic">' + TAX.DISCLAIMER + '</p>' +
    '<h3 style="font-size:13px;margin:14px 0 4px">Themes</h3>' +
    '<p style="color:#4B5F54">💳 Column &amp; Co. → Apply Theme swaps any of the 24 palettes. The Forest/Canopy/Gold letterhead stays put — that is the brand, not the theme.</p>' +
    '<p style="color:#8D9990;margin-top:18px">The Ledger v1.0 · columnandco.com</p>' +
    '</div>'
  ).setTitle('Column & Co. · Help');
  SpreadsheetApp.getUi().showSidebar(html);
}

// ── CSV + parsing helpers ─────────────────────────────────────────────
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
  var lower = header.map(function (h) { return h.toLowerCase(); });
  var find = function (keys) {
    for (var k = 0; k < keys.length; k++) {
      for (var i = 0; i < lower.length; i++) if (lower[i].indexOf(keys[k]) !== -1) return i;
    }
    return -1;
  };
  return {
    date: find(['date', 'posting date', 'transaction date']),
    desc: find(['description', 'memo', 'payee', 'name']),
    amount: find(['amount', 'debit']),
    debit: find(['debit']),
    credit: find(['credit'])
  };
}

function parseAmount_(fields, cols) {
  // Banks with split debit/credit columns
  if (cols.debit >= 0 && cols.credit >= 0 && cols.debit !== cols.credit) {
    var d = cleanNum_(fields[cols.debit]), c = cleanNum_(fields[cols.credit]);
    if (d) return -Math.abs(d);
    if (c) return Math.abs(c);
    return null;
  }
  var v = cleanNum_(fields[cols.amount]);
  return v === null ? null : v;
}

function cleanNum_(s) {
  if (s == null) return null;
  s = String(s).replace(/[$,\s]/g, '');
  if (s === '') return null;
  var paren = /^\(.*\)$/.test(s);
  s = s.replace(/[()]/g, '');
  var n = Number(s);
  if (isNaN(n)) return null;
  return paren ? -n : n;
}

function parseDate_(s) {
  var d = new Date(s);
  return isNaN(d.getTime()) ? s : d;
}

// Longest-keyword-wins — load order never matters; the most specific
// keyword always takes the row ('ETSY DEPOSIT' beats 'ETSY').
function categorize_(desc, rules) {
  var up = (desc || '').toUpperCase();
  var best = null;
  for (var i = 0; i < rules.length; i++) {
    var k = rules[i].keyword;
    if (k && up.indexOf(k) !== -1) {
      if (!best || k.length > best.keyword.length) best = rules[i];
    }
  }
  return best ? best.category : 'Misc';
}

// Heuristic: strip standalone digits, ACH/PMT cruft, and reduce to the first
// two words. Buyer can edit the suggestion before picking a category.
function suggestKeyword_(desc) {
  var s = String(desc || '').toUpperCase()
    .replace(/[#0-9][#0-9\-]+.*$/, '')
    .replace(/\s*-\s*(ACH|PMT|PAYMENT|PAYROLL|DIRECT|DEPOSIT|CRCARDPMT|CCPYMT).*$/, '')
    .replace(/[^A-Z0-9\s\.\!\&\-]/g, ' ')
    .trim();
  var parts = s.split(/\s+/).filter(Boolean);
  return parts.slice(0, 2).join(' ');
}

// Append a new rule to Categories!E:G. If the keyword already exists, just
// update its category (keeps the buyer's note column).
function addKeywordRule_(keyword, category) {
  var ss = SpreadsheetApp.getActive();
  var cats = ss.getSheetByName(TABS.CATEGORIES);
  if (!cats) return;
  var existing = cats.getRange('E11:G200').getValues();
  var key = String(keyword || '').toUpperCase().trim();
  for (var i = 0; i < existing.length; i++) {
    var k = String(existing[i][0] || '').toUpperCase().trim();
    if (k === key) {
      cats.getRange(11 + i, 6).setValue(category);
      return;
    }
    if (!k) {
      cats.getRange(11 + i, 5, 1, 3).setValues([[key, category, '(added from Bank Import)']]);
      return;
    }
  }
}

// Rewrite the category of every Misc EXPENSE row whose description contains
// `keyword`. Returns the count touched.
function recategorizeWhereDesc_(keyword, category) {
  var ss = SpreadsheetApp.getActive();
  var tx = ss.getSheetByName(TABS.TX);
  if (!tx) return 0;
  var headerRow = findTxHeaderRow_(tx);
  var lastRow = tx.getLastRow();
  if (lastRow <= headerRow) return 0;
  var n = lastRow - headerRow;
  var descCol = tx.getRange(headerRow + 1, 2, n, 1).getValues();
  var typeCol = tx.getRange(headerRow + 1, 4, n, 1).getValues();
  var catCol  = tx.getRange(headerRow + 1, 5, n, 1).getValues();
  var key = String(keyword || '').toUpperCase().trim();
  var touched = 0;
  for (var r = 0; r < n; r++) {
    if (String(typeCol[r][0]) === 'Expense' && String(catCol[r][0]) === 'Misc' &&
        String(descCol[r][0] || '').toUpperCase().indexOf(key) !== -1) {
      catCol[r][0] = category;
      touched++;
    }
  }
  if (touched) tx.getRange(headerRow + 1, 5, n, 1).setValues(catCol);
  return touched;
}

// Menu item: walk every Misc expense row and reapply rules. Used after the
// buyer edits keyword rules by hand on the Categories tab.
function recategorizeAll() {
  var ss = SpreadsheetApp.getActive();
  var tx = ss.getSheetByName(TABS.TX);
  if (!tx) return;
  var rules = loadKeywordRules_(ss);
  var headerRow = findTxHeaderRow_(tx);
  var lastRow = tx.getLastRow();
  if (lastRow <= headerRow) { ss.toast('Ledger is empty.', CC.BRAND, 3); return; }
  var n = lastRow - headerRow;
  var descCol = tx.getRange(headerRow + 1, 2, n, 1).getValues();
  var typeCol = tx.getRange(headerRow + 1, 4, n, 1).getValues();
  var catCol  = tx.getRange(headerRow + 1, 5, n, 1).getValues();
  var touched = 0;
  for (var r = 0; r < n; r++) {
    if (String(typeCol[r][0]) === 'Expense' && String(catCol[r][0]) === 'Misc') {
      var c = categorize_(descCol[r][0], rules);
      if (c && c !== 'Misc' && c !== 'Revenue' && c !== 'Owner' && c !== 'Transfer') {
        catCol[r][0] = c; touched++;
      }
    }
  }
  if (touched) tx.getRange(headerRow + 1, 5, n, 1).setValues(catCol);
  ss.toast(touched ? ('Recategorized ' + touched + ' row' + (touched === 1 ? '' : 's')) : 'No Misc rows matched any rule.', CC.BRAND, 4);
}

function loadKeywordRules_(ss) {
  var cats = ss.getSheetByName(TABS.CATEGORIES);
  var values = cats.getRange('E11:F200').getValues();
  var rules = [];
  values.forEach(function (row) {
    if (row[0]) rules.push({ keyword: String(row[0]).toUpperCase(), category: row[1] || 'Misc' });
  });
  return rules;
}

function findFirstEmptyTxRow_(tx) {
  var headerRow = findTxHeaderRow_(tx);
  var colA = tx.getRange(headerRow + 1, 1, 5000, 1).getValues();
  for (var r = 0; r < colA.length; r++) { if (!colA[r][0]) return headerRow + 1 + r; }
  return headerRow + 1;
}

// Sort the ledger by Date descending (newest first). Cols 1-8 only — col 9
// is the Month helper formula (row-relative), which recomputes after sort.
// Returns the row count sorted; 0 if the ledger is empty.
function sortTxByDateDesc_(tx) {
  var headerRow = findTxHeaderRow_(tx);
  var firstEmpty = findFirstEmptyTxRow_(tx);
  var n = firstEmpty - 1 - headerRow;
  if (n <= 0) return 0;
  tx.getRange(headerRow + 1, 1, n, 8).sort({ column: 1, ascending: false });
  return n;
}

function sortTransactions() {
  var ss = SpreadsheetApp.getActive();
  var tx = ss.getSheetByName(TABS.TX);
  if (!tx) return;
  var n = sortTxByDateDesc_(tx);
  ss.toast(n ? ('Sorted ' + n + ' transaction' + (n === 1 ? '' : 's') + ' by date (newest first).') : 'Ledger is empty.', CC.BRAND, 3);
}
