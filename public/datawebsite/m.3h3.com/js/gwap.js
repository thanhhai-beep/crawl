var wapDomain = "/";
var apiDomain = window.location.protocol+'//'+window.location.hostname.replace(/^m\./, 'api.')+'/';
var host = "http://www.3h3.com";
var num = 2;
var nopic = wapDomain + "skin/logo.gif";
var UPLOAD_PATH = "//pic.3h3.com/upload/";
var isNull = false; //是否空数据判断

jQuery(document).ready(function ($) {
    var range = 50;             //距下边界长度/单位px  
    var elemt = 500;           //插入元素高度/单位px  
    var maxnum = 100000;            //设置加载最多次数  

    var totalheight = 0;
    var main = $("#main");                     //主体元素  
    var proul = $(".pro-ul");
    $(window).scroll(function () {
        var srollPos = $(window).scrollTop();    //滚动条距顶部距离(页面超出窗口的高度)  

        totalheight = parseFloat($(window).height()) + parseFloat(srollPos);
        if (($(document).height() - range) <= totalheight && num != maxnum) {
            //getZixun();
        }
    });

    $(".more-ico").parent().click(function () {
        getZixun(); //资讯
        getGonglue(); //攻略
        getVideo(); //视频
        getGame(); //游戏
        getZhuanti(); //专题
        getSearch(); //搜索
        getGjcList(); //关键词列表
		getAzGame(); //安卓游戏
		getAzNews(); //安卓资讯
		getTags(); //标签
    });
    //getZixun(); //资讯
    //getGonglue(); //攻略
    //getVideo(); //攻略
    //getGame(); //游戏
    //getZhuanti(); //专题
    //getSearch(); //搜索
    //getGjcList(); //关键词列表
    getTuiguang(); //获取推广

    /**安卓**/
    if (location.href.indexOf("news") > -1 || location.href.indexOf("info") > -1 || location.href.indexOf("gl") > -1 || location.href.indexOf("video") > -1) { //资讯时
        $('.snav ul').html($('.main .tabs-ul').html());
        $('.snav ul li').each(function (i) {
            if (location.href.indexOf($(this).attr('val')) > -1) {
                $(this).addClass('on');
            }
        });
        $('.snav').css('background', 'white');
        $('.main .tabs-ul').remove();
        $('.main').css('margin-top', '-10px');
    }
});

function getZixun() {
    var p = num;
    if (typeof (ptype) != "undefined" && (typeof (action) == "undefined") && isNull == false && (ptype == '0' || ptype == '1' || ptype == '2' || ptype == '3' || ptype == '4')) {//资讯网游列表加载
        $.ajax({
            url: apiDomain + 'index.php?m=wap&c=wap_ajax&a=getZixun&ptype=' + ptype + '&page=' + p,
            async: false,
            beforeSend: function (XMLHttpRequest) {
                $(".load-btn").css("display", "block");
            },
            complete: function (XMLHttpRequest, textStatus) {
                $(".load-btn").css("display", "none");
            },
            dataType: 'json',
            success: function (data) {
                var sb = "";
                $.each(data, function (idx, d) {
                    var img = d.thumb;
                    var url = d.url.replace(host,"");
                    if (img == "") { img = nopic; }
                    sb = sb + "<li>";
                    sb = sb + "						<div class=\"pic\"><a href=\"" + url + "\"><img src=\"" + img + "\" alt=\"" + d.title + "\"></a></div>";
                    sb = sb + "						<div class=\"con\">";
                    sb = sb + "							<h4><a href=\"" + url + "\">" + d.title + "</a></h4>";
                    sb = sb + "							<p>" + d.description + "</p>";
                    sb = sb + "						</div>";
                    sb = sb + "					</li>";
                });
                $(".new-ul").append(sb);
                num++;
                //setTimeout(jiazaiwan(), 3000);
                if (sb == "") { $(".more-ico").text("已经全部加载完"); isNull = true; } else { getTuiguangs((p * 10), (p-1) * 10); }
            }
        });
    } //else
}


