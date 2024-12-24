$(function(){
	CommonhtmlSet();
	CommonClickSet();
	$('img.sign_app').error(function(){
		$(this).attr('src', '/static/v1/images/icon_def.png');
	});
});

function CommonClickSet(){
    $('#mcate').click(function(){
	    $('#mcateCont').slideToggle();
		$(this).find('b').toggleClass('c');
	});
	$(".menu_tab li").click(function(){
		$(this).addClass("tab_cur").siblings().removeClass("tab_cur");	
		$(".applist").hide();
		$(".applist").eq($(this).index()).show();	
	});
	$(".tab_span span").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur");	
		$(".tb_list ul").hide();
		$(".tb_list ul").eq($(this).index()).show();	
	});
	$(".search #keywords").click(function(){
		if($(".search .sohide").length<1){
			$(".search").append('<div class="sohide">关闭</div>');$(".search").addClass("sotop");
		}
		$(".search .sohide").click(function(){$(this).remove();$(".search").removeClass("sotop");});
	});
	$(".recom_rank_tab a").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		$(this).parent().parent().siblings().hide();
		$(this).parent().parent().siblings().eq($(this).index()).show(); 
	});
	/*
	Qcity.load(function(c){
		if(c.indexOf('北京')>=0){$('#ispbshowbj').remove();}else{$('#ispbshowbj').show();}
	});
	*/
}

function CommonhtmlSet(){
var a=$(".nav li a"),c=$(".left_bg"),d=$(".left_menu"),e=$(".menu_btn");
$(".menu_btn").bind("click",function(){c.show(),d.removeClass("slidOut").addClass("slidIn"),e.addClass("menu-show")}),
$(".left_bg,.left_menu .left_hd em").bind("click",function(){d.removeClass("slidIn").addClass("slidOut"),c.hide(),e.removeClass("menu-show")}),c.css("height",$(document).height()+"px"),$(window).bind("resize",function(){c.css("height",$(document).height()+"px")}),d.bind("click",function(a){a.stopPropagation()}),$(".left_bg,.left_menu").bind("touchmove",function(a){a.preventDefault()});
	if($(".goTop").length>0){
		$(window).scroll(function(){
			if($(".goTop").offset().top>300){$(".goTop").show();  }else{$(".goTop").hide();}
		});
		$(".goTop").click(function(){
			$('html,body').animate({scrollTop:'0px'},300); 
			$(this).fadeOut();
		});
	}
	if($("#topapp").length>0){
		$("#topapp").html('<ul>'+top_app()+'</ul>');
	}
	if($(".cata_toggle").length>0){
		cata_toggle();
	}
	if($("#lnav").length>0){
		var Qlnav = new iScroll("lnav",{hScroll:false,vScrollbar:false});
	}
}
	
function cata_toggle(){
	$(".cata_toggle").each(function(){
		var obj = $(this);
		if(obj.find("li").length<=8){
			obj.find(".btn").remove();
		}else{
			obj.each(function(){
				for(var i = 0;i<=obj.find("li").length;i++){
					obj.find("li").eq(i).hide();
					if(i<7){
						obj.find("li").eq(i).show();
						obj.find("li").eq(i).removeClass("disli");
					}
				}
			});
		}
	});

	$(".cata_toggle .btn span").click(function(){
		var Prevli = $(this).parent().prevAll(".disli");
		if(Prevli.css("display")=="none"){
			Prevli.show();
			$(this).attr("class","span1");
		}else{
			Prevli.hide();
			 $(this).attr("class","");
			}
	});
}


function app_more(){
	var clOS = Qi.ios()?'ios':'az',clID = $('[data-softcatalogid]').attr('data-softcatalogid') || 0;
	if(clID>0){
		var iMore = true,iload = false,iPage = 1;
		var GetHtml = function(){
			var sHtml = '';
			var jsonUrl = '/jsondata/app/app_'+clID+'_'+clOS+'_'+iPage+'.json';
			$.getJSON(jsonUrl,function(data){
				if (data != null) {
					if(data.success){
						var sData = data.items;
						totalPage = data.totalpage;
						for(var i=0;i<sData.length;i++){
							sHtml += '<li><a href="'+sData[i].url+'" class="img"><img src="'+sData[i].ico+'"></a><p><a href="'+sData[i].url+'">'+sData[i].title+'</a><span class="txt"><em class="lstar'+sData[i].rank+'"></em><u>'+sData[i].size+'</u>'+sData[i].strhits+'</span><span>'+sData[i].dp+'</span></p><a href="'+sData[i].down+'" class="btn"><em class="bg"></em>下载</a></li>';
						}
						$('.app_appmore ul').append(sHtml);
						if(iPage<totalPage){iPage++;iload = false;}else{iMore = false;$('.app_appmore .moreBtn').hide();}
					}else{iMore = false;$('.app_appmore .moreBtn').hide();}
				}else{iMore = false;}
			});
			$.ajaxSetup({
				error: function (x, e) {
					$('.app_appmore').remove();
					return false;
				}
			});
		}
		$('.app_comment').after('<section class="app_appmore"><div class="lnav"><h2>推荐下载</h2></div><ul></ul><p class="moreBtn">上拉或点击查看更多</p></section>');GetHtml();
		$('.app_appmore .moreBtn').click(function(){if(iMore && !iload){GetHtml();}});
		$(window).scroll(function(){
			var dotHeight = $(document).height(),winHeight = $(window).height(),winScroll = $(window).scrollTop();
			if(winScroll>(dotHeight-winHeight-222)){if(iMore && !iload){iload = true;GetHtml();}}
		});
	}
}

