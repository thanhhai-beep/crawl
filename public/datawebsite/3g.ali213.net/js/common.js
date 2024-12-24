var yurl=window.location.href;
if(hasCapital(basename(yurl))){
    var turl=yurl.toLowerCase();
    window.location.href=turl;
}
function basename(str) {
    var idx = str.lastIndexOf('/')
    idx = idx > -1 ? idx : str.lastIndexOf('\\')
    if (idx < 0) {
        return str
    }
    return str.substring(idx + 1);
}
function hasCapital(str)
{
    var result = str.match(/^.*[A-Z]+.*$/);
    if(result==null) return false;
    return true;
}