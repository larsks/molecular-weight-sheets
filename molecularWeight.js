const re_component = /(\((?<group1>.*)\)|\[(?<group2>.*)\]|(?<element>[A-Z][a-z]?))(?<count>\d*)/g;

// This is a workaround to support running tests with node.js
if (typeof elements == 'undefined') {
  elements_mod = require('./elements.js');
  elements = elements_mod.elements;
}

/**
 * Return the atomic weight (in g/mol) of an element.
 *
 * @param {string} element An atomic symbol
 * @return element weight
 * @customfunction
 */
function findElementWeight(element) {
  //console.log("find weight for element " + element);

  for(i in elements) {
    if(elements[i]["Symbol"] == element){
      var weight = elements[i]["Atomic Weight"];
      //console.log("weight for element " + element + " is " + weight);
      return weight;
    }
  }

  throw new Error( "Unknown element" );
}

/**
 * Return the molecular weight of the given molecule.
 *
 * @param {string} molecule A molecular formula, like "H2SO4"
 * @return molecular weight of the given formula
 * @customfunction
 */
function molecularWeight(molecule) {
  //console.log("find weight for molecule " + molecule);

  var total_weight = 0;
  var found = molecule.matchAll(re_component);

  for (comp of found) {
    var name;
    var weight;
    var count;

    count = comp.groups.count ? comp.groups.count : 1;
    if (comp.groups.group1) {
      name = comp.groups.group1;
      weight = molecularWeight(comp.groups.group1);
    } else if (comp.groups.group2) {
      name = comp.groups.group2;
      weight = molecularWeight(comp.groups.group2);
    } else {
      name = comp.groups.element;
      weight = findElementWeight(comp.groups.element);
    }
    total_weight += weight * count;
    //console.log("name " + name + " weight " + weight + " count " + count + " scaled " + (weight * count) + " -> total " + total_weight);
  }

  //console.log("weight for " + molecule + " is " + total_weight);
  return total_weight;
}

// This is a workaround to support running tests with node.js
if (typeof module !== 'undefined') {
  module.exports = {molecularWeight};
}
