// JavaScript Document
//var downloadSwitch = false;
var isFixed = false;

function getCurHost() {
    return "http://m.appchina.com/";
}

function appDown(packageName) {
    try {
        if (inWeChat()) {
            return;
        }
        var channel = readCookie("yyhchannel");
        var from = getParameterByName("from");
        if (from != undefined && from != null) {
            channel = from;
        }
        var downloadUrl = getCurHost() + "down/" + packageName;
        if (channel != undefined && channel != null) {
            downloadUrl += "/" + channel;
        }
        window.location.href = downloadUrl;
    } catch (err) {
    }
}

function normalAppDown(packageName, link) {
    try {
        if (inWeChat()) {
            return;
        }
        window.location.href = link;
    } catch (err) {
    }
}

function ckNormalDownBtn(packageName, ab) {
    var n = apkDown(packageName);
    cnzz('统计普通下载', ab, packageName);
    return n;
}

function ckHighSpeedBtn(packageName, ab) {
    var n = highSpeedDown(packageName);
    cnzz('统计高速下载', ab, packageName);
    return n;
}

function ckOffShelfBtn(packageName, ab) {
    try {
        if (inWeChat()) return false;
        if (checkBrowser()) return true;
        var downloadUrl = getCurHost() + "down/" + packageName + "/ac.union.m.op01";
        window.location.href = downloadUrl;
        cnzz('统计高速下载', ab, packageName);
        return false;
    } catch (err) {
        return true;
    }
}

function apkDown(packageName) {
    try {
        if (inWeChat()) return false;
        var btn = document.getElementsByClassName("normal-down-btn")
        if (btn.length === 0) return true;
        window.location.href = btn[0].href;
        return false;
    } catch (err) {
        return true;
    }
}

function highSpeedDown(packageName) {
    try {
        var channel = readCookie("yyhchannel");
        var from = getParameterByName("from");
        if (from != undefined && from != null) {
            channel = from;
        }
        if (inWeChat()) return false;
        if (checkBrowser() || checkChannel(channel)) return true;
        var downloadUrl = getCurHost() + "down/" + packageName;
        if (channel != undefined && channel != null) {
            downloadUrl += "/" + channel;
        }
        window.location.href = downloadUrl;
        return false;
    } catch (err) {
        return true;
    }
}

$(document).ready(function () {
    var channel = readCookie("yyhchannel");
    var yyhDownload = document.getElementById("yyh-download");
    if (channel !== undefined && channel != null && yyhDownload != null) {
        yyhDownload.href = getCurHost() + "down/u1934/" + channel;
    }

    var yyhFooterDownload = document.getElementById("yyh-footer-download");
    if (channel !== undefined && channel != null && yyhFooterDownload != null) {
        yyhFooterDownload.href = getCurHost() + "down/u1934/" + channel;
    }
    var jHeader = $(".Header");
    var jMain = $(".main");
    var jBottom = $("#yyh-bottom");
    addHeadBanner();
    $(window).blur(function () {
        openApp = 1;
    });

    $(window).resize(function () {
        AdjustElement();
        ChangePiclist("resize");
    });

    //内容页标题收缩
    $(".App_SpreadTitle").click(function () {
        var con = $(this).siblings(".App_SpreadContent");
        var icon = $(this).children(".icon");
        if (con.css('display') != 'none') {
            icon.addClass('close');
            con.hide();
        } else {
            icon.removeClass('close');
            con.show();
        }
    });

    //应用详情展开
    $(".App_Introduce > div").click(function () {
        $(".App_Introduce > div").css("display", "none");
        $(".App_Introduce span").css("max-height", "");
        $(".App_Introduce span").css("height", "auto");
    });

    //应用展开
    $(".App_Update > div").click(function () {
        $(".App_Update > div").css("display", "none");
        $(".App_Update span").css("max-height", "");
        $(".App_Update span").css("height", "auto");
    });


    $(".Banner_State").mouseenter(function () {
        clearInterval(changeAdverID);
        now_Banner = $(this).index();
        ChangePiclist("mouse");
        changeAdverID = setInterval("ChangePiclist()", 3000);

    });

    $(window).bind("scroll", function () {
        var scrollTop = $(document).scrollTop();
        var windowHeight = $(window).height();

        try {
            debounce(function () {
                if (jBottom.length === 0) {
                    return;
                }
                if (jBottom[0].style.display === "none") {
                    return;
                }
                sticky(scrollTop)
            }, undefined, 50, 100);
        } catch (err) {
        }
        // 判断窗口的滚动条是否接近页面底部
        if (scrollTop + windowHeight > $(document).height() - 60) {
            debounce(load_more, show_loading, 300);
        }
    });


    try {
        if (window.performance) {
            //console.log(performance.navigation.type);
            //Navigation through a history traversal operation.
            if (performance.navigation.type == 2) {
                if (history.state) {
                    if (history.state.lists) {
                        //console.log(history.state.list_con);
                        //$(".lists").html(history.state.lists);
                        $(".list_con").empty();
                        for (var i = 0; i < history.state.lists.length; i++) {
                            $(".list_con").append(history.state.lists[i]);
                        }
                    }
                    if (history.state.y) {
                        //alert("return back, scroolTo y = " + history.state.y);
                        window.scrollTo(0, history.state.y);
                    }
                    if (history.state.next_page) {
                        $(".get_more a")[0].setAttribute("value", history.state.next_page);
                    } else {
                        $(".get_more a")[0].removeAttribute("value");
                    }
                }
            }
        }
    } catch (err) {
    }
    bindA();

    function sticky(scrollTop) {
        if (jHeader.length === 0 || jMain.length === 0) return;
        if (checkStickySupport) {
            if (isFixed) {
                return;
            }
            jHeader.addClass("sticky_head");
            isFixed = true;
        }
        if (isFixed && scrollTop <= 56) {
            jHeader.removeClass("fix_head");
            jMain.css("top", "")
            isFixed = false;
        } else if (!isFixed && scrollTop >= 56) {
            jHeader.addClass("fix_head");
            jMain.css("top", 85)
            isFixed = true;
        }
    }

    function addHeadBanner() {
        try {
            if (jHeader.length === 0 || jBottom === 0 || jMain.length === 0) return;
            if (checkStickySupport) {
                jHeader.addClass("sticky_head");
            } else {
                jHeader.addClass("fix_head");
            }
        } catch (err) {
        }
    }
});

