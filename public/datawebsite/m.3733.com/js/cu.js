var tct_main = `<style>@keyframes scaleLoop {0% {transform: scale(1);}100% {transform: scale(0.9);}}</style><div class="mask" style="display: none;position: fixed;width:100%;height:100%;top: 0;left: 0;right: 0;bottom: 0;background: rgba(0, 0, 0, 0.1);z-index: 999999;"><div style="position: fixed;margin:auto;top:15%;left:0;right:0;display: block;width: 85%;animation: scaleLoop 600ms infinite alternate ease-in-out;box-shadow: 8px 5px 5px rgb(0,0,0,0.3);"><img class="tct-img" style="width:100%;height:auto;display:block;" src="https:https://s7static.pic3733.com/3733/images/xzts.png" alt=""><div class="close-img" style="position: absolute;right: 10px;top: 2px;line-height: 1;font-size: 25px;color: #adadad;">x</div></div></div>`;
var user = navigator.userAgent;
var isAndroid = user.indexOf('Android') > -1 || user.indexOf('Adr') > -1;
if (isAndroid && navigator.userAgent.indexOf('UCBrowser') > -1) {
  document.write(tct_main);
  $("body").on("click",".yueyou",function(){
    $('.mask').show(300);
  })
  $('.mask').click(function () {
    $(this).hide();
  })
}