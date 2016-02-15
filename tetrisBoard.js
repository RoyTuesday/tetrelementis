var TetrisBoard = function(args) {
  this.board = new Array;
  this.tetrinimo = args.tetrinimo;
  this.dropTimeout = new Number;

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
TetrisBoard.prototype.dropBlock = function(quickly) {
  var dropDelay = quickly ? FAST_DROP : DROP_DELAY;
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
  this.dropTimeout = setTimeout(this.dropBlock.bind(this, quickly), dropDelay);
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
