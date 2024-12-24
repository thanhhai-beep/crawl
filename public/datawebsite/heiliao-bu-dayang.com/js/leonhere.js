function unableScroll() {
	var top = jQuery(document).scrollTop();
	jQuery(document).on('scroll.unable',function (e) {
		jQuery(document).scrollTop(top);
	})
}
function enableScroll() {
	jQuery(document).unbind("scroll.unable");
}
function shareUrl(social){
	var _title = encodeURIComponent(document.title);
	var _url = document.location;
	var _pic = document.getElementsByTagName('img')[0].src;
	if(social == 'qzone'){				
		var _shareUrl = 'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + _url + '&title=' + _title + '&pics=' + _pic + '&summary=&desc=';	
		window.open(_shareUrl,'_blank');		
	}else if(social == 'weibo'){
		var _shareUrl = 'https://service.weibo.com/share/share.php?url=' + _url + '&title=' + _title + '&pic=' + _pic;
		window.open(_shareUrl,'_blank');
	}else if(social == 'qq'){
		var _shareUrl = 'https://connect.qq.com/widget/shareqq/index.html?url=' + _url +'&title=' + _title + '&pics=' + _pic + '&summary=&desc=';
		window.open(_shareUrl,'_blank');
	}else if(social == 'weixin'){
		document.getElementById('shareWX').style.display="block";
	}
	
}
$(document).ready(function(){
	$('#shareWX').click(function(e){
		if($(e.target).closest('#shareWX .box').length == 0){
			$(this).hide();
		}
	});
	$('.widget ul li.list').mouseover(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
	});
	$('.fixed-widget .icon-up-open').click(function(){
		$('body,html').animate({scrollTop:0},500);
	});
	if($('.flexslider').length > 0){
		$('.flexslider').flexslider({
		    animation: "slide",
			directionNav: false,
		  });
	}

	/**/
	$('#button .icon-search').click(function(){
		$('#searchbar').stop().fadeToggle('fast');
		$(this).parents('li').toggleClass('active').siblings('li').removeClass('active');
		$('#share .drop').hide();
		nav.removeClass('active');
	});
	/**/
	$('#button .icon-share').click(function(){
		$(this).siblings('.drop').fadeToggle('fast');
		$(this).parents('li').toggleClass('active').siblings('li').removeClass('active');
		nav.removeClass('active');
		$('#searchbar').hide();
	});
	/**/
	var nav = $('#nav');
	var navli = nav.find('li');
	navli.each(function(){
		var _href = $(this).children('a').attr('href');
		if(_href == _url){
			if($(this).parents('li').length > 0){
				$(this).parents('li').addClass('on');
			}else{
				$(this).addClass('on');
			}			
		}
		if($(this).children('ul').length > 0){
			$(this).children('a').after('<em></em>');
		}
	});
	navli.find('em').click(function(){
		$(this).siblings('ul').stop().slideToggle('fast').parent().siblings().find('ul').stop().slideUp('fast');
	});
	$('#button .icon-menu').click(function(){
		var _this = $(this).parents('li');
		if(_this.hasClass('active')){
			enableScroll();
			_this.removeClass('active');
			nav.removeClass('active');
		}else{
			unableScroll();
			_this.addClass('active').siblings('li').removeClass('active')
			nav.addClass('active');
		}
		$('#searchbar, #share .drop').hide();
	});
	$(window).resize(function(){
		if($(this).width() > 1024){
			/**/
			navli.on('mouseenter mouseleave');
			navli.mouseenter(function(){
				if($(this).find('li').length > 0){
					$(this).children('ul').stop().slideDown('fast');
				}
			}).mouseleave(function(){
				if($(this).find('li').length > 0){
					$(this).children('ul').stop().slideUp('fast');
				}
			});
		}else{
			/**/
			navli.off('mouseenter mouseleave');
		}
	}).trigger('resize');
});