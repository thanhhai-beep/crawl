/**
 * Created by Administrator on 2016/8/3.
 */
(function(a, d) {
    var b = a.documentElement,
        e = "orientationchange" in window ? "orientationchange" : "resize",
        c = function() {
            var a = b.clientWidth;
            a && (b.style.fontSize = Math.min(a, 640) / 320 * 100 + "px")
        };
    css = document.createElement('style');
    css.type="text/css";
    css.innerHTML = "html {font-size:"+Math.min(b.clientWidth, 640) / 320 * 100+"px}";
    a.getElementsByTagName('head')[0].appendChild(css);
    a.addEventListener && (d.addEventListener(e, c, !1), a.addEventListener("DOMContentLoaded", c, !1));
})(document, window);


var browser={versions:function(){var e=navigator.userAgent;navigator.appVersion;return{wechat:e.indexOf("MicroMessenger")>-1,ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1,iPhone:e.indexOf("iPhone")>-1||e.indexOf("Mac")>-1,mobile:!!e.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i),iPad:e.indexOf("iPad")>-1,ios9:e.indexOf("iPhone OS 9")>-1,MQQBrowser:e.indexOf("MQQBrowser")>-1,UCBrowser:e.indexOf("UCBrowser")>-1,Safari:e.indexOf("Safari")>-1}}(),language:(navigator.browserLanguage||navigator.language).toLowerCase()},Cookie={get:function(e){var t,i="";return(t=document.cookie.match("(?:^| )"+e+"(?:(?:=([^;]*))|;|$)"))&&(i=t[1]?unescape(t[1]):""),i},set:function(e,t,i,a){i=i||2592e6;var n=new Date,s="";n.setTime(n.getTime()+i),s=e+"="+escape(t)+";expires="+n.toGMTString()+";path=/;",a&&(s+="domain="+a+";"),document.cookie=s},del:function(e,t){Cookie.set(e,"",-1,t)}};

if(!browser.versions.mobile){
		var e = window.location.pathname,
			c = /\/(down)\/(\d+)\.html/ig;
		if (c = c.exec(e)) window.location.href = "https://www.anxz.com" + c[0];
		else if (c = /\/(downlist|special)\/(s|r)_(\d+)_(\d+)\.html/ig, c = c.exec(e)) window.location.href = "https://www.anxz.com" + c[0];
		else if (c = /\/(downlist|special)\/(s|r)_(\d+)_(asc|hot)_(\d+)\.html/ig, c = c.exec(e)) window.location.href = "https://www.anxz.com" + c[0];
		else if (c = /^\/(s|az)\/(\w+)\//ig, c.exec(e)) window.location.href = "https://www.anxz.com" + e;
		else if (c = /^\/(special|az)?\/?(index.html|index.php)?$/ig, c = c.exec(e)) window.location.href = "https://www.anxz.com" + c[0]
}