//全站黑白
var isOpenBlack = 2; //手动开启黑白首页变量，0表示不开启，1表示强制手动开启、不分时间段,2表示按定时器自动开启
if(isOpenBlack == 1){ //手动开启黑白模式，强制黑白模式，不分时间段
	webBlack()
}else if(isOpenBlack == 2){ //定时器开启，在4月4号一整天开启黑白模式
	var onDate = new Date; //获取当前日期
	var onMonth = onDate.getMonth() + 1; //获取当前月
	var onDay = onDate.getDate(); //获取当前日
	console.log(onMonth,onDay)
	if(onMonth == 4 && onDay <= 5){ //判断是否是4月4日
		//webBlack()
	}
		
}		
function webBlack(){
	$("head").append('<style>html {filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);-webkit-filter: grayscale(100%);}</style>')	
}

if(typeof PageClass === "undefined"){ var PageClass = {};}
var PAGE = PageClass.page;

PAGE ==  "cms" && (function(){

})();



if (typeof(classPage) == "undefined") {

} else {
	if(classPage==4){
		//移动插入内容中间
		var cmscontent=$(".cms_text p");
		if (cmscontent.length>2){
			$("#show_c_2").insertAfter(cmscontent.eq(parseInt(cmscontent.length/2)));
		}
	}
}





//baidu自动推送代码
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();

//百度总统计
var _hmt = _hmt || [];
var _hmUrl = 'https://hm.baidu.com/hm.js?';
(function() {
  var hm = document.createElement("script");
  hm.src = _hmUrl+"a3741c3838b19a8f744303a06878aa39";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
if(typeof(_catalog) == "undefined"){
	var _catalog = {catalogid:"999",catalogname:"no"};
}


//if(_catalog.catalogid != "8"){
	//百度统计个人
	if (typeof _webInfo != "undefined") {//
	  var bjname = _webInfo.Username;
	  var hm = document.createElement("script");
	  if (bjname != '') {
		switch (bjname){
			case 'zyl':
			hm.src = _hmUrl+"fa235f05163355c9fa138835f33c5e9f";
			break;              
			case 'geli':
			hm.src = _hmUrl+"6ea80fe1c5a59d62a5f2927fae08b14a";
			break;      
			case 'liyajuan':
			hm.src = _hmUrl+"8fbaa12eeb8e5285af5a27681fe4d89f";
			break;                                         
			case 'chenjiao':
			hm.src = _hmUrl+"6d7f88f7f3fb94dcb2adda0cf19273a6";
			break; 
			case 'yangshuyuan':
			hm.src = _hmUrl+"26f5a6357d5cb2f4d0cce6f8e2817fd3";
			break; 
			case 'zyl01':
			hm.src = _hmUrl+"fa235f05163355c9fa138835f33c5e9f";
			break;  
			case 'chendide':
			hm.src = _hmUrl+"64b31528781340b76e8b8bb0339ad3b3";
			break;  
			case 'test':
			hm.src = _hmUrl+"96939db79482d988851d1ae6275b8e05";
			break;  		
		}
		if (hm.src != '') {
		  var s = document.getElementsByTagName("script")[0];
		  s.parentNode.insertBefore(hm, s);
		}
		else{
		  hm.src = _hmUrl+"96939db79482d988851d1ae6275b8e05";
		  var s = document.getElementsByTagName("script")[0];
		  s.parentNode.insertBefore(hm, s);	
		}
	  }
	}
//}


if(typeof(_pageinfo) != "undefined" && typeof(_pageinfo.categroyId) != "undefined"){

	//手游安卓-大类（4） 或者 ios小分类（67,68）
	if(_pageinfo.rootId == 4 || _pageinfo.categroyId == 67 ||  _pageinfo.categroyId == 68){
		var hm = document.createElement("script");
		hm.src = _hmUrl+"xx";
		var s = document.getElementsByTagName("script")[0]; 
		s.parentNode.insertBefore(hm, s); 
	}	
}


