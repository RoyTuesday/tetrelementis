var Controller = function(shape) {
  this.gameBoard = new TetrisBoard();
  this.gameView = new BrowserView({gameBoard: this.gameBoard});
}
Controller.prototype.startGame = function() {
  this.gameView.animate();
  this.gameBoard.blit();
  setTimeout(this.cycleDropBlock.bind(this), DROP_DELAY);
};
Controller.prototype.cycleDropBlock = function () {
  var dropResult = this.gameBoard.dropBlock();
  if(dropResult == 'landed') {
    this.gameBoard.tetrinimo = new Tetrinimo({
      shape: TETRINIMO_SHAPES.line,
      element: 1
    });
  }
  this.dropTimeout = setTimeout(this.cycleDropBlock.bind(this), DROP_DELAY);
};