// var ytitle = '5577安卓网';
// if(typeof(pageAttr) != 'undefined' && pageAttr.pagename === 'index'){
// 	document.getElementsByTagName('html')[0].style.display = 'none';
// 	$.ajax({
// 		async: true,
// 		url: "//api.map.baidu.com/location/ip?ak=F83d07d2f038589370113e1ff2349a78&callback=callback",
// 		type: "get",
// 		dataType: "jsonp",
// 		jsonp: 'callback',
// 		jsonpCallback: 'callback',
// 		success: function (response, status, xhr) { 
      
//     },
// 		error: function (error) { 
//       console.log('错误')
//       console.log(error);
//       document.getElementsByTagName('html')[0].style.display = 'block';
//     }
// 	})

// 	function callback(result) {
// 		var province = result.address.split('|')[1];
// 		var city = result.address.split('|')[2];
// 		console.log(city)
// 		if(city == "武汉市"){
// 			setindex()
// 		}
// 		document.getElementsByTagName('html')[0].style.display = 'block';
// 	}
// }

function setindex(){
  // 如果在屏蔽时间内，则影藏首页，并且禁止复制
	if(isTimeShow()){
    document.title = ytitle;
    document.oncontextmenu = function(e) {
      var e = e || window.event;
      e.returnValue = false;
      return false;
    }
    window.onkeydown = function(e) {
      if (e.ctrlKey && e.keyCode == 83) {
        alert('禁止使用ctrl+s');
        e.preventDefault();
        e.returnValue = false;
        return false;
      }
    }
    // 展示博客内容
    try{
      $('meta[name=description]').remove();
      $('meta[name=keywords]').remove();
      $('body').html('');
      $('body').load('/inc/baindex.txt',function(){document.title=ytitle});
    }catch(e){
      $('body').html('');
      $('body').load('/inc/baindex.txt',function(){document.title=ytitle});
    }
  }else{
    return
  }
}

// 是否在规定时间段内
function isTimeShow(){
  var zoum=(new Date()).getDay();
  var hh=(new Date()).getHours();   
  var wt_=true;
  if(zoum==0||zoum==6){
    wt_=false;
  }else{
    if(hh<7 || hh>19) wt_=false;
  }
  return wt_
}















