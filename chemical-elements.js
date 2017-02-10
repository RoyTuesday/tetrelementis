const CHEMICAL_ELEMENTS = [
  {
    'name': 'n/a',
    'symbol': "",
    'background-color': '#0000',
    'border-color': '#0003',
    'color': '#F1EEFA',
    'descrip': "n/a"
  },
  {
    'name': 'Hydrogen',
    'symbol': 'H',
    'background-color': '#DBC3DB',
    'border-color': '#A971A9',
    'color': 'black',
    'descrip': "The single most abundant element in the known universe. Named using the Greek word \"hydro,\" meaning \"water,\" because it makes up two parts of the water molecule."
  },
  {
    'name': 'Helium',
    'symbol': 'He',
    'background-color': '#EFE09F',
    'border-color': '#FF9830',
    'color': 'black',
    'descrip': "Named after the Greek god of the sun, \"Helios,\" because it's presence was discovered to be on the surface of the sun."
  },
  {
    'name': 'Lithium',
    'symbol': 'Li',
    'background-color': '#E4E4DA',
    'border-color': '#505057',
    'color': 'black',
    'descrip': "Named after the Greek word \"lithos,\" meaning \"stone\". Often used in rechargeable batteries."
  },
  {
    'name': 'Beryllium',
    'symbol': 'Be',
    'background-color': '#DEDEDA',
    'border-color': '#50506A',
    'color': 'black',
    'descrip': "Named for the salt from which it was isolated: beryl. Typically used to create copper alloys for use in electrical wiring."
  },
  {
    'name': 'Boron',
    'symbol': 'B',
    'background-color': '#ACAFA0',
    'border-color': '#876750',
    'color': 'black',
    'descrip': "Named for the salt from which it was isolated: borax. Used to create green flares and in insulation fiberglass."
  },
  {
    'name': 'Carbon',
    'symbol': 'C',
    'background-color': '#625858',
    'border-color': '#121212',
    'color': 'black',
    'descrip': "Named after the Latin \"carbo,\" meaning \"charcoal.\" Typically manifests in coal, graphite, and diamond."
  },
  {
    'name': 'Nitrogen',
    'symbol': 'N',
    'background-color': '#FFF',
    'border-color': '#999',
    'color': 'black',
    'descrip': "Named after the Latin \"nitrum,\" a native soda. Makes up the largest percent of air at the Earth's surface."
  },
  {
    'name': 'Oxygen',
    'symbol': 'O',
    'background-color': '#C1C5DB',
    'border-color': '#9093A9',
    'color': 'black',
    'descrip': "Named after the Greek root for 'sour' or 'sharp', because the scientist who identified it believed Oxygen to be the key component of all acids. Makes up the second largest percent of air at the Earth's surface."
  },
  {
    'name': 'Fluorine',
    'symbol': 'F',
    'background-color': '#FFEF82',
    'border-color': '#B8B870',
    'color': 'black',
    'descrip': "Named for the French \"fluere,\" meaning \"flow\". Chlorine Trifluoride is one of the most dangerous, reactive chemicals in the world. It is known to burn concrete, melt sand, and explode on contact with water."
  },
  {
    'name': 'Neon',
    'symbol': 'Ne',
    'background-color': '#EFE09F',
    'border-color': '#EFB830',
    'color': 'black',
    'descrip': "Named after the Latin word for \"new\". Though often seen in neon signs, shows great potential as a refrigerant."
  },
  {
    'name': 'Sodium',
    'symbol': 'Na',
    'background-color': '#EFEFEF',
    'border-color': '#656463',
    'color': 'black',
    'descrip': "Named after the word \"soda\" because it was first isolated from a sample of caustic soda. Commonly found in table salt, in the compound Sodium Chloride (NaCl)."
  },
  {
    'name': 'Magnesium',
    'symbol': 'Mg',
    'background-color': '#EFEFFF',
    'border-color': '#656478',
    'color': 'black',
    'descrip': "Named after the Magnesia district in Thessaly. Because it readily ignites in air, it is used in flash photography and pyrotechnics."
  },
  {
    'name': 'Aluminum',
    'symbol': 'Al',
    'background-color': '#E0E0F3',
    'border-color': '#656070',
    'color': 'black',
    'descrip': "Named for the salt from which it was derived, \"alum\". Once a very precious metal, so much so that the Washington Monument was originally capped with Aluminum."
  },
  {
    'name': 'Silicon',
    'symbol': 'Si',
    'background-color': '#DEDEDA',
    'border-color': '#50506A',
    'color': 'black',
    'descrip': "Named after the Latin \"silex,\" meaning \"flint\". Common component in electronics, as its chemical properties are ideal for creating microscopic transistors."
  },
  {
    'name': 'Phosphorus',
    'symbol': 'P',
    'background-color': '#F5D311',
    'border-color': '#877040',
    'color': 'black',
    'descrip': "Named after the Ancient Greek name for the planet Venus, meaning \"light-carrier.\" It is an essential component of cell structure."
  },
  {
    'name': 'Sulfur',
    'symbol': 'S',
    'background-color': '#F5D311',
    'border-color': '#877040',
    'color': 'black',
    'descrip': "Known as \"brimstone\" in ancient times. A key component in gunpowder, and an element essential for organic life."
  },
  {
    'name': 'Chlorine',
    'symbol': 'Cl',
    'background-color': '#EFDF82',
    'border-color': '#989840',
    'color': 'black',
    'descrip': "Named after the Greek \"chloro,\" meaning \"greenish yellow.\" It is used as a disinfectant and in water treatment plants to provide clean drinking water."
  },
  {
    'name': 'Argon',
    'symbol': 'Ar',
    'background-color': '#BBA3BB',
    'border-color': '#A971A9',
    'color': 'black',
    'descrip': "Named after the Greek \"argos,\" meaning \"inert.\" Used to fill incandescent and fluorescent light bulbs."
  },
  {
    'name': 'Potassium',
    'symbol': 'K',
    'background-color': '#FFDFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the English \"potash,\" meaning \"pot ash.\" Its symbol comes from the Latin \"kalium.\" Commonly found in bananas and potatoes."
  },
  {
    'name': 'Calcium',
    'symbol': 'Ca',
    'background-color': '#E4E4DA',
    'border-color': '#505057',
    'color': 'black',
    'descrip': "Named after the Latin \"calx,\" meaning \"lime.\" It is typically found in limestone, and is the primary component of dental enamel."
  },
  {
    'name': 'Scandium',
    'symbol': 'Sc',
    'background-color': '#EFEFEF',
    'border-color': '#656463',
    'color': 'black',
    'descrip': "Named after the country of Scandinavia. Once used in high-intensity lights, sometimes used to create certain aluminum alloys."
  },
  {
    'name': 'Titanium',
    'symbol': 'Ti',
    'background-color': '#E4E4DA',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the Greek \"titans.\" Used as an alloy in aircraft, bicycle frames, and other lightweight, rigid structures. Titanium oxide is commonly used in house paint."
  },
  {
    'name': 'Vanadium',
    'symbol': 'V',
    'background-color': '#C1C5DB',
    'border-color': '#9093A9',
    'color': 'black',
    'descrip': "Named after the Scandinavian goddess of beauty, \"Vanadis.\" It is used to improve steel, and has been identified in the spectra of several stars and the sun."
  },
  {
    'name': 'Chromium',
    'symbol': 'Cr',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the Greek \"chroma,\" meaning \"color,\" because its known compounds were many different colors. Responsible for the green color of emeralds."
  },
  {
    'name': 'Manganese',
    'symbol': 'Mn',
    'background-color': '#E4E4DA',
    'border-color': '#505057',
    'color': 'black',
    'descrip': "Named after the Latin \"magnes,\" meaning \"magnet,\" for its magnetic properties. Responsible for the purple color of true amethyst."
  },
  {
    'name': 'Iron',
    'symbol': 'Fe',
    'background-color': '#E4E4DA',
    'border-color': '#BF9270',
    'color': 'black',
    'descrip': "It's English name may have been derived from words meaning \"holy metal\" because it was used to make swords for the Crusades. Its chemical symbol comes from the Latin word for Iron, \"ferrum.\""
  },
  {
    'name': 'Cobalt',
    'symbol': 'Co',
    'background-color': '#9EA3BB',
    'border-color': '#6871A9',
    'color': 'black',
    'descrip': "Named after the German \"kobold,\" meaning \"goblin.\" It is essential to vitamin-B12."
  },
  {
    'name': 'Nickel',
    'symbol': 'Ni',
    'background-color': '#E4E4DA',
    'border-color': '#505057',
    'color': 'black',
    'descrip': "Named after the German \"kupfernickel,\" meaning \"Nick's copper\" (as in Saint Nicholas). An American nickel is 25% Nickel."
  },
  {
    'name': 'Copper',
    'symbol': 'Cu',
    'background-color': '#DFCE8F',
    'border-color': '#BF8230',
    'color': 'black',
    'descrip': "Named after the Latin \"cuprum,\" referring to the island of Cyprus. Typically used as wiring. Popular in ancient times for its malleability."
  },
  {
    'name': 'Zinc',
    'symbol': 'Zn',
    'background-color': '#C1C5DB',
    'border-color': '#9093A9',
    'color': 'black',
    'descrip': "Named after its German name, \"zink\". Used with copper to make brass in ancient times. An essential part of animal and plant diets."
  },
  {
    'name': 'Gallium',
    'symbol': 'Ga',
    'background-color': '#EFEFEF',
    'border-color': '#656463',
    'color': 'black',
    'descrip': "Named after the Latin \"Gallia,\" the ancient Celtic peoples who inhabited Gaul, now France. Used in the study of solar neutrinos."
  },
  {
    'name': 'Germanium',
    'symbol': 'Ge',
    'background-color': '#EFEFEF',
    'border-color': '#656463',
    'color': 'black',
    'descrip': 'Named after the Latin "Germania," meaning "Germany". Used in infrared spectroscopes and to detect gamma radiation.'
  },
  {
    'name': 'Arsenic',
    'symbol': 'As',
    'background-color': '#EFDF82',
    'border-color': '#989840',
    'color': 'black',
    'descrip': "Named after the Greek \"arsenikon,\" meaning \"yellow orpiment.\" Deadly poison to humans. Used as a laser material."
  },
  {
    'name': 'Selenium',
    'symbol': 'Se',
    'background-color': '#EF9F9F',
    'border-color': '#EF5C30',
    'color': 'black',
    'descrip': "Named after the Greek \"selene,\" meaning \"moon.\" Useful in photocells and transistors."
  },
  {
    'name': 'Bromine',
    'symbol': 'Br',
    'background-color': '#EF8F8F',
    'border-color': '#CF3C20',
    'color': 'black',
    'descrip': "Named after the Greek \"bromos,\" meaning \"stench.\" Gaseous Bromine is heavier than air; in an open container at room temperature the gas will pour out over the edges. Used as a flame retardant."
  },
  {
    'name': 'Krypton',
    'symbol': 'Kr',
    'background-color': '#FFDFEF',
    'border-color': '#9093A9',
    'color': 'black',
    'descrip': "Named after the Greek \"kryptos,\" meaning \"hidden.\" Used in fluorescent lightbulbs."
  },
  {
    'name': 'Rubidium',
    'symbol': 'Rb',
    'background-color': '#E4C4DA',
    'border-color': '#505057',
    'color': 'black',
    'descrip': "Named after the Latin \"rubidius,\" meaning \"deepest red,\" for it's ruby red color. Used in vacuum tubes and photocells."
  },
  {
    'name': 'Strontium',
    'symbol': 'Sr',
    'background-color': '#EFEFB2',
    'border-color': '#656463',
    'color': 'black',
    'descrip': "Named after the Scottish village of Strontian. Useful in pyrotechnics for its red flame. Used in nuclear fission power plants."
  },
  {
    'name': 'Yttrium',
    'symbol': 'Y',
    'background-color': '#EFEFEF',
    'border-color': '#656463',
    'color': 'black',
    'descrip': "Named after the Swedish village of Ytterby. Used as a red phosphor in television screens. Found in moon rocks."
  },
  {
    'name': 'Zirconium',
    'symbol': 'Zr',
    'background-color': '#EFEFEF',
    'border-color': '#656463',
    'color': 'black',
    'descrip': "Named after the Arabic \"zargun,\" meaning \"gold color.\" Used in the nuclear industry. Useful to protect against corrosion."
  },
  {
    'name': 'Niobium',
    'symbol': 'Nb',
    'background-color': '#C1C5DB',
    'border-color': '#707389',
    'color': 'black',
    'descrip': "Named after the Greek character \"Niobe,\" daughter of Tantalus, because of its close relation to Tantalum. Used in arc-welding rods and superconductive magnets."
  },
  {
    'name': 'Molybdenum',
    'symbol': 'Mo',
    'background-color': '#EFEFEF',
    'border-color': '#656463',
    'color': 'black',
    'descrip': "Named after the Greek \"molybdos,\" meaning \"lead.\" Also known as \"fool's lead\". Used as an alloying agent in steel."
  },
  {
    'name': 'Technetium',
    'symbol': 'Tc',
    'background-color': '#EFEFEF',
    'border-color': '#656463',
    'color': 'black',
    'descrip': "Named after the Greek \"technikos,\" meaning \"artificial.\" It's the first chemical element to be produced artificially."
  },
  {
    'name': 'Ruthenium',
    'symbol': 'Ru',
    'background-color': '#EFEFEF',
    'border-color': '#656463',
    'color': 'black',
    'descrip': "Named after the Latin \"Ruthenia,\" meaning \"Russia.\" Useful as a harder for palladium and platinum, and to prevent corrosion in titanium."
  },
  {
    'name': 'Rhodium',
    'symbol': 'Rh',
    'background-color': '#FFDFEF',
    'border-color': '#616063',
    'color': 'black',
    'descrip': "Named after the Greek \"rhodon,\" meaning \"rose\" or \"pink.\" Used in jewelery and catalytic converters."
  },
  {
    'name': 'Palladium',
    'symbol': 'Pd',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the asteroid \"Pallas,\" named for the Greek goddess of wisdom. Used in watches, surgical instruments, and to decolorize gold into white gold."
  },
  {
    'name': 'Silver',
    'symbol': 'Ag',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "The chemical symbol derives from the Latin \"argentum.\" Used in high capacity batteries, as a paint for printing circuits, and alloyed with copper as silverware."
  },
  {
    'name': 'Cadmium',
    'symbol': 'Cd',
    'background-color': '#C1C5DB',
    'border-color': '#707399',
    'color': 'black',
    'descrip': "Named after the Greek \"kadmeia,\" meaning \"calamine.\" Used as phosphors in television tubes, and in control rods of nuclear reactors."
  },
  {
    'name': 'Indium',
    'symbol': 'In',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after its indigo color. Useful as an alloying agent, and to make mirrors."
  },
  {
    'name': 'Tin',
    'symbol': 'Sn',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "The chemical symbol comes from the Latin word for tin, \"stannum.\" Used to create the copper alloy, bronze."
  },
  {
    'name': 'Antimony',
    'symbol': 'Sb',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Possibly named from the Greek \"anti\" and \"monos,\" meaning \"not alone.\" Known during the Medieval Era to be the death of many monks who did not take enough care while gardening."
  },
  {
    'name': 'Tellurium',
    'symbol': 'Te',
    'background-color': '#C7A770',
    'border-color': '#876730',
    'color': 'black',
    'descrip': "Named after the Latin \"tellus,\" meaning \"earth.\" Used in ceramics, semiconductors, and as an alloying agent."
  },
  {
    'name': 'Iodine',
    'symbol': 'I',
    'background-color': '#DF8F9F',
    'border-color': '#876730',
    'color': 'black',
    'descrip': "Named after the Greek \"iodes,\" meaning \"violet.\" Useful as a disinfectant, and is added to table salt for nutrition."
  },
  {
    'name': 'Xenon',
    'symbol': 'Xe',
    'background-color': '#EFDFEF',
    'border-color': '#9093A9',
    'color': 'black',
    'descrip': "Named after the Greek \"xenos,\" meaning \"stranger.\" Used in electron tubes."
  },
  {
    'name': 'Caesium',
    'symbol': 'Cs',
    'background-color': '#F5F391',
    'border-color': '#838260',
    'color': 'black',
    'descrip': "Also spelled \"Cesium,\" named after the Latin \"caesius,\" meaning \"sky blue.\" Used in atomic clocks, and has potential for use in ion propulsion."
  },
  {
    'name': 'Barium',
    'symbol': 'Ba',
    'background-color': '#EFEFB2',
    'border-color': '#656463',
    'color': 'black',
    'descrip': "Named after the Greek \"barys,\" meaning \"heavy.\" Used in making rubber and glass, and in x-ray diagnostics."
  },
  {
    'name': 'Lanthanum',
    'symbol': 'La',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the Greek \"lanthanein,\" meaning \"to lie hidden.\" Used in film projection and to create cast iron."
  },
  {
    'name': 'Cerium',
    'symbol': 'Ce',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the asteroid \"Ceres,\" the Greek goddess of agriculture. Used in \"self-cleaning\" ovens and as a glass polishing agent."
  },
  {
    'name': 'Praseodymium',
    'symbol': 'Pr',
    'background-color': '#EFEFEF',
    'border-color': '#656463',
    'color': 'black',
    'descrip': "Named after the Greek \"prasios didymos,\" meaning \"green twin.\" It naturally forms a green oxide unless exposed to air. Used in the film industry in carbon arc lights."
  },
  {
    'name': 'Neodymium',
    'symbol': 'Nd',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the Greek \"neos didymos,\" meaning \"new twin.\" Used in very powerful permanent magnets."
  },
  {
    'name': 'Promethium',
    'symbol': 'Pm',
    'background-color': '#EFEFFF',
    'border-color': '#656478',
    'color': 'black',
    'descrip': "Named after the tragic Greek hero Prometheus. A radioactive element, Promethium salts glow blue or green in the dark."
  },
  {
    'name': 'Samarium',
    'symbol': 'Sm',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the mineral from which it was first isolated, \"samarskite.\" Used in electronics and to create lasers and masers."
  },
  {
    'name': 'Europium',
    'symbol': 'Eu',
    'background-color': '#EFEFB2',
    'border-color': '#656463',
    'color': 'black',
    'descrip': "Named after the continent of Europe. Used in the red phosphor of television tubes."
  },
  {
    'name': 'Gadolinium',
    'symbol': 'Gd',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after a Finnish chemist, J. Gadolin. Used in making tv tubes, enhancing MRI images, and in compact disks."
  },
  {
    'name': 'Terbium',
    'symbol': 'Tb',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the Swedish village of Ytterby. Useful as a laser material and as a phosphor in tv tubes."
  },
  {
    'name': 'Dysprosium',
    'symbol': 'Dy',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the Greek \"dysprositos,\" meaning \"difficult to acquire.\" Used to make laser materials and in compact disks."
  },
  {
    'name': 'Holmium',
    'symbol': 'Ho',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the Greek for Sweden, \"Holmia.\" Used in metal alloys, and has an excellent potential for maintaining a magnetic field."
  },
  {
    'name': 'Erbium',
    'symbol': 'Er',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the Swedish village of Ytterby. Used in the nuclear industry and as an alloying agent."
  },
  {
    'name': 'Thulium',
    'symbol': 'Tm',
    'background-color': '#E4E4DA',
    'border-color': '#505057',
    'color': 'black',
    'descrip': "Named after the ancient name for Scandinavia, \"Thule.\""
  },
  {
    'name': 'Ytterbium',
    'symbol': 'Yb',
    'background-color': '#EFEFB2',
    'border-color': '#656463',
    'color': 'black',
    'descrip': "Named after the Swedish village of Ytterby."
  },
  {
    'name': 'Lutetium',
    'symbol': 'Lu',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the Roman name for the city of Paris, \"Lutetia Parisiorum.\""
  },
  {
    'name': 'Hafnium',
    'symbol': 'Hf',
    'background-color': '#E4E4DA',
    'border-color': '#505057',
    'color': 'black',
    'descrip': "Named after the Latin name for the city of Copenhagen, \"Hafnia.\" Used in nuclear reactor control rods."
  },
  {
    'name': 'Tantalum',
    'symbol': 'Ta',
    'background-color': '#C1C5DB',
    'border-color': '#707389',
    'color': 'black',
    'descrip': "Named after the mythical Greek Tantalus, son of Zeus who was banished to Tartarus. Useful for strengthening steel."
  },
  {
    'name': 'Tungsten',
    'symbol': 'W',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the Swedish \"tung sten,\" meaning \"heavy stone.\" Also known as \"Wolfram,\" from which it derives its chemical symbol."
  },
  {
    'name': 'Rhenium',
    'symbol': 'Re',
    'background-color': '#DEDEDA',
    'border-color': '#50506A',
    'color': 'black',
    'descrip': "Named after Greek name for the Rhine river, \"Rhenus.\" Useful as an alloying agent and in superconductors."
  },
  {
    'name': 'Osmium',
    'symbol': 'Os',
    'background-color': '#DEDEDA',
    'border-color': '#50508A',
    'color': 'black',
    'descrip': "Named after the Greek \"osme,\" meaning \"smell.\" Used to make fountain pen tips, electrical contacts, and in alloys for implants such as pacemakers."
  },
  {
    'name': 'Iridium',
    'symbol': 'Ir',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the Greek \"iris,\" meaning \"rainbow.\" Used to make the standard metre bar in Paris."
  },
  {
    'name': 'Platinum',
    'symbol': 'Pt',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the Spanish \"platina,\" meaning \"little silver.\" Used in jewelery, dentistry, and catalytic converters."
  },
  {
    'name': 'Gold',
    'symbol': 'Au',
    'background-color': '#EFEF62',
    'border-color': '#A89840',
    'color': 'black',
    'descrip': "Its chemical symbol comes from the Latin word for gold, \"aurum.\" The most malleable and ductile known metal, it doesn't tarnish in air."
  },
  {
    'name': 'Mercury',
    'symbol': 'Hg',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Also known as \"quicksilver,\" its chemical symbol derives from the Latin \"hydrargyrum,\" meaning \"liquid silver.\" Mercury vapor is toxic, and no longer used in thermometers."
  },
  {
    'name': 'Thallium',
    'symbol': 'Tl',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the Greek \"thallos,\" meaning \"green twig.\" Once used as rodenticide."
  },
  {
    'name': 'Lead',
    'symbol': 'Pb',
    'background-color': '#EFEFEF',
    'border-color': '#656463',
    'color': 'black',
    'descrip': "Named after the Latin for lead, \"plumbum.\" Though highly toxic, its sweet taste made it a favorite sweetener of the Romans."
  },
  {
    'name': 'Bismuth',
    'symbol': 'Bi',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Its name is of uncertain origin. Used in fire detection and extinguishing systems."
  },
  {
    'name': 'Polonium',
    'symbol': 'Po',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Discovered by Marie Curie, and named after her home country, Poland. Used to remove static charge in textile mills, and as thermoelectric power in man-made satellites."
  },
  {
    'name': 'Astatine',
    'symbol': 'At',
    'background-color': '#CDCDC0',
    'border-color': '#9D9D90',
    'color': 'black',
    'descrip': "Named after the Greek \"astatos,\" meaning \"unstable.\" All of its known isotopes are radioactive."
  },
  {
    'name': 'Radon',
    'symbol': 'Rn',
    'background-color': '#FFF',
    'border-color': '#999',
    'color': 'black',
    'descrip': "Named for its radioactive, \"glowing\" properties. Used in earthquake prediction and radiation therapy."
  },
  {
    'name': 'Francium',
    'symbol': 'Fr',
    'background-color': '#EFEFEF',
    'border-color': '#656463',
    'color': 'black',
    'descrip': "Named after the country of France. Found in uranium minerals, it can be isolated by bombarding it with Thorium."
  },
  {
    'name': 'Radium',
    'symbol': 'Ra',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the Latin \"radius,\" meaning \"ray,\" because of its radioactive properties. It can emit alpha, beta, and gamma rays."
  },
  {
    'name': 'Actinium',
    'symbol': 'Ac',
    'background-color': '#DEDEDD',
    'border-color': '#50508A',
    'color': 'black',
    'descrip': "Named after the Greek \"aktinos,\" meaning \"ray.\" Highly radioactive, it's often used in thermoelectric power and as a source of neutrons."
  },
  {
    'name': 'Thorium',
    'symbol': 'Th',
    'background-color': '#EFEFEF',
    'border-color': '#555',
    'color': 'black',
    'descrip': "Named after the Scandinavian god, Thor. Useful as a source of nuclear fission power."
  },
  {
    'name': 'Proactinium',
    'symbol': 'Pa',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the Greek \"protos,\" meaning \"first.\" Acts as a superconductor at extremely low temperatures."
  },
  {
    'name': 'Uranium',
    'symbol': 'U',
    'background-color': '#EFEFEF',
    'border-color': '#555',
    'color': 'black',
    'descrip': "Named after the planet Uranus, often equated to the Greek Ouranos. Gives glass a distinct yellow green color and fluorescent glow. Useful as a fuel for nuclear fission."
  },
  {
    'name': 'Neptunium',
    'symbol': 'Np',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the planet Neptune, because it follows Uranium in the periodic table. Used in neutron detection instruments."
  },
  {
    'name': 'Plutonium',
    'symbol': 'Pu',
    'background-color': '#FAFAFA',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the planet Pluto, because it follows Neptunium in the periodic table. Used in pacemakers, and as a fuel for nuclear fission."
  },
  {
    'name': 'Americanium',
    'symbol': 'Am',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the country of the United States of America. Used in smoke detectors and as a source of gamma radiation."
  },
  {
    'name': 'Curium',
    'symbol': 'Cm',
    'background-color': '#FAFAFA',
    'border-color': '#A971A9',
    'color': 'black',
    'descrip': "Named after Marie Curie. Used as the power source in NASA's Mars rover."
  },
  {
    'name': 'Berkelium',
    'symbol': 'Bk',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the city of Berkeley, California."
  },
  {
    'name': 'Californium',
    'symbol': 'Cf',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the US state, California. Useful in moisture gauges and as a source of neutron radiation."
  },
  {
    'name': 'Einsteinium',
    'symbol': 'Es',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the physicist, Albert Einstein. A synthetic element, too little has been produced to have any practical uses."
  },
  {
    'name': 'Fermium',
    'symbol': 'Fm',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the Italian physicist, Enrico Fermi. A synthetic element, too little has been produced to have any practical uses."
  },
  {
    'name': 'Mendelevium',
    'symbol': 'Md',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the Russian chemist who devised what would become the modern periodic table of elements, Dmitri Mendeleev. A synthetic element, too little has been produced to have any practical uses."
  },
  {
    'name': 'Nobelium',
    'symbol': 'No',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the Swedish chemist, Alfred Nobel. A synthetic element, too little has been produced to have any practical uses."
  },
  {
    'name': 'Lawrencium',
    'symbol': 'Lr',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after Ernest Lawrence, inventor of the cyclotron. A synthetic element, too little has been produced to have any practical uses."
  },
  {
    'name': 'Rutherfordium',
    'symbol': 'Rf',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the New Zealand chemist and physicist, Ernst Rutherford. A synthetic element, too little has been produced to have any practical uses."
  },
  {
    'name': 'Dubnium',
    'symbol': 'Db',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the Joint Nuclear Institute at Dubna. A synthetic element, too little has been produced to have any practical uses."
  },
  {
    'name': 'Seaborgium',
    'symbol': 'Sg',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the American nuclear chemist, Glenn T. Seaborg. A synthetic element, too little has been produced to have any practical uses."
  },
  {
    'name': 'Bohrium',
    'symbol': 'Bh',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the Danish physicist, Niels Bohr. A synthetic element, too little has been produced to have any practical uses."
  },
  {
    'name': 'Hassium',
    'symbol': 'Hs',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the Latin for the German state, \"Hassias.\" A synthetic element, too little has been produced to have any practical uses."
  },
  {
    'name': 'Meitnerium',
    'symbol': 'Mt',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the Austrian physicist, Lise Meitner. A synthetic element, too little has been produced to have any practical uses."
  },
  {
    'name': 'Darmstadtium',
    'symbol': 'Ds',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after its place of discovery, Darmstadt, Germany. A synthetic element, too little has been produced to have any practical uses."
  },
  {
    'name': 'Roentgenium',
    'symbol': 'Rg',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Its proposed name comes from Wilhelm Conrad Roentgen, who discovered x-rays in 1895. A synthetic element, too little has been produced to have any practical uses."
  },
  {
    'name': 'Copernicium',
    'symbol': 'Cn',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Its proposed name comes from the Renaissance mathematician and astronomer, Nicolaus Copernicus. A synthetic element, too little has been produced to have any practical uses."
  },
  {
    'name': 'Ununtrium',
    'symbol': 'Uut',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "No name has yet been proposed for this element as its discovery has not been officially confirmed."
  },
  {
    'name': 'Flerovium',
    'symbol': 'Fl',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the Flerov Laboratory of Nuclear Reactions. A synthetic element, too little has been produced to have any practical uses."
  },
  {
    'name': 'Ununpentium',
    'symbol': 'Uup',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "No name has yet been proposed for this element as its discovery has not been officially confirmed."
  },
  {
    'name': 'Livermorium',
    'symbol': 'Lv',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "Named after the Lawrence Livermore National Laboratory. A synthetic element, too little has been produced to have any practical uses."
  },
  {
    'name': 'Ununseptium',
    'symbol': 'Uus',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "No name has yet been proposed for this element as its discovery has not been officially confirmed."
  },
  {
    'name': 'Ununoctium',
    'symbol': 'Uuo',
    'background-color': '#EFEFEF',
    'border-color': '#818083',
    'color': 'black',
    'descrip': "No name has yet been proposed for this element as its discovery has not been officially confirmed."
  },
];