function getGonglue() {
    var p = num;
    if (typeof (ptype) != "undefined" && (typeof (action) == "undefined") && isNull == false && (ptype == '10' || ptype == '11' || ptype == '12' || ptype == '13')) {//攻略列表加载
        $.ajax({
            url: apiDomain + 'index.php?m=wap&c=wap_ajax&a=getZixun&ptype=' + ptype + '&page=' + p,
            async: false,
            beforeSend: function (XMLHttpRequest) {
                $(".load-btn").css("display", "block");
            },
            complete: function (XMLHttpRequest, textStatus) {
                $(".load-btn").css("display", "none");
            },
            dataType: 'json',
            success: function (data) {
                var sb = "";
                $.each(data, function (idx, d) {
                    var img = d.thumb;
                    var url = d.url.replace(host,"");
                    if (img == "") { img = nopic; }
                    sb = sb + "<li>";
                    sb = sb + "						<div class=\"pic\"><a href=\"" + url + "\"><img src=\"" + img + "\" alt=\"" + d.title + "\"></a></div>";
                    sb = sb + "						<div class=\"con\">";
                    sb = sb + "							<h4><a href=\"" + url + "\">" + d.title + "</a></h4>";
                    sb = sb + "							<p>" + d.description + "</p>";
                    sb = sb + "						</div>";
                    sb = sb + "					</li>";
                });
                $(".new-ul").append(sb);
                num++;
                //setTimeout(jiazaiwan(), 3000);
                if (sb == "") { $(".more-ico").text("已经全部加载完"); isNull = true; } else { getTuiguangs((p * 10), (p - 1) * 10); }
            }
        });
    } //else
}


function getVideo() {
    var p = num;
    if (typeof (ptype) != "undefined" && (typeof (action) == "undefined") && isNull == false && (ptype == '20' || ptype == '21' || ptype == '22' || ptype == '23')) {//视频列表加载
        $.ajax({
            url: apiDomain + 'index.php?m=wap&c=wap_ajax&a=getZixun&ptype=' + ptype + '&page=' + p,
            async: false,
            beforeSend: function (XMLHttpRequest) {
                $(".load-btn").css("display", "block");
            },
            complete: function (XMLHttpRequest, textStatus) {
                $(".load-btn").css("display", "none");
            },
            dataType: 'json',
            success: function (data) {
                var sb = "";
                $.each(data, function (idx, d) {
                    var img = d.thumb;
                    var url = d.url.replace(host,"");
                    if (img == "") { img = nopic; }
                    sb = sb + "<li>";
                    sb = sb + "						<div class=\"pic\"><a href=\"" + url + "\"><img src=\"" + img + "\" alt=\"" + d.title + "\"></a></div>";
                    sb = sb + "						<div class=\"con\">";
                    sb = sb + "							<h4><a href=\"" + url + "\">" + d.title + "</a></h4>";
                    sb = sb + "							<p>" + d.description + "</p>";
                    sb = sb + "						</div>";
                    sb = sb + "					</li>";
                });
                $(".new-ul").append(sb);
                num++;
                //setTimeout(jiazaiwan(), 3000);
                if (sb == "") { $(".more-ico").text("已经全部加载完"); isNull = true; } else { getTuiguangs((p * 10), (p - 1) * 10); }
            }
        });
    } //else
}

