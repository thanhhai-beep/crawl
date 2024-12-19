var platformStatus = false;

function setCookie(click1){//记录cookie
	        var Days = 1;
	        var exp = new Date();
	        exp.setTime(exp.getTime() + Days*24*60*60*1000);
	        document.cookie = click1 + "="+ "one" + ";expires=" + exp.toGMTString();
}
function getCookie(name) 
{ 
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
 
    if(arr=document.cookie.match(reg))
 
        return unescape(arr[2]); 
    else 
        return null; 
} 


//down-pinglun
function validate(){
	var text = $('.w-text textarea').val(),
		len = text.length,
		zh = text.replace(/[\x00-\xff]/g,'').length;
		tlen = Math.ceil( (len + zh)/2 );
	
	if(tlen<5){
		$('#verify').addClass('disable');
	}else{
		$('#verify').removeClass('disable');
	}
}

var browser = {
    versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            ios9: u.indexOf('iPhone OS 9') > -1,
            MQQBrowser: u.indexOf('MQQBrowser') > -1, //是否MQQBrowser
            UCBrowser: u.indexOf('UCBrowser') > -1, //UCBrowser
            Safari: u.indexOf('Safari') > -1
        };
    } (),
    
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
var browsertype = 'other';
var u = navigator.userAgent.toLowerCase();
if(u.indexOf('360') > -1){
    browsertype = '360';
}else if(u.indexOf('mb2345browser') > -1){
    browsertype = '2345';
}else if(u.indexOf('chrome') > -1 || u.indexOf('crios') > -1){
    browsertype = 'chrome';
}else if(u.indexOf('ucbrowser') > -1){
    browsertype = 'UC';
}else if(u.indexOf('micromessenger') > -1){
    browsertype = 'WeChat';
}else if(u.indexOf('qq') > -1){
    browsertype = 'qq';
}else if(u.indexOf('miuibrowser') > -1){
    browsertype = 'miuibrowser';
}else if(u.indexOf('sogou') > -1){
    browsertype = 'sogou';
}else if(u.indexOf('lbbrowser') > -1){
    browsertype = 'lbbrowser';
}else if(u.indexOf('hao') > -1){
    browsertype = 'hao';
}else if(u.indexOf('jisu') > -1){
    browsertype = 'jisu';
}else if(u.indexOf('mxios') > -1 || u.indexOf('maxthon') > -1){
    browsertype = 'mxios';
}else if(u.indexOf('baidu') > -1){
    browsertype = 'baidu';
}else if(u.indexOf('opera') > -1 || u.indexOf('opios') > -1){
    browsertype = 'opera';
}else if(u.indexOf('world') > -1){
    browsertype = 'world';
}else if(u.indexOf('safari') > -1){
    browsertype = 'safari';
}
var Cookie={get:function(name){var value='',matchs;if(matchs=document.cookie.match("(?:^| )"+name+"(?:(?:=([^;]*))|;|$)"))value=matchs[1]?unescape(matchs[1]):"";return value},set:function(name,value,expire,domain){expire=expire||30*24*3600*1000;var date=new Date(),cookie="";date.setTime(date.getTime()+expire);cookie=name+"="+escape(value)+";expires="+date.toGMTString()+";path=/;";domain&&(cookie+="domain="+domain+";");document.cookie=cookie},del:function(name,domain){Cookie.set(name,'',-1,domain)}};


//ios--search & headcata
    if(browser.versions.ios){
        $('#bdcs-search-form input[name="nsid"]').attr('value','6');		
		if($('#mcateCont').length==0){
		    $('.soBox').before('<p id="mcate"><b>分类</b></p><div id="mcateCont"><p><span class="cur">应用分类</span><span>游戏分类</span></p><ul class="on"><li><a href="/downinfo/Catalogid/178/2/"><span>购物美食</span>96款应用</a></li><li><a href="/downinfo/Catalogid/179/2/"><span>健康医疗</span>69款应用</a></li><li><a href="/downinfo/Catalogid/310/2/"><span>金融理财</span>2百+款应用</a></li><li><a href="/downinfo/Catalogid/121/2/"><span>生活服务</span>1百+款应用</a></li><li><a href="/downinfo/Catalogid/122/2/"><span>社交网络</span>61款应用</a></li><li><a href="/downinfo/Catalogid/123/2/"><span>新闻资讯</span>83款应用</a></li><li><a href="/downinfo/Catalogid/124/2/"><span>商务办公</span>2百+款应用</a></li><li><a href="/downinfo/Catalogid/125/2/"><span>常用工具</span>2百+款应用</a></li><li><a href="/downinfo/Catalogid/126/2/"><span>出行导航</span>99款应用</a></li><li><a href="/downinfo/Catalogid/127/2/"><span>影音播放</span>1百+款应用</a></li><li><a href="/downinfo/Catalogid/128/2/"><span>教育学习</span>2百+款应用</a></li><li><a href="/downinfo/Catalogid/129/2/"><span>拍照摄影</span>79款应用</a></li><li><a href="/downinfo/Catalogid/130/2/"><span>母婴育儿</span>2款应用</a></li><li><a href="/downinfo/Catalogid/131/2/"><span>优化安全</span>13款应用</a></li></ul><ul><li><a href="/downinfo/Catalogid/19/2/"><span>手游辅助</span>71款游戏</a></li><li><a href="/downinfo/Catalogid/149/2/"><span>体育竞技</span>33款游戏</a></li><li><a href="/downinfo/Catalogid/146/2/"><span>模拟经营</span>66款游戏</a></li><li><a href="/downinfo/Catalogid/263/2/"><span>策略手游</span>69款游戏</a></li><li><a href="/downinfo/Catalogid/161/2/"><span>格斗手游</span>58款游戏</a></li><li><a href="/downinfo/Catalogid/160/2/"><span>冒险解谜</span>31款游戏</a></li><li><a href="/downinfo/Catalogid/157/2/"><span>棋牌游戏</span>28款游戏</a></li><li><a href="/downinfo/Catalogid/155/2/"><span>卡牌手游</span>84款游戏</a></li><li><a href="/downinfo/Catalogid/158/2/"><span>角色扮演</span>4百+款游戏</a></li><li><a href="/downinfo/Catalogid/156/2/"><span>益智休闲</span>1百+款游戏</a></li></ul></div>')
		}
    }
	else{
		if($('#mcateCont').length==0){
		    $('.soBox').before('<p id="mcate"><b>分类</b></p><div id="mcateCont"><p><span class="cur">软件分类</span><span>网络游戏</span><span>单机游戏</span></p><ul class="on"><li><a href="http://m.downyi.com/downinfo/Catalogid/290/2/"><span><u>购物支付</u>5百+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/289/2/"><span><u>社交网络</u>5百+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/278/2/"><span><u>系统工具</u>5百+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/288/2/"><span><u>摄影美化</u>6百+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/280/2/"><span><u>媒体影音</u>1千+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/307/2/"><span><u>生活服务</u>5百+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/286/2/"><span><u>手机安全</u>2百+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/291/2/"><span><u>办公学习</u>9百+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/322/2/"><span><u>健康医疗</u>9百+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/281/2/"><span><u>气象交通</u>5百+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/287/2/"><span><u>主题桌面</u>5百+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/284/2/"><span><u>新闻阅读</u>5百+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/282/2/"><span><u>金融理财</u>5百+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/317/2/"><span><u>教育相关</u>5百+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/316/2/"><span><u>智能电视</u>5百+款应用</span></a></li></ul><ul><li><a href="http://m.downyi.com/downinfo/Catalogid/298/2/"><span><u>角色扮演</u>5百+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/297/2/"><span><u>动作射击</u>6百+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/296/2/"><span><u>体育竞技</u>1千+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/326/2/"><span><u>卡牌手游</u>5百+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/300/2/"><span><u>网络游戏</u>5百+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/301/2/"><span><u>模拟经营</u>5百+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/327/2/"><span><u>变态手游</u>2百+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/335/2/"><span><u>即时网游</u>5百+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/299/2/"><span><u>策略塔防</u>5百+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/336/2/"><span><u>回合网游</u>5百+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/337/2/"><span><u>仙侠网游</u>9百+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/338/2/"><span><u>三国网游</u>5百+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/305/2/"><span><u>其他游戏</u>5百+款应用</span></a></li></ul><ul><li><a href="http://m.downyi.com/downinfo/Catalogid/256/2/"><span><u>模拟经营</u>5百+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/92/2/"><span><u>动作游戏</u>6百+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/177/2/"><span><u>卡牌棋牌</u>1千+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/276/2/"><span><u>格斗游戏</u>5百+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/75/2/"><span><u>枪战射击</u>5百+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/267/2/"><span><u>益智休闲</u>5百+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/319/2/"><span><u>破解游戏</u>2百+款应用</span></a></li><li><a href="http://m.downyi.com/downinfo/Catalogid/323/2/"><span><u>角色扮演</u>5百+款应用</span></a></li></ul></div>')
		}
	}


