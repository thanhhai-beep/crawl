try{if(self!=top){top.location.href=(self.location.href).replace("http:","https:");}}catch(e){}//防劫持
if(window.location.host!='m.3h3.com' && window.location.host!='m.3h3.cn'){window.location = location.href.replace(location.protocol+'//'+window.location.host,'https://m.3h3.com');}
if(typeof isMobile == 'undefined')var isMobile = {Android: function() {return navigator.userAgent.match(/Android/i);},BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},Windows: function() {return navigator.userAgent.match(/IEMobile/i);},any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}};
if((location.href == 'https://m.3h3.com/' || location.href.indexOf('az')>-1 || location.href.indexOf('soft') > -1 || location.href.indexOf('danji') > -1 || location.href.indexOf('jieji') > -1 || location.href.indexOf('patch') > -1 || location.href.indexOf('moniqi') > -1 || location.href.indexOf('gl') > -1 || location.href.indexOf('news') > -1 || location.href.indexOf('info') > -1 || location.href.indexOf('video')>-1) && (isMobile.any()==null)){
    if(location.href.indexOf('tj.html') <= -1 && location.href.indexOf('type.html') <= -1 && location.href.indexOf('rj_index.html') <= -1 && location.href.indexOf('tj_soft.html') <= -1 && location.href.indexOf('rj_type.html') <= -1 ){
    if(location.href.indexOf('https')>-1){
        location.href = location.href.replace("https://m.","https://www.");
    }else{
        location.href = location.href.replace("m.","www.");//如果不是手机打开，则跳转到pc页面
    }
    }
}

$.ajaxSetup({cache:true});//jquery缓存设置true ($.getScript 方法就不会带时间戳)
var Cookie={get:function(name){var value='',matchs;if(matchs=document.cookie.match("(?:^| )"+name+"(?:(?:=([^;]*))|;|$)"))value=matchs[1]?unescape(matchs[1]):"";return value},set:function(name,value,expire,domain){expire=expire||30*24*3600*1000;var date=new Date(),cookie="";date.setTime(date.getTime()+expire);cookie=name+"="+escape(value)+";expires="+date.toGMTString()+";path=/;";domain&&(cookie+="domain="+domain+";");document.cookie=cookie},del:function(name,domain){Cookie.set(name,'',-1,domain)}};
Array.prototype.in_mid = function(e) { for(i=0;i<this.length;i++)  {  if(e.indexOf(this[i])>-1)  return this[i]; }  return 0; }
$no_down_add = false;

var upDate = $('body > div.main > div > div.m-down-3h3.m-intro > div.txt > div:nth-child(4) > em').text().replace('时间：','');
var dateTime = new Date(upDate).getTime()/1000; // 更新时间戳
var onDaty = new Date((new Date()).toLocaleDateString().replace(/\-/g,'/'))/1000; // 当天时间戳
//var sevenDay = 432000 // 5天的时间戳数值
var sevenDay = 259200  // 3天的时间戳数值
//var sevenDay = 86400  // 1天的时间戳数值

var nid = $('.main').attr('thisid');
if (!nid) {
  var url = window.location.href;
  var matches = url.match(/\/(\d+)\.html/);
  nid = matches ? matches[1] : 0;
}
var isShow_Mhezuo = false;
//if(typeof($('.main').attr('cooperate_pc'))!='undefined' && $('.main').attr('cooperate_pc').indexOf('m_hezuo')>-1){isShow_Mhezuo = true;}
$down_address_a = $('.btn-dwn');
if((($down_address_a.attr('android')=='' && $down_address_a.attr('itunes')=='' && $down_address_a.attr('ios')=='' && $down_address_a.attr('h5')=='')||$down_address_a.attr('hz_error_url')==',1,'||$down_address_a.attr('is_stop_gm')==',1,')||$down_address_a.attr('is_subscribe')==',1,'||$down_address_a.attr('no_package')=='1'){
    $no_down_add = true;
}