function getAzGame() {
    var p = num;
if (typeof (action) != "undefined" &&  (action=="az_game" || action=="az_soft")) {//安卓游戏列表加载
        var uurl = apiDomain + 'index.php?m=wap&c=wap_ajax&a=getJsonAzGm&catid='+catid+'&ptype=' + ptype + '&gametype='+gametype+'&page=' + p;
        if (action == 4) {
            uurl += '&keywords=' + keywords + '&games=' + games;
        }
        $.ajax({
            url: uurl,
            async: false,
            beforeSend: function (XMLHttpRequest) {
                $(".load-btn").css("display", "block");
            },
            complete: function (XMLHttpRequest, textStatus) {
                $(".load-btn").css("display", "none");
            },
            dataType: 'json',
            success: function (data) {
                var sb = "";
                $.each(data, function (idx, d) {
                    var img = d.softPic;
                    var url = d.url.replace(host,"");
                    if (img == "") { img = nopic; }
                    sb = sb + "<li>";
                    if(ptype == 4)sb = sb + "<div class='num'>"+((p-1)*10+(idx+1))+"</div>";
                    sb = sb + "						<div class=\"pic\"><a href=\"" + url + "\"><img src=\"" + img + "\" alt=\"" + d.title + "\"></a></div>";
                    sb = sb + "						<div class=\"btn\">";
                    sb = sb + "							<a href='" + url + "' class='download-btn' style='background: unset;'><em class='green-download-btn'></em>" + d.btn + "</a>";
                    sb = sb + "						</div>";
                    sb = sb + "						<div class=\"txt\">";
                    sb = sb + "						<h4><a href='" + url + "'>" + d.title + "</a></h4><div class=\"stars\" rel='" + d.stars + "'><ul class=\"star-ul\"><li class=\"on\"></li><li class=\"on\"></li><li class=\"on\"></li></ul><input type=\"hidden\" value='" + d.stars + "'></div><div class=\"info\"><span>" + d.catname + "| " + d.filesize + "</span></div>";
                    sb = sb + "						</div>";
                    sb = sb + "					</li>";
                });
                $(".pro-ul").append(sb);
                num++;
                $('.stars').each(function () {
                    var totalscore = $(this).attr('rel');
                    if ($(this).find('.star-ul').html() == '') {
                        for (var i = 0; i < totalscore; i++) {
                            $(this).find('.star-ul').append('<li></li>');
                        };
                        var score = $(this).find('input').val();
                        $(this).find('.star-ul > li:lt(' + score + ')').addClass('on');
                    }
                });
                if (sb == "") { $(".more-ico").text("已经全部加载完"); isNull = true; }
            }
        });
    }
}

function getTags(){
    var p = num;
    if (typeof (action) != "undefined" &&  (action=="tags")) {//tags列表加载
        var uurl = apiDomain + 'index.php?m=wap&c=wap_ajax&a=getTagSoft&modelid='+2+'&tag=' + $('.tagsk').text() + '&page=' + p;
        $.ajax({
            url: uurl,
            async: false,
            beforeSend: function (XMLHttpRequest) {
                $(".load-btn").css("display", "block");
            },
            complete: function (XMLHttpRequest, textStatus) {
                $(".load-btn").css("display", "none");
            },
            dataType: 'json',
            success: function (data) {
                var sb = "";
                $.each(data, function (idx, d) {
                    var img = d.softPic;
                    var url = d.url.replace(host,"");
                    if (img == "") { img = nopic; }
                    sb = sb + "<li>";
                    if(ptype == 4)sb = sb + "<div class='num'>"+((p-1)*10+(idx+1))+"</div>";
                    sb = sb + "						<div class=\"pic\"><a href=\"" + url + "\"><img src=\"" + img + "\" alt=\"" + d.title + "\"></a></div>";
                    sb = sb + "						<div class=\"btn\">";
                    sb = sb + "							<a href='" + url + "' class='download-btn' style='background: unset;'><em class='green-download-btn'></em>" + d.btn + "</a>";
                    sb = sb + "						</div>";
                    sb = sb + "						<div class=\"txt\">";
                    sb = sb + "						<h4><a href='" + url + "'>" + d.title + "</a></h4><div class=\"stars\" rel='" + d.stars + "'><ul class=\"star-ul\"><li class=\"on\"></li><li class=\"on\"></li><li class=\"on\"></li></ul><input type=\"hidden\" value='" + d.stars + "'></div><div class=\"info\"><span>" + d.catname + "| " + d.filesize + "</span></div>";
                    sb = sb + "						</div>";
                    sb = sb + "					</li>";
                });
                $(".pro-ul").append(sb);
                num++;
                $('.stars').each(function () {
                    var totalscore = $(this).attr('rel');
                    if ($(this).find('.star-ul').html() == '') {
                        for (var i = 0; i < totalscore; i++) {
                            $(this).find('.star-ul').append('<li></li>');
                        };
                        var score = $(this).find('input').val();
                        $(this).find('.star-ul > li:lt(' + score + ')').addClass('on');
                    }
                });
                if (sb == "") { $(".more-ico").text("已经全部加载完"); isNull = true; }
            }
        });
    }
}

