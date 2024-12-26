/*
var timers=null;$(function(){$(".common_tab a").tap(function(){$(this).addClass("common_tab_active").siblings().removeClass("common_tab_active");$(".detail_container").eq($(this).index()).addClass("detail_container_show").siblings().removeClass("detail_container_show")});$(".toTop").tap(function(){$("html, body").scrollTop(0)});var isScroll=true;function scrollShow(){$(".toTop").hide();isScroll=true}$(window).on("scroll",function(){$(".toTop").show();if(isScroll){setTimeout(scrollShow,2500);isScroll=false}if($(window).scrollTop()<=100){$(".toTop").hide()}});commonFunc();$(".btn_close").click(function(){console.log(1);$(".share").remove();$(".wrap").css("padding-bottom",0)});$(".tab a").tap(function(){$(this).addClass("tab_active").siblings().removeClass("tab_active")});$(".time_opt").each(function(){var w=$(this).width();$(this).css({"margin-left":-w/2+"px"})});$(".sort_label_item").tap(function(){$(this).addClass("sort_label_item_active").siblings().removeClass("sort_label_item_active")});$(".jp_name_content").each(function(){if($(this).text().length>4&&!$(this).hasClass("jp_name_animate")){$(this).addClass("jp_name_animate");var step=$(this).width()-$(this).parent().width();var index=0;var _t=$(this);setInterval(function(){index++;if(index>=step+10){index=0}else{_t.css("left","-"+index+"px")}},150)}});$(".item_prograss_bar").each(function(){var prograss=$(this).attr("data-prograss");$(this).css("width",prograss)});$(".common_load_btn, .btn_comment").tap(function(){createLoadModal()});$(".sort_label_item").tap(function(){if($(this).attr("data-name")){var target=$(this).attr("data-name");var top=Math.ceil($("#"+target).offset().top)-Math.ceil($(".sort_label").height())-Math.ceil($(".sec_head").height());$("html, body").scrollTop(top-3)}});$(".ccLoad").on("click",function(){if(isWeiXin()){window.location="http://a.app.qq.com/o/simple.jsp?pkgname=com.lion.market"}else{AndroidConnect.launch("ccplay://ccplay",function(){document.location.href=downloadUrl})}});$(".ccLoad-spec").on("click",function(){if(isWeiXin()){window.location="http://a.app.qq.com/o/simple.jsp?pkgname=com.lion.market"}else{var type=$(this).attr("data-type");var id=$(this).attr("data-id");var urls;if(type==="goods"){urls="ccplay://ccplay/goodsDetail?id="+id}else{if(type==="game"){urls="ccplay://ccplay/gameDetail?id="+id}}AndroidConnect.launch(urls,function(){document.location.href=downloadUrl})}});document.addEventListener("webkitvisibilitychange",function(){clearTimeout(timers)});$(".btn_load").on("click",function(){var u=navigator.userAgent;var isIos=!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);if($(this).hasClass("btn_load_appoint")){return}if(isIos){iosDialog()}else{if(!$(this).hasClass("btn-newload")){if(isWeiXin()&&!$(this).hasClass("btn_gift_online")){$(".mask").show()}}else{$(".new-download").show();var gs=$(this).attr("data-gs");var pt=$(this).attr("data-pt");pt=pt.replace(/http:\/\/android-(.+?)\.ccplay\.cn/g,"https://android-$1.ccplay.cn");$(".new-download .gs-load").attr("data-url",gs);$(".new-download .pt-load").attr("data-url",pt);var id=gs.split("super-")[1].split(".htm")[0];$(".new-download .gs-load").attr("data-id",id)}}});$(document).on("click",".btn-direct-close",function(){$(this).parents(".direct-modal").remove()});$(document).on("click",".btn-dialog-close",function(){$(this).parents(".direct-modal").remove()});$(".n-mask").on("click",function(){$(this).parent().hide()});$(".btn_load_large").on("click",function(){if(isWeiXin()){$(".mask").show()}else{window.location=$(this).attr("data-url")}});$(".pt-load").on("click",function(){var u=navigator.userAgent;var isIos=!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);if(isIos){iosDialog()}else{if(isWeiXin()){$(".mask").show()}else{var downloadLink=$(this).attr("data-url").replace(/http:\/\/android-(.+?)\.ccplay\.cn/g,"https://android-$1.ccplay.cn");window.location=downloadLink}}});$(".gs-load").on("click",function(){var u=navigator.userAgent;var isIos=!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);if(isIos){iosDialog()}else{if(isWeiXin()){$(".mask").show()}else{var gsDownloadUrl=$(this).attr("data-url");var id=$(this).attr("data-id");var urls="ccplay://ccplay/gameDetail?id="+id;AndroidConnect.launch(urls,function(){document.location.href="https:"+gsDownloadUrl})}}});$(".mask").on("click",function(){$(this).hide()});$(".star_score_active").each(function(){var score=$(this).attr("data-score")*10/50*100;$(this).css("width",score+"%")})});function downloadGame(){$(".btn_load").on("click",function(){var u=navigator.userAgent;var isIos=!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);if(isIos){iosDialog()}else{if(!$(this).hasClass("btn-newload")){if(isWeiXin()&&!$(this).hasClass("btn_gift_online")){$(".mask").show()}}else{$(".new-download").show();var gs=$(this).attr("data-gs");var pt=$(this).attr("data-pt");console.log(gs);pt=pt.replace(/http:\/\/android-(.+?)\.ccplay\.cn/g,"https://android-$1.ccplay.cn");$(".new-download .gs-load").attr("data-url",gs);$(".new-download .pt-load").attr("data-url",pt);var id=gs.split("super-")[1].split(".htm")[0];
$(".new-download .gs-load").attr("data-id",id)}}})}function commonFunc(){$(".jp_name_content").each(function(){if($(this).text().length>4&&!$(this).hasClass("jp_name_animate")){$(this).addClass("jp_name_animate");var step=$(this).width()-$(this).parent().width();var index=0;var _t=$(this);setInterval(function(){index++;if(index>=step+10){index=0}else{_t.css("left","-"+index+"px")}},150)}});$(".comment_tab_item").tap(function(){$(this).addClass("comment_tab_item_select").siblings().removeClass("comment_tab_item_select")});$(".keyword_box a").tap(function(){$(this).addClass("keyword_active").siblings().removeClass("keyword_active")});$(".start_line_focus").each(function(){var score=$(this).attr("data-score")*10/50*100;console.log(score);$(this).css("width",score+"%")});$(".star_box").each(function(){starTemp($(this))});tabWidth();$(".create_time_comment").each(function(){if(!$(this).hasClass("time_init")){var times=parseInt($(this).text());var test=getDateDiff(times);$(this).text(test).addClass("time_init")}});$(".prograss").each(function(){var num=parseInt($(this).find(".prograss_num").text());$(this).find(".prograss_bar").css({"width":num+"%"})});if($("#keyword").val()!=""){$(".icon_clear").show()}else{$(".icon_clear").hide()}$("#keyword").on("change, blur",function(){if($(this).val()!=""){$(".icon_clear").show()}else{$(".icon_clear").hide()}});$("#keyword").on("input propertychange",function(){var keyword=$.trim($(this).val());if(keyword){$(".icon_clear").show()}else{$(".icon_clear").hide()}});$("span.icon_clear").click(function(){$("#keyword").val("")});$(".open_txt").click(function(){if(!$(this).hasClass("open")){$(this).addClass("open");$(this).find(".icon_txt_open").addClass("icon_txt_close");$(this).parent().siblings(".recommond_txt").addClass("recommond_txt_show")}else{$(this).removeClass("open");$(this).find(".icon_txt_open").removeClass("icon_txt_close");$(this).parent().siblings(".recommond_txt").removeClass("recommond_txt_show")}})}function createLoadModal(){if($(".dialog").length){$(".modalMask").show();return}else{var htmls='<div class="modalMask">'+'<div class="dialog">'+'<div class="dialog_bg"></div>'+'<a href="javascript:void(0)" class="dialog_close"></a>'+'<div class="dialog_content">'+'<p class="d_tit">下载虫虫助手，享受充值折扣各种福利~</p>'+'<a href="javascript:void(0)" class="btn btn_download">立即下载</a>    '+"</div>"+"</div>"+"</div>";$("body").append(htmls);$(".btn_download").on("click",function(){if(isWeiXin()){window.location="http://a.app.qq.com/o/simple.jsp?pkgname=com.lion.market"}else{window.location=downloadUrl}})}$(".dialog_close").click(function(){$(this).parents(".modalMask").hide()})}function isWeiXin(){var ua=window.navigator.userAgent.toLowerCase();if(ua.match(/MicroMessenger/i)=="micromessenger"){return true}else{return false}}function readyFunc(ele){var len=0;$(ele+" .wrapper li").each(function(){len+=$(this).width()});$(ele+" .wrapper ul").width(len+$(ele+" .wrapper li").length)}function loaded(){if($("#wrapper").length){new iScroll("wrapper",{hScroll:true,momentum:true,checkDOMChanges:true,onRefresh:function(){readyFunc("nav")},onBeforeScrollStart:function(e){if(this.absDistX>(this.absDistY+5)){e.preventDefault()}},onTouchEnd:function(){var self=this;if(self.touchEndTimeId){clearTimeout(self.touchEndTimeId)}self.touchEndTimeId=setTimeout(function(){self.absDistX=0;self.absDistX=0},600)}})}if($("#collecWrapper").length){new iScroll("collecWrapper",{hScroll:true,momentum:true,checkDOMChanges:true,onRefresh:function(){readyFunc(".collect_scroll")},onBeforeScrollStart:function(e){if(this.absDistX>(this.absDistY+5)){e.preventDefault()}},onTouchEnd:function(){var self=this;if(self.touchEndTimeId){clearTimeout(self.touchEndTimeId)}self.touchEndTimeId=setTimeout(function(){self.absDistX=0;self.absDistX=0},600)}})}if($("#giftWrapper").length){new iScroll("giftWrapper",{hScroll:true,momentum:true,checkDOMChanges:true,onRefresh:function(){readyFunc(".gift_scroll")},onBeforeScrollStart:function(e){if(this.absDistX>(this.absDistY+5)){e.preventDefault()}},onTouchEnd:function(){var self=this;if(self.touchEndTimeId){clearTimeout(self.touchEndTimeId)}self.touchEndTimeId=setTimeout(function(){self.absDistX=0;self.absDistX=0},600)}})}if($("#quanWrapper").length){new iScroll("quanWrapper",{hScroll:true,momentum:true,checkDOMChanges:true,onRefresh:function(){readyFunc(".quan_scroll")},onBeforeScrollStart:function(e){if(this.absDistX>(this.absDistY+5)){e.preventDefault()}},onTouchEnd:function(){var self=this;if(self.touchEndTimeId){clearTimeout(self.touchEndTimeId)}self.touchEndTimeId=setTimeout(function(){self.absDistX=0;self.absDistX=0},600)}})}}function starTemp(t){var star=parseInt(t.attr("data-star"));if(!star){}else{for(var i=0;i<star;i++){t.find(".star").eq(i).addClass("star_active")}}}function tabWidth(){var tabLen=$(".classify_tab").find("a").length;$(".classify_tab>a").addClass("col-md-"+tabLen)}function getDateDiff(dateTimeStamp){var minute=1000*60;var hour=minute*60;var day=hour*24;var halfamonth=day*15;
var month=day*30;var now=new Date().getTime();var diffValue=now-dateTimeStamp;if(diffValue<0){return}var monthC=diffValue/month;var weekC=diffValue/(7*day);var dayC=diffValue/day;var hourC=diffValue/hour;var minC=diffValue/minute;if(dayC>=1){result=getDate(dateTimeStamp)}else{if(hourC>=1){result=""+parseInt(hourC)+"小时前"}else{if(minC>=1){result=""+parseInt(minC)+"分钟前"}else{result="刚刚"}}}return result}function getDate(timeStamp){var date=new Date(timeStamp);var years=date.getFullYear();var month=date.getMonth()+1;var day=date.getDate();if(month<10){month="0"+month}if(day<10){day="0"+day}return years+"-"+month+"-"+day}function iosDialog(){var htmls="";var qrcodeUrl=resourceHost+"/images/qrcode-wechat.png";var iosTitleUrl=resourceHost+"/images/ios-dialog-title.png";var htmls='<div class="direct-modal">'+'<div class="direct-modal-mask"></div>'+'<div class="direct-modal-content">'+'<div class="direct-dialog ios-dialog">'+'<a href="javascript:void(0)" class="btn-dialog-close"></a>'+'<img src="'+iosTitleUrl+'" alt="" class="ios-dialog-title">'+"<h2>关注微信公众号，预约虫虫助手APP</h2>"+'<img class="wechat-qrcode" src="'+qrcodeUrl+'">'+'<div class="ios-dialog-txt">'+'<p class="bold">关注方式：</p>'+"<p>1.使用微信扫描上方二维码关注（若在微信中，可直接长按快速进入）</p>"+"<p>2.点击下方按钮复制公众号名称→在微信中粘贴搜索→关注公众号。</p>"+"</div>"+'<a href="javascript:void(0)" class="wechat-copy" data-clipboard-text="虫虫助手App"></a>'+'<div class="ios-dialog-tip">'+"<p>关注公众号即成功预约虫虫助手APP，还可以掌握每月虫虫分享的好游动态，以及新闻资讯。</p>"+"</div>"+"</div>"+"</div>"+"</div>";$("body").append(htmls);var clipboard=new Clipboard($(".wechat-copy")[0]);clipboard.on("success",function(e){ccToast("复制成功")});clipboard.on("error",function(e){})}var AndroidConnect={initLaunch:function(){var _this=this;if(!this.frame){this.frame=document.createElement("iframe");this.frame.height="0";this.frame.width="0";this.frame.frameBorder=0;document.body.appendChild(this.frame);this.timeout=2500;window.onblur=function(){clearTimeout(_this.timer);_this.timer=null};document.addEventListener("webkitvisibilitychange",function(){clearTimeout(_this.timer)});this.frame.onload=function(){console.log("404 onload");if(_this.timer==null){return}clearTimeout(_this.timer);_this.timer=null;_this.launchFallback(new Date()-0)};this.frame.onerror=function(){console.log("onerror");if(_this.timer==null){return}clearTimeout(_this.timer);_this.timer=null;_this.launchFallback(new Date()-0)}}},launchFallback:function(start_time){var now_time=Date.now();if(!start_time||now_time-start_time<this.timeout+200){this.fallback()}},launch:function(launch_url,fallback){var _this=this,start_time=Date.now();this.launch_url=launch_url||"ccplay://ccplay";this.fallback=typeof fallback==="function"?fallback:function(){};this.initLaunch();if(this.fallback){this.timer=setTimeout(function(){console.log("timeout");_this.launchFallback(start_time)},_this.timeout)}this.redirect()},redirect:function(){this.frame.setAttribute("src",this.launch_url)}};var toastTimer=null;function ccToast(txt){if($(".cc-toast").length){return}var htmls='<div class="cc-toast">'+"<span>"+txt+"</span>"+"</div>";$("body").append(htmls);clearTimeout(toastTimer);toastTimer=setTimeout(function(){$(".cc-toast").remove()},1500)};*/

