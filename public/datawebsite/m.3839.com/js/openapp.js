var openApp = {
    launch: function (launch_url, fallback) {
        var ua = window.navigator.userAgent.toLowerCase(),
            is_ios = /iphone|ipad|ipod/i.test(ua);
        if (is_ios) {
            if (!this.alink) {
                this.alink = document.createElement("a");
                this.alink.setAttribute("href", launch_url);
                this.alink.setAttribute("target", "_self");
                this.alink.style.display = "none";
                document.body.appendChild(this.alink);
				
				// window.onblur = function () {
                    // clearTimeout(timer);
                // };
            }

            this.alink.click();
			
			
			var start_time = Date.now(),
                timeout = 1500;

            timer = setTimeout(function () {
                // var now_time = Date.now();
                // if (now_time - start_time < timeout + 200) {
                    if (typeof fallback === "function") {
                        fallback();
                    }
                // }
            }, timeout);
			
        } else {
            var timer = null;

            if (!this.frame) {
                this.frame = document.createElement("frame");
                this.frame.style.display = "none";
                document.body.appendChild(this.frame);

                window.onblur = function () {
                    clearTimeout(timer);
                };
            }

            var start_time = Date.now(),
                timeout = 1000;

            timer = setTimeout(function () {
                var now_time = Date.now();
                if (now_time - start_time < timeout + 200) {
                    if (typeof fallback === "function") {
                        fallback();
                    }
                }
            }, timeout);

            this.frame.setAttribute("src", launch_url);
        }
    }
};