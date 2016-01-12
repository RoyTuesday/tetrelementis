var CHEMICAL_ELEMENTS = {
  1: {'background-color': '#dde', 'color': 'black', name: 'hydrogen'},
  2: {'background-color': '#edd', 'color': 'black', name: 'helium'},
};

var TETRONIMO_SHAPES = {
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
      $('#row-' + row + ' .col-' + col).text(tetrisBoard[row][col]);
    }
  }
}

var setElementStyles = function(element) {
  for(var prop in element) {
    if(element.hasOwnProperty(prop)) {
      $('#row-4 .col-3').css(prop, element[prop]);
    }
  }
}

var Tetronimo = function(args) {
  this.shape = args.shape;
  this.row = 0;
  this.col = 5;
  this.element = args.element;
}

Tetronimo.prototype.drop = function() {
  this.row++;
};

$(document).ready(function() {
  drawBoard();
});
