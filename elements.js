// Data extracted from https://www.data-explorer.com/content/data/periodic-table-of-elements-csv.zip
const elements = [
  {
    "Atomic Number": 1,
    "Symbol": "H",
    "Atomic Weight": 1.00794,
    "Period": 1,
    "Group": 1,
    "Density": 0.00008988
  },
  {
    "Atomic Number": 2,
    "Symbol": "He",
    "Atomic Weight": 4.002602,
    "Period": 1,
    "Group": 18,
    "Density": 0.0001785
  },
  {
    "Atomic Number": 3,
    "Symbol": "Li",
    "Atomic Weight": 6.941,
    "Period": 2,
    "Group": 1,
    "Density": 0.534
  },
  {
    "Atomic Number": 4,
    "Symbol": "Be",
    "Atomic Weight": 9.012182,
    "Period": 2,
    "Group": 2,
    "Density": 1.85
  },
  {
    "Atomic Number": 5,
    "Symbol": "B",
    "Atomic Weight": 10.811,
    "Period": 2,
    "Group": 13,
    "Density": 2.34
  },
  {
    "Atomic Number": 6,
    "Symbol": "C",
    "Atomic Weight": 12.0107,
    "Period": 2,
    "Group": 14,
    "Density": 2.267
  },
  {
    "Atomic Number": 7,
    "Symbol": "N",
    "Atomic Weight": 14.0067,
    "Period": 2,
    "Group": 15,
    "Density": 0.0012506
  },
  {
    "Atomic Number": 8,
    "Symbol": "O",
    "Atomic Weight": 15.9994,
    "Period": 2,
    "Group": 16,
    "Density": 0.001429
  },
  {
    "Atomic Number": 9,
    "Symbol": "F",
    "Atomic Weight": 18.9984032,
    "Period": 2,
    "Group": 17,
    "Density": 0.001696
  },
  {
    "Atomic Number": 10,
    "Symbol": "Ne",
    "Atomic Weight": 20.1797,
    "Period": 2,
    "Group": 18,
    "Density": 0.0008999
  },
  {
    "Atomic Number": 11,
    "Symbol": "Na",
    "Atomic Weight": 22.98976928,
    "Period": 3,
    "Group": 1,
    "Density": 0.971
  },
  {
    "Atomic Number": 12,
    "Symbol": "Mg",
    "Atomic Weight": 24.305,
    "Period": 3,
    "Group": 2,
    "Density": 1.738
  },
  {
    "Atomic Number": 13,
    "Symbol": "Al",
    "Atomic Weight": 26.9815386,
    "Period": 3,
    "Group": 13,
    "Density": 2.698
  },
  {
    "Atomic Number": 14,
    "Symbol": "Si",
    "Atomic Weight": 28.0855,
    "Period": 3,
    "Group": 14,
    "Density": 2.3296
  },
  {
    "Atomic Number": 15,
    "Symbol": "P",
    "Atomic Weight": 30.973762,
    "Period": 3,
    "Group": 15,
    "Density": 1.82
  },
  {
    "Atomic Number": 16,
    "Symbol": "S",
    "Atomic Weight": 32.065,
    "Period": 3,
    "Group": 16,
    "Density": 2.067
  },
  {
    "Atomic Number": 17,
    "Symbol": "Cl",
    "Atomic Weight": 35.453,
    "Period": 3,
    "Group": 17,
    "Density": 0.003214
  },
  {
    "Atomic Number": 18,
    "Symbol": "Ar",
    "Atomic Weight": 39.948,
    "Period": 3,
    "Group": 18,
    "Density": 0.0017837
  },
  {
    "Atomic Number": 19,
    "Symbol": "K",
    "Atomic Weight": 39.0983,
    "Period": 4,
    "Group": 1,
    "Density": 0.862
  },
  {
    "Atomic Number": 20,
    "Symbol": "Ca",
    "Atomic Weight": 40.078,
    "Period": 4,
    "Group": 2,
    "Density": 1.54
  },
  {
    "Atomic Number": 21,
    "Symbol": "Sc",
    "Atomic Weight": 44.955912,
    "Period": 4,
    "Group": 3,
    "Density": 2.989
  },
  {
    "Atomic Number": 22,
    "Symbol": "Ti",
    "Atomic Weight": 47.867,
    "Period": 4,
    "Group": 4,
    "Density": 4.54
  },
  {
    "Atomic Number": 23,
    "Symbol": "V",
    "Atomic Weight": 50.9415,
    "Period": 4,
    "Group": 5,
    "Density": 6.11
  },
  {
    "Atomic Number": 24,
    "Symbol": "Cr",
    "Atomic Weight": 51.9961,
    "Period": 4,
    "Group": 6,
    "Density": 7.15
  },
  {
    "Atomic Number": 25,
    "Symbol": "Mn",
    "Atomic Weight": 54.938045,
    "Period": 4,
    "Group": 7,
    "Density": 7.44
  },
  {
    "Atomic Number": 26,
    "Symbol": "Fe",
    "Atomic Weight": 55.845,
    "Period": 4,
    "Group": 8,
    "Density": 7.874
  },
  {
    "Atomic Number": 27,
    "Symbol": "Co",
    "Atomic Weight": 58.933195,
    "Period": 4,
    "Group": 9,
    "Density": 8.86
  },
  {
    "Atomic Number": 28,
    "Symbol": "Ni",
    "Atomic Weight": 58.6934,
    "Period": 4,
    "Group": 10,
    "Density": 8.912
  },
  {
    "Atomic Number": 29,
    "Symbol": "Cu",
    "Atomic Weight": 63.546,
    "Period": 4,
    "Group": 11,
    "Density": 8.96
  },
  {
    "Atomic Number": 30,
    "Symbol": "Zn",
    "Atomic Weight": 65.38,
    "Period": 4,
    "Group": 12,
    "Density": 7.134
  },
  {
    "Atomic Number": 31,
    "Symbol": "Ga",
    "Atomic Weight": 69.723,
    "Period": 4,
    "Group": 13,
    "Density": 5.907
  },
  {
    "Atomic Number": 32,
    "Symbol": "Ge",
    "Atomic Weight": 72.64,
    "Period": 4,
    "Group": 14,
    "Density": 5.323
  },
  {
    "Atomic Number": 33,
    "Symbol": "As",
    "Atomic Weight": 74.9216,
    "Period": 4,
    "Group": 15,
    "Density": 5.776
  },
  {
    "Atomic Number": 34,
    "Symbol": "Se",
    "Atomic Weight": 78.96,
    "Period": 4,
    "Group": 16,
    "Density": 4.809
  },
  {
    "Atomic Number": 35,
    "Symbol": "Br",
    "Atomic Weight": 79.904,
    "Period": 4,
    "Group": 17,
    "Density": 3.122
  },
  {
    "Atomic Number": 36,
    "Symbol": "Kr",
    "Atomic Weight": 83.798,
    "Period": 4,
    "Group": 18,
    "Density": 0.003733
  },
  {
    "Atomic Number": 37,
    "Symbol": "Rb",
    "Atomic Weight": 85.4678,
    "Period": 5,
    "Group": 1,
    "Density": 1.532
  },
  {
    "Atomic Number": 38,
    "Symbol": "Sr",
    "Atomic Weight": 87.62,
    "Period": 5,
    "Group": 2,
    "Density": 2.64
  },
  {
    "Atomic Number": 39,
    "Symbol": "Y",
    "Atomic Weight": 88.90585,
    "Period": 5,
    "Group": 3,
    "Density": 4.469
  },
  {
    "Atomic Number": 40,
    "Symbol": "Zr",
    "Atomic Weight": 91.224,
    "Period": 5,
    "Group": 4,
    "Density": 6.506
  },
  {
    "Atomic Number": 41,
    "Symbol": "Nb",
    "Atomic Weight": 92.90638,
    "Period": 5,
    "Group": 5,
    "Density": 8.57
  },
  {
    "Atomic Number": 42,
    "Symbol": "Mo",
    "Atomic Weight": 95.96,
    "Period": 5,
    "Group": 6,
    "Density": 10.22
  },
  {
    "Atomic Number": 43,
    "Symbol": "Tc",
    "Atomic Weight": 98,
    "Period": 5,
    "Group": 7,
    "Density": 11.5
  },
  {
    "Atomic Number": 44,
    "Symbol": "Ru",
    "Atomic Weight": 101.07,
    "Period": 5,
    "Group": 8,
    "Density": 12.37
  },
  {
    "Atomic Number": 45,
    "Symbol": "Rh",
    "Atomic Weight": 102.9055,
    "Period": 5,
    "Group": 9,
    "Density": 12.41
  },
  {
    "Atomic Number": 46,
    "Symbol": "Pd",
    "Atomic Weight": 106.42,
    "Period": 5,
    "Group": 10,
    "Density": 12.02
  },
  {
    "Atomic Number": 47,
    "Symbol": "Ag",
    "Atomic Weight": 107.8682,
    "Period": 5,
    "Group": 11,
    "Density": 10.501
  },
  {
    "Atomic Number": 48,
    "Symbol": "Cd",
    "Atomic Weight": 112.411,
    "Period": 5,
    "Group": 12,
    "Density": 8.69
  },
  {
    "Atomic Number": 49,
    "Symbol": "In",
    "Atomic Weight": 114.818,
    "Period": 5,
    "Group": 13,
    "Density": 7.31
  },
  {
    "Atomic Number": 50,
    "Symbol": "Sn",
    "Atomic Weight": 118.71,
    "Period": 5,
    "Group": 14,
    "Density": 7.287
  },
  {
    "Atomic Number": 51,
    "Symbol": "Sb",
    "Atomic Weight": 121.76,
    "Period": 5,
    "Group": 15,
    "Density": 6.685
  },
  {
    "Atomic Number": 52,
    "Symbol": "Te",
    "Atomic Weight": 127.6,
    "Period": 5,
    "Group": 16,
    "Density": 6.232
  },
  {
    "Atomic Number": 53,
    "Symbol": "I",
    "Atomic Weight": 126.90447,
    "Period": 5,
    "Group": 17,
    "Density": 4.93
  },
  {
    "Atomic Number": 54,
    "Symbol": "Xe",
    "Atomic Weight": 131.293,
    "Period": 5,
    "Group": 18,
    "Density": 0.005887
  },
  {
    "Atomic Number": 55,
    "Symbol": "Cs",
    "Atomic Weight": 132.9054519,
    "Period": 6,
    "Group": 1,
    "Density": 1.873
  },
  {
    "Atomic Number": 56,
    "Symbol": "Ba",
    "Atomic Weight": 137.327,
    "Period": 6,
    "Group": 2,
    "Density": 3.594
  },
  {
    "Atomic Number": 57,
    "Symbol": "La",
    "Atomic Weight": 138.90547,
    "Period": 6,
    "Group": 3,
    "Density": 6.145
  },
  {
    "Atomic Number": 58,
    "Symbol": "Ce",
    "Atomic Weight": 140.116,
    "Period": 6,
    "Group": 19,
    "Density": 6.77
  },
  {
    "Atomic Number": 59,
    "Symbol": "Pr",
    "Atomic Weight": 140.90765,
    "Period": 6,
    "Group": 20,
    "Density": 6.773
  },
  {
    "Atomic Number": 60,
    "Symbol": "Nd",
    "Atomic Weight": 144.242,
    "Period": 6,
    "Group": 21,
    "Density": 7.007
  },
  {
    "Atomic Number": 61,
    "Symbol": "Pm",
    "Atomic Weight": 145,
    "Period": 6,
    "Group": 22,
    "Density": 7.26
  },
  {
    "Atomic Number": 62,
    "Symbol": "Sm",
    "Atomic Weight": 150.36,
    "Period": 6,
    "Group": 23,
    "Density": 7.52
  },
  {
    "Atomic Number": 63,
    "Symbol": "Eu",
    "Atomic Weight": 151.964,
    "Period": 6,
    "Group": 24,
    "Density": 5.243
  },
  {
    "Atomic Number": 64,
    "Symbol": "Gd",
    "Atomic Weight": 157.25,
    "Period": 6,
    "Group": 25,
    "Density": 7.895
  },
  {
    "Atomic Number": 65,
    "Symbol": "Tb",
    "Atomic Weight": 158.92535,
    "Period": 6,
    "Group": 26,
    "Density": 8.229
  },
  {
    "Atomic Number": 66,
    "Symbol": "Dy",
    "Atomic Weight": 162.5,
    "Period": 6,
    "Group": 27,
    "Density": 8.55
  },
  {
    "Atomic Number": 67,
    "Symbol": "Ho",
    "Atomic Weight": 164.93032,
    "Period": 6,
    "Group": 28,
    "Density": 8.795
  },
  {
    "Atomic Number": 68,
    "Symbol": "Er",
    "Atomic Weight": 167.259,
    "Period": 6,
    "Group": 29,
    "Density": 9.066
  },
  {
    "Atomic Number": 69,
    "Symbol": "Tm",
    "Atomic Weight": 168.93421,
    "Period": 6,
    "Group": 30,
    "Density": 9.321
  },
  {
    "Atomic Number": 70,
    "Symbol": "Yb",
    "Atomic Weight": 173.054,
    "Period": 6,
    "Group": 31,
    "Density": 6.965
  },
  {
    "Atomic Number": 71,
    "Symbol": "Lu",
    "Atomic Weight": 174.9668,
    "Period": 6,
    "Group": 32,
    "Density": 9.84
  },
  {
    "Atomic Number": 72,
    "Symbol": "Hf",
    "Atomic Weight": 178.49,
    "Period": 6,
    "Group": 4,
    "Density": 13.31
  },
  {
    "Atomic Number": 73,
    "Symbol": "Ta",
    "Atomic Weight": 180.94788,
    "Period": 6,
    "Group": 5,
    "Density": 16.654
  },
  {
    "Atomic Number": 74,
    "Symbol": "W",
    "Atomic Weight": 183.84,
    "Period": 6,
    "Group": 6,
    "Density": 19.25
  },
  {
    "Atomic Number": 75,
    "Symbol": "Re",
    "Atomic Weight": 186.207,
    "Period": 6,
    "Group": 7,
    "Density": 21.02
  },
  {
    "Atomic Number": 76,
    "Symbol": "Os",
    "Atomic Weight": 190.23,
    "Period": 6,
    "Group": 8,
    "Density": 22.61
  },
  {
    "Atomic Number": 77,
    "Symbol": "Ir",
    "Atomic Weight": 192.217,
    "Period": 6,
    "Group": 9,
    "Density": 22.56
  },
  {
    "Atomic Number": 78,
    "Symbol": "Pt",
    "Atomic Weight": 195.084,
    "Period": 6,
    "Group": 10,
    "Density": 21.46
  },
  {
    "Atomic Number": 79,
    "Symbol": "Au",
    "Atomic Weight": 196.966569,
    "Period": 6,
    "Group": 11,
    "Density": 19.282
  },
  {
    "Atomic Number": 80,
    "Symbol": "Hg",
    "Atomic Weight": 200.59,
    "Period": 6,
    "Group": 12,
    "Density": 13.5336
  },
  {
    "Atomic Number": 81,
    "Symbol": "Tl",
    "Atomic Weight": 204.3833,
    "Period": 6,
    "Group": 13,
    "Density": 11.85
  },
  {
    "Atomic Number": 82,
    "Symbol": "Pb",
    "Atomic Weight": 207.2,
    "Period": 6,
    "Group": 14,
    "Density": 11.342
  },
  {
    "Atomic Number": 83,
    "Symbol": "Bi",
    "Atomic Weight": 208.9804,
    "Period": 6,
    "Group": 15,
    "Density": 9.807
  },
  {
    "Atomic Number": 84,
    "Symbol": "Po",
    "Atomic Weight": 210,
    "Period": 6,
    "Group": 16,
    "Density": 9.32
  },
  {
    "Atomic Number": 85,
    "Symbol": "At",
    "Atomic Weight": 210,
    "Period": 6,
    "Group": 17,
    "Density": 7
  },
  {
    "Atomic Number": 86,
    "Symbol": "Rn",
    "Atomic Weight": 222,
    "Period": 6,
    "Group": 18,
    "Density": 0.00973
  },
  {
    "Atomic Number": 87,
    "Symbol": "Fr",
    "Atomic Weight": 223,
    "Period": 7,
    "Group": 1,
    "Density": 1.87
  },
  {
    "Atomic Number": 88,
    "Symbol": "Ra",
    "Atomic Weight": 226,
    "Period": 7,
    "Group": 2,
    "Density": 5.5
  },
  {
    "Atomic Number": 89,
    "Symbol": "Ac",
    "Atomic Weight": 227,
    "Period": 7,
    "Group": 3,
    "Density": 10.07
  },
  {
    "Atomic Number": 90,
    "Symbol": "Th",
    "Atomic Weight": 232.03806,
    "Period": 7,
    "Group": 19,
    "Density": 11.72
  },
  {
    "Atomic Number": 91,
    "Symbol": "Pa",
    "Atomic Weight": 231.03588,
    "Period": 7,
    "Group": 20,
    "Density": 15.37
  },
  {
    "Atomic Number": 92,
    "Symbol": "U",
    "Atomic Weight": 238.02891,
    "Period": 7,
    "Group": 21,
    "Density": 18.95
  },
  {
    "Atomic Number": 93,
    "Symbol": "Np",
    "Atomic Weight": 237,
    "Period": 7,
    "Group": 22,
    "Density": 20.45
  },
  {
    "Atomic Number": 94,
    "Symbol": "Pu",
    "Atomic Weight": 244,
    "Period": 7,
    "Group": 23,
    "Density": 19.84
  },
  {
    "Atomic Number": 95,
    "Symbol": "Am",
    "Atomic Weight": 243,
    "Period": 7,
    "Group": 24,
    "Density": 13.69
  },
  {
    "Atomic Number": 96,
    "Symbol": "Cm",
    "Atomic Weight": 247,
    "Period": 7,
    "Group": 25,
    "Density": 13.51
  },
  {
    "Atomic Number": 97,
    "Symbol": "Bk",
    "Atomic Weight": 247,
    "Period": 7,
    "Group": 26,
    "Density": 14.79
  },
  {
    "Atomic Number": 98,
    "Symbol": "Cf",
    "Atomic Weight": 251,
    "Period": 7,
    "Group": 27,
    "Density": 15.1
  },
  {
    "Atomic Number": 99,
    "Symbol": "Es",
    "Atomic Weight": 252,
    "Period": 7,
    "Group": 28,
    "Density": 13.5
  },
  {
    "Atomic Number": 100,
    "Symbol": "Fm",
    "Atomic Weight": 257,
    "Period": 7,
    "Group": 29,
    "Density": ""
  },
  {
    "Atomic Number": 101,
    "Symbol": "Md",
    "Atomic Weight": 258,
    "Period": 7,
    "Group": 30,
    "Density": ""
  },
  {
    "Atomic Number": 102,
    "Symbol": "No",
    "Atomic Weight": 259,
    "Period": 7,
    "Group": 31,
    "Density": ""
  },
  {
    "Atomic Number": 103,
    "Symbol": "Lr",
    "Atomic Weight": 262,
    "Period": 7,
    "Group": 32,
    "Density": ""
  },
  {
    "Atomic Number": 104,
    "Symbol": "Rf",
    "Atomic Weight": 261,
    "Period": 7,
    "Group": 4,
    "Density": 18.1
  },
  {
    "Atomic Number": 105,
    "Symbol": "Db",
    "Atomic Weight": 262,
    "Period": 7,
    "Group": 5,
    "Density": 39
  },
  {
    "Atomic Number": 106,
    "Symbol": "Sg",
    "Atomic Weight": 266,
    "Period": 7,
    "Group": 6,
    "Density": 35
  },
  {
    "Atomic Number": 107,
    "Symbol": "Bh",
    "Atomic Weight": 264,
    "Period": 7,
    "Group": 7,
    "Density": 37
  },
  {
    "Atomic Number": 108,
    "Symbol": "Hs",
    "Atomic Weight": 267,
    "Period": 7,
    "Group": 8,
    "Density": 41
  },
  {
    "Atomic Number": 109,
    "Symbol": "Mt",
    "Atomic Weight": 268,
    "Period": 7,
    "Group": 9,
    "Density": 35
  },
  {
    "Atomic Number": 110,
    "Symbol": "Ds ",
    "Atomic Weight": 271,
    "Period": 7,
    "Group": 10,
    "Density": ""
  },
  {
    "Atomic Number": 111,
    "Symbol": "Rg ",
    "Atomic Weight": 272,
    "Period": 7,
    "Group": 11,
    "Density": ""
  },
  {
    "Atomic Number": 112,
    "Symbol": "Cn ",
    "Atomic Weight": 285,
    "Period": 7,
    "Group": 12,
    "Density": ""
  },
  {
    "Atomic Number": 113,
    "Symbol": "Uut ",
    "Atomic Weight": 284,
    "Period": 7,
    "Group": 13,
    "Density": ""
  },
  {
    "Atomic Number": 114,
    "Symbol": "Uuq ",
    "Atomic Weight": 289,
    "Period": 7,
    "Group": 14,
    "Density": ""
  },
  {
    "Atomic Number": 115,
    "Symbol": "Uup ",
    "Atomic Weight": 288,
    "Period": 7,
    "Group": 15,
    "Density": ""
  },
  {
    "Atomic Number": 116,
    "Symbol": "Uuh ",
    "Atomic Weight": 292,
    "Period": 7,
    "Group": 16,
    "Density": ""
  },
  {
    "Atomic Number": 117,
    "Symbol": "Uus ",
    "Atomic Weight": 295,
    "Period": 7,
    "Group": 17,
    "Density": ""
  },
  {
    "Atomic Number": 118,
    "Symbol": "Uuo ",
    "Atomic Weight": 294,
    "Period": 7,
    "Group": 18,
    "Density": ""
  }
];

if (typeof module !== 'undefined') {
  module.exports = {elements};
}