var timers = null;

//剪切板
function copyToClipboard(s){
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('readonly', 'readonly');//控制移动端闪屏
    input.setAttribute('value', s);//复制内容
    input.setSelectionRange(0, 9999);//控制复制内容多少
    input.select();
    if (document.execCommand('copy')) {
        document.execCommand('copy');
        console.log('copyToClipboard',s)
        console.log('复制成功');
    }else{
        console.log('该浏览器不支持此功能');

    }
    document.body.removeChild(input);
    // if(window.clipboardData){
    //     window.clipboardData.setData('text',s);
    // }else{
    //     (function(s){
    //         document.oncopy=function(e){
    //             e.clipboardData.setData('text',s);
    //             e.preventDefault();
    //             document.oncopy=null;
    //         }
    //     })(s);
    //     document.execCommand('Copy');
    // }
}
$(function() {
    // 写入要复制的内容
    $('.copy-download').attr('data-clipboard-text','CC'+$('.copy-download').attr('data-id')+'CC')
    // dom元素复制
    // new Clipboard('.copydownload');

    $(".common_tab a").tap(function() {
        $(this).addClass("common_tab_active").siblings().removeClass("common_tab_active");
        $(".detail_container").eq($(this).index()).addClass("detail_container_show").siblings()
            .removeClass("detail_container_show")
    });
    $(".toTop").tap(function() {
        $("html, body").scrollTop(0)
    });
    var isScroll = true;

    function scrollShow() {
        $(".toTop").hide();
        isScroll = true
    }
    $(window).on("scroll", function() {
        $(".toTop").show();
        if (isScroll) {
            setTimeout(scrollShow, 2500);
            isScroll = false
        }
        if ($(window).scrollTop() <= 100) {
            $(".toTop").hide()
        }
    });
    commonFunc();
    $(".btn_close").click(function() {
        console.log(1);
        $(".share").remove();
        $(".wrap").css("padding-bottom", 0)
    });
    $(".tab a").tap(function() {
        $(this).addClass("tab_active").siblings().removeClass("tab_active")
    });
    $(".time_opt").each(function() {
        var w = $(this).width();
        $(this).css({
            "margin-left": -w / 2 + "px"
        })
    });
    $(".sort_label_item").tap(function() {
        $(this).addClass("sort_label_item_active").siblings().removeClass("sort_label_item_active")
    });
    $(".jp_name_content").each(function() {
        if ($(this).text().length > 4 && !$(this).hasClass("jp_name_animate")) {
            $(this).addClass("jp_name_animate");
            var step = $(this).width() - $(this).parent().width();
            var index = 0;
            var _t = $(this);
            setInterval(function() {
                index++;
                if (index >= step + 10) {
                    index = 0
                } else {
                    _t.css("left", "-" + index + "px")
                }
            }, 150)
        }
    });
    $(".item_prograss_bar").each(function() {
        var prograss = $(this).attr("data-prograss");
        $(this).css("width", prograss)
    });
    $(".common_load_btn, .btn_comment").tap(function() {
        createLoadModal()
    });
    $(".sort_label_item").tap(function() {
        if ($(this).attr("data-name")) {
            var target = $(this).attr("data-name");
            var top = Math.ceil($("#" + target).offset().top) - Math.ceil($(".sort_label").height()) -
                Math.ceil($(".sec_head").height());
            $("html, body").scrollTop(top - 3)
        }
    });
    $(".ccLoad").on("click", function() {
        if (isWeiXin()) {
            $(".mask").show()
            //window.location = "http://a.app.qq.com/o/simple.jsp?pkgname=com.lion.market"
        } else {
            AndroidConnect.launch("ccplay://ccplay", function() {
                document.location.href = downloadUrl
            })
        }
    });
    $(".ccLoad-spec").on("click", function() {
        if (isWeiXin()) {
            $(".mask").show()
            //window.location = "http://a.app.qq.com/o/simple.jsp?pkgname=com.lion.market"
        } else {
            var type = $(this).attr("data-type");
            var id = $(this).attr("data-id");
            var urls;
            if (type === "goods") {
                urls = "ccplay://ccplay/goodsDetail?id=" + id
            } else {
                if (type === "game") {
                    urls = "ccplay://ccplay/gameDetail?id=" + id
                }
            }
            AndroidConnect.launch(urls, function() {
                document.location.href = downloadUrl
            })
        }
    });
    document.addEventListener("webkitvisibilitychange", function() {
        clearTimeout(timers)
    });

    // -----------------页面下载相关事件-----------------
    $(".btn_load").on("click", function() {
        console.log('ready',navigator.userAgent)
        var u = navigator.userAgent;
        var isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if ($(this).hasClass("btn_load_appoint")) {
            return
        }
        if (isIos) {
            iosDialog()
        } else {
            if (!$(this).hasClass("btn-newload")) {
                if (isWeiXin() && !$(this).hasClass("btn_gift_online")) {
                    $(".mask").show()
                }
            } else {
                var pay = $(this).attr("data-pay"); // 付费类型
                var gs = $(this).attr("data-gs");   // 高速下载地址
                var pt = $(this).attr("data-pt");   // 普通下载地址
                var id = $(this).attr("data-id");   // id

                // 2024-09-18 477付费游戏版本新增
                if(pay == 'y'){ // 若游戏为付费类型
                    openCommonCostPopup(this)
                    return false;
                }

                // 因为pt字段下发http无法在https使用的问题
                gs = gs.replace('http://','https://')
                pt = pt.replace('http://','https://')

                copyToClipboard("CC"+id+"CC");
                // if(gs && gs.indexOf('super-')!=-1 ){ // 若不是国外下载地址
                //     // id = gs.split("super-")[1].split(".htm")[0]; // 游戏id
                //     // copyToClipboard("CC"+id+"CC");
                //     // 修改为走固定下载路径
                //     gs = '//android-api.ccplay.com/api/v3/download/client/com.lion.market'
                // }

                // 2024-05-18 针对.com.cn域名普通路径做特殊下载
                let currentDomain = window.location.hostname;
                if(currentDomain.indexOf('ccplay.com.cn')!=-1){
                    pt = pt.replace("android-test.ccplay.cn","android-test.cczsapp.cn")
                    pt = pt.replace("android-api.ccplay.cn","android-api.cczsapp.cn")
                    pt = pt.replace("/version/","/wapVersion/")
                }


                $(".select-download .download-way-gs").attr("data-url", gs);
                $(".select-download .download-way-pt").attr("data-url", pt);
                $(".select-download .download-way-gs").attr("data-id", id)
                $(".select-download .download-way-pt").attr("data-id", id)
                if(isXiaoMi()){
                    console.log("select-download.xiaomi",isXiaoMi())
                    $(".select-download.xiaomi").show()
                }else{
                    $(".select-download.official").show()
                    console.log("select-download.official",isXiaoMi())
                }
                // ******2021-9-13需求变更，故关闭下面代码*******
                // var gs = $(this).attr("data-gs");   // cc助手数据上报后下载路径
                // var id=''
                // if(gs && gs.indexOf('super-')!=-1 ){
                //     id = gs.split("super-")[1].split(".htm")[0]; // 游戏id
                //     copyToClipboard("CC"+id+"CC");
                // }
                // 下载按钮自定义属性-于20210713需求变成新增设计
                // immediately 立即下载 不弹出下载方式
                // 你肯定疑惑为啥代码这么写，因为以后还会再改
                // var domBtnType = $(this).attr("dow-type")
                // console.log("CC"+id+"CC")
                // if(domBtnType == "immediately" || id!=''){
                //     copyToClipboard("CC"+id+"CC");
                //     document.location.href = "https:" + gs  //走数据上报接口，为了知道是从哪个游戏下载的虫虫助手
                //     return;
                // }

                // ******2021-7-15需求变更，故关闭下面代码*******
                // return;
                // $(".new-download").show();
                // var pt = $(this).attr("data-pt");
                // pt = pt.replace(/http:\/\/android-(.+?)\.ccplay\.cn/g, "https://android-$1.ccplay.cn");
                // $(".new-download .gs-load").attr("data-url", gs);
                // $(".new-download .pt-load").attr("data-url", pt);
                // $(".new-download .gs-load").attr("data-id", id)
            }
        }
    });
    //选择下载弹窗关闭
    $(".select-download .select-download-main .img-close").on("click", function(){
        $('.select-download').hide() // 关闭选择下载弹窗

        $('.download-way').attr('checked','checked')
        $('.download-way-gs').show()
        $('.download-way-pt').hide()
        //给详情页用的
        $('.gs-load').show()
        $('.pt-load').hide()
    })
    $(".select-download .select-download-main .img-close-xiaomi").on("click", function(){
        $('.select-download').hide() // 关闭选择下载弹窗
    })

    //高速下载
    $(".download-way-gs").on("click", function(){
        var u = navigator.userAgent;
        var isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if (isIos) {
            iosDialog()
        } else {
            if (isWeiXin()) {
                $(".mask").show()
            } else {
                var gsDownloadUrl = $(this).attr("data-url");
                //2021-12-16 临时切换
                // if(gsDownloadUrl.indexOf("oversea.ccplay.mobi")==-1){
                //     gsDownloadUrl = "https://android-api.ccplay.com/api/v3/download/client/com.lion.market"
                // }
                //gsDownloadUrl = "https://android-api.ccplay.com/api/v3/download/client/com.lion.market"
                var id = $(this).attr("data-id");
                const hostname = window.location.hostname;
                if(hostname.indexOf("ccplay.com")!=-1){
                    gsDownloadUrl = "https://android-api.ccplay.com/api/v3/download/ccClientappPackage/wap/details?id="+id
                }
                if(hostname.indexOf("ccplay.cc")!=-1){
                    gsDownloadUrl = "https://android-api.ccplay.cc/api/v3/download/ccClientappPackage/wap/details?id="+id
                }
                if(hostname.indexOf("ccplay.cn")!=-1){
                    gsDownloadUrl = "https://android-api.ccplay.cn/api/v3/download/ccClientappPackage/wap/details?id="+id
                }
                if(hostname.indexOf("ccplay.com.cn")!=-1){
                    gsDownloadUrl = "https://android-api.ccplay.com.cn/api/v3/download/ccClientappPackage/wap/details?id="+id
                }
                var urls = "ccplay://ccplay/gameDetail?id=" + id;
                copyToClipboard("CC"+id+"CC");
                AndroidConnect.launch(urls, function() {
                    document.location.href = gsDownloadUrl
                })
            }
        }
    })

    /*普通下载*/
    $(".download-way-pt").on("click", function(){
        var u = navigator.userAgent;
        var isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if (isIos) {
            iosDialog()
        } else {
            if (isWeiXin()) {
                $(".mask").show()
            } else {
                var id = $(this).attr("data-id");
                var downloadLink = $(this).attr("data-url").replace(
                    /http:\/\/android-(.+?)\.ccplay\.cn/g, "https://android-$1.ccplay.cn");

                // 2024-05-18 针对.com.cn域名普通路径做特殊下载
                // let currentDomain = window.location.hostname;
                // if(currentDomain.indexOf('ccplay.com.cn')!=-1){
                //     downloadLink = downloadLink.replace("android-test.ccplay.cn","android-test.cczsapp.cn")
                //     downloadLink = downloadLink.replace("android-api.ccplay.cn","android-api.cczsapp.cn")
                //     downloadLink = downloadLink.replace("/version/","/wapVersion/")
                // }

                var pt = downloadLink.replace('http://','https://')
                console.log(pt)
                realNameConfig(pt,id)
                return false
                document.location.href = pt  //普通下载
                //copyToClipboard("CC"+id+"CC");
                //window.location = downloadLink
            }
        }

    })

    //下载方式-20210913
    $(".download-way").on("click", function(){
        var dom = $(".download-way").attr('checked')
        if(dom=='checked'){
            $(".download-way").removeAttr('checked')
            $('.download-way-gs').hide()
            $('.download-way-pt').show()
            //给详情页用的
            $('.gs-load').hide()
            $('.pt-load').show()
        }else {
            $(".download-way").attr('checked','checked')
            $('.download-way-gs').show()
            $('.download-way-pt').hide()
            //给详情页用的
            $('.gs-load').show()
            $('.pt-load').hide()
        }
        console.log(dom)
    })

    //-----------------页面下载相关事件-end-----------------

    $(document).on("click", ".btn-direct-close", function() {
        $(this).parents(".direct-modal").remove()
    });
    $(document).on("click", ".btn-dialog-close", function() {
        $(this).parents(".direct-modal").remove()
    });
    $(".n-mask").on("click", function() {
        $(this).parent().hide()
    });
    $(".btn_load_large").on("click", function() {
        if (isWeiXin()) {
            $(".mask").show()
        } else {
            window.location = $(this).attr("data-url")
        }
    });
    // $(".pt-load").on("click", function() {
    //     // var u = navigator.userAgent;
    //     // var isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    //     // if (isIos) {
    //     //     iosDialog()
    //     // } else {
    //     //     if (isWeiXin()) {
    //     //         $(".mask").show()
    //     //     } else {
    //     //         var id = $(this).attr("data-id");
    //     //         copyToClipboard("CC"+id+"CC");
    //     //         var downloadLink = $(this).attr("data-url").replace(
    //     //             /http:\/\/android-(.+?)\.ccplay\.cn/g, "https://android-$1.ccplay.cn");
    //     //         window.location = downloadLink
    //     //     }
    //     // }
    // });
    //$(".hw-load").on("click", function() {
        // var u = navigator.userAgent;
        // var isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        // if (isIos) {
        //     iosDialog()
        // } else {
        //     if (isWeiXin()) {
        //         $(".mask").show()
        //     } else {
        //         var id = $(this).attr("data-id");
        //         copyToClipboard("CC"+id+"CC");
        //         var downloadLink = $(this).attr("data-url").replace(
        //             /http:\/\/android-(.+?)\.ccplay\.cn/g, "https://android-$1.ccplay.cn");
        //         window.location = downloadLink
        //     }
        // }
    //});
    //$(".gs-load").on("click", function() {
        // var u = navigator.userAgent;
        // var isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        // if (isIos) {
        //     iosDialog()
        // } else {
        //     if (isWeiXin()) {
        //         $(".mask").show()
        //     } else {
        //         var gsDownloadUrl = $(this).attr("data-url");
        //         var id = $(this).attr("data-id");
        //         var urls = "ccplay://ccplay/gameDetail?id=" + id;
        //         copyToClipboard("CC"+id+"CC");
        //         AndroidConnect.launch(urls, function() {
        //             document.location.href = gsDownloadUrl
        //         })
        //     }
        // }
    //});
    $(".mask").on("click", function() {
        $(this).hide()
    });
    $(".star_score_active").each(function() {
        var score = $(this).attr("data-score") * 10 / 50 * 100;
        $(this).css("width", score + "%")
    })
});

