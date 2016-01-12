var CHEMICAL_ELEMENTS = {
  0: {'background-color': '#F1EEFA', 'color': '#F1EEFA', name: 'hydrogen'},
  1: {'background-color': '#dde', 'color': 'black', name: 'hydrogen'},
  2: {'background-color': '#edd', 'color': 'black', name: 'helium'},
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
            tetraShape[shape].push({x: col, y: row});
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
}

var drawBoard = function() {
  for(var row = 0; row < 20; row++) {
    $('main').append('<section id="row-' + row + '"></section>');
  }
  for(var col = 0; col < 10; col++) {
    $('section').append('<div class="col-' + col + '">0</div>');
  }
};

var updateBoard = function() {
  for(var row = 0; row < 20; row++) {
    for(var col = 0; col < 10; col++) {
      var currentNode = $('#row-' + row + ' .col-' + col);

      currentNode.text(tetrisBoard[row][col]);
      setElementStyles(CHEMICAL_ELEMENTS[tetrisBoard[row][col]], currentNode);
    }
  }
}

var setElementStyles = function(element, htmlNode) {
  for(var prop in element) {
    if(element.hasOwnProperty(prop)) {
      console.log(prop);
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
    if(this.blocks.hasOwnProperty(block)) {
      this.blocks.block.y += row;
      this.blocks.block.x += col;
    }
  }
}

Tetronimo.prototype.blit = function() {
  for(var block in this.blocks) {
    if(this.blocks.hasOwnProperty(block)) {
      tetrisBoard[block.y][block.x] = this.element;
    }
  }
  updateBoard();
}

Tetronimo.prototype.drop = function() {
  this.row++;
};

$(document).ready(function() {
  drawBoard();
});
