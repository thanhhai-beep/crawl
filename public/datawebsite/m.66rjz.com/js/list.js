$(function(){
    tab(".pic .pic-top li",".pic-bottom .con","cur");
    tab(".link ul li ", ".content .con","cur");
    tab(".pic .pic-top li ", ".pic-bottom  .tab","cur");
    tab(".tab .tab-top ul li" , ".tab  .tab-bottom ul","on");
    tab(".pa ul li" , ".pa-next .like","cur");
    
    tab(".tab ul li" , "#con ul" , "cur")
    function tab(a,b,c){
        $(a).hover(function(){
        var index=$(this).index();
        $(this).parent().children().removeClass(c);
        $(this).addClass(c);
        $(b).hide();
        $(b).eq(index).show();
    });}
});


//跳转具体页数
var type_num=GetQueryString("ntype");
(function(){
	if(type_num !=null && type_num.toString().length>0)
	{
		$(".pic-top li").removeClass("cur");
		$(".pic-top li").eq(type_num-1).addClass("cur");
		$(".pic-bottom .tab,.pic-bottom .con").hide();
		$(".pic-bottom .tab,.pic-bottom .con").eq(type_num-1).show();
		//$(".pic-top li").eq(type_num-1).click();
	}
})();
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
//跳转具体页数

//具体分类ajax加载