//ios--search & headcata
$(function(){
    if(browser.versions.ios){
        $('#bdcs-search-form input[name="nsid"]').attr('value','6');
    }
	if(browser.versions.android){
		$('#bdcs-search-form input[name="nsid"]').attr('value','3');
	}


	//common-head
	var catanav=false;
	var pullnav=false;
	$('#mcate b').click(function(){		
		if(catanav==false){
        $('#mcateCont').css('height','auto');
		$('#nav .pullNav').removeClass('open');
	    $('#nav .moreNav').css('display','none');
		pullnav=false;
		catanav=true;
		}else{
			$('#mcateCont').animate({height:'0px'},100);
			catanav=false;
		}			
    });
	$('#mcateCont p span').click(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
		var index = $('#mcateCont p span').index(this);
		$('#mcateCont ul').eq(index).addClass('on').siblings().removeClass('on');
	});
	//common-curNav
	var url=window.location.href;
	$('.mainNav li a').each(function(){
		if(url.indexOf('app.html')>-1 || url.indexOf('apphot.html')>-1 || url.indexOf('appnew.html')>-1 || url.indexOf('apptj.html')>-1){
		    $('.mainNav li').eq(3).addClass('cur');
		}else if(url.indexOf('k.html')>-1){
		    $('.mainNav li').eq(4).addClass('cur');
		}else if(url.indexOf('wangyou.html')>-1 || url.indexOf('wangyouhot.html')>-1 || url.indexOf('wangyounew.html')>-1 || url.indexOf('wangyoutj.html')>-1){
		    $('.mainNav li').eq(1).addClass('cur');
		}else if(url.indexOf('youxi.html')>-1 || url.indexOf('youxihot.html')>-1 || url.indexOf('youxinew.html')>-1 || url.indexOf('youxitj.html')>-1){
		    $('.mainNav li').eq(2).addClass('cur');
		}else if(url.indexOf('/top/')>-1){
		    $('.mainNav li').eq(5).addClass('cur');
		}else if($('#index-page').length>0){
			$('.mainNav li').eq(0).addClass('cur');
		}
	});
	//common-pullNav	
	$('#nav .pullNav').click(function(){
		if(pullnav==false){
			$('#nav .pullNav').addClass('open');
			$('#nav .moreNav').css('display','block');
			pullnav=true;
		}else{
			$('#nav .pullNav').removeClass('open');
			$('#nav .moreNav').css('display','none');
			pullnav=false;
		}
	});
	//新导航
	 function navtop(oclass){
		$(oclass).append('<li class="sq"><span></span></li>');
		$(oclass).find("li").eq(4).after('<li class="zk"><span></span></li>');
		$(oclass).find(".sq").hide();
		$(oclass).find(".zk").click(function(){	
			$(oclass).find("li").show().removeClass("hide");
			$(this).hide();
		 });	
		$(oclass).find(".sq").click(function(){	
			$(oclass).find("li").each(function(index){
				var clnum=index;
				if(clnum>5){$(this).hide();}
			});
		   $(oclass).find(".zk").show();
		});	
	 }
	if($('#topNav').length>0){navtop("#topNav ul");}	
	//轮播图
	function img_focus(){
		var myScroll2;
		var timer;
		var i=0;
		var obj=$('#wrapper8');
		var ocircle=obj.find('.circle');
		var ospan='<span class="active"></span>'
		var obj_w=obj.width();
		var oli=obj.find('.focus-pic li');
		var oli_l=oli.length;
		oli.width(obj_w);
		$('#scroller8').width(oli_l*obj_w);
		for(var j=1; j<oli_l; j++){
			ospan+='<span></span>'
			};
		ocircle.html(ospan);
		myScroll2 = new iScroll('wrapper8', {
			snap: true,
			momentum: false,
			hScrollbar: false,
			onScrollEnd: function () {
				$('.circle span').removeClass('active');
				$('.circle span').eq(this.currPageX).addClass('active');
			},
			onBeforeScrollStart:function(){//滑动清除定时器
				clearInterval(timer);
				},
			onTouchEnd:function(){
				timer=setInterval(gund,5000);
				i=myScroll2.currPageX;//同步手动与自动定时器
			},
		 });
	
		timer=setInterval(gund,5000); 
		function gund(){ //每5秒滚动
		    i++;
		    if(i==oli_l){
			    i=0;
			    myScroll2.scrollToPage(0, 0, 1000); //滚回第一页
		    } else {
			    myScroll2.scrollToPage('next', 0);
		    };
		};	
	};
	
	if($('#wrapper8').length>0){img_focus()};
	
//index
if($('#index-page').length>0){	
	var myT,myK1,myK2,myK3,mt,kw1,kw2,kw3,kw0;
	kt=$('#thelist li').length*208;
    kw1=$('#thelist1 li').length*87;
    kw2=$('#thelist2 li').length*208;
    kw3=$('#thelist3 li').length*87;

	$('#scroller').width(kt);
    $('#scroller1').width(kw1+115);
    $('#scroller2').width(kw2);
    $('#scroller3').width(kw3+115);
/*	myT = new iScroll('wrapper', {
        hScrollbar: false
    }); 
    myK1 = new iScroll('wrapper1', {
        hScrollbar: false
    }); 
    myK2 = new iScroll('wrapper2', {
        hScrollbar: false
    });
    myK3 = new iScroll('wrapper3', {
        hScrollbar: false
    });*/
			
}

   //悬浮菜单
   function xfNav(){
		var headerHeight = $('header').height()+90;
		$(window).scroll(function () {
			var $nav = $('#btns');
			if($(window).scrollTop() >= headerHeight) {
				$nav.css({'position': 'fixed','top':0}).addClass("on");
				$('#goTop').fadeIn();
			} else {
				$nav.css({'position': 'relative'}).removeClass("on");
				$('#goTop').fadeOut();
			};
	   });
   };
   if( $('#alist').length>0 || $('#down-page').length>0){xfNav()}

//背景滑动
function bgauto(oid1,oid2){
    var pressX = 0, pressY = 0;
    var obj = document.getElementById(oid1);
	var oclass=$(oid2);
    obj.addEventListener('touchmove', function(event) {
        if (event.targetTouches.length == 1) {
            var touch = event.targetTouches[0];
            var spanX = touch.pageX - pressX;
            var spanY = touch.pageY - pressY;
            var direct = "none";
            if (Math.abs(spanX) > Math.abs(spanY)) {
                if (spanX > 0) {
                    direct = "right";//向右
					oclass.animate({'left':0})
                } else {
                    direct = "left";//向左
					oclass.animate({'left':'-20%'})
                }
            }
        }
    }, false);
	
    obj.addEventListener('touchstart', function(event) {
        if (event.targetTouches.length == 1) {
            var touch = event.targetTouches[0];
            pressX = touch.pageX;
            pressY = touch.pageY;
        }
    }, false);
};
if($('#wrapper3').length>0){bgauto("wrapper3","#bgimg1")};
if($('#wrapper1').length>0){bgauto("wrapper1","#bgimg2")};


    //tag标签滑动
	function change_color1(oclass){
		var obj=$('#'+oclass);
		    oul=obj.find('.tags-main-ul');
		    oli=oul.find('.tags-main-box');
			onav_li=$('#wrapert ul li');
			ospan='<span class="active"></span>'
			oli_l=oli.length;
			window_w=parseInt($(window).width()-16);
			onav_w=parseInt(window_w/4);
			oli.width(window_w)
			oli_w=oli.eq(1).outerWidth(true);
			onav_li.width(onav_w);
			tag_li=$('.bq-main span');
			for(var i=1; i<oli_l; i++){
				ospan+='<span></span>'
				}
			$('.pagenum').html(ospan)
			
		oul.width(oli_l*oli_w);
		var myScroll;
		tag_li.each(function(index){
		    $(this).click(function(){
			    onav_li.eq(index).addClass('active').siblings().removeClass('active');
				$('.pagenum span').eq(index).addClass('active').siblings().removeClass('active');
				myScroll.x=-index*window_w;
				$('.tags-main-ul').css('-webkit-transform',"translate3d(" + myScroll.x + "px, 0px, 0px)");
				if(index>=3){
				    $('#wrapert ul').css({'-webkit-transform':"translate3d(" + (-window_w) + "px, 0px, 0px)"});
				}
			});
		});
		
		//点击li
		$('#wrapert ul li:first').addClass('active');
		$('#wrapert ul li').each(function(index){
		    $(this).click(function(){
				onav_li.eq(index).addClass('active').siblings().removeClass('active');
				$('.pagenum span').eq(index).addClass('active').siblings().removeClass('active');
				myScroll.x=-index*window_w;
				$('.tags-main-ul').css({'-webkit-transform':"translate3d(" + myScroll.x + "px, 0px, 0px)"});
			});
		});
		
		myScroll = new iScroll(oclass, {
			snap: true,
			momentum: false,
			hScrollbar: false,
			onScrollEnd: function () {
			onav_li.removeClass('active');
			$('.pagenum span').removeClass('active');
			onav_li.eq(this.currPageX).addClass('active');
			$('.pagenum span').eq(this.currPageX).addClass('active');
			if(this.currPageX>=8){
				$('#wrapert ul').css({'-webkit-transform':"translate3d(" + (-2*window_w) + "px, 0px, 0px)"});
			}else if(this.currPageX>=4){
			   $('#wrapert ul').css({'-webkit-transform':"translate3d(" + (-window_w) + "px, 0px, 0px)"});
			}else{
				$('#wrapert ul').css({'-webkit-transform':"translate3d(0px, 0px, 0px)"});
			};
		},
		});
	};
	if($('#tags-main').length>0){change_color1('tags-main')};
	
	function change_nav(oclass){//meau滑动
	var obj=$('#'+oclass);
		oul=obj.find('ul');
		oli=oul.find('li');
		oli_l=oli.length;
		window_w=parseInt($(window).width()-16);
		onav_w=parseInt(window_w/4);
	oul.width(oli_l*onav_w+20);
	var myScroll = new iScroll(oclass, {
			snap: true,
			momentum: false,
			hScrollbar: false,
		});
	};
	if($('#wrapert').length>0){change_nav('wrapert')};
	if($('#wrapert li').length==0){$('.guess').remove()}
	if($('#wrapert li').length==1){$('.pagenum').remove()}

	//判断是否在微信中打开
	function is_weixin() {
		var uaa = navigator.userAgent.toLowerCase();
	    var odocumentH=$(document).height();
	    var owindowW=$(window).width();
		var kg=true;
		if (uaa.indexOf('micromessenger')>0) {
		 if(browser.versions.ios) { //if ios
				$('body').append('<div class="mask main-bg"><img src="/statics/img/iphone_wx.png"></div>');	
			}				
			if(browser.versions.android) {//if android
				$('body').append('<div class="mask main-bg"><img src="/statics/img/anzhuo_wx.png"></div>');
			}
	        $('.mask img').css({'position':'fixed','right':'22px','top':'15px'})
            document.addEventListener("touchmove",function(e){//清除底层文档默认滑动；
				if(kg){
					e.preventDefault();
					e.stopPropagation();
				};
			},false); 
			
			$(".mask").click(function () {
				$(".mask").remove();
				kg=false;
			});
			return false;	
		};
	};
	$('#info #btns a').click(is_weixin);

	//返回上一页
	var onowurl = document.domain;
	var str = document.referrer;
	if(str.indexOf(onowurl)>-1 && window.history.length>0){
		$(".sback").on("click", function(){
			window.history.go(-1);
			return false;
		});
	};
//tab
	if($('.xgwz ul li').length>0){
	    $('.xgwz').show();	   
	}else{
		$('.xgwz').hide();$('#tab span').eq(2).hide();
	}
	$('#tab span').click(function(){
		if($(this).text()=='简介'){
			$(this).addClass('cur').siblings().removeClass('cur');
		    $('.xyc,.cont,#comment,.xgwz,.similar,#tcsyy,.guess,#xgk').show();
		}else if($(this).text()=='教程'){
			$(this).addClass('cur').siblings().removeClass('cur');
		    $('.xgwz,#comment').show();
	        $('.cont,.xyc,.similar,#tcsyy,#xgk,.guess').hide();
		}else if($(this).text()=='评论'){
			$(this).addClass('cur').siblings().removeClass('cur');
            $('.xgwz,.cont,.xyc,.similar,#tcsyy,#xgk,.guess').hide();
            $('#comment').show();
		}
	});
})	

