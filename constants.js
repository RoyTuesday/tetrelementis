const BLOCK_SPACING = 30;
const BLOCK_PADDING = 5;
const BLOCK_SIZE = BLOCK_SPACING - (BLOCK_PADDING * 2);
const CANVAS_WIDTH = 900;
const CANVAS_HEIGHT = 630;

var KEY_CODES = [,,,,,,,,
  'backspace',
  'tab',,,,
  'enter',,,
  'shift',
  'control',
  'alt',,
  'capslock',,,,,,,,,,,,
  ' ',
  'pageup',
  'pagedown',
  'end',
  'home',,,,,,,,,
  'insert',
  'delete',,
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',,
  ';',,
  '=',,,,
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  '-',,,,,,,,,,,,,,,
  ',',,
  '.',
  '/',
  '`',,,,,,,,,,,,,,,,,,,,,,,,,,,
  '[',
  '\\',
  ']',
  '\'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
];

const CHEMISTRY_URL = "http://www.webelements.com/";
const FONT_SIZE = 11;
const BLOCK_FONT = "px monospace";

// Delay values in milliseconds
const FAST_DROP = 50;
const SLIDE_DELAY = 100;
const ROTATE_DELAY = 200;
var DROP_DELAY = [
  900,
  848,
  797,
  747,
  698,
  650,
  603,
  557,
  512,
  468,
  425,
  383,
  342,
  302,
  263,
  225,
  188,
  152,
  117,
  83,
  50
]
var GAME_MODES = [
  'Marathon',
  'Fixed Level',
  'Pentathlon'
];

function convertToDisplayKey(key) {
  switch (key) {
    case ' '          : return 'space';
    case 'ArrowLeft'  : return '←';
    case 'ArrowRight' : return '→';
    case 'ArrowDown'  : return '↓';
    case 'ArrowUp'    : return '↑';
    default: return key.toUpperCase();
  }
}

var PENTOMINO_TEMPLATES = {
  wBlock: [
    'xx ',
    ' xx',
    '  x'],
  lowT: [
    ' x ',
    'xx ',
    ' xx'],
  kBlock: [
    ' x ',
    ' xx',
    'xx '],
  cross: [
    ' x ',
    'xxx',
    ' x '],
  uBlock: [
    'xx',
    'x ',
    'xx'],
  pBlock: [
    'xx',
    'xx',
    'x '],
  qBlock: [
    'xx',
    'xx',
    ' x'],
  capT: [
    'x  ',
    'xxx',
    'x'],
  corner: [
    'xxx',
    'x  ',
    'x  '],
  sBlock: [
    ' xxx',
    'xx'],
  zBlock: [
    'xxx ',
    '  xx'],
  leftT: [
    'xxxx',
    ' x  '],
  rightT: [
    'xxxx',
    '  x '],
  lBlock: [
    'xx',
    ' x',
    ' x',
    ' x'],
  jBlock: [
    'xx',
    'x ',
    'x ',
    'x '],
  line: [
    'xxxxx']
}
var TETROMINO_SHAPES = {
  jBlock: [4, 3, 5,15],
  // xxx
  //   x
  lBlock: [4, 3, 5,13],
  // xxx
  // x
  square: [4, 5,14,15],
  // xx
  // xx
  sBlock: [4, 5,13,14],
  //  xx
  // xx
  zBlock: [4, 3,14,15],
  // xx
  //  xx
  line  : [4, 3, 5, 6],
  // xxxx
  tBlock: [4, 3, 5,14],
  // xxx
  //  x
}

var PERIODIC_TABLE = [
   1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  2,
   3,  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  5,  6,  7,  8,  9, 10,
  11, 12, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
  55, 56,  0, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86,
  87, 88,  0,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,
   0,  0, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,  0,
   0,  0, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,100,101,102,103,  0
];

function generateRandomElements(elements) {
  var random = [];
  var aNums = [];
  for (var i = 1; i < elements.length; i++) aNums.push(i);

  while (aNums.length > 0) random.push(aNums.splice((Math.random() * aNums.length) >> 0, 1)[0]);

  return random;
}
var elementsQueue = generateRandomElements(CHEMICAL_ELEMENTS);

function generateRandomShapes(template) {
  var random = [];
  var triple = [];

  for (var shape in template) if (template.hasOwnProperty(shape)) triple = triple.concat([shape, shape, shape]);

  while (triple.length > 0) random.push(triple.splice((Math.random() * triple.length) >> 0, 1)[0]);

  return random;
}
var shapesQueue = generateRandomShapes(TETROMINO_SHAPES);
