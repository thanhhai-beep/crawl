(function () {
    function loadScript(url, callback) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        if (script.readyState) {
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {
            script.onload = function () { callback(); };
        }
        document.body.appendChild(script);
    }
    
    function jsApiShare(title, desc, img, url){
        var loadCnt = 0;
        loadScript('//res.wx.qq.com/open/js/jweixin-1.0.0.js', function () {
            loadCnt++;
            loaded();
        });
        loadScript('//huodong3.3839.com/weixin/jsapi/hykbAppShare.php?referer=' + encodeURIComponent(window.location.href), function () {
            loadCnt++;
            loaded();
        });

        var loaded = function () {
            if (loadCnt >= 2) {//2个JS都加载完才执行
                wxApiConfig.jsApiList = ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone'];
                wx.config(wxApiConfig);
                wx.ready(function () {
                    //分享给朋友
                    var shareData = {
                        link: url,
                        imgUrl: img,
                        title: title,
                        desc: desc,
                        success: function (res) { },
                        fail: function (res) { }
                    };
                    wx.onMenuShareAppMessage(shareData);
                    wx.onMenuShareQQ(shareData);
                    wx.onMenuShareQZone(shareData);

                    //分享到朋友圈
                    var shareData = {
                        link: url,
                        imgUrl: img,
                        title: title,
                        success: function (res) { },
                        fail: function (res) { }
                    };
                    wx.onMenuShareTimeline(shareData);
                });
            }
        }
    }

    window.wshare = function (title, desc, img, url) {
        //判断是否在微信里面
        var a = navigator.userAgent;
        if (a.indexOf('MicroMessenger') > -1) {
            var match = a.match(/MicroMessenger\/([0-9\.]+)/);
            var version = match[1];
            jsApiShare(title, desc, img, url);
        }
    }
})();