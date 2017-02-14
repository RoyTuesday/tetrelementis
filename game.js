var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.textAlign = 'center';
context.textBaseline = 'middle';

function update() {
  switch (scene) {
    case 1:
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
      break;
  }
}

function step(timestamp) {
  if (!start) var start = timestamp;

  update();
  render(context, scene);

  var progress = timestamp - start;
  if (progress < 2000) window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);
