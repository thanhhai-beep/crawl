$(function () {
    //显示切换广告
    function wxkzshow(){
        if($('.wkxz_down').length > 0){
            if( $(".content .dowm_warp .wdj_Chioce span").hasClass("Chioce")){
                $(".wkxz").hide();
            }
            $(".content .dowm_warp .wdj_Chioce").click(function () {
                if( $(this).find("span").hasClass("Chioce")){
                    $(".wkxz").hide();
                    $(".wkxz_down").show();
                    $(this).find("span").addClass("Chioce")
                }else{
                    $(".wkxz").show();
                    $(".wkxz_down").hide();
                    $(this).find("span").removeClass("Chioce")
                }
            })
        }
    }
    // wxkzshow()

    // 切换公共
    $(".switchbox  .switchlab  .a").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
        $(this).parents(".switchbox").find(".switchitem .item_").eq($(this).index()).show().siblings().hide();
    })
    //meun
    $('.header .numbox,.clode_burger').click(function () {
        $('.header .numbox').toggleClass('on')
        $('.burger').slideToggle()
    })
    // UP回到顶部
    $(window).scroll(function () {
        var scroll_len = $(window).scrollTop();
        if (scroll_len > 120) {
            $('.QZ-up').fadeIn();
        } else {
            $('.QZ-up').fadeOut();
        }
    });
    $('.QZ-up').click(function () {
        $("body,html").animate({ scrollTop: 0 }, 300);
    });

    //导航头部
    if ($(".swiper_nav .swiper-container .swiper-slide").size() >= 1) {
        var side = 6;
        if ($('.swiper_nav').hasClass("swiper_nav2")) {
            side = 5;
        }
        if (side > 5) {
            $(".swiper_nav .swiper-button-next").show();
        }
        var swiper_nav = new Swiper('.swiper_nav .swiper-container', {
            slidesPerView: side,
            navigation: {
                nextEl: '.swiper_nav .swiper-button-next',
                prevEl: '.swiper_nav .swiper-button-prev',
            },
        });
        $(".swiper_nav .swiper-container .swiper-slide").each(function () {
            if ($(this).hasClass("on")) {
                var index_ = $(this).index();
                swiper_nav.slideTo(index_, false);//切换到第一个slide，速度为1秒;
            }

        })
    }

    //首页的轮播
    if ($(".swiper_lunbox .swiper-container .swiper-slide").size() >= 1) {
        var swiper = new Swiper('.swiper_lunbox .swiper-container', {
            lazy: true,
            speed: 200,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper_lunbox .swiper-pagination',
                clickable: true,
            },

        });
    }

    //swiper滚动
    if ($(".swiper_scrollbar .swiper-slide").size() >= 1) {
        var swiper_scrollbar = new Swiper('.swiper_scrollbar ', {
            slidesPerView: 4.3,
            scrollbar: {
                el: '.swiper-scrollbar',
            },

        });
    }
    //左右滑动

    if ($(".Min4 .swiper-container .swiper-slide").size() >= 1) {
        var swiper = new Swiper('.Min4 .swiper-container', {
            slidesPerView: 3.6,
            spaceBetween: 0,
            observer: true,
            observeParents: true,
        });
    }
    if ($(".tilelabe2 .swiper-container .swiper-slide").size() >= 1) {
        var swiper = new Swiper('.tilelabe2 .swiper-container', {
            slidesPerView: "auto",
            spaceBetween: 0,
        });
    }
    // 专区的头部导航
    if ($(".zqtopdown .zqnav .nav_  .swiper-container .swiper-slide").size() >= 1) {
        var swiper = new Swiper('.zqtopdown .zqnav .nav_ .swiper-container', {
            slidesPerView: "auto",
            spaceBetween: 0,
        });
    }
    //底部浮动
    if ($('.fixedBtn').length > 0) {
        var BtnTop = $('.Min_box .detaile_cont').offset().top;
        $(window).scroll(function() {
            var wTop = $(window).scrollTop();
            if (wTop >= BtnTop) {
                $('.fixedBtn').removeClass('hide');
            } else {
                $('.fixedBtn').addClass('hide');
            }
        });
    }
    //左右滑动合集
    $(window).load(function () {
        if ($(".hj_swiper .swiper-container .swiper-slide").size() >= 1) {
            var width_ = $(".hj_swiper .swiper-container .swiper-slide").eq(0).find("img").width();
            var height_ = $(".hj_swiper .swiper-container .swiper-slide").eq(0).find("img").height();
            if (width_ >= height_) {
                $(" .hj_swiper .swiper-container .swiper-slide").css({ "width": '3.55rem' });
            } else {
                $(" .hj_swiper .swiper-container .swiper-slide").css({ "width": '2.45rem' });
            }
            var swiper = new Swiper('.hj_swiper .swiper-container', {
                slidesPerView: 'auto',
                spaceBetween: 0,
            });
        }
        //小编推荐
        if ($(".swiper_list .swiper-container .swiper-slide").size() >= 1) {
            var swiper_list = new Swiper('.swiper_list .swiper-container', {
                slidesPerView: 'auto',
                spaceBetween: 10,
                observer: true,
                observeSlideChildren: true,
                freeMode: true
            });
        }
        //切换
        function switch_tab(a, b) {
            a.click(function () {
                $(this).addClass("on").siblings().removeClass("on");
                b.eq($(this).index()).show().siblings().hide();
            })
        }
        switch_tab($(".Min5 .tab_bt a"), $(".Min5 .ul_box ul")); //首页切换；
        switch_tab($(".switch_box .tab_box .tab"), $(".switch_box .warp_box>div"));  //专区首页简切换；

        //PAGE分页
        $(".page>span .cbtn").css("display", "none");
        $(".page>span").click(function () {
            $(this).children("div").show();
        })
        $(document).click(function () {
            $(".page>span .cbtn").css("display", "none");
        })
        $(".page>span .cbtn,.page>span").click(function (event) {
            event.stopPropagation();
        });

    });

    $(function () {
        //游戏介绍
        if ($('.Gm_jieshao').size() >= 1) {
            var txt_h = 600;
            var txt_h1 = $('.Gm_jieshao').height();
            var top_ = $(".Gm_jieshao ").offset().top;
            if (txt_h1 > txt_h) {

                $('.Gm_jieshao').addClass('show_js');
                $('.Gm_jieshao').css({ height: txt_h + "px", "overflow": "hidden", "padding-bottom": "0.8rem" })
                $('.Gm_jieshao .morbtn').show();
                $('.Gm_jieshao .morbtn').click(function () {
                    if ($('.Gm_jieshao').hasClass('show_js')) {
                        $('.Gm_jieshao').removeClass('show_js');
                        $('.Gm_jieshao .morbtn span').html('收起');
                        $('.Gm_jieshao').css({ height: "auto" });
                    } else {
                        $('.Gm_jieshao').addClass('show_js');
                        $('.Gm_jieshao .morbtn span').html('展开');
                        $('.Gm_jieshao').css({ height: txt_h + "px" });
                        $("body,html").animate({ scrollTop: top_ - 40 + "px" }, 0);
                    }
                })
            }
        }
    });


    //收起展开
    var showtab = false
    $('.Toplist ul li.mor').click(function () {
        if (showtab == false) {
            $('.Toplist ul li').show()
            $(this).find('a').html('--收起');
            showtab = true
        } else {
            lishide()
            $(this).find('a').html('--展开');
            showtab = false
        }
    })
    function lishide() {
        $('.Toplist ul li').hide()
        for (k = 0; k < 7; k++) {
            $('.Toplist ul li').eq(k).show();
        }
        $('.Toplist ul li.mor').show()
        if ($('.Toplist ul li.on').index() > 6) {
            showtab = true
            $('.Toplist ul li').show()
            $('.Toplist ul li.mor a').html('--收起');
        }
    }
    lishide()

    $(".switch_ .tab_link a").click(function () {
        $(this).addClass("on").siblings().removeClass("on")
        $(this).parents(".switch_").find(".ul_ ul").eq($(this).index()).show().siblings().hide();
    });

    //    显示预约
    $(".dowm_warp .dowm_ .btn3").click(function () {
        $(".yuyue_warp").show();
        $(".yuyue_warp .yuyue_box").show();
    });
    $(".yuyue_warp .item_box .close").click(function () {
        $(".yuyue_warp").hide();
        $(this).parents(".item_box").hide();
    })

})
//文章导航
function pagecss_box() {
    var h = $(".pagecss .ul_ ul").height();
    var h2 = $(".pagecss .ul_ ul li").height();
    var size_ = Number($(".pagecss .ul_ ul li.on").index())
    $('.pagecss .ul_ ul li:lt(' + size_ + ' )').hide();
    $(".pagecss .bt_title .close").click(function () {
        if ($(this).hasClass("on")) {
            $(this).parents(".pagecss ").find(".ul_").stop().animate({ height: h2 + 'px' }, 100);
            $(this).removeClass("on");
            $('.pagecss .ul_ ul li:lt(' + size_ + ' )').hide();

        } else {
            $(this).parents(".pagecss ").find(".ul_").stop().animate({ height: h + 'px' }, 100);
            $(this).addClass("on");
            $('.pagecss .ul_ ul li:lt(' + size_ + ' )').show();
        }

    })
}
pagecss_box()
//预约
function yuyueform(id) {
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    var mobile = $('#mobile').val();
    if (mobile == "") {
        alert('*请输入手机号')
        return false;
    }
    else if (!myreg.test(mobile)) {
        alert('*请输入正确手机号码')
        return false;
    }
    $.post('/api/appointsoft', { mobile: mobile, softid: id }, function (data) {
        if (data.code == 1) {
            alert('预约成功！');
            $('.close').click();
        }
        else {
            alert(data.msg);
        }
        return false;

    }, 'json');
}

