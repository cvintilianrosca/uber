function doPost(e) {
  var d = JSON.parse(e.postData.contents);
  var sh = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sh.getLastRow() === 0) sh.appendRow(["Data", "Eveniment", "Detaliu", "Dispozitiv"]);
  sh.appendRow([new Date(), d.event, d.detail || "", d.ua || ""]);
  return ContentService.createTextOutput("ok");
}
