
var httphost	= window.location.host;
var protocol	= window.location.protocol;
var reportUrl = protocol+"//"+httphost+'/';
// 上线修改
var baseUrl = protocol+"//"+httphost+'/';
$(function(){
	//downbtn
    if ($('.downbtn').length > 0) {
        var obj = $('.downbtn');
        var id   = obj.attr('id');
        var type = obj.attr('type');

        var sys = 'and';
        var u = navigator.userAgent;
        u = u.toLowerCase();
        if (u.indexOf('iphone') > -1 || u.indexOf('ipad') > -1 || u.indexOf('ipod') > -1) {
            sys = 'ios';
        }

		if(returnCitySN.cname.indexOf('上海')>=0){
				obj.html('<a rel="nofollow" style="background:#ccc" href="javascript:" class="down_btn down">暂未上线</a>');
				if (sys == "ios") {
					$(".and_show").hide();
				}else {
					$(".ios_show").hide();
				}
				$(".downBtn_no").hide()
		}else{
			$.get(baseUrl + 'downs/detail/'+id+'/'+type+'/', function(res){
				var result = $.parseJSON(res);
				if (result.code == 1) {
					//view report
					$.getJSON(reportUrl + 'home/?callback=?&data='+ encodeURIComponent(JSON.stringify(result.data))+
						'&url='+encodeURIComponent(window.location.href));

					if (result.data[sys+'_url']) {
						if (sys == "ios") {
							$(".ios_text").text(result.data.ios_text)
							$(".and_pkgname").hide()
						}
						$(".downBtn_no").hide()
						
						if (sys == "and") {
							// add
							$(".downTips").hide()
						}

						obj.find(".down_upload_"+sys).show().click(function(){
							$.getJSON(reportUrl + 'home/?callback=?&data='+ encodeURIComponent(JSON.stringify(result.data))+'&sys='+sys);
							location.href = result.data[sys+'_url'];
						});
					}else{
						if (sys=="ios" && result.data['and_url']){
							$(".downBtn_no").hide()
							$(".down_upload_and").show().click(function(){
								$.getJSON(reportUrl + 'home/?callback=?&data='+ encodeURIComponent(JSON.stringify(result.data))+'&sys='+sys);
								location.href = result.data['and_url'];
							});
						}
					}
				}
			});
		}
    }

	if ($('.downztbtn').length > 0) {
        var obj = $('.downztbtn');
        var id   = obj.attr('id');
        var type = obj.attr('type');

        var sys = 'and';
        var u = navigator.userAgent;
        u = u.toLowerCase();
        if (u.indexOf('iphone') > -1 || u.indexOf('ipad') > -1 || u.indexOf('ipod') > -1) {
            sys = 'ios';
        }

		if(returnCitySN.cname.indexOf('上海')>=0){
				obj.html('<a rel="nofollow" style="background:#ccc" href="javascript:" class="down_btn down">暂未上线</a>');
				if (sys == "ios") {
					$(".and_show").hide();
				}else {
					$(".ios_show").hide();
				}
				$(".downBtn_no").hide()
		}else{
			$.get(baseUrl + 'downs/detail/'+id+'/'+type+'/', function(res){
				var result = $.parseJSON(res);
				if (result.code == 1) {
					//view report
					$.getJSON(reportUrl + 'home/?callback=?&data='+ encodeURIComponent(JSON.stringify(result.data))+
						'&url='+encodeURIComponent(window.location.href));

					if (result.data[sys+'_url']) {
						if (sys == "ios") {
							$(".ios_text").text("查看")
							$(".and_pkgname").hide()
						}
						$(".downBtn_no").hide()
						obj.find(".down_upload_"+sys).show().click(function(){
							$.getJSON(reportUrl + 'home/?callback=?&data='+ encodeURIComponent(JSON.stringify(result.data))+'&sys='+sys);
							location.href = result.data[sys+'_url'];
						});
					}else{
						$(".downBtn_no_"+sys).show()
					}
				}
			});
		}
    }
	
	
//ztdetail click 
 if ($('.ztxq_btn').length > 0) {
	$('.ztxq_btn').on('click', function () {

	    var obj = $(this);
		var uagent = navigator.userAgent;
		var andsystem   = uagent.indexOf("Android") > -1 || uagent.indexOf("Linux") > -1 ? true : false;
	    id = obj.attr('data_id');
	    type = obj.attr('type');
		if (type==1 && returnCitySN.cname.indexOf('上海') >= 0) {
	    	location.href = baseUrl + 'game/'+id+'.html';
	  	}else{
			$.get(baseUrl + 'downs/detail/'+ id + '/' + type + '/', function (res) {
				var result = JSON.parse(res);
				if (result.code == 1) {
				if (result.data['state'] != 2) {     
					if(andsystem) {   
						if (result.data['and_url']) {
							$.getJSON(reportUrl + 'home/?callback=?&data=' + encodeURIComponent(JSON.stringify(result.data)) + '&sys=and');
							location.href = result.data['and_url'];
						}else{
							if(type==1){
								location.href = baseUrl + 'game/'+id+'.html';
							}else{
								location.href = baseUrl + 'app/'+id+'.html';
							}
						}
					}else{
						if (result.data['ios_url']) {
							$.getJSON(reportUrl + 'home/?callback=?&data=' + encodeURIComponent(JSON.stringify(result.data)) + '&sys=ios');
							location.href = result.data['ios_url'];
						}else{
							if(type==1){
								location.href = baseUrl + 'game/'+id+'.html';
							}else{
								location.href = baseUrl + 'app/'+id+'.html';
							}
						}
					}
				}
				}
			});   
	  	}
	});
  }

  //ztdetail click 
 if ($('.wzxq_btn').length > 0) {
	$('.wzxq_btn').on('click', function () {
	    var obj = $(this);
		var uagent = navigator.userAgent;
		var andsystem   = uagent.indexOf("Android") > -1 || uagent.indexOf("Linux") > -1 ? true : false;
	    id = obj.attr('data_id');
	    type = obj.attr('type');
		if (type==1 && returnCitySN.cname.indexOf('上海') >= 0) {
	    	location.href = baseUrl + 'game/'+id+'.html';
	  	}else{
			$.get(baseUrl + 'downs/detail/' + id + '/' + type +'/', function (res) {
				var result = JSON.parse(res);
				if (result.code == 1) {
				if (result.data['state'] != 2) {     
					if(andsystem) {   
						if (result.data['and_url']) {
							$.getJSON(reportUrl + 'home/?callback=?&data=' + encodeURIComponent(JSON.stringify(result.data)) + '&sys=and');
							location.href = result.data['and_url'];
						}else{
							if(type==1){
								location.href = baseUrl + 'game/'+id+'.html';
							}else{
								location.href = baseUrl + 'app/'+id+'.html';
							}
						}
					}else{
						if (result.data['ios_url']) {
							$.getJSON(reportUrl + 'home/?callback=?&data=' + encodeURIComponent(JSON.stringify(result.data)) + '&sys=ios');
							location.href = result.data['ios_url'];
						}else{
							if(type==1){
								location.href = baseUrl + 'game/'+id+'.html';
							}else{
								location.href = baseUrl + 'app/'+id+'.html';
							}
						}
					}
				}
				}
			});   
	  	}
	});
  }

})


