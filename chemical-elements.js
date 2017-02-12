const CHEMICAL_ELEMENTS = [
  {
    symbol: 'n/a',
    title: '',
    background: '#0000',
    border: '#0003',
    color: '#F1EEFA',
    descrip: [
      "n/a"
    ]
  },
  {
    symbol: 'H',
    title: 'Hydrogen [H]',
    background: '#DBC3DB',
    border: '#A971A9',
    color: 'black',
    descrip: [
      "The single most abundant element in the known",
      "universe. Named using the Greek word \"hydro,\"",
      "meaning \"water,\" because it makes up two parts of",
      "the water molecule."
    ]
  },
  {
    symbol: 'He',
    title: 'Helium [He]',
    background: '#EFE09F',
    border: '#FF9830',
    color: 'black',
    descrip: [
      "Named after the Greek god of the sun, \"Helios,\"",
      "because it's presence was discovered to be on the",
      "surface of the sun."
    ]
  },
  {
    symbol: 'Li',
    title: 'Lithium [Li]',
    background: '#E4E4DA',
    border: '#505057',
    color: 'black',
    descrip: [
      "Named after the Greek word \"lithos,\" meaning \"stone\".",
      "Often used in rechargeable batteries."
    ]
  },
  {
    symbol: 'Be',
    title: 'Beryllium [Be]',
    background: '#DEDEDA',
    border: '#50506A',
    color: 'black',
    descrip: [
      "Named for the salt from which it was isolated:",
      "beryl. Typically used to create copper alloys for",
      "use in electrical wiring."
    ]
  },
  {
    symbol: 'B',
    title: 'Boron [B]',
    background: '#ACAFA0',
    border: '#876750',
    color: 'black',
    descrip: [
      "Named for the salt from which it was isolated:",
      "borax. Used to create green flares and in insulation",
      "fiberglass."
    ]
  },
  {
    symbol: 'C',
    title: 'Carbon [C]',
    background: '#625858',
    border: '#121212',
    color: 'black',
    descrip: [
      "Named after the Latin \"carbo,\" meaning \"charcoal.\"",
      "Typically manifests in coal, graphite, and diamond."
    ]
  },
  {
    symbol: 'N',
    title: 'Nitrogen [N]',
    background: '#FFF',
    border: '#999',
    color: 'black',
    descrip: [
      "Named after the Latin \"nitrum,\" a native soda.",
      "Makes up the largest percent of air at the Earth's",
      "surface."
    ]
  },
  {
    symbol: 'O',
    title: 'Oxygen [O]',
    background: '#C1C5DB',
    border: '#9093A9',
    color: 'black',
    descrip: [
      "Named after the Greek root for \"sour\" or \"sharp\",",
      "because the scientist who identified it believed",
      "Oxygen to be the key component of all acids. Makes",
      "up the second largest percent of air at the Earth's",
      "surface."
    ]
  },
  {
    symbol: 'F',
    title: 'Fluorine [F]',
    background: '#FFEF82',
    border: '#B8B870',
    color: 'black',
    descrip: [
      "Named for the French \"fluere,\" meaning \"flow\".",
      "Chlorine Trifluoride is one of the most dangerous,",
      "reactive chemicals in the world. It is known to burn",
      "concrete, melt sand, and explode on contact with",
      "water."
    ]
  },
  {
    symbol: 'Ne',
    title: 'Neon [Ne]',
    background: '#EFE09F',
    border: '#EFB830',
    color: 'black',
    descrip: [
      "Named after the Latin word for \"new\". Though often",
      "seen in neon signs, shows great potential as a",
      "refrigerant."
    ]
  },
  {
    symbol: 'Na',
    title: 'Sodium [Na]',
    background: '#EFEFEF',
    border: '#656463',
    color: 'black',
    descrip: [
      "Named after the word \"soda\" because it was first",
      "isolated from a sample of caustic soda. Commonly",
      "found in table salt, in the compound Sodium Chloride",
      "(NaCl)."
    ]
  },
  {
    symbol: 'Mg',
    title: 'Magnesium [Mg]',
    background: '#EFEFFF',
    border: '#656478',
    color: 'black',
    descrip: [
      "Named after the Magnesia district in Thessaly.",
      "Because it readily ignites in air, it is used in",
      "flash photography and pyrotechnics."
    ]
  },
  {
    symbol: 'Al',
    title: 'Aluminum [Al]',
    background: '#E0E0F3',
    border: '#656070',
    color: 'black',
    descrip: [
      "Named for the salt from which it was derived, \"alum\".",
      "Once a very precious metal, so much so that the",
      "Washington Monument was originally capped with",
      "Aluminum."
    ]
  },
  {
    symbol: 'Si',
    title: 'Silicon [Si]',
    background: '#DEDEDA',
    border: '#50506A',
    color: 'black',
    descrip: [
      "Named after the Latin \"silex,\" meaning \"flint\".",
      "Common component in electronics, as its chemical",
      "properties are ideal for creating microscopic",
      "transistors."
    ]
  },
  {
    symbol: 'P',
    title: 'Phosphorus [P]',
    background: '#F5D311',
    border: '#877040',
    color: 'black',
    descrip: [
      "Named after the Ancient Greek name for the planet",
      "Venus, meaning \"light-carrier.\" It is an essential",
      "component of cell structure."
    ]
  },
  {
    symbol: 'S',
    title: 'Sulfur [S]',
    background: '#F5D311',
    border: '#877040',
    color: 'black',
    descrip: [
      "Known as \"brimstone\" in ancient times. A key",
      "component in gunpowder, and an element essential for",
      "organic life."
    ]
  },
  {
    symbol: 'Cl',
    title: 'Chlorine [Cl]',
    background: '#EFDF82',
    border: '#989840',
    color: 'black',
    descrip: [
      "Named after the Greek \"chloro,\" meaning \"greenish",
      "yellow.\" It is used as a disinfectant and in water",
      "treatment plants to provide clean drinking water."
    ]
  },
  {
    symbol: 'Ar',
    title: 'Argon [Ar]',
    background: '#BBA3BB',
    border: '#A971A9',
    color: 'black',
    descrip: [
      "Named after the Greek \"argos,\" meaning \"inert.\"",
      "Used to fill incandescent and fluorescent light",
      "bulbs."
    ]
  },
  {
    symbol: 'K',
    title: 'Potassium [K]',
    background: '#FFDFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the English \"potash,\" meaning \"pot",
      "ash.\" Its symbol comes from the Latin \"kalium.\"",
      "Commonly found in bananas and potatoes."
    ]
  },
  {
    symbol: 'Ca',
    title: 'Calcium [Ca]',
    background: '#E4E4DA',
    border: '#505057',
    color: 'black',
    descrip: [
      "Named after the Latin \"calx,\" meaning \"lime.\" It",
      "is typically found in limestone, and is the primary",
      "component of dental enamel."
    ]
  },
  {
    symbol: 'Sc',
    title: 'Scandium [Sc]',
    background: '#EFEFEF',
    border: '#656463',
    color: 'black',
    descrip: [
      "Named after the country of Scandinavia. Once used in",
      "high-intensity lights, sometimes used to create",
      "certain aluminum alloys."
    ]
  },
  {
    symbol: 'Ti',
    title: 'Titanium [Ti]',
    background: '#E4E4DA',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the Greek \"titans.\" Used as an alloy in",
      "aircraft, bicycle frames, and other lightweight,",
      "rigid structures. Titanium oxide is commonly used in",
      "house paint."
    ]
  },
  {
    symbol: 'V',
    title: 'Vanadium [V]',
    background: '#C1C5DB',
    border: '#9093A9',
    color: 'black',
    descrip: [
      "Named after the Scandinavian goddess of beauty,",
      "\"Vanadis.\" It is used to improve steel, and has been",
      "identified in the spectra of several stars and the",
      "sun."
    ]
  },
  {
    symbol: 'Cr',
    title: 'Chromium [Cr]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the Greek \"chroma,\" meaning \"color,\"",
      "because its known compounds were many different",
      "colors. Responsible for the green color of emeralds."
    ]
  },
  {
    symbol: 'Mn',
    title: 'Manganese [Mn]',
    background: '#E4E4DA',
    border: '#505057',
    color: 'black',
    descrip: [
      "Named after the Latin \"magnes,\" meaning \"magnet,\"",
      "for its magnetic properties. Responsible for the",
      "purple color of true amethyst."
    ]
  },
  {
    symbol: 'Fe',
    title: 'Iron [Fe]',
    background: '#E4E4DA',
    border: '#BF9270',
    color: 'black',
    descrip: [
      "It's English name may have been derived from words",
      "meaning \"holy metal\" because it was used to make",
      "swords for the Crusades. Its chemical symbol comes",
      "from the Latin word for Iron, \"ferrum.\""
    ]
  },
  {
    symbol: 'Co',
    title: 'Cobalt [Co]',
    background: '#9EA3BB',
    border: '#6871A9',
    color: 'black',
    descrip: [
      "Named after the German \"kobold,\" meaning \"goblin.\"",
      "It is essential to vitamin-B12."
    ]
  },
  {
    symbol: 'Ni',
    title: 'Nickel [Ni]',
    background: '#E4E4DA',
    border: '#505057',
    color: 'black',
    descrip: [
      "Named after the German \"kupfernickel,\" meaning",
      "\"Nick's copper\" (as in Saint Nicholas). An American",
      "nickel is 25% Nickel."
    ]
  },
  {
    symbol: 'Cu',
    title: 'Copper [Cu]',
    background: '#DFCE8F',
    border: '#BF8230',
    color: 'black',
    descrip: [
      "Named after the Latin \"cuprum,\" referring to the",
      "island of Cyprus. Typically used as wiring. Popular",
      "in ancient times for its malleability."
    ]
  },
  {
    symbol: 'Zn',
    title: 'Zinc [Zn]',
    background: '#C1C5DB',
    border: '#9093A9',
    color: 'black',
    descrip: [
      "Named after its German name, \"zink\". Used with",
      "copper to make brass in ancient times. An essential",
      "part of animal and plant diets."
    ]
  },
  {
    symbol: 'Ga',
    title: 'Gallium [Ga]',
    background: '#EFEFEF',
    border: '#656463',
    color: 'black',
    descrip: [
      "Named after the Latin \"Gallia,\" the ancient Celtic",
      "peoples who inhabited Gaul, now France. Used in the",
      "study of solar neutrinos."
    ]
  },
  {
    symbol: 'Ge',
    title: 'Germanium [Ge]',
    background: '#EFEFEF',
    border: '#656463',
    color: 'black',
    descrip: [
      "Named after the Latin \"Germania,\" meaning \"Germany\".",
      "Used in infrared spectroscopes and to detect gamma",
      "radiation."
    ]
  },
  {
    symbol: 'As',
    title: 'Arsenic [As]',
    background: '#EFDF82',
    border: '#989840',
    color: 'black',
    descrip: [
      "Named after the Greek \"arsenikon,\" meaning \"yellow",
      "orpiment.\" Deadly poison to humans. Used as a laser",
      "material."
    ]
  },
  {
    symbol: 'Se',
    title: 'Selenium [Se]',
    background: '#EF9F9F',
    border: '#EF5C30',
    color: 'black',
    descrip: [
      "Named after the Greek \"selene,\" meaning \"moon.\"",
      "Useful in photocells and transistors."
    ]
  },
  {
    symbol: 'Br',
    title: 'Bromine [Br]',
    background: '#EF8F8F',
    border: '#CF3C20',
    color: 'black',
    descrip: [
      "Named after the Greek \"bromos,\" meaning \"stench.\"",
      "Gaseous Bromine is heavier than air; in an open",
      "container at room temperature the gas will pour out",
      "over the edges. Used as a flame retardant."
    ]
  },
  {
    symbol: 'Kr',
    title: 'Krypton [Kr]',
    background: '#FFDFEF',
    border: '#9093A9',
    color: 'black',
    descrip: [
      "Named after the Greek \"kryptos,\" meaning \"hidden.\"",
      "Used in fluorescent lightbulbs."
    ]
  },
  {
    symbol: 'Rb',
    title: 'Rubidium [Rb]',
    background: '#E4C4DA',
    border: '#505057',
    color: 'black',
    descrip: [
      "Named after the Latin \"rubidius,\" meaning \"deepest",
      "red,\" for it's ruby red color. Used in vacuum tubes",
      "and photocells."
    ]
  },
  {
    symbol: 'Sr',
    title: 'Strontium [Sr]',
    background: '#EFEFB2',
    border: '#656463',
    color: 'black',
    descrip: [
      "Named after the Scottish village of Strontian.",
      "Useful in pyrotechnics for its red flame. Used in",
      "nuclear fission power plants."
    ]
  },
  {
    symbol: 'Y',
    title: 'Yttrium [Y]',
    background: '#EFEFEF',
    border: '#656463',
    color: 'black',
    descrip: [
      "Named after the Swedish village of Ytterby. Used as",
      "a red phosphor in television screens. Found in moon",
      "rocks."
    ]
  },
  {
    symbol: 'Zr',
    title: 'Zirconium [Zr]',
    background: '#EFEFEF',
    border: '#656463',
    color: 'black',
    descrip: [
      "Named after the Arabic \"zargun,\" meaning \"gold",
      "color.\" Used in the nuclear industry. Useful to",
      "protect against corrosion."
    ]
  },
  {
    symbol: 'Nb',
    title: 'Niobium [Nb]',
    background: '#C1C5DB',
    border: '#707389',
    color: 'black',
    descrip: [
      "Named after the Greek character \"Niobe,\" daughter of",
      "Tantalus, because of its close relation to Tantalum.",
      "Used in arc-welding rods and superconductive",
      "magnets."
    ]
  },
  {
    symbol: 'Mo',
    title: 'Molybdenum [Mo]',
    background: '#EFEFEF',
    border: '#656463',
    color: 'black',
    descrip: [
      "Named after the Greek \"molybdos,\" meaning \"lead.\"",
      "Also known as \"fool's lead\". Used as an alloying",
      "agent in steel."
    ]
  },
  {
    symbol: 'Tc',
    title: 'Technetium [Tc]',
    background: '#EFEFEF',
    border: '#656463',
    color: 'black',
    descrip: [
      "Named after the Greek \"technikos,\" meaning",
      "\"artificial.\" It's the first chemical element to be",
      "produced artificially."
    ]
  },
  {
    symbol: 'Ru',
    title: 'Ruthenium [Ru]',
    background: '#EFEFEF',
    border: '#656463',
    color: 'black',
    descrip: [
      "Named after the Latin \"Ruthenia,\" meaning \"Russia.\"",
      "Useful as a harder for palladium and platinum, and",
      "to prevent corrosion in titanium."
    ]
  },
  {
    symbol: 'Rh',
    title: 'Rhodium [Rh]',
    background: '#FFDFEF',
    border: '#616063',
    color: 'black',
    descrip: [
      "Named after the Greek \"rhodon,\" meaning \"rose\" or",
      "\"pink.\" Used in jewelery and catalytic converters."
    ]
  },
  {
    symbol: 'Pd',
    title: 'Palladium [Pd]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the asteroid \"Pallas,\" named for the",
      "Greek goddess of wisdom. Used in watches, surgical",
      "instruments, and to decolorize gold into white gold."
    ]
  },
  {
    symbol: 'Ag',
    title: 'Silver [Ag]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "The chemical symbol derives from the Latin",
      "\"argentum.\" Used in high capacity batteries, as a",
      "paint for printing circuits, and alloyed with copper",
      "as silverware."
    ]
  },
  {
    symbol: 'Cd',
    title: 'Cadmium [Cd]',
    background: '#C1C5DB',
    border: '#707399',
    color: 'black',
    descrip: [
      "Named after the Greek \"kadmeia,\" meaning \"calamine.\"",
      "Used as phosphors in television tubes, and in",
      "control rods of nuclear reactors."
    ]
  },
  {
    symbol: 'In',
    title: 'Indium [In]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after its indigo color. Useful as an alloying",
      "agent, and to make mirrors."
    ]
  },
  {
    symbol: 'Sn',
    title: 'Tin [Sn]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "The chemical symbol comes from the Latin word for",
      "tin, \"stannum.\" Used to create the copper alloy,",
      "bronze."
    ]
  },
  {
    symbol: 'Sb',
    title: 'Antimony [Sb]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Possibly named from the Greek \"anti\" and \"monos,\"",
      "meaning \"not alone.\" Known during the Medieval Era",
      "to be the death of many monks who did not take",
      "enough care while gardening."
    ]
  },
  {
    symbol: 'Te',
    title: 'Tellurium [Te]',
    background: '#C7A770',
    border: '#876730',
    color: 'black',
    descrip: [
      "Named after the Latin \"tellus,\" meaning \"earth.\"",
      "Used in ceramics, semiconductors, and as an alloying",
      "agent."
    ]
  },
  {
    symbol: 'I',
    title: 'Iodine [I]',
    background: '#DF8F9F',
    border: '#876730',
    color: 'black',
    descrip: [
      "Named after the Greek \"iodes,\" meaning \"violet.\"",
      "Useful as a disinfectant, and is added to table salt",
      "for nutrition."
    ]
  },
  {
    symbol: 'Xe',
    title: 'Xenon [Xe]',
    background: '#EFDFEF',
    border: '#9093A9',
    color: 'black',
    descrip: [
      "Named after the Greek \"xenos,\" meaning \"stranger.\"",
      "Used in electron tubes."
    ]
  },
  {
    symbol: 'Cs',
    title: 'Caesium [Cs]',
    background: '#F5F391',
    border: '#838260',
    color: 'black',
    descrip: [
      "Also spelled \"Cesium,\" named after the Latin",
      "\"caesius,\" meaning \"sky blue.\" Used in atomic",
      "clocks, and has potential for use in ion propulsion."
    ]
  },
  {
    symbol: 'Ba',
    title: 'Barium [Ba]',
    background: '#EFEFB2',
    border: '#656463',
    color: 'black',
    descrip: [
      "Named after the Greek \"barys,\" meaning \"heavy.\"",
      "Used in making rubber and glass, and in x-ray",
      "diagnostics."
    ]
  },
  {
    symbol: 'La',
    title: 'Lanthanum [La]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the Greek \"lanthanein,\" meaning \"to lie",
      "hidden.\" Used in film projection and to create cast",
      "iron."
    ]
  },
  {
    symbol: 'Ce',
    title: 'Cerium [Ce]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the asteroid \"Ceres,\" the Greek goddess",
      "of agriculture. Used in \"self-cleaning\" ovens and as",
      "a glass polishing agent."
    ]
  },
  {
    symbol: 'Pr',
    title: 'Praseodymium [Pr]',
    background: '#EFEFEF',
    border: '#656463',
    color: 'black',
    descrip: [
      "Named after the Greek \"prasios didymos,\" meaning",
      "\"green twin.\" It naturally forms a green oxide",
      "unless exposed to air. Used in the film industry in",
      "carbon arc lights."
    ]
  },
  {
    symbol: 'Nd',
    title: 'Neodymium [Nd]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the Greek \"neos didymos,\" meaning \"new",
      "twin.\" Used in very powerful permanent magnets."
    ]
  },
  {
    symbol: 'Pm',
    title: 'Promethium [Pm]',
    background: '#EFEFFF',
    border: '#656478',
    color: 'black',
    descrip: [
      "Named after the tragic Greek hero Prometheus. A",
      "radioactive element, Promethium salts glow blue or",
      "green in the dark."
    ]
  },
  {
    symbol: 'Sm',
    title: 'Samarium [Sm]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the mineral from which it was first",
      "isolated, \"samarskite.\" Used in electronics and to",
      "create lasers and masers."
    ]
  },
  {
    symbol: 'Eu',
    title: 'Europium [Eu]',
    background: '#EFEFB2',
    border: '#656463',
    color: 'black',
    descrip: [
      "Named after the continent of Europe. Used in the red",
      "phosphor of television tubes."
    ]
  },
  {
    symbol: 'Gd',
    title: 'Gadolinium [Gd]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after a Finnish chemist, J. Gadolin. Used in",
      "making tv tubes, enhancing MRI images, and in",
      "compact disks."
    ]
  },
  {
    symbol: 'Tb',
    title: 'Terbium [Tb]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the Swedish village of Ytterby. Useful",
      "as a laser material and as a phosphor in tv tubes."
    ]
  },
  {
    symbol: 'Dy',
    title: 'Dysprosium [Dy]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the Greek \"dysprositos,\" meaning",
      "\"difficult to acquire.\" Used to make laser materials",
      "and in compact disks."
    ]
  },
  {
    symbol: 'Ho',
    title: 'Holmium [Ho]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the Greek for Sweden, \"Holmia.\" Used in",
      "metal alloys, and has an excellent potential for",
      "maintaining a magnetic field."
    ]
  },
  {
    symbol: 'Er',
    title: 'Erbium [Er]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the Swedish village of Ytterby. Used in",
      "the nuclear industry and as an alloying agent."
    ]
  },
  {
    symbol: 'Tm',
    title: 'Thulium [Tm]',
    background: '#E4E4DA',
    border: '#505057',
    color: 'black',
    descrip: [
      "Named after the ancient name for Scandinavia, \"Thule.\""
    ]
  },
  {
    symbol: 'Yb',
    title: 'Ytterbium [Yb]',
    background: '#EFEFB2',
    border: '#656463',
    color: 'black',
    descrip: [
      "Named after the Swedish village of Ytterby."
    ]
  },
  {
    symbol: 'Lu',
    title: 'Lutetium [Lu]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the Roman name for the city of Paris,",
      "\"Lutetia Parisiorum.\""
    ]
  },
  {
    symbol: 'Hf',
    title: 'Hafnium [Hf]',
    background: '#E4E4DA',
    border: '#505057',
    color: 'black',
    descrip: [
      "Named after the Latin name for the city of",
      "Copenhagen, \"Hafnia.\" Used in nuclear reactor",
      "control rods."
    ]
  },
  {
    symbol: 'Ta',
    title: 'Tantalum [Ta]',
    background: '#C1C5DB',
    border: '#707389',
    color: 'black',
    descrip: [
      "Named after the mythical Greek Tantalus, son of Zeus",
      "who was banished to Tartarus. Useful for",
      "strengthening steel."
    ]
  },
  {
    symbol: 'W',
    title: 'Tungsten [W]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the Swedish \"tung sten,\" meaning \"heavy",
      "stone.\" Also known as \"Wolfram,\" from which it",
      "derives its chemical symbol."
    ]
  },
  {
    symbol: 'Re',
    title: 'Rhenium [Re]',
    background: '#DEDEDA',
    border: '#50506A',
    color: 'black',
    descrip: [
      "Named after Greek name for the Rhine river, \"Rhenus.\"",
      "Useful as an alloying agent and in superconductors."
    ]
  },
  {
    symbol: 'Os',
    title: 'Osmium [Os]',
    background: '#DEDEDA',
    border: '#50508A',
    color: 'black',
    descrip: [
      "Named after the Greek \"osme,\" meaning \"smell.\" Used",
      "to make fountain pen tips, electrical contacts, and",
      "in alloys for implants such as pacemakers."
    ]
  },
  {
    symbol: 'Ir',
    title: 'Iridium [Ir]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the Greek \"iris,\" meaning \"rainbow.\"",
      "Used to make the standard metre bar in Paris."
    ]
  },
  {
    symbol: 'Pt',
    title: 'Platinum [Pt]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the Spanish \"platina,\" meaning \"little",
      "silver.\" Used in jewelery, dentistry, and catalytic",
      "converters."
    ]
  },
  {
    symbol: 'Au',
    title: 'Gold [Au]',
    background: '#EFEF62',
    border: '#A89840',
    color: 'black',
    descrip: [
      "Its chemical symbol comes from the Latin word for",
      "gold, \"aurum.\" The most malleable and ductile known",
      "metal, it doesn't tarnish in air."
    ]
  },
  {
    symbol: 'Hg',
    title: 'Mercury [Hg]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Also known as \"quicksilver,\" its chemical symbol",
      "derives from the Latin \"hydrargyrum,\" meaning",
      "\"liquid silver.\" Mercury vapor is toxic, and no",
      "longer used in thermometers."
    ]
  },
  {
    symbol: 'Tl',
    title: 'Thallium [Tl]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the Greek \"thallos,\" meaning \"green",
      "twig.\" Once used as rodenticide."
    ]
  },
  {
    symbol: 'Pb',
    title: 'Lead [Pb]',
    background: '#EFEFEF',
    border: '#656463',
    color: 'black',
    descrip: [
      "Named after the Latin for lead, \"plumbum.\" Though",
      "highly toxic, its sweet taste made it a favorite",
      "sweetener of the Romans."
    ]
  },
  {
    symbol: 'Bi',
    title: 'Bismuth [Bi]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Its name is of uncertain origin. Used in fire",
      "detection and extinguishing systems."
    ]
  },
  {
    symbol: 'Po',
    title: 'Polonium [Po]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Discovered by Marie Curie, and named after her home",
      "country, Poland. Used to remove static charge in",
      "textile mills, and as thermoelectric power in",
      "man-made satellites."
    ]
  },
  {
    symbol: 'At',
    title: 'Astatine [At]',
    background: '#CDCDC0',
    border: '#9D9D90',
    color: 'black',
    descrip: [
      "Named after the Greek \"astatos,\" meaning \"unstable.\"",
      "All of its known isotopes are radioactive."
    ]
  },
  {
    symbol: 'Rn',
    title: 'Radon [Rn]',
    background: '#FFF',
    border: '#999',
    color: 'black',
    descrip: [
      "Named for its radioactive, \"glowing\" properties.",
      "Used in earthquake prediction and radiation therapy."
    ]
  },
  {
    symbol: 'Fr',
    title: 'Francium [Fr]',
    background: '#EFEFEF',
    border: '#656463',
    color: 'black',
    descrip: [
      "Named after the country of France. Found in uranium",
      "minerals, it can be isolated by bombarding it with",
      "Thorium."
    ]
  },
  {
    symbol: 'Ra',
    title: 'Radium [Ra]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the Latin \"radius,\" meaning \"ray,\"",
      "because of its radioactive properties. It can emit",
      "alpha, beta, and gamma rays."
    ]
  },
  {
    symbol: 'Ac',
    title: 'Actinium [Ac]',
    background: '#DEDEDD',
    border: '#50508A',
    color: 'black',
    descrip: [
      "Named after the Greek \"aktinos,\" meaning \"ray.\"",
      "Highly radioactive, it's often used in",
      "thermoelectric power and as a source of neutrons."
    ]
  },
  {
    symbol: 'Th',
    title: 'Thorium [Th]',
    background: '#EFEFEF',
    border: '#555',
    color: 'black',
    descrip: [
      "Named after the Scandinavian god, Thor. Useful as a",
      "source of nuclear fission power."
    ]
  },
  {
    symbol: 'Pa',
    title: 'Proactinium [Pa]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the Greek \"protos,\" meaning \"first.\"",
      "Acts as a superconductor at extremely low",
      "temperatures."
    ]
  },
  {
    symbol: 'U',
    title: 'Uranium [U]',
    background: '#EFEFEF',
    border: '#555',
    color: 'black',
    descrip: [
      "Named after the planet Uranus, often equated to the",
      "Greek Ouranos. Gives glass a distinct yellow green",
      "color and fluorescent glow. Useful as a fuel for",
      "nuclear fission."
    ]
  },
  {
    symbol: 'Np',
    title: 'Neptunium [Np]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the planet Neptune, because it follows",
      "Uranium in the periodic table. Used in neutron",
      "detection instruments."
    ]
  },
  {
    symbol: 'Pu',
    title: 'Plutonium [Pu]',
    background: '#FAFAFA',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the planet Pluto, because it follows",
      "Neptunium in the periodic table. Used in pacemakers,",
      "and as a fuel for nuclear fission."
    ]
  },
  {
    symbol: 'Am',
    title: 'Americanium [Am]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the country of the United States of",
      "America. Used in smoke detectors and as a source of",
      "gamma radiation."
    ]
  },
  {
    symbol: 'Cm',
    title: 'Curium [Cm]',
    background: '#FAFAFA',
    border: '#A971A9',
    color: 'black',
    descrip: [
      "Named after Marie Curie. Used as the power source in",
      "NASA's Mars rover."
    ]
  },
  {
    symbol: 'Bk',
    title: 'Berkelium [Bk]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the city of Berkeley, California."
    ]
  },
  {
    symbol: 'Cf',
    title: 'Californium [Cf]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the US state, California. Useful in",
      "moisture gauges and as a source of neutron",
      "radiation."
    ]
  },
  {
    symbol: 'Es',
    title: 'Einsteinium [Es]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the physicist, Albert Einstein. A",
      "synthetic element, too little has been produced to",
      "have any practical uses."
    ]
  },
  {
    symbol: 'Fm',
    title: 'Fermium [Fm]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the Italian physicist, Enrico Fermi. A",
      "synthetic element, too little has been produced to",
      "have any practical uses."
    ]
  },
  {
    symbol: 'Md',
    title: 'Mendelevium [Md]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the Russian chemist who devised what",
      "would become the modern periodic table of elements,",
      "Dmitri Mendeleev. A synthetic element, too little",
      "has been produced to have any practical uses."
    ]
  },
  {
    symbol: 'No',
    title: 'Nobelium [No]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the Swedish chemist, Alfred Nobel. A",
      "synthetic element, too little has been produced to",
      "have any practical uses."
    ]
  },
  {
    symbol: 'Lr',
    title: 'Lawrencium [Lr]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after Ernest Lawrence, inventor of the",
      "cyclotron. A synthetic element, too little has been",
      "produced to have any practical uses."
    ]
  },
  {
    symbol: 'Rf',
    title: 'Rutherfordium [Rf]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the New Zealand chemist and physicist,",
      "Ernst Rutherford. A synthetic element, too little",
      "has been produced to have any practical uses."
    ]
  },
  {
    symbol: 'Db',
    title: 'Dubnium [Db]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the Joint Nuclear Institute at Dubna. A",
      "synthetic element, too little has been produced to",
      "have any practical uses."
    ]
  },
  {
    symbol: 'Sg',
    title: 'Seaborgium [Sg]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the American nuclear chemist, Glenn T.",
      "Seaborg. A synthetic element, too little has been",
      "produced to have any practical uses."
    ]
  },
  {
    symbol: 'Bh',
    title: 'Bohrium [Bh]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the Danish physicist, Niels Bohr. A",
      "synthetic element, too little has been produced to",
      "have any practical uses."
    ]
  },
  {
    symbol: 'Hs',
    title: 'Hassium [Hs]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the Latin for the German state,",
      "\"Hassias.\" A synthetic element, too little has been",
      "produced to have any practical uses."
    ]
  },
  {
    symbol: 'Mt',
    title: 'Meitnerium [Mt]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the Austrian physicist, Lise Meitner. A",
      "synthetic element, too little has been produced to",
      "have any practical uses."
    ]
  },
  {
    symbol: 'Ds',
    title: 'Darmstadtium [Ds]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after its place of discovery, Darmstadt,",
      "Germany. A synthetic element, too little has been",
      "produced to have any practical uses."
    ]
  },
  {
    symbol: 'Rg',
    title: 'Roentgenium [Rg]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Its proposed name comes from Wilhelm Conrad",
      "Roentgen, who discovered x-rays in 1895. A synthetic",
      "element, too little has been produced to have any",
      "practical uses."
    ]
  },
  {
    symbol: 'Cn',
    title: 'Copernicium [Cn]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Its proposed name comes from the Renaissance",
      "mathematician and astronomer, Nicolaus Copernicus. A",
      "synthetic element, too little has been produced to",
      "have any practical uses."
    ]
  },
  {
    symbol: 'Uut',
    title: 'Ununtrium [Uut]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "No name has yet been proposed for this element as",
      "its discovery has not been officially confirmed."
    ]
  },
  {
    symbol: 'Fl',
    title: 'Flerovium [Fl]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the Flerov Laboratory of Nuclear",
      "Reactions. A synthetic element, too little has been",
      "produced to have any practical uses."
    ]
  },
  {
    symbol: 'Uup',
    title: 'Ununpentium [Uup]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "No name has yet been proposed for this element as",
      "its discovery has not been officially confirmed."
    ]
  },
  {
    symbol: 'Lv',
    title: 'Livermorium [Lv]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "Named after the Lawrence Livermore National",
      "Laboratory. A synthetic element, too little has been",
      "produced to have any practical uses."
    ]
  },
  {
    symbol: 'Uus',
    title: 'Ununseptium [Uus]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "No name has yet been proposed for this element as",
      "its discovery has not been officially confirmed."
    ]
  },
  {
    symbol: 'Uuo',
    title: 'Ununoctium [Uuo]',
    background: '#EFEFEF',
    border: '#818083',
    color: 'black',
    descrip: [
      "No name has yet been proposed for this element as",
      "its discovery has not been officially confirmed."
    ]
  },
];
