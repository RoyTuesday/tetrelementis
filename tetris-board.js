function addThree(num) { return num + 3 }
function checkBoardIndexIsEmpty(b) { return tetrisGrid.board[b] === 0 }
function checkBoardIndexIsNotEmpty(b) { return tetrisGrid.board[b] !== 0 }
function checkGreaterThanZero(num) { return num > 0 }

var TetrisBoard = function() {
  var board = [];
  for (var i = 0; i < 200; i++) board.push(0);
  this.board = board;
  this.tetromino = new Tetromino();
}
TetrisBoard.prototype.dropInterval = 0;
TetrisBoard.prototype.slideDirection = 0;
TetrisBoard.prototype.rotateDirection = 0;
TetrisBoard.prototype.setTetromino = function(tetromino) {
  tetromino.blocks = tetromino.blocks.map(addThree);
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
  if (blocks.every(checkBoardIndexIsEmpty)) this.tetromino.blocks = blocks;
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
    gPeriodicTable.showElement(element);
    this.tetromino = nextTetromino;
    nextTetromino = new Tetromino;
    setPreviewBoard(nextTetromino);
    // If any of the new tetromino's blocks collide with filled blocks in the board, it's game over
    if (this.tetromino.blocks.some(checkBoardIndexIsNotEmpty)) return -1;
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
    if (slice.every(checkGreaterThanZero)) {
      lines++;
      board = [0,0,0,0,0,0,0,0,0,0].concat(board);
    }
    else board = board.concat(slice);
  }
  if (lines > 0) this.board = board;
  return lines;
};
TetrisBoard.prototype.render = function(context) {
  for (var i = 0; i < 200; i++) renderBlock(this.board[i], i, 10, 0, 0);
  if (!gameover) {
    var blocks = this.tetromino.blocks;
    var element = this.tetromino.element;
    for (var i = 0; i < 4; i++) {
      var b = blocks[i];
      if (b >= 0) renderBlock(element, b, 10, 0, 0);
    }
  }
};
TetrisBoard.prototype.clearMovement = function() {
  if (this.dropInterval > 0) clearInterval(this.dropInterval);
  this.dropInterval = 0;
  this.slideDirection = 0;
  this.rotateDirection = 0;
};

var tetrisGrid = new TetrisBoard();
