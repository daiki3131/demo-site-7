// ハンバーガーメニュー
$('.hamburger_btn').on('click',function() {
  $('.hamburger_btn').toggleClass('close');
  $('.nav_wrapper').toggleClass('slide-in');
  $('body').toggleClass('noscroll');
  $('.nav_wrapper').slideToggle(300);
});

// ヘッダースクロールアクション
$(function () {
  $(window).on("scroll", function () {
    const sliderHeight = $(".js_color_change").height();
    if (sliderHeight - 150 < $(this).scrollTop()) {
      $(".js_header").addClass("headerColorScroll");
    } else {
      $(".js_header").removeClass("headerColorScroll");
    }
  });
});