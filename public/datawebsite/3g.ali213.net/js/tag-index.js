$(document).ready(function(){
    var allow = true;
    
    $(".all_more").click(function(){
    	var tn='all';
        $(".all_more").attr("rel",parseInt($(".all_more").attr("rel"))+1);
        allow = false;
		var page=parseInt($(".all_more").attr("rel"));
        $.getJSON('/heji/indexajax?page='+page+'&tn='+tn,function(result){
            var loadingstr="";
            for (var x in result){
                loadingstr += '<a href="'+result[x]['url']+'"  class="heji '+result[x]['nid']+'" '+(result[x]['isshow']==0 ? 'style="display:none;"' : '')+'><img src="'+result[x]['img']+'" /><span>'+result[x]['title']+'</span></a>';
            }
            $(".youxiheji ul").append(loadingstr);
            if (page>50 || result.length < 10) $(".all_more").remove();
            allow = true;
        });
    });

    $(".game_more").click(function(){
    	var tn='game';
        $(".game_more").attr("rel",parseInt($(".game_more").attr("rel"))+1);
        allow = false;
		var page=parseInt($(".game_more").attr("rel"));
        $.getJSON('/heji/indexajax?page='+page+'&tn='+tn,function(result){
            var loadingstr="";
            for (var x in result){
                loadingstr += '<a href="'+result[x]['url']+'"  class="heji '+result[x]['nid']+'" '+(result[x]['isshow']==0 ? 'style="display:none;"' : '')+'><img src="'+result[x]['img']+'" /><span>'+result[x]['title']+'</span></a>';
            }
            $(".tag-game ul").append(loadingstr);
            if (page>50 || result.length < 10) $(".game_more").remove();
            allow = true;
        });
    });

    $(".soft_more").click(function(){
    	var tn='soft';
        $(".soft_more").attr("rel",parseInt($(".soft_more").attr("rel"))+1);
        allow = false;
		var page=parseInt($(".soft_more").attr("rel"));
        $.getJSON('/heji/indexajax?page='+page+'&tn='+tn,function(result){
            var loadingstr="";
            for (var x in result){
                loadingstr += '<a href="'+result[x]['url']+'"  class="heji '+result[x]['nid']+'" '+(result[x]['isshow']==0 ? 'style="display:none;"' : '')+'><img src="'+result[x]['img']+'" /><span>'+result[x]['title']+'</span></a>';
            }
            $(".tag-soft ul").append(loadingstr);
            if (page>50 || result.length < 10) $(".soft_more").remove();
            allow = true;
        });
    });
});
/*游戏，软件切换*/
$('.fenlei a').click(function(){
    var n = $(this).index();
    if(n!=$('.fenlei a').length-1){
		if(!$(this).hasClass('active')){
			$('.fenlei a').removeClass('active');
			$(this).addClass('active');
			$('.youxiheji').hide();
			$('.content').hide();
			if(n==0){
				//$('.tag_more').show();
				$('.youxiheji').show();
			}else{
				$('.content').eq(n-1).show();
			}
		}
	}
});
(function(){
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?d8ab2d96f825f2b3b3fa0980881a4700";
    var sm = document.getElementsByTagName("script")[0];
    sm.parentNode.insertBefore(hm, sm);
})(window);