//默认模板表头修改
function mrtit(){
	var otit=$('.xq-top .title a:last');
	var ohref=otit.attr('href')
	if(ohref.indexOf('326')>0 || ohref.indexOf('305')>0 || ohref.indexOf('301')>0 || ohref.indexOf('300')>0 || ohref.indexOf('299')>0 || ohref.indexOf('298')>0 || ohref.indexOf('297')>0 || ohref.indexOf('296')>0 || ohref.indexOf('295')>0 || ohref.indexOf('294')>0 || ohref.indexOf('/327/')>0 || ohref.indexOf('/335/')>0 || ohref.indexOf('/336/')>0 || ohref.indexOf('/337/')>0 || ohref.indexOf('/338/')>0){
		otit.html('网游').attr('href','/wangyou.html')
	}else if(ohref.indexOf('256')>0 || ohref.indexOf('92')>0 || ohref.indexOf('177')>0 || ohref.indexOf('276')>0 || ohref.indexOf('75')>0 || ohref.indexOf('267')>0 || ohref.indexOf('319')>0 || ohref.indexOf('323')>0){
		otit.html('单机').attr('href','/youxi.html')
	}else{
		otit.html('应用').attr('href','/app.html')
	}
};
if ($('#down-page .xq-top .title').length>0){mrtit()};


//详情菜单
function xq_nav(){
    $('.xq-top #mcate b').click(function(){
	    $('.xq-nav').slideToggle()
	});
	$('.xq-top #mcate em').click(function(){
		$('.xq-top .title').hide();
		$('.xq-top form').show();
		$('#mcate').css('width','35px');
		$('#mcate em').remove();
		$('.xq-top').css('padding-right','51px')
	});
};
xq_nav();
$('.w-text textarea').focus(function(){$(this).css('background','none')});


