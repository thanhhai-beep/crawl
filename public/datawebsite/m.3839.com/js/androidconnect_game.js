var AndroidConnect = {
        initLaunch : function(){
            var _this = this;

            if( !this.frame ){
                this.frame = document.createElement("frame");
                this.frame.style.display = "none";
                document.body.appendChild(this.frame);
                this.timeout = 1000;

                window.onblur = function(){
                    clearTimeout(_this.timer);
                    _this.timer = null;
                };
            }
        },

        launchFallback : function(start_time, fallback){
            var now_time = Date.now();

            if (!start_time || now_time - start_time < this.timeout + 200){
                fallback();
            }
        },
        
        launch : function(launch_url, fallback){
            var _this = this,
                start_time = Date.now();

            this.launch_url = launch_url || 'm4399://launch';
            fallback = typeof fallback === "function" ? fallback : function(){};

            this.initLaunch();

            this.timer = setTimeout(function(){
				_this.launchFallback(start_time, fallback);
			}, _this.timeout);

            this.redirect();
        },

        redirect : function(){
            var isChrome = navigator.userAgent.indexOf("Chrome") > -1;

            if(isChrome){
                document.location.href = this.launch_url;
            } else {
                this.frame.setAttribute("src", this.launch_url);
            }
        },

        downloadGame : function(param, success, failure){
            param = param || {};
            var packagename = param.packagename || '', 
                gid = param.gid || '',
                uid = param.uid || 0, 
                vid = param.vid || 0;

            this.jsonp('http://127.0.0.1:4399/download?packagename=' + packagename + '&gid=' + gid + '&uid='+ uid + '&vid=' + vid, function(data){
                if (data == 3){
                    failure(2);
                } else if(data != 1){
                    failure(0);
                } else {
                    success(1);
                }
            }, function(){
                failure(1);
            });
        },

        jsonp : function(url, success, failure){
            var script = document.createElement("script"),
                calbackname = 'app_dl_callback';

            success = typeof success === 'function' ? success : function(){};   
            failure = typeof failure === 'function' ? failure : function(){};

            window[calbackname] = success;

            script.onload = function(e){
                document.body.removeChild(script);
                delete window[calbackname];  
            }

            script.onerror = function(e){
                failure();
                document.body.removeChild(script);
                delete window[calbackname]; 
            }
            
            script.src = url + '&r=' + (new Date() - 0);
            document.body.appendChild(script);
        }
};