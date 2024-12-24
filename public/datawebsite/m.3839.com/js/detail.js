// 弹窗
popData['detail'] = '<div class="pop">'
	+ '    <a class="pclose" onclick="pop_hide">关闭</a>'
	+ '    <div class="ptit">请在好游快爆中打开该页面</div>'
	+ '    <div class="pcon">'
	+ '        <p class="pf24 grey tac">如已安装好游快爆APP，可点击立即前往在该游戏详情页打开，如没有安装好游快爆APP，可点击立即前往下载好游快爆APP。</p>'
	+ '    </div>'
	+ '    <div class="pbtn">'
	+ '        <a onclick="pop_hide()" href="javascript:void(0);">暂不前往</a>'
	+ '        <a class="btn_goto" href="javascript:void(0);">立即前往</a>'
	+ '    </div>'
	+ '</div>';

popData['collect'] = '<div class="pop">'
	+ '    <a class="pclose" onclick="pop_hide">关闭</a>'
	+ '    <div class="ptit">温馨提示</div>'
	+ '    <div class="pcon">'
	+ '        <p class="pf24 grey tac">该游戏暂不支持预约和下载，如需了解该游戏的最新状态，可以前往快爆APP收藏该游戏哦。</p>'
	+ '    </div>'
	+ '    <div class="pbtn">'
	+ '        <a onclick="pop_hide()" href="javascript:void(0);">暂不前往</a>'
	+ '        <a class="btn_goto" href="javascript:void(0);">立即前往</a>'
	+ '    </div>'
	+ '</div>';

popData['comment'] = '<div class="pop">'
	+ '    <a class="pclose" onclick="pop_hide">关闭</a>'
	+ '    <div class="ptit">到好游快爆 参与精彩评论<br><span style="font-size:0.28rem">（由浏览器环境限制，可能加载异常）</span></div>'
	+ '    <div class="pcon">'
	+ '        <p class="pf24 grey tac">下载好游快爆 查看更多精彩<br>和高玩一同讨论游戏，发表你的看法<br>每天还有玩家分享新奇好玩的游戏<br>快来加入吧！</p>'
	+ '    </div>'
	+ '    <div class="pbtn">'
	+ '        <a class="btn_app" href="javascript:void(0);">马上下载</a>'
	+ '    </div>'
	+ '</div>';
	
// tab切换
function tab1(i) {
	var li = $('#tabMenu1>li').eq(i);
	if (li.attr('rel')) {
		pop($(this).attr('rel'));
		return false;
	} else {
		li.addClass('on').siblings().removeClass('on');
		$('#tabList1>div').addClass('hide').eq(i).removeClass('hide').find('img[lz_src]').attr('src', function () { return $(this).attr('lz_src') }).removeAttr('lz_src');
		if (i == 1 && !li.attr('commented')) {
			li.attr('commented', 1);
			comInit.comPanel();
		}
		return false;
	}
}


function pjnumFormate(num) {
	var pj = '';
	var pj_num = 0;

	if (num > 9999 && num < 100000) {
		pj_num = num / 10000;
		pj_num = Math.round(pj_num * 100) / 100;
		pj = pj_num.toFixed(2) + 'W';
	} else if (num > 99999 && num < 1000000) {
		pj_num = num / 10000;
		pj_num = Math.round(pj_num * 100) / 100;

		pj = pj_num.toFixed(2) + 'W';
	} else if (num > 999999) {
		pj = '100W+';
	} else {
		pj = num;
	}

	return pj;
}

// 简介、日志伸缩
function shuoZhan(btn, id1, id2,h=3) {
	var lh = $('#' + id2).css('line-height').replace('px', ''); lh = parseInt(lh);
	var h2 = $('#' + id2).innerHeight();
	if (h2 > lh * h) {
		if (id2 == 'applogdiv') {
			btn.parent().show();
		} else {
			btn.show();
		}

		btn.click(function () {
			if ($(this).hasClass('hidebtn')) {
				$('#' + id1).addClass('over');
				$(this).removeClass('hidebtn');
			} else {
				$('#' + id1).removeClass('over');
				$(this).addClass('hidebtn');
			}
		});
	}
}

function pop_comment() {
	pop('comment');
	return false;
}

// 截图横图
var imgReady = (function () {
	var list = [], intervalId = null,
		tick = function () {
			var i = 0;
			for (; i < list.length; i++) {
				list[i].end ? list.splice(i--, 1) : list[i]();
			};
			!list.length && stop();
		},
		stop = function () {
			clearInterval(intervalId);
			intervalId = null;
		};
	return function (index, url, ready, load, error) {
		var onready, width, height, newWidth, newHeight,
			img = new Image();
		img.src = url;
		if (img.complete) {
			ready.call(img);
			load && load.call(img);
			return;
		};
		width = img.width;
		height = img.height;
		img.onerror = function () {
			error && error.call(img);
			onready.end = true;
			img = img.onload = img.onerror = null;
		};

		onready = function () {
			newWidth = img.width;
			newHeight = img.height;
			if (newWidth !== width || newHeight !== height ||
				newWidth * newHeight > 1024
			) {
				ready.call(img);
				onready.end = true;
			};
		};
		onready();
		img.onload = function () {
			!onready.end && onready();
			load && load.call(img);
			img = img.onload = img.onerror = null;
		};
		if (!onready.end) {
			list.push(onready);
			if (intervalId === null) intervalId = setInterval(tick, 40);
		};
	};
})();