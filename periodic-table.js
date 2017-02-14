var gPeriodicTable = {
  board: [],
  activeIndex: -1,
  element: 0,
}
for (var i = 0; i < 162; i++) gPeriodicTable.board.push(0);

function showTableElement(table, aNum) {
  table.board[PERIODIC_TABLE.indexOf(aNum)] = aNum;
}
function setTableElement(table, aNum) {
  table.element = aNum;
  var element = CHEMICAL_ELEMENTS[aNum];
  table.title = element.title;
  table.descrip = element.descrip;
}
function renderPeriodicTable(context, table) {
  var x = 345;
  var y = 345;
  var spacing = BLOCK_SPACING;
  var right = x + (spacing * 18);

  for (var i = 0; i < 162; i++) {
    renderBlock(context, table.board[i], x, y);
    x += spacing;
    if (x == right) {
      x = 345;
      y += spacing;
    }
  }

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
