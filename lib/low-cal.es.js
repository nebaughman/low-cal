var Is = Object.defineProperty;
var Ls = (e, t, n) => t in e ? Is(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ln = (e, t, n) => Ls(e, typeof t != "symbol" ? t + "" : t, n);
import { openBlock as C, createElementBlock as $, renderSlot as nr, normalizeClass as ar, defineComponent as jn, computed as J, watch as Rs, h as rr, resolveComponent as Le, createBlock as he, withCtx as Pt, toDisplayString as $e, createCommentVNode as K, createVNode as _n, createElementVNode as Ee, Fragment as sr, renderList as ir, normalizeStyle as or, createTextVNode as Ws } from "vue";
const bt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, r] of t)
    n[a] = r;
  return n;
}, Us = {}, zs = { class: "small-header" };
function js(e, t, n, a, r, s) {
  return C(), $("div", zs, [
    nr(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Hs = /* @__PURE__ */ bt(Us, [["render", js], ["__scopeId", "data-v-d0e6fe58"]]);
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var lr;
function c() {
  return lr.apply(null, arguments);
}
function Vs(e) {
  lr = e;
}
function te(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function We(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function S(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Hn(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (S(e, t))
      return !1;
  return !0;
}
function U(e) {
  return e === void 0;
}
function ve(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function kt(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function ur(e, t) {
  var n = [], a, r = e.length;
  for (a = 0; a < r; ++a)
    n.push(t(e[a], a));
  return n;
}
function Oe(e, t) {
  for (var n in t)
    S(t, n) && (e[n] = t[n]);
  return S(t, "toString") && (e.toString = t.toString), S(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function fe(e, t, n, a) {
  return Ar(e, t, n, a, !0).utc();
}
function Gs() {
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
function v(e) {
  return e._pf == null && (e._pf = Gs()), e._pf;
}
var vn;
Array.prototype.some ? vn = Array.prototype.some : vn = function(e) {
  var t = Object(this), n = t.length >>> 0, a;
  for (a = 0; a < n; a++)
    if (a in t && e.call(this, t[a], a, t))
      return !0;
  return !1;
};
function Vn(e) {
  var t = null, n = !1, a = e._d && !isNaN(e._d.getTime());
  if (a && (t = v(e), n = vn.call(t.parsedDateParts, function(r) {
    return r != null;
  }), a = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n), e._strict && (a = a && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = a;
  else
    return a;
  return e._isValid;
}
function Bt(e) {
  var t = fe(NaN);
  return e != null ? Oe(v(t), e) : v(t).userInvalidated = !0, t;
}
var Sa = c.momentProperties = [], un = !1;
function Gn(e, t) {
  var n, a, r, s = Sa.length;
  if (U(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), U(t._i) || (e._i = t._i), U(t._f) || (e._f = t._f), U(t._l) || (e._l = t._l), U(t._strict) || (e._strict = t._strict), U(t._tzm) || (e._tzm = t._tzm), U(t._isUTC) || (e._isUTC = t._isUTC), U(t._offset) || (e._offset = t._offset), U(t._pf) || (e._pf = v(t)), U(t._locale) || (e._locale = t._locale), s > 0)
    for (n = 0; n < s; n++)
      a = Sa[n], r = t[a], U(r) || (e[a] = r);
  return e;
}
function wt(e) {
  Gn(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), un === !1 && (un = !0, c.updateOffset(this), un = !1);
}
function ne(e) {
  return e instanceof wt || e != null && e._isAMomentObject != null;
}
function fr(e) {
  c.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function Z(e, t) {
  var n = !0;
  return Oe(function() {
    if (c.deprecationHandler != null && c.deprecationHandler(null, e), n) {
      var a = [], r, s, i, o = arguments.length;
      for (s = 0; s < o; s++) {
        if (r = "", typeof arguments[s] == "object") {
          r += `
[` + s + "] ";
          for (i in arguments[0])
            S(arguments[0], i) && (r += i + ": " + arguments[0][i] + ", ");
          r = r.slice(0, -2);
        } else
          r = arguments[s];
        a.push(r);
      }
      fr(
        e + `
Arguments: ` + Array.prototype.slice.call(a).join("") + `
` + new Error().stack
      ), n = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var xa = {};
function cr(e, t) {
  c.deprecationHandler != null && c.deprecationHandler(e, t), xa[e] || (fr(t), xa[e] = !0);
}
c.suppressDeprecationWarnings = !1;
c.deprecationHandler = null;
function ce(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function Bs(e) {
  var t, n;
  for (n in e)
    S(e, n) && (t = e[n], ce(t) ? this[n] = t : this["_" + n] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function bn(e, t) {
  var n = Oe({}, e), a;
  for (a in t)
    S(t, a) && (We(e[a]) && We(t[a]) ? (n[a] = {}, Oe(n[a], e[a]), Oe(n[a], t[a])) : t[a] != null ? n[a] = t[a] : delete n[a]);
  for (a in e)
    S(e, a) && !S(t, a) && We(e[a]) && (n[a] = Oe({}, n[a]));
  return n;
}
function Bn(e) {
  e != null && this.set(e);
}
var kn;
Object.keys ? kn = Object.keys : kn = function(e) {
  var t, n = [];
  for (t in e)
    S(e, t) && n.push(t);
  return n;
};
var $s = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Zs(e, t, n) {
  var a = this._calendar[e] || this._calendar.sameElse;
  return ce(a) ? a.call(t, n) : a;
}
function le(e, t, n) {
  var a = "" + Math.abs(e), r = t - a.length, s = e >= 0;
  return (s ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + a;
}
var $n = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Yt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, fn = {}, Xe = {};
function y(e, t, n, a) {
  var r = a;
  typeof a == "string" && (r = function() {
    return this[a]();
  }), e && (Xe[e] = r), t && (Xe[t[0]] = function() {
    return le(r.apply(this, arguments), t[1], t[2]);
  }), n && (Xe[n] = function() {
    return this.localeData().ordinal(
      r.apply(this, arguments),
      e
    );
  });
}
function qs(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Xs(e) {
  var t = e.match($n), n, a;
  for (n = 0, a = t.length; n < a; n++)
    Xe[t[n]] ? t[n] = Xe[t[n]] : t[n] = qs(t[n]);
  return function(r) {
    var s = "", i;
    for (i = 0; i < a; i++)
      s += ce(t[i]) ? t[i].call(r, e) : t[i];
    return s;
  };
}
function At(e, t) {
  return e.isValid() ? (t = dr(t, e.localeData()), fn[t] = fn[t] || Xs(t), fn[t](e)) : e.localeData().invalidDate();
}
function dr(e, t) {
  var n = 5;
  function a(r) {
    return t.longDateFormat(r) || r;
  }
  for (Yt.lastIndex = 0; n >= 0 && Yt.test(e); )
    e = e.replace(
      Yt,
      a
    ), Yt.lastIndex = 0, n -= 1;
  return e;
}
var Ks = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Js(e) {
  var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
  return t || !n ? t : (this._longDateFormat[e] = n.match($n).map(function(a) {
    return a === "MMMM" || a === "MM" || a === "DD" || a === "dddd" ? a.slice(1) : a;
  }).join(""), this._longDateFormat[e]);
}
var Qs = "Invalid date";
function ei() {
  return this._invalidDate;
}
var ti = "%d", ni = /\d{1,2}/;
function ai(e) {
  return this._ordinal.replace("%d", e);
}
var ri = {
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
function si(e, t, n, a) {
  var r = this._relativeTime[n];
  return ce(r) ? r(e, t, n, a) : r.replace(/%d/i, e);
}
function ii(e, t) {
  var n = this._relativeTime[e > 0 ? "future" : "past"];
  return ce(n) ? n(t) : n.replace(/%s/i, t);
}
var Ma = {
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
function q(e) {
  return typeof e == "string" ? Ma[e] || Ma[e.toLowerCase()] : void 0;
}
function Zn(e) {
  var t = {}, n, a;
  for (a in e)
    S(e, a) && (n = q(a), n && (t[n] = e[a]));
  return t;
}
var oi = {
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
function li(e) {
  var t = [], n;
  for (n in e)
    S(e, n) && t.push({ unit: n, priority: oi[n] });
  return t.sort(function(a, r) {
    return a.priority - r.priority;
  }), t;
}
var hr = /\d/, H = /\d\d/, mr = /\d{3}/, qn = /\d{4}/, $t = /[+-]?\d{6}/, Y = /\d\d?/, yr = /\d\d\d\d?/, gr = /\d\d\d\d\d\d?/, Zt = /\d{1,3}/, Xn = /\d{1,4}/, qt = /[+-]?\d{1,6}/, nt = /\d+/, Xt = /[+-]?\d+/, ui = /Z|[+-]\d\d:?\d\d/gi, Kt = /Z|[+-]\d\d(?::?\d\d)?/gi, fi = /[+-]?\d+(\.\d{1,3})?/, St = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, at = /^[1-9]\d?/, Kn = /^([1-9]\d|\d)/, Lt;
Lt = {};
function h(e, t, n) {
  Lt[e] = ce(t) ? t : function(a, r) {
    return a && n ? n : t;
  };
}
function ci(e, t) {
  return S(Lt, e) ? Lt[e](t._strict, t._locale) : new RegExp(di(e));
}
function di(e) {
  return pe(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, n, a, r, s) {
        return n || a || r || s;
      }
    )
  );
}
function pe(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function B(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function k(e) {
  var t = +e, n = 0;
  return t !== 0 && isFinite(t) && (n = B(t)), n;
}
var wn = {};
function M(e, t) {
  var n, a = t, r;
  for (typeof e == "string" && (e = [e]), ve(t) && (a = function(s, i) {
    i[t] = k(s);
  }), r = e.length, n = 0; n < r; n++)
    wn[e[n]] = a;
}
function xt(e, t) {
  M(e, function(n, a, r, s) {
    r._w = r._w || {}, t(n, r._w, r, s);
  });
}
function hi(e, t, n) {
  t != null && S(wn, e) && wn[e](t, n._a, n, e);
}
function Jt(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var L = 0, ye = 1, se = 2, E = 3, ee = 4, ge = 5, Re = 6, mi = 7, yi = 8;
y("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? le(e, 4) : "+" + e;
});
y(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
y(0, ["YYYY", 4], 0, "year");
y(0, ["YYYYY", 5], 0, "year");
y(0, ["YYYYYY", 6, !0], 0, "year");
h("Y", Xt);
h("YY", Y, H);
h("YYYY", Xn, qn);
h("YYYYY", qt, $t);
h("YYYYYY", qt, $t);
M(["YYYYY", "YYYYYY"], L);
M("YYYY", function(e, t) {
  t[L] = e.length === 2 ? c.parseTwoDigitYear(e) : k(e);
});
M("YY", function(e, t) {
  t[L] = c.parseTwoDigitYear(e);
});
M("Y", function(e, t) {
  t[L] = parseInt(e, 10);
});
function ft(e) {
  return Jt(e) ? 366 : 365;
}
c.parseTwoDigitYear = function(e) {
  return k(e) + (k(e) > 68 ? 1900 : 2e3);
};
var pr = rt("FullYear", !0);
function gi() {
  return Jt(this.year());
}
function rt(e, t) {
  return function(n) {
    return n != null ? (_r(this, e, n), c.updateOffset(this, t), this) : mt(this, e);
  };
}
function mt(e, t) {
  if (!e.isValid())
    return NaN;
  var n = e._d, a = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return a ? n.getUTCMilliseconds() : n.getMilliseconds();
    case "Seconds":
      return a ? n.getUTCSeconds() : n.getSeconds();
    case "Minutes":
      return a ? n.getUTCMinutes() : n.getMinutes();
    case "Hours":
      return a ? n.getUTCHours() : n.getHours();
    case "Date":
      return a ? n.getUTCDate() : n.getDate();
    case "Day":
      return a ? n.getUTCDay() : n.getDay();
    case "Month":
      return a ? n.getUTCMonth() : n.getMonth();
    case "FullYear":
      return a ? n.getUTCFullYear() : n.getFullYear();
    default:
      return NaN;
  }
}
function _r(e, t, n) {
  var a, r, s, i, o;
  if (!(!e.isValid() || isNaN(n))) {
    switch (a = e._d, r = e._isUTC, t) {
      case "Milliseconds":
        return void (r ? a.setUTCMilliseconds(n) : a.setMilliseconds(n));
      case "Seconds":
        return void (r ? a.setUTCSeconds(n) : a.setSeconds(n));
      case "Minutes":
        return void (r ? a.setUTCMinutes(n) : a.setMinutes(n));
      case "Hours":
        return void (r ? a.setUTCHours(n) : a.setHours(n));
      case "Date":
        return void (r ? a.setUTCDate(n) : a.setDate(n));
      case "FullYear":
        break;
      default:
        return;
    }
    s = n, i = e.month(), o = e.date(), o = o === 29 && i === 1 && !Jt(s) ? 28 : o, r ? a.setUTCFullYear(s, i, o) : a.setFullYear(s, i, o);
  }
}
function pi(e) {
  return e = q(e), ce(this[e]) ? this[e]() : this;
}
function _i(e, t) {
  if (typeof e == "object") {
    e = Zn(e);
    var n = li(e), a, r = n.length;
    for (a = 0; a < r; a++)
      this[n[a].unit](e[n[a].unit]);
  } else if (e = q(e), ce(this[e]))
    return this[e](t);
  return this;
}
function vi(e, t) {
  return (e % t + t) % t;
}
var A;
Array.prototype.indexOf ? A = Array.prototype.indexOf : A = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Jn(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var n = vi(t, 12);
  return e += (t - n) / 12, n === 1 ? Jt(e) ? 29 : 28 : 31 - n % 7 % 2;
}
y("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
y("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
y("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
h("M", Y, at);
h("MM", Y, H);
h("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
h("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
M(["M", "MM"], function(e, t) {
  t[ye] = k(e) - 1;
});
M(["MMM", "MMMM"], function(e, t, n, a) {
  var r = n._locale.monthsParse(e, a, n._strict);
  r != null ? t[ye] = r : v(n).invalidMonth = e;
});
var bi = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), vr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), br = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, ki = St, wi = St;
function Si(e, t) {
  return e ? te(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || br).test(t) ? "format" : "standalone"][e.month()] : te(this._months) ? this._months : this._months.standalone;
}
function xi(e, t) {
  return e ? te(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[br.test(t) ? "format" : "standalone"][e.month()] : te(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Mi(e, t, n) {
  var a, r, s, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; a < 12; ++a)
      s = fe([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(
        s,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[a] = this.months(s, "").toLocaleLowerCase();
  return n ? t === "MMM" ? (r = A.call(this._shortMonthsParse, i), r !== -1 ? r : null) : (r = A.call(this._longMonthsParse, i), r !== -1 ? r : null) : t === "MMM" ? (r = A.call(this._shortMonthsParse, i), r !== -1 ? r : (r = A.call(this._longMonthsParse, i), r !== -1 ? r : null)) : (r = A.call(this._longMonthsParse, i), r !== -1 ? r : (r = A.call(this._shortMonthsParse, i), r !== -1 ? r : null));
}
function Oi(e, t, n) {
  var a, r, s;
  if (this._monthsParseExact)
    return Mi.call(this, e, t, n);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), a = 0; a < 12; a++) {
    if (r = fe([2e3, a]), n && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp(
      "^" + this.months(r, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[a] = new RegExp(
      "^" + this.monthsShort(r, "").replace(".", "") + "$",
      "i"
    )), !n && !this._monthsParse[a] && (s = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[a] = new RegExp(s.replace(".", ""), "i")), n && t === "MMMM" && this._longMonthsParse[a].test(e))
      return a;
    if (n && t === "MMM" && this._shortMonthsParse[a].test(e))
      return a;
    if (!n && this._monthsParse[a].test(e))
      return a;
  }
}
function kr(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = k(t);
    else if (t = e.localeData().monthsParse(t), !ve(t))
      return e;
  }
  var n = t, a = e.date();
  return a = a < 29 ? a : Math.min(a, Jn(e.year(), n)), e._isUTC ? e._d.setUTCMonth(n, a) : e._d.setMonth(n, a), e;
}
function wr(e) {
  return e != null ? (kr(this, e), c.updateOffset(this, !0), this) : mt(this, "Month");
}
function Di() {
  return Jn(this.year(), this.month());
}
function Yi(e) {
  return this._monthsParseExact ? (S(this, "_monthsRegex") || Sr.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (S(this, "_monthsShortRegex") || (this._monthsShortRegex = ki), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Ti(e) {
  return this._monthsParseExact ? (S(this, "_monthsRegex") || Sr.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (S(this, "_monthsRegex") || (this._monthsRegex = wi), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Sr() {
  function e(l, u) {
    return u.length - l.length;
  }
  var t = [], n = [], a = [], r, s, i, o;
  for (r = 0; r < 12; r++)
    s = fe([2e3, r]), i = pe(this.monthsShort(s, "")), o = pe(this.months(s, "")), t.push(i), n.push(o), a.push(o), a.push(i);
  t.sort(e), n.sort(e), a.sort(e), this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function Ni(e, t, n, a, r, s, i) {
  var o;
  return e < 100 && e >= 0 ? (o = new Date(e + 400, t, n, a, r, s, i), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, n, a, r, s, i), o;
}
function yt(e) {
  var t, n;
  return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Rt(e, t, n) {
  var a = 7 + t - n, r = (7 + yt(e, 0, a).getUTCDay() - t) % 7;
  return -r + a - 1;
}
function xr(e, t, n, a, r) {
  var s = (7 + n - a) % 7, i = Rt(e, a, r), o = 1 + 7 * (t - 1) + s + i, l, u;
  return o <= 0 ? (l = e - 1, u = ft(l) + o) : o > ft(e) ? (l = e + 1, u = o - ft(e)) : (l = e, u = o), {
    year: l,
    dayOfYear: u
  };
}
function gt(e, t, n) {
  var a = Rt(e.year(), t, n), r = Math.floor((e.dayOfYear() - a - 1) / 7) + 1, s, i;
  return r < 1 ? (i = e.year() - 1, s = r + _e(i, t, n)) : r > _e(e.year(), t, n) ? (s = r - _e(e.year(), t, n), i = e.year() + 1) : (i = e.year(), s = r), {
    week: s,
    year: i
  };
}
function _e(e, t, n) {
  var a = Rt(e, t, n), r = Rt(e + 1, t, n);
  return (ft(e) - a + r) / 7;
}
y("w", ["ww", 2], "wo", "week");
y("W", ["WW", 2], "Wo", "isoWeek");
h("w", Y, at);
h("ww", Y, H);
h("W", Y, at);
h("WW", Y, H);
xt(
  ["w", "ww", "W", "WW"],
  function(e, t, n, a) {
    t[a.substr(0, 1)] = k(e);
  }
);
function Pi(e) {
  return gt(e, this._week.dow, this._week.doy).week;
}
var Ai = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function Ci() {
  return this._week.dow;
}
function Ei() {
  return this._week.doy;
}
function Fi(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Ii(e) {
  var t = gt(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
y("d", 0, "do", "day");
y("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
y("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
y("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
y("e", 0, 0, "weekday");
y("E", 0, 0, "isoWeekday");
h("d", Y);
h("e", Y);
h("E", Y);
h("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
h("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
h("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
xt(["dd", "ddd", "dddd"], function(e, t, n, a) {
  var r = n._locale.weekdaysParse(e, a, n._strict);
  r != null ? t.d = r : v(n).invalidWeekday = e;
});
xt(["d", "e", "E"], function(e, t, n, a) {
  t[a] = k(e);
});
function Li(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Ri(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Qn(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Wi = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Mr = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Ui = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), zi = St, ji = St, Hi = St;
function Vi(e, t) {
  var n = te(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Qn(n, this._week.dow) : e ? n[e.day()] : n;
}
function Gi(e) {
  return e === !0 ? Qn(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Bi(e) {
  return e === !0 ? Qn(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function $i(e, t, n) {
  var a, r, s, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; a < 7; ++a)
      s = fe([2e3, 1]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(
        s,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[a] = this.weekdaysShort(
        s,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(s, "").toLocaleLowerCase();
  return n ? t === "dddd" ? (r = A.call(this._weekdaysParse, i), r !== -1 ? r : null) : t === "ddd" ? (r = A.call(this._shortWeekdaysParse, i), r !== -1 ? r : null) : (r = A.call(this._minWeekdaysParse, i), r !== -1 ? r : null) : t === "dddd" ? (r = A.call(this._weekdaysParse, i), r !== -1 || (r = A.call(this._shortWeekdaysParse, i), r !== -1) ? r : (r = A.call(this._minWeekdaysParse, i), r !== -1 ? r : null)) : t === "ddd" ? (r = A.call(this._shortWeekdaysParse, i), r !== -1 || (r = A.call(this._weekdaysParse, i), r !== -1) ? r : (r = A.call(this._minWeekdaysParse, i), r !== -1 ? r : null)) : (r = A.call(this._minWeekdaysParse, i), r !== -1 || (r = A.call(this._weekdaysParse, i), r !== -1) ? r : (r = A.call(this._shortWeekdaysParse, i), r !== -1 ? r : null));
}
function Zi(e, t, n) {
  var a, r, s;
  if (this._weekdaysParseExact)
    return $i.call(this, e, t, n);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), a = 0; a < 7; a++) {
    if (r = fe([2e3, 1]).day(a), n && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp(
      "^" + this.weekdays(r, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[a] = new RegExp(
      "^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[a] = new RegExp(
      "^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[a] || (s = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[a] = new RegExp(s.replace(".", ""), "i")), n && t === "dddd" && this._fullWeekdaysParse[a].test(e))
      return a;
    if (n && t === "ddd" && this._shortWeekdaysParse[a].test(e))
      return a;
    if (n && t === "dd" && this._minWeekdaysParse[a].test(e))
      return a;
    if (!n && this._weekdaysParse[a].test(e))
      return a;
  }
}
function qi(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = mt(this, "Day");
  return e != null ? (e = Li(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Xi(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Ki(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Ri(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Ji(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || ea.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (S(this, "_weekdaysRegex") || (this._weekdaysRegex = zi), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Qi(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || ea.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (S(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ji), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function eo(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || ea.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (S(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Hi), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function ea() {
  function e(d, b) {
    return b.length - d.length;
  }
  var t = [], n = [], a = [], r = [], s, i, o, l, u;
  for (s = 0; s < 7; s++)
    i = fe([2e3, 1]).day(s), o = pe(this.weekdaysMin(i, "")), l = pe(this.weekdaysShort(i, "")), u = pe(this.weekdays(i, "")), t.push(o), n.push(l), a.push(u), r.push(o), r.push(l), r.push(u);
  t.sort(e), n.sort(e), a.sort(e), r.sort(e), this._weekdaysRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + a.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function ta() {
  return this.hours() % 12 || 12;
}
function to() {
  return this.hours() || 24;
}
y("H", ["HH", 2], 0, "hour");
y("h", ["hh", 2], 0, ta);
y("k", ["kk", 2], 0, to);
y("hmm", 0, 0, function() {
  return "" + ta.apply(this) + le(this.minutes(), 2);
});
y("hmmss", 0, 0, function() {
  return "" + ta.apply(this) + le(this.minutes(), 2) + le(this.seconds(), 2);
});
y("Hmm", 0, 0, function() {
  return "" + this.hours() + le(this.minutes(), 2);
});
y("Hmmss", 0, 0, function() {
  return "" + this.hours() + le(this.minutes(), 2) + le(this.seconds(), 2);
});
function Or(e, t) {
  y(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
Or("a", !0);
Or("A", !1);
function Dr(e, t) {
  return t._meridiemParse;
}
h("a", Dr);
h("A", Dr);
h("H", Y, Kn);
h("h", Y, at);
h("k", Y, at);
h("HH", Y, H);
h("hh", Y, H);
h("kk", Y, H);
h("hmm", yr);
h("hmmss", gr);
h("Hmm", yr);
h("Hmmss", gr);
M(["H", "HH"], E);
M(["k", "kk"], function(e, t, n) {
  var a = k(e);
  t[E] = a === 24 ? 0 : a;
});
M(["a", "A"], function(e, t, n) {
  n._isPm = n._locale.isPM(e), n._meridiem = e;
});
M(["h", "hh"], function(e, t, n) {
  t[E] = k(e), v(n).bigHour = !0;
});
M("hmm", function(e, t, n) {
  var a = e.length - 2;
  t[E] = k(e.substr(0, a)), t[ee] = k(e.substr(a)), v(n).bigHour = !0;
});
M("hmmss", function(e, t, n) {
  var a = e.length - 4, r = e.length - 2;
  t[E] = k(e.substr(0, a)), t[ee] = k(e.substr(a, 2)), t[ge] = k(e.substr(r)), v(n).bigHour = !0;
});
M("Hmm", function(e, t, n) {
  var a = e.length - 2;
  t[E] = k(e.substr(0, a)), t[ee] = k(e.substr(a));
});
M("Hmmss", function(e, t, n) {
  var a = e.length - 4, r = e.length - 2;
  t[E] = k(e.substr(0, a)), t[ee] = k(e.substr(a, 2)), t[ge] = k(e.substr(r));
});
function no(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var ao = /[ap]\.?m?\.?/i, ro = rt("Hours", !0);
function so(e, t, n) {
  return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}
var Yr = {
  calendar: $s,
  longDateFormat: Ks,
  invalidDate: Qs,
  ordinal: ti,
  dayOfMonthOrdinalParse: ni,
  relativeTime: ri,
  months: bi,
  monthsShort: vr,
  week: Ai,
  weekdays: Wi,
  weekdaysMin: Ui,
  weekdaysShort: Mr,
  meridiemParse: ao
}, T = {}, it = {}, pt;
function io(e, t) {
  var n, a = Math.min(e.length, t.length);
  for (n = 0; n < a; n += 1)
    if (e[n] !== t[n])
      return n;
  return a;
}
function Oa(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function oo(e) {
  for (var t = 0, n, a, r, s; t < e.length; ) {
    for (s = Oa(e[t]).split("-"), n = s.length, a = Oa(e[t + 1]), a = a ? a.split("-") : null; n > 0; ) {
      if (r = Qt(s.slice(0, n).join("-")), r)
        return r;
      if (a && a.length >= n && io(s, a) >= n - 1)
        break;
      n--;
    }
    t++;
  }
  return pt;
}
function lo(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function Qt(e) {
  var t = null, n;
  if (T[e] === void 0 && typeof module < "u" && module && module.exports && lo(e))
    try {
      t = pt._abbr, n = require, n("./locale/" + e), Te(t);
    } catch {
      T[e] = null;
    }
  return T[e];
}
function Te(e, t) {
  var n;
  return e && (U(t) ? n = we(e) : n = na(e, t), n ? pt = n : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), pt._abbr;
}
function na(e, t) {
  if (t !== null) {
    var n, a = Yr;
    if (t.abbr = e, T[e] != null)
      cr(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), a = T[e]._config;
    else if (t.parentLocale != null)
      if (T[t.parentLocale] != null)
        a = T[t.parentLocale]._config;
      else if (n = Qt(t.parentLocale), n != null)
        a = n._config;
      else
        return it[t.parentLocale] || (it[t.parentLocale] = []), it[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return T[e] = new Bn(bn(a, t)), it[e] && it[e].forEach(function(r) {
      na(r.name, r.config);
    }), Te(e), T[e];
  } else
    return delete T[e], null;
}
function uo(e, t) {
  if (t != null) {
    var n, a, r = Yr;
    T[e] != null && T[e].parentLocale != null ? T[e].set(bn(T[e]._config, t)) : (a = Qt(e), a != null && (r = a._config), t = bn(r, t), a == null && (t.abbr = e), n = new Bn(t), n.parentLocale = T[e], T[e] = n), Te(e);
  } else
    T[e] != null && (T[e].parentLocale != null ? (T[e] = T[e].parentLocale, e === Te() && Te(e)) : T[e] != null && delete T[e]);
  return T[e];
}
function we(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return pt;
  if (!te(e)) {
    if (t = Qt(e), t)
      return t;
    e = [e];
  }
  return oo(e);
}
function fo() {
  return kn(T);
}
function aa(e) {
  var t, n = e._a;
  return n && v(e).overflow === -2 && (t = n[ye] < 0 || n[ye] > 11 ? ye : n[se] < 1 || n[se] > Jn(n[L], n[ye]) ? se : n[E] < 0 || n[E] > 24 || n[E] === 24 && (n[ee] !== 0 || n[ge] !== 0 || n[Re] !== 0) ? E : n[ee] < 0 || n[ee] > 59 ? ee : n[ge] < 0 || n[ge] > 59 ? ge : n[Re] < 0 || n[Re] > 999 ? Re : -1, v(e)._overflowDayOfYear && (t < L || t > se) && (t = se), v(e)._overflowWeeks && t === -1 && (t = mi), v(e)._overflowWeekday && t === -1 && (t = yi), v(e).overflow = t), e;
}
var co = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ho = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, mo = /Z|[+-]\d\d(?::?\d\d)?/, Tt = [
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
], cn = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], yo = /^\/?Date\((-?\d+)/i, go = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, po = {
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
function Tr(e) {
  var t, n, a = e._i, r = co.exec(a) || ho.exec(a), s, i, o, l, u = Tt.length, d = cn.length;
  if (r) {
    for (v(e).iso = !0, t = 0, n = u; t < n; t++)
      if (Tt[t][1].exec(r[1])) {
        i = Tt[t][0], s = Tt[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (r[3]) {
      for (t = 0, n = d; t < n; t++)
        if (cn[t][1].exec(r[3])) {
          o = (r[2] || " ") + cn[t][0];
          break;
        }
      if (o == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!s && o != null) {
      e._isValid = !1;
      return;
    }
    if (r[4])
      if (mo.exec(r[4]))
        l = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (o || "") + (l || ""), sa(e);
  } else
    e._isValid = !1;
}
function _o(e, t, n, a, r, s) {
  var i = [
    vo(e),
    vr.indexOf(t),
    parseInt(n, 10),
    parseInt(a, 10),
    parseInt(r, 10)
  ];
  return s && i.push(parseInt(s, 10)), i;
}
function vo(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function bo(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function ko(e, t, n) {
  if (e) {
    var a = Mr.indexOf(e), r = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (a !== r)
      return v(n).weekdayMismatch = !0, n._isValid = !1, !1;
  }
  return !0;
}
function wo(e, t, n) {
  if (e)
    return po[e];
  if (t)
    return 0;
  var a = parseInt(n, 10), r = a % 100, s = (a - r) / 100;
  return s * 60 + r;
}
function Nr(e) {
  var t = go.exec(bo(e._i)), n;
  if (t) {
    if (n = _o(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !ko(t[1], n, e))
      return;
    e._a = n, e._tzm = wo(t[8], t[9], t[10]), e._d = yt.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), v(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function So(e) {
  var t = yo.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (Tr(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Nr(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : c.createFromInputFallback(e);
}
c.createFromInputFallback = Z(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Be(e, t, n) {
  return e ?? t ?? n;
}
function xo(e) {
  var t = new Date(c.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function ra(e) {
  var t, n, a = [], r, s, i;
  if (!e._d) {
    for (r = xo(e), e._w && e._a[se] == null && e._a[ye] == null && Mo(e), e._dayOfYear != null && (i = Be(e._a[L], r[L]), (e._dayOfYear > ft(i) || e._dayOfYear === 0) && (v(e)._overflowDayOfYear = !0), n = yt(i, 0, e._dayOfYear), e._a[ye] = n.getUTCMonth(), e._a[se] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = a[t] = r[t];
    for (; t < 7; t++)
      e._a[t] = a[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[E] === 24 && e._a[ee] === 0 && e._a[ge] === 0 && e._a[Re] === 0 && (e._nextDay = !0, e._a[E] = 0), e._d = (e._useUTC ? yt : Ni).apply(
      null,
      a
    ), s = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[E] = 24), e._w && typeof e._w.d < "u" && e._w.d !== s && (v(e).weekdayMismatch = !0);
  }
}
function Mo(e) {
  var t, n, a, r, s, i, o, l, u;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (s = 1, i = 4, n = Be(
    t.GG,
    e._a[L],
    gt(D(), 1, 4).year
  ), a = Be(t.W, 1), r = Be(t.E, 1), (r < 1 || r > 7) && (l = !0)) : (s = e._locale._week.dow, i = e._locale._week.doy, u = gt(D(), s, i), n = Be(t.gg, e._a[L], u.year), a = Be(t.w, u.week), t.d != null ? (r = t.d, (r < 0 || r > 6) && (l = !0)) : t.e != null ? (r = t.e + s, (t.e < 0 || t.e > 6) && (l = !0)) : r = s), a < 1 || a > _e(n, s, i) ? v(e)._overflowWeeks = !0 : l != null ? v(e)._overflowWeekday = !0 : (o = xr(n, a, r, s, i), e._a[L] = o.year, e._dayOfYear = o.dayOfYear);
}
c.ISO_8601 = function() {
};
c.RFC_2822 = function() {
};
function sa(e) {
  if (e._f === c.ISO_8601) {
    Tr(e);
    return;
  }
  if (e._f === c.RFC_2822) {
    Nr(e);
    return;
  }
  e._a = [], v(e).empty = !0;
  var t = "" + e._i, n, a, r, s, i, o = t.length, l = 0, u, d;
  for (r = dr(e._f, e._locale).match($n) || [], d = r.length, n = 0; n < d; n++)
    s = r[n], a = (t.match(ci(s, e)) || [])[0], a && (i = t.substr(0, t.indexOf(a)), i.length > 0 && v(e).unusedInput.push(i), t = t.slice(
      t.indexOf(a) + a.length
    ), l += a.length), Xe[s] ? (a ? v(e).empty = !1 : v(e).unusedTokens.push(s), hi(s, a, e)) : e._strict && !a && v(e).unusedTokens.push(s);
  v(e).charsLeftOver = o - l, t.length > 0 && v(e).unusedInput.push(t), e._a[E] <= 12 && v(e).bigHour === !0 && e._a[E] > 0 && (v(e).bigHour = void 0), v(e).parsedDateParts = e._a.slice(0), v(e).meridiem = e._meridiem, e._a[E] = Oo(
    e._locale,
    e._a[E],
    e._meridiem
  ), u = v(e).era, u !== null && (e._a[L] = e._locale.erasConvertYear(u, e._a[L])), ra(e), aa(e);
}
function Oo(e, t, n) {
  var a;
  return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (a = e.isPM(n), a && t < 12 && (t += 12), !a && t === 12 && (t = 0)), t);
}
function Do(e) {
  var t, n, a, r, s, i, o = !1, l = e._f.length;
  if (l === 0) {
    v(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (r = 0; r < l; r++)
    s = 0, i = !1, t = Gn({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[r], sa(t), Vn(t) && (i = !0), s += v(t).charsLeftOver, s += v(t).unusedTokens.length * 10, v(t).score = s, o ? s < a && (a = s, n = t) : (a == null || s < a || i) && (a = s, n = t, i && (o = !0));
  Oe(e, n || t);
}
function Yo(e) {
  if (!e._d) {
    var t = Zn(e._i), n = t.day === void 0 ? t.date : t.day;
    e._a = ur(
      [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
      function(a) {
        return a && parseInt(a, 10);
      }
    ), ra(e);
  }
}
function To(e) {
  var t = new wt(aa(Pr(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function Pr(e) {
  var t = e._i, n = e._f;
  return e._locale = e._locale || we(e._l), t === null || n === void 0 && t === "" ? Bt({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), ne(t) ? new wt(aa(t)) : (kt(t) ? e._d = t : te(n) ? Do(e) : n ? sa(e) : No(e), Vn(e) || (e._d = null), e));
}
function No(e) {
  var t = e._i;
  U(t) ? e._d = new Date(c.now()) : kt(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? So(e) : te(t) ? (e._a = ur(t.slice(0), function(n) {
    return parseInt(n, 10);
  }), ra(e)) : We(t) ? Yo(e) : ve(t) ? e._d = new Date(t) : c.createFromInputFallback(e);
}
function Ar(e, t, n, a, r) {
  var s = {};
  return (t === !0 || t === !1) && (a = t, t = void 0), (n === !0 || n === !1) && (a = n, n = void 0), (We(e) && Hn(e) || te(e) && e.length === 0) && (e = void 0), s._isAMomentObject = !0, s._useUTC = s._isUTC = r, s._l = n, s._i = e, s._f = t, s._strict = a, To(s);
}
function D(e, t, n, a) {
  return Ar(e, t, n, a, !1);
}
var Po = Z(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = D.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Bt();
  }
), Ao = Z(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = D.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Bt();
  }
);
function Cr(e, t) {
  var n, a;
  if (t.length === 1 && te(t[0]) && (t = t[0]), !t.length)
    return D();
  for (n = t[0], a = 1; a < t.length; ++a)
    (!t[a].isValid() || t[a][e](n)) && (n = t[a]);
  return n;
}
function Co() {
  var e = [].slice.call(arguments, 0);
  return Cr("isBefore", e);
}
function Eo() {
  var e = [].slice.call(arguments, 0);
  return Cr("isAfter", e);
}
var Fo = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, ot = [
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
function Io(e) {
  var t, n = !1, a, r = ot.length;
  for (t in e)
    if (S(e, t) && !(A.call(ot, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (a = 0; a < r; ++a)
    if (e[ot[a]]) {
      if (n)
        return !1;
      parseFloat(e[ot[a]]) !== k(e[ot[a]]) && (n = !0);
    }
  return !0;
}
function Lo() {
  return this._isValid;
}
function Ro() {
  return ae(NaN);
}
function en(e) {
  var t = Zn(e), n = t.year || 0, a = t.quarter || 0, r = t.month || 0, s = t.week || t.isoWeek || 0, i = t.day || 0, o = t.hour || 0, l = t.minute || 0, u = t.second || 0, d = t.millisecond || 0;
  this._isValid = Io(t), this._milliseconds = +d + u * 1e3 + // 1000
  l * 6e4 + // 1000 * 60
  o * 1e3 * 60 * 60, this._days = +i + s * 7, this._months = +r + a * 3 + n * 12, this._data = {}, this._locale = we(), this._bubble();
}
function Ct(e) {
  return e instanceof en;
}
function Sn(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Wo(e, t, n) {
  var a = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), s = 0, i;
  for (i = 0; i < a; i++)
    k(e[i]) !== k(t[i]) && s++;
  return s + r;
}
function Er(e, t) {
  y(e, 0, 0, function() {
    var n = this.utcOffset(), a = "+";
    return n < 0 && (n = -n, a = "-"), a + le(~~(n / 60), 2) + t + le(~~n % 60, 2);
  });
}
Er("Z", ":");
Er("ZZ", "");
h("Z", Kt);
h("ZZ", Kt);
M(["Z", "ZZ"], function(e, t, n) {
  n._useUTC = !0, n._tzm = ia(Kt, e);
});
var Uo = /([\+\-]|\d\d)/gi;
function ia(e, t) {
  var n = (t || "").match(e), a, r, s;
  return n === null ? null : (a = n[n.length - 1] || [], r = (a + "").match(Uo) || ["-", 0, 0], s = +(r[1] * 60) + k(r[2]), s === 0 ? 0 : r[0] === "+" ? s : -s);
}
function oa(e, t) {
  var n, a;
  return t._isUTC ? (n = t.clone(), a = (ne(e) || kt(e) ? e.valueOf() : D(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + a), c.updateOffset(n, !1), n) : D(e).local();
}
function xn(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
c.updateOffset = function() {
};
function zo(e, t, n) {
  var a = this._offset || 0, r;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = ia(Kt, e), e === null)
        return this;
    } else Math.abs(e) < 16 && !n && (e = e * 60);
    return !this._isUTC && t && (r = xn(this)), this._offset = e, this._isUTC = !0, r != null && this.add(r, "m"), a !== e && (!t || this._changeInProgress ? Lr(
      this,
      ae(e - a, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, c.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? a : xn(this);
}
function jo(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Ho(e) {
  return this.utcOffset(0, e);
}
function Vo(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(xn(this), "m")), this;
}
function Go() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = ia(ui, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Bo(e) {
  return this.isValid() ? (e = e ? D(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function $o() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Zo() {
  if (!U(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Gn(e, this), e = Pr(e), e._a ? (t = e._isUTC ? fe(e._a) : D(e._a), this._isDSTShifted = this.isValid() && Wo(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function qo() {
  return this.isValid() ? !this._isUTC : !1;
}
function Xo() {
  return this.isValid() ? this._isUTC : !1;
}
function Fr() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Ko = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Jo = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function ae(e, t) {
  var n = e, a = null, r, s, i;
  return Ct(e) ? n = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : ve(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (a = Ko.exec(e)) ? (r = a[1] === "-" ? -1 : 1, n = {
    y: 0,
    d: k(a[se]) * r,
    h: k(a[E]) * r,
    m: k(a[ee]) * r,
    s: k(a[ge]) * r,
    ms: k(Sn(a[Re] * 1e3)) * r
    // the millisecond decimal point is included in the match
  }) : (a = Jo.exec(e)) ? (r = a[1] === "-" ? -1 : 1, n = {
    y: Fe(a[2], r),
    M: Fe(a[3], r),
    w: Fe(a[4], r),
    d: Fe(a[5], r),
    h: Fe(a[6], r),
    m: Fe(a[7], r),
    s: Fe(a[8], r)
  }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (i = Qo(
    D(n.from),
    D(n.to)
  ), n = {}, n.ms = i.milliseconds, n.M = i.months), s = new en(n), Ct(e) && S(e, "_locale") && (s._locale = e._locale), Ct(e) && S(e, "_isValid") && (s._isValid = e._isValid), s;
}
ae.fn = en.prototype;
ae.invalid = Ro;
function Fe(e, t) {
  var n = e && parseFloat(e.replace(",", "."));
  return (isNaN(n) ? 0 : n) * t;
}
function Da(e, t) {
  var n = {};
  return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
}
function Qo(e, t) {
  var n;
  return e.isValid() && t.isValid() ? (t = oa(t, e), e.isBefore(t) ? n = Da(e, t) : (n = Da(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
}
function Ir(e, t) {
  return function(n, a) {
    var r, s;
    return a !== null && !isNaN(+a) && (cr(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), s = n, n = a, a = s), r = ae(n, a), Lr(this, r, e), this;
  };
}
function Lr(e, t, n, a) {
  var r = t._milliseconds, s = Sn(t._days), i = Sn(t._months);
  e.isValid() && (a = a ?? !0, i && kr(e, mt(e, "Month") + i * n), s && _r(e, "Date", mt(e, "Date") + s * n), r && e._d.setTime(e._d.valueOf() + r * n), a && c.updateOffset(e, s || i));
}
var el = Ir(1, "add"), tl = Ir(-1, "subtract");
function Rr(e) {
  return typeof e == "string" || e instanceof String;
}
function nl(e) {
  return ne(e) || kt(e) || Rr(e) || ve(e) || rl(e) || al(e) || e === null || e === void 0;
}
function al(e) {
  var t = We(e) && !Hn(e), n = !1, a = [
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
  ], r, s, i = a.length;
  for (r = 0; r < i; r += 1)
    s = a[r], n = n || S(e, s);
  return t && n;
}
function rl(e) {
  var t = te(e), n = !1;
  return t && (n = e.filter(function(a) {
    return !ve(a) && Rr(e);
  }).length === 0), t && n;
}
function sl(e) {
  var t = We(e) && !Hn(e), n = !1, a = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], r, s;
  for (r = 0; r < a.length; r += 1)
    s = a[r], n = n || S(e, s);
  return t && n;
}
function il(e, t) {
  var n = e.diff(t, "days", !0);
  return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}
function ol(e, t) {
  arguments.length === 1 && (arguments[0] ? nl(arguments[0]) ? (e = arguments[0], t = void 0) : sl(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var n = e || D(), a = oa(n, this).startOf("day"), r = c.calendarFormat(this, a) || "sameElse", s = t && (ce(t[r]) ? t[r].call(this, n) : t[r]);
  return this.format(
    s || this.localeData().calendar(r, this, D(n))
  );
}
function ll() {
  return new wt(this);
}
function ul(e, t) {
  var n = ne(e) ? e : D(e);
  return this.isValid() && n.isValid() ? (t = q(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function fl(e, t) {
  var n = ne(e) ? e : D(e);
  return this.isValid() && n.isValid() ? (t = q(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
}
function cl(e, t, n, a) {
  var r = ne(e) ? e : D(e), s = ne(t) ? t : D(t);
  return this.isValid() && r.isValid() && s.isValid() ? (a = a || "()", (a[0] === "(" ? this.isAfter(r, n) : !this.isBefore(r, n)) && (a[1] === ")" ? this.isBefore(s, n) : !this.isAfter(s, n))) : !1;
}
function dl(e, t) {
  var n = ne(e) ? e : D(e), a;
  return this.isValid() && n.isValid() ? (t = q(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (a = n.valueOf(), this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf())) : !1;
}
function hl(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function ml(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function yl(e, t, n) {
  var a, r, s;
  if (!this.isValid())
    return NaN;
  if (a = oa(e, this), !a.isValid())
    return NaN;
  switch (r = (a.utcOffset() - this.utcOffset()) * 6e4, t = q(t), t) {
    case "year":
      s = Et(this, a) / 12;
      break;
    case "month":
      s = Et(this, a);
      break;
    case "quarter":
      s = Et(this, a) / 3;
      break;
    case "second":
      s = (this - a) / 1e3;
      break;
    case "minute":
      s = (this - a) / 6e4;
      break;
    case "hour":
      s = (this - a) / 36e5;
      break;
    case "day":
      s = (this - a - r) / 864e5;
      break;
    case "week":
      s = (this - a - r) / 6048e5;
      break;
    default:
      s = this - a;
  }
  return n ? s : B(s);
}
function Et(e, t) {
  if (e.date() < t.date())
    return -Et(t, e);
  var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), a = e.clone().add(n, "months"), r, s;
  return t - a < 0 ? (r = e.clone().add(n - 1, "months"), s = (t - a) / (a - r)) : (r = e.clone().add(n + 1, "months"), s = (t - a) / (r - a)), -(n + s) || 0;
}
c.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
c.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function gl() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function pl(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, n = t ? this.clone().utc() : this;
  return n.year() < 0 || n.year() > 9999 ? At(
    n,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : ce(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", At(n, "Z")) : At(
    n,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function _l() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", n, a, r, s;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", r = "-MM-DD[T]HH:mm:ss.SSS", s = t + '[")]', this.format(n + a + r + s);
}
function vl(e) {
  e || (e = this.isUtc() ? c.defaultFormatUtc : c.defaultFormat);
  var t = At(this, e);
  return this.localeData().postformat(t);
}
function bl(e, t) {
  return this.isValid() && (ne(e) && e.isValid() || D(e).isValid()) ? ae({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function kl(e) {
  return this.from(D(), e);
}
function wl(e, t) {
  return this.isValid() && (ne(e) && e.isValid() || D(e).isValid()) ? ae({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Sl(e) {
  return this.to(D(), e);
}
function Wr(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = we(e), t != null && (this._locale = t), this);
}
var Ur = Z(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function zr() {
  return this._locale;
}
var Wt = 1e3, Ke = 60 * Wt, Ut = 60 * Ke, jr = (365 * 400 + 97) * 24 * Ut;
function Je(e, t) {
  return (e % t + t) % t;
}
function Hr(e, t, n) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, n) - jr : new Date(e, t, n).valueOf();
}
function Vr(e, t, n) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - jr : Date.UTC(e, t, n);
}
function xl(e) {
  var t, n;
  if (e = q(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? Vr : Hr, e) {
    case "year":
      t = n(this.year(), 0, 1);
      break;
    case "quarter":
      t = n(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = n(this.year(), this.month(), 1);
      break;
    case "week":
      t = n(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = n(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = n(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= Je(
        t + (this._isUTC ? 0 : this.utcOffset() * Ke),
        Ut
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= Je(t, Ke);
      break;
    case "second":
      t = this._d.valueOf(), t -= Je(t, Wt);
      break;
  }
  return this._d.setTime(t), c.updateOffset(this, !0), this;
}
function Ml(e) {
  var t, n;
  if (e = q(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? Vr : Hr, e) {
    case "year":
      t = n(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = n(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = n(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = n(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = n(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = n(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += Ut - Je(
        t + (this._isUTC ? 0 : this.utcOffset() * Ke),
        Ut
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Ke - Je(t, Ke) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Wt - Je(t, Wt) - 1;
      break;
  }
  return this._d.setTime(t), c.updateOffset(this, !0), this;
}
function Ol() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Dl() {
  return Math.floor(this.valueOf() / 1e3);
}
function Yl() {
  return new Date(this.valueOf());
}
function Tl() {
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
function Nl() {
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
function Pl() {
  return this.isValid() ? this.toISOString() : null;
}
function Al() {
  return Vn(this);
}
function Cl() {
  return Oe({}, v(this));
}
function El() {
  return v(this).overflow;
}
function Fl() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
y("N", 0, 0, "eraAbbr");
y("NN", 0, 0, "eraAbbr");
y("NNN", 0, 0, "eraAbbr");
y("NNNN", 0, 0, "eraName");
y("NNNNN", 0, 0, "eraNarrow");
y("y", ["y", 1], "yo", "eraYear");
y("y", ["yy", 2], 0, "eraYear");
y("y", ["yyy", 3], 0, "eraYear");
y("y", ["yyyy", 4], 0, "eraYear");
h("N", la);
h("NN", la);
h("NNN", la);
h("NNNN", Bl);
h("NNNNN", $l);
M(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, n, a) {
    var r = n._locale.erasParse(e, a, n._strict);
    r ? v(n).era = r : v(n).invalidEra = e;
  }
);
h("y", nt);
h("yy", nt);
h("yyy", nt);
h("yyyy", nt);
h("yo", Zl);
M(["y", "yy", "yyy", "yyyy"], L);
M(["yo"], function(e, t, n, a) {
  var r;
  n._locale._eraYearOrdinalRegex && (r = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[L] = n._locale.eraYearOrdinalParse(e, r) : t[L] = parseInt(e, 10);
});
function Il(e, t) {
  var n, a, r, s = this._eras || we("en")._eras;
  for (n = 0, a = s.length; n < a; ++n) {
    switch (typeof s[n].since) {
      case "string":
        r = c(s[n].since).startOf("day"), s[n].since = r.valueOf();
        break;
    }
    switch (typeof s[n].until) {
      case "undefined":
        s[n].until = 1 / 0;
        break;
      case "string":
        r = c(s[n].until).startOf("day").valueOf(), s[n].until = r.valueOf();
        break;
    }
  }
  return s;
}
function Ll(e, t, n) {
  var a, r, s = this.eras(), i, o, l;
  for (e = e.toUpperCase(), a = 0, r = s.length; a < r; ++a)
    if (i = s[a].name.toUpperCase(), o = s[a].abbr.toUpperCase(), l = s[a].narrow.toUpperCase(), n)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (o === e)
            return s[a];
          break;
        case "NNNN":
          if (i === e)
            return s[a];
          break;
        case "NNNNN":
          if (l === e)
            return s[a];
          break;
      }
    else if ([i, o, l].indexOf(e) >= 0)
      return s[a];
}
function Rl(e, t) {
  var n = e.since <= e.until ? 1 : -1;
  return t === void 0 ? c(e.since).year() : c(e.since).year() + (t - e.offset) * n;
}
function Wl() {
  var e, t, n, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), a[e].since <= n && n <= a[e].until || a[e].until <= n && n <= a[e].since)
      return a[e].name;
  return "";
}
function Ul() {
  var e, t, n, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), a[e].since <= n && n <= a[e].until || a[e].until <= n && n <= a[e].since)
      return a[e].narrow;
  return "";
}
function zl() {
  var e, t, n, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), a[e].since <= n && n <= a[e].until || a[e].until <= n && n <= a[e].since)
      return a[e].abbr;
  return "";
}
function jl() {
  var e, t, n, a, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = r[e].since <= r[e].until ? 1 : -1, a = this.clone().startOf("day").valueOf(), r[e].since <= a && a <= r[e].until || r[e].until <= a && a <= r[e].since)
      return (this.year() - c(r[e].since).year()) * n + r[e].offset;
  return this.year();
}
function Hl(e) {
  return S(this, "_erasNameRegex") || ua.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Vl(e) {
  return S(this, "_erasAbbrRegex") || ua.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Gl(e) {
  return S(this, "_erasNarrowRegex") || ua.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function la(e, t) {
  return t.erasAbbrRegex(e);
}
function Bl(e, t) {
  return t.erasNameRegex(e);
}
function $l(e, t) {
  return t.erasNarrowRegex(e);
}
function Zl(e, t) {
  return t._eraYearOrdinalRegex || nt;
}
function ua() {
  var e = [], t = [], n = [], a = [], r, s, i, o, l, u = this.eras();
  for (r = 0, s = u.length; r < s; ++r)
    i = pe(u[r].name), o = pe(u[r].abbr), l = pe(u[r].narrow), t.push(i), e.push(o), n.push(l), a.push(i), a.push(o), a.push(l);
  this._erasRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  );
}
y(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
y(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function tn(e, t) {
  y(0, [e, e.length], 0, t);
}
tn("gggg", "weekYear");
tn("ggggg", "weekYear");
tn("GGGG", "isoWeekYear");
tn("GGGGG", "isoWeekYear");
h("G", Xt);
h("g", Xt);
h("GG", Y, H);
h("gg", Y, H);
h("GGGG", Xn, qn);
h("gggg", Xn, qn);
h("GGGGG", qt, $t);
h("ggggg", qt, $t);
xt(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, n, a) {
    t[a.substr(0, 2)] = k(e);
  }
);
xt(["gg", "GG"], function(e, t, n, a) {
  t[a] = c.parseTwoDigitYear(e);
});
function ql(e) {
  return Gr.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Xl(e) {
  return Gr.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Kl() {
  return _e(this.year(), 1, 4);
}
function Jl() {
  return _e(this.isoWeekYear(), 1, 4);
}
function Ql() {
  var e = this.localeData()._week;
  return _e(this.year(), e.dow, e.doy);
}
function eu() {
  var e = this.localeData()._week;
  return _e(this.weekYear(), e.dow, e.doy);
}
function Gr(e, t, n, a, r) {
  var s;
  return e == null ? gt(this, a, r).year : (s = _e(e, a, r), t > s && (t = s), tu.call(this, e, t, n, a, r));
}
function tu(e, t, n, a, r) {
  var s = xr(e, t, n, a, r), i = yt(s.year, 0, s.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
y("Q", 0, "Qo", "quarter");
h("Q", hr);
M("Q", function(e, t) {
  t[ye] = (k(e) - 1) * 3;
});
function nu(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
y("D", ["DD", 2], "Do", "date");
h("D", Y, at);
h("DD", Y, H);
h("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
M(["D", "DD"], se);
M("Do", function(e, t) {
  t[se] = k(e.match(Y)[0]);
});
var Br = rt("Date", !0);
y("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
h("DDD", Zt);
h("DDDD", mr);
M(["DDD", "DDDD"], function(e, t, n) {
  n._dayOfYear = k(e);
});
function au(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
y("m", ["mm", 2], 0, "minute");
h("m", Y, Kn);
h("mm", Y, H);
M(["m", "mm"], ee);
var ru = rt("Minutes", !1);
y("s", ["ss", 2], 0, "second");
h("s", Y, Kn);
h("ss", Y, H);
M(["s", "ss"], ge);
var su = rt("Seconds", !1);
y("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
y(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
y(0, ["SSS", 3], 0, "millisecond");
y(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
y(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
y(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
y(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
y(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
y(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
h("S", Zt, hr);
h("SS", Zt, H);
h("SSS", Zt, mr);
var De, $r;
for (De = "SSSS"; De.length <= 9; De += "S")
  h(De, nt);
function iu(e, t) {
  t[Re] = k(("0." + e) * 1e3);
}
for (De = "S"; De.length <= 9; De += "S")
  M(De, iu);
$r = rt("Milliseconds", !1);
y("z", 0, 0, "zoneAbbr");
y("zz", 0, 0, "zoneName");
function ou() {
  return this._isUTC ? "UTC" : "";
}
function lu() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var f = wt.prototype;
f.add = el;
f.calendar = ol;
f.clone = ll;
f.diff = yl;
f.endOf = Ml;
f.format = vl;
f.from = bl;
f.fromNow = kl;
f.to = wl;
f.toNow = Sl;
f.get = pi;
f.invalidAt = El;
f.isAfter = ul;
f.isBefore = fl;
f.isBetween = cl;
f.isSame = dl;
f.isSameOrAfter = hl;
f.isSameOrBefore = ml;
f.isValid = Al;
f.lang = Ur;
f.locale = Wr;
f.localeData = zr;
f.max = Ao;
f.min = Po;
f.parsingFlags = Cl;
f.set = _i;
f.startOf = xl;
f.subtract = tl;
f.toArray = Tl;
f.toObject = Nl;
f.toDate = Yl;
f.toISOString = pl;
f.inspect = _l;
typeof Symbol < "u" && Symbol.for != null && (f[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
f.toJSON = Pl;
f.toString = gl;
f.unix = Dl;
f.valueOf = Ol;
f.creationData = Fl;
f.eraName = Wl;
f.eraNarrow = Ul;
f.eraAbbr = zl;
f.eraYear = jl;
f.year = pr;
f.isLeapYear = gi;
f.weekYear = ql;
f.isoWeekYear = Xl;
f.quarter = f.quarters = nu;
f.month = wr;
f.daysInMonth = Di;
f.week = f.weeks = Fi;
f.isoWeek = f.isoWeeks = Ii;
f.weeksInYear = Ql;
f.weeksInWeekYear = eu;
f.isoWeeksInYear = Kl;
f.isoWeeksInISOWeekYear = Jl;
f.date = Br;
f.day = f.days = qi;
f.weekday = Xi;
f.isoWeekday = Ki;
f.dayOfYear = au;
f.hour = f.hours = ro;
f.minute = f.minutes = ru;
f.second = f.seconds = su;
f.millisecond = f.milliseconds = $r;
f.utcOffset = zo;
f.utc = Ho;
f.local = Vo;
f.parseZone = Go;
f.hasAlignedHourOffset = Bo;
f.isDST = $o;
f.isLocal = qo;
f.isUtcOffset = Xo;
f.isUtc = Fr;
f.isUTC = Fr;
f.zoneAbbr = ou;
f.zoneName = lu;
f.dates = Z(
  "dates accessor is deprecated. Use date instead.",
  Br
);
f.months = Z(
  "months accessor is deprecated. Use month instead",
  wr
);
f.years = Z(
  "years accessor is deprecated. Use year instead",
  pr
);
f.zone = Z(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  jo
);
f.isDSTShifted = Z(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Zo
);
function uu(e) {
  return D(e * 1e3);
}
function fu() {
  return D.apply(null, arguments).parseZone();
}
function Zr(e) {
  return e;
}
var x = Bn.prototype;
x.calendar = Zs;
x.longDateFormat = Js;
x.invalidDate = ei;
x.ordinal = ai;
x.preparse = Zr;
x.postformat = Zr;
x.relativeTime = si;
x.pastFuture = ii;
x.set = Bs;
x.eras = Il;
x.erasParse = Ll;
x.erasConvertYear = Rl;
x.erasAbbrRegex = Vl;
x.erasNameRegex = Hl;
x.erasNarrowRegex = Gl;
x.months = Si;
x.monthsShort = xi;
x.monthsParse = Oi;
x.monthsRegex = Ti;
x.monthsShortRegex = Yi;
x.week = Pi;
x.firstDayOfYear = Ei;
x.firstDayOfWeek = Ci;
x.weekdays = Vi;
x.weekdaysMin = Bi;
x.weekdaysShort = Gi;
x.weekdaysParse = Zi;
x.weekdaysRegex = Ji;
x.weekdaysShortRegex = Qi;
x.weekdaysMinRegex = eo;
x.isPM = no;
x.meridiem = so;
function zt(e, t, n, a) {
  var r = we(), s = fe().set(a, t);
  return r[n](s, e);
}
function qr(e, t, n) {
  if (ve(e) && (t = e, e = void 0), e = e || "", t != null)
    return zt(e, t, n, "month");
  var a, r = [];
  for (a = 0; a < 12; a++)
    r[a] = zt(e, a, n, "month");
  return r;
}
function fa(e, t, n, a) {
  typeof e == "boolean" ? (ve(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, ve(t) && (n = t, t = void 0), t = t || "");
  var r = we(), s = e ? r._week.dow : 0, i, o = [];
  if (n != null)
    return zt(t, (n + s) % 7, a, "day");
  for (i = 0; i < 7; i++)
    o[i] = zt(t, (i + s) % 7, a, "day");
  return o;
}
function cu(e, t) {
  return qr(e, t, "months");
}
function du(e, t) {
  return qr(e, t, "monthsShort");
}
function hu(e, t, n) {
  return fa(e, t, n, "weekdays");
}
function mu(e, t, n) {
  return fa(e, t, n, "weekdaysShort");
}
function yu(e, t, n) {
  return fa(e, t, n, "weekdaysMin");
}
Te("en", {
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
    var t = e % 10, n = k(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + n;
  }
});
c.lang = Z(
  "moment.lang is deprecated. Use moment.locale instead.",
  Te
);
c.langData = Z(
  "moment.langData is deprecated. Use moment.localeData instead.",
  we
);
var de = Math.abs;
function gu() {
  var e = this._data;
  return this._milliseconds = de(this._milliseconds), this._days = de(this._days), this._months = de(this._months), e.milliseconds = de(e.milliseconds), e.seconds = de(e.seconds), e.minutes = de(e.minutes), e.hours = de(e.hours), e.months = de(e.months), e.years = de(e.years), this;
}
function Xr(e, t, n, a) {
  var r = ae(t, n);
  return e._milliseconds += a * r._milliseconds, e._days += a * r._days, e._months += a * r._months, e._bubble();
}
function pu(e, t) {
  return Xr(this, e, t, 1);
}
function _u(e, t) {
  return Xr(this, e, t, -1);
}
function Ya(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function vu() {
  var e = this._milliseconds, t = this._days, n = this._months, a = this._data, r, s, i, o, l;
  return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += Ya(Mn(n) + t) * 864e5, t = 0, n = 0), a.milliseconds = e % 1e3, r = B(e / 1e3), a.seconds = r % 60, s = B(r / 60), a.minutes = s % 60, i = B(s / 60), a.hours = i % 24, t += B(i / 24), l = B(Kr(t)), n += l, t -= Ya(Mn(l)), o = B(n / 12), n %= 12, a.days = t, a.months = n, a.years = o, this;
}
function Kr(e) {
  return e * 4800 / 146097;
}
function Mn(e) {
  return e * 146097 / 4800;
}
function bu(e) {
  if (!this.isValid())
    return NaN;
  var t, n, a = this._milliseconds;
  if (e = q(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + a / 864e5, n = this._months + Kr(t), e) {
      case "month":
        return n;
      case "quarter":
        return n / 3;
      case "year":
        return n / 12;
    }
  else
    switch (t = this._days + Math.round(Mn(this._months)), e) {
      case "week":
        return t / 7 + a / 6048e5;
      case "day":
        return t + a / 864e5;
      case "hour":
        return t * 24 + a / 36e5;
      case "minute":
        return t * 1440 + a / 6e4;
      case "second":
        return t * 86400 + a / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + a;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function Se(e) {
  return function() {
    return this.as(e);
  };
}
var Jr = Se("ms"), ku = Se("s"), wu = Se("m"), Su = Se("h"), xu = Se("d"), Mu = Se("w"), Ou = Se("M"), Du = Se("Q"), Yu = Se("y"), Tu = Jr;
function Nu() {
  return ae(this);
}
function Pu(e) {
  return e = q(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Ve(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Au = Ve("milliseconds"), Cu = Ve("seconds"), Eu = Ve("minutes"), Fu = Ve("hours"), Iu = Ve("days"), Lu = Ve("months"), Ru = Ve("years");
function Wu() {
  return B(this.days() / 7);
}
var me = Math.round, Ze = {
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
function Uu(e, t, n, a, r) {
  return r.relativeTime(t || 1, !!n, e, a);
}
function zu(e, t, n, a) {
  var r = ae(e).abs(), s = me(r.as("s")), i = me(r.as("m")), o = me(r.as("h")), l = me(r.as("d")), u = me(r.as("M")), d = me(r.as("w")), b = me(r.as("y")), _ = s <= n.ss && ["s", s] || s < n.s && ["ss", s] || i <= 1 && ["m"] || i < n.m && ["mm", i] || o <= 1 && ["h"] || o < n.h && ["hh", o] || l <= 1 && ["d"] || l < n.d && ["dd", l];
  return n.w != null && (_ = _ || d <= 1 && ["w"] || d < n.w && ["ww", d]), _ = _ || u <= 1 && ["M"] || u < n.M && ["MM", u] || b <= 1 && ["y"] || ["yy", b], _[2] = t, _[3] = +e > 0, _[4] = a, Uu.apply(null, _);
}
function ju(e) {
  return e === void 0 ? me : typeof e == "function" ? (me = e, !0) : !1;
}
function Hu(e, t) {
  return Ze[e] === void 0 ? !1 : t === void 0 ? Ze[e] : (Ze[e] = t, e === "s" && (Ze.ss = t - 1), !0);
}
function Vu(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var n = !1, a = Ze, r, s;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (a = Object.assign({}, Ze, t), t.s != null && t.ss == null && (a.ss = t.s - 1)), r = this.localeData(), s = zu(this, !n, a, r), n && (s = r.pastFuture(+this, s)), r.postformat(s);
}
var dn = Math.abs;
function Ge(e) {
  return (e > 0) - (e < 0) || +e;
}
function nn() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = dn(this._milliseconds) / 1e3, t = dn(this._days), n = dn(this._months), a, r, s, i, o = this.asSeconds(), l, u, d, b;
  return o ? (a = B(e / 60), r = B(a / 60), e %= 60, a %= 60, s = B(n / 12), n %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", l = o < 0 ? "-" : "", u = Ge(this._months) !== Ge(o) ? "-" : "", d = Ge(this._days) !== Ge(o) ? "-" : "", b = Ge(this._milliseconds) !== Ge(o) ? "-" : "", l + "P" + (s ? u + s + "Y" : "") + (n ? u + n + "M" : "") + (t ? d + t + "D" : "") + (r || a || e ? "T" : "") + (r ? b + r + "H" : "") + (a ? b + a + "M" : "") + (e ? b + i + "S" : "")) : "P0D";
}
var w = en.prototype;
w.isValid = Lo;
w.abs = gu;
w.add = pu;
w.subtract = _u;
w.as = bu;
w.asMilliseconds = Jr;
w.asSeconds = ku;
w.asMinutes = wu;
w.asHours = Su;
w.asDays = xu;
w.asWeeks = Mu;
w.asMonths = Ou;
w.asQuarters = Du;
w.asYears = Yu;
w.valueOf = Tu;
w._bubble = vu;
w.clone = Nu;
w.get = Pu;
w.milliseconds = Au;
w.seconds = Cu;
w.minutes = Eu;
w.hours = Fu;
w.days = Iu;
w.weeks = Wu;
w.months = Lu;
w.years = Ru;
w.humanize = Vu;
w.toISOString = nn;
w.toString = nn;
w.toJSON = nn;
w.locale = Wr;
w.localeData = zr;
w.toIsoString = Z(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  nn
);
w.lang = Ur;
y("X", 0, 0, "unix");
y("x", 0, 0, "valueOf");
h("x", Xt);
h("X", fi);
M("X", function(e, t, n) {
  n._d = new Date(parseFloat(e) * 1e3);
});
M("x", function(e, t, n) {
  n._d = new Date(k(e));
});
//! moment.js
c.version = "2.30.1";
Vs(D);
c.fn = f;
c.min = Co;
c.max = Eo;
c.now = Fo;
c.utc = fe;
c.unix = uu;
c.months = cu;
c.isDate = kt;
c.locale = Te;
c.invalid = Bt;
c.duration = ae;
c.isMoment = ne;
c.weekdays = hu;
c.parseZone = fu;
c.localeData = we;
c.isDuration = Ct;
c.monthsShort = du;
c.weekdaysMin = yu;
c.defineLocale = na;
c.updateLocale = uo;
c.locales = fo;
c.weekdaysShort = mu;
c.normalizeUnits = q;
c.relativeTimeRounding = ju;
c.relativeTimeThreshold = Hu;
c.calendarFormat = il;
c.prototype = f;
c.HTML5_FMT = {
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
class Ta {
  constructor() {
    ln(this, "now", c());
    ln(this, "locked", null);
  }
  with(t) {
    return this.current = t, this;
  }
  get current() {
    return this.now.format("YYYYMMDD");
  }
  set current(t) {
    this.now = c(t, "YYYYMMDD", !0);
  }
  set lockedMonth(t) {
    this.locked = c(t, "YYYYMM", !0);
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
    return c(t).isSame(this.locked || this.now, "month");
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
    const n = t.clone().add(1, "month").date(1);
    for (; t.day() > 0; ) t.subtract(1, "day");
    const a = [];
    for (; t.isBefore(n); )
      a.push(t.clone()), t.add(1, "day");
    for (; t.day() < 6; )
      a.push(t.clone()), t.add(1, "day");
    return t.day() == 6 && a.push(t.clone()), a;
  }
}
const Gu = {
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
      return c(this.date).format("YYYYMMDD");
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
function Bu(e, t, n, a, r, s) {
  return C(), $("span", {
    onClick: t[0] || (t[0] = (...i) => s.handleClick && s.handleClick(...i)),
    class: ar(s.dateClass)
  }, [
    nr(e.$slots, "default", {}, void 0, !0)
  ], 2);
}
const Qr = /* @__PURE__ */ bt(Gu, [["render", Bu], ["__scopeId", "data-v-beb03b82"]]), Na = () => {
};
let ca = {}, es = {}, ts = null, ns = {
  mark: Na,
  measure: Na
};
try {
  typeof window < "u" && (ca = window), typeof document < "u" && (es = document), typeof MutationObserver < "u" && (ts = MutationObserver), typeof performance < "u" && (ns = performance);
} catch {
}
const {
  userAgent: Pa = ""
} = ca.navigator || {}, Ne = ca, O = es, Aa = ts, Nt = ns;
Ne.document;
const xe = !!O.documentElement && !!O.head && typeof O.addEventListener == "function" && typeof O.createElement == "function", as = ~Pa.indexOf("MSIE") || ~Pa.indexOf("Trident/");
var N = "classic", rs = "duotone", z = "sharp", j = "sharp-duotone", $u = [N, rs, z, j], Zu = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds"
  }
}, Ca = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, qu = ["kit"], Xu = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/, Ku = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Ju = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
}, Qu = {
  "Font Awesome 6 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 6 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 6 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 6 Duotone": {
    900: "fad"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds"
  }
}, ef = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds"
  }
}, tf = {
  classic: ["fas", "far", "fal", "fat"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds"]
}, nf = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid"
  }
}, af = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    duotone: "fad",
    brands: "fab"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds"
  }
}, ss = {
  classic: {
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
    "fa-brands": "brands"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid"
  }
}, rf = ["solid", "regular", "light", "thin", "duotone", "brands"], is = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], sf = is.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), lt = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, of = [...Object.keys(tf), ...rf, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", lt.GROUP, lt.SWAP_OPACITY, lt.PRIMARY, lt.SECONDARY].concat(is.map((e) => "".concat(e, "x"))).concat(sf.map((e) => "w-".concat(e))), lf = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, uf = {
  kit: {
    "fa-kit": "fak"
  },
  "kit-duotone": {
    "fa-kit-duotone": "fakd"
  }
}, ff = {
  kit: {
    fak: "fa-kit"
  },
  "kit-duotone": {
    fakd: "fa-kit-duotone"
  }
}, Ea = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
};
const be = "___FONT_AWESOME___", On = 16, os = "fa", ls = "svg-inline--fa", je = "data-fa-i2svg", Dn = "data-fa-pseudo-element", cf = "data-fa-pseudo-element-pending", da = "data-prefix", ha = "data-icon", Fa = "fontawesome-i2svg", df = "async", hf = ["HTML", "HEAD", "STYLE", "SCRIPT"], us = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})(), fs = [N, z, j];
function Mt(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[N];
    }
  });
}
const cs = {
  ...ss
};
cs[N] = {
  ...ss[N],
  ...Ca.kit,
  ...Ca["kit-duotone"]
};
const Ue = Mt(cs), Yn = {
  ...af
};
Yn[N] = {
  ...Yn[N],
  ...Ea.kit,
  ...Ea["kit-duotone"]
};
const _t = Mt(Yn), Tn = {
  ...nf
};
Tn[N] = {
  ...Tn[N],
  ...ff.kit
};
const ze = Mt(Tn), Nn = {
  ...ef
};
Nn[N] = {
  ...Nn[N],
  ...uf.kit
};
const mf = Mt(Nn), yf = Xu, ds = "fa-layers-text", gf = Ku, pf = {
  ...Zu
};
Mt(pf);
const _f = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], hn = lt, et = /* @__PURE__ */ new Set();
Object.keys(_t[N]).map(et.add.bind(et));
Object.keys(_t[z]).map(et.add.bind(et));
Object.keys(_t[j]).map(et.add.bind(et));
const vf = [...qu, ...of], ct = Ne.FontAwesomeConfig || {};
function bf(e) {
  var t = O.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function kf(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
O && typeof O.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, a] = t;
  const r = kf(bf(n));
  r != null && (ct[a] = r);
});
const hs = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: os,
  replacementClass: ls,
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
const tt = {
  ...hs,
  ...ct
};
tt.autoReplaceSvg || (tt.observeMutations = !1);
const m = {};
Object.keys(hs).forEach((e) => {
  Object.defineProperty(m, e, {
    enumerable: !0,
    set: function(t) {
      tt[e] = t, dt.forEach((n) => n(m));
    },
    get: function() {
      return tt[e];
    }
  });
});
Object.defineProperty(m, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    tt.cssPrefix = e, dt.forEach((t) => t(m));
  },
  get: function() {
    return tt.cssPrefix;
  }
});
Ne.FontAwesomeConfig = m;
const dt = [];
function wf(e) {
  return dt.push(e), () => {
    dt.splice(dt.indexOf(e), 1);
  };
}
const Me = On, ie = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Sf(e) {
  if (!e || !xe)
    return;
  const t = O.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = O.head.childNodes;
  let a = null;
  for (let r = n.length - 1; r > -1; r--) {
    const s = n[r], i = (s.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(i) > -1 && (a = s);
  }
  return O.head.insertBefore(t, a), e;
}
const xf = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function vt() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += xf[Math.random() * 62 | 0];
  return t;
}
function st(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function ma(e) {
  return e.classList ? st(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function ms(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Mf(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(ms(e[n]), '" '), "").trim();
}
function an(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function ya(e) {
  return e.size !== ie.size || e.x !== ie.x || e.y !== ie.y || e.rotate !== ie.rotate || e.flipX || e.flipY;
}
function Of(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: a
  } = e;
  const r = {
    transform: "translate(".concat(n / 2, " 256)")
  }, s = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), i = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), o = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(s, " ").concat(i, " ").concat(o)
  }, u = {
    transform: "translate(".concat(a / 2 * -1, " -256)")
  };
  return {
    outer: r,
    inner: l,
    path: u
  };
}
function Df(e) {
  let {
    transform: t,
    width: n = On,
    height: a = On,
    startCentered: r = !1
  } = e, s = "";
  return r && as ? s += "translate(".concat(t.x / Me - n / 2, "em, ").concat(t.y / Me - a / 2, "em) ") : r ? s += "translate(calc(-50% + ".concat(t.x / Me, "em), calc(-50% + ").concat(t.y / Me, "em)) ") : s += "translate(".concat(t.x / Me, "em, ").concat(t.y / Me, "em) "), s += "scale(".concat(t.size / Me * (t.flipX ? -1 : 1), ", ").concat(t.size / Me * (t.flipY ? -1 : 1), ") "), s += "rotate(".concat(t.rotate, "deg) "), s;
}
var Yf = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
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
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
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
  left: calc(-1 * var(--fa-li-width, 2em));
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
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
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
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
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
function ys() {
  const e = os, t = ls, n = m.cssPrefix, a = m.replacementClass;
  let r = Yf;
  if (n !== e || a !== t) {
    const s = new RegExp("\\.".concat(e, "\\-"), "g"), i = new RegExp("\\--".concat(e, "\\-"), "g"), o = new RegExp("\\.".concat(t), "g");
    r = r.replace(s, ".".concat(n, "-")).replace(i, "--".concat(n, "-")).replace(o, ".".concat(a));
  }
  return r;
}
let Ia = !1;
function mn() {
  m.autoAddCss && !Ia && (Sf(ys()), Ia = !0);
}
var Tf = {
  mixout() {
    return {
      dom: {
        css: ys,
        insertCss: mn
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        mn();
      },
      beforeI2svg() {
        mn();
      }
    };
  }
};
const ke = Ne || {};
ke[be] || (ke[be] = {});
ke[be].styles || (ke[be].styles = {});
ke[be].hooks || (ke[be].hooks = {});
ke[be].shims || (ke[be].shims = []);
var oe = ke[be];
const gs = [], ps = function() {
  O.removeEventListener("DOMContentLoaded", ps), jt = 1, gs.map((e) => e());
};
let jt = !1;
xe && (jt = (O.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(O.readyState), jt || O.addEventListener("DOMContentLoaded", ps));
function Nf(e) {
  xe && (jt ? setTimeout(e, 0) : gs.push(e));
}
function Ot(e) {
  const {
    tag: t,
    attributes: n = {},
    children: a = []
  } = e;
  return typeof e == "string" ? ms(e) : "<".concat(t, " ").concat(Mf(n), ">").concat(a.map(Ot).join(""), "</").concat(t, ">");
}
function La(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var yn = function(t, n, a, r) {
  var s = Object.keys(t), i = s.length, o = n, l, u, d;
  for (a === void 0 ? (l = 1, d = t[s[0]]) : (l = 0, d = a); l < i; l++)
    u = s[l], d = o(d, t[u], u, t);
  return d;
};
function Pf(e) {
  const t = [];
  let n = 0;
  const a = e.length;
  for (; n < a; ) {
    const r = e.charCodeAt(n++);
    if (r >= 55296 && r <= 56319 && n < a) {
      const s = e.charCodeAt(n++);
      (s & 64512) == 56320 ? t.push(((r & 1023) << 10) + (s & 1023) + 65536) : (t.push(r), n--);
    } else
      t.push(r);
  }
  return t;
}
function Pn(e) {
  const t = Pf(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Af(e, t) {
  const n = e.length;
  let a = e.charCodeAt(t), r;
  return a >= 55296 && a <= 56319 && n > t + 1 && (r = e.charCodeAt(t + 1), r >= 56320 && r <= 57343) ? (a - 55296) * 1024 + r - 56320 + 65536 : a;
}
function Ra(e) {
  return Object.keys(e).reduce((t, n) => {
    const a = e[n];
    return !!a.icon ? t[a.iconName] = a.icon : t[n] = a, t;
  }, {});
}
function An(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: a = !1
  } = n, r = Ra(t);
  typeof oe.hooks.addPack == "function" && !a ? oe.hooks.addPack(e, Ra(t)) : oe.styles[e] = {
    ...oe.styles[e] || {},
    ...r
  }, e === "fas" && An("fa", t);
}
const {
  styles: Ie,
  shims: Cf
} = oe, Ef = {
  [N]: Object.values(ze[N]),
  [z]: Object.values(ze[z]),
  [j]: Object.values(ze[j])
};
let ga = null, _s = {}, vs = {}, bs = {}, ks = {}, ws = {};
const Ff = {
  [N]: Object.keys(Ue[N]),
  [z]: Object.keys(Ue[z]),
  [j]: Object.keys(Ue[j])
};
function If(e) {
  return ~vf.indexOf(e);
}
function Lf(e, t) {
  const n = t.split("-"), a = n[0], r = n.slice(1).join("-");
  return a === e && r !== "" && !If(r) ? r : null;
}
const Ss = () => {
  const e = (a) => yn(Ie, (r, s, i) => (r[i] = yn(s, a, {}), r), {});
  _s = e((a, r, s) => (r[3] && (a[r[3]] = s), r[2] && r[2].filter((o) => typeof o == "number").forEach((o) => {
    a[o.toString(16)] = s;
  }), a)), vs = e((a, r, s) => (a[s] = s, r[2] && r[2].filter((o) => typeof o == "string").forEach((o) => {
    a[o] = s;
  }), a)), ws = e((a, r, s) => {
    const i = r[2];
    return a[s] = s, i.forEach((o) => {
      a[o] = s;
    }), a;
  });
  const t = "far" in Ie || m.autoFetchSvg, n = yn(Cf, (a, r) => {
    const s = r[0];
    let i = r[1];
    const o = r[2];
    return i === "far" && !t && (i = "fas"), typeof s == "string" && (a.names[s] = {
      prefix: i,
      iconName: o
    }), typeof s == "number" && (a.unicodes[s.toString(16)] = {
      prefix: i,
      iconName: o
    }), a;
  }, {
    names: {},
    unicodes: {}
  });
  bs = n.names, ks = n.unicodes, ga = rn(m.styleDefault, {
    family: m.familyDefault
  });
};
wf((e) => {
  ga = rn(e.styleDefault, {
    family: m.familyDefault
  });
});
Ss();
function pa(e, t) {
  return (_s[e] || {})[t];
}
function Rf(e, t) {
  return (vs[e] || {})[t];
}
function Ye(e, t) {
  return (ws[e] || {})[t];
}
function xs(e) {
  return bs[e] || {
    prefix: null,
    iconName: null
  };
}
function Wf(e) {
  const t = ks[e], n = pa("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Pe() {
  return ga;
}
const _a = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function rn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = N
  } = t, a = Ue[n][e], r = _t[n][e] || _t[n][a], s = e in oe.styles ? e : null;
  return r || s || null;
}
const Uf = {
  [N]: Object.keys(ze[N]),
  [z]: Object.keys(ze[z]),
  [j]: Object.keys(ze[j])
};
function sn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t, a = {
    [N]: "".concat(m.cssPrefix, "-").concat(N),
    [z]: "".concat(m.cssPrefix, "-").concat(z),
    [j]: "".concat(m.cssPrefix, "-").concat(j)
  };
  let r = null, s = N;
  const i = $u.filter((l) => l !== rs);
  i.forEach((l) => {
    (e.includes(a[l]) || e.some((u) => Uf[l].includes(u))) && (s = l);
  });
  const o = e.reduce((l, u) => {
    const d = Lf(m.cssPrefix, u);
    if (Ie[u] ? (u = Ef[s].includes(u) ? mf[s][u] : u, r = u, l.prefix = u) : Ff[s].indexOf(u) > -1 ? (r = u, l.prefix = rn(u, {
      family: s
    })) : d ? l.iconName = d : u !== m.replacementClass && !i.some((b) => u === a[b]) && l.rest.push(u), !n && l.prefix && l.iconName) {
      const b = r === "fa" ? xs(l.iconName) : {}, _ = Ye(l.prefix, l.iconName);
      b.prefix && (r = null), l.iconName = b.iconName || _ || l.iconName, l.prefix = b.prefix || l.prefix, l.prefix === "far" && !Ie.far && Ie.fas && !m.autoFetchSvg && (l.prefix = "fas");
    }
    return l;
  }, _a());
  return (e.includes("fa-brands") || e.includes("fab")) && (o.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (o.prefix = "fad"), !o.prefix && s === z && (Ie.fass || m.autoFetchSvg) && (o.prefix = "fass", o.iconName = Ye(o.prefix, o.iconName) || o.iconName), !o.prefix && s === j && (Ie.fasds || m.autoFetchSvg) && (o.prefix = "fasds", o.iconName = Ye(o.prefix, o.iconName) || o.iconName), (o.prefix === "fa" || r === "fa") && (o.prefix = Pe() || "fas"), o;
}
class zf {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
      n[a] = arguments[a];
    const r = n.reduce(this._pullDefinitions, {});
    Object.keys(r).forEach((s) => {
      this.definitions[s] = {
        ...this.definitions[s] || {},
        ...r[s]
      }, An(s, r[s]);
      const i = ze[N][s];
      i && An(i, r[s]), Ss();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, n) {
    const a = n.prefix && n.iconName && n.icon ? {
      0: n
    } : n;
    return Object.keys(a).map((r) => {
      const {
        prefix: s,
        iconName: i,
        icon: o
      } = a[r], l = o[2];
      t[s] || (t[s] = {}), l.length > 0 && l.forEach((u) => {
        typeof u == "string" && (t[s][u] = o);
      }), t[s][i] = o;
    }), t;
  }
}
let Wa = [], qe = {};
const Qe = {}, jf = Object.keys(Qe);
function Hf(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return Wa = e, qe = {}, Object.keys(Qe).forEach((a) => {
    jf.indexOf(a) === -1 && delete Qe[a];
  }), Wa.forEach((a) => {
    const r = a.mixout ? a.mixout() : {};
    if (Object.keys(r).forEach((s) => {
      typeof r[s] == "function" && (n[s] = r[s]), typeof r[s] == "object" && Object.keys(r[s]).forEach((i) => {
        n[s] || (n[s] = {}), n[s][i] = r[s][i];
      });
    }), a.hooks) {
      const s = a.hooks();
      Object.keys(s).forEach((i) => {
        qe[i] || (qe[i] = []), qe[i].push(s[i]);
      });
    }
    a.provides && a.provides(Qe);
  }), n;
}
function Cn(e, t) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
    a[r - 2] = arguments[r];
  return (qe[e] || []).forEach((i) => {
    t = i.apply(null, [t, ...a]);
  }), t;
}
function He(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  (qe[e] || []).forEach((s) => {
    s.apply(null, n);
  });
}
function Ae() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Qe[e] ? Qe[e].apply(null, t) : void 0;
}
function En(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || Pe();
  if (t)
    return t = Ye(n, t) || t, La(Ms.definitions, n, t) || La(oe.styles, n, t);
}
const Ms = new zf(), Vf = () => {
  m.autoReplaceSvg = !1, m.observeMutations = !1, He("noAuto");
}, Gf = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return xe ? (He("beforeI2svg", e), Ae("pseudoElements2svg", e), Ae("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    m.autoReplaceSvg === !1 && (m.autoReplaceSvg = !0), m.observeMutations = !0, Nf(() => {
      $f({
        autoReplaceSvgRoot: t
      }), He("watch", e);
    });
  }
}, Bf = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Ye(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = rn(e[0]);
      return {
        prefix: n,
        iconName: Ye(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(m.cssPrefix, "-")) > -1 || e.match(yf))) {
      const t = sn(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || Pe(),
        iconName: Ye(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = Pe();
      return {
        prefix: t,
        iconName: Ye(t, e) || e
      };
    }
  }
}, V = {
  noAuto: Vf,
  config: m,
  dom: Gf,
  parse: Bf,
  library: Ms,
  findIconDefinition: En,
  toHtml: Ot
}, $f = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = O
  } = e;
  (Object.keys(oe.styles).length > 0 || m.autoFetchSvg) && xe && m.autoReplaceSvg && V.dom.i2svg({
    node: t
  });
};
function on(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => Ot(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!xe) return;
      const n = O.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function Zf(e) {
  let {
    children: t,
    main: n,
    mask: a,
    attributes: r,
    styles: s,
    transform: i
  } = e;
  if (ya(i) && n.found && !a.found) {
    const {
      width: o,
      height: l
    } = n, u = {
      x: o / l / 2,
      y: 0.5
    };
    r.style = an({
      ...s,
      "transform-origin": "".concat(u.x + i.x / 16, "em ").concat(u.y + i.y / 16, "em")
    });
  }
  return [{
    tag: "svg",
    attributes: r,
    children: t
  }];
}
function qf(e) {
  let {
    prefix: t,
    iconName: n,
    children: a,
    attributes: r,
    symbol: s
  } = e;
  const i = s === !0 ? "".concat(t, "-").concat(m.cssPrefix, "-").concat(n) : s;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: {
        ...r,
        id: i
      },
      children: a
    }]
  }];
}
function va(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: a,
    iconName: r,
    transform: s,
    symbol: i,
    title: o,
    maskId: l,
    titleId: u,
    extra: d,
    watchable: b = !1
  } = e, {
    width: _,
    height: F
  } = n.found ? n : t, re = a === "fak", X = [m.replacementClass, r ? "".concat(m.cssPrefix, "-").concat(r) : ""].filter((G) => d.classes.indexOf(G) === -1).filter((G) => G !== "" || !!G).concat(d.classes).join(" ");
  let R = {
    children: [],
    attributes: {
      ...d.attributes,
      "data-prefix": a,
      "data-icon": r,
      class: X,
      role: d.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(_, " ").concat(F)
    }
  };
  const g = re && !~d.classes.indexOf("fa-fw") ? {
    width: "".concat(_ / F * 16 * 0.0625, "em")
  } : {};
  b && (R.attributes[je] = ""), o && (R.children.push({
    tag: "title",
    attributes: {
      id: R.attributes["aria-labelledby"] || "title-".concat(u || vt())
    },
    children: [o]
  }), delete R.attributes.title);
  const p = {
    ...R,
    prefix: a,
    iconName: r,
    main: t,
    mask: n,
    maskId: l,
    transform: s,
    symbol: i,
    styles: {
      ...g,
      ...d.styles
    }
  }, {
    children: P,
    attributes: I
  } = n.found && t.found ? Ae("generateAbstractMask", p) || {
    children: [],
    attributes: {}
  } : Ae("generateAbstractIcon", p) || {
    children: [],
    attributes: {}
  };
  return p.children = P, p.attributes = I, i ? qf(p) : Zf(p);
}
function Ua(e) {
  const {
    content: t,
    width: n,
    height: a,
    transform: r,
    title: s,
    extra: i,
    watchable: o = !1
  } = e, l = {
    ...i.attributes,
    ...s ? {
      title: s
    } : {},
    class: i.classes.join(" ")
  };
  o && (l[je] = "");
  const u = {
    ...i.styles
  };
  ya(r) && (u.transform = Df({
    transform: r,
    startCentered: !0,
    width: n,
    height: a
  }), u["-webkit-transform"] = u.transform);
  const d = an(u);
  d.length > 0 && (l.style = d);
  const b = [];
  return b.push({
    tag: "span",
    attributes: l,
    children: [t]
  }), s && b.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [s]
  }), b;
}
function Xf(e) {
  const {
    content: t,
    title: n,
    extra: a
  } = e, r = {
    ...a.attributes,
    ...n ? {
      title: n
    } : {},
    class: a.classes.join(" ")
  }, s = an(a.styles);
  s.length > 0 && (r.style = s);
  const i = [];
  return i.push({
    tag: "span",
    attributes: r,
    children: [t]
  }), n && i.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), i;
}
const {
  styles: gn
} = oe;
function Fn(e) {
  const t = e[0], n = e[1], [a] = e.slice(4);
  let r = null;
  return Array.isArray(a) ? r = {
    tag: "g",
    attributes: {
      class: "".concat(m.cssPrefix, "-").concat(hn.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(m.cssPrefix, "-").concat(hn.SECONDARY),
        fill: "currentColor",
        d: a[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(m.cssPrefix, "-").concat(hn.PRIMARY),
        fill: "currentColor",
        d: a[1]
      }
    }]
  } : r = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: a
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: r
  };
}
const Kf = {
  found: !1,
  width: 512,
  height: 512
};
function Jf(e, t) {
  !us && !m.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function In(e, t) {
  let n = t;
  return t === "fa" && m.styleDefault !== null && (t = Pe()), new Promise((a, r) => {
    if (n === "fa") {
      const s = xs(e) || {};
      e = s.iconName || e, t = s.prefix || t;
    }
    if (e && t && gn[t] && gn[t][e]) {
      const s = gn[t][e];
      return a(Fn(s));
    }
    Jf(e, t), a({
      ...Kf,
      icon: m.showMissingIcons && e ? Ae("missingIconAbstract") || {} : {}
    });
  });
}
const za = () => {
}, Ln = m.measurePerformance && Nt && Nt.mark && Nt.measure ? Nt : {
  mark: za,
  measure: za
}, ut = 'FA "6.6.0"', Qf = (e) => (Ln.mark("".concat(ut, " ").concat(e, " begins")), () => Os(e)), Os = (e) => {
  Ln.mark("".concat(ut, " ").concat(e, " ends")), Ln.measure("".concat(ut, " ").concat(e), "".concat(ut, " ").concat(e, " begins"), "".concat(ut, " ").concat(e, " ends"));
};
var ba = {
  begin: Qf,
  end: Os
};
const Ft = () => {
};
function ja(e) {
  return typeof (e.getAttribute ? e.getAttribute(je) : null) == "string";
}
function ec(e) {
  const t = e.getAttribute ? e.getAttribute(da) : null, n = e.getAttribute ? e.getAttribute(ha) : null;
  return t && n;
}
function tc(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(m.replacementClass);
}
function nc() {
  return m.autoReplaceSvg === !0 ? It.replace : It[m.autoReplaceSvg] || It.replace;
}
function ac(e) {
  return O.createElementNS("http://www.w3.org/2000/svg", e);
}
function rc(e) {
  return O.createElement(e);
}
function Ds(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? ac : rc
  } = t;
  if (typeof e == "string")
    return O.createTextNode(e);
  const a = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(s) {
    a.setAttribute(s, e.attributes[s]);
  }), (e.children || []).forEach(function(s) {
    a.appendChild(Ds(s, {
      ceFn: n
    }));
  }), a;
}
function sc(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const It = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(Ds(n), t);
      }), t.getAttribute(je) === null && m.keepOriginalSource) {
        let n = O.createComment(sc(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~ma(t).indexOf(m.replacementClass))
      return It.replace(e);
    const a = new RegExp("".concat(m.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const s = n[0].attributes.class.split(" ").reduce((i, o) => (o === m.replacementClass || o.match(a) ? i.toSvg.push(o) : i.toNode.push(o), i), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = s.toSvg.join(" "), s.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", s.toNode.join(" "));
    }
    const r = n.map((s) => Ot(s)).join(`
`);
    t.setAttribute(je, ""), t.innerHTML = r;
  }
};
function Ha(e) {
  e();
}
function Ys(e, t) {
  const n = typeof t == "function" ? t : Ft;
  if (e.length === 0)
    n();
  else {
    let a = Ha;
    m.mutateApproach === df && (a = Ne.requestAnimationFrame || Ha), a(() => {
      const r = nc(), s = ba.begin("mutate");
      e.map(r), s(), n();
    });
  }
}
let ka = !1;
function Ts() {
  ka = !0;
}
function Rn() {
  ka = !1;
}
let Ht = null;
function Va(e) {
  if (!Aa || !m.observeMutations)
    return;
  const {
    treeCallback: t = Ft,
    nodeCallback: n = Ft,
    pseudoElementsCallback: a = Ft,
    observeMutationsRoot: r = O
  } = e;
  Ht = new Aa((s) => {
    if (ka) return;
    const i = Pe();
    st(s).forEach((o) => {
      if (o.type === "childList" && o.addedNodes.length > 0 && !ja(o.addedNodes[0]) && (m.searchPseudoElements && a(o.target), t(o.target)), o.type === "attributes" && o.target.parentNode && m.searchPseudoElements && a(o.target.parentNode), o.type === "attributes" && ja(o.target) && ~_f.indexOf(o.attributeName))
        if (o.attributeName === "class" && ec(o.target)) {
          const {
            prefix: l,
            iconName: u
          } = sn(ma(o.target));
          o.target.setAttribute(da, l || i), u && o.target.setAttribute(ha, u);
        } else tc(o.target) && n(o.target);
    });
  }), xe && Ht.observe(r, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function ic() {
  Ht && Ht.disconnect();
}
function oc(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((a, r) => {
    const s = r.split(":"), i = s[0], o = s.slice(1);
    return i && o.length > 0 && (a[i] = o.join(":").trim()), a;
  }, {})), n;
}
function lc(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), a = e.innerText !== void 0 ? e.innerText.trim() : "";
  let r = sn(ma(e));
  return r.prefix || (r.prefix = Pe()), t && n && (r.prefix = t, r.iconName = n), r.iconName && r.prefix || (r.prefix && a.length > 0 && (r.iconName = Rf(r.prefix, e.innerText) || pa(r.prefix, Pn(e.innerText))), !r.iconName && m.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = e.firstChild.data)), r;
}
function uc(e) {
  const t = st(e.attributes).reduce((r, s) => (r.name !== "class" && r.name !== "style" && (r[s.name] = s.value), r), {}), n = e.getAttribute("title"), a = e.getAttribute("data-fa-title-id");
  return m.autoA11y && (n ? t["aria-labelledby"] = "".concat(m.replacementClass, "-title-").concat(a || vt()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function fc() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: ie,
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
function Ga(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: a,
    rest: r
  } = lc(e), s = uc(e), i = Cn("parseNodeAttributes", {}, e);
  let o = t.styleParser ? oc(e) : [];
  return {
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: a,
    transform: ie,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: r,
      styles: o,
      attributes: s
    },
    ...i
  };
}
const {
  styles: cc
} = oe;
function Ns(e) {
  const t = m.autoReplaceSvg === "nest" ? Ga(e, {
    styleParser: !1
  }) : Ga(e);
  return ~t.extra.classes.indexOf(ds) ? Ae("generateLayersText", e, t) : Ae("generateSvgReplacementMutation", e, t);
}
let ue = /* @__PURE__ */ new Set();
fs.map((e) => {
  ue.add("fa-".concat(e));
});
Object.keys(Ue[N]).map(ue.add.bind(ue));
Object.keys(Ue[z]).map(ue.add.bind(ue));
Object.keys(Ue[j]).map(ue.add.bind(ue));
ue = [...ue];
function Ba(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!xe) return Promise.resolve();
  const n = O.documentElement.classList, a = (d) => n.add("".concat(Fa, "-").concat(d)), r = (d) => n.remove("".concat(Fa, "-").concat(d)), s = m.autoFetchSvg ? ue : fs.map((d) => "fa-".concat(d)).concat(Object.keys(cc));
  s.includes("fa") || s.push("fa");
  const i = [".".concat(ds, ":not([").concat(je, "])")].concat(s.map((d) => ".".concat(d, ":not([").concat(je, "])"))).join(", ");
  if (i.length === 0)
    return Promise.resolve();
  let o = [];
  try {
    o = st(e.querySelectorAll(i));
  } catch {
  }
  if (o.length > 0)
    a("pending"), r("complete");
  else
    return Promise.resolve();
  const l = ba.begin("onTree"), u = o.reduce((d, b) => {
    try {
      const _ = Ns(b);
      _ && d.push(_);
    } catch (_) {
      us || _.name === "MissingIcon" && console.error(_);
    }
    return d;
  }, []);
  return new Promise((d, b) => {
    Promise.all(u).then((_) => {
      Ys(_, () => {
        a("active"), a("complete"), r("pending"), typeof t == "function" && t(), l(), d();
      });
    }).catch((_) => {
      l(), b(_);
    });
  });
}
function dc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Ns(e).then((n) => {
    n && Ys([n], t);
  });
}
function hc(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const a = (t || {}).icon ? t : En(t || {});
    let {
      mask: r
    } = n;
    return r && (r = (r || {}).icon ? r : En(r || {})), e(a, {
      ...n,
      mask: r
    });
  };
}
const mc = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = ie,
    symbol: a = !1,
    mask: r = null,
    maskId: s = null,
    title: i = null,
    titleId: o = null,
    classes: l = [],
    attributes: u = {},
    styles: d = {}
  } = t;
  if (!e) return;
  const {
    prefix: b,
    iconName: _,
    icon: F
  } = e;
  return on({
    type: "icon",
    ...e
  }, () => (He("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), m.autoA11y && (i ? u["aria-labelledby"] = "".concat(m.replacementClass, "-title-").concat(o || vt()) : (u["aria-hidden"] = "true", u.focusable = "false")), va({
    icons: {
      main: Fn(F),
      mask: r ? Fn(r.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: b,
    iconName: _,
    transform: {
      ...ie,
      ...n
    },
    symbol: a,
    title: i,
    maskId: s,
    titleId: o,
    extra: {
      attributes: u,
      styles: d,
      classes: l
    }
  })));
};
var yc = {
  mixout() {
    return {
      icon: hc(mc)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Ba, e.nodeCallback = dc, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = O,
        callback: a = () => {
        }
      } = t;
      return Ba(n, a);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: a,
        title: r,
        titleId: s,
        prefix: i,
        transform: o,
        symbol: l,
        mask: u,
        maskId: d,
        extra: b
      } = n;
      return new Promise((_, F) => {
        Promise.all([In(a, i), u.iconName ? In(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((re) => {
          let [X, R] = re;
          _([t, va({
            icons: {
              main: X,
              mask: R
            },
            prefix: i,
            iconName: a,
            transform: o,
            symbol: l,
            maskId: d,
            title: r,
            titleId: s,
            extra: b,
            watchable: !0
          })]);
        }).catch(F);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: a,
        main: r,
        transform: s,
        styles: i
      } = t;
      const o = an(i);
      o.length > 0 && (a.style = o);
      let l;
      return ya(s) && (l = Ae("generateAbstractTransformGrouping", {
        main: r,
        transform: s,
        containerWidth: r.width,
        iconWidth: r.width
      })), n.push(l || r.icon), {
        children: n,
        attributes: a
      };
    };
  }
}, gc = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return on({
          type: "layer"
        }, () => {
          He("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let a = [];
          return e((r) => {
            Array.isArray(r) ? r.map((s) => {
              a = a.concat(s.abstract);
            }) : a = a.concat(r.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(m.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: a
          }];
        });
      }
    };
  }
}, pc = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: a = [],
          attributes: r = {},
          styles: s = {}
        } = t;
        return on({
          type: "counter",
          content: e
        }, () => (He("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Xf({
          content: e.toString(),
          title: n,
          extra: {
            attributes: r,
            styles: s,
            classes: ["".concat(m.cssPrefix, "-layers-counter"), ...a]
          }
        })));
      }
    };
  }
}, _c = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = ie,
          title: a = null,
          classes: r = [],
          attributes: s = {},
          styles: i = {}
        } = t;
        return on({
          type: "text",
          content: e
        }, () => (He("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Ua({
          content: e,
          transform: {
            ...ie,
            ...n
          },
          title: a,
          extra: {
            attributes: s,
            styles: i,
            classes: ["".concat(m.cssPrefix, "-layers-text"), ...r]
          }
        })));
      }
    };
  },
  provides(e) {
    e.generateLayersText = function(t, n) {
      const {
        title: a,
        transform: r,
        extra: s
      } = n;
      let i = null, o = null;
      if (as) {
        const l = parseInt(getComputedStyle(t).fontSize, 10), u = t.getBoundingClientRect();
        i = u.width / l, o = u.height / l;
      }
      return m.autoA11y && !a && (s.attributes["aria-hidden"] = "true"), Promise.resolve([t, Ua({
        content: t.innerHTML,
        width: i,
        height: o,
        transform: r,
        title: a,
        extra: s,
        watchable: !0
      })]);
    };
  }
};
const vc = new RegExp('"', "ug"), $a = [1105920, 1112319], Za = {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  },
  ...Qu,
  ...Ju,
  ...lf
}, Wn = Object.keys(Za).reduce((e, t) => (e[t.toLowerCase()] = Za[t], e), {}), bc = Object.keys(Wn).reduce((e, t) => {
  const n = Wn[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function kc(e) {
  const t = e.replace(vc, ""), n = Af(t, 0), a = n >= $a[0] && n <= $a[1], r = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Pn(r ? t[0] : t),
    isSecondary: a || r
  };
}
function wc(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), a = parseInt(t), r = isNaN(a) ? "normal" : a;
  return (Wn[n] || {})[r] || bc[n];
}
function qa(e, t) {
  const n = "".concat(cf).concat(t.replace(":", "-"));
  return new Promise((a, r) => {
    if (e.getAttribute(n) !== null)
      return a();
    const i = st(e.children).filter((_) => _.getAttribute(Dn) === t)[0], o = Ne.getComputedStyle(e, t), l = o.getPropertyValue("font-family"), u = l.match(gf), d = o.getPropertyValue("font-weight"), b = o.getPropertyValue("content");
    if (i && !u)
      return e.removeChild(i), a();
    if (u && b !== "none" && b !== "") {
      const _ = o.getPropertyValue("content");
      let F = wc(l, d);
      const {
        value: re,
        isSecondary: X
      } = kc(_), R = u[0].startsWith("FontAwesome");
      let g = pa(F, re), p = g;
      if (R) {
        const P = Wf(re);
        P.iconName && P.prefix && (g = P.iconName, F = P.prefix);
      }
      if (g && !X && (!i || i.getAttribute(da) !== F || i.getAttribute(ha) !== p)) {
        e.setAttribute(n, p), i && e.removeChild(i);
        const P = fc(), {
          extra: I
        } = P;
        I.attributes[Dn] = t, In(g, F).then((G) => {
          const Dt = va({
            ...P,
            icons: {
              main: G,
              mask: _a()
            },
            prefix: F,
            iconName: p,
            extra: I,
            watchable: !0
          }), Ce = O.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(Ce, e.firstChild) : e.appendChild(Ce), Ce.outerHTML = Dt.map((Fs) => Ot(Fs)).join(`
`), e.removeAttribute(n), a();
        }).catch(r);
      } else
        a();
    } else
      a();
  });
}
function Sc(e) {
  return Promise.all([qa(e, "::before"), qa(e, "::after")]);
}
function xc(e) {
  return e.parentNode !== document.head && !~hf.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Dn) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Xa(e) {
  if (xe)
    return new Promise((t, n) => {
      const a = st(e.querySelectorAll("*")).filter(xc).map(Sc), r = ba.begin("searchPseudoElements");
      Ts(), Promise.all(a).then(() => {
        r(), Rn(), t();
      }).catch(() => {
        r(), Rn(), n();
      });
    });
}
var Mc = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = Xa, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = O
      } = t;
      m.searchPseudoElements && Xa(n);
    };
  }
};
let Ka = !1;
var Oc = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Ts(), Ka = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Va(Cn("mutationObserverCallbacks", {}));
      },
      noAuto() {
        ic();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        Ka ? Rn() : Va(Cn("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const Ja = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((n, a) => {
    const r = a.toLowerCase().split("-"), s = r[0];
    let i = r.slice(1).join("-");
    if (s && i === "h")
      return n.flipX = !0, n;
    if (s && i === "v")
      return n.flipY = !0, n;
    if (i = parseFloat(i), isNaN(i))
      return n;
    switch (s) {
      case "grow":
        n.size = n.size + i;
        break;
      case "shrink":
        n.size = n.size - i;
        break;
      case "left":
        n.x = n.x - i;
        break;
      case "right":
        n.x = n.x + i;
        break;
      case "up":
        n.y = n.y - i;
        break;
      case "down":
        n.y = n.y + i;
        break;
      case "rotate":
        n.rotate = n.rotate + i;
        break;
    }
    return n;
  }, t);
};
var Dc = {
  mixout() {
    return {
      parse: {
        transform: (e) => Ja(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = Ja(n)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: n,
        transform: a,
        containerWidth: r,
        iconWidth: s
      } = t;
      const i = {
        transform: "translate(".concat(r / 2, " 256)")
      }, o = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), l = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), u = "rotate(".concat(a.rotate, " 0 0)"), d = {
        transform: "".concat(o, " ").concat(l, " ").concat(u)
      }, b = {
        transform: "translate(".concat(s / 2 * -1, " -256)")
      }, _ = {
        outer: i,
        inner: d,
        path: b
      };
      return {
        tag: "g",
        attributes: {
          ..._.outer
        },
        children: [{
          tag: "g",
          attributes: {
            ..._.inner
          },
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: {
              ...n.icon.attributes,
              ..._.path
            }
          }]
        }]
      };
    };
  }
};
const pn = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Qa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Yc(e) {
  return e.tag === "g" ? e.children : [e];
}
var Tc = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), a = n ? sn(n.split(" ").map((r) => r.trim())) : _a();
        return a.prefix || (a.prefix = Pe()), e.mask = a, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: n,
        attributes: a,
        main: r,
        mask: s,
        maskId: i,
        transform: o
      } = t;
      const {
        width: l,
        icon: u
      } = r, {
        width: d,
        icon: b
      } = s, _ = Of({
        transform: o,
        containerWidth: d,
        iconWidth: l
      }), F = {
        tag: "rect",
        attributes: {
          ...pn,
          fill: "white"
        }
      }, re = u.children ? {
        children: u.children.map(Qa)
      } : {}, X = {
        tag: "g",
        attributes: {
          ..._.inner
        },
        children: [Qa({
          tag: u.tag,
          attributes: {
            ...u.attributes,
            ..._.path
          },
          ...re
        })]
      }, R = {
        tag: "g",
        attributes: {
          ..._.outer
        },
        children: [X]
      }, g = "mask-".concat(i || vt()), p = "clip-".concat(i || vt()), P = {
        tag: "mask",
        attributes: {
          ...pn,
          id: g,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        },
        children: [F, R]
      }, I = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: p
          },
          children: Yc(b)
        }, P]
      };
      return n.push(I, {
        tag: "rect",
        attributes: {
          fill: "currentColor",
          "clip-path": "url(#".concat(p, ")"),
          mask: "url(#".concat(g, ")"),
          ...pn
        }
      }), {
        children: n,
        attributes: a
      };
    };
  }
}, Nc = {
  provides(e) {
    let t = !1;
    Ne.matchMedia && (t = Ne.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], a = {
        fill: "currentColor"
      }, r = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: {
          ...a,
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        }
      });
      const s = {
        ...r,
        attributeName: "opacity"
      }, i = {
        tag: "circle",
        attributes: {
          ...a,
          cx: "256",
          cy: "364",
          r: "28"
        },
        children: []
      };
      return t || i.children.push({
        tag: "animate",
        attributes: {
          ...r,
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        }
      }, {
        tag: "animate",
        attributes: {
          ...s,
          values: "1;0;1;1;0;1;"
        }
      }), n.push(i), n.push({
        tag: "path",
        attributes: {
          ...a,
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        },
        children: t ? [] : [{
          tag: "animate",
          attributes: {
            ...s,
            values: "1;0;0;0;0;1;"
          }
        }]
      }), t || n.push({
        tag: "path",
        attributes: {
          ...a,
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        },
        children: [{
          tag: "animate",
          attributes: {
            ...s,
            values: "0;0;1;1;0;0;"
          }
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
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), a = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = a, e;
      }
    };
  }
}, Ac = [Tf, yc, gc, pc, _c, Mc, Oc, Dc, Tc, Nc, Pc];
Hf(Ac, {
  mixoutsTo: V
});
V.noAuto;
const Ps = V.config, Cc = V.library;
V.dom;
const Vt = V.parse;
V.findIconDefinition;
V.toHtml;
const Ec = V.icon;
V.layer;
const Fc = V.text;
V.counter;
function er(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function Q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? er(Object(n), !0).forEach(function(a) {
      W(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : er(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function Ic(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(e, t || "default");
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Lc(e) {
  var t = Ic(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Gt(e) {
  "@babel/helpers - typeof";
  return Gt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gt(e);
}
function W(e, t, n) {
  return t = Lc(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Rc(e, t) {
  if (e == null) return {};
  var n = {};
  for (var a in e)
    if (Object.prototype.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) >= 0) continue;
      n[a] = e[a];
    }
  return n;
}
function Wc(e, t) {
  if (e == null) return {};
  var n = Rc(e, t), a, r;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++)
      a = s[r], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
  }
  return n;
}
function Un(e) {
  return Uc(e) || zc(e) || jc(e) || Hc();
}
function Uc(e) {
  if (Array.isArray(e)) return zn(e);
}
function zc(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function jc(e, t) {
  if (e) {
    if (typeof e == "string") return zn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return zn(e, t);
  }
}
function zn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
  return a;
}
function Hc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Vc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, As = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(g, p, P) {
      if (!u(p) || b(p) || _(p) || F(p) || l(p))
        return p;
      var I, G = 0, Dt = 0;
      if (d(p))
        for (I = [], Dt = p.length; G < Dt; G++)
          I.push(n(g, p[G], P));
      else {
        I = {};
        for (var Ce in p)
          Object.prototype.hasOwnProperty.call(p, Ce) && (I[g(Ce, P)] = n(g, p[Ce], P));
      }
      return I;
    }, a = function(g, p) {
      p = p || {};
      var P = p.separator || "_", I = p.split || /(?=[A-Z])/;
      return g.split(I).join(P);
    }, r = function(g) {
      return re(g) ? g : (g = g.replace(/[\-_\s]+(.)?/g, function(p, P) {
        return P ? P.toUpperCase() : "";
      }), g.substr(0, 1).toLowerCase() + g.substr(1));
    }, s = function(g) {
      var p = r(g);
      return p.substr(0, 1).toUpperCase() + p.substr(1);
    }, i = function(g, p) {
      return a(g, p).toLowerCase();
    }, o = Object.prototype.toString, l = function(g) {
      return typeof g == "function";
    }, u = function(g) {
      return g === Object(g);
    }, d = function(g) {
      return o.call(g) == "[object Array]";
    }, b = function(g) {
      return o.call(g) == "[object Date]";
    }, _ = function(g) {
      return o.call(g) == "[object RegExp]";
    }, F = function(g) {
      return o.call(g) == "[object Boolean]";
    }, re = function(g) {
      return g = g - 0, g === g;
    }, X = function(g, p) {
      var P = p && "process" in p ? p.process : p;
      return typeof P != "function" ? g : function(I, G) {
        return P(I, g, G);
      };
    }, R = {
      camelize: r,
      decamelize: i,
      pascalize: s,
      depascalize: i,
      camelizeKeys: function(g, p) {
        return n(X(r, p), g);
      },
      decamelizeKeys: function(g, p) {
        return n(X(i, p), g, p);
      },
      pascalizeKeys: function(g, p) {
        return n(X(s, p), g);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = R : t.humps = R;
  })(Vc);
})(As);
var Gc = As.exports, Bc = ["class", "style"];
function $c(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var a = n.indexOf(":"), r = Gc.camelize(n.slice(0, a)), s = n.slice(a + 1).trim();
    return t[r] = s, t;
  }, {});
}
function Zc(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function wa(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var a = (e.children || []).map(function(l) {
    return wa(l);
  }), r = Object.keys(e.attributes || {}).reduce(function(l, u) {
    var d = e.attributes[u];
    switch (u) {
      case "class":
        l.class = Zc(d);
        break;
      case "style":
        l.style = $c(d);
        break;
      default:
        l.attrs[u] = d;
    }
    return l;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var s = n.style, i = s === void 0 ? {} : s, o = Wc(n, Bc);
  return rr(e.tag, Q(Q(Q({}, t), {}, {
    class: r.class,
    style: Q(Q({}, r.style), i)
  }, r.attrs), o), a);
}
var Cs = !1;
try {
  Cs = process.env.NODE_ENV === "production";
} catch {
}
function qc() {
  if (!Cs && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function ht(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? W({}, e, t) : {};
}
function Xc(e) {
  var t, n = (t = {
    "fa-spin": e.spin,
    "fa-pulse": e.pulse,
    "fa-fw": e.fixedWidth,
    "fa-border": e.border,
    "fa-li": e.listItem,
    "fa-inverse": e.inverse,
    "fa-flip": e.flip === !0,
    "fa-flip-horizontal": e.flip === "horizontal" || e.flip === "both",
    "fa-flip-vertical": e.flip === "vertical" || e.flip === "both"
  }, W(W(W(W(W(W(W(W(W(W(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), "fa-flash", e.flash), W(W(t, "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse));
  return Object.keys(n).map(function(a) {
    return n[a] ? a : null;
  }).filter(function(a) {
    return a;
  });
}
function tr(e) {
  if (e && Gt(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Vt.icon)
    return Vt.icon(e);
  if (e === null)
    return null;
  if (Gt(e) === "object" && e.prefix && e.iconName)
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
var Es = jn({
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
  setup: function(t, n) {
    var a = n.attrs, r = J(function() {
      return tr(t.icon);
    }), s = J(function() {
      return ht("classes", Xc(t));
    }), i = J(function() {
      return ht("transform", typeof t.transform == "string" ? Vt.transform(t.transform) : t.transform);
    }), o = J(function() {
      return ht("mask", tr(t.mask));
    }), l = J(function() {
      return Ec(r.value, Q(Q(Q(Q({}, s.value), i.value), o.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    Rs(l, function(d) {
      if (!d)
        return qc("Could not find one or more icon(s)", r.value, o.value);
    }, {
      immediate: !0
    });
    var u = J(function() {
      return l.value ? wa(l.value.abstract[0], {}, a) : null;
    });
    return function() {
      return u.value;
    };
  }
});
jn({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var a = n.slots, r = Ps.familyPrefix, s = J(function() {
      return ["".concat(r, "-layers")].concat(Un(t.fixedWidth ? ["".concat(r, "-fw")] : []));
    });
    return function() {
      return rr("div", {
        class: s.value
      }, a.default ? a.default() : []);
    };
  }
});
jn({
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
  setup: function(t, n) {
    var a = n.attrs, r = Ps.familyPrefix, s = J(function() {
      return ht("classes", [].concat(Un(t.counter ? ["".concat(r, "-layers-counter")] : []), Un(t.position ? ["".concat(r, "-layers-").concat(t.position)] : [])));
    }), i = J(function() {
      return ht("transform", typeof t.transform == "string" ? Vt.transform(t.transform) : t.transform);
    }), o = J(function() {
      var u = Fc(t.value.toString(), Q(Q({}, i.value), s.value)), d = u.abstract;
      return t.counter && (d[0].attributes.class = d[0].attributes.class.replace("fa-layers-text", "")), d[0];
    }), l = J(function() {
      return wa(o.value, {}, a);
    });
    return function() {
      return l.value;
    };
  }
});
const Kc = {
  components: { FontAwesomeIcon: Es, DateLink: Qr },
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
}, nd = {
  key: 1,
  class: "ml-1"
};
function ad(e, t, n, a, r, s) {
  const i = Le("font-awesome-icon"), o = Le("date-link");
  return n.date ? (C(), he(o, {
    key: 0,
    date: n.date,
    onClickDate: t[0] || (t[0] = (l) => e.$emit("click-date", l))
  }, {
    default: Pt(() => [
      n.label && n.forward ? (C(), $("span", Jc, $e(n.label), 1)) : K("", !0),
      _n(i, { icon: n.icon }, null, 8, ["icon"]),
      n.label && !n.forward ? (C(), $("span", Qc, $e(n.label), 1)) : K("", !0)
    ]),
    _: 1
  }, 8, ["date"])) : (C(), $("span", ed, [
    n.label && n.forward ? (C(), $("span", td, $e(n.label), 1)) : K("", !0),
    _n(i, { icon: n.icon }, null, 8, ["icon"]),
    n.label && !n.forward ? (C(), $("span", nd, $e(n.label), 1)) : K("", !0)
  ]));
}
const rd = /* @__PURE__ */ bt(Kc, [["render", ad], ["__scopeId", "data-v-3cf4e63e"]]), sd = {
  prefix: "fas",
  iconName: "backward",
  icon: [512, 512, [9194], "f04a", "M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3l0 41.7 0 41.7L459.5 440.6zM256 352l0-96 0-128 0-32c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-64z"]
}, id = {
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
  icon: [512, 512, [9193], "f04e", "M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416L0 96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3l0 41.7 0 41.7L52.5 440.6zM256 352l0-96 0-128 0-32c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29l0-64z"]
}, ud = {
  prefix: "fas",
  iconName: "calendar-day",
  icon: [448, 512, [], "f783", "M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm80 64c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16l-96 0z"]
};
Cc.add(
  od,
  id,
  sd,
  ld,
  ud
);
const fd = {
  components: {
    FontAwesomeIcon: Es,
    SmallHeader: Hs,
    DateLink: Qr,
    DateNav: rd
  },
  data() {
    return {
      computer: new Ta()
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
        return c(e, "YYYYMMDD", !0).isValid();
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
        return c(e, "YYYYMM", !0).isValid();
      }
    }
  },
  computed: {
    monthLabel() {
      return this.labelFormat ? (this.monthLock ? c(this.monthLock, "YYYYMM") : c(this.date, "YYYYMMDD")).format(this.labelFormat) : "";
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
      return c(e).isSame(this.computer.current);
    },
    isInMonth(e) {
      return this.computer.isInMonth(e);
    },
    dateClass(e) {
      const t = this.isInMonth(e), n = t && this.isCurrent(e);
      return [
        t ? "day" : "empty-day",
        n ? "today" : "not-today"
      ];
    },
    dateStyle(e) {
      return !1;
    },
    dateLabel(e) {
      return this.isInMonth(e) ? c(e).format("D") : "";
    },
    formatDate(e) {
      return c(e).format("YYYYMMDD");
    },
    formatDayLabel(e) {
      return e ? e.format("MMM D") : null;
    },
    handleClick(e) {
      this.$emit("update:date", e);
    },
    handleToday() {
      this.$emit("update:date", c().format("YYYYMMDD"));
    }
  },
  watch: {
    date: {
      immediate: !0,
      handler(e) {
        this.computer = new Ta().with(e), this.monthLock && (this.computer.lockedMonth = this.monthLock);
      }
    }
  }
}, cd = { class: "calendar-wrap style-b" }, dd = { class: "d-flex justify-content-between" }, hd = { class: "mx-auto" }, md = { class: "calendar" }, yd = { class: "date-nav" }, gd = { class: "mr-auto" }, pd = { class: "ml-auto" };
function _d(e, t, n, a, r, s) {
  const i = Le("date-nav"), o = Le("small-header"), l = Le("date-link"), u = Le("font-awesome-icon");
  return C(), $("div", cd, [
    s.monthLabel || n.monthNav ? (C(), he(o, { key: 0 }, {
      default: Pt(() => [
        Ee("div", dd, [
          n.monthNav ? (C(), he(i, {
            key: 0,
            date: s.prevMonth,
            icon: "backward",
            forward: !1,
            onClickDate: s.handleClick
          }, null, 8, ["date", "onClickDate"])) : K("", !0),
          Ee("span", hd, $e(s.monthLabel), 1),
          n.monthNav ? (C(), he(i, {
            key: 1,
            date: s.nextMonth,
            icon: "forward",
            forward: !0,
            onClickDate: s.handleClick
          }, null, 8, ["date", "onClickDate"])) : K("", !0)
        ])
      ]),
      _: 1
    })) : K("", !0),
    Ee("div", md, [
      (C(!0), $(sr, null, ir(s.dateConfig, (d) => (C(), $("div", {
        key: d.date,
        class: ar(d.class),
        style: or(d.style)
      }, [
        _n(l, {
          date: d.date,
          navigable: n.dateNav,
          onClickDate: s.handleClick
        }, {
          default: Pt(() => [
            Ws($e(d.label), 1)
          ]),
          _: 2
        }, 1032, ["date", "navigable", "onClickDate"])
      ], 6))), 128))
    ]),
    n.dayNav || n.todayNav ? (C(), he(o, { key: 1 }, {
      default: Pt(() => [
        Ee("div", yd, [
          Ee("span", gd, [
            s.prevDay && n.dayNav ? (C(), he(i, {
              key: 0,
              date: s.prevDay,
              icon: "caret-left",
              label: s.prevDayLabel,
              forward: !1,
              onClickDate: s.handleClick
            }, null, 8, ["date", "label", "onClickDate"])) : K("", !0)
          ]),
          Ee("span", null, [
            n.todayNav ? (C(), he(u, {
              key: 0,
              icon: "calendar-day",
              class: "clickable",
              onClick: s.handleToday
            }, null, 8, ["onClick"])) : K("", !0)
          ]),
          Ee("span", pd, [
            s.nextDay && n.dayNav ? (C(), he(i, {
              key: 0,
              date: s.nextDay,
              icon: "caret-right",
              label: s.nextDayLabel,
              forward: !0,
              onClickDate: s.handleClick
            }, null, 8, ["date", "label", "onClickDate"])) : K("", !0)
          ])
        ])
      ]),
      _: 1
    })) : K("", !0)
  ]);
}
const vd = /* @__PURE__ */ bt(fd, [["render", _d], ["__scopeId", "data-v-731dcb13"]]), bd = {
  name: "CalendarGrid",
  components: { Calendar: vd },
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
        return c(e, "YYYYMM", !0).isValid();
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
      const e = [], t = c(this.startMonth, "YYYYMM");
      for (let n = 0; n < this.monthCount; n++)
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
function kd(e, t, n, a, r, s) {
  const i = Le("calendar");
  return C(), $("div", {
    class: "calendar-grid",
    style: or(s.gridStyle)
  }, [
    (C(!0), $(sr, null, ir(s.months, (o) => (C(), he(i, {
      key: o,
      "month-lock": o,
      "day-nav": !1,
      "month-nav": !1,
      "date-nav": n.dateNav,
      date: n.date,
      "onUpdate:date": t[0] || (t[0] = (l) => e.$emit("update:date", l))
    }, null, 8, ["month-lock", "date-nav", "date"]))), 128))
  ], 4);
}
const xd = /* @__PURE__ */ bt(bd, [["render", kd], ["__scopeId", "data-v-36f0d052"]]);
export {
  vd as Calendar,
  xd as CalendarGrid
};
