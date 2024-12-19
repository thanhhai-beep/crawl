// JavaScript Document
/* focus */
(function(d,D,v){d.fn.responsiveSlides=function(h){var b=d.extend({auto:!0,speed:1E3,timeout:7E3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!1,prevText:"Previous",nextText:"Next",maxwidth:"",controls:"",namespace:"rslides",before:function(){},after:function(){}},h);return this.each(function(){v++;var e=d(this),n,p,i,k,l,m=0,f=e.children(),w=f.size(),q=parseFloat(b.speed),x=parseFloat(b.timeout),r=parseFloat(b.maxwidth),c=b.namespace,g=c+v,y=c+"_nav "+g+"_nav",s=c+"_here",j=g+"_on",z=g+"_s",
o=d("<ul class='"+c+"_tabs "+g+"_tabs' />"),A={"float":"left",position:"relative"},E={"float":"none",position:"absolute"},t=function(a){b.before();f.stop().fadeOut(q,function(){d(this).removeClass(j).css(E)}).eq(a).fadeIn(q,function(){d(this).addClass(j).css(A);b.after();m=a})};b.random&&(f.sort(function(){return Math.round(Math.random())-0.5}),e.empty().append(f));f.each(function(a){this.id=z+a});e.addClass(c+" "+g);h&&h.maxwidth&&e.css("max-width",r);f.hide().eq(0).addClass(j).css(A).show();if(1<
f.size()){if(x<q+100)return;if(b.pager){var u=[];f.each(function(a){a=a+1;u=u+("<li><a href='#' class='"+z+a+"'>"+a+"</a></li>")});o.append(u);l=o.find("a");h.controls?d(b.controls).append(o):e.after(o);n=function(a){l.closest("li").removeClass(s).eq(a).addClass(s)}}b.auto&&(p=function(){k=setInterval(function(){var a=m+1<w?m+1:0;b.pager&&n(a);t(a)},x)},p());i=function(){if(b.auto){clearInterval(k);p()}};b.pause&&e.hover(function(){clearInterval(k)},function(){i()});b.pager&&(l.bind("click",function(a){a.preventDefault();
b.pauseControls||i();a=l.index(this);if(!(m===a||d("."+j+":animated").length)){n(a);t(a)}}).eq(0).closest("li").addClass(s),b.pauseControls&&l.hover(function(){clearInterval(k)},function(){i()}));if(b.nav){c="<a href='#' class='"+y+" prev'>"+b.prevText+"</a><a href='#' class='"+y+" next'>"+b.nextText+"</a>";h.controls?d(b.controls).append(c):e.after(c);var c=d("."+g+"_nav"),B=d("."+g+"_nav.prev");c.bind("click",function(a){a.preventDefault();if(!d("."+j+":animated").length){var c=f.index(d("."+j)),
a=c-1,c=c+1<w?m+1:0;t(d(this)[0]===B[0]?a:c);b.pager&&n(d(this)[0]===B[0]?a:c);b.pauseControls||i()}});b.pauseControls&&c.hover(function(){clearInterval(k)},function(){i()})}}if("undefined"===typeof document.body.style.maxWidth&&h.maxwidth){var C=function(){e.css("width","100%");e.width()>r&&e.css("width",r)};C();d(D).bind("resize",function(){C()})}})}})(jQuery,this,0);

