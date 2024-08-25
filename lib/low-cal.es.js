var Hi = Object.defineProperty;
var Vi = (e, t, a) => t in e ? Hi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a;
var _a = (e, t, a) => Vi(e, typeof t != "symbol" ? t + "" : t, a);
import { openBlock as R, createElementBlock as X, renderSlot as mr, normalizeClass as hr, defineComponent as Xa, computed as te, watch as Gi, h as vr, resolveComponent as Fe, createBlock as ve, withCtx as zt, toDisplayString as Ze, createCommentVNode as ee, createVNode as Ta, createElementVNode as Re, Fragment as yr, renderList as gr, normalizeStyle as pr, createTextVNode as $i } from "vue";
const St = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [n, r] of t)
    a[n] = r;
  return a;
}, Bi = {}, Zi = { class: "small-header" };
function qi(e, t, a, n, r, i) {
  return R(), X("div", Zi, [
    mr(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Xi = /* @__PURE__ */ St(Bi, [["render", qi], ["__scopeId", "data-v-d0e6fe58"]]);
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var br;
function d() {
  return br.apply(null, arguments);
}
function Ki(e) {
  br = e;
}
function ie(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function ze(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function x(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Ka(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (x(e, t))
      return !1;
  return !0;
}
function $(e) {
  return e === void 0;
}
function ke(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function xt(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function _r(e, t) {
  var a = [], n, r = e.length;
  for (n = 0; n < r; ++n)
    a.push(t(e[n], n));
  return a;
}
function Ne(e, t) {
  for (var a in t)
    x(t, a) && (e[a] = t[a]);
  return x(t, "toString") && (e.toString = t.toString), x(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function de(e, t, a, n) {
  return Hr(e, t, a, n, !0).utc();
}
function Ji() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function k(e) {
  return e._pf == null && (e._pf = Ji()), e._pf;
}
var Na;
Array.prototype.some ? Na = Array.prototype.some : Na = function(e) {
  var t = Object(this), a = t.length >>> 0, n;
  for (n = 0; n < a; n++)
    if (n in t && e.call(this, t[n], n, t))
      return !0;
  return !1;
};
function Ja(e) {
  var t = null, a = !1, n = e._d && !isNaN(e._d.getTime());
  if (n && (t = k(e), a = Na.call(t.parsedDateParts, function(r) {
    return r != null;
  }), n = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && a), e._strict && (n = n && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = n;
  else
    return n;
  return e._isValid;
}
function ra(e) {
  var t = de(NaN);
  return e != null ? Ne(k(t), e) : k(t).userInvalidated = !0, t;
}
var In = d.momentProperties = [], ka = !1;
function Qa(e, t) {
  var a, n, r, i = In.length;
  if ($(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), $(t._i) || (e._i = t._i), $(t._f) || (e._f = t._f), $(t._l) || (e._l = t._l), $(t._strict) || (e._strict = t._strict), $(t._tzm) || (e._tzm = t._tzm), $(t._isUTC) || (e._isUTC = t._isUTC), $(t._offset) || (e._offset = t._offset), $(t._pf) || (e._pf = k(t)), $(t._locale) || (e._locale = t._locale), i > 0)
    for (a = 0; a < i; a++)
      n = In[a], r = t[n], $(r) || (e[n] = r);
  return e;
}
function Mt(e) {
  Qa(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), ka === !1 && (ka = !0, d.updateOffset(this), ka = !1);
}
function se(e) {
  return e instanceof Mt || e != null && e._isAMomentObject != null;
}
function kr(e) {
  d.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function K(e, t) {
  var a = !0;
  return Ne(function() {
    if (d.deprecationHandler != null && d.deprecationHandler(null, e), a) {
      var n = [], r, i, s, o = arguments.length;
      for (i = 0; i < o; i++) {
        if (r = "", typeof arguments[i] == "object") {
          r += `
[` + i + "] ";
          for (s in arguments[0])
            x(arguments[0], s) && (r += s + ": " + arguments[0][s] + ", ");
          r = r.slice(0, -2);
        } else
          r = arguments[i];
        n.push(r);
      }
      kr(
        e + `
Arguments: ` + Array.prototype.slice.call(n).join("") + `
` + new Error().stack
      ), a = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var En = {};
function wr(e, t) {
  d.deprecationHandler != null && d.deprecationHandler(e, t), En[e] || (kr(t), En[e] = !0);
}
d.suppressDeprecationWarnings = !1;
d.deprecationHandler = null;
function me(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function Qi(e) {
  var t, a;
  for (a in e)
    x(e, a) && (t = e[a], me(t) ? this[a] = t : this["_" + a] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Pa(e, t) {
  var a = Ne({}, e), n;
  for (n in t)
    x(t, n) && (ze(e[n]) && ze(t[n]) ? (a[n] = {}, Ne(a[n], e[n]), Ne(a[n], t[n])) : t[n] != null ? a[n] = t[n] : delete a[n]);
  for (n in e)
    x(e, n) && !x(t, n) && ze(e[n]) && (a[n] = Ne({}, a[n]));
  return a;
}
function en(e) {
  e != null && this.set(e);
}
var Aa;
Object.keys ? Aa = Object.keys : Aa = function(e) {
  var t, a = [];
  for (t in e)
    x(e, t) && a.push(t);
  return a;
};
var es = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function ts(e, t, a) {
  var n = this._calendar[e] || this._calendar.sameElse;
  return me(n) ? n.call(t, a) : n;
}
function ce(e, t, a) {
  var n = "" + Math.abs(e), r = t - n.length, i = e >= 0;
  return (i ? a ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + n;
}
var tn = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Pt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, wa = {}, Je = {};
function g(e, t, a, n) {
  var r = n;
  typeof n == "string" && (r = function() {
    return this[n]();
  }), e && (Je[e] = r), t && (Je[t[0]] = function() {
    return ce(r.apply(this, arguments), t[1], t[2]);
  }), a && (Je[a] = function() {
    return this.localeData().ordinal(
      r.apply(this, arguments),
      e
    );
  });
}
function as(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function ns(e) {
  var t = e.match(tn), a, n;
  for (a = 0, n = t.length; a < n; a++)
    Je[t[a]] ? t[a] = Je[t[a]] : t[a] = as(t[a]);
  return function(r) {
    var i = "", s;
    for (s = 0; s < n; s++)
      i += me(t[s]) ? t[s].call(r, e) : t[s];
    return i;
  };
}
function Ht(e, t) {
  return e.isValid() ? (t = Sr(t, e.localeData()), wa[t] = wa[t] || ns(t), wa[t](e)) : e.localeData().invalidDate();
}
function Sr(e, t) {
  var a = 5;
  function n(r) {
    return t.longDateFormat(r) || r;
  }
  for (Pt.lastIndex = 0; a >= 0 && Pt.test(e); )
    e = e.replace(
      Pt,
      n
    ), Pt.lastIndex = 0, a -= 1;
  return e;
}
var rs = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function is(e) {
  var t = this._longDateFormat[e], a = this._longDateFormat[e.toUpperCase()];
  return t || !a ? t : (this._longDateFormat[e] = a.match(tn).map(function(n) {
    return n === "MMMM" || n === "MM" || n === "DD" || n === "dddd" ? n.slice(1) : n;
  }).join(""), this._longDateFormat[e]);
}
var ss = "Invalid date";
function os() {
  return this._invalidDate;
}
var ls = "%d", fs = /\d{1,2}/;
function us(e) {
  return this._ordinal.replace("%d", e);
}
var cs = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function ds(e, t, a, n) {
  var r = this._relativeTime[a];
  return me(r) ? r(e, t, a, n) : r.replace(/%d/i, e);
}
function ms(e, t) {
  var a = this._relativeTime[e > 0 ? "future" : "past"];
  return me(a) ? a(t) : a.replace(/%s/i, t);
}
var Rn = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function J(e) {
  return typeof e == "string" ? Rn[e] || Rn[e.toLowerCase()] : void 0;
}
function an(e) {
  var t = {}, a, n;
  for (n in e)
    x(e, n) && (a = J(n), a && (t[a] = e[n]));
  return t;
}
var hs = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function vs(e) {
  var t = [], a;
  for (a in e)
    x(e, a) && t.push({ unit: a, priority: hs[a] });
  return t.sort(function(n, r) {
    return n.priority - r.priority;
  }), t;
}
var xr = /\d/, B = /\d\d/, Mr = /\d{3}/, nn = /\d{4}/, ia = /[+-]?\d{6}/, A = /\d\d?/, Or = /\d\d\d\d?/, Dr = /\d\d\d\d\d\d?/, sa = /\d{1,3}/, rn = /\d{1,4}/, oa = /[+-]?\d{1,6}/, nt = /\d+/, la = /[+-]?\d+/, ys = /Z|[+-]\d\d:?\d\d/gi, fa = /Z|[+-]\d\d(?::?\d\d)?/gi, gs = /[+-]?\d+(\.\d{1,3})?/, Ot = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, rt = /^[1-9]\d?/, sn = /^([1-9]\d|\d)/, Zt;
Zt = {};
function v(e, t, a) {
  Zt[e] = me(t) ? t : function(n, r) {
    return n && a ? a : t;
  };
}
function ps(e, t) {
  return x(Zt, e) ? Zt[e](t._strict, t._locale) : new RegExp(bs(e));
}
function bs(e) {
  return be(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, a, n, r, i) {
        return a || n || r || i;
      }
    )
  );
}
function be(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function q(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function w(e) {
  var t = +e, a = 0;
  return t !== 0 && isFinite(t) && (a = q(t)), a;
}
var Ca = {};
function D(e, t) {
  var a, n = t, r;
  for (typeof e == "string" && (e = [e]), ke(t) && (n = function(i, s) {
    s[t] = w(i);
  }), r = e.length, a = 0; a < r; a++)
    Ca[e[a]] = n;
}
function Dt(e, t) {
  D(e, function(a, n, r, i) {
    r._w = r._w || {}, t(a, r._w, r, i);
  });
}
function _s(e, t, a) {
  t != null && x(Ca, e) && Ca[e](t, a._a, a, e);
}
function ua(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var H = 0, ge = 1, fe = 2, W = 3, ne = 4, pe = 5, We = 6, ks = 7, ws = 8;
g("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? ce(e, 4) : "+" + e;
});
g(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
g(0, ["YYYY", 4], 0, "year");
g(0, ["YYYYY", 5], 0, "year");
g(0, ["YYYYYY", 6, !0], 0, "year");
v("Y", la);
v("YY", A, B);
v("YYYY", rn, nn);
v("YYYYY", oa, ia);
v("YYYYYY", oa, ia);
D(["YYYYY", "YYYYYY"], H);
D("YYYY", function(e, t) {
  t[H] = e.length === 2 ? d.parseTwoDigitYear(e) : w(e);
});
D("YY", function(e, t) {
  t[H] = d.parseTwoDigitYear(e);
});
D("Y", function(e, t) {
  t[H] = parseInt(e, 10);
});
function ut(e) {
  return ua(e) ? 366 : 365;
}
d.parseTwoDigitYear = function(e) {
  return w(e) + (w(e) > 68 ? 1900 : 2e3);
};
var Yr = it("FullYear", !0);
function Ss() {
  return ua(this.year());
}
function it(e, t) {
  return function(a) {
    return a != null ? (Tr(this, e, a), d.updateOffset(this, t), this) : ht(this, e);
  };
}
function ht(e, t) {
  if (!e.isValid())
    return NaN;
  var a = e._d, n = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return n ? a.getUTCMilliseconds() : a.getMilliseconds();
    case "Seconds":
      return n ? a.getUTCSeconds() : a.getSeconds();
    case "Minutes":
      return n ? a.getUTCMinutes() : a.getMinutes();
    case "Hours":
      return n ? a.getUTCHours() : a.getHours();
    case "Date":
      return n ? a.getUTCDate() : a.getDate();
    case "Day":
      return n ? a.getUTCDay() : a.getDay();
    case "Month":
      return n ? a.getUTCMonth() : a.getMonth();
    case "FullYear":
      return n ? a.getUTCFullYear() : a.getFullYear();
    default:
      return NaN;
  }
}
function Tr(e, t, a) {
  var n, r, i, s, o;
  if (!(!e.isValid() || isNaN(a))) {
    switch (n = e._d, r = e._isUTC, t) {
      case "Milliseconds":
        return void (r ? n.setUTCMilliseconds(a) : n.setMilliseconds(a));
      case "Seconds":
        return void (r ? n.setUTCSeconds(a) : n.setSeconds(a));
      case "Minutes":
        return void (r ? n.setUTCMinutes(a) : n.setMinutes(a));
      case "Hours":
        return void (r ? n.setUTCHours(a) : n.setHours(a));
      case "Date":
        return void (r ? n.setUTCDate(a) : n.setDate(a));
      case "FullYear":
        break;
      default:
        return;
    }
    i = a, s = e.month(), o = e.date(), o = o === 29 && s === 1 && !ua(i) ? 28 : o, r ? n.setUTCFullYear(i, s, o) : n.setFullYear(i, s, o);
  }
}
function xs(e) {
  return e = J(e), me(this[e]) ? this[e]() : this;
}
function Ms(e, t) {
  if (typeof e == "object") {
    e = an(e);
    var a = vs(e), n, r = a.length;
    for (n = 0; n < r; n++)
      this[a[n].unit](e[a[n].unit]);
  } else if (e = J(e), me(this[e]))
    return this[e](t);
  return this;
}
function Os(e, t) {
  return (e % t + t) % t;
}
var E;
Array.prototype.indexOf ? E = Array.prototype.indexOf : E = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function on(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var a = Os(t, 12);
  return e += (t - a) / 12, a === 1 ? ua(e) ? 29 : 28 : 31 - a % 7 % 2;
}
g("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
g("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
g("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
v("M", A, rt);
v("MM", A, B);
v("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
v("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
D(["M", "MM"], function(e, t) {
  t[ge] = w(e) - 1;
});
D(["MMM", "MMMM"], function(e, t, a, n) {
  var r = a._locale.monthsParse(e, n, a._strict);
  r != null ? t[ge] = r : k(a).invalidMonth = e;
});
var Ds = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Nr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Pr = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Ys = Ot, Ts = Ot;
function Ns(e, t) {
  return e ? ie(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Pr).test(t) ? "format" : "standalone"][e.month()] : ie(this._months) ? this._months : this._months.standalone;
}
function Ps(e, t) {
  return e ? ie(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Pr.test(t) ? "format" : "standalone"][e.month()] : ie(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function As(e, t, a) {
  var n, r, i, s = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n)
      i = de([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(
        i,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[n] = this.months(i, "").toLocaleLowerCase();
  return a ? t === "MMM" ? (r = E.call(this._shortMonthsParse, s), r !== -1 ? r : null) : (r = E.call(this._longMonthsParse, s), r !== -1 ? r : null) : t === "MMM" ? (r = E.call(this._shortMonthsParse, s), r !== -1 ? r : (r = E.call(this._longMonthsParse, s), r !== -1 ? r : null)) : (r = E.call(this._longMonthsParse, s), r !== -1 ? r : (r = E.call(this._shortMonthsParse, s), r !== -1 ? r : null));
}
function Cs(e, t, a) {
  var n, r, i;
  if (this._monthsParseExact)
    return As.call(this, e, t, a);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
    if (r = de([2e3, n]), a && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp(
      "^" + this.months(r, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[n] = new RegExp(
      "^" + this.monthsShort(r, "").replace(".", "") + "$",
      "i"
    )), !a && !this._monthsParse[n] && (i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[n] = new RegExp(i.replace(".", ""), "i")), a && t === "MMMM" && this._longMonthsParse[n].test(e))
      return n;
    if (a && t === "MMM" && this._shortMonthsParse[n].test(e))
      return n;
    if (!a && this._monthsParse[n].test(e))
      return n;
  }
}
function Ar(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = w(t);
    else if (t = e.localeData().monthsParse(t), !ke(t))
      return e;
  }
  var a = t, n = e.date();
  return n = n < 29 ? n : Math.min(n, on(e.year(), a)), e._isUTC ? e._d.setUTCMonth(a, n) : e._d.setMonth(a, n), e;
}
function Cr(e) {
  return e != null ? (Ar(this, e), d.updateOffset(this, !0), this) : ht(this, "Month");
}
function Is() {
  return on(this.year(), this.month());
}
function Es(e) {
  return this._monthsParseExact ? (x(this, "_monthsRegex") || Ir.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (x(this, "_monthsShortRegex") || (this._monthsShortRegex = Ys), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Rs(e) {
  return this._monthsParseExact ? (x(this, "_monthsRegex") || Ir.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (x(this, "_monthsRegex") || (this._monthsRegex = Ts), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Ir() {
  function e(l, f) {
    return f.length - l.length;
  }
  var t = [], a = [], n = [], r, i, s, o;
  for (r = 0; r < 12; r++)
    i = de([2e3, r]), s = be(this.monthsShort(i, "")), o = be(this.months(i, "")), t.push(s), a.push(o), n.push(o), n.push(s);
  t.sort(e), a.sort(e), n.sort(e), this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + a.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function Ls(e, t, a, n, r, i, s) {
  var o;
  return e < 100 && e >= 0 ? (o = new Date(e + 400, t, a, n, r, i, s), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, a, n, r, i, s), o;
}
function vt(e) {
  var t, a;
  return e < 100 && e >= 0 ? (a = Array.prototype.slice.call(arguments), a[0] = e + 400, t = new Date(Date.UTC.apply(null, a)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function qt(e, t, a) {
  var n = 7 + t - a, r = (7 + vt(e, 0, n).getUTCDay() - t) % 7;
  return -r + n - 1;
}
function Er(e, t, a, n, r) {
  var i = (7 + a - n) % 7, s = qt(e, n, r), o = 1 + 7 * (t - 1) + i + s, l, f;
  return o <= 0 ? (l = e - 1, f = ut(l) + o) : o > ut(e) ? (l = e + 1, f = o - ut(e)) : (l = e, f = o), {
    year: l,
    dayOfYear: f
  };
}
function yt(e, t, a) {
  var n = qt(e.year(), t, a), r = Math.floor((e.dayOfYear() - n - 1) / 7) + 1, i, s;
  return r < 1 ? (s = e.year() - 1, i = r + _e(s, t, a)) : r > _e(e.year(), t, a) ? (i = r - _e(e.year(), t, a), s = e.year() + 1) : (s = e.year(), i = r), {
    week: i,
    year: s
  };
}
function _e(e, t, a) {
  var n = qt(e, t, a), r = qt(e + 1, t, a);
  return (ut(e) - n + r) / 7;
}
g("w", ["ww", 2], "wo", "week");
g("W", ["WW", 2], "Wo", "isoWeek");
v("w", A, rt);
v("ww", A, B);
v("W", A, rt);
v("WW", A, B);
Dt(
  ["w", "ww", "W", "WW"],
  function(e, t, a, n) {
    t[n.substr(0, 1)] = w(e);
  }
);
function Fs(e) {
  return yt(e, this._week.dow, this._week.doy).week;
}
var Ws = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function Us() {
  return this._week.dow;
}
function js() {
  return this._week.doy;
}
function zs(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Hs(e) {
  var t = yt(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
g("d", 0, "do", "day");
g("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
g("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
g("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
g("e", 0, 0, "weekday");
g("E", 0, 0, "isoWeekday");
v("d", A);
v("e", A);
v("E", A);
v("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
v("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
v("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Dt(["dd", "ddd", "dddd"], function(e, t, a, n) {
  var r = a._locale.weekdaysParse(e, n, a._strict);
  r != null ? t.d = r : k(a).invalidWeekday = e;
});
Dt(["d", "e", "E"], function(e, t, a, n) {
  t[n] = w(e);
});
function Vs(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Gs(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function ln(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var $s = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Rr = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Bs = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Zs = Ot, qs = Ot, Xs = Ot;
function Ks(e, t) {
  var a = ie(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? ln(a, this._week.dow) : e ? a[e.day()] : a;
}
function Js(e) {
  return e === !0 ? ln(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Qs(e) {
  return e === !0 ? ln(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function eo(e, t, a) {
  var n, r, i, s = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n)
      i = de([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(
        i,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(
        i,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(i, "").toLocaleLowerCase();
  return a ? t === "dddd" ? (r = E.call(this._weekdaysParse, s), r !== -1 ? r : null) : t === "ddd" ? (r = E.call(this._shortWeekdaysParse, s), r !== -1 ? r : null) : (r = E.call(this._minWeekdaysParse, s), r !== -1 ? r : null) : t === "dddd" ? (r = E.call(this._weekdaysParse, s), r !== -1 || (r = E.call(this._shortWeekdaysParse, s), r !== -1) ? r : (r = E.call(this._minWeekdaysParse, s), r !== -1 ? r : null)) : t === "ddd" ? (r = E.call(this._shortWeekdaysParse, s), r !== -1 || (r = E.call(this._weekdaysParse, s), r !== -1) ? r : (r = E.call(this._minWeekdaysParse, s), r !== -1 ? r : null)) : (r = E.call(this._minWeekdaysParse, s), r !== -1 || (r = E.call(this._weekdaysParse, s), r !== -1) ? r : (r = E.call(this._shortWeekdaysParse, s), r !== -1 ? r : null));
}
function to(e, t, a) {
  var n, r, i;
  if (this._weekdaysParseExact)
    return eo.call(this, e, t, a);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
    if (r = de([2e3, 1]).day(n), a && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp(
      "^" + this.weekdays(r, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[n] || (i = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[n] = new RegExp(i.replace(".", ""), "i")), a && t === "dddd" && this._fullWeekdaysParse[n].test(e))
      return n;
    if (a && t === "ddd" && this._shortWeekdaysParse[n].test(e))
      return n;
    if (a && t === "dd" && this._minWeekdaysParse[n].test(e))
      return n;
    if (!a && this._weekdaysParse[n].test(e))
      return n;
  }
}
function ao(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = ht(this, "Day");
  return e != null ? (e = Vs(e, this.localeData()), this.add(e - t, "d")) : t;
}
function no(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function ro(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Gs(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function io(e) {
  return this._weekdaysParseExact ? (x(this, "_weekdaysRegex") || fn.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (x(this, "_weekdaysRegex") || (this._weekdaysRegex = Zs), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function so(e) {
  return this._weekdaysParseExact ? (x(this, "_weekdaysRegex") || fn.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (x(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = qs), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function oo(e) {
  return this._weekdaysParseExact ? (x(this, "_weekdaysRegex") || fn.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (x(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Xs), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function fn() {
  function e(u, m) {
    return m.length - u.length;
  }
  var t = [], a = [], n = [], r = [], i, s, o, l, f;
  for (i = 0; i < 7; i++)
    s = de([2e3, 1]).day(i), o = be(this.weekdaysMin(s, "")), l = be(this.weekdaysShort(s, "")), f = be(this.weekdays(s, "")), t.push(o), a.push(l), n.push(f), r.push(o), r.push(l), r.push(f);
  t.sort(e), a.sort(e), n.sort(e), r.sort(e), this._weekdaysRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + a.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function un() {
  return this.hours() % 12 || 12;
}
function lo() {
  return this.hours() || 24;
}
g("H", ["HH", 2], 0, "hour");
g("h", ["hh", 2], 0, un);
g("k", ["kk", 2], 0, lo);
g("hmm", 0, 0, function() {
  return "" + un.apply(this) + ce(this.minutes(), 2);
});
g("hmmss", 0, 0, function() {
  return "" + un.apply(this) + ce(this.minutes(), 2) + ce(this.seconds(), 2);
});
g("Hmm", 0, 0, function() {
  return "" + this.hours() + ce(this.minutes(), 2);
});
g("Hmmss", 0, 0, function() {
  return "" + this.hours() + ce(this.minutes(), 2) + ce(this.seconds(), 2);
});
function Lr(e, t) {
  g(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
Lr("a", !0);
Lr("A", !1);
function Fr(e, t) {
  return t._meridiemParse;
}
v("a", Fr);
v("A", Fr);
v("H", A, sn);
v("h", A, rt);
v("k", A, rt);
v("HH", A, B);
v("hh", A, B);
v("kk", A, B);
v("hmm", Or);
v("hmmss", Dr);
v("Hmm", Or);
v("Hmmss", Dr);
D(["H", "HH"], W);
D(["k", "kk"], function(e, t, a) {
  var n = w(e);
  t[W] = n === 24 ? 0 : n;
});
D(["a", "A"], function(e, t, a) {
  a._isPm = a._locale.isPM(e), a._meridiem = e;
});
D(["h", "hh"], function(e, t, a) {
  t[W] = w(e), k(a).bigHour = !0;
});
D("hmm", function(e, t, a) {
  var n = e.length - 2;
  t[W] = w(e.substr(0, n)), t[ne] = w(e.substr(n)), k(a).bigHour = !0;
});
D("hmmss", function(e, t, a) {
  var n = e.length - 4, r = e.length - 2;
  t[W] = w(e.substr(0, n)), t[ne] = w(e.substr(n, 2)), t[pe] = w(e.substr(r)), k(a).bigHour = !0;
});
D("Hmm", function(e, t, a) {
  var n = e.length - 2;
  t[W] = w(e.substr(0, n)), t[ne] = w(e.substr(n));
});
D("Hmmss", function(e, t, a) {
  var n = e.length - 4, r = e.length - 2;
  t[W] = w(e.substr(0, n)), t[ne] = w(e.substr(n, 2)), t[pe] = w(e.substr(r));
});
function fo(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var uo = /[ap]\.?m?\.?/i, co = it("Hours", !0);
function mo(e, t, a) {
  return e > 11 ? a ? "pm" : "PM" : a ? "am" : "AM";
}
var Wr = {
  calendar: es,
  longDateFormat: rs,
  invalidDate: ss,
  ordinal: ls,
  dayOfMonthOrdinalParse: fs,
  relativeTime: cs,
  months: Ds,
  monthsShort: Nr,
  week: Ws,
  weekdays: $s,
  weekdaysMin: Bs,
  weekdaysShort: Rr,
  meridiemParse: uo
}, C = {}, ot = {}, gt;
function ho(e, t) {
  var a, n = Math.min(e.length, t.length);
  for (a = 0; a < n; a += 1)
    if (e[a] !== t[a])
      return a;
  return n;
}
function Ln(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function vo(e) {
  for (var t = 0, a, n, r, i; t < e.length; ) {
    for (i = Ln(e[t]).split("-"), a = i.length, n = Ln(e[t + 1]), n = n ? n.split("-") : null; a > 0; ) {
      if (r = ca(i.slice(0, a).join("-")), r)
        return r;
      if (n && n.length >= a && ho(i, n) >= a - 1)
        break;
      a--;
    }
    t++;
  }
  return gt;
}
function yo(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function ca(e) {
  var t = null, a;
  if (C[e] === void 0 && typeof module < "u" && module && module.exports && yo(e))
    try {
      t = gt._abbr, a = require, a("./locale/" + e), Ae(t);
    } catch {
      C[e] = null;
    }
  return C[e];
}
function Ae(e, t) {
  var a;
  return e && ($(t) ? a = Me(e) : a = cn(e, t), a ? gt = a : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), gt._abbr;
}
function cn(e, t) {
  if (t !== null) {
    var a, n = Wr;
    if (t.abbr = e, C[e] != null)
      wr(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), n = C[e]._config;
    else if (t.parentLocale != null)
      if (C[t.parentLocale] != null)
        n = C[t.parentLocale]._config;
      else if (a = ca(t.parentLocale), a != null)
        n = a._config;
      else
        return ot[t.parentLocale] || (ot[t.parentLocale] = []), ot[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return C[e] = new en(Pa(n, t)), ot[e] && ot[e].forEach(function(r) {
      cn(r.name, r.config);
    }), Ae(e), C[e];
  } else
    return delete C[e], null;
}
function go(e, t) {
  if (t != null) {
    var a, n, r = Wr;
    C[e] != null && C[e].parentLocale != null ? C[e].set(Pa(C[e]._config, t)) : (n = ca(e), n != null && (r = n._config), t = Pa(r, t), n == null && (t.abbr = e), a = new en(t), a.parentLocale = C[e], C[e] = a), Ae(e);
  } else
    C[e] != null && (C[e].parentLocale != null ? (C[e] = C[e].parentLocale, e === Ae() && Ae(e)) : C[e] != null && delete C[e]);
  return C[e];
}
function Me(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return gt;
  if (!ie(e)) {
    if (t = ca(e), t)
      return t;
    e = [e];
  }
  return vo(e);
}
function po() {
  return Aa(C);
}
function dn(e) {
  var t, a = e._a;
  return a && k(e).overflow === -2 && (t = a[ge] < 0 || a[ge] > 11 ? ge : a[fe] < 1 || a[fe] > on(a[H], a[ge]) ? fe : a[W] < 0 || a[W] > 24 || a[W] === 24 && (a[ne] !== 0 || a[pe] !== 0 || a[We] !== 0) ? W : a[ne] < 0 || a[ne] > 59 ? ne : a[pe] < 0 || a[pe] > 59 ? pe : a[We] < 0 || a[We] > 999 ? We : -1, k(e)._overflowDayOfYear && (t < H || t > fe) && (t = fe), k(e)._overflowWeeks && t === -1 && (t = ks), k(e)._overflowWeekday && t === -1 && (t = ws), k(e).overflow = t), e;
}
var bo = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, _o = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ko = /Z|[+-]\d\d(?::?\d\d)?/, At = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], Sa = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], wo = /^\/?Date\((-?\d+)/i, So = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, xo = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function Ur(e) {
  var t, a, n = e._i, r = bo.exec(n) || _o.exec(n), i, s, o, l, f = At.length, u = Sa.length;
  if (r) {
    for (k(e).iso = !0, t = 0, a = f; t < a; t++)
      if (At[t][1].exec(r[1])) {
        s = At[t][0], i = At[t][2] !== !1;
        break;
      }
    if (s == null) {
      e._isValid = !1;
      return;
    }
    if (r[3]) {
      for (t = 0, a = u; t < a; t++)
        if (Sa[t][1].exec(r[3])) {
          o = (r[2] || " ") + Sa[t][0];
          break;
        }
      if (o == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!i && o != null) {
      e._isValid = !1;
      return;
    }
    if (r[4])
      if (ko.exec(r[4]))
        l = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = s + (o || "") + (l || ""), hn(e);
  } else
    e._isValid = !1;
}
function Mo(e, t, a, n, r, i) {
  var s = [
    Oo(e),
    Nr.indexOf(t),
    parseInt(a, 10),
    parseInt(n, 10),
    parseInt(r, 10)
  ];
  return i && s.push(parseInt(i, 10)), s;
}
function Oo(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Do(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Yo(e, t, a) {
  if (e) {
    var n = Rr.indexOf(e), r = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (n !== r)
      return k(a).weekdayMismatch = !0, a._isValid = !1, !1;
  }
  return !0;
}
function To(e, t, a) {
  if (e)
    return xo[e];
  if (t)
    return 0;
  var n = parseInt(a, 10), r = n % 100, i = (n - r) / 100;
  return i * 60 + r;
}
function jr(e) {
  var t = So.exec(Do(e._i)), a;
  if (t) {
    if (a = Mo(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !Yo(t[1], a, e))
      return;
    e._a = a, e._tzm = To(t[8], t[9], t[10]), e._d = vt.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), k(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function No(e) {
  var t = wo.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (Ur(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (jr(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : d.createFromInputFallback(e);
}
d.createFromInputFallback = K(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Be(e, t, a) {
  return e ?? t ?? a;
}
function Po(e) {
  var t = new Date(d.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function mn(e) {
  var t, a, n = [], r, i, s;
  if (!e._d) {
    for (r = Po(e), e._w && e._a[fe] == null && e._a[ge] == null && Ao(e), e._dayOfYear != null && (s = Be(e._a[H], r[H]), (e._dayOfYear > ut(s) || e._dayOfYear === 0) && (k(e)._overflowDayOfYear = !0), a = vt(s, 0, e._dayOfYear), e._a[ge] = a.getUTCMonth(), e._a[fe] = a.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = n[t] = r[t];
    for (; t < 7; t++)
      e._a[t] = n[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[W] === 24 && e._a[ne] === 0 && e._a[pe] === 0 && e._a[We] === 0 && (e._nextDay = !0, e._a[W] = 0), e._d = (e._useUTC ? vt : Ls).apply(
      null,
      n
    ), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[W] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (k(e).weekdayMismatch = !0);
  }
}
function Ao(e) {
  var t, a, n, r, i, s, o, l, f;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (i = 1, s = 4, a = Be(
    t.GG,
    e._a[H],
    yt(P(), 1, 4).year
  ), n = Be(t.W, 1), r = Be(t.E, 1), (r < 1 || r > 7) && (l = !0)) : (i = e._locale._week.dow, s = e._locale._week.doy, f = yt(P(), i, s), a = Be(t.gg, e._a[H], f.year), n = Be(t.w, f.week), t.d != null ? (r = t.d, (r < 0 || r > 6) && (l = !0)) : t.e != null ? (r = t.e + i, (t.e < 0 || t.e > 6) && (l = !0)) : r = i), n < 1 || n > _e(a, i, s) ? k(e)._overflowWeeks = !0 : l != null ? k(e)._overflowWeekday = !0 : (o = Er(a, n, r, i, s), e._a[H] = o.year, e._dayOfYear = o.dayOfYear);
}
d.ISO_8601 = function() {
};
d.RFC_2822 = function() {
};
function hn(e) {
  if (e._f === d.ISO_8601) {
    Ur(e);
    return;
  }
  if (e._f === d.RFC_2822) {
    jr(e);
    return;
  }
  e._a = [], k(e).empty = !0;
  var t = "" + e._i, a, n, r, i, s, o = t.length, l = 0, f, u;
  for (r = Sr(e._f, e._locale).match(tn) || [], u = r.length, a = 0; a < u; a++)
    i = r[a], n = (t.match(ps(i, e)) || [])[0], n && (s = t.substr(0, t.indexOf(n)), s.length > 0 && k(e).unusedInput.push(s), t = t.slice(
      t.indexOf(n) + n.length
    ), l += n.length), Je[i] ? (n ? k(e).empty = !1 : k(e).unusedTokens.push(i), _s(i, n, e)) : e._strict && !n && k(e).unusedTokens.push(i);
  k(e).charsLeftOver = o - l, t.length > 0 && k(e).unusedInput.push(t), e._a[W] <= 12 && k(e).bigHour === !0 && e._a[W] > 0 && (k(e).bigHour = void 0), k(e).parsedDateParts = e._a.slice(0), k(e).meridiem = e._meridiem, e._a[W] = Co(
    e._locale,
    e._a[W],
    e._meridiem
  ), f = k(e).era, f !== null && (e._a[H] = e._locale.erasConvertYear(f, e._a[H])), mn(e), dn(e);
}
function Co(e, t, a) {
  var n;
  return a == null ? t : e.meridiemHour != null ? e.meridiemHour(t, a) : (e.isPM != null && (n = e.isPM(a), n && t < 12 && (t += 12), !n && t === 12 && (t = 0)), t);
}
function Io(e) {
  var t, a, n, r, i, s, o = !1, l = e._f.length;
  if (l === 0) {
    k(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (r = 0; r < l; r++)
    i = 0, s = !1, t = Qa({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[r], hn(t), Ja(t) && (s = !0), i += k(t).charsLeftOver, i += k(t).unusedTokens.length * 10, k(t).score = i, o ? i < n && (n = i, a = t) : (n == null || i < n || s) && (n = i, a = t, s && (o = !0));
  Ne(e, a || t);
}
function Eo(e) {
  if (!e._d) {
    var t = an(e._i), a = t.day === void 0 ? t.date : t.day;
    e._a = _r(
      [t.year, t.month, a, t.hour, t.minute, t.second, t.millisecond],
      function(n) {
        return n && parseInt(n, 10);
      }
    ), mn(e);
  }
}
function Ro(e) {
  var t = new Mt(dn(zr(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function zr(e) {
  var t = e._i, a = e._f;
  return e._locale = e._locale || Me(e._l), t === null || a === void 0 && t === "" ? ra({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), se(t) ? new Mt(dn(t)) : (xt(t) ? e._d = t : ie(a) ? Io(e) : a ? hn(e) : Lo(e), Ja(e) || (e._d = null), e));
}
function Lo(e) {
  var t = e._i;
  $(t) ? e._d = new Date(d.now()) : xt(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? No(e) : ie(t) ? (e._a = _r(t.slice(0), function(a) {
    return parseInt(a, 10);
  }), mn(e)) : ze(t) ? Eo(e) : ke(t) ? e._d = new Date(t) : d.createFromInputFallback(e);
}
function Hr(e, t, a, n, r) {
  var i = {};
  return (t === !0 || t === !1) && (n = t, t = void 0), (a === !0 || a === !1) && (n = a, a = void 0), (ze(e) && Ka(e) || ie(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = r, i._l = a, i._i = e, i._f = t, i._strict = n, Ro(i);
}
function P(e, t, a, n) {
  return Hr(e, t, a, n, !1);
}
var Fo = K(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = P.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : ra();
  }
), Wo = K(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = P.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : ra();
  }
);
function Vr(e, t) {
  var a, n;
  if (t.length === 1 && ie(t[0]) && (t = t[0]), !t.length)
    return P();
  for (a = t[0], n = 1; n < t.length; ++n)
    (!t[n].isValid() || t[n][e](a)) && (a = t[n]);
  return a;
}
function Uo() {
  var e = [].slice.call(arguments, 0);
  return Vr("isBefore", e);
}
function jo() {
  var e = [].slice.call(arguments, 0);
  return Vr("isAfter", e);
}
var zo = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, lt = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function Ho(e) {
  var t, a = !1, n, r = lt.length;
  for (t in e)
    if (x(e, t) && !(E.call(lt, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (n = 0; n < r; ++n)
    if (e[lt[n]]) {
      if (a)
        return !1;
      parseFloat(e[lt[n]]) !== w(e[lt[n]]) && (a = !0);
    }
  return !0;
}
function Vo() {
  return this._isValid;
}
function Go() {
  return oe(NaN);
}
function da(e) {
  var t = an(e), a = t.year || 0, n = t.quarter || 0, r = t.month || 0, i = t.week || t.isoWeek || 0, s = t.day || 0, o = t.hour || 0, l = t.minute || 0, f = t.second || 0, u = t.millisecond || 0;
  this._isValid = Ho(t), this._milliseconds = +u + f * 1e3 + // 1000
  l * 6e4 + // 1000 * 60
  o * 1e3 * 60 * 60, this._days = +s + i * 7, this._months = +r + n * 3 + a * 12, this._data = {}, this._locale = Me(), this._bubble();
}
function Vt(e) {
  return e instanceof da;
}
function Ia(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function $o(e, t, a) {
  var n = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), i = 0, s;
  for (s = 0; s < n; s++)
    w(e[s]) !== w(t[s]) && i++;
  return i + r;
}
function Gr(e, t) {
  g(e, 0, 0, function() {
    var a = this.utcOffset(), n = "+";
    return a < 0 && (a = -a, n = "-"), n + ce(~~(a / 60), 2) + t + ce(~~a % 60, 2);
  });
}
Gr("Z", ":");
Gr("ZZ", "");
v("Z", fa);
v("ZZ", fa);
D(["Z", "ZZ"], function(e, t, a) {
  a._useUTC = !0, a._tzm = vn(fa, e);
});
var Bo = /([\+\-]|\d\d)/gi;
function vn(e, t) {
  var a = (t || "").match(e), n, r, i;
  return a === null ? null : (n = a[a.length - 1] || [], r = (n + "").match(Bo) || ["-", 0, 0], i = +(r[1] * 60) + w(r[2]), i === 0 ? 0 : r[0] === "+" ? i : -i);
}
function yn(e, t) {
  var a, n;
  return t._isUTC ? (a = t.clone(), n = (se(e) || xt(e) ? e.valueOf() : P(e).valueOf()) - a.valueOf(), a._d.setTime(a._d.valueOf() + n), d.updateOffset(a, !1), a) : P(e).local();
}
function Ea(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
d.updateOffset = function() {
};
function Zo(e, t, a) {
  var n = this._offset || 0, r;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = vn(fa, e), e === null)
        return this;
    } else Math.abs(e) < 16 && !a && (e = e * 60);
    return !this._isUTC && t && (r = Ea(this)), this._offset = e, this._isUTC = !0, r != null && this.add(r, "m"), n !== e && (!t || this._changeInProgress ? Zr(
      this,
      oe(e - n, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, d.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? n : Ea(this);
}
function qo(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Xo(e) {
  return this.utcOffset(0, e);
}
function Ko(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ea(this), "m")), this;
}
function Jo() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = vn(ys, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Qo(e) {
  return this.isValid() ? (e = e ? P(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function el() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function tl() {
  if (!$(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Qa(e, this), e = zr(e), e._a ? (t = e._isUTC ? de(e._a) : P(e._a), this._isDSTShifted = this.isValid() && $o(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function al() {
  return this.isValid() ? !this._isUTC : !1;
}
function nl() {
  return this.isValid() ? this._isUTC : !1;
}
function $r() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var rl = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, il = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function oe(e, t) {
  var a = e, n = null, r, i, s;
  return Vt(e) ? a = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : ke(e) || !isNaN(+e) ? (a = {}, t ? a[t] = +e : a.milliseconds = +e) : (n = rl.exec(e)) ? (r = n[1] === "-" ? -1 : 1, a = {
    y: 0,
    d: w(n[fe]) * r,
    h: w(n[W]) * r,
    m: w(n[ne]) * r,
    s: w(n[pe]) * r,
    ms: w(Ia(n[We] * 1e3)) * r
    // the millisecond decimal point is included in the match
  }) : (n = il.exec(e)) ? (r = n[1] === "-" ? -1 : 1, a = {
    y: Le(n[2], r),
    M: Le(n[3], r),
    w: Le(n[4], r),
    d: Le(n[5], r),
    h: Le(n[6], r),
    m: Le(n[7], r),
    s: Le(n[8], r)
  }) : a == null ? a = {} : typeof a == "object" && ("from" in a || "to" in a) && (s = sl(
    P(a.from),
    P(a.to)
  ), a = {}, a.ms = s.milliseconds, a.M = s.months), i = new da(a), Vt(e) && x(e, "_locale") && (i._locale = e._locale), Vt(e) && x(e, "_isValid") && (i._isValid = e._isValid), i;
}
oe.fn = da.prototype;
oe.invalid = Go;
function Le(e, t) {
  var a = e && parseFloat(e.replace(",", "."));
  return (isNaN(a) ? 0 : a) * t;
}
function Fn(e, t) {
  var a = {};
  return a.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(a.months, "M").isAfter(t) && --a.months, a.milliseconds = +t - +e.clone().add(a.months, "M"), a;
}
function sl(e, t) {
  var a;
  return e.isValid() && t.isValid() ? (t = yn(t, e), e.isBefore(t) ? a = Fn(e, t) : (a = Fn(t, e), a.milliseconds = -a.milliseconds, a.months = -a.months), a) : { milliseconds: 0, months: 0 };
}
function Br(e, t) {
  return function(a, n) {
    var r, i;
    return n !== null && !isNaN(+n) && (wr(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), i = a, a = n, n = i), r = oe(a, n), Zr(this, r, e), this;
  };
}
function Zr(e, t, a, n) {
  var r = t._milliseconds, i = Ia(t._days), s = Ia(t._months);
  e.isValid() && (n = n ?? !0, s && Ar(e, ht(e, "Month") + s * a), i && Tr(e, "Date", ht(e, "Date") + i * a), r && e._d.setTime(e._d.valueOf() + r * a), n && d.updateOffset(e, i || s));
}
var ol = Br(1, "add"), ll = Br(-1, "subtract");
function qr(e) {
  return typeof e == "string" || e instanceof String;
}
function fl(e) {
  return se(e) || xt(e) || qr(e) || ke(e) || cl(e) || ul(e) || e === null || e === void 0;
}
function ul(e) {
  var t = ze(e) && !Ka(e), a = !1, n = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], r, i, s = n.length;
  for (r = 0; r < s; r += 1)
    i = n[r], a = a || x(e, i);
  return t && a;
}
function cl(e) {
  var t = ie(e), a = !1;
  return t && (a = e.filter(function(n) {
    return !ke(n) && qr(e);
  }).length === 0), t && a;
}
function dl(e) {
  var t = ze(e) && !Ka(e), a = !1, n = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], r, i;
  for (r = 0; r < n.length; r += 1)
    i = n[r], a = a || x(e, i);
  return t && a;
}
function ml(e, t) {
  var a = e.diff(t, "days", !0);
  return a < -6 ? "sameElse" : a < -1 ? "lastWeek" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : a < 7 ? "nextWeek" : "sameElse";
}
function hl(e, t) {
  arguments.length === 1 && (arguments[0] ? fl(arguments[0]) ? (e = arguments[0], t = void 0) : dl(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var a = e || P(), n = yn(a, this).startOf("day"), r = d.calendarFormat(this, n) || "sameElse", i = t && (me(t[r]) ? t[r].call(this, a) : t[r]);
  return this.format(
    i || this.localeData().calendar(r, this, P(a))
  );
}
function vl() {
  return new Mt(this);
}
function yl(e, t) {
  var a = se(e) ? e : P(e);
  return this.isValid() && a.isValid() ? (t = J(t) || "millisecond", t === "millisecond" ? this.valueOf() > a.valueOf() : a.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function gl(e, t) {
  var a = se(e) ? e : P(e);
  return this.isValid() && a.isValid() ? (t = J(t) || "millisecond", t === "millisecond" ? this.valueOf() < a.valueOf() : this.clone().endOf(t).valueOf() < a.valueOf()) : !1;
}
function pl(e, t, a, n) {
  var r = se(e) ? e : P(e), i = se(t) ? t : P(t);
  return this.isValid() && r.isValid() && i.isValid() ? (n = n || "()", (n[0] === "(" ? this.isAfter(r, a) : !this.isBefore(r, a)) && (n[1] === ")" ? this.isBefore(i, a) : !this.isAfter(i, a))) : !1;
}
function bl(e, t) {
  var a = se(e) ? e : P(e), n;
  return this.isValid() && a.isValid() ? (t = J(t) || "millisecond", t === "millisecond" ? this.valueOf() === a.valueOf() : (n = a.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) : !1;
}
function _l(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function kl(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function wl(e, t, a) {
  var n, r, i;
  if (!this.isValid())
    return NaN;
  if (n = yn(e, this), !n.isValid())
    return NaN;
  switch (r = (n.utcOffset() - this.utcOffset()) * 6e4, t = J(t), t) {
    case "year":
      i = Gt(this, n) / 12;
      break;
    case "month":
      i = Gt(this, n);
      break;
    case "quarter":
      i = Gt(this, n) / 3;
      break;
    case "second":
      i = (this - n) / 1e3;
      break;
    case "minute":
      i = (this - n) / 6e4;
      break;
    case "hour":
      i = (this - n) / 36e5;
      break;
    case "day":
      i = (this - n - r) / 864e5;
      break;
    case "week":
      i = (this - n - r) / 6048e5;
      break;
    default:
      i = this - n;
  }
  return a ? i : q(i);
}
function Gt(e, t) {
  if (e.date() < t.date())
    return -Gt(t, e);
  var a = (t.year() - e.year()) * 12 + (t.month() - e.month()), n = e.clone().add(a, "months"), r, i;
  return t - n < 0 ? (r = e.clone().add(a - 1, "months"), i = (t - n) / (n - r)) : (r = e.clone().add(a + 1, "months"), i = (t - n) / (r - n)), -(a + i) || 0;
}
d.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
d.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function Sl() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function xl(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, a = t ? this.clone().utc() : this;
  return a.year() < 0 || a.year() > 9999 ? Ht(
    a,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : me(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Ht(a, "Z")) : Ht(
    a,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function Ml() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", a, n, r, i;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), a = "[" + e + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", r = "-MM-DD[T]HH:mm:ss.SSS", i = t + '[")]', this.format(a + n + r + i);
}
function Ol(e) {
  e || (e = this.isUtc() ? d.defaultFormatUtc : d.defaultFormat);
  var t = Ht(this, e);
  return this.localeData().postformat(t);
}
function Dl(e, t) {
  return this.isValid() && (se(e) && e.isValid() || P(e).isValid()) ? oe({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Yl(e) {
  return this.from(P(), e);
}
function Tl(e, t) {
  return this.isValid() && (se(e) && e.isValid() || P(e).isValid()) ? oe({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Nl(e) {
  return this.to(P(), e);
}
function Xr(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = Me(e), t != null && (this._locale = t), this);
}
var Kr = K(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Jr() {
  return this._locale;
}
var Xt = 1e3, Qe = 60 * Xt, Kt = 60 * Qe, Qr = (365 * 400 + 97) * 24 * Kt;
function et(e, t) {
  return (e % t + t) % t;
}
function ei(e, t, a) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, a) - Qr : new Date(e, t, a).valueOf();
}
function ti(e, t, a) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, a) - Qr : Date.UTC(e, t, a);
}
function Pl(e) {
  var t, a;
  if (e = J(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (a = this._isUTC ? ti : ei, e) {
    case "year":
      t = a(this.year(), 0, 1);
      break;
    case "quarter":
      t = a(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = a(this.year(), this.month(), 1);
      break;
    case "week":
      t = a(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = a(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = a(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= et(
        t + (this._isUTC ? 0 : this.utcOffset() * Qe),
        Kt
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= et(t, Qe);
      break;
    case "second":
      t = this._d.valueOf(), t -= et(t, Xt);
      break;
  }
  return this._d.setTime(t), d.updateOffset(this, !0), this;
}
function Al(e) {
  var t, a;
  if (e = J(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (a = this._isUTC ? ti : ei, e) {
    case "year":
      t = a(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = a(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = a(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = a(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = a(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = a(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += Kt - et(
        t + (this._isUTC ? 0 : this.utcOffset() * Qe),
        Kt
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Qe - et(t, Qe) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Xt - et(t, Xt) - 1;
      break;
  }
  return this._d.setTime(t), d.updateOffset(this, !0), this;
}
function Cl() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Il() {
  return Math.floor(this.valueOf() / 1e3);
}
function El() {
  return new Date(this.valueOf());
}
function Rl() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function Ll() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function Fl() {
  return this.isValid() ? this.toISOString() : null;
}
function Wl() {
  return Ja(this);
}
function Ul() {
  return Ne({}, k(this));
}
function jl() {
  return k(this).overflow;
}
function zl() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
g("N", 0, 0, "eraAbbr");
g("NN", 0, 0, "eraAbbr");
g("NNN", 0, 0, "eraAbbr");
g("NNNN", 0, 0, "eraName");
g("NNNNN", 0, 0, "eraNarrow");
g("y", ["y", 1], "yo", "eraYear");
g("y", ["yy", 2], 0, "eraYear");
g("y", ["yyy", 3], 0, "eraYear");
g("y", ["yyyy", 4], 0, "eraYear");
v("N", gn);
v("NN", gn);
v("NNN", gn);
v("NNNN", Ql);
v("NNNNN", ef);
D(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, a, n) {
    var r = a._locale.erasParse(e, n, a._strict);
    r ? k(a).era = r : k(a).invalidEra = e;
  }
);
v("y", nt);
v("yy", nt);
v("yyy", nt);
v("yyyy", nt);
v("yo", tf);
D(["y", "yy", "yyy", "yyyy"], H);
D(["yo"], function(e, t, a, n) {
  var r;
  a._locale._eraYearOrdinalRegex && (r = e.match(a._locale._eraYearOrdinalRegex)), a._locale.eraYearOrdinalParse ? t[H] = a._locale.eraYearOrdinalParse(e, r) : t[H] = parseInt(e, 10);
});
function Hl(e, t) {
  var a, n, r, i = this._eras || Me("en")._eras;
  for (a = 0, n = i.length; a < n; ++a) {
    switch (typeof i[a].since) {
      case "string":
        r = d(i[a].since).startOf("day"), i[a].since = r.valueOf();
        break;
    }
    switch (typeof i[a].until) {
      case "undefined":
        i[a].until = 1 / 0;
        break;
      case "string":
        r = d(i[a].until).startOf("day").valueOf(), i[a].until = r.valueOf();
        break;
    }
  }
  return i;
}
function Vl(e, t, a) {
  var n, r, i = this.eras(), s, o, l;
  for (e = e.toUpperCase(), n = 0, r = i.length; n < r; ++n)
    if (s = i[n].name.toUpperCase(), o = i[n].abbr.toUpperCase(), l = i[n].narrow.toUpperCase(), a)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (o === e)
            return i[n];
          break;
        case "NNNN":
          if (s === e)
            return i[n];
          break;
        case "NNNNN":
          if (l === e)
            return i[n];
          break;
      }
    else if ([s, o, l].indexOf(e) >= 0)
      return i[n];
}
function Gl(e, t) {
  var a = e.since <= e.until ? 1 : -1;
  return t === void 0 ? d(e.since).year() : d(e.since).year() + (t - e.offset) * a;
}
function $l() {
  var e, t, a, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (a = this.clone().startOf("day").valueOf(), n[e].since <= a && a <= n[e].until || n[e].until <= a && a <= n[e].since)
      return n[e].name;
  return "";
}
function Bl() {
  var e, t, a, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (a = this.clone().startOf("day").valueOf(), n[e].since <= a && a <= n[e].until || n[e].until <= a && a <= n[e].since)
      return n[e].narrow;
  return "";
}
function Zl() {
  var e, t, a, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (a = this.clone().startOf("day").valueOf(), n[e].since <= a && a <= n[e].until || n[e].until <= a && a <= n[e].since)
      return n[e].abbr;
  return "";
}
function ql() {
  var e, t, a, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (a = r[e].since <= r[e].until ? 1 : -1, n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return (this.year() - d(r[e].since).year()) * a + r[e].offset;
  return this.year();
}
function Xl(e) {
  return x(this, "_erasNameRegex") || pn.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Kl(e) {
  return x(this, "_erasAbbrRegex") || pn.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Jl(e) {
  return x(this, "_erasNarrowRegex") || pn.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function gn(e, t) {
  return t.erasAbbrRegex(e);
}
function Ql(e, t) {
  return t.erasNameRegex(e);
}
function ef(e, t) {
  return t.erasNarrowRegex(e);
}
function tf(e, t) {
  return t._eraYearOrdinalRegex || nt;
}
function pn() {
  var e = [], t = [], a = [], n = [], r, i, s, o, l, f = this.eras();
  for (r = 0, i = f.length; r < i; ++r)
    s = be(f[r].name), o = be(f[r].abbr), l = be(f[r].narrow), t.push(s), e.push(o), a.push(l), n.push(s), n.push(o), n.push(l);
  this._erasRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + a.join("|") + ")",
    "i"
  );
}
g(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
g(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function ma(e, t) {
  g(0, [e, e.length], 0, t);
}
ma("gggg", "weekYear");
ma("ggggg", "weekYear");
ma("GGGG", "isoWeekYear");
ma("GGGGG", "isoWeekYear");
v("G", la);
v("g", la);
v("GG", A, B);
v("gg", A, B);
v("GGGG", rn, nn);
v("gggg", rn, nn);
v("GGGGG", oa, ia);
v("ggggg", oa, ia);
Dt(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, a, n) {
    t[n.substr(0, 2)] = w(e);
  }
);
Dt(["gg", "GG"], function(e, t, a, n) {
  t[n] = d.parseTwoDigitYear(e);
});
function af(e) {
  return ai.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function nf(e) {
  return ai.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function rf() {
  return _e(this.year(), 1, 4);
}
function sf() {
  return _e(this.isoWeekYear(), 1, 4);
}
function of() {
  var e = this.localeData()._week;
  return _e(this.year(), e.dow, e.doy);
}
function lf() {
  var e = this.localeData()._week;
  return _e(this.weekYear(), e.dow, e.doy);
}
function ai(e, t, a, n, r) {
  var i;
  return e == null ? yt(this, n, r).year : (i = _e(e, n, r), t > i && (t = i), ff.call(this, e, t, a, n, r));
}
function ff(e, t, a, n, r) {
  var i = Er(e, t, a, n, r), s = vt(i.year, 0, i.dayOfYear);
  return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this;
}
g("Q", 0, "Qo", "quarter");
v("Q", xr);
D("Q", function(e, t) {
  t[ge] = (w(e) - 1) * 3;
});
function uf(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
g("D", ["DD", 2], "Do", "date");
v("D", A, rt);
v("DD", A, B);
v("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
D(["D", "DD"], fe);
D("Do", function(e, t) {
  t[fe] = w(e.match(A)[0]);
});
var ni = it("Date", !0);
g("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
v("DDD", sa);
v("DDDD", Mr);
D(["DDD", "DDDD"], function(e, t, a) {
  a._dayOfYear = w(e);
});
function cf(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
g("m", ["mm", 2], 0, "minute");
v("m", A, sn);
v("mm", A, B);
D(["m", "mm"], ne);
var df = it("Minutes", !1);
g("s", ["ss", 2], 0, "second");
v("s", A, sn);
v("ss", A, B);
D(["s", "ss"], pe);
var mf = it("Seconds", !1);
g("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
g(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
g(0, ["SSS", 3], 0, "millisecond");
g(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
g(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
g(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
g(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
g(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
g(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
v("S", sa, xr);
v("SS", sa, B);
v("SSS", sa, Mr);
var Pe, ri;
for (Pe = "SSSS"; Pe.length <= 9; Pe += "S")
  v(Pe, nt);
function hf(e, t) {
  t[We] = w(("0." + e) * 1e3);
}
for (Pe = "S"; Pe.length <= 9; Pe += "S")
  D(Pe, hf);
ri = it("Milliseconds", !1);
g("z", 0, 0, "zoneAbbr");
g("zz", 0, 0, "zoneName");
function vf() {
  return this._isUTC ? "UTC" : "";
}
function yf() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var c = Mt.prototype;
c.add = ol;
c.calendar = hl;
c.clone = vl;
c.diff = wl;
c.endOf = Al;
c.format = Ol;
c.from = Dl;
c.fromNow = Yl;
c.to = Tl;
c.toNow = Nl;
c.get = xs;
c.invalidAt = jl;
c.isAfter = yl;
c.isBefore = gl;
c.isBetween = pl;
c.isSame = bl;
c.isSameOrAfter = _l;
c.isSameOrBefore = kl;
c.isValid = Wl;
c.lang = Kr;
c.locale = Xr;
c.localeData = Jr;
c.max = Wo;
c.min = Fo;
c.parsingFlags = Ul;
c.set = Ms;
c.startOf = Pl;
c.subtract = ll;
c.toArray = Rl;
c.toObject = Ll;
c.toDate = El;
c.toISOString = xl;
c.inspect = Ml;
typeof Symbol < "u" && Symbol.for != null && (c[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
c.toJSON = Fl;
c.toString = Sl;
c.unix = Il;
c.valueOf = Cl;
c.creationData = zl;
c.eraName = $l;
c.eraNarrow = Bl;
c.eraAbbr = Zl;
c.eraYear = ql;
c.year = Yr;
c.isLeapYear = Ss;
c.weekYear = af;
c.isoWeekYear = nf;
c.quarter = c.quarters = uf;
c.month = Cr;
c.daysInMonth = Is;
c.week = c.weeks = zs;
c.isoWeek = c.isoWeeks = Hs;
c.weeksInYear = of;
c.weeksInWeekYear = lf;
c.isoWeeksInYear = rf;
c.isoWeeksInISOWeekYear = sf;
c.date = ni;
c.day = c.days = ao;
c.weekday = no;
c.isoWeekday = ro;
c.dayOfYear = cf;
c.hour = c.hours = co;
c.minute = c.minutes = df;
c.second = c.seconds = mf;
c.millisecond = c.milliseconds = ri;
c.utcOffset = Zo;
c.utc = Xo;
c.local = Ko;
c.parseZone = Jo;
c.hasAlignedHourOffset = Qo;
c.isDST = el;
c.isLocal = al;
c.isUtcOffset = nl;
c.isUtc = $r;
c.isUTC = $r;
c.zoneAbbr = vf;
c.zoneName = yf;
c.dates = K(
  "dates accessor is deprecated. Use date instead.",
  ni
);
c.months = K(
  "months accessor is deprecated. Use month instead",
  Cr
);
c.years = K(
  "years accessor is deprecated. Use year instead",
  Yr
);
c.zone = K(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  qo
);
c.isDSTShifted = K(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  tl
);
function gf(e) {
  return P(e * 1e3);
}
function pf() {
  return P.apply(null, arguments).parseZone();
}
function ii(e) {
  return e;
}
var M = en.prototype;
M.calendar = ts;
M.longDateFormat = is;
M.invalidDate = os;
M.ordinal = us;
M.preparse = ii;
M.postformat = ii;
M.relativeTime = ds;
M.pastFuture = ms;
M.set = Qi;
M.eras = Hl;
M.erasParse = Vl;
M.erasConvertYear = Gl;
M.erasAbbrRegex = Kl;
M.erasNameRegex = Xl;
M.erasNarrowRegex = Jl;
M.months = Ns;
M.monthsShort = Ps;
M.monthsParse = Cs;
M.monthsRegex = Rs;
M.monthsShortRegex = Es;
M.week = Fs;
M.firstDayOfYear = js;
M.firstDayOfWeek = Us;
M.weekdays = Ks;
M.weekdaysMin = Qs;
M.weekdaysShort = Js;
M.weekdaysParse = to;
M.weekdaysRegex = io;
M.weekdaysShortRegex = so;
M.weekdaysMinRegex = oo;
M.isPM = fo;
M.meridiem = mo;
function Jt(e, t, a, n) {
  var r = Me(), i = de().set(n, t);
  return r[a](i, e);
}
function si(e, t, a) {
  if (ke(e) && (t = e, e = void 0), e = e || "", t != null)
    return Jt(e, t, a, "month");
  var n, r = [];
  for (n = 0; n < 12; n++)
    r[n] = Jt(e, n, a, "month");
  return r;
}
function bn(e, t, a, n) {
  typeof e == "boolean" ? (ke(t) && (a = t, t = void 0), t = t || "") : (t = e, a = t, e = !1, ke(t) && (a = t, t = void 0), t = t || "");
  var r = Me(), i = e ? r._week.dow : 0, s, o = [];
  if (a != null)
    return Jt(t, (a + i) % 7, n, "day");
  for (s = 0; s < 7; s++)
    o[s] = Jt(t, (s + i) % 7, n, "day");
  return o;
}
function bf(e, t) {
  return si(e, t, "months");
}
function _f(e, t) {
  return si(e, t, "monthsShort");
}
function kf(e, t, a) {
  return bn(e, t, a, "weekdays");
}
function wf(e, t, a) {
  return bn(e, t, a, "weekdaysShort");
}
function Sf(e, t, a) {
  return bn(e, t, a, "weekdaysMin");
}
Ae("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, a = w(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + a;
  }
});
d.lang = K(
  "moment.lang is deprecated. Use moment.locale instead.",
  Ae
);
d.langData = K(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Me
);
var he = Math.abs;
function xf() {
  var e = this._data;
  return this._milliseconds = he(this._milliseconds), this._days = he(this._days), this._months = he(this._months), e.milliseconds = he(e.milliseconds), e.seconds = he(e.seconds), e.minutes = he(e.minutes), e.hours = he(e.hours), e.months = he(e.months), e.years = he(e.years), this;
}
function oi(e, t, a, n) {
  var r = oe(t, a);
  return e._milliseconds += n * r._milliseconds, e._days += n * r._days, e._months += n * r._months, e._bubble();
}
function Mf(e, t) {
  return oi(this, e, t, 1);
}
function Of(e, t) {
  return oi(this, e, t, -1);
}
function Wn(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Df() {
  var e = this._milliseconds, t = this._days, a = this._months, n = this._data, r, i, s, o, l;
  return e >= 0 && t >= 0 && a >= 0 || e <= 0 && t <= 0 && a <= 0 || (e += Wn(Ra(a) + t) * 864e5, t = 0, a = 0), n.milliseconds = e % 1e3, r = q(e / 1e3), n.seconds = r % 60, i = q(r / 60), n.minutes = i % 60, s = q(i / 60), n.hours = s % 24, t += q(s / 24), l = q(li(t)), a += l, t -= Wn(Ra(l)), o = q(a / 12), a %= 12, n.days = t, n.months = a, n.years = o, this;
}
function li(e) {
  return e * 4800 / 146097;
}
function Ra(e) {
  return e * 146097 / 4800;
}
function Yf(e) {
  if (!this.isValid())
    return NaN;
  var t, a, n = this._milliseconds;
  if (e = J(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + n / 864e5, a = this._months + li(t), e) {
      case "month":
        return a;
      case "quarter":
        return a / 3;
      case "year":
        return a / 12;
    }
  else
    switch (t = this._days + Math.round(Ra(this._months)), e) {
      case "week":
        return t / 7 + n / 6048e5;
      case "day":
        return t + n / 864e5;
      case "hour":
        return t * 24 + n / 36e5;
      case "minute":
        return t * 1440 + n / 6e4;
      case "second":
        return t * 86400 + n / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + n;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function Oe(e) {
  return function() {
    return this.as(e);
  };
}
var fi = Oe("ms"), Tf = Oe("s"), Nf = Oe("m"), Pf = Oe("h"), Af = Oe("d"), Cf = Oe("w"), If = Oe("M"), Ef = Oe("Q"), Rf = Oe("y"), Lf = fi;
function Ff() {
  return oe(this);
}
function Wf(e) {
  return e = J(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Ge(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Uf = Ge("milliseconds"), jf = Ge("seconds"), zf = Ge("minutes"), Hf = Ge("hours"), Vf = Ge("days"), Gf = Ge("months"), $f = Ge("years");
function Bf() {
  return q(this.days() / 7);
}
var ye = Math.round, qe = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function Zf(e, t, a, n, r) {
  return r.relativeTime(t || 1, !!a, e, n);
}
function qf(e, t, a, n) {
  var r = oe(e).abs(), i = ye(r.as("s")), s = ye(r.as("m")), o = ye(r.as("h")), l = ye(r.as("d")), f = ye(r.as("M")), u = ye(r.as("w")), m = ye(r.as("y")), _ = i <= a.ss && ["s", i] || i < a.s && ["ss", i] || s <= 1 && ["m"] || s < a.m && ["mm", s] || o <= 1 && ["h"] || o < a.h && ["hh", o] || l <= 1 && ["d"] || l < a.d && ["dd", l];
  return a.w != null && (_ = _ || u <= 1 && ["w"] || u < a.w && ["ww", u]), _ = _ || f <= 1 && ["M"] || f < a.M && ["MM", f] || m <= 1 && ["y"] || ["yy", m], _[2] = t, _[3] = +e > 0, _[4] = n, Zf.apply(null, _);
}
function Xf(e) {
  return e === void 0 ? ye : typeof e == "function" ? (ye = e, !0) : !1;
}
function Kf(e, t) {
  return qe[e] === void 0 ? !1 : t === void 0 ? qe[e] : (qe[e] = t, e === "s" && (qe.ss = t - 1), !0);
}
function Jf(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var a = !1, n = qe, r, i;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (a = e), typeof t == "object" && (n = Object.assign({}, qe, t), t.s != null && t.ss == null && (n.ss = t.s - 1)), r = this.localeData(), i = qf(this, !a, n, r), a && (i = r.pastFuture(+this, i)), r.postformat(i);
}
var xa = Math.abs;
function $e(e) {
  return (e > 0) - (e < 0) || +e;
}
function ha() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = xa(this._milliseconds) / 1e3, t = xa(this._days), a = xa(this._months), n, r, i, s, o = this.asSeconds(), l, f, u, m;
  return o ? (n = q(e / 60), r = q(n / 60), e %= 60, n %= 60, i = q(a / 12), a %= 12, s = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", l = o < 0 ? "-" : "", f = $e(this._months) !== $e(o) ? "-" : "", u = $e(this._days) !== $e(o) ? "-" : "", m = $e(this._milliseconds) !== $e(o) ? "-" : "", l + "P" + (i ? f + i + "Y" : "") + (a ? f + a + "M" : "") + (t ? u + t + "D" : "") + (r || n || e ? "T" : "") + (r ? m + r + "H" : "") + (n ? m + n + "M" : "") + (e ? m + s + "S" : "")) : "P0D";
}
var S = da.prototype;
S.isValid = Vo;
S.abs = xf;
S.add = Mf;
S.subtract = Of;
S.as = Yf;
S.asMilliseconds = fi;
S.asSeconds = Tf;
S.asMinutes = Nf;
S.asHours = Pf;
S.asDays = Af;
S.asWeeks = Cf;
S.asMonths = If;
S.asQuarters = Ef;
S.asYears = Rf;
S.valueOf = Lf;
S._bubble = Df;
S.clone = Ff;
S.get = Wf;
S.milliseconds = Uf;
S.seconds = jf;
S.minutes = zf;
S.hours = Hf;
S.days = Vf;
S.weeks = Bf;
S.months = Gf;
S.years = $f;
S.humanize = Jf;
S.toISOString = ha;
S.toString = ha;
S.toJSON = ha;
S.locale = Xr;
S.localeData = Jr;
S.toIsoString = K(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  ha
);
S.lang = Kr;
g("X", 0, 0, "unix");
g("x", 0, 0, "valueOf");
v("x", la);
v("X", gs);
D("X", function(e, t, a) {
  a._d = new Date(parseFloat(e) * 1e3);
});
D("x", function(e, t, a) {
  a._d = new Date(w(e));
});
//! moment.js
d.version = "2.30.1";
Ki(P);
d.fn = c;
d.min = Uo;
d.max = jo;
d.now = zo;
d.utc = de;
d.unix = gf;
d.months = bf;
d.isDate = xt;
d.locale = Ae;
d.invalid = ra;
d.duration = oe;
d.isMoment = se;
d.weekdays = kf;
d.parseZone = pf;
d.localeData = Me;
d.isDuration = Vt;
d.monthsShort = _f;
d.weekdaysMin = Sf;
d.defineLocale = cn;
d.updateLocale = go;
d.locales = po;
d.weekdaysShort = wf;
d.normalizeUnits = J;
d.relativeTimeRounding = Xf;
d.relativeTimeThreshold = Kf;
d.calendarFormat = ml;
d.prototype = c;
d.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
class Un {
  constructor() {
    _a(this, "now", d());
    _a(this, "locked", null);
  }
  with(t) {
    return this.current = t, this;
  }
  get current() {
    return this.now.format("YYYYMMDD");
  }
  set current(t) {
    this.now = d(t, "YYYYMMDD", !0);
  }
  set lockedMonth(t) {
    this.locked = d(t, "YYYYMM", !0);
  }
  get lockedMonth() {
    var t;
    return (t = this.locked) == null ? void 0 : t.format("YYYYMM");
  }
  get prevMonth() {
    return this.now.clone().subtract(1, "month");
  }
  get nextMonth() {
    return this.now.clone().add(1, "month");
  }
  get prevDay() {
    return this.now.clone().subtract(1, "day");
  }
  get nextDay() {
    return this.now.clone().add(1, "day");
  }
  isInMonth(t) {
    return d(t).isSame(this.locked || this.now, "month");
  }
  /**
   * First of current month (as a moment)
   */
  get firstOfMonth() {
    return this.locked ? this.locked.clone().date(1) : this.now.clone().date(1);
  }
  /**
   * Array of moments representing each day in the current month.
   * Notice: This also contains shoulder dates for prev/next month.
   * Warning: Never ever manipulate this array or its moments.
   */
  get daysInMonth() {
    let t = this.firstOfMonth.clone();
    const a = t.clone().add(1, "month").date(1);
    for (; t.day() > 0; ) t.subtract(1, "day");
    const n = [];
    for (; t.isBefore(a); )
      n.push(t.clone()), t.add(1, "day");
    for (; t.day() < 6; )
      n.push(t.clone()), t.add(1, "day");
    return t.day() == 6 && n.push(t.clone()), n;
  }
}
const Qf = {
  emits: ["click-date"],
  props: {
    date: {
      type: [String, Object],
      // date string or moment instance
      required: !0
      //validator(value) {
      //  return moment(value, "YYYYMMDD", true).isValid()
      //},
    },
    navigable: {
      type: Boolean,
      default: !0
    }
  },
  computed: {
    eventDate() {
      return d(this.date).format("YYYYMMDD");
    },
    dateClass() {
      return this.navigable ? "clickable" : !1;
    }
  },
  methods: {
    handleClick() {
      this.navigable && this.$emit("click-date", this.eventDate);
    }
  }
};
function eu(e, t, a, n, r, i) {
  return R(), X("span", {
    onClick: t[0] || (t[0] = (...s) => i.handleClick && i.handleClick(...s)),
    class: hr(i.dateClass)
  }, [
    mr(e.$slots, "default", {}, void 0, !0)
  ], 2);
}
const ui = /* @__PURE__ */ St(Qf, [["render", eu], ["__scopeId", "data-v-beb03b82"]]);
function jn(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), a.push.apply(a, n);
  }
  return a;
}
function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jn(Object(a), !0).forEach(function(n) {
      U(e, n, a[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : jn(Object(a)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n));
    });
  }
  return e;
}
function Qt(e) {
  "@babel/helpers - typeof";
  return Qt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qt(e);
}
function tu(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function au(e, t) {
  for (var a = 0; a < t.length; a++) {
    var n = t[a];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function nu(e, t, a) {
  return t && au(e.prototype, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function U(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
function _n(e, t) {
  return iu(e) || ou(e, t) || ci(e, t) || fu();
}
function Yt(e) {
  return ru(e) || su(e) || ci(e) || lu();
}
function ru(e) {
  if (Array.isArray(e)) return La(e);
}
function iu(e) {
  if (Array.isArray(e)) return e;
}
function su(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ou(e, t) {
  var a = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (a != null) {
    var n = [], r = !0, i = !1, s, o;
    try {
      for (a = a.call(e); !(r = (s = a.next()).done) && (n.push(s.value), !(t && n.length === t)); r = !0)
        ;
    } catch (l) {
      i = !0, o = l;
    } finally {
      try {
        !r && a.return != null && a.return();
      } finally {
        if (i) throw o;
      }
    }
    return n;
  }
}
function ci(e, t) {
  if (e) {
    if (typeof e == "string") return La(e, t);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set") return Array.from(e);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return La(e, t);
  }
}
function La(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
  return n;
}
function lu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var zn = function() {
}, kn = {}, di = {}, mi = null, hi = {
  mark: zn,
  measure: zn
};
try {
  typeof window < "u" && (kn = window), typeof document < "u" && (di = document), typeof MutationObserver < "u" && (mi = MutationObserver), typeof performance < "u" && (hi = performance);
} catch {
}
var uu = kn.navigator || {}, Hn = uu.userAgent, Vn = Hn === void 0 ? "" : Hn, Ce = kn, N = di, Gn = mi, Ct = hi;
Ce.document;
var De = !!N.documentElement && !!N.head && typeof N.addEventListener == "function" && typeof N.createElement == "function", vi = ~Vn.indexOf("MSIE") || ~Vn.indexOf("Trident/"), It, Et, Rt, Lt, Ft, we = "___FONT_AWESOME___", Fa = 16, yi = "fa", gi = "svg-inline--fa", He = "data-fa-i2svg", Wa = "data-fa-pseudo-element", cu = "data-fa-pseudo-element-pending", wn = "data-prefix", Sn = "data-icon", $n = "fontawesome-i2svg", du = "async", mu = ["HTML", "HEAD", "STYLE", "SCRIPT"], pi = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), T = "classic", I = "sharp", xn = [T, I];
function Tt(e) {
  return new Proxy(e, {
    get: function(a, n) {
      return n in a ? a[n] : a[T];
    }
  });
}
var pt = Tt((It = {}, U(It, T, {
  fa: "solid",
  fas: "solid",
  "fa-solid": "solid",
  far: "regular",
  "fa-regular": "regular",
  fal: "light",
  "fa-light": "light",
  fat: "thin",
  "fa-thin": "thin",
  fad: "duotone",
  "fa-duotone": "duotone",
  fab: "brands",
  "fa-brands": "brands",
  fak: "kit",
  fakd: "kit",
  "fa-kit": "kit",
  "fa-kit-duotone": "kit"
}), U(It, I, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), It)), bt = Tt((Et = {}, U(Et, T, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), U(Et, I, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), Et)), _t = Tt((Rt = {}, U(Rt, T, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), U(Rt, I, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), Rt)), hu = Tt((Lt = {}, U(Lt, T, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), U(Lt, I, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), Lt)), vu = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, bi = "fa-layers-text", yu = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, gu = Tt((Ft = {}, U(Ft, T, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), U(Ft, I, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), Ft)), _i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], pu = _i.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), bu = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Ue = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, kt = /* @__PURE__ */ new Set();
Object.keys(bt[T]).map(kt.add.bind(kt));
Object.keys(bt[I]).map(kt.add.bind(kt));
var _u = [].concat(xn, Yt(kt), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Ue.GROUP, Ue.SWAP_OPACITY, Ue.PRIMARY, Ue.SECONDARY]).concat(_i.map(function(e) {
  return "".concat(e, "x");
})).concat(pu.map(function(e) {
  return "w-".concat(e);
})), ct = Ce.FontAwesomeConfig || {};
function ku(e) {
  var t = N.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function wu(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (N && typeof N.querySelector == "function") {
  var Su = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  Su.forEach(function(e) {
    var t = _n(e, 2), a = t[0], n = t[1], r = wu(ku(a));
    r != null && (ct[n] = r);
  });
}
var ki = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: yi,
  replacementClass: gi,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
ct.familyPrefix && (ct.cssPrefix = ct.familyPrefix);
var at = h(h({}, ki), ct);
at.autoReplaceSvg || (at.observeMutations = !1);
var y = {};
Object.keys(ki).forEach(function(e) {
  Object.defineProperty(y, e, {
    enumerable: !0,
    set: function(a) {
      at[e] = a, dt.forEach(function(n) {
        return n(y);
      });
    },
    get: function() {
      return at[e];
    }
  });
});
Object.defineProperty(y, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    at.cssPrefix = t, dt.forEach(function(a) {
      return a(y);
    });
  },
  get: function() {
    return at.cssPrefix;
  }
});
Ce.FontAwesomeConfig = y;
var dt = [];
function xu(e) {
  return dt.push(e), function() {
    dt.splice(dt.indexOf(e), 1);
  };
}
var Te = Fa, ue = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Mu(e) {
  if (!(!e || !De)) {
    var t = N.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var a = N.head.childNodes, n = null, r = a.length - 1; r > -1; r--) {
      var i = a[r], s = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(s) > -1 && (n = i);
    }
    return N.head.insertBefore(t, n), e;
  }
}
var Ou = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function wt() {
  for (var e = 12, t = ""; e-- > 0; )
    t += Ou[Math.random() * 62 | 0];
  return t;
}
function st(e) {
  for (var t = [], a = (e || []).length >>> 0; a--; )
    t[a] = e[a];
  return t;
}
function Mn(e) {
  return e.classList ? st(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function wi(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Du(e) {
  return Object.keys(e || {}).reduce(function(t, a) {
    return t + "".concat(a, '="').concat(wi(e[a]), '" ');
  }, "").trim();
}
function va(e) {
  return Object.keys(e || {}).reduce(function(t, a) {
    return t + "".concat(a, ": ").concat(e[a].trim(), ";");
  }, "");
}
function On(e) {
  return e.size !== ue.size || e.x !== ue.x || e.y !== ue.y || e.rotate !== ue.rotate || e.flipX || e.flipY;
}
function Yu(e) {
  var t = e.transform, a = e.containerWidth, n = e.iconWidth, r = {
    transform: "translate(".concat(a / 2, " 256)")
  }, i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), s = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), o = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(i, " ").concat(s, " ").concat(o)
  }, f = {
    transform: "translate(".concat(n / 2 * -1, " -256)")
  };
  return {
    outer: r,
    inner: l,
    path: f
  };
}
function Tu(e) {
  var t = e.transform, a = e.width, n = a === void 0 ? Fa : a, r = e.height, i = r === void 0 ? Fa : r, s = e.startCentered, o = s === void 0 ? !1 : s, l = "";
  return o && vi ? l += "translate(".concat(t.x / Te - n / 2, "em, ").concat(t.y / Te - i / 2, "em) ") : o ? l += "translate(calc(-50% + ".concat(t.x / Te, "em), calc(-50% + ").concat(t.y / Te, "em)) ") : l += "translate(".concat(t.x / Te, "em, ").concat(t.y / Te, "em) "), l += "scale(".concat(t.size / Te * (t.flipX ? -1 : 1), ", ").concat(t.size / Te * (t.flipY ? -1 : 1), ") "), l += "rotate(".concat(t.rotate, "deg) "), l;
}
var Nu = `:root, :host {
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
}`;
function Si() {
  var e = yi, t = gi, a = y.cssPrefix, n = y.replacementClass, r = Nu;
  if (a !== e || n !== t) {
    var i = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), o = new RegExp("\\.".concat(t), "g");
    r = r.replace(i, ".".concat(a, "-")).replace(s, "--".concat(a, "-")).replace(o, ".".concat(n));
  }
  return r;
}
var Bn = !1;
function Ma() {
  y.autoAddCss && !Bn && (Mu(Si()), Bn = !0);
}
var Pu = {
  mixout: function() {
    return {
      dom: {
        css: Si,
        insertCss: Ma
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        Ma();
      },
      beforeI2svg: function() {
        Ma();
      }
    };
  }
}, Se = Ce || {};
Se[we] || (Se[we] = {});
Se[we].styles || (Se[we].styles = {});
Se[we].hooks || (Se[we].hooks = {});
Se[we].shims || (Se[we].shims = []);
var re = Se[we], xi = [], Au = function e() {
  N.removeEventListener("DOMContentLoaded", e), ea = 1, xi.map(function(t) {
    return t();
  });
}, ea = !1;
De && (ea = (N.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(N.readyState), ea || N.addEventListener("DOMContentLoaded", Au));
function Cu(e) {
  De && (ea ? setTimeout(e, 0) : xi.push(e));
}
function Nt(e) {
  var t = e.tag, a = e.attributes, n = a === void 0 ? {} : a, r = e.children, i = r === void 0 ? [] : r;
  return typeof e == "string" ? wi(e) : "<".concat(t, " ").concat(Du(n), ">").concat(i.map(Nt).join(""), "</").concat(t, ">");
}
function Zn(e, t, a) {
  if (e && e[t] && e[t][a])
    return {
      prefix: t,
      iconName: a,
      icon: e[t][a]
    };
}
var Oa = function(t, a, n, r) {
  var i = Object.keys(t), s = i.length, o = a, l, f, u;
  for (n === void 0 ? (l = 1, u = t[i[0]]) : (l = 0, u = n); l < s; l++)
    f = i[l], u = o(u, t[f], f, t);
  return u;
};
function Iu(e) {
  for (var t = [], a = 0, n = e.length; a < n; ) {
    var r = e.charCodeAt(a++);
    if (r >= 55296 && r <= 56319 && a < n) {
      var i = e.charCodeAt(a++);
      (i & 64512) == 56320 ? t.push(((r & 1023) << 10) + (i & 1023) + 65536) : (t.push(r), a--);
    } else
      t.push(r);
  }
  return t;
}
function Ua(e) {
  var t = Iu(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Eu(e, t) {
  var a = e.length, n = e.charCodeAt(t), r;
  return n >= 55296 && n <= 56319 && a > t + 1 && (r = e.charCodeAt(t + 1), r >= 56320 && r <= 57343) ? (n - 55296) * 1024 + r - 56320 + 65536 : n;
}
function qn(e) {
  return Object.keys(e).reduce(function(t, a) {
    var n = e[a], r = !!n.icon;
    return r ? t[n.iconName] = n.icon : t[a] = n, t;
  }, {});
}
function ja(e, t) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = a.skipHooks, r = n === void 0 ? !1 : n, i = qn(t);
  typeof re.hooks.addPack == "function" && !r ? re.hooks.addPack(e, qn(t)) : re.styles[e] = h(h({}, re.styles[e] || {}), i), e === "fas" && ja("fa", t);
}
var Wt, Ut, jt, Xe = re.styles, Ru = re.shims, Lu = (Wt = {}, U(Wt, T, Object.values(_t[T])), U(Wt, I, Object.values(_t[I])), Wt), Dn = null, Mi = {}, Oi = {}, Di = {}, Yi = {}, Ti = {}, Fu = (Ut = {}, U(Ut, T, Object.keys(pt[T])), U(Ut, I, Object.keys(pt[I])), Ut);
function Wu(e) {
  return ~_u.indexOf(e);
}
function Uu(e, t) {
  var a = t.split("-"), n = a[0], r = a.slice(1).join("-");
  return n === e && r !== "" && !Wu(r) ? r : null;
}
var Ni = function() {
  var t = function(i) {
    return Oa(Xe, function(s, o, l) {
      return s[l] = Oa(o, i, {}), s;
    }, {});
  };
  Mi = t(function(r, i, s) {
    if (i[3] && (r[i[3]] = s), i[2]) {
      var o = i[2].filter(function(l) {
        return typeof l == "number";
      });
      o.forEach(function(l) {
        r[l.toString(16)] = s;
      });
    }
    return r;
  }), Oi = t(function(r, i, s) {
    if (r[s] = s, i[2]) {
      var o = i[2].filter(function(l) {
        return typeof l == "string";
      });
      o.forEach(function(l) {
        r[l] = s;
      });
    }
    return r;
  }), Ti = t(function(r, i, s) {
    var o = i[2];
    return r[s] = s, o.forEach(function(l) {
      r[l] = s;
    }), r;
  });
  var a = "far" in Xe || y.autoFetchSvg, n = Oa(Ru, function(r, i) {
    var s = i[0], o = i[1], l = i[2];
    return o === "far" && !a && (o = "fas"), typeof s == "string" && (r.names[s] = {
      prefix: o,
      iconName: l
    }), typeof s == "number" && (r.unicodes[s.toString(16)] = {
      prefix: o,
      iconName: l
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  Di = n.names, Yi = n.unicodes, Dn = ya(y.styleDefault, {
    family: y.familyDefault
  });
};
xu(function(e) {
  Dn = ya(e.styleDefault, {
    family: y.familyDefault
  });
});
Ni();
function Yn(e, t) {
  return (Mi[e] || {})[t];
}
function ju(e, t) {
  return (Oi[e] || {})[t];
}
function je(e, t) {
  return (Ti[e] || {})[t];
}
function Pi(e) {
  return Di[e] || {
    prefix: null,
    iconName: null
  };
}
function zu(e) {
  var t = Yi[e], a = Yn("fas", e);
  return t || (a ? {
    prefix: "fas",
    iconName: a
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Ie() {
  return Dn;
}
var Tn = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function ya(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = t.family, n = a === void 0 ? T : a, r = pt[n][e], i = bt[n][e] || bt[n][r], s = e in re.styles ? e : null;
  return i || s || null;
}
var Xn = (jt = {}, U(jt, T, Object.keys(_t[T])), U(jt, I, Object.keys(_t[I])), jt);
function ga(e) {
  var t, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = a.skipLookups, r = n === void 0 ? !1 : n, i = (t = {}, U(t, T, "".concat(y.cssPrefix, "-").concat(T)), U(t, I, "".concat(y.cssPrefix, "-").concat(I)), t), s = null, o = T;
  (e.includes(i[T]) || e.some(function(f) {
    return Xn[T].includes(f);
  })) && (o = T), (e.includes(i[I]) || e.some(function(f) {
    return Xn[I].includes(f);
  })) && (o = I);
  var l = e.reduce(function(f, u) {
    var m = Uu(y.cssPrefix, u);
    if (Xe[u] ? (u = Lu[o].includes(u) ? hu[o][u] : u, s = u, f.prefix = u) : Fu[o].indexOf(u) > -1 ? (s = u, f.prefix = ya(u, {
      family: o
    })) : m ? f.iconName = m : u !== y.replacementClass && u !== i[T] && u !== i[I] && f.rest.push(u), !r && f.prefix && f.iconName) {
      var _ = s === "fa" ? Pi(f.iconName) : {}, O = je(f.prefix, f.iconName);
      _.prefix && (s = null), f.iconName = _.iconName || O || f.iconName, f.prefix = _.prefix || f.prefix, f.prefix === "far" && !Xe.far && Xe.fas && !y.autoFetchSvg && (f.prefix = "fas");
    }
    return f;
  }, Tn());
  return (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"), !l.prefix && o === I && (Xe.fass || y.autoFetchSvg) && (l.prefix = "fass", l.iconName = je(l.prefix, l.iconName) || l.iconName), (l.prefix === "fa" || s === "fa") && (l.prefix = Ie() || "fas"), l;
}
var Hu = /* @__PURE__ */ function() {
  function e() {
    tu(this, e), this.definitions = {};
  }
  return nu(e, [{
    key: "add",
    value: function() {
      for (var a = this, n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      var s = r.reduce(this._pullDefinitions, {});
      Object.keys(s).forEach(function(o) {
        a.definitions[o] = h(h({}, a.definitions[o] || {}), s[o]), ja(o, s[o]);
        var l = _t[T][o];
        l && ja(l, s[o]), Ni();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(a, n) {
      var r = n.prefix && n.iconName && n.icon ? {
        0: n
      } : n;
      return Object.keys(r).map(function(i) {
        var s = r[i], o = s.prefix, l = s.iconName, f = s.icon, u = f[2];
        a[o] || (a[o] = {}), u.length > 0 && u.forEach(function(m) {
          typeof m == "string" && (a[o][m] = f);
        }), a[o][l] = f;
      }), a;
    }
  }]), e;
}(), Kn = [], Ke = {}, tt = {}, Vu = Object.keys(tt);
function Gu(e, t) {
  var a = t.mixoutsTo;
  return Kn = e, Ke = {}, Object.keys(tt).forEach(function(n) {
    Vu.indexOf(n) === -1 && delete tt[n];
  }), Kn.forEach(function(n) {
    var r = n.mixout ? n.mixout() : {};
    if (Object.keys(r).forEach(function(s) {
      typeof r[s] == "function" && (a[s] = r[s]), Qt(r[s]) === "object" && Object.keys(r[s]).forEach(function(o) {
        a[s] || (a[s] = {}), a[s][o] = r[s][o];
      });
    }), n.hooks) {
      var i = n.hooks();
      Object.keys(i).forEach(function(s) {
        Ke[s] || (Ke[s] = []), Ke[s].push(i[s]);
      });
    }
    n.provides && n.provides(tt);
  }), a;
}
function za(e, t) {
  for (var a = arguments.length, n = new Array(a > 2 ? a - 2 : 0), r = 2; r < a; r++)
    n[r - 2] = arguments[r];
  var i = Ke[e] || [];
  return i.forEach(function(s) {
    t = s.apply(null, [t].concat(n));
  }), t;
}
function Ve(e) {
  for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    a[n - 1] = arguments[n];
  var r = Ke[e] || [];
  r.forEach(function(i) {
    i.apply(null, a);
  });
}
function xe() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return tt[e] ? tt[e].apply(null, t) : void 0;
}
function Ha(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, a = e.prefix || Ie();
  if (t)
    return t = je(a, t) || t, Zn(Ai.definitions, a, t) || Zn(re.styles, a, t);
}
var Ai = new Hu(), $u = function() {
  y.autoReplaceSvg = !1, y.observeMutations = !1, Ve("noAuto");
}, Bu = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return De ? (Ve("beforeI2svg", t), xe("pseudoElements2svg", t), xe("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = t.autoReplaceSvgRoot;
    y.autoReplaceSvg === !1 && (y.autoReplaceSvg = !0), y.observeMutations = !0, Cu(function() {
      qu({
        autoReplaceSvgRoot: a
      }), Ve("watch", t);
    });
  }
}, Zu = {
  icon: function(t) {
    if (t === null)
      return null;
    if (Qt(t) === "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: je(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      var a = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], n = ya(t[0]);
      return {
        prefix: n,
        iconName: je(n, a) || a
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(y.cssPrefix, "-")) > -1 || t.match(vu))) {
      var r = ga(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: r.prefix || Ie(),
        iconName: je(r.prefix, r.iconName) || r.iconName
      };
    }
    if (typeof t == "string") {
      var i = Ie();
      return {
        prefix: i,
        iconName: je(i, t) || t
      };
    }
  }
}, Z = {
  noAuto: $u,
  config: y,
  dom: Bu,
  parse: Zu,
  library: Ai,
  findIconDefinition: Ha,
  toHtml: Nt
}, qu = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = t.autoReplaceSvgRoot, n = a === void 0 ? N : a;
  (Object.keys(re.styles).length > 0 || y.autoFetchSvg) && De && y.autoReplaceSvg && Z.dom.i2svg({
    node: n
  });
};
function pa(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(n) {
        return Nt(n);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (De) {
        var n = N.createElement("div");
        return n.innerHTML = e.html, n.children;
      }
    }
  }), e;
}
function Xu(e) {
  var t = e.children, a = e.main, n = e.mask, r = e.attributes, i = e.styles, s = e.transform;
  if (On(s) && a.found && !n.found) {
    var o = a.width, l = a.height, f = {
      x: o / l / 2,
      y: 0.5
    };
    r.style = va(h(h({}, i), {}, {
      "transform-origin": "".concat(f.x + s.x / 16, "em ").concat(f.y + s.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: r,
    children: t
  }];
}
function Ku(e) {
  var t = e.prefix, a = e.iconName, n = e.children, r = e.attributes, i = e.symbol, s = i === !0 ? "".concat(t, "-").concat(y.cssPrefix, "-").concat(a) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: h(h({}, r), {}, {
        id: s
      }),
      children: n
    }]
  }];
}
function Nn(e) {
  var t = e.icons, a = t.main, n = t.mask, r = e.prefix, i = e.iconName, s = e.transform, o = e.symbol, l = e.title, f = e.maskId, u = e.titleId, m = e.extra, _ = e.watchable, O = _ === void 0 ? !1 : _, j = n.found ? n : a, z = j.width, V = j.height, p = r === "fak", b = [y.replacementClass, i ? "".concat(y.cssPrefix, "-").concat(i) : ""].filter(function(Ye) {
    return m.classes.indexOf(Ye) === -1;
  }).filter(function(Ye) {
    return Ye !== "" || !!Ye;
  }).concat(m.classes).join(" "), Y = {
    children: [],
    attributes: h(h({}, m.attributes), {}, {
      "data-prefix": r,
      "data-icon": i,
      class: b,
      role: m.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(z, " ").concat(V)
    })
  }, L = p && !~m.classes.indexOf("fa-fw") ? {
    width: "".concat(z / V * 16 * 0.0625, "em")
  } : {};
  O && (Y.attributes[He] = ""), l && (Y.children.push({
    tag: "title",
    attributes: {
      id: Y.attributes["aria-labelledby"] || "title-".concat(u || wt())
    },
    children: [l]
  }), delete Y.attributes.title);
  var F = h(h({}, Y), {}, {
    prefix: r,
    iconName: i,
    main: a,
    mask: n,
    maskId: f,
    transform: s,
    symbol: o,
    styles: h(h({}, L), m.styles)
  }), le = n.found && a.found ? xe("generateAbstractMask", F) || {
    children: [],
    attributes: {}
  } : xe("generateAbstractIcon", F) || {
    children: [],
    attributes: {}
  }, Q = le.children, ba = le.attributes;
  return F.children = Q, F.attributes = ba, o ? Ku(F) : Xu(F);
}
function Jn(e) {
  var t = e.content, a = e.width, n = e.height, r = e.transform, i = e.title, s = e.extra, o = e.watchable, l = o === void 0 ? !1 : o, f = h(h(h({}, s.attributes), i ? {
    title: i
  } : {}), {}, {
    class: s.classes.join(" ")
  });
  l && (f[He] = "");
  var u = h({}, s.styles);
  On(r) && (u.transform = Tu({
    transform: r,
    startCentered: !0,
    width: a,
    height: n
  }), u["-webkit-transform"] = u.transform);
  var m = va(u);
  m.length > 0 && (f.style = m);
  var _ = [];
  return _.push({
    tag: "span",
    attributes: f,
    children: [t]
  }), i && _.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), _;
}
function Ju(e) {
  var t = e.content, a = e.title, n = e.extra, r = h(h(h({}, n.attributes), a ? {
    title: a
  } : {}), {}, {
    class: n.classes.join(" ")
  }), i = va(n.styles);
  i.length > 0 && (r.style = i);
  var s = [];
  return s.push({
    tag: "span",
    attributes: r,
    children: [t]
  }), a && s.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [a]
  }), s;
}
var Da = re.styles;
function Va(e) {
  var t = e[0], a = e[1], n = e.slice(4), r = _n(n, 1), i = r[0], s = null;
  return Array.isArray(i) ? s = {
    tag: "g",
    attributes: {
      class: "".concat(y.cssPrefix, "-").concat(Ue.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(y.cssPrefix, "-").concat(Ue.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(y.cssPrefix, "-").concat(Ue.PRIMARY),
        fill: "currentColor",
        d: i[1]
      }
    }]
  } : s = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: i
    }
  }, {
    found: !0,
    width: t,
    height: a,
    icon: s
  };
}
var Qu = {
  found: !1,
  width: 512,
  height: 512
};
function ec(e, t) {
  !pi && !y.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Ga(e, t) {
  var a = t;
  return t === "fa" && y.styleDefault !== null && (t = Ie()), new Promise(function(n, r) {
    if (xe("missingIconAbstract"), a === "fa") {
      var i = Pi(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && Da[t] && Da[t][e]) {
      var s = Da[t][e];
      return n(Va(s));
    }
    ec(e, t), n(h(h({}, Qu), {}, {
      icon: y.showMissingIcons && e ? xe("missingIconAbstract") || {} : {}
    }));
  });
}
var Qn = function() {
}, $a = y.measurePerformance && Ct && Ct.mark && Ct.measure ? Ct : {
  mark: Qn,
  measure: Qn
}, ft = 'FA "6.5.2"', tc = function(t) {
  return $a.mark("".concat(ft, " ").concat(t, " begins")), function() {
    return Ci(t);
  };
}, Ci = function(t) {
  $a.mark("".concat(ft, " ").concat(t, " ends")), $a.measure("".concat(ft, " ").concat(t), "".concat(ft, " ").concat(t, " begins"), "".concat(ft, " ").concat(t, " ends"));
}, Pn = {
  begin: tc,
  end: Ci
}, $t = function() {
};
function er(e) {
  var t = e.getAttribute ? e.getAttribute(He) : null;
  return typeof t == "string";
}
function ac(e) {
  var t = e.getAttribute ? e.getAttribute(wn) : null, a = e.getAttribute ? e.getAttribute(Sn) : null;
  return t && a;
}
function nc(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(y.replacementClass);
}
function rc() {
  if (y.autoReplaceSvg === !0)
    return Bt.replace;
  var e = Bt[y.autoReplaceSvg];
  return e || Bt.replace;
}
function ic(e) {
  return N.createElementNS("http://www.w3.org/2000/svg", e);
}
function sc(e) {
  return N.createElement(e);
}
function Ii(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = t.ceFn, n = a === void 0 ? e.tag === "svg" ? ic : sc : a;
  if (typeof e == "string")
    return N.createTextNode(e);
  var r = n(e.tag);
  Object.keys(e.attributes || []).forEach(function(s) {
    r.setAttribute(s, e.attributes[s]);
  });
  var i = e.children || [];
  return i.forEach(function(s) {
    r.appendChild(Ii(s, {
      ceFn: n
    }));
  }), r;
}
function oc(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var Bt = {
  replace: function(t) {
    var a = t[0];
    if (a.parentNode)
      if (t[1].forEach(function(r) {
        a.parentNode.insertBefore(Ii(r), a);
      }), a.getAttribute(He) === null && y.keepOriginalSource) {
        var n = N.createComment(oc(a));
        a.parentNode.replaceChild(n, a);
      } else
        a.remove();
  },
  nest: function(t) {
    var a = t[0], n = t[1];
    if (~Mn(a).indexOf(y.replacementClass))
      return Bt.replace(t);
    var r = new RegExp("".concat(y.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      var i = n[0].attributes.class.split(" ").reduce(function(o, l) {
        return l === y.replacementClass || l.match(r) ? o.toSvg.push(l) : o.toNode.push(l), o;
      }, {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? a.removeAttribute("class") : a.setAttribute("class", i.toNode.join(" "));
    }
    var s = n.map(function(o) {
      return Nt(o);
    }).join(`
`);
    a.setAttribute(He, ""), a.innerHTML = s;
  }
};
function tr(e) {
  e();
}
function Ei(e, t) {
  var a = typeof t == "function" ? t : $t;
  if (e.length === 0)
    a();
  else {
    var n = tr;
    y.mutateApproach === du && (n = Ce.requestAnimationFrame || tr), n(function() {
      var r = rc(), i = Pn.begin("mutate");
      e.map(r), i(), a();
    });
  }
}
var An = !1;
function Ri() {
  An = !0;
}
function Ba() {
  An = !1;
}
var ta = null;
function ar(e) {
  if (Gn && y.observeMutations) {
    var t = e.treeCallback, a = t === void 0 ? $t : t, n = e.nodeCallback, r = n === void 0 ? $t : n, i = e.pseudoElementsCallback, s = i === void 0 ? $t : i, o = e.observeMutationsRoot, l = o === void 0 ? N : o;
    ta = new Gn(function(f) {
      if (!An) {
        var u = Ie();
        st(f).forEach(function(m) {
          if (m.type === "childList" && m.addedNodes.length > 0 && !er(m.addedNodes[0]) && (y.searchPseudoElements && s(m.target), a(m.target)), m.type === "attributes" && m.target.parentNode && y.searchPseudoElements && s(m.target.parentNode), m.type === "attributes" && er(m.target) && ~bu.indexOf(m.attributeName))
            if (m.attributeName === "class" && ac(m.target)) {
              var _ = ga(Mn(m.target)), O = _.prefix, j = _.iconName;
              m.target.setAttribute(wn, O || u), j && m.target.setAttribute(Sn, j);
            } else nc(m.target) && r(m.target);
        });
      }
    }), De && ta.observe(l, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function lc() {
  ta && ta.disconnect();
}
function fc(e) {
  var t = e.getAttribute("style"), a = [];
  return t && (a = t.split(";").reduce(function(n, r) {
    var i = r.split(":"), s = i[0], o = i.slice(1);
    return s && o.length > 0 && (n[s] = o.join(":").trim()), n;
  }, {})), a;
}
function uc(e) {
  var t = e.getAttribute("data-prefix"), a = e.getAttribute("data-icon"), n = e.innerText !== void 0 ? e.innerText.trim() : "", r = ga(Mn(e));
  return r.prefix || (r.prefix = Ie()), t && a && (r.prefix = t, r.iconName = a), r.iconName && r.prefix || (r.prefix && n.length > 0 && (r.iconName = ju(r.prefix, e.innerText) || Yn(r.prefix, Ua(e.innerText))), !r.iconName && y.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = e.firstChild.data)), r;
}
function cc(e) {
  var t = st(e.attributes).reduce(function(r, i) {
    return r.name !== "class" && r.name !== "style" && (r[i.name] = i.value), r;
  }, {}), a = e.getAttribute("title"), n = e.getAttribute("data-fa-title-id");
  return y.autoA11y && (a ? t["aria-labelledby"] = "".concat(y.replacementClass, "-title-").concat(n || wt()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function dc() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: ue,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function nr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, a = uc(e), n = a.iconName, r = a.prefix, i = a.rest, s = cc(e), o = za("parseNodeAttributes", {}, e), l = t.styleParser ? fc(e) : [];
  return h({
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: ue,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: l,
      attributes: s
    }
  }, o);
}
var mc = re.styles;
function Li(e) {
  var t = y.autoReplaceSvg === "nest" ? nr(e, {
    styleParser: !1
  }) : nr(e);
  return ~t.extra.classes.indexOf(bi) ? xe("generateLayersText", e, t) : xe("generateSvgReplacementMutation", e, t);
}
var Ee = /* @__PURE__ */ new Set();
xn.map(function(e) {
  Ee.add("fa-".concat(e));
});
Object.keys(pt[T]).map(Ee.add.bind(Ee));
Object.keys(pt[I]).map(Ee.add.bind(Ee));
Ee = Yt(Ee);
function rr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!De) return Promise.resolve();
  var a = N.documentElement.classList, n = function(m) {
    return a.add("".concat($n, "-").concat(m));
  }, r = function(m) {
    return a.remove("".concat($n, "-").concat(m));
  }, i = y.autoFetchSvg ? Ee : xn.map(function(u) {
    return "fa-".concat(u);
  }).concat(Object.keys(mc));
  i.includes("fa") || i.push("fa");
  var s = [".".concat(bi, ":not([").concat(He, "])")].concat(i.map(function(u) {
    return ".".concat(u, ":not([").concat(He, "])");
  })).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  var o = [];
  try {
    o = st(e.querySelectorAll(s));
  } catch {
  }
  if (o.length > 0)
    n("pending"), r("complete");
  else
    return Promise.resolve();
  var l = Pn.begin("onTree"), f = o.reduce(function(u, m) {
    try {
      var _ = Li(m);
      _ && u.push(_);
    } catch (O) {
      pi || O.name === "MissingIcon" && console.error(O);
    }
    return u;
  }, []);
  return new Promise(function(u, m) {
    Promise.all(f).then(function(_) {
      Ei(_, function() {
        n("active"), n("complete"), r("pending"), typeof t == "function" && t(), l(), u();
      });
    }).catch(function(_) {
      l(), m(_);
    });
  });
}
function hc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Li(e).then(function(a) {
    a && Ei([a], t);
  });
}
function vc(e) {
  return function(t) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = (t || {}).icon ? t : Ha(t || {}), r = a.mask;
    return r && (r = (r || {}).icon ? r : Ha(r || {})), e(n, h(h({}, a), {}, {
      mask: r
    }));
  };
}
var yc = function(t) {
  var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = a.transform, r = n === void 0 ? ue : n, i = a.symbol, s = i === void 0 ? !1 : i, o = a.mask, l = o === void 0 ? null : o, f = a.maskId, u = f === void 0 ? null : f, m = a.title, _ = m === void 0 ? null : m, O = a.titleId, j = O === void 0 ? null : O, z = a.classes, V = z === void 0 ? [] : z, p = a.attributes, b = p === void 0 ? {} : p, Y = a.styles, L = Y === void 0 ? {} : Y;
  if (t) {
    var F = t.prefix, le = t.iconName, Q = t.icon;
    return pa(h({
      type: "icon"
    }, t), function() {
      return Ve("beforeDOMElementCreation", {
        iconDefinition: t,
        params: a
      }), y.autoA11y && (_ ? b["aria-labelledby"] = "".concat(y.replacementClass, "-title-").concat(j || wt()) : (b["aria-hidden"] = "true", b.focusable = "false")), Nn({
        icons: {
          main: Va(Q),
          mask: l ? Va(l.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: F,
        iconName: le,
        transform: h(h({}, ue), r),
        symbol: s,
        title: _,
        maskId: u,
        titleId: j,
        extra: {
          attributes: b,
          styles: L,
          classes: V
        }
      });
    });
  }
}, gc = {
  mixout: function() {
    return {
      icon: vc(yc)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(a) {
        return a.treeCallback = rr, a.nodeCallback = hc, a;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(a) {
      var n = a.node, r = n === void 0 ? N : n, i = a.callback, s = i === void 0 ? function() {
      } : i;
      return rr(r, s);
    }, t.generateSvgReplacementMutation = function(a, n) {
      var r = n.iconName, i = n.title, s = n.titleId, o = n.prefix, l = n.transform, f = n.symbol, u = n.mask, m = n.maskId, _ = n.extra;
      return new Promise(function(O, j) {
        Promise.all([Ga(r, o), u.iconName ? Ga(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(z) {
          var V = _n(z, 2), p = V[0], b = V[1];
          O([a, Nn({
            icons: {
              main: p,
              mask: b
            },
            prefix: o,
            iconName: r,
            transform: l,
            symbol: f,
            maskId: m,
            title: i,
            titleId: s,
            extra: _,
            watchable: !0
          })]);
        }).catch(j);
      });
    }, t.generateAbstractIcon = function(a) {
      var n = a.children, r = a.attributes, i = a.main, s = a.transform, o = a.styles, l = va(o);
      l.length > 0 && (r.style = l);
      var f;
      return On(s) && (f = xe("generateAbstractTransformGrouping", {
        main: i,
        transform: s,
        containerWidth: i.width,
        iconWidth: i.width
      })), n.push(f || i.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, pc = {
  mixout: function() {
    return {
      layer: function(a) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.classes, i = r === void 0 ? [] : r;
        return pa({
          type: "layer"
        }, function() {
          Ve("beforeDOMElementCreation", {
            assembler: a,
            params: n
          });
          var s = [];
          return a(function(o) {
            Array.isArray(o) ? o.map(function(l) {
              s = s.concat(l.abstract);
            }) : s = s.concat(o.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(y.cssPrefix, "-layers")].concat(Yt(i)).join(" ")
            },
            children: s
          }];
        });
      }
    };
  }
}, bc = {
  mixout: function() {
    return {
      counter: function(a) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.title, i = r === void 0 ? null : r, s = n.classes, o = s === void 0 ? [] : s, l = n.attributes, f = l === void 0 ? {} : l, u = n.styles, m = u === void 0 ? {} : u;
        return pa({
          type: "counter",
          content: a
        }, function() {
          return Ve("beforeDOMElementCreation", {
            content: a,
            params: n
          }), Ju({
            content: a.toString(),
            title: i,
            extra: {
              attributes: f,
              styles: m,
              classes: ["".concat(y.cssPrefix, "-layers-counter")].concat(Yt(o))
            }
          });
        });
      }
    };
  }
}, _c = {
  mixout: function() {
    return {
      text: function(a) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transform, i = r === void 0 ? ue : r, s = n.title, o = s === void 0 ? null : s, l = n.classes, f = l === void 0 ? [] : l, u = n.attributes, m = u === void 0 ? {} : u, _ = n.styles, O = _ === void 0 ? {} : _;
        return pa({
          type: "text",
          content: a
        }, function() {
          return Ve("beforeDOMElementCreation", {
            content: a,
            params: n
          }), Jn({
            content: a,
            transform: h(h({}, ue), i),
            title: o,
            extra: {
              attributes: m,
              styles: O,
              classes: ["".concat(y.cssPrefix, "-layers-text")].concat(Yt(f))
            }
          });
        });
      }
    };
  },
  provides: function(t) {
    t.generateLayersText = function(a, n) {
      var r = n.title, i = n.transform, s = n.extra, o = null, l = null;
      if (vi) {
        var f = parseInt(getComputedStyle(a).fontSize, 10), u = a.getBoundingClientRect();
        o = u.width / f, l = u.height / f;
      }
      return y.autoA11y && !r && (s.attributes["aria-hidden"] = "true"), Promise.resolve([a, Jn({
        content: a.innerHTML,
        width: o,
        height: l,
        transform: i,
        title: r,
        extra: s,
        watchable: !0
      })]);
    };
  }
}, kc = new RegExp('"', "ug"), ir = [1105920, 1112319];
function wc(e) {
  var t = e.replace(kc, ""), a = Eu(t, 0), n = a >= ir[0] && a <= ir[1], r = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Ua(r ? t[0] : t),
    isSecondary: n || r
  };
}
function sr(e, t) {
  var a = "".concat(cu).concat(t.replace(":", "-"));
  return new Promise(function(n, r) {
    if (e.getAttribute(a) !== null)
      return n();
    var i = st(e.children), s = i.filter(function(Q) {
      return Q.getAttribute(Wa) === t;
    })[0], o = Ce.getComputedStyle(e, t), l = o.getPropertyValue("font-family").match(yu), f = o.getPropertyValue("font-weight"), u = o.getPropertyValue("content");
    if (s && !l)
      return e.removeChild(s), n();
    if (l && u !== "none" && u !== "") {
      var m = o.getPropertyValue("content"), _ = ~["Sharp"].indexOf(l[2]) ? I : T, O = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2]) ? bt[_][l[2].toLowerCase()] : gu[_][f], j = wc(m), z = j.value, V = j.isSecondary, p = l[0].startsWith("FontAwesome"), b = Yn(O, z), Y = b;
      if (p) {
        var L = zu(z);
        L.iconName && L.prefix && (b = L.iconName, O = L.prefix);
      }
      if (b && !V && (!s || s.getAttribute(wn) !== O || s.getAttribute(Sn) !== Y)) {
        e.setAttribute(a, Y), s && e.removeChild(s);
        var F = dc(), le = F.extra;
        le.attributes[Wa] = t, Ga(b, O).then(function(Q) {
          var ba = Nn(h(h({}, F), {}, {
            icons: {
              main: Q,
              mask: Tn()
            },
            prefix: O,
            iconName: Y,
            extra: le,
            watchable: !0
          })), Ye = N.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(Ye, e.firstChild) : e.appendChild(Ye), Ye.outerHTML = ba.map(function(zi) {
            return Nt(zi);
          }).join(`
`), e.removeAttribute(a), n();
        }).catch(r);
      } else
        n();
    } else
      n();
  });
}
function Sc(e) {
  return Promise.all([sr(e, "::before"), sr(e, "::after")]);
}
function xc(e) {
  return e.parentNode !== document.head && !~mu.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Wa) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function or(e) {
  if (De)
    return new Promise(function(t, a) {
      var n = st(e.querySelectorAll("*")).filter(xc).map(Sc), r = Pn.begin("searchPseudoElements");
      Ri(), Promise.all(n).then(function() {
        r(), Ba(), t();
      }).catch(function() {
        r(), Ba(), a();
      });
    });
}
var Mc = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(a) {
        return a.pseudoElementsCallback = or, a;
      }
    };
  },
  provides: function(t) {
    t.pseudoElements2svg = function(a) {
      var n = a.node, r = n === void 0 ? N : n;
      y.searchPseudoElements && or(r);
    };
  }
}, lr = !1, Oc = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          Ri(), lr = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        ar(za("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        lc();
      },
      watch: function(a) {
        var n = a.observeMutationsRoot;
        lr ? Ba() : ar(za("mutationObserverCallbacks", {
          observeMutationsRoot: n
        }));
      }
    };
  }
}, fr = function(t) {
  var a = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce(function(n, r) {
    var i = r.toLowerCase().split("-"), s = i[0], o = i.slice(1).join("-");
    if (s && o === "h")
      return n.flipX = !0, n;
    if (s && o === "v")
      return n.flipY = !0, n;
    if (o = parseFloat(o), isNaN(o))
      return n;
    switch (s) {
      case "grow":
        n.size = n.size + o;
        break;
      case "shrink":
        n.size = n.size - o;
        break;
      case "left":
        n.x = n.x - o;
        break;
      case "right":
        n.x = n.x + o;
        break;
      case "up":
        n.y = n.y - o;
        break;
      case "down":
        n.y = n.y + o;
        break;
      case "rotate":
        n.rotate = n.rotate + o;
        break;
    }
    return n;
  }, a);
}, Dc = {
  mixout: function() {
    return {
      parse: {
        transform: function(a) {
          return fr(a);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(a, n) {
        var r = n.getAttribute("data-fa-transform");
        return r && (a.transform = fr(r)), a;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractTransformGrouping = function(a) {
      var n = a.main, r = a.transform, i = a.containerWidth, s = a.iconWidth, o = {
        transform: "translate(".concat(i / 2, " 256)")
      }, l = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), f = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), u = "rotate(".concat(r.rotate, " 0 0)"), m = {
        transform: "".concat(l, " ").concat(f, " ").concat(u)
      }, _ = {
        transform: "translate(".concat(s / 2 * -1, " -256)")
      }, O = {
        outer: o,
        inner: m,
        path: _
      };
      return {
        tag: "g",
        attributes: h({}, O.outer),
        children: [{
          tag: "g",
          attributes: h({}, O.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: h(h({}, n.icon.attributes), O.path)
          }]
        }]
      };
    };
  }
}, Ya = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function ur(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Yc(e) {
  return e.tag === "g" ? e.children : [e];
}
var Tc = {
  hooks: function() {
    return {
      parseNodeAttributes: function(a, n) {
        var r = n.getAttribute("data-fa-mask"), i = r ? ga(r.split(" ").map(function(s) {
          return s.trim();
        })) : Tn();
        return i.prefix || (i.prefix = Ie()), a.mask = i, a.maskId = n.getAttribute("data-fa-mask-id"), a;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(a) {
      var n = a.children, r = a.attributes, i = a.main, s = a.mask, o = a.maskId, l = a.transform, f = i.width, u = i.icon, m = s.width, _ = s.icon, O = Yu({
        transform: l,
        containerWidth: m,
        iconWidth: f
      }), j = {
        tag: "rect",
        attributes: h(h({}, Ya), {}, {
          fill: "white"
        })
      }, z = u.children ? {
        children: u.children.map(ur)
      } : {}, V = {
        tag: "g",
        attributes: h({}, O.inner),
        children: [ur(h({
          tag: u.tag,
          attributes: h(h({}, u.attributes), O.path)
        }, z))]
      }, p = {
        tag: "g",
        attributes: h({}, O.outer),
        children: [V]
      }, b = "mask-".concat(o || wt()), Y = "clip-".concat(o || wt()), L = {
        tag: "mask",
        attributes: h(h({}, Ya), {}, {
          id: b,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [j, p]
      }, F = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: Y
          },
          children: Yc(_)
        }, L]
      };
      return n.push(F, {
        tag: "rect",
        attributes: h({
          fill: "currentColor",
          "clip-path": "url(#".concat(Y, ")"),
          mask: "url(#".concat(b, ")")
        }, Ya)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, Nc = {
  provides: function(t) {
    var a = !1;
    Ce.matchMedia && (a = Ce.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      var n = [], r = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: h(h({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var s = h(h({}, i), {}, {
        attributeName: "opacity"
      }), o = {
        tag: "circle",
        attributes: h(h({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return a || o.children.push({
        tag: "animate",
        attributes: h(h({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: h(h({}, s), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(o), n.push({
        tag: "path",
        attributes: h(h({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: a ? [] : [{
          tag: "animate",
          attributes: h(h({}, s), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), a || n.push({
        tag: "path",
        attributes: h(h({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: h(h({}, s), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: n
      };
    };
  }
}, Pc = {
  hooks: function() {
    return {
      parseNodeAttributes: function(a, n) {
        var r = n.getAttribute("data-fa-symbol"), i = r === null ? !1 : r === "" ? !0 : r;
        return a.symbol = i, a;
      }
    };
  }
}, Ac = [Pu, gc, pc, bc, _c, Mc, Oc, Dc, Tc, Nc, Pc];
Gu(Ac, {
  mixoutsTo: Z
});
Z.noAuto;
var Fi = Z.config, Cc = Z.library;
Z.dom;
var aa = Z.parse;
Z.findIconDefinition;
Z.toHtml;
var Ic = Z.icon;
Z.layer;
var Ec = Z.text;
Z.counter;
function cr(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), a.push.apply(a, n);
  }
  return a;
}
function ae(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cr(Object(a), !0).forEach(function(n) {
      G(e, n, a[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : cr(Object(a)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n));
    });
  }
  return e;
}
function Rc(e, t) {
  if (typeof e != "object" || !e) return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var n = a.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Lc(e) {
  var t = Rc(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function na(e) {
  "@babel/helpers - typeof";
  return na = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, na(e);
}
function G(e, t, a) {
  return t = Lc(t), t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
function Fc(e, t) {
  if (e == null) return {};
  var a = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      a[n] = e[n];
    }
  return a;
}
function Wc(e, t) {
  if (e == null) return {};
  var a = Fc(e, t), n, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
  }
  return a;
}
function Za(e) {
  return Uc(e) || jc(e) || zc(e) || Hc();
}
function Uc(e) {
  if (Array.isArray(e)) return qa(e);
}
function jc(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function zc(e, t) {
  if (e) {
    if (typeof e == "string") return qa(e, t);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set") return Array.from(e);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return qa(e, t);
  }
}
function qa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
  return n;
}
function Hc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Vc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Wi = { exports: {} };
(function(e) {
  (function(t) {
    var a = function(p, b, Y) {
      if (!f(b) || m(b) || _(b) || O(b) || l(b))
        return b;
      var L, F = 0, le = 0;
      if (u(b))
        for (L = [], le = b.length; F < le; F++)
          L.push(a(p, b[F], Y));
      else {
        L = {};
        for (var Q in b)
          Object.prototype.hasOwnProperty.call(b, Q) && (L[p(Q, Y)] = a(p, b[Q], Y));
      }
      return L;
    }, n = function(p, b) {
      b = b || {};
      var Y = b.separator || "_", L = b.split || /(?=[A-Z])/;
      return p.split(L).join(Y);
    }, r = function(p) {
      return j(p) ? p : (p = p.replace(/[\-_\s]+(.)?/g, function(b, Y) {
        return Y ? Y.toUpperCase() : "";
      }), p.substr(0, 1).toLowerCase() + p.substr(1));
    }, i = function(p) {
      var b = r(p);
      return b.substr(0, 1).toUpperCase() + b.substr(1);
    }, s = function(p, b) {
      return n(p, b).toLowerCase();
    }, o = Object.prototype.toString, l = function(p) {
      return typeof p == "function";
    }, f = function(p) {
      return p === Object(p);
    }, u = function(p) {
      return o.call(p) == "[object Array]";
    }, m = function(p) {
      return o.call(p) == "[object Date]";
    }, _ = function(p) {
      return o.call(p) == "[object RegExp]";
    }, O = function(p) {
      return o.call(p) == "[object Boolean]";
    }, j = function(p) {
      return p = p - 0, p === p;
    }, z = function(p, b) {
      var Y = b && "process" in b ? b.process : b;
      return typeof Y != "function" ? p : function(L, F) {
        return Y(L, p, F);
      };
    }, V = {
      camelize: r,
      decamelize: s,
      pascalize: i,
      depascalize: s,
      camelizeKeys: function(p, b) {
        return a(z(r, b), p);
      },
      decamelizeKeys: function(p, b) {
        return a(z(s, b), p, b);
      },
      pascalizeKeys: function(p, b) {
        return a(z(i, b), p);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = V : t.humps = V;
  })(Vc);
})(Wi);
var Gc = Wi.exports, $c = ["class", "style"];
function Bc(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, a) {
    var n = a.indexOf(":"), r = Gc.camelize(a.slice(0, n)), i = a.slice(n + 1).trim();
    return t[r] = i, t;
  }, {});
}
function Zc(e) {
  return e.split(/\s+/).reduce(function(t, a) {
    return t[a] = !0, t;
  }, {});
}
function Cn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var n = (e.children || []).map(function(l) {
    return Cn(l);
  }), r = Object.keys(e.attributes || {}).reduce(function(l, f) {
    var u = e.attributes[f];
    switch (f) {
      case "class":
        l.class = Zc(u);
        break;
      case "style":
        l.style = Bc(u);
        break;
      default:
        l.attrs[f] = u;
    }
    return l;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  a.class;
  var i = a.style, s = i === void 0 ? {} : i, o = Wc(a, $c);
  return vr(e.tag, ae(ae(ae({}, t), {}, {
    class: r.class,
    style: ae(ae({}, r.style), s)
  }, r.attrs), o), n);
}
var Ui = !1;
try {
  Ui = process.env.NODE_ENV === "production";
} catch {
}
function qc() {
  if (!Ui && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function mt(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? G({}, e, t) : {};
}
function Xc(e) {
  var t, a = (t = {
    "fa-spin": e.spin,
    "fa-pulse": e.pulse,
    "fa-fw": e.fixedWidth,
    "fa-border": e.border,
    "fa-li": e.listItem,
    "fa-inverse": e.inverse,
    "fa-flip": e.flip === !0,
    "fa-flip-horizontal": e.flip === "horizontal" || e.flip === "both",
    "fa-flip-vertical": e.flip === "vertical" || e.flip === "both"
  }, G(G(G(G(G(G(G(G(G(G(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), "fa-flash", e.flash), G(G(t, "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse));
  return Object.keys(a).map(function(n) {
    return a[n] ? n : null;
  }).filter(function(n) {
    return n;
  });
}
function dr(e) {
  if (e && na(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (aa.icon)
    return aa.icon(e);
  if (e === null)
    return null;
  if (na(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
var ji = Xa({
  name: "FontAwesomeIcon",
  props: {
    border: {
      type: Boolean,
      default: !1
    },
    fixedWidth: {
      type: Boolean,
      default: !1
    },
    flip: {
      type: [Boolean, String],
      default: !1,
      validator: function(t) {
        return [!0, !1, "horizontal", "vertical", "both"].indexOf(t) > -1;
      }
    },
    icon: {
      type: [Object, Array, String],
      required: !0
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    maskId: {
      type: String,
      default: null
    },
    listItem: {
      type: Boolean,
      default: !1
    },
    pull: {
      type: String,
      default: null,
      validator: function(t) {
        return ["right", "left"].indexOf(t) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: !1
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function(t) {
        return [90, 180, 270].indexOf(Number.parseInt(t, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null,
      validator: function(t) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(t) > -1;
      }
    },
    spin: {
      type: Boolean,
      default: !1
    },
    transform: {
      type: [String, Object],
      default: null
    },
    symbol: {
      type: [Boolean, String],
      default: !1
    },
    title: {
      type: String,
      default: null
    },
    titleId: {
      type: String,
      default: null
    },
    inverse: {
      type: Boolean,
      default: !1
    },
    bounce: {
      type: Boolean,
      default: !1
    },
    shake: {
      type: Boolean,
      default: !1
    },
    beat: {
      type: Boolean,
      default: !1
    },
    fade: {
      type: Boolean,
      default: !1
    },
    beatFade: {
      type: Boolean,
      default: !1
    },
    flash: {
      type: Boolean,
      default: !1
    },
    spinPulse: {
      type: Boolean,
      default: !1
    },
    spinReverse: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, a) {
    var n = a.attrs, r = te(function() {
      return dr(t.icon);
    }), i = te(function() {
      return mt("classes", Xc(t));
    }), s = te(function() {
      return mt("transform", typeof t.transform == "string" ? aa.transform(t.transform) : t.transform);
    }), o = te(function() {
      return mt("mask", dr(t.mask));
    }), l = te(function() {
      return Ic(r.value, ae(ae(ae(ae({}, i.value), s.value), o.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    Gi(l, function(u) {
      if (!u)
        return qc("Could not find one or more icon(s)", r.value, o.value);
    }, {
      immediate: !0
    });
    var f = te(function() {
      return l.value ? Cn(l.value.abstract[0], {}, n) : null;
    });
    return function() {
      return f.value;
    };
  }
});
Xa({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, a) {
    var n = a.slots, r = Fi.familyPrefix, i = te(function() {
      return ["".concat(r, "-layers")].concat(Za(t.fixedWidth ? ["".concat(r, "-fw")] : []));
    });
    return function() {
      return vr("div", {
        class: i.value
      }, n.default ? n.default() : []);
    };
  }
});
Xa({
  name: "FontAwesomeLayersText",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    transform: {
      type: [String, Object],
      default: null
    },
    counter: {
      type: Boolean,
      default: !1
    },
    position: {
      type: String,
      default: null,
      validator: function(t) {
        return ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(t) > -1;
      }
    }
  },
  setup: function(t, a) {
    var n = a.attrs, r = Fi.familyPrefix, i = te(function() {
      return mt("classes", [].concat(Za(t.counter ? ["".concat(r, "-layers-counter")] : []), Za(t.position ? ["".concat(r, "-layers-").concat(t.position)] : [])));
    }), s = te(function() {
      return mt("transform", typeof t.transform == "string" ? aa.transform(t.transform) : t.transform);
    }), o = te(function() {
      var f = Ec(t.value.toString(), ae(ae({}, s.value), i.value)), u = f.abstract;
      return t.counter && (u[0].attributes.class = u[0].attributes.class.replace("fa-layers-text", "")), u[0];
    }), l = te(function() {
      return Cn(o.value, {}, n);
    });
    return function() {
      return l.value;
    };
  }
});
const Kc = {
  components: { FontAwesomeIcon: ji, DateLink: ui },
  emits: ["click-date"],
  props: {
    date: {
      type: [String, Object],
      // YYYYMMDD or moment
      default: null
    },
    icon: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      default: null
    },
    /**
     * Whether this navigates forward (chronologically)
     */
    forward: {
      type: Boolean,
      default: !0
    }
  }
}, Jc = {
  key: 0,
  class: "mr-1"
}, Qc = {
  key: 1,
  class: "ml-1"
}, ed = {
  key: 1,
  class: "text-muted"
}, td = {
  key: 0,
  class: "mr-1"
}, ad = {
  key: 1,
  class: "ml-1"
};
function nd(e, t, a, n, r, i) {
  const s = Fe("font-awesome-icon"), o = Fe("date-link");
  return a.date ? (R(), ve(o, {
    key: 0,
    date: a.date,
    onClickDate: t[0] || (t[0] = (l) => e.$emit("click-date", l))
  }, {
    default: zt(() => [
      a.label && a.forward ? (R(), X("span", Jc, Ze(a.label), 1)) : ee("", !0),
      Ta(s, { icon: a.icon }, null, 8, ["icon"]),
      a.label && !a.forward ? (R(), X("span", Qc, Ze(a.label), 1)) : ee("", !0)
    ]),
    _: 1
  }, 8, ["date"])) : (R(), X("span", ed, [
    a.label && a.forward ? (R(), X("span", td, Ze(a.label), 1)) : ee("", !0),
    Ta(s, { icon: a.icon }, null, 8, ["icon"]),
    a.label && !a.forward ? (R(), X("span", ad, Ze(a.label), 1)) : ee("", !0)
  ]));
}
const rd = /* @__PURE__ */ St(Kc, [["render", nd], ["__scopeId", "data-v-3cf4e63e"]]);
var id = {
  prefix: "fas",
  iconName: "backward",
  icon: [512, 512, [9194], "f04a", "M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"]
}, sd = {
  prefix: "fas",
  iconName: "caret-right",
  icon: [256, 512, [], "f0da", "M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]
}, od = {
  prefix: "fas",
  iconName: "caret-left",
  icon: [256, 512, [], "f0d9", "M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"]
}, ld = {
  prefix: "fas",
  iconName: "forward",
  icon: [512, 512, [9193], "f04e", "M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"]
}, fd = {
  prefix: "fas",
  iconName: "calendar-day",
  icon: [448, 512, [], "f783", "M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z"]
};
Cc.add(
  od,
  sd,
  id,
  ld,
  fd
);
const ud = {
  components: {
    FontAwesomeIcon: ji,
    SmallHeader: Xi,
    DateLink: ui,
    DateNav: rd
  },
  data() {
    return {
      computer: new Un()
      // set in watcher
    };
  },
  emits: ["update:date"],
  props: {
    /**
     * The _current_ date. This is a v-model property (`v-model:date="..."`).
     * This component fires "date" events (upon user clicks/navigation).
     * The parent is expected to update this date property to the value
     * indicated in the event. This happens automatically if the parent
     * binds this property with v-model:date="...".
     *
     * https://vuejs.org/guide/components/v-model
     */
    date: {
      type: String,
      // YYYYMMDD
      required: !0,
      validator(e) {
        return d(e, "YYYYMMDD", !0).isValid();
      }
    },
    /**
     * moment.js date format string to use for the calendar label.
     * This may be empty to omit the label.
     */
    labelFormat: {
      type: String,
      default: "MMM YYYY"
    },
    /**
     * Whether to show a link to the current date.
     */
    todayNav: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether to show the day navigation links
     */
    dayNav: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether to show the month navigation links
     */
    monthNav: {
      type: Boolean,
      default: !1
    },
    /**
     * Whether calendar dates are clickable navigation links
     */
    dateNav: {
      type: Boolean,
      default: !1
    },
    /**
     * If specified, the calendar will only show this month, regardless of the current date.
     * Notice that month & day navigation (if enabled) still behaves the same, which might be confusing.
     * The expected use case is to turn off month & day navigation when using monthLock mode.
     */
    monthLock: {
      type: String,
      // YYYYMM
      required: !1,
      validator(e) {
        return d(e, "YYYYMM", !0).isValid();
      }
    }
  },
  computed: {
    monthLabel() {
      return this.labelFormat ? (this.monthLock ? d(this.monthLock, "YYYYMM") : d(this.date, "YYYYMMDD")).format(this.labelFormat) : "";
    },
    dateConfig() {
      return this.computer.daysInMonth.map((e) => ({
        date: e.format("YYYYMMDD"),
        class: this.dateClass(e),
        style: this.dateStyle(e),
        label: this.dateLabel(e),
        current: this.isCurrent(e)
      }));
    },
    prevMonth() {
      return this.computer.prevMonth;
    },
    nextMonth() {
      return this.computer.nextMonth;
    },
    prevDay() {
      return this.computer.prevDay;
    },
    nextDay() {
      return this.computer.nextDay;
    },
    prevDayLabel() {
      return this.formatDayLabel(this.prevDay);
    },
    nextDayLabel() {
      return this.formatDayLabel(this.nextDay);
    }
  },
  methods: {
    isCurrent(e) {
      return d(e).isSame(this.computer.current);
    },
    isInMonth(e) {
      return this.computer.isInMonth(e);
    },
    dateClass(e) {
      const t = this.isInMonth(e), a = t && this.isCurrent(e);
      return [
        t ? "day" : "empty-day",
        a ? "today" : "not-today"
      ];
    },
    dateStyle(e) {
      return !1;
    },
    dateLabel(e) {
      return this.isInMonth(e) ? d(e).format("D") : "";
    },
    formatDate(e) {
      return d(e).format("YYYYMMDD");
    },
    formatDayLabel(e) {
      return e ? e.format("MMM D") : null;
    },
    handleClick(e) {
      this.$emit("update:date", e);
    },
    handleToday() {
      this.$emit("update:date", d().format("YYYYMMDD"));
    }
  },
  watch: {
    date: {
      immediate: !0,
      handler(e) {
        this.computer = new Un().with(e), this.monthLock && (this.computer.lockedMonth = this.monthLock);
      }
    }
  }
}, cd = { class: "calendar-wrap style-b" }, dd = { class: "d-flex justify-content-between" }, md = { class: "mx-auto" }, hd = { class: "calendar" }, vd = { class: "date-nav" }, yd = { class: "mr-auto" }, gd = { class: "ml-auto" };
function pd(e, t, a, n, r, i) {
  const s = Fe("date-nav"), o = Fe("small-header"), l = Fe("date-link"), f = Fe("font-awesome-icon");
  return R(), X("div", cd, [
    i.monthLabel || a.monthNav ? (R(), ve(o, { key: 0 }, {
      default: zt(() => [
        Re("div", dd, [
          a.monthNav ? (R(), ve(s, {
            key: 0,
            date: i.prevMonth,
            icon: "backward",
            forward: !1,
            onClickDate: i.handleClick
          }, null, 8, ["date", "onClickDate"])) : ee("", !0),
          Re("span", md, Ze(i.monthLabel), 1),
          a.monthNav ? (R(), ve(s, {
            key: 1,
            date: i.nextMonth,
            icon: "forward",
            forward: !0,
            onClickDate: i.handleClick
          }, null, 8, ["date", "onClickDate"])) : ee("", !0)
        ])
      ]),
      _: 1
    })) : ee("", !0),
    Re("div", hd, [
      (R(!0), X(yr, null, gr(i.dateConfig, (u) => (R(), X("div", {
        key: u.date,
        class: hr(u.class),
        style: pr(u.style)
      }, [
        Ta(l, {
          date: u.date,
          navigable: a.dateNav,
          onClickDate: i.handleClick
        }, {
          default: zt(() => [
            $i(Ze(u.label), 1)
          ]),
          _: 2
        }, 1032, ["date", "navigable", "onClickDate"])
      ], 6))), 128))
    ]),
    a.dayNav || a.todayNav ? (R(), ve(o, { key: 1 }, {
      default: zt(() => [
        Re("div", vd, [
          Re("span", yd, [
            i.prevDay && a.dayNav ? (R(), ve(s, {
              key: 0,
              date: i.prevDay,
              icon: "caret-left",
              label: i.prevDayLabel,
              forward: !1,
              onClickDate: i.handleClick
            }, null, 8, ["date", "label", "onClickDate"])) : ee("", !0)
          ]),
          Re("span", null, [
            a.todayNav ? (R(), ve(f, {
              key: 0,
              icon: "calendar-day",
              class: "clickable",
              onClick: i.handleToday
            }, null, 8, ["onClick"])) : ee("", !0)
          ]),
          Re("span", gd, [
            i.nextDay && a.dayNav ? (R(), ve(s, {
              key: 0,
              date: i.nextDay,
              icon: "caret-right",
              label: i.nextDayLabel,
              forward: !0,
              onClickDate: i.handleClick
            }, null, 8, ["date", "label", "onClickDate"])) : ee("", !0)
          ])
        ])
      ]),
      _: 1
    })) : ee("", !0)
  ]);
}
const bd = /* @__PURE__ */ St(ud, [["render", pd], ["__scopeId", "data-v-731dcb13"]]), _d = {
  name: "CalendarGrid",
  components: { Calendar: bd },
  emits: ["update:date"],
  props: {
    date: {
      type: String,
      required: !0
    },
    startMonth: {
      type: String,
      required: !0,
      validator(e) {
        return d(e, "YYYYMM", !0).isValid();
      }
    },
    monthCount: {
      type: Number,
      required: !0,
      validator(e) {
        return e > 0;
      }
    },
    columns: {
      type: Number,
      required: !1
    },
    /**
     * Whether to allow dates to be clickable, emitting "update:date" event
     */
    dateNav: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    months() {
      const e = [], t = d(this.startMonth, "YYYYMM");
      for (let a = 0; a < this.monthCount; a++)
        e.push(t.format("YYYYMM")), t.add(1, "month");
      return e;
    },
    gridStyle() {
      return this.columns ? {
        "grid-template-columns": `repeat(${this.columns}, 1fr)`
      } : !1;
    }
  }
};
function kd(e, t, a, n, r, i) {
  const s = Fe("calendar");
  return R(), X("div", {
    class: "calendar-grid",
    style: pr(i.gridStyle)
  }, [
    (R(!0), X(yr, null, gr(i.months, (o) => (R(), ve(s, {
      key: o,
      "month-lock": o,
      "day-nav": !1,
      "month-nav": !1,
      "date-nav": a.dateNav,
      date: a.date,
      "onUpdate:date": t[0] || (t[0] = (l) => e.$emit("update:date", l))
    }, null, 8, ["month-lock", "date-nav", "date"]))), 128))
  ], 4);
}
const xd = /* @__PURE__ */ St(_d, [["render", kd], ["__scopeId", "data-v-36f0d052"]]);
export {
  bd as Calendar,
  xd as CalendarGrid
};
