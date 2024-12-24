var uAgent = window.navigator.userAgent
  , isIOS = uAgent.match(/iphone/i)
  , isYIXIN = uAgent.match(/yixin/i)
  , is2345 = uAgent.match(/Mb2345/i)
  , ishaosou = uAgent.match(/mso_app/i)
  , isSogou = uAgent.match(/sogoumobilebrowser/gi)
  , isLiebao = uAgent.match(/liebaofast/i)
  , isGnbr = uAgent.match(/GNBR/i)
  , $fixed = document.getElementById("fixed");
function resizeRoot() {
    var e, i = screen.width > 0 && (window.innerWidth >= screen.width || 0 == window.innerWidth) ? screen.width : window.innerWidth, n = screen.height > 0 && (window.innerHeight >= screen.height || 0 == window.innerHeight) ? screen.height : window.innerHeight;
    window.devicePixelRatio && window.devicePixelRatio,
    isIOS && (i = screen.width,
    n = screen.height),
    i > n && (i = n),
    (e = (e = i > 1080 ? 144 : i / 7.5) > 32 ? e : 32) > 100 && (e = 100),
    window.screenWidth_ = i,
    isYIXIN || is2345 || ishaosou || isSogou || isLiebao || isGnbr ? setTimeout(function() {
        i = 0 < screen.width && (window.innerWidth >= screen.width || 0 == window.innerWidth) ? screen.width : window.innerWidth,
        n = 0 < screen.height && (window.innerHeight >= screen.height || 0 == window.innerHeight) ? screen.height : window.innerHeight,
        e = 32 < (e = 1080 < i ? 144 : i / 7.5) ? e : 32,
        document.getElementsByTagName("html")[0].style.fontSize = e + "px",
        $fixed && ($fixed.style.display = "none")
    }, 500) : (document.getElementsByTagName("html")[0].style.fontSize = e + "px",
    $fixed && ($fixed.style.display = "none"))
}

