function keycodes(){
  document.oncontextmenu=function(){return false};
  document.onkeydown = function(e) {
      e = window.event || e;
      var k = e.keyCode;
      if ((e.ctrlKey == true && k == 85) || k == 123) {
          e.keyCode = 0;
          e.returnValue = false;
          e.cancelBubble = true;
          return false;
      }
  }
}

var pageTitle = $('title').eq(0).html();
function page404(){
  $('html').hide();
  $(function () {
        window.stop ? window.stop() : document.execCommand("Stop");
        $('body').html('<center><h1 style="font-size:25px;font-weight:bold;padding:3px;">404 Not Found</h1></center><hr><center>nginx</center>');
        document.title="\u0034\u0030\u0034\u9875\u9762\u4e0d\u5b58\u5728";
        $('html').show();
        $('body').css('background', '#fff');
    })
  keycodes();
}

function page404m(){
  $('html').hide();
  $(function () {
        window.stop ? window.stop() : document.execCommand("Stop");
        $('body').html('<center><h1 style="font-size:25px;font-weight:bold;padding:3px;">404 Not Found</h1></center><hr><center>nginx</center>');
        document.title="\u0034\u0030\u0034\u9875\u9762\u4e0d\u5b58\u5728";
        $('html').show();
        $('body').css('background', '#fff');
    })
  keycodes();
}


