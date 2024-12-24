$(function(){
	var DownArr;
	var Downobj = $('.appBox,.app');

	var u = navigator.userAgent, app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    var is_ios = 2; //1 ios  2 anzhuo
    if (isIOS) {
        is_ios = 1
    }
    console.log(is_ios);
      var uid  = $('#appBox').attr('data-id');
  var Down = $('[data-urlarray]').attr('data-urlarray');

	clickSet();
	$.get("https://m.shouyouzhijia.cn/topapi/urlJiekou?uid="+uid+"&type="+is_ios,function(data,status){
            if(typeof Down == "undefined" || Down == null || Down == ""){
                var Arr = '';
	        }else{
	            var Arr = eval('(' + Down + ')');
	        }
            if(data) {
                var datas = eval('(' + data + ')');
              //  console.log(is_ios);
                if(is_ios==1){
                    if(typeof datas.ios == "undefined" || datas.ios == null || datas.ios == ""){
                          $('.topdown').after('<a style="display: inline-block;height: 30px;line-height: 30px;width: 98%;border-radius: 14px;margin: 5px 0;background: #16b3de;font-size: 14px;color: #fff;box-shadow: 0 0 8px #16b3de" href="'+datas.url+'">安全下载</a>');
                        if(Arr!=''){
                            if(Arr.length>1){
                               if (Arr[0].platform==2){
                                   $('.btn .btn').attr('href', Arr[0].downurl)
                                   $('.btn .btn').text(Arr[0].title)
                               }else{
                                   $('.btn .btn').attr('href', Arr[1].downurl)
                                   $('.btn .btn').text(Arr[1].title)
                               }
                            }else{
                                
                               if (Arr[0].platform==2){
                                   $('.btn .btn').attr('href', Arr[0].downurl)
                                   $('.btn .btn').text(Arr[0].title)
                               } else{
                                   $('.btn .btn').text('暂未下载')
                               }
                            }
                        }else{
                            $('.btn .btn').text('暂未下载')
                        }
                    }else{
                        //Arr[0].downurl = datas.ios;
                        $('.btn .btn').attr('href', datas.ios)
                    }
                }else{
                    if(typeof datas.android == "undefined" || datas.android == null || datas.android == ""){
                         $('.topdown').after('<a style="display: inline-block;height: 30px;line-height: 30px;width: 98%;border-radius: 14px;margin: 5px 0;background: #16b3de;font-size: 14px;color: #fff;box-shadow: 0 0 8px #16b3de" href="'+datas.url+'">安全下载</a>');
                        if(Arr!=''){
                            if(Arr.length>0){
                               if (Arr[0].platform==1){
                                   $('.btn .btn').attr('href', Arr[0].downurl)
                                   $('.btn .btn').text(Arr[0].title)
                               }else{
                                   $('.btn .btn').attr('href', Arr[1].downurl)
                                   $('.btn .btn').text(Arr[1].title)
                               }
                            }else{
                               if (Arr[0].platform==1){
                                   $('.btn .btn').attr('href', Arr[0].downurl)
                                   $('.btn .btn').text(Arr[0].title)
                               }  else{
                                   $('.btn .btn').text('暂未下载')
                               }
                            }
                        }else{
                            $('.btn .btn').text('暂未下载')
                        }
                        
                    }else{
                        console.log()
                        //Arr[1].downurl = datas.android;
                        $('.btn .btn').attr('href', datas.android);
                       
                    }
                }
                   
            }
            //DownArr = JSON.stringify(Arr)
            
            clickSet();
        	
        	    
        	//	createDown(DownArr,'');
        		//Qcity.load(function(city){createDown(DownArr,city);});
        // 	}
        	
        })
        htmlSet();
       // hitsSet();
});
var arr = $("#objID").val();
$.get("https://m.shouyouzhijia.cn/topapi/usercnzz?uid=" + arr, function(data, status) {
        $('.QZfoot').append(data);
    })

