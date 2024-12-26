$(function() {
	if (typeof(pageAttr) == "undefined") {
		return false
	}
	allJs.init(); //启动
}) 
var loading = false;
var allJs = { //首页JS
	init: function() {
		// 点击展示菜单
		function handler() { event.preventDefault();}
		var h=$(window).height(); //屏幕高度
		  $(".burger").css("height",h+"px")
		  //点击显示隐藏
		  var x=true;
		  $("#top>div>span").click(function(){
			  var Htop=$("body").scrollTop();
			  if(x){
				  $(this).css("background-position","left top");			
				  $(".burger").slideDown();
				  document.body.scrollTop=Htop;
				  $("body").css({"height":h-55+"px","overflow":"hidden"});//使网页不可滚动
				  $("body").addClass('meunstyle')
				  x= false;
				  document.addEventListener('touchmove', handler, false);
			  }else{
				  document.removeEventListener('touchmove', handler, false);
				  $(this).css("background-position","left bottom");
				  $(".burger").slideUp();
				  document.body.scrollTop=Htop;
				  $("body").css("overflow","initial");//使网页恢复滚动
				  $("body").removeClass('meunstyle')
				  x= true;
				  
			  }
		  })
		  $(".back button").click(function(){
			  document.removeEventListener('touchmove', handler, false);
			  var Htop=$("body").scrollTop();
			  $("#top>div>span").css("background-position","left bottom");
			  $(".burger").slideUp();
			  document.body.scrollTop=Htop;
			  $('body').css("overflow","initial");//使网页恢复滚动
			  $("body").removeClass('meunstyle')
			  x= true;
		  })
		  //展开菜单结束
		if (pageAttr.pagename == "index") {

			this.randomColor(); //随机颜色
			if (pageAttr.new == "newindex") {
				var swiper = new Swiper('.g-index-ppt', {
					slidesPerView: 1,
					spaceBetween: 0,
					loop: true,
					pagination: {
					  el: '.swiper-pagination',
					  clickable: true,
					},
				  });
			  
				  var swiper = new Swiper('.swiper-container3', {
				  slidesPerView : 'auto',
				  spaceBetween: 20,
				  freeMode: true,
			  
				});
				
			}
		}
		if (pageAttr.pagename == "gameselected" || pageAttr.pagename == "softselected") {
			this.indexPpt(); //幻灯片	
			this.choose(); //换一换
			this.gameClassTab(); //游戏分类选项卡			
		}
		if (pageAttr.pagename == "gamerank" || pageAttr.pagename == "softrank") {
			this.showMoreRank(); //展示更多相关排行
		}
		if (pageAttr.pagename == "gamehot" || pageAttr.pagename == "softhot") {
			this.randomColor(); //随机颜色
		}
		if (pageAttr.pagename == "gamelist" || pageAttr.pagename == "softlist") { //下载列表页
			this.downListLoad(); //下载列表加载更多
			this.downListHighlight(); //排序高亮
			this.hideNoDown(); //影藏没有下载的		
			qpmgc()
		}
		if (pageAttr.pagename == "keywordinfo") {
			this.clickShow(); //点击显示影藏
			this.hideH3(); //影藏多余H3
			this.contScroll();// 滚动和展开
			// 新的K页面
			if (pageAttr.key == "new") {
				this.keyAddList();
				
				
			}

		}
		if (pageAttr.pagename == "kuindex") {
			this.kuIndexPrevimg(); //库截图
		}
		if (pageAttr.pagename == "kucms") {
			this.kuHighlight(); //库导航高亮
		}
		if (pageAttr.pagename == "theme") {
			this.systemIf(); //资源加载
			this.clickShow(); //点击显示影藏
		}
		if (pageAttr.pagename == "cmslist") {
			this.cmsListLoad(); //文章列表加载资源
		}
		if (pageAttr.pagename == "cmsnewlist") {
			this.cmsNewListLoad(); //最新资讯列表加载资源
		}

	},
	indexPpt: function() {
		var mySwiper = new Swiper('.f-ppt-swiper', {
			pagination: '.swiper-pagination',
			paginationClickable: true,
			loop: true,
			autoplay: 3000,
		})
	},
	kuIndexPrevimg: function() {
		var previmgHtml = "";
		$(".g-ku-previmg .swiper-wrapper img").each(function() {
			var imgSrc = $(this).attr("src");
			previmgHtml += '<li class="swiper-slide"><img src="' + imgSrc + '" /></li>';
		});
		$(".g-ku-previmg .swiper-wrapper").html(previmgHtml)

		var mySwiper = new Swiper('.f-ppt-swiper', {
			pagination: '.swiper-pagination',
			paginationClickable: true,
			loop: true,
			autoplay: 3000,
		})
	},
	randomColor: function() {
		var likeSize = $(".g-peo-like ul li").length;
		var likeSizeL = Math.ceil(($(".g-peo-like ul li").length) / 2);
		aArray = []
		for (i = 1; i < likeSizeL; i++) {
			var n = parseInt(Math.random() * likeSize);
			if ($.inArray(n, aArray) == -1) {
				aArray.push(n);
				$(".g-peo-like").each(function() {
					$(this).find("ul li a").eq(n).addClass("m-color" + i);
				})
			} else {
				i--;
				continue;
			}
		}
	},
	choose: function() {
		var start = 10;
		var end = 19;
		$('.g-recharge ul li').slice(0, 9).show();
		$('.gx').click(function() {
			$('.g-recharge ul li').each(function(index) {
				if (index >= start && index <= end) {
					$(this).css('display', 'block');
				} else {
					$(this).css('display', 'none');
				}
			});
			start = start + 10;
			end = end + 10;
			if (end > 19) {
				start = 0;
				end = 9;
			}
		});
	},
	gameClassTab: function() {
		$(".g-tabbox-tabnav span").click(function() {
			$(this).addClass("hover").siblings("span").removeClass("hover");
			var n = $(".g-tabbox-tabnav span").index(this);
			$(".g-tabbox-tabcon").eq(n).show().siblings(".g-tabbox-tabcon").hide();
		});
	},
	showMoreRank: function() {
		$(".g-rank-related").width($(".m-rank-btn").width());
		var relatedSize = $(".g-rank-related a").length;
		var relatedHeight = relatedSize * 42;
		$(".m-rank-btn").click(function() {
			var navHeight = $(this).next("div").height();
			if (navHeight == 0) {
				$(".g-black-bg").show();
				$(this).next("div").animate({
					height: relatedHeight
				},
				200);
			} else {
				$(this).next("div").animate({
					height: 0
				},
				200,
				function() {
					$(".g-black-bg").hide();
				});
			};
		})
	},
	downListLoad: function() {
		$(window).scroll(function(e) {
			var bodyh = $("body").height();
			var scrtop = $("body").scrollTop();
			var winh = window.innerHeight;
			if (scrtop >= bodyh - winh) {
				downViewMore();

				return false;
			}
		});
		var p = 2,
		loading = false;
		
	},
	downListHighlight: function() {
		var windowUrl = window.location.href;
		$(".wzaa a").each(function() {
			if (windowUrl.indexOf($(this).attr("href")) != -1) {
				$(this).addClass('hover').siblings().removeClass('hover');
				return false;
			}
		})
	},
	clickShow: function() {
		$(".m-key-hide").click(function() {
			var keybtnText = $(".m-key-hide").text().replace(/\s+/g, "");
			if (keybtnText == "点击查看更多") {
				$(".g-key-coll-img dd").css("height", "auto");
				$(".m-key-hide").text("点击收起")
			} else if (keybtnText == "点击收起") {
				$(".g-key-coll-img dd").css("height", "44px");
				$(".m-key-hide").text("点击查看更多")
			}
		})
	},
	hideH3: function() {
		$(".m-h3tit").each(function() {
			var h3Text = $(this).find("strong").text().replace(/\s+/g, '');
			if (h3Text == "") {
				$(this).remove();
			}
		})
	},
	contScroll:function(){
		var conHeight = $("#content .g-cont-scroll").height();
		var i = 0;
		setTimer = setTimeout(function(){
			window.setInterval(function(){
				i++;
				if(i<=conHeight){
					$("#content .g-cont-scroll").animate({top:-i},0)
				}else{
					i=0;
					$("#content .g-cont-scroll").animate({top:-i},0)
				}
			},50)
		},3000)
		var ejectCss = '<style>.m-desc-alert{width:90%;height:auto;max-height:70%;padding:18px;box-sizing:border-box;display:block;overflow:hidden;background:#fff;border-radius:4px;position:fixed;top:15%;left:5%;z-index:99999;overflow:auto}.m-desc-alert p{width:100%;height:auto;line-height:22px;font-size:14px;font-weight:normal;color:#666;display:block;overflow:hidden;text-indent:18px}.m-desc-alert p strong{font-size:12px;font-weight:bold}#m-close-desc{width:auto;height:auto;font-size:12px;font-weight:normal;background:#333;color:#fff;padding:2px 6px;display:block;overflow:hidden;position:fixed;right:5%;top:15%;z-index:10;border-radius:0 0 0 6px}#m-alert-bg{width:100%;height:100%;background:#000;opacity:0.6;display:block;overflow:hidden;position:fixed;left:0;top:0;z-index:99998}.m-ohter-key{ width:100%; height:auto; font-size:14px; font-weight:normal; margin:10px 0 0;  overflow:hidden}.m-ohter-key strong{ float:left; color:#333; margin:6px 0 0 0 ; display:inline; overflow:hidden}.m-ohter-key strong b{ color:#f00}.m-ohter-key a{ float:left; margin:6px 10px 0 0 ; color:#2b7fd5; text-decoration:underline; display:inline; overflow:hidden}</style>';
		$("head").append(ejectCss)
		$("#g-look-desc,.g-cont-scroll,#g-black-bg,#g-desc-bg").click(function(){
			var winHeight = $(window).height();
			var showHeight = $(".g-cont-scroll").height()+36;
			if(showHeight<=winHeight*0.7){
				var descHtml = $("#content").html();
				$("body").append("<div class=\"m-desc-alert\">"+ descHtml + "<b id=\"m-close-desc\">"+ "关闭" +"</b>" +"</div>"+"<b id=\"m-alert-bg\">"+"</b>");
				$("html,body").css("overflow","hidden")	;
				var topHeight = (winHeight-showHeight)/2;
				//$(".m-desc-alert,#m-close-desc").css("top",topHeight);
			}else{
				var descHtml = $(".g-cont-scroll").html();
				$("body").append("<div class=\"m-desc-alert\">"+ descHtml + "<b id=\"m-close-desc\">"+ "关闭" +"</b>" +"</div>"+"<b id=\"m-alert-bg\">"+"</b>");
				$("html,body").css("overflow","hidden")	;
			}
	
			$("#m-close-desc,#m-alert-bg").click(function(){
				$(".m-desc-alert,#m-alert-bg").remove();
				$("html,body").css("overflow","auto")	;
			})
		});	
	},
	kuHighlight: function() {
		$('.tabnav a').each(function() {
			var $this = $(this);
			if (location.href.indexOf($this.attr('href')) != -1) {
				$this.closest('i').addClass('active').siblings().removeClass('active');
			}
		});
	},
	systemIf: function() {

		var sysObj = "";
		if (browser.versions.android) {
			$("#infocon .g-coll-btn li").eq(0).addClass("m-hover").siblings("li").removeClass("m-hover");
			$("#infocon .m-tab-cont").eq(0).show().siblings(".m-tab-cont").hide();
			sysObj = 0;
			var contSize = $("#infocon .m-tab-cont").eq(0).find(".g-coll-gamedown").length;

			if (contSize <= 0) {
				$("#infocon .g-coll-btn li").eq(1).addClass("m-hover").siblings("li").removeClass("m-hover");
				$("#infocon .m-tab-cont").eq(1).show().siblings(".m-tab-cont").hide();
				sysObj = 1;
			}
		} else if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
			$("#infocon .g-coll-btn li").eq(1).addClass("m-hover").siblings("li").removeClass("m-hover");
			$("#infocon .m-tab-cont").eq(1).show().siblings(".m-tab-cont").hide();
			sysObj = 1;
			var contSize = $("#infocon .m-tab-cont").eq(1).find(".g-coll-gamedown").length;

			if (contSize <= 0) {
				$("#infocon .g-coll-btn li").eq(0).addClass("m-hover").siblings("li").removeClass("m-hover");
				$("#infocon .m-tab-cont").eq(0).show().siblings(".m-tab-cont").hide();
				sysObj = 0;
			}
		} else {
			$("#infocon .g-coll-btn li").eq(2).addClass("m-hover").siblings("li").removeClass("m-hover");
			$("#infocon .m-tab-cont").eq(2).show().siblings(".m-tab-cont").hide();
			sysObj = 2;
			var contSize = $("#infocon .m-tab-cont").eq(2).find(".g-coll-gamedown").length;

			if (contSize <= 0) {
				$("#infocon .g-coll-btn li").eq(0).addClass("m-hover").siblings("li").removeClass("m-hover");
				$("#infocon .m-tab-cont").eq(0).show().siblings(".m-tab-cont").hide();
				sysObj = 0;
			}
		}

		window.page_prev = 1;
		var getTimes = function(times) {
			if (times >= 10000) {
				return parseInt(times / 10000) + "万";
			} else {
				return times;
			}
		}
		function ViewMoreCallback(data) {

			if (data.errorCode == 0) {
				$("#more").html("上拉或点击查看更多...");
				document.getElementById('infocon').appendChild(frag);
			}
		}

		var p = 1,
		PageCount = 0,
		loading = false;
		window.page_temp = 0;
		function ViewMore() {

			if (!loading) {
				loading = true;
				$("#more").html("内容正在加载中...");
				p++;
				$.ajax({
					type: "Get",
					url: "/sajax.asp",
					data: "action=4&t=" + _pageinfo.id + "&s=4&num=15&o=2&p=" + p + "&system=" + sysObj,
					success: function(msg) {
						var objJson = eval('(' + msg + ')');
						if (objJson.PageCount >= p) {
							listDate(msg);
							loading = false;
						} else {
							$(".f-loading-font").html("全部加载完毕...")
						}
					}
				});
			}
		}
		function listDate(msg) {
			var objJson = eval('(' + msg + ')');
			var html = '';
			for (var i = 0; i < objJson.ResName.length; i++) {
				html += '<div class=\"g-coll-gamedown\">';
				html += '<a href="/d/' + objJson.softId[i] + '" class=\"g-coll-gamedown-left\">';
				html += '<img src="' + objJson.SmallImg[i] + '" class=\"m-game-img\" />';
				html += '<p>';
				html += '<strong>' + objJson.ResName[i] + '</strong>';
				html += '<em>' + "大小：" + objJson.ResSize[i] + '</em>';
				html += '<img src="/img/x' + objJson.ResRank[i] + '.png" class=\"m-game-star\">';
				html += '</p>';
				html += '</a>';
				html += '<a href="/d/' + objJson.softId[i] + '" class=\"g-coll-gamedown-right\">';
				html += '<b></b>';
				html += '下载';
				html += '</a>';
				html += '</div>';

			}
			if (sysObj == 0) {
				$('#m-android-theme').append(html);
				$('#m-android-theme').attr("data-p", p);
			} else if (sysObj == 1) {
				$('#m-ios-theme').append(html);
				$('#m-ios-theme').attr("data-p", p);
			}

		};
		$(".g-coll-btn li").click(function() {
			sysObj = $(this).attr("data-sysName");
			var n = $(this).index();
			p = Math.ceil($(this).parents("#infocon").find(".m-tab-cont").eq(n).attr("data-p"));
			$(".f-loading-font").html("等待加载中...");
			loading = false;
		})

		$(window).scroll(function(e) {
			var bodyh = $("body").height();
			var scrtop = $("body").scrollTop();
			var winh = window.innerHeight;
			if (scrtop >= bodyh - winh) {
				ViewMore();
				return false;
			}
		});
	},
	cmsListLoad: function() {
		
		window.page_prev = 1;
		var getTimes = function(times) {
			if (times >= 10000) {
				return parseInt(times / 10000) + "万";
			} else {
				return times;
			}
		}
		function ViewMoreCallback(data) {

			if (data.errorCode == 0) {

				$("#more").html("上拉或点击查看更多...");
				document.getElementById('infocon').appendChild(frag);
			}
		}

		var p = 2,
		PageCount = 0;

		window.page_temp = 0;
		function ViewMore() {
			if (!loading) {
				loading = true;
				$("#more").html("内容正在加载中...");
				p++;
				$.ajax({
					type: "Get",
					url: "/sajax.asp",
					data: "action=5&t=" + pageAttr.rootid + "&s=0&num=15&o=" + pageAttr.o + "&p=" + p,
					success: function(msg) {
						listDate(msg);
						loading = false;
					}
				});
			}

		}

		function listDate(msg) {
			var objJson = eval('(' + msg + ')');
			var html = '';
			for (var i = 0; i < objJson.Title.length; i++) {
				html += '<li>';
				html += '<a href="/c/' + objJson.Id[i] + '" class="list_img">';
				html += '<img src="' + objJson.SmallImg[i] + '" onerror="App.imageNotFound(this);">';
				html += '</a>';
				html += '<a href="/c/' + objJson.Id[i] + '" class="list_font">';
				html += '<div>';
				html += '<p>' + decodeURI(objJson.Title[i]) + '</p>';
				html += '<p>' + decodeURI(objJson.Excerpt[i]) + '</p>';
				html += '</div>';
				html += '</a>';
				html += '</li>';
			}
			$('.new_list').append(html);
			$("#more").html("上拉或点击查看更多...");
		};
		$(window).scroll(function(e) {
			var bodyh = $("body").height();
			var scrtop = $("body").scrollTop();
			var winh = window.innerHeight;
			if (scrtop >= bodyh - winh) {
				ViewMore();
				return false;
			}

		});
		// 列表排序选项卡的当前位置
		var orders = jQuery(".wzaa a"),
		i;

		for (i = 0; i < orders.length; i++) {
			if (window.location.href.indexOf(jQuery(orders[i]).attr('href')) != -1) {
				jQuery(orders[i]).addClass('hover').siblings().removeClass('hover');
				break;
			}
		}
		if (i == orders.length) {
			jQuery(orders[0]).addClass('hover');
		}
	},
	cmsNewListLoad: function() {
		window.page_prev = 1;
		var getTimes = function(times) {
			if (times >= 10000) {
				return parseInt(times / 10000) + "万";
			} else {
				return times;
			}
		}
		function ViewMoreCallback(data) {

			if (data.errorCode == 0) {

				$("#more").html("上拉或点击查看更多...");
				document.getElementById('infocon').appendChild(frag);
			}
		}

		var p = 2,
		PageCount = 0,
		loading = false;
		window.page_temp = 0;
		function ViewMore() {
			if (!loading) {
				loading = true;
				$("#more").html("内容正在加载中...");
				p++;
				$.ajax({
					type: "Get",
					url: "/sajax.asp",
					data: "action=5&t=3&s=0&num=15&o=" + pageAttr.o + "&p=" + p,
					success: function(msg) {
						listDate(msg);
						loading = false;
					}
				});
			}

		}

		function listDate(msg) {
			var objJson = eval('(' + msg + ')');
			var html = '';
			for (var i = 0; i < objJson.Title.length; i++) {
				html += '<li>';
				html += '<a href="/c/' + objJson.Id[i] + '" class="list_img">';
				html += '<img src="' + objJson.SmallImg[i] + '" onerror="App.imageNotFound(this);">';
				html += '</a>';
				html += '<a href="/c/' + objJson.Id[i] + '" class="list_font">';
				html += '<div>';
				html += '<p>' + decodeURI(objJson.Title[i]) + '</p>';
				html += '<p>' + decodeURI(objJson.Excerpt[i]) + '</p>';
				html += '</div>';
				html += '</a>';
				html += '</li>';
			}
			$('#infocon').append(html);
			$("#more").html("上拉或点击查看更多...")
		};

		$(window).scroll(function(e) {
			var bodyh = $("body").height();
			var scrtop = $("body").scrollTop();
			var winh = window.innerHeight;
			if (scrtop >= bodyh - winh) {
				ViewMore();
				return false;
			}
		});

		// 列表排序选项卡的当前位置
		var orders = $(".wzaa a"),
		i;
		for (i = 0; i < orders.length; i++) {
			if (window.location.href.indexOf($(orders[i]).attr('href')) != -1) {
				$(orders[i]).addClass('hover').siblings().removeClass('hover');
				break;
			}
		}
		if (i == orders.length) {
			$(orders[0]).addClass('hover');
		}
	},
	hideNoDown: function() { //影藏1kb或者0kb的
		$("#infocon li").each(function() {
			var gameSize = $(this).find(".size").text().replace(/\s+/g, "");
			if (gameSize == "1KB" || gameSize == "0KB") {
				$(this).hide();
			}
		})
	},
	keyAddList:function(){//K页面下拉
		var kxg = $(".m-xgkp a").length;
			if(kxg > 0){
				$(".m-ohter-key").show();
			}
		//处理头部相关结束

		if(/iphone|ipad/i.test(navigator.userAgent)){//苹果
			$('#android').before( $("#ios")[0] );
		}

		$('.g-key-game').each(function(){

			var dlist =  $(this).find('div').length;
			if(dlist == 0){
				$(this).remove();
			}
			var clickMore = '<p class="f-cmore">点击加载更多</p>'
			if(dlist == 10){
				$(this).append(clickMore)
			}

		})

		
			var p=1;

			$("#android .f-cmore").click(function(){
				p=p+1;
				showmoredown(0,p)
			})
			$("#ios .f-cmore").click(function(){
				p=p+1;
				showmoredown(1,p)
			})
		

		function showmoredown(sys,p){
			$.ajax({
			   type: "Get",
			   url: "/sajax.asp",
			   data: "action=13&t="+_webInfo.Id+"&num=10&system="+sys+"&p="+p,
			   success: function(msg){
				   var objJson =eval( '(' + msg + ')');
					var html = '';	
					var ssystem;
					for(var i=0; i<objJson.ResName.length;i++ )
					{
						html += '<div class="g-coll-gamedown" data-system="'+objJson.System[i]+'">';
						html += '<a data-id="' + objJson.softId[i] + '" href="/d/' + objJson.softId[i] + '" class="g-coll-gamedown-left">';
						html += '<img src="'+ objJson.SmallImg[i] +'" class="m-game-img"><p>';
						html += '<strong>'+ objJson.ResName[i] +'</strong>';
						html += '<em>'+ objJson.Catalogname[i] +' / '+ objJson.ResSize[i] +' / '+ objJson.ResVer[i] +'</em>';
						html += '<img src="/skin/2015/images/down-rank'+ objJson.ResRank[i] +'.png" class="m-game-star"></p></a>';
						html += '<a data-id="' + objJson.softId[i] + '" href="/d/' + objJson.softId[i] + '" class="g-coll-gamedown-right"><b></b>下载</a></div> ';
					 }		 
					 console.log(html)
					if(p<=objJson.PageCount){
						if(sys==0){
							$("#android .f-cmore").before(html);
						}else{
							$("#ios .f-cmore").before(html);
						}
					}else{
						if(sys==0){
							$("#android .f-cmore").remove();
						}else{
							$("#ios .f-cmore").remove();
						}
						
					}
					
			   }
			});
		}

	}
}
var p = 2;
function downViewMore() {
	
	if (!loading) {
		loading = true;
		$("#more").html("内容正在加载中...");
		p++;
		$.ajax({
			type: "Get",
			url: "/sajax.asp",
			data: "action=4&t=" + pageAttr.catalogid + "&s=1&num=15&o=" + pageAttr.o + "&p=" + p,
			success: function(msg) {
				var objJson = eval('(' + msg + ')');
				if (objJson.PageCount >= p) {
					downlistDate(msg);
					qpmgc()					
					loading = false;
				} else {
					$(".f-loading-font").html("全部加载完毕...")
				}
			}
		});
	}
}