function getAzNews() {//安卓资讯
    var p = num;
    if (typeof (action) != "undefined" &&  action=="az_news") {//安卓资讯列表加载
		
        var uurl = apiDomain + 'index.php?m=wap&c=wap_ajax&a=getJsonAzZx&catid='+catid+'&ptype=' + ptype + '&page=' + p;
        if (action == 4) {
            uurl = apiDomain + 'index.php?m=wap&c=wap_ajax&a=getJsonAzZx&catid='+catid+'&ptype=' + ptype + '&keywords=' + keywords + '&games=' + games + '&page=' + p;
        }
        $.ajax({
            url: uurl,
            async: false,
            beforeSend: function (XMLHttpRequest) {
                $(".load-btn").css("display", "block");
            },
            complete: function (XMLHttpRequest, textStatus) {
                $(".load-btn").css("display", "none");
            },
            dataType: 'json',
            success: function (result) {
                var data = result.datas;
                var sb = "";
                $.each(data, function (idx, item) {
                    var url = item.url.replace(host,'');
                    var thumb= item.thumb;
                    var title= item.title;
                    var description= item.description;
                    sb = sb + '<li>\n' +
                        '\t\t\t\t\t<div class="pic">\n' +
                        '\t\t\t\t\t\t<a href="'+url+'">\n' +
                        '\t\t\t\t\t\t\t<img src="'+thumb+'" alt="'+title+'">\n' +
                        '\t\t\t\t\t\t</a>\n' +
                        '\t\t\t\t\t</div>\n' +
                        '\t\t\t\t\t<div class="con">\n' +
                        '\t\t\t\t\t\t<h4>\n' +
                        '\t\t\t\t\t\t\t<a href="'+url+'">'+title+'</a>\n' +
                        '\t\t\t\t\t\t</h4>\n' +
                        '\t\t\t\t\t\t<p>'+description+'</p>\n' +
                        '\t\t\t\t\t</div>\n' +
                        '\t\t\t\t</li>';
                });
                $(".new-ul").append(sb);
                num++;
                //setTimeout(jiazaiwan(), 3000);
                if (sb == "") { $(".more-ico").text("已经全部加载完"); isNull = true; } else { getTuiguangs((p * 10), (p - 1) * 10); }
            }
        });
    }
}
function getGame() {
    var p = num;
    if (typeof (ptype) != "undefined" && (typeof (action) != "undefined" && (action == 1 || action == 4)) && isNull == false && ptype!=0) {//游戏列表加载
        var uurl = wapDomain + 'ajax.asp?action=getGame&ptype=' + ptype + '&page=' + p;
        if (action == 4) {
            uurl = wapDomain + 'ajax.asp?action=getGame&ac='+action+'&ptype=' + ptype + '&keywords=' + keywords + '&games=' + games + '&page=' + p;
        }
        $.ajax({
            url: uurl,
            async: false,
            beforeSend: function (XMLHttpRequest) {
                $(".load-btn").css("display", "block");
            },
            complete: function (XMLHttpRequest, textStatus) {
                $(".load-btn").css("display", "none");
            },
            dataType: 'json',
            success: function (data) {
                var sb = "";
                var pi = 1;
                $.each(data, function (idx, item) {
                    item.url = wapDomain + item.url;
                    var img = item.smallimg;
                    var score = item.score;
                    var filesize = item.filesize;
                    var sizedanwei = item.danwei;
                    if (!img) { img = nopic; } else { img = UPLOAD_PATH + img; }
                    if (!score) { score = 0; } else { score = Math.round(score / 2); }
                    if (sizedanwei == "2") { filesize = filesize + "MB"; } else if (sizedanwei == "1") { filesize = filesize + "KB"; } else if (sizedanwei == "3") { filesize = filesize + "GB"; }

                    sb = sb + "<li>";
                    if (ptype == 33) {
                        sb = sb + "<div class=\"num\">" + (10 * (p-1) + pi) +"</div>";
                    }
                    sb = sb + "						<div class=\"pic\"><a href=\"" + item.url + "\"><img src=\"" + img + "\" alt=\"" + item.url + "\"></a></div>";
                    sb = sb + "						<div class=\"btn\">";
                    sb = sb + "							<a href=\"" + item.url + "\" class=\"download-btn\" style='background: unset;'><em class='green-download-btn'></em>详情</a>";
                    sb = sb + "						</div>";
                    sb = sb + "						<div class=\"txt\">";
                    sb = sb + "							<h4><a href=\"" + item.url + "\">" + item.title + "</a></h4>";
                    sb = sb + "							<div class=\"stars\" rel=\"5\"><ul class=\"star-ul\"></ul><input type=\"hidden\" value=\"" + score + "\"></div>";
                    sb = sb + "							<div class=\"info\">";
                    sb = sb + "								<span>" + item.catname + "| " + filesize + "</span>";
                    sb = sb + "							</div>";
                    sb = sb + "						</div>";
                    sb = sb + "					</li>";
                    pi++;
                });
                $(".pro-ul").append(sb);
                num++;
                $('.stars').each(function () {
                    var totalscore = $(this).attr('rel');
                    if ($(this).find('.star-ul').html() == '') {
                        for (var i = 0; i < totalscore; i++) {
                            $(this).find('.star-ul').append('<li></li>');
                        };
                        var score = $(this).find('input').val();
                        $(this).find('.star-ul > li:lt(' + score + ')').addClass('on');
                    }
                });
                if (sb == "") { $(".more-ico").text("已经全部加载完"); isNull = true; }
            }
        });
    }
}

