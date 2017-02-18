function checkBoardIndexIsEmpty(b) { return this.board[b] === 0 }
function checkBoardIndexIsNotEmpty(b) { return this.board[b] !== 0 }
function checkBlocksAreNotFull(b) { return b > 199 || this.board[b] !== 0 }
function checkGreaterThanZero(num) { return num > 0 }

function slideTetromino(tetrisBoard) {
  var board = tetrisBoard.board;
  var blocks = tetrisBoard.tetromino.blocks;
  var direction = tetrisBoard.slideDirection;
  var wall = 4.5 + (direction * 4.5);
  if (blocks.every(function(b) { return b % 10 !== wall && board[b + direction] === 0 })) tetrisBoard.tetromino.slide(direction);
}
function rotateTetromino(tetrisBoard) {
  var blocks = tetrisBoard.tetromino.rotate(tetrisBoard.rotateDirection);
  if (!blocks) return;
  for (var a = 0, b = 1; b < blocks.length; a++, b++) {
    var xA = blocks[a] % 10, xB = blocks[b] % 10;
    var yA = (blocks[a] / 10) >> 0, yB = (blocks[b] / 10) >> 0;
    var dist = Math.sqrt(Math.pow(xA - xB, 2) + Math.pow(yA - yB, 2));
    if (dist > 4 || dist < -4) return false;
  }
  var board = tetrisBoard.board;
  if (blocks.every(checkBoardIndexIsEmpty, tetrisBoard)) tetrisBoard.tetromino.blocks = blocks;
}
function raiseTetromino(tetrisBoard) {
  var board = tetrisBoard.board;
  var blocks = tetrisBoard.tetromino.raise();

  if (blocks.every(function(b) { return b > 0 && board[b] === 0 })) tetrisBoard.tetromino.blocks = blocks;
}
function dropTetromino(tetrisBoard) {
  var board = tetrisBoard.board;
  var blocks = tetrisBoard.tetromino.drop();
  var lines = 0;

  if (blocks.some(checkBlocksAreNotFull, tetrisBoard)) {
    var element = tetrisBoard.tetromino.element;
    tetrisBoard.tetromino.blocks.forEach(function(b) { board[b] = element; });
    showTableElement(gPeriodicTable, element);
    tetrisBoard.tetromino = nextTetromino;
    nextTetromino = new Tetromino;
    gPreviewBoard = setPreviewBoard(nextTetromino);
    // If any of the new tetromino's blocks collide with filled blocks in the board, it's game over
    if (tetrisBoard.tetromino.blocks.some(checkBoardIndexIsNotEmpty, tetrisBoard)) return -1;
    lines = handleFullLines(tetrisBoard);
  }
  else tetrisBoard.tetromino.blocks = blocks;
  // If the number of lines is greater than 0, we'll update the score
  return lines;
}
function handleFullLines(tetrisBoard) {
  var board = [];
  var lines = 0;
  for (var i = 0; i < tetrisBoard.board.length; i += 10) {
    var slice = tetrisBoard.board.slice(i, i + 10);
    if (slice.every(checkGreaterThanZero)) {
      lines++;
      board = [0,0,0,0,0,0,0,0,0,0].concat(board);
    }
    else board = board.concat(slice);
  }
  if (lines > 0) {
    tetrisBoard.board = board;
    tetrisBoard.cheerOpacity = 50;
    tetrisBoard.cheer = CHEERS[lines][Math.random() * 2 >> 0];
  }
  return lines;
}
function clearMovement(tetrisBoard) {
  if (tetrisBoard.dropInterval > 0) clearInterval(tetrisBoard.dropInterval);
  tetrisBoard.dropInterval = 0;
  tetrisBoard.slideDirection = 0;
  tetrisBoard.rotateDirection = 0;
}
function setTetrisBoard() {
  var board = [];
  for (var i = 0; i < 200; i++) board.push(0);
  return board;
}
function renderTetrisBoard(context, board) {
  var x = 15;
  var y = 15;
  var spacing = BLOCK_SPACING;
  var right = x + (spacing * 10);

  for (var i = 0; i < 200; i++) {
    renderBlock(context, board.board[i], x, y);
    x += spacing;
    if (x == right) {
      x = 15;
      y += spacing;
    }
  }

  if (board.cheerOpacity > 0) {
    var opacity = board.cheerOpacity / 50;
    context.textAlign = 'center';
    context.lineWidth = 3;
    context.font = (FONT_SIZE * 2) + BLOCK_FONT;
    context.fillStyle = 'rgba(0,0,0,' + opacity + ')';
    context.strokeStyle = 'rgba(141,225,240,' + opacity + ')';

    context.strokeText(board.cheer, 157, 330);
    context.fillText(board.cheer, 157, 330);

    board.cheerOpacity--;
  }

  if (!gameover) {
    var blocks = board.tetromino.blocks;
    var element = board.tetromino.element;
    for (var i = 0; i < 4; i++) {
      x = 15 + ((blocks[i] % 10) * spacing);
      y = 15 + ((blocks[i] / 10 >> 0) * spacing);
      renderBlock(context, element, x, y);
    }
  }
}

var gTetrisBoard = {
  board: setTetrisBoard(),
  tetromino: new Tetromino,
  dropInterval: 0,
  slideDirection: 0,
  rotateDirection: 0,
  cheerOpacity: 0,
  cheer: ''
}
