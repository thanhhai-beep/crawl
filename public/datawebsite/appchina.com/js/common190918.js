function fixed_position() {
    var fixed_left = $('.main').offset().left + $('.main').width() + 20;
    if ($('html').outerWidth() - fixed_left < 60) {
        $('div.fixed').css('left', ($('html').outerWidth() - 60) + 'px');


    } else {
        $('div.fixed').css('left', fixed_left + 'px');
    }
}

function supportCanvas() {
    return !!document.createElement("canvas").getContext;
}

function indexApaper(flag) {
    var par = $(".mainbar-right.has-border");
    var index = 0;
    par.each(function (i, obj) {
        if (this.className == "mainbar-right has-border") {
            index = i;
            return false;
        }
    });
    par.eq(index).addClass("hide");

    if (flag == 1) {
        if (index == par.length - 1) {
            par.eq(0).removeClass("hide");
        } else {
            par.eq(index + 1).removeClass("hide");
        }
    } else {
        if (index == 0) {
            par.eq(par.length - 1).removeClass("hide");
        } else {
            par.eq(index - 1).removeClass("hide");
        }
    }
}

function search() {
    var val = $('#keyword').val();//.replace(/\s/g, '');
    if (val === undefined
        || val === null
        || val === ''
        || val.trim().length === 0) {
        return false;
    }
    var searchUrl = '/sou?keyword=';
    val = encodeURIComponent(val.trim());
    location.href = searchUrl + val;
    return false;
}

function search_index_static() {

    var val = $('#keyword').val();//.replace(/\s/g, '');
    if (val === undefined
        || val === null
        || val === ''
        || val.trim().length === 0) {
        return false;
    }
    var searchUrl = '/sou?keyword=';
    val = encodeURIComponent(val.trim());
    location.href = customHost + searchUrl + val;
    return false;
}

function logout() {
    $.ajax({
        type: "get",
        url: "/account/logout",
        dataType: "json",
        success: function (data) {
            if (data.result) {
                location.reload();
            }
        }
    })
}

function detectOS() {
    var sUserAgent = navigator.userAgent;
    var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
    var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
    if (isMac)
        return "Mac";
    var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
    if (isUnix)
        return "Unix";
    var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
    if (isLinux)
        return "Linux";
    if (isWin) {
        var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
        if (isWin2K)
            return "Win2000";
        var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
        if (isWinXP)
            return "WinXP";
        var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
        if (isWin2003)
            return "Win2003";
        var isWin2003 = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
        if (isWin2003)
            return "WinVista";
        var isWin2003 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
        if (isWin2003)
            return "Win7";
    }
    return "other";
}

$(window).resize(function () {
    fixed_position();
});
$(window).load(function () {
    var app_screenshot_list_width = 0;
    $('.app-screenshot-list').find('img').each(function () {
        app_screenshot_list_width += $(this).outerWidth();
        app_screenshot_list_width += 5;
    });
    if (app_screenshot_list_width < 650) {
        $('.slider').hide();
    }
    $('.app-screenshot-list').css('width', app_screenshot_list_width + 4);
});

