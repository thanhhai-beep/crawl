var _base = {
    ewm: "//f2.3839img.com/uploads/allimg/171010/397_1047102004.jpg",
    android_down_url: "https://d.3839.com/Q7",
    ios_down_url: "https://apps.apple.com/cn/app/%E5%A5%BD%E6%B8%B8%E5%BF%AB%E7%88%86%E7%A4%BE%E5%8C%BA/id1562927731",
    wap_down_url: "//www.3839.com/app.html",
    ua: window.navigator.userAgent,
    is_android: false, /* 安卓浏览器 */
    is_ios: false, /* IOS浏览器 */
    is_wechat: false, /* 微信浏览器 */
    is_qq: false, /* QQ浏览器 */
    is_standalone: false,/* 全屏模式 */
    is_chrome: false,
    is_safari: false,
    init: function () { /* 初始化 */
        this.is_android = /Android/i.test(this.ua);
        this.is_ios = /iphone|ipad|ipod/i.test(this.ua);
        this.is_wechat = /MicroMessenger/i.test(this.ua);
        this.is_qq = /qq/i.test(this.ua);
        this.is_standalone = ('standalone' in window.navigator) && window.navigator.standalone;
        this.is_chrome = /chrome/i.test(this.ua);
        this.is_safari = this.ua.match(/version\/([\d.]+).*safari/);
    },
    check_mobile: function (mobile) { /* 检查手机号 */
        return /^1([3-9])\d{9}$/.test(mobile);
    },
    goto_ios_downurl: function () {
        document.location.href = _base.ios_down_url;
    },
    goto_kb_ios_app: function () {
        openApp2.launch('hykb://openforumsummary', function () {
            document.location.href = _base.ios_down_url;
        });
    },
    goto_kb_android_app: function () {
        openApp2.launch('hykb://openTopic?topicId=0', function () {
            document.location.href = _base.android_down_url;
        });
    }
};
_base.init();

var ewm = '//f2.3839img.com/uploads/allimg/171010/397_1047102004.jpg';
var app_down_url = '//www.3839.com/app.html';
var ua = navigator.userAgent.toLowerCase(),
    is_android = /android/.test(ua),
    is_ios = /iphone|ipad|ipod/.test(ua);

var is_standalone = ('standalone' in window.navigator) && window.navigator.standalone,
    is_chrome = ua.indexOf("chrome") != -1,
    is_safari = ua.match(/version\/([\d.]+).*safari/) ? true : false;

var popData = {};

//弹窗
var zdialog = {
    id: null,
    callback: null,
    show: function (id, callback, closeId) {
        if (zdialog.id instanceof jQuery && zdialog.id.length > 0) {
            zdialog.id.hide();
        }
        zdialog.id = typeof (id) == 'string' ? $('#' + id) : id;
        if (!(zdialog.id instanceof jQuery) || zdialog.id.length < 1) return false;
        closeId = typeof closeId == 'string' ? $('#' + closeId) : closeId;
        zdialog.callback = callback;
        if ($('#__zdialog_overlay').length < 1) {
            $(document.body).prepend('<div class="pop-mask" style="display:none;" id="__zdialog_overlay"></div>');
            // if($.browser.msie){
            // 	//$(document.body).prepend('<div style="position:absolute;left:0;top:0;background:#000;opacity:.3;_filter:alpha(opacity:30);width:100%;height:0;z-index:9;display:none;" id="__zdialog_overlay"></div>');
            // 	$(document.body).prepend('<div style="position:absolute;left:0;top:0;_background:url(about:blank);_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,sizingMethod=\'scale\', src=\'//f2.3839img.com/images/mask.png\');width:100%;height:0;z-index:101;display:none;" id="__zdialog_overlay"></div>');
            // }
            // else{
            // 	$(document.body).prepend('<div style="position:absolute;left:0;top:0;background:#000;opacity:0.3;width:100%;height:0;z-index:101;display:none;" id="__zdialog_overlay"></div>');
            // }
        }
        // $('#__zdialog_overlay').css({'opacity':0.3});
        zdialog._fixed();
        $(window).unbind('scroll', zdialog._fixed).bind('scroll', zdialog._fixed);
        $(window).unbind('resize', zdialog._fixed).bind('resize', zdialog._fixed);
        if (closeId instanceof jQuery && closeId.length > 0) {
            closeId.unbind('click', zdialog.hide).one('click', zdialog.hide);
        }
    },
    hide: function () {
        if (!(zdialog.id instanceof jQuery) || zdialog.id.length < 1) return false;
        $(window).unbind('scroll', zdialog._fixed);
        $(window).unbind('resize', zdialog._fixed);
        zdialog.id.hide();
        $('#__zdialog_overlay').hide();
        if (typeof zdialog.callback == 'function') {
            zdialog.callback();
            zdialog.callback = null;
        }
    },
    _fixed: function () {
        var div = zdialog.id;
        $('#__zdialog_overlay').css({'height': $(document).height()}).show();
        // var T = ($(window).height() - div.height() - parseInt(div.css('paddingTop')) - parseInt(div.css('paddingBottom'))) / 2;
        // var L = ($(window).width() - div.width()) / 2;
        // T = T<0?0:T;
        // L = L<0?0:L;
        // div.css({'left':L,'z-index':9999});
        // if($.browser.msie && $.browser.version < 7){
        // 	div.css('position','absolute');
        // 	div[0].style.setExpression('top',"eval((document.documentElement||document.body).scrollTop+"+T+") + 'px'");
        // }
        // else{
        // 	div.css({'position':'fixed','top':T});
        // }
        div.show();
    }
};

