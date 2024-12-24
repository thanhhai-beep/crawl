
$(document).ready(function(){
	$('.listtab a').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		$('.list-cent ul,.article-list ul').hide();
		$('.list-cent ul,.article-list ul').eq($(this).index()).show();
		if($('.Toplist2 ul').length > 1){
			$('.Toplist2 ul').hide();
			$('.Toplist2 ul').eq($(this).index()).show();
		}
	});
	$('.Top-tab p').click(function(){
		$('.Top-tab a').removeClass('on');
		$('.Top-tab p').eq($(this).index()).find('a').addClass('on');
		$('.Ph-lis ul').hide();
		$('.Ph-lis ul').eq($(this).index()).show();
	});
})