// 加载更多事件
function downloadGame() {
    // -----------------页面下载相关事件-----------------
    $(".btn_load").on("click", function() {
        console.log('ready',navigator.userAgent)
        var u = navigator.userAgent;
        var isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if ($(this).hasClass("btn_load_appoint")) {
            return
        }
        if (isIos) {
            iosDialog()
        } else {
            if (!$(this).hasClass("btn-newload")) {
                if (isWeiXin() && !$(this).hasClass("btn_gift_online")) {
                    $(".mask").show()
                }
            } else {
                var pay = $(this).attr("data-pay"); // 付费类型
                var gs = $(this).attr("data-gs");   // 高速下载地址
                var pt = $(this).attr("data-pt");   // 普通下载地址
                var id = $(this).attr("data-id");   // id

                // 2024-09-18 477付费游戏版本新增
                if(pay == 'y'){ // 若游戏为付费类型
                    openCommonCostPopup(this)
                    return false;
                }


                // 因为pt字段下发http无法在https使用的问题
                gs = gs.replace('http://','https://')
                pt = pt.replace('http://','https://')
                copyToClipboard("CC"+id+"CC");
                // if(gs && gs.indexOf('super-')!=-1 ){ // 若不是国外下载地址
                //     // id = gs.split("super-")[1].split(".htm")[0]; // 游戏id
                //     // copyToClipboard("CC"+id+"CC");
                //     // 修改为走固定下载路径
                //     gs = '//android-api.ccplay.com/api/v3/download/client/com.lion.market'
                // }

                // 2024-05-18 针对.com.cn域名普通路径做特殊下载
                let currentDomain = window.location.hostname;
                if(currentDomain.indexOf('ccplay.com.cn')!=-1){
                    pt = pt.replace("android-test.ccplay.cn","android-test.cczsapp.cn")
                    pt = pt.replace("android-api.ccplay.cn","android-api.cczsapp.cn")
                    pt = pt.replace("/version/","/wapVersion/")
                }


                $(".select-download .download-way-gs").attr("data-url", gs);
                $(".select-download .download-way-pt").attr("data-url", pt);
                $(".select-download .download-way-gs").attr("data-id", id)
                $(".select-download .download-way-pt").attr("data-id", id)
                if(isXiaoMi()){
                    console.log("select-download.xiaomi",isXiaoMi())
                    $(".select-download.xiaomi").show()
                }else{
                    $(".select-download.official").show()
                    console.log("select-download.official",isXiaoMi())
                }
                // ******2021-9-13需求变更，故关闭下面代码*******
                // var gs = $(this).attr("data-gs");   // cc助手数据上报后下载路径
                // var id=''
                // if(gs && gs.indexOf('super-')!=-1 ){
                //     id = gs.split("super-")[1].split(".htm")[0]; // 游戏id
                //     copyToClipboard("CC"+id+"CC");
                // }
                // 下载按钮自定义属性-于20210713需求变成新增设计
                // immediately 立即下载 不弹出下载方式
                // 你肯定疑惑为啥代码这么写，因为以后还会再改
                // var domBtnType = $(this).attr("dow-type")
                // console.log("CC"+id+"CC")
                // if(domBtnType == "immediately" || id!=''){
                //     copyToClipboard("CC"+id+"CC");
                //     document.location.href = "https:" + gs  //走数据上报接口，为了知道是从哪个游戏下载的虫虫助手
                //     return;
                // }

                // ******2021-7-15需求变更，故关闭下面代码*******
                // return;
                // $(".new-download").show();
                // var pt = $(this).attr("data-pt");
                // pt = pt.replace(/http:\/\/android-(.+?)\.ccplay\.cn/g, "https://android-$1.ccplay.cn");
                // $(".new-download .gs-load").attr("data-url", gs);
                // $(".new-download .pt-load").attr("data-url", pt);
                // $(".new-download .gs-load").attr("data-id", id)
            }
        }
    });
    // $(".btn_load").on("click", function() {
    //     console.log('ready',navigator.userAgent)
    //     var u = navigator.userAgent;
    //     var isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    //     if ($(this).hasClass("btn_load_appoint")) {
    //         return
    //     }
    //     if (isIos) {
    //         iosDialog()
    //     } else {
    //         if (!$(this).hasClass("btn-newload")) {
    //             if (isWeiXin() && !$(this).hasClass("btn_gift_online")) {
    //                 $(".mask").show()
    //             }
    //         } else {
    //             var gs = $(this).attr("data-gs");   // cc助手数据上报后下载路径
    //             var id=''
    //             if(gs && gs.indexOf('super-')!=-1 ){
    //                 id = gs.split("super-")[1].split(".htm")[0]; // 游戏id
    //                 copyToClipboard("CC"+id+"CC");
    //             }
    //             // 下载按钮自定义属性-于20210713需求变成新增设计
    //             // immediately 立即下载 不弹出下载方式
    //             // 你肯定疑惑为啥代码这么写，因为以后还会再改
    //             var domBtnType = $(this).attr("dow-type")
    //             console.log("CC"+id+"CC")
    //             if(domBtnType == "immediately" || id!=''){
    //                 copyToClipboard("CC"+id+"CC");
    //                 document.location.href = "https:" + gs  //走数据上报接口，为了知道是从哪个游戏下载的虫虫助手
    //                 return;
    //             }
    //
    //             // ******2021-7-15需求变更，故关闭下面代码*******
    //             return;
    //             $(".new-download").show();
    //             var pt = $(this).attr("data-pt");
    //             pt = pt.replace(/http:\/\/android-(.+?)\.ccplay\.cn/g, "https://android-$1.ccplay.cn");
    //             $(".new-download .gs-load").attr("data-url", gs);
    //             $(".new-download .pt-load").attr("data-url", pt);
    //             $(".new-download .gs-load").attr("data-id", id)
    //         }
    //     }
    // });
    // $(".btn_load").on("click", function() {
    //     console.log('downloadGame',navigator.userAgent)
    //     var u = navigator.userAgent;
    //     var isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    //     if (isIos) {
    //         iosDialog()
    //     } else {
    //         if (!$(this).hasClass("btn-newload")) {
    //             if (isWeiXin() && !$(this).hasClass("btn_gift_online")) {
    //                 $(".mask").show()
    //             }
    //         } else {
    //             $(".new-download").show();
    //             var gs = $(this).attr("data-gs");
    //             var pt = $(this).attr("data-pt");
    //             console.log(gs);
    //             pt = pt.replace(/http:\/\/android-(.+?)\.ccplay\.cn/g, "https://android-$1.ccplay.cn");
    //             $(".new-download .gs-load").attr("data-url", gs);
    //             $(".new-download .pt-load").attr("data-url", pt);
    //             var id = gs.split("super-")[1].split(".htm")[0];
    //             $(".new-download .gs-load").attr("data-id", id)
    //         }
    //     }
    // })
}

