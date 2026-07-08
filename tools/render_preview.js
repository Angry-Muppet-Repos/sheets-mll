/* Render-preview pipeline for ColumnCo_Payoff_v1.gs
   Replays buildWorkbook() against the shared stub (tools/lib/gas_stub.js)
   with STYLE RECORDING on, then emits one HTML file per view tab that
   reproduces the exact pixel geometry — real column widths / row heights,
   merges as colspan/rowspan, backgrounds, fonts, alignment — and screenshots
   each via the container's headless Chromium. Also screenshots the approved
   mockup (design/ui_kits/the_payoff/full_mockup.html) per tab and emits an
   index.html of side-by-sides.

   WHY: Sheets can't be executed here; this closes the visual loop so layout
   is iterated against PNGs instead of burning live rebuild rounds.

   FIDELITY BOUNDARY (deliberate): faithful for geometry, color, merges,
   pixel sizes, type hierarchy, and density — the things live QA failed on.
   NOT faithful for: exact font rasterization/wrap breaks (approximate),
   formula values (a curated resolver computes the ~dozens of headline cells
   from the SAME JS math twin the verify harness asserts; unknown formulas
   render as a gray ƒ), SPARKLINE/charts (gray placeholder), conditional
   formatting (not applied). Text is rendered with overflow:hidden +
   nowrap — CONSERVATIVE vs Sheets (which overflows into empty neighbors),
   so a clip here flags a tight fit worth checking, not a guaranteed bug.

   Usage: node tools/render_preview.js [outDir] [--modes=mock,blank] [--no-shots]
   Default outDir: $PREVIEW_OUT or /tmp/payoff_previews                     */
'use strict';
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const makeStubEnv = require('./lib/gas_stub.js');

const REPO = path.join(__dirname, '..');
const CHROMIUM = '/opt/pw-browsers/chromium';

const args = process.argv.slice(2);
const argOf = p => { const a = args.find(x => x.startsWith(p)); return a ? a.slice(p.length) : null; };
// --src lets any product render (generic ƒ resolver, no display map);
// default stays the Payoff with its math-twin resolver + mockup shots.
const SRC_PATH = argOf('--src=') || 'apps_script/ColumnCo_Payoff_v1.gs';
const IS_PAYOFF = SRC_PATH.indexOf('Payoff') !== -1;
const SRC = fs.readFileSync(path.join(REPO, SRC_PATH), 'utf8');
const MOCKUP = path.join(REPO, 'design/ui_kits/the_payoff/full_mockup.html');

const OUT = args.find(a => !a.startsWith('--')) || process.env.PREVIEW_OUT || '/tmp/payoff_previews';
const MODES = (argOf('--modes=') || 'mock').split(',');
const SHOTS = !args.includes('--no-shots');

const VIEW_TABS = argOf('--tabs=') ? argOf('--tabs=').split(';')
  : ['Start Here', 'Dashboard', 'The Plan', 'Compare', 'Debts', 'Payments Log', 'Progress', 'The Hall', 'Bank Import'];
const ROW_CAPS = { 'Payments Log': 40, 'Debts': 45 };
const MOCKUP_TAB_IDS = { 'Start Here': 'start', 'Dashboard': 'dashboard', 'The Plan': 'plan', 'Compare': 'compare', 'Debts': 'debts', 'Payments Log': 'payments', 'Progress': 'progress', 'The Hall': 'hall', 'Bank Import': 'import' };

// ───────────────────────── build under the recorder ─────────────────────
const env = makeStubEnv({ recordStyles: true });
const EXPORTS = ['buildWorkbook', 'TABS', 'MOCK', 'DEBT', 'ENG', 'STRATEGY_DEFAULT', 'SCENARIO_EXTRAS',
  'PAYOFF_HORIZON_MONTHS', 'mockInPlanDebts_', 'rankDebts_', 'simulateSchedule_', 'simulateBaseline_',
  'generateMockDebts_', 'generateMockContributions_'];
