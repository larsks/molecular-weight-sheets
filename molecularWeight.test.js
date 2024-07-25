const mw = require('./molecularWeight.js');

describe('molecularWeight', () => {
  it.each([
    ["H", 1.00],
    ["H2O", 18.01],
    ["Na2[B4O5(OH)4]", 237.25],
    ["Al2(SO4)3", 342.15],
    ["C2H3O2NH4", 77.08],
    ["I", 126.90],
  ])('correctly calculates weight of %p as %p', (molecule, weight) => {
      expect(mw.molecularWeight(molecule)).toBeCloseTo(weight, 1);
    });
});