if(($down_address_a.attr('cooper_hz') != 'undefined' && $down_address_a.attr('cooper_hz')>0 && $down_address_a.attr('cooper_hz')<999) || $down_address_a.attr('s_soft_link')==1)$no_down_add = true;
var showYYB = ["baidu.com", "sm", "sogou", "so.com", "toutiao", "google", "bing","3h3.com"];
if(($('.btn-dwn').length > 0 && !$no_down_add) || (onDaty-dateTime >= sevenDay && !/iphone|ipad/i.test(navigator.userAgent) && !$no_down_add)){
    if((($('.btn-dwn').attr('hz') == '360' && typeof($('.btn-dwn').attr('hz')) != 'undefined')  && !/iphone|ipad/i.test(navigator.userAgent)  ) ){//|| (onDaty-dateTime >= sevenDay && !/iphone|ipad/i.test(navigator.userAgent) && !$no_down_add && location.href.indexOf('/az/')>-1)
        showGs();
    } 
}
var zsnum = 1;
function showGs(){
    var referrer = document.referrer;
    var yyb_ck = Cookie.get('dyb_kk_'+nid);
    var mzsua = navigator.userAgent.toLowerCase();
    var czsnum = Cookie.get('dyb_zsnum');
    if (czsnum == '') {
        zsnum = 1
    } else {
        zsnum = parseInt(czsnum)
    }
    if ((mzsua.indexOf('mqqbrowser') > -1 || mzsua.indexOf('quark') > -1 || mzsua.indexOf('vivobrowser') > -1 || mzsua.indexOf('heytapbrowser') > -1) && referrer == '') {
        referrer = 'sogou';
    }
    if (zsnum > 3) {
        return false;
    }else if(yyb_ck == '1' && Cookie.get("clickGs") != '1'){return addGsBtn();}
    if (Cookie.get("clickGs") != '1'){//showYYB.in_mid(referrer) && //referrer != '' && 
        Cookie.set('dyb_kk_'+nid,'1',24*60*60*1000);
        addGsBtn();
    }else{
        return false;
    }
}
function addGsBtn(){
    if($('.btn-dwn').attr('is_subscribe') == 1)return;
    var pcatid = 91;
    if(AppcategroyId >= 56 && AppcategroyId <= 67)pcatid = 77;//游戏
    $.ajax({
        //url: "/index.php?m=content&c=content_ajax&a=get_area_by_ip",
        url: "/down_hezuo/hezuoval/"+pcatid+"/"+AppId,
		type: "GET",
        dataType:'json',
        async: false,
        success: function(redata) {
            var result = redata.datas;
            if (result.is_area_val == 1) {
                //$("#wdj_checkBox").click();
            }else{
                if(!/iphone|ipad/i.test(navigator.userAgent))$('.btn-dwn').hide();
                Cookie.set('dyb_zsnum',zsnum+1, 10*60*1000);
                var zs_name = result.name;
                var zs_desc = result.desc;
                $html = '<div class="down-wdj-wp" hz="yyb"><span id="wdj_checkBox" class="check-box active">用'+zs_name+'</span><a class="normal-dl-btn" href="javascript:;">普通下载</a>  <a class="install-btn i-source" style="background-color: #97c03d;" id="wdj_down_btn" rel="nofollow" href="/down/360/'+nid+'/"> 安全下载 </a><span class="wdj_text">'+zs_desc+'</span></div>';
                //$html = '<div class="download-wp" hz="yyb" style="display: -webkit-box;margin: 4px;"><span id="wdj_checkBox" class="check-box active" style="display:none">优先下载'+zs_name+'<br>安装，更安全</span><a class="normal-dl-btn" href="javascript:;" style="display:block;margin-left: 0px;-moz-box-flex: 1;-webkit-box-flex: 1;box-flex: 1;height: 40px;line-height: 40px;" rel="nofollow">普通下载</a>  <a class="install-btn i-source" id="wdj_down_btn" rel="nofollow" href="/down/360/'+nid+'/" style="margin-left: 10px;-moz-box-flex: 1;-webkit-box-flex: 1;box-flex: 1;line-height: 14px;padding: 8px 0;font-size: 16px;"> 安全下载 <i style="clear: both;font-style: normal;font-weight: normal;text-decoration: none;line-height: 20px;display: block;border-bottom: 1px dashed #eee;margin-bottom: 10px;font-size: 12px;color: #e9edde;border: 0;">需下载应用市场</i></a></div><div id="aqxzts" style="display: block;line-height: 20px;background:#fcfffc;color:#888;border: 1px solid #97c03d;box-sizing: border-box;margin-bottom:8px;padding: 5px 10px;font-size: 12px;text-align: left;border-radius: 4px;margin: 4px;margin-top: 20px;text-align:center"><font style="color: #65bb0a;"></font>'+zs_desc+'</div>';
				if($('.download-wp').length == 0){$('.btn-dwn').before($html);var new_element = document.createElement('link');new_element.setAttribute('rel', 'stylesheet');new_element.setAttribute('href', '/css/android/new/mobile_wdj.css');document.body.appendChild(new_element);}
				if(result.tongji){
                (function() {
                    var hm = document.createElement("script");
                    hm.src = "https://hm.baidu.com/hm.js?"+result.tongji;
                    var s = document.getElementsByTagName("script")[0]; 
                    s.parentNode.insertBefore(hm, s);
                })();
                }
                if(result.tongji_cnzz){
                var _czc = _czc || [];
                (function() {
                    var um = document.createElement("script");
                    um.src = "https://s4.cnzz.com/z.js?id="+result.tongji_cnzz+"&async=1";
                    var s = document.getElementsByTagName("script")[0];
                    s.parentNode.insertBefore(um, s);
                }
                )();
                }
            }
        }
    });
}
$('.down-wdj-wp,.download-wp').on('click','#wdj_down_btn',function(){ 
    Cookie.set('dyb_kk_'+nid,'0',24*60*60*1000);
    Cookie.set("clickGs",'1',24*60*60*1000);
    //downhits();
});
if(nid){
    $('.header .logo').addClass('logo-home');
    $('.header .logo img').attr('src','/images/android/logo-home.png');
}