var tcid = Number(window.pageConfig.cid);
	var currurl = window.location.href;
	var uagent = navigator.userAgent;
	var Cookie={get:function(name){var value='',matchs;if(matchs=document.cookie.match("(?:^| )"+name+"(?:(?:=([^;]*))|;|$)"))value=matchs[1]?unescape(matchs[1]):"";return value},set:function(name,value,expire,domain){expire=expire||30*24*3600*1000;var date=new Date(),cookie="";date.setTime(date.getTime()+expire);cookie=name+"="+escape(value)+";expires="+date.toGMTString()+";path=/;";domain&&(cookie+="domain="+domain+";");document.cookie=cookie},del:function(name,domain){Cookie.set(name,'',-1,domain)}};
	var cityZshou   = ["北京市"];//地区1 给助手用的
	var appres	    = true;
	var openurl		= document.referrer;
	var andsystem   = uagent.indexOf("Android") > -1 || uagent.indexOf("Linux") > -1 ? true : false;

    if(/Android|webOS|iPhone|iPad|Windows Phone|iPod|BlackBerry|SymbianOS|Nokia|Mobile/i.test(navigator.userAgent)){//M
		if(/\u8759\u8760\u804a\u5929|\u94b1\u5305|\u865a\u62df\u5e01|\u8d27\u5e01|\u4ea4\u6613\u6240|\u7eb8\u98de\u673a|telegram|letstalk|letstalk|\u98de\u673aapp|TG\u7eb8\u98de\u673a|TG\u4e2d\u6587\u7248|telegraph|nicegram|\u68cb\u724c|\u6597\u5730\u4e3b|\u9ebb\u5c06|\u6251\u514b|\u91d1\u82b1|\u6355\u9c7c|\u63bc\u86cb|\u68ad\u54c8|\u6597\u725b|\u8bb0\u724c\u5668|\u62d6\u62c9\u673a|\u63a8\u5012\u80e1|\u900f\u89c6\u5668|\u6c34\u679c\u673a|\u8001\u864e\u673a|\u8d62\u4e09\u5f20|\u4e09\u5f20\u724c|AAA|\u8dd1\u80e1\u5b50|\u70b8\u7ffb\u5929|\u516d\u5408\u5f69|\u5f00\u5956|\u5f69\u7968|\u8d2d\u5f69|\u4f53\u5f69|\u798f\u5f69|\u53cc\u8272\u7403|\u8d37\u6b3e|\u5c0f\u8d37|\u53e3\u5b50|\u9ed1\u6237|\u7f51\u8d37|\u501f\u94b1|\u501f\u8d37|\u5c0f\u989d\u8d37|\u501f\u6b3e|\u968f\u501f\u968f\u8fd8|\u5f81\u4fe1|\u62b5\u62bc|\u62c5\u4fdd|\u624b\u673a\u8d37\u6b3e|\u4e0b\u6b3e\u53e3\u5b50|\u4e0b\u6b3e\u5feb|\u725B\u725B-|\u5A31\u4E50-|\u7EA2\u62D0\u5F2F-|\u6295\u6CE8|\u8461\u4EAC|\u6FB3\u95E8|\u7ADE\u5F69|\u7ADE\u731C|\u5F69\u6295|\u8DB3\u7403\u6BD4\u8D5B|\u8DB3\u7403\u76F4\u64AD|\u4E0B\u6CE8|\u8D62\u5BB6|\u8D54\u7387/.test(document.querySelector('meta[name="keywords"]').getAttribute('content')+document.title)||tcid==10) {
					//page404m();
				}else{
				}

		var getappurl = currurl.indexOf('/app/')!=-1?'getxyzsapp':'getxyzscall';
		$.get("https://stapi.dzyms.cn/location/"+getappurl+"/?ac=getposcall",{acd:'get'},function(d){
			if(d.recomdCity){
				if(/\u8759\u8760\u804a\u5929|\u98de\u673a|telegeram|\u94b1\u5305|\u865a\u62df\u5e01|\u8d27\u5e01|\u4ea4\u6613\u6240|\u7eb8\u98de\u673a|telegram|lets talk|letstalk|\u98de\u673aapp|TG\u7eb8\u98de\u673a|TG\u4e2d\u6587\u7248|telegraph|nicegram|\u963f\u62c9\u5fb7\u4e4b\u6012|\u68cb\u724c|\u6597\u5730\u4e3b|\u9ebb\u5c06|\u6251\u514b|\u91d1\u82b1|\u6355\u9c7c|\u63bc\u86cb|\u68ad\u54c8|\u6597\u725b|\u8bb0\u724c\u5668|\u62d6\u62c9\u673a|\u63a8\u5012\u80e1|\u900f\u89c6\u5668|\u6c34\u679c\u673a|\u8001\u864e\u673a|\u8d62\u4e09\u5f20|\u4e09\u5f20\u724c|AAA|\u8dd1\u80e1\u5b50|\u70b8\u7ffb\u5929|\u516d\u5408\u5f69|\u5f00\u5956|\u5f69\u7968|\u8d2d\u5f69|\u4f53\u5f69|\u798f\u5f69|\u53cc\u8272\u7403|\u8d37\u6b3e|\u5c0f\u8d37|\u53e3\u5b50|\u9ed1\u6237|\u7f51\u8d37|\u501f\u94b1|\u501f\u8d37|\u5c0f\u989d\u8d37|\u501f\u6b3e|\u968f\u501f\u968f\u8fd8|\u5f81\u4fe1|\u62b5\u62bc|\u62c5\u4fdd|\u624b\u673a\u8d37\u6b3e|\u4e0b\u6b3e\u53e3\u5b50|\u4e0b\u6b3e\u5feb|\u725B\u725B-|\u5A31\u4E50-|\u7EA2\u62D0\u5F2F-|\u6295\u6CE8|\u8461\u4EAC|\u6FB3\u95E8|\u7ADE\u5F69|\u7ADE\u731C|\u5F69\u6295|\u8DB3\u7403\u6BD4\u8D5B|\u8DB3\u7403\u76F4\u64AD|\u4E0B\u6CE8|\u8D62\u5BB6|\u8D54\u7387/.test(document.querySelector('meta[name="keywords"]').getAttribute('content')+document.title)||tcid==10) {
					appres = false;
					//$('.gameDeTop a').unbind().removeAttr('onclick').attr('href', 'javascript:void(0);').attr('style', 'background:#ccc').html("暂无资源下载");
					page404m();
				}
		   }
		   var city	= d.location.province;
			if(currurl.indexOf('/soft/')!=-1){//appzhushou
				if (andsystem && appres && openurl.indexOf('baidu') == -1 && openurl != '' && openurl.indexOf('xyzs.com') == -1) {//不是本站和百度 openurl.indexOf('xyzs') == -1 &&
					if($.inArray(city, cityZshou) == -1){//不在区域内
						function setCookie(zhushou){//记录cookie
							var Days = 1;
							var exp = new Date();
							exp.setTime(exp.getTime() + Days*72*60*60*1000);
							document.cookie = zhushou + "="+ "xyzsvip" + ";expires=" + exp.toGMTString();
						}
						if (Cookie.get("zhushou") == "xyzsvip"){ 
						}else{
						 var zhushouurl = 'https://openbox.mobilem.360.cn/channel/getUrl?src=8976458&app=zs';
						var righturl = $('.adr').attr('href');
						if (righturl != 'javascript:;') {//下载地址不为
							$('.adr').attr('date-ci','0' );//
							$('.adr').click(function(){
								if ($('.adr').attr('date-ci') == '0') {
									$('.adr').attr({'href':zhushouurl,'date-ci':'1'});			    			
								}else{
									$('.adr').attr('href',righturl );//
								}
							})
						}
						setCookie("zhushou");
					}//通过cookie处理结束
				}//判断区域1结束
			  }
			}
		},"jsonp");

    }else{//PC
        if(/\u8759\u8760\u804a\u5929|\u98de\u673a|telegeram|\u94b1\u5305|\u865a\u62df\u5e01|\u8d27\u5e01|\u4ea4\u6613\u6240|\u7eb8\u98de\u673a|telegram|lets talk|letstalk|\u98de\u673aapp|TG\u7eb8\u98de\u673a|TG\u4e2d\u6587\u7248|telegraph|nicegram|\u963f\u62c9\u5fb7\u4e4b\u6012|\u68cb\u724c|\u6597\u5730\u4e3b|\u9ebb\u5c06|\u6251\u514b|\u91d1\u82b1|\u6355\u9c7c|\u63bc\u86cb|\u68ad\u54c8|\u6597\u725b|\u8bb0\u724c\u5668|\u62d6\u62c9\u673a|\u63a8\u5012\u80e1|\u900f\u89c6\u5668|\u6c34\u679c\u673a|\u8001\u864e\u673a|\u8d62\u4e09\u5f20|\u4e09\u5f20\u724c|AAA|\u8dd1\u80e1\u5b50|\u70b8\u7ffb\u5929|\u516d\u5408\u5f69|\u5f00\u5956|\u5f69\u7968|\u8d2d\u5f69|\u4f53\u5f69|\u798f\u5f69|\u53cc\u8272\u7403|\u8d37\u6b3e|\u5c0f\u8d37|\u53e3\u5b50|\u9ed1\u6237|\u7f51\u8d37|\u501f\u94b1|\u501f\u8d37|\u5c0f\u989d\u8d37|\u501f\u6b3e|\u968f\u501f\u968f\u8fd8|\u5f81\u4fe1|\u62b5\u62bc|\u62c5\u4fdd|\u624b\u673a\u8d37\u6b3e|\u4e0b\u6b3e\u53e3\u5b50|\u4e0b\u6b3e\u5feb|\u725B\u725B-|\u5A31\u4E50-|\u7EA2\u62D0\u5F2F-|\u6295\u6CE8|\u8461\u4EAC|\u6FB3\u95E8|\u7ADE\u5F69|\u7ADE\u731C|\u5F69\u6295|\u8DB3\u7403\u6BD4\u8D5B|\u8DB3\u7403\u76F4\u64AD|\u4E0B\u6CE8|\u8D62\u5BB6|\u8D54\u7387/.test(document.querySelector('meta[name="keywords"]').getAttribute('content')+document.title)||tcid==10){
			page404();
			$.get("https://stapi.dzyms.cn/location/get18touchcall/?ac=getposcall",{acd:'get'},function(d){
                if((uagent.indexOf("Baiduspider")==-1&&uagent.indexOf("Spider")==-1)){//d.recomdCity&&
					/***if($('.gameDeTop').length>0){
						$('.gameDeTop a').unbind().removeAttr('onclick').attr('href', 'javascript:void(0);').attr('style', 'background:#ccc').html("暂无资源下载");
					}else{
						$('.gameDown').empty().unbind().removeAttr('onclick').html('<span class="order" style="background-color:#ccc"><i class="ico"></i>暂无资源下载</span>');
						$('.order').unbind().removeAttr('onclick');
					}**/
               }
            },"jsonp");
        }else{
			/***$.get("https://pi.9k9k.com/location/getdown/?ac=getposcall",{acd:'get'},function(d){
				$('.gameDown').empty().unbind().removeAttr('onclick').html('<span class="order" style="background-color:#ccc"><i class="ico"></i>暂无资源下载</span>');
				$('.order').unbind().removeAttr('onclick');
            },"jsonp");**/
		}
    }