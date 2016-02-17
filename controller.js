var Controller = function(shape) {
  this.gameBoard = new tetrisBoard();
  this.gameView = new browserView({gameBoard: this.gameBoard});
}
Controller.prototype.startGame = function() {
  this.gameBoard.blit();
  this.gameView.animate();
  this.gameBoard.cycleDropBlock();
}