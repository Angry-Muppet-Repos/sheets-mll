/* =====================================================================
   COLUMN & CO. — THE WORKBENCH v1 · MOCK DATA
   Fictional shop Juniper Paper Co., owner Jules Hartley · 9-month window
   ending the current month. Headline truths (verified by the generator
   harness): portfolio net ramps ~$940 → ~$2,100/mo · Wedding Suite No. 4
   ≈ 60% of lifetime net at ROAS ≈ 4 · Minimal Budget Sheets ad spend
   exceeds lifetime net (ROAS < 0.5) · Recipe Card Set views +40% while
   conversion halves · progress = done steps ÷ that product's own list.
   ===================================================================== */

window.CC_DATA = {
  owner: { shop: 'Juniper Paper Co.', name: 'Jules Hartley', month: 'June 2026' },

  // The process-template library (Templates tab). Digital Product shown
  // in full; products can each run a different template via Add Product.
  templates: [
    { name: 'Digital Product', count: 30, steps: [
      { group: 'BUILD', step: 'Concept locked' }, { group: 'BUILD', step: 'Scope written' },
      { group: 'BUILD', step: 'Draft built' }, { group: 'BUILD', step: 'Self-review pass' },
      { group: 'BUILD', step: 'Revisions done' }, { group: 'BUILD', step: 'Final files exported' },
      { group: 'BUILD', step: 'Files named cleanly' }, { group: 'BUILD', step: 'Folder organized' },
      { group: 'QA', step: 'Fresh-eyes test' }, { group: 'QA', step: 'Print + device preview' },
      { group: 'QA', step: 'Links + text proofread' }, { group: 'QA', step: 'Test download as a buyer' },
      { group: 'QA', step: 'Fix pass' }, { group: 'QA', step: 'Final check' },
      { group: 'ASSETS', step: 'Screenshots (hero order)' }, { group: 'ASSETS', step: 'Watermarks applied' },
      { group: 'ASSETS', step: 'Thumbnail' }, { group: 'ASSETS', step: 'Listing copy drafted' },
      { group: 'ASSETS', step: 'Tags + SEO list' }, { group: 'ASSETS', step: 'Price set' },
      { group: 'LISTING', step: 'Listing created' }, { group: 'LISTING', step: 'Files attached' },
      { group: 'LISTING', step: 'Preview checked' }, { group: 'LISTING', step: 'Published' },
      { group: 'LISTING', step: 'URL logged here' },
      { group: 'POST', step: 'First-sale check' }, { group: 'POST', step: 'Review request sent' },
      { group: 'POST', step: 'Week-1 stats logged' }, { group: 'POST', step: 'Retro note written' },
      { group: 'POST', step: 'Next-version ideas filed' },
    ]},
    { name: 'Physical / Handmade', count: 28, steps: [
      { group: 'SOURCE', step: 'Concept locked' }, { group: 'SOURCE', step: 'Materials sourced' },
      { group: 'SOURCE', step: 'Cost per unit computed' }, { group: 'SOURCE', step: 'Prototype made' },
      { group: 'SOURCE', step: 'Prototype tested' },
      { group: 'MAKE', step: 'Production steps written' }, { group: 'MAKE', step: 'First batch made' },
      { group: 'MAKE', step: 'Quality pass' }, { group: 'MAKE', step: 'Packaging chosen' },
      { group: 'MAKE', step: 'Packaging test-shipped' }, { group: 'MAKE', step: 'Restock plan noted' },
      { group: 'ASSETS', step: 'Photos shot (hero order)' }, { group: 'ASSETS', step: 'Photos edited' },
      { group: 'ASSETS', step: 'Thumbnail' }, { group: 'ASSETS', step: 'Listing copy drafted' },
      { group: 'ASSETS', step: 'Tags + SEO list' }, { group: 'ASSETS', step: 'Price set' },
      { group: 'LISTING', step: 'Listing created' }, { group: 'LISTING', step: 'Variations + inventory set' },
      { group: 'LISTING', step: 'Shipping profile set' }, { group: 'LISTING', step: 'Preview checked' },
      { group: 'LISTING', step: 'Published' }, { group: 'LISTING', step: 'URL logged here' },
      { group: 'POST', step: 'First-sale check' }, { group: 'POST', step: 'Review request sent' },
      { group: 'POST', step: 'Week-1 stats logged' }, { group: 'POST', step: 'Retro note written' },
      { group: 'POST', step: 'Restock trigger set' },
    ]},
    { name: 'Service / Custom Order', count: 20 },
    { name: 'Quick List', count: 10 },
  ],

  // Products — ticks = done steps on each product's own process. Six run
  // Digital Product; Juniper's printed line (Recipe Card Set, Holiday Gift
  // Tags) runs Physical / Handmade — the second Checklist section. Teacher
  // Bundle skips two POST steps (tickIdx = explicit done indices).
  products: [
    { name: 'Wedding Suite No. 4',   status: 'Listed',   price: 24, template: 'Digital Product', stepCount: 30, ticks: 30, next: 'Done',                 launchedAgo: '12 mo', target: null,  netLife: 7253, unitsLife: 344, stale: 1 },
    { name: 'Everyday Planner Kit',  status: 'Listed',   price: 16, template: 'Digital Product', stepCount: 30, ticks: 30, next: 'Done',                launchedAgo: '10 mo', target: null,  netLife: 2588, unitsLife: 184, stale: 2 },
    { name: 'Recipe Card Set',       status: 'Listed',   price: 9,  template: 'Physical / Handmade', stepCount: 28, ticks: 28, next: 'Done',             launchedAgo: '9 mo',  target: null,  netLife: 1571, unitsLife: 205, stale: 4 },
    { name: 'Teacher Bundle',        status: 'Listed',   price: 14, template: 'Digital Product', stepCount: 30, ticks: 28, next: 'Week-1 stats logged',  launchedAgo: '45 d',  target: null,  netLife: 379,  unitsLife: 31,  stale: 3,
      tickIdx: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,28] },
    { name: 'Minimal Budget Sheets', status: 'Listed',   price: 7,  template: 'Digital Product', stepCount: 30, ticks: 30, next: 'Done',                 launchedAgo: '7 mo',  target: null,  netLife: 53,   unitsLife: 9,   stale: 22 },
    { name: 'Holiday Gift Tags',     status: 'Assets',   price: null, template: 'Physical / Handmade', stepCount: 28, ticks: 11, next: 'Photos shot (hero order)', launchedAgo: null, target: 9,  netLife: 0, unitsLife: 0, stale: null },
    { name: 'Wedding Suite No. 5',   status: 'Building', price: null, template: 'Digital Product', stepCount: 30, ticks: 5,  next: 'Final files exported', launchedAgo: null,   target: 30,   netLife: 0, unitsLife: 0, stale: null },
    { name: 'Kids Chore Charts',     status: 'Idea',     price: null, template: 'Digital Product', stepCount: 30, ticks: 0,  next: 'Concept locked',       launchedAgo: null,   target: null, netLife: 0, unitsLife: 0, stale: null },
  ],

  // Checklist tab — one horizontal section per process template in use.
  checklist_sections: [
    { template: 'Digital Product',
      products: ['Wedding Suite No. 4', 'Everyday Planner Kit', 'Teacher Bundle', 'Minimal Budget Sheets', 'Wedding Suite No. 5', 'Kids Chore Charts'] },
    { template: 'Physical / Handmade',
      products: ['Recipe Card Set', 'Holiday Gift Tags'] },
  ],

  // Dashboard — active month (Jun 2026)
  kpis: { net: 2118, net_delta: '+18.6%', units: 130, units_delta: '+15 vs last month', spend: 320, spend_delta: 'Etsy Ads · Wedding Suite No. 4', net_after: 1798, net_after_delta: '+16.9%' },
  top_products: [
    { name: 'Wedding Suite No. 4',   net: 1388, units: 66, share: 65, status: 'Listed' },
    { name: 'Everyday Planner Kit',  net: 322,  units: 23, share: 15, status: 'Listed' },
    { name: 'Teacher Bundle',        net: 256,  units: 21, share: 12, status: 'Listed' },
    { name: 'Recipe Card Set',       net: 146,  units: 19, share: 7,  status: 'Listed' },
    { name: 'Minimal Budget Sheets', net: 6,    units: 1,  share: 0,  status: 'Listed' },
  ],
  snapshot: { listed: 5, in_pipeline: 3, net_mtd: 2118, best: 'Wedding Suite No. 4', stalest: 'Minimal Budget Sheets · 22 d', sales_rows: 58 },
  needs_attention: [
    { name: 'Holiday Gift Tags',   stage: 'Assets',   next: 'Photos shot (hero order)', days: 9 },
    { name: 'Wedding Suite No. 5', stage: 'Building', next: 'Final files exported',     days: 30 },
    { name: 'Kids Chore Charts',   stage: 'Idea',     next: 'Concept locked',           days: null },
  ],
  ai_insights: [
    { tag: 'SCALE', text: 'Wedding Suite No. 4 returns about four dollars of net for every ad dollar. Raise the budget before Q4.' },
    { tag: 'KILL',  text: 'Minimal Budget Sheets has cost more in ads than it has ever earned. Retire it or stop the spend.' },
    { tag: 'WATCH', text: 'Recipe Card Set gets more views than ever and converts half as well. The price test is overdue.' },
  ],

  // Pipeline board
  stage_counts: { Idea: 1, Building: 1, QA: 0, Assets: 1, Listing: 0, Listed: 5, Retired: 0 },
  recently_listed: [{ name: 'Teacher Bundle', when: '45 days ago', week1: 118 }],

  // Product View — hero selected
  product_view: {
    selected: 'Wedding Suite No. 4',
    net_month: 1388, net_life: 7253, units_life: 344, last_sale: 'yesterday',
    trend12: [0, 0, 0, 459, 497, 555, 622, 698, 784, 909, 1100, 1388],
    channels: [
      { ch: 'Etsy',    units: 241, gross: 5784, fees: 657, net: 5127 },
      { ch: 'Shopify', units: 69,  gross: 1656, fees: 69,  net: 1587 },
      { ch: 'Gumroad', units: 34,  gross: 816,  fees: 277, net: 539 },
    ],
    spend: { life: 1820, last90: 950, roas: 4.0, verdict: 'on' },
    funnel: [
      { month: 'Apr', views: 2630, favs: 212, orders: 54, conv: 2.1 },
      { month: 'May', views: 2840, favs: 229, orders: 58, conv: 2.0 },
      { month: 'Jun', views: 3080, favs: 247, orders: 66, conv: 2.1 },
    ],
    checklist: { progress: 100, stage: 'Listed', next: 'Done' },
  },

  // Sales Log — recent rows (Fees blank ⇒ Net computes from channel defaults)
  sales_recent: [
    { date: 'Jun 11', product: 'Wedding Suite No. 4',   ch: 'Etsy',    units: 2, gross: 48, fees: null, net: 42.54 },
    { date: 'Jun 11', product: 'Teacher Bundle',        ch: 'Etsy',    units: 1, gross: 14, fees: null, net: 12.22 },
    { date: 'Jun 10', product: 'Wedding Suite No. 4',   ch: 'Shopify', units: 1, gross: 24, fees: null, net: 23.00 },
    { date: 'Jun 10', product: 'Everyday Planner Kit',  ch: 'Etsy',    units: 1, gross: 16, fees: null, net: 14.03 },
    { date: 'Jun 9',  product: 'Recipe Card Set',       ch: 'Etsy',    units: 2, gross: 18, fees: null, net: 15.84 },
    { date: 'Jun 9',  product: 'Wedding Suite No. 4',   ch: 'Etsy',    units: 1, gross: 24, fees: 2.73, net: 21.27 },
    { date: 'Jun 8',  product: 'Everyday Planner Kit',  ch: 'Shopify', units: 1, gross: 16, fees: null, net: 15.24 },
    { date: 'Jun 8',  product: 'Wedding Suite No. 4',   ch: 'Gumroad', units: 1, gross: 24, fees: null, net: 21.10 },
    { date: 'Jun 7',  product: 'Teacher Bundle',        ch: 'Etsy',    units: 2, gross: 28, fees: null, net: 24.89 },
    { date: 'Jun 7',  product: 'Wedding Suite No. 4',   ch: 'Etsy',    units: 3, gross: 72, fees: null, net: 64.71 },
    { date: 'Jun 6',  product: 'Minimal Budget Sheets', ch: 'Etsy',    units: 1, gross: 7,  fees: null, net: 5.89 },
    { date: 'Jun 5',  product: 'Recipe Card Set',       ch: 'Etsy',    units: 1, gross: 9,  fees: null, net: 7.70 },
    { date: 'Jun 5',  product: 'Wedding Suite No. 4',   ch: 'Etsy',    units: 2, gross: 48, fees: null, net: 42.54 },
    { date: 'Jun 4',  product: 'Everyday Planner Kit',  ch: 'Etsy',    units: 1, gross: 16, fees: null, net: 14.03 },
  ],

  channels: [
    { ch: 'Etsy',    fee: 9.5, flat: 0.45, note: 'transaction + processing + listing, folded' },
    { ch: 'Shopify', fee: 2.9, flat: 0.30, note: 'payments processing, plan-dependent' },
    { ch: 'Gumroad', fee: 10.0, flat: 0.50, note: 'flat platform fee' },
    { ch: 'Direct',  fee: 0.0, flat: 0.00, note: 'owner-defined' },
  ],

  // The 24 in-sheet palettes — verbatim from the Foundation _Config
  palettes: [
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
    { id: 'custom',        name: 'Custom',          primary: '#1B2A4A', mid: '#2C3E6B', accent: '#C8873A', bg: '#F3F4F6', zebra: '#EEF0F5', dark: '#111827', accentLight: '#F5D9B0' },
  ],

  // Bottom tab strip — 11 visible (the spec's 13 minus hidden _Config/_Schema)
  tabs: [
    { id: 'start',     label: 'Start Here' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'pipeline',  label: 'Pipeline' },
    { id: 'product',   label: 'Product View' },
    { id: 'trends',    label: 'Trends' },
    { id: 'sales',     label: 'Sales Log' },
    { id: 'marketing', label: 'Marketing Log' },
    { id: 'stats',     label: 'Stats' },
    { id: 'products',  label: 'Products' },
    { id: 'checklist', label: 'Checklist' },
    { id: 'templates', label: 'Templates' },
    { id: 'channels',  label: 'Channels' },
    { id: 'engine',    label: '_Engine', system: true },
  ],
};
