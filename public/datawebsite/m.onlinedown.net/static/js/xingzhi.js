!function(){var i={xzwh:{},init:function(){var t=this,n=document.getElementById("xingzhi-js").src;t.xzwh.ak=n.split("?")[1],t.cookie.get("xz_id")?t.xzwh.aId=t.cookie.get("xz_id"):t.newXzId(),document&&(t.xzwh.su=encodeURIComponent(document.URL)||"",t.xzwh.da=document.domain||"",t.xzwh.tt=encodeURIComponent(document.title)||"",t.xzwh.r=document.referrer||t.localStorage.get("ch")||""),document.head.querySelector("[name~=pageType][content]")&&(t.xzwh.pt="down");var e=document.head.querySelector("[name~=pageClass][content]");if(e&&(t.xzwh.fl=e.content),window&&window.screen){var o=window.screen.width||0,a=window.screen.height||0;t.xzwh.ds=o+"x"+a,t.xzwh.cd=window.screen.colorDepth||0,t.xzwh.lt=window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart||0}navigator&&(t.xzwh.ln=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"",t.xzwh.ce=navigator.cookieEnabled?1:0,t.xzwh.je=navigator.javaEnabled()?1:0)},Gb:function(){window._xzt={push:function(){for(var t=0;t<arguments.length;t++)i.xzwh.track=arguments[t]}},window._xzt.push.apply(window._xzt,[])},cookie:{set:function(t,n,e){var o=t+"="+n+";";e&&(o=o+" ; expires="+new Date((new Date).getTime()+36e5*e).toUTCString()+"; path=/"),document.cookie=o},get:function(t){return(t=RegExp("(^| )"+t+"=([^;]*)(;|$)").exec(document.cookie))?t[2]:""}},localStorage:{set:function(t,n){try{localStorage.setItem(t,n)}catch(t){}},get:function(t){try{var n=localStorage.getItem(t);if(n)return n}catch(t){}return!1}},trim:function(t){return t.replace(/^\s\s*/,"").replace(/\s\s*$/,"")},newXzId:function(){this.xzwh.aId="";for(var t=1;t<=32;t++){var n=Math.floor(16*Math.random()).toString(16);this.xzwh.aId+=n,8!=t&&12!=t&&16!=t&&20!=t||(this.xzwh.aId+="-")}return this.cookie.set("xz_id",this.xzwh.aId,8760),this.xzwh.aId},arrayToString:function(t){var n="";for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n+=e+"="+t[e]+"&");return n},addEventListener:function(t,n,e){t.addEventListener?t.addEventListener(n,e):t.attachEvent?t.attachEvent("on"+n,e):t["on"+n]=e},gmp:function(t){var n=t||window.event,e=document.documentElement.scrollLeft||document.body.scrollLeft,o=document.documentElement.scrollTop||document.body.scrollTop;return[n.pageX||n.clientX+e,n.pageY||n.clientY+o]},smr:function(t){var n=new Image,e="pro_"+Math.floor(2147483648*Math.random()).toString(36);function o(){n.onload=null,n.onerror=null,n.onabort=null,window[e]=null,n=null}window[e]=n,n.onload=o,n.onerror=o,n.onabort=o,n.src=t},cEvent:function(t){var n=window.location.href;i.localStorage.set("ch",n),void 0!==i.xzwh.track?(i.wp("tEvent"),i.xzwh.track=void 0):i.wp("cEvent")},wp:function(t){var n=this,e={};"cEvent"!=t&&"tEvent"!=t||(e.event="coordinate"),"tEvent"==t&&(e.track=n.xzwh.track.join(","));var o=window.screen.width||0,a=window.screen.height||0;e.aId=n.xzwh.aId,e.ak=n.xzwh.ak,e.da=n.xzwh.da,e.r=n.xzwh.r,"coordinate"===e.event&&(e.mp=n.gmp()),"roll"===e.event&&(e.sp=[startPos,endPos]),e.ds=o+"x"+a,e.su=n.xzwh.su;var r="https://bigdata.downza.com/2.gif?"+i.arrayToString(e)+"random="+Math.random();i.smr(r)}};i.addEventListener(document,"click",i.cEvent),i.Gb(),i.init();var t="https://bigdata.downza.com/1.gif?"+i.arrayToString(i.xzwh)+"random="+Math.random();i.smr(t)}();