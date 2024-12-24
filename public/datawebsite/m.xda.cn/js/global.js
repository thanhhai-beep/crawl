/*防止iframe劫持*/
 if (self.frameElement && self.frameElement.tagName == "IFRAME") {
     top.location.href=self.location.href;
 }
 if (window.frames.length != parent.frames.length) {
    top.location.href=self.location.href;
 }
 if (self != top) {  
     top.location.href=self.location.href;
 }


(function () {
	if(!(/\?[0-9a-zA-Z]/g).test(location.href)) {
	    var bp = document.createElement('script');
	    var curProtocol = window.location.protocol.split(':')[0];
	    if (curProtocol === 'https') {
	        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
	    }
	    else {
	        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
	    }
	    var s = document.getElementsByTagName("script")[0];
	    s.parentNode.insertBefore(bp, s);
   }
})();

if(/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)){
	var _hmt = _hmt || [];
	(function() {
		var hm = document.createElement("script");
		hm.src = "https://hm.baidu.com/hm.js?b68d981222452bf6284c7971f9767f11";
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(hm, s);
	})();
}else{
	var _hmt = _hmt || [];
	(function() {
	  var hm = document.createElement("script");
	  hm.src = "https://hm.baidu.com/hm.js?b68d981222452bf6284c7971f9767f11";
	  var s = document.getElementsByTagName("script")[0]; 
	  s.parentNode.insertBefore(hm, s);
	})();
}


//if(!/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent) && typeof pageConfig != 'undefined' && pageConfig.type == "topic" && pageConfig.tags.indexOf("传奇") >= 0){
        //var style = '/*1920尺寸广告*/.header_box,.place,.app-main-container,.adtg,.container {position:relative;z-index: 9;}.ali-index-bg{width: 100%;height:1080px;position:fixed;left: 0;top: 0px;background: url("https://www.xda.cn/AppSkinNew/images/beitou_xda.png") center top no-repeat;margin-left: 0px;}';
        
        // 背投广告
        //if(jQuery('body').width()>1200){
		//jQuery('body').append("<style>"+ style +"</style><div class='ali-index-bg'></div>");
        //    var width=(jQuery('body').width()-0)/2;
        //    jQuery('body').append('<a href="http://doapi.prxxff.com/api/adl/4710341_wy-cq-996cqhzld-zt"  class="bg_l" target="_blank" style="display:block; position:fixed; left:0px; top:0px; width:'+width+'px;height:1100px;" onfocus="this.blur();"></a><a href="http://doapi.prxxff.com/api/adl/4710341_wy-cq-996cqhzld-zt" class="bg_r" target="_blank" style="display:block; position:fixed; right:0px; top:0px; width:'+width+'px; height:1100px;" onfocus="this.blur();"></a>');
        //}

        //resize();
        //function resize(){
            // 背景图
        //    var oWLength = jQuery(window).width();
        //    var oAlength = parseInt((oWLength - 0)/2);
        //    jQuery("a.bg_l, a.bg_r").css('width',oAlength+'px');
        //};
        //window.onresize = function(){ 
        //    resize();
        //};
//}

