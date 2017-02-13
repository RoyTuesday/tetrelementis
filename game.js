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
  var lines = dropTetromino(gTetrisBoard);
  if (lines < 0) {
    clearMovement(gTetrisBoard);
    gameover = true;
    gameoverElement = nextTetromino.element;
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
    gTetrisBoard.board.splice(
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
        highScore = playerScore;
        playerScore = 0;
        level = 0;
        saveData.highScore = highScore;
        window.localStorage.setItem('tetrelementis', JSON.stringify(saveData));
        gTetrisBoard.board = setTetrisBoard();
      }
      else gameoverElement = 0;
      resetBoard = 0;
    }
  }

  if (canSlide && gTetrisBoard.slideDirection !== 0) {
    slideTetromino(gTetrisBoard);
    canSlide = false;
    setTimeout(allowSlide, FAST_DROP);
  }

  if (canRotate && gTetrisBoard.rotateDirection !== 0) {
    rotateTetromino(gTetrisBoard);
    canRotate = false;
    setTimeout(allowRotate, FAST_DROP * 5);
  }
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

function step(timestamp) {
  if (!start) var start = timestamp;

  update();
  render(context);

  var progress = timestamp - start;
  if (progress < 2000) window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);

function handleKeyDown(event) {
  var action = getAction(event);
  var board = gTetrisBoard;
  if (!event.ctrlKey && !event.altKey && !event.metaKey) event.preventDefault();
  if (!event.repeat) {
    if (paused) {
      if (action == 'pause') {
        clearMovement(board);
        board.dropInterval = setInterval(drop, DROP_DELAY[level]);
        paused = false;
      }
    }
    else if (! gameover) {
      activeKeys[action] = true;
      switch (action) {
        case 'left'   : board.slideDirection--;  break;
        case 'right'  : board.slideDirection++;  break;
        case 'counter': board.rotateDirection--; break;
        case 'clock'  : board.rotateDirection++; break;
        case 'down':
          clearInterval(board.dropInterval);
          board.dropInterval = setInterval(drop, FAST_DROP);
          break;
        case 'pause':
          clearInterval(board.dropInterval);
          board.dropInterval = 0;
          paused = true;
          break;
      }
    }
  }
}
function handleKeyUp(event) {
  var action = getAction(event);
  var board = gTetrisBoard;
  if (!gameover && !paused && action == 'down') {
    clearInterval(board.dropInterval);
    board.dropInterval = setInterval(drop, DROP_DELAY[level]);
  }

  activeKeys[action] = false;
  switch (action) {
    case 'left'   : board.slideDirection++;  break;
    case 'right'  : board.slideDirection--;  break;
    case 'counter': board.rotateDirection++; break;
    case 'clock'  : board.rotateDirection--; break;
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
  if (x >= 0 && x <= 540 && y >= 0 && y <= 270 && i >= 0 && gPeriodicTable.board[i] > 0) gPeriodicTable.activeIndex = i;
  else if (gPeriodicTable.activeIndex >= 0) gPeriodicTable.activeIndex = -1;
}
canvas.addEventListener('mousemove', handleMouseMove);

function handleMouseDown(event) {
  var aNum = gPeriodicTable.board[gPeriodicTable.activeIndex];
  if (aNum > 0) setTableElement(gPeriodicTable, aNum);
}
canvas.addEventListener('mousedown', handleMouseDown);
