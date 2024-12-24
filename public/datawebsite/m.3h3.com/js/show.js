    
var cat_arrs = {'28':'1','55':'2','104':'0','317':'0','42':'44','48':'22','29':'3','35':'9','30':'4','31':'5','32':'6','33':'7','34':'8','36':'10','37':'11','40':'42','41':'43','39':'21','38':'12','43':'45','44':'46','45':'47','46':'48','47':'54','49':'23','50':'35','51':'38','52':'50','54':'53','53':'52','56':'13','57':'14','58':'16','59':'17','60':'18','61':'19','62':'20','63':'40','64':'41','77':'55','78':'56','79':'57','80':'58','81':'59','82':'60','83':'61','84':'62','85':'63','86':'64','87':'65','88':'66','89':'67','90':'68','91':'69','92':'70','93':'71','94':'72','95':'73','96':'74','97':'75','98':'76','99':'77','100':'78','101':'79','102':'80','103':'81','105':'83','106':'84','107':'85','108':'86','109':'87','110':'88','111':'89','112':'90','113':'91','114':'92','115':'93','116':'94','117':'95','118':'96','119':'97','120':'98','121':'99','122':'100','123':'101','124':'102','125':'103','126':'104','127':'105','128':'106','129':'107','130':'108','131':'109','132':'110','133':'111','134':'112','135':'113','136':'114','137':'115','138':'116','139':'117','140':'118','141':'119','142':'120','143':'121','144':'122','145':'123','146':'124','147':'125','148':'126','149':'127','150':'128','151':'129','152':'130','153':'131','154':'132','155':'133','156':'134','157':'135','158':'136','159':'137','160':'138','161':'139','162':'140','163':'141','164':'142','165':'143','166':'144','167':'145','168':'146','169':'147','170':'148','171':'149','172':'150','173':'151','174':'152','175':'153','176':'154','177':'155','178':'156','179':'157','180':'158','181':'159','182':'160','183':'161','184':'162','185':'163','186':'164','187':'165','188':'166','189':'167','190':'168','191':'169','192':'170','193':'171','194':'172','195':'173','196':'174','197':'175','198':'176','199':'177','200':'178','201':'179','202':'180','203':'181','204':'182','205':'183','206':'184','207':'185','208':'186','209':'187','210':'188','211':'189','212':'190','213':'191','214':'192','215':'193','216':'194','217':'195','218':'196','219':'197','220':'198','221':'199','222':'200','223':'201','224':'202','225':'203','226':'204','227':'205','228':'206','229':'207','230':'208','231':'209','232':'210','233':'211','234':'212','235':'213','236':'214','237':'215','238':'216','239':'217','240':'218','241':'219','242':'220','243':'221','244':'222','245':'223','246':'224','247':'225','248':'226','249':'227','251':'229','252':'230','253':'231','254':'232','255':'233','256':'234','257':'235','258':'236','259':'237','260':'238','261':'239','262':'240','263':'241','264':'242','325':'0','326':'0','327':'0','328':'0'};

