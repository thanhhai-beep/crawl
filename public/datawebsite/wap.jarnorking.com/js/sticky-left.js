(function(dG){dG.fn.theiaStickySidebar=function(eS){var fT={containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:true,minWidth:0,disableOnResponsiveLayouts:true,sidebarBehavior:"modern"};eS=dG.extend(fT,eS);eS.additionalMarginTop=parseInt(eS.additionalMarginTop)||0;eS.additionalMarginBottom=parseInt(eS.additionalMarginBottom)||0;aN(eS,this);function aN(eS,fT){var aN=bJ(eS,fT);if(!aN){console.log("TST: Body width smaller than options.minWidth. Init is delayed.");dG(document).scroll(function(eS,fT){return function(aN){var dO=bJ(eS,fT);if(dO){dG(this).unbind(aN)}}}(eS,fT));dG(window).resize(function(eS,fT){return function(aN){var dO=bJ(eS,fT);if(dO){dG(this).unbind(aN)}}}(eS,fT))}}function bJ(eS,fT){if(eS.initialized===true){return true}if(dG("body").width()<eS.minWidth){return false}dO(eS,fT);return true}function dO(eS,fT){eS.initialized=true;dG("head").append(dG('<style>.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'));fT.each(function(){var fT={};fT.sidebar=dG(this);fT.options=eS||{};fT.container=dG(fT.options.containerSelector);if(fT.container.length==0){fT.container=fT.sidebar.parent()}fT.sidebar.parents().css("-webkit-transform","none");fT.sidebar.css({position:"relative",overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"});fT.stickySidebar=fT.sidebar.find(".theiaStickySidebar");if(fT.stickySidebar.length==0){var aN=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;fT.sidebar.find("script").filter(function(dG,eS){return eS.type.length===0||eS.type.match(aN)}).remove();fT.stickySidebar=dG("<div>").addClass("theiaStickySidebar").append(fT.sidebar.children());fT.sidebar.append(fT.stickySidebar)}fT.marginTop=parseInt(fT.sidebar.css("margin-top"));fT.marginBottom=parseInt(fT.sidebar.css("margin-bottom"));fT.paddingTop=parseInt(fT.sidebar.css("padding-top"));fT.paddingBottom=parseInt(fT.sidebar.css("padding-bottom"));var bJ=fT.stickySidebar.offset().top;var dO=fT.stickySidebar.outerHeight();fT.stickySidebar.css("padding-top",0);fT.stickySidebar.css("padding-bottom",0);bJ-=fT.stickySidebar.offset().top;dO=fT.stickySidebar.outerHeight()-dO-bJ;if(bJ==0){fT.stickySidebar.css("padding-top",0);fT.stickySidebarPaddingTop=0}else{fT.stickySidebarPaddingTop=0}if(dO==0){fT.stickySidebar.css("padding-bottom",0);fT.stickySidebarPaddingBottom=0}else{fT.stickySidebarPaddingBottom=0}fT.previousScrollTop=null;fT.fixedScrollTop=0;eQ();fT.onScroll=function(fT){if(!fT.stickySidebar.is(":visible")){return}if(dG("body").width()<fT.options.minWidth){eQ();return}if(fT.options.disableOnResponsiveLayouts){var aN=fT.sidebar.outerWidth(fT.sidebar.css("float")=="none");if(aN+50>fT.container.width()){eQ();return}}var bJ=dG(document).scrollTop();var dO="static";if(bJ>=fT.container.offset().top+(fT.paddingTop+fT.marginTop-fT.options.additionalMarginTop)){var bG=fT.paddingTop+fT.marginTop+eS.additionalMarginTop;var cW=fT.paddingBottom+fT.marginBottom+eS.additionalMarginBottom;var gh=fT.container.offset().top;var fC=fT.container.offset().top+bV(fT.container);var bA=0+eS.additionalMarginTop;var fa;var ha=fT.stickySidebar.outerHeight()+bG+cW<dG(window).height();if(ha){fa=bA+fT.stickySidebar.outerHeight()}else{fa=dG(window).height()-fT.marginBottom-fT.paddingBottom-eS.additionalMarginBottom}var gQ=gh-bJ+fT.paddingTop+fT.marginTop;var fE=fC-bJ-fT.paddingBottom-fT.marginBottom;var fW=fT.stickySidebar.offset().top-bJ;var hb=fT.previousScrollTop-bJ;if(fT.stickySidebar.css("position")=="fixed"){if(fT.options.sidebarBehavior=="modern"){fW+=hb}}if(fT.options.sidebarBehavior=="stick-to-top"){fW=eS.additionalMarginTop}if(fT.options.sidebarBehavior=="stick-to-bottom"){fW=fa-fT.stickySidebar.outerHeight()}if(hb>0){fW=Math.min(fW,bA)}else{fW=Math.max(fW,fa-fT.stickySidebar.outerHeight())}fW=Math.max(fW,gQ);fW=Math.min(fW,fE-fT.stickySidebar.outerHeight());var cS=fT.container.height()==fT.stickySidebar.outerHeight();if(!cS&&fW==bA){dO="fixed"}else if(!cS&&fW==fa-fT.stickySidebar.outerHeight()){dO="fixed"}else if(bJ+fW-fT.sidebar.offset().top-fT.paddingTop<=eS.additionalMarginTop){dO="static"}else{dO="absolute"}}if(dO=="fixed"){fT.stickySidebar.css({position:"fixed",width:fT.sidebar.width(),top:fW,left:fT.sidebar.offset().left+parseInt(fT.sidebar.css("padding-left"))})}else if(dO=="absolute"){var cE={};if(fT.stickySidebar.css("position")!="absolute"){cE.position="absolute";cE.top=bJ+fW-fT.sidebar.offset().top-fT.stickySidebarPaddingTop-fT.stickySidebarPaddingBottom}cE.width=fT.sidebar.width();cE.left="";fT.stickySidebar.css(cE)}else if(dO=="static"){eQ()}if(dO!="static"){if(fT.options.updateSidebarHeight==true){fT.sidebar.css({"min-height":fT.stickySidebar.outerHeight()+fT.stickySidebar.offset().top-fT.sidebar.offset().top+fT.paddingBottom})}}fT.previousScrollTop=bJ};fT.onScroll(fT);dG(document).scroll(function(dG){return function(){dG.onScroll(dG)}}(fT));dG(window).resize(function(dG){return function(){dG.stickySidebar.css({position:"static"});dG.onScroll(dG)}}(fT));function eQ(){fT.fixedScrollTop=0;fT.sidebar.css({"min-height":"0px"});fT.stickySidebar.css({position:"static",width:""})}function bV(eS){var fT=eS.height();eS.children().each(function(){fT=Math.max(fT,dG(this).height())});return fT}})}}})(jQuery);$(document).ready(function(){$("#main .visible-lg-block").theiaStickySidebar({additionalMarginTop:80,additionalMarginBottom:10})});