//list
if($('#down-page,#list-page').length>0){
var lurl=window.location.href;
	if(lurl.indexOf('/307/')>0  || lurl.indexOf('/290/')>0 || lurl.indexOf('/316/')>0 || lurl.indexOf('/317/')>0 || lurl.indexOf('/285/')>0 || lurl.indexOf('/286/')>0 || lurl.indexOf('/304/')>0 || lurl.indexOf('/302/')>0 || lurl.indexOf('/292/')>0 || lurl.indexOf('/281/')>0 || lurl.indexOf('/303/')>0 || lurl.indexOf('/288/')>0 || lurl.indexOf('/289/')>0 || lurl.indexOf('/293/')>0 || lurl.indexOf('/291/')>0 || lurl.indexOf('/284/')>0 || lurl.indexOf('/282/')>0 || lurl.indexOf('/279/')>0 || lurl.indexOf('/287/')>0 || lurl.indexOf('/283/')>0 || lurl.indexOf('/280/')>0 || lurl.indexOf('/278/')>0 || lurl.indexOf('/322/')>0 || lurl.indexOf('/325/')>0 || lurl.indexOf('/306/')>0){$('.mainNav li').eq(3).addClass('cur');}
	else if(lurl.indexOf('/256/')>0 || lurl.indexOf('/92/')>0 || lurl.indexOf('/177/')>0 || lurl.indexOf('/276/')>0 || lurl.indexOf('/75/')>0 || lurl.indexOf('/267/')>0 || lurl.indexOf('/319/')>0 || lurl.indexOf('/323/')>0){$('.mainNav li').eq(2).addClass('cur');}	
	else if(lurl.indexOf('/326/')>0 || lurl.indexOf('/305/')>0 || lurl.indexOf('/301/')>0 || lurl.indexOf('/300/')>0 || lurl.indexOf('/299/')>0 || lurl.indexOf('/298/')>0 || lurl.indexOf('/297/')>0 || lurl.indexOf('/296/')>0 || lurl.indexOf('/295/')>0 || lurl.indexOf('/294/')>0 || lurl.indexOf('/327/')>0 || lurl.indexOf('/335/')>0 || lurl.indexOf('/336/')>0 || lurl.indexOf('/337/')>0 || lurl.indexOf('/338/')>0){$('.mainNav li').eq(1).addClass('cur');}	
	
    ////list_more
var p1=2,PageCount1=0,px,flei1,szhi1;
    var url1=String(window.location.href);
    $(".tabhd a").each(function(){
		var turl1=$(this).attr('href');
		turl1=turl1.replace(/\s+/g,"");
		$(this).attr('href',turl1);
	});
    if(url1.indexOf("rootid=")>0||url1.indexOf("rootID=")>0||url1.indexOf("rootId=")>0||url1.indexOf("Rootid/")>0){
		flei1=$('#sNav').attr('rid');szhi1=0;		
	}else{
		flei1=$('#sNav').attr('cid');szhi1=1;
	}
	if($('#sNav').attr('cname')!=null && window.page_prev==undefined){       
	    if(url1.indexOf("o=0")>0 || url1.indexOf("/1/")>0){$(".tabhd a").eq(1).addClass('cur');px1='ResRank desc,id';$("#infocon li").remove();p1=0;ViewMore();}
        else if(url1.indexOf("o=1")>0 || url1.indexOf("/2/")>0){$(".tabhd a").eq(2).addClass('cur');px1='HitsTotal';$("#infocon li").remove();p1=0;ViewMore();}
        else{$(".tabhd a").eq(0).addClass('cur');px1='UpdateTime';}  		
	}
 function ViewMore() {
	if($('#down-page').length>0){
		flei1=$("#catalogid").text();
	} 
        $("#more").html("内容正在加载中...")                        
		p1=p1+1;                             
        // s.src = '/sajax.asp?action=4&t={$rootid}&s=1&num=15&o=updatetime&p=3';
		$.ajax({
			type: "Get",
			url: "/sajax.asp",
			//data: "action=4&t={$rootid}&s=0&num=15&o=updatetime&p="+p,
			data: "action=4&t="+flei1+"&s="+szhi1+"&num=15&o="+px1+"&p="+p1,
			success: function(msg1){
				//alert( "Data Saved: " + msg );
				listDate1(msg1)
			}
		});
		// $("#infocon").append(s)
        //document.body.appendChild(s);
    }
     
 function ViewMore1() {
	if($('#down-page').length>0){
		flei1=$("#catalogid").text();
	} 
        $("#more").html("内容正在加载中...")                        
		p1=p1+1;                             
        // s.src = '/sajax.asp?action=4&t={$rootid}&s=1&num=15&o=updatetime&p=3';
		$.ajax({
			type: "Get",
			url: "/sajax.asp",
			//data: "action=4&t={$rootid}&s=0&num=15&o=updatetime&p="+p,
			data: "action=4&t="+flei1+"&s="+szhi1+"&num=15&o=updatetime&p="+p1,
			success: function(msg1){
				//alert( "Data Saved: " + msg );
				listDate1(msg1)
			}
		});
		// $("#infocon").append(s)
        //document.body.appendChild(s);
    }
    window.page_temp1 = 0;
   
	var sortBy = function (filed, rev, primer) {
    rev = (rev) ? -1 : 1;
    return function (a, b) {
        a = a[filed];
        b = b[filed];
        if (typeof (primer) != 'undefined') {
            a = primer(a);
            b = primer(b);
        }
        if (a < b) { return rev * -1; }
        if (a > b) { return rev * 1; }
        return 1;
    }
};
	function listDate1(msg1){	
	    var cname=$('#sNav').attr('cname');
		var objJson1 =eval( '(' + msg1 + ')');
		for(var i=0; i<objJson1.ResName.length;i++ )     
		{
			var sname1=decodeURIComponent(objJson1.ResName[i]);
			if(sname1.indexOf('+')>-1){
				sname1=sname1.replace(/\+/g,' ');
			}
			if(sname1.indexOf('%3A'>-1)){
				sname1=sname1.replace('%3A',':')
			}
			if(objJson1.SmallImg[i].indexOf('_100')==-1){
			 var simg1=objJson1.SmallImg[i].replace('.jpg','.jpg');
			 //var simg1=objJson1.SmallImg[i].replace('.jpg','_100_100.jpg');
			 //simg1=simg1.replace('.png','_100_100.png');
			 //simg1=simg1.replace('.gif','_100_100.gif');
			 //simg1=simg1.replace('.jpeg','_100_100.jpeg');
			 //simg1=simg1.replace('.bmp','_100_100.bmp');
			}else{
			  simg1=objJson1.SmallImg[i];
			}
			//if(simg1.indexOf('/thumb/')==-1){
			//  simg1=simg1.replace('/up/','/thumb/up/');	
			//}
			
				
	if($('#down-page').length>0){
		cname=$(".cata").text();
	} 
			//$("#infocon").append("<li><a href='/downinfo/"+ decodeURI(objJson1.softId[i]) +".html' class='img'><img src='" + decodeURI(simg1) + "'></a> <p><a href='/downinfo/"+ decodeURI(objJson1.softId[i]) +".html'>" + sname1 +"</a><em class='lstar" + decodeURI(objJson1.ResRank[i]) + "'></em><span>"+cname+"<u>" + decodeURI(objJson1.ResSize[i]) + "</u>" + decodeURI(objJson1.ResVer[i]) + "</span></p><a href='/downinfo/"+ decodeURI(objJson1.softId[i]) +".html' class='cir_btn'>"+(objJson1.ResSize[i]=='0KB'?'查看':'下载')+"</a></li>")
			$("#infocon").append("<li><a href='/downinfo/"+ decodeURI(objJson1.softId[i]) +".html' class='img'><img src='" + decodeURI(simg1) + "'></a> <p><a href='/downinfo/"+ decodeURI(objJson1.softId[i]) +".html'>" + sname1 +"</a><em class='lstar" + decodeURI(objJson1.ResRank[i]) + "'></em><span>"+cname+"<u>" + decodeURI(objJson1.ResSize[i]) + "</u>" + decodeURI(objJson1.ResVer[i]) + "</span></p><a href='/downinfo/"+ decodeURI(objJson1.softId[i]) +".html' class='cir_btn'>详情</a></li>")


		}
		PageCount1=objJson1.PageCount1;
		$("#more").html("上拉或点击查看更多...")
	}
    $(function () {
        $(window).scroll(function (e) {
            var bodyh = $("body").height();
            var scrtop = $("body").scrollTop();
            var winh = window.innerHeight;
            if (scrtop >= bodyh - winh) {
				if($('#sNav').attr('cname')!=null && window.page_prev==undefined){
                    ViewMore1(); return false;
				}
            }
        });    
	    // 列表排序选项卡的当前位置
	    var alurl=window.location.href;
		if(alurl.indexOf('/0/')>-1)	{
			$('#sNav a').eq(0).addClass('cur');
		}else if(alurl.indexOf('/1/')>-1)	{
			$('#sNav a').eq(1).addClass('cur');
		}else if(alurl.indexOf('/2/')>-1)	{
			$('#sNav a').eq(2).addClass('cur');
		}		
		$('#infocon li > p > a').each(function(){
			var stemp=$(this).html();
			if(stemp.indexOf('+')>-1){
				stemp=stemp.replace(/\+/g,' ');
				$(this).html(stemp);
			}

	    });
    });
	
}

