// 所有详情页img图片父级为a标签的 阻止点击图片链接跳转
(function (){
  var imgBoxAll = $('#bigImgModel img').parent();
  console.log(imgBoxAll);
  [].slice.call(imgBoxAll).forEach(function(element,index){
    if(element.nodeName == 'A'){
      $(element).attr('href', "javascript:void(0);");
      // $(element).removeAttr('target');
      $(element).attr('target','_self');
    }
  })
})()