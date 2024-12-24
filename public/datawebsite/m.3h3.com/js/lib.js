(function(e) {
    e.fn.tabs = function(t) {
        var n = {
            active: 0,
            tit: "li",
            curClass: "current",
            trigger: "click"
        };
        var r = e.extend(n, t);
        return this.each(function() {
            function o(e) {
                s.removeClass(r.curClass).eq(e).addClass(r.curClass);
                i.hide().eq(e).show()
            }
            var t = e(this);
            var n = t.attr("tab-tit");
            var i = e("[tab-con=" + n + "]");
            var s = t.find(r.tit);
            s.bind(r.trigger, function() {
                o(s.index(this));
                return false
            });
            o(r.active)
        })
    }
})(jQuery)
jQuery(document).ready(function($) {
    if(typeof isMobile == 'undefined')var isMobile = {Android: function() {return navigator.userAgent.match(/Android/i);},BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},Windows: function() {return navigator.userAgent.match(/IEMobile/i);},any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}};
	//绑定回车动作(搜索)
	$('.search-hd form .text').keydown(function(event){ 
		if(event.which==13){
			window.location = "/search.php?m=wap&c=index&a=search&ptype=0&k="+$(this).val();
			return false;
		}
	});
    setTimeout(function() {
        $min_height = 300;
        $('.slides li img').each(function() {
            if ($min_height > $(this).height()) $min_height = $(this).height();
        });
        $('.slides li img').css('height', $min_height);
    }, 1000);
    $('.video_iframe').attr('width', '100%').attr('height', '200px');
    $('.video_iframe').each(function() {
        $(this).parent('p').after($(this).parent('p').html());
        $(this).parent('p').remove();
    });
    if (typeof(iidd) != "undefined") { //如果id不空
        $.ajax({
            type: "POST",
            url: "/api.php?op=count&id="+detail.sid+"&modelid=1",
            success: function(msg) {}
        });
    }
    //搜索按钮
    $("#search-btn").click(function() {
        if ($("#keyword").val() == "") {
            alert("搜索关键词不能为空哦！");
            return false;
            //$("#keyword").val("请输入关键字");
        }
        var catt = "";
        if (typeof(cat) != "undefined") {
            catt = cat;
        } else {
            catt = "0";
        }
        $search_val = $("#keyword").val().replace(' ', '|');
        //window.location = "/search_" + catt + "_" + $search_val + ".html";
        $key_val = $("#keyword").val();
        window.location = "/search.php?m=wap&c=index&a=search&ptype=" + catt + "&k=" + $key_val;
    });
    // 菜单
    $('.menu-btn').click(function() {
        $('.search-box').removeClass('ok');
        $('.menu-box').toggleClass('ok');
    });
    $('.search-btn').click(function() {
        $('.menu-box').removeClass('ok');
        $('.search-box').toggleClass('ok');
    });
    // 返回顶部
    $('#toTop').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });
    $('#top-a').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });
    $(window).scroll(function() {
        $('#top-a').stop().animate({
            opacity: 1
        }, 200);
        setTimeout(function() {
            $('#top-a').stop().animate({
                opacity: 0
            }, 200);
        }, 2000);
    });
    // 评分
    $('.stars').each(function() {
        var totalscore = $(this).attr('rel');
        for (var i = 0; i < totalscore; i++) {
            $(this).find('.star-ul').append('<li></li>');
        };
        var score = $(this).find('input').val();
        $(this).find('.star-ul > li:lt(' + score + ')').addClass('on');
    });
    // 查看全部
    $('.slide-btn').click(function() {
        var para = $(this);
        para.toggleClass('slide-btn-ok');
        if (para.hasClass('slide-btn-ok')) {
            para.text('收起内容-');
            $('.slide-txt').css({
                'height': 'auto'
            });
        } else {
            para.text('展开全部＋');
            $('.slide-txt').css({
                'height': 200
            });
        };
    });
    if (typeof(is_content_hide) != 'undefined' && is_content_hide == '1') { //如果内容不隐藏则点击展开按钮
        $('.slide-btn').click();
    }
    if (typeof(no_legal_gm) != 'undefined' && no_legal_gm == '1') { //非法游戏
        $('#bd .con-box .down').css('background', 'rgb(204, 204, 204)');
        setTimeout("$('#bd .con-box .down').attr('href','javascript:;').attr('data-href','javascript:;').attr('murl','javascript:;');", 500);
        $('#bd .con-box .down span').html('下载已关闭');
    }
    // 判断底部位置
    function fixme() {
        $('body').removeClass('fixme');
        if ($('body,html').height() < $(window).height()) {
            $('body').addClass('fixme');
        } else {
            $('body').removeClass('fixme');
        }
    };
    fixme();
    $(window).resize(function() {
        fixme();
    });
    if ($('.fcopy').length > 0) {
        var now = new Date();
        $('.fcopy').html($('.fcopy').html().replace('{$maxYear}', now.getYear()));
    }
    $(".recomTabs a").click(function() {
        var tab = $(this).parent(".recomTabs");
        var parent_div = $(this).parent().parent();
        var con = tab.attr("id");
        var on = tab.find("a").index(this);
        $(this).addClass('curr').siblings(tab.find("a")).removeClass('curr');
        $(con).eq(on).show().siblings(con).hide();
        $(parent_div).find('ul').each(function(i) {
            $(this).hide();
            if (i == on) {
                $(this).show();
            }
        });
        $('.star-ul').show();//防止星星被误隐藏
    });
});
document.write(unescape("%3Cscript src='/js/video.js' type='text/javascript'%3E%3C/script%3E"));