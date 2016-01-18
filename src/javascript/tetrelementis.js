var CHEMICAL_ELEMENTS = {
  0: {'background-color': '#F1EEFA',
      'border-color': '#F1EEFA',
      'color': '#F1EEFA',
      'name': 'n/a'},

  H: {'background-color': '#dde',
      'border-color': '#888',
      'color': 'black',
      'name': 'hydrogen'},

  He: {'background-color': '#edd',
      'border-color': '#888',
      'color': 'black',
      'name': 'helium'},
};

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

var tetrisBoard = [];

for(var row = 0; row < 20; row++) {
  tetrisBoard[row] = [];
  for(var col = 0; col < 10; col++) {
    tetrisBoard[row][col] = 0;
  }
};

var setElementStyles = function(element, htmlNode) {
  for(var prop in element) {
    if(element.hasOwnProperty(prop)) {
      htmlNode.css(prop, element[prop]);
    }
  }
}

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

$(document).ready(function() {
});
