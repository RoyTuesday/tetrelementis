var Tetrinimo = function(args) {
  this.element = args.element;
  var shape = args.shape;

  this.blocks = shape.map(function(block) {
    return {x: new Number(block.x), y: new Number(block.y)};
  });

  this.row = 0;
  this.col = 5;

  for(var block in this.blocks) {
    this.blocks[block].y += this.row;
    this.blocks[block].x += this.col;
  }
}
Tetrinimo.prototype.raise = function() {
  this.row--;
  for(var block in this.blocks) {
    this.blocks[block].y--;
  }
};
Tetrinimo.prototype.drop = function() {
  this.row++;
  for(var block in this.blocks) {
    this.blocks[block].y++;
  }
};
var directToInt = {
  'left': -1,
  'right': 1
};
Tetrinimo.prototype.slide = function(direction) {
  this.blocks.forEach(function(block) {
    block.x += directToInt[direction];
  });
};