function getZhuanti() {
    var p = num;
    if (typeof (ptype) != "undefined" && (typeof (action) != "undefined" && action == 4) && isNull == false && ptype==0) {//专题列表加载
        $.ajax({
            url: wapDomain + 'ajax.asp?action=getZhuanti&ptype=' + ptype + '&page=' + p,
            async: false,
            beforeSend: function (XMLHttpRequest) {
                $(".load-btn").css("display", "block");
            },
            complete: function (XMLHttpRequest, textStatus) {
                $(".load-btn").css("display", "none");
            },
            dataType: 'json',
            success: function (data) {
                var sb = "";
                $.each(data, function (idx, item) {
                    var img = item.zj_banner;
                    if (img == "") { img = nopic; } else { img = UPLOAD_PATH + img; }
                    sb = sb += "<li><a href=\"/" + item.url + "\"><img src=\"" + img + "\" alt=\"" + item.sub_title + "\"><div class=\"txt\">" + item.sub_title + "</div></a></li>";
                });
                $(".img-ul2").append(sb);
                num++;
                //setTimeout(jiazaiwan(), 3000);
                if (sb == "") { $(".btn1").css("display", "none"); $(".no-more").css("display", "block"); isNull = true; }
            }
        });
    } //else
}

function getSearch() {
    var p = num;
    if (typeof (ptype) != "undefined" && isNull == false && ptype == "search") {//搜索列表加载
        $.ajax({
            url: apiDomain + 'index.php?m=wap&c=index&a=search&isajax=1&ptype=' + cat + '&page=' + p + '&k=' + keyword,
            async: false,
            beforeSend: function (XMLHttpRequest) {
                $(".load-btn").css("display", "block");
            },
            complete: function (XMLHttpRequest, textStatus) {
                $(".load-btn").css("display", "none");
            },
            dataType: 'json',
            success: function (data) {
                if (cat == "0") {
                    var sb = "";
                    var pi = 1;
                    $.each(data.datas, function (idx, item) {
                        item.url = item.url.replace('http://www.3h3.com','');
                        var img = item.softPic;
                        var score = item.stars;
                        var filesize = item.filesize;
                        if (!img) { img = nopic; } else { if(img.indexOf('//')>-1){}else{img = UPLOAD_PATH + img;} }
						sb = sb + "<li>";
                        sb = sb + "						<div class=\"pic\"><a href=\"" + item.url + "\"><img src=\"" + img + "\" alt=\"" + item.url + "\"></a></div>";
                        sb = sb + "						<div class=\"btn\">";
                        sb = sb + "							<a href=\"" + item.url + "\" class=\"download-btn\" style='background: unset;'><em class='green-download-btn'></em>详情</a>";
                        sb = sb + "						</div>";
                        sb = sb + "						<div class=\"txt\">";
                        sb = sb + "							<h4><a href=\"" + item.url + "\">" + item.title + "</a></h4>";
                        sb = sb + "							<div class=\"stars\" rel=\"5\"><ul class=\"star-ul\"></ul><input type=\"hidden\" value=\"" + score + "\"></div>";
                        sb = sb + "							<div class=\"info\">";
                        sb = sb + "								<span>" + item.catname + "| " + filesize + "</span>";
                        sb = sb + "							</div>";
                        sb = sb + "						</div>";
                        sb = sb + "					</li>";
                        pi++;
                    });
                    $(".pro-ul").append(sb);
                    num++;
                    $('.stars').each(function () {
                        var totalscore = $(this).attr('rel');
                        if ($(this).find('.star-ul').html() == '') {
                            for (var i = 0; i < totalscore; i++) {
                                $(this).find('.star-ul').append('<li></li>');
                            };
                            var score = $(this).find('input').val();
                            $(this).find('.star-ul > li:lt(' + score + ')').addClass('on');
                        }
                    });
                } else {
                    $(".pro-ul").addClass("new-ul");
                    $(".pro-ul").removeClass("pro-ul");
                    var sb = "";
                    $.each(data.datas, function (idx, d) {
                        var img = d.thumb;
                        var url = d.url.replace(host,"");
                        if (img == "") { img = nopic; }
                        sb = sb + "<li>";
                        sb = sb + "						<div class=\"pic\"><a href=\"" + url + "\"><img src=\"" + img + "\" alt=\"" + d.title + "\"></a></div>";
                        sb = sb + "						<div class=\"con\">";
                        sb = sb + "							<h4><a href=\"" + url + "\">" + d.title + "</a></h4>";
                        sb = sb + "							<p>" + d.description + "</p>";
                        sb = sb + "						</div>";
                        sb = sb + "					</li>";
                    });
                    $(".new-ul").append(sb);
                    num++;
                }
                if (sb == "") { $(".more-ico").text("已经全部加载完"); isNull = true; }
            }
        });
    } //else
}

