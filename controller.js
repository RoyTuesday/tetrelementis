var generateRandomElements = function() {
  var randElements = new Array;
  var orderedElements = new Array;

  for(var prop in CHEMICAL_ELEMENTS) {
    if(CHEMICAL_ELEMENTS.hasOwnProperty(prop)) {
      orderedElements.push(prop);
    }
  }

  var length = new Number(orderedElements.length);

  for(var i = 0; i < length; i += 1) {
    var randIndex = Math.floor(Math.random() * orderedElements.length);
    randElements.push(orderedElements[randIndex]);
    orderedElements.splice(randIndex, 1);
  }

  return randElements;
};

var Controller = function(shape) {
  this.gameBoard = new TetrisBoard();
  this.gameView = new BrowserView({gameBoard: this.gameBoard});
}
Controller.prototype.startGame = function() {
  this.gameBoard.blit();
  this.gameView.animate();
  this.gameBoard.cycleDropBlock();
};
