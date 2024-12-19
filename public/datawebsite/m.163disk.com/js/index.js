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
	
})