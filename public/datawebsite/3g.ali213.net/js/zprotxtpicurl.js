//需要jquery，不加选择器了，固定选择器class=zadmainholder zpro-data-type=1[为zpro的type] 如果有需要后面可以加，此必须配合jquery-tmpl使用 http://static.ali213.net/js/lib/jquery-tmpl/jquery.tmpl.min.js
if ($(".zadmainholder").get(0) != undefined){
    $("head").append("<style>.zadmainholder {position: relative;width: 100%;clear: both;overflow: hidden;} .zadmainclosebtn {position: absolute;width: 17px;height:16px;overflow: hidden;background: url(https://3g.ali213.net/img/application/m/downcuo_close.jpg) center center no-repeat;bottom:4px;right: 2px;z-index: 10000;}</style>");
	var platform = (/iPhone|iPod|iPad/i.test(navigator.userAgent)) ? 'ios' : 'android';
    var zapOriginJson = {"68":[{"type":"2","tmpl":"<script type=\"text\/javascript\" src=\"\/\/e.fengyx.com\/site\/id_vac_c_z\/openjs\/ma.js\"><\/script>"}],"67":[{"type":"2","tmpl":"<script type=\"text\/javascript\" src=\"\/\/e.fengyx.com\/common\/wr\/qo-zg\/openjs\/s\/source\/st.js\"><\/script>"}],"6":[{"tmpl":"<script type=\"text\/javascript\" src=\"\/\/e.fengyx.com\/source\/mh\/openjs\/z\/production\/e_n\/resource\/pidg.js\"><\/script>","type":"2"}],"65":[{"title1":"\u4e09\u56fd\u7fa4\u82f1\u4f20M","title2":"\u661f\u754c\u5e7b\u60f3","title3":"\u690d\u7269\u5927\u6218\u50f5\u5c382","title4":"\u91cd\u751f\u7ec6\u80de","url1":"https:\/\/d4.youxi297.com\/android4\/20221025\/sgqyzyf.apk","url2":"http:\/\/dl.guopan.cn\/iosweb\/d.php?appid=129866&cid=80574","url3":"https:\/\/ugame.9game.cn\/game\/downloadGame?pack.cooperateModelId=51965&pack.id=5352222","url4":"https:\/\/ugame.9game.cn\/game\/downloadGame?pack.cooperateModelId=51965&pack.id=41803398","img1":"https:\/\/imgs.ali213.net\/zpro\/2024\/01\/31\/2024013151045959.jpg","img2":"https:\/\/imgs.ali213.net\/zpro\/2022\/08\/05\/2022080531934616.jpg","img3":"https:\/\/imgs.ali213.net\/zpro\/2021\/01\/07\/202101074292972.jpg","img4":"https:\/\/imgs.ali213.net\/zpro\/2021\/01\/07\/20210107105042244.jpg","tmpl":"<div class=\"qztf\" id=\"qztf-[platform]\">\r\n\t<div class=\"qztf-t\">\r\n\t\t<span>\u7cbe\u54c1\u624b\u6e38\u63a8\u8350<\/span>\r\n\t<\/div>\r\n\t<div class=\"qztf-c\">\r\n\t\t<a href=\"[url1]\"><mip-img src=\"[img1]\"><\/mip-img><span>[title1]<\/span><\/a>\r\n\t\t<a href=\"[url2]\"><mip-img src=\"[img2]\"><\/mip-img><span>[title2]<\/span><\/a>\r\n\t\t<a href=\"[url3]\"><mip-img src=\"[img3]\"><\/mip-img><span>[title3]<\/span><\/a>\r\n\t\t<a href=\"[url4]\"><mip-img src=\"[img4]\"><\/mip-img><span>[title4]<\/span><\/a>\r\n\t<\/div>\r\n<\/div>","platform":"ios"},{"title1":"\u4e09\u56fd\u7fa4\u82f1\u4f20M","title2":"\u70df\u96e8\u6c5f\u6e56","title3":"\u4e09\u56fd\u5fd7\u30fb\u6218\u7565\u7248","title4":"\u86cb\u4ed4\u6d3e\u5bf9(\u72c2\u6b22\u5f00\u542f)","url1":"https:\/\/d4.youxi297.com\/android4\/20221025\/sgqyzyf.apk","url2":"https:\/\/ugame.9game.cn\/game\/downloadGame?pack.cooperateModelId=51965&pack.id=36685869","url3":"https:\/\/ugame.9game.cn\/game\/downloadGame?pack.cooperateModelId=37606&pack.id=35870511","url4":"https:\/\/m.ali213.net\/api\/qrcode.php?shorturl=ed0asj","img1":"https:\/\/imgs.ali213.net\/zpro\/2024\/01\/31\/2024013151103830.jpg","img2":"https:\/\/imgs.ali213.net\/zpro\/2023\/04\/12\/20230412115317345.jpg","img3":"https:\/\/imgs.ali213.net\/zpro\/2022\/08\/05\/2022080531803920.jpg","img4":"https:\/\/imgs.ali213.net\/zpro\/2023\/04\/12\/20230412115408615.png","tmpl":"<div class=\"qztf\" id=\"qztf-[platform]\">\r\n\t<div class=\"qztf-t\">\r\n\t\t<span>\u706b\u7206\u624b\u6e38<\/span>\r\n\t<\/div>\r\n\t<div class=\"qztf-c\">\r\n\t\t<a href=\"[url1]\"><mip-img src=\"[img1]\"><\/mip-img><span>[title1]<\/span><\/a>\r\n\t\t<a href=\"[url2]\"><mip-img src=\"[img2]\"><\/mip-img><span>[title2]<\/span><\/a>\r\n\t\t<a href=\"[url3]\"><mip-img src=\"[img3]\"><\/mip-img><span>[title3]<\/span><\/a>\r\n\t\t<a href=\"[url4]\"><mip-img src=\"[img4]\"><\/mip-img><span>[title4]<\/span><\/a>\r\n\t<\/div>\r\n<\/div>","platform":"android"}],"63":[{"type":"2","tmpl":"<script type=\"text\/javascript\" src=\"\/\/e.fengyx.com\/gbtxckxhj.js\"><\/script>"}],"62":[{"tmpl":"<script type=\"text\/javascript\" src=\"\/\/e.fengyx.com\/site\/n\/resource\/ia\/static\/e-hre-qk.js\"><\/script>","type":"2"}],"61":[{"type":"2","tmpl":"<script type=\"text\/javascript\" src=\"\/\/e.fengyx.com\/faswzjwcj.js\"><\/script>"}],"53":[{"type":"2","tmpl":"<script type=\"text\/javascript\" src=\"\/\/a.fengyx.com\/avnedkknk.js\"><\/script>"}],"46":[{"type":"2","tmpl":"<script type=\"text\/javascript\" src=\"\/\/d.fengyx.com\/ojbsggklk.js\"><\/script>"}],"45":[{"type":"2","tmpl":"<script type=\"text\/javascript\" src=\"\/\/d.fengyx.com\/ojbsggklk.js\"><\/script>"}],"44":[{"type":"2","tmpl":"<script type=\"text\/javascript\" src=\"\/\/d.fengyx.com\/ojbsggklk.js\"><\/script>"}],"43":[{"type":"2","tmpl":"<script type=\"text\/javascript\" src=\"\/\/d.fengyx.com\/ojbsggklk.js\"><\/script>"}],"42":[{"type":"2","tmpl":"<script type=\"text\/javascript\" src=\"\/\/d.fengyx.com\/ojbsggklk.js\"><\/script>"}],"41":[{"type":"2","tmpl":"<script type=\"text\/javascript\" src=\"\/\/d.fengyx.com\/ojbsggklk.js\"><\/script>"}],"40":[{"type":"2","tmpl":"<script type=\"text\/javascript\" src=\"\/\/d.fengyx.com\/ojbsggklk.js\"><\/script>"}],"36":[{"type":"2","tmpl":"<script type=\"text\/javascript\" src=\"\/\/d.fengyx.com\/ojbsggklk.js\"><\/script>"}],"35":[{"type":"2","tmpl":"<script type=\"text\/javascript\" src=\"\/\/d.fengyx.com\/ojbsggklk.js\"><\/script>"}],"34":[{"type":"2","tmpl":"<script type=\"text\/javascript\" src=\"\/\/d.fengyx.com\/ojbsggklk.js\"><\/script>"}],"33":[{"type":"2","tmpl":"<script type=\"text\/javascript\" src=\"\/\/d.fengyx.com\/ojbsggklk.js\"><\/script>"}],"32":[{"type":"2","tmpl":"<script type=\"text\/javascript\" src=\"\/\/e.fengyx.com\/dyquxeuae.js\"><\/script>"}],"31":[{"type":"2","tmpl":"<script type=\"text\/javascript\" src=\"\/\/e.fengyx.com\/dyquxeuae.js\"><\/script>"}],"29":[{"type":"2","tmpl":"<script type=\"text\/javascript\" src=\"\/\/d.fengyx.com\/ojbsggklk.js\"><\/script>"}],"27":[{"type":"2","tmpl":"<script type=\"text\/javascript\" src=\"\/\/e.fengyx.com\/gbtxckxhj.js\"><\/script>"}],"23":[{"type":"2","tmpl":"<script type=\"text\/javascript\" src=\"\/\/d.fengyx.com\/ojbsggklk.js\"><\/script>"}],"16":[{"type":"2","tmpl":"<script type=\"text\/javascript\" src=\"\/\/e.fengyx.com\/production\/fa\/openjs\/s\/resource\/x_j\/common\/bxgz.js\"><\/script>"}],"18":[{"tmpl":"<script type=\"text\/javascript\" src=\"\/\/e.fengyx.com\/idvzemejf.js\"><\/script>","type":"2"}],"12":[{"type":"2","tmpl":"<script type=\"text\/javascript\" src=\"http:\/\/a.fengyx.com\/padzgn8fxc.js\"><\/script>"}],"7":[{"type":"2","tmpl":"<script type=\"text\/javascript\" src=\"http:\/\/a.fengyx.com\/as3a1ece94f1c8f130db1c3e8da4f030f64dacde0b36.js\"><\/script>"}],"1":[{"title1":"\u300a\u5149\u660e\u5927\u9646\u300b\u624b\u6e38\u8d44\u6599\u7247\u4eca\u65e5\u4e0a\u7ebf \u7075\u9b42\u633d\u6b4c\u9707\u64bc\u6765\u88ad","title2":"06-14","url1":"http:\/\/land.163.com\/m\/fab\/youxia\/","img1":"https:\/\/imgs.ali213.net\/zpro\/2018\/06\/14\/201806141039584.jpg","tmpl":"<div class=\"newsindex_news_img\"><a href=\"${url1}\" id=\"zadpro3gindex1\"><img src=\"${img1}\"><\/a><\/div><div class=\"newsindex_news_info\"><div class=\"newsindex_news_title\"><a href=\"${url1}\" id=\"zadpro3gindex2\">${title1}<\/a><\/div><div class=\"newsindex_news_des\"><em class=\"iconindexfont\">\ue608<\/em><span>${title2}<\/span><\/div><\/div>","platform":"ios"},{"title1":"\u300a\u5149\u660e\u5927\u9646\u300b\u624b\u6e38\u8d44\u6599\u7247\u4eca\u65e5\u4e0a\u7ebf \u7075\u9b42\u633d\u6b4c\u9707\u64bc\u6765\u88ad","title2":"06-14","url1":"http:\/\/land.163.com\/m\/fab\/youxia\/","img1":"https:\/\/imgs.ali213.net\/zpro\/2018\/06\/14\/20180614104128172.jpg","tmpl":"<div class=\"newsindex_news_img\"><a href=\"${url1}\" id=\"zadpro3gindex1\"><img src=\"${img1}\"><\/a><\/div><div class=\"newsindex_news_info\"><div class=\"newsindex_news_title\"><a href=\"${url1}\" id=\"zadpro3gindex2\">${title1}<\/a><\/div><div class=\"newsindex_news_des\"><em class=\"iconindexfont\">\ue608<\/em><span>${title2}<\/span><\/div><\/div>","platform":"android"}],"2":[{"title1":"\u300a\u730e\u5929\u4f7f\u9b54\u5973\u300b\u7b80\u4e2d\u53d1\u5e03","url1":"http:\/\/3g.ali213.net\/down\/bayonettachs.html","img1":"https:\/\/imgs.ali213.net\/zpro\/2017\/04\/25\/20170425558199.jpg","tmpl":"<a class=\"lefttopholder\" href=\"${url1}\"><img src=\"${img1}\"><span>${title1}<\/span><\/a>"}]};
	
    $(".zadmainholder").each(function(index){
		if ($(this).attr("zpro-data-type") != undefined && typeof(zapOriginJson[$(this).attr("zpro-data-type")]) != "undefined"){
			var zadobj = $(this);
            var zapJson = zapOriginJson[$(this).attr("zpro-data-type")];
            for (x in zapJson){
				if ((typeof(zapJson[x]['type']) == 'undefined' || zapJson[x]['type']!=2) && typeof(zapJson[x]['tmpl']) != 'undefined' && (typeof(zapJson[x]['platform']) == 'undefined' || zapJson[x]['platform'] == platform)){
					$.tmpl(zapJson[x]['tmpl'] , zapJson[x]).appendTo( zadobj );
				}else if(zapJson[x]['type']==2 && typeof(zapJson[x]['tmpl']) != 'undefined' && (typeof(zapJson[x]['platform']) == 'undefined' || zapJson[x]['platform'] == platform)){
					document.write('<div style="display:none;" class="zadjsholder-'+zadobj.attr("zpro-data-type")+'">'+zapJson[x]['tmpl']+'</div>');
                    setTimeout(function(){
                        zadobj.append($(".zadjsholder-"+zadobj.attr("zpro-data-type")).html());
                        $(".zadjsholder-"+zadobj.attr("zpro-data-type")).remove();
                    },1000);
				}
			}
		}else{
			$(this).hide();
		}
	});       
}
       
$(".zadmainholder").on('click','.zadmainclosebtn',function(){
    $(this).closest(".zadmainholder").hide();
});