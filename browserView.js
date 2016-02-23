var BrowserView = function(args) {
  var gridCanvas = document.querySelector('canvas#tetris-grid');
  var previewCanvas = document.querySelector('canvas#tetris-preview');

  BLOCK_SPACING_HEIGHT = gridCanvas.getAttribute('height') / 20;
  BLOCK_SPACING_WIDTH = gridCanvas.getAttribute('width') / 10;
  BLOCK_HEIGHT = BLOCK_SPACING_HEIGHT - 10;
  BLOCK_WIDTH = BLOCK_SPACING_WIDTH - 10;

  this.gridContext = gridCanvas.getContext('2d');
  this.previewContext = previewCanvas.getContext('2d');

  this.gameBoard = args.gameBoard;
  this.cycleDropBlock = args.cycleDropBlock;
  this.pressed = {
    slide: false,
    drop: false,
    rotate: false
  };

  addEventListener('keydown', this.keyDown.bind(this));
  addEventListener('keyup', this.keyUp.bind(this));
}
BrowserView.prototype.keyDown = function(event) {
  var pressedKey = KEY_CODES[event.keyCode];
  if(pressedKey == 'left' || pressedKey == 'right') {
    event.preventDefault();
    if(this.pressed.slide == false) {
      this.pressed.slide = pressedKey;
      this.handleInput.bind(this).call();
    }
  }
  if(pressedKey == 'down') {
    event.preventDefault();
    if(this.pressed.drop == false) {
      this.pressed.drop = true;
      this.handleInput.bind(this).call();
    }
  }
  if(pressedKey == 'up') {
    event.preventDefault();
    if(this.pressed.rotate == false) {
      this.pressed.rotate = true;
      this.handleInput.bind(this).call();
    }
  }
};
BrowserView.prototype.keyUp = function(event){
  var releasedKey = KEY_CODES[event.keyCode];
  if(releasedKey == 'left' || releasedKey == 'right') {
    event.preventDefault();
    this.pressed.slide = false;
  }
  if(releasedKey == 'down') {
    event.preventDefault();
    this.pressed.drop = false;
    clearTimeout(this.dropTimeout);
    this.cycleDropBlock();
  }
  if(releasedKey == 'up') {
    event.preventDefault();
    this.pressed.rotate = false;
  }
};
BrowserView.prototype.handleInput = function() {
  if(this.pressed.slide) {
    this.gameBoard.slideBlock(this.pressed.slide);
    setTimeout(this.handleInput.bind(this), INPUT_DELAY);
  }
  if(this.pressed.drop) {
    clearTimeout(this.dropTimeout);
    this.cycleDropBlock({quickly: true});
  }
  if(this.pressed.rotate) {
    this.gameBoard.rotateBlock('counter');
    setTimeout(this.handleInput.bind(this), INPUT_DELAY);
  }
};
BrowserView.prototype.drawBoard = function(board) {
  var gridContext = this.gridContext
  gridContext.lineWidth = 4;
  gridContext.font = BLOCK_FONT;

  board.forEach(function(row, rIndex) {
    row.forEach(function(col, cIndex) {
      gridContext.fillStyle = CHEMICAL_ELEMENTS[col]['background-color'];
      gridContext.strokeStyle = CHEMICAL_ELEMENTS[col]['border-color'];

      gridContext.fillRect((cIndex * BLOCK_SPACING_WIDTH) + 5, (rIndex * BLOCK_SPACING_HEIGHT) + 5, BLOCK_WIDTH, BLOCK_HEIGHT);
      gridContext.strokeRect((cIndex * BLOCK_SPACING_WIDTH) + 5, (rIndex * BLOCK_SPACING_HEIGHT) + 5, BLOCK_WIDTH, BLOCK_HEIGHT);
      gridContext.fillStyle = CHEMICAL_ELEMENTS[col]['color'];
      gridContext.fillText(CHEMICAL_ELEMENTS[col].symbol, (cIndex * BLOCK_SPACING_WIDTH) + (BLOCK_SPACING_WIDTH / 2) - 6, (rIndex * BLOCK_SPACING_HEIGHT) + (BLOCK_SPACING_HEIGHT / 2) + 4);
    });
  });
};
BrowserView.prototype.animate = function() {
  var lastTime = null;
  var progress = true;
  var self = this;

  var animate = function(time) {
    if(lastTime) {
      var timeStep = Math.min(time - lastTime, 100) / 1000;
      progress = timeStep < 2000;
    }
    lastTime = time;
    self.drawBoard(self.gameBoard.board);
    if(progress) {
      requestAnimationFrame(animate);
    }
  }
  requestAnimationFrame(animate);
};
