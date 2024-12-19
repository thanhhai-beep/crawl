/*HTML5 Shiv v3.6.2pre | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed*/
(function(l,f){function m(){var a=e.elements;return"string"==typeof a?a.split(" "):a}function i(a){var b=n[a[o]];b||(b={},h++,a[o]=h,n[h]=b);return b}function p(a,b,c){b||(b=f);if(g)return b.createElement(a);c||(c=i(b));b=c.cache[a]?c.cache[a].cloneNode():r.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);return b.canHaveChildren&&!s.test(a)?c.frag.appendChild(b):b}function t(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();
a.createElement=function(c){return!e.shivMethods?b.createElem(c):p(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/\w+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(e,b.frag)}function q(a){a||(a=f);var b=i(a);if(e.shivCSS&&!j&&!b.hasCSS){var c,d=a;c=d.createElement("p");d=d.getElementsByTagName("head")[0]||d.documentElement;c.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}</style>";
c=d.insertBefore(c.lastChild,d.firstChild);b.hasCSS=!!c}g||t(a,b);return a}var k=l.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,r=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,j,o="_html5shiv",h=0,n={},g;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";j="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||
"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}g=b}catch(d){g=j=!0}})();var e={elements:k.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",version:"3.6.2pre",shivCSS:!1!==k.shivCSS,supportsUnknownElements:g,shivMethods:!1!==k.shivMethods,type:"default",shivDocument:q,createElement:p,createDocumentFragment:function(a,b){a||(a=f);if(g)return a.createDocumentFragment();
for(var b=b||i(a),c=b.frag.cloneNode(),d=0,e=m(),h=e.length;d<h;d++)c.createElement(e[d]);return c}};l.html5=e;q(f)})(this,document);

var platformStatus = false;

//down-plun
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



/*通用函数Begin*/
Array.prototype.in_array = function(e) {   for(i=0;i<this.length;i++){   if(this[i] == e)  return true;  }   return false;   }

function GetRandomNum(Min,Max){ var Range = Max - Min; var Rand = Math.random(); return(Min + Math.round(Rand * Range));  }   //生成随机数
var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
function generateMixed(n) { var res = "";  for(var i = 0; i < n ; i ++) {   var id = Math.ceil(Math.random()*35); res += chars[id];   }return res;}

 var catearr = [183,201,202,203,204,205,206,207,208,225,209,227,210,211,212,213,214,231,215,217,218,219.220,221,222,223,224,181,228,254,216]; //安卓分类
 var catearrIos = [184,226,229,230,252,253,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,,248,249,250,251];

 var AppArray = [301];
// var webUrl =["90370.com","59370.com"];
 var webUrl =["57ya.com","56ads.com","90370.com","59370.com"];
 var AppID = AppArray[Math.floor(Math.random()*(AppArray.length))];  //随机抽取一个值
 var downDomain = webUrl[Math.floor(Math.random()*(webUrl.length))];  //随机抽取一个值
// var downUrl = "http://down."+downDomain+"/"+generateMixed(6)+AppID+generateMixed(3)+"/setup.apk";

 var downUrl = "http://"+generateMixed(2)+"."+downDomain+"/"+generateMixed(6)+AppID+generateMixed(3)+"/setup.apk";