const factory = new Function('SpreadsheetApp', 'PropertiesService', 'Utilities', 'Logger', 'HtmlService', 'DriveApp',
  SRC + '\n;return {' + EXPORTS.map(n => n + ': (typeof ' + n + '!=="undefined")?' + n + ':undefined').join(',') + '};');
const api = factory(env.SpreadsheetApp, env.PropertiesService, env.Utilities, env.Logger, env.HtmlService, env.DriveApp);

// ───────────────────── display-value context (mock) ─────────────────────
// Every figure comes from the same JS twin the verify math layer asserts,
// so the preview can't drift from the locked truths.
function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
function monthLabel(offset) {
  const now = new Date(), d = new Date(now.getFullYear(), now.getMonth() + offset, 1);
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}
function buildContext() {
  const inPlan = api.mockInPlanDebts_();
  const EXTRA = api.MOCK.extra;
  const snow = api.simulateSchedule_(inPlan, api.rankDebts_(inPlan, 'snowball'), EXTRA);
  const aval = api.simulateSchedule_(inPlan, api.rankDebts_(inPlan, 'avalanche'), EXTRA);
  const p50 = api.simulateSchedule_(inPlan, api.rankDebts_(inPlan, 'snowball'), EXTRA + api.SCENARIO_EXTRAS[0]);
  const p100 = api.simulateSchedule_(inPlan, api.rankDebts_(inPlan, 'snowball'), EXTRA + api.SCENARIO_EXTRAS[1]);
  const base = api.simulateBaseline_(inPlan);
  const debts = api.generateMockDebts_();
  const contribs = api.generateMockContributions_();
  const saved = contribs.reduce((a, c) => a + c[1], 0);
  const inPlanByName = {}; inPlan.forEach((d, i) => inPlanByName[d.name] = i);
  const consumer = debts.filter(d => d.inPlan === 'Yes');
  const totNow = api.MOCK.debts.filter(d => d[6]).reduce((a, d) => a + d[8], 0);
  const totStart = consumer.reduce((a, d) => a + d.start, 0);
  const rankMap = api.rankDebts_(inPlan, 'snowball');
  const firstName = inPlan[Object.keys(rankMap).find(i => rankMap[i] === 1)].name;
  return {
    months: snow.months, freeDate: monthLabel(snow.months),
    planInt: snow.interestTotal, saved: base.interestTotal - snow.interestTotal,
    stillOwe: base.remainAtHorizon, sooner50: snow.months - p50.months, sooner100: snow.months - p100.months,
    avalMonths: aval.months, avalInt: aval.interestTotal,
    snowKill: snow.firstKill, avalKill: aval.firstKill,
    totNow, totStart, paid: totStart - totNow,
    debts, inPlan, inPlanByName, snow, extra: EXTRA, savedStone: saved, firstName,
    rankOfSlot: i => { // registry slot (0-based) → active rank or ''
      const name = api.MOCK.debts[i] && api.MOCK.debts[i][0];
      const j = inPlanByName[name];
      return j == null ? '·' : rankMap[j];
    },
    debtCell: (colL, row) => {
      const i = row - api.DEBT.FIRST_ROW, d = debts[i];
      if (!d) return '';
      const j = inPlanByName[d.name];
      switch (colL) {
        case 'B': return d.name;
        case 'C': return d.type;
        case 'D': return d.stmt ? money(d.stmt) : money(0);
        case 'E': return (d.apr * 100).toFixed(2) + '%';
        case 'F': return money(d.min);
        case 'G': return String(d.due);
        case 'H': return d.inPlan;
        case 'I': return d.order === '' ? '' : String(d.order);
        case 'J': return 'Jun 13';
        case 'K': return money(api.MOCK.debts[i][8]);
        case 'L': return d.inPlan === 'No' ? 'TRACKED' : (api.MOCK.debts[i][8] <= 0 ? 'PAID ✓' : (d.name.indexOf('Visa') === 0 ? 'UNDERWATER' : 'ACTIVE'));
        case 'M': return d.inPlan === 'No' ? 'tracked' : (api.MOCK.debts[i][8] <= 0 ? 'paid ✓' : (j != null && this.snow ? '' : ''));
        default: return 'ƒ';
      }
    }
  };
}