function htmlSet(){
	if($('.img_item li').length > 0){
		var img = new Image();
		img.src = $('.img_item li img').attr('src');
		img.onload = function(){
			if(img.width > img.height){
				$('.img_item').height(170);
				$('.img_item li img').height(160);
			}
		}
	}
	if($('.xgcs .recomTabs').length > 0){
		if($('.xgcs .lisstyl1:last li').length == 0){
			$('.xgcs .recomTabs').remove();
		}
	}
	$('.bb_wrap .like_tab p').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		$('.bb_wrap .like_item .item').hide();
		$('.bb_wrap .like_item .item').eq($(this).index()).show();
	});
	$('.cont_3 .Q_title .recomTabs i').click(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
		$(this).parents('.cont_3').find('.lisstyl1').hide();
		$(this).parents('.cont_3').find('.lisstyl1').eq($(this).index()).show();
	});
	if($('#xg_main').length>0){x_scroll('xg_main');}
	if($('.discu').length > 0){
		$('.discu').click(function(){
			$('html,body').animate({scrollTop:$('.cont_p').offset().top + 'px'},300);
		});
	}
}

function clickSet(){
	/*
	if($(".txtcont").length>0){
		$('.txt_foot .open_btn').click(function () {
			if($(this).html() =='展开'){
				$(this).html('收回');
				$('.txtwrap').addClass('on')
			}else{
				$(this).html('展开')
				$('.txtwrap').removeClass('on')
			}
		})
	}
	*/
	/*$('.img_item li img,.txtcont img').click(function(){
		var sSrc = $(this).attr('data-src') || $(this).attr('src');
		$('body').append('<div id="ImgView" style="position:fixed;top:0;left:0;display:block;width:100%;height:100%;text-align:center;background:rgba(0,0,0,0.8);z-index:9999;overflow-y:auto;"><img src="'+sSrc+'" style="max-width:98%;vertical-align:middle;"><i style="display:inline-block;height:100%;vertical-align: middle;"></i></div>');
	});*/
	$(".Qimgs").on("click","img",function(){
			  $(".Qimgs img").css("height","");
			  $(".Qimgs img").attr("height","");	
		     ImgView();
		     opt.num = $(".Qimgs li").length;
		     opt.iCurr = $(this).index(".Qimgs li img");
		     ImgAmplifier($(".Qimgs li img"));
	         });
	$(".txtcont").on("click","img",function(){
		     $(".txtcont img").css("height","");
			 $(".txtcont img").attr("height","");
		     ImgView();
		     opt.num = $(".txtcont img").length;
		     opt.iCurr = $(this).index(".txtcont img");
		     ImgAmplifier($(".txtcont img"));      
	         });
	$('body').on('click','#ImgView',function(){
		$(this).remove();
	});
	$('.bq_item a').click(function(){
		$('html,body').animate({scrollTop:$('.bb_wrap').offset().top},200);
		$('.bb_wrap .like_tab p').eq($(this).index()).click();
	});
}

function clickScroll(){
	var pl=$(".discu");
	var plcon = $(".plhtml");
	var mtop = pl.offset().top;
	var contop = plcon.offset().top;
	var sco = contop - mtop ;
	pl.click(function(){
		$("html,body").animate({scrollTop:sco+700+'px'},300);
	})
	
}

function hitsSet(){
	var r = Qi.ref();
	var dt = {softid:SoftID,ref:'m:'+r};
	
	$.ajax({
		url: TJSite+'downhits.asp?action=update&jsoncallback=?',
		type: 'GET',
		dataType: 'jsonp',
		data: dt,
		error: function(){},
		success: function(data){}
	});
}

function ReStyleBtn(){
	var DownBtn = $('.topdown');
	var DownNum = DownBtn.find('a').length;
	if(DownNum > 1){
		DownBtn.find('a').css({"float":"left","width":"48%","margin":"0 1% 8px 1%"});
		if(!(DownNum%2==0)){DownBtn.find('a:last').css({"width":"98%","margin":"0 1% 8px 1%"})}
	}
}

