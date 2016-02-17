var ready = function(fn) {
  if(document.readyState != 'loading') {
    fn();
  }
  else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
ready(function() {
  window.lineBlock = new Tetrinimo({element: 1, shape: TETRINIMO_SHAPES.line});
  window.gameBoard = new TetrisBoard({tetrinimo: lineBlock});
  window.gameView = new BrowserView({gameBoard: gameBoard});
  window.gameControl = new Controller();

  gameControl.startGame();
});
