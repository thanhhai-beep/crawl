




function highlight(){
	var nameSize = $(".g-yang-name").length;
	if(nameSize>0){
		var className = $(".g-yang-name").html();
		$(".nav ul li a").each(function(){
			if($(this).html()==className){
				$(this).addClass("cur");
			}
		})
	}
}
highlight();

//搜索
document.onkeydown=function(event){
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if(e && e.keyCode==13){ // 回车键
        search();
    }
}

// document.onkeydown=function(event){
// 	var e = event || window.event || arguments.callee.caller.arguments[0];
// 	if(e && e.keyCode==13){ // 回车键
// 		search();
// 	}
// }
$(".file .file-r").click(function(){
	search();
});
function search(){
	window.location.href="//m.66rjz.com/?s="+$.trim($("#search").val());
}

(function(){
	$(".main .top .tops span.code").click(function(){
		
	$(".cover").css({"display":"block"});
	var bodyheight=$("body").height();//body高度
	$(".cover").css({"height":""+bodyheight+"px"});
	$(".tion").css({"display":"block"});
	$(".tion").css({"left":"-70%"});
	$(".tion").animate({"left":"0%"},50);
	
	});
	$(".cover,.tion .tion-top em").click(function(){
		if($(".cover").css("display")=="block"){
			$(".cover").css({"display":"none"});
			$(".tion").animate({"left":"-70%"},50);
		}
	});
})();

 $(window).scroll(function () {
          if ($(window).scrollTop() > 200) {
                if(!document.getElementById('gotoBox'))
                {
                    $(".back").fadeIn(400);
                }
          } else {
                if(!document.getElementById('gotoBox'))
                {
                    $(".back").fadeOut(200);
                }
          }
          });
          $(".back").click(function () {
          $('html,body').animate({
          scrollTop : '0px'
          }, 200);
          
});
// //360ts
// (function(){
// var src = (document.location.protocol == "http:") ? "http://js.passport.qihucdn.com/11.0.1.js?2b773bb6020c1ce17d004b67567f2029":"https://jspassport.ssl.qhimg.com/11.0.1.js?2b773bb6020c1ce17d004b67567f2029";
// document.write('<script src="' + src + '" id="sozz"><\/script>');
// })();
// //CNZZ
// document.writeln("<span style='display:none'><script src=\'https://s22.cnzz.com/z_stat.php?id=1275003130&web_id=1275003130\' language=\'JavaScript\'></script></span>");

// 好搜收录推送
(function(){
    var src = (document.location.protocol == "http:") ? "http://js.passport.qihucdn.com/11.0.1.js?ba897ee005dc3835fb7be93673e69b09":"https://jspassport.ssl.qhimg.com/11.0.1.js?ba897ee005dc3835fb7be93673e69b09";
    $('body').append('<script src="' + src + '" id="sozz"><\/script>');
})();
 
// 百度搜索收录推送
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

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?ecc22e1e1b04fc139b45a36933bddca5";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
// 防劫持
// try{
// 	if(self!=top){
// 		top.location.href=self.location.href;
// 	}
// }catch(e){}