function pop(id, repl, callback) {
    try {
        var closeFunc = typeof callback == 'function' ? callback : null;
        if (typeof (id) != 'string') {
            id = 'pop' + id;
        }
        repl = repl || [];
        var html = popData[id];
        for (var i = 0; i < repl.length; i++) {
            html = html.replace(eval('/' + repl[i][0] + '/g'), repl[i][1]);
        }
        html = html.substr(0, 4) + ' id="popCommon" style="display:none;"' + html.substr(4);
        $('#popCommon').remove();
        $('body').append(html);

        zdialog.show($('#popCommon'), closeFunc, $('#popCommon').find('.pclose'));

    } catch (e) {
    }
}

function pop2(id, repl, callback) {
    try {
        var closeFunc = typeof callback == 'function' ? callback : null;
        zdialog.show($('#' + id), closeFunc, $('#' + id).find('.pclose'));

    } catch (e) {
    }
}

function loadIosPop() {
    if (is_ios) {
        popData['ios'] = '<div class="pop pop-ios" style="display:none" id="pop_ios">'
            + '	<div class="copyinfo" id="iosCopyInfo" style="display:none;">复制成功</div>'
            + '	<span class="ppclose" id="ios_dia_close" onclick="pop_hide()"></span>'
            + '	<div class="pptit"></div>'
            + '	<div class="ppcon">'
            + '		<div class="ppewm">'
            + '			<p>苹果版后续将推出，可先关注公众号预约</p>'
            + '			<img src="//f2.3839img.com/hykb/static/hykb_web_wap/images/common/ewm_e1.png" alt="好游快爆免费下载">'
            + '		</div>'
            + '		<div class="pphow">'
            + '			<b>关注方式：</b>'
            + '			<p>1、微信直接扫码上方二维码关注公众号</p>'
            + '			<p>2、点击下方按钮复制公众号名称&gt;微信中粘贴搜索&gt;关注公众号</p>'
            + '		</div>'
            + '		<a class="ppbtn" id="isoCopyBtn" data-clipboard-text="好游快爆app" style="cursor:pointer;">点我复制</a>'
            + '		<div class="ppsm"><em>说明：</em>关注公众号后发送“苹果版”即可预约成功，还可以领取王者荣耀/第五人格等热门游戏体验服资格，掌握每月好游动态</div>'
            + '	</div>'
            + '</div>';

        $('body').append(popData['ios']);
        var clipboard = new Clipboard('#isoCopyBtn');
        clipboard.on('success', function (e) {
            if (e.text) {
                $('#iosCopyInfo').show();
                setTimeout(function () {
                    $('#iosCopyInfo').fadeOut()
                }, 1500);
            }
        });
        clipboard.on('error', function (e) {
            var text = e.text;
            if (text) {
                window.prompt("你的浏览器不支持此复制功能,请直接长按进行复制", text);
            }
        });
    }
}

function pop_hide() {
    zdialog.hide();
}

function _alert(msg, callback) {
    pop('tip', [['{tip}', msg]], callback);
}

