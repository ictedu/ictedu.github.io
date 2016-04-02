jQuery(document).ready(function() {

  // Header active not active
  $('#site-nav .nav li').on('click', function() {
    $("#site-nav .nav li").removeClass("active");
    $(this).addClass("active");
  });

  // Buttons Fixed Positon When Scroll Down
  $(window).scroll(function() {
    var scroll = $(window).scrollTop(),
        height = $("#site-nav").outerHeight();

    if (scroll >= height) {
      $("#toTop").fadeIn(200);
    } else {
      $("#toTop").fadeOut(200);
    }
  });

  // Smooth Scroll Up Down
  smoothScroll(400);
  function smoothScroll (duration) {
    $('a[href^="#"]').on('click', function(event) {
      var target = $( $(this).attr('href') );

      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, duration);
      }
    });
  }

});