// resolve a formula string to a display string (mock mode) or null → 'ƒ'
function makeResolver(ctx, mode) {
  const blank = mode === 'blank';
  const M = money;
  return function resolve(f, sheetName) {
    if (/SPARKLINE\s*\(/i.test(f)) return { spark: true };
    if (blank) {
      if (/Your plan:/.test(f)) return 'Your plan appears here the moment you list your first debt on the Debts tab.';
      if (/'_Engine'/.test(f) || /cc_engine_anchor/.test(f)) return '—';
      if (/'Debts'/.test(f)) return '';
      return 'ƒ';
    }
    // — composed sentences (signature substrings) —
    if (f.indexOf('Your plan:') !== -1)
      return 'Your plan:  Snowball (smallest balance first).    Put your ' + M(ctx.extra) + '/mo extra on ' + ctx.firstName +
        ' until it is paid, then roll it to the next.    Debt-free ' + ctx.freeDate + '  (' + ctx.months + ' months from now).';
    if (f.indexOf('Avalanche saves') !== -1)
      return 'Avalanche saves ' + M(ctx.planInt - ctx.avalInt) + ' over the snowball  ·  the snowball’s first win lands ' + (ctx.avalKill.m - ctx.snowKill.m) + ' months earlier.';
    if (f.indexOf('months sooner') !== -1 && f.indexOf('$K$') !== -1) return '+$50/mo  →  ' + ctx.sooner50 + ' months sooner';
    if (f.indexOf('months sooner') !== -1 && f.indexOf('$L$') !== -1) return '+$100/mo  →  ' + ctx.sooner100 + ' months sooner';
    if (f.indexOf('type 0 for today') !== -1) return 'month ' + ctx.months + ' — type 0 for today, or any month to scrub the temple below';
    if (f.indexOf('minimums never finish') !== -1) return 'minimums never finish — still ' + M(ctx.stillOwe) + ' owed at 10 yrs';
    if (f.indexOf('months on this plan') !== -1) return ctx.months + ' months on this plan';
    if (f.indexOf('at the start') !== -1) return ' of ' + M(ctx.totStart) + ' at the start';
    if (f.indexOf('in stone') !== -1) return 'SAVED  ' + M(ctx.savedStone) + '  of  $1,000 in stone';
    if (f.indexOf('first kill') !== -1) {
      const kill = f.indexOf('$F$21') !== -1 || f.indexOf('$G$21') !== -1 ? ctx.snowKill : ctx.avalKill;
      return 'first kill: ' + kill.name + ' · ' + monthLabel(kill.m);
    }
    // — engine scalar refs (row 18 + block summary rows 21/151) —
    const sc = {
      P: ctx.freeDate, B: ctx.months, C: ctx.planInt, H: ctx.saved, G: ctx.stillOwe,
      K: ctx.sooner50, L: ctx.sooner100, M: ctx.totNow, N: ctx.paid, O: ctx.totStart
    };
    const mSc = f.match(/'_Engine'!\$([A-Z]{1,2})\$18/);
    if (mSc && sc[mSc[1]] !== undefined) {
      const v = sc[mSc[1]];
      if (/&" mo"/.test(f)) return v + ' mo';
      if (/TEXT\(/.test(f)) return typeof v === 'number' ? M(v) : String(v);
      return typeof v === 'number' && v > 999 ? M(v) : String(v);
    }
    const mBlock = f.match(/'_Engine'!\$([DE])\$(21|151)/);
    if (mBlock) {
      const snowB = mBlock[2] === '21';
      if (mBlock[1] === 'D') return (snowB ? ctx.months : ctx.avalMonths) + (/&" mo"/.test(f) ? ' mo' : '');
      return M(snowB ? ctx.planInt : ctx.avalInt) + (/interest/.test(f) ? ' interest' : '');
    }
    // — payoff-order rank cells (must precede the Debts branch: they guard
    // on 'Debts'!$B$ first but display the engine rank) —
    if (f.indexOf('INDEX') !== -1 && f.indexOf('$B$14:$Z$14') !== -1) {
      const slot = f.match(/,1,(\d+)\)/);
      if (slot) return String(ctx.rankOfSlot(Number(slot[1]) - 1));
    }
    // — verdict months diff (Compare) —
    if (/\$F\$151/.test(f) && /\$F\$21/.test(f)) return (ctx.avalKill.m - ctx.snowKill.m) + ' months';
    // — Progress stylobate status —
    if (f.indexOf('keep laying it') !== -1)
      return ctx.savedStone >= 1000 ? '✦ The Stylobate is laid — your temple stands on solid stone.'
        : 'The temple stands on the stone you set aside. ' + M(ctx.savedStone) + ' of $1,000 is laid — keep laying it.';
    // — Debts registry refs — use the LAST ref (IF-chains guard on $B$ first)
    const allD = [...f.matchAll(/'Debts'!\$([A-Z])\$(\d+)/g)];
    const mD = allD.length ? allD[allD.length - 1] : null;
    if (mD) {
      const row = Number(mD[2]);
      const i = row - api.DEBT.FIRST_ROW;
      if (i >= 0 && i < ctx.debts.length) {
        const d = ctx.debts[i], K = api.MOCK.debts[i][8];
        const j = ctx.inPlanByName[d.name];
        switch (mD[1]) {
          case 'B': return d.name;
          case 'C': return d.type;
          case 'E': return (d.apr * 100).toFixed(1) + '%';
          case 'F': return M(d.min);
          case 'G': return 'day ' + d.due;
          case 'K': return M(K);
          case 'L': return d.inPlan === 'No' ? 'TRACKED' : (K <= 0 ? 'PAID ✓' : (d.name.indexOf('Visa') === 0 ? 'UNDERWATER' : 'ACTIVE'));
          case 'M': return d.inPlan === 'No' ? 'tracked' : (K <= 0 ? 'paid ✓' : monthLabel(ctx.snow.payoff[j]));
          case 'N': return d.inPlan === 'No' ? '—' : (K <= 0 ? '$0' : M(ctx.snow.perInterest[j]));
        }
      }
      return i >= ctx.debts.length ? '' : 'ƒ';
    }
    if (/=IFERROR\(MIN\(/.test(f)) return String(ctx.months);       // time machine default
    if (/DATE\(YEAR\(TODAY/.test(f)) return '';                      // config anchor
    return 'ƒ';
  };
}

// number-format mini formatter for VALUES (not formulas)
function fmtValue(v, fmt) {
  if (v === '' || v == null) return '';
  if (v instanceof Date) {
    if (/mmm d, yyyy/.test(fmt || '')) return v.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    if (/mmm d/.test(fmt || '')) return v.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    if (/mmm yyyy/.test(fmt || '')) return v.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    return v.toLocaleDateString('en-US');
  }
  if (typeof v === 'number' && fmt) {
    if (fmt.indexOf('%') !== -1) return (v * 100).toFixed(fmt.indexOf('0.00') !== -1 ? 2 : 1) + '%';
    if (fmt.indexOf('$') !== -1) return (v < 0 ? '−' : '') + '$' + Math.abs(fmt.indexOf('.00') !== -1 ? v.toFixed(2) : Math.round(v)).toLocaleString('en-US');
  }
  return String(v);
}

// ───────────────────────── fonts (best effort) ──────────────────────────
function ensureFonts(outDir) {
  const fontDir = path.join(outDir, 'fonts');
  const cssPath = path.join(fontDir, 'fonts.css');
  if (fs.existsSync(cssPath)) return cssPath;
  fs.mkdirSync(fontDir, { recursive: true });
  try {
    const url = 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap';
    let css = execFileSync('curl', ['-sf', '--max-time', '20', '-A', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/120 Safari/537.36', url], { encoding: 'utf8' });
    const urls = [...css.matchAll(/url\((https:[^)]+\.woff2)\)/g)].map(m => m[1]);
    urls.forEach((u, i) => {
      const local = 'f' + i + '.woff2';
      execFileSync('curl', ['-sf', '--max-time', '20', '-o', path.join(fontDir, local), u]);
      css = css.split(u).join(local);
    });
    fs.writeFileSync(cssPath, css);
    return cssPath;
  } catch (e) {
    fs.writeFileSync(cssPath, '/* font download failed — system fallbacks in use */');
    return cssPath;
  }
}

// ───────────────────────── HTML emission ────────────────────────────────
const FONT_STACK = { 'Lora': "'Lora',Georgia,'DejaVu Serif',serif", 'Roboto': "'Roboto',Arial,'DejaVu Sans',sans-serif", 'Roboto Mono': "'Roboto Mono',monospace" };
const BORDER_W = { 1: '1px', 2: '2px', 3: '3px', 4: '1px', 5: '1px', 6: '3px' };
const BORDER_S = { 4: 'dashed', 5: 'dotted' };

function renderSheet(sheet, resolve, fontsCss) {
  // used range
  let maxR = 10, maxC = 8;
  const bump = k => { const [r, c] = k.split(',').map(Number); if (r > maxR) maxR = r; if (c > maxC) maxC = c; };
  Object.keys(sheet.cells).forEach(bump); Object.keys(sheet.styles).forEach(bump); Object.keys(sheet.formulaCells).forEach(bump);
  sheet.merges.forEach(m => { if (m.r + m.nr - 1 > maxR) maxR = m.r + m.nr - 1; if (m.c + m.nc - 1 > maxC) maxC = m.c + m.nc - 1; });
  const cap = ROW_CAPS[sheet.name];
  if (cap && maxR > cap) maxR = cap;
  if (maxR > 160) maxR = 160;
  if (maxC > 70) maxC = 70;

  // border map: cell → {bt,bl,bb,br}
  const borders = {};
  const setB = (r, c, side, css) => {
    const k = r + ',' + c;
    if (!borders[k]) borders[k] = {};
    if (css === null) delete borders[k][side]; else borders[k][side] = css;
  };
  for (const rec of sheet.borderRecs) {
    const a = rec.args;
    const color = (a.length > 6 && a[6]) ? a[6] : '#000';
    const styleNum = (a.length > 7 && a[7]) ? a[7] : 1;
    const css = (BORDER_W[styleNum] || '1px') + ' ' + (BORDER_S[styleNum] || 'solid') + ' ' + color;
    const [top, left, bottom, right, vert, horiz] = a;
    const R2 = rec.r + rec.nr - 1, C2 = rec.c + rec.nc - 1;
    const apply = (flag, fn) => { if (flag === true) fn(css); else if (flag === false) fn(null); };
    apply(top, v => { for (let c = rec.c; c <= C2; c++) setB(rec.r, c, 't', v); });
    apply(bottom, v => { for (let c = rec.c; c <= C2; c++) setB(R2, c, 'b', v); });
    apply(left, v => { for (let r = rec.r; r <= R2; r++) setB(r, rec.c, 'l', v); });
    apply(right, v => { for (let r = rec.r; r <= R2; r++) setB(r, C2, 'r', v); });
    apply(vert, v => { for (let r = rec.r; r <= R2; r++) for (let c = rec.c; c < C2; c++) setB(r, c, 'r', v); });
    apply(horiz, v => { for (let r = rec.r; r < R2; r++) for (let c = rec.c; c <= C2; c++) setB(r, c, 'b', v); });
  }

  // merge lookups
  const mergeTop = {}, covered = new Set();
  for (const m of sheet.merges) {
    if (m.r > maxR || m.c > maxC) continue;
    const nr = Math.min(m.nr, maxR - m.r + 1), nc = Math.min(m.nc, maxC - m.c + 1);
    mergeTop[m.r + ',' + m.c] = { nr, nc };
    for (let r = 0; r < nr; r++) for (let c = 0; c < nc; c++) { if (r || c) covered.add((m.r + r) + ',' + (m.c + c)); }
  }

  const colW = c => sheet.hiddenColSet.has(c) ? 1 : (sheet.colWidthMap[c] != null ? sheet.colWidthMap[c] : 100);
  const rowH = r => sheet.hiddenRowSet.has(r) ? 1 : (sheet.rowHeightMap[r] != null ? sheet.rowHeightMap[r] : 21);
  let totalW = 0; for (let c = 1; c <= maxC; c++) totalW += colW(c);
  let totalH = 0; for (let r = 1; r <= maxR; r++) totalH += rowH(r);

  let html = '<!doctype html><meta charset="utf-8"><link rel="stylesheet" href="fonts/fonts.css">';
  html += '<style>body{margin:12px;background:#fff}table{table-layout:fixed;border-collapse:collapse;width:' + totalW + 'px}' +
    'td{padding:0 2px;overflow:hidden;white-space:nowrap;font:10pt ' + FONT_STACK.Roboto + ';vertical-align:bottom;box-sizing:border-box}' +
    'td.wrap{white-space:normal}td .spark{display:block;height:70%;margin:2px;background:repeating-linear-gradient(90deg,#CBD2CC 0 5px,#E6EAE6 5px 8px);border-radius:2px}</style>';
  html += '<table><colgroup>';
  for (let c = 1; c <= maxC; c++) html += '<col style="width:' + colW(c) + 'px">';
  html += '</colgroup>';
  for (let r = 1; r <= maxR; r++) {
    html += '<tr style="height:' + rowH(r) + 'px">';
    for (let c = 1; c <= maxC; c++) {
      const k = r + ',' + c;
      if (covered.has(k)) continue;
      const mg = mergeTop[k];
      let mergeH = rowH(r);
      if (mg) { mergeH = 0; for (let rr = 0; rr < mg.nr; rr++) mergeH += rowH(r + rr); }
      const st = sheet.styles[k] || {};
      let text = '';
      const formula = sheet.formulaCells[k];
      let sparkCell = false;
      if (formula) {
        const res = resolve(formula, sheet.name);
        if (res && res.spark) sparkCell = true; else text = String(res == null ? 'ƒ' : res);
      } else {
        const v = sheet.cells[k];
        text = fmtValue(v === undefined ? '' : v, sheet.formats[k]);
      }
      let css = '';
      if (st.bg) css += 'background:' + st.bg + ';';
      if (st.font) css += 'font-family:' + (FONT_STACK[st.font] || st.font) + ';';
      if (st.size) css += 'font-size:' + st.size + 'pt;';
      if (st.bold) css += 'font-weight:bold;';
      if (st.italic) css += 'font-style:italic;';
      if (st.color) css += 'color:' + st.color + ';';
      if (st.h) css += 'text-align:' + (st.h === 'middle' ? 'center' : st.h) + ';';
      if (st.v) css += 'vertical-align:' + (st.v === 'middle' ? 'middle' : st.v) + ';';
      const b = borders[k];
      if (b) {
        if (b.t) css += 'border-top:' + b.t + ';';
        if (b.l) css += 'border-left:' + b.l + ';';
        if (b.b) css += 'border-bottom:' + b.b + ';';
        if (b.r) css += 'border-right:' + b.r + ';';
      }
      const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
      const isF = text === 'ƒ';
      html += '<td' + (mg ? ' colspan="' + mg.nc + '" rowspan="' + mg.nr + '"' : '') +
        (st.wrap ? ' class="wrap"' : '') + ' style="' + css + (isF ? 'color:#BBB;' : '') + '">' +
        (sparkCell ? '<span class="spark" style="height:' + Math.max(8, mergeH - 8) + 'px"></span>' : esc(text)) + '</td>';
    }
    html += '</tr>';
  }
  html += '</table>';
  return { html, totalW, totalH };
}

// ───────────────────────── screenshots ──────────────────────────────────
function screenshot(htmlPath, pngPath, w, h) {
  try {
    execFileSync(CHROMIUM, ['--headless=new', '--no-sandbox', '--disable-gpu', '--hide-scrollbars',
      '--force-device-scale-factor=1', '--virtual-time-budget=2500',
      '--window-size=' + Math.min(1600, w + 30) + ',' + Math.min(2600, h + 30),
      '--screenshot=' + pngPath, 'file://' + htmlPath], { stdio: 'pipe', timeout: 60000 });
    return true;
  } catch (e) { console.log('  shot FAILED ' + path.basename(pngPath) + ': ' + String(e.message).slice(0, 120)); return false; }
}

function shotMockups(outDir) {
  const dir = path.join(outDir, 'mockup');
  fs.mkdirSync(dir, { recursive: true });
  const raw = fs.readFileSync(MOCKUP, 'utf8');
  for (const [tab, id] of Object.entries(MOCKUP_TAB_IDS)) {
    const html = raw.replace("let active='dashboard';", "let active='" + id + "';");
    const p = path.join(dir, id + '.html');
    fs.writeFileSync(p, html);
    if (SHOTS) screenshot(p, path.join(dir, id + '.png'), 760, 700);
  }
  console.log('mockup shots → ' + dir);
}

// ───────────────────────── main ─────────────────────────────────────────
fs.mkdirSync(OUT, { recursive: true });
const fontsCss = ensureFonts(OUT);
const ctx = IS_PAYOFF ? buildContext() : null;

for (const mode of MODES) {
  const ss = env.newSS();
  api.buildWorkbook(mode);
  const resolve = IS_PAYOFF ? makeResolver(ctx, mode) : (f => /SPARKLINE\s*\(/i.test(f) ? { spark: true } : 'ƒ');
  const dir = path.join(OUT, mode);
  fs.mkdirSync(dir, { recursive: true });
  try { fs.symlinkSync(path.join(OUT, 'fonts'), path.join(dir, 'fonts')); } catch (e) {}
  for (const tab of VIEW_TABS) {
    const sheet = ss.sheets[tab];
    if (!sheet) continue;
    const { html, totalW, totalH } = renderSheet(sheet, resolve, fontsCss);
    const base = tab.replace(/\s+/g, '_').toLowerCase();
    const htmlPath = path.join(dir, base + '.html');
    fs.writeFileSync(htmlPath, html);
    if (SHOTS) screenshot(htmlPath, path.join(dir, base + '.png'), totalW + 24, totalH + 24);
    console.log('  [' + mode + '] ' + tab + ' → ' + base + '.png (' + totalW + '×' + totalH + ')');
  }
}
if (IS_PAYOFF) shotMockups(OUT);

// index of side-by-sides
const idx = !IS_PAYOFF ? null : ['<!doctype html><meta charset="utf-8"><style>body{font-family:sans-serif;background:#222;color:#eee}h2{margin:24px 0 6px}div.row{display:flex;gap:12px;align-items:flex-start}div.row figure{margin:0}figcaption{font-size:12px;color:#aaa}img{max-width:640px;border:1px solid #444}</style><h1>The Payoff — render previews</h1>'];
for (const tab of (idx ? VIEW_TABS : [])) {
  const base = tab.replace(/\s+/g, '_').toLowerCase();
  idx.push('<h2>' + tab + '</h2><div class="row">');
  idx.push('<figure><figcaption>mockup (target)</figcaption><img src="mockup/' + MOCKUP_TAB_IDS[tab] + '.png"></figure>');
  for (const mode of MODES) idx.push('<figure><figcaption>sheets render · ' + mode + '</figcaption><img src="' + mode + '/' + base + '.png"></figure>');
  idx.push('</div>');
}
if (idx) {
  fs.writeFileSync(path.join(OUT, 'index.html'), idx.join('\n'));
  console.log('index → ' + path.join(OUT, 'index.html'));
}
