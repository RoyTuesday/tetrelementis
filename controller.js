var Controller = function(shape) {
  this.gameBoard = new tetrisBoard();
  this.gameView = new browserView({gameBoard: this.gameBoard});
}