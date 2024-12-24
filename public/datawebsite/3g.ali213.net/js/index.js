window.onload = function () {
    var indexSwiper = new Swiper('.index-swiper', {
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true,
        roundLengths: true, //防止文字模糊
    });

    var bannerSwiper = new Swiper('.banner-swiper', {
        pagination: '.banner-pagination',
        paginationClickable: true,
        loop: true,
        autoplay: 5000,
        autoplayDisableOnInteraction: false
    });
    var hotSwiper = new Swiper('.hot-swiper', {
        slidesPerView: 'auto',
        // slidesPerColumn: 2,
        // mousewheelControl: true,
        freeMode: true,
        roundLengths: true, //防止文字模糊
    });
}


$('.toggle-ul').on('click', 'span', function () {
    if (!$(this).hasClass('checked')) {
        $(this).parent().find('span').removeClass('checked').eq($(this).index()).addClass('checked');
        $(this).parent().next().find('.toggle-li').hide().eq($(this).index()).show();
    }
});


// 游戏销量切换
$('.rank-toggle').on('click', 'span', function () {
    if (!$(this).hasClass('checked')) {
        var i = $(this).index();
        $('.rank-toggle span').removeClass('checked').eq(i).addClass('checked');
        if (i == 0) {
            $('.game-ranking').show();
            $('.sell-ranking').hide();
        } else {
            $('.game-ranking').hide();
            $('.sell-ranking').show();
        }
    }
});

if (phoneos == 'ios') {
    $('.game-down-container').eq(0).hide();
    $('.game-down-container').eq(1).show();
} else {
    $('.game-down-container').eq(0).show();
    $('.game-down-container').eq(1).hide();
}
$('#sydown').attr('href', '//app.ali213.net/' + phoneos + '/');