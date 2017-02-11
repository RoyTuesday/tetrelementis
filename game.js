var tetrisCxt = document.getElementById('tetris-grid').getContext('2d');
tetrisCxt.textAlign = 'center';
tetrisCxt.textBaseline = 'middle';
var previewCxt = document.getElementById('tetris-preview').getContext('2d');
previewCxt.textAlign = 'center';
previewCxt.textBaseline = 'middle';
var table = document.getElementById('tetris-table');
var tableCxt = table.getContext('2d');
tableCxt.textAlign = 'center';
tableCxt.textBaseline = 'middle';
BLOCK_SPACING_HEIGHT = tetrisCxt.canvas.height / 20;
BLOCK_SPACING_WIDTH = tetrisCxt.canvas.width / 10;
BLOCK_HEIGHT = BLOCK_SPACING_HEIGHT - 10;
BLOCK_WIDTH = BLOCK_SPACING_WIDTH - 10;


var scene = 0;

var playerScore = document.getElementById('player-score');
function setScore(lines) {
  var score = parseInt(playerScore.innerHTML);
  playerScore.innerHTML = score + lines;
}

function update() {
  var drop = tetrisGrid.drop();
  if (drop < 0) {
    clearInterval(tetrisGrid.dropInterval);
    tetrisGrid = new TetrisBoard;
    tetrisGrid.dropInterval = setInterval(update, DROP_DELAY[0]);
  }
  else setScore(drop);
}

function renderBlock(context, num, i, width) {
  if (typeof num !== 'number') return;
  var chem = CHEMICAL_ELEMENTS[num];
  var x = (i % width) * BLOCK_SPACING_WIDTH;
  var y = Math.floor(i / width) * BLOCK_SPACING_HEIGHT;
  var xPos = x + 5;
  var yPos = y + 5;
  var textX = x + (BLOCK_SPACING_WIDTH / 2);
  var textY = y + (BLOCK_SPACING_HEIGHT / 2) + 2;

  var fontSize = FONT_SIZE;
  if (chem.symbol.length === 3) fontSize -= 2;
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

  tableGrid.render(tableCxt);
  previewGrid.render(previewCxt);
  tetrisGrid.render(tetrisCxt);

  var active = tableGrid.activeIndex;
  if (active >= 0) {
    tableCxt.fillStyle = '#FFF7';
    tableCxt.fillRect(1 + (active % 18) * BLOCK_SPACING_WIDTH, 1 + (active / 18 >> 0) * BLOCK_SPACING_HEIGHT, BLOCK_SPACING_WIDTH - 2, BLOCK_SPACING_HEIGHT - 2);
  }

  if (tetrisGrid.dropInterval === 0) {
    tetrisCxt.fillStyle = '#FFF7';
    tetrisCxt.fillRect(0, 0, tetrisCxt.canvas.width, tetrisCxt.canvas.height);
    tetrisCxt.font = (FONT_SIZE * 2) + BLOCK_FONT;
    tetrisCxt.fillStyle = '#111';
    tetrisCxt.fillText('Paused', tetrisCxt.canvas.width / 2, tetrisCxt.canvas.height / 2);
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

function handleTableMouseMove(event) {
  var x = (event.layerX / BLOCK_SPACING_WIDTH) >> 0;
  var y = (event.layerY / BLOCK_SPACING_HEIGHT) >> 0;
  var i = x + (18 * y);
  if (tableGrid.board[i] > 0) tableGrid.activeIndex = i;
  else if (tableGrid.activeIndex >= 0) tableGrid.activeIndex = -1;
}
table.addEventListener('mousemove', handleTableMouseMove);
