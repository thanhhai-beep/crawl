function loadHTMLByAjax(firstLoad,more,orderby,tagType,opraType){if(firstLoad){var page=1;$("#more").attr("data-page",Number(page)+1);var url="/channel/list_"+tagType+"_"+opraType+"_-1_"+page+".html?flag=asyn&orderby="+orderby;$.ajax({url:url,type:"get",success:function(html){$("#loading").hide();$("#content").empty();$("#content").append(html);$("#orderby").attr("data-id",orderby);$(".submenu").html($("#submenu_load").html());$(".color_qb").html($("#color_qb_load").html());$(".operating").html($("#operating_load").html());$(".yy_submenu").html($("#yy_submenu_load").html());var tagType=$("#tagType").attr("data-id");$(".switch-"+tagType).addClass("switch");var opraType=$("#opraType").attr("data-id");$(".switch-opra"+opraType).addClass("switch_1");var size=Number($(".sizeAndPageSize").attr("data-size"));var pageSize=Number($(".sizeAndPageSize").attr("data-page"));var pageCnt=Number($(".sizeAndPageSize").attr("data-pageCnt"));if(pageCnt==pageSize){$("#more").hide();$(".xl_cd4").css("display","none")}else{if(size<pageSize){if(size===0){$("#more").hide();$(".xl_cd4").css("display","block")}else{$("#more").hide();$(".xl_cd4").css("display","none")}}else{$("#more").show();$(".xl_cd4").css("display","none")}}$(".more_hide_data").empty()}})}if(more){$("#more").hide();$("#loading").show();var page=$("#more").attr("data-page");$("#more").attr("data-page",Number(page)+1);var orderby=$("#orderby").attr("data-id");var tagType=$("#tagType").attr("data-id");var opraType=$("#opraType").attr("data-id");var url="/channel/list_"+tagType+"_"+opraType+"_-1_"+page+".html?flag=asyn&orderby="+orderby;$.ajax({url:url,type:"get",success:function(html){$("#loading").hide();$("#content").append(html);var size=Number($(".sizeAndPageSize:last").attr("data-size"));var pageSize=Number($(".sizeAndPageSize:last").attr("data-page"));if(size<pageSize){}else{$("#more").show()}$(".more_hide_data").empty()}})}}$(function(){$(".more_m").click(function(){loadHTMLByAjax(false,true)})});function replaceParamVal(paramName,replaceWith){var oUrl=this.location.href.toString();var re=eval("/("+paramName+"=)([^&]*)/gi");var nUrl=oUrl.replace(re,paramName+"="+replaceWith);this.location=nUrl}function getUrlParam(name){var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");var r=window.location.search.substr(1).match(reg);if(r!=null){return unescape(r[2])}return null}$(".search_sou input").on("click",function(){$.trim($(this).val())==""&&$(".search-hot").fadeIn(100)});$(".close").on("click touchstart",function(){$(this).parents(".search-hot").fadeOut(100)});$(".search-hot li a").on("touchstart",function(){window.location.href=$(this).attr("href")});function htmlList(data){var html="";for(var i in data){html+='<li><a href="'+data[i].href+'" ontouchstart="reportSearch('+data[i].id+", "+data[i].categoryTO.resourceType+", '"+data[i].name+"')\" ><i>"+data[i].name.charAt(0)+"</i>"+data[i].name.substr(1,data[i].name.length-1)+"</a></li>"}return html}function serchAjax(url,data){$.ajax({url:url,dataType:"json",type:"get",data:data}).done(function(res){if(res.apps.length>0){$(".input-list").fadeIn().find("ul").html(htmlList(res.apps))}})}$(".search_sou input").on("keyup",function(){var $this=$(this);var url="https://x.d.cn/search/ls";var kwd=$.trim($this.val()),pn=1;var data={kwd:kwd,pn:pn};if($.trim($this.val())!==""){$(".search-hot").fadeOut(100);serchAjax(url,data)}});$(".list-close").on("touchstart",function(){$(this).parents(".input-list").fadeOut()});$(".input-list").find("ul").on("touchstart","li",function(){window.location.href=$(this).find("a").attr("href")});$(".search_sou form").on("submit",function(e){e.preventDefault();var $this=$(this);var url=$this.attr("action");var text=$.trim($this.find("input[type='text']").val());if(text!==""){window.location.href=url+"?keyword="+text}});$(".myNav>div").on("touchstart click",function(e){var $this=$(this);var index=$this.index();if($this.hasClass("curr")){$this.add($(".x_cd").eq(index)).removeClass("curr")}else{$this.add($(".x_cd").eq(index)).addClass("curr").siblings().removeClass("curr")}e.preventDefault()});$(".x_cd ").on("touchstart click","button",function(e){var $this=$(this);var text=$this.text();var id=$this.data("id");if($this.parent().hasClass("qie_h")){$this.parents(".x_cd").find(".qie_h button").siblings().removeClass("switch");$this.addClass("switch")}else{$this.addClass("switch").siblings().removeClass("switch")}$(".myNav>div.curr").find("p").data("id",id);$(".myNav>div.curr").removeClass("curr").find("p").text(text);$this.parents(".x_cd").removeClass("curr");var orderby=$("#orderby").data("id");var tagType=$("#tagType").data("id");var opraType=$("#opraType").data("id");loadHTMLByAjax(true,false,orderby,tagType,opraType);e.preventDefault()});function reportSearch(id,type,name){$.ajax({url:"/djnetgame/channel/report_search.html",type:"POST",data:{resourceId:id,resourceType:type,resourceName:name},dataType:"json",async:true})};