resizeRoot();
window.onresize = function() {
    resizeRoot();
}
;
//20230817
if(/phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone|huawei/i.test(navigator.userAgent)){
    origin=window.location.origin;
    pathname=window.location.pathname;
    urlself=origin+pathname;
    if (urlself.indexOf("https://mip.ali213.net/down/")!= -1){
        urlself=document.querySelector("link[rel='canonical']").href;
        if (urlself)window.location.href=urlself;
    }
    if (urlself.indexOf("https://mip.ali213.net/patch/")!= -1){
        urlself=document.querySelector("link[rel='canonical']").href;
        urlself=urlself.replace('//patch.','//3g.');
        urlself=urlself.replace('/showpatch/','/patch/');
        if (urlself)window.location.href=urlself;
    }
    /*if (urlself.indexOf("https://mip.ali213.net/news/html/")!= -1){
        urlself=urlself.replace('//mip.','//3g.');
        if (urlself)window.location.href=urlself;
    }
    if (urlself.indexOf("https://mip.ali213.net/gl/html/")!= -1){
        urlself=document.querySelector("link[rel='canonical']").href;
        if (urlself)window.location.href=urlself;
    }
    if (urlself.indexOf("https://mip.ali213.net/in/yjjc/")!= -1 || urlself.indexOf("https://mip.ali213.net/in/news/")!= -1 || urlself.indexOf("https://mip.ali213.net/in/pingce/")!= -1){
        urlself=document.querySelector("link[rel='canonical']").href;
        if (urlself)window.location.href=urlself;
    }*/
}else{
    origin=window.location.origin;
    pathname=window.location.pathname;
    urlself=origin+pathname;
    if (urlself.indexOf("https://3g.ali213.net/zt/")!= -1){
        urlself=document.querySelector("link[rel='canonical']").href;
        if (urlself)window.location.href=urlself;
    }
    if (urlself.indexOf("https://3g.ali213.net/gl/html/")!= -1){
        urlself=document.querySelector("link[rel='canonical']").href;
        if (urlself)window.location.href=urlself;
    }
    var urlpatt4 =/https:\/\/mip.ali213.net\/down\/(\w+).html/i.exec(urlself);
    if (urlpatt4){
        downpath=document.querySelector("link[rel='canonical']").href;
        downpath=downpath.replace('//3g.','//down.');
        downpath=downpath.replace('/down/','/pcgame/');
        if (downpath)window.location.href=downpath;
    }
    var urlpatt5 =/https:\/\/3g.ali213.net\/down\/(\w+).html/i.exec(urlself);
    if (urlpatt5){
        downpath=document.querySelector("link[rel='canonical']").href;
        downpath=downpath.replace('//3g.','//down.');
        downpath=downpath.replace('/down/','/pcgame/');
        if (downpath)window.location.href=downpath;
    }
    if (urlself.indexOf("https://mip.ali213.net/patch/")!= -1){
        urlself=document.querySelector("link[rel='canonical']").href;
        if (urlself)window.location.href=urlself;
    }
    if (urlself.indexOf("https://3g.ali213.net/patch/")!= -1){
        urlself=document.querySelector("link[rel='canonical']").href;
        if (urlself)window.location.href=urlself;
    }
    if (urlself.indexOf("https://3g.ali213.net/heji/")!= -1){
        urlself=document.querySelector("link[rel='canonical']").href;
        if (urlself)window.location.href=urlself;
    }
    /*if (urlself.indexOf("https://mip.ali213.net/news/html/")!= -1){
        urlself=document.querySelector("link[rel='canonical']").href;
        if (urlself)window.location.href=urlself;
    }
    if (urlself.indexOf("https://3g.ali213.net/news/html/")!= -1){
        urlself=document.querySelector("link[rel='canonical']").href;
        if (urlself)window.location.href=urlself;
    }
    if (urlself.indexOf("https://3g.ali213.net/zhuanti/")!= -1){
        urlself=document.querySelector("link[rel='canonical']").href;
        if (urlself)window.location.href=urlself;
    }
    if (urlself.indexOf("https://mip.ali213.net/gl/html/")!= -1){
        window.onload = function(){
            const glelement = document.querySelector('.to-pc');
            if (glelement) {
                const glurlself = glelement.getAttribute('href');
                if (glurlself) {
                    window.location.href = glurlself;
                }
            }
        }
    }
    if (urlself.indexOf("https://mip.ali213.net/in/yjjc/")!= -1 || urlself.indexOf("https://mip.ali213.net/in/news/")!= -1 || urlself.indexOf("https://mip.ali213.net/in/pingce/")!= -1){
        window.onload = function(){
            const inelement = document.querySelector('#urls');
            if (inelement) {
                const inurlself = inelement.getAttribute('href');
                if (inurlself) window.location.href = inurlself;
            }
        }
    }*/
}
/*
if(/phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone|huawei/i.test(navigator.userAgent)){

}else{
    origin=window.location.origin;
    pathname=window.location.pathname;
    urlself=origin+pathname;
    var urlpatt1 =/https:\/\/3g.ali213.net\/patch\/(\d+).html/i.exec(urlself);
    var urlpatt2 =/https:\/\/3g.ali213.net\/patch\/z\/(\d+)\/$/i.exec(urlself);
    var urlpatt3 =/https:\/\/3g.ali213.net\/patch\/z\/(\d+)\/(\d+)\//i.exec(urlself);
    var urlpatt4 =/https:\/\/3g.ali213.net\/down\/(\w+).html/i.exec(urlself);
    var urlpatt5 =/https:\/\/3g.ali213.net\/patch\/heji\/(\w+)\//i.exec(urlself);
    var urlpatt6 =/https:\/\/3g.ali213.net\/heji\/(\w+)\//i.exec(urlself);
    var urlpatt7 =/https:\/\/3g.ali213.net\/heji\/(\d+).html/i.exec(urlself);
    var urlpatt8 =/https:\/\/3g.ali213.net\/down\/pcgame\/(\w+)\//i.exec(urlself);
    var urlpatt9 =/https:\/\/3g.ali213.net\/patch\/showclass\/class(\d+).html/i.exec(urlself);


    if (urlpatt1) {
        window.location.href="https://patch.ali213.net/showpatch/"+urlpatt1[1]+".html";
    }else if (urlpatt2){
        window.location.href="https://patch.ali213.net/z/"+urlpatt2[1]+"/";
    }else if (urlpatt3){
        window.location.href="https://patch.ali213.net/z/"+urlpatt3[1]+"/"+urlpatt3[2]+"/";
    }else if (urlpatt4){
        downpath=document.querySelector("link[rel='canonical']").href;
        downpath=downpath.replace('//3g.','//down.');
        downpath=downpath.replace('/down/','/pcgame/');
        if (downpath)window.location.href=downpath;
    }else if (urlpatt5){
        window.location.href="https://patch.ali213.net/heji/"+urlpatt5[1]+"/";
    }else if (urlpatt6){
        window.location.href="https://down.ali213.net/heji/"+urlpatt6[1]+"/";
    }else if (urlpatt7){
        window.location.href="https://down.ali213.net/heji/"+urlpatt7[1]+".html";
    }else if (urlpatt8){
        window.location.href="https://down.ali213.net/pcgame/"+urlpatt8[1]+"/";
    }else if(urlself=='https://3g.ali213.net/down/'){
        window.location.href="https://down.ali213.net/";
    }else if(urlself=='https://3g.ali213.net/down/heji/'){
        window.location.href="https://down.ali213.net/heji/";
    }else if(urlself=='https://3g.ali213.net/down/ol/'){
        window.location.href="https://down.ali213.net/olgame/";
    }else if(urlself=='https://3g.ali213.net/patch/'){
        window.location.href="https://patch.ali213.net/";
    }else if(urlself=='https://3g.ali213.net/patch/showclass/find.html'){
        window.location.href="https://patch.ali213.net/pc/";
    }else if(urlself=='https://3g.ali213.net/patch/showclass/class7.html'){
        window.location.href="https://patch.ali213.net/hanhua/";
    }else if(urlself=='https://3g.ali213.net/patch/showclass/class28.html'){
        window.location.href="https://patch.ali213.net/soft/";
    }else if(urlself=='https://3g.ali213.net/patch/heji/'){
        window.location.href="https://patch.ali213.net/heji/";
    }else if(urlself=='https://3g.ali213.net/' || urlself=='https://mip.ali213.net/'){
        window.location.href="https://www.ali213.net/";
    }else if (urlpatt9){
        window.location.href="https://patch.ali213.net/showclass/class"+urlpatt9[1]+"_1.html";
    }else if (urlself.indexOf("https://3g.ali213.net/zt/")!= -1){
        urlself=document.querySelector("link[rel='canonical']").href;
        if (urlself)window.location.href=urlself;
    }else if (urlself.indexOf("https://app.ali213.net/mip/")!= -1){
        urlself=document.querySelector("link[rel='canonical']").href;
        urlself=urlself.replace('//app.','//m.');
        if (urlself)window.location.href=urlself;
    }else if (urlself.indexOf("https://3g.ali213.net/gl/html/")!= -1){
        urlself=document.querySelector("link[rel='canonical']").href;
        if (urlself)window.location.href=urlself;
    }else if (urlself.indexOf("https://mip.ali213.net/gl/html/")!= -1){
        urlself=document.querySelector("link[rel='canonical']").href;
        if (urlself)window.location.href=urlself;
    }else if (urlself.indexOf("https://mip.ali213.net/zt/")!= -1){
        urlself=document.querySelector("link[rel='canonical']").href;
        if (urlself)window.location.href=urlself;
    }else if (urlself.indexOf("https://3g.ali213.net/gl/z/")!= -1){
        urlself=document.querySelector("link[rel='canonical']").href;
        if (urlself)window.location.href=urlself;
    }else if (urlself.indexOf("https://mip.ali213.net/gl/z/")!= -1){
        urlself=document.querySelector("link[rel='canonical']").href;
        if (urlself)window.location.href=urlself;
    }

}*/
