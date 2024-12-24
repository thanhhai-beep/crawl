var wurl = "";
$(function () {

if(!window.w404){

    var jubaohtml = '<a href="javascript:" style="display: none;" class="jubao">一键举报</a><!--弹层--><div id="overlay" class="hide"></div><div id="popjubao" class="hide" ><a href="javascript:;" hidefocus="none" class="pop_close e_pop_close">+</a><div><p class="jibaotit"><span>举报<span></span></span></p><p></p><ul><li class="account_box"><p class="account"> 举报理由：</p><select class="radios"><option value="不能下载">不能下载</option><option value="涉及违规">涉及违规</option><option value="恶意扣费">恶意扣费</option><option value="虚假信息">虚假信息</option><option value="色情低俗">色情低俗</option><option value="病毒木马">病毒木马</option><option value="其他">其他</option></select></li><li><span>其他原因</span><textarea name="spec" placeholder="详细描述" id="spec" class="spec"></textarea></li><li class="code"><span>验证码</span><input type="text" name="txtCode" id="txtvalidateCode" class="text code"><img id="imgCode" class="codeimg"></li><li class="submit"><input type="button" value="确认举报" id="btn" name="submit" onclick="ReportSumbit()"></li></ul></div></div>';

    $("body").append(jubaohtml);
    $('.jubao').click(function () {

        $("#imgCode").attr("src", "/api/code/?ran=" + Math.random());

        $('#overlay').show()
        $('#popjubao').show()
    });
    var maxHeight = $(window).height() / 2;
    $(window).scroll(function () {
        if ($(window).scrollTop() > maxHeight) {
            $('.jubao').show();
        } else {
            $('.jubao').hide();
        }
    });
    $('.pop_close').click(function () {
        hidepop();
    });
    $('#overlay').click(function () {
        hidepop();
    });

    function hidepop() {
        $('#overlay').hide()
        $('#popjubao').hide()
        return false;
    }

    $("#imgCode").click(function () {
        $("#imgCode").attr("src", $("#imgCode").attr("src") + "?ran=" + Math.random());
    });
	}
});
var getCookie = function (c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1)
                c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

function ReportSumbit() {
    var yuanyin = $("select option:selected").val();
    if (!yuanyin) {
        alert("请选择举报原因!");
        return;
    }

    var spec = $("#spec").val();
    if (spec.length > 200) {
        alert("原因内容请控制在200字以内!");
        return;
    }

    var code = $("#txtvalidateCode").val();
    var cookie = getCookie("vCode");

    if (code == cookie) {

        $('#btn').attr("src", "/appskinnew/images/popjbbtn_grey.png");
        $('#btn').unbind("click");
        $.ajax({
            type: "post",
            url: wurl + "/api/submit/",
            data: {
                yuanyin: yuanyin,
                spec: spec,
                code: code,
                sid: pageConfig.id,
                type: "soft",
                url: document.referrer,
                ran: Math.random()
            },
            success: function (data) {
                if (data == "CodeError") {
                    alert("验证码出错");
                    $("#imgCode").attr("src", $("#imgCode").attr("src") + "?ran=" + Math.random());
                } else if (data == "Error") {
                    alert("录入有误");
                } else {
                    alert("举报成功");
                    $("input:text").val("");
                    $("#spec").val("");
                    $("#overlay").hide();
                    $("#popjubao").hide();
                    //$("#imgCode").attr("src", $("#imgCode").attr("src") + "?ran=" + Math.random());
                }
                $("#btn").attr("onclick", "ReportSumbit()")
            }
        });

    } else {
        alert("您输入的验证码有误");
    }

}