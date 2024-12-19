(function () {
	var M = {
		Tab: function (config) {

			var el = config.el;
			var callback = config.callback || function () {};
			var tabTitle = config.tabTitle || "li";
			var triggerType = config.triggerType || "mouseenter";

			this.tabList = $(el).find(".hd").find(tabTitle);
			this.pannel = $(el).find('.bd-list');
			var _this = this;

			for (var i = 0; i < this.tabList.length; i++) {
				this.tabList[i]["index"] = i;
				$(this.tabList[i]).on(triggerType, function () {
					_this.clickTab(this);
					var index = this["index"];
					console.log($(this).children().text())
					$(this).addClass("cur");
					_this.pannel[index].style.display = "block";
					callback($(this));
				})
			};
		}
	};

	M.Tab.prototype.clickTab = function (target) {
		for (var i = 0; i < this.tabList.length; i++) {
			$(this.tabList[i]).removeClass("cur");
			this.pannel[i].style.display = "none";
		}
	}

	window.M = M;

	//列表左右滚动
	$(".arrow .arrow-right.do").each(function (i, v) {
		v["page"] = Math.ceil($(v).parent().siblings(".tutorial-list-nav").children("a").length / 7);
		v["curPage"] = 0;
		v["i"] = ($(v).parent().siblings(".tutorial-list-nav").css("left")).slice(0, -2) - 0;
		$(v).bind("click", function () {
			if (v["i"] == 0) {
				v["curPage"] = 0;
			}
			if (v["curPage"] < v["page"] - 1) {
				$(v).parent().siblings(".tutorial-list-nav").css("left", v["i"] - 770 + "px");
				v["curPage"]++;
			}
		})
		$(".arrow .arrow-left.do").each(function (i, e) {
			$(e).bind("click", function () {
				e["Ri"] = ($(e).parent().siblings(".tutorial-list-nav").css("left")).slice(0, -2) - 0;
				if (e["Ri"] < 0) {
					$(e).parent().siblings(".tutorial-list-nav").css("left", e["Ri"] + 770 + "px");
					v["curPage"]--;
				}
			})
		})
	})

	$(".to-reply").each(function (i, v) {
		$(v).on("click", function () {
			if ($(v).text() == "取消回复") {

				if ($(this).parent(".rt-reply").parent(".replay-head").parent(".reply").find(".re-reply").length) {
					$(this).parent(".rt-reply").parent(".replay-head").parent(".reply").find(".reply-commert").remove();
				} else {
					$(this).parent(".rt-reply").parent(".replay-head").parent(".reply").children(".re-reply-lists").remove();
				}
				$(this).html("回复");
				return;
			}
			$(".comment-main").find(".re-reply-lists").find(".reply-commert").remove();
			$(".to-reply").each(function (i, v) {
				$(v).html("回复");
			})
			var str = '<div class="re-reply-lists">'
			str += '<i class="triangle"></i>'
			str += '<div class="reply-commert">'
			str += '<div class="comment-textarea" contenteditable="true"></div>'
			str += '<div class="publish df jcsb">'
			str += '<a class="expression rel" href="javascript:;">'
			str += '<img class="vb w-20 h20 m-r-6" src="https://img2.runjiapp.com/duoteimg/dtnew_assets/pcRewrite/imgs/game/emote.png">'
			str += '添加表情'
			str += '<div class="biaoq_ico" style="display: none;">'
			str += '<span>'
			str += '<img height="24" width="24" src="http://img1.runjiapp.com/duoteimg/zhuanti/comment/images/1.gif" sn="0">'
			str += '<img height="24" width="24" src="http://img1.runjiapp.com/duoteimg/zhuanti/comment/images/1.gif" sn="0">'
			str += '<img height="24" width="24" src="http://img1.runjiapp.com/duoteimg/zhuanti/comment/images/2.gif" sn="0">'
			str += '<img height="24" width="24" src="http://img1.runjiapp.com/duoteimg/zhuanti/comment/images/3.gif" sn="0">'
			str += '<img height="24" width="24" src="http://img1.runjiapp.com/duoteimg/zhuanti/comment/images/4.gif" sn="0">'
			str += '<img height="24" width="24" src="http://img1.runjiapp.com/duoteimg/zhuanti/comment/images/5.gif" sn="0">'
			str += '<img height="24" width="24" src="http://img1.runjiapp.com/duoteimg/zhuanti/comment/images/6.gif" sn="0">'
			str += '<img height="24" width="24" src="http://img1.runjiapp.com/duoteimg/zhuanti/comment/images/7.gif" sn="0">'
			str += '<img height="24" width="24" src="http://img1.runjiapp.com/duoteimg/zhuanti/comment/images/8.gif" sn="0">'
			str += '<img height="24" width="24" src="http://img1.runjiapp.com/duoteimg/zhuanti/comment/images/9.gif" sn="0">'
			str += '<img height="24" width="24" src="http://img1.runjiapp.com/duoteimg/zhuanti/comment/images/10.gif" sn="0">'
			str += '<img height="24" width="24" src="http://img1.runjiapp.com/duoteimg/zhuanti/comment/images/11.gif" sn="0">'
			str += '<img height="24" width="24" src="http://img1.runjiapp.com/duoteimg/zhuanti/comment/images/12.gif" sn="0">'
			str += '</span>'
			str += '<i></i>'
			str += '</div>'
			str += '</a>'
			str += '<input type="button" value="发表评论" class="comm-btn cp bg-orange w-74 h-24 b-r-6 df aic jcc f14 cfff" name="cmtbtn" onclick="subComment(this)">'
			str += '</div>'
			str += '</div>'
			str += '</div>';
			var str1 = '<div class="reply-commert">'
			str1 += '<div class="comment-textarea" contenteditable="true"></div>'
			str1 += '<div class="publish">'
			str1 += '<a class="expression rel" href="javascript:;">'
			str1 += '<img class="vb w-20 h20 m-r-6" src="../../../imgs/game/emote.png">'
			str1 += '添加表情'
			str1 += '<div class="biaoq_ico" style="display: none;">'
			str1 += '<span>'
			str1 += '<img height="24" width="24" src="http://img1.runjiapp.com/duoteimg/zhuanti/comment/images/1.gif" sn="0">'
			str1 += '<img height="24" width="24" src="http://img1.runjiapp.com/duoteimg/zhuanti/comment/images/2.gif" sn="0">'
			str1 += '<img height="24" width="24" src="http://img1.runjiapp.com/duoteimg/zhuanti/comment/images/3.gif" sn="0">'
			str1 += '<img height="24" width="24" src="http://img1.runjiapp.com/duoteimg/zhuanti/comment/images/4.gif" sn="0">'
			str1 += '<img height="24" width="24" src="http://img1.runjiapp.com/duoteimg/zhuanti/comment/images/5.gif" sn="0">'
			str1 += '<img height="24" width="24" src="http://img1.runjiapp.com/duoteimg/zhuanti/comment/images/6.gif" sn="0">'
			str1 += '<img height="24" width="24" src="http://img1.runjiapp.com/duoteimg/zhuanti/comment/images/7.gif" sn="0">'
			str1 += '<img height="24" width="24" src="http://img1.runjiapp.com/duoteimg/zhuanti/comment/images/8.gif" sn="0">'
			str1 += '<img height="24" width="24" src="http://img1.runjiapp.com/duoteimg/zhuanti/comment/images/9.gif" sn="0">'
			str1 += '<img height="24" width="24" src="http://img1.runjiapp.com/duoteimg/zhuanti/comment/images/10.gif" sn="0">'
			str1 += '<img height="24" width="24" src="http://img1.runjiapp.com/duoteimg/zhuanti/comment/images/11.gif" sn="0">'
			str1 += '<img height="24" width="24" src="http://img1.runjiapp.com/duoteimg/zhuanti/comment/images/12.gif" sn="0">'
			str1 += '</span>'
			str1 += '<i></i>'
			str1 += '</div>'
			str1 += '</a>'
			str1 += '<input type="button" value="发表评论" class="comm-btn" name="cmtbtn" onclick="subComment(this)">'
			str1 += '</div>'
			str1 += '</div>'
			if ($(this).html() == "回复") {
				if ($(this).parent(".rt-reply").parent(".replay-head").parent(".reply").find(".re-reply-lists").length) {
					$(this).parent(".rt-reply").parent(".replay-head").siblings(".re-reply-lists").prepend(str1);
				} else {
					$(this).parent(".rt-reply").parent(".replay-head").parent(".reply").append(str);
				}
				$(".re-reply-lists").each(function (i, v) {
					if ($(v).find(".reply-commert").length == 0 && $(v).find(".re-reply").length == 0) {
						$(v).remove();
					}
				})
				$(this).html("取消回复");
			}
		})
	})

	$(".comment").on("click", ".comm-btn", function () {
		if ($(this).parent(".publish").siblings(".comment-textarea").val() == "") {
			return;
		} else {
			var str = '<div class="re-reply">'
			str += '<div class="replay-head" netid="0">'
			str += '<span class="net-name">2345石家庄网友</span>'
			str += '<span class="time">2017-06-15</span>'
			str += '<span class="rt-reply">'
			str += '<a class="like" href="javascript:;">2345</a>'
			str += '</span>'
			str += ' </div>'
			str += ' <div class="replay-info">'
			str += $(this).parent(".publish").siblings(".comment-textarea").val();
			str += '</div>'
			str += '</div>'

			$(this).parent(".publish").parent(".reply-commert").parent(".re-reply-lists").append(str);
			$(this).parent(".publish").siblings(".comment-textarea").html("");
		}
	})

	//分页边界
	if ($(".page .num.cur").html() == 1) {
		$(".go-left").addClass("focus").css("pointer-events", "none");
	} else {
		$(".go-left").addClass("focus").css("pointer-events", "default");
	};

	var tabComment = new M.Tab({
		el: ".comment-main-trig",
		triggerType: "click",
		tabTitle: ".tab-mod a",
		callback: function () {}
	});

	var hotComment = new M.Tab({
		el: ".hot-comment-trig",
		triggerType: "click",
		tabTitle: ".tab-mod a",
		callback: function () {}
	});

	$(".comment").on("mouseenter", ".expression", function () {
		clearTimeout(timerE);
		$(this).find(".biaoq_ico").show();
	})

	var timerE = null;
	$(".comment").on("mouseleave", ".expression", function () {
		var _this = this;
		timerE = setTimeout(function () {
			$(_this).find(".biaoq_ico").hide();
		}, 1000);
	})

	$(".comment").on("mouseenter", ".biaoq_ico", function () {
		clearTimeout(timerE);
		$(this).show();
		return false;
	})
	$(".comment").on("mouseleave", ".biaoq_ico", function () {
		clearTimeout(timerE);
		var _this = this;
		timerE = setTimeout(function () {
			$(_this).hide();
		}, 100);
		return false;
	})

	$(".comment").on("click", ".biaoq_ico img", function (e) {
		e = e || window.event;
		var str = $(e.target).clone();
		var curCmt = $(this).parent("span").parent(".biaoq_ico").parent(".expression").parent(".publish").siblings(".comment-textarea");
		curCmt.focus();
		curCmt.append(str);
		curCmt.append('<input type="text" class="testIpt"/>');
		curCmt.find(".testIpt").focus();
		$(".testIpt").remove();
		curCmt.focus();
	})

	$(".show-hide-lists").each(function (i, v) {
		$(v).find(".rank-list li").each(function (i, v) {
			$(v).hover(function () {
				$(v).parent(".rank-list").find(".hide-rank-info").hide();
				$(this).find(".hide-rank-info").show();
			}, function () {

			})
		})
	})

	$(".tutorial-main").each(function (i, v) {
		if ($(v).find("li").length > 20) {
			$(v).find(".txt-dot-links-b").append('<a class="tutorial-fold" href="javascript:;">展开<i class="icon-up"></i></a>');
			$(this).find("ul").css({
				"height": "300px",
				"width": "900px",
				"position": "relative",
				"overflow": "hidden",
				"marginLeft": "0px"
			});
			$(this).find("ul li").css("marginLeft", "50px");
			$(this).find(".tutorial-fold").on("click", function () {
				if ($(this).text() == "展开") {
					$(this).html('收起<i class="icon-down"></i>');
					$(this).siblings("ul").css("height", "auto");
				} else {
					$(this).siblings("ul").css("height", "300px");
					$(this).html('展开<i class="icon-up"></i>');
				}
			})
		};
	})

	// $(".to-reply").each(function(i,v){
	// 	$(v).on("click",function(){
	// 		if($(v).text()=="取消回复"){
	// 			$(v).parent().parent().siblings(".re-reply-lists").hide();
	// 			$(v).text("回复");
	// 		}
	// 	})
	// })

	$(".analog-select").click(function () {
		$(this).toggleClass("focus");
		var me = this;
		$(this).find(".option").click(function () {
			$(me).find(".val-sel").html($(this).html());
		})
	})

})()