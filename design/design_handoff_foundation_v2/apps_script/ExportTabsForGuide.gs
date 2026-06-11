/** =====================================================================
 *  The Foundation v2.1 · Column & Co.
 *  ExportTabsForGuide.gs  —  BUILD-TIME TOOL (not shipped to buyers)
 *
 *  One click → a tightly-cropped, high-fidelity image of every visible
 *  tab, dropped into a dated Drive folder, ready to slot into the
 *  Product Guide. Captures the live sheet WITH your applied theme, so
 *  the figures and palette are always correct.
 *
 *  ───────────────────────────────────────────────────────────────────
 *  HOW TO USE
 *  1. Extensions → Apps Script. Add a new script file, name it
 *     "ExportTabsForGuide", paste this whole file in, Save.
 *  2. From the function dropdown choose  exportTabsForGuide  →  Run.
 *  3. First run asks for permission (this tool needs broader scope than
 *     the shipped product — see the NOTE at the bottom). Approve.
 *  4. The execution log prints a Drive folder link. Open it — one image
 *     per tab, named by tab, cropped to content.
 *
 *  Optional: uncomment the addToMenu_() call inside your onOpen() to get
 *  "💳 → Setup → Export tabs for guide" instead of running from the editor.
 *  ===================================================================== */

/** Tabs to export, in guide order. Anything not listed (or hidden,
 *  like _Engine / _Config / _Schema) is skipped. */
var GUIDE_TABS = [
  'Start Here', 'Trends', 'Dashboard', 'Monthly Budget', 'Health Score',
  'Goals', 'Transactions', 'Bank Import Guide', 'Net Worth',
  'Accounts', 'Categories'
];

/** Per-tab print range. Leave a tab out of this map and it exports the
 *  tab's full used range. Tighten these to crop exactly what the guide
 *  needs (skip giant empty ledgers, etc.). */
var TAB_RANGES = {
  'Transactions':      'A1:G34',   // header + first ~30 rows is plenty
  'Bank Import Guide': 'A1:H40',
  'Categories':        'A1:F40'
};

function exportTabsForGuide() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var ssId = ss.getId();
  var token = ScriptApp.getOAuthToken();

  // dated output folder in My Drive
  var stamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd_HHmm');
  var folder = DriveApp.createFolder('Foundation_Guide_Tabs_' + stamp);

  var made = 0, skipped = [];

  GUIDE_TABS.forEach(function (name, i) {
    var sheet = ss.getSheetByName(name);
    if (!sheet) { skipped.push(name + ' (not found)'); return; }
    if (sheet.isSheetHidden()) { skipped.push(name + ' (hidden)'); return; }

    var gid = sheet.getSheetId();
    var range = TAB_RANGES[name] || null;

    var url = buildExportUrl_(ssId, gid, range);
    var resp = UrlFetchApp.fetch(url, {
      headers: { Authorization: 'Bearer ' + token },
      muteHttpExceptions: true
    });

    if (resp.getResponseCode() !== 200) {
      skipped.push(name + ' (http ' + resp.getResponseCode() + ')');
      return;
    }

    // 01_Dashboard.pdf — numeric prefix keeps Drive in guide order
    var prefix = ('0' + (i + 1)).slice(-2);
    var safe = name.replace(/[^A-Za-z0-9]+/g, '_');
    var blob = resp.getBlob().setName(prefix + '_' + safe + '.pdf');
    folder.createFile(blob);
    made++;
  });

  var msg = 'Exported ' + made + ' tab(s) to:\n' + folder.getUrl();
  if (skipped.length) msg += '\n\nSkipped: ' + skipped.join(', ');
  Logger.log(msg);

  // also surface it in the UI if run with the sheet open
  try { SpreadsheetApp.getUi().alert(msg); } catch (e) {}
  return folder.getUrl();
}

/** Builds the per-sheet export URL. PDF is the format Google exports
 *  reliably and losslessly per-tab; we crop tight, kill gridlines and
 *  page furniture, and fit to width so each tab is one clean page.
 *  (Convert the PDFs to PNG in the design step — see NOTE.) */
function buildExportUrl_(ssId, gid, a1Range) {
  var base = 'https://docs.google.com/spreadsheets/d/' + ssId + '/export';
  var p = [
    'format=pdf',
    'gid=' + gid,
    'size=letter',
    'portrait=false',     // landscape — sheets are wide
    'fitw=true',          // scale to page width
    'scale=4',            // 4 = fit to width (max fidelity for a tab)
    'gridlines=false',
    'printtitle=false',
    'sheetnames=false',
    'pagenum=UNDEFINED',
    'attachment=true',
    'fzr=false',          // don't repeat frozen rows
    'top_margin=0.15', 'bottom_margin=0.15',
    'left_margin=0.15', 'right_margin=0.15'
  ];
  if (a1Range) {
    // export endpoint takes a 0-indexed cell window
    var r = parseA1_(a1Range);
    p.push('r1=' + r.r1, 'c1=' + r.c1, 'r2=' + r.r2, 'c2=' + r.c2);
  }
  return base + '?' + p.join('&');
}

/** "A1:G34" → {r1,c1,r2,c2} 0-indexed, end-exclusive for the export API. */
function parseA1_(a1) {
  var m = a1.toUpperCase().match(/^([A-Z]+)(\d+):([A-Z]+)(\d+)$/);
  if (!m) return { r1: 0, c1: 0, r2: 60, c2: 12 };
  var colToNum = function (s) {
    var n = 0; for (var i = 0; i < s.length; i++) n = n * 26 + (s.charCodeAt(i) - 64); return n;
  };
  return {
    r1: parseInt(m[2], 10) - 1, c1: colToNum(m[1]) - 1,
    r2: parseInt(m[4], 10),     c2: colToNum(m[3])
  };
}

/** OPTIONAL — add an "Export tabs for guide" item under Setup.
 *  Call this from your existing onOpen() / buildMenu_() if you want it
 *  in the menu. It's a build tool, so most people just run it from the
 *  editor and never ship it. */
function addToMenu_() {
  SpreadsheetApp.getUi()
    .createMenu('💳 Column & Co. — Build Tools')
    .addItem('Export tabs for guide', 'exportTabsForGuide')
    .addToUi();
}

/* =======================================================================
 *  NOTE — two honest caveats
 *
 *  1. SCOPE. Fetching the export URL needs broader permission than the
 *     shipped product's "spreadsheets.currentonly" — it also wants Drive
 *     (to write the folder) and external-request (to fetch the export).
 *     That's fine for a build tool YOU run, but do NOT bundle this file
 *     into the buyer download, or their install prompt will ask for more
 *     than the product needs. Keep it in your own copy only.
 *
 *  2. PDF → PNG. Google exports a clean PDF per tab reliably; it does not
 *     expose a native high-DPI PNG-per-tab endpoint. The guide wants PNG
 *     at ≥300 DPI. Easiest path: run this, download the folder of PDFs,
 *     and hand them back to your designer (or this tool) to rasterize to
 *     PNG at 2× and drop into images/. One pass, all 11 tabs.
 * ===================================================================== */
