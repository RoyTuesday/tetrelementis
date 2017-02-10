var tetrisCxt = document.getElementById('tetris-grid').getContext('2d');
var previewCxt = document.getElementById('tetris-preview').getContext('2d');
var tableCxt = document.getElementById('tetris-table').getContext('2d');
BLOCK_SPACING_HEIGHT = tetrisCxt.canvas.height / 20;
BLOCK_SPACING_WIDTH = tetrisCxt.canvas.width / 10;
BLOCK_HEIGHT = BLOCK_SPACING_HEIGHT - 10;
BLOCK_WIDTH = BLOCK_SPACING_WIDTH - 10;

function update() {
  tetrisGrid.drop();
}
tetrisGrid.dropInterval = setInterval(update, DROP_DELAY[0]);

function renderBlock(context, num, i, width) {
  if (typeof num !== 'number') return;
  var chem = CHEMICAL_ELEMENTS[num];
  var x = (i % width) * BLOCK_SPACING_WIDTH;
  var y = Math.floor(i / width) * BLOCK_SPACING_HEIGHT;
  var xPos = x + 5;
  var yPos = y + 5;
  var textX = x + (BLOCK_SPACING_WIDTH / 2);
  var textY = y + (BLOCK_SPACING_HEIGHT / 2) + 4;

  var fontSize = FONT_SIZE;
  switch (chem.symbol.length) {
    case 1:
      textX -= 3;
      break;
    case 2:
      textX -= 7;
      break;
    case 3:
      fontSize -= 2;
      textX -= 7;
      break;
  }
  context.font = fontSize + BLOCK_FONT;

  context.lineWidth = 4;
  context.fillStyle = chem['background-color'];
  context.strokeStyle = chem['border-color'];

  context.fillRect(xPos, yPos, BLOCK_WIDTH, BLOCK_HEIGHT);
  context.strokeRect(xPos, yPos, BLOCK_WIDTH, BLOCK_HEIGHT);
  context.fillStyle = chem.color;
  context.fillText(chem.symbol, textX, textY);
}

function render() {
  tetrisCxt.clearRect(0, 0, tetrisCxt.canvas.width, tetrisCxt.canvas.height);
  previewCxt.clearRect(0, 0, previewCxt.canvas.width, previewCxt.canvas.height);
  tableCxt.clearRect(0, 0, tableCxt.canvas.width, tableCxt.canvas.height);

  for (var i = 0; i < 200; i++) {
    renderBlock(previewCxt, previewGrid[i], i, 4);
    renderBlock(tableCxt, tableGrid[i], i, 18);
  }
  tetrisGrid.render(tetrisCxt);
}

function step(timestamp) {
  render();

  if (!start) var start = timestamp;
  var progress = timestamp - start;
  if (progress < 2000) window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);

function handleKeyDown(event) {
  // if (!event.repeat) {
    if (!event.ctrlKey && !event.altKey && !event.metaKey) event.preventDefault();
    switch (event.key.toLowerCase()) {
      case 'arrowleft': tetrisGrid.slide('left'); break;
      case 'arrowright': tetrisGrid.slide('right'); break;
      case 'z': tetrisGrid.rotate('clock'); break;
      case 'a': tetrisGrid.rotate('count'); break;
      case 'arrowdown':
        clearInterval(tetrisGrid.dropInterval);
        tetrisGrid.dropInterval = setInterval(update, FAST_DROP);
        break;
    }
  // }
}
function handleKeyUp(event) {
  switch(event.key.toLowerCase()) {
    case 'arrowdown':
      clearInterval(tetrisGrid.dropInterval);
      tetrisGrid.dropInterval = setInterval(update, DROP_DELAY[0]);
      break;
  }
}
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);
