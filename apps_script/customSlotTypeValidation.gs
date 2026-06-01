/**
 * Column & Co. — The Foundation
 * Custom-slot Type validation
 *
 * Adds an editable Type dropdown (Expense / Income / Transfer) to the
 * 5 custom-slot rows on the Categories tab (B22:B26).
 *
 * The 20 fixed categories above (B2:B21) stay locked at "Expense" per
 * spec. The 5 slots below them are where the buyer adds their own
 * categories — they need the dropdown so the Type column is editable
 * for any new entry.
 *
 * SHIP PATH
 *   The buyer should never run setup. This helper is called once
 *   during workbook build so every shipped copy (MOCK and BLANK) is
 *   already configured.
 *
 * INTEGRATION (one-time, in ColumnCo_Foundation_v2.gs)
 *   Paste this entire file at the bottom of the .gs, then in
 *   buildMockWorkbook() AND buildBlankWorkbook(), find the section
 *   that builds the Categories tab. After the existing code that
 *   writes the 20 category names / types / targets, add one line:
 *
 *       _applyCustomSlotTypeValidation_();
 *
 *   Save. Re-run "Setup → Build workbook (mock data)" and
 *   "Setup → Build workbook (blank)" to regenerate the two shipped
 *   templates. B22:B26 will now have an editable Type dropdown.
 */
function _applyCustomSlotTypeValidation_() {
  var sheet = SpreadsheetApp.getActive().getSheetByName('Categories');
  if (!sheet) throw new Error('Missing sheet: Categories');
  var rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Expense', 'Income', 'Transfer'], true)
    .setAllowInvalid(false)
    .setHelpText('Expense, Income, or Transfer')
    .build();
  sheet.getRange('B22:B26').setDataValidation(rule);
}
