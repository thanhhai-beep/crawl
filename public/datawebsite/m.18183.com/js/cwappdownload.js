var ka=document.referrer.indexOf("ka.18183.com")!==-1;var cwappDownloadBtnGq={getQueryString:function(name){var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)","i");var r=window.location.search.substr(1).match(reg);if(r!=null)return unescape(r[2]);return null},base64encode:function(str){var out,i,len;var c1,c2,c3;var base64EncodeChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";len=str.length;i=0;out="";while(i<len){c1=str.charCodeAt(i++)&255;if(i==len){out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt((c1&3)<<4);break}c2=str.charCodeAt(i++);if(i==len){out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt((c1&3)<<4|(c2&240)>>4);out+=base64EncodeChars.charAt((c2&15)<<2);break}c3=str.charCodeAt(i++);out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt((c1&3)<<4|(c2&240)>>4);out+=base64EncodeChars.charAt((c2&15)<<2|(c3&192)>>6);out+=base64EncodeChars.charAt(c3&63)}return out},_getRandomString:function(len){len=len||32;var $chars="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";var maxPos=$chars.length;var pwd="";for(i=0;i<len;i++){pwd+=$chars.charAt(Math.floor(Math.random()*maxPos))}return pwd},browserJudge:function(){var userAgentInfo=navigator.userAgent,browserConfig={};if(userAgentInfo.match(/(iPhone|iPod|Android|ios|SymbianOS)/i)){var userAgentInfo=userAgentInfo.toLowerCase();if(userAgentInfo.match(/MicroMessenger/i)=="micromessenger"){browserConfig.type="weixin"}else{browserConfig.type="mobile"}if(userAgentInfo.match(/Android/i)=="android"){browserConfig.os="android"}else if(/(iPhone|iPad|iPod|iOS)/i.test(userAgentInfo)){browserConfig.os="ios"}}else{browserConfig.type="pc"}return browserConfig},init:function(appPack){var that=this,getIsApp=that.getQueryString("app"),browserConfig=that.browserJudge(),parameter=that.parameter,obj_hasApp=true;if(browserConfig.type=="weixin"){if(typeof that.weixinCallback=="function"){that.weixinCallback();return false}else if(that.hasweixin){that.goDownPage();return false}}if(typeof parameter.type=="undefined"||typeof parameter.id=="undefined"){that.falseCallback();return false}if(that.getQueryString("appack")!=null||appPack){appPack=true}var openApp=function(){var localUrl="giftdaily18183://?type="+parameter.type+"&id="+that.base64encode(parameter.id.toString()),downUrl=that.getUrl(appPack);var openIframe=createIframe();if(browserConfig.os=="ios"){if(ka){window.location.href="http://box.18183.com/download.html";return}window.location.href="giftdaily18183://?type="+parameter.type+"&id="+parameter.id;var spinnerWrap=document.createElement("div");spinnerWrap.className="spinner";document.body.appendChild(spinnerWrap);setTimeout(function(){document.body.removeChild(spinnerWrap);window.location.href=downUrl},500)}else{if(navigator.userAgent.indexOf("Chrome")>-1){window.location.href=localUrl}else{openIframe.src=localUrl}if(browserConfig.type=="pc"){window.location.href=downUrl;return false}setTimeout(function(){window.location.href=downUrl},500)}};openApp()},auto:function(){var that=this;that.getParameter();if(that.getQueryString("app")=="MobileGameForum"){that.cwappCallback();return false}if(that.getQueryString("isqrcode")==1){that.init()}},iosCallback:function(){},falseCallback:function(){var that=this,browserConfig=that.browserJudge();console.log("falseCallback");if(browserConfig.os=="ios"){window.location.href=that.iOSUrl}else{window.location.href=that.defaultUrl}},cwappCallback:function(){},goDownPage:function(){var that=this,urlStr="?"+that.parseParam(that.parameter);window.location.href="//wango.18183.com/download.html"+urlStr},getUrl:function(appPack){var that=this,browserConfig=that.browserJudge(),parameter=that.parameter;if(browserConfig.os=="ios"){return that.iOSUrl}else{if(typeof parameter.type=="undefined"||parameter.type===""||typeof parameter.id=="undefined"||parameter.id===""){return that.defaultUrl}if(appPack){var strApkName="";if(parameter.type==101){strApkName="玩Go_小游戏随手玩"}else if(parameter.type==102&&typeof parameter.apkname!="undefined"){strApkName=parameter.apkname+"_玩Go高速下载"}else if(parameter.type==103){strApkName="玩Go_海量福利天天领"}else if(parameter.type==105){strApkName="玩Go礼包大全"}if(parameter.app_canal==392){parameter.app_canal="FA_HAO"}else if(parameter.app_canal==393){parameter.app_canal="YOU_XI_KU"}else if(parameter.app_canal==394){parameter.app_canal="ZHUAN_QU"}else if(parameter.app_canal==396){parameter.app_canal="WZRY"}else if(parameter.app_canal==382){parameter.app_canal="56Owtr7nZx80Dg7RKaja"}else if(parameter.app_canal==563){parameter.app_canal="TEST_OL"}else if(parameter.app_canal==450){parameter.app_canal="te5"}var ext_parameter;if(typeof parameter.apkChannelId=="undefined"){ext_parameter=parameter.id.toString()}else{ext_parameter={id:parameter.id.toString(),channel_id:parameter.apkChannelId.toString()}}if(parseInt(parameter.type)<200&&typeof parameter.apkChannelId!="undefined"){parameter.type=parseInt(parameter.type)+100}var cwappJson={type:parameter.type.toString(),ext:ext_parameter,apk_name:encodeURI(strApkName),app_slug:9010,app_secret:parameter.app_canal.toString()};that.log=cwappJson;return"http://yuedu.18183.com/yd-down/"+that._getRandomString()+encodeURI(that.base64encode(JSON.stringify(cwappJson)))}else{return"http://yuedu.18183.com/app/down-channel/392_"+parameter.app_canal+""}}},getParameter:function(){var that=this,parameter=that.parameter;if(typeof cwappType=="undefined"){if(that.getQueryString("type")!=null){parameter.type=that.getQueryString("type")}}else{parameter.type=cwappType}if(typeof cwappId=="undefined"){if(that.getQueryString("id")!=null){parameter.id=that.getQueryString("id")}}else{parameter.id=cwappId}if(typeof cwappApkName=="undefined"){if(that.getQueryString("apkname")!=null){parameter.apkname=that.getQueryString("apkname")}}else{parameter.apkname=cwappApkName}if(typeof cwappApp_canal=="undefined"){if(that.getQueryString("app_canal")!=null){parameter.app_canal=that.getQueryString("app_canal")}else{parameter.app_canal="382"}}else{parameter.app_canal=cwappApp_canal}if(typeof cwappApkChannelId=="undefined"){if(that.getQueryString("channel_id")!=null){parameter.apkChannelId=that.getQueryString("channel_id")}}else{parameter.apkChannelId=cwappApkChannelId}},parseParam:function(param,key){var that=this;var paramStr="";if(param instanceof String||param instanceof Number||param instanceof Boolean){paramStr+="&"+key+"="+encodeURIComponent(param)}else{$.each(param,function(i){var k=key==null?i:key+(param instanceof Array?"["+i+"]":"."+i);paramStr+="&"+that.parseParam(this,k)})}return paramStr.substr(1)},weixinCallback:null,hasweixin:true,defaultUrl:"http://yuedu.18183.com/app/down/392_1",iOSUrl:ka?"http://box.18183.com/download.html":"https://yuedu.18183.com/app/down-channel/399_389",log:"",parameter:{}};var createIframe=function(){var iframe;return function(){if(iframe){return iframe}else{iframe=document.createElement("iframe");iframe.style.display="none";document.body.appendChild(iframe);return iframe}}}();cwappDownloadBtnGq.auto();