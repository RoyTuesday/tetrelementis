var removeExcessSpaces = function(htmlString) {
	var processedString = htmlString.replace(/\s+</g, '<');
	processedString = processedString.replace(/>\s+/g, '>');
	return processedString;
}

var ready = function(fn) {
  if(document.readyState != 'loading') {
    fn();
  }
  else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
ready(function() {
	document.querySelector('body').innerHTML = removeExcessSpaces(document.querySelector('body').innerHTML);
	console.log('main html', document.querySelector('body').innerHTML);

  window.gameControl = new Controller();

  gameControl.startGame();
});