function getGjcList() {
    var p = num;
    if (typeof (ptype) != "undefined" && ptype == "gjclist" && isNull == false && ptype != 0) {//关键词列表加载
        var uurl = apiDomain + 'index.php?m=wap&c=wap_ajax&a=getZtShow&ptype=' + ptype + '&id=' + id + '&pagesize=15&page=' + p;
        $.ajax({
            url: uurl,
            async: false,
            beforeSend: function (XMLHttpRequest) {
                $(".load-btn").css("display", "block");
            },
            complete: function (XMLHttpRequest, textStatus) {
                $(".load-btn").css("display", "none");
            },
            dataType: 'json',
            success: function (data) {
                var sb = "";
                var pi = 1;
                $.each(data, function (idx, item) {
                    item.url = item.url.replace('http://www','//m');
                    var img = item.softPic.replace('http:','');
                    var score = item.stars;
                    var filesize = bytesToSize(item.filesize);

                    sb = sb + "<li>";
                    sb = sb + "						<div class=\"pic\"><a href=\"" + item.url + "\"><img src=\"" + img + "\" alt=\"" + item.title + "\"></a></div>";
                    sb = sb + "						<div class=\"btn\">";
                    sb = sb + "							<a href=\"" + item.url + "\" class=\"download-btn\" style='background: unset;'><em class='green-download-btn'></em>详情</a>";
                    sb = sb + "						</div>";
                    sb = sb + "						<div class=\"txt\">";
                    sb = sb + "							<h4><a href=\"" + item.url + "\">" + item.title + "</a></h4>";
                    sb = sb + "							<div class=\"stars\" rel=\"5\"><ul class=\"star-ul\"></ul><input type=\"hidden\" value=\"" + score + "\"></div>";
                    sb = sb + "							<div class=\"info\">";
                    sb = sb + "								<span>" + item.catname + "| " + filesize + "</span>";
                    sb = sb + "							</div>";
                    sb = sb + "						</div>";
                    sb = sb + "					</li>";
                    pi++;
                });
                $(".pro-ul").append(sb);
                num++;
                $('.stars').each(function () {
                    var totalscore = $(this).attr('rel');
                    if ($(this).find('.star-ul').html() == '') {
                        for (var i = 0; i < totalscore; i++) {
                            $(this).find('.star-ul').append('<li></li>');
                        };
                        var score = $(this).find('input').val();
                        $(this).find('.star-ul > li:lt(' + score + ')').addClass('on');
                    }
                });
                if (sb == "") { $(".more-ico").text("已经全部加载完"); isNull = true; }
            }
        });
    }
}

