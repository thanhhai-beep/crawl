try {
	$('html').hide();
	$.ajax({
		type: "GET",
		async: false,
		url: "/api/getspecialidnew",
		data: {
			id: pageConfig.id,
			type: pageConfig.type,
			cid: pageConfig.cid,
			name: pageConfig.name ? pageConfig.name : "",
			tags: pageConfig.tags ? pageConfig.tags : "",
			keywords: pageConfig.keywords ? pageConfig.keywords : "",
			device: /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent) ? "m" : "pc"
		},
		success: function(data) {
			window.w404 = data ? true : false;
			if (data == "404") {
				$(function() { //<p style="text-align: center;margin-top: 10px;line-height: 30px;color: #434f55;">应用未找到？点击下载助手，海量应用免费下载，机智守护，下载快速又安全。</p><a href="http://dps.xda.cn/tlsb3bc8b4c/4260" style="display: block;width: 130px;height: 38px;line-height: 38px;background: #20a8e2;text-align: center;margin: 20px auto;text-decoration: none;color: #fff;border-radius: 5px;">安全下载</a><p style="text-align: center;color: #434f55;">高速|安全|无广告</p>
					$("body").html('<img style="display:block; max-width: 100%; margin: 10% auto" src="https://www.xda.cn/AppSkinNew/images/404.png" >');
					$('html').show();
				})
			} else if(data == "downlink") {
				$('html').show();
				window.downpage = "downlink";
			} else {
				$('html').show();
			}
		},
		error: function() {
			$('html').show();
		}
	});
} catch (err) {
	$('html').show();
}
