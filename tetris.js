var removeExcessSpaces = function(selector) {
  var htmlString = document.querySelector(selector).innerHTML;
	htmlString = htmlString.replace(/\s+</g, '<');
	htmlString = htmlString.replace(/>\s+/g, '>');
  htmlString = htmlString.replace(/_/g, ' ');
  document.querySelector(selector).innerHTML = htmlString;
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
  removeExcessSpaces('main');

  new Controller();
});
