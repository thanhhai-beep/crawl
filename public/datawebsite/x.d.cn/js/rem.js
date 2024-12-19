'use strict';

/**
 * Created by d.cn on 2018/12/7.
 */
var html = document.documentElement;
var resizeTimer = null;

function setRemByWidth(designWidth) {
    var width = document.documentElement.clientWidth >= designWidth ? designWidth : document.documentElement.clientWidth;
    html.style.fontSize = width / 10 + 'px';
}

setRemByWidth(720);
f();
window.addEventListener('resize', function () {
    // alert(document.documentElement.clientWidth)
    /*    resizeTimer && clearTimeout(resizeTimer)
        resizeTimer = setTimeout(() => {
            window.requestAnimationFrame(() => {
                setRemByWidth(640);
            })
        }, 10)*/
    setRemByWidth(720);
    f();
}, false);
var timer = null;

function f() {
    if (document.body !== null) {
        var htmlFont = parseFloat(html.style.fontSize.split("px")[0]);
        var bodyFont = parseFloat(window.getComputedStyle(document.querySelector("body"), null).getPropertyValue("font-size").split("px")[0]);
        var scale_bl = bodyFont / htmlFont;
        bodyFont > htmlFont && (html.style.fontSize = htmlFont / scale_bl + 'px');
        timer && clearTimeout(timer);
    } else {
        setTimeout(function () {
            f();
        }, 500);
    }
}