//down
  if($('#down-page').length>0){
        //haima ad
		if(browser.versions.ios) {
            ////$('#info').after('<p style="margin-bottom:5px;" id="iosbanner"><a href="http://h5channel.51pgzs.com/index.php?qid=waitui002" onclick="return ios_zs()"><img src="/img/hm600_90.gif" style="display:block;width:100%;max-width:720px;" /></a></p>');
		}else if(browser.versions.android){
            ////$('#info').after('<p><a href="http://ggg.9ht.com/sc/ppzs/setup.apk" onclick="return android_zs()"><img src="/public/img/zs.gif" style="display:block;width:100%;max-width:720px;"/></a></p>');
            $('.bottom').after('<p class="dbxf" style="position:fixed;bottom:0;z-index:9999;"></p>');
        }
        
var is_zs = false;
var refDownApp=function(system){
    return true;
    if(typeof(_webInfo)!='undefined' && _webInfo.Id == 126803){ return };
    //if(platformStatus == true && (Cookie.get("isDown") == "Yes"|| is_zs==true) ){ return };
    if ($('#info #btns a').attr('href').indexOf("g.pc6.com")>0){ return };
    name = $('h1').html();
    if(browser.versions.ios) {
        if(system == "ios" || platformStatus == true){ return };
        if(confirm('当前应用非iOS版本,安装助手高速下载'+ name) || (system != "ios" && platformStatus == false)){
            //Cookie.set("isDown","Yes");
            is_zs = true;
            ios_zs();
            return false;
        }else{
            return true;
        }
    }			
    if(browser.versions.android) {
        if(system == "android" || platformStatus == true){ return };
        if(confirm('当前应用非安卓版本,安装百度助手高速下载'+ name) || (system != "android" && platformStatus == false) ){
            //Cookie.set("isDown","Yes");
            is_zs = true;
            //android_zs();
            window.location.href = 'http://downpack.baidu.com/appsearch_AndroidPhone_1014468a.apk';
            return false;
        }else{
            return true;
        }
    }
    return true;
}
function ios_zs(){
    if(browsertype == 'safari'){
        window.location.href = 'http://h5channel.51pgzs.com/index.php?qid=waitui002';
    }else{
        window.location.href = 'http://h5channel.51pgzs.com/?qid=waitui030&out=1';
    }
    return false;
}
function android_zs(){
    ry = Math.ceil(Math.random()*9000000000+1000000000);
    if(Cookie.get("360sz") != "Yes"){
        Cookie.set("360sz","Yes");
        window.location.href = 'http://down2.guopan.cn/andl/dda.php?appid=102607&cid=23086&t=1464146878';
    }else if(Cookie.get("ppzs") != "Yes"){
        Cookie.set("ppzs","Yes");
        if(browser.versions.MQQBrowser || browser.versions.UCBrowser){
            window.location.href = 'http://yyb.pc6.com/'+ry+'/sc/qita/wandoujia-lanyu4_ad_5.14.1.12012.apk';
        }else{
            window.location.href = 'http://ggg.9ht.com/sc/qita/wandoujia-lanyu4_ad_5.14.1.12012.apk';
        }
    }else{
        Cookie.set("360ws","No");
        Cookie.set("360sz","No");
        Cookie.set("ppzs","No");
        if(browser.versions.MQQBrowser || browser.versions.UCBrowser){
            window.location.href = 'http://yyb.pc6.com/'+ry+'/sc/ppzs/setup_3508.apk';
        }else{
            window.location.href = 'http://ggg.9ht.com/sc/ppzs/setup_3508.apk';
        }
    }
    return false;
}
        
      //ad-down-game
       if($('.tjyxph111').length>0){
            if(browser.versions.ios) { 
            $('.tjyxph #thelist3').append('<li><a href="http://m.downyi.com/down.asp?id=56358"><img src="http://pic.downyi.com/upload/2017-6/2017611749135462.png">口袋妖怪复刻</a></li><li><a href="http://m.downyi.com/down.asp?id=64293"><img src="http://pic.downyi.com/upload/2017-8/2017831448543836.jpg">无限纷争</a></li><li><a href="http://m.downyi.com/down.asp?id=56332"><img src="http://pic.downyi.com/upload/2017-6/201761115647470.png">全民枪战2</a></li><li><a href="http://m.downyi.com/down.asp?id=73330"><img src="http://pic.downyi.com/upload/2017-9/2017916853493448.png">精灵世界</a></li><li><a href="http://m.downyi.com/down.asp?id=56372"><img src="http://pic.downyi.com/upload/2017-6/201766935593248.jpg">天龙3d</a></li><li><a href="http://m.downyi.com/down.asp?id=56366"><img src="http://pic.downyi.com/upload/2017-6/201766910496864.jpg">究极数码暴龙</a></li>');
             }
            if(browser.versions.android && isBot()) { 
	        $('.tjyxph #thelist3').append('<li><a href="http://m.downyi.com/down.asp?id=97712"><img src="http://pic.downyi.com/upload/2017-12/201712281633446053.jpg">西游单机版</a></li><li><a href="http://m.downyi.com/down.asp?id=86777"><img src="http://pic.downyi.com/upload/2017-11/201711161240294299.jpg">一起玩捕鱼</a></li><li><a href="http://m.downyi.com/down.asp?id=73057"><img src="http://pic.downyi.com/upload/2017-9/2017914106224173.jpg">街机水浒传</a></li><li><a href="http://m.downyi.com/down.asp?id=55741"><img src="http://pic.downyi.com/upload/2017-6/2017621125497263.jpg">鑫途大赢家</a></li><li><a href="http://m.downyi.com/key/koudaiyaoguai/"><img src="http://pic.downyi.com/upload/2017-6/2017611749135462.png">口袋妖怪</a></li><li><a href="http://m.downyi.com/key/menghuanxiyousy/"><img src="http://pic.downyi.com/upload/2017-6/2017610115496264.png">梦幻西游</a></li><li><a href="http://m.downyi.com/key/shikonglieren/"><img src="http://pic.downyi.com/upload/2017-6/2017611131463269.png">时空猎人ol</a></li><li><a href="http://m.downyi.com/key/daotachuanqi/"><img src="http://pic.downyi.com/upload/2017-6/2017621543145250.PNG">刀塔传奇</a></li><li><a href="http://m.downyi.com/key/liewangdefenzheng/"><img src="http://pic.downyi.com/upload/2017-6/201763843375272.png">列王的纷争</a></li><li><a href="http://m.downyi.com/key/dahuaxiyousy/"><img src="http://pic.downyi.com/upload/2017-6/201761165167207.png">大话西游</a></li>');
            } 
            else { 
	        $('.tjyxph #thelist3').append('<li><a href="http://m.downyi.com/down.asp?id=97712"><img src="http://pic.downyi.com/upload/2017-12/201712281633446053.jpg">西游单机版</a></li><li><a href="http://m.downyi.com/down.asp?id=86777"><img src="http://pic.downyi.com/upload/2017-11/201711161240294299.jpg">一起玩捕鱼</a></li><li><a href="http://m.downyi.com/down.asp?id=73057"><img src="http://pic.downyi.com/upload/2017-9/2017914106224173.jpg">街机水浒传</a></li><li><a href="http://m.downyi.com/down.asp?id=55741"><img src="http://pic.downyi.com/upload/2017-6/2017621125497263.jpg">鑫途大赢家</a></li><li><a href="http://m.downyi.com/key/koudaiyaoguai/"><img src="http://pic.downyi.com/upload/2017-6/2017611749135462.png">口袋妖怪</a></li><li><a href="http://m.downyi.com/key/menghuanxiyousy/"><img src="http://pic.downyi.com/upload/2017-6/2017610115496264.png">梦幻西游</a></li><li><a href="http://m.downyi.com/key/shikonglieren/"><img src="http://pic.downyi.com/upload/2017-6/2017611131463269.png">时空猎人ol</a></li><li><a href="http://m.downyi.com/key/daotachuanqi/"><img src="http://pic.downyi.com/upload/2017-6/2017621543145250.PNG">刀塔传奇</a></li><li><a href="http://m.downyi.com/key/liewangdefenzheng/"><img src="http://pic.downyi.com/upload/2017-6/201763843375272.png">列王的纷争</a></li><li><a href="http://m.downyi.com/key/dahuaxiyousy/"><img src="http://pic.downyi.com/upload/2017-6/201761165167207.png">大话西游</a></li><li><a href="http://s.xiazaicc.com/14/1/"><img src="http://pic.downyi.com/upload/2017-6/2017615154652987.png">聊客</a></li>');
            }       
       }
	/*2014-6-6 add pc download address*/
	//xgk hide
	if($('#xgk li').length<1){
		$('#xgk').remove();
	}else{
	    $("#xgk li:first-child").find('a').css({"color":"#4996ff"});
        $("#xgk li").eq(2).find('a').css({"color":"#ff5e33"});
        $("#xgk li").eq(4).find('a').css({"color":"#4e8fb7"});
	    $("#xgk li").eq(6).find('a').css({"color":"#f7a131"});
        $("#xgk li").eq(8).find('a').css({"color":"#6047ff"});
        $("#xgk li").eq(9).find('a').css({"color":"#4ac144"});
        $("#xgk li").eq(11).find('a').css({"color":"#ff56bd"});	
	}
	//tcsyy hide
    if($('#tcsyy > p a').length<1 || $('#tcsyy #thelist4 li').length<1){$('#tcsyy').remove();}
	var assid=parseInt($('#info #Associate').html());
	var cataid=parseInt($('#info #catalogid').html());
	if(assid>0){$('#info #btns a').attr('href','/down.asp?id='+assid);}
    
    if(browser.versions.android && typeof(_platformInfo)!='undefined' && typeof(_platformInfo.Android)!='undefined'){
        if (_platformInfo.Android.Address.indexOf("http:") >=0 || _platformInfo.Android.Address.indexOf("ftp:") >=0 || _platformInfo.Android.Address.indexOf("https:") >=0){
            curdomain = '';
        }else{
            curdomains = (eval("AddressList.siteId_"+_platformInfo.Android.TypeID ));
            curdomain = curdomains.split("||")[1].split(",")[0];
        }
        $('#info #btns a').attr('href',curdomain+_platformInfo.Android.Address);
        $('#ResSystem').html(_platformInfo.Android.ResSystem);
        //排除不修改标题的应用
        if(",110974,110451,121665,115094,55819,49251,62433,140386,".indexOf(','+_webInfo.Id+',')<0){
			if($('body.dnb').length<1){			
                $('#info .name').html('<h1>'+_platformInfo.Android.ResName+'</h1>'+_platformInfo.Android.ResVer);
			}
        }
        platformStatus = true;
		//add for dnb
		if($('body.dnb').length>0){
		    $('#info #btns').after('<a href="/s/'+_platformInfo.Android.SoftID+'" class="goazd">安卓版</a>');
		}
    }else if(browser.versions.ios && typeof(_platformInfo)!='undefined' && typeof(_platformInfo.iPhone)!='undefined'){
        if (_platformInfo.iPhone.Address.indexOf("http:") >=0 || _platformInfo.iPhone.Address.indexOf("ftp:") >=0 || _platformInfo.iPhone.Address.indexOf("https:") >=0){
            curdomain = '';
        }else{
            curdomains = (eval("AddressList.siteId_"+_platformInfo.iPhone.TypeID ));
            curdomain = curdomains.split("||")[1].split(",")[0];            
        } 
        $('#info #btns a').attr('href',curdomain+_platformInfo.iPhone.Address);
        $('#ResSystem').html(_platformInfo.iPhone.ResSystem);
        //排除不修改标题的应用
        if(",110974,110451,121665,115094,55819,49251,62433,140386,".indexOf(','+_webInfo.Id+',')<0){
			if($('body.dnb').length<1){	
                $('#info .name').html('<h1>'+_platformInfo.iPhone.ResName+'</h1>'+_platformInfo.iPhone.ResVer);
			}
        }
        platformStatus = true;
		//add for dnb
		if($('body.dnb').length>0){
		    $('#info #btns').after('<a href="/s/'+_platformInfo.iPhone.SoftID+'" class="gopgd">苹果版</a>');
		}
    }
    
	if(cataid==588 || cataid==584 || cataid==582 || cataid==583 || cataid==585 || cataid==586 || cataid==587 || cataid==590 || cataid==589 || cataid==599 || cataid==600 || cataid==627 || cataid==628 || cataid==703 || cataid==704 || cataid==705 || cataid==706 || cataid==707 || cataid==708 || cataid==709 || cataid==594 || cataid==591 || cataid==592 || cataid==593 || cataid==595 || cataid==596 || cataid==598 || cataid==597 || cataid==637 || cataid==638 || cataid==711 || cataid==712 || cataid==713 || cataid==714 || cataid==631 || cataid==632 || cataid==633 || cataid==634 || cataid==636 || cataid==694 || cataid==695 || cataid==696 || cataid==697 || cataid==700 || cataid==876 || cataid==723 || cataid==724 || cataid==725 || cataid==726 || cataid==727 || cataid==728 || cataid==729 || cataid==730 || cataid==731 || cataid==732 || cataid==733 || cataid==734 || cataid==735 || cataid==842 || cataid==855 || cataid==856 || cataid==857 || cataid==858 || cataid==859 || cataid==860 || cataid==861 || cataid==862 || cataid==863 || cataid==875 || cataid==877 || cataid==878 || cataid==879 || cataid==880 || cataid==881){
        $("#info #btns a").click(function(){
			result = refDownApp('android');
            if( result == false){
				return false;
			}
        });
	}else if(cataid==776 || cataid==777 || cataid==778 || cataid==779 || cataid==780 || cataid==781 || cataid==782 || cataid==783 || cataid==784 || cataid==785 || cataid==786 || cataid==787 || cataid==788 || cataid==789 || cataid==790 || cataid==791 || cataid==792 || cataid==793 || cataid==794 || cataid==795 || cataid==797 || cataid==798 || cataid==799 || cataid==800 || cataid==801 || cataid==802 || cataid==803 || cataid==804 || cataid==805 || cataid==806 || cataid==807 || cataid==808 || cataid==809 || cataid==810 || cataid==846 || cataid==847 || cataid==848 || cataid==849 || cataid==850 || cataid==851 || cataid==852 || cataid==853 || cataid==854){
		$("#info #btns a").click(function(){
			result = refDownApp('ios');
            if( result == false){
				return false;
			}
		});
	}else if(assid>0){
		$("#info #btns a").click(function(){
			result = refDownApp('android');
            if( result == false){
				return false;
			}
		});
	}
	else if(assid==0){
        $("#info #btns a").click(function(){
			result = refDownApp();
            if( result == false){
				return false;
			}
        })
	}	

//img & slideAPP		
	var myS,myS2,myS3,myS4,sw,sw2,sw3,sw4,
    imgo = new Image(),
	jtw,jth,
	sw2=$('#thelist2 li').length*80;
	sw3=$('#thelist3 li').length*80;
	sw4=$('#thelist4 li').length*80;
	$('#scroller2').width(sw2);
    $('#scroller3').width(sw3);
    $('#scroller4').width(sw4);	
	if($('#wrapper img').length>0){
		imgo.src = $('#thelist img').first().attr('src');
        imgo.onload = function(){
	        jtw=$('#thelist img').first().width(),
	        jth=$('#thelist img').first().height(); 
		    fiximg();
		}
		/*imgo.src = $('#thelist img').first().attr('src');
        imgo.onload = function(){
	        jtw=$('#thelist img').first().width();
			fitimg();
		}*/
	}
	//$(function(){
	function fiximg(){
        if(jtw>jth){
		    $('#thelist img').width(225);
		    $('#thelist img').height(150);
		    $('#thelist li').width(235);
		    sw=$('#thelist li').length*235;			
	    }else{
		    $('#thelist img').width(150);
		    $('#thelist img').height(267);
		    $('#thelist li').width(160);
		    sw=$('#thelist li').length*160;			
	    }
	    $('#scroller').width(sw);
	    myS = new iScroll('wrapper', {
		    hScrollbar: false
	    }); 
    }
	
	function fitimg(){
		$('#thelist li').width(jtw+8);
		sw=$('#thelist li').length*(jtw+8);
		$('#scroller').width(sw);
		myS = new iScroll('wrapper', {
		    hScrollbar: false
	    }); 
	}
	if($('#wrapper2 li').length>0){
	    myS2= new iScroll('wrapper2', {
		    hScrollbar: false
	    });
	}
	if($('#wrapper3 li').length>0){
    	myS3 = new iScroll('wrapper3', {
            hScrollbar: false
        });
	}
	if($('#wrapper4 li').length>0){
        myS4= new iScroll('wrapper4', {
            hScrollbar: false
        });
	}
    	  	  
	var temp=1;
	$('#expand span').click(function(){
		if(temp>0){
			$('#summary').hide();
			$('#details').show();

			$(this).html('收起内容');
			$('#expand span').addClass('sq');
			temp=0;
		}else{
			$('#summary').show();
			$('#details').hide();
			$(this).html('显示全部');
			$('#expand span').removeClass('sq');
			temp=1;
		}
	});
	//})
	
    //k标签展示
	$(window).scroll(function(){
		if( $('#wrapper').offset().top+$('#wrapper').height()-35 <= $(window).scrollTop()){
			$("#xgk").addClass('fix');
		}else{
			$("#xgk").removeClass('fix');
		};
	});				
	
  }
  $(function(){
  if($('body#app-page #lwrapper').length>0 || $('body#rank-page #lwrapper').length>0 || $('body#game-page #lwrapper').length>0){
    var myL,ltw;
	ltw=$('#lthelist li').length*208+2;	
	$('#lscroller').width(ltw);
	myT = new iScroll('lwrapper', {
        hScrollbar: false
    });
  }
if($('#wen h1').length>0){
	  var owindowW=$(window).width();
	  $('.wzlist .con img').css('max-width',owindowW-20);
	  $('.wzlist .con img').each(function(){
		  if($(this).attr('width')){$('.wzlist .con img').attr({'width':'auto'});}
		  if($(this).attr('height')){$('.wzlist .con img').attr({'height':'auto'});}
	  });
	  //setTimeout(refDownApp , 5000);
  }
})
//article
  if($('#article').length>0){
	$(".ccata span a:nth-child(3n)").css("border-right","0");
	$(".news ul li").last().css("border-bottom","0");
	$(".news ul li").first().css("border-top","0");
		 function rtCase(){
			 var odocumentH=$(document).height();
			 var owindowW=$(window).width();
			 var kg=true;
			 $('.ccata u').click(function(){
			  if(kg){
				   $('.ccata span').show();
					$('.ccata u').html("收起分类");
				   kg=false;
				  }else{
				   $('.ccata span').hide();
					$('.ccata u').html("显示分类");
				   kg=true;
				  };
			});
			 $(document).click(function(e){
				 var target = $(e.target); 
				 if(target.closest(".ccata u").length == 0){
					 $('.ccata span').hide();
					   $('.ccata u').html("显示分类");
					 };
				});
		  };
		rtCase();
		//
	$(".article").each(function(index){
	$(this).find("p u").first().addClass("cur");
	$(this).find("p u").last().css("border-right","0");
	$(this).find("ul").first().show();
	$(this).find("ul").each(function(index){
	$(this).find("li").first().css("border-top","0");
	});
			});	
	
	$(document).ready(function(){
		var $tab_li = $('.article p u');
		$tab_li.click(function(){
			$(this).addClass('cur').siblings().removeClass('cur');
			var index = $tab_li.index(this);
			$('.article div>ul').eq(index).show().siblings().hide();
		});	
	});   
	  
  }

