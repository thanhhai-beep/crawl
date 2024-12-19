'use strict';

// var ua = navigator.userAgent;
// if (ua.indexOf("Mac OS X") !== -1 && !Cookies.get('deviceType')) {
//     document.querySelector('#site-choose').style.display = 'flex';
// }

var setTime=(new Date('2019/10/07 24:00:00')).getTime();
var currentTime= Date.now();
if(setTime-currentTime<=0){
    document.querySelector('.newHeader').className='newHeader'
}else{
    document.querySelector('.newHeader').className+=' gq'
}

//安卓站点与ios站点切换
var elementMap = {
    androidButton: document.querySelector('#site-choose .andriod'),
    iosButton: document.querySelector('#site-choose .ios'),
    siteChoose: document.querySelector('#site-choose')
};
var updateData = {
    saveDeviceType: function saveDeviceType(type) {
        window.Cookies.set('deviceType', type, { expires: 1, domain: 'd.cn' });
    }
};
var elementSwitch = {
    closeSiteChoose: function closeSiteChoose() {
        elementMap.siteChoose.style.opacity = 0;
        setTimeout(function () {
            elementMap.siteChoose.style.display = 'none';
        }, 500);
    }
};

elementMap.androidButton.addEventListener('click', function () {
    updateData.saveDeviceType('android');
    elementSwitch.closeSiteChoose();
});

elementMap.iosButton.addEventListener('click', function () {
    updateData.saveDeviceType('ios');
    elementSwitch.closeSiteChoose();
    window.location.href = "/";
});

//数据处理
var indexObj = {
    isLogin: '',
    topData: {},
    indexData: {},
    indexModuleData: {},
    index: 0,
    rootElement: $('article'),
    phone: ''

};
//获取登录信息
function getLoginInfo() {
    $.ajax({
        url:'/api/indexTop.json',
        type: 'get',
        dataType: 'json',
        success: function success(data) {
            if (data.code == 2000) {
                getIndexData();
                indexObj.isLogin = data.data.isLogin;
                if (data.data.isLogin) {
                    $('header .user').attr('href', 'https://i.d.cn/member/my');
                    $('header .user img').attr('src', 'https://avatar.d.cn/userhead/get?mid=' + data.data.mid + '&size=middle');
                }
                indexObj.phone = data.data.num;
                indexObj.topData = data.data;
                indexObj.genBanner();
                $('article').html('');
                indexObj.genLinks();
            } else {
                toast(data.error);
            }
        }
    });
}
getLoginInfo();
//获取首页数据
function getIndexData() {
    $.ajax({
        url:'/api/indexMain.json',
        type: 'get',
        dataType: 'json',
        success: function success(data) {
            if (data.code == 2000) {
                indexObj.indexData = data.data;
                indexObj.indexModuleData = data.data.indexModule;
                indexObj.genHtml();
            } else {
                toast(data.error);
            }
        }
    });
}
//关闭弹窗
function closeView(that) {
    $(that).parents('.layer').hide();
    $(that).parents('.mask').hide();
}
//视频对象
var videoObj = {
    //视频播放
    play: function play(curr) {
        // let type=domName.slice(0,1);
        // let dom='';
        // if(type=='.'){
        //     dom=document.getElementsByClassName(domName);
        // }
        // else if(type=='#'){
        //     domName=domName.slice(1);
        //     dom=document.getElementById(domName);
        // }else{
        //     console.log('音频标签控制应具有唯一性')
        // }
        $(curr).parent().hide().parent().find('video')[0].play();
        $(curr).parent().hide().parent().find('video').attr('controls','controls');
        $(curr).parent().hide().parent().find('.time').hide();
        // $(curr).parent().find('video')[0].play();
        // $(cuu).parent().hide();
    }
};



