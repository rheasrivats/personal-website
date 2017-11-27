$(document).ready(function() {
// all your jQuery code goes in here!
$('#descriptions p').typeIt({
     strings: ["Full Stack Developer", "Aspiring Entreprenuer", "Creator"],
     speed: 40,
     breakLines: false,
     autoStart: false
});

  $('.navbar-item').hover(function() {
    $(this).css("font-weight", "bold");
    $(this).css("opacity", "1");
  }, function() {
    $(this).css("font-weight", "normal");
    $(this).css("opacity", ".80");
  });

  $('#content').css('display', 'none');
  $('#content').fadeIn(3000);

  // $('#personal-pic img').css('display', 'none');
  // $('#personal-pic img').fadeIn(3000);

  $('#personal-pic img').hover(function() {
    $(this).css("opacity", "1");
  }, function() {
    $(this).css("opacity", ".90");
  });

});
