$(function () {
  // tab开关
  var count = -1;
  $(".gsy-screen-item").on("click", function () {
    var index = $(this).index();
    if (count === index) {
      $("#gsy-screen-mark").removeClass("gsy-mark");
      count = -1;
    } else {
      $("#gsy-screen-mark").addClass("gsy-mark");
      count = $(this).index();
    }
    $(this).siblings(".gsy-screen-item").removeClass("active");
    $(this).toggleClass("active");
  });

  $("#gsy-screen-mark").click(function () {
    $(this).removeClass("gsy-mark");
    $(".gsy-screen-item").removeClass("active");
    count = -1;
  });
});
