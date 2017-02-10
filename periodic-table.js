var PeriodicTable = function() {
  var board = []
  for (var i = 0; i < 162; i++) board.push(0);
  this.board = board;
}
PeriodicTable.prototype.showElement = function(aNum) {
  this.board[PERIODIC_TABLE.indexOf(aNum)] = aNum;
}
PeriodicTable.prototype.render = function(context) {
  this.board.forEach(function(b, i) { renderBlock(context, b, i, 18) });
};

var tableGrid = new PeriodicTable;