function createDown(DownArr,city){
	if(QISTZ){
		$('.topdown').first().attr('style','display:block!important;').html('<a style="background:#aaa;color:#fff;">资源已下架</a>');
		$('.alldown').parent().remove();
		return false;
	}
	var DownNum = 0;
	var IsYuYue = false;
	var DownBtn = $('.topdown');
	var AppName = $('[data-appname]').attr('data-appname');
	var sRootID = $('[data-rootid]').attr('data-rootid') || '0';
	
	var isAndroid = false;
	var isIOS = false;
	var sDownHtml = '<a rel="nofollow" href="$xhrefx$" class="btn $xdownx$" data-hz="$lock$" onclick="$onclick$">$xtitlex$</a>';
	var sDownCall = function(cla,tle,hrf,lok,ion){
		newUrl = sDownHtml;
		newUrl = newUrl.replace('$xdownx$',cla);
		newUrl = newUrl.replace('$xtitlex$',tle);
		newUrl = newUrl.replace('$xhrefx$',hrf);
		newUrl = newUrl.replace('$lock$',lok);
		newUrl = newUrl.replace('$onclick$',(ion ? 'downClick(this);' : ''));
		DownBtn.append(newUrl);
	}
	DownBtn.find('a').remove();
	
	if(Qi.android() && DownType == 'game' && QMGs.Game.State()){
		var DownUrlJson = DownArr ? eval('(' + DownArr + ')') : [];
		var GttDownObj = null;
		for(var j = 0; j<DownUrlJson.length; j++){
			if(DownUrlJson[j].downurl.toLowerCase().indexOf('pan.baidu.com') >= 0){
				if(DownUrlJson[j].title.indexOf('提取码') >= 0){
					DownUrlJson[j].title = DownUrlJson[j].title.replace('立即下载','网盘下载');
				}else{
					DownUrlJson[j].title = '网盘下载';
				}
			}
			if(DownUrlJson[j].platform === 1 || DownUrlJson[j].platform === 0){
				GttDownObj = DownUrlJson[j];
			}
		}
		var color = '#16b3de';
		var rndarr = function(arr){var temp_array = new Array();for(var index in arr){temp_array.push(arr[index]);}var return_array = new Array();for(var i = 0; i<arr.length; i++){if(temp_array.length>0){var arrIndex = Math.floor(Math.random()*temp_array.length);return_array[i] = temp_array[arrIndex];temp_array.splice(arrIndex, 1);}else{break;}}return return_array;};
		var SafeUrl = QMGs.Game.Link();
		DownBtn.append('<style>.topdown a:before{display:none!important;}.topdown a{float:left!important;width:48%!important;margin:0 2% 0 0!important;height:36px!important;line-height:36px!important;color:'+color+'!important;background:#fff!important;border:1px solid '+color+'!important;border-radius:4px!important;box-shadow:none!important;box-sizing:border-box!important;font-size:15px!important;}a.safedown{display:block!important;width:48%!important;margin:0 0 0 2%!important;height:36px!important;line-height:36px!important;color:#fff!important;background:'+color+'!important;border-radius:4px!important;box-sizing:border-box!important;font-size:15px!important;text-align:center!important;}.safetips{display:block;width:100%;line-height:20px;background:#e7ffef;color:#888;border:1px solid #ace0a6;box-sizing:border-box;margin:8px 0 0 0;padding:5px 10px;font-size:12px;text-align:left;border-radius:4px;}.safetips font{color:#4bb53f;}</style>');
		if(GttDownObj){
			DownBtn.append('<a rel="nofollow" href="'+GttDownObj.downurl+'" class="btn yuyue_btn platform-'+GttDownObj.platform+'" data-hz="'+GttDownObj.lock+'" onclick="downClick(this);">'+GttDownObj.title+'</a>');
		}else{
			DownBtn.append('<a rel="nofollow" href="javascript:;" class="btn yuyue_btn platform-1">暂未上线</a>');
			YuYueBox();
			IsYuYue = true;
			if(document.title.indexOf('暂未上线') == -1){
				document.title = document.title.replace(/下载/g, '');
				document.title = document.title.replace(/(.*)\s(v)?/, '$1（暂未上线） $2');
			}
		}
		DownBtn.append('<a rel="nofollow" href="'+SafeUrl+'" data-hz="1" class="safedown" onclick="downClick(this);">' + QMGs.Game.Name() + '</a><div style="clear:both;"></div><div class="safetips"><font>说明：</font>' + QMGs.Game.Text() + '</div>');
	}else if(Qi.android() && DownType == 'soft' && QMGs.Soft.State()){
		var DownUrlJson = DownArr ? eval('(' + DownArr + ')') : [];
		var GttDownObj = null;
		for(var j = 0; j<DownUrlJson.length; j++){
			if(DownUrlJson[j].downurl.toLowerCase().indexOf('pan.baidu.com') >= 0){
				if(DownUrlJson[j].title.indexOf('提取码') >= 0){
					DownUrlJson[j].title = DownUrlJson[j].title.replace('立即下载','网盘下载');
				}else{
					DownUrlJson[j].title = '网盘下载';
				}
			}
			if(DownUrlJson[j].platform === 1 || DownUrlJson[j].platform === 0){
				GttDownObj = DownUrlJson[j];
			}
		}
		var color = '#16b3de';
		var rndarr = function(arr){var temp_array = new Array();for(var index in arr){temp_array.push(arr[index]);}var return_array = new Array();for(var i = 0; i<arr.length; i++){if(temp_array.length>0){var arrIndex = Math.floor(Math.random()*temp_array.length);return_array[i] = temp_array[arrIndex];temp_array.splice(arrIndex, 1);}else{break;}}return return_array;};
		var SafeUrl = QMGs.Soft.Link();
		DownBtn.append('<style>.topdown a:before{display:none!important;}.topdown a{float:left!important;width:48%!important;margin:0 2% 0 0!important;height:36px!important;line-height:36px!important;color:'+color+'!important;background:#fff!important;border:1px solid '+color+'!important;border-radius:4px!important;box-shadow:none!important;box-sizing:border-box!important;font-size:15px!important;}a.safedown{display:block!important;width:48%!important;margin:0 0 0 2%!important;height:36px!important;line-height:36px!important;color:#fff!important;background:'+color+'!important;border-radius:4px!important;box-sizing:border-box!important;font-size:15px!important;text-align:center!important;}.safetips{display:block;width:100%;line-height:20px;background:#e7ffef;color:#888;border:1px solid #ace0a6;box-sizing:border-box;margin:8px 0 0 0;padding:5px 10px;font-size:12px;text-align:left;border-radius:4px;}.safetips font{color:#4bb53f;}</style>');
		if(GttDownObj){
			DownBtn.append('<a rel="nofollow" href="'+GttDownObj.downurl+'" class="btn yuyue_btn platform-'+GttDownObj.platform+'" data-hz="'+GttDownObj.lock+'" onclick="downClick(this);">'+GttDownObj.title+'</a>');
		}else{
			DownBtn.append('<a rel="nofollow" href="javascript:;" class="btn yuyue_btn platform-1">暂未上线</a>');
			YuYueBox();
			IsYuYue = true;
			if(document.title.indexOf('暂未上线') == -1){
				document.title = document.title.replace(/下载/g, '');
				document.title = document.title.replace(/(.*)\s(v)?/, '$1（暂未上线） $2');
			}
		}
		DownBtn.append('<a rel="nofollow" href="'+SafeUrl+'" data-hz="1" class="safedown" onclick="downClick(this);">' + QMGs.Soft.Name() + '</a><div style="clear:both;"></div><div class="safetips"><font>说明：</font>' + QMGs.Soft.Text() + '</div>');
	}else if(DownArr){
		var DownUrlJson = eval('(' + DownArr + ')');
		
		for(var j = 0; j<DownUrlJson.length; j++){
			if(DownUrlJson[j].downurl.toLowerCase().indexOf('pan.baidu.com') >= 0){
				if(DownUrlJson[j].title.indexOf('提取码') >= 0){
					DownUrlJson[j].title = DownUrlJson[j].title.replace('立即下载','网盘下载');
				}else{
					DownUrlJson[j].title = '网盘下载';
				}
			}
			if(DownUrlJson[j].platform===1){
				if(DownUrlJson[j].title.indexOf('提取码') == -1 && DownUrlJson[j].title.indexOf('破解') == -1 && DownUrlJson[j].title.indexOf('网盘') == -1){
					DownUrlJson[j].title = '安卓版下载';
				}
				if(!isAndroid) isAndroid = true;
			}
			if(DownUrlJson[j].platform===2){
				if(DownUrlJson[j].title.indexOf('提取码') == -1 && DownUrlJson[j].title.indexOf('网盘') == -1){
					//DownUrlJson[j].title = '苹果版安装';
				}
				if(!isIOS) isIOS = true;
			}
			if(DownUrlJson[j].platform===2 && DownUrlJson[j].downurl.toLowerCase().indexOf('.apple.com') >= 0){
				DownUrlJson[j].title = 'iTunes下载';
			}
			if(DownUrlJson[j].platform===0){
				if(!isAndroid) isAndroid = true;
				if(!isIOS) isIOS = true;
			}
		}
		DownUrlJson.sort((a,b)=>{return a.platform-b.platform});
		if(!isAndroid){
			sDownCall('yuyue_btn platform-1','暂未上线','javascript:;','',false);
			IsYuYue = true;
		}
		for(var i = 0; i<DownUrlJson.length; i++){
			if(isAndroid || isIOS){
				sDownCall('platform-' + DownUrlJson[i].platform,DownUrlJson[i].title,DownUrlJson[i].downurl,DownUrlJson[i].lock,true);
				DownNum++;
			}
		}
		if(!isIOS){
			sDownCall('yuyue_btn platform-2','暂未上线','javascript:;','',false);
			IsYuYue = true;
		}
		if(IsYuYue){
			YuYueBox();	
		}
		if(Qi.ios() && isIOS && document.title.indexOf('破解') >= 0){
			$('.topdown').after('<style>.iosdowntips{text-align:left;font-size:14px;color:#888;line-height:20px;padding:8px 10px 8px 40px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACOklEQVRYR81XPYsUQRCt1xuaeoFGfoCCZqKBgaKpgmDggYGhVE/iX/D8CZpM9xoaCBoIgqaKBoIeZgoeqBtpoKGG2yU1TMvuzs5u98zIOrDR1sfrqup+r0AZX1mWF4wxV4noLBFtAdhSdxH5QUT6exNCeFIUxcvUsFhn6L0/EEJgY8x1Ijq2zr7+fy+E8NAY45n5+yqflQDKstwZjUY3ReRgYuI5MwDfptPp/aIodtr8WwE4514BONcl8aKPiLy21p5fFmspAO+99nP/EMlnYvxk5mpmZr8GAO/9VyI6NHDyGG7CzIdbAXjvHxHRtZTkIYSLcdrr2/EixY+IHjPzdrT9WwEdOGPM7cQgxMxz1fPeS6pvCOFOHMwqiF41ALs5094HgN4OETmtV7QCkHt69ekDQP1jFSoAzrnPAI6klnAIACLyxVp7FM65SwCe5SQfAoDGEJHL8N47regmAOj4KYC3RHRmQwDeKYBOD0/fIawPPMF4PP4lIvs2UQEAvzcPoGsLejzFs8WedB7C3Ja12FdDeJeIbg0UMDfMPWQyWW6ClfbaxkhGnzL03lAg9pj5eGcyUjIBoPpBn9TtHCpvkFEXOu5zCxp03IWSReSktfZjzaYnAHxI7U1DkETHHCWsQYgoLiC6sCSpqUWFvEyU/gtFHM/YUMZtsrwTQa1pQUMRq33rYpKjkBN6P6eEZ+3/39UsoozLKYAbqbpR9Z6IPOi9nC6WttaPV4joVMt6/l5Enlprnye0pTL5A/MtSAge1gtAAAAAAElFTkSuQmCC) #f6f6f6 10px center no-repeat;background-size: 20px;margin:10px 0 10px 0;border-radius:4px;overflow:hidden;}</style><div class="iosdowntips">没有对应的苹果破解地址，点击安装的是苹果官方正版</div>');
		}
	}else{
		sDownCall('yuyue_btn platform-1','暂未上线','javascript:;','',false);
		sDownCall('yuyue_btn platform-2','暂未上线','javascript:;','',false);
		YuYueBox();
		IsYuYue = true;
		if(document.title.indexOf('暂未上线') == -1){
			document.title = document.title.replace(/下载/g, '');
			document.title = document.title.replace(/(.*)\s(v)?/, '$1（暂未上线） $2');
		}
	}
	ReStyleBtn();
	if(Qi.android()){
		if(DownType == 'soft'){
			Qi.load(SWSite + 'public/js/redownzs.js',function(){});
		}
	}
	setHzDown(isIOS,isAndroid);
}

