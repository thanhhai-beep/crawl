
//$(".soBox").click(function(){return window.location.href="/search/hotsearch.html",!1});


function ischkwords(){
	if (typeof census_word == "undefined") return false;
	for(i=0;i<census_word.length;i++){
		if(document.title.indexOf(census_word[i]) !=-1)return true;
	}
	return false;
}

$(function () {

	var userstat=true;

	if(typeof ischkwords === "function"){

	}
    if ( typeof _webInfo != "undefined")
    {
		if (typeof _pageinfo != "undefined"){
			if(_pageinfo.softname.indexOf("暂未上线")!=-1 || _pageinfo.softlicence=="下架")userstat=false;
		}
    }
});

$(function(){
	if ($("#CommentTpye")&&$("#app-id")){
		var id=$("#app-id").val();
		var cmshit=sessionStorage['cmshit'+id]?sessionStorage['cmshit'+id]:"";
		if($("#CommentTpye").val()=="1"&&cmshit==""){
			$.get("/ajax.asp?action=4&id="+id, function(msg){sessionStorage['cmshit'+id]="1";});
		}
	}

	addFoot();//返回顶部
	addsou();
	$(".m-nav-btn").click(function(){
		var n = $(this).attr("data-num");
		if(n==0){
			$(this).next().next("div").show();
			$(this).attr("data-num",1);
		}else{
			$(this).next().next("div").hide();
			$(this).attr("data-num",0);
		}
	})
	var a = 1;
    $(".menu").click(function(){
	    if(a==1){
			$(this).addClass("open").removeClass("close");
			a = 2;
		}else{
			$(this).addClass("close").removeClass("open");
			a = 1;
		}
   })
	$(".plist").each(function(i){//横向多个滑动
		var idStr = $(this).attr("id");
	 	var parent_class =  $(this).attr("class");
		var child_class =  $("."+parent_class).children(i).children(0).attr("class");
		createIScroll(idStr,"g-ppt-btn");
	});
	var openUrl = "";	
	$(".bdcs-search-form-input").keyup(function(){
		 if(event.keyCode == 13){
			event.preventDefault();
			keywordCont();
		 }
	})
	$('.bdcs-search-form-input').bind({ 
       focus:function(){ 
         if (this.value == this.defaultValue){ 
           this.value=""; 
         } 
       }, 
       blur:function(){ 
         if (this.value == ""){ 
            this.value = this.defaultValue; 
         } 
       }  
    }); 
	$(".bdcs-search-form-submit").click(function(){
		event.preventDefault();
		keywordCont()
	})	
	
	function keywordCont(){
		var falseWords = ["破解","注册机"];
		var keyFont = $(".bdcs-search-form-input").val();
		/*if(keyFont != ""){
			for(i=0;i<falseWords.length;i++){
				if(keyFont.indexOf(falseWords[i]) != -1){
					alert("不允许有非法字符");
					return false;
				}	
			}	
			if (browser.versions.android) {	
				openUrl = "http://s.downyi.com/search/m/"+keyFont+"_android_rank.html";
			}else{
				openUrl = "http://s.downyi.com/search/pc/"+keyFont+"_all_hits.html";
			}		
			//window.location.href = openUrl;
			window.location.href ="http://s.downyi.com/m/?k="+encodeURIComponent(keyFont);
		}else{
			window.location.href="http://s.downyi.com";
		}*/
	}
});
function addsou(){
	var arr = ["映客直播","爱奇艺","阴阳师","倩女幽魂","梦幻西游","影音先锋","王者荣耀","陌陌","荒野行动","火影战记","植物大战僵尸","官居一品","我的世界","诛仙"]; 
		var index = Math.floor((Math.random()*arr.length)); 
	$(".bdcs-search-form-input").attr("value",arr[index])

}


function addFoot(){
	$(window).scroll(function(){
		if($(window).scrollTop()>300){
			$("#goTop").fadeIn("fast");
		}else{
			$("#goTop").fadeOut("fast");
		}
	});
	$("#goTop").click(function(){
		$("html,body").animate({scrollTop:0},200)
	});
}

var a = document.title;
$("footer.bottom p a:last").after('|<a href="http://m.downyi.com/feedback.html?tit=' + a + '">举报反馈</a></a>')