function getTuiguang() {
    if (typeof (tig) != "undefined" && tig == true) {//需要推广的游戏
        getTuiguangs(10, 0);
    }
}
function getTuiguangs(max, min) {
    $.ajax({
        url: apiDomain + 'index.php?m=wap&c=wap_ajax&a=tig&size=10&max=' + max + '&min=' + min,
        async: false,
        dataType: 'json',
        success: function (data) {
            var i = 0;
            $.each(data, function (idx, item) {
                var sb = "";
                if (item.temp_type == '' || item.temp_type == 0) {
                    sb = getMinPicDiv(item);
                } else if (item.temp_type == 1) {
                    sb = getMaxPicDiv(item);
                }
                //var url = wapDomain + "index.php?&a=tig_content&id=" + item.id;
                //if (item.url != "") { url = item.url; }
                //var img = item.thumb;
                //if (!img) { img = nopic; } else { img = img; }
                //sb = sb + "<li>";
                //sb = sb + "						<div class=\"pic\"><a href=\"" + url + "\"><img src=\"" + img + "\" alt=\"" + item.title + "\"></a></div>";
                //sb = sb + "						<div class=\"con\">";
                //sb = sb + "							<h4><a href=\"" + url + "\" style='color:red'>" + item.title + "</a></h4>";
                //sb = sb + "							<p>" + item.description.substring(0, 20) + "..<span class='tgiconspan'><i class='tgicon'></i></span></p>";
                //sb = sb + "						</div>";
                //sb = sb + "					</li>";
                var charuIndex = item.listorder;
                $('#bd .new-ul li').each(function (idx) {
                    if (idx  == charuIndex) {
                        $(this).before(sb);
                    }
                });
            });

        }
    });
}
function getTgUrlAndImg(item) {//获得推广链接和图片
    var array = [];
    var url = wapDomain + "index.php?&a=tig_content&id=" + item.id;
    if (item.url != "") { url = item.url; }
    var img = item.thumb.replace('http:','');
    var maximg = item.picture.replace('http:','');
    if (!img) { img = nopic; } else { img = img; }
    if (!maximg) { maximg = nopic; } else { maximg = maximg; }
    array['img'] = img;
    array['maximg'] = maximg;
    array['url'] = url;
    return array;
}

function getMaxPicDiv(item) {//推广大图div
    var sb = '';
    var array = getTgUrlAndImg(item);
    var img = array['maximg'].replace('http:','');
    var url = array['url'];
    sb = sb + "<li>";
    sb = sb + "						<div><h4 style='height:25px;float:left'><a href=\"" + url + "\" style='color:red'>" + item.title + "</a></h4><i style='height:25px;float:right;margin-top:10px;' class=\"tgicon\"></i></div>";
    sb = sb + "						<div class=\"pic\" style='width:100%;height:100%;'><a href=\"" + url + "\"><img src=\"" + img + "\" alt=\"" + item.title + "\"></a></div>";
    sb = sb + "					</li>";
    return sb;
}
function getMinPicDiv(item) {//推广小图div
    var sb = '';
    var array = getTgUrlAndImg(item);
    var img = array['img'].replace('http:','');
    var url = array['url'];
    sb = sb + "<li>";
    sb = sb + "						<div class=\"pic\"><a href=\"" + url + "\"><img src=\"" + img + "\" alt=\"" + item.title + "\"></a></div>";
    sb = sb + "						<div class=\"con\">";
    sb = sb + "							<h4><a href=\"" + url + "\" style='color:red'>" + item.title + "</a></h4>";
    sb = sb + "							<p>" + item.description.substring(0, 20) + "..<span class='tgiconspan'><i class='tgicon'></i></span></p>";
    sb = sb + "						</div>";
    sb = sb + "					</li>";
    return sb;
}

function bytesToSize(bytes) {
    if (bytes === 0) return '0 B';
    var k = 1024, // or 1024
        sizes = [ 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}