var TetrisBoard = function(args) {
  this.board = new Array;
  this.tetrinimo = args.tetrinimo;
  this.dropDelay = DROP_DELAY;

  for(var row = 0; row < 20; row++) {
    this.board[row] = new Array;
    for(var col = 0; col < 10; col++) {
      this.board[row][col] = 0;
    }
  };
}
TetrisBoard.prototype.blit = function(clear) {
  var element = this.tetrinimo.element;

  if(clear) {
    element = 0;
  }

  for(var block in this.tetrinimo.blocks) {
    var currentBlock = this.tetrinimo.blocks[block];
    this.board[currentBlock.y][currentBlock.x] = element;
  }
};
TetrisBoard.prototype.detectCollision = function() {
  for(var block in this.tetrinimo.blocks) {
    currentBlock = this.tetrinimo.blocks[block];
    if(currentBlock.y >= GRID_HEIGHT) {
      return 'floor';
    }
    else if(currentBlock.x < 0 || currentBlock.x >= GRID_WIDTH) {
      return 'wall';
    }
    else if(this.board[currentBlock.y][currentBlock.x] !== 0) {
      return 'block';
    }
  }
  return 'clear';
};
TetrisBoard.prototype.dropBlock = function() {
  this.blit(true);
  this.tetrinimo.drop();
  var collision = this.detectCollision();
  if(collision == 'floor' || collision == 'block') {
    this.tetrinimo.raise();
    this.blit();
    this.tetrinimo = null;
    clearInterval(this.intervalID);
    return;
  }
  this.blit();
  setTimeout(this.dropBlock.bind(this), this.dropDelay);
};
TetrisBoard.prototype.slideBlock = function(direction) {
  this.blit(true);
  this.tetrinimo.slide(direction);
  var collision = this.detectCollision();
  if(collision == 'wall' || collision == 'block') {
    var reverseDirection = direction == 'left' ? 'right' : 'left';
    this.tetrinimo.slide(reverseDirection);
  }
  this.blit();
};
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
