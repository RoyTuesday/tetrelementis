var gPeriodicTable = {
  board: [],
  activeIndex: -1,
  element: 0,
  showElement: function(aNum) {
    this.board[PERIODIC_TABLE.indexOf(aNum)] = aNum;
  },
  setElement: function(aNum) {
    this.element = aNum;
    var element = CHEMICAL_ELEMENTS[aNum];
    this.title = element.title;
    this.descrip = element.descrip;
  },
}
for (var i = 0; i < 162; i++) gPeriodicTable.board.push(0);

function renderPeriodicTable(context, table) {
  for (var i = 0; i < 162; i++) renderBlock(table.board[i], i, 18, 330, 330);
  // Chemical Element Description
  if (table.element > 0) {
    context.textAlign = 'left';
    context.fillStyle = '#111';
    context.strokeStyle = '#111';
    context.font = (FONT_SIZE * 2) + BLOCK_FONT;
    context.lineWidth = 1;

    context.fillText(table.title, 350, 155);
    context.strokeText(table.title, 350, 155);
    context.font = (FONT_SIZE * 1.5) + BLOCK_FONT;
    context.fillText('Atomic Number: ' + table.element, 700, 155);
    for (var i = 0; i < 5; i++) if (table.descrip[i]) context.fillText(table.descrip[i], 350, 188 + (i * (2 + FONT_SIZE * 1.5)));
  }
}
