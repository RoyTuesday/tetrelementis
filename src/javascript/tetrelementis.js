var CHEMICAL_ELEMENTS = {
  0: {'background-color': '#F1EEFA',
      'border-color': '#888',
      'color': '#F1EEFA',
      'name': 'n/a',
      'symbol': ''},

  1: {'background-color': '#dde',
      'border-color': '#888',
      'color': 'black',
      'name': 'hydrogen',
      'symbol': 'H'},

  2: {'background-color': '#edd',
      'border-color': '#888',
      'color': 'black',
      'name': 'helium',
      'symbol': 'He'},
};

var BLOCK_WIDTH, BLOCK_HEIGHT;
var BLOCK_SPACING_WIDTH, BLOCK_SPACING_HEIGHT;

var TETRONIMO_TEMPLATES = {
  jBlock: ['xx',
           'x ',
           'x '],
  lBlock: ['xx',
           ' x',
           ' x'],
  square: ['xx',
           'xx'],
  sBlock: ['x ',
           'xx',
           ' x'],
  zBlock: [' x',
           'xx',
           'x '],
  line:   ['x',
           'x',
           'x',
           'x'],
  tBlock: ['xxx',
           ' x ']
};
var processTetronimos = function() {
  var tetraShape = new Object;
  for(var shape in TETRONIMO_TEMPLATES) {
    if( TETRONIMO_TEMPLATES.hasOwnProperty(shape)) {
      tetraShape[shape] = new Array;
      var currentShape = TETRONIMO_TEMPLATES[shape];
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
var tetronimoShapes = processTetronimos();

var tetrisBoard = new Array;
for(var row = 0; row < 20; row++) {
  tetrisBoard[row] = new Array;
  for(var col = 0; col < 10; col++) {
    tetrisBoard[row][col] = 0;
  }
};

var Tetronimo = function(args) {
  this.element = args.element;
  this.blocks = args.blocks;
  this.row = 0;
  this.col = 5;

  for(var block in this.blocks) {
    this.blocks[block].y += this.row;
    this.blocks[block].x += this.col;
  }
}
Tetronimo.prototype.blit = function() {
  for(var block in this.blocks) {
    var currentBlock = this.blocks[block]
    tetrisBoard[currentBlock.y][currentBlock.x] = this.element;
  }
}
Tetronimo.prototype.drop = function() {
  this.row++;
  for(var block in this.blocks) {
    this.blocks[block].y++;
  }
  this.blit();
};

var View = function(args) {
  this.context = document.querySelector('canvas').getContext('2d');
  this.debug = "debug string";
}
View.prototype.drawBoard = function(board) {
  var context = this.context
  context.lineWidth = 2;
  context.font = "20px monospace";

  board.forEach(function(row, rIndex) {
    row.forEach(function(col, cIndex) {
      context.fillStyle = CHEMICAL_ELEMENTS[col]['background-color'];
      context.strokeStyle = CHEMICAL_ELEMENTS[col]['border-color'];

      context.fillRect(cIndex * BLOCK_WIDTH, rIndex * BLOCK_HEIGHT, BLOCK_WIDTH, BLOCK_HEIGHT);
      context.strokeRect(cIndex * BLOCK_WIDTH, rIndex * BLOCK_HEIGHT, BLOCK_WIDTH, BLOCK_HEIGHT);
      context.fillStyle = CHEMICAL_ELEMENTS[col]['color'];
      context.fillText(CHEMICAL_ELEMENTS[col].symbol, (cIndex * BLOCK_WIDTH) + 20, (rIndex * BLOCK_HEIGHT) + 20);
    });
  });
}

var ready = function(fn) {
  if(document.readyState != 'loading') {
    fn();
  }
  else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
ready(function() {
  var canvas = document.querySelector('canvas');
  BLOCK_WIDTH = canvas.getAttribute('width') / 10;
  BLOCK_HEIGHT = canvas.getAttribute('height') / 20;

  var gameView = new View();
  var lineBlock = new Tetronimo({element: 1, blocks: tetronimoShapes.line});
  
  gameView.drawBoard(tetrisBoard);
  lineBlock.blit();
  gameView.drawBoard(tetrisBoard);
});