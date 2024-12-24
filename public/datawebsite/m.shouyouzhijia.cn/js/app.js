var TJSite = '//tj.shouyouzhijia.net/';
//var SWSite = '//snew.45vbwz.com/';
var Qb = {
	uab: function(str){
		var b = 'other';
		var u = navigator.userAgent.toLowerCase();
		var r = ['msie','firefox','360','2345','chrome','uc','wechat','qq','miuibrowser','sogou','opera','baidu','safari'];
		for(var i=0;i<r.length;i++){
			if(u.indexOf(r[i]) > -1){
				b = r[i];
				break;
			}
		}
		return str == b;
	},
	ver: function () {
		var u = navigator.userAgent.toLowerCase();
		return {
			mobile: !!u.match(/AppleWebKit.*Mobile/i) || !!u.match(/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/),
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
			android: u.indexOf('android') > -1 || u.indexOf('linux') > -1 || u.indexOf('harmony') > -1,
			iPhone: u.indexOf('iphone') > -1 || u.indexOf('mac') > -1,
			iPad: u.indexOf('ipad') > -1,
			qq: u.indexOf('mqqbrowser') > -1,
			baidu: u.indexOf('bidubrowser') > -1,
			bdapp: u.indexOf('baiduboxapp') > -1,
			sf: u.indexOf('safari') > -1,
			uc: u.indexOf('ucbrowser') > -1,
			u3: u.indexOf('360') > -1
		};
	} (),
	lang: (navigator.browserLanguage || navigator.language).toLowerCase()
},Qi = {
    ua:navigator.userAgent.toLowerCase(),
	wlh:window.location.href,
	ref:function(){var ref='';if(document.referrer.length>0){ref=document.referrer;}try{if(ref.length==0&&opener.location.href.length>0){ref=opener.location.href;}}catch(e){}return ref;},
	android:function(){return this.ua.indexOf('android') > -1 || this.ua.indexOf('linux') > -1 || this.ua.indexOf('harmony') > -1;},
	ios:function(){return !!this.ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i);},
	ortime:function(dy,xy){var Gsisj = new Date(),Gsiho = Gsisj.getHours();return Gsiho>=dy || Gsiho<=xy;},
	isweb:function(){var Quas = ['nexus','sm-g900p','SM-N900A','ZTE N909','13B143','11A465','windows','ipad','meego','gt-i9505','gt-i9300','sm-n900t','playbook','kfapwi','8c148','12a4345d','gt-n7100','lgms323'];for(i=0;i<Quas.length;i++){if(this.ua.indexOf(Quas[i].toLowerCase())>=0) return false;}return true;},
	isbdso:function(){return this.ref.toLowerCase().indexOf('baidu.')>0;},
	downtj:function(the,s){var sc = s || $(the).attr('src') || '';var ssrc = '&src='+sc;var url = $(the).attr('href');var href = this.wlh;$.ajax({url:'//tjhz.shouyouzhijia.net/ajax_hztj.asp',type:'GET',dataType:'jsonp',data:'url='+url.replace(/&/g,"%26")+ssrc+'&surl='+href+'&jsoncallback=?'});},
	tip:function(msg,ms){ms = ms || 1600;if($('.mip-html-ajax-tip').length > 0){$('.mip-html-ajax-tip').remove();}$('body').append('<div class="mip-html-ajax-tip">'+msg+'</div>');var msgOut = setTimeout(function(){$('.mip-html-ajax-tip').fadeOut(100,function(){$(this).remove();});clearTimeout(msgOut);},ms);},
	load:function(src,call){var call = call || function(){},loadNode = document.createElement('script'),Element = document.getElementsByTagName("body")[0];loadNode.type = 'text/javascript';loadNode.src = src;Element.appendChild(loadNode);loadNode.onload = call;}
},
Qd = {
	ck:1,
	sr:function(Qsr,Qlx){var Qlx=Qlx||0,Qstr=new Array(),Qspl=Qsr.split(",");this.ck++;for(i=0;i<Qspl.length;i++){Qstr[i]=this.th(Qspl[i]);}if(Qlx=="0"){Qret=this.ar(Qstr)[0];}else{Qckm=Qspl[0].replace(/(\/|\{|\}|\:|\.|\?|\=|\&|\;)/ig,"")+this.ck;Cook=Qk.get(Qckm);if(!Cook){Qcok=0;Qk.set(Qckm,Qcok);}else{if(Cook>=(Qspl.length-1)){Qcok=0;Qk.set(Qckm,Qcok);}else{Qcok=Cook*1+1;Qk.set(Qckm,Qcok);}}Qret=Qstr[Qcok];}return Qret;},
	th:function(Qsr){var imgReg=/{(A|B|S):([0-9]+)}/gi;var arr=Qsr.match(imgReg);if(arr){for(var i=0;i<arr.length;i++){qrr=arr[i].match(/{(A|B|S):([0-9]+)}/i);Qtype=qrr[1].toLowerCase();if(Qtype=="a"){Qlksr=this.sj(0,qrr[2]);}else if(Qtype=="b"){Qlksr=this.sj(2,qrr[2]);}else if(Qtype=="s"){Qlksr=this.sj(1,qrr[2]);}Qsr=Qsr.replace(arr[i],Qlksr);}}return Qsr;},
	sj:function(s,n){var Qsjs = ['0','1','2','3','4','5','6','7','8','9'];var Qsja = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];var Qsjb = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];if(s=="1"){jsstr=Qsjs;jsnum=9;}else if(s=="2"){jsstr=Qsja;jsnum=25;}else{jsstr=Qsjb;jsnum=35;}var Qsrr="";for(var i=0;i<n;i++){var id = Math.ceil(Math.random()*jsnum);Qsrr += jsstr[id];}return Qsrr.toLowerCase();},
	ar:function(arr){var temp_array = new Array();for(var index in arr){temp_array.push(arr[index]);}var return_array = new Array();for(var i = 0; i<arr.length; i++){if(temp_array.length>0){var arrIndex = Math.floor(Math.random()*temp_array.length);return_array[i] = temp_array[arrIndex];temp_array.splice(arrIndex, 1);}else{break;}}return return_array;},
	so:function(lx){var lx = lx || 0,ss = ['google.','baidu.','soso.','so.','360.','yahoo.','youdao.','sogou.','gougou.','sm.','yisou.','bing.','www.shouyouzhijia.net'];if(lx==2){ss = ['google.','soso.','so.','360.','yahoo.','youdao.','sogou.','gougou.','sm.','yisou.','bing.','www.shouyouzhijia.net'];}if(lx==3){ss = ['baidu.'];}var ref = document.referrer,ref = ref.toLowerCase(),sostr = ss,isso = false;for(var ii=0;ii<sostr.length;ii++){if(ref.indexOf(sostr[ii])>0){isso=true;break;}}return isso;},
	isstr:function(arr,str){var iArr=arr,iStr=str;if(typeof iArr == 'string'){iArr = iArr.split(',');}if(typeof iStr == 'string'){iStr = iStr.split(',');}for(var ia=0;ia<iArr.length;ia++){for(var is=0;is<iStr.length;is++){if(iStr[is].toLowerCase().indexOf(iArr[ia].toLowerCase())>=0){return true;}}}return false;},
	dth:function(str){str = str.toLowerCase();var res=[];for(var i=0;i < str.length;i++){res[i]=('00'+str.charCodeAt(i).toString(16)).slice(-4);}return '\\u'+res.join('\\u');},
	htd:function(str){str=str.replace(/\\/g,'%');return unescape(str);},
	rehrefurl:function(str){
		var sStr = str.toLowerCase();
		if(Qi.ios()){
			if(Qi.ua.indexOf('baiduboxapp')>=0){
				if(sStr.indexOf('at.umeng.com/ljgjea')>=0 || sStr.indexOf('dl.yelan.com/u/7/5c57')>=0){
					str = 'https://m.shouyouzhijia.net/aldzn/iosdown.html';
				}
			}
		}
		return str;
	}
},
Qk = {
    get:function(name){var value = '',matchs;if (matchs = document.cookie.match("(?:^| )" + name + "(?:(?:=([^;]*))|;|$)")) value = matchs[1] ? unescape(matchs[1]) : "";return value},
    set:function(name,value,expire,domain){expire = expire || 24 * 3600 * 1000;var date = new Date(),cookie = "";date.setTime(date.getTime() + expire);cookie = name + "=" + escape(value) + ";expires=" + date.toGMTString() + ";path=/;";domain && (cookie += "domain=" + domain + ";");document.cookie = cookie},
    del:function(name,domain){Cookie.set(name, '', -1, domain)}
},
downClick = function(el,id){
	var sSrc = '';
	if($(el).attr("src")){
			sSrc = '&src='+$(el).attr("src");
	}
	if($(el).attr("href")){
		$.ajax({
			url: 'https://tjhz.shouyouzhijia.net/ajax_hztj.asp',
			type: 'GET',
			dataType: 'json',
			data: 'url='+$(el).attr("href").replace(/&/g,"%26")+'&surl='+window.location.href+sSrc+'&jsoncallback=?',
			error: function(){
			},
			success: function(data){		
			}
		});
		
		var HZSoftID = $("[data-softid]").attr("data-softid") || $("[data-id]").attr("data-id") || 0;
		$.ajax({
		url: 'https://tj.shouyouzhijia.net/hitsHZTJ.asp',
		type: 'GET',
		dataType: 'json',
		data: 'softid='+HZSoftID+'&url='+$(el).attr("href").replace(/&/g,"%26")+'&jsoncallback=?',
		error: function(){
		},
		success: function(data){		
		}
	   });
	}
},
videoLoad = function(){
	var videoError = function(bind, src){
		$.ajax({
			url: TJSite + 'video.asp?jsoncallback=?',
			type: 'GET',
			dataType: 'jsonp',
			data: {
				bind: bind,
				src: escape(src),
				href: escape(location.href)
			}
		});
	};
	$('.dvideo video').bind('canplay',function(e){
		videoError('canplay', $(this).find('source').attr('src'));
	});
	$('.dvideo video source').bind('error',function(e){
		videoError('error', $(this).attr('src'));
	});
}
videoLoad();