$(document).ready(function () {
    getId();

    loadOnlineSingleGameData();

    fixed_position();
    var top = $('.top').children('div');
    top.mouseover(function () {
        if (!$(this).hasClass('top-active')) {
            $(this).toggleClass('top-active')
                .siblings('div').toggleClass('top-active')
                .parent().children('ol:visible').hide()
                .siblings('ol').show();
        }
    });

    $('.so').mouseover(function () {
        if ($(this).attr('id') != 'checked') {
            $(this).attr('id', 'checked')
                .siblings('div').attr('id', '');
            $('.game-app-name').children('ul').toggleClass('hide');
        }
    });

    $('#to-top').click(function () {
        var top = document.documentElement.scrollTop || document.body.scrollTop;
        if (top > 0) {
            $('html,body').animate({scrollTop: "0px"}, 400);
        }
    });

    $('.main-info h2.part-title').click(function () {

        $(this).next('p').slideToggle('fast');
        $(this).next('div').slideToggle('fast');
        $(this).next('h3').slideToggle('fast').next('p').slideToggle('fast');
        if ($(this).next().is("ul")) {
            $(this).next().slideToggle('fast');
        }
        if ($(this).hasClass('r')) {
            $(this).removeClass('r');
        } else {
            $(this).addClass('r');
        }
    });

//	$('.interrelate-app ul li:odd').css('margin-right','0px');

    $('#slide-left,#slide-right').mouseenter(function () {
        $(this).addClass('active');
    }).mouseleave(function () {
        $(this).removeClass('active');
    });

    $('#slide-left').click(function () {
        var first_li_position = $('.app-screenshot-list li').first().offset().left;
        var ul_position = $('.app-screenshot-list').offset().left;
        var old_left = parseInt($('.app-screenshot-list li').last().css('left'));

        if (-(first_li_position - ul_position) >= $('.app-screenshot-list li').last().outerWidth()) {
            if (!isNaN(old_left)) {
                $('.app-screenshot-list li').animate({left: old_left + $('.app-screenshot-list li').last().outerWidth()}, 100);
            } else {
                $('.app-screenshot-list li').animate({left: $('.app-screenshot-list li').last().outerWidth()}, 100);
            }
        } else {
            if (!isNaN(old_left)) {
                $('.app-screenshot-list li').animate({left: old_left - (first_li_position - ul_position)}, 100);
            } else {
                $('.app-screenshot-list li').animate({left: -(first_li_position - ul_position)}, 100);
            }
        }

    });

    $('#slide-right').click(function () {
        var first_li_position = $('.app-screenshot-list li').first().offset().left;
        var ul_position = $('.app-screenshot-list').offset().left;
        var left = $('.app-screenshot-list li').last().offset().left + $('.app-screenshot-list li').last().outerWidth() - ($('.screenshot').offset().left + $('.screenshot').outerWidth());
        var old_left = parseInt($('.app-screenshot-list li').last().css('left'));
        if (left >= $('.app-screenshot-list li').last().outerWidth()) {
            if (!isNaN(old_left) && (old_left != 0)) {
                $('.app-screenshot-list li').animate({left: old_left - $('.app-screenshot-list li').last().outerWidth()}, 100);
            } else {
                $('.app-screenshot-list li').animate({left: -$('.app-screenshot-list li').last().outerWidth()}, 100);
            }
        } else {
            if (!isNaN(old_left) && (old_left != 0)) {
                $('.app-screenshot-list li').animate({left: (old_left - left)}, 100);
            } else {
                $('.app-screenshot-list li').animate({left: (-left)}, 100);
            }
        }
    });

    $('.recommend-game h1').click(function () {
        if (!$(this).hasClass('checked')) {
            $(this).toggleClass('checked')
                .siblings('h1').toggleClass('checked')
                .parent().children('ul:visible').hide()
                .siblings('ul').show();
        }
    });

    var flag = 0;
    $('#soft,#game,#top,#group,#appset,#dna').mouseenter(function () {
        flag = 1;
        $('.headnavimenu').children('ul').hide();
        $('.headnavi').show().siblings('.headnavimenu').show();
        $('#' + $(this).attr('id')).show();
        var height = $('.headnavimenu').height();
        $('.headnavi').outerHeight(height);
    });

    $('.headnavi').mouseover(function () {
        flag = 1;
    });
    $('.headnavimenu').mouseover(function () {
        flag = 1;
    });
    $('.headnavi').mouseleave(function () {
        flag = 0;
        $('.headnavi').hide();
        $('.headnavimenu').hide();
        $('.headnavimenu').children('ul').hide();
    });
    $('.headnavimenu').mouseleave(function () {
        flag = 0;
        $('.headnavi').hide();
        $('.headnavimenu').hide();
        $('.headnavimenu').children('ul').hide();
    });


    $('#soft,#game,#top,#group,#appset,#dna').mouseleave(function () {
        flag = 0;
        setTimeout(function () {
            if (flag === 0) {
                $('.headnavi').hide();
                $('.headnavimenu').hide();
                $('.headnavimenu').children('ul').hide();
            }
        }, 20);
    });

    $('.index-hot-app-list li').mouseenter(function () {

        $('ul.index-hot-app-list').find('img').removeAttr('style');
        $('ul.index-hot-app-list').find('a').removeAttr('style');
        $('ul.index-hot-app-list').find('h2').removeAttr('style');
        $('ul.index-hot-app-list').find('span').removeAttr('style');


        $(this).siblings('div').removeClass('index-app-more-active');
        $(this).siblings('li').removeAttr('id');
        active_object = $(this);
        var this_object = $(this);
        var nextdiv = $(this).next('div');
        this_object.attr('id', 'index-app-active');
        this_object.find('img').css('margin-top', '10px');//.css('margin-left','-1px');
        this_object.find('img.Content_Icon').css('margin-left', '-3px');//.css('margin-left','-1px');
        //this_object.find('a.index-view-detail').css('left', '-1px');
        this_object.find('h2').css('left', '-1px');
        this_object.find('span').css('margin-left', '-3px');
        this_object.find('span.downloadCountShow').hide();
        this_object.find('a.index-view-detail').css('display', 'block');
        nextdiv.addClass('index-app-more-active')
            .css('left', this_object.offset().left).css('top', this_object.offset().top);
    });

    $('.index-hot-app-list li').mouseleave(function () {
        a = $(this);
        a.find('img').removeAttr('style');
        a.find('a').removeAttr('style');
        a.find('h2').removeAttr('style');
        a.find('span').removeAttr('style');
        a.removeAttr('id').next('div').removeClass('index-app-more-active');

    });

    $('.strategy span.gameclassify a').click(function () {
        if (!$(this).hasClass('checked')) {
            var catid = $(this).attr('catid');
            $(this).addClass('checked')
                .siblings('a').removeClass('checked');
            $('ul.strategy').hide().each(function () {
                if ($(this).attr('catid') === catid) {
                    $(this).show();
                }
            });
            $('a.strategy-img').hide().each(function () {
                if ($(this).attr('catid') === catid) {
                    $(this).show();
                }
            });

        }
    });

    $('#checkPermissions').toggle(
        function () {
            $('.permissionsDetail').slideDown('fast');
        },
        function () {
            $('.permissionsDetail').slideUp('fast');
        }
    );

    $('ol.soft-top-list li').mouseenter(function () {
        $(this).css('background-color', '#53bf1d').css('color', '#fff').find('a').css('color', '#fff');
    }).mouseleave(function () {
        $(this).css('background-color', '#fff').css('color', '#666').find('a').css('color', '#666');
    });
    $('ol.game-top-list li').mouseenter(function () {
        $(this).css('background-color', '#53bf1d').css('color', '#fff').find('a').css('color', '#fff');
    }).mouseleave(function () {
        $(this).css('background-color', '#fff').css('color', '#666').find('a').css('color', '#666');
    });


    $('div.game-app-name ul li a').mouseenter(function () {
        $(this).css('color', '#fff');
    }).mouseleave(function () {
        $(this).css('color', $(this).attr('color'));
    });

    $('.up').click(function () {
        indexApaper(-1)
    });
    $('.down').click(function () {
        indexApaper(1)
    });

    $('.tag-list-index-list li').mouseenter(function () {
        //alert($(this).attr('class'));
        if (!$(this).hasClass('tag-list-index-list-active')) {
            $(this).addClass('tag-list-index-list-active')
                .siblings('li')
                .removeClass('tag-list-index-list-active');
            $('.tag-list-tag[data-index=' + $(this).attr('data-index') + ']').show()
                .siblings('ul.tag-list-tag').hide();
        }
    });

    var page = 1;
    var i = 7; //每版放7个图片
    //向后 按钮
    $("span.backward").click(function () {    //绑定click事件
        var content = $("div#necessary-content");
        var content_list = $("div#necessary-list");
        var v_width = content.width();
        var len = content.find("dl").length;
        var page_count = Math.ceil(len / i);   //只要不是整数，就往大的方向取最小的整数
        if (!content_list.is(":animated")) {    //判断“内容展示区域”是否正在处于动画
            if (page === page_count) {  //已经到最后一个版面了,如果再向后，必须跳转到第一个版面。
                content_list.animate({left: '0px'}, "slow"); //通过改变left值，跳转到第一个版面
                page = 1;
            } else {
                content_list.animate({left: '-=' + v_width}, "slow");  //通过改变left值，达到每次换一个版面
                page++;
            }
        }
    });
    //往前 按钮
    $("span.forward").click(function () {
        var content = $("div#necessary-content");
        var content_list = $("div#necessary-list");
        var v_width = content.width();
        var len = content.find("dl").length;
        var page_count = Math.ceil(len / i);   //只要不是整数，就往大的方向取最小的整数
        if (!content_list.is(":animated")) {    //判断“内容展示区域”是否正在处于动画
            if (page === 1) {  //已经到第一个版面了,如果再向前，必须跳转到最后一个版面。
                content_list.animate({left: '-=' + v_width * (page_count - 1)}, "slow");
                page = page_count;
            } else {
                content_list.animate({left: '+=' + v_width}, "slow");
                page--;
            }
        }
    });

    $('#necessary-list dl').mouseenter(function () {
        $('#necessary-list').find('img').removeAttr('style');
        $('#necessary-list').find('a').removeAttr('style');
        $('#necessary-list').find('h2').removeAttr('style');
        $('#necessary-list').find('dd').removeAttr('style');
        $('#necessary-list').find('span').removeAttr('style');
        $(this).siblings('div').removeClass('index-app-more-active');
        $(this).siblings('dl').removeAttr('id');
        var this_object = $(this);
        var dlList = $('#necessary-list>dl');
        var content = this_object.context;
        var subscript = 1;
        dlList.each(function (i, item) {
            if (item.isEqualNode(content)) {
                subscript = subscript + i;
            }
        });
        var nextdiv = $(this).next('div');
        this_object.find('img').css('margin-top', '10px');
        this_object.find('dd').css('left', '-1px');
        this_object.find('span').css('margin-left', '-3px');
        console.info(this_object.offset().left);
        if (subscript % 7 === 0) {
            this_object.attr('id', 'index-app-active-left');
            nextdiv.addClass('necessary-app-more-active-left').css('left', (page - 1) * 938 + 673).css('top', '3px');
        } else {
            this_object.attr('id', 'index-app-active');
            nextdiv.addClass('necessary-app-more-active').css('left', (page - 1) * 938 + 14 + ((subscript % 7) - 1) * 134).css('top', '3px');
        }


    });

    $('#necessary-list dl').mouseleave(function () {
        a = $(this);
        a.find('img').removeAttr('style');
        a.find('a').removeAttr('style');
        a.find('h2').removeAttr('style');
        a.find('dd').removeAttr('style');
        a.find('span').removeAttr('style');
        a.removeAttr('id').next('div').removeClass('necessary-app-more-active');
        a.removeAttr('id').next('div').removeClass('necessary-app-more-active-left');
    });

});

