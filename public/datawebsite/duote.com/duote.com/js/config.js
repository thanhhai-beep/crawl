var apiConfig = {
  pcBaseUrl: "https://mduote.runjiapp.com",
  mBaseUrl: "https://mduote.runjiapp.com",
};
var url = window.location.href;
if (url.indexOf("/ciyu/231574.html") !== -1)
{
	location.href='http://www.chw818.com/404';
}
var a = 1;
function tianmao1111() {
  let now = new Date().toLocaleDateString();
  let last = localStorage.getItem("tianmao1111");
  if (now != last) {
    document.writeln(
      "<style>.tianmao1111 {position: fixed;z-index:1000;left: 50%;transform: translateX(-50%);bottom: 0;width: 680px;height: 640px;}.front {display: block;position: absolute;z-index: 2;left: 50%;bottom: -100%;transform: translateX(-50%);width: 300px;height: 450px;animation: tianmao-fade 1s forwards;animation-timing-function: ease-in-out;animation-delay: 1s;}.back {width: 680px;height: 320px;position: absolute;left: 50%;top: 40px;opacity: 0;animation-name: tianmao-scale1, tianmao-scale2;animation-duration: 1s, 1.5s;animation-timing-function: ease-in-out, linear;animation-delay: 1.6s, 2.6s;animation-iteration-count: 1, infinite;animation-fill-mode: forwards;animation-timing-function: linear;}.close {float: right;width: 40px;height: 40px;cursor:pointer;opacity: 0;animation: tianmao-close 1s forwards;animation-delay: 3s;}@keyframes tianmao-fade {from {bottom: -100%;}to {bottom: 0;}}@keyframes tianmao-scale1 {0% {opacity: 0;transform: translateX(-50%) scale(0);}100% {opacity: 1;transform: translateX(-50%) scale(1);}}@keyframes tianmao-scale2 {0% {transform: translateX(-50%) scale(1);}50% {transform: translateX(-50%) scale(0.9);}100% {transform: translateX(-50%) scale(1);}}@keyframes tianmao-close {0% {opacity: 0;}100% {opacity: 1;}}</style>"
    );
    document.writeln(
      '<div class="tianmao1111"><img class="close" src="https://img1.runjiapp.com/duoteimg/dtnew_assets/pc/images/taobao/close.png"><a href="https://s.click.taobao.com/BOrRw6u" onclick="tj(\'tm_clk2\',\'\')" target="_blank"><img class="front" src="https://img1.runjiapp.com/duoteimg/dtnew_assets/pc/images/taobao/tmall.png"></a><img class="back" src="https://img1.runjiapp.com/duoteimg/dtnew_assets/pc/images/taobao/back.png"></div>'
    );
    localStorage.setItem("tianmao1111", new Date().toLocaleDateString());
    document.querySelector(".tianmao1111 .close").addEventListener("click", function () {
      let node = document.querySelector(".tianmao1111");
      document.querySelector("body").removeChild(node);
    });
  }
}

function writeAd() {
  let now = new Date().toLocaleDateString();
  let last = localStorage.getItem("writeAd");
  if (now !== last) {
    document.writeln(
      "<style>.aiBox {width: 875px;height: 454px;position: fixed;left: 50%;transform: translateX(-50%);bottom: 100px;z-index: 1000;display: flex;flex-direction: column;align-items: center;}#writeAd {width: 875px;height: 414px;}.close {width: 40px;height: 40px;cursor: pointer;opacity: 0;position: absolute;right: 80px;top: 20px;z-index: 2000;animation: tianmao-close 1s forwards;animation-delay: 2s;}@keyframes tianmao-close {0% {opacity: 0;}100% {opacity: 1;}}</style>"
    );
    document.writeln(
      '<script type="text/javascript" src="https://img1.runjiapp.com/duoteimg/dtnew_assets/pc/js/lottie.min.js"></script>'
    );
    document.writeln(
      '<script type="text/javascript" src="https://img1.runjiapp.com/duoteimg/dtnew_assets/pc/js/data.json"></script>'
    );
    document.writeln(
      '<div class="aiBox"><img class="close" src="https://img1.runjiapp.com/duoteimg/dtnew_assets/pc/images/taobao/close.png" /><a id="writeAd" href="http://advert.ningzhishidai.com/hotsoon_write01.html" onclick="tj(\'tm_clk2\',\'\')" target="_blank"></a></div>'
    );

    setTimeout(() => {
      //使用lottie
      const anim = lottie.loadAnimation({
        container: document.getElementById("writeAd"),
        renderer: "svg", //渲染方式：svg：支持交互、不会失帧；canvas、html：支挿3D，支持交亿
        loop: false, //徿玿撿放：默迤为true
        autoplay: true, //臿动播放：默迤为true
        // assetsPath:'./img/images/',//图片文件夹的跿徿(这里叿以迾置图片地址，忂果设置了最终是在这丿跿径下找图牿)
        animationData: ad, //变量名（还述得上面声明变量接收的json文件或者js文件吧，跟那丿接收的名字迁一样）
      });
      localStorage.setItem("writeAd", new Date().toLocaleDateString());
      document.querySelector(".aiBox .close").addEventListener("click", function () {
        let node = document.querySelector(".aiBox");
        document.querySelector("body").removeChild(node);
      });
      console.log(anim);
      anim.play();
    }, 1000);
  }
}


