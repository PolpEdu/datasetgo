$("#option1").click(function () {
  $(".menu-section").removeClass("on");
  $(".menu-toggle").removeClass("on");
  $(".menu").addClass("hidden");
});

$("#option2").click(function () {
  $(".menu-section").removeClass("on");
  $(".menu-toggle").removeClass("on");
  $(".menu").addClass("hidden");
});

$("#option3").click(function () {
  $(".menu-section").removeClass("on");
  $(".menu-toggle").removeClass("on");
  $(".menu").addClass("hidden");
});

$("#option4").click(function () {
  $(".menu-section").removeClass("on");
  $(".menu-toggle").removeClass("on");
  $(".menu").addClass("hidden");
});

$("#option5").click(function () {
  $(".menu-section").removeClass("on");
  $(".menu-toggle").removeClass("on");
  $(".menu").addClass("hidden");
});

$(function () {
  $(window).on("scroll", function () {
    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 100) {
      $("header").addClass("acti");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $("header").removeClass("acti");
    }
  });
});
