var CHEMISTRY_URL = "http://www.webelements.com/";
var FONT_SIZE = 11;
var BLOCK_FONT = "px monospace";

// Delay values in milliseconds
var FAST_DROP = 50;
var SLIDE_DELAY = 100;
var ROTATE_DELAY = 200;
var CLEAR_DELAY = 1;
var DROP_DELAY = {
  0: 900,
  1: 848,
  2: 797,
  3: 747,
  4: 698,
  5: 650,
  6: 603,
  7: 557,
  8: 512,
  9: 468,
  10: 425,
  11: 383,
  12: 342,
  13: 302,
  14: 263,
  15: 225,
  16: 188,
  17: 152,
  18: 117,
  19: 83,
  20: 50
}
var GAME_MODES = {
  0: 'Marathon',
  1: 'Fixed Level'
}

var genModeMenu = function(mode) {
  var menuString = '<select>';
  for(var prop in GAME_MODES) {
    if(GAME_MODES.hasOwnProperty(prop)) {
      menuString += '<option';
      if(GAME_MODES[prop] == mode) {
        menuString += ' selected';
      }
      menuString += '>' + GAME_MODES[prop] + '</option>';
    }
  }
  menuString += '</select>';
  return menuString;
};

var genLevelMenu = function(level_num) {
  var menuString = '<select>';
  for(var i = 0; i <= 20; i++) {
    menuString += '<option';
    if(i == level_num) {
      menuString += ' selected';
    }
    menuString += '>' + i + '</option>';
  }
  menuString += '</select>';
  return menuString;
};

var GRID_HEIGHT = 20;
var GRID_WIDTH = 10;

var BLOCK_WIDTH, BLOCK_HEIGHT;
var BLOCK_SPACING_WIDTH, BLOCK_SPACING_HEIGHT;

var TETRINIMO_TEMPLATES = {
  jBlock: [
    'xxx',
    '  x'],
  lBlock: [
    'xxx',
    'x  '],
  square: [
    'xx',
    'xx'],
  sBlock: [
    ' xx',
    'xx'],
  zBlock: [
    'xx ',
    ' xx'],
  line:   [
    'xxxx'],
  tBlock: [
    'xxx',
    ' x ']
};
var PENTINIMO_TEMPLATES = {
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
    'x ']
}

var scoreToLevel = function(score) {
  return Math.floor(score / 10);
};

var processTetrinimos = function(templates) {
  var tetraShape = new Object;
  for(var shape in templates) {
    if( templates.hasOwnProperty(shape)) {
      tetraShape[shape] = new Array;
      var currentShape = templates[shape];
      for(var row in currentShape) {
        for(var col in currentShape[row]) {
          if(currentShape[row][col] == 'x') {
            tetraShape[shape].push({x: parseInt(col, 10),
                                    y: parseInt(row, 10)});
          }
        }
      }
    }
  }
  return tetraShape
}
var TETRINIMO_SHAPES = {
  'Marathon': processTetrinimos(TETRINIMO_TEMPLATES),
  'Pentathlon': processTetrinimos(PENTINIMO_TEMPLATES)
};

var KEY_CODES = {
  8: 'backspace',
  32: 'space',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
}

var PERIODIC_TABLE = [
  [1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  2],
  [3,  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  5,  6,  7,  8,  9,  10],
  [11, 12, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
  [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
  [55, 56, 0, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
  [87, 88, 0, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118],
  [0,  0,  57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 0],
  [0,  0,  89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 0]
];