/*if($('.down-wdj-wp').length > 0){
    $.ajax({
    url: "/index.php?m=content&c=content_ajax&a=get_area_by_ip",
	async:true,
    success: function(data) {
        if(data == 1){
            $('#wdj_checkBox').click();
        }
    }
    });
}*/
if(typeof isMobile == 'undefined')var isMobile = {Android: function() {return navigator.userAgent.match(/Android/i);},BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},Windows: function() {return navigator.userAgent.match(/IEMobile/i);},any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}};
var otherDown = false;
function setCookie(c_name,value,expiredays){
    var exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie=c_name+ "=" +escape(value)+
    ((expiredays==null) ? "" : "; expires="+exdate.toGMTString()+"; path=/;")
}
(function ($) {
    $('.icon3').attr('href','/az/s_69_1.html').html('<span></span>软件');
	$('.app_intro .g-tit1').append('<a class="feedback_a" style="background: none;font-size: 13px;padding-top:5px;color: #97c03d;border: 1px solid #97c03d;border-radius: 8px;margin: 0px -10px 0 0;padding: 3px;" href="javascript:;">举报反馈</a></li>');
	var css = `<style>
                .gtitle a.feedback_btn {
                        color: #F00;
                        float: right;
                }
                .feedback_box {
                    display: none;
                    z-index: 9999;
                    border: none;
                    margin: 0px;
                    padding: 0px;
                    top: 0px;
                    left: 0px;
                    bottom: 0px;
                    right:0px;
                    position: fixed;
                    justify-content: center;
                    align-items: center;
                    background-color: rgba(0,0,0,0.8);
                }

                .feedback_form {
                    position: fixed;
                    padding: 8% 6%;
                    color: #666;
                    font-size: 14px;
                    font-family: arial,"Microsoft Yahei";
                    width: 82%;
                    background: #fff;
                    border-radius: 5px;
                }
                
                .feedback_form p {
                    line-height: 24px
                }
                
                .feedback_form li {
                    clear: both;
                    margin: 5px 0;
                }
                
                .feedback_form li label {
                    display: inline-block;
                    line-height: 24px;
                    margin-right: 12px
                }
                
                .feedback_form .feedback_type label input {
                    margin-right: 7px;
                    width: 16px;
                    height: 16px;
                    float: left;
                    outline: none;
                    -webkit-appearance: radio;
                }
                
				.feedback_form .feedback_type input[type=radio]{  width: 13px;height: 13px;box-shadow: 0 0 2px #545151;padding: 0;margin: 5px 5px 0 0;box-sizing: border-box;-webkit-appearance: none;-moz-appearance: none;appearance: none;border-radius: 50%;}
				.feedback_form .feedback_type input[type=radio]:checked {background-color: #69a921;}
                .feedback_form li span {
                    display: block;
                    font-size: 16px;
                    color: #444;
                    line-height: 36px;
                }
                
                .feedback_form .feedback_content textarea {
                    border: 1px solid #cdcdcd;
                    width: 95%;
                    min-height: 40px;
                    font-size: 14px;
                    color: #666;
                    resize: none;
                    padding: 6px;
                }

                .feedback_form .feedback_contact input {
                    border: 1px solid #cdcdcd;
                    width: 95%;
                    font-size: 14px;
                    color: #666;
                    resize: none;
                    padding: 6px;
                }
                
                .feedback_form li.feedback_submit {
                    text-align: center;
                    padding: 20px 0 0 0;
                    margin: 0;
                }
                
                .feedback_form li.feedback_submit input {
                    border: none;
                    width: 120px;
                    background: #69a921;
                    color: #fff;
                    height: 30px;
                }
                
                .feedback_form .feedback_close {
                    width: 30px;
                    height: 30px;
                    position: absolute;
                    z-index: 10;
                    top: 5px;
                    right: 5px;
                    color: #999;
                    font-size: 30px;
                    text-align: center;
                    line-height: 30px;
                    transform: rotate(45deg);
                }
            </style>`;

            $('head').append($(css));
	$feedback_object = $(`<div class="feedback_box">
                                          <div class="feedback_form" style="display: block;">
                                                <a href="javascript:;" class="feedback_close">+</a>
                                                <p>对于您的问题我们深感抱歉，非常感谢您的举报反馈，请尽可能的填写全面，方便我们检查具体问题所在，及时处理，非常感谢！</p>
                                                <div>
                                                    <ul>
                                                        <li class="feedback_type">
                                                            <span>举报原因</span>
                                                            <label><input type="radio" name="err_type" value="nodown" checked> 无法下载</label>
                                                            <label><input type="radio" name="err_type" value="noinstall"> 无法安装</label>
                                                            <label><input type="radio" name="err_type" value="ver_old"> 版本太旧</label>
                                                            <label><input type="radio" name="err_type" value="xjzy"> 虚假资源</label>
                                                            <label><input type="radio" name="err_type" value="eykf"> 恶意扣费</label>
                                                            <label><input type="radio" name="err_type" value="soft_virus"> 携带病毒</label>
                                                            <label><input type="radio" name="err_type" value="sqbc"> 涉及违规</label>
                                                            <label><input type="radio" name="err_type" value="soft_tort"> 应用侵权</label>
                                                            <label><input type="radio" name="err_type" value="under_age"> 涉未成年</label>
                                                            <label><input type="radio" name="err_type" value="other"> 其他问题</label>
                                                        </li>
                                                        <li class="feedback_content">
                                                            <label>具体原因</label>
                                                            <textarea name="feedback_content" id="pContent" placeholder="请详细写清楚反馈问题或举报内容原因，方便我们快速核实并处理"></textarea>
                                                        </li>
                                                        <li class="feedback_contact">
                                                            <span>联系方式</span>
                                                            <input type="text" name="contact" id="contact" class="text code" placeholder="邮箱">
                                                        </li>
                                                        <li class="feedback_submit">
                                                            <input type="button" value="提交反馈" name="submit" id="submitBtn">
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                      </div>`);
	$('body').append($feedback_object);
	$('.feedback_a').click(function(){
		$('.feedback_box').css({'display':'flex'});
	});
	$('.feedback_close').click(function(e){
		$('.feedback_box').css({'display':'none'});
	});
	$('.feedback_box').click(function(e){
		if(($.contains($(".feedback_form")[0],e.target) || $(".feedback_form")[0]==e.target)){
		}else{
			$('.feedback_box').css({'display':'none'});
		}
	});
	$("#submitBtn").bind("click", function() {
		$title = location.href;
		$titles = $title.split('/');
		$id = $titles[$titles.length-1].replace('.html','');
		$fankui = $('#pContent').val();
		$err_type = $('input[name="err_type"]:checked').val();
		$contact = $('#contact').val();
		if(!$id || $title.indexOf('3h3.')<0){alert('请输入产品网址或产品网址错误！');return false;}
		if(!$fankui){alert('请输入反馈内容！');return false;}
		var regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
		if(!regEmail.test($contact)){alert('邮箱未输入或格式错误！');return false;}
		$.ajax({
			type: "post",
			url: window.location.protocol+'//'+window.location.hostname.replace(/^m\./, 'api.')+"/index.php?m=content&c=content_ajax&a=fankui",
			data: {'ism':1,'fankui':$fankui,'err_type':$err_type,'id':$id,'contact':$contact},
			dataType: "json",
			beforeSend: function() {
				$("#submitBtn").attr("disabled", !0)
			},
			success: function(e) {
				if ('success' === e.result) {
					alert("提交成功");
					$('.feedback_box').css({'display':'none'});
				} else{
					alert("提交失败：" + e.result)
				}
			},
			complete: function() {
				$("#submitBtn").attr("disabled", !1)
			}
		})
	});
	
	//$('.ft-link ul').append('<li><a class="a4" href="/feedback.html?url='+location.href+'">举报反馈</a></li>');
	//$('.ft-link li').css('width','25%');
	//$('.btn-dwn').attr('href',$('.btn-dwn').attr('data-href'));//下载地址
    if(location.href.indexOf('/az/')>-1 && $('.m-down-3h3').length > 0){
    $.getScript("https://api.3h3.com/vif/html_vif.php",function(){
        $('.btn-dwn,.down-wdj-wp .normal-dl-btn,.download-wp .normal-dl-btn').click(function(){
            if(isWeixinBrowser()){
                event.preventDefault();
                return false;
            } else {
            if($('.btn-dwn').attr('href') == 'javascript:;' || !$('.btn-dwn').attr('href')){
                $downurl = $('.btn-dwn').attr('data-href');
                if($downurl.indexOf('/0001/') > -1 || $downurl.indexOf('/0002/') > -1)$downurl += '/';
                //console.log($downurl.indexOf('/0001/'));
                if ($downurl.charAt($downurl.length - 1) !== '/') {
                  $downurl = $downurl.concat('/');
                }
                $downurl += getVifKey().replace('&uskey=','/');
                console.log('-'+$downurl);
                location.href = $downurl;
            }
                
            }
        });
    });
    }
    if(isMobile.Android()  && "undefined" != typeof platform && "undefined" != typeof platform.Android  && window.location.href.indexOf('az')<0){
        otherDown = true;
        //$('.main .m-intro .txt h3').html('<a href="javascript:;">'+platform.Android.ResName+'<i class="v">'+platform.Android.ResVer+'</i></a>');
        $('.main .m-intro .txt .star').next().find('em').html('<i class="c">系统：</i>'+platform.Android.ResSystem);
        $('.main .wp .btn-dwn').attr('href','/az/' + platform.Android.id + '.html');
        if($('#wdj_down_btn').length == 0){$('.btn-dwn').after('<span class="msg_text">该资源为电脑版，已为你匹配手机版资源，请点击下载</span>');$('.pan_div').remove();}
        /*if((App_categroyId>=116 && App_categroyId<=125) || App_categroyId==181 || App_categroyId==205){
            var sname = $('.cpname h1').text()+' 官方安卓版';
            $('#downAddress').after('<p class="jctip"><s></s>检测到您是安卓设备，点击下载的是：<em>' + sname + "</em></p>")
        }*/
    }else if(isMobile.Android()  && ("undefined" == typeof platform || "undefined" == typeof platform.Android)&& $('#wdj_down_btn').length == 0 && window.location.href.indexOf('az')<0){
        $('.btn-dwn').after('<span class="msg_text">该资源为电脑版资源，暂无手机版</span>');$('.pan_div').remove();
    }else if(isMobile.iOS() && location.href.indexOf('/az/')>-1) {
        var tpt = " 安卓版";
        var sname = $('.cur span').text() + tpt;
        //$('.btn-dwn').after('<p class="jctip"><s></s>没有对应的IOS版，点击下载的是：<em>' + sname + "</em></p>")
    }
    //停止运营
    if($('.btn-dwn').attr('is_stop_gm') == 1){
        $('.main .wp .btn-dwn').attr('href', 'javascript:;');
        $('.main .wp .btn-dwn').removeAttr('data-href');
        $('.main .wp .btn-dwn').text('已停止运营');
        $('.main .wp .btn-dwn').css('background','rgb(204, 204, 204)');
    }
    //预约
    if($('.btn-dwn').attr('is_subscribe') == 1){
        $('.btn-dwn').text('立即预约').attr('href','#yuyue_div').addClass('btn_yuyue');
        $.getScript("https://www.3h3.com/template/android/js/jquery.leanModal.min.js",function(){
            $(".btn_yuyue").leanModal({top: 100,closeButton: ".modal_close" });
        });
        $('body').append('<div id="yuyue_div" class="dn">');
        var yuyue_html = '<a href="javascript:void(0);" class="modal_close"></a><h3>请输入预约的手机号码</h3><div class="con"><div class="box_val"><input name="" id="yuyue_mobile" placeholder="输入手机号码" maxlength="11"/></div><div class="box_btn"><span class="btn_q">确定</span><span class="btn_c">取消</span></div>';
        $('#yuyue_div').html(yuyue_html);
        $('.box_btn .btn_q').bind('click',function(){
            var sTel = $('#yuyue_mobile').val();
            var zTel = /^1[34578]\d{9}$/.test(sTel);
            if(!zTel){
                alert('请填写正确的手机号！');
                $('#yuyue_mobile').focus();
                return false;
            }
            alert('预约成功！');
            $('#lean_overlay').click();
        });
        $('.box_btn .btn_c').bind('click',function(){
            $('#lean_overlay').click();
        });
    }
    function saveDownCount($this){
        if($this.text() != '暂无下载' && $this.text() != '请访问电脑版网页下载') {
            $.post(window.location.protocol+'//'+window.location.hostname.replace(/^m\./, 'api.')+"/index.php?m=content&c=content_ajax&a=downcount",{id:AppId},function(result){});
        }
    }
    //有下载地址的时候，点击统计下载量
    if(($('.btn-dwn').length>0 && $('.btn-dwn').attr('href')!='javascript:;') || ($('.normal-dl-btn').length>0 && $('.normal-dl-btn').attr('href')!='javascript:;')){
        $('.btn-dwn,.normal-dl-btn').click(function(){
            saveDownCount($(this));
        });
        $('#wdj_down_btn').click(function(){
            saveDownCount($(this));
            /*$downurl_360 = $(this).attr('data-href');
            if ($downurl_360.charAt($downurl_360.length - 1) !== '/') {
              $downurl_360 = $downurl_360.concat('/');
            }
            $downurl_360 += getVifKey().replace('&uskey=','/');
            location.href = $downurl_360;*/
        });
    }
    /*下载地址*/
    if ($(".down_flag").length > 0) {
        $.ajax({
            url: window.location.protocol+'//'+window.location.hostname.replace(/^m\./, 'api.')+"/index.php?m=content&c=content_ajax&a=get_down_flag",
            type: "get",
			data: "id="+AppId,
            async: true,
            dataType: "text",
            success: function (date) {
                if (date == 1) {
                    $('.main .wp .btn-dwn').css('background', 'rgb(204, 204, 204)');
                    $('.main .wp .btn-dwn').attr('href', 'javascript:;').attr('data-href', 'javascript:;');
                    $('.main .wp .btn-dwn').html('下载已关闭');
					$('.down-wdj-wp,.download-wp,#aqxzts').hide();
					$('.main .wp .btn-dwn').show();
                }
            }
        });

    }
    /*下载地址*/
    /*豌豆荚*/
    if ($("#wdj_checkBox").length > 0) {
        //$('.down-wdj-wp .normal-dl-btn').attr('href',$('.btn-dwn').attr('href'));
    }
    $("#wdj_checkBox").click(function(){
			var e = $(this);
			var n = e.parent().find(".normal-dl-btn").css("display");
			e.hasClass("active")?(e.removeClass("active"),e.parent().find(".install-btn").hide(),e.parent().find(".normal-dl-btn").css("display",n?"block":"inline-block")):(e.addClass("active"),e.parent().find(".install-btn").removeClass("hide").show(),e.parent().find(".normal-dl-btn").hide());
			//e.hasClass("active")?(e.removeClass("active"),e.parent().find(".normal-dl-btn").css("display",n?"block":"inline-block"),e.parent().find(".install-btn").hide()):(e.addClass("active"),e.parent().find(".install-btn").removeClass("hide").show(),e.parent().find(".normal-dl-btn").hide())
		});
if($('.down-wdj-wp').length > 0){
	if($('.down-wdj-wp').attr('hz') == 'wdj' || $('.down-wdj-wp').attr('hz') == '' || typeof($('.down-wdj-wp').attr('hz')) == "undefined"){
		$('#wdj_down_btn').click(function(){
			var wdj_url = $('.normal-dl-btn').attr('href');
			$.ajax({
				url:wdj_url+'&iswdj=1',
				async: false,
				dataType: 'text', 
				success: function(data) {
					 //console.log(data+'***');
					 wdj_url = data;
				}
			});
			//alert(wdj_url);
			Wdlh.downloadFast({
				channel: '18183a',
				packageName: 'com.outfit7.talkingtom2free',
				durl: wdj_url,
				bs: 1,
				debug: true
			}, function(error, ret) {
				if (!error) {
                    $.ajax({
                      type:"post",
                      url: window.location.protocol+'//'+window.location.hostname.replace(/^m\./, 'api.')+"/index.php?m=content&c=content_ajax&a=SaveDownWdjDay",
                      data:"url="+location.href,
                      async:true,
                      success:function(data){
                        console.log(data);
                      }
                    });
					console.warn('Wdlh.downloadFast ok.');
				} else {
					console.warn('Wdlh.downloadFast failed.');
					alert(ret.msg);
				}
				console.log(ret.msg);
			});
		});
	}else if($('.down-wdj-wp').attr('hz') == '360'){
		$('#wdj_down_btn').click(function(){
			$.ajax({
				type:"post",
                url: window.location.protocol+'//'+window.location.hostname.replace(/^m\./, 'api.')+"/index.php?m=content&c=content_ajax&a=SaveDownWdjDay",
				data:"url="+location.href,
				async:true,
				success:function(data){
					console.log(data);
				}
			});
		});
    }
}
		var u = navigator.userAgent, app = navigator.appVersion;
		var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
		if (isIOS) {
            $('.down-wdj-wp,.download-wp').hide();
            $('.btn-dwn').removeClass('dn');
			//$("#wdj_checkBox").click();
			
			if($down_address_a.attr('is_stop_gm')!=',1,' && $down_address_a.attr('is_subscribe')!=',1,' && location.href.indexOf('/az/') > -1){
				var tpt = " 安卓版";
				var sname = $('body > div.cur.cur2.fix > span').text();
				sname = sname + tpt;
                if($('.btn-dwn').attr('itunes')){
                    $('.btn-dwn').attr('data-href',$('.btn-dwn').attr('data-href')+'itunes/').attr('target','_blank');
                    $('.btn-dwn').attr('href',$('.btn-dwn').attr('data-href'));
                    $('.btn-dwn').text('App Store下载');
                    $('.m-intro .txt div:eq(1) em').html($('.m-intro .txt div:eq(1) em').html().replace('安卓','苹果'));
                    $('.btn-dwn').after('<p class="jctip" style="margin-top:10px;"><s></s>检测到iOS设备，点击下载的是该软件的iOS版</p>');
                }else{
                    $('.btn-dwn').after('<p class="jctip" style="margin-top:10px;"><s></s>没有对应的IOS版，点击下载的是安卓版应用！</p>');
                }
			}
		}
    /*豌豆荚*/
})(jQuery);
$(document).ready(function ($) {
    
    $menu_top_ul_html = '';
    $('.snav ul li').each(function(){
        $menu_top_ul_html += $(this).html();
    });
    $menu_top_html = '<nav class="menu_top"><div class="menu_li">'+$menu_top_ul_html+'</div></nav>';
    $('.snav').prop("outerHTML",$menu_top_html);
    if($('.nav .nav-tab li').length == 3){$('.nav .nav-tab li').css('width','33.33%');}
	/**删除视频父节点，保留自身**/
	$('.video_iframe').attr('width','100%').attr('height','200px');
    $('.video_iframe').each(function(){
        $(this).parent('p').after($(this).parent('p').html());
        $(this).parent('p').remove();
    });
    if((location.href.indexOf('az/d_55') <0 && location.href.indexOf('az/s_69')<0) && (location.href.indexOf('az/d_')>-1 || location.href.indexOf('az/s_')>-1)){//安卓软件或者游戏分类则加入cookie
        setCookie('g_catid',catid,1);
    }
    $('.main #bd .tab-ul li:eq(0)').click(function(){//导航第一个点击的时候清空分类cookie
        setCookie('g_catid',0,1);
    });
	if(location.href.indexOf('news')>-1 || location.href.indexOf('info')>-1 || location.href.indexOf('gl')>-1 || location.href.indexOf('video')>-1){//文章时
		var p = 2;
		/*$('.m-groom .wp .rel-more a span').click(function(){
			$this = $(this);
			var ind = 0;
			var cid = 0;
			$('.m-groom .wp .txt-list').each(function(index){
				if($(this).css('display')=='block'){
					ind = index;
					cid = $(this).attr('val');
				}
			});
			
			$.ajax({
				url:'/index.php?m=content&c=api&a=getJsonZxGlSp&cid='+cid+'&id='+id+'&gamename=' + EncodeUtf8(key0) + '&pagesize=8&page=' + p,
				dataType: 'json',
				success:function(data){
					var temp = "<li><a href='{url}'><span>{date}</span>{title}</a></li>";
					var html = "";

					$.each(data, function (idx, item) {
						html = temp.replace('{url}','/news/'+item.id+'.html');
						var oldTime = new Date(Date.parse((item.time).replace(/-/g, "/"))).getTime();
						var curTime = new Date(oldTime);
						html = html.replace('{date}',(curTime.getMonth()+1)+"-"+curTime.getDate());
						html = html.replace('{title}',item.title);
					});
					if(html==""){$this.text('已经全部加载完！');}
					$('.m-groom .wp .txt-list:eq('+ind+')').append(html);
					p++;
				}
			});
		});*/
		var pgLen = $('.m-artnav .bg .item .con li').length-1;
		$('.m-artnav .bg .item .con li').each(function(index){//分页
			$this = $(this);
			if($this.hasClass('on')){
				$('.m-artnav .bg .item .wp .title').text($.trim($this.text()));
				var prev_url = $this.prev().find('a').attr('href');
				var next_url = $this.next().find('a').attr('href');
				$('.m-artnav .wp .page a:eq(0)').attr('href',prev_url);
				$('.m-artnav .wp .page a:eq(1)').attr('href',next_url);
			}
		});
		//if($.trim($('.m-artnav .item .pages').html())==''){//本文导航空隐藏
		//	$('.m-artnav').hide();
		//}
		if($.trim($('.m-artnav .page').html())==''){//本文导航空隐藏
			$('.m-artnav').hide();
		}
	}
    
    if($.trim($('.m-hot .link').html())==''){//热门手游隐藏
		$('.m-hot').remove();
	}

	if(location.href.indexOf('az')>-1 || location.href.indexOf('news')>-1 || location.href.indexOf('info')>-1 || location.href.indexOf('gl')>-1 || location.href.indexOf('video')>-1){//安卓时
		$('.m-rel .m-option').each(function(){//相关游戏相关大于6个的先隐藏
			$(this).find('.m-download:gt(5)').hide();
		}); 
		$('.m-groom .wp .txt-list').each(function(){//游戏资讯攻略视频大于5个的隐藏
			$(this).find('li:gt(4)').hide();
		}); 
		$('.m-rel .rel-more').click(function(){//查看更多
			$('.m-rel .m-option .m-download:gt(4)').show();
			$(this).find('span').text('已全部加载完成');
		});
	}

	var notPg = false;
		$('.m-groom .rel-more').click(function(){//查看更多
			var notPg = false;
			$('.m-groom .txt-list li:gt(4)').show();
			$('.m-groom .txt-list').each(function(){
				if($(this).css('display')=='block'){
					$(this).find('li').each(function(){
						if($(this).css('display')=='none'){notPg = true;}
					});
				}
			});
			if(notPg==false){$(this).find('span').text('已全部加载完成');}
			
		});

	if($.trim($('.m-hot .wp .link').html())==''){//隐藏热门游戏
		$('.m-hot .wp .link').prev().hide();
	}


	// 手机导航
	$('.menuBtn').append('<b></b><b></b><b></b>');
	$('.menuBtn').click(function(event) {
		$(this).toggleClass('open');
		var _winw = $(window).width();
		var _winh = $(window).height();
		if( $(this).hasClass('open') ){
			$('body').addClass('open');
			if( _winw<=767 ){
                $('#nav').stop().slideDown();
			}
		}else{
			$('body').removeClass('open');
			if( _winw<=767 ){
                $('#nav').stop().slideUp();
			}
		};
	});

	// 导航
	function myNav(){
		var _winw = $(window).width();
		if( _winw>767 ){
			$('#nav').show();
			$('body,.menuBtn').removeClass('open');
		}else{
			$('#nav').hide();
		}
	}
	myNav();
	$(window).resize(function(event) {
		myNav();
	});
    //取消相关游戏的日期飘红
    $('#m-rel .wp .m-download .txt em font').attr('color','');


    // 返回顶部
    $('.toTop').click(function(){
        $('body,html').animate({
            'scrollTop':0
        }, 500);
    });
    $(window).scroll(function(){
        var _top = $(window).scrollTop();
        if( _top<100 ){
            $('.toTop').stop().fadeOut(500);
        }else{
            $('.toTop').stop().fadeIn(500);
        }
    });


    // 选项卡点击
    $(".TAB_CLICK li").click(function () {
        var tab = $(this).parent(".TAB_CLICK");
        var con = tab.attr("id");
        var on = tab.find("li").index(this);
        $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
        $(con).eq(on).show().siblings(con).hide();
    });

    // 导航栏
    $('.menuBtn').click(function(){
        $(this).toggleClass('open');
        $('.nav').slideToggle(300);
        $('body > .body-mask').toggleClass('open');
    })

    // 加载游戏分类
    $('.btn-select').click(function(){
        $(this).toggleClass('open').siblings('.cur-select').slideToggle(300);
    })
	

	//$('.bg .item .title').text($('.bg .item .con li:eq(0)').text().replace(/&nbsp;/ig, ""));

    var down_content_max_height = 500;
	//if(location.href.indexOf('az')>-1){//如果是下载页面，默认内容200高度
    if($('.header').hasClass('danji')==false || $('.btn-dwn').length>0){
        if($('.con,.az_content').height()>down_content_max_height){
            $('.con,.az_content').css('height',down_content_max_height+'px');
            $('.con,.az_content').addClass('snbg');
        }else{
            $('.m-show').hide();
        }
    }
	$('.m-show').click(function() {
		var s=$(this).hasClass('show');
		if(s){
			$('.con,.az_content').css('height','auto');
            $('.con,.az_content').removeClass('snbg');
		}else{
			$('.con,.az_content').css('height',down_content_max_height+'px');
            $('.con,.az_content').addClass('snbg');
		}
		return false;
    });
	$('.m-tag span').each(function(i){
		$(this).addClass('s'+(i+1));
	});
    $('.m-tag span').click(function(){
		tzxh($(this).index());
	});
	$('.tag span').each(function(i){
	    $(this).click(function(){
			var x = i;
			var ss = $('.app_guess').offset().top-0;
			$('html,body').animate({scrollTop:ss},600);
             $('.app_guess .hd_tabs2 span').eq(x).click();
			//$('.m-like .tab-1 li').eq(x).addClass('on').siblings('li').removeClass('on');
			//$('.m-like .tab-txt').eq(x).show().siblings('.m-like .tab-txt').hide();
		});
	});
	if($.trim($('.item').html())==""){$('.item').parent().remove();}//如果分页空，则删除分页节点
	$('.txt-list').each(function(i){
		if(i>0){$(this).hide();}
	});
	$('.m-games ul li').each(function(i){
		$(this).addClass('c'+(i+1));
	});
	$('.m-like .wp .tab-1 li:eq(0)').click();


	var xg_gm_bb_null = true;
	$('.m-rel .wp .m-option,.app_soft_bd li').each(function(index){//如果相关游戏/其他版本为空
		if($.trim($(this).html())==''){
			$('.m-rel .wp ul li:eq('+index+')').hide();
		}else{xg_gm_bb_null = false;}
	});
	if(xg_gm_bb_null==true){$('.m-rel').hide();$('.m-anchor li:eq(1)').hide();setTimeout("$('.m-anchor li').css('width','33.3%');",500);}
    setTimeout(function(){if($.trim($('.m-rel .wp .m-option:eq(0)').html())=='')$('.m-rel .wp ul li:eq(1)').click();},100);
	
	var m_groom_null = true;
	$('.m-groom .wp .txt-list').each(function(index){//如果游戏攻略、资讯、视频为空
		if($.trim($(this).html())==''){
			$('.m-groom .wp .tab-1 li:eq('+index+')').hide();
		}else{m_groom_null = false;}
	});
	if(m_groom_null==true){$('.m-groom').hide();}
	$('.m-groom .wp .txt-list').each(function(index){//在循环一次，把某个不隐藏的给点击显示
		if($.trim($(this).html())!=''){
			$('.m-groom .wp .tab-1:eq(0) li:eq('+index+')').click();
		}
	});

	//猜你喜欢隐藏
	var isNull = true;
    var cnxh_has_val = $('.app_guess .guess_main_ul .guessCont').length;
    var cnxh_index = 0;
    var cnxh_null_index = 0;
    if($.trim($('.app_guess .guess_main_ul').html()) == '')$('.m-tag').remove();
    $('.app_guess .guess_main_ul .guessCont').each(function(ind){
        if($.trim($(this).html()) == ''){
            var index = cnxh_index-cnxh_null_index;
            $(this).remove();
            $('.app_guess nav span:eq('+index+')').remove();
            $('.m-tag span:eq('+index+')').remove();
            setTimeout(function(){
                //$('.app_guess .pagenum span:eq('+index+')').remove();
            },500);
            cnxh_has_val--;
            cnxh_null_index++;
        }else{
			isNull = false;
		}
        cnxh_index++;
    });
    if(cnxh_has_val == 1) {$('.app_guess .hd_tabs2').css('width','50%');}
    $('.m-anchor li').css('width','25%');//默认设置宽度
    if($(window).width()==412){$('.m-anchor li:eq(0)').css('width','25.01%');}
	if(isNull==true){
        $('.app_guess').remove();//删除猜你喜欢
        $('.m-like').hide();$('.m-anchor li:eq(2)').hide();
        $('.m-anchor li').css('width','33.33%');
        if($(window).width()>400){$('.m-anchor li:eq(0)').css('width','33.341%');}//防止切换的最后有一个像素差
    }
	if(isNull==true&&xg_gm_bb_null==true){//猜你喜欢空和相关版本游戏空
        $('.m-like').hide();
        $('.m-anchor li:eq(1)').hide();
        $('.m-anchor li:eq(2)').hide();
        $('.m-anchor li').css('width','50%');
	}
	if((isNull==true&&xg_gm_bb_null==false) || (isNull==false&&xg_gm_bb_null==true)){
		//$('.m-anchor li').css('width','25%');
        //$('.m-anchor li:eq(0)').css('width','25.01%');
	}
    setTimeout(function(){//判断是否还有猜你喜欢
        if($('.app_guess').length==0 && xg_gm_bb_null==true){
            $('.m-anchor li:eq(2)').hide();
            $('.m-anchor li').css('width','50%');
        }
    },570);

	//首页
	$('.recom_rank_tab a').click(function(){
		$(this).parent().parent().find('.pro-ul:eq('+$(this).index()+')').show();
	});
	/**预览图横向拖动**/
	if($('div').hasClass('m-slide1')){
	if($('.m-slide1 ul li:eq(0) img').height()<$('.m-slide1 ul li:eq(0) img').width()){$('.m-slide1').addClass("banner_pics");}
	setInter = window.setInterval(function(){
		var heightImg = $(".m-slide1 ul li img").height();
		$(".m-slide1,.m-slide1 ul").height(heightImg);
		if(heightImg>0){
			clearInterval(setInter);
		}
	},100);

	var snap = false;
	var scrollObj = new IScroll(".m-slide1",{
				snap: snap,
				momentum: !snap,
				resize: true,
				disableMouse: true,
				disablePointer: true,
				eventPassthrough: true,
				scrollX: true,
				scrollY: false,
				preventDefault: false
	});
	}
	/**预览图横向拖动**/
    if (typeof (is_content_hide) != 'undefined' && is_content_hide == '1') { setTimeout("$('.m-show .show').click();", 100); }//内容不隐藏的时候
    $score_val = $('#scoreValue').attr('val');
    if ($score_val != '') {//几颗星
        $('#scoreValue li').each(function (index) {
            if (index < $score_val) {
                $(this).addClass('ok');
            }
        });
        $('#scoreValue').parent().find('i').html(($score_val)+"分");
    }
	if (typeof (no_legal_gm) != 'undefined' && no_legal_gm == '1') { setTimeout("$('.main .wp .btn-dwn').css('background','rgb(204, 204, 204)');$('.main .wp .btn-dwn').attr('href','javascript:;').attr('data-href','javascript:;');$('.main .wp .btn-dwn').html('资源已下架');", 200); }//非法游戏处理


    
    if ($('.main .wp .btn-dwn').length > 0 && $('.down_flag').length <= 0 && !otherDown && $('.btn-dwn').attr('is_stop_gm') != 1 && $('.btn-dwn').attr('is_subscribe') != 1) {//如果是下载页面,是否存在下载地址 （排除停运）
        if($('.main .wp .btn-dwn').attr("data-href")){
            $down_id = $('.main .wp .btn-dwn').attr("data-href").replace("/down.asp?id=","").replace("/down/","").replace("/","");
        }else{
            $down_id = 0;
        }
        if(AppcategroyId<=54 || AppcategroyId>82){
            $('.main .wp .btn-dwn').attr('href', 'javascript:;');
            $('.main .wp .btn-dwn').removeAttr('data-href');
            //$('.main .wp .btn-dwn').css('background','#CCC');
            $('.main .wp .btn-dwn').text('请访问电脑版网页下载');
            $('.main .wp .btn-dwn').css('background','rgb(204, 204, 204)');
        }else if($('.btn-dwn').attr('nodownload') == '1'){
            $('.main .wp .btn-dwn').attr('href', 'javascript:;');
            $('.main .wp .btn-dwn').removeAttr('data-href');
            $('.main .wp .btn-dwn').text("暂无下载");
        }
        $down_siteids = $('.btn-dwn').attr('siteids');
        if($down_siteids!=undefined){
            console.log($down_siteids);
            if($down_siteids.indexOf(',25,')>-1){//判断是否H5
                $('head').append('<style type="text/css">.btn-dwn{background: url(../../images/android/bg-mh5.png) repeat-x center;}.btn-dwn:before{    background: url(../../images/android/ico-mh5.png) no-repeat center;}</style>');
                $('.btn-dwn').text('立即开始游戏');
            }
        }
    }
    //isWeixinBrowser();//判断是否微信浏览器
    $('.mask').on('click',function(){
    	hideMask();
    });
    //搜索按钮
    $("#search-btn").click(function () {
        if ($("#keyword").val() == "") {
            alert("搜索关键词不能为空哦！"); return false;
            //$("#keyword").val("请输入关键字");
        }
        var catt = "";
        if (typeof (cat) != "undefined") {
            catt = cat;
        } else {
            catt = "0";
        }
        $search_val = $("#keyword").val().replace(' ','|');
        console.log(1);
        //window.location = "/search_" + catt + "_" + $search_val + ".html";
        $key_val = $("#keyword").val();
        window.location = "/search.php?m=wap&c=index&a=search&ptype="+catt+"&k="+$key_val;
    });
	$('.search-hd form .text').keydown(function(event){ 
		if(event.which==13){
			window.location = "/search.php?m=wap&c=index&a=search&ptype=0&k="+$(this).val();
			return false;
		}
	});
    //搜索框
    $('.search-btn').click(function () {
        $('.menu-box').removeClass('ok');
        $('.search-box').toggleClass('ok');
    });
    //单机文章放大字体
    $('.bigger-btn').click(function () {
            var _this = $(this);
            if (_this.hasClass('smaller')) {
                $('.chapter-cont').css({
                    'font-size': 14
                });
                _this.find('em').text('+');
            } else {
                $('.chapter-cont').css({
                    'font-size': 15
                });
                _this.find('em').text('-');
            };
            _this.toggleClass('smaller');
    });
    //文章点击量
    if($('.m-article').length > 0){
		$mdid = 1;
        $.ajax({url:"/api.php?op=count&id="+id+"&modelid="+$mdid, async:true, success:function(data){}});
    }
    setPageStyle();
});
//设置页面的样式，需要隐藏等判断
function setPageStyle(){
    
    if($.trim($('.m-rel .m-option:eq(0)').html()) == '' && $.trim($('.m-rel .m-option:eq(1)').html()) != ''){
        $('.m-rel .tab-1 li:eq(1)').click();
    }
    if($.trim($('.app_news .txt-list1').html()) == ''){
        $('.app_news').remove();
    }
    setTimeout(function(){
        if($.trim($('.app_article #xg_main .xg_main_ul').html()) == ''){
            $('.app_article').remove();
        }
        $pic_img = $('.danji .m-intro .pic img');
        if($pic_img.height()<100 && location.href.indexOf('/soft/')<=-1){//说明是小图,并且不是pc软件
            //$pic_img.attr('style','padding-top: 50%;margin: 0 auto;display: block;');
        }
    },200);
}
//点击隐藏关联
function m_down_click($this){
    $('.m-anchor li').removeClass('on');
    $this.parent().addClass('on');
}
$('.m-contents').click(function(){
    m_down_click($(this));
    $('.app_intro').show();
    $('.a_3_div').show();
    $('.app_soft,.app_soft1').show();
    $('.app_article').show();
    $('.app_news').show();
    $('.app_guess').show();
    $('.Qtag').show();
    $('.app_appmore').show();
    $('.div_a_3').show();
    $('.div_a_4').show();
    $('.div_a_5').show();
    $('.div_a_6').show();
    $('.swiper-slide').show();
});
$('.m-rels').click(function(){
    m_down_click($(this));
    $('.app_intro').hide();
    $('.a_3_div').hide();
    $('.app_soft,.app_soft1').show();
    $('.app_article').show();
    $('.app_news').show();
    $('.app_guess').show();
    $('.Qtag').show();
    $('.app_appmore').show();
    $('.div_a_3').hide();
    $('.div_a_4').hide();
    $('.div_a_5').hide();
    $('.div_a_6').show();
    $('.swiper-slide').hide();
});
$('.m-likes').click(function(){
    m_down_click($(this));
    $('.app_intro').hide();
    $('.a_3_div').hide();
    $('.app_soft,.app_soft1').hide();
    $('.app_article').hide();
    $('.app_news').hide();
    $('.app_guess').show();
    $('.Qtag').show();
    $('.app_appmore').show();
    $('.div_a_3').hide();
    $('.div_a_4').hide();
    $('.div_a_5').hide();
    $('.div_a_6').hide();
    $('.swiper-slide').hide();
});
$('.m-comments').click(function(){
    m_down_click($(this));
    $('.app_intro').hide();
    $('.a_3_div').hide();
    $('.app_soft,.app_soft1').hide();
    $('.app_article').hide();
    $('.app_news').hide();
    $('.app_guess').hide();
    $('.Qtag').hide();
    $('.app_appmore').show();
    $('.div_a_3').hide();
    $('.div_a_4').hide();
    $('.div_a_5').hide();
    $('.div_a_6').hide();
    $('.swiper-slide').hide();
});
	function isWeixinBrowser(){
		var isweixin = false;
		var ua = window.navigator.userAgent.toLowerCase(); 
		if(ua.match(/MicroMessenger/i) == 'micromessenger' || ua.indexOf('aweme')>-1){
			isweixin = true; 
            var img_dy_str = '';
            if(ua.indexOf('aweme')>-1)img_dy_str = '-dy';
			$('body').append('<style type="text/css">.wx-tip-cnt{ padding-right:2%; position:relative;}.wx-tip {position: fixed;z-index: 9999999;width: 100%;top: 0;left: 0;}.wx-tip-txt {float: right;}.mask{position: fixed;top: 0;left: 0;bottom: 0;right: 0;width: 100%;height: 100%;background: rgba(0,0,0,.5);z-index: 9999998;}</style> <div id="mask" class="mask" style="display:none;"></div><div class="wx-tip" style="display:none;">		<div class="wx-tip-cnt">			<div class="wx-tip-txt">			<img src="/images/wx-tctx'+img_dy_str+'.jpg">			</div></div>	</div>');
			//$('.main .wp .btn-dwn').attr('href','javascript:;').attr('onclick','showWxBrowser()');
            showWxBrowser();
            $('.mask,.wx-tip').click(function () {
                $('.mask,.wx-tip').remove();
            });
		}else{
			isweixin = false;
		}
        return isweixin;
	}
	//显示微信里用浏览器打开页面
	function showWxBrowser(){
		$("#mask").css("height",$(document).height());     
        $("#mask").css("width",$(document).width());     
        $("#mask").show();
        $(".wx-tip").show();
	}
	//隐藏遮罩层  
    function hideMask(){
        $("#mask").hide();
        $(".wx-tip").hide();
    }  

    function tzxh(x){
        var ss = $('#app_guess').offset().top-0;
        $('html,body').animate({scrollTop:ss},600);
        $('.app_guess .hd_tabs2 span').eq(x).click();
        //$('.app_guess .hd_tabs2 span').eq(x).addClass('cur').siblings('span').removeClass('cur');
        //$('.app_guess .guessCont').eq(x).show().siblings('.app_guess .guessCont').hide();
    }




