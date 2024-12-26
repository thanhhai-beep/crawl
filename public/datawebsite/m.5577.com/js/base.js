//==========Mobile redirect Begin ========
var browser = {
	versions: function () {
		var u = navigator.userAgent, app = navigator.appVersion;
		return {//�ƶ��ն�������汾��Ϣ
			trident: u.indexOf('Trident') > -1, //IE�ں�
			presto: u.indexOf('Presto') > -1, //opera�ں�
			webKit: u.indexOf('AppleWebKit') > -1, //ƻ�����ȸ��ں�
			gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //����ں�
			mobile: !!u.match(/AppleWebKit.*Mobile/i) || !!u.match(/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/), //�Ƿ�Ϊ�ƶ��ն�
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios�ն�
			android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android�ն˻���uc�����
			iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //�Ƿ�ΪiPhone����QQHD�����
			iPad: u.indexOf('iPad') > -1, //�Ƿ�iPad
			webApp: u.indexOf('Safari') == -1 //�Ƿ�webӦ�ó���û��ͷ����ײ�
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
	this.backTop();//���ض���
	this.searchFunction();//��������
	this.searchKey();//�����ؼ������			
	this.showClass();//��ʾ��Ŀ����
	this.clickTab();//���ѡ�
	this.clickTab1();//���ѡ�		
	this.highlight();//��������
	this.commentSeo();//����
	this.testJb();//��ӽǱ�
	if(pageAttr.pagename == 'keywordinfo'){
		// ��Kҳ��
		//ѡ�
		$(".g-key-tabbtn li").click(function(){
			$(this).addClass("f-hover").siblings().removeClass("f-hover");
			var i = $(this).index();
			if(i == 0){
				$(".g-box").show();
			}else{
				$(".m-ohter-key").parent().hide();	
			}
			})
			// �����ɫ
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
				alert("�������зǷ��ַ�")		
			}
		}else{
			window.location.href="http://m.5577.com/search/hotsearch.html";
		}
	}
},
searchKey:function(){
	if(pageAttr.pagename == "index" || pageAttr.pagename == "cmsinfo"){
		$("#keyword").val('ָ���Ĵ��齫');
	}
	if(pageAttr.pagename == "gameclass" ||pageAttr.pagename == "gamelist" || pageAttr.pagename == "gameselected"|| pageAttr.pagename == "gamehot"|| pageAttr.pagename == "gamedown"){
		$("#keyword").val('��̬��');
	}
	if(pageAttr.pagename == "softclass" || pageAttr.pagename == "softselected"|| pageAttr.pagename == "softhot"|| pageAttr.pagename == "cmslist"|| pageAttr.pagename == "cmsnewlist"|| pageAttr.pagename == "company"){
		$("#keyword").val('�̾�');
	}	
	if(pageAttr.pagename == "allkeyword" || pageAttr.pagename == "keywordinfo"|| pageAttr.pagename == "kuindex"|| pageAttr.pagename == "kucms"|| pageAttr.pagename == "theme"){
		$("#keyword").val('0.1��');
	}	
	
	if(pageAttr.pagename == "softrank"|| pageAttr.pagename == "gamerank"){ //����
		$("#keyword").val('��v��');
	}	
},
showClass:function(){
	if($(".g-class-top").length <= 0){
		return false;
	}
	var navHtml = '<div class="g-hide-nav m-tab-box"><ul class="g-hide-btn m-tab-btn"><li><strong>��Ϸ</strong></li><li><strong>���</strong></li></ul><ul class="g-hide-cont m-tab-cont">'+
	'<li><a href="http://m.5577.com/d/catalogid/41/1/0/"><b></b><strong>BT�ƽ�</strong></a></li>'+
	'<li><a href="http://m.5577.com/d/catalogid/35/1/0/"><b></b><strong>��ɫ����</strong></a></li>'+
	'<li><a href="http://m.5577.com/d/catalogid/38/1/0/"><b></b><strong>����Լ�</strong></a></li>'+
	'<li><a href="http://m.5577.com/d/catalogid/36/1/0/"><b></b><strong>����ս��</strong></a></li>'+
	'<li><a href="http://m.5577.com/d/catalogid/37/1/0/"><b></b><strong>��������</strong></a></li>'+
	'<li><a href="http://m.5577.com/d/catalogid/39/1/0/"><b></b><strong>��������</strong></a></li>'+
	'<li><a href="http://m.5577.com/d/catalogid/40/1/0/"><b></b><strong>��������</strong></a></li>'+
	'<li><a href="http://m.5577.com/d/catalogid/68/1/0/"><b></b><strong>IOS��̬</strong></a></li>'+
	'</ul><ul class="g-hide-cont g-hide-soft m-tab-cont">'+
	'<li><a href="http://m.5577.com/d/catalogid/6/1/0/"><b></b><strong>��������</strong></a></li>'+
	'<li><a href="http://m.5577.com/d/catalogid/7/1/0/"><b></b><strong>ֱ��Ӱ��</strong></a></li>'+
	'<li><a href="http://m.5577.com/d/catalogid/8/1/0/"><b></b><strong>�칫ѧϰ</strong></a></li>'+
	'<li><a href="http://m.5577.com/d/catalogid/9/1/0/"><b></b><strong>�������</strong></a></li>'+
	'<li><a href="http://m.5577.com/d/catalogid/10/1/0/"><b></b><strong>���е���</strong></a></li>'+
	'<li><a href="http://m.5577.com/d/catalogid/18/1/0/"><b></b><strong>��Ϸ����</strong></a></li>'+
	'<li><a href="http://m.5577.com/d/catalogid/24/1/0/"><b></b><strong>��������</strong></a></li>'+
	'<li><a href="http://m.5577.com/d/catalogid/66/1/0/"><b></b><strong>IOSӦ��</strong></a></li>'+
	'</ul></div>';
	$(".g-class-top").after(navHtml);
	$(".m-nav-btn").click(function(){
		var btnObj = $(this).text();
		if(btnObj=="չ��"){			
			$(".g-hide-nav").show();
			$(this).text("����");
			$(this).addClass("m-hover");
		}else{
			$(".g-hide-nav").hide();
			$(this).text("չ��");
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
		if(btnText == '�鿴��������'){
			$("#comment_0 dl").animate({"height":plHeight},200);
			$(this).text("��������")
		}else if(btnText == '��������'){
			$("#comment_0 dl").animate({"height":dtHeight},200);
			$(this).text("�鿴��������")
		}

	});
	$("#verify").click(function(){
		commontSubmit();
	});
	function addRealCommont(data){
		var comment = '<dt><span><i>���¥</i><b>�������� ���� ����</b> </span><em>������: <font color="red"> '+showTime()+' </font>  </em></dt>'
		comment += '<dd>{0}<p id="'+$("#app-id").val()+'"><a href="javascript:">֧��<em>(</em><span> 0 </span><em>)</em></a> <a href="javascript:" pid="'+$("#app-id").val()+'">��¥(�ظ�)</a> </p></dd>';
		comment = comment.replace("{0}",data);
		$("#comment_0 dl").prepend(comment);
	}
	function commontSubmit(){
		
			var id = $("#app-id").val();
			var content = $(".w-text textarea").val();
			if($.trim(content).length <= 2) {
			alert("����д����");
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
					 alert("�ύ�ɹ�");
					 $(".w-text textarea").val("");
					 addRealCommont(s)
				 },
			 dataType: ""
			});
		
	}
	function showTime(){
	var mydate = new Date();
	var str = "" + mydate.getFullYear() + "��";
	str += (mydate.getMonth()+1) + "��";
	str += mydate.getDate() + "��";
	return str;
	}
},
testJb:function(){
	$(".g-recomd-game li a").append("<i></i>");
	$(".g-recomd-game li a strong:contains('����')").parent().children("i").addClass("blue").text("����");
	$(".g-recomd-game li a strong:contains('��Ϊ')").parent().children("i").addClass("blue").text("��Ϊ");
	$(".g-recomd-game li a strong:contains('vivo')").parent().children("i").addClass("blue").text("vivo");
	$(".g-recomd-game li a strong:contains('360')").parent().children("i").addClass("blue").text("360��");
	$(".g-recomd-game li a strong:contains('��Ѷ')").parent().children("i").addClass("blue").text("��Ѷ");
	$(".g-recomd-game li a strong:contains('�ٶ�')").parent().children("i").addClass("blue").text("�ٶ�");
	$(".g-recomd-game li a strong:contains('С��')").parent().children("i").addClass("blue").text("С��");
	$(".g-recomd-game li a strong:contains('����')").parent().children("i").addClass("blue").text("����");

	$(".g-recomd-game li a strong:contains('����')").parent().children("i").addClass("green").text("����");
	$(".g-recomd-game li a strong:contains('����')").parent().children("i").addClass("green").text("���ʰ�");
	$(".g-recomd-game li a strong:contains('�ȸ�')").parent().children("i").addClass("green").text("�ȸ�");
	$(".g-recomd-game li a strong:contains('̨��')").parent().children("i").addClass("green").text("̨��");
	$(".g-recomd-game li a strong:contains('�շ�')").parent().children("i").addClass("green").text("�շ�");
	$(".g-recomd-game li a strong:contains('����')").parent().children("i").addClass("green").text("����");

	$(".g-recomd-game li a strong:contains('�޵�')").parent().children("i").addClass("red").text("�޵�");
	$(".g-recomd-game li a strong:contains('����')").parent().children("i").addClass("red").text("����");
	$(".g-recomd-game li a strong:contains('ֱװ')").parent().children("i").addClass("red").text("ֱװ");
	$(".g-recomd-game li a strong:contains('����')").parent().children("i").addClass("red").text("����");
	$(".g-recomd-game li a strong:contains('��̬')").parent().children("i").addClass("red").text("��̬");
	$(".g-recomd-game li a strong:contains('����')").parent().children("i").addClass("red").text("����");
	$(".g-recomd-game li a strong:contains('���')").parent().children("i").addClass("red").text("���");
	$(".g-recomd-game li a strong:contains('�浵')").parent().children("i").addClass("red").text("�浵");
	$(".g-recomd-game li a strong:contains('����')").parent().children("i").addClass("red").text("����");
	$(".g-recomd-game li a strong:contains('ȥ���')").parent().children("i").addClass("red").text("ȥ���");
	$(".g-recomd-game li a strong:contains('��ȸ�')").parent().children("i").addClass("red").text("��ȸ�");
	$(".g-recomd-game li a strong:contains('����')").parent().children("i").addClass("red").text("����");
	$(".g-recomd-game li a strong:contains('�޸�')").parent().children("i").addClass("red").text("�޸�");
	$(".g-recomd-game li a strong:contains('���޽�')").parent().children("i").addClass("red").text("���޽�");
	$(".g-recomd-game li a strong:contains('�ƽ�')").parent().children("i").addClass("red").text("�ƽ�");
	$(".g-recomd-game li a strong:contains('������')").parent().children("i").addClass("red").text("������");
	$(".g-recomd-game li a strong:contains('����')").parent().children("i").addClass("red").text("����");
	$(".g-recomd-game li a strong:contains('�ڹ�')").parent().children("i").addClass("red").text("�ڹ�");	
}
}