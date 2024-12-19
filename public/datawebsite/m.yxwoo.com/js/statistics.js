$(function(){
    var url = window.location.href;
    var referer = document.referrer;
    var time = $("#statistics_time").length > 0 ? $("#statistics_time").val() :0;
    var sendData={url: url, referer: referer, time:time};
    $.ajax({
        url:"/api/statistics",
        type:"post",
        dataType:"json",
        data:sendData,
        success:function(data){}
    })
});