function EncodeUtf8(s1)
{
      var s = escape(s1);
      var sa = s.split("%");
      var retV ="";
      if(sa[0] != "")
      {
         retV = sa[0];
      }
      for(var i = 1; i < sa.length; i ++)
      {
           if(sa[i].substring(0,1) == "u")
           {
               retV += Hex2Utf8(Str2Hex(sa[i].substring(1,5)));
              
           }
           else retV += "%" + sa[i];
      }
     
      return retV;
}
function Str2Hex(s)
{
      var c = "";
      var n;
      var ss = "0123456789ABCDEF";
      var digS = "";
      for(var i = 0; i < s.length; i ++)
      {
         c = s.charAt(i);
         n = ss.indexOf(c);
         digS += Dec2Dig(eval(n));
          
      }
      //return value;
      return digS;
}
function Dec2Dig(n1)
{
      var s = "";
      var n2 = 0;
      for(var i = 0; i < 4; i++)
      {
         n2 = Math.pow(2,3 - i);
         if(n1 >= n2)
         {
            s += '1';
            n1 = n1 - n2;
          }
         else
          s += '0';
         
      }
      return s;
     
}
function Dig2Dec(s)
{
      var retV = 0;
      if(s.length == 4)
      {
          for(var i = 0; i < 4; i ++)
          {
              retV += eval(s.charAt(i)) * Math.pow(2, 3 - i);
          }
          return retV;
      }
      return -1;
}
function Hex2Utf8(s)
{
     var retS = "";
     var tempS = "";
     var ss = "";
     if(s.length == 16)
     {
         tempS = "1110" + s.substring(0, 4);
         tempS += "10" + s.substring(4, 10);
         tempS += "10" + s.substring(10,16);
         var sss = "0123456789ABCDEF";
         for(var i = 0; i < 3; i ++)
         {
            retS += "%";
            ss = tempS.substring(i * 8, (eval(i)+1)*8);
           
           
           
            retS += sss.charAt(Dig2Dec(ss.substring(0,4)));
            retS += sss.charAt(Dig2Dec(ss.substring(4,8)));
         }
         return retS;
     }
     return "";
} 
document.write(unescape("%3Cscript src='/js/video.js' type='text/javascript'%3E%3C/script%3E"));