function refresh() {
    $.ajax({
        url:'/api/randomCarefullyChosenGame.json',
        type: 'get',
        dataType: 'json',
        success: function success(data) {
            if (data.code == 2000) {
                var data = indexObj.genRefinedCtn(data.data.carefullyChosenGame,2,true);
                $('.dcn-jx').html(data.html);
                $('.dcn-jx section').css('margin-top', '0');
                data.SwiperName = new Swiper('.' + data.SwiperName, {
                    slidesPerView: 'auto',
                    observer: true,
                    initialSlide: 0
                });
            }
        }
    });
}

indexObj.genHtml = function () {
    var data = this.indexModuleData;
    for (var i = 0; i < data.length; i++) {
        if (i == 3) {
            indexObj.genRefinedCtn(this.indexData.carefullyChosenGame,null,this.indexData.carefullyChosenGameIsHasNextPage);
        }
        switch (data[i].moduleTypeId) {
            case 1:
                indexObj.genTodayRecom(data[i]);
                break;
            case 2:
                indexObj.genHotGames(data[i]);
                break;
            case 3:
                indexObj.genActivity(data[i]);
                break;
            case 5:
                indexObj.genGameVideo(data[i]);
                break;
            case 7:
                indexObj.genPreGame(data[i]);
                break;
            case 8:
                indexObj.genDcnCtn(data[i]);
                break;
            default:
                break;
        }
        // if(data[i].moduleTypeId==1)indexObj.genTodayRecom(data[i]);
        // else if(data[i].moduleTypeId==2) indexObj.genHotGames(data[i])
        // else if(data[i].moduleTypeId==7) indexObj.genPreGame(data[i])
        // else if(data[i].moduleTypeId==3) indexObj.genActivity(data[i]);
        // else if(data[i].moduleTypeId==5) indexObj.genGameVideo(data[i])
        // else if(data[i].moduleTypeId==8) indexObj.genDcnCtn(data[i])
    }
};

//轮播大图
indexObj.genBanner = function () {
    var data = this.topData.banner;
    var html = '';
    for (var i = 0; i < data.length; i++) {
        html += '<div class="swiper-slide">\n                <a href="' + data[i].link + '"><img src="' + data[i].picUrl + '" alt="">\n                </a>\n            </div>';
    }
    $('.bannerSwiper .swiper-wrapper').html(html);
    var bannerSwiper=new Swiper('.bannerSwiper',{
        autoplay: {
            disableOnInteraction: false,
        },
        pagination: {
            el: '.banner-pagination',
          },  
          observer:true,
          observeParents:true,
          loop : true,
    })
    bannerSwiper.update();
};

//今日推荐
indexObj.genTodayRecom = function (data) {
    var index = ++this.index;
    if(!data || !data.indexModuleRes || data.indexModuleRes.length==0) return;
    var moduleData = data.indexModuleRes;
    var html = '<section class="recommend"><div class="reTop">    <h2>' + data.title + '</h2>    <a href="/list/view/recommend.html?moduleId=' + data.moduleId + '&moduleTypeId=' + data.moduleTypeId + '" style=' + (data.hasNextPage ? '' : 'display:none') + '>\u66F4\u591A\u63A8\u8350</a></div><div class="reBtm"><div class="swiper-container todaySwiper' + index + '"><div class="swiper-wrapper">';
    for (var j = 0; j < moduleData.length; j++) {
        html += '<a href=\'' + (moduleData[j].resType == 1 ? 'https://a.d.cn/game/' + moduleData[j].resId : 'https://3g.d.cn/' + moduleData[j].resId) + '\' class="item swiper-slide"><div class="imgbox">    <img src="' + moduleData[j].gameIcon + '" alt=""></div><h4 class="title noWrap">' + moduleData[j].gameName + '</h4><p class="desc noWrap">' + moduleData[j].gameDesc + '</p></a>';
    }
    html += ' </div></div></div></section>';
    this.rootElement.append(html);
    var SwiperName = 'todaySwiper' + index;
    SwiperName = new Swiper('.' + SwiperName, {
        slidesPerView: 'auto',
        observer: true
    });
    SwiperName.update();
};