function commonFunc() {
    $(".jp_name_content").each(function() {
        if ($(this).text().length > 4 && !$(this).hasClass("jp_name_animate")) {
            $(this).addClass("jp_name_animate");
            var step = $(this).width() - $(this).parent().width();
            var index = 0;
            var _t = $(this);
            setInterval(function() {
                index++;
                if (index >= step + 10) {
                    index = 0
                } else {
                    _t.css("left", "-" + index + "px")
                }
            }, 150)
        }
    });
    $(".comment_tab_item").tap(function() {
        $(this).addClass("comment_tab_item_select").siblings().removeClass("comment_tab_item_select")
    });
    $(".keyword_box a").tap(function() {
        $(this).addClass("keyword_active").siblings().removeClass("keyword_active")
    });
    $(".start_line_focus").each(function() {
        var score = $(this).attr("data-score") * 10 / 50 * 100;
        console.log(score);
        $(this).css("width", score + "%")
    });
    $(".star_box").each(function() {
        starTemp($(this))
    });
    tabWidth();
    $(".create_time_comment").each(function() {
        if (!$(this).hasClass("time_init")) {
            var times = parseInt($(this).text());
            var test = getDateDiff(times);
            $(this).text(test).addClass("time_init")
        }
    });
    $(".prograss").each(function() {
        var num = parseInt($(this).find(".prograss_num").text());
        $(this).find(".prograss_bar").css({
            "width": num + "%"
        })
    });
    if ($("#keyword").val() != "") {
        $(".icon_clear").show()
    } else {
        $(".icon_clear").hide()
    }
    $("#keyword").on("change, blur", function() {
        if ($(this).val() != "") {
            $(".icon_clear").show()
        } else {
            $(".icon_clear").hide()
        }
    });
    $("#keyword").on("input propertychange", function() {
        var keyword = $.trim($(this).val());
        if (keyword) {
            $(".icon_clear").show()
        } else {
            $(".icon_clear").hide()
        }
    });
    $("span.icon_clear").click(function() {
        $("#keyword").val("")
    });
    $(".open_txt").click(function() {
        if (!$(this).hasClass("open")) {
            $(this).addClass("open");
            $(this).find(".icon_txt_open").addClass("icon_txt_close");
            $(this).parent().siblings(".recommond_txt").addClass("recommond_txt_show")
        } else {
            $(this).removeClass("open");
            $(this).find(".icon_txt_open").removeClass("icon_txt_close");
            $(this).parent().siblings(".recommond_txt").removeClass("recommond_txt_show")
        }
    })
}

