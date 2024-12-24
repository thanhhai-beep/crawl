$(function () {

    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    } else {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }

    //获取滚动条当前的位置
    function getScrollTop() {
        var scrollTop = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
        } else if (document.body) {
            scrollTop = document.body.scrollTop;
        }
        return scrollTop;
    }


    homeVar = {
        panelIndex: 0,
        panelSort: [],
        panel,
    }

    var default_pos = [];
    $('.headTab li').each(function (i) {
        var j = $('.sortTab').eq(i).find('li.on').index();
        if (typeof (j) != 'undefined' && j >= 0) {
            default_pos[i] = j;
        }
    });

    var panel = $('.headTabCon > div');
    var holdHeight = $('.sortTabWrap').height() + $('.headTabWrap').height();

    function tabFun(tab, con, cur) {
        var $tab = $(tab)
        var $con = $(con)
        $tab.on('click', function () {
            var tabIndex = $(this).index();
            homeVar.panelIndex = tabIndex
            $(this).addClass(cur).siblings().removeClass(cur);
            $con.eq(tabIndex).show().siblings().hide();
            $con.eq(tabIndex).find('img[lz_src]').attr('lzimg', 1);
            lzimg_load();
            // setPanelCurText(0);
            // panelScroll($('.sortTab:visible li.on').index());
            panelScroll(default_pos[tabIndex]);
        })
    }

    tabFun('.headTab li', '.headTabCon>div', 'on');

    $(".sortTab .list").each(function (i) {
        var sortTab = new Swiper('#sort' + i, {
            slidesPerView: "auto",
            observer: true,
            observeParents: true,
        });
        homeVar.panelSort.push(sortTab)
    })

    setTimeout(function () {
        panelScroll($('.sortTab:visible li.on').index(), 0);
    }, 300);

    $('.sortTab .list li').on('click', function () {
        var index = $(this).index();
        var panelIndex = $(this).attr('data-index');
        $(this).addClass('on').siblings().removeClass('on');
        $('.sortTab .prev').removeClass('on')

        if (index >= 2) {
            homeVar.panelSort[homeVar.panelIndex].slideTo(index - 1)
        } else {
            homeVar.panelSort[homeVar.panelIndex].slideTo(0)
        }

        panelScroll($('.sortTab:visible li.on').index());
    })
    $('.sortTab .prev').on('click', function () {
        var panelIndex = $(this).attr('data-index');
        $('.sortTab .list').eq(homeVar.panelIndex).find('li').removeClass('on')
        $(this).addClass('on');
        panelScroll(panelIndex)
    })

    function panelScroll(it) {
        var panel = $('.headTabCon >div').eq(homeVar.panelIndex).find('.NG-wrap');
        var $ele = panel.children('.NG-panel[data-index=' + it + ']').eq(0);
        var top = $ele.offset().top - holdHeight + 1;
        $('body,html').animate({"scrollTop": top}, 500);
    }

    $(window).scroll(function () {
        var scrollTop = getScrollTop();
        // 筛选过滤tab
        homeVar.panel = panel.eq(homeVar.panelIndex)
        var $sort = homeVar.panel.find('.sortTab')
        var $panelCur = homeVar.panel.find('.NG-panel-on');
        var $sortWrap = $('.headTabWrap');
        if (scrollTop >= $sortWrap.offset().top) {
            $sort.addClass('fixed');
            $panelCur.addClass('fixed');
            $('.headTab').addClass('fixed');
        } else {
            $sort.removeClass('fixed');
            $panelCur.removeClass('fixed');
            $('.headTab').removeClass('fixed');
        }

        // 返回顶部按钮
        if (scrollTop > 200) {
            $('#gotop').show();
        } else {
            $('#gotop').hide();
        }

        var $fDiv = homeVar.panel.find('.NG-panel');
        for (var i = 0; i < $fDiv.length; i++) {
            if (scrollTop + holdHeight > $fDiv.eq(i).offset().top) {
                setPanelCur(i)
            }
        }
    });

    var Ptimer = null;

    function setPanelCurText(i) {
        var $ele = panel.eq(homeVar.panelIndex).find('.NG-wrap .NG-panel').eq(i);
        var text = $ele.find('.label').text();
        var $panelCur = panel.eq(homeVar.panelIndex).find('.NG-panel-on');
        $panelCur.html(text);
    }

    function setPanelCur(i) {
        var $ele = homeVar.panel.find('.NG-panel').eq(i);
        var slideIndex = $ele.attr('data-index');
        var $sort = homeVar.panel.find('.sortTab');
        var $sortLi = $sort.find('li');
        setPanelCurText(i)
        if (Ptimer) {
            clearTimeout(Ptimer)
        }
        Ptimer = setTimeout(function () {
            if (slideIndex) {
                if (slideIndex == 'prev') {
                    $sortLi.removeClass('on');
                    $sort.find('.prev').addClass('on')
                    return false;
                } else {
                    $sort.find('.prev').removeClass('on')
                    $sortLi.eq(slideIndex).addClass('on').siblings().removeClass('on');

                    if (slideIndex >= 2) {
                        homeVar.panelSort[homeVar.panelIndex].slideTo(slideIndex - 1)
                    } else {
                        homeVar.panelSort[homeVar.panelIndex].slideTo(0)
                    }
                }
            }
            clearTimeout(Ptimer);
            Ptimer = null
        }, 50)
    }


})