//横版背景图 热门新游
indexObj.genHotGames = function (dataArray) {
    var index = ++this.index;
    if(!dataArray || !dataArray.indexModuleRes || dataArray.indexModuleRes.length==0 ) return;
    var data = dataArray.indexModuleRes;
    var html = '<section class="hotGame hotGame'+index+'"><div class="right-ctn"><div class="swiper-container hotGameSwiper' + index + '"><div class="swiper-wrapper"><div class="left-ctn swiper-slide">\n                        <h2>' + dataArray.title + '</h2>\n                        <a href="/list/view/recommend.html?moduleId=' + dataArray.moduleId + '&moduleTypeId=' + dataArray.moduleTypeId + '">\u67E5\u770B\u66F4\u591A</a>\n                    </div>\n                    ';
    for (var i = 0; i < data.length; i++) {
        html += ' <a href=\'' + (data[i].resType == 1 ? 'https://a.d.cn/game/' + data[i].resId : 'https://3g.d.cn/' + data[i].resId) + '\' class="item swiper-slide">\n                    <div class="imgbox">\n                        <img src="' + data[i].gameIcon + '" alt="">\n                    </div>\n                    <p>' + data[i].gameName + '</p>\n                 </a>';
    }
    html += ' </div></div></div><div class="opacty"></div></section>';
    this.rootElement.append(html);
    var SwiperName = "hotGameSwiper" + index;
    SwiperName = new Swiper('.' + SwiperName, {
        initialSlide: 0,
        slidesPerView: 'auto',
        observer: true
    });
    $('.hotGame'+index).css({ 'background': 'url(' + dataArray.bgImgUrl + ') no-repeat center center', 'background-size': 'auto 100%' });
};

//新游预告
indexObj.genPreGame = function (dataArray) {
    var index = ++index;
    if(!dataArray || !dataArray.newGametrailers||dataArray.newGametrailers.length==0 ) return;
    var moduleData = dataArray.newGametrailers;
    var html = '<section class="preparation">\n                    <div class="preTop">\n                        <h2>' + dataArray.title + '</h2>\n                        <a href="/list/view/newGame.html">\u67E5\u770B\u5168\u90E8</a>\n                    </div>\n                    <div class="preBtm">\n                        <div class="preGameSwiper' + index + ' swiper-container">\n                            <div class="swiper-wrapper" id=\'gameCtnBox\'>\n                                <div class=\'swiper-slide\'>\n            ';
    for (var i = 0; i < moduleData.length; i++) {
        html += ' <div>\n                    <a href=\'' + (moduleData[i].resourceType == 1 ? 'https://a.d.cn/game/' + moduleData[i].id : 'https://3g.d.cn/' + moduleData[i].id) + '\'  class="item">\n                        <div class="item-left">\n                                <div class="imgbox">\n                                    <img src="' + moduleData[i].iconUrl + '" alt="">\n                                </div>\n                        </div>\n                        <div class="item-right">\n                                <div>\n                                    <h4 class="title noWrap">' + moduleData[i].gameName + '</h4>\n                                    <p class="desc noWrap"><span><em class=\'order-num\'>' + moduleData[i].bookCnt + '</em>\u4EBA</span>\u5DF2\u9884\u7EA6</p>\n                                </div>\n                        </div>\n                    </a>\n                    <button onclick=\'orderObj.order(' + moduleData[i].id + ',' + moduleData[i].resourceType + ',this)\'  class="' + (moduleData[i].bookStatus ? 'ordered' : 'order') + '" data-id=\'' + moduleData[i].id + '\'>' + (moduleData[i].bookStatus ? '已预约' : '预约') + '</button>\n                </div>';
        if ((i + 1) % 3 == 0 && i != moduleData.length - 1) {
            html += "</div><div class='swiper-slide'>";
        }
    }
    html += "</div></div></div></div></section>";
    this.rootElement.append(html);
    var SwiperName = 'preGameSwiper' + index;
    SwiperName = new Swiper('.' + SwiperName, {
        slidesPerView: 'auto',
        observer: true
    });
};
//


