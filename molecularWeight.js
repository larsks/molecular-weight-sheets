const re_component = /(\((?<group>.*)\)|(?<element>[A-Z][a-z]?))(?<count>\d*)/g;

/**
 * Return the atomic weight (in g/mol) of an element.
 *
 * @param {string} element An atomic symbol
 * @return element weight
 * @customfunction
 */
function findElementWeight(element) {
  console.log("find weight for element " + element);

  for(var i = 0; i<elements.length;i++){
    if(elements[i]["Symbol"] == element){
      return elements[i]["Atomic Weight"];
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
      weight = findElementWeight(comp.value.groups.element);
    }
    total_weight += weight * count;
    console.log("name " + name + " weight " + weight + " count " + count + " scaled " + (weight * count) + " -> total " + total_weight);
  }

  console.log("weight for " + molecule + " is " + total_weight);
  return total_weight;
}

