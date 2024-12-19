(function(){

    var bp = document.createElement('script');

    bp.src = '//push.zhanzhang.baidu.com/push.js';

    var s = document.getElementsByTagName("script")[0];

    s.parentNode.insertBefore(bp, s);

})();
console.log(window.sessionStorage.getItem("gd"));
if (window.sessionStorage.getItem("gd")){
    $('.nav_list').eq(1).remove()
}
