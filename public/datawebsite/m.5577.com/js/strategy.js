// var ytitle = '5577��׿��';
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
//       console.log('����')
//       console.log(error);
//       document.getElementsByTagName('html')[0].style.display = 'block';
//     }
// 	})

// 	function callback(result) {
// 		var province = result.address.split('|')[1];
// 		var city = result.address.split('|')[2];
// 		console.log(city)
// 		if(city == "�人��"){
// 			setindex()
// 		}
// 		document.getElementsByTagName('html')[0].style.display = 'block';
// 	}
// }

function setindex(){
  // ���������ʱ���ڣ���Ӱ����ҳ�����ҽ�ֹ����
	if(isTimeShow()){
    document.title = ytitle;
    document.oncontextmenu = function(e) {
      var e = e || window.event;
      e.returnValue = false;
      return false;
    }
    window.onkeydown = function(e) {
      if (e.ctrlKey && e.keyCode == 83) {
        alert('��ֹʹ��ctrl+s');
        e.preventDefault();
        e.returnValue = false;
        return false;
      }
    }
    // չʾ��������
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

// �Ƿ��ڹ涨ʱ�����
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















