var url;
url=window.location.href;
if(url.indexOf('duote.com/android/')!=-1 || url.indexOf('duote.com/ios/')!=-1)
{
	document.write('<div class="fixed-gzh" style="height:97px;width:170px;margin-left:610px;border:none;box-shadow: none;"><a href="https://www.duote.com/feedback/index" onclick="tj(\'jb_clk\',\'\')" target="_blank"><img src="https://img1.runjiapp.com/duoteimg/gzh/report.png" alt="" style="width:150px;height:76px" class="fg-img"></a></div>')
	
}else if(url=='https://www.duote.com/game/')
{
	document.write('<div class="fixed-gzh" style="height:97px;width:170px;margin-left:610px;border:none;box-shadow: none;top:200px"><a href="https://www.duote.com/feedback/index" onclick="tj(\'jb_clk\',\'\')" target="_blank"><img src="https://img1.runjiapp.com/duoteimg/gzh/report.png" alt="" style="width:150px;height:76px" class="fg-img"></a></div>')

}else if(url.indexOf('duote.com/work/')!=-1 || url.indexOf('duote.com/tiku/')!=-1 || url.indexOf('duote.com/soft/')!=-1 || url.indexOf('duote.com/dll/')!=-1)
{
}else if(url.indexOf('news.duote.com') != -1){
	
	if($('.report-tag').length)
	{
		$('.report-tag')[0].href='https://news.duote.com/feedback/index';
	}

}else if(url== 'https://www.duote.com/' || url=='https://www.duote.com'){

	document.getElementsByClassName('footer-link')[0].children[6].remove();
	
}else{
	document.write('<div class="fixed-gzh" style="height:97px;width:170px;margin-left:610px;border:none;box-shadow: none;"><a href="https://www.duote.com/feedback/index" onclick="tj(\'jb_clk\',\'\')" target="_blank"><img src="https://img1.runjiapp.com/duoteimg/gzh/report.png" alt="" style="width:150px;height:76px" class="fg-img"></a></div>')
	
}