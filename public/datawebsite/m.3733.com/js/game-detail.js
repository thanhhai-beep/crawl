$(function () {
  // 下载打勾按钮
  $('.download-text').on('click', function () {
    $('.download-text').toggleClass('active');
    $('#download').toggleClass('active');
    $(".top-app-bg").toggleClass('active');
    if ($('#download').hasClass("active")) {
      $(".recom-game").hide();
      $(".vip-rights").show();
    } else if (down_url == "" && h5game == "") {
      $(".recom-game").show();
      $(".vip-rights").hide();
    }
  })
  // swiper
  var picSwiper = new Swiper('.pic-swiper', {
    spaceBetween: 10,
    slidesPerView: 'auto',
    freeMode: true,
    freeModeMomentum: false,
  })

  var tagSwiper = new Swiper('.tag-swiper', {
    slidesPerView: 'auto',
    freeMode: true,
    freeModeMomentum: false,
  })

  var tapSwiper = new Swiper('.tap-swiper', {
    spaceBetween: 12,
    slidesPerView: 'auto',
    freeMode: true,
    freeModeMomentum: false,
    observeSlideChildren: true,
    observer: true,
  })

  // photoswipe实例化
  window.onload = function () {
    var _img = $(".pic-swiper").find("img");
    for (var i = _img.length - 1; i >= 0; i--) {
      if (_img[i].width < 100 && _img[i].height < 100) {
        _img.splice(i, 1);
      }
    }
    var res = '';
    for (var i = 0; i < _img.length; i++) {
      res += `<figure><div class="img-dv"><a href="${_img[i].currentSrc}"><img src="${_img[i].currentSrc}"></a></div></figure>`
    }
    $('.my-gallery').html(res);
    auto_data_size();
    var _a = _img.parent();
    var _f = $('figure');
    jQuery.each(_a, function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        _f.eq(i).find('a').trigger('click');
      })
    });
  }

  $(".text-content .more").click(function () {
    $(this).parents(".text-content").toggleClass("active");
    if ($(this).parents(".text-content").hasClass("active")) {
      $(this).html("收起");
    } else {
      $(this).html("展开");
    }
  })

  $(".popup-more").click(function () {
    $(".mask-box").show();
    $("body").css("overflow", "hidden");
  })

  $(".mask-box .close-btn").click(function () {
    $(".mask-box").hide();
    $("body").css("overflow", "unset");
  })

  $(".recom-zt-box .gameDetail_menu span").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active")
    var index = $(this).attr("index");
    $(".recom-zt-box .typeBox .typeCommon").eq(index).css("display", "block").siblings().css("display", "none");
  })

  $(".recom-game-box .show-more").click(function () {
    $(this).toggleClass("active");
    $(this).parents(".game-item").find(".game-intro").toggleClass("active");
  })

  $(document).scroll(function () {
    if ($(this).scrollTop() > ($(".m-game-info").height() - 20)) {
      $(".top-app-bg").show();
    } else {
      $(".top-app-bg").hide();
    }
  })
  $(".nav-item a").click(function (e) {
    e.preventDefault();
    let href = $(this).attr("href");
    $(window).scrollTop($(href).offset().top - 156);
  })

  $(".page-nav .nav-item").click(function (e) {
    e.preventDefault();
    $(this).addClass("active").siblings(".nav-item").removeClass("active");
    let href = $(this).data("nav");
    $('html,body').animate({
      scrollTop: ($(href).offset().top - 156) + 'px'
    }, 'slow');
  })
})