function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (typeof(callback) != "undefined") {
        if (script.readyState) {
            script.onreadystatechange = function() {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {
            script.onload = function() {
                callback();
            };
        }
    };
    script.src = url;
    document.body.appendChild(script);
}
$(document).ready(function($) {
   if(isMobile.any()){};
	$tg_page = 1;
	$('.app_appmore .moreBtn').click(function(){
		$tg_page++;
		//获取推荐下载推广
		getZtShowTgGame($tg_page);
	});
	if(location.href.indexOf('zixun')>-1)navFloat();//处理下拉显示菜单
	getTuiguangs();//得到推广的游戏
	//if($("#r_main").length>0){y_scroll("r_main");}
	if($("#xg_main").length>0){x_scroll("xg_main");}
	if($("#guess_main").length>0){
        if($('.app_guess nav span').length>1){
            p_scroll("guess_main");
        }else{
            $(".app_guess #guess_main").css('overflow','hidden');
        }
    }
	//内容高度控制
	$max_content_height = 800;
	if($('.chapter-cont').height()>$max_content_height){
		$('.chapter-cont').addClass('snbg');
		$('.chapter-cont').css('height',$max_content_height).css('overflow','hidden');
		$('.chapter-cont').parent().append('<a href="javascript:void(0);" class="slide-btn"><span>展开，查看全部</span></a>');
	}
	// 查看全部
    $('.slide-btn').click(function(){
        var para = $(this).find('span');
        if(location.href.indexOf('downinfo')>-1){
            setTimeout("para.toggleClass('on')",100);
        }else{
            para.toggleClass('on');
        }
        if(para.hasClass('on')){
            para.text('折叠，简略查看');
            $('.chapter-cont').css({'height':'auto'});
			$('.chapter-cont').removeClass('snbg');
        }else{
            para.text('展开，查看全部');
            $('.chapter-cont').css({'height':$max_content_height});
			$('.chapter-cont').addClass('snbg');
        };
    });
	// 返回顶部
    $('.goTop').click(function(){
        $('body,html').animate({
           scrollTop: 0
        }, 500);
    });
    $(window).scroll(function() {       
        if($(window).scrollTop() >= 800){
            $('.float-bar').fadeIn(500); 
        }else{    
            $('.float-bar').fadeOut(500);    
        }  
    });
	//处理相关游戏和相关版本是否为空
	if($.trim($('.app_soft ul').html())==''){
		$('.app_soft .hd_article span:eq(0)').hide();
		$('.app_soft .pagenumy').hide();
		$('.app_soft .hd_article').css('width','50%');
	}if($.trim($('.app_soft #r_main .r_list:eq(1) ul').html())==''){
		$('.app_soft .hd_article span:eq(1)').hide();
		$('.app_soft .pagenumy').hide();
		$('.app_soft .hd_article').css('width','50%');
	}
	//猜你喜欢为空判断
	if($('#app_guess .hd_article span').length==1){
		$('#app_guess .pagenum').hide();
		$('#app_guess .hd_article').css('width','50%');
	}
    if($.trim($('#app_guess .hd_article').html())==''){$('#app_guess').hide();}
	//第一个猜你喜欢选中
	$('.app_guess nav span:eq(0)').addClass('cur');
	//判断有没有其他版本或相关游戏同时出现
	if($('.app_soft nav span:eq(1)').css('display')=='none'){
		$('.app_soft .r_main_ul').parent().append($('.app_soft .r_main_ul').html());
		$('.app_soft .r_main_ul').remove();
	}
    //下载内页
    download_fun();
    // 菜单
    $('.body-mask').click(function(){
        $('.body-mask').removeClass('open');
        $('.nav').hide();
    });
    $('.menu-btn').click(function(event) {
        /* Act on the event */
        $('.body-mask').toggleClass('open');
        $('.nav').slideToggle();

        if ($('.body-mask').hasClass('open')) {
            $('.menu_top .img').hide();
            $('.nav').slideDown();
            $('.so-box').slideUp();
            $('.so-menu').removeClass('on');
        }else{
            $('.menu_top .img').show();
            $('.nav').slideUp();
            $('.body-mask').removeClass('open');
        }
    });

    // 搜索
    $('.soso-btn').click(function (e) {
        $('#popNav').slideUp(400);
        $('#popSoso').stop().slideToggle(400);
        e.stopPropagation();
    });
    $('#popSoso').click(function (e) {
        e.stopPropagation();
    });
    $('body').click(function () {
        $('#popSoso').slideUp(400);
    });

    //搜索按钮
    $("#search-btn").click(function () {
        if ($("#keyword").val() == "") {
            //alert("搜索关键词不能为空哦！"); return false;
            $("#keyword").val("");
        }
        var catt = "";
        if (typeof (cat) != "undefined") {
            catt = cat;
        } else {
            catt = "0";
        }
        $key_val = escape($("#keyword").val());
        //console.log($key_val);
        //window.location = "/search_" + catt + "_" + $key_val + ".html";
        window.location = "/index.php?m=wap&c=index&a=search&ptype=0&k="+$("#keyword").val();
    });
    // 选项卡 鼠标点击
    $(".TAB_CLICK li").click(function(){
        var tab=$(this).parent(".TAB_CLICK");
        var con=tab.attr("id");
        var on=tab.find("li").index(this);
        $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
        $(con).eq(on).show().siblings(con).hide();
    });
    $(".TAB_CLICK li").filter(':first').trigger('click');
	$('.slider1 .slick-list .yz-tit3,.slider1 .slick-list .img').click(function(){
		location.href = $(this).parent().find('.m-yx .d-btn a').attr('href');
	});
    //相关软件为空
    if($.trim($('.app_soft .m-option').html())==''){
        $('.app_soft').remove();
        $('.div_a_4').remove();
    }
    //专区只有单个
    if($('.xg_tabs span').length==1){
        $('.xg_tabs').css('width','50%');
    }
    //热门软件为空
    if($.trim($('.Qtag ul').html())=='' || $('.Qtag ul li').length < 3){
        $('.Qtag').remove();
    }
    //软件判断导航
    /*if(location.href.indexOf('/downinfo/')>-1){
        setTimeout("$('.menu_top .img').remove();",500);
        $('.menu_top').css('background','#0075be');
        $('.menu_top a').css('color','#fff').css('float','left');
    }*/
    //图片放大
    var flag = !0;
    function t(e) {console.log(e);
        new Swiper(".light-box .swiper-container", {
            initialSlide: e,
            zoom: !0,
            zoom: {
                maxRatio: 2,
                toggle: !1
            },
            pagination: {
                el: ".swiper-pagination",
                type: "fraction"
            }
        })
    }
    var i = "";
    $('.m-slide1 li img,.m-con img,.slide-txt img,.con img').each(function(index) {
        var e = $(this).attr("src");    
        i += '<li class="swiper-slide"><div class="swiper-zoom-container"><img src="' + e + '"></div></li>', 
        $(this).click(function() {
            flag = !0;
            var e = $(this);
            if ($(".light-box").length < 1) {
                var a = "";
                a += '<div class="light-box">', a += '    <div class="swiper-container">', a += '        <ul class="swiper-wrapper">' + i + "</ul>", a += '        <div class="swiper-pagination swiper-pagination-white"></div>', a += "    </div>", a += '    <span class="close">关闭</span>', a += "</div>", $("body").append(a);
            }
            var s = $(window).height();
            $(".light-box img").css({
                "max-height": .8 * s
            }), $(".light-box,.light-box .close").show(), document.addEventListener("touchmove", function(e) {
                flag && (e.preventDefault(), e.stopPropagation())
            }, !1), t(index)
        })
    });
    //});
    $("body").on("click",".light-box",function(){$(this).remove();flag = !1;});
	premission();
});
function download_fun(){
    $("#wz").click(function(){
        if($('.return').hasClass("sw")){
            $(".return").removeClass("sw");
        }else{
            $(".return").addClass("sw");
        }
    });
}
var is_scroll = false;
function navFloat(){
    $(window).scroll(function(){
        if($(window).scrollTop()>44){
            $(".menu_top").addClass("m-nav-float");
            if($(".menu_top").hasClass("m-nav-float")==true && is_scroll == false){$('.nav').show();$('.menu_top .img').show();$('.menu_top').css('background','#fff');$('.menu_top a').css('color','black').css('float','left').css('display','inline-block');}
            is_scroll = true;
        }else{
            $(".menu_top").removeClass("m-nav-float");
            if($(".menu_top").hasClass("m-nav-float")==false && is_scroll == true){$('.nav').hide();$('.body-mask').removeClass('open');$('.menu_top').css('background','');$('.menu_top a').css('color','white').css('float','left').css('display','block');}
            is_scroll = false;
        }
    })
}

function bytesToSize(bytes) {
    if (bytes === 0) return '0 B';
    var k = 1024, // or 1024
        sizes = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
 
   return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}

function getZtShowTgGame($page){
	//获取推荐下载推广
	$pgsize = 5;//一页多少个
	$hot_gms = '';
	$('.Qtag ul li').each(function(){
		$id = $(this).find('a').attr('href').replace('/youxi/','').replace('.html','');
		$hot_gms += $id+',';
	});
	if($hot_gms != ''){$hot_gms = $hot_gms.substring(0,$hot_gms.length-1);}
	var str = 'show';
	if(detail.crid <= 7)str = 'shows';
	var data3 = getJsonData('zt_show_tjxz','/jsondata/'+str+'/show_'+$('.app_appmore ul').attr('catid')+'_'+$page+'.json');
    if(typeof(data3)!='undefined'){
		var xg_game_temp = '<li><a href="url_rep" class="img"><img src="img_rep"></a><p><a href="url_rep">title_rep</a><span class="txt"><em class="lstar5"></em><u>filesize_rep</u>people_rep\u4eba\u5728\u73a9</span><span>description_rep</span></p><a href="url_rep" class="btn"><em class="bg"></em>\u8be6\u60c5</a></li>';
		var html = "";
		$.each(data3,function(idx,item){
			var sb="";
			var str = xg_game_temp;
			$updatetime = item.updatetime.split(' ');
            $updatetime = $updatetime[0];
            str = str.replaceAll('title_rep',item.title).replaceAll('filesize_rep',bytesToSize(item.filesize)).replaceAll('url_rep',item.url).replaceAll('img_rep',item.thumb.replaceAll('http:','')).replaceAll('people_rep',item.people_count).replaceAll('time_rep',$updatetime).replaceAll('description_rep',item.description);
			html += str;
		});
		/*if(){//未满一页数，则隐藏更多加载
			$('.app_appmore .moreBtn').hide();
		}*/
		if(html!='' && data3.length == $pgsize){
			$('.app_appmore ul').append(html);
		}else{
			$('.app_appmore .moreBtn').html('\u5df2\u7ecf\u5168\u90e8\u52a0\u8f7d\u5b8c！');
		}
	}else{
        $('.app_appmore .moreBtn').html('\u5df2\u7ecf\u5168\u90e8\u52a0\u8f7d\u5b8c！');
    }
}
String.prototype.replaceAll  = function(s1,s2){    
    return this.replace(new RegExp(s1,"gm"),s2);    
}
function getTuiguangs(){
	//获取菜单下载推广
	//getJsonData_asynchronous(success_function_menu,'zt_show_menu');//资讯的页面加入菜单推广
	//获取相关游戏推广
	//getJsonData_asynchronous(success_function_xg_gm,'zt_show_xg_game');
	//获取猜你喜欢推广
	//getJsonData_asynchronous(success_function_cnxh,'zt_show_cnxh');
	//获取第一页推荐下载
	getZtShowTgGame(1);
    loadScript("/js/spread.js", function() {
        success_function_menu(spread_data['zt_show_menu']);//获取菜单下载推广
        success_function_xg_gm(spread_data['zt_show_xg_game']);//获取相关游戏推广
        success_function_cnxh(spread_data['zt_show_cnxh']);//获取猜你喜欢推广
        success_function_tjxz(spread_data['zt_show_tjxz']);//获取推荐下载推广
    });
	//获取推荐下载推广
	//getJsonData_asynchronous(success_function_tjxz,'zt_show_tjxz');
}
//获取菜单下载推广
function success_function_menu(data3){
	if(typeof(data3)!='undefined'){
		var xg_game_temp = '<a href="url_rep" class="img" title="title_rep" style="width: 100px;"><img src="img_rep"></a>';
		$html = "";
        var tg_i = 0;
		$.each(data3,function(idx,item){
            $rootid = detail.crid;
            $cid = detail.cid;
            if($rootid == 70){$rootid = 55;}
            if($rootid == 5){$rootid = 55;}
            if($rootid == 6){$rootid = 69;}
            if(item.catids.indexOf(','+$('.app_appmore ul').attr('catid')+',') > 0 || item.catids.indexOf(','+$rootid+',') > 0 || item.catids.indexOf(','+$cid+',') > 0){
                var sb="";
                var str = xg_game_temp;
                var newDate = new Date();
                newDate.setTime(item.updatetime * 1000);
                $updatetime = newDate.getFullYear()+'-'+(newDate.getMonth()+1)+'-'+newDate.getDate();
                str = str.replaceAll('title_rep',item.title).replaceAll('filesize_rep',item.filesize).replaceAll('url_rep',setTgUrl(item.url,'dhtg')).replaceAll('img_rep',item.thumb.replaceAll('http:','')).replaceAll('people_rep',item.people_count).replaceAll('time_rep',$updatetime).replaceAll('description_rep',item.description);
                if(tg_i<=2){$html += str;}
                tg_i++;
            }
		});
		$('.menu_top .menu_li a:eq(1)').after($html);
		if($.trim(isMobile.any())=='iPhone'){
			$('.menu_top').css('height','40px');
			$('.menu_top .img').css('height','28px').css('line-height','28px').css('width','100px');
			$('.menu_top .img img').css('height','38px').css('line-height','38px').css('width','100px');	
		}
	}
}
//获取相关游戏推广
function success_function_xg_gm(data1){
	if(typeof(data1)!='undefined'){
		var xg_game_temp = '<div class="m-download"><a href="url_rep" class="down">\u8be6\u60c5</a><div class="pic"><a href="url_rep"><img src="img_rep"></a></div><div class="txt"><h3><a href="url_rep">title_rep</a></h3><ul val="5"><li class="ok"></li><li class="ok"></li><li class="ok"></li><li class="ok"></li><li class="ok"></li></ul><span>filesize_rep</span><em>time_rep</em></div></div>';
        var tg_i = 0;
		$.each(data1,function(idx,item){
            $rootid = detail.crid;
            $cid = detail.cid;
            if($rootid == 5){$rootid = 55;}
            if($rootid == 6){$rootid = 69;}
            if(item.catids.indexOf(','+$('.app_appmore ul').attr('catid')+',') > 0 || item.catids.indexOf(','+$rootid+',') > 0 || item.catids.indexOf(','+$cid+',') > 0){
                var sb="";
                var str = xg_game_temp;
                var newDate = new Date();
                newDate.setTime(item.updatetime * 1000);
                $updatetime = newDate.getFullYear()+'-'+(newDate.getMonth()+1)+'-'+newDate.getDate();
                str = str.replaceAll('title_rep',item.title).replaceAll('filesize_rep',item.filesize).replaceAll('url_rep',setTgUrl(item.url,'xgyx')).replaceAll('img_rep',item.thumb.replaceAll('http:','')).replaceAll('people_rep',item.people_count).replaceAll('time_rep',$updatetime).replaceAll('description_rep',item.description);
                if(tg_i<=2){$('.app_soft .m-option .m-download:eq('+tg_i+'),.m-rel .m-option .m-download:eq('+tg_i+')').prop("outerHTML",str);}
                tg_i++;
            }
		});
	}
}
//获取猜你喜欢推广
function success_function_cnxh(data2){
	if(typeof(data2)!='undefined'){
		var xg_game_temp = '<li><a href="url_rep"><img src="img_rep" class="appimg sign_app" alt="title_rep"></a><p class="gameTit">title_rep</p></li>';
        var tg_i = 0;
		$.each(data2,function(idx,item){
            $rootid = detail.crid;
            $cid = detail.cid;
            if($rootid == 5){$rootid = 55;}
            if($rootid == 6){$rootid = 69;}
            if(item.catids.indexOf(','+$('.app_appmore ul').attr('catid')+',') > 0 || item.catids.indexOf(','+$rootid+',') > 0 || item.catids.indexOf(','+$cid+',') > 0){
                var sb="";
                var str = xg_game_temp;
                var newDate = new Date();
                newDate.setTime(item.updatetime * 1000);
                $updatetime = newDate.getFullYear()+'-'+(newDate.getMonth()+1)+'-'+newDate.getDate();
                str = str.replaceAll('title_rep',item.title).replaceAll('filesize_rep',item.listorder).replaceAll('url_rep',setTgUrl(item.url,'cnxh')).replaceAll('img_rep',item.thumb.replaceAll('http:','')).replaceAll('people_rep',item.people_count).replaceAll('time_rep',$updatetime).replaceAll('description_rep',item.description);
                if(tg_i<=2){$('.app_guess .guessList:eq(0) li:eq('+tg_i+')').prop("outerHTML",str);}
                tg_i++;
            }
        });
	}
}
//获取推荐下载推广
function success_function_tjxz(data3){
	if(typeof(data3)!='undefined'){
		var xg_game_temp = '<li><a href="url_rep" class="img"><img src="img_rep"></a><p><a href="url_rep">title_rep</a><span class="txt"><em class="lstar5"></em><u>filesize_rep</u>people_rep\u4eba\u5728\u73a9</span><span>description_rep</span></p><a href="url_rep" class="btn"><em class="bg"></em>\u8be6\u60c5</a></li>';
        var tg_i = 0;
		$.each(data3,function(idx,item){
            $rootid = detail.crid;
            $cid = detail.cid;
            if($rootid == 5){$rootid = 55;}
            if($rootid == 6){$rootid = 69;}
			$rootid = 77;
			var ctid = $('.app_appmore ul').attr('catid');
			if($rootid > 6)ctid = cat_arrs[$('.app_appmore ul').attr('catid')];
			console.log("ctid:"+ctid);
            if(item.catids.indexOf(','+ctid+',') >= 0 || item.catids.indexOf(','+$rootid+',') >= 0 || item.catids.indexOf(','+$cid+',') >= 0){
                var sb="";
                var str = xg_game_temp;
                var newDate = new Date();
                newDate.setTime(item.updatetime * 1000);
                $updatetime = newDate.getFullYear()+'-'+(newDate.getMonth()+1)+'-'+newDate.getDate();
                str = str.replaceAll('title_rep',item.title).replaceAll('filesize_rep',item.filesize).replaceAll('url_rep',setTgUrl(item.url,'tjxz')).replaceAll('img_rep',item.thumb.replaceAll('http:','')).replaceAll('people_rep',item.people_count).replaceAll('time_rep',$updatetime).replaceAll('description_rep',item.description);
                if(tg_i<=2){$('.app_appmore ul li:eq('+tg_i+')').before(str);}
				
                tg_i++;
            }
		});
	}
}
function setTgUrl(url,type){
	if(url.indexOf('?')>-1){
		return url+'&'+type;
	}else{
		return url+'?'+type;
	}
}
function getJsonData_asynchronous(success_function,$type,$tj_url){
	$url = '/index.asp?Action=wap_tig&size=10&catid='+$('.app_appmore ul').attr('catid')+'&type='+$type;
	if($tj_url){$url = $tj_url;}
	var obj;
	$.ajax({
        url:$url,
        async: true,
        dataType: 'json', 
        success: function(data) {
        	 success_function(data); 
        }
    });
}
function getJsonData($type,$tj_url){
	$url = '/index.asp?Action=wap_tig&size=10&type='+$type;
	if($tj_url){$url = $tj_url;}
	var obj;
	$.ajax({
        url:$url,
        async: false,
        dataType: 'json', 
        success: function(data) {
        	 obj = data;
        }
    });
	return obj;
}
function p_scroll(id){
    var obj = $("#"+id),
	oul = obj.find(".guess_main_ul"),
	oli = oul.find(".guessCont"),
	onav_li = $(".hd_tabs2 span"),
	oli_l=oli.length,
	window_w=parseInt($(window).width()-10),
	oli_w=oli.eq(1).outerWidth(true)?oli.eq(1).outerWidth(true):oli.eq(0).outerWidth(true),
	ospan="<span class='cur'></span>";
	if(oli_l<1){obj.parent().remove();return false;}
	oul.width(oli_l*oli_w);
	oli.width(window_w);
	for(var i=1; i<oli_l; i++){
		ospan+="<span></span>";
	}
	$(".pagenum").html(ospan);
	$('.hd_tabs2 span').each(function(index){
		$(this).click(function(){
			onav_li.eq(index).addClass('cur').siblings().removeClass("cur");
			$('.pagenum span').eq(index).addClass('cur').siblings().removeClass('cur');
			myScroll.x=-index*window_w;
			$('.guess_main_ul').css({'-webkit-transform':"translate3d(" + myScroll.x + "px, 0px, 0px)"});
		})
	});
	var myScroll;
	myScroll = new iScroll(id,{
		snap:true,
		momentum: false,
		hScrollbar: false,
		onScrollEnd:function(){
			$(".pagenum span,.hd_tabs2 span").removeClass("cur");
			$(".hd_tabs2 span").eq(this.currPageX).addClass("cur");
			$(".pagenum span").eq(this.currPageX).addClass("cur");		
		}
	});
	$("#labels a").click(function(){
		var ii=$(this).index();		
		$("html,body").animate({scrollTop:$("#app_guess").offset().top-$(".navbar-top").height()},200);	
		$(".hd_tabs2 span").eq(ii).addClass("cur").siblings().removeClass("cur");
		$('.pagenum span').eq(ii).addClass('cur').siblings().removeClass('cur');
		var scroll_x;
		scroll_x=-ii*(parseInt($(window).width()-10));
		$('.guess_main_ul').css({'-webkit-transform':"translate3d(" + scroll_x + "px, 0px, 0px)"});				
	});
}

function x_scroll(id){
    var obj = $("#"+id),
	oul = obj.find(".xg_main_ul"),
	oli = oul.find(".xg_list"),
	onav_li = $(".xg_tabs span"),
	oli_l=oli.length,
	window_w=parseInt($(window).width()),	
	oli_w=oul.eq(0).outerWidth(true),
	//ospan="<span class='cur'></span>";
	ospan="";
	for(var i=0; i<oli_l; i++){
	if(oli.eq(i).find("ul li").length>0){
		ospan+="<span></span>";
	}else{
		oli.eq(i).remove();
		onav_li.eq(i).remove();
	}
	}
	oul.width(oul.find(".xg_list").length*oli_w);	
	oli.width(window_w);
	$(".pagenumx").html(ospan);
	$(".pagenumx span:eq(0)").addClass("cur");
	$(".xg_tabs span:eq(0)").addClass("cur");
	var myScroll;
	$('.xg_tabs span').each(function(index){
		$(this).click(function(){
			$(".xg_tabs span").eq(index).addClass('cur').siblings().removeClass("cur");
			$('.pagenumx span').eq(index).addClass('cur').siblings().removeClass('cur');
			myScroll.x=-index*window_w;
			$('.xg_main_ul').css({'-webkit-transform':"translate3d(" + myScroll.x + "px, 0px, 0px)"});
		})
	});
	myScroll = new iScroll(id,{
		snap:true,
		momentum: false,
		hScrollbar: false,
		onScrollEnd:function(){
			$(".pagenumx span,.xg_tabs span").removeClass("cur");
			$(".xg_tabs span").eq(this.currPageX).addClass("cur");
			$(".pagenumx span").eq(this.currPageX).addClass("cur");		
		}
	})
}
function y_scroll(id){
    var obj = $("#"+id),
	oul = obj.find(".r_main_ul"),
	oli = oul.find(".r_list"),
	onav_li = $(".hd_tabs3 span"),
	oli_l=oli.length,
	window_w=parseInt($(window).width()),	
	oli_w=oli.eq(1).outerWidth(true),
	ospan="<span class='cur'></span>";
	oul.width(oli_l*oli_w);	
	oli.width(window_w);
	for(var i=1; i<oli_l; i++){
		ospan+="<span></span>";
	}
	$(".pagenumy").html(ospan);	
	var myScrollc;
	$('.hd_tabs3 span').each(function(index){
		$(this).click(function(){
			onav_li.eq(index).addClass('cur').siblings().removeClass("cur");
			$('.pagenumy span').eq(index).addClass('cur').siblings().removeClass('cur');
			myScrollc.x=-index*window_w;
			$('.r_main_ul').css({'-webkit-transform':"translate3d(" + myScrollc.x + "px, 0px, 0px)"});
		})
	});
	if(obj.find(".nohd").length>0){var hsd=false;}else{var hsd=true;}
	myScrollc = new iScroll(id,{
		hScroll:hsd,
		snap:true,
		momentum: false,
		hScrollbar: false,
		onScrollEnd:function(){
			$(".pagenumy span,.hd_tabs3 span").removeClass("cur");
			$(".hd_tabs3 span").eq(this.currPageX).addClass("cur");
			$(".pagenumy span").eq(this.currPageX).addClass("cur");		
		}
	})
}

function premission(){
    $(".dd_qxtitle").click(function(){
		if($(".m-premissions-div ul li").length < 5)$(".m-premissions-div ul").css('height','auto');
		var winHeight = $(window).height();
		var showHeight = $(".m-premissions-div").height();
		if(showHeight<winHeight*0.7){
			$(".m-premissions-div").css("top",(winHeight-showHeight)/2);
		}
		$(".m-close-permis,.m-permission-bg").click(function(){
			$(".m-premissions-div,.m-permission-bg").fadeOut("fast");
		});
		$(".m-premissions-div,.m-permission-bg").fadeIn("fast");
    });
}