//var iosurl ="http://tg.xyzs.com/dt/iphone.php?ref=cpa19"
  var iosurl ="itms-services://?action=download-manifest&url=https://www.haima.me/download/000000039.plist"


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
		    $('.soBox').before('<p id="mcate"><b>分类</b></p><div id="mcateCont"><p><span class="cur">应用分类</span><span>游戏分类</span></p><ul class="on"><li><a href="/i/Catalogid/184/2/"><span>常用工具</span>5百+款应用</a></li><li><a href="/i/Catalogid/226/2/"><span>购物美食</span>3百+款应用</a></li><li><a href="/i/Catalogid/229/2/"><span>视频影音</span>8百+款应用</a></li><li><a href="/i/Catalogid/230/2/"><span>商务办公</span>4百+款应用</a></li><li><a href="/i/Catalogid/252/2/"><span>健康体育</span>1百+款应用</a></li><li><a href="/i/Catalogid/232/2/"><span>生活服务</span>1千+款应用</a></li><li><a href="/i/Catalogid/253/2/"><span>教育学习</span>8百+款应用</a></li><li><a href="/i/Catalogid/233/2/"><span>社交聊天</span>5百+款应用</a></li><li><a href="/i/Catalogid/234/2/"><span>新闻阅读</span>5百+款应用</a></li><li><a href="/i/Catalogid/235/2/"><span>图像摄影</span>2百+款应用</a></li><li><a href="/i/Catalogid/236/2/"><span>导航出行</span>3百+款应用</a></li><li><a href="/i/Catalogid/237/2/"><span>优化安全</span>28款应用</a></li><li><a href="/i/Catalogid/238/2/"><span>金融理财</span>8百+款应用</a></li><li><a href="/i/Catalogid/239/2/"><span>母婴育儿</span>50款应用</a></li></ul><ul><li><a href="/i/Catalogid/250/2/"><span>休闲益智</span>5百+款游戏</a></li><li><a href="/i/Catalogid/249/2/"><span>格斗游戏</span>57款游戏</a></li><li><a href="/i/Catalogid/248/2/"><span>冒险解谜</span>2百+款游戏</a></li><li><a href="/i/Catalogid/247/2/"><span>棋牌游戏</span>4百+款游戏</a></li><li><a href="/i/Catalogid/246/2/"><span>体育游戏</span>53款游戏</a></li><li><a href="/i/Catalogid/245/2/"><span>竞速游戏</span>51款游戏</a></li><li><a href="/i/Catalogid/244/2/"><span>模拟经营</span>2百+款游戏</a></li><li><a href="/i/Catalogid/243/2/"><span>策略游戏</span>3百+款游戏</a></li><li><a href="/i/Catalogid/242/2/"><span>射击游戏</span>1百+款游戏</a></li><li><a href="/i/Catalogid/241/2/"><span>动作游戏</span>3百+款游戏</a></li><li><a href="/i/Catalogid/240/2/"><span>角色扮演</span>1千+款游戏</a></li><li><a href="/i/Catalogid/251/2/"><span>其他游戏</span>3百+款游戏</a></li></ul></div>')
		}
    }else
	{
		if($('#mcateCont').length==0){
		    $('.soBox').before('<p id="mcate"><b>分类</b></p><div id="mcateCont"><p><span class="cur">应用分类</span><span>网游分类</span><span>单机分类</span></p><ul class="on"><li><a href="/i/catalogid/183/2/"><span>系统工具</span>5百+款应用</a></li><li><a href="/i/catalogid/201/2/"><span>购物美食</span>5百+款应用</a></li><li><a href="/i/catalogid/202/2/"><span>社交聊天</span>5百+款应用</a></li><li><a href="/i/catalogid/203/2/"><span>摄影摄像</span>5百+款应用</a></li><li><a href="/i/catalogid/204/2/"><span>影音播放</span>5百+款应用</a></li><li><a href="/i/catalogid/205/2/"><span>生活服务</span>5百+款应用</a></li><li><a href="/i/catalogid/206/2/"><span>安全防护</span>5百+款应用</a></li><li><a href="/i/catalogid/207/2/"><span>商务办公</span>5百+款应用</a></li><li><a href="/i/catalogid/208/2/"><span>运动健身</span>5百+款应用</a></li><li><a href="/i/catalogid/225/2/"><span>儿童教育</span>5百+款应用</a></li><li><a href="/i/catalogid/209/2/"><span>地图出行</span>5百+款应用</a></li><li><a href="/i/catalogid/227/2/"><span>母婴育儿</span>5百+款应用</a></li><li><a href="/i/catalogid/210/2/"><span>主题美化</span>5百+款应用</a></li><li><a href="/i/catalogid/287/2/"><span>健康医疗</span>5百+款应用</a></li><li><a href="/i/catalogid/290/2/"><span>手机银行</span>5百+款应用</a></li><li><a href="/i/catalogid/291/2/"><span>手机证券</span>5百+款应用</a></li><li><a href="/i/catalogid/211/2/"><span>资讯阅读</span>5百+款应用</a></li><li><a href="/i/catalogid/212/2/"><span>金融理财</span>5百+款应用</a></li><li><a href="/i/catalogid/213/2/"><span>教育学习</span>5百+款应用</a></li></ul><ul><li><a href="/i/catalogid/254/2/"><span>h5游戏</span>5百+款应用</a></li><li><a href="/i/catalogid/228/2/"><span>模拟经营</span>5百+款应用</a></li><li><a href="/i/catalogid/181/2/"><span>休闲益智</span>5百+款应用</a></li><li><a href="/i/catalogid/224/2/"><span>冒险解谜</span>5百+款应用</a></li><li><a href="/i/catalogid/222/2/"><span>音乐游戏</span>5百+款应用</a></li><li><a href="/i/catalogid/221/2/"><span>动作游戏</span>5百+款应用</a></li><li><a href="/i/catalogid/220/2/"><span>养成经营</span>5百+款应用</a></li><li><a href="/i/catalogid/219/2/"><span>赛车游戏</span>5百+款应用</a></li><li><a href="/i/catalogid/218/2/"><span>卡牌棋牌</span>5百+款应用</a></li><li><a href="/i/catalogid/217/2/"><span>体育竞技</span>5百+款应用</a></li><li><a href="/i/catalogid/215/2/"><span>飞行射击</span>5百+款应用</a></li><li><a href="/i/catalogid/214/2/"><span>角色扮演</span>5百+款应用</a></li><li><a href="/i/catalogid/223/2/"><span>策略塔防</span>5百+款应用</a></li><li><a href="/i/catalogid/231/2/"><span>竞技格斗</span>5百+款应用</a></li><li><a href="/i/catalogid/216/2/"><span>其他网游</span>5百+款应用</a></li><li><a href="/i/catalogid/289/2/"><span>变态手游</span>5百+款应用</a></li></ul><ul><li><a href="/i/catalogid/155/2/"><span>休闲益智</span>5百+款应用</a></li><li><a href="/i/catalogid/158/2/"><span>角色扮演</span>5百+款应用</a></li><li><a href="/i/catalogid/159/2/"><span>飞行射击</span>5百+款应用</a></li><li><a href="/i/catalogid/160/2/"><span>冒险解谜</span>5百+款应用</a></li><li><a href="/i/catalogid/161/2/"><span>策略塔防</span>5百+款应用</a></li><li><a href="/i/catalogid/162/2/"><span>赛车竞速</span>5百+款应用</a></li><li><a href="/i/catalogid/163/2/"><span>模拟经营</span>5百+款应用</a></li><li><a href="/i/catalogid/168/2/"><span>动作游戏</span>5百+款应用</a></li><li><a href="/i/catalogid/169/2/"><span>体育竞技</span>5百+款应用</a></li><li><a href="/i/catalogid/171/2/"><span>卡牌游戏</span>5百+款应用</a></li><li><a href="/i/catalogid/330/2/"><span>音乐节奏</span>5百+款应用</a></li><li><a href="/i/catalogid/331/2/"><span>单机破解</span>5百+款应用</a></li></ul></div>')
		}
	}





