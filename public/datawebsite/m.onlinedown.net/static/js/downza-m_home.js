
$(function () {
  navShow();
  navFloat();
  addFoot();
  $(".g-btn").click(function () {
    var n = $(this).attr("data-num");
    if (n == 0) {
      $(".g-web-nav").show();
      $(this).attr("data-num", 1);
      $("#m-nav-hide").height(0).hide();
      $("#m-nav-showbtn").removeClass("m-hover").attr("data-num", 0);
    } else {
      $(".g-web-nav").hide();
      $(this).attr("data-num", 0);
    }
  })
  generalTab();
})
//通用选项卡
function generalTab() {
  if ($(".m-tab-box").length > 0) {
    $(".m-tab-box").each(function () {
      $(this).children(".m-tab-cont:gt(0)").hide();
      $(this).find(".m-tab-btn li:first").addClass("m-hover");
    })
    $(".m-tab-cont").each(function () {
      var childSize = $(this).children().length;
      if (childSize <= 0) {
        var nAll = $(this).parents(".m-tab-box").find(".m-tab-cont:first").prevAll().length;
        var n = $(this).index();
        $(this).parents(".m-tab-box").find(".m-tab-btn li").eq(n - nAll).hide();

      }

    })
    $(".m-tab-btn li").click(function () {
      $(this).addClass("m-hover").siblings("li").removeClass("m-hover");
      var n = $(this).index();
      var tabSize = $(this).parents("div").find(".m-tab-box").length;
      if (tabSize == 0) {
        $(this).parents(".m-tab-box").find(".m-tab-cont").eq(n).show().siblings(".m-tab-cont").hide();
      } else {
        $(this).parent(".m-tab-btn").parent(".m-tab-box").children(".m-tab-cont").eq(n).show().siblings(".m-tab-cont").hide();
      }
    })
  }
}


function navShow() {
  $("#m-nav-hide").hide();
  $("#m-nav-showbtn").click(function () {
    var dataNum = $(this).attr("data-num");
    var nn = $("#m-nav-hide li").length;
    if (dataNum == 0) {
      $("#m-nav-hide").show();
      $(this).addClass("m-hover");
      $("#m-nav-hide").stop().animate({ height: nn * 33 }, 200);
      $(this).attr("data-num", 1);
    } else {
      $(this).removeClass("m-hover");
      $("#m-nav-hide").stop().animate({ height: 0 }, 200, function () { $("#m-nav-hide").hide(); });
      $(this).attr("data-num", 0);
    }
  })
}
function navFloat() {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".g-nav").addClass("m-nav-float");
      $("#owl-demo").css("margin-top", 43)
    } else {
      $(".g-nav").removeClass("m-nav-float");
      $("#owl-demo").css("margin-top", 2)
    }
  })
}

function addFoot() {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $("#m-backtop").fadeIn("fast");
    } else {
      $("#m-backtop").fadeOut("fast");
    }
  })
  $("#m-backtop").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 200)
  })
}

$(document).ready(function () {
  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    // slidesPerView: 'auto',
    zoom: true,
    paginationClickable: true,
    slidesPerView: 3,
    spaceBetween: 12,
    autoplay: 2500
  });

})
$('.btn_click').click(function () {
  var class_lists = $('.slideup').attr('class');
  var class_index = class_lists.indexOf('isdown');
  if (class_index == -1) {
    $('.slideup').slideDown().addClass('isdown slidedown');
    $('.btn_click').html("收起更多").removeClass('arrowdown').addClass('arrowup');
  } else {
    $('.slideup').slideDown().addClass('the_height').removeClass('isdown slidedown');
    $('.btn_click').html("展开更多").removeClass('arrowup').addClass('arrowdown');
  }
});
$(document).ready(function () {
  var article_height = $('.slideup').height(); if (article_height <= 450) { $('.btn_click').hide(); $('.slideup').addClass('slidedown'); } else { $('.slideup').addClass('the_height'); }
});


$(window).scroll(function () {
  var scroH = $(this).scrollTop();
  if (scroH >= 150) {
    $("#nav.side-down").addClass("menu_scroll");
  } else if (scroH < 150) {
    $("#nav.side-down").removeClass("menu_scroll");
  }
});
// 返回顶部
function WeixinTop() {
  this.init();
}
WeixinTop.prototype = {
  constructor: WeixinTop,
  init: function () {
    this._initBackTop();
  },
  _initBackTop: function () {
    var $backTop = this.$backTop = $('<div class="cbbfixed">' +

      '<a class="gotop cbbtn">' +
      '<i class="icon-fanhuidingbu"></i>' +
      '</a>' +
      '</div>');
    $('body').append($backTop);

    $backTop.click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, 120);
    });
    var timmer = null;
    $(window).bind("scroll", function () {
      var d = $(document).scrollTop(),
        e = $(window).height();
      0 < d ? $backTop.css("bottom", "55px") : $backTop.css("bottom", "-110px");
      clearTimeout(timmer);
      timmer = setTimeout(function () {
        clearTimeout(timmer)
      }, 100);
    });
  }
}

var WeixinTop = new WeixinTop();
function introblock() {
  document.getElementById('leftmd').style.display = 'block';
}
function intronone() {
  document.getElementById('leftmd').style.display = 'none';
}
$("#con-soft__intro ul").find("li").each(function () {
  $(this).hover(function () {
    $(this).addClass('on').siblings().removeClass('on');
  },
    function () {
      $(this).removeClass("on");
    });
});
function qiehuanBox(obj) {
  $(obj + " .hd li").on("click", function () {
    $(obj + " .hd li.on").removeClass('on');
    $(obj + " .hd li").eq($(this).index()).addClass('on');
    $(obj + " .bd .qiehuanItm.on").removeClass('on');
    $(obj + " .bd .qiehuanItm").eq($(this).index()).addClass('on')
  })
}
qiehuanBox(".xgwzQH");
qiehuanBox(".xgztQH");

// 详情页厂商名展开收缩
let clicktime = 0
var length = $(".provider .cs").text().length
if (length < 11) {
  $(".provider .drop-down").css("display", "none");
}
$(".provider .drop-down").click(function () {
  if (clicktime++ % 2 == 0) {
    $(".provider").addClass('up')
  } else {
    $(".provider").removeClass('up')
  }
})