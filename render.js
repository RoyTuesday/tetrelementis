function renderBlock(context, num, x, y) {
  if (typeof num !== 'number') return;
  var spacing = BLOCK_SPACING;
  var padding = BLOCK_PADDING;
  var chem = CHEMICAL_ELEMENTS[num];
  var size = BLOCK_SIZE;

  var xPos = x + padding;
  var yPos = y + padding;
  var textX = x + (spacing / 2);
  var textY = y + (spacing / 2) + 2;

  var fontSize = FONT_SIZE;
  if (chem.symbol.length === 3) fontSize -= 2;
  context.font = fontSize + BLOCK_FONT;

  context.fillStyle = chem.background;
  context.strokeStyle = chem.border;

  context.fillRect(xPos, yPos, size, size);
  context.strokeRect(xPos, yPos, size, size);
  if (chem.symbol) {
    context.fillStyle = chem.color;
    context.fillText(chem.symbol, textX, textY);
  }
}

function renderMouse(context, mouse) {
  context.beginPath();
  context.moveTo(mouse.x, mouse.y);
  context.lineTo(mouse.x + 12, mouse.y + 12);
  context.lineTo(mouse.x + 6, mouse.y + 12);
  context.lineTo(mouse.x + 0, mouse.y + 17);
  context.closePath();

  context.fillStyle = '#000';
  context.strokeStyle = '#9EE';
  context.lineWidth = 2;
  context.fill();
  context.stroke();
}

function renderKeys(context, keyActions, activeKeys) {
  var x = 475;
  var y = 36;
  var size = 13;
  context.lineWidth = 3;
  context.strokeStyle = '#333';
  context.font = size + BLOCK_FONT;

  // Pause
  context.textAlign = 'left';
  context.fillStyle = '#111';
  context.fillText('Pause', x, y);
  context.fillStyle = activeKeys.pause ? '#555' : '#DDD';
  x += 8 * size;
  context.textAlign = 'center';
  switch (keyActions.pause) {
    case 'Space':
      context.fillRect(x - (3 * size), y - size, 6 * size, 2 * size);
      context.strokeRect(x - (3 * size), y - size, 6 * size, 2 * size);
      break;
    default:
      context.fillRect(x - (2 * size), y - size, 2 * size, 2 * size);
      context.strokeRect(x - (2 * size), y - size, 2 * size, 2 * size);
      break;
  }
  context.fillStyle = activeKeys.pause ? '#EEE' : '#111';
  context.fillText(keyActions.pause, x, y);
  x = 475;
  y += 3 * size;
  // Move
  context.textAlign = 'left';
  context.fillStyle = '#111';
  context.fillText('Move', x, y);
  x += 8 * size;
  context.textAlign = 'center';
  // Left
  context.fillStyle = activeKeys.left ? '#555' : '#DDD';
  switch (keyActions.left) {
    case 'Space':
      context.fillRect(x - (6 * size), y - size, 6 * size, 2 * size);
      context.strokeRect(x - (6 * size), y - size, 6 * size, 2 * size);
      break;
    default:
      context.fillRect(x - (4 * size), y - size, 2 * size, 2 * size);
      context.strokeRect(x - (4 * size), y - size, 2 * size, 2 * size);
      break;
  }
  context.fillStyle = activeKeys.left ? '#EEE' : '#111';
  context.fillText(keyActions.left, x - (3 * size), y);
  // Down
  context.fillStyle = activeKeys.down ? '#555' : '#DDD';
  switch (keyActions.down) {
    case 'Space':
      context.fillRect(x - (3 * size), y - size, 6 * size, 2 * size);
      context.strokeRect(x - (3 * size), y - size, 6 * size, 2 * size);
      break;
    default:
      context.fillRect(x - size, y - size, 2 * size, 2 * size);
      context.strokeRect(x - size, y - size, 2 * size, 2 * size);
      break;
  }
  context.fillStyle = activeKeys.down ? '#EEE' : '#111';
  context.fillText(keyActions.down, x, y);
  // Right
  context.fillStyle = activeKeys.right ? '#555' : '#DDD';
  switch (keyActions.right) {
    case 'Space':
      context.fillRect(x - size, y - size, 6 * size, 2 * size);
      context.strokeRect(x - size, y - size, 6 * size, 2 * size);
      break;
    default:
      context.fillRect(x + (2 * size), y - size, 2 * size, 2 * size);
      context.strokeRect(x + (2 * size), y - size, 2 * size, 2 * size);
      break;
  }
  context.fillStyle = activeKeys.right ? '#EEE' : '#111';
  context.fillText(keyActions.right, x + (3 * size), y);
  x = 475;
  y += 3 * size;
  // Rotate
  context.textAlign = 'left';
  context.fillStyle = '#111';
  context.fillText('Rotate', x, y);
  x += 8 * size;
  context.textAlign = 'center';
  // Counter
  context.fillStyle = activeKeys.counter ? '#555' : '#DDD';
  switch (keyActions.counter) {
    case 'Space':
      context.fillRect(x - (3 * size), y - size, 6 * size, 2 * size);
      context.strokeRect(x - (3 * size), y - size, 6 * size, 2 * size);
      break;
    default:
      context.fillRect(x - (2.5 * size), y - size, 2 * size, 2 * size);
      context.strokeRect(x - (2.5 * size), y - size, 2 * size, 2 * size);
      break;
  }
  context.fillStyle = activeKeys.counter ? '#EEE' : '#111';
  context.fillText(keyActions.counter, x - (1.5 * size), y);
  // Clock
  context.fillStyle = activeKeys.clock ? '#555' : '#DDD';
  switch (keyActions.clock) {
    case 'Space':
      context.fillRect(x + (3 * size), y - size, 6 * size, 2 * size);
      context.strokeRect(x + (3 * size), y - size, 6 * size, 2 * size);
      break;
    default:
      context.fillRect(x + (0.5 * size), y - size, 2 * size, 2 * size);
      context.strokeRect(x + (0.5 * size), y - size, 2 * size, 2 * size);
      break;
  }
  context.fillStyle = activeKeys.clock ? '#EEE' : '#111';
  context.fillText(keyActions.clock, x + (1.5 * size), y);
}

