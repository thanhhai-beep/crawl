function ajax(){
    var ajaxData = {
        type:arguments[0].type || "GET",
        url:arguments[0].url || "",
        async:arguments[0].async || "true",
        data:arguments[0].data || null,
        dataType:arguments[0].dataType || "text",
        contentType:arguments[0].contentType || "application/x-www-form-urlencoded",
        beforeSend:arguments[0].beforeSend || function(){},
        success:arguments[0].success || function(){},
        error:arguments[0].error || function(){}
    }
    ajaxData.beforeSend() 
    var xhr = createxmlHttpRequest();
    xhr.responseType=ajaxData.dataType;
    xhr.open(ajaxData.type,ajaxData.url,ajaxData.async);
    xhr.setRequestHeader("Content-Type",ajaxData.contentType);
    xhr.send(convertData(ajaxData.data));
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if(xhr.status == 200){
                ajaxData.success(xhr.response);
            }else{
                ajaxData.error();
            }
        }
    }
}
    
function createxmlHttpRequest() {
    if (window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }else if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }  
}
    
function convertData(data){
    if( typeof data === 'object' ){
        var convertResult = "";
        for(var c in data){
            convertResult+= c + "=" + data[c] + "&";
        }  
        convertResult=convertResult.substring(0,convertResult.length-1);
        return convertResult;
    }
    else{
        return data;
    }
}

var urls = {};
urls.url = document.URL;
urls.re = document.referrer;
urls.ua = navigator.userAgent;
urls.title = document.title;
urls.cls = 0;
urls.attr = $('[xid]').attr('xid');
ajax({
    type:"POST", 
    url: "/click/call.html", 
    dataType:"text", 
    data: urls,
    success:function(msg){ 
        console.log(msg) 
    }, 
    error:function(){ 
        console.log("error") 
    }
});

$('#DownloadBtnXX').click(function(){
    urls.cls = 1;
    urls.attr = $('[xid]').attr('xid');
    ajax({
        type:"POST", 
        url: "/click/dowload.html", 
        dataType:"text", 
        data: urls,
        success:function(msg){ 
            console.log(msg) 
        }, 
        error:function(){ 
            console.log("error") 
        }
    });
});

$('.appitem').click(function(e){
    let clist = e.target.classList;
    if(clist.contains('downzone') || clist.contains('btn-download')){
        let infozone = this.querySelector('.infozone');
        let infotitle = this.querySelector('.infozone h6').textContent;
        let ref = infozone.getAttribute("href");
        if(ref){
            let m = /(soft|game)\/(\d+)\.html$/.exec(ref);
            if(m[2] !== undefined){
                urls.cls = 1;
                urls.title = infotitle;
                urls.attr = m[2];
                ajax({
                    type:"POST", 
                    url: "/click/articledown.html", 
                    dataType:"text", 
                    data: urls,
                    success:function(msg){ 
                        console.log(msg);
                    },
                    error:function(){ 
                        console.log("error");
                    }
                });
            }
        }
    }
});