(function(V,f){typeof exports=="object"&&typeof module<"u"?f(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],f):(V=typeof globalThis<"u"?globalThis:V||self,f(V.LowCal={},V.Vue))})(this,function(V,f){"use strict";var rd=Object.defineProperty;var id=(V,f,se)=>f in V?rd(V,f,{enumerable:!0,configurable:!0,writable:!0,value:se}):V[f]=se;var xn=(V,f,se)=>id(V,typeof f!="symbol"?f+"":f,se);const se=(e,t)=>{const a=e.__vccOpts||e;for(const[n,r]of t)a[n]=r;return a},Yi={},Ni={class:"small-header"};function Ti(e,t,a,n,r,i){return f.openBlock(),f.createElementBlock("div",Ni,[f.renderSlot(e.$slots,"default",{},void 0,!0)])}const Ci=se(Yi,[["render",Ti],["__scopeId","data-v-d0e6fe58"]]);//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Mn;function m(){return Mn.apply(null,arguments)}function Pi(e){Mn=e}function Q(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function Ee(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function M(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function da(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(M(e,t))return!1;return!0}function B(e){return e===void 0}function me(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function at(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function On(e,t){var a=[],n,r=e.length;for(n=0;n<r;++n)a.push(t(e[n],n));return a}function Oe(e,t){for(var a in t)M(t,a)&&(e[a]=t[a]);return M(t,"toString")&&(e.toString=t.toString),M(t,"valueOf")&&(e.valueOf=t.valueOf),e}function oe(e,t,a,n){return Qn(e,t,a,n,!0).utc()}function Ai(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function w(e){return e._pf==null&&(e._pf=Ai()),e._pf}var ma;Array.prototype.some?ma=Array.prototype.some:ma=function(e){var t=Object(this),a=t.length>>>0,n;for(n=0;n<a;n++)if(n in t&&e.call(this,t[n],n,t))return!0;return!1};function ha(e){var t=null,a=!1,n=e._d&&!isNaN(e._d.getTime());if(n&&(t=w(e),a=ma.call(t.parsedDateParts,function(r){return r!=null}),n=t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&a),e._strict&&(n=n&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=n;else return n;return e._isValid}function Mt(e){var t=oe(NaN);return e!=null?Oe(w(t),e):w(t).userInvalidated=!0,t}var Dn=m.momentProperties=[],ya=!1;function va(e,t){var a,n,r,i=Dn.length;if(B(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),B(t._i)||(e._i=t._i),B(t._f)||(e._f=t._f),B(t._l)||(e._l=t._l),B(t._strict)||(e._strict=t._strict),B(t._tzm)||(e._tzm=t._tzm),B(t._isUTC)||(e._isUTC=t._isUTC),B(t._offset)||(e._offset=t._offset),B(t._pf)||(e._pf=w(t)),B(t._locale)||(e._locale=t._locale),i>0)for(a=0;a<i;a++)n=Dn[a],r=t[n],B(r)||(e[n]=r);return e}function nt(e){va(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),ya===!1&&(ya=!0,m.updateOffset(this),ya=!1)}function ee(e){return e instanceof nt||e!=null&&e._isAMomentObject!=null}function Yn(e){m.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function X(e,t){var a=!0;return Oe(function(){if(m.deprecationHandler!=null&&m.deprecationHandler(null,e),a){var n=[],r,i,s,o=arguments.length;for(i=0;i<o;i++){if(r="",typeof arguments[i]=="object"){r+=`
[`+i+"] ";for(s in arguments[0])M(arguments[0],s)&&(r+=s+": "+arguments[0][s]+", ");r=r.slice(0,-2)}else r=arguments[i];n.push(r)}Yn(e+`
Arguments: `+Array.prototype.slice.call(n).join("")+`
`+new Error().stack),a=!1}return t.apply(this,arguments)},t)}var Nn={};function Tn(e,t){m.deprecationHandler!=null&&m.deprecationHandler(e,t),Nn[e]||(Yn(t),Nn[e]=!0)}m.suppressDeprecationWarnings=!1,m.deprecationHandler=null;function le(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function Ei(e){var t,a;for(a in e)M(e,a)&&(t=e[a],le(t)?this[a]=t:this["_"+a]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function pa(e,t){var a=Oe({},e),n;for(n in t)M(t,n)&&(Ee(e[n])&&Ee(t[n])?(a[n]={},Oe(a[n],e[n]),Oe(a[n],t[n])):t[n]!=null?a[n]=t[n]:delete a[n]);for(n in e)M(e,n)&&!M(t,n)&&Ee(e[n])&&(a[n]=Oe({},a[n]));return a}function ga(e){e!=null&&this.set(e)}var ba;Object.keys?ba=Object.keys:ba=function(e){var t,a=[];for(t in e)M(e,t)&&a.push(t);return a};var Ii={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function Ri(e,t,a){var n=this._calendar[e]||this._calendar.sameElse;return le(n)?n.call(t,a):n}function fe(e,t,a){var n=""+Math.abs(e),r=t-n.length,i=e>=0;return(i?a?"+":"":"-")+Math.pow(10,Math.max(0,r)).toString().substr(1)+n}var _a=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Ot=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,ka={},ze={};function g(e,t,a,n){var r=n;typeof n=="string"&&(r=function(){return this[n]()}),e&&(ze[e]=r),t&&(ze[t[0]]=function(){return fe(r.apply(this,arguments),t[1],t[2])}),a&&(ze[a]=function(){return this.localeData().ordinal(r.apply(this,arguments),e)})}function Li(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function Fi(e){var t=e.match(_a),a,n;for(a=0,n=t.length;a<n;a++)ze[t[a]]?t[a]=ze[t[a]]:t[a]=Li(t[a]);return function(r){var i="",s;for(s=0;s<n;s++)i+=le(t[s])?t[s].call(r,e):t[s];return i}}function Dt(e,t){return e.isValid()?(t=Cn(t,e.localeData()),ka[t]=ka[t]||Fi(t),ka[t](e)):e.localeData().invalidDate()}function Cn(e,t){var a=5;function n(r){return t.longDateFormat(r)||r}for(Ot.lastIndex=0;a>=0&&Ot.test(e);)e=e.replace(Ot,n),Ot.lastIndex=0,a-=1;return e}var Wi={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Ui(e){var t=this._longDateFormat[e],a=this._longDateFormat[e.toUpperCase()];return t||!a?t:(this._longDateFormat[e]=a.match(_a).map(function(n){return n==="MMMM"||n==="MM"||n==="DD"||n==="dddd"?n.slice(1):n}).join(""),this._longDateFormat[e])}var ji="Invalid date";function zi(){return this._invalidDate}var Hi="%d",Vi=/\d{1,2}/;function Bi(e){return this._ordinal.replace("%d",e)}var Gi={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function $i(e,t,a,n){var r=this._relativeTime[a];return le(r)?r(e,t,a,n):r.replace(/%d/i,e)}function Zi(e,t){var a=this._relativeTime[e>0?"future":"past"];return le(a)?a(t):a.replace(/%s/i,t)}var Pn={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function K(e){return typeof e=="string"?Pn[e]||Pn[e.toLowerCase()]:void 0}function wa(e){var t={},a,n;for(n in e)M(e,n)&&(a=K(n),a&&(t[a]=e[n]));return t}var qi={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Xi(e){var t=[],a;for(a in e)M(e,a)&&t.push({unit:a,priority:qi[a]});return t.sort(function(n,r){return n.priority-r.priority}),t}var An=/\d/,Z=/\d\d/,En=/\d{3}/,Sa=/\d{4}/,Yt=/[+-]?\d{6}/,T=/\d\d?/,In=/\d\d\d\d?/,Rn=/\d\d\d\d\d\d?/,Nt=/\d{1,3}/,xa=/\d{1,4}/,Tt=/[+-]?\d{1,6}/,He=/\d+/,Ct=/[+-]?\d+/,Ki=/Z|[+-]\d\d:?\d\d/gi,Pt=/Z|[+-]\d\d(?::?\d\d)?/gi,Ji=/[+-]?\d+(\.\d{1,3})?/,rt=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Ve=/^[1-9]\d?/,Ma=/^([1-9]\d|\d)/,At;At={};function y(e,t,a){At[e]=le(t)?t:function(n,r){return n&&a?a:t}}function Qi(e,t){return M(At,e)?At[e](t._strict,t._locale):new RegExp(es(e))}function es(e){return he(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,a,n,r,i){return a||n||r||i}))}function he(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function J(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function S(e){var t=+e,a=0;return t!==0&&isFinite(t)&&(a=J(t)),a}var Oa={};function Y(e,t){var a,n=t,r;for(typeof e=="string"&&(e=[e]),me(t)&&(n=function(i,s){s[t]=S(i)}),r=e.length,a=0;a<r;a++)Oa[e[a]]=n}function it(e,t){Y(e,function(a,n,r,i){r._w=r._w||{},t(a,r._w,r,i)})}function ts(e,t,a){t!=null&&M(Oa,e)&&Oa[e](t,a._a,a,e)}function Et(e){return e%4===0&&e%100!==0||e%400===0}var z=0,ye=1,ue=2,F=3,te=4,ve=5,Ie=6,as=7,ns=8;g("Y",0,0,function(){var e=this.year();return e<=9999?fe(e,4):"+"+e}),g(0,["YY",2],0,function(){return this.year()%100}),g(0,["YYYY",4],0,"year"),g(0,["YYYYY",5],0,"year"),g(0,["YYYYYY",6,!0],0,"year"),y("Y",Ct),y("YY",T,Z),y("YYYY",xa,Sa),y("YYYYY",Tt,Yt),y("YYYYYY",Tt,Yt),Y(["YYYYY","YYYYYY"],z),Y("YYYY",function(e,t){t[z]=e.length===2?m.parseTwoDigitYear(e):S(e)}),Y("YY",function(e,t){t[z]=m.parseTwoDigitYear(e)}),Y("Y",function(e,t){t[z]=parseInt(e,10)});function st(e){return Et(e)?366:365}m.parseTwoDigitYear=function(e){return S(e)+(S(e)>68?1900:2e3)};var Ln=Be("FullYear",!0);function rs(){return Et(this.year())}function Be(e,t){return function(a){return a!=null?(Fn(this,e,a),m.updateOffset(this,t),this):ot(this,e)}}function ot(e,t){if(!e.isValid())return NaN;var a=e._d,n=e._isUTC;switch(t){case"Milliseconds":return n?a.getUTCMilliseconds():a.getMilliseconds();case"Seconds":return n?a.getUTCSeconds():a.getSeconds();case"Minutes":return n?a.getUTCMinutes():a.getMinutes();case"Hours":return n?a.getUTCHours():a.getHours();case"Date":return n?a.getUTCDate():a.getDate();case"Day":return n?a.getUTCDay():a.getDay();case"Month":return n?a.getUTCMonth():a.getMonth();case"FullYear":return n?a.getUTCFullYear():a.getFullYear();default:return NaN}}function Fn(e,t,a){var n,r,i,s,o;if(!(!e.isValid()||isNaN(a))){switch(n=e._d,r=e._isUTC,t){case"Milliseconds":return void(r?n.setUTCMilliseconds(a):n.setMilliseconds(a));case"Seconds":return void(r?n.setUTCSeconds(a):n.setSeconds(a));case"Minutes":return void(r?n.setUTCMinutes(a):n.setMinutes(a));case"Hours":return void(r?n.setUTCHours(a):n.setHours(a));case"Date":return void(r?n.setUTCDate(a):n.setDate(a));case"FullYear":break;default:return}i=a,s=e.month(),o=e.date(),o=o===29&&s===1&&!Et(i)?28:o,r?n.setUTCFullYear(i,s,o):n.setFullYear(i,s,o)}}function is(e){return e=K(e),le(this[e])?this[e]():this}function ss(e,t){if(typeof e=="object"){e=wa(e);var a=Xi(e),n,r=a.length;for(n=0;n<r;n++)this[a[n].unit](e[a[n].unit])}else if(e=K(e),le(this[e]))return this[e](t);return this}function os(e,t){return(e%t+t)%t}var R;Array.prototype.indexOf?R=Array.prototype.indexOf:R=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function Da(e,t){if(isNaN(e)||isNaN(t))return NaN;var a=os(t,12);return e+=(t-a)/12,a===1?Et(e)?29:28:31-a%7%2}g("M",["MM",2],"Mo",function(){return this.month()+1}),g("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),g("MMMM",0,0,function(e){return this.localeData().months(this,e)}),y("M",T,Ve),y("MM",T,Z),y("MMM",function(e,t){return t.monthsShortRegex(e)}),y("MMMM",function(e,t){return t.monthsRegex(e)}),Y(["M","MM"],function(e,t){t[ye]=S(e)-1}),Y(["MMM","MMMM"],function(e,t,a,n){var r=a._locale.monthsParse(e,n,a._strict);r!=null?t[ye]=r:w(a).invalidMonth=e});var ls="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Wn="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Un=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,fs=rt,us=rt;function cs(e,t){return e?Q(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Un).test(t)?"format":"standalone"][e.month()]:Q(this._months)?this._months:this._months.standalone}function ds(e,t){return e?Q(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Un.test(t)?"format":"standalone"][e.month()]:Q(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function ms(e,t,a){var n,r,i,s=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],n=0;n<12;++n)i=oe([2e3,n]),this._shortMonthsParse[n]=this.monthsShort(i,"").toLocaleLowerCase(),this._longMonthsParse[n]=this.months(i,"").toLocaleLowerCase();return a?t==="MMM"?(r=R.call(this._shortMonthsParse,s),r!==-1?r:null):(r=R.call(this._longMonthsParse,s),r!==-1?r:null):t==="MMM"?(r=R.call(this._shortMonthsParse,s),r!==-1?r:(r=R.call(this._longMonthsParse,s),r!==-1?r:null)):(r=R.call(this._longMonthsParse,s),r!==-1?r:(r=R.call(this._shortMonthsParse,s),r!==-1?r:null))}function hs(e,t,a){var n,r,i;if(this._monthsParseExact)return ms.call(this,e,t,a);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),n=0;n<12;n++){if(r=oe([2e3,n]),a&&!this._longMonthsParse[n]&&(this._longMonthsParse[n]=new RegExp("^"+this.months(r,"").replace(".","")+"$","i"),this._shortMonthsParse[n]=new RegExp("^"+this.monthsShort(r,"").replace(".","")+"$","i")),!a&&!this._monthsParse[n]&&(i="^"+this.months(r,"")+"|^"+this.monthsShort(r,""),this._monthsParse[n]=new RegExp(i.replace(".",""),"i")),a&&t==="MMMM"&&this._longMonthsParse[n].test(e))return n;if(a&&t==="MMM"&&this._shortMonthsParse[n].test(e))return n;if(!a&&this._monthsParse[n].test(e))return n}}function jn(e,t){if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=S(t);else if(t=e.localeData().monthsParse(t),!me(t))return e}var a=t,n=e.date();return n=n<29?n:Math.min(n,Da(e.year(),a)),e._isUTC?e._d.setUTCMonth(a,n):e._d.setMonth(a,n),e}function zn(e){return e!=null?(jn(this,e),m.updateOffset(this,!0),this):ot(this,"Month")}function ys(){return Da(this.year(),this.month())}function vs(e){return this._monthsParseExact?(M(this,"_monthsRegex")||Hn.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(M(this,"_monthsShortRegex")||(this._monthsShortRegex=fs),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function ps(e){return this._monthsParseExact?(M(this,"_monthsRegex")||Hn.call(this),e?this._monthsStrictRegex:this._monthsRegex):(M(this,"_monthsRegex")||(this._monthsRegex=us),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function Hn(){function e(l,u){return u.length-l.length}var t=[],a=[],n=[],r,i,s,o;for(r=0;r<12;r++)i=oe([2e3,r]),s=he(this.monthsShort(i,"")),o=he(this.months(i,"")),t.push(s),a.push(o),n.push(o),n.push(s);t.sort(e),a.sort(e),n.sort(e),this._monthsRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}function gs(e,t,a,n,r,i,s){var o;return e<100&&e>=0?(o=new Date(e+400,t,a,n,r,i,s),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,t,a,n,r,i,s),o}function lt(e){var t,a;return e<100&&e>=0?(a=Array.prototype.slice.call(arguments),a[0]=e+400,t=new Date(Date.UTC.apply(null,a)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function It(e,t,a){var n=7+t-a,r=(7+lt(e,0,n).getUTCDay()-t)%7;return-r+n-1}function Vn(e,t,a,n,r){var i=(7+a-n)%7,s=It(e,n,r),o=1+7*(t-1)+i+s,l,u;return o<=0?(l=e-1,u=st(l)+o):o>st(e)?(l=e+1,u=o-st(e)):(l=e,u=o),{year:l,dayOfYear:u}}function ft(e,t,a){var n=It(e.year(),t,a),r=Math.floor((e.dayOfYear()-n-1)/7)+1,i,s;return r<1?(s=e.year()-1,i=r+pe(s,t,a)):r>pe(e.year(),t,a)?(i=r-pe(e.year(),t,a),s=e.year()+1):(s=e.year(),i=r),{week:i,year:s}}function pe(e,t,a){var n=It(e,t,a),r=It(e+1,t,a);return(st(e)-n+r)/7}g("w",["ww",2],"wo","week"),g("W",["WW",2],"Wo","isoWeek"),y("w",T,Ve),y("ww",T,Z),y("W",T,Ve),y("WW",T,Z),it(["w","ww","W","WW"],function(e,t,a,n){t[n.substr(0,1)]=S(e)});function bs(e){return ft(e,this._week.dow,this._week.doy).week}var _s={dow:0,doy:6};function ks(){return this._week.dow}function ws(){return this._week.doy}function Ss(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function xs(e){var t=ft(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}g("d",0,"do","day"),g("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),g("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),g("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),g("e",0,0,"weekday"),g("E",0,0,"isoWeekday"),y("d",T),y("e",T),y("E",T),y("dd",function(e,t){return t.weekdaysMinRegex(e)}),y("ddd",function(e,t){return t.weekdaysShortRegex(e)}),y("dddd",function(e,t){return t.weekdaysRegex(e)}),it(["dd","ddd","dddd"],function(e,t,a,n){var r=a._locale.weekdaysParse(e,n,a._strict);r!=null?t.d=r:w(a).invalidWeekday=e}),it(["d","e","E"],function(e,t,a,n){t[n]=S(e)});function Ms(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function Os(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Ya(e,t){return e.slice(t,7).concat(e.slice(0,t))}var Ds="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Bn="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Ys="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Ns=rt,Ts=rt,Cs=rt;function Ps(e,t){var a=Q(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?Ya(a,this._week.dow):e?a[e.day()]:a}function As(e){return e===!0?Ya(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Es(e){return e===!0?Ya(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Is(e,t,a){var n,r,i,s=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],n=0;n<7;++n)i=oe([2e3,1]).day(n),this._minWeekdaysParse[n]=this.weekdaysMin(i,"").toLocaleLowerCase(),this._shortWeekdaysParse[n]=this.weekdaysShort(i,"").toLocaleLowerCase(),this._weekdaysParse[n]=this.weekdays(i,"").toLocaleLowerCase();return a?t==="dddd"?(r=R.call(this._weekdaysParse,s),r!==-1?r:null):t==="ddd"?(r=R.call(this._shortWeekdaysParse,s),r!==-1?r:null):(r=R.call(this._minWeekdaysParse,s),r!==-1?r:null):t==="dddd"?(r=R.call(this._weekdaysParse,s),r!==-1||(r=R.call(this._shortWeekdaysParse,s),r!==-1)?r:(r=R.call(this._minWeekdaysParse,s),r!==-1?r:null)):t==="ddd"?(r=R.call(this._shortWeekdaysParse,s),r!==-1||(r=R.call(this._weekdaysParse,s),r!==-1)?r:(r=R.call(this._minWeekdaysParse,s),r!==-1?r:null)):(r=R.call(this._minWeekdaysParse,s),r!==-1||(r=R.call(this._weekdaysParse,s),r!==-1)?r:(r=R.call(this._shortWeekdaysParse,s),r!==-1?r:null))}function Rs(e,t,a){var n,r,i;if(this._weekdaysParseExact)return Is.call(this,e,t,a);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),n=0;n<7;n++){if(r=oe([2e3,1]).day(n),a&&!this._fullWeekdaysParse[n]&&(this._fullWeekdaysParse[n]=new RegExp("^"+this.weekdays(r,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[n]=new RegExp("^"+this.weekdaysShort(r,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[n]=new RegExp("^"+this.weekdaysMin(r,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[n]||(i="^"+this.weekdays(r,"")+"|^"+this.weekdaysShort(r,"")+"|^"+this.weekdaysMin(r,""),this._weekdaysParse[n]=new RegExp(i.replace(".",""),"i")),a&&t==="dddd"&&this._fullWeekdaysParse[n].test(e))return n;if(a&&t==="ddd"&&this._shortWeekdaysParse[n].test(e))return n;if(a&&t==="dd"&&this._minWeekdaysParse[n].test(e))return n;if(!a&&this._weekdaysParse[n].test(e))return n}}function Ls(e){if(!this.isValid())return e!=null?this:NaN;var t=ot(this,"Day");return e!=null?(e=Ms(e,this.localeData()),this.add(e-t,"d")):t}function Fs(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function Ws(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=Os(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function Us(e){return this._weekdaysParseExact?(M(this,"_weekdaysRegex")||Na.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(M(this,"_weekdaysRegex")||(this._weekdaysRegex=Ns),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function js(e){return this._weekdaysParseExact?(M(this,"_weekdaysRegex")||Na.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(M(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Ts),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function zs(e){return this._weekdaysParseExact?(M(this,"_weekdaysRegex")||Na.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(M(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Cs),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Na(){function e(c,h){return h.length-c.length}var t=[],a=[],n=[],r=[],i,s,o,l,u;for(i=0;i<7;i++)s=oe([2e3,1]).day(i),o=he(this.weekdaysMin(s,"")),l=he(this.weekdaysShort(s,"")),u=he(this.weekdays(s,"")),t.push(o),a.push(l),n.push(u),r.push(o),r.push(l),r.push(u);t.sort(e),a.sort(e),n.sort(e),r.sort(e),this._weekdaysRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function Ta(){return this.hours()%12||12}function Hs(){return this.hours()||24}g("H",["HH",2],0,"hour"),g("h",["hh",2],0,Ta),g("k",["kk",2],0,Hs),g("hmm",0,0,function(){return""+Ta.apply(this)+fe(this.minutes(),2)}),g("hmmss",0,0,function(){return""+Ta.apply(this)+fe(this.minutes(),2)+fe(this.seconds(),2)}),g("Hmm",0,0,function(){return""+this.hours()+fe(this.minutes(),2)}),g("Hmmss",0,0,function(){return""+this.hours()+fe(this.minutes(),2)+fe(this.seconds(),2)});function Gn(e,t){g(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}Gn("a",!0),Gn("A",!1);function $n(e,t){return t._meridiemParse}y("a",$n),y("A",$n),y("H",T,Ma),y("h",T,Ve),y("k",T,Ve),y("HH",T,Z),y("hh",T,Z),y("kk",T,Z),y("hmm",In),y("hmmss",Rn),y("Hmm",In),y("Hmmss",Rn),Y(["H","HH"],F),Y(["k","kk"],function(e,t,a){var n=S(e);t[F]=n===24?0:n}),Y(["a","A"],function(e,t,a){a._isPm=a._locale.isPM(e),a._meridiem=e}),Y(["h","hh"],function(e,t,a){t[F]=S(e),w(a).bigHour=!0}),Y("hmm",function(e,t,a){var n=e.length-2;t[F]=S(e.substr(0,n)),t[te]=S(e.substr(n)),w(a).bigHour=!0}),Y("hmmss",function(e,t,a){var n=e.length-4,r=e.length-2;t[F]=S(e.substr(0,n)),t[te]=S(e.substr(n,2)),t[ve]=S(e.substr(r)),w(a).bigHour=!0}),Y("Hmm",function(e,t,a){var n=e.length-2;t[F]=S(e.substr(0,n)),t[te]=S(e.substr(n))}),Y("Hmmss",function(e,t,a){var n=e.length-4,r=e.length-2;t[F]=S(e.substr(0,n)),t[te]=S(e.substr(n,2)),t[ve]=S(e.substr(r))});function Vs(e){return(e+"").toLowerCase().charAt(0)==="p"}var Bs=/[ap]\.?m?\.?/i,Gs=Be("Hours",!0);function $s(e,t,a){return e>11?a?"pm":"PM":a?"am":"AM"}var Zn={calendar:Ii,longDateFormat:Wi,invalidDate:ji,ordinal:Hi,dayOfMonthOrdinalParse:Vi,relativeTime:Gi,months:ls,monthsShort:Wn,week:_s,weekdays:Ds,weekdaysMin:Ys,weekdaysShort:Bn,meridiemParse:Bs},E={},ut={},ct;function Zs(e,t){var a,n=Math.min(e.length,t.length);for(a=0;a<n;a+=1)if(e[a]!==t[a])return a;return n}function qn(e){return e&&e.toLowerCase().replace("_","-")}function qs(e){for(var t=0,a,n,r,i;t<e.length;){for(i=qn(e[t]).split("-"),a=i.length,n=qn(e[t+1]),n=n?n.split("-"):null;a>0;){if(r=Rt(i.slice(0,a).join("-")),r)return r;if(n&&n.length>=a&&Zs(i,n)>=a-1)break;a--}t++}return ct}function Xs(e){return!!(e&&e.match("^[^/\\\\]*$"))}function Rt(e){var t=null,a;if(E[e]===void 0&&typeof module<"u"&&module&&module.exports&&Xs(e))try{t=ct._abbr,a=require,a("./locale/"+e),De(t)}catch{E[e]=null}return E[e]}function De(e,t){var a;return e&&(B(t)?a=ge(e):a=Ca(e,t),a?ct=a:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),ct._abbr}function Ca(e,t){if(t!==null){var a,n=Zn;if(t.abbr=e,E[e]!=null)Tn("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),n=E[e]._config;else if(t.parentLocale!=null)if(E[t.parentLocale]!=null)n=E[t.parentLocale]._config;else if(a=Rt(t.parentLocale),a!=null)n=a._config;else return ut[t.parentLocale]||(ut[t.parentLocale]=[]),ut[t.parentLocale].push({name:e,config:t}),null;return E[e]=new ga(pa(n,t)),ut[e]&&ut[e].forEach(function(r){Ca(r.name,r.config)}),De(e),E[e]}else return delete E[e],null}function Ks(e,t){if(t!=null){var a,n,r=Zn;E[e]!=null&&E[e].parentLocale!=null?E[e].set(pa(E[e]._config,t)):(n=Rt(e),n!=null&&(r=n._config),t=pa(r,t),n==null&&(t.abbr=e),a=new ga(t),a.parentLocale=E[e],E[e]=a),De(e)}else E[e]!=null&&(E[e].parentLocale!=null?(E[e]=E[e].parentLocale,e===De()&&De(e)):E[e]!=null&&delete E[e]);return E[e]}function ge(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return ct;if(!Q(e)){if(t=Rt(e),t)return t;e=[e]}return qs(e)}function Js(){return ba(E)}function Pa(e){var t,a=e._a;return a&&w(e).overflow===-2&&(t=a[ye]<0||a[ye]>11?ye:a[ue]<1||a[ue]>Da(a[z],a[ye])?ue:a[F]<0||a[F]>24||a[F]===24&&(a[te]!==0||a[ve]!==0||a[Ie]!==0)?F:a[te]<0||a[te]>59?te:a[ve]<0||a[ve]>59?ve:a[Ie]<0||a[Ie]>999?Ie:-1,w(e)._overflowDayOfYear&&(t<z||t>ue)&&(t=ue),w(e)._overflowWeeks&&t===-1&&(t=as),w(e)._overflowWeekday&&t===-1&&(t=ns),w(e).overflow=t),e}var Qs=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,eo=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,to=/Z|[+-]\d\d(?::?\d\d)?/,Lt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Aa=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],ao=/^\/?Date\((-?\d+)/i,no=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,ro={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Xn(e){var t,a,n=e._i,r=Qs.exec(n)||eo.exec(n),i,s,o,l,u=Lt.length,c=Aa.length;if(r){for(w(e).iso=!0,t=0,a=u;t<a;t++)if(Lt[t][1].exec(r[1])){s=Lt[t][0],i=Lt[t][2]!==!1;break}if(s==null){e._isValid=!1;return}if(r[3]){for(t=0,a=c;t<a;t++)if(Aa[t][1].exec(r[3])){o=(r[2]||" ")+Aa[t][0];break}if(o==null){e._isValid=!1;return}}if(!i&&o!=null){e._isValid=!1;return}if(r[4])if(to.exec(r[4]))l="Z";else{e._isValid=!1;return}e._f=s+(o||"")+(l||""),Ia(e)}else e._isValid=!1}function io(e,t,a,n,r,i){var s=[so(e),Wn.indexOf(t),parseInt(a,10),parseInt(n,10),parseInt(r,10)];return i&&s.push(parseInt(i,10)),s}function so(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function oo(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function lo(e,t,a){if(e){var n=Bn.indexOf(e),r=new Date(t[0],t[1],t[2]).getDay();if(n!==r)return w(a).weekdayMismatch=!0,a._isValid=!1,!1}return!0}function fo(e,t,a){if(e)return ro[e];if(t)return 0;var n=parseInt(a,10),r=n%100,i=(n-r)/100;return i*60+r}function Kn(e){var t=no.exec(oo(e._i)),a;if(t){if(a=io(t[4],t[3],t[2],t[5],t[6],t[7]),!lo(t[1],a,e))return;e._a=a,e._tzm=fo(t[8],t[9],t[10]),e._d=lt.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),w(e).rfc2822=!0}else e._isValid=!1}function uo(e){var t=ao.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(Xn(e),e._isValid===!1)delete e._isValid;else return;if(Kn(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:m.createFromInputFallback(e)}m.createFromInputFallback=X("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function Ge(e,t,a){return e??t??a}function co(e){var t=new Date(m.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function Ea(e){var t,a,n=[],r,i,s;if(!e._d){for(r=co(e),e._w&&e._a[ue]==null&&e._a[ye]==null&&mo(e),e._dayOfYear!=null&&(s=Ge(e._a[z],r[z]),(e._dayOfYear>st(s)||e._dayOfYear===0)&&(w(e)._overflowDayOfYear=!0),a=lt(s,0,e._dayOfYear),e._a[ye]=a.getUTCMonth(),e._a[ue]=a.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=n[t]=r[t];for(;t<7;t++)e._a[t]=n[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[F]===24&&e._a[te]===0&&e._a[ve]===0&&e._a[Ie]===0&&(e._nextDay=!0,e._a[F]=0),e._d=(e._useUTC?lt:gs).apply(null,n),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[F]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==i&&(w(e).weekdayMismatch=!0)}}function mo(e){var t,a,n,r,i,s,o,l,u;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(i=1,s=4,a=Ge(t.GG,e._a[z],ft(C(),1,4).year),n=Ge(t.W,1),r=Ge(t.E,1),(r<1||r>7)&&(l=!0)):(i=e._locale._week.dow,s=e._locale._week.doy,u=ft(C(),i,s),a=Ge(t.gg,e._a[z],u.year),n=Ge(t.w,u.week),t.d!=null?(r=t.d,(r<0||r>6)&&(l=!0)):t.e!=null?(r=t.e+i,(t.e<0||t.e>6)&&(l=!0)):r=i),n<1||n>pe(a,i,s)?w(e)._overflowWeeks=!0:l!=null?w(e)._overflowWeekday=!0:(o=Vn(a,n,r,i,s),e._a[z]=o.year,e._dayOfYear=o.dayOfYear)}m.ISO_8601=function(){},m.RFC_2822=function(){};function Ia(e){if(e._f===m.ISO_8601){Xn(e);return}if(e._f===m.RFC_2822){Kn(e);return}e._a=[],w(e).empty=!0;var t=""+e._i,a,n,r,i,s,o=t.length,l=0,u,c;for(r=Cn(e._f,e._locale).match(_a)||[],c=r.length,a=0;a<c;a++)i=r[a],n=(t.match(Qi(i,e))||[])[0],n&&(s=t.substr(0,t.indexOf(n)),s.length>0&&w(e).unusedInput.push(s),t=t.slice(t.indexOf(n)+n.length),l+=n.length),ze[i]?(n?w(e).empty=!1:w(e).unusedTokens.push(i),ts(i,n,e)):e._strict&&!n&&w(e).unusedTokens.push(i);w(e).charsLeftOver=o-l,t.length>0&&w(e).unusedInput.push(t),e._a[F]<=12&&w(e).bigHour===!0&&e._a[F]>0&&(w(e).bigHour=void 0),w(e).parsedDateParts=e._a.slice(0),w(e).meridiem=e._meridiem,e._a[F]=ho(e._locale,e._a[F],e._meridiem),u=w(e).era,u!==null&&(e._a[z]=e._locale.erasConvertYear(u,e._a[z])),Ea(e),Pa(e)}function ho(e,t,a){var n;return a==null?t:e.meridiemHour!=null?e.meridiemHour(t,a):(e.isPM!=null&&(n=e.isPM(a),n&&t<12&&(t+=12),!n&&t===12&&(t=0)),t)}function yo(e){var t,a,n,r,i,s,o=!1,l=e._f.length;if(l===0){w(e).invalidFormat=!0,e._d=new Date(NaN);return}for(r=0;r<l;r++)i=0,s=!1,t=va({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[r],Ia(t),ha(t)&&(s=!0),i+=w(t).charsLeftOver,i+=w(t).unusedTokens.length*10,w(t).score=i,o?i<n&&(n=i,a=t):(n==null||i<n||s)&&(n=i,a=t,s&&(o=!0));Oe(e,a||t)}function vo(e){if(!e._d){var t=wa(e._i),a=t.day===void 0?t.date:t.day;e._a=On([t.year,t.month,a,t.hour,t.minute,t.second,t.millisecond],function(n){return n&&parseInt(n,10)}),Ea(e)}}function po(e){var t=new nt(Pa(Jn(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function Jn(e){var t=e._i,a=e._f;return e._locale=e._locale||ge(e._l),t===null||a===void 0&&t===""?Mt({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),ee(t)?new nt(Pa(t)):(at(t)?e._d=t:Q(a)?yo(e):a?Ia(e):go(e),ha(e)||(e._d=null),e))}function go(e){var t=e._i;B(t)?e._d=new Date(m.now()):at(t)?e._d=new Date(t.valueOf()):typeof t=="string"?uo(e):Q(t)?(e._a=On(t.slice(0),function(a){return parseInt(a,10)}),Ea(e)):Ee(t)?vo(e):me(t)?e._d=new Date(t):m.createFromInputFallback(e)}function Qn(e,t,a,n,r){var i={};return(t===!0||t===!1)&&(n=t,t=void 0),(a===!0||a===!1)&&(n=a,a=void 0),(Ee(e)&&da(e)||Q(e)&&e.length===0)&&(e=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=r,i._l=a,i._i=e,i._f=t,i._strict=n,po(i)}function C(e,t,a,n){return Qn(e,t,a,n,!1)}var bo=X("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=C.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Mt()}),_o=X("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=C.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Mt()});function er(e,t){var a,n;if(t.length===1&&Q(t[0])&&(t=t[0]),!t.length)return C();for(a=t[0],n=1;n<t.length;++n)(!t[n].isValid()||t[n][e](a))&&(a=t[n]);return a}function ko(){var e=[].slice.call(arguments,0);return er("isBefore",e)}function wo(){var e=[].slice.call(arguments,0);return er("isAfter",e)}var So=function(){return Date.now?Date.now():+new Date},dt=["year","quarter","month","week","day","hour","minute","second","millisecond"];function xo(e){var t,a=!1,n,r=dt.length;for(t in e)if(M(e,t)&&!(R.call(dt,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(n=0;n<r;++n)if(e[dt[n]]){if(a)return!1;parseFloat(e[dt[n]])!==S(e[dt[n]])&&(a=!0)}return!0}function Mo(){return this._isValid}function Oo(){return ae(NaN)}function Ft(e){var t=wa(e),a=t.year||0,n=t.quarter||0,r=t.month||0,i=t.week||t.isoWeek||0,s=t.day||0,o=t.hour||0,l=t.minute||0,u=t.second||0,c=t.millisecond||0;this._isValid=xo(t),this._milliseconds=+c+u*1e3+l*6e4+o*1e3*60*60,this._days=+s+i*7,this._months=+r+n*3+a*12,this._data={},this._locale=ge(),this._bubble()}function Wt(e){return e instanceof Ft}function Ra(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function Do(e,t,a){var n=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),i=0,s;for(s=0;s<n;s++)S(e[s])!==S(t[s])&&i++;return i+r}function tr(e,t){g(e,0,0,function(){var a=this.utcOffset(),n="+";return a<0&&(a=-a,n="-"),n+fe(~~(a/60),2)+t+fe(~~a%60,2)})}tr("Z",":"),tr("ZZ",""),y("Z",Pt),y("ZZ",Pt),Y(["Z","ZZ"],function(e,t,a){a._useUTC=!0,a._tzm=La(Pt,e)});var Yo=/([\+\-]|\d\d)/gi;function La(e,t){var a=(t||"").match(e),n,r,i;return a===null?null:(n=a[a.length-1]||[],r=(n+"").match(Yo)||["-",0,0],i=+(r[1]*60)+S(r[2]),i===0?0:r[0]==="+"?i:-i)}function Fa(e,t){var a,n;return t._isUTC?(a=t.clone(),n=(ee(e)||at(e)?e.valueOf():C(e).valueOf())-a.valueOf(),a._d.setTime(a._d.valueOf()+n),m.updateOffset(a,!1),a):C(e).local()}function Wa(e){return-Math.round(e._d.getTimezoneOffset())}m.updateOffset=function(){};function No(e,t,a){var n=this._offset||0,r;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=La(Pt,e),e===null)return this}else Math.abs(e)<16&&!a&&(e=e*60);return!this._isUTC&&t&&(r=Wa(this)),this._offset=e,this._isUTC=!0,r!=null&&this.add(r,"m"),n!==e&&(!t||this._changeInProgress?ir(this,ae(e-n,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,m.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?n:Wa(this)}function To(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function Co(e){return this.utcOffset(0,e)}function Po(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Wa(this),"m")),this}function Ao(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=La(Ki,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Eo(e){return this.isValid()?(e=e?C(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Io(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ro(){if(!B(this._isDSTShifted))return this._isDSTShifted;var e={},t;return va(e,this),e=Jn(e),e._a?(t=e._isUTC?oe(e._a):C(e._a),this._isDSTShifted=this.isValid()&&Do(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Lo(){return this.isValid()?!this._isUTC:!1}function Fo(){return this.isValid()?this._isUTC:!1}function ar(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Wo=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Uo=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function ae(e,t){var a=e,n=null,r,i,s;return Wt(e)?a={ms:e._milliseconds,d:e._days,M:e._months}:me(e)||!isNaN(+e)?(a={},t?a[t]=+e:a.milliseconds=+e):(n=Wo.exec(e))?(r=n[1]==="-"?-1:1,a={y:0,d:S(n[ue])*r,h:S(n[F])*r,m:S(n[te])*r,s:S(n[ve])*r,ms:S(Ra(n[Ie]*1e3))*r}):(n=Uo.exec(e))?(r=n[1]==="-"?-1:1,a={y:Re(n[2],r),M:Re(n[3],r),w:Re(n[4],r),d:Re(n[5],r),h:Re(n[6],r),m:Re(n[7],r),s:Re(n[8],r)}):a==null?a={}:typeof a=="object"&&("from"in a||"to"in a)&&(s=jo(C(a.from),C(a.to)),a={},a.ms=s.milliseconds,a.M=s.months),i=new Ft(a),Wt(e)&&M(e,"_locale")&&(i._locale=e._locale),Wt(e)&&M(e,"_isValid")&&(i._isValid=e._isValid),i}ae.fn=Ft.prototype,ae.invalid=Oo;function Re(e,t){var a=e&&parseFloat(e.replace(",","."));return(isNaN(a)?0:a)*t}function nr(e,t){var a={};return a.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(a.months,"M").isAfter(t)&&--a.months,a.milliseconds=+t-+e.clone().add(a.months,"M"),a}function jo(e,t){var a;return e.isValid()&&t.isValid()?(t=Fa(t,e),e.isBefore(t)?a=nr(e,t):(a=nr(t,e),a.milliseconds=-a.milliseconds,a.months=-a.months),a):{milliseconds:0,months:0}}function rr(e,t){return function(a,n){var r,i;return n!==null&&!isNaN(+n)&&(Tn(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),i=a,a=n,n=i),r=ae(a,n),ir(this,r,e),this}}function ir(e,t,a,n){var r=t._milliseconds,i=Ra(t._days),s=Ra(t._months);e.isValid()&&(n=n??!0,s&&jn(e,ot(e,"Month")+s*a),i&&Fn(e,"Date",ot(e,"Date")+i*a),r&&e._d.setTime(e._d.valueOf()+r*a),n&&m.updateOffset(e,i||s))}var zo=rr(1,"add"),Ho=rr(-1,"subtract");function sr(e){return typeof e=="string"||e instanceof String}function Vo(e){return ee(e)||at(e)||sr(e)||me(e)||Go(e)||Bo(e)||e===null||e===void 0}function Bo(e){var t=Ee(e)&&!da(e),a=!1,n=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],r,i,s=n.length;for(r=0;r<s;r+=1)i=n[r],a=a||M(e,i);return t&&a}function Go(e){var t=Q(e),a=!1;return t&&(a=e.filter(function(n){return!me(n)&&sr(e)}).length===0),t&&a}function $o(e){var t=Ee(e)&&!da(e),a=!1,n=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],r,i;for(r=0;r<n.length;r+=1)i=n[r],a=a||M(e,i);return t&&a}function Zo(e,t){var a=e.diff(t,"days",!0);return a<-6?"sameElse":a<-1?"lastWeek":a<0?"lastDay":a<1?"sameDay":a<2?"nextDay":a<7?"nextWeek":"sameElse"}function qo(e,t){arguments.length===1&&(arguments[0]?Vo(arguments[0])?(e=arguments[0],t=void 0):$o(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var a=e||C(),n=Fa(a,this).startOf("day"),r=m.calendarFormat(this,n)||"sameElse",i=t&&(le(t[r])?t[r].call(this,a):t[r]);return this.format(i||this.localeData().calendar(r,this,C(a)))}function Xo(){return new nt(this)}function Ko(e,t){var a=ee(e)?e:C(e);return this.isValid()&&a.isValid()?(t=K(t)||"millisecond",t==="millisecond"?this.valueOf()>a.valueOf():a.valueOf()<this.clone().startOf(t).valueOf()):!1}function Jo(e,t){var a=ee(e)?e:C(e);return this.isValid()&&a.isValid()?(t=K(t)||"millisecond",t==="millisecond"?this.valueOf()<a.valueOf():this.clone().endOf(t).valueOf()<a.valueOf()):!1}function Qo(e,t,a,n){var r=ee(e)?e:C(e),i=ee(t)?t:C(t);return this.isValid()&&r.isValid()&&i.isValid()?(n=n||"()",(n[0]==="("?this.isAfter(r,a):!this.isBefore(r,a))&&(n[1]===")"?this.isBefore(i,a):!this.isAfter(i,a))):!1}function el(e,t){var a=ee(e)?e:C(e),n;return this.isValid()&&a.isValid()?(t=K(t)||"millisecond",t==="millisecond"?this.valueOf()===a.valueOf():(n=a.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf())):!1}function tl(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function al(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function nl(e,t,a){var n,r,i;if(!this.isValid())return NaN;if(n=Fa(e,this),!n.isValid())return NaN;switch(r=(n.utcOffset()-this.utcOffset())*6e4,t=K(t),t){case"year":i=Ut(this,n)/12;break;case"month":i=Ut(this,n);break;case"quarter":i=Ut(this,n)/3;break;case"second":i=(this-n)/1e3;break;case"minute":i=(this-n)/6e4;break;case"hour":i=(this-n)/36e5;break;case"day":i=(this-n-r)/864e5;break;case"week":i=(this-n-r)/6048e5;break;default:i=this-n}return a?i:J(i)}function Ut(e,t){if(e.date()<t.date())return-Ut(t,e);var a=(t.year()-e.year())*12+(t.month()-e.month()),n=e.clone().add(a,"months"),r,i;return t-n<0?(r=e.clone().add(a-1,"months"),i=(t-n)/(n-r)):(r=e.clone().add(a+1,"months"),i=(t-n)/(r-n)),-(a+i)||0}m.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",m.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function rl(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function il(e){if(!this.isValid())return null;var t=e!==!0,a=t?this.clone().utc():this;return a.year()<0||a.year()>9999?Dt(a,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):le(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Dt(a,"Z")):Dt(a,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function sl(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",a,n,r,i;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),a="["+e+'("]',n=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",r="-MM-DD[T]HH:mm:ss.SSS",i=t+'[")]',this.format(a+n+r+i)}function ol(e){e||(e=this.isUtc()?m.defaultFormatUtc:m.defaultFormat);var t=Dt(this,e);return this.localeData().postformat(t)}function ll(e,t){return this.isValid()&&(ee(e)&&e.isValid()||C(e).isValid())?ae({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function fl(e){return this.from(C(),e)}function ul(e,t){return this.isValid()&&(ee(e)&&e.isValid()||C(e).isValid())?ae({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function cl(e){return this.to(C(),e)}function or(e){var t;return e===void 0?this._locale._abbr:(t=ge(e),t!=null&&(this._locale=t),this)}var lr=X("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function fr(){return this._locale}var jt=1e3,$e=60*jt,zt=60*$e,ur=(365*400+97)*24*zt;function Ze(e,t){return(e%t+t)%t}function cr(e,t,a){return e<100&&e>=0?new Date(e+400,t,a)-ur:new Date(e,t,a).valueOf()}function dr(e,t,a){return e<100&&e>=0?Date.UTC(e+400,t,a)-ur:Date.UTC(e,t,a)}function dl(e){var t,a;if(e=K(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(a=this._isUTC?dr:cr,e){case"year":t=a(this.year(),0,1);break;case"quarter":t=a(this.year(),this.month()-this.month()%3,1);break;case"month":t=a(this.year(),this.month(),1);break;case"week":t=a(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=a(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=a(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=Ze(t+(this._isUTC?0:this.utcOffset()*$e),zt);break;case"minute":t=this._d.valueOf(),t-=Ze(t,$e);break;case"second":t=this._d.valueOf(),t-=Ze(t,jt);break}return this._d.setTime(t),m.updateOffset(this,!0),this}function ml(e){var t,a;if(e=K(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(a=this._isUTC?dr:cr,e){case"year":t=a(this.year()+1,0,1)-1;break;case"quarter":t=a(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=a(this.year(),this.month()+1,1)-1;break;case"week":t=a(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=a(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=a(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=zt-Ze(t+(this._isUTC?0:this.utcOffset()*$e),zt)-1;break;case"minute":t=this._d.valueOf(),t+=$e-Ze(t,$e)-1;break;case"second":t=this._d.valueOf(),t+=jt-Ze(t,jt)-1;break}return this._d.setTime(t),m.updateOffset(this,!0),this}function hl(){return this._d.valueOf()-(this._offset||0)*6e4}function yl(){return Math.floor(this.valueOf()/1e3)}function vl(){return new Date(this.valueOf())}function pl(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function gl(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function bl(){return this.isValid()?this.toISOString():null}function _l(){return ha(this)}function kl(){return Oe({},w(this))}function wl(){return w(this).overflow}function Sl(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}g("N",0,0,"eraAbbr"),g("NN",0,0,"eraAbbr"),g("NNN",0,0,"eraAbbr"),g("NNNN",0,0,"eraName"),g("NNNNN",0,0,"eraNarrow"),g("y",["y",1],"yo","eraYear"),g("y",["yy",2],0,"eraYear"),g("y",["yyy",3],0,"eraYear"),g("y",["yyyy",4],0,"eraYear"),y("N",Ua),y("NN",Ua),y("NNN",Ua),y("NNNN",El),y("NNNNN",Il),Y(["N","NN","NNN","NNNN","NNNNN"],function(e,t,a,n){var r=a._locale.erasParse(e,n,a._strict);r?w(a).era=r:w(a).invalidEra=e}),y("y",He),y("yy",He),y("yyy",He),y("yyyy",He),y("yo",Rl),Y(["y","yy","yyy","yyyy"],z),Y(["yo"],function(e,t,a,n){var r;a._locale._eraYearOrdinalRegex&&(r=e.match(a._locale._eraYearOrdinalRegex)),a._locale.eraYearOrdinalParse?t[z]=a._locale.eraYearOrdinalParse(e,r):t[z]=parseInt(e,10)});function xl(e,t){var a,n,r,i=this._eras||ge("en")._eras;for(a=0,n=i.length;a<n;++a){switch(typeof i[a].since){case"string":r=m(i[a].since).startOf("day"),i[a].since=r.valueOf();break}switch(typeof i[a].until){case"undefined":i[a].until=1/0;break;case"string":r=m(i[a].until).startOf("day").valueOf(),i[a].until=r.valueOf();break}}return i}function Ml(e,t,a){var n,r,i=this.eras(),s,o,l;for(e=e.toUpperCase(),n=0,r=i.length;n<r;++n)if(s=i[n].name.toUpperCase(),o=i[n].abbr.toUpperCase(),l=i[n].narrow.toUpperCase(),a)switch(t){case"N":case"NN":case"NNN":if(o===e)return i[n];break;case"NNNN":if(s===e)return i[n];break;case"NNNNN":if(l===e)return i[n];break}else if([s,o,l].indexOf(e)>=0)return i[n]}function Ol(e,t){var a=e.since<=e.until?1:-1;return t===void 0?m(e.since).year():m(e.since).year()+(t-e.offset)*a}function Dl(){var e,t,a,n=this.localeData().eras();for(e=0,t=n.length;e<t;++e)if(a=this.clone().startOf("day").valueOf(),n[e].since<=a&&a<=n[e].until||n[e].until<=a&&a<=n[e].since)return n[e].name;return""}function Yl(){var e,t,a,n=this.localeData().eras();for(e=0,t=n.length;e<t;++e)if(a=this.clone().startOf("day").valueOf(),n[e].since<=a&&a<=n[e].until||n[e].until<=a&&a<=n[e].since)return n[e].narrow;return""}function Nl(){var e,t,a,n=this.localeData().eras();for(e=0,t=n.length;e<t;++e)if(a=this.clone().startOf("day").valueOf(),n[e].since<=a&&a<=n[e].until||n[e].until<=a&&a<=n[e].since)return n[e].abbr;return""}function Tl(){var e,t,a,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(a=r[e].since<=r[e].until?1:-1,n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return(this.year()-m(r[e].since).year())*a+r[e].offset;return this.year()}function Cl(e){return M(this,"_erasNameRegex")||ja.call(this),e?this._erasNameRegex:this._erasRegex}function Pl(e){return M(this,"_erasAbbrRegex")||ja.call(this),e?this._erasAbbrRegex:this._erasRegex}function Al(e){return M(this,"_erasNarrowRegex")||ja.call(this),e?this._erasNarrowRegex:this._erasRegex}function Ua(e,t){return t.erasAbbrRegex(e)}function El(e,t){return t.erasNameRegex(e)}function Il(e,t){return t.erasNarrowRegex(e)}function Rl(e,t){return t._eraYearOrdinalRegex||He}function ja(){var e=[],t=[],a=[],n=[],r,i,s,o,l,u=this.eras();for(r=0,i=u.length;r<i;++r)s=he(u[r].name),o=he(u[r].abbr),l=he(u[r].narrow),t.push(s),e.push(o),a.push(l),n.push(s),n.push(o),n.push(l);this._erasRegex=new RegExp("^("+n.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+a.join("|")+")","i")}g(0,["gg",2],0,function(){return this.weekYear()%100}),g(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Ht(e,t){g(0,[e,e.length],0,t)}Ht("gggg","weekYear"),Ht("ggggg","weekYear"),Ht("GGGG","isoWeekYear"),Ht("GGGGG","isoWeekYear"),y("G",Ct),y("g",Ct),y("GG",T,Z),y("gg",T,Z),y("GGGG",xa,Sa),y("gggg",xa,Sa),y("GGGGG",Tt,Yt),y("ggggg",Tt,Yt),it(["gggg","ggggg","GGGG","GGGGG"],function(e,t,a,n){t[n.substr(0,2)]=S(e)}),it(["gg","GG"],function(e,t,a,n){t[n]=m.parseTwoDigitYear(e)});function Ll(e){return mr.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function Fl(e){return mr.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Wl(){return pe(this.year(),1,4)}function Ul(){return pe(this.isoWeekYear(),1,4)}function jl(){var e=this.localeData()._week;return pe(this.year(),e.dow,e.doy)}function zl(){var e=this.localeData()._week;return pe(this.weekYear(),e.dow,e.doy)}function mr(e,t,a,n,r){var i;return e==null?ft(this,n,r).year:(i=pe(e,n,r),t>i&&(t=i),Hl.call(this,e,t,a,n,r))}function Hl(e,t,a,n,r){var i=Vn(e,t,a,n,r),s=lt(i.year,0,i.dayOfYear);return this.year(s.getUTCFullYear()),this.month(s.getUTCMonth()),this.date(s.getUTCDate()),this}g("Q",0,"Qo","quarter"),y("Q",An),Y("Q",function(e,t){t[ye]=(S(e)-1)*3});function Vl(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}g("D",["DD",2],"Do","date"),y("D",T,Ve),y("DD",T,Z),y("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),Y(["D","DD"],ue),Y("Do",function(e,t){t[ue]=S(e.match(T)[0])});var hr=Be("Date",!0);g("DDD",["DDDD",3],"DDDo","dayOfYear"),y("DDD",Nt),y("DDDD",En),Y(["DDD","DDDD"],function(e,t,a){a._dayOfYear=S(e)});function Bl(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}g("m",["mm",2],0,"minute"),y("m",T,Ma),y("mm",T,Z),Y(["m","mm"],te);var Gl=Be("Minutes",!1);g("s",["ss",2],0,"second"),y("s",T,Ma),y("ss",T,Z),Y(["s","ss"],ve);var $l=Be("Seconds",!1);g("S",0,0,function(){return~~(this.millisecond()/100)}),g(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),g(0,["SSS",3],0,"millisecond"),g(0,["SSSS",4],0,function(){return this.millisecond()*10}),g(0,["SSSSS",5],0,function(){return this.millisecond()*100}),g(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3}),g(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4}),g(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5}),g(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6}),y("S",Nt,An),y("SS",Nt,Z),y("SSS",Nt,En);var Ye,yr;for(Ye="SSSS";Ye.length<=9;Ye+="S")y(Ye,He);function Zl(e,t){t[Ie]=S(("0."+e)*1e3)}for(Ye="S";Ye.length<=9;Ye+="S")Y(Ye,Zl);yr=Be("Milliseconds",!1),g("z",0,0,"zoneAbbr"),g("zz",0,0,"zoneName");function ql(){return this._isUTC?"UTC":""}function Xl(){return this._isUTC?"Coordinated Universal Time":""}var d=nt.prototype;d.add=zo,d.calendar=qo,d.clone=Xo,d.diff=nl,d.endOf=ml,d.format=ol,d.from=ll,d.fromNow=fl,d.to=ul,d.toNow=cl,d.get=is,d.invalidAt=wl,d.isAfter=Ko,d.isBefore=Jo,d.isBetween=Qo,d.isSame=el,d.isSameOrAfter=tl,d.isSameOrBefore=al,d.isValid=_l,d.lang=lr,d.locale=or,d.localeData=fr,d.max=_o,d.min=bo,d.parsingFlags=kl,d.set=ss,d.startOf=dl,d.subtract=Ho,d.toArray=pl,d.toObject=gl,d.toDate=vl,d.toISOString=il,d.inspect=sl,typeof Symbol<"u"&&Symbol.for!=null&&(d[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),d.toJSON=bl,d.toString=rl,d.unix=yl,d.valueOf=hl,d.creationData=Sl,d.eraName=Dl,d.eraNarrow=Yl,d.eraAbbr=Nl,d.eraYear=Tl,d.year=Ln,d.isLeapYear=rs,d.weekYear=Ll,d.isoWeekYear=Fl,d.quarter=d.quarters=Vl,d.month=zn,d.daysInMonth=ys,d.week=d.weeks=Ss,d.isoWeek=d.isoWeeks=xs,d.weeksInYear=jl,d.weeksInWeekYear=zl,d.isoWeeksInYear=Wl,d.isoWeeksInISOWeekYear=Ul,d.date=hr,d.day=d.days=Ls,d.weekday=Fs,d.isoWeekday=Ws,d.dayOfYear=Bl,d.hour=d.hours=Gs,d.minute=d.minutes=Gl,d.second=d.seconds=$l,d.millisecond=d.milliseconds=yr,d.utcOffset=No,d.utc=Co,d.local=Po,d.parseZone=Ao,d.hasAlignedHourOffset=Eo,d.isDST=Io,d.isLocal=Lo,d.isUtcOffset=Fo,d.isUtc=ar,d.isUTC=ar,d.zoneAbbr=ql,d.zoneName=Xl,d.dates=X("dates accessor is deprecated. Use date instead.",hr),d.months=X("months accessor is deprecated. Use month instead",zn),d.years=X("years accessor is deprecated. Use year instead",Ln),d.zone=X("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",To),d.isDSTShifted=X("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Ro);function Kl(e){return C(e*1e3)}function Jl(){return C.apply(null,arguments).parseZone()}function vr(e){return e}var O=ga.prototype;O.calendar=Ri,O.longDateFormat=Ui,O.invalidDate=zi,O.ordinal=Bi,O.preparse=vr,O.postformat=vr,O.relativeTime=$i,O.pastFuture=Zi,O.set=Ei,O.eras=xl,O.erasParse=Ml,O.erasConvertYear=Ol,O.erasAbbrRegex=Pl,O.erasNameRegex=Cl,O.erasNarrowRegex=Al,O.months=cs,O.monthsShort=ds,O.monthsParse=hs,O.monthsRegex=ps,O.monthsShortRegex=vs,O.week=bs,O.firstDayOfYear=ws,O.firstDayOfWeek=ks,O.weekdays=Ps,O.weekdaysMin=Es,O.weekdaysShort=As,O.weekdaysParse=Rs,O.weekdaysRegex=Us,O.weekdaysShortRegex=js,O.weekdaysMinRegex=zs,O.isPM=Vs,O.meridiem=$s;function Vt(e,t,a,n){var r=ge(),i=oe().set(n,t);return r[a](i,e)}function pr(e,t,a){if(me(e)&&(t=e,e=void 0),e=e||"",t!=null)return Vt(e,t,a,"month");var n,r=[];for(n=0;n<12;n++)r[n]=Vt(e,n,a,"month");return r}function za(e,t,a,n){typeof e=="boolean"?(me(t)&&(a=t,t=void 0),t=t||""):(t=e,a=t,e=!1,me(t)&&(a=t,t=void 0),t=t||"");var r=ge(),i=e?r._week.dow:0,s,o=[];if(a!=null)return Vt(t,(a+i)%7,n,"day");for(s=0;s<7;s++)o[s]=Vt(t,(s+i)%7,n,"day");return o}function Ql(e,t){return pr(e,t,"months")}function ef(e,t){return pr(e,t,"monthsShort")}function tf(e,t,a){return za(e,t,a,"weekdays")}function af(e,t,a){return za(e,t,a,"weekdaysShort")}function nf(e,t,a){return za(e,t,a,"weekdaysMin")}De("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,a=S(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+a}}),m.lang=X("moment.lang is deprecated. Use moment.locale instead.",De),m.langData=X("moment.langData is deprecated. Use moment.localeData instead.",ge);var be=Math.abs;function rf(){var e=this._data;return this._milliseconds=be(this._milliseconds),this._days=be(this._days),this._months=be(this._months),e.milliseconds=be(e.milliseconds),e.seconds=be(e.seconds),e.minutes=be(e.minutes),e.hours=be(e.hours),e.months=be(e.months),e.years=be(e.years),this}function gr(e,t,a,n){var r=ae(t,a);return e._milliseconds+=n*r._milliseconds,e._days+=n*r._days,e._months+=n*r._months,e._bubble()}function sf(e,t){return gr(this,e,t,1)}function of(e,t){return gr(this,e,t,-1)}function br(e){return e<0?Math.floor(e):Math.ceil(e)}function lf(){var e=this._milliseconds,t=this._days,a=this._months,n=this._data,r,i,s,o,l;return e>=0&&t>=0&&a>=0||e<=0&&t<=0&&a<=0||(e+=br(Ha(a)+t)*864e5,t=0,a=0),n.milliseconds=e%1e3,r=J(e/1e3),n.seconds=r%60,i=J(r/60),n.minutes=i%60,s=J(i/60),n.hours=s%24,t+=J(s/24),l=J(_r(t)),a+=l,t-=br(Ha(l)),o=J(a/12),a%=12,n.days=t,n.months=a,n.years=o,this}function _r(e){return e*4800/146097}function Ha(e){return e*146097/4800}function ff(e){if(!this.isValid())return NaN;var t,a,n=this._milliseconds;if(e=K(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+n/864e5,a=this._months+_r(t),e){case"month":return a;case"quarter":return a/3;case"year":return a/12}else switch(t=this._days+Math.round(Ha(this._months)),e){case"week":return t/7+n/6048e5;case"day":return t+n/864e5;case"hour":return t*24+n/36e5;case"minute":return t*1440+n/6e4;case"second":return t*86400+n/1e3;case"millisecond":return Math.floor(t*864e5)+n;default:throw new Error("Unknown unit "+e)}}function _e(e){return function(){return this.as(e)}}var kr=_e("ms"),uf=_e("s"),cf=_e("m"),df=_e("h"),mf=_e("d"),hf=_e("w"),yf=_e("M"),vf=_e("Q"),pf=_e("y"),gf=kr;function bf(){return ae(this)}function _f(e){return e=K(e),this.isValid()?this[e+"s"]():NaN}function Le(e){return function(){return this.isValid()?this._data[e]:NaN}}var kf=Le("milliseconds"),wf=Le("seconds"),Sf=Le("minutes"),xf=Le("hours"),Mf=Le("days"),Of=Le("months"),Df=Le("years");function Yf(){return J(this.days()/7)}var ke=Math.round,qe={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function Nf(e,t,a,n,r){return r.relativeTime(t||1,!!a,e,n)}function Tf(e,t,a,n){var r=ae(e).abs(),i=ke(r.as("s")),s=ke(r.as("m")),o=ke(r.as("h")),l=ke(r.as("d")),u=ke(r.as("M")),c=ke(r.as("w")),h=ke(r.as("y")),k=i<=a.ss&&["s",i]||i<a.s&&["ss",i]||s<=1&&["m"]||s<a.m&&["mm",s]||o<=1&&["h"]||o<a.h&&["hh",o]||l<=1&&["d"]||l<a.d&&["dd",l];return a.w!=null&&(k=k||c<=1&&["w"]||c<a.w&&["ww",c]),k=k||u<=1&&["M"]||u<a.M&&["MM",u]||h<=1&&["y"]||["yy",h],k[2]=t,k[3]=+e>0,k[4]=n,Nf.apply(null,k)}function Cf(e){return e===void 0?ke:typeof e=="function"?(ke=e,!0):!1}function Pf(e,t){return qe[e]===void 0?!1:t===void 0?qe[e]:(qe[e]=t,e==="s"&&(qe.ss=t-1),!0)}function Af(e,t){if(!this.isValid())return this.localeData().invalidDate();var a=!1,n=qe,r,i;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(a=e),typeof t=="object"&&(n=Object.assign({},qe,t),t.s!=null&&t.ss==null&&(n.ss=t.s-1)),r=this.localeData(),i=Tf(this,!a,n,r),a&&(i=r.pastFuture(+this,i)),r.postformat(i)}var Va=Math.abs;function Xe(e){return(e>0)-(e<0)||+e}function Bt(){if(!this.isValid())return this.localeData().invalidDate();var e=Va(this._milliseconds)/1e3,t=Va(this._days),a=Va(this._months),n,r,i,s,o=this.asSeconds(),l,u,c,h;return o?(n=J(e/60),r=J(n/60),e%=60,n%=60,i=J(a/12),a%=12,s=e?e.toFixed(3).replace(/\.?0+$/,""):"",l=o<0?"-":"",u=Xe(this._months)!==Xe(o)?"-":"",c=Xe(this._days)!==Xe(o)?"-":"",h=Xe(this._milliseconds)!==Xe(o)?"-":"",l+"P"+(i?u+i+"Y":"")+(a?u+a+"M":"")+(t?c+t+"D":"")+(r||n||e?"T":"")+(r?h+r+"H":"")+(n?h+n+"M":"")+(e?h+s+"S":"")):"P0D"}var x=Ft.prototype;x.isValid=Mo,x.abs=rf,x.add=sf,x.subtract=of,x.as=ff,x.asMilliseconds=kr,x.asSeconds=uf,x.asMinutes=cf,x.asHours=df,x.asDays=mf,x.asWeeks=hf,x.asMonths=yf,x.asQuarters=vf,x.asYears=pf,x.valueOf=gf,x._bubble=lf,x.clone=bf,x.get=_f,x.milliseconds=kf,x.seconds=wf,x.minutes=Sf,x.hours=xf,x.days=Mf,x.weeks=Yf,x.months=Of,x.years=Df,x.humanize=Af,x.toISOString=Bt,x.toString=Bt,x.toJSON=Bt,x.locale=or,x.localeData=fr,x.toIsoString=X("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Bt),x.lang=lr,g("X",0,0,"unix"),g("x",0,0,"valueOf"),y("x",Ct),y("X",Ji),Y("X",function(e,t,a){a._d=new Date(parseFloat(e)*1e3)}),Y("x",function(e,t,a){a._d=new Date(S(e))});//! moment.js
m.version="2.30.1",Pi(C),m.fn=d,m.min=ko,m.max=wo,m.now=So,m.utc=oe,m.unix=Kl,m.months=Ql,m.isDate=at,m.locale=De,m.invalid=Mt,m.duration=ae,m.isMoment=ee,m.weekdays=tf,m.parseZone=Jl,m.localeData=ge,m.isDuration=Wt,m.monthsShort=ef,m.weekdaysMin=nf,m.defineLocale=Ca,m.updateLocale=Ks,m.locales=Js,m.weekdaysShort=af,m.normalizeUnits=K,m.relativeTimeRounding=Cf,m.relativeTimeThreshold=Pf,m.calendarFormat=Zo,m.prototype=d,m.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};class wr{constructor(){xn(this,"now",m());xn(this,"locked",null)}with(t){return this.current=t,this}get current(){return this.now.format("YYYYMMDD")}set current(t){this.now=m(t,"YYYYMMDD",!0)}set lockedMonth(t){this.locked=m(t,"YYYYMM",!0)}get lockedMonth(){var t;return(t=this.locked)==null?void 0:t.format("YYYYMM")}get prevMonth(){return this.now.clone().subtract(1,"month")}get nextMonth(){return this.now.clone().add(1,"month")}get prevDay(){return this.now.clone().subtract(1,"day")}get nextDay(){return this.now.clone().add(1,"day")}isInMonth(t){return m(t).isSame(this.locked||this.now,"month")}get firstOfMonth(){return this.locked?this.locked.clone().date(1):this.now.clone().date(1)}get daysInMonth(){let t=this.firstOfMonth.clone();const a=t.clone().add(1,"month").date(1);for(;t.day()>0;)t.subtract(1,"day");const n=[];for(;t.isBefore(a);)n.push(t.clone()),t.add(1,"day");for(;t.day()<6;)n.push(t.clone()),t.add(1,"day");return t.day()==6&&n.push(t.clone()),n}}const Ef={emits:["click-date"],props:{date:{type:[String,Object],required:!0},navigable:{type:Boolean,default:!0}},computed:{eventDate(){return m(this.date).format("YYYYMMDD")},dateClass(){return this.navigable?"clickable":!1}},methods:{handleClick(){this.navigable&&this.$emit("click-date",this.eventDate)}}};function If(e,t,a,n,r,i){return f.openBlock(),f.createElementBlock("span",{onClick:t[0]||(t[0]=(...s)=>i.handleClick&&i.handleClick(...s)),class:f.normalizeClass(i.dateClass)},[f.renderSlot(e.$slots,"default",{},void 0,!0)],2)}const Sr=se(Ef,[["render",If],["__scopeId","data-v-beb03b82"]]);function xr(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?xr(Object(a),!0).forEach(function(n){W(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):xr(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function Gt(e){"@babel/helpers - typeof";return Gt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Gt(e)}function Rf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Lf(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ff(e,t,a){return t&&Lf(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function W(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Ba(e,t){return Uf(e)||zf(e,t)||Mr(e,t)||Vf()}function mt(e){return Wf(e)||jf(e)||Mr(e)||Hf()}function Wf(e){if(Array.isArray(e))return Ga(e)}function Uf(e){if(Array.isArray(e))return e}function jf(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function zf(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var n=[],r=!0,i=!1,s,o;try{for(a=a.call(e);!(r=(s=a.next()).done)&&(n.push(s.value),!(t&&n.length===t));r=!0);}catch(l){i=!0,o=l}finally{try{!r&&a.return!=null&&a.return()}finally{if(i)throw o}}return n}}function Mr(e,t){if(e){if(typeof e=="string")return Ga(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Ga(e,t)}}function Ga(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function Hf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Or=function(){},$a={},Dr={},Yr=null,Nr={mark:Or,measure:Or};try{typeof window<"u"&&($a=window),typeof document<"u"&&(Dr=document),typeof MutationObserver<"u"&&(Yr=MutationObserver),typeof performance<"u"&&(Nr=performance)}catch{}var Bf=$a.navigator||{},Tr=Bf.userAgent,Cr=Tr===void 0?"":Tr,Ne=$a,P=Dr,Pr=Yr,$t=Nr;Ne.document;var we=!!P.documentElement&&!!P.head&&typeof P.addEventListener=="function"&&typeof P.createElement=="function",Ar=~Cr.indexOf("MSIE")||~Cr.indexOf("Trident/"),Zt,qt,Xt,Kt,Jt,Se="___FONT_AWESOME___",Za=16,Er="fa",Ir="svg-inline--fa",Fe="data-fa-i2svg",qa="data-fa-pseudo-element",Gf="data-fa-pseudo-element-pending",Xa="data-prefix",Ka="data-icon",Rr="fontawesome-i2svg",$f="async",Zf=["HTML","HEAD","STYLE","SCRIPT"],Lr=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),A="classic",I="sharp",Ja=[A,I];function ht(e){return new Proxy(e,{get:function(a,n){return n in a?a[n]:a[A]}})}var yt=ht((Zt={},W(Zt,A,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),W(Zt,I,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Zt)),vt=ht((qt={},W(qt,A,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),W(qt,I,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),qt)),pt=ht((Xt={},W(Xt,A,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),W(Xt,I,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Xt)),qf=ht((Kt={},W(Kt,A,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),W(Kt,I,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Kt)),Xf=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Fr="fa-layers-text",Kf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Jf=ht((Jt={},W(Jt,A,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),W(Jt,I,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Jt)),Wr=[1,2,3,4,5,6,7,8,9,10],Qf=Wr.concat([11,12,13,14,15,16,17,18,19,20]),eu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],We={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},gt=new Set;Object.keys(vt[A]).map(gt.add.bind(gt)),Object.keys(vt[I]).map(gt.add.bind(gt));var tu=[].concat(Ja,mt(gt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",We.GROUP,We.SWAP_OPACITY,We.PRIMARY,We.SECONDARY]).concat(Wr.map(function(e){return"".concat(e,"x")})).concat(Qf.map(function(e){return"w-".concat(e)})),bt=Ne.FontAwesomeConfig||{};function au(e){var t=P.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function nu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(P&&typeof P.querySelector=="function"){var ru=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ru.forEach(function(e){var t=Ba(e,2),a=t[0],n=t[1],r=nu(au(a));r!=null&&(bt[n]=r)})}var Ur={styleDefault:"solid",familyDefault:"classic",cssPrefix:Er,replacementClass:Ir,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};bt.familyPrefix&&(bt.cssPrefix=bt.familyPrefix);var Ke=v(v({},Ur),bt);Ke.autoReplaceSvg||(Ke.observeMutations=!1);var p={};Object.keys(Ur).forEach(function(e){Object.defineProperty(p,e,{enumerable:!0,set:function(a){Ke[e]=a,_t.forEach(function(n){return n(p)})},get:function(){return Ke[e]}})}),Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(t){Ke.cssPrefix=t,_t.forEach(function(a){return a(p)})},get:function(){return Ke.cssPrefix}}),Ne.FontAwesomeConfig=p;var _t=[];function iu(e){return _t.push(e),function(){_t.splice(_t.indexOf(e),1)}}var Te=Za,ce={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function su(e){if(!(!e||!we)){var t=P.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=P.head.childNodes,n=null,r=a.length-1;r>-1;r--){var i=a[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(n=i)}return P.head.insertBefore(t,n),e}}var ou="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function kt(){for(var e=12,t="";e-- >0;)t+=ou[Math.random()*62|0];return t}function Je(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function Qa(e){return e.classList?Je(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function jr(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function lu(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(jr(e[a]),'" ')},"").trim()}function Qt(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function en(e){return e.size!==ce.size||e.x!==ce.x||e.y!==ce.y||e.rotate!==ce.rotate||e.flipX||e.flipY}function fu(e){var t=e.transform,a=e.containerWidth,n=e.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(o)},u={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:l,path:u}}function uu(e){var t=e.transform,a=e.width,n=a===void 0?Za:a,r=e.height,i=r===void 0?Za:r,s=e.startCentered,o=s===void 0?!1:s,l="";return o&&Ar?l+="translate(".concat(t.x/Te-n/2,"em, ").concat(t.y/Te-i/2,"em) "):o?l+="translate(calc(-50% + ".concat(t.x/Te,"em), calc(-50% + ").concat(t.y/Te,"em)) "):l+="translate(".concat(t.x/Te,"em, ").concat(t.y/Te,"em) "),l+="scale(".concat(t.size/Te*(t.flipX?-1:1),", ").concat(t.size/Te*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var cu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function zr(){var e=Er,t=Ir,a=p.cssPrefix,n=p.replacementClass,r=cu;if(a!==e||n!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(a,"-")).replace(s,"--".concat(a,"-")).replace(o,".".concat(n))}return r}var Hr=!1;function tn(){p.autoAddCss&&!Hr&&(su(zr()),Hr=!0)}var du={mixout:function(){return{dom:{css:zr,insertCss:tn}}},hooks:function(){return{beforeDOMElementCreation:function(){tn()},beforeI2svg:function(){tn()}}}},xe=Ne||{};xe[Se]||(xe[Se]={}),xe[Se].styles||(xe[Se].styles={}),xe[Se].hooks||(xe[Se].hooks={}),xe[Se].shims||(xe[Se].shims=[]);var ne=xe[Se],Vr=[],mu=function e(){P.removeEventListener("DOMContentLoaded",e),ea=1,Vr.map(function(t){return t()})},ea=!1;we&&(ea=(P.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(P.readyState),ea||P.addEventListener("DOMContentLoaded",mu));function hu(e){we&&(ea?setTimeout(e,0):Vr.push(e))}function wt(e){var t=e.tag,a=e.attributes,n=a===void 0?{}:a,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?jr(e):"<".concat(t," ").concat(lu(n),">").concat(i.map(wt).join(""),"</").concat(t,">")}function Br(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var an=function(t,a,n,r){var i=Object.keys(t),s=i.length,o=a,l,u,c;for(n===void 0?(l=1,c=t[i[0]]):(l=0,c=n);l<s;l++)u=i[l],c=o(c,t[u],u,t);return c};function yu(e){for(var t=[],a=0,n=e.length;a<n;){var r=e.charCodeAt(a++);if(r>=55296&&r<=56319&&a<n){var i=e.charCodeAt(a++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),a--)}else t.push(r)}return t}function nn(e){var t=yu(e);return t.length===1?t[0].toString(16):null}function vu(e,t){var a=e.length,n=e.charCodeAt(t),r;return n>=55296&&n<=56319&&a>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(n-55296)*1024+r-56320+65536:n}function Gr(e){return Object.keys(e).reduce(function(t,a){var n=e[a],r=!!n.icon;return r?t[n.iconName]=n.icon:t[a]=n,t},{})}function rn(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.skipHooks,r=n===void 0?!1:n,i=Gr(t);typeof ne.hooks.addPack=="function"&&!r?ne.hooks.addPack(e,Gr(t)):ne.styles[e]=v(v({},ne.styles[e]||{}),i),e==="fas"&&rn("fa",t)}var ta,aa,na,Qe=ne.styles,pu=ne.shims,gu=(ta={},W(ta,A,Object.values(pt[A])),W(ta,I,Object.values(pt[I])),ta),sn=null,$r={},Zr={},qr={},Xr={},Kr={},bu=(aa={},W(aa,A,Object.keys(yt[A])),W(aa,I,Object.keys(yt[I])),aa);function _u(e){return~tu.indexOf(e)}function ku(e,t){var a=t.split("-"),n=a[0],r=a.slice(1).join("-");return n===e&&r!==""&&!_u(r)?r:null}var Jr=function(){var t=function(i){return an(Qe,function(s,o,l){return s[l]=an(o,i,{}),s},{})};$r=t(function(r,i,s){if(i[3]&&(r[i[3]]=s),i[2]){var o=i[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){r[l.toString(16)]=s})}return r}),Zr=t(function(r,i,s){if(r[s]=s,i[2]){var o=i[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){r[l]=s})}return r}),Kr=t(function(r,i,s){var o=i[2];return r[s]=s,o.forEach(function(l){r[l]=s}),r});var a="far"in Qe||p.autoFetchSvg,n=an(pu,function(r,i){var s=i[0],o=i[1],l=i[2];return o==="far"&&!a&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});qr=n.names,Xr=n.unicodes,sn=ra(p.styleDefault,{family:p.familyDefault})};iu(function(e){sn=ra(e.styleDefault,{family:p.familyDefault})}),Jr();function on(e,t){return($r[e]||{})[t]}function wu(e,t){return(Zr[e]||{})[t]}function Ue(e,t){return(Kr[e]||{})[t]}function Qr(e){return qr[e]||{prefix:null,iconName:null}}function Su(e){var t=Xr[e],a=on("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function Ce(){return sn}var ln=function(){return{prefix:null,iconName:null,rest:[]}};function ra(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,n=a===void 0?A:a,r=yt[n][e],i=vt[n][e]||vt[n][r],s=e in ne.styles?e:null;return i||s||null}var ei=(na={},W(na,A,Object.keys(pt[A])),W(na,I,Object.keys(pt[I])),na);function ia(e){var t,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.skipLookups,r=n===void 0?!1:n,i=(t={},W(t,A,"".concat(p.cssPrefix,"-").concat(A)),W(t,I,"".concat(p.cssPrefix,"-").concat(I)),t),s=null,o=A;(e.includes(i[A])||e.some(function(u){return ei[A].includes(u)}))&&(o=A),(e.includes(i[I])||e.some(function(u){return ei[I].includes(u)}))&&(o=I);var l=e.reduce(function(u,c){var h=ku(p.cssPrefix,c);if(Qe[c]?(c=gu[o].includes(c)?qf[o][c]:c,s=c,u.prefix=c):bu[o].indexOf(c)>-1?(s=c,u.prefix=ra(c,{family:o})):h?u.iconName=h:c!==p.replacementClass&&c!==i[A]&&c!==i[I]&&u.rest.push(c),!r&&u.prefix&&u.iconName){var k=s==="fa"?Qr(u.iconName):{},D=Ue(u.prefix,u.iconName);k.prefix&&(s=null),u.iconName=k.iconName||D||u.iconName,u.prefix=k.prefix||u.prefix,u.prefix==="far"&&!Qe.far&&Qe.fas&&!p.autoFetchSvg&&(u.prefix="fas")}return u},ln());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===I&&(Qe.fass||p.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ue(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=Ce()||"fas"),l}var xu=function(){function e(){Rf(this,e),this.definitions={}}return Ff(e,[{key:"add",value:function(){for(var a=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var s=r.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){a.definitions[o]=v(v({},a.definitions[o]||{}),s[o]),rn(o,s[o]);var l=pt[A][o];l&&rn(l,s[o]),Jr()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(i){var s=r[i],o=s.prefix,l=s.iconName,u=s.icon,c=u[2];a[o]||(a[o]={}),c.length>0&&c.forEach(function(h){typeof h=="string"&&(a[o][h]=u)}),a[o][l]=u}),a}}]),e}(),ti=[],et={},tt={},Mu=Object.keys(tt);function Ou(e,t){var a=t.mixoutsTo;return ti=e,et={},Object.keys(tt).forEach(function(n){Mu.indexOf(n)===-1&&delete tt[n]}),ti.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(s){typeof r[s]=="function"&&(a[s]=r[s]),Gt(r[s])==="object"&&Object.keys(r[s]).forEach(function(o){a[s]||(a[s]={}),a[s][o]=r[s][o]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(s){et[s]||(et[s]=[]),et[s].push(i[s])})}n.provides&&n.provides(tt)}),a}function fn(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];var i=et[e]||[];return i.forEach(function(s){t=s.apply(null,[t].concat(n))}),t}function je(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var r=et[e]||[];r.forEach(function(i){i.apply(null,a)})}function Me(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return tt[e]?tt[e].apply(null,t):void 0}function un(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||Ce();if(t)return t=Ue(a,t)||t,Br(ai.definitions,a,t)||Br(ne.styles,a,t)}var ai=new xu,Du=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,je("noAuto")},Yu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return we?(je("beforeI2svg",t),Me("pseudoElements2svg",t),Me("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,hu(function(){Tu({autoReplaceSvgRoot:a}),je("watch",t)})}},Nu={icon:function(t){if(t===null)return null;if(Gt(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ue(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ra(t[0]);return{prefix:n,iconName:Ue(n,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(p.cssPrefix,"-"))>-1||t.match(Xf))){var r=ia(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||Ce(),iconName:Ue(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=Ce();return{prefix:i,iconName:Ue(i,t)||t}}}},q={noAuto:Du,config:p,dom:Yu,parse:Nu,library:ai,findIconDefinition:un,toHtml:wt},Tu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,n=a===void 0?P:a;(Object.keys(ne.styles).length>0||p.autoFetchSvg)&&we&&p.autoReplaceSvg&&q.dom.i2svg({node:n})};function sa(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(n){return wt(n)})}}),Object.defineProperty(e,"node",{get:function(){if(we){var n=P.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function Cu(e){var t=e.children,a=e.main,n=e.mask,r=e.attributes,i=e.styles,s=e.transform;if(en(s)&&a.found&&!n.found){var o=a.width,l=a.height,u={x:o/l/2,y:.5};r.style=Qt(v(v({},i),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Pu(e){var t=e.prefix,a=e.iconName,n=e.children,r=e.attributes,i=e.symbol,s=i===!0?"".concat(t,"-").concat(p.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:v(v({},r),{},{id:s}),children:n}]}]}function cn(e){var t=e.icons,a=t.main,n=t.mask,r=e.prefix,i=e.iconName,s=e.transform,o=e.symbol,l=e.title,u=e.maskId,c=e.titleId,h=e.extra,k=e.watchable,D=k===void 0?!1:k,j=n.found?n:a,H=j.width,$=j.height,b=r==="fak",_=[p.replacementClass,i?"".concat(p.cssPrefix,"-").concat(i):""].filter(function(Ae){return h.classes.indexOf(Ae)===-1}).filter(function(Ae){return Ae!==""||!!Ae}).concat(h.classes).join(" "),N={children:[],attributes:v(v({},h.attributes),{},{"data-prefix":r,"data-icon":i,class:_,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(H," ").concat($)})},L=b&&!~h.classes.indexOf("fa-fw")?{width:"".concat(H/$*16*.0625,"em")}:{};D&&(N.attributes[Fe]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(c||kt())},children:[l]}),delete N.attributes.title);var U=v(v({},N),{},{prefix:r,iconName:i,main:a,mask:n,maskId:u,transform:s,symbol:o,styles:v(v({},L),h.styles)}),de=n.found&&a.found?Me("generateAbstractMask",U)||{children:[],attributes:{}}:Me("generateAbstractIcon",U)||{children:[],attributes:{}},ie=de.children,Sn=de.attributes;return U.children=ie,U.attributes=Sn,o?Pu(U):Cu(U)}function ni(e){var t=e.content,a=e.width,n=e.height,r=e.transform,i=e.title,s=e.extra,o=e.watchable,l=o===void 0?!1:o,u=v(v(v({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});l&&(u[Fe]="");var c=v({},s.styles);en(r)&&(c.transform=uu({transform:r,startCentered:!0,width:a,height:n}),c["-webkit-transform"]=c.transform);var h=Qt(c);h.length>0&&(u.style=h);var k=[];return k.push({tag:"span",attributes:u,children:[t]}),i&&k.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),k}function Au(e){var t=e.content,a=e.title,n=e.extra,r=v(v(v({},n.attributes),a?{title:a}:{}),{},{class:n.classes.join(" ")}),i=Qt(n.styles);i.length>0&&(r.style=i);var s=[];return s.push({tag:"span",attributes:r,children:[t]}),a&&s.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),s}var dn=ne.styles;function mn(e){var t=e[0],a=e[1],n=e.slice(4),r=Ba(n,1),i=r[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(We.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(We.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(We.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:s}}var Eu={found:!1,width:512,height:512};function Iu(e,t){!Lr&&!p.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function hn(e,t){var a=t;return t==="fa"&&p.styleDefault!==null&&(t=Ce()),new Promise(function(n,r){if(Me("missingIconAbstract"),a==="fa"){var i=Qr(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&dn[t]&&dn[t][e]){var s=dn[t][e];return n(mn(s))}Iu(e,t),n(v(v({},Eu),{},{icon:p.showMissingIcons&&e?Me("missingIconAbstract")||{}:{}}))})}var ri=function(){},yn=p.measurePerformance&&$t&&$t.mark&&$t.measure?$t:{mark:ri,measure:ri},St='FA "6.5.2"',Ru=function(t){return yn.mark("".concat(St," ").concat(t," begins")),function(){return ii(t)}},ii=function(t){yn.mark("".concat(St," ").concat(t," ends")),yn.measure("".concat(St," ").concat(t),"".concat(St," ").concat(t," begins"),"".concat(St," ").concat(t," ends"))},vn={begin:Ru,end:ii},oa=function(){};function si(e){var t=e.getAttribute?e.getAttribute(Fe):null;return typeof t=="string"}function Lu(e){var t=e.getAttribute?e.getAttribute(Xa):null,a=e.getAttribute?e.getAttribute(Ka):null;return t&&a}function Fu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(p.replacementClass)}function Wu(){if(p.autoReplaceSvg===!0)return la.replace;var e=la[p.autoReplaceSvg];return e||la.replace}function Uu(e){return P.createElementNS("http://www.w3.org/2000/svg",e)}function ju(e){return P.createElement(e)}function oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,n=a===void 0?e.tag==="svg"?Uu:ju:a;if(typeof e=="string")return P.createTextNode(e);var r=n(e.tag);Object.keys(e.attributes||[]).forEach(function(s){r.setAttribute(s,e.attributes[s])});var i=e.children||[];return i.forEach(function(s){r.appendChild(oi(s,{ceFn:n}))}),r}function zu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var la={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(r){a.parentNode.insertBefore(oi(r),a)}),a.getAttribute(Fe)===null&&p.keepOriginalSource){var n=P.createComment(zu(a));a.parentNode.replaceChild(n,a)}else a.remove()},nest:function(t){var a=t[0],n=t[1];if(~Qa(a).indexOf(p.replacementClass))return la.replace(t);var r=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce(function(o,l){return l===p.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var s=n.map(function(o){return wt(o)}).join(`
`);a.setAttribute(Fe,""),a.innerHTML=s}};function li(e){e()}function fi(e,t){var a=typeof t=="function"?t:oa;if(e.length===0)a();else{var n=li;p.mutateApproach===$f&&(n=Ne.requestAnimationFrame||li),n(function(){var r=Wu(),i=vn.begin("mutate");e.map(r),i(),a()})}}var pn=!1;function ui(){pn=!0}function gn(){pn=!1}var fa=null;function ci(e){if(Pr&&p.observeMutations){var t=e.treeCallback,a=t===void 0?oa:t,n=e.nodeCallback,r=n===void 0?oa:n,i=e.pseudoElementsCallback,s=i===void 0?oa:i,o=e.observeMutationsRoot,l=o===void 0?P:o;fa=new Pr(function(u){if(!pn){var c=Ce();Je(u).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!si(h.addedNodes[0])&&(p.searchPseudoElements&&s(h.target),a(h.target)),h.type==="attributes"&&h.target.parentNode&&p.searchPseudoElements&&s(h.target.parentNode),h.type==="attributes"&&si(h.target)&&~eu.indexOf(h.attributeName))if(h.attributeName==="class"&&Lu(h.target)){var k=ia(Qa(h.target)),D=k.prefix,j=k.iconName;h.target.setAttribute(Xa,D||c),j&&h.target.setAttribute(Ka,j)}else Fu(h.target)&&r(h.target)})}}),we&&fa.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Hu(){fa&&fa.disconnect()}function Vu(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(n,r){var i=r.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(n[s]=o.join(":").trim()),n},{})),a}function Bu(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",r=ia(Qa(e));return r.prefix||(r.prefix=Ce()),t&&a&&(r.prefix=t,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=wu(r.prefix,e.innerText)||on(r.prefix,nn(e.innerText))),!r.iconName&&p.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Gu(e){var t=Je(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),a=e.getAttribute("title"),n=e.getAttribute("data-fa-title-id");return p.autoA11y&&(a?t["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(n||kt()):(t["aria-hidden"]="true",t.focusable="false")),t}function $u(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ce,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function di(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Bu(e),n=a.iconName,r=a.prefix,i=a.rest,s=Gu(e),o=fn("parseNodeAttributes",{},e),l=t.styleParser?Vu(e):[];return v({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:ce,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s}},o)}var Zu=ne.styles;function mi(e){var t=p.autoReplaceSvg==="nest"?di(e,{styleParser:!1}):di(e);return~t.extra.classes.indexOf(Fr)?Me("generateLayersText",e,t):Me("generateSvgReplacementMutation",e,t)}var Pe=new Set;Ja.map(function(e){Pe.add("fa-".concat(e))}),Object.keys(yt[A]).map(Pe.add.bind(Pe)),Object.keys(yt[I]).map(Pe.add.bind(Pe)),Pe=mt(Pe);function hi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!we)return Promise.resolve();var a=P.documentElement.classList,n=function(h){return a.add("".concat(Rr,"-").concat(h))},r=function(h){return a.remove("".concat(Rr,"-").concat(h))},i=p.autoFetchSvg?Pe:Ja.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Zu));i.includes("fa")||i.push("fa");var s=[".".concat(Fr,":not([").concat(Fe,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Fe,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=Je(e.querySelectorAll(s))}catch{}if(o.length>0)n("pending"),r("complete");else return Promise.resolve();var l=vn.begin("onTree"),u=o.reduce(function(c,h){try{var k=mi(h);k&&c.push(k)}catch(D){Lr||D.name==="MissingIcon"&&console.error(D)}return c},[]);return new Promise(function(c,h){Promise.all(u).then(function(k){fi(k,function(){n("active"),n("complete"),r("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(k){l(),h(k)})})}function qu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;mi(e).then(function(a){a&&fi([a],t)})}function Xu(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(t||{}).icon?t:un(t||{}),r=a.mask;return r&&(r=(r||{}).icon?r:un(r||{})),e(n,v(v({},a),{},{mask:r}))}}var Ku=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,r=n===void 0?ce:n,i=a.symbol,s=i===void 0?!1:i,o=a.mask,l=o===void 0?null:o,u=a.maskId,c=u===void 0?null:u,h=a.title,k=h===void 0?null:h,D=a.titleId,j=D===void 0?null:D,H=a.classes,$=H===void 0?[]:H,b=a.attributes,_=b===void 0?{}:b,N=a.styles,L=N===void 0?{}:N;if(t){var U=t.prefix,de=t.iconName,ie=t.icon;return sa(v({type:"icon"},t),function(){return je("beforeDOMElementCreation",{iconDefinition:t,params:a}),p.autoA11y&&(k?_["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(j||kt()):(_["aria-hidden"]="true",_.focusable="false")),cn({icons:{main:mn(ie),mask:l?mn(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:de,transform:v(v({},ce),r),symbol:s,title:k,maskId:c,titleId:j,extra:{attributes:_,styles:L,classes:$}})})}},Ju={mixout:function(){return{icon:Xu(Ku)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=hi,a.nodeCallback=qu,a}}},provides:function(t){t.i2svg=function(a){var n=a.node,r=n===void 0?P:n,i=a.callback,s=i===void 0?function(){}:i;return hi(r,s)},t.generateSvgReplacementMutation=function(a,n){var r=n.iconName,i=n.title,s=n.titleId,o=n.prefix,l=n.transform,u=n.symbol,c=n.mask,h=n.maskId,k=n.extra;return new Promise(function(D,j){Promise.all([hn(r,o),c.iconName?hn(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(H){var $=Ba(H,2),b=$[0],_=$[1];D([a,cn({icons:{main:b,mask:_},prefix:o,iconName:r,transform:l,symbol:u,maskId:h,title:i,titleId:s,extra:k,watchable:!0})])}).catch(j)})},t.generateAbstractIcon=function(a){var n=a.children,r=a.attributes,i=a.main,s=a.transform,o=a.styles,l=Qt(o);l.length>0&&(r.style=l);var u;return en(s)&&(u=Me("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},Qu={mixout:function(){return{layer:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,i=r===void 0?[]:r;return sa({type:"layer"},function(){je("beforeDOMElementCreation",{assembler:a,params:n});var s=[];return a(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers")].concat(mt(i)).join(" ")},children:s}]})}}}},ec={mixout:function(){return{counter:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.title,i=r===void 0?null:r,s=n.classes,o=s===void 0?[]:s,l=n.attributes,u=l===void 0?{}:l,c=n.styles,h=c===void 0?{}:c;return sa({type:"counter",content:a},function(){return je("beforeDOMElementCreation",{content:a,params:n}),Au({content:a.toString(),title:i,extra:{attributes:u,styles:h,classes:["".concat(p.cssPrefix,"-layers-counter")].concat(mt(o))}})})}}}},tc={mixout:function(){return{text:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?ce:r,s=n.title,o=s===void 0?null:s,l=n.classes,u=l===void 0?[]:l,c=n.attributes,h=c===void 0?{}:c,k=n.styles,D=k===void 0?{}:k;return sa({type:"text",content:a},function(){return je("beforeDOMElementCreation",{content:a,params:n}),ni({content:a,transform:v(v({},ce),i),title:o,extra:{attributes:h,styles:D,classes:["".concat(p.cssPrefix,"-layers-text")].concat(mt(u))}})})}}},provides:function(t){t.generateLayersText=function(a,n){var r=n.title,i=n.transform,s=n.extra,o=null,l=null;if(Ar){var u=parseInt(getComputedStyle(a).fontSize,10),c=a.getBoundingClientRect();o=c.width/u,l=c.height/u}return p.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([a,ni({content:a.innerHTML,width:o,height:l,transform:i,title:r,extra:s,watchable:!0})])}}},ac=new RegExp('"',"ug"),yi=[1105920,1112319];function nc(e){var t=e.replace(ac,""),a=vu(t,0),n=a>=yi[0]&&a<=yi[1],r=t.length===2?t[0]===t[1]:!1;return{value:nn(r?t[0]:t),isSecondary:n||r}}function vi(e,t){var a="".concat(Gf).concat(t.replace(":","-"));return new Promise(function(n,r){if(e.getAttribute(a)!==null)return n();var i=Je(e.children),s=i.filter(function(ie){return ie.getAttribute(qa)===t})[0],o=Ne.getComputedStyle(e,t),l=o.getPropertyValue("font-family").match(Kf),u=o.getPropertyValue("font-weight"),c=o.getPropertyValue("content");if(s&&!l)return e.removeChild(s),n();if(l&&c!=="none"&&c!==""){var h=o.getPropertyValue("content"),k=~["Sharp"].indexOf(l[2])?I:A,D=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?vt[k][l[2].toLowerCase()]:Jf[k][u],j=nc(h),H=j.value,$=j.isSecondary,b=l[0].startsWith("FontAwesome"),_=on(D,H),N=_;if(b){var L=Su(H);L.iconName&&L.prefix&&(_=L.iconName,D=L.prefix)}if(_&&!$&&(!s||s.getAttribute(Xa)!==D||s.getAttribute(Ka)!==N)){e.setAttribute(a,N),s&&e.removeChild(s);var U=$u(),de=U.extra;de.attributes[qa]=t,hn(_,D).then(function(ie){var Sn=cn(v(v({},U),{},{icons:{main:ie,mask:ln()},prefix:D,iconName:N,extra:de,watchable:!0})),Ae=P.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(Ae,e.firstChild):e.appendChild(Ae),Ae.outerHTML=Sn.map(function(nd){return wt(nd)}).join(`
`),e.removeAttribute(a),n()}).catch(r)}else n()}else n()})}function rc(e){return Promise.all([vi(e,"::before"),vi(e,"::after")])}function ic(e){return e.parentNode!==document.head&&!~Zf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(qa)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function pi(e){if(we)return new Promise(function(t,a){var n=Je(e.querySelectorAll("*")).filter(ic).map(rc),r=vn.begin("searchPseudoElements");ui(),Promise.all(n).then(function(){r(),gn(),t()}).catch(function(){r(),gn(),a()})})}var sc={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=pi,a}}},provides:function(t){t.pseudoElements2svg=function(a){var n=a.node,r=n===void 0?P:n;p.searchPseudoElements&&pi(r)}}},gi=!1,oc={mixout:function(){return{dom:{unwatch:function(){ui(),gi=!0}}}},hooks:function(){return{bootstrap:function(){ci(fn("mutationObserverCallbacks",{}))},noAuto:function(){Hu()},watch:function(a){var n=a.observeMutationsRoot;gi?gn():ci(fn("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},bi=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,r){var i=r.toLowerCase().split("-"),s=i[0],o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},a)},lc={mixout:function(){return{parse:{transform:function(a){return bi(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-transform");return r&&(a.transform=bi(r)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var n=a.main,r=a.transform,i=a.containerWidth,s=a.iconWidth,o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(l," ").concat(u," ").concat(c)},k={transform:"translate(".concat(s/2*-1," -256)")},D={outer:o,inner:h,path:k};return{tag:"g",attributes:v({},D.outer),children:[{tag:"g",attributes:v({},D.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:v(v({},n.icon.attributes),D.path)}]}]}}}},bn={x:0,y:0,width:"100%",height:"100%"};function _i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function fc(e){return e.tag==="g"?e.children:[e]}var uc={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-mask"),i=r?ia(r.split(" ").map(function(s){return s.trim()})):ln();return i.prefix||(i.prefix=Ce()),a.mask=i,a.maskId=n.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var n=a.children,r=a.attributes,i=a.main,s=a.mask,o=a.maskId,l=a.transform,u=i.width,c=i.icon,h=s.width,k=s.icon,D=fu({transform:l,containerWidth:h,iconWidth:u}),j={tag:"rect",attributes:v(v({},bn),{},{fill:"white"})},H=c.children?{children:c.children.map(_i)}:{},$={tag:"g",attributes:v({},D.inner),children:[_i(v({tag:c.tag,attributes:v(v({},c.attributes),D.path)},H))]},b={tag:"g",attributes:v({},D.outer),children:[$]},_="mask-".concat(o||kt()),N="clip-".concat(o||kt()),L={tag:"mask",attributes:v(v({},bn),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,b]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:fc(k)},L]};return n.push(U,{tag:"rect",attributes:v({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(_,")")},bn)}),{children:n,attributes:r}}}},cc={provides:function(t){var a=!1;Ne.matchMedia&&(a=Ne.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:v(v({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=v(v({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:v(v({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||o.children.push({tag:"animate",attributes:v(v({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:v(v({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:v(v({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:v(v({},s),{},{values:"1;0;0;0;0;1;"})}]}),a||n.push({tag:"path",attributes:v(v({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:v(v({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},dc={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},mc=[du,Ju,Qu,ec,tc,sc,oc,lc,uc,cc,dc];Ou(mc,{mixoutsTo:q}),q.noAuto;var ki=q.config,hc=q.library;q.dom;var ua=q.parse;q.findIconDefinition,q.toHtml;var yc=q.icon;q.layer;var vc=q.text;q.counter;function wi(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,n)}return a}function re(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?wi(Object(a),!0).forEach(function(n){G(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):wi(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function pc(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var n=a.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function gc(e){var t=pc(e,"string");return typeof t=="symbol"?t:t+""}function ca(e){"@babel/helpers - typeof";return ca=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ca(e)}function G(e,t,a){return t=gc(t),t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function bc(e,t){if(e==null)return{};var a={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;a[n]=e[n]}return a}function _c(e,t){if(e==null)return{};var a=bc(e,t),n,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function _n(e){return kc(e)||wc(e)||Sc(e)||xc()}function kc(e){if(Array.isArray(e))return kn(e)}function wc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Sc(e,t){if(e){if(typeof e=="string")return kn(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return kn(e,t)}}function kn(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function xc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Mc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Si={exports:{}};(function(e){(function(t){var a=function(b,_,N){if(!u(_)||h(_)||k(_)||D(_)||l(_))return _;var L,U=0,de=0;if(c(_))for(L=[],de=_.length;U<de;U++)L.push(a(b,_[U],N));else{L={};for(var ie in _)Object.prototype.hasOwnProperty.call(_,ie)&&(L[b(ie,N)]=a(b,_[ie],N))}return L},n=function(b,_){_=_||{};var N=_.separator||"_",L=_.split||/(?=[A-Z])/;return b.split(L).join(N)},r=function(b){return j(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(_,N){return N?N.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},i=function(b){var _=r(b);return _.substr(0,1).toUpperCase()+_.substr(1)},s=function(b,_){return n(b,_).toLowerCase()},o=Object.prototype.toString,l=function(b){return typeof b=="function"},u=function(b){return b===Object(b)},c=function(b){return o.call(b)=="[object Array]"},h=function(b){return o.call(b)=="[object Date]"},k=function(b){return o.call(b)=="[object RegExp]"},D=function(b){return o.call(b)=="[object Boolean]"},j=function(b){return b=b-0,b===b},H=function(b,_){var N=_&&"process"in _?_.process:_;return typeof N!="function"?b:function(L,U){return N(L,b,U)}},$={camelize:r,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(b,_){return a(H(r,_),b)},decamelizeKeys:function(b,_){return a(H(s,_),b,_)},pascalizeKeys:function(b,_){return a(H(i,_),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=$:t.humps=$})(Mc)})(Si);var Oc=Si.exports,Dc=["class","style"];function Yc(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,a){var n=a.indexOf(":"),r=Oc.camelize(a.slice(0,n)),i=a.slice(n+1).trim();return t[r]=i,t},{})}function Nc(e){return e.split(/\s+/).reduce(function(t,a){return t[a]=!0,t},{})}function wn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var n=(e.children||[]).map(function(l){return wn(l)}),r=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.class=Nc(c);break;case"style":l.style=Yc(c);break;default:l.attrs[u]=c}return l},{attrs:{},class:{},style:{}});a.class;var i=a.style,s=i===void 0?{}:i,o=_c(a,Dc);return f.h(e.tag,re(re(re({},t),{},{class:r.class,style:re(re({},r.style),s)},r.attrs),o),n)}var xi=!1;try{xi=process.env.NODE_ENV==="production"}catch{}function Tc(){if(!xi&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function xt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?G({},e,t):{}}function Cc(e){var t,a=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},G(G(G(G(G(G(G(G(G(G(t,"fa-".concat(e.size),e.size!==null),"fa-rotate-".concat(e.rotation),e.rotation!==null),"fa-pull-".concat(e.pull),e.pull!==null),"fa-swap-opacity",e.swapOpacity),"fa-bounce",e.bounce),"fa-shake",e.shake),"fa-beat",e.beat),"fa-fade",e.fade),"fa-beat-fade",e.beatFade),"fa-flash",e.flash),G(G(t,"fa-spin-pulse",e.spinPulse),"fa-spin-reverse",e.spinReverse));return Object.keys(a).map(function(n){return a[n]?n:null}).filter(function(n){return n})}function Mi(e){if(e&&ca(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ua.icon)return ua.icon(e);if(e===null)return null;if(ca(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Oi=f.defineComponent({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,a){var n=a.attrs,r=f.computed(function(){return Mi(t.icon)}),i=f.computed(function(){return xt("classes",Cc(t))}),s=f.computed(function(){return xt("transform",typeof t.transform=="string"?ua.transform(t.transform):t.transform)}),o=f.computed(function(){return xt("mask",Mi(t.mask))}),l=f.computed(function(){return yc(r.value,re(re(re(re({},i.value),s.value),o.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});f.watch(l,function(c){if(!c)return Tc("Could not find one or more icon(s)",r.value,o.value)},{immediate:!0});var u=f.computed(function(){return l.value?wn(l.value.abstract[0],{},n):null});return function(){return u.value}}});f.defineComponent({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,a){var n=a.slots,r=ki.familyPrefix,i=f.computed(function(){return["".concat(r,"-layers")].concat(_n(t.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return f.h("div",{class:i.value},n.default?n.default():[])}}}),f.defineComponent({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,a){var n=a.attrs,r=ki.familyPrefix,i=f.computed(function(){return xt("classes",[].concat(_n(t.counter?["".concat(r,"-layers-counter")]:[]),_n(t.position?["".concat(r,"-layers-").concat(t.position)]:[])))}),s=f.computed(function(){return xt("transform",typeof t.transform=="string"?ua.transform(t.transform):t.transform)}),o=f.computed(function(){var u=vc(t.value.toString(),re(re({},s.value),i.value)),c=u.abstract;return t.counter&&(c[0].attributes.class=c[0].attributes.class.replace("fa-layers-text","")),c[0]}),l=f.computed(function(){return wn(o.value,{},n)});return function(){return l.value}}});const Pc={components:{FontAwesomeIcon:Oi,DateLink:Sr},emits:["click-date"],props:{date:{type:[String,Object],default:null},icon:{type:String,required:!0},label:{type:String,default:null},forward:{type:Boolean,default:!0}}},Ac={key:0,class:"mr-1"},Ec={key:1,class:"ml-1"},Ic={key:1,class:"text-muted"},Rc={key:0,class:"mr-1"},Lc={key:1,class:"ml-1"};function Fc(e,t,a,n,r,i){const s=f.resolveComponent("font-awesome-icon"),o=f.resolveComponent("date-link");return a.date?(f.openBlock(),f.createBlock(o,{key:0,date:a.date,onClickDate:t[0]||(t[0]=l=>e.$emit("click-date",l))},{default:f.withCtx(()=>[a.label&&a.forward?(f.openBlock(),f.createElementBlock("span",Ac,f.toDisplayString(a.label),1)):f.createCommentVNode("",!0),f.createVNode(s,{icon:a.icon},null,8,["icon"]),a.label&&!a.forward?(f.openBlock(),f.createElementBlock("span",Ec,f.toDisplayString(a.label),1)):f.createCommentVNode("",!0)]),_:1},8,["date"])):(f.openBlock(),f.createElementBlock("span",Ic,[a.label&&a.forward?(f.openBlock(),f.createElementBlock("span",Rc,f.toDisplayString(a.label),1)):f.createCommentVNode("",!0),f.createVNode(s,{icon:a.icon},null,8,["icon"]),a.label&&!a.forward?(f.openBlock(),f.createElementBlock("span",Lc,f.toDisplayString(a.label),1)):f.createCommentVNode("",!0)]))}const Wc=se(Pc,[["render",Fc],["__scopeId","data-v-3cf4e63e"]]);var Uc={prefix:"fas",iconName:"backward",icon:[512,512,[9194],"f04a","M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"]},jc={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]},zc={prefix:"fas",iconName:"caret-left",icon:[256,512,[],"f0d9","M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"]},Hc={prefix:"fas",iconName:"forward",icon:[512,512,[9193],"f04e","M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"]},Vc={prefix:"fas",iconName:"calendar-day",icon:[448,512,[],"f783","M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z"]};hc.add(zc,jc,Uc,Hc,Vc);const Bc={components:{FontAwesomeIcon:Oi,SmallHeader:Ci,DateLink:Sr,DateNav:Wc},data(){return{computer:new wr}},emits:["update:date"],props:{date:{type:String,required:!0,validator(e){return m(e,"YYYYMMDD",!0).isValid()}},labelFormat:{type:String,default:"MMM YYYY"},todayNav:{type:Boolean,default:!1},dayNav:{type:Boolean,default:!1},monthNav:{type:Boolean,default:!1},dateNav:{type:Boolean,default:!1},monthLock:{type:String,required:!1,validator(e){return m(e,"YYYYMM",!0).isValid()}}},computed:{monthLabel(){return this.labelFormat?(this.monthLock?m(this.monthLock,"YYYYMM"):m(this.date,"YYYYMMDD")).format(this.labelFormat):""},dateConfig(){return this.computer.daysInMonth.map(e=>({date:e.format("YYYYMMDD"),class:this.dateClass(e),style:this.dateStyle(e),label:this.dateLabel(e),current:this.isCurrent(e)}))},prevMonth(){return this.computer.prevMonth},nextMonth(){return this.computer.nextMonth},prevDay(){return this.computer.prevDay},nextDay(){return this.computer.nextDay},prevDayLabel(){return this.formatDayLabel(this.prevDay)},nextDayLabel(){return this.formatDayLabel(this.nextDay)}},methods:{isCurrent(e){return m(e).isSame(this.computer.current)},isInMonth(e){return this.computer.isInMonth(e)},dateClass(e){const t=this.isInMonth(e),a=t&&this.isCurrent(e);return[t?"day":"empty-day",a?"today":"not-today"]},dateStyle(e){return!1},dateLabel(e){return this.isInMonth(e)?m(e).format("D"):""},formatDate(e){return m(e).format("YYYYMMDD")},formatDayLabel(e){return e?e.format("MMM D"):null},handleClick(e){this.$emit("update:date",e)},handleToday(){this.$emit("update:date",m().format("YYYYMMDD"))}},watch:{date:{immediate:!0,handler(e){this.computer=new wr().with(e),this.monthLock&&(this.computer.lockedMonth=this.monthLock)}}}},Gc={class:"calendar-wrap style-b"},$c={class:"d-flex justify-content-between"},Zc={class:"mx-auto"},qc={class:"calendar"},Xc={class:"date-nav"},Kc={class:"mr-auto"},Jc={class:"ml-auto"};function Qc(e,t,a,n,r,i){const s=f.resolveComponent("date-nav"),o=f.resolveComponent("small-header"),l=f.resolveComponent("date-link"),u=f.resolveComponent("font-awesome-icon");return f.openBlock(),f.createElementBlock("div",Gc,[i.monthLabel||a.monthNav?(f.openBlock(),f.createBlock(o,{key:0},{default:f.withCtx(()=>[f.createElementVNode("div",$c,[a.monthNav?(f.openBlock(),f.createBlock(s,{key:0,date:i.prevMonth,icon:"backward",forward:!1,onClickDate:i.handleClick},null,8,["date","onClickDate"])):f.createCommentVNode("",!0),f.createElementVNode("span",Zc,f.toDisplayString(i.monthLabel),1),a.monthNav?(f.openBlock(),f.createBlock(s,{key:1,date:i.nextMonth,icon:"forward",forward:!0,onClickDate:i.handleClick},null,8,["date","onClickDate"])):f.createCommentVNode("",!0)])]),_:1})):f.createCommentVNode("",!0),f.createElementVNode("div",qc,[(f.openBlock(!0),f.createElementBlock(f.Fragment,null,f.renderList(i.dateConfig,c=>(f.openBlock(),f.createElementBlock("div",{key:c.date,class:f.normalizeClass(c.class),style:f.normalizeStyle(c.style)},[f.createVNode(l,{date:c.date,navigable:a.dateNav,onClickDate:i.handleClick},{default:f.withCtx(()=>[f.createTextVNode(f.toDisplayString(c.label),1)]),_:2},1032,["date","navigable","onClickDate"])],6))),128))]),a.dayNav||a.todayNav?(f.openBlock(),f.createBlock(o,{key:1},{default:f.withCtx(()=>[f.createElementVNode("div",Xc,[f.createElementVNode("span",Kc,[i.prevDay&&a.dayNav?(f.openBlock(),f.createBlock(s,{key:0,date:i.prevDay,icon:"caret-left",label:i.prevDayLabel,forward:!1,onClickDate:i.handleClick},null,8,["date","label","onClickDate"])):f.createCommentVNode("",!0)]),f.createElementVNode("span",null,[a.todayNav?(f.openBlock(),f.createBlock(u,{key:0,icon:"calendar-day",class:"clickable",onClick:i.handleToday},null,8,["onClick"])):f.createCommentVNode("",!0)]),f.createElementVNode("span",Jc,[i.nextDay&&a.dayNav?(f.openBlock(),f.createBlock(s,{key:0,date:i.nextDay,icon:"caret-right",label:i.nextDayLabel,forward:!0,onClickDate:i.handleClick},null,8,["date","label","onClickDate"])):f.createCommentVNode("",!0)])])]),_:1})):f.createCommentVNode("",!0)])}const Di=se(Bc,[["render",Qc],["__scopeId","data-v-731dcb13"]]),ed={name:"CalendarGrid",components:{Calendar:Di},emits:["update:date"],props:{date:{type:String,required:!0},startMonth:{type:String,required:!0,validator(e){return m(e,"YYYYMM",!0).isValid()}},monthCount:{type:Number,required:!0,validator(e){return e>0}},columns:{type:Number,required:!1},dateNav:{type:Boolean,default:!1}},computed:{months(){const e=[],t=m(this.startMonth,"YYYYMM");for(let a=0;a<this.monthCount;a++)e.push(t.format("YYYYMM")),t.add(1,"month");return e},gridStyle(){return this.columns?{"grid-template-columns":`repeat(${this.columns}, 1fr)`}:!1}}};function td(e,t,a,n,r,i){const s=f.resolveComponent("calendar");return f.openBlock(),f.createElementBlock("div",{class:"calendar-grid",style:f.normalizeStyle(i.gridStyle)},[(f.openBlock(!0),f.createElementBlock(f.Fragment,null,f.renderList(i.months,o=>(f.openBlock(),f.createBlock(s,{key:o,"month-lock":o,"day-nav":!1,"month-nav":!1,"date-nav":a.dateNav,date:a.date,"onUpdate:date":t[0]||(t[0]=l=>e.$emit("update:date",l))},null,8,["month-lock","date-nav","date"]))),128))],4)}const ad=se(ed,[["render",td],["__scopeId","data-v-36f0d052"]]);V.Calendar=Di,V.CalendarGrid=ad,Object.defineProperty(V,Symbol.toStringTag,{value:"Module"})});
