$(function() {
  
//-------------------------------попандер---------------------------------------
  var swiper = new Swiper('.certificates__slider', {
    direction: 'vertical',
    effect: 'fade',
    spaceBetween: 0,
    pagination: {
      el: '.certificates__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.certificates__next',
      prevEl: '.certificates__prev',
    },
  });

//-------------------------------попандер---------------------------------------
  $('.modal').popup({
    escape: false,
    blur: false,
    scrolllock: true,
    transition: 'all 0.3s'
  });

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
  $('.header__nav a').each(function () {
      var location = window.location.href;
      var link = this.href; 
      if(location == link) {
          $(this).addClass('active');
      }
  });

//------------------------------------form-------------------------------------------
  $('input[type="tel"]').mask('+0 (000) 000-00-00');

  jQuery.validator.addMethod("phoneno", function(phone_number, element) {
     return this.optional(element) || phone_number.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
  }, "Введите Ваш телефон");

  $(".form").each(function(index, el) {
    $(el).addClass('form-' + index);

    $('.form-' + index).validate({
      rules: {
        phone: {
          required: true,
          phoneno: true
        },
        name: 'required',
      },
      messages: {
        name: "Введите Ваше имя",
        phone: "Введите Ваш телефон",
      },
      submitHandler: function(form) {
        var t = {
          name: jQuery('.form-' + index).find("input[name=name]").val(),
          phone: jQuery('.form-' + index).find("input[name=phone]").val(),
          subject: jQuery('.form-' + index).find("input[name=subject]").val()
        };
        ajaxSend('.form-' + index, t);
      }
    });

  });

  function ajaxSend(formName, data) {
    jQuery.ajax({
      type: "POST",
      url: "sendmail.php",
      data: data,
      success: function() {
        $(".modal").popup("hide");
        $("#thanks").popup("show");
        setTimeout(function() {
          $(formName).trigger('reset');
        }, 2000);
      }
    });
  }
  
});

