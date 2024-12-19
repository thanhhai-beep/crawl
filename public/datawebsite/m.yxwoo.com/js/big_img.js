$(function () {
    function pig_img() {
        //大图展示
        $("body").append('<div class="big_img_mb"></div> <div class="big_img_wrap"><div class="swiper-container" id="Gm-big-pic"><div class="swiper-wrapper"></div> </div> </div>')
        var swiper_box = ''
        $("#Gm-big-pic").css("height", "100%");
        // var img_tru = false;
        var data_img = 0;
        $('.detaile_cont  p').each(function () {
            var p_img = $(this).children("img");
            if (p_img) {
                if(p_img.attr("data-original")){
                    var src = p_img.attr("data-original");
                }else{
                    var src = p_img.attr("src");
                }
                if (src != undefined) {
                    p_img.attr('data-img', data_img++);
                    swiper_box += '<div class="swiper-slide"><div class="swiper-zoom-container"><img src="' + src + '" alt=""></div></div>'
                }
            }
        });
        // var img_list = $('#Gm-pic .swiper-wrapper .swiper-slide').clone();
        $('#Gm-big-pic .swiper-wrapper').append(swiper_box);
        var mySwiper2;
        $('.detaile_cont p > img').click(function () {
            var img_index = $(this).attr('data-img');
            $('.big_img_mb ,.big_img_wrap').fadeIn();
            mySwiper2 = new Swiper('#Gm-big-pic', {
                preventClicks: false,
                zoom: true,
                on: {
                    click: function () {
                        $('.big_img_mb ,.big_img_wrap').fadeOut();
                        mySwiper2.zoom.out();
                    },
                    slideChange: function () {
                        mySwiper2.zoom.out();
                    },
                }
            });
            mySwiper2.zoom.out();
            mySwiper2.slideTo(img_index, 100, false);
        });
        $('.big_img_mb,.big_img_wrap').click(function () {
            $('.big_img_mb ,.big_img_wrap').fadeOut();
        })
    }
    pig_img();
	
	
    //合集的放大
    function pig_img2() {
        //大图展示
        $("body").append('<style> .big_img_mb2{display: none; width: 100%; height: 100vh; position: fixed; z-index: 20186; left: 0; top: 0; background: rgba(0, 0, 0, 0.5);} .big_img_wrap2{display: none; position: fixed; left: 0; top: 0; z-index: 201822; width: 100%; margin: 0 auto; height: 100vh;} #Gm-big-pic2{width: 100%; height: 80%; overflow: hidden;} #Gm-big-pic2 img{width: auto; height: auto; max-height: 100%; border-radius: 0.2rem; min-width: initial; max-width: 96%; margin: 0 2%;} .big_img_wrap2 .big_img_top{position: fixed; width: 100%; height: 36px; line-height: 36px; font-size: 14px; left: 0; top: 10px; z-index: 201823; display: flex;} .big_img_wrap2 .big_img_top .img_num{flex: 1px; text-align: center; color: #fff; font-weight: bold;} .big_img_wrap2 .big_img_top .img_src{width: 90px; height: 30px; line-height: 30px; color: #0de8fb; border: 1px solid #0de8fb; text-align: center; margin-right: 5px;} </style><div class="big_img_mb2"></div> <div class="big_img_wrap2"><div class="swiper-container" id="Gm-big-pic2"><div class="swiper-wrapper"></div> </div> </div>')
        var swiper_box2 = ''
        $("#Gm-big-pic2").css("height", "100%");
        var data_img = 0;
        $('.hj_swiper .swiper-slide img').each(function () {
            var p_img = $(this)
            if (p_img) {
                if(p_img.attr("data-original")){
                    var src = p_img.attr("data-original");
                }else{
                    var src = p_img.attr("src");
                }
                if (src != undefined) {
                    p_img.attr('data-img', data_img++);
                    swiper_box2 += '<div class="swiper-slide"><div class="swiper-zoom-container"><img src="' + src + '" alt=""></div></div>'
                }
            }
        });
        $('#Gm-big-pic2 .swiper-wrapper').append(swiper_box2);
        var mySwiper3;
        $('.hj_swiper .swiper-slide img').click(function () {
            var img_index = $(this).attr('data-img');
            $('.big_img_mb2 ,.big_img_wrap2').fadeIn();
            if (!mySwiper3) {
                mySwiper3 = new Swiper('#Gm-big-pic2', {
                    preventClicks: false,
                    zoom: { toggle: false },
                    on: {
                        click: function () {
                            update_();
                        },
                    }
                });
            }
            mySwiper3.slideTo(img_index, 100, false);
        });
        function update_() {
            $('.big_img_mb2 ,.big_img_wrap2').fadeOut();
            mySwiper3.zoom.out();
        }
    }
    pig_img2()

	

})