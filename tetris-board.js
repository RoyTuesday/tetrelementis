var TetrisBoard = function() {
  var board = [];
  for (var i = 0; i < 200; i++) board.push(0);
  this.board = board;
  this.tetromino = new Tetromino().convertForBoard();
}
TetrisBoard.prototype.dropInterval = 0;
TetrisBoard.prototype.slideDirection = 0;
TetrisBoard.prototype.rotateDirection = 0;
TetrisBoard.prototype.setTetromino = function(tetromino) {
  tetromino.blocks = tetromino.blocks.map(function(b) { return b + 3 });
  this.tetromino = tetromino;
};
TetrisBoard.prototype.slide = function() {
  var board = this.board;
  var blocks = this.tetromino.blocks;
  var direction = this.slideDirection;
  var wall = 4.5 + (direction * 4.5);
  if (blocks.every(function(b) { return b % 10 !== wall && board[b + direction] === 0 })) this.tetromino.slide(direction);
};
TetrisBoard.prototype.rotate = function() {
  var blocks = this.tetromino.rotate(this.rotateDirection);
  if (!blocks) return;
  for (var a = 0, b = 1; b < blocks.length; a++, b++) {
    var xA = blocks[a] % 10, xB = blocks[b] % 10;
    var yA = (blocks[a] / 10) >> 0, yB = (blocks[b] / 10) >> 0;
    var dist = Math.sqrt(Math.pow(xA - xB, 2) + Math.pow(yA - yB, 2));
    if (dist > 4 || dist < -4) return false;
  }
  var board = this.board;
  if (blocks.every(function(b) { return board[b] === 0 })) this.tetromino.blocks = blocks;
};
TetrisBoard.prototype.raise = function() {
  var board = this.board;
  var blocks = this.tetromino.raise();

  if (blocks.every(function(b) { return b > 0 && board[b] === 0 })) this.tetromino.blocks = blocks;
};
TetrisBoard.prototype.drop = function() {
  var board = this.board;
  var blocks = this.tetromino.drop();
  var lines = 0;

  if (blocks.some(function(b) { return b > 199 || board[b] !== 0 })) {
    var element = this.tetromino.element;
    this.tetromino.blocks.forEach(function(b) { this.board[b] = element; }, this);
    tableGrid.showElement(element);
    this.tetromino = previewGrid.tetromino.convertForBoard();
    previewGrid.tetromino = new Tetromino;
    // If any of the new tetromino's blocks collide with filled blocks in the board, it's game over
    if (this.tetromino.blocks.some(function(b) { return board[b] !== 0 })) return -1;
    lines = this.handleFullLines();
  }
  else this.tetromino.blocks = blocks;
  // If the number of lines is greater than 0, we'll update the score
  return lines;
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
  return lines;
};
TetrisBoard.prototype.render = function(context) {
  this.board.forEach(function(b, i) { renderBlock(b, i, 10, 0, 0) });
  if (scene !== 2) {
    var tetromino = this.tetromino;
    var element = tetromino.element;
    tetromino.blocks.forEach(function(b) { if (b >= 0) renderBlock(element, b, 10, 0, 0) });
  }
};
TetrisBoard.prototype.clearMovement = function() {
  clearInterval(this.dropInterval);
  this.dropInterval = 0;
  this.slideDirection = 0;
  this.rotateDirection = 0;
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
