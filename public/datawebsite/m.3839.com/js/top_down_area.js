var is_yuanshen = /yuanshen_tool/.test(ua);
if (!is_yuanshen) {
    var $_top_down_btn = '';
    var $_top_down_txt = '';
    var footer_qd_url = typeof (_qd_url) !== 'undefined' ? _qd_url : '//d.3839.com/Q7';
    if (is_ios) {
        $_top_down_btn = '<a class="btn-down" href="javascript:void(0);" onclick="_base.goto_kb_ios_app();return false;">马上下载</a>';
        $_top_down_txt = '<em>好游快爆 - 抢先玩新鲜好游戏</em><span>一款主播高玩都用的游戏聚合APP</span>';
    } else {
        $_top_down_btn = '<a class="btn-down" href="' + footer_qd_url + '" rel="external nofollow">马上下载</a>';
        $_top_down_txt = '<em>好游快爆 - 抢先玩新鲜好游戏</em><span>一款主播高玩都用的游戏聚合APP</span>';
    }
    var $_top_down_str = '<div class="downArea" id="downArea">\
		<span class="btn-hide" onClick="$(this).parent().hide()">关闭</span>\
		<a href="//m.3839.com/"><img class="img" src="//img.71acg.net/kbyx~sykb/20201026/19493669887" alt="好游快爆官网"></a>\
		<div class="con">\
			<a href="//m.3839.com/">' + $_top_down_txt + '</a>\
		</div>\
		' + $_top_down_btn + '\
	</div>';
    document.write($_top_down_str);
}