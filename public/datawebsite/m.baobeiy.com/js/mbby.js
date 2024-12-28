$(function(){
  showMoreNav()
  backTop()
  searchObj()
  comment();//评论
  tabGl()
})
function tabGl(){
  if(typeof _pageinfo !== 'undefined'){
    var tab_i = 0
    switch (_pageinfo.path) {
      case 'listindex':
        if(_pageinfo.rootid == 1){
          tab_i = 1
        }else if(_pageinfo.rootid == 2){
          tab_i = 2
        }
        break;
      case 'list':
        if(_pageinfo.rootid == 1){
          tab_i = 1
        }else if(_pageinfo.rootid == 2){
          tab_i = 2
        }
        break;
      case 'game':
        if(_pageinfo.rootid == 1){
          tab_i = 1
        }else if(_pageinfo.rootid == 2){
          tab_i = 2
        }
        break;
      case 'ztlist':
        tab_i = 3
        break;
      case 'zt':
        tab_i = 3
        break;
    }
    $('.fotnav a').eq(tab_i).addClass('hover')
  }
}
function searchObj() {
  //聚焦input触发智能填补
  $("#keyword").focus(function () {
    $(".autocomplete-suggestions").show().css({ "width": "100%" });
    $(".autocomplete-suggestions").click(function () {
      if ($(this).children().length == 0) { $(this).hide(); }
    })
  });

  //监听input输入
  $("#keyword").bind('input propertychange', function () {
    var inputVal = $("#keyword").val();
    console.log(inputVal)
    if (inputVal == "") {
      $(".autocomplete-suggestions").css({ "background": "rgba(0,0,0,.5)" });
      $(".autocomplete-suggestions").html("");
    } else {
      $(".autocomplete-suggestions").show().css({ "background": "#fff" });
    }
  })
  var openUrl = "";
  $(".search-icon").keyup(function () {
    if (event.keyCode == 13) {
      Searc_textCont();
      return false
    }
  })
  $(".search-icon").click(function () {
    Searc_textCont()
    return false
  })

  function Searc_textCont() {
    var keyFont = $("#keyword").val();
    if (keyFont != "") {
      if ($("#keyword").val().indexOf('_') == -1) {
        //if (browser.versions.android) {	
        if (/android/i.test(navigator.userAgent)) {
          openUrl = `http://www.baobeiy.com/so/m/?k=${encodeURIComponent(keyFont)}`;
        } else {
          openUrl = `http://www.baobeiy.com/so/m/?k=${encodeURIComponent(keyFont)}`;
        }
        window.location.href = openUrl;
      } else {
        alert("不允许有'_'此类非法字符")
      }
    } else {
      alert("请输入搜索关键词")
    }
  }
}
function backTop(){//返回顶部
  var backHtml = '<div class="m-backtop" style="width:50px; height:50px; line-height:50px; font-size:40px; font-weight:bold; font-family:serif; color:#fff; text-align:center; -webkit-transform: rotate(90deg);-moz-transform: rotate(90deg);-o-transform: rotate(90deg);-ms-transform: rotate(90deg);transform: rotate(90deg); background:rgba(0,0,0,0.5); display:none; overflow:hidden; position:fixed; bottom:50px; right:10px; border-radius:100px; z-index:88"><</div>'	
  $("body").append(backHtml);		
  $(window).scroll(function(){
    if($(window).scrollTop()>200){
      $(".m-backtop").show();
    }else{
      $(".m-backtop").hide();	
    }
  });
  $(".m-backtop,.go-top").click(function(){
    $("html,body").animate({scrollTop:0},200)	
  })
}
function showMoreNav(){
  $('.nav-more').click(function(){
    $('.bbyc-cont').show()
  })
  $('.bbyc-cont .close').click(function(){
    $('.bbyc-cont').hide()
  })
}

