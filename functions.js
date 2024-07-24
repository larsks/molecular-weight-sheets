const re_component = /([A-Z][a-z]?)(\d*)/g;

function findElement(element) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var ptoe = sheet.getSheetByName("PeriodicTable");

  var data = ptoe.getRange(1, 1, ptoe.getLastRow(), ptoe.getLastColumn()).getValues();

  for(var i = 0; i<data.length;i++){
    //console.log("check that " + element + " == " + data[i][2]);
    if(data[i][2] == element){
      return data[i][3];
    }
  }

  throw new Error( "Unknown element" );
}

/**
 * Return the molecular weight of the given molecule.
 * @param {string} molecule A molecular formula, like "H2SO4"
 * @returns {float} molecular weight of the given formula
 */
function molecularWeight(molecule) {
  var found = molecule.matchAll(re_component);
  var total_weight = 0;

  for (let comp = found.next(); !comp.done; comp = found.next()) {
    weight = findElement(comp.value[1]);
    count = comp.value[2] ? comp.value[2] : 1;
    console.log("element " + comp.value[1] + " weight " + weight + " count " + count);
    total_weight += weight * count;
  }

  return total_weight;
}