function setHzDown(isIOS,isAndroid){
	QMDown.SetHz();
	if(QMDown.State()){
		QreHref();
		getHzDown(function(data,cl){
			if(QISXJ){return false;}
			if($('.hidedown').length > 0 || $('.superdown').length > 0){return false;}
			$TheVal = '<a rel="nofollow" href="'+data.downUrl+'" class="btn platform-1 '+cl+'" data-hz="1" onclick="downClick(this);">立即下载</a>';
			$('.topdown').html('');
			$('.topdown').first().html($TheVal);
			document.title = document.title.replace(/(预约|（暂未上线）)/g, '下载');
		},function(data,cl){
			if(QISXJ){return false;}
			if($('.hidedown').length > 0 || $('.superdown').length > 0){return false;}
			$TheVal = '<a rel="nofollow" href="'+data.downUrl+'" class="btn platform-2 '+cl+'" data-hz="1" onclick="downClick(this);">在线安装</a>';
			$('.topdown').html('');
			$('.topdown').first().html($TheVal);
			document.title = document.title.replace(/(预约|（暂未上线）)/g, '下载');
		});
	}
}

function getHzDown(ca,ci){
	var sAppName = $('[data-appname]').attr('data-appname') || '';
	var sDownHref = $('.topdown a').attr('href') || 'http://';
	if(!QallUrl.isstr(QMPball.Qnh, sDownHref)){
		if(sAppName.length > 0){
			lkFile = Qd.dth(sAppName);
			lkFile = lkFile.replace(/\\u/g,'Q_');
			if(lkFile.length < 200){
				Qi.load(SWSite + 'down/'+lkFile+'.js',function(){
					if(typeof Qlk == 'object'){
						if(Qlk.i){
							if(Qi.ios()){
								ci({downUrl:Qlk.i},'hzdown');
							}
						}
						if(Qlk.a){
							if(Qi.android()){
								ca({downUrl:Qlk.a},'hzdown');
							}
						}else{
							if(Qi.android()){
								$.ajax({
									url: TJSite + 'hzdown.asp?jsoncallback=?&kw='+escape(sAppName),
									type: 'GET',
									dataType: 'jsonp',
									error: function(){},
									success: function(data){
										if(data.success){
											ca({downUrl:data.downUrl},'jydown');
										}
									}
								});
							}
						}
					}
				});
			}
		}
	}
}