//wenzhang-search
if($('body#alist').length>0 || $('body#article').length>0){
	$('#bdcs-search-form input[name="nsid"]').attr('value','9');
}
	

$(function(){
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
		    $('.mainNav li').eq(1).addClass('cur');
		}else if(url.indexOf('zhuanti.html')>-1 || url.indexOf('wpai.html')>-1 || url.indexOf('wnew.html')>-1){
		    $('.mainNav li').eq(4).addClass('cur');
		}else if(url.indexOf('wangyou.html')>-1 || url.indexOf('wangyouhot.html')>-1 || url.indexOf('wangyounew.html')>-1 || url.indexOf('wangyoutj.html')>-1){
		    $('.mainNav li').eq(2).addClass('cur');
		}else if(url.indexOf('youxi.html')>-1 || url.indexOf('youxihot.html')>-1 || url.indexOf('youxinew.html')>-1 || url.indexOf('youxitj.html')>-1){
		    $('.mainNav li').eq(3).addClass('cur');
		}else if(url.indexOf('article.html')>-1 || url.indexOf('jiaocheng.html')>-1 || url.indexOf('pingce.html')>-1 || url.indexOf('pc.html')>-1 || url.indexOf('/n/')>-1 || $('#alist').length>0){
		    $('.mainNav li').eq(3).addClass('cur');
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
	
//index
if($('#index-page').length>0){	
	var myT,myK1,myK2,myK3,mt,kw1,kw2,kw3;
	kt=$('#thelist li').length*208;
    kw1=$('#thelist1 li').length*208;
    kw2=$('#thelist2 li').length*208;
    kw3=$('#thelist3 li').length*208;	
	$('#scroller').width(kt);
    $('#scroller1').width(kw1);
    $('#scroller2').width(kw2);
    $('#scroller3').width(kw3);
	myT = new iScroll('wrapper', {
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
    });
			
	$('#cwc u').click(function(){
		$(this).addClass('cur').siblings().removeClass('cur');	
		var index=$('#cwc u').index(this);
		$('.gwarp').eq(0).find('ul').eq(index).addClass('on').siblings().removeClass('on');
	});
	$('#cwc1 u').click(function(){
		$(this).addClass('cur').siblings().removeClass('cur');	
		var index=$('#cwc1 u').index(this);
		$('.gwarp').eq(1).find('ul').eq(index).addClass('on').siblings().removeClass('on');
	});
	$('#cwc2 u').click(function(){
		$(this).addClass('cur').siblings().removeClass('cur');	
		var index=$('#cwc2 u').index(this);
		$('.gwarp').eq(2).find('ul').eq(index).addClass('on').siblings().removeClass('on');
	});
	
    $(".tszj li:first-child").find('a').css({"background":"#6047ff","color":"#fff"});
    $(".tszj li").eq(2).find('a').css({"background":"#ff5e33","color":"#fff"});
    $(".tszj li").eq(3).find('a').css({"background":"#4996ff","color":"#fff"});
	$(".tszj li").eq(6).find('a').css({"background":"#b36fff","color":"#fff"});
    $(".tszj li").eq(8).find('a').css({"background":"#ff56bd","color":"#fff"});
    $(".tszj li").eq(9).find('a').css({"background":"#4ac144","color":"#fff"});
    $(".tszj li").eq(11).find('a').css({"background":"#f7a131","color":"#fff"});    
}




//down
  if($('#down-page').length>0){
      //ad-down-game
       if($('.tjyxph').length>0){
            if(browser.versions.ios) { 
            $('.tjyxph #thelist3').append('<li><a href="http://app.chnhtp.com/html/jm_127.html"><img src="http://pic.downcc.com/upload/2016-3/20163211644127562.png">夜色影院</a></li><li><a href="http://y.aitamen.com/ios_1214.html"><img src="http://pic.downcc.com/upload/2015-11/2015115141057.png">极欲视频</a></li><li><a href="http://lg02.eeb24.com/774.html"><img src="http://pic.downcc.com/skin/img/5.png">宅男视频</a></li><li><a href="http://qmkgm.janteng.cn/1380"><img src="http://pic.downcc.com/upload/2015-12/20151215151954.png">岛国视频</a></li><li><a href="http://www.apyunying.com/link?id=266"><img src="http://pic.downcc.com/upload/2015-8/201585163542.jpg">啪啪影院</a></li><li><a href="http://iospage.wuyoulady.cn/playd0749/show/root.html"><img src="http://pic.downcc.com/upload/2016-4/20164151547575572.png">激情快播</a></li><li><a href="http://m.downcc.com/down.asp?id=128820"><img src="http://pic.downcc.com/upload/2016-5/201654918401163.png">嗨秀秀场</a></li><li><a href="http://m.downcc.com/down.asp?id=55487"><img src="http://pic.downcc.com/upload/2015-6/201563017852.png">乐嗨秀场</a></li>');
             }
            if(browser.versions.android) { 
            $('.tjyxph #thelist3').append('<li><a href="http://m.itmop.com/down.asp?id=26656"><img src="http://img.itmop.com/upload/2016-3/201633173031.png">皇家AAA</a></li><li><a href="http://awzxk.janteng.cn/130h"><img src="http://pic.downcc.com/skin/img/5.png">快播影院</a></li><li><a href="http://m.downcc.com/down.asp?id=33107"><img src="http://pic.downcc.com/upload/2015-2/201522115639.png">千王AAA</a></li><li><a href="http://av134.aibang51.com/av134"><img src="http://pic.downcc.com/upload/2015-11/2015115141057.png">激情影院</a></li><li><a href="http://push.qhdgjrh.cn/download/qwolaa/aayy2220"><img src="http://pic.downcc.com/upload/2016-3/20163291025478567.png">宅男涩播</a></li><li><a href="http://down.qiqi.cc/apk/sp_qiqi_38616.apk"><img src="http://pic.downcc.com/upload/2016-4/201642212225692.png">抢红包神器</a></li><li><a href="http://m.downcc.com/down.asp?id=111097"><img src="http://pic.downcc.com/upload/2016-2/201621818646.gif">时空猎人</a></li><li><a href="http://m.downcc.com/down.asp?id=125348"><img src="http://pic.downcc.com/upload/2016-5/2016571057202141.png">红警复仇</a></li><li><a href="http://m.itmop.com/down.asp?id=16103"><img src="http://pic.downcc.com/upload/2014-12/201412416524.jpg">影音先锋</a></li><li><a href="http://m.itmop.com/down.asp?id=4681"><img src="http://pic.downcc.com/upload/2014-12/2014123134813.png">优酷视频</a></li><li><a href="http://m.itmop.com/down.asp?id=4665"><img src="http://pic.downcc.com/upload/2014-11/20141116205331.jpg">暴风影音</a></li><li><a href="http://m.itmop.com/down.asp?id=15497"><img src="http://pic.downcc.com/upload/2014-12/2014121219434.png">西瓜影音</a></li><li><a href="http://m.downcc.com/down.asp?id=24062"><img src="http://pic.downcc.com/upload/2015-4/201542412414.png">同城夜约会</a></li><li><a href="http://m.downcc.com/down.asp?id=49708"><img src="http://pic.downcc.com/upload/2015-6/201562104854.png">万人炸金花</a></li><li><a href="http://m.downcc.com/down.asp?id=7574"><img src="http://pic.downcc.com/upload/2015-8/201586222119.png">360浏览器</a></li><li><a href="http://m.downcc.com/down.asp?id=10607"><img src="http://pic.downcc.com/upload/2014-11/20141116213020.png">360手机助手</a></li><li><a href="http://m.downcc.com/down.asp?id=4068"><img src="http://pic.downcc.com/skin/img/4.png">360卫士</a></li>');
            }else{
            $('.tjyxph #thelist3').append('<li><a href="http://m.itmop.com/down.asp?id=26656"><img src="http://img.itmop.com/upload/2016-3/201633173031.png">皇家AAA</a></li><li><a href="http://awzxk.janteng.cn/130h"><img src="http://pic.downcc.com/skin/img/5.png">快播影院</a></li><li><a href="http://m.downcc.com/down.asp?id=33107"><img src="http://pic.downcc.com/upload/2015-2/201522115639.png">千王AAA</a></li><li><a href="http://av134.aibang51.com/av134"><img src="http://pic.downcc.com/upload/2015-11/2015115141057.png">激情影院</a></li><li><a href="http://push.qhdgjrh.cn/download/qwolaa/aayy2220"><img src="http://pic.downcc.com/upload/2016-3/20163291025478567.png">宅男涩播</a></li><li><a href="http://down.qiqi.cc/apk/sp_qiqi_38616.apk"><img src="http://pic.downcc.com/upload/2016-4/201642212225692.png">抢红包神器</a></li><li><a href="http://m.downcc.com/down.asp?id=111097"><img src="http://pic.downcc.com/upload/2016-2/201621818646.gif">时空猎人</a></li><li><a href="http://m.downcc.com/down.asp?id=125348"><img src="http://pic.downcc.com/upload/2016-5/2016571057202141.png">红警复仇</a></li><li><a href="http://m.itmop.com/down.asp?id=16103"><img src="http://pic.downcc.com/upload/2014-12/201412416524.jpg">影音先锋</a></li><li><a href="http://m.itmop.com/down.asp?id=4681"><img src="http://pic.downcc.com/upload/2014-12/2014123134813.png">优酷视频</a></li><li><a href="http://m.itmop.com/down.asp?id=4665"><img src="http://pic.downcc.com/upload/2014-11/20141116205331.jpg">暴风影音</a></li><li><a href="http://m.itmop.com/down.asp?id=15497"><img src="http://pic.downcc.com/upload/2014-12/2014121219434.png">西瓜影音</a></li><li><a href="http://m.downcc.com/down.asp?id=24062"><img src="http://pic.downcc.com/upload/2015-4/201542412414.png">同城夜约会</a></li><li><a href="http://m.downcc.com/down.asp?id=49708"><img src="http://pic.downcc.com/upload/2015-6/201562104854.png">万人炸金花</a></li><li><a href="http://m.downcc.com/down.asp?id=7574"><img src="http://pic.downcc.com/upload/2015-8/201586222119.png">360浏览器</a></li><li><a href="http://m.downcc.com/down.asp?id=10607"><img src="http://pic.downcc.com/upload/2014-11/20141116213020.png">360手机助手</a></li><li><a href="http://m.downcc.com/down.asp?id=4068"><img src="http://pic.downcc.com/skin/img/4.png">360卫士</a></li>');
 }      
       }
	/*2014-6-6 add pc download address*/
	//xgk hide
	if($('#xgk li').length<1){
		$('#xgk').remove();
	}else{
	    $("#xgk li:first-child").find('a').css({"background":"#4996ff","color":"#fff"});
        $("#xgk li").eq(2).find('a').css({"background":"#ff5e33","color":"#fff"});
        $("#xgk li").eq(3).find('a').css({"background":"#f7a131","color":"#fff"});
	    $("#xgk li").eq(6).find('a').css({"background":"#b36fff","color":"#fff"});
        $("#xgk li").eq(8).find('a').css({"background":"#6047ff","color":"#fff"});
        $("#xgk li").eq(9).find('a').css({"background":"#4ac144","color":"#fff"});
        $("#xgk li").eq(11).find('a').css({"background":"#ff56bd","color":"#fff"});	
	}

//tab
	if($('.xgwz ul li').length>0){
	    $('.xgwz').show();	   
	}else{
		$('.xgwz').hide();$('#tab span').eq(2).hide();
	}
	$('#tab span').click(function(){
		if($(this).text()=='简介'){
			$(this).addClass('cur').siblings().removeClass('cur');
		    $('.xyc,.cont,#comment,.xgwz,.similar,#tcsyy').show();
		}else if($(this).text()=='教程'){
			$(this).addClass('cur').siblings().removeClass('cur');
		    $('.xgwz,#comment').show();
	        $('.cont,.xyc,.similar,#tcsyy').hide();
		}else if($(this).text()=='评论'){
			$(this).addClass('cur').siblings().removeClass('cur');
            $('.xgwz,.cont,.xyc,.similar,#tcsyy').hide();
            $('#comment').show();
		}
	});

//img & slideAPP		
	var myS,myS2,myS3,myS4,sw,sw2,sw3,sw4,
    imgo = new Image(),
	jtw,jth,
	sw2=$('#thelist2 li').length*94;
	sw3=$('#thelist3 li').length*94;
	sw4=$('#thelist4 li').length*94;
	$('#scroller2').width(sw2);
    $('#scroller3').width(sw3);
    $('#scroller4').width(sw4);
    imgo.src = $('#thelist img').first().attr('src');
    imgo.onload = function(){
	    jtw=$('#thelist img').first().width(),
	    jth=$('#thelist img').first().height(); 
        fiximg();
    }
    function fiximg(){
        if(jtw>jth){
		    $('#thelist img').width(225);
		    $('#thelist img').height(150);
		    $('#thelist li').width(235);
		    sw=$('#thelist li').length*235;			
	    }else{
		    $('#thelist img').width(150);
		    $('#thelist img').height(225);
		    $('#thelist li').width(160);
		    sw=$('#thelist li').length*160;			
	    }
	    $('#scroller').width(sw);
	    myS = new iScroll('wrapper', {
		    hScrollbar: false
	    }); 
    }
	myS2= new iScroll('wrapper2', {
		hScrollbar: false
	});
	myS3 = new iScroll('wrapper3', {
        hScrollbar: false
    });
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
			$(this).html('收起');
			temp=0;
		}else{
			$('#summary').show();
			$('#details').hide();
			$(this).html('展开');
			temp=1;
		}
	});
  }
  
  if($('body#app-page #lwrapper').length>0 || $('body#rank-page #lwrapper').length>0 || $('body#game-page #lwrapper').length>0){
    var myL,ltw;
	ltw=$('#lthelist li').length*208+2;	
	$('#lscroller').width(ltw);
	myT = new iScroll('lwrapper', {
        hScrollbar: false
    });
  }
