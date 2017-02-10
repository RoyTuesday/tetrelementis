const CHEMISTRY_URL = "http://www.webelements.com/";
const FONT_SIZE = 11;
const BLOCK_FONT = "px monospace";

// Delay values in milliseconds
const FAST_DROP = 50;
const SLIDE_DELAY = 100;
const ROTATE_DELAY = 200;
const CLEAR_DELAY = 1;
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
]
const REPEAT_TETROMINO_LIMIT = 4;

const GRID_HEIGHT = 20;
const GRID_WIDTH = 10;

var BLOCK_WIDTH;
var BLOCK_HEIGHT;
var BLOCK_SPACING_WIDTH;
var BLOCK_SPACING_HEIGHT;

var TETROMINO_TEMPLATES = {
  jBlock: [
    'xxx', // 3,4,5,15
    '  x'],
  lBlock: [
    'xxx', // 3,4,5,13
    'x  '],
  square: [
    'xx', // 4,5,14,15
    'xx'],
  sBlock: [
    ' xx', // 4,5,13,14
    'xx'],
  zBlock: [
    'xx ', // 3,4,14,15
    ' xx'],
  line:   [
    'xxxx'],// 3,4,5,6
  tBlock: [
    'xxx', // 3,4,5,14
    ' x ']
};
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

var processTetrominos = function(templates) {
  var tetrominoShape = new Array;
  var index = 0;
  for(var shape in templates) {
    if(templates.hasOwnProperty(shape)) {
      tetrominoShape.push(new Array);
      var currentShape = templates[shape];
      for(var row in currentShape) {
        for(var col in currentShape[row]) {
          if(currentShape[row][col] == 'x') {
            tetrominoShape[index].push({x: parseInt(col, 10),
                                    y: parseInt(row, 10)});
          }
        }
      }
    }
    index++;
  }
  return tetrominoShape
}
// var TETROMINO_SHAPES = {
//   'Marathon': processTetrominos(TETROMINO_TEMPLATES),
//   'Fixed Level': processTetrominos(TETROMINO_TEMPLATES),
//   'Pentathlon': processTetrominos(PENTOMINO_TEMPLATES)
// };
var TETROMINO_SHAPES = {
  jBlock: [0,1,2,6], // 3, 4, 5,15
  // xxx
  //   x
  lBlock: [0,1,2,4], // 3, 4, 5,13
  // xxx
  // x
  square: [1,2,5,6], // 4, 5,14,15
  // xx
  // xx
  sBlock: [1,2,4,5], // 4, 5,13,14
  //  xx
  // xx
  zBlock: [0,1,5,6], // 3, 4,14,15
  // xx
  //  xx
  line:   [0,1,2,3], // 3, 4, 5, 6
  // xxxx
  tBlock: [0,1,2,5], // 3, 4, 5,14
  // xxx
  //  x
}

var KEY_CODES_TO_ACTIONS = {
  32: 'space',
  37: 'left',
  39: 'right',
  40: 'down',
  88: 'counter',
  90: 'clock'
}

var PERIODIC_TABLE = [
  [ 1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  2],
  [ 3,  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  5,  6,  7,  8,  9, 10],
  [11, 12, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
  [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
  [55, 56,  0, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
  [87, 88,  0,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118],
  [ 0,  0, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,  0],
  [ 0,  0, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,100,101,102,103,  0]
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

var getRandomShape = function(gameMode, limiter) {
  var length = TETROMINO_SHAPES[gameMode].length;
  var shapes = new Object;
  TETROMINO_SHAPES[gameMode].forEach(function(shape, index) {
    if(limiter.shapeIndex == index && limiter.count == REPEAT_TETROMINO_LIMIT) {
      limiter.shapeIndex = null;
      limiter.count = 0;
    }
    else {
      shapes[index] = shape;
    }
  });

  var randNum = Math.floor(Math.random() * length);

  if(shapes[randNum] === undefined) {
    randNum += randNum > (length / 2) ? -1 : 1;
  }

  if(limiter.shapeIndex == randNum) {
    limiter.count++;
  }
  else {
    limiter.shapeIndex = randNum;
    limiter.count = 1;
  }

  return shapes[randNum];
}

var generateEmptyBoard = function() {
  emptyBoard = new Array;
  for(var y = 0; y < 4; y++) {
    var row = new Array;
    for(var x = 0; x < 4; x++) {
      row.push(0);
    }
    emptyBoard.push(row);
  }
  return emptyBoard;
}
var genModeMenu = function(mode) {
  var menuString = '<select id="game-mode-dropdown">';
  for (var prop in GAME_MODES) {
    if (GAME_MODES.hasOwnProperty(prop)) {
      menuString += '<option';
      if (GAME_MODES[prop] == mode) {
        menuString += ' selected';
      }
      menuString += '>' + GAME_MODES[prop] + '</option>';
    }
  }
  menuString += '</select>';
  return menuString;
}
var genLevelMenu = function(level_num) {
  var menuString = '<select id="game-level-dropdown">';
  for(var i = 0; i <= 20; i++) {
    menuString += '<option';
    if(i == level_num) {
      menuString += ' selected';
    }
    menuString += '>' + i + '</option>';
  }
  menuString += '</select>';
  return menuString;
}
