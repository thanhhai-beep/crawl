!function(r){var e={};function o(t){if(e[t])return e[t].exports;var n=e[t]={i:t,l:!1,exports:{}};return r[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=r,o.c=e,o.d=function(t,n,r){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var e in n)o.d(r,e,function(t){return n[t]}.bind(null,e));return r},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="//ue.17173cdn.com/module/m/news-list/2021/",o(o.s=22)}([function(t,n,r){var g=r(2),x=r(8),h=r(5),y=r(13),m=r(16),b="prototype",S=function(t,n,r){var e,o,i,c,u=t&S.F,a=t&S.G,f=t&S.S,l=t&S.P,s=t&S.B,p=a?g:f?g[n]||(g[n]={}):(g[n]||{})[b],v=a?x:x[n]||(x[n]={}),d=v[b]||(v[b]={});for(e in a&&(r=n),r)i=((o=!u&&p&&void 0!==p[e])?p:r)[e],c=s&&o?m(i,g):l&&"function"==typeof i?m(Function.call,i):i,p&&y(p,e,i,t&S.U),v[e]!=i&&h(v,e,c),l&&d[e]!=i&&(d[e]=i)};g.core=x,S.F=1,S.G=2,S.S=4,S.P=8,S.B=16,S.W=32,S.U=64,S.R=128,t.exports=S},function(t,n,r){var e=r(15)("wks"),o=r(14),i=r(2).Symbol,c="function"==typeof i;(t.exports=function(t){return e[t]||(e[t]=c&&i[t]||(c?i:o)("Symbol."+t))}).store=e},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){var e=r(24),o=r(28);t.exports=r(10)?function(t,n,r){return e.f(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n){var r=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=r)},function(t,n,r){var e=r(3);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n,r){t.exports=!r(6)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(12),o=Math.min;t.exports=function(t){return 0<t?o(e(t),9007199254740991):0}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(0<t?e:r)(t)}},function(t,n,r){var i=r(2),c=r(5),u=r(29),a=r(14)("src"),e=r(30),o="toString",f=(""+e).split(o);r(8).inspectSource=function(t){return e.call(t)},(t.exports=function(t,n,r,e){var o="function"==typeof r;o&&(u(r,"name")||c(r,"name",n)),t[n]!==r&&(o&&(u(r,a)||c(r,a,t[n]?""+t[n]:f.join(String(n)))),t===i?t[n]=r:e?t[n]?t[n]=r:c(t,n,r):(delete t[n],c(t,n,r)))})(Function.prototype,o,function(){return"function"==typeof this&&this[a]||e.call(this)})},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n,r){var e=r(8),o=r(2),i="__core-js_shared__",c=o[i]||(o[i]={});(t.exports=function(t,n){return c[t]||(c[t]=void 0!==n?n:{})})("versions",[]).push({version:e.version,mode:r(31)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,r){var i=r(32);t.exports=function(e,o,t){if(i(e),void 0===o)return e;switch(t){case 1:return function(t){return e.call(o,t)};case 2:return function(t,n){return e.call(o,t,n)};case 3:return function(t,n,r){return e.call(o,t,n,r)}}return function(){return e.apply(o,arguments)}}},function(t,n,r){var m=r(16),b=r(18),S=r(33),w=r(11),e=r(34);t.exports=function(s,t){var p=1==s,v=2==s,d=3==s,g=4==s,x=6==s,h=5==s||x,y=t||e;return function(t,n,r){for(var e,o,i=S(t),c=b(i),u=m(n,r,3),a=w(c.length),f=0,l=p?y(t,a):v?y(t,0):void 0;f<a;f++)if((h||f in c)&&(o=u(e=c[f],f,i),s))if(p)l[f]=o;else if(o)switch(s){case 3:return!0;case 5:return e;case 6:return f;case 2:l.push(e)}else if(g)return!1;return x?-1:d||g?g:l}}},function(t,n,r){var e=r(7);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n,r){var e=r(7);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){"use strict";var e,o,c=r(45),u=RegExp.prototype.exec,a=String.prototype.replace,i=u,f="lastIndex",l=(e=/a/,o=/b*/g,u.call(e,"a"),u.call(o,"a"),0!==e[f]||0!==o[f]),s=void 0!==/()??/.exec("")[1];(l||s)&&(i=function(t){var n,r,e,o,i=this;return s&&(r=new RegExp("^"+i.source+"$(?!\\s)",c.call(i))),l&&(n=i[f]),e=u.call(i,t),l&&e&&(i[f]=i.global?e.index+e[0].length:n),s&&e&&1<e.length&&a.call(e[0],r,function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(e[o]=void 0)}),e}),t.exports=i},function(t,n,r){var e=r(1)("unscopables"),o=Array.prototype;null==o[e]&&r(5)(o,e,{}),t.exports=function(t){o[e][t]=!0}},function(t,n,r){"use strict";r.r(n);r(23),r(37),r(38),r(46),r(47),r(51),r(55);var e=JSON.parse(localStorage.getItem("TG-M-NEWLIST-TAGS2")||"[]"),o=localStorage.getItem("VERSION")||(.5<Math.random()?"b":"a");function i(t){var n;n=t,e.includes(n)||(e.push(t),localStorage.setItem("TG-M-NEWLIST-TAGS2",JSON.stringify(e)))}function c(t,n){var r=$(".mod-own-channel").offset().top;$(window).on("scroll.track",function(){$(document).scrollTop()>r&&($(window).off("scroll.track"),_jc_ping.push(["_trackBlockClick",t,""]),_jc_ping.push(["_trackModule",$("#ue-news-complex"),n]))})}localStorage.setItem("VERSION",o),$(".game-index-name a").not(":last").click(function(){i($(this).text())}),$(".mod-own-channel a:gt(1)").click(function(){i($(this).find(".tit").text())}),$(document).on("click",".mod-news .comm-list li a",function(){var t=$(this).find(".tit").text().match(/《([^《|》]*)》/);Array.isArray(t)&&1<t.length&&i(t[1])}),$(document).on("click",".mod-rank .comm-list li a",function(){i($(this).find(".tit").text())}),$(document).on("click",".mod-csb .list-csb li a",function(){i($(this).find(".name").text())}),window._jc_ping=window._jc_ping||[],0!==e.length&&("b"===o?($.ajax({type:"GET",url:"https://interface.17173.com/content/list.jsonp",data:{keywords:e.join(","),pageNo:1,pageSize:25},dataType:"jsonp",success:function(t){var n=t.data.map(function(t,n){return'\n              <li>\n              <a href="'.concat(t.pageUrl,'" class="art-item">\n                  <figure class="img-box">\n                      <img src="').concat(t.imgPath||(t.imageList?t.imageList[0]:"默认图"),'" alt="').concat(t.imgTitle,'" />\n                  </figure>\n                  <div class="txt-box">\n                      <p class="tit">').concat(t.title,"</p>\n                  </div>\n              </a>\n          </li>\n          ")}).join("");$("#ue-news-complex li:gt(0)").remove(),$("#ue-news-complex").append(n)}}),c("NnyeQz","amiqUz")):c("yQnmQb","eee2Qz"))},function(t,n,r){"use strict";var e=r(0),o=r(17)(1);e(e.P+e.F*!r(36)([].map,!0),"Array",{map:function(t,n){return o(this,t,n)}})},function(t,n,r){var e=r(9),o=r(25),i=r(27),c=Object.defineProperty;n.f=r(10)?Object.defineProperty:function(t,n,r){if(e(t),n=i(n,!0),e(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){t.exports=!r(10)&&!r(6)(function(){return 7!=Object.defineProperty(r(26)("div"),"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(3),o=r(2).document,i=e(o)&&e(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,r){var o=r(3);t.exports=function(t,n){if(!o(t))return t;var r,e;if(n&&"function"==typeof(r=t.toString)&&!o(e=r.call(t)))return e;if("function"==typeof(r=t.valueOf)&&!o(e=r.call(t)))return e;if(!n&&"function"==typeof(r=t.toString)&&!o(e=r.call(t)))return e;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){t.exports=r(15)("native-function-to-string",Function.toString)},function(t,n){t.exports=!1},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,r){var e=r(4);t.exports=function(t){return Object(e(t))}},function(t,n,r){var e=r(35);t.exports=function(t,n){return new(e(t))(n)}},function(t,n,r){var e=r(3),o=r(19),i=r(1)("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)||(n=void 0),e(n)&&null===(n=n[i])&&(n=void 0)),void 0===n?Array:n}},function(t,n,r){"use strict";var e=r(6);t.exports=function(t,n){return!!t&&e(function(){n?t.call(null,function(){},1):t.call(null)})}},function(t,n,r){var e=r(0);e(e.S,"Array",{isArray:r(19)})},function(t,n,r){"use strict";var s=r(9),p=r(11),v=r(39),d=r(41);r(43)("match",1,function(e,o,f,l){return[function(t){var n=e(this),r=null==t?void 0:t[o];return void 0!==r?r.call(t,n):new RegExp(t)[o](String(n))},function(t){var n=l(f,t,this);if(n.done)return n.value;var r=s(t),e=String(this);if(!r.global)return d(r,e);for(var o,i=r.unicode,c=[],u=r.lastIndex=0;null!==(o=d(r,e));){var a=String(o[0]);""===(c[u]=a)&&(r.lastIndex=v(e,p(r.lastIndex),i)),u++}return 0===u?null:c}]})},function(t,n,r){"use strict";var e=r(40)(!0);t.exports=function(t,n,r){return n+(r?e(t,n).length:1)}},function(t,n,r){var a=r(12),f=r(4);t.exports=function(u){return function(t,n){var r,e,o=String(f(t)),i=a(n),c=o.length;return i<0||c<=i?u?"":void 0:(r=o.charCodeAt(i))<55296||56319<r||i+1===c||(e=o.charCodeAt(i+1))<56320||57343<e?u?o.charAt(i):r:u?o.slice(i,i+2):e-56320+(r-55296<<10)+65536}}},function(t,n,r){"use strict";var o=r(42),i=RegExp.prototype.exec;t.exports=function(t,n){var r=t.exec;if("function"==typeof r){var e=r.call(t,n);if("object"!=typeof e)throw new TypeError("RegExp exec method returned something other than an Object or null");return e}if("RegExp"!==o(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,n)}},function(t,n,r){var o=r(7),i=r(1)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?r:c?o(n):"Object"==(e=o(n))&&"function"==typeof n.callee?"Arguments":e}},function(t,n,r){"use strict";r(44);var l=r(13),s=r(5),p=r(6),v=r(4),d=r(1),g=r(20),x=d("species"),h=!p(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),y=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(r,t,n){var e=d(r),i=!p(function(){var t={};return t[e]=function(){return 7},7!=""[r](t)}),o=i?!p(function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===r&&(n.constructor={},n.constructor[x]=function(){return n}),n[e](""),!t}):void 0;if(!i||!o||"replace"===r&&!h||"split"===r&&!y){var c=/./[e],u=n(v,e,""[r],function(t,n,r,e,o){return n.exec===g?i&&!o?{done:!0,value:c.call(n,r,e)}:{done:!0,value:t.call(r,n,e)}:{done:!1}}),a=u[0],f=u[1];l(String.prototype,r,a),s(RegExp.prototype,e,2==t?function(t,n){return f.call(t,this,n)}:function(t){return f.call(t,this)})}}},function(t,n,r){"use strict";var e=r(20);r(0)({target:"RegExp",proto:!0,forced:e!==/./.exec},{exec:e})},function(t,n,r){"use strict";var e=r(9);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,r){"use strict";var e=r(0),o=r(17)(5),i="find",c=!0;i in[]&&Array(1)[i](function(){c=!1}),e(e.P+e.F*c,"Array",{find:function(t,n){return o(this,t,1<arguments.length?n:void 0)}}),r(21)(i)},function(t,n,r){"use strict";var e=r(0),o=r(48)(!0);e(e.P,"Array",{includes:function(t,n){return o(this,t,1<arguments.length?n:void 0)}}),r(21)("includes")},function(t,n,r){var a=r(49),f=r(11),l=r(50);t.exports=function(u){return function(t,n,r){var e,o=a(t),i=f(o.length),c=l(r,i);if(u&&n!=n){for(;c<i;)if((e=o[c++])!=e)return!0}else for(;c<i;c++)if((u||c in o)&&o[c]===n)return u||c||0;return!u&&-1}}},function(t,n,r){var e=r(18),o=r(4);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(12),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=e(t))<0?o(t+n,0):i(t,n)}},function(t,n,r){"use strict";var e=r(0),o=r(52),i="includes";e(e.P+e.F*r(54)(i),"String",{includes:function(t,n){return!!~o(this,t,i).indexOf(t,1<arguments.length?n:void 0)}})},function(t,n,r){var e=r(53),o=r(4);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(t))}},function(t,n,r){var e=r(3),o=r(7),i=r(1)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n,r){var e=r(1)("match");t.exports=function(n){var r=/./;try{"/./"[n](r)}catch(t){try{return r[e]=!1,!"/./"[n](r)}catch(t){}}return!0}},function(t,n,r){}]);
//# sourceMappingURL=index.js.map