if($('#wen h1').length>0){
	  
	  //setTimeout(refDownApp , 5000);
  }
  
});

//list
if($('#down-page,#list-page').length>0){
var lurl=window.location.href;
	if(lurl.indexOf('/183/')>0 || lurl.indexOf('/201/')>0 || lurl.indexOf('/202/')>0 || lurl.indexOf('/203/')>0 || lurl.indexOf('/204/')>0 || lurl.indexOf('/205/')>0 || lurl.indexOf('/206/')>0 || lurl.indexOf('/207/')>0 || lurl.indexOf('/208/')>0 || lurl.indexOf('/225/')>0 || lurl.indexOf('/209/')>0 || lurl.indexOf('/227/')>0 || lurl.indexOf('/210/')>0 || lurl.indexOf('/287/')>0 || lurl.indexOf('/290/')>0 || lurl.indexOf('/291/')>0 || lurl.indexOf('/211/')>0 || lurl.indexOf('/212/')>0 || lurl.indexOf('/213/')>0){$('.mainNav li').eq(1).addClass('cur');}
	else if(lurl.indexOf('/254/')>0 || lurl.indexOf('/228/')>0 || lurl.indexOf('/181/')>0 || lurl.indexOf('/224/')>0 || lurl.indexOf('/222/')>0 || lurl.indexOf('/221/')>0 || lurl.indexOf('/220/')>0 || lurl.indexOf('/219/')>0 || lurl.indexOf('/218/')>0 || lurl.indexOf('/217/')>0|| lurl.indexOf('/215/')>0 || lurl.indexOf('/214/')>0 || lurl.indexOf('/223/')>0 || lurl.indexOf('/231/')>0 || lurl.indexOf('/216/')>0 || lurl.indexOf('/289/')>0){$('.mainNav li').eq(2).addClass('cur');}	
	else if(lurl.indexOf('/155/')>0 || lurl.indexOf('/158/')>0 || lurl.indexOf('/159/')>0 || lurl.indexOf('/160/')>0 || lurl.indexOf('/161/')>0 || lurl.indexOf('/162/')>0 || lurl.indexOf('/163/')>0 || lurl.indexOf('/168/')>0 || lurl.indexOf('/169/')>0 || lurl.indexOf('/171/')>0 || lurl.indexOf('/330/')>0|| lurl.indexOf('/331/')>0){$('.mainNav li').eq(3).addClass('cur');}	
};

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

	 var cataid=$('.wtitle').attr("cataid");
	 if(cataid==120275 || cataid==120278 || cataid==120282 || cataid==120285|| cataid==120275 ){ $('.toolbar .catalogname').html('手游攻略');$('.toolbar .catalogname').attr('href','/article.html');}
	 else if(cataid==120250 || cataid==120252 || cataid==120254 || cataid==120256|| cataid==120267|| cataid==120280|| cataid==120281 ){ $('.toolbar .catalogname').html('手机教程');$('.toolbar .catalogname').attr('href','/jiaocheng.html');}
	 else if(cataid==10022 || cataid==10024 || cataid==120276 || cataid==120255|| cataid==120267|| cataid==120280|| cataid==120281 ){ $('.toolbar .catalogname').html('手机评测');$('.toolbar .catalogname').attr('href','/pingce.html');}
	 else if(cataid==120269 ){ $('.toolbar .catalogname').html('IOS新闻');$('.toolbar .catalogname').attr('href','/news.html');$('footer.bottom p a:eq(0)').attr('href','http://www.pc6.com/apple/');}
	 else if(cataid==120270 ){ $('.toolbar .catalogname').html('使用技巧');$('.toolbar .catalogname').attr('href','/syjq.html');$('footer.bottom p a:eq(0)').attr('href','http://www.pc6.com/apple/');}
	 else if(cataid==120271 ){ $('.toolbar .catalogname').html('软件教程');$('.toolbar .catalogname').attr('href','/jc.html');$('footer.bottom p a:eq(0)').attr('href','http://www.pc6.com/apple/');}
	 else if(cataid==120272 ){ $('.toolbar .catalogname').html('新手入门');$('.toolbar .catalogname').attr('href','/xsrm.html');$('footer.bottom p a:eq(0)').attr('href','http://www.pc6.com/apple/');}
	 else if(cataid==120273 ){ $('.toolbar .catalogname').html('游戏攻略');$('.toolbar .catalogname').attr('href','/article.html');$('footer.bottom p a:eq(0)').attr('href','http://www.pc6.com/apple/');}	 
     else{ $('.toolbar .catalogname').html('技术教程');$('.toolbar .catalogname').attr('href','/article.html');}
 
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

