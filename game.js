var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.textAlign = 'center';
context.textBaseline = 'middle';

const BLOCK_SPACING = 30;
const BLOCK_PADDING = 5;
const BLOCK_SIZE = BLOCK_SPACING - (BLOCK_PADDING * 2);
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;

var saveData;
var storedData = window.localStorage.getItem('tetrelementis');
if (!storedData) {
  saveData = {
    highScore: 0
  }
}
else saveData = JSON.parse(storedData);

var paused = true;
var gameover = false;
var scene = 0;
var playerScore = 0;
var highScore = saveData.highScore;
var level = 0;
var resetBoard = 0;
var gameoverElement = 0;

function drop() {
  var lines = tetrisGrid.drop();
  if (lines < 0) {
    tetrisGrid.clearMovement();
    gameover = true;
    gameoverElement = (Math.random() * (CHEMICAL_ELEMENTS.length - 1) >> 0) + 1;
  }
  else if (lines > 0) {
    playerScore += Math.pow(2, lines) / 2;
    level = Math.min(20, playerScore / 10 >> 0);
  }
}
canSlide = true;
function allowSlide() { canSlide = true }
canRotate = true;
function allowRotate() { canRotate = true }
function update() {
  if (gameover) {
    tetrisGrid.board.splice(
      resetBoard * 10,
      10,
      gameoverElement,
      gameoverElement,
      gameoverElement,
      gameoverElement,
      gameoverElement,
      gameoverElement,
      gameoverElement,
      gameoverElement,
      gameoverElement,
      gameoverElement
    );
    if (resetBoard < 19) resetBoard++;
    else {
      if (gameoverElement === 0) {
        gameover = false;
        paused = true;
        tetrisGrid = new TetrisBoard;
        highScore = playerScore;
        playerScore = 0;
        level = 0;
        saveData.highScore = highScore;
        window.localStorage.setItem('tetrelementis', JSON.stringify(saveData));
      }
      else gameoverElement = 0;
      resetBoard = 0;
    }
  }

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

  context.fillStyle = chem.background;
  context.strokeStyle = chem.border;

  context.fillRect(xPos, yPos, BLOCK_SIZE, BLOCK_SIZE);
  context.strokeRect(xPos, yPos, BLOCK_SIZE, BLOCK_SIZE);
  context.fillStyle = chem.color;
  context.fillText(chem.symbol, textX, textY);
}

var activeKeys = {
  pause   : false,
  counter : false,
  clock   : false,
  left    : false,
  right   : false,
  up      : false,
  down    : false
}
var keyActions = {
  pause   : ' ',
  counter : 'z',
  clock   : 'x',
  left    : 'ArrowLeft',
  right   : 'ArrowRight',
  up      : 'ArrowUp',
  down    : 'ArrowDown'
};
var keyBinds = {
  ' ': 'pause',
  'z': 'counter', 'Z': 'counter',
  'x': 'clock',   'X': 'clock',
  'ArrowLeft' : 'left',
  'ArrowRight': 'right',
  'ArrowUp'   : 'up',
  'ArrowDown' : 'down'
};
function getAction(event) {
  var key = event.key;
  return keyBinds[key ? key : KEY_CODES[event.keyCode]];
}

