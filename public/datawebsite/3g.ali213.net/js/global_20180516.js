var MySwiper = new Swiper('.news_tab', {
    slidesPerView: 'auto',
    paginationClickable: true,
    freeMode: true,
    calculateHeight: true,
    observer: true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,//修改swiper的父元素时，自动初始化swiper
    scrollbarDragggable: true
});
// $(".header_menu").click(function() {
// 	if($(this).hasClass('header_menu_open')){
// 		$(this).removeClass('header_menu_open');
// 	}else{
// 		$(this).addClass('header_menu_open');
// 	}
// 	$('.uaHolder > .activePart').toggle();
// });


// 新头
(function () {
    if (parseInt($('html').css('font-size')) < 20) {
        $('html').css('font-size', '50px');
    }
    if (typeof ua === 'undefined') {
        ua = navigator.userAgent.toLowerCase();
    }
    // 2021415 start
    $('.staticPart').hide();
    $('.uaHolder').addClass('new-3g-head');
    // 资源内页 合集内页 资源列表 排行榜 不用公共头
    var tmpUrl=window.location.href;
    var reg1=/app.ali213.net\/android\/.+.html/;
    var reg2=/app.ali213.net\/heji\/.+.html/;
    var reg3=/app.ali213.net\/down\/.+\//;
    var reg4=/app.ali213.net\/paihang\//;
    if(window.location.origin=='https://app.ali213.net'){
        searchhost='https://app.ali213.net';
    }else{
        searchhost='https://3g.ali213.net';
    }
    if(reg1.test(tmpUrl)||reg2.test(tmpUrl)||reg3.test(tmpUrl)||reg4.test(tmpUrl)){
        $('body').prepend('<div class="head_3g-top"></div><div class="head_3g2020"><div class="head_3g-top"><a class="head_3g-logo"><img src="https://3g.ali213.net/images/head_icon.png"><div><span>游侠网</span><p>攻略资讯一手掌握</p></div></a><div class="head_3g-more"></div></div><div class="head_3g-shadow"></div><div class="head_3g-con"><form action="'+searchhost+'/search.html" method="get"><div class="head_3g-form"><input type="search" class="search-input" name="keyword"value="" placeholder="在此输入搜索内容" autocomplete="off"><input type="submit" class="search-submit" value=""></div></form><div class="head_3g-icon"><a href="https://3g.ali213.net"><div><img src="https://3g.ali213.net/images/head_home.png"></div>首页</a><a href="https://3g.ali213.net/news/"><div><img src="https://3g.ali213.net/images/head_news.png"></div>资讯</a><a href="https://3g.ali213.net/zt/"><div><img src="https://3g.ali213.net/images/head_zt.png"></div>专题</a><a href="https://3g.ali213.net/gl/"><div><img src="https://3g.ali213.net/images/head_gl.png"></div>攻略</a><a href="https://3g.ali213.net/v/"><div><img src="https://3g.ali213.net/images/head_video.png"></div>视频</a><a href="https://3g.ali213.net/down/"><div><img src="https://3g.ali213.net/images/head_down.png"></div>下载</a><a href="https://app.ali213.net"><div><img src="https://3g.ali213.net/images/head_mob.png"></div>手游</a><a href="https://ali213.fhyx.com/"><div><img src="https://3g.ali213.net/images/head_shop.png"></div>商城</a></div></div></div><div class="down-app-bg"></div>')
    }else{
        $('body').prepend('<div class="head_3g-top"></div><div class="head_3g2020"><div class="head_3g-top"><a href="https://www.ali213.net/app/transfer.html" class="head_3g-logo"><img src="https://3g.ali213.net/images/head_icon.png"><div><span>游侠网</span><p>攻略资讯一手掌握</p></div></a><a class="head_3g-down" href="https://www.ali213.net/app/transfer.html">获取APP</a><div class="head_3g-more"></div></div><div class="head_3g-shadow"></div><div class="head_3g-con"><form action="'+searchhost+'/search.html" method="get"><div class="head_3g-form"><input type="search" class="search-input" name="keyword"value="" placeholder="在此输入搜索内容" autocomplete="off"><input type="submit" class="search-submit" value=""></div></form><div class="head_3g-icon"><a href="https://3g.ali213.net"><div><img src="https://3g.ali213.net/images/head_home.png"></div>首页</a><a href="https://3g.ali213.net/news/"><div><img src="https://3g.ali213.net/images/head_news.png"></div>资讯</a><a href="https://3g.ali213.net/zt/"><div><img src="https://3g.ali213.net/images/head_zt.png"></div>专题</a><a href="https://3g.ali213.net/gl/"><div><img src="https://3g.ali213.net/images/head_gl.png"></div>攻略</a><a href="https://3g.ali213.net/v/"><div><img src="https://3g.ali213.net/images/head_video.png"></div>视频</a><a href="https://3g.ali213.net/down/"><div><img src="https://3g.ali213.net/images/head_down.png"></div>下载</a><a href="https://app.ali213.net"><div><img src="https://3g.ali213.net/images/head_mob.png"></div>手游</a><a href="https://ali213.fhyx.com/"><div><img src="https://3g.ali213.net/images/head_shop.png"></div>商城</a></div></div></div><div class="down-app-bg"></div>')
    }
    $('.search-container').hide();
    $('body').on('click', '.head_3g-more', function () {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.down-app-bg').show();
            $('.head_3g-con').show();
        } else {
            $(this).removeClass('active');
            $('.down-app-bg').hide();
            $('.head_3g-con').hide();
        }
    });
    var referrerstr=window.parent.document.referrer;
    if (ua.indexOf('baidu') >-1 || referrerstr.indexOf('baidu') >-1|| referrerstr.indexOf('sm') >-1|| referrerstr.indexOf('m.ali213.net') >-1) {
        $('.head_3g-top a').attr('href','javascript:void(0);');
        $('.head_3g-down').remove();
    }
    if(window.location.href.indexOf('3g.ali213.net/gl/')>-1){
        $('.head_3g-top a').attr('href','javascript:void(0);');
        $('.head_3g-down').remove();
    }
    // if (ua.indexOf('baidu') < 0 && window.parent.document.referrer.indexOf('baidu') < 0) {
    //     $('body').prepend('<div class="head_3g-top"></div><div class="head_3g2020"><div class="head_3g-top"><a href="https://www.ali213.net/app/transfer.html" class="head_3g-logo"><img src="https://3g.ali213.net/images/head_icon.png"><div><span>游侠网</span><p>攻略资讯一手掌握</p></div></a><a class="head_3g-down" href="https://www.ali213.net/app/transfer.html">获取APP</a><div class="head_3g-more"></div></div><div class="head_3g-shadow"></div><div class="head_3g-con"><form action="https://3g.ali213.net/search.html" method="get"><div class="head_3g-form"><input type="search" class="search-input" name="keyword"value="" placeholder="在此输入搜索内容" autocomplete="off"><input type="submit" class="search-submit" value=""></div></form><div class="head_3g-icon"><a href="https://3g.ali213.net"><div><img src="https://3g.ali213.net/images/head_home.png"></div>首页</a><a href="https://3g.ali213.net/news/"><div><img src="https://3g.ali213.net/images/head_news.png"></div>资讯</a><a href="https://3g.ali213.net/zt/"><div><img src="https://3g.ali213.net/images/head_zt.png"></div>专题</a><a href="https://3g.ali213.net/gl/"><div><img src="https://3g.ali213.net/images/head_gl.png"></div>攻略</a><a href="https://3g.ali213.net/v/"><div><img src="https://3g.ali213.net/images/head_video.png"></div>视频</a><a href="https://3g.ali213.net/down/"><div><img src="https://3g.ali213.net/images/head_down.png"></div>下载</a><a href="https://app.ali213.net"><div><img src="https://3g.ali213.net/images/head_mob.png"></div>手游</a><a href="https://ali213.fhyx.com/"><div><img src="https://3g.ali213.net/images/head_shop.png"></div>商城</a></div></div></div><div class="down-app-bg"></div>')
    //     $('.search-container').hide();
    //     $('body').on('click', '.head_3g-more', function () {
    //         if (!$(this).hasClass('active')) {
    //             $(this).addClass('active');
    //             $('.down-app-bg').show();
    //             $('.head_3g-con').show();
    //         } else {
    //             $(this).removeClass('active');
    //             $('.down-app-bg').hide();
    //             $('.head_3g-con').hide();
    //         }
    //     });
    //
    //     $('.staticPart').hide();
    //     $('.uaHolder').addClass('new-3g-head');
    // } else {
    //     $('.staticPart').show();
    // }

    // 2021415 end
    $('body').on('click', '.down-app-bg', function () {
        // 关闭头部下拉
        if ($('.head_3g-more').hasClass('active')) {
            $('.head_3g-more').click();
        }
        // 关闭下载弹窗
        $('.cancelx').click();
    });
    if ($('.head_3g-top').length < 1) {
        $('.staticPart').show();
    }
})();
$(".floatform").submit(function () {
    if ($("[name='keyword']").val().match(/^\s*$/)) {
        //alert("貌似你没输入任何有实质性的内容");
        window.location.href = 'https://app.ali213.net/android/search.html?keyword=%E4%BE%8D%E9%AD%82%EF%BC%9A%E8%83%A7%E6%9C%88%E4%BC%A0%E8%AF%B4';
        return false;
    }
    return true;
});
var posref;
$(function () {
    $.getScript('//m.ali213.net/json/posref.js', function () {
        posref = posrefdata;
    });
    var currurl = window.location.href;
    $('body,html').on('click', 'a', function (event) {
        var clickurl = $(this).attr('href');
        event.stopPropagation();
        for (v in posref) {
            if (currurl.indexOf(posref[v].ourl) > -1 && clickurl.indexOf(posref[v].turl) > -1) {
                $.ajax({
                    url: '//m.ali213.net/api/posstat.php?ourl=' + posref[v].ourl + '&turl=' + posref[v].turl + '&currurl=' + currurl + '&clickurl=' + clickurl,
                    type: 'get',
                    dataType: 'jsonp',
                    jsonpCallback: 'callback',
                    success: function () {
                    },
                    error: function () {
                    }
                });
            }
        }
    });
});
$(document).ready(function () {
    $(".overLay").animate({opacity: 0}, function () {
        $(this).hide();
    })
    // $('.header_right').prepend('<div class="to_down"><a href="//www.ali213.net/app/m/">手机客户端</a></div>');
});


