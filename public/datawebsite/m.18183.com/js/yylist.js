$(function() {
    var Terminal = {
        platform: function() {
            var u = navigator.userAgent,
                app = navigator.appVersion;
            return {
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
                iPhone: u.indexOf('iPhone') > -1,
                iPad: u.indexOf('iPad') > -1
            };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    }
    var yylist = function(s) {
        $.ajax({
            type: "GET",
            url: "//down-statistics.18183.com/transfer/page?page_id=" + s,
            dataType: 'jsonp',
            success: function(result) {
                var gameList = "<ul>";
                $.each(result.data.items, function(indexInArray, valueOfElement) {
                    gameList += '<li><a href="//down-statistics.18183.com/transfer/go-down-' + valueOfElement.item_id + '" title="' + valueOfElement.title + '"><img src="//down-statistics.18183.com/transfer/go-pic-' + valueOfElement.item_id + '" alt="' + valueOfElement.title + '"><p>' + valueOfElement.title + '</p></a></li>';
                });
                gameList += "</ul>";
                if($(".yy-ranklist ul").length == 0){
                    $(".yy-ranklist").append(gameList);
                }
            }
        });
    };
    var ku = ku || null;
    if (ku != null) {
        ku.guide.Terminal.platform.android ? yylist(3) : yylist(4);
    } else {
        Terminal.platform.android ? yylist(3) : yylist(4);
    }

});