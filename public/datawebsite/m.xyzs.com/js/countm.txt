if(typeof(_pageinfo) === "undefined"){ var _pageinfo = {};}
//百度统计(总)
var _hmt = _hmt || [];
var _hmUrl = 'https://hm.baidu.com/hm.js?';
$(function () {//tongji
  (function () {
    var hm = document.createElement("script");
    hm.src = _hmUrl+"b4b48ebc65f323495338f604ee140a22";//总1
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();
 (function () {
    var hm = document.createElement("script");
    hm.src = _hmUrl+"f733d361f1c4b1a5bf61769bce0f927a";//总2
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();
});
//百度统计个人
if (typeof _webInfo != "undefined") {//add tongji for everyBJ
  var bjname = _webInfo.Username;
  var hm = document.createElement("script");
  if (bjname != '') {
    switch (bjname){
        case '109':
             hm.src = _hmUrl+"daea21a449c8db4d119f639a4f7bbeca";
             break;
        case '31':
            hm.src = _hmUrl+"be232e15e230e05cbec538fc18fc86c1";
             break;
        case '186':
            hm.src = _hmUrl+"04af6256aa11614c750adbb50bde86d6";
             break;
        case '187':
            hm.src = _hmUrl+"1a7b8a297b46cbe94019515f52809c0a";
             break;
        case '57':
            hm.src = _hmUrl+"e54825458ded5a697f4ab98a3710a830";
             break;
 case '142':
            hm.src = _hmUrl+"1e0678c205a995a71b7d20368dab1336";
             break;
 case '367':
            hm.src = _hmUrl+"75353be9e163c746baf6ec55af1e891d";
             break;
           }
    if (hm.src != '') {
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    }
  }
}
