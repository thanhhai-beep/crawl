(function(){
    var CLIENT_PLATFORM = (function(ua)
    {
        if( ua.match(/iphone/i) || ua.match(/ipad/i) || ua.match(/ios/i) ) {
            return 'ios';
        } else if( ua.match(/android/i) || ua.match(/mobile/i)  ) {
            return 'az';
        } else {
            return 'pc';
        }
    })(navigator.userAgent.toLowerCase());
    var loadPlatforms = function(currentPlatform)
    {
        if( __PLATFORMS && (CLIENT_PLATFORM in __PLATFORMS) && currentPlatform != CLIENT_PLATFORM ) {
            var res = __PLATFORMS[CLIENT_PLATFORM];
            $(".JS-res-name").html( res.name + 'V' + res.version );
            $(".JS-res-icon").attr( 'src',  res.icon );
            $(".JS-res-url").html( res.url );
            $(".JS-res-size").html( res.size );
            $(".JS-res-size").html( res.size );
            $(".JS-res-platform").html( res.platform );
            // $(".JS-res-name").html( res.name );
            // initDownload('.JS-download-norm', CLIENT_PLATFORM, res.download, res.cp_download, 'http://ini.8476ddd.com/hezi/qh/91danjiapk.php', 'http://ini.8476ddd.com/hezi/qh/91danjiapk.php' );
        }
        // console.debug('NO RES');
    }

    window['loadPlatforms'] = loadPlatforms;



    
    var initDownload = function ( btnSelecor, currentPlatform, real, cp, _az, _ios ) {

        $(btnSelecor).attr('href', real );
        // $(btnSelecor).attr('href', cp ? cp : real );
        return;

        if( currentPlatform == CLIENT_PLATFORM ) {
            if( cp ) {
                $(btnSelecor).attr('href', cp);
                return;
            } else if( real ) {
                $(btnSelecor).attr('data-href', real);
                $(btnSelecor).click(function(){
                    setTimeout(function(){
                        $(btnSelecor).attr('href', $(btnSelecor).attr('data-href'));
                    }, 1000);
                })
                //不return,第一次访问推广地址
            }
        } 

        if( CLIENT_PLATFORM == 'ios' )  {
            $(btnSelecor).attr('href', _ios);
        } else if( CLIENT_PLATFORM == 'az' ) {
            $(btnSelecor).attr('href', _az);
        } else {
            $(btnSelecor).attr('href', _az);
        }

    };
    window['initDownload'] = initDownload;
})();

function bindPageScroll( obj )
{
    $(window).scroll(function(){
        var p = $(obj).offset().top - $(window).scrollTop();
        if( p < $(window).height() ) {
            $(obj).click();
        }
    });
}

$(function(){
	var btn =false;
	$('#t_cate_icon').click(function(){
		if(!btn){
			$('#hTop').addClass('maskActive');
			$('#headerActive').show();
			$('#mask').show();
			$('#cateContent').show();
			btn = true;			
		}else{
			$('#hTop').removeClass('maskActive');
			$('#headerActive').hide();
			$('#mask').hide();
			$('#cateContent').hide();
			btn = false;	
		}
	});
	$('#mask').click(function(){
		$('#hTop').removeClass('maskActive');
		$('#headerActive').hide();
		$('#mask').hide();
		$('#cateContent').hide();
		btn = false;
	});
	var ntn = false;
	$('#navOpen').click(function(){
		if(!ntn){
			$('.hide').show();
			$(this).addClass('closeIcon');
			ntn = true;
			//$('.t_nav').height('auto');
		}else{
			$('.hide').hide();
			$(this).removeClass('closeIcon');
			ntn = false;
			//$('.t_nav').height('auto');
		}
	});
	//选项卡
    $('.jsTab').each(function(){ 
        var aNav = $(this).find('.tabNav').find('li');
        var aList = $(this).find('.tablist');
        var eType = $(this).attr('data-type') ? $(this).attr('data-type'):'mouseout';

        function change(_this){
            var index = _this.index();
            _this.siblings().removeClass('active');
            _this.addClass('active');

            aList.hide();
            aList.eq(index).show();
        }
        if(eType=='mouseout'){
            aNav.each(function(){
                $(this).mouseover(function(){
                    var _this = $(this);
                    change(_this);
                });
            });
        }else{
            aNav.each(function(){
                $(this).click(function(){
                    var _this = $(this);
                    change(_this);
                });
            });
        }
    });

    //内页搜索显示
    $('#searchBtn').click(function(){
    	$('#hTop').removeClass('page_top').css({'padding-left': '1.3056rem'});
    });

    $('.summary .openBtn').click(function(){
    	$('.summary').hide();
    	$('.details').show();
    });
    $('.details .closeBtn').click(function(){
    	$('.summary').show();
    	$('.details').hide();
    });

    $('.returnBtn').click(function(){

        if( history.length > 0 ) {
            history.back();
            return false;
        }
        return true;
    });
});

(function() {
    var hm = document.createElement("script");
    hm.src = "//csi.91danji.com/91danji/init.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();