var PreviewBoard = function() {
  var board = [];
  for (var i = 0; i < 16; i++) board.push(0);
  this.board = board;
}
PreviewBoard.prototype.tetromino = new Tetromino;
PreviewBoard.prototype.render = function(context) {
  this.board.forEach(function(b, i) { renderBlock(context, b, i, 4) });
  var tetromino = this.tetromino;
  var element = tetromino.element;
  tetromino.blocks.forEach(function(b, i) { if (b >= 0) renderBlock(context, element, b, 4) });
};

var previewGrid = new PreviewBoard();
