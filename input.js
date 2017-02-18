var saveData;
var storedData = window.localStorage.getItem('tetrelementis');
if (!storedData) {
  saveData = {
    highScore: 0
  }
}
else saveData = JSON.parse(storedData);

var paused = true;
var optionsMenu = false;
var activeElement = '';
var gameover = false;
var scene = 0;
var playerScore = 0;
var highScore = saveData.highScore;
var level = 0;
var gameMode = 'Marathon';
var resetBoard = 0;
var gameoverElement = 0;
var comboQueue = [];

var gMouse = { x: 0, y: 0, overElement: '' }
function setOverElement(mouse) {
  var element = false;

  if (optionsMenu) {
    if (mouse.x > 840 && mouse.x < 870 && mouse.y > 30 && mouse.y < 60) {
      if (mouse.overElement !== 'close') element = 'close';
    }
    else if (mouse.x > 485 && mouse.x < 625 && mouse.y > 135 && mouse.y < 405) {
      if (mouse.y < 165) { if (mouse.overElement !== 'pause') element = 'pause'; }
      else if (mouse.y > 175 && mouse.y < 205) { if (mouse.overElement !== 'counter') element = 'counter'; }
      else if (mouse.y > 215 && mouse.y < 245) { if (mouse.overElement !== 'clock') element = 'clock'; }
      else if (mouse.y > 255 && mouse.y < 285) { if (mouse.overElement !== 'left') element = 'left'; }
      else if (mouse.y > 295 && mouse.y < 325) { if (mouse.overElement !== 'right') element = 'right'; }
      else if (mouse.y > 335 && mouse.y < 365) { if (mouse.overElement !== 'up') element = 'up'; }
      else if (mouse.y > 375) { if (mouse.overElement !== 'down') element = 'down'; }
    }
    else if (mouse.x > 0 && mouse.x < 330 && mouse.y > 0 && mouse.y < 630) {
      if (mouse.overElement !== 'board') element = 'board';
    }
    else if (mouse.overElement) element = '';
  }
  else if (mouse.x > 330 && mouse.x < 900 && mouse.y > 0 && mouse.y < 150) {
    if (mouse.overElement !== 'menu') element = 'menu';
  }
  else if (mouse.overElement) element = '';

  return element;
}

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
  pause   : 'Space',
  counter : 'Z',
  clock   : 'X',
  left    : '←',
  right   : '→',
  up      : '↑',
  down    : '↓'
}
var keyBinds = {
  ' ': 'pause',
  'z': 'counter', 'Z': 'counter',
  'x': 'clock',   'X': 'clock',
  'ArrowLeft' : 'left',
  'ArrowRight': 'right',
  'ArrowUp'   : 'up',
  'ArrowDown' : 'down'
}
function getAction(event) {
  var key = event.key;
  return keyBinds[key ? key : KEY_CODES[event.keyCode]];
}
function setKeybind(keyBinds, keyActions, action, key) {
  var newKeys = {}
  for (var k in keyBinds) {
    if (keyBinds.hasOwnProperty(k) && keyBinds[k] !== action) newKeys[k] = keyBinds[k];
  }

  newKeys[key] = action;
  if (/^[a-z]$/.test(key)) {
    newKeys[key.toUpperCase()] = action;
    // keyActions[action] = key;
  }
  else if (/^[A-Z]$/.test(key)) {
    newKeys[key.toLowerCase()] = action;
    // keyActions[action] = key.toLowerCase();
  }
  keyActions[action] = convertToDisplayKey(key);

  return newKeys;
}

function handleKeyDown(event) {
  var action = getAction(event);
  if (!event.ctrlKey && !event.altKey && !event.metaKey) event.preventDefault();
  if (!event.repeat) {
    switch (scene) {
      case 0:
        if (action == 'pause') scene = 1;
        break;
      case 1:
        var board = gTetrisBoard;
        activeKeys[action] = true;
        if (paused) {
          if (action == 'pause') {
            if (optionsMenu) optionsMenu = false;
            clearMovement(board);
            board.dropInterval = setInterval(drop, DROP_DELAY[level]);
            paused = false;
          }
        }
        else if (! gameover) {
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
        break;
      }
  }
}
function handleKeyUp(event) {
  var action = getAction(event);
  switch (scene) {
    case 1:
      activeKeys[action] = false;

      if (!paused) {
        var board = gTetrisBoard;
        if (!gameover && !paused && action == 'down') {
          clearInterval(board.dropInterval);
          board.dropInterval = setInterval(drop, DROP_DELAY[level]);
        }

        switch (action) {
          case 'left'   : board.slideDirection++;  break;
          case 'right'  : board.slideDirection--;  break;
          case 'counter': board.rotateDirection++; break;
          case 'clock'  : board.rotateDirection--; break;
        }
      }
      break;
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
  gMouse.x = event.layerX * canvasScale;
  gMouse.y = event.layerY * canvasScale;
  var element = setOverElement(gMouse);
  if (typeof element === 'string') gMouse.overElement = element;

  var x = gMouse.x - 345;
  var y = gMouse.y - 345;
  var i = (x / BLOCK_SPACING >> 0) + (18 * (y / BLOCK_SPACING >> 0));
  if (x >= 0 && x <= 540 && y >= 0 && y <= 270 && i >= 0 && gPeriodicTable.board[i] > 0) gPeriodicTable.activeIndex = i;
  else if (gPeriodicTable.activeIndex >= 0) gPeriodicTable.activeIndex = -1;
}
canvas.addEventListener('mousemove', handleMouseMove);

function handleMouseDown(event) {
  var aNum = gPeriodicTable.board[gPeriodicTable.activeIndex];
  if (aNum > 0) setTableElement(gPeriodicTable, aNum);
  else {
    var element = gMouse.overElement;
    switch (element) {
      case 'close':
      case 'board':
        optionsMenu = false;
        if (!paused) {
          clearMovement(gTetrisBoard);
          gTetrisBoard.dropInterval = setInterval(drop, DROP_DELAY[level]);
        }
        break;
      case 'menu':
        optionsMenu = true;
        clearInterval(gTetrisBoard.dropInterval);
        gTetrisBoard.dropInterval = 0;
        break;
      default:
        if (element !== activeElement) activeElement = element;
        break;
    }
  }
}
canvas.addEventListener('mousedown', handleMouseDown);
