// This website was designed and coded by Ankit Sardesai.

$(document).ready(function() {
  $("#wrapper").css({
    "opacity": 0,
    "position":"relative",
	"top":-20
  });
  $("#wrapper").animate({
    "opacity": 1,
    "top": 0
  }, 500);
});