//有奖活动
indexObj.genActivity = function (dataObj) {
    if(!dataObj) return;
    var data = dataObj;
    var html = '<section class="activity">\n                    <div class="actTop">\n                        <h2>' + data.title + '</h2>\n                    </div>\n                    <a href=' + data.specialTopicTypeUrl + ' class="actBtm">\n                        <div class="imgbox">\n                            <img src="' + data.bgImgUrl + '" alt="">\n                        </div>\n                        <p>' + data.description + '</p>\n                    </a>  \n                </section>';
    this.rootElement.append(html);
};

//当乐精选
indexObj.genRefinedCtn = function (dataArray, type,hasNextPage) {
    if(!dataArray||dataArray.length==0) return;
    var index = ++this.index;
    var data = dataArray;
    var html = '<section class="dcn-jx jx-' + index + '"><div class="dcnTop">    <h2>\u5F53\u4E50\u7CBE\u9009</h2>    <span class="refresh" onclick=\'refresh()\' style="' + (hasNextPage? '' : 'display:none') + '"><i></i>\u83B7\u53D6\u65B0\u5185\u5BB9</span></div><div class="dcnBtm"><div class="refineSwiper' + index + ' swiper-container">    <div class="swiper-wrapper">';
    for (var i = 0; i < data.length; i++) {
        html += ' <div class="itemCtn swiper-slide"><p>' + data[i].moduleTitle + '</p><a href='+ (data[i].resType == 1 ? 'https://a.d.cn/game/' + data[i].resId : 'https://3g.d.cn/' + data[i].resId) + '  class="imgbox">    <img src=' + (data[i].bgImg?data[i].bgImg:data[i].moduleBgImg)+ '> </a><div class="ft">    <a href=' + (data[i].resType == 1 ? 'https://a.d.cn/game/' + data[i].resId : 'https://3g.d.cn/' + data[i].resId) + '  class="item">        <div>            <div class="imgbox">                <img src="' + data[i].gameIcon + '" alt="">            </div>            <div>                    <h4 class="title noWrap">' + data[i].gameName + '</h4>                    <p class="desc noWrap">' + data[i].gameDesc + '</p>            </div>        </div>    </a>    <span style=\'' + (data[i].gameBookstaus ? 'display:none' : '') + '\' class=\'download\' data-id=' + data[i].resId + '>\u4E0B\u8F7D</span>    <span style=\'' + (data[i].gameBookstaus ? '' : 'display:none') + '\' onclick=\'orderObj.order(' + data[i].resId + ',' + data[i].resType + ',this)\' class=\'' + (data[i].bookStatus ? 'ordered' : 'order') + '\' data-id=' + data[i].resId + '>' + (data[i].bookStatus ? '已预约' : '预约') + '</span></div></div>';
    }
    html += '</div></div></div></section>';
    // 传递一下刷新swiper
    var SwiperName = 'refineSwiper' + index;
    if (type == 2) {
        return { html: html, SwiperName: SwiperName };
    } else {
        this.rootElement.append(html);
        SwiperName = new Swiper('.' + SwiperName, {
            slidesPerView: 'auto',
            observer: true,
            initialSlide: 0
        });
        SwiperName.update();
    }
};