function renderKeys(context, keyActions, activeKeys) {
  var x = 475;
  var y = 40;
  var size = FONT_SIZE;
  context.lineWidth = 3;
  context.strokeStyle = '#333';
  context.font = size + BLOCK_FONT;

  // Pause
  context.textAlign = 'left';
  context.fillStyle = '#111';
  context.fillText('Pause', x, y);
  context.fillStyle = activeKeys.pause ? '#555' : '#DDD';
  x += 9 * size;
  context.textAlign = 'center';
  switch (keyActions.pause) {
    case ' ':
      context.fillRect(x - (3 * size), y - size, 6 * size, 2 * size);
      context.strokeRect(x - (3 * size), y - size, 6 * size, 2 * size);
      break;
    default:
      context.fillRect(x - (2 * size), y - size, 2 * size, 2 * size);
      context.strokeRect(x - (2 * size), y - size, 2 * size, 2 * size);
      break;
  }
  context.fillStyle = activeKeys.pause ? '#EEE' : '#111';
  context.fillText(convertToDisplayKey(keyActions.pause), x, y);
  x = 475;
  y += 3 * size;
  // Move
  context.textAlign = 'left';
  context.fillStyle = '#111';
  context.fillText('Move', x, y);
  x += 9 * size;
  context.textAlign = 'center';
  // Left
  context.fillStyle = activeKeys.left ? '#555' : '#DDD';
  switch (keyActions.left) {
    case ' ':
      context.fillRect(x - (6 * size), y - size, 6 * size, 2 * size);
      context.strokeRect(x - (6 * size), y - size, 6 * size, 2 * size);
      break;
    default:
      context.fillRect(x - (4 * size), y - size, 2 * size, 2 * size);
      context.strokeRect(x - (4 * size), y - size, 2 * size, 2 * size);
      break;
  }
  context.fillStyle = activeKeys.left ? '#EEE' : '#111';
  context.fillText(convertToDisplayKey(keyActions.left), x - (3 * size), y);
  // Down
  context.fillStyle = activeKeys.down ? '#555' : '#DDD';
  switch (keyActions.down) {
    case ' ':
      context.fillRect(x - (3 * size), y - size, 6 * size, 2 * size);
      context.strokeRect(x - (3 * size), y - size, 6 * size, 2 * size);
      break;
    default:
      context.fillRect(x - size, y - size, 2 * size, 2 * size);
      context.strokeRect(x - size, y - size, 2 * size, 2 * size);
      break;
  }
  context.fillStyle = activeKeys.down ? '#EEE' : '#111';
  context.fillText(convertToDisplayKey(keyActions.down), x, y);
  // Right
  context.fillStyle = activeKeys.right ? '#555' : '#DDD';
  switch (keyActions.right) {
    case ' ':
      context.fillRect(x - size, y - size, 6 * size, 2 * size);
      context.strokeRect(x - size, y - size, 6 * size, 2 * size);
      break;
    default:
      context.fillRect(x + (2 * size), y - size, 2 * size, 2 * size);
      context.strokeRect(x + (2 * size), y - size, 2 * size, 2 * size);
      break;
  }
  context.fillStyle = activeKeys.right ? '#EEE' : '#111';
  context.fillText(convertToDisplayKey(keyActions.right), x + (3 * size), y);
  x = 475;
  y += 3 * size;
  // Rotate
  context.textAlign = 'left';
  context.fillStyle = '#111';
  context.fillText('Rotate', x, y);
  x += 9 * size;
  context.textAlign = 'center';
  // Counter
  context.fillStyle = activeKeys.counter ? '#555' : '#DDD';
  switch (keyActions.counter) {
    case ' ':
      context.fillRect(x - (3 * size), y - size, 6 * size, 2 * size);
      context.strokeRect(x - (3 * size), y - size, 6 * size, 2 * size);
      break;
    default:
      context.fillRect(x - (2.5 * size), y - size, 2 * size, 2 * size);
      context.strokeRect(x - (2.5 * size), y - size, 2 * size, 2 * size);
      break;
  }
  context.fillStyle = activeKeys.counter ? '#EEE' : '#111';
  context.fillText(convertToDisplayKey(keyActions.counter), x - (1.5 * size), y);
  // Clock
  context.fillStyle = activeKeys.clock ? '#555' : '#DDD';
  switch (keyActions.clock) {
    case ' ':
      context.fillRect(x + (3 * size), y - size, 6 * size, 2 * size);
      context.strokeRect(x + (3 * size), y - size, 6 * size, 2 * size);
      break;
    default:
      context.fillRect(x + (0.5 * size), y - size, 2 * size, 2 * size);
      context.strokeRect(x + (0.5 * size), y - size, 2 * size, 2 * size);
      break;
  }
  context.fillStyle = activeKeys.clock ? '#EEE' : '#111';
  context.fillText(convertToDisplayKey(keyActions.clock), x + (1.5 * size), y);
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

  renderKeys(context, keyActions, activeKeys);

  // Player score
  context.textAlign = 'right';
  context.fillStyle = '#111';
  context.font = (FONT_SIZE * 1.5) + BLOCK_FONT;
  context.fillText('Score:', 830, 30);
  context.fillText('Hi Score:', 830, 55);
  context.fillText('Level:', 830, 80);

  context.textAlign = 'left';
  context.fillText(playerScore, 840, 30);
  context.fillText(highScore, 840, 55);
  context.fillText(level, 840, 80);
  context.textAlign = 'center';
  // Pause overlay
  if (paused) {
    var halfW = CANVAS_WIDTH / 2;
    var halfH = CANVAS_HEIGHT / 2;
    context.fillStyle = '#FFF7';
    context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    context.fillStyle = '#FFFC';
    context.fillRect(halfW - 52, halfH - 18, 104, 36);
    context.fillStyle = '#111';
    context.fillText('Paused', halfW, halfH);
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
  var action = getAction(event);
  if (!event.ctrlKey && !event.altKey && !event.metaKey) event.preventDefault();
  if (!event.repeat) {
    if (paused) {
      if (action == 'pause') {
        tetrisGrid.clearMovement();
        tetrisGrid.dropInterval = setInterval(drop, DROP_DELAY[level]);
        paused = false;
      }
    }
    else if (! gameover) {
      activeKeys[action] = true;
      switch (action) {
        case 'up'     : tetrisGrid.raise();           break;
        case 'left'   : tetrisGrid.slideDirection--;  break;
        case 'right'  : tetrisGrid.slideDirection++;  break;
        case 'counter': tetrisGrid.rotateDirection--; break;
        case 'clock'  : tetrisGrid.rotateDirection++; break;
        case 'down':
          clearInterval(tetrisGrid.dropInterval);
          tetrisGrid.dropInterval = setInterval(drop, FAST_DROP);
          break;
        case 'pause':
          clearInterval(tetrisGrid.dropInterval);
          tetrisGrid.dropInterval = 0;
          paused = true;
          break;
      }
    }
  }
}
function handleKeyUp(event) {
  var action = getAction(event);
  if (!gameover && !paused && action == 'down') {
    clearInterval(tetrisGrid.dropInterval);
    tetrisGrid.dropInterval = setInterval(drop, DROP_DELAY[level]);
  }

  activeKeys[action] = false;
  switch (action) {
    case 'left'   : tetrisGrid.slideDirection++;  break;
    case 'right'  : tetrisGrid.slideDirection--;  break;
    case 'counter': tetrisGrid.rotateDirection++; break;
    case 'clock'  : tetrisGrid.rotateDirection--; break;
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
  var x = (event.layerX * canvasScale) - 345;
  var y = (event.layerY * canvasScale) - 345;
  var i = ((x / BLOCK_SPACING) >> 0) + (18 * ((y / BLOCK_SPACING) >> 0));
  if (x >= 0 && x <= 540 && y >= 0 && y <= 270 && i >= 0 && tableGrid.board[i] > 0) tableGrid.activeIndex = i;
  else if (tableGrid.activeIndex >= 0) tableGrid.activeIndex = -1;
}
canvas.addEventListener('mousemove', handleMouseMove);

function handleMouseDown(event) {
  var aNum = tableGrid.board[tableGrid.activeIndex];
  if (aNum > 0) tableGrid.setElement(aNum);
}
canvas.addEventListener('mousedown', handleMouseDown);
