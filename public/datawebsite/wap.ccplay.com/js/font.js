;(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    function recalc() {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        var size = (clientWidth / 640) * 100;
        docEl.style.fontSize = (size < 100 ? size : 100) + 'px';
        // docEl.style.fontSize = (clientWidth / 640) * 100 + 'px';
    };
    //  
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    recalc();
})(document, window);