//原创视频
indexObj.genGameVideo = function (dataArray) {
    var index = ++this.index;
    var data = dataArray;
    if(!data || !data.gameVideo) return;
    var moduleData = data.gameVideo;
    var html = '';
    var hour='',minute=''
    if(moduleData.duration){
            hour = Math.floor(moduleData.duration / 60),
            minute = Math.floor(moduleData.duration % 60);
    }   
    if (hour.toString().length < 2) {
        hour = '0' + hour + ":";
    }
    if (minute.toString().length < 2) {
        minute = '0' + minute;
    }
    html = '<section class="dcn-video"><h2>' + data.title + '</h2>    <div class=\'videoWrap\'>        <video src="' + moduleData.url + '" id=\'gameBigVideo\'></video>        <div class=\'initial\'>            <img src=\'' + moduleData.snapshot + '\'/>            <span class=\'play\' onclick=\'videoObj.play(this)\'></span>        </div>        <div class=\'time\'>            <div class=\'cols\'>                <div class=\'col\'></div>                <div class=\'col\'></div>                <div class=\'col\'></div>            </div>            <span>' + (hour + minute) + '</span>        </div>    </div>    <div onclick=\'indexObj.goDetail(' + moduleData.id + ')\' class=\'gameFoot\'>        <p>' + moduleData.title + '</p>        <div class="ctnWrap">\n                        <a href=\'' + (moduleData.gameResType == 1 ? 'https://a.d.cn/game/' + moduleData.gameResId : 'https://3g.d.cn/' + moduleData.gameResId) + '\' style=' + (moduleData.gameName ? '' : 'padding:0') + '>' + (moduleData.gameName ? moduleData.gameName : '') + '</a>\n                        <div>\n                            <div class="comment"><i></i><span>' + moduleData.commentCnt + '</span></div>\n                            <div class="support ' + (moduleData.isLike == 1 ? 'liked' : '') + '" onclick="indexObj.liked(event,' + moduleData.id + ',this)"><i></i><span>' + moduleData.likeCnt + '</span></div>\n                        </div>\n                    </div>\n                </div>\n            </section>';
    this.rootElement.append(html);
};

//
indexObj.goDetail = function (videoId) {
    window.location.href = 'https://v.d.cn/detail.html?id=' + videoId;
};

//点赞
indexObj.liked = function (e, videoId, curr) {
    var id = videoId;
    if (!indexObj.isLogin) {
        window.location.href = 'https://oauth.d.cn/auth/goLogin.html?display=wap';
    } else {
        $.ajax({
            url: '/api/videoLike.json',
            type: 'get',
            data: {videoId: id},
            success: function success(data) {
                if (data.code == 2000) {
                    $(curr).addClass('liked').find('span').text(data.data.likeCount);
                }else{
                    toast(data.desc);
                }
            }
        });
    }
    window.e ? window.e.cancelBubble = true : e.stopPropagation();
};

indexObj.genLinks = function () {
    var data = this.topData;
    var html = data.buttonHtml;
    this.rootElement.append("<section class='otherLinks'>" + html + "</section>");
};

//当乐原创
indexObj.genDcnCtn = function (dataObj) {
    var data = dataObj;
    if(!data || !data.newsItem || data.newsItem.length==0) return;
    var moduleData = data.newsItem;
    var html = '<section class="dcn-yc">\n                <div class="ycTop">\n                    <h2>' + data.title + '</h2>\n                    <a href="https://news.d.cn">\u67E5\u770B\u5168\u90E8</a>\n                </div>\n                <div class="ycBtm">';
    for (var j = 0; j < moduleData.length; j++) {
        html += '<a class="article-item" href=\'https://news.d.cn/news/view-' + moduleData[j].id + '.html\'>\n                    <div class="imgbox">\n                    <img src="' + moduleData[j].icon + '" alt=""></div><div class="detail">    <h3>' + moduleData[j].title + '</h3>    <p><i></i><span>' + moduleData[j].timeString+'</span></p></div>\n                </a>';
    }
    html += '</div></section>';
    this.rootElement.append(html);
};



//节流
function throttle(fn, delay) {
    // 记录上一次函数触发的时间
    var lastTime = 0;
    return function() {
        // 记录当前函数触发的时间
        var nowTime = Date.now();
        if (nowTime - lastTime > delay) {
        // 修正this指向问题
            fn.call(this);
        // 同步时间
          lastTime = nowTime;
        }
    }
}
//
var userScroll=function(){
    var lastY=$(window).scrollTop();
    return function(){
        var currY=$(window).scrollTop();
        if(currY-lastY>0){
            $('.adModule .download,.adModal').removeClass('hide')
            
        }else{
            $('.adModule .download,.adModal').addClass('hide')
        }
        lastY=currY;
    }
}();

document.onscroll = throttle(userScroll,100)