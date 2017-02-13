function renderBlock(num, x, y) {
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
function render(context) {
  var width = CANVAS_WIDTH;
  var height = CANVAS_HEIGHT;
  var spacing = BLOCK_SPACING;

  context.clearRect(0, 0, width, height);
  context.fillStyle = '#E1DEEA';
  context.fillRect(0, 0, width, height);

  context.lineWidth = 4;

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
    var halfW = width / 2;
    var halfH = height / 2;
    context.fillStyle = '#FFF7';
    context.fillRect(0, 0, width, height);
    context.fillStyle = '#FFFC';
    context.fillRect(halfW - 52, halfH - 18, 104, 36);
    context.fillStyle = '#111';
    context.fillText('Paused', halfW, halfH);
  }
}
