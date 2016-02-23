var generateRandomElements = function() {
  var randElements = new Array;
  var orderedElements = new Array;

  for(var prop in CHEMICAL_ELEMENTS) {
    if(CHEMICAL_ELEMENTS.hasOwnProperty(prop)) {
      orderedElements.push(prop);
    }
  }

  var length = new Number(orderedElements.length);

  for(var i = 0; i < length; i++) {
    var randIndex = Math.floor(Math.random() * orderedElements.length);
    randElements.push(orderedElements[randIndex]);
    orderedElements.splice(randIndex, 1);
  }

  return randElements;
};
var getRandomShape = function() {
  var counter = 0;
  var randNum = Math.floor(Math.random() * 7);

  for(var prop in TETRINIMO_SHAPES) {
    if(TETRINIMO_SHAPES.hasOwnProperty(prop)) {
      if(counter == randNum) return TETRINIMO_SHAPES[prop];
      counter++;
    }
  }
};

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
