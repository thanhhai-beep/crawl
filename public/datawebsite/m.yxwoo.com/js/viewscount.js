// 浏览量统计
function viewscount(type, id){
    if ( type == "" || id <= 0 ){
        return false;
    }
    // 浏览统计
    $.get("/api/countviews", {type: type, id: id}, function(){
        return false;
    });
}

//下载统计
function downcount(type,id) {
    if ( type == "" || id <= 0 ){
        return false;
    }
    $.get("/api/countdown", {type: type, id: id}, function(){
        return false;
    });
}

// 下载助手统计
function zhushcount(type,id,rid){
    if ( type == "" || id <= 0 ){
        return false;
    }

    $.get("/api/countdown", {type: type, id: id, rid: rid}, function(){
        return false;
    });
}
