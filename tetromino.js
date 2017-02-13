function decreaseByTen(num) { return num -= 10 }
function increaseByTen(num) { return num += 10 }

var Tetromino = function() {
  if (elementsQueue.length === 0) elementsQueue = generateRandomElements(CHEMICAL_ELEMENTS);
  this.element = elementsQueue.pop();

  var shapes = TETROMINO_SHAPES;
  if (shapesQueue.length === 0) shapesQueue = generateRandomShapes(shapes);
  this.shape = shapesQueue.pop();
  this.blocks = shapes[this.shape];

  gPeriodicTable.setElement(this.element);
};
Tetromino.prototype.raise = function() {
  return this.blocks.map(decreaseByTen);
};
Tetromino.prototype.drop = function() {
  return this.blocks.map(increaseByTen);
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
