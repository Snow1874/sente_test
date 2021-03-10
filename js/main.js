
//   アコーディオン
$(function(){
    $('.faq__inner__accordion__item__question').click(function(){
      $(this).next('.faq__inner__accordion__item__answer').slideToggle();
      $(this).toggleClass("open");
    });
  });

  
// スムーススクロール
  $(function(){
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top -100;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });
