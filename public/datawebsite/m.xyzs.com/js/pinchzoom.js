$(function() {
	// 截图放大
	if ($('.img_item li').length > 0) {
		var img = new Image();
		img.src = $('.img_item li img').attr('src');
		img.onload = function() {
			if (img.width > img.height) {
				$('.img_item').height(160);
				$('.img_item li img').height(160);
			}
		}
	}
    $('.show_img').find('img').on('click',function(){
	    var pswpElement = document.querySelectorAll('.pswp')[0];
	    var items = new Array();
	    $.each($(".show_img img"), function(i, v) {
	        $(v).attr("rel", i);
	        items.push({
	            src: $(v).attr("src"),
	            w: $(v).width(),
	            h: $(v).height()
	        });
	    });
	    var options = {
	            index: parseInt($(this).attr("rel")) 
	    };
	    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
	    gallery.init();
	});

    $('#detailCont').find('img').on('click',function(){
        var pswpElement = document.querySelectorAll('.pswp')[0];
        var items = new Array();
        $.each($("#detailCont img"), function(i, v) {
            $(v).attr("rel", i);
            items.push({
                src: $(v).attr("src"),
                w: $(v).width(),
                h: $(v).height()
            });
        });
        var options = {
                index: parseInt($(this).attr("rel")) 
        };
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    });

    $('#newsDeCont').find('img').on('click',function(){
        var pswpElement = document.querySelectorAll('.pswp')[0];
        var items = new Array();
        $.each($("#newsDeCont img"), function(i, v) {
            $(v).attr("rel", i);
            items.push({
                src: $(v).attr("src"),
                w: $(v).width(),
                h: $(v).height()
            });
        });
        var options = {
                index: parseInt($(this).attr("rel")) 
        };
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    });
    
   
	// 新闻详情视频自动播放
	if ($("#vedioAd").length > 0) {
		var vedioAdTop = $('#vedioAd').offset().top - 490;
		$(window).scroll(function() {
			var wTop = $(window).scrollTop();
			if (wTop >= vedioAdTop && $("#vedioAd video").attr('data-play') != 1) {
				var promise = $("#vedioAd video")[0].play();
				$("#vedioAd video").attr('data-play', '1');
				if (promise !== undefined) {
					promise.catch(error => {}).then(() => {});
				} else {}
			}
		})
		$("#vedioAd video").on('ended', function() {
			$('.vback').show();
		})
	}
	if ($("#video").length > 0) {
		$(".game-video video").on('ended', function() {
			$('.vback').show();
		})
		$('#replay').on('click', function() {
			$(this).parents('.game-video').find('video')[0].play();
			$(this).parents('.vback').hide();
		})
	}
	// 点击到固定标签
	$(".guessLike p span").on('click', function() {
		$('html,body').scrollTo({toT:$(".samePlay").offset().top})
		var index = $(this).data('index');
		$(".samePlay .tab_menu span").each(function(k, v) {
			if (k == index) {
				$(this).addClass('current').siblings().removeClass('current');
			}
		});
		$(".samePlay .tab_cont .sub_box").each(function(k, v) {
			var key = $(v).data('index');
			if (key == index) {
				$(this).removeClass('hide').siblings().addClass('hide');
			}
		});
	});
    
	 // if($('#newsDeCont').length>0){$('#newsDeCont').find('a').attr('target',"_blank")}
	 

	//  rizhi
	$(".rz").on('click', function () { $(".rzbg").show(); });
	$(".b_back").on('click', function () { $(".rzbg").hide(); });
	$(".rzbg").find('p').each(function () {
		if ($(this).html() === "") {
			$(this).css("display", "none")
			 $(this).remove()
		 }
	})

	if ($('.rzbox').length > 0) {
		var rzp =$(".rzbox p")
		var rzpp =Array.prototype.slice.call(rzp)
		for( var i=0;i<rzpp.length;i++){
			if (rzpp[i].innerHTML == "") {
				rzpp[i].remove()
			}
		}
	}

	if ($('.rzcont').length > 0) {
		var rzstr =$(".rzcont strong")
		var rzstrr =Array.prototype.slice.call(rzstr)
		for( var j=0;j<=rzstrr.length+1;j++){
			if (rzstrr[j+1]) {
				rzstrr[j+1].remove()
			}
		}
	}
	 
	 // pswpHtml
	 var pswpHtml = '';
	 pswpHtml +=`<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap">
	 		<div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div>
	 		<div class="pswp__ui pswp__ui--hidden">
	 		<div class="pswp__top-bar">
	 		<div class="pswp__counter"></div>
	 		<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
	 		<button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
	 		<button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
	 		<div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div>
	 		<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
	 		<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
	 		<div class="pswp__caption"><div class="pswp__caption__center"></div></div>
	 		</div></div></div>`
	  $("body").append(pswpHtml);
	 
	 
	 // rule
	 var ruleHtml = '';
	     ruleHtml +=`<div class="gRule hide">
	 	<div class="ruleBox">
	     <div class="rClose"><i class="ico"></i></div>
	     <div class="rTitle"><i class="ico"></i></div>
	 	<div class="maskTit">权限查看</div>
	     <div class="ruleMain"><p>此应用程序需要访问以下内容</p>
	     <strong>写入外部存储</strong><p>允许程序写入外部存储，如SD卡上写文件</p>
	     <strong>完全的网络访问权限</strong><p>允许该应用创建网络套接字和使用自定义网络协议。浏览器和其他某些应用提供了向互联网发送数据的途径，因此应用无需该权限即可向互联网发送数据</p>
	     <strong>拍摄照片和视频</strong><p>允许访问摄像头进行拍照或录制视频</p>
	     <strong>读取手机状态和身份</strong><p>允许应用访问设备的电话功能。此权限可让应用确定本机号码和设备ID、是否正处于通话状态以及拨打的号码。</p>
	     <strong>查看网络状态</strong><p>允许应用程序查看所有网络的状态。例如存在和连接的网络</p>
	     <strong>查看WLAN状态</strong><p>允许程序访问WLAN网络状态信息</p>
	     <strong>控制震动</strong><p>允许应用控制振动设备</p>
	     <strong>拨打电话</strong><p>允许一个程序初始化一个电话拨号不需通过拨号用户界面需要用户确认，应用程序执行可能需要您付费</p></div>
	     <span class="rSure">确定</span>
	 	</div></div>`
	 $('body').append(ruleHtml);
	 $(".gPower").on('click', function () {

		 // $(".gRule").show();
		 let classify = $("input[name='classify']").val()
		 let common_id = $("input[name='common_id']").val()
		 let md5 = $("input[name='md5']").val()
		 let id = $("input[name='game_id']").val()
		 let pcUrl = $("input[name='pcUrl']").val()

		 if (!common_id && !md5){
			 $(".gRule").show();
		 }

		 $.ajax({
			 url: pcUrl+'api/permission/',
			 type: 'POST',
			 data: {
				 'id': id,
				 'md5': md5,
				 'common_id': common_id,
				 'classify': classify,
			 },

			 success: function (data) {
				 res = $.parseJSON(data);
				 if (res.code == 200 && res.data) {
					 if (res.data.permission){
						 $(".gRule").html('')
						 let strArray  = res.data.permission.split(',')

						 var cmslist= permission;

						 let permissionHtml = '<div class="ruleBox"><div class="rClose"><i class="ico"></i></div><div class="rTitle"><i class="ico"></i></div><div class="maskTit">权限查看</div>'
						 permissionHtml +=' <div class="ruleMain"><p>此程序需要访问以下内容</p>'
						 for ( i=0;i<cmslist.length;i++){
							 if (strArray.indexOf(cmslist[i]["name"]) >= 0) {
								 permissionHtml += '  <strong class="m-permission-'+cmslist[i]["level"]+'">'+cmslist[i]["explain"]+'</strong>';
								 permissionHtml += '  <p>'+cmslist[i]["description"]+'</p>';
							 }
						 }
						 permissionHtml += '  </div>';
						 permissionHtml += '    <span class="rSure">确定</span>';

						 $(".gRule").html(permissionHtml)
						 $(".gRule").show();

						 $(".rSure").on('click', function () { $(".gRule").hide();});
						 $(".rClose").on('click', function () { $(".gRule").hide();});
					 }else{
						 $(".gRule").show();
					 }

				 } else {
					 $(".gRule").show();
					 return;
				 }
			 }
		 })


	 });
	 $(".rSure").on('click', function () { $(".gRule").hide();});
	 $(".rClose").on('click', function () { $(".gRule").hide();});
	 
	 //Privacy
	 var privacyHtml = '';
	     privacyHtml += `<div class="gPrivacy hide">
	            <div class="privacyTxt">
	 		   <div class="pClose"><i class="ico"></i></div>
	            <div class="oTitle"><i class="ico"></i></div>
	 		   <div class="maskTit">隐私说明</div>
	            <div class="privacyMain">
	            <p>严格遵守法律法规，遵循以下隐私保护原则，为您提供更加安全、可靠的服务：</p>
	            <strong>1、安全可靠：</strong> 
	            <p>我们竭尽全力通过合理有效的信息安全技术及管理流程，防止您的信息泄露、损毁、丢失。</p>  
	            <strong>2、自主选择：</strong>  
	            <p>我们为您提供便利的信息管理选项，以便您做出合适的选择，管理您的个人信息</p>  
	            <strong>3、保护通信秘密：</strong>  
	            <p>我们严格遵照法律法规，保护您的通信秘密，为您提供安全的通信服务。</p>
	            <strong>4、合理必要：</strong>  
	            <p>为了向您和其他用户提供更好的服务，我们仅收集必要的信息。</p>
	            <strong>5、清晰透明：</strong>  
	            <p>我们努力使用简明易懂的表述，向您介绍隐私政策，以便您清晰地了解我们的信息处理方式。</p>
	            <strong>6、将隐私保护融入产品设计：</strong>  
	            <p>我们在产品和服务研发、运营的各个环节，融入隐私保护的理念。</p>
	            <strong>本《隐私政策》主要向您说明：</strong>  
	            <p>我们收集哪些信息 我们收集信息的用途 您所享有的权利</p>
	            <strong>希望您仔细阅读《隐私政策》</strong>  
	            <p>为了让您有更好的体验、改善我们的服务或经您同意的其他用途，在符合相关法律法规的前提下，我们可能将通过某些服务所收集的信息用于我们的其他服务。例如，将您在使用我们某项服务时的信息，用于另一项服务中向您展示个性化的内容或广告、用于用户研究分析与统计等服务。</p>
	            <p>若您使用服务，即表示您认同我们在本政策中所述内容。除另有约定外，本政策所用术语与《服务协议》中的术语具有相同的涵义。</p>
	            <p>如您有问题，请联系我们。</p>
	            </div>
	 		   <div class="gSure">确定</div>
	            </div>
	            </div>`
	 $('body').append(privacyHtml);
	 $(".gSecret").on('click', function () { $(".gPrivacy").show();});
	 $(".gSure").on('click', function () { $(".gPrivacy").hide();});
	 $(".pClose").on('click', function () { $(".gPrivacy").hide();});
	 // feedback
	 var feBaHtml = '';
	 feBaHtml +=`<div class="feedBack hide">
	 	<div class="feHead">
	 	<div class="feBaClose"><i class="ico"></i></div>
	 	<div class="oTitle"><i class="ico"></i></div> 
	 	<div class="maskTit">游戏反馈</div>
	 	<div class="feBack">
	 		<span>反馈原因</span>
	 		<div class="info">
	 			<div class='checkbox'> <input type='checkbox' id='checkbox1' data-value="1" name='checkbox[]'> <label for='checkbox1'>有色情、暴力、反动等不良内容</label>
	 			</div>
	 			<div class='checkbox'> <input type='checkbox' id='checkbox2' data-value="2" name='checkbox[]'> <label for='checkbox2'>有抄袭、侵权嫌疑</label>
	 			</div>
	 			<div class='checkbox'> <input type='checkbox' id='checkbox3' data-value="3" name='checkbox[]'> <label for='checkbox3'>广告很多、含有不良插件</label>
	 			</div>
	 			<div class='checkbox'> <input type='checkbox' id='checkbox4' data-value="4" name='checkbox[]'> <label for='checkbox4'>无法正常安装或进入游戏</label>
	 			</div>
	 		</div>
	 		<span>其他原因</span>
	 		<textarea name="remake" placeholder="请输入补充说明"></textarea>
	 		<span>联系方式</span>
	 		<div class="telBox"><input type="tel" name="tel"  placeholder="请输入手机号码"> </div>
	 	</div>
	 	<div class="feSubmit"> <input type="button" class="submit" name="submit" value="提交反馈"> </div>
	 </div>	
	 </div>`
	 $("body").append(feBaHtml);
	 $(".feBaBtn").on('click', function () { $(".feedBack").show();});
	 $(".feBaClose").on('click', function (e) {
	   let ev = e || window.event;
	   if(ev && ev.stopPropagation){ev.stopPropagation(); }else{ev.cancelBubble = true;  }$(".feedBack").hide();});
	 $(".submit").click(function () {
		 let tel_num = $.trim($(".telBox input[name='tel']").val()) ;
	     let game_id = $.trim($("input[name='game_id']").val());
	     let game_name = $.trim($("input[name='game_name']").val());
	     let type_info = $.trim($("input[name='type']").val());
	 	let system = $.trim($("input[name='system_version']").val());
	 	let reason = "";
	 	$(".feBack input[name='checkbox[]']:checked").each(function (k, v) {
	 	    reason += ',' + $(v).data('value')
	 	})
	 	let remake = $.trim($(".feBack textarea[name='remake']").val());
	 	if ((!reason) && (!remake)) {
	 	    alert('请选择反馈原因！');
	 	    return;
	 	}
	 	let tel = isPoneAvailable(tel_num);
	 	if (!tel) {
	 	    alert('请输入正确的手机号码!');
	 	    return;
	 	}	
	 		
	     $.ajax({
	         url: '/downs/feedback/',
	         type: 'POST',
	         data: {
	             'game_id': game_id,
	             'reason': reason,
	           'system': system,
	             'tel': tel_num,
	             'remake': remake,
	             'type': type_info,
	             'game_name': game_name,
	         },
	         success: function (data) {
	             res = $.parseJSON(data);
	             if (res.code == 200) {
	                 alert('反馈成功,谢谢您！');
	                 $(".feedBack").hide();
	 		
	             } else{
	                 alert(res.msg);
	 				$(".feedBack").hide();
	                 return;
	             }
	         }
	     });
	 })
	 
	//order
	var orderHtml = '';
	orderHtml +=`<div class="orderList hide">
			<div class="orderBox">
	        <div class="oOrder">
	        <div class="oClose"><i class="ico"></i></div>
	        <div class="oTitle"><i class="ico"></i></div>
			<div class="maskTit">上线预约</div>
	        <form action="" method="post"><input type="text" name="tel" placeholder="请输入预约手机号码" class="tel" /><i class="maskclear"></i><em></em> <span class="msg"></span><input type="button" name="btn" value="立即预约" class="oBtn" id="oBtn" /></form>
	        </div>
	        <div class="oWin hide"><div class="oClose"><i class="ico"></i></div><div class="oTitle"><i class="ico"></i></div><div class="maskTit">预约成功</div><p> 游戏开服后，您将收到短信提示 !</p><span class="oKnow">知道了</span></div>
	        <div class="oAgin hide"><div class="oClose"><i class="ico"></i></div><div class="oTitle"><i class="ico"></i></div><div class="maskTit">您已预约</div><p>您已预约，请等待通知！</p><span class="oKnow">知道了</span> </div>
	        <div class="oLose hide"><div class="oClose"><i class="ico"></i></div><div class="oTitle"><i class="ico"></i></div><div class="maskTit">预约失败</div><p>预约失败，请重新预约！</p><span class="oKnow">知道了</span></div>
			</div></div>`
	$('body').append(orderHtml);
	$('.orderBtn').on('click', function() {$(".orderList").show();});
	$('.orderList').find('.oClose').on('click', function() {$(".orderList").hide();});
	$('.orderList').find('.oKnow').on('click', function() {$(".orderList").hide();});
	
	$('.maskclear').on("click", function() {
	    $('.tel').val('');
	    $(".maskclear").removeClass("onclear");
	  })
	  
	  $(".tel").on("input", function() {
	    if($(".tel").val() != '') {
	      $(".maskclear").addClass("onclear");
	    } else {
	      $(".maskclear").removeClass("onclear");
	    }
	  })
	// 正则：判断手机号码
	function isPoneAvailable(tel) {  
	    var myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
	    if (!myreg.test(tel)) { 
	        return false;
	    } else {  
	        return true; 
	    }  
	}
	// 判断手机号是否正确
	function telResult(telText){
		var telText = $('.tel').val(),result = isPoneAvailable(telText);//判断手机是否正确
	    if(result===false){
	        $('.tel').css({'color':'#fe684d','border-color':'#fe684d'});
            $('.msg').text("*请填写正确的手机号")
			$('.msg').css({'content':'"请填写正确的手机号"','color': '#fe684d','font-size':'.18rem','text-align': 'left','display': 'block','width':'3.8rem','margin': '0 auto'});
            return false;
	    }else{
	        $('.tel').css({'color':'#333','border-color':'#dadada'});
            $('.msg').text("")
	        return true;
	    }
	}

	$(".oBtn").click(function () {
        let telText = $('.tel').val();
        let game_id = $("input[name='game_id']").val();
		
        if (game_id == ''){
            alert('游戏id不能为空');return false;
        }

		let game_name = $("input[name='game_name']").val();
		let system = $("input[name='system']").val();

        telResult(telText);

        $.ajax({
            url:"/Downs/reservation/",
            type: 'post',
            data:{
                'phone':telText,
                'game_id':game_id,
				'game_name':game_name,
				'system':system,
            },
            success:function (res) {
                let result =  JSON.parse(res); //由JSON字符串转换为JSON对象
                if (result.code==0){
                    $('.msg').text(result.msg)
                    $('.msg').css({'content':'"+result.msg+"','color': '#fe684d','font-size':'.18rem','text-align': 'left','display': 'block','width':'3.8rem','margin': '0 auto'});
                    return false;
                }else if(result.code== 200){
                    //预约成功
					$(".oOrder").hide();
					$(".oWin").show();
                }else if(result.code== 300){
					//已预约
					$(".oOrder").hide();
					$(".oLose").show();
                    alert(result.msg);
                }else if(result.code== 400){
                    //预约失败
					$(".oOrder").hide();
					$(".oAgin").show();
                    
                }
            }
        })
    })
	
	$('body').delegate('.tel','blur',function(){
	    telResult();
	});

})

