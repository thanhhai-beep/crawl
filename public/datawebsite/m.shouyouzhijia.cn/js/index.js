$(function(){
	$('.cont6_top p').click(function(){
		var index_ = $(this).index();
		$('.cont6_top p').removeClass('on')
		$(this).addClass('on');
		$('.cont6_lis ul').hide().eq(index_).show();
	})
	if($('.swiper-tl').size()>=1){
		var swipertl = new Swiper('.swiper-tl', {
	        pagination: '.swiper-pagination',
	        slidesPerView:'auto',
	        spaceBetween:10,
	    	freeMode: true
	    });

		//$('.swiper-tl .swiper-slide').css({'width':'175px','height':'85px'})
	    for (i=0;i<$('.swiper-tl').length;i++) {
	        swipertl[i].update()
	    }
	}
	
	$('.bb_wrap .like_tab p').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		$('.bb_wrap .like_item .item').hide();
		$('.bb_wrap .like_item .item').eq($(this).index()).show();
	});
	
	//首页幻灯 软件专题幻灯
	if($('.swipe-hd').size()>=1){
		var Swiperhd = new Swiper ('.swipe-hd .swiper-container', {
			pagination: '.swiper-pagination',
			paginationClickable: '.swiper-pagination',
			paginationClickable :true,
		    loop: true,
		    autoplay : 5000
		})
	}
	
})