$(".footer a").eq(0).click(function () {
    var createIframe = (function () {
            var iframe;
            return function () {
                if (iframe) {
                    return iframe;
                } else {
                    iframe = document.createElement('iframe');
                    iframe.style.display = 'none';
                    document.body.appendChild(iframe);
                    return iframe;
                }
            }
        })(),
        ua = navigator.userAgent.toLowerCase(),
        isAndroid = ua.match(/android/gi),
        isIos = ua.match(/iphone|ipod|ipad/gi),
        isIos9 = isIos && ua.match(/OS\s(\d+)/i)[1] > 8,
        isWeixin = ua.match(/micromessenger/i),
        isQQ = ua.match(/qq/i),
        isChrome = ua.match(/webkit/i),
        isBaidu = ua.match(/baidubrowser/i);

    if (isWeixin || isQQ) {
        var intro = '<div class="mask" style="position:fixed;width: 100%;height: 100%;left:0;top:0;background:rgba(0,0,0,.5);z-index:999999;"><img src="//3g.ali213.net/images/instruction.png" style="position:absolute;width:15px;height:46px;top:6px;right:18px;"><font style="position:absolute;right:11px;color:#fff;top:60px;font-size:18px;line-height:1;">请在其他浏览器中打开</font></div>';
        $("body").prepend(intro);
    } else {
        var openIframe = createIframe();
        if (isIos) {
            var loadDateTime = new Date();
            setTimeout(function () {
                var timeOutDateTime = Date.now();
                if (timeOutDateTime - loadDateTime < 1000) {
                    window.location.href = "//www.ali213.net/app/transfer.html";
                } else {
                    window.close();
                }
            }, 25);
            location = "ali213netYX://xxx?channel=index";
        } else if (isAndroid) {
            if (isChrome) {
                //chrome浏览器用iframe打不开得直接去打开，算一个坑
                window.location.href = "ali213net://xxx?channel=index";
            } else {
                //抛出你的scheme
                openIframe.src = "ali213net://xxx?channel=index";
            }
            setTimeout(function () {
                window.location.href = "//www.ali213.net/app/transfer.html";
            }, 500);
        }
    }
});


