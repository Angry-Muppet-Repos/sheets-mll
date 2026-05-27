/**
 * Column & Co. — The Foundation v2.1
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

  // Row 1-2 Forest header. Left = nameplate, right = breadcrumb.
  sheet.getRange(1, 1, 2, splitCol - 1).merge()
    .setBackground(BRAND.FOREST).setVerticalAlignment('middle')
    .setHorizontalAlignment('left').setFontColor(BRAND.PARCHMENT)
    .setFontFamily(FONT.DISPLAY).setFontSize(20).setFontWeight('bold')
    .setValue('  ' + CC.BRAND);

  sheet.getRange(1, splitCol, 2, lastCol - splitCol + 1).merge()
    .setBackground(BRAND.FOREST).setVerticalAlignment('middle')
    .setHorizontalAlignment('right').setFontColor(BRAND.PARCHMENT)
    .setFontFamily(FONT.BODY).setFontSize(11)
    .setValue(CC.PRODUCT + ' ' + CC.VERSION + '  ·  ' + tabName + '  ');

  sheet.setRowHeight(1, 30);
  sheet.setRowHeight(2, 30);

  // Row 3 — Canopy sub-band + optional gold tracked sub-label (right).
  sheet.getRange(3, 1, 1, lastCol).merge()
    .setBackground(BRAND.CANOPY).setVerticalAlignment('middle')
    .setHorizontalAlignment('right').setFontColor(BRAND.GOLD)
    .setFontFamily(FONT.BODY).setFontSize(9).setFontWeight('bold')
    .setValue(subLabel ? (subLabel + '  ') : '');
  sheet.setRowHeight(3, 26);

  // Row 4 — Harvest Gold accent rule, exactly 3px.
  sheet.getRange(4, 1, 1, lastCol).merge().setBackground(BRAND.GOLD);
  sheet.setRowHeight(4, 3);

  // Row 5 — spacer.
  sheet.getRange(5, 1, 1, lastCol).setBackground(BRAND.PARCHMENT);
  sheet.setRowHeight(5, 18);
}

// Footer — thin Forest bar with the brand line at the given row.
function footer_(sheet, row, lastColLetter) {
  var lastCol = columnLetterToNumber_(lastColLetter);
  sheet.getRange(row, 1, 1, lastCol).merge()
    .setBackground(BRAND.FOREST).setFontColor(BRAND.PARCHMENT_60)
    .setFontFamily(FONT.BODY).setFontSize(10)
    .setHorizontalAlignment('center').setVerticalAlignment('middle')
    .setValue(CC.FOOTER);
  sheet.setRowHeight(row, 28);
}

// Paint the content region background (themable bg) from row 5 to endRow.
function paintContentBg_(sheet, endRow, lastColLetter) {
  var lastCol = columnLetterToNumber_(lastColLetter);
  var a1 = sheet.getRange(5, 1, endRow - 4, lastCol).getA1Notation();
  sheet.getRange(a1).setBackground(BRAND.PARCHMENT);
  themable_(sheet.getName(), 'bg', a1);
}
