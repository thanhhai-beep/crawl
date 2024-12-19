$(function () {
    var ios_adv_down = 'https://game.3733.com?c=3424';
    var az_adv_down = 'https://xz.xz3733.com/apk/gamebox/latest/3733gamebox_cps3456.apk';
    // 首页盒子下载
    var u = navigator.userAgent;
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isIOS) {
        $('.ad-count-click, .ad-count-down').attr('href', ios_adv_down)
    } else {
        $('.ad-count-click, .ad-count-down').attr('href', az_adv_down)
    }
    /**
     * @title 双榜切换
     * @var mh => 列表导航的高度
     * @var ft => 列表导航的top值
     * @var i => 当前是人气榜还是新游榜
     * @var st => 页面滚动高度
     * @var tabScrollTop => 记录两个游戏列表的滚动高度
    */
    var mh = $('.fixxx').outerHeight();
    var ft = $('.fixxx').offset().top;
    var i = 0;
    var st = document.documentElement.scrollTop||document.body.scrollTop;
    var tabScrollTop = [ft-mh, ft-mh]
    $('.fixxx span').click(function () {
        if(i === $(this).index()) return;
        i = $(this).index();
        $(this).addClass('on').siblings().removeClass();
        $('.game_list > div').eq(i).addClass('active').siblings().removeClass();
        st = document.documentElement.scrollTop||document.body.scrollTop;
        if(st < Math.floor(ft-mh)) {
            tabScrollTop[Math.abs(i - 1)] = ft-mh
            tabScrollTop[i] = ft-mh
        } else {
            tabScrollTop[Math.abs(i - 1)] = st
        }
        console.log(i,tabScrollTop)
        $("html,body").animate({ scrollTop: tabScrollTop[i] }, 10);
    })
    $(window).scroll(function () {
        var wt = $(this).scrollTop();
        st = document.documentElement.scrollTop||document.body.scrollTop
        if (wt >= ft - 44) {
            $('.fixxx').addClass('fixed');
            $('.game_list').css('margin-top', mh);
        } else {
            $('.fixxx').removeClass('fixed');
            $('.game_list').css('margin-top', '0px');
        }
    })
})

