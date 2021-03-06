!function(e) {
    var t = {};
    function n(a) {
        if (t[a]) return t[a].exports;
        var r = t[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
    }
    n.m = e, n.c = t, n.d = function(e, t, a) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        });
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var r in e) n.d(a, r, function(t) {
            return e[t];
        }.bind(null, r));
        return a;
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return n.d(t, "a", t), t;
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 585);
}([ function(e, t, n) {
    (function(e) {
        e.exports = function() {
            "use strict";
            var t, a;
            function r() {
                return t.apply(null, arguments);
            }
            function s(e) {
                return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e);
            }
            function i(e) {
                return null != e && "[object Object]" === Object.prototype.toString.call(e);
            }
            function o(e) {
                return void 0 === e;
            }
            function d(e) {
                return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e);
            }
            function _(e) {
                return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e);
            }
            function u(e, t) {
                var n, a = [];
                for (n = 0; n < e.length; ++n) a.push(t(e[n], n));
                return a;
            }
            function m(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }
            function l(e, t) {
                for (var n in t) m(t, n) && (e[n] = t[n]);
                return m(t, "toString") && (e.toString = t.toString), m(t, "valueOf") && (e.valueOf = t.valueOf), 
                e;
            }
            function c(e, t, n, a) {
                return Ht(e, t, n, a, !0).utc();
            }
            function h(e) {
                return null == e._pf && (e._pf = {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1
                }), e._pf;
            }
            function f(e) {
                if (null == e._isValid) {
                    var t = h(e), n = a.call(t.parsedDateParts, (function(e) {
                        return null != e;
                    })), r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
                    if (e._strict && (r = r && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), 
                    null != Object.isFrozen && Object.isFrozen(e)) return r;
                    e._isValid = r;
                }
                return e._isValid;
            }
            function M(e) {
                var t = c(NaN);
                return null != e ? l(h(t), e) : h(t).userInvalidated = !0, t;
            }
            a = Array.prototype.some ? Array.prototype.some : function(e) {
                for (var t = Object(this), n = t.length >>> 0, a = 0; a < n; a++) if (a in t && e.call(this, t[a], a, t)) return !0;
                return !1;
            };
            var y = r.momentProperties = [];
            function L(e, t) {
                var n, a, r;
                if (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), o(t._i) || (e._i = t._i), 
                o(t._f) || (e._f = t._f), o(t._l) || (e._l = t._l), o(t._strict) || (e._strict = t._strict), 
                o(t._tzm) || (e._tzm = t._tzm), o(t._isUTC) || (e._isUTC = t._isUTC), o(t._offset) || (e._offset = t._offset), 
                o(t._pf) || (e._pf = h(t)), o(t._locale) || (e._locale = t._locale), y.length > 0) for (n = 0; n < y.length; n++) o(r = t[a = y[n]]) || (e[a] = r);
                return e;
            }
            var p = !1;
            function Y(e) {
                L(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), 
                !1 === p && (p = !0, r.updateOffset(this), p = !1);
            }
            function k(e) {
                return e instanceof Y || null != e && null != e._isAMomentObject;
            }
            function g(e) {
                return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
            }
            function D(e) {
                var t = +e, n = 0;
                return 0 !== t && isFinite(t) && (n = g(t)), n;
            }
            function v(e, t, n) {
                var a, r = Math.min(e.length, t.length), s = Math.abs(e.length - t.length), i = 0;
                for (a = 0; a < r; a++) (n && e[a] !== t[a] || !n && D(e[a]) !== D(t[a])) && i++;
                return i + s;
            }
            function T(e) {
                !1 === r.suppressDeprecationWarnings && "undefined" != typeof console && console.warn;
            }
            function w(e, t) {
                var n = !0;
                return l((function() {
                    if (null != r.deprecationHandler && r.deprecationHandler(null, e), n) {
                        for (var a, s = [], i = 0; i < arguments.length; i++) {
                            if (a = "", "object" == typeof arguments[i]) {
                                for (var o in a += "\n[" + i + "] ", arguments[0]) a += o + ": " + arguments[0][o] + ", ";
                                a = a.slice(0, -2);
                            } else a = arguments[i];
                            s.push(a);
                        }
                        T((Array.prototype.slice.call(s).join(""), (new Error).stack)), n = !1;
                    }
                    return t.apply(this, arguments);
                }), t);
            }
            var b, S = {};
            function j(e, t) {
                null != r.deprecationHandler && r.deprecationHandler(e, t), S[e] || (T(), S[e] = !0);
            }
            function H(e) {
                return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e);
            }
            function x(e, t) {
                var n, a = l({}, e);
                for (n in t) m(t, n) && (i(e[n]) && i(t[n]) ? (a[n] = {}, l(a[n], e[n]), l(a[n], t[n])) : null != t[n] ? a[n] = t[n] : delete a[n]);
                for (n in e) m(e, n) && !m(t, n) && i(e[n]) && (a[n] = l({}, a[n]));
                return a;
            }
            function O(e) {
                null != e && this.set(e);
            }
            r.suppressDeprecationWarnings = !1, r.deprecationHandler = null, b = Object.keys ? Object.keys : function(e) {
                var t, n = [];
                for (t in e) m(e, t) && n.push(t);
                return n;
            };
            var P = {};
            function A(e, t) {
                var n = e.toLowerCase();
                P[n] = P[n + "s"] = P[t] = e;
            }
            function W(e) {
                return "string" == typeof e ? P[e] || P[e.toLowerCase()] : void 0;
            }
            function E(e) {
                var t, n, a = {};
                for (n in e) m(e, n) && (t = W(n)) && (a[t] = e[n]);
                return a;
            }
            var F = {};
            function z(e, t) {
                F[e] = t;
            }
            function C(e, t, n) {
                var a = "" + Math.abs(e), r = t - a.length;
                return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + a;
            }
            var R = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, J = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, N = {}, I = {};
            function U(e, t, n, a) {
                var r = a;
                "string" == typeof a && (r = function() {
                    return this[a]();
                }), e && (I[e] = r), t && (I[t[0]] = function() {
                    return C(r.apply(this, arguments), t[1], t[2]);
                }), n && (I[n] = function() {
                    return this.localeData().ordinal(r.apply(this, arguments), e);
                });
            }
            function G(e, t) {
                return e.isValid() ? (t = B(t, e.localeData()), N[t] = N[t] || function(e) {
                    var t, n, a, r = e.match(R);
                    for (t = 0, n = r.length; t < n; t++) I[r[t]] ? r[t] = I[r[t]] : r[t] = (a = r[t]).match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "");
                    return function(t) {
                        var a, s = "";
                        for (a = 0; a < n; a++) s += H(r[a]) ? r[a].call(t, e) : r[a];
                        return s;
                    };
                }(t), N[t](e)) : e.localeData().invalidDate();
            }
            function B(e, t) {
                var n = 5;
                function a(e) {
                    return t.longDateFormat(e) || e;
                }
                for (J.lastIndex = 0; n >= 0 && J.test(e); ) e = e.replace(J, a), J.lastIndex = 0, 
                n -= 1;
                return e;
            }
            var V = /\d/, q = /\d\d/, $ = /\d{3}/, K = /\d{4}/, Z = /[+-]?\d{6}/, Q = /\d\d?/, X = /\d\d\d\d?/, ee = /\d\d\d\d\d\d?/, te = /\d{1,3}/, ne = /\d{1,4}/, ae = /[+-]?\d{1,6}/, re = /\d+/, se = /[+-]?\d+/, ie = /Z|[+-]\d\d:?\d\d/gi, oe = /Z|[+-]\d\d(?::?\d\d)?/gi, de = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, _e = {};
            function ue(e, t, n) {
                _e[e] = H(t) ? t : function(e, a) {
                    return e && n ? n : t;
                };
            }
            function me(e, t) {
                return m(_e, e) ? _e[e](t._strict, t._locale) : new RegExp(le(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function(e, t, n, a, r) {
                    return t || n || a || r;
                }))));
            }
            function le(e) {
                return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
            }
            var ce = {};
            function he(e, t) {
                var n, a = t;
                for ("string" == typeof e && (e = [ e ]), d(t) && (a = function(e, n) {
                    n[t] = D(e);
                }), n = 0; n < e.length; n++) ce[e[n]] = a;
            }
            function fe(e, t) {
                he(e, (function(e, n, a, r) {
                    a._w = a._w || {}, t(e, a._w, a, r);
                }));
            }
            function Me(e, t, n) {
                null != t && m(ce, e) && ce[e](t, n._a, n, e);
            }
            function we(e) {
                return be(e) ? 366 : 365;
            }
            function be(e) {
                return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
            }
            U("Y", 0, 0, (function() {
                var e = this.year();
                return e <= 9999 ? "" + e : "+" + e;
            })), U(0, [ "YY", 2 ], 0, (function() {
                return this.year() % 100;
            })), U(0, [ "YYYY", 4 ], 0, "year"), U(0, [ "YYYYY", 5 ], 0, "year"), U(0, [ "YYYYYY", 6, !0 ], 0, "year"), 
            A("year", "y"), z("year", 1), ue("Y", se), ue("YY", Q, q), ue("YYYY", ne, K), ue("YYYYY", ae, Z), 
            ue("YYYYYY", ae, Z), he([ "YYYYY", "YYYYYY" ], 0), he("YYYY", (function(e, t) {
                t[0] = 2 === e.length ? r.parseTwoDigitYear(e) : D(e);
            })), he("YY", (function(e, t) {
                t[0] = r.parseTwoDigitYear(e);
            })), he("Y", (function(e, t) {
                t[0] = parseInt(e, 10);
            })), r.parseTwoDigitYear = function(e) {
                return D(e) + (D(e) > 68 ? 1900 : 2e3);
            };
            var Se, je = He("FullYear", !0);
            function He(e, t) {
                return function(n) {
                    return null != n ? (Oe(this, e, n), r.updateOffset(this, t), this) : xe(this, e);
                };
            }
            function xe(e, t) {
                return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
            }
            function Oe(e, t, n) {
                e.isValid() && !isNaN(n) && ("FullYear" === t && be(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Pe(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
            }
            function Pe(e, t) {
                if (isNaN(e) || isNaN(t)) return NaN;
                var a = (t % 12 + 12) % 12;
                return e += (t - a) / 12, 1 === a ? be(e) ? 29 : 28 : 31 - a % 7 % 2;
            }
            Se = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
                var t;
                for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
                return -1;
            }, U("M", [ "MM", 2 ], "Mo", (function() {
                return this.month() + 1;
            })), U("MMM", 0, 0, (function(e) {
                return this.localeData().monthsShort(this, e);
            })), U("MMMM", 0, 0, (function(e) {
                return this.localeData().months(this, e);
            })), A("month", "M"), z("month", 8), ue("M", Q), ue("MM", Q, q), ue("MMM", (function(e, t) {
                return t.monthsShortRegex(e);
            })), ue("MMMM", (function(e, t) {
                return t.monthsRegex(e);
            })), he([ "M", "MM" ], (function(e, t) {
                t[1] = D(e) - 1;
            })), he([ "MMM", "MMMM" ], (function(e, t, n, a) {
                var r = n._locale.monthsParse(e, a, n._strict);
                null != r ? t[1] = r : h(n).invalidMonth = e;
            }));
            var Ae = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, We = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), Ee = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
            function Fe(e, t) {
                var n;
                if (!e.isValid()) return e;
                if ("string" == typeof t) if (/^\d+$/.test(t)) t = D(t); else if (!d(t = e.localeData().monthsParse(t))) return e;
                return n = Math.min(e.date(), Pe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), 
                e;
            }
            function ze(e) {
                return null != e ? (Fe(this, e), r.updateOffset(this, !0), this) : xe(this, "Month");
            }
            var Ce = de, Re = de;
            function Je() {
                function e(e, t) {
                    return t.length - e.length;
                }
                var t, n, a = [], r = [], s = [];
                for (t = 0; t < 12; t++) n = c([ 2e3, t ]), a.push(this.monthsShort(n, "")), r.push(this.months(n, "")), 
                s.push(this.months(n, "")), s.push(this.monthsShort(n, ""));
                for (a.sort(e), r.sort(e), s.sort(e), t = 0; t < 12; t++) a[t] = le(a[t]), r[t] = le(r[t]);
                for (t = 0; t < 24; t++) s[t] = le(s[t]);
                this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, 
                this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i");
            }
            function Ne(e) {
                var t;
                if (e < 100 && e >= 0) {
                    var n = Array.prototype.slice.call(arguments);
                    n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e);
                } else t = new Date(Date.UTC.apply(null, arguments));
                return t;
            }
            function Ie(e, t, n) {
                var a = 7 + t - n;
                return -(7 + Ne(e, 0, a).getUTCDay() - t) % 7 + a - 1;
            }
            function Ue(e, t, n, a, r) {
                var s, i, o = 1 + 7 * (t - 1) + (7 + n - a) % 7 + Ie(e, a, r);
                return o <= 0 ? i = we(s = e - 1) + o : o > we(e) ? (s = e + 1, i = o - we(e)) : (s = e, 
                i = o), {
                    year: s,
                    dayOfYear: i
                };
            }
            function Ge(e, t, n) {
                var a, r, s = Ie(e.year(), t, n), i = Math.floor((e.dayOfYear() - s - 1) / 7) + 1;
                return i < 1 ? a = i + Be(r = e.year() - 1, t, n) : i > Be(e.year(), t, n) ? (a = i - Be(e.year(), t, n), 
                r = e.year() + 1) : (r = e.year(), a = i), {
                    week: a,
                    year: r
                };
            }
            function Be(e, t, n) {
                var a = Ie(e, t, n), r = Ie(e + 1, t, n);
                return (we(e) - a + r) / 7;
            }
            function Ve(e, t) {
                return e.slice(t, 7).concat(e.slice(0, t));
            }
            U("w", [ "ww", 2 ], "wo", "week"), U("W", [ "WW", 2 ], "Wo", "isoWeek"), A("week", "w"), 
            A("isoWeek", "W"), z("week", 5), z("isoWeek", 5), ue("w", Q), ue("ww", Q, q), ue("W", Q), 
            ue("WW", Q, q), fe([ "w", "ww", "W", "WW" ], (function(e, t, n, a) {
                t[a.substr(0, 1)] = D(e);
            })), U("d", 0, "do", "day"), U("dd", 0, 0, (function(e) {
                return this.localeData().weekdaysMin(this, e);
            })), U("ddd", 0, 0, (function(e) {
                return this.localeData().weekdaysShort(this, e);
            })), U("dddd", 0, 0, (function(e) {
                return this.localeData().weekdays(this, e);
            })), U("e", 0, 0, "weekday"), U("E", 0, 0, "isoWeekday"), A("day", "d"), A("weekday", "e"), 
            A("isoWeekday", "E"), z("day", 11), z("weekday", 11), z("isoWeekday", 11), ue("d", Q), 
            ue("e", Q), ue("E", Q), ue("dd", (function(e, t) {
                return t.weekdaysMinRegex(e);
            })), ue("ddd", (function(e, t) {
                return t.weekdaysShortRegex(e);
            })), ue("dddd", (function(e, t) {
                return t.weekdaysRegex(e);
            })), fe([ "dd", "ddd", "dddd" ], (function(e, t, n, a) {
                var r = n._locale.weekdaysParse(e, a, n._strict);
                null != r ? t.d = r : h(n).invalidWeekday = e;
            })), fe([ "d", "e", "E" ], (function(e, t, n, a) {
                t[a] = D(e);
            }));
            var qe = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), $e = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Ke = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Ze = de, Qe = de, Xe = de;
            function et() {
                function e(e, t) {
                    return t.length - e.length;
                }
                var t, n, a, r, s, i = [], o = [], d = [], _ = [];
                for (t = 0; t < 7; t++) n = c([ 2e3, 1 ]).day(t), a = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), 
                s = this.weekdays(n, ""), i.push(a), o.push(r), d.push(s), _.push(a), _.push(r), 
                _.push(s);
                for (i.sort(e), o.sort(e), d.sort(e), _.sort(e), t = 0; t < 7; t++) o[t] = le(o[t]), 
                d[t] = le(d[t]), _[t] = le(_[t]);
                this._weekdaysRegex = new RegExp("^(" + _.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, 
                this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), 
                this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + i.join("|") + ")", "i");
            }
            function tt() {
                return this.hours() % 12 || 12;
            }
            function nt(e, t) {
                U(e, 0, 0, (function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), t);
                }));
            }
            function at(e, t) {
                return t._meridiemParse;
            }
            U("H", [ "HH", 2 ], 0, "hour"), U("h", [ "hh", 2 ], 0, tt), U("k", [ "kk", 2 ], 0, (function() {
                return this.hours() || 24;
            })), U("hmm", 0, 0, (function() {
                return "" + tt.apply(this) + C(this.minutes(), 2);
            })), U("hmmss", 0, 0, (function() {
                return "" + tt.apply(this) + C(this.minutes(), 2) + C(this.seconds(), 2);
            })), U("Hmm", 0, 0, (function() {
                return "" + this.hours() + C(this.minutes(), 2);
            })), U("Hmmss", 0, 0, (function() {
                return "" + this.hours() + C(this.minutes(), 2) + C(this.seconds(), 2);
            })), nt("a", !0), nt("A", !1), A("hour", "h"), z("hour", 13), ue("a", at), ue("A", at), 
            ue("H", Q), ue("h", Q), ue("k", Q), ue("HH", Q, q), ue("hh", Q, q), ue("kk", Q, q), 
            ue("hmm", X), ue("hmmss", ee), ue("Hmm", X), ue("Hmmss", ee), he([ "H", "HH" ], 3), 
            he([ "k", "kk" ], (function(e, t, n) {
                var a = D(e);
                t[3] = 24 === a ? 0 : a;
            })), he([ "a", "A" ], (function(e, t, n) {
                n._isPm = n._locale.isPM(e), n._meridiem = e;
            })), he([ "h", "hh" ], (function(e, t, n) {
                t[3] = D(e), h(n).bigHour = !0;
            })), he("hmm", (function(e, t, n) {
                var a = e.length - 2;
                t[3] = D(e.substr(0, a)), t[4] = D(e.substr(a)), h(n).bigHour = !0;
            })), he("hmmss", (function(e, t, n) {
                var a = e.length - 4, r = e.length - 2;
                t[3] = D(e.substr(0, a)), t[4] = D(e.substr(a, 2)), t[5] = D(e.substr(r)), h(n).bigHour = !0;
            })), he("Hmm", (function(e, t, n) {
                var a = e.length - 2;
                t[3] = D(e.substr(0, a)), t[4] = D(e.substr(a));
            })), he("Hmmss", (function(e, t, n) {
                var a = e.length - 4, r = e.length - 2;
                t[3] = D(e.substr(0, a)), t[4] = D(e.substr(a, 2)), t[5] = D(e.substr(r));
            }));
            var rt, st = He("Hours", !0), it = {
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                longDateFormat: {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                invalidDate: "Invalid date",
                ordinal: "%d",
                dayOfMonthOrdinalParse: /\d{1,2}/,
                relativeTime: {
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
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                months: We,
                monthsShort: Ee,
                week: {
                    dow: 0,
                    doy: 6
                },
                weekdays: qe,
                weekdaysMin: Ke,
                weekdaysShort: $e,
                meridiemParse: /[ap]\.?m?\.?/i
            }, ot = {}, dt = {};
            function _t(e) {
                return e ? e.toLowerCase().replace("_", "-") : e;
            }
            function ut(t) {
                var a = null;
                if (!ot[t] && void 0 !== e && e && e.exports) try {
                    a = rt._abbr, n(507)("./" + t), mt(a);
                } catch (e) {}
                return ot[t];
            }
            function mt(e, t) {
                var n;
                return e && ((n = o(t) ? ct(e) : lt(e, t)) ? rt = n : "undefined" != typeof console && console.warn), 
                rt._abbr;
            }
            function lt(e, t) {
                if (null !== t) {
                    var n, a = it;
                    if (t.abbr = e, null != ot[e]) j("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), 
                    a = ot[e]._config; else if (null != t.parentLocale) if (null != ot[t.parentLocale]) a = ot[t.parentLocale]._config; else {
                        if (null == (n = ut(t.parentLocale))) return dt[t.parentLocale] || (dt[t.parentLocale] = []), 
                        dt[t.parentLocale].push({
                            name: e,
                            config: t
                        }), null;
                        a = n._config;
                    }
                    return ot[e] = new O(x(a, t)), dt[e] && dt[e].forEach((function(e) {
                        lt(e.name, e.config);
                    })), mt(e), ot[e];
                }
                return delete ot[e], null;
            }
            function ct(e) {
                var t;
                if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return rt;
                if (!s(e)) {
                    if (t = ut(e)) return t;
                    e = [ e ];
                }
                return function(e) {
                    for (var t, n, a, r, s = 0; s < e.length; ) {
                        for (t = (r = _t(e[s]).split("-")).length, n = (n = _t(e[s + 1])) ? n.split("-") : null; t > 0; ) {
                            if (a = ut(r.slice(0, t).join("-"))) return a;
                            if (n && n.length >= t && v(r, n, !0) >= t - 1) break;
                            t--;
                        }
                        s++;
                    }
                    return rt;
                }(e);
            }
            function ht(e) {
                var t, n = e._a;
                return n && -2 === h(e).overflow && (t = n[1] < 0 || n[1] > 11 ? 1 : n[2] < 1 || n[2] > Pe(n[0], n[1]) ? 2 : n[3] < 0 || n[3] > 24 || 24 === n[3] && (0 !== n[4] || 0 !== n[5] || 0 !== n[6]) ? 3 : n[4] < 0 || n[4] > 59 ? 4 : n[5] < 0 || n[5] > 59 ? 5 : n[6] < 0 || n[6] > 999 ? 6 : -1, 
                h(e)._overflowDayOfYear && (t < 0 || t > 2) && (t = 2), h(e)._overflowWeeks && -1 === t && (t = 7), 
                h(e)._overflowWeekday && -1 === t && (t = 8), h(e).overflow = t), e;
            }
            function ft(e, t, n) {
                return null != e ? e : null != t ? t : n;
            }
            function Mt(e) {
                var t, n, a, s, i, o = [];
                if (!e._d) {
                    for (a = function(e) {
                        var t = new Date(r.now());
                        return e._useUTC ? [ t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate() ] : [ t.getFullYear(), t.getMonth(), t.getDate() ];
                    }(e), e._w && null == e._a[2] && null == e._a[1] && function(e) {
                        var t, n, a, r, s, i, o, d;
                        if (null != (t = e._w).GG || null != t.W || null != t.E) s = 1, i = 4, n = ft(t.GG, e._a[0], Ge(xt(), 1, 4).year), 
                        a = ft(t.W, 1), ((r = ft(t.E, 1)) < 1 || r > 7) && (d = !0); else {
                            s = e._locale._week.dow, i = e._locale._week.doy;
                            var _ = Ge(xt(), s, i);
                            n = ft(t.gg, e._a[0], _.year), a = ft(t.w, _.week), null != t.d ? ((r = t.d) < 0 || r > 6) && (d = !0) : null != t.e ? (r = t.e + s, 
                            (t.e < 0 || t.e > 6) && (d = !0)) : r = s;
                        }
                        a < 1 || a > Be(n, s, i) ? h(e)._overflowWeeks = !0 : null != d ? h(e)._overflowWeekday = !0 : (o = Ue(n, a, r, s, i), 
                        e._a[0] = o.year, e._dayOfYear = o.dayOfYear);
                    }(e), null != e._dayOfYear && (i = ft(e._a[0], a[0]), (e._dayOfYear > we(i) || 0 === e._dayOfYear) && (h(e)._overflowDayOfYear = !0), 
                    n = Ne(i, 0, e._dayOfYear), e._a[1] = n.getUTCMonth(), e._a[2] = n.getUTCDate()), 
                    t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = o[t] = a[t];
                    for (;t < 7; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                    24 === e._a[3] && 0 === e._a[4] && 0 === e._a[5] && 0 === e._a[6] && (e._nextDay = !0, 
                    e._a[3] = 0), e._d = (e._useUTC ? Ne : function(e, t, n, a, r, s, i) {
                        var o;
                        return e < 100 && e >= 0 ? (o = new Date(e + 400, t, n, a, r, s, i), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, n, a, r, s, i), 
                        o;
                    }).apply(null, o), s = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), 
                    e._nextDay && (e._a[3] = 24), e._w && void 0 !== e._w.d && e._w.d !== s && (h(e).weekdayMismatch = !0);
                }
            }
            var yt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Lt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, pt = /Z|[+-]\d\d(?::?\d\d)?/, Yt = [ [ "YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/ ], [ "YYYY-MM-DD", /\d{4}-\d\d-\d\d/ ], [ "GGGG-[W]WW-E", /\d{4}-W\d\d-\d/ ], [ "GGGG-[W]WW", /\d{4}-W\d\d/, !1 ], [ "YYYY-DDD", /\d{4}-\d{3}/ ], [ "YYYY-MM", /\d{4}-\d\d/, !1 ], [ "YYYYYYMMDD", /[+-]\d{10}/ ], [ "YYYYMMDD", /\d{8}/ ], [ "GGGG[W]WWE", /\d{4}W\d{3}/ ], [ "GGGG[W]WW", /\d{4}W\d{2}/, !1 ], [ "YYYYDDD", /\d{7}/ ] ], kt = [ [ "HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/ ], [ "HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/ ], [ "HH:mm:ss", /\d\d:\d\d:\d\d/ ], [ "HH:mm", /\d\d:\d\d/ ], [ "HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/ ], [ "HHmmss,SSSS", /\d\d\d\d\d\d,\d+/ ], [ "HHmmss", /\d\d\d\d\d\d/ ], [ "HHmm", /\d\d\d\d/ ], [ "HH", /\d\d/ ] ], gt = /^\/?Date\((\-?\d+)/i;
            function Dt(e) {
                var t, n, a, r, s, i, o = e._i, d = yt.exec(o) || Lt.exec(o);
                if (d) {
                    for (h(e).iso = !0, t = 0, n = Yt.length; t < n; t++) if (Yt[t][1].exec(d[1])) {
                        r = Yt[t][0], a = !1 !== Yt[t][2];
                        break;
                    }
                    if (null == r) return void (e._isValid = !1);
                    if (d[3]) {
                        for (t = 0, n = kt.length; t < n; t++) if (kt[t][1].exec(d[3])) {
                            s = (d[2] || " ") + kt[t][0];
                            break;
                        }
                        if (null == s) return void (e._isValid = !1);
                    }
                    if (!a && null != s) return void (e._isValid = !1);
                    if (d[4]) {
                        if (!pt.exec(d[4])) return void (e._isValid = !1);
                        i = "Z";
                    }
                    e._f = r + (s || "") + (i || ""), St(e);
                } else e._isValid = !1;
            }
            var vt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
            function Tt(e) {
                var t = parseInt(e, 10);
                return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
            }
            var wt = {
                UT: 0,
                GMT: 0,
                EDT: -240,
                EST: -300,
                CDT: -300,
                CST: -360,
                MDT: -360,
                MST: -420,
                PDT: -420,
                PST: -480
            };
            function bt(e) {
                var t, n, a, r, s, i, o, d = vt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
                if (d) {
                    var _ = (t = d[4], n = d[3], a = d[2], r = d[5], s = d[6], i = d[7], o = [ Tt(t), Ee.indexOf(n), parseInt(a, 10), parseInt(r, 10), parseInt(s, 10) ], 
                    i && o.push(parseInt(i, 10)), o);
                    if (!function(e, t, n) {
                        return !e || $e.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() || (h(n).weekdayMismatch = !0, 
                        n._isValid = !1, !1);
                    }(d[1], _, e)) return;
                    e._a = _, e._tzm = function(e, t, n) {
                        if (e) return wt[e];
                        if (t) return 0;
                        var a = parseInt(n, 10), r = a % 100;
                        return (a - r) / 100 * 60 + r;
                    }(d[8], d[9], d[10]), e._d = Ne.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), 
                    h(e).rfc2822 = !0;
                } else e._isValid = !1;
            }
            function St(e) {
                if (e._f !== r.ISO_8601) if (e._f !== r.RFC_2822) {
                    e._a = [], h(e).empty = !0;
                    var t, n, a, s, i, o = "" + e._i, d = o.length, _ = 0;
                    for (a = B(e._f, e._locale).match(R) || [], t = 0; t < a.length; t++) s = a[t], 
                    (n = (o.match(me(s, e)) || [])[0]) && ((i = o.substr(0, o.indexOf(n))).length > 0 && h(e).unusedInput.push(i), 
                    o = o.slice(o.indexOf(n) + n.length), _ += n.length), I[s] ? (n ? h(e).empty = !1 : h(e).unusedTokens.push(s), 
                    Me(s, n, e)) : e._strict && !n && h(e).unusedTokens.push(s);
                    h(e).charsLeftOver = d - _, o.length > 0 && h(e).unusedInput.push(o), e._a[3] <= 12 && !0 === h(e).bigHour && e._a[3] > 0 && (h(e).bigHour = void 0), 
                    h(e).parsedDateParts = e._a.slice(0), h(e).meridiem = e._meridiem, e._a[3] = function(e, t, n) {
                        var a;
                        return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((a = e.isPM(n)) && t < 12 && (t += 12), 
                        a || 12 !== t || (t = 0), t) : t;
                    }(e._locale, e._a[3], e._meridiem), Mt(e), ht(e);
                } else bt(e); else Dt(e);
            }
            function jt(e) {
                var t = e._i, n = e._f;
                return e._locale = e._locale || ct(e._l), null === t || void 0 === n && "" === t ? M({
                    nullInput: !0
                }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), k(t) ? new Y(ht(t)) : (_(t) ? e._d = t : s(n) ? function(e) {
                    var t, n, a, r, s;
                    if (0 === e._f.length) return h(e).invalidFormat = !0, void (e._d = new Date(NaN));
                    for (r = 0; r < e._f.length; r++) s = 0, t = L({}, e), null != e._useUTC && (t._useUTC = e._useUTC), 
                    t._f = e._f[r], St(t), f(t) && (s += h(t).charsLeftOver, s += 10 * h(t).unusedTokens.length, 
                    h(t).score = s, (null == a || s < a) && (a = s, n = t));
                    l(e, n || t);
                }(e) : n ? St(e) : function(e) {
                    var t = e._i;
                    o(t) ? e._d = new Date(r.now()) : _(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function(e) {
                        var t = gt.exec(e._i);
                        null === t ? (Dt(e), !1 === e._isValid && (delete e._isValid, bt(e), !1 === e._isValid && (delete e._isValid, 
                        r.createFromInputFallback(e)))) : e._d = new Date(+t[1]);
                    }(e) : s(t) ? (e._a = u(t.slice(0), (function(e) {
                        return parseInt(e, 10);
                    })), Mt(e)) : i(t) ? function(e) {
                        if (!e._d) {
                            var t = E(e._i);
                            e._a = u([ t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond ], (function(e) {
                                return e && parseInt(e, 10);
                            })), Mt(e);
                        }
                    }(e) : d(t) ? e._d = new Date(t) : r.createFromInputFallback(e);
                }(e), f(e) || (e._d = null), e));
            }
            function Ht(e, t, n, a, r) {
                var o, d = {};
                return !0 !== n && !1 !== n || (a = n, n = void 0), (i(e) && function(e) {
                    if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
                    var t;
                    for (t in e) if (e.hasOwnProperty(t)) return !1;
                    return !0;
                }(e) || s(e) && 0 === e.length) && (e = void 0), d._isAMomentObject = !0, d._useUTC = d._isUTC = r, 
                d._l = n, d._i = e, d._f = t, d._strict = a, (o = new Y(ht(jt(d))))._nextDay && (o.add(1, "d"), 
                o._nextDay = void 0), o;
            }
            function xt(e, t, n, a) {
                return Ht(e, t, n, a, !1);
            }
            r.createFromInputFallback = w("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function(e) {
                e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
            })), r.ISO_8601 = function() {}, r.RFC_2822 = function() {};
            var Ot = w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
                var e = xt.apply(null, arguments);
                return this.isValid() && e.isValid() ? e < this ? this : e : M();
            })), Pt = w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
                var e = xt.apply(null, arguments);
                return this.isValid() && e.isValid() ? e > this ? this : e : M();
            }));
            function At(e, t) {
                var n, a;
                if (1 === t.length && s(t[0]) && (t = t[0]), !t.length) return xt();
                for (n = t[0], a = 1; a < t.length; ++a) t[a].isValid() && !t[a][e](n) || (n = t[a]);
                return n;
            }
            var Wt = [ "year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond" ];
            function Et(e) {
                var t = E(e), n = t.year || 0, a = t.quarter || 0, r = t.month || 0, s = t.week || t.isoWeek || 0, i = t.day || 0, o = t.hour || 0, d = t.minute || 0, _ = t.second || 0, u = t.millisecond || 0;
                this._isValid = function(e) {
                    for (var t in e) if (-1 === Se.call(Wt, t) || null != e[t] && isNaN(e[t])) return !1;
                    for (var n = !1, a = 0; a < Wt.length; ++a) if (e[Wt[a]]) {
                        if (n) return !1;
                        parseFloat(e[Wt[a]]) !== D(e[Wt[a]]) && (n = !0);
                    }
                    return !0;
                }(t), this._milliseconds = +u + 1e3 * _ + 6e4 * d + 1e3 * o * 60 * 60, this._days = +i + 7 * s, 
                this._months = +r + 3 * a + 12 * n, this._data = {}, this._locale = ct(), this._bubble();
            }
            function Ft(e) {
                return e instanceof Et;
            }
            function zt(e) {
                return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
            }
            function Ct(e, t) {
                U(e, 0, 0, (function() {
                    var e = this.utcOffset(), n = "+";
                    return e < 0 && (e = -e, n = "-"), n + C(~~(e / 60), 2) + t + C(~~e % 60, 2);
                }));
            }
            Ct("Z", ":"), Ct("ZZ", ""), ue("Z", oe), ue("ZZ", oe), he([ "Z", "ZZ" ], (function(e, t, n) {
                n._useUTC = !0, n._tzm = Jt(oe, e);
            }));
            var Rt = /([\+\-]|\d\d)/gi;
            function Jt(e, t) {
                var n = (t || "").match(e);
                if (null === n) return null;
                var a = ((n[n.length - 1] || []) + "").match(Rt) || [ "-", 0, 0 ], r = 60 * a[1] + D(a[2]);
                return 0 === r ? 0 : "+" === a[0] ? r : -r;
            }
            function Nt(e, t) {
                var n, a;
                return t._isUTC ? (n = t.clone(), a = (k(e) || _(e) ? e.valueOf() : xt(e).valueOf()) - n.valueOf(), 
                n._d.setTime(n._d.valueOf() + a), r.updateOffset(n, !1), n) : xt(e).local();
            }
            function It(e) {
                return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
            }
            function Ut() {
                return !!this.isValid() && this._isUTC && 0 === this._offset;
            }
            r.updateOffset = function() {};
            var Gt = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/, Bt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
            function Vt(e, t) {
                var n, a, r, s, i, o, _ = e, u = null;
                return Ft(e) ? _ = {
                    ms: e._milliseconds,
                    d: e._days,
                    M: e._months
                } : d(e) ? (_ = {}, t ? _[t] = e : _.milliseconds = e) : (u = Gt.exec(e)) ? (n = "-" === u[1] ? -1 : 1, 
                _ = {
                    y: 0,
                    d: D(u[2]) * n,
                    h: D(u[3]) * n,
                    m: D(u[4]) * n,
                    s: D(u[5]) * n,
                    ms: D(zt(1e3 * u[6])) * n
                }) : (u = Bt.exec(e)) ? (n = "-" === u[1] ? -1 : 1, _ = {
                    y: qt(u[2], n),
                    M: qt(u[3], n),
                    w: qt(u[4], n),
                    d: qt(u[5], n),
                    h: qt(u[6], n),
                    m: qt(u[7], n),
                    s: qt(u[8], n)
                }) : null == _ ? _ = {} : "object" == typeof _ && ("from" in _ || "to" in _) && (s = xt(_.from), 
                i = xt(_.to), r = s.isValid() && i.isValid() ? (i = Nt(i, s), s.isBefore(i) ? o = $t(s, i) : ((o = $t(i, s)).milliseconds = -o.milliseconds, 
                o.months = -o.months), o) : {
                    milliseconds: 0,
                    months: 0
                }, (_ = {}).ms = r.milliseconds, _.M = r.months), a = new Et(_), Ft(e) && m(e, "_locale") && (a._locale = e._locale), 
                a;
            }
            function qt(e, t) {
                var n = e && parseFloat(e.replace(",", "."));
                return (isNaN(n) ? 0 : n) * t;
            }
            function $t(e, t) {
                var n = {};
                return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, 
                n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
            }
            function Kt(e, t) {
                return function(n, a) {
                    var r;
                    return null === a || isNaN(+a) || (j(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), 
                    r = n, n = a, a = r), Zt(this, Vt(n = "string" == typeof n ? +n : n, a), e), this;
                };
            }
            function Zt(e, t, n, a) {
                var s = t._milliseconds, i = zt(t._days), o = zt(t._months);
                e.isValid() && (a = null == a || a, o && Fe(e, xe(e, "Month") + o * n), i && Oe(e, "Date", xe(e, "Date") + i * n), 
                s && e._d.setTime(e._d.valueOf() + s * n), a && r.updateOffset(e, i || o));
            }
            Vt.fn = Et.prototype, Vt.invalid = function() {
                return Vt(NaN);
            };
            var Qt = Kt(1, "add"), Xt = Kt(-1, "subtract");
            function en(e, t) {
                var n = 12 * (t.year() - e.year()) + (t.month() - e.month()), a = e.clone().add(n, "months");
                return -(n + (t - a < 0 ? (t - a) / (a - e.clone().add(n - 1, "months")) : (t - a) / (e.clone().add(n + 1, "months") - a))) || 0;
            }
            function tn(e) {
                var t;
                return void 0 === e ? this._locale._abbr : (null != (t = ct(e)) && (this._locale = t), 
                this);
            }
            r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var nn = w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function(e) {
                return void 0 === e ? this.localeData() : this.locale(e);
            }));
            function an() {
                return this._locale;
            }
            var sn = 6e4, on = 60 * sn, dn = 3506328 * on;
            function _n(e, t) {
                return (e % t + t) % t;
            }
            function un(e, t, n) {
                return e < 100 && e >= 0 ? new Date(e + 400, t, n) - dn : new Date(e, t, n).valueOf();
            }
            function mn(e, t, n) {
                return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - dn : Date.UTC(e, t, n);
            }
            function ln(e, t) {
                U(0, [ e, e.length ], 0, t);
            }
            function cn(e, t, n, a, r) {
                var s;
                return null == e ? Ge(this, a, r).year : (t > (s = Be(e, a, r)) && (t = s), function(e, t, n, a, r) {
                    var s = Ue(e, t, n, a, r), i = Ne(s.year, 0, s.dayOfYear);
                    return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), 
                    this;
                }.call(this, e, t, n, a, r));
            }
            U(0, [ "gg", 2 ], 0, (function() {
                return this.weekYear() % 100;
            })), U(0, [ "GG", 2 ], 0, (function() {
                return this.isoWeekYear() % 100;
            })), ln("gggg", "weekYear"), ln("ggggg", "weekYear"), ln("GGGG", "isoWeekYear"), 
            ln("GGGGG", "isoWeekYear"), A("weekYear", "gg"), A("isoWeekYear", "GG"), z("weekYear", 1), 
            z("isoWeekYear", 1), ue("G", se), ue("g", se), ue("GG", Q, q), ue("gg", Q, q), ue("GGGG", ne, K), 
            ue("gggg", ne, K), ue("GGGGG", ae, Z), ue("ggggg", ae, Z), fe([ "gggg", "ggggg", "GGGG", "GGGGG" ], (function(e, t, n, a) {
                t[a.substr(0, 2)] = D(e);
            })), fe([ "gg", "GG" ], (function(e, t, n, a) {
                t[a] = r.parseTwoDigitYear(e);
            })), U("Q", 0, "Qo", "quarter"), A("quarter", "Q"), z("quarter", 7), ue("Q", V), 
            he("Q", (function(e, t) {
                t[1] = 3 * (D(e) - 1);
            })), U("D", [ "DD", 2 ], "Do", "date"), A("date", "D"), z("date", 9), ue("D", Q), 
            ue("DD", Q, q), ue("Do", (function(e, t) {
                return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
            })), he([ "D", "DD" ], 2), he("Do", (function(e, t) {
                t[2] = D(e.match(Q)[0]);
            }));
            var hn = He("Date", !0);
            U("DDD", [ "DDDD", 3 ], "DDDo", "dayOfYear"), A("dayOfYear", "DDD"), z("dayOfYear", 4), 
            ue("DDD", te), ue("DDDD", $), he([ "DDD", "DDDD" ], (function(e, t, n) {
                n._dayOfYear = D(e);
            })), U("m", [ "mm", 2 ], 0, "minute"), A("minute", "m"), z("minute", 14), ue("m", Q), 
            ue("mm", Q, q), he([ "m", "mm" ], 4);
            var fn = He("Minutes", !1);
            U("s", [ "ss", 2 ], 0, "second"), A("second", "s"), z("second", 15), ue("s", Q), 
            ue("ss", Q, q), he([ "s", "ss" ], 5);
            var Mn, yn = He("Seconds", !1);
            for (U("S", 0, 0, (function() {
                return ~~(this.millisecond() / 100);
            })), U(0, [ "SS", 2 ], 0, (function() {
                return ~~(this.millisecond() / 10);
            })), U(0, [ "SSS", 3 ], 0, "millisecond"), U(0, [ "SSSS", 4 ], 0, (function() {
                return 10 * this.millisecond();
            })), U(0, [ "SSSSS", 5 ], 0, (function() {
                return 100 * this.millisecond();
            })), U(0, [ "SSSSSS", 6 ], 0, (function() {
                return 1e3 * this.millisecond();
            })), U(0, [ "SSSSSSS", 7 ], 0, (function() {
                return 1e4 * this.millisecond();
            })), U(0, [ "SSSSSSSS", 8 ], 0, (function() {
                return 1e5 * this.millisecond();
            })), U(0, [ "SSSSSSSSS", 9 ], 0, (function() {
                return 1e6 * this.millisecond();
            })), A("millisecond", "ms"), z("millisecond", 16), ue("S", te, V), ue("SS", te, q), 
            ue("SSS", te, $), Mn = "SSSS"; Mn.length <= 9; Mn += "S") ue(Mn, re);
            function Ln(e, t) {
                t[6] = D(1e3 * ("0." + e));
            }
            for (Mn = "S"; Mn.length <= 9; Mn += "S") he(Mn, Ln);
            var pn = He("Milliseconds", !1);
            U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");
            var Yn = Y.prototype;
            function kn(e) {
                return e;
            }
            Yn.add = Qt, Yn.calendar = function(e, t) {
                var n = e || xt(), a = Nt(n, this).startOf("day"), s = r.calendarFormat(this, a) || "sameElse", i = t && (H(t[s]) ? t[s].call(this, n) : t[s]);
                return this.format(i || this.localeData().calendar(s, this, xt(n)));
            }, Yn.clone = function() {
                return new Y(this);
            }, Yn.diff = function(e, t, n) {
                var a, r, s;
                if (!this.isValid()) return NaN;
                if (!(a = Nt(e, this)).isValid()) return NaN;
                switch (r = 6e4 * (a.utcOffset() - this.utcOffset()), t = W(t)) {
                  case "year":
                    s = en(this, a) / 12;
                    break;

                  case "month":
                    s = en(this, a);
                    break;

                  case "quarter":
                    s = en(this, a) / 3;
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
                return n ? s : g(s);
            }, Yn.endOf = function(e) {
                var t;
                if (void 0 === (e = W(e)) || "millisecond" === e || !this.isValid()) return this;
                var n = this._isUTC ? mn : un;
                switch (e) {
                  case "year":
                    t = n(this.year() + 1, 0, 1) - 1;
                    break;

                  case "quarter":
                    t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                    break;

                  case "month":
                    t = n(this.year(), this.month() + 1, 1) - 1;
                    break;

                  case "week":
                    t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                    break;

                  case "isoWeek":
                    t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                    break;

                  case "day":
                  case "date":
                    t = n(this.year(), this.month(), this.date() + 1) - 1;
                    break;

                  case "hour":
                    t = this._d.valueOf(), t += on - _n(t + (this._isUTC ? 0 : this.utcOffset() * sn), on) - 1;
                    break;

                  case "minute":
                    t = this._d.valueOf(), t += sn - _n(t, sn) - 1;
                    break;

                  case "second":
                    t = this._d.valueOf(), t += 1e3 - _n(t, 1e3) - 1;
                }
                return this._d.setTime(t), r.updateOffset(this, !0), this;
            }, Yn.format = function(e) {
                e || (e = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat);
                var t = G(this, e);
                return this.localeData().postformat(t);
            }, Yn.from = function(e, t) {
                return this.isValid() && (k(e) && e.isValid() || xt(e).isValid()) ? Vt({
                    to: this,
                    from: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
            }, Yn.fromNow = function(e) {
                return this.from(xt(), e);
            }, Yn.to = function(e, t) {
                return this.isValid() && (k(e) && e.isValid() || xt(e).isValid()) ? Vt({
                    from: this,
                    to: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
            }, Yn.toNow = function(e) {
                return this.to(xt(), e);
            }, Yn.get = function(e) {
                return H(this[e = W(e)]) ? this[e]() : this;
            }, Yn.invalidAt = function() {
                return h(this).overflow;
            }, Yn.isAfter = function(e, t) {
                var n = k(e) ? e : xt(e);
                return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = W(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf());
            }, Yn.isBefore = function(e, t) {
                var n = k(e) ? e : xt(e);
                return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = W(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf());
            }, Yn.isBetween = function(e, t, n, a) {
                var r = k(e) ? e : xt(e), s = k(t) ? t : xt(t);
                return !!(this.isValid() && r.isValid() && s.isValid()) && ("(" === (a = a || "()")[0] ? this.isAfter(r, n) : !this.isBefore(r, n)) && (")" === a[1] ? this.isBefore(s, n) : !this.isAfter(s, n));
            }, Yn.isSame = function(e, t) {
                var n, a = k(e) ? e : xt(e);
                return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = W(t) || "millisecond") ? this.valueOf() === a.valueOf() : (n = a.valueOf(), 
                this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()));
            }, Yn.isSameOrAfter = function(e, t) {
                return this.isSame(e, t) || this.isAfter(e, t);
            }, Yn.isSameOrBefore = function(e, t) {
                return this.isSame(e, t) || this.isBefore(e, t);
            }, Yn.isValid = function() {
                return f(this);
            }, Yn.lang = nn, Yn.locale = tn, Yn.localeData = an, Yn.max = Pt, Yn.min = Ot, Yn.parsingFlags = function() {
                return l({}, h(this));
            }, Yn.set = function(e, t) {
                if ("object" == typeof e) for (var n = function(e) {
                    var t = [];
                    for (var n in e) t.push({
                        unit: n,
                        priority: F[n]
                    });
                    return t.sort((function(e, t) {
                        return e.priority - t.priority;
                    })), t;
                }(e = E(e)), a = 0; a < n.length; a++) this[n[a].unit](e[n[a].unit]); else if (H(this[e = W(e)])) return this[e](t);
                return this;
            }, Yn.startOf = function(e) {
                var t;
                if (void 0 === (e = W(e)) || "millisecond" === e || !this.isValid()) return this;
                var n = this._isUTC ? mn : un;
                switch (e) {
                  case "year":
                    t = n(this.year(), 0, 1);
                    break;

                  case "quarter":
                    t = n(this.year(), this.month() - this.month() % 3, 1);
                    break;

                  case "month":
                    t = n(this.year(), this.month(), 1);
                    break;

                  case "week":
                    t = n(this.year(), this.month(), this.date() - this.weekday());
                    break;

                  case "isoWeek":
                    t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                    break;

                  case "day":
                  case "date":
                    t = n(this.year(), this.month(), this.date());
                    break;

                  case "hour":
                    t = this._d.valueOf(), t -= _n(t + (this._isUTC ? 0 : this.utcOffset() * sn), on);
                    break;

                  case "minute":
                    t = this._d.valueOf(), t -= _n(t, sn);
                    break;

                  case "second":
                    t = this._d.valueOf(), t -= _n(t, 1e3);
                }
                return this._d.setTime(t), r.updateOffset(this, !0), this;
            }, Yn.subtract = Xt, Yn.toArray = function() {
                var e = this;
                return [ e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond() ];
            }, Yn.toObject = function() {
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
            }, Yn.toDate = function() {
                return new Date(this.valueOf());
            }, Yn.toISOString = function(e) {
                if (!this.isValid()) return null;
                var t = !0 !== e, n = t ? this.clone().utc() : this;
                return n.year() < 0 || n.year() > 9999 ? G(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : H(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", G(n, "Z")) : G(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
            }, Yn.inspect = function() {
                if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                var e = "moment", t = "";
                this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", 
                t = "Z");
                var n = "[" + e + '("]', a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", r = t + '[")]';
                return this.format(n + a + "-MM-DD[T]HH:mm:ss.SSS" + r);
            }, Yn.toJSON = function() {
                return this.isValid() ? this.toISOString() : null;
            }, Yn.toString = function() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
            }, Yn.unix = function() {
                return Math.floor(this.valueOf() / 1e3);
            }, Yn.valueOf = function() {
                return this._d.valueOf() - 6e4 * (this._offset || 0);
            }, Yn.creationData = function() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                };
            }, Yn.year = je, Yn.isLeapYear = function() {
                return be(this.year());
            }, Yn.weekYear = function(e) {
                return cn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
            }, Yn.isoWeekYear = function(e) {
                return cn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
            }, Yn.quarter = Yn.quarters = function(e) {
                return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3);
            }, Yn.month = ze, Yn.daysInMonth = function() {
                return Pe(this.year(), this.month());
            }, Yn.week = Yn.weeks = function(e) {
                var t = this.localeData().week(this);
                return null == e ? t : this.add(7 * (e - t), "d");
            }, Yn.isoWeek = Yn.isoWeeks = function(e) {
                var t = Ge(this, 1, 4).week;
                return null == e ? t : this.add(7 * (e - t), "d");
            }, Yn.weeksInYear = function() {
                var e = this.localeData()._week;
                return Be(this.year(), e.dow, e.doy);
            }, Yn.isoWeeksInYear = function() {
                return Be(this.year(), 1, 4);
            }, Yn.date = hn, Yn.day = Yn.days = function(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != e ? (e = function(e, t) {
                    return "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10);
                }(e, this.localeData()), this.add(e - t, "d")) : t;
            }, Yn.weekday = function(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == e ? t : this.add(e - t, "d");
            }, Yn.isoWeekday = function(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                if (null != e) {
                    var t = function(e, t) {
                        return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
                    }(e, this.localeData());
                    return this.day(this.day() % 7 ? t : t - 7);
                }
                return this.day() || 7;
            }, Yn.dayOfYear = function(e) {
                var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == e ? t : this.add(e - t, "d");
            }, Yn.hour = Yn.hours = st, Yn.minute = Yn.minutes = fn, Yn.second = Yn.seconds = yn, 
            Yn.millisecond = Yn.milliseconds = pn, Yn.utcOffset = function(e, t, n) {
                var a, s = this._offset || 0;
                if (!this.isValid()) return null != e ? this : NaN;
                if (null != e) {
                    if ("string" == typeof e) {
                        if (null === (e = Jt(oe, e))) return this;
                    } else Math.abs(e) < 16 && !n && (e *= 60);
                    return !this._isUTC && t && (a = It(this)), this._offset = e, this._isUTC = !0, 
                    null != a && this.add(a, "m"), s !== e && (!t || this._changeInProgress ? Zt(this, Vt(e - s, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, 
                    r.updateOffset(this, !0), this._changeInProgress = null)), this;
                }
                return this._isUTC ? s : It(this);
            }, Yn.utc = function(e) {
                return this.utcOffset(0, e);
            }, Yn.local = function(e) {
                return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(It(this), "m")), 
                this;
            }, Yn.parseZone = function() {
                if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) {
                    var e = Jt(ie, this._i);
                    null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
                }
                return this;
            }, Yn.hasAlignedHourOffset = function(e) {
                return !!this.isValid() && (e = e ? xt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0);
            }, Yn.isDST = function() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
            }, Yn.isLocal = function() {
                return !!this.isValid() && !this._isUTC;
            }, Yn.isUtcOffset = function() {
                return !!this.isValid() && this._isUTC;
            }, Yn.isUtc = Ut, Yn.isUTC = Ut, Yn.zoneAbbr = function() {
                return this._isUTC ? "UTC" : "";
            }, Yn.zoneName = function() {
                return this._isUTC ? "Coordinated Universal Time" : "";
            }, Yn.dates = w("dates accessor is deprecated. Use date instead.", hn), Yn.months = w("months accessor is deprecated. Use month instead", ze), 
            Yn.years = w("years accessor is deprecated. Use year instead", je), Yn.zone = w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", (function(e, t) {
                return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
            })), Yn.isDSTShifted = w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", (function() {
                if (!o(this._isDSTShifted)) return this._isDSTShifted;
                var e = {};
                if (L(e, this), (e = jt(e))._a) {
                    var t = e._isUTC ? c(e._a) : xt(e._a);
                    this._isDSTShifted = this.isValid() && v(e._a, t.toArray()) > 0;
                } else this._isDSTShifted = !1;
                return this._isDSTShifted;
            }));
            var gn = O.prototype;
            function Dn(e, t, n, a) {
                var r = ct(), s = c().set(a, t);
                return r[n](s, e);
            }
            function vn(e, t, n) {
                if (d(e) && (t = e, e = void 0), e = e || "", null != t) return Dn(e, t, n, "month");
                var a, r = [];
                for (a = 0; a < 12; a++) r[a] = Dn(e, a, n, "month");
                return r;
            }
            function Tn(e, t, n, a) {
                "boolean" == typeof e ? (d(t) && (n = t, t = void 0), t = t || "") : (n = t = e, 
                e = !1, d(t) && (n = t, t = void 0), t = t || "");
                var r, s = ct(), i = e ? s._week.dow : 0;
                if (null != n) return Dn(t, (n + i) % 7, a, "day");
                var o = [];
                for (r = 0; r < 7; r++) o[r] = Dn(t, (r + i) % 7, a, "day");
                return o;
            }
            gn.calendar = function(e, t, n) {
                var a = this._calendar[e] || this._calendar.sameElse;
                return H(a) ? a.call(t, n) : a;
            }, gn.longDateFormat = function(e) {
                var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
                return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, (function(e) {
                    return e.slice(1);
                })), this._longDateFormat[e]);
            }, gn.invalidDate = function() {
                return this._invalidDate;
            }, gn.ordinal = function(e) {
                return this._ordinal.replace("%d", e);
            }, gn.preparse = kn, gn.postformat = kn, gn.relativeTime = function(e, t, n, a) {
                var r = this._relativeTime[n];
                return H(r) ? r(e, t, n, a) : r.replace(/%d/i, e);
            }, gn.pastFuture = function(e, t) {
                var n = this._relativeTime[e > 0 ? "future" : "past"];
                return H(n) ? n(t) : n.replace(/%s/i, t);
            }, gn.set = function(e) {
                var t, n;
                for (n in e) H(t = e[n]) ? this[n] = t : this["_" + n] = t;
                this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
            }, gn.months = function(e, t) {
                return e ? s(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Ae).test(t) ? "format" : "standalone"][e.month()] : s(this._months) ? this._months : this._months.standalone;
            }, gn.monthsShort = function(e, t) {
                return e ? s(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ae.test(t) ? "format" : "standalone"][e.month()] : s(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
            }, gn.monthsParse = function(e, t, n) {
                var a, r, s;
                if (this._monthsParseExact) return function(e, t, n) {
                    var a, r, s, i = e.toLocaleLowerCase();
                    if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], 
                    this._shortMonthsParse = [], a = 0; a < 12; ++a) s = c([ 2e3, a ]), this._shortMonthsParse[a] = this.monthsShort(s, "").toLocaleLowerCase(), 
                    this._longMonthsParse[a] = this.months(s, "").toLocaleLowerCase();
                    return n ? "MMM" === t ? -1 !== (r = Se.call(this._shortMonthsParse, i)) ? r : null : -1 !== (r = Se.call(this._longMonthsParse, i)) ? r : null : "MMM" === t ? -1 !== (r = Se.call(this._shortMonthsParse, i)) || -1 !== (r = Se.call(this._longMonthsParse, i)) ? r : null : -1 !== (r = Se.call(this._longMonthsParse, i)) || -1 !== (r = Se.call(this._shortMonthsParse, i)) ? r : null;
                }.call(this, e, t, n);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), 
                a = 0; a < 12; a++) {
                    if (r = c([ 2e3, a ]), n && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), 
                    this._shortMonthsParse[a] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), 
                    n || this._monthsParse[a] || (s = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), 
                    this._monthsParse[a] = new RegExp(s.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[a].test(e)) return a;
                    if (n && "MMM" === t && this._shortMonthsParse[a].test(e)) return a;
                    if (!n && this._monthsParse[a].test(e)) return a;
                }
            }, gn.monthsRegex = function(e) {
                return this._monthsParseExact ? (m(this, "_monthsRegex") || Je.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (m(this, "_monthsRegex") || (this._monthsRegex = Re), 
                this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
            }, gn.monthsShortRegex = function(e) {
                return this._monthsParseExact ? (m(this, "_monthsRegex") || Je.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (m(this, "_monthsShortRegex") || (this._monthsShortRegex = Ce), 
                this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
            }, gn.week = function(e) {
                return Ge(e, this._week.dow, this._week.doy).week;
            }, gn.firstDayOfYear = function() {
                return this._week.doy;
            }, gn.firstDayOfWeek = function() {
                return this._week.dow;
            }, gn.weekdays = function(e, t) {
                var n = s(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
                return !0 === e ? Ve(n, this._week.dow) : e ? n[e.day()] : n;
            }, gn.weekdaysMin = function(e) {
                return !0 === e ? Ve(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
            }, gn.weekdaysShort = function(e) {
                return !0 === e ? Ve(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
            }, gn.weekdaysParse = function(e, t, n) {
                var a, r, s;
                if (this._weekdaysParseExact) return function(e, t, n) {
                    var a, r, s, i = e.toLocaleLowerCase();
                    if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], 
                    this._minWeekdaysParse = [], a = 0; a < 7; ++a) s = c([ 2e3, 1 ]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(s, "").toLocaleLowerCase(), 
                    this._shortWeekdaysParse[a] = this.weekdaysShort(s, "").toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(s, "").toLocaleLowerCase();
                    return n ? "dddd" === t ? -1 !== (r = Se.call(this._weekdaysParse, i)) ? r : null : "ddd" === t ? -1 !== (r = Se.call(this._shortWeekdaysParse, i)) ? r : null : -1 !== (r = Se.call(this._minWeekdaysParse, i)) ? r : null : "dddd" === t ? -1 !== (r = Se.call(this._weekdaysParse, i)) || -1 !== (r = Se.call(this._shortWeekdaysParse, i)) || -1 !== (r = Se.call(this._minWeekdaysParse, i)) ? r : null : "ddd" === t ? -1 !== (r = Se.call(this._shortWeekdaysParse, i)) || -1 !== (r = Se.call(this._weekdaysParse, i)) || -1 !== (r = Se.call(this._minWeekdaysParse, i)) ? r : null : -1 !== (r = Se.call(this._minWeekdaysParse, i)) || -1 !== (r = Se.call(this._weekdaysParse, i)) || -1 !== (r = Se.call(this._shortWeekdaysParse, i)) ? r : null;
                }.call(this, e, t, n);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], 
                this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), a = 0; a < 7; a++) {
                    if (r = c([ 2e3, 1 ]).day(a), n && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$", "i"), 
                    this._shortWeekdaysParse[a] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$", "i"), 
                    this._minWeekdaysParse[a] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$", "i")), 
                    this._weekdaysParse[a] || (s = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), 
                    this._weekdaysParse[a] = new RegExp(s.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[a].test(e)) return a;
                    if (n && "ddd" === t && this._shortWeekdaysParse[a].test(e)) return a;
                    if (n && "dd" === t && this._minWeekdaysParse[a].test(e)) return a;
                    if (!n && this._weekdaysParse[a].test(e)) return a;
                }
            }, gn.weekdaysRegex = function(e) {
                return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || et.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (m(this, "_weekdaysRegex") || (this._weekdaysRegex = Ze), 
                this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
            }, gn.weekdaysShortRegex = function(e) {
                return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || et.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (m(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Qe), 
                this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
            }, gn.weekdaysMinRegex = function(e) {
                return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || et.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (m(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Xe), 
                this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
            }, gn.isPM = function(e) {
                return "p" === (e + "").toLowerCase().charAt(0);
            }, gn.meridiem = function(e, t, n) {
                return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
            }, mt("en", {
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 === D(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
                }
            }), r.lang = w("moment.lang is deprecated. Use moment.locale instead.", mt), r.langData = w("moment.langData is deprecated. Use moment.localeData instead.", ct);
            var wn = Math.abs;
            function bn(e, t, n, a) {
                var r = Vt(t, n);
                return e._milliseconds += a * r._milliseconds, e._days += a * r._days, e._months += a * r._months, 
                e._bubble();
            }
            function Sn(e) {
                return e < 0 ? Math.floor(e) : Math.ceil(e);
            }
            function jn(e) {
                return 4800 * e / 146097;
            }
            function Hn(e) {
                return 146097 * e / 4800;
            }
            function xn(e) {
                return function() {
                    return this.as(e);
                };
            }
            var On = xn("ms"), Pn = xn("s"), An = xn("m"), Wn = xn("h"), En = xn("d"), Fn = xn("w"), zn = xn("M"), Cn = xn("Q"), Rn = xn("y");
            function Jn(e) {
                return function() {
                    return this.isValid() ? this._data[e] : NaN;
                };
            }
            var Nn = Jn("milliseconds"), In = Jn("seconds"), Un = Jn("minutes"), Gn = Jn("hours"), Bn = Jn("days"), Vn = Jn("months"), qn = Jn("years"), $n = Math.round, Kn = {
                ss: 44,
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            }, Zn = Math.abs;
            function Qn(e) {
                return (e > 0) - (e < 0) || +e;
            }
            function Xn() {
                if (!this.isValid()) return this.localeData().invalidDate();
                var e, t, n = Zn(this._milliseconds) / 1e3, a = Zn(this._days), r = Zn(this._months);
                e = g(n / 60), t = g(e / 60), n %= 60, e %= 60;
                var s = g(r / 12), i = r %= 12, o = a, d = t, _ = e, u = n ? n.toFixed(3).replace(/\.?0+$/, "") : "", m = this.asSeconds();
                if (!m) return "P0D";
                var l = m < 0 ? "-" : "", c = Qn(this._months) !== Qn(m) ? "-" : "", h = Qn(this._days) !== Qn(m) ? "-" : "", f = Qn(this._milliseconds) !== Qn(m) ? "-" : "";
                return l + "P" + (s ? c + s + "Y" : "") + (i ? c + i + "M" : "") + (o ? h + o + "D" : "") + (d || _ || u ? "T" : "") + (d ? f + d + "H" : "") + (_ ? f + _ + "M" : "") + (u ? f + u + "S" : "");
            }
            var ea = Et.prototype;
            return ea.isValid = function() {
                return this._isValid;
            }, ea.abs = function() {
                var e = this._data;
                return this._milliseconds = wn(this._milliseconds), this._days = wn(this._days), 
                this._months = wn(this._months), e.milliseconds = wn(e.milliseconds), e.seconds = wn(e.seconds), 
                e.minutes = wn(e.minutes), e.hours = wn(e.hours), e.months = wn(e.months), e.years = wn(e.years), 
                this;
            }, ea.add = function(e, t) {
                return bn(this, e, t, 1);
            }, ea.subtract = function(e, t) {
                return bn(this, e, t, -1);
            }, ea.as = function(e) {
                if (!this.isValid()) return NaN;
                var t, n, a = this._milliseconds;
                if ("month" === (e = W(e)) || "quarter" === e || "year" === e) switch (t = this._days + a / 864e5, 
                n = this._months + jn(t), e) {
                  case "month":
                    return n;

                  case "quarter":
                    return n / 3;

                  case "year":
                    return n / 12;
                } else switch (t = this._days + Math.round(Hn(this._months)), e) {
                  case "week":
                    return t / 7 + a / 6048e5;

                  case "day":
                    return t + a / 864e5;

                  case "hour":
                    return 24 * t + a / 36e5;

                  case "minute":
                    return 1440 * t + a / 6e4;

                  case "second":
                    return 86400 * t + a / 1e3;

                  case "millisecond":
                    return Math.floor(864e5 * t) + a;

                  default:
                    throw new Error("Unknown unit " + e);
                }
            }, ea.asMilliseconds = On, ea.asSeconds = Pn, ea.asMinutes = An, ea.asHours = Wn, 
            ea.asDays = En, ea.asWeeks = Fn, ea.asMonths = zn, ea.asQuarters = Cn, ea.asYears = Rn, 
            ea.valueOf = function() {
                return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * D(this._months / 12) : NaN;
            }, ea._bubble = function() {
                var e, t, n, a, r, s = this._milliseconds, i = this._days, o = this._months, d = this._data;
                return s >= 0 && i >= 0 && o >= 0 || s <= 0 && i <= 0 && o <= 0 || (s += 864e5 * Sn(Hn(o) + i), 
                i = 0, o = 0), d.milliseconds = s % 1e3, e = g(s / 1e3), d.seconds = e % 60, t = g(e / 60), 
                d.minutes = t % 60, n = g(t / 60), d.hours = n % 24, i += g(n / 24), o += r = g(jn(i)), 
                i -= Sn(Hn(r)), a = g(o / 12), o %= 12, d.days = i, d.months = o, d.years = a, this;
            }, ea.clone = function() {
                return Vt(this);
            }, ea.get = function(e) {
                return e = W(e), this.isValid() ? this[e + "s"]() : NaN;
            }, ea.milliseconds = Nn, ea.seconds = In, ea.minutes = Un, ea.hours = Gn, ea.days = Bn, 
            ea.weeks = function() {
                return g(this.days() / 7);
            }, ea.months = Vn, ea.years = qn, ea.humanize = function(e) {
                if (!this.isValid()) return this.localeData().invalidDate();
                var t = this.localeData(), n = function(e, t, n) {
                    var a = Vt(e).abs(), r = $n(a.as("s")), s = $n(a.as("m")), i = $n(a.as("h")), o = $n(a.as("d")), d = $n(a.as("M")), _ = $n(a.as("y")), u = r <= Kn.ss && [ "s", r ] || r < Kn.s && [ "ss", r ] || s <= 1 && [ "m" ] || s < Kn.m && [ "mm", s ] || i <= 1 && [ "h" ] || i < Kn.h && [ "hh", i ] || o <= 1 && [ "d" ] || o < Kn.d && [ "dd", o ] || d <= 1 && [ "M" ] || d < Kn.M && [ "MM", d ] || _ <= 1 && [ "y" ] || [ "yy", _ ];
                    return u[2] = t, u[3] = +e > 0, u[4] = n, function(e, t, n, a, r) {
                        return r.relativeTime(t || 1, !!n, e, a);
                    }.apply(null, u);
                }(this, !e, t);
                return e && (n = t.pastFuture(+this, n)), t.postformat(n);
            }, ea.toISOString = Xn, ea.toString = Xn, ea.toJSON = Xn, ea.locale = tn, ea.localeData = an, 
            ea.toIsoString = w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Xn), 
            ea.lang = nn, U("X", 0, 0, "unix"), U("x", 0, 0, "valueOf"), ue("x", se), ue("X", /[+-]?\d+(\.\d{1,3})?/), 
            he("X", (function(e, t, n) {
                n._d = new Date(1e3 * parseFloat(e, 10));
            })), he("x", (function(e, t, n) {
                n._d = new Date(D(e));
            })), r.version = "2.24.0", t = xt, r.fn = Yn, r.min = function() {
                return At("isBefore", [].slice.call(arguments, 0));
            }, r.max = function() {
                return At("isAfter", [].slice.call(arguments, 0));
            }, r.now = function() {
                return Date.now ? Date.now() : +new Date;
            }, r.utc = c, r.unix = function(e) {
                return xt(1e3 * e);
            }, r.months = function(e, t) {
                return vn(e, t, "months");
            }, r.isDate = _, r.locale = mt, r.invalid = M, r.duration = Vt, r.isMoment = k, 
            r.weekdays = function(e, t, n) {
                return Tn(e, t, n, "weekdays");
            }, r.parseZone = function() {
                return xt.apply(null, arguments).parseZone();
            }, r.localeData = ct, r.isDuration = Ft, r.monthsShort = function(e, t) {
                return vn(e, t, "monthsShort");
            }, r.weekdaysMin = function(e, t, n) {
                return Tn(e, t, n, "weekdaysMin");
            }, r.defineLocale = lt, r.updateLocale = function(e, t) {
                if (null != t) {
                    var n, a, r = it;
                    null != (a = ut(e)) && (r = a._config), (n = new O(t = x(r, t))).parentLocale = ot[e], 
                    ot[e] = n, mt(e);
                } else null != ot[e] && (null != ot[e].parentLocale ? ot[e] = ot[e].parentLocale : null != ot[e] && delete ot[e]);
                return ot[e];
            }, r.locales = function() {
                return b(ot);
            }, r.weekdaysShort = function(e, t, n) {
                return Tn(e, t, n, "weekdaysShort");
            }, r.normalizeUnits = W, r.relativeTimeRounding = function(e) {
                return void 0 === e ? $n : "function" == typeof e && ($n = e, !0);
            }, r.relativeTimeThreshold = function(e, t) {
                return void 0 !== Kn[e] && (void 0 === t ? Kn[e] : (Kn[e] = t, "s" === e && (Kn.ss = t - 1), 
                !0));
            }, r.calendarFormat = function(e, t) {
                var n = e.diff(t, "days", !0);
                return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
            }, r.prototype = Yn, r.HTML5_FMT = {
                DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                DATE: "YYYY-MM-DD",
                TIME: "HH:mm",
                TIME_SECONDS: "HH:mm:ss",
                TIME_MS: "HH:mm:ss.SSS",
                WEEK: "GGGG-[W]WW",
                MONTH: "YYYY-MM"
            }, r;
        }();
    }).call(this, n(506)(e));
}, function(e, t, n) {
    "use strict";
    var a = Array.isArray;
    t.a = a;
}, , function(e, t, n) {
    "use strict";
    t.a = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
    };
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        return null != e && "object" == typeof e;
    };
}, , function(e, t, n) {
    "use strict";
    var a = n(107), r = "object" == typeof self && self && self.Object === Object && self, s = a.a || r || Function("return this")();
    t.a = s;
}, function(e, t, n) {
    "use strict";
    var a = n(110), r = n(93), s = n(10);
    t.a = function(e) {
        return Object(s.a)(e) ? Object(a.a)(e) : Object(r.a)(e);
    };
}, , function(e, t, n) {
    "use strict";
    var a = n(14), r = Object.prototype, s = r.hasOwnProperty, i = r.toString, o = a.a ? a.a.toStringTag : void 0, _ = Object.prototype.toString, c = a.a ? a.a.toStringTag : void 0;
    t.a = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : c && c in Object(e) ? function(e) {
            var t = s.call(e, o), n = e[o];
            try {
                e[o] = void 0;
                var a = !0;
            } catch (e) {}
            var r = i.call(e);
            return a && (t ? e[o] = n : delete e[o]), r;
        }(e) : function(e) {
            return _.call(e);
        }(e);
    };
}, function(e, t, n) {
    "use strict";
    var a = n(23), r = n(51);
    t.a = function(e) {
        return null != e && Object(r.a)(e.length) && !Object(a.a)(e);
    };
}, function(e, t, n) {
    "use strict";
    var a = n(110), r = n(3), s = n(46), o = Object.prototype.hasOwnProperty, d = function(e) {
        if (!Object(r.a)(e)) return function(e) {
            var t = [];
            if (null != e) for (var n in Object(e)) t.push(n);
            return t;
        }(e);
        var t = Object(s.a)(e), n = [];
        for (var a in e) ("constructor" != a || !t && o.call(e, a)) && n.push(a);
        return n;
    }, _ = n(10);
    t.a = function(e) {
        return Object(_.a)(e) ? Object(a.a)(e, !0) : d(e);
    };
}, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n);
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        return function(t) {
            return e(t);
        };
    };
}, function(e, t, n) {
    "use strict";
    var a = n(6).a.Symbol;
    t.a = a;
}, function(e, t) {
    var n = e.exports = {
        version: "2.5.7"
    };
    "number" == typeof __e && (__e = n);
}, function(e, t, n) {
    "use strict";
    t.a = function(e, t) {
        var n = -1, a = e.length;
        for (t || (t = Array(a)); ++n < a; ) t[n] = e[n];
        return t;
    };
}, function(e, t, n) {
    var a = n(96)("wks"), r = n(85), s = n(12).Symbol, i = "function" == typeof s;
    (e.exports = function(e) {
        return a[e] || (a[e] = i && s[e] || (i ? s : r)("Symbol." + e));
    }).store = a;
}, , function(e, t, n) {
    "use strict";
    t.a = function(e, t) {
        return e === t || e != e && t != t;
    };
}, function(e, t, n) {
    "use strict";
    var a = n(52), r = n(27);
    t.a = function(e, t, n, s) {
        var i = !n;
        n || (n = {});
        for (var o = -1, d = t.length; ++o < d; ) {
            var _ = t[o], u = s ? s(n[_], e[_], _, n, e) : void 0;
            void 0 === u && (u = e[_]), i ? Object(r.a)(n, _, u) : Object(a.a)(n, _, u);
        }
        return n;
    };
}, , , function(e, t, n) {
    "use strict";
    var a = n(9), r = n(3);
    t.a = function(e) {
        if (!Object(r.a)(e)) return !1;
        var t = Object(a.a)(e);
        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
    };
}, function(e, t, n) {
    "use strict";
    var a = n(30), r = n(6), s = Object(a.a)(r.a, "DataView"), i = n(55), o = Object(a.a)(r.a, "Promise"), d = n(61), _ = n(67), u = n(9), m = n(47), l = Object(m.a)(s), c = Object(m.a)(i.a), h = Object(m.a)(o), f = Object(m.a)(d.a), M = Object(m.a)(_.a), y = u.a;
    (s && "[object DataView]" != y(new s(new ArrayBuffer(1))) || i.a && "[object Map]" != y(new i.a) || o && "[object Promise]" != y(o.resolve()) || d.a && "[object Set]" != y(new d.a) || _.a && "[object WeakMap]" != y(new _.a)) && (y = function(e) {
        var t = Object(u.a)(e), n = "[object Object]" == t ? e.constructor : void 0, a = n ? Object(m.a)(n) : "";
        if (a) switch (a) {
          case l:
            return "[object DataView]";

          case c:
            return "[object Map]";

          case h:
            return "[object Promise]";

          case f:
            return "[object Set]";

          case M:
            return "[object WeakMap]";
        }
        return t;
    }), t.a = y;
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var a = n(107), r = "object" == typeof exports && exports && !exports.nodeType && exports, s = r && "object" == typeof e && e && !e.nodeType && e, i = s && s.exports === r && a.a.process, o = function() {
            try {
                return s && s.require && s.require("util").types || i && i.binding && i.binding("util");
            } catch (e) {}
        }();
        t.a = o;
    }).call(this, n(130)(e));
}, function(e, t, n) {
    "use strict";
    t.a = function(e, t) {
        for (var n = -1, a = null == e ? 0 : e.length; ++n < a && !1 !== t(e[n], n, e); ) ;
        return e;
    };
}, function(e, t, n) {
    "use strict";
    var a = n(79);
    t.a = function(e, t, n) {
        "__proto__" == t && a.a ? Object(a.a)(e, t, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : e[t] = n;
    };
}, function(e, t, n) {
    "use strict";
    var r = /^(?:0|[1-9]\d*)$/;
    t.a = function(e, t) {
        var n = typeof e;
        return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && r.test(e)) && e > -1 && e % 1 == 0 && e < t;
    };
}, function(e, t, n) {
    "use strict";
    var a = n(54), r = n(26), s = n(52), i = n(125), o = n(20), d = n(11), _ = function(e, t) {
        return e && Object(o.a)(t, Object(d.a)(t), e);
    }, u = n(123), m = n(16), l = n(70), c = function(e, t) {
        return Object(o.a)(e, Object(l.a)(e), t);
    }, h = n(109), f = function(e, t) {
        return Object(o.a)(e, Object(h.a)(e), t);
    }, M = n(102), y = n(92), L = n(24), p = Object.prototype.hasOwnProperty, Y = function(e) {
        var t = e.length, n = new e.constructor(t);
        return t && "string" == typeof e[0] && p.call(e, "index") && (n.index = e.index, 
        n.input = e.input), n;
    }, k = n(71), D = /\w*$/, T = n(14), w = T.a ? T.a.prototype : void 0, b = w ? w.valueOf : void 0, j = n(126), $ = function(e, t, n) {
        var a = e.constructor;
        switch (t) {
          case "[object ArrayBuffer]":
            return Object(k.a)(e);

          case "[object Boolean]":
          case "[object Date]":
            return new a(+e);

          case "[object DataView]":
            return function(e, t) {
                var n = t ? Object(k.a)(e.buffer) : e.buffer;
                return new e.constructor(n, e.byteOffset, e.byteLength);
            }(e, n);

          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return Object(j.a)(e, n);

          case "[object Map]":
            return new a;

          case "[object Number]":
          case "[object String]":
            return new a(e);

          case "[object RegExp]":
            return function(e) {
                var t = new e.constructor(e.source, D.exec(e));
                return t.lastIndex = e.lastIndex, t;
            }(e);

          case "[object Set]":
            return new a;

          case "[object Symbol]":
            return function(e) {
                return b ? Object(b.call(e)) : {};
            }(e);
        }
    }, K = n(124), Z = n(1), Q = n(31), X = n(90), ee = n(3), te = n(89), ne = n(7), ie = "[object Arguments]", oe = "[object Function]", _e = "[object Object]", ue = {};
    ue[ie] = ue["[object Array]"] = ue["[object ArrayBuffer]"] = ue["[object DataView]"] = ue["[object Boolean]"] = ue["[object Date]"] = ue["[object Float32Array]"] = ue["[object Float64Array]"] = ue["[object Int8Array]"] = ue["[object Int16Array]"] = ue["[object Int32Array]"] = ue["[object Map]"] = ue["[object Number]"] = ue[_e] = ue["[object RegExp]"] = ue["[object Set]"] = ue["[object String]"] = ue["[object Symbol]"] = ue["[object Uint8Array]"] = ue["[object Uint8ClampedArray]"] = ue["[object Uint16Array]"] = ue["[object Uint32Array]"] = !0, 
    ue["[object Error]"] = ue[oe] = ue["[object WeakMap]"] = !1, t.a = function e(t, n, o, d, l, h) {
        var p, k = 1 & n, g = 2 & n, D = 4 & n;
        if (o && (p = l ? o(t, d, l, h) : o(t)), void 0 !== p) return p;
        if (!Object(ee.a)(t)) return t;
        var v = Object(Z.a)(t);
        if (v) {
            if (p = Y(t), !k) return Object(m.a)(t, p);
        } else {
            var T = Object(L.a)(t), w = T == oe || "[object GeneratorFunction]" == T;
            if (Object(Q.a)(t)) return Object(u.a)(t, k);
            if (T == _e || T == ie || w && !l) {
                if (p = g || w ? {} : Object(K.a)(t), !k) return g ? f(t, _(p, t)) : c(t, Object(i.a)(p, t));
            } else {
                if (!ue[T]) return l ? t : {};
                p = $(t, T, k);
            }
        }
        h || (h = new a.a);
        var b = h.get(t);
        if (b) return b;
        h.set(t, p), Object(te.a)(t) ? t.forEach((function(a) {
            p.add(e(a, n, o, a, t, h));
        })) : Object(X.a)(t) && t.forEach((function(a, r) {
            p.set(r, e(a, n, o, r, t, h));
        }));
        var S = D ? g ? y.a : M.a : g ? keysIn : ne.a, j = v ? void 0 : S(t);
        return Object(r.a)(j || t, (function(a, r) {
            j && (a = t[r = a]), Object(s.a)(p, r, e(a, n, o, r, t, h));
        })), p;
    };
}, function(e, t, n) {
    "use strict";
    var a = n(127);
    t.a = function(e, t) {
        var n = function(e, t) {
            return null == e ? void 0 : e[t];
        }(e, t);
        return Object(a.a)(n) ? n : void 0;
    };
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var a = n(6), r = n(66), s = "object" == typeof exports && exports && !exports.nodeType && exports, i = s && "object" == typeof e && e && !e.nodeType && e, o = i && i.exports === s ? a.a.Buffer : void 0, d = (o ? o.isBuffer : void 0) || r.a;
        t.a = d;
    }).call(this, n(130)(e));
}, function(e, t, n) {
    "use strict";
    t.a = function(e, t) {
        for (var n = -1, a = t.length, r = e.length; ++n < a; ) e[r + n] = t[n];
        return e;
    };
}, function(e, t, n) {
    var a = n(12), r = n(15), s = n(48), i = n(40), o = n(49), d = function(e, t, n) {
        var _, u, m, l = e & d.F, c = e & d.G, h = e & d.S, f = e & d.P, M = e & d.B, y = e & d.W, L = c ? r : r[t] || (r[t] = {}), p = L.prototype, Y = c ? a : h ? a[t] : (a[t] || {}).prototype;
        for (_ in c && (n = t), n) (u = !l && Y && void 0 !== Y[_]) && o(L, _) || (m = u ? Y[_] : n[_], 
        L[_] = c && "function" != typeof Y[_] ? n[_] : M && u ? s(m, a) : y && Y[_] == m ? function(e) {
            var t = function(t, n, a) {
                if (this instanceof e) {
                    switch (arguments.length) {
                      case 0:
                        return new e;

                      case 1:
                        return new e(t);

                      case 2:
                        return new e(t, n);
                    }
                    return new e(t, n, a);
                }
                return e.apply(this, arguments);
            };
            return t.prototype = e.prototype, t;
        }(m) : f && "function" == typeof m ? s(Function.call, m) : m, f && ((L.virtual || (L.virtual = {}))[_] = m, 
        e & d.R && p && !p[_] && i(p, _, m)));
    };
    d.F = 1, d.G = 2, d.S = 4, d.P = 8, d.B = 16, d.W = 32, d.U = 64, d.R = 128, e.exports = d;
}, function(e, t, n) {
    var a = n(39);
    e.exports = function(e) {
        if (!a(e)) throw TypeError(e + " is not an object!");
        return e;
    };
}, function(e, t, n) {
    "use strict";
    t.a = function(e, t) {
        for (var n = -1, a = null == e ? 0 : e.length, r = 0, s = []; ++n < a; ) {
            var i = e[n];
            t(i, n, e) && (s[r++] = i);
        }
        return s;
    };
}, function(e, t, n) {
    "use strict";
    var a = n(189), r = n(236), s = Object.prototype.toString;
    function i(e) {
        return "[object Array]" === s.call(e);
    }
    function o(e) {
        return null !== e && "object" == typeof e;
    }
    function d(e) {
        return "[object Function]" === s.call(e);
    }
    function _(e, t) {
        if (null != e) if ("object" != typeof e && (e = [ e ]), i(e)) for (var n = 0, a = e.length; n < a; n++) t.call(null, e[n], n, e); else for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.call(null, e[r], r, e);
    }
    e.exports = {
        isArray: i,
        isArrayBuffer: function(e) {
            return "[object ArrayBuffer]" === s.call(e);
        },
        isBuffer: r,
        isFormData: function(e) {
            return "undefined" != typeof FormData && e instanceof FormData;
        },
        isArrayBufferView: function(e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
        },
        isString: function(e) {
            return "string" == typeof e;
        },
        isNumber: function(e) {
            return "number" == typeof e;
        },
        isObject: o,
        isUndefined: function(e) {
            return void 0 === e;
        },
        isDate: function(e) {
            return "[object Date]" === s.call(e);
        },
        isFile: function(e) {
            return "[object File]" === s.call(e);
        },
        isBlob: function(e) {
            return "[object Blob]" === s.call(e);
        },
        isFunction: d,
        isStream: function(e) {
            return o(e) && d(e.pipe);
        },
        isURLSearchParams: function(e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
        },
        isStandardBrowserEnv: function() {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
        },
        forEach: _,
        merge: function e() {
            var t = {};
            function n(n, a) {
                "object" == typeof t[a] && "object" == typeof n ? t[a] = e(t[a], n) : t[a] = n;
            }
            for (var a = 0, r = arguments.length; a < r; a++) _(arguments[a], n);
            return t;
        },
        extend: function(e, t, n) {
            return _(t, (function(t, r) {
                e[r] = n && "function" == typeof t ? a(t, n) : t;
            })), e;
        },
        trim: function(e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "");
        }
    };
}, function(e, t, n) {
    "use strict";
    var a = n(9), r = n(4), i = function(e) {
        return Object(r.a)(e) && "[object Arguments]" == Object(a.a)(e);
    }, o = Object.prototype, d = o.hasOwnProperty, _ = o.propertyIsEnumerable, u = i(function() {
        return arguments;
    }()) ? i : function(e) {
        return Object(r.a)(e) && d.call(e, "callee") && !_.call(e, "callee");
    };
    t.a = u;
}, function(e, t, n) {
    "use strict";
    var a = n(9), r = n(51), s = n(4), i = {};
    i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = !0, 
    i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1;
    var d = n(13), _ = n(25), u = _.a && _.a.isTypedArray, m = u ? Object(d.a)(u) : function(e) {
        return Object(s.a)(e) && Object(r.a)(e.length) && !!i[Object(a.a)(e)];
    };
    t.a = m;
}, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e;
    };
}, function(e, t, n) {
    var a = n(41), r = n(68);
    e.exports = n(42) ? function(e, t, n) {
        return a.f(e, t, r(1, n));
    } : function(e, t, n) {
        return e[t] = n, e;
    };
}, function(e, t, n) {
    var a = n(34), r = n(137), s = n(114), i = Object.defineProperty;
    t.f = n(42) ? Object.defineProperty : function(e, t, n) {
        if (a(e), t = s(t, !0), a(n), r) try {
            return i(e, t, n);
        } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e;
    };
}, function(e, t, n) {
    e.exports = !n(57)((function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7;
            }
        }).a;
    }));
}, , , function(e, t, n) {
    "use strict";
    var a = n(3), r = Object.create, s = function() {
        function e() {}
        return function(t) {
            if (!Object(a.a)(t)) return {};
            if (r) return r(t);
            e.prototype = t;
            var n = new e;
            return e.prototype = void 0, n;
        };
    }();
    t.a = s;
}, function(e, t, n) {
    "use strict";
    var a = Object.prototype;
    t.a = function(e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || a);
    };
}, function(e, t, n) {
    "use strict";
    var a = Function.prototype.toString;
    t.a = function(e) {
        if (null != e) {
            try {
                return a.call(e);
            } catch (e) {}
            try {
                return e + "";
            } catch (e) {}
        }
        return "";
    };
}, function(e, t, n) {
    var a = n(62);
    e.exports = function(e, t, n) {
        if (a(e), void 0 === t) return e;
        switch (n) {
          case 1:
            return function(n) {
                return e.call(t, n);
            };

          case 2:
            return function(n, a) {
                return e.call(t, n, a);
            };

          case 3:
            return function(n, a, r) {
                return e.call(t, n, a, r);
            };
        }
        return function() {
            return e.apply(t, arguments);
        };
    };
}, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t);
    };
}, function(e, t) {
    e.exports = {};
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
    };
}, function(e, t, n) {
    "use strict";
    var a = n(27), r = n(19), s = Object.prototype.hasOwnProperty;
    t.a = function(e, t, n) {
        var i = e[t];
        s.call(e, t) && Object(r.a)(i, n) && (void 0 !== n || t in e) || Object(a.a)(e, t, n);
    };
}, function(e, t, n) {
    "use strict";
    var r = n(19), s = function(e, t) {
        for (var n = e.length; n--; ) if (Object(r.a)(e[n][0], t)) return n;
        return -1;
    }, i = Array.prototype.splice;
    function m(e) {
        var t = -1, n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
            var a = e[t];
            this.set(a[0], a[1]);
        }
    }
    m.prototype.clear = function() {
        this.__data__ = [], this.size = 0;
    }, m.prototype.delete = function(e) {
        var t = this.__data__, n = s(t, e);
        return !(n < 0 || (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, 0));
    }, m.prototype.get = function(e) {
        var t = this.__data__, n = s(t, e);
        return n < 0 ? void 0 : t[n][1];
    }, m.prototype.has = function(e) {
        return s(this.__data__, e) > -1;
    }, m.prototype.set = function(e, t) {
        var n = this.__data__, a = s(n, e);
        return a < 0 ? (++this.size, n.push([ e, t ])) : n[a][1] = t, this;
    }, t.a = m;
}, function(e, t, n) {
    "use strict";
    var a = n(53), d = n(55), _ = n(74);
    function l(e) {
        var t = this.__data__ = new a.a(e);
        this.size = t.size;
    }
    l.prototype.clear = function() {
        this.__data__ = new a.a, this.size = 0;
    }, l.prototype.delete = function(e) {
        var t = this.__data__, n = t.delete(e);
        return this.size = t.size, n;
    }, l.prototype.get = function(e) {
        return this.__data__.get(e);
    }, l.prototype.has = function(e) {
        return this.__data__.has(e);
    }, l.prototype.set = function(e, t) {
        var n = this.__data__;
        if (n instanceof a.a) {
            var r = n.__data__;
            if (!d.a || r.length < 199) return r.push([ e, t ]), this.size = ++n.size, this;
            n = this.__data__ = new _.a(r);
        }
        return n.set(e, t), this.size = n.size, this;
    }, t.a = l;
}, function(e, t, n) {
    "use strict";
    var a = n(30), r = n(6), s = Object(a.a)(r.a, "Map");
    t.a = s;
}, function(e, t, n) {
    var a = n(115), r = n(83);
    e.exports = function(e) {
        return a(r(e));
    };
}, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e();
        } catch (e) {
            return !0;
        }
    };
}, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1);
    };
}, function(e, t, n) {
    "use strict";
    t.a = function() {
        return [];
    };
}, function(e, t, n) {
    "use strict";
    var a = n(108), r = Object(a.a)(Object.getPrototypeOf, Object);
    t.a = r;
}, function(e, t, n) {
    "use strict";
    var a = n(30), r = n(6), s = Object(a.a)(r.a, "Set");
    t.a = s;
}, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e;
    };
}, , , function(e, t) {
    e.exports = !0;
}, function(e, t, n) {
    "use strict";
    t.a = function() {
        return !1;
    };
}, function(e, t, n) {
    "use strict";
    var a = n(30), r = n(6), s = Object(a.a)(r.a, "WeakMap");
    t.a = s;
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        };
    };
}, function(e, t, n) {
    var a = n(41).f, r = n(49), s = n(17)("toStringTag");
    e.exports = function(e, t, n) {
        e && !r(e = n ? e : e.prototype, s) && a(e, s, {
            configurable: !0,
            value: t
        });
    };
}, function(e, t, n) {
    "use strict";
    var a = n(35), r = n(59), s = Object.prototype.propertyIsEnumerable, i = Object.getOwnPropertySymbols, o = i ? function(e) {
        return null == e ? [] : (e = Object(e), Object(a.a)(i(e), (function(t) {
            return s.call(e, t);
        })));
    } : r.a;
    t.a = o;
}, function(e, t, n) {
    "use strict";
    var a = n(80);
    t.a = function(e) {
        var t = new e.constructor(e.byteLength);
        return new a.a(t).set(new a.a(e)), t;
    };
}, function(e, t, n) {
    var a = n(139), r = n(97);
    e.exports = Object.keys || function(e) {
        return a(e, r);
    };
}, , function(e, t, n) {
    "use strict";
    var a = n(30), r = Object(a.a)(Object, "create"), d = Object.prototype.hasOwnProperty, u = Object.prototype.hasOwnProperty;
    function h(e) {
        var t = -1, n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
            var a = e[t];
            this.set(a[0], a[1]);
        }
    }
    h.prototype.clear = function() {
        this.__data__ = r ? r(null) : {}, this.size = 0;
    }, h.prototype.delete = function(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
    }, h.prototype.get = function(e) {
        var t = this.__data__;
        if (r) {
            var n = t[e];
            return "__lodash_hash_undefined__" === n ? void 0 : n;
        }
        return d.call(t, e) ? t[e] : void 0;
    }, h.prototype.has = function(e) {
        var t = this.__data__;
        return r ? void 0 !== t[e] : u.call(t, e);
    }, h.prototype.set = function(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = r && void 0 === t ? "__lodash_hash_undefined__" : t, 
        this;
    };
    var f = h, M = n(53), y = n(55), Y = function(e, t) {
        var n = e.__data__;
        return function(e) {
            var t = typeof e;
            return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
        }(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
    };
    function T(e) {
        var t = -1, n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
            var a = e[t];
            this.set(a[0], a[1]);
        }
    }
    T.prototype.clear = function() {
        this.size = 0, this.__data__ = {
            hash: new f,
            map: new (y.a || M.a),
            string: new f
        };
    }, T.prototype.delete = function(e) {
        var t = Y(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
    }, T.prototype.get = function(e) {
        return Y(this, e).get(e);
    }, T.prototype.has = function(e) {
        return Y(this, e).has(e);
    }, T.prototype.set = function(e, t) {
        var n = Y(this, e), a = n.size;
        return n.set(e, t), this.size += n.size == a ? 0 : 1, this;
    }, t.a = T;
}, function(e, t, n) {
    "use strict";
    var a = n(6).a["__core-js_shared__"];
    t.a = a;
}, function(e, t, n) {
    "use strict";
    var a = n(175)(!0);
    n(112)(String, "String", (function(e) {
        this._t = String(e), this._i = 0;
    }), (function() {
        var e, t = this._t, n = this._i;
        return n >= t.length ? {
            value: void 0,
            done: !0
        } : (e = a(t, n), this._i += e.length, {
            value: e,
            done: !1
        });
    }));
}, function(e, t, n) {
    var a = n(83);
    e.exports = function(e) {
        return Object(a(e));
    };
}, , function(e, t, n) {
    "use strict";
    var a = n(30), r = function() {
        try {
            var e = Object(a.a)(Object, "defineProperty");
            return e({}, "", {}), e;
        } catch (e) {}
    }();
    t.a = r;
}, function(e, t, n) {
    "use strict";
    var a = n(6).a.Uint8Array;
    t.a = a;
}, function(e, t, n) {
    var a = n(39), r = n(12).document, s = a(r) && a(r.createElement);
    e.exports = function(e) {
        return s ? r.createElement(e) : {};
    };
}, function(e, t) {
    var n = Math.ceil, a = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? a : n)(e);
    };
}, function(e, t) {
    e.exports = function(e) {
        if (null == e) throw TypeError("Can't call method on  " + e);
        return e;
    };
}, function(e, t, n) {
    var a = n(96)("keys"), r = n(85);
    e.exports = function(e) {
        return a[e] || (a[e] = r(e));
    };
}, function(e, t) {
    var n = 0, a = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + a).toString(36));
    };
}, function(e, t, n) {
    "use strict";
    var a = n(62);
    function r(e) {
        var t, n;
        this.promise = new e((function(e, a) {
            if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
            t = e, n = a;
        })), this.resolve = a(t), this.reject = a(n);
    }
    e.exports.f = function(e) {
        return new r(e);
    };
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(n(224)), r = i(n(95));
    t.matchUrl = function(e) {
        return !e.match("https://chrome.google.com") && (!e.match("view-source:") && (!e.match("file:///") && (!!e.match("http://") || (!!e.match("https://") || void 0))));
    }, t.generateID = function() {
        for (var e = Math.random().toString(36).substr(2, 9) + Date.now().toString(36).substr(3), t = 0; t < e.length; t++) Math.random() > .5 && (e = e.substr(0, t) + e[t].toUpperCase() + e.substr(t + 1));
        return e;
    }, t.sendFeedback = function(e) {
        if (!(e.length < 10)) return new r.default((function(t, n) {
            s.default.post("https://sidebar.li/api/post.php", (0, a.default)({
                text: "#sidebar " + e.substring(0, 300)
            })).then((function(e) {
                t(e);
            })).catch((function(e) {
                n(e);
            }));
        }));
    }, t.toDataURL = function(e, t) {
        return new r.default((function(n, a) {
            var r = new Image;
            r.crossOrigin = "Anonymous", r.onload = function() {
                var e, a = document.createElement("CANVAS"), r = a.getContext("2d");
                a.height = this.naturalHeight, a.width = this.naturalWidth, r.drawImage(this, 0, 0), 
                e = a.toDataURL(t), n(e);
            }, r.src = e, (r.complete || void 0 === r.complete) && (r.src = e);
        }));
    }, t.createFileName = function() {
        return "scrnli_" + (new Date).toLocaleString().replace(", ", "_").replace(/\./gi, "-").replace(/\:/gi, "-");
    }, t.base64toBlob = o, t.saveData = function(e, t, n) {
        var r = "image/png";
        n && (r = "image/" + n);
        var s = document.createElement("a");
        document.body.appendChild(s), s.style = "display: none", (0, a.default)(e);
        var i = o(e, "image/" + r), d = window.URL.createObjectURL(i);
        s.href = d, s.download = t + function(e) {
            var t = ".";
            switch (e) {
              case "jpeg":
                t += "jpg";
                break;

              case "png":
                t += "png";
                break;

              default:
                t += e;
            }
            return t;
        }(n), s.click(), window.URL.revokeObjectURL(d);
    }, t.getAllBookmarks = function e(t) {
        for (var n = [], a = 0; a < t.children.length; a++) if (t.children[a].url && n.push(t.children[a]), 
        t.children[a].children) {
            var r = e(t.children[a]);
            if (r) for (var s = 0; s < r.length; s++) n.push(r[s]);
        }
        return n;
    };
    var s = i(n(226));
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e, t) {
        e.match("base64,") && (e = e.slice(e.indexOf("base64,") + 7)), t = t || "";
        for (var n = atob(e), a = n.length, r = Math.ceil(a / 1024), s = new Array(r), i = 0; i < r; ++i) {
            for (var o = 1024 * i, d = Math.min(o + 1024, a), _ = new Array(d - o), u = o, m = 0; u < d; ++m, 
            ++u) _[m] = n[u].charCodeAt(0);
            s[i] = new Uint8Array(_);
        }
        return new Blob(s, {
            type: t
        });
    }
}, , function(e, t, n) {
    "use strict";
    var a = n(24), r = n(4), o = n(13), d = n(25), _ = d.a && d.a.isSet, u = _ ? Object(o.a)(_) : function(e) {
        return Object(r.a)(e) && "[object Set]" == Object(a.a)(e);
    };
    t.a = u;
}, function(e, t, n) {
    "use strict";
    var a = n(24), r = n(4), o = n(13), d = n(25), _ = d.a && d.a.isMap, u = _ ? Object(o.a)(_) : function(e) {
        return Object(r.a)(e) && "[object Map]" == Object(a.a)(e);
    };
    t.a = u;
}, function(e, t, n) {
    "use strict";
    t.a = function(e, t) {
        for (var n = -1, a = Array(e); ++n < e; ) a[n] = t(n);
        return a;
    };
}, function(e, t, n) {
    "use strict";
    var a = n(111), r = n(109), s = n(11);
    t.a = function(e) {
        return Object(a.a)(e, s.a, r.a);
    };
}, function(e, t, n) {
    "use strict";
    var a = n(46), r = n(108), s = Object(r.a)(Object.keys, Object), i = Object.prototype.hasOwnProperty;
    t.a = function(e) {
        if (!Object(a.a)(e)) return s(e);
        var t = [];
        for (var n in Object(e)) i.call(e, n) && "constructor" != n && t.push(n);
        return t;
    };
}, function(e, t, n) {
    var a = n(82), r = Math.min;
    e.exports = function(e) {
        return e > 0 ? r(a(e), 9007199254740991) : 0;
    };
}, function(e, t, n) {
    e.exports = {
        default: n(174),
        __esModule: !0
    };
}, function(e, t, n) {
    var a = n(15), r = n(12), s = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    (e.exports = function(e, t) {
        return s[e] || (s[e] = void 0 !== t ? t : {});
    })("versions", []).push({
        version: a.version,
        mode: n(65) ? "pure" : "global",
        copyright: "?? 2018 Denis Pushkarev (zloirock.ru)"
    });
}, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
}, function(e, t, n) {
    n(181);
    for (var a = n(12), r = n(40), s = n(50), i = n(17)("toStringTag"), o = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), d = 0; d < o.length; d++) {
        var _ = o[d], u = a[_], m = u && u.prototype;
        m && !m[i] && r(m, i, _), s[_] = s.Array;
    }
}, function(e, t, n) {
    var a = n(58), r = n(17)("toStringTag"), s = "Arguments" == a(function() {
        return arguments;
    }());
    e.exports = function(e) {
        var t, n, i;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
            try {
                return e[t];
            } catch (e) {}
        }(t = Object(e), r)) ? n : s ? a(t) : "Object" == (i = a(t)) && "function" == typeof t.callee ? "Arguments" : i;
    };
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var a = n(29);
    t.default = function(e) {
        return Object(a.a)(e, 5);
    };
}, , function(e, t, n) {
    "use strict";
    var a = n(111), r = n(70), s = n(7);
    t.a = function(e) {
        return Object(a.a)(e, s.a, r.a);
    };
}, function(e, t) {
    var n;
    n = function() {
        return this;
    }();
    try {
        n = n || new Function("return this")();
    } catch (e) {
        "object" == typeof window && (n = window);
    }
    e.exports = n;
}, , , , function(e, t, n) {
    "use strict";
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.a = n;
    }).call(this, n(103));
}, function(e, t, n) {
    "use strict";
    t.a = function(e, t) {
        return function(n) {
            return e(t(n));
        };
    };
}, function(e, t, n) {
    "use strict";
    var a = n(32), r = n(60), s = n(70), i = n(59), o = Object.getOwnPropertySymbols ? function(e) {
        for (var t = []; e; ) Object(a.a)(t, Object(s.a)(e)), e = Object(r.a)(e);
        return t;
    } : i.a;
    t.a = o;
}, function(e, t, n) {
    "use strict";
    var a = n(91), r = n(37), s = n(1), i = n(31), o = n(28), d = n(38), _ = Object.prototype.hasOwnProperty;
    t.a = function(e, t) {
        var n = Object(s.a)(e), u = !n && Object(r.a)(e), m = !n && !u && Object(i.a)(e), l = !n && !u && !m && Object(d.a)(e), c = n || u || m || l, h = c ? Object(a.a)(e.length, String) : [], f = h.length;
        for (var M in e) !t && !_.call(e, M) || c && ("length" == M || m && ("offset" == M || "parent" == M) || l && ("buffer" == M || "byteLength" == M || "byteOffset" == M) || Object(o.a)(M, f)) || h.push(M);
        return h;
    };
}, function(e, t, n) {
    "use strict";
    var a = n(32), r = n(1);
    t.a = function(e, t, n) {
        var s = t(e);
        return Object(r.a)(e) ? s : Object(a.a)(s, n(e));
    };
}, function(e, t, n) {
    "use strict";
    var a = n(65), r = n(33), s = n(138), i = n(40), o = n(50), d = n(176), _ = n(69), u = n(180), m = n(17)("iterator"), l = !([].keys && "next" in [].keys()), c = function() {
        return this;
    };
    e.exports = function(e, t, n, h, f, M, y) {
        d(n, t, h);
        var L, p, Y, k = function(e) {
            if (!l && e in T) return T[e];
            switch (e) {
              case "keys":
              case "values":
                return function() {
                    return new n(this, e);
                };
            }
            return function() {
                return new n(this, e);
            };
        }, g = t + " Iterator", D = "values" == f, v = !1, T = e.prototype, w = T[m] || T["@@iterator"] || f && T[f], b = w || k(f), S = f ? D ? k("entries") : b : void 0, j = "Array" == t && T.entries || w;
        if (j && (Y = u(j.call(new e))) !== Object.prototype && Y.next && (_(Y, g, !0), 
        a || "function" == typeof Y[m] || i(Y, m, c)), D && w && "values" !== w.name && (v = !0, 
        b = function() {
            return w.call(this);
        }), a && !y || !l && !v && T[m] || i(T, m, b), o[t] = b, o[g] = c, f) if (L = {
            values: D ? b : k("values"),
            keys: M ? b : k("keys"),
            entries: S
        }, y) for (p in L) p in T || s(T, p, L[p]); else r(r.P + r.F * (l || v), t, L);
        return L;
    };
}, , function(e, t, n) {
    var a = n(39);
    e.exports = function(e, t) {
        if (!a(e)) return e;
        var n, r;
        if (t && "function" == typeof (n = e.toString) && !a(r = n.call(e))) return r;
        if ("function" == typeof (n = e.valueOf) && !a(r = n.call(e))) return r;
        if (!t && "function" == typeof (n = e.toString) && !a(r = n.call(e))) return r;
        throw TypeError("Can't convert object to primitive value");
    };
}, function(e, t, n) {
    var a = n(58);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == a(e) ? e.split("") : Object(e);
    };
}, function(e, t, n) {
    var a = n(12).document;
    e.exports = a && a.documentElement;
}, function(e, t, n) {
    var a = n(99), r = n(17)("iterator"), s = n(50);
    e.exports = n(15).getIteratorMethod = function(e) {
        if (null != e) return e[r] || e["@@iterator"] || s[a(e)];
    };
}, function(e, t, n) {
    var a = n(34), r = n(62), s = n(17)("species");
    e.exports = function(e, t) {
        var n, i = a(e).constructor;
        return void 0 === i || null == (n = a(i)[s]) ? t : r(n);
    };
}, function(e, t, n) {
    var a, r, s, i = n(48), o = n(184), d = n(116), _ = n(81), u = n(12), m = u.process, l = u.setImmediate, c = u.clearImmediate, h = u.MessageChannel, f = u.Dispatch, M = 0, y = {}, L = function() {
        var e = +this;
        if (y.hasOwnProperty(e)) {
            var t = y[e];
            delete y[e], t();
        }
    }, p = function(e) {
        L.call(e.data);
    };
    l && c || (l = function(e) {
        for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
        return y[++M] = function() {
            o("function" == typeof e ? e : Function(e), t);
        }, a(M), M;
    }, c = function(e) {
        delete y[e];
    }, "process" == n(58)(m) ? a = function(e) {
        m.nextTick(i(L, e, 1));
    } : f && f.now ? a = function(e) {
        f.now(i(L, e, 1));
    } : h ? (s = (r = new h).port2, r.port1.onmessage = p, a = i(s.postMessage, s, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (a = function(e) {
        u.postMessage(e + "", "*");
    }, u.addEventListener("message", p, !1)) : a = "onreadystatechange" in _("script") ? function(e) {
        d.appendChild(_("script")).onreadystatechange = function() {
            d.removeChild(this), L.call(e);
        };
    } : function(e) {
        setTimeout(i(L, e, 1), 0);
    }), e.exports = {
        set: l,
        clear: c
    };
}, function(e, t) {
    e.exports = function(e) {
        try {
            return {
                e: !1,
                v: e()
            };
        } catch (e) {
            return {
                e: !0,
                v: e
            };
        }
    };
}, function(e, t, n) {
    var a = n(34), r = n(39), s = n(86);
    e.exports = function(e, t) {
        if (a(e), r(t) && t.constructor === e) return t;
        var n = s.f(e);
        return (0, n.resolve)(t), n.promise;
    };
}, , function(e, t, n) {
    "use strict";
    (function(e) {
        var a = n(6), r = "object" == typeof exports && exports && !exports.nodeType && exports, s = r && "object" == typeof e && e && !e.nodeType && e, i = s && s.exports === r ? a.a.Buffer : void 0, o = i ? i.allocUnsafe : void 0;
        t.a = function(e, t) {
            if (t) return e.slice();
            var n = e.length, a = o ? o(n) : new e.constructor(n);
            return e.copy(a), a;
        };
    }).call(this, n(130)(e));
}, function(e, t, n) {
    "use strict";
    var a = n(45), r = n(60), s = n(46);
    t.a = function(e) {
        return "function" != typeof e.constructor || Object(s.a)(e) ? {} : Object(a.a)(Object(r.a)(e));
    };
}, function(e, t, n) {
    "use strict";
    var a = n(20), r = n(7);
    t.a = function(e, t) {
        return e && Object(a.a)(t, Object(r.a)(t), e);
    };
}, function(e, t, n) {
    "use strict";
    var a = n(71);
    t.a = function(e, t) {
        var n = t ? Object(a.a)(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length);
    };
}, function(e, t, n) {
    "use strict";
    var a, r = n(23), s = n(75), i = (a = /[^.]+$/.exec(s.a && s.a.keys && s.a.keys.IE_PROTO || "")) ? "Symbol(src)_1." + a : "", d = n(3), _ = n(47), u = /^\[object .+?Constructor\]$/, m = Function.prototype, l = Object.prototype, c = m.toString, h = l.hasOwnProperty, f = RegExp("^" + c.call(h).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.a = function(e) {
        return !(!Object(d.a)(e) || function(e) {
            return !!i && i in e;
        }(e)) && (Object(r.a)(e) ? f : u).test(Object(_.a)(e));
    };
}, function(e, t) {}, function(e, t, n) {
    var a = n(34), r = n(177), s = n(97), i = n(84)("IE_PROTO"), o = function() {}, d = function() {
        var e, t = n(81)("iframe"), a = s.length;
        for (t.style.display = "none", n(116).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), 
        e.write("<script>document.F=Object<\/script>"), e.close(), d = e.F; a--; ) delete d.prototype[s[a]];
        return d();
    };
    e.exports = Object.create || function(e, t) {
        var n;
        return null !== e ? (o.prototype = a(e), n = new o, o.prototype = null, n[i] = e) : n = d(), 
        void 0 === t ? n : r(n, t);
    };
}, function(e, t) {
    e.exports = function(e) {
        if (!e.webpackPolyfill) {
            var t = Object.create(e);
            t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l;
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i;
                }
            }), Object.defineProperty(t, "exports", {
                enumerable: !0
            }), t.webpackPolyfill = 1;
        }
        return t;
    };
}, function(e, t, n) {
    var a = n(48), r = n(132), s = n(133), i = n(34), o = n(94), d = n(117), _ = {}, u = {};
    (t = e.exports = function(e, t, n, m, l) {
        var c, h, f, M, y = l ? function() {
            return e;
        } : d(e), L = a(n, m, t ? 2 : 1), p = 0;
        if ("function" != typeof y) throw TypeError(e + " is not iterable!");
        if (s(y)) {
            for (c = o(e.length); c > p; p++) if ((M = t ? L(i(h = e[p])[0], h[1]) : L(e[p])) === _ || M === u) return M;
        } else for (f = y.call(e); !(h = f.next()).done; ) if ((M = r(f, L, h.value, t)) === _ || M === u) return M;
    }).BREAK = _, t.RETURN = u;
}, function(e, t, n) {
    var a = n(34);
    e.exports = function(e, t, n, r) {
        try {
            return r ? t(a(n)[0], n[1]) : t(n);
        } catch (t) {
            var s = e.return;
            throw void 0 !== s && a(s.call(e)), t;
        }
    };
}, function(e, t, n) {
    var a = n(50), r = n(17)("iterator"), s = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (a.Array === e || s[r] === e);
    };
}, function(e, t, n) {
    var a = n(17)("iterator"), r = !1;
    try {
        var s = [ 7 ][a]();
        s.return = function() {
            r = !0;
        }, Array.from(s, (function() {
            throw 2;
        }));
    } catch (e) {}
    e.exports = function(e, t) {
        if (!t && !r) return !1;
        var n = !1;
        try {
            var s = [ 7 ], i = s[a]();
            i.next = function() {
                return {
                    done: n = !0
                };
            }, s[a] = function() {
                return i;
            }, e(s);
        } catch (e) {}
        return n;
    };
}, function(e, t, n) {
    "use strict";
    (function(t) {
        var a = n(36), r = n(238), s = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        function i(e, t) {
            !a.isUndefined(e) && a.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
        }
        var o, d = {
            adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== t) && (o = n(190)), 
            o),
            transformRequest: [ function(e, t) {
                return r(t, "Content-Type"), a.isFormData(e) || a.isArrayBuffer(e) || a.isBuffer(e) || a.isStream(e) || a.isFile(e) || a.isBlob(e) ? e : a.isArrayBufferView(e) ? e.buffer : a.isURLSearchParams(e) ? (i(t, "application/x-www-form-urlencoded;charset=utf-8"), 
                e.toString()) : a.isObject(e) ? (i(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e;
            } ],
            transformResponse: [ function(e) {
                if ("string" == typeof e) try {
                    e = JSON.parse(e);
                } catch (e) {}
                return e;
            } ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function(e) {
                return e >= 200 && e < 300;
            },
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                }
            }
        };
        a.forEach([ "delete", "get", "head" ], (function(e) {
            d.headers[e] = {};
        })), a.forEach([ "post", "put", "patch" ], (function(e) {
            d.headers[e] = a.merge(s);
        })), e.exports = d;
    }).call(this, n(215));
}, , function(e, t, n) {
    e.exports = !n(42) && !n(57)((function() {
        return 7 != Object.defineProperty(n(81)("div"), "a", {
            get: function() {
                return 7;
            }
        }).a;
    }));
}, function(e, t, n) {
    e.exports = n(40);
}, function(e, t, n) {
    var a = n(49), r = n(56), s = n(178)(!1), i = n(84)("IE_PROTO");
    e.exports = function(e, t) {
        var n, o = r(e), d = 0, _ = [];
        for (n in o) n != i && a(o, n) && _.push(n);
        for (;t.length > d; ) a(o, n = t[d++]) && (~s(_, n) || _.push(n));
        return _;
    };
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t) {
    e.exports = function(e, t, n, a) {
        if (!(e instanceof t) || void 0 !== a && a in e) throw TypeError(n + ": incorrect invocation!");
        return e;
    };
}, function(e, t, n) {
    var a = n(40);
    e.exports = function(e, t, n) {
        for (var r in t) n && e[r] ? e[r] = t[r] : a(e, r, t[r]);
        return e;
    };
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            value: t,
            done: !!e
        };
    };
}, function(e, t, n) {
    "use strict";
    var a = n(12), r = n(15), s = n(41), i = n(42), o = n(17)("species");
    e.exports = function(e) {
        var t = "function" == typeof r[e] ? r[e] : a[e];
        i && t && !t[o] && s.f(t, o, {
            configurable: !0,
            get: function() {
                return this;
            }
        });
    };
}, , , function(e, t, n) {
    n(128), n(76), n(98), n(183), n(187), n(188), e.exports = n(15).Promise;
}, function(e, t, n) {
    var a = n(82), r = n(83);
    e.exports = function(e) {
        return function(t, n) {
            var s, i, o = String(r(t)), d = a(n), _ = o.length;
            return d < 0 || d >= _ ? e ? "" : void 0 : (s = o.charCodeAt(d)) < 55296 || s > 56319 || d + 1 === _ || (i = o.charCodeAt(d + 1)) < 56320 || i > 57343 ? e ? o.charAt(d) : s : e ? o.slice(d, d + 2) : i - 56320 + (s - 55296 << 10) + 65536;
        };
    };
}, function(e, t, n) {
    "use strict";
    var a = n(129), r = n(68), s = n(69), i = {};
    n(40)(i, n(17)("iterator"), (function() {
        return this;
    })), e.exports = function(e, t, n) {
        e.prototype = a(i, {
            next: r(1, n)
        }), s(e, t + " Iterator");
    };
}, function(e, t, n) {
    var a = n(41), r = n(34), s = n(72);
    e.exports = n(42) ? Object.defineProperties : function(e, t) {
        r(e);
        for (var n, i = s(t), o = i.length, d = 0; o > d; ) a.f(e, n = i[d++], t[n]);
        return e;
    };
}, function(e, t, n) {
    var a = n(56), r = n(94), s = n(179);
    e.exports = function(e) {
        return function(t, n, i) {
            var o, d = a(t), _ = r(d.length), u = s(i, _);
            if (e && n != n) {
                for (;_ > u; ) if ((o = d[u++]) != o) return !0;
            } else for (;_ > u; u++) if ((e || u in d) && d[u] === n) return e || u || 0;
            return !e && -1;
        };
    };
}, function(e, t, n) {
    var a = n(82), r = Math.max, s = Math.min;
    e.exports = function(e, t) {
        return (e = a(e)) < 0 ? r(e + t, 0) : s(e, t);
    };
}, function(e, t, n) {
    var a = n(49), r = n(77), s = n(84)("IE_PROTO"), i = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = r(e), a(e, s) ? e[s] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? i : null;
    };
}, function(e, t, n) {
    "use strict";
    var a = n(182), r = n(170), s = n(50), i = n(56);
    e.exports = n(112)(Array, "Array", (function(e, t) {
        this._t = i(e), this._i = 0, this._k = t;
    }), (function() {
        var e = this._t, t = this._k, n = this._i++;
        return !e || n >= e.length ? (this._t = void 0, r(1)) : r(0, "keys" == t ? n : "values" == t ? e[n] : [ n, e[n] ]);
    }), "values"), s.Arguments = s.Array, a("keys"), a("values"), a("entries");
}, function(e, t) {
    e.exports = function() {};
}, function(e, t, n) {
    "use strict";
    var a, r, s, i, o = n(65), d = n(12), _ = n(48), u = n(99), m = n(33), l = n(39), c = n(62), h = n(168), f = n(131), M = n(118), y = n(119).set, L = n(185)(), p = n(86), Y = n(120), k = n(186), g = n(121), D = d.TypeError, v = d.process, T = v && v.versions, w = T && T.v8 || "", b = d.Promise, S = "process" == u(v), j = function() {}, H = r = p.f, x = !!function() {
        try {
            var e = b.resolve(1), t = (e.constructor = {})[n(17)("species")] = function(e) {
                e(j, j);
            };
            return (S || "function" == typeof PromiseRejectionEvent) && e.then(j) instanceof t && 0 !== w.indexOf("6.6") && -1 === k.indexOf("Chrome/66");
        } catch (e) {}
    }(), O = function(e) {
        var t;
        return !(!l(e) || "function" != typeof (t = e.then)) && t;
    }, P = function(e, t) {
        if (!e._n) {
            e._n = !0;
            var n = e._c;
            L((function() {
                for (var a = e._v, r = 1 == e._s, s = 0, i = function(t) {
                    var n, s, i, o = r ? t.ok : t.fail, d = t.resolve, _ = t.reject, u = t.domain;
                    try {
                        o ? (r || (2 == e._h && E(e), e._h = 1), !0 === o ? n = a : (u && u.enter(), n = o(a), 
                        u && (u.exit(), i = !0)), n === t.promise ? _(D("Promise-chain cycle")) : (s = O(n)) ? s.call(n, d, _) : d(n)) : _(a);
                    } catch (e) {
                        u && !i && u.exit(), _(e);
                    }
                }; n.length > s; ) i(n[s++]);
                e._c = [], e._n = !1, t && !e._h && A(e);
            }));
        }
    }, A = function(e) {
        y.call(d, (function() {
            var t, n, a, r = e._v, s = W(e);
            if (s && (t = Y((function() {
                S ? v.emit("unhandledRejection", r, e) : (n = d.onunhandledrejection) ? n({
                    promise: e,
                    reason: r
                }) : (a = d.console) && a.error && a.error("Unhandled promise rejection", r);
            })), e._h = S || W(e) ? 2 : 1), e._a = void 0, s && t.e) throw t.v;
        }));
    }, W = function(e) {
        return 1 !== e._h && 0 === (e._a || e._c).length;
    }, E = function(e) {
        y.call(d, (function() {
            var t;
            S ? v.emit("rejectionHandled", e) : (t = d.onrejectionhandled) && t({
                promise: e,
                reason: e._v
            });
        }));
    }, F = function(e) {
        var t = this;
        t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), 
        P(t, !0));
    }, z = function(e) {
        var t, n = this;
        if (!n._d) {
            n._d = !0, n = n._w || n;
            try {
                if (n === e) throw D("Promise can't be resolved itself");
                (t = O(e)) ? L((function() {
                    var a = {
                        _w: n,
                        _d: !1
                    };
                    try {
                        t.call(e, _(z, a, 1), _(F, a, 1));
                    } catch (e) {
                        F.call(a, e);
                    }
                })) : (n._v = e, n._s = 1, P(n, !1));
            } catch (e) {
                F.call({
                    _w: n,
                    _d: !1
                }, e);
            }
        }
    };
    x || (b = function(e) {
        h(this, b, "Promise", "_h"), c(e), a.call(this);
        try {
            e(_(z, this, 1), _(F, this, 1));
        } catch (e) {
            F.call(this, e);
        }
    }, (a = function(e) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, 
        this._n = !1;
    }).prototype = n(169)(b.prototype, {
        then: function(e, t) {
            var n = H(M(this, b));
            return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, 
            n.domain = S ? v.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && P(this, !1), 
            n.promise;
        },
        catch: function(e) {
            return this.then(void 0, e);
        }
    }), s = function() {
        var e = new a;
        this.promise = e, this.resolve = _(z, e, 1), this.reject = _(F, e, 1);
    }, p.f = H = function(e) {
        return e === b || e === i ? new s(e) : r(e);
    }), m(m.G + m.W + m.F * !x, {
        Promise: b
    }), n(69)(b, "Promise"), n(171)("Promise"), i = n(15).Promise, m(m.S + m.F * !x, "Promise", {
        reject: function(e) {
            var t = H(this);
            return (0, t.reject)(e), t.promise;
        }
    }), m(m.S + m.F * (o || !x), "Promise", {
        resolve: function(e) {
            return g(o && this === i ? b : this, e);
        }
    }), m(m.S + m.F * !(x && n(134)((function(e) {
        b.all(e).catch(j);
    }))), "Promise", {
        all: function(e) {
            var t = this, n = H(t), a = n.resolve, r = n.reject, s = Y((function() {
                var n = [], s = 0, i = 1;
                f(e, !1, (function(e) {
                    var o = s++, d = !1;
                    n.push(void 0), i++, t.resolve(e).then((function(e) {
                        d || (d = !0, n[o] = e, --i || a(n));
                    }), r);
                })), --i || a(n);
            }));
            return s.e && r(s.v), n.promise;
        },
        race: function(e) {
            var t = this, n = H(t), a = n.reject, r = Y((function() {
                f(e, !1, (function(e) {
                    t.resolve(e).then(n.resolve, a);
                }));
            }));
            return r.e && a(r.v), n.promise;
        }
    });
}, function(e, t) {
    e.exports = function(e, t, n) {
        var a = void 0 === n;
        switch (t.length) {
          case 0:
            return a ? e() : e.call(n);

          case 1:
            return a ? e(t[0]) : e.call(n, t[0]);

          case 2:
            return a ? e(t[0], t[1]) : e.call(n, t[0], t[1]);

          case 3:
            return a ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);

          case 4:
            return a ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]);
        }
        return e.apply(n, t);
    };
}, function(e, t, n) {
    var a = n(12), r = n(119).set, s = a.MutationObserver || a.WebKitMutationObserver, i = a.process, o = a.Promise, d = "process" == n(58)(i);
    e.exports = function() {
        var e, t, n, _ = function() {
            var a, r;
            for (d && (a = i.domain) && a.exit(); e; ) {
                r = e.fn, e = e.next;
                try {
                    r();
                } catch (a) {
                    throw e ? n() : t = void 0, a;
                }
            }
            t = void 0, a && a.enter();
        };
        if (d) n = function() {
            i.nextTick(_);
        }; else if (!s || a.navigator && a.navigator.standalone) if (o && o.resolve) {
            var u = o.resolve(void 0);
            n = function() {
                u.then(_);
            };
        } else n = function() {
            r.call(a, _);
        }; else {
            var m = !0, l = document.createTextNode("");
            new s(_).observe(l, {
                characterData: !0
            }), n = function() {
                l.data = m = !m;
            };
        }
        return function(a) {
            var r = {
                fn: a,
                next: void 0
            };
            t && (t.next = r), e || (e = r, n()), t = r;
        };
    };
}, function(e, t, n) {
    var a = n(12).navigator;
    e.exports = a && a.userAgent || "";
}, function(e, t, n) {
    "use strict";
    var a = n(33), r = n(15), s = n(12), i = n(118), o = n(121);
    a(a.P + a.R, "Promise", {
        finally: function(e) {
            var t = i(this, r.Promise || s.Promise), n = "function" == typeof e;
            return this.then(n ? function(n) {
                return o(t, e()).then((function() {
                    return n;
                }));
            } : e, n ? function(n) {
                return o(t, e()).then((function() {
                    throw n;
                }));
            } : e);
        }
    });
}, function(e, t, n) {
    "use strict";
    var a = n(33), r = n(86), s = n(120);
    a(a.S, "Promise", {
        try: function(e) {
            var t = r.f(this), n = s(e);
            return (n.e ? t.reject : t.resolve)(n.v), t.promise;
        }
    });
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        return function() {
            for (var n = new Array(arguments.length), a = 0; a < n.length; a++) n[a] = arguments[a];
            return e.apply(t, n);
        };
    };
}, function(e, t, n) {
    "use strict";
    var a = n(36), r = n(239), s = n(241), i = n(242), o = n(243), d = n(191);
    e.exports = function(e) {
        return new Promise((function(t, _) {
            var u = e.data, m = e.headers;
            a.isFormData(u) && delete m["Content-Type"];
            var l = new XMLHttpRequest;
            if (e.auth) {
                var c = e.auth.username || "", h = e.auth.password || "";
                m.Authorization = "Basic " + btoa(c + ":" + h);
            }
            if (l.open(e.method.toUpperCase(), s(e.url, e.params, e.paramsSerializer), !0), 
            l.timeout = e.timeout, l.onreadystatechange = function() {
                if (l && 4 === l.readyState && (0 !== l.status || l.responseURL && 0 === l.responseURL.indexOf("file:"))) {
                    var n = "getAllResponseHeaders" in l ? i(l.getAllResponseHeaders()) : null, a = {
                        data: e.responseType && "text" !== e.responseType ? l.response : l.responseText,
                        status: l.status,
                        statusText: l.statusText,
                        headers: n,
                        config: e,
                        request: l
                    };
                    r(t, _, a), l = null;
                }
            }, l.onerror = function() {
                _(d("Network Error", e, null, l)), l = null;
            }, l.ontimeout = function() {
                _(d("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", l)), l = null;
            }, a.isStandardBrowserEnv()) {
                var f = n(244), M = (e.withCredentials || o(e.url)) && e.xsrfCookieName ? f.read(e.xsrfCookieName) : void 0;
                M && (m[e.xsrfHeaderName] = M);
            }
            if ("setRequestHeader" in l && a.forEach(m, (function(e, t) {
                void 0 === u && "content-type" === t.toLowerCase() ? delete m[t] : l.setRequestHeader(t, e);
            })), e.withCredentials && (l.withCredentials = !0), e.responseType) try {
                l.responseType = e.responseType;
            } catch (t) {
                if ("json" !== e.responseType) throw t;
            }
            "function" == typeof e.onDownloadProgress && l.addEventListener("progress", e.onDownloadProgress), 
            "function" == typeof e.onUploadProgress && l.upload && l.upload.addEventListener("progress", e.onUploadProgress), 
            e.cancelToken && e.cancelToken.promise.then((function(e) {
                l && (l.abort(), _(e), l = null);
            })), void 0 === u && (u = null), l.send(u);
        }));
    };
}, function(e, t, n) {
    "use strict";
    var a = n(240);
    e.exports = function(e, t, n, r, s) {
        var i = new Error(e);
        return a(i, t, n, r, s);
    };
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return !(!e || !e.__CANCEL__);
    };
}, function(e, t, n) {
    "use strict";
    function a(e) {
        this.message = e;
    }
    a.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "");
    }, a.prototype.__CANCEL__ = !0, e.exports = a;
}, , , , , , , , , , , , , , , , , , , , , , function(e, t) {
    var n, a, r = e.exports = {};
    function s() {
        throw new Error("setTimeout has not been defined");
    }
    function i() {
        throw new Error("clearTimeout has not been defined");
    }
    function o(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === s || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0);
        } catch (t) {
            try {
                return n.call(null, e, 0);
            } catch (t) {
                return n.call(this, e, 0);
            }
        }
    }
    !function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : s;
        } catch (e) {
            n = s;
        }
        try {
            a = "function" == typeof clearTimeout ? clearTimeout : i;
        } catch (e) {
            a = i;
        }
    }();
    var d, _ = [], u = !1, m = -1;
    function l() {
        u && d && (u = !1, d.length ? _ = d.concat(_) : m = -1, _.length && c());
    }
    function c() {
        if (!u) {
            var e = o(l);
            u = !0;
            for (var t = _.length; t; ) {
                for (d = _, _ = []; ++m < t; ) d && d[m].run();
                m = -1, t = _.length;
            }
            d = null, u = !1, function(e) {
                if (a === clearTimeout) return clearTimeout(e);
                if ((a === i || !a) && clearTimeout) return a = clearTimeout, clearTimeout(e);
                try {
                    a(e);
                } catch (t) {
                    try {
                        return a.call(null, e);
                    } catch (t) {
                        return a.call(this, e);
                    }
                }
            }(e);
        }
    }
    function h(e, t) {
        this.fun = e, this.array = t;
    }
    function f() {}
    r.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        _.push(new h(e, t)), 1 !== _.length || u || o(c);
    }, h.prototype.run = function() {
        this.fun.apply(null, this.array);
    }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", 
    r.versions = {}, r.on = f, r.addListener = f, r.once = f, r.off = f, r.removeListener = f, 
    r.removeAllListeners = f, r.emit = f, r.prependListener = f, r.prependOnceListener = f, 
    r.listeners = function(e) {
        return [];
    }, r.binding = function(e) {
        throw new Error("process.binding is not supported");
    }, r.cwd = function() {
        return "/";
    }, r.chdir = function(e) {
        throw new Error("process.chdir is not supported");
    }, r.umask = function() {
        return 0;
    };
}, , function(e, t, n) {
    e.exports = {
        default: n(232),
        __esModule: !0
    };
}, , , , , , , function(e, t, n) {
    e.exports = {
        default: n(230),
        __esModule: !0
    };
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(n(95)), r = i(n(231));
    t.getBookmarksFromTree = o, t.processTree = function(e) {
        return new a.default((function(t, n) {
            for (var r = [], s = o(e), i = 0; i < s.length; i++) r.push(d(s[i]));
            a.default.all(r).then((function() {
                t(e);
            }));
        }));
    }, t.setRootFlags = function(e) {
        e.tree_root = !0, e.children.forEach((function(e) {
            e.root = !0;
        }));
    }, t.collapseFolders = function e(t) {
        t.children && (t.root || t.tree_root || t.children.length > 0 && (t.collapsed = !0), 
        t.children.forEach((function(t) {
            t.root || t.tree_root ? e(t) : t.children && t.children.length > 0 && (t.collapsed = !0, 
            e(t));
        })));
    }, t.expandFolders = function e(t) {
        t.children && (t.root || t.tree_root || (t.collapsed = !1), t.children.forEach((function(t) {
            t.root || t.tree_root ? e(t) : t.children && (t.collapsed = !1, e(t));
        })));
    }, t.processBookmark = d, t.removeBookmarkFromTreeById = function e(t, n) {
        for (var a = 0; a < t.children.length; a++) t.children[a].id == n && t.children.splice(a, 1), 
        t.children && t.children[a] && t.children[a].children && e(t.children[a], n);
    }, t.editBookmarkById = function e(t, n) {
        for (var a = 0; a < t.children.length; a++) t.children[a].url && t.children[a].id == n.id && (n.url || (n.url = "http://"), 
        t.children[a].title = n.title, t.children[a].url = n.url), t.children[a].children && e(t.children[a], n);
    };
    var s = n(87);
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e) {
        for (var t = [], n = 0; n < e.children.length; n++) if (e.children[n].url && t.push(e.children[n]), 
        e.children[n].children) {
            var a = o(e.children[n]);
            a && t.push.apply(t, (0, r.default)(a));
        }
        return t;
    }
    function d(e) {
        return new a.default((function(t, n) {
            (0, s.toDataURL)("chrome://favicon/size/16@1x/" + e.url).then((function(n) {
                e.icon = n, e.id = (0, s.generateID)(), t();
            }));
        }));
    }
}, function(e, t, n) {
    e.exports = n(235);
}, , , , function(e, t, n) {
    var a = n(15), r = a.JSON || (a.JSON = {
        stringify: JSON.stringify
    });
    e.exports = function(e) {
        return r.stringify.apply(r, arguments);
    };
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var a, s = (a = n(217)) && a.__esModule ? a : {
        default: a
    };
    t.default = function(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n;
        }
        return (0, s.default)(e);
    };
}, function(e, t, n) {
    n(76), n(233), e.exports = n(15).Array.from;
}, function(e, t, n) {
    "use strict";
    var a = n(48), r = n(33), s = n(77), i = n(132), o = n(133), d = n(94), _ = n(234), u = n(117);
    r(r.S + r.F * !n(134)((function(e) {
        Array.from(e);
    })), "Array", {
        from: function(e) {
            var t, n, r, m, l = s(e), c = "function" == typeof this ? this : Array, h = arguments.length, f = h > 1 ? arguments[1] : void 0, M = void 0 !== f, y = 0, L = u(l);
            if (M && (f = a(f, h > 2 ? arguments[2] : void 0, 2)), null == L || c == Array && o(L)) for (n = new c(t = d(l.length)); t > y; y++) _(n, y, M ? f(l[y], y) : l[y]); else for (m = L.call(l), 
            n = new c; !(r = m.next()).done; y++) _(n, y, M ? i(m, f, [ r.value, y ], !0) : r.value);
            return n.length = y, n;
        }
    });
}, function(e, t, n) {
    "use strict";
    var a = n(41), r = n(68);
    e.exports = function(e, t, n) {
        t in e ? a.f(e, t, r(0, n)) : e[t] = n;
    };
}, function(e, t, n) {
    "use strict";
    var a = n(36), r = n(189), s = n(237), i = n(135);
    function o(e) {
        var t = new s(e), n = r(s.prototype.request, t);
        return a.extend(n, s.prototype, t), a.extend(n, t), n;
    }
    var d = o(i);
    d.Axios = s, d.create = function(e) {
        return o(a.merge(i, e));
    }, d.Cancel = n(193), d.CancelToken = n(250), d.isCancel = n(192), d.all = function(e) {
        return Promise.all(e);
    }, d.spread = n(251), e.exports = d, e.exports.default = d;
}, function(e, t) {
    /*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
    e.exports = function(e) {
        return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
    };
}, function(e, t, n) {
    "use strict";
    var a = n(135), r = n(36), s = n(245), i = n(246);
    function o(e) {
        this.defaults = e, this.interceptors = {
            request: new s,
            response: new s
        };
    }
    o.prototype.request = function(e) {
        "string" == typeof e && (e = r.merge({
            url: arguments[0]
        }, arguments[1])), (e = r.merge(a, {
            method: "get"
        }, this.defaults, e)).method = e.method.toLowerCase();
        var t = [ i, void 0 ], n = Promise.resolve(e);
        for (this.interceptors.request.forEach((function(e) {
            t.unshift(e.fulfilled, e.rejected);
        })), this.interceptors.response.forEach((function(e) {
            t.push(e.fulfilled, e.rejected);
        })); t.length; ) n = n.then(t.shift(), t.shift());
        return n;
    }, r.forEach([ "delete", "get", "head", "options" ], (function(e) {
        o.prototype[e] = function(t, n) {
            return this.request(r.merge(n || {}, {
                method: e,
                url: t
            }));
        };
    })), r.forEach([ "post", "put", "patch" ], (function(e) {
        o.prototype[e] = function(t, n, a) {
            return this.request(r.merge(a || {}, {
                method: e,
                url: t,
                data: n
            }));
        };
    })), e.exports = o;
}, function(e, t, n) {
    "use strict";
    var a = n(36);
    e.exports = function(e, t) {
        a.forEach(e, (function(n, a) {
            a !== t && a.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[a]);
        }));
    };
}, function(e, t, n) {
    "use strict";
    var a = n(191);
    e.exports = function(e, t, n) {
        var r = n.config.validateStatus;
        n.status && r && !r(n.status) ? t(a("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n);
    };
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n, a, r) {
        return e.config = t, n && (e.code = n), e.request = a, e.response = r, e;
    };
}, function(e, t, n) {
    "use strict";
    var a = n(36);
    function r(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    e.exports = function(e, t, n) {
        if (!t) return e;
        var s;
        if (n) s = n(t); else if (a.isURLSearchParams(t)) s = t.toString(); else {
            var i = [];
            a.forEach(t, (function(e, t) {
                null != e && (a.isArray(e) ? t += "[]" : e = [ e ], a.forEach(e, (function(e) {
                    a.isDate(e) ? e = e.toISOString() : a.isObject(e) && (e = JSON.stringify(e)), i.push(r(t) + "=" + r(e));
                })));
            })), s = i.join("&");
        }
        return s && (e += (-1 === e.indexOf("?") ? "?" : "&") + s), e;
    };
}, function(e, t, n) {
    "use strict";
    var a = n(36), r = [ "age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent" ];
    e.exports = function(e) {
        var t, n, s, i = {};
        return e ? (a.forEach(e.split("\n"), (function(e) {
            if (s = e.indexOf(":"), t = a.trim(e.substr(0, s)).toLowerCase(), n = a.trim(e.substr(s + 1)), 
            t) {
                if (i[t] && r.indexOf(t) >= 0) return;
                i[t] = "set-cookie" === t ? (i[t] ? i[t] : []).concat([ n ]) : i[t] ? i[t] + ", " + n : n;
            }
        })), i) : i;
    };
}, function(e, t, n) {
    "use strict";
    var a = n(36);
    e.exports = a.isStandardBrowserEnv() ? function() {
        var e, t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
        function r(e) {
            var a = e;
            return t && (n.setAttribute("href", a), a = n.href), n.setAttribute("href", a), 
            {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
            };
        }
        return e = r(window.location.href), function(t) {
            var n = a.isString(t) ? r(t) : t;
            return n.protocol === e.protocol && n.host === e.host;
        };
    }() : function() {
        return !0;
    };
}, function(e, t, n) {
    "use strict";
    var a = n(36);
    e.exports = a.isStandardBrowserEnv() ? {
        write: function(e, t, n, r, s, i) {
            var o = [];
            o.push(e + "=" + encodeURIComponent(t)), a.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), 
            a.isString(r) && o.push("path=" + r), a.isString(s) && o.push("domain=" + s), !0 === i && o.push("secure"), 
            document.cookie = o.join("; ");
        },
        read: function(e) {
            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null;
        },
        remove: function(e) {
            this.write(e, "", Date.now() - 864e5);
        }
    } : {
        write: function() {},
        read: function() {
            return null;
        },
        remove: function() {}
    };
}, function(e, t, n) {
    "use strict";
    var a = n(36);
    function r() {
        this.handlers = [];
    }
    r.prototype.use = function(e, t) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t
        }), this.handlers.length - 1;
    }, r.prototype.eject = function(e) {
        this.handlers[e] && (this.handlers[e] = null);
    }, r.prototype.forEach = function(e) {
        a.forEach(this.handlers, (function(t) {
            null !== t && e(t);
        }));
    }, e.exports = r;
}, function(e, t, n) {
    "use strict";
    var a = n(36), r = n(247), s = n(192), i = n(135), o = n(248), d = n(249);
    function _(e) {
        e.cancelToken && e.cancelToken.throwIfRequested();
    }
    e.exports = function(e) {
        return _(e), e.baseURL && !o(e.url) && (e.url = d(e.baseURL, e.url)), e.headers = e.headers || {}, 
        e.data = r(e.data, e.headers, e.transformRequest), e.headers = a.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), 
        a.forEach([ "delete", "get", "head", "post", "put", "patch", "common" ], (function(t) {
            delete e.headers[t];
        })), (e.adapter || i.adapter)(e).then((function(t) {
            return _(e), t.data = r(t.data, t.headers, e.transformResponse), t;
        }), (function(t) {
            return s(t) || (_(e), t && t.response && (t.response.data = r(t.response.data, t.response.headers, e.transformResponse))), 
            Promise.reject(t);
        }));
    };
}, function(e, t, n) {
    "use strict";
    var a = n(36);
    e.exports = function(e, t, n) {
        return a.forEach(n, (function(n) {
            e = n(e, t);
        })), e;
    };
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
    };
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
    };
}, function(e, t, n) {
    "use strict";
    var a = n(193);
    function r(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise((function(e) {
            t = e;
        }));
        var n = this;
        e((function(e) {
            n.reason || (n.reason = new a(e), t(n.reason));
        }));
    }
    r.prototype.throwIfRequested = function() {
        if (this.reason) throw this.reason;
    }, r.source = function() {
        var e;
        return {
            token: new r((function(t) {
                e = t;
            })),
            cancel: e
        };
    }, e.exports = r;
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return function(t) {
            return e.apply(null, t);
        };
    };
}, , , , , , , , , , , , , , , , , , function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("af", {
            months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
            weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
            weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
            meridiemParse: /vm|nm/i,
            isPM: function(e) {
                return /^nm$/i.test(e);
            },
            meridiem: function(e, t, n) {
                return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM";
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Vandag om] LT",
                nextDay: "[M??re om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[Gister om] LT",
                lastWeek: "[Laas] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oor %s",
                past: "%s gelede",
                s: "'n paar sekondes",
                ss: "%d sekondes",
                m: "'n minuut",
                mm: "%d minute",
                h: "'n uur",
                hh: "%d ure",
                d: "'n dag",
                dd: "%d dae",
                M: "'n maand",
                MM: "%d maande",
                y: "'n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "??",
            2: "??",
            3: "??",
            4: "??",
            5: "??",
            6: "??",
            7: "??",
            8: "??",
            9: "??",
            0: "??"
        }, n = {
            "??": "1",
            "??": "2",
            "??": "3",
            "??": "4",
            "??": "5",
            "??": "6",
            "??": "7",
            "??": "8",
            "??": "9",
            "??": "0"
        }, a = function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
        }, r = {
            s: [ "?????? ???? ??????????", "?????????? ??????????", [ "??????????????", "??????????????" ], "%d ????????", "%d ??????????", "%d ??????????" ],
            m: [ "?????? ???? ??????????", "?????????? ??????????", [ "??????????????", "??????????????" ], "%d ??????????", "%d ??????????", "%d ??????????" ],
            h: [ "?????? ???? ????????", "???????? ??????????", [ "????????????", "????????????" ], "%d ??????????", "%d ????????", "%d ????????" ],
            d: [ "?????? ???? ??????", "?????? ????????", [ "??????????", "??????????" ], "%d ????????", "%d ??????????", "%d ??????" ],
            M: [ "?????? ???? ??????", "?????? ????????", [ "??????????", "??????????" ], "%d ????????", "%d ????????", "%d ??????" ],
            y: [ "?????? ???? ??????", "?????? ????????", [ "??????????", "??????????" ], "%d ??????????", "%d ??????????", "%d ??????" ]
        }, s = function(e) {
            return function(t, n, s, i) {
                var o = a(t), d = r[e][a(t)];
                return 2 === o && (d = d[n ? 0 : 1]), d.replace(/%d/i, t);
            };
        }, i = [ "??????????", "????????????", "????????", "??????????", "????????", "??????????", "??????????", "??????????", "????????????", "????????????", "????????????", "????????????" ];
        e.defineLocale("ar", {
            months: i,
            monthsShort: i,
            weekdays: "??????????_??????????????_????????????????_????????????????_????????????_????????????_??????????".split("_"),
            weekdaysShort: "??????_??????????_????????????_????????????_????????_????????_??????".split("_"),
            weekdaysMin: "??_??_??_??_??_??_??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/???M/???YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /??|??/,
            isPM: function(e) {
                return "??" === e;
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "??" : "??";
            },
            calendar: {
                sameDay: "[?????????? ?????? ????????????] LT",
                nextDay: "[???????? ?????? ????????????] LT",
                nextWeek: "dddd [?????? ????????????] LT",
                lastDay: "[?????? ?????? ????????????] LT",
                lastWeek: "dddd [?????? ????????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "?????? %s",
                past: "?????? %s",
                s: s("s"),
                ss: s("s"),
                m: s("m"),
                mm: s("m"),
                h: s("h"),
                hh: s("h"),
                d: s("d"),
                dd: s("d"),
                M: s("M"),
                MM: s("M"),
                y: s("y"),
                yy: s("y")
            },
            preparse: function(e) {
                return e.replace(/[????????????????????]/g, (function(e) {
                    return n[e];
                })).replace(/??/g, ",");
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e];
                })).replace(/,/g, "??");
            },
            week: {
                dow: 6,
                doy: 12
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("ar-dz", {
            months: "??????????_??????????_????????_??????????_??????_????????_????????????_??????_????????????_????????????_????????????_????????????".split("_"),
            monthsShort: "??????????_??????????_????????_??????????_??????_????????_????????????_??????_????????????_????????????_????????????_????????????".split("_"),
            weekdays: "??????????_??????????????_????????????????_????????????????_????????????_????????????_??????????".split("_"),
            weekdaysShort: "??????_??????????_????????????_????????????_????????_????????_??????".split("_"),
            weekdaysMin: "????_????_??????_????_????_????_????".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[?????????? ?????? ????????????] LT",
                nextDay: "[?????? ?????? ????????????] LT",
                nextWeek: "dddd [?????? ????????????] LT",
                lastDay: "[?????? ?????? ????????????] LT",
                lastWeek: "dddd [?????? ????????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "???? %s",
                past: "?????? %s",
                s: "????????",
                ss: "%d ??????????",
                m: "??????????",
                mm: "%d ??????????",
                h: "????????",
                hh: "%d ??????????",
                d: "??????",
                dd: "%d ????????",
                M: "??????",
                MM: "%d ????????",
                y: "??????",
                yy: "%d ??????????"
            },
            week: {
                dow: 0,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("ar-kw", {
            months: "??????????_????????????_????????_??????????_??????_??????????_????????????_??????_??????????_????????????_??????????_??????????".split("_"),
            monthsShort: "??????????_????????????_????????_??????????_??????_??????????_????????????_??????_??????????_????????????_??????????_??????????".split("_"),
            weekdays: "??????????_??????????????_????????????????_????????????????_????????????_????????????_??????????".split("_"),
            weekdaysShort: "??????_??????????_????????????_????????????_????????_????????_??????".split("_"),
            weekdaysMin: "??_??_??_??_??_??_??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[?????????? ?????? ????????????] LT",
                nextDay: "[?????? ?????? ????????????] LT",
                nextWeek: "dddd [?????? ????????????] LT",
                lastDay: "[?????? ?????? ????????????] LT",
                lastWeek: "dddd [?????? ????????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "???? %s",
                past: "?????? %s",
                s: "????????",
                ss: "%d ??????????",
                m: "??????????",
                mm: "%d ??????????",
                h: "????????",
                hh: "%d ??????????",
                d: "??????",
                dd: "%d ????????",
                M: "??????",
                MM: "%d ????????",
                y: "??????",
                yy: "%d ??????????"
            },
            week: {
                dow: 0,
                doy: 12
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            0: "0"
        }, n = function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
        }, a = {
            s: [ "?????? ???? ??????????", "?????????? ??????????", [ "??????????????", "??????????????" ], "%d ????????", "%d ??????????", "%d ??????????" ],
            m: [ "?????? ???? ??????????", "?????????? ??????????", [ "??????????????", "??????????????" ], "%d ??????????", "%d ??????????", "%d ??????????" ],
            h: [ "?????? ???? ????????", "???????? ??????????", [ "????????????", "????????????" ], "%d ??????????", "%d ????????", "%d ????????" ],
            d: [ "?????? ???? ??????", "?????? ????????", [ "??????????", "??????????" ], "%d ????????", "%d ??????????", "%d ??????" ],
            M: [ "?????? ???? ??????", "?????? ????????", [ "??????????", "??????????" ], "%d ????????", "%d ????????", "%d ??????" ],
            y: [ "?????? ???? ??????", "?????? ????????", [ "??????????", "??????????" ], "%d ??????????", "%d ??????????", "%d ??????" ]
        }, r = function(e) {
            return function(t, r, s, i) {
                var o = n(t), d = a[e][n(t)];
                return 2 === o && (d = d[r ? 0 : 1]), d.replace(/%d/i, t);
            };
        }, s = [ "??????????", "????????????", "????????", "??????????", "????????", "??????????", "??????????", "??????????", "????????????", "????????????", "????????????", "????????????" ];
        e.defineLocale("ar-ly", {
            months: s,
            monthsShort: s,
            weekdays: "??????????_??????????????_????????????????_????????????????_????????????_????????????_??????????".split("_"),
            weekdaysShort: "??????_??????????_????????????_????????????_????????_????????_??????".split("_"),
            weekdaysMin: "??_??_??_??_??_??_??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/???M/???YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /??|??/,
            isPM: function(e) {
                return "??" === e;
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "??" : "??";
            },
            calendar: {
                sameDay: "[?????????? ?????? ????????????] LT",
                nextDay: "[???????? ?????? ????????????] LT",
                nextWeek: "dddd [?????? ????????????] LT",
                lastDay: "[?????? ?????? ????????????] LT",
                lastWeek: "dddd [?????? ????????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "?????? %s",
                past: "?????? %s",
                s: r("s"),
                ss: r("s"),
                m: r("m"),
                mm: r("m"),
                h: r("h"),
                hh: r("h"),
                d: r("d"),
                dd: r("d"),
                M: r("M"),
                MM: r("M"),
                y: r("y"),
                yy: r("y")
            },
            preparse: function(e) {
                return e.replace(/??/g, ",");
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e];
                })).replace(/,/g, "??");
            },
            week: {
                dow: 6,
                doy: 12
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("ar-ma", {
            months: "??????????_????????????_????????_??????????_??????_??????????_????????????_??????_??????????_????????????_??????????_??????????".split("_"),
            monthsShort: "??????????_????????????_????????_??????????_??????_??????????_????????????_??????_??????????_????????????_??????????_??????????".split("_"),
            weekdays: "??????????_??????????????_????????????????_????????????????_????????????_????????????_??????????".split("_"),
            weekdaysShort: "??????_??????????_????????????_????????????_????????_????????_??????".split("_"),
            weekdaysMin: "??_??_??_??_??_??_??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[?????????? ?????? ????????????] LT",
                nextDay: "[?????? ?????? ????????????] LT",
                nextWeek: "dddd [?????? ????????????] LT",
                lastDay: "[?????? ?????? ????????????] LT",
                lastWeek: "dddd [?????? ????????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "???? %s",
                past: "?????? %s",
                s: "????????",
                ss: "%d ??????????",
                m: "??????????",
                mm: "%d ??????????",
                h: "????????",
                hh: "%d ??????????",
                d: "??????",
                dd: "%d ????????",
                M: "??????",
                MM: "%d ????????",
                y: "??????",
                yy: "%d ??????????"
            },
            week: {
                dow: 6,
                doy: 12
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "??",
            2: "??",
            3: "??",
            4: "??",
            5: "??",
            6: "??",
            7: "??",
            8: "??",
            9: "??",
            0: "??"
        }, n = {
            "??": "1",
            "??": "2",
            "??": "3",
            "??": "4",
            "??": "5",
            "??": "6",
            "??": "7",
            "??": "8",
            "??": "9",
            "??": "0"
        };
        e.defineLocale("ar-sa", {
            months: "??????????_????????????_????????_??????????_????????_??????????_??????????_??????????_????????????_????????????_????????????_????????????".split("_"),
            monthsShort: "??????????_????????????_????????_??????????_????????_??????????_??????????_??????????_????????????_????????????_????????????_????????????".split("_"),
            weekdays: "??????????_??????????????_????????????????_????????????????_????????????_????????????_??????????".split("_"),
            weekdaysShort: "??????_??????????_????????????_????????????_????????_????????_??????".split("_"),
            weekdaysMin: "??_??_??_??_??_??_??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /??|??/,
            isPM: function(e) {
                return "??" === e;
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "??" : "??";
            },
            calendar: {
                sameDay: "[?????????? ?????? ????????????] LT",
                nextDay: "[?????? ?????? ????????????] LT",
                nextWeek: "dddd [?????? ????????????] LT",
                lastDay: "[?????? ?????? ????????????] LT",
                lastWeek: "dddd [?????? ????????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "???? %s",
                past: "?????? %s",
                s: "????????",
                ss: "%d ??????????",
                m: "??????????",
                mm: "%d ??????????",
                h: "????????",
                hh: "%d ??????????",
                d: "??????",
                dd: "%d ????????",
                M: "??????",
                MM: "%d ????????",
                y: "??????",
                yy: "%d ??????????"
            },
            preparse: function(e) {
                return e.replace(/[????????????????????]/g, (function(e) {
                    return n[e];
                })).replace(/??/g, ",");
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e];
                })).replace(/,/g, "??");
            },
            week: {
                dow: 0,
                doy: 6
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("ar-tn", {
            months: "??????????_??????????_????????_??????????_??????_????????_????????????_??????_????????????_????????????_????????????_????????????".split("_"),
            monthsShort: "??????????_??????????_????????_??????????_??????_????????_????????????_??????_????????????_????????????_????????????_????????????".split("_"),
            weekdays: "??????????_??????????????_????????????????_????????????????_????????????_????????????_??????????".split("_"),
            weekdaysShort: "??????_??????????_????????????_????????????_????????_????????_??????".split("_"),
            weekdaysMin: "??_??_??_??_??_??_??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[?????????? ?????? ????????????] LT",
                nextDay: "[?????? ?????? ????????????] LT",
                nextWeek: "dddd [?????? ????????????] LT",
                lastDay: "[?????? ?????? ????????????] LT",
                lastWeek: "dddd [?????? ????????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "???? %s",
                past: "?????? %s",
                s: "????????",
                ss: "%d ??????????",
                m: "??????????",
                mm: "%d ??????????",
                h: "????????",
                hh: "%d ??????????",
                d: "??????",
                dd: "%d ????????",
                M: "??????",
                MM: "%d ????????",
                y: "??????",
                yy: "%d ??????????"
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "-inci",
            5: "-inci",
            8: "-inci",
            70: "-inci",
            80: "-inci",
            2: "-nci",
            7: "-nci",
            20: "-nci",
            50: "-nci",
            3: "-??nc??",
            4: "-??nc??",
            100: "-??nc??",
            6: "-nc??",
            9: "-uncu",
            10: "-uncu",
            30: "-uncu",
            60: "-??nc??",
            90: "-??nc??"
        };
        e.defineLocale("az", {
            months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
            monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
            weekdays: "Bazar_Bazar ert??si_????r????nb?? ax??am??_????r????nb??_C??m?? ax??am??_C??m??_????nb??".split("_"),
            weekdaysShort: "Baz_BzE_??Ax_????r_CAx_C??m_????n".split("_"),
            weekdaysMin: "Bz_BE_??A_????_CA_C??_????".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bug??n saat] LT",
                nextDay: "[sabah saat] LT",
                nextWeek: "[g??l??n h??ft??] dddd [saat] LT",
                lastDay: "[d??n??n] LT",
                lastWeek: "[ke????n h??ft??] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s ??vv??l",
                s: "birne???? saniy??",
                ss: "%d saniy??",
                m: "bir d??qiq??",
                mm: "%d d??qiq??",
                h: "bir saat",
                hh: "%d saat",
                d: "bir g??n",
                dd: "%d g??n",
                M: "bir ay",
                MM: "%d ay",
                y: "bir il",
                yy: "%d il"
            },
            meridiemParse: /gec??|s??h??r|g??nd??z|ax??am/,
            isPM: function(e) {
                return /^(g??nd??z|ax??am)$/.test(e);
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "gec??" : e < 12 ? "s??h??r" : e < 17 ? "g??nd??z" : "ax??am";
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(??nc??|inci|nci|??nc??|nc??|uncu)/,
            ordinal: function(e) {
                if (0 === e) return e + "-??nc??";
                var n = e % 10;
                return e + (t[n] || t[e % 100 - n] || t[e >= 100 ? 100 : null]);
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n) {
            var a, r;
            return "m" === n ? t ? "??????????????" : "??????????????" : "h" === n ? t ? "??????????????" : "??????????????" : e + " " + (a = +e, 
            r = {
                ss: t ? "??????????????_??????????????_????????????" : "??????????????_??????????????_????????????",
                mm: t ? "??????????????_??????????????_????????????" : "??????????????_??????????????_????????????",
                hh: t ? "??????????????_??????????????_????????????" : "??????????????_??????????????_????????????",
                dd: "??????????_??????_????????",
                MM: "??????????_????????????_??????????????",
                yy: "??????_????????_??????????"
            }[n].split("_"), a % 10 == 1 && a % 100 != 11 ? r[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? r[1] : r[2]);
        }
        e.defineLocale("be", {
            months: {
                format: "????????????????_????????????_????????????????_??????????????????_????????????_??????????????_????????????_????????????_??????????????_??????????????????????_??????????????????_????????????".split("_"),
                standalone: "????????????????_????????_??????????????_????????????????_??????????????_??????????????_????????????_??????????????_????????????????_????????????????????_????????????????_??????????????".split("_")
            },
            monthsShort: "????????_??????_??????_????????_????????_????????_??????_????????_??????_????????_????????_????????".split("_"),
            weekdays: {
                format: "??????????????_????????????????????_??????????????_????????????_????????????_??????????????_????????????".split("_"),
                standalone: "??????????????_????????????????????_??????????????_????????????_????????????_??????????????_????????????".split("_"),
                isFormat: /\[ ?[??????] ?(?:??????????????|??????????????????)? ?\] ?dddd/
            },
            weekdaysShort: "????_????_????_????_????_????_????".split("_"),
            weekdaysMin: "????_????_????_????_????_????_????".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY ??.",
                LLL: "D MMMM YYYY ??., HH:mm",
                LLLL: "dddd, D MMMM YYYY ??., HH:mm"
            },
            calendar: {
                sameDay: "[?????????? ??] LT",
                nextDay: "[???????????? ??] LT",
                lastDay: "[?????????? ??] LT",
                nextWeek: function() {
                    return "[??] dddd [??] LT";
                },
                lastWeek: function() {
                    switch (this.day()) {
                      case 0:
                      case 3:
                      case 5:
                      case 6:
                        return "[?? ??????????????] dddd [??] LT";

                      case 1:
                      case 2:
                      case 4:
                        return "[?? ????????????] dddd [??] LT";
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "???????? %s",
                past: "%s ????????",
                s: "???????????????? ????????????",
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "??????????",
                dd: t,
                M: "??????????",
                MM: t,
                y: "??????",
                yy: t
            },
            meridiemParse: /????????|????????????|??????|????????????/,
            isPM: function(e) {
                return /^(??????|????????????)$/.test(e);
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "????????" : e < 12 ? "????????????" : e < 17 ? "??????" : "????????????";
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(??|??|????)/,
            ordinal: function(e, t) {
                switch (t) {
                  case "M":
                  case "d":
                  case "DDD":
                  case "w":
                  case "W":
                    return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-??" : e + "-??";

                  case "D":
                    return e + "-????";

                  default:
                    return e;
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("bg", {
            months: "????????????_????????????????_????????_??????????_??????_??????_??????_????????????_??????????????????_????????????????_??????????????_????????????????".split("_"),
            monthsShort: "??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdays: "????????????_????????????????????_??????????????_??????????_??????????????????_??????????_????????????".split("_"),
            weekdaysShort: "??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdaysMin: "????_????_????_????_????_????_????".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[???????? ??] LT",
                nextDay: "[???????? ??] LT",
                nextWeek: "dddd [??] LT",
                lastDay: "[?????????? ??] LT",
                lastWeek: function() {
                    switch (this.day()) {
                      case 0:
                      case 3:
                      case 6:
                        return "[?? ????????????????????] dddd [??] LT";

                      case 1:
                      case 2:
                      case 4:
                      case 5:
                        return "[?? ??????????????????] dddd [??] LT";
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "???????? %s",
                past: "?????????? %s",
                s: "?????????????? ??????????????",
                ss: "%d ??????????????",
                m: "????????????",
                mm: "%d ????????????",
                h: "??????",
                hh: "%d ????????",
                d: "??????",
                dd: "%d ??????",
                M: "??????????",
                MM: "%d ????????????",
                y: "????????????",
                yy: "%d ????????????"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(????|????|????|????|????|????)/,
            ordinal: function(e) {
                var t = e % 10, n = e % 100;
                return 0 === e ? e + "-????" : 0 === n ? e + "-????" : n > 10 && n < 20 ? e + "-????" : 1 === t ? e + "-????" : 2 === t ? e + "-????" : 7 === t || 8 === t ? e + "-????" : e + "-????";
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("bm", {
            months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_M??kalo_Zuw??nkalo_Zuluyekalo_Utikalo_S??tanburukalo_??kut??burukalo_Nowanburukalo_Desanburukalo".split("_"),
            monthsShort: "Zan_Few_Mar_Awi_M??_Zuw_Zul_Uti_S??t_??ku_Now_Des".split("_"),
            weekdays: "Kari_Nt??n??n_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
            weekdaysShort: "Kar_Nt??_Tar_Ara_Ala_Jum_Sib".split("_"),
            weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "MMMM [tile] D [san] YYYY",
                LLL: "MMMM [tile] D [san] YYYY [l??r??] HH:mm",
                LLLL: "dddd MMMM [tile] D [san] YYYY [l??r??] HH:mm"
            },
            calendar: {
                sameDay: "[Bi l??r??] LT",
                nextDay: "[Sini l??r??] LT",
                nextWeek: "dddd [don l??r??] LT",
                lastDay: "[Kunu l??r??] LT",
                lastWeek: "dddd [t??m??nen l??r??] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s k??n??",
                past: "a b?? %s b??",
                s: "sanga dama dama",
                ss: "sekondi %d",
                m: "miniti kelen",
                mm: "miniti %d",
                h: "l??r?? kelen",
                hh: "l??r?? %d",
                d: "tile kelen",
                dd: "tile %d",
                M: "kalo kelen",
                MM: "kalo %d",
                y: "san kelen",
                yy: "san %d"
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "???",
            2: "???",
            3: "???",
            4: "???",
            5: "???",
            6: "???",
            7: "???",
            8: "???",
            9: "???",
            0: "???"
        }, n = {
            "???": "1",
            "???": "2",
            "???": "3",
            "???": "4",
            "???": "5",
            "???": "6",
            "???": "7",
            "???": "8",
            "???": "9",
            "???": "0"
        };
        e.defineLocale("bn", {
            months: "????????????????????????_??????????????????????????????_???????????????_??????????????????_??????_?????????_???????????????_???????????????_??????????????????????????????_?????????????????????_?????????????????????_????????????????????????".split("_"),
            monthsShort: "????????????_?????????_???????????????_????????????_??????_?????????_?????????_??????_???????????????_???????????????_?????????_????????????".split("_"),
            weekdays: "??????????????????_??????????????????_????????????????????????_??????????????????_?????????????????????????????????_????????????????????????_??????????????????".split("_"),
            weekdaysShort: "?????????_?????????_???????????????_?????????_????????????????????????_???????????????_?????????".split("_"),
            weekdaysMin: "?????????_?????????_????????????_?????????_????????????_???????????????_?????????".split("_"),
            longDateFormat: {
                LT: "A h:mm ?????????",
                LTS: "A h:mm:ss ?????????",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm ?????????",
                LLLL: "dddd, D MMMM YYYY, A h:mm ?????????"
            },
            calendar: {
                sameDay: "[??????] LT",
                nextDay: "[????????????????????????] LT",
                nextWeek: "dddd, LT",
                lastDay: "[???????????????] LT",
                lastWeek: "[??????] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ?????????",
                past: "%s ?????????",
                s: "???????????? ?????????????????????",
                ss: "%d ?????????????????????",
                m: "?????? ???????????????",
                mm: "%d ???????????????",
                h: "?????? ???????????????",
                hh: "%d ???????????????",
                d: "?????? ?????????",
                dd: "%d ?????????",
                M: "?????? ?????????",
                MM: "%d ?????????",
                y: "?????? ?????????",
                yy: "%d ?????????"
            },
            preparse: function(e) {
                return e.replace(/[??????????????????????????????]/g, (function(e) {
                    return n[e];
                }));
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e];
                }));
            },
            meridiemParse: /?????????|????????????|???????????????|???????????????|?????????/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "?????????" === t && e >= 4 || "???????????????" === t && e < 5 || "???????????????" === t ? e + 12 : e;
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "?????????" : e < 10 ? "????????????" : e < 17 ? "???????????????" : e < 20 ? "???????????????" : "?????????";
            },
            week: {
                dow: 0,
                doy: 6
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "???",
            2: "???",
            3: "???",
            4: "???",
            5: "???",
            6: "???",
            7: "???",
            8: "???",
            9: "???",
            0: "???"
        }, n = {
            "???": "1",
            "???": "2",
            "???": "3",
            "???": "4",
            "???": "5",
            "???": "6",
            "???": "7",
            "???": "8",
            "???": "9",
            "???": "0"
        };
        e.defineLocale("bo", {
            months: "??????????????????????????????_?????????????????????????????????_?????????????????????????????????_??????????????????????????????_???????????????????????????_?????????????????????????????????_?????????????????????????????????_????????????????????????????????????_??????????????????????????????_??????????????????????????????_?????????????????????????????????????????????_?????????????????????????????????????????????".split("_"),
            monthsShort: "??????????????????????????????_?????????????????????????????????_?????????????????????????????????_??????????????????????????????_???????????????????????????_?????????????????????????????????_?????????????????????????????????_????????????????????????????????????_??????????????????????????????_??????????????????????????????_?????????????????????????????????????????????_?????????????????????????????????????????????".split("_"),
            weekdays: "???????????????????????????_???????????????????????????_????????????????????????????????????_??????????????????????????????_??????????????????????????????_??????????????????????????????_?????????????????????????????????".split("_"),
            weekdaysShort: "???????????????_???????????????_????????????????????????_??????????????????_??????????????????_??????????????????_?????????????????????".split("_"),
            weekdaysMin: "???????????????_???????????????_????????????????????????_??????????????????_??????????????????_??????????????????_?????????????????????".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[??????????????????] LT",
                nextDay: "[??????????????????] LT",
                nextWeek: "[?????????????????????????????????????????????], LT",
                lastDay: "[????????????] LT",
                lastWeek: "[??????????????????????????????????????????] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ??????",
                past: "%s ???????????????",
                s: "???????????????",
                ss: "%d ??????????????????",
                m: "??????????????????????????????",
                mm: "%d ???????????????",
                h: "?????????????????????????????????",
                hh: "%d ??????????????????",
                d: "????????????????????????",
                dd: "%d ????????????",
                M: "???????????????????????????",
                MM: "%d ????????????",
                y: "?????????????????????",
                yy: "%d ??????"
            },
            preparse: function(e) {
                return e.replace(/[??????????????????????????????]/g, (function(e) {
                    return n[e];
                }));
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e];
                }));
            },
            meridiemParse: /??????????????????|?????????????????????|?????????????????????|?????????????????????|??????????????????/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "??????????????????" === t && e >= 4 || "?????????????????????" === t && e < 5 || "?????????????????????" === t ? e + 12 : e;
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "??????????????????" : e < 10 ? "?????????????????????" : e < 17 ? "?????????????????????" : e < 20 ? "?????????????????????" : "??????????????????";
            },
            week: {
                dow: 0,
                doy: 6
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n) {
            return e + " " + function(e, t) {
                return 2 === t ? function(e) {
                    var t = {
                        m: "v",
                        b: "v",
                        d: "z"
                    };
                    return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1);
                }(e) : e;
            }({
                mm: "munutenn",
                MM: "miz",
                dd: "devezh"
            }[n], e);
        }
        e.defineLocale("br", {
            months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
            monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h[e]mm A",
                LTS: "h[e]mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [a viz] MMMM YYYY",
                LLL: "D [a viz] MMMM YYYY h[e]mm A",
                LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
            },
            calendar: {
                sameDay: "[Hiziv da] LT",
                nextDay: "[Warc'hoazh da] LT",
                nextWeek: "dddd [da] LT",
                lastDay: "[Dec'h da] LT",
                lastWeek: "dddd [paset da] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "a-benn %s",
                past: "%s 'zo",
                s: "un nebeud segondenno??",
                ss: "%d eilenn",
                m: "ur vunutenn",
                mm: t,
                h: "un eur",
                hh: "%d eur",
                d: "un devezh",
                dd: t,
                M: "ur miz",
                MM: t,
                y: "ur bloaz",
                yy: function(e) {
                    switch (function e(t) {
                        return t > 9 ? e(t % 10) : t;
                    }(e)) {
                      case 1:
                      case 3:
                      case 4:
                      case 5:
                      case 9:
                        return e + " bloaz";

                      default:
                        return e + " vloaz";
                    }
                }
            },
            dayOfMonthOrdinalParse: /\d{1,2}(a??|vet)/,
            ordinal: function(e) {
                return e + (1 === e ? "a??" : "vet");
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n) {
            var a = e + " ";
            switch (n) {
              case "ss":
                return a + (1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi");

              case "m":
                return t ? "jedna minuta" : "jedne minute";

              case "mm":
                return a + (1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta");

              case "h":
                return t ? "jedan sat" : "jednog sata";

              case "hh":
                return a + (1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati");

              case "dd":
                return a + (1 === e ? "dan" : "dana");

              case "MM":
                return a + (1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci");

              case "yy":
                return a + (1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina");
            }
        }
        e.defineLocale("bs", {
            months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_??etvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._??et._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_??e_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                      case 0:
                        return "[u] [nedjelju] [u] LT";

                      case 3:
                        return "[u] [srijedu] [u] LT";

                      case 6:
                        return "[u] [subotu] [u] LT";

                      case 1:
                      case 2:
                      case 4:
                      case 5:
                        return "[u] dddd [u] LT";
                    }
                },
                lastDay: "[ju??er u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                      case 0:
                      case 3:
                        return "[pro??lu] dddd [u] LT";

                      case 6:
                        return "[pro??le] [subote] [u] LT";

                      case 1:
                      case 2:
                      case 4:
                      case 5:
                        return "[pro??li] dddd [u] LT";
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("ca", {
            months: {
                standalone: "gener_febrer_mar??_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                format: "de gener_de febrer_de mar??_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
                isFormat: /D[oD]?(\s)+MMMM/
            },
            monthsShort: "gen._febr._mar??_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [de] YYYY",
                ll: "D MMM YYYY",
                LLL: "D MMMM [de] YYYY [a les] H:mm",
                lll: "D MMM YYYY, H:mm",
                LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
                llll: "ddd D MMM YYYY, H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT";
                },
                nextDay: function() {
                    return "[dem?? a " + (1 !== this.hours() ? "les" : "la") + "] LT";
                },
                nextWeek: function() {
                    return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT";
                },
                lastDay: function() {
                    return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT";
                },
                lastWeek: function() {
                    return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT";
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "d'aqu?? %s",
                past: "fa %s",
                s: "uns segons",
                ss: "%d segons",
                m: "un minut",
                mm: "%d minuts",
                h: "una hora",
                hh: "%d hores",
                d: "un dia",
                dd: "%d dies",
                M: "un mes",
                MM: "%d mesos",
                y: "un any",
                yy: "%d anys"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|??|a)/,
            ordinal: function(e, t) {
                var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "??";
                return "w" !== t && "W" !== t || (n = "a"), e + n;
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = "leden_??nor_b??ezen_duben_kv??ten_??erven_??ervenec_srpen_z??????_????jen_listopad_prosinec".split("_"), n = "led_??no_b??e_dub_kv??_??vn_??vc_srp_z????_????j_lis_pro".split("_"), a = [ /^led/i, /^??no/i, /^b??e/i, /^dub/i, /^kv??/i, /^(??vn|??erven$|??ervna)/i, /^(??vc|??ervenec|??ervence)/i, /^srp/i, /^z????/i, /^????j/i, /^lis/i, /^pro/i ], r = /^(leden|??nor|b??ezen|duben|kv??ten|??ervenec|??ervence|??erven|??ervna|srpen|z??????|????jen|listopad|prosinec|led|??no|b??e|dub|kv??|??vn|??vc|srp|z????|????j|lis|pro)/i;
        function s(e) {
            return e > 1 && e < 5 && 1 != ~~(e / 10);
        }
        function i(e, t, n, a) {
            var r = e + " ";
            switch (n) {
              case "s":
                return t || a ? "p??r sekund" : "p??r sekundami";

              case "ss":
                return t || a ? r + (s(e) ? "sekundy" : "sekund") : r + "sekundami";

              case "m":
                return t ? "minuta" : a ? "minutu" : "minutou";

              case "mm":
                return t || a ? r + (s(e) ? "minuty" : "minut") : r + "minutami";

              case "h":
                return t ? "hodina" : a ? "hodinu" : "hodinou";

              case "hh":
                return t || a ? r + (s(e) ? "hodiny" : "hodin") : r + "hodinami";

              case "d":
                return t || a ? "den" : "dnem";

              case "dd":
                return t || a ? r + (s(e) ? "dny" : "dn??") : r + "dny";

              case "M":
                return t || a ? "m??s??c" : "m??s??cem";

              case "MM":
                return t || a ? r + (s(e) ? "m??s??ce" : "m??s??c??") : r + "m??s??ci";

              case "y":
                return t || a ? "rok" : "rokem";

              case "yy":
                return t || a ? r + (s(e) ? "roky" : "let") : r + "lety";
            }
        }
        e.defineLocale("cs", {
            months: t,
            monthsShort: n,
            monthsRegex: r,
            monthsShortRegex: r,
            monthsStrictRegex: /^(leden|ledna|??nora|??nor|b??ezen|b??ezna|duben|dubna|kv??ten|kv??tna|??ervenec|??ervence|??erven|??ervna|srpen|srpna|z??????|????jen|????jna|listopadu|listopad|prosinec|prosince)/i,
            monthsShortStrictRegex: /^(led|??no|b??e|dub|kv??|??vn|??vc|srp|z????|????j|lis|pro)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays: "ned??le_pond??l??_??ter??_st??eda_??tvrtek_p??tek_sobota".split("_"),
            weekdaysShort: "ne_po_??t_st_??t_p??_so".split("_"),
            weekdaysMin: "ne_po_??t_st_??t_p??_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm",
                l: "D. M. YYYY"
            },
            calendar: {
                sameDay: "[dnes v] LT",
                nextDay: "[z??tra v] LT",
                nextWeek: function() {
                    switch (this.day()) {
                      case 0:
                        return "[v ned??li v] LT";

                      case 1:
                      case 2:
                        return "[v] dddd [v] LT";

                      case 3:
                        return "[ve st??edu v] LT";

                      case 4:
                        return "[ve ??tvrtek v] LT";

                      case 5:
                        return "[v p??tek v] LT";

                      case 6:
                        return "[v sobotu v] LT";
                    }
                },
                lastDay: "[v??era v] LT",
                lastWeek: function() {
                    switch (this.day()) {
                      case 0:
                        return "[minulou ned??li v] LT";

                      case 1:
                      case 2:
                        return "[minul??] dddd [v] LT";

                      case 3:
                        return "[minulou st??edu v] LT";

                      case 4:
                      case 5:
                        return "[minul??] dddd [v] LT";

                      case 6:
                        return "[minulou sobotu v] LT";
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "p??ed %s",
                s: i,
                ss: i,
                m: i,
                mm: i,
                h: i,
                hh: i,
                d: i,
                dd: i,
                M: i,
                MM: i,
                y: i,
                yy: i
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("cv", {
            months: "????????????_??????????_??????_??????_??????_????????????_??????_??????????_????????_??????_??????_????????????".split("_"),
            monthsShort: "??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdays: "??????????????????????_????????????????_??????????????????_??????????_??????????????????????_??????????????_????????????????".split("_"),
            weekdaysShort: "??????_??????_??????_????_??????_??????_??????".split("_"),
            weekdaysMin: "????_????_????_????_????_????_????".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "YYYY [??????????] MMMM [????????????] D[-????????]",
                LLL: "YYYY [??????????] MMMM [????????????] D[-????????], HH:mm",
                LLLL: "dddd, YYYY [??????????] MMMM [????????????] D[-????????], HH:mm"
            },
            calendar: {
                sameDay: "[????????] LT [??????????????]",
                nextDay: "[????????] LT [??????????????]",
                lastDay: "[????????] LT [??????????????]",
                nextWeek: "[??????????] dddd LT [??????????????]",
                lastWeek: "[??????????] dddd LT [??????????????]",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return e + (/??????????$/i.exec(e) ? "??????" : /??????$/i.exec(e) ? "??????" : "??????");
                },
                past: "%s ????????????",
                s: "??????-???? ??????????????",
                ss: "%d ??????????????",
                m: "?????? ??????????",
                mm: "%d ??????????",
                h: "?????? ??????????",
                hh: "%d ??????????",
                d: "?????? ??????",
                dd: "%d ??????",
                M: "?????? ????????",
                MM: "%d ????????",
                y: "?????? ??????",
                yy: "%d ??????"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-??????/,
            ordinal: "%d-??????",
            week: {
                dow: 1,
                doy: 7
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("cy", {
            months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
            monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
            weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
            weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Heddiw am] LT",
                nextDay: "[Yfory am] LT",
                nextWeek: "dddd [am] LT",
                lastDay: "[Ddoe am] LT",
                lastWeek: "dddd [diwethaf am] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "mewn %s",
                past: "%s yn ??l",
                s: "ychydig eiliadau",
                ss: "%d eiliad",
                m: "munud",
                mm: "%d munud",
                h: "awr",
                hh: "%d awr",
                d: "diwrnod",
                dd: "%d diwrnod",
                M: "mis",
                MM: "%d mis",
                y: "blwyddyn",
                yy: "%d flynedd"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
            ordinal: function(e) {
                var t = "";
                return e > 20 ? t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (t = [ "", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed" ][e]), 
                e + t;
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("da", {
            months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "s??ndag_mandag_tirsdag_onsdag_torsdag_fredag_l??rdag".split("_"),
            weekdaysShort: "s??n_man_tir_ons_tor_fre_l??r".split("_"),
            weekdaysMin: "s??_ma_ti_on_to_fr_l??".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "p?? dddd [kl.] LT",
                lastDay: "[i g??r kl.] LT",
                lastWeek: "[i] dddd[s kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "f?? sekunder",
                ss: "%d sekunder",
                m: "et minut",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dage",
                M: "en m??ned",
                MM: "%d m??neder",
                y: "et ??r",
                yy: "%d ??r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n, a) {
            var r = {
                m: [ "eine Minute", "einer Minute" ],
                h: [ "eine Stunde", "einer Stunde" ],
                d: [ "ein Tag", "einem Tag" ],
                dd: [ e + " Tage", e + " Tagen" ],
                M: [ "ein Monat", "einem Monat" ],
                MM: [ e + " Monate", e + " Monaten" ],
                y: [ "ein Jahr", "einem Jahr" ],
                yy: [ e + " Jahre", e + " Jahren" ]
            };
            return t ? r[n][0] : r[n][1];
        }
        e.defineLocale("de", {
            months: "Januar_Februar_M??rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._M??rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n, a) {
            var r = {
                m: [ "eine Minute", "einer Minute" ],
                h: [ "eine Stunde", "einer Stunde" ],
                d: [ "ein Tag", "einem Tag" ],
                dd: [ e + " Tage", e + " Tagen" ],
                M: [ "ein Monat", "einem Monat" ],
                MM: [ e + " Monate", e + " Monaten" ],
                y: [ "ein Jahr", "einem Jahr" ],
                yy: [ e + " Jahre", e + " Jahren" ]
            };
            return t ? r[n][0] : r[n][1];
        }
        e.defineLocale("de-at", {
            months: "J??nner_Februar_M??rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "J??n._Feb._M??rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n, a) {
            var r = {
                m: [ "eine Minute", "einer Minute" ],
                h: [ "eine Stunde", "einer Stunde" ],
                d: [ "ein Tag", "einem Tag" ],
                dd: [ e + " Tage", e + " Tagen" ],
                M: [ "ein Monat", "einem Monat" ],
                MM: [ e + " Monate", e + " Monaten" ],
                y: [ "ein Jahr", "einem Jahr" ],
                yy: [ e + " Jahre", e + " Jahren" ]
            };
            return t ? r[n][0] : r[n][1];
        }
        e.defineLocale("de-ch", {
            months: "Januar_Februar_M??rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._M??rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: t,
                mm: "%d Minuten",
                h: t,
                hh: "%d Stunden",
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = [ "????????????????", "????????????????????", "????????????", "????????????????", "????", "????????", "????????????", "????????????????", "????????????????????????", "????????????????????", "????????????????????", "????????????????????" ], n = [ "????????????????", "????????", "????????????????", "????????", "????????????????????", "????????????", "????????????????" ];
        e.defineLocale("dv", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: "????????_????????_????????_????????_????????_????????_????????".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/M/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /????|????/,
            isPM: function(e) {
                return "????" === e;
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "????" : "????";
            },
            calendar: {
                sameDay: "[????????????] LT",
                nextDay: "[????????????] LT",
                nextWeek: "dddd LT",
                lastDay: "[????????????] LT",
                lastWeek: "[????????????????] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "???????????????? %s",
                past: "???????????? %s",
                s: "????????????????????????????",
                ss: "d% ????????????????",
                m: "????????????????",
                mm: "???????????? %d",
                h: "????????????????????",
                hh: "???????????????? %d",
                d: "????????????????",
                dd: "???????????? %d",
                M: "????????????",
                MM: "???????? %d",
                y: "????????????????",
                yy: "???????????? %d"
            },
            preparse: function(e) {
                return e.replace(/??/g, ",");
            },
            postformat: function(e) {
                return e.replace(/,/g, "??");
            },
            week: {
                dow: 7,
                doy: 12
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("el", {
            monthsNominativeEl: "????????????????????_??????????????????????_??????????????_????????????????_??????????_??????????????_??????????????_??????????????????_??????????????????????_??????????????????_??????????????????_????????????????????".split("_"),
            monthsGenitiveEl: "????????????????????_??????????????????????_??????????????_????????????????_??????????_??????????????_??????????????_??????????????????_??????????????????????_??????????????????_??????????????????_????????????????????".split("_"),
            months: function(e, t) {
                return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl;
            },
            monthsShort: "??????_??????_??????_??????_??????_????????_????????_??????_??????_??????_??????_??????".split("_"),
            weekdays: "??????????????_??????????????_??????????_??????????????_????????????_??????????????????_??????????????".split("_"),
            weekdaysShort: "??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdaysMin: "????_????_????_????_????_????_????".split("_"),
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "????" : "????" : n ? "????" : "????";
            },
            isPM: function(e) {
                return "??" === (e + "").toLowerCase()[0];
            },
            meridiemParse: /[????]\.????\.?/i,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendarEl: {
                sameDay: "[???????????? {}] LT",
                nextDay: "[?????????? {}] LT",
                nextWeek: "dddd [{}] LT",
                lastDay: "[???????? {}] LT",
                lastWeek: function() {
                    switch (this.day()) {
                      case 6:
                        return "[???? ??????????????????????] dddd [{}] LT";

                      default:
                        return "[?????? ??????????????????????] dddd [{}] LT";
                    }
                },
                sameElse: "L"
            },
            calendar: function(e, t) {
                var n, a = this._calendarEl[e], r = t && t.hours();
                return ((n = a) instanceof Function || "[object Function]" === Object.prototype.toString.call(n)) && (a = a.apply(t)), 
                a.replace("{}", r % 12 == 1 ? "??????" : "????????");
            },
            relativeTime: {
                future: "???? %s",
                past: "%s ????????",
                s: "???????? ????????????????????????",
                ss: "%d ????????????????????????",
                m: "?????? ??????????",
                mm: "%d ??????????",
                h: "?????? ??????",
                hh: "%d ????????",
                d: "?????? ????????",
                dd: "%d ??????????",
                M: "???????? ??????????",
                MM: "%d ??????????",
                y: "???????? ????????????",
                yy: "%d ????????????"
            },
            dayOfMonthOrdinalParse: /\d{1,2}??/,
            ordinal: "%d??",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("en-SG", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
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
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("en-au", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
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
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "YYYY-MM-DD",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
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
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("en-gb", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
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
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("en-ie", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
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
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("en-il", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("en-nz", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
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
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("eo", {
            months: "januaro_februaro_marto_aprilo_majo_junio_julio_a??gusto_septembro_oktobro_novembro_decembro".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_a??g_sep_okt_nov_dec".split("_"),
            weekdays: "diman??o_lundo_mardo_merkredo_??a??do_vendredo_sabato".split("_"),
            weekdaysShort: "dim_lun_mard_merk_??a??_ven_sab".split("_"),
            weekdaysMin: "di_lu_ma_me_??a_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D[-a de] MMMM, YYYY",
                LLL: "D[-a de] MMMM, YYYY HH:mm",
                LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
            },
            meridiemParse: /[ap]\.t\.m/i,
            isPM: function(e) {
                return "p" === e.charAt(0).toLowerCase();
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M.";
            },
            calendar: {
                sameDay: "[Hodia?? je] LT",
                nextDay: "[Morga?? je] LT",
                nextWeek: "dddd [je] LT",
                lastDay: "[Hiera?? je] LT",
                lastWeek: "[pasinta] dddd [je] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "post %s",
                past: "anta?? %s",
                s: "sekundoj",
                ss: "%d sekundoj",
                m: "minuto",
                mm: "%d minutoj",
                h: "horo",
                hh: "%d horoj",
                d: "tago",
                dd: "%d tagoj",
                M: "monato",
                MM: "%d monatoj",
                y: "jaro",
                yy: "%d jaroj"
            },
            dayOfMonthOrdinalParse: /\d{1,2}a/,
            ordinal: "%da",
            week: {
                dow: 1,
                doy: 7
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"), n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), a = [ /^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i ], r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, a) {
                return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t;
            },
            monthsRegex: r,
            monthsShortRegex: r,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays: "domingo_lunes_martes_mi??rcoles_jueves_viernes_s??bado".split("_"),
            weekdaysShort: "dom._lun._mar._mi??._jue._vie._s??b.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_s??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
                },
                nextDay: function() {
                    return "[ma??ana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT";
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un d??a",
                dd: "%d d??as",
                M: "un mes",
                MM: "%d meses",
                y: "un a??o",
                yy: "%d a??os"
            },
            dayOfMonthOrdinalParse: /\d{1,2}??/,
            ordinal: "%d??",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"), n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), a = [ /^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i ], r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-do", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, a) {
                return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t;
            },
            monthsRegex: r,
            monthsShortRegex: r,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays: "domingo_lunes_martes_mi??rcoles_jueves_viernes_s??bado".split("_"),
            weekdaysShort: "dom._lun._mar._mi??._jue._vie._s??b.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_s??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
                },
                nextDay: function() {
                    return "[ma??ana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT";
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un d??a",
                dd: "%d d??as",
                M: "un mes",
                MM: "%d meses",
                y: "un a??o",
                yy: "%d a??os"
            },
            dayOfMonthOrdinalParse: /\d{1,2}??/,
            ordinal: "%d??",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"), n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), a = [ /^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i ], r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-us", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function(e, a) {
                return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t;
            },
            monthsRegex: r,
            monthsShortRegex: r,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays: "domingo_lunes_martes_mi??rcoles_jueves_viernes_s??bado".split("_"),
            weekdaysShort: "dom._lun._mar._mi??._jue._vie._s??b.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_s??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "MM/DD/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function() {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
                },
                nextDay: function() {
                    return "[ma??ana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
                },
                nextWeek: function() {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
                },
                lastDay: function() {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
                },
                lastWeek: function() {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT";
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un d??a",
                dd: "%d d??as",
                M: "un mes",
                MM: "%d meses",
                y: "un a??o",
                yy: "%d a??os"
            },
            dayOfMonthOrdinalParse: /\d{1,2}??/,
            ordinal: "%d??",
            week: {
                dow: 0,
                doy: 6
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n, a) {
            var r = {
                s: [ "m??ne sekundi", "m??ni sekund", "paar sekundit" ],
                ss: [ e + "sekundi", e + "sekundit" ],
                m: [ "??he minuti", "??ks minut" ],
                mm: [ e + " minuti", e + " minutit" ],
                h: [ "??he tunni", "tund aega", "??ks tund" ],
                hh: [ e + " tunni", e + " tundi" ],
                d: [ "??he p??eva", "??ks p??ev" ],
                M: [ "kuu aja", "kuu aega", "??ks kuu" ],
                MM: [ e + " kuu", e + " kuud" ],
                y: [ "??he aasta", "aasta", "??ks aasta" ],
                yy: [ e + " aasta", e + " aastat" ]
            };
            return t ? r[n][2] ? r[n][2] : r[n][1] : a ? r[n][0] : r[n][1];
        }
        e.defineLocale("et", {
            months: "jaanuar_veebruar_m??rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
            monthsShort: "jaan_veebr_m??rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
            weekdays: "p??hap??ev_esmasp??ev_teisip??ev_kolmap??ev_neljap??ev_reede_laup??ev".split("_"),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[T??na,] LT",
                nextDay: "[Homme,] LT",
                nextWeek: "[J??rgmine] dddd LT",
                lastDay: "[Eile,] LT",
                lastWeek: "[Eelmine] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s p??rast",
                past: "%s tagasi",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: "%d p??eva",
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("eu", {
            months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
            monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
            monthsParseExact: !0,
            weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY[ko] MMMM[ren] D[a]",
                LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                l: "YYYY-M-D",
                ll: "YYYY[ko] MMM D[a]",
                lll: "YYYY[ko] MMM D[a] HH:mm",
                llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
            },
            calendar: {
                sameDay: "[gaur] LT[etan]",
                nextDay: "[bihar] LT[etan]",
                nextWeek: "dddd LT[etan]",
                lastDay: "[atzo] LT[etan]",
                lastWeek: "[aurreko] dddd LT[etan]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s barru",
                past: "duela %s",
                s: "segundo batzuk",
                ss: "%d segundo",
                m: "minutu bat",
                mm: "%d minutu",
                h: "ordu bat",
                hh: "%d ordu",
                d: "egun bat",
                dd: "%d egun",
                M: "hilabete bat",
                MM: "%d hilabete",
                y: "urte bat",
                yy: "%d urte"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "??",
            2: "??",
            3: "??",
            4: "??",
            5: "??",
            6: "??",
            7: "??",
            8: "??",
            9: "??",
            0: "??"
        }, n = {
            "??": "1",
            "??": "2",
            "??": "3",
            "??": "4",
            "??": "5",
            "??": "6",
            "??": "7",
            "??": "8",
            "??": "9",
            "??": "0"
        };
        e.defineLocale("fa", {
            months: "????????????_??????????_????????_??????????_????_????????_??????????_??????_??????????????_??????????_????????????_????????????".split("_"),
            monthsShort: "????????????_??????????_????????_??????????_????_????????_??????????_??????_??????????????_??????????_????????????_????????????".split("_"),
            weekdays: "???????????????_????????????_???????????????_????????????????_?????????????????_????????_????????".split("_"),
            weekdaysShort: "???????????????_????????????_???????????????_????????????????_?????????????????_????????_????????".split("_"),
            weekdaysMin: "??_??_??_??_??_??_??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /?????? ???? ??????|?????? ???? ??????/,
            isPM: function(e) {
                return /?????? ???? ??????/.test(e);
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "?????? ???? ??????" : "?????? ???? ??????";
            },
            calendar: {
                sameDay: "[?????????? ????????] LT",
                nextDay: "[???????? ????????] LT",
                nextWeek: "dddd [????????] LT",
                lastDay: "[?????????? ????????] LT",
                lastWeek: "dddd [??????] [????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "???? %s",
                past: "%s ??????",
                s: "?????? ??????????",
                ss: "?????????? d%",
                m: "???? ??????????",
                mm: "%d ??????????",
                h: "???? ????????",
                hh: "%d ????????",
                d: "???? ??????",
                dd: "%d ??????",
                M: "???? ??????",
                MM: "%d ??????",
                y: "???? ??????",
                yy: "%d ??????"
            },
            preparse: function(e) {
                return e.replace(/[??-??]/g, (function(e) {
                    return n[e];
                })).replace(/??/g, ",");
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e];
                })).replace(/,/g, "??");
            },
            dayOfMonthOrdinalParse: /\d{1,2}??/,
            ordinal: "%d??",
            week: {
                dow: 6,
                doy: 12
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = "nolla yksi kaksi kolme nelj?? viisi kuusi seitsem??n kahdeksan yhdeks??n".split(" "), n = [ "nolla", "yhden", "kahden", "kolmen", "nelj??n", "viiden", "kuuden", t[7], t[8], t[9] ];
        function a(e, a, r, s) {
            var i = "";
            switch (r) {
              case "s":
                return s ? "muutaman sekunnin" : "muutama sekunti";

              case "ss":
                return s ? "sekunnin" : "sekuntia";

              case "m":
                return s ? "minuutin" : "minuutti";

              case "mm":
                i = s ? "minuutin" : "minuuttia";
                break;

              case "h":
                return s ? "tunnin" : "tunti";

              case "hh":
                i = s ? "tunnin" : "tuntia";
                break;

              case "d":
                return s ? "p??iv??n" : "p??iv??";

              case "dd":
                i = s ? "p??iv??n" : "p??iv????";
                break;

              case "M":
                return s ? "kuukauden" : "kuukausi";

              case "MM":
                i = s ? "kuukauden" : "kuukautta";
                break;

              case "y":
                return s ? "vuoden" : "vuosi";

              case "yy":
                i = s ? "vuoden" : "vuotta";
            }
            return function(e, a) {
                return e < 10 ? a ? n[e] : t[e] : e;
            }(e, s) + " " + i;
        }
        e.defineLocale("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes??kuu_hein??kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kes??_hein??_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] HH.mm",
                llll: "ddd, Do MMM YYYY, [klo] HH.mm"
            },
            calendar: {
                sameDay: "[t??n????n] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s p????st??",
                past: "%s sitten",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("fo", {
            months: "januar_februar_mars_apr??l_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sunnudagur_m??nadagur_t??sdagur_mikudagur_h??sdagur_fr??ggjadagur_leygardagur".split("_"),
            weekdaysShort: "sun_m??n_t??s_mik_h??s_fr??_ley".split("_"),
            weekdaysMin: "su_m??_t??_mi_h??_fr_le".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D. MMMM, YYYY HH:mm"
            },
            calendar: {
                sameDay: "[?? dag kl.] LT",
                nextDay: "[?? morgin kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[?? gj??r kl.] LT",
                lastWeek: "[s????stu] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "um %s",
                past: "%s s????ani",
                s: "f?? sekund",
                ss: "%d sekundir",
                m: "ein minuttur",
                mm: "%d minuttir",
                h: "ein t??mi",
                hh: "%d t??mar",
                d: "ein dagur",
                dd: "%d dagar",
                M: "ein m??na??ur",
                MM: "%d m??na??ir",
                y: "eitt ??r",
                yy: "%d ??r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("fr", {
            months: "janvier_f??vrier_mars_avril_mai_juin_juillet_ao??t_septembre_octobre_novembre_d??cembre".split("_"),
            monthsShort: "janv._f??vr._mars_avr._mai_juin_juil._ao??t_sept._oct._nov._d??c.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd???hui ??] LT",
                nextDay: "[Demain ??] LT",
                nextWeek: "dddd [??] LT",
                lastDay: "[Hier ??] LT",
                lastWeek: "dddd [dernier ??] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
            ordinal: function(e, t) {
                switch (t) {
                  case "D":
                    return e + (1 === e ? "er" : "");

                  default:
                  case "M":
                  case "Q":
                  case "DDD":
                  case "d":
                    return e + (1 === e ? "er" : "e");

                  case "w":
                  case "W":
                    return e + (1 === e ? "re" : "e");
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("fr-ca", {
            months: "janvier_f??vrier_mars_avril_mai_juin_juillet_ao??t_septembre_octobre_novembre_d??cembre".split("_"),
            monthsShort: "janv._f??vr._mars_avr._mai_juin_juil._ao??t_sept._oct._nov._d??c.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd???hui ??] LT",
                nextDay: "[Demain ??] LT",
                nextWeek: "dddd [??] LT",
                lastDay: "[Hier ??] LT",
                lastWeek: "dddd [dernier ??] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function(e, t) {
                switch (t) {
                  default:
                  case "M":
                  case "Q":
                  case "D":
                  case "DDD":
                  case "d":
                    return e + (1 === e ? "er" : "e");

                  case "w":
                  case "W":
                    return e + (1 === e ? "re" : "e");
                }
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("fr-ch", {
            months: "janvier_f??vrier_mars_avril_mai_juin_juillet_ao??t_septembre_octobre_novembre_d??cembre".split("_"),
            monthsShort: "janv._f??vr._mars_avr._mai_juin_juil._ao??t_sept._oct._nov._d??c.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd???hui ??] LT",
                nextDay: "[Demain ??] LT",
                nextWeek: "dddd [??] LT",
                lastDay: "[Hier ??] LT",
                lastWeek: "dddd [dernier ??] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function(e, t) {
                switch (t) {
                  default:
                  case "M":
                  case "Q":
                  case "D":
                  case "DDD":
                  case "d":
                    return e + (1 === e ? "er" : "e");

                  case "w":
                  case "W":
                    return e + (1 === e ? "re" : "e");
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"), n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
        e.defineLocale("fy", {
            months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
            monthsShort: function(e, a) {
                return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t;
            },
            monthsParseExact: !0,
            weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
            weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
            weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[hjoed om] LT",
                nextDay: "[moarn om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[juster om] LT",
                lastWeek: "[??fr??ne] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oer %s",
                past: "%s lyn",
                s: "in pear sekonden",
                ss: "%d sekonden",
                m: "ien min??t",
                mm: "%d minuten",
                h: "ien oere",
                hh: "%d oeren",
                d: "ien dei",
                dd: "%d dagen",
                M: "ien moanne",
                MM: "%d moannen",
                y: "ien jier",
                yy: "%d jierren"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("ga", {
            months: [ "Ean??ir", "Feabhra", "M??rta", "Aibre??n", "Bealtaine", "M??itheamh", "I??il", "L??nasa", "Me??n F??mhair", "Deaireadh F??mhair", "Samhain", "Nollaig" ],
            monthsShort: [ "Ean??", "Feab", "M??rt", "Aibr", "Beal", "M??it", "I??il", "L??na", "Me??n", "Deai", "Samh", "Noll" ],
            monthsParseExact: !0,
            weekdays: [ "D?? Domhnaigh", "D?? Luain", "D?? M??irt", "D?? C??adaoin", "D??ardaoin", "D?? hAoine", "D?? Satharn" ],
            weekdaysShort: [ "Dom", "Lua", "M??i", "C??a", "D??a", "hAo", "Sat" ],
            weekdaysMin: [ "Do", "Lu", "M??", "Ce", "D??", "hA", "Sa" ],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Inniu ag] LT",
                nextDay: "[Am??rach ag] LT",
                nextWeek: "dddd [ag] LT",
                lastDay: "[Inn?? aig] LT",
                lastWeek: "dddd [seo caite] [ag] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i %s",
                past: "%s ?? shin",
                s: "c??pla soicind",
                ss: "%d soicind",
                m: "n??im??ad",
                mm: "%d n??im??ad",
                h: "uair an chloig",
                hh: "%d uair an chloig",
                d: "l??",
                dd: "%d l??",
                M: "m??",
                MM: "%d m??",
                y: "bliain",
                yy: "%d bliain"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function(e) {
                return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh");
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("gd", {
            months: [ "Am Faoilleach", "An Gearran", "Am M??rt", "An Giblean", "An C??itean", "An t-??gmhios", "An t-Iuchar", "An L??nastal", "An t-Sultain", "An D??mhair", "An t-Samhain", "An D??bhlachd" ],
            monthsShort: [ "Faoi", "Gear", "M??rt", "Gibl", "C??it", "??gmh", "Iuch", "L??n", "Sult", "D??mh", "Samh", "D??bh" ],
            monthsParseExact: !0,
            weekdays: [ "Did??mhnaich", "Diluain", "Dim??irt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne" ],
            weekdaysShort: [ "Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis" ],
            weekdaysMin: [ "D??", "Lu", "M??", "Ci", "Ar", "Ha", "Sa" ],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[An-diugh aig] LT",
                nextDay: "[A-m??ireach aig] LT",
                nextWeek: "dddd [aig] LT",
                lastDay: "[An-d?? aig] LT",
                lastWeek: "dddd [seo chaidh] [aig] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ann an %s",
                past: "bho chionn %s",
                s: "beagan diogan",
                ss: "%d diogan",
                m: "mionaid",
                mm: "%d mionaidean",
                h: "uair",
                hh: "%d uairean",
                d: "latha",
                dd: "%d latha",
                M: "m??os",
                MM: "%d m??osan",
                y: "bliadhna",
                yy: "%d bliadhna"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function(e) {
                return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh");
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("gl", {
            months: "xaneiro_febreiro_marzo_abril_maio_xu??o_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
            monthsShort: "xan._feb._mar._abr._mai._xu??._xul._ago._set._out._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "domingo_luns_martes_m??rcores_xoves_venres_s??bado".split("_"),
            weekdaysShort: "dom._lun._mar._m??r._xov._ven._s??b.".split("_"),
            weekdaysMin: "do_lu_ma_m??_xo_ve_s??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function() {
                    return "[hoxe " + (1 !== this.hours() ? "??s" : "??") + "] LT";
                },
                nextDay: function() {
                    return "[ma???? " + (1 !== this.hours() ? "??s" : "??") + "] LT";
                },
                nextWeek: function() {
                    return "dddd [" + (1 !== this.hours() ? "??s" : "a") + "] LT";
                },
                lastDay: function() {
                    return "[onte " + (1 !== this.hours() ? "??" : "a") + "] LT";
                },
                lastWeek: function() {
                    return "[o] dddd [pasado " + (1 !== this.hours() ? "??s" : "a") + "] LT";
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return 0 === e.indexOf("un") ? "n" + e : "en " + e;
                },
                past: "hai %s",
                s: "uns segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "unha hora",
                hh: "%d horas",
                d: "un d??a",
                dd: "%d d??as",
                M: "un mes",
                MM: "%d meses",
                y: "un ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}??/,
            ordinal: "%d??",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n, a) {
            var r = {
                s: [ "thodde secondanim", "thodde second" ],
                ss: [ e + " secondanim", e + " second" ],
                m: [ "eka mintan", "ek minute" ],
                mm: [ e + " mintanim", e + " mintam" ],
                h: [ "eka voran", "ek vor" ],
                hh: [ e + " voranim", e + " voram" ],
                d: [ "eka disan", "ek dis" ],
                dd: [ e + " disanim", e + " dis" ],
                M: [ "eka mhoinean", "ek mhoino" ],
                MM: [ e + " mhoineanim", e + " mhoine" ],
                y: [ "eka vorsan", "ek voros" ],
                yy: [ e + " vorsanim", e + " vorsam" ]
            };
            return t ? r[n][0] : r[n][1];
        }
        e.defineLocale("gom-latn", {
            months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
            monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
            weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
            weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "A h:mm [vazta]",
                LTS: "A h:mm:ss [vazta]",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY A h:mm [vazta]",
                LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
                llll: "ddd, D MMM YYYY, A h:mm [vazta]"
            },
            calendar: {
                sameDay: "[Aiz] LT",
                nextDay: "[Faleam] LT",
                nextWeek: "[Ieta to] dddd[,] LT",
                lastDay: "[Kal] LT",
                lastWeek: "[Fatlo] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s",
                past: "%s adim",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er)/,
            ordinal: function(e, t) {
                switch (t) {
                  case "D":
                    return e + "er";

                  default:
                  case "M":
                  case "Q":
                  case "DDD":
                  case "d":
                  case "w":
                  case "W":
                    return e;
                }
            },
            week: {
                dow: 1,
                doy: 4
            },
            meridiemParse: /rati|sokalli|donparam|sanje/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokalli" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0;
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati";
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "???",
            2: "???",
            3: "???",
            4: "???",
            5: "???",
            6: "???",
            7: "???",
            8: "???",
            9: "???",
            0: "???"
        }, n = {
            "???": "1",
            "???": "2",
            "???": "3",
            "???": "4",
            "???": "5",
            "???": "6",
            "???": "7",
            "???": "8",
            "???": "9",
            "???": "0"
        };
        e.defineLocale("gu", {
            months: "???????????????????????????_???????????????????????????_???????????????_??????????????????_??????_?????????_???????????????_???????????????_???????????????????????????_?????????????????????_?????????????????????_????????????????????????".split("_"),
            monthsShort: "??????????????????._??????????????????._???????????????_???????????????._??????_?????????_????????????._??????._???????????????._???????????????._?????????._????????????.".split("_"),
            monthsParseExact: !0,
            weekdays: "??????????????????_??????????????????_?????????????????????_?????????????????????_?????????????????????_????????????????????????_??????????????????".split("_"),
            weekdaysShort: "?????????_?????????_????????????_????????????_????????????_???????????????_?????????".split("_"),
            weekdaysMin: "???_??????_??????_??????_??????_??????_???".split("_"),
            longDateFormat: {
                LT: "A h:mm ??????????????????",
                LTS: "A h:mm:ss ??????????????????",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm ??????????????????",
                LLLL: "dddd, D MMMM YYYY, A h:mm ??????????????????"
            },
            calendar: {
                sameDay: "[??????] LT",
                nextDay: "[????????????] LT",
                nextWeek: "dddd, LT",
                lastDay: "[??????????????????] LT",
                lastWeek: "[???????????????] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ??????",
                past: "%s ???????????????",
                s: "???????????? ?????????",
                ss: "%d ???????????????",
                m: "?????? ???????????????",
                mm: "%d ???????????????",
                h: "?????? ????????????",
                hh: "%d ????????????",
                d: "?????? ????????????",
                dd: "%d ????????????",
                M: "?????? ???????????????",
                MM: "%d ???????????????",
                y: "?????? ????????????",
                yy: "%d ????????????"
            },
            preparse: function(e) {
                return e.replace(/[??????????????????????????????]/g, (function(e) {
                    return n[e];
                }));
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e];
                }));
            },
            meridiemParse: /?????????|????????????|????????????|????????????/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "?????????" === t ? e < 4 ? e : e + 12 : "????????????" === t ? e : "????????????" === t ? e >= 10 ? e : e + 12 : "????????????" === t ? e + 12 : void 0;
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "?????????" : e < 10 ? "????????????" : e < 17 ? "????????????" : e < 20 ? "????????????" : "?????????";
            },
            week: {
                dow: 0,
                doy: 6
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("he", {
            months: "??????????_????????????_??????_??????????_??????_????????_????????_????????????_????????????_??????????????_????????????_??????????".split("_"),
            monthsShort: "????????_????????_??????_????????_??????_????????_????????_????????_????????_????????_????????_????????".split("_"),
            weekdays: "??????????_??????_??????????_??????????_??????????_????????_??????".split("_"),
            weekdaysShort: "????_????_????_????_????_????_????".split("_"),
            weekdaysMin: "??_??_??_??_??_??_??".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [??]MMMM YYYY",
                LLL: "D [??]MMMM YYYY HH:mm",
                LLLL: "dddd, D [??]MMMM YYYY HH:mm",
                l: "D/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[???????? ????]LT",
                nextDay: "[?????? ????]LT",
                nextWeek: "dddd [????????] LT",
                lastDay: "[?????????? ????]LT",
                lastWeek: "[????????] dddd [???????????? ????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "???????? %s",
                past: "???????? %s",
                s: "???????? ??????????",
                ss: "%d ??????????",
                m: "??????",
                mm: "%d ????????",
                h: "??????",
                hh: function(e) {
                    return 2 === e ? "????????????" : e + " ????????";
                },
                d: "??????",
                dd: function(e) {
                    return 2 === e ? "????????????" : e + " ????????";
                },
                M: "????????",
                MM: function(e) {
                    return 2 === e ? "??????????????" : e + " ????????????";
                },
                y: "??????",
                yy: function(e) {
                    return 2 === e ? "????????????" : e % 10 == 0 && 10 !== e ? e + " ??????" : e + " ????????";
                }
            },
            meridiemParse: /??????"??|????????"??|???????? ??????????????|???????? ??????????????|?????????? ????????|??????????|????????/i,
            isPM: function(e) {
                return /^(??????"??|???????? ??????????????|????????)$/.test(e);
            },
            meridiem: function(e, t, n) {
                return e < 5 ? "?????????? ????????" : e < 10 ? "??????????" : e < 12 ? n ? '????????"??' : "???????? ??????????????" : e < 18 ? n ? '??????"??' : "???????? ??????????????" : "????????";
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "???",
            2: "???",
            3: "???",
            4: "???",
            5: "???",
            6: "???",
            7: "???",
            8: "???",
            9: "???",
            0: "???"
        }, n = {
            "???": "1",
            "???": "2",
            "???": "3",
            "???": "4",
            "???": "5",
            "???": "6",
            "???": "7",
            "???": "8",
            "???": "9",
            "???": "0"
        };
        e.defineLocale("hi", {
            months: "???????????????_??????????????????_???????????????_??????????????????_??????_?????????_???????????????_???????????????_?????????????????????_?????????????????????_??????????????????_?????????????????????".split("_"),
            monthsShort: "??????._?????????._???????????????_???????????????._??????_?????????_?????????._??????._?????????._???????????????._??????._?????????.".split("_"),
            monthsParseExact: !0,
            weekdays: "??????????????????_??????????????????_?????????????????????_??????????????????_?????????????????????_????????????????????????_??????????????????".split("_"),
            weekdaysShort: "?????????_?????????_????????????_?????????_????????????_???????????????_?????????".split("_"),
            weekdaysMin: "???_??????_??????_??????_??????_??????_???".split("_"),
            longDateFormat: {
                LT: "A h:mm ?????????",
                LTS: "A h:mm:ss ?????????",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm ?????????",
                LLLL: "dddd, D MMMM YYYY, A h:mm ?????????"
            },
            calendar: {
                sameDay: "[??????] LT",
                nextDay: "[??????] LT",
                nextWeek: "dddd, LT",
                lastDay: "[??????] LT",
                lastWeek: "[???????????????] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ?????????",
                past: "%s ????????????",
                s: "????????? ?????? ????????????",
                ss: "%d ???????????????",
                m: "?????? ????????????",
                mm: "%d ????????????",
                h: "?????? ????????????",
                hh: "%d ????????????",
                d: "?????? ?????????",
                dd: "%d ?????????",
                M: "?????? ???????????????",
                MM: "%d ???????????????",
                y: "?????? ????????????",
                yy: "%d ????????????"
            },
            preparse: function(e) {
                return e.replace(/[??????????????????????????????]/g, (function(e) {
                    return n[e];
                }));
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e];
                }));
            },
            meridiemParse: /?????????|????????????|???????????????|?????????/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "?????????" === t ? e < 4 ? e : e + 12 : "????????????" === t ? e : "???????????????" === t ? e >= 10 ? e : e + 12 : "?????????" === t ? e + 12 : void 0;
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "?????????" : e < 10 ? "????????????" : e < 17 ? "???????????????" : e < 20 ? "?????????" : "?????????";
            },
            week: {
                dow: 0,
                doy: 6
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n) {
            var a = e + " ";
            switch (n) {
              case "ss":
                return a + (1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi");

              case "m":
                return t ? "jedna minuta" : "jedne minute";

              case "mm":
                return a + (1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta");

              case "h":
                return t ? "jedan sat" : "jednog sata";

              case "hh":
                return a + (1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati");

              case "dd":
                return a + (1 === e ? "dan" : "dana");

              case "MM":
                return a + (1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci");

              case "yy":
                return a + (1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina");
            }
        }
        e.defineLocale("hr", {
            months: {
                format: "sije??nja_velja??e_o??ujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                standalone: "sije??anj_velja??a_o??ujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
            },
            monthsShort: "sij._velj._o??u._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_??etvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._??et._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_??e_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                      case 0:
                        return "[u] [nedjelju] [u] LT";

                      case 3:
                        return "[u] [srijedu] [u] LT";

                      case 6:
                        return "[u] [subotu] [u] LT";

                      case 1:
                      case 2:
                      case 4:
                      case 5:
                        return "[u] dddd [u] LT";
                    }
                },
                lastDay: "[ju??er u] LT",
                lastWeek: function() {
                    switch (this.day()) {
                      case 0:
                      case 3:
                        return "[pro??lu] dddd [u] LT";

                      case 6:
                        return "[pro??le] [subote] [u] LT";

                      case 1:
                      case 2:
                      case 4:
                      case 5:
                        return "[pro??li] dddd [u] LT";
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: "dan",
                dd: t,
                M: "mjesec",
                MM: t,
                y: "godinu",
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = "vas??rnap h??tf??n kedden szerd??n cs??t??rt??k??n p??nteken szombaton".split(" ");
        function n(e, t, n, a) {
            var r = e;
            switch (n) {
              case "s":
                return a || t ? "n??h??ny m??sodperc" : "n??h??ny m??sodperce";

              case "ss":
                return r + (a || t) ? " m??sodperc" : " m??sodperce";

              case "m":
                return "egy" + (a || t ? " perc" : " perce");

              case "mm":
                return r + (a || t ? " perc" : " perce");

              case "h":
                return "egy" + (a || t ? " ??ra" : " ??r??ja");

              case "hh":
                return r + (a || t ? " ??ra" : " ??r??ja");

              case "d":
                return "egy" + (a || t ? " nap" : " napja");

              case "dd":
                return r + (a || t ? " nap" : " napja");

              case "M":
                return "egy" + (a || t ? " h??nap" : " h??napja");

              case "MM":
                return r + (a || t ? " h??nap" : " h??napja");

              case "y":
                return "egy" + (a || t ? " ??v" : " ??ve");

              case "yy":
                return r + (a || t ? " ??v" : " ??ve");
            }
            return "";
        }
        function a(e) {
            return (e ? "" : "[m??lt] ") + "[" + t[this.day()] + "] LT[-kor]";
        }
        e.defineLocale("hu", {
            months: "janu??r_febru??r_m??rcius_??prilis_m??jus_j??nius_j??lius_augusztus_szeptember_okt??ber_november_december".split("_"),
            monthsShort: "jan_feb_m??rc_??pr_m??j_j??n_j??l_aug_szept_okt_nov_dec".split("_"),
            weekdays: "vas??rnap_h??tf??_kedd_szerda_cs??t??rt??k_p??ntek_szombat".split("_"),
            weekdaysShort: "vas_h??t_kedd_sze_cs??t_p??n_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY. MMMM D.",
                LLL: "YYYY. MMMM D. H:mm",
                LLLL: "YYYY. MMMM D., dddd H:mm"
            },
            meridiemParse: /de|du/i,
            isPM: function(e) {
                return "u" === e.charAt(1).toLowerCase();
            },
            meridiem: function(e, t, n) {
                return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU";
            },
            calendar: {
                sameDay: "[ma] LT[-kor]",
                nextDay: "[holnap] LT[-kor]",
                nextWeek: function() {
                    return a.call(this, !0);
                },
                lastDay: "[tegnap] LT[-kor]",
                lastWeek: function() {
                    return a.call(this, !1);
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s m??lva",
                past: "%s",
                s: n,
                ss: n,
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("hy-am", {
            months: {
                format: "????????????????_????????????????_??????????_????????????_????????????_??????????????_??????????????_????????????????_????????????????????_????????????????????_??????????????????_????????????????????".split("_"),
                standalone: "??????????????_??????????????_????????_??????????_??????????_????????????_????????????_??????????????_??????????????????_??????????????????_????????????????_??????????????????".split("_")
            },
            monthsShort: "??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdays: "????????????_????????????????????_??????????????????_????????????????????_??????????????????_????????????_??????????".split("_"),
            weekdaysShort: "??????_??????_??????_??????_??????_????????_??????".split("_"),
            weekdaysMin: "??????_??????_??????_??????_??????_????????_??????".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY ??.",
                LLL: "D MMMM YYYY ??., HH:mm",
                LLLL: "dddd, D MMMM YYYY ??., HH:mm"
            },
            calendar: {
                sameDay: "[??????????] LT",
                nextDay: "[????????] LT",
                lastDay: "[????????] LT",
                nextWeek: function() {
                    return "dddd [?????? ????????] LT";
                },
                lastWeek: function() {
                    return "[??????????] dddd [?????? ????????] LT";
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ????????",
                past: "%s ????????",
                s: "???? ???????? ????????????????",
                ss: "%d ????????????????",
                m: "????????",
                mm: "%d ????????",
                h: "??????",
                hh: "%d ??????",
                d: "????",
                dd: "%d ????",
                M: "????????",
                MM: "%d ????????",
                y: "????????",
                yy: "%d ????????"
            },
            meridiemParse: /??????????????|????????????????|??????????????|????????????????/,
            isPM: function(e) {
                return /^(??????????????|????????????????)$/.test(e);
            },
            meridiem: function(e) {
                return e < 4 ? "??????????????" : e < 12 ? "????????????????" : e < 17 ? "??????????????" : "????????????????";
            },
            dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(????|????)/,
            ordinal: function(e, t) {
                switch (t) {
                  case "DDD":
                  case "w":
                  case "W":
                  case "DDDo":
                    return 1 === e ? e + "-????" : e + "-????";

                  default:
                    return e;
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("id", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0;
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam";
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Besok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kemarin pukul] LT",
                lastWeek: "dddd [lalu pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lalu",
                s: "beberapa detik",
                ss: "%d detik",
                m: "semenit",
                mm: "%d menit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e) {
            return e % 100 == 11 || e % 10 != 1;
        }
        function n(e, n, a, r) {
            var s = e + " ";
            switch (a) {
              case "s":
                return n || r ? "nokkrar sek??ndur" : "nokkrum sek??ndum";

              case "ss":
                return t(e) ? s + (n || r ? "sek??ndur" : "sek??ndum") : s + "sek??nda";

              case "m":
                return n ? "m??n??ta" : "m??n??tu";

              case "mm":
                return t(e) ? s + (n || r ? "m??n??tur" : "m??n??tum") : n ? s + "m??n??ta" : s + "m??n??tu";

              case "hh":
                return t(e) ? s + (n || r ? "klukkustundir" : "klukkustundum") : s + "klukkustund";

              case "d":
                return n ? "dagur" : r ? "dag" : "degi";

              case "dd":
                return t(e) ? n ? s + "dagar" : s + (r ? "daga" : "d??gum") : n ? s + "dagur" : s + (r ? "dag" : "degi");

              case "M":
                return n ? "m??nu??ur" : r ? "m??nu??" : "m??nu??i";

              case "MM":
                return t(e) ? n ? s + "m??nu??ir" : s + (r ? "m??nu??i" : "m??nu??um") : n ? s + "m??nu??ur" : s + (r ? "m??nu??" : "m??nu??i");

              case "y":
                return n || r ? "??r" : "??ri";

              case "yy":
                return t(e) ? s + (n || r ? "??r" : "??rum") : s + (n || r ? "??r" : "??ri");
            }
        }
        e.defineLocale("is", {
            months: "jan??ar_febr??ar_mars_apr??l_ma??_j??n??_j??l??_??g??st_september_okt??ber_n??vember_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_ma??_j??n_j??l_??g??_sep_okt_n??v_des".split("_"),
            weekdays: "sunnudagur_m??nudagur_??ri??judagur_mi??vikudagur_fimmtudagur_f??studagur_laugardagur".split("_"),
            weekdaysShort: "sun_m??n_??ri_mi??_fim_f??s_lau".split("_"),
            weekdaysMin: "Su_M??_??r_Mi_Fi_F??_La".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
            },
            calendar: {
                sameDay: "[?? dag kl.] LT",
                nextDay: "[?? morgun kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[?? g??r kl.] LT",
                lastWeek: "[s????asta] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "eftir %s",
                past: "fyrir %s s????an",
                s: n,
                ss: n,
                m: n,
                mm: n,
                h: "klukkustund",
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("it", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_luned??_marted??_mercoled??_gioved??_venerd??_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function() {
                    switch (this.day()) {
                      case 0:
                        return "[la scorsa] dddd [alle] LT";

                      default:
                        return "[lo scorso] dddd [alle] LT";
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e;
                },
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}??/,
            ordinal: "%d??",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("it-ch", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_luned??_marted??_mercoled??_gioved??_venerd??_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function() {
                    switch (this.day()) {
                      case 0:
                        return "[la scorsa] dddd [alle] LT";

                      default:
                        return "[lo scorso] dddd [alle] LT";
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e;
                },
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}??/,
            ordinal: "%d??",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("ja", {
            months: "??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_?????????_?????????".split("_"),
            monthsShort: "1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???".split("_"),
            weekdays: "?????????_?????????_?????????_?????????_?????????_?????????_?????????".split("_"),
            weekdaysShort: "???_???_???_???_???_???_???".split("_"),
            weekdaysMin: "???_???_???_???_???_???_???".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY???M???D???",
                LLL: "YYYY???M???D??? HH:mm",
                LLLL: "YYYY???M???D??? dddd HH:mm",
                l: "YYYY/MM/DD",
                ll: "YYYY???M???D???",
                lll: "YYYY???M???D??? HH:mm",
                llll: "YYYY???M???D???(ddd) HH:mm"
            },
            meridiemParse: /??????|??????/i,
            isPM: function(e) {
                return "??????" === e;
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "??????" : "??????";
            },
            calendar: {
                sameDay: "[??????] LT",
                nextDay: "[??????] LT",
                nextWeek: function(e) {
                    return e.week() < this.week() ? "[??????]dddd LT" : "dddd LT";
                },
                lastDay: "[??????] LT",
                lastWeek: function(e) {
                    return this.week() < e.week() ? "[??????]dddd LT" : "dddd LT";
                },
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}???/,
            ordinal: function(e, t) {
                switch (t) {
                  case "d":
                  case "D":
                  case "DDD":
                    return e + "???";

                  default:
                    return e;
                }
            },
            relativeTime: {
                future: "%s???",
                past: "%s???",
                s: "??????",
                ss: "%d???",
                m: "1???",
                mm: "%d???",
                h: "1??????",
                hh: "%d??????",
                d: "1???",
                dd: "%d???",
                M: "1??????",
                MM: "%d??????",
                y: "1???",
                yy: "%d???"
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("jv", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
            weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /enjing|siyang|sonten|ndalu/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0;
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu";
            },
            calendar: {
                sameDay: "[Dinten puniko pukul] LT",
                nextDay: "[Mbenjang pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kala wingi pukul] LT",
                lastWeek: "dddd [kepengker pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "wonten ing %s",
                past: "%s ingkang kepengker",
                s: "sawetawis detik",
                ss: "%d detik",
                m: "setunggal menit",
                mm: "%d menit",
                h: "setunggal jam",
                hh: "%d jam",
                d: "sedinten",
                dd: "%d dinten",
                M: "sewulan",
                MM: "%d wulan",
                y: "setaun",
                yy: "%d taun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("ka", {
            months: {
                standalone: "?????????????????????_???????????????????????????_???????????????_??????????????????_???????????????_??????????????????_??????????????????_?????????????????????_??????????????????????????????_???????????????????????????_????????????????????????_???????????????????????????".split("_"),
                format: "?????????????????????_???????????????????????????_???????????????_?????????????????????_???????????????_??????????????????_??????????????????_?????????????????????_??????????????????????????????_???????????????????????????_????????????????????????_???????????????????????????".split("_")
            },
            monthsShort: "?????????_?????????_?????????_?????????_?????????_?????????_?????????_?????????_?????????_?????????_?????????_?????????".split("_"),
            weekdays: {
                standalone: "???????????????_????????????????????????_???????????????????????????_???????????????????????????_???????????????????????????_???????????????????????????_??????????????????".split("_"),
                format: "??????????????????_????????????????????????_???????????????????????????_???????????????????????????_???????????????????????????_???????????????????????????_??????????????????".split("_"),
                isFormat: /(????????????|??????????????????)/
            },
            weekdaysShort: "?????????_?????????_?????????_?????????_?????????_?????????_?????????".split("_"),
            weekdaysMin: "??????_??????_??????_??????_??????_??????_??????".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[????????????] LT[-??????]",
                nextDay: "[????????????] LT[-??????]",
                lastDay: "[???????????????] LT[-??????]",
                nextWeek: "[??????????????????] dddd LT[-??????]",
                lastWeek: "[????????????] dddd LT-??????",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    return /(????????????|????????????|???????????????|????????????)/.test(e) ? e.replace(/???$/, "??????") : e + "??????";
                },
                past: function(e) {
                    return /(????????????|????????????|???????????????|?????????|?????????)/.test(e) ? e.replace(/(???|???)$/, "?????? ?????????") : /????????????/.test(e) ? e.replace(/????????????$/, "???????????? ?????????") : void 0;
                },
                s: "??????????????????????????? ????????????",
                ss: "%d ????????????",
                m: "????????????",
                mm: "%d ????????????",
                h: "???????????????",
                hh: "%d ???????????????",
                d: "?????????",
                dd: "%d ?????????",
                M: "?????????",
                MM: "%d ?????????",
                y: "????????????",
                yy: "%d ????????????"
            },
            dayOfMonthOrdinalParse: /0|1-??????|??????-\d{1,2}|\d{1,2}-???/,
            ordinal: function(e) {
                return 0 === e ? e : 1 === e ? e + "-??????" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "??????-" + e : e + "-???";
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            0: "-????",
            1: "-????",
            2: "-????",
            3: "-????",
            4: "-????",
            5: "-????",
            6: "-????",
            7: "-????",
            8: "-????",
            9: "-????",
            10: "-????",
            20: "-????",
            30: "-????",
            40: "-????",
            50: "-????",
            60: "-????",
            70: "-????",
            80: "-????",
            90: "-????",
            100: "-????"
        };
        e.defineLocale("kk", {
            months: "????????????_??????????_????????????_??????????_??????????_????????????_??????????_??????????_????????????????_??????????_????????????_??????????????????".split("_"),
            monthsShort: "??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdays: "????????????????_????????????????_????????????????_????????????????_????????????????_????????_??????????".split("_"),
            weekdaysShort: "??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdaysMin: "????_????_????_????_????_????_????".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[?????????? ??????????] LT",
                nextDay: "[?????????? ??????????] LT",
                nextWeek: "dddd [??????????] LT",
                lastDay: "[???????? ??????????] LT",
                lastWeek: "[?????????? ??????????????] dddd [??????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ????????????",
                past: "%s ??????????",
                s: "?????????????? ????????????",
                ss: "%d ????????????",
                m: "?????? ??????????",
                mm: "%d ??????????",
                h: "?????? ??????????",
                hh: "%d ??????????",
                d: "?????? ??????",
                dd: "%d ??????",
                M: "?????? ????",
                MM: "%d ????",
                y: "?????? ??????",
                yy: "%d ??????"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(????|????)/,
            ordinal: function(e) {
                return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null]);
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "???",
            2: "???",
            3: "???",
            4: "???",
            5: "???",
            6: "???",
            7: "???",
            8: "???",
            9: "???",
            0: "???"
        }, n = {
            "???": "1",
            "???": "2",
            "???": "3",
            "???": "4",
            "???": "5",
            "???": "6",
            "???": "7",
            "???": "8",
            "???": "9",
            "???": "0"
        };
        e.defineLocale("km", {
            months: "????????????_??????????????????_????????????_????????????_????????????_??????????????????_??????????????????_????????????_???????????????_????????????_????????????????????????_????????????".split("_"),
            monthsShort: "????????????_??????????????????_????????????_????????????_????????????_??????????????????_??????????????????_????????????_???????????????_????????????_????????????????????????_????????????".split("_"),
            weekdays: "?????????????????????_???????????????_??????????????????_?????????_??????????????????????????????_???????????????_????????????".split("_"),
            weekdaysShort: "??????_???_???_???_?????????_??????_???".split("_"),
            weekdaysMin: "??????_???_???_???_?????????_??????_???".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /???????????????|???????????????/,
            isPM: function(e) {
                return "???????????????" === e;
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "???????????????" : "???????????????";
            },
            calendar: {
                sameDay: "[????????????????????? ????????????] LT",
                nextDay: "[??????????????? ????????????] LT",
                nextWeek: "dddd [????????????] LT",
                lastDay: "[???????????????????????? ????????????] LT",
                lastWeek: "dddd [??????????????????????????????] [????????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s?????????",
                past: "%s?????????",
                s: "??????????????????????????????????????????",
                ss: "%d ??????????????????",
                m: "?????????????????????",
                mm: "%d ????????????",
                h: "?????????????????????",
                hh: "%d ????????????",
                d: "?????????????????????",
                dd: "%d ????????????",
                M: "???????????????",
                MM: "%d ??????",
                y: "????????????????????????",
                yy: "%d ???????????????"
            },
            dayOfMonthOrdinalParse: /??????\d{1,2}/,
            ordinal: "??????%d",
            preparse: function(e) {
                return e.replace(/[??????????????????????????????]/g, (function(e) {
                    return n[e];
                }));
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e];
                }));
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "???",
            2: "???",
            3: "???",
            4: "???",
            5: "???",
            6: "???",
            7: "???",
            8: "???",
            9: "???",
            0: "???"
        }, n = {
            "???": "1",
            "???": "2",
            "???": "3",
            "???": "4",
            "???": "5",
            "???": "6",
            "???": "7",
            "???": "8",
            "???": "9",
            "???": "0"
        };
        e.defineLocale("kn", {
            months: "???????????????_????????????????????????_??????????????????_?????????????????????_?????????_????????????_???????????????_??????????????????_??????????????????????????????_??????????????????????????????_?????????????????????_????????????????????????".split("_"),
            monthsShort: "??????_???????????????_??????????????????_?????????????????????_?????????_????????????_???????????????_??????????????????_?????????????????????_?????????????????????_????????????_???????????????".split("_"),
            monthsParseExact: !0,
            weekdays: "?????????????????????_????????????????????????_?????????????????????_??????????????????_?????????????????????_????????????????????????_??????????????????".split("_"),
            weekdaysShort: "????????????_???????????????_????????????_?????????_????????????_???????????????_?????????".split("_"),
            weekdaysMin: "??????_????????????_??????_??????_??????_??????_???".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[????????????] LT",
                nextDay: "[????????????] LT",
                nextWeek: "dddd, LT",
                lastDay: "[??????????????????] LT",
                lastWeek: "[??????????????????] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ????????????",
                past: "%s ???????????????",
                s: "??????????????? ?????????????????????",
                ss: "%d ??????????????????????????????",
                m: "???????????? ???????????????",
                mm: "%d ???????????????",
                h: "???????????? ????????????",
                hh: "%d ????????????",
                d: "???????????? ?????????",
                dd: "%d ?????????",
                M: "???????????? ??????????????????",
                MM: "%d ??????????????????",
                y: "???????????? ????????????",
                yy: "%d ????????????"
            },
            preparse: function(e) {
                return e.replace(/[??????????????????????????????]/g, (function(e) {
                    return n[e];
                }));
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e];
                }));
            },
            meridiemParse: /??????????????????|????????????????????????|????????????????????????|????????????/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "??????????????????" === t ? e < 4 ? e : e + 12 : "????????????????????????" === t ? e : "????????????????????????" === t ? e >= 10 ? e : e + 12 : "????????????" === t ? e + 12 : void 0;
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "??????????????????" : e < 10 ? "????????????????????????" : e < 17 ? "????????????????????????" : e < 20 ? "????????????" : "??????????????????";
            },
            dayOfMonthOrdinalParse: /\d{1,2}(?????????)/,
            ordinal: function(e) {
                return e + "?????????";
            },
            week: {
                dow: 0,
                doy: 6
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("ko", {
            months: "1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???".split("_"),
            monthsShort: "1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???".split("_"),
            weekdays: "?????????_?????????_?????????_?????????_?????????_?????????_?????????".split("_"),
            weekdaysShort: "???_???_???_???_???_???_???".split("_"),
            weekdaysMin: "???_???_???_???_???_???_???".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY??? MMMM D???",
                LLL: "YYYY??? MMMM D??? A h:mm",
                LLLL: "YYYY??? MMMM D??? dddd A h:mm",
                l: "YYYY.MM.DD.",
                ll: "YYYY??? MMMM D???",
                lll: "YYYY??? MMMM D??? A h:mm",
                llll: "YYYY??? MMMM D??? dddd A h:mm"
            },
            calendar: {
                sameDay: "?????? LT",
                nextDay: "?????? LT",
                nextWeek: "dddd LT",
                lastDay: "?????? LT",
                lastWeek: "????????? dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ???",
                past: "%s ???",
                s: "??? ???",
                ss: "%d???",
                m: "1???",
                mm: "%d???",
                h: "??? ??????",
                hh: "%d??????",
                d: "??????",
                dd: "%d???",
                M: "??? ???",
                MM: "%d???",
                y: "??? ???",
                yy: "%d???"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(???|???|???)/,
            ordinal: function(e, t) {
                switch (t) {
                  case "d":
                  case "D":
                  case "DDD":
                    return e + "???";

                  case "M":
                    return e + "???";

                  case "w":
                  case "W":
                    return e + "???";

                  default:
                    return e;
                }
            },
            meridiemParse: /??????|??????/,
            isPM: function(e) {
                return "??????" === e;
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "??????" : "??????";
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "??",
            2: "??",
            3: "??",
            4: "??",
            5: "??",
            6: "??",
            7: "??",
            8: "??",
            9: "??",
            0: "??"
        }, n = {
            "??": "1",
            "??": "2",
            "??": "3",
            "??": "4",
            "??": "5",
            "??": "6",
            "??": "7",
            "??": "8",
            "??": "9",
            "??": "0"
        }, a = [ "???????????? ??????????", "??????????", "??????????", "??????????", "??????????", "????????????????", "????????????", "??????", "??????????????", "???????????? ??????????", "???????????? ??????????", "???????????? ??????????" ];
        e.defineLocale("ku", {
            months: a,
            monthsShort: a,
            weekdays: "?????????????????????????_??????????????????????_????????????????????_????????????????????????_????????????????????????_?????????????_????????????????".split("_"),
            weekdaysShort: "??????????????????_???????????????_?????????????_?????????????????_?????????????????_?????????????_????????????????".split("_"),
            weekdaysMin: "??_??_??_??_??_??_??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /???????????????|???????????????/,
            isPM: function(e) {
                return /???????????????/.test(e);
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "???????????????" : "???????????????";
            },
            calendar: {
                sameDay: "[????????????? ??????????????] LT",
                nextDay: "[??????????????? ??????????????] LT",
                nextWeek: "dddd [??????????????] LT",
                lastDay: "[?????????? ??????????????] LT",
                lastWeek: "dddd [??????????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "??????? %s",
                past: "%s",
                s: "??????????? ????????????????????",
                ss: "??????????? %d",
                m: "????????? ?????????????",
                mm: "%d ?????????????",
                h: "????????? ??????????????",
                hh: "%d ??????????????",
                d: "????????? ??????",
                dd: "%d ??????",
                M: "????????? ????????",
                MM: "%d ????????",
                y: "????????? ??????",
                yy: "%d ??????"
            },
            preparse: function(e) {
                return e.replace(/[????????????????????]/g, (function(e) {
                    return n[e];
                })).replace(/??/g, ",");
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e];
                })).replace(/,/g, "??");
            },
            week: {
                dow: 6,
                doy: 12
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            0: "-????",
            1: "-????",
            2: "-????",
            3: "-????",
            4: "-????",
            5: "-????",
            6: "-????",
            7: "-????",
            8: "-????",
            9: "-????",
            10: "-????",
            20: "-????",
            30: "-????",
            40: "-????",
            50: "-????",
            60: "-????",
            70: "-????",
            80: "-????",
            90: "-????",
            100: "-????"
        };
        e.defineLocale("ky", {
            months: "????????????_??????????????_????????_????????????_??????_????????_????????_????????????_????????????????_??????????????_????????????_??????????????".split("_"),
            monthsShort: "??????_??????_????????_??????_??????_????????_????????_??????_??????_??????_??????_??????".split("_"),
            weekdays: "????????????????_????????????????_????????????????_????????????????_????????????????_????????_????????????".split("_"),
            weekdaysShort: "??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdaysMin: "????_????_????_????_????_????_????".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[?????????? ????????] LT",
                nextDay: "[?????????? ????????] LT",
                nextWeek: "dddd [????????] LT",
                lastDay: "[?????????? ????????] LT",
                lastWeek: "[?????????? ??????????????] dddd [????????] [????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ????????????",
                past: "%s ??????????",
                s: "?????????????? ????????????",
                ss: "%d ????????????",
                m: "?????? ??????????",
                mm: "%d ??????????",
                h: "?????? ????????",
                hh: "%d ????????",
                d: "?????? ??????",
                dd: "%d ??????",
                M: "?????? ????",
                MM: "%d ????",
                y: "?????? ??????",
                yy: "%d ??????"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(????|????|????|????)/,
            ordinal: function(e) {
                return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null]);
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n, a) {
            var r = {
                m: [ "eng Minutt", "enger Minutt" ],
                h: [ "eng Stonn", "enger Stonn" ],
                d: [ "een Dag", "engem Dag" ],
                M: [ "ee Mount", "engem Mount" ],
                y: [ "ee Joer", "engem Joer" ]
            };
            return t ? r[n][0] : r[n][1];
        }
        function n(e) {
            if (e = parseInt(e, 10), isNaN(e)) return !1;
            if (e < 0) return !0;
            if (e < 10) return 4 <= e && e <= 7;
            if (e < 100) {
                var t = e % 10;
                return n(0 === t ? e / 10 : t);
            }
            if (e < 1e4) {
                for (;e >= 10; ) e /= 10;
                return n(e);
            }
            return n(e /= 1e3);
        }
        e.defineLocale("lb", {
            months: "Januar_Februar_M??erz_Abr??ll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonndeg_M??indeg_D??nschdeg_M??ttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
            weekdaysShort: "So._M??._D??._M??._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_M??_D??_M??_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm [Auer]",
                LTS: "H:mm:ss [Auer]",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm [Auer]",
                LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
            },
            calendar: {
                sameDay: "[Haut um] LT",
                sameElse: "L",
                nextDay: "[Muer um] LT",
                nextWeek: "dddd [um] LT",
                lastDay: "[G??schter um] LT",
                lastWeek: function() {
                    switch (this.day()) {
                      case 2:
                      case 4:
                        return "[Leschten] dddd [um] LT";

                      default:
                        return "[Leschte] dddd [um] LT";
                    }
                }
            },
            relativeTime: {
                future: function(e) {
                    return n(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e;
                },
                past: function(e) {
                    return n(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e;
                },
                s: "e puer Sekonnen",
                ss: "%d Sekonnen",
                m: t,
                mm: "%d Minutten",
                h: t,
                hh: "%d Stonnen",
                d: t,
                dd: "%d Deeg",
                M: t,
                MM: "%d M??int",
                y: t,
                yy: "%d Joer"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("lo", {
            months: "??????????????????_???????????????_????????????_????????????_?????????????????????_??????????????????_?????????????????????_???????????????_???????????????_????????????_???????????????_???????????????".split("_"),
            monthsShort: "??????????????????_???????????????_????????????_????????????_?????????????????????_??????????????????_?????????????????????_???????????????_???????????????_????????????_???????????????_???????????????".split("_"),
            weekdays: "???????????????_?????????_??????????????????_?????????_???????????????_?????????_????????????".split("_"),
            weekdaysShort: "?????????_?????????_??????????????????_?????????_???????????????_?????????_????????????".split("_"),
            weekdaysMin: "???_???_??????_???_??????_??????_???".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "?????????dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /????????????????????????|??????????????????/,
            isPM: function(e) {
                return "??????????????????" === e;
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "????????????????????????" : "??????????????????";
            },
            calendar: {
                sameDay: "[??????????????????????????????] LT",
                nextDay: "[?????????????????????????????????] LT",
                nextWeek: "[?????????]dddd[?????????????????????] LT",
                lastDay: "[???????????????????????????????????????] LT",
                lastWeek: "[?????????]dddd[?????????????????????????????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "????????? %s",
                past: "%s??????????????????",
                s: "????????????????????????????????????????????????",
                ss: "%d ??????????????????",
                m: "1 ????????????",
                mm: "%d ????????????",
                h: "1 ?????????????????????",
                hh: "%d ?????????????????????",
                d: "1 ?????????",
                dd: "%d ?????????",
                M: "1 ???????????????",
                MM: "%d ???????????????",
                y: "1 ??????",
                yy: "%d ??????"
            },
            dayOfMonthOrdinalParse: /(?????????)\d{1,2}/,
            ordinal: function(e) {
                return "?????????" + e;
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            ss: "sekund??_sekund??i??_sekundes",
            m: "minut??_minut??s_minut??",
            mm: "minut??s_minu??i??_minutes",
            h: "valanda_valandos_valand??",
            hh: "valandos_valand??_valandas",
            d: "diena_dienos_dien??",
            dd: "dienos_dien??_dienas",
            M: "m??nuo_m??nesio_m??nes??",
            MM: "m??nesiai_m??nesi??_m??nesius",
            y: "metai_met??_metus",
            yy: "metai_met??_metus"
        };
        function n(e, t, n, a) {
            return t ? r(n)[0] : a ? r(n)[1] : r(n)[2];
        }
        function a(e) {
            return e % 10 == 0 || e > 10 && e < 20;
        }
        function r(e) {
            return t[e].split("_");
        }
        function s(e, t, s, i) {
            var o = e + " ";
            return 1 === e ? o + n(0, t, s[0], i) : t ? o + (a(e) ? r(s)[1] : r(s)[0]) : i ? o + r(s)[1] : o + (a(e) ? r(s)[1] : r(s)[2]);
        }
        e.defineLocale("lt", {
            months: {
                format: "sausio_vasario_kovo_baland??io_gegu????s_bir??elio_liepos_rugpj????io_rugs??jo_spalio_lapkri??io_gruod??io".split("_"),
                standalone: "sausis_vasaris_kovas_balandis_gegu????_bir??elis_liepa_rugpj??tis_rugs??jis_spalis_lapkritis_gruodis".split("_"),
                isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
            },
            monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
            weekdays: {
                format: "sekmadien??_pirmadien??_antradien??_tre??iadien??_ketvirtadien??_penktadien??_??e??tadien??".split("_"),
                standalone: "sekmadienis_pirmadienis_antradienis_tre??iadienis_ketvirtadienis_penktadienis_??e??tadienis".split("_"),
                isFormat: /dddd HH:mm/
            },
            weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_??e??".split("_"),
            weekdaysMin: "S_P_A_T_K_Pn_??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY [m.] MMMM D [d.]",
                LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                l: "YYYY-MM-DD",
                ll: "YYYY [m.] MMMM D [d.]",
                lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
            },
            calendar: {
                sameDay: "[??iandien] LT",
                nextDay: "[Rytoj] LT",
                nextWeek: "dddd LT",
                lastDay: "[Vakar] LT",
                lastWeek: "[Pra??jus??] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "po %s",
                past: "prie?? %s",
                s: function(e, t, n, a) {
                    return t ? "kelios sekund??s" : a ? "keli?? sekund??i??" : "kelias sekundes";
                },
                ss: s,
                m: n,
                mm: s,
                h: n,
                hh: s,
                d: n,
                dd: s,
                M: n,
                MM: s,
                y: n,
                yy: s
            },
            dayOfMonthOrdinalParse: /\d{1,2}-oji/,
            ordinal: function(e) {
                return e + "-oji";
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            ss: "sekundes_sekund??m_sekunde_sekundes".split("_"),
            m: "min??tes_min??t??m_min??te_min??tes".split("_"),
            mm: "min??tes_min??t??m_min??te_min??tes".split("_"),
            h: "stundas_stund??m_stunda_stundas".split("_"),
            hh: "stundas_stund??m_stunda_stundas".split("_"),
            d: "dienas_dien??m_diena_dienas".split("_"),
            dd: "dienas_dien??m_diena_dienas".split("_"),
            M: "m??ne??a_m??ne??iem_m??nesis_m??ne??i".split("_"),
            MM: "m??ne??a_m??ne??iem_m??nesis_m??ne??i".split("_"),
            y: "gada_gadiem_gads_gadi".split("_"),
            yy: "gada_gadiem_gads_gadi".split("_")
        };
        function n(e, t, n) {
            return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1];
        }
        function a(e, a, r) {
            return e + " " + n(t[r], e, a);
        }
        function r(e, a, r) {
            return n(t[r], e, a);
        }
        e.defineLocale("lv", {
            months: "janv??ris_febru??ris_marts_apr??lis_maijs_j??nijs_j??lijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_j??n_j??l_aug_sep_okt_nov_dec".split("_"),
            weekdays: "sv??tdiena_pirmdiena_otrdiena_tre??diena_ceturtdiena_piektdiena_sestdiena".split("_"),
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY.",
                LL: "YYYY. [gada] D. MMMM",
                LLL: "YYYY. [gada] D. MMMM, HH:mm",
                LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
            },
            calendar: {
                sameDay: "[??odien pulksten] LT",
                nextDay: "[R??t pulksten] LT",
                nextWeek: "dddd [pulksten] LT",
                lastDay: "[Vakar pulksten] LT",
                lastWeek: "[Pag??ju????] dddd [pulksten] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "p??c %s",
                past: "pirms %s",
                s: function(e, t) {
                    return t ? "da??as sekundes" : "da????m sekund??m";
                },
                ss: a,
                m: r,
                mm: a,
                h: r,
                hh: a,
                d: r,
                dd: a,
                M: r,
                MM: a,
                y: r,
                yy: a
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            words: {
                ss: [ "sekund", "sekunda", "sekundi" ],
                m: [ "jedan minut", "jednog minuta" ],
                mm: [ "minut", "minuta", "minuta" ],
                h: [ "jedan sat", "jednog sata" ],
                hh: [ "sat", "sata", "sati" ],
                dd: [ "dan", "dana", "dana" ],
                MM: [ "mjesec", "mjeseca", "mjeseci" ],
                yy: [ "godina", "godine", "godina" ]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
            },
            translate: function(e, n, a) {
                var r = t.words[a];
                return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r);
            }
        };
        e.defineLocale("me", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_??etvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._??et._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_??e_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sjutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                      case 0:
                        return "[u] [nedjelju] [u] LT";

                      case 3:
                        return "[u] [srijedu] [u] LT";

                      case 6:
                        return "[u] [subotu] [u] LT";

                      case 1:
                      case 2:
                      case 4:
                      case 5:
                        return "[u] dddd [u] LT";
                    }
                },
                lastDay: "[ju??e u] LT",
                lastWeek: function() {
                    return [ "[pro??le] [nedjelje] [u] LT", "[pro??log] [ponedjeljka] [u] LT", "[pro??log] [utorka] [u] LT", "[pro??le] [srijede] [u] LT", "[pro??log] [??etvrtka] [u] LT", "[pro??log] [petka] [u] LT", "[pro??le] [subote] [u] LT" ][this.day()];
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "nekoliko sekundi",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mjesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("mi", {
            months: "Kohi-t??te_Hui-tanguru_Pout??-te-rangi_Paenga-wh??wh??_Haratua_Pipiri_H??ngoingoi_Here-turi-k??k??_Mahuru_Whiringa-??-nuku_Whiringa-??-rangi_Hakihea".split("_"),
            monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_H??ngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
            monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
            weekdays: "R??tapu_Mane_T??rei_Wenerei_T??ite_Paraire_H??tarei".split("_"),
            weekdaysShort: "Ta_Ma_T??_We_T??i_Pa_H??".split("_"),
            weekdaysMin: "Ta_Ma_T??_We_T??i_Pa_H??".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [i] HH:mm",
                LLLL: "dddd, D MMMM YYYY [i] HH:mm"
            },
            calendar: {
                sameDay: "[i teie mahana, i] LT",
                nextDay: "[apopo i] LT",
                nextWeek: "dddd [i] LT",
                lastDay: "[inanahi i] LT",
                lastWeek: "dddd [whakamutunga i] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i roto i %s",
                past: "%s i mua",
                s: "te h??kona ruarua",
                ss: "%d h??kona",
                m: "he meneti",
                mm: "%d meneti",
                h: "te haora",
                hh: "%d haora",
                d: "he ra",
                dd: "%d ra",
                M: "he marama",
                MM: "%d marama",
                y: "he tau",
                yy: "%d tau"
            },
            dayOfMonthOrdinalParse: /\d{1,2}??/,
            ordinal: "%d??",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("mk", {
            months: "??????????????_????????????????_????????_??????????_??????_????????_????????_????????????_??????????????????_????????????????_??????????????_????????????????".split("_"),
            monthsShort: "??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdays: "????????????_????????????????????_??????????????_??????????_????????????????_??????????_????????????".split("_"),
            weekdaysShort: "??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdaysMin: "??e_??o_????_????_????_????_??a".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[?????????? ????] LT",
                nextDay: "[???????? ????] LT",
                nextWeek: "[????] dddd [????] LT",
                lastDay: "[?????????? ????] LT",
                lastWeek: function() {
                    switch (this.day()) {
                      case 0:
                      case 3:
                      case 6:
                        return "[????????????????????] dddd [????] LT";

                      case 1:
                      case 2:
                      case 4:
                      case 5:
                        return "[????????????????????] dddd [????] LT";
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "?????????? %s",
                past: "???????? %s",
                s: "?????????????? ??????????????",
                ss: "%d ??????????????",
                m: "????????????",
                mm: "%d ????????????",
                h: "??????",
                hh: "%d ????????",
                d: "??????",
                dd: "%d ????????",
                M: "??????????",
                MM: "%d ????????????",
                y: "????????????",
                yy: "%d ????????????"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(????|????|????|????|????|????)/,
            ordinal: function(e) {
                var t = e % 10, n = e % 100;
                return 0 === e ? e + "-????" : 0 === n ? e + "-????" : n > 10 && n < 20 ? e + "-????" : 1 === t ? e + "-????" : 2 === t ? e + "-????" : 7 === t || 8 === t ? e + "-????" : e + "-????";
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("ml", {
            months: "??????????????????_???????????????????????????_?????????????????????_??????????????????_????????????_?????????_????????????_????????????????????????_??????????????????????????????_?????????????????????_???????????????_??????????????????".split("_"),
            monthsShort: "?????????._??????????????????._?????????._???????????????._????????????_?????????_????????????._??????._?????????????????????._???????????????._?????????._????????????.".split("_"),
            monthsParseExact: !0,
            weekdays: "????????????????????????_??????????????????????????????_???????????????????????????_????????????????????????_???????????????????????????_?????????????????????????????????_????????????????????????".split("_"),
            weekdaysShort: "????????????_??????????????????_???????????????_????????????_??????????????????_??????????????????_?????????".split("_"),
            weekdaysMin: "??????_??????_??????_??????_????????????_??????_???".split("_"),
            longDateFormat: {
                LT: "A h:mm -??????",
                LTS: "A h:mm:ss -??????",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm -??????",
                LLLL: "dddd, D MMMM YYYY, A h:mm -??????"
            },
            calendar: {
                sameDay: "[???????????????] LT",
                nextDay: "[????????????] LT",
                nextWeek: "dddd, LT",
                lastDay: "[??????????????????] LT",
                lastWeek: "[??????????????????] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ?????????????????????",
                past: "%s ???????????????",
                s: "????????? ???????????????????????????",
                ss: "%d ????????????????????????",
                m: "????????? ????????????????????????",
                mm: "%d ????????????????????????",
                h: "????????? ????????????????????????",
                hh: "%d ????????????????????????",
                d: "????????? ???????????????",
                dd: "%d ???????????????",
                M: "????????? ????????????",
                MM: "%d ????????????",
                y: "????????? ????????????",
                yy: "%d ????????????"
            },
            meridiemParse: /??????????????????|??????????????????|???????????? ?????????????????????|??????????????????????????????|??????????????????/i,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "??????????????????" === t && e >= 4 || "???????????? ?????????????????????" === t || "??????????????????????????????" === t ? e + 12 : e;
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "??????????????????" : e < 12 ? "??????????????????" : e < 17 ? "???????????? ?????????????????????" : e < 20 ? "??????????????????????????????" : "??????????????????";
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n, a) {
            switch (n) {
              case "s":
                return t ? "???????????? ????????????" : "???????????? ????????????????";

              case "ss":
                return e + (t ? " ????????????" : " ????????????????");

              case "m":
              case "mm":
                return e + (t ? " ??????????" : " ??????????????");

              case "h":
              case "hh":
                return e + (t ? " ??????" : " ????????????");

              case "d":
              case "dd":
                return e + (t ? " ????????" : " ????????????");

              case "M":
              case "MM":
                return e + (t ? " ??????" : " ??????????");

              case "y":
              case "yy":
                return e + (t ? " ??????" : " ????????????");

              default:
                return e;
            }
        }
        e.defineLocale("mn", {
            months: "?????????????????? ??????_???????????????????? ??????_?????????????????????? ??????_?????????????????????? ??????_?????????????????? ??????_?????????????????????? ??????_?????????????????? ??????_???????????????????? ??????_???????????????? ??????_???????????????????? ??????_?????????? ?????????????????? ??????_?????????? ???????????????????? ??????".split("_"),
            monthsShort: "1 ??????_2 ??????_3 ??????_4 ??????_5 ??????_6 ??????_7 ??????_8 ??????_9 ??????_10 ??????_11 ??????_12 ??????".split("_"),
            monthsParseExact: !0,
            weekdays: "??????_??????????_????????????_????????????_??????????_????????????_??????????".split("_"),
            weekdaysShort: "??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdaysMin: "????_????_????_????_????_????_????".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY ?????? MMMM???? D",
                LLL: "YYYY ?????? MMMM???? D HH:mm",
                LLLL: "dddd, YYYY ?????? MMMM???? D HH:mm"
            },
            meridiemParse: /????|????/i,
            isPM: function(e) {
                return "????" === e;
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "????" : "????";
            },
            calendar: {
                sameDay: "[??????????????] LT",
                nextDay: "[??????????????] LT",
                nextWeek: "[????????] dddd LT",
                lastDay: "[??????????????] LT",
                lastWeek: "[????????????????] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ??????????",
                past: "%s ????????",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2} ????????/,
            ordinal: function(e, t) {
                switch (t) {
                  case "d":
                  case "D":
                  case "DDD":
                    return e + " ????????";

                  default:
                    return e;
                }
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "???",
            2: "???",
            3: "???",
            4: "???",
            5: "???",
            6: "???",
            7: "???",
            8: "???",
            9: "???",
            0: "???"
        }, n = {
            "???": "1",
            "???": "2",
            "???": "3",
            "???": "4",
            "???": "5",
            "???": "6",
            "???": "7",
            "???": "8",
            "???": "9",
            "???": "0"
        };
        function a(e, t, n, a) {
            var r = "";
            if (t) switch (n) {
              case "s":
                r = "???????????? ???????????????";
                break;

              case "ss":
                r = "%d ???????????????";
                break;

              case "m":
                r = "?????? ???????????????";
                break;

              case "mm":
                r = "%d ??????????????????";
                break;

              case "h":
                r = "?????? ?????????";
                break;

              case "hh":
                r = "%d ?????????";
                break;

              case "d":
                r = "?????? ????????????";
                break;

              case "dd":
                r = "%d ????????????";
                break;

              case "M":
                r = "?????? ???????????????";
                break;

              case "MM":
                r = "%d ???????????????";
                break;

              case "y":
                r = "?????? ????????????";
                break;

              case "yy":
                r = "%d ???????????????";
            } else switch (n) {
              case "s":
                r = "???????????? ?????????????????????";
                break;

              case "ss":
                r = "%d ?????????????????????";
                break;

              case "m":
                r = "????????? ??????????????????";
                break;

              case "mm":
                r = "%d ?????????????????????";
                break;

              case "h":
                r = "????????? ????????????";
                break;

              case "hh":
                r = "%d ???????????????";
                break;

              case "d":
                r = "????????? ???????????????";
                break;

              case "dd":
                r = "%d ??????????????????";
                break;

              case "M":
                r = "????????? ?????????????????????";
                break;

              case "MM":
                r = "%d ????????????????????????";
                break;

              case "y":
                r = "????????? ???????????????";
                break;

              case "yy":
                r = "%d ??????????????????";
            }
            return r.replace(/%d/i, e);
        }
        e.defineLocale("mr", {
            months: "????????????????????????_??????????????????????????????_???????????????_??????????????????_??????_?????????_????????????_???????????????_????????????????????????_?????????????????????_???????????????????????????_?????????????????????".split("_"),
            monthsShort: "????????????._??????????????????._???????????????._???????????????._??????._?????????._????????????._??????._??????????????????._???????????????._?????????????????????._???????????????.".split("_"),
            monthsParseExact: !0,
            weekdays: "??????????????????_??????????????????_?????????????????????_??????????????????_?????????????????????_????????????????????????_??????????????????".split("_"),
            weekdaysShort: "?????????_?????????_????????????_?????????_????????????_???????????????_?????????".split("_"),
            weekdaysMin: "???_??????_??????_??????_??????_??????_???".split("_"),
            longDateFormat: {
                LT: "A h:mm ???????????????",
                LTS: "A h:mm:ss ???????????????",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm ???????????????",
                LLLL: "dddd, D MMMM YYYY, A h:mm ???????????????"
            },
            calendar: {
                sameDay: "[??????] LT",
                nextDay: "[???????????????] LT",
                nextWeek: "dddd, LT",
                lastDay: "[?????????] LT",
                lastWeek: "[???????????????] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s???????????????",
                past: "%s??????????????????",
                s: a,
                ss: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            preparse: function(e) {
                return e.replace(/[??????????????????????????????]/g, (function(e) {
                    return n[e];
                }));
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e];
                }));
            },
            meridiemParse: /??????????????????|???????????????|??????????????????|????????????????????????/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "??????????????????" === t ? e < 4 ? e : e + 12 : "???????????????" === t ? e : "??????????????????" === t ? e >= 10 ? e : e + 12 : "????????????????????????" === t ? e + 12 : void 0;
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "??????????????????" : e < 10 ? "???????????????" : e < 17 ? "??????????????????" : e < 20 ? "????????????????????????" : "??????????????????";
            },
            week: {
                dow: 0,
                doy: 6
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("ms", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0;
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam";
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("ms-my", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0;
            },
            meridiem: function(e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam";
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("mt", {
            months: "Jannar_Frar_Marzu_April_Mejju_??unju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Di??embru".split("_"),
            monthsShort: "Jan_Fra_Mar_Apr_Mej_??un_Lul_Aww_Set_Ott_Nov_Di??".split("_"),
            weekdays: "Il-??add_It-Tnejn_It-Tlieta_L-Erbg??a_Il-??amis_Il-??img??a_Is-Sibt".split("_"),
            weekdaysShort: "??ad_Tne_Tli_Erb_??am_??im_Sib".split("_"),
            weekdaysMin: "??a_Tn_Tl_Er_??a_??i_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Illum fil-]LT",
                nextDay: "[G??ada fil-]LT",
                nextWeek: "dddd [fil-]LT",
                lastDay: "[Il-biera?? fil-]LT",
                lastWeek: "dddd [li g??adda] [fil-]LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "f??? %s",
                past: "%s ilu",
                s: "ftit sekondi",
                ss: "%d sekondi",
                m: "minuta",
                mm: "%d minuti",
                h: "sieg??a",
                hh: "%d sieg??at",
                d: "??urnata",
                dd: "%d ??ranet",
                M: "xahar",
                MM: "%d xhur",
                y: "sena",
                yy: "%d sni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}??/,
            ordinal: "%d??",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "???",
            2: "???",
            3: "???",
            4: "???",
            5: "???",
            6: "???",
            7: "???",
            8: "???",
            9: "???",
            0: "???"
        }, n = {
            "???": "1",
            "???": "2",
            "???": "3",
            "???": "4",
            "???": "5",
            "???": "6",
            "???": "7",
            "???": "8",
            "???": "9",
            "???": "0"
        };
        e.defineLocale("my", {
            months: "????????????????????????_??????????????????????????????_?????????_????????????_??????_????????????_?????????????????????_??????????????????_????????????????????????_??????????????????????????????_????????????????????????_?????????????????????".split("_"),
            monthsShort: "?????????_??????_?????????_?????????_??????_????????????_???????????????_??????_?????????_???????????????_?????????_??????".split("_"),
            weekdays: "???????????????????????????_?????????????????????_??????????????????_????????????????????????_????????????????????????_??????????????????_?????????".split("_"),
            weekdaysShort: "?????????_??????_??????_?????????_?????????_?????????_??????".split("_"),
            weekdaysMin: "?????????_??????_??????_?????????_?????????_?????????_??????".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[?????????.] LT [?????????]",
                nextDay: "[????????????????????????] LT [?????????]",
                nextWeek: "dddd LT [?????????]",
                lastDay: "[?????????.???] LT [?????????]",
                lastWeek: "[??????????????????????????????] dddd LT [?????????]",
                sameElse: "L"
            },
            relativeTime: {
                future: "?????????????????? %s ?????????",
                past: "?????????????????????????????? %s ???",
                s: "??????????????????.????????????????????????",
                ss: "%d ?????????????????????",
                m: "????????????????????????",
                mm: "%d ???????????????",
                h: "?????????????????????",
                hh: "%d ????????????",
                d: "??????????????????",
                dd: "%d ?????????",
                M: "????????????",
                MM: "%d ???",
                y: "?????????????????????",
                yy: "%d ????????????"
            },
            preparse: function(e) {
                return e.replace(/[??????????????????????????????]/g, (function(e) {
                    return n[e];
                }));
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e];
                }));
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "s??ndag_mandag_tirsdag_onsdag_torsdag_fredag_l??rdag".split("_"),
            weekdaysShort: "s??._ma._ti._on._to._fr._l??.".split("_"),
            weekdaysMin: "s??_ma_ti_on_to_fr_l??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i g??r kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "noen sekunder",
                ss: "%d sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                M: "en m??ned",
                MM: "%d m??neder",
                y: "ett ??r",
                yy: "%d ??r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "???",
            2: "???",
            3: "???",
            4: "???",
            5: "???",
            6: "???",
            7: "???",
            8: "???",
            9: "???",
            0: "???"
        }, n = {
            "???": "1",
            "???": "2",
            "???": "3",
            "???": "4",
            "???": "5",
            "???": "6",
            "???": "7",
            "???": "8",
            "???": "9",
            "???": "0"
        };
        e.defineLocale("ne", {
            months: "???????????????_???????????????????????????_???????????????_??????????????????_??????_?????????_???????????????_???????????????_??????????????????????????????_?????????????????????_????????????????????????_????????????????????????".split("_"),
            monthsShort: "??????._??????????????????._???????????????_???????????????._??????_?????????_???????????????._??????._???????????????._???????????????._????????????._????????????.".split("_"),
            monthsParseExact: !0,
            weekdays: "??????????????????_??????????????????_????????????????????????_??????????????????_?????????????????????_????????????????????????_??????????????????".split("_"),
            weekdaysShort: "?????????._?????????._???????????????._?????????._????????????._???????????????._?????????.".split("_"),
            weekdaysMin: "???._??????._??????._??????._??????._??????._???.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "A?????? h:mm ?????????",
                LTS: "A?????? h:mm:ss ?????????",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A?????? h:mm ?????????",
                LLLL: "dddd, D MMMM YYYY, A?????? h:mm ?????????"
            },
            preparse: function(e) {
                return e.replace(/[??????????????????????????????]/g, (function(e) {
                    return n[e];
                }));
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e];
                }));
            },
            meridiemParse: /????????????|???????????????|??????????????????|????????????/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "????????????" === t ? e < 4 ? e : e + 12 : "???????????????" === t ? e : "??????????????????" === t ? e >= 10 ? e : e + 12 : "????????????" === t ? e + 12 : void 0;
            },
            meridiem: function(e, t, n) {
                return e < 3 ? "????????????" : e < 12 ? "???????????????" : e < 16 ? "??????????????????" : e < 20 ? "????????????" : "????????????";
            },
            calendar: {
                sameDay: "[??????] LT",
                nextDay: "[????????????] LT",
                nextWeek: "[???????????????] dddd[,] LT",
                lastDay: "[????????????] LT",
                lastWeek: "[????????????] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s??????",
                past: "%s ???????????????",
                s: "???????????? ????????????",
                ss: "%d ?????????????????????",
                m: "?????? ???????????????",
                mm: "%d ???????????????",
                h: "?????? ???????????????",
                hh: "%d ???????????????",
                d: "?????? ?????????",
                dd: "%d ?????????",
                M: "?????? ???????????????",
                MM: "%d ???????????????",
                y: "?????? ????????????",
                yy: "%d ????????????"
            },
            week: {
                dow: 0,
                doy: 6
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"), n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"), a = [ /^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i ], r = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(e, a) {
                return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t;
            },
            monthsRegex: r,
            monthsShortRegex: r,
            monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "????n minuut",
                mm: "%d minuten",
                h: "????n uur",
                hh: "%d uur",
                d: "????n dag",
                dd: "%d dagen",
                M: "????n maand",
                MM: "%d maanden",
                y: "????n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"), n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"), a = [ /^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i ], r = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl-be", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function(e, a) {
                return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t;
            },
            monthsRegex: r,
            monthsShortRegex: r,
            monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "????n minuut",
                mm: "%d minuten",
                h: "????n uur",
                hh: "%d uur",
                d: "????n dag",
                dd: "%d dagen",
                M: "????n maand",
                MM: "%d maanden",
                y: "????n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function(e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("nn", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sundag_m??ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
            weekdaysShort: "sun_m??n_tys_ons_tor_fre_lau".split("_"),
            weekdaysMin: "su_m??_ty_on_to_fr_l??".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[I dag klokka] LT",
                nextDay: "[I morgon klokka] LT",
                nextWeek: "dddd [klokka] LT",
                lastDay: "[I g??r klokka] LT",
                lastWeek: "[F??reg??ande] dddd [klokka] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s sidan",
                s: "nokre sekund",
                ss: "%d sekund",
                m: "eit minutt",
                mm: "%d minutt",
                h: "ein time",
                hh: "%d timar",
                d: "ein dag",
                dd: "%d dagar",
                M: "ein m??nad",
                MM: "%d m??nader",
                y: "eit ??r",
                yy: "%d ??r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "???",
            2: "???",
            3: "???",
            4: "???",
            5: "???",
            6: "???",
            7: "???",
            8: "???",
            9: "???",
            0: "???"
        }, n = {
            "???": "1",
            "???": "2",
            "???": "3",
            "???": "4",
            "???": "5",
            "???": "6",
            "???": "7",
            "???": "8",
            "???": "9",
            "???": "0"
        };
        e.defineLocale("pa-in", {
            months: "???????????????_??????????????????_????????????_??????????????????_??????_?????????_???????????????_????????????_???????????????_??????????????????_???????????????_???????????????".split("_"),
            monthsShort: "???????????????_??????????????????_????????????_??????????????????_??????_?????????_???????????????_????????????_???????????????_??????????????????_???????????????_???????????????".split("_"),
            weekdays: "???????????????_??????????????????_?????????????????????_??????????????????_??????????????????_???????????????????????????_???????????????????????????".split("_"),
            weekdaysShort: "??????_?????????_????????????_?????????_?????????_???????????????_????????????".split("_"),
            weekdaysMin: "??????_?????????_????????????_?????????_?????????_???????????????_????????????".split("_"),
            longDateFormat: {
                LT: "A h:mm ?????????",
                LTS: "A h:mm:ss ?????????",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm ?????????",
                LLLL: "dddd, D MMMM YYYY, A h:mm ?????????"
            },
            calendar: {
                sameDay: "[??????] LT",
                nextDay: "[??????] LT",
                nextWeek: "[????????????] dddd, LT",
                lastDay: "[??????] LT",
                lastWeek: "[???????????????] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ????????????",
                past: "%s ???????????????",
                s: "????????? ???????????????",
                ss: "%d ???????????????",
                m: "?????? ????????????",
                mm: "%d ????????????",
                h: "????????? ????????????",
                hh: "%d ????????????",
                d: "????????? ?????????",
                dd: "%d ?????????",
                M: "????????? ???????????????",
                MM: "%d ???????????????",
                y: "????????? ?????????",
                yy: "%d ?????????"
            },
            preparse: function(e) {
                return e.replace(/[??????????????????????????????]/g, (function(e) {
                    return n[e];
                }));
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e];
                }));
            },
            meridiemParse: /?????????|????????????|??????????????????|????????????/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "?????????" === t ? e < 4 ? e : e + 12 : "????????????" === t ? e : "??????????????????" === t ? e >= 10 ? e : e + 12 : "????????????" === t ? e + 12 : void 0;
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "?????????" : e < 10 ? "????????????" : e < 17 ? "??????????????????" : e < 20 ? "????????????" : "?????????";
            },
            week: {
                dow: 0,
                doy: 6
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = "stycze??_luty_marzec_kwiecie??_maj_czerwiec_lipiec_sierpie??_wrzesie??_pa??dziernik_listopad_grudzie??".split("_"), n = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze??nia_pa??dziernika_listopada_grudnia".split("_");
        function a(e) {
            return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1;
        }
        function r(e, t, n) {
            var r = e + " ";
            switch (n) {
              case "ss":
                return r + (a(e) ? "sekundy" : "sekund");

              case "m":
                return t ? "minuta" : "minut??";

              case "mm":
                return r + (a(e) ? "minuty" : "minut");

              case "h":
                return t ? "godzina" : "godzin??";

              case "hh":
                return r + (a(e) ? "godziny" : "godzin");

              case "MM":
                return r + (a(e) ? "miesi??ce" : "miesi??cy");

              case "yy":
                return r + (a(e) ? "lata" : "lat");
            }
        }
        e.defineLocale("pl", {
            months: function(e, a) {
                return e ? "" === a ? "(" + n[e.month()] + "|" + t[e.month()] + ")" : /D MMMM/.test(a) ? n[e.month()] : t[e.month()] : t;
            },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa??_lis_gru".split("_"),
            weekdays: "niedziela_poniedzia??ek_wtorek_??roda_czwartek_pi??tek_sobota".split("_"),
            weekdaysShort: "ndz_pon_wt_??r_czw_pt_sob".split("_"),
            weekdaysMin: "Nd_Pn_Wt_??r_Cz_Pt_So".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Dzi?? o] LT",
                nextDay: "[Jutro o] LT",
                nextWeek: function() {
                    switch (this.day()) {
                      case 0:
                        return "[W niedziel?? o] LT";

                      case 2:
                        return "[We wtorek o] LT";

                      case 3:
                        return "[W ??rod?? o] LT";

                      case 6:
                        return "[W sobot?? o] LT";

                      default:
                        return "[W] dddd [o] LT";
                    }
                },
                lastDay: "[Wczoraj o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                      case 0:
                        return "[W zesz???? niedziel?? o] LT";

                      case 3:
                        return "[W zesz???? ??rod?? o] LT";

                      case 6:
                        return "[W zesz???? sobot?? o] LT";

                      default:
                        return "[W zesz??y] dddd [o] LT";
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "%s temu",
                s: "kilka sekund",
                ss: r,
                m: r,
                mm: r,
                h: r,
                hh: r,
                d: "1 dzie??",
                dd: "%d dni",
                M: "miesi??c",
                MM: r,
                y: "rok",
                yy: r
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("pt", {
            months: "Janeiro_Fevereiro_Mar??o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Ter??a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S??bado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S??b".split("_"),
            weekdaysMin: "Do_2??_3??_4??_5??_6??_S??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hoje ??s] LT",
                nextDay: "[Amanh?? ??s] LT",
                nextWeek: "dddd [??s] LT",
                lastDay: "[Ontem ??s] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[??ltimo] dddd [??s] LT" : "[??ltima] dddd [??s] LT";
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "h?? %s",
                s: "segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um m??s",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}??/,
            ordinal: "%d??",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("pt-br", {
            months: "Janeiro_Fevereiro_Mar??o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Ter??a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S??bado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S??b".split("_"),
            weekdaysMin: "Do_2??_3??_4??_5??_6??_S??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [??s] HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY [??s] HH:mm"
            },
            calendar: {
                sameDay: "[Hoje ??s] LT",
                nextDay: "[Amanh?? ??s] LT",
                nextWeek: "dddd [??s] LT",
                lastDay: "[Ontem ??s] LT",
                lastWeek: function() {
                    return 0 === this.day() || 6 === this.day() ? "[??ltimo] dddd [??s] LT" : "[??ltima] dddd [??s] LT";
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "h?? %s",
                s: "poucos segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um m??s",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}??/,
            ordinal: "%d??"
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n) {
            var a = " ";
            return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (a = " de "), e + a + {
                ss: "secunde",
                mm: "minute",
                hh: "ore",
                dd: "zile",
                MM: "luni",
                yy: "ani"
            }[n];
        }
        e.defineLocale("ro", {
            months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
            monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "duminic??_luni_mar??i_miercuri_joi_vineri_s??mb??t??".split("_"),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_S??m".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_S??".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[azi la] LT",
                nextDay: "[m??ine la] LT",
                nextWeek: "dddd [la] LT",
                lastDay: "[ieri la] LT",
                lastWeek: "[fosta] dddd [la] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "peste %s",
                past: "%s ??n urm??",
                s: "c??teva secunde",
                ss: t,
                m: "un minut",
                mm: t,
                h: "o or??",
                hh: t,
                d: "o zi",
                dd: t,
                M: "o lun??",
                MM: t,
                y: "un an",
                yy: t
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n) {
            var a, r;
            return "m" === n ? t ? "????????????" : "????????????" : e + " " + (a = +e, r = {
                ss: t ? "??????????????_??????????????_????????????" : "??????????????_??????????????_????????????",
                mm: t ? "????????????_????????????_??????????" : "????????????_????????????_??????????",
                hh: "??????_????????_??????????",
                dd: "????????_??????_????????",
                MM: "??????????_????????????_??????????????",
                yy: "??????_????????_??????"
            }[n].split("_"), a % 10 == 1 && a % 100 != 11 ? r[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? r[1] : r[2]);
        }
        var n = [ /^??????/i, /^??????/i, /^??????/i, /^??????/i, /^????[????]/i, /^??????/i, /^??????/i, /^??????/i, /^??????/i, /^??????/i, /^??????/i, /^??????/i ];
        e.defineLocale("ru", {
            months: {
                format: "????????????_??????????????_??????????_????????????_??????_????????_????????_??????????????_????????????????_??????????????_????????????_??????????????".split("_"),
                standalone: "????????????_??????????????_????????_????????????_??????_????????_????????_????????????_????????????????_??????????????_????????????_??????????????".split("_")
            },
            monthsShort: {
                format: "??????._????????._??????._??????._??????_????????_????????_??????._????????._??????._????????._??????.".split("_"),
                standalone: "??????._????????._????????_??????._??????_????????_????????_??????._????????._??????._????????._??????.".split("_")
            },
            weekdays: {
                standalone: "??????????????????????_??????????????????????_??????????????_??????????_??????????????_??????????????_??????????????".split("_"),
                format: "??????????????????????_??????????????????????_??????????????_??????????_??????????????_??????????????_??????????????".split("_"),
                isFormat: /\[ ?[????] ?(?:??????????????|??????????????????|??????)? ?\] ?dddd/
            },
            weekdaysShort: "????_????_????_????_????_????_????".split("_"),
            weekdaysMin: "????_????_????_????_????_????_????".split("_"),
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            monthsRegex: /^(??????????[????]|??????\.?|????????????[????]|?????????\.?|???????????|??????\.?|??????????[????]|??????\.?|????[????]|??????[????]|??????\.?|??????[????]|??????\.?|???????????????|??????\.?|??????????????[????]|?????????\.?|????????????[????]|??????\.?|??????????[????]|?????????\.?|????????????[????]|??????\.?)/i,
            monthsShortRegex: /^(??????????[????]|??????\.?|????????????[????]|?????????\.?|???????????|??????\.?|??????????[????]|??????\.?|????[????]|??????[????]|??????\.?|??????[????]|??????\.?|???????????????|??????\.?|??????????????[????]|?????????\.?|????????????[????]|??????\.?|??????????[????]|?????????\.?|????????????[????]|??????\.?)/i,
            monthsStrictRegex: /^(??????????[????]|????????????[????]|???????????|??????????[????]|????[????]|??????[????]|??????[????]|???????????????|??????????????[????]|????????????[????]|??????????[????]|????????????[????])/i,
            monthsShortStrictRegex: /^(??????\.|?????????\.|??????[??.]|??????\.|????[????]|??????[????.]|??????[????.]|??????\.|?????????\.|??????\.|?????????\.|??????\.)/i,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY ??.",
                LLL: "D MMMM YYYY ??., H:mm",
                LLLL: "dddd, D MMMM YYYY ??., H:mm"
            },
            calendar: {
                sameDay: "[??????????????, ??] LT",
                nextDay: "[????????????, ??] LT",
                lastDay: "[??????????, ??] LT",
                nextWeek: function(e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[????] dddd, [??] LT" : "[??] dddd, [??] LT";
                    switch (this.day()) {
                      case 0:
                        return "[?? ??????????????????] dddd, [??] LT";

                      case 1:
                      case 2:
                      case 4:
                        return "[?? ??????????????????] dddd, [??] LT";

                      case 3:
                      case 5:
                      case 6:
                        return "[?? ??????????????????] dddd, [??] LT";
                    }
                },
                lastWeek: function(e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[????] dddd, [??] LT" : "[??] dddd, [??] LT";
                    switch (this.day()) {
                      case 0:
                        return "[?? ??????????????] dddd, [??] LT";

                      case 1:
                      case 2:
                      case 4:
                        return "[?? ??????????????] dddd, [??] LT";

                      case 3:
                      case 5:
                      case 6:
                        return "[?? ??????????????] dddd, [??] LT";
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "?????????? %s",
                past: "%s ??????????",
                s: "?????????????????? ????????????",
                ss: t,
                m: t,
                mm: t,
                h: "??????",
                hh: t,
                d: "????????",
                dd: t,
                M: "??????????",
                MM: t,
                y: "??????",
                yy: t
            },
            meridiemParse: /????????|????????|??????|????????????/i,
            isPM: function(e) {
                return /^(??????|????????????)$/.test(e);
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "????????" : e < 12 ? "????????" : e < 17 ? "??????" : "????????????";
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(??|????|??)/,
            ordinal: function(e, t) {
                switch (t) {
                  case "M":
                  case "d":
                  case "DDD":
                    return e + "-??";

                  case "D":
                    return e + "-????";

                  case "w":
                  case "W":
                    return e + "-??";

                  default:
                    return e;
                }
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = [ "??????????", "??????????????", "????????", "??????????", "??????", "??????", "????????????", "????????", "??????????????", "????????????", "??????????", "??????????" ], n = [ "??????", "????????", "??????????", "????????", "????????", "??????", "????????" ];
        e.defineLocale("sd", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: n,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd?? D MMMM YYYY HH:mm"
            },
            meridiemParse: /??????|??????/,
            isPM: function(e) {
                return "??????" === e;
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "??????" : "??????";
            },
            calendar: {
                sameDay: "[????] LT",
                nextDay: "[??????????] LT",
                nextWeek: "dddd [???????? ???????? ????] LT",
                lastDay: "[??????????] LT",
                lastWeek: "[?????????? ????????] dddd [????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ??????",
                past: "%s ????",
                s: "?????? ??????????",
                ss: "%d ??????????",
                m: "???? ??????",
                mm: "%d ??????",
                h: "???? ????????",
                hh: "%d ????????",
                d: "???? ??????????",
                dd: "%d ??????????",
                M: "???? ??????????",
                MM: "%d ??????????",
                y: "???? ??????",
                yy: "%d ??????"
            },
            preparse: function(e) {
                return e.replace(/??/g, ",");
            },
            postformat: function(e) {
                return e.replace(/,/g, "??");
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("se", {
            months: "o????ajagem??nnu_guovvam??nnu_njuk??am??nnu_cuo??om??nnu_miessem??nnu_geassem??nnu_suoidnem??nnu_borgem??nnu_??ak??am??nnu_golggotm??nnu_sk??bmam??nnu_juovlam??nnu".split("_"),
            monthsShort: "o????j_guov_njuk_cuo_mies_geas_suoi_borg_??ak??_golg_sk??b_juov".split("_"),
            weekdays: "sotnabeaivi_vuoss??rga_ma????eb??rga_gaskavahkku_duorastat_bearjadat_l??vvardat".split("_"),
            weekdaysShort: "sotn_vuos_ma??_gask_duor_bear_l??v".split("_"),
            weekdaysMin: "s_v_m_g_d_b_L".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "MMMM D. [b.] YYYY",
                LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
            },
            calendar: {
                sameDay: "[otne ti] LT",
                nextDay: "[ihttin ti] LT",
                nextWeek: "dddd [ti] LT",
                lastDay: "[ikte ti] LT",
                lastWeek: "[ovddit] dddd [ti] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s gea??es",
                past: "ma??it %s",
                s: "moadde sekunddat",
                ss: "%d sekunddat",
                m: "okta minuhta",
                mm: "%d minuhtat",
                h: "okta diimmu",
                hh: "%d diimmut",
                d: "okta beaivi",
                dd: "%d beaivvit",
                M: "okta m??nnu",
                MM: "%d m??nut",
                y: "okta jahki",
                yy: "%d jagit"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("si", {
            months: "??????????????????_????????????????????????_??????????????????_????????????????????????_????????????_????????????_????????????_?????????????????????_?????????????????????????????????_????????????????????????_???????????????????????????_???????????????????????????".split("_"),
            monthsShort: "??????_?????????_????????????_?????????_????????????_????????????_????????????_?????????_????????????_?????????_????????????_????????????".split("_"),
            weekdays: "???????????????_???????????????_???????????????????????????_???????????????_??????????????????????????????????????????_????????????????????????_???????????????????????????".split("_"),
            weekdaysShort: "?????????_?????????_??????_?????????_???????????????_????????????_?????????".split("_"),
            weekdaysMin: "???_???_???_???_????????????_??????_??????".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "a h:mm",
                LTS: "a h:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY MMMM D",
                LLL: "YYYY MMMM D, a h:mm",
                LLLL: "YYYY MMMM D [????????????] dddd, a h:mm:ss"
            },
            calendar: {
                sameDay: "[??????] LT[???]",
                nextDay: "[?????????] LT[???]",
                nextWeek: "dddd LT[???]",
                lastDay: "[?????????] LT[???]",
                lastWeek: "[??????????????????] dddd LT[???]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s????????????",
                past: "%s?????? ?????????",
                s: "??????????????? ??????????????????",
                ss: "??????????????? %d",
                m: "???????????????????????????",
                mm: "???????????????????????? %d",
                h: "?????????",
                hh: "????????? %d",
                d: "????????????",
                dd: "????????? %d",
                M: "????????????",
                MM: "????????? %d",
                y: "?????????",
                yy: "????????? %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2} ????????????/,
            ordinal: function(e) {
                return e + " ????????????";
            },
            meridiemParse: /????????? ?????????|????????? ?????????|??????.???|???.???./,
            isPM: function(e) {
                return "???.???." === e || "????????? ?????????" === e;
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "???.???." : "????????? ?????????" : n ? "??????.???." : "????????? ?????????";
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = "janu??r_febru??r_marec_apr??l_m??j_j??n_j??l_august_september_okt??ber_november_december".split("_"), n = "jan_feb_mar_apr_m??j_j??n_j??l_aug_sep_okt_nov_dec".split("_");
        function a(e) {
            return e > 1 && e < 5;
        }
        function r(e, t, n, r) {
            var s = e + " ";
            switch (n) {
              case "s":
                return t || r ? "p??r sek??nd" : "p??r sekundami";

              case "ss":
                return t || r ? s + (a(e) ? "sekundy" : "sek??nd") : s + "sekundami";

              case "m":
                return t ? "min??ta" : r ? "min??tu" : "min??tou";

              case "mm":
                return t || r ? s + (a(e) ? "min??ty" : "min??t") : s + "min??tami";

              case "h":
                return t ? "hodina" : r ? "hodinu" : "hodinou";

              case "hh":
                return t || r ? s + (a(e) ? "hodiny" : "hod??n") : s + "hodinami";

              case "d":
                return t || r ? "de??" : "d??om";

              case "dd":
                return t || r ? s + (a(e) ? "dni" : "dn??") : s + "d??ami";

              case "M":
                return t || r ? "mesiac" : "mesiacom";

              case "MM":
                return t || r ? s + (a(e) ? "mesiace" : "mesiacov") : s + "mesiacmi";

              case "y":
                return t || r ? "rok" : "rokom";

              case "yy":
                return t || r ? s + (a(e) ? "roky" : "rokov") : s + "rokmi";
            }
        }
        e.defineLocale("sk", {
            months: t,
            monthsShort: n,
            weekdays: "nede??a_pondelok_utorok_streda_??tvrtok_piatok_sobota".split("_"),
            weekdaysShort: "ne_po_ut_st_??t_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_??t_pi_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[dnes o] LT",
                nextDay: "[zajtra o] LT",
                nextWeek: function() {
                    switch (this.day()) {
                      case 0:
                        return "[v nede??u o] LT";

                      case 1:
                      case 2:
                        return "[v] dddd [o] LT";

                      case 3:
                        return "[v stredu o] LT";

                      case 4:
                        return "[vo ??tvrtok o] LT";

                      case 5:
                        return "[v piatok o] LT";

                      case 6:
                        return "[v sobotu o] LT";
                    }
                },
                lastDay: "[v??era o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                      case 0:
                        return "[minul?? nede??u o] LT";

                      case 1:
                      case 2:
                        return "[minul??] dddd [o] LT";

                      case 3:
                        return "[minul?? stredu o] LT";

                      case 4:
                      case 5:
                        return "[minul??] dddd [o] LT";

                      case 6:
                        return "[minul?? sobotu o] LT";
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pred %s",
                s: r,
                ss: r,
                m: r,
                mm: r,
                h: r,
                hh: r,
                d: r,
                dd: r,
                M: r,
                MM: r,
                y: r,
                yy: r
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n, a) {
            var r = e + " ";
            switch (n) {
              case "s":
                return t || a ? "nekaj sekund" : "nekaj sekundami";

              case "ss":
                return r + (1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || a ? "sekundi" : "sekundah" : e < 5 ? t || a ? "sekunde" : "sekundah" : "sekund");

              case "m":
                return t ? "ena minuta" : "eno minuto";

              case "mm":
                return r + (1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || a ? "minuti" : "minutama" : e < 5 ? t || a ? "minute" : "minutami" : t || a ? "minut" : "minutami");

              case "h":
                return t ? "ena ura" : "eno uro";

              case "hh":
                return r + (1 === e ? t ? "ura" : "uro" : 2 === e ? t || a ? "uri" : "urama" : e < 5 ? t || a ? "ure" : "urami" : t || a ? "ur" : "urami");

              case "d":
                return t || a ? "en dan" : "enim dnem";

              case "dd":
                return r + (1 === e ? t || a ? "dan" : "dnem" : 2 === e ? t || a ? "dni" : "dnevoma" : t || a ? "dni" : "dnevi");

              case "M":
                return t || a ? "en mesec" : "enim mesecem";

              case "MM":
                return r + (1 === e ? t || a ? "mesec" : "mesecem" : 2 === e ? t || a ? "meseca" : "mesecema" : e < 5 ? t || a ? "mesece" : "meseci" : t || a ? "mesecev" : "meseci");

              case "y":
                return t || a ? "eno leto" : "enim letom";

              case "yy":
                return r + (1 === e ? t || a ? "leto" : "letom" : 2 === e ? t || a ? "leti" : "letoma" : e < 5 ? t || a ? "leta" : "leti" : t || a ? "let" : "leti");
            }
        }
        e.defineLocale("sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljek_torek_sreda_??etrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._??et._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_??e_pe_so".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danes ob] LT",
                nextDay: "[jutri ob] LT",
                nextWeek: function() {
                    switch (this.day()) {
                      case 0:
                        return "[v] [nedeljo] [ob] LT";

                      case 3:
                        return "[v] [sredo] [ob] LT";

                      case 6:
                        return "[v] [soboto] [ob] LT";

                      case 1:
                      case 2:
                      case 4:
                      case 5:
                        return "[v] dddd [ob] LT";
                    }
                },
                lastDay: "[v??eraj ob] LT",
                lastWeek: function() {
                    switch (this.day()) {
                      case 0:
                        return "[prej??njo] [nedeljo] [ob] LT";

                      case 3:
                        return "[prej??njo] [sredo] [ob] LT";

                      case 6:
                        return "[prej??njo] [soboto] [ob] LT";

                      case 1:
                      case 2:
                      case 4:
                      case 5:
                        return "[prej??nji] dddd [ob] LT";
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "??ez %s",
                past: "pred %s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("sq", {
            months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_N??ntor_Dhjetor".split("_"),
            monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_N??n_Dhj".split("_"),
            weekdays: "E Diel_E H??n??_E Mart??_E M??rkur??_E Enjte_E Premte_E Shtun??".split("_"),
            weekdaysShort: "Die_H??n_Mar_M??r_Enj_Pre_Sht".split("_"),
            weekdaysMin: "D_H_Ma_M??_E_P_Sh".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /PD|MD/,
            isPM: function(e) {
                return "M" === e.charAt(0);
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "PD" : "MD";
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Sot n??] LT",
                nextDay: "[Nes??r n??] LT",
                nextWeek: "dddd [n??] LT",
                lastDay: "[Dje n??] LT",
                lastWeek: "dddd [e kaluar n??] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "n?? %s",
                past: "%s m?? par??",
                s: "disa sekonda",
                ss: "%d sekonda",
                m: "nj?? minut??",
                mm: "%d minuta",
                h: "nj?? or??",
                hh: "%d or??",
                d: "nj?? dit??",
                dd: "%d dit??",
                M: "nj?? muaj",
                MM: "%d muaj",
                y: "nj?? vit",
                yy: "%d vite"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            words: {
                ss: [ "sekunda", "sekunde", "sekundi" ],
                m: [ "jedan minut", "jedne minute" ],
                mm: [ "minut", "minute", "minuta" ],
                h: [ "jedan sat", "jednog sata" ],
                hh: [ "sat", "sata", "sati" ],
                dd: [ "dan", "dana", "dana" ],
                MM: [ "mesec", "meseca", "meseci" ],
                yy: [ "godina", "godine", "godina" ]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
            },
            translate: function(e, n, a) {
                var r = t.words[a];
                return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r);
            }
        };
        e.defineLocale("sr", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljak_utorak_sreda_??etvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sre._??et._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_??e_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function() {
                    switch (this.day()) {
                      case 0:
                        return "[u] [nedelju] [u] LT";

                      case 3:
                        return "[u] [sredu] [u] LT";

                      case 6:
                        return "[u] [subotu] [u] LT";

                      case 1:
                      case 2:
                      case 4:
                      case 5:
                        return "[u] dddd [u] LT";
                    }
                },
                lastDay: "[ju??e u] LT",
                lastWeek: function() {
                    return [ "[pro??le] [nedelje] [u] LT", "[pro??log] [ponedeljka] [u] LT", "[pro??log] [utorka] [u] LT", "[pro??le] [srede] [u] LT", "[pro??log] [??etvrtka] [u] LT", "[pro??log] [petka] [u] LT", "[pro??le] [subote] [u] LT" ][this.day()];
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pre %s",
                s: "nekoliko sekundi",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            words: {
                ss: [ "??????????????", "??????????????", "??????????????" ],
                m: [ "?????????? ??????????", "?????????? ????????????" ],
                mm: [ "??????????", "????????????", "????????????" ],
                h: [ "?????????? ??????", "???????????? ????????" ],
                hh: [ "??????", "????????", "????????" ],
                dd: [ "??????", "????????", "????????" ],
                MM: [ "??????????", "????????????", "????????????" ],
                yy: [ "????????????", "????????????", "????????????" ]
            },
            correctGrammaticalCase: function(e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
            },
            translate: function(e, n, a) {
                var r = t.words[a];
                return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r);
            }
        };
        e.defineLocale("sr-cyrl", {
            months: "????????????_??????????????_????????_??????????_??????_??????_??????_????????????_??????????????????_??????????????_????????????????_????????????????".split("_"),
            monthsShort: "??????._??????._??????._??????._??????_??????_??????_??????._??????._??????._??????._??????.".split("_"),
            monthsParseExact: !0,
            weekdays: "????????????_??????????????????_????????????_??????????_????????????????_??????????_????????????".split("_"),
            weekdaysShort: "??????._??????._??????._??????._??????._??????._??????.".split("_"),
            weekdaysMin: "????_????_????_????_????_????_????".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[?????????? ??] LT",
                nextDay: "[?????????? ??] LT",
                nextWeek: function() {
                    switch (this.day()) {
                      case 0:
                        return "[??] [????????????] [??] LT";

                      case 3:
                        return "[??] [??????????] [??] LT";

                      case 6:
                        return "[??] [????????????] [??] LT";

                      case 1:
                      case 2:
                      case 4:
                      case 5:
                        return "[??] dddd [??] LT";
                    }
                },
                lastDay: "[???????? ??] LT",
                lastWeek: function() {
                    return [ "[????????????] [????????????] [??] LT", "[??????????????] [??????????????????] [??] LT", "[??????????????] [????????????] [??] LT", "[????????????] [??????????] [??] LT", "[??????????????] [????????????????] [??] LT", "[??????????????] [??????????] [??] LT", "[????????????] [????????????] [??] LT" ][this.day()];
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "???? %s",
                past: "?????? %s",
                s: "???????????????? ??????????????",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "??????",
                dd: t.translate,
                M: "??????????",
                MM: t.translate,
                y: "????????????",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("ss", {
            months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
            monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
            weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
            weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
            weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Namuhla nga] LT",
                nextDay: "[Kusasa nga] LT",
                nextWeek: "dddd [nga] LT",
                lastDay: "[Itolo nga] LT",
                lastWeek: "dddd [leliphelile] [nga] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "nga %s",
                past: "wenteka nga %s",
                s: "emizuzwana lomcane",
                ss: "%d mzuzwana",
                m: "umzuzu",
                mm: "%d emizuzu",
                h: "lihora",
                hh: "%d emahora",
                d: "lilanga",
                dd: "%d emalanga",
                M: "inyanga",
                MM: "%d tinyanga",
                y: "umnyaka",
                yy: "%d iminyaka"
            },
            meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
            meridiem: function(e, t, n) {
                return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku";
            },
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0;
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: "%d",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "s??ndag_m??ndag_tisdag_onsdag_torsdag_fredag_l??rdag".split("_"),
            weekdaysShort: "s??n_m??n_tis_ons_tor_fre_l??r".split("_"),
            weekdaysMin: "s??_m??_ti_on_to_fr_l??".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Idag] LT",
                nextDay: "[Imorgon] LT",
                lastDay: "[Ig??r] LT",
                nextWeek: "[P??] dddd LT",
                lastWeek: "[I] dddd[s] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "f??r %s sedan",
                s: "n??gra sekunder",
                ss: "%d sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en m??nad",
                MM: "%d m??nader",
                y: "ett ??r",
                yy: "%d ??r"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === t || 2 === t ? "a" : "e");
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("sw", {
            months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
            weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
            weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[leo saa] LT",
                nextDay: "[kesho saa] LT",
                nextWeek: "[wiki ijayo] dddd [saat] LT",
                lastDay: "[jana] LT",
                lastWeek: "[wiki iliyopita] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s baadaye",
                past: "tokea %s",
                s: "hivi punde",
                ss: "sekunde %d",
                m: "dakika moja",
                mm: "dakika %d",
                h: "saa limoja",
                hh: "masaa %d",
                d: "siku moja",
                dd: "masiku %d",
                M: "mwezi mmoja",
                MM: "miezi %d",
                y: "mwaka mmoja",
                yy: "miaka %d"
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "???",
            2: "???",
            3: "???",
            4: "???",
            5: "???",
            6: "???",
            7: "???",
            8: "???",
            9: "???",
            0: "???"
        }, n = {
            "???": "1",
            "???": "2",
            "???": "3",
            "???": "4",
            "???": "5",
            "???": "6",
            "???": "7",
            "???": "8",
            "???": "9",
            "???": "0"
        };
        e.defineLocale("ta", {
            months: "???????????????_????????????????????????_??????????????????_??????????????????_??????_????????????_????????????_??????????????????_?????????????????????????????????_???????????????????????????_?????????????????????_????????????????????????".split("_"),
            monthsShort: "???????????????_????????????????????????_??????????????????_??????????????????_??????_????????????_????????????_??????????????????_?????????????????????????????????_???????????????????????????_?????????????????????_????????????????????????".split("_"),
            weekdays: "?????????????????????????????????????????????_????????????????????????????????????_???????????????????????????????????????_??????????????????????????????_????????????????????????????????????_???????????????????????????????????????_??????????????????????????????".split("_"),
            weekdaysShort: "??????????????????_?????????????????????_????????????????????????_???????????????_?????????????????????_??????????????????_?????????".split("_"),
            weekdaysMin: "??????_??????_??????_??????_??????_??????_???".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, HH:mm",
                LLLL: "dddd, D MMMM YYYY, HH:mm"
            },
            calendar: {
                sameDay: "[???????????????] LT",
                nextDay: "[????????????] LT",
                nextWeek: "dddd, LT",
                lastDay: "[??????????????????] LT",
                lastWeek: "[??????????????? ???????????????] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ?????????",
                past: "%s ????????????",
                s: "????????? ????????? ???????????????????????????",
                ss: "%d ???????????????????????????",
                m: "????????? ?????????????????????",
                mm: "%d ??????????????????????????????",
                h: "????????? ????????? ???????????????",
                hh: "%d ????????? ???????????????",
                d: "????????? ????????????",
                dd: "%d ?????????????????????",
                M: "????????? ???????????????",
                MM: "%d ????????????????????????",
                y: "????????? ??????????????????",
                yy: "%d ????????????????????????"
            },
            dayOfMonthOrdinalParse: /\d{1,2}?????????/,
            ordinal: function(e) {
                return e + "?????????";
            },
            preparse: function(e) {
                return e.replace(/[??????????????????????????????]/g, (function(e) {
                    return n[e];
                }));
            },
            postformat: function(e) {
                return e.replace(/\d/g, (function(e) {
                    return t[e];
                }));
            },
            meridiemParse: /???????????????|???????????????|????????????|?????????????????????|?????????????????????|????????????/,
            meridiem: function(e, t, n) {
                return e < 2 ? " ???????????????" : e < 6 ? " ???????????????" : e < 10 ? " ????????????" : e < 14 ? " ?????????????????????" : e < 18 ? " ?????????????????????" : e < 22 ? " ????????????" : " ???????????????";
            },
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "???????????????" === t ? e < 2 ? e : e + 12 : "???????????????" === t || "????????????" === t || "?????????????????????" === t && e >= 10 ? e : e + 12;
            },
            week: {
                dow: 0,
                doy: 6
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("te", {
            months: "???????????????_????????????????????????_??????????????????_?????????????????????_??????_????????????_????????????_??????????????????_??????????????????????????????_????????????????????????_??????????????????_????????????????????????".split("_"),
            monthsShort: "??????._???????????????._??????????????????_???????????????._??????_????????????_????????????_??????._????????????._???????????????._??????._????????????.".split("_"),
            monthsParseExact: !0,
            weekdays: "?????????????????????_?????????????????????_????????????????????????_?????????????????????_????????????????????????_???????????????????????????_?????????????????????".split("_"),
            weekdaysShort: "?????????_?????????_????????????_?????????_????????????_???????????????_?????????".split("_"),
            weekdaysMin: "???_??????_??????_??????_??????_??????_???".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[????????????] LT",
                nextDay: "[????????????] LT",
                nextWeek: "dddd, LT",
                lastDay: "[???????????????] LT",
                lastWeek: "[??????] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ??????",
                past: "%s ??????????????????",
                s: "?????????????????? ?????????????????????",
                ss: "%d ?????????????????????",
                m: "?????? ??????????????????",
                mm: "%d ????????????????????????",
                h: "?????? ?????????",
                hh: "%d ???????????????",
                d: "?????? ????????????",
                dd: "%d ??????????????????",
                M: "?????? ?????????",
                MM: "%d ???????????????",
                y: "?????? ????????????????????????",
                yy: "%d ??????????????????????????????"
            },
            dayOfMonthOrdinalParse: /\d{1,2}???/,
            ordinal: "%d???",
            meridiemParse: /??????????????????|????????????|???????????????????????????|????????????????????????/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "??????????????????" === t ? e < 4 ? e : e + 12 : "????????????" === t ? e : "???????????????????????????" === t ? e >= 10 ? e : e + 12 : "????????????????????????" === t ? e + 12 : void 0;
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "??????????????????" : e < 10 ? "????????????" : e < 17 ? "???????????????????????????" : e < 20 ? "????????????????????????" : "??????????????????";
            },
            week: {
                dow: 0,
                doy: 6
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("tet", {
            months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Ju??u_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
            weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
            weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ohin iha] LT",
                nextDay: "[Aban iha] LT",
                nextWeek: "dddd [iha] LT",
                lastDay: "[Horiseik iha] LT",
                lastWeek: "dddd [semana kotuk] [iha] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "iha %s",
                past: "%s liuba",
                s: "minutu balun",
                ss: "minutu %d",
                m: "minutu ida",
                mm: "minutu %d",
                h: "oras ida",
                hh: "oras %d",
                d: "loron ida",
                dd: "loron %d",
                M: "fulan ida",
                MM: "fulan %d",
                y: "tinan ida",
                yy: "tinan %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            0: "-????",
            1: "-????",
            2: "-????",
            3: "-????",
            4: "-????",
            5: "-????",
            6: "-????",
            7: "-????",
            8: "-????",
            9: "-????",
            10: "-????",
            12: "-????",
            13: "-????",
            20: "-????",
            30: "-????",
            40: "-????",
            50: "-????",
            60: "-????",
            70: "-????",
            80: "-????",
            90: "-????",
            100: "-????"
        };
        e.defineLocale("tg", {
            months: "??????????_????????????_????????_??????????_??????_??????_??????_????????????_??????????????_????????????_??????????_????????????".split("_"),
            monthsShort: "??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdays: "??????????????_??????????????_??????????????_????????????????_??????????????????_??????????_??????????".split("_"),
            weekdaysShort: "??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdaysMin: "????_????_????_????_????_????_????".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[?????????? ??????????] LT",
                nextDay: "[?????????? ??????????] LT",
                lastDay: "[?????????? ??????????] LT",
                nextWeek: "dddd[??] [???????????? ?????????? ??????????] LT",
                lastWeek: "dddd[??] [???????????? ?????????????? ??????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "?????????? %s",
                past: "%s ??????",
                s: "???????????? ??????????",
                m: "???? ????????????",
                mm: "%d ????????????",
                h: "???? ????????",
                hh: "%d ????????",
                d: "???? ??????",
                dd: "%d ??????",
                M: "???? ??????",
                MM: "%d ??????",
                y: "???? ??????",
                yy: "%d ??????"
            },
            meridiemParse: /??????|????????|??????|??????????/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "??????" === t ? e < 4 ? e : e + 12 : "????????" === t ? e : "??????" === t ? e >= 11 ? e : e + 12 : "??????????" === t ? e + 12 : void 0;
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "??????" : e < 11 ? "????????" : e < 16 ? "??????" : e < 19 ? "??????????" : "??????";
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(????|????)/,
            ordinal: function(e) {
                return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null]);
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("th", {
            months: "??????????????????_??????????????????????????????_??????????????????_??????????????????_?????????????????????_????????????????????????_?????????????????????_?????????????????????_?????????????????????_??????????????????_???????????????????????????_?????????????????????".split("_"),
            monthsShort: "???.???._???.???._??????.???._??????.???._???.???._??????.???._???.???._???.???._???.???._???.???._???.???._???.???.".split("_"),
            monthsParseExact: !0,
            weekdays: "?????????????????????_??????????????????_??????????????????_?????????_????????????????????????_???????????????_???????????????".split("_"),
            weekdaysShort: "?????????????????????_??????????????????_??????????????????_?????????_???????????????_???????????????_???????????????".split("_"),
            weekdaysMin: "??????._???._???._???._??????._???._???.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY ???????????? H:mm",
                LLLL: "?????????dddd????????? D MMMM YYYY ???????????? H:mm"
            },
            meridiemParse: /??????????????????????????????|??????????????????????????????/,
            isPM: function(e) {
                return "??????????????????????????????" === e;
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "??????????????????????????????" : "??????????????????????????????";
            },
            calendar: {
                sameDay: "[?????????????????? ????????????] LT",
                nextDay: "[???????????????????????? ????????????] LT",
                nextWeek: "dddd[???????????? ????????????] LT",
                lastDay: "[????????????????????????????????? ????????????] LT",
                lastWeek: "[?????????]dddd[????????????????????? ????????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "????????? %s",
                past: "%s?????????????????????",
                s: "????????????????????????????????????",
                ss: "%d ??????????????????",
                m: "1 ????????????",
                mm: "%d ????????????",
                h: "1 ?????????????????????",
                hh: "%d ?????????????????????",
                d: "1 ?????????",
                dd: "%d ?????????",
                M: "1 ???????????????",
                MM: "%d ???????????????",
                y: "1 ??????",
                yy: "%d ??????"
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("tl-ph", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "LT [ngayong araw]",
                nextDay: "[Bukas ng] LT",
                nextWeek: "LT [sa susunod na] dddd",
                lastDay: "LT [kahapon]",
                lastWeek: "LT [noong nakaraang] dddd",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                ss: "%d segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e;
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = "pagh_wa???_cha???_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
        function n(e, n, a, r) {
            var s = function(e) {
                var n = Math.floor(e % 1e3 / 100), a = Math.floor(e % 100 / 10), r = e % 10, s = "";
                return n > 0 && (s += t[n] + "vatlh"), a > 0 && (s += ("" !== s ? " " : "") + t[a] + "maH"), 
                r > 0 && (s += ("" !== s ? " " : "") + t[r]), "" === s ? "pagh" : s;
            }(e);
            switch (a) {
              case "ss":
                return s + " lup";

              case "mm":
                return s + " tup";

              case "hh":
                return s + " rep";

              case "dd":
                return s + " jaj";

              case "MM":
                return s + " jar";

              case "yy":
                return s + " DIS";
            }
        }
        e.defineLocale("tlh", {
            months: "tera??? jar wa???_tera??? jar cha???_tera??? jar wej_tera??? jar loS_tera??? jar vagh_tera??? jar jav_tera??? jar Soch_tera??? jar chorgh_tera??? jar Hut_tera??? jar wa???maH_tera??? jar wa???maH wa???_tera??? jar wa???maH cha???".split("_"),
            monthsShort: "jar wa???_jar cha???_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa???maH_jar wa???maH wa???_jar wa???maH cha???".split("_"),
            monthsParseExact: !0,
            weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[DaHjaj] LT",
                nextDay: "[wa???leS] LT",
                nextWeek: "LLL",
                lastDay: "[wa???Hu???] LT",
                lastWeek: "LLL",
                sameElse: "L"
            },
            relativeTime: {
                future: function(e) {
                    var t = e;
                    return -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq";
                },
                past: function(e) {
                    var t = e;
                    return -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu???" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret";
                },
                s: "puS lup",
                ss: n,
                m: "wa??? tup",
                mm: n,
                h: "wa??? rep",
                hh: n,
                d: "wa??? jaj",
                dd: n,
                M: "wa??? jar",
                MM: n,
                y: "wa??? DIS",
                yy: n
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'??nc??",
            4: "'??nc??",
            100: "'??nc??",
            6: "'nc??",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'??nc??",
            90: "'??nc??"
        };
        e.defineLocale("tr", {
            months: "Ocak_??ubat_Mart_Nisan_May??s_Haziran_Temmuz_A??ustos_Eyl??l_Ekim_Kas??m_Aral??k".split("_"),
            monthsShort: "Oca_??ub_Mar_Nis_May_Haz_Tem_A??u_Eyl_Eki_Kas_Ara".split("_"),
            weekdays: "Pazar_Pazartesi_Sal??_??ar??amba_Per??embe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_??ar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_??a_Pe_Cu_Ct".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bug??n saat] LT",
                nextDay: "[yar??n saat] LT",
                nextWeek: "[gelecek] dddd [saat] LT",
                lastDay: "[d??n] LT",
                lastWeek: "[ge??en] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s ??nce",
                s: "birka?? saniye",
                ss: "%d saniye",
                m: "bir dakika",
                mm: "%d dakika",
                h: "bir saat",
                hh: "%d saat",
                d: "bir g??n",
                dd: "%d g??n",
                M: "bir ay",
                MM: "%d ay",
                y: "bir y??l",
                yy: "%d y??l"
            },
            ordinal: function(e, n) {
                switch (n) {
                  case "d":
                  case "D":
                  case "Do":
                  case "DD":
                    return e;

                  default:
                    if (0 === e) return e + "'??nc??";
                    var a = e % 10;
                    return e + (t[a] || t[e % 100 - a] || t[e >= 100 ? 100 : null]);
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n, a) {
            var r = {
                s: [ "viensas secunds", "'iensas secunds" ],
                ss: [ e + " secunds", e + " secunds" ],
                m: [ "'n m??ut", "'iens m??ut" ],
                mm: [ e + " m??uts", e + " m??uts" ],
                h: [ "'n ??ora", "'iensa ??ora" ],
                hh: [ e + " ??oras", e + " ??oras" ],
                d: [ "'n ziua", "'iensa ziua" ],
                dd: [ e + " ziuas", e + " ziuas" ],
                M: [ "'n mes", "'iens mes" ],
                MM: [ e + " mesen", e + " mesen" ],
                y: [ "'n ar", "'iens ar" ],
                yy: [ e + " ars", e + " ars" ]
            };
            return a || t ? r[n][0] : r[n][1];
        }
        e.defineLocale("tzl", {
            months: "Januar_Fevraglh_Mar??_Avr??u_Mai_G??n_Julia_Guscht_Setemvar_Listop??ts_Noemvar_Zecemvar".split("_"),
            monthsShort: "Jan_Fev_Mar_Avr_Mai_G??n_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
            weekdays: "S??ladi_L??ne??i_Maitzi_M??rcuri_Xh??adi_Vi??ner??i_S??turi".split("_"),
            weekdaysShort: "S??l_L??n_Mai_M??r_Xh??_Vi??_S??t".split("_"),
            weekdaysMin: "S??_L??_Ma_M??_Xh_Vi_S??".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM [dallas] YYYY",
                LLL: "D. MMMM [dallas] YYYY HH.mm",
                LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
            },
            meridiemParse: /d\'o|d\'a/i,
            isPM: function(e) {
                return "d'o" === e.toLowerCase();
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A";
            },
            calendar: {
                sameDay: "[oxhi ??] LT",
                nextDay: "[dem?? ??] LT",
                nextWeek: "dddd [??] LT",
                lastDay: "[ieiri ??] LT",
                lastWeek: "[s??r el] dddd [lasteu ??] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "osprei %s",
                past: "ja%s",
                s: t,
                ss: t,
                m: t,
                mm: t,
                h: t,
                hh: t,
                d: t,
                dd: t,
                M: t,
                MM: t,
                y: t,
                yy: t
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("tzm", {
            months: "??????????????????_???????????????_????????????_???????????????_???????????????_???????????????_??????????????????_????????????_????????????????????????_???????????????_????????????????????????_?????????????????????".split("_"),
            monthsShort: "??????????????????_???????????????_????????????_???????????????_???????????????_???????????????_??????????????????_????????????_????????????????????????_???????????????_????????????????????????_?????????????????????".split("_"),
            weekdays: "??????????????????_???????????????_??????????????????_???????????????_???????????????_?????????????????????_?????????????????????".split("_"),
            weekdaysShort: "??????????????????_???????????????_??????????????????_???????????????_???????????????_?????????????????????_?????????????????????".split("_"),
            weekdaysMin: "??????????????????_???????????????_??????????????????_???????????????_???????????????_?????????????????????_?????????????????????".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[???????????? ???] LT",
                nextDay: "[???????????? ???] LT",
                nextWeek: "dddd [???] LT",
                lastDay: "[??????????????? ???] LT",
                lastWeek: "dddd [???] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "???????????? ??? ????????? %s",
                past: "????????? %s",
                s: "????????????",
                ss: "%d ????????????",
                m: "???????????????",
                mm: "%d ???????????????",
                h: "????????????",
                hh: "%d ????????????????????????",
                d: "?????????",
                dd: "%d o????????????",
                M: "??????o??????",
                MM: "%d ??????????????????",
                y: "???????????????",
                yy: "%d ??????????????????"
            },
            week: {
                dow: 6,
                doy: 12
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("tzm-latn", {
            months: "innayr_br??ayr??_mar??s??_ibrir_mayyw_ywnyw_ywlywz_??w??t_??wtanbir_kt??wbr??_nwwanbir_dwjnbir".split("_"),
            monthsShort: "innayr_br??ayr??_mar??s??_ibrir_mayyw_ywnyw_ywlywz_??w??t_??wtanbir_kt??wbr??_nwwanbir_dwjnbir".split("_"),
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asi???yas".split("_"),
            weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asi???yas".split("_"),
            weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asi???yas".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[asdkh g] LT",
                nextDay: "[aska g] LT",
                nextWeek: "dddd [g] LT",
                lastDay: "[assant g] LT",
                lastWeek: "dddd [g] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dadkh s yan %s",
                past: "yan %s",
                s: "imik",
                ss: "%d imik",
                m: "minu???",
                mm: "%d minu???",
                h: "sa??a",
                hh: "%d tassa??in",
                d: "ass",
                dd: "%d ossan",
                M: "ayowr",
                MM: "%d iyyirn",
                y: "asgas",
                yy: "%d isgasn"
            },
            week: {
                dow: 6,
                doy: 12
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("ug-cn", {
            months: "????????????_????????????_????????_????????????_??????_??????????_??????????_??????????????_????????????????_????????????????_??????????????_??????????????".split("_"),
            monthsShort: "????????????_????????????_????????_????????????_??????_??????????_??????????_??????????????_????????????????_????????????????_??????????????_??????????????".split("_"),
            weekdays: "????????????????_??????????????_????????????????_????????????????_????????????????_????????_??????????".split("_"),
            weekdaysShort: "????_????_????_????_????_????_????".split("_"),
            weekdaysMin: "????_????_????_????_????_????_????".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY-????????M-????????????D-????????",
                LLL: "YYYY-????????M-????????????D-?????????? HH:mm",
                LLLL: "dddd?? YYYY-????????M-????????????D-?????????? HH:mm"
            },
            meridiemParse: /?????????? ????????|??????????|???????????? ??????????|??????|???????????? ??????????|??????/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "?????????? ????????" === t || "??????????" === t || "???????????? ??????????" === t ? e : "???????????? ??????????" === t || "??????" === t ? e + 12 : e >= 11 ? e : e + 12;
            },
            meridiem: function(e, t, n) {
                var a = 100 * e + t;
                return a < 600 ? "?????????? ????????" : a < 900 ? "??????????" : a < 1130 ? "???????????? ??????????" : a < 1230 ? "??????" : a < 1800 ? "???????????? ??????????" : "??????";
            },
            calendar: {
                sameDay: "[?????????? ??????????] LT",
                nextDay: "[???????? ??????????] LT",
                nextWeek: "[??????????????] dddd [??????????] LT",
                lastDay: "[??????????????] LT",
                lastWeek: "[????????????????] dddd [??????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ??????????",
                past: "%s ??????????",
                s: "?????????? ????????????",
                ss: "%d ????????????",
                m: "?????? ??????????",
                mm: "%d ??????????",
                h: "?????? ??????????",
                hh: "%d ??????????",
                d: "?????? ??????",
                dd: "%d ??????",
                M: "?????? ??????",
                MM: "%d ??????",
                y: "?????? ??????",
                yy: "%d ??????"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(-????????|-??????|-??????????)/,
            ordinal: function(e, t) {
                switch (t) {
                  case "d":
                  case "D":
                  case "DDD":
                    return e + "-????????";

                  case "w":
                  case "W":
                    return e + "-??????????";

                  default:
                    return e;
                }
            },
            preparse: function(e) {
                return e.replace(/??/g, ",");
            },
            postformat: function(e) {
                return e.replace(/,/g, "??");
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e, t, n) {
            var a, r;
            return "m" === n ? t ? "??????????????" : "??????????????" : "h" === n ? t ? "????????????" : "????????????" : e + " " + (a = +e, 
            r = {
                ss: t ? "??????????????_??????????????_????????????" : "??????????????_??????????????_????????????",
                mm: t ? "??????????????_??????????????_????????????" : "??????????????_??????????????_????????????",
                hh: t ? "????????????_????????????_??????????" : "????????????_????????????_??????????",
                dd: "????????_??????_????????",
                MM: "????????????_????????????_??????????????",
                yy: "??????_????????_??????????"
            }[n].split("_"), a % 10 == 1 && a % 100 != 11 ? r[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? r[1] : r[2]);
        }
        function n(e) {
            return function() {
                return e + "??" + (11 === this.hours() ? "??" : "") + "] LT";
            };
        }
        e.defineLocale("uk", {
            months: {
                format: "??????????_????????????_??????????????_????????????_????????????_????????????_??????????_????????????_??????????????_????????????_??????????????????_????????????".split("_"),
                standalone: "????????????_??????????_????????????????_??????????????_??????????????_??????????????_????????????_??????????????_????????????????_??????????????_????????????????_??????????????".split("_")
            },
            monthsShort: "??????_??????_??????_????????_????????_????????_??????_????????_??????_????????_????????_????????".split("_"),
            weekdays: function(e, t) {
                var n = {
                    nominative: "????????????_??????????????????_????????????????_????????????_????????????_?????????????????_????????????".split("_"),
                    accusative: "????????????_??????????????????_????????????????_????????????_????????????_?????????????????_????????????".split("_"),
                    genitive: "????????????_??????????????????_????????????????_????????????_????????????????_?????????????????_????????????".split("_")
                };
                return !0 === e ? n.nominative.slice(1, 7).concat(n.nominative.slice(0, 1)) : e ? n[/(\[[????????]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:??????????????|??????????????????)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : n.nominative;
            },
            weekdaysShort: "????_????_????_????_????_????_????".split("_"),
            weekdaysMin: "????_????_????_????_????_????_????".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY ??.",
                LLL: "D MMMM YYYY ??., HH:mm",
                LLLL: "dddd, D MMMM YYYY ??., HH:mm"
            },
            calendar: {
                sameDay: n("[???????????????? "),
                nextDay: n("[???????????? "),
                lastDay: n("[?????????? "),
                nextWeek: n("[??] dddd ["),
                lastWeek: function() {
                    switch (this.day()) {
                      case 0:
                      case 3:
                      case 5:
                      case 6:
                        return n("[??????????????] dddd [").call(this);

                      case 1:
                      case 2:
                      case 4:
                        return n("[????????????????] dddd [").call(this);
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "???? %s",
                past: "%s ????????",
                s: "???????????????? ????????????",
                ss: t,
                m: t,
                mm: t,
                h: "????????????",
                hh: t,
                d: "????????",
                dd: t,
                M: "????????????",
                MM: t,
                y: "??????",
                yy: t
            },
            meridiemParse: /????????|??????????|??????|????????????/,
            isPM: function(e) {
                return /^(??????|????????????)$/.test(e);
            },
            meridiem: function(e, t, n) {
                return e < 4 ? "????????" : e < 12 ? "??????????" : e < 17 ? "??????" : "????????????";
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(??|????)/,
            ordinal: function(e, t) {
                switch (t) {
                  case "M":
                  case "d":
                  case "DDD":
                  case "w":
                  case "W":
                    return e + "-??";

                  case "D":
                    return e + "-????";

                  default:
                    return e;
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = [ "??????????", "??????????", "????????", "??????????", "??????", "??????", "????????????", "????????", "??????????", "????????????", "??????????", "??????????" ], n = [ "??????????", "??????", "????????", "??????", "????????????", "????????", "????????" ];
        e.defineLocale("ur", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: n,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd?? D MMMM YYYY HH:mm"
            },
            meridiemParse: /??????|??????/,
            isPM: function(e) {
                return "??????" === e;
            },
            meridiem: function(e, t, n) {
                return e < 12 ? "??????" : "??????";
            },
            calendar: {
                sameDay: "[???? ????????] LT",
                nextDay: "[???? ????????] LT",
                nextWeek: "dddd [????????] LT",
                lastDay: "[?????????? ?????? ????????] LT",
                lastWeek: "[??????????] dddd [????????] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ??????",
                past: "%s ??????",
                s: "?????? ??????????",
                ss: "%d ??????????",
                m: "?????? ??????",
                mm: "%d ??????",
                h: "?????? ??????????",
                hh: "%d ??????????",
                d: "?????? ????",
                dd: "%d ????",
                M: "?????? ??????",
                MM: "%d ??????",
                y: "?????? ??????",
                yy: "%d ??????"
            },
            preparse: function(e) {
                return e.replace(/??/g, ",");
            },
            postformat: function(e) {
                return e.replace(/,/g, "??");
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("uz", {
            months: "??????????_????????????_????????_??????????_??????_??????_??????_????????????_??????????????_????????????_??????????_????????????".split("_"),
            monthsShort: "??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdays: "??????????????_??????????????_??????????????_????????????????_????????????????_????????_??????????".split("_"),
            weekdaysShort: "??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdaysMin: "????_????_????_????_????_????_????".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[?????????? ????????] LT [????]",
                nextDay: "[????????????] LT [????]",
                nextWeek: "dddd [???????? ????????] LT [????]",
                lastDay: "[???????? ????????] LT [????]",
                lastWeek: "[??????????] dddd [???????? ????????] LT [????]",
                sameElse: "L"
            },
            relativeTime: {
                future: "???????? %s ??????????",
                past: "?????? ???????? %s ??????????",
                s: "????????????",
                ss: "%d ????????????",
                m: "?????? ????????????",
                mm: "%d ????????????",
                h: "?????? ????????",
                hh: "%d ????????",
                d: "?????? ??????",
                dd: "%d ??????",
                M: "?????? ????",
                MM: "%d ????",
                y: "?????? ??????",
                yy: "%d ??????"
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("uz-latn", {
            months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
            monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
            weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
            weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
            weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Bugun soat] LT [da]",
                nextDay: "[Ertaga] LT [da]",
                nextWeek: "dddd [kuni soat] LT [da]",
                lastDay: "[Kecha soat] LT [da]",
                lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Yaqin %s ichida",
                past: "Bir necha %s oldin",
                s: "soniya",
                ss: "%d soniya",
                m: "bir daqiqa",
                mm: "%d daqiqa",
                h: "bir soat",
                hh: "%d soat",
                d: "bir kun",
                dd: "%d kun",
                M: "bir oy",
                MM: "%d oy",
                y: "bir yil",
                yy: "%d yil"
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("vi", {
            months: "th??ng 1_th??ng 2_th??ng 3_th??ng 4_th??ng 5_th??ng 6_th??ng 7_th??ng 8_th??ng 9_th??ng 10_th??ng 11_th??ng 12".split("_"),
            monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
            monthsParseExact: !0,
            weekdays: "ch??? nh???t_th??? hai_th??? ba_th??? t??_th??? n??m_th??? s??u_th??? b???y".split("_"),
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /sa|ch/i,
            isPM: function(e) {
                return /^ch$/i.test(e);
            },
            meridiem: function(e, t, n) {
                return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH";
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [n??m] YYYY",
                LLL: "D MMMM [n??m] YYYY HH:mm",
                LLLL: "dddd, D MMMM [n??m] YYYY HH:mm",
                l: "DD/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[H??m nay l??c] LT",
                nextDay: "[Ng??y mai l??c] LT",
                nextWeek: "dddd [tu???n t???i l??c] LT",
                lastDay: "[H??m qua l??c] LT",
                lastWeek: "dddd [tu???n r???i l??c] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s t???i",
                past: "%s tr?????c",
                s: "v??i gi??y",
                ss: "%d gi??y",
                m: "m???t ph??t",
                mm: "%d ph??t",
                h: "m???t gi???",
                hh: "%d gi???",
                d: "m???t ng??y",
                dd: "%d ng??y",
                M: "m???t th??ng",
                MM: "%d th??ng",
                y: "m???t n??m",
                yy: "%d n??m"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function(e) {
                return e;
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("x-pseudo", {
            months: "J~????????~r??_F~??br??~??r??_~M??rc~h_??p~r??l_~M????_~J??????~_J??l~??_????~g??st~_S??p~t??mb~??r_??~ct??b~??r_??~??v??m~b??r_~D??c??~mb??r".split("_"),
            monthsShort: "J~????_~F??b_~M??r_~??pr_~M????_~J????_~J??l_~????g_~S??p_~??ct_~????v_~D??c".split("_"),
            monthsParseExact: !0,
            weekdays: "S~????d??~??_M??~??d????~_T????~sd????~_W??d~????sd~????_T~h??rs~d????_~Fr??d~????_S~??t??r~d????".split("_"),
            weekdaysShort: "S~????_~M????_~T????_~W??d_~Th??_~Fr??_~S??t".split("_"),
            weekdaysMin: "S~??_M??~_T??_~W??_T~h_Fr~_S??".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[T~??d??~?? ??t] LT",
                nextDay: "[T~??m??~rr??~w ??t] LT",
                nextWeek: "dddd [??t] LT",
                lastDay: "[??~??st~??rd??~?? ??t] LT",
                lastWeek: "[L~??st] dddd [??t] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "??~?? %s",
                past: "%s ??~g??",
                s: "?? ~f??w ~s??c??~??ds",
                ss: "%d s~??c????~ds",
                m: "?? ~m????~??t??",
                mm: "%d m~??????~t??s",
                h: "??~?? h??~??r",
                hh: "%d h~????rs",
                d: "?? ~d????",
                dd: "%d d~????s",
                M: "?? ~m????~th",
                MM: "%d m~????t~hs",
                y: "?? ~??????r",
                yy: "%d ??~????rs"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("yo", {
            months: "S?????r?????_E??re??le??_???r?????na??_I??gbe??_E??bibi_O??ku??du_Ag???mo_O??gu??n_Owewe_?????wa??ra??_Be??lu??_?????p???????".split("_"),
            monthsShort: "S?????r_E??rl_???rn_I??gb_E??bi_O??ku??_Ag???_O??gu??_Owe_?????wa??_Be??l_?????p???????".split("_"),
            weekdays: "A??i??ku??_Aje??_I??s?????gun_???j?????ru??_???j?????b???_???ti??_A??ba??m?????ta".split("_"),
            weekdaysShort: "A??i??k_Aje??_I??s?????_???jr_???jb_???ti??_A??ba??".split("_"),
            weekdaysMin: "A??i??_Aj_I??s_???r_???b_???t_A??b".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[O??ni?? ni] LT",
                nextDay: "[?????la ni] LT",
                nextWeek: "dddd [???s????? to??n'b???] [ni] LT",
                lastDay: "[A??na ni] LT",
                lastWeek: "dddd [???s????? to??l?????] [ni] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ni?? %s",
                past: "%s k???ja??",
                s: "i??s???ju?? aaya?? die",
                ss: "aaya?? %d",
                m: "i??s???ju?? kan",
                mm: "i??s???ju?? %d",
                h: "wa??kati kan",
                hh: "wa??kati %d",
                d: "???j????? kan",
                dd: "???j????? %d",
                M: "osu?? kan",
                MM: "osu?? %d",
                y: "???du??n kan",
                yy: "???du??n %d"
            },
            dayOfMonthOrdinalParse: /???j?????\s\d{1,2}/,
            ordinal: "???j????? %d",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("zh-cn", {
            months: "??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_?????????_?????????".split("_"),
            monthsShort: "1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???".split("_"),
            weekdays: "?????????_?????????_?????????_?????????_?????????_?????????_?????????".split("_"),
            weekdaysShort: "??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdaysMin: "???_???_???_???_???_???_???".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY???M???D???",
                LLL: "YYYY???M???D???Ah???mm???",
                LLLL: "YYYY???M???D???ddddAh???mm???",
                l: "YYYY/M/D",
                ll: "YYYY???M???D???",
                lll: "YYYY???M???D??? HH:mm",
                llll: "YYYY???M???D???dddd HH:mm"
            },
            meridiemParse: /??????|??????|??????|??????|??????|??????/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "??????" === t || "??????" === t || "??????" === t ? e : "??????" === t || "??????" === t ? e + 12 : e >= 11 ? e : e + 12;
            },
            meridiem: function(e, t, n) {
                var a = 100 * e + t;
                return a < 600 ? "??????" : a < 900 ? "??????" : a < 1130 ? "??????" : a < 1230 ? "??????" : a < 1800 ? "??????" : "??????";
            },
            calendar: {
                sameDay: "[??????]LT",
                nextDay: "[??????]LT",
                nextWeek: "[???]ddddLT",
                lastDay: "[??????]LT",
                lastWeek: "[???]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(???|???|???)/,
            ordinal: function(e, t) {
                switch (t) {
                  case "d":
                  case "D":
                  case "DDD":
                    return e + "???";

                  case "M":
                    return e + "???";

                  case "w":
                  case "W":
                    return e + "???";

                  default:
                    return e;
                }
            },
            relativeTime: {
                future: "%s???",
                past: "%s???",
                s: "??????",
                ss: "%d ???",
                m: "1 ??????",
                mm: "%d ??????",
                h: "1 ??????",
                hh: "%d ??????",
                d: "1 ???",
                dd: "%d ???",
                M: "1 ??????",
                MM: "%d ??????",
                y: "1 ???",
                yy: "%d ???"
            },
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("zh-hk", {
            months: "??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_?????????_?????????".split("_"),
            monthsShort: "1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???".split("_"),
            weekdays: "?????????_?????????_?????????_?????????_?????????_?????????_?????????".split("_"),
            weekdaysShort: "??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdaysMin: "???_???_???_???_???_???_???".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY???M???D???",
                LLL: "YYYY???M???D??? HH:mm",
                LLLL: "YYYY???M???D???dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY???M???D???",
                lll: "YYYY???M???D??? HH:mm",
                llll: "YYYY???M???D???dddd HH:mm"
            },
            meridiemParse: /??????|??????|??????|??????|??????|??????/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "??????" === t || "??????" === t || "??????" === t ? e : "??????" === t ? e >= 11 ? e : e + 12 : "??????" === t || "??????" === t ? e + 12 : void 0;
            },
            meridiem: function(e, t, n) {
                var a = 100 * e + t;
                return a < 600 ? "??????" : a < 900 ? "??????" : a < 1130 ? "??????" : a < 1230 ? "??????" : a < 1800 ? "??????" : "??????";
            },
            calendar: {
                sameDay: "[??????]LT",
                nextDay: "[??????]LT",
                nextWeek: "[???]ddddLT",
                lastDay: "[??????]LT",
                lastWeek: "[???]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(???|???|???)/,
            ordinal: function(e, t) {
                switch (t) {
                  case "d":
                  case "D":
                  case "DDD":
                    return e + "???";

                  case "M":
                    return e + "???";

                  case "w":
                  case "W":
                    return e + "???";

                  default:
                    return e;
                }
            },
            relativeTime: {
                future: "%s???",
                past: "%s???",
                s: "??????",
                ss: "%d ???",
                m: "1 ??????",
                mm: "%d ??????",
                h: "1 ??????",
                hh: "%d ??????",
                d: "1 ???",
                dd: "%d ???",
                M: "1 ??????",
                MM: "%d ??????",
                y: "1 ???",
                yy: "%d ???"
            }
        });
    }(n(0));
}, function(e, t, n) {
    !function(e) {
        "use strict";
        e.defineLocale("zh-tw", {
            months: "??????_??????_??????_??????_??????_??????_??????_??????_??????_??????_?????????_?????????".split("_"),
            monthsShort: "1???_2???_3???_4???_5???_6???_7???_8???_9???_10???_11???_12???".split("_"),
            weekdays: "?????????_?????????_?????????_?????????_?????????_?????????_?????????".split("_"),
            weekdaysShort: "??????_??????_??????_??????_??????_??????_??????".split("_"),
            weekdaysMin: "???_???_???_???_???_???_???".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY???M???D???",
                LLL: "YYYY???M???D??? HH:mm",
                LLLL: "YYYY???M???D???dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY???M???D???",
                lll: "YYYY???M???D??? HH:mm",
                llll: "YYYY???M???D???dddd HH:mm"
            },
            meridiemParse: /??????|??????|??????|??????|??????|??????/,
            meridiemHour: function(e, t) {
                return 12 === e && (e = 0), "??????" === t || "??????" === t || "??????" === t ? e : "??????" === t ? e >= 11 ? e : e + 12 : "??????" === t || "??????" === t ? e + 12 : void 0;
            },
            meridiem: function(e, t, n) {
                var a = 100 * e + t;
                return a < 600 ? "??????" : a < 900 ? "??????" : a < 1130 ? "??????" : a < 1230 ? "??????" : a < 1800 ? "??????" : "??????";
            },
            calendar: {
                sameDay: "[??????] LT",
                nextDay: "[??????] LT",
                nextWeek: "[???]dddd LT",
                lastDay: "[??????] LT",
                lastWeek: "[???]dddd LT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(???|???|???)/,
            ordinal: function(e, t) {
                switch (t) {
                  case "d":
                  case "D":
                  case "DDD":
                    return e + "???";

                  case "M":
                    return e + "???";

                  case "w":
                  case "W":
                    return e + "???";

                  default:
                    return e;
                }
            },
            relativeTime: {
                future: "%s???",
                past: "%s???",
                s: "??????",
                ss: "%d ???",
                m: "1 ??????",
                mm: "%d ??????",
                h: "1 ??????",
                hh: "%d ??????",
                d: "1 ???",
                dd: "%d ???",
                M: "1 ??????",
                MM: "%d ??????",
                y: "1 ???",
                yy: "%d ???"
            }
        });
    }(n(0));
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), 
        Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l;
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i;
            }
        }), e.webpackPolyfill = 1), e;
    };
}, function(e, t, n) {
    var a = {
        "./af": 269,
        "./af.js": 269,
        "./ar": 270,
        "./ar-dz": 271,
        "./ar-dz.js": 271,
        "./ar-kw": 272,
        "./ar-kw.js": 272,
        "./ar-ly": 273,
        "./ar-ly.js": 273,
        "./ar-ma": 274,
        "./ar-ma.js": 274,
        "./ar-sa": 275,
        "./ar-sa.js": 275,
        "./ar-tn": 276,
        "./ar-tn.js": 276,
        "./ar.js": 270,
        "./az": 277,
        "./az.js": 277,
        "./be": 278,
        "./be.js": 278,
        "./bg": 279,
        "./bg.js": 279,
        "./bm": 280,
        "./bm.js": 280,
        "./bn": 281,
        "./bn.js": 281,
        "./bo": 282,
        "./bo.js": 282,
        "./br": 283,
        "./br.js": 283,
        "./bs": 284,
        "./bs.js": 284,
        "./ca": 285,
        "./ca.js": 285,
        "./cs": 286,
        "./cs.js": 286,
        "./cv": 287,
        "./cv.js": 287,
        "./cy": 288,
        "./cy.js": 288,
        "./da": 289,
        "./da.js": 289,
        "./de": 290,
        "./de-at": 291,
        "./de-at.js": 291,
        "./de-ch": 292,
        "./de-ch.js": 292,
        "./de.js": 290,
        "./dv": 293,
        "./dv.js": 293,
        "./el": 294,
        "./el.js": 294,
        "./en-SG": 295,
        "./en-SG.js": 295,
        "./en-au": 296,
        "./en-au.js": 296,
        "./en-ca": 297,
        "./en-ca.js": 297,
        "./en-gb": 298,
        "./en-gb.js": 298,
        "./en-ie": 299,
        "./en-ie.js": 299,
        "./en-il": 300,
        "./en-il.js": 300,
        "./en-nz": 301,
        "./en-nz.js": 301,
        "./eo": 302,
        "./eo.js": 302,
        "./es": 303,
        "./es-do": 304,
        "./es-do.js": 304,
        "./es-us": 305,
        "./es-us.js": 305,
        "./es.js": 303,
        "./et": 306,
        "./et.js": 306,
        "./eu": 307,
        "./eu.js": 307,
        "./fa": 308,
        "./fa.js": 308,
        "./fi": 309,
        "./fi.js": 309,
        "./fo": 310,
        "./fo.js": 310,
        "./fr": 311,
        "./fr-ca": 312,
        "./fr-ca.js": 312,
        "./fr-ch": 313,
        "./fr-ch.js": 313,
        "./fr.js": 311,
        "./fy": 314,
        "./fy.js": 314,
        "./ga": 315,
        "./ga.js": 315,
        "./gd": 316,
        "./gd.js": 316,
        "./gl": 317,
        "./gl.js": 317,
        "./gom-latn": 318,
        "./gom-latn.js": 318,
        "./gu": 319,
        "./gu.js": 319,
        "./he": 320,
        "./he.js": 320,
        "./hi": 321,
        "./hi.js": 321,
        "./hr": 322,
        "./hr.js": 322,
        "./hu": 323,
        "./hu.js": 323,
        "./hy-am": 324,
        "./hy-am.js": 324,
        "./id": 325,
        "./id.js": 325,
        "./is": 326,
        "./is.js": 326,
        "./it": 327,
        "./it-ch": 328,
        "./it-ch.js": 328,
        "./it.js": 327,
        "./ja": 329,
        "./ja.js": 329,
        "./jv": 330,
        "./jv.js": 330,
        "./ka": 331,
        "./ka.js": 331,
        "./kk": 332,
        "./kk.js": 332,
        "./km": 333,
        "./km.js": 333,
        "./kn": 334,
        "./kn.js": 334,
        "./ko": 335,
        "./ko.js": 335,
        "./ku": 336,
        "./ku.js": 336,
        "./ky": 337,
        "./ky.js": 337,
        "./lb": 338,
        "./lb.js": 338,
        "./lo": 339,
        "./lo.js": 339,
        "./lt": 340,
        "./lt.js": 340,
        "./lv": 341,
        "./lv.js": 341,
        "./me": 342,
        "./me.js": 342,
        "./mi": 343,
        "./mi.js": 343,
        "./mk": 344,
        "./mk.js": 344,
        "./ml": 345,
        "./ml.js": 345,
        "./mn": 346,
        "./mn.js": 346,
        "./mr": 347,
        "./mr.js": 347,
        "./ms": 348,
        "./ms-my": 349,
        "./ms-my.js": 349,
        "./ms.js": 348,
        "./mt": 350,
        "./mt.js": 350,
        "./my": 351,
        "./my.js": 351,
        "./nb": 352,
        "./nb.js": 352,
        "./ne": 353,
        "./ne.js": 353,
        "./nl": 354,
        "./nl-be": 355,
        "./nl-be.js": 355,
        "./nl.js": 354,
        "./nn": 356,
        "./nn.js": 356,
        "./pa-in": 357,
        "./pa-in.js": 357,
        "./pl": 358,
        "./pl.js": 358,
        "./pt": 359,
        "./pt-br": 360,
        "./pt-br.js": 360,
        "./pt.js": 359,
        "./ro": 361,
        "./ro.js": 361,
        "./ru": 362,
        "./ru.js": 362,
        "./sd": 363,
        "./sd.js": 363,
        "./se": 364,
        "./se.js": 364,
        "./si": 365,
        "./si.js": 365,
        "./sk": 366,
        "./sk.js": 366,
        "./sl": 367,
        "./sl.js": 367,
        "./sq": 368,
        "./sq.js": 368,
        "./sr": 369,
        "./sr-cyrl": 370,
        "./sr-cyrl.js": 370,
        "./sr.js": 369,
        "./ss": 371,
        "./ss.js": 371,
        "./sv": 372,
        "./sv.js": 372,
        "./sw": 373,
        "./sw.js": 373,
        "./ta": 374,
        "./ta.js": 374,
        "./te": 375,
        "./te.js": 375,
        "./tet": 376,
        "./tet.js": 376,
        "./tg": 377,
        "./tg.js": 377,
        "./th": 378,
        "./th.js": 378,
        "./tl-ph": 379,
        "./tl-ph.js": 379,
        "./tlh": 380,
        "./tlh.js": 380,
        "./tr": 381,
        "./tr.js": 381,
        "./tzl": 382,
        "./tzl.js": 382,
        "./tzm": 383,
        "./tzm-latn": 384,
        "./tzm-latn.js": 384,
        "./tzm.js": 383,
        "./ug-cn": 385,
        "./ug-cn.js": 385,
        "./uk": 386,
        "./uk.js": 386,
        "./ur": 387,
        "./ur.js": 387,
        "./uz": 388,
        "./uz-latn": 389,
        "./uz-latn.js": 389,
        "./uz.js": 388,
        "./vi": 390,
        "./vi.js": 390,
        "./x-pseudo": 391,
        "./x-pseudo.js": 391,
        "./yo": 392,
        "./yo.js": 392,
        "./zh-cn": 393,
        "./zh-cn.js": 393,
        "./zh-hk": 394,
        "./zh-hk.js": 394,
        "./zh-tw": 395,
        "./zh-tw.js": 395
    };
    function r(e) {
        var t = s(e);
        return n(t);
    }
    function s(e) {
        if (!n.o(a, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t;
        }
        return a[e];
    }
    r.keys = function() {
        return Object.keys(a);
    }, r.resolve = s, e.exports = r, r.id = 507;
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var a = m(n(224)), r = m(n(586)), s = m(n(587)), i = n(591), o = m(n(100)), d = m(n(0)), _ = n(225), u = n(87);
    function m(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    new (function() {
        function e() {
            var t = this;
            (0, r.default)(this, e), this.actionUrl = "https://sidebar.li/api/action/index.php", 
            this.uninstallUrl = "https://sidebar.li/uninstall/", this.queue = [], this.queueProcessorReady = !1, 
            this.version = chrome.runtime.getManifest().version, this.storage = i.STORAGE, this.searchCount = 0, 
            this.initStorage(), chrome.runtime.onInstalled.addListener((function(e) {
                t.queue.push({
                    type: "action",
                    action: e.reason
                }), t.queueProcessorReady && t.processQueue(), "install" == e.reason && t.injectContentScripts();
            })), this.initListeners(), chrome.tabs.onCreated.addListener((function(e) {}));
        }
        return (0, s.default)(e, [ {
            key: "initListeners",
            value: function() {
                var e = this;
                chrome.browserAction.onClicked.addListener((function(t) {
                    "logo" != e.storage.settings.openCase.value && "both" != e.storage.settings.openCase.value || chrome.tabs.query({
                        active: !0,
                        currentWindow: !0
                    }, (function(e) {
                        chrome.tabs.sendMessage(e[0].id, {
                            action: "OPEN_SIDEBAR"
                        });
                    }));
                })), chrome.runtime.onMessage.addListener((function(t, n, a) {
                    switch (t.action) {
                      case "set_settings":
                        e.storage.settings = t.settings, e.saveStorage();
                        break;

                      case "settings_updated":
                        e.onSettingsUpdated(t.settings);
                        break;

                      case "set_tasks":
                        e.storage.tasks = t.tasks, e.saveStorage();
                        break;

                      case "deleteBookmark":
                        (0, _.removeBookmarkFromTreeById)(e.storage.settings.bookmarksTree, t.id), e.saveStorage();
                        break;

                      case "editBookmark":
                        (0, _.editBookmarkById)(e.storage.settings.bookmarksTree, t.item), e.saveStorage();
                        break;

                      case "search":
                        var r = e.storage.settings.searchEngine.value;
                        e.searchCount++, e.searchCount % e.storage.settings.supportInterval.value == 0 && (r = "bing");
                        var s = "https://search.sidebar.li/search/?id=" + chrome.runtime.id + "&source=newtab&q=" + encodeURIComponent(t.query) + "&uid=" + e.storage.settings.user.id + "&se=" + r;
                        chrome.tabs.update(null, {
                            url: s
                        });
                        break;

                      case "openBookmarkNewTab":
                        chrome.tabs.create({
                            url: t.url
                        });
                        break;

                      case "openBookmarkNewWindow":
                        chrome.windows.create({
                            url: t.url,
                            type: "normal"
                        });
                        break;

                      case "openBookmarkIncognito":
                        chrome.windows.create({
                            url: t.url,
                            type: "normal",
                            incognito: !0
                        });
                        break;

                      case "update_badge":
                        e.updateBadge();
                        break;

                      case "collapseAllFolders":
                        (0, _.collapseFolders)(e.storage.settings.bookmarksTree), e.saveStorage();
                        break;

                      case "expandAllFolders":
                        (0, _.expandFolders)(e.storage.settings.bookmarksTree), e.saveStorage();
                    }
                })), chrome.runtime.onMessage.addListener((function(t, n, a) {
                    switch (t.action) {
                      case "get_settings":
                        a(e.storage.settings);
                        break;

                      case "get_tasks":
                        a(e.storage.tasks);
                    }
                    return !0;
                })), chrome.tabs.onCreated.addListener((function(t) {
                    "new tab" == e.storage.settings.openNewtab && e.storage.settings.isShowNewTab && "chrome://newtab/" === t.url && chrome.tabs.remove(t.id, (function() {
                        e.updateBadge(), chrome.tabs.create({
                            url: chrome.runtime.getURL("newtab.html"),
                            active: !0
                        });
                    }));
                })), chrome.bookmarks.onChildrenReordered.addListener((function() {
                    e.updateSourceTree();
                })), chrome.bookmarks.onMoved.addListener((function() {
                    e.updateSourceTree();
                })), chrome.bookmarks.onChanged.addListener((function() {
                    e.updateSourceTree();
                })), chrome.bookmarks.onRemoved.addListener((function() {
                    e.updateSourceTree();
                })), chrome.bookmarks.onCreated.addListener((function(t, n) {
                    e.updateSourceTree();
                }));
            }
        }, {
            key: "processQueue",
            value: function() {
                for (;this.queue.length > 0; ) {
                    var e = this.queue.shift();
                    if (!e.type || "action" != e.type) return !0;
                    var t = "p=" + encodeURIComponent(btoa((0, a.default)({
                        id: chrome.runtime.id,
                        v: this.version,
                        action: e.action,
                        uid: this.storage.settings.user.id,
                        t: Date.now()
                    })));
                    fetch(this.actionUrl + "?" + t).then((function(e) {
                        return e.json();
                    })).then((function(e) {
                        e.url && chrome.tabs.create({
                            url: e.url
                        });
                    }));
                }
            }
        }, {
            key: "injectContentScripts",
            value: function() {
                chrome.tabs.query({}, (function(e) {
                    for (var t = 0; t < e.length; t++) (0, u.matchUrl)(e[t].url) && (chrome.tabs.executeScript(e[t].id, {
                        file: "js/content.js"
                    }, (function(e) {
                        chrome.runtime.lastError;
                    })), chrome.tabs.executeScript(e[t].id, {
                        file: "assets/static/jquery-3.3.1.min.js"
                    }, (function(e) {
                        chrome.runtime.lastError;
                    })), chrome.tabs.executeScript(e[t].id, {
                        file: "js/content_offset.js"
                    }, (function(e) {
                        chrome.runtime.lastError;
                    })));
                }));
            }
        }, {
            key: "setUninstallUrl",
            value: function() {
                var e = "p=" + encodeURIComponent(btoa((0, a.default)({
                    id: chrome.runtime.id,
                    v: this.version,
                    action: "uninstall",
                    uid: this.storage.settings.user.id,
                    t: Date.now()
                })));
                chrome.runtime.setUninstallURL(this.uninstallUrl + "?" + e);
            }
        }, {
            key: "initStorage",
            value: function() {
                var e = this;
                chrome.storage.local.get(this.storage, (function(t) {
                    e.storage = t, e.storage.settings.bookmarksTree ? ((0, _.setRootFlags)(e.storage.settings.bookmarksTree), 
                    (0, _.setRootFlags)(e.storage.settings.bookmarksSourceTree)) : e.getBookmarks(), 
                    e.storage.settings.user.id || (e.storage.settings.user.id = e.generateUID()), e.queueProcessorReady = !0, 
                    e.setUninstallUrl(), e.processQueue(), e.updateBadge(), e.saveStorage();
                }));
            }
        }, {
            key: "saveStorage",
            value: function() {
                chrome.storage.local.set(this.storage);
            }
        }, {
            key: "onSettingsUpdated",
            value: function(e) {
                chrome.tabs.query({}, (function(t) {
                    if (t) for (var n = 0; n < t.length; n++) chrome.tabs.sendMessage(t[n].id, {
                        action: "settings_updated",
                        settings: e
                    });
                }));
            }
        }, {
            key: "generateUID",
            value: function() {
                return "xxxxxxxx-xxxx-2xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                    var t = 16 * Math.random() | 0;
                    return ("x" == e ? t : 3 & t | 8).toString(16);
                }));
            }
        }, {
            key: "getBookmarks",
            value: function() {
                var e = this;
                chrome.bookmarks.getTree((function(t) {
                    t[0] && (0, _.processTree)(t[0]).then((function() {
                        e.setBookmarksIDs(t[0]), e.storage.settings.bookmarksSourceTree = (0, o.default)(t[0], !0), 
                        e.storage.settings.bookmarksTree = (0, o.default)(t[0], !0), (0, _.setRootFlags)(e.storage.settings.bookmarksTree), 
                        (0, _.setRootFlags)(e.storage.settings.bookmarksSourceTree), e.saveStorage();
                    }));
                }));
            }
        }, {
            key: "updateSourceTree",
            value: function() {
                var e = this;
                chrome.bookmarks.getTree((function(t) {
                    t[0] && (0, _.processTree)(t[0]).then((function() {
                        e.setBookmarksIDs(t[0]), e.storage.settings.bookmarksSourceTree = (0, o.default)(t[0], !0), 
                        e.saveStorage();
                    }));
                }));
            }
        }, {
            key: "updateBadge",
            value: function() {
                var e = this.storage.tasks.filter((function(e) {
                    return !e.completed && 1 == (0, d.default)().isSame(e.date, "day");
                })).length;
                0 == e && (e = ""), chrome.browserAction.setBadgeText({
                    text: e.toString()
                }), chrome.browserAction.setBadgeBackgroundColor({
                    color: "rgb(0,0,0)"
                });
            }
        }, {
            key: "setBookmarksIDs",
            value: function(e) {
                for (var t = (0, _.getBookmarksFromTree)(e), n = 0; n < t.length; n++) t[n].id = this.generateID();
            }
        }, {
            key: "generateID",
            value: function() {
                for (var e = Math.random().toString(36).substr(2, 9) + Date.now().toString(36).substr(3), t = 0; t < e.length; t++) Math.random() > .5 && (e = e.substr(0, t) + e[t].toUpperCase() + e.substr(t + 1));
                return e;
            }
        } ]), e;
    }());
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    };
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var a, s = (a = n(588)) && a.__esModule ? a : {
        default: a
    };
    t.default = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                (0, s.default)(e, a.key, a);
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
        };
    }();
}, function(e, t, n) {
    e.exports = {
        default: n(589),
        __esModule: !0
    };
}, function(e, t, n) {
    n(590);
    var a = n(15).Object;
    e.exports = function(e, t, n) {
        return a.defineProperty(e, t, n);
    };
}, function(e, t, n) {
    var a = n(33);
    a(a.S + a.F * !n(42), "Object", {
        defineProperty: n(41).f
    });
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.STORAGE = {
        settings: {
            position: {
                name: "Left",
                value: "left"
            },
            isShowSubSidebar: !0,
            openSidebarClick: {
                name: "Auto Hide",
                value: "autohide"
            },
            openCase: {
                name: "Both",
                value: "both"
            },
            openAppsCase: {
                name: "New Tab",
                value: "new"
            },
            iconSize: "30",
            iconPadding: "10",
            subSidebarColor: {
                hex8: "#2e2e2eFF"
            },
            subSidebarWidth: "50",
            bookmarkFontSize: "12",
            bookmarkFontLineHeight: "28",
            bookmarkFontColor: {
                hex8: "#d4d4d4FF"
            },
            mouseoverColor: {
                hex8: "#4683ffFF"
            },
            bookmarksSourceTree: null,
            bookmarksTree: null,
            isShowNewTab: !0,
            openNewtab: "by click ext icon",
            sidebarWidth: "300",
            sidebarColor: {
                hex8: "#414141FF"
            },
            sidebarMaskColor: {
                hex8: "#56565690"
            },
            sidebarApps: [ {
                img: "gservices/calendar.png",
                title: "Calendar",
                url: "https://calendar.google.com/calendar",
                picked: !1
            }, {
                img: "gservices/webstore.png",
                title: "Web Store",
                url: "https://chrome.google.com/webstore/category/extensions",
                picked: !1
            }, {
                img: "gservices/docs.png",
                title: "Docs",
                url: "https://docs.google.com/document",
                picked: !1
            }, {
                img: "gservices/drive.png",
                title: "Drive",
                url: "https://drive.google.com/drive/",
                picked: !1
            }, {
                img: "gservices/forms.png",
                title: "Forms",
                url: "https://docs.google.com/forms",
                picked: !1
            }, {
                img: "gservices/gmail.png",
                title: "Gmail",
                url: "https://mail.google.com/mail",
                picked: !1
            }, {
                img: "gservices/alerts.png",
                title: "Alerts",
                url: "https://www.google.com/alerts",
                picked: !1
            }, {
                img: "gservices/googleplay.png",
                title: "Google Play",
                url: "https://play.google.com/",
                picked: !1
            }, {
                img: "gservices/movietv.png",
                title: "Movie & TV",
                url: "https://play.google.com/movies",
                picked: !1
            }, {
                img: "gservices/playgames.png",
                title: "Play Games",
                url: "",
                picked: !1
            }, {
                img: "gservices/playmusic.png",
                title: "Play Music",
                url: "https://play.google.com/music/listen",
                picked: !1
            }, {
                img: "gservices/maps.png",
                title: "Maps",
                url: "https://www.google.com/maps",
                picked: !1
            }, {
                img: "gservices/keep.png",
                title: "Keep",
                url: "https://keep.google.com/",
                picked: !1
            }, {
                img: "gservices/news.png",
                title: "News",
                url: "https://news.google.com/",
                picked: !1
            }, {
                img: "gservices/photos.png",
                title: "Photos",
                url: "https://photos.google.com/",
                picked: !1
            }, {
                img: "gservices/sheets.png",
                title: "Sheets",
                url: "https://docs.google.com/spreadsheets",
                picked: !1
            }, {
                img: "gservices/translate.png",
                title: "Translate",
                url: "https://translate.google.com/",
                picked: !1
            }, {
                img: "gservices/youtube.png",
                title: "YouTube",
                url: "https://www.youtube.com/",
                picked: !1
            } ],
            sidebarShortcuts: [],
            searchBoxColor: {
                hex8: "#2c2c2cFF"
            },
            searchBoxFontColor: {
                hex8: "#afafafFF"
            },
            searchBoxIconColor: {
                hex8: "#515151FF"
            },
            supportInterval: {
                name: "Every fifth search",
                value: 5
            },
            searchEngine: {
                name: "Google",
                value: "google"
            },
            user: {
                id: null
            }
        },
        tasks: []
    };
} ]);