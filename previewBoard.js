var PreviewBoard = function() {
  this.board = generateEmptyBoard();
  this.tetrinimo;
}
PreviewBoard.prototype.blit = function() {
  this.board = generateEmptyBoard();

  for(var block in this.tetrinimo.blocks) {
    var currentBlock = this.tetrinimo.blocks[block];
    this.board[currentBlock.y][currentBlock.x] = this.tetrinimo.element;
  }
}

var generateEmptyBoard = function() {
  emptyBoard = new Array;
  for(var y = 0; y < 4; y++) {
    var row = new Array;
    for(var x = 0; x < 4; x++) {
      row.push(0);
    }
    emptyBoard.push(row);
  }
  return emptyBoard;
}
