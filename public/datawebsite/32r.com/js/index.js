(function($){var defaluts={large_elem:'.large_elem',small_elem:'.small_elem',icon_elem:'.icon_elem',state:'on',speed:'normal',vis:4,autoplay:true,autotime:3000};$.fn.extend({'thumbnailImg':function(options){var opts=$.extend({},defaluts,options);return this.each(function(){var $this=$(this);var t=0;$(opts.large_elem).find('ul li').eq(0).show();$(opts.small_elem).find('ul li').eq(0).addClass(opts.state);$(opts.icon_elem).find('i').eq(0).addClass(opts.state);var l=$(opts.small_elem).find('ul li').length;var l_mean=0;var w=$(opts.small_elem).find('ul li').outerWidth(true);$(opts.small_elem).find('ul').css('width',l*w+'px');$(opts.small_elem).find('ul li').click(function(){$(this).addClass(opts.state).siblings().removeClass(opts.state);t=$(this).index();Img($(this).index())});function Img(i){$(opts.large_elem).find('ul li').eq(i).fadeIn().siblings().fadeOut();$(opts.small_elem).find('ul li').eq(i).addClass(opts.state).siblings().removeClass(opts.state);$(opts.icon_elem).find('i').eq(i).addClass(opts.state).siblings().removeClass(opts.state);var ml=i*w;if(ml<=l_mean*w){$(opts.small_elem).find('ul').stop().animate({marginLeft:-ml+'px'},opts.speed)}else{$(opts.small_elem).find('ul').stop().animate({marginLeft:-(l_mean*w)+'px'},opts.speed)}}if(opts.autoplay){var timing=setInterval(function(){t++;if(t>l-1){t=0}Img(t)},opts.autotime);$this.hover(function(){clearInterval(timing)},function(){timing=setInterval(function(){t++;if(t>l-1){t=0}Img(t)},opts.autotime)})}})}})})(jQuery);
$(document).ready(function () {
    $('img.lazy').lazyload({effect: 'show',threshold: 180});
    toggleOption('.tab_head1', '.tab_body1', 4, 'cur');
    toggleOption('.tab_head2', '.tab_body2', 3, 'on');
    toggleOption('.tab_head3', '.tab_body3', 3, 'cur');
    toggleOption('.tab_head4', '.tab_body4', 2, 'cur');
    toggleOption('.tab_head5', '.tab_body5', 3, 'cur');
    toggleOption('.tab_head6', '.tab_body6', 5, 'cur');
    toggleOption('.tab_head7', '.tab_body7', 4, 'cur');
    toggleOption('.tab_head8', '.tab_body8', 11, 'cur');
    toggleOption2('.tab_head9', 'span', '.tab_body9', 'cur', 2);

    $('#banner').thumbnailImg({
        large_elem: '.picBox',
        small_elem: '.listBox',
        icon_elem: '.icon',
    });

    $('.qrlist li').mouseenter(function(){
        var $obj = $(this).find('.qrimg');
        if($obj.find('img').length <= 0){
            $obj.append('<img src="'+$obj.attr('qimg')+'" class="two_img">');
        }
    });
    $('.mb6 .one_a').hover(function () {
        var $obj = $(this).prevAll('.hover_ewm');
        if($obj.find('img').length <= 0){
            $obj.append('<img src="'+$obj.attr('qimg')+'">');
        }
        $obj.show();
    },function(){
        $(this).prevAll('.hover_ewm').hide();
    })
    $('.h_part .p_mod .p_newtravel ul li').mouseenter(function () {
        $(this).children('.b_newtravel').show();
        $(this).siblings().find('.b_newtravel').hide();
    })
    $('.h_part .p_mod .p_newtravel ul li').mouseleave(function () {
        $(this).children('.b_newtravel').hide();
    })

    function toggleOption(tabhead, tabbody, length, classname) {
        if($(tabhead).length <= 0){
            return;
        }
        $(tabhead).each(function () {
            $(this).children().mouseenter(function () {
                if($(this).index() >= length){
                    return;
                }
                $(this).addClass(classname).siblings().removeClass(classname);
                $(tabbody).children().eq($(this).index()).show().siblings().hide();
            });
        });
    }
    function toggleOption2(tabhead, child, tabbody, classname, step) {
        if($(tabhead).length <= 0){
            return;
        }
        $(tabhead).each(function () {
            $(this).find(child).mouseenter(function () {
                $(this).addClass(classname).siblings(child).removeClass(classname);
                $(tabbody).children().eq($(this).index()/step).show().siblings().hide();
            });
        });
    }

    // 背景适配
    var pos1={left:0,width:'100px',height:'100px',top:0};var pos2={left:'120px',width:'76',height:'76',top:'12px'};var pos3={left:'216px',width:'66px',height:'66px',top:'17px'};var pos4={left:'282px',width:'40px',height:'40px',top:'30px'};var posTime=500;$('.dg-s-toggle').on('click','.dg-s-toggle-li',function(){$(this).addClass('cur').siblings().removeClass('cur');var i=$(this).index();if(i==1){$('.dg-s-toggle .dg-s-toggle-li').eq(i-1).animate({left:'-100px'},posTime,function(){$(this).css(pos4);$('.dg-s-toggle').append($(this))});$('.dg-s-toggle .dg-s-toggle-li').eq(i).animate(pos1,posTime);$('.dg-s-toggle .dg-s-toggle-li').eq(i+1).animate(pos2,posTime);$('.dg-s-toggle .dg-s-toggle-li').eq(i+2).animate(pos3,posTime)}else if(i==2){$('.dg-s-toggle .dg-s-toggle-li').eq(i-2).animate({left:'-100px'},posTime/2,function(){$(this).css(pos4);$('.dg-s-toggle').append($(this))});$('.dg-s-toggle .dg-s-toggle-li').eq(i-1).animate(pos1,posTime/2,function(){$(this).animate({left:'-100px'},posTime/2,function(){$(this).css(pos4);$('.dg-s-toggle').append($(this))})});$('.dg-s-toggle .dg-s-toggle-li').eq(i).animate(pos2,posTime/2,function(){$(this).animate(pos1,posTime/2)});$('.dg-s-toggle .dg-s-toggle-li').eq(i+1).animate(pos3,posTime/2,function(){$(this).animate(pos2,posTime/2)});$('.dg-s-toggle .dg-s-toggle-li').eq(i+2).animate(pos4,posTime/2,function(){$(this).animate(pos3,posTime/2)})}$('.dg-s-ul .dg-s-li').fadeOut().eq($(this).attr('data-id')).fadeIn()});
})