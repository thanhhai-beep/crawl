
(function (url, is_mobile) {
    if (!is_mobile) {
        var eleLinks = document.getElementsByTagName('link');
        for (var i = 0; i < eleLinks.length; i++) {
            if (eleLinks[i].rel == 'canonical') {
                location.href = eleLinks[i].href.replace('mip.', 'www.');
            }
        }

    }

})(
    location.href.split('?')[0].toLowerCase(),
    navigator.userAgent.toLowerCase().indexOf('mobile') >= 0 || navigator.userAgent.toLowerCase().indexOf('android') >= 0 || navigator.userAgent.toLowerCase().indexOf('ios') >= 0
)



document.write([
    '<style type="text/css">',
    '  .htmlgray-filter {',
    '    filter: grayscale(100%);',
    '    -webkit-filter: grayscale(100%);',
    '    -moz-filter: grayscale(100%);',
    '    -ms-filter: grayscale(100%);',
    '    -o-filter: grayscale(100%);',
    '    filter: url("data:image/svg+xml;utf8,#grayscale");',
    '    filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);',
    '    -webkit-filter: grayscale(1);',
    '  }',
    '</style>'].join('')
);
var date = new Date();
var nowMonth = date.getMonth() + 1;
var nowDay = date.getDate();
var nowDate = nowMonth + '-' + nowDay;

var nationalMemorialDayArray = ['4-4', '5-12', '12-13'];

if (nationalMemorialDayArray.includes(nowDate)) {
    var root = document.documentElement;
    // root.className += ' htmlgray-filter';
}