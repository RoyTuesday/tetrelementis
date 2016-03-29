var CONST = require("./constants.js");

var Tetromino = require("./tetromino.js")
var TetrisBoard = require("./tetris-board.js");
var BrowserView = require("./browser-view.js");

var Controller = function(shape) {
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
