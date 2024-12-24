var ua = navigator.userAgent.toLowerCase();
var isIos = ua.match(/iphone|ipod|ipad/gi);
var isIos9 = isIos && ua.match(/OS\s(\d+)/i)[1] > 8;
if(isIos || isIos9){
    $("#qztf-ios").removeClass("noshow");
}else{
    $("#qztf-android").removeClass("noshow");
}
// $("#qztf-android .qztf-c").prepend('<a href="https://click.ali213.net/ALiClick-584.html"><img src="//pbmp.ali213.net/Pics/2024/3g_bzxy584_256c256.png"><span>星穹铁道</span></a>');
// $("#qztf-ios .qztf-c").prepend('<a href="https://click.ali213.net/ALiClick-584.html"><img src="//pbmp.ali213.net/Pics/2024/3g_bzxy584_256c256.png"><span>星穹铁道</span></a>');