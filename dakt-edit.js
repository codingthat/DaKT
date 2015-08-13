"use strict";

/*! URI.js v1.16.0 http://medialize.github.io/URI.js/ */
/* build contains: IPv6.js, URI.js */
(function(l,p){"object"===typeof exports?module.exports=p():"function"===typeof define&&define.amd?define(p):l.IPv6=p(l)})(this,function(l){var p=l&&l.IPv6;return{best:function(f){f=f.toLowerCase().split(":");var k=f.length,d=8;""===f[0]&&""===f[1]&&""===f[2]?(f.shift(),f.shift()):""===f[0]&&""===f[1]?f.shift():""===f[k-1]&&""===f[k-2]&&f.pop();k=f.length;-1!==f[k-1].indexOf(".")&&(d=7);var g;for(g=0;g<k&&""!==f[g];g++);if(g<d)for(f.splice(g,1,"0000");f.length<d;)f.splice(g,0,"0000");for(g=0;g<d;g++){for(var k=
f[g].split(""),l=0;3>l;l++)if("0"===k[0]&&1<k.length)k.splice(0,1);else break;f[g]=k.join("")}var k=-1,m=l=0,p=-1,r=!1;for(g=0;g<d;g++)r?"0"===f[g]?m+=1:(r=!1,m>l&&(k=p,l=m)):"0"===f[g]&&(r=!0,p=g,m=1);m>l&&(k=p,l=m);1<l&&f.splice(k,l,"");k=f.length;d="";""===f[0]&&(d=":");for(g=0;g<k;g++){d+=f[g];if(g===k-1)break;d+=":"}""===f[k-1]&&(d+=":");return d},noConflict:function(){l.IPv6===this&&(l.IPv6=p);return this}}});
(function(l,p){"object"===typeof exports?module.exports=p(require("./punycode"),require("./IPv6"),require("./SecondLevelDomains")):"function"===typeof define&&define.amd?define(["./punycode","./IPv6","./SecondLevelDomains"],p):l.URI=p(l.punycode,l.IPv6,l.SecondLevelDomains,l)})(this,function(l,p,f,k){function d(a,b){var c=1<=arguments.length,h=2<=arguments.length;if(!(this instanceof d))return c?h?new d(a,b):new d(a):new d;if(void 0===a){if(c)throw new TypeError("undefined is not a valid argument for URI");
a="undefined"!==typeof location?location.href+"":""}this.href(a);return void 0!==b?this.absoluteTo(b):this}function g(a){return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function u(a){return void 0===a?"Undefined":String(Object.prototype.toString.call(a)).slice(8,-1)}function m(a){return"Array"===u(a)}function z(a,b){var c={},d,n;if("RegExp"===u(b))c=null;else if(m(b))for(d=0,n=b.length;d<n;d++)c[b[d]]=!0;else c[b]=!0;d=0;for(n=a.length;d<n;d++)if(c&&void 0!==c[a[d]]||!c&&b.test(a[d]))a.splice(d,
1),n--,d--;return a}function r(a,b){var c,d;if(m(b)){c=0;for(d=b.length;c<d;c++)if(!r(a,b[c]))return!1;return!0}var n=u(b);c=0;for(d=a.length;c<d;c++)if("RegExp"===n){if("string"===typeof a[c]&&a[c].match(b))return!0}else if(a[c]===b)return!0;return!1}function A(a,b){if(!m(a)||!m(b)||a.length!==b.length)return!1;a.sort();b.sort();for(var c=0,d=a.length;c<d;c++)if(a[c]!==b[c])return!1;return!0}function C(a){return escape(a)}function x(a){return encodeURIComponent(a).replace(/[!'()*]/g,C).replace(/\*/g,
"%2A")}function v(a){return function(b,c){if(void 0===b)return this._parts[a]||"";this._parts[a]=b||null;this.build(!c);return this}}function B(a,b){return function(c,d){if(void 0===c)return this._parts[a]||"";null!==c&&(c+="",c.charAt(0)===b&&(c=c.substring(1)));this._parts[a]=c;this.build(!d);return this}}var D=k&&k.URI;d.version="1.16.0";var e=d.prototype,q=Object.prototype.hasOwnProperty;d._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,
query:null,fragment:null,duplicateQueryParameters:d.duplicateQueryParameters,escapeQuerySpace:d.escapeQuerySpace}};d.duplicateQueryParameters=!1;d.escapeQuerySpace=!0;d.protocol_expression=/^[a-z][a-z0-9.+-]*$/i;d.idn_expression=/[^a-z0-9\.-]/i;d.punycode_expression=/(xn--)/i;d.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;d.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
d.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig;d.findUri={start:/\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,end:/[\s\r\n]|$/,trim:/[`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u201e\u2018\u2019]+$/};d.defaultPorts={http:"80",https:"443",ftp:"21",gopher:"70",ws:"80",wss:"443"};d.invalid_hostname_characters=
/[^a-zA-Z0-9\.-]/;d.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",iframe:"src",embed:"src",source:"src",track:"src",input:"src",audio:"src",video:"src"};d.getDomAttribute=function(a){if(a&&a.nodeName){var b=a.nodeName.toLowerCase();return"input"===b&&"image"!==a.type?void 0:d.domAttributes[b]}};d.encode=x;d.decode=decodeURIComponent;d.iso8859=function(){d.encode=escape;d.decode=unescape};d.unicode=function(){d.encode=x;d.decode=
decodeURIComponent};d.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/ig,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",",
"%3B":";","%3D":"="}}},urnpath:{encode:{expression:/%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/ig,map:{"%21":"!","%24":"$","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"=","%40":"@"}},decode:{expression:/[\/\?#:]/g,map:{"/":"%2F","?":"%3F","#":"%23",":":"%3A"}}}};d.encodeQuery=function(a,b){var c=d.encode(a+"");void 0===b&&(b=d.escapeQuerySpace);return b?c.replace(/%20/g,"+"):c};d.decodeQuery=function(a,b){a+="";void 0===b&&(b=d.escapeQuerySpace);try{return d.decode(b?a.replace(/\+/g,
"%20"):a)}catch(c){return a}};var t={encode:"encode",decode:"decode"},w,y=function(a,b){return function(c){try{return d[b](c+"").replace(d.characters[a][b].expression,function(c){return d.characters[a][b].map[c]})}catch(h){return c}}};for(w in t)d[w+"PathSegment"]=y("pathname",t[w]),d[w+"UrnPathSegment"]=y("urnpath",t[w]);t=function(a,b,c){return function(h){var n;n=c?function(a){return d[b](d[c](a))}:d[b];h=(h+"").split(a);for(var e=0,f=h.length;e<f;e++)h[e]=n(h[e]);return h.join(a)}};d.decodePath=
t("/","decodePathSegment");d.decodeUrnPath=t(":","decodeUrnPathSegment");d.recodePath=t("/","encodePathSegment","decode");d.recodeUrnPath=t(":","encodeUrnPathSegment","decode");d.encodeReserved=y("reserved","encode");d.parse=function(a,b){var c;b||(b={});c=a.indexOf("#");-1<c&&(b.fragment=a.substring(c+1)||null,a=a.substring(0,c));c=a.indexOf("?");-1<c&&(b.query=a.substring(c+1)||null,a=a.substring(0,c));"//"===a.substring(0,2)?(b.protocol=null,a=a.substring(2),a=d.parseAuthority(a,b)):(c=a.indexOf(":"),
-1<c&&(b.protocol=a.substring(0,c)||null,b.protocol&&!b.protocol.match(d.protocol_expression)?b.protocol=void 0:"//"===a.substring(c+1,c+3)?(a=a.substring(c+3),a=d.parseAuthority(a,b)):(a=a.substring(c+1),b.urn=!0)));b.path=a;return b};d.parseHost=function(a,b){a=a.replace(/\\/g,"/");var c=a.indexOf("/"),d;-1===c&&(c=a.length);if("["===a.charAt(0))d=a.indexOf("]"),b.hostname=a.substring(1,d)||null,b.port=a.substring(d+2,c)||null,"/"===b.port&&(b.port=null);else{var n=a.indexOf(":");d=a.indexOf("/");
n=a.indexOf(":",n+1);-1!==n&&(-1===d||n<d)?(b.hostname=a.substring(0,c)||null,b.port=null):(d=a.substring(0,c).split(":"),b.hostname=d[0]||null,b.port=d[1]||null)}b.hostname&&"/"!==a.substring(c).charAt(0)&&(c++,a="/"+a);return a.substring(c)||"/"};d.parseAuthority=function(a,b){a=d.parseUserinfo(a,b);return d.parseHost(a,b)};d.parseUserinfo=function(a,b){var c=a.indexOf("/"),h=a.lastIndexOf("@",-1<c?c:a.length-1);-1<h&&(-1===c||h<c)?(c=a.substring(0,h).split(":"),b.username=c[0]?d.decode(c[0]):null,
c.shift(),b.password=c[0]?d.decode(c.join(":")):null,a=a.substring(h+1)):(b.username=null,b.password=null);return a};d.parseQuery=function(a,b){if(!a)return{};a=a.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,"");if(!a)return{};for(var c={},h=a.split("&"),n=h.length,e,f,k=0;k<n;k++)if(e=h[k].split("="),f=d.decodeQuery(e.shift(),b),e=e.length?d.decodeQuery(e.join("="),b):null,q.call(c,f)){if("string"===typeof c[f]||null===c[f])c[f]=[c[f]];c[f].push(e)}else c[f]=e;return c};d.build=function(a){var b="";
a.protocol&&(b+=a.protocol+":");a.urn||!b&&!a.hostname||(b+="//");b+=d.buildAuthority(a)||"";"string"===typeof a.path&&("/"!==a.path.charAt(0)&&"string"===typeof a.hostname&&(b+="/"),b+=a.path);"string"===typeof a.query&&a.query&&(b+="?"+a.query);"string"===typeof a.fragment&&a.fragment&&(b+="#"+a.fragment);return b};d.buildHost=function(a){var b="";if(a.hostname)b=d.ip6_expression.test(a.hostname)?b+("["+a.hostname+"]"):b+a.hostname;else return"";a.port&&(b+=":"+a.port);return b};d.buildAuthority=
function(a){return d.buildUserinfo(a)+d.buildHost(a)};d.buildUserinfo=function(a){var b="";a.username&&(b+=d.encode(a.username),a.password&&(b+=":"+d.encode(a.password)),b+="@");return b};d.buildQuery=function(a,b,c){var h="",n,e,f,k;for(e in a)if(q.call(a,e)&&e)if(m(a[e]))for(n={},f=0,k=a[e].length;f<k;f++)void 0!==a[e][f]&&void 0===n[a[e][f]+""]&&(h+="&"+d.buildQueryParameter(e,a[e][f],c),!0!==b&&(n[a[e][f]+""]=!0));else void 0!==a[e]&&(h+="&"+d.buildQueryParameter(e,a[e],c));return h.substring(1)};
d.buildQueryParameter=function(a,b,c){return d.encodeQuery(a,c)+(null!==b?"="+d.encodeQuery(b,c):"")};d.addQuery=function(a,b,c){if("object"===typeof b)for(var h in b)q.call(b,h)&&d.addQuery(a,h,b[h]);else if("string"===typeof b)void 0===a[b]?a[b]=c:("string"===typeof a[b]&&(a[b]=[a[b]]),m(c)||(c=[c]),a[b]=(a[b]||[]).concat(c));else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");};d.removeQuery=function(a,b,c){var h;if(m(b))for(c=0,h=b.length;c<h;c++)a[b[c]]=
void 0;else if("RegExp"===u(b))for(h in a)b.test(h)&&(a[h]=void 0);else if("object"===typeof b)for(h in b)q.call(b,h)&&d.removeQuery(a,h,b[h]);else if("string"===typeof b)void 0!==c?"RegExp"===u(c)?!m(a[b])&&c.test(a[b])?a[b]=void 0:a[b]=z(a[b],c):a[b]===c?a[b]=void 0:m(a[b])&&(a[b]=z(a[b],c)):a[b]=void 0;else throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter");};d.hasQuery=function(a,b,c,h){if("object"===typeof b){for(var e in b)if(q.call(b,e)&&!d.hasQuery(a,
e,b[e]))return!1;return!0}if("string"!==typeof b)throw new TypeError("URI.hasQuery() accepts an object, string as the name parameter");switch(u(c)){case "Undefined":return b in a;case "Boolean":return a=Boolean(m(a[b])?a[b].length:a[b]),c===a;case "Function":return!!c(a[b],b,a);case "Array":return m(a[b])?(h?r:A)(a[b],c):!1;case "RegExp":return m(a[b])?h?r(a[b],c):!1:Boolean(a[b]&&a[b].match(c));case "Number":c=String(c);case "String":return m(a[b])?h?r(a[b],c):!1:a[b]===c;default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter");
}};d.commonPath=function(a,b){var c=Math.min(a.length,b.length),d;for(d=0;d<c;d++)if(a.charAt(d)!==b.charAt(d)){d--;break}if(1>d)return a.charAt(0)===b.charAt(0)&&"/"===a.charAt(0)?"/":"";if("/"!==a.charAt(d)||"/"!==b.charAt(d))d=a.substring(0,d).lastIndexOf("/");return a.substring(0,d+1)};d.withinString=function(a,b,c){c||(c={});var h=c.start||d.findUri.start,e=c.end||d.findUri.end,f=c.trim||d.findUri.trim,k=/[a-z0-9-]=["']?$/i;for(h.lastIndex=0;;){var g=h.exec(a);if(!g)break;g=g.index;if(c.ignoreHtml){var l=
a.slice(Math.max(g-3,0),g);if(l&&k.test(l))continue}var l=g+a.slice(g).search(e),m=a.slice(g,l).replace(f,"");c.ignore&&c.ignore.test(m)||(l=g+m.length,m=b(m,g,l,a),a=a.slice(0,g)+m+a.slice(l),h.lastIndex=g+m.length)}h.lastIndex=0;return a};d.ensureValidHostname=function(a){if(a.match(d.invalid_hostname_characters)){if(!l)throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-] and Punycode.js is not available');if(l.toASCII(a).match(d.invalid_hostname_characters))throw new TypeError('Hostname "'+
a+'" contains characters other than [A-Z0-9.-]');}};d.noConflict=function(a){if(a)return a={URI:this.noConflict()},k.URITemplate&&"function"===typeof k.URITemplate.noConflict&&(a.URITemplate=k.URITemplate.noConflict()),k.IPv6&&"function"===typeof k.IPv6.noConflict&&(a.IPv6=k.IPv6.noConflict()),k.SecondLevelDomains&&"function"===typeof k.SecondLevelDomains.noConflict&&(a.SecondLevelDomains=k.SecondLevelDomains.noConflict()),a;k.URI===this&&(k.URI=D);return this};e.build=function(a){if(!0===a)this._deferred_build=
!0;else if(void 0===a||this._deferred_build)this._string=d.build(this._parts),this._deferred_build=!1;return this};e.clone=function(){return new d(this)};e.valueOf=e.toString=function(){return this.build(!1)._string};e.protocol=v("protocol");e.username=v("username");e.password=v("password");e.hostname=v("hostname");e.port=v("port");e.query=B("query","?");e.fragment=B("fragment","#");e.search=function(a,b){var c=this.query(a,b);return"string"===typeof c&&c.length?"?"+c:c};e.hash=function(a,b){var c=
this.fragment(a,b);return"string"===typeof c&&c.length?"#"+c:c};e.pathname=function(a,b){if(void 0===a||!0===a){var c=this._parts.path||(this._parts.hostname?"/":"");return a?(this._parts.urn?d.decodeUrnPath:d.decodePath)(c):c}this._parts.path=this._parts.urn?a?d.recodeUrnPath(a):"":a?d.recodePath(a):"/";this.build(!b);return this};e.path=e.pathname;e.href=function(a,b){var c;if(void 0===a)return this.toString();this._string="";this._parts=d._parts();var h=a instanceof d,e="object"===typeof a&&(a.hostname||
a.path||a.pathname);a.nodeName&&(e=d.getDomAttribute(a),a=a[e]||"",e=!1);!h&&e&&void 0!==a.pathname&&(a=a.toString());if("string"===typeof a||a instanceof String)this._parts=d.parse(String(a),this._parts);else if(h||e)for(c in h=h?a._parts:a,h)q.call(this._parts,c)&&(this._parts[c]=h[c]);else throw new TypeError("invalid input");this.build(!b);return this};e.is=function(a){var b=!1,c=!1,h=!1,e=!1,g=!1,k=!1,l=!1,m=!this._parts.urn;this._parts.hostname&&(m=!1,c=d.ip4_expression.test(this._parts.hostname),
h=d.ip6_expression.test(this._parts.hostname),b=c||h,g=(e=!b)&&f&&f.has(this._parts.hostname),k=e&&d.idn_expression.test(this._parts.hostname),l=e&&d.punycode_expression.test(this._parts.hostname));switch(a.toLowerCase()){case "relative":return m;case "absolute":return!m;case "domain":case "name":return e;case "sld":return g;case "ip":return b;case "ip4":case "ipv4":case "inet4":return c;case "ip6":case "ipv6":case "inet6":return h;case "idn":return k;case "url":return!this._parts.urn;case "urn":return!!this._parts.urn;
case "punycode":return l}return null};var E=e.protocol,F=e.port,G=e.hostname;e.protocol=function(a,b){if(void 0!==a&&a&&(a=a.replace(/:(\/\/)?$/,""),!a.match(d.protocol_expression)))throw new TypeError('Protocol "'+a+"\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");return E.call(this,a,b)};e.scheme=e.protocol;e.port=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a&&(0===a&&(a=null),a&&(a+="",":"===a.charAt(0)&&(a=a.substring(1)),a.match(/[^0-9]/))))throw new TypeError('Port "'+
a+'" contains characters other than [0-9]');return F.call(this,a,b)};e.hostname=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a){var c={};if("/"!==d.parseHost(a,c))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');a=c.hostname}return G.call(this,a,b)};e.host=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?d.buildHost(this._parts):"";if("/"!==d.parseHost(a,this._parts))throw new TypeError('Hostname "'+
a+'" contains characters other than [A-Z0-9.-]');this.build(!b);return this};e.authority=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?d.buildAuthority(this._parts):"";if("/"!==d.parseAuthority(a,this._parts))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');this.build(!b);return this};e.userinfo=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.username)return"";var c=d.buildUserinfo(this._parts);
return c.substring(0,c.length-1)}"@"!==a[a.length-1]&&(a+="@");d.parseUserinfo(a,this._parts);this.build(!b);return this};e.resource=function(a,b){var c;if(void 0===a)return this.path()+this.search()+this.hash();c=d.parse(a);this._parts.path=c.path;this._parts.query=c.query;this._parts.fragment=c.fragment;this.build(!b);return this};e.subdomain=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.length-
this.domain().length-1;return this._parts.hostname.substring(0,c)||""}c=this._parts.hostname.length-this.domain().length;c=this._parts.hostname.substring(0,c);c=new RegExp("^"+g(c));a&&"."!==a.charAt(a.length-1)&&(a+=".");a&&d.ensureValidHostname(a);this._parts.hostname=this._parts.hostname.replace(c,a);this.build(!b);return this};e.domain=function(a,b){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";
var c=this._parts.hostname.match(/\./g);if(c&&2>c.length)return this._parts.hostname;c=this._parts.hostname.length-this.tld(b).length-1;c=this._parts.hostname.lastIndexOf(".",c-1)+1;return this._parts.hostname.substring(c)||""}if(!a)throw new TypeError("cannot set domain empty");d.ensureValidHostname(a);!this._parts.hostname||this.is("IP")?this._parts.hostname=a:(c=new RegExp(g(this.domain())+"$"),this._parts.hostname=this._parts.hostname.replace(c,a));this.build(!b);return this};e.tld=function(a,
b){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.lastIndexOf("."),c=this._parts.hostname.substring(c+1);return!0!==b&&f&&f.list[c.toLowerCase()]?f.get(this._parts.hostname)||c:c}if(a)if(a.match(/[^a-zA-Z0-9-]/))if(f&&f.is(a))c=new RegExp(g(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(c,a);else throw new TypeError('TLD "'+a+'" contains characters other than [A-Z0-9]');
else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");c=new RegExp(g(this.tld())+"$");this._parts.hostname=this._parts.hostname.replace(c,a)}else throw new TypeError("cannot set TLD empty");this.build(!b);return this};e.directory=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path&&!this._parts.hostname)return"";if("/"===this._parts.path)return"/";var c=this._parts.path.length-this.filename().length-
1,c=this._parts.path.substring(0,c)||(this._parts.hostname?"/":"");return a?d.decodePath(c):c}c=this._parts.path.length-this.filename().length;c=this._parts.path.substring(0,c);c=new RegExp("^"+g(c));this.is("relative")||(a||(a="/"),"/"!==a.charAt(0)&&(a="/"+a));a&&"/"!==a.charAt(a.length-1)&&(a+="/");a=d.recodePath(a);this._parts.path=this._parts.path.replace(c,a);this.build(!b);return this};e.filename=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||
"/"===this._parts.path)return"";var c=this._parts.path.lastIndexOf("/"),c=this._parts.path.substring(c+1);return a?d.decodePathSegment(c):c}c=!1;"/"===a.charAt(0)&&(a=a.substring(1));a.match(/\.?\//)&&(c=!0);var h=new RegExp(g(this.filename())+"$");a=d.recodePath(a);this._parts.path=this._parts.path.replace(h,a);c?this.normalizePath(b):this.build(!b);return this};e.suffix=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";
var c=this.filename(),h=c.lastIndexOf(".");if(-1===h)return"";c=c.substring(h+1);c=/^[a-z0-9%]+$/i.test(c)?c:"";return a?d.decodePathSegment(c):c}"."===a.charAt(0)&&(a=a.substring(1));if(c=this.suffix())h=a?new RegExp(g(c)+"$"):new RegExp(g("."+c)+"$");else{if(!a)return this;this._parts.path+="."+d.recodePath(a)}h&&(a=d.recodePath(a),this._parts.path=this._parts.path.replace(h,a));this.build(!b);return this};e.segment=function(a,b,c){var d=this._parts.urn?":":"/",e=this.path(),f="/"===e.substring(0,
1),e=e.split(d);void 0!==a&&"number"!==typeof a&&(c=b,b=a,a=void 0);if(void 0!==a&&"number"!==typeof a)throw Error('Bad segment "'+a+'", must be 0-based integer');f&&e.shift();0>a&&(a=Math.max(e.length+a,0));if(void 0===b)return void 0===a?e:e[a];if(null===a||void 0===e[a])if(m(b)){e=[];a=0;for(var g=b.length;a<g;a++)if(b[a].length||e.length&&e[e.length-1].length)e.length&&!e[e.length-1].length&&e.pop(),e.push(b[a])}else{if(b||"string"===typeof b)""===e[e.length-1]?e[e.length-1]=b:e.push(b)}else b?
e[a]=b:e.splice(a,1);f&&e.unshift("");return this.path(e.join(d),c)};e.segmentCoded=function(a,b,c){var e,f;"number"!==typeof a&&(c=b,b=a,a=void 0);if(void 0===b){a=this.segment(a,b,c);if(m(a))for(e=0,f=a.length;e<f;e++)a[e]=d.decode(a[e]);else a=void 0!==a?d.decode(a):void 0;return a}if(m(b))for(e=0,f=b.length;e<f;e++)b[e]=d.encode(b[e]);else b="string"===typeof b||b instanceof String?d.encode(b):b;return this.segment(a,b,c)};var H=e.query;e.query=function(a,b){if(!0===a)return d.parseQuery(this._parts.query,
this._parts.escapeQuerySpace);if("function"===typeof a){var c=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace),e=a.call(this,c);this._parts.query=d.buildQuery(e||c,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);this.build(!b);return this}return void 0!==a&&"string"!==typeof a?(this._parts.query=d.buildQuery(a,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!b),this):H.call(this,a,b)};e.setQuery=function(a,b,c){var e=d.parseQuery(this._parts.query,
this._parts.escapeQuerySpace);if("string"===typeof a||a instanceof String)e[a]=void 0!==b?b:null;else if("object"===typeof a)for(var f in a)q.call(a,f)&&(e[f]=a[f]);else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");this._parts.query=d.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(c=b);this.build(!c);return this};e.addQuery=function(a,b,c){var e=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);
d.addQuery(e,a,void 0===b?null:b);this._parts.query=d.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(c=b);this.build(!c);return this};e.removeQuery=function(a,b,c){var e=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);d.removeQuery(e,a,b);this._parts.query=d.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(c=b);this.build(!c);return this};e.hasQuery=function(a,b,c){var e=d.parseQuery(this._parts.query,
this._parts.escapeQuerySpace);return d.hasQuery(e,a,b,c)};e.setSearch=e.setQuery;e.addSearch=e.addQuery;e.removeSearch=e.removeQuery;e.hasSearch=e.hasQuery;e.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()};e.normalizeProtocol=function(a){"string"===typeof this._parts.protocol&&
(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!a));return this};e.normalizeHostname=function(a){this._parts.hostname&&(this.is("IDN")&&l?this._parts.hostname=l.toASCII(this._parts.hostname):this.is("IPv6")&&p&&(this._parts.hostname=p.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!a));return this};e.normalizePort=function(a){"string"===typeof this._parts.protocol&&this._parts.port===d.defaultPorts[this._parts.protocol]&&(this._parts.port=
null,this.build(!a));return this};e.normalizePath=function(a){var b=this._parts.path;if(!b)return this;if(this._parts.urn)return this._parts.path=d.recodeUrnPath(this._parts.path),this.build(!a),this;if("/"===this._parts.path)return this;var c,e="",f,g;"/"!==b.charAt(0)&&(c=!0,b="/"+b);if("/.."===b.slice(-3)||"/."===b.slice(-2))b+="/";b=b.replace(/(\/(\.\/)+)|(\/\.$)/g,"/").replace(/\/{2,}/g,"/");c&&(e=b.substring(1).match(/^(\.\.\/)+/)||"")&&(e=e[0]);for(;;){f=b.indexOf("/..");if(-1===f)break;else if(0===
f){b=b.substring(3);continue}g=b.substring(0,f).lastIndexOf("/");-1===g&&(g=f);b=b.substring(0,g)+b.substring(f+3)}c&&this.is("relative")&&(b=e+b.substring(1));b=d.recodePath(b);this._parts.path=b;this.build(!a);return this};e.normalizePathname=e.normalizePath;e.normalizeQuery=function(a){"string"===typeof this._parts.query&&(this._parts.query.length?this.query(d.parseQuery(this._parts.query,this._parts.escapeQuerySpace)):this._parts.query=null,this.build(!a));return this};e.normalizeFragment=function(a){this._parts.fragment||
(this._parts.fragment=null,this.build(!a));return this};e.normalizeSearch=e.normalizeQuery;e.normalizeHash=e.normalizeFragment;e.iso8859=function(){var a=d.encode,b=d.decode;d.encode=escape;d.decode=decodeURIComponent;try{this.normalize()}finally{d.encode=a,d.decode=b}return this};e.unicode=function(){var a=d.encode,b=d.decode;d.encode=x;d.decode=unescape;try{this.normalize()}finally{d.encode=a,d.decode=b}return this};e.readable=function(){var a=this.clone();a.username("").password("").normalize();
var b="";a._parts.protocol&&(b+=a._parts.protocol+"://");a._parts.hostname&&(a.is("punycode")&&l?(b+=l.toUnicode(a._parts.hostname),a._parts.port&&(b+=":"+a._parts.port)):b+=a.host());a._parts.hostname&&a._parts.path&&"/"!==a._parts.path.charAt(0)&&(b+="/");b+=a.path(!0);if(a._parts.query){for(var c="",e=0,f=a._parts.query.split("&"),g=f.length;e<g;e++){var k=(f[e]||"").split("="),c=c+("&"+d.decodeQuery(k[0],this._parts.escapeQuerySpace).replace(/&/g,"%26"));void 0!==k[1]&&(c+="="+d.decodeQuery(k[1],
this._parts.escapeQuerySpace).replace(/&/g,"%26"))}b+="?"+c.substring(1)}return b+=d.decodeQuery(a.hash(),!0)};e.absoluteTo=function(a){var b=this.clone(),c=["protocol","username","password","hostname","port"],e,f;if(this._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a instanceof d||(a=new d(a));b._parts.protocol||(b._parts.protocol=a._parts.protocol);if(this._parts.hostname)return b;for(e=0;f=c[e];e++)b._parts[f]=a._parts[f];b._parts.path?".."===b._parts.path.substring(-2)&&
(b._parts.path+="/"):(b._parts.path=a._parts.path,b._parts.query||(b._parts.query=a._parts.query));"/"!==b.path().charAt(0)&&(c=(c=a.directory())?c:0===a.path().indexOf("/")?"/":"",b._parts.path=(c?c+"/":"")+b._parts.path,b.normalizePath());b.build();return b};e.relativeTo=function(a){var b=this.clone().normalize(),c,e,f;if(b._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a=(new d(a)).normalize();c=b._parts;e=a._parts;f=b.path();a=a.path();if("/"!==f.charAt(0))throw Error("URI is already relative");
if("/"!==a.charAt(0))throw Error("Cannot calculate a URI relative to another relative URI");c.protocol===e.protocol&&(c.protocol=null);if(c.username===e.username&&c.password===e.password&&null===c.protocol&&null===c.username&&null===c.password&&c.hostname===e.hostname&&c.port===e.port)c.hostname=null,c.port=null;else return b.build();if(f===a)return c.path="",b.build();f=d.commonPath(f,a);if(!f)return b.build();e=e.path.substring(f.length).replace(/[^\/]*$/,"").replace(/.*?\//g,"../");c.path=e+c.path.substring(f.length)||
"./";return b.build()};e.equals=function(a){var b=this.clone();a=new d(a);var c={},e={},f={},g;b.normalize();a.normalize();if(b.toString()===a.toString())return!0;c=b.query();e=a.query();b.query("");a.query("");if(b.toString()!==a.toString()||c.length!==e.length)return!1;c=d.parseQuery(c,this._parts.escapeQuerySpace);e=d.parseQuery(e,this._parts.escapeQuerySpace);for(g in c)if(q.call(c,g)){if(!m(c[g])){if(c[g]!==e[g])return!1}else if(!A(c[g],e[g]))return!1;f[g]=!0}for(g in e)if(q.call(e,g)&&!f[g])return!1;
return!0};e.duplicateQueryParameters=function(a){this._parts.duplicateQueryParameters=!!a;return this};e.escapeQuerySpace=function(a){this._parts.escapeQuerySpace=!!a;return this};return d});

var DaKT = (function() {
	var menuData = window.DaKT_menuData,
		menuHistory = [];
	if (typeof menuData === 'undefined') {
		window.document.body.innerHTML = '<h1>No data provided</h1><p>DaKT needs some links to display.  Please see <a href="https://github.com/KevinField/DaKT">the README</a>.</p>';
	} else { // so this part can be cached
		if (typeof DaKT_editor === 'undefined') {
			DaKT_editor = '';
		} else {
			DaKT_editor = '<p>You can toggle DaKT\'s editor mode by pressing E or clicking <a href="' + DaKT_editor + '" id="editor-link">here</a>.</p>';
		}
		window.document.body.innerHTML += '\
<div id="operator-overlay" class="overlay">\
	<h1>Help with DaKT</h1>\
	<p>DaKT lets you dial your way through a serious of menus, so that common sequences can be quickly accessed by a succession of number keypresses.</p>\
	<p>An overlay similar to the one you are reading, but showing whatever notifications DaKT is configured to show, can be toggled by clicking the Notifications bar at the bottom of the screen, or by pressing "N".</p>\
	<p>Similarly you can get this help to go away by pressing zero again, or clicking the Operator button at the bottom.</p>\
	' + DaKT_editor + '\
</div>\
<div id="footer">\
	<div id="about"><a href="https://github.com/KevinField/DaKT">DaKT</a>3</div>\
	<div id="navbar"></div>\
	<div id="operator" onclick="DaKT.toggleOverlay(this.id)">Operator (dial 0)</div>\
	<div id="search"><form onsubmit="DaKT.searchMenu(event)"><input name="q" type="text" value="" placeholder="press S or click here"/><button type=submit>Search</button></form></div>\
	<div id="notifications" onclick="DaKT.toggleOverlay(this.id)" class="nonzero">Notifications </div>\
	<div id="save"><a href="" download="dakt-menudata-sample.js">Save</a></div>\
</div>\
		';
	}
	function menuURI(menuid, opt) {
		opt = opt || {};
		var uri = new URI(window.location);
		if (opt.q) {
			return uri.filename() + '?q=' + opt.q;
		}
		return uri.filename() + '?id=' + menuid;
	}
	function changeStateId(stateFunction, id, opt) {
		opt = opt || {};
		if (opt.customMenu) {
			stateFunction.call(window.history, { id: id, customMenu: opt.customMenu, q: opt.q }, 'search results', menuURI(id, { q: opt.q }));
		} else {
			stateFunction.call(window.history, { id: id, menuHistory: menuHistory }, menuData[id][0], menuURI(id));
		}
	}
	function showMenu (id, opt) {
		opt = opt || {};
		var curMenu = opt.customMenu || menuData[id];
		if (opt.resetHistory) {
			menuHistory.splice(menuHistory.indexOf(id)); // chop off all history from id forward
		}
		if (!curMenu) {
			if (opt.customMenu) {
				changeStateId(window.history.pushState, id, { customMenu: opt.customMenu, q: opt.q });
			} else {
				changeStateId(window.history.pushState, id);
			}
			id = 1;
			curMenu = menuData[0];
			opt.stateFunction = window.history.replaceState;
		}
		document.title = menuData[id][0];
		var total = curMenu.length - 1;
		var gap = 0;
		// this is hard-coded because the design centres around this idea.
		if (total > 9) {
			throw new Error("Menu max size is 9");
		} else if (total > 6 && total < 9) {
			gap = 9 - total;
		} else if (total > 4 && total < 6) {
			gap = 6 - total;
		} else if (total < 4) {
			gap = 4 - total;
		}
		for (var i=0; i<gap; i++) {
			curMenu.push([]);
		}
		total = curMenu.length - 1;
		var rows = 2;
		var cols = 2;
		var portrait = (window.innerHeight > window.innerWidth);
		if ((total === 9) || (total === 6 && !portrait)) cols = 3;
		if ((total === 9) || (total === 6 && portrait)) rows = 3;
		var newBoxes = document.createDocumentFragment();
		var newclass = 'box r' + rows + ' c' + cols;
		total = curMenu.length; // over to base 1...
		for (var i=1; i<total; i++) {
			var newBox = document.createElement('a');
			var mi_opt = curMenu[i];
			var full = (typeof mi_opt.t !== 'undefined') || (typeof mi_opt.m !== 'undefined');
			newBox.className = newclass + (full?' full':' empty');
			if (full) {
				var html = mi_opt.t,
					href = mi_opt.u;
				if (typeof mi_opt.m !== 'undefined') {
					if (mi_opt.m < menuData.length) {
						html = menuData[mi_opt.m][0];
						newBox.setAttribute('onclick', 'DaKT.showMenu(' + mi_opt.m + ', {stateFunction: window.history.pushState}); event.preventDefault();');
						href = menuURI(mi_opt.m);
					} else {
						html = 'broken link to menu ' + mi_opt.m;
						href = undefined;
					}
				}
				if (typeof mi_opt.i !== 'undefined') {
					newBox.style.backgroundImage = 'url(data:image/gif;base64,' + mi_opt.i + ')';
				}
				if (typeof mi_opt.c !== 'undefined') {
					newBox.style.color = mi_opt.c;
				}
				if (typeof mi_opt.b !== 'undefined') {
					newBox.style.backgroundColor = mi_opt.b;
				}
				newBox.setAttribute('menu-item-number', i);
				if (typeof href !== 'undefined') {
					newBox.setAttribute('href', href);
				}
				html = '<span class="menuitem_title">' + html + '</span>';
				if (typeof mi_opt.s !== 'undefined') {
					html += '<span class="menuitem_subtitle">' + mi_opt.s + '</span>';
				}
				newBox.innerHTML = html;
			}
			newBoxes.appendChild(newBox);
		}
		var boxes = document.querySelectorAll('.box');
		for (var i=boxes.length-1; i>=0; i--) {
			document.body.removeChild(boxes[i]);
		}
		document.body.insertBefore(newBoxes, document.getElementById('footer'));
		if (menuHistory.indexOf(id) === -1) {
			menuHistory.push(id);
		}
		var newNavBarContent = document.createDocumentFragment();
		for (var i=0; i<menuHistory.length; i++) {
			var newlink = document.createElement('a');
			newlink.setAttribute('onclick', 'DaKT.showMenu(' + menuHistory[i] + ', {stateFunction: window.history.pushState, resetHistory: true}); event.preventDefault();');
			newlink.setAttribute('href', menuURI(menuHistory[i]));
			newlink.innerHTML = menuData[menuHistory[i]][0];
			newNavBarContent.appendChild(newlink);
		}
		var navbar = document.getElementById('navbar');
		navbar.innerHTML = '';
		navbar.appendChild(newNavBarContent);
		if (opt.stateFunction) {
			if (opt.customMenu) {
				changeStateId(opt.stateFunction, id, { customMenu: opt.customMenu, q: opt.q });
			} else {
				changeStateId(opt.stateFunction, id);
			}
		}
	}
	function resetMenu() {
		var id = 0;
		menuHistory = [];
		if ('state' in window.history && window.history.state !== null) {
			id = window.history.state.id;
			if (window.history.state.customMenu) {
				return showMenu(id, { customMenu: window.history.state.customMenu, q: window.history.state.q });
			} else if (typeof window.history.state.menuHistory !== 'undefined') {
				menuHistory = window.history.state.menuHistory;
			}
		} else if (window.location.search !== '') {
			id = URI.parseQuery(window.location.search).id;
		}
		showMenu(id);
	}
	function searchMenu(e) {
		e.preventDefault();
		var input = e.target.querySelector('input');
		input.blur();
		var q = input.value;
		var results = [];
		var serialResults = [];
		for (var menuid in menuData) {
			var curMenu = menuData[menuid];
			menuLoop: for (var i=0,size=curMenu.length; i<size; i++) {
				if (curMenu[i].length === 0) {
					continue;
				}
				if ((curMenu[i][0].indexOf(q) !== -1) ||
					((typeof curMenu[i][1] === 'string') && (curMenu[i][1].indexOf(q) !== -1))) {
					if (results.length === 9) { // we could also paginate, up to some maximum
						results[8] = ['Sorry, there were more than 9 results for "' + q + '."  Try narrowing it down.', 1, 'R0lGODlhFQAUALMAAAQCBASGBASGhMTGxAQChPz+/AQC/ISGhNTWzIQC/BMTAAAAAAAGAAMAAFEAAAAAACH5BAEAAAkALAAAAAAVABQAAwRrMMlJq704y8O7ppwwIEgAfMlRDEUZvGfGGathG+8hGyNCvDjTzvUiCH6xy8FGBBqSluXt9RI8ZYQp1UDQZQA3gBhAGEMrZACLBVitzhS1eT6AS9qAQzKPx8jnY3VfawVta3ZxYwlmKI2OGBEAOw=='];
						return showMenu(0, { stateFunction: window.history.pushState, customMenu: results, q: q });
					}
					var serial = JSON.stringify(curMenu[i]);
					resultsLoop: for (var j=0,r=results.length; j<r; j++) {
						if (serial === serialResults[j]) {
							continue menuLoop; // duplicates do not make sense here, skip them
						}
					}
					results.push(curMenu[i]);
					serialResults.push(serial);
				}
			}
		}
		if (results.length === 0) { // we could also have a stemmed version or some other fuzzier server-side search offered at this point
			results.push(['Sorry, there were no results for "' + q + '."  Try variations.', 1, 'R0lGODlhFQAUALMAAAQCBASGBASGhMTGxAQChPz+/AQC/ISGhNTWzIQC/BMTAAAAAAAGAAMAAFEAAAAAACH5BAEAAAkALAAAAAAVABQAAwRrMMlJq704y8O7ppwwIEgAfMlRDEUZvGfGGathG+8hGyNCvDjTzvUiCH6xy8FGBBqSluXt9RI8ZYQp1UDQZQA3gBhAGEMrZACLBVitzhS1eT6AS9qAQzKPx8jnY3VfawVta3ZxYwlmKI2OGBEAOw==']);
		}
		showMenu(0, { stateFunction: window.history.pushState, customMenu: results, q: q });
	}
	function keypressHandler(e) {
		if (e.target.tagName === 'INPUT' || e.repeat) return;
		var maybeNumber = e.key || (e.charCode - 48);
		;;;console.log(maybeNumber);
		if (maybeNumber === 0) {
			DaKT.toggleOverlay('operator');
		} else if (maybeNumber === 62 || maybeNumber === 30) { // n or N
			DaKT.toggleOverlay('notifications');
		} else if (maybeNumber === 67 || maybeNumber === 35) { // s or S
			document.querySelector("input[name='q']").focus();
			e.preventDefault(); // don't type the "s"
		} else if (maybeNumber === 53 || maybeNumber === 21) { // e or E
			var editorLink = document.getElementById('editor-link');
			if (typeof editorLink !== 'undefined') {
				editorLink.click();
			}
		} else if ((''+maybeNumber).match(/^[1-9]$/)) {
			var maybeA = document.querySelector("a[menu-item-number='" + maybeNumber + "']");
			if (maybeA) {
				maybeA.click();
			}
		}
	}
	function toggleOverlay(id) {
		// if we use display: none, our automatic counter becomes 0
		var overlay = document.getElementById(id + '-overlay');
		var show = getComputedStyle(overlay,null).zIndex === '-2';
		// first, hide all overlays (otherwise N-0 keypress sequence only shows first overlay)
		var all_overlays = document.querySelectorAll('.overlay');
		for (var i=0; i<all_overlays.length; i++) {
			if (getComputedStyle(all_overlays[i],null).zIndex !== '-2') {
				all_overlays[i].style.zIndex = '-2';
			}
		}
		if (show) {
			overlay.style.zIndex = '1';
		}
	}
	function notificationsCalculate() {
		if (document.querySelectorAll('#notifications-overlay > ul > li').length === 0) {
			document.getElementById('notifications').classList.remove('nonzero');
		}
	}
	return {
		showMenu: showMenu,
		resetMenu: resetMenu,
		searchMenu: searchMenu,
		menuData: menuData,
		keypressHandler: keypressHandler,
		toggleOverlay: toggleOverlay,
		notificationsCalculate: notificationsCalculate
	};
})();
window.addEventListener('load', DaKT.resetMenu, false);
window.addEventListener('load', DaKT.notificationsCalculate, false);
window.addEventListener('popstate', DaKT.resetMenu, false);
window.addEventListener('orientationchange', DaKT.resetMenu, false);
window.addEventListener('resize', DaKT.resetMenu, false);
window.addEventListener('keypress', DaKT.keypressHandler, false);