// 新留言
function comment() {//评论
  if (typeof (CommentTpye) == "undefined") {
    return false;
  }
  if ($("#comment_0 dl dt").length < 5) {
    $(".g-comment-more").hide();
  };

  var p = 1;
  function ViewMore() {
    p++;
    $.ajax({
      type: "Get",
      url: "/sajax.asp",
      data: "action=6&t=" + _pageinfo.id + "&s=" + CommentTpye + "&num=5&p=" + p,
      success: function (msg) {
        var objJson = eval('(' + msg + ')');
        if (objJson.PageCount >= p) {
          listDate(msg);
        } else {
          $(".g-comment-more").text("没有更多评论了").css("background", "#c3c3c3");
        }
      }
    });
  }
  function listDate(msg) {
    var objJson = eval('(' + msg + ')');
    var html = '';
    var htmlnew = '';
    console.log(objJson)
    for (var i = 0; i < objJson.softid.length; i++) {
      html += '<dt>';
      html += '<span><i>第' + objJson.Graded[i] + '楼</i><b>' + objJson.sUserFrom[i] + ' ' + objJson.user[i] + '</b> </span><em>发表于: ' + objJson.DateAndTime[i] + '  </em>';
      html += '</dt>';
      html += '<dd>';
      html += objJson.Excerpt[i];
      html += '</dd>';

      htmlnew += '<dt class="clearfix"><span><b>' + objJson.sUserFrom[i] + ' 网友 客人</b><i>第 ' + objJson.Graded[i] + ' 楼 </i><em>发表于: ' + objJson.DateAndTime[i] + '</em></span></dt>';
      if (objJson.bjhf[i] == "") {
        htmlnew += '<dd>' + objJson.Excerpt[i] + '<p id="' + objJson.Id[i] + '"><a href="javascript:">支持<em>(</em><span> 0 </span><em>)</em></a> <a href="javascript:" pid="' + objJson.Id[i] + '">盖楼(回复)</a> </p></dd>';
      } else {
        htmlnew += '<dd>' + objJson.Excerpt[i] + '<div class="m-huifu"><p class="m-huifu-o">编辑回复：<span>' + objJson.bjhf[i] + '</span></p></div><p id="' + objJson.Id[i] + '"><a href="javascript:">支持<em>(</em><span> 0 </span><em>)</em></a> <a href="javascript:" pid="' + objJson.Id[i] + '">盖楼(回复)</a> </p></dd>';
      }

    };
    $('.g-game-ly div dl').append(html);
    $('.g-game2-ly div dl').append(htmlnew);
    BindDing("#comment_0 > dl > dd > p", _pageinfo.id, "0");

    $("#comment_list div dl dd").each(function () {
      $(this).find("p a:eq(1)").click(function () {
        var pid = $(this).attr("pid");
        $("#m-comment-box").show();
        $(".g-comment-showbtn").hide();
        $("#m-comment-box textarea").text("[quote]" + pid + "[/quote]").focus();

        plcole()
      })
    });

  };
  $(".g-comment-more").click(function () {
    ViewMore();
  });
  var commentCont = '<div id="m-comment-box"><fieldset class="w-text"><textarea></textarea></fieldset><fieldset class="w-button"><input id="verify" class="button disable" type="button"  value="提交评论" /></fieldset><input type="hidden" id="app-id" value="' + _pageinfo.id + '"/></div>';
  $(".g-commentbox").prepend(commentCont);
  $("#comment_0 dl dt").each(function () {
    //$(this).find("b").text("腾飞网友")
    var wy = $(this).find("b").text();
    if (wy == '网友') {
      $(this).find("b").text('腾飞网友 客人');
    }
  });  // '+objJson.sUserFrom[i]+'  地区字段
  plhuifu() //回复，支持进行操作
  function plhuifu() {
    $(".g-comment-showbtn").click(function () {
      $("#m-comment-box").show();
      $(this).hide();
      $("#comment_list").hide();
      plcole()
    });

    $("#comment_list div dl dd").each(function () {
      $(this).find("p a:eq(1)").click(function () {
        var pid = $(this).attr("pid");
        $("#m-comment-box").show();
        $(".g-comment-showbtn").hide();
        $("#m-comment-box textarea").text("[quote]" + pid + "[/quote]").focus();
        plcole()
      })
    });
  }

  $("#verify").click(function () {
    commontSubmit();
  });
  function plcole() {
    $(".m-comment-close").click(function () {
      $("#m-comment-box").hide();
      $("#comment_list,.g-comment-showbtn").show();
    });
  }

};
function commontSubmit() {
  function showTime() {
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += (mydate.getMonth() + 1) + "月";
    str += mydate.getDate() + "日";
    return str;
  }
  var id = $("#app-id").val();
  var content = $(".w-text textarea").val();
  if ($.trim(content).length <= 2) {
    alert("请填写内容");
    return;
  }
  if (CommentTpye == 1) {
    $.ajax({
      type: 'POST',
      url: '/ajax.asp',
      data: {
        content: content,
        SoftID: id,
        Action: 2,
        CommentTpye: 1  // 此处为服务端接口拼写错误
      },
      success: function (s) {
        alert("提交成功");
        $(".w-text textarea").text("");
        //addRealCommont(s);        
      },
      dataType: ""
    });
  }
  if (CommentTpye == 0) {//下载
    //不经过ajax，直接获取内容
    $.ajax({
      type: 'POST',
      url: '/ajax.asp',
      data: {
        content: content,
        SoftID: id,
        Action: 2,
        CommentTpye: 0  // 此处为服务端接口拼写错误
      },
      success: function (s) {
        alert("提交成功");
        $("#comment_list,.g-comment-showbtn").show();
        $("#m-comment-box").hide();
        $(".w-text textarea").val("");
        // addRealCommont(s)
        //console.log("返回信息成功")
      },
      dataType: ""
    });

  }

  if (CommentTpye == 5) {//下载
    //不经过ajax，直接获取内容
    $.ajax({
      type: 'POST',
      url: '/ajax.asp',
      data: {
        content: content,
        SoftID: id,
        Action: 2,
        CommentTpye: 5  // 此处为服务端接口拼写错误
      },
      success: function (s) {
        alert("提交成功");
        $("#comment_list,.g-comment-showbtn").show();
        $("#m-comment-box").hide();
        $(".w-text textarea").val("");
        // addRealCommont(s)
        //console.log("返回信息成功")
      },
      dataType: ""
    });

  }
  var comment = '<dt><span><i>最高楼</i><b>您的评论 网友 客人</b> </span><em>发表于: <font color="red"> ' + showTime() + ' </font>  </em></dt>'
  comment += '<dd>' + content + '<p id="' + $("#app-id").val() + '"><a href="javascript:">支持<em>(</em><span>0</span><em>)</em></a> <a href="javascript:" pid="' + $("#app-id").val() + '">盖楼(回复)</a> </p></dd>';

  var newcomment = '<dt class="clearfix"><i>最高楼</i><span><b>您的评论</b> <em><font color="red"> ' + showTime() + ' </font></em></span></dt>';
  newcomment += '<dd>' + content + '<p id="' + $("#app-id").val() + '"><a href="javascript:">支持<em>(</em><span>0</span><em>)</em></a> <a href="javascript:" pid="' + $("#app-id").val() + '">盖楼(回复)</a> </p></dd>';
  $('.g-game-ly div dl').prepend(comment);
  $('.g-game2-ly div dl').prepend(newcomment);
}

