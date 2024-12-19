'use strict';

var total = 0,
    pageSize = 10,
    pageNum = 1,
    url = '';
//tab 切换监听
$('.tab-menu').on('click', 'li', function () {
    $('.loading').hide();
    var dataType = $(this).attr('data-type');
    $(this).addClass('active').siblings().removeClass('active');
    $('.tab-ctn>section').toArray().forEach(function (item) {
        var $item = $(item);
        if ($item.attr('tab-type') == dataType) {
            url = $item.attr('data-url');
            pageNum = Math.floor($item.attr('data-num')) || 1;
            $item.show().attr('id', 'scrollList');
            total = Math.floor($item.attr('data-total'));
            scrollWatch();
        } else {
            $item.hide().attr('id', '');
        }
    });
});

//视频播放
function videoPlay(that) {
    that.parentNode.parentNode.querySelector('video').play();
    that.parentNode.parentNode.querySelector('.initial').style.display = 'none';
    that.parentNode.parentNode.querySelector('video').setAttribute('controls', 'controls');
}

//广告关闭
$('.adModule .adModal,.adModule .download').on('click', '.close', function () {
    $('.adModule .adModal,.adModule .download').hide();
});

if ($('#scrollList').length > 0) {
    url = $('#scrollList').attr('data-url');
    pageNum = Math.floor($('#scrollList').attr('data-num')) || 1;
    total = Math.floor($('#scrollList').attr('data-total'));
    scrollWatch();
}

function throttle(fn, wait) {
    var timeout = void 0;
    return function () {
        if (!timeout) {
            fn.apply(this, arguments);
            timeout = setTimeout(function () {
                timeout = null;
            }, wait);
        }
    };
}
function scrollWatch() {
    $(document).on('scroll', function () {
        loadingMore();
    });
}
function loadingMore() {
    // console.log('触发了', new Date().getTime());
    // console.log('url' + url, pageNum, total);
    var scrollNum = $(document).scrollTop();
    var eleTop = $('#scrollList').offset().top;
    var eleHeight = $('#scrollList').height() - $(window).height() - 20;
    if (pageNum >= total) {
        $('.loading').hide();
        $(document).off('scroll');
        return;
    }
    if (scrollNum >= eleTop + eleHeight) {
        pageNum = ++pageNum;
        $('#scrollList').attr('data-num', pageNum);
        //
        $(document).off('scroll');
        $('.loading').fadeIn().text('正在加载中');
        $.ajax({
            url: url,
            type: 'get',
            data: {
                "pageNo": pageNum
            },
            success: function success(data) {
                //添加数据
                $('#scrollList').append(data);
                scrollWatch();
            }
        });
    }
}

var orderObj = {
    gameId: '', //游戏ID
    gameTypeId: '', //游戏类型id
    phone: '', //手机号
    currElement: '' //预约按钮
};

function OrderViewInit() {
    if ($('body .mask')) {
        $('body .mask').remove();
    }
    var html = '<div class="mask">\n                    <div class="layer order-success">\n                        <div class=\'imgbox\'></div>\n                        <h3>\u9884\u7EA6\u6210\u529F</h3>\n                        <p class=\'text\'>\u6E38\u620F\u5F00\u653E\u4E0B\u8F7D\u540E\uFF0C\u6211\u4EEC\u5C06\u4EE5\u6D88\u606F\u901A\u77E5\u5F62\u5F0F\u901A\u77E5\u60A8\uFF0C\u8BF7\u7559\u610F\u6D88\u606F\u4E2D\u5FC3</p>\n                        <button onclick="orderObj.closeView()">\u6211\u77E5\u9053\u4E86</button>\n                    </div>\n                    <div class="layer order-cancel">\n                        <div class="wrapper">\n                            <div class=\'imgbox\'></div>\n                            <p>\u786E\u8BA4\u53D6\u6D88\u8BE5\u6E38\u620F\u7684\u9884\u7EA6?</p>\n                        </div>\n                        <button class="confirm" onclick=\'orderObj.cancelOrder()\'>\u786E\u8BA4</button>\n                        <button class="cancel" onclick=\'orderObj.closeView()\' >\u6211\u518D\u60F3\u60F3</button>\n                    </div>\n                    <div class="layer order-start">\n                        <div class="wrapper">\n                        </div>\n                        <h3>\u9884\u7EA6\u6E38\u620F</h3>\n                        <p>\u6E38\u620F\u5F00\u653E\u4E0B\u8F7D\u540E\uFF0C\u5C06\u7B2C\u4E00\u65F6\u95F4\u901A\u8FC7\u77ED\u4FE1\u63D0\u9192\u4F60</p>\n                        <label>\n                            <i></i>\n                            <input type="text"  class=\'input-phone\'placeholder="\u8BF7\u8F93\u5165\u624B\u673A\u53F7">\n                        </label>\n                        <button class="normal" onclick=\'orderObj.normalOrder()\' >\u666E\u901A\u9884\u7EA6</button>\n                        <button class="phone" onclick=\'orderObj.phoneOrder()\'>\u624B\u673A\u53F7\u9884\u7EA6</button>\n                    </div>\n                </div> ';
    $('body').append(html);
    //点击遮罩关闭
    $('body .mask').on('click', function (event) {
        var event = window.event || event;
        var originEle = event.target || event.srcElement;
        if ($(originEle).attr('class') == 'mask') {
            $('body .mask').hide().find('.layer').hide();
        }
    });
}
OrderViewInit();

