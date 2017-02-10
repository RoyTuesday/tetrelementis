var Tetromino = function(element, shape) {
  this.element = element;
  this.shape = shape;
  this.blocks = TETROMINO_SHAPES[shape];
};
Tetromino.prototype.raise = function() {
  return this.blocks.map(function(b) { return b -= 10 });
};
Tetromino.prototype.drop = function() {
  return this.blocks.map(function(b) { return b += 10 });
};
Tetromino.prototype.slide = function(xMod) {
  this.blocks = this.blocks.map(function(b) { return b += xMod });
};
Tetromino.prototype.rotate = function(direction) {
  if (this.shape == 'square') return false;
  var blocks = this.blocks;
  var center = blocks[1];
  var multX = direction == 'clock' ? -1 : 1;
  var multY = direction == 'count' ? -1 : 1;
  var transCenter = ((center % 10) * 10 * multY) + ((multX * center / 10) >> 0);
  var transX = ((center % 10) - (transCenter % 10)) >> 0;
  var transY = ((center / 10) >> 0) - ((transCenter / 10) >> 0);

  return blocks.map(function(b, i) {
    if (i === 1) return b;
    else {
      var x = ((b / 10) >> 0) * multX;
      var y = (b % 10) * multY;
      return (x + transX) + ((y + transY) * 10);
    }
  });
};