function createLoadModal() {
    if ($(".dialog").length) {
        $(".modalMask").show();
        return
    } else {
        var htmls = '<div class="modalMask">' + '<div class="dialog">' + '<div class="dialog_bg"></div>' +
            '<a href="javascript:void(0)" class="dialog_close"></a>' + '<div class="dialog_content">' +
            '<p class="d_tit">下载虫虫助手，享受充值折扣各种福利~</p>' +
            '<a href="javascript:void(0)" class="btn btn_download">立即下载</a>    ' + "</div>" + "</div>" + "</div>";
        $("body").append(htmls);
        $(".btn_download").on("click", function() {
            if (isWeiXin()) {
                $(".mask").show()
                //window.location = "http://a.app.qq.com/o/simple.jsp?pkgname=com.lion.market"
            } else {
                window.location = downloadUrl
            }
        })
    }
    $(".dialog_close").click(function() {
        $(this).parents(".modalMask").hide()
    })
}

function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true
    } else {
        return false
    }
}

function readyFunc(ele) {
    var len = 0;
    $(ele + " .wrapper li").each(function() {
        len += $(this).width()
    });
    $(ele + " .wrapper ul").width(len + $(ele + " .wrapper li").length)
}

function loaded() {
    if ($("#wrapper").length) {
        new iScroll("wrapper", {
            hScroll: true,
            momentum: true,
            checkDOMChanges: true,
            onRefresh: function() {
                readyFunc("nav")
            },
            onBeforeScrollStart: function(e) {
                if (this.absDistX > (this.absDistY + 5)) {
                    e.preventDefault()
                }
            },
            onTouchEnd: function() {
                var self = this;
                if (self.touchEndTimeId) {
                    clearTimeout(self.touchEndTimeId)
                }
                self.touchEndTimeId = setTimeout(function() {
                    self.absDistX = 0;
                    self.absDistX = 0
                }, 600)
            }
        })
    }
    if ($("#collecWrapper").length) {
        new iScroll("collecWrapper", {
            hScroll: true,
            momentum: true,
            checkDOMChanges: true,
            onRefresh: function() {
                readyFunc(".collect_scroll")
            },
            onBeforeScrollStart: function(e) {
                if (this.absDistX > (this.absDistY + 5)) {
                    e.preventDefault()
                }
            },
            onTouchEnd: function() {
                var self = this;
                if (self.touchEndTimeId) {
                    clearTimeout(self.touchEndTimeId)
                }
                self.touchEndTimeId = setTimeout(function() {
                    self.absDistX = 0;
                    self.absDistX = 0
                }, 600)
            }
        })
    }
    if ($("#giftWrapper").length) {
        new iScroll("giftWrapper", {
            hScroll: true,
            momentum: true,
            checkDOMChanges: true,
            onRefresh: function() {
                readyFunc(".gift_scroll")
            },
            onBeforeScrollStart: function(e) {
                if (this.absDistX > (this.absDistY + 5)) {
                    e.preventDefault()
                }
            },
            onTouchEnd: function() {
                var self = this;
                if (self.touchEndTimeId) {
                    clearTimeout(self.touchEndTimeId)
                }
                self.touchEndTimeId = setTimeout(function() {
                    self.absDistX = 0;
                    self.absDistX = 0
                }, 600)
            }
        })
    }
    if ($("#quanWrapper").length) {
        new iScroll("quanWrapper", {
            hScroll: true,
            momentum: true,
            checkDOMChanges: true,
            onRefresh: function() {
                readyFunc(".quan_scroll")
            },
            onBeforeScrollStart: function(e) {
                if (this.absDistX > (this.absDistY + 5)) {
                    e.preventDefault()
                }
            },
            onTouchEnd: function() {
                var self = this;
                if (self.touchEndTimeId) {
                    clearTimeout(self.touchEndTimeId)
                }
                self.touchEndTimeId = setTimeout(function() {
                    self.absDistX = 0;
                    self.absDistX = 0
                }, 600)
            }
        })
    }
}