//360助手点击上报
$('.xz360_btn').click(function(){
    var url  = $(this).attr('href');
    $.get(baseUrl + 'downs/detail/'+id+'/'+type+'/', function(res){
        var result = JSON.parse(res);
        if (result.code == 1) {
            $.getJSON(reportUrl + 'home/?callback=?&data='+ encodeURIComponent(JSON.stringify(result.data))+
                '&adurl='+encodeURIComponent(url));
        }
    });
});

// current
$('.loadmenu').find('span').on('click',function(){
    $(this).addClass('current').siblings().removeClass('current');
})
$('.cornav').find('li').on('click',function(){
    $(this).addClass('current').siblings().removeClass('current');
})
$('.newnav').find('span').on('click',function(){
    $(this).addClass('current').siblings().removeClass('current');
})
$('nav').find('li').on('click',function(){
    $(this).addClass('current').siblings().removeClass('current');
})

// tab
$('.correla .cornav').find('li').on('click',function(){
    var times = $(this).index();
    $(this).addClass('current').siblings().removeClass('current');
    $(this).parents('.correla').find('.menubox').eq(times).show().siblings().hide();
})

$('.newnav').find('span').on('click',function(){
    var times = $(this).index();
    $(this).addClass('current').siblings().removeClass('current');
    $(this).parents('.indexnew').find('.newbox').eq(times).show().siblings().hide();
})
$('.newnav').find('span').on('click',function(){
    var times = $(this).index();
    $(this).addClass('current').siblings().removeClass('current');
    $(this).parents('.news').find('.tab_bot').eq(times).show().siblings().hide();
})