function top_app(){
	var clOS = Qi.ios()?'ios':'az',Arri = 0,Arrhtml = '',ArrList = new Array();
	$.ajaxSettings.async = false;
	$.getJSON('/jsondata/hzs/top_'+clOS+'.json',function(data){
		if(data.error=="0"){
			if(data.items.length>0){
				$.each(data.items, function(i,val){
					if(val.Url.indexOf("()")>0){
						var HtmlMidUrl = eval(val.Url);
					}else if(val.Url.indexOf(",")>1){
						var HtmlMidUrl = Qd.sr(val.Url,val.Issj);
					}else{
						var HtmlMidUrl = Qd.th(val.Url);
					}
					HtmlMidUrl = Qd.rehrefurl(HtmlMidUrl);
					if(val.Isso=="0" || (val.Isso=="1" && Qd.so(1)) || (val.Isso=="2" && Qd.so(3)()) || (val.Isso=="3" && Qd.so(2)())){
					if(val.Istop=="1"){
					Arrhtml += '<li><a href="'+HtmlMidUrl+'" src="top" onclick="Qi.downtj(this);"><img src="'+val.Img+'">'+Qd.sr(val.Title,0)+'</a></li>';
					Arri++;
					}else{
					ArrList[i] = '<li><a href="'+HtmlMidUrl+'" src="top" onclick="Qi.downtj(this);"><img src="'+val.Img+'">'+Qd.sr(val.Title,0)+'</a></li>';
					}
					}
				});
			}
		}
	});
ArrList = Arrhtml + Qd.ar(ArrList).join('');
return ArrList;
}


$(function(){
	
	//burger
	var h=$(window).height(); 
	
	$(".QZburger").css("height",h-50+"px")
	
	var x=true;
	
	$("#QZhead .meun").click(function(){
		var Htop=$("body").scrollTop();
		if(x){
			$(".QZburger").slideDown();
			document.body.scrollTop=Htop;
			$("#Wrap").css({"height":h+"px","overflow":"hidden"});//使网页不可滚动
			
			
			if($('#cambrian0').size()>=1){
				$('#QZhead').css({'position':'fixed','top':'65px'})
				$('.QZburger').css({'position':'fixed','top':'115px'})
			}else{
				$('#QZhead').css({'position':'fixed','top':'0'})
				//$('#QZburger').css({'position':'fixed','top':'0'})
			}
			
			var MtOP = $('.QZburger').next('div').css('margin-top');
			
			if(MtOP=='6px'){
				$('.QZburger').next('div').css('margin-top','57px')
			}else{
				$('.QZburger').next('div').css('margin-top','51px')
			}
			x= false;
		}else{
			$(".QZburger").slideUp();
			document.body.scrollTop=Htop;
			$("#Wrap").css({"overflow":"initial"});//使网页恢复滚动
			$('#QZhead').css({'position':'relative','top':'0'})
			$('.QZburger').next('div').css('margin-top','')
			x= true;
		}
	})
	$(".QZburger .closebtn").click(function(){
		var Htop=$("body").scrollTop();
		
		$(".QZburger").slideUp();
		document.body.scrollTop=Htop;
		$('#Wrap').css({"overflow":"initial"});//使网页恢复滚动
		$('#QZhead').css({'position':'relative','top':'0'})
		$('.QZburger').next('div').css('margin-top','')
		x= true;

	})
	
	//up
	 $(window).scroll(function() {
	        var scroll_len = $(window).scrollTop();
	        if(scroll_len > 120) {
	            $('.QZ-up').fadeIn();
	        } else {
	            $('.QZ-up').fadeOut();
	        };
	    });
	$('.QZ-up').click(function(e){
		$("body,html").animate({scrollTop:0},300);
	})

	//PAGE
	$(".page>span .cbtn").css("display","none");
	$(".page>span").click(function(){

		$(this).children("div").show();
	})
	$(document).click(function(){
		$(".page>span .cbtn").css("display","none");
	})
	$(".page>span .cbtn,.page>span").click(function(event){
		event.stopPropagation();
	});

/*
	var num=$(".menu li").length;
	var j=0; 
	var p=null; 
	var l=$(window).width(); //屏幕宽度
	var b=null; 
	
	b=$(".menu li").eq(num-1).width()+30; //最后一个a的长度
	for(var i=0;i<num;i++){
		j=j+$(".menu li").eq(i).width()+30;
	};
	$(".menu ul").css("width",j+1+"px");//ul的长度
    var obj=$(".current");
    
    if(obj.html()){
    	p=obj.offset().left;
    }
	if(j>l){
		if(p<=j&&p>l-90){
			var e=p-l/2;
			var f=l/2-b;
			var z=j-l+12;
			
			if(e<f){
				l2=l/2;
				$(".menu").scrollLeft(l2);	
			}else{
				$(".menu").scrollLeft(z);
			}
		}
	}
*/
	//	游戏专区
	if($('.swiper-gamezq').size()>=1){
		var swiperzq = new Swiper('.swiper-gamezq', {
	        pagination: '.swiper-pagination',
	        slidesPerView:'auto',
	        spaceBetween:6,
	    	freeMode: true
	    });
	    $('.swiper-gamezq .swiper-slide').css('width','144px')
	    swiperzq.update()
	}
})