function starTemp(t) {
    var star = parseInt(t.attr("data-star"));
    if (!star) {} else {
        for (var i = 0; i < star; i++) {
            t.find(".star").eq(i).addClass("star_active")
        }
    }
}

function tabWidth() {
    var tabLen = $(".classify_tab").find("a").length;
    $(".classify_tab>a").addClass("col-md-" + tabLen)
}

function getDateDiff(dateTimeStamp) {
    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var halfamonth = day * 15;
    var month = day * 30;
    var now = new Date().getTime();
    var diffValue = now - dateTimeStamp;
    if (diffValue < 0) {
        return
    }
    var monthC = diffValue / month;
    var weekC = diffValue / (7 * day);
    var dayC = diffValue / day;
    var hourC = diffValue / hour;
    var minC = diffValue / minute;
    if (dayC >= 1) {
        result = getDate(dateTimeStamp)
    } else {
        if (hourC >= 1) {
            result = "" + parseInt(hourC) + "小时前"
        } else {
            if (minC >= 1) {
                result = "" + parseInt(minC) + "分钟前"
            } else {
                result = "刚刚"
            }
        }
    }
    return result
}

function getDate(timeStamp) {
    var date = new Date(timeStamp);
    var years = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    if (month < 10) {
        month = "0" + month
    }
    if (day < 10) {
        day = "0" + day
    }
    return years + "-" + month + "-" + day
}

