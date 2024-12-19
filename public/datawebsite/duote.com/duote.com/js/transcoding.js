function Base64() {

    // private property
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    // public method for encoding
    this.encode = function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = _utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
                _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
                _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
        }
        return output;
    }

    // public method for decoding
    this.decode = function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = _keyStr.indexOf(input.charAt(i++));
            enc2 = _keyStr.indexOf(input.charAt(i++));
            enc3 = _keyStr.indexOf(input.charAt(i++));
            enc4 = _keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = _utf8_decode(output);
        return output;
    }

    // private method for UTF-8 encoding
    _utf8_encode = function (string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }
        return utftext;
    }

    // private method for UTF-8 decoding
    _utf8_decode = function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while ( i < utftext.length ) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i+1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i+1);
                c3 = utftext.charCodeAt(i+2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
}
var url;
url=window.location.href;
if(url.indexOf('duote.com/sort')!= -1 || url.indexOf('duote.com/sImgInfo')!= -1)
{
	//console.log('jr');
	var topd=document.getElementsByClassName('links-banner');
	topd[0].style.display = "none";
}

if(url.indexOf('news.duote.com')!= -1 || url.indexOf('www.duote.com/dnb/')!= -1 || url.indexOf('www.duote.com/game/')!= -1 || url.indexOf('www.duote.com/top/')!= -1)
{
	var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?f534341df5efae3de8b37ee8bc771217";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
}

if(url.indexOf('www.duote.com/tech/')!= -1 || url.indexOf('www.duote.com/tech/soft')!= -1 || url.indexOf('www.duote.com/ios/')!= -1 || url.indexOf('www.duote.com/zt/')!= -1 || url.indexOf('www.duote.com/sort/')!= -1)
{
	var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?f534341df5efae3de8b37ee8bc771217";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
}

if(url.indexOf('www.duote.com/tech/')!= -1 || url.indexOf('www.duote.com/tech/soft')!= -1 || url.indexOf('www.duote.com/ios/')!= -1 || url.indexOf('www.duote.com/sort/')!= -1)
{
	document.writeln('<script type="text/javascript" src="https://img3.runjiapp.com/duoteimg/dtnew_recom_img/duoteself/index_4.js"></script>');
}

if(url.indexOf('www.duote.com/tech/')!= -1)
{
	//var ts = `<div class="tip"><strong>本站提醒：</strong>投资有风险，入市须谨慎，本内容不作为投资理财建议。</div>`
	var ts = `<div class="tip" style="text-align: left;padding: 0;">本站所有区块链相关数据与资料仅供用户学习及研究之用，不构成任何投资、法律等其他领域的建议和依据。
强烈建议您独自对内容进行研究、审查、分析和验证，谨慎使用相关数据及内容，并自行承担所带来的一切风险。</div>`
	
	if($('.page').length)
	{
		var title=$('h1')[0].textContent;
		var tj='';
		if($('.model3').length)
		{
			tj=$('.model3')[0].textContent;
			//$('.model3')[0].style.display='none';
		}
		
		if(title.indexOf('币')!=-1 || title.indexOf('区块链')!=-1 || title.indexOf('交易所')!=-1 || title.indexOf('外汇')!=-1 || title.indexOf('基金')!=-1 || title.indexOf('投资')!=-1 || title.indexOf('汇率')!=-1 || tj.indexOf('欧意')!=-1)
		{
			var pg=$('.page');
			pg.before(ts);
		}
	}
}
if(url.indexOf('news.duote.com/')!= -1)
{
	//var ts = `<div class="tip"><strong>本站提醒：</strong>投资有风险，入市须谨慎，本内容不作为投资理财建议。</div>`
	var ts = `<div style="text-align: left;padding: 0;font-size: 14px;color: #999;">本站所有区块链相关数据与资料仅供用户学习及研究之用，不构成任何投资、法律等其他领域的建议和依据。
强烈建议您独自对内容进行研究、审查、分析和验证，谨慎使用相关数据及内容，并自行承担所带来的一切风险。</div>`
	
	if($('.jcfd').length)
	{
		var title=$('h1')[0].textContent;
		
		if(title.indexOf('币')!=-1 || title.indexOf('区块链')!=-1 || title.indexOf('交易所')!=-1 || title.indexOf('外汇')!=-1 || title.indexOf('基金')!=-1 || title.indexOf('投资')!=-1 || title.indexOf('汇率')!=-1)
		{
			var pg=$('.jcfd');
			pg.before(ts);
		}
	}
}

