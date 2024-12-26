function goDown(item, event) {

  if (event.target.tagName != "A") {
    var url = $(item).find(".urlAdd").text();
    location.href = url;
  }

}

// ；判断安卓设备或者ios设备
$(function () {
  addBoxLink('.module>a')
  addBoxLink('.game-app>a')
  addBoxLink('.detail-btn .lq')
})

function addBoxLink(addSite) {
  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //如果输出结果是true就判定是android终端或者uc浏览器
  var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //根据输出结果true或者false来判断ios终端
  //!!双叹号一般用来将后面的表达式转换为布尔型的数据（boolean）
  if (isAndroid) {
    $(addSite).attr('href', 'https://www.8979.com/game/downs_apk_1_679.html')
  } else if (isIOS) {
    $(addSite).attr('href', "https://game.3733.com?c=3417")
  }
}
// tab切换
$(function () {
  tabClick('#item2 .tab_header li', '#item2 .m_game_list .tab_list');
  tabClick('.click_tab ul li', '#top ul');
  tabClick('.g-cs-top span', '#top ul');
  tabClick('.tab_list li', '.gift_recommend_box');
})
// 返回顶部
$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    $(".backtop").fadeIn(400); //当滑动栏向下滑动时，按钮渐现的时间
  } else {
    $(".backtop").fadeOut(200); //当页面回到顶部第一屏时，按钮渐隐的时间
  }
});
$(".backtop").click(function () {
  $('html,body').animate({
    scrollTop: '0px'
  }, 200); //返回顶部所用的时间 
});

function tabClick(clickEL, EL) {
  $(clickEL).eq(0).addClass('on').siblings().removeClass('on')
  $(EL).eq(0).show().siblings(EL).hide()
  $(clickEL).click(function () {
    let index = $(this).index();
    $(this).addClass('on').siblings().removeClass('on')
    $(EL).eq(index).show().siblings(EL).hide()
  })
}
// 类型展示更多
$(function () {
  if ($('.bottom_category_box li').length > 6) {
    $('.bottom_category_box li:gt(4)').hide();
    $('.bottom_category_box li.open').show();
  }

  $('.bottom_category_box li.open').click(function () {
    $('.bottom_category_box li:gt(4)').show()
    $(this).hide()
  })
  $('.bottom_category_box li.close').click(function () {
    $('.bottom_category_box li:gt(4)').hide()
    $(this).hide()
    $('.bottom_category_box li.open').show()
  })
})

//翻页

$(function () {
  $(".ym>span .cbtn").css("display", "none");
  $(".ym>span").click(function () {
    $(this).children("div").show();
  })

  $(document).bind("click", function (e) {
    var target = $(e.target);
    if (target.closest(".ym").length == 0) {
      $('.cbtn').hide()
    }
  })
});
// 触顶固定
$(function () {
  if ($('.gift2 .detail-btn').offset()) {
    let topSize = $('.gift2 .detail-btn').offset().top
    scrollFun(topSize)
    $(window).scroll(function () {
      scrollFun(topSize)
    });

    function scrollFun(size) {
      if ($(this).scrollTop() > size) {
        $('.gift2 .detail-btn').addClass('fixedTop')
      } else {
        $('.gift2 .detail-btn').removeClass('fixedTop')
      }
    }
  }

})
$(function () {
  // GM权限
  $('.yuyueBtn').click(function () {
    $('.zzc').fadeIn();
    $('.tanchu').removeClass('aniHide').addClass('aniBlow').fadeIn();
  })
  $('.close').click(function () {
    $('.zzc').fadeOut();
    $('.tanchu').removeClass('aniBlow').addClass('aniHide').fadeOut();
  })
  var a = document.querySelectorAll('.chakan');
  var b = document.querySelectorAll('.gmlist');

  for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("click", () => {
      for (let j = 0; j < b.length; j++) {
        b[j].setAttribute("style", "display:none;");
      }
      b[i].setAttribute("style", "display:block;");
    })
  }
  $(".chakan").on("click", function () {
    $(".zzc").show();
  })
  $('.t-title span').click(function () {
    $(this).parent().parent().hide();
    $('.zzc').hide();
  })
})
$(function () {
  // 权益展开收起
  $('.info-super>div:gt(3)').hide()
  $('.info-super .close_more_btn').hide()
  $('.info-super .more_btn').click(function () {
    $('.info-super>div:gt(3)').show()
    $(this).hide()
    $('.info-super .close_more_btn').show()
  })
  $('.info-super .close_more_btn').click(function () {
    $('.info-super>div:gt(3)').hide()
    $('.info-super .more_btn').show()
    $('.info-super .close_more_btn').hide()
  })
})

function showGameBox() {
  if ($('.download-select .select-btn').hasClass('select')) {
    $('.gameBox_loadBtn').show()
    $('.game_loadBtn').hide()
  } else {
    $('.gameBox_loadBtn').hide()
    $('.game_loadBtn').show()
  }
}

function clickSelectGameBox() {
  showGameBox()
  $('.download-select .select-btn, .download-select .text').click(function () {
    if ($('.download-select .select-btn').hasClass('select')) {
      $('.download-select .select-btn').removeClass('select')
      showGameBox()
    } else {
      $('.download-select .select-btn').addClass('select')
      showGameBox()
    }
  })
}
var t = function (e) {
  function t(e) {
    new Swiper(".light-box .swiper-container", {
      initialSlide: e,
      zoom: !0,
      zoom: {
        maxRatio: 2,
        toggle: !1
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction"
      }
    })
  }
  var i = "",
    a = $(e);
  console.log(a)
  a.each(function () {
      var e = $(this).attr("src");
      i += '<li class="swiper-slide"><div class="swiper-zoom-container"><img src="' + e + '"></div></li>',
        $(this).click(function () {
          flag = !0;
          var e = a.index(this);
          if ($(".light-box").length < 1) {
            var n = "";
            n += '<div class="light-box">',
              n += '    <div class="swiper-container">',
              n += '        <ul class="swiper-wrapper">' + i + "</ul>",
              n += '        <div class="swiper-pagination swiper-pagination-white"></div>',
              n += "    </div>",
              n += '    <span class="close">关闭</span>',
              n += "</div>",
              $("body").append(n)
          }
          var s = $(window).height();
          $(".light-box img").css({
              "max-height": .8 * s
            }),
            $(".light-box,.light-box .close").show(),
            document.addEventListener("touchmove", function (e) {
              flag && (e.preventDefault(),
                e.stopPropagation())
            }, !1),
            t(e)
        })
    }),
    $(document).on("click", ".light-box", function () {
      $(".light-box").remove(),
        flag = !1
    })
};
t('.swiper_box .swiper-slide img')