$(function() {
    $(".f580x265").responsiveSlides({
        auto: true,
        pager: true,
        nav: true,
		timeout: 5000,
        speed: 700
    });
});
$(function() {
    $(".f600x").responsiveSlides({
        auto: true,
        pager: true,
        nav: true,
		timeout: 5000,
        speed: 700
    });
});
/* focus over */
/***************************************************/
$(document).ready(function(){
	
	//site_map
	$('.top_map').click(function(){
		if($('.map_con').is(':hidden')){
			$('.top_map').css({'background':'#000','color':'#fff'});
			$('.map_con').show();	
		}
		else{
			$('.top_map').css({'background':'#eee','color':'#666'});
			$('.map_con').hide();
		}
	})
	
	//float_nav
	function float_nav(dom){
		var right_nav=$(dom);
		var nav_height=right_nav.height();
		function right_nav_position(bool){
			var window_height=$(window).height();
			var nav_top=(window_height-nav_height)/2;
			if(bool){
				right_nav.stop(true,false).animate({top:nav_top+$(window).scrollTop()},400);
			}else{
				right_nav.stop(true,false).animate({top:nav_top},300);
			}	
			right_nav.show();
		}
		
		if(!+'\v1' && !window.XMLHttpRequest ){
			$(window).bind('scroll resize',function(){
				if($(window).scrollTop()>300){
					right_nav_position(true);			
				}else{
					right_nav.hide();	
				}
			})
		}else{
			$(window).bind('scroll resize',function(){
				if($(window).scrollTop()>300){
					right_nav_position();
				}else{
					right_nav.hide();
				}
			})
		}	
	}
	float_nav('#float');
	$('.float_nav a').click(function(){
		$('.float_nav a').removeClass('hover');
		$(this).addClass('hover');	
	})

	//标签云	
	$(".hotTags a").each(function(){
		var x = 9;
		var y = 0;
		var rand = parseInt(Math.random() * (x - y + 1) + y);
		$(this).addClass("size_" + rand);
	});
	
	/*newest_tab*/
	$('.newest_tab a').click(function(){
		index = $('.newest_tab a').index($(this));
		$('.newest_tab a').removeClass('on');
		$(this).addClass('on');
		$('.newest').hide();
		$('.newest').eq(index).show();
	})
	
	/*info_tab*/
	$('.que_tit li:not(".que_skip")').click(function(){
		$('.que').show();
		$('.que_swap').html('');
		$('.que_on').removeClass();
		$(this).addClass('que_on');
		x = $('.que_tit li').index($(this));		
		html = $('.que').eq(x).html();
		$('.que_swap').html(html);
		$('.que').eq(x).hide();		
	})
	/*to_down*/
	$('#to_down').click(function(){
		var top = $('#btn_info').offset().top + 'px';
		$("html,body").animate({scrollTop:top}, 100);
	})
	/*version_tab*/
	$('.version_tab li').live('click', function(){
		index = $('.version_tab li').index($(this));
		$('.version_tab li').removeClass('on');
		$(this).addClass('on');
		$('.version_con').hide();
		$('.version_con').eq(index).show();
	})
	$('.version_tab0628 li').live('click', function(){
		index = $('.version_tab0628 li').index($(this));
		$('.version_tab0628 li').removeClass('on');
		$(this).addClass('on');
		$('.version_con0628 li:not(.version_ad)').hide();
		$('.version_con0628 li').eq(index).show();
	})
	
	
	/*tit_tab*/
	$('.more em').click(function(){
		more = $(this).parent();
		main = $(this).parent().parent().parent();
		index = more.children('em').index($(this));
		more.children('em').removeClass('on');
		$(this).addClass('on');
		main.children('.app_bang').hide();
		main.children('.app_bang').eq(index).show();
	})
	/*tag_cloud*/
	/*var tag_color = ["tag_c1","tag_c2","tag_c3","tag_c4","tag_c5","tag_c6","tag_c7","tag_c8","tag_c9","tag_c10","tag_c11"];
	
	$('.tag_cloud a').each(function(){
		tag_class = tag_color[Math.floor(Math.random() * tag_color.length)];
	    $(this).addClass(tag_class);
    });*/
	
	/*news_pic*/
	$('.news_pic img').each(function(index, element) {
        var img = $(this);
		var w;
		var h;
		var div = img.parent();
		var dw = div.width();
		var dh = div.height();
		$('<img/>').attr('src', $(img).attr("src")).load(function() {
			w = this.width;
			h = this.height;
			if(w/h > dw/dh){
				img.css('height', dh + 'px');
				nw = (dh / h) * w;
				img.css('width', nw + 'px');
				img.css('margin-left', -((nw - dw) / 2) + 'px');
			}else{
				img.css('width', dw + 'px');
				nh = (dw / w) * h
				img.css('height', nh + 'px');
				img.css('margin-top', -((nh - dh) / 2) + 'px');
			}
		});		
    });
	
	/*tip_roll*/
	li_num = $('.troll_list_content li').length;
	$('.troll_list_content').append($('.troll_list_content').html());
	ul_width = 286 * li_num * 2;
	$('.troll_list_content').css('width', ul_width + 'px');
	$('.troll_list_content').css('margin-left', -1 * ul_width / 2 + 'px');
	if(!$('.tip_next').is(':animated')){
		if(ul_width>1146){
			$('.tip_next').click(function(){
				m = parseInt($('.troll_list_content').css('margin-left'));
				$('.troll_list_content').animate({marginLeft:'-=1144px'},function(){
					m = parseInt($('.troll_list_content').css('margin-left'));
					if(m<=-ul_width / 2){
						$('.troll_list_content').css('margin-left', m + (ul_width / 2) + 'px');
					}
				});	
			})
		}
	}
	if(!$('.tip_prev').is(':animated')){
		if(ul_width>1146){
			$('.tip_prev').click(function(){
				m = parseInt($('.troll_list_content').css('margin-left'));
				$('.troll_list_content').animate({marginLeft:'+=1144px'},function(){
					m = parseInt($('.troll_list_content').css('margin-left'));
					if(m>-1144){
						$('.troll_list_content').css('margin-left',m - (ul_width / 2) + 'px');
					}
				});	
			})
		}
	}
	
	/*toplist_more*/
	$('.toplist_more').click(function(){
		$('.top_list').css('height','auto');
	})
	
	/*pc_menu*/
	$('.pcv_all').click(function(){
		if($('.map_con2').is(':hidden')){
			$('.pcv_all').css({'background':'#000','color':'#fff'});
			$('.map_con2').show();	
		}
		else{
			$('.pcv_all').css({'background':'#eee','color':'#666'});
			$('.map_con2').hide();
		}
	})
	
	/*dot_list*/
	$('.d_next').click(function(){
		n = $('.d_dot').index($('.dot_on'));
		$('.dot_on').removeClass('dot_on');
		$('.dot_con').hide();
		if(n==2){
			$('.d_dot').eq(0).addClass('dot_on');
			$('.dot_con').eq(0).show();
		}else{
			$('.d_dot').eq(n+1).addClass('dot_on');
			$('.dot_con').eq(n+1).show();
		}
	})
	$('.d_prev').click(function(){
		n = $('.d_dot').index($('.dot_on'));
		$('.dot_on').removeClass('dot_on');
		$('.dot_con').hide();
		if(n==0){
			$('.d_dot').eq(2).addClass('dot_on');
			$('.dot_con').eq(2).show();
		}else{
			$('.d_dot').eq(n-1).addClass('dot_on');
			$('.dot_con').eq(n-1).show();
		}
	})
	$('.d_dot').click(function(){
		n = $('.d_dot').index($(this));
		$('.dot_on').removeClass('dot_on');
		$('.dot_con').hide();
		$('.d_dot').eq(n).addClass('dot_on');
		$('.dot_con').eq(n).show();
		
	})
	/*brand_pop*/
	$('.brand_pop').click(function(){
		if($('.rom_brand_other').is(':visible')){
			$('.rom_brand_other').hide();
		}else{
			$('.rom_brand_other').show();
		}
	})
	
	/*topics*/
	$('.set_prev').click(function(){
		ul = $(this).siblings('ul');
		ml = parseInt(ul.css('margin-left'));	
		if(ml < 0){
			if(ml>-550){
				ml = 0;
			}else{
				ml = ml + 550;
			}
			ul.animate({'margin-left':ml + 'px'});
		}
		
		
	})
	$('.set_next').click(function(){
		ul = $(this).siblings('ul');
		ul_w = ul.width();
		ml = parseInt(ul.css('margin-left'));
		if((ml - 550) >  -ul_w){
			if(ml - 1100 < -ul_w){
				ml = -ul_w + 550 + 22;
			}else{
				ml = ml - 550;
			}	
			ul.animate({'margin-left':ml + 'px'})
		}
	})
	
	/*tab_pc*/
	$('.tab_box em').click(function(){
		index = $('.tab_box em').index($(this));
		$('.tab_box em').removeClass('on');
		$(this).addClass('on');	
		$('.tab_con').hide();
		$('.tab_con').eq(index).show();
	})
	
	$('.crj_tab li').click(function(){
		index = $('.crj_tab li').index($(this));
		$('.crj_tab li').removeClass('crj_on');
		$(this).addClass('crj_on');
		$('.crj_con').hide();
		$('.crj_con').eq(index).show();
	})
	
	/*android_safe*/
	$('.safe_tip').hover(function(){
			$('.safe_pop').show();	
		},function(){
			$('.safe_pop').hide();
	})
	
	/*鍘嗗彶鐗堟湰*/
	$('.vh_more').click(function(){		
		if($(this).next().is(':hidden')){
			$('.vh_info').hide();
			$(this).next().show();
		}else{
			$(this).next('.vh_info').hide();
		}
	})
	
	$('.vh_more2').click(function(){
		if($(this).html() == '更多...'){
			$(this).prev().children().children().children().children().children('p').css('height','auto');
			$(this).html('收起...');
		}else{
			$(this).prev().children().children().children().children().children('p').css('height','40px');	
			$(this).html('更多...');
		}
	})
	$('.bang_soar li').hover(function(){
		$(this).css('background','#f4f4f4');
		$(this).children().children('.btn_apk').show();	
	},function(){
		$(this).css('background','#fff');
		$(this).children().children('.btn_apk').hide();	
	})
	//data
	$('.data_more').click(function(){
		if($(this).html()=='展开∨'){
			$(this).parent().next('dd').css('height','auto');
			$(this).html('收起&and;');
		}else{
			$(this).parent().next('dd').css('height','80px');
			$(this).html('展开&or;');
		}
	})	
	/*20220525*/
	$('.btn_app2022 i').hover(function(){
		var url = $('#url').val();
		$('#code').qrcode({width: 105,height: 105,text: url}).show();
	},function(){
		$('#code').hide().html("");	
	})
	$('.set_btn').append("<span>手机扫码下<span></span>载</span><div class=\"d_app\">查看详情</div>");
	$('.set_btn').each(function(index,value){
		id = $(this).find(".app_url").val();
		$(this).find(".d_app").attr("data-id",id);
	})
	//20221018
	//down_apk
	$('.d_app').click(function(){		
		id = $(this).data('id');		
		href = 'https://www.liqucn.com/'+id;
		$('#qd').attr('href', href);
		document.getElementById("qd").click();
	})
	
})
/*jt_focus*/
function isImgLoad(){	
	$('.f600x li img').each(function(){
        if(this.height === 0){
            t_img = setTimeout(function(){
	            isImgLoad(); 
	        },100);
			return false;
        }else{
			w = this.width;
			h = this.height;
			clearTimeout(t_img);
			if(w > h){
				$('.f600x').parent().css('height','337px');
				$('.f600x').css('height','337px');
				$('.f600x li img').css('height','337px');
				$('.pcjt_bg').addClass('bg_heng');
			}else{
				$('.f600x').parent().css('height','566px');
				$('.f600x').css('height','566px');
				$('.f600x li img').css('height','566px');
				$('.rslides_nav').css('top','250px');
				$('.pcjt_bg').addClass('bg_shu');
			}
			return false;
		}
    });
}
t_img = setTimeout(function(){
	isImgLoad(); 
},100);
$(function(){
	/*topics*/
	photosLoad();
});
function photosLoad(){
	$('.set_pic ul li img').each(function(){
        if($(this).width === 0){
            t_img = setTimeout(function(){
	            photosLoad();
	        }, 10);
			return false;
        }else{
            clearTimeout(t_img);
			return false;
		}
    });
}
function decode_str(t){
	var arr = t.split('n');var res = '';
	for(a = 0;a<arr.length;a++) {
		if(arr[a]=="")	continue
		h = String.fromCharCode(parseInt(arr[a],16));res += h;
	}
	return res;
}