function QreHref(){
	var Qaobj = '.appBox',Qaobjt = '.appBox .topdown',Qaobja = function(sOs){return '.appBox .topdown a.platform-'+sOs+'';},Downobj = '.appBox h1',DownCK = 'ReCkUrl',Qahtml = function(href,text,sOs){return '<a rel="nofollow" href="'+href+'" class="btn platform-'+sOs+'" id="'+DownCK+'" onclick="downClick(this);">'+text+'</a>'},zhref = location.href,thatck = 'RE'+zhref.replace(/(\/|\{|\}|\:|\.|\?|\=|\&|\;)/ig,'');
	//if(Qk.get(thatck)=='1'){return false;}
	Qcity.load(function(city){
		var city = '';
		var IsCity = function(cty,ispb){
			var IsCt = ispb=='0'?true:false;
			if(cty!=''){
				var cits = new Array(),cits = cty.split(",");
				for(i=0;i<cits.length ;i++ ){if(city.indexOf(cits[i])>=0){IsCt = ispb=='0'?false:true;break;}}
			}else{
				IsCt = true;
			}
			return IsCt;
		},IsHour = function(shour,rhour){
			var IsHv = false;
			if(shour=='0' && rhour=='0'){
				IsHv = true;
			}else{
				var Hoursj = new Date();
				var Hourho = Hoursj.getHours()+(Hoursj.getMinutes()/100);
				shour = parseInt(shour);
				rhour = parseInt(rhour);
				if(shour>rhour){
					if(Hourho>=shour || Hourho<=rhour){IsHv = true;}
				}else{
					if(Hourho>=shour && Hourho<=rhour){IsHv = true;}
				}
			}
			return IsHv;
		},IsLyso = function(lyt){
			var IsLy = false;
			if(lyt=='0'){
				IsLy = true;
			}else{
				if((lyt=='1' && Qd.so(1)) || (lyt=='2' && Qd.so(3)) || (lyt=='3' && Qd.so(2))){IsLy = true;}
			}
			return IsLy;
		},IsText = function(text, mate){
			var IsTx = false,IsTitle = '';
			if(mate.indexOf('a') >= 0){IsTitle += document.title;}
			if(mate.indexOf('b') >= 0){IsTitle += $('.bq_item').text();}
			if(IsTitle == ''){IsTitle = document.title;}
			if(text!=''){
				var cits = new Array(),cits = text.split(",");
				for(i=0;i<cits.length ;i++ ){if(IsTitle.indexOf(cits[i])>=0){IsTx = true;break;}}
			}
			return IsTx;
		},IsHref = function(link, sOs){
			var IsLk = false;
			if(link!=''){
				$(Qaobja(sOs)).each(function(){
					var theUrl = $(this).attr('href').toLowerCase();
					var cits = new Array(),cits = link.split(",");
					for(i=0;i<cits.length ;i++ ){if(theUrl.indexOf(cits[i].toLowerCase())>=0){IsLk = $(this);break;}}
				});
			}
			return IsLk;
		},IsReLk = function(add,url,IsDown, sOs){
			var Atxt = '立即下载',Aurl = url,lurl = new Array(),lurl = url.split("|");
			if($(Qaobja(sOs)).hasClass('hzdown')){
				return false;
			}
			if(lurl.length>1){
				Atxt = lurl[0];
				Aurl = lurl[1];
			}
			if(sOs=='1'){
				Atxt = '立即下载'
			}else if(sOs=='2'){
				Atxt = '在线安装'
			}
			if(add=='0'){
				if(IsDown===true){
					$(Qaobjt).prepend(Qahtml(Aurl,Atxt,sOs));
				}else{
					IsDown.attr({href:Aurl,id:DownCK}).text(Atxt);
				}
			}else{
				$(Qaobjt).html('');
				$(Qaobjt).html(Qahtml(Aurl,Atxt,sOs));
			}
			if($(Qaobjt).find('a').length>1){
				ReStyleBtn();
			}
			document.title = document.title.replace(/(预约|（暂未上线）)/g, '下载');
		};
		var osFile = 'all';
		if(Qi.ios()){osFile = 'ios';}
		if(Qi.android()){osFile = 'az';}
		$.ajaxSettings.async = false;
		$.ajax({url:SWSite + 're/all_'+osFile+'_p.json',type:'GET',dataType:'jsonp',jsonpCallback:'rehref',success:function(data){
			if(data.error=="0"){
				if(data.items.length>0){
					var i=0;
					$.each(data.items, function(iii,val){
						if(val.url.indexOf(',')>1){
							var HtmlMidUrl = Qd.sr(val.url,0);
						}else{
							var HtmlMidUrl = Qd.th(val.url);
						}
						HtmlMidUrl = HtmlMidUrl.replace('$ID$', SoftID);
						if(IsCity(val.city,val.ispb) && IsHour(val.sh,val.eh) && IsLyso(val.ly) && (val.lx=='0' || (val.lx=='1' && DownType=='game') || (val.lx=='2' && DownType=='soft'))){
							if(val.type=='0'){
								var IsDown = IsText(val.text, val.mate);
								if(IsDown!==false){
									IsReLk(val.add,HtmlMidUrl,IsDown, (val.os+1));
								}
							}else{
								var IsDown = IsHref(val.href, (val.os+1));
								if(IsDown!==false){
									IsReLk(val.add,HtmlMidUrl,IsDown, (val.os+1));
								}
							}
						}
					});
				}
			}
		}});
	});
	$(Qaobjt).on('click','#'+DownCK,function(){
		Qk.set(thatck,'1');
	});
}