$('.ztnav').find('a').on('click',function(){
    $(this).addClass('current').siblings().removeClass('current');
})

// tags
function randomsort(a, b) {return Math.random() > .5 ? -1 : 1;}
var arr = ['#0091ff', '#f36e5d', '#e8d851', '#92cf67', '#47c1a8', '#ffab80','#35aba7', '#f98700', '#a286c0', '#ebcda7', '#81a0d7', '#e4697d','#d2bdc4', '#91adb9', '#acb0d5', '#ed9d60', '#f46060', '#be7763','#26a69a', '#f3b18e', '#92cf67', '#36b1c0', '#b27cda', '#ffab80', '#f26d7e', '#66bb6a', '#47c1a8','#ffb230', '#df88ab', '#a1a8e7', '#4dd0e1', '#64b5f6', '#ffb300', '#ce93d8', '#f46060','#619cc2', '#9971e2', '#619cc2', '#47c1a8','#ff9a98', '#ff7573', '#4d90ba', '#5bc3af','#9971e2', '#619cc2', '#47c1a8', '#ff9a98',];
var arr1 = arr.sort(randomsort);
$('.goodgame ul li .tags span').each(function() {
	var index = $(this).index();
	$(this).attr('style', 'background-color:' + arr1[index] + ';color:#fff');
});
var arr2 = arr.sort(randomsort);
$('.maxgame ul li .tags span').each(function() {
	var index = $(this).index();
	$(this).attr('style', 'background-color:' + arr2[index] + ';color:#fff');
});

var arr = arr.sort(randomsort);
$('.hotTag ul').children('li').each(function () {
	 var index = $(this).index();
	 $(this).children('a').attr('style', 'background-color:' + arr[index] + ';border-color:' + arr[index]);
 });

 var arr4 = arr.sort(randomsort);
$('.xyTags').children('a').each(function () {
	 var index = $(this).index();
	 $(this).attr('style', 'color:' + arr[index]);
})
	 
if ($('.loaddetail').length > 0) {
	var BtnTop = $('.loaddetail .cont').offset().top;
	$(window).scroll(function() {
		var wTop = $(window).scrollTop();
		if (wTop >= BtnTop) {
			$('.fixedDown').removeClass('hide');
		} else {
			$('.fixedDown').addClass('hide');
		}
	});
 }