$(document).ready(function () {
    $('.game-label').each(function () {
        $(this).text($(this).text().slice(0, 6));
    });
    if (ua.indexOf('ali213app') > 0) {
        $('.head_3g-top').remove();
        $('.head_3g2020').remove();
        $('.down-app-bg').remove();
        $('.game-nav').remove();
        $('.footer').remove();
    }
    if (ua.indexOf('maptool') > 0) {
        $('.head_3g-top').remove();
        $('.head_3g2020').remove();
        $('.down-app-bg').remove();
        $('.game-nav').remove();
        $('.footer').remove();
        $('.down-btn').remove();
        $('.new-3g-head').remove();
        $('.uaMargin').remove();
        $('.detail-nav .level-1').remove();
    }
});

document.write('<script src="https://static.ali213.net/js/lib/defineShare/index.js"><\/script>');


//123-321
if (!(typeof(gameK) == "undefined")){
    $.getJSON('/heji/showip',{'keyword':gameK,'type':1,'r':Math.random()+Date.now()},function(data){
        if (data.state==1) {
            window.location.href='https://app.ali213.net/404.html';
        }
    });
}
if (!(typeof(hejiK) == "undefined")){
    $.getJSON('/heji/showip',{'keyword':hejiK,'type':2,'r':Math.random()+Date.now()},function(data){
        if (data.state==1) {
            window.location.href='https://app.ali213.net/404.html';
        }
    });
}


if(window.location.href.indexOf("/aznew/") > 0 || window.location.href.indexOf("/android/") > 0 || window.location.href.indexOf("/androids/") > 0 || window.location.href.indexOf("/ios/") > 0 || window.location.href.indexOf("/h5/") > 0 ) {
    document.write("<script type=\"text/javascript\">");
    document.write('var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?b75757a2f54a9daa7f7b954ef6472368";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();');
    document.write("</script>");
}
if(window.location.href.indexOf("/heji/") > 0) {
    document.write("<script type=\"text/javascript\">");
    document.write('var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?a8c01061a848f1f5ea4a393778f0eaaf";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();');
    document.write("</script>");
}