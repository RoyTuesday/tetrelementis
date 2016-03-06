var Controller = function(shape) {
  this.elements = generateRandomElements();

  this.gameBoard = new TetrisBoard({
    createNextTetrinimo: this.createNextTetrinimo.bind(this),
    showGameOver: this.showGameOver.bind(this)
  });

  this.gameView = new BrowserView({
    gameBoard: this.gameBoard,
    cycleDropBlock: this.cycleDropBlock,
  });

  this.gameView.previewBoard.tetrinimo = new Tetrinimo({
    element: this.elements.pop(),
    shape: getRandomShape(this.gameView.gameMode)
  });
  this.gameView.drawAllBoards();
  this.gameBoard.gameState = 'gameover';

  addEventListener('keydown', function(event) {
    if(this.gameBoard.gameState == 'gameover') {
      var keyPressed = KEY_CODES[event.keyCode];
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
    this.elements = generateRandomElements();
  }

  if(this.gameBoard.tetrinimo === null) {
    this.gameBoard.tetrinimo = new Tetrinimo({
      element: this.elements.pop(),
      shape: getRandomShape(this.gameView.gameMode)
    });
  }

  if(this.gameView.previewBoard.tetrinimo === null) {
    this.gameView.previewBoard.tetrinimo = new Tetrinimo({
      element: this.elements.pop(),
      shape: getRandomShape(this.gameView.gameMode)
    })
  }

  this.gameBoard.score = 0;
  this.gameBoard.gameState = 'inProgress';

  this.gameView.disableMenus();
  this.gameView.animateGame();
  this.gameView.previewBoard.blit();
  this.gameView.tableBoard.showElement(this.gameBoard.tetrinimo.element);
  this.gameView.updateElementDescrip(this.gameView.previewBoard.tetrinimo.element);

  this.cycleDropBlock(DROP_DELAY[this.gameView.level]);
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
Controller.prototype.createNextTetrinimo = function() {
  this.gameBoard.tetrinimo = this.gameView.previewBoard.tetrinimo;
  if(this.elements.length <= 0) {
    this.elements = generateRandomElements();
  }
  this.gameView.previewBoard.tetrinimo = new Tetrinimo({
    element: this.elements.pop(),
    shape: getRandomShape(this.gameView.gameMode)
  })
  this.gameView.previewBoard.blit();
  this.gameView.tableBoard.showElement(this.gameBoard.tetrinimo.element);
  this.gameView.updateElementDescrip(this.gameView.previewBoard.tetrinimo.element);
};
Controller.prototype.showGameOver = function() {
  this.gameBoard.tetrinimo = null;
  this.gameView.previewBoard.tetrinimo = null;

  this.gameView.isPaused = true;
  this.gameView.previewBoard.board = generateEmptyBoard();
  this.gameBoard.clearForGameover();
  this.gameView.resetDisplay();
};

var generateRandomElements = function() {
  var randElements = new Array;
  var orderedElements = new Array;

  for(var prop in CHEMICAL_ELEMENTS) {
    if(CHEMICAL_ELEMENTS.hasOwnProperty(prop)) {
      if(prop != 0) orderedElements.push(prop);
    }
  }

  var length = new Number(orderedElements.length);

  for(var i = 0; i < length; i++) {
    var randIndex = Math.floor(Math.random() * orderedElements.length);
    randElements.push(orderedElements[randIndex]);
    orderedElements.splice(randIndex, 1);
  }

  return randElements;
}
var getRandomShape = function(gameMode) {
  var counter = 0;
  var randNum = Math.floor(Math.random() * 7);
  var shapes = TETRINIMO_SHAPES[gameMode];

  for(var prop in shapes) {
    if(shapes.hasOwnProperty(prop)) {
      if(counter == randNum) return shapes[prop];
      counter++;
    }
  }
}
