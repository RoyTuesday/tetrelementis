var Controller = function(shape) {
  this.gameBoard = new TetrisBoard();
  this.gameView = new BrowserView({gameBoard: this.gameBoard});
}
Controller.prototype.startGame = function() {
  this.gameView.animate();
  this.gameBoard.cycleDropBlock();
};
