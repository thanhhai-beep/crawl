// 浏览量统计
function viewscount(type,cid, id,aid){
    if ( type == "" || id <= 0 ){
        return false;
    }
    var referer = document.referrer;
    // 浏览统计
    $.get("/count/views.html", {type: type,cid:cid, id: id,aid:aid,referer:referer}, function(){
        return false;
    });
}