function YuYueBox(){
	/*
	var sAppStr = $('.menu_li .hover').text() || $('.mainNav .cur').text() || '';
	var sAppType = sAppStr.indexOf('网游') >= 0;
	if(!sAppType){return false;}
	*/
	//document.title = document.title.replace(/下载/g, '预约');
	var sAr = {
		site: '//tj.shouyouzhijia.net/ajax_yuyue.asp',
		color: '#16b3de;'
	};
	return;
	var sOs = '1';
	if(Qi.android()){sOs = '2';}
	if(Qi.ios()){sOs = '3';}
	var sID = SoftID;
	var sType = DownType == 'game' ? '游戏':'应用';
	var sAppName = $('[data-appname]').attr('data-appname') || $('h1').text() || '';
	var sStyle = '<style>.yuyue_bg{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:88888;display:none;}.yuyue_box{position: fixed;left:10%;top:50%;width:80%;height:260px;margin-top:-130px;z-index:99999;background: #fff;border-radius: 10px;overflow: hidden;font-size:16px;display:none;}.yuyue_box .box_title{background:'+sAr.color+';font-size:18px;color:#fff;padding: 10px 15px;}.yuyue_box .box_val{padding:20px 30px 0 30px;}.yuyue_box .box_val input{display:block;width:94%;padding:12px 3%;border:1px solid #ddd;border-radius:6px;font-size:16px;}.yuyue_box .box_txt{line-height:60px;text-align:center;color:#888;}.yuyue_box .box_btn{border-top:1px solid #eee;padding:20px 10px;overflow:hidden;}.box_btn span{float:left;width:44%;line-height:46px;margin:0 3%;background:#bbb;color:#fff;text-align:center;border-radius:6px;cursor:pointer;}.box_btn .btn_q{background:'+sAr.color+';}.topdown a:before{display:none;}</style>';
	var sBox = '<div class="yuyue_bg"></div><div class="yuyue_box"><div class="box_title">请输入预约的手机号码</div><div class="box_val"><input type="text" id="yuyueval" placeholder="输入手机号码" maxlength="11"></div><div class="box_txt"><span id="yuyuecont">0</span>人已预约此'+sType+'</div><div class="box_btn"><span class="btn_q">确定</span><span class="btn_c">取消</span></div></div>';
	$('head').append(sStyle);
	$('body').append(sBox);
	//$('.topdown a').removeAttr('onclick').text('立即预约');
	$('.yuyue_btn').removeClass('btn');
	$('.yuyue_btn').click(function(){
		if(!$(this).hasClass('yuyue_btn')){
			return false;
		}
		if($(this).hasClass('platform-1')){
			sOs = '2'
		}else if($(this).hasClass('platform-2')){
			sOs = '3'
		}else{
			sOs = '1';
		}
		$('.yuyue_bg,.yuyue_box').show();
	});
	$('.yuyue_box .btn_c,.yuyue_bg').click(function(){$('.yuyue_bg,.yuyue_box').hide();});
	$('.yuyue_box .btn_q').click(function(){
		var sTel = $('#yuyueval').val();
		var zTel = /^1[34578]\d{9}$/.test(sTel);
		if(!zTel){
			alert('请填写正确的手机号！');
			$('#yuyueval').focus();
			return false;
		}
		$.ajax({
			url: sAr.site + '?jsoncallback=?',
			type: 'GET',
			dataType: 'jsonp',
			data: {
				action: 'set',
				id: sID,
				os: sOs,
				url: window.location.href,
				tel: sTel,
				appname: escape(sAppName)
			},
			error: function(){alert('请求错误，请稍后重试！');},
			success: function(data){
				if(data.success){
					alert('预约成功！');
					$('.yuyue_btn').text('预约成功');
					$('.yuyue_bg,.yuyue_box').remove();
					$('.yuyue_bg').click();
				}else{
					alert(data.msg);
				}
			}
		});
	});
	$.getJSON(sAr.site+'?action=get&id='+sID+'&jsoncallback=?',function(data){if(data){$('#yuyuecont').text(data.count)}});

}


