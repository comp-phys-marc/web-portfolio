var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(g){var window=this;'use strict';var eQa=function(a,b){return g.Ob(a,b)},fQa=function(a,b){b=b instanceof g.Hc?b:g.Nc(b,/^data:image\//i.test(b));
a.src=g.Ic(b)},gQa=function(a){if(a instanceof g.Vh)return a;
if("function"==typeof a.Eg)return a.Eg(!1);if(g.Ka(a)){var b=0,c=new g.Vh;c.i=function(){for(;;){if(b>=a.length)throw g.ai;if(b in a)return a[b++];b++}};
c.next=c.i.bind(c);return c}throw Error("Not implemented");},hQa=function(a,b,c){if(g.Ka(a))try{g.Bb(a,b,c)}catch(d){if(d!==g.ai)throw d;
}else{a=gQa(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.ai)throw d;}}},B6=function(a){g.lk(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Qa()).toString(36));
return a},C6=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.uk(a.l,b,c)},iQa=function(a,b){var c=[];
hQa(b,function(d){try{var e=g.jr.prototype.l.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.ir(e)&&c.push(d)},a);
return c},jQa=function(a,b){iQa(a,b).forEach(function(c){g.jr.prototype.remove.call(this,c)},a)},kQa=function(a){if(a.ea){if(a.ea.locationOverrideToken)return{locationOverrideToken:a.ea.locationOverrideToken};
if(null!=a.ea.latitudeE7&&null!=a.ea.longitudeE7)return{latitudeE7:a.ea.latitudeE7,longitudeE7:a.ea.longitudeE7}}return null},lQa=function(a,b){g.ib(a,b)||a.push(b)},D6=function(a){var b=0,c;
for(c in a)b++;return b},mQa=function(a){try{return g.C.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},E6=function(a){if(g.C.JSON)try{return g.C.JSON.parse(a)}catch(b){}return mQa(a)},nQa=function(a,b,c,d){var e=new g.dk(null,void 0);
a&&g.ek(e,a);b&&g.fk(e,b);c&&g.gk(e,c);d&&(e.J=d);return e},F6=function(a,b){g.Ou[a]=!0;
var c=g.Mu();c&&c.publish.apply(c,arguments);g.Ou[a]=!1},G6=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.ci;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=
a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",oQa(this,a.capabilities||""),pQa(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",
this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},oQa=function(a,b){a.capabilities.clear();
g.Ro(b.split(","),g.Oa(eQa,qQa)).forEach(function(c){a.capabilities.add(c)})},pQa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},H6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},I6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},rQa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},sQa=function(a){return new H6(a)},tQa=function(a){return Array.isArray(a)?g.Re(a,sQa):[]},J6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},K6=function(a){return Array.isArray(a)?"["+g.Re(a,J6).join(",")+"]":"null"},L6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},uQa=function(a){return g.Re(a,function(b){return{key:b.id,
name:b.name}})},M6=function(a,b){return g.eb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},N6=function(a,b){return g.eb(a,function(c){return I6(c,b)})},vQa=function(){var a=(0,g.rz)();
a&&jQa(a,a.i.Eg(!0))},O6=function(){var a=g.uz("yt-remote-connected-devices")||[];
g.yb(a);return a},wQa=function(a){if(g.jb(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.Re(a,function(d,e){return 0==e?d:d.substring(c.length)})},xQa=function(a){g.tz("yt-remote-connected-devices",a,86400)},Q6=function(){if(P6)return P6;
var a=g.uz("yt-remote-device-id");a||(a=L6(),g.tz("yt-remote-device-id",a,31536E3));for(var b=O6(),c=1,d=a;g.ib(b,d);)c++,d=a+"#"+c;return P6=d},R6=function(){var a=O6(),b=Q6();
g.ib(a,b);g.xz()&&g.Ab(a,b);a=wQa(a);if(g.jb(a))try{g.wt("remote_sid")}catch(c){}else try{g.ut("remote_sid",a.join(","),-1)}catch(c){}},yQa=function(){return g.uz("yt-remote-session-browser-channel")},zQa=function(){return g.uz("yt-remote-local-screens")||[]},AQa=function(){g.tz("yt-remote-lounge-token-expiration",!0,86400)},BQa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.Re(zQa(),function(d){return d.loungeToken}),c=g.Re(a,function(d){return d.loungeToken});
g.Dm(c,function(d){return!g.ib(b,d)})&&AQa();
g.tz("yt-remote-local-screens",a,31536E3)},CQa=function(a,b){g.tz("yt-remote-session-browser-channel",a);
g.tz("yt-remote-session-screen-id",b);a=O6();b=Q6();g.ib(a,b)||a.push(b);xQa(a);R6()},S6=function(a){a||(g.wz("yt-remote-session-screen-id"),g.wz("yt-remote-session-video-id"));
R6();a=O6();g.nb(a,Q6());xQa(a)},DQa=function(){if(!T6){var a=g.tr();
a&&(T6=new g.dr(a))}},EQa=function(){DQa();
return T6?!!T6.get("yt-remote-use-staging-server"):!1},U6=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},FQa=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},GQa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},V6=function(a){a.length?HQa(a.shift(),function(){V6(a)}):W6()},IQa=function(a){return"chrome-extension://"+a+"/cast_sender.js"},HQa=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.Dj(d,g.xl(a));(document.head||document.documentElement).appendChild(d)},JQa=function(){var a=U6(),b=[];
if(1<a){var c=a-1;b.push("//web.archive.org/web/20210802045500/https://www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//web.archive.org/web/20210802045500/https://www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},W6=function(){var a=GQa();
a&&a(!1,"No cast extension found")},X6=function(){if(KQa){var a=2,b=GQa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;HQa("//web.archive.org/web/20210802045500/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",W6,c)}},LQa=function(){X6();
var a=JQa();a.push("//web.archive.org/web/20210802045500/https://www.gstatic.com/eureka/clank/cast_sender.js");V6(a)},NQa=function(){X6();
var a=JQa();a.push.apply(a,g.v(MQa.map(IQa)));a.push("//web.archive.org/web/20210802045500/https://www.gstatic.com/eureka/clank/cast_sender.js");V6(a)},Y6=function(a,b,c){g.F.call(this);
this.G=null!=c?(0,g.D)(a,c):a;this.Mf=b;this.C=(0,g.D)(this.IO,this);this.i=!1;this.l=0;this.u=this.Hb=null;this.B=[]},Z6=function(a,b,c){g.F.call(this);
this.B=null!=c?a.bind(c):a;this.Mf=b;this.u=null;this.i=!1;this.l=0;this.Hb=null},$6=function(a){a.Hb=g.lh(function(){a.Hb=null;
a.i&&!a.l&&(a.i=!1,$6(a))},a.Mf);
var b=a.u;a.u=null;a.B.apply(null,b)},a7=function(){},b7=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.C.setTimeout(function(){a()},b)},d7=function(a){c7.dispatchEvent(new OQa(c7,a))},OQa=function(a,b){g.lf.call(this,"statevent",a);
this.stat=b},e7=function(a,b,c,d){this.i=a;
this.l=b;this.L=c;this.J=d||1;this.C=45E3;this.B=new g.vk(this);this.u=new g.kh;this.u.setInterval(250)},QQa=function(a,b,c){a.Hs=1;
a.Dm=B6(b.clone());a.Wp=c;a.G=!0;PQa(a,null)},f7=function(a,b,c,d,e){a.Hs=1;
a.Dm=B6(b.clone());a.Wp=null;a.G=c;e&&(a.QL=!1);PQa(a,d)},PQa=function(a,b){a.xs=Date.now();
g7(a);a.Sn=a.Dm.clone();C6(a.Sn,"t",a.J);a.Fw=0;a.Xe=a.i.gC(a.i.hw()?b:null);0<a.aB&&(a.wz=new Z6((0,g.D)(a.QM,a,a.Xe),a.aB));a.B.Pa(a.Xe,"readystatechange",a.JO);b=a.Co?g.Wb(a.Co):{};a.Wp?(a.jA="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.Xe.send(a.Sn,a.jA,a.Wp,b)):(a.jA="GET",a.QL&&!g.lg&&(b.Connection="close"),a.Xe.send(a.Sn,a.jA,null,b));a.i.pj(1)},TQa=function(a,b,c){for(var d=!0;!a.Qo&&a.Fw<c.length;){var e=RQa(a,c);
if(e==h7){4==b&&(a.zm=4,d7(15),d=!1);break}else if(e==SQa){a.zm=4;d7(16);d=!1;break}else i7(a,e)}4==b&&0==c.length&&(a.zm=1,d7(17),d=!1);a.Cj=a.Cj&&d;d||(j7(a),k7(a))},RQa=function(a,b){var c=a.Fw,d=b.indexOf("\n",c);
if(-1==d)return h7;c=Number(b.substring(c,d));if(isNaN(c))return SQa;d+=1;if(d+c>b.length)return h7;b=b.substr(d,c);a.Fw=d+c;return b},VQa=function(a,b){a.xs=Date.now();
g7(a);var c=b?window.location.hostname:"";a.Sn=a.Dm.clone();g.lk(a.Sn,"DOMAIN",c);g.lk(a.Sn,"t",a.J);try{a.Gj=new ActiveXObject("htmlfile")}catch(m){j7(a);a.zm=7;d7(22);k7(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in l7)f=l7[f];else if(f in UQa)f=l7[f]=UQa[f];else{var h=f.charCodeAt(0);if(31<h&&127>h)var l=f;else{if(256>h){if(l="\\x",16>h||256<h)l+="0"}else l="\\u",4096>h&&(l+="0");l+=h.toString(16).toUpperCase()}f=
l7[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.ld(g.hc("b/12014412"),d);a.Gj.open();a.Gj.write(g.fd(c));a.Gj.close();a.Gj.parentWindow.m=(0,g.D)(a.XU,a);a.Gj.parentWindow.d=(0,g.D)(a.fL,a,!0);a.Gj.parentWindow.rpcClose=(0,g.D)(a.fL,a,!1);c=a.Gj.createElement("DIV");a.Gj.parentWindow.document.body.appendChild(c);d=g.Mc(a.Sn.toString());d=g.ud(g.Ic(d));d=g.ld(g.hc("b/12014412"),'<iframe src="'+d+'"></iframe>');g.nd(c,d);a.i.pj(1)},g7=function(a){a.AF=Date.now()+
a.C;
WQa(a,a.C)},WQa=function(a,b){if(null!=a.Os)throw Error("WatchDog timer not null");
a.Os=b7((0,g.D)(a.eV,a),b)},m7=function(a){a.Os&&(g.C.clearTimeout(a.Os),a.Os=null)},k7=function(a){a.i.gf()||a.Qo||a.i.Rw(a)},j7=function(a){m7(a);
g.ff(a.wz);a.wz=null;a.u.stop();g.xk(a.B);if(a.Xe){var b=a.Xe;a.Xe=null;b.abort();b.dispose()}a.Gj&&(a.Gj=null)},i7=function(a,b){try{a.i.YK(a,b),a.i.pj(4)}catch(c){}},YQa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;XQa(a,b,function(h){h?c(!0):g.C.setTimeout(function(){YQa(a,b,c,d,f)},f)})}},XQa=function(a,b,c){var d=new Image;
d.onload=function(){try{n7(d),c(!0)}catch(e){}};
d.onerror=function(){try{n7(d),c(!1)}catch(e){}};
d.onabort=function(){try{n7(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{n7(d),c(!1)}catch(e){}};
g.C.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
fQa(d,a)},n7=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},ZQa=function(a){this.i=a;
this.l=new a7},$Qa=function(a){var b=o7(a.i,a.Nt,"/mail/images/cleardot.gif");
B6(b);YQa(b.toString(),5E3,(0,g.D)(a.EP,a),3,2E3);a.pj(1)},q7=function(a){var b=a.i.L;
if(null!=b)d7(5),b?(d7(11),p7(a.i,a,!1)):(d7(12),p7(a.i,a,!0));else if(a.ih=new e7(a,void 0,void 0,void 0),a.ih.Co=a.bB,b=a.i,b=o7(b,b.hw()?a.xt:null,a.cB),d7(5),!g.he||g.be(10))C6(b,"TYPE","xmlhttp"),f7(a.ih,b,!1,a.xt,!1);else{C6(b,"TYPE","html");var c=a.ih;a=!!a.xt;c.Hs=3;c.Dm=B6(b.clone());VQa(c,a)}},r7=function(a,b,c){this.Oa=1;
this.i=[];this.u=[];this.B=new a7;this.J=a||null;this.L=null!=b?b:null;this.C=c||!1},aRa=function(a,b){this.i=a;
this.map=b;this.context=null},bRa=function(a,b,c,d){g.lf.call(this,"timingevent",a);
this.size=b;this.Xv=d},cRa=function(a){g.lf.call(this,"serverreachability",a)},fRa=function(a){dRa(a);
if(3==a.Oa){var b=a.uv++,c=a.zx.clone();g.lk(c,"SID",a.l);g.lk(c,"RID",b);g.lk(c,"TYPE","terminate");s7(a,c);b=new e7(a,a.l,b,void 0);b.Hs=2;b.Dm=B6(c.clone());fQa(new Image,b.Dm.toString());b.xs=Date.now();g7(b)}eRa(a)},gRa=function(a){a.gQ(1,0);
a.zx=o7(a,null,a.dB);t7(a)},dRa=function(a){a.Im&&(a.Im.abort(),a.Im=null);
a.Ae&&(a.Ae.cancel(),a.Ae=null);a.xl&&(g.C.clearTimeout(a.xl),a.xl=null);u7(a);a.Pg&&(a.Pg.cancel(),a.Pg=null);a.Rm&&(g.C.clearTimeout(a.Rm),a.Rm=null)},hRa=function(a,b){if(0==a.Oa)throw Error("Invalid operation: sending map when state is closed");
a.i.push(new aRa(a.PR++,b));2!=a.Oa&&3!=a.Oa||t7(a)},iRa=function(a){var b=0;
a.Ae&&b++;a.Pg&&b++;return b},t7=function(a){a.Pg||a.Rm||(a.Rm=b7((0,g.D)(a.dL,a),0),a.xr=0)},kRa=function(a,b){if(1==a.Oa){if(!b){a.uv=Math.floor(1E5*Math.random());
b=a.uv++;var c=new e7(a,"",b,void 0);c.Co=a.Uj;var d=v7(a),e=a.zx.clone();g.lk(e,"RID",b);g.lk(e,"CVER","1");s7(a,e);QQa(c,e,d);a.Pg=c;a.Oa=2}}else 3==a.Oa&&(b?jRa(a,b):0==a.i.length||a.Pg||jRa(a))},jRa=function(a,b){if(b)if(6<a.Ro){a.i=a.u.concat(a.i);
a.u.length=0;var c=a.uv-1;b=v7(a)}else c=b.L,b=b.Wp;else c=a.uv++,b=v7(a);var d=a.zx.clone();g.lk(d,"SID",a.l);g.lk(d,"RID",c);g.lk(d,"AID",a.Nr);s7(a,d);c=new e7(a,a.l,c,a.xr+1);c.Co=a.Uj;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Pg=c;QQa(c,d,b)},s7=function(a,b){a.If&&(a=a.If.DI())&&g.Db(a,function(c,d){g.lk(b,d,c)})},v7=function(a){var b=Math.min(a.i.length,1E3),c=["count="+b];
if(6<a.Ro&&0<b){var d=a.i[0].i;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={zq:e.zq},f++){e.zq=a.i[f].i;var h=a.i[f].map;e.zq=6>=a.Ro?f:e.zq-d;try{g.Db(h,function(l){return function(m,n){c.push("req"+l.zq+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.zq+"_type="+encodeURIComponent("_badmap"))}}a.u=a.u.concat(a.i.splice(0,b));
return c.join("&")},lRa=function(a){a.Ae||a.xl||(a.G=1,a.xl=b7((0,g.D)(a.cL,a),0),a.Vq=0)},w7=function(a){if(a.Ae||a.xl||3<=a.Vq)return!1;
a.G++;a.xl=b7((0,g.D)(a.cL,a),mRa(a,a.Vq));a.Vq++;return!0},p7=function(a,b,c){a.hA=c;
a.Vj=b.Yk;a.C||gRa(a)},u7=function(a){null!=a.Zo&&(g.C.clearTimeout(a.Zo),a.Zo=null)},mRa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},x7=function(a,b){if(2==b||9==b){var c=null;
a.If&&(c=null);var d=(0,g.D)(a.ZV,a);c||(c=new g.dk("//web.archive.org/web/20210802045500/https://www.google.com/images/cleardot.gif"),B6(c));XQa(c.toString(),1E4,d)}else d7(2);nRa(a,b)},nRa=function(a,b){a.Oa=0;
a.If&&a.If.TH(b);eRa(a);dRa(a)},eRa=function(a){a.Oa=0;
a.Vj=-1;if(a.If)if(0==a.u.length&&0==a.i.length)a.If.TB();else{g.qb(a.u);var b=g.qb(a.i);a.u.length=0;a.i.length=0;a.If.TB(b)}},o7=function(a,b,c){var d=g.mk(c);
if(""!=d.i)b&&g.fk(d,b+"."+d.i),g.gk(d,d.u);else{var e=window.location;d=nQa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.ou&&g.Db(a.ou,function(f,h){g.lk(d,h,f)});
g.lk(d,"VER",a.Ro);s7(a,d);return d},oRa=function(){},pRa=function(){this.i=[];
this.l=[]},qRa=function(a,b){this.action=a;
this.params=b||{}},y7=function(a,b){g.F.call(this);
this.i=new g.K(this.PU,0,this);g.J(this,this.i);this.Mf=5E3;this.l=0;if("function"===typeof a)b&&(a=(0,g.D)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.D)(a.handleEvent,a);else throw Error("Invalid listener argument");this.u=a},z7=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.xa=a;this.G=b;this.u=new g.cr;this.l=new y7(this.FV,this);this.i=null;this.ea=!1;this.C=null;this.V="";this.L=this.B=0;this.J=[];this.ya=c;this.Y=d;this.Aa=e},rRa=function(a){return{firstTestResults:[""],
secondTestResults:!a.i.hA,sessionId:a.i.l,arrayId:a.i.Nr}},sRa=function(a,b){a.L=b||0;
a.l.stop();A7(a);a.i&&(3==a.i.getState()&&kRa(a.i),fRa(a.i));a.L=0},B7=function(a){return!!a.i&&3==a.i.getState()},A7=function(a){if(a.i){var b=a.Y(),c=a.i.Uj||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.i.Uj=c}},C7=function(a){this.port=this.domain="";
this.i="/api/lounge";this.l=!0;a=a||document.location.href;var b=Number(g.ii(4,a))||"";b&&(this.port=":"+b);this.domain=g.ji(a)||"";a=g.Xc;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Fc(a,"10.0")&&(this.l=!1))},D7=function(a,b){var c=a.i;
a.l&&(c="https://"+a.domain+a.port+a.i);return g.ui(c+b,{})},E7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Oa(a.B,d,!0),onError:g.Oa(a.u,e),onTimeout:g.Oa(a.C,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.it(b,a)},wRa=function(){var a=tRa;
uRa();F7.push(a);vRa()},G7=function(a,b){uRa();
var c=xRa(a,String(b));g.jb(F7)?yRa(c):(vRa(),g.Bb(F7,function(d){d(c)}))},uRa=function(){F7||(F7=g.Ga("yt.mdx.remote.debug.handlers_")||[],g.Fa("yt.mdx.remote.debug.handlers_",F7,void 0))},yRa=function(a){var b=(H7+1)%50;
H7=b;I7[b]=a;J7||(J7=49==b)},vRa=function(){var a=F7;
if(I7[0]){var b=J7?H7:-1;do{b=(b+1)%50;var c=I7[b];g.Bb(a,function(d){d(c)})}while(b!=H7);
I7=Array(50);H7=-1;J7=!1}},xRa=function(a,b){var c=(Date.now()-zRa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},K7=function(a){g.Kx.call(this);
this.G=a;this.screens=[]},ARa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},BRa=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.Ro(a.screens,function(f){return!!M6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=ARa(a,b[d])||c;return c},CRa=function(a,b){var c=a.screens.length;
a.screens=g.Ro(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},L7=function(a,b,c,d,e){g.Kx.call(this);
this.u=a;this.J=b;this.B=c;this.G=d;this.C=e;this.l=0;this.i=null;this.Hb=NaN},N7=function(a){K7.call(this,"LocalScreenService");
this.l=a;this.i=NaN;M7(this);this.info("Initializing with "+K6(this.screens))},DRa=function(a){if(a.screens.length){var b=g.Re(a.screens,function(d){return d.id}),c=D7(a.l,"/pairing/get_lounge_token_batch");
E7(a.l,c,{screen_ids:b.join(",")},(0,g.D)(a.FQ,a),(0,g.D)(a.EQ,a))}},M7=function(a){if(g.fs("deprecate_pair_servlet_enabled"))return BRa(a,[]);
var b=tQa(zQa());b=g.Ro(b,function(c){return!c.uuid});
return BRa(a,b)},O7=function(a,b){BQa(g.Re(a.screens,rQa));
b&&AQa()},Q7=function(a,b){g.Kx.call(this);
this.G=b;b=(b=g.uz("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.G(),e=0,f=d.length;e<f;++e){var h=d[e].id;c[h]=g.ib(b,h)}this.i=c;this.C=a;this.u=this.B=NaN;this.l=null;P7("Initialized with "+g.Oh(this.i))},R7=function(a,b,c){var d=D7(a.C,"/pairing/get_screen_availability");
E7(a.C,d,{lounge_token:b.token},(0,g.D)(function(e){e=e.screens||[];for(var f=0,h=e.length;f<h;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.D)(function(){c(!1)},a))},S7=function(a,b){a:if(D6(b)!=D6(a.i))var c=!1;
else{c=g.Lb(b);for(var d=0,e=c.length;d<e;++d)if(!a.i[c[d]]){c=!1;break a}c=!0}c||(P7("Updated online screens: "+g.Oh(a.i)),a.i=b,a.Z("screenChange"));ERa(a)},T7=function(a){isNaN(a.u)||g.dt(a.u);
a.u=g.Gs((0,g.D)(a.vE,a),0<a.B&&a.B<g.Qa()?2E4:1E4)},P7=function(a){G7("OnlineScreenService",a)},FRa=function(a){var b={};
g.Bb(a.G(),function(c){c.token?b[c.token]=c.id:this.Yd("Requesting availability of screen w/o lounge token.")});
return b},ERa=function(a){a=g.Lb(g.Eb(a.i,function(b){return b}));
g.yb(a);a.length?g.tz("yt-remote-online-screen-ids",a.join(","),60):g.wz("yt-remote-online-screen-ids")},U7=function(a,b){b=void 0===b?!1:b;
K7.call(this,"ScreenService");this.B=a;this.J=b;this.i=this.l=null;this.u=[];this.C={};GRa(this)},IRa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.C[b]);var h=a.Dh(),l=c?N6(h,c):null;c&&(a.J||l)||(l=N6(h,b));if(l){l.uuid=b;var m=V7(a,l);R7(a.i,m,function(n){e(n?m:null)})}else c?HRa(a,c,(0,g.D)(function(n){var p=V7(this,new H6({name:d,
screenId:c,loungeToken:n,dialId:b||""}));R7(this.i,p,function(q){e(q?p:null)})},a),f):e(null)},JRa=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},KRa=function(a,b,c){R7(a.i,b,c)},HRa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){f=h&&h.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.it(D7(a.B,"/pairing/get_lounge_token_batch"),e)},LRa=function(a){a.screens=a.l.Dh();
var b=a.C,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+K6(a.screens))},GRa=function(a){W7(a);
a.l=new N7(a.B);a.l.subscribe("screenChange",(0,g.D)(a.OQ,a));LRa(a);a.J||(a.u=tQa(g.uz("yt-remote-automatic-screen-cache")||[]));W7(a);a.info("Initializing automatic screens: "+K6(a.u));a.i=new Q7(a.B,(0,g.D)(a.Dh,a,!0));a.i.subscribe("screenChange",(0,g.D)(function(){this.Z("onlineScreenChange")},a))},V7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=N6(a.u,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.u.push(b),a.J||MRa(a));W7(a);a.C[b.uuid]=b.id;g.tz("yt-remote-device-id-map",a.C,31536E3);return b},MRa=function(a){a=g.Ro(a.u,function(b){return"shortLived"!=b.idType});
g.tz("yt-remote-automatic-screen-cache",g.Re(a,rQa))},W7=function(a){a.C=g.uz("yt-remote-device-id-map")||{}},X7=function(a,b,c){g.Kx.call(this);
this.Aa=c;this.u=a;this.i=b;this.B=null},Y7=function(a,b){a.B=b;
a.Z("sessionScreen",a.B)},NRa=function(a,b){a.B&&(a.B.token=b,V7(a.u,a.B));
a.Z("sessionScreen",a.B)},Z7=function(a,b){G7(a.Aa,b)},$7=function(a,b,c){X7.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.l=null;this.Y=(0,g.D)(this.OO,this);this.ya=(0,g.D)(this.hV,this);this.ea=g.Gs(function(){ORa(d,null)},12E4);
this.J=this.C=this.G=this.L=0;this.xa=!1;this.V="unknown"},a8=function(a,b){g.dt(a.J);
a.J=0;0==b?PRa(a):a.J=g.Gs(function(){PRa(a)},b)},PRa=function(a){QRa(a,"getLoungeToken");
g.dt(a.C);a.C=g.Gs(function(){RRa(a,null)},3E4)},QRa=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.Oh(void 0));
var c={};c.type=b;a.l?a.l.sendMessage("urn:x-cast:com.google.youtube.mdx",c,g.Ha,(0,g.D)(function(){Z7(this,"Failed to send message: "+b+".")},a)):Z7(a,"Sending yt message without session: "+g.Oh(c))},b8=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.TI(b,function(c){Y7(a,c)},function(){return a.gg()},5)):a.gg(Error("Waiting for session status timed out."))},TRa=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+JSON.stringify(b));
var d=new H6(b);SRa(a,d,function(e){e?(a.xa=!0,V7(a.u,d),Y7(a,d),a.V="unknown",a8(a,c)):(g.ks(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.gg())},5)},ORa=function(a,b){g.dt(a.ea);
a.ea=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?TRa(a,{name:a.i.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.ks(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),b8(a,b.screenId))):(g.ks(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),b8(a,b.screenId)):b8(a,b.screenId):a.gg(Error("Waiting for session status timed out."))},RRa=function(a,b){g.dt(a.C);
a.C=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.V=c,a8(a,3E4)):(NRa(a,b.loungeToken),a.xa=!1,a.V="unknown",a8(a,b.loungeTokenRefreshIntervalMs))},SRa=function(a,b,c,d){g.dt(a.G);
a.G=0;KRa(a.u,b,function(e){e||0>d?c(e):a.G=g.Gs(function(){SRa(a,b,c,d-1)},300)})},URa=function(a){g.dt(a.L);
a.L=0;g.dt(a.G);a.G=0;g.dt(a.ea);a.ea=0;g.dt(a.C);a.C=0;g.dt(a.J);a.J=0},c8=function(a,b,c,d){X7.call(this,a,b,"DialSession");
this.config_=d;this.l=this.L=null;this.ya="";this.Ia=c;this.Ja=null;this.ea=g.Ha;this.V=NaN;this.Fa=(0,g.D)(this.PO,this);this.C=g.Ha;this.J=this.G=0;this.Y=!1;this.xa="unknown"},d8=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.l)?0:b.getDialAppInfo))},VRa=function(a){a.C=a.u.wG(a.ya,a.i.label,a.i.friendlyName,d8(a),function(b,c){a.C=g.Ha;
a.Y=!0;Y7(a,b);"shortLived"==b.idType&&0<c&&e8(a,c)},function(b){a.C=g.Ha;
a.gg(b)})},WRa=function(a){var b={};
b.pairingCode=a.ya;b.theme=a.Ia;EQa()&&(b.env_useStageMdx=1);return g.si(b)},f8=function(a){return new Promise(function(b){a.ya=L6();
if(a.Ja){var c=new chrome.cast.DialLaunchResponse(!0,WRa(a));b(c);VRa(a)}else a.ea=function(){g.dt(a.V);a.ea=function(){};
a.V=NaN;var d=new chrome.cast.DialLaunchResponse(!0,WRa(a));b(d);VRa(a)},a.V=g.Gs(function(){a.ea()},100)})},YRa=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new H6(b);return(new Promise(function(e){XRa(a,d,function(f){f?(a.Y=!0,V7(a.u,d),Y7(a,d),e8(a,c)):g.ks(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):f8(a)})},ZRa=function(a,b){var c=a.L.receiver.label,d=a.i.friendlyName;
return(new Promise(function(e){IRa(a.u,c,b,d,function(f){f&&f.token&&Y7(a,f);e(f)},function(f){Z7(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):f8(a)})},XRa=function(a,b,c,d){g.dt(a.G);
a.G=0;KRa(a.u,b,function(e){e||0>d?c(e):a.G=g.Gs(function(){XRa(a,b,c,d-1)},300)})},e8=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
d8(a)&&(g.dt(a.J),a.J=0,0==b?$Ra(a):a.J=g.Gs(function(){$Ra(a)},b))},$Ra=function(a){d8(a)&&a.l.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.xa=c,e8(a,3E4)):(a.Y=!1,a.xa="unknown",NRa(a,b.loungeToken),e8(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.xa="noLoungeTokenResponse";e8(a,3E4)})},aSa=function(a){g.dt(a.G);
a.G=0;g.dt(a.J);a.J=0;a.C();a.C=function(){};
g.dt(a.V)},g8=function(a,b){X7.call(this,a,b,"ManualSession");
this.l=g.Gs((0,g.D)(this.Or,this,null),150)},h8=function(a,b){g.Kx.call(this);
this.config_=b;this.l=a;this.L=b.appId||"233637DE";this.B=b.theme||"cl";this.V=b.disableCastApi||!1;this.G=b.forceMirroring||!1;this.i=null;this.J=!1;this.u=[];this.C=(0,g.D)(this.cU,this)},bSa=function(a,b){return b?g.eb(a.u,function(c){return I6(b,c.label)},a):null},i8=function(a){G7("Controller",a)},tRa=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},j8=function(a){return a.J||!!a.u.length||!!a.i},k8=function(a,b,c){b!=a.i&&(g.ff(a.i),(a.i=b)?(c?a.Z("yt-remote-cast2-receiver-resumed",
b.i):a.Z("yt-remote-cast2-receiver-selected",b.i),b.subscribe("sessionScreen",(0,g.D)(a.bL,a,b)),b.subscribe("sessionFailed",function(){return cSa(a,b)}),b.getScreen()?a.Z("yt-remote-cast2-session-change",b.getScreen()):c&&a.i.Or(null)):a.Z("yt-remote-cast2-session-change",null))},cSa=function(a,b){a.i==b&&a.Z("yt-remote-cast2-session-failed")},dSa=function(a){var b=a.l.vG(),c=a.i&&a.i.i;
a=g.Re(b,function(d){c&&I6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=bSa(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},iSa=function(a,b,c,d){d.disableCastApi?l8("Cannot initialize because disabled by Mdx config."):eSa()?fSa(b,d)&&(m8(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?gSa(a,c):(window.__onGCastApiAvailable=function(e,f){e?gSa(a,c):(n8("Failed to load cast API: "+f),o8(!1),m8(!1),g.wz("yt-remote-cast-available"),g.wz("yt-remote-cast-receiver"),
hSa(),c(!1))},d.loadCastApiSetupScript?g.yz("https://web.archive.org/web/20210802045500/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=U6()&&LQa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?W6():89<=U6()?NQa():(X6(),V6(MQa.map(IQa))))):l8("Cannot initialize because not running Chrome")},hSa=function(){l8("dispose");
var a=p8();a&&a.dispose();g.Fa("yt.mdx.remote.cloudview.instance_",null,void 0);jSa(!1);g.Ru(q8);q8.length=0},r8=function(){return!!g.uz("yt-remote-cast-installed")},kSa=function(){var a=g.uz("yt-remote-cast-receiver");
return a?a.friendlyName:null},lSa=function(){l8("clearCurrentReceiver");
g.wz("yt-remote-cast-receiver")},mSa=function(){return r8()?p8()?p8().getCastSession():(n8("getCastSelector: Cast is not initialized."),null):(n8("getCastSelector: Cast API is not installed!"),null)},t8=function(){r8()?p8()?s8()?(l8("Requesting cast selector."),p8().requestSession()):(l8("Wait for cast API to be ready to request the session."),q8.push(g.Qu("yt-remote-cast2-api-ready",t8))):n8("requestCastSelector: Cast is not initialized."):n8("requestCastSelector: Cast API is not installed!")},u8=
function(a,b){s8()?p8().setConnectedScreenStatus(a,b):n8("setConnectedScreenStatus called before ready.")},eSa=function(){var a=0<=g.Xc.search(/ (CrMo|Chrome|CriOS)\//);
return g.cj||a},nSa=function(a,b){p8().init(a,b)},fSa=function(a,b){var c=!1;
p8()||(a=new h8(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.tz("yt-remote-cast-available",d);F6("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){l8("onReceiverSelected: "+d.friendlyName);
g.tz("yt-remote-cast-receiver",d);F6("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){l8("onReceiverResumed: "+d.friendlyName);
g.tz("yt-remote-cast-receiver",d);F6("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){l8("onSessionChange: "+J6(d));
d||g.wz("yt-remote-cast-receiver");F6("yt-remote-cast2-session-change",d)}),g.Fa("yt.mdx.remote.cloudview.instance_",a,void 0),c=!0);
l8("cloudview.createSingleton_: "+c);return c},p8=function(){return g.Ga("yt.mdx.remote.cloudview.instance_")},gSa=function(a,b){o8(!0);
m8(!1);nSa(a,function(c){c?(jSa(!0),g.Su("yt-remote-cast2-api-ready")):(n8("Failed to initialize cast API."),o8(!1),g.wz("yt-remote-cast-available"),g.wz("yt-remote-cast-receiver"),hSa());b(c)})},l8=function(a){G7("cloudview",a)},n8=function(a){G7("cloudview",a)},o8=function(a){l8("setCastInstalled_ "+a);
g.tz("yt-remote-cast-installed",a)},s8=function(){return!!g.Ga("yt.mdx.remote.cloudview.apiReady_")},jSa=function(a){l8("setApiReady_ "+a);
g.Fa("yt.mdx.remote.cloudview.apiReady_",a,void 0)},m8=function(a){g.Fa("yt.mdx.remote.cloudview.initializing_",a,void 0)},v8=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.G=this.J=0;this.trackData=null;this.hasNext=this.wk=!1;this.L=this.C=this.i=this.B=0;this.u=NaN;this.l=!1;this.reset(a)},w8=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.wk=!1;a.hasNext=!1;a.J=0;a.G=g.Qa();a.B=0;a.i=0;a.C=0;a.L=0;a.u=NaN;a.l=!1},x8=function(a){return a.xc()?(g.Qa()-a.G)/1E3:0},y8=function(a,b){a.J=b;
a.G=g.Qa()},z8=function(a){switch(a.playerState){case 1:case 1081:return(g.Qa()-a.G)/1E3+a.J;
case -1E3:return 0}return a.J},A8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&w8(a)},B8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.Xb(a.trackData);b.hasPrevious=a.wk;b.hasNext=a.hasNext;b.playerTime=a.J;b.playerTimeAt=a.G;b.seekableStart=a.B;b.seekableEnd=a.i;b.duration=a.C;b.loadedTime=a.L;b.liveIngestionTime=a.u;return b},D8=function(a,b){g.Kx.call(this);
this.Oa=0;this.u=a;this.C=[];this.B=new pRa;this.l=this.i=null;this.L=(0,g.D)(this.zS,this);this.G=(0,g.D)(this.Bv,this);this.J=(0,g.D)(this.yS,this);this.V=(0,g.D)(this.HS,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.LE,this),oSa(this))):c=3;0!=c&&(b?this.LE(c):g.Gs((0,g.D)(function(){this.LE(c)},this),0));
(a=mSa())&&C8(this,a);this.subscribe("yt-remote-cast2-session-change",this.V)},E8=function(a){return new v8(a.u.getPlayerContextData())},oSa=function(a){g.Bb("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled".split(" "),function(b){this.C.push(this.u.subscribe(b,g.Oa(this.ZT,b),this))},a)},pSa=function(a){g.Bb(a.C,function(b){this.u.unsubscribeByKey(b)},a);
a.C.length=0},F8=function(a){return 1==a.getState()},G8=function(a,b){var c=a.B;
50>c.i.length+c.l.length&&a.B.l.push(b)},I8=function(a,b,c){var d=E8(a);
y8(d,c);-1E3!=d.playerState&&(d.playerState=b);H8(a,d)},J8=function(a,b,c){a.u.sendMessage(b,c)},H8=function(a,b){pSa(a);
a.u.setPlayerContextData(B8(b));oSa(a)},C8=function(a,b){a.l&&(a.l.removeUpdateListener(a.L),a.l.removeMediaListener(a.G),a.Bv(null));
a.l=b;a.l&&(G7("CP","Setting cast session: "+a.l.sessionId),a.l.addUpdateListener(a.L),a.l.addMediaListener(a.G),a.l.media.length&&a.Bv(a.l.media[0]))},qSa=function(a){var b=a.i.media,c=a.i.customData;
if(b&&c){var d=E8(a);b.contentId!=d.videoId&&G7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;y8(d,a.i.getEstimatedTime());H8(a,d)}else G7("CP","No cast media video. Ignoring state update.")},K8=function(a,b,c){return(0,g.D)(function(d){this.Yd("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.Yd("Retrying "+b+" using MDx browser channel."),J8(this,b,c))},a)},L8=function(a,b,c){g.Kx.call(this);
this.C=NaN;this.xa=!1;this.L=this.J=this.ea=this.Y=NaN;this.V=[];this.B=this.G=this.u=this.hc=this.i=null;this.Aa=a;this.V.push(g.hu(window,"beforeunload",(0,g.D)(this.AQ,this)));this.l=[];this.hc=new v8;this.Fa=b.id;this.ya=b.idType;this.i=rSa(this,c);this.i.subscribe("handlerOpened",this.DS,this);this.i.subscribe("handlerClosed",this.AS,this);this.i.subscribe("handlerError",this.BS,this);this.i.subscribe("handlerMessage",this.CS,this);this.i.Kz(b.token);this.subscribe("remoteQueueChange",function(){var d=
this.hc.videoId;g.xz()&&g.tz("yt-remote-session-video-id",d)},this)},sSa=function(a){return g.eb(a.l,function(b){return"LOUNGE_SCREEN"==b.type})},M8=function(a){G7("conn",a)},rSa=function(a,b){return new z7(D7(a.Aa,"/bc"),b,!1,function(){return a.AG()},"shortLived"==a.ya)},N8=function(a,b){a.Z("proxyStateChange",b)},tSa=function(a){a.C=g.Gs((0,g.D)(function(){M8("Connecting timeout");
this.qr(1)},a),2E4)},O8=function(a){g.dt(a.C);
a.C=NaN},P8=function(a){g.dt(a.Y);
a.Y=NaN},uSa=function(a){Q8(a);
a.ea=g.Gs((0,g.D)(function(){R8(this,"getNowPlaying")},a),2E4)},Q8=function(a){g.dt(a.ea);
a.ea=NaN},wSa=function(a,b){var c=null;
if(b){var d=sSa(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Fa("yt.mdx.remote.remoteClient_",c,void 0);b&&(O8(a),P8(a));c=B7(a.i)&&isNaN(a.C);b==c?b&&(N8(a,1),R8(a,"getSubtitlesTrack")):b?(a.SI()&&a.hc.reset(),N8(a,1),R8(a,"getNowPlaying"),vSa(a)):a.qr(1)},xSa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.hc.videoId&&(g.Sb(b.params)?a.hc.trackData=null:a.hc.trackData=b.params,a.Z("remotePlayerChange"))},ySa=function(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);
a.hc.listId=b.params.listId||a.hc.listId;A8(a.hc,c,d);a.Z("remoteQueueChange")},ASa=function(a,b){b.params=b.params||{};
ySa(a,b);zSa(a,b);a.Z("autoplayDismissed")},zSa=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
y8(a.hc,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.hc.playerState&&(c=-1E3);a.hc.playerState=c;c=Number(b.params.loadedTime);a.hc.L=isNaN(c)?0:c;a.hc.zj(Number(b.params.duration));c=a.hc;var d=Number(b.params.liveIngestionTime);c.u=d;c.l=isNaN(d)?!1:!0;c=a.hc;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.B=isNaN(d)?0:d;c.i=isNaN(b)?0:b;1==a.hc.playerState?uSa(a):Q8(a);a.Z("remotePlayerChange")},BSa=function(a,b){if(-1E3!=a.hc.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.hc.playerState=c;b=parseInt(b.params.currentTime,10);y8(a.hc,isNaN(b)?0:b);a.Z("remotePlayerChange")}},CSa=function(a,b){var c="true"==b.params.muted;
a.hc.volume=parseInt(b.params.volume,10);a.hc.muted=c;a.Z("remotePlayerChange")},DSa=function(a,b){a.G=b.params.videoId;
a.Z("nowAutoplaying",parseInt(b.params.timeout,10))},ESa=function(a,b){var c="true"==b.params.hasNext;
a.hc.wk="true"==b.params.hasPrevious;a.hc.hasNext=c;a.Z("previousNextChange")},vSa=function(a){g.dt(a.L);
a.L=g.Gs((0,g.D)(a.qr,a,1),864E5)},R8=function(a,b,c){c?M8("Sending: action="+b+", params="+g.Oh(c)):M8("Sending: action="+b);
a.i.sendMessage(b,c)},S8=function(a){K7.call(this,"ScreenServiceProxy");
this.Ke=a;this.i=[];this.i.push(this.Ke.$_s("screenChange",(0,g.D)(this.TO,this)));this.i.push(this.Ke.$_s("onlineScreenChange",(0,g.D)(this.DT,this)))},ISa=function(a,b){DQa();
if(!T6||!T6.get("yt-remote-disable-remote-module-for-dev")){b=g.O("MDX_CONFIG")||b;vQa();R6();T8||(T8=new C7(b?b.loungeApiHost:void 0),EQa()&&(T8.i="/api/loungedev"));U8||(U8=g.Ga("yt.mdx.remote.deferredProxies_")||[],g.Fa("yt.mdx.remote.deferredProxies_",U8,void 0));FSa();var c=V8();if(!c){var d=new U7(T8,b?b.disableAutomaticScreenCache||!1:!1);g.Fa("yt.mdx.remote.screenService_",d,void 0);c=V8();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});iSa(a,d,function(f){f?W8()&&u8(W8(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){F6("yt-remote-receiver-availability-change")})},e)}b&&!g.Ga("yt.mdx.remote.initialized_")&&(g.Fa("yt.mdx.remote.initialized_",!0,void 0),X8("Initializing: "+g.Oh(b)),Y8.push(g.Qu("yt-remote-cast2-availability-change",function(){F6("yt-remote-receiver-availability-change")})),
Y8.push(g.Qu("yt-remote-cast2-receiver-selected",function(){Z8(null);
F6("yt-remote-auto-connect","cast-selector-receiver")})),Y8.push(g.Qu("yt-remote-cast2-receiver-resumed",function(){F6("yt-remote-receiver-resumed","cast-selector-receiver")})),Y8.push(g.Qu("yt-remote-cast2-session-change",GSa)),Y8.push(g.Qu("yt-remote-connection-change",function(f){f?u8(W8(),"YouTube TV"):$8()||(u8(null,null),lSa())})),Y8.push(g.Qu("yt-remote-cast2-session-failed",function(){F6("yt-remote-connection-failed")})),a=a9(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.fs("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),X8(" -- with channel params: "+g.Oh(a)),a?(g.tz("yt-remote-session-app",a.app),g.tz("yt-remote-session-name",a.name)):(g.wz("yt-remote-session-app"),g.wz("yt-remote-session-name")),g.Fa("yt.mdx.remote.channelParams_",a,void 0),c.start(),W8()||HSa())}},JSa=function(){var a=V8().Ke.$_gos();
var b=b9();b&&c9()&&(M6(a,b)||a.push(b));return uQa(a)},d9=function(){var a=KSa();
!a&&r8()&&kSa()&&(a={key:"cast-selector-receiver",name:kSa()});return a},KSa=function(){var a=JSa(),b=b9();
b||(b=$8());return g.eb(a,function(c){return b&&I6(b,c.key)?!0:!1})},b9=function(){var a=W8();
if(!a)return null;var b=V8().Dh();return N6(b,a)},GSa=function(a){X8("remote.onCastSessionChange_: "+J6(a));
if(a){var b=b9();if(b&&b.id==a.id){if(u8(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))e9&&(e9.token=a),(b=c9())&&b.Kz(a)}else b&&f9(),g9(a,1)}else c9()&&f9()},f9=function(){s8()?p8().stopSession():n8("stopSession called before API ready.");
var a=c9();a&&(a.disconnect(1),h9(null))},i9=function(){var a=c9();
return!!a&&3!=a.getProxyState()},X8=function(a){G7("remote",a)},V8=function(){if(!j9){var a=g.Ga("yt.mdx.remote.screenService_");
j9=a?new S8(a):null}return j9},W8=function(){return g.Ga("yt.mdx.remote.currentScreenId_")},LSa=function(a){g.Fa("yt.mdx.remote.currentScreenId_",a,void 0)},MSa=function(){return g.Ga("yt.mdx.remote.connectData_")},Z8=function(a){g.Fa("yt.mdx.remote.connectData_",a,void 0)},c9=function(){return g.Ga("yt.mdx.remote.connection_")},h9=function(a){var b=c9();
Z8(null);a||LSa("");g.Fa("yt.mdx.remote.connection_",a,void 0);U8&&(g.Bb(U8,function(c){c(a)}),U8.length=0);
b&&!a?F6("yt-remote-connection-change",!1):!b&&a&&F6("yt-remote-connection-change",!0)},$8=function(){var a=g.xz();
if(!a)return null;var b=V8();if(!b)return null;b=b.Dh();return N6(b,a)},g9=function(a,b){W8();
b9()&&b9();k9?e9=a:(LSa(a.id),a=new L8(T8,a,a9()),a.connect(b,MSa()),a.subscribe("beforeDisconnect",function(c){F6("yt-remote-before-disconnect",c)}),a.subscribe("beforeDispose",function(){c9()&&(c9(),h9(null))}),a.subscribe("browserChannelAuthError",function(){var c=b9();
c&&"shortLived"==c.idType&&(s8()?p8().handleBrowserChannelAuthError():n8("refreshLoungeToken called before API ready."))}),h9(a))},HSa=function(){var a=$8();
a?(X8("Resume connection to: "+J6(a)),g9(a,0)):(S6(),lSa(),X8("Skipping connecting because no session screen found."))},FSa=function(){var a=a9();
if(g.Sb(a)){a=Q6();var b=g.uz("yt-remote-session-name")||"",c=g.uz("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Fa("yt.mdx.remote.channelParams_",a,void 0)}},a9=function(){return g.Ga("yt.mdx.remote.channelParams_")||{}},l9=function(a,b,c){g.F.call(this);
var d=this;this.l=a;this.I=b;this.Pb=c;this.events=new g.cN(this);this.ea=this.events.N(this.I,"onVolumeChange",function(e){NSa(d,e)});
this.C=!1;this.suggestion=null;this.G=new g.gK(64);this.i=new g.K(this.bM,500,this);this.u=new g.K(this.cM,1E3,this);this.L=new Y6(this.rW,0,this);this.B={};this.V=new g.K(this.JM,1E3,this);this.J=new Z6(this.seekTo,1E3,this);this.Y=g.Ha;g.J(this,this.events);this.events.N(b,"onCaptionsTrackListChanged",this.nT);this.events.N(b,"captionschanged",this.wS);this.events.N(b,"captionssettingschanged",this.iM);this.events.N(b,"videoplayerreset",this.fz);this.events.N(b,"mdxautoplaycancel",function(){d.Pb.mI()});
a=this.Pb;a.isDisposed();a.subscribe("proxyStateChange",this.XK,this);a.subscribe("remotePlayerChange",this.Hv,this);a.subscribe("remoteQueueChange",this.fz,this);a.subscribe("previousNextChange",this.UK,this);a.subscribe("nowAutoplaying",this.OK,this);a.subscribe("autoplayDismissed",this.rK,this);g.J(this,this.i);g.J(this,this.u);g.J(this,this.L);g.J(this,this.V);g.J(this,this.J);this.iM();this.fz();this.Hv()},NSa=function(a,b){if(m9(a)){a.Pb.unsubscribe("remotePlayerChange",a.Hv,a);
var c=Math.round(b.volume);b=!!b.muted;var d=E8(a.Pb);if(c!==d.volume||b!==d.muted)a.Pb.setVolume(c,b),a.V.start();a.Pb.subscribe("remotePlayerChange",a.Hv,a)}},OSa=function(a){a.Rb(0);
a.i.stop();a.Mb(new g.gK(64))},n9=function(a,b){if(m9(a)&&!a.C){var c=null;
b&&(c={style:a.I.getSubtitlesUserSettings()},g.Zb(c,b));a.Pb.zG(a.I.getVideoData(1).videoId,c);a.B=E8(a.Pb).trackData}},o9=function(a,b){var c=a.I.getPlaylist();
if(null===c||void 0===c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.I.getVideoData(1);a.Pb.playVideo(c.videoId,b,d,e,c.playerParams,c.La,kQa(c));a.Mb(new g.gK(1))},PSa=function(a,b){if(b){var c=a.I.getOption("captions","tracklist",{mJ:1});
c&&c.length?(a.I.setOption("captions","track",b),a.C=!1):(a.I.loadModule("captions"),a.C=!0)}else a.I.setOption("captions","track",{})},m9=function(a){return E8(a.Pb).videoId===a.I.getVideoData(1).videoId},p9=function(){g.V.call(this,{D:"div",
K:"ytp-mdx-manual-pairing-popup-dialog",U:{role:"dialog"},S:[{D:"div",K:"ytp-mdx-manual-pairing-popup-dialog-inner-content",S:[{D:"div",K:"ytp-mdx-manual-pairing-popup-title",ra:"Connecting to your TV on web using a code will be going away soon"},{D:"div",K:"ytp-mdx-manual-pairing-popup-buttons",S:[{D:"button",Ea:["ytp-button","ytp-mdx-manual-pairing-popup-learn-more"],ra:"Learn more"},{D:"button",Ea:["ytp-button","ytp-mdx-manual-pairing-popup-ok"],ra:"OK"}]}]}]});this.i=new g.ML(this,250);this.learnMoreButton=
this.Da("ytp-mdx-manual-pairing-popup-learn-more");this.okButton=this.Da("ytp-mdx-manual-pairing-popup-ok");g.J(this,this.i);this.N(this.learnMoreButton,"click",this.l);this.N(this.okButton,"click",this.u)},q9=function(){g.V.call(this,{D:"div",
K:"ytp-mdx-popup-dialog",U:{role:"dialog"},S:[{D:"div",K:"ytp-mdx-popup-dialog-inner-content",S:[{D:"div",K:"ytp-mdx-popup-title",ra:"You're signed out"},{D:"div",K:"ytp-mdx-popup-description",ra:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{D:"div",K:"ytp-mdx-privacy-popup-buttons",S:[{D:"button",Ea:["ytp-button","ytp-mdx-privacy-popup-cancel"],ra:"Cancel"},{D:"button",Ea:["ytp-button",
"ytp-mdx-privacy-popup-confirm"],ra:"Confirm"}]}]}]});this.i=new g.ML(this,250);this.cancelButton=this.Da("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.Da("ytp-mdx-privacy-popup-confirm");g.J(this,this.i);this.N(this.cancelButton,"click",this.l);this.N(this.confirmButton,"click",this.u)},r9=function(a){g.V.call(this,{D:"div",
K:"ytp-remote",S:[{D:"div",K:"ytp-remote-display-status",S:[{D:"div",K:"ytp-remote-display-status-icon",S:[g.Ara()]},{D:"div",K:"ytp-remote-display-status-text",ra:"{{statustext}}"}]}]});this.api=a;this.i=new g.ML(this,250);g.J(this,this.i);this.N(a,"presentingplayerstatechange",this.l);QSa(this,a.ub())},QSa=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
b=g.U(b,128)?g.GI("Error on $RECEIVER_NAME",c):b.xc()||g.U(b,4)?g.GI("Playing on $RECEIVER_NAME",c):g.GI("Connected to $RECEIVER_NAME",c);a.Ra("statustext",b);a.i.show()}else a.i.hide()},s9=function(a,b){g.XP.call(this,"Play on",0,a,b);
this.I=a;this.Pn={};this.N(a,"onMdxReceiversChange",this.C);this.N(a,"presentingplayerstatechange",this.C);this.C()},t9=function(a){g.jN.call(this,a);
this.mj={key:L6(),name:"This computer"};this.Uh=null;this.subscriptions=[];this.kE=this.Pb=null;this.Pn=[this.mj];this.Km=this.mj;this.md=new g.gK(64);this.KJ=0;this.kf=-1;this.Sr=null;this.Nv=this.Fy=!1;this.cm=this.ls=null;if(!g.zF(this.player.T())&&!g.AF(this.player.T())){a=this.player;var b=g.QM(a);b&&(b=b.cn())&&(b=new s9(a,b),g.J(this,b));b=new r9(a);g.J(this,b);g.$M(a,b.element,4);this.ls=new q9;g.J(this,this.ls);g.$M(a,this.ls.element,4);g.S(this.player.T().experiments,"pair_servlet_deprecation_warning_enabled")&&
!g.S(this.player.T().experiments,"deprecate_pair_servlet_enabled")&&(this.Sr=new p9,g.J(this,this.Sr),g.$M(a,this.Sr.element,4));this.Nv=!!$8();this.Fy=!!g.uz("yt-remote-manual-pairing-warning-shown")}},u9=function(a){a.cm&&(a.player.removeEventListener("presentingplayerstatechange",a.cm),a.cm=null)},RSa=function(a,b,c){a.md=c;
a.player.Z("presentingplayerstatechange",new g.tI(c,b))},SSa=function(a,b,c){var d=!1;
1===b?d=!a.Nv:2===b&&(d=!a.Fy);d&&g.vI(c,8)&&(a.player.pauseVideo(),u9(a))},v9=function(a,b){if(b.key!==a.Km.key)if(b.key===a.mj.key)f9();
else{if(a.Sr&&!a.Fy&&b!==a.mj&&"cast-selector-receiver"!==b.key&&g.RF(a.player.T()))TSa(a);else{var c;(c=!g.S(a.player.T().experiments,"mdx_enable_privacy_disclosure_ui"))||(c=((c=g.O("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.O("SESSION_INDEX")&&!g.O("LOGGED_IN")))||a.Nv||!a.ls);(c?0:g.RF(a.player.T())||g.UF(a.player.T()))&&USa(a)}a.Km=b;if(!a.player.T().X("disable_mdx_connection_in_mdx_module_for_music_web")||!g.AF(a.player.T())){var d=a.player.getPlaylistId();c=a.player.getVideoData(1);
var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&g.S(a.player.T().experiments,"should_clear_video_data_on_player_cued_unstarted"))a=null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.length;l++)h[l]=f.ib(l).videoId}else h=[e];f=a.player.getCurrentTime(1);a={videoIds:h,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.La,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=kQa(c))&&(a.locationInfo=c)}X8("Connecting to: "+
g.Oh(b));"cast-selector-receiver"==b.key?(Z8(a||null),b=a||null,s8()?p8().setLaunchParams(b):n8("setLaunchParams called before ready.")):!a&&i9()&&W8()==b.key?F6("yt-remote-connection-change",!0):(f9(),Z8(a||null),a=V8().Dh(),(b=N6(a,b.key))&&g9(b,1))}}},USa=function(a){a.player.ub().xc()?a.player.pauseVideo():(a.cm=function(b){SSa(a,1,b)},a.player.addEventListener("presentingplayerstatechange",a.cm));
a.ls&&a.ls.Zc();c9()||(k9=!0)},TSa=function(a){a.player.ub().xc()?a.player.pauseVideo():(a.cm=function(b){SSa(a,2,b)},a.player.addEventListener("presentingplayerstatechange",a.cm));
a.Sr&&a.Sr.Zc();c9()||(k9=!0)},UQa={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},l7={"'":"\\'"},qQa={rX:"atp",k7:"ska",Z5:"que",k4:"mus",j7:"sus",u0:"dsp",u6:"seq",M3:"mic",r_:"dpa",FX:"cds",i4:"mlm"},T6,P6="",KQa=FQa("loadCastFramework")||FQa("loadCastApplicationFramework"),MQa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Ra(Y6,g.F);g.k=Y6.prototype;g.k.HO=function(a){this.B=arguments;this.i=!1;this.Hb?this.u=g.Qa()+this.Mf:this.Hb=g.lh(this.C,this.Mf)};
g.k.stop=function(){this.Hb&&(g.C.clearTimeout(this.Hb),this.Hb=null);this.u=null;this.i=!1;this.B=[]};
g.k.pause=function(){++this.l};
g.k.resume=function(){this.l&&(--this.l,!this.l&&this.i&&(this.i=!1,this.G.apply(null,this.B)))};
g.k.va=function(){this.stop();Y6.Xd.va.call(this)};
g.k.IO=function(){this.Hb&&(g.C.clearTimeout(this.Hb),this.Hb=null);this.u?(this.Hb=g.lh(this.C,this.u-g.Qa()),this.u=null):this.l?this.i=!0:(this.i=!1,this.G.apply(null,this.B))};g.w(Z6,g.F);g.k=Z6.prototype;g.k.uG=function(a){this.u=arguments;this.Hb||this.l?this.i=!0:$6(this)};
g.k.stop=function(){this.Hb&&(g.C.clearTimeout(this.Hb),this.Hb=null,this.i=!1,this.u=null)};
g.k.pause=function(){this.l++};
g.k.resume=function(){this.l--;this.l||!this.i||this.Hb||(this.i=!1,$6(this))};
g.k.va=function(){g.F.prototype.va.call(this);this.stop()};a7.prototype.stringify=function(a){return g.C.JSON.stringify(a,void 0)};
a7.prototype.parse=function(a){return g.C.JSON.parse(a,void 0)};var c7=new g.Kf;g.w(OQa,g.lf);g.k=e7.prototype;g.k.Co=null;g.k.Cj=!1;g.k.Os=null;g.k.AF=null;g.k.xs=null;g.k.Hs=null;g.k.Dm=null;g.k.Sn=null;g.k.Wp=null;g.k.Xe=null;g.k.Fw=0;g.k.Gj=null;g.k.jA=null;g.k.zm=null;g.k.wt=-1;g.k.QL=!0;g.k.Qo=!1;g.k.aB=0;g.k.wz=null;var SQa={},h7={};g.k=e7.prototype;g.k.setTimeout=function(a){this.C=a};
g.k.JO=function(a){a=a.target;var b=this.wz;b&&3==g.Hi(a)?b.uG():this.QM(a)};
g.k.QM=function(a){try{if(a==this.Xe)a:{var b=g.Hi(this.Xe),c=this.Xe.l,d=this.Xe.getStatus();if(g.he&&!g.be(10)||g.lg&&!g.ae("420+")){if(4>b)break a}else if(3>b||3==b&&!g.Cl&&!g.Si(this.Xe))break a;this.Qo||4!=b||7==c||(8==c||0>=d?this.i.pj(3):this.i.pj(2));m7(this);var e=this.Xe.getStatus();this.wt=e;var f=g.Si(this.Xe);(this.Cj=200==e)?(4==b&&j7(this),this.G?(TQa(this,b,f),g.Cl&&this.Cj&&3==b&&(this.B.Pa(this.u,"tick",this.nV),this.u.start())):i7(this,f),this.Cj&&!this.Qo&&(4==b?this.i.Rw(this):
(this.Cj=!1,g7(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.zm=3,d7(13)):(this.zm=0,d7(14)),j7(this),k7(this))}}catch(h){this.Xe&&g.Si(this.Xe)}finally{}};
g.k.nV=function(){var a=g.Hi(this.Xe),b=g.Si(this.Xe);this.Fw<b.length&&(m7(this),TQa(this,a,b),this.Cj&&4!=a&&g7(this))};
g.k.XU=function(a){b7((0,g.D)(this.WU,this,a),0)};
g.k.WU=function(a){this.Qo||(m7(this),i7(this,a),g7(this))};
g.k.fL=function(a){b7((0,g.D)(this.VU,this,a),0)};
g.k.VU=function(a){this.Qo||(j7(this),this.Cj=a,this.i.Rw(this),this.i.pj(4))};
g.k.cancel=function(){this.Qo=!0;j7(this)};
g.k.eV=function(){this.Os=null;var a=Date.now();0<=a-this.AF?(2!=this.Hs&&this.i.pj(3),j7(this),this.zm=2,d7(18),k7(this)):WQa(this,this.AF-a)};
g.k.getLastError=function(){return this.zm};g.k=ZQa.prototype;g.k.bB=null;g.k.ih=null;g.k.xz=!1;g.k.dM=null;g.k.yx=null;g.k.sD=null;g.k.cB=null;g.k.Oa=null;g.k.Yk=-1;g.k.xt=null;g.k.Nt=null;g.k.connect=function(a){this.cB=a;a=o7(this.i,null,this.cB);d7(3);this.dM=Date.now();var b=this.i.J;null!=b?(this.xt=b[0],(this.Nt=b[1])?(this.Oa=1,$Qa(this)):(this.Oa=2,q7(this))):(C6(a,"MODE","init"),this.ih=new e7(this,void 0,void 0,void 0),this.ih.Co=this.bB,f7(this.ih,a,!1,null,!0),this.Oa=0)};
g.k.EP=function(a){if(a)this.Oa=2,q7(this);else{d7(4);var b=this.i;b.Vj=b.Im.Yk;x7(b,9)}a&&this.pj(2)};
g.k.gC=function(a){return this.i.gC(a)};
g.k.abort=function(){this.ih&&(this.ih.cancel(),this.ih=null);this.Yk=-1};
g.k.gf=function(){return!1};
g.k.YK=function(a,b){this.Yk=a.wt;if(0==this.Oa)if(b){try{var c=this.l.parse(b)}catch(d){a=this.i;a.Vj=this.Yk;x7(a,2);return}this.xt=c[0];this.Nt=c[1]}else a=this.i,a.Vj=this.Yk,x7(a,2);else if(2==this.Oa)if(this.xz)d7(7),this.sD=Date.now();else if("11111"==b){if(d7(6),this.xz=!0,this.yx=Date.now(),a=this.yx-this.dM,!g.he||g.be(10)||500>a)this.Yk=200,this.ih.cancel(),d7(12),p7(this.i,this,!0)}else d7(8),this.yx=this.sD=Date.now(),this.xz=!1};
g.k.Rw=function(){this.Yk=this.ih.wt;if(this.ih.Cj)0==this.Oa?this.Nt?(this.Oa=1,$Qa(this)):(this.Oa=2,q7(this)):2==this.Oa&&((!g.he||g.be(10)?!this.xz:200>this.sD-this.yx)?(d7(11),p7(this.i,this,!1)):(d7(12),p7(this.i,this,!0)));else{0==this.Oa?d7(9):2==this.Oa&&d7(10);var a=this.i;this.ih.getLastError();a.Vj=this.Yk;x7(a,2)}};
g.k.hw=function(){return this.i.hw()};
g.k.isActive=function(){return this.i.isActive()};
g.k.pj=function(a){this.i.pj(a)};g.k=r7.prototype;g.k.Uj=null;g.k.ou=null;g.k.Pg=null;g.k.Ae=null;g.k.dB=null;g.k.zx=null;g.k.GH=null;g.k.Sw=null;g.k.uv=0;g.k.PR=0;g.k.If=null;g.k.Rm=null;g.k.xl=null;g.k.Zo=null;g.k.Im=null;g.k.hA=null;g.k.Nr=-1;g.k.JJ=-1;g.k.Vj=-1;g.k.xr=0;g.k.Vq=0;g.k.Ro=8;g.Ra(bRa,g.lf);g.Ra(cRa,g.lf);g.k=r7.prototype;g.k.connect=function(a,b,c,d,e){d7(0);this.dB=b;this.ou=c||{};d&&void 0!==e&&(this.ou.OSID=d,this.ou.OAID=e);this.C?(b7((0,g.D)(this.ZH,this,a),100),gRa(this)):this.ZH(a)};
g.k.ZH=function(a){this.Im=new ZQa(this);this.Im.bB=this.Uj;this.Im.l=this.B;this.Im.connect(a)};
g.k.gf=function(){return 0==this.Oa};
g.k.getState=function(){return this.Oa};
g.k.dL=function(a){this.Rm=null;kRa(this,a)};
g.k.cL=function(){this.xl=null;this.Ae=new e7(this,this.l,"rpc",this.G);this.Ae.Co=this.Uj;this.Ae.aB=0;var a=this.GH.clone();g.lk(a,"RID","rpc");g.lk(a,"SID",this.l);g.lk(a,"CI",this.hA?"0":"1");g.lk(a,"AID",this.Nr);s7(this,a);if(!g.he||g.be(10))g.lk(a,"TYPE","xmlhttp"),f7(this.Ae,a,!0,this.Sw,!1);else{g.lk(a,"TYPE","html");var b=this.Ae,c=!!this.Sw;b.Hs=3;b.Dm=B6(a.clone());VQa(b,c)}};
g.k.YK=function(a,b){if(0!=this.Oa&&(this.Ae==a||this.Pg==a))if(this.Vj=a.wt,this.Pg==a&&3==this.Oa)if(7<this.Ro){try{var c=this.B.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.xl){if(this.Ae)if(this.Ae.xs+3E3<this.Pg.xs)u7(this),this.Ae.cancel(),this.Ae=null;else break a;w7(this);d7(19)}}else this.JJ=a[1],0<this.JJ-this.Nr&&37500>a[2]&&this.hA&&0==this.Vq&&!this.Zo&&(this.Zo=b7((0,g.D)(this.tS,this),6E3));else x7(this,11)}else null!=b&&x7(this,11);else if(this.Ae==
a&&u7(this),!g.sc(b))for(a=this.B.parse(b),b=0;b<a.length;b++)c=a[b],this.Nr=c[0],c=c[1],2==this.Oa?"c"==c[0]?(this.l=c[1],this.Sw=c[2],c=c[3],null!=c?this.Ro=c:this.Ro=6,this.Oa=3,this.If&&this.If.VH(),this.GH=o7(this,this.hw()?this.Sw:null,this.dB),lRa(this)):"stop"==c[0]&&x7(this,7):3==this.Oa&&("stop"==c[0]?x7(this,7):"noop"!=c[0]&&this.If&&this.If.UH(c),this.Vq=0)};
g.k.tS=function(){null!=this.Zo&&(this.Zo=null,this.Ae.cancel(),this.Ae=null,w7(this),d7(20))};
g.k.Rw=function(a){if(this.Ae==a){u7(this);this.Ae=null;var b=2}else if(this.Pg==a)this.Pg=null,b=1;else return;this.Vj=a.wt;if(0!=this.Oa)if(a.Cj)if(1==b){b=Date.now()-a.xs;var c=c7;c.dispatchEvent(new bRa(c,a.Wp?a.Wp.length:0,b,this.xr));t7(this);this.u.length=0}else lRa(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.Vj)){if(d=1==b)this.Pg||this.Rm||1==this.Oa||2<=this.xr?d=!1:(this.Rm=b7((0,g.D)(this.dL,this,a),mRa(this,this.xr)),this.xr++,d=!0);d=!(d||2==b&&w7(this))}if(d)switch(c){case 1:x7(this,
5);break;case 4:x7(this,10);break;case 3:x7(this,6);break;case 7:x7(this,12);break;default:x7(this,2)}}};
g.k.gQ=function(a){if(!g.ib(arguments,this.Oa))throw Error("Unexpected channel state: "+this.Oa);};
g.k.ZV=function(a){a?d7(2):(d7(1),nRa(this,8))};
g.k.gC=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.Bi;a.L=!1;return a};
g.k.isActive=function(){return!!this.If&&this.If.isActive(this)};
g.k.pj=function(a){var b=c7;b.dispatchEvent(new cRa(b,a))};
g.k.hw=function(){return!(!g.he||g.be(10))};
g.k=oRa.prototype;g.k.VH=function(){};
g.k.UH=function(){};
g.k.TH=function(){};
g.k.TB=function(){};
g.k.DI=function(){return{}};
g.k.isActive=function(){return!0};g.k=pRa.prototype;g.k.isEmpty=function(){return 0===this.i.length&&0===this.l.length};
g.k.clear=function(){this.i=[];this.l=[]};
g.k.contains=function(a){return g.ib(this.i,a)||g.ib(this.l,a)};
g.k.remove=function(a){var b=this.i;var c=(0,g.kKa)(b,a);0<=c?(g.lb(b,c),b=!0):b=!1;return b||g.nb(this.l,a)};
g.k.Sg=function(){for(var a=[],b=this.i.length-1;0<=b;--b)a.push(this.i[b]);var c=this.l.length;for(b=0;b<c;++b)a.push(this.l[b]);return a};g.Ra(y7,g.F);g.k=y7.prototype;g.k.PU=function(){this.Mf=Math.min(3E5,2*this.Mf);this.u();this.l&&this.start()};
g.k.start=function(){var a=this.Mf+15E3*Math.random();g.Fq(this.i,a);this.l=Date.now()+a};
g.k.stop=function(){this.i.stop();this.l=0};
g.k.isActive=function(){return this.i.isActive()};
g.k.reset=function(){this.i.stop();this.Mf=5E3};g.Ra(z7,oRa);g.k=z7.prototype;g.k.subscribe=function(a,b,c){return this.u.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.u.unsubscribe(a,b,c)};
g.k.Rf=function(a){return this.u.Rf(a)};
g.k.Z=function(a,b){return this.u.Z.apply(this.u,arguments)};
g.k.dispose=function(){this.ea||(this.ea=!0,g.ff(this.u),sRa(this),g.ff(this.l),this.l=null,this.Y=function(){return""})};
g.k.isDisposed=function(){return this.ea};
g.k.connect=function(a,b,c){if(!this.i||2!=this.i.getState()){this.V="";this.l.stop();this.C=a||null;this.B=b||0;a=this.xa+"/test";b=this.xa+"/bind";var d=new r7(c?c.firstTestResults:null,c?c.secondTestResults:null,this.ya),e=this.i;e&&(e.If=null);d.If=this;this.i=d;A7(this);if(this.i){d=g.O("ID_TOKEN");var f=this.i.Uj||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.i.Uj=f}e?(3!=e.getState()&&0==iRa(e)||e.getState(),this.i.connect(a,b,this.G,e.l,e.Nr)):c?this.i.connect(a,
b,this.G,c.sessionId,c.arrayId):this.i.connect(a,b,this.G)}};
g.k.sendMessage=function(a,b){a={_sc:a};b&&g.Zb(a,b);this.l.isActive()||2==(this.i?this.i.getState():0)?this.J.push(a):B7(this)&&(A7(this),hRa(this.i,a))};
g.k.VH=function(){this.l.reset();this.C=null;this.B=0;if(this.J.length){var a=this.J;this.J=[];for(var b=0,c=a.length;b<c;++b)hRa(this.i,a[b])}this.Z("handlerOpened")};
g.k.TH=function(a){var b=2==a&&401==this.i.Vj;4==a||b||this.l.start();this.Z("handlerError",a,b)};
g.k.TB=function(a){if(!this.l.isActive())this.Z("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.J.push(d)}};
g.k.DI=function(){var a={v:2};this.V&&(a.gsessionid=this.V);0!=this.B&&(a.ui=""+this.B);0!=this.L&&(a.ui=""+this.L);this.C&&g.Zb(a,this.C);return a};
g.k.UH=function(a){"S"==a[0]?this.V=a[1]:"gracefulReconnect"==a[0]?(this.l.start(),fRa(this.i)):this.Z("handlerMessage",new qRa(a[0],a[1]))};
g.k.Kz=function(a){(this.G.loungeIdToken=a)||this.l.stop();if(this.Aa&&this.i){var b=this.i.Uj||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.i.Uj=b}};
g.k.FV=function(){this.l.isActive();0==iRa(this.i)&&this.connect(this.C,this.B)};C7.prototype.B=function(a,b,c,d){b?a(d):a({text:c.responseText})};
C7.prototype.u=function(a,b){a(Error("Request error: "+b.status))};
C7.prototype.C=function(a){a(Error("request timed out"))};var zRa=Date.now(),F7=null,I7=Array(50),H7=-1,J7=!1;g.Ra(K7,g.Kx);K7.prototype.Dh=function(){return this.screens};
K7.prototype.contains=function(a){return!!M6(this.screens,a)};
K7.prototype.get=function(a){return a?N6(this.screens,a):null};
K7.prototype.info=function(a){G7(this.G,a)};g.w(L7,g.Kx);g.k=L7.prototype;g.k.start=function(){!this.i&&isNaN(this.Hb)&&this.mL()};
g.k.stop=function(){this.i&&(this.i.abort(),this.i=null);isNaN(this.Hb)||(g.dt(this.Hb),this.Hb=NaN)};
g.k.va=function(){this.stop();g.Kx.prototype.va.call(this)};
g.k.mL=function(){this.Hb=NaN;this.i=g.it(D7(this.u,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.J},timeout:5E3,onSuccess:(0,g.D)(this.LO,this),onError:(0,g.D)(this.KO,this),onTimeout:(0,g.D)(this.MO,this)})};
g.k.LO=function(a,b){this.i=null;a=b.screen||{};a.dialId=this.B;a.name=this.G;b=-1;this.C&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.Z("pairingComplete",new H6(a),b)};
g.k.KO=function(a){this.i=null;a.status&&404==a.status?this.l>=VSa.length?this.Z("pairingFailed",Error("DIAL polling timed out")):(a=VSa[this.l],this.Hb=g.Gs((0,g.D)(this.mL,this),a),this.l++):this.Z("pairingFailed",Error("Server error "+a.status))};
g.k.MO=function(){this.i=null;this.Z("pairingFailed",Error("Server not responding"))};
var VSa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Ra(N7,K7);g.k=N7.prototype;g.k.start=function(){M7(this)&&this.Z("screenChange");!g.uz("yt-remote-lounge-token-expiration")&&DRa(this);g.dt(this.i);this.i=g.Gs((0,g.D)(this.start,this),1E4)};
g.k.add=function(a,b){M7(this);ARa(this,a);O7(this,!1);this.Z("screenChange");b(a);a.token||DRa(this)};
g.k.remove=function(a,b){var c=M7(this);CRa(this,a)&&(O7(this,!1),c=!0);b(a);c&&this.Z("screenChange")};
g.k.fA=function(a,b,c,d){var e=M7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,O7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.Z("screenChange")};
g.k.va=function(){g.dt(this.i);N7.Xd.va.call(this)};
g.k.FQ=function(a){M7(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}O7(this,!b);b&&G7(this.G,"Missed "+b+" lounge tokens.")};
g.k.EQ=function(a){G7(this.G,"Requesting lounge tokens failed: "+a)};g.w(Q7,g.Kx);g.k=Q7.prototype;g.k.start=function(){var a=parseInt(g.uz("yt-remote-fast-check-period")||"0",10);(this.B=g.Qa()-144E5<a?0:a)?T7(this):(this.B=g.Qa()+3E5,g.tz("yt-remote-fast-check-period",this.B),this.vE())};
g.k.isEmpty=function(){return g.Sb(this.i)};
g.k.update=function(){P7("Updating availability on schedule.");var a=this.G(),b=g.Eb(this.i,function(c,d){return c&&!!N6(a,d)},this);
S7(this,b)};
g.k.va=function(){g.dt(this.u);this.u=NaN;this.l&&(this.l.abort(),this.l=null);g.Kx.prototype.va.call(this)};
g.k.vE=function(){g.dt(this.u);this.u=NaN;this.l&&this.l.abort();var a=FRa(this);if(D6(a)){var b=D7(this.C,"/pairing/get_screen_availability");this.l=E7(this.C,b,{lounge_token:g.Lb(a).join(",")},(0,g.D)(this.vU,this,a),(0,g.D)(this.uU,this))}else S7(this,{}),T7(this)};
g.k.vU=function(a,b){this.l=null;var c=g.Lb(FRa(this));if(g.zb(c,g.Lb(a))){b=b.screens||[];c={};for(var d=0,e=b.length;d<e;++d)c[a[b[d].loungeToken]]="online"==b[d].status;S7(this,c);T7(this)}else this.Yd("Changing Screen set during request."),this.vE()};
g.k.uU=function(a){this.Yd("Screen availability failed: "+a);this.l=null;T7(this)};
g.k.Yd=function(a){G7("OnlineScreenService",a)};g.Ra(U7,K7);g.k=U7.prototype;g.k.start=function(){this.l.start();this.i.start();this.screens.length&&(this.Z("screenChange"),this.i.isEmpty()||this.Z("onlineScreenChange"))};
g.k.add=function(a,b,c){this.l.add(a,b,c)};
g.k.remove=function(a,b,c){this.l.remove(a,b,c);this.i.update()};
g.k.fA=function(a,b,c,d){this.l.contains(a)?this.l.fA(a,b,c,d):(a="Updating name of unknown screen: "+a.name,G7(this.G,a),d(Error(a)))};
g.k.Dh=function(a){return a?this.screens:g.pb(this.screens,g.Ro(this.u,function(b){return!this.contains(b)},this))};
g.k.vG=function(){return g.Ro(this.Dh(!0),function(a){return!!this.i.i[a.id]},this)};
g.k.wG=function(a,b,c,d,e,f){var h=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new L7(this.B,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.ff(l);e(V7(h,m),n)});
l.subscribe("pairingFailed",function(m){g.ff(l);f(m)});
l.start();return(0,g.D)(l.stop,l)};
g.k.NO=function(a,b,c,d){g.it(D7(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.D)(function(e,f){e=new H6(f.screen||{});if(!e.name||JRa(this,e.name)){a:{f=e.name;for(var h=2,l=b(f,h);JRa(this,l);){h++;if(20<h)break a;l=b(f,h)}f=l}e.name=f}c(V7(this,e))},this),
onError:(0,g.D)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.D)(function(){d(Error("pairing request timed out."))},this)})};
g.k.va=function(){g.ff(this.l);g.ff(this.i);U7.Xd.va.call(this)};
g.k.OQ=function(){LRa(this);this.Z("screenChange");this.i.update()};
U7.prototype.dispose=U7.prototype.dispose;g.Ra(X7,g.Kx);g.k=X7.prototype;g.k.getScreen=function(){return this.B};
g.k.gg=function(a){this.isDisposed()||(a&&(Z7(this,""+a),this.Z("sessionFailed")),this.B=null,this.Z("sessionScreen",null))};
g.k.info=function(a){G7(this.Aa,a)};
g.k.xG=function(){return null};
g.k.JE=function(a){var b=this.i;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.D)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.D)(function(){Z7(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.va=function(){this.JE("");X7.Xd.va.call(this)};g.w($7,X7);g.k=$7.prototype;g.k.IE=function(a){if(this.l){if(this.l==a)return;Z7(this,"Overriding cast session with new session object");URa(this);this.xa=!1;this.V="unknown";this.l.removeUpdateListener(this.Y);this.l.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.ya)}this.l=a;this.l.addUpdateListener(this.Y);this.l.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.ya);QRa(this,"getMdxSessionStatus")};
g.k.Or=function(a){this.info("launchWithParams no-op for Cast: "+g.Oh(a))};
g.k.stop=function(){this.l?this.l.stop((0,g.D)(function(){this.gg()},this),(0,g.D)(function(){this.gg(Error("Failed to stop receiver app."))},this)):this.gg(Error("Stopping cast device without session."))};
g.k.JE=function(){};
g.k.va=function(){this.info("disposeInternal");URa(this);this.l&&(this.l.removeUpdateListener(this.Y),this.l.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.ya));this.l=null;X7.prototype.va.call(this)};
g.k.hV=function(a,b){if(!this.isDisposed())if(b)if(b=E6(b),g.La(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.Oh(b)),a){case "mdxSessionStatus":ORa(this,b);break;case "loungeToken":RRa(this,b);break;default:Z7(this,"Unknown youtube message: "+a)}else Z7(this,"Unable to parse message.");else Z7(this,"No data in message.")};
g.k.TI=function(a,b,c,d){g.dt(this.L);this.L=0;IRa(this.u,this.i.label,a,this.i.friendlyName,(0,g.D)(function(e){e?b(e):0<=d?(Z7(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.L=g.Gs((0,g.D)(this.TI,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.xG=function(){return this.l};
g.k.OO=function(a){this.isDisposed()||a||(Z7(this,"Cast session died."),this.gg())};g.w(c8,X7);g.k=c8.prototype;g.k.IE=function(a){this.l=a;this.l.addUpdateListener(this.Fa)};
g.k.Or=function(a){this.Ja=a;this.ea()};
g.k.stop=function(){aSa(this);this.l?this.l.stop((0,g.D)(this.gg,this,null),(0,g.D)(this.gg,this,"Failed to stop DIAL device.")):this.gg()};
g.k.va=function(){aSa(this);this.l&&this.l.removeUpdateListener(this.Fa);this.l=null;X7.prototype.va.call(this)};
g.k.PO=function(a){this.isDisposed()||a||(Z7(this,"DIAL session died."),this.C(),this.C=g.Ha,this.gg())};g.w(g8,X7);g8.prototype.stop=function(){this.gg()};
g8.prototype.IE=function(){};
g8.prototype.Or=function(){g.dt(this.l);this.l=NaN;var a=N6(this.u.Dh(),this.i.label);a?Y7(this,a):this.gg(Error("No such screen"))};
g8.prototype.va=function(){g.dt(this.l);this.l=NaN;X7.prototype.va.call(this)};g.w(h8,g.Kx);g.k=h8.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.L);this.V||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.G?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.D)(this.fU,this);c=new chrome.cast.ApiConfig(c,(0,g.D)(this.ZK,this),e,d,a);c.customDialLaunchCallback=(0,g.D)(this.PS,this);chrome.cast.initialize(c,(0,g.D)(function(){this.isDisposed()||
(chrome.cast.addReceiverActionListener(this.C),wRa(),this.l.subscribe("onlineScreenChange",(0,g.D)(this.yG,this)),this.u=dSa(this),chrome.cast.setCustomReceivers(this.u,g.Ha,(0,g.D)(function(f){this.Yd("Failed to set initial custom receivers: "+g.Oh(f))},this)),this.Z("yt-remote-cast2-availability-change",j8(this)),b(!0))},this),(0,g.D)(function(f){this.Yd("Failed to initialize API: "+g.Oh(f));
b(!1)},this))};
g.k.KV=function(a,b){i8("Setting connected screen ID: "+a+" -> "+b);if(this.i){var c=this.i.getScreen();if(!a||c&&c.id!=a)i8("Unsetting old screen status: "+this.i.i.friendlyName),k8(this,null)}if(a&&b){if(!this.i){c=N6(this.l.Dh(),a);if(!c){i8("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){i8("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=bSa(this,c);a||(i8("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.u.push(a),chrome.cast.setCustomReceivers(this.u,g.Ha,(0,g.D)(function(d){this.Yd("Failed to set initial custom receivers: "+g.Oh(d))},this)));
i8("setConnectedScreenStatus: new active receiver: "+a.friendlyName);k8(this,new g8(this.l,a),!0)}this.i.JE(b)}else i8("setConnectedScreenStatus: no screen.")};
g.k.LV=function(a){this.isDisposed()?this.Yd("Setting connection data on disposed cast v2"):this.i?this.i.Or(a):this.Yd("Setting connection data without a session")};
g.k.RO=function(){this.isDisposed()?this.Yd("Stopping session on disposed cast v2"):this.i?(this.i.stop(),k8(this,null)):i8("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.D)(this.ZK,this),(0,g.D)(this.yU,this))};
g.k.va=function(){this.l.unsubscribe("onlineScreenChange",(0,g.D)(this.yG,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.C);var a=tRa,b=g.Ga("yt.mdx.remote.debug.handlers_");g.nb(b||[],a);g.ff(this.i);g.Kx.prototype.va.call(this)};
g.k.Yd=function(a){G7("Controller",a)};
g.k.bL=function(a,b){this.i==a&&(b||k8(this,null),this.Z("yt-remote-cast2-session-change",b))};
g.k.cU=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),i8("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.i)if(this.i.i.label!=a.label)i8("onReceiverAction_: Stopping active receiver: "+this.i.i.friendlyName),this.i.stop();else{i8("onReceiverAction_: Casting to active receiver.");this.i.getScreen()&&this.Z("yt-remote-cast2-session-change",this.i.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:k8(this,
new g8(this.l,a));break;case chrome.cast.ReceiverType.DIAL:k8(this,new c8(this.l,a,this.B,this.config_));break;case chrome.cast.ReceiverType.CAST:k8(this,new $7(this.l,a,this.config_));break;default:this.Yd("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.i&&this.i.i.label==a.label?this.i.stop():this.Yd("Stopping receiver w/o session: "+a.friendlyName)}else this.Yd("onReceiverAction_ called without receiver.")};
g.k.PS=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.Yd("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.i?this.i.i:null;if(!c||c.label!=b.label)return this.Yd("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.i.getScreen())return i8("Reselecting dial screen."),
this.Z("yt-remote-cast2-session-change",this.i.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.Yd('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);k8(this,new c8(this.l,b,this.B,this.config_))}b=this.i;b.L=a;b.L.appState==chrome.cast.DialAppState.RUNNING?(a=b.L.extraData||{},c=a.screenId||null,d8(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=YRa(b,{name:b.i.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.L.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.ks(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=ZRa(b,c)):a=ZRa(b,c)):a=f8(b);return a};
g.k.ZK=function(a){var b=this;if(!this.isDisposed()&&!this.G){i8("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.i)if(c.receiverType==chrome.cast.ReceiverType.CAST)i8("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),k8(this,new $7(this.l,c,this.config_),!0);else{this.Yd("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.i.i,e=N6(this.l.Dh(),
d.label);e&&I6(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(i8("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.ff(this.i),this.i=new $7(this.l,c,this.config_),this.i.subscribe("sessionScreen",(0,g.D)(this.bL,this,this.i)),this.i.subscribe("sessionFailed",function(){return cSa(b,b.i)}),this.i.Or(null));
this.i.IE(a)}}};
g.k.QO=function(){return this.i?this.i.xG():null};
g.k.yU=function(a){this.isDisposed()||(this.Yd("Failed to estabilish a session: "+g.Oh(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&k8(this,null),this.Z("yt-remote-cast2-session-failed"))};
g.k.fU=function(a){i8("Receiver availability updated: "+a);if(!this.isDisposed()){var b=j8(this);this.J=a==chrome.cast.ReceiverAvailability.AVAILABLE;j8(this)!=b&&this.Z("yt-remote-cast2-availability-change",j8(this))}};
g.k.yG=function(){this.isDisposed()||(this.u=dSa(this),i8("Updating custom receivers: "+g.Oh(this.u)),chrome.cast.setCustomReceivers(this.u,g.Ha,(0,g.D)(function(){this.Yd("Failed to set custom receivers.")},this)),this.Z("yt-remote-cast2-availability-change",j8(this)))};
h8.prototype.setLaunchParams=h8.prototype.LV;h8.prototype.setConnectedScreenStatus=h8.prototype.KV;h8.prototype.stopSession=h8.prototype.RO;h8.prototype.getCastSession=h8.prototype.QO;h8.prototype.requestSession=h8.prototype.requestSession;h8.prototype.init=h8.prototype.init;h8.prototype.dispose=h8.prototype.dispose;var q8=[];g.k=v8.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";w8(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.wk=a.hasPrevious,this.hasNext=a.hasNext,this.J=a.playerTime,this.G=a.playerTimeAt,this.B=a.seekableStart,this.i=a.seekableEnd,this.C=a.duration,this.L=a.loadedTime,this.u=a.liveIngestionTime,this.l=
!isNaN(this.u))};
g.k.xc=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.zj=function(a){this.C=isNaN(a)?0:a};
g.k.getDuration=function(){return this.l?this.C+x8(this):this.C};
g.k.clone=function(){return new v8(B8(this))};g.w(D8,g.Kx);g.k=D8.prototype;g.k.getState=function(){return this.Oa};
g.k.play=function(){F8(this)?(this.i?this.i.play(null,g.Ha,K8(this,"play")):J8(this,"play"),I8(this,1,z8(E8(this))),this.Z("remotePlayerChange")):G8(this,this.play)};
g.k.pause=function(){F8(this)?(this.i?this.i.pause(null,g.Ha,K8(this,"pause")):J8(this,"pause"),I8(this,2,z8(E8(this))),this.Z("remotePlayerChange")):G8(this,this.pause)};
g.k.seekTo=function(a){if(F8(this)){if(this.i){var b=E8(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.xc()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.i.seek(c,g.Ha,K8(this,"seekTo",{newTime:a}))}else J8(this,"seekTo",{newTime:a});I8(this,3,a);this.Z("remotePlayerChange")}else G8(this,g.Oa(this.seekTo,a))};
g.k.stop=function(){if(F8(this)){this.i?this.i.stop(null,g.Ha,K8(this,"stopVideo")):J8(this,"stopVideo");var a=E8(this);a.index=-1;a.videoId="";w8(a);H8(this,a);this.Z("remotePlayerChange")}else G8(this,this.stop)};
g.k.setVolume=function(a,b){if(F8(this)){var c=E8(this);if(this.l){if(c.volume!=a){var d=Math.round(a)/100;this.l.setReceiverVolumeLevel(d,(0,g.D)(function(){G7("CP","set receiver volume: "+d)},this),(0,g.D)(function(){this.Yd("failed to set receiver volume.")},this))}c.muted!=b&&this.l.setReceiverMuted(b,(0,g.D)(function(){G7("CP","set receiver muted: "+b)},this),(0,g.D)(function(){this.Yd("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);J8(this,"setVolume",e)}c.muted=b;c.volume=a;H8(this,c)}else G8(this,g.Oa(this.setVolume,a,b))};
g.k.zG=function(a,b){if(F8(this)){var c=E8(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.Oh(b.style),g.Zb(a,c.trackData));J8(this,"setSubtitlesTrack",a);H8(this,c)}else G8(this,g.Oa(this.zG,a,b))};
g.k.setAudioTrack=function(a,b){F8(this)?(b=b.getLanguageInfo().getId(),J8(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=E8(this),a.audioTrackId=b,H8(this,a)):G8(this,g.Oa(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;h=void 0===h?null:h;var l=E8(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);A8(l,a,c||0);void 0!==b&&(y8(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);h&&(m.locationInfo=g.Oh(h));J8(this,"setPlaylist",m);d||H8(this,l)};
g.k.pz=function(a,b){if(F8(this)){if(a&&b){var c=E8(this);A8(c,a,b);H8(this,c)}J8(this,"previous")}else G8(this,g.Oa(this.pz,a,b))};
g.k.nextVideo=function(a,b){if(F8(this)){if(a&&b){var c=E8(this);A8(c,a,b);H8(this,c)}J8(this,"next")}else G8(this,g.Oa(this.nextVideo,a,b))};
g.k.mI=function(){F8(this)?J8(this,"dismissAutoplay"):G8(this,this.mI)};
g.k.dispose=function(){if(3!=this.Oa){var a=this.Oa;this.Oa=3;this.Z("proxyStateChange",a,this.Oa)}g.Kx.prototype.dispose.call(this)};
g.k.va=function(){pSa(this);this.u=null;this.B.clear();C8(this,null);g.Kx.prototype.va.call(this)};
g.k.LE=function(a){if((a!=this.Oa||2==a)&&3!=this.Oa&&0!=a){var b=this.Oa;this.Oa=a;this.Z("proxyStateChange",b,a);if(1==a)for(;!this.B.isEmpty();)b=a=this.B,0===b.i.length&&(b.i=b.l,b.i.reverse(),b.l=[]),a.i.pop().apply(this);else 3==a&&this.dispose()}};
g.k.ZT=function(a,b){this.Z(a,b)};
g.k.zS=function(a){if(!a)this.Bv(null),C8(this,null);else if(this.l.receiver.volume){a=this.l.receiver.volume;var b=E8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)G7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,H8(this,b)}};
g.k.Bv=function(a){G7("CP","Cast media: "+!!a);this.i&&this.i.removeUpdateListener(this.J);if(this.i=a)this.i.addUpdateListener(this.J),qSa(this),this.Z("remotePlayerChange")};
g.k.yS=function(a){a?(qSa(this),this.Z("remotePlayerChange")):this.Bv(null)};
g.k.eF=function(){J8(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.HS=function(){var a=mSa();a&&C8(this,a)};
g.k.Yd=function(a){G7("CP",a)};g.w(L8,g.Kx);g.k=L8.prototype;
g.k.connect=function(a,b,c){c=void 0===c?!1:c;if(b){var d=b.listId,e=b.videoId,f=b.videoIds,h=b.playerParams,l=b.clickTrackingParams,m=b.index,n={videoId:e},p=b.currentTime,q=b.locationInfo;b=b.loopMode;void 0!==p&&(n.currentTime=5>=p?0:p);h&&(n.playerParams=h);q&&(n.locationInfo=q);l&&(n.clickTrackingParams=l);d&&(n.listId=d);f&&0<f.length&&(n.videoIds=f.join(","));void 0!==m&&(n.currentIndex=m);c&&(n.loopMode=b||"LOOP_MODE_OFF");d&&(this.hc.listId=d);this.hc.videoId=e;this.hc.index=m||0;this.hc.state=
3;y8(this.hc,p);this.B="UNSUPPORTED";c=c?"setInitialState":"setPlaylist";M8("Connecting with "+c+" and params: "+g.Oh(n));this.i.connect({method:c,params:g.Oh(n)},a,yQa())}else M8("Connecting without params"),this.i.connect({},a,yQa());tSa(this)};
g.k.Kz=function(a){this.i.Kz(a)};
g.k.dispose=function(){this.isDisposed()||(g.Fa("yt.mdx.remote.remoteClient_",null,void 0),this.Z("beforeDispose"),N8(this,3));g.Kx.prototype.dispose.call(this)};
g.k.va=function(){O8(this);Q8(this);P8(this);g.dt(this.J);this.J=NaN;g.dt(this.L);this.L=NaN;this.u=null;g.iu(this.V);this.V.length=0;this.i.dispose();g.Kx.prototype.va.call(this);this.B=this.G=this.l=this.hc=this.i=null};
g.k.AQ=function(){this.qr(2)};
g.k.DS=function(){M8("Channel opened");this.xa&&(this.xa=!1,P8(this),this.Y=g.Gs((0,g.D)(function(){M8("Timing out waiting for a screen.");this.qr(1)},this),15E3));
CQa(rRa(this.i),this.Fa)};
g.k.AS=function(){M8("Channel closed");isNaN(this.C)?S6(!0):S6();this.dispose()};
g.k.BS=function(a,b){S6();isNaN(this.Ju())?(b&&"shortLived"==this.ya&&this.Z("browserChannelAuthError",a),M8("Channel error: "+a+" without reconnection"),this.dispose()):(this.xa=!0,M8("Channel error: "+a+" with reconnection in "+this.Ju()+" ms"),N8(this,2))};
g.k.wJ=function(a){if(!this.l||0===this.l.length)return!1;for(var b=g.r(this.l),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.k.CS=function(a){a.params?M8("Received: action="+a.action+", params="+g.Oh(a.params)):M8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=E6(a.params.devices);this.l=g.Re(a,function(c){return new G6(c)});
a=!!g.eb(this.l,function(c){return"LOUNGE_SCREEN"==c.type});
wSa(this,a);a=this.wJ("mlm");this.Z("multiStateLoopEnabled",a);break;case "loungeScreenDisconnected":g.ob(this.l,function(c){return"LOUNGE_SCREEN"==c.type});
wSa(this,!1);break;case "remoteConnected":var b=new G6(E6(a.params.device));g.eb(this.l,function(c){return b?c.id==b.id:!1})||lQa(this.l,b);
break;case "remoteDisconnected":b=new G6(E6(a.params.device));g.ob(this.l,function(c){return b?c.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":ySa(this,a);break;case "nowPlaying":ASa(this,a);break;case "onStateChange":zSa(this,a);break;case "onAdStateChange":BSa(this,a);break;case "onVolumeChanged":CSa(this,a);break;case "onSubtitlesTrackChanged":xSa(this,a);break;case "nowAutoplaying":DSa(this,a);break;case "autoplayDismissed":this.Z("autoplayDismissed");break;case "autoplayUpNext":this.G=a.params.videoId||null;this.Z("autoplayUpNext",this.G);break;case "onAutoplayModeChanged":this.B=
a.params.autoplayMode;this.Z("autoplayModeChange",this.B);"DISABLED"==this.B&&this.Z("autoplayDismissed");break;case "onHasPreviousNextChanged":ESa(this,a);break;case "requestAssistedSignIn":this.Z("assistedSignInRequested",a.params.authCode);break;case "onLoopModeChanged":this.Z("loopModeChange",a.params.loopMode);break;default:M8("Unrecognized action: "+a.action)}};
g.k.zV=function(){if(this.u){var a=this.u;this.u=null;this.hc.videoId!=a&&R8(this,"getNowPlaying")}};
g.k.vQ=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.Ju())?B7(this.i)&&isNaN(this.C)&&(a=1):a=2);return a};
g.k.qr=function(a){M8("Disconnecting with "+a);g.Fa("yt.mdx.remote.remoteClient_",null,void 0);O8(this);this.Z("beforeDisconnect",a);1==a&&S6();sRa(this.i,a);this.dispose()};
g.k.tQ=function(){var a=this.hc;this.u&&(a=this.hc.clone(),A8(a,this.u,a.index));return B8(a)};
g.k.MV=function(a){var b=new v8(a);b.videoId&&b.videoId!=this.hc.videoId&&(this.u=b.videoId,g.dt(this.J),this.J=g.Gs((0,g.D)(this.zV,this),5E3));var c=[];this.hc.listId==b.listId&&this.hc.videoId==b.videoId&&this.hc.index==b.index||c.push("remoteQueueChange");this.hc.playerState==b.playerState&&this.hc.volume==b.volume&&this.hc.muted==b.muted&&z8(this.hc)==z8(b)&&g.Oh(this.hc.trackData)==g.Oh(b.trackData)||c.push("remotePlayerChange");this.hc.reset(a);g.Bb(c,function(d){this.Z(d)},this)};
g.k.SI=function(){var a=this.i.G.id,b=g.eb(this.l,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.Ju=function(){var a=this.i;return a.l.isActive()?a.l.l-Date.now():NaN};
g.k.qQ=function(){return this.B||"UNSUPPORTED"};
g.k.rQ=function(){return this.G||""};
g.k.SO=function(){if(!isNaN(this.Ju())){var a=this.i.l;g.Gq(a.i);a.start()}};
g.k.JV=function(a,b){R8(this,a,b);vSa(this)};
g.k.AG=function(){var a=g.vt("SID","")||"",b=g.vt("SAPISID","")||"",c=g.vt("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.ee(g.Xa(a),2);b=g.ee(g.Xa(b),2);c=g.ee(g.Xa(c),2);return g.ee(g.Xa(a+","+b+","+c),2)};
L8.prototype.subscribe=L8.prototype.subscribe;L8.prototype.unsubscribeByKey=L8.prototype.Rf;L8.prototype.getProxyState=L8.prototype.vQ;L8.prototype.disconnect=L8.prototype.qr;L8.prototype.getPlayerContextData=L8.prototype.tQ;L8.prototype.setPlayerContextData=L8.prototype.MV;L8.prototype.getOtherConnectedRemoteId=L8.prototype.SI;L8.prototype.getReconnectTimeout=L8.prototype.Ju;L8.prototype.getAutoplayMode=L8.prototype.qQ;L8.prototype.getAutoplayVideoId=L8.prototype.rQ;L8.prototype.reconnect=L8.prototype.SO;
L8.prototype.sendMessage=L8.prototype.JV;L8.prototype.getXsrfToken=L8.prototype.AG;L8.prototype.isCapabilitySupportedOnConnectedDevices=L8.prototype.wJ;g.w(S8,K7);g.k=S8.prototype;g.k.Dh=function(a){return this.Ke.$_gs(a)};
g.k.contains=function(a){return!!this.Ke.$_c(a)};
g.k.get=function(a){return this.Ke.$_g(a)};
g.k.start=function(){this.Ke.$_st()};
g.k.add=function(a,b,c){this.Ke.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.Ke.$_r(a,b,c)};
g.k.fA=function(a,b,c,d){this.Ke.$_un(a,b,c,d)};
g.k.va=function(){for(var a=0,b=this.i.length;a<b;++a)this.Ke.$_ubk(this.i[a]);this.i.length=0;this.Ke=null;K7.prototype.va.call(this)};
g.k.TO=function(){this.Z("screenChange")};
g.k.DT=function(){this.Z("onlineScreenChange")};
U7.prototype.$_st=U7.prototype.start;U7.prototype.$_gspc=U7.prototype.NO;U7.prototype.$_gsppc=U7.prototype.wG;U7.prototype.$_c=U7.prototype.contains;U7.prototype.$_g=U7.prototype.get;U7.prototype.$_a=U7.prototype.add;U7.prototype.$_un=U7.prototype.fA;U7.prototype.$_r=U7.prototype.remove;U7.prototype.$_gs=U7.prototype.Dh;U7.prototype.$_gos=U7.prototype.vG;U7.prototype.$_s=U7.prototype.subscribe;U7.prototype.$_ubk=U7.prototype.Rf;var e9=null,k9=!1,T8=null,U8=null,j9=null,Y8=[];g.w(l9,g.F);g.k=l9.prototype;g.k.va=function(){g.F.prototype.va.call(this);this.i.stop();this.u.stop();this.L.stop();this.Y();var a=this.Pb;a.unsubscribe("proxyStateChange",this.XK,this);a.unsubscribe("remotePlayerChange",this.Hv,this);a.unsubscribe("remoteQueueChange",this.fz,this);a.unsubscribe("previousNextChange",this.UK,this);a.unsubscribe("nowAutoplaying",this.OK,this);a.unsubscribe("autoplayDismissed",this.rK,this);this.Pb=this.l=null};
g.k.gj=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.Pb.Oa)if(m9(this)){if(!E8(this.Pb).isAdPlaying()||"control_seek"!==a)switch(a){case "control_toggle_play_pause":E8(this.Pb).xc()?this.Pb.pause():this.Pb.play();break;case "control_play":this.Pb.play();break;case "control_pause":this.Pb.pause();break;case "control_seek":this.J.uG(c[0],c[1]);break;case "control_subtitles_set_track":n9(this,c[0]);break;case "control_set_audio_track":this.setAudioTrack(c[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=
this.I.getCurrentTime();o9(this,0===c?void 0:c);break;case "control_seek":o9(this,c[0]);break;case "control_subtitles_set_track":n9(this,c[0]);break;case "control_set_audio_track":this.setAudioTrack(c[0])}};
g.k.wS=function(a){this.L.HO(a)};
g.k.rW=function(a){this.gj("control_subtitles_set_track",g.Sb(a)?null:a)};
g.k.iM=function(){var a=this.I.getOption("captions","track");g.Sb(a)||n9(this,a)};
g.k.Rb=function(a){this.l.Rb(a,this.I.getVideoData().lengthSeconds)};
g.k.nT=function(){g.Sb(this.B)||PSa(this,this.B);this.C=!1};
g.k.XK=function(a,b){this.u.stop();2===b&&this.cM()};
g.k.Hv=function(){if(m9(this)){this.i.stop();var a=E8(this.Pb);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.l.kf=1;break;case 1082:case 1083:this.l.kf=0;break;default:this.l.kf=-1}switch(a.playerState){case 1081:case 1:this.Mb(new g.gK(8));this.bM();break;case 1085:case 3:this.Mb(new g.gK(9));break;case 1083:case 0:this.Mb(new g.gK(2));this.J.stop();this.Rb(this.I.getVideoData().lengthSeconds);break;case 1084:this.Mb(new g.gK(4));break;case 2:this.Mb(new g.gK(4));this.Rb(z8(a));
break;case -1:this.Mb(new g.gK(64));break;case -1E3:this.Mb(new g.gK(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback."}))}a=E8(this.Pb).trackData;var b=this.B;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.B=a,PSa(this,a));a=E8(this.Pb);-1===a.volume||Math.round(this.I.getVolume())===a.volume&&this.I.isMuted()===a.muted||this.V.isActive()||this.JM()}else OSa(this)};
g.k.UK=function(){this.I.Z("mdxpreviousnextchange")};
g.k.fz=function(){m9(this)||OSa(this)};
g.k.OK=function(a){isNaN(a)||this.I.Z("mdxnowautoplaying",a)};
g.k.rK=function(){this.I.Z("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){m9(this)&&this.Pb.setAudioTrack(this.I.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===E8(this.Pb).playerState?o9(this,a):b&&this.Pb.seekTo(a)};
g.k.JM=function(){var a=this;if(m9(this)){var b=E8(this.Pb);this.events.jc(this.ea);b.muted?this.I.mute():this.I.unMute();this.I.setVolume(b.volume);this.ea=this.events.N(this.I,"onVolumeChange",function(c){NSa(a,c)})}};
g.k.bM=function(){this.i.stop();if(!this.Pb.isDisposed()){var a=E8(this.Pb);a.xc()&&this.Mb(new g.gK(8));this.Rb(z8(a));this.i.start()}};
g.k.cM=function(){this.u.stop();this.i.stop();var a=this.Pb.u.getReconnectTimeout();2==this.Pb.Oa&&!isNaN(a)&&this.u.start()};
g.k.Mb=function(a){this.u.stop();var b=this.G;if(!g.lK(b,a)){var c=g.U(a,2);c!==g.U(this.G,2)&&this.I.Bs(c);this.G=a;RSa(this.l,b,a)}};g.w(p9,g.V);p9.prototype.Zc=function(){this.i.show()};
p9.prototype.Bb=function(){this.i.hide()};
p9.prototype.l=function(){g.OJ("https://web.archive.org/web/20210802045500/https://support.google.com/youtube/answer/7640706")};
p9.prototype.u=function(){F6("mdx-manual-pairing-popup-ok");this.Bb()};g.w(q9,g.V);q9.prototype.Zc=function(){this.i.show()};
q9.prototype.Bb=function(){this.i.hide()};
q9.prototype.l=function(){F6("mdx-privacy-popup-cancel");this.Bb()};
q9.prototype.u=function(){F6("mdx-privacy-popup-confirm");this.Bb()};g.w(r9,g.V);r9.prototype.l=function(a){QSa(this,a.state)};g.w(s9,g.XP);s9.prototype.C=function(){var a=this.I.getOption("remote","receivers");a&&1<a.length&&!this.I.getOption("remote","quickCast")?(this.Pn=g.Cb(a,this.i,this),g.YP(this,g.Re(a,this.i)),a=this.I.getOption("remote","currentReceiver"),a=this.i(a),this.options[a]&&this.Rh(a),this.enable(!0)):this.enable(!1)};
s9.prototype.i=function(a){return a.key};
s9.prototype.Xi=function(a){return"cast-selector-receiver"===a?"Cast...":this.Pn[a].name};
s9.prototype.uf=function(a){g.XP.prototype.uf.call(this,a);this.I.setOption("remote","currentReceiver",this.Pn[a]);this.yb.Bb()};g.w(t9,g.jN);g.k=t9.prototype;
g.k.create=function(){var a=this.player.T(),b=g.xF(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:g.S(a.experiments,"mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:g.S(a.experiments,"enable_dial_short_lived_lounge_token"),enableCastLoungeToken:g.S(a.experiments,"enable_cast_short_lived_lounge_token")};ISa(b,a);this.subscriptions.push(g.Qu("yt-remote-before-disconnect",this.vS,this));this.subscriptions.push(g.Qu("yt-remote-connection-change",this.gU,this));this.subscriptions.push(g.Qu("yt-remote-receiver-availability-change",
this.WK,this));this.subscriptions.push(g.Qu("yt-remote-auto-connect",this.eU,this));this.subscriptions.push(g.Qu("yt-remote-receiver-resumed",this.dU,this));this.subscriptions.push(g.Qu("mdx-privacy-popup-confirm",this.qV,this));this.subscriptions.push(g.Qu("mdx-privacy-popup-cancel",this.pV,this));this.subscriptions.push(g.Qu("mdx-manual-pairing-popup-ok",this.AR,this));this.WK()};
g.k.load=function(){this.player.cancelPlayback();g.jN.prototype.load.call(this);this.Uh=new l9(this,this.player,this.Pb);var a=(a=MSa())?a.currentTime:0;var b=i9()?new D8(c9(),void 0):null;0==a&&b&&(a=z8(E8(b)));0!==a&&this.Rb(a);RSa(this,this.md,this.md);this.player.Ok(6)};
g.k.unload=function(){this.player.Z("mdxautoplaycanceled");this.Km=this.mj;g.gf(this.Uh,this.Pb);this.Pb=this.Uh=null;g.jN.prototype.unload.call(this);this.player.Ok(5);u9(this)};
g.k.va=function(){g.Ru(this.subscriptions);g.jN.prototype.va.call(this)};
g.k.Fk=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.Uh.gj.apply(this.Uh,[a].concat(g.v(c)))};
g.k.getAdState=function(){return this.kf};
g.k.wQ=function(){return this.loaded?this.Uh.suggestion:null};
g.k.wk=function(){return this.Pb?E8(this.Pb).wk:!1};
g.k.hasNext=function(){return this.Pb?E8(this.Pb).hasNext:!1};
g.k.Rb=function(a,b){this.KJ=a||0;this.player.Z("progresssync",a,b);this.player.Na("onVideoProgress",a)};
g.k.getCurrentTime=function(){return this.KJ};
g.k.getProgressState=function(){var a=E8(this.Pb),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:g.S(this.player.T().experiments,"web_player_mdx_allow_seeking_change_killswitch")?this.player.hf():!a.isAdPlaying()&&this.player.hf(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.l?a.u+x8(a):a.u,isAtLiveHead:1>=(a.l?a.i+x8(a):a.i)-this.getCurrentTime(),loaded:a.L,seekableEnd:a.l?a.i+x8(a):a.i,
seekableStart:0<a.B?a.B+x8(a):a.B}};
g.k.nextVideo=function(){this.Pb&&this.Pb.nextVideo()};
g.k.pz=function(){this.Pb&&this.Pb.pz()};
g.k.vS=function(a){1===a&&(this.kE=this.Pb?E8(this.Pb):null)};
g.k.gU=function(){var a=i9()?new D8(c9(),void 0):null;if(a){var b=this.Km;this.loaded&&this.unload();this.Pb=a;this.kE=null;b.key!==this.mj.key&&(this.Km=b,this.load())}else g.ff(this.Pb),this.Pb=null,this.loaded&&(this.unload(),(a=this.kE)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,z8(a)));this.player.Z("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.WK=function(){var a=[this.mj],b=a.concat,c=JSa();r8()&&g.uz("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.Pn=b.call(a,c);a=d9()||this.mj;v9(this,a);this.player.Na("onMdxReceiversChange")};
g.k.eU=function(){var a=d9();v9(this,a)};
g.k.dU=function(){this.Km=d9()};
g.k.qV=function(){this.Nv=!0;u9(this);k9=!1;e9&&g9(e9,1);e9=null};
g.k.pV=function(){this.Nv=!1;u9(this);v9(this,this.mj);this.Km=this.mj;k9=!1;e9=null;this.player.playVideo()};
g.k.AR=function(){this.Fy=!0;u9(this);g.tz("yt-remote-manual-pairing-warning-shown",!0,2592E3);k9=!1;e9&&g9(e9,1);e9=null};
g.k.Ze=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.Pn;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?t8():v9(this,b)),this.loaded?this.Km:this.mj;case "quickCast":return 2===this.Pn.length&&"cast-selector-receiver"===this.Pn[1].key?(b&&t8(),!0):!1}};
g.k.eF=function(){this.Pb.eF()};
g.k.Hi=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.uN.remote=t9;})(_yt_player);


}
/*
     FILE ARCHIVED ON 04:55:00 Aug 02, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:28:48 Oct 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 95.951
  exclusion.robots: 0.07
  exclusion.robots.policy: 0.063
  cdx.remote: 0.047
  esindex: 0.008
  LoadShardBlock: 37.951 (3)
  PetaboxLoader3.datanode: 80.193 (5)
  load_resource: 230.011 (2)
  PetaboxLoader3.resolve: 178.145 (2)
*/