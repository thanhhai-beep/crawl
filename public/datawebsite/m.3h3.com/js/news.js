lvMap = window.lvMap || {};

function lvViaJs(locationId) {
    var _f = undefined;
    var _fconv = 'lvMap[\"' + locationId + '\"]';
    try {
        _f = eval(_fconv);
        if (_f != undefined) {
            _f()
        }
    } catch(e) {}
}

function lvLoader(closetag) {
    var lvTest = null,
    lvTestPos = document.getElementsByTagName("span");
    for (var i = 0; i < lvTestPos.length; i++) {
        if (lvTestPos[i].className == "lvTestPos") {
            lvTest = lvTestPos[i];
            break
        }
    }
    if (lvTest == null) return;
    if (!closetag) {
        document.write("<span id=lvTestPos_" + lvTest.id + " style=display:none>");
        lvViaJs(lvTest.id);
        return
    }
    document.write("</span>");
    var real = document.getElementById("lvTestPos_" + lvTest.id);
    for (var i = 0; i < real.childNodes.length; i++) {
        var node = real.childNodes[i];
        if (node.tagName == "SCRIPT" && /closetag/.test(node.className)) continue;
        lvTest.parentNode.insertBefore(node, lvTest);
        i--
    }
    lvTest.parentNode.removeChild(lvTest);
    real.parentNode.removeChild(real)
}
//安卓文章内页顶部		
lvMap['0'] = function() {
//document.writeln("<script type=\"text\/javascript\" src=\"http:\/\/shili.downxia.com\/cxpdtpgwyaedgm.js\"><\/script>")
};
//安卓文章内页底部
lvMap['1'] = function() {
document.writeln("<div style='border-top: 1px dashed #e1e1e1;'><script type=\"text\/javascript\" src=\"\/\/shili.downxia.com\/xskyokbubvz.js\"><\/script></div>")
};

function a_1(){
	//document.writeln("<script type=\"text\/javascript\" src=\"\/gujs\/15.js\"><\/script>");
}
function a_2(){
	//document.writeln("<script type=\"text\/javascript\" src=\"\/gujs\/16.js\"><\/script>");
}
function a_3(){
	//document.writeln("<script type=\"text\/javascript\" src=\"\/gujs\/17.js\"><\/script>");
	document.writeln("<div style='border-top: 1px dashed #e1e1e1;'><script type=\"text\/javascript\" src=\"\/\/shili.downxia.com\/xskyokbubvz.js\"><\/script></div>")
}
function a_4(){
	//document.writeln("<script type=\"text\/javascript\" src=\"\/gujs\/18.js\"><\/script>");
}
function a_5(){
	//document.writeln("<script type=\"text\/javascript\" src=\"\/gujs\/19.js\"><\/script>");
}
function a_6(){
	//document.writeln("<script type=\"text\/javascript\" src=\"\/gujs\/20.js\"><\/script>");
}
function a_7(){
	//document.writeln("<script type=\"text\/javascript\" src=\"\/gujs\/21.js\"><\/script>");
}
function a_8(){
	//document.writeln("<script type=\"text\/javascript\" src=\"\/gujs\/22.js\"><\/script>");
}
function a_9(){
	//document.writeln("<script type=\"text\/javascript\" src=\"\/gujs\/23.js\"><\/script>");
}