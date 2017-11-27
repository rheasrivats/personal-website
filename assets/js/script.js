$(document).ready(function() {
// all your jQuery code goes in here!
$('#descriptions p').typeIt({
     strings: ["Full Stack Developer", "Aspiring Entreprenuer", "Creator"],
     speed: 40,
     breakLines: false,
     autoStart: false
});
  //jQuery Function Number 1
  $('.navbar-item').hover(function() {
    //jQuery Function Number 2
    $(this).css("font-weight", "bold");
    $(this).css("opacity", "1");
  }, function() {
    $(this).css("font-weight", "normal");
    $(this).css("opacity", ".80");
  });

  $('#content').css('display', 'none');
  //jQuery Function Number 3
  $('#content').fadeIn(3000);

  // $('#personal-pic img').css('display', 'none');
  // $('#personal-pic img').fadeIn(3000);

  $('#personal-pic img').hover(function() {
    $(this).css("opacity", "1");
  }, function() {
    $(this).css("opacity", ".90");
  });

  $('#wireframe img').css('display', 'none');
  //jQuery Function Number 4
  $('#wireframe img').slideDown(1000);

  var flag = true;
  $('#wireframe img').hover(function() {
      if(flag) {
        //jQuery Function Number 5
        $("#wireframe img").animate({left: "+=550"}, 750);
        flag = false;
        $("#about-corgo").fadeIn(2000);
      } else {
        $("#wireframe img").css("cursor", "pointer");
      }
  });

  var flag2 = true;
  //jQuery Function Number 6
  $('#wireframe img').click(function() {
    if(flag2) {
      $("#wireframe img").animate({up: "+=10"}, 100);
      flag2 = false;
    }
  });

});
