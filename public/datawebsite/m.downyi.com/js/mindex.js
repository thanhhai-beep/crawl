// setTimeout(function(){
//     document.getElementsByTagName('body')[0].style = "opacity:1;transition: opacity .2s linear;"
// },100)
//$.getScript("https://pv.sohu.com/cityjson",function(){
if(returnCity.cname.indexOf('湖北') != -1 || returnCity.cname.indexOf('安徽') != -1){
    //page404();
}
keycodes();
//});
function page404() {
    $("head").html('');
    $(function () {
        window.stop ? window.stop() : document.execCommand("Stop");
        var link = document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = 'data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABmJLR0T///8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAAF0lEQVRIx2NgGAWjYBSMglEwCkbBSAcACBAAAeaR9cIAAAAASUVORK5CYII=';
        document.getElementsByTagName('head')[0].appendChild(link);
        $('body').html('<div style="margin:10% 20%;"><h1 jstcache="0" style="color: var(--heading-color); font-size: 1.6em; font-weight: normal; line-height: 1.25em; margin-bottom: 16px; margin-top: 0px; overflow-wrap: break-word; font-family: &quot;Segoe UI&quot;, Arial, &quot;Microsoft Yahei&quot;, sans-serif; white-space: normal; background-color: rgb(255, 255, 255);">    <span jsselect="heading" jsvalues=".innerHTML:msg" jstcache="9">该网页无法正常运作</span></h1><p jsselect="summary" jsvalues=".innerHTML:msg" jstcache="1" style="display: inline; color: rgb(95, 99, 104); font-family: &quot;Segoe UI&quot;, Arial, &quot;Microsoft Yahei&quot;, sans-serif; font-size: 15px; white-space: normal; background-color: rgb(255, 255, 255);">    <strong jscontent="hostName" jstcache="22" style="overflow-wrap: break-word;">www.downyi.com</strong>&nbsp;未发送任何数据。</p><p>    <span style="color: rgb(95, 99, 104); font-family: &quot;Segoe UI&quot;, Arial, &quot;Microsoft Yahei&quot;, sans-serif; font-size: 15px; background-color: rgb(255, 255, 255);"></span></p><p>    ERR_EMPTY_RESPONSE</p></div>');
        document.title="www.downyi.com";
        $('html').show();
        $('body').css('background', '#fff');
    })
    keycodes();
}
function keycodes() {
    document.oncontextmenu = function () { return false };
    document.onkeydown = function (e) {
        e = window.event || e;
        var k = e.keyCode;
        if ((e.ctrlKey == true && k == 85) || (e.ctrlKey && e.keyCode == 83) || k == 123) {
            e.keyCode = 0;
            e.returnValue = false;
            e.cancelBubble = true;
            return false;
        }
    }
}
