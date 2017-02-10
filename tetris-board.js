var TetrisBoard = function() {
  var board = [];
  for (var i = 0; i < 200; i++) board.push(0);
  this.board = board;
}
TetrisBoard.prototype.dropInterval = 0;
TetrisBoard.prototype.tetromino = new Tetromino(Math.ceil(Math.random() * (CHEMICAL_ELEMENTS.length - 1)), 'line');
TetrisBoard.prototype.raise = function() {
  var blocks = this.tetromino.blocks;
  for (var i = 0; i < blocks.length; i++) {
    if (blocks[i] / 10 < 1) return;
  }

  this.tetromino.raise();
};
TetrisBoard.prototype.slide = function(direction) {
  var board = this.board;
  var blocks = this.tetromino.blocks;
  var xMod, wall;
  switch (direction) {
    case 'left' :
      xMod = -1;
      wall = 0;
      break;
    case 'right':
      xMod = 1;
      wall = 9;
      break;
  }
  for (var i = 0; i < blocks.length; i++) {
    if (blocks[i] % 10 === wall || board[blocks[i] + xMod] !== 0) return;
  }

  this.tetromino.slide(xMod);
};
TetrisBoard.prototype.rotate = function(direction) {
  var blocks = this.tetromino.rotate(direction);
  for (var i = 0; i < blocks.length; i++) {
    var b = blocks[i];
    if (b < 0) return;
    var adjacent = i == blocks.length - 1;
    for (var a = i + 1; a < blocks.length; a++) {
      var adjB = blocks[a];
      if (b % 10 == adjB % 10 || (b / 10) >> 0 == (adjB / 10) >> 0) {
        adjacent = true;
        break;
      }
    }
    if (!adjacent) return;
  }
  this.tetromino.blocks = blocks;
};
TetrisBoard.prototype.drop = function() {
  var board = this.board;
  var blocks = this.tetromino.drop();
  var land = false;
  for (var i = 0; i < blocks.length; i++) {
    if (blocks[i] / 10 > 20 || board[blocks[i]] !== 0) land = true;
  }

  if (land) {
    var element = this.tetromino.element;
    this.tetromino.blocks.forEach(function(b) { this.board[b] = element; }, this);
    this.tetromino = new Tetromino(Math.ceil(Math.random() * (CHEMICAL_ELEMENTS.length - 1)), 'line');
    this.handleFullLines();
  }
  else this.tetromino.blocks = blocks;
};
TetrisBoard.prototype.handleFullLines = function() {
  var board = [];
  var lines = 0;
  for (var i = 0; i < this.board.length; i += 10) {
    var slice = this.board.slice(i, i + 10);
    if (slice.every(function(cell) { return cell > 0 })) {
      lines++;
      board = [0,0,0,0,0,0,0,0,0,0].concat(board);
    }
    else board = board.concat(slice);
  }
  if (lines > 0) this.board = board;
};
TetrisBoard.prototype.render = function(context) {
  this.board.forEach(function(b, i) { renderBlock(context, b, i, 10) });
  var tetromino = this.tetromino;
  var element = tetromino.element;
  tetromino.blocks.forEach(function(b, i) { if (b >= 0) renderBlock(context, element, b, 10) });
};

TetrisBoard.prototype.clearForGameover = function() {
  var randElement = Math.ceil(Math.random() * 118);
  var boardCoords = {x: 0, y: 0};

  var clearBoard = function(boardCoords) {
    if(boardCoords.y < 20) {
      this.board[boardCoords.y][boardCoords.x] = randElement;
      if(boardCoords.x >= 9) {
        boardCoords.y++;
        boardCoords.x = 0;
      }
      else {
        boardCoords.x++;
      }
      setTimeout(clearBoard.bind(this, boardCoords), CONST.CLEAR_DELAY);
    }
    else if(randElement > 0) {
      randElement = 0;
      boardCoords = {x: 0, y:0};
      setTimeout(clearBoard.bind(this, boardCoords), CONST.CLEAR_DELAY);
    }
    else {
      this.gameState = 'gameover';
    }
  }.bind(this);

  clearBoard(boardCoords);
};

var tetrisGrid = new TetrisBoard();
