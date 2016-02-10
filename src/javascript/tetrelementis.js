var CHEMICAL_ELEMENTS = {
  0: {'background-color': '#F1EEFA',
      'border-color': '#AAA',
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

var DROP_DELAY = 300;

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
Tetronimo.prototype.blit = function(element) {
  for(var block in this.blocks) {
    var currentBlock = this.blocks[block]
    tetrisBoard[currentBlock.y][currentBlock.x] = element;
  }
}
Tetronimo.prototype.drop = function() {
  this.blit(0);
  this.row++;
  for(var block in this.blocks) {
    this.blocks[block].y++;
  }
  this.blit(this.element);
};

var View = function(args) {
  this.context = document.querySelector('canvas').getContext('2d');
  this.debug = "debug string";
}
View.prototype.drawBoard = function(board) {
  var context = this.context
  context.lineWidth = 4;
  context.font = "20px Verdana";

  board.forEach(function(row, rIndex) {
    row.forEach(function(col, cIndex) {
      context.fillStyle = CHEMICAL_ELEMENTS[col]['background-color'];
      context.strokeStyle = CHEMICAL_ELEMENTS[col]['border-color'];

      context.fillRect((cIndex * BLOCK_SPACING_WIDTH) + 5, (rIndex * BLOCK_SPACING_HEIGHT) + 5, BLOCK_WIDTH, BLOCK_HEIGHT);
      context.strokeRect((cIndex * BLOCK_SPACING_WIDTH) + 5, (rIndex * BLOCK_SPACING_HEIGHT) + 5, BLOCK_WIDTH, BLOCK_HEIGHT);
      context.fillStyle = CHEMICAL_ELEMENTS[col]['color'];
      context.fillText(CHEMICAL_ELEMENTS[col].symbol, (cIndex * BLOCK_SPACING_WIDTH) + (BLOCK_SPACING_WIDTH / 2) - 8, (rIndex * BLOCK_SPACING_HEIGHT) + (BLOCK_SPACING_HEIGHT / 2) + 8);
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
  BLOCK_SPACING_HEIGHT = canvas.getAttribute('height') / 20;
  BLOCK_SPACING_WIDTH = canvas.getAttribute('width') / 10;
  BLOCK_HEIGHT = BLOCK_SPACING_HEIGHT - 10;
  BLOCK_WIDTH = BLOCK_SPACING_WIDTH - 10;

  var gameView = new View();
  var lineBlock = new Tetronimo({element: 1, blocks: tetronimoShapes.line});
  
  gameView.drawBoard(tetrisBoard);
  var counter = 0;
  var dropLoop = setInterval(function() {
    if(counter > 5) {
      clearInterval(dropLoop);
      return;
    }
    lineBlock.drop();
    gameView.drawBoard(tetrisBoard);
    counter++;
  }, DROP_DELAY);
});