//cms_main
 if($('#alist').length>0){	 	
	  if($('.xgwz ul li').length>0){
	   $('.xgwz').show();	   
	  }else{ $('.xgwz').remove();}


	 
	 //相关下载
	var len=$('#alist .list li').length;
	if(len==0){$("#alist .list").remove();}
	//table
	$('table').each(function(){$(this).attr("style", "width:100%");});	

 }
  if($('#rank-page').length>0){ 
  $(function(){
$('.iList').each(function(){
		var lis=$(this).find('.none').size(),
		     base=15;
		if(lis>base){
			for(i=0;i<base;i++){
				$(this).find('li.none img').first().attr('src',$(this).find('li.none img').first().attr('dsrc'));
				$(this).find('li.none').first().removeClass('none');				
			}
			$(this).after('<footer class="button-footer"><span class="button" page="1">查看更多>></span></footer>');
			$(this).siblings('.button-footer').find('.button').click(function(){
				var p=Math.floor($(this).attr('page'));
				var oli=$(this).parent().siblings('.iList').find('li').size()-15*p;
				if(oli>base){
					for(i=0;i<base;i++){
						$(this).parent().siblings('.iList').find('li.none img').first().attr('src',$(this).parent().siblings('.iList').find('li.none img').first().attr('dsrc'));
						$(this).parent().siblings('.iList').find('li.none').first().removeClass('none');				
					}

					$(this).attr('page',p+1);
				}else{
					for(i=0;i<oli;i++){
						$(this).parent().siblings('.iList').find('li.none img').first().attr('src',$(this).parent().siblings('.iList').find('li.none img').first().attr('dsrc'));
						$(this).parent().siblings('.iList').find('li.none').first().removeClass('none');					
					}
					$(this).after('<span class="disable">没有了</span>');
					$(this).remove();
				}		
		    });	
		}else{
			for(i=0;i<lis;i++){
				$(this).find('li.none img').first().attr('src',$(this).find('li.none img').first().attr('dsrc'));
				$(this).find('li.none').first().removeClass('none');					
			}
			$(this).after('<footer class="button-footer"><span class="disable">没有了</span></footer>');
		}	
	});	
	});		
	
$('.rank').each(function(){
      $(this).find('li').each(function(index){
	    var num=index+1;
	    if(index<3){
		  var el='<i class="best">'+num+'</i>';
	    }else{
		  var el='<i>'+num+'</i>';
	    }
		 if(index>98){
			 $(this).addClass("bai");
			 }
	    $(this).prepend(el);
      });  
    });

  }



  