if($(".swiper-container").length>0){
    var mySwiper = new Swiper('.swiper-container',{
        autoplay: {
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
}

// huan
//代表第一次换的是第二组
var listitem = 2;
//这是要换的批数
var listitemMax = 5;
$(".huan").on('click', function () {
    $(this).css("transform", "rotate(360deg)");
    $(this).css("transition", "all 0.5s ease-in-out");
    var z = $(this);
    setTimeout(function () {
        $(z).css("transform", "");
        $(z).css("transition", "");
    }, 500);
    $(".listItem" + listitem).siblings("li").css("display", "none");
    $(".listItem" + listitem).css("display", "block");
    if (listitem < listitemMax) {
        listitem++;
    } else {
        listitem = 1;
    }
});

// 换一批
//代表第一次换的是第二组
var listbox = 2;
//这是要换的批数
var listboxMax = 5;
$(".huan2").on('click', function () {
    $(".listbox" + listbox).siblings("li").css("display", "none");
    $(".listbox" + listbox).css("display", "block");
    if (listbox < listboxMax) {
        listbox++;
    } else {
        listbox = 1;
    }
});

$(".loadmenu>span").on("click", function () {
    if($(".show_img").length>0){
        var h1 = $(".show_img").offset().top;
    }
    if($(".nRecGame").length>0){
        var h2 = $(".nRecGame").offset().top;
    }
    if($(".tenTop").length>0){
        var h3 = $(".tenTop").offset().top;
    }
    if($(".included").length>0){
        var h4 = $(".included").offset().top;
    }
    if ($(this).hasClass("options_detail")) {
        $("html,body").animate({scrollTop: h1}, 800)
    } else if ($(this).hasClass("options_recommend")) {
        $("html,body").animate({scrollTop: h2}, 800)
    } else if ($(this).hasClass("options_top")) {
        $("html,body").animate({scrollTop: h3}, 800)
    } else if ($(this).hasClass("options_good")) {
        $("html,body").animate({scrollTop: h4}, 800)
    }
})

if ($('#detailCont').length>0) {
	$('#detailCont').css('height', 'auto');
	$('.drawer span').remove();
	$('.drawer .linear').remove();	
};
// 展开收起
$(window).on("load",function(){

    $('.gamenav .title em').on('click', function() {
        if ($('.title em').html() == '展开全部<i class="icon up"></i>') {
            $(this).html('收起分类<i class="icon down"></i>');
            $('.gamenav>ul').css('height', 'auto');
        } else {
            $(this).html('展开全部<i class="icon up"></i>');
            $('.gamenav>ul').css('height', '4.6rem');
        }
    })
})
$(document).ready(function () {
    $(".nodownload").click(function () {
        modal.style.display = "block";   //显示弹出层
    })
    $("#closebtn").click(function () {
        modal.style.display = "none";   //隐藏弹出层
    })
    $(".unlike").click(function () {
        modal2.style.display = "block";   //显示弹出层
    })
    $("#closebtn2").click(function () {
        modal2.style.display = "none";   //隐藏弹出层
    })
    $(".unlikebtn").click(function () {
        modal2.style.display = "none";   //隐藏弹出层
    })
    $(".dontlike>p").click(function () {
        modal2.style.display = "none";   //隐藏弹出层
        alert("将为您减少此类内容")
    })
})

// 导航栏滑动
var liLength = $("nav li.current").index();
liLength += 1;
if (liLength > 4) {
    $('nav ul').scrollLeft(parseInt($("nav li").width()) * liLength);
} else {
    $('nav ul').scrollLeft(0);
}


// flink
var linkHtml = $('#fLink').html();
if ($('#fLink').height() > 30) {
	var box = document.getElementById("fLink"),can = true;
  	var html = document.getElementsByTagName('html')[0];
  	var fsize = 0.5 * parseInt(html.style.fontSize);
  	var ht = 0.5 * parseInt(html.style.fontSize);
  	var flh = parseInt($('#fLink').height());
  	if (flh > fsize) {
  		$('#fLink').css('height', fsize);
  		box.innerHTML += box.innerHTML;
  		box.onmouseover = function() {can = false};
  		box.onmouseout = function() {can = true};
  		new function() {
  			var stop = box.scrollTop % ht == 0 && !can;
  			if (!stop) box.scrollTop == parseInt(box.scrollHeight / 2) ? box.scrollTop = 0 : box.scrollTop++;
  			setTimeout(arguments.callee, box.scrollTop % ht ? 30 : 1500);
  		};
  	}
} else {$('#fLink').html(linkHtml);}
// tanceng
function hdNav() {
	var bodyH = $('body,html').height();
	var headerH = $('header').height();

	if ($('.hdNav').css('display') === 'none') {
		$('header .hdMenu').find('i').addClass('hdColor');
		$('.hdNav').show();
		$('.hdNav').find('.mask').css('height', bodyH - headerH);
	} else {
		$('header .hdMenu').find('i').removeClass('hdColor');
		$('.hdNav').hide();
	}
}

// 搜索
	$('#closeTxt').on('click', function() {
		$(this).siblings('#searchKey').val('');
		clearInterval(searchzidong);
	});
	
	var baseurl = $.trim($("#baseUrl").val());
	var keyword = $.trim($("#searchKey").val());
	//搜索轮播
	var searchTxt = 0;
	function searchRun() {
		searchTxt++;
		if (searchTxt >= $('.search_ul_txt li').length) {
			searchTxt = 0;
		};
		searchSlider();
	};
	
	function searchSlider() {
		$(".search_ul_txt").find("li").eq(searchTxt).show().siblings().hide();
		$('.search_txt .text').val($(".search_ul_txt").find("li").eq(searchTxt).text());
	};
	var searchzidong = setInterval(searchRun, 2500);
	if (keyword) {
		clearInterval(searchzidong);
		$('.search_txt .text').val(keyword);
	} else {
		$('.search_txt .text').val($(".search_ul_txt").find("li").eq(0).text());
	}
	$(".search_txt input").focus(function() {
		clearInterval(searchzidong);
	});
	//动态搜索
	function liftSearch() {
		var keyword = $.trim($("#searchKey").val());
		var baseurl = $.trim($("#baseUrl").val());
		if (keyword) {
			$.ajax({
				url: baseurl + 'search/search/',
				type: 'POST',
				data: {
					keyword: keyword
				},
				success: function(data) {
					$('.search_wrap').hide();
					$('.search_list_wrap_div').show();
					$('.search_list_wrap').html(data);
				}
			});
		} else {
			$('.search_wrap').show();
		}
	}
	//点击搜索
	$('#dosearch').click(function() {
		var keyword = $("#searchKey").val();
		if (keyword) {window.location.href = baseurl + 'search/?key=' + encodeURI(keyword);}
	});
	
	$(document).keyup(function(event) {
		if (event.keyCode == 13) {$('#dosearch').click();}
	});
	
	$('#search_more').click(function() {
		var more = $(this);
		var baseurl = $.trim($("#baseUrl").val());
		var keyword = $.trim($("#searchKey").val());
		var page = parseInt($(this).attr('page'));
		var totpage = parseInt($(this).attr('totpage'));
		$.ajax({
			url: baseurl + 'search/',
			type: 'get',
			data: {
				key: keyword,
				page: page
			},
			success: function(res) {
				$('.search_list_wrap2').append(res);
				more.attr('page', page + 1);
				if (page + 1 >= totpage) {
					more.remove();
				}
			}
		});
	});
	
	$(".serMore").click(function() {
		$(".loadingMore").show();
		$(".serMore").hide();
	
		let openserver_time = $("input[name='openserver_time']").val();
	
		if(openserver_time){
			$.ajax({
				url: '/kaice/getMoreData',
				type: 'POST',
				data: {
					openserver_time: openserver_time
				},
				success: function(res) {
					$(".loadingMore").hide();
					res = $.parseJSON( res );
					if(res.code==200){
						$("input[name='openserver_time']").val(res.data.nextTime)
						$(".serMore").show();
						let html ='<div class="todaySerNext"><div class="serTit"><span><i class="ico"></i></span>';
						$(res.data).each(function(k,v) {
							html +='<p><i></i>'+v.showTime+'</p></div><ul>';
							for (let i = 0;i< v.data.length;i++){
								html +='<li>';
								html +='<div class="blankQuan"><i class="ico"></i></div>';
								html +='<a href="'+v.data[i].game_url+'" title="'+v.data[i].name+'">';
								html +='<img src="'+v.data[i].image_icon+'" alt="'+v.data[i].name+'">';
								html +='<div class="info fx_gw">';
								html +='<p class="name"><span>'+v.data[i].name+'</span><i class="ico '+v.data[i].system_info+'"></i></p>';
								html +='<p>'+v.data[i].show_openserver_time+'</p>';
								html +='<p>'+v.data[i].server_name+'</p>';
								html +='</div>';
								html +='</a>';
								html +='<a href="'+v.data[i].game_url+'" class="btn" title="'+v.data[i].show_info+'">'+v.data[i].show_info+'</a>';
								html +='</li>';
							}
						})
						html +='</ul></div>';
	
						$(".addTodaySerNext").append(html)
					}else{
						//没有数据
						$(".noMore").show();
					}
				}
			});
		}
	})

//20240418 start
if($(".shareZt").length>0){
	var shareZtSwiper = new Swiper('.shareZt ',{
		slidesPerView: "auto",
	});
}

$('.tabMenu').find('span').on('click', function () {
	var times = $(this).index();
	$(this).addClass('current').siblings().removeClass();
	$(this).parents('.tabBox').find('.subBox').eq(times).show().siblings().hide();
});

//20240418 end