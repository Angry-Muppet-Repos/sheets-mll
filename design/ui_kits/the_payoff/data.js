/* =====================================================================
   COLUMN & CO. — THE PAYOFF v1 · MOCK DATA
   Casey Alvarez (fictional) · 14 months into a snowball, $250/mo extra.
   EVERY figure below is computed by the 03 iteration (tools-era sim):
   kills m5/m12 · now $31,741 of $40,950 · snowball 47 mo / $7,487 vs
   avalanche 46 mo / $6,515 · first win m12 vs m27 · +$50 = 2 mo sooner,
   +$100 = 6 mo · saved $26,772 thru the 10-yr window, minimums never
   finish ($15,559 still owed at horizon).
   ===================================================================== */

window.CC_DATA = {
  owner: { name: 'Casey Alvarez', month: 'June 2026' },

  kpis: { totalNow: 31741, startTotal: 40950, paidOff: 9209,
    freeDate: 'May 2030', monthsLeft: 47, planInterest: 7487,
    savedWindow: 26772, stillOweMin: 15559 },

  strategy: 'Snowball — smallest balance first',
  extra: 250,
  whatif: [
    { label: '+$50',  date: 'Mar 2030', delta: 2 },
    { label: '+$100', date: 'Nov 2029', delta: 6 },
  ],

  debts: [
    { name: 'Rooms+ Store Card', type: 'Card',    start: 1150,   apr: 27.99, min: 35,   due: 8,  inPlan: true,  current: 0,      status: 'PAID',    paidLabel: 'Sep 2025' },
    { name: 'Medical bill',      type: 'Medical', start: 3400,   apr: 0,     min: 150,  due: 15, inPlan: true,  current: 0,      status: 'PAID',    paidLabel: 'Apr 2026' },
    { name: 'Visa ····4417',     type: 'Card',    start: 9800,   apr: 24.99, min: 196,  due: 17, inPlan: true,  current: 9930,   status: 'ACTIVE',  underwater: true, order: 2, payoff: 'Jan 2029', interest: 4683 },
    { name: 'Auto loan',         type: 'Auto',    start: 8400,   apr: 6.9,   min: 212,  due: 3,  inPlan: true,  current: 5148,   status: 'ACTIVE',  target: true,     order: 1, payoff: 'Jun 2027', interest: 188 },
    { name: 'Student loan',      type: 'Student', start: 18200,  apr: 5.5,   min: 190,  due: 21, inPlan: true,  current: 16663,  status: 'ACTIVE',  order: 3, payoff: 'May 2030', interest: 2616, override: true },
    { name: 'Mortgage',          type: 'Mortgage', start: 148000, apr: 6.1,  min: 1055, due: 1,  inPlan: false, current: 142840, status: 'TRACKED' },
  ],

  compare: {
    snowball: { label: 'Snowball', sub: 'smallest balance first', date: 'May 2030', months: 47, interest: 7487,
      firstKill: 'Auto loan · Jun 2027',
      order: [
        { name: 'Auto loan',      payoff: 'Jun 2027', interest: 188 },
        { name: 'Visa ····4417',  payoff: 'Jan 2029', interest: 4683 },
        { name: 'Student loan',   payoff: 'May 2030', interest: 2616 },
      ],
      tot: [31741, 31206, 30668, 30127, 29583, 29037, 28488, 27936, 27381, 26823, 26262, 25698, 25340, 24772, 24194, 23605, 23007, 22398, 21778, 21148, 20506, 19853, 19189, 18512, 17824, 17123, 16410, 15684, 14944, 14192, 13426, 12887, 12098, 11306, 10510, 9710, 8906, 8099, 7288, 6474, 5655, 4833, 4007, 3178, 2344, 1507, 666, 0] },
    avalanche: { label: 'Avalanche', sub: 'highest APR first', date: 'Apr 2030', months: 46, interest: 6515,
      firstKill: 'Auto loan · Sep 2028',
      order: [
        { name: 'Visa ····4417',  payoff: 'Dec 2028', interest: 3536 },
        { name: 'Auto loan',      payoff: 'Sep 2028', interest: 413 },
        { name: 'Student loan',   payoff: 'Apr 2030', interest: 2566 },
      ],
      tot: [31741, 31206, 30664, 30116, 29560, 28998, 28429, 27853, 27269, 26678, 26080, 25474, 24860, 24238, 23608, 22970, 22324, 21669, 21006, 20334, 19652, 18962, 18262, 17553, 16835, 16106, 15368, 14783, 14025, 13253, 13018, 12229, 11437, 10642, 9843, 9040, 8233, 7423, 6609, 5791, 4970, 4144, 3315, 2483, 1646, 806, 0] },
    verdict: 'Avalanche saves $972 over snowball · snowball\u2019s first win lands 15 months earlier.',
  },

  killList: [
    { name: 'Rooms+ Store Card', amount: 1150, when: 'Sep 2025' },
    { name: 'Medical bill',      amount: 3400, when: 'Apr 2026' },
  ],
  milestones: { crossed: [['$40,000', 'Jun 2025'], ['$35,000', 'Dec 2025']], next: ['$30,000', '~Oct 2026'] },
  nextPayments: [
    { name: 'Auto loan',     due: 'the 3rd',  min: 212,  covered: true,  note: 'target — gets the pool: $647' },
    { name: 'Visa ····4417', due: 'the 17th', min: 196,  covered: true,  note: 'minimum only while Auto dies' },
    { name: 'Student loan',  due: 'the 21st', min: 190,  covered: false, note: 'due in 8 days' },
    { name: 'Mortgage',      due: 'the 1st',  min: 1055, covered: true,  note: 'tracked · not in plan' },
  ],
  planTot: [31741, 31206, 30668, 30127, 29583, 29037, 28488, 27936, 27381, 26823, 26262, 25698, 25340, 24772, 24194, 23605, 23007, 22398, 21778, 21148, 20506, 19853, 19189, 18512, 17824, 17123, 16410, 15684, 14944, 14192, 13426, 12887, 12098, 11306, 10510, 9710, 8906, 8099, 7288, 6474, 5655, 4833, 4007, 3178, 2344, 1507, 666, 0],

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


  tabs: [
    { id: 'start',     label: 'Start Here' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'plan',      label: 'The Plan' },
    { id: 'compare',   label: 'Compare' },
    { id: 'debts',     label: 'Debts' },
    { id: 'payments',  label: 'Payments Log' },
    { id: 'progress',  label: 'Progress' },
    { id: 'import',    label: 'Bank Import' },
    { id: 'engine',    label: '_Engine', system: true },
  ],
};
