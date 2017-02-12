function renderTableBlocks(b, i) { renderBlock(b, i, 18, 330, 330) }
function renderDescription(row, i) { context.fillText(row, 350, 188 + (i * (2 + FONT_SIZE * 1.5))) }

var PeriodicTable = function() {
  var board = []
  for (var i = 0; i < 162; i++) board.push(0);
  this.board = board;
}
PeriodicTable.prototype.activeIndex = -1;
PeriodicTable.prototype.element = 0;
PeriodicTable.prototype.showElement = function(aNum) {
  this.board[PERIODIC_TABLE.indexOf(aNum)] = aNum;
};
PeriodicTable.prototype.setElement = function(aNum) {
  this.element = aNum;
  var element = CHEMICAL_ELEMENTS[aNum];
  this.title = element.title;
  this.descrip = element.descrip;
};
PeriodicTable.prototype.render = function(context) {
  this.board.forEach(renderTableBlocks);
  // Chemical Element Description
  if (this.element > 0) {
    context.textAlign = 'left';
    context.fillStyle = '#111';
    context.strokeStyle = '#111';
    context.font = (FONT_SIZE * 2) + BLOCK_FONT;
    context.lineWidth = 1;

    context.fillText(this.title, 350, 155);
    context.strokeText(this.title, 350, 155);
    context.font = (FONT_SIZE * 1.5) + BLOCK_FONT;
    context.fillText('Atomic Number: ' + this.element, 700, 155);
    this.descrip.forEach(renderDescription);
  }
};

var tableGrid = new PeriodicTable;
