var keyCodes = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  8: 'backspace'
}

var View = function(args) {
  this.context = document.querySelector('canvas').getContext('2d');
  this.gameBoard = args.gameBoard;
  this.pressed = false;

  addEventListener('keydown', this.keyDown.bind(this));
  addEventListener('keyup', this.keyUp.bind(this));
}
View.prototype.keyDown = function(event) {
  var pressedKey = keyCodes[event.keyCode];
  if(pressedKey == 'left' || pressedKey == 'right') {
    event.preventDefault();
    if(this.pressed == false) {
      this.pressed = pressedKey;
      this.handleInput.bind(this).call();
    }
  }
};
View.prototype.keyUp = function(event){
  var releasedKey = keyCodes[event.keyCode];
  if(releasedKey == 'left' || releasedKey == 'right') {
    event.preventDefault();
    this.pressed = false;
  }
};
View.prototype.handleInput = function() {
  if(this.pressed) {
    this.gameBoard.slideBlock(this.pressed);
    setTimeout(this.handleInput.bind(this), INPUT_DELAY);
  }
};
View.prototype.drawBoard = function(board) {
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
View.prototype.animate = function(board) {
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

var ready = function(fn) {
  if(document.readyState != 'loading') {
    fn();
  }
  else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
ready(function() {
  var canvas = document.querySelector('canvas');
  BLOCK_SPACING_HEIGHT = canvas.getAttribute('height') / 20;
  BLOCK_SPACING_WIDTH = canvas.getAttribute('width') / 10;
  BLOCK_HEIGHT = BLOCK_SPACING_HEIGHT - 10;
  BLOCK_WIDTH = BLOCK_SPACING_WIDTH - 10;

  window.lineBlock = new Tetrinimo({element: 1, shape: TETRINIMO_SHAPES.line});
  window.gameBoard = new TetrisBoard({tetrinimo: lineBlock});
  window.gameView = new View({gameBoard: gameBoard});
  
  gameBoard.blit({tetrinimo: lineBlock});
  gameView.animate(gameBoard.board);
  gameBoard.dropBlock();
});
