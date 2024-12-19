function loadJs(_url) 
{
	var head = document.getElementsByTagName("head").item(0);
	var callback = arguments[1] || function() 
	{
		oScript = document.getElementById('clickCount');
		if (oScript) 
		{
			head.removeChild(oScript);
		}
	};
	var _script = document.createElement("SCRIPT");
	_script.setAttribute("type", "text/javascript");
	_script.setAttribute("src", _url);
	_script.setAttribute("id", 'clickCount');
	head.appendChild(_script);
	if (document.all) 
	{
		_script.onreadystatechange = function() 
		{
			if (/onload|loaded|complete/.test(_script.readyState)) 
			{
				callback && callback();
			}
		};
	} 
	else 
	{
		_script.onload = function() 
		{
			callback();
		};
	}
}

function downCount( vUrl ){
	var url = 'https://web.50bangzh.com/web/ajax3?uId2=SPTNPQRLSX&r='+encodeURIComponent(document.referrer)+'&fBL='+screen.width+'*'+screen.height+'&lO='+encodeURIComponent(vUrl);
	loadJs(url);return true;
}
function tj( vUrl,type ){
	//url���
	var url = 'https://web.50bangzh.com/web/ajax5?uId2=SPTNPQRLSX&r='+encodeURIComponent(document.referrer)+'&fBL='+screen.width+'*'+screen.height+'&lO='+encodeURIComponent(vUrl);

	if(type)
	{
		vUrl = type;
		var urlxs = 'https://web.50bangzh.com/web/ajax3?uId2=SPTNPQRLSX&r='+encodeURIComponent(document.referrer)+'&fBL='+screen.width+'*'+screen.height+'&lO='+encodeURIComponent(vUrl);
		loadJs(urlxs);
	}
	loadJs(url);return true;
}


