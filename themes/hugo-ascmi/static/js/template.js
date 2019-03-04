$(function () {

  var html = $('html')
  var my_nav = $('.navbar');
  // grab the initial top offset of the navigation 
  var sticky_navigation_offset_top = my_nav.offset().top;

  // our function that decides weather the navigation bar should have "fixed" css position or not.
  var sticky_navigation = function () {
    var scroll_top = $(window).scrollTop(); // our current vertical position from the top

    // if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
    if (scroll_top > sticky_navigation_offset_top) {
      my_nav.addClass('is-fixed-top');
      html.addClass('has-navbar-fixed-top')
    } else {
      my_nav.removeClass('is-fixed-top');
      html.removeClass('has-navbar-fixed-top')

    }
  };

  var initio_parallax_animation = function () {
    $('.parallax').each(function (i, obj) {
      var speed = $(this).attr('parallax-speed');
      if (speed) {
        var background_pos = '-' + (window.pageYOffset / speed) + "px";
        $(this).css('background-position', 'center ' + background_pos);
      }
    });
  }

  // run our function on load
  sticky_navigation();

  // and run it again every time you scroll
  $(window).scroll(function () {
    sticky_navigation();
    initio_parallax_animation();
  });

});