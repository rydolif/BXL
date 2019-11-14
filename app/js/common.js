$(function() {
//---------------------------slider-----------------------
    var swiper = new Swiper('.other__list', {
    slidesPerView: 6,
    spaceBetween: 30,
    breakpoints: {
      992: {
        slidesPerView: 4.5,
        spaceBetween: 10
      }
    }
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.header__next',
      prevEl: '.header__prev',
    },
  });

//---------------------------tabs-----------------------
  $('.tabs__wrap').hide();
  $('.tabs__wrap:first').show();
  $('.tabs ul a:first').addClass('active');
   $('.tabs ul a').click(function(event){
    event.preventDefault();
    $('.tabs ul a').removeClass('active');
    $(this).addClass('active');
    $('.tabs__wrap').hide();
     var selectTab = $(this).attr('href');
    $(selectTab).fadeIn();
  });

   
  $('.content__img_tovar').hide();
  $('.content__img_tovar:first').show();
  $('.content__tabs a:first').addClass('active');
   $('.content__tabs a').click(function(event){
    event.preventDefault();
    $('.content__tabs a').removeClass('active');
    $(this).addClass('active');
    $('.content__img_tovar').hide();
     var selectTab = $(this).attr('href');
    $(selectTab).fadeIn();
  });



//----------------------------------------fixed----------------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>50){
          $('.header').addClass('header--active');
      }
      else if ($(this).scrollTop()<50){
          $('.header').removeClass('header--active');
      }
  });

  if ($(this).scrollTop()<50){
      $('.header').removeClass('header--active');
  }

});

