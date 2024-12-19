$(function(){
    //首页右侧游戏软件切换
    $('.m-hover').mouseenter(function () {
        if ($(this).index() == 1){
            $('#tj-game').hide();
			$('#tj-soft').show();
		} else{
            $('#tj-soft').hide();
            $('#tj-game').show();
		}
    });
    //首页游戏软件列表栏目展开
	$('.zhankai').click(function () {
		if ($(this).parent('p').height() == 50){
            $(this).parent('p').css({'height':'auto'});
		}else {
            $(this).parent('p').css({'height':'50px'});
		}

    });

    $('.phcon li').mouseenter(function(){
        $(this).addClass('on').siblings().removeClass('on')

    })


	$("#recapp .g-font-list:eq(0)").find("span a").eq(0).css({"color":"red","font-weight":"bolder"});

	//ǰ���ӱ���
	$("ul.f-list-bg").each(function(){
      $(this).find("li:eq(0)").addClass('one');
      $(this).find("li:eq(1)").addClass('two');
      $(this).find("li:eq(2)").addClass('three');
 	});
	
	$(".g-top-dome").slide({mainCell:".g-domelist ul",autoPage:true,effect:"left",scroll:1,vis:10});//��������
	$(".g-banimg").slide({titCell:".g-banimg-ico ul",mainCell:".g-banimg-list ul",autoPage:true,autoPlay:true,effect:"left",titOnClassName:"m-hover"});//banner
	$(".g-fr-dome").slide({titCell:".g-fr-ico ul",mainCell:".g-fr-bd ul",autoPage:true,effect:"left",titOnClassName:"m-hover"});//right img
	$(".g-tjzq").slide({titCell:".g-dome-link li",mainCell:".g-tjzq-bd",titOnClassName:"m-hover"});//�Ƽ�ר��
	$(".g-ivtab").slide({titCell:".g-ivtab-top li",mainCell:".g-ivtab-bd",titOnClassName:"m-hover"});//�������
	$(".g-special-dome").slide({mainCell:".g-special-cont ul",autoPage:true,effect:"left",scroll:1,vis:4});//���ר��
	$(".g-spftware-cont").slide({titCell:".g-spftware-top li",mainCell:".g-spftware-bd",titOnClassName:"m-hover"});//����ر�
	$(".g-android-cont").slide({titCell:".g-android-top li",mainCell:".g-android-bd",titOnClassName:"m-hover"});//��׿ ƻ��
	$(".g-article").slide({titCell:".g-article-top li",mainCell:".g-article-bd",titOnClassName:"m-hover"});//��Ѷ�̳�
	//���а�
	$(".f-list-hover").each(function(){
		$(this).find("li:first").addClass("m-hover");   
	})
	$(".f-list-hover li").hover(function() {
		$(this).addClass("m-hover").siblings("li").removeClass("m-hover"); 
	});
	

	//���ݵ������֣�������ʾ��ҳ�ײ����ٱ������ַ���ӡ�
	var cityAr = ['����','�Ϻ�','����','����','�人','����','����']
	$.ajax({
	    async : true,
	    url : "//api.map.baidu.com/location/ip?ak=OQW2009LCY9UUV7OMif84Me18OOQHL7x",
	    type : "get",
	    dataType : "jsonp", 
	    jsonp : 'callback', 
	    jsonpCallback: 'city', 
	    data : {
	        q : "javascript", 
	        count : 1
	     }, 
	    success: function(response, status, xhr){
	         var province = response.address.split('|')[1]
	         var city = response.address.split('|')[2]
	         console.log($.inArray(city, cityAr))
	       	 if($.inArray(city, cityAr) == -1){
	           $(".g-new-footcont .g-jbzx").hide();
	         }
	    }
	 });


	
});

//��������
$(function(){
	var i=1;
	var ah=34;
	var c=$("#links-box").height()/ah-3;
	$(".r-bottom").click(function(){
		var t=(-ah*i)+'px';
		if(i<c){
			$("#links-box").stop(true).animate({top:t},300);
			i++;
		}else{return}
	});
	$(".r-top").click(function(){
		var t=parseInt(-ah*i+ah*2)+'px';
		if(i>1){
			$("#links-box").stop(true).animate({top:t},300);
			i--;
		}else{return}
	});
})


$(function($) {  searchOver()  });
function searchOver(){	
	var moren = "���";
	
	 $("#topForm dl:first").click(function(){	
	 	var liLast = $(this).children("dd").css("display");
	console.log(liLast)
	 	if(liLast=="none"){
	 		$(this).find("dd").show();
	 	}else{
	 		$(this).find("dd").hide();	
	 	}
	 })
	 $("#topForm dl dd").click(function(){
		moren = $(this).attr("data-type");	
	   $("#topForm dl dt").html(moren+"<i></i>")
	})
	 
	 
	$(".m_xzk p a").click(function(){
		moren = $(this).attr("data-type");	
		$("#topqqsou dl dt").html(moren)
	})	
	$("#keyword").keyup(function(){
		 if(event.keyCode == 13){
			keywordCont();

		 }
	})
	$(".schbtn").click(function(){
		keywordCont();	
		
	})	
}

//������keys	
function Insearch(sid,keys,typeclass,linum){
	var dataCont="action=31&urlclass=search&locationclass=search&typeclass="+typeclass+"&keyword="+escape(keys)+"&sid="+sid+"&stype=pc&linum="+linum
		$.ajax({
			type: "Get",
			url: "/ajax.asp",
			data: dataCont,
			success: function(msg){
				console.log("�ɹ�")	
				//alert(msg)
				

			},error:function(){
				console.log("ʧ��")
			}
		});	

}


