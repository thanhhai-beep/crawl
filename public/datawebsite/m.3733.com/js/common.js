$(function () {
  $(window).scroll(function () {
    var scroll_len = $(window).scrollTop();
    if (scroll_len > 300) {
        $('#Top').fadeIn();
    } else {
        $('#Top').fadeOut();
    };
})
  $('#Top').click(function () {
    $("html,body").animate({ scrollTop: 0 }, 500);
  })
})