function _alert2(msg, btn, callback) {
    pop('tip2', [['{tip}', msg], ['{btn}', btn]], callback);
}

function unopen() {
    _alert('该功能正在开发中，敬请期待！');
    return false;
}


popData['tip'] = '<div class="pop" style="display:block"><a class="pclose">关闭</a>'
    + '    <div class="ptit">友情提示</div>'
    + '    <div class="pcon">'
    + '        <p class="pf24 grey tac">{tip}</p>'
    + '    </div>'
    + '    <div class="pbtn">'
    + '        <a onclick=\"pop_hide()\">确定</a>'
    + '    </div>'
    + '</div>';
popData['tip2'] = '<div class="pop" style="display:block"><a class="pclose">关闭</a>'
    + '    <div class="ptit">友情提示</div>'
    + '    <div class="pcon">'
    + '        <p class="pf24 grey tac">{tip}</p>'
    + '    </div>'
    + '    <div class="pbtn">{btn}</div>'
    + '</div>';
popData['toapp'] = '<div class="pop" style="display:block"><a class="pclose">关闭</a>'
    + '    <div class="ptit">更多精彩功能 前往好游快爆</div>'
    + '    <div class="pcon">'
    + '        <p class="pf24 grey tac">领取游戏礼包  体验内测资格<br>更多新鲜活动  尽在好游快爆</p>'
    + '    </div>'
    + '    <div class="pbtn">'
    + '        ' + (is_ios ? '<a href="javascript:void(0);" onclick="_base.goto_kb_ios_app();return false;">马上下载</a>' : '<a href="//d.3839.com/Q7" rel="external nofollow">马上下载</a>')
    + '    </div>'
    + '</div>';

popData['toapp1'] = '<div class="pop" style="display:block"><a class="pclose">关闭</a>'
    + '    <div class="ptit">该功能仅限在好游快爆中使用</div>'
    + '    <div class="pcon">'
    + '        <p class="pf24 grey tac">下载好游快爆 查看更多精彩攻略！<br/>和高玩一起讨论游戏，分享游戏心得<br/>每天还有玩家分享新奇好玩的游戏<br/>快来加入吧！</p>'
    + '    </div>'
    + '    <div class="pbtn">'
    + '        ' + (is_ios ? '<a href="javascript:void(0);" onclick="_base.goto_kb_ios_app();return false;">下载好游快爆APP</a>' : '<a href="//d.3839.com/Q7" rel="external nofollow">马上下载</a>')
    + '    </div>'
    + '</div>';

popData['toapp2'] = '<div class="pop" style="display:block"><a class="pclose">关闭</a>'
    + '    <div class="ptit">前往好游快爆APP关注<br>获取用户最新动态</div>'
    + '    <div class="pcon">'
    + '        <p class="pf24 grey tac">看看有趣的玩家都在玩什么游戏<br/>分享彼此的游戏动态<br/>一起加入社区，畅所欲言</p>'
    + '    </div>'
    + '    <div class="pbtn">'
    + '        ' + (is_ios ? '<a href="javascript:void(0);" onclick="_base.goto_kb_ios_app();return false;">下载好游快爆APP</a>' : '<a href="//d.3839.com/Q7" rel="external nofollow">马上下载</a>')
    + '    </div>'
    + '</div>';

popData['toapp3'] = '<div class="pop" style="display:block"><a class="pclose">关闭</a>'
    + '    <div class="ptit">下载好游快爆 参与精彩活动</div>'
    + '    <div class="pcon">'
    + '        <p class="pf24 grey tac">领取游戏礼包 体验内测资格<br/> 更多新鲜活动 尽在好游快爆</p>'
    + '    </div>'
    + '    <div class="pbtn">'
    + '        ' + (is_ios ? '<a href="javascript:void(0);" onclick="_base.goto_kb_ios_app();return false;">马上下载</a>' : '<a href="//d.3839.com/Q7" rel="external nofollow">马上下载</a>')
    + '    </div>'
    + '</div>';

popData['toapp4'] = '<div class="pop" style="display:block"><a class="pclose">关闭</a>'
    + '    <div class="ptit">前往好游快爆APP，体验更多游戏单功能</div>'
    + '    <div class="pcon">'
    + '        <p class="pf24 grey tac">收藏精彩游戏单，创建自己的游戏单</p>'
    + '    </div>'
    + '    <div class="pbtn">'
    + '        ' + (is_ios ? '<a href="javascript:void(0);" onclick="_base.goto_kb_ios_app();return false;">马上下载</a>' : '<a href="//d.3839.com/Q7" rel="external nofollow">马上下载</a>')
    + '    </div>'
    + '</div>';

