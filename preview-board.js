var PreviewBoard = function() {
  var board = [];
  for (var i = 0; i < 16; i++) board.push(0);
  this.board = board;
}
PreviewBoard.prototype.tetromino = new Tetromino;
PreviewBoard.prototype.render = function(context) {
  this.board.forEach(function(b, i) { renderBlock(b, i, 4, 330, 0) });
  var tetromino = this.tetromino;
  var element = tetromino.element;
  tetromino.blocks.forEach(function(b, i) { if (b >= 0) renderBlock(element, b, 4, 330, 0) });
};

var previewGrid = new PreviewBoard();
