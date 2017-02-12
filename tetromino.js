var Tetromino = function() {
  if (elementsQueue.length === 0) elementsQueue = generateRandomElements(CHEMICAL_ELEMENTS);
  this.element = elementsQueue.pop();

  var shapes = TETROMINO_SHAPES;
  if (shapesQueue.length === 0) shapesQueue = generateRandomShapes(shapes);
  this.shape = shapesQueue.pop();
  this.blocks = shapes[this.shape];
};
Tetromino.prototype.convertForBoard = function(width) {
  blocks = [];
  for (var i = 0; i < this.blocks.length; i++) {
    var b = this.blocks[i];
    if (b > 3) blocks.push(b + 9);
    else blocks.push(b + 3);
  }
  this.blocks = blocks;

  return this;
}
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
  var center = blocks[0];
  var transCenter = ((center % 10) * 10 * direction) + ((direction * center / -10) >> 0);
  var transX = ((center % 10) - (transCenter % 10)) >> 0;
  var transY = ((center / 10) >> 0) - ((transCenter / 10) >> 0);

  return blocks.map(function(b, i) {
    if (i === 0) return b;
    else return ((((b / -10) >> 0) * direction) + transX) + ((((b % 10) * direction) + transY) * 10);
  });
};
