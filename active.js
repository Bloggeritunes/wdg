﻿var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(b,f,g){if(g.get||g.set)throw new TypeError("ES3 does not support getters and setters.");b!=Array.prototype&&b!=Object.prototype&&(b[f]=g.value)};$jscomp.getGlobal=function(b){return"undefined"!=typeof window&&window===b?b:"undefined"!=typeof global?global:b};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(b){return $jscomp.SYMBOL_PREFIX+(b||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var b=$jscomp.global.Symbol.iterator;b||(b=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[b]&&$jscomp.defineProperty(Array.prototype,b,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(b){var f=0;return $jscomp.iteratorPrototype(function(){return f<b.length?{done:!1,value:b[f++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(b){$jscomp.initSymbolIterator();b={next:b};b[$jscomp.global.Symbol.iterator]=function(){return this};return b};$jscomp.array=$jscomp.array||{};$jscomp.iteratorFromArray=function(b,f){$jscomp.initSymbolIterator();b instanceof String&&(b+="");var g=0,d={next:function(){if(g<b.length){var e=g++;return{value:f(e,b[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d};
$jscomp.polyfill=function(b,f,g,d){if(f){g=$jscomp.global;b=b.split(".");for(d=0;d<b.length-1;d++){var e=b[d];e in g||(g[e]={});g=g[e]}b=b[b.length-1];d=g[b];f=f(d);f!=d&&null!=f&&$jscomp.defineProperty(g,b,{configurable:!0,writable:!0,value:f})}};$jscomp.polyfill("Array.prototype.values",function(b){return b?b:function(){return $jscomp.iteratorFromArray(this,function(b,g){return g})}},"es6","es3");
Html5Oyunlar("html5oyunlar.import",{name:"EventTracker",deps:"TrackerData Tracker LocalStorage Utils JSLib Portal RefTag FeatureDetector".split(" "),module:function(){return function(b,f,g,d,e,n,k,m){if(window.trackerInstance)return e("html5oyunlar.debug.%s.eventTracker".replace("%s","info"),"reuse instance var"),window.trackerInstance;var c=this,h,a=e.ns+".module.tracker.event.",p="eventCategory eventAction eventLabel eventValue timing properties".split(" "),v={"interval.communicate":10,"interval.heartbeat":120,
"net.sendFormat":"autoselect","net.sendMethod":"post","net.dataFormat":"object"},q=0,t=[],u,r=!1,w=d.getNavigationStartTime(),l={},x=function(a){h?b.getSessionId(function(b){g.getItem({key:"TRACKER.event."+b},function(b){a(d.isArray(b)?b:[])})}):a(t)},H=function(a,c){h?b.getSessionId(function(b){g.setItem({key:"TRACKER.event."+b,value:a,expires:1E3},function(b){h=b;d.isFunction(c)&&c(a)})}):(t=a,d.isFunction(c)&&c(t))},I=function(){h&&b.getSessionId(function(a){g.removeItem("TRACKER.event."+a)});
t=[]},J=function(a,b){x(function(c){c.push(a);H(c);b(c)})},y=function(a,b,l){l=l||d.emptyFn;!1===("object"===typeof b&&Object(b)===b)&&(b={sendFormat:c.settings.get("net.sendFormat"),sendMethod:c.settings.get("net.sendMethod"),dataFormat:c.settings.get("net.dataFormat")});d.isArray(a)||(a=[a]);f.send({settings:b,request:{eventList:a}},l)},K=function(a,b){var c;return{start:function(){c=window.setInterval(b,a)},stop:function(){window.clearInterval(c)}}},z=function(a,b,c){l[a]=K(1E3*b,c);return l[a]},
A=function(){for(var a in l)l[a]&&l[a].stop();w=0},B=function(a){a=a||d.emptyFn;!0===e.get("tracker.event.disable")&&A();x(function(b){a(b);e("html5oyunlar.debug.%s.eventTracker".replace("%s","debug"),{msg:"communicate queue: ",data:b});0<b.length&&(y(b),I())})},L=function(){w||(w=+new Date);z("communicate",c.settings.get("interval.communicate"),B);z("heartbeat",c.settings.get("interval.heartbeat"),function(){var a=b.getPageInfo();delete a.userAgent;delete a.referrerURL;y({eventCategory:"heartbeat",
eventAction:"ping",timing:parseInt(+new Date-w,10),properties:a})});l.communicate.start();l.heartbeat.start()},C=function(a){var b,c=!0;if(!0===d.isArray(a))return d.each(a,function(a){!1===C(a)&&(c=!1)}),c;if(!1===("object"===typeof a&&Object(a)===a))return!1;for(b in a)if(d.has(a,b)&&!1===d.contains(p,b)){c=!1;break}return c},D=function(a,c){b.getPageInSession(function(b){d.each(a,function(a){a.timing=parseInt(+new Date-w,10);a.pageInSession=b});c(a)})},E=function(a,b){var c={callback:a.callback||
b||d.emptyFn,settings:a.settings||void 0,data:a.data||a};if(!1===C(c.data))e("html5oyunlar.debug.%s.eventTracker".replace("%s","debug"),"trackExpress() data argument was invalidated"),c.callback(!1);else return!1===d.isArray(c.data)&&(c.data=[c.data]),c},F=function(a){!1===r&&0===q?b.incrementPageInSession(function(b){r=!0;a()}):a()},G=function(a){a=a||d.emptyFn;k.getReferrerTag(function(c){var l=b.getPageInfo();l.referrerTag=c;f.send({settings:{sendFormat:"gif",sendMethod:"get",dataFormat:"string"},
request:l},a)})};c.settings={values:v,get:function(a){a=v[a];return void 0!==a?a:null},set:function(a,b){u||(v[a]=b)}};c.sendPageview=function(a){a=a||d.emptyFn;e("html5oyunlar.debug.%s.eventTracker".replace("%s","debug"),"sendPageview, pageviewSequence: "+q+", internalPageview?:"+r);q+=1;1===q&&!0===r?G(a):b.incrementPageInSession(function(b){G(a)})};window.trackerInstance={setTracker:function(a){f=a},init:function(){if(u)return!1;k.init();h=m.localStorage()?!0:!1;d.each(c.settings.values,function(b,
l){var p=e.get(a+l);null!==p&&c.settings.set(l,p)});L();u=!0},stop:function(){A();l={};r=u=!1;q=0},track:function(a,b){var c=E(a,b);c&&F(function(){D(c.data,function(a){d.each(a,function(a){J(a,function(b){e("html5oyunlar.debug.%s.eventTracker".replace("%s","info"),{msg:"Queued localStorage "+(h?"supported":"unsupported"),added:a,queue:b})})})});x(function(a){c.callback(a)})})},trackExpress:function(a,b){var c=E(a,b);c&&F(function(){D(c.data,function(a){y(a,c.settings,c.callback)})})},sendPageview:c.sendPageview,
settings:c.settings,flushQueue:B};e("html5oyunlar.debug.%s.eventTracker".replace("%s","info"),"instance created");return window.trackerInstance}}()});Html5Oyunlar("html5oyunlar.module.import.loadmodule",{name:"Heatmap",deps:["JSLib"],module:function(b){function f(c,h,a){if(c&&h&&a){if(!e&&0<d.width&&0<d.height){e=!0;var p=k.init;k.track===p&&n.push(void 0);b(p,void 0);0<d.width&&0<d.height&&f("browser","viewportSize",d.width+"x"+d.height)}e&&(p=k.track,c={eventCategory:c,eventAction:h,eventLabel:a},k.track===p&&n.push(c),b(p,c))}}var g={left:0,top:0},d={width:0,height:0},e=!1,n=[],k={init:"tracker.event.init",track:"tracker.event.track"},m=Math.round;
return{trackClick:function(b){if(b&&b.hasOwnProperty("x")&&b.hasOwnProperty("y")){var d;d=m(b.x+document.body.scrollLeft+document.documentElement.scrollLeft-g.left);b=m(b.y+document.body.scrollTop+document.documentElement.scrollTop-g.top);d=[d,b].join();f("interaction","click",d)}},setOffset:function(b){g.left=m(b.left)||0;g.top=m(b.top)||0},getOffset:function(){return g},setViewport:function(b){d.width=m(b.width)||0;d.height=m(b.height)||0},getViewport:function(){return d},__getEvents:function(){return n}}}});Html5Oyunlar("html5oyunlar.import",{name:"PageTracker",deps:["EventTracker"],module:function(b){return{track:function(f,g){b.sendPageview(f||g)}}}});Html5Oyunlar("html5oyunlar.import",{name:"RefTag",deps:["DOMEvent","Cache"],module:function(b,f){function g(a){return a&&"BODY"!==a.tagName?-1<a.className.indexOf("wdg_")?a:g(a.parentNode):!1}function d(a,b){return a&&b?a.getAttribute("name")?a:a===b?!1:d(a.parentNode,b):!1}function e(a,b){return b&&a&&a!==b?"LI"===a.tagName||"ARTICLE"===a.tagName?a:e(a.parentNode,b):!1}function n(a){var b=a.widget;a.namedElement&&(b+="-"+a.namedElement.getAttribute("name"));a.position&&(b+="-"+a.position);return b}function k(a){a=
a||window.event;var b=a.target||a.srcElement;if("object"===typeof b){a=g(b);var c;c=a?(c=/wdg_(\w+)/.exec(a.className))?c[1]:!1:!1;var h=d(b,a);if(b=e(b,h||a)){for(var k=1;b=b.previousSibling;)"LI"!==b.tagName&&"ARTICLE"!==b.tagName||k++;b=k}else b=!1;a&&c&&(a={page:m,widget:c,namedElement:h||!1,position:b||!1},f.setItem({key:"reffererTag",value:n(a),expires:60}))}}var m,c=window,h=(c.performance||c.webkitPerformance||c.mozPerformance||c.msPerformance||{}).navigation;return{init:function(a){m=a;b.add("body",
"click",k)},getReferrerTag:function(a){f.getItem({key:"reffererTag"},function(b){if(!b&&h&&h.type)switch(h.type){case h.TYPE_RELOAD:b="browser_reload";break;case h.TYPE_BACK_FORWARD:b="browser_back_forward"}a(b||!1);f.removeItem({key:"reffererTag"})})}}}});Html5Oyunlar("html5oyunlar.import",{name:"TrackerData",deps:"Utils Cache SPAPI JSLib Portal FeatureDetector".split(" "),module:function(b,f,g,d,e,n){var k=this,m=d.get(k.ns+".module.tracker.environment"),c={},h=function(d){c.hasOwnProperty("Tracker.session")?d(c["Tracker.session"]):f.getItem({key:"Tracker.session"},function(c){!b.isEmpty(c)&&b.isNumber(c.sessionId)?d(c):a({sessionId:+new Date,pageInSession:0},d)})},a=function(a,l){l=l||b.emptyFn;var d={sessionId:a.sessionId,pageInSession:a.pageInSession};
f.setItem({key:"Tracker.session",value:d,expires:0},function(a){a||(c["Tracker.session"]=d);l(d)})},p=function(a){var b=Math.floor(1E15*Math.random());f.setItem({key:"Tracker.visitorId",value:b,expires:"never"},function(d){d||(c["Tracker.visitorId"]=b);a(b)})},v=function(a){c.hasOwnProperty("api.account.getToken")?a(c["api.account.getToken"]):Html5Oyunlar("api.account.getToken",{cache:!0},function(b){var d=b.auth.token.substr(8,16);c["api.account.getToken"]=d;b.isError||a(d)})},q=function(a,c){a=a||
"";c=c||function(a){return a};return function(){var d=a.substr(1),f,e,h=[];b.each(d.split("&"),function(a){e=a.split("=");if(0===a.length)return!1;f=c({name:e[0],value:2===e.length?e[1]:null});b.isObject(f)&&h.push(f)});return h}()},t=function(a){var c="campaignMedium campaignSource campaignName campaignElement adwordsAdgroupId adwordsKeyword".split(" "),d=["utm_medium","utm_source","utm_campaign","utm_content"],f=[];b.each(c,function(a){f.push(a.toLowerCase())});return q(a,function(a){var e=a.name.toLowerCase();
if(b.contains(f,e))return a.name=c[f.indexOf(e)],a;if(b.contains(d,e))return a.name=c[d.indexOf(e)],a})},u=function(){var a={},b=window.document,c=window.navigator,d=k.globals;a.location=d.hasOwnProperty("location")?d.location:b.URL;a.referrer=d.hasOwnProperty("referrer")?d.referrer:b.referrer;a.userAgent=d.hasOwnProperty("userAgent")?d.userAgent:c.userAgent;return a},r=function(){var a=function(a){var c={},d=window.document.createElement("a");d.href=a;b.each("href host hostname pathname port protocol search hash".split(" "),
function(a){c[a]=0<d[a].length?d[a]:null});return c},c=u();return{referrer:a(c.referrer),location:a(c.location),userAgent:c.userAgent,environment:m}};k.globals={};k.getVisitorId=function(a){c.hasOwnProperty("Tracker.visitorId")?a(c["Tracker.visitorId"]):f.getItem("Tracker.visitorId",function(b){b?a(b):p(a)})};return{getPageInfo:function(){var a=r(),c,d,f;c={pageType:e.get("pagetype"),pageTypeDetail:e.get("pagetypedetail"),portalVersion:e.get("portalversion"),requestId:e.get("requestid"),userAgent:a.userAgent,
referrerURL:a.referrer.href,theme:e.get("theme")};d=e.get("testgroup");f=e.get("testvariant");if(d||f)c.testGroup=d,c.testVariant=f;d=e.get("pageid");/^[0-9]+$/.test(d)&&(c.pageId=d);(d=e.get("devicetype"))&&(c.deviceType=d);b.each(t(a.location.search),function(a){c[a.name]=a.value});return c},getCommonData:function(c,d,f){f=!1;c.environment=m;v(function(e){c.token=e;k.getVisitorId(function(e){c.visitorId=e;h(function(e){f&&a(e);b.combine(c,e);d(c)})})})},incrementPageInSession:function(b){h(function(c){c.pageInSession+=
1;a(c,b)})},getPageInSession:function(a){h(function(b){a(b.pageInSession)})},getSessionId:function(a){h(function(b){a(b.sessionId)})},getVisitorId:k.getVisitorId,setGlobals:function(a){k.globals=a}}}});Html5Oyunlar("html5oyunlar.import",{name:"Tracker",deps:["TrackerData","Utils","Net","JSON"],module:function(b,f,g,d){var e=this.getApi(),n=new Image,k,m=function(b){var d="",a;for(a in b)!f.isEmpty(b[a])&&f.has(b,a)&&(d=f.isObject(b[a])?d+m(b[a]):d+("&"+a+"="+encodeURIComponent(b[a])));2E3<d.length&&(d=d.substring(0,2E3));return d};e.get(this.ns+".module.tracker.endpoint")||e.set(this.ns+".module.tracker.endpoint","{$tracker_endpoint}");k=e.get(this.ns+".module.tracker.endpoint");return{getVisitorId:b.getVisitorId,
setNet:function(b){g=b},send:function(c,e){var a=c.settings;e=e||f.emptyFn;switch(a.sendFormat){case "autoselect":case "xhr":case "cors":case "jsonp":b.getCommonData(c.request,function(b){b=d.stringify(b);"autoselect"===a.sendFormat?g.set("transport",["cors","jsonp"]):g.set("transport",[a.sendFormat]);g.send({url:k,type:a.sendMethod,data:b},f.emptyFn);e(b)});break;case "gif":b.getCommonData(c.request,function(b){n.src="string"===a.dataFormat?k+"?"+m(b).substring(1):k+"?"+d.stringify(b);f.isFunction(e)&&
e(b)})}}}}});Html5Oyunlar("html5oyunlar.import",{name:"ThumbnailTracker",deps:["DOMSelect","SWPUtils","BeLazy","EventTracker"],module:function(b,f,g,d){var e=[],n=null,k=function(a){if(a.getAttribute("data-appid")||a.getAttribute("data-path"))e.push(a),n||(n=setTimeout(m,1E3))},m=function(){var a,b=[],c=[];n=null;a=e;e=[];b={};f.each(a,function(a){if(!a.getAttribute("data-ctr-processed")){var c=a.getAttribute("data-widget")||"unknown",d=a.getAttribute("data-label"),e=c+d;b[e]||(b[e]={widget:c,data:[]},d&&(b[e].label=
d));var c=a.getBoundingClientRect(),d=void 0!==window.pageYOffset?window.pageYOffset:document.documentElement.scrollTop,f=void 0!==window.pageYOffset?window.pageXOffset:document.documentElement.scrollLeft;b[e].data.push({id:a.getAttribute("data-appid")||0,path:a.getAttribute("data-path")||"-",index:a.getAttribute("data-index")||0,test_group:a.getAttribute("data-test")||null,x:Math.floor(c.left+f),y:Math.floor(c.top+d)});a.setAttribute("data-ctr-processed",!0)}});f.each(b,function(a){a.data=JSON.stringify(a.data);
c.push({eventCategory:"thumbnail",eventAction:"view",properties:a})});d.trackExpress(c)},c=function(a){f.each(b.getAll("img[data-appid]",a),h);f.each(b.getAll("img[data-path]",a),h)},h=function(a){if(a.getAttribute("data-appid")||a.getAttribute("data-path"))f.hasClass(a,"lazyload")||a.getAttribute("data-ctr-processed")||g.until("visible",a,k,!1)};return{init:function(){g.registerImageloadCallback(k);c(document)},track:c,trackElement:h}}});