var BrowserView = function(args) {
  this.context = document.querySelector('canvas').getContext('2d');
  this.gameBoard = args.gameBoard;
  this.pressed = false;

  addEventListener('keydown', this.keyDown.bind(this));
  addEventListener('keyup', this.keyUp.bind(this));
}
BrowserView.prototype.keyDown = function(event) {
  var pressedKey = KEY_CODES[event.keyCode];
  if(pressedKey == 'left' || pressedKey == 'right') {
    event.preventDefault();
    if(this.pressed == false) {
      this.pressed = pressedKey;
      this.handleInput.bind(this).call();
    }
  }
};
BrowserView.prototype.keyUp = function(event){
  var releasedKey = KEY_CODES[event.keyCode];
  if(releasedKey == 'left' || releasedKey == 'right') {
    event.preventDefault();
    this.pressed = false;
  }
};
BrowserView.prototype.handleInput = function() {
  if(this.pressed) {
    this.gameBoard.slideBlock(this.pressed);
    setTimeout(this.handleInput.bind(this), INPUT_DELAY);
  }
};
BrowserView.prototype.drawBoard = function(board) {
  var context = this.context
  context.lineWidth = 4;
  context.font = BLOCK_FONT;

  board.forEach(function(row, rIndex) {
    row.forEach(function(col, cIndex) {
      context.fillStyle = CHEMICAL_ELEMENTS[col]['background-color'];
      context.strokeStyle = CHEMICAL_ELEMENTS[col]['border-color'];

      context.fillRect((cIndex * BLOCK_SPACING_WIDTH) + 5, (rIndex * BLOCK_SPACING_HEIGHT) + 5, BLOCK_WIDTH, BLOCK_HEIGHT);
      context.strokeRect((cIndex * BLOCK_SPACING_WIDTH) + 5, (rIndex * BLOCK_SPACING_HEIGHT) + 5, BLOCK_WIDTH, BLOCK_HEIGHT);
      context.fillStyle = CHEMICAL_ELEMENTS[col]['color'];
      context.fillText(CHEMICAL_ELEMENTS[col].symbol, (cIndex * BLOCK_SPACING_WIDTH) + (BLOCK_SPACING_WIDTH / 2) - 4, (rIndex * BLOCK_SPACING_HEIGHT) + (BLOCK_SPACING_HEIGHT / 2) + 4);
    });
  });
};
BrowserView.prototype.animate = function(board) {
  var lastTime = null;
  var progress = true;
  var self = this;

  var animate = function(time) {
    if(lastTime) {
      var timeStep = Math.min(time - lastTime, 100) / 1000;
      progress = timeStep < 2000;
    }
    lastTime = time;
    self.drawBoard(board);
    if(progress) {
      requestAnimationFrame(animate);
    }
  }
  requestAnimationFrame(animate);
};
