//==========Mobile redirect Begin ========
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
			webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
		};domain
	} (),
	language: (navigator.browserLanguage || navigator.language).toLowerCase()
} 
$(function(){
if(typeof(pageAttr) == "undefined"){return false}
baseJs.init();	
})

var baseJs = {
init:function(){		
	this.backTop();//返回顶部
	this.searchFunction();//搜索功能
	this.searchKey();//搜索关键词添加			
	this.showClass();//显示栏目分类
	this.clickTab();//点击选项卡
	this.clickTab1();//点击选项卡		
	this.highlight();//导航高亮
	this.commentSeo();//评论
	this.testJb();//添加角标
	if(pageAttr.pagename == 'keywordinfo'){
		// 新K页面
		//选项卡
		$(".g-key-tabbtn li").click(function(){
			$(this).addClass("f-hover").siblings().removeClass("f-hover");
			var i = $(this).index();
			if(i == 0){
				$(".g-box").show();
			}else{
				$(".m-ohter-key").parent().hide();	
			}
			})
			// 随机颜色
			var likeSize = $(".m-xgkp a").length;
			if(likeSize > 0){
			var likeSizeL = Math.ceil(($(".m-xgkp a").length) );
			aArray = []
			for (i = 1; i < likeSizeL; i++) {
				var n = parseInt(Math.random() * likeSize);
				if ($.inArray(n, aArray) == -1) {
					aArray.push(n);
					$(".m-xgkp").each(function() {
						$(this).find("a").eq(n).addClass("m-color" + i);
					})
				} else {
					i--;
					continue;
				}
			}
		}
	}
	

},	
clickTab:function(){
	if($(".m-tab-box").length>0){
		$(".m-tab-box").each(function(){
			$(this).find(".m-tab-btn").children().first().addClass("f-hover");
			$(this).find(".m-tab-cont:first").show();
		})
		$(".m-tab-cont").each(function(){			
			var childSize = $(this).children().length;
			if(childSize<=0){
				var nAll = $(this).parents(".m-tab-box").find(".m-tab-cont:first").prevAll().length;
				var n = $(this).index();
				$(this).parents(".m-tab-box").find(".m-tab-btn li").eq(n-nAll).hide();
				
			}
			
		})
		$(".m-tab-btn").children().click(function(){
			$(this).addClass("f-hover").siblings().removeClass("f-hover");
			var n = $(this).index();
			$(this).parents(".m-tab-box").find(".m-tab-cont").eq(n).show().siblings(".m-tab-cont").hide();			
		})
	}
},
clickTab1:function(){
	if($(".f-tab-box").length>0){
		$(".f-tab-box").each(function(){
			$(this).find(".f-tab-btn").children().first().addClass("f-hover");
			$(this).find(".f-tab-cont:gt(0)").hide();
		})
		$(".f-tab-cont").each(function(){			
			var childSize = $(this).children().length;
			if(childSize<=0){
				var nAll = $(this).parents(".m-tab-box").find(".m-tab-cont:first").prevAll().length;
				var n = $(this).index();
				$(this).parents(".m-tab-box").find(".m-tab-btn li").eq(n-nAll).hide();
				
			}
			
		})
		$(".f-tab-btn").children().click(function(){
			$(this).addClass("f-hover").siblings().removeClass("f-hover");
			var n = $(this).index();
			$(this).parents(".f-tab-box").find(".f-tab-cont").eq(n).show().siblings(".f-tab-cont").hide();			
		})
	}
},
backTop:function(){
	var backTopHtml = '<b class="f-backtop" style="width:50px; height:51px; background:url(/skin/2015/images/moblie-bg.png) no-repeat 0 -312px; background-size:414px; overflow:hidden; position:fixed; bottom:80px; right:20px; display:none; z-index:9999; font-size:0;"></b>';
	$("body").append(backTopHtml);
	$(window).scroll(function(){
		if($(window).scrollTop() > 200){
			$(".f-backtop").show();	
		}else{
			$(".f-backtop").hide();	
		}
	});
	$(".f-backtop").click(function(){
		$("html,body").animate({scrollTop:0})	
	});
},
searchFunction:function(){
	$('#keyword').bind({ 
		focus:function(){ 
			window.location.href = "http://m.5577.com/search/hotsearch.html";	
			return false
		}, 
		blur:function(){ 
			if (this.value == ""){ 
				 this.value = this.defaultValue; 
			} 
		}  
	 }); 
	var openUrl = "";	
	$("#keyword").keyup(function(){
		 if(event.keyCode == 13){
			keywordCont();
		 }
	})
	$(".search-button").click(function(){
		keywordCont()
	})		
	function keywordCont(){
		var keyFont = $("#keyword").val();
		if(keyFont != ""){
			if($("#keyword").val().indexOf('_') == -1 || $("#keyword").val().indexOf('+') == -1){
				if (browser.versions.android) {	
					openUrl = `http://s.5577.com/sousuo/m/?k=${encodeURI(keyFont)}`;
				}else{
					openUrl = `http://s.5577.com/sousuo/m/?k=${encodeURI(keyFont)}`;
				}		
				window.location.href = openUrl;	
			}else{
				alert("不允许有非法字符")		
			}
		}else{
			window.location.href="http://m.5577.com/search/hotsearch.html";
		}
	}
},
searchKey:function(){
	if(pageAttr.pagename == "index" || pageAttr.pagename == "cmsinfo"){
		$("#keyword").val('指尖四川麻将');
	}
	if(pageAttr.pagename == "gameclass" ||pageAttr.pagename == "gamelist" || pageAttr.pagename == "gameselected"|| pageAttr.pagename == "gamehot"|| pageAttr.pagename == "gamedown"){
		$("#keyword").val('变态版');
	}
	if(pageAttr.pagename == "softclass" || pageAttr.pagename == "softselected"|| pageAttr.pagename == "softhot"|| pageAttr.pagename == "cmslist"|| pageAttr.pagename == "cmsnewlist"|| pageAttr.pagename == "company"){
		$("#keyword").val('短剧');
	}	
	if(pageAttr.pagename == "allkeyword" || pageAttr.pagename == "keywordinfo"|| pageAttr.pagename == "kuindex"|| pageAttr.pagename == "kucms"|| pageAttr.pagename == "theme"){
		$("#keyword").val('0.1折');
	}	
	
	if(pageAttr.pagename == "softrank"|| pageAttr.pagename == "gamerank"){ //排行
		$("#keyword").val('满v版');
	}	
},
showClass:function(){
	if($(".g-class-top").length <= 0){
		return false;
	}
	var navHtml = '<div class="g-hide-nav m-tab-box"><ul class="g-hide-btn m-tab-btn"><li><strong>游戏</strong></li><li><strong>软件</strong></li></ul><ul class="g-hide-cont m-tab-cont">'+
	'<li><a href="http://m.5577.com/d/catalogid/41/1/0/"><b></b><strong>BT破解</strong></a></li>'+
	'<li><a href="http://m.5577.com/d/catalogid/35/1/0/"><b></b><strong>角色扮演</strong></a></li>'+
	'<li><a href="http://m.5577.com/d/catalogid/38/1/0/"><b></b><strong>射击吃鸡</strong></a></li>'+
	'<li><a href="http://m.5577.com/d/catalogid/36/1/0/"><b></b><strong>策略战争</strong></a></li>'+
	'<li><a href="http://m.5577.com/d/catalogid/37/1/0/"><b></b><strong>休闲益智</strong></a></li>'+
	'<li><a href="http://m.5577.com/d/catalogid/39/1/0/"><b></b><strong>竞技体育</strong></a></li>'+
	'<li><a href="http://m.5577.com/d/catalogid/40/1/0/"><b></b><strong>当官养成</strong></a></li>'+
	'<li><a href="http://m.5577.com/d/catalogid/68/1/0/"><b></b><strong>IOS变态</strong></a></li>'+
	'</ul><ul class="g-hide-cont g-hide-soft m-tab-cont">'+
	'<li><a href="http://m.5577.com/d/catalogid/6/1/0/"><b></b><strong>恋爱交友</strong></a></li>'+
	'<li><a href="http://m.5577.com/d/catalogid/7/1/0/"><b></b><strong>直播影音</strong></a></li>'+
	'<li><a href="http://m.5577.com/d/catalogid/8/1/0/"><b></b><strong>办公学习</strong></a></li>'+
	'<li><a href="http://m.5577.com/d/catalogid/9/1/0/"><b></b><strong>生活理财</strong></a></li>'+
	'<li><a href="http://m.5577.com/d/catalogid/10/1/0/"><b></b><strong>出行导航</strong></a></li>'+
	'<li><a href="http://m.5577.com/d/catalogid/18/1/0/"><b></b><strong>游戏辅助</strong></a></li>'+
	'<li><a href="http://m.5577.com/d/catalogid/24/1/0/"><b></b><strong>生活娱乐</strong></a></li>'+
	'<li><a href="http://m.5577.com/d/catalogid/66/1/0/"><b></b><strong>IOS应用</strong></a></li>'+
	'</ul></div>';
	$(".g-class-top").after(navHtml);
	$(".m-nav-btn").click(function(){
		var btnObj = $(this).text();
		if(btnObj=="展开"){			
			$(".g-hide-nav").show();
			$(this).text("收起");
			$(this).addClass("m-hover");
		}else{
			$(".g-hide-nav").hide();
			$(this).text("展开");
			$(this).removeClass("m-hover");
		}
	})	
},
highlight:function(){
	if($(".g-main-nav").length <= 0){return false}
	var pageChineName = pageAttr.chinename;
	$(".g-main-nav a").each(function(){
		if($(this).text() == pageChineName){
			$(this).addClass("f-hover");
		}
	});
	
},
commentSeo:function(){		
	var plHeight = $("#comment_0 dl").height();
	var dtHeight = 0;
	for(i=0;i<3;i++){
		dtHeight += $("#comment_0 dl dt").eq(i).height() + 10;
		dtHeight += $("#comment_0 dl dd").eq(i).height() + 6;
	};
	//alert(dtHeight)
	if(plHeight>=dtHeight){
		$("#comment_0 dl").css("height",dtHeight);
		$(".m-look-ly").show();
	}else{
		$(".m-look-ly").hide();
	}
	$(".m-look-ly").click(function(){
		var btnText = $(".m-look-ly").text()
		if(btnText == '查看更多评论'){
			$("#comment_0 dl").animate({"height":plHeight},200);
			$(this).text("收起评论")
		}else if(btnText == '收起评论'){
			$("#comment_0 dl").animate({"height":dtHeight},200);
			$(this).text("查看更多评论")
		}

	});
	$("#verify").click(function(){
		commontSubmit();
	});
	function addRealCommont(data){
		var comment = '<dt><span><i>最高楼</i><b>您的评论 网友 客人</b> </span><em>发表于: <font color="red"> '+showTime()+' </font>  </em></dt>'
		comment += '<dd>{0}<p id="'+$("#app-id").val()+'"><a href="javascript:">支持<em>(</em><span> 0 </span><em>)</em></a> <a href="javascript:" pid="'+$("#app-id").val()+'">盖楼(回复)</a> </p></dd>';
		comment = comment.replace("{0}",data);
		$("#comment_0 dl").prepend(comment);
	}
	function commontSubmit(){
		
			var id = $("#app-id").val();
			var content = $(".w-text textarea").val();
			if($.trim(content).length <= 2) {
			alert("请填写内容");
			return;
			}
			$.ajax({
			 type: 'POST',
			 url: '/ajax.asp',
			 data:  {
					 content :content,
						SoftID :id,
					 Action : 2,
					 CommentTpye : CommentTpye 	
					},
			 success: function(s){
					 alert("提交成功");
					 $(".w-text textarea").val("");
					 addRealCommont(s)
				 },
			 dataType: ""
			});
		
	}
	function showTime(){
	var mydate = new Date();
	var str = "" + mydate.getFullYear() + "年";
	str += (mydate.getMonth()+1) + "月";
	str += mydate.getDate() + "日";
	return str;
	}
},
testJb:function(){
	$(".g-recomd-game li a").append("<i></i>");
	$(".g-recomd-game li a strong:contains('官网')").parent().children("i").addClass("blue").text("官网");
	$(".g-recomd-game li a strong:contains('华为')").parent().children("i").addClass("blue").text("华为");
	$(".g-recomd-game li a strong:contains('vivo')").parent().children("i").addClass("blue").text("vivo");
	$(".g-recomd-game li a strong:contains('360')").parent().children("i").addClass("blue").text("360版");
	$(".g-recomd-game li a strong:contains('腾讯')").parent().children("i").addClass("blue").text("腾讯");
	$(".g-recomd-game li a strong:contains('百度')").parent().children("i").addClass("blue").text("百度");
	$(".g-recomd-game li a strong:contains('小米')").parent().children("i").addClass("blue").text("小米");
	$(".g-recomd-game li a strong:contains('九游')").parent().children("i").addClass("blue").text("九游");

	$(".g-recomd-game li a strong:contains('国服')").parent().children("i").addClass("green").text("国服");
	$(".g-recomd-game li a strong:contains('国际')").parent().children("i").addClass("green").text("国际版");
	$(".g-recomd-game li a strong:contains('谷歌')").parent().children("i").addClass("green").text("谷歌");
	$(".g-recomd-game li a strong:contains('台服')").parent().children("i").addClass("green").text("台服");
	$(".g-recomd-game li a strong:contains('日服')").parent().children("i").addClass("green").text("日服");
	$(".g-recomd-game li a strong:contains('韩服')").parent().children("i").addClass("green").text("韩服");

	$(".g-recomd-game li a strong:contains('无敌')").parent().children("i").addClass("red").text("无敌");
	$(".g-recomd-game li a strong:contains('完整')").parent().children("i").addClass("red").text("完整");
	$(".g-recomd-game li a strong:contains('直装')").parent().children("i").addClass("red").text("直装");
	$(".g-recomd-game li a strong:contains('公益')").parent().children("i").addClass("red").text("公益");
	$(".g-recomd-game li a strong:contains('变态')").parent().children("i").addClass("red").text("变态");
	$(".g-recomd-game li a strong:contains('体验')").parent().children("i").addClass("red").text("体验");
	$(".g-recomd-game li a strong:contains('免费')").parent().children("i").addClass("red").text("免费");
	$(".g-recomd-game li a strong:contains('存档')").parent().children("i").addClass("red").text("存档");
	$(".g-recomd-game li a strong:contains('辅助')").parent().children("i").addClass("red").text("辅助");
	$(".g-recomd-game li a strong:contains('去广告')").parent().children("i").addClass("red").text("去广告");
	$(".g-recomd-game li a strong:contains('免谷歌')").parent().children("i").addClass("red").text("免谷歌");
	$(".g-recomd-game li a strong:contains('中文')").parent().children("i").addClass("red").text("中文");
	$(".g-recomd-game li a strong:contains('修改')").parent().children("i").addClass("red").text("修改");
	$(".g-recomd-game li a strong:contains('无限金')").parent().children("i").addClass("red").text("无限金");
	$(".g-recomd-game li a strong:contains('破解')").parent().children("i").addClass("red").text("破解");
	$(".g-recomd-game li a strong:contains('无限钻')").parent().children("i").addClass("red").text("无限钻");
	$(".g-recomd-game li a strong:contains('汉化')").parent().children("i").addClass("red").text("汉化");
	$(".g-recomd-game li a strong:contains('内购')").parent().children("i").addClass("red").text("内购");	
}
}