popData['todownapp'] = '<div class="pop" style="display:block"><a class="pclose">关闭</a>'
    + '    <div class="ptit">打开好游快爆 查看原创攻略解析</div>'
    + '    <div class="pcon">'
    + '        <p class="pf24 grey">与千万游戏爱好者一起交流互动，与开发者直接沟通，反馈游戏优化建设，共建高品质游戏交流社区，期待你的参与~</p>'
    + '    </div>'
    + '    <div class="pbtn">'
    + '        ' + (is_ios ? '<a href="javascript:void(0);" onclick="_base.goto_ios_downurl();return false;">前往安装</a>' : '<a href="//d.3839.com/Q7" rel="external nofollow">前往安装</a>')
    + '    </div>'
    + '</div>';


function toAppPop() {
    pop('toapp');
    return false;
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

//获取当前可视范围的高度  
function getClientHeight() {
    var clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
    } else {
        clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
    }
    return clientHeight;
}


// 百度分享
function bdshare(title, img, comment) {
    tag = ["qzone", "tqq", "tsina", "weixin"];
    window._bd_share_config = {
        "common": {
            "bdSnsKey": "on",
            "bdDesc": title,
            "bdComment": comment,
            "bdUrl": window.location.href,
            "bdText": title,
            "bdMini": "2",
            "bdMiniList": false,
            "bdPic": img,
            "bdStyle": "0",
            "onAfterClick": function (cmd) {
            },
            "bdSize": "16"
        }, "share": {}
    };
    $("head").append("<script type='text/javascript' src='//f2.3839img.com/js/bdshare2.0.js'><\/script>");
}

/*
页面滚动到指定位置，没有动画效果
div：滚动的位置，为jq的对象
top：如果根据div取出来的位置有偏差，用此参数校正
*/
function go_to(div, top) {
    var top = parseInt(div.offset().top) - (top || 0);
    window.scrollTo(0, top);
    window.event && (window.event.returnValue = false);
    return false;
}

/*
    页面滚动到指定位置，有动画效果
    div：滚动的位置，为jq的对象
    top：如果根据div取出来的位置有偏差，用此参数校正
    ms：滚动的毫秒数，默认1000ms
    */
function go_to2(div, top, ms) {
    ms = ms || 1000;
    var o = div.offset();
    var t = parseInt(o.top) - (top || 0);
    $("html,body").animate({'scrollTop': t}, ms);
    window.event && (window.event.returnValue = false);
    return false;
}

// 滚动条左名滚动
function hscroll2(id, flag, min, move, childlevel, time) {
    min = min || 2;
    move = move || 1;
    time = time || 300;
    childlevel = childlevel || 1;
    var parent = $("#" + id + ":not(:animated)");
    if (childlevel == 1) {
        var kids = parent.children();
    } else {
        var kids = parent.children().eq(0).children();
    }

    if (kids.length < min) return false;
    var kid = kids.eq(0);
    var kidWidth = kid.width() + parseInt(kid.css("paddingLeft")) + parseInt(kid.css("paddingRight")) + parseInt(kid.css("marginLeft")) + parseInt(kid.css("marginRight"));
    var margin = (kidWidth * move);
    if (flag == "left") {
        var s = parent.scrollLeft() + margin;
        parent.animate({'scrollLeft': s}, time);
    } else {
        var s = parent.scrollLeft() - margin;
        parent.animate({'scrollLeft': s}, time);
    }
    return false;
}

function tabUl(a, ul, e, on, callback) {
    on = typeof (on) == 'undefined' ? 'on' : on;
    e = e || 'mouseover';

    function tab() {
        var i = a.index($(this));
        if (on) {
            a.filter('.' + on).removeClass(on);
            $(this).addClass(on);
        }
        ul.eq(i).find('img[lz_src]').attr('src', function () {
            return $(this).attr('lz_src');
        }).removeAttr('lz_src');
        ul.not(ul.eq(i)).hide();
        ul.eq(i).css('display', 'block');
        if (typeof (callback) == 'function') {
            callback(i);
        }
        return false;
    }

    if (e == 'mouseover') {
        a.mouseover(tab);
    } else {
        a.click(tab);
    }
}