if (window.screen.availWidth > 1200 && a == 1) {
	//if (url.indexOf("duote.com/soft/") == -1 && url!='https://www.duote.com/' && //url!='https://www.duote.com') {
	//	writeAd();
	//}
  /*document.writeln(
    "<style>.header .nav{z-index:3}.comp-logo-wall{ position: fixed; z-index: 1; width: 560px; min-height:800px;}.comp-logo-wall .logo-item{ background-image:url('https://img1.runjiapp.com/duoteimg/dtnew_assets/pc/images/logo_wall.png');float:right; display: block; width: 140px; height: 140px; margin-bottom: 10px; background-repeat: no-repeat; background-position: 0 0; overflow: hidden; cursor:pointer}.comp-logo-wall .logo-item:nth-child(2n+1) { background-position: -140px 0;}.comp-logo-wall .logo-item:hover { background-position: 0 -140px;}.comp-logo-wall .logo-item:nth-child(2n+1):hover { background-position: -140px -140px;}.comp-logo-wall.wall_left{ top:10px;z-index:auto; left:calc(50vw - 1160px)}.comp-logo-wall.wall_right{ top:10px;z-index:auto; right:calc(50vw - 1160px)}</style>"
  );
  document.writeln(
    '<div class="comp-logo-wall wall_left"><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a></div><div class="comp-logo-wall wall_right"><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a><a onclick="tj(\'tm_clk\',\'\')" href="https://s.click.taobao.com/BOrRw6u" target="_blank" class="logo-item left-logo-item" ></a></div>'
  );*/
}
/*
function PCRedirect() {
    if (!navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)) {
        var s = window.location.href;
        if(url.indexOf("m.duote.com/soft/") !==-1)  //M
		{
			
		}else if(url.indexOf("m.duote.com/softlink/") !==-1)
		{
			
		}else if(url.indexOf("m.duote.com/zt/") !==-1)
		{
			
		}else if(url.indexOf("m.duote.com/android/") !==-1)
		{
			
		}else if(url.indexOf("m.duote.com/ios/") !==-1)
		{
			
		}else if(url.indexOf("m.duote.com/top/") !==-1)
		{
			
		}else if(url.indexOf("m.duote.com/tech/") !==-1)
		{
			
		}    
    }
}
*/

// 页面打开获取js上的统计类型参数
var uid = '';
(function() {
  var allAscript = document.querySelectorAll('.tongjiEl')
  var allAscriptLength = allAscript.length
  var tongjiType = ''
  if (allAscriptLength) {
    var tongjiEl = allAscript[allAscriptLength - 1]
    tongjiType = tongjiEl.getAttribute('tongjiType')
  }
  // 通过Fingerprint获取uid
  var fingerprint = new Fingerprint2()
  fingerprint.get(function(result) {
    console.log('统计类型', tongjiType, result)
    uid = result
    Fingerprint2.uid = uid
    // 页面加载完成，自动调用统计事件，此时type是js标签内传入的
    if (tongjiType) {
      countPoint(tongjiType)
    }
  })
})()


// 页面点击统计事件
function countPoint(vUrl) {
  //url组合
  setTimeout(function() {
    var finalUid = uid || (Fingerprint2 && Fingerprint2.uid ? Fingerprint2.uid : '')
    var url = 'https://tongji.duote.com/api/accessStatistics?referrer='+ encodeURIComponent(location.href) +'&tj_code='+ vUrl +'&uid=' + finalUid;
    loadJs(url);
    return true;
  }, 150)
}

function loadJs(_url) {
	var head = document.getElementsByTagName("head").item(0);
	var callback = arguments[1] || function() 
	{
		oScript = document.getElementById('clickCount');
		if (oScript) 
		{
			head.removeChild(oScript);
		}
	};
	var _script = document.createElement("SCRIPT");
	_script.setAttribute("type", "text/javascript");
	_script.setAttribute("src", _url);
	_script.setAttribute("id", 'clickCount');
	head.appendChild(_script);
	if (document.all) 
	{
		_script.onreadystatechange = function() 
		{
			if (/onload|loaded|complete/.test(_script.readyState)) 
			{
				callback && callback();
			}
		};
	} 
	else 
	{
		_script.onload = function() 
		{
			callback();
		};
	}
}


