function decreaseByTen(num) { return num -= 10 }
function increaseByTen(num) { return num += 10 }
function returnSelf(el) { return el }

var Tetromino = function() {
  if (elementsQueue.length === 0) elementsQueue = generateRandomElements(CHEMICAL_ELEMENTS);
  this.element = elementsQueue.pop();

  var shapes = TETROMINO_SHAPES;
  if (shapesQueue.length === 0) shapesQueue = generateRandomShapes(shapes);
  this.shape = shapesQueue.pop();
  this.blocks = shapes[this.shape];

  setTableElement(gPeriodicTable, this.element);
};
Tetromino.prototype.drop = function() {
  return this.blocks.map(increaseByTen);
};
Tetromino.prototype.slide = function(xMod) {
  var blocks = this.blocks;
  for (var i = 0; i < 4; i++) blocks[i] += xMod;
  this.blocks = blocks;
};
Tetromino.prototype.rotate = function(direction) {
  if (this.shape == 'square') return false;
  var blocks = this.blocks.map(returnSelf);
  var center = blocks[0];
  var transCenter = ((center % 10) * 10 * direction) + ((direction * center / -10) >> 0);
  var transX = ((center % 10) - (transCenter % 10)) >> 0;
  var transY = ((center / 10) >> 0) - ((transCenter / 10) >> 0);

  for (var i = 1; i < 4; i++) {
    blocks[i] = ((((blocks[i] / -10) >> 0) * direction) + transX) + ((((blocks[i] % 10) * direction) + transY) * 10);
  }
  return blocks;
};
