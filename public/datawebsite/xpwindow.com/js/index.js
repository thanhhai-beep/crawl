
jQuery(function($){	
	if($('.panel').length>0){
		$('.panel').css({'display': 'none'}).first().css({'display': 'block'});
	}
	$('.head-tab li').each(function(index) {
		var nc = index;
		$(this).click(function() {
			if(nc == 2){
				$("html, body").animate({scrollTop: $(".txtboxs.ta").offset().top }, 500);
				return false;
			}else if(nc == 3){
				$("html, body").animate({scrollTop: $(".txtboxs.ts").offset().top }, 500);
				return false;
			}else if(nc == 4){
				$("html, body").animate({scrollTop: $(".comment").offset().top }, 500);
				return false;	
			}else{
				$('.head-tab li').removeClass("on").eq(nc).addClass("on");
				$('.panel').css({
					'display': 'none'
				}).eq(nc).css({
					'display': 'block'
				});
			}
		});
	});
    if($('.panels').length>0){
		$('.panels').css({'display': 'none'}).first().css({'display': 'block'});
	}
	$('.head-tabs li').each(function(index) {
		var nc = index;
		$(this).click(function() {
			if(nc == 1){
				$("html, body").animate({scrollTop: $(".t1").offset().top }, 500);
				return false;
			}else if(nc == 2){
				$("html, body").animate({scrollTop: $(".t2").offset().top }, 500);
				return false;	
			}else if(nc == 3){
				$("html, body").animate({scrollTop: $(".t3").offset().top }, 500);
				return false;
			}else if(nc == 4){
				$("html, body").animate({scrollTop: $(".t4").offset().top }, 500);
				return false;
			}else if(nc == 5){
				$("html, body").animate({scrollTop: $(".t5").offset().top }, 500);
				return false;			
			}
		});
	});  	
	$('.dian').each(function(index) {
		var nc = index;
		$(this).click(function() {
			if(nc == 0){
				$("html, body").animate({scrollTop: $(".commentbox").offset().top }, 500);
				return false;
			}
		});
	});  
	$('#dianping').each(function(index) {
		var nc = index;
		$(this).click(function() {
			if(nc == 0){
				$("html, body").animate({scrollTop: $(".commentbox").offset().top }, 500);
				return false;
			}
		});
	});  
	$('p.dians').each(function(index) {
		var nc = index;
		$(this).click(function() {
			if(nc == 0){
				$("html, body").animate({scrollTop: $(".txtboxs").offset().top }, 500);
				return false;
			}
		});
	});
	 $('em.dianji').each(function(index) {
		var nc = index;
		$(this).click(function() {
			if(nc == 0){
				$("html, body").animate({scrollTop: $(".header").offset().top }, 500);
				return false;
			}
		});
	});  
	 $('#btndownload').each(function(index) {
		var nc = index;
		$(this).click(function() {
			if(nc == 0){
				$("html, body").animate({scrollTop: $(".downbox").offset().top }, 500);
				return false;
			}
		});
	});  
/*预约*/	
if($('.btns').length>0){
		$(".btns").click(function(){
			YuYueBox();
		})
	}
    function YuYueBox(){
        $(".yuyue_bg").show();
        $(".yuyue_box").show();
        $('.yuyue_box .btn_c,.yuyue_bg').click(function(){
			$('.yuyue_bg,.yuyue_box').hide();
		});
        $('.yuyue_box .btn_q').click(function(){
            var sTel = $('#yuyueval').val();
            var zTel = /^1[34578]\d{9}$/.test(sTel);
            if(!zTel){
                alert('请填写正确的手机号！');
                $('#yuyueval').focus();
                return false;
            }
            $('.yuyue').text('预约成功');
            $('.yuyue_bg,.yuyue_box').remove();
            // $('.yuyue_bg').click();
            $('.yuyue').removeClass('yuyue');
});
	}
});
/*选项卡*/
$(".special02").slide();
$(".gameku").slide();
$(".links").slide();
$(".content").slide();
$(".txtboxe").slide();
$(".option_left").slide();
$(".first_centre").slide();
$(".pack_right").slide();
$(".pack_left").slide();
$(".tab1").slide();
$(".tab").slide();
$(".slidetxtbox").slide();
/*轮播*/
jQuery(".scroll").slide({mainCell:".bd ul",autoPlay:true});
/*
 * flinks
 */

$(function () {
    $(".flinks ul li").mouseover(function(){
        $(this).parent().find("li").removeClass("on");
        $(this).addClass("on");
        $('.fb-1').eq($(this).index()).removeClass('hide').siblings('.fb-1').addClass('hide');
    });
});
