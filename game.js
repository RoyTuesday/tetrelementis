var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.textAlign = 'center';
context.textBaseline = 'middle';

const BLOCK_SPACING = 30;
const BLOCK_PADDING = 5;
const BLOCK_SIZE = BLOCK_SPACING - (BLOCK_PADDING * 2);
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;

var scene = 0;
var playerScore = 0;
var highScore = 0;

function drop() {
  var lines = tetrisGrid.drop();
  if (lines < 0) {
    clearInterval(tetrisGrid.dropInterval);
    tetrisGrid = new TetrisBoard;
    tetrisGrid.dropInterval = setInterval(drop, DROP_DELAY[0]);
    highScore = playerScore;
    playerScore = 0;
  }
  else if (lines > 0) playerScore += Math.pow(2, lines) / 2;
}
canSlide = true;
function allowSlide() { canSlide = true }
canRotate = true;
function allowRotate() { canRotate = true }
function update() {
  if (canSlide && tetrisGrid.slideDirection !== 0) {
    tetrisGrid.slide();
    canSlide = false;
    setTimeout(allowSlide, FAST_DROP);
  }

  if (canRotate && tetrisGrid.rotateDirection !== 0) {
    tetrisGrid.rotate();
    canRotate = false;
    setTimeout(allowRotate, FAST_DROP * 5);
  }
}

function renderBlock(num, i, width, xOff, yOff) {
  if (typeof num !== 'number') return;
  var chem = CHEMICAL_ELEMENTS[num];
  var x = 15 + xOff + (i % width) * BLOCK_SPACING;
  var y = 15 + yOff + Math.floor(i / width) * BLOCK_SPACING;
  var xPos = x + BLOCK_PADDING;
  var yPos = y + BLOCK_PADDING;
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

var frame = 0;
function render() {
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  context.fillStyle = '#E1DEEA';
  context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  context.lineWidth = 4;
  previewGrid.render(context);
  tetrisGrid.render(context);
  tableGrid.render(context);
  // Periodic Table element highlight
  var active = tableGrid.activeIndex;
  if (active >= 0) {
    context.fillStyle = '#FFF7';
    context.fillRect(345 + (active % 18) * BLOCK_SPACING, 345 + (active / 18 >> 0) * BLOCK_SPACING, BLOCK_SPACING, BLOCK_SPACING);
  }
  // Player score
  context.textAlign = 'left';
  context.fillStyle = '#111';
  context.font = (FONT_SIZE * 2) + BLOCK_FONT;
  context.fillText('Score: ' + playerScore, 480, 30);
  context.fillText('Hi Score: ' + highScore, 480, 60);
  context.textAlign = 'center';
  // Pause overlay
  if (tetrisGrid.dropInterval === 0) {
    context.fillStyle = '#FFF7';
    context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    context.fillStyle = '#111';
    context.fillText('Paused', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
  }
}

function step(timestamp) {
  update();
  render();

  if (!start) var start = timestamp;
  var progress = timestamp - start;
  if (progress < 2000) window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);

function handleKeyDown(event) {
  if (!event.ctrlKey && !event.altKey && !event.metaKey) event.preventDefault();
  if (!event.repeat) {
    if (tetrisGrid.dropInterval > 0) {
      switch (event.key.toLowerCase()) {
        case 'arrowleft' : tetrisGrid.slideDirection--; break;
        case 'arrowright': tetrisGrid.slideDirection++; break;
        case 'arrowup': tetrisGrid.raise(); break;
        case 'z': tetrisGrid.rotateDirection--; break;
        case 'x': tetrisGrid.rotateDirection++; break;
        case 'arrowdown':
          clearInterval(tetrisGrid.dropInterval);
          tetrisGrid.dropInterval = setInterval(drop, FAST_DROP);
          break;
        case ' ':
          clearInterval(tetrisGrid.dropInterval);
          tetrisGrid.dropInterval = 0;
          break;
      }
    }
    else if (event.key.toLowerCase() == ' ') tetrisGrid.dropInterval = setInterval(drop, DROP_DELAY[0]);
  }
}
function handleKeyUp(event) {
  var key = event.key.toLowerCase();
  if (tetrisGrid.dropInterval > 0 && key == 'arrowdown') {
    clearInterval(tetrisGrid.dropInterval);
    tetrisGrid.dropInterval = setInterval(drop, DROP_DELAY[0]);
  }

  switch (key) {
    case 'arrowleft' : tetrisGrid.slideDirection++; break;
    case 'arrowright': tetrisGrid.slideDirection--; break;
    case 'z': tetrisGrid.rotateDirection++; break;
    case 'x': tetrisGrid.rotateDirection--; break;
  }
}
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

var canvasScale = canvas.width / canvas.offsetWidth;
function handleResize() {
  canvasScale = canvas.width / canvas.offsetWidth;
}
window.addEventListener('resize', handleResize);

function handleMouseMove(event) {
  var x = (((event.layerX * canvasScale) - 345) / BLOCK_SPACING) >> 0;
  var y = (((event.layerY * canvasScale) - 345) / BLOCK_SPACING) >> 0;
  var i = x + (18 * y);
  if (i >= 0 && tableGrid.board[i] > 0) tableGrid.activeIndex = i;
  else if (tableGrid.activeIndex >= 0) tableGrid.activeIndex = -1;
}
canvas.addEventListener('mousemove', handleMouseMove);