//收起展开
function lishide(){
	$('.Toplist ul li').hide()
	for (k=0;k<7;k++) {
		$('.Toplist ul li').eq(k).show();
	}
	$('.Toplist ul li.mor').show()
}
lishide()
var showtab = false
$('.Toplist ul li.mor').click(function(){
	if(showtab==false){
		$('.Toplist ul li').show()
		$(this).find('a').html('--收起');
		showtab=true
	}else{
		lishide()
		$(this).find('a').html('--展开');
		showtab=false
	}
})

$(function(){
	//软件游戏首页 搜索 切换
	$('.S_soft .soft_lis').eq(0).show();
	$('.S_soft .searchlis').eq(0).show();

	$('.S_soft .S_softtop p').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		$('.S_soft .soft_lis').eq($(this).index()).show().siblings('.soft_lis').hide()
		$('.S_soft .searchlis').eq($(this).index()).show().siblings('.searchlis').hide()
	})
})


function IsPhoneNum(phone){
	var validateReg = /^1\d{10}$/;
	return validateReg.test($.trim(phone));
}

var type = 0;
var cateid = 0;
function addAppointment(stype,acount,acateid){
	type = stype;
	cateid = acateid;
	//$("#peopleCount").html(acount);
	$("#peopleCount").html(0);
	$('.yymengban,.yywrap').show();

}

// 菜单
var meun = true;
$('#QZhead2 .meun').click(function(){
	if(meun){
		$('.QZburger2').slideDown();
		meun = false;
		$(this).css('background-position','0 -40px ')
	}else{
		$('.QZburger2').slideUp();
		meun = true;
		$(this).css('background-position','0 0')
	}
})



function x_scroll(id){
    var obj = $("#"+id),
	oul = obj.find(".xg_main_ul"),
	oli = oul.find(".xg_list"),
	onav_li = $(".xg_tabs span"),
	oli_l=oli.length,
	window_w=parseInt($(window).width()),	
	oli_w=oul.eq(0).outerWidth(true),
	//ospan="<span class='cur'></span>";
	ospan="";
	for(var i=0; i<oli_l; i++){
	if(oli.eq(i).find("ul li").length>0){
		ospan+="<span></span>";
	}else{
		oli.eq(i).remove();
		onav_li.eq(i).remove();
	}
	}
	oul.width(oul.find(".xg_list").length*oli_w);	
	oli.width(window_w);
	$(".pagenumx").html(ospan);
	$(".pagenumx span:eq(0)").addClass("cur");
	$(".xg_tabs span:eq(0)").addClass("cur");
	var myScroll;
	$('.xg_tabs span').each(function(index){
		$(this).click(function(){
			$(".xg_tabs span").eq(index).addClass('cur').siblings().removeClass("cur");
			$('.pagenumx span').eq(index).addClass('cur').siblings().removeClass('cur');
			myScroll.x=-index*window_w;
			$('.xg_main_ul').css({'-webkit-transform':"translate3d(" + myScroll.x + "px, 0px, 0px)"});
		})
	});
	myScroll = new iScroll(id,{
		snap:true,
		momentum: false,
		hScrollbar: false,
		onScrollEnd:function(){
			$(".pagenumx span,.xg_tabs span").removeClass("cur");
			$(".xg_tabs span").eq(this.currPageX).addClass("cur");
			$(".pagenumx span").eq(this.currPageX).addClass("cur");		
		}
	})
}