//评论页读取顶
function BindDing(objtext, id, CommentTpye) {
  var obj = $(objtext)

  if (obj.length == 0) return false;
  for (var i = 0; i < obj.length; i++) {
    var sobj = obj.eq(i).find("a:first")
    var spanobj = obj.eq(i).find("span")
    sobj.click(function () {
      SendDing($(this).parent().attr("id"));
      var spanobj = $(this).parent().find("span")
      spanobj.html(parseInt(spanobj.html()) + 1);
      $(this).unbind();
      $(this).attr("title", "您已经顶过了");
    })
  }
  ReadDing(objtext, id, CommentTpye)
}

function SendDing(id)//发送顶
{
  //alert(id)
  var url = "action=19&id=" + id
  //var url="action=19"
  $.ajax({
    type: "POST",
    url: "/ajax.asp",
    data: url,
    success: function (msg) {
      // console.log("支持数据提交成功")
      //alert(msg)  ;
    }
  });
}

//读取评论顶的数据
function ReadDing(objtext, id, CommentTpye) {
  var obj = $(objtext);
  var sendid = "";
  for (var i = 0; i < obj.length; i++) {
    sendid += obj.eq(i).attr("id");
    if (i < (obj.length - 1)) sendid += ",";
  }

  if (sendid != "") { //是否有评论

    var url = "action=18&id=" + id + "&CommentTpye=" + CommentTpye + "&sendid=" + escape(sendid) + ""
    $.ajax({
      type: "POST",
      url: "/ajax.asp",
      data: url,
      success: function (msg) {
        ListDing(objtext, msg);
      }
    });
  }
}

function ListDing(objtext, msg) //显示顶的数据
{
  var obj = $(objtext)
  var dataObj = eval("(" + msg + ")");//转换为json对象
  for (var i = 0; i < obj.length; i++) {
    var spanobj = obj.eq(i).find("span")
    var sid = obj.eq(i).attr("id");
    for (var y = 0; y < dataObj.ID.length; y++) {
      if (sid == dataObj.ID[y]) {
        spanobj.html(dataObj.Ding[y]);
        break;
      }
    }
  }
}
//新留言结束