function downlistDate(msg) {
	var objJson = eval('(' + msg + ')');
	var html = '';
	for (var i = 0; i < objJson.ResName.length; i++) {
		html += '<li>';
		html += '<a href="/d/' + objJson.softId[i] + '" class="list_img">';
		html += '<img src="' + objJson.SmallImg[i] + '" onerror="App.imageNotFound(this);">';
		html += '</a>';
		html += '<a href="/d/' + objJson.softId[i] + '" class="list_font">';
		html += '<div>';
		html += '<p>' + decodeURI(objJson.ResName[i]) + '</p>';
		html += '<p>大小：<span class="size">' + decodeURI(objJson.ResSize[i]) + '</span></p>';
		html += '<p><img src="/img/x' + objJson.ResRank[i] + '.png"></p>';
		html += '</div>';
		html += '</a>';
		html += '<a href="/d/' + objJson.softId[i] + '" class="list_btn">';
		html += '下载';
		html += '</a>';
		html += '</li>';
	};
	$('#infocon').append(html);
	$("#more").html("上拉或点击查看更多...");
	allJs.hideNoDown();
	qpmgc()
}
function qpmgc(){
	var qpMgc =  ['彩票','时时彩','福彩','体彩','双色球','购彩','足彩','六合彩'];
	$("#infocon li").each(function(){
		var softName = $(this).find("div p:first").text();	
		for(var i = 0;i<qpMgc.length;i++){
			if(softName.indexOf(qpMgc[i]) != -1){
				$(this).remove();
			}
		}
	})		
}