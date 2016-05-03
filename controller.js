var CONST = require("./constants.js");

var Tetromino = require("./tetromino.js")
var TetrisBoard = require("./tetris-board.js");
var BrowserView = require("./browser-view.js");

var Controller = function(shape) {
  this.level = 0;
  this.elements = CONST.generateRandomElements();
  this.limiter = {
    shapeIndex: null,
    count: 0
  }

  this.gameBoard = new TetrisBoard({
    createNextTetromino: this.createNextTetromino.bind(this),
    showGameOver: this.showGameOver.bind(this)
  });

  this.gameView = new BrowserView({
    gameBoard: this.gameBoard,
    cycleDropBlock: this.cycleDropBlock,
  });

  this.gameView.drawAllBoards();
  this.gameBoard.gameState = 'gameover';

  addEventListener('keydown', function(event) {
    if(this.gameBoard.gameState == 'gameover') {
      var keyPressed = CONST.KEY_CODES_TO_ACTIONS[event.keyCode];
      if(keyPressed == 'space') {
        event.preventDefault();
        this.startGame();
      }
    }
  }.bind(this));
  addEventListener('mousedown', function(event) {
    if(event.target.nodeName == 'BUTTON' && this.gameBoard.gameState == 'gameover') {
      var buttonPressed = event.target.dataset.key;
      if(buttonPressed == 'space') {
        this.startGame();
      }
    }
  }.bind(this));

  addEventListener('keydown', this.handleKeyDown.bind(this));
  addEventListener('keyup', this.handleKeyUp.bind(this));
}
Controller.prototype.startGame = function() {
  if(this.elements.length < 118) {
    this.elements = CONST.generateRandomElements();
  }

  this.gameView.disableMenus();

  if(this.gameBoard.tetromino) {
    this.gameBoard.tetromino.set({
      element: this.elements.pop(),
      shape: CONST.getRandomShape(this.gameView.gameMode, this.limiter)
    });
  }
  else {
    this.gameBoard.tetromino = new Tetromino({
      element: this.elements.pop(),
      shape: CONST.getRandomShape(this.gameView.gameMode, this.limiter)
    });
  }

  if(this.gameView.previewBoard.tetromino) {
    this.gameView.previewBoard.tetromino.set({
      element: this.elements.pop(),
      shape: CONST.getRandomShape(this.gameView.gameMode, this.limiter)
    });
  }
  else {
    this.gameView.previewBoard.tetromino = new Tetromino({
      element: this.elements.pop(),
      shape: CONST.getRandomShape(this.gameView.gameMode, this.limiter)
    });
  }

  this.gameBoard.score = 0;
  this.gameBoard.gameState = 'inProgress';

  this.gameView.animateGame();
  this.gameView.previewBoard.blit();
  this.gameView.tableBoard.showElement(this.gameBoard.tetromino.element);
  this.gameView.updateElementDescrip(this.gameView.previewBoard.tetromino.element);

  this.cycleDropBlock(CONST.DROP_DELAY[this.gameView.level]);
};
Controller.prototype.cycleDropBlock = function (dropDelay) {
  this.gameBoard.blit();
  if(this.gameBoard.dropInterval) {
    clearInterval(this.gameBoard.dropInterval);
  }
  this.gameBoard.dropInterval = setInterval(
    this.gameBoard.dropBlock.bind(this.gameBoard),
    dropDelay
  );
};
Controller.prototype.createNextTetromino = function() {
  this.gameBoard.tetromino.set({
    element: this.gameView.previewBoard.tetromino.element,
    shape: this.gameView.previewBoard.tetromino.shape
  });
  if(this.elements.length <= 0) {
    this.elements = CONST.generateRandomElements();
  }
  this.gameView.previewBoard.tetromino.set({
    element: this.elements.pop(),
    shape: CONST.getRandomShape(this.gameView.gameMode, this.limiter)
  })
  this.gameView.previewBoard.blit();
  this.gameView.tableBoard.showElement(this.gameBoard.tetromino.element);
  this.gameView.updateElementDescrip(this.gameView.previewBoard.tetromino.element);
  this.updateGameLevel();
};
Controller.prototype.handleKeyDown = function(event) {
  var action = this.gameView.keyDown.bind(this.gameView, event).call();
  if(action == "pause") {
    clearTimeout(this.gameBoard.dropInterval);
    clearTimeout(this.gameBoard.dropTimeout);
    clearInterval(this.gameBoard.rotateInterval);
    clearInterval(this.gameBoard.slideInterval);
  }
  else if(action == "unpause") {
    this.cycleDropBlock(CONST.DROP_DELAY[this.gameView.level]);
  }
  else if(action == "left" || action == "right") {
    clearInterval(this.gameBoard.slideInterval);
    this.gameBoard.slideBlock(this.gameView.pressed.slide);
    this.gameBoard.slideInterval = setInterval(this.gameBoard.slideBlock.bind(this.gameBoard, this.gameView.pressed.slide), CONST.SLIDE_DELAY);
  }
  else if(action == "clock" || action == "counter") {
    clearInterval(this.gameBoard.rotateInterval);
    this.gameBoard.rotateBlock(this.gameView.pressed.rotate);
    this.gameBoard.rotateInterval = setInterval(this.gameBoard.rotateBlock.bind(this.gameBoard, this.gameView.pressed.rotate), CONST.ROTATE_DELAY);
  }
  else if(action == "down") {
    clearInterval(this.gameBoard.dropInterval);
    this.cycleDropBlock(CONST.FAST_DROP);
  }
};
Controller.prototype.handleKeyUp = function(event) {
  var action = this.gameView.keyUp.bind(this.gameView, event).call();
  if(action == "left" || action == "right") {
    clearInterval(this.gameBoard.slideInterval);
  }
  else if(action == "counter" || action == "clock") {
    clearInterval(this.gameBoard.rotateInterval);
  }
  else if(action == "down") {
    clearInterval(this.gameBoard.dropInterval);
    this.cycleDropBlock(CONST.DROP_DELAY[this.gameView.level]);
  }
};
Controller.prototype.updateGameLevel = function() {
  this.level = Math.floor(this.gameBoard.score / 10);
  this.gameView.updateGameLevel(this.level);
};
Controller.prototype.showGameOver = function() {
  this.gameBoard.tetromino = null;
  this.gameView.previewBoard.tetromino = null;

  this.gameView.isPaused = true;
  this.gameView.previewBoard.board = CONST.generateEmptyBoard();
  this.gameBoard.clearForGameover();
  this.gameView.resetDisplay();
};

module.exports = Controller;