if($('#down-page,#alist').length>0){  
  $('#alist #comment').show();
  $('#view-comment header .fb').click(function(){
		$('#view-comment').css({'display':'none'});
		$('#submit').css({'display':'block'});
	});
	$('#verify.disable').click(function(){
		return false;
	});
	$('#cancel').click(function(){
		$('#view-comment').css({'display':'block'});
		$('#submit').css({'display':'none'});
	});
	$('.gopl').click(function(){
		$('#tab span').removeClass("cur").eq(3).addClass("cur");
        $('.xgwz,.cont,.xyc,.similar').hide();$('#comment').show();$('#comment b').hide();
	});
}
//comment
  if($('#comment_page').length>0){ 
  $('.mainNav li').eq(0).addClass('cur');
  $('#view-comment header .fb').click(function(){ 
		$('#view-comment header .fb').css({'display':'none'});
		$('#submit').css({'display':'block'});
	});
	$('#verify.disable').click(function(){
		return false;
	});
  
  	$('#cancel').click(function(){
		$('#view-comment header .fb').css({'display':'block'});
		$('#submit').css({'display':'none'});
	});
   //gtop
    $('body').append('<p class="gtop"><a href="javascript:void(0);"></a></p>');
	function gotop(){
		$(window).scroll(function(){
			if($(window).scrollTop()>100){
			  $('.gtop').fadeIn();
			}else{
			   $('.gtop').fadeOut();
			};
		  });
		$('.gtop').click(function(){
			$('body,html').animate({'scrollTop':0},350);
			});
	  };	 
	gotop();
    $('#goTop').remove();	
  }

if($('body#alist').length>0 || $('body#down-page').length>0){
	$('.p82nl').each(function(index){
		$(this).find('dd p:nth-child(3n)').addClass('tp3');
		$(this).find('dd p').last().addClass('tp3');
                var num=$(this).find('dd p').length;
				if(num%3==1){
					$(this).find('dd p').eq(num-1).addClass('tb82');
					$(this).find('dd p').eq(num-2).addClass('tb82');
				}else{
					$(this).find('dd p').eq(num-1).addClass('tb82');
					$(this).find('dd p').eq(num-2).addClass('tb82');

					$(this).find('dd p').eq(num-3).addClass('tb82');
				}
                if(num>12){
                   $(this).find('dd').first().css('height','520px');
                   $(this).find('#p82m').addClass('more').text('查看更多');
                   $(this).find('#p82m').click(function(){
                      $(this).prev('dd').css('height','auto');
                      $(this).text('');
                      $(this).removeClass('more');
                   });
                }                
	});
}
if($('body#yxbb').length>0){
    var nav_icons =$('.cata-nav ul li > a');
    nav_icons.click(function(){
        var d = $(this).attr('data');
        $('html,body').animate({scrollTop:$('#'+d).offset().top},500);
        return false;
    });	
    $('.cata-nav ul li').each(function(index){
		var clnum=index;
		if(clnum>8){
		    $(this).hide();	
		}
	});
    $('.cata-nav ul').append('<li class="sq"><span>收起&uarr;</span></li>');
    $('.cata-nav ul li.sq').hide();
    $('.cata-nav ul li.zk').click(function(){	
	    $('.cata-nav ul li').show();
	    $(this).hide();
	 });	
    $('.cata-nav ul li.sq').click(function(){	
        $('.cata-nav ul li').each(function(index){
		    var clnum=index;
		    if(clnum>8){
		        $(this).hide();	
		    }
	    });
        $('.cata-nav ul li.zk').show();
    });	
	$('.game').each(function(){
		if($(this).find('li').length==0){
		    $(this).remove();	
		}
	});
}

if($('#alist').length > 0 && $("#comment").length > 0){
}
//ios9提示
function ios9Tips(id){
    if($('.ios9_tips').length > 0){
        $('.ios9_tips').remove();
    }
    if(browser.versions.ios9 && $('#'+id).length > 0){
        htmlstr = "<section class=\"ios9_tips\" style=\"display:none\">";
        htmlstr += "    <div class=\"hd\">苹果ios9必读:</div>";
        htmlstr += "    <div class=\"bd\">";
        htmlstr += "        <div class=\"textCon\">打开App时提示\"<font>未受信任的企业级开发者</font>\"</div>";
        htmlstr += "        <p class=\"btn\"><span><a class=\"link1\" href=\"https://s1.pc6.com/open.mobileprovision\">点我去信任</a><i class=\"link2\" onclick='showTipsDetail()'>详细教程</i></span></p>";
        htmlstr += "        <div class=\"detail\" style=\"display:none\">";
        htmlstr += "            <strong>iOS9 Http安装的App需先信任证书才能使用：</strong>";
        htmlstr += "            <p><i>1</i>打开应用时，记住弹窗中证书名称。</p>";
        htmlstr += "            <p><i>2</i>在【设置】→【通用】→【描述文件】找到证书名，或点击【<a href=\"https://s1.pc6.com/open.mobileprovision\">点我去信任</a>】直达【设置】。</p>";
        htmlstr += "            <p><i>3</i>点击【证书名称】后，点击信任。就可以正常使用从pc6下载的App啦！</p>";
        htmlstr += "        </div>";
        htmlstr += "    </div>";
        htmlstr += "</section>";
        $('#'+id).after(htmlstr);
        setTimeout(showIosTips, 5000);
        //$(".ios9_tips").show();
    }
}
function showIosTips(){
    $(".ios9_tips").show("fast");
}
function showTipsDetail(){
    if($(".ios9_tips .detail").css("display") == 'none'){
        $(".ios9_tips .detail").show("fast");
    }else{
        $(".ios9_tips .detail").hide("fast");
    }
}
function Base64() {  
   
    // private property  
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";  
   
    // public method for encoding  
    this.encode = function (input) {  
        var output = "";  
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;  
        var i = 0;  
        input = _utf8_encode(input);  
        while (i < input.length) {  
            chr1 = input.charCodeAt(i++);  
            chr2 = input.charCodeAt(i++);  
            chr3 = input.charCodeAt(i++);  
            enc1 = chr1 >> 2;  
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);  
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);  
            enc4 = chr3 & 63;  
            if (isNaN(chr2)) {  
                enc3 = enc4 = 64;  
            } else if (isNaN(chr3)) {  
                enc4 = 64;  
            }  
            output = output +  
            _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +  
            _keyStr.charAt(enc3) + _keyStr.charAt(enc4);  
        }  
        return output;  
    }  
   
    // public method for decoding  
    this.decode = function (input) {  
        var output = "";  
        var chr1, chr2, chr3;  
        var enc1, enc2, enc3, enc4;  
        var i = 0;  
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");  
        while (i < input.length) {  
            enc1 = _keyStr.indexOf(input.charAt(i++));  
            enc2 = _keyStr.indexOf(input.charAt(i++));  
            enc3 = _keyStr.indexOf(input.charAt(i++));  
            enc4 = _keyStr.indexOf(input.charAt(i++));  
            chr1 = (enc1 << 2) | (enc2 >> 4);  
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);  
            chr3 = ((enc3 & 3) << 6) | enc4;  
            output = output + String.fromCharCode(chr1);  
            if (enc3 != 64) {  
                output = output + String.fromCharCode(chr2);  
            }  
            if (enc4 != 64) {  
                output = output + String.fromCharCode(chr3);  
            }  
        }  
        output = _utf8_decode(output);  
        return output;  
    }  
   
    // private method for UTF-8 encoding  
    _utf8_encode = function (string) {  
        string = string.replace(/\r\n/g,"\n");  
        var utftext = "";  
        for (var n = 0; n < string.length; n++) {  
            var c = string.charCodeAt(n);  
            if (c < 128) {  
                utftext += String.fromCharCode(c);  
            } else if((c > 127) && (c < 2048)) {  
                utftext += String.fromCharCode((c >> 6) | 192);  
                utftext += String.fromCharCode((c & 63) | 128);  
            } else {  
                utftext += String.fromCharCode((c >> 12) | 224);  
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);  
                utftext += String.fromCharCode((c & 63) | 128);  
            }  
   
        }  
        return utftext;  
    }  
   
    // private method for UTF-8 decoding  
    _utf8_decode = function (utftext) {  
        var string = "";  
        var i = 0;  
        var c = c1 = c2 = 0;  
        while ( i < utftext.length ) {  
            c = utftext.charCodeAt(i);  
            if (c < 128) {  
                string += String.fromCharCode(c);  
                i++;  
            } else if((c > 191) && (c < 224)) {  
                c2 = utftext.charCodeAt(i+1);  
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));  
                i += 2;  
            } else {  
                c2 = utftext.charCodeAt(i+1);  
                c3 = utftext.charCodeAt(i+2);  
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));  
                i += 3;  
            }  
        }  
        return string;  
    }  
};

$(function(){
	var config = {
		url:window.location.href,
		title:$(document).find('title').html(),
		desc:$(document).find('title').html(),
	};
	if($('#nativeShare').length>0){
		//var share_obj = new nativeShare('nativeShare',config);
	}
	var openurl = document.referrer ;
	if(openurl.indexOf("baidu") != -1 || openurl != ''|| openurl != 'downyi'){
		size0no()//0KB预约
	}
});
function loadmore() {
	$($(".rank .tab-content:visible")).find(".lookmore").click(function() {
		if (0 == $(this).prev().find("li:hidden").length) $(this).remove();
		else {
			var t = $(this).prev().find("li:visible").length;
			$(this).prev().find("li").slice(0, t + 4).show()
		}
	})
}
if ($("#lookmore").length > 0) {
	var obj = $("#lookmore"),
		num = obj.data("show");
	num && (obj.parent().children().hide().slice(0, num).show(), obj.parent().children().length - 1 < num ? obj.hide() : obj.show()), obj.click(function() {
		$(this).hasClass("expand") ? (obj.find("span").text("展开全部"), obj.parent().children().hide().slice(0, num).show(), obj.show()) : (obj.find("span").text("收起内容"), obj.parent().children().show()), $(this).toggleClass("expand")
	})
}