function numToANum(num) {
  switch (num) {
    case '2': return 27;
    case '3': return 2;
    case '4': return 35;
    case '5': return 10;
    case '7': return 79;
    case '8': return 53;
    default: return num;
  }
}
var TITLE = [
  '11111 22222 11111 3333  22222 4     22222 5   5 22222 6   6 11111 77777  8888',
  '  1   2       1   3   3 2     4     2     55 55 2     66  6   1     7   88   ',
  '  1   222     1   3   3 222   4     222   5 5 5 222   6 6 6   1     7   8    ',
  '  1   2       1   3333  2     4     2     5   5 2     6  66   1     7    888 ',
  '  1   2       1   3 3   2     4     2     5   5 2     6   6   1     7      88',
  '  1   2       1   3  3  2     4     2     5   5 2     6   6   1     7       8',
  '  1   22222   1   3   3 22222 44444 22222 5   5 22222 6   6   1   77777 8888 '
].join('').split('').map(numToANum);

function renderTitle(context) {
  var size = BLOCK_SIZE / 2;
  var title = TITLE;

  var startX = size * 5;
  var x = startX;
  var y = 275 - (size * 3.5);
  var elements = CHEMICAL_ELEMENTS;
  context.lineWidth = 3;
  for (var i = 0; i < 539; i++) {
    if (title[i] > 0) {
      var chem = elements[title[i]];
      context.fillStyle = chem.background;
      context.strokeStyle = chem.border;
      context.fillRect(x, y, size, size);
      context.strokeRect(x + 0.5, y + 0.5, size - 1, size - 1);
    }
    x += size;
    if (i > 0 && i % 77 == 0) {
      x = startX + size;
      y += size;
    }
  }
  // Subtitle
  context.font = '26px Courier, monospace';
  context.textAlign = 'center';
  context.fillStyle = '#111';
  context.fillText('Press space to start', 450, 370);
}

var frame = 0;
function render(context, scene) {
  var width = CANVAS_WIDTH;
  var height = CANVAS_HEIGHT;
  var spacing = BLOCK_SPACING;

  context.clearRect(0, 0, width, height);
  context.fillStyle = '#E1DEEA';
  context.fillRect(0, 0, width, height);
  context.lineWidth = 4;

  switch (scene) {
    case 0:
      renderTitle(context);
      break;
    case 1:
      renderPreview(context, gPreviewBoard);
      renderTetrisBoard(context, gTetrisBoard);
      renderPeriodicTable(context, gPeriodicTable);

      // Periodic Table element highlight
      var active = gPeriodicTable.activeIndex;
      if (active >= 0) {
        context.fillStyle = '#FFF7';
        context.fillRect(345 + (active % 18) * spacing, 345 + (active / 18 >> 0) * spacing, spacing, spacing);
      }

      renderKeys(context, keyActions, activeKeys);

      // Player score
      context.textAlign = 'right';
      context.fillStyle = '#111';
      context.font = (FONT_SIZE * 1.5) + BLOCK_FONT;
      context.fillText('Score:', 740, 37);
      context.fillText('Hi Score:', 740, 62);
      context.fillText('Level:', 740, 87);
      context.fillText('Mode:', 740, 112);

      context.textAlign = 'left';
      context.fillText(playerScore, 750, 37);
      context.fillText(highScore, 750, 62);
      context.fillText(level, 750, 87);
      context.fillText(gameMode, 750, 112);
      context.textAlign = 'center';
      // Pause overlay
      if (paused) {
        // var halfW = width / 2;
        // var halfH = height / 2;
        context.fillStyle = '#FFF7';
        context.fillRect(0, 0, 330, 630);
        context.fillStyle = '#FFFD';
        context.fillRect(113, 297, 104, 36);
        context.fillStyle = '#111';
        context.fillText('Paused', 165, 315);
      }

      if (gMouse.isOverOptions) {
        context.fillStyle = "#0003";
        context.fillRect(330, 0, 570, 150);
        context.fillStyle = '#FFFD';
        context.fillRect(563, 58, 104, 36);
        context.fillStyle = '#111';
        context.fillText('Options', 615, 78);
      }
      break;
  }

  renderMouse(context, gMouse);
}