function iosDialog() {
    var htmls = "";
    var qrcodeUrl = resourceHost + "/images/qrcode-wechat.png";
    var iosTitleUrl = resourceHost + "/images/ios-dialog-title.png";
    var htmls = '<div class="direct-modal">' + '<div class="direct-modal-mask"></div>' +
        '<div class="direct-modal-content">' + '<div class="direct-dialog ios-dialog">' +
        '<a href="javascript:void(0)" class="btn-dialog-close"></a>' + '<img src="' + iosTitleUrl +
        '" alt="" class="ios-dialog-title">' + "<h2>关注微信公众号，预约虫虫助手APP</h2>" + '<img class="wechat-qrcode" src="' +
        qrcodeUrl + '">' + '<div class="ios-dialog-txt">' + '<p class="bold">关注方式：</p>' +
        "<p>1.使用微信扫描上方二维码关注（若在微信中，可直接长按快速进入）</p>" + "<p>2.点击下方按钮复制公众号名称→在微信中粘贴搜索→关注公众号。</p>" + "</div>" +
        '<a href="javascript:void(0)" class="wechat-copy" data-clipboard-text="虫虫助手App"></a>' +
        '<div class="ios-dialog-tip">' + "<p>关注公众号即成功预约虫虫助手APP，还可以掌握每月虫虫分享的好游动态，以及新闻资讯。</p>" + "</div>" + "</div>" +
        "</div>" + "</div>";
    $("body").append(htmls);
    var clipboard = new Clipboard($(".wechat-copy")[0]);
    clipboard.on("success", function(e) {
        ccToast("复制成功")
    });
    clipboard.on("error", function(e) {})
}
var AndroidConnect = {
    initLaunch: function() {
        var _this = this;
        if (!this.frame) {
            this.frame = document.createElement("iframe");
            this.frame.height = "0";
            this.frame.width = "0";
            this.frame.frameBorder = 0;
            document.body.appendChild(this.frame);
            this.timeout = 2500;
            window.onblur = function() {
                clearTimeout(_this.timer);
                _this.timer = null
            };
            document.addEventListener("webkitvisibilitychange", function() {
                clearTimeout(_this.timer)
            });
            this.frame.onload = function() {
                console.log("404 onload");
                if (_this.timer == null) {
                    return
                }
                clearTimeout(_this.timer);
                _this.timer = null;
                _this.launchFallback(new Date() - 0)
            };
            this.frame.onerror = function() {
                console.log("onerror");
                if (_this.timer == null) {
                    return
                }
                clearTimeout(_this.timer);
                _this.timer = null;
                _this.launchFallback(new Date() - 0)
            }
        }
    },
    launchFallback: function(start_time) {
        var now_time = Date.now();
        if (!start_time || now_time - start_time < this.timeout + 200) {
            this.fallback()
        }
    },
    launch: function(launch_url, fallback) {
        var _this = this,
            start_time = Date.now();
        this.launch_url = launch_url || "ccplay://ccplay";
        this.fallback = typeof fallback === "function" ? fallback : function() {};
        this.initLaunch();
        this.launchFallback(start_time)
        //关闭延迟下载
        // if (this.fallback) {
        //     this.timer = setTimeout(function() {
        //         console.log("timeout");
        //         _this.launchFallback(start_time)
        //     }, _this.timeout)
        // }
        // this.redirect()
    },
    redirect: function() {
        this.frame.setAttribute("src", this.launch_url)
    }
};
var toastTimer = null;

function ccToast(txt) {
    if ($(".cc-toast").length) {
        return
    }
    var htmls = '<div class="cc-toast">' + "<span>" + txt + "</span>" + "</div>";
    $("body").append(htmls);
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function() {
        $(".cc-toast").remove()
    }, 1500)
};

function isXiaoMi(){ // 2024-05-07 不在进行判断 默认全开放
    // let device_type = navigator.userAgent; //获取userAgent信息
    // let xiaomi = device_type.toLowerCase().match(/mi/i)=='mi'
    // let xiaomi2s = device_type.toLowerCase().match(/mix/i)=='mix'
    // let Redmi = device_type.toLowerCase().match(/redmin/i)=='redmin'
    // if(xiaomi || xiaomi2s || Redmi) return true
    // if(isOPPO()) return true
    // if(isYiJia()) return true
    // return false
    return true
}
function isOPPO(){
    let device_type = navigator.userAgent; //获取userAgent信息
    let oppo = device_type.toLowerCase().match(/oppo/i)=='oppo'
    if(oppo) return true

    return false
}
function isYiJia(){
    let device_type = navigator.userAgent; //获取userAgent信息
    let yijia = device_type.toLowerCase().match(/heytap/i)=='heytap'
    if(yijia) return true
    return false
}
