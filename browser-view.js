var CONST = require("./constants.js");
var CHEMICAL_ELEMENTS = require("./chemical-elements.js");

var TetrisBoard = require("./tetris-board.js");
var PreviewBoard = require("./preview-board.js");
var PeriodicTable = require("./periodic-table.js");

var BrowserView = function(args) {
  var gridCanvas = document.querySelector('canvas#tetris-grid');
  var previewCanvas = document.querySelector('canvas#tetris-preview');
  var buttons = document.querySelectorAll("button.control-button");

  this.controlButtons = new Array;
  for(var i in buttons) {
    if(buttons.hasOwnProperty(i)) {
      this.controlButtons.push(buttons[i]);
    }
  }

  this.tableOverlay = document.querySelector('canvas#table-overlay');
  this.tableCanvas = document.querySelector('canvas#tetris-table');

  BLOCK_SPACING_HEIGHT = gridCanvas.getAttribute('height') / 20;
  BLOCK_SPACING_WIDTH = gridCanvas.getAttribute('width') / 10;
  BLOCK_HEIGHT = BLOCK_SPACING_HEIGHT - 10;
  BLOCK_WIDTH = BLOCK_SPACING_WIDTH - 10;

  this.elementDescrip = document.getElementById('element-description');
  this.elementName = document.getElementById('element-name');
  this.atomicNumDisplay = document.getElementById('atomic-number');
  this.elementLink = document.getElementById('element-link');

  this.staticPlayerScore = document.getElementById('player-score-static');
  this.staticHighScore = document.getElementById('high-score-static');
  this.staticGameLevel = document.getElementById('game-level-static');
  this.staticGameMode = document.getElementById('game-mode-static');

  this.playerScore = document.getElementById('player-score');
  this.highScore = document.getElementById('high-score');
  this.gameLevel = document.getElementById('game-level');
  this.gameLevel.innerHTML = CONST.genLevelMenu(0);

  this.gameModeContainer = document.getElementById('game-mode');
  this.gameModeContainer.innerHTML = CONST.genModeMenu(0);

  this.gridContext = gridCanvas.getContext('2d');
  this.previewContext = previewCanvas.getContext('2d');
  this.tableContext = this.tableCanvas.getContext('2d');
  this.overlayContext = this.tableOverlay.getContext('2d');

  this.overlayContext.fillStyle = 'rgba(255, 255, 255, 0.5)';

  this.gameBoard = args.gameBoard;
  this.previewBoard = new PreviewBoard();
  this.tableBoard = new PeriodicTable();

  this.loadHighScore();
  document.getElementById('reset-high-score').addEventListener("click", function(event) {
    event.preventDefault();
    this.resetHighScore();
  }.bind(this));

  this.cycleDropBlock = args.cycleDropBlock;
  this.isPaused = true;
  this.pressed = {
    slide: false,
    drop: false,
    rotate: false
  };
  this.interval = {
    slide: null,
    rotate: null
  };

  this.tableOverlay.addEventListener('mousedown', function(event) {
    var mouseX = Math.floor((event.layerX - this.tableOverlay.offsetLeft) / (540 / 18));
    var mouseY = Math.floor((event.layerY - this.tableOverlay.offsetTop) / (270 / 9));
    var element = 0

    if(mouseX >= 0 && mouseY >= 0) {
      element = this.tableBoard.board[mouseY][mouseX];
    }

    if(element > 0) {
      this.updateElementDescrip(element);
    }
  }.bind(this));
  this.tableOverlay.addEventListener('mousemove', function(event) {
    var mouseX = Math.floor((event.layerX - this.tableOverlay.offsetLeft) / (540 / 18));
    var mouseY = Math.floor((event.layerY - this.tableOverlay.offsetTop) / (270 / 9));
    var element = 0;

    if(mouseX >= 0 && mouseY >= 0) {
      element = this.tableBoard.board[mouseY][mouseX];
    }

    if(element > 0) {
      this.overlayContext.clearRect(0, 0, 540, 270);
      this.overlayContext.fillRect((mouseX * BLOCK_SPACING_WIDTH) + 5, (mouseY * BLOCK_SPACING_HEIGHT) + 5, BLOCK_WIDTH, BLOCK_HEIGHT);
    }
    else {
      this.overlayContext.clearRect(0, 0, 540, 270);
    }
  }.bind(this));

  var dirContainer = document.querySelector("#directions-container");

  var updateDirectionsOverlay = function(container) {
    var dirTrans = document.querySelector("#directions-transparent-layer");
    var directions = document.querySelector("#directions");
    var main = document.querySelector("main");

    container.style["left"] = main.offsetLeft + "px";
    container.style["top"] = main.offsetTop + "px";
    container.style["height"] = main.offsetHeight + "px";
    container.style["width"] = main.offsetWidth + "px";

    directions.style["height"] = (main.offsetHeight - 32) + "px";
    directions.style["width"] = (main.offsetWidth - 64) + "px";

    dirTrans.style["height"] = main.offsetHeight + "px";
    dirTrans.style["width"] = main.offsetWidth + "px";
  }

  this.tableOverlay.addEventListener('mouseout', function(event) {
    this.overlayContext.clearRect(0, 0, 540, 270);
  }.bind(this));

   document.querySelector("#show-directions a").addEventListener("click", function(event) {
    event.preventDefault();
    this.isPaused = true;
    clearTimeout(this.gameBoard.dropInterval);
    clearTimeout(this.dropTimeout);
    clearInterval(this.interval.rotate);
    clearInterval(this.interval.slide);

    if(dirContainer.style["display"] != "none") {
      updateDirectionsOverlay(dirContainer);
    }

    dirContainer.style["display"] = "initial";
    dirContainer.className = "stretching-container";
  }.bind(this));

  document.querySelector("#hide-directions a").addEventListener("click", function(event) {
    event.preventDefault();
    dirContainer.className = "fading-container";
  });

  dirContainer.addEventListener("animationend", function(event) {
    if(event.animationName == "fade") {
      dirContainer.style["display"] = "none";
      this.isPaused = false;
      this.cycleDropBlock(CONST.DROP_DELAY[this.level]);
    }
  }.bind(this));

  window.addEventListener("resize", function(event) {
    updateDirectionsOverlay(dirContainer);
  });
}
BrowserView.prototype.keyDown = function(event) {
  var pressedKey = event.keyCode ? CONST.KEY_CODES_TO_ACTIONS[event.keyCode] : event.target.dataset.key;
  if(this.isPaused) {
    if(pressedKey == 'space') {
      event.preventDefault();
      this.isPaused = false;
      return "unpause";
    }
  }
  else {
    if(pressedKey == 'left' || pressedKey == 'right') {
      event.preventDefault();
      if(this.pressed.slide == false) {
        this.pressed.slide = pressedKey;
        return pressedKey;
      }
    }
    else if(pressedKey == 'down') {
      event.preventDefault();
      if(this.pressed.drop == false) {
        this.pressed.drop = true;
        return pressedKey;
      }
    }
    else if(pressedKey == 'clock' || pressedKey == 'counter') {
      event.preventDefault();
      if(this.pressed.rotate == false) {
        this.pressed.rotate = pressedKey;
        return pressedKey;
      }
    }
    else if(pressedKey == 'space') {
      this.isPaused = true;
      event.preventDefault();
      return "pause";
    }
  }
};
BrowserView.prototype.keyUp = function(event){
  var releasedKey = event.keyCode ? CONST.KEY_CODES_TO_ACTIONS[event.keyCode] : event.target.dataset.key;
  if(this.isPaused === false) {
    if(releasedKey == 'left' || releasedKey == 'right') {
      event.preventDefault();
      this.pressed.slide = false;
    }
    if(releasedKey == 'down') {
      event.preventDefault();
      this.pressed.drop = false;
    }
    if(releasedKey == 'counter' || releasedKey == 'clock') {
      event.preventDefault();
      this.pressed.rotate = false;
    }
    return releasedKey;
  }
};
BrowserView.prototype.releaseAllKeys = function() {
  this.pressed = {
    slide: false,
    drop: false,
    rotate: false
  };
};
BrowserView.prototype.drawBoard = function(board, context) {
  var gridContext = context;
  var width = gridContext.canvas.width;
  var height = gridContext.canvas.height;
  gridContext.clearRect(0, 0, width, height);

  gridContext.lineWidth = 4;

  board.forEach(function(row, rIndex) {
    row.forEach(function(col, cIndex) {
      gridContext.fillStyle = CHEMICAL_ELEMENTS[col]['background-color'];
      gridContext.strokeStyle = CHEMICAL_ELEMENTS[col]['border-color'];

      var xPos = (cIndex * BLOCK_SPACING_WIDTH) + 5;
      var yPos = (rIndex * BLOCK_SPACING_HEIGHT) + 5;
      var textX = (cIndex * BLOCK_SPACING_WIDTH) + (BLOCK_SPACING_WIDTH / 2);
      var textY = (rIndex * BLOCK_SPACING_HEIGHT) + (BLOCK_SPACING_HEIGHT / 2) + 4;

      var textLen = CHEMICAL_ELEMENTS[col].symbol.length;
      if(textLen == 1) {
        gridContext.font = CONST.FONT_SIZE + CONST.BLOCK_FONT;
        textX -= 3;
      }
      else if(textLen == 2) {
        gridContext.font = CONST.FONT_SIZE + CONST.BLOCK_FONT;
        textX -= 7;
      }
      else if(textLen == 3) {
        gridContext.font = (CONST.FONT_SIZE - 2) + CONST.BLOCK_FONT;
        textX -= 7;
      }

      gridContext.fillRect(xPos, yPos, BLOCK_WIDTH, BLOCK_HEIGHT);
      gridContext.strokeRect(xPos, yPos, BLOCK_WIDTH, BLOCK_HEIGHT);
      gridContext.fillStyle = CHEMICAL_ELEMENTS[col]['color'];
      gridContext.fillText(CHEMICAL_ELEMENTS[col].symbol, textX, textY);
    });
  });
};
BrowserView.prototype.drawAllBoards = function() {
  this.drawBoard(this.gameBoard.board, this.gridContext);
  this.drawBoard(this.previewBoard.board, this.previewContext);
  this.drawBoard(this.tableBoard.board, this.tableContext);
};
BrowserView.prototype.animateGame = function() {
  var lastTime = null;
  var progress = true;

  var animate = function(time) {
    if(lastTime) {
      var timeStep = Math.min(time - lastTime, 100) / 1000;
      progress = timeStep < 1000;
    }
    lastTime = time;

    if(progress) {
      this.drawAllBoards();
      this.updatePlayerScore(this.gameBoard.score);
      requestAnimationFrame(animate.bind(this));
    }
  }
  requestAnimationFrame(animate.bind(this));
};
BrowserView.prototype.updateElementDescrip = function(element) {
  this.elementName.innerHTML = CHEMICAL_ELEMENTS[element].name + ' [' + CHEMICAL_ELEMENTS[element].symbol + ']';
  this.atomicNumDisplay.innerHTML = element;
  this.elementDescrip.innerHTML = CHEMICAL_ELEMENTS[element].descrip;

  this.elementLink.href = CONST.CHEMISTRY_URL + CHEMICAL_ELEMENTS[element].name.toLowerCase();
  this.elementLink.innerHTML = 'Learn more about ' + CHEMICAL_ELEMENTS[element].name.toLowerCase();
};
BrowserView.prototype.updatePlayerScore = function(score) {
  this.playerScore.innerHTML = score;
};
BrowserView.prototype.updateGameLevel = function(level) {
  this.staticGameLevel.innerHTML = level + ": ";
};
BrowserView.prototype.getGameSettings = function() {
  var levelIndex = document.getElementById('game-level-dropdown').selectedIndex;
  var modeIndex = document.getElementById('game-mode-dropdown').selectedIndex;

  return {
    level: levelIndex,
    gameMode: CONST.GAME_MODES[modeIndex]
  }
};
BrowserView.prototype.disableMenus = function(level, gameMode) {
  this.staticGameMode.innerHTML = gameMode;
  this.staticGameLevel.innerHTML = level + ": ";

  this.gameLevel.style = 'display:none;';
  this.gameModeContainer.style = 'display:none;';
  this.staticGameLevel.style = 'display:initial;';
  this.staticGameMode.style = 'display:initial;';
};
BrowserView.prototype.resetDisplay = function(level, gameMode) {
  this.staticGameLevel.style = 'display:none;';
  this.staticGameMode.style = 'display:none;';

  this.gameModeContainer.style = 'display:initial;';
  this.gameModeContainer.innerHTML = CONST.genModeMenu(gameMode);
  this.gameLevel.style = 'display:initial;';
  this.gameLevel.innerHTML = CONST.genLevelMenu(level);
};
BrowserView.prototype.updateHighScore = function(score) {
  if(this.highScore.innerHTML < score) {
    this.highScore.innerHTML = score;
    this.saveHighScore();
  }
};
BrowserView.prototype.saveHighScore = function() {
  window.localStorage.setItem("highScore", this.highScore.innerHTML);
};
BrowserView.prototype.loadHighScore = function() {
  var highScore = window.localStorage.getItem("highScore");
  if(highScore) {
    this.highScore.innerHTML = highScore;
  }
  else {
    this.highScore.innerHTML = 0;
  }
};
BrowserView.prototype.resetHighScore = function() {
  this.highScore.innerHTML = 0;
  this.saveHighScore();
};

module.exports = BrowserView;
