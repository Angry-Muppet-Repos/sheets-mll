/**
 * Column & Co. — The Foundation v2.1
 * 05 · View tabs: Start Here, Dashboard, Trends, Health Score, Net Worth.
 *
 * _Engine month columns: B..Y = 24 months (Jun24..May26). The current
 * mock month (May 2026) is column Y (index 23, 0-based). Views read the
 * active month via the cc_dashboard_month cell so the month pills re-drive
 * every figure.
 */

var ENG = "'" + '_Engine' + "'";       // qualified sheet ref
var CUR_MONTH_COL = 25;                 // Y — May 2026
var CUR_MONTH_IDX = 23;                 // 0-based

// ── Start Here ────────────────────────────────────────────────────────
function buildStartHere_(sheet) {
  chrome_(sheet, TABS.START, 'L', 'SETUP GUIDE');
  var r = CONTENT_START_ROW;

  setCell_(sheet, 'A' + r, { value: 'Open it. Add your information. Get clear.',
    merge: 'L' + r, font: FONT.DISPLAY, size: 26, bold: true, color: BRAND.FOREST, v: 'bottom' });
  sheet.setRowHeight(r, 40);
  setCell_(sheet, 'A' + (r + 1), {
    value: 'A budget system you own. No subscription, no third party holding your data. Pick a theme, add your accounts, import a CSV — and get clear.',
    merge: 'L' + (r + 1), font: FONT.BODY, size: 13, color: BRAND.BODY, wrap: true, v: 'top' });
  sheet.setRowHeight(r + 1, 36);

  // Choose Your Theme — 16 tiles in an 8x2 grid (each tile = swatch + name)
  r += 3;
  sectionLabel_(sheet, 'A' + r, 'L' + r, 'CHOOSE YOUR THEME · 16 PALETTES · APPLY VIA 💳 COLUMN & CO. ▸ APPLY THEME');
  r += 1;
  var tileTop = r;
  for (var i = 0; i < PALETTES.length; i++) {
    var p = PALETTES[i];
    var rowBlock = Math.floor(i / 8);     // 0 or 1
    var colInRow = i % 8;                  // 0..7
    var topRow = tileTop + rowBlock * 3;
    var col = 1 + colInRow + (colInRow > 0 ? 0 : 0); // one column per tile (A..H)
    // swatch (3 stacked stripe via 1 cell filled primary, with name beneath)
    sheet.getRange(topRow, col).setBackground(p.primary);
    sheet.getRange(topRow + 1, col).setBackground(p.accent);
    setCell_(sheet, sheet.getRange(topRow + 2, col).getA1Notation(),
      { value: p.name, font: FONT.BODY, size: 8, color: BRAND.BODY, h: 'center', wrap: true });
  }
  sheet.setColumnWidths(1, 8, 78);

  // Setup guide — 5 steps
  r = tileTop + 7;
  sectionLabel_(sheet, 'A' + r, 'L' + r, 'SETUP GUIDE · 5 STEPS');
  r += 1;
  var steps = [
    ['1', 'Install the Script', 'Extensions → Apps Script → paste the ColumnCo file. A 💳 Column & Co. menu appears.'],
    ['2', 'Set Up Accounts', 'Add every bank account, card, and savings account. Enter current balances.'],
    ['3', 'Import Transactions', 'Type the account name in C6 of Bank Import. Paste your bank CSV. Run Import.'],
    ['4', 'Set Your Goals', 'Pick a Type, a Category or Account, a Target. Progress tracks automatically.'],
    ['5', 'Explore Your Data', 'Dashboard, Trends, Health Score, and Net Worth update as you import.']
  ];
  for (var s = 0; s < 5; s++) {
    var c0 = 1 + s * 2; // each step spans ~2 cols (A-B, C-D, ...)
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

  // LLM-ready callout — full-bleed Forest panel (paint, don't pre-merge)
  r += 4;
  sheet.getRange(r, 1, 5, 12).setBackground(BRAND.FOREST).setVerticalAlignment('top');
  themable_(sheet.getName(), 'primary', sheet.getRange(r, 1, 5, 12).getA1Notation());
  setCell_(sheet, 'A' + r, { value: 'Ask Claude or ChatGPT to read your sheet.', merge: 'F' + r,
    font: FONT.DISPLAY, size: 18, bold: true, color: BRAND.PARCHMENT, bg: BRAND.FOREST, wrap: true });
  setCell_(sheet, 'A' + (r + 1), {
    value: 'A hidden _Schema tab documents every column for an AI. Copy the prompt, paste it in your assistant, attach your sheet. You get insights in seconds.',
    merge: 'F' + (r + 2), font: FONT.BODY, size: 12, color: BRAND.PARCHMENT, bg: BRAND.FOREST, wrap: true, v: 'top' });
  var code = sheet.getRange(r, 7, 5, 6).merge();
  code.setBackground(BRAND.FOREST_HI).setFontFamily('Roboto Mono').setFontSize(10)
    .setFontColor(BRAND.CREAM).setWrap(true).setVerticalAlignment('middle').setHorizontalAlignment('left')
    .setValue('Find every category where I\'m trending over budget for three or more months in a row. Estimate the annual cost of that drift. List the top three subscriptions I should cancel.');
  themable_(sheet.getName(), 'primary', code.getA1Notation());
  // Tall enough rows that the 18pt headline can wrap and the 10pt mono
  // prompt has room for its 6-7 wrapped lines.
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
  chrome_(sheet, TABS.DASHBOARD, 'L', 'VIEWING MONTH · MAY 2026');
  // Replace the static breadcrumb with a live formula so it tracks N4.
  sheet.getRange('A3').setFormula(
    '="VIEWING MONTH · "&UPPER(TEXT(DATEVALUE(INDEX(cc_engine_months,1,N4+1)&"-01"),"mmm yyyy"))&"  "');
  var r = titleRow_(sheet, 'L', 'Dashboard',
    'Your money at a glance. Updated automatically as transactions come in.');

  // active month index cell (named cc_dashboard_month) at N4 — set in build
  sheet.getRange('N4').setValue(CUR_MONTH_IDX);
  sheet.getRange('N3').setValue('active_month_idx (0-23)').setFontColor(BRAND.CAPTION).setFontSize(8);

  // Month label + 6 pills
  setCell_(sheet, 'A' + r, {
    formula: '=TEXT(DATEVALUE(INDEX(cc_engine_months,1,N4+1)&"-01"),"mmmm yyyy")',
    merge: 'C' + r, font: FONT.DISPLAY, size: 26, bold: true, color: BRAND.FOREST });
  var pillMonths = ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'];
  for (var i = 0; i < 6; i++) {
    var col = 6 + i;
    setCell_(sheet, sheet.getRange(r, col).getA1Notation(), {
      value: pillMonths[i], font: FONT.BODY, size: 11, bold: true, h: 'center', v: 'middle',
      bg: BRAND.FOREST, color: BRAND.PARCHMENT });
    themable_(sheet.getName(), 'primary', sheet.getRange(r, col).getA1Notation());
  }
  // CF: paint inactive pills cream (active pill = the one whose column matches N4-12).
  var pillRange = sheet.getRange(r, 6, 1, 6);
  var inactiveRule = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied('=COLUMN()<>$N$4-12')
    .setBackground(BRAND.CREAM).setFontColor(BRAND.BODY).setBold(true)
    .setRanges([pillRange]).build();
  sheet.setConditionalFormatRules(sheet.getConditionalFormatRules().concat([inactiveRule]));
  r += 2;

  // KPI row — 4 cards (3 cols each)
  var incF = '=INDEX(' + ENG + '!$B$27:$Y$27,1,N4+1)';
  var expF = '=INDEX(' + ENG + '!$B$28:$Y$28,1,N4+1)';
  var netF = '=INDEX(' + ENG + '!$B$29:$Y$29,1,N4+1)';
  var srF  = '=INDEX(' + ENG + '!$B$30:$Y$30,1,N4+1)';
  kpiCard_(sheet, 'A' + r, 3, 'TOTAL INCOME', incF, 'vs last month +0.1%', BRAND.FOREST);
  kpiCard_(sheet, 'D' + r, 3, 'TOTAL EXPENSES', expF, 'vs last month +1.1%', BRAND.GARNET);
  kpiCard_(sheet, 'G' + r, 3, 'NET CASH FLOW', netF, 'vs last month −$65', BRAND.FOREST);
  kpiCard_(sheet, 'J' + r, 3, 'SAVINGS RATE', srF, 'goal: 20%+ — crushing it', BRAND.GOLD);
  sheet.getRange(r + 1, 1).setNumberFormat('$#,##0');
  sheet.getRange(r + 1, 4).setNumberFormat('$#,##0');
  sheet.getRange(r + 1, 7).setNumberFormat('$#,##0');
  sheet.getRange(r + 1, 10).setNumberFormat('0.0%');
  r += 4;

  // Top spending table (left, cols A-H) + Month Snapshot (right, I-L)
  sectionLabel_(sheet, 'A' + r, 'H' + r, 'TOP SPENDING');
  sheet.getRange('A' + r).setFormula(
    '="TOP SPENDING · "&UPPER(TEXT(DATEVALUE(INDEX(cc_engine_months,1,N4+1)&"-01"),"mmm yyyy"))');
  sectionLabel_(sheet, 'I' + r, 'L' + r, 'MONTH SNAPSHOT');
  r += 1;
  sheet.getRange(r, 1, 1, 5).setValues([['Category', 'Spent', 'Budget', '% of Budget', 'Status']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  var tsStart = r + 1;
  for (var t = 0; t < MOCK.top_spending.length; t++) {
    var row = MOCK.top_spending[t]; var rr = tsStart + t;
    sheet.getRange(rr, 1).setValue(row[0]);
    sheet.getRange(rr, 2).setValue(row[1]).setNumberFormat('$#,##0');
    sheet.getRange(rr, 3).setValue(row[2]).setNumberFormat('$#,##0');
    sheet.getRange(rr, 4).setFormula('=B' + rr + '/C' + rr).setNumberFormat('0%');
    sheet.getRange(rr, 5).setFormula('=IF(B' + rr + '<=C' + rr + ',"On Track",IF(B' + rr + '<=C' + rr + '*1.1,"Fair","Over"))');
    // pacing bar in col G via sparkline
    sheet.getRange(rr, 6, 1, 2).merge();
    sheet.getRange(rr, 6).setFormula('=SPARKLINE(B' + rr + ',{"charttype","bar";"max",C' + rr + ';"color1","' + BRAND.FOREST + '"})');
    if (t % 2 === 1) { var z = sheet.getRange(rr, 1, 1, 5).getA1Notation(); sheet.getRange(z).setBackground(PALETTE_BY_ID.light.zebra); themable_(sheet.getName(), 'zebra', z); }
  }
  statusChipCF_(sheet, sheet.getRange(tsStart, 5, MOCK.top_spending.length, 1).getA1Notation());

  // Month snapshot
  var snap = [['Income', MOCK.snapshot.income], ['Expenses', MOCK.snapshot.expenses], ['Net', MOCK.snapshot.net],
    ['Savings Rate', MOCK.snapshot.savings_rate / 100], ['Avg Daily Spend', MOCK.snapshot.avg_daily],
    ['Transactions', MOCK.snapshot.transactions], ['Largest Expense', MOCK.snapshot.largest_expense]];
  for (var sI = 0; sI < snap.length; sI++) {
    var sr = tsStart + sI;
    setCell_(sheet, sheet.getRange(sr, 9).getA1Notation(), { value: snap[sI][0], merge: sheet.getRange(sr, 10).getA1Notation(), font: FONT.BODY, size: 11, color: BRAND.BODY });
    var vcell = sheet.getRange(sr, 11, 1, 2).merge();
    vcell.setValue(snap[sI][1]).setFontFamily(FONT.BODY).setFontWeight('bold').setFontColor(BRAND.FOREST).setHorizontalAlignment('right');
    if (sI === 3) vcell.setNumberFormat('0.0%'); else if (sI !== 5) vcell.setNumberFormat('$#,##0');
  }
  r = tsStart + Math.max(MOCK.top_spending.length, snap.length) + 2;

  // Spending Breakdown (donut, native chart) + AI Insights panel
  sectionLabel_(sheet, 'A' + r, 'F' + r, 'SPENDING BREAKDOWN');
  sectionLabel_(sheet, 'G' + r, 'L' + r, 'AI INSIGHTS');
  r += 1;
  // donut data block (hidden-ish, cols A-B)
  var bdStart = r;
  sheet.getRange(bdStart, 1, MOCK.breakdown.length, 2).setValues(MOCK.breakdown);
  sheet.getRange(bdStart, 2, MOCK.breakdown.length, 1).setNumberFormat('$#,##0');
  buildDonut_(sheet, bdStart, MOCK.breakdown.length);

  // AI insights — Forest-on-cream, 3 callouts
  for (var a = 0; a < MOCK.ai_insights.length; a++) {
    var ar = bdStart + a * 2;
    setCell_(sheet, sheet.getRange(ar, 7).getA1Notation(), { value: MOCK.ai_insights[a][0], merge: sheet.getRange(ar, 12).getA1Notation(),
      font: FONT.BODY, size: 10, bold: true, color: BRAND.GOLD, bg: BRAND.FOREST, h: 'left', v: 'middle' });
    themable_(sheet.getName(), 'primary', sheet.getRange(ar, 7, 1, 6).getA1Notation());
    setCell_(sheet, sheet.getRange(ar + 1, 7).getA1Notation(), { value: MOCK.ai_insights[a][1], merge: sheet.getRange(ar + 1, 12).getA1Notation(),
      font: FONT.BODY, size: 12, color: BRAND.PARCHMENT, bg: BRAND.FOREST, wrap: true, v: 'top' });
    themable_(sheet.getName(), 'primary', sheet.getRange(ar + 1, 7, 1, 6).getA1Notation());
    sheet.setRowHeight(ar + 1, 34);
  }

  r = bdStart + Math.max(MOCK.breakdown.length, 7) + 2;
  footer_(sheet, r, 'L');
  setColWidths_(sheet, [120, 80, 80, 90, 70, 50, 60, 60, 110, 90, 70, 70]);
}

function buildDonut_(sheet, dataStartRow, n) {
  var range = sheet.getRange(dataStartRow, 1, n, 2);
  var chart = sheet.newChart().asPieChart().setOption('pieHole', 0.6)
    .addRange(range).setPosition(dataStartRow, 1, 0, 0)
    .setOption('legend', { position: 'right', textStyle: { fontSize: 11 } })
    .setOption('colors', DONUT_RAMP)
    .setOption('title', '')
    .setOption('width', 460).setOption('height', 260)
    .setNumHeaders(0).build();
  sheet.insertChart(chart);
}

// ── Trends ────────────────────────────────────────────────────────────
function buildTrends_(sheet, mode) {
  chrome_(sheet, TABS.TRENDS, 'L');
  var r = titleRow_(sheet, 'L', 'Trends',
    'Six months in, twenty-four months out. Where your money has gone.');

  // window selector (cc_trends_window at N7) + 3 pills.
  // Pills sit at cols J-L (10-12), to the right of the 3 KPI cards which
  // occupy A-I (3 cards × 3 cols). kpiCard_ renders after this, so anything
  // in cols A-I would get clobbered when the AVG NET card merges G:I.
  sheet.getRange('N7').setValue(6);
  sheet.getRange('N6').setValue('window (6/12/24)').setFontColor(BRAND.CAPTION).setFontSize(8);
  var wins = [6, 12, 24];
  for (var i = 0; i < 3; i++) {
    var active = (wins[i] === 6);
    setCell_(sheet, sheet.getRange(r, 10 + i).getA1Notation(), { value: wins[i] + ' mo',
      font: FONT.BODY, size: 11, bold: true, h: 'center', v: 'middle',
      bg: active ? BRAND.FOREST : BRAND.CREAM, color: active ? BRAND.PARCHMENT : BRAND.BODY });
    if (active) themable_(sheet.getName(), 'primary', sheet.getRange(r, 10 + i).getA1Notation());
  }

  // KPI strip — averages over the window
  var avg = function (row) {
    return '=AVERAGE(INDEX(' + ENG + '!$B$' + row + ':$Y$' + row + ',1,24-N7+1):INDEX(' + ENG + '!$B$' + row + ':$Y$' + row + ',1,24))';
  };
  kpiCard_(sheet, 'A' + r, 3, 'AVG INCOME', avg(27), 'over selected window', BRAND.FOREST);
  kpiCard_(sheet, 'D' + r, 3, 'AVG EXPENSES', avg(28), 'over selected window', BRAND.GARNET);
  kpiCard_(sheet, 'G' + r, 3, 'AVG NET', avg(29), 'over selected window', BRAND.FOREST);
  sheet.getRange(r + 1, 1).setNumberFormat('$#,##0');
  sheet.getRange(r + 1, 4).setNumberFormat('$#,##0');
  sheet.getRange(r + 1, 7).setNumberFormat('$#,##0');
  r += 4;

  // Income vs Expenses combo chart (uses _Engine rows 27-28 last 6 months)
  sectionLabel_(sheet, 'A' + r, 'L' + r, 'INCOME vs EXPENSES · SAVINGS RATE');
  r += 1;
  buildTrendsChart_(sheet, r);
  r += 12;

  // Category sparkline table — 20 fixed + 5 custom slots (custom slots show
  // a blank name + flat sparkline until the buyer types a slot name on Categories).
  sectionLabel_(sheet, 'A' + r, 'L' + r, 'CATEGORY TRENDS · LAST 6 MONTHS');
  r += 1;
  sheet.getRange(r, 1, 1, 4).setValues([['Category', 'Sparkline (6 mo)', 'Last Month', 'Δ vs first']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  var start = r + 1;
  var totalCats = CATEGORIES.length + CUSTOM_CATEGORY_SLOTS;   // 25 rows
  for (var c = 0; c < totalCats; c++) {
    var er = 2 + c;             // engine row for this category
    var rr = start + c;
    if (c < CATEGORIES.length) {
      sheet.getRange(rr, 1).setValue(CATEGORIES[c]);
    } else {
      // custom-slot row — name comes from the engine's col A (which itself
      // pulls from Categories tab), so a slot rename propagates here too.
      sheet.getRange(rr, 1).setFormula('=' + ENG + '!A' + er).setFontStyle('italic');
    }
    sheet.getRange(rr, 2, 1, 1).setFormula(
      '=SPARKLINE(' + ENG + '!T' + er + ':Y' + er + ',{"charttype","line";"color","' + BRAND.FOREST + '";"linewidth",2})');
    sheet.getRange(rr, 3).setFormula('=' + ENG + '!Y' + er).setNumberFormat('$#,##0');
    sheet.getRange(rr, 4).setFormula('=IFERROR(' + ENG + '!Y' + er + '-' + ENG + '!T' + er + ',0)').setNumberFormat('+$#,##0;−$#,##0');
    if (c % 2 === 1) { var z = sheet.getRange(rr, 1, 1, 4).getA1Notation(); sheet.getRange(z).setBackground(PALETTE_BY_ID.light.zebra); themable_(sheet.getName(), 'zebra', z); }
  }
  footer_(sheet, start + totalCats + 2, 'L');
  setColWidths_(sheet, [140, 180, 90, 90, 60, 60, 60, 60, 70, 70, 70, 70]);
}

function buildTrendsChart_(sheet, atRow) {
  // pull last-6 month labels + income/expenses into a small block for the chart
  var labels = MOCK.months_24.slice(18).map(function (m) { return [m[0].replace(' 20', " '")]; });
  var inc = MOCK.months_24.slice(18).map(function (m) { return [m[1]]; });
  var exp = MOCK.months_24.slice(18).map(function (m) { return [m[2]]; });
  // stash in far columns (P,Q,R) for the chart source
  sheet.getRange(atRow, 16, 1, 3).setValues([['Month', 'Income', 'Expenses']]);
  sheet.getRange(atRow + 1, 16, 6, 1).setValues(labels);
  sheet.getRange(atRow + 1, 17, 6, 1).setValues(inc);
  sheet.getRange(atRow + 1, 18, 6, 1).setValues(exp);
  var range = sheet.getRange(atRow, 16, 7, 3);
  var chart = sheet.newChart().asColumnChart()
    .addRange(range).setPosition(atRow, 1, 0, 0)
    .setOption('colors', [BRAND.FOREST, BRAND.CANOPY])
    .setOption('legend', { position: 'top' })
    .setOption('width', 720).setOption('height', 220)
    .build();
  sheet.insertChart(chart);
}

// ── Health Score ──────────────────────────────────────────────────────
function buildHealthScore_(sheet, mode) {
  chrome_(sheet, TABS.HEALTH, 'L');
  var r = titleRow_(sheet, 'L', 'Health Score',
    'A composite 0–100 across five weighted indicators. Where you stand, and what to fix first.');

  var MIDX = 'cc_dashboard_month+1';
  var start = r + 5;  // indicators occupy rows start..start+4 (14..18 with r=9)

  // Hero composite — weighted avg of N{start}:N{start+4} (D holds fractions summing to 1)
  setCell_(sheet, 'B' + r, {
    formula: '=IFERROR(ROUND(SUMPRODUCT(N' + start + ':N' + (start + 4) + ',D' + start + ':D' + (start + 4) + '),0),0)',
    merge: 'C' + (r + 1), font: FONT.DISPLAY, size: 64, bold: true, color: BRAND.FOREST, h: 'center', v: 'middle' });
  // 64pt needs room — bump the merged hero rows so the digits don't clip.
  sheet.setRowHeight(r, 48);
  sheet.setRowHeight(r + 1, 48);
  setCell_(sheet, 'B' + (r + 2), {
    formula: '=IF(B9>=90,"A",IF(B9>=80,"B",IF(B9>=70,"C",IF(B9>=60,"D","F"))))',
    merge: 'C' + (r + 2), font: FONT.DISPLAY, size: 16, italic: true, color: BRAND.GOLD, h: 'center' });
  sheet.setRowHeight(r + 2, 26);

  // box-drawing scale + pip
  var scale = '0 ─── Critical ─── 45 ─── Needs Work ─── 60 ─── Fair ─── 75 ─── Good ─── 90 ─── Excellent ─── 100';
  setCell_(sheet, 'E' + r, { value: scale, merge: 'L' + r, font: 'Roboto Mono', size: 10, color: BRAND.BODY, v: 'middle' });
  setCell_(sheet, 'E' + (r + 1), {
    formula: '=REPT(" ",ROUND(B9/100*64,0))&"▼"',
    merge: 'L' + (r + 1), font: 'Roboto Mono', size: 10, color: BRAND.CANOPY });
  r += 3;

  // 5 indicator rows
  sectionLabel_(sheet, 'A' + r, 'L' + r, 'INDICATORS · 5 WEIGHTED MEASURES');
  r += 1;
  sheet.getRange(r, 1, 1, 6).setValues([['Indicator', 'Value', 'Benchmark', 'Weight', 'Score (0–100)', 'Status']])
    .setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);

  var names   = ['Savings Rate', 'Expense-to-Income', 'Emergency Fund', 'Budget Adherence', 'Debt-to-Income'];
  var benches = ['≥ 20% of income saved', '≤ 80% of income spent', '≥ 3 months of expenses', '≥ 80% categories on budget', '≤ 36% debt payments'];
  var weights = [0.25, 0.20, 0.20, 0.20, 0.15];
  var fmts    = ['0.0%', '0.0%', '0.0" mo"', '@', '0.0%'];

  for (var i = 0; i < 5; i++) {
    var rr = start + i;
    sheet.getRange(rr, 1).setValue(names[i]);
    sheet.getRange(rr, 3).setValue(benches[i]);
    sheet.getRange(rr, 4).setValue(weights[i]).setNumberFormat('0%');
    sheet.getRange(rr, 5).setFormula('=SPARKLINE(N' + rr + ',{"charttype","bar";"max",100;"color1","' + BRAND.FOREST + '"})');
    sheet.getRange(rr, 2).setNumberFormat(fmts[i]);

    var valueF, scoreF, statusF;
    if (i === 0) {
      valueF  = '=IFERROR(INDEX(_Engine!$B$30:$Y$30,1,' + MIDX + '),0)';
      scoreF  = '=MAX(0,MIN(100,B' + rr + '*500))';
      statusF = '=IF(B' + rr + '>=0.2,"On Track",IF(B' + rr + '>=0.1,"Fair","Over"))';
    } else if (i === 1) {
      valueF  = '=IFERROR(INDEX(_Engine!$B$28:$Y$28,1,' + MIDX + ')/INDEX(_Engine!$B$27:$Y$27,1,' + MIDX + '),0)';
      scoreF  = '=MAX(0,MIN(100,(1-B' + rr + ')*250))';
      statusF = '=IF(B' + rr + '<=0.8,"On Track",IF(B' + rr + '<=0.9,"Fair","Over"))';
    } else if (i === 2) {
      valueF  = '=IFERROR((SUMIFS(Accounts!E10:E21,Accounts!B10:B21,"Checking")+SUMIFS(Accounts!E10:E21,Accounts!B10:B21,"Savings"))/INDEX(_Engine!$B$28:$Y$28,1,' + MIDX + '),0)';
      scoreF  = '=MAX(0,MIN(100,B' + rr + '/6*100))';
      statusF = '=IF(B' + rr + '>=3,"On Track",IF(B' + rr + '>=1,"Fair","Over"))';
    } else if (i === 3) {
      // BA helpers in hidden cols O (on count) and P (total count) at this row.
      sheet.getRange(rr, 15).setFormula(
        "=SUMPRODUCT((INDEX(_Engine!$B$2:$Y$26,," + MIDX + ")<='Monthly Budget'!E17:E41)*('Monthly Budget'!B17:B41<>\"\"))");
      sheet.getRange(rr, 16).setFormula(
        "=SUMPRODUCT(('Monthly Budget'!B17:B41<>\"\")*1)");
      valueF  = '=O' + rr + '&" of "&P' + rr;
      scoreF  = '=IFERROR(O' + rr + '/P' + rr + '*100,0)';
      statusF = '=IF(IFERROR(O' + rr + '/P' + rr + ',0)>=0.8,"On Track",IF(IFERROR(O' + rr + '/P' + rr + ',0)>=0.6,"Fair","Over"))';
    } else {
      valueF  = '=IFERROR(INDEX(_Engine!$B$14:$Y$14,1,' + MIDX + ')/INDEX(_Engine!$B$27:$Y$27,1,' + MIDX + '),0)';
      scoreF  = '=MAX(0,MIN(100,(0.36-B' + rr + ')/0.36*100))';
      statusF = '=IF(B' + rr + '<=0.36,"On Track",IF(B' + rr + '<=0.45,"Fair","Over"))';
    }
    sheet.getRange(rr, 2).setFormula(valueF);
    sheet.getRange(rr, 14).setFormula(scoreF);
    sheet.getRange(rr, 6).setFormula(statusF);

    if (i % 2 === 1) { var z = sheet.getRange(rr, 1, 1, 6).getA1Notation(); sheet.getRange(z).setBackground(PALETTE_BY_ID.light.zebra); themable_(sheet.getName(), 'zebra', z); }
  }
  statusChipCF_(sheet, sheet.getRange(start, 6, 5, 1).getA1Notation());
  r = start + 5 + 1;

  // Biggest Opportunity callout — Forest panel + dynamic delta + dynamic text
  sheet.getRange(r, 1, 3, 12).setBackground(BRAND.FOREST).setVerticalAlignment('middle');
  themable_(sheet.getName(), 'primary', sheet.getRange(r, 1, 3, 12).getA1Notation());
  setCell_(sheet, 'A' + r, { value: '⚡ BIGGEST OPPORTUNITY', merge: 'D' + r,
    font: FONT.BODY, size: 10, bold: true, color: BRAND.GOLD, bg: BRAND.FOREST, v: 'middle' });

  // Opportunity helpers in hidden cols Q (category name) and R (positive overage).
  for (var bi = 0; bi < 25; bi++) {
    var br = 17 + bi;
    sheet.getRange(br, 17).setFormula("='Monthly Budget'!B" + br);
    sheet.getRange(br, 18).setFormula(
      "=IFERROR(MAX(0,INDEX(_Engine!$B$2:$Y$26," + (bi + 1) + "," + MIDX + ")-'Monthly Budget'!E" + br + "),0)");
  }

  setCell_(sheet, 'E' + r, {
    formula: '=B9&" → "&ROUND(B9+IF(MAX(R17:R41)>0,6,0),0)',
    merge: 'F' + r, font: FONT.DISPLAY, size: 18, bold: true, color: BRAND.PARCHMENT, bg: BRAND.FOREST, h: 'center', v: 'middle' });
  setCell_(sheet, 'A' + (r + 1), {
    formula: '=IF(MAX(R17:R41)=0,"On budget across the board this month — keep it up.",INDEX(Q17:Q41,MATCH(MAX(R17:R41),R17:R41,0))&" is $"&TEXT(MAX(R17:R41),"#,##0")&" over budget. Trimming to plan lifts composite by ~6 points.")',
    merge: 'L' + (r + 2), font: FONT.BODY, size: 13, color: BRAND.PARCHMENT, bg: BRAND.FOREST, wrap: true, v: 'top' });

  footer_(sheet, r + 4, 'L');
  setColWidths_(sheet, [150, 90, 200, 70, 130, 80, 60, 60, 60, 60, 60, 60]);
  sheet.hideColumns(14, 5);  // N (scores), O+P (BA helpers), Q+R (opportunity helpers)
}

// ── Net Worth ─────────────────────────────────────────────────────────
function buildNetWorth_(sheet, mode) {
  chrome_(sheet, TABS.NETWORTH, 'L');
  var r = CONTENT_START_ROW;
  var nw = MOCK.net_worth;

  // Hero Forest panel (rows r..r+5) — paint, don't pre-merge
  sheet.getRange(r, 1, 6, 12).setBackground(BRAND.FOREST);
  themable_(sheet.getName(), 'primary', sheet.getRange(r, 1, 6, 12).getA1Notation());
  setCell_(sheet, 'A' + r, { value: 'TOTAL NET WORTH', merge: 'F' + r, font: FONT.BODY, size: 10, bold: true, color: BRAND.GOLD, bg: BRAND.FOREST });
  setCell_(sheet, 'A' + (r + 1), { value: nw.total, merge: 'F' + (r + 2), font: FONT.DISPLAY, size: 48, bold: true, color: BRAND.PARCHMENT, bg: BRAND.FOREST, v: 'middle' });
  sheet.getRange(r + 1, 1).setNumberFormat('$#,##0');
  // 48pt characters need ~60px of vertical room — default row height clips the top of the $.
  sheet.setRowHeight(r + 1, 36);
  sheet.setRowHeight(r + 2, 36);
  setCell_(sheet, 'A' + (r + 3), { value: '+' + money_(nw.change_mo) + ' this month', merge: 'F' + (r + 3), font: FONT.BODY, size: 12, color: BRAND.GOLD, bg: BRAND.FOREST });
  // sparkline of 6-month history (right)
  sheet.getRange(r + 1, 8, 6, 1).setValues(nw.history.map(function (v) { return [v]; }));
  sheet.hideColumns(8);
  setCell_(sheet, 'I' + r, { value: 'NET WORTH · 6 MO', merge: 'L' + r, font: FONT.BODY, size: 10, bold: true, color: BRAND.GOLD, bg: BRAND.FOREST });
  var spark = sheet.getRange(r + 1, 9, 1, 4).merge();
  spark.setFormula(sparkLine_('H' + (r + 1) + ':H' + (r + 6), BRAND.GOLD)).setBackground(BRAND.FOREST);
  themable_(sheet.getName(), 'primary', spark.getA1Notation());
  // asset / liability cards — stacked so neither number wraps mid-string
  setCell_(sheet, 'I' + (r + 3), {
    value: 'Assets ' + money_(nw.assets) + '\nLiabilities ' + money_(nw.liabilities),
    merge: 'L' + (r + 4), font: FONT.DISPLAY, size: 14, color: BRAND.PARCHMENT, bg: BRAND.FOREST, wrap: true, v: 'middle' });
  r += 7;

  // Budget accounts (left) + investments (right)
  sectionLabel_(sheet, 'A' + r, 'F' + r, 'BUDGET ACCOUNTS · AUTO FROM ACCOUNTS TAB');
  sectionLabel_(sheet, 'G' + r, 'L' + r, 'INVESTMENTS · MANUAL ENTRY');
  r += 1;
  sheet.getRange(r, 1, 1, 4).setValues([['Account', 'Type', 'Owner', 'Balance']]).setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  sheet.getRange(r, 7, 1, 3).setValues([['Account', 'Type', 'Value']]).setFontWeight('bold').setFontFamily(FONT.BODY).setFontSize(10).setFontColor(BRAND.BODY);
  var ba = nw.budget_accounts, inv = nw.investments;
  var ds = r + 1;
  // pull budget accounts from Accounts tab (auto)
  for (var i = 0; i < ba.length; i++) {
    var rr = ds + i; var ar = 10 + i; // Accounts data starts row 10
    sheet.getRange(rr, 1).setFormula("='" + TABS.ACCOUNTS + "'!A" + ar);
    sheet.getRange(rr, 2).setFormula("='" + TABS.ACCOUNTS + "'!B" + ar);
    sheet.getRange(rr, 3).setFormula("='" + TABS.ACCOUNTS + "'!C" + ar);
    sheet.getRange(rr, 4).setFormula("='" + TABS.ACCOUNTS + "'!E" + ar).setNumberFormat('$#,##0');
  }
  for (var j = 0; j < inv.length; j++) {
    var jr = ds + j;
    sheet.getRange(jr, 7).setValue(inv[j][0]);
    sheet.getRange(jr, 8).setValue(inv[j][1]);
    sheet.getRange(jr, 9).setValue(inv[j][2]).setNumberFormat('$#,##0').setBackground(BRAND.YELLOW);
  }
  // net-worth total cell named range cc_networth_total at D6 area — store at far cell
  footer_(sheet, ds + Math.max(ba.length, inv.length) + 2, 'L');
  setColWidths_(sheet, [160, 90, 80, 110, 24, 24, 160, 90, 110, 60, 60, 60]);
}

function repeatStr_(s, n) { var o = ''; for (var i = 0; i < n; i++) o += s; return o; }
