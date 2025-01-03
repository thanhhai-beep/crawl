'use strict';

~function (window) {
    var uAgent = window.navigator.userAgent;
    var isIOS = uAgent.match(/iphone/i);
    var isYIXIN = uAgent.match(/yixin/i);
    var is2345 = uAgent.match(/Mb2345/i);
    var ishaosou = uAgent.match(/mso_app/i);
    var isSogou = uAgent.match(/sogoumobilebrowser/ig);
    var isLiebao = uAgent.match(/liebaofast/i);
    var isGnbr = uAgent.match(/GNBR/i);

    var dataDv = document.documentElement.dataset.dw || 750;
    var minFontSize = 42;
    var maxFontSize = 96;

    function resizeRoot() {
        var wWidth = (screen.width > 0) ? (window.innerWidth >= screen.width || window.innerWidth == 0) ? screen.width : window.innerWidth : window.innerWidth;
        if (isIOS) {
            wWidth = screen.width;
        }
        var wFsize = wWidth > dataDv ? maxFontSize : wWidth / (dataDv / 100);
        wFsize = wFsize > minFontSize ? wFsize : minFontSize;
        document.documentElement.style.fontSize = wFsize + 'px';
    }

    var tid;
    window.addEventListener('resize', function () {
        clearTimeout(tid);
        tid = setTimeout(resizeRoot, 300);
    }, false);
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(resizeRoot, 300);
        }
    }, false);

    if (isYIXIN || is2345 || ishaosou || isSogou || isLiebao || isGnbr) {
        setTimeout(function () {
            resizeRoot();
        }, 500);
    } else {
        resizeRoot();
    }
}(window);