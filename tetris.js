var ready = function(fn) {
  if(document.readyState != 'loading') {
    fn();
  }
  else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
ready(function() {
  var removeExcessSpaces = function(selector) {
    var htmlString = document.querySelector(selector).innerHTML;
  	htmlString = htmlString.replace(/\s+</g, '<');
  	htmlString = htmlString.replace(/>\s+/g, '>');
    htmlString = htmlString.replace(/_/g, ' ');
    document.querySelector(selector).innerHTML = htmlString;
  }

  removeExcessSpaces('main');

  document.querySelector("#show-directions a").addEventListener("click", function(event) {
    event.preventDefault();
    var dirContainer = document.querySelector("#directions-container");

    if(dirContainer.style["display"] != "none") {
      var dirTrans = document.querySelector("#directions-transparent-layer");
      var directions = document.querySelector("#directions");
      var main = document.querySelector("main");
      dirContainer.style["left"] = main.offsetLeft + "px";
      dirContainer.style["top"] = main.offsetTop + "px";
      dirContainer.style["height"] = main.offsetHeight + "px";
      dirContainer.style["width"] = main.offsetWidth + "px";

      directions.style["height"] = (main.offsetHeight - 32) + "px";
      directions.style["width"] = (main.offsetWidth - 64) + "px";

      dirTrans.style["height"] = main.offsetHeight + "px";
      dirTrans.style["width"] = main.offsetWidth + "px";
    }

    dirContainer.style["display"] = "initial";
  });

  document.querySelector("#hide-directions a").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector("#directions-container").style["display"] = "none";
  });

  new Controller();
});