function getId() {
    $.ajax({
        type: "get",
        url: "/ajax/id.json",
        cache: false,
        dataType: "json",
        success: function (data) {
            if (data["status"] == 0 && data["result"]["show_phone_call"] == true) {
                $("#phone_call").show();
            }
        }
    })
}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

function loadOnlineSingleGameData() {
    var hotGameApp = $("#hot-game-app");
    if (hotGameApp.length == 1) {
        $.ajax({
            type: "get",
            url: "/ajax/loadOnlineSingleGameData",
            dataType: "json",
            success: function (resp) {
                if (resp.status) {
                    if (resp.result.hot_online_game != undefined
                        && resp.result.hot_online_game.success) {
                        var data = resp.result.hot_online_game.data;
                        appendSingleGameData(data, "online-game")
                    }
                    if (resp.result.hot_single_game != undefined
                        && resp.result.hot_single_game.success) {
                        var data = resp.result.hot_single_game.data;
                        appendSingleGameData(data, "single-game")
                    }
                }
            }
        })
    }
}


function appendSingleGameData(data, str) {
    $("#" + str + " li").remove();
    var line = '<li><a href="';
    if ("undefined" !== typeof customHost) {
        line += customHost;
    }
    line += '/app/{package_name}" color="{color}" style="color:{color}" target="_blank">{name}</a></li>';
    $.each(data, function (i, val) {
        $("#" + str).append(line.format(val));
    })
}


String.prototype.format = function (args) {
    if (arguments.length > 0) {
        var result = this;
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                var reg = new RegExp("({" + key + "})", "g");
                result = result.replace(reg, args[key]);
            }
        } else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] == undefined) {
                    return "";
                } else {
                    var reg = new RegExp("({[" + i + "]})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
        return result;
    } else {
        return this;
    }
};

function countDownDownload(node, apkUrl, count) {
    node.style.pointerEvents = "none";
    node.style.cursor = "default";
    node.innerHTML = count + "秒后开始";

    if (count == 0) {
        // do job
        window.location.href = apkUrl;
        node.innerHTML = "免费下载";
        node.style.pointerEvents = "auto";
        node.style.cursor = "pointer";
    } else {
        count -= 1;
        setTimeout(function () {
            countDownDownload(node, apkUrl, count);
        }, 1000);
    }
}

function freeDownload(node, apkUrl) {
//	window.location.href = apkUrl;
    countDownDownload(node, apkUrl, 5);
}

function errorImg(img, src) {
    img.src = src;
    img.onerror = null;
}