var PreviewBoard = function() {
  var board = [];
  for (var i = 0; i < 16; i++) board.push(0);
  this.board = board;
}
PreviewBoard.prototype.tetromino = new Tetromino;
PreviewBoard.prototype.render = function(context) {
  for (var i = 0; i < 16; i++) renderBlock(this.board[i], i, 4, 330, 0);
  var element = this.tetromino.element;
  this.tetromino.blocks.forEach(function(b, i) { if (b >= 0) renderBlock(element, b, 4, 330, 0) });
};

var previewGrid = new PreviewBoard();