//更多版本
function Min_ord() {
    var size_ = $(".Min3_ord ul li").size();
    if (size_ > 9) {
        $(".Min3_ord .more").show();
        $(".Min3_ord ul li:gt(9)").hide();
    } else {
        $(".Min3_ord .more").hide();
    }
    $(".Min3_ord .more").click(function () {
        $(this).hide()
        $(".Min3_ord ul li").show();
    })
}
Min_ord();
//video
$(function () {
    var wind_w = $(window).width();
    if (wind_w <= 768) {
        $('.detaile_cont  p iframe').css('height', wind_w * 0.6)
    }
})
// 加载更多;
function loadmore(index_) {
    var arr = [];
    $(".loadmore").each(function (i) {
        arr.push(0);
        var that = $(this);
        var size = that.find("ul li").size();
        that.find("ul li").each(function (index) {
            if (index >= index_) { $(this).hide(); } else { $(this).show(); }
        })
        if (size <= index_) {
            that.find(".morebot").hide();
        } else {
            that.find(".morebot").click(function () {
                arr[i]++;
                var length = index_ + index_ * arr[i];
                console.log(arr, length)
                that.find(' ul li:lt(' + (length) + ')').show()
                if (length >= size) {
                    that.find(".morebot").hide();
                }
            })
        }

    })
}
// 首页随机颜色
if ($(".bglabecolor  li").size() >= 1) {
    $(".bglabecolor  li").each(function () {
        var color = parseInt(Math.random() * (6 - 1 + 1) + 1);
        console.log(color)
        $(this).addClass('li' + color);
    })
}

