(function(l,h){if(!Array.prototype.indexOf){Array.prototype.indexOf=function(T,U){var S;if(this==null){throw new TypeError('"this" is null or not defined')}var V=Object(this);var R=V.length>>>0;if(R===0){return -1}var W=+U||0;if(Math.abs(W)===Infinity){W=0}if(W>=R){return -1}S=Math.max(W>=0?W:R-Math.abs(W),0);while(S<R){if(S in V&&V[S]===T){return S}S++}return -1};
/* http://mths.be/endswith v0.2.0 by @mathias */
}if(!String.prototype.endsWith){(function(){var S=(function(){try{var W={};var V=Object.defineProperty;var X=V(W,W,W)&&V}catch(U){}return X}());var T={}.toString;var R=function(ab){if(this==null){throw TypeError()}var V=String(this);if(ab&&T.call(ab)=="[object RegExp]"){throw TypeError()}var aa=V.length;var ad=String(ab);var X=ad.length;var ac=aa;if(arguments.length>1){var Y=arguments[1];if(Y!==undefined){ac=Y?Number(Y):0;if(ac!=ac){ac=0}}}var W=Math.min(Math.max(ac,0),aa);var U=W-X;if(U<0){return false}var Z=-1;while(++Z<X){if(V.charCodeAt(U+Z)!=ad.charCodeAt(Z)){return false}}return true};if(S){S(String.prototype,"endsWith",{"value":R,"configurable":true,"writable":true})}else{String.prototype.endsWith=R}}())}var s=["desk.zol.com.cn","xiazai.zol.com.cn","","youxi.zol.com.cn","xiaohua.zol.com.cn"];if(s.indexOf(location.hostname)>-1){var P=h.createElement("script");P.id="adstat_js_statnew";P.src="//statnew.zol.com.cn/adrs/ol_statnew.js?v=1";h.body.appendChild(P)}var O=h.createElement("script");O.id="zmtch_js_statnew";O.src="//icon.zol.com.cn/public/js/zmtch.js";h.body.appendChild(O);if(typeof l._zpv_cfg=="undefined"){var M=location.pathname;var f=location.hostname.substr(0,location.hostname.indexOf(".")),C="",g={};var j="ZOL";var m="media";var z={};var K=["bbs.zol.com.cn","my.zol.com.cn","ask.zol.com.cn","try.zol.com.cn","huodong.zol.com.cn"];var L=["detail.zol.com.cn","top.zol.com.cn"];var p=["xiazai.zol.com.cn","","driver.zol.com.cn","desk.zol.com.cn","xiaohua.zol.com.cn"];var I=["gbdz.zol.com.cn","s.zol.com.cn","b.zol.com.cn","q.zol.com.cn","dealer.zol.com.cn"];if(K.indexOf(location.hostname)>-1){m="hudong"}else{if(L.indexOf(location.hostname)>-1){m="product"}else{if(p.indexOf(location.hostname)>-1){m="xiazai"}else{if(I.indexOf(location.hostname)>-1){j="ZMALL";m="dealer"}else{if(location.hostname.endsWith("zol.com")){j="ZMALL";m="mall"}}}}}if(M=="/"){C="index"}else{C=M.replace(".html","").replace("/","")}l._zpv_cfg={terminal:"pc",site:j,buz:m,channel:f,pagetype:C,custom:g}}function y(T,S){if(1==$("#"+T).length){$("#"+T).remove()}var R=h.createElement("script");R.src=S;R.id=T;h.getElementsByTagName("body")[0].appendChild(R)}var r=function(S){var R=new Array();if(S){a=h.cookie.indexOf(S+"=");if(a!=-1){b=h.cookie.substring((a+S.length+1),h.cookie.length);c=b.split(";");d=c[0];return d}}};var k=function(T,S,R){if(!r(T)){return false}h.cookie=encodeURIComponent(T)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(R?"; domain="+R:"")+(S?"; path="+S:"");return true};var N=location.hostname=="zol.xcar.com.cn"&&(h.doamin=="zol.com.cn"||h.domain=="zol.xcar.com.cn");var A="//zol.xcar.com.cn/?c=Api_Login&a=APILogin";var Q="//login.zol.com/index.php?callback=?&c=Default&a=APILogin";var i="//service.zol.com.cn/user/api/login_zol.php?";var w,G=l.location.hostname,q=["biz.zol.com.cn","cloud.zol.com.cn","bigdata.zol.com.cn","mapp.zol.com.cn","server.zol.com.cn","net.zol.com.cn","safe.zol.com.cn","stor.zol.com.cn","epc.zol.com.cn","oa.zol.com.cn","smartcity.zol.com.cn","cy.zol.com.cn"];if(q.indexOf(G,q)>=0){w="//biz.zol.com.cn/marketing/"}else{w="//www.zol.com.cn/marketing/customer_service.html"}w="//www.zol.com.cn/marketing/customer_service.html";var J=h.getElementById("globalNavLogin");if(J){J=parseInt(J.getAttribute("data-width"),10)}var D=typeof(__publicNavWidth)!=="undefined"?parseInt(__publicNavWidth,10):J>0?J:980;D=D>0?D+"px":"100%";var x=typeof(__publicFooterAdFlag)!=="undefined"?parseInt(__publicFooterAdFlag,10):0;var F=[".zol-global-footer{min-width:"+D+"; margin: 40px auto 0; background: #333; clear:both;}",".zol-global-footer,.zol-global-footer *{float: none;}",".zol-footer {float: none; height: 40px; min-width: 960px; overflow: hidden; float: none; clear: both; padding: 0 10px; background: #333; color: #ccc; text-align: left; font-size: 12px; font-family: arial; line-height: 40px;}",".zol-footer *{float: none;}",'.zol-footer span {_display: inline; float:right; margin: 0 -7px 0 0; color:#666; font-family:"\u5b8b\u4f53"; font-size:10px; -webkit-text-size-adjust:none;}',".zol-footer a{padding: 0 6px 0 7px; color:#ccc; text-decoration:none; font-family:Arial; font-size:12px;}",".zol-footer a:hover{color:#ccc; text-decoration: underline;} .zol-footer i {display: none;}",".zol-footer .footerw-2015{float: none; height: 40px; width:"+D+"; margin: 0 auto; line-height: 40px;}",".zol-footer .footerw-2015 em{float:right; margin-left:10px; background:#666; color:#fff;padding:0 8px}",".zol-global-footer-fixed{position: fixed; bottom: 0; left: 0; width: 100%;}"].join("");var t=l.innerHeight||h.documentElement.clientHeight;var v=h.body.offsetHeight;var n=t>v+60?" zol-global-footer-fixed":"";var E=['<div class="zol-footer'+n+'">','<div class="footerw-2015">'+(x?"<em>\u5e7f\u544a</em>":"")+"<span>",'<a rel="nofollow" href="//www.zol.com.cn/marketing/profile.html">\u516c\u53f8\u7b80\u4ecb</a>|','<a rel="nofollow" href="//www.zol.com.cn/marketing/milestone.html">\u516c\u53f8\u5386\u7a0b</a>|','<a rel="nofollow" href="//www.zol.com.cn/marketing/promotion.html">\u8425\u9500\u63a8\u5e7f</a>|','<a rel="nofollow" href="//link.zol.com.cn/">\u5a92\u4f53\u5408\u4f5c</a>|','<a href="//www.zol.com.cn/brand.html">\u54c1\u724c\u5927\u5168</a>|','<a rel="nofollow" href="//service.zol.com.cn/user/login.php?type=reg">\u5e10\u53f7\u6ce8\u518c</a>|','<a rel="nofollow" href="//service.zol.com.cn/hr.php">\u62db\u8058\u4fe1\u606f</a>|','<a rel="nofollow" href="'+w+'">\u8054\u7cfb\u65b9\u5f0f</a>|','<a rel="nofollow" href="//service.zol.com.cn/user/privacy.php">\u9690\u79c1\u58f0\u660e</a>|','<a href="//www.zol.com.cn/webcenter/map.html">\u7ad9\u70b9\u5730\u56fe</a>|','<a rel="nofollow" href="//service.zol.com.cn/complain/">\u53cd\u9988\u7ea0\u9519</a>',"</span>&nbsp;","&copy;"+new Date().getFullYear()+" \u4e2d\u5173\u6751\u5728\u7ebf \u7248\u6743\u6240\u6709","</div></div>"].join("");var H=h.createElement("style");H.type="text/css";if(H.styleSheet){H.styleSheet.cssText=F}else{H.appendChild(h.createTextNode(F))}var o=h.createElement("div");o.setAttribute("id","zolGlobalFooter");o.className="zol-global-footer";o.innerHTML=E;var e=function(){h.getElementsByTagName("body")[0].appendChild(H);h.getElementsByTagName("body")[0].appendChild(o);if(location.hostname!="my.zol.com.cn"){var T=h.createElement("script");T.src="//icon.zol-img.com.cn/service/js/forceBindPhone.js";h.body.appendChild(T)}var S=r("zol_sysnc");var U=r("zol_userid");if(S&&U){if(N){var R="zol.xcar.com.cn";y("zol_login_api",i+"&act=signin&check="+S+"&username="+U);y("zol_shop_api",Q+"&act=signin&check="+S+"&username="+U)}else{y("zol_iqiyi_api",A+"&act=signin&check="+S+"&username="+U);y("zol_shop_api",Q+"&act=signin&check="+S+"&username="+U);var R="zol.com.cn"}k("zol_sysnc","/",R)}};var u=function(){try{h.documentElement.doScroll("left")}catch(R){return setTimeout(u,20)}e()};if(l.addEventListener){h.addEventListener("DOMContentLoaded",e,false)}else{if(l.attachEvent){u()}}var B=h.createElement("script");B.src="https://icon.zol-img.com.cn/public/js/pc-common-module.js";h.getElementsByTagName("body")[0].appendChild(B)})(window,document);