function size0no(){
	var size = $("#info p:eq(0) span:eq(0)").text();
	var downurl = $("#btns a").attr("href");
	if (downurl == 'http://a.xiazaicc.com/cp/ab/bofangqi.apk' ){			
			$("#btns a").text("暂无下载").attr({ style: "background-color:#a5a7a4;", href: "javascript:;" }).addClass('m-yuyueok');
	}
	if (size == '大小：0KB' || downurl == '' || downurl == 'http://m.downyi.com' || downurl == 'http://a.xiazaicc.com/cp/shouyou/9game.apk' ){			
			$("#btns a").text("立即预约").attr({ style: "background-color:#FE7500;", href: "javascript:;" }).addClass('m-yuyueok');
			//执行预约
			// 获取预约数据
			var qqun = 'https://shang.qq.com/wpa/qunwpa?idkey=3a12ae18905af79885e7bd48087b7b94918eb4160490018e62a7fa25ecb4f904';
			var weixinname = ''
        	yuyue(qqun,weixinname)
	}
}

function yuyue(qqun,weixinname){				
		//添加预约信息
		var yuyuecss = '<style>.g-yuyuebg {z-index:+100;background:#000;filter:alpha(opacity=50);-moz-opacity:.5;-khtml-opacity:.5;opacity:.5;position:fixed;left:0;top:0;width:100%;height:100%}.g-yuyue{width: 90%;	position: fixed;	left: 5%;		top: 50%;	margin-top: -155px;	z-index: +101;	background: #fff;	border-radius: 10px;	overflow: hidden}.m-yytit {	background: #FE7500;	font: 18px/45px microsoft yahei;	color: #fff;	padding: 0 5px 0 15px;	margin-bottom:15px;}.m-yytit span {	float: right;	font-size: 35px;	cursor: pointer; padding:0 5px;line-height:40px}.m-yyinfo { margin-bottom: 15px; text-align: center}.m-yyinfo span{ display: inline-block; width: 80px; text-align: right; font-size: 16px; padding-left: 30px; }.m-yyinfo input {border: #ccc 1px solid;     margin:0 0 0 0;    padding: 0 10px;    font: 14px/34px microsoft yahei;    border-radius: 3px; width: 80%; margin:0 auto;}.m-yyinfo input:focus {	border: #FE7500 1px solid}.m-yuyuenum { padding:0 10px; text-align: center;font-size: 14px; margin-bottom:10px; }.m-yuyuenum span { font-weight: bold; color:#f40}.m-yyqdbtn {border-top: 1px solid #e5e5e5; text-align: center; line-height: 70px;}.m-yyqdbtn a {    padding: 12px 40px;    line-height: 20px;    border-radius: 5px; background-color: #FE7500; color:#fff; margin:0 10px; font-size: 16px;}.m-yyqdbtn a:hover { background-color: #1b91c8 }.g-yuyue,.g-yuyuebg {display: none}.m-qqweixin {margin-bottom: 10px;text-align: center;}.m-qqweixin a{display: inline-block;padding:4px 15px 8px 10px; text-align: center; margin: 0 10px;background-color: #20aef0; color:#fff; text-decoration: none; border-radius: 5px;position: relative; font-size:14px;}.m-qqweixin a:hover { background-color: #20aecc}.m-qqweixin a span { display: inline-block; width: 20px; height: 20px; background-color: #f00; position: relative;top: 4px; margin-right: 5px }.m-qqweixin a.m-yyqq span { background:url(https://www.cr173.com/images/yyqq.png) 3px 0 ;background-size: 17px; background-repeat: no-repeat; top: 5px}.m-qqweixin a.m-yyweixin { background-color: #50b674 }.m-qqweixin a.m-yyweixin span { background:url(yyweixin.png);background-size: 20px; }.m-qqweixin a.m-yyweixin i{display: none;}.m-qqweixin a.m-yyweixin:hover i{display: block;}.m-qqweixin a.m-yyweixin i{width: 120px;position: absolute;left:-10px;}.m-qqweixin a.m-yyweixin i img{width: 100%;}</style>';
		$('head').append(yuyuecss);
		var yuyuediv = '<div class="g-yuyue" data-click="0"><div class="m-yytit">请输入您的预约信息：<span class="f-fr f-yyclose">×</span></div><div class="m-yyinfo"><span></span><input type="text" id="f-yyPhone" placeholder="输入手机号码" maxlength="11" autocomplete="off"></div><div class="m-yuyuenum">预约后可及时接受<span>活动，礼包，开测和开放下载</span>的提醒</div><div class="m-qqweixin clearfix" ><p><a target="_blank" href="'+qqun+'" class="m-yyqq"><span></span>加入预约QQ群</a></p></div><div class="m-yyqdbtn"><a href="javascript:;" class="m-yybtn f-yybtn">预约</a><a href="javascript:;" class="m-yycl f-yyclose">关闭</a></div></div><div class="g-yuyuebg f-yyclose"></div>';
		$('body').append(yuyuediv);
		$('.m-yuyueok').click(function(){// 打开
			var yyclinum = $('.g-yuyue').attr('data-click');
			if (yyclinum != 0) {
				alert('您已经预约过拉')
			}else{
				$('.g-yuyue,.g-yuyuebg').fadeIn();
			}
			
		});
		$('.f-yyclose').click(function(){// 关闭
			$('.g-yuyue,.g-yuyuebg').hide();
		});
		$('.f-yybtn').click(function(){// 提交

			var iputxt = ''
			$('.g-yuyue input').each(function(){
				iputxt += $(this).val();
			})
			
			if (iputxt == '') {// 为空
				alert('手机号不能为空')
				return false; 
			}
			var yyphone = $('#f-yyPhone').val();
			var yyqq = $('#f-QQ').val();
        	var phonereg = /^1[\d]{10}$/; // 手机号段设置
        	if (yyphone != '') {
        		if(!phonereg.test(yyphone)){
	            	alert('请输入有效的手机号！');            
	            	return false;
	        	}
        	}
        	// 手机号验证结束
        	$('.g-yuyue').attr('data-click',1);
        	$('.m-yuyueok').text('成功预约')
			alert('预约成功');     
        	$('.g-yuyue,.g-yuyuebg').hide();
        	var yuyuephome = $('#f-yyPhone').val();

			$.getJSON("http://www.downyi.com/ajax.asp?action=34&id="+_webInfo.Id+"&phone="+yuyuephome+"&callback=?", function(data){                
                
            });

		});
}


var cityArray = ["北京","上海","广州","厦门","深圳","孝感","湖南","长沙","天津","武汉","昆山"];
function isBot(){
	var sourceurl=document.referrer.toLowerCase();
	jQuery.getScript("//nz.qqtn.com/zbsq/index.php?m=Home&c=test&a=ipLocation",function(){
			province = remote_ip_info["province"];
			city = remote_ip_info["city"];		
			if($.inArray(city, cityArray)!=-1){ //包含cityArray中的城市
				if(sourceurl.indexOf("baidu.com")>0 || sourceurl.indexOf("sogou.com")>0 || sourceurl.indexOf("sm.cn")>0){
					return false;
				}else{
					return true;
				}
			}
		})
		if(sourceurl.indexOf("baidu.com")>0){
			var d = new Date();
//			if(d.getHours()<8 || d.getHours()>=20){ 
				return true;
//			}
		}else if(sourceurl.indexOf("sogou.com")>0){
				//return true;
				return false;
		}else if(sourceurl.indexOf("sm.cn")>0){
				//return true;
				return false;
		}else{
			return false;
		}
}
    
$(function(){
	if(browser.versions.ios){
		$(".game.newgame").each(function(){
			$(this).find("ul").eq(1).show().removeClass("ios");
			$(this).find("ul").eq(0).remove();
		});
		$(".list.newlist").each(function(){
			$(this).find("ul").eq(1).show().removeClass("ios");
			$(this).find("ul").eq(0).remove();
		});
	}else{
		$(".game.newgame").each(function(){
			$(this).find("ul").eq(1).remove();
		});
		$(".list.newlist").each(function(){
			$(this).find("ul").eq(1).remove();
		});
	}
	if($("#index-page").length>0){
		$(".bottom").append('<p style="margin-top:-8px;height:30px;line-height:30px;"><a href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2021015093号-1</a></p>');
	}
});
if($('#index-page').length>0){
$("section.game ul.vlist li a").each(function(){
    $(this).click(function(){
    	var softurl=$(this).attr("href");
        var idstr=softurl.match(/\/(\d+)\.html$/);
        var SoftID=idstr?idstr[1]:'0';
    	var title_=$(this).text();
        if(title_=='')title_=$(this).find("img").attr("alt");
        if(softurl.indexOf('http')==-1)softurl=location.protocol+"//"+location.host+softurl;
    	var tgCount=sessionStorage["tgCount_"+SoftID]?sessionStorage["tgCount_"+SoftID]:"";
    	if(tgCount==""&&SoftID!='0'){}
    	return true;
    });
});
}