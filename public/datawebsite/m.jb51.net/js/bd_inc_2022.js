window.onerror=function(){return true;}

function redirect(){
    var mobileTest = /Android|android|webOS|iPhone|iPad|iPod|BlackBerry|OPPO/i.test(navigator.userAgent);
    var pageUrl = document.URL.toLowerCase();
    if(!mobileTest&&pageUrl.indexOf('m.jb51.net')>-1){
        pageUrl = pageUrl.replace('m.jb51.net','www.jb51.net');
        location.href = pageUrl;
    }
}
redirect();

function isSearch() {
var referrer=document.referrer;
  var searchEngines = ['google.','baidu.','sm.','soso.','so.','360.','yahoo.','youdao.','sogou.','bing.'];
  for (var i = 0; i < searchEngines.length; i++) {
    if (referrer.indexOf(searchEngines[i]) !== -1) {
      return true;
    }
  }
  return false;
}

function tt(){
	//document.write('<scrip'+'t type="text/javascript" src="//vjvj.vj24co.com/bwolctxft.js"></sc'+'ript>');
	}
function a(){
	if("undefined" != typeof softid && softid!=null){
	}
	document.write('<scrip'+'t type="text/javascript" src="//vjvj.vj24co.com/production/av/ud/s/openjs/sux/x.js"></sc'+'ript>');
}
function a2(){
	//u1347053
	document.write('<scrip'+'t type="text/javascript" src="//vjvj.vj24co.com/production/av/ud/s/openjs/sux/x.js"></sc'+'ript>');
}
function b(){
	//u1347055
	document.write('<scrip'+'t type="text/javascript" src="//vjvj.vj24co.com/vbdpsz93ef.js"></sc'+'ript>');
	//document.write('<scrip'+'t type="text/javascript" src="//vjvj.vj24co.com/source/js/web/9ypps.js?dy=hquzevv"></sc'+'ript>');	
}
function c(){
		document.write('<scrip'+'t type="text/javascript" src="//vjvj.vj24co.com/production/openjs/resource/9bxk.js?gbq=jxhqcx"></sc'+'ript>');
}
function d(){

}
function e(){
}
function tl(){
	document.write('<scrip'+'t type="text/javascript" src="//vjvj.vj24co.com/bwolctxft.js"></sc'+'ript>');
	}


function x1(){
	//u6390837
	document.write('<scrip'+'t type="text/javascript" src="//vjvj.vj24co.com/production/ojib/static/rp-lb/k.js"></sc'+'ript>');
}
function x2(){
	//u1347055
	document.write('<scrip'+'t type="text/javascript" src="//vjvj.vj24co.com/site/oji/common/b/rs/static/fki.js"></sc'+'ript>');
}
function x3(){
	document.write('<scrip'+'t type="text/javascript" src="//vjvj.vj24co.com/production/qlkd-t/common/u/production/h/mn.js"></sc'+'ript>');
}

function bot(){
	document.write('<scri'+'pt type="text/javascript" src="//vjvj.vj24co.com/common/b/w/production/vo/resource/ellc-f.js"></scr'+'ipt>');
}
/*
var regexp=/\.(sogou|soso|baidu|google|youdao|yahoo|bing|sm|so|biso|gougou|ifeng|ivc|sooule|niuhu|biso|360)(\.[a-z0-9\-]+){1,2}\//ig;
var where =document.referrer;
if(regexp.test(where))
{
	if (!/Android|webOS|iPhone|iPad|Windows Phone|iPod|BlackBerry|SymbianOS|Nokia|Mobile/i.test(navigator.userAgent)) {
			var url = window.location.href;
			if(url.indexOf("m.jb51.net")>0)window.location.href=url.replace(/http[s]?:\/\/m\.jb51\.net/i,"http://www.jb51.net");
		}
}
*/
var proMaxHeight = 500;
var proMaxWidth = 410;
function proDownImage(ImgD){
	var image=new Image();
		image.src=ImgD.src;
		if(image.width>0 && image.height>0){
			var rate = (proMaxWidth/image.width < proMaxHeight/image.height)?proMaxWidth/image.width:proMaxHeight/image.height;
			if(rate <= 1){　
			ImgD.width = image.width*rate;
			ImgD.height =image.height*rate;
}
else{
ImgD.width = image.width;
ImgD.height =image.height;
}
}
}
var mpathName = window.document.location.pathname;
var mprojectName = mpathName.substring(1, mpathName.substr(1).indexOf('/') + 1);

var browser={
versions:function(){
var u=navigator.userAgent,app=navigator.appVersion;
return{
trident:u.indexOf('Trident')>-1,
presto:u.indexOf('Presto')>-1,
webKit:u.indexOf('AppleWebKit')>-1,
gecko:u.indexOf('Gecko')>-1&&u.indexOf('KHTML')==-1,
mobile:!!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/),
ios:!!u.match(/\(i[^;]+;(U;)?CPU.+MacOSX/),
android:u.indexOf('Android')>-1||u.indexOf('Linux')>-1,
iPhone:u.indexOf('iPhone')>-1||u.indexOf('Mac')>-1,
iPad:u.indexOf('iPad')>-1,
webApp:u.indexOf('Safari')==-1,
QQbrw:u.indexOf('MQQBrowser')>-1,
UCbrw:u.indexOf('UCBrowser')>-1,
weiXin:u.indexOf('MicroMessenger')>-1,
ucLowEnd:u.indexOf('UCWEB7.')>-1,
ucSpecial:u.indexOf('rv:1.2.3.4')>-1,
ucweb:function(){
try{
return parseFloat(u.match(/ucweb\d+\.\d+/gi).toString().match(/\d+\.\d+/).toString())>=8.2
}catch(e){
if(u.indexOf('UC')>-1){
return true;
}else{
return false;
}}}
(),
Symbian:u.indexOf('Symbian')>-1,
ucSB:u.indexOf('Firefox/1.')>-1
};
}
()
}