/*通用函数*/

$(function(){
	if(browser.versions.ios){
		$(".gwarp").each(function() {
			$(this).find("ul").eq(3).addClass("on");
			$(this).find("ul").slice(0, 3).remove();
		});
		$(".glist.az,.iList.az").remove();
	}else{
		$(".gwarp").each(function() {
			$(this).find("ul").slice(2, 5).remove();
		});
		$(".glist.ios,.iList.ios").remove();
	}
	if($("#index-page").length>0){
		$(".bottom").append('<p style="margin-top:-8px;height:30px;line-height:30px;"><a href="https://beian.miit.gov.cn/"  rel="nofollow noreferrer" target="_blank">蜀ICP备2024075814号-6</a></p>');
	}
});

$("section.game ul.vlist li a").each(function(){
    $(this).click(function(){
    	var softurl=$(this).attr("href");
        var idstr=softurl.match(/(\d+)/);
        var SoftID=idstr?idstr[1]:'0';
    	var title_=$(this).text();
        if(title_=='下载')title_=$(this).prevAll("a").text();
        if(softurl.indexOf('http')==-1)softurl=location.protocol+"//"+location.host+softurl;
    	var tgCount=sessionStorage["tgCount_"+SoftID]?sessionStorage["tgCount_"+SoftID]:"";
		//console.log(title_);
    	if(tgCount==""&&SoftID!='0'){
    		$.ajax({
    			type:"POST",
    			url:"http://api.xiazaicc.com/index/api/click_area?t_="+(new Date).getTime(),
    			data:"title="+escape(title_)+"&domain="+escape(document.domain)+"&area=10&g_id="+SoftID+"&g_url="+escape(softurl),
    			success: function(data, status, xhr){sessionStorage["tgCount_"+SoftID]="1";}
    		});
    	}
    	return true;
    });
});
$("section.game ul.glist li a").each(function(){
    $(this).click(function(){
    	var softurl=$(this).attr("href");
        var idstr=softurl.match(/(\d+)/);
        var SoftID=idstr?idstr[1]:'0';
    	var title_=$(this).text();
        if(title_=='下载')title_=$(this).prevAll("u").text();
        if(title_=='')title_=$(this).nextAll("span").find("u").text();
        if(softurl.indexOf('http')==-1)softurl=location.protocol+"//"+location.host+softurl;
    	var tgCount=sessionStorage["tgCount_"+SoftID]?sessionStorage["tgCount_"+SoftID]:"";
        //console.log(title_);
    	if(tgCount==""&&SoftID!='0'){
    		$.ajax({
    			type:"POST",
    			url:"http://api.xiazaicc.com/index/api/click_area?t_="+(new Date).getTime(),
    			data:"title="+escape(title_)+"&domain="+escape(document.domain)+"&area=10&g_id="+SoftID+"&g_url="+escape(softurl),
    			success: function(data, status, xhr){sessionStorage["tgCount_"+SoftID]="1";}
    		});
    	}
    	return true;
    });
});