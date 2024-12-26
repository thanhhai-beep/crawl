/*通用函数Begin*/
Array.prototype.in_array = function (e) { for (i = 0; i < this.length; i++) { if (this[i] == e) return true; } return false; }
Array.prototype.in_mid = function (e) { for (i = 0; i < this.length; i++) { if (e.indexOf(this[i]) > -1) return this[i]; } return 0; }
var getIosPlist = function (title, pic, iphoneid, padid) { var iosurl; var iosresTitle = title.split(/(\s|\()/)[0]; iosresTitle = iosresTitle.substring(0, 20); iosresTitle = encodeURIComponent(iosresTitle); var pic = encodeURIComponent(pic); var ss = navigator.userAgent.toLowerCase(); if (ss.indexOf("iphone") != -1) { iosurl = "http://x.289.com/" + iphoneid + "/" + iosresTitle + "/" + pic; } else { iosurl = "http://x.289.com/" + padid + "/" + iosresTitle + "/" + pic; } return iosurl; }
var checkURL = function (URL) { var str = URL; var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/; var objExp = new RegExp(Expression); if (objExp.test(str) == true) { return true; } else { return false; } }
var Cookie = { get: function (name) { var value = '', matchs; if (matchs = document.cookie.match("(?:^| )" + name + "(?:(?:=([^;]*))|;|$)")) value = matchs[1] ? unescape(matchs[1]) : ""; return value }, set: function (name, value, expire, domain) { expire = expire || 30 * 24 * 3600 * 1000; var date = new Date(), cookie = ""; date.setTime(date.getTime() + expire); cookie = name + "=" + escape(value) + ";expires=" + date.toGMTString() + ";path=/;"; domain && (cookie += "domain=" + domain + ";"); document.cookie = cookie }, del: function (name, domain) { Cookie.set(name, '', -1, domain) } };
function GetRandomNum(Min, Max) { var Range = Max - Min; var Rand = Math.random(); return (Min + Math.round(Rand * Range)); }   //生成随机数
var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
function generateMixed(n) { var res = ""; for (var i = 0; i < n; i++) { var id = Math.ceil(Math.random() * 35); res += chars[id]; } return res; }
function checkRate(nubmer) { var re = /^[0-9]+.?[0-9]*$/; if (!re.test(nubmer)) { return false; } else { return true; } }   //判断字符串是否为数字     //判断正整数 /^[1-9]+[0-9]*]*$/ 
Array.prototype.in_trim_array = function (e) { if (e == "" || e == null) { return false }; for (i = 0; i < this.length; i++) { if (this[i].toLowerCase().indexOf(e) >= 0 || e.indexOf(this[i].toLowerCase()) >= 0) return true; } return false; };
var showmoList = ["nexus", "sm-g900p", "SM-N900A", "ZTE N909", "13B143", "11A465", "windows", "ipad", "meego", "gt-i9505", "gt-i9300", "sm-n900t", "playbook", "kfapwi", "8c148", "12a4345d", "gt-n7100", "lgms323"];
var browser = {
  versions: function () {
    var u = navigator.userAgent, app = navigator.appVersion;
    return {//移动终端浏览器版本信息
      trident: u.indexOf('Trident') > -1, //IE内核
      presto: u.indexOf('Presto') > -1, //opera内核
      webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile/i) || !!u.match(/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/), //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
      iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, //是否iPad
      webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
      UCBrowser: u.indexOf('UCBrowser') > -1, //UCBrowser
      MQQBrowser: u.indexOf('MQQBrowser') > -1, //是否MQQBrowser
      Safari: u.indexOf('Safari') > -1,
      ios9: u.indexOf('iPhone OS 9') > -1
    };
  }(),
  language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

var catearr = [4, 5, 6, 7, 8, 9, 10, 18, 19, 20, 21, 24, 31, 32, 11, 12, 13, 14, 15, 16, 17, 22, 23, 33, 26, 27, 28, 29, 61, 35, 36, 37, 38, 39, 40, 41, 54, 55, 56, 57, 58, 59, 60, 62, 63, 45, 46, 47, 48, 49, 50, 51, 52, 42, 72, 73, 75, 76, 77]; //安卓分类
var catearrIos = [65, 66, 67, 68, 69, 70, 71, 74];
var GameCateList = [2, 4, 6];//游戏分类
var AppArray = [807, 807]; //第一次点击广告

var u = navigator.userAgent, app = navigator.appVersion;
var isIphone = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)  //ios终端
