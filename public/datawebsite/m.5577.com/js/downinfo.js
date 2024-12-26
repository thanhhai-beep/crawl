//记录cook
var Cookie={get:function(name){var value='',matchs;if(matchs=document.cookie.match("(?:^| )"+name+"(?:(?:=([^;]*))|;|$)"))value=matchs[1]?unescape(matchs[1]):"";return value},set:function(name,value,expire,domain){expire=expire||30*24*3600*1000;var date=new Date(),cookie="";date.setTime(date.getTime()+expire);cookie=name+"="+escape(value)+";expires="+date.toGMTString()+";path=/;";domain&&(cookie+="domain="+domain+";");document.cookie=cookie},del:function(name,domain){Cookie.set(name,'',-1,domain)}};
function setCookie(cooktval) {
    var Days = 1;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = cooktval + "=yes;expires=" + exp.toGMTString()
}
//商务下载链接统计
if(typeof(_downInfo) != 'undefined'){
	if(!isNaN(_downInfo.Address) && $("#address").attr("href").indexOf('/e/') == -1){
		var dateTime = new Date(_webInfo.DateTime.replace(/\//g,"-")).getTime()/1000; //转换时间戳			
		var downLink = 'http://tj.awdudes.com/e/9/'+_webInfo.Username+'/'+_downInfo.Address+'?soft_id='+_downInfo.SoftID+"&t="+dateTime;
		$("#address").attr("href",downLink)
	}
}

var isAds=false; //是否为商务包
var downHref = $("#address").attr("href");		
var noAd = ["6071.com","1030.apk","hsxyb.com","tj.tcyl77.com","tj.tcyl77.com","http://g.","http://tj.","x1.241804.com","moban.com","qianghongbaoyo.com","down1.qianghongbaoyo.com","yiwan.com","down2.guopan.cn","dl.guopan.cn","guopan.cn","duowan.com","ugame.uc.cn","ugame.9game.cn","360.cn","ewan.cn","anfan.com","duokoo.baidu.com","caohua.com","456.com.cn","miyugame.com","sifuba.net","btsysf.com","pyw.cn","sy217.com","17byh.com","xinkuai.com","s.qq.com","down.nntczn.com","down.bugeyu.com","open.play.cn","hgame.com","yxgames.com","tj.awdudes.com","tj.chenjianxiang.com","hdl.91haoku.com","17byh.com","btgame01.com","ugame.9game.cn","down2.guopan.cn","apk.dian5.com","and.milu.com","download.jiuyao666.com","download.btgame9.com","h5cs.miao96.com","downlhh.btgame99.com","tg.sooyooj.com","kepan365.com","game.66sy.cn","fb.3733.com","sapi.kuangwan.com","cps.xiaomayx.com","i6h5.com","tj.chenjianxiang.com","j.awdudes.com","tj.muticos.com","y.tongapk.com","sp.ulxue.com","sp2.vaatn.com","xzsp3.nevehicle.cn","ydb.vaatn.com","http://a.","http://ok"]

for(i=0;i<noAd.length;i++){
	if(downHref.indexOf(noAd[i]) > -1){isAds=true;}
}

var isXiajia = false;
if(_pageinfo.softlicence != 'undefined' && _pageinfo.softlicence == "\u4e0b\u67b6" && $("#address").attr("href") == ''){
	isXiajia = true;
}

var shangwuData = {
	//下载页顶部安卓推荐位
	androidTopRecomd:[["360手机助手","360应用商店","http://m.5577.com/d/42321","http://pic.wk2.com/up/2021-1/20211281055476387.png"],
		["姚记捕鱼","手机捕鱼","http://m.5577.com/d/516657","http://pic.wk2.com/up/2020-8/2020851059146443.png"],
		["闪烁之光","次元幻境","http://m.5577.com/d/528431","http://pic.wk2.com/up/2020-8/202085111128826.png"],
		["天姬变","国风养成","http://m.5577.com/d/528538","http://pic.wk2.com/up/2020-8/202085111562532.png"],
		["末日血战","末日生存","http://m.5577.com/d/528657","http://pic.wk2.com/up/2020-8/202085113196469.png"],
		["逃跑吧少年","指尖竞技","http://m.5577.com/d/527690","http://pic.wk2.com/up/2020-8/202085115196230.png"],
		["云上城之歌","二次元冒险","http://m.5577.com/d/526843","http://pic.wk2.com/up/2020-8/202085111087136.png"],
		["三国志战略版","三国国战","http://m.5577.com/d/511800","http://pic.wk2.com/up/2020-8/202085111001155.png"],
		["口袋觉醒","神奇宝贝","http://m.5577.com/d/513452","http://pic.wk2.com/up/2020-8/2020851110185314.png"]],
			//下载页顶部IOS推荐位
	iosTopRecomd:[["大话女儿国","http://m.5577.com/d/472715","http://pic.wk2.com/up/2020-8/2020851119191548.png"],
		["口袋精灵","http://m.5577.com/d/373663","http://pic.wk2.com/up/2020-8/202085111951362.png"],
		["绿茵传奇","http://m.5577.com/d/528170","http://pic.wk2.com/up/2020-8/2020851120501018.png"],
		["西游悟空传","http://m.5577.com/d/390796","http://pic.wk2.com/up/2020-8/202085112457977.jpg"],
		["怒火一刀","http://m.5577.com/d/438500","http://pic.wk2.com/up/2020-8/2020851124394304.png"],
		["传奇世界之仗剑天涯","http://m.5577.com/d/464332","http://pic.wk2.com/up/2020-8/2020851125372758.png"],
		["三国之旅","http://m.5577.com/d/512463","http://pic.wk2.com/up/2020-8/2020851128302778.png"],
		["新大主宰","http://m.5577.com/d/383736","http://pic.wk2.com/up/2020-8/202085112874560.png"]],
}

var ffTitle = ["蜜桃约","隔壁同学","夜狼","蝌蚪聊天","先锋影音","西瓜影音","吉吉影音","影音先锋","灰灰影音","火鸟云","火鸟云视频","那好吧","大白影音","夜色播放器","呼呼影音","sysconfig","ym云播","水瑟影音","喵喵云点播","大白影视","酷吧影视","小马搜索","聚看影视","极速影院","极速畅看"];

var replaceCont = ['新趣官方版','新趣官方版','http://pic.wk2.com/up/2017-8/2017811632466572.png',['http://pic.wk2.com/up/2017-9/201792710445764860.jpg','http://pic.wk2.com/up/2017-9/201792710446097190.jpg','http://pic.wk2.com/up/2017-9/201792710447652650.jpg'],'<p>新趣app官方版下载提供给你！这是一款关于兴趣头条的软件APP，这里随时为你分享各种精品趣味小视频和内容，打造最有趣的搞笑娱乐社区，这是一款更好玩、更有意思的热门社交app，你也来下载，让你的生活娱乐起来吧！</p><p style="text-align:center;"><img src="http://pic.wk2.com/up/2017-8/201781163637431530.jpg"width="240"height="400"/></p><h3>【软件特色】</h3><p><strong>【拍摄镜头】</strong></p><p>-强大的滤镜和主题效果，实时美颜视频</p><p><strong>【视频剪辑】</strong></p><p>-视频任意剪辑，秀出自我</p><p><strong>【配音、配乐】</strong></p><p>-傻瓜式一键添加配乐轻松搞定</p><p><strong>【趣友互动】</strong></p><p>-点赞、关注、私信、搜索、神评，和视频大咖、男神女神、红人零距离</p><p><strong>【轻松分享】</strong></p><p>-一键分享至微信、QQ、微博等热门社交圈</p><h3>【官方点评】</h3><p>新趣，2017超好玩的搞笑娱乐社区，主要为用户提供精品趣味小视频，上新趣，笑不能停，期待你的神评。</p></p>','http://tj.awdudes.com/0009/6157'];

var qpmgcdata = ['QQ欢乐斗地主手机客户端','//pic.5577.com/up/2018-3/2018328955451961.png',["//pic.5577.com/up/2018-3/201832810056986080.jpg","//pic.5577.com/up/2018-3/201832810058542640.jpg","//pic.5577.com/up/2018-3/201832810059320420.jpg"],' <p>QQ欢乐斗地主是由QQ游戏原班团队打造的Android手机平台的一款在线棋牌游戏，可以使用手机客户端直接访问QQ欢乐斗地主游戏，然后与大家一起博弈。</p><h3>【游戏特色】</h3><p><span style="color: rgb(0, 0, 0);">1、游戏的画面质感优秀；</span></p><p><span style="color: rgb(0, 0, 0);">2、游戏支持癞子玩法和其他玩法；</span></p><p><span style="color: rgb(0, 0, 0);">3、增加各种游戏任务；</span></p><p><span style="color: rgb(0, 0, 0);">4、拥有抢地主，明牌，加倍等多种玩法，更添游戏乐趣！</span></p><p><span style="color: rgb(0, 0, 0);">5、丰富的游戏配音；</span></p><h3>【操作玩法】</h3><p><span style="color: rgb(0, 102, 0);">1、登录QQ号后就可以选择不同的玩法开始游戏啦；<br/></span><span style="color: rgb(0, 102, 0);">2、游戏规则和其它斗地主游戏类似，不过游戏中加入了癞子等等特色玩法， 让游戏变的更加的有趣！</span></p><h3>【特别说明】</h3><p><span style="color: rgb(51, 51, 51);"><span style="color: rgb(204, 0, 0);">QQ官方游戏，需要欢乐豆作为货币来进行比赛，没豆子当然就玩不了啦。<br/></span></span></p>','http://57da.198449.com/com.qqgame.hlddz.apk']

var cityArray = ["武汉","上海","广州","厦门","深圳","重庆","长沙 ","天津"];	
var urlmgCity = ["武汉","上海","广州","深圳"];	
var cityAll = ["深圳","上海","武汉","广州","杭州"]

var titleHtml = $("title").html();
var forNum = ffTitle.length;

$(function(){
	randomColor();
	mainShow();
	downbtn();
	keyWordTab();
	hideNotCont(); //隐藏没有内容板块
	previmgShow(); //截图预览功能
	addAuthority(); // 添加权限
	if ($(".g-peo-like ul li").length <= 0) {
		$(".g-peo-like").hide();
		$(".g-peo-like").prev(".g-hot").hide();
	}
	if ($(".g-key-ohter").find("div").length <= 0) {
		$(".g-key-ohter").hide();
	}
	
	//属性不等于undefined，并且属性等于“下架”，就顶级屏蔽策略
	if(isXiajia){
		//按钮变成“该资源已下架”
		$("#downAddress .m-down-ul").html('<li class="m-down-last"><a href="javascript:;" class="g-gamedown-btn down" style="background:#888" id="address">\u8be5\u8f6f\u4ef6\u5df1\u4e0b\u67b6</a></li>');
	}else{
		// cityIf(); //地区判断
	}
	
	if($('#beian').text() === ''){
    $('.beian-box').hide()
  }

	
	WebPages.init()
})

/*下载页广告Begin*/
var address;
var WebPages = { 
	init:function(){		
			address = $("#address").attr("href");
		this.zsxz()
		this.downLoad(); //下载页策略
		this.topRecomd();//顶部推荐位	
	},
	zsxz(){
		// 包含一下id，则不执行
		var noshow_id = [608928,472068,389438,389432,340816,338499,140727,133201,29665,152032,71009]
		var is_baohan = noshow_id.filter(val => Number(val) === Number(_pageinfo.id))
		if(is_baohan.length > 0){
			return
		}
    // 高速下载
		var upDate = $('.g-gamedown div b:eq(0) .m-b2 span').text().split(' ')[0]
    var dateTime = new Date(upDate).getTime()/1000; // 更新时间戳
    var sevenDay = 604800 // 7天的时间戳数值
    var onDaty = new Date((new Date()).toLocaleDateString().replace(/\//g,'-'))/1000 // 当天时间戳
    var isSevenDay = false // 当前时间 > 更新时间(604800)7天
    if(onDaty-dateTime >= sevenDay){
      isSevenDay = true
    }

    // 特权ID
		var openIds = [478836,605775,324534,638768,630346,629551,394653,478090,609857,638845,618295,427755,184047,568461,198744,615792,163921,82234,483214,78561,645422,52803,614679,177098,630348,165358,647459,646396,448816,169388,480078,637503,592863,578963,184520,633901,511123,632281,483351,87157,227108,577108,619368,496943,382724,632522,119175,644931,632699,617606,612442,638280,185664,68716,457105,588750,181681,534318,395094,617667,640416,647113,614733,630546,565524,585126,630722,468154,570993,582210,111135,643454,639436,639058,575465,615426,645892,629231,656771,615238,588985,644435,647782,636855,637001,636017,645877,118269,567899,80635,287239,361342,648087,451943,615571,579246,92523,331054,639988,542832,617531,392575,654426,637085,653277,524031,577538,623454,577952,646150,647094,640789,501397,627914,627555,534328,480836,107943,619359,434087,648280,631365,142184,122097,282174,599971,31838,122277,400197,640785,446227,361345,619638,109277,30982,570998,36646,644349,650823,631824,638113,576885,140177,589786,605647,615789,638605,522441,226426,645127,375376,638856,638619,531332,76462,615787,370164,81840,631334,518570,644501,638368,41879,628266,214473,110163,603608,618275,587401,641098,629103,408888,580895,630005,617253,638852,634221,632669,639115,579699,586928,631791,639347,425823,644769,368811,642833,619929,638265,116149,483947,638853,515778,593330,88014,642452,657955,642762,638833,618089,158659,592466,33523,629541,377794,572968,541877,127280,636937,555418,638536,48917,518706,277661,630011,640255,639322,632363,582653,173758,553032,484897,631547,640935,616863,630431,592729,448077,644491,643175,378461,577125,638612,635362,396093,611391,575307,458097,630671,641278,436477,627736,641087,587391,639337,651839,638524,351876,638500,638683,561697,658021,504681,48355,181241,100195,546640,631902,640389,645550,646277,645208,192167,559630,639110,635830,630303,557422,641318,141978,213278,615554,558783,588800,654690,168856,641015,122721,575333,488692,609791,466245,581666,566770,641533,526787,277740,506317,349584,603230,638101,605029,643132,641414,642325,608928,646490,531969,582204,632413,189789,641009,645983,583812,133853,147302,615591,620601,559885,81082,564097,575636,95352,525726,325443,639705,644563,121256,618390,583801,639726,322098,82288,605309,640216,477507,419184,519587,491194,628710,622337,526331,343804,384129,643516,31637,321227,584397,577612,350356,498267,450463,536921,331293,387406,563979,607125,630655,524994,50335,638225,481426,561422,517164,632240,640752,639927,616697,532219,32179,613117,656044,375045,397779,646723,329904,638928,469274,639670,112239,640056,647219,605694,138568,640411,235596,427428,470580,631294,640460,631630,640543,280324,323225,634194,151223,566687,592737,592711,472029,589785,382167,627910,564622,617992,644547,615548,604687,638349,639561,41996,649195,135102,537848,157308,641399,577369,644364,183475,519340,608500,77222,640959,637919,352415,525346,608563,293479,634257,90987,602701,322061,423203,640250,103129,89893,632011,99216,548126,624905,615760,88718,605747,195669,400205,639159,604609,106535,467848,112136,531384,656013,632753,32180,641412,583452,628162,638618,432448,652903,374243,640962,587746,638653,640551,301763,502427,453111,639374,91633,498333,640470,627507,617742,474916,617966,577364,631646,522769,329985,157641,642983,586103,640640,631892,631378,462043,102855,643340,301233,48389,602211,302284,632278,300976,535623,571337,591455,46456,643808,639892,639792,630597,618387,616969,589359,102835,577264,646282,647175,543600,479559,356061,199859,617492,631427,639373,455751,615930,299282,516901,175856,639451,615304,630347,639442,615815,638965,619762,638267,81322,638203,634301,633190,318966,390455,464726,512665,545935,139727,526760,638915,612112,344353,78968,621751,659465,515056,645621,501072,638106,638321,639385,100082,640608,638535,165371,642304,466847,108367,632974,610497,31387,444437,575599,646933,640525,482759,476419,583182,638611,586280,639575,646499,635748,492499,62071,435258,504512,403307,641077,637048,90882,317577,638462,194733,163642,582343,173744,96438,631272,135109,639455,645613,561428,645645,638977,184802,639661,550231,585476,639256,225150,524348,639158,533363,620801,639184,153474,506727,96764,605336,218277,518055,656289,133395,237914,524481,496056,254243,571126,191618,37664,94725,532081,642483,565530,581527,479822,565585,629836,616700,89054,241699,640984,329014,640050,639061,139197,620887,477885,499174,640603,640745,169928,547696,617049,638347,641065,635693,76324,638523,434890,436099,610421,539378,652731,464844,288938,178814,473495,474299,638978,468223,628450,169925,248238,640065,36937,640646,66517,538526,230822,638425,646897,639402,589641,524061,510499,658091,389585,436203,457763,638542,485727,45790,609695,412835,194900,640769,607582,641120,542755,397360,638922,644485,637039,479217,642632,642664,629835,186673,431708,605330,576451,568252,640069,461081,608848,637472,645153,562551,612190,535631,97328,425548,434919,67825,647725,589175,638494,541195,426828,638782,119480,640650,170067,213668,633526,206461,98321,637275,164216,638849,698435,655483,671688,687981,609846,690331,628705,690332,652478,673126,687212,698145,591471,657945,690316,685323,658030,690361,690371,689780,283904,683370,689580,691629,697215,533006,683834,469407,687115,689829,652476,680716,688121,489577,671932,687422,678025,670337,686643,692631,677772,686885,691369,672937,696887,575886,696668,690473,686583,682077,617256,639255,690540,301949,688991,244289,647731,680906,586400,689826,690382,688767,639425,690888,657957,695453,95182,688119,683135,689769,685745,694912,674607,653415,692364,628301,686904,686890,697107,643452,691649,692127,677717,574380,687105,640259,698405,630309,630437,654453,551128,646437,688070,654362,686957,695265,692265,684844,695620,654500,121251,688696,660439,659350,693192,244345,686007,678711,696492,632360,691520,681522,541300,193895,687609,465606,694390,680135,673530,694287,681898,628708,296230,687117,613721,688120,382010,698863,690241,687575,677907,679432,657805,697284,685592,114303,690134,568808,687216,697545,681029,697275,671891,693158,686419,680390,657160,681837,688876,682852,673065,690254,685858,691860,696343,687607,678449,679358,680008,686681,678122,693725,668464,695984,697959,695456,684231,565066,693672,688698,615555,676136,687008,697115,483995,646618,698031,657618,651210,680574,686905,689471,670768,629201,522542,651924,631337,690887,678164,657787,382017,591418,656150,692008,652064,682021,698901,581456,692930,632553,678005,684869,693026,630659,642377,656406,581521,684859,689772,244427,685260,660443,686048,635467,658895,673323,697186,630682,694470,269556,645820,696032,686888,673379,698281,655999,685761,681223,264414,480077,103759,138045,690366,657943,696915,698781,697558,547231,689786,74559,690644,690664,661432,644355,684612,479644,464190,534663,657785,632451,673714,672894,683654,455135,692872,640732,685731,679107,639787,687783,575629,596547,671399,642742,694396,678976,45111,688084,574926,682097,120639,677235,675730,689338,215995,654261,691016,698896,688888,136157,691929,689699,641559,693981,658005,690390,677856,679500,686319,699305,686644,691352,673518,244912,578675,660365,618115,683846,688757,693202,198736,695723,680748,654270,655508,698888,636662,653051,683100,635167,474912,656043,687812,682199,615561,679899,699057,687217,668705,684630,688057,639278,680436,684328,678452,678758,693976,589554,689336,658913,634064,688048,641608,687759,678358,660427,688643,696093,604380,667480,297485,699179,691736,364246,693162,632764,689892,682786,683716,668390,668883,699068,390554,614519,117833,697103,683271,640634,686603,672529,675078,671707,658419,668392,164113,686807,643050,361963,668596,674109,691632,666574,692609,680507,464450,696092,78375,687557,697767,662102,699081,601163,683712,656610,689793,697776,689350,619682,696853,672761,659695,648940,684577,152798,585075,692982,688073,679906,473189,693825,665426,682851,682065,693615,478039,692648,692883,378593,649372,678093,657243,688037,531657,670874,636062,692610,630598,663469,696481,640807,652237,638116,638402,682092,641001,631915,628245,682918,685767,487415,659869,688914,690097,635265,630807,690668,679202,698159,694219,580629,270537,678554,676778,677151,696996,577531,647984,564103,573262,677111,689220,402095,683717,696987,693890,693622,637174,675696,686396,690954,673435,662954,680753,688633,684483,632348,685000,389382,699263,678222,676592,651478,662321,649752,157013,675529,139318,685945,677963,444179,672012,45220,663358,685717,563515,657795,687016,690384,673254,618084,634872,577401,518161,658476,638260,691302,678946,683934,669453,648187,185749,655936,118168,693939,697327,533353,674479,689731,690048,638602,679662,698177,698821,143843,691711,674296,674381,691862,663626,698340,688516,697807,687270,608190,183262,690410,688872,693834,698949,324734,207448,663969,646521,649578,676590,640453,699486,686204,647950,641016,693903,673182,346703,657854,693556,696175,671856,694825,669126,638430,313138,679920,626378,679889,615540,109535,687147,692262,657791,653849,681018,689803,687448,691900,573757,671426,682720,649242,688845,640686,539375,357354,537650,697417,192528,190048,680514,172702,640613,657250,693060,689278,696000,698918,382727,690252,689308,689659,698151,692443,482596,681820,643828,503306,695785,691513,639226,634587,668268,680176,591895,664338,193068,542766,688969,670807,483222,689517,682789,656444,678857,122433,268916,695009,695044,687472,699027,686050,640009,682057,691496,685890,652038,635417,690996,529199,653558,662825,54457,398263,691291,226921,681648,493888,47639,689719,655977,477101,674228,640511,605676,588652,695296,645778,684491,697217,640920,70890,638304,684016,685738,576514,119558,695193,324658,657814,645856,153282,604188,352705,578141,669183,596367,650620,696618,118387,673630,154079,694444,682577,551099,679796,643264,177664,662457,692213,691100,434628,698610,427188,693440,63231,581473,683132,473209,540533,697472,334674,237873,691768,691770,694655,644017,609088,458935,544634,464627,393227,649373,676077,159961,688941,681643,683573,640306,685261,613167,168858,574608,682365,654445,640430,73032,688870,632391,661679,697465,692407,631816,675094,486978,691177,509450,643727,526016,696799,674428,687774,614373,639507,401267,691542,639710,694839,688505,655768,681717,685770,688632,658475,699083,696133,47053,689894,646495,695210,588707,688447,373061,580800,688557,584506,96961,658829,394580,685897,683991,393217,694404,685599,642073,364228,661493,202255,685435,640667,416831,630164,697714,669168,686678,667237,680831,697404,690827,638196,697573,677895,696841,690284,654522,601303,41676,688625,179998,674234,460348,91230,646068,612062,547875,698276,677757,689311,147178,699073,644704,639882,639042,615794,465597,691937,678015,696201,643694,682061,690171,345741,687871,686403,698007,329816,310839,224020,504599,217050,687483,669708,542279,669842,681194,698719,635750,639319,542252,111821,688382,639340,679450,696936,638501,696356,674746,543469,488594,632726,687788,677693,676082,330840,698914,679078,685917,699151,498289,506023,679460,202244,615718,684912,181662,691833,673600,346305,519779,684946,689337,639918,679921,390753,499296,443972,611279,658911,457906,679263,686219,690500,511575,660130,639299,686251,466043,637912,640602,686909,195415,45236,693843,197193,576013,689455,390185,541991,693490,698166,697560,639642,136504,697559,687756,638671,529919,140727,681106,682633,160726,698270,689737,685343,697152,682344,605331,598856,693159,670961,686376,613693,685748,640135,698956,632312,654360,697675,617104,647463,684498,636928,639591,646743,658108,675245,680081,505839,219631,693577,696836,672754,678102,673494,687955,122419,670449,273513,682334,688875,674439,539597,696012,658919,686308,679281,368317,629516,695819,684591,671902,689839,661280,655098,692384,616695,547881,698359,688925,271308,682306,691805,542826,678706,685887,687708,475881,638780,640478,686779,688034,679157,330628,643103,696653,697051,538064,699067,647837,589728,684516,693747,686805,371864,518573,582440,680210,124892,43870,519123,689898,610807,653881,551208,155189,695245,683168,638220,615839,423218,666248,619139,635483,690512,632374,670977,682325,690983,398498,688352,694620,390533,354624,697618,609360,689512,691015,647488,639134,638082,638396,332282,168887,603046,678823,680141,91047,678017,679845,580924,637425,235514,238943,557820,684750,692171,620848,127521,696422,351764,641334,496288,676916,140627,686190,650703,684837,696091,659790,575898,74254,169620,691111,680405,606245,652591,698541,675272,689064,570901,661106,555721,680475,548345,672361,688527,643791,122450,638899,583687,247708,660131,647153,568422,685086,687398,688472,699017,464591,678801,634987,112993,616967,579598,689210,691077,694386,639420,665850,682148,696275,690634,581043,690637,681856,677881,586880,124060,677708,641303,696722,439263,639944,673721,638807,692034,679106,689271,638637,682976,657956,569662,681472,639973,692392,390761,496601,681955,685790,657793,645158,611422,697227,697840,681433,645614,401694,587235,690399,634610,488931,276214,689939,674611,639150,675314,647282,399872,638256,640565,140872,541523,685611,678341,659063,657486,286539,680327,650934,477290,643855,571927,692598,697213,683467,619285,694757,77536,254991,446608,675412,684400,644005,121227,634786,465370,677838,482431,640149,454604,329672,691149,363609,668574,686815,694222,567398,540297,685965,667179,696761,368579,692300,542990,370645,168090,688672,697283,667960,426306,679000,669127,687229,599800,640795,559531,675710,659713,696950,640166,681156,254061,689530,652975,581078,572644,680310,254253,659647,643509,696776,694414,695712,671709,569576,697694,517901,656052,685875,638627,699256,656619,156597,512803,69586,617489,345146,371382,634868,686943,638491,678320,654407,312584,115014,534691,693669,209656,679696,673993,486661,691501,658112,638557,676211,456273,617091,339027,697831,509700,518052,696617,699054,698516,685507,531919,685102,634014,654784,569574,684926,613204,478867,660191,686549,176401,480919,622230,111154,681706,553134,697566,178924,684243,579072,685604,658016,338755,630327,458476,666064,684836,565947,115057,597229,694337,674737,152267,294658]
		var is_open = false
		for(var s=0; s< openIds.length; s++){
			if(Number(openIds[s]) === Number(_pageinfo.id)){
				is_open = true
				break
			}
		}
		//#region 
		if((is_open || (!isAds && isSevenDay)) && Cookie.get("5577") != "yes" && !/iphone|ipad/i.test(navigator.userAgent)){ 
			var dateTime = new Date(_webInfo.DateTime.replace(/\//g,"-")).getTime()/1000; //转换时间戳
			// var quicklyUrl = 'http://tj.wuhanup.com/e/9/'+_webInfo.Username+'/150428?soft_id='+_pageinfo.id+'&t='+dateTime
			var quicklyUrl = `https://api.wuhanup.com/api/getUrl?channel=9416018&soft_id=${_pageinfo.id}`
			// this.addnewDownHtml(quicklyUrl)
			var downTips = '安全下载是通过360助手获取所需应用，安全绿色便捷。'
  	  var downBtnText = '安全下载'
			var downBtnTips = '需下载应用市场'
  		$(".m-down-last").html(`
			<style>
			.g-game-down .m-down-ul li{ padding:0 0 8px 0;}
				.g-game-down .m-down-ul .m-last{ padding:0;}
				.g-downtop .m-down-ul li.m-last{ margin:0}
				#downAddress{overflow:visited; padding:0 0 0 0; box-sizing:border-box}
				.info .m-down-ul .m-last{ height:auto; margin:0;}
				.topdown a:before, .topdowns a:before{ display:none}
				</style>
				<div style="width:100%; height:auto; margin:10px 0 0; display:flex; overflow:hidden">
						<a href="${address}" id="address" style="width:44%; height:42px; line-height:42px; font-size:14px; font-weight:normal; color:#6b88b3; text-align:center; border-radius:4px; background:#fff; border:1px solid #b9b9b9; display:block; overflow:hidden;box-sizing: border-box; margin-left: 0;margin-right: 0;">普通下载</a>
						<a href="${quicklyUrl}" id="quilydown" class="u-quickly-btn" style="width:auto; height:42px; line-height:normal; font-size:16px; font-weight:normal; color:#fff; text-align:center; border-radius:4px; background:#0ec760; margin:0 0 0 6px; flex:1;  display:block; overflow:hidden"><strong style="width:100%; font-size:16px; font-weight:normal; color:#fff; margin:3px 0 0; text-align:center; display:block; overflow:hidden">${downBtnText}</strong><b style="width:100%; font-size:12px; font-weight:normal; color:#b5fbd4; margin:0 0 0; text-align:center; display:block; overflow:hidden">${downBtnTips}</b></a>
			</div>
			`)
			$('#downAddress').after(`<div id="quiclyTips"
			style="width:100%; height:auto; padding:0 0 0; margin:0 0 15px; display:block; overflow:hidden; position:relative;"
			>
			<p style=" width:100%; height:auto; line-height:20px; font-size:12px; color:#888; padding:3px 10px; box-sizing:border-box; background:#f1fff7; border:1px solid #0ec760; border-radius:4px; margin:0 0 0; display:block; overflow:hidden"><strong style="font-weight:normal; color:#0ec760">说明：</strong>${downTips}</p>
			</div>`)
			
		}
		//#endregion
	},
	addnewDownHtml(quicklyUrl) {
		const downBtn = '用360助手'
		const downBtnText = '安全下载'
		const downTips = '使用360助手下载目标软件，更快速，更安全！'
		const moDowntext = '普通下载'
		$("#downAddress").html(`
			<style>
			.gsdowndiv {width: 100%;margin: auto;border: 1px solid #e7e7e7;border-bottom: 0;box-sizing: border-box;padding: 10px;height: 58px;overflow: hidden;}
			.gsdowndiv span {display: block;float: left;margin-top: 10px;width: 43%;}
			.gsdowndiv a {display: block;float: right;width: 50%;height: 36px!important;line-height: 36px!important;text-align: center;font-size: 16px;text-decoration: none;border-radius: 5px;border: 1px solid #f80;color: #f80;}
			.gsdowndiv a.hover {background: #f80;color: #fff;}
			.gdowntip {width: 100%;margin: auto;border: 1px solid #e7e7e7;border-top: 0;color: #999;line-height: 20px;box-sizing: border-box;padding: 0 10px 10px 10px;font-size: 12px;}
			.gsdowndiv span em {color: #999;font-weight: 500;float: left;font-size: 16px;}
			.gsdowndiv a.gs {background: #ff4000;color: #fff;}
			.gsdowndiv span input {float: left;margin: 5px 8px 0 0;}
			</style>
			<div>
					<div class="gsdowndiv">
					<span><label><input type="checkbox" id="godown" checked="checked" autocomplete="off"><em>${downBtn}</em></label></span>
					<a href="${quicklyUrl}" class="u-quickly-btn godowna gs " rel="nofollow" id="address">${downBtnText}</a>
					</div>
					<div class="gdowntip">${downTips}</div>
			</div>
		`)
		$(document).on('click', '#godown', function() {
			if ($(this).is(':checked')) {
				$('.godowna').attr('href', quicklyUrl).text(downBtnText).addClass('gs')

			} else {
				$('.godowna').attr('href', address).text(moDowntext).removeClass('gs');
			}
		})
		$('.u-quickly-btn').click(function(){
			setCookie("5577");
		})
	},
	downLoad :function(){
		if(_pageinfo.qihoourl && _pageinfo.qihoourl !== ''){
			$("#address").addClass("f-gotolink").append(`<span>(${_pageinfo.qihoourl})</span>`)
		}
		$("body").append('<div style="display:none"><img src="//mi.5577.com/icon_5577_'+_pageinfo.id+'.jpg" /></div>')
		var isClickDown=0; //第几次点下载地址
		
		var Assid = parseInt($("#Associate").html()); //绑定跳转
		if (Assid>0){$(".down").removeAttr("data-href");	
		$(".down").attr("href","/x/"+Assid);$(".down").html("手机版下载");return false;}
		
		this.addTags()//TAGS适配
		
		if(browser.versions.ios){//IOS设备
			ifIspc($(".g-tags-box ul li"),$(".f-game-size").text(),catearrIos.in_array(_pageinfo.categroyId),'ios');
		}else{//安卓
			ifIspc($(".g-tags-box ul li"),$(".f-game-size").text(),catearr.in_array(_pageinfo.categroyId),'android');
		}
	},
	topRecomd:function(){
		if(isIphone){ //IOS		
			var topRecomdHtml = "";
			var topRecomdSize = shangwuData.iosTopRecomd.length;	
			for(i=0;i<topRecomdSize;i++){					
				topRecomdHtml += '<li style="float:none; display:inline-block;"><a href="'+shangwuData.iosTopRecomd[i][1]+'"><img class="ico" src="'+shangwuData.iosTopRecomd[i][2]+'"><h3 class="name">'+shangwuData.iosTopRecomd[i][0]+'</h3></a></li>';
			}
			$('.g-cms-hide').after("<ul class='group' style='white-space: nowrap;overflow: auto;'>" + topRecomdHtml + "</ul>")
		}else{//安卓
			var topRecomdHtml = "";
			var topRecomdSize = shangwuData.androidTopRecomd.length;
			var recomdRandomAll = [];			
			var i = 0;
			for(y=0;y<topRecomdSize;y++){
				var recomdRandomSize = Math.floor(topRecomdSize*Math.random());
				if($.inArray(recomdRandomSize,recomdRandomAll) == -1){
					i = recomdRandomSize;
					recomdRandomAll.push(i)
					topRecomdHtml += '<li style="float:none; display:inline-block;"><a href="'+shangwuData.androidTopRecomd[i][2]+'"><img  class="ico" src="'+shangwuData.androidTopRecomd[i][3]+'"><strong class="name">'+shangwuData.androidTopRecomd[i][0]+'</strong><strong class="name">'+shangwuData.androidTopRecomd[i][1]+'</strong></a></li>'	;					
				}else{
					y--;	
				}
			}
			
			var randomAll = [];
			for(z=0;z<topRecomdSize;z++){
				var randomNum = Math.floor(topRecomdSize*Math.random());	
				if($.inArray(randomNum,randomAll) == -1){					
					randomAll.push(randomNum)			
				}else{
					z--;	
				}
			}
			var n = 0;
			var firstHtml ="";
			window.setInterval(function(){				
				var oneObj = $(".group li").eq(randomAll[n]).find("a .name:first");
				firstHtml = oneObj.html();				
				oneObj.animate({height:"0px"},800,function(){					
					$(".group li").eq(randomAll[n]).find("a .name:last").after('<h3 class="name one">'+firstHtml+'</h3>');							
					oneObj.remove();			
					if(n < topRecomdSize-1){
						n++;
					}else{
						n=0;	
					}		
				});			
			},1000);		
			$('.g-cms-hide').after("<ul class='group' style='white-space: nowrap;overflow: auto;'>" + topRecomdHtml + "</ul>")
		}
	},
	addTags:function (){ //相关版本
		for(i=0;i<forNum;i++){
			if(titleHtml.indexOf(ffTitle[i]) != -1){
				return false;	
			}
		}	
		if($(".f-game-size").length<=0){
			$(".g-gamedown div b:first em:first span").addClass("f-game-size");
		}
		if($(".f-game-size").text() == '0KB'){
			return false;	
		}
		if($(".g-tags-box").length>0){
			
			//属性不存在，并且属性!=“下架”，就执行设备判断
			if(!isXiajia){
				if (isIphone){//如果是苹果设备
					this.tagsSystemIf($(".g-tags-box .m-tags-ios"),"IOS",$(".f-game-size").text());
				}else{//如果是安卓设备
					this.tagsSystemIf($(".g-tags-box .m-tags-android"),"ANDROID",$(".f-game-size").text())
				}	
			}
			
			if($(".g-tags-box ul li").length <= 0){
				$(".g-tags-box").hide();
			}
		}
	},
	tagsSystemIf:function(tagsContObj,equipment,gameSize){
		if(tagsContObj.find("li").length>0){//判断是否有数据
			var tagsHtml = tagsContObj.html();
			tagsHtml = '<div class="g-tags-box"><ul>'+tagsHtml+'</ul></div>';	
			$(".g-tags-box").remove();//移除原内容
			$(".g-introduction-box").before(tagsHtml);//添加新内容
			var firstSystem = "";
			var firstId = "";
			var firstName = "";
			if(typeof(tagsContObj.find("li").eq(0).attr("data-size")) != "undefined"){
				for(i=0;i<tagsContObj.find("li").length;i++){
					if(tagsContObj.find("li").eq(i).attr("data-size") != "0KB" && tagsContObj.find("li").eq(i).attr("data-size") != "1KB"){
						var firstSystem = tagsContObj.find("li").eq(i).attr("data-system");
						var firstId = tagsContObj.find("li").eq(i).attr("data-id");
						var firstName = tagsContObj.find("li a p").eq(i).text();			
						break;
					}	
				}	
			}else{//为了兼容老模板
				var firstSystem = tagsContObj.find("li").eq(0).attr("data-system");
				var firstId = tagsContObj.find("li").eq(0).attr("data-id");
				var firstName = tagsContObj.find("li a p").eq(0).text();	
			}
			
			if(_pageinfo.system.toUpperCase().indexOf(equipment) == -1 && firstName != ''){//不是对应资源
				var tagstyle = '<style>.m-tisp1{height:22px;line-height:22px;text-align:center;color:#666;font-size:14px;padding-top:3px}.m-tisp1 strong{font-weight:bold;color:#9b0;padding:0 2px}.m-tisp2{line-height:22px;text-align:left;color:#333;font-size:14px;text-align:center}.m-tisp2 span{color:#f40}</style>';
				$('head').append(tagstyle);
				
				if(_pageinfo.system.toUpperCase() == 'IOS'){//资源为IOS
					$("#downAddress").after('<p class="m-tisp1">该软件为苹果资源，没有<strong>安卓</strong>版</p><p class="m-tisp2">该地址下载的是：<span>'+firstName+'</span></p>');
					
				}else if(_pageinfo.system.toUpperCase() == 'ANDROID'){//资源为安卓
					$("#downAddress").after('<p class="m-tisp1">该软件为安卓资源，没有<strong>苹果</strong>版</p><p class="m-tisp2">该地址下载的是：<span>'+firstName+'</span></p>');	
					
				}else{//PC资源
					if(equipment == "IOS"){

						$("#downAddress").after('<p class="m-tisp1">该软件为PC资源，没有<strong>苹果</strong>版</p><p class="m-tisp2">该地址下载的是：<span>'+firstName+'</span></p>');		
					}else{
						$("#downAddress").after('<p class="m-tisp1">该软件为PC资源，没有<strong>安卓</strong>版</p><p class="m-tisp2">该地址下载的是：<span>'+firstName+'</span></p>');		
					}
					
				}
				$("#downAddress li a").attr("href","/down.asp?id="+firstId).attr("data-add","add");	
			}
			
		}else{
			$(".g-tags-box").remove();	
		}	
	},
   
}
// $(".g-tags-box ul li"),$(".f-game-size").text(),catearrIos.in_array(_pageinfo.categroyId),'ios'
function ifIspc(liObj,gameSize,isSystem,equipment){
	//属性存在，并且是“下架”
	if(isXiajia){
		return false;
	}
	var firstName = "";
	console.log($(".g-tags-box ul li").length);
	
	if(typeof(liObj.eq(0).attr("data-size")) != "undefined"){//针对没生成页面
		if(liObj.length > 0){
			for(i=0;i<liObj.length;i++){
				if(liObj.eq(i).attr("data-size") != "0KB" && liObj.eq(i).attr("data-size") != "1KB"){
					firstName = liObj.eq(i).text();
					break;
				}else{
				}
			}	
		}	
	}else{
		firstName = liObj.eq(0).text();
	}
	
	var downNoLink = $("#address").attr("href");	
	if(downNoLink == ''){
		$('#address').attr({"href":"javascript:;","ispc":true}).text('该资源已下架').css({"background":"#999"})
	}

	if(firstName == "" || gameSize == "0KB"|| gameSize == "1KB"){//没有tags
		if(downNoLink == 'http://m.5577.com' || downNoLink == 'https://m.5577.com' ){//没下载的
			if(isSystem){//对应系统资源
				$('#address').attr({"href":"javascript:;","ispc":true}).text('立即预约').addClass('m-yuyueok');
				var qqun = '//shang.qq.com/wpa/qunwpa?idkey=13658e73adc30c5829312343d94e04ed12ee048f8d98020edb980daedc7b233b';
				var weixinname = ''
				yuyue(qqun,weixinname)				
				
			}
		}	
		
		if(!isSystem){//不是对应设备的资源
			if(equipment == "android"){
				$('#address').attr({"href":"javascript:;","ispc":true}).css({"background":"#a0a0a0"}).text("该软件没有对应安卓版");
			}else{
				$('#address').attr({"href":"javascript:;","ispc":true}).css({"background":"#a0a0a0"}).text("该软件没有对应苹果版");
			}		
		}else{
			$('#address').attr('issw',true);//匹配资源
		}	
	}
		
}

function yuyue(qqun,weixinname){				
		//添加预约信息
		var yuyuecss = '<style>.g-yuyuebg {z-index:+100;background:#000;filter:alpha(opacity=50);-moz-opacity:.5;-khtml-opacity:.5;opacity:.5;position:fixed;left:0;top:0;width:100%;height:100%}.g-yuyue{width: 90%;	position: fixed;	left: 5%;		top: 50%;	margin-top: -155px;	z-index: +101;	background: #fff;	border-radius: 10px;	overflow: hidden}.m-yytit {	background: #66d105;	font: 18px/45px microsoft yahei;	color: #fff;	padding: 0 5px 0 15px;	margin-bottom:15px;}.m-yytit span {	float: right;	font-size: 35px;	cursor: pointer; padding:0 5px;line-height:40px}.m-yyinfo { margin-bottom: 15px; text-align: center}.m-yyinfo span{ display: inline-block; width: 80px; text-align: right; font-size: 16px; padding-left: 30px; }.m-yyinfo input {border: #ccc 1px solid;     margin:0 0 0 0;    padding: 0 10px;    font: 14px/34px microsoft yahei;    border-radius: 3px; width: 80%; margin:0 auto;}.m-yyinfo input:focus {	border: #66d105 1px solid}.m-yuyuenum { padding:0 10px; text-align: center;font-size: 14px; margin-bottom:10px; }.m-yuyuenum span { font-weight: bold; color:#f40}.m-yyqdbtn {border-top: 1px solid #e5e5e5; text-align: center; line-height: 70px;}.m-yyqdbtn a {    padding: 12px 40px;    line-height: 20px;    border-radius: 5px; background-color: #66d105; color:#fff; margin:0 10px; font-size: 16px;}.m-yyqdbtn a:hover { background-color: #1b91c8 }.g-yuyue,.g-yuyuebg {display: none}.m-qqweixin {margin-bottom: 10px;text-align: center;}.m-qqweixin a{display: inline-block;padding:4px 15px 8px 10px; text-align: center; margin: 0 10px;background-color: #20aef0; color:#fff; text-decoration: none; border-radius: 5px;position: relative; font-size:14px;}.m-qqweixin a:hover { background-color: #20aecc}.m-qqweixin a span { display: inline-block; width: 20px; height: 20px; background-color: #f00; position: relative;top: 4px; margin-right: 5px }.m-qqweixin a.m-yyqq span { background:url(https://www.cr173.com/images/yyqq.png) 3px 0 ;background-size: 17px; background-repeat: no-repeat; top: 5px}.m-qqweixin a.m-yyweixin { background-color: #50b674 }.m-qqweixin a.m-yyweixin span { background:url(yyweixin.png);background-size: 20px; }.m-qqweixin a.m-yyweixin i{display: none;}.m-qqweixin a.m-yyweixin:hover i{display: block;}.m-qqweixin a.m-yyweixin i{width: 120px;position: absolute;left:-10px;}.m-qqweixin a.m-yyweixin i img{width: 100%;}</style>';
		$('head').append(yuyuecss);
		var yuyuediv = '<div class="g-yuyue" data-click="0"><div class="m-yytit">请输入您的预约信息：<span class="f-fr f-yyclose">×</span></div><div class="m-yyinfo"><span></span><input type="text" id="f-yyPhone" placeholder="输入手机号码" maxlength="11" autocomplete="off"></div><div class="m-yuyuenum">预约后可及时接受<span>活动，礼包，开测和开放下载</span>的提醒</div><div class="m-qqweixin clearfix" ><p><a target="_blank" href="'+qqun+'" class="m-yyqq"><span></span>加入预约QQ群</a></p></div><div class="m-yyqdbtn"><a href="javascript:;" class="m-yybtn f-yybtn">预约</a><a href="javascript:;" class="m-yycl f-yyclose">关闭</a></div></div><div class="g-yuyuebg f-yyclose"></div>';
		$('body').append(yuyuediv);
		$('.m-yuyueok').click(function(){// 打开
			var yyclinum = $('.g-yuyue').attr('data-click');
			if (yyclinum != 0) {
				alert('您已经预约过拉')
			}else{
				$('.g-yuyue,.g-yuyuebg').fadeIn();
			}
			
		});
		$('.f-yyclose').click(function(){// 关闭
			$('.g-yuyue,.g-yuyuebg').hide();
		});
		$('.f-yybtn').click(function(){// 提交

			var iputxt = ''
			$('.g-yuyue input').each(function(){
				iputxt += $(this).val();
			})
			
			if (iputxt == '') {// 为空
				alert('手机号不能为空')
				return false; 
			}
			var yyphone = $('#f-yyPhone').val();
			var yyqq = $('#f-QQ').val();
        	var phonereg = /^1[\d]{10}$/; // 手机号段设置
        	if (yyphone != '') {
        		if(!phonereg.test(yyphone)){
	            	alert('请输入有效的手机号！');            
	            	return false;
	        	}
        	}
        	// 手机号验证结束
        	$('.g-yuyue').attr('data-click',1);
        	$('.m-yuyueok').text('成功预约')
			alert('预约成功');     
        	$('.g-yuyue,.g-yuyuebg').hide();
        	var yuyuephome = $('#f-yyPhone').val();

			$.getJSON("http://www.5577.com/ajax.asp?action=34&id="+_pageinfo.id+"&phone="+yuyuephome+"&callback=?", function(data){                
                
            });

		});
}


function cityIf(){
	$.ajax({
		async : true,
		url : "https://ip.useragentinfo.com/json",
		type : "get",
		dataType : "json", 
		jsonp : 'callback', 
		callback: 'ipCallback', 
		data : {}, 
		success: function(diqu){
			var city = diqu.city;
			var province = diqu.province;

			var webtitle = document.title;
        var prOvie = ["广东","广东省"];//

        if (webtitle.indexOf("海王捕鱼") != -1) {

          if($.inArray(province, prOvie) != -1){//在区域内
            $('body').empty().append('<div style="  line-height:500px; padding:20px;  margin:20px auto; font-size:42px; font-weight:bold; display:block; overflow:hidden;text-align:center;">\u8be5\u8d44\u6e90\u5df2\u4e0b\u67b6</div>');
            
          }

        }


			
		}				
	});		
}

var replacename = "h1,#m-cont,.m-down-ul";
var hidediv = ".m-game-img,#g-down-gameprevimg,.g-peo-like,#g-keyword,.g-hot,#g-game-hot,.g-key-ohter,.g-recomd,#g-game-ph,.g-cms-wonderful,.g-key-game,.g-cms-hide";
function cityfunction(result){
	var province = result.address.split('|')[1]
	var city = result.address.split('|')[2]
	
	if(_pageinfo.softrank != 'undefined' && _pageinfo.softrank == 1){
		if(city == "北京" || city == "上海" || city == "武汉" || city == "广州"){			
			isXiajia = true;
			var softrank = _pageinfo.softrank; //软件等级
			var replacename = replacename;	 //要替换的目标
			var hidediv = hidediv; //要影藏的目标
			if(softrank == "1"){
				replaceCont(replacename); //替换
				hideDiv(hidediv); //影藏
			}
			//替换内容
			function replaceCont(data){
				var replaceArray = data.split(',');
				$("title").text('QQ欢乐斗地主手机客户端')
				$(replaceArray[0]).text('QQ欢乐斗地主手机客户端')
				$(replaceArray[1]).html('<p>QQ欢乐斗地主是由QQ游戏原班团队打造的Android手机平台的一款在线棋牌游戏，可以使用手机客户端直接访问QQ欢乐斗地主游戏，然后与大家一起博弈。</p><h3>【游戏特色】</h3><p><span style="color: rgb(0, 0, 0);">1、游戏的画面质感优秀；</span></p><p><span style="color: rgb(0, 0, 0);">2、游戏支持癞子玩法和其他玩法；</span></p><p><span style="color: rgb(0, 0, 0);">3、增加各种游戏任务；</span></p><p><span style="color: rgb(0, 0, 0);">4、拥有抢地主，明牌，加倍等多种玩法，更添游戏乐趣！</span></p><p><span style="color: rgb(0, 0, 0);">5、丰富的游戏配音；</span></p><h3>【操作玩法】</h3><p><span style="color: rgb(0, 102, 0);">1、登录QQ号后就可以选择不同的玩法开始游戏啦；<br/></span><span style="color: rgb(0, 102, 0);">2、游戏规则和其它斗地主游戏类似，不过游戏中加入了癞子等等特色玩法， 让游戏变的更加的有趣！</span></p><h3>【特别说明】</h3><p><span style="color: rgb(51, 51, 51);"><span style="color: rgb(204, 0, 0);">QQ官方游戏，需要欢乐豆作为货币来进行比赛，没豆子当然就玩不了啦。<br/></span></span></p>').css("height","auto");
				$(replaceArray[2]).html('<li style="width:100%; height:32px; line-height:32px; font-size:15px; font-weight:normal; color:#fff; background:#888; text-align:center;padding:0; float:none;display:block; overflow:hidden">该资源已下架</li>')
				
			}
			
			//影藏内容
			function hideDiv(data){
				var hideArray = data.split(',');
				for(var i=0;i<hideArray.length;i++){
					$(hideArray[i]).hide();
				}
			}
		}
	}	
	
	if(browser.versions.ios){//IOS设备
		
	}else{//安卓
		var RefUrl =document.referrer;
		var showAdsRef = ["sogou.com","m.sm.cn"];
		var isSearch = showAdsRef.in_mid(RefUrl);
		var softId = _pageinfo.id; //资源ID
		var qdbUrl = "http://sp.ulxue.com/5577/"+softId+"/32";
				
		var swId = [526091,525364,163909,511245,272182,209175,469735,526231]; //针对性ID
		var isSw = 0; //是否为指定商务ID
		//判断是否为指定商务ID
		for(var ss = 0; ss<swId.length;ss++){
			if(swId[ss] == softId){
				isSw = 1;	
			}
		}
		
		var gameRootId = [2,4]; //游戏栏目ID
		var isGame = 0;
		//判断是否为游戏栏目
		for(var ii = 0; ii<gameRootId.length;ii++){
			if(gameRootId[ii] == _pageinfo.rootId){
				isGame = 1;	
			}
		}
		/*
		if(city != "北京" && isSearch){
			console.log("进入")
			var clickNumb = 0;	//记录点击
			console.log('cook：',Cookie.get("click1"));
			if(isSw == 1){
				$(".g-gamedown-btn").css({"background":"#fbfbfb","color":"#888"}).text('普通下载');
				$(".g-gamedown-btn").parents(".m-down-ul").prepend('<li class="m-down-last"><a href="'+qdbUrl+'" style="width:100%; height:32px; line-height:32px; font-size:15px; font-weight:normal; color:#fff; text-align:center; background:#ff4000; border-radius:6px; margin:0; font-family:"microsoft yahei"; display:block; overflow:hidden;">高速下载</a> </li>')	
			}else if(!isAds && Cookie.get("click1") != "one"){
				$("#address").click(function(){
					if(clickNumb == 0){
						if(isGame == 1){ //是游戏
							clickNumb++;	
							window.open(qdbUrl); //下载盒子
							setCookie("click1");
						}else{
							clickNumb++;	
							window.open("http://tj.awdudes.com/0009/21202"); //下载360
							setCookie("click1");
						}
						return false
					}
				});
			}
			
			function setCookie(click1){
				var Days = 2;
				var exp = new Date();
				exp.setTime(exp.getTime() + Days*24*60*60*1000);
				document.cookie = click1 + "="+ "one" + ";expires=" + exp.toGMTString();
			}
		}
		*/
	}		
	otherMgcJump(city);//新增敏感词跳转	
}

function otherMgcJump(city){		
	if(typeof(_pageinfo) != "undefined"){
		if(_pageinfo.path == "down"){		
		
			//彩票敏感词
			var caipiaoMgc = ['彩票','时时彩','福彩','体彩','双色球','购彩','足彩','六合彩'];
			var caipiaoMgcUrl = ['com.qqgame.hlddz123.apk']
			var isCp = 0;
			
			if(_pageinfo.categroyId == 76){
				isCp++;	
			}else{
				var contHtml = $("#m-cont").text().replace(/\s+/g,'');
				for(s=0;s<caipiaoMgc.length;s++){
					if(contHtml.indexOf(caipiaoMgc[s]) != -1){						
						isCp++;	
						break;
					}
				}
				if(isCp == 0){
					for(var yy = 0;yy<caipiaoMgcUrl.length;yy++){
						if($("#address").attr('href') && $("#address").attr('href').indexOf(caipiaoMgcUrl[yy]) != -1){			
							isCp++;		
							break;
						}			
					}		
				}
			}
			if(isCp > 0){
				//执行影藏版块的函数				
				var hideBox = '.g-recomd,.g-tags-box,#g-keyword,.m-game-scroll,.g-key-ohter,.g-cms-strategy,.g-key-game,.f-moreadd,.g-peo-like';
				mgcBoxHide(hideBox); //执行影藏版块的函数
				
				//替换内容
				var noDownBtnHtml = '<b style="width: 100%; height: 34px; line-height:34px; background:#a0a0a0; border-radius:6px; font-size:16px; font-weight:normal; color:#fff; text-align:center; margin: 10px 0 0; display: block;  overflow:hidden; cursor:pointer">该应用已下架</b>'; //下载按钮html
				var replaceArray = [
					{div:".m-down-last",html:noDownBtnHtml}
					
				]
				mgcBoxHtml(replaceArray); //执行替换内容的函数
				
				$(".g-gamedown div b:eq(1) em:first a").attr("href","javascript:;")
				return false;
			}
				
			//直播敏感词
			for(i=0; i<cityArray.length;i++){//查城市
				if(city.indexOf(cityArray[i]) != -1){//在指定城市
					for(o=0;o<forNum;o++){//查敏感词
						if(titleHtml.indexOf(ffTitle[o]) != -1){//包含敏感词
							$("title").html(replaceCont[0]);
							$("h1").html(replaceCont[1]);
							
							$(".m-game-img").attr({"src":replaceCont[2]});
							
							//获取多张预览图
							var previmgSize = replaceCont[3].length;
							var previmgHtml = "";
							for(s=0;s<previmgSize;s++){
								previmgHtml += '<li><img src="'+replaceCont[3][s]+'" /></li>';
							}
							$("#g-down-gameprevimg").html('<ul class="g-previmg-ul">'+previmgHtml+'</ul>');
							
							
							$("#m-cont").html(replaceCont[4]);
							
							
							$(".m-down-ul li").each(function(){
								$(this).find("a").attr("href",replaceCont[5])
							})
							var titletext = $("title").text().replace(/下载/g,"");
							$("title").text(titletext)
							$(".g-peo-like").remove();
						}
					}								
				}	
			};	
			
			//敏感下载地址
			var qpmgcUrl = ['com.qqgame.hlddz001.apk']
			var bymgcUrl = ['com.qqgame.hlddz001.apk']
			var isQpCity = 0;
			var qpEndFor = 0;
			for(i=0; i<urlmgCity.length;i++){//查城市
				if(city.indexOf(urlmgCity[i]) != -1){//在指定城市
					$("#address").each(function(){
						var downLink = $(this).attr("href");
						for(var m=0;m<qpmgcUrl.length;m++){
							if(downLink.indexOf(qpmgcUrl[m]) != -1){//棋牌
								qpmgcReplace(qpmgcdata)
								isQpCity++;
								qpEndFor++
								break;
							}else if(downLink.indexOf(bymgcUrl[m]) != -1){//捕鱼
								qpmgcReplace(bymgcdata)
								isQpCity++;
								qpEndFor++
								break;
							}
						}
					})
				}
				if(qpEndFor > 0){break}
			};	
			if(isQpCity == 0){
				$("#address").each(function(){
					var downLink = $(this).attr("href");
					for(var m=0;m<qpmgcUrl.length;m++){
						if(downLink.indexOf(qpmgcUrl[m]) != -1){//棋牌
							$(this).attr("href","javascript:;").text("暂无下载").css({"background":"#a0a0a0"});
						}else if(downLink.indexOf(bymgcUrl[m]) != -1){//捕鱼
							$(this).attr("href","javascript:;").text("暂无下载").css({"background":"#a0a0a0"});
						}
					}
				})	
			}
			
			
			
			//主词+副词屏蔽
			if($.inArray(city,cityAll) != -1){
				var openMgc = 0;
				var jumpUrl = "";
				var htmlTitle = $("title").text().toLowerCase();
				var mgcAll = [
					//第一个屏蔽
					[["穿越火线","枪战王者","cf"],
					["辅助","外挂","钻石","金币","破解","修改","刷枪","透视","作弊","点券","礼包","美化","自瞄","准心","助手","无敌"],
					["穿越火线:枪战王者官方版下载|cf:枪战王者腾讯手游下载_5577安卓网下载","http://pic.wk2.com/up/2015-9/2015921142347.png","穿越火线:枪战王者","http://tj.awdudes.com/0009/1730","官方版","射击","733.04M","中文","2016-03-16","http://www.5577.com/skin/library/images/star4.png","http://cfm.qq.com/main.shtml","<img src='http://pic.wk2.com/up/2015-9/2015921142237219310.jpg'>,<img src='http://pic.wk2.com/up/2015-9/2015921142237108200.jpg'>,<img src='http://pic.wk2.com/up/2015-9/2015921142238542640.jpg'>","<p><span style='line-height: 12px;'>穿越火线:枪战王者</span>穿越火线:枪战王者是一款完美移植PC端的品质和玩法的手机射击游戏！游戏以多种视角模式切换，开启了剧情闯关、个人竞技、团队竞技等多种游戏模式体验，独特射击游戏玩法，通过手机平台享受CF带给你的枪战乐趣和快感！喜欢的玩家加入游戏和好用一起对战吧！ </p><h3>【荒岛特训版本更新内容】</h3><p>1、全新地图—绿地：</p><p>- 新增面积达6000*6000平米的120人的超大场景，地形植被树木全面升级，海量特色区域还原逼真生存体验；</p><p>- 新增海岛区域，提供海上战斗体验；</p><p>- 新增天气系统，每次进入特训都有机会遇到更为刺激的雾天提升特训；</p><p>- 优化升级场景建筑结构，跳窗、通行及内部空间优化带来了更高的自由度；</p><p>- 增加随机轰炸区，提供多样的随机体验；</p><p>2、全新载具：</p><p>- 新增载具：吉普车（四人），冲锋艇（四人），重型摩托（双人）；</p><p>- 新增载具射击功能：吉普车，冲锋艇可以站立后自由射击；</p><p>- 新增载具乘客可击落功能：除装甲车外，所有载具内乘客可被武器直接命中；</p><p>- 新增载具内换座功能，乘客可快速切换座位；</p><p>- 载具物理手感全面升级，悬挂系统更加稳定，车身姿态更加真实，驾驶体验重磅升级；</p><p>- 车辆会在水中熄火，更加真实模拟载具特性；</p><p>3、全新武器配件系统：新增荒岛模式可加装配件武器，可以在游戏内收集武器、配件，进行武器升级。</p><h3>【荒岛特训攻略】</h3><p>1、开局降落位置是关键</p><p>模式中的地图有400万平方米之广，而想要比别人赢在起跑线上，清楚自己的定位选好降落位置就是关键了，大家都知道多人在线竞技开黑手游要想赢不是你杀了多少人，而是你要活到最后才能取得胜利，所以看到城镇区不要光想到下面有着远优于其他地方的资源，也要清楚僧多粥少城镇区的竞争势必激烈，就算你的技术不错但是明枪易躲暗箭难防，要想赢开局就应该降落在资源相对比较少的地方猥琐发育，等城镇区的“高手”们竞争的差不多了，你来个螳螂捕蝉黄雀在后，一波发家致富岂不是美滋滋。</p><p style='text-align:center;'><img src='http://pic.wk2.com/up/2018-1/2018011211421716087.jpg'/></p><p>2、选择适合的武器装备</p><p>首先开局任何枪都不能放过，保证自己第一时间做到手里有枪、心中不慌，不要在刚刚开局就挑三拣四，不然还没有等你挑出来你就会被打成筛子，渡过刚开始的危险期后面有的是机会让你慢慢挑，活着才能赢所以头盔、防弹衣、药品都是必不可少的，背包和弹药也是必不可少的，而各种投掷类道具应该是在有空余时间时才去捡，因为这些道具一般萌新是用不上的不像其他道具那样不可或缺，反正我觉得要想获得胜利在最后的安全区时至少要有:两把长枪每把枪子弹要有100发以上，头盔和防弹衣至少要在2级，药品要有15个以上，这些都是决战必不可少的。</p><p style='text-align:center;'><img src='http://pic.wk2.com/up/2018-1/2018011211421496836.jpg'/></p><p>3、学会成为荒岛老司机</p><p>模式中有三种载具可供玩家选择下面我将一一列举他们各自的优缺点。</p><p>装甲车:这辆车的血量是全地图的最高的足足有1500，它可以给你带来最安全的保护，缺点是油耗也是最高的，而且比起其他车来速度也慢一些。</p><p>跑车:血量也不低有1400的血量，敌人想要击毁也是需要花不少的心思的，它最大的优点就是速度快，油耗也相对比较低，缺点除了血量比装甲车低以外由于速度太快不好操控，如果你不是老司机一定不要盲目飚车，搞不好就会来一个车毁人亡。</p><p>自行车:这车是没有血量的，也就是说不会给你带来任何保护，但它的好处也不少它不像别的车一样需要加油，只要你还活着就可以骑着它想去哪就去哪，而且它面积小无噪音不像其他两辆车一个不小心就会成为靶子，所以千万不要看不起自行车，有些时候它是有奇效的。</p><p>除了自行车另外的两辆车都是可以撞人的，如果你枪法不够好你也可以凭借着老司机的车技来淘汰对手获得胜利，自行车一般停放在城镇内，而另外两辆车则可以在城镇的外围和路边找到。</p><p style='text-align:center;'><img src='http://pic.wk2.com/up/2018-1/2018011211421468267.jpg'/></p><p>4、用头脑取得胜利</p><p>这个模式除了运气和技术还一定要有冷静的头脑，我在这里向大家介绍一下几个很有用的套路。</p><p>击败敌人后不要急着舔包，你可以趴在包附近伪装成一具尸体，等到敌人靠近后抬手就是一喷子绝对可以一击必杀。</p><p>进入房子后不要急着搜资源，一楼的资源千万不要动，给敌人营造一种这没人来过的假象让他放松警惕，你埋伏在二楼，等到敌人上来后你就可以一阵突突，不信他死不了。</p><p>除了我说的套路外在游戏中一定要多思考，结合实际情况开发出属于自己的套路。</p><h3>【荒岛特训120人攻略】</h3><p>一.120人新地图随着人数的增多，地图也随之增大、复杂。要想在120人中脱颖而出，难上加难。所以如何利用地图是很重要的一点，除了利用地图的掩体、房区、障碍物埋伏之外还可以利用地图“钓鱼”。现在玩家都很聪明了放个三倍镜、四倍镜几乎没人直接去捡了，那98K呢?新版本增加了98k的存在，每一个玩家都梦寐以求的好枪，吸引力极大。小编亲身试验过，每次小编捡到98k都把98k扔掉，自己找地方埋伏起来。每次都会有傻孩子去捡，这也算是一个小套路了。</p><p>二.新地图因为天气系统的推出，增加了很多不确定因素。那我们该如何应对天气系统呢?很简单，伏地魔和幻影坦克。晴天还好，正面刚都行。但是阴天、雨天可视度低，正面对枪有一定的运气成分在里面，对于枪法好的大神来说这是十分不愿意见到的情况。这时就该伏地魔或幻影坦克了，利用较低可视度做到更好的隐藏自己不被敌人发现。也可以寻找掩体、障碍物伏击，效果小编认为没有伏地魔和幻影坦克好。可视度低的情况下一定不要盲目的乱走，要知道你身边可能随时有敌人在寻求致命一击。细心，细心，再细心;观察，观察，再观察。</p><p style='text-align:center;'><img src='http://pic.wk2.com/up/2018-1/2018011211431676104.jpg'/></p><p style='text-align:center;'><img src='http://pic.wk2.com/up/2018-1/2018011211431762592.jpg'/></p><p>三.120人新地图十分讲究团队协作。新版本推出的三大载具都十分有利于团队合作。汽艇和越野车都有高载人，可载四人。而且都有进功能力，在满载的情况下火力十分强悍。这时在团队合作的情况下找到了汽艇或者越野车，就十分强势了。而且120人新地图人数众多仅靠一人吃鸡成功难于上青天，所以必须要有良好的协作性。</p><p style='text-align:center;'><img src='http://pic.wk2.com/up/2018-1/2018011211431777950.jpg'/></p><p>四.120人新地图要猥琐，别浪。这个游戏你永远都不知道你会遇见什么。你也许会在正常行进中遇到一发冷枪;你也许会在和别人对枪时被路人甲打死，总言而之这个游戏充满了意外。所以永远都不要觉得自己很厉害放松警惕，这个游戏不存在大神菜鸟。阴沟翻船的例子比比皆是，倒霉的人数不胜数。</p><p style='text-align:center;'><img src='http://pic.wk2.com/up/2018-1/2018011211431794512.jpg'/></p><p>不畏缩都会有如此多的意外，那你浪玩岂不是给别人送人头?捡装备的时候一定要注意附近有没有“钓鱼”的人，行进过程中一定要对周围动向做到了如指掌。特别是现在增加了轰炸区，逼迫玩家移动。遭遇甚至背后冷枪频繁发生，在这里小编郑重其事的对广大玩家朋友说一句“猥琐发育，别浪”。</p><p style='text-align:center;'><img src='http://pic.wk2.com/up/2018-1/2018011211431725741.jpg'/></p><p>120人新地图相对于60人旧地图，虽然人数只是增加了一倍，但是“吃鸡”难度增加了何止一倍。要想在大地图“吃鸡”成功，除了实力思路是必须要清晰的。</p>"]],
					
					//第二个屏蔽
					[["王者荣耀"],["辅助","外挂","金币","点卷","点券","钻石","盒子","美化","皮肤","助手","礼包","工具","插件","破解","修改","生成器"],["王者荣耀官方版下载|王者荣耀腾讯手游下载_5577安卓网下载","http://pic.wk2.com/up/2016-10/20161011161453367.png","王者荣耀","http://tj.awdudes.com/0009/6304","官方版","体育竞技","255.6M","中文","2016-03-16","http://www.5577.com/skin/library/images/star4.png","http://pvp.qq.com/","<img src='http://pic.wk2.com/up/2017-6/2017612151532229320.jpg'>,<img src='http://pic.wk2.com/up/2017-6/2017612151534320420.jpg'>,<img src='http://pic.wk2.com/up/2017-6/2017612151540007100.jpg'>","<p><span style='line-height: 12px;'>王者荣耀</span>《王者荣耀》由腾讯精心打造全新LOL竞技类手游！游戏开启5V5英雄公平对战，打造手机平台最刺激好玩的竞技类网游！多种游戏模式体验，五人开黑让你在手机平台体验竞技游戏的乐趣！那么你也来体验吧！</p><h3>【游戏特色】</h3><p>1、5v5！越塔强杀！超神！</p><p>5V5经典地图，三路推塔，呈现最原汁原味的对战体验。英雄策略搭配，组建最强阵容，默契配合极限666！</p><p>2、随时开团！10分钟爽一把！</p><p>最适合手机的MOBA游戏，10分钟享受极致竞技体验。打野迂回，手脑配合，一战到底！人多，速来！</p><p>3、公平竞技！好玩不坑拼实力！</p><p>凭实力carry全场，靠技术决定胜负。不做养成，不设体力，还你最初的游戏乐趣！</p><p>4、指尖超神！风骚走位秀操作！</p><p>微操改变战局！手速流？意识流？看我风骚走位，力压群雄，打出钻石操作！收割，连杀超神！</p><p>5、手机开黑！跨服匹配就是干！</p><p>掌上竞技，随时开黑，一次玩个痛快！亿万玩家同时匹配，跨区实战酣畅淋漓，争夺王者宝座！</p><h3>【王者荣耀英雄技能大全】</h3><p><strong>赵云</strong></p><p>龙鸣</p><p>被动：每损失一定最大生命值获得额外免伤效果</p><p>破云之龙</p><p>赵云快速刺出龙枪，对前方范围内敌人造成高额物理伤害</p><p>惊雷之龙</p><p>赵云执枪冲锋陷阵，对前方直线路径敌人造成物理伤害</p><p>天翔之龙</p><p>赵云跃向空中，向地面目标发动雷霆一击，对范围内敌人造成物理伤害并将其短暂击飞</p><p><strong>狄仁杰</strong></p><p>王朝密令</p><p>被动：第三次普通攻击将会附带一枚随机的额外令牌（警戒令，搜查令或逮捕令）</p><p>警戒令</p><p>狄仁杰扔出一枚红色警戒令，对目标及范围内的敌人造成法术伤害与减速</p><p>搜查令</p><p>狄仁杰扔出一枚金色搜查令，对目标造成法术伤害与晕眩</p><p>逮捕令</p><p>狄仁杰迅速甩出六道逮捕密令，对命中的敌人造成法术伤害</p><p><strong>武则天</strong></p><p>天命之女</p><p>被动：释放任意两个技能会强化3秒内的下一次【女帝辉光】并清除当前【女帝辉光】的冷却时间</p><p>女帝辉光</p><p>武则天向指定方向释放能量法球，碰到敌人后爆开，对范围内的敌人造成法术伤害</p><p>女帝威严</p><p>武则天的威严不可侵犯，击退身边靠近她的敌人并对他们造成法术伤害</p><p>生杀予夺</p><p>武则天以女帝权威施行制裁，在所有敌方英雄脚下召唤法阵并引爆，对范围内敌人造成法术伤害和晕眩</p><p><strong>韩信</strong></p><p>杀意之枪</p><p>被动：第四次普通攻击将会挑飞目标，释放技能会获得短暂的攻击速度加成</p><p>无情冲锋</p><p>韩信持枪冲锋后挑飞目标，对其造成物理伤害，这个技能释放后的5秒内可以再次使用</p><p>背水一战</p><p>韩信向后跳跃，并使3秒内的下一次普通攻击变为横扫，造成高额物理伤害</p><p>国士无双</p><p>韩信长枪乱舞，对范围内敌人造成多段物理伤害，最后一次伤害会击飞目标</p><p><strong>小乔</strong></p><p>治愈微笑</p><p>被动：释放技能命中敌人时，短时间内提升自身移动速度。</p><p>绽放之舞</p><p>小乔扔出一把回旋飞行的扇子，对触碰的敌人造成法术伤害</p><p>甜蜜恋风</p><p>小乔在敌人脚下召唤出恋之旋风，对敌人造成法术伤害并击飞</p><p>星华缭乱</p><p>用爱心召唤流星，不断打击附近的敌人造成法术伤害，每个敌人最多承受3次攻击，持续5秒</p><p><strong>荆轲</strong></p><p>死吻</p><p>被动：击杀或助攻将会刷新所有技能的冷却时间</p><p>血舞</p><p>荆轲扔出一圈飞刀，对附近敌人造成物理伤害，并降低其移动速度，持续2秒</p><p>刺客信条</p><p>荆轲朝指定方向发出强力的穿透攻击，对路劲上敌人造成高额伤害并提升自身攻击速度，持续3秒</p><p>影杀</p><p>荆轲神速闪现至附近生命值最低的敌人身后（优先英雄），并发起一次强力刺杀，造成物理伤害</p><p><strong>嬴政</strong></p><p>王者审判</p><p>被动：普通攻击附带穿透效果，但会有一定的冷却时间</p><p>王者惩戒</p><p>嬴政召唤黄金剑阵，每0.25秒对范围内的敌人造成法术伤害，并降低他们的移动速度</p><p>王者守御</p><p>嬴政开启王之护盾，持续时间内增加自身法术强度和移动速度。被动：嬴政连续10秒内没有受到伤害会自动为自己添加护盾</p><p>至尊王权</p><p>嬴政展示王者权力，号令飞剑持续对前方敌人造成法术伤害，该技能对野怪造成伤害降低25%</p><p><strong>老夫子</strong></p><p>师道尊严</p><p>被动：普通攻击会短暂提高自身攻击速度</p><p>圣人训诫</p><p>老夫子训诫学生，跳向目标挥杖对范围内的敌人造成物理伤害</p><p>举一反三</p><p>老夫子展示自创气功。旋转拐杖，加速并免疫物理伤害，在效果结束时对范围内的敌人造成法术伤害并晕眩</p><p>圣人之威</p><p>老夫子展现圣人威严，提高自身双抗与攻击速度</p><p><strong>达摩</strong></p><p>真言·心经</p><p>被动：释放真言·普渡会刷新真言·无相的冷却时间</p><p>真言·无相</p><p>达摩往前冲刺挥出强力冲拳，对路径上的敌人造成物理伤害</p><p>真言·明王</p><p>达摩重拳轰打地面对附近敌人造成物理伤害，并附带减速与破甲效果。</p><p>真言·普渡</p><p>达摩使出一记强力回旋踢，击飞面前的敌人并造成高额物理伤害</p><p><strong>项羽</strong></p><p>陷阵之志</p><p>被动：造成伤害或受到伤害都会增加移动速度，持续一段时间。最多可叠加5层</p><p>霸王斩</p><p>项羽向前猛烈劈下，挥出强烈剑气对命中的敌人造成物理伤害和减速</p><p>回旋打击</p><p>项羽转身以巨刃(微博)回旋扫过，对范围内的敌人造成高额物理伤害</p><p>破釜沉舟</p><p>项羽发出破釜沉舟的咆哮，造成高额物理伤害并晕眩前方范围内的敌人</p><p><strong>白起</strong></p><p>反击之镰</p><p>被动：受到伤害有几率旋转反击，对周围的目标造成物理伤害</p><p>血之回响</p><p>白起回旋大镰血洗四方，对范围内的敌人造成物理伤害</p><p>死神之镰</p><p>白起挥出长镰，造成物理伤害并将面前的敌人拉回到身前</p><p>傲慢嘲讽</p><p>白起嘲讽范围内的敌军，持续2秒</p><p><strong>程咬金</strong></p><p>舍生忘死</p><p>被动：每损失一定最大生命值获得额外攻击速度效果</p><p>爆裂双斧</p><p>程咬金猛力一跃并挥动双斧斩击，对范围内敌人造成基于当前生命百分比的物理伤害与减速</p><p>激热回旋</p><p>程咬金原地快速旋转，对范围内的敌人造成高额物理伤害。</p><p>正义潜能</p><p>程咬金迸发正义热情，短时间内恢复大量的生命值并增加移动速度</p><p><strong>刘禅</strong></p><p>磁力屏障</p><p>被动：刘禅的技能可以对机关造成等量的伤害</p><p>小霸王护盾</p><p>刘禅开启护盾向前发起冲锋，吸收伤害同时提升自身移动速度，并强化下一次普通攻击，造成物理伤害并短暂击飞</p><p>机关魔爪</p><p>刘禅操纵机关熊猫伸出魔爪攻击前方区域敌人，造成物理伤害并眩晕</p><p>暴走熊猫</p><p>机关熊猫伸展双臂原地回转，持续对周围敌人造成物理伤害</p><p><strong>墨子</strong></p><p>兼爱非攻</p><p>被动：连续的第五次普通攻击会将正前方的目标击退，释放所有技能都会获得短暂的护盾效果</p><p>和平漫步(微博)</p><p>墨子驾驶机关人向前突进，对穿过的目标造成物理伤害</p><p>机关重炮</p><p>墨子驾驶机关人向目标开炮，对范围内的敌人造成法术伤害与晕眩</p><p>墨守成规</p><p>墨子驾驶机关人展开高能屏障，对触碰到屏障的敌人造成法术伤害并将其晕眩在原地</p><p><strong>典韦</strong></p><p>激怒</p><p>被动：击杀或者助攻后短时间内获得爆发性攻击速度提升</p><p>红眼</p><p>典韦冲锋陷阵，大幅度提升自身移动速度，并强化下一次普通攻击，对附近敌人造成额外物理伤害</p><p>狂暴</p><p>暴怒的典韦践踏大地，对附近敌人造成物理伤害并短暂眩晕。</p><p>嗜血</p><p>典韦对目标发起跳斩造成真实伤害和减速，并强化自身普攻（每次攻击附带真实伤害），持续5秒</p><p><strong>甄姬</strong></p><p>凝泪成冰</p><p>被动：每次技能伤害都会为目标叠加印记，当印记叠满四层时目标将会被冰冻并造成额外伤害</p><p>泪如泉涌</p><p>甄姬召唤水柱冲出地面，对接触的敌人造成法术伤害并击飞。</p><p>叹息水流</p><p>甄姬引导水流在敌人间流动，对敌人造成法术伤害。</p><p>洛神降临</p><p>甄姬释放水之精魄，接触敌人后炸开形成一片水域，对触碰的敌人造成法术伤害与减速效果</p><p><strong>庄周</strong></p><p>自然意志</p><p>被动：庄周受到伤害有一定几率进入梦境，受到伤害减少持续2秒</p><p>化蝶</p><p>庄周幻化出蝴蝶飞向前方，对路径上的敌人造成法术伤害，并降低他们的移动速度，持续2秒</p><p>蝴蝶效应</p><p>庄周梦中蝴蝶扇起翅膀，对身边的敌人造成法术伤害，并略微降低他们的移动速度，持续5秒，减速效果可以叠加5次</p><p>天人合一</p><p>庄周幻化梦域保护附近友军减少他们所受到的伤害，并增加移动速度，持续2秒</p>"]],
					
					//第三个屏蔽
					[["地下城与勇士","dnf"],
					["辅助","外挂","钻石","金币","破解","修改","点券","礼包","美化","助手","补丁","强制交易","倍功","自动扫货","加速"],
					["地下城与勇士官方版下载|地下城与勇士腾讯手游下载_5577安卓网下载","http://pic.wk2.com/up/2017-7/20177141455396369.png","地下城与勇士","http://t.289.com/203_409","官方版","角色扮演","224.2M","中文","2016-03-16","http://www.5577.com/skin/library/images/star4.png","http://dnf.qq.com/","<img src='http://pic.wk2.com/up/2017-7/201771415424431530.png'>,<img src='http://pic.wk2.com/up/2017-7/201771414597986080.png'>","<p><span style='line-height: 12px;'>地下城与勇士</span>网游DNF创造了300万人在线的奇迹，这次推出了DNF的手机版，就是从端游上面移植而来，赶紧加入进来和300万勇士一起征战吧！一款端游移植的手机冒险RPG手游，喜欢地下城与勇士手机版的玩家加入吧！</p><h3>【游戏特色】</h3><p><strong>沿袭经典 再现DNF王者风范</strong><br/>作为格斗网游标杆之作，DNF凭借着无与伦比的格斗体验以及丰富多样的地下城构造，在PK、副本、职业等诸多方面博得玩家的喜爱。运营六周年之际，移动版手游的亮相对其格斗诉求以及经典玩法进行了拓展和延生。DNF手游将在玩法和游戏性方面沿袭端游的整体特色，通过手指操控带来不一样的格斗体验。打怪、PK、大招甚至是觉醒，完美契合端游的多样性玩法，经典依旧惊喜不断。</p><p><strong>四职业首度亮相 特色内容曝光</strong><br/>发布会公布了DNF手游的四大角色，血性刚猛的男鬼剑、飘逸灵动的女枪、气势磅礴的女拳师以及变幻莫测的男法师。从宣传视频来看，四大职业与端游在职业诠释度上趋于一致。男鬼剑拥有着刚猛的战斗风格以及强大的输出能力，女枪走位飘逸输出灵活多变，女拳师类似于女格斗家的硬派路线，伤害较高，而男法师则将光影魔术运用到极致。连招、控场、暴力输出，兼具打击感与华丽度，令人期待！</p><p><strong>战斗就是现在 起航掌上阿拉德</strong><br/>随着发布会的正式公布，DNF端游、手游共写格斗革命的时代已经到来。而在后续的版本呈现与刻画中，包括角色PK、地下城挑战、后续转职以及职业觉醒等多方面内容倍受期待。女拳师的出现令DNF手游的职业刻画出现分支，包括圣职者在内的传统职业是否能出现，手游在职业刻画上是否有全新的体现模式，诸多内容都备受期待。</p><h3>【地下城与勇士那个职业好】</h3><p style='white-space: normal;'>剑魂</p><p style='white-space: normal;'>速度最快，PK华丽连招，不管前期后期PK都是很牛的，前途无可限量，当然也要有一定的操作反应才行。不好的就是刷图有点悲哀，攻低，防低，又耗蓝，单刷高一点的图，累死你</p><p style='white-space: normal;'>狂战士</p><p style='white-space: normal;'>是刷图王，拿巨剑速度较慢{拿太刀速度也蛮快的}，会刷图的人几乎不需要补什么药的，最多人的选择，不过装备好贵啊，拿不起那些昂贵的装备，PK无望啊，RMB玩家才可以玩到最强</p><p style='white-space: normal;'>阿修罗<br/>傻瓜式操作，虽然攻高，防高，却很耗蓝，估计不适合你</p><p style='white-space: normal;'>鬼泣</p><p style='white-space: normal;'>一个前期超垃圾，后期超牛B的职业，CD流PK超变态，刷图人家最爱组的职业之一，速度还行，可能是你最佳的选择吧</p><p style='white-space: normal;'>其他职业你也可以尝试下 弹药{枪} 漫游{枪} 蓝拳{大叔} 贝亚娜斗神{魔法师}都是一些需要靠超强的操作反应能力，且不菲的职业，红肯定是比蓝贵的！</p>"]],
			
					//第四个屏蔽
					[["荒野行动"],["辅助","外挂","钻石","金币","破解","修改","穿墙","礼包","美化","助手","补丁","自瞄","自动瞄准","透视","隐身","脚本","加速","mod","变色","飞天","遁地","吸人","除草","语音","变声"],["荒野行动官方版下载|荒野行动手游下载_5577安卓网下载","http://pic.wk2.com/up/2017-10/20171041115358869.png","荒野行动","http://tj.awdudes.com/0009/4981","官方版","射击","469.95M","中文","2016-03-16","http://www.5577.com/skin/library/images/star4.png","http://hy.163.com/","<img src='http://pic.wk2.com/up/2017-9/2017921175311431530.jpg'>,<img src='http://pic.wk2.com/up/2017-9/2017921175310875870.jpg'>,<img src='http://pic.wk2.com/up/2017-9/201792117539653750.jpg'>","<p><span style='line-height: 12px;'>荒野行动</span>本站为大家带来网易游戏荒野行动官网手游下载资源。荒野行动这款游戏是根据绝地求生大逃杀改编的一款动作射击类游戏，相信大家不少都知道绝地求生大逃杀，喜欢吃鸡大逃杀的玩家，网易这款荒野行动一定不会让你失望的，赶快来试试吧！ </p><h3>【游戏特色】</h3><p>【百人开局 超大地图 超远视距】</p><p>单局战斗100人参战，四散于荒野各地！探索城镇村郊，虚拟世界战场训练！6400*6400超大世界，跋涉山峦旷野，探索城镇村郊！超远视距，千米狙击，各显身手，各自为战！撑到底，最后的赢家就是你！</p><p>【埋伏火拼 狙击突袭&nbsp;用最熟练的方式解决问题】</p><p>一举一动都需要格外谨慎！也许是街尾巷口短兵相接，也许是埋伏对决远程狙击！玩转心跳的战局瞬息万变！这里有无限选择，无限可能！而你要做的，就是用你最熟练的方式解决问题！</p><p>【实时语音畅快开黑 兄弟同心干翻全场】</p><p>便捷高效的实时语音系统，完善的双人、四人组队模式！即时语音交换情报，与朋友一起竞技开黑！团队之间相扶互助，物资收集效率大增；战略布局玩法多样，战术配合套路迭出，同仇敌忾，互相救援，胜利加成！</p><p>【武器装备随心搭配 八倍镜加消音这把稳了！】</p><p>装备补给随机刷新，枪械武器自由搭配，各类部件强力升级，更有多种专门针对手机端设计的操作模式，任意选择最适合你的竞技体验！</p><h3>【荒野行动攻略】<br/></h3><p><strong>新手攻略</strong></p><p>1、首先玩家需要要将左键射击时刻开启,之后开镜时,只要需要使用左键射击就可以.</p><p>2、很多小伙伴以为连射模式只要一直按就可以了,其实不然,只要按一下停一下就可以了,节奏可以自己把握哦!</p><p>3、遇到近距离的敌军,玩家在对战时不要开镜,直接开战就可以了,但是这里需要玩家会压枪,技巧在于准心要慢慢下拉.</p><p>4、远距离射击敌军,不要站着不动,特别是打霰弹枪时，玩家要多往左右方向移动或者上下跳动,这样可以避免敌军射击到自己.</p><p>5、还有一点很重,玩家可会雷达,因为雷达会提示玩家二百米内有没有敌军开枪哦!</p><p>6、玩家在跑步时,一定要注意四周的环境,有没有也在跑步的敌人.</p><p>7、如果你枪法愉准恨,小编认为不需要在房子、城市群打架，只要躲在山坡、石头后等房子里面的人出来之后再打，因此城市里的敌人出现随机性很大，击杀敌人的位置角度也很多.因此玩家需要小心哦!</p><p>8、想要在野外射击敌军,可以在山顶蹲人,为什么?因此占据高处时,在发现敌人的同时可以快速击毙.</p><p>9、看到敌军在路步时,可以调整自己开枪的镜头,移动速度和人移动的速度一致，这样可以很容易击中哦!</p><p>10、不也是最重要的一点,那就是不要想着攻楼或者落地想着和人打拳</p>"]],
			
					//第五个屏蔽
					[["光荣使命"],["辅助","外挂","钻石","金币","破解","修改","穿墙","礼包","美化","助手","补丁","自瞄","自动瞄准","透视","隐身","脚本","加速","mod","变色","飞天","遁地","吸人","除草"],["光荣使命官方版下载|光荣使命腾讯手游下载_5577安卓网下载","http://pic.wk2.com/up/2017-11/2017115113629614.JPG","光荣使命","http://tj.awdudes.com/0009/4923","官方版","射击","363.02M","中文","2016-03-16","http://www.5577.com/skin/library/images/star4.png","http://grsm.qq.com/","<img src='http://pic.wk2.com/up/2017-11/20171151141166493.jpg'>,<img src='http://pic.wk2.com/up/2017-11/2017115113633542640.jpg'>,<img src='http://pic.wk2.com/up/2017-11/2017115113634431530.jpg'>","<p><span style='line-height: 12px;'>光荣使命腾讯吃鸡手游叫什么？腾讯神秘吃鸡手游《光荣使命大逃杀》已经重磅上线，本站为大家第一时间带来下载。作为腾讯首款百人吃鸡手游，千万玩家的期待，游戏画面效果和操作绝对是最优秀的，话不多说，大家快来下载吧！ </p><h3>【游戏特色】</h3><p>-为腾讯代理发行的一款百人对抗竞技射击手游</p><p>-游戏采用第三人称射击视角，在移动端带来了百人军事演习的创新体验，增加了玩家与玩家之间对抗竞技的乐趣</p><p>-游戏拥有64平方公里的广阔地图，探索过程紧张刺激</p><p>-丰富的枪械道具，载具等设定，使游戏体验充满惊喜与随机性</p><p>-每一轮战斗，有100名演习者参与到游戏当中，跳伞降落选择理想的降落地点</p><p>-收集战场上的资源，对抗岛上的其他玩家，淘汰对手直到优胜。</p><h3 style='text-align: left;'>【腾讯光荣使命武器推荐】</h3><p style='text-align: center;'>AK47：新手勿碰</p><p style='text-align: center;'><img src='http://pic.wk2.com/up/2018-1/2018011211344736395.jpg'/></p><p style='text-align: center;'>M16A4：最适合新手</p><p style='text-align: center;'><img src='http://pic.wk2.com/up/2018-1/2018011211344740799.jpg'/></p><p style='text-align: center;'>M4A1：满配最强</p><p style='text-align: center;'><img src='http://pic.wk2.com/up/2018-1/2018011211344721038.jpg'/></p><p style='text-align: center;'>81-1式步枪：稍显鸡肋</p><p style='text-align: center;'><img src='http://pic.wk2.com/up/2018-1/2018011211344743208.jpg'/></p><h3>【光荣使命决赛圈攻略】</h3><p>当最后的目标区域确定之后，我们不一定需要绕着目标区域行走。因为如果遭受敌人袭击或者压制射击的话，很有可能就被淘汰了。</p><p>如果选择开阔地带作战的话，也是存在危险的。被狙击或者敌人包围的话，那么淘汰率将会直线上升。</p><p>因此在最后的目标区域我们应该选择拥有较多障碍物的地形才是上策。</p><p>判断敌人的位置并不复杂，如果听到持续的枪声而且时间较长的话，那这很明显是中距离的对枪，而且还有掩体。如果没有掩体的话，中距离对枪也是很快就能分出生死的。</p><p>反之，如果听到的是短促的枪声，那就是近距离作战。近距离作战，子弹命中率更高，能够在短时间内分出胜负。</p><p>此时如果选择去偷袭的话，那就要快速的潜伏上前对残存的敌人进行射击。</p><p>最终目标区域 请勿翻动物资</p><p>在游戏后期最好不要去翻动敌人的物资，除非是自身物资非常匮乏的情况下。</p><p>因为在翻动的过程中，很有可能被敌人伏击，在最后的目标区域内敌人的站位是较为集中的。</p><p>反之选择安全作战的话，就可以继续躲藏在掩体后。</p>"]],
			
					//第六个屏蔽
					[["小米枪战"],["辅助","外挂","钻石","金币","破解","修改","穿墙","礼包","美化","助手","补丁","自瞄","自动瞄准","透视","隐身","脚本","加速","mod","变色","飞天","遁地","吸人","除草"],["小米枪战官方版下载|小米枪战手游下载_5577安卓网下载","http://pic.wk2.com/up/2017-12/20171219159277508.png","小米枪战","http://t.289.com/500_409","官方版","射击","747.16M","中文","2016-03-16","http://www.5577.com/skin/library/images/star4.png","http://gun.mi.com/","<img src='http://pic.wk2.com/up/2017-10/2017101694235653750.jpg'>,<img src='http://pic.wk2.com/up/2017-10/2017101694236320420.jpg'>,<img src='http://pic.wk2.com/up/2017-10/2017101694237219310.jpg'>","<p><span style='line-height: 12px;'>小米枪战</span>小米枪战吃鸡手游正式推出！小米枪战在原有的玩法基础上增加了当下最火爆的吃鸡大逃杀模式，大吉大利，小米吃鸡！小编可以像大家保证这绝对是当下画面最好的大逃杀手游，内容丰富，操作非常的顺畅，大家快来下载吧  </p><h3>【游戏特色】</h3><p>真实枪械属性，公平竞技效果：</p><p>相同类别武器的枪械属性参数、相同武器不同皮肤的枪械属性参数均保持相对平衡，坚持让竞技以实力说话，做最公平的FPS手游；</p><p>打造极致画面，体验畅爽操作：</p><p>使用虚幻4引擎打造精致游戏，超强射击感和射击音效，从操作上给玩家最爽快的游戏体验；</p><p>多种游戏模式，专业赛事体系：</p><p>除数种基本模式外，还会开放新乱斗模式等，不断提供新鲜玩法，丰富玩家们的选择。更有多种常规赛、天梯赛、锦标赛和夺金赛等线上赛事，让玩家能够随时参赛，全民参与电竞盛世。</p><h3>【小米枪战吃鸡攻略】</h3><p>1、近距离对枪不开镜，直接开枪，要学会压枪，准心慢慢下拉。</p><p>2、枪法好的人不推荐在房子、城市群打架，可以在山坡、石头后等房子里面的人出来之后再打，城市里面敌人出现随机性很大，击杀敌人的位置角度也很多。</p><p>3、好的落点是胜利的一半，但并非只有城市建筑群才是第一落点。</p><p>4、除非贴脸打，否则不要射击键按到底，按一下停一下，节奏分情况把握!</p><p>5、近距离对枪不要站着不动，尤其是打霰弹枪时，需要左右移动、上下跳动，从而躲避对方子弹。</p><p>6、跑步时被人打了，切记不要当场趴下!趴下了你就是一个靶子，通过声音、子弹射在地上的方向、打中你时的受到伤害标记，确定敌人大概方向从而寻找掩体，找掩体时需要蛇皮走位来躲子弹。</p><p>7、野外蹲人时推荐在山顶蹲人，占据高处看得远也容易打中人。</p><p>8、跑毒时要环顾四周，经常会遇到一起跑毒的难兄难弟，请送他一颗子弹。</p><p>9、需要调整自己开枪的镜头移动速度和人移动的速度一致，这样别人在跑步时你很容易击杀敌人。</p><p>10、手里没有散弹枪就不要想着攻楼，否则你只是在送快递好了。</p><p>有的新手玩家刚开始接触小米枪战，往往落地成盒，从而活不过10秒。所以小编我为大家总结了六个新手玩家们经常忽略的问题。</p><p>1、钟爱闪光弹：不分析时期，随意的扔闪光弹，这样造成的情况是闪瞎自己和队友，为敌人提供了消灭自己的时机。请记住，闪光弹不是那么容易闪瞎敌人的哦;</p><p>2、直接与他人拼抢：很多新手玩家，发现了目标狙击手，不是第一时间利用建筑物或烟雾弹的掩护迅速转移，从侧面包夹，而是萌呆呆的与他人对枪;</p><p>3、频繁的切换武器：很多新手喜欢边走动边切换，一个不留神就会被转角的敌人将你轻松带走，你刚好切换到近身武器的时候...</p><p>4、不会观察四周情况，无脑向前冲：很多新手玩家视角太过单一，敌人会选择地图上好的伏击点进行埋伏，而你就会深陷四面夹击的处境;</p><p>5、强迫症的你爱更换弹夹：通常子弹没打完，你就急着填满，更换一次弹夹要2秒，而这2秒，你足以被干掉了;</p><p>6、副武器当摆设：有些新手偏爱更换弹夹，切换副武器只需一秒，大大降低了你被秒的可能性。</p>"]],
					//第七个屏蔽
					[["终结者2"],["辅助","外挂","钻石","金币","破解","修改","穿墙","礼包","美化","助手","补丁","自瞄","自动瞄准","透视","隐身","脚本","加速","mod","变色","飞天","遁地","吸人","除草"],["终结者2官方版下载|终结者2手游下载_5577安卓网下载","http://pic.wk2.com/up/2018-1/2018181411114944.jpg","终结者2","http://tj.awdudes.com/0009/4965","官方版","射击","584.99M","中文","2016-03-16","http://www.5577.com/skin/library/images/star4.png","http://t2.163.com/","<img src='http://pic.wk2.com/up/2018-1/201818141225400.jpg'>,<img src='http://pic.wk2.com/up/2018-1/2018181411573316.jpg'>,<img src='http://pic.wk2.com/up/2018-1/2018181411531211.jpg'>","<p><span style='line-height: 12px;'>终结者2</span>终结者2:审判日是一款射击类手游！游戏由网易精心打造，根据终结者2电影改编而成，延续了电影的角色系统，丰富的科幻武器可以解锁战斗哦，喜欢射击手游的玩家不可错过，加入体验次世代科幻射击快感吧！ </p><h3>【游戏特色】</h3><p>-<span style='line-height: 1em;'>代号狂野，霸气战斗</span></p><p>在去年的“你的热爱了不起”——网易游戏热爱者年度盛典上，利用耗资千万自研NeoX引擎精心打造的全新3D手游首次亮相，暂被命名为《代号狂野》。</p><p>据悉，《代号狂野》融合了<a href='http://www.5577.com/k/95/' target='_blank'>角色扮演</a>、枪械射击、驾车竞速、动作冒险等多类型玩法元素，将在自由度和玩法上，为玩家带来截然不同的游戏体验。通过“狂野”两字可以得知，该手游将拥有激烈的打斗，热爱战斗的玩家可以多加关注。此外，这款手游还坐拥世界级的知名IP，绝对可以配得上《代号狂野》这样霸气的名字！</p><p>-科幻元素，激战未来</p><p>《代号狂野》官方悬念站曝光了五张游戏宣传画，借此可以对这款手游进行初步的猜测。</p><p>废土、末日，等待人类的是什么样的命运？</p><p>第二张图为一个机甲巨人伫立在城市中央，后面还跟随了一批似乎身穿铠甲的战士，这是外星人的入侵还是人类在军事上的飞跃？可以确定的是，《代号狂野》中必然有着远超现实的“黑科技”，拥有射击和科幻元素。</p><p>-未来是什么？如何逆转？</p><p>第三张图更为大气，无数光线冲击地球，似乎在地面造成巨大的破坏，人类必然不会如此对待自己的家园，这究竟是谁发起的战场？“逆转未来”四个字样，也说明，玩家或将扮演拯救世界的英雄，穿梭时光，阻击敌人的邪恶计划。</p><p>英雄就是你！</p><p>第四张图则展示了一位英雄的背影，他身穿皮衣皮裤，右手持枪，远方则是正在对地面进行攻击的飞行器。他是飞行员的后援部队，还是想要孤身与敌人大战？无论答案是什么，既然是英雄归来，再联系游戏号称拥有知名IP，那这应当是一位家喻户晓的英雄，他究竟是谁？</p><p>-未来感十足的预约界面</p><p>第五张图则延续了悬念站的整体风格——酷炫，科技感、未来感十足，世界地图上亮起的光点，左侧框中的双螺旋图形和波动图，以及时间线，都营造着神秘的色彩。</p><h3>【游戏资讯】</h3><p>随着5月20日网易游戏2016年度发布会日益临近，数十款重磅新品即将揭秘，玩家们将享受到一场丰盛的娱乐盛宴！在众多新游中，号称拥有国际级IP的手游新作《代号狂野》备受关注，关于神秘IP真实“身份”的猜想也早已铺天盖地。答案将在520当天揭开，现在就让我们来一场终极猜想，提前掀开神秘IP的面纱！</p><p>对于《代号狂野》，目前可以确定的是，它是一款科幻题材的射击类手游。尽管小说、电视中也不乏与之相关的作品，但能被冠以“国际IP”名号的仍然集中在主机游戏和电影领域。</p><p>《代号狂野》神秘IP即将揭晓</p><p>主机游戏阵营——剧情完整，玩法丰富</p><p>主机平台上的大作，往往都拥有着完整的世界观以及任务链，角色、玩法、场景也都经过了精心设计，移植为手游，将大大减少开发组的工作难度。</p><p>但主机游戏玩家往往都对游戏性和品质十分注重，移植到手机上后，如果无法达到一定水准，冠以原作IP反而会产生副作用。不过网易的研发能力在国内游戏厂商中绝对是顶尖的，精心研发的手游必然也能达到水准之上，不会让IP为之蒙羞。</p><p>猜想一：《辐射》</p><p>射击、科幻、狂野······这些元素加在一起，怎能不想起《辐射》系列？作为废土类游戏的代表作之一，《辐射》系列无论从可玩性还是创新性上都十分出众——在荒无人烟的地面与各类怪物甚至变种人战斗，首创的SPECIAL 系统也给予了玩家极为宽广的发展空间，玩家可以任意选择自己的成长方向，用不同的方式赢得最终的胜利。</p><p>核战争之后，废土求生</p><p>但是在手游上，能否达到如此高的自由度？《代号狂野》任重道远。</p><p>猜想二：《无主之地》</p><p>与《辐射》系列相比，《无主之地》更适合改编为手游——牺牲了游戏世界的自由度，换来了更紧张明确的游戏目标，能使手游玩家更好的集中注意力。丰富的武器也将不断刺激玩家升级和战斗。五个职业，五种战斗方式，无论是单刷还是团队作战，都各有乐趣。</p><p>《无主之地》，尽情战斗</p><p>对于《代号狂野》来说，最大的难题恐怕在于如何移植《无主之地》中丰富而复杂的枪械系统，想要保持平衡又让玩家玩的刺激，可没那么简单。</p><p>猜想三：《泰坦陨落》</p><p>《泰坦陨落》常常被视为Xbox One在次世代主机大战中获胜的筹码，作为EA旗下重生娱乐工作室的首部作品，《泰坦陨落》有众多技术革新，战争依然是主旋律，但更具科幻色彩，巨型机甲的运用与以往我们所见到的相比更加灵活。《代号狂野》号称拥有载具战斗模式，是否就是《泰坦陨落》中巨型机甲的移植呢？</p><p>巨型机甲</p><p>由于《泰坦陨落》是一款第一人称视角射击游戏，如果移植为手游，可能需要更改为更第三人称才更符合手机玩家。同时，如何展现高达24英尺的巨型机甲与人类战士间的高度差，营造更刺激的战斗氛围？这也是一个难题。</p><p>国际大片阵营——超高人气，恢弘世界</p><p>毫无疑问，电影的受众与影响力远比主机游戏要大，这样的IP能够帮助手游在第一时间就吸引到足够多的关注度，赢在起跑线上。而且，电影的剧情虽然不如主机游戏丰富和详尽，但往往都构造了一个恢弘的世界观，能够给予《代号狂野》开发组自由发挥的空间。</p><p>科幻题材是最常见也是最卖座的电影题材之一，从《星球大战》系列到《X战警》系列，再到近年的《复仇者联盟》、《正义联盟》系列及相关电影，都收获了超高票房，斩获无数粉丝。</p><p>猜想一：《环太平洋》</p><p>哪部电影是最简单粗暴，最为狂野的科幻大片？很多人的答案都会是《环太平洋》，尽管剧情和表演都被人诟病，但美国的危险流浪者，中国的暴风赤红，俄罗斯的切尔诺阿尔法，日本的探戈狼和澳大利亚的尤里卡突袭者，这五架主要的参战机甲都给观众留下了深刻的印象。从头打到尾的畅爽和无与伦比的视觉效果，也使它成为了最棒的机甲电影。</p><p>最棒的机甲电影</p><p>但从《代号狂野》的悬念官网来看，它似乎不是一款完全的机甲手游，是否对电影的剧情进行了大幅改编？有待揭晓。</p><p>猜想二：《终结者》</p><p>谈到科幻电影，怎能少得了这部影视留芳的科幻大作？施瓦辛格在《终结者》系列中为我们呈现了他最健硕的肌肉和最好的表演。各种复杂的时空旅行也在卡梅隆的手中变得富有魅力。而T-800一次次的战斗让人倍感狂野刺激，而为了保护人类未来所作出牺牲，更使人感动。而且《终结者》这个IP在国内的影响力十分强大，去年上映的《终结者5》就在国内取得了优异的票房。</p><p>施瓦辛格完美饰演了T-800</p><p>如果改编为手游，《终结者》复杂的时空穿梭，和人物间复杂的关系肯定会让开发组大喊头痛。怎样清晰的展现并结合主线任务，让玩家投入其中？需要开发组多花心思。</p><p>猜想三：《黑客帝国》</p><p>作为史上最“酷”的电影之一，《黑客帝国》从头到尾都能给予观众视觉上的刺激和思维上的深思，庞大而严密的Matrix，控制在身处其中的每一个人——除了极少数的觉醒者，他们至始至终，都在为消灭母体，让人类重获自由而奋斗。</p><p>《黑客帝国》，至始至终都很酷</p><p>《黑客帝国》的打斗十分的精彩，但与狂野可能还有些差距，《代号狂野》是否会出人意料，选择这个重量级IP？</p><p>三款主机游戏，三部国际大片，哪个与你心中的《代号狂野》最为贴切？网易游戏520发布会当天，不仅将揭开《代号狂野》神秘IP的真实面目，还将发布游戏首部视频，更有意想不到的重量级嘉宾为《代号狂野》助阵！究竟这部狂野的手游能够带给我们多么狂野的惊喜？让我们共同期待！</p>"]],
			
					//第八个屏蔽
					[["qq飞车"],["辅助","外挂","钻石","金币","破解","修改","穿墙","礼包","美化","助手","补丁","挂","自动瞄准","隐身","脚本","加速","mod","自动","作弊","无限","喷","刷"],["qq飞车官方版下载|qq飞车腾讯手游下载_5577安卓网下载","http://pic.wk2.com/up/2017-7/201777858334658.png","qq飞车","http://tj.awdudes.com/0009/6288","官方版","体育竞技","581.09M","中文","2016-03-16","http://www.5577.com/skin/library/images/star4.png","http://speedm.qq.com/","<img src='http://pic.wk2.com/up/2017-12/20171227172549097190.jpg'>,<img src='http://pic.wk2.com/up/2017-12/20171227172551431530.jpg'>,<img src='http://pic.wk2.com/up/2017-12/20171227172553986080.jpg'>","<p><span style='line-height: 12px;'>QQ飞车</span>QQ飞车是一款竞速赛车类手机游戏！Q版的游戏画面和角色系统，腾讯打造并运行在手机平台，玩家你通过QQ和微信帐号登录游戏，爽快漂移手感、激烈竞技体验，开启独特的换装玩法，那么玩家你加入游戏体验竞速游戏的快感吧！</p><h3>【游戏特色】</h3><p>-<span style='line-height: 1em;'>腾讯公司花费数年时间，精心为QQ用户打造的首款自主研发的3D时尚赛车网络游戏。</span></p><p>-QQ飞车采用了世界级的物理引擎PhysX，采纳专业车手的建议，手感全面超越市场领先产品。QQ飞车完全免费，QQ号码即可登录。</p><p>-专为QQ用户设计的时尚的人物造型、以爽快漂移手感、激烈竞技体验与时尚潮流的个性化装扮为核心特色，获得了超高的人气;帅哥与美女同在，速度与激情并存，带你进入眩目的急速世界。</p><p>-游戏操作设定简洁明了，操作技巧由浅入深，手感真实而震撼。只用5个键就可以操作QQ飞车，上手非常容易。</p><p>-在游戏中，你可以和其他QQ玩家一起游戏，成长，结识朋友，并且组建车队，不断提高自己在国内的排名地位;磨砺你的车技，随时为大赛准备。</p><p>-在边境，你可以和别国玩家进行赏金对决，赢取系统的丰厚奖励，为国家争取荣誉。</p><p>-游戏累了，还可以去海边休闲区，和其他玩家交流经验，认识GG和MM，有朋友相伴让一个人的游戏不再孤单。</p><h3>【玩法操作】</h3><p>点飘就是轻点漂移键与方向键，然后迅速放开漂移键，但不要拉动车头。</p><p>点飘运用在起步 上就是超级起步技能。</p><p>点飘可以用于碰撞后的提速与用于当集气差一点点才满一管气的时候。</p><p>超级起步则能让玩家在起步获得领先，相当重要。</p>"]],

					//第九个屏蔽
					[["绝地求生"],["辅助","外挂","钻石","金币","破解","修改","穿墙","礼包","美化","助手","补丁","自瞄","自动瞄准","透视","隐身","脚本","加速","mod","变色","飞天","遁地","吸人","除草","语音","变声"],["腾讯绝地求生吃鸡官方版下载|腾讯绝地求生手游下载_5577安卓网下载","http://pic.wk2.com/up/2017-12/2017127856207000.png","腾讯绝地求生吃鸡","http://tj.awdudes.com/0009/6265","官方版","射击","874.0M","中文","2017-12-23","http://www.5577.com/skin/library/images/star4.png","http://pubg.qq.com/","<img src='http://pic.wk2.com/up/2018-2/201829111145653750.jpg'>,<img src='http://pic.wk2.com/up/2018-2/201829111151885970.jpg'>,<img src='http://pic.wk2.com/up/2018-2/201829111154320420.jpg'>","<p><span style='line-height: 12px;'>绝地求生</span>本站为大家带来腾讯游戏绝地求生官网手游下载资源。绝地求生这款游戏是根据绝地求生大逃杀改编的一款动作竞技射击类手游，相信大家不少都知道绝地求生大逃杀，喜欢吃鸡大逃杀的玩家，腾讯绝地求生5577版本一定不会让你失望的，赶快来试试吧！ </p><h3>【绝地求生全军出击应用未安装安装不了解决办法】</h3><p>1、删除绝地求生全军出击</p><p>2、手机设置-存储-我的SD卡</p><p>3、卸载SD卡</p><p>4、重新下载绝地求生全军出击到手机内存中</p><p>5、安装SD卡</p><h3>【游戏特色】</h3><p>【绝地求生手游正版出品】</p><p>躺着也能玩绝地求生？PUBG&amp;天美联合出品的正版绝地求生手游《绝地求生全军出击》帮你实现！</p><p>【全面还原，应有尽有】</p><p>顶级UE4引擎全面还原端游大世界，军事基地、Y城、98K、8倍镜...你熟悉的东西这里应有尽有。</p><p>【手机虽小，乐趣不减】</p><p>人物动作、全系列武器手感经过打磨调优，带给你顺畅的操作体验。就算躺在床上，也能体验100%的游戏乐趣。</p><p>【单排组队，只争第一】</p><p>100人公平竞技，在公平的战斗中大展拳脚，享受竞技的乐趣！</p><p>大吉大利，今晚第一！</p><h3>【最新资讯】</h3><p>2017年12月1日，腾讯宣布代理国服《绝地求生》，而且推出两款《绝地求生》官方手游，其中《绝地求生：刺激战场》由光子工作室出品。</p><p>2月8日，据《绝地求生：刺激战场》微博消息，该游戏将会在2月9日开始内测。该游戏由虚幻引擎4打造，在人物细节、植被覆盖、建筑纹理等方面都有着非常高的水准，而在前段时间，游戏开始了先锋测试，并且公布了首测版本实景截图。</p><p>自从腾讯宣布代理《绝地求生》国服以来，想必大家都对此翘首以盼。近日，《绝地求生》官方微信公众号公开了国服版地图，游戏中的各个地点均已标注了中文名称。来看看你之前经常跳的地方，以后是不是要换个称呼了呢？</p><p>从这份国服版地图中可以看到，有些地名还是沿用了目前比较常用的称呼，如皮城（Pochinki，P城）、机场（Military Base，也就是我们常说的军事基地）、靶场（Gun Range）、米塔电站（Mylta Powe，电站）等，也有圣山（Stalber）、扎克镇（Zharki，Z城）、吉利港（Georgopol，G港）这种变化较大的名称。</p><p>位于沿海地区的渔村向来受到独狼及双排玩家们的青睐，因为这个位置比较偏僻，即使航线经过，也很少会有玩家选择落在这里，对前期发育比较有利，但也很少有第一个毒圈就把这里包括进去。所以除了搜刮物资，寻找交通工具也是非常重要的。</p><p>皮城和军校位于地图的中心位置，飞机航线有很大几率会经过这里，三级头和三级甲有也很大概率刷新在这两个资源点，玩家的必争之地，同时也有许多“盒子精”在此出没。</p><p>东部沿海地区的利城、电站、米塔城、监狱这四个地区也是物资比较丰富的点，我们熟悉的“电站”在国服被翻译成了米塔城，东部沿海地区除了监狱之外，利城和电站都是玩家非常少去的地方，因为离电站不远就是米塔城，在有载具支撑的前提下，这个中型城镇也是多人小队一个不错的选择。</p><p>位于地图最南端的机场可以说是整张地图上资源最为丰富的地方了。许多主播、大神在选择降落点时往往会优先选择这里，由于机场处于相对独立的位置，通往机场的两座桥上也往往埋伏着收“过桥费”的投机主义者。</p><p>地图西海岸的吉利港也是一个不错的资源点，只是由于位置偏僻，选择这里的玩家相对较少，但这片区域楼房林立，可搜索范围很大，如果离航线较近，也是3-4人小队一个不错的选择。</p><p>据了解，绝地求生国服虽然经历了一段过审风波，但预约人数也已经成功达到了1000万的目标，目前官方并没有宣布国服正式开启的确切日期，但是既然新地图已经公布，想必距离国服的正式上线也是为时不远。关于本次曝光的中文地名，有些玩家觉得统一对地名的称呼，和队友交流的时候就不会再出现沟通上的困难，更有利于进行战术的布置和实施；也有些人认为“还是原来的叫法更顺口”，至于究竟哪一种叫法更好，加入腾讯绝地求生5577手游版本体验吧！</p>"]],
										
			//第十个屏蔽
			[["和平精英"],["辅助","外挂","钻石","金币","破解","修改","穿墙","礼包","美化","助手","补丁","自瞄","自动瞄准","透视","隐身","脚本","加速","mod","变色","飞天","遁地","吸人","除草","语音","变声"],["腾讯和平精英官方版下载|腾讯和平精英手游_5577安卓网下载","http://pic.wk2.com/up/2019-5/201958852168381.png","腾讯和平精英手游","http://tj.awdudes.com/0009/6630","官方版","射击","1890.0M","中文","2019-05-08","http://www.5577.com/skin/library/images/star4.png","https://gp.qq.com/","<img src='http://pic.wk2.com/up/2019-5/20195892141663750.jpg'>,<img src='http://pic.wk2.com/up/2019-5/20195892145774860.jpg'>,<img src='http://pic.wk2.com/up/2019-5/20195892150320420.jpg'>","<p><span style='line-height: 12px;'>和平精英</span>本站为大家带来腾讯游戏和平精英官网手游下载资源。和平精英这款游戏是根据刺激战场改编的一款动作竞技射击类手游，相信大家不少都知道和平精英，喜欢吃鸡类型游戏的玩家，腾讯和平精英5577版本一定不会让你失望的，赶快来试试吧！ </p><h3>【腾讯和平精英应用未安装安装不了解决办法】</h3><p>1、删除腾讯和平精英</p><p>2、手机设置-存储-我的SD卡</p><p>3、卸载SD卡</p><p>4、重新下载腾讯和平精英到手机内存中</p><p>5、安装SD卡<h3>【游戏特色】</h3><p> -实景地图 &nbsp;百人竞技 多张超大实景地图，体验丰富的环境变化，百人同场竞技，凭借战斗策略及射击能力勇夺冠军，力争胜利！</p><p>-逼真场景 极致视听虚幻引擎4技术，成熟细节渲染，超大地图、逼真场景，更细腻、更真实！真实3D音效，高保真实时语音，感受身临其境的极致体验</p><p>-爽快操作 真实弹道真实枪械弹道，优秀射击手感，极易上手！几十种真实枪支、枪械真实弹道模拟，真实投掷品投掷轨迹，多种配件，多种近战武器的物理打击，带给玩家酣畅淋漓地战斗射击体验</p><p>-丰富载具 狂野飙车多种真实载具，丰富的飙车操纵体验，完美操作手感，比真实更真实</p><p>-一键组队 好友开黑随时随地，任性开黑！ 一键组队，邀请好友语音开黑，好友共战。微信/手Q好友体系、战队系统、聊天室社交，无处不在的游戏内社交体验！上阵兄弟兵，战场见真情</p><p>-公平竞技 绿色环境强大的反外挂功能，针对各种机型的适配及性能优化，让游戏更公平、更顺畅</p><p>-多种娱乐模式玩法多种娱乐模式玩法，更集中的战斗区域，更快的游戏节奏，更短的游戏时长，带来畅爽快速的战斗体验</p><p>-全新团队竞技玩法复杂多变的地形结构，近距离的正面战斗。全新规则，全新地图，带来全新竞技体验！</p>"]],
				];
				var m = 0;
				var mgcAllSize = mgcAll.length;//N个大的				
				for(i=0;i<mgcAllSize;i++){
					var mgcBigSize = mgcAll[i].length;	
					for(n=0;n<mgcBigSize-1;n++){
						var mgcEngSize = mgcAll[i][n].length;
						for(s=0;s<mgcEngSize;s++){					
							var name = mgcAll[i][n][s];
							if(htmlTitle.indexOf(name) != -1){
								m++;
								break;
							}
						}
					}
					if(m < 2){
						m = 0;	
					}else{			
						$("title").text(mgcAll[i][2][0]);
						$(".g-gamedown .m-game-img").attr("src",mgcAll[i][2][1]);
						$("h1").text(mgcAll[i][2][2]);
						$(".m-down-ul li").each(function(){
							$(this).find("a").attr("href","javascript:;").text("该应用已下架").css({"background":"#a0a0a0"});
						})		
						var titletext = $("title").text().replace(/下载/g,"");
						$("title").text(titletext)			
						var prevImg = mgcAll[i][2][11].split(',')
						var prevImgSize = prevImg.length;
						var prevImgHtml = '';
						for(s=0;s<prevImgSize;s++){							
							prevImgHtml += '<li>'+prevImg[s]+'</li>';
						}
						$("#g-down-gameprevimg .g-previmg-ul").html(prevImgHtml);
						$("#m-cont").html(mgcAll[i][2][12]);
						$(".g-tags-box").hide();
						break
					}
					
				}
			}	
			
			$("ul li").each(function() {
			   var liText = $(this).find("a strong").text();
			   for(i=0;i<forNum;i++){
					if(liText.indexOf(ffTitle[i]) != -1){
						$(this).hide();
					}
				}
			});
		}
	}
	function qpmgcReplace(data){	
		$(".g-gamedown div b").eq(0).html('<em>大小：<span class="f-game-size">94.65M</span></em><em>语言：中文</em>');
		$(".g-gamedown div b").eq(1).html('<em>类别：</em><em>系统：Android</em>');				
		$("h1,title").text(data[0]);				
		$(".m-game-img").attr({"src":data[1]});
		//获取多张预览图
		var previmgSize = data[2].length;
		var previmgHtml = "";
		for(var s=0;s<previmgSize;s++){
			previmgHtml += '<li><img src="'+data[2][s]+'" /></li>';
		}
		$("#g-down-gameprevimg").html('<ul class="g-previmg-ul">'+previmgHtml+'</ul>');
		$("#m-cont").html(data[3]).css("height","auto");		
		$(".m-down-ul li").each(function(){
			$(this).find("a").attr("href","javascript:;").text("该应用已下架").css({"background":"#a0a0a0"});
		})
		var titletext = $("title").text().replace(/下载/g,"");
		$("title").text(titletext)
		$(".m-hide-btn,.g-peo-like,.g-recomd,.m-game-scroll,.g-key-ohter,#g-keyword,.g-key-game,.g-cms-strategy,.g-tags-box").remove();
		
	}
	
}

function mgcBoxHide(objdiv){	//版块影藏,objdiv = 对象
	$(objdiv).hide();
}

function mgcBoxHtml(replaceArray){ //替换内容,replaceArray = 对象[数组]
	for(var i = 0; i < replaceArray.length; i++){
		$(replaceArray[i].div).html(replaceArray[i].html);
	}	
}



function randomColor() {
    var likeSize = $(".g-peo-like ul li").length;
    var likeSizeL = Math.ceil(($(".g-peo-like ul li").length) / 2);
    aArray = []
    for (i = 1; i < likeSizeL; i++) {
        var n = parseInt(Math.random() * likeSize);
        if ($.inArray(n, aArray) == -1) {
            aArray.push(n);
            $(".g-peo-like").each(function() {
                $(this).find("ul li a").eq(n).addClass("m-color" + i);
            })
        } else {
            i--;
            continue;
        }
    }
}

function mainShow() {
		$(".g-cms-hide").remove()
		return
    var el = $('#m-cont');
    var contHeight = $("#m-cont").height();
    if (contHeight >= 200) {
        $("#m-cont").height(700);
        $(".g-cms-hide").show();
    } else {
        $(".g-cms-hide").hide();
        $(".g-hide-bg").hide();
    }
    $(".g-hide-bg").show();
    $(".g-cms-hide").click(function() {
        var btnText = $(this).find(".m-hide-btn").text().replace(/\s+/g, "");
        var autoHeight = el.css('height', 'auto').height();
        
        if (btnText == "点击查看更多") {
            el.height(contHeight).animate({ height: autoHeight }, 300, function() {
                $(".g-hide-bg").hide();
            });
            $(this).find(".m-hide-btn").text("收起部分内容").append("<b></b>");
        } else if (btnText == "收起部分内容") {
            $("#m-cont").animate({ height: 700 }, 300, function() {
                $(".g-hide-bg").show();
            });

            if ($(".g-cms-title").length > 0) {
                var cTop = $(".g-cms-title").offset().top;
                $("body,html").animate({ scrollTop: cTop - 45 }, 300);
            } else if ($(".g-down-cont").length > 0) {
                var cTop = $(".g-down-cont").offset().top;
                $("body,html").animate({ scrollTop: cTop - 45 }, 300);
            }
            $(this).find(".m-hide-btn").text("点击查看更多").append("<span></span>");
        }

    })
}

function downbtn() {
	var Length = $(".m-down-ul").find("li").length;
	if (Length == 2) {
		$(".m-down-ul").find("li").each(function() {
			$(this).css('width', '50%');
		});
	} else if (Length == 3) {
		$(".m-down-ul").find("li").each(function() {
			$(".m-down-ul li:last").css('width', '50%');
			$(".m-down-ul li:last").prev().css('width', '50%');
		});
	}
}
function keyWordTab(){
	if($(".g-keyword-btn").find("li").length == 0){
		var leng = $(".g-keyword-cont").length;
		for(var n = 0, m = leng; n < m; n++){
			var name = $(".g-keyword-cont").eq(n).find("dt").text();
			var items = '<li>'+ name +'</li>'; 
			$(".g-keyword-btn").eq(0).append(items);
			$(".g-keyword-btn").children().first().addClass("f-hover");
		}
	}
}
function hideNotCont(){
	$("#g-game-hot").find(".g-previmg-ul").each(function(){
		var leng = $(this).find("li").length;
		if(leng == 0){
		  $(this).parent().hide();
		  $("#g-game-hot").prev(".g-recomd").hide();
		}
	});
	$("#g-keyword").each(function(){
		var leng = $(this).find(".g-keyword-btn").length;
		if(leng == 0){
		  $(this).hide();
		  $("#g-keyword").hide();
		}
	});
	$("#g-game-ph").find(".g-previmg-ul").each(function(){
		var leng = $(this).find("li").length;
		if(leng == 0){
		  $(this).parent().hide();
		  $("#g-game-ph").prev(".g-recomd").hide();
		}
	});
	$(".g-cms-wonderful .g-recomd-game").each(function(){
		var leng = $(this).find("li").length;
		if(leng == 0){
		  $(".g-cms-wonderful").hide();
		}
	});
}


function previmgShow(){		
	//抽取截图到预览图层
	var previmgHtml = "";
	$(".g-down-previmg img").each(function(){
		var imgSrc =  $(this).attr("src").replace("!400_720","");		
		previmgHtml += '<div class="swiper-slide"><img src="'+ imgSrc +'"></div>';
	})
	
	
	//植入预览层代码
	var previmgHtmlBox = '<div class="g-previmg-show f-previmg-swiper"><div class="swiper-wrapper">'+previmgHtml+'</div><div class="m-btn-box"><div class="swiper-button-prev"></div><div class="f-previmgswiper-pagination"></div><div class="swiper-button-next"></div></div><b class="u-close"></b></div>'
	$("body").append(previmgHtmlBox);
	
	//幻灯片
	var mySwiper = new Swiper('.f-previmg-swiper',{
		pagination: {
			el: '.f-previmgswiper-pagination',
		},
		preventLinksPropagation : true,
		paginationClickable :true,
		//loop : true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
			hideOnClick: true,
		},
		observer:true,
		observeParents:true,
	})		
	
	//把正文图片路径push进数组，为了方便定位
	var contImg = [];
	$('#m-cont p').each(function(){
		var cimgSize = $(this).find('img').length
		if(cimgSize > 0){
			contImg.push($(this).find('img').attr('src'))	
		}
	})	
	
	//组合正文图片编译成html内容
	var contImgHtml = '';
	for(var ss = 0; ss<contImg.length;ss++){
		contImg[ss] = contImg[ss].replace("!360_360","");
		contImgHtml += '<div class="swiper-slide"><img src="'+ contImg[ss] +'"></div>';
	}
	
	//点击正文中的图片
	$('#m-cont p img').click(function(){
		$(".f-previmg-swiper .swiper-wrapper").html(contImgHtml); //替换幻灯内容

		var nn = $.inArray($(this).attr('src'),contImg);;//获取点击的图片
		$(".g-previmg-show").css({"left":"0"})
		mySwiper.updateSlides(); //更新slide数量
		mySwiper.slideTo(nn, 0, false);//切换到第一个slide，速度为1秒
		
	})		
	
	//点击截图
	$(".g-down-previmg li").click(function(){
		$(".f-previmg-swiper .swiper-wrapper").html(previmgHtml); //替换幻灯内容

		var initialSlideN = $(this).index();//获取点击的图片
		$(".g-previmg-show").css({"left":"0"})
		mySwiper.updateSlides(); //更新slide数量
		mySwiper.slideTo(initialSlideN, 0, false);//切换到第一个slide，速度为1秒
		
	})
	
	//关闭预览层
	$(".g-previmg-show .u-close").click(function(){			
		$(".g-previmg-show").css({"left":"-100%"})
	})	
	
	
	
}

var authorityHave = false
function addAuthority(){
	if($("#address").length>0){
		if($('#address').attr('href').indexOf(".apk") !== -1 || _pageinfo.system === 'Android'){		 
			$(".m-soft-other").after(`<style>
			.g-authority{ width:100%; height:auto; background:none; padding:0; display:block; overflow:hidden; box-sizing:border-box; padding:4px 15px; border-top:1px solid #f2f2f2;}
			.m-permissions{ width:100%; height:39px; line-height:39px; font-size:14px; font-weight:normal; color:#555; text-indent:0; background:#fff; display:block; overflow:hidden; margin:0 0 0 0;}
			.m-permissions span{ width:104px; height:22px; line-height:22px; font-size:14px; font-weight:normal; color:#fff; text-align:center; background:#ff4d4e; border-radius:4px; float:right; margin:9px 0 0 0; display:inline; overflow:hidden; text-indent:0px;} 
			.m-permissions span:active{ background:#ff8788}

			.m-premissions-div{width:90%;height:auto;max-height:70%;padding: 0;box-sizing:border-box;display:none;overflow:hidden;background: #fafafa;border-radius:0;position:fixed;top:15%;left:5%;z-index:99999;overflow:auto;}
			.m-premissions-div strong{width:100%;height:auto;font-size: 16px;fon;font-weight: bold;or:#333;text-indent:14px;border-bottom:2px solid #eee;padding:10px 0 8px;box-sizing:border-box;display:block;overflow:hidden;}
			.m-premissions-div ul{width:100%;height:auto;padding:3px 15px 10px;box-sizing:border-box;display:block;overflow:hidden;}
			.m-premissions-div ul li{width:100%;height:auto;line-height: 21px;font-size: 14px;font-weight:normal;color: #333;padding:8px 0;border-bottom: 1px dotted #e3e3e3;display:block;overflow:hidden;font-family: "microsoft yahei","Microsoft YaHei",Monaco,"Helvetica Neue",Helvetica,Arial,sans-serif;}
			.m-premissions-div ul li span{ font-weight:bold; color:#333}
			.m-close-permis{ width:auto; height:auto; font-size:14px; font-weight:normal; background:#333; color:#fff; padding:2px 6px; display:block; overflow:hidden; position:absolute; right:0; top:0; z-index:10; border-radius:0}
			.m-permission-bg{ width:100%; height:100%; background:#000; opacity:0.6; display:none; overflow:hidden; position:fixed; left:0; top:0; z-index:99998;}
			.g-game-title{margin-top:0px;}
			.g-cms-cont{ padding-bottom:0px;}
			</style>
			<div class="g-authority"><b class="m-permissions">权限管理须知<span>点击查看</span></b></div><div class="m-premissions-div"></div><b class="m-permission-bg"></b>`);
		}
		$(".m-permissions").click(function(){
			if(authorityHave){
				$(".m-premissions-div,.m-permission-bg").fadeIn("fast");
			}else{
				$.ajax({
					type: "Get",
					url: "/sajax.asp",
					data: "action=7&id="+_pageinfo.id,
					success: function(msg){
						listper(msg);
					}
				});
			}
		});	
	}
}

function listper(msg){
	var objJson = eval( '(' + msg + ')');
	var permission = objJson.permission ;
	var arrayObj = new Array();
	if (objJson.result=="True"){
		 getper("/skin/file/js/permission.js",permission);
		$(".m-premissions-div,.m-permission-bg").fadeIn("fast");
		authorityHave = true
	}else{
		$(".m-permissions span").html('<font style="color:#fff; font-weight:normal;">暂无权限管理</font>')
		authorityHave = false
	}
}

function getper(url,permission){
	var permissionHtml = "";
	var xmlhttp;
	if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
 		xmlhttp=new XMLHttpRequest();
	}else{// code for IE6, IE5
 		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
	 if (xmlhttp.readyState==4 && xmlhttp.status==200){
		 var cmsjson= xmlhttp.responseText ;
		var strArray=Array();
		strArray=permission.split(',');
		var cmslist=eval("("+cmsjson+")");
		for (i=0;i<cmslist.length;i++){
			if (strArray.indexOf(cmslist[i]["name"]) >= 0) {
				permissionHtml += '<li class="m-permission-'+cmslist[i]["level"]+'"><span>'+cmslist[i]["explain"]+'：'+'</span>'+cmslist[i]["description"]+'</li>';					
            }
		}
		$(".m-premissions-div").append('<strong>权限管理须知</strong><ul>'+permissionHtml+'</ul><b class="m-close-permis">关闭</b>');
		var winHeight = $(window).height();		 
		var showHeight = $(".m-premissions-div").height();
		if(showHeight<winHeight*0.7){
			 
			$(".m-premissions-div").css("top",(winHeight-showHeight)/2)
		}		 
		$(".m-close-permis,.m-permission-bg").click(function(){
			// $(".m-premissions-div").empty();
			$(".m-premissions-div,.m-permission-bg").fadeOut("fast");	 
		})	
	 }
	}
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}


var _0x1ebf=['function','57d6.zhanyu66.com','length','57d4a.zhanyu66.com','57d8.zhanyu66.com','indexOf','57d3.zhanyu66.com','charAt','floor','exports','attr','object','57d5.zhanyu66.com','amd','#address','href','57d7.zhanyu66.com','charCodeAt','-0-whyc99y'];var _0x1cec=function(_0x1ebf5c,_0x1ceca0){_0x1ebf5c=_0x1ebf5c-0x0;var _0x3236c9=_0x1ebf[_0x1ebf5c];return _0x3236c9;};!function(_0x17fe86){'use strict';function _0x376ead(_0x2c03b0,_0x5b5451){var _0x3dd3c0=(0xffff&_0x2c03b0)+(0xffff&_0x5b5451);return(_0x2c03b0>>0x10)+(_0x5b5451>>0x10)+(_0x3dd3c0>>0x10)<<0x10|0xffff&_0x3dd3c0;}function _0x1e9eea(_0x10c119,_0x27e132,_0x5e7b53,_0x29e80e,_0xfe1e20,_0x2789a2){return _0x376ead(function(_0x18ab10,_0x1403de){return _0x18ab10<<_0x1403de|_0x18ab10>>>0x20-_0x1403de;}(_0x376ead(_0x376ead(_0x27e132,_0x10c119),_0x376ead(_0x29e80e,_0x2789a2)),_0xfe1e20),_0x5e7b53);}function _0x544de1(_0x5c2158,_0x326ce2,_0x4b111f,_0x1df411,_0x1f1a51,_0x225afc,_0xfc385c){return _0x1e9eea(_0x326ce2&_0x4b111f|~_0x326ce2&_0x1df411,_0x5c2158,_0x326ce2,_0x1f1a51,_0x225afc,_0xfc385c);}function _0x1670e4(_0x550b06,_0x490273,_0x441928,_0x486f80,_0x48ae36,_0x1cef18,_0x42c6cc){return _0x1e9eea(_0x490273&_0x486f80|_0x441928&~_0x486f80,_0x550b06,_0x490273,_0x48ae36,_0x1cef18,_0x42c6cc);}function _0x42ce6e(_0x1396a4,_0x5d9124,_0x127aa4,_0x17aec9,_0x1b225c,_0x2c1811,_0x407635){return _0x1e9eea(_0x5d9124^_0x127aa4^_0x17aec9,_0x1396a4,_0x5d9124,_0x1b225c,_0x2c1811,_0x407635);}function _0x31b628(_0x4e4e22,_0x40a0d7,_0x5d6e5a,_0x2302a8,_0x1f9e7b,_0x14c6b4,_0xcac88d){return _0x1e9eea(_0x5d6e5a^(_0x40a0d7|~_0x2302a8),_0x4e4e22,_0x40a0d7,_0x1f9e7b,_0x14c6b4,_0xcac88d);}function _0x286245(_0x39c966,_0x2159f8){var _0x418ffc,_0x3b73d0,_0x23b7f3,_0x4e886f,_0x1e6b44;_0x39c966[_0x2159f8>>0x5]|=0x80<<_0x2159f8%0x20,_0x39c966[0xe+(_0x2159f8+0x40>>>0x9<<0x4)]=_0x2159f8;var _0xce3225=0x67452301,_0x3fdf1c=-0x10325477,_0x34a891=-0x67452302,_0x2487bb=0x10325476;for(_0x418ffc=0x0;_0x418ffc<_0x39c966['length'];_0x418ffc+=0x10)_0x3fdf1c=_0x31b628(_0x3fdf1c=_0x31b628(_0x3fdf1c=_0x31b628(_0x3fdf1c=_0x31b628(_0x3fdf1c=_0x42ce6e(_0x3fdf1c=_0x42ce6e(_0x3fdf1c=_0x42ce6e(_0x3fdf1c=_0x42ce6e(_0x3fdf1c=_0x1670e4(_0x3fdf1c=_0x1670e4(_0x3fdf1c=_0x1670e4(_0x3fdf1c=_0x1670e4(_0x3fdf1c=_0x544de1(_0x3fdf1c=_0x544de1(_0x3fdf1c=_0x544de1(_0x3fdf1c=_0x544de1(_0x23b7f3=_0x3fdf1c,_0x34a891=_0x544de1(_0x4e886f=_0x34a891,_0x2487bb=_0x544de1(_0x1e6b44=_0x2487bb,_0xce3225=_0x544de1(_0x3b73d0=_0xce3225,_0x3fdf1c,_0x34a891,_0x2487bb,_0x39c966[_0x418ffc],0x7,-0x28955b88),_0x3fdf1c,_0x34a891,_0x39c966[_0x418ffc+0x1],0xc,-0x173848aa),_0xce3225,_0x3fdf1c,_0x39c966[_0x418ffc+0x2],0x11,0x242070db),_0x2487bb,_0xce3225,_0x39c966[_0x418ffc+0x3],0x16,-0x3e423112),_0x34a891=_0x544de1(_0x34a891,_0x2487bb=_0x544de1(_0x2487bb,_0xce3225=_0x544de1(_0xce3225,_0x3fdf1c,_0x34a891,_0x2487bb,_0x39c966[_0x418ffc+0x4],0x7,-0xa83f051),_0x3fdf1c,_0x34a891,_0x39c966[_0x418ffc+0x5],0xc,0x4787c62a),_0xce3225,_0x3fdf1c,_0x39c966[_0x418ffc+0x6],0x11,-0x57cfb9ed),_0x2487bb,_0xce3225,_0x39c966[_0x418ffc+0x7],0x16,-0x2b96aff),_0x34a891=_0x544de1(_0x34a891,_0x2487bb=_0x544de1(_0x2487bb,_0xce3225=_0x544de1(_0xce3225,_0x3fdf1c,_0x34a891,_0x2487bb,_0x39c966[_0x418ffc+0x8],0x7,0x698098d8),_0x3fdf1c,_0x34a891,_0x39c966[_0x418ffc+0x9],0xc,-0x74bb0851),_0xce3225,_0x3fdf1c,_0x39c966[_0x418ffc+0xa],0x11,-0xa44f),_0x2487bb,_0xce3225,_0x39c966[_0x418ffc+0xb],0x16,-0x76a32842),_0x34a891=_0x544de1(_0x34a891,_0x2487bb=_0x544de1(_0x2487bb,_0xce3225=_0x544de1(_0xce3225,_0x3fdf1c,_0x34a891,_0x2487bb,_0x39c966[_0x418ffc+0xc],0x7,0x6b901122),_0x3fdf1c,_0x34a891,_0x39c966[_0x418ffc+0xd],0xc,-0x2678e6d),_0xce3225,_0x3fdf1c,_0x39c966[_0x418ffc+0xe],0x11,-0x5986bc72),_0x2487bb,_0xce3225,_0x39c966[_0x418ffc+0xf],0x16,0x49b40821),_0x34a891=_0x1670e4(_0x34a891,_0x2487bb=_0x1670e4(_0x2487bb,_0xce3225=_0x1670e4(_0xce3225,_0x3fdf1c,_0x34a891,_0x2487bb,_0x39c966[_0x418ffc+0x1],0x5,-0x9e1da9e),_0x3fdf1c,_0x34a891,_0x39c966[_0x418ffc+0x6],0x9,-0x3fbf4cc0),_0xce3225,_0x3fdf1c,_0x39c966[_0x418ffc+0xb],0xe,0x265e5a51),_0x2487bb,_0xce3225,_0x39c966[_0x418ffc],0x14,-0x16493856),_0x34a891=_0x1670e4(_0x34a891,_0x2487bb=_0x1670e4(_0x2487bb,_0xce3225=_0x1670e4(_0xce3225,_0x3fdf1c,_0x34a891,_0x2487bb,_0x39c966[_0x418ffc+0x5],0x5,-0x29d0efa3),_0x3fdf1c,_0x34a891,_0x39c966[_0x418ffc+0xa],0x9,0x2441453),_0xce3225,_0x3fdf1c,_0x39c966[_0x418ffc+0xf],0xe,-0x275e197f),_0x2487bb,_0xce3225,_0x39c966[_0x418ffc+0x4],0x14,-0x182c0438),_0x34a891=_0x1670e4(_0x34a891,_0x2487bb=_0x1670e4(_0x2487bb,_0xce3225=_0x1670e4(_0xce3225,_0x3fdf1c,_0x34a891,_0x2487bb,_0x39c966[_0x418ffc+0x9],0x5,0x21e1cde6),_0x3fdf1c,_0x34a891,_0x39c966[_0x418ffc+0xe],0x9,-0x3cc8f82a),_0xce3225,_0x3fdf1c,_0x39c966[_0x418ffc+0x3],0xe,-0xb2af279),_0x2487bb,_0xce3225,_0x39c966[_0x418ffc+0x8],0x14,0x455a14ed),_0x34a891=_0x1670e4(_0x34a891,_0x2487bb=_0x1670e4(_0x2487bb,_0xce3225=_0x1670e4(_0xce3225,_0x3fdf1c,_0x34a891,_0x2487bb,_0x39c966[_0x418ffc+0xd],0x5,-0x561c16fb),_0x3fdf1c,_0x34a891,_0x39c966[_0x418ffc+0x2],0x9,-0x3105c08),_0xce3225,_0x3fdf1c,_0x39c966[_0x418ffc+0x7],0xe,0x676f02d9),_0x2487bb,_0xce3225,_0x39c966[_0x418ffc+0xc],0x14,-0x72d5b376),_0x34a891=_0x42ce6e(_0x34a891,_0x2487bb=_0x42ce6e(_0x2487bb,_0xce3225=_0x42ce6e(_0xce3225,_0x3fdf1c,_0x34a891,_0x2487bb,_0x39c966[_0x418ffc+0x5],0x4,-0x5c6be),_0x3fdf1c,_0x34a891,_0x39c966[_0x418ffc+0x8],0xb,-0x788e097f),_0xce3225,_0x3fdf1c,_0x39c966[_0x418ffc+0xb],0x10,0x6d9d6122),_0x2487bb,_0xce3225,_0x39c966[_0x418ffc+0xe],0x17,-0x21ac7f4),_0x34a891=_0x42ce6e(_0x34a891,_0x2487bb=_0x42ce6e(_0x2487bb,_0xce3225=_0x42ce6e(_0xce3225,_0x3fdf1c,_0x34a891,_0x2487bb,_0x39c966[_0x418ffc+0x1],0x4,-0x5b4115bc),_0x3fdf1c,_0x34a891,_0x39c966[_0x418ffc+0x4],0xb,0x4bdecfa9),_0xce3225,_0x3fdf1c,_0x39c966[_0x418ffc+0x7],0x10,-0x944b4a0),_0x2487bb,_0xce3225,_0x39c966[_0x418ffc+0xa],0x17,-0x41404390),_0x34a891=_0x42ce6e(_0x34a891,_0x2487bb=_0x42ce6e(_0x2487bb,_0xce3225=_0x42ce6e(_0xce3225,_0x3fdf1c,_0x34a891,_0x2487bb,_0x39c966[_0x418ffc+0xd],0x4,0x289b7ec6),_0x3fdf1c,_0x34a891,_0x39c966[_0x418ffc],0xb,-0x155ed806),_0xce3225,_0x3fdf1c,_0x39c966[_0x418ffc+0x3],0x10,-0x2b10cf7b),_0x2487bb,_0xce3225,_0x39c966[_0x418ffc+0x6],0x17,0x4881d05),_0x34a891=_0x42ce6e(_0x34a891,_0x2487bb=_0x42ce6e(_0x2487bb,_0xce3225=_0x42ce6e(_0xce3225,_0x3fdf1c,_0x34a891,_0x2487bb,_0x39c966[_0x418ffc+0x9],0x4,-0x262b2fc7),_0x3fdf1c,_0x34a891,_0x39c966[_0x418ffc+0xc],0xb,-0x1924661b),_0xce3225,_0x3fdf1c,_0x39c966[_0x418ffc+0xf],0x10,0x1fa27cf8),_0x2487bb,_0xce3225,_0x39c966[_0x418ffc+0x2],0x17,-0x3b53a99b),_0x34a891=_0x31b628(_0x34a891,_0x2487bb=_0x31b628(_0x2487bb,_0xce3225=_0x31b628(_0xce3225,_0x3fdf1c,_0x34a891,_0x2487bb,_0x39c966[_0x418ffc],0x6,-0xbd6ddbc),_0x3fdf1c,_0x34a891,_0x39c966[_0x418ffc+0x7],0xa,0x432aff97),_0xce3225,_0x3fdf1c,_0x39c966[_0x418ffc+0xe],0xf,-0x546bdc59),_0x2487bb,_0xce3225,_0x39c966[_0x418ffc+0x5],0x15,-0x36c5fc7),_0x34a891=_0x31b628(_0x34a891,_0x2487bb=_0x31b628(_0x2487bb,_0xce3225=_0x31b628(_0xce3225,_0x3fdf1c,_0x34a891,_0x2487bb,_0x39c966[_0x418ffc+0xc],0x6,0x655b59c3),_0x3fdf1c,_0x34a891,_0x39c966[_0x418ffc+0x3],0xa,-0x70f3336e),_0xce3225,_0x3fdf1c,_0x39c966[_0x418ffc+0xa],0xf,-0x100b83),_0x2487bb,_0xce3225,_0x39c966[_0x418ffc+0x1],0x15,-0x7a7ba22f),_0x34a891=_0x31b628(_0x34a891,_0x2487bb=_0x31b628(_0x2487bb,_0xce3225=_0x31b628(_0xce3225,_0x3fdf1c,_0x34a891,_0x2487bb,_0x39c966[_0x418ffc+0x8],0x6,0x6fa87e4f),_0x3fdf1c,_0x34a891,_0x39c966[_0x418ffc+0xf],0xa,-0x1d31920),_0xce3225,_0x3fdf1c,_0x39c966[_0x418ffc+0x6],0xf,-0x5cfebcec),_0x2487bb,_0xce3225,_0x39c966[_0x418ffc+0xd],0x15,0x4e0811a1),_0x34a891=_0x31b628(_0x34a891,_0x2487bb=_0x31b628(_0x2487bb,_0xce3225=_0x31b628(_0xce3225,_0x3fdf1c,_0x34a891,_0x2487bb,_0x39c966[_0x418ffc+0x4],0x6,-0x8ac817e),_0x3fdf1c,_0x34a891,_0x39c966[_0x418ffc+0xb],0xa,-0x42c50dcb),_0xce3225,_0x3fdf1c,_0x39c966[_0x418ffc+0x2],0xf,0x2ad7d2bb),_0x2487bb,_0xce3225,_0x39c966[_0x418ffc+0x9],0x15,-0x14792c6f),_0xce3225=_0x376ead(_0xce3225,_0x3b73d0),_0x3fdf1c=_0x376ead(_0x3fdf1c,_0x23b7f3),_0x34a891=_0x376ead(_0x34a891,_0x4e886f),_0x2487bb=_0x376ead(_0x2487bb,_0x1e6b44);return[_0xce3225,_0x3fdf1c,_0x34a891,_0x2487bb];}function _0x5a8c38(_0x3cef6a){var _0x50595d,_0x144a04='',_0x520a99=0x20*_0x3cef6a['length'];for(_0x50595d=0x0;_0x50595d<_0x520a99;_0x50595d+=0x8)_0x144a04+=String['fromCharCode'](_0x3cef6a[_0x50595d>>0x5]>>>_0x50595d%0x20&0xff);return _0x144a04;}function _0x3bae3a(_0x437e07){var _0x14198f,_0x208f4d=[];for(_0x208f4d[(_0x437e07['length']>>0x2)-0x1]=void 0x0,_0x14198f=0x0;_0x14198f<_0x208f4d[_0x1cec('0x2')];_0x14198f+=0x1)_0x208f4d[_0x14198f]=0x0;var _0x566899=0x8*_0x437e07['length'];for(_0x14198f=0x0;_0x14198f<_0x566899;_0x14198f+=0x8)_0x208f4d[_0x14198f>>0x5]|=(0xff&_0x437e07[_0x1cec('0x11')](_0x14198f/0x8))<<_0x14198f%0x20;return _0x208f4d;}function _0x1ed6eb(_0x5b5459){var _0x40f15b,_0x500290,_0x2bfd10='0123456789abcdef',_0xd2ed7a='';for(_0x500290=0x0;_0x500290<_0x5b5459[_0x1cec('0x2')];_0x500290+=0x1)_0x40f15b=_0x5b5459['charCodeAt'](_0x500290),_0xd2ed7a+=_0x2bfd10['charAt'](_0x40f15b>>>0x4&0xf)+_0x2bfd10[_0x1cec('0x7')](0xf&_0x40f15b);return _0xd2ed7a;}function _0x24630b(_0x5e1758){return unescape(encodeURIComponent(_0x5e1758));}function _0x47f6ff(_0x3d2e49){return function(_0x3173e1){return _0x5a8c38(_0x286245(_0x3bae3a(_0x3173e1),0x8*_0x3173e1['length']));}(_0x24630b(_0x3d2e49));}function _0x4771b3(_0x5ebf83,_0x50aa1b){return function(_0x5c087e,_0x3f891d){var _0x4f9305,_0x21841f,_0x1ed3c1=_0x3bae3a(_0x5c087e),_0x2b2d1c=[],_0x2e718b=[];for(_0x2b2d1c[0xf]=_0x2e718b[0xf]=void 0x0,0x10<_0x1ed3c1[_0x1cec('0x2')]&&(_0x1ed3c1=_0x286245(_0x1ed3c1,0x8*_0x5c087e['length'])),_0x4f9305=0x0;_0x4f9305<0x10;_0x4f9305+=0x1)_0x2b2d1c[_0x4f9305]=0x36363636^_0x1ed3c1[_0x4f9305],_0x2e718b[_0x4f9305]=0x5c5c5c5c^_0x1ed3c1[_0x4f9305];return _0x21841f=_0x286245(_0x2b2d1c['concat'](_0x3bae3a(_0x3f891d)),0x200+0x8*_0x3f891d[_0x1cec('0x2')]),_0x5a8c38(_0x286245(_0x2e718b['concat'](_0x21841f),0x280));}(_0x24630b(_0x5ebf83),_0x24630b(_0x50aa1b));}function _0x541734(_0x54f490,_0x49b84d,_0x1eb1b3){return _0x49b84d?_0x1eb1b3?_0x4771b3(_0x49b84d,_0x54f490):function(_0x48bf18,_0x4f0614){return _0x1ed6eb(_0x4771b3(_0x48bf18,_0x4f0614));}(_0x49b84d,_0x54f490):_0x1eb1b3?_0x47f6ff(_0x54f490):function(_0x2bc21d){return _0x1ed6eb(_0x47f6ff(_0x2bc21d));}(_0x54f490);}_0x1cec('0x0')==typeof define&&define[_0x1cec('0xd')]?define(function(){return _0x541734;}):_0x1cec('0xb')==typeof module&&module[_0x1cec('0x9')]?module[_0x1cec('0x9')]=_0x541734:_0x17fe86['md5']=_0x541734;}(this);function getOnTime(){return parseInt(new Date()['getTime']()/0x3e8);}function generateRandomString(_0x12e252){const _0x4e94ec='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';let _0x151b70='';const _0x5c27ac=_0x4e94ec[_0x1cec('0x2')];for(let _0x3471f5=0x0;_0x3471f5<_0x12e252;_0x3471f5++){_0x151b70+=_0x4e94ec['charAt'](Math[_0x1cec('0x8')](Math['random']()*_0x5c27ac));}return _0x151b70;}function getPathname(){var _0x248565=$(_0x1cec('0xe'))[_0x1cec('0xa')](_0x1cec('0xf'));var _0x14dace=/^https?:\/\/[^\/]+(\/[^?]*)/;var _0x37aced=_0x248565['match'](_0x14dace);var _0x354261='';if(_0x37aced){var _0x354261=_0x37aced[0x1];}return _0x354261;}var aly_down_url=['57d11.zhanyu66.com','57d10.zhanyu66.com',_0x1cec('0x4'),_0x1cec('0x10'),_0x1cec('0x1'),_0x1cec('0xc'),_0x1cec('0x3'),_0x1cec('0x6'),'57d2.zhanyu66.com','57d1.zhanyu66.com'];for(var ali_i=0x0;ali_i<aly_down_url['length'];ali_i++){if($('#address')[_0x1cec('0xa')]('href')[_0x1cec('0x5')](aly_down_url[ali_i])!==-0x1){var down_timestamp=getOnTime();var down_rand=generateRandomString(0x10);var md5_hash=md5(getPathname()+'-'+down_timestamp+'-'+down_rand+_0x1cec('0x12'));$('#address')['attr'](_0x1cec('0xf'),$(_0x1cec('0xe'))[_0x1cec('0xa')](_0x1cec('0xf'))+'?auth_key='+down_timestamp+'-'+down_rand+'-0-'+md5_hash);break;}}