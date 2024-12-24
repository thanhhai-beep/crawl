// var isVirtual = true;
// window.onresize = function () {
//     if (isVirtual) {
//         resizeRoot();
//     }
// };
// $('body').on('focus', '[type="search"]', function () {
//     isVirtual = false;
// });
// $('body').on('blur', '[type="search"]', function () {
//     isVirtual = true;
// });
document.write('<script src="https://static.ali213.net/js/lib/defineShare/index.js"><\/script>');
if (typeof (Swiper) == "undefined") {
    document.write('<script src="//3g.ali213.net/js/lib/swiper-3.4.2.min.js"><\/script>');
}
var ua = navigator.userAgent.toLowerCase();
var isIos = ua.match(/iphone|ipod|ipad/gi);
var isIos9 = isIos && ua.match(/OS\s(\d+)/i)[1] > 8;
if (isIos || isIos9) {
    var phoneos = 'ios';
} else {
    var phoneos = 'android';
}
function searchSwiper() {
    var searchNavSwiper = new Swiper('.search-nav-swiper', {
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true,
        roundLengths: true, //防止文字模糊
    });
}

/*$.get('//3g.ali213.net/searchvalue', function (data) {
    $('.search-container .search-bar .search-input').val(JSON.parse(data).data);
    $('.search-container .search-bar .search-input').attr('placeholder', '');
});*/
if ($('.down-client').length <= 0 && window.location.href.indexOf('/gl/wenda/') < 0) $(".top-game-logo").after('<a class="down-client" href="//www.ali213.net/app/m/"><i></i>下载客户端</a>');
// 搜索
$('.top-more').on('click', function (e) {
    e.stopPropagation();
    if ($('.top-more').hasClass('close-search')) {
        $('.search-container').css('height', 'auto');
        $('.top-more').removeClass('close-search');
        $('.search-container .search-content').hide();
        $('.search-container>.close-search').hide();
        $('.search-container').css('position', 'static');
    } else {
        $('.search-container').css('height', '100%');
        $('.search-container .search-content').show();
        $('.search-container>.close-search').show();
        $('.search-container').css('position', 'fixed');
        searchSwiper();
        $('.top-more').addClass('close-search');
    }
});
$('body').on('click', '.close-search', function () {
    $('.search-container .search-content').hide();
    $('.search-container>.close-search').hide();
    $('.search-container').css('position', 'static');
    $('.top-more').removeClass('close-search');
});
/*$('body').on('change','.search-input',function(){
    var kw=$(this).val();
	if(kw.length>1){
		$.ajax({
			type:"GET",
			url:"/api/autocomplete",
			data:{kw:kw},
			async:false,
			dataType:"json",
			success:function(json){
				if(json.status==1){
					var resultdata=[];
					for(var i=0;i<json.data.length;i++){
						if(kw.length>1 && json.data[i].indexOf(kw)>-1){
							resultdata.push(json.data[i]);
						}
					}
					setTimeout(function(){
						var resultstr='';
						for(var j=0;j<resultdata.length;j++){
							resultstr+='<a href="'+$('.search-bar form').attr('action')+'?keyword='+resultdata[j]+'">'+resultdata[j]+'</a>';
						}
						$('.search-result').html(resultstr);
					},50);
				}
			}
		});
	}else{
		$('.search-result').html('');
	}
});*/
$(function () {
    $(".nav-swiper .swiper-wrapper .swiper-slide").each(function () {
        $(this).children('a').eq(4).after('<a href="https://ali213.fhyx.com/">商城</a>');
    });
    $.ajax({
        type: "GET",
        url: "/api/gethotsearch",
        data: {num: 10},
        async: false,
        dataType: "json",
        success: function (json) {
            if (json.status == 1) {
                var hotsearchstr = '';
                for (var i = 0; i < json.data.length; i++) {
                    hotsearchstr += '<a href="' + $('.search-bar form').attr('action') + '?keyword=' + json.data[i] + '">' + json.data[i] + '</a>';
                }
                $('.hot-search span').after(hotsearchstr);
            }
        }
    });
    $(".footer .to-client").click(function () {
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
    $(".footer .to-top").click(function () {
        $("html,body").animate({scrollTop: 0});
    });
});

function date(format, timestamp) {
    var a, jsdate = ((timestamp) ? new Date(timestamp * 1000) : new Date());
    var pad = function (n, c) {
        if ((n = n + "").length < c) {
            return new Array(++c - n.length).join("0") + n;
        } else {
            return n;
        }
    };
    var txt_weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var txt_ordin = {1: "st", 2: "nd", 3: "rd", 21: "st", 22: "nd", 23: "rd", 31: "st"};
    var txt_months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var f = {

        d: function () {
            return pad(f.j(), 2)
        },
        D: function () {
            return f.l().substr(0, 3)
        },
        j: function () {
            return jsdate.getDate()
        },
        l: function () {
            return txt_weekdays[f.w()]
        },
        N: function () {
            return f.w() + 1
        },
        S: function () {
            return txt_ordin[f.j()] ? txt_ordin[f.j()] : 'th'
        },
        w: function () {
            return jsdate.getDay()
        },
        z: function () {
            return (jsdate - new Date(jsdate.getFullYear() + "/1/1")) / 864e5 >> 0
        },


        W: function () {
            var a = f.z(), b = 364 + f.L() - a;
            var nd2, nd = (new Date(jsdate.getFullYear() + "/1/1").getDay() || 7) - 1;
            if (b <= 2 && ((jsdate.getDay() || 7) - 1) <= 2 - b) {
                return 1;
            } else {
                if (a <= 2 && nd >= 4 && a >= (6 - nd)) {
                    nd2 = new Date(jsdate.getFullYear() - 1 + "/12/31");
                    return date("W", Math.round(nd2.getTime() / 1000));
                } else {
                    return (1 + (nd <= 3 ? ((a + nd) / 7) : (a - (7 - nd)) / 7) >> 0);
                }
            }
        },


        F: function () {
            return txt_months[f.n()]
        },
        m: function () {
            return pad(f.n(), 2)
        },
        M: function () {
            return f.F().substr(0, 3)
        },
        n: function () {
            return jsdate.getMonth() + 1
        },
        t: function () {
            var n;
            if ((n = jsdate.getMonth() + 1) == 2) {
                return 28 + f.L();
            } else {
                if (n & 1 && n < 8 || !(n & 1) && n > 7) {
                    return 31;
                } else {
                    return 30;
                }
            }
        },


        L: function () {
            var y = f.Y();
            return (!(y & 3) && (y % 1e2 || !(y % 4e2))) ? 1 : 0
        },

        Y: function () {
            return jsdate.getFullYear()
        },
        y: function () {
            return (jsdate.getFullYear() + "").slice(2)
        },


        a: function () {
            return jsdate.getHours() > 11 ? "pm" : "am"
        },
        A: function () {
            return f.a().toUpperCase()
        },
        B: function () {

            var off = (jsdate.getTimezoneOffset() + 60) * 60;
            var theSeconds = (jsdate.getHours() * 3600) + (jsdate.getMinutes() * 60) + jsdate.getSeconds() + off;
            var beat = Math.floor(theSeconds / 86.4);
            if (beat > 1000) beat -= 1000;
            if (beat < 0) beat += 1000;
            if ((String(beat)).length == 1) beat = "00" + beat;
            if ((String(beat)).length == 2) beat = "0" + beat;
            return beat;
        },
        g: function () {
            return jsdate.getHours() % 12 || 12
        },
        G: function () {
            return jsdate.getHours()
        },
        h: function () {
            return pad(f.g(), 2)
        },
        H: function () {
            return pad(jsdate.getHours(), 2)
        },
        i: function () {
            return pad(jsdate.getMinutes(), 2)
        },
        s: function () {
            return pad(jsdate.getSeconds(), 2)
        },

        O: function () {
            var t = pad(Math.abs(jsdate.getTimezoneOffset() / 60 * 100), 4);
            if (jsdate.getTimezoneOffset() > 0) t = "-" + t; else t = "+" + t;
            return t;
        },
        P: function () {
            var O = f.O();
            return (O.substr(0, 3) + ":" + O.substr(3, 2))
        },

        c: function () {
            return f.Y() + "-" + f.m() + "-" + f.d() + "T" + f.h() + ":" + f.i() + ":" + f.s() + f.P()
        },

        U: function () {
            return Math.round(jsdate.getTime() / 1000)
        }
    };

    return format.replace(/[\ ]?([a-zA-Z])/g, function (t, s) {
        if (t != s) {

            ret = s;
        } else if (f[s]) {

            ret = f[s]();
        } else {

            ret = s;
        }
        return ret;
    });
}

$(function () {
    if (typeof keyword != "undefined" && keyword.length > 0) {
        if (keyword == 'Apex英雄,Apex Legends') {
            $("div a").each(function () {
                if ($(this).html() == '吃鸡技巧') $(this).css('display', 'none');
                if ($(this).children('span').html() == '吃鸡技巧') $(this).css('display', 'none');
            });
        }
    }
});

// 新头
(function () {
    if (parseInt($('html').css('font-size')) < 20) {
        $('html').css('font-size', '50px');
    }
    if (typeof ua === 'undefined') {
        ua = navigator.userAgent.toLowerCase();
    }

// 2021415 start
    if(ua.indexOf('ali213app') == -1){
        if(window.location.origin=='https://app.ali213.net'){
            searchhost='https://app.ali213.net';
        }else{
            searchhost='https://3g.ali213.net';
        }
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
        // $(document).ready(function(){
        //     $('.game-nav1 a').each(function () {
        //         if($(this).text()=='下载'){
        //             $(this).remove();
        //         }
        //     })
        // })
    }
    if(window.location.href.indexOf('3g.ali213.net/gl/')>-1){
        $('.head_3g-top a').attr('href','javascript:void(0);');
        $('.head_3g-down').remove();
    }
//     if (ua.indexOf('baidu') < 0 && window.parent.document.referrer.indexOf('baidu') < 0) {
//         if(ua.indexOf('ali213app') == -1){
//             $('body').prepend('<div class="head_3g-top"></div><div class="head_3g2020"><div class="head_3g-top"><a href="https://www.ali213.net/app/transfer.html" class="head_3g-logo"><img src="https://3g.ali213.net/images/head_icon.png"><div><span>游侠网</span><p>攻略资讯一手掌握</p></div></a><a class="head_3g-down" href="https://www.ali213.net/app/transfer.html">获取APP</a><div class="head_3g-more"></div></div><div class="head_3g-shadow"></div><div class="head_3g-con"><form action="https://3g.ali213.net/search.html" method="get"><div class="head_3g-form"><input type="search" class="search-input" name="keyword"value="" placeholder="在此输入搜索内容" autocomplete="off"><input type="submit" class="search-submit" value=""></div></form><div class="head_3g-icon"><a href="https://3g.ali213.net"><div><img src="https://3g.ali213.net/images/head_home.png"></div>首页</a><a href="https://3g.ali213.net/news/"><div><img src="https://3g.ali213.net/images/head_news.png"></div>资讯</a><a href="https://3g.ali213.net/zt/"><div><img src="https://3g.ali213.net/images/head_zt.png"></div>专题</a><a href="https://3g.ali213.net/gl/"><div><img src="https://3g.ali213.net/images/head_gl.png"></div>攻略</a><a href="https://3g.ali213.net/v/"><div><img src="https://3g.ali213.net/images/head_video.png"></div>视频</a><a href="https://3g.ali213.net/down/"><div><img src="https://3g.ali213.net/images/head_down.png"></div>下载</a><a href="https://app.ali213.net"><div><img src="https://3g.ali213.net/images/head_mob.png"></div>手游</a><a href="https://ali213.fhyx.com/"><div><img src="https://3g.ali213.net/images/head_shop.png"></div>商城</a></div></div></div><div class="down-app-bg"></div>')
//         }
//         $('.search-container').hide();
//         $('body').on('click', '.head_3g-more', function () {
//             if (!$(this).hasClass('active')) {
//                 $(this).addClass('active');
//                 $('.down-app-bg').show();
//                 $('.head_3g-con').show();
//             } else {
//                 $(this).removeClass('active');
//                 $('.down-app-bg').hide();
//                 $('.head_3g-con').hide();
//             }
//         });
//     } else {
//         $('.search-container').show();
//     }

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
        $('.search-container').show();
    }
    if(ua.indexOf('ali213app') != -1){
        $('.search-container').remove();
        $('.head_3g2020').remove();
        $('.head_3g-top').remove();
    }
})();