// 豌豆荚下载
function wdjshow(){
	if( $(".dowm_warp .wdj_Chioce span").hasClass("Chioce")){
		$(".dowm_warp .dowm_ .wdj_btn").siblings().hide()
	}else{
		$(".dowm_warp .dowm_ .wdj_btn").hide()
	}
	$(".dowm_warp  .wdj_Chioce").click(function () {
	   if( $(this).find("span").hasClass("Chioce")){
		   $(".dowm_warp .dowm_ .wdj_btn").siblings().show()
		   $(".dowm_warp .dowm_ .wdj_btn").hide()
		   $(this).find("span").removeClass("Chioce")
	   }else{
		   $(".dowm_warp .dowm_ .wdj_btn").siblings().hide()
		   $(".dowm_warp .dowm_ .wdj_btn").show()
		   $(this).find("span").addClass("Chioce")

	   }
	})
}
wdjshow()

function makesysurl(type, obj){
    var typestr = '';
    var bitsstr = '';
    var versstr = '';
    var brandstr = '';
    // 获取各类别选中状态
    switch(type){
        case 'type':
            typestr = $(obj).attr('data-typestr');
            $('.bitsstr').each(function(i){
                if ( $(this).hasClass('on') ){
                    bitsstr = $(this).attr('data-bitsstr');
                    return;
                }
            });
            $('.versstr').each(function(i){
                if ( $(this).hasClass('on') ){
                    versstr = $(this).attr('data-versstr');
                    return;
                }
            });
            $('.brandstr').each(function(i){
                if ( $(this).hasClass('on') ){
                    brandstr = $(this).attr('data-brandstr');
                    return;
                }
            });
            break;
        case 'bits':
            bitsstr = $(obj).attr('data-bitsstr');
            $('.typestr').each(function(i){
                if ( $(this).hasClass('on') ){
                    typestr = $(this).attr('data-typestr');
                    return;
                }
            });
            $('.versstr').each(function(i){
                if ( $(this).hasClass('on') ){
                    versstr = $(this).attr('data-versstr');
                    return;
                }
            });
            $('.brandstr').each(function(i){
                if ( $(this).hasClass('on') ){
                    brandstr = $(this).attr('data-brandstr');
                    return;
                }
            });
            break;
        case 'vers':
            versstr = $(obj).attr('data-versstr');
            $('.typestr').each(function(i){
                if ( $(this).hasClass('on') ){
                    typestr = $(this).attr('data-typestr');
                    return;
                }
            });
            $('.bitsstr').each(function(i){
                if ( $(this).hasClass('on') ){
                    bitsstr = $(this).attr('data-bitsstr');
                    return;
                }
            });
            $('.brandstr').each(function(i){
                if ( $(this).hasClass('on') ){
                    brandstr = $(this).attr('data-brandstr');
                    return;
                }
            });
            break;
        case 'brand':
            brandstr = $(obj).attr('data-brandstr');
            $('.typestr').each(function(i){
                if ( $(this).hasClass('on') ){
                    typestr = $(this).attr('data-typestr');
                    return;
                }
            });
            $('.bitsstr').each(function(i){
                if ( $(this).hasClass('on') ){
                    bitsstr = $(this).attr('data-bitsstr');
                    return;
                }
            });
            $('.versstr').each(function(i){
                if ( $(this).hasClass('on') ){
                    versstr = $(this).attr('data-versstr');
                    return;
                }
            });
            break;
    }

    var path = '';
    if ( typestr != '' ){
        path += typestr;
    }
    if ( bitsstr != '' ){
        path += path != '' ? '-' + bitsstr : bitsstr;
    }
    if ( versstr != '' ){
        path += path != '' ? '-' + versstr : versstr;
    }
    if ( brandstr != '' ){
        path += path != '' ? '-' + brandstr : brandstr;
    }
    if ( path ){
        location.href = '/xitong/' + path + '/';
    }
    else{
        location.href = '/xitong/';
    }

    return ;
}

