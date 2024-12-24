var thisurl=window.location.href;
if(thisurl.indexOf('/gl/')<0 && thisurl.indexOf('/news/')<0 && thisurl.indexOf('/patch/')<0){
    if(typeof (keyword) != "undefined" && keyword != "" && keyword == "大多数,Nobody"){
        $('body').append('<div style="width: 100%;height: 100%;position: fixed;left: 0;top: 0;background: #fff;z-index: 9999999999;"><div style="position: absolute;top:0;left:0;right:0;bottom:0;margin:auto;width:6.54rem;height:6.32rem;overflow:hidden;"><img src="https://static.ali213.net/images/404/404_1.png" alt="404" style="width: 6.54rem;height:4rem;display:block;margin:auto;margin-bottom:.8rem;"><a href="/?404" style="display: block;padding:0 .4rem;color:#fff;font-size:.36rem;width:4.1rem;height:1rem;background-color:#ff5100;border-radius:.5rem;line-height:1rem;margin:auto;text-align:center;">您访问的页面走丢啦</a></div></div>');
    }else{
        if(typeof (odayid) != "undefined" && odayid != "" && odayid == 60725){
            $('body').append('<div style="width: 100%;height: 100%;position: fixed;left: 0;top: 0;background: #fff;z-index: 9999999999;"><div style="position: absolute;top:0;left:0;right:0;bottom:0;margin:auto;width:6.54rem;height:6.32rem;overflow:hidden;"><img src="https://static.ali213.net/images/404/404_1.png" alt="404" style="width: 6.54rem;height:4rem;display:block;margin:auto;margin-bottom:.8rem;"><a href="/?404" style="display: block;padding:0 .4rem;color:#fff;font-size:.36rem;width:4.1rem;height:1rem;background-color:#ff5100;border-radius:.5rem;line-height:1rem;margin:auto;text-align:center;">您访问的页面走丢啦</a></div></div>');
        }else{
            if($('.game-container').length>0 && $('.game-container').attr('data-id')=='60725'){
                $('body').append('<div style="width: 100%;height: 100%;position: fixed;left: 0;top: 0;background: #fff;z-index: 9999999999;"><div style="position: absolute;top:0;left:0;right:0;bottom:0;margin:auto;width:6.54rem;height:6.32rem;overflow:hidden;"><img src="https://static.ali213.net/images/404/404_1.png" alt="404" style="width: 6.54rem;height:4rem;display:block;margin:auto;margin-bottom:.8rem;"><a href="/?404" style="display: block;padding:0 .4rem;color:#fff;font-size:.36rem;width:4.1rem;height:1rem;background-color:#ff5100;border-radius:.5rem;line-height:1rem;margin:auto;text-align:center;">您访问的页面走丢啦</a></div></div>');
            }
        }
    }
}

/*if (window.location.pathname == '/zt/songoftheprairie/'){
	$(".game-nav1 a[href='down/']").attr('href', "https://store.steampowered.com/app/1350840");
}*/

document.write('<div style="display:none">');
document.write('	<script>');
document.write('	var _hmt = _hmt || [];');
document.write('	(function() {');
document.write('	  var hm = document.createElement("script");');
document.write('	  hm.src = "https://hm.baidu.com/hm.js?833afbd13a3d8ca05a282db2ab1537e5";');
document.write('	  var s = document.getElementsByTagName("script")[0];');
document.write('	  s.parentNode.insertBefore(hm, s);');
document.write('	})();');
document.write('	</script>');
document.write('	<script src="https://static.ali213.net/js/common/hits/realtime_hits.js" language="JavaScript"></script>');
document.write('</div>');
if(window.location.href.indexOf("/zt/") > 0) {
    document.write("<script type=\"text/javascript\">");
    document.write('var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?76fdf561e013d28be760588a463ab6ff";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();');
    document.write("</script>");
}
var isMqq = ua.match(/mqqbrowser/gi);
if(isMqq){
    $('.abdd').remove();
}