$(function() {

//------------------------------гамбургер-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger--active');
    $('.header__nav').toggleClass('header__nav--active');
    $('body').toggleClass('no-scroll');
  });

//------------------------------acardeon---------------------------
  $(".main__filter_cat ul").slideUp("slow");

  $('.main__filter_cat').click(function(event){
    $(this).toggleClass('main__filter_cat--active');
    $(this).toggleClass('main__filter_cat--hide');

    if ($(this).hasClass('main__filter_cat--active')) {
      $(".main__filter_cat--active ul").slideDown("slow");
    }
    else {
      $(".main__filter_cat--hide ul").slideUp("slow");
    }
  });

//-------------------------------активна ссилка на якій знаходишся для меню---------------------------------------
  $('.cabinet__nav ul a').each(function () {
      var location = window.location.href;
      var link = this.href; 
      if(location == link) {
          $(this).addClass('active');
      }
  });

});