/*
异步加载js文件，加载完成后可回调执行其它代码
url：js链接地址
callback：回调函数
*/
var loadScript = function (url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    if (script.readyState) {
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                if (typeof (callback) == 'function') {
                    callback();
                }
            }
        };
    } else {
        script.onload = function () {
            if (typeof (callback) == 'function') {
                callback();
            }
        };
    }

    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(script, s);
};

function checkSearchForm(form, default_value) {
    var text = form.find("input[name='q']");
    var search_value = $.trim(text.val());
    if (search_value == default_value || search_value == '') {
        _alert(default_value);
        text.focus();
        return false;
    } else {
        return true;
    }
}

function searchForm(form, dtxt, blurColor, focusColor) {
    dtxt = dtxt || '请输入需要搜索的内容';
    blurColor = blurColor || '#858680';
    focusColor = focusColor || '#000000';
    var input = form.find('input:text').eq(0);
    input.css('color', blurColor).val(dtxt);
    input.focus(function () {
        input.css('color', focusColor);
        if (input.val() == dtxt) input.val('');
    }).blur(function () {
        if (input.val() == '') {
            input.css('color', blurColor);
            input.val(dtxt);
        }
    });
    form.submit(function () {
        var word = $.trim(input.val());
        if (word == '' || word == dtxt) {
            alert(dtxt);
            input.focus();
            return false;
        }
        return true;
    });
}

function searchForm(form, dtxt) {
    dtxt = dtxt || '请输入想要查找的游戏';
    var input = form.find('input:text').eq(0),
        cls_btn = form.find('.cls').eq(0);


    cls_btn.click(function () {
        input.val('');
        $(this).hide();
        return false;
    });

    try {
        input.keyup(function () {
            var t = $.trim($(this).val());
            if (t !== '' && t != dtxt) {
                cls_btn.show();
            } else {
                cls_btn.hide();
            }
        });
    } catch (e) {

    }

    form.submit(function () {
        var word = $.trim(input.val());
        if (word == '' || word == dtxt) {
            _alert(dtxt);
            return false;
        }
        return true;
    });
}


//添加到桌面
function init_ios_desk(btn_style) {
    btn_style = btn_style || '';
    var ua = navigator.userAgent.toLowerCase();

    if (!is_standalone) {
        if (is_ios && !is_chrome && is_safari) {
            document.write('<a class="addDesk" href="#" onclick="$(\'#_ios_desk_pop\').show();return false;"' + (btn_style ? ' style="' + btn_style + '"' : '') + '>添加到桌面</a>');
        }
    }

    var str = '<div class="setDeskPop" id="_ios_desk_pop" style="display:none;">'
        + '    <div class="inner">'
        + '        <a class="hideit" href="#">关闭</a>'
        + '        <div class="hd">'
        + '            <p class="p1">添加好游快爆到桌面</p>'
        + '            <p class="p2">快捷访问  游戏动态实时知</p>'
        + '        </div>'
        + '        <div class="bd">'
        + '            <img class="img" src="//f2.3839img.com/hykb/static/hykb_web_wap/images/setdesk.jpg" alt="">'
        + '            <p class="text">因为App Store限制，添加到桌面体验更多功能</p>'
        + '            <div class="arrow"></div>'
        + '        </div>'
        + '    </div>'
        + '</div>';

    $('body').append(str);

    $('.setDeskPop').click(function () {
        $(this).hide();
        return false;
    });

}

function iplocation(game_ids, callback) {
    $.post('/app/hykb_web_wap/ajax.php?ac=iplocation', {'game_ids': game_ids}, function (data) {
        if (typeof (callback) == 'function') {
            callback(data);
        }
    }, 'json');
}

var aClicks = {};

function a_clicked(funcName, status) {
    if (aClicks[funcName] == undefined) {
        aClicks[funcName] = false;//默认未点击
    }

    if (status != undefined) {
        aClicks[funcName] = status;
    }

    return aClicks[funcName];
}

if (typeof (openApp2) != 'object') {
    loadScript('https://f2.3839img.com/hykb/static/hykb_web_wap/js/openApp_v2.js');
}
if (typeof (Clipboard) != 'object' && is_ios) {
    loadScript('//f2.3839img.com/js/clipboard.min.js');
}