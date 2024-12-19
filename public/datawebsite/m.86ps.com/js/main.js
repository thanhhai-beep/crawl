//meun

$(function () {
    $('.header .meun,.clode_burger').click(function () {
        $('#content').toggleClass('on');
        $('.burger').slideToggle()
        $('#content').css({ 'height': $(window).height() })
    })


//index.htmll slid
    if ($('#hd_wrap').size()==1) {
        $('.hd_wrap').show();
        var swiper = new Swiper('#hd_wrap', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }

//Up
    $(window).scroll(function () {
        var scroll_len = $(window).scrollTop();
        if (scroll_len > 300) {
            $('#Top').fadeIn();
        } else {
            $('#Top').fadeOut();
        };
    })
    $('#Top').click(function () {
        $("html,body").animate({ scrollTop: 0 }, 500);
    })

//分页
    $(".page>span").click(function () {
        $(this).children("div").show();
    })
    $(document).click(function () {
        $(".page>span .cbtn").css("display", "none");
    })
    $(".page>span .cbtn,.page>span").click(function (event) {
        event.stopPropagation();
    });
// //nav
//     $(function(){
//         if($('.nav').size()>=1){
//             var onleft_ = $('.nav .on').offset().left
//             var w_ =$(window).width()/2;
//             if(w_<=onleft_){
//                 $(".nav").scrollLeft((onleft_- w_));
//             }
//         }
//     })

//文字提示弹窗 自动关闭
    window.tipsmsg = function (txt) {
        if($('.tips_wind').size()<=0){
            $('body').append('<div class="tips_wind"><span>'+txt+'</span></div>')
            $('.tips_wind').fadeIn()
            setTimeout(function () {
                $('.tips_wind').fadeOut(function () {
                    $('.tips_wind').remove()
                });
            },1000)
        }
    }
//评论
    $(".commentbtn").click(function () {
        var s = $(".commenttextArea").val();
        var fscentent_kong = s.replace(/\s/g, "");
        if (fscentent_kong.length == 0) {
            $(".commenttextArea").val('');
            $(".commenttextArea").focus();
            $(".tiship").text('评论内容不能为空！');
            $(".tiship").show();

        } else {
            $(".tiship").text('评论成功，审核通过后即可显示。');

            $(".tiship").show();
            $(".commenttextArea").val('');
        }
    });

    var enableSafeDown = true;
    if (/\/(\S+)\/(\d+).html/ig.test(location.pathname) && enableSafeDown) {
        var _id = /\/(\S+)\/(\d+).html/ig.exec(location.pathname)[2];
        $.ajax({
            type: "GET",
            async: false,
            url: "/gfapi/hideInfo?uniqueid=" + _id,
            success: function (data) {
                if (data && data != "" && document.title.indexOf("暂未上线") == -1) {
                    if (data.project_key == "" && data.download_url != "" && data.dir != "qipai" && [82, 110, 121, 131].indexOf(data.uid) === -1) {
                        $(function () {
                            $("#download_url").after('<a id="download_safe" style="" class="downl_b down_safe" rel="nofollow"> <span>安全下载</span><span class="small">需下载应用市场</span> </a>')
                            $("#download").after('<div class="down_text" style="margin-bottom: 10px;"><span>说明:</span>安全下载是直接下载应用市场，用户下载后可自行搜索目标软件进行更高速，更安全下载。</div>')
                            $("#download_safe").click(function () {
                                location.href = "https://openbox.mobilem.360.cn/channel/getUrl?src=8978137&app=zs"
                            })
                        })
                    }
                }
            }
        });
    }

})

