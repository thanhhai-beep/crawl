$(function(){
  showMoreNav()
  backTop()
  searchObj()
  comment();//����
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
  //�۽�input���������
  $("#keyword").focus(function () {
    $(".autocomplete-suggestions").show().css({ "width": "100%" });
    $(".autocomplete-suggestions").click(function () {
      if ($(this).children().length == 0) { $(this).hide(); }
    })
  });

  //����input����
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
        alert("��������'_'����Ƿ��ַ�")
      }
    } else {
      alert("�����������ؼ���")
    }
  }
}
function backTop(){//���ض���
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

// ������
function comment() {//����
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
          $(".g-comment-more").text("û�и���������").css("background", "#c3c3c3");
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
      html += '<span><i>��' + objJson.Graded[i] + '¥</i><b>' + objJson.sUserFrom[i] + ' ' + objJson.user[i] + '</b> </span><em>������: ' + objJson.DateAndTime[i] + '  </em>';
      html += '</dt>';
      html += '<dd>';
      html += objJson.Excerpt[i];
      html += '</dd>';

      htmlnew += '<dt class="clearfix"><span><b>' + objJson.sUserFrom[i] + ' ���� ����</b><i>�� ' + objJson.Graded[i] + ' ¥ </i><em>������: ' + objJson.DateAndTime[i] + '</em></span></dt>';
      if (objJson.bjhf[i] == "") {
        htmlnew += '<dd>' + objJson.Excerpt[i] + '<p id="' + objJson.Id[i] + '"><a href="javascript:">֧��<em>(</em><span> 0 </span><em>)</em></a> <a href="javascript:" pid="' + objJson.Id[i] + '">��¥(�ظ�)</a> </p></dd>';
      } else {
        htmlnew += '<dd>' + objJson.Excerpt[i] + '<div class="m-huifu"><p class="m-huifu-o">�༭�ظ���<span>' + objJson.bjhf[i] + '</span></p></div><p id="' + objJson.Id[i] + '"><a href="javascript:">֧��<em>(</em><span> 0 </span><em>)</em></a> <a href="javascript:" pid="' + objJson.Id[i] + '">��¥(�ظ�)</a> </p></dd>';
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
  var commentCont = '<div id="m-comment-box"><fieldset class="w-text"><textarea></textarea></fieldset><fieldset class="w-button"><input id="verify" class="button disable" type="button"  value="�ύ����" /></fieldset><input type="hidden" id="app-id" value="' + _pageinfo.id + '"/></div>';
  $(".g-commentbox").prepend(commentCont);
  $("#comment_0 dl dt").each(function () {
    //$(this).find("b").text("�ڷ�����")
    var wy = $(this).find("b").text();
    if (wy == '����') {
      $(this).find("b").text('�ڷ����� ����');
    }
  });  // '+objJson.sUserFrom[i]+'  �����ֶ�
  plhuifu() //�ظ���֧�ֽ��в���
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
    var str = "" + mydate.getFullYear() + "��";
    str += (mydate.getMonth() + 1) + "��";
    str += mydate.getDate() + "��";
    return str;
  }
  var id = $("#app-id").val();
  var content = $(".w-text textarea").val();
  if ($.trim(content).length <= 2) {
    alert("����д����");
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
        CommentTpye: 1  // �˴�Ϊ����˽ӿ�ƴд����
      },
      success: function (s) {
        alert("�ύ�ɹ�");
        $(".w-text textarea").text("");
        //addRealCommont(s);        
      },
      dataType: ""
    });
  }
  if (CommentTpye == 0) {//����
    //������ajax��ֱ�ӻ�ȡ����
    $.ajax({
      type: 'POST',
      url: '/ajax.asp',
      data: {
        content: content,
        SoftID: id,
        Action: 2,
        CommentTpye: 0  // �˴�Ϊ����˽ӿ�ƴд����
      },
      success: function (s) {
        alert("�ύ�ɹ�");
        $("#comment_list,.g-comment-showbtn").show();
        $("#m-comment-box").hide();
        $(".w-text textarea").val("");
        // addRealCommont(s)
        //console.log("������Ϣ�ɹ�")
      },
      dataType: ""
    });

  }

  if (CommentTpye == 5) {//����
    //������ajax��ֱ�ӻ�ȡ����
    $.ajax({
      type: 'POST',
      url: '/ajax.asp',
      data: {
        content: content,
        SoftID: id,
        Action: 2,
        CommentTpye: 5  // �˴�Ϊ����˽ӿ�ƴд����
      },
      success: function (s) {
        alert("�ύ�ɹ�");
        $("#comment_list,.g-comment-showbtn").show();
        $("#m-comment-box").hide();
        $(".w-text textarea").val("");
        // addRealCommont(s)
        //console.log("������Ϣ�ɹ�")
      },
      dataType: ""
    });

  }
  var comment = '<dt><span><i>���¥</i><b>�������� ���� ����</b> </span><em>������: <font color="red"> ' + showTime() + ' </font>  </em></dt>'
  comment += '<dd>' + content + '<p id="' + $("#app-id").val() + '"><a href="javascript:">֧��<em>(</em><span>0</span><em>)</em></a> <a href="javascript:" pid="' + $("#app-id").val() + '">��¥(�ظ�)</a> </p></dd>';

  var newcomment = '<dt class="clearfix"><i>���¥</i><span><b>��������</b> <em><font color="red"> ' + showTime() + ' </font></em></span></dt>';
  newcomment += '<dd>' + content + '<p id="' + $("#app-id").val() + '"><a href="javascript:">֧��<em>(</em><span>0</span><em>)</em></a> <a href="javascript:" pid="' + $("#app-id").val() + '">��¥(�ظ�)</a> </p></dd>';
  $('.g-game-ly div dl').prepend(comment);
  $('.g-game2-ly div dl').prepend(newcomment);
}

//����ҳ��ȡ��
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
      $(this).attr("title", "���Ѿ�������");
    })
  }
  ReadDing(objtext, id, CommentTpye)
}

function SendDing(id)//���Ͷ�
{
  //alert(id)
  var url = "action=19&id=" + id
  //var url="action=19"
  $.ajax({
    type: "POST",
    url: "/ajax.asp",
    data: url,
    success: function (msg) {
      // console.log("֧�������ύ�ɹ�")
      //alert(msg)  ;
    }
  });
}

//��ȡ���۶�������
function ReadDing(objtext, id, CommentTpye) {
  var obj = $(objtext);
  var sendid = "";
  for (var i = 0; i < obj.length; i++) {
    sendid += obj.eq(i).attr("id");
    if (i < (obj.length - 1)) sendid += ",";
  }

  if (sendid != "") { //�Ƿ�������

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

function ListDing(objtext, msg) //��ʾ��������
{
  var obj = $(objtext)
  var dataObj = eval("(" + msg + ")");//ת��Ϊjson����
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
//�����Խ���