$(document).ready(function($) {
	//绑定回车动作(搜索)
	/*$('.search-hd form .text').keydown(function(event){ 
		if(event.which==13){
			//window.location = "/gpage.asp?action=5&c=0&page=1&keyword="+$(this).val();
			//return false;
		} 
	});*/

   // 手机导航
	$('.menuBtn').append('<b></b><b></b><b></b>');
	$('.menuBtn').click(function(event) {
		$(this).toggleClass('open');
		var _winw = $(window).width();
		var _winh = $(window).height();
		if( $(this).hasClass('open') ){
			$('body').addClass('open');
			if( _winw<=767 ){
                //$('.nav').stop().slideDown();
			}
		}else{
			$('body').removeClass('open');
			if( _winw<=767 ){
                $('.nav').stop().slideUp();
			}
		};
	});
	// 选项卡点击
    $(".TAB_CLICK li").click(function () {
        var tab = $(this).parent(".TAB_CLICK");
        var con = tab.attr("id");
        var on = tab.find("li").index(this);
        $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
        $(con).eq(on).show().siblings(con).hide();
    });

    // 导航栏
    $('.menuBtn').click(function(){
        $(this).toggleClass('open');
        if(location.href.indexOf('news')<=-1){$('.nav').slideToggle(300);}//判断非资讯列表起作用，否则资讯列表会一闪而过
        $('body > .body-mask').toggleClass('open');
    })
});
	// 导航
	function myNav(){
		var _winw = $(window).width();
		if( _winw>767 ){
			$('.nav').show();
			$('body,.menuBtn').removeClass('open');
		}else{
			$('.nav').hide();
		}
	}
	myNav();
	$(window).resize(function(event) {
		myNav();
	});