var saveData, keyActions, keyBinds;
function save(saveData) {
  window.localStorage.setItem('tetrelementis', JSON.stringify(saveData));
}
var storedData = window.localStorage.getItem('tetrelementis');
if (!storedData) {
  saveData = {
    highScore: 0
  }
}
else saveData = JSON.parse(storedData);

if (saveData.keyActions) keyActions = saveData.keyActions;
else {
  keyActions = {
    pause   : 'Space',
    counter : 'Z',
    clock   : 'X',
    left    : '←',
    right   : '→',
    up      : '↑',
    down    : '↓'
  }
}
if (saveData.keyBinds) keyBinds = saveData.keyBinds;
else {
  keyBinds = {
    ' ': 'pause',
    'z': 'counter', 'Z': 'counter',
    'x': 'clock',   'X': 'clock',
    'ArrowLeft' : 'left',
    'ArrowRight': 'right',
    'ArrowUp'   : 'up',
    'ArrowDown' : 'down'
  }
}
save(saveData);

var activeKeys = {
  pause   : false,
  counter : false,
  clock   : false,
  left    : false,
  right   : false,
  up      : false,
  down    : false
}

var isPaused = true;
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
var queueTimeout = 0;
function clearComboQueue() { comboQueue = []; }
function updateComboQueue(queue, key) {
  queue.push(key);
  if (/tetrelementis/i.test(queue.join(''))) {
    scene = 2;
    pause(gTetrisBoard);
    isPaused = true;
    clearComboQueue();
    return 0;
  }
  else return setTimeout(clearComboQueue, 600);
}

var gMouse = { x: -1, y: -1, overElement: '' }
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
    else if (mouse.x > 655 && mouse.x < 802 && mouse.y > 135 && mouse.y < 165) {
      if (mouse.overElement !== 'Marathon') element = 'Marathon';
    }
    else if (mouse.x > 655 && mouse.x < 802 && mouse.y > 175 && mouse.y < 205) {
      if (mouse.overElement !== 'Fixed') element = 'Fixed';
    }
    else if (mouse.overElement) element = '';
  }
  else if (mouse.x > 345 && mouse.x < 700 && mouse.y > 155 && mouse.y < 185) {
    if (mouse.overElement !== 'link') element = 'link';
  }
  else if (mouse.x > 330 && mouse.x < 900 && mouse.y > 0 && mouse.y < 150) {
    if (mouse.overElement !== 'menu') element = 'menu';
  }
  else if (mouse.overElement) element = '';

  return element;
}

function pause(tetrisBoard) {
  clearInterval(tetrisBoard.dropInterval);
  tetrisBoard.dropInterval = 0;
}
function resume(tetrisBoard) {
  clearMovement(tetrisBoard);
  tetrisBoard.dropInterval = setInterval(drop, DROP_DELAY[level]);
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

function getKey(event) {
  var key = event.key;
  // IE insists on using different values for certain keys in event.key
  if (key) {
    switch (key) {
      case 'Esc'      : key = 'Escape'; break;
      case 'Spacebar' : key = ' '; break;
      case 'Left'     : key = 'ArrowLeft'; break;
      case 'Right'    : key = 'ArrowRight'; break;
      case 'Up'       : key = 'ArrowUp'; break;
      case 'Down'     : key = 'ArrowDown'; break;
    }
  }
  return key ? key : KEY_CODES[event.keyCode];
}
function setKeybind(keyBinds, keyActions, action, key) {
  var newKeys = {}
  for (var k in keyBinds) {
    if (keyBinds.hasOwnProperty(k) && keyBinds[k] !== action) newKeys[k] = keyBinds[k];
  }

  var currentAction = keyBinds[key];
  if (currentAction) {
    activeKeys[currentAction] = false;
    keyActions[currentAction] = '';
  }

  newKeys[key] = action;
  if (/^[a-z]$/.test(key)) newKeys[key.toUpperCase()] = action;
  else if (/^[A-Z]$/.test(key)) newKeys[key.toLowerCase()] = action;
  keyActions[action] = convertToDisplayKey(key);

  return newKeys;
}

function handleKeyDown(event) {
  var key = getKey(event);
  var action = keyBinds[key];
  if (!event.ctrlKey && !event.altKey && !event.metaKey) event.preventDefault();
  if (!event.repeat) {
    clearTimeout(queueTimeout);
    queueTimeout = updateComboQueue(comboQueue, key);

    switch (scene) {
      case 0:
      case 2:
        if (action == 'pause') scene++;
        break;
      case 1:
        var board = gTetrisBoard;
        if (action) activeKeys[action] = true;
        if (optionsMenu && keyActions[activeElement]) {
          keyBinds = setKeybind(keyBinds, keyActions, activeElement, key);
          activeElement = '';
          saveData.keyBinds = keyBinds;
          saveData.keyActions = keyActions;
          save(saveData);
        }

        if (isPaused) {
          if (action == 'pause') {
            if (optionsMenu) optionsMenu = false;
            resume(board);
            isPaused = false;
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
              pause(board);
              isPaused = true;
              break;
          }
        }
        break;
    }
  }
}
function handleKeyUp(event) {
  var key = getKey(event);
  var action = keyBinds[key];
  switch (scene) {
    case 1:
      if (action) activeKeys[action] = false;

      if (!isPaused) {
        var board = gTetrisBoard;
        if (!gameover && !isPaused && action == 'down') {
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

var canvas = document.getElementById('canvas');
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
        if (!isPaused) resume(gTetrisBoard);
        break;
      case 'menu':
        optionsMenu = true;
        pause(gTetrisBoard);
        break;
      case 'Marathon':
        if (gameMode !== 'Marathon') gameMode = 'Marathon';
        break;
      case 'Fixed':
        if (gameMode !== 'Fixed') gameMode = 'Fixed';
        break;
      default:
        if (element !== activeElement) activeElement = element;
        break;
    }
  }
}
canvas.addEventListener('mousedown', handleMouseDown);

// Required to open a new tab without triggering popup blockers
function handleMouseClick(event) {
  if (gMouse.overElement === 'link' && gPeriodicTable.element > 0) {
    var newTab = window.open(CHEMISTRY_URL + gPeriodicTable.element + '/' + /^[a-zA-Z]+/.exec(CHEMICAL_ELEMENTS[gPeriodicTable.element].title)[0].toLowerCase(), '_blank');
    if (newTab) newTab.focus();
    if (!isPaused) {
      pause(gTetrisBoard);
      isPaused = true;
    }
  }
}
canvas.addEventListener('click', handleMouseClick);

function handleMouseLeave(event) {
  gMouse.x = -1;
  gMouse.y = -1;
}
canvas.addEventListener('mouseleave', handleMouseLeave);