function ImgView(){
	var View = '';
	    View += '<div class="photo-box">';
		View += '<ul class="img-slider cf"></ul>';
		View += '<div class="attrAlt"></div>';
		View += '</div>';
	  $('body').append(View);
      $(".photo-box").on("click",function(){
		  if($('.img_item li').length > 0){
		   ImgLoadHeight('.img_item',160);
	       }
		$(this).remove();
      });
      	  
}

function ImgLoadHeight(main,mz){
	 var img = new Image();
	 img.src = $(main).find("img").attr('src');
	 if(img.width > img.height){
		$(main).height(mz+10);
		$(main).find("img").height(mz);
	 }
}

var opt = {
	num         :                          0,
	startX      :                          0,
	startY      :                          0,
	temPos      :                         '',
	iCurr       :                          0,
	boxHeight   :         $(window).height(),
	boxWidth    :          $(window).width(),
	moveWidth   :          $(window).width(),
	box         :            $(".photo-box"),
	oMover      :           $(".img-slider"),
	oLi         :      $(".photo-box ul li"),
	txt         :                         '',
	speed       :                        400,
	alt         :                         ''
};
var oPosition = {};

function ImgAmplifier(img){
	$(".img-slider li img").css("height","");
	$(".img-slider li img").attr("height","");
	var oImgnr = img.clone();
	for(var i=0;i<oImgnr.length;i++){
		$drc = $(oImgnr[i]).attr('data-src');
		if($drc){
			$(oImgnr[i]).attr('src',$drc);
		}
	}
	$(".photo-box").show();
	$(".img-slider").html(oImgnr);
	$(".img-slider img").wrap("<li></li>");
	$(".img-slider img").eq(opt.iCurr).parent().addClass("active");
	$(".photo-box,.img-slider li").css({
		"width"    :     opt.boxWidth,
		"height"   :     opt.boxHeight
		});
	$(".img-slider li img").css("width",opt.boxWidth);
    $(".img-slider").css("width",opt.boxWidth*opt.num);
     bindTochuEvent();
     doAnimate(opt.iCurr * opt.boxWidth * -1);	
     $(".img-slider li img").each(function(){
	    new RTP.PinchZoom($(this),{});
	  });		 
}

function bindTochuEvent(){
	document.getElementsByClassName("photo-box")[0].getElementsByTagName("ul")[0].addEventListener('touchstart', touchStartFunc, false);
     document.getElementsByClassName("photo-box")[0].getElementsByTagName("ul")[0].addEventListener('touchmove', touchMoveFunc, false);
     document.getElementsByClassName("photo-box")[0].getElementsByTagName("ul")[0].addEventListener('touchend', touchEndFunc, false);
}
function touchStartFunc(e){
     touchPos(e);
     startX = oPosition.x;
     startY = oPosition.y;
     opt.temPos = $(".img-slider").position().left;
}
function touchPos(e){
     var touches = e.changedTouches, l = touches.length, touch, tagX, tagY;
     for (var i = 0; i < l; i++) {
        touch = touches[i];
        tagX = touch.clientX;
        tagY = touch.clientY;
        }
     oPosition.x = tagX;
     oPosition.y = tagY;
     return oPosition;
}
function touchMoveFunc(e){
    touchPos(e);
    var moveX = oPosition.x - startX;
    var moveY = oPosition.y - startY;
    if (Math.abs(moveY) < Math.abs(moveX)) {
    e.preventDefault();
    $(".img-slider").css({
    left: opt.temPos + moveX
    });
    }
}
function touchEndFunc(e){
    touchPos(e);
    var moveX = oPosition.x - startX;
    var moveY = oPosition.y - startY;
    if (Math.abs(moveY) < Math.abs(moveX)) {
    if (moveX > 0) {
        opt.iCurr--;
        if (opt.iCurr >= 0) {
          var moveX = opt.iCurr * opt.moveWidth;
          doAnimate(-moveX);
          }
        else {
           doAnimate(0);
           opt.iCurr = 0;
            }
        }
    else {
           opt.iCurr++;
           if (opt.iCurr < opt.num && opt.iCurr >= 0) {
           var moveX = opt.iCurr * opt.moveWidth;
           doAnimate(-moveX);
            }
            else {
              opt.iCurr = opt.num - 1;
              doAnimate(-(opt.num - 1) * opt.moveWidth);
              }
        }
    }
}
 function doAnimate(iTarget){
        $(".img-slider").animate({
        left: iTarget
         }, opt.speed,'swing');
} 