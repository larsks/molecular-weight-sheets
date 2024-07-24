const re_component = /(\((?<group>.*)\)|(?<element>[A-Z][a-z]?))(?<count>\d*)/g;
var elements;

function findElement(element) {
  console.log("find weight for element " + element);

  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var ptoe = sheet.getSheetByName("PeriodicTable");

  if (elements === undefined)
    elements = ptoe.getRange(1, 1, ptoe.getLastRow(), ptoe.getLastColumn()).getValues();

  for(var i = 0; i<elements.length;i++){
    if(elements[i][2] == element){
      return elements[i][3];
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
  var total_weight = 0;
  var found = molecule.matchAll(re_component);

  console.log("find weight for molecule " + molecule);

  for (let comp = found.next(); !comp.done; comp = found.next()) {
    var name;
    var weight;
    var count;

    //console.log(comp);
    count = comp.value.groups.count ? comp.value.groups.count : 1;
    if (comp.value.groups.group) {
      name = comp.value.groups.group;
      weight = molecularWeight(comp.value.groups.group);
    } else {
      name = comp.value.groups.element;
      weight = findElement(comp.value.groups.element);
    }
    total_weight += weight * count;
    console.log("name " + name + " weight " + weight + " count " + count + " scaled " + (weight * count) + " -> total " + total_weight);
  }

  console.log("weight for " + molecule + " is " + total_weight);
  return total_weight;
}

