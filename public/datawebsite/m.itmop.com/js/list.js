
/**
 * Created by Administrator on 2016/8/3.
 */
(function(a, d) {
    var b = a.documentElement,
        e = "orientationchange" in window ? "orientationchange" : "resize",
        c = function() {
            var a = b.clientWidth;
            a && (b.style.fontSize = Math.min(a, 640) / 320 * 100 + "px")
        };
    css = document.createElement('style');
    css.type="text/css";
    css.innerHTML = "html {font-size:"+Math.min(b.clientWidth, 640) / 320 * 100+"px}";
    a.getElementsByTagName('head')[0].appendChild(css);
    a.addEventListener && (d.addEventListener(e, c, !1), a.addEventListener("DOMContentLoaded", c, !1));
})(document, window);