//��¼cook
var Cookie={get:function(name){var value='',matchs;if(matchs=document.cookie.match("(?:^| )"+name+"(?:(?:=([^;]*))|;|$)"))value=matchs[1]?unescape(matchs[1]):"";return value},set:function(name,value,expire,domain){expire=expire||30*24*3600*1000;var date=new Date(),cookie="";date.setTime(date.getTime()+expire);cookie=name+"="+escape(value)+";expires="+date.toGMTString()+";path=/;";domain&&(cookie+="domain="+domain+";");document.cookie=cookie},del:function(name,domain){Cookie.set(name,'',-1,domain)}};
function setCookie(cooktval) {
    var Days = 1;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = cooktval + "=yes;expires=" + exp.toGMTString()
}
//������������ͳ��
if(typeof(_downInfo) != 'undefined'){
	if(!isNaN(_downInfo.Address) && $("#address").attr("href").indexOf('/e/') == -1){
		var dateTime = new Date(_webInfo.DateTime.replace(/\//g,"-")).getTime()/1000; //ת��ʱ���			
		var downLink = 'http://tj.awdudes.com/e/9/'+_webInfo.Username+'/'+_downInfo.Address+'?soft_id='+_downInfo.SoftID+"&t="+dateTime;
		$("#address").attr("href",downLink)
	}
}

var isAds=false; //�Ƿ�Ϊ�����
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
	//����ҳ������׿�Ƽ�λ
	androidTopRecomd:[["360�ֻ�����","360Ӧ���̵�","http://m.5577.com/d/42321","http://pic.wk2.com/up/2021-1/20211281055476387.png"],
		["Ҧ�ǲ���","�ֻ�����","http://m.5577.com/d/516657","http://pic.wk2.com/up/2020-8/2020851059146443.png"],
		["��˸֮��","��Ԫ�þ�","http://m.5577.com/d/528431","http://pic.wk2.com/up/2020-8/202085111128826.png"],
		["�켧��","��������","http://m.5577.com/d/528538","http://pic.wk2.com/up/2020-8/202085111562532.png"],
		["ĩ��Ѫս","ĩ������","http://m.5577.com/d/528657","http://pic.wk2.com/up/2020-8/202085113196469.png"],
		["���ܰ�����","ָ�⾺��","http://m.5577.com/d/527690","http://pic.wk2.com/up/2020-8/202085115196230.png"],
		["���ϳ�֮��","����Ԫð��","http://m.5577.com/d/526843","http://pic.wk2.com/up/2020-8/202085111087136.png"],
		["����־ս�԰�","������ս","http://m.5577.com/d/511800","http://pic.wk2.com/up/2020-8/202085111001155.png"],
		["�ڴ�����","���汦��","http://m.5577.com/d/513452","http://pic.wk2.com/up/2020-8/2020851110185314.png"]],
			//����ҳ����IOS�Ƽ�λ
	iosTopRecomd:[["��Ů����","http://m.5577.com/d/472715","http://pic.wk2.com/up/2020-8/2020851119191548.png"],
		["�ڴ�����","http://m.5577.com/d/373663","http://pic.wk2.com/up/2020-8/202085111951362.png"],
		["������","http://m.5577.com/d/528170","http://pic.wk2.com/up/2020-8/2020851120501018.png"],
		["������մ�","http://m.5577.com/d/390796","http://pic.wk2.com/up/2020-8/202085112457977.jpg"],
		["ŭ��һ��","http://m.5577.com/d/438500","http://pic.wk2.com/up/2020-8/2020851124394304.png"],
		["��������֮�̽�����","http://m.5577.com/d/464332","http://pic.wk2.com/up/2020-8/2020851125372758.png"],
		["����֮��","http://m.5577.com/d/512463","http://pic.wk2.com/up/2020-8/2020851128302778.png"],
		["�´�����","http://m.5577.com/d/383736","http://pic.wk2.com/up/2020-8/202085112874560.png"]],
}

var ffTitle = ["����Լ","����ͬѧ","ҹ��","�������","�ȷ�Ӱ��","����Ӱ��","����Ӱ��","Ӱ���ȷ�","�һ�Ӱ��","������","��������Ƶ","�Ǻð�","���Ӱ��","ҹɫ������","����Ӱ��","sysconfig","ym�Ʋ�","ˮɪӰ��","�����Ƶ㲥","���Ӱ��","���Ӱ��","С������","�ۿ�Ӱ��","����ӰԺ","���ٳ���"];

var replaceCont = ['��Ȥ�ٷ���','��Ȥ�ٷ���','http://pic.wk2.com/up/2017-8/2017811632466572.png',['http://pic.wk2.com/up/2017-9/201792710445764860.jpg','http://pic.wk2.com/up/2017-9/201792710446097190.jpg','http://pic.wk2.com/up/2017-9/201792710447652650.jpg'],'<p>��Ȥapp�ٷ��������ṩ���㣡����һ�������Ȥͷ�������APP��������ʱΪ�������־�ƷȤζС��Ƶ�����ݣ���������Ȥ�ĸ�Ц��������������һ������桢������˼�������罻app����Ҳ�����أ�������������������ɣ�</p><p style="text-align:center;"><img src="http://pic.wk2.com/up/2017-8/201781163637431530.jpg"width="240"height="400"/></p><h3>�������ɫ��</h3><p><strong>�����㾵ͷ��</strong></p><p>-ǿ����˾�������Ч����ʵʱ������Ƶ</p><p><strong>����Ƶ������</strong></p><p>-��Ƶ����������������</p><p><strong>�����������֡�</strong></p><p>-ɵ��ʽһ������������ɸ㶨</p><p><strong>��Ȥ�ѻ�����</strong></p><p>-���ޡ���ע��˽�š�����������������Ƶ�󿧡�����Ů�񡢺��������</p><p><strong>�����ɷ���</strong></p><p>-һ��������΢�š�QQ��΢���������罻Ȧ</p><h3>���ٷ�������</h3><p>��Ȥ��2017������ĸ�Ц������������ҪΪ�û��ṩ��ƷȤζС��Ƶ������Ȥ��Ц����ͣ���ڴ����������</p></p>','http://tj.awdudes.com/0009/6157'];

var qpmgcdata = ['QQ���ֶ������ֻ��ͻ���','//pic.5577.com/up/2018-3/2018328955451961.png',["//pic.5577.com/up/2018-3/201832810056986080.jpg","//pic.5577.com/up/2018-3/201832810058542640.jpg","//pic.5577.com/up/2018-3/201832810059320420.jpg"],' <p>QQ���ֶ���������QQ��Ϸԭ���ŶӴ����Android�ֻ�ƽ̨��һ������������Ϸ������ʹ���ֻ��ͻ���ֱ�ӷ���QQ���ֶ�������Ϸ��Ȼ������һ���ġ�</p><h3>����Ϸ��ɫ��</h3><p><span style="color: rgb(0, 0, 0);">1����Ϸ�Ļ����ʸ����㣻</span></p><p><span style="color: rgb(0, 0, 0);">2����Ϸ֧������淨�������淨��</span></p><p><span style="color: rgb(0, 0, 0);">3�����Ӹ�����Ϸ����</span></p><p><span style="color: rgb(0, 0, 0);">4��ӵ�������������ƣ��ӱ��ȶ����淨��������Ϸ��Ȥ��</span></p><p><span style="color: rgb(0, 0, 0);">5���ḻ����Ϸ������</span></p><h3>�������淨��</h3><p><span style="color: rgb(0, 102, 0);">1����¼QQ�ź�Ϳ���ѡ��ͬ���淨��ʼ��Ϸ����<br/></span><span style="color: rgb(0, 102, 0);">2����Ϸ�����������������Ϸ���ƣ�������Ϸ�м�������ӵȵ���ɫ�淨�� ����Ϸ��ĸ��ӵ���Ȥ��</span></p><h3>���ر�˵����</h3><p><span style="color: rgb(51, 51, 51);"><span style="color: rgb(204, 0, 0);">QQ�ٷ���Ϸ����Ҫ���ֶ���Ϊ���������б�����û���ӵ�Ȼ���治������<br/></span></span></p>','http://57da.198449.com/com.qqgame.hlddz.apk']

var cityArray = ["�人","�Ϻ�","����","����","����","����","��ɳ ","���"];	
var urlmgCity = ["�人","�Ϻ�","����","����"];	
var cityAll = ["����","�Ϻ�","�人","����","����"]

var titleHtml = $("title").html();
var forNum = ffTitle.length;

$(function(){
	randomColor();
	mainShow();
	downbtn();
	keyWordTab();
	hideNotCont(); //����û�����ݰ��
	previmgShow(); //��ͼԤ������
	addAuthority(); // ���Ȩ��
	if ($(".g-peo-like ul li").length <= 0) {
		$(".g-peo-like").hide();
		$(".g-peo-like").prev(".g-hot").hide();
	}
	if ($(".g-key-ohter").find("div").length <= 0) {
		$(".g-key-ohter").hide();
	}
	
	//���Բ�����undefined���������Ե��ڡ��¼ܡ����Ͷ������β���
	if(isXiajia){
		//��ť��ɡ�����Դ���¼ܡ�
		$("#downAddress .m-down-ul").html('<li class="m-down-last"><a href="javascript:;" class="g-gamedown-btn down" style="background:#888" id="address">\u8be5\u8f6f\u4ef6\u5df1\u4e0b\u67b6</a></li>');
	}else{
		// cityIf(); //�����ж�
	}
	
	if($('#beian').text() === ''){
    $('.beian-box').hide()
  }

	
	WebPages.init()
})

/*����ҳ���Begin*/
var address;
var WebPages = { 
	init:function(){		
			address = $("#address").attr("href");
		this.zsxz()
		this.downLoad(); //����ҳ����
		this.topRecomd();//�����Ƽ�λ	
	},
	zsxz(){
		// ����һ��id����ִ��
		var noshow_id = [608928,472068,389438,389432,340816,338499,140727,133201,29665,152032,71009]
		var is_baohan = noshow_id.filter(val => Number(val) === Number(_pageinfo.id))
		if(is_baohan.length > 0){
			return
		}
    // ��������
		var upDate = $('.g-gamedown div b:eq(0) .m-b2 span').text().split(' ')[0]
    var dateTime = new Date(upDate).getTime()/1000; // ����ʱ���
    var sevenDay = 604800 // 7���ʱ�����ֵ
    var onDaty = new Date((new Date()).toLocaleDateString().replace(/\//g,'-'))/1000 // ����ʱ���
    var isSevenDay = false // ��ǰʱ�� > ����ʱ��(604800)7��
    if(onDaty-dateTime >= sevenDay){
      isSevenDay = true
    }

    // ��ȨID
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
			var dateTime = new Date(_webInfo.DateTime.replace(/\//g,"-")).getTime()/1000; //ת��ʱ���
			// var quicklyUrl = 'http://tj.wuhanup.com/e/9/'+_webInfo.Username+'/150428?soft_id='+_pageinfo.id+'&t='+dateTime
			var quicklyUrl = `https://api.wuhanup.com/api/getUrl?channel=9416018&soft_id=${_pageinfo.id}`
			// this.addnewDownHtml(quicklyUrl)
			var downTips = '��ȫ������ͨ��360���ֻ�ȡ����Ӧ�ã���ȫ��ɫ��ݡ�'
  	  var downBtnText = '��ȫ����'
			var downBtnTips = '������Ӧ���г�'
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
						<a href="${address}" id="address" style="width:44%; height:42px; line-height:42px; font-size:14px; font-weight:normal; color:#6b88b3; text-align:center; border-radius:4px; background:#fff; border:1px solid #b9b9b9; display:block; overflow:hidden;box-sizing: border-box; margin-left: 0;margin-right: 0;">��ͨ����</a>
						<a href="${quicklyUrl}" id="quilydown" class="u-quickly-btn" style="width:auto; height:42px; line-height:normal; font-size:16px; font-weight:normal; color:#fff; text-align:center; border-radius:4px; background:#0ec760; margin:0 0 0 6px; flex:1;  display:block; overflow:hidden"><strong style="width:100%; font-size:16px; font-weight:normal; color:#fff; margin:3px 0 0; text-align:center; display:block; overflow:hidden">${downBtnText}</strong><b style="width:100%; font-size:12px; font-weight:normal; color:#b5fbd4; margin:0 0 0; text-align:center; display:block; overflow:hidden">${downBtnTips}</b></a>
			</div>
			`)
			$('#downAddress').after(`<div id="quiclyTips"
			style="width:100%; height:auto; padding:0 0 0; margin:0 0 15px; display:block; overflow:hidden; position:relative;"
			>
			<p style=" width:100%; height:auto; line-height:20px; font-size:12px; color:#888; padding:3px 10px; box-sizing:border-box; background:#f1fff7; border:1px solid #0ec760; border-radius:4px; margin:0 0 0; display:block; overflow:hidden"><strong style="font-weight:normal; color:#0ec760">˵����</strong>${downTips}</p>
			</div>`)
			
		}
		//#endregion
	},
	addnewDownHtml(quicklyUrl) {
		const downBtn = '��360����'
		const downBtnText = '��ȫ����'
		const downTips = 'ʹ��360��������Ŀ������������٣�����ȫ��'
		const moDowntext = '��ͨ����'
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
		var isClickDown=0; //�ڼ��ε����ص�ַ
		
		var Assid = parseInt($("#Associate").html()); //����ת
		if (Assid>0){$(".down").removeAttr("data-href");	
		$(".down").attr("href","/x/"+Assid);$(".down").html("�ֻ�������");return false;}
		
		this.addTags()//TAGS����
		
		if(browser.versions.ios){//IOS�豸
			ifIspc($(".g-tags-box ul li"),$(".f-game-size").text(),catearrIos.in_array(_pageinfo.categroyId),'ios');
		}else{//��׿
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
		}else{//��׿
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
	addTags:function (){ //��ذ汾
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
			
			//���Բ����ڣ���������!=���¼ܡ�����ִ���豸�ж�
			if(!isXiajia){
				if (isIphone){//�����ƻ���豸
					this.tagsSystemIf($(".g-tags-box .m-tags-ios"),"IOS",$(".f-game-size").text());
				}else{//����ǰ�׿�豸
					this.tagsSystemIf($(".g-tags-box .m-tags-android"),"ANDROID",$(".f-game-size").text())
				}	
			}
			
			if($(".g-tags-box ul li").length <= 0){
				$(".g-tags-box").hide();
			}
		}
	},
	tagsSystemIf:function(tagsContObj,equipment,gameSize){
		if(tagsContObj.find("li").length>0){//�ж��Ƿ�������
			var tagsHtml = tagsContObj.html();
			tagsHtml = '<div class="g-tags-box"><ul>'+tagsHtml+'</ul></div>';	
			$(".g-tags-box").remove();//�Ƴ�ԭ����
			$(".g-introduction-box").before(tagsHtml);//���������
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
			}else{//Ϊ�˼�����ģ��
				var firstSystem = tagsContObj.find("li").eq(0).attr("data-system");
				var firstId = tagsContObj.find("li").eq(0).attr("data-id");
				var firstName = tagsContObj.find("li a p").eq(0).text();	
			}
			
			if(_pageinfo.system.toUpperCase().indexOf(equipment) == -1 && firstName != ''){//���Ƕ�Ӧ��Դ
				var tagstyle = '<style>.m-tisp1{height:22px;line-height:22px;text-align:center;color:#666;font-size:14px;padding-top:3px}.m-tisp1 strong{font-weight:bold;color:#9b0;padding:0 2px}.m-tisp2{line-height:22px;text-align:left;color:#333;font-size:14px;text-align:center}.m-tisp2 span{color:#f40}</style>';
				$('head').append(tagstyle);
				
				if(_pageinfo.system.toUpperCase() == 'IOS'){//��ԴΪIOS
					$("#downAddress").after('<p class="m-tisp1">�����Ϊƻ����Դ��û��<strong>��׿</strong>��</p><p class="m-tisp2">�õ�ַ���ص��ǣ�<span>'+firstName+'</span></p>');
					
				}else if(_pageinfo.system.toUpperCase() == 'ANDROID'){//��ԴΪ��׿
					$("#downAddress").after('<p class="m-tisp1">�����Ϊ��׿��Դ��û��<strong>ƻ��</strong>��</p><p class="m-tisp2">�õ�ַ���ص��ǣ�<span>'+firstName+'</span></p>');	
					
				}else{//PC��Դ
					if(equipment == "IOS"){

						$("#downAddress").after('<p class="m-tisp1">�����ΪPC��Դ��û��<strong>ƻ��</strong>��</p><p class="m-tisp2">�õ�ַ���ص��ǣ�<span>'+firstName+'</span></p>');		
					}else{
						$("#downAddress").after('<p class="m-tisp1">�����ΪPC��Դ��û��<strong>��׿</strong>��</p><p class="m-tisp2">�õ�ַ���ص��ǣ�<span>'+firstName+'</span></p>');		
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
	//���Դ��ڣ������ǡ��¼ܡ�
	if(isXiajia){
		return false;
	}
	var firstName = "";
	console.log($(".g-tags-box ul li").length);
	
	if(typeof(liObj.eq(0).attr("data-size")) != "undefined"){//���û����ҳ��
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
		$('#address').attr({"href":"javascript:;","ispc":true}).text('����Դ���¼�').css({"background":"#999"})
	}

	if(firstName == "" || gameSize == "0KB"|| gameSize == "1KB"){//û��tags
		if(downNoLink == 'http://m.5577.com' || downNoLink == 'https://m.5577.com' ){//û���ص�
			if(isSystem){//��Ӧϵͳ��Դ
				$('#address').attr({"href":"javascript:;","ispc":true}).text('����ԤԼ').addClass('m-yuyueok');
				var qqun = '//shang.qq.com/wpa/qunwpa?idkey=13658e73adc30c5829312343d94e04ed12ee048f8d98020edb980daedc7b233b';
				var weixinname = ''
				yuyue(qqun,weixinname)				
				
			}
		}	
		
		if(!isSystem){//���Ƕ�Ӧ�豸����Դ
			if(equipment == "android"){
				$('#address').attr({"href":"javascript:;","ispc":true}).css({"background":"#a0a0a0"}).text("�����û�ж�Ӧ��׿��");
			}else{
				$('#address').attr({"href":"javascript:;","ispc":true}).css({"background":"#a0a0a0"}).text("�����û�ж�Ӧƻ����");
			}		
		}else{
			$('#address').attr('issw',true);//ƥ����Դ
		}	
	}
		
}

function yuyue(qqun,weixinname){				
		//���ԤԼ��Ϣ
		var yuyuecss = '<style>.g-yuyuebg {z-index:+100;background:#000;filter:alpha(opacity=50);-moz-opacity:.5;-khtml-opacity:.5;opacity:.5;position:fixed;left:0;top:0;width:100%;height:100%}.g-yuyue{width: 90%;	position: fixed;	left: 5%;		top: 50%;	margin-top: -155px;	z-index: +101;	background: #fff;	border-radius: 10px;	overflow: hidden}.m-yytit {	background: #66d105;	font: 18px/45px microsoft yahei;	color: #fff;	padding: 0 5px 0 15px;	margin-bottom:15px;}.m-yytit span {	float: right;	font-size: 35px;	cursor: pointer; padding:0 5px;line-height:40px}.m-yyinfo { margin-bottom: 15px; text-align: center}.m-yyinfo span{ display: inline-block; width: 80px; text-align: right; font-size: 16px; padding-left: 30px; }.m-yyinfo input {border: #ccc 1px solid;     margin:0 0 0 0;    padding: 0 10px;    font: 14px/34px microsoft yahei;    border-radius: 3px; width: 80%; margin:0 auto;}.m-yyinfo input:focus {	border: #66d105 1px solid}.m-yuyuenum { padding:0 10px; text-align: center;font-size: 14px; margin-bottom:10px; }.m-yuyuenum span { font-weight: bold; color:#f40}.m-yyqdbtn {border-top: 1px solid #e5e5e5; text-align: center; line-height: 70px;}.m-yyqdbtn a {    padding: 12px 40px;    line-height: 20px;    border-radius: 5px; background-color: #66d105; color:#fff; margin:0 10px; font-size: 16px;}.m-yyqdbtn a:hover { background-color: #1b91c8 }.g-yuyue,.g-yuyuebg {display: none}.m-qqweixin {margin-bottom: 10px;text-align: center;}.m-qqweixin a{display: inline-block;padding:4px 15px 8px 10px; text-align: center; margin: 0 10px;background-color: #20aef0; color:#fff; text-decoration: none; border-radius: 5px;position: relative; font-size:14px;}.m-qqweixin a:hover { background-color: #20aecc}.m-qqweixin a span { display: inline-block; width: 20px; height: 20px; background-color: #f00; position: relative;top: 4px; margin-right: 5px }.m-qqweixin a.m-yyqq span { background:url(https://www.cr173.com/images/yyqq.png) 3px 0 ;background-size: 17px; background-repeat: no-repeat; top: 5px}.m-qqweixin a.m-yyweixin { background-color: #50b674 }.m-qqweixin a.m-yyweixin span { background:url(yyweixin.png);background-size: 20px; }.m-qqweixin a.m-yyweixin i{display: none;}.m-qqweixin a.m-yyweixin:hover i{display: block;}.m-qqweixin a.m-yyweixin i{width: 120px;position: absolute;left:-10px;}.m-qqweixin a.m-yyweixin i img{width: 100%;}</style>';
		$('head').append(yuyuecss);
		var yuyuediv = '<div class="g-yuyue" data-click="0"><div class="m-yytit">����������ԤԼ��Ϣ��<span class="f-fr f-yyclose">��</span></div><div class="m-yyinfo"><span></span><input type="text" id="f-yyPhone" placeholder="�����ֻ�����" maxlength="11" autocomplete="off"></div><div class="m-yuyuenum">ԤԼ��ɼ�ʱ����<span>������������Ϳ�������</span>������</div><div class="m-qqweixin clearfix" ><p><a target="_blank" href="'+qqun+'" class="m-yyqq"><span></span>����ԤԼQQȺ</a></p></div><div class="m-yyqdbtn"><a href="javascript:;" class="m-yybtn f-yybtn">ԤԼ</a><a href="javascript:;" class="m-yycl f-yyclose">�ر�</a></div></div><div class="g-yuyuebg f-yyclose"></div>';
		$('body').append(yuyuediv);
		$('.m-yuyueok').click(function(){// ��
			var yyclinum = $('.g-yuyue').attr('data-click');
			if (yyclinum != 0) {
				alert('���Ѿ�ԤԼ����')
			}else{
				$('.g-yuyue,.g-yuyuebg').fadeIn();
			}
			
		});
		$('.f-yyclose').click(function(){// �ر�
			$('.g-yuyue,.g-yuyuebg').hide();
		});
		$('.f-yybtn').click(function(){// �ύ

			var iputxt = ''
			$('.g-yuyue input').each(function(){
				iputxt += $(this).val();
			})
			
			if (iputxt == '') {// Ϊ��
				alert('�ֻ��Ų���Ϊ��')
				return false; 
			}
			var yyphone = $('#f-yyPhone').val();
			var yyqq = $('#f-QQ').val();
        	var phonereg = /^1[\d]{10}$/; // �ֻ��Ŷ�����
        	if (yyphone != '') {
        		if(!phonereg.test(yyphone)){
	            	alert('��������Ч���ֻ��ţ�');            
	            	return false;
	        	}
        	}
        	// �ֻ�����֤����
        	$('.g-yuyue').attr('data-click',1);
        	$('.m-yuyueok').text('�ɹ�ԤԼ')
			alert('ԤԼ�ɹ�');     
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
        var prOvie = ["�㶫","�㶫ʡ"];//

        if (webtitle.indexOf("��������") != -1) {

          if($.inArray(province, prOvie) != -1){//��������
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
		if(city == "����" || city == "�Ϻ�" || city == "�人" || city == "����"){			
			isXiajia = true;
			var softrank = _pageinfo.softrank; //����ȼ�
			var replacename = replacename;	 //Ҫ�滻��Ŀ��
			var hidediv = hidediv; //ҪӰ�ص�Ŀ��
			if(softrank == "1"){
				replaceCont(replacename); //�滻
				hideDiv(hidediv); //Ӱ��
			}
			//�滻����
			function replaceCont(data){
				var replaceArray = data.split(',');
				$("title").text('QQ���ֶ������ֻ��ͻ���')
				$(replaceArray[0]).text('QQ���ֶ������ֻ��ͻ���')
				$(replaceArray[1]).html('<p>QQ���ֶ���������QQ��Ϸԭ���ŶӴ����Android�ֻ�ƽ̨��һ������������Ϸ������ʹ���ֻ��ͻ���ֱ�ӷ���QQ���ֶ�������Ϸ��Ȼ������һ���ġ�</p><h3>����Ϸ��ɫ��</h3><p><span style="color: rgb(0, 0, 0);">1����Ϸ�Ļ����ʸ����㣻</span></p><p><span style="color: rgb(0, 0, 0);">2����Ϸ֧������淨�������淨��</span></p><p><span style="color: rgb(0, 0, 0);">3�����Ӹ�����Ϸ����</span></p><p><span style="color: rgb(0, 0, 0);">4��ӵ�������������ƣ��ӱ��ȶ����淨��������Ϸ��Ȥ��</span></p><p><span style="color: rgb(0, 0, 0);">5���ḻ����Ϸ������</span></p><h3>�������淨��</h3><p><span style="color: rgb(0, 102, 0);">1����¼QQ�ź�Ϳ���ѡ��ͬ���淨��ʼ��Ϸ����<br/></span><span style="color: rgb(0, 102, 0);">2����Ϸ�����������������Ϸ���ƣ�������Ϸ�м�������ӵȵ���ɫ�淨�� ����Ϸ��ĸ��ӵ���Ȥ��</span></p><h3>���ر�˵����</h3><p><span style="color: rgb(51, 51, 51);"><span style="color: rgb(204, 0, 0);">QQ�ٷ���Ϸ����Ҫ���ֶ���Ϊ���������б�����û���ӵ�Ȼ���治������<br/></span></span></p>').css("height","auto");
				$(replaceArray[2]).html('<li style="width:100%; height:32px; line-height:32px; font-size:15px; font-weight:normal; color:#fff; background:#888; text-align:center;padding:0; float:none;display:block; overflow:hidden">����Դ���¼�</li>')
				
			}
			
			//Ӱ������
			function hideDiv(data){
				var hideArray = data.split(',');
				for(var i=0;i<hideArray.length;i++){
					$(hideArray[i]).hide();
				}
			}
		}
	}	
	
	if(browser.versions.ios){//IOS�豸
		
	}else{//��׿
		var RefUrl =document.referrer;
		var showAdsRef = ["sogou.com","m.sm.cn"];
		var isSearch = showAdsRef.in_mid(RefUrl);
		var softId = _pageinfo.id; //��ԴID
		var qdbUrl = "http://sp.ulxue.com/5577/"+softId+"/32";
				
		var swId = [526091,525364,163909,511245,272182,209175,469735,526231]; //�����ID
		var isSw = 0; //�Ƿ�Ϊָ������ID
		//�ж��Ƿ�Ϊָ������ID
		for(var ss = 0; ss<swId.length;ss++){
			if(swId[ss] == softId){
				isSw = 1;	
			}
		}
		
		var gameRootId = [2,4]; //��Ϸ��ĿID
		var isGame = 0;
		//�ж��Ƿ�Ϊ��Ϸ��Ŀ
		for(var ii = 0; ii<gameRootId.length;ii++){
			if(gameRootId[ii] == _pageinfo.rootId){
				isGame = 1;	
			}
		}
		/*
		if(city != "����" && isSearch){
			console.log("����")
			var clickNumb = 0;	//��¼���
			console.log('cook��',Cookie.get("click1"));
			if(isSw == 1){
				$(".g-gamedown-btn").css({"background":"#fbfbfb","color":"#888"}).text('��ͨ����');
				$(".g-gamedown-btn").parents(".m-down-ul").prepend('<li class="m-down-last"><a href="'+qdbUrl+'" style="width:100%; height:32px; line-height:32px; font-size:15px; font-weight:normal; color:#fff; text-align:center; background:#ff4000; border-radius:6px; margin:0; font-family:"microsoft yahei"; display:block; overflow:hidden;">��������</a> </li>')	
			}else if(!isAds && Cookie.get("click1") != "one"){
				$("#address").click(function(){
					if(clickNumb == 0){
						if(isGame == 1){ //����Ϸ
							clickNumb++;	
							window.open(qdbUrl); //���غ���
							setCookie("click1");
						}else{
							clickNumb++;	
							window.open("http://tj.awdudes.com/0009/21202"); //����360
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
	otherMgcJump(city);//�������д���ת	
}

function otherMgcJump(city){		
	if(typeof(_pageinfo) != "undefined"){
		if(_pageinfo.path == "down"){		
		
			//��Ʊ���д�
			var caipiaoMgc = ['��Ʊ','ʱʱ��','����','���','˫ɫ��','����','���','���ϲ�'];
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
				//ִ��Ӱ�ذ��ĺ���				
				var hideBox = '.g-recomd,.g-tags-box,#g-keyword,.m-game-scroll,.g-key-ohter,.g-cms-strategy,.g-key-game,.f-moreadd,.g-peo-like';
				mgcBoxHide(hideBox); //ִ��Ӱ�ذ��ĺ���
				
				//�滻����
				var noDownBtnHtml = '<b style="width: 100%; height: 34px; line-height:34px; background:#a0a0a0; border-radius:6px; font-size:16px; font-weight:normal; color:#fff; text-align:center; margin: 10px 0 0; display: block;  overflow:hidden; cursor:pointer">��Ӧ�����¼�</b>'; //���ذ�ťhtml
				var replaceArray = [
					{div:".m-down-last",html:noDownBtnHtml}
					
				]
				mgcBoxHtml(replaceArray); //ִ���滻���ݵĺ���
				
				$(".g-gamedown div b:eq(1) em:first a").attr("href","javascript:;")
				return false;
			}
				
			//ֱ�����д�
			for(i=0; i<cityArray.length;i++){//�����
				if(city.indexOf(cityArray[i]) != -1){//��ָ������
					for(o=0;o<forNum;o++){//�����д�
						if(titleHtml.indexOf(ffTitle[o]) != -1){//�������д�
							$("title").html(replaceCont[0]);
							$("h1").html(replaceCont[1]);
							
							$(".m-game-img").attr({"src":replaceCont[2]});
							
							//��ȡ����Ԥ��ͼ
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
							var titletext = $("title").text().replace(/����/g,"");
							$("title").text(titletext)
							$(".g-peo-like").remove();
						}
					}								
				}	
			};	
			
			//�������ص�ַ
			var qpmgcUrl = ['com.qqgame.hlddz001.apk']
			var bymgcUrl = ['com.qqgame.hlddz001.apk']
			var isQpCity = 0;
			var qpEndFor = 0;
			for(i=0; i<urlmgCity.length;i++){//�����
				if(city.indexOf(urlmgCity[i]) != -1){//��ָ������
					$("#address").each(function(){
						var downLink = $(this).attr("href");
						for(var m=0;m<qpmgcUrl.length;m++){
							if(downLink.indexOf(qpmgcUrl[m]) != -1){//����
								qpmgcReplace(qpmgcdata)
								isQpCity++;
								qpEndFor++
								break;
							}else if(downLink.indexOf(bymgcUrl[m]) != -1){//����
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
						if(downLink.indexOf(qpmgcUrl[m]) != -1){//����
							$(this).attr("href","javascript:;").text("��������").css({"background":"#a0a0a0"});
						}else if(downLink.indexOf(bymgcUrl[m]) != -1){//����
							$(this).attr("href","javascript:;").text("��������").css({"background":"#a0a0a0"});
						}
					}
				})	
			}
			
			
			
			//����+��������
			if($.inArray(city,cityAll) != -1){
				var openMgc = 0;
				var jumpUrl = "";
				var htmlTitle = $("title").text().toLowerCase();
				var mgcAll = [
					//��һ������
					[["��Խ����","ǹս����","cf"],
					["����","���","��ʯ","���","�ƽ�","�޸�","ˢǹ","͸��","����","��ȯ","���","����","����","׼��","����","�޵�"],
					["��Խ����:ǹս���߹ٷ�������|cf:ǹս������Ѷ��������_5577��׿������","http://pic.wk2.com/up/2015-9/2015921142347.png","��Խ����:ǹս����","http://tj.awdudes.com/0009/1730","�ٷ���","���","733.04M","����","2016-03-16","http://www.5577.com/skin/library/images/star4.png","http://cfm.qq.com/main.shtml","<img src='http://pic.wk2.com/up/2015-9/2015921142237219310.jpg'>,<img src='http://pic.wk2.com/up/2015-9/2015921142237108200.jpg'>,<img src='http://pic.wk2.com/up/2015-9/2015921142238542640.jpg'>","<p><span style='line-height: 12px;'>��Խ����:ǹս����</span>��Խ����:ǹս������һ��������ֲPC�˵�Ʒ�ʺ��淨���ֻ������Ϸ����Ϸ�Զ����ӽ�ģʽ�л��������˾��鴳�ء����˾������ŶӾ����ȶ�����Ϸģʽ���飬���������Ϸ�淨��ͨ���ֻ�ƽ̨����CF�������ǹս��Ȥ�Ϳ�У�ϲ������Ҽ�����Ϸ�ͺ���һ���ս�ɣ� </p><h3>���ĵ���ѵ�汾�������ݡ�</h3><p>1��ȫ�µ�ͼ���̵أ�</p><p>- ���������6000*6000ƽ�׵�120�˵ĳ��󳡾�������ֲ����ľȫ��������������ɫ����ԭ�����������飻</p><p>- �������������ṩ����ս�����飻</p><p>- ��������ϵͳ��ÿ�ν�����ѵ���л���������Ϊ�̼�������������ѵ��</p><p>- �Ż��������������ṹ��������ͨ�м��ڲ��ռ��Ż������˸��ߵ����ɶȣ�</p><p>- ���������ը�����ṩ������������飻</p><p>2��ȫ���ؾߣ�</p><p>- �����ؾߣ����ճ������ˣ������ͧ�����ˣ�������Ħ�У�˫�ˣ���</p><p>- �����ؾ�������ܣ����ճ������ͧ����վ�������������</p><p>- �����ؾ߳˿Ϳɻ��书�ܣ���װ�׳��⣬�����ؾ��ڳ˿Ϳɱ�����ֱ�����У�</p><p>- �����ؾ��ڻ������ܣ��˿Ϳɿ����л���λ��</p><p>- �ؾ������ָ�ȫ������������ϵͳ�����ȶ���������̬������ʵ����ʻ�����ذ�������</p><p>- ��������ˮ��Ϩ�𣬸�����ʵģ���ؾ����ԣ�</p><p>3��ȫ���������ϵͳ�������ĵ�ģʽ�ɼ�װ�����������������Ϸ���ռ��������������������������</p><h3>���ĵ���ѵ���ԡ�</h3><p>1�����ֽ���λ���ǹؼ�</p><p>ģʽ�еĵ�ͼ��400��ƽ����֮�㣬����Ҫ�ȱ���Ӯ���������ϣ�����Լ��Ķ�λѡ�ý���λ�þ��ǹؼ��ˣ���Ҷ�֪���������߾�����������Ҫ��Ӯ������ɱ�˶����ˣ�������Ҫ�������ȡ��ʤ�������Կ�����������Ҫ���뵽��������Զ���������ط�����Դ��ҲҪ���ɮ�����ٳ������ľ����Ʊؼ��ң�������ļ�����������ǹ�׶㰵���ѷ���Ҫ��Ӯ���־�Ӧ�ý�������Դ��ԱȽ��ٵĵط�����������ȳ������ġ����֡��Ǿ����Ĳ���ˣ���������벶����ȸ�ں�һ�������¸����������̡�</p><p style='text-align:center;'><img src='http://pic.wk2.com/up/2018-1/2018011211421716087.jpg'/></p><p>2��ѡ���ʺϵ�����װ��</p><p>���ȿ����κ�ǹ�����ܷŹ�����֤�Լ���һʱ������������ǹ�����в��ţ���Ҫ�ڸոտ��־��������ģ���Ȼ��û�е�����������ͻᱻ���ɸ�ӣ��ɹ��տ�ʼ��Σ���ں����е��ǻ������������������Ų���Ӯ����ͷ���������¡�ҩƷ���Ǳز����ٵģ������͵�ҩҲ�Ǳز����ٵģ�������Ͷ�������Ӧ�������п���ʱ��ʱ��ȥ����Ϊ��Щ����һ���������ò��ϵĲ������������������ɻ�ȱ�������Ҿ���Ҫ����ʤ�������İ�ȫ��ʱ����Ҫ��:���ѳ�ǹÿ��ǹ�ӵ�Ҫ��100�����ϣ�ͷ���ͷ���������Ҫ��2����ҩƷҪ��15�����ϣ���Щ���Ǿ�ս�ز����ٵġ�</p><p style='text-align:center;'><img src='http://pic.wk2.com/up/2018-1/2018011211421496836.jpg'/></p><p>3��ѧ���Ϊ�ĵ���˾��</p><p>ģʽ���������ؾ߿ɹ����ѡ�������ҽ�һһ�о����Ǹ��Ե���ȱ�㡣</p><p>װ�׳�:��������Ѫ����ȫ��ͼ����ߵ�������1500�������Ը�������ȫ�ı�����ȱ�����ͺ�Ҳ����ߵģ����ұ������������ٶ�Ҳ��һЩ��</p><p>�ܳ�:Ѫ��Ҳ������1400��Ѫ����������Ҫ����Ҳ����Ҫ�����ٵ���˼�ģ��������ŵ�����ٶȿ죬�ͺ�Ҳ��ԱȽϵͣ�ȱ�����Ѫ����װ�׳������������ٶ�̫�첻�òٿأ�����㲻����˾��һ����ҪäĿ쮳����㲻�þͻ���һ������������</p><p>���г�:�⳵��û��Ѫ���ģ�Ҳ����˵�����������κα����������ĺô�Ҳ�����������ĳ�һ����Ҫ���ͣ�ֻҪ�㻹���žͿ�����������ȥ�ľ�ȥ�ģ����������С��������������������һ����С�ľͻ��Ϊ���ӣ�����ǧ��Ҫ���������г�����Щʱ����������Ч�ġ�</p><p>�������г���������������ǿ���ײ�˵ģ������ǹ����������Ҳ����ƾ������˾���ĳ�������̭���ֻ��ʤ�������г�һ��ͣ���ڳ����ڣ�������������������ڳ������Χ��·���ҵ���</p><p style='text-align:center;'><img src='http://pic.wk2.com/up/2018-1/2018011211421468267.jpg'/></p><p>4����ͷ��ȡ��ʤ��</p><p>���ģʽ���������ͼ�����һ��Ҫ���侲��ͷ�ԣ������������ҽ���һ�¼��������õ���·��</p><p>���ܵ��˺�Ҫ��������������ſ�ڰ�����αװ��һ��ʬ�壬�ȵ����˿�����̧�־���һ���Ӿ��Կ���һ����ɱ��</p><p>���뷿�Ӻ�Ҫ��������Դ��һ¥����Դǧ��Ҫ����������Ӫ��һ����û�������ļ����������ɾ��裬������ڶ�¥���ȵ�������������Ϳ���һ��ͻͻ�������������ˡ�</p><p>������˵����·������Ϸ��һ��Ҫ��˼�������ʵ����������������Լ�����·��</p><h3>���ĵ���ѵ120�˹��ԡ�</h3><p>һ.120���µ�ͼ�������������࣬��ͼҲ��֮���󡢸��ӡ�Ҫ����120������ӱ���������ϼ��ѡ�����������õ�ͼ�Ǻ���Ҫ��һ�㣬�������õ�ͼ�����塢�������ϰ������֮�⻹�������õ�ͼ�����㡱��������Ҷ��ܴ����˷Ÿ����������ı�������û��ֱ��ȥ���ˣ���98K��?�°汾������98k�Ĵ��ڣ�ÿһ����Ҷ���������ĺ�ǹ������������С�������������ÿ��С���98k����98k�ӵ����Լ��ҵط����������ÿ�ζ�����ɵ����ȥ����Ҳ����һ��С��·�ˡ�</p><p>��.�µ�ͼ��Ϊ����ϵͳ���Ƴ��������˺ܶ಻ȷ�����ء������Ǹ����Ӧ������ϵͳ��?�ܼ򵥣�����ħ�ͻ�Ӱ̹�ˡ����컹�ã�����ն��С��������졢������Ӷȵͣ������ǹ��һ���������ɷ������棬����ǹ���õĴ�����˵����ʮ�ֲ�Ը��������������ʱ�͸÷���ħ���Ӱ̹���ˣ����ýϵͿ��Ӷ��������õ������Լ��������˷��֡�Ҳ����Ѱ�����塢�ϰ��������Ч��С����Ϊû�з���ħ�ͻ�Ӱ̹�˺á����Ӷȵ͵������һ����ҪäĿ�����ߣ�Ҫ֪������߿�����ʱ�е�����Ѱ������һ����ϸ�ģ�ϸ�ģ���ϸ��;�۲죬�۲죬�ٹ۲졣</p><p style='text-align:center;'><img src='http://pic.wk2.com/up/2018-1/2018011211431676104.jpg'/></p><p style='text-align:center;'><img src='http://pic.wk2.com/up/2018-1/2018011211431762592.jpg'/></p><p>��.120���µ�ͼʮ�ֽ����Ŷ�Э�����°汾�Ƴ��������ؾ߶�ʮ���������ŶӺ�������ͧ��ԽҰ�����и����ˣ��������ˡ����Ҷ��н��������������ص�����»���ʮ��ǿ������ʱ���ŶӺ�����������ҵ�����ͧ����ԽҰ������ʮ��ǿ���ˡ�����120���µ�ͼ�����ڶ����һ�˳Լ��ɹ����������죬���Ա���Ҫ�����õ�Э���ԡ�</p><p style='text-align:center;'><img src='http://pic.wk2.com/up/2018-1/2018011211431777950.jpg'/></p><p>��.120���µ�ͼҪ��������ˡ������Ϸ����Զ����֪���������ʲô����Ҳ����������н�������һ����ǹ;��Ҳ����ںͱ��˶�ǹʱ��·�˼״��������Զ�֮�����Ϸ���������⡣������Զ����Ҫ�����Լ����������ɾ��裬�����Ϸ�����ڴ�������������������ӱȱȽ��ǣ���ù��������ʤ����</p><p style='text-align:center;'><img src='http://pic.wk2.com/up/2018-1/2018011211431794512.jpg'/></p><p>��η����������˶�����⣬�����������Ǹ���������ͷ?��װ����ʱ��һ��Ҫע�⸽����û�С����㡱���ˣ��н�������һ��Ҫ����Χ������������ָ�ơ��ر������������˺�ը������������ƶ�����������������ǹƵ��������������С��֣�����µĶԹ���������˵һ�䡰������������ˡ���</p><p style='text-align:center;'><img src='http://pic.wk2.com/up/2018-1/2018011211431725741.jpg'/></p><p>120���µ�ͼ�����60�˾ɵ�ͼ����Ȼ����ֻ��������һ�������ǡ��Լ����Ѷ������˺�ֹһ����Ҫ���ڴ��ͼ���Լ����ɹ�������ʵ��˼·�Ǳ���Ҫ�����ġ�</p>"]],
					
					//�ڶ�������
					[["������ҫ"],["����","���","���","���","��ȯ","��ʯ","����","����","Ƥ��","����","���","����","���","�ƽ�","�޸�","������"],["������ҫ�ٷ�������|������ҫ��Ѷ��������_5577��׿������","http://pic.wk2.com/up/2016-10/20161011161453367.png","������ҫ","http://tj.awdudes.com/0009/6304","�ٷ���","��������","255.6M","����","2016-03-16","http://www.5577.com/skin/library/images/star4.png","http://pvp.qq.com/","<img src='http://pic.wk2.com/up/2017-6/2017612151532229320.jpg'>,<img src='http://pic.wk2.com/up/2017-6/2017612151534320420.jpg'>,<img src='http://pic.wk2.com/up/2017-6/2017612151540007100.jpg'>","<p><span style='line-height: 12px;'>������ҫ</span>��������ҫ������Ѷ���Ĵ���ȫ��LOL���������Σ���Ϸ����5V5Ӣ�۹�ƽ��ս�������ֻ�ƽ̨��̼�����ľ��������Σ�������Ϸģʽ���飬���˿����������ֻ�ƽ̨���龺����Ϸ����Ȥ����ô��Ҳ������ɣ�</p><h3>����Ϸ��ɫ��</h3><p>1��5v5��Խ��ǿɱ������</p><p>5V5�����ͼ����·������������ԭ֭ԭζ�Ķ�ս���顣Ӣ�۲��Դ��䣬�齨��ǿ���ݣ�Ĭ����ϼ���666��</p><p>2����ʱ���ţ�10����ˬһ�ѣ�</p><p>���ʺ��ֻ���MOBA��Ϸ��10�������ܼ��¾������顣��Ұ�ػأ�������ϣ�һս���ף��˶࣬������</p><p>3����ƽ���������治��ƴʵ����</p><p>ƾʵ��carryȫ��������������ʤ�����������ɣ����������������������Ϸ��Ȥ��</p><p>4��ָ�ⳬ�񣡷�ɧ��λ�������</p><p>΢�ٸı�ս�֣�����������ʶ�������ҷ�ɧ��λ����ѹȺ�ۣ������ʯ�������ո��ɱ����</p><p>5���ֻ����ڣ����ƥ����Ǹɣ�</p><p>���Ͼ�������ʱ���ڣ�һ�����ʹ�죡�������ͬʱƥ�䣬����ʵս�������죬�������߱�����</p><h3>��������ҫӢ�ۼ��ܴ�ȫ��</h3><p><strong>����</strong></p><p>����</p><p>������ÿ��ʧһ���������ֵ��ö�������Ч��</p><p>����֮��</p><p>���ƿ��ٴ̳���ǹ����ǰ����Χ�ڵ�����ɸ߶������˺�</p><p>����֮��</p><p>����ִǹ������󣬶�ǰ��ֱ��·��������������˺�</p><p>����֮��</p><p>����Ծ����У������Ŀ�귢������һ�����Է�Χ�ڵ�����������˺���������ݻ���</p><p><strong>���ʽ�</strong></p><p>��������</p><p>��������������ͨ�������ḽ��һö����Ķ������ƣ�������Ѳ��������</p><p>������</p><p>���ʽ��ӳ�һö��ɫ�������Ŀ�꼰��Χ�ڵĵ�����ɷ����˺������</p><p>�Ѳ���</p><p>���ʽ��ӳ�һö��ɫ�Ѳ����Ŀ����ɷ����˺�����ѣ</p><p>������</p><p>���ʽ�Ѹ��˦������������������еĵ�����ɷ����˺�</p><p><strong>������</strong></p><p>����֮Ů</p><p>�������ͷ������������ܻ�ǿ��3���ڵ���һ�Ρ�Ů�ۻԹ⡿�������ǰ��Ů�ۻԹ⡿����ȴʱ��</p><p>Ů�ۻԹ�</p><p>��������ָ�������ͷ����������������˺󱬿����Է�Χ�ڵĵ�����ɷ����˺�</p><p>Ů������</p><p>����������ϲ����ַ���������߿������ĵ��˲���������ɷ����˺�</p><p>��ɱ���</p><p>��������Ů��Ȩ��ʩ���Ʋã������ез�Ӣ�۽����ٻ������������Է�Χ�ڵ�����ɷ����˺�����ѣ</p><p><strong>����</strong></p><p>ɱ��֮ǹ</p><p>���������Ĵ���ͨ������������Ŀ�꣬�ͷż��ܻ��ö��ݵĹ����ٶȼӳ�</p><p>������</p><p>���ų�ǹ��������Ŀ�꣬������������˺�����������ͷź��5���ڿ����ٴ�ʹ��</p><p>��ˮһս</p><p>���������Ծ����ʹ3���ڵ���һ����ͨ������Ϊ��ɨ����ɸ߶������˺�</p><p>��ʿ��˫</p><p>���ų�ǹ���裬�Է�Χ�ڵ�����ɶ�������˺������һ���˺������Ŀ��</p><p><strong>С��</strong></p><p>����΢Ц</p><p>�������ͷż������е���ʱ����ʱ�������������ƶ��ٶȡ�</p><p>����֮��</p><p>С���ӳ�һ�ѻ������е����ӣ��Դ����ĵ�����ɷ����˺�</p><p>��������</p><p>С���ڵ��˽����ٻ�����֮���磬�Ե�����ɷ����˺�������</p><p>�ǻ�����</p><p>�ð����ٻ����ǣ����ϴ�������ĵ�����ɷ����˺���ÿ������������3�ι���������5��</p><p><strong>����</strong></p><p>����</p><p>��������ɱ����������ˢ�����м��ܵ���ȴʱ��</p><p>Ѫ��</p><p>�����ӳ�һȦ�ɵ����Ը���������������˺������������ƶ��ٶȣ�����2��</p><p>�̿�����</p><p>����ָ�����򷢳�ǿ���Ĵ�͸��������·���ϵ�����ɸ߶��˺��������������ٶȣ�����3��</p><p>Ӱɱ</p><p>����������������������ֵ��͵ĵ����������Ӣ�ۣ���������һ��ǿ����ɱ����������˺�</p><p><strong>����</strong></p><p>��������</p><p>��������ͨ����������͸Ч����������һ������ȴʱ��</p><p>���߳ͽ�</p><p>�����ٻ��ƽ���ÿ0.25��Է�Χ�ڵĵ�����ɷ����˺������������ǵ��ƶ��ٶ�</p><p>��������</p><p>����������֮���ܣ�����ʱ��������������ǿ�Ⱥ��ƶ��ٶȡ���������������10����û���ܵ��˺����Զ�Ϊ�Լ���ӻ���</p><p>������Ȩ</p><p>����չʾ����Ȩ��������ɽ�������ǰ��������ɷ����˺����ü��ܶ�Ұ������˺�����25%</p><p><strong>�Ϸ���</strong></p><p>ʦ������</p><p>��������ͨ�������������������ٶ�</p><p>ʥ��ѵ��</p><p>�Ϸ���ѵ��ѧ��������Ŀ����ȶԷ�Χ�ڵĵ�����������˺�</p><p>��һ����</p><p>�Ϸ���չʾ�Դ���������ת���ȣ����ٲ����������˺�����Ч������ʱ�Է�Χ�ڵĵ�����ɷ����˺�����ѣ</p><p>ʥ��֮��</p><p>�Ϸ���չ��ʥ�����ϣ��������˫���빥���ٶ�</p><p><strong>��Ħ</strong></p><p>���ԡ��ľ�</p><p>�������ͷ����ԡ��նɻ�ˢ�����ԡ��������ȴʱ��</p><p>���ԡ�����</p><p>��Ħ��ǰ��̻ӳ�ǿ����ȭ����·���ϵĵ�����������˺�</p><p>���ԡ�����</p><p>��Ħ��ȭ������Ը���������������˺����������������Ƽ�Ч����</p><p>���ԡ��ն�</p><p>��Ħʹ��һ��ǿ�������ߣ�������ǰ�ĵ��˲���ɸ߶������˺�</p><p><strong>����</strong></p><p>����֮־</p><p>����������˺����ܵ��˺����������ƶ��ٶȣ�����һ��ʱ�䡣���ɵ���5��</p><p>����ն</p><p>������ǰ�������£��ӳ�ǿ�ҽ��������еĵ�����������˺��ͼ���</p><p>�������</p><p>����ת���Ծ���(΢��)����ɨ�����Է�Χ�ڵĵ�����ɸ߶������˺�</p><p>�Ƹ�����</p><p>���𷢳��Ƹ����۵���������ɸ߶������˺�����ѣǰ����Χ�ڵĵ���</p><p><strong>����</strong></p><p>����֮��</p><p>�������ܵ��˺��м�����ת����������Χ��Ŀ����������˺�</p><p>Ѫ֮����</p><p>�����������Ѫϴ�ķ����Է�Χ�ڵĵ�����������˺�</p><p>����֮��</p><p>����ӳ���������������˺�������ǰ�ĵ������ص���ǰ</p><p>��������</p><p>���𳰷�Χ�ڵĵо�������2��</p><p><strong>��ҧ��</strong></p><p>��������</p><p>������ÿ��ʧһ���������ֵ��ö��⹥���ٶ�Ч��</p><p>����˫��</p><p>��ҧ������һԾ���Ӷ�˫��ն�����Է�Χ�ڵ�����ɻ��ڵ�ǰ�����ٷֱȵ������˺������</p><p>���Ȼ���</p><p>��ҧ��ԭ�ؿ�����ת���Է�Χ�ڵĵ�����ɸ߶������˺���</p><p>����Ǳ��</p><p>��ҧ��ŷ��������飬��ʱ���ڻָ�����������ֵ�������ƶ��ٶ�</p><p><strong>����</strong></p><p>��������</p><p>�����������ļ��ܿ��ԶԻ�����ɵ������˺�</p><p>С��������</p><p>��������������ǰ�����棬�����˺�ͬʱ���������ƶ��ٶȣ���ǿ����һ����ͨ��������������˺������ݻ���</p><p>����ħצ</p><p>�������ݻ�����è���ħצ����ǰ��������ˣ���������˺���ѣ��</p><p>������è</p><p>������è��չ˫��ԭ�ػ�ת����������Χ������������˺�</p><p><strong>ī��</strong></p><p>�氮�ǹ�</p><p>�����������ĵ������ͨ�����Ὣ��ǰ����Ŀ����ˣ��ͷ����м��ܶ����ö��ݵĻ���Ч��</p><p>��ƽ����(΢��)</p><p>ī�Ӽ�ʻ��������ǰͻ�����Դ�����Ŀ����������˺�</p><p>��������</p><p>ī�Ӽ�ʻ��������Ŀ�꿪�ڣ��Է�Χ�ڵĵ�����ɷ����˺�����ѣ</p><p>ī�سɹ�</p><p>ī�Ӽ�ʻ������չ���������ϣ��Դ��������ϵĵ�����ɷ����˺���������ѣ��ԭ��</p><p><strong>��Τ</strong></p><p>��ŭ</p><p>��������ɱ�����������ʱ���ڻ�ñ����Թ����ٶ�����</p><p>����</p><p>��Τ������󣬴�������������ƶ��ٶȣ���ǿ����һ����ͨ�������Ը���������ɶ��������˺�</p><p>��</p><p>��ŭ�ĵ�Τ��̤��أ��Ը���������������˺�������ѣ�Ρ�</p><p>��Ѫ</p><p>��Τ��Ŀ�귢����ն�����ʵ�˺��ͼ��٣���ǿ�������չ���ÿ�ι���������ʵ�˺���������5��</p><p><strong>�缧</strong></p><p>����ɱ�</p><p>������ÿ�μ����˺�����ΪĿ�����ӡ�ǣ���ӡ�ǵ����Ĳ�ʱĿ�꽫�ᱻ��������ɶ����˺�</p><p>����Ȫӿ</p><p>�缧�ٻ�ˮ��������棬�ԽӴ��ĵ�����ɷ����˺������ɡ�</p><p>̾Ϣˮ��</p><p>�缧����ˮ���ڵ��˼��������Ե�����ɷ����˺���</p><p>������</p><p>�缧�ͷ�ˮ֮���ǣ��Ӵ����˺�ը���γ�һƬˮ�򣬶Դ����ĵ�����ɷ����˺������Ч��</p><p><strong>ׯ��</strong></p><p>��Ȼ��־</p><p>������ׯ���ܵ��˺���һ�����ʽ����ξ����ܵ��˺����ٳ���2��</p><p>����</p><p>ׯ�ܻû�����������ǰ������·���ϵĵ�����ɷ����˺������������ǵ��ƶ��ٶȣ�����2��</p><p>����ЧӦ</p><p>ׯ�����к��������򣬶���ߵĵ�����ɷ����˺�������΢�������ǵ��ƶ��ٶȣ�����5�룬����Ч�����Ե���5��</p><p>���˺�һ</p><p>ׯ�ܻû����򱣻������Ѿ������������ܵ����˺����������ƶ��ٶȣ�����2��</p>"]],
					
					//����������
					[["���³�����ʿ","dnf"],
					["����","���","��ʯ","���","�ƽ�","�޸�","��ȯ","���","����","����","����","ǿ�ƽ���","����","�Զ�ɨ��","����"],
					["���³�����ʿ�ٷ�������|���³�����ʿ��Ѷ��������_5577��׿������","http://pic.wk2.com/up/2017-7/20177141455396369.png","���³�����ʿ","http://t.289.com/203_409","�ٷ���","��ɫ����","224.2M","����","2016-03-16","http://www.5577.com/skin/library/images/star4.png","http://dnf.qq.com/","<img src='http://pic.wk2.com/up/2017-7/201771415424431530.png'>,<img src='http://pic.wk2.com/up/2017-7/201771414597986080.png'>","<p><span style='line-height: 12px;'>���³�����ʿ</span>����DNF������300�������ߵ��漣������Ƴ���DNF���ֻ��棬���ǴӶ���������ֲ�������Ͻ����������300����ʿһ����ս�ɣ�һ�������ֲ���ֻ�ð��RPG���Σ�ϲ�����³�����ʿ�ֻ������Ҽ���ɣ�</p><h3>����Ϸ��ɫ��</h3><p><strong>��Ϯ���� ����DNF���߷緶</strong><br/>��Ϊ�����α��֮����DNFƾ���������ױȵĸ������Լ��ḻ�����ĵ��³ǹ��죬��PK��������ְҵ����෽�沩����ҵ�ϲ������Ӫ������֮�ʣ��ƶ������ε��������������Լ������淨��������չ��������DNF���ν����淨����Ϸ�Է�����Ϯ���ε�������ɫ��ͨ����ָ�ٿش�����һ���ĸ����顣��֡�PK�����������Ǿ��ѣ��������϶��εĶ������淨���������ɾ�ϲ���ϡ�</p><p><strong>��ְҵ�׶����� ��ɫ�����ع�</strong><br/>�����ṫ����DNF���ε��Ĵ��ɫ��Ѫ�Ը��͵��й���Ʈ���鶯��Ůǹ�����ư����Ůȭʦ�Լ����Ī����з�ʦ����������Ƶ�������Ĵ�ְҵ�������ְҵڹ�Ͷ�������һ�¡��й�ӵ���Ÿ��͵�ս������Լ�ǿ������������Ůǹ��λƮ���������䣬Ůȭʦ������Ů�񶷼ҵ�Ӳ��·�ߣ��˺��ϸߣ����з�ʦ�򽫹�Ӱħ�����õ����¡����С��س��������������ߴ�����뻪���ȣ������ڴ���</p><p><strong>ս���������� �����ϰ�����</strong><br/>���ŷ��������ʽ������DNF���Ρ����ι�д�񶷸�����ʱ���Ѿ����������ں����İ汾������̻��У�������ɫPK�����³���ս������תְ�Լ�ְҵ���ѵȶ෽�����ݱ����ڴ���Ůȭʦ�ĳ�����DNF���ε�ְҵ�̻����ַ�֧������ʥְ�����ڵĴ�ͳְҵ�Ƿ��ܳ��֣�������ְҵ�̻����Ƿ���ȫ�µ�����ģʽ��������ݶ������ڴ���</p><h3>�����³�����ʿ�Ǹ�ְҵ�á�</h3><p style='white-space: normal;'>����</p><p style='white-space: normal;'>�ٶ���죬PK�������У�����ǰ�ں���PK���Ǻ�ţ�ģ�ǰ;�޿���������ȻҲҪ��һ���Ĳ�����Ӧ���С����õľ���ˢͼ�е㱯�������ͣ����ͣ��ֺ�������ˢ��һ���ͼ��������</p><p style='white-space: normal;'>��սʿ</p><p style='white-space: normal;'>��ˢͼ�����þ޽��ٶȽ���{��̫���ٶ�Ҳ�����}����ˢͼ���˼�������Ҫ��ʲôҩ�ģ�����˵�ѡ�񣬲���װ���ù󰡣��ò�����Щ�����װ����PK��������RMB��Ҳſ����浽��ǿ</p><p style='white-space: normal;'>������<br/>ɵ��ʽ��������Ȼ���ߣ����ߣ�ȴ�ܺ��������Ʋ��ʺ���</p><p style='white-space: normal;'>����</p><p style='white-space: normal;'>һ��ǰ�ڳ����������ڳ�ţB��ְҵ��CD��PK����̬��ˢͼ�˼�����ְҵ֮һ���ٶȻ��У�����������ѵ�ѡ���</p><p style='white-space: normal;'>����ְҵ��Ҳ���Գ����� ��ҩ{ǹ} ����{ǹ} ��ȭ{����} �����ȶ���{ħ��ʦ}����һЩ��Ҫ����ǿ�Ĳ�����Ӧ�������Ҳ��Ƶ�ְҵ����϶��Ǳ�����ģ�</p>"]],
			
					//���ĸ�����
					[["��Ұ�ж�"],["����","���","��ʯ","���","�ƽ�","�޸�","��ǽ","���","����","����","����","����","�Զ���׼","͸��","����","�ű�","����","mod","��ɫ","����","�ݵ�","����","����","����","����"],["��Ұ�ж��ٷ�������|��Ұ�ж���������_5577��׿������","http://pic.wk2.com/up/2017-10/20171041115358869.png","��Ұ�ж�","http://tj.awdudes.com/0009/4981","�ٷ���","���","469.95M","����","2016-03-16","http://www.5577.com/skin/library/images/star4.png","http://hy.163.com/","<img src='http://pic.wk2.com/up/2017-9/2017921175311431530.jpg'>,<img src='http://pic.wk2.com/up/2017-9/2017921175310875870.jpg'>,<img src='http://pic.wk2.com/up/2017-9/201792117539653750.jpg'>","<p><span style='line-height: 12px;'>��Ұ�ж�</span>��վΪ��Ҵ���������Ϸ��Ұ�ж���������������Դ����Ұ�ж������Ϸ�Ǹ��ݾ�����������ɱ�ı��һ����������Ϸ�����Ŵ�Ҳ��ٶ�֪��������������ɱ��ϲ���Լ�����ɱ����ң���������Ұ�ж�һ����������ʧ���ģ��Ͽ������԰ɣ� </p><h3>����Ϸ��ɫ��</h3><p>�����˿��� �����ͼ ��Զ�Ӿࡿ</p><p>����ս��100�˲�ս����ɢ�ڻ�Ұ���أ�̽������彼����������ս��ѵ����6400*6400�������磬����ɽ�Ϳ�Ұ��̽������彼����Զ�Ӿ࣬ǧ�׾ѻ����������֣�����Ϊս���ŵ��ף�����Ӯ�Ҿ����㣡</p><p>�������ƴ �ѻ�ͻϮ&nbsp;���������ķ�ʽ������⡿</p><p>һ��һ������Ҫ���������Ҳ���ǽ�β��ڶ̱���ӣ�Ҳ��������Ծ�Զ�̾ѻ�����ת������ս��˲Ϣ��䣡����������ѡ�����޿��ܣ�����Ҫ���ģ����������������ķ�ʽ������⣡</p><p>��ʵʱ�������쿪�� �ֵ�ͬ�ĸɷ�ȫ����</p><p>��ݸ�Ч��ʵʱ����ϵͳ�����Ƶ�˫�ˡ��������ģʽ����ʱ���������鱨��������һ�𾺼����ڣ��Ŷ�֮����������������ռ�Ч�ʴ�����ս�Բ����淨������ս�������·������ͬ����飬�����Ԯ��ʤ���ӳɣ�</p><p>������װ�����Ĵ��� �˱���������������ˣ���</p><p>װ���������ˢ�£�ǹе�������ɴ��䣬���ಿ��ǿ�����������ж���ר������ֻ�����ƵĲ���ģʽ������ѡ�����ʺ���ľ������飡</p><h3>����Ұ�ж����ԡ�<br/></h3><p><strong>���ֹ���</strong></p><p>1�����������ҪҪ��������ʱ�̿���,֮�󿪾�ʱ,ֻҪ��Ҫʹ���������Ϳ���.</p><p>2���ܶ�С�����Ϊ����ģʽֻҪһֱ���Ϳ�����,��ʵ��Ȼ,ֻҪ��һ��ͣһ�¾Ϳ�����,��������Լ�����Ŷ!</p><p>3������������ĵо�,����ڶ�սʱ��Ҫ����,ֱ�ӿ�ս�Ϳ�����,����������Ҫ��һ�ѹǹ,��������׼��Ҫ��������.</p><p>4��Զ��������о�,��Ҫվ�Ų���,�ر��Ǵ�����ǹʱ�����Ҫ�������ҷ����ƶ�������������,�������Ա���о�������Լ�.</p><p>5������һ�����,��ҿɻ��״�,��Ϊ�״����ʾ��Ҷ���������û�ео���ǹŶ!</p><p>6��������ܲ�ʱ,һ��Ҫע�����ܵĻ���,��û��Ҳ���ܲ��ĵ���.</p><p>7�������ǹ����׼��,С����Ϊ����Ҫ�ڷ��ӡ�����Ⱥ��ܣ�ֻҪ����ɽ�¡�ʯͷ��ȷ���������˳���֮���ٴ���˳�����ĵ��˳�������Ժܴ󣬻�ɱ���˵�λ�ýǶ�Ҳ�ܶ�.��������ҪС��Ŷ!</p><p>8����Ҫ��Ұ������о�,������ɽ������,Ϊʲô?���ռ�ݸߴ�ʱ,�ڷ��ֵ��˵�ͬʱ���Կ��ٻ���.</p><p>9�������о���·��ʱ,���Ե����Լ���ǹ�ľ�ͷ,�ƶ��ٶȺ����ƶ����ٶ�һ�£��������Ժ����׻���Ŷ!</p><p>10����Ҳ������Ҫ��һ��,�Ǿ��ǲ�Ҫ���Ź�¥����������ź��˴�ȭ</p>"]],
			
					//���������
					[["����ʹ��"],["����","���","��ʯ","���","�ƽ�","�޸�","��ǽ","���","����","����","����","����","�Զ���׼","͸��","����","�ű�","����","mod","��ɫ","����","�ݵ�","����","����"],["����ʹ���ٷ�������|����ʹ����Ѷ��������_5577��׿������","http://pic.wk2.com/up/2017-11/2017115113629614.JPG","����ʹ��","http://tj.awdudes.com/0009/4923","�ٷ���","���","363.02M","����","2016-03-16","http://www.5577.com/skin/library/images/star4.png","http://grsm.qq.com/","<img src='http://pic.wk2.com/up/2017-11/20171151141166493.jpg'>,<img src='http://pic.wk2.com/up/2017-11/2017115113633542640.jpg'>,<img src='http://pic.wk2.com/up/2017-11/2017115113634431530.jpg'>","<p><span style='line-height: 12px;'>����ʹ����Ѷ�Լ����ν�ʲô����Ѷ���سԼ����Ρ�����ʹ������ɱ���Ѿ��ذ����ߣ���վΪ��ҵ�һʱ��������ء���Ϊ��Ѷ�׿���˳Լ����Σ�ǧ����ҵ��ڴ�����Ϸ����Ч���Ͳ���������������ģ�������˵����ҿ������ذɣ� </p><h3>����Ϸ��ɫ��</h3><p>-Ϊ��Ѷ�����е�һ����˶Կ������������</p><p>-��Ϸ���õ����˳�����ӽǣ����ƶ��˴����˰��˾�����ϰ�Ĵ������飬��������������֮��Կ���������Ȥ</p><p>-��Ϸӵ��64ƽ������Ĺ�����ͼ��̽�����̽��Ŵ̼�</p><p>-�ḻ��ǹе���ߣ��ؾߵ��趨��ʹ��Ϸ���������ϲ�������</p><p>-ÿһ��ս������100����ϰ�߲��뵽��Ϸ���У���ɡ����ѡ������Ľ���ص�</p><p>-�ռ�ս���ϵ���Դ���Կ����ϵ�������ң���̭����ֱ����ʤ��</p><h3 style='text-align: left;'>����Ѷ����ʹ�������Ƽ���</h3><p style='text-align: center;'>AK47����������</p><p style='text-align: center;'><img src='http://pic.wk2.com/up/2018-1/2018011211344736395.jpg'/></p><p style='text-align: center;'>M16A4�����ʺ�����</p><p style='text-align: center;'><img src='http://pic.wk2.com/up/2018-1/2018011211344740799.jpg'/></p><p style='text-align: center;'>M4A1��������ǿ</p><p style='text-align: center;'><img src='http://pic.wk2.com/up/2018-1/2018011211344721038.jpg'/></p><p style='text-align: center;'>81-1ʽ��ǹ�����Լ���</p><p style='text-align: center;'><img src='http://pic.wk2.com/up/2018-1/2018011211344743208.jpg'/></p><h3>������ʹ������Ȧ���ԡ�</h3><p>������Ŀ������ȷ��֮�����ǲ�һ����Ҫ����Ŀ���������ߡ���Ϊ������ܵ���Ϯ������ѹ������Ļ������п��ܾͱ���̭�ˡ�</p><p>���ѡ�����ش���ս�Ļ���Ҳ�Ǵ���Σ�յġ����ѻ����ߵ��˰�Χ�Ļ�����ô��̭�ʽ���ֱ��������</p><p>���������Ŀ����������Ӧ��ѡ��ӵ�н϶��ϰ���ĵ��β����ϲߡ�</p><p>�жϵ��˵�λ�ò������ӣ��������������ǹ������ʱ��ϳ��Ļ���������������о���Ķ�ǹ�����һ������塣���û������Ļ����о����ǹҲ�Ǻܿ���ֳܷ������ġ�</p><p>��֮������������Ƕ̴ٵ�ǹ�����Ǿ��ǽ�������ս����������ս���ӵ������ʸ��ߣ��ܹ��ڶ�ʱ���ڷֳ�ʤ����</p><p>��ʱ���ѡ��ȥ͵Ϯ�Ļ����Ǿ�Ҫ���ٵ�Ǳ����ǰ�Բд�ĵ��˽��������</p><p>����Ŀ������ ���𷭶�����</p><p>����Ϸ������ò�Ҫȥ�������˵����ʣ��������������ʷǳ��ѷ�������¡�</p><p>��Ϊ�ڷ����Ĺ����У����п��ܱ����˷�����������Ŀ�������ڵ��˵�վλ�ǽ�Ϊ���еġ�</p><p>��֮ѡ��ȫ��ս�Ļ����Ϳ��Լ�������������</p>"]],
			
					//����������
					[["С��ǹս"],["����","���","��ʯ","���","�ƽ�","�޸�","��ǽ","���","����","����","����","����","�Զ���׼","͸��","����","�ű�","����","mod","��ɫ","����","�ݵ�","����","����"],["С��ǹս�ٷ�������|С��ǹս��������_5577��׿������","http://pic.wk2.com/up/2017-12/20171219159277508.png","С��ǹս","http://t.289.com/500_409","�ٷ���","���","747.16M","����","2016-03-16","http://www.5577.com/skin/library/images/star4.png","http://gun.mi.com/","<img src='http://pic.wk2.com/up/2017-10/2017101694235653750.jpg'>,<img src='http://pic.wk2.com/up/2017-10/2017101694236320420.jpg'>,<img src='http://pic.wk2.com/up/2017-10/2017101694237219310.jpg'>","<p><span style='line-height: 12px;'>С��ǹս</span>С��ǹս�Լ�������ʽ�Ƴ���С��ǹս��ԭ�е��淨�����������˵�����𱬵ĳԼ�����ɱģʽ���󼪴�����С�׳Լ���С��������ұ�֤������ǵ��»�����õĴ���ɱ���Σ����ݷḻ�������ǳ���˳������ҿ������ذ�  </p><h3>����Ϸ��ɫ��</h3><p>��ʵǹе���ԣ���ƽ����Ч����</p><p>��ͬ���������ǹе���Բ�������ͬ������ͬƤ����ǹе���Բ������������ƽ�⣬����þ�����ʵ��˵�������ƽ��FPS���Σ�</p><p>���켫�»��棬���鳩ˬ������</p><p>ʹ�����4������쾫����Ϸ����ǿ����к������Ч���Ӳ����ϸ������ˬ�����Ϸ���飻</p><p>������Ϸģʽ��רҵ������ϵ��</p><p>�����ֻ���ģʽ�⣬���Ὺ�����Ҷ�ģʽ�ȣ������ṩ�����淨���ḻ����ǵ�ѡ�񡣸��ж��ֳ����������������������Ͷ�������������£�������ܹ���ʱ������ȫ�����羺ʢ����</p><h3>��С��ǹս�Լ����ԡ�</h3><p>1���������ǹ��������ֱ�ӿ�ǹ��Ҫѧ��ѹǹ��׼������������</p><p>2��ǹ���õ��˲��Ƽ��ڷ��ӡ�����Ⱥ��ܣ�������ɽ�¡�ʯͷ��ȷ���������˳���֮���ٴ򣬳���������˳�������Ժܴ󣬻�ɱ���˵�λ�ýǶ�Ҳ�ܶࡣ</p><p>3���õ������ʤ����һ�룬������ֻ�г��н���Ⱥ���ǵ�һ��㡣</p><p>4�����������򣬷���Ҫ����������ף���һ��ͣһ�£�������������!</p><p>5���������ǹ��Ҫվ�Ų����������Ǵ�����ǹʱ����Ҫ�����ƶ��������������Ӷ���ܶԷ��ӵ���</p><p>6���ܲ�ʱ���˴��ˣ��мǲ�Ҫ����ſ��!ſ���������һ�����ӣ�ͨ���������ӵ����ڵ��ϵķ��򡢴�����ʱ���ܵ��˺���ǣ�ȷ�����˴�ŷ���Ӷ�Ѱ�����壬������ʱ��Ҫ��Ƥ��λ�����ӵ���</p><p>7��Ұ�����ʱ�Ƽ���ɽ�����ˣ�ռ�ݸߴ�����ԶҲ���״����ˡ�</p><p>8���ܶ�ʱҪ�������ܣ�����������һ���ܶ��������ѵܣ�������һ���ӵ���</p><p>9����Ҫ�����Լ���ǹ�ľ�ͷ�ƶ��ٶȺ����ƶ����ٶ�һ�£������������ܲ�ʱ������׻�ɱ���ˡ�</p><p>10������û��ɢ��ǹ�Ͳ�Ҫ���Ź�¥��������ֻ�����Ϳ�ݺ��ˡ�</p><p>�е�������Ҹտ�ʼ�Ӵ�С��ǹս��������سɺУ��Ӷ����10�롣����С����Ϊ����ܽ���������������Ǿ������Ե����⡣</p><p>1���Ӱ����ⵯ��������ʱ�ڣ�����������ⵯ��������ɵ��������Ϲ�Լ��Ͷ��ѣ�Ϊ�����ṩ�������Լ���ʱ�������ס�����ⵯ������ô������Ϲ���˵�Ŷ;</p><p>2��ֱ��������ƴ�����ܶ�������ң�������Ŀ��ѻ��֣����ǵ�һʱ�����ý�������������ڻ�Ѹ��ת�ƣ��Ӳ�����У������ȴ����������˶�ǹ;</p><p>3��Ƶ�����л��������ܶ�����ϲ�����߶����л���һ��������ͻᱻת�ǵĵ��˽������ɴ��ߣ���պ��л�������������ʱ��...</p><p>4������۲����������������ǰ�壺�ܶ���������ӽ�̫����һ�����˻�ѡ���ͼ�Ϻõķ�����������������ͻ���������л��Ĵ���;</p><p>5��ǿ��֢���㰮�������У�ͨ���ӵ�û���꣬��ͼ�������������һ�ε���Ҫ2�룬����2�룬�����Ա��ɵ���;</p><p>6�������������裺��Щ����ƫ���������У��л�������ֻ��һ�룬��󽵵����㱻��Ŀ����ԡ�</p>"]],
					//���߸�����
					[["�ս���2"],["����","���","��ʯ","���","�ƽ�","�޸�","��ǽ","���","����","����","����","����","�Զ���׼","͸��","����","�ű�","����","mod","��ɫ","����","�ݵ�","����","����"],["�ս���2�ٷ�������|�ս���2��������_5577��׿������","http://pic.wk2.com/up/2018-1/2018181411114944.jpg","�ս���2","http://tj.awdudes.com/0009/4965","�ٷ���","���","584.99M","����","2016-03-16","http://www.5577.com/skin/library/images/star4.png","http://t2.163.com/","<img src='http://pic.wk2.com/up/2018-1/201818141225400.jpg'>,<img src='http://pic.wk2.com/up/2018-1/2018181411573316.jpg'>,<img src='http://pic.wk2.com/up/2018-1/2018181411531211.jpg'>","<p><span style='line-height: 12px;'>�ս���2</span>�ս���2:��������һ����������Σ���Ϸ�����׾��Ĵ��죬�����ս���2��Ӱ�ı���ɣ������˵�Ӱ�Ľ�ɫϵͳ���ḻ�Ŀƻ��������Խ���ս��Ŷ��ϲ��������ε���Ҳ��ɴ������������������ƻ������аɣ� </p><h3>����Ϸ��ɫ��</h3><p>-<span style='line-height: 1em;'>���ſ�Ұ������ս��</span></p><p>��ȥ��ġ�����Ȱ��˲��𡱡���������Ϸ�Ȱ������ʢ���ϣ����ú���ǧ������NeoX���澫�Ĵ����ȫ��3D�����״����࣬�ݱ�����Ϊ�����ſ�Ұ����</p><p>��Ϥ�������ſ�Ұ���ں���<a href='http://www.5577.com/k/95/' target='_blank'>��ɫ����</a>��ǹе������ݳ����١�����ð�յȶ������淨Ԫ�أ��������ɶȺ��淨�ϣ�Ϊ��Ҵ�����Ȼ��ͬ����Ϸ���顣ͨ������Ұ�����ֿ��Ե�֪�������ν�ӵ�м��ҵĴ򶷣��Ȱ�ս������ҿ��Զ�ӹ�ע�����⣬������λ���ӵ���缶��֪��IP�����Կ�������ϡ����ſ�Ұ���������������֣�</p><p>-�ƻ�Ԫ�أ���սδ��</p><p>�����ſ�Ұ���ٷ�����վ�ع���������Ϸ����������˿��Զ�������ν��г����Ĳ²⡣</p><p>������ĩ�գ��ȴ��������ʲô�������ˣ�</p><p>�ڶ���ͼΪһ�����׾��������ڳ������룬���滹������һ���ƺ������׵�սʿ�����������˵����ֻ��������ھ����ϵķ�Ծ������ȷ�����ǣ������ſ�Ұ���б�Ȼ����Զ����ʵ�ġ��ڿƼ�����ӵ������Ϳƻ�Ԫ�ء�</p><p>-δ����ʲô�������ת��</p><p>������ͼ��Ϊ�������������߳�������ƺ��ڵ�����ɾ޴���ƻ��������Ȼ������˶Դ��Լ��ļ�԰���⾿����˭�����ս��������תδ�����ĸ�������Ҳ˵������һ򽫰������������Ӣ�ۣ�����ʱ�⣬������˵�а��ƻ���</p><p>Ӣ�۾����㣡</p><p>������ͼ��չʾ��һλӢ�۵ı�Ӱ������Ƥ��Ƥ�㣬���ֳ�ǹ��Զ���������ڶԵ�����й����ķ����������Ƿ���Ա�ĺ�Ԯ���ӣ�������Ҫ��������˴�ս�����۴���ʲô����Ȼ��Ӣ�۹���������ϵ��Ϸ�ų�ӵ��֪��IP������Ӧ����һλ����������Ӣ�ۣ���������˭��</p><p>-δ����ʮ���ԤԼ����</p><p>������ͼ������������վ�������񡪡����ţ��Ƽ��С�δ����ʮ�㣬�����ͼ������Ĺ�㣬�����е�˫����ͼ�κͲ���ͼ���Լ�ʱ���ߣ���Ӫ�������ص�ɫ�ʡ�</p><h3>����Ϸ��Ѷ��</h3><p>����5��20��������Ϸ2016��ȷ����������ٽ�����ʮ���ذ���Ʒ�������أ�����ǽ����ܵ�һ����ʢ������ʢ�磡���ڶ������У��ų�ӵ�й��ʼ�IP���������������ſ�Ұ�����ܹ�ע����������IP��ʵ����ݡ��Ĳ���Ҳ��������ǵء��𰸽���520����ҿ������ھ���������һ���ռ����룬��ǰ�ƿ�����IP����ɴ��</p><p>���ڡ����ſ�Ұ����Ŀǰ����ȷ�����ǣ�����һ��ƻ���ĵ���������Ρ�����С˵��������Ҳ������֮��ص���Ʒ�����ܱ����ԡ�����IP�����ŵ���Ȼ������������Ϸ�͵�Ӱ����</p><p>�����ſ�Ұ������IP��������</p><p>������Ϸ��Ӫ���������������淨�ḻ</p><p>����ƽ̨�ϵĴ�����������ӵ����������������Լ�����������ɫ���淨������Ҳ�������˾�����ƣ���ֲΪ���Σ��������ٿ�����Ĺ����Ѷȡ�</p><p>��������Ϸ�������������Ϸ�Ժ�Ʒ��ʮ��ע�أ���ֲ���ֻ��Ϻ�����޷��ﵽһ��ˮ׼������ԭ��IP��������������á��������׵��з������ڹ�����Ϸ�����о����Ƕ���ģ������з������α�ȻҲ�ܴﵽˮ׼֮�ϣ�������IPΪ֮���ߡ�</p><p>����һ�������䡷</p><p>������ƻá���Ұ��������������ЩԪ�ؼ���һ�����ܲ����𡶷��䡷ϵ�У���Ϊ��������Ϸ�Ĵ�����֮һ�������䡷ϵ�����۴ӿ����Ի��Ǵ������϶�ʮ�ֳ��ڡ����ڻ������̵ĵ���������������������ս�����״���SPECIAL ϵͳҲ��������Ҽ�Ϊ���ķ�չ�ռ䣬��ҿ�������ѡ���Լ��ĳɳ������ò�ͬ�ķ�ʽӮ�����յ�ʤ����</p><p>��ս��֮�󣬷�������</p><p>�����������ϣ��ܷ�ﵽ��˸ߵ����ɶȣ������ſ�Ұ�����ص�Զ��</p><p>�������������֮�ء�</p><p>�롶���䡷ϵ����ȣ�������֮�ء����ʺϸı�Ϊ���Ρ�����������Ϸ��������ɶȣ������˸�������ȷ����ϷĿ�꣬��ʹ������Ҹ��õļ���ע�������ḻ������Ҳ�����ϴ̼����������ս�������ְҵ������ս����ʽ�������ǵ�ˢ�����Ŷ���ս����������Ȥ��</p><p>������֮�ء�������ս��</p><p>���ڡ����ſ�Ұ����˵����������������������ֲ������֮�ء��зḻ�����ӵ�ǹеϵͳ����Ҫ����ƽ�����������Ĵ̼�����û��ô�򵥡�</p><p>����������̩̹���䡷</p><p>��̩̹���䡷��������ΪXbox One�ڴ�����������ս�л�ʤ�ĳ��룬��ΪEA�����������ֹ����ҵ��ײ���Ʒ����̩̹���䡷���ڶ༼�����£�ս����Ȼ�������ɣ������߿ƻ�ɫ�ʣ����ͻ��׵�������������������������ȸ����������ſ�Ұ���ų�ӵ���ؾ�ս��ģʽ���Ƿ���ǡ�̩̹���䡷�о��ͻ��׵���ֲ�أ�</p><p>���ͻ���</p><p>���ڡ�̩̹���䡷��һ���һ�˳��ӽ������Ϸ�������ֲΪ���Σ�������Ҫ����Ϊ�������˳ƲŸ������ֻ���ҡ�ͬʱ�����չ�ָߴ�24Ӣ�ߵľ��ͻ���������սʿ��ĸ߶ȲӪ����̼���ս����Χ����Ҳ��һ�����⡣</p><p>���ʴ�Ƭ��Ӫ���������������ֺ�����</p><p>�������ʣ���Ӱ��������Ӱ����Զ��������ϷҪ��������IP�ܹ����������ڵ�һʱ����������㹻��Ĺ�ע�ȣ�Ӯ���������ϡ����ң���Ӱ�ľ�����Ȼ����������Ϸ�ḻ���꾡����������������һ���ֺ������ۣ��ܹ����衶���ſ�Ұ�����������ɷ��ӵĿռ䡣</p><p>�ƻ���������Ҳ���������ĵ�Ӱ���֮һ���ӡ������ս��ϵ�е���Xս����ϵ�У��ٵ�����ġ����������ˡ������������ˡ�ϵ�м���ص�Ӱ�����ջ��˳���Ʊ����ն��������˿��</p><p>����һ������̫ƽ��</p><p>�Ĳ���Ӱ����򵥴ֱ�����Ϊ��Ұ�Ŀƻô�Ƭ���ܶ��˵Ĵ𰸶����ǡ���̫ƽ�󡷣����ܾ���ͱ��ݶ�����ڸ������������Σ�������ߣ��й��ı����죬����˹���ж�ŵ���������ձ���̽���ǺͰĴ����ǵ����￨ͻϮ�ߣ��������Ҫ�Ĳ�ս���׶���������������̵�ӡ�󡣴�ͷ��β�ĳ�ˬ�������ױȵ��Ӿ�Ч����Ҳʹ����Ϊ������Ļ��׵�Ӱ��</p><p>����Ļ��׵�Ӱ</p><p>���ӡ����ſ�Ұ��������������������ƺ�����һ����ȫ�Ļ������Σ��Ƿ�Ե�Ӱ�ľ�������˴���ıࣿ�д�������</p><p>����������ս��ߡ�</p><p≯���ƻõ�Ӱ�������ٵ����ⲿӰ�������Ŀƻô�����ʩ�������ڡ��ս��ߡ�ϵ����Ϊ���ǳ��������˶�ļ������õı��ݡ����ָ��ӵ�ʱ������Ҳ�ڿ�÷¡�����б�ø�����������T-800һ�δε�ս�����˱��п�Ұ�̼�����Ϊ�˱�������δ����������������ʹ�˸ж������ҡ��ս��ߡ����IP�ڹ��ڵ�Ӱ����ʮ��ǿ��ȥ����ӳ�ġ��ս���5�����ڹ���ȡ���������Ʊ����</p><p>ʩ����������������T-800</p><p>����ı�Ϊ���Σ����ս��ߡ����ӵ�ʱ�մ��󣬺�����临�ӵĹ�ϵ�϶����ÿ������ͷʹ������������չ�ֲ�����������������Ͷ�����У���Ҫ������໨��˼��</p><p>�����������ڿ͵۹���</p><p>��Ϊʷ����ᡱ�ĵ�Ӱ֮һ�����ڿ͵۹�����ͷ��β���ܸ�������Ӿ��ϵĴ̼���˼ά�ϵ���˼���Ӵ�����ܵ�Matrix�������������е�ÿһ���ˡ������˼������ľ����ߣ�������ʼ���գ�����Ϊ����ĸ�壬�������ػ����ɶ��ܶ���</p><p>���ڿ͵۹�������ʼ���ն��ܿ�</p><p>���ڿ͵۹����Ĵ�ʮ�ֵľ��ʣ������Ұ���ܻ���Щ��࣬�����ſ�Ұ���Ƿ��������ϣ�ѡ�����������IP��</p><p>����������Ϸ���������ʴ�Ƭ���ĸ��������еġ����ſ�Ұ����Ϊ���У�������Ϸ520�����ᵱ�죬�������ҿ������ſ�Ұ������IP����ʵ��Ŀ������������Ϸ�ײ���Ƶ���������벻�����������α�Ϊ�����ſ�Ұ�����󣡾����ⲿ��Ұ�������ܹ��������Ƕ�ô��Ұ�ľ�ϲ�������ǹ�ͬ�ڴ���</p>"]],
			
					//�ڰ˸�����
					[["qq�ɳ�"],["����","���","��ʯ","���","�ƽ�","�޸�","��ǽ","���","����","����","����","��","�Զ���׼","����","�ű�","����","mod","�Զ�","����","����","��","ˢ"],["qq�ɳ��ٷ�������|qq�ɳ���Ѷ��������_5577��׿������","http://pic.wk2.com/up/2017-7/201777858334658.png","qq�ɳ�","http://tj.awdudes.com/0009/6288","�ٷ���","��������","581.09M","����","2016-03-16","http://www.5577.com/skin/library/images/star4.png","http://speedm.qq.com/","<img src='http://pic.wk2.com/up/2017-12/20171227172549097190.jpg'>,<img src='http://pic.wk2.com/up/2017-12/20171227172551431530.jpg'>,<img src='http://pic.wk2.com/up/2017-12/20171227172553986080.jpg'>","<p><span style='line-height: 12px;'>QQ�ɳ�</span>QQ�ɳ���һ����������ֻ���Ϸ��Q�����Ϸ����ͽ�ɫϵͳ����Ѷ���첢�������ֻ�ƽ̨�������ͨ��QQ��΢���ʺŵ�¼��Ϸ��ˬ��Ư���ָС����Ҿ������飬�������صĻ�װ�淨����ô����������Ϸ���龺����Ϸ�Ŀ�аɣ�</p><h3>����Ϸ��ɫ��</h3><p>-<span style='line-height: 1em;'>��Ѷ��˾��������ʱ�䣬����ΪQQ�û�������׿������з���3Dʱ������������Ϸ��</span></p><p>-QQ�ɳ����������缶����������PhysX������רҵ���ֵĽ��飬�ָ�ȫ�泬Խ�г����Ȳ�Ʒ��QQ�ɳ���ȫ��ѣ�QQ���뼴�ɵ�¼��</p><p>-רΪQQ�û���Ƶ�ʱ�е��������͡���ˬ��Ư���ָС����Ҿ���������ʱ�г����ĸ��Ի�װ��Ϊ������ɫ������˳��ߵ�����;˧������Ůͬ�ڣ��ٶ��뼤�鲢�棬�������ѣĿ�ļ������硣</p><p>-��Ϸ�����趨������ˣ�����������ǳ����ָ���ʵ���𺳡�ֻ��5�����Ϳ��Բ���QQ�ɳ������ַǳ����ס�</p><p>-����Ϸ�У�����Ժ�����QQ���һ����Ϸ���ɳ�����ʶ���ѣ������齨���ӣ���������Լ��ڹ��ڵ�������λ;ĥ����ĳ�������ʱΪ����׼����</p><p>-�ڱ߾�������Ժͱ����ҽ����ͽ�Ծ���Ӯȡϵͳ�ķ������Ϊ������ȡ������</p><p>-��Ϸ���ˣ�������ȥ��������������������ҽ������飬��ʶGG��MM�������������һ���˵���Ϸ���ٹµ���</p><h3>���淨������</h3><p>��Ʈ�������Ư�Ƽ��뷽�����Ȼ��Ѹ�ٷſ�Ư�Ƽ�������Ҫ������ͷ��</p><p>��Ʈ�������� �Ͼ��ǳ����𲽼��ܡ�</p><p>��Ʈ����������ײ������������ڵ�������һ������һ������ʱ��</p><p>������������������𲽻�����ȣ��൱��Ҫ��</p>"]],

					//�ھŸ�����
					[["��������"],["����","���","��ʯ","���","�ƽ�","�޸�","��ǽ","���","����","����","����","����","�Զ���׼","͸��","����","�ű�","����","mod","��ɫ","����","�ݵ�","����","����","����","����"],["��Ѷ���������Լ��ٷ�������|��Ѷ����������������_5577��׿������","http://pic.wk2.com/up/2017-12/2017127856207000.png","��Ѷ���������Լ�","http://tj.awdudes.com/0009/6265","�ٷ���","���","874.0M","����","2017-12-23","http://www.5577.com/skin/library/images/star4.png","http://pubg.qq.com/","<img src='http://pic.wk2.com/up/2018-2/201829111145653750.jpg'>,<img src='http://pic.wk2.com/up/2018-2/201829111151885970.jpg'>,<img src='http://pic.wk2.com/up/2018-2/201829111154320420.jpg'>","<p><span style='line-height: 12px;'>��������</span>��վΪ��Ҵ�����Ѷ��Ϸ����������������������Դ���������������Ϸ�Ǹ��ݾ�����������ɱ�ı��һ���������������Σ����Ŵ�Ҳ��ٶ�֪��������������ɱ��ϲ���Լ�����ɱ����ң���Ѷ��������5577�汾һ����������ʧ���ģ��Ͽ������԰ɣ� </p><h3>����������ȫ������Ӧ��δ��װ��װ���˽���취��</h3><p>1��ɾ����������ȫ������</p><p>2���ֻ�����-�洢-�ҵ�SD��</p><p>3��ж��SD��</p><p>4���������ؾ�������ȫ���������ֻ��ڴ���</p><p>5����װSD��</p><h3>����Ϸ��ɫ��</h3><p>�������������������Ʒ��</p><p>����Ҳ�������������PUBG&amp;�������ϳ�Ʒ����������������Ρ���������ȫ������������ʵ�֣�</p><p>��ȫ�滹ԭ��Ӧ�о��С�</p><p>����UE4����ȫ�滹ԭ���δ����磬���»��ء�Y�ǡ�98K��8����...����Ϥ�Ķ�������Ӧ�о��С�</p><p>���ֻ���С����Ȥ������</p><p>���ﶯ����ȫϵ�������ָо�����ĥ���ţ�������˳���Ĳ������顣�������ڴ��ϣ�Ҳ������100%����Ϸ��Ȥ��</p><p>��������ӣ�ֻ����һ��</p><p>100�˹�ƽ�������ڹ�ƽ��ս���д�չȭ�ţ����ܾ�������Ȥ��</p><p>�󼪴����������һ��</p><h3>��������Ѷ��</h3><p>2017��12��1�գ���Ѷ������������������������������Ƴ���������������ٷ����Σ����С������������̼�ս�����ɹ��ӹ����ҳ�Ʒ��</p><p>2��8�գ��ݡ������������̼�ս����΢����Ϣ������Ϸ������2��9�տ�ʼ�ڲ⡣����Ϸ���������4���죬������ϸ�ڡ�ֲ�����ǡ���������ȷ��涼���ŷǳ��ߵ�ˮ׼������ǰ��ʱ�䣬��Ϸ��ʼ���ȷ���ԣ����ҹ������ײ�汾ʵ����ͼ��</p><p>�Դ���Ѷ������������������������������ش�Ҷ��Դ��������Ρ����գ��������������ٷ�΢�Ź��ںŹ����˹������ͼ����Ϸ�еĸ����ص���ѱ�ע���������ơ���������֮ǰ�������ĵط����Ժ��ǲ���Ҫ�����ƺ����أ�</p><p>����ݹ������ͼ�п��Կ�������Щ��������������Ŀǰ�Ƚϳ��õĳƺ�����Ƥ�ǣ�Pochinki��P�ǣ���������Military Base��Ҳ�������ǳ�˵�ľ��»��أ����г���Gun Range����������վ��Mylta Powe����վ���ȣ�Ҳ��ʥɽ��Stalber����������Zharki��Z�ǣ��������ۣ�Georgopol��G�ۣ����ֱ仯�ϴ�����ơ�</p><p>λ���غ���������������ܵ����Ǽ�˫������ǵ���������Ϊ���λ�ñȽ�ƫƧ����ʹ���߾�����Ҳ���ٻ������ѡ�����������ǰ�ڷ����Ƚ���������Ҳ�����е�һ����Ȧ�Ͱ����������ȥ�����Գ����ѹ����ʣ�Ѱ�ҽ�ͨ����Ҳ�Ƿǳ���Ҫ�ġ�</p><p>Ƥ�Ǻ;�Уλ�ڵ�ͼ������λ�ã��ɻ������кܴ��ʻᾭ���������ͷ����������Ҳ�ܴ����ˢ������������Դ�㣬��ҵı���֮�أ�ͬʱҲ����ࡰ���Ӿ����ڴ˳�û��</p><p>�����غ����������ǡ���վ�������ǡ��������ĸ�����Ҳ�����ʱȽϷḻ�ĵ㣬������Ϥ�ġ���վ���ڹ�����������������ǣ������غ��������˼���֮�⣬���Ǻ͵�վ������ҷǳ���ȥ�ĵط�����Ϊ���վ��Զ���������ǣ������ؾ�֧�ŵ�ǰ���£�������ͳ���Ҳ�Ƕ���С��һ�������ѡ��</p><p>λ�ڵ�ͼ���϶˵Ļ�������˵�����ŵ�ͼ����Դ��Ϊ�ḻ�ĵط��ˡ����������������ѡ�����ʱ����������ѡ��������ڻ���������Զ�����λ�ã�ͨ����������������Ҳ����������ա����ŷѡ���Ͷ�������ߡ�</p><p>��ͼ�������ļ�����Ҳ��һ���������Դ�㣬ֻ������λ��ƫƧ��ѡ������������Խ��٣�����Ƭ����¥����������������Χ�ܴ�����뺽�߽Ͻ���Ҳ��3-4��С��һ�������ѡ��</p><p>���˽⣬��������������Ȼ������һ�ι���粨����ԤԼ����Ҳ�Ѿ��ɹ��ﵽ��1000���Ŀ�꣬Ŀǰ�ٷ���û������������ʽ������ȷ�����ڣ����Ǽ�Ȼ�µ�ͼ�Ѿ���������ؾ����������ʽ����Ҳ��Ϊʱ��Զ�����ڱ����ع�����ĵ�������Щ��Ҿ���ͳһ�Ե����ĳƺ����Ͷ��ѽ�����ʱ��Ͳ����ٳ��ֹ�ͨ�ϵ����ѣ��������ڽ���ս���Ĳ��ú�ʵʩ��Ҳ��Щ����Ϊ������ԭ���Ľз���˳�ڡ������ھ�����һ�ֽз����ã�������Ѷ��������5577���ΰ汾����ɣ�</p>"]],
										
			//��ʮ������
			[["��ƽ��Ӣ"],["����","���","��ʯ","���","�ƽ�","�޸�","��ǽ","���","����","����","����","����","�Զ���׼","͸��","����","�ű�","����","mod","��ɫ","����","�ݵ�","����","����","����","����"],["��Ѷ��ƽ��Ӣ�ٷ�������|��Ѷ��ƽ��Ӣ����_5577��׿������","http://pic.wk2.com/up/2019-5/201958852168381.png","��Ѷ��ƽ��Ӣ����","http://tj.awdudes.com/0009/6630","�ٷ���","���","1890.0M","����","2019-05-08","http://www.5577.com/skin/library/images/star4.png","https://gp.qq.com/","<img src='http://pic.wk2.com/up/2019-5/20195892141663750.jpg'>,<img src='http://pic.wk2.com/up/2019-5/20195892145774860.jpg'>,<img src='http://pic.wk2.com/up/2019-5/20195892150320420.jpg'>","<p><span style='line-height: 12px;'>��ƽ��Ӣ</span>��վΪ��Ҵ�����Ѷ��Ϸ��ƽ��Ӣ��������������Դ����ƽ��Ӣ�����Ϸ�Ǹ��ݴ̼�ս���ı��һ���������������Σ����Ŵ�Ҳ��ٶ�֪����ƽ��Ӣ��ϲ���Լ�������Ϸ����ң���Ѷ��ƽ��Ӣ5577�汾һ����������ʧ���ģ��Ͽ������԰ɣ� </p><h3>����Ѷ��ƽ��ӢӦ��δ��װ��װ���˽���취��</h3><p>1��ɾ����Ѷ��ƽ��Ӣ</p><p>2���ֻ�����-�洢-�ҵ�SD��</p><p>3��ж��SD��</p><p>4������������Ѷ��ƽ��Ӣ���ֻ��ڴ���</p><p>5����װSD��<h3>����Ϸ��ɫ��</h3><p> -ʵ����ͼ &nbsp;���˾��� ���ų���ʵ����ͼ������ḻ�Ļ����仯������ͬ��������ƾ��ս�����Լ���������¶�ھ�������ʤ����</p><p>-���泡�� ���������������4����������ϸ����Ⱦ�������ͼ�����泡������ϸ�塢����ʵ����ʵ3D��Ч���߱���ʵʱ���������������侳�ļ�������</p><p>-ˬ����� ��ʵ������ʵǹе��������������ָУ��������֣���ʮ����ʵǹ֧��ǹе��ʵ����ģ�⣬��ʵͶ��ƷͶ���켣��������������ֽ�ս��������������������Һ��������ս���������</p><p>-�ḻ�ؾ� ��Ұ쭳�������ʵ�ؾߣ��ḻ��쭳��������飬���������ָУ�����ʵ����ʵ</p><p>-һ����� ���ѿ�����ʱ��أ����Կ��ڣ� һ����ӣ���������������ڣ����ѹ�ս��΢��/��Q������ϵ��ս��ϵͳ���������罻���޴����ڵ���Ϸ���罻���飡�����ֵܱ���ս��������</p><p>-��ƽ���� ��ɫ����ǿ��ķ���ҹ��ܣ���Ը��ֻ��͵����估�����Ż�������Ϸ����ƽ����˳��</p><p>-��������ģʽ�淨��������ģʽ�淨�������е�ս�����򣬸������Ϸ���࣬���̵���Ϸʱ����������ˬ���ٵ�ս������</p><p>-ȫ���ŶӾ����淨���Ӷ��ĵ��νṹ�������������ս����ȫ�¹���ȫ�µ�ͼ������ȫ�¾������飡</p>"]],
				];
				var m = 0;
				var mgcAllSize = mgcAll.length;//N�����				
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
							$(this).find("a").attr("href","javascript:;").text("��Ӧ�����¼�").css({"background":"#a0a0a0"});
						})		
						var titletext = $("title").text().replace(/����/g,"");
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
		$(".g-gamedown div b").eq(0).html('<em>��С��<span class="f-game-size">94.65M</span></em><em>���ԣ�����</em>');
		$(".g-gamedown div b").eq(1).html('<em>���</em><em>ϵͳ��Android</em>');				
		$("h1,title").text(data[0]);				
		$(".m-game-img").attr({"src":data[1]});
		//��ȡ����Ԥ��ͼ
		var previmgSize = data[2].length;
		var previmgHtml = "";
		for(var s=0;s<previmgSize;s++){
			previmgHtml += '<li><img src="'+data[2][s]+'" /></li>';
		}
		$("#g-down-gameprevimg").html('<ul class="g-previmg-ul">'+previmgHtml+'</ul>');
		$("#m-cont").html(data[3]).css("height","auto");		
		$(".m-down-ul li").each(function(){
			$(this).find("a").attr("href","javascript:;").text("��Ӧ�����¼�").css({"background":"#a0a0a0"});
		})
		var titletext = $("title").text().replace(/����/g,"");
		$("title").text(titletext)
		$(".m-hide-btn,.g-peo-like,.g-recomd,.m-game-scroll,.g-key-ohter,#g-keyword,.g-key-game,.g-cms-strategy,.g-tags-box").remove();
		
	}
	
}

function mgcBoxHide(objdiv){	//���Ӱ��,objdiv = ����
	$(objdiv).hide();
}

function mgcBoxHtml(replaceArray){ //�滻����,replaceArray = ����[����]
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
        
        if (btnText == "����鿴����") {
            el.height(contHeight).animate({ height: autoHeight }, 300, function() {
                $(".g-hide-bg").hide();
            });
            $(this).find(".m-hide-btn").text("���𲿷�����").append("<b></b>");
        } else if (btnText == "���𲿷�����") {
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
            $(this).find(".m-hide-btn").text("����鿴����").append("<span></span>");
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
	//��ȡ��ͼ��Ԥ��ͼ��
	var previmgHtml = "";
	$(".g-down-previmg img").each(function(){
		var imgSrc =  $(this).attr("src").replace("!400_720","");		
		previmgHtml += '<div class="swiper-slide"><img src="'+ imgSrc +'"></div>';
	})
	
	
	//ֲ��Ԥ�������
	var previmgHtmlBox = '<div class="g-previmg-show f-previmg-swiper"><div class="swiper-wrapper">'+previmgHtml+'</div><div class="m-btn-box"><div class="swiper-button-prev"></div><div class="f-previmgswiper-pagination"></div><div class="swiper-button-next"></div></div><b class="u-close"></b></div>'
	$("body").append(previmgHtmlBox);
	
	//�õ�Ƭ
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
	
	//������ͼƬ·��push�����飬Ϊ�˷��㶨λ
	var contImg = [];
	$('#m-cont p').each(function(){
		var cimgSize = $(this).find('img').length
		if(cimgSize > 0){
			contImg.push($(this).find('img').attr('src'))	
		}
	})	
	
	//�������ͼƬ�����html����
	var contImgHtml = '';
	for(var ss = 0; ss<contImg.length;ss++){
		contImg[ss] = contImg[ss].replace("!360_360","");
		contImgHtml += '<div class="swiper-slide"><img src="'+ contImg[ss] +'"></div>';
	}
	
	//��������е�ͼƬ
	$('#m-cont p img').click(function(){
		$(".f-previmg-swiper .swiper-wrapper").html(contImgHtml); //�滻�õ�����

		var nn = $.inArray($(this).attr('src'),contImg);;//��ȡ�����ͼƬ
		$(".g-previmg-show").css({"left":"0"})
		mySwiper.updateSlides(); //����slide����
		mySwiper.slideTo(nn, 0, false);//�л�����һ��slide���ٶ�Ϊ1��
		
	})		
	
	//�����ͼ
	$(".g-down-previmg li").click(function(){
		$(".f-previmg-swiper .swiper-wrapper").html(previmgHtml); //�滻�õ�����

		var initialSlideN = $(this).index();//��ȡ�����ͼƬ
		$(".g-previmg-show").css({"left":"0"})
		mySwiper.updateSlides(); //����slide����
		mySwiper.slideTo(initialSlideN, 0, false);//�л�����һ��slide���ٶ�Ϊ1��
		
	})
	
	//�ر�Ԥ����
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
			<div class="g-authority"><b class="m-permissions">Ȩ�޹�����֪<span>����鿴</span></b></div><div class="m-premissions-div"></div><b class="m-permission-bg"></b>`);
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
		$(".m-permissions span").html('<font style="color:#fff; font-weight:normal;">����Ȩ�޹���</font>')
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
				permissionHtml += '<li class="m-permission-'+cmslist[i]["level"]+'"><span>'+cmslist[i]["explain"]+'��'+'</span>'+cmslist[i]["description"]+'</li>';					
            }
		}
		$(".m-premissions-div").append('<strong>Ȩ�޹�����֪</strong><ul>'+permissionHtml+'</ul><b class="m-close-permis">�ر�</b>');
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