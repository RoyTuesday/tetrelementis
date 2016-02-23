var Controller = function(shape) {
  this.gameBoard = new TetrisBoard();
  this.gameView = new BrowserView({
    gameBoard: this.gameBoard,
    cycleDropBlock: this.cycleDropBlock
  });
}
Controller.prototype.startGame = function() {
  this.gameView.animate();
  this.gameBoard.blit();
  
  this.cycleDropBlock();
};
Controller.prototype.cycleDropBlock = function (args = {}) {
  var dropDelay = args.quickly ? FAST_DROP : DROP_DELAY;
  this.gameBoard.blit();
  if(this.gameBoard.dropInterval) {
    clearInterval(this.gameBoard.dropInterval);
  }
  this.gameBoard.dropInterval = setInterval(
    this.gameBoard.dropBlock.bind(this.gameBoard),
    dropDelay
  );
};