function getId() {
    $.ajax({
        type: "get",
        url: "/ajax/id.json",
        cache: false,
        dataType: "json",
        success: function (data) {
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


function bindA() {
    $(document).on("click", "ul.list_con > li a", function (event) {
        // alert( "clicked on 'Y=.'" + window.scrollY );
        var lists = [];
        var list_con = $(".list_con")[0];
        for (var i = 0; i < list_con.children.length; i++) {
            var li = list_con.children[i];
            lists.push(li.outerHTML.replace(/\s+/g, ' '));
        }
        var next_page = null;
        if ($(".get_more a")[0]) {
            next_page = $(".get_more a")[0].getAttribute("value");
        }
        state = {
            "y": window.scrollY,
            "lists": lists,
            "next_page": next_page
        };
        history.replaceState(state, document.title, location.pathname);
    });
}

function cnzz(downloadMod, AB, packageName) {

    var channel = readCookie("yyhchannel");
    var sign = "";
    if (channel && downloadMod == "统计高速下载") {
        sign = "商务推广"
    }
    _czc.push(['_trackEvent', 'Details', downloadMod, AB + sign, '', '']);

    if (!channel && packageName) {
        _czc.push(['_trackEvent', 'Details', downloadMod, AB + ':' + packageName, '', '']);
    }
}

function b_down() {
    if ($(".app-down-btn").hasClass("unchecked")) {
        $(".app-down-btn").removeClass("unchecked");
        document.getElementById("b-gs").style.display = "block";
        document.getElementById("b-pb").style.display = "none";
        document.getElementById("b-tgs").style.display = "block";
        document.getElementById("b-tpb").style.display = "none";

    } else {
        $(".app-down-btn").addClass("unchecked");
        document.getElementById("b-gs").style.display = "none";
        document.getElementById("b-pb").style.display = "block";
        document.getElementById("b-tgs").style.display = "none";
        document.getElementById("b-tpb").style.display = "block";

    }
}

function pre_p() {
    if ($(".none-op").hasClass("unchecked")) {
        $(".none-op").removeClass("unchecked");
        document.getElementById("qidai").style.display = "block";
        document.getElementById("qidai-n").style.display = "none";

    } else {
        $(".none-op").addClass("unchecked");
        document.getElementById("qidai").style.display = "none";
        document.getElementById("qidai-n").style.display = "block";

    }
}


//设置cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/"
}

//清除cookie
function delCookie(name) {
    setCookie(name, "", -1);
}


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


var checkStickySupport = (function () {
    var div = null;
    if (window.CSS && window.CSS.supports) {
        return window.CSS.supports("(position: sticky) or (position: -webkit-sticky)");
    }
    div = document.createElement("div");
    div.style.position = "sticky";
    if ("sticky" === div.style.position) {
        return true;
    }
    div.style.position = "-webkit-sticky";
    if ("-webkit-sticky" === div.style.position) {
        return true;
    }
    div = null;
    return false;
})();

var nextFrame = (function (fn) {
    var prefix = ["ms", "moz", "webkit", "o"];
    var handle = {};
    handle.requestAnimationFrame = window.requestAnimationFrame;
    for (var i = 0; i < prefix.length && !handle.requestAnimationFrame; ++i) {
        handle.requestAnimationFrame = window[prefix[i] + "RequestAnimationFrame"];
    }
    if (!handle.requestAnimationFrame) {
        handle.requestAnimationFrame = function (fn) {
            var raf = window.setTimeout(function () {
                fn();
            }, 16);
            return raf;
        };
    }
    return function (fn) {
        handle.requestAnimationFrame.apply(window, arguments);
    }
})();

/**
 * 防抖动函数
 * @param func 需要延迟执行的函数
 * @param wait 延迟的时间
 * @param immediate_func 在延迟执行的函数之前需要立即执行的函数，即before
 * @param mustRunDelay 必须在多久执行一次
 * @returns {Function}
 */
var debounce = (function () {
    // 定时器变量
    var timeout;
    var lastTime;
    return function (func, immediate_func, timeWait, mustRunDelay) {
        try {
            var now = +new Date();
            var args = arguments;
            // 每次触发 scroll handler 时先清除定时器
            clearTimeout(timeout);
            if (immediate_func) immediate_func.apply();
            if (mustRunDelay
                && mustRunDelay > 0
                && now - lastTime > mustRunDelay) {
                func.apply(this, args);
                lastTime = now;
            } else {
                // 指定 xx ms 后触发真正想进行的操作 handler
                timeout = setTimeout(func, timeWait);
            }
        } catch (err) {
        }
    }
})();


//$('.get_more a').click(function(){
function load_more() {
    //var obj = $(this);
    var obj = $('.get_more a');
    var reqUrl = obj.attr('value');
    if (reqUrl == undefined || reqUrl == null || reqUrl == "") {
        return;
    }
    $.getJSON(reqUrl, function (data) {
        var type = obj.parent().attr('value');
        //无结果
        if (data == null || data == '') {
            obj.parent().remove();
            return;
        }
        //没有下一页隐藏
        if (data.nextPage == null || data.nextPage == '') {
            obj.parent().remove();
        } else {
            obj.attr('value', data.nextPage);
        }

        if (type == 'app') {
            html = renderMoreApp(data);
        } else if (type == 'appset') {
            html = renderMoreAppset(data);
        } else if (type == 'appsetItem') {
            html = renderMoreAppsetItem(data);
        } else if (type == 'column') {
            html = renderMoreColumn(data);
        } else if (type == 'comment') {
            html = renderMoreComment(data);
        } else if (type == 'article') {
            html = renderMoreArticle(data);
        } else if (type == 'infoFlow') {
            html = renderMoreInfoFlow(data);
        }
        $('.list_con').append(html);
        obj.css('display', 'block');
        $('.get_more div').hide();
        // $('.get_more').hide();
        // seo的人说不能有display:none
        $('.get_more').addClass("more_hide").removeClass("more_show");
        if (type == 'app') {
            AdjustElement();
        }

    });
}


function show_loading() {
    $('.get_more div').show();
    $('.get_more a').hide();
    // $('.get_more').show();
    // seo的人说不能有display:none
    $('.get_more').removeClass("more_hide").addClass("more_show");
}


//这些浏览器不支持，直接下载
function checkBrowser() {
    var ua = navigator.userAgent;
    return (/Opera|360browser/gi.test(ua));
}

function inWeChat() {
    if ((/MicroMessenger/gi.test(navigator.userAgent))) {
        var div = document.createElement("div");
        div.setAttribute("class", "weixin-pop");
        div.setAttribute("style", "display: block;");
        div.innerHTML = "<div class='weixin-pop-con'><img src='http://static.yingyonghui.com/resource/msite/static/images/wc-arr.png' /><span>微信中不能下载，请在右上角选择“在浏览器中打开”后再试 </span><a onclick='closeWeChatPop()'>知道了</a></div>";
        document.body.appendChild(div);
        return true;
    }
    return false;
}


function closeWeChatPop() {
    $(".weixin-pop").remove();
}

//有些渠道在webview里调用，不能检查是否安装应用汇，否则会下载失败
function checkChannel(channel) {
    var chns = ['ac.union.m_yunzhongshuba'];
    for (var i in chns) {
        if (channel == chns[i]) {
            return true;
        }
    }
    return false;
}

function search() {
    var val = $('#keyword').val();//.replace(/\s/g, '');
    if (val != '') {
        val = encodeURIComponent(val.trim());
        location.href = '/search?keyword=' + val;
    }
    return false;
}

function AdjustAppIntroduce(adjustBox) {
    adjustBox.children("span").css("height", "auto");
    var height = adjustBox.children("span").height();

    if (height > 100) {
        adjustBox.children("span").height(100);
        adjustBox.children("span").css("overflow", "hidden");
        adjustBox.children("div").css("display", "block");
    } else {
        adjustBox.children("div").css("display", "none");
    }
}

function AdjustPiclist() {
    var width = document.body.clientWidth;
    var count = $(".Piclist_Box img").length;

    $(".Piclist_Box").width(width * count);
    $(".Piclist_Box img").width(width);

    var height = width / 600 * 280;
    $(".Piclist_Box img").height(height);
    $(".Piclist_Box").height(height);
    $(".Piclist").height(height);
}

function AdjustElement() {
    AdjustPiclist();
    AdjustAppIntroduce($(".App_Introduce"));
    AdjustAppIntroduce($(".App_Update"));
}

function ChangePiclist(mode) {
    var width = document.body.clientWidth;
    if ($(".Piclist_Box").length === 0) return;

    $(".Piclist_Box").animate({left: 0 - now_Banner * width}, 500);
    $(".Banner_State").css("opacity", "0.4");
    $(".Banner_State").eq(now_Banner).css("opacity", "1");

    if (mode == undefined) {
        ++now_Banner;
        now_Banner %= $(".Piclist_Box img").length;
    }
}

function renderMoreArticle(data) {
    var vars = ['title', 'id', 'sign', 'quotation', 'imgUrlBanner', 'pubTime'];
    var html = '';
    for (var k in data.list) {
        var row = data.list[k];
        var rowHtml = '<li class="article_list"><a href="/article_detail/{sign}"><div class="article_banner"><div class="article_banner_div"> ' +
            '<img src="{imgUrlBanner}" alt="{title}"/> </div> </div> <div class="article_stack"> <div class="article_content"> ' +
            '<span class="article_content_title">{title}</span> </div><div class="article_content_date_link">' +
            '<span class="article_content_date">{pubTime}</span></div>' +
            '<p class="article_content_quotation">{quotation}</p> </div> </a> </li>';
        for (var i = 0; i < vars.length; i++) {
            if (row[vars[i]] == null) {
                row[vars[i]] = '';
            }
            var regExp = new RegExp('{' + vars[i] + '}', 'ig');
            rowHtml = rowHtml.replace(regExp, row[vars[i]]);
        }
        html += rowHtml;
    }
    return html;
}

function renderMoreInfoFlow(data) {
    var vars = ['postsId', 'type', 'url', 'title', 'nickName', 'profileImageUrl', 'articleId', 'upCount'];
    var html = '';
    for (var k in data.list) {
        var row = data.list[k];
        var rowHtml = '<li><div>';
        if (row['type'] === 'Article') {
            rowHtml += '<a href="/column_articles/{articleId}">';
        } else {
            rowHtml += '<a href="/community/flow/detail/{postsId}">';
        }
        rowHtml += '<img src="{url}" alt="{title}" class="posts-img"/>';
        rowHtml += '<p class="div-ellipsis ellipses_2">{title}</p>';
        rowHtml += '<div class="user-info-box">';
        rowHtml += '<div class="user-info">';
        rowHtml += '<img src="{profileImageUrl}" alt="{nickName}" class="user-img"/>';
        rowHtml += '<p class="div-ellipsis">{nickName}</p>';
        rowHtml += '</div>';
        rowHtml += '<div class="like-count">';
        rowHtml += '<img src="/images/icon_03.png" alt="喜欢"/>';
        rowHtml += '<p>{upCount}</p>';

        rowHtml += '</div> \ </div> \ </a> \ </div> \ </li>';
        for (var i = 0; i < vars.length; i++) {
            if (row[vars[i]] == null) {
                row[vars[i]] = '';
            }
            var regExp = new RegExp('{' + vars[i] + '}', 'ig');
            rowHtml = rowHtml.replace(regExp, row[vars[i]]);
        }
        html += rowHtml;
    }
    return html;
}

function renderMoreApp(data) {
    var vars = ['packageName', 'name', 'iconUrl', 'size', 'likePercentage', 'shortDesc', 'apkUrl', 'title', 'appId', 'id', 'publishTime', 'showOptProps', 'offShelf', 'prePublish'];
    var html = '';
    for (var k in data.list) {
        var row = data.list[k];

        var rowHtml = '<li class="app-list-con"><a href="/app/{packageName}"><img alt="{name}" title="{name}" class="app-list-img" src="{iconUrl}" /></a>';

        if (row['showOptProps']) {
            rowHtml += '<a href="/app/{packageName}"><img class="Content_Label" src="{showOptProps}" /></a>'
        }

        rowHtml += '<div class="app-list-details"> \
        				<div class="app-list-name"><h2><a href="/app/{packageName}">{name}</a></h2></div> \
                    	<div class="app-list-des"><h3>{name}</h3></div>';
        if (!row['offShelf']) {
            rowHtml += '<div class="app-list-info"> \
                    	<div >{size}</div> \
                        <div >{likePercentage}</div> \
                    </div>';
        }
        rowHtml += '</div>';
        if (row['prePublish'] == 'false' && row['offShelf']) {
            rowHtml += '<div class="app-list-download" data-close="true"> \
                		<a class="detail" href="/app/{packageName}">详情</a> \
                		</div>\
                </li>';
        }

        if (row['prePublish'] == 'true') {
            rowHtml += '<div class="app-list-download" data-close="true"> \
                		<a href="/app/{packageName}">敬请期待</a> \
                		</div>\
                </li>';
        }

        if (!row['offShelf'] && row['prePublish'] == 'false') {
            rowHtml += '<div class="app-list-download"> \
                		<a href="/app/{packageName}">下载</a> \
                		</div>\
                </li>';
        }

        for (var i = 0; i < vars.length; i++) {
            if (row[vars[i]] == null) {
                row[vars[i]] = '';
            }
            var regExp = new RegExp('{' + vars[i] + '}', 'ig');
            rowHtml = rowHtml.replace(regExp, row[vars[i]]);
        }

        html += rowHtml;
    }
    return html
}

function renderMoreAppset(data) {
    var vars = ['id', 'icon0', 'icon1', 'icon2', 'size', 'name', 'nickName', 'favoritesCount', 'viewCount', 'time'];
    var html = '';
    for (var k in data.list) {
        var row = data.list[k];

        var rowHtml = '<li class="Application_content"> \
    			<div class="Application_img_set"> ';
        rowHtml += '<a href="/appset/detail/{id}"> \
			    		<img class="bigger" src="{icon2}" /> \
        				</a>';
        rowHtml += '<a href="/appset/detail/{id}"> \
    		    		<img class="middle" src="{icon1}" /> \
           				</a>';
        rowHtml += '<a href="/appset/detail/{id}"> \
    		    		<img class="small" src="{icon0}" /> \
         				</a> \
        		</div>';
        rowHtml += '<a href="/appset/detail/{id}"> \
					<div class="Application_app"> \
						<div class="Application_app_tit">{name}</div> \
						<div class="Application_app_user">{nickName}</div> \
						<div class="Application_app_oth"> \
	              			<span><img src="http://static.yingyonghui.com/resource/msite/static/images/chakan.png" >{viewCount}</span> \
							<span><img src="http://static.yingyonghui.com/resource/msite/static/images/shoucang.png" >{favoritesCount}</span> \
							<span>{time}</span> \
						</div> \
					</div> \
					</a> \
				</li>';

        for (var i = 0; i < vars.length; i++) {
            if (row[vars[i]] == null) {
                row[vars[i]] = '';
            }
            var regExp = new RegExp('{' + vars[i] + '}', 'ig');
            rowHtml = rowHtml.replace(regExp, row[vars[i]]);
        }

        html += rowHtml;
    }
    return html
}

function renderMoreAppsetItem(data) {
    var vars = ['packageName', 'name', 'iconUrl', 'itemDescription', 'apkUrl', 'closeDownload', 'closeDownloadTips'];
    var html = '';
    for (var k in data.list) {
        var row = data.list[k];
        var rowHtml = '<li class="app-list-con"> \
                <a href="/app/{packageName}"> \
        			<img class="app-list-img" src="{iconUrl}" alt="{name}" /></a> \
                <div class="app-list-details"> \
                    <div class="app-list-name"> \
                        <h2><a href="/app/{packageName}">{name}</a></h2> \
                    </div> \
        		<input class="packageName" type="hidden" value="{packageName}" />';

        rowHtml += '<div class="app-list-des">';
        if (row['itemDescription'] != '') {
            rowHtml += '<h3><span class="jizhu">集主说</span><span>{itemDescription}</span></h3>'
        }
        rowHtml += '</div> \
                </div> \
        		</li>';
        for (var i = 0; i < vars.length; i++) {
            if (row[vars[i]] == null) {
                row[vars[i]] = '';
            }
            var regExp = new RegExp('{' + vars[i] + '}', 'ig');
            rowHtml = rowHtml.replace(regExp, row[vars[i]]);
        }

        html += rowHtml;
    }
    return html
}

function renderMoreColumn(data) {
    var vars = ['id', 'banner_img_url', 'type', 'title', 'quotation', 'view_count', 'author_head_url', 'author_name', "date"];
    var html = '';
    for (var k in data.list) {
        var row = data.list[k];
        var rowHtml;
        var title = row['quotation'] != null && row['quotation'] != "" ? "{title}:{quotation}" : "{title}";
        if (row["list_style"] == 1) {
            rowHtml = '<li class="s_column_list"><a href="/column_articles/{id}"><div class="s_column_banner" style="background: url({banner_img_url});background-size: cover;"><div class="s_column_banner_bg"> <div class="s_column_banner_line s_column_width60"></div> <div class="s_column_banner_title">' + title + '</div> <div class="s_column_banner_ll"> <span class="s_column_banner_line s_column_width15"></span> <span class="s_column_banner_emp">浏览<em class="emp">{view_count}</em></span> <span class="s_column_banner_line s_column_width15"></span></div> </div></div></a></li>';
        } else {
            rowHtml = '<li class="s_column_list"> \
                        <a href="/column_articles/{id}"> \
	         	<img class="s_column_img" src="{banner_img_url}" alt="{type}：{title}" /> \
                <div class="s_column_text"> \
                <h3 class="s_column_h3">' + title + '</h3> \
                <p class="s_column_name"> \
                    <span><img alt="" src="{author_head_url}" /></span> \
                    <span>{author_name}</span> \
                </p> \
                <p class="s_column_time"> \
                    <em class="eml">|</em> \
                    <span>浏览<em class="emp">{view_count}</em>人</span> \
                </p> \
                </div> \
                </a> \
                </li>';
        }
        for (var i = 0; i < vars.length; i++) {
            if (row[vars[i]] == null) {
                row[vars[i]] = '';
            }
            var regExp = new RegExp('{' + vars[i] + '}', 'ig');
            rowHtml = rowHtml.replace(regExp, row[vars[i]]);
        }

        html += rowHtml;
    }
    return html;
}

function renderMoreComment(data) {
    var vars = ['nickName', 'commentContent', 'lastReplyTime'];
    var html = '';
    for (var k in data.list) {
        var row = data.list[k];
        var rowHtml = '<li> \
                <table> \
        		<tr> \
                	<td class="commentNickName">{nickName}</td> \
                	<td>{lastReplyTime}</td> \
        		</tr> \
        		<tr> \
                	<td colspan="2" class="commentContent">{commentContent}</td> \
        		</tr> \
        		</table> \
        		</li>';
        for (var i = 0; i < vars.length; i++) {
            if (row[vars[i]] == null) {
                row[vars[i]] = '';
            }
            var regExp = new RegExp('{' + vars[i] + '}', 'ig');
            rowHtml = rowHtml.replace(regExp, row[vars[i]]);
        }

        html += rowHtml;
    }
    return html;
}



