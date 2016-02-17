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
    'background-color': '#DDE',
    'border-color': '#888',
    'color': 'black',
    'descrip': ""
  },

  2: {
    'name': 'helium',
    'symbol': 'He',
    'background-color': '#EDD',
    'border-color': '#888',
    'color': 'black',
    'descrip': ""
  },

  3: {
    'name': 'lithium',
    'symbol': 'Li',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'li-block',
    'descrip': "Named after the Greek for \"stone\"."
  },

  4: {
    'name': 'beryllium',
    'symbol': 'Be',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'be-block',
    'descrip': ""
  },

  5: {
    'name': 'boron',
    'symbol': 'B',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'b-block',
    'descrip': ""
  },

  6: {
    'name': 'carbon',
    'symbol': 'C',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'c-block',
    'descrip': "Typically manifests in coal, graphite, and diamond."
  },

  7: {
    'name': 'nitrogen',
    'symbol': 'N',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'n-block',
    'descrip': "Makes up the largest percent of air at the Earth's surface."
  },

  8: {
    'name': 'oxygen',
    'symbol': 'O',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'o-block',
    'descrip': "Makes up the second largest percent of air at the Earth's surface. Named after the Greek root for 'sour' or 'sharp', because the scientist who identified it believed Oxygen to be the key component of all acids."
  },

  9: {
    'name': 'fluorine',
    'symbol': 'F',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'f-block',
    'descrip': "Named after the word \"flow\"."
  },

  10: {
    'name': 'neon',
    'symbol': 'Ne',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'ne-block',
    'descrip': "Named after the Latin word for \"new\"."
  },

  11: {
    'name': 'sodium',
    'symbol': 'Na',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'na-block',
    'descrip': "Commonly found in table salt, in the compound Sodium Chloride ( NaCl )."
  },

  12: {
    'name': 'magnesium',
    'symbol': 'Mg',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'mg-block',
    'descrip': ""
  },

  13: {
    'name': 'aluminum',
    'symbol': 'Al',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'al-block',
    'descrip': "Named for the salt from which it was derived: Alum. Once a very precious metal, so much so that the Washington Monument was originally capped with Aluminum."
  },

  14: {
    'name': 'silicon',
    'symbol': 'Si',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'si-block',
    'descrip': "Common component in electronics, as its chemical properties are ideal for creating microscopic transistors."
  },

  15: {
    'name': 'phosphorus',
    'symbol': 'P',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'p-block',
    'descrip': ""
  },

  16: {
    'name': 'sulfur',
    'symbol': 'S',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 's-block',
    'descrip': "Known as \"brimstone\" in ancient times. A key component in gunpowder."
  },

  17: {
    'name': 'chlorine',
    'symbol': 'Cl',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'cl-block',
    'descrip': ""
  },

  18: {
    'name': 'argon',
    'symbol': 'Ar',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'ar-block',
    'descrip': ""
  },

  19: {
    'name': 'potassium',
    'symbol': 'K',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'k-block',
    'descrip': "Commonly found in bananas and potatoes."
  },

  20: {
    'name': 'calcium',
    'symbol': 'Ca',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'ca-block',
    'descrip': "Typically found in limestone, from which it gets its \"name\"."
  },

  21: {
    'name': 'scandium',
    'symbol': 'Sc',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'sc-block',
    'descrip': "Named after the country of Scandinavia."
  },

  22: {
    'name': 'titanium',
    'symbol': 'Ti',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'ti-block',
    'descrip': ""
  },

  23: {
    'name': 'vanadium',
    'symbol': 'V',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'v-block',
    'descrip': ""
  },

  24: {
    'name': 'chromium',
    'symbol': 'Cr',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'cr-block',
    'descrip': ""
  },

  25: {
    'name': 'manganese',
    'symbol': 'Mn',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'mn-block',
    'descrip': "Named for its magnetic properties."
  },

  26: {
    'name': 'iron',
    'symbol': 'Fe',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'fe-block',
    'descrip': ""
  },

  27: {
    'name': 'cobalt',
    'symbol': 'Co',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'co-block',
    'descrip': ""
  },

  28: {
    'name': 'nickel',
    'symbol': 'Ni',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'ni-block',
    'descrip': ""
  },

  29: {
    'name': 'copper',
    'symbol': 'Cu',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'cu-block',
    'descrip': "It's chemical symbol derives from the Latin 'Cuprus'."
  },

  30: {
    'name': 'zinc',
    'symbol': 'Zn',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'zn-block',
    'descrip': ""
  },

  31: {
    'name': 'gallium',
    'symbol': 'Ga',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'ga-block',
    'descrip': "Named after the ancient Celtic peoples who inhabited what is now France, Gaul."
  },

  32: {
    'name': 'germanium',
    'symbol': 'Ge',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'ge-block',
    'descrip': 'Named after the country of Germany.'
  },

  33: {
    'name': 'arsenic',
    'symbol': 'As',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'as-block',
    'descrip': "Deadly poison to humans, named for its yellow color."
  },

  34: {
    'name': 'selenium',
    'symbol': 'Se',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'se-block',
    'descrip': ""
  },

  35: {
    'name': 'bromine',
    'symbol': 'Br',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'br-block',
    'descrip': "Named after the Greek for \"\" ( bad smell )."
  },

  36: {
    'name': 'krypton',
    'symbol': 'Kr',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'kr-block',
    'descrip': "Named after the Greek for \"hidden\"."
  },

  37: {
    'name': 'rubidium',
    'symbol': 'Rb',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'rb-block',
    'descrip': "Named for it's \"ruby red\" color."
  },

  38: {
    'name': 'strontium',
    'symbol': 'Sr',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'sr-block',
    'descrip': ""
  },

  39: {
    'name': 'yttrium',
    'symbol': 'Y',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'y-block',
    'descrip': "Named after the village of Ytterby."
  },

  40: {
    'name': 'zirconium',
    'symbol': 'Zr',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'zr-block',
    'descrip': ""
  },

  41: {
    'name': 'niobium',
    'symbol': 'Nb',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'nb-block',
    'descrip': "Named after the city of Niobe."
  },

  42: {
    'name': 'molybdenum',
    'symbol': 'Mo',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'mo-block',
    'descrip': "Also known as \"fool's lead\"."
  },

  43: {
    'name': 'technitium',
    'symbol': 'Tc',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'tc-block',
    'descrip': ""
  },

  44: {
    'name': 'ruthenium',
    'symbol': 'Ru',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'ru-block',
    'descrip': ""
  },

  45: {
    'name': 'rhodium',
    'symbol': 'Rh',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'rh-block',
    'descrip': "Named for its pink color."
  },

  46: {
    'name': 'palladium',
    'symbol': 'Pd',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'pd-block',
    'descrip': ""
  },

  47: {
    'name': 'silver',
    'symbol': 'Ag',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'ag-block',
    'descrip': "Its chemical symbol derives from the Latin \"argent\"."
  },

  48: {
    'name': 'cadmium',
    'symbol': 'Cd',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'cd-block',
    'descrip': ""
  },

  49: {
    'name': 'indium',
    'symbol': 'In',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'in-block',
    'descrip': "Named after the country of India."
  },

  50: {
    'name': 'tin',
    'symbol': 'Sn',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'sn-block',
    'descrip': ""
  },

  51: {
    'name': 'antimony',
    'symbol': 'Sb',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'sb-block',
    'descrip': "Known during the Medieval Era to be the death of many monks who did not take enough care while gardening."
  },

  52: {
    'name': 'tellurium',
    'symbol': 'Te',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'te-block',
    'descrip': ""
  },

  53: {
    'name': 'iodine',
    'symbol': 'I',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'i-block',
    'descrip': "Named for its dark purple color."
  },

  54: {
    'name': 'xenon',
    'symbol': 'Xe',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'xe-block',
    'descrip': ""
  },

  55: {
    'name': 'cesium',
    'symbol': 'Cs',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'cs-block',
    'descrip': "Named for its sky blue color."
  },

  56: {
    'name': 'barium',
    'symbol': 'Ba',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'ba-block',
    'descrip': "Named after the word for \"heavy\"."
  },

  57: {
    'name': 'lanthanum',
    'symbol': 'La',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'la-block',
    'descrip': ""
  },

  58: {
    'name': 'cerium',
    'symbol': 'Ce',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'ce-block',
    'descrip': "Named after the word for \"farm\"."
  },

  59: {
    'name': 'praseodymium',
    'symbol': 'Pr',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'pr-block',
    'descrip': ""
  },

  60: {
    'name': 'neodymium',
    'symbol': 'Nd',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'nd-block',
    'descrip': ""
  },

  61: {
    'name': 'promethium',
    'symbol': 'Pm',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'pm-block',
    'descrip': "Named after the tragic Greek hero Prometheus."
  },

  62: {
    'name': 'samarium',
    'symbol': 'Sm',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'sm-block',
    'descrip': ""
  },

  63: {
    'name': 'europium',
    'symbol': 'Eu',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'eu-block',
    'descrip': "Named after the continent of Europe."
  },

  64: {
    'name': 'gadolinium',
    'symbol': 'Gd',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'gd-block',
    'descrip': ""
  },

  65: {
    'name': 'terbium',
    'symbol': 'Tb',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'tb-block',
    'descrip': "Named after the village of Ytterby."
  },

  66: {
    'name': 'dysprosium',
    'symbol': 'Dy',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'dy-block',
    'descrip': "Named for being difficult to acquire."
  },

  67: {
    'name': 'holmium',
    'symbol': 'Ho',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'ho-block',
    'descrip': "Named after the city of Stockholm, Sweden."
  },

  68: {
    'name': 'erbium',
    'symbol': 'Er',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'er-block',
    'descrip': "Named after the village of Ytterby."
  },

  69: {
    'name': 'thulium',
    'symbol': 'Tm',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'tm-block',
    'descrip': "Named after the country of Iceland."
  },

  70: {
    'name': 'ytterbium',
    'symbol': 'Yb',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'yb-block',
    'descrip': "Named after the village of Ytterby."
  },

  71: {
    'name': 'lutetium',
    'symbol': 'Lu',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'lu-block',
    'descrip': "Named after the original \"name\" of the city of Paris, Lutetia Parisii. 'Lutetia' may refer to the once swamp-like quality of the region."
  },

  72: {
    'name': 'hafnum',
    'symbol': 'Hf',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'hf-block',
    'descrip': "Named after the city of Copenhagen, Switzerland."
  },

  73: {
    'name': 'tantalum',
    'symbol': 'Ta',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'ta-block',
    'descrip': "Named for the mythical Greek Tantalus: a region deep beneath the surface of the Earth, where Zeus banished the titans."
  },

  74: {
    'name': 'tungsten',
    'symbol': 'W',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'w-block',
    'descrip': "Also known as \"Wolfram\", from which it derives its chemical symbol."
  },

  75: {
    'name': 'rhenium',
    'symbol': 'Re',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 're-block',
    'descrip': "Named after the Rhine river."
  },

  76: {
    'name': 'osmium',
    'symbol': 'Os',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'os-block',
    'descrip': "Named for its smell."
  },

  77: {
    'name': 'iridium',
    'symbol': 'Ir',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'ir-block',
    'descrip': ""
  },

  78: {
    'name': 'platinum',
    'symbol': 'Pt',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'pt-block',
    'descrip': "Named \"little silver\"."
  },

  79: {
    'name': 'gold',
    'symbol': 'Au',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'au-block',
    'descrip': ""
  },

  80: {
    'name': 'mercury',
    'symbol': 'Hg',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'hg-block',
    'descrip': "Also known as 'quicksilver'. Its chemical symbol derives from ."
  },

  81: {
    'name': 'thallium',
    'symbol': 'Tl',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'tl-block',
    'descrip': ""
  },

  82: {
    'name': 'lead',
    'symbol': 'Pb',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'pb-block',
    'descrip': ""
  },

  83: {
    'name': 'bismuth',
    'symbol': 'Bi',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'bi-block',
    'descrip': ""
  },

  84: {
    'name': 'polonium',
    'symbol': 'Po',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'po-block',
    'descrip': "Discovered by Marie Curie, and named after her home country, Poland."
  },

  85: {
    'name': 'astatine',
    'symbol': 'At',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'at-block',
    'descrip': ""
  },

  86: {
    'name': 'radon',
    'symbol': 'Rn',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'rn-block',
    'descrip': "Named for its radioactive, \"glowing\" properties."
  },

  87: {
    'name': 'francium',
    'symbol': 'Fr',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'fr-block',
    'descrip': "Named for the country of France."
  },

  88: {
    'name': 'radium',
    'symbol': 'Ra',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'ra-block',
    'descrip': "Named for its radioactive properties."
  },

  89: {
    'name': 'actinium',
    'symbol': 'Ac',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'ac-block',
    'descrip': ""
  },

  90: {
    'name': 'thorium',
    'symbol': 'Th',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'th-block',
    'descrip': "Named after the Norse god, Thor."
  },

  91: {
    'name': 'proactinium',
    'symbol': 'Pa',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'pa-block',
    'descrip': ""
  },

  92: {
    'name': 'uranium',
    'symbol': 'U',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'u-block',
    'descrip': "Named after the Roman god, Uranus, often equated to the Greek Ouranos."
  },

  93: {
    'name': 'neptunium',
    'symbol': 'Np',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'np-block',
    'descrip': "Named after the Roman god, Neptune."
  },

  94: {
    'name': 'plutonium',
    'symbol': 'Pu',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'pu-block',
    'descrip': "Named after the Roman god, Pluto."
  },

  95: {
    'name': 'americanium',
    'symbol': 'Am',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'am-block',
    'descrip': "Named after the country of the United States of America."
  },

  96: {
    'name': 'curium',
    'symbol': 'Cm',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'cm-block',
    'descrip': "Named after Marie Curie."
  },

  97: {
    'name': 'berkelium',
    'symbol': 'Bk',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'bk-block',
    'descrip': "Named \"birch tree\"."
  },

  98: {
    'name': 'californium',
    'symbol': 'Cf',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'cf-block',
    'descrip': "Named after the US state, California."
  },

  99: {
    'name': 'einsteinium',
    'symbol': 'Es',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'es-block',
    'descrip': "Named after the physicist, Albert Einstein."
  },

  100: {
    'name': 'fermium',
    'symbol': 'Fm',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'fm-block',
    'descrip': "Named after the _, Enrico Fermi."
  },

  101: {
    'name': 'mendelevium',
    'symbol': 'Md',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'md-block',
    'descrip': "Named after the chemist who devised what would become the modern periodic table of elements, Mendeleev."
  },

  102: {
    'name': 'nobelium',
    'symbol': 'No',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'no-block',
    'descrip': "Named after the _, Nobel."
  },

  103: {
    'name': 'lawrencium',
    'symbol': 'Lr',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'lr-block',
    'descrip': "Named after the _, Lawrence."
  },

  104: {
    'name': 'rutherford',
    'symbol': 'Rf',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'rf-block',
    'descrip': "Named after the physicist, Ernst Rutherford."
  },

  105: {
    'name': 'dubnium',
    'symbol': 'Db',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'db-block',
    'descrip': ""
  },

  106: {
    'name': 'seaborgium',
    'symbol': 'Sg',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'sg-block',
    'descrip': "Named after the _, Seaborg."
  },

  107: {
    'name': 'bohrium',
    'symbol': 'Bh',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'bh-block',
    'descrip': "Named after the physicist, Niels Bohr."
  },

  108: {
    'name': 'hassium',
    'symbol': 'Hs',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'hs-block',
    'descrip': ""
  },

  109: {
    'name': 'meitnerium',
    'symbol': 'Mt',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'mt-block',
    'descrip': ""
  },

  110: {
    'name': 'darmstadtium',
    'symbol': 'Ds',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'ds-block',
    'descrip': ""
  },

  111: {
    'name': 'roentgenium',
    'symbol': 'Rg',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'rg-block',
    'descrip': ""
  },

  112: {
    'name': 'copernicium',
    'symbol': 'Cn',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'cn-block',
    'descrip': "Named after the philosopher, Copernicus."
  },

  113: {
    'name': 'ununtrium',
    'symbol': 'Uut',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'uut-block',
    'descrip': ""
  },

  114: {
    'name': 'flerovium',
    'symbol': 'Fl',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'fl-block',
    'descrip': ""
  },

  115: {
    'name': 'ununpentium',
    'symbol': 'Uup',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'uup-block',
    'descrip': ""
  },

  116: {
    'name': 'livermorium',
    'symbol': 'Lv',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'lv-block',
    'descrip': ""
  },

  117: {
    'name': 'ununseptium',
    'symbol': 'Uus',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'uus-block',
    'descrip': ""
  },

  118: {
    'name': 'ununoctium',
    'symbol': 'Uuo',
    'background-color': '#edd',
    'border-color': '#888',
    'color': 'uuo-block',
    'descrip': ""
  },
};