orderObj.closeView = function () {
    $('.mask').hide().find('.layer').hide();
};
//预约
orderObj.order = function (gameId, gameTypeId, that) {
    this.gameId = gameId;
    this.gameTypeId = gameTypeId;
    this.currElement = $(that);
    this.orderNumEle = this.currElement.parent().find('.order-num');
    if (this.orderNumEle.length < 1) this.orderNumEle = this.currElement.parent().parent().find('.order-num');
    this.orderNumber = parseFloat(this.orderNumEle.text());
    $.ajax({
        url: '/api/getMemberInfo.json',
        type: 'get',
        data: {},
        dataType: 'json',
        success: function success(data) {
            if (data.code == 2000) {
                //绑定手机号
                if (!orderObj.phone) orderObj.phone = data.data.num;
                if (data.data.isLogin) {
                    if (orderObj.currElement.attr('class').toLowerCase() == 'order') {
                        if (data.data.num) {
                            $('.mask .order-start .input-phone').val(orderObj.phone);
                        }
                        $('body .mask').show().find('.order-start').show();
                    } else {
                        $('body .mask').show().find('.order-cancel').show();
                    }
                } else {
                    window.location.href = 'https://oauth.d.cn/auth/goLogin.html?display=wap';
                }
            } else {
                toast(data.desc);
            }
        }
    });
};
orderObj.normalOrder = function () {
    var gameId = this.gameId;
    var gameTypeId = this.gameTypeId;
    var orderType = 1;
    $.ajax({
        url: '/api/addUserAppointment.json',
        type: 'get',
        data: { gameId: gameId, gameType: gameTypeId, orderType: orderType },
        dataType: 'json',
        success: function success(data) {
            if (data.code === 2000) {
                //成功弹窗
                $(".mask .layer").hide();
                orderObj.currElement.attr('class', 'ordered');
                orderObj.currElement.text('已预约');
                orderObj.orderNumber++;
                orderObj.orderNumEle.text(orderObj.orderNumber);
                $(".mask .order-success").show().find('.text').text('游戏开放下载后，我们将以消息通知形式通知您，请留意消息中心。');
            } else {
                toast(data.desc);
            }
        }
    });
};
orderObj.phoneOrder = function () {
    var gameId = this.gameId;
    var gameTypeId = this.gameTypeId;
    var phone = $('.mask .order-start .input-phone').val();
    var orderType = 2;
    this.phone = $('.mask .order-start .input-phone').val();
    debugger;
    $.ajax({
        url: '/api/addUserAppointment.json',
        type: 'get',
        data: { gameId: gameId, gameType: gameTypeId, orderType: orderType, phone: phone },
        dataType: 'json',
        success: function success(data) {
            if (data.code === 2000) {
                //成功打开弹窗
                $(".mask .layer").hide();
                orderObj.currElement.attr('class', 'ordered');
                orderObj.currElement.text('已预约');
                orderObj.orderNumber++;
                orderObj.orderNumEle.text(orderObj.orderNumber);
                $(".mask .order-success").show().find('.text').text('游戏开放下载后，我们将以短信形式通知您，敬请留意。');
            } else {
                toast(data.desc);
            }
        }
    });
};

orderObj.cancelOrder = function () {
    var gameId = this.gameId;
    var gameTypeId = this.gameTypeId;
    $.ajax({
        url: '/api/deleteUserAppointment.json',
        type: 'get',
        data: { gameId: gameId, gameType: gameTypeId },
        dataType: 'json',
        success: function success(data) {
            if (data.code == 2000) {
                //取消预约成功之后实时改变样式
                $('.mask').hide().find('.layer').hide();
                if (orderObj.orderNumber == 0) {
                    orderObj.orderNumber == 0;
                } else {
                    orderObj.orderNumber--;
                }
                orderObj.orderNumEle.text(orderObj.orderNumber);
                orderObj.currElement.attr('class', 'order').text('预约');
            } else {
                toast(data.desc);
            }
        }
    });
};

//toast 
function toast(text) {
    if ($('body .toast').length < 1) {
        $('body').append("<div class='toast'><p></p></div>");
    }
    $('body .toast').fadeIn(600).fadeOut(500).find('>p').text(text);
}