$(document).on('click', '.btnsll', function (enent) {
    setclick('sll',$(this).attr('data-pid'));
})
$(document).on('click', '.btnrll', function (enent) {
    setclick('rll',$(this).attr('data-pid'));
})
$(document).on('click', '.btnsdd', function (enent) {
    setclick('sdd',$(this).attr('data-pid'));
})
$(document).on('click', '.btnrdd', function (enent) {
    setclick('rdd',$(this).attr('data-pid'));
})
$(document).on('click', '.btntdd', function (enent) {
    setclick('tdd',$(this).attr('data-pid'));
})
$(document).on('click', '.btnpdd', function (enent) {
    setclick('pdd',$(this).attr('data-pid'));
})

function setclick(type, pid) {
    var url = "/api/setclick";
    var data = {id: pid, type: type}
    $.post(url, data, function (res) {
        if (res.code === 1) {
            if (type == "sll" && res.data['sll'] != "") {
                window.open(res.data['sll']);
            }
            if (type == "rll" && res.data['rll'] != "") {
                window.open(res.data['rll']);
            }
            if (type == "sdd" && res.data['sdd'] != "") {
                window.open(res.data['sdd']);
            }
            if (type == "rdd" && res.data['rdd'] != "") {
                window.open(res.data['rdd']);
            }
            if (type == "tdd" && res.data['tdd'] != "") {
                window.open(res.data['tdd']);
            }
            if (type == "pdd" && res.data['pdd'] != "") {
                window.open(res.data['pdd']);
            }
        }
    }, 'json')
}