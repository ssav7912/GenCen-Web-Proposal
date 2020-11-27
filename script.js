function escape() {
  window.open("https://en.wikipedia.org/wiki/Special:Random", "_newtab");

  window.location.replace('https://google.com');
}

$(function() {
  $("#escape").on("click", function(e) {
    escape();
  });
  $("#escape a").on("click", function(e) {
    e.stopPropagation();
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      escape();
    }
  });
});