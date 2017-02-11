var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.textAlign = 'center';
context.textBaseline = 'middle';

const BLOCK_SPACING = canvas.height / 20;
const BLOCK_SIZE = BLOCK_SPACING - 10;
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;

var scene = 0;
var playerScore = 0;

function update() {
  var lines = tetrisGrid.drop();
  if (lines < 0) {
    clearInterval(tetrisGrid.dropInterval);
    tetrisGrid = new TetrisBoard;
    tetrisGrid.dropInterval = setInterval(update, DROP_DELAY[0]);
  }
  else playerScore += lines;
}

function renderBlock(num, i, width, xOff, yOff) {
  if (typeof num !== 'number') return;
  var chem = CHEMICAL_ELEMENTS[num];
  var x = xOff + (i % width) * BLOCK_SPACING;
  var y = yOff + Math.floor(i / width) * BLOCK_SPACING;
  var xPos = x + 5;
  var yPos = y + 5;
  var textX = x + (BLOCK_SPACING / 2);
  var textY = y + (BLOCK_SPACING / 2) + 2;

  var fontSize = FONT_SIZE;
  if (chem.symbol.length === 3) fontSize -= 2;
  context.font = fontSize + BLOCK_FONT;

  context.fillStyle = chem['background-color'];
  context.strokeStyle = chem['border-color'];

  context.fillRect(xPos, yPos, BLOCK_SIZE, BLOCK_SIZE);
  context.strokeRect(xPos, yPos, BLOCK_SIZE, BLOCK_SIZE);
  context.fillStyle = chem.color;
  context.fillText(chem.symbol, textX, textY);
}
function renderTetrisBlocks(b, i) { renderBlock(b, i, 10, 0, 0) }
function renderPreviewBlocks(b, i) { renderBlock(b, i, 4, 330, 0) }
function renderTableBlocks(b, i) { renderBlock(b, i, 18, 330, 330) }

function render() {
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  context.lineWidth = 4;
  tableGrid.render(context);
  previewGrid.render(context);
  tetrisGrid.render(context);

  var active = tableGrid.activeIndex;
  if (active >= 0) {
    context.fillStyle = '#FFF7';
    context.fillRect(330 + (active % 18) * BLOCK_SPACING, 360 + (active / 18 >> 0) * BLOCK_SPACING, BLOCK_SPACING, BLOCK_SPACING);
  }

  if (tetrisGrid.dropInterval === 0) {
    context.fillStyle = '#FFF7';
    context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    context.font = (FONT_SIZE * 2) + BLOCK_FONT;
    context.fillStyle = '#111';
    context.fillText('Paused', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
  }
}

function step(timestamp) {
  render();

  if (!start) var start = timestamp;
  var progress = timestamp - start;
  if (progress < 2000) window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);

function handleKeyDown(event) {
  if (!event.repeat) {
    if (!event.ctrlKey && !event.altKey && !event.metaKey) event.preventDefault();
    if (tetrisGrid.dropInterval > 0) {
      switch (event.key.toLowerCase()) {
        case 'arrowleft': tetrisGrid.slide('left'); break;
        case 'arrowright': tetrisGrid.slide('right'); break;
        case 'arrowup': tetrisGrid.raise(); break;
        case 'z': tetrisGrid.rotate('clock'); break;
        case 'a': tetrisGrid.rotate('count'); break;
        case 'arrowdown':
          clearInterval(tetrisGrid.dropInterval);
          tetrisGrid.dropInterval = setInterval(update, FAST_DROP);
          break;
        case ' ':
          clearInterval(tetrisGrid.dropInterval);
          tetrisGrid.dropInterval = 0;
          break;
      }
    }
    else if (event.key.toLowerCase() == ' ') tetrisGrid.dropInterval = setInterval(update, DROP_DELAY[0]);
  }
}
function handleKeyUp(event) {
  if (tetrisGrid.dropInterval > 0) {
    switch(event.key.toLowerCase()) {
      case 'arrowdown':
        clearInterval(tetrisGrid.dropInterval);
        tetrisGrid.dropInterval = setInterval(update, DROP_DELAY[0]);
        break;
    }
  }
}
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

function handleMouseMove(event) {
  var x = ((event.layerX - 330) / BLOCK_SPACING) >> 0;
  var y = ((event.layerY - 360) / BLOCK_SPACING) >> 0;
  var i = x + (18 * y);
  if (i >= 0 && tableGrid.board[i] > 0) tableGrid.activeIndex = i;
  else if (tableGrid.activeIndex >= 0) tableGrid.activeIndex = -1;
}
canvas.addEventListener('mousemove', handleMouseMove);
