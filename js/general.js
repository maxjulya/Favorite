jQuery(function ($) {
  "use strict";

  //Preloader

  $(window).load(function () {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

    $(".top_text h1").animated("fadeInDown", "fadeOutUp");
    $(".top_text p").animated("fadeInUp", "fadeOutDown");
  });

  if ($(".home_slider").length) {
    $(".home_slider").slick({
      arrows: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 500,
      fade: true,
      cssEase: "linear",
    });
  }
});