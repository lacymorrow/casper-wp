/*! Casper 04-02-2018 */
!function(a,b){"use strict";var c=function(){var b,c,d=a.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,e=document.getElementsByTagName("body")[0].getElementsByTagName("img"),f=a.devicePixelRatio&&a.devicePixelRatio>=1.2?1:0;if(0!==e.length)for(c=e[0].hasAttribute?function(a,b){return a.hasAttribute(b)}:function(a,b){return null!==a.getAttribute(b)},b=0;b<e.length;b++){var g=e[b],h=f&&c(g,"data-src2x")?"data-src2x":"data-src",i=f&&c(g,"data-src-base2x")?"data-src-base2x":"data-src-base";if(g.onload=function(){this.style.opacity="1"},c(g,h))for(var j=c(g,i)?g.getAttribute(i):"",k=g.getAttribute(h),l=k.split(","),m=0;m<l.length;m++){var n,o,p=l[m].replace(":","||").split("||"),q=p[0],r=p[1];if(-1!==q.indexOf("<"))if(n=q.split("<"),l[m-1]){var s=l[m-1].split(/:(.+)/),t=s[0].split("<");o=d<=n[1]&&d>t[1]}else o=d<=n[1];else if(n=q.split(">"),l[m+1]){var u=l[m+1].split(/:(.+)/),v=u[0].split(">");o=d>=n[1]&&d<v[1]}else o=d>=n[1];if(o){var w,x=-1!==r.indexOf("//")?1:0;w=1===x?r:j+r,g.src!==w&&g.setAttribute("src",w);break}}}},d=function(){b(".post-content").fitVids(),b(a).load(function(){c()})};b(document).ready(function(){d()})}(window,jQuery),function(a){"use strict";a.fn.fitVids=function(b){var c={customSelector:null};if(!document.getElementById("fit-vids-style")){var d=document.createElement("div"),e=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];d.className="fit-vids-style",d.id="fit-vids-style",d.style.display="none",d.innerHTML="&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>",e.parentNode.insertBefore(d,e)}return b&&a.extend(c,b),this.each(function(){var b=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];c.customSelector&&b.push(c.customSelector);var d=a(this).find(b.join(","));d=d.not("object object"),d.each(function(){var b=a(this);if(!("embed"===this.tagName.toLowerCase()&&b.parent("object").length||b.parent(".fluid-width-video-wrapper").length)){var c="object"===this.tagName.toLowerCase()||b.attr("height")&&!isNaN(parseInt(b.attr("height"),10))?parseInt(b.attr("height"),10):b.height(),d=isNaN(parseInt(b.attr("width"),10))?b.width():parseInt(b.attr("width"),10),e=c/d;if(!b.attr("id")){var f="fitvid"+Math.floor(999999*Math.random());b.attr("id",f)}b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),b.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto),function(){var a,b,c;if((a=document.getElementById("site-navigation"))&&void 0!==(b=a.getElementsByTagName("h1")[0])){if(void 0===(c=a.getElementsByTagName("ul")[0]))return void(b.style.display="none");-1===c.className.indexOf("nav-menu")&&(c.className+=" nav-menu"),b.onclick=function(){-1!==a.className.indexOf("toggled")?a.className=a.className.replace(" toggled",""):a.className+=" toggled"}}}(),function(){var a=navigator.userAgent.toLowerCase().indexOf("webkit")>-1,b=navigator.userAgent.toLowerCase().indexOf("opera")>-1,c=navigator.userAgent.toLowerCase().indexOf("msie")>-1;if((a||b||c)&&void 0!==document.getElementById){var d=window.addEventListener?"addEventListener":"attachEvent";window[d]("hashchange",function(){var a=document.getElementById(location.hash.substring(1));a&&(/^(?:a|select|input|button|textarea)$/i.test(a.tagName)||(a.tabIndex=-1),a.focus())},!1)}}();