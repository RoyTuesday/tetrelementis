var nextTetromino = new Tetromino;

setPreviewBoard = function(tetromino) {
  var tetrominoPos = [];
  switch (tetromino.shape) {
    case 'jBlock' : tetrominoPos = [4,5,6,10]; break;
    case 'lBlock' : tetrominoPos = [5,6,7,9]; break;
    case 'square' : tetrominoPos = [5,6,9,10]; break;
    case 'sBlock' : tetrominoPos = [5,6,8,9]; break;
    case 'zBlock' : tetrominoPos = [4,5,9,10]; break;
    case 'line'   : tetrominoPos = [4,5,6,7]; break;
    case 'tBlock' : tetrominoPos = [4,5,6,9]; break;
  }
  var board = new Array(16);
  for (var i = 0; i < 4; i++) board[tetrominoPos[i]] = tetromino.element;
  for (var i = 0; i < 16; i++) if (!board[i]) board[i] = 0;
  return board;
}
var gPreviewBoard = setPreviewBoard(nextTetromino);

renderPreview = function(context, board) {
  var x = 345;
  var y = 15;
  var spacing = BLOCK_SPACING;
  var right = x + (spacing * 4);

  for (var i = 0; i < 16; i++) {
    renderBlock(board[i], x, y);
    x += spacing;
    if (x == right) {
      x = 345;
      y += spacing;
    }
  }
};
