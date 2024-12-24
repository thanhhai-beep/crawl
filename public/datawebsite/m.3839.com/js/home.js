var _data = {};

(function(){

    var slide_3h = {},
        slide_hg = {},
        slide_hr = {},
        slide_ng = {},
        slide_lb = {};
    //3行式游戏列表
    function swiper_3h(){
        $('.card3h').each(function(){
            var $id = $(this).attr('data-id');if (!$id) return false;
            if (!slide_3h) slide_3h = {};
            if (typeof(slide_3h[$id])!='undefined' && slide_3h[$id]) {
                return false;
            }
            slide_3h[$id] = new Swiper('#card3h_'+$id,{
                lazy: true,
                slidesPerView: "auto",
                observer: true,
                observeParents: true,
                on:{
                    transitionEnd:function(){
                        this.lazy.loadInSlide(this.activeIndex+1);
                    }
                }
            });
            // slide_3h[$id].lazy.load();
            // slide_3h[$id].lazy.loadInSlide(slide_3h[$id].activeIndex+1);
        });
    }

    // 热门游戏更新
    function swiper_hg(){
        $('.hotGame').each(function(){
            var $id = $(this).attr('data-id');if (!$id) return false;
            if (!slide_hg) slide_hg = {};
            if (typeof(slide_hg[$id])!='undefined' && slide_hg[$id]) {
                return false;
            }

            slide_hg[$id] = new Swiper('#hotGame_'+$id+'',{
                slidesPerView: "auto",
                observer: true,
                observeParents: true,
                on:{
                    transitionEnd:function(swiper){
                        this.lazy.loadInSlide(this.activeIndex+1);
                        this.lazy.loadInSlide(this.activeIndex+2);
                    }
                }
            });
            // slide_hg[$id].lazy.load();
            // slide_hg[$id].lazy.loadInSlide(slide_hg[$id].activeIndex+1);
        });
    }
    // 热点速递
    // 低版本正常轮播
    // 高版本卡片轮播
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
    var isLow = false;
    if(isAndroid){
        var info = u.match(/Android\s([\d+]+)\.?/)
        if(info[1]<5){isLow=true}
    }

    function swiper_hr(){
        if(!isLow) $('.bbsList').addClass('slideCard');
        $('.bbsList').each(function(){
            if ($(this).find('li').length<=1) {
                $(this).find('.cardBBS').css('width','100%');
                return ;
            }
            var $id = $(this).attr('data-id');if (!$id) return ;
            if ($('#bbsList_'+$id).is(':hidden')) return false;
            if (!slide_hr) slide_hr = {};
            if (typeof(slide_hr[$id])!='undefined' && slide_hr[$id]) {
                return ;
            }

            if(isLow){
                slide_hr[$id] = new Swiper('#bbsList_'+$id+'',{
                    lazy: true,
                    slidesPerView: "auto",
                    observer: true,
                    observeParents: true,
                    centeredSlides: true,
                    on:{
                        transitionEnd:function(swiper){
                            this.lazy.loadInSlide(this.activeIndex+1);
                            this.lazy.loadInSlide(this.activeIndex+2);
                        }
                    }
                });
                // slide_hr[$id].lazy.load();
                // slide_hr[$id].lazy.loadInSlide(slide_hr[$id].activeIndex+1);
                // slide_hr[$id].lazy.loadInSlide(slide_hr[$id].activeIndex+2);
            }else{
                slide_hr[$id] = new Swiper('#bbsList_'+$id+'', {
                    lazy: true,
                    slidesPerView: "auto",
                    watchSlidesProgress : true,  //查看slide的progress
                    resistanceRatio : 0, //禁止边缘移动
                    loop:true,
                    observer: true,
                    observeParents: true,
                    centeredSlides: true,
                    on: {
                        init: function(){
                            slides = this.slides
                            for(i=0; i< slides.length; i++){
                                slide = slides.eq(i)
                                slide.css('zIndex', 100-i);  //设置slide的z-index层级
                            }
                        },
                        observerUpdate: function(){
                            // console.log('监测到DOM变化，更新Swiper')
                        },
                        resize: function(swiper){
                            // swiper.update()
                        },
                        setTranslate: function(){
                            slides = this.slides
                            offsetAfter = this.width*0.95 //每个slide的位移值
                            for(i=0; i< slides.length; i++){
                                slide = slides.eq(i)
                                progress = slides[i].progress
                                if(progress <= 0){
                                    //右边slide位移
                                    slide.transform('translate3d('+(progress)*offsetAfter+'px, 0, 0) scale('+(1 - Math.abs(progress)/20)+')');
                                    slide.css('opacity',(progress+3));    //最右边slide透明
                                }
                                if(progress > 0){
                                    slide.transform('rotate('+ (-progress)*5+'deg)');   //左边slide旋转
                                    slide.css('opacity',1 - progress);    //左边slide透明
                                }
                            }

                            this.lazy.loadInSlide(this.activeIndex+1);
                            this.lazy.loadInSlide(this.activeIndex+2);
                        },
                        setTransition: function(swiper, transition) {
                            for (var i = 0; i < this.slides.length; i++) {
                                var slide = this.slides.eq(i)
                                slide.transition(transition);
                            }
                        },
                    },
                });
                // slide_hr[$id].lazy.load();
                // slide_hr[$id].lazy.loadInSlide(slide_hr[$id].activeIndex+1);
            }


        });


    }

    // 每月好游预告
    function swiper_ng(){
        $('.newGame').each(function(){
            var $id = $(this).attr('data-id');if (!$id) return false;
            if (!slide_ng) slide_ng = {};
            if (typeof(slide_ng[$id])!='undefined' && slide_ng[$id]) {
                return false;
            }

            slide_ng[$id] = new Swiper('#newGame_'+$id, {
                lazy: true,
                slidesPerView: "auto",
                observer: true,
                observeParents: true,
                on:{
                    transitionEnd:function(swiper){
                        this.lazy.loadInSlide(this.activeIndex+1);
                        this.lazy.loadInSlide(this.activeIndex+2);
                    }
                }
            });
            // slide_ng[$id].lazy.load();
        });

    }

    // 老爆er说
    function swiper_lb(){
        $('.baoList').each(function(i){
            var $id = $(this).attr('data-id');if (!$id) return ;
            if (!slide_lb) slide_lb = {};
            if (typeof(slide_lb[$id])!='undefined' && slide_lb[$id]) {
                return ;
            }
            slide_lb[$id] = new Swiper('#baoList_'+$id,{
                lazy: true,
                slidesPerView: "auto",
                observer: true,
                observeParents: true,
                on:{
                    transitionEnd:function(swiper){
                        this.lazy.loadInSlide(this.activeIndex+1);
                    }
                }
            });
            // slide_lb[$id].lazy.load();
            // slide_lb[$id].lazy.loadInSlide(slide_lb[$id].activeIndex+1);
        });
    }
    // 日历
    function swiper_rili(){

        if (typeof(_data['loaded_rili'])!='undefined' && _data['loaded_rili']) {
            return false;
        }

        if ($('#riliTab01').is(':hidden')) return false;

        var riliTab01 = new Swiper("#riliTab01", {
            slidesPerView: "auto",
        });
        var riliList01 = new Swiper("#riliList01", {
            lazy: true,
            slidesPerView: "auto",
            normalizeSlideIndex:false,
            on:{
                transitionEnd:function(swiper){
                    riliBar(swiper);
                    this.lazy.loadInSlide(this.activeIndex+1);
                }
            }
        });
        // riliList01.lazy.load();
        // riliList01.lazy.loadInSlide(riliList01.activeIndex+1);

        var cur_i = $('#riliTab01 li.on').index();
        var cur_riliDataItem = $(".riliCon ul[data-item="+cur_i+"]").eq(0).index();
        riliList01.slideTo(cur_riliDataItem, 0);

        var riliTabLength = $('.riliTab li').length;
        $('.riliTab li').on('click',function(){
            var index=$(this).index();
            $(this).addClass('on').siblings().removeClass('on');
            subTitle(index);
            showTabli(index);
        });
        function showTabli(index){
            if(index >=3 && index<=(riliTabLength-1)){
                riliTab01.slideTo(index-2);
            }
            if(index<3){
                riliTab01.slideTo(0);
            };
            //列表切换
            if(index==0){
                riliList01.slideTo(0);
            }else{
                var riliDataItem = $(".riliCon ul[data-item="+index+"]").eq(0).index();
                riliList01.slideTo(riliDataItem);
            }
        }
        function riliBar(it){
            var itemIndex = $('.riliCon ul').eq(riliList01.activeIndex).data('item');
            if(itemIndex!=undefined && riliTabLength!=undefined){
                $('.riliTab li').eq(itemIndex).addClass('on').siblings().removeClass('on');
                subTitle(itemIndex);
                if(itemIndex<3){
                    riliTab01.slideTo(0);
                } else if (itemIndex >=3 && itemIndex<=(riliTabLength-2)) {
                    riliTab01.slideTo(itemIndex-2);
                } else {
                    riliTab01.slideTo(itemIndex);
                }
            }
        }

        function subTitle(itemIndex){
            $('.riliTab li').each(function(i){
                if ($(this).find('.item').length==2){
                    $(this).find('.item').hide().eq(0).show();
                    if (i == itemIndex){
                        $(this).find('.item').hide().eq(1).show();
                    }
                }

            });
            return false;
        }
    }

    // 加载更多
    var itemEnd = false;
    var loadding = false;

    function loadMore() {
        if (page_showmore == 0) return ;
        // loadding = true;
        if(!itemEnd && !loadding && (scrollTop + clientHeight > $('#loadtips').offset().top-30)) {
            loadding = true;
            var $loading = $('#loadtips');
            $loading.html('<span class="ico"></span><span>正在加载中...</span>').show();
            setTimeout(function(){
                loadding = false;
                $('#mainDiv>div:hidden').slice(0,10).show().find('img[lz_src]').attr('src',function(){return $(this).attr('lz_src')}).removeAttr('lz_src');

                if ($('#mainDiv>div:hidden').length==0) {
                    $loading.html('别撩啦，到底啦~ /(//•/ω/•//)//').show();
                    itemEnd = true;
                } else {
                    $loading.html('<span class="ico"></span><span>正在加载中...</span>').show();
                }

                swiper_rili();
                swiper_hr();

            },500);
        }
    }

    $(window).scroll(function(){
        scrollTop = getScrollTop();
        // 顶部浮动
        if (scrollTop>=$('#headwp').offset().top) {
            $('#headwp>div.headArea').addClass('fixed');
        } else {
            $('#headwp>div.headArea').removeClass('fixed');
        }

        // 返回顶部按钮
        if (scrollTop>clientHeight) {
            $('#gotop').show();
        } else {
            $('#gotop').hide();
        }

        loadMore();

    });

    // 外链弹窗
    $('#mainDiv a').click(function(){
        var href = $(this).attr('href');
        if(href && href.indexOf('//')!=-1){
            if ((href.indexOf('3839.com')==-1 && href.indexOf('onebiji.com')==-1) || href.indexOf('onebiji.com/hykb/card/')>-1) {
                toAppPop();
                return false;
            }
        }
    });

    if (is_ios){
        loadIosPop();
    }

    swiper_3h();
    swiper_hg();
    swiper_hr();
    swiper_ng();
    swiper_lb();
    swiper_rili();
    lzimg_load();

})();
(function(){
    $(document).on('click', '.coopTip', function() {
        if ($(this).find('.info').is(':hidden')) {
            $(this).find('.info').show();
        } else {
            $(this).find('.info').hide();
        }
    });

    function change_prom_game(skip_id, $btn_change){
        if (a_clicked('change_prom_game')) return false;
        a_clicked('change_prom_game', true);
        var prom_game_url = '/app/hykb_web_wap/api/home_prom_game.php?ac=show_home_prom_game';
        $.ajax({
            url:prom_game_url,
            data:{skip_id:skip_id},
            type:"post",
            dataType:"json",
            success:function(data){
                if (typeof(data)!=undefined && data) {

                    var $p = $btn_change.closest('.promgameDiv');
                    var $promgame_img = $p.find('.promgame_img');
                    var $card_game = $p.find('.promgame_game');
                    var $card_info = $p.find('.card-info');
                    var data_i = 0;
                    var div_i = $p.index('.promgameDiv');
                    $.each(data,function(i,v){
                        if (v['id']!=skip_id) {
                            data_i = i;
                            $p.show();
                            $p.find('.btn_change_promgame').attr('skip-id', v['id']);
                            $p.find('.promgame_img').html(v['card-img']);
                            $p.find('.promgame_game').html(v['card-game']);
                            $p.find('.card-info').html(v['card-info']);
                            return ;
                        }
                    });
                    //$('.promgameDiv').show();
                    var j = 0;
                    $.each($('.promgameDiv'),function(i){
                        if (i == div_i) return;
                        if (j == data_i) j++;
                        var v = data[j];
                        if (!v) return;
                        var $p2 = $('.promgameDiv').eq(i);
                        $p2.show();
                        $p2.find('.btn_change_promgame').attr('skip-id', v['id']);
                        $p2.find('.promgame_img').html(v['card-img']);
                        $p2.find('.promgame_game').html(v['card-game']);
                        $p2.find('.card-info').html(v['card-info']);
                    });

                    if ($promgame_img.find('.vidPlay').length) {
                        var d_index = $promgame_img.find('.vidPlay').data('d_index');
                        if (_data['click_vidplay'] == d_index) {
                            $promgame_img.find('.vidPlay').click();
                        }
                    }
                }
                a_clicked('change_prom_game', false);
            },
            error:function(){
                a_clicked('change_prom_game', false);
            }
        });
    }

    $('.btn_change_promgame').click(function(){
        var skip_id = $(this).attr('skip-id');
        change_prom_game(skip_id, $(this));
        return false;
    });

    if ($('.promgameDiv').eq(0).is(':hidden')) {
        change_prom_game('', $('.btn_change_promgame').eq(0));
    }
})();

(function(){
    $(document).click(function (e) {
        var $target = $(e.target);
        if (!$target.closest('.coopTip').length) {
            $('.coopTip .info').hide();
        }
    });

    // 分享
    wshare(share_title, share_desc, share_icon, window.location.href);
})();


