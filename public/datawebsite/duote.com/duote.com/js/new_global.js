// �����ղ�
function addBookmark()
{
    var title = document.title;
    var url = window.location.href;
    if (window.sidebar) {
        try {
            window.sidebar.addPanel(title, url, '');
        } catch (e) {
            alert("�����������֧�ָù���,��ʹ��Ctrl+D�ղر�ҳ");
        }
    } else {
        try {
            window.external.AddFavorite(url, title);
        } catch (e) {
            alert("�����������֧�ָù���,��ʹ��Ctrl+D�ղر�ҳ");
        }
    }
}

function doBaiduSo()
{
    var keywords = $("#keywords").val();
    if(keywords.indexOf('��') != -1 || keywords.indexOf('��') != -1)
    {
        return false;
    }
    if( keywords == '' )
    {
        alert("�����������ؼ���");
        return false;
    }
    //location.href = "http://so.duote.com/cse/search?q=" + keywords + "&s=1037832334993753959&nsid=1&ie=gbk";
    location.href = "http://s.duote.com:8081/search/softindex/?keywords=" + keywords + "&page=1";
}

function doGameSo()
{
    var keywords = $("#keywords").val();
    if( keywords == '' )
    {
        alert("�����������ؼ���");
        return false;
    }
    location.href = encodeURI("//duote.runjiapp.com/searchgame/index/?keywords=" + keywords);
}

function doAndroidSo() {
    var keywords = $("#keywords").val();
    if( keywords == '' )
    {
        alert("�����������ؼ���");
        return false;
    }
    location.href = apiConfig.mBaseUrl + "/searchandroid/index?keywords=" + keywords;
}

function doIosSo() {
    var keywords = $("#keywords").val();
    if( keywords == '' )
    {
        alert("�����������ؼ���");
        return false;
    }
    location.href = "//duote.runjiapp.com/searchiphone/index?keywords=" + keywords;
}