var is_yuanshen = /yuanshen_tool/.test(ua);
var is_standalone = ('standalone' in window.navigator) && window.navigator.standalone;
if (!is_yuanshen && !is_standalone) {
    var $_bom_down_btn = '';
    var $_bom_down_txt = '';
    var footer_qd_url = typeof (_qd_url) !== 'undefined' ? _qd_url : '//d.3839.com/Q7';
    if (is_ios) {
        $_bom_down_btn = '<a class="btn-down" href="javascript:void(0);" onclick="_base.goto_kb_ios_app();return false;">马上下载</a>';
        $_bom_down_txt = '<em>好游快爆 - 抢先玩新鲜好游戏</em><span>一款主播高玩都用的游戏聚合APP</span>';
    } else {
        $_bom_down_btn = '<a class="btn-down wxdowntip" href="' + footer_qd_url + '" rel="external nofollow">马上下载</a>';
        $_bom_down_txt = '<em>好游快爆 - 抢先玩新鲜好游戏</em><span>一款主播高玩都用的游戏聚合APP</span>';
    }
    var $_bom_down_str = '<div class="downArea fixed-bottom" id="bomDownDiv" style="display:none">\
		<span class="btn-hide" onclick="$(this).parent().hide()">关闭</span>\
		<a href="//m.3839.com/" class="wxdowntip"><img class="img" src="//img.71acg.net/kbyx~sykb/20201026/19493669887" alt="好游快爆官网"></a>\
		<div class="con">\
			<a href="//m.3839.com/" class="wxdowntip">' + $_bom_down_txt + '</a>\
		</div>\
		' + $_bom_down_btn + '\
	</div>';
    document.write($_bom_down_str);
}