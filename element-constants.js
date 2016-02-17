var CHEMICAL_ELEMENTS = {
  0: {
    'name': 'n/a',
    'symbol': "",
    'background-color': '#F1EEFA',
    'border-color': '#AAA',
    'color': '#F1EEFA',
    'descrip': ""
  },

  1: {
    'name': 'hydrogen',
    'symbol': 'H',
    'background-color': '#dde',
    'border-color': '#888',
    'color': 'black',
    'descrip': ""
  },

  2: {
    'name': 'helium',
    'symbol': 'He',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'black',
    'descrip': ""
  },

  3: {
    'name': 'lithium',
    'symbol': 'Li',
    'color': 'li-block',
    'descrip': "Named after the Greek for \"stone\"."
  },

  4: {
    'name': 'beryllium',
    'symbol': 'Be',
    'color': 'be-block',
    'descrip': ""
  },

  5: {
    'name': 'boron',
    'symbol': 'B',
    'color': 'b-block',
    'descrip': ""
  },

  6: {
    'name': 'carbon',
    'symbol': 'C',
    'color': 'c-block',
    'descrip': "Typically manifests in coal, graphite, and diamond."
  },

  7: {
    'name': 'nitrogen',
    'symbol': 'N',
    'color': 'n-block',
    'descrip': "Makes up the largest percent of air at the Earth's surface."
  },

  8: {
    'name': 'oxygen',
    'symbol': 'O',
    'color': 'o-block',
    'descrip': "Makes up the second largest percent of air at the Earth's surface. Named after the Greek root for 'sour' or 'sharp', because the scientist who identified it believed Oxygen to be the key component of all acids."
  },

  9: {
    'name': 'fluorine',
    'symbol': 'F',
    'color': 'f-block',
    'descrip': "Named after the word \"flow\"."
  },

  10: {
    'name': 'neon',
    'symbol': 'Ne',
    'color': 'ne-block',
    'descrip': "Named after the Latin word for \"new\"."
  },

  11: {
    'name': 'sodium',
    'symbol': 'Na',
    'color': 'na-block',
    'descrip': "Commonly found in table salt, in the compound Sodium Chloride ( NaCl )."
  },

  12: {
    'name': 'magnesium',
    'symbol': 'Mg',
    'color': 'mg-block',
    'descrip': ""
  },

  13: {
    'name': 'aluminum',
    'symbol': 'Al',
    'color': 'al-block',
    'descrip': "Named for the salt from which it was derived: Alum. Once a very precious metal, so much so that the Washington Monument was originally capped with Aluminum."
  },

  14: {
    'name': 'silicon',
    'symbol': 'Si',
    'color': 'si-block',
    'descrip': "Common component in electronics, as its chemical properties are ideal for creating microscopic transistors."
  },

  15: {
    'name': 'phosphorus',
    'symbol': 'P',
    'color': 'p-block',
    'descrip': ""
  },

  16: {
    'name': 'sulfur',
    'symbol': 'S',
    'color': 's-block',
    'descrip': "Known as \"brimstone\" in ancient times. A key component in gunpowder."
  },

  17: {
    'name': 'chlorine',
    'symbol': 'Cl',
    'color': 'cl-block',
    'descrip': ""
  },

  18: {
    'name': 'argon',
    'symbol': 'Ar',
    'color': 'ar-block',
    'descrip': ""
  },

  19: {
    'name': 'potassium',
    'symbol': 'K',
    'color': 'k-block',
    'descrip': "Commonly found in bananas and potatoes."
  },

  20: {
    'name': 'calcium',
    'symbol': 'Ca',
    'color': 'ca-block',
    'descrip': "Typically found in limestone, from which it gets its \"name\"."
  },

  21: {
    'name': 'scandium',
    'symbol': 'Sc',
    'color': 'sc-block',
    'descrip': "Named after the country of Scandinavia."
  },

  22: {
    'name': 'titanium',
    'symbol': 'Ti',
    'color': 'ti-block',
    'descrip': ""
  },

  23: {
    'name': 'vanadium',
    'symbol': 'V',
    'color': 'v-block',
    'descrip': ""
  },

  24: {
    'name': 'chromium',
    'symbol': 'Cr',
    'color': 'cr-block',
    'descrip': ""
  },

  25: {
    'name': 'manganese',
    'symbol': 'Mn',
    'color': 'mn-block',
    'descrip': "Named for its magnetic properties."
  },

  26: {
    'name': 'iron',
    'symbol': 'Fe',
    'color': 'fe-block',
    'descrip': ""
  },

  27: {
    'name': 'cobalt',
    'symbol': 'Co',
    'color': 'co-block',
    'descrip': ""
  },

  28: {
    'name': 'nickel',
    'symbol': 'Ni',
    'color': 'ni-block',
    'descrip': ""
  },

  29: {
    'name': 'copper',
    'symbol': 'Cu',
    'color': 'cu-block',
    'descrip': "It's chemical symbol derives from the Latin 'Cuprus'."
  },

  30: {
    'name': 'zinc',
    'symbol': 'Zn',
    'color': 'zn-block',
    'descrip': ""
  },

  31: {
    'name': 'gallium',
    'symbol': 'Ga',
    'color': 'ga-block',
    'descrip': "Named after the ancient Celtic peoples who inhabited what is now France, Gaul."
  },

  32: {
    'name': 'germanium',
    'symbol': 'Ge',
    'color': 'ge-block',
    'descrip': 'Named after the country of Germany.'
  },

  33: {
    'name': 'arsenic',
    'symbol': 'As',
    'color': 'as-block',
    'descrip': "Deadly poison to humans, named for its yellow color."
  },

  34: {
    'name': 'selenium',
    'symbol': 'Se',
    'color': 'se-block',
    'descrip': ""
  },

  35: {
    'name': 'bromine',
    'symbol': 'Br',
    'color': 'br-block',
    'descrip': "Named after the Greek for \"\" ( bad smell )."
  },

  36: {
    'name': 'krypton',
    'symbol': 'Kr',
    'color': 'kr-block',
    'descrip': "Named after the Greek for \"hidden\"."
  },

  37: {
    'name': 'rubidium',
    'symbol': 'Rb',
    'color': 'rb-block',
    'descrip': "Named for it's \"ruby red\" color."
  },

  38: {
    'name': 'strontium',
    'symbol': 'Sr',
    'color': 'sr-block',
    'descrip': ""
  },

  39: {
    'name': 'yttrium',
    'symbol': 'Y',
    'color': 'y-block',
    'descrip': "Named after the village of Ytterby."
  },

  40: {
    'name': 'zirconium',
    'symbol': 'Zr',
    'color': 'zr-block',
    'descrip': ""
  },

  41: {
    'name': 'niobium',
    'symbol': 'Nb',
    'color': 'nb-block',
    'descrip': "Named after the city of Niobe."
  },

  42: {
    'name': 'molybdenum',
    'symbol': 'Mo',
    'color': 'mo-block',
    'descrip': "Also known as \"fool's lead\"."
  },

  43: {
    'name': 'technitium',
    'symbol': 'Tc',
    'color': 'tc-block',
    'descrip': ""
  },

  44: {
    'name': 'ruthenium',
    'symbol': 'Ru',
    'color': 'ru-block',
    'descrip': ""
  },

  45: {
    'name': 'rhodium',
    'symbol': 'Rh',
    'color': 'rh-block',
    'descrip': "Named for its pink color."
  },

  46: {
    'name': 'palladium',
    'symbol': 'Pd',
    'color': 'pd-block',
    'descrip': ""
  },

  47: {
    'name': 'silver',
    'symbol': 'Ag',
    'color': 'ag-block',
    'descrip': "Its chemical symbol derives from the Latin \"argent\"."
  },

  48: {
    'name': 'cadmium',
    'symbol': 'Cd',
    'color': 'cd-block',
    'descrip': ""
  },

  49: {
    'name': 'indium',
    'symbol': 'In',
    'color': 'in-block',
    'descrip': "Named after the country of India."
  },

  50: {
    'name': 'tin',
    'symbol': 'Sn',
    'color': 'sn-block',
    'descrip': ""
  },

  51: {
    'name': 'antimony',
    'symbol': 'Sb',
    'color': 'sb-block',
    'descrip': "Known during the Medieval Era to be the death of many monks who did not take enough care while gardening."
  },

  52: {
    'name': 'tellurium',
    'symbol': 'Te',
    'color': 'te-block',
    'descrip': ""
  },

  53: {
    'name': 'iodine',
    'symbol': 'I',
    'color': 'i-block',
    'descrip': "Named for its dark purple color."
  },

  54: {
    'name': 'xenon',
    'symbol': 'Xe',
    'color': 'xe-block',
    'descrip': ""
  },

  55: {
    'name': 'cesium',
    'symbol': 'Cs',
    'color': 'cs-block',
    'descrip': "Named for its sky blue color."
  },

  56: {
    'name': 'barium',
    'symbol': 'Ba',
    'color': 'ba-block',
    'descrip': "Named after the word for \"heavy\"."
  },

  57: {
    'name': 'lanthanum',
    'symbol': 'La',
    'color': 'la-block',
    'descrip': ""
  },

  58: {
    'name': 'cerium',
    'symbol': 'Ce',
    'color': 'ce-block',
    'descrip': "Named after the word for \"farm\"."
  },

  59: {
    'name': 'praseodymium',
    'symbol': 'Pr',
    'color': 'pr-block',
    'descrip': ""
  },

  60: {
    'name': 'neodymium',
    'symbol': 'Nd',
    'color': 'nd-block',
    'descrip': ""
  },

  61: {
    'name': 'promethium',
    'symbol': 'Pm',
    'color': 'pm-block',
    'descrip': "Named after the tragic Greek hero Prometheus."
  },

  62: {
    'name': 'samarium',
    'symbol': 'Sm',
    'color': 'sm-block',
    'descrip': ""
  },

  63: {
    'name': 'europium',
    'symbol': 'Eu',
    'color': 'eu-block',
    'descrip': "Named after the continent of Europe."
  },

  64: {
    'name': 'gadolinium',
    'symbol': 'Gd',
    'color': 'gd-block',
    'descrip': ""
  },

  65: {
    'name': 'terbium',
    'symbol': 'Tb',
    'color': 'tb-block',
    'descrip': "Named after the village of Ytterby."
  },

  66: {
    'name': 'dysprosium',
    'symbol': 'Dy',
    'color': 'dy-block',
    'descrip': "Named for being difficult to acquire."
  },

  67: {
    'name': 'holmium',
    'symbol': 'Ho',
    'color': 'ho-block',
    'descrip': "Named after the city of Stockholm, Sweden."
  },

  68: {
    'name': 'erbium',
    'symbol': 'Er',
    'color': 'er-block',
    'descrip': "Named after the village of Ytterby."
  },

  69: {
    'name': 'thulium',
    'symbol': 'Tm',
    'color': 'tm-block',
    'descrip': "Named after the country of Iceland."
  },

  70: {
    'name': 'ytterbium',
    'symbol': 'Yb',
    'color': 'yb-block',
    'descrip': "Named after the village of Ytterby."
  },

  71: {
    'name': 'lutetium',
    'symbol': 'Lu',
    'color': 'lu-block',
    'descrip': "Named after the original \"name\" of the city of Paris, Lutetia Parisii. 'Lutetia' may refer to the once swamp-like quality of the region."
  },

  72: {
    'name': 'hafnum',
    'symbol': 'Hf',
    'color': 'hf-block',
    'descrip': "Named after the city of Copenhagen, Switzerland."
  },

  73: {
    'name': 'tantalum',
    'symbol': 'Ta',
    'color': 'ta-block',
    'descrip': "Named for the mythical Greek Tantalus: a region deep beneath the surface of the Earth, where Zeus banished the titans."
  },

  74: {
    'name': 'tungsten',
    'symbol': 'W',
    'color': 'w-block',
    'descrip': "Also known as \"Wolfram\", from which it derives its chemical symbol."
  },

  75: {
    'name': 'rhenium',
    'symbol': 'Re',
    'color': 're-block',
    'descrip': "Named after the Rhine river."
  },

  76: {
    'name': 'osmium',
    'symbol': 'Os',
    'color': 'os-block',
    'descrip': "Named for its smell."
  },

  77: {
    'name': 'iridium',
    'symbol': 'Ir',
    'color': 'ir-block',
    'descrip': ""
  },

  78: {
    'name': 'platinum',
    'symbol': 'Pt',
    'color': 'pt-block',
    'descrip': "Named \"little silver\"."
  },

  79: {
    'name': 'gold',
    'symbol': 'Au',
    'color': 'au-block',
    'descrip': ""
  },

  80: {
    'name': 'mercury',
    'symbol': 'Hg',
    'color': 'hg-block',
    'descrip': "Also known as 'quicksilver'. Its chemical symbol derives from ."
  },

  81: {
    'name': 'thallium',
    'symbol': 'Tl',
    'color': 'tl-block',
    'descrip': ""
  },

  82: {
    'name': 'lead',
    'symbol': 'Pb',
    'color': 'pb-block',
    'descrip': ""
  },

  83: {
    'name': 'bismuth',
    'symbol': 'Bi',
    'color': 'bi-block',
    'descrip': ""
  },

  84: {
    'name': 'polonium',
    'symbol': 'Po',
    'color': 'po-block',
    'descrip': "Discovered by Marie Curie, and named after her home country, Poland."
  },

  85: {
    'name': 'astatine',
    'symbol': 'At',
    'color': 'at-block',
    'descrip': ""
  },

  86: {
    'name': 'radon',
    'symbol': 'Rn',
    'color': 'rn-block',
    'descrip': "Named for its radioactive, \"glowing\" properties."
  },

  87: {
    'name': 'francium',
    'symbol': 'Fr',
    'color': 'fr-block',
    'descrip': "Named for the country of France."
  },

  88: {
    'name': 'radium',
    'symbol': 'Ra',
    'color': 'ra-block',
    'descrip': "Named for its radioactive properties."
  },

  89: {
    'name': 'actinium',
    'symbol': 'Ac',
    'color': 'ac-block',
    'descrip': ""
  },

  90: {
    'name': 'thorium',
    'symbol': 'Th',
    'color': 'th-block',
    'descrip': "Named after the Norse god, Thor."
  },

  91: {
    'name': 'proactinium',
    'symbol': 'Pa',
    'color': 'pa-block',
    'descrip': ""
  },

  92: {
    'name': 'uranium',
    'symbol': 'U',
    'color': 'u-block',
    'descrip': "Named after the Roman god, Uranus, often equated to the Greek Ouranos."
  },

  93: {
    'name': 'neptunium',
    'symbol': 'Np',
    'color': 'np-block',
    'descrip': "Named after the Roman god, Neptune."
  },

  94: {
    'name': 'plutonium',
    'symbol': 'Pu',
    'color': 'pu-block',
    'descrip': "Named after the Roman god, Pluto."
  },

  95: {
    'name': 'americanium',
    'symbol': 'Am',
    'color': 'am-block',
    'descrip': "Named after the country of the United States of America."
  },

  96: {
    'name': 'curium',
    'symbol': 'Cm',
    'color': 'cm-block',
    'descrip': "Named after Marie Curie."
  },

  97: {
    'name': 'berkelium',
    'symbol': 'Bk',
    'color': 'bk-block',
    'descrip': "Named \"birch tree\"."
  },

  98: {
    'name': 'californium',
    'symbol': 'Cf',
    'color': 'cf-block',
    'descrip': "Named after the US state, California."
  },

  99: {
    'name': 'einsteinium',
    'symbol': 'Es',
    'color': 'es-block',
    'descrip': "Named after the physicist, Albert Einstein."
  },

  100: {
    'name': 'fermium',
    'symbol': 'Fm',
    'color': 'fm-block',
    'descrip': "Named after the _, Enrico Fermi."
  },

  101: {
    'name': 'mendelevium',
    'symbol': 'Md',
    'color': 'md-block',
    'descrip': "Named after the chemist who devised what would become the modern periodic table of elements, Mendeleev."
  },

  102: {
    'name': 'nobelium',
    'symbol': 'No',
    'color': 'no-block',
    'descrip': "Named after the _, Nobel."
  },

  103: {
    'name': 'lawrencium',
    'symbol': 'Lr',
    'color': 'lr-block',
    'descrip': "Named after the _, Lawrence."
  },

  104: {
    'name': 'rutherford',
    'symbol': 'Rf',
    'color': 'rf-block',
    'descrip': "Named after the physicist, Ernst Rutherford."
  },

  105: {
    'name': 'dubnium',
    'symbol': 'Db',
    'color': 'db-block',
    'descrip': ""
  },

  106: {
    'name': 'seaborgium',
    'symbol': 'Sg',
    'color': 'sg-block',
    'descrip': "Named after the _, Seaborg."
  },

  107: {
    'name': 'bohrium',
    'symbol': 'Bh',
    'color': 'bh-block',
    'descrip': "Named after the physicist, Niels Bohr."
  },

  108: {
    'name': 'hassium',
    'symbol': 'Hs',
    'color': 'hs-block',
    'descrip': ""
  },

  109: {
    'name': 'meitnerium',
    'symbol': 'Mt',
    'color': 'mt-block',
    'descrip': ""
  },

  110: {
    'name': 'darmstadtium',
    'symbol': 'Ds',
    'color': 'ds-block',
    'descrip': ""
  },

  111: {
    'name': 'roentgenium',
    'symbol': 'Rg',
    'color': 'rg-block',
    'descrip': ""
  },

  112: {
    'name': 'copernicium',
    'symbol': 'Cn',
    'color': 'cn-block',
    'descrip': "Named after the philosopher, Copernicus."
  },

  113: {
    'name': 'ununtrium',
    'symbol': 'Uut',
    'color': 'uut-block',
    'descrip': ""
  },

  114: {
    'name': 'flerovium',
    'symbol': 'Fl',
    'color': 'fl-block',
    'descrip': ""
  },

  115: {
    'name': 'ununpentium',
    'symbol': 'Uup',
    'color': 'uup-block',
    'descrip': ""
  },

  116: {
    'name': 'livermorium',
    'symbol': 'Lv',
    'color': 'lv-block',
    'descrip': ""
  },

  117: {
    'name': 'ununseptium',
    'symbol': 'Uus',
    'color': 'uus-block',
    'descrip': ""
  },

  118: {
    'name': 'ununoctium',
    'symbol': 'Uuo',
    'color': 'uuo-block',
    'descrip': ""
  },
};
