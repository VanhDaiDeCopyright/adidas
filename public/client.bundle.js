/*! For license information please see client.bundle.js.LICENSE.txt */
(() => {
    var e, t, n, r = {
            9252: (e, t, n) => {
                "use strict";
                var r = n(4586),
                    a = n(5873),
                    o = n(7434),
                    i = n(7177),
                    l = n(3536),
                    s = n(6330),
                    u = n(5152),
                    c = n(414),
                    d = n(5799),
                    f = n.n(d),
                    p = n(6714),
                    h = function() {
                        return (0, c.A)((function e() {
                            (0, u.A)(this, e)
                        }), [{
                            key: "fetchData",
                            value: (e = (0, s.A)(f().mark((function e(t, n) {
                                var r;
                                return f().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, fetch(t, n);
                                        case 2:
                                            if (!(r = e.sent).ok) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.abrupt("return", r.json());
                                        case 5:
                                            if (404 !== r.status) {
                                                e.next = 9;
                                                break
                                            }
                                            throw new p.u(p.O.NotFound, "Page Not Found");
                                        case 9:
                                            throw new p.u(p.O.Unhandled);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))), function(t, n) {
                                return e.apply(this, arguments)
                            })
                        }]);
                        var e
                    }(),
                    m = n(2061),
                    g = n(4041),
                    v = n(3144),
                    y = n(1085),
                    b = function(e) {
                        var t = e.children,
                            n = e.priority,
                            r = void 0 === n ? 0 : n,
                            a = k(),
                            o = a.addHead,
                            i = a.removeHead,
                            l = a.items;
                        return l && l.push({
                            priority: r,
                            children: t
                        }), (0, g.useEffect)((function() {
                            if (o && i) {
                                var e = {
                                    children: t,
                                    priority: r
                                };
                                return o(e),
                                    function() {
                                        return i(e)
                                    }
                            }
                        }), [o, t, r, i]), null
                    },
                    x = (0, g.createContext)(null),
                    w = function(e) {
                        var t = e.children,
                            n = (0, g.useRef)([]),
                            r = (0, g.useState)([]),
                            a = (0, m.A)(r, 2),
                            o = a[0],
                            i = a[1],
                            l = (0, g.useCallback)((function(e) {
                                n.current.push(e), i(j(n.current))
                            }), []),
                            s = (0, g.useCallback)((function(e) {
                                var t = n.current.indexOf(e); - 1 !== t && (n.current.splice(t, 1), i(j(n.current)))
                            }), []);
                        (0, g.useEffect)((function() {
                            S()
                        }), []);
                        var u = {
                            addHead: l,
                            removeHead: s
                        };
                        return (0, y.jsxs)(x.Provider, {
                            value: u,
                            children: [t, (0, v.createPortal)(o, document.head)]
                        })
                    },
                    k = function() {
                        return (0, g.useContext)(x)
                    },
                    S = function() {
                        var e = !1;
                        Array.from(document.head.childNodes).forEach((function(t) {
                            var n, r;
                            t.nodeType === Node.COMMENT_NODE && ("head-start" === (n = null === (r = t.textContent) || void 0 === r ? void 0 : r.trim()) && (e = !0));
                            e && (t.remove(), "head-end" === n && (e = !1))
                        }))
                    },
                    j = function(e) {
                        var t = [];
                        return e.forEach((function(e) {
                            Array.isArray(e.children) && g.Children.forEach(e.children, (function(n) {
                                if (n) {
                                    var r, a = !0;
                                    switch (n.type) {
                                        case "title":
                                        case "base":
                                            r = t.find((function(e) {
                                                return e.element.type === n.type
                                            }));
                                            break;
                                        case "link":
                                            r = t.find((function(e) {
                                                return e.element.type === n.type && n.props.href && e.element.props.href === n.props.href
                                            }));
                                            break;
                                        case "meta":
                                            r = t.find((function(e) {
                                                return e.element.type === n.type && n.props.name && e.element.props.name === n.props.name
                                            }));
                                            break;
                                        case "script":
                                            r = t.find((function(e) {
                                                return e.element.type === n.type && n.props.src && e.element.props.src === n.props.src
                                            }));
                                            break;
                                        case "style":
                                        case "noscript":
                                            break;
                                        default:
                                            a = !1, console.warn("Not a valid head element.", n)
                                    }
                                    if (r && r.priority > e.priority && (a = !1), a) {
                                        if (r) {
                                            var o = t.indexOf(r); - 1 !== o && t.splice(o, 1)
                                        }
                                        t.push({
                                            element: n,
                                            priority: e.priority
                                        })
                                    }
                                }
                            }))
                        })), t.map((function(e) {
                            return e.element
                        }))
                    },
                    O = n(463);
                const N = {
                    type: "logger",
                    log(e) {
                        this.output("log", e)
                    },
                    warn(e) {
                        this.output("warn", e)
                    },
                    error(e) {
                        this.output("error", e)
                    },
                    output(e, t) {
                        console && console[e] && console[e].apply(console, t)
                    }
                };
                class E {
                    constructor(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.init(e, t)
                    }
                    init(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.prefix = t.prefix || "i18next:", this.logger = e || N, this.options = t, this.debug = t.debug
                    }
                    log() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return this.forward(t, "log", "", !0)
                    }
                    warn() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return this.forward(t, "warn", "", !0)
                    }
                    error() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return this.forward(t, "error", "")
                    }
                    deprecate() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
                    }
                    forward(e, t, n, r) {
                        return r && !this.debug ? null : ("string" == typeof e[0] && (e[0] = `${n}${this.prefix} ${e[0]}`), this.logger[t](e))
                    }
                    create(e) {
                        return new E(this.logger, {
                            prefix: `${this.prefix}:${e}:`,
                            ...this.options
                        })
                    }
                    clone(e) {
                        return (e = e || this.options).prefix = e.prefix || this.prefix, new E(this.logger, e)
                    }
                }
                var P = new E;
                class C {
                    constructor() {
                        this.observers = {}
                    }
                    on(e, t) {
                        return e.split(" ").forEach((e => {
                            this.observers[e] || (this.observers[e] = new Map);
                            const n = this.observers[e].get(t) || 0;
                            this.observers[e].set(t, n + 1)
                        })), this
                    }
                    off(e, t) {
                        this.observers[e] && (t ? this.observers[e].delete(t) : delete this.observers[e])
                    }
                    emit(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        if (this.observers[e]) {
                            Array.from(this.observers[e].entries()).forEach((e => {
                                let [t, r] = e;
                                for (let e = 0; e < r; e++) t(...n)
                            }))
                        }
                        if (this.observers["*"]) {
                            Array.from(this.observers["*"].entries()).forEach((t => {
                                let [r, a] = t;
                                for (let t = 0; t < a; t++) r.apply(r, [e, ...n])
                            }))
                        }
                    }
                }

                function z() {
                    let e, t;
                    const n = new Promise(((n, r) => {
                        e = n, t = r
                    }));
                    return n.resolve = e, n.reject = t, n
                }

                function _(e) {
                    return null == e ? "" : "" + e
                }
                const T = /###/g;

                function L(e, t, n) {
                    function r(e) {
                        return e && e.indexOf("###") > -1 ? e.replace(T, ".") : e
                    }

                    function a() {
                        return !e || "string" == typeof e
                    }
                    const o = "string" != typeof t ? t : t.split(".");
                    let i = 0;
                    for (; i < o.length - 1;) {
                        if (a()) return {};
                        const t = r(o[i]);
                        !e[t] && n && (e[t] = new n), e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}, ++i
                    }
                    return a() ? {} : {
                        obj: e,
                        k: r(o[i])
                    }
                }

                function I(e, t, n) {
                    const {
                        obj: r,
                        k: a
                    } = L(e, t, Object);
                    if (void 0 !== r || 1 === t.length) return void(r[a] = n);
                    let o = t[t.length - 1],
                        i = t.slice(0, t.length - 1),
                        l = L(e, i, Object);
                    for (; void 0 === l.obj && i.length;) o = `${i[i.length-1]}.${o}`, i = i.slice(0, i.length - 1), l = L(e, i, Object), l && l.obj && void 0 !== l.obj[`${l.k}.${o}`] && (l.obj = void 0);
                    l.obj[`${l.k}.${o}`] = n
                }

                function A(e, t) {
                    const {
                        obj: n,
                        k: r
                    } = L(e, t);
                    if (n) return n[r]
                }

                function M(e, t, n) {
                    for (const r in t) "__proto__" !== r && "constructor" !== r && (r in e ? "string" == typeof e[r] || e[r] instanceof String || "string" == typeof t[r] || t[r] instanceof String ? n && (e[r] = t[r]) : M(e[r], t[r], n) : e[r] = t[r]);
                    return e
                }

                function R(e) {
                    return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                }
                var D = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#x2F;"
                };

                function F(e) {
                    return "string" == typeof e ? e.replace(/[&<>"'\/]/g, (e => D[e])) : e
                }
                const $ = [" ", ",", "?", "!", ";"],
                    H = new class {
                        constructor(e) {
                            this.capacity = e, this.regExpMap = new Map, this.regExpQueue = []
                        }
                        getRegExp(e) {
                            const t = this.regExpMap.get(e);
                            if (void 0 !== t) return t;
                            const n = new RegExp(e);
                            return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, n), this.regExpQueue.push(e), n
                        }
                    }(20);

                function U(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
                    if (!e) return;
                    if (e[t]) return e[t];
                    const r = t.split(n);
                    let a = e;
                    for (let e = 0; e < r.length;) {
                        if (!a || "object" != typeof a) return;
                        let t, o = "";
                        for (let i = e; i < r.length; ++i)
                            if (i !== e && (o += n), o += r[i], t = a[o], void 0 !== t) {
                                if (["string", "number", "boolean"].indexOf(typeof t) > -1 && i < r.length - 1) continue;
                                e += i - e + 1;
                                break
                            }
                        a = t
                    }
                    return a
                }

                function V(e) {
                    return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e
                }
                class B extends C {
                    constructor(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            ns: ["translation"],
                            defaultNS: "translation"
                        };
                        super(), this.data = e || {}, this.options = t, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), void 0 === this.options.ignoreJSONStructure && (this.options.ignoreJSONStructure = !0)
                    }
                    addNamespaces(e) {
                        this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                    }
                    removeNamespaces(e) {
                        const t = this.options.ns.indexOf(e);
                        t > -1 && this.options.ns.splice(t, 1)
                    }
                    getResource(e, t, n) {
                        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        const a = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator,
                            o = void 0 !== r.ignoreJSONStructure ? r.ignoreJSONStructure : this.options.ignoreJSONStructure;
                        let i;
                        e.indexOf(".") > -1 ? i = e.split(".") : (i = [e, t], n && (Array.isArray(n) ? i.push(...n) : "string" == typeof n && a ? i.push(...n.split(a)) : i.push(n)));
                        const l = A(this.data, i);
                        return !l && !t && !n && e.indexOf(".") > -1 && (e = i[0], t = i[1], n = i.slice(2).join(".")), l || !o || "string" != typeof n ? l : U(this.data && this.data[e] && this.data[e][t], n, a)
                    }
                    addResource(e, t, n, r) {
                        let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                            silent: !1
                        };
                        const o = void 0 !== a.keySeparator ? a.keySeparator : this.options.keySeparator;
                        let i = [e, t];
                        n && (i = i.concat(o ? n.split(o) : n)), e.indexOf(".") > -1 && (i = e.split("."), r = t, t = i[1]), this.addNamespaces(t), I(this.data, i, r), a.silent || this.emit("added", e, t, n, r)
                    }
                    addResources(e, t, n) {
                        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                            silent: !1
                        };
                        for (const r in n)("string" == typeof n[r] || Array.isArray(n[r])) && this.addResource(e, t, r, n[r], {
                            silent: !0
                        });
                        r.silent || this.emit("added", e, t, n)
                    }
                    addResourceBundle(e, t, n, r, a) {
                        let o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                                silent: !1,
                                skipCopy: !1
                            },
                            i = [e, t];
                        e.indexOf(".") > -1 && (i = e.split("."), r = n, n = t, t = i[1]), this.addNamespaces(t);
                        let l = A(this.data, i) || {};
                        o.skipCopy || (n = JSON.parse(JSON.stringify(n))), r ? M(l, n, a) : l = { ...l,
                            ...n
                        }, I(this.data, i, l), o.silent || this.emit("added", e, t, n)
                    }
                    removeResourceBundle(e, t) {
                        this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t)
                    }
                    hasResourceBundle(e, t) {
                        return void 0 !== this.getResource(e, t)
                    }
                    getResourceBundle(e, t) {
                        return t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? { ...this.getResource(e, t)
                        } : this.getResource(e, t)
                    }
                    getDataByLanguage(e) {
                        return this.data[e]
                    }
                    hasLanguageSomeTranslations(e) {
                        const t = this.getDataByLanguage(e);
                        return !!(t && Object.keys(t) || []).find((e => t[e] && Object.keys(t[e]).length > 0))
                    }
                    toJSON() {
                        return this.data
                    }
                }
                var W = {
                    processors: {},
                    addPostProcessor(e) {
                        this.processors[e.name] = e
                    },
                    handle(e, t, n, r, a) {
                        return e.forEach((e => {
                            this.processors[e] && (t = this.processors[e].process(t, n, r, a))
                        })), t
                    }
                };
                const Q = {};
                class K extends C {
                    constructor(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        super(),
                            function(e, t, n) {
                                e.forEach((e => {
                                    t[e] && (n[e] = t[e])
                                }))
                            }(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), this.logger = P.create("translator")
                    }
                    changeLanguage(e) {
                        e && (this.language = e)
                    }
                    exists(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            interpolation: {}
                        };
                        if (null == e) return !1;
                        const n = this.resolve(e, t);
                        return n && void 0 !== n.res
                    }
                    extractFromKey(e, t) {
                        let n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
                        void 0 === n && (n = ":");
                        const r = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator;
                        let a = t.ns || this.options.defaultNS || [];
                        const o = n && e.indexOf(n) > -1,
                            i = !(this.options.userDefinedKeySeparator || t.keySeparator || this.options.userDefinedNsSeparator || t.nsSeparator || function(e, t, n) {
                                t = t || "", n = n || "";
                                const r = $.filter((e => t.indexOf(e) < 0 && n.indexOf(e) < 0));
                                if (0 === r.length) return !0;
                                const a = H.getRegExp(`(${r.map((e=>"?"===e?"\\?":e)).join("|")})`);
                                let o = !a.test(e);
                                if (!o) {
                                    const t = e.indexOf(n);
                                    t > 0 && !a.test(e.substring(0, t)) && (o = !0)
                                }
                                return o
                            }(e, n, r));
                        if (o && !i) {
                            const t = e.match(this.interpolator.nestingRegexp);
                            if (t && t.length > 0) return {
                                key: e,
                                namespaces: a
                            };
                            const o = e.split(n);
                            (n !== r || n === r && this.options.ns.indexOf(o[0]) > -1) && (a = o.shift()), e = o.join(r)
                        }
                        return "string" == typeof a && (a = [a]), {
                            key: e,
                            namespaces: a
                        }
                    }
                    translate(e, t, n) {
                        if ("object" != typeof t && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), "object" == typeof t && (t = { ...t
                            }), t || (t = {}), null == e) return "";
                        Array.isArray(e) || (e = [String(e)]);
                        const r = void 0 !== t.returnDetails ? t.returnDetails : this.options.returnDetails,
                            a = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                            {
                                key: o,
                                namespaces: i
                            } = this.extractFromKey(e[e.length - 1], t),
                            l = i[i.length - 1],
                            s = t.lng || this.language,
                            u = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                        if (s && "cimode" === s.toLowerCase()) {
                            if (u) {
                                const e = t.nsSeparator || this.options.nsSeparator;
                                return r ? {
                                    res: `${l}${e}${o}`,
                                    usedKey: o,
                                    exactUsedKey: o,
                                    usedLng: s,
                                    usedNS: l,
                                    usedParams: this.getUsedParamsDetails(t)
                                } : `${l}${e}${o}`
                            }
                            return r ? {
                                res: o,
                                usedKey: o,
                                exactUsedKey: o,
                                usedLng: s,
                                usedNS: l,
                                usedParams: this.getUsedParamsDetails(t)
                            } : o
                        }
                        const c = this.resolve(e, t);
                        let d = c && c.res;
                        const f = c && c.usedKey || o,
                            p = c && c.exactUsedKey || o,
                            h = Object.prototype.toString.apply(d),
                            m = void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays,
                            g = !this.i18nFormat || this.i18nFormat.handleAsObject;
                        if (g && d && ("string" != typeof d && "boolean" != typeof d && "number" != typeof d) && ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(h) < 0 && ("string" != typeof m || !Array.isArray(d))) {
                            if (!t.returnObjects && !this.options.returnObjects) {
                                this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                                const e = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(f, d, { ...t,
                                    ns: i
                                }) : `key '${o} (${this.language})' returned an object instead of string.`;
                                return r ? (c.res = e, c.usedParams = this.getUsedParamsDetails(t), c) : e
                            }
                            if (a) {
                                const e = Array.isArray(d),
                                    n = e ? [] : {},
                                    r = e ? p : f;
                                for (const e in d)
                                    if (Object.prototype.hasOwnProperty.call(d, e)) {
                                        const o = `${r}${a}${e}`;
                                        n[e] = this.translate(o, { ...t,
                                            joinArrays: !1,
                                            ns: i
                                        }), n[e] === o && (n[e] = d[e])
                                    }
                                d = n
                            }
                        } else if (g && "string" == typeof m && Array.isArray(d)) d = d.join(m), d && (d = this.extendTranslation(d, e, t, n));
                        else {
                            let r = !1,
                                i = !1;
                            const u = void 0 !== t.count && "string" != typeof t.count,
                                f = K.hasDefaultValue(t),
                                p = u ? this.pluralResolver.getSuffix(s, t.count, t) : "",
                                h = t.ordinal && u ? this.pluralResolver.getSuffix(s, t.count, {
                                    ordinal: !1
                                }) : "",
                                m = u && !t.ordinal && 0 === t.count && this.pluralResolver.shouldUseIntlApi(),
                                g = m && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${p}`] || t[`defaultValue${h}`] || t.defaultValue;
                            !this.isValidLookup(d) && f && (r = !0, d = g), this.isValidLookup(d) || (i = !0, d = o);
                            const v = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && i ? void 0 : d,
                                y = f && g !== d && this.options.updateMissing;
                            if (i || r || y) {
                                if (this.logger.log(y ? "updateKey" : "missingKey", s, l, o, y ? g : d), a) {
                                    const e = this.resolve(o, { ...t,
                                        keySeparator: !1
                                    });
                                    e && e.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                                }
                                let e = [];
                                const n = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
                                if ("fallback" === this.options.saveMissingTo && n && n[0])
                                    for (let t = 0; t < n.length; t++) e.push(n[t]);
                                else "all" === this.options.saveMissingTo ? e = this.languageUtils.toResolveHierarchy(t.lng || this.language) : e.push(t.lng || this.language);
                                const r = (e, n, r) => {
                                    const a = f && r !== d ? r : v;
                                    this.options.missingKeyHandler ? this.options.missingKeyHandler(e, l, n, a, y, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(e, l, n, a, y, t), this.emit("missingKey", e, l, n, d)
                                };
                                this.options.saveMissing && (this.options.saveMissingPlurals && u ? e.forEach((e => {
                                    const n = this.pluralResolver.getSuffixes(e, t);
                                    m && t[`defaultValue${this.options.pluralSeparator}zero`] && n.indexOf(`${this.options.pluralSeparator}zero`) < 0 && n.push(`${this.options.pluralSeparator}zero`), n.forEach((n => {
                                        r([e], o + n, t[`defaultValue${n}`] || g)
                                    }))
                                })) : r(e, o, g))
                            }
                            d = this.extendTranslation(d, e, t, c, n), i && d === o && this.options.appendNamespaceToMissingKey && (d = `${l}:${o}`), (i || r) && this.options.parseMissingKeyHandler && (d = "v1" !== this.options.compatibilityAPI ? this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${o}` : o, r ? d : void 0) : this.options.parseMissingKeyHandler(d))
                        }
                        return r ? (c.res = d, c.usedParams = this.getUsedParamsDetails(t), c) : d
                    }
                    extendTranslation(e, t, n, r, a) {
                        var o = this;
                        if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, { ...this.options.interpolation.defaultVariables,
                            ...n
                        }, n.lng || this.language || r.usedLng, r.usedNS, r.usedKey, {
                            resolved: r
                        });
                        else if (!n.skipInterpolation) {
                            n.interpolation && this.interpolator.init({ ...n,
                                interpolation: { ...this.options.interpolation,
                                    ...n.interpolation
                                }
                            });
                            const i = "string" == typeof e && (n && n.interpolation && void 0 !== n.interpolation.skipOnVariables ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
                            let l;
                            if (i) {
                                const t = e.match(this.interpolator.nestingRegexp);
                                l = t && t.length
                            }
                            let s = n.replace && "string" != typeof n.replace ? n.replace : n;
                            if (this.options.interpolation.defaultVariables && (s = { ...this.options.interpolation.defaultVariables,
                                    ...s
                                }), e = this.interpolator.interpolate(e, s, n.lng || this.language || r.usedLng, n), i) {
                                const t = e.match(this.interpolator.nestingRegexp);
                                l < (t && t.length) && (n.nest = !1)
                            }!n.lng && "v1" !== this.options.compatibilityAPI && r && r.res && (n.lng = this.language || r.usedLng), !1 !== n.nest && (e = this.interpolator.nest(e, (function() {
                                for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                                return a && a[0] === r[0] && !n.context ? (o.logger.warn(`It seems you are nesting recursively key: ${r[0]} in key: ${t[0]}`), null) : o.translate(...r, t)
                            }), n)), n.interpolation && this.interpolator.reset()
                        }
                        const i = n.postProcess || this.options.postProcess,
                            l = "string" == typeof i ? [i] : i;
                        return null != e && l && l.length && !1 !== n.applyPostProcessor && (e = W.handle(l, e, t, this.options && this.options.postProcessPassResolved ? {
                            i18nResolved: { ...r,
                                usedParams: this.getUsedParamsDetails(n)
                            },
                            ...n
                        } : n, this)), e
                    }
                    resolve(e) {
                        let t, n, r, a, o, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return "string" == typeof e && (e = [e]), e.forEach((e => {
                            if (this.isValidLookup(t)) return;
                            const l = this.extractFromKey(e, i),
                                s = l.key;
                            n = s;
                            let u = l.namespaces;
                            this.options.fallbackNS && (u = u.concat(this.options.fallbackNS));
                            const c = void 0 !== i.count && "string" != typeof i.count,
                                d = c && !i.ordinal && 0 === i.count && this.pluralResolver.shouldUseIntlApi(),
                                f = void 0 !== i.context && ("string" == typeof i.context || "number" == typeof i.context) && "" !== i.context,
                                p = i.lngs ? i.lngs : this.languageUtils.toResolveHierarchy(i.lng || this.language, i.fallbackLng);
                            u.forEach((e => {
                                this.isValidLookup(t) || (o = e, !Q[`${p[0]}-${e}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(o) && (Q[`${p[0]}-${e}`] = !0, this.logger.warn(`key "${n}" for languages "${p.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), p.forEach((n => {
                                    if (this.isValidLookup(t)) return;
                                    a = n;
                                    const o = [s];
                                    if (this.i18nFormat && this.i18nFormat.addLookupKeys) this.i18nFormat.addLookupKeys(o, s, n, e, i);
                                    else {
                                        let e;
                                        c && (e = this.pluralResolver.getSuffix(n, i.count, i));
                                        const t = `${this.options.pluralSeparator}zero`,
                                            r = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                                        if (c && (o.push(s + e), i.ordinal && 0 === e.indexOf(r) && o.push(s + e.replace(r, this.options.pluralSeparator)), d && o.push(s + t)), f) {
                                            const n = `${s}${this.options.contextSeparator}${i.context}`;
                                            o.push(n), c && (o.push(n + e), i.ordinal && 0 === e.indexOf(r) && o.push(n + e.replace(r, this.options.pluralSeparator)), d && o.push(n + t))
                                        }
                                    }
                                    let l;
                                    for (; l = o.pop();) this.isValidLookup(t) || (r = l, t = this.getResource(n, e, l, i))
                                })))
                            }))
                        })), {
                            res: t,
                            usedKey: n,
                            exactUsedKey: r,
                            usedLng: a,
                            usedNS: o
                        }
                    }
                    isValidLookup(e) {
                        return !(void 0 === e || !this.options.returnNull && null === e || !this.options.returnEmptyString && "" === e)
                    }
                    getResource(e, t, n) {
                        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, r) : this.resourceStore.getResource(e, t, n, r)
                    }
                    getUsedParamsDetails() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"],
                            n = e.replace && "string" != typeof e.replace;
                        let r = n ? e.replace : e;
                        if (n && void 0 !== e.count && (r.count = e.count), this.options.interpolation.defaultVariables && (r = { ...this.options.interpolation.defaultVariables,
                                ...r
                            }), !n) {
                            r = { ...r
                            };
                            for (const e of t) delete r[e]
                        }
                        return r
                    }
                    static hasDefaultValue(e) {
                        const t = "defaultValue";
                        for (const n in e)
                            if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, 12) && void 0 !== e[n]) return !0;
                        return !1
                    }
                }

                function q(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                }
                class Y {
                    constructor(e) {
                        this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = P.create("languageUtils")
                    }
                    getScriptPartFromCode(e) {
                        if (!(e = V(e)) || e.indexOf("-") < 0) return null;
                        const t = e.split("-");
                        return 2 === t.length ? null : (t.pop(), "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-")))
                    }
                    getLanguagePartFromCode(e) {
                        if (!(e = V(e)) || e.indexOf("-") < 0) return e;
                        const t = e.split("-");
                        return this.formatLanguageCode(t[0])
                    }
                    formatLanguageCode(e) {
                        if ("string" == typeof e && e.indexOf("-") > -1) {
                            const t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
                            let n = e.split("-");
                            return this.options.lowerCaseLng ? n = n.map((e => e.toLowerCase())) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = q(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(), 2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = q(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = q(n[2].toLowerCase()))), n.join("-")
                        }
                        return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                    }
                    isSupportedCode(e) {
                        return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
                    }
                    getBestMatchFromCodes(e) {
                        if (!e) return null;
                        let t;
                        return e.forEach((e => {
                            if (t) return;
                            const n = this.formatLanguageCode(e);
                            this.options.supportedLngs && !this.isSupportedCode(n) || (t = n)
                        })), !t && this.options.supportedLngs && e.forEach((e => {
                            if (t) return;
                            const n = this.getLanguagePartFromCode(e);
                            if (this.isSupportedCode(n)) return t = n;
                            t = this.options.supportedLngs.find((e => e === n ? e : e.indexOf("-") < 0 && n.indexOf("-") < 0 ? void 0 : e.indexOf("-") > 0 && n.indexOf("-") < 0 && e.substring(0, e.indexOf("-")) === n || 0 === e.indexOf(n) && n.length > 1 ? e : void 0))
                        })), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t
                    }
                    getFallbackCodes(e, t) {
                        if (!e) return [];
                        if ("function" == typeof e && (e = e(t)), "string" == typeof e && (e = [e]), Array.isArray(e)) return e;
                        if (!t) return e.default || [];
                        let n = e[t];
                        return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || []
                    }
                    toResolveHierarchy(e, t) {
                        const n = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
                            r = [],
                            a = e => {
                                e && (this.isSupportedCode(e) ? r.push(e) : this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))
                            };
                        return "string" == typeof e && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? ("languageOnly" !== this.options.load && a(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && a(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && a(this.getLanguagePartFromCode(e))) : "string" == typeof e && a(this.formatLanguageCode(e)), n.forEach((e => {
                            r.indexOf(e) < 0 && a(this.formatLanguageCode(e))
                        })), r
                    }
                }
                let G = [{
                        lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
                        nr: [1, 2],
                        fc: 1
                    }, {
                        lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
                        nr: [1, 2],
                        fc: 2
                    }, {
                        lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
                        nr: [1],
                        fc: 3
                    }, {
                        lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
                        nr: [1, 2, 5],
                        fc: 4
                    }, {
                        lngs: ["ar"],
                        nr: [0, 1, 2, 3, 11, 100],
                        fc: 5
                    }, {
                        lngs: ["cs", "sk"],
                        nr: [1, 2, 5],
                        fc: 6
                    }, {
                        lngs: ["csb", "pl"],
                        nr: [1, 2, 5],
                        fc: 7
                    }, {
                        lngs: ["cy"],
                        nr: [1, 2, 3, 8],
                        fc: 8
                    }, {
                        lngs: ["fr"],
                        nr: [1, 2],
                        fc: 9
                    }, {
                        lngs: ["ga"],
                        nr: [1, 2, 3, 7, 11],
                        fc: 10
                    }, {
                        lngs: ["gd"],
                        nr: [1, 2, 3, 20],
                        fc: 11
                    }, {
                        lngs: ["is"],
                        nr: [1, 2],
                        fc: 12
                    }, {
                        lngs: ["jv"],
                        nr: [0, 1],
                        fc: 13
                    }, {
                        lngs: ["kw"],
                        nr: [1, 2, 3, 4],
                        fc: 14
                    }, {
                        lngs: ["lt"],
                        nr: [1, 2, 10],
                        fc: 15
                    }, {
                        lngs: ["lv"],
                        nr: [1, 2, 0],
                        fc: 16
                    }, {
                        lngs: ["mk"],
                        nr: [1, 2],
                        fc: 17
                    }, {
                        lngs: ["mnk"],
                        nr: [0, 1, 2],
                        fc: 18
                    }, {
                        lngs: ["mt"],
                        nr: [1, 2, 11, 20],
                        fc: 19
                    }, {
                        lngs: ["or"],
                        nr: [2, 1],
                        fc: 2
                    }, {
                        lngs: ["ro"],
                        nr: [1, 2, 20],
                        fc: 20
                    }, {
                        lngs: ["sl"],
                        nr: [5, 1, 2, 3],
                        fc: 21
                    }, {
                        lngs: ["he", "iw"],
                        nr: [1, 2, 20, 21],
                        fc: 22
                    }],
                    J = {
                        1: function(e) {
                            return Number(e > 1)
                        },
                        2: function(e) {
                            return Number(1 != e)
                        },
                        3: function(e) {
                            return 0
                        },
                        4: function(e) {
                            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                        },
                        5: function(e) {
                            return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5)
                        },
                        6: function(e) {
                            return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
                        },
                        7: function(e) {
                            return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                        },
                        8: function(e) {
                            return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
                        },
                        9: function(e) {
                            return Number(e >= 2)
                        },
                        10: function(e) {
                            return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
                        },
                        11: function(e) {
                            return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3)
                        },
                        12: function(e) {
                            return Number(e % 10 != 1 || e % 100 == 11)
                        },
                        13: function(e) {
                            return Number(0 !== e)
                        },
                        14: function(e) {
                            return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
                        },
                        15: function(e) {
                            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                        },
                        16: function(e) {
                            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
                        },
                        17: function(e) {
                            return Number(1 == e || e % 10 == 1 && e % 100 != 11 ? 0 : 1)
                        },
                        18: function(e) {
                            return Number(0 == e ? 0 : 1 == e ? 1 : 2)
                        },
                        19: function(e) {
                            return Number(1 == e ? 0 : 0 == e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3)
                        },
                        20: function(e) {
                            return Number(1 == e ? 0 : 0 == e || e % 100 > 0 && e % 100 < 20 ? 1 : 2)
                        },
                        21: function(e) {
                            return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
                        },
                        22: function(e) {
                            return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
                        }
                    };
                const X = ["v1", "v2", "v3"],
                    Z = ["v4"],
                    ee = {
                        zero: 0,
                        one: 1,
                        two: 2,
                        few: 3,
                        many: 4,
                        other: 5
                    };
                class te {
                    constructor(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.languageUtils = e, this.options = t, this.logger = P.create("pluralResolver"), this.options.compatibilityJSON && !Z.includes(this.options.compatibilityJSON) || "undefined" != typeof Intl && Intl.PluralRules || (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = function() {
                            const e = {};
                            return G.forEach((t => {
                                t.lngs.forEach((n => {
                                    e[n] = {
                                        numbers: t.nr,
                                        plurals: J[t.fc]
                                    }
                                }))
                            })), e
                        }()
                    }
                    addRule(e, t) {
                        this.rules[e] = t
                    }
                    getRule(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (this.shouldUseIntlApi()) try {
                            return new Intl.PluralRules(V("dev" === e ? "en" : e), {
                                type: t.ordinal ? "ordinal" : "cardinal"
                            })
                        } catch (e) {
                            return
                        }
                        return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                    }
                    needsPlural(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        const n = this.getRule(e, t);
                        return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1
                    }
                    getPluralFormsOfKey(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return this.getSuffixes(e, n).map((e => `${t}${e}`))
                    }
                    getSuffixes(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        const n = this.getRule(e, t);
                        return n ? this.shouldUseIntlApi() ? n.resolvedOptions().pluralCategories.sort(((e, t) => ee[e] - ee[t])).map((e => `${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${e}`)) : n.numbers.map((n => this.getSuffix(e, n, t))) : []
                    }
                    getSuffix(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        const r = this.getRule(e, n);
                        return r ? this.shouldUseIntlApi() ? `${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${r.select(t)}` : this.getSuffixRetroCompatible(r, t) : (this.logger.warn(`no plural rule found for: ${e}`), "")
                    }
                    getSuffixRetroCompatible(e, t) {
                        const n = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t));
                        let r = e.numbers[n];
                        this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] && (2 === r ? r = "plural" : 1 === r && (r = ""));
                        const a = () => this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString();
                        return "v1" === this.options.compatibilityJSON ? 1 === r ? "" : "number" == typeof r ? `_plural_${r.toString()}` : a() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] ? a() : this.options.prepend && n.toString() ? this.options.prepend + n.toString() : n.toString()
                    }
                    shouldUseIntlApi() {
                        return !X.includes(this.options.compatibilityJSON)
                    }
                }

                function ne(e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ".",
                        a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                        o = function(e, t, n) {
                            const r = A(e, n);
                            return void 0 !== r ? r : A(t, n)
                        }(e, t, n);
                    return !o && a && "string" == typeof n && (o = U(e, n, r), void 0 === o && (o = U(t, n, r))), o
                }
                class re {
                    constructor() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        this.logger = P.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || (e => e), this.init(e)
                    }
                    init() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        e.interpolation || (e.interpolation = {
                            escapeValue: !0
                        });
                        const {
                            escape: t,
                            escapeValue: n,
                            useRawValueToEscape: r,
                            prefix: a,
                            prefixEscaped: o,
                            suffix: i,
                            suffixEscaped: l,
                            formatSeparator: s,
                            unescapeSuffix: u,
                            unescapePrefix: c,
                            nestingPrefix: d,
                            nestingPrefixEscaped: f,
                            nestingSuffix: p,
                            nestingSuffixEscaped: h,
                            nestingOptionsSeparator: m,
                            maxReplaces: g,
                            alwaysFormat: v
                        } = e.interpolation;
                        this.escape = void 0 !== t ? t : F, this.escapeValue = void 0 === n || n, this.useRawValueToEscape = void 0 !== r && r, this.prefix = a ? R(a) : o || "{{", this.suffix = i ? R(i) : l || "}}", this.formatSeparator = s || ",", this.unescapePrefix = u ? "" : c || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = d ? R(d) : f || R("$t("), this.nestingSuffix = p ? R(p) : h || R(")"), this.nestingOptionsSeparator = m || ",", this.maxReplaces = g || 1e3, this.alwaysFormat = void 0 !== v && v, this.resetRegExp()
                    }
                    reset() {
                        this.options && this.init(this.options)
                    }
                    resetRegExp() {
                        const e = (e, t) => e && e.source === t ? (e.lastIndex = 0, e) : new RegExp(t, "g");
                        this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`)
                    }
                    interpolate(e, t, n, r) {
                        let a, o, i;
                        const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

                        function s(e) {
                            return e.replace(/\$/g, "$$$$")
                        }
                        const u = e => {
                            if (e.indexOf(this.formatSeparator) < 0) {
                                const a = ne(t, l, e, this.options.keySeparator, this.options.ignoreJSONStructure);
                                return this.alwaysFormat ? this.format(a, void 0, n, { ...r,
                                    ...t,
                                    interpolationkey: e
                                }) : a
                            }
                            const a = e.split(this.formatSeparator),
                                o = a.shift().trim(),
                                i = a.join(this.formatSeparator).trim();
                            return this.format(ne(t, l, o, this.options.keySeparator, this.options.ignoreJSONStructure), i, n, { ...r,
                                ...t,
                                interpolationkey: o
                            })
                        };
                        this.resetRegExp();
                        const c = r && r.missingInterpolationHandler || this.options.missingInterpolationHandler,
                            d = r && r.interpolation && void 0 !== r.interpolation.skipOnVariables ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
                        return [{
                            regex: this.regexpUnescape,
                            safeValue: e => s(e)
                        }, {
                            regex: this.regexp,
                            safeValue: e => this.escapeValue ? s(this.escape(e)) : s(e)
                        }].forEach((t => {
                            for (i = 0; a = t.regex.exec(e);) {
                                const n = a[1].trim();
                                if (o = u(n), void 0 === o)
                                    if ("function" == typeof c) {
                                        const t = c(e, a, r);
                                        o = "string" == typeof t ? t : ""
                                    } else if (r && Object.prototype.hasOwnProperty.call(r, n)) o = "";
                                else {
                                    if (d) {
                                        o = a[0];
                                        continue
                                    }
                                    this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`), o = ""
                                } else "string" == typeof o || this.useRawValueToEscape || (o = _(o));
                                const l = t.safeValue(o);
                                if (e = e.replace(a[0], l), d ? (t.regex.lastIndex += o.length, t.regex.lastIndex -= a[0].length) : t.regex.lastIndex = 0, i++, i >= this.maxReplaces) break
                            }
                        })), e
                    }
                    nest(e, t) {
                        let n, r, a, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};

                        function i(e, t) {
                            const n = this.nestingOptionsSeparator;
                            if (e.indexOf(n) < 0) return e;
                            const r = e.split(new RegExp(`${n}[ ]*{`));
                            let o = `{${r[1]}`;
                            e = r[0], o = this.interpolate(o, a);
                            const i = o.match(/'/g),
                                l = o.match(/"/g);
                            (i && i.length % 2 == 0 && !l || l.length % 2 != 0) && (o = o.replace(/'/g, '"'));
                            try {
                                a = JSON.parse(o), t && (a = { ...t,
                                    ...a
                                })
                            } catch (t) {
                                return this.logger.warn(`failed parsing options string in nesting for key ${e}`, t), `${e}${n}${o}`
                            }
                            return a.defaultValue && a.defaultValue.indexOf(this.prefix) > -1 && delete a.defaultValue, e
                        }
                        for (; n = this.nestingRegexp.exec(e);) {
                            let l = [];
                            a = { ...o
                            }, a = a.replace && "string" != typeof a.replace ? a.replace : a, a.applyPostProcessor = !1, delete a.defaultValue;
                            let s = !1;
                            if (-1 !== n[0].indexOf(this.formatSeparator) && !/{.*}/.test(n[1])) {
                                const e = n[1].split(this.formatSeparator).map((e => e.trim()));
                                n[1] = e.shift(), l = e, s = !0
                            }
                            if (r = t(i.call(this, n[1].trim(), a), a), r && n[0] === e && "string" != typeof r) return r;
                            "string" != typeof r && (r = _(r)), r || (this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`), r = ""), s && (r = l.reduce(((e, t) => this.format(e, t, o.lng, { ...o,
                                interpolationkey: n[1].trim()
                            })), r.trim())), e = e.replace(n[0], r), this.regexp.lastIndex = 0
                        }
                        return e
                    }
                }

                function ae(e) {
                    const t = {};
                    return function(n, r, a) {
                        const o = r + JSON.stringify(a);
                        let i = t[o];
                        return i || (i = e(V(r), a), t[o] = i), i(n)
                    }
                }
                class oe {
                    constructor() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        this.logger = P.create("formatter"), this.options = e, this.formats = {
                            number: ae(((e, t) => {
                                const n = new Intl.NumberFormat(e, { ...t
                                });
                                return e => n.format(e)
                            })),
                            currency: ae(((e, t) => {
                                const n = new Intl.NumberFormat(e, { ...t,
                                    style: "currency"
                                });
                                return e => n.format(e)
                            })),
                            datetime: ae(((e, t) => {
                                const n = new Intl.DateTimeFormat(e, { ...t
                                });
                                return e => n.format(e)
                            })),
                            relativetime: ae(((e, t) => {
                                const n = new Intl.RelativeTimeFormat(e, { ...t
                                });
                                return e => n.format(e, t.range || "day")
                            })),
                            list: ae(((e, t) => {
                                const n = new Intl.ListFormat(e, { ...t
                                });
                                return e => n.format(e)
                            }))
                        }, this.init(e)
                    }
                    init(e) {
                        const t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            interpolation: {}
                        }).interpolation;
                        this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ","
                    }
                    add(e, t) {
                        this.formats[e.toLowerCase().trim()] = t
                    }
                    addCached(e, t) {
                        this.formats[e.toLowerCase().trim()] = ae(t)
                    }
                    format(e, t, n) {
                        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        const a = t.split(this.formatSeparator).reduce(((e, t) => {
                            const {
                                formatName: a,
                                formatOptions: o
                            } = function(e) {
                                let t = e.toLowerCase().trim();
                                const n = {};
                                if (e.indexOf("(") > -1) {
                                    const r = e.split("(");
                                    t = r[0].toLowerCase().trim();
                                    const a = r[1].substring(0, r[1].length - 1);
                                    "currency" === t && a.indexOf(":") < 0 ? n.currency || (n.currency = a.trim()) : "relativetime" === t && a.indexOf(":") < 0 ? n.range || (n.range = a.trim()) : a.split(";").forEach((e => {
                                        if (e) {
                                            const [t, ...r] = e.split(":"), a = r.join(":").trim().replace(/^'+|'+$/g, ""), o = t.trim();
                                            n[o] || (n[o] = a), "false" === a && (n[o] = !1), "true" === a && (n[o] = !0), isNaN(a) || (n[o] = parseInt(a, 10))
                                        }
                                    }))
                                }
                                return {
                                    formatName: t,
                                    formatOptions: n
                                }
                            }(t);
                            if (this.formats[a]) {
                                let t = e;
                                try {
                                    const i = r && r.formatParams && r.formatParams[r.interpolationkey] || {},
                                        l = i.locale || i.lng || r.locale || r.lng || n;
                                    t = this.formats[a](e, l, { ...o,
                                        ...r,
                                        ...i
                                    })
                                } catch (e) {
                                    this.logger.warn(e)
                                }
                                return t
                            }
                            return this.logger.warn(`there was no format function for ${a}`), e
                        }), e);
                        return a
                    }
                }
                class ie extends C {
                    constructor(e, t, n) {
                        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = r, this.logger = P.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = r.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5, this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(n, r.backend, r)
                    }
                    queueLoad(e, t, n, r) {
                        const a = {},
                            o = {},
                            i = {},
                            l = {};
                        return e.forEach((e => {
                            let r = !0;
                            t.forEach((t => {
                                const i = `${e}|${t}`;
                                !n.reload && this.store.hasResourceBundle(e, t) ? this.state[i] = 2 : this.state[i] < 0 || (1 === this.state[i] ? void 0 === o[i] && (o[i] = !0) : (this.state[i] = 1, r = !1, void 0 === o[i] && (o[i] = !0), void 0 === a[i] && (a[i] = !0), void 0 === l[t] && (l[t] = !0)))
                            })), r || (i[e] = !0)
                        })), (Object.keys(a).length || Object.keys(o).length) && this.queue.push({
                            pending: o,
                            pendingCount: Object.keys(o).length,
                            loaded: {},
                            errors: [],
                            callback: r
                        }), {
                            toLoad: Object.keys(a),
                            pending: Object.keys(o),
                            toLoadLanguages: Object.keys(i),
                            toLoadNamespaces: Object.keys(l)
                        }
                    }
                    loaded(e, t, n) {
                        const r = e.split("|"),
                            a = r[0],
                            o = r[1];
                        t && this.emit("failedLoading", a, o, t), n && this.store.addResourceBundle(a, o, n, void 0, void 0, {
                            skipCopy: !0
                        }), this.state[e] = t ? -1 : 2;
                        const i = {};
                        this.queue.forEach((n => {
                            ! function(e, t, n) {
                                const {
                                    obj: r,
                                    k: a
                                } = L(e, t, Object);
                                r[a] = r[a] || [], r[a].push(n)
                            }(n.loaded, [a], o),
                            function(e, t) {
                                void 0 !== e.pending[t] && (delete e.pending[t], e.pendingCount--)
                            }(n, e), t && n.errors.push(t), 0 !== n.pendingCount || n.done || (Object.keys(n.loaded).forEach((e => {
                                i[e] || (i[e] = {});
                                const t = n.loaded[e];
                                t.length && t.forEach((t => {
                                    void 0 === i[e][t] && (i[e][t] = !0)
                                }))
                            })), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback())
                        })), this.emit("loaded", i), this.queue = this.queue.filter((e => !e.done))
                    }
                    read(e, t, n) {
                        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                            a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.retryTimeout,
                            o = arguments.length > 5 ? arguments[5] : void 0;
                        if (!e.length) return o(null, {});
                        if (this.readingCalls >= this.maxParallelReads) return void this.waitingReads.push({
                            lng: e,
                            ns: t,
                            fcName: n,
                            tried: r,
                            wait: a,
                            callback: o
                        });
                        this.readingCalls++;
                        const i = (i, l) => {
                                if (this.readingCalls--, this.waitingReads.length > 0) {
                                    const e = this.waitingReads.shift();
                                    this.read(e.lng, e.ns, e.fcName, e.tried, e.wait, e.callback)
                                }
                                i && l && r < this.maxRetries ? setTimeout((() => {
                                    this.read.call(this, e, t, n, r + 1, 2 * a, o)
                                }), a) : o(i, l)
                            },
                            l = this.backend[n].bind(this.backend);
                        if (2 !== l.length) return l(e, t, i);
                        try {
                            const n = l(e, t);
                            n && "function" == typeof n.then ? n.then((e => i(null, e))).catch(i) : i(null, n)
                        } catch (e) {
                            i(e)
                        }
                    }
                    prepareLoading(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = arguments.length > 3 ? arguments[3] : void 0;
                        if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), r && r();
                        "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" == typeof t && (t = [t]);
                        const a = this.queueLoad(e, t, n, r);
                        if (!a.toLoad.length) return a.pending.length || r(), null;
                        a.toLoad.forEach((e => {
                            this.loadOne(e)
                        }))
                    }
                    load(e, t, n) {
                        this.prepareLoading(e, t, {}, n)
                    }
                    reload(e, t, n) {
                        this.prepareLoading(e, t, {
                            reload: !0
                        }, n)
                    }
                    loadOne(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        const n = e.split("|"),
                            r = n[0],
                            a = n[1];
                        this.read(r, a, "read", void 0, void 0, ((n, o) => {
                            n && this.logger.warn(`${t}loading namespace ${a} for language ${r} failed`, n), !n && o && this.logger.log(`${t}loaded namespace ${a} for language ${r}`, o), this.loaded(e, n, o)
                        }))
                    }
                    saveMissing(e, t, n, r, a) {
                        let o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                            i = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {};
                        if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t)) this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
                        else if (null != n && "" !== n) {
                            if (this.backend && this.backend.create) {
                                const l = { ...o,
                                        isUpdate: a
                                    },
                                    s = this.backend.create.bind(this.backend);
                                if (s.length < 6) try {
                                    let a;
                                    a = 5 === s.length ? s(e, t, n, r, l) : s(e, t, n, r), a && "function" == typeof a.then ? a.then((e => i(null, e))).catch(i) : i(null, a)
                                } catch (e) {
                                    i(e)
                                } else s(e, t, n, r, i, l)
                            }
                            e && e[0] && this.store.addResource(e[0], t, n, r)
                        }
                    }
                }

                function le() {
                    return {
                        debug: !1,
                        initImmediate: !0,
                        ns: ["translation"],
                        defaultNS: ["translation"],
                        fallbackLng: ["dev"],
                        fallbackNS: !1,
                        supportedLngs: !1,
                        nonExplicitSupportedLngs: !1,
                        load: "all",
                        preload: !1,
                        simplifyPluralSuffix: !0,
                        keySeparator: ".",
                        nsSeparator: ":",
                        pluralSeparator: "_",
                        contextSeparator: "_",
                        partialBundledLanguages: !1,
                        saveMissing: !1,
                        updateMissing: !1,
                        saveMissingTo: "fallback",
                        saveMissingPlurals: !0,
                        missingKeyHandler: !1,
                        missingInterpolationHandler: !1,
                        postProcess: !1,
                        postProcessPassResolved: !1,
                        returnNull: !1,
                        returnEmptyString: !0,
                        returnObjects: !1,
                        joinArrays: !1,
                        returnedObjectHandler: !1,
                        parseMissingKeyHandler: !1,
                        appendNamespaceToMissingKey: !1,
                        appendNamespaceToCIMode: !1,
                        overloadTranslationOptionHandler: function(e) {
                            let t = {};
                            if ("object" == typeof e[1] && (t = e[1]), "string" == typeof e[1] && (t.defaultValue = e[1]), "string" == typeof e[2] && (t.tDescription = e[2]), "object" == typeof e[2] || "object" == typeof e[3]) {
                                const n = e[3] || e[2];
                                Object.keys(n).forEach((e => {
                                    t[e] = n[e]
                                }))
                            }
                            return t
                        },
                        interpolation: {
                            escapeValue: !0,
                            format: e => e,
                            prefix: "{{",
                            suffix: "}}",
                            formatSeparator: ",",
                            unescapePrefix: "-",
                            nestingPrefix: "$t(",
                            nestingSuffix: ")",
                            nestingOptionsSeparator: ",",
                            maxReplaces: 1e3,
                            skipOnVariables: !0
                        }
                    }
                }

                function se(e) {
                    return "string" == typeof e.ns && (e.ns = [e.ns]), "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e
                }

                function ue() {}
                class ce extends C {
                    constructor() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        var n;
                        if (super(), this.options = se(e), this.services = {}, this.logger = P, this.modules = {
                                external: []
                            }, n = this, Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((e => {
                                "function" == typeof n[e] && (n[e] = n[e].bind(n))
                            })), t && !this.isInitialized && !e.isClone) {
                            if (!this.options.initImmediate) return this.init(e, t), this;
                            setTimeout((() => {
                                this.init(e, t)
                            }), 0)
                        }
                    }
                    init() {
                        var e = this;
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 ? arguments[1] : void 0;
                        this.isInitializing = !0, "function" == typeof t && (n = t, t = {}), !t.defaultNS && !1 !== t.defaultNS && t.ns && ("string" == typeof t.ns ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
                        const r = le();

                        function a(e) {
                            return e ? "function" == typeof e ? new e : e : null
                        }
                        if (this.options = { ...r,
                                ...this.options,
                                ...se(t)
                            }, "v1" !== this.options.compatibilityAPI && (this.options.interpolation = { ...r.interpolation,
                                ...this.options.interpolation
                            }), void 0 !== t.keySeparator && (this.options.userDefinedKeySeparator = t.keySeparator), void 0 !== t.nsSeparator && (this.options.userDefinedNsSeparator = t.nsSeparator), !this.options.isClone) {
                            let t;
                            this.modules.logger ? P.init(a(this.modules.logger), this.options) : P.init(null, this.options), this.modules.formatter ? t = this.modules.formatter : "undefined" != typeof Intl && (t = oe);
                            const n = new Y(this.options);
                            this.store = new B(this.options.resources, this.options);
                            const o = this.services;
                            o.logger = P, o.resourceStore = this.store, o.languageUtils = n, o.pluralResolver = new te(n, {
                                prepend: this.options.pluralSeparator,
                                compatibilityJSON: this.options.compatibilityJSON,
                                simplifyPluralSuffix: this.options.simplifyPluralSuffix
                            }), !t || this.options.interpolation.format && this.options.interpolation.format !== r.interpolation.format || (o.formatter = a(t), o.formatter.init(o, this.options), this.options.interpolation.format = o.formatter.format.bind(o.formatter)), o.interpolator = new re(this.options), o.utils = {
                                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                            }, o.backendConnector = new ie(a(this.modules.backend), o.resourceStore, o, this.options), o.backendConnector.on("*", (function(t) {
                                for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                                e.emit(t, ...r)
                            })), this.modules.languageDetector && (o.languageDetector = a(this.modules.languageDetector), o.languageDetector.init && o.languageDetector.init(o, this.options.detection, this.options)), this.modules.i18nFormat && (o.i18nFormat = a(this.modules.i18nFormat), o.i18nFormat.init && o.i18nFormat.init(this)), this.translator = new K(this.services, this.options), this.translator.on("*", (function(t) {
                                for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                                e.emit(t, ...r)
                            })), this.modules.external.forEach((e => {
                                e.init && e.init(this)
                            }))
                        }
                        if (this.format = this.options.interpolation.format, n || (n = ue), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                            const e = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                            e.length > 0 && "dev" !== e[0] && (this.options.lng = e[0])
                        }
                        this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
                        ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((t => {
                            this[t] = function() {
                                return e.store[t](...arguments)
                            }
                        }));
                        ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((t => {
                            this[t] = function() {
                                return e.store[t](...arguments), e
                            }
                        }));
                        const o = z(),
                            i = () => {
                                const e = (e, t) => {
                                    this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), o.resolve(t), n(e, t)
                                };
                                if (this.languages && "v1" !== this.options.compatibilityAPI && !this.isInitialized) return e(null, this.t.bind(this));
                                this.changeLanguage(this.options.lng, e)
                            };
                        return this.options.resources || !this.options.initImmediate ? i() : setTimeout(i, 0), o
                    }
                    loadResources(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ue;
                        const n = "string" == typeof e ? e : this.language;
                        if ("function" == typeof e && (t = e), !this.options.resources || this.options.partialBundledLanguages) {
                            if (n && "cimode" === n.toLowerCase() && (!this.options.preload || 0 === this.options.preload.length)) return t();
                            const e = [],
                                r = t => {
                                    if (!t) return;
                                    if ("cimode" === t) return;
                                    this.services.languageUtils.toResolveHierarchy(t).forEach((t => {
                                        "cimode" !== t && e.indexOf(t) < 0 && e.push(t)
                                    }))
                                };
                            if (n) r(n);
                            else {
                                this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((e => r(e)))
                            }
                            this.options.preload && this.options.preload.forEach((e => r(e))), this.services.backendConnector.load(e, this.options.ns, (e => {
                                e || this.resolvedLanguage || !this.language || this.setResolvedLanguage(this.language), t(e)
                            }))
                        } else t(null)
                    }
                    reloadResources(e, t, n) {
                        const r = z();
                        return e || (e = this.languages), t || (t = this.options.ns), n || (n = ue), this.services.backendConnector.reload(e, t, (e => {
                            r.resolve(), n(e)
                        })), r
                    }
                    use(e) {
                        if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                        if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                        return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && W.addPostProcessor(e), "formatter" === e.type && (this.modules.formatter = e), "3rdParty" === e.type && this.modules.external.push(e), this
                    }
                    setResolvedLanguage(e) {
                        if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1))
                            for (let e = 0; e < this.languages.length; e++) {
                                const t = this.languages[e];
                                if (!(["cimode", "dev"].indexOf(t) > -1) && this.store.hasLanguageSomeTranslations(t)) {
                                    this.resolvedLanguage = t;
                                    break
                                }
                            }
                    }
                    changeLanguage(e, t) {
                        var n = this;
                        this.isLanguageChangingTo = e;
                        const r = z();
                        this.emit("languageChanging", e);
                        const a = e => {
                                this.language = e, this.languages = this.services.languageUtils.toResolveHierarchy(e), this.resolvedLanguage = void 0, this.setResolvedLanguage(e)
                            },
                            o = (e, o) => {
                                o ? (a(o), this.translator.changeLanguage(o), this.isLanguageChangingTo = void 0, this.emit("languageChanged", o), this.logger.log("languageChanged", o)) : this.isLanguageChangingTo = void 0, r.resolve((function() {
                                    return n.t(...arguments)
                                })), t && t(e, (function() {
                                    return n.t(...arguments)
                                }))
                            },
                            i = t => {
                                e || t || !this.services.languageDetector || (t = []);
                                const n = "string" == typeof t ? t : this.services.languageUtils.getBestMatchFromCodes(t);
                                n && (this.language || a(n), this.translator.language || this.translator.changeLanguage(n), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(n)), this.loadResources(n, (e => {
                                    o(e, n)
                                }))
                            };
                        return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? 0 === this.services.languageDetector.detect.length ? this.services.languageDetector.detect().then(i) : this.services.languageDetector.detect(i) : i(e) : i(this.services.languageDetector.detect()), r
                    }
                    getFixedT(e, t, n) {
                        var r = this;
                        const a = function(e, t) {
                            let o;
                            if ("object" != typeof t) {
                                for (var i = arguments.length, l = new Array(i > 2 ? i - 2 : 0), s = 2; s < i; s++) l[s - 2] = arguments[s];
                                o = r.options.overloadTranslationOptionHandler([e, t].concat(l))
                            } else o = { ...t
                            };
                            o.lng = o.lng || a.lng, o.lngs = o.lngs || a.lngs, o.ns = o.ns || a.ns, "" !== o.keyPrefix && (o.keyPrefix = o.keyPrefix || n || a.keyPrefix);
                            const u = r.options.keySeparator || ".";
                            let c;
                            return c = o.keyPrefix && Array.isArray(e) ? e.map((e => `${o.keyPrefix}${u}${e}`)) : o.keyPrefix ? `${o.keyPrefix}${u}${e}` : e, r.t(c, o)
                        };
                        return "string" == typeof e ? a.lng = e : a.lngs = e, a.ns = t, a.keyPrefix = n, a
                    }
                    t() {
                        return this.translator && this.translator.translate(...arguments)
                    }
                    exists() {
                        return this.translator && this.translator.exists(...arguments)
                    }
                    setDefaultNamespace(e) {
                        this.options.defaultNS = e
                    }
                    hasLoadedNamespace(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
                        if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
                        const n = t.lng || this.resolvedLanguage || this.languages[0],
                            r = !!this.options && this.options.fallbackLng,
                            a = this.languages[this.languages.length - 1];
                        if ("cimode" === n.toLowerCase()) return !0;
                        const o = (e, t) => {
                            const n = this.services.backendConnector.state[`${e}|${t}`];
                            return -1 === n || 2 === n
                        };
                        if (t.precheck) {
                            const e = t.precheck(this, o);
                            if (void 0 !== e) return e
                        }
                        return !!this.hasResourceBundle(n, e) || (!(this.services.backendConnector.backend && (!this.options.resources || this.options.partialBundledLanguages)) || !(!o(n, e) || r && !o(a, e)))
                    }
                    loadNamespaces(e, t) {
                        const n = z();
                        return this.options.ns ? ("string" == typeof e && (e = [e]), e.forEach((e => {
                            this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                        })), this.loadResources((e => {
                            n.resolve(), t && t(e)
                        })), n) : (t && t(), Promise.resolve())
                    }
                    loadLanguages(e, t) {
                        const n = z();
                        "string" == typeof e && (e = [e]);
                        const r = this.options.preload || [],
                            a = e.filter((e => r.indexOf(e) < 0 && this.services.languageUtils.isSupportedCode(e)));
                        return a.length ? (this.options.preload = r.concat(a), this.loadResources((e => {
                            n.resolve(), t && t(e)
                        })), n) : (t && t(), Promise.resolve())
                    }
                    dir(e) {
                        if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e) return "rtl";
                        const t = this.services && this.services.languageUtils || new Y(le());
                        return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf(t.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
                    }
                    static createInstance() {
                        return new ce(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, arguments.length > 1 ? arguments[1] : void 0)
                    }
                    cloneInstance() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ue;
                        const n = e.forkResourceStore;
                        n && delete e.forkResourceStore;
                        const r = { ...this.options,
                                ...e,
                                isClone: !0
                            },
                            a = new ce(r);
                        void 0 === e.debug && void 0 === e.prefix || (a.logger = a.logger.clone(e));
                        return ["store", "services", "language"].forEach((e => {
                            a[e] = this[e]
                        })), a.services = { ...this.services
                        }, a.services.utils = {
                            hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
                        }, n && (a.store = new B(this.store.data, r), a.services.resourceStore = a.store), a.translator = new K(a.services, r), a.translator.on("*", (function(e) {
                            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                            a.emit(e, ...n)
                        })), a.init(r, t), a.translator.options = r, a.translator.backendConnector.services.utils = {
                            hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
                        }, a
                    }
                    toJSON() {
                        return {
                            options: this.options,
                            store: this.store,
                            language: this.language,
                            languages: this.languages,
                            resolvedLanguage: this.resolvedLanguage
                        }
                    }
                }
                const de = ce.createInstance();
                de.createInstance = ce.createInstance;
                de.createInstance, de.dir, de.init, de.loadResources, de.reloadResources, de.use, de.changeLanguage, de.getFixedT, de.t, de.exists, de.setDefaultNamespace, de.hasLoadedNamespace, de.loadNamespaces, de.loadLanguages;
                var fe = n(2558);

                function pe(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function he(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? pe(Object(n), !0).forEach((function(t) {
                            (0, r.A)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pe(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var me = function(e) {
                    var t = e.content,
                        n = e.dynamicTemplates,
                        r = e.attachItemId,
                        a = e.model,
                        o = (0, l.Ez)().staticTemplates,
                        i = he(he({}, n), o);
                    if (null != t && t.layout) return (0, y.jsx)(fe.je, {
                        plugins: [new fe.b8, new fe.JK, new fe.$w, new fe._A({
                            templates: i
                        })],
                        content: t,
                        models: a ? [a] : void 0,
                        attachItemId: r
                    })
                };

                function ge(e, t) {
                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!n) {
                        if (Array.isArray(e) || (n = function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return ve(e, t);
                                    var n = {}.toString.call(e).slice(8, -1);
                                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ve(e, t) : void 0
                                }
                            }(e)) || t && e && "number" == typeof e.length) {
                            n && (e = n);
                            var r = 0,
                                a = function() {};
                            return {
                                s: a,
                                n: function() {
                                    return r >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[r++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: a
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var o, i = !0,
                        l = !1;
                    return {
                        s: function() {
                            n = n.call(e)
                        },
                        n: function() {
                            var e = n.next();
                            return i = e.done, e
                        },
                        e: function(e) {
                            l = !0, o = e
                        },
                        f: function() {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                    }
                }

                function ve(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r
                }
                var ye = function() {
                        var e = (0, g.useState)(null),
                            t = (0, m.A)(e, 2),
                            n = t[0],
                            r = t[1],
                            a = (0, g.useState)(null),
                            o = (0, m.A)(a, 2),
                            i = o[0],
                            l = o[1],
                            s = (0, g.useState)(void 0),
                            u = (0, m.A)(s, 2),
                            c = u[0],
                            d = u[1];
                        return (0, g.useEffect)((function() {
                            var e = function(e) {
                                    var t, n = e.data;
                                    (void 0 !== n.content && r(n.content), void 0 !== n.model && l(n.model), void 0 !== n.dynamicTemplates) && d(null !== (t = n.dynamicTemplates) && void 0 !== t ? t : void 0)
                                },
                                t = function(e) {
                                    var t = document.elementsFromPoint(e.pageX - document.documentElement.scrollLeft, e.pageY - document.documentElement.scrollTop),
                                        n = [];
                                    if (t.length) {
                                        var r, a = be(t[0].childNodes, e.pageX, e.pageY);
                                        if (a && null !== (r = a.previousSibling) && void 0 !== r && null !== (r = r.dataset) && void 0 !== r && r.textId) {
                                            var o, i = null === (o = a.previousSibling) || void 0 === o || null === (o = o.dataset) || void 0 === o ? void 0 : o.textId;
                                            i && n.push(i);
                                            var l = xe(a);
                                            l && n.push(l)
                                        }
                                    }
                                    var s, u = ge(t);
                                    try {
                                        for (u.s(); !(s = u.n()).done;) {
                                            var c, d = s.value,
                                                f = null === (c = d.dataset) || void 0 === c ? void 0 : c.id;
                                            f && n.push(f);
                                            var p = xe(d);
                                            p && n.push(p)
                                        }
                                    } catch (e) {
                                        u.e(e)
                                    } finally {
                                        u.f()
                                    }
                                    window.parent.postMessage({
                                        itemIds: n
                                    }, "*")
                                };
                            return window.addEventListener("message", e), window.addEventListener("click", t, !0), window.parent.postMessage({
                                    ping: !0
                                }, "*"),
                                function() {
                                    window.removeEventListener("message", e), window.removeEventListener("click", t, !0)
                                }
                        }), []), n ? (0, y.jsx)(me, {
                            content: n,
                            dynamicTemplates: c,
                            model: i || void 0,
                            attachItemId: !0
                        }) : null
                    },
                    be = function(e, t, n) {
                        for (var r, a = 0; r = e[a++];)
                            if (3 === r.nodeType) {
                                var o = document.createRange();
                                o.selectNode(r);
                                for (var i, l = o.getClientRects(), s = 0; i = l[s++];)
                                    if (t > i.left && t < i.right && n > i.top && n < i.bottom) return r
                            }
                    },
                    xe = function(e) {
                        for (var t = e; t;) {
                            var n, r, a = null === (n = t.dataset) || void 0 === n ? void 0 : n.tid;
                            if (a) return a;
                            if (null !== (r = t.dataset) && void 0 !== r && r.tidEnd) return;
                            t = t.previousSibling
                        }
                    },
                    we = n(3912),
                    ke = n(5226),
                    Se = n(5779),
                    je = n(5462),
                    Oe = n(2407),
                    Ne = n(2060);

                function Ee(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }
                var Pe = function() {
                        var e = (0, o.Bd)().t;
                        return (0, y.jsx)("footer", {
                            className: "flex justify-center bg-black mt-[40px]",
                            children: (0, y.jsxs)("div", {
                                className: "max-w-full w-[1600px] px-[24px] py-[35px]",
                                children: [(0, y.jsxs)("div", {
                                    className: "flex",
                                    children: [(0, y.jsxs)("div", {
                                        className: "flex flex-col flex-1",
                                        children: [(0, y.jsxs)("a", {
                                            className: "flex items-center text-white mb-[20px] text-[18px] md:text-[22px]  font-bold uppercase tracking-[1.4px]",
                                            target: "_blank",
                                            href: "https://www.linkedin.com/company/adidas/",
                                            rel: "noreferrer",
                                            children: [e("follow_us_on"), (0, y.jsx)("svg", {
                                                className: "w-[24px] h-[24px] ml-[15px] fill-white",
                                                children: (0, y.jsx)("use", {
                                                    xlinkHref: "public/icons/icons.svg#cw-linkedin"
                                                })
                                            })]
                                        }), (0, y.jsx)("a", {
                                            href: "social-space",
                                            className: "text-white text-[12px] hover:underline",
                                            children: e("see_all_social_media")
                                        })]
                                    }), (0, y.jsx)("div", {
                                        className: "hidden md:flex flex-col flex-1 justify-end",
                                        children: (0, y.jsxs)("a", {
                                            className: "text-white text-[12px] hover:underline",
                                            href: "https://news.adidas.com/",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: [(0, y.jsx)("svg", {
                                                className: "w-[50px] h-[50px] fill-white",
                                                children: (0, y.jsx)("use", {
                                                    xlinkHref: "public/icons/icons.svg#logo"
                                                })
                                            }), e("more_about_adidas")]
                                        })
                                    })]
                                }), (0, y.jsx)("hr", {
                                    className: "bg-[rgb(118, 118, 119)] my-[20px] md:my-[30px]"
                                }), (0, y.jsx)(we.M, {
                                    loadingFallback: (0, y.jsx)(Ne.e, {}),
                                    errorFallback: function(e) {
                                        return (0, y.jsx)(Se.x, function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {};
                                                t % 2 ? Ee(Object(n), !0).forEach((function(t) {
                                                    (0, r.A)(e, t, n[t])
                                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ee(Object(n)).forEach((function(t) {
                                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                                }))
                                            }
                                            return e
                                        }({}, e))
                                    },
                                    children: (0, y.jsx)(Ce, {})
                                })]
                            })
                        })
                    },
                    Ce = function() {
                        var e = (0, je.Qd)({
                                tag: "footer"
                            }).pages,
                            t = (0, je.jc)().locales,
                            n = (0, g.useState)(!1),
                            r = (0, m.A)(n, 2),
                            a = r[0],
                            o = r[1];
                        return (0, y.jsxs)("div", {
                            className: "grid grid-cols-2 md:flex md:flex-wrap gap-x-[40px] gap-y-[15px]",
                            children: [e.map((function(e) {
                                return (0, y.jsx)("div", {
                                    children: (0, y.jsx)("a", {
                                        className: "text-white text-[12px] hover:underline",
                                        href: e.url,
                                        children: e.title
                                    })
                                }, e.id)
                            })), (0, y.jsxs)("button", {
                                className: "flex items-center md:mt-[2px] whitespace-nowrap text-white",
                                onClick: function() {
                                    return o(!0)
                                },
                                children: [(0, y.jsx)("svg", {
                                    className: "w-[20px] h-[20px]",
                                    children: (0, y.jsx)("use", {
                                        xlinkHref: "public/icons/icons.svg#".concat(t[0].locale)
                                    })
                                }), (0, y.jsx)("span", {
                                    className: "text-[12px] hover:underline mx-[10px]",
                                    children: t[0].name
                                }), (0, y.jsx)("svg", {
                                    className: "w-[24px] h-[24px]",
                                    children: (0, y.jsx)("use", {
                                        xlinkHref: "public/icons/icons.svg#arrow-down"
                                    })
                                })]
                            }), a && (0, y.jsx)(Oe.f, {
                                locales: t,
                                onClose: function() {
                                    return o(!1)
                                }
                            })]
                        })
                    },
                    ze = n(1675),
                    _e = n(6335);

                function Te(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }
                var Le = 1200,
                    Ie = 630,
                    Ae = "adidas Group",
                    Me = "Through sport, we have the power to change lives.",
                    Re = "https://res.cloudinary.com/confirmed-web/image/upload/v1706442082/adidas-group/media/pictures-videos/adidas_world_of_sports_pgc02z.jpg",
                    De = "https://res.cloudinary.com/confirmed-web/image/upload/c_lfill,w_600/v1706002867/adidas-group/people-and-culture/where_we_play_header_dyistg.jpg";

                function Fe() {
                    var e = (0, O.rd)().params["*"],
                        t = e.startsWith("/magazine"),
                        n = (0, g.useCallback)((function() {
                            if (!window.location.hash) {
                                if (e.startsWith("/magazine/")) {
                                    var t = document.getElementById("magazine-carousel");
                                    if (t) {
                                        var n, r = t.getBoundingClientRect();
                                        return ((null === (n = window.document.scrollingElement) || void 0 === n ? void 0 : n.scrollTop) || 0) + r.top + r.height + 1
                                    }
                                }
                                return 0
                            }
                        }), [e]);
                    return (0, je.yE)(e, void 0, n), (0, y.jsx)("div", {
                        className: t ? "min-h-[100vh]" : "",
                        children: (0, y.jsx)(we.M, {
                            loadingFallback: (0, y.jsx)(Ne.e, {
                                delayLoader: !0
                            }),
                            errorFallback: function(e) {
                                return (0, y.jsx)(Se.x, function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? Te(Object(n), !0).forEach((function(t) {
                                            (0, r.A)(e, t, n[t])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Te(Object(n)).forEach((function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                        }))
                                    }
                                    return e
                                }({}, e))
                            },
                            children: (0, y.jsx)($e, {
                                url: e,
                                isMagazine: t
                            })
                        }, e)
                    })
                }

                function $e(e) {
                    var t, n, r = e.url,
                        a = e.isMagazine,
                        o = (0, je.j9)(r).page,
                        i = (0, l.Ez)().origin,
                        s = (0, O.rd)().basepath,
                        u = o.title ? "".concat(o.title, " - ").concat(Ae) : Ae,
                        c = o.description ? o.description : Me,
                        d = a ? De : Re,
                        f = (0, _e.Sh)((0, _e.wu)(null === (t = o.meta) || void 0 === t ? void 0 : t.image) ? null === (n = o.meta) || void 0 === n ? void 0 : n.image : d, Le, Ie);
                    return (0, y.jsxs)(y.Fragment, {
                        children: [(0, y.jsxs)(b, {
                            children: [(0, y.jsx)("title", {
                                children: u
                            }), (0, y.jsx)("meta", {
                                name: "description",
                                content: c
                            }), o.keywords && (0, y.jsx)("meta", {
                                name: "keywords",
                                content: o.keywords
                            }), (0, y.jsx)("meta", {
                                property: "og:type",
                                content: "website"
                            }), (0, y.jsx)("meta", {
                                property: "og:url",
                                content: "".concat(i).concat(s).concat(r)
                            }), (0, y.jsx)("meta", {
                                name: "og:title",
                                content: u
                            }), (0, y.jsx)("meta", {
                                property: "og:description",
                                content: c
                            }), (0, y.jsx)("meta", {
                                property: "og:site_name",
                                content: "adidas"
                            }), f && (0, y.jsx)("meta", {
                                property: "og:image",
                                content: f
                            }), (0, y.jsx)("meta", {
                                name: "twitter:card",
                                content: "summary_large_image"
                            }), (0, y.jsx)("meta", {
                                property: "twitter:domain",
                                content: "adidas-group.com"
                            }), (0, y.jsx)("meta", {
                                name: "twitter:title",
                                content: u
                            }), (0, y.jsx)("meta", {
                                name: "twitter:description",
                                content: c
                            }), f && (0, y.jsx)("meta", {
                                property: "twitter:image",
                                content: f
                            }), (0, y.jsx)("script", {
                                type: "application/ld+json",
                                children: '{\n                    "@context": "https://schema.org",\n                    "@type": "Corporation",\n                    "image": "'.concat(d, '",\n                    "url": "').concat(i).concat(s, '",\n                    "logo": "').concat(i).concat(s, '/public/adidas-logo.svg",\n                    "name": "adidas Group",\n                    "description": "').concat(c, '",\n                    "telephone": "+49 9132 84 0",\n                    "address": {\n                        "@type": "PostalAddress",\n                        "streetAddress": "Adi-Dassler-Strasse 1",\n                        "addressLocality": "Herzogenaurach",\n                        "addressCountry": "DE",\n                        "addressRegion": "Bavaria",\n                        "postalCode": "91074"\n                    }\n                }')
                            })]
                        }), o.content && (0, y.jsx)(me, {
                            content: o.content,
                            model: {
                                page: o
                            },
                            dynamicTemplates: o.dynamicTemplates
                        })]
                    })
                }

                function He(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function Ue(e) {
                    var t = e.isAdmin;
                    return (0, y.jsxs)(y.Fragment, {
                        children: [(0, y.jsx)(b, {
                            priority: -1,
                            children: (0, y.jsx)("title", {
                                children: "adidas Group"
                            })
                        }), (0, y.jsxs)("div", {
                            className: "flex-1 flex w-full flex-col align-center self-center".concat(t ? " admin" : ""),
                            children: [!t && (0, y.jsx)(ze.DW, {}), (0, y.jsxs)("article", {
                                className: "flex-1 flex flex-col align-center",
                                children: [!t && (0, y.jsx)(O.dO, {
                                    children: (0, y.jsx)(O.qh, {
                                        path: "*",
                                        children: (0, y.jsx)(Fe, {})
                                    })
                                }), t && (0, y.jsx)(we.M, {
                                    loadingFallback: (0, y.jsx)(Ne.e, {}),
                                    errorFallback: function(e) {
                                        return (0, y.jsx)(Se.x, function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {};
                                                t % 2 ? He(Object(n), !0).forEach((function(t) {
                                                    (0, r.A)(e, t, n[t])
                                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : He(Object(n)).forEach((function(t) {
                                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                                }))
                                            }
                                            return e
                                        }({}, e))
                                    },
                                    children: (0, y.jsx)(ye, {})
                                })]
                            })]
                        }), !t && (0, y.jsxs)(y.Fragment, {
                            children: [(0, y.jsx)(Pe, {}), (0, y.jsx)(ke.E, {})]
                        })]
                    })
                }

                function Ve(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function Be(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Ve(Object(n), !0).forEach((function(t) {
                            (0, r.A)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ve(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var We, Qe = g.lazy((function() {
                        return n.e(6115).then(n.bind(n, 2108))
                    })),
                    Ke = g.lazy((function() {
                        return n.e(259).then(n.bind(n, 1036))
                    })),
                    qe = g.lazy((function() {
                        return n.e(2922).then(n.bind(n, 233))
                    })),
                    Ye = g.lazy((function() {
                        return n.e(5134).then(n.bind(n, 4701))
                    })),
                    Ge = g.lazy((function() {
                        return n.e(5596).then(n.bind(n, 8675))
                    })),
                    Je = g.lazy((function() {
                        return n.e(6917).then(n.bind(n, 7966))
                    })),
                    Xe = g.lazy((function() {
                        return n.e(7338).then(n.bind(n, 2753))
                    })),
                    Ze = g.lazy((function() {
                        return n.e(2831).then(n.bind(n, 1176))
                    })),
                    et = g.lazy((function() {
                        return n.e(9754).then(n.bind(n, 6261))
                    })),
                    tt = g.lazy((function() {
                        return n.e(5604).then(n.bind(n, 4507))
                    })),
                    nt = g.lazy((function() {
                        return n.e(5258).then(n.bind(n, 6377))
                    })),
                    rt = g.lazy((function() {
                        return n.e(4039).then(n.bind(n, 3016))
                    })),
                    at = g.lazy((function() {
                        return n.e(5150).then(n.bind(n, 9397))
                    })),
                    ot = g.lazy((function() {
                        return n.e(5572).then(n.bind(n, 651))
                    })),
                    it = g.lazy((function() {
                        return n.e(8602).then(n.bind(n, 4113))
                    })),
                    lt = g.lazy((function() {
                        return n.e(3617).then(n.bind(n, 3234))
                    })),
                    st = g.lazy((function() {
                        return n.e(3627).then(n.bind(n, 2428))
                    })),
                    ut = g.lazy((function() {
                        return n.e(3917).then(n.bind(n, 1270))
                    })),
                    ct = g.lazy((function() {
                        return n.e(5361).then(n.bind(n, 3170))
                    })),
                    dt = g.lazy((function() {
                        return n.e(2640).then(n.bind(n, 9391))
                    })),
                    ft = g.lazy((function() {
                        return n.e(8447).then(n.bind(n, 2144))
                    })),
                    pt = g.lazy((function() {
                        return n.e(231).then(n.bind(n, 680))
                    })),
                    ht = g.lazy((function() {
                        return n.e(2272).then(n.bind(n, 2231))
                    })),
                    mt = g.lazy((function() {
                        return n.e(8472).then(n.bind(n, 2295))
                    })),
                    gt = g.lazy((function() {
                        return n.e(1830).then(n.bind(n, 6293))
                    })),
                    vt = g.lazy((function() {
                        return n.e(9228).then(n.bind(n, 5707))
                    })),
                    yt = g.lazy((function() {
                        return n.e(1913).then(n.bind(n, 8810))
                    })),
                    bt = g.lazy((function() {
                        return n.e(2942).then(n.bind(n, 9909))
                    })),
                    xt = g.lazy((function() {
                        return n.e(3389).then(n.bind(n, 8990))
                    })),
                    wt = g.lazy((function() {
                        return n.e(7105).then(n.bind(n, 3274))
                    })),
                    kt = g.lazy((function() {
                        return n.e(2156).then(n.bind(n, 3795))
                    })),
                    St = g.lazy((function() {
                        return n.e(44).then(n.bind(n, 9651))
                    })),
                    jt = g.lazy((function() {
                        return n.e(3650).then(n.bind(n, 3361))
                    })),
                    Ot = g.lazy((function() {
                        return n.e(2141).then(n.bind(n, 1870))
                    })),
                    Nt = g.lazy((function() {
                        return n.e(4866).then(n.bind(n, 1833))
                    })),
                    Et = g.lazy((function() {
                        return n.e(9104).then(n.bind(n, 1239))
                    })),
                    Pt = g.lazy((function() {
                        return n.e(8879).then(n.bind(n, 2400))
                    })),
                    Ct = g.lazy((function() {
                        return n.e(6739).then(n.bind(n, 8572))
                    })),
                    zt = g.lazy((function() {
                        return n.e(5957).then(n.bind(n, 2310))
                    })),
                    _t = g.lazy((function() {
                        return n.e(1462).then(n.bind(n, 4693))
                    })),
                    Tt = g.lazy((function() {
                        return n.e(9735).then(n.bind(n, 6816))
                    })),
                    Lt = g.lazy((function() {
                        return n.e(2375).then(n.bind(n, 1488))
                    })),
                    It = g.lazy((function() {
                        return n.e(8497).then(n.bind(n, 6938))
                    })),
                    At = g.lazy((function() {
                        return n.e(9343).then(n.bind(n, 2160))
                    })),
                    Mt = g.lazy((function() {
                        return n.e(3006).then(n.bind(n, 9645))
                    })),
                    Rt = g.lazy((function() {
                        return n.e(7872).then(n.bind(n, 7911))
                    })),
                    Dt = g.lazy((function() {
                        return n.e(2481).then(n.bind(n, 8002))
                    })),
                    Ft = g.lazy((function() {
                        return n.e(6708).then(n.bind(n, 8075))
                    })),
                    $t = g.lazy((function() {
                        return n.e(9164).then(n.bind(n, 315))
                    })),
                    Ht = g.lazy((function() {
                        return n.e(5954).then(n.bind(n, 4777))
                    })),
                    Ut = g.lazy((function() {
                        return n.e(4564).then(n.bind(n, 3563))
                    })),
                    Vt = g.lazy((function() {
                        return n.e(1799).then(n.bind(n, 5064))
                    })),
                    Bt = g.lazy((function() {
                        return n.e(5153).then(n.bind(n, 9371))
                    })),
                    Wt = g.lazy((function() {
                        return n.e(5057).then(n.bind(n, 9810))
                    })),
                    Qt = g.lazy((function() {
                        return n.e(667).then(n.bind(n, 2724))
                    })),
                    Kt = g.lazy((function() {
                        return n.e(2626).then(n.bind(n, 896))
                    })),
                    qt = g.lazy((function() {
                        return n.e(7960).then(n.bind(n, 6279))
                    })),
                    Yt = g.lazy((function() {
                        return n.e(8619).then(n.bind(n, 8652))
                    })),
                    Gt = g.lazy((function() {
                        return n.e(3512).then(n.bind(n, 9935))
                    })),
                    Jt = g.lazy((function() {
                        return n.e(4148).then(n.bind(n, 9307))
                    })),
                    Xt = g.lazy((function() {
                        return n.e(7779).then(n.bind(n, 2860))
                    })),
                    Zt = g.lazy((function() {
                        return n.e(9371).then(n.bind(n, 1260))
                    })),
                    en = g.lazy((function() {
                        return n.e(870).then(n.bind(n, 9445))
                    })),
                    tn = g.lazy((function() {
                        return n.e(9827).then(n.bind(n, 5740))
                    })),
                    nn = g.lazy((function() {
                        return n.e(9642).then(n.bind(n, 5537))
                    })),
                    rn = g.lazy((function() {
                        return n.e(5481).then(n.bind(n, 2394))
                    })),
                    an = g.lazy((function() {
                        return n.e(4781).then(n.bind(n, 870))
                    })),
                    on = g.lazy((function() {
                        return n.e(1828).then(n.bind(n, 3875))
                    })),
                    ln = g.lazy((function() {
                        return n.e(7218).then(n.bind(n, 6185))
                    })),
                    sn = g.lazy((function() {
                        return n.e(5634).then(n.bind(n, 1161))
                    })),
                    un = g.lazy((function() {
                        return n.e(2862).then(n.bind(n, 7317))
                    }));

                function cn(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function dn(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? cn(Object(n), !0).forEach((function(t) {
                            (0, r.A)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cn(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var fn = JSON.parse(document.getElementById("__ICMS").innerText),
                    pn = fn.data,
                    hn = fn.isAdmin,
                    mn = fn.locale,
                    gn = fn.i18n,
                    vn = fn.origin,
                    yn = fn.environment;
                de.use(o.r9).init(dn(dn({
                    lng: mn
                }, gn), {}, {
                    interpolation: {
                        escapeValue: !1
                    }
                })).catch((function(e) {
                    console.error(e)
                }));
                var bn = null === (We = document.getElementsByTagName("base")[0]) || void 0 === We ? void 0 : We.getAttribute("href"),
                    xn = new h;
                window.addEventListener("dialog:change", (function() {
                    document.getElementsByTagName("dialog").length ? (document.documentElement.style.overflow = "hidden", document.documentElement.style.overflowY = "hidden") : (document.documentElement.style.overflow = "auto", document.documentElement.style.overflowY = "scroll")
                })), (0, a.c)(document.getElementById("root"), (0, y.jsx)(l.M9, {
                    data: pn,
                    defaultFetcher: xn,
                    getCookie: function(e) {
                        return i.J.getCookie(e)
                    },
                    staticTemplates: {
                        pageHeader: {
                            name: "Page Header",
                            modelSchema: {
                                location: "text",
                                locationPhoto: "photo",
                                hideImage: "boolean"
                            },
                            render: function(e) {
                                return (0, y.jsx)(ft, Be({}, e))
                            }
                        },
                        richtext: {
                            name: "Rich Text",
                            modelSchema: {
                                richtext: "richtext",
                                wideLayout: "boolean"
                            },
                            render: function(e) {
                                return (0, y.jsx)(bt, Be({}, e))
                            }
                        },
                        richtextImage: {
                            name: "Rich Text & Image",
                            modelSchema: {
                                title: "text",
                                image: "photo",
                                caption: "string",
                                richtext: "richtext",
                                wideLayout: "boolean"
                            },
                            render: function(e) {
                                return (0, y.jsx)(yt, Be({}, e))
                            }
                        },
                        html: {
                            name: "HTML",
                            group: "Other",
                            modelSchema: {
                                html: "textarea"
                            },
                            render: function(e) {
                                return (0, y.jsx)(at, Be({}, e))
                            }
                        },
                        notificationLink: {
                            name: "Notification Link",
                            group: "Other",
                            modelSchema: {
                                link: "string"
                            },
                            render: function(e) {
                                return (0, y.jsx)(dt, Be({}, e))
                            }
                        },
                        disclaimer: {
                            name: "Disclaimer",
                            group: "Other",
                            modelSchema: {
                                disclaimer: "richtext"
                            },
                            render: function(e) {
                                return (0, y.jsx)(Ge, Be({}, e))
                            }
                        },
                        link: {
                            name: "Link",
                            modelSchema: {
                                sectionTitle: "text",
                                linkText: "text",
                                isExternal: "boolean",
                                link: "text",
                                verticalLayout: "boolean"
                            },
                            render: function(e) {
                                return (0, y.jsx)(ut, Be({}, e))
                            }
                        },
                        youtube: {
                            name: "Youtube",
                            modelSchema: {
                                youtubeId: "text",
                                videoWidth: "number",
                                videoHeight: "number"
                            },
                            defaultModel: {
                                youtubeId: "bVRwzyELK5w?si=zbVlpGWQzX2uFw7_",
                                videoWidth: 560,
                                videoHeight: 315
                            },
                            render: function(e) {
                                return (0, y.jsx)(Et, Be({}, e))
                            }
                        },
                        heroCarousel: {
                            name: "Hero Carousel",
                            group: "Home",
                            modelSchema: {
                                entries: "heroCarousel"
                            },
                            render: function(e) {
                                return (0, y.jsx)(Ze, Be({}, e))
                            }
                        },
                        homePressReleases: {
                            name: "Home Press Releases",
                            group: "Home",
                            modelSchema: {
                                seeAllUrl: "string"
                            },
                            render: function(e) {
                                return (0, y.jsx)(rt, Be({}, e))
                            }
                        },
                        news: {
                            name: "News",
                            group: "News",
                            modelSchema: {
                                enableMonths: "boolean",
                                showUpcoming: "boolean",
                                enableOtherLocales: "boolean",
                                otherLocalesText: "string",
                                tags: "tags"
                            },
                            render: function(e) {
                                return (0, y.jsx)(mt, Be({}, e))
                            }
                        },
                        homeMediaCoverage: {
                            name: "Home Media Coverage",
                            group: "Home",
                            modelSchema: {
                                seeAllUrl: "string"
                            },
                            render: function(e) {
                                return (0, y.jsx)(nt, Be({}, e))
                            }
                        },
                        homeMagazine: {
                            name: "Home Magazine",
                            group: "Home",
                            modelSchema: {
                                seeAllUrl: "string",
                                title: "string"
                            },
                            render: function(e) {
                                return (0, y.jsx)(un, Be({}, e))
                            }
                        },
                        mediaCoverage: {
                            name: "Media Coverage",
                            group: "News",
                            render: function(e) {
                                return (0, y.jsx)(ct, Be({}, e))
                            }
                        },
                        homeJoinUs: {
                            name: "Home Join us",
                            group: "Home",
                            modelSchema: {
                                openPositions: "number",
                                locations: "number",
                                countries: "number"
                            },
                            defaultModel: {
                                openPositions: 1234,
                                locations: 321,
                                countries: 51
                            },
                            render: function(e) {
                                return (0, y.jsx)(tt, Be({}, e))
                            }
                        },
                        joinUs: {
                            name: "Join us",
                            render: function(e) {
                                return (0, y.jsx)(lt, Be({}, e))
                            }
                        },
                        keyFacts: {
                            name: "Key Facts",
                            group: "Other",
                            modelSchema: {
                                year: "number",
                                netSale: "string",
                                employees: "number",
                                moreLink: "string",
                                externalLink: "string"
                            },
                            defaultModel: {
                                year: 2022,
                                netSale: "€ 22,511 MILLION",
                                employees: 59258
                            },
                            render: function(e) {
                                return (0, y.jsx)(st, Be({}, e))
                            }
                        },
                        popularTemplate: {
                            name: "Popular",
                            modelSchema: {
                                popular: "popular"
                            },
                            render: function(e) {
                                return (0, y.jsx)(ht, Be({}, e))
                            }
                        },
                        sharePrice: {
                            name: "Share Price",
                            group: "Other",
                            render: function(e) {
                                return (0, y.jsx)(wt, Be({}, e))
                            }
                        },
                        investmentCalculator: {
                            name: "Investment Calculator",
                            group: "Other",
                            render: function(e) {
                                return (0, y.jsx)(it, Be({}, e))
                            }
                        },
                        resources: {
                            name: "Resources",
                            modelSchema: {
                                resourcesTitle: "string",
                                resources: "resources",
                                anchorId: "string"
                            },
                            render: function(e) {
                                return (0, y.jsx)(vt, Be({}, e))
                            }
                        },
                        related: {
                            name: "Related",
                            modelSchema: {
                                related: "related"
                            },
                            render: function(e) {
                                return (0, y.jsx)(gt, Be({}, e))
                            }
                        },
                        collapsible: {
                            name: "Collapsible",
                            modelSchema: {
                                collapsibleTitle: "text",
                                anchorId: "text"
                            },
                            defaultLayout: [{
                                id: "",
                                type: "template",
                                name: "Rich Text",
                                $templateId: "richtext"
                            }],
                            render: function(e) {
                                return (0, y.jsx)(Ke, Be({}, e))
                            }
                        },
                        socials: {
                            name: "Share on socials",
                            render: function(e) {
                                return (0, y.jsx)(kt, Be({}, e))
                            }
                        },
                        socialMedia: {
                            name: "Social Media",
                            modelSchema: {
                                sectionTitle: "text",
                                socialMediaTitle: "text",
                                blog: "text",
                                facebook: "text",
                                twitter: "text",
                                instagram: "text",
                                youtube: "text",
                                linkedin: "text"
                            },
                            render: function(e) {
                                return (0, y.jsx)(St, Be({}, e))
                            }
                        },
                        image: {
                            name: "Image",
                            modelSchema: {
                                src: "photo",
                                width: "number",
                                height: "number",
                                fullWidth: "boolean",
                                hideDownloadButton: "boolean",
                                caption: "textarea",
                                alt: "textarea"
                            },
                            defaultModel: {
                                fullWidth: !0
                            },
                            render: function(e) {
                                return (0, y.jsx)(ot, Be({}, e))
                            }
                        },
                        video: {
                            name: "Video",
                            modelSchema: {
                                src: "video",
                                width: "number",
                                height: "number",
                                fullWidth: "boolean"
                            },
                            defaultModel: {
                                fullWidth: !0
                            },
                            render: function(e) {
                                return (0, y.jsx)(Nt, Be({}, e))
                            }
                        },
                        photoGallery: {
                            name: "Photo Gallery",
                            modelSchema: {
                                galleryTitle: "text",
                                gallery: "gallery",
                                imageWidth: "number",
                                imageHeight: "number"
                            },
                            defaultModel: {
                                imageWidth: 500,
                                imageHeight: 500
                            },
                            render: function(e) {
                                return (0, y.jsx)(pt, Be({}, e))
                            }
                        },
                        teaser: {
                            name: "Teaser",
                            modelSchema: {
                                image: "photo",
                                title: "text",
                                description: "textarea",
                                buttonText: "text",
                                href: "link",
                                wideLayout: "boolean"
                            },
                            render: function(e) {
                                return (0, y.jsx)(Ot, Be({}, e))
                            }
                        },
                        employee: {
                            name: "Employee",
                            group: "Other",
                            modelSchema: {
                                name: "text",
                                jobTitle: "text",
                                profession: "textarea",
                                employeeRepresentative: "boolean",
                                born: "number",
                                nationality: "text",
                                photo: "photo",
                                cv: "file",
                                mandates: "richtext"
                            },
                            render: function(e) {
                                return (0, y.jsx)(Je, Be({}, e))
                            }
                        },
                        address: {
                            name: "Address",
                            group: "Other",
                            modelSchema: {
                                title: "text",
                                address: "textarea",
                                phone: "text",
                                fax: "text",
                                picture: "photo",
                                email: "text",
                                emailSubject: "text",
                                sendEmailText: "text",
                                emailDialogButtonText: "text",
                                emailRichText: "richtext"
                            },
                            render: function(e) {
                                return (0, y.jsx)(Qe, Be({}, e))
                            }
                        },
                        tab: {
                            name: "Tab",
                            group: "Other",
                            modelSchema: {
                                tabTitle: "text",
                                isDisabled: "boolean",
                                increaseTextSize: "boolean",
                                enableAnchorMode: "boolean",
                                wideLayout: "boolean"
                            },
                            render: function(e) {
                                return (0, y.jsx)(jt, Be({}, e))
                            }
                        },
                        contacts: {
                            name: "Contacts",
                            group: "Other",
                            modelSchema: {
                                contacts: "contacts",
                                wideLayout: "boolean"
                            },
                            render: function(e) {
                                return (0, y.jsx)(Ye, Be({}, e))
                            }
                        },
                        quote: {
                            name: "Quote",
                            group: "Other",
                            modelSchema: {
                                image: "photo",
                                text: "textarea",
                                author: "string",
                                yellowBackground: "boolean"
                            },
                            render: function(e) {
                                return (0, y.jsx)(Pt, Be({}, e))
                            }
                        },
                        cookies: {
                            name: "Cookies",
                            group: "Other",
                            modelSchema: {
                                noJavascriptMessage: "text",
                                marketingCookiesTitle: "text",
                                marketingCookies: "cookies",
                                analyticsCookiesTitle: "text",
                                analyticsCookies: "cookies",
                                requiredCookiesTitle: "text",
                                requiredCookies: "cookies"
                            },
                            render: function(e) {
                                return (0, y.jsx)(qe, Be({}, e))
                            }
                        },
                        facts: {
                            name: "Facts",
                            group: "Other",
                            modelSchema: {
                                title: "title",
                                facts: "facts"
                            },
                            defaultModel: {
                                title: "Key Facts"
                            },
                            render: function(e) {
                                return (0, y.jsx)(Xe, Be({}, e))
                            }
                        },
                        magazine: {
                            name: "Magazine",
                            group: "Magazine",
                            modelSchema: {
                                magazine: "magazine"
                            },
                            render: function(e) {
                                return (0, y.jsx)(Ct, Be({}, e))
                            }
                        },
                        magazineSpotlight: {
                            name: "Magazine Spotlight",
                            group: "Magazine",
                            modelSchema: {
                                magazineSpotlight: "magazineSpotlight"
                            },
                            render: function(e) {
                                return (0, y.jsx)(It, Be({}, e))
                            }
                        },
                        magazineTeaser: {
                            name: "Magazine Teaser",
                            group: "Magazine",
                            modelSchema: {
                                image: "photo",
                                title: "text",
                                subtitle: "text",
                                description: "textarea",
                                buttonText: "text",
                                href: "link",
                                smallLayout: "boolean"
                            },
                            render: function(e) {
                                return (0, y.jsx)(At, Be({}, e))
                            }
                        },
                        magazineRecent: {
                            name: "Magazine Recent",
                            group: "Magazine",
                            render: function(e) {
                                return (0, y.jsx)(Mt, Be({}, e))
                            }
                        },
                        magazineRelated: {
                            name: "Magazine Related",
                            group: "Magazine",
                            modelSchema: {
                                magazineRelated: "magazineRelated"
                            },
                            render: function(e) {
                                return (0, y.jsx)(Rt, Be({}, e))
                            }
                        },
                        magazineSeries: {
                            name: "Magazine Series",
                            group: "Magazine",
                            modelSchema: {
                                magazineSeries: "magazineSeries"
                            },
                            render: function(e) {
                                return (0, y.jsx)(Ft, Be({}, e))
                            }
                        },
                        magazineHeader: {
                            name: "Magazine Header",
                            group: "Magazine",
                            modelSchema: {
                                authorPhoto: "photo",
                                authorPosition: "text",
                                hideAsset: "boolean",
                                wideLayout: "boolean"
                            },
                            render: function(e) {
                                return (0, y.jsx)($t, Be({}, e))
                            }
                        },
                        magazinerichtext: {
                            name: "Magazine Rich Text",
                            group: "Magazine",
                            modelSchema: {
                                magazinerichtext: "magazinerichtext",
                                wideLayout: "boolean"
                            },
                            render: function(e) {
                                return (0, y.jsx)(qt, Be({}, e))
                            }
                        },
                        magazineRichtextX: {
                            name: "Magazine Rich Text & X Post",
                            group: "Magazine",
                            modelSchema: {
                                title: "text",
                                xUrl: "string",
                                richtext: "magazinerichtext",
                                wideLayout: "boolean"
                            },
                            render: function(e) {
                                return (0, y.jsx)(Ut, Be({}, e))
                            }
                        },
                        magazineRichtextInstagram: {
                            name: "Magazine Rich Text & Instagram Post",
                            group: "Magazine",
                            modelSchema: {
                                title: "text",
                                instagramUrl: "string",
                                richtext: "magazinerichtext",
                                wideLayout: "boolean"
                            },
                            render: function(e) {
                                return (0, y.jsx)(Gt, Be({}, e))
                            }
                        },
                        magazineRichtextImage: {
                            name: "Magazine Rich Text & Image",
                            group: "Magazine",
                            modelSchema: {
                                title: "text",
                                image: "photo",
                                caption: "string",
                                richtext: "magazinerichtext",
                                wideLayout: "boolean"
                            },
                            render: function(e) {
                                return (0, y.jsx)(Yt, Be({}, e))
                            }
                        },
                        magazineLinks: {
                            name: "Magazine Quick Links & Latest News",
                            group: "Magazine",
                            modelSchema: {
                                magazineLinks: "magazineLinks"
                            },
                            render: function(e) {
                                return (0, y.jsx)(Ht, Be({}, e))
                            }
                        },
                        magazineGallery: {
                            name: "Magazine Gallery",
                            group: "Magazine",
                            modelSchema: {
                                portraitAsset: "photo",
                                portraitAssetAlt: "text",
                                landscapeAsset: "photo",
                                landscapeAssetAlt: "text"
                            },
                            render: function(e) {
                                return (0, y.jsx)(Vt, Be({}, e))
                            }
                        },
                        magazineAudio: {
                            name: "Magazine Audio",
                            group: "Magazine",
                            modelSchema: {
                                title: "text",
                                subTitle: "text",
                                src: "file"
                            },
                            render: function(e) {
                                return (0, y.jsx)(Lt, Be({}, e))
                            }
                        },
                        magazineVideoArticles: {
                            name: "Magazine Video Articles",
                            group: "Magazine",
                            modelSchema: {
                                title: "text",
                                videos: "magazineVideos"
                            },
                            render: function(e) {
                                return (0, y.jsx)(Bt, Be({}, e))
                            }
                        },
                        magazineXLink: {
                            name: "Magazine X Link",
                            group: "Magazine",
                            modelSchema: {
                                photo: "photo",
                                text: "string",
                                link: "link",
                                xUrl: "string"
                            },
                            render: function(e) {
                                return (0, y.jsx)(Dt, Be({}, e))
                            }
                        },
                        magazineQuote: {
                            name: "Magazine Quote",
                            group: "Magazine",
                            modelSchema: {
                                text: "textarea",
                                author: "text",
                                authorDescription: "text"
                            },
                            render: function(e) {
                                return (0, y.jsx)(Wt, Be({}, e))
                            }
                        },
                        magazineArticleList: {
                            name: "Magazine Article List",
                            group: "Magazine",
                            modelSchema: {
                                tag: "text",
                                description: "textarea",
                                quote: "textarea",
                                author: "text",
                                authorDescription: "text"
                            },
                            render: function(e) {
                                return (0, y.jsx)(Qt, Be({}, e))
                            }
                        },
                        magazineSocial: {
                            name: "Magazine Social",
                            group: "Magazine",
                            modelSchema: {
                                streamId: "text",
                                sectionTitle: "text",
                                link: "text",
                                linkText: "text"
                            },
                            render: function(e) {
                                return (0, y.jsx)(Kt, Be({}, e))
                            }
                        },
                        overviewFinancialCalendar: {
                            name: "Overview Financial Calendar",
                            group: "News",
                            modelSchema: {
                                image: "photo",
                                seeAllUrl: "string"
                            },
                            render: function(e) {
                                return (0, y.jsx)(zt, Be({}, e))
                            }
                        },
                        siteMap: {
                            name: "Site Map",
                            render: function(e) {
                                return (0, y.jsx)(_t, Be({}, e))
                            }
                        },
                        search: {
                            name: "Search",
                            modelSchema: {
                                searchTags: "tags"
                            },
                            render: function(e) {
                                return (0, y.jsx)(xt, Be({}, e))
                            }
                        },
                        stockBanner: {
                            name: "Stock Banner",
                            group: "Home",
                            modelSchema: {
                                sharePriceUrl: "text"
                            },
                            render: function(e) {
                                return (0, y.jsx)(Tt, Be({}, e))
                            }
                        },
                        historyTimeline: {
                            name: "History Timeline",
                            group: "History",
                            render: function(e) {
                                return (0, y.jsx)(et, Be({}, e))
                            }
                        },
                        historyMastHead: {
                            name: "History Master Head",
                            group: "History",
                            modelSchema: {
                                backgroundColor: "text",
                                textColor: "text",
                                gallery: "gallery",
                                galleryInterval: "number",
                                title: "text",
                                description: "textarea"
                            },
                            render: function(e) {
                                return (0, y.jsx)(Xt, Be({}, e))
                            }
                        },
                        historySection: {
                            name: "History Section",
                            group: "History",
                            modelSchema: {
                                textColor: "text",
                                backgroundColor: "text",
                                backgroundImage: "photo",
                                yearAnchorText: "text",
                                isLastSection: "boolean",
                                disableBottomSpace: "boolean"
                            },
                            render: function(e) {
                                return (0, y.jsx)(Jt, Be({}, e))
                            }
                        },
                        historyYears: {
                            name: "History Years",
                            group: "History",
                            modelSchema: {
                                yearText: "text",
                                yearTextColor: "text",
                                twoYearVariant: "boolean",
                                isPlural: "boolean"
                            },
                            render: function(e) {
                                return (0, y.jsx)(Zt, Be({}, e))
                            }
                        },
                        historyText: {
                            name: "History Text",
                            group: "History",
                            modelSchema: {
                                title: "text",
                                description: "richtext",
                                image: "photo",
                                imageWidth: "number",
                                imageHeight: "number",
                                imageColumnPercentage: "number",
                                textLeft: "boolean",
                                reverseWrapOrder: "boolean",
                                blendingModeMultiply: "boolean"
                            },
                            render: function(e) {
                                return (0, y.jsx)(en, Be({}, e))
                            }
                        },
                        historyGallery: {
                            name: "History Gallery",
                            group: "History",
                            modelSchema: {
                                gallery: "gallery",
                                galleryImageWidth: "number",
                                galleryImageHeight: "number"
                            },
                            defaultModel: {
                                galleryImageWidth: 500,
                                galleryImageHeight: 500
                            },
                            render: function(e) {
                                return (0, y.jsx)(tn, Be({}, e))
                            }
                        },
                        historyImage: {
                            name: "History Image",
                            group: "History",
                            modelSchema: {
                                src: "photo",
                                imageWidth: "number",
                                imageHeight: "number",
                                backgroundSrc: "photo",
                                imageCaption: "textarea"
                            },
                            defaultModel: {
                                imageWidth: 500,
                                imageHeight: 500
                            },
                            render: function(e) {
                                return (0, y.jsx)(nn, Be({}, e))
                            }
                        },
                        historySingleImage: {
                            name: "History Single Image",
                            group: "History",
                            modelSchema: {
                                src: "photo",
                                imageWidth: "number",
                                imageHeight: "number",
                                imageCaption: "textarea"
                            },
                            defaultModel: {
                                imageWidth: 1600,
                                imageHeight: 667
                            },
                            render: function(e) {
                                return (0, y.jsx)(sn, Be({}, e))
                            }
                        },
                        historyQuote: {
                            name: "History Quote",
                            group: "History",
                            modelSchema: {
                                src: "photo",
                                quoteText: "textarea",
                                authorText: "text",
                                backgroundColor: "text",
                                textColor: "text"
                            },
                            render: function(e) {
                                return (0, y.jsx)(an, Be({}, e))
                            }
                        },
                        historySeparator: {
                            name: "History Separator",
                            group: "History",
                            modelSchema: {
                                color: "text",
                                marginTop: "boolean"
                            },
                            render: function(e) {
                                return (0, y.jsx)(on, Be({}, e))
                            }
                        },
                        historyYoutube: {
                            name: "History Youtube",
                            group: "History",
                            modelSchema: {
                                youtubeId: "text",
                                videoWidth: "number",
                                videoHeight: "number"
                            },
                            defaultModel: {
                                youtubeId: "FzaS0V_FCrI",
                                videoWidth: 832,
                                videoHeight: 468
                            },
                            render: function(e) {
                                return (0, y.jsx)(ln, Be({}, e))
                            }
                        },
                        historyProductCarousel: {
                            name: "History Product Carousel",
                            group: "History",
                            modelSchema: {
                                products: "productGallery",
                                bottomTextColor: "string",
                                downloadButtonColor: "string",
                                dotsColor: "string",
                                activeDotColor: "string",
                                gradientFromColor: "string",
                                gradientToColor: "string"
                            },
                            render: function(e) {
                                return (0, y.jsx)(rn, Be({}, e))
                            }
                        }
                    },
                    locale: mn,
                    origin: vn,
                    environment: yn,
                    children: (0, y.jsx)(w, {
                        children: (0, y.jsx)(O.DO, {
                            basepath: bn,
                            children: (0, y.jsx)(Ue, {
                                isAdmin: hn
                            })
                        })
                    })
                }))
            },
            2470: (e, t, n) => {
                "use strict";
                n.d(t, {
                    U: () => a
                });
                var r = n(1085),
                    a = function(e) {
                        var t = e.onClick,
                            n = e.onMouseDown,
                            a = e.onTouchStart,
                            o = e.isRight,
                            i = e.hideOnSmallView;
                        return (0, r.jsx)("div", {
                            className: "".concat(i ? "hidden md:block" : "", " cursor-pointer absolute top-1/2 w-[36px] h-[36px] text-black bg-white border border-black translate-y-[-50%] z-2 hover:bg-black hover:text-white ").concat(o ? "right-[16px]" : "left-[16px]"),
                            onClick: t,
                            onMouseDown: n,
                            onTouchStart: a,
                            children: (0, r.jsx)("svg", {
                                className: "fill-current w-[60%] h-[60%] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]",
                                children: (0, r.jsx)("use", {
                                    xlinkHref: "public/icons/icons.svg#arrow-".concat(o ? "right" : "left")
                                })
                            })
                        })
                    }
            },
            1429: (e, t, n) => {
                "use strict";
                n.d(t, {
                    $: () => o,
                    y: () => a
                });
                var r = n(1085),
                    a = function(e) {
                        return e[e.Default = 0] = "Default", e[e.InvertColor = 1] = "InvertColor", e[e.WhiteBorder = 2] = "WhiteBorder", e
                    }({}),
                    o = function(e) {
                        var t = e.text,
                            n = e.href,
                            o = e.target,
                            i = e.className,
                            l = e.mode,
                            s = e.showArrow,
                            u = e.onClick,
                            c = null == n ? void 0 : n.startsWith("mailto:");
                        return (0, r.jsx)("span", {
                            className: "border-[1px] inline-block ".concat(l === a.InvertColor ? "border-white" : l === a.WhiteBorder ? "border-gray-700" : "border-black", " ").concat(i),
                            children: (0, r.jsxs)("a", {
                                href: n,
                                target: o,
                                rel: o ? "noreferrer" : void 0,
                                onClick: u,
                                className: "flex group/button items-center px-[21px] py-[15px] text-[13px] md:text-[14px] font-bold tracking-[2px] uppercase translate-x-[-3px] translate-y-[-3px] active:translate-x-0 active:translate-y-0 transition-all select-none hover:text-hover-grey cursor-pointer ".concat(l === a.InvertColor ? "bg-white" : "bg-black text-white").concat(l === a.WhiteBorder ? " border-[1px] border-white" : ""),
                                children: [c && (0, r.jsx)("svg", {
                                    className: "w-[24px] h-[24px] mr-[10px] transition-all group-hover/button:fill-hover-grey group-hover/button:text-hover-grey ".concat(l === a.InvertColor ? "fill-black" : "fill-white text-white"),
                                    children: (0, r.jsx)("use", {
                                        xlinkHref: "public/icons/icons.svg#cw-mail"
                                    })
                                }), t, (s || !c && n) && (0, r.jsx)("svg", {
                                    className: "".concat(o ? "w-[10px] h-[10px] mt-[1px]" : "w-[24px] h-[24px]", " ml-[10px] transition-all group-hover/button:fill-hover-grey group-hover/button:text-hover-grey ").concat(l === a.InvertColor ? "fill-black" : "fill-white text-white"),
                                    children: (0, r.jsx)("use", {
                                        xlinkHref: "public/icons/icons.svg#".concat(o ? "cw-functional-arrow-external" : "arrow-right-long")
                                    })
                                })]
                            })
                        })
                    }
            },
            8931: (e, t, n) => {
                "use strict";
                n.d(t, {
                    A: () => b
                });
                var r = n(4586),
                    a = n(2061),
                    o = n(4041),
                    i = n(7434),
                    l = n(3536),
                    s = n(6335),
                    u = n(2470),
                    c = n(8694),
                    d = n(3284),
                    f = n(1085);

                function p(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function h(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? p(Object(n), !0).forEach((function(t) {
                            (0, r.A)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var m, g = 0,
                    v = 0,
                    y = function(e, t, n, r) {
                        var a = t % e.length;
                        a > 0 && (a -= e.length);
                        var o = Math.abs(Math.ceil(a)),
                            i = Math.trunc(a) === a ? -1 : o < e.length - 1 ? o + 1 : 0;
                        return a %= 1, e.map((function(t, l) {
                            var s;
                            return s = 1 == e.length ? 0 : l === o ? a : l == i ? a + 1 : n ? a - 1 : r ? a + 2 : a + 1, {
                                carouselItem: t,
                                translate: "".concat(100 * s, "%"),
                                transition: r ? "translate 0s" : "translate .3s"
                            }
                        }))
                    };

                function b(e) {
                    var t = e.carouselItems,
                        n = e.menuItems,
                        r = e.showArrows,
                        i = e.enableRelatedItems,
                        l = e.showLineIndicator,
                        s = e.renderItem,
                        c = (0, o.useState)(0),
                        d = (0, a.A)(c, 2),
                        p = d[0],
                        b = d[1],
                        w = (0, o.useState)(!1),
                        k = (0, a.A)(w, 2),
                        S = k[0],
                        j = k[1],
                        O = (0, o.useState)(!1),
                        N = (0, a.A)(O, 2),
                        E = N[0],
                        P = N[1],
                        C = (0, o.useState)(!1),
                        z = (0, a.A)(C, 2),
                        _ = z[0],
                        T = z[1],
                        L = (0, o.useState)(0),
                        I = (0, a.A)(L, 2),
                        A = I[0],
                        M = I[1],
                        R = (0, o.useState)(!0),
                        D = (0, a.A)(R, 2),
                        F = D[0],
                        $ = D[1],
                        H = (0, o.useState)((function() {
                            return y(t, p, S, E)
                        })),
                        U = (0, a.A)(H, 2),
                        V = U[0],
                        B = U[1];
                    (0, o.useEffect)((function() {
                        if (!E && !_) {
                            var e = S ? Math.floor(p) : Math.ceil(p);
                            e !== p && b(e)
                        }
                    }), [E, p, S, _]), (0, o.useLayoutEffect)((function() {
                        B(y(t, p, S, E || _))
                    }), [t, p, S, E, _]), (0, o.useEffect)((function() {
                        if (E) {
                            var e = function(e) {
                                    var t = "touchmove" === e.type ? e.touches[0].pageX : e.pageX,
                                        n = m.offsetWidth,
                                        r = (t - g + v) / n;
                                    r !== p && (j(r < p), b(r))
                                },
                                t = function() {
                                    P(!1)
                                };
                            return window.addEventListener("mousemove", e, !0), window.addEventListener("touchmove", e, !0), window.addEventListener("mouseup", t, !0), window.addEventListener("touchend", t, !0),
                                function() {
                                    window.removeEventListener("mousemove", e, !0), window.removeEventListener("touchmove", e, !0), window.removeEventListener("mouseup", t, !0), window.removeEventListener("touchend", t, !0)
                                }
                        }
                    }), [E, p]), (0, o.useEffect)((function() {
                        var e = p % t.length;
                        e > 0 && (e -= t.length);
                        var n = Math.abs(Math.ceil(e));
                        M(n)
                    }), [p, t]), (0, o.useEffect)((function() {
                        if (!E && F) {
                            var e = setTimeout((function() {
                                T(!0), j(!0), b(p - 1e-4)
                            }), 7e3);
                            return function() {
                                return clearTimeout(e)
                            }
                        }
                    }), [t, E, p, F]), (0, o.useEffect)((function() {
                        var e = function() {
                            $(!document.hidden)
                        };
                        return document.addEventListener("visibilitychange", e), e(),
                            function() {
                                return document.removeEventListener("visibilitychange", e)
                            }
                    }), []), (0, o.useEffect)((function() {
                        _ && setTimeout((function() {
                            return requestAnimationFrame((function() {
                                return T(!1)
                            }))
                        }))
                    }), [_]);
                    var W = function(e) {
                        "mousedown" === e.type && 0 !== e.button || t.length < 1 || (e.preventDefault(), g = "touchstart" === e.type ? e.touches[0].pageX : e.pageX, m = e.currentTarget, v = p * m.offsetWidth, P(!0))
                    };
                    return (0, f.jsxs)(f.Fragment, {
                        children: [(0, f.jsxs)("div", {
                            id: "magazine-carousel",
                            className: "grid relative overflow-x-hidden ".concat(t.length > 1 ? E ? "cursor-grabbing" : "cursor-grab" : ""),
                            onMouseDown: W,
                            onTouchStart: W,
                            children: [V.map((function(e, t) {
                                return s(h(h({}, e), {}, {
                                    menuItems: n,
                                    index: t
                                }))
                            })), l && (0, f.jsx)("div", {
                                className: "absolute left-0 right-0 bottom-[0] h-[70px] lg:h-[85px] xl:h-[100px] cursor-pointer flex justify-center",
                                children: (0, f.jsxs)("div", {
                                    className: "max-w-[1600px] w-full px-[16px] md:px-[25px] relative",
                                    children: [(0, f.jsx)("div", {
                                        className: "h-[1px] bg-white"
                                    }), (0, f.jsx)("div", {
                                        className: "flex",
                                        children: t.map((function(e, t) {
                                            return (0, f.jsxs)("div", {
                                                className: "flex gap-[4px] pt-[15px] flex-1 mt-[-3px] border-t-[3px] pr-[16px] md:pr-[25px] text-white font-bold ".concat(A === t ? "border-white" : "border-transparent"),
                                                children: [(0, f.jsx)("div", {
                                                    className: "adineuepro",
                                                    children: "0".concat(t + 1)
                                                }), (0, f.jsx)("div", {
                                                    className: "line-clamp-2",
                                                    onClick: function(e) {
                                                        e.stopPropagation(), T(!0), A < t ? (j(!0), b(p - (t - A))) : A > t && (j(!1), b(p + (A - t))), M(t)
                                                    },
                                                    children: e.page.title
                                                })]
                                            }, t)
                                        }))
                                    })]
                                })
                            }), r && t.length > 1 && (0, f.jsxs)(f.Fragment, {
                                children: [(0, f.jsx)(u.U, {
                                    hideOnSmallView: !0,
                                    onMouseDown: function(e) {
                                        return e.stopPropagation()
                                    },
                                    onTouchStart: function(e) {
                                        return e.stopPropagation()
                                    },
                                    onClick: function(e) {
                                        e.stopPropagation(), T(!0), j(!1), b(p + 1e-4)
                                    }
                                }), (0, f.jsx)(u.U, {
                                    hideOnSmallView: !0,
                                    onMouseDown: function(e) {
                                        return e.stopPropagation()
                                    },
                                    onTouchStart: function(e) {
                                        return e.stopPropagation()
                                    },
                                    isRight: !0,
                                    onClick: function(e) {
                                        e.stopPropagation(), T(!0), j(!0), b(p - 1e-4)
                                    }
                                }), (0, f.jsxs)("div", {
                                    className: "absolute bg-black right-0 bottom-[80px] px-[15px] py-[4px] text-white label italic",
                                    children: [A + 1, "/", t.length]
                                })]
                            })]
                        }), i && (0, f.jsx)("div", {
                            className: "bg-primary-light-grey grid mb-[60px]",
                            children: t.map((function(e, t) {
                                return (0, f.jsx)(x, {
                                    item: e,
                                    isSelected: t === A,
                                    menuItems: n,
                                    category: e.category
                                }, e.page.id)
                            }))
                        })]
                    })
                }
                var x = function(e) {
                    var t, n = e.item,
                        r = e.isSelected,
                        a = e.menuItems,
                        o = e.category,
                        u = (0, i.Bd)().t,
                        p = (0, l.Ez)().locale;
                    return (0, f.jsxs)("div", {
                        className: "row-[1] col-[1] flex flex-col pt-[20px] pb-[10px] transition-opacity min-w-0 relative ".concat(r ? "opacity-100 z-10" : "opacity-0"),
                        children: [(0, f.jsxs)("span", {
                            className: "label mb-[20px] mx-auto max-w-[1600px] w-full px-[24px]",
                            children: [(0, f.jsx)("strong", {
                                children: u("related_to")
                            }), " ", o || n.page.title]
                        }), (0, f.jsxs)(c.o, {
                            arrowsMode: c.y.Hidden,
                            children: [(0, f.jsx)("div", {
                                className: "w-[calc((100%-1600px)/2)] inline-block mr-[12px]"
                            }), null === (t = n.related) || void 0 === t ? void 0 : t.map((function(e, t) {
                                var n, r = e.page;
                                return (0, f.jsx)("div", {
                                    className: "inline-block px-[10px]",
                                    children: (0, f.jsxs)("a", {
                                        className: "inline-block w-[210px] md:w-[330px] align-top",
                                        href: r.url,
                                        target: (0, s.IQ)(r),
                                        children: [(0, f.jsx)("img", {
                                            className: "w-full object-cover aspect-[4/3] mb-[8px]",
                                            src: (0, s.Sh)(null === (n = r.meta) || void 0 === n ? void 0 : n.image, 330, void 0, "4:3"),
                                            alt: r.title
                                        }), r.date && (0, f.jsx)("div", {
                                            className: "label",
                                            children: (0, s.Yq)(p, r.date)
                                        }), (0, f.jsx)("span", {
                                            className: "label",
                                            children: (0, d.ef)(r, a) || " "
                                        }), (0, f.jsx)("h5", {
                                            className: "mb-[10px] whitespace-normal",
                                            children: r.title
                                        }), (0, f.jsx)("span", {
                                            className: "link inline-block",
                                            children: u("read_more")
                                        })]
                                    })
                                }, t)
                            })), (0, f.jsx)("div", {
                                className: "w-[calc((100%-1600px)/2)] inline-block ml-[12px]"
                            })]
                        })]
                    })
                }
            },
            7277: (e, t, n) => {
                "use strict";
                n.d(t, {
                    P: () => s,
                    c: () => l
                });
                var r = n(2061),
                    a = n(4041),
                    o = n(9618),
                    i = n(1085),
                    l = function(e) {
                        return e[e.Default = 0] = "Default", e[e.BigTopMargin = 1] = "BigTopMargin", e[e.Hidden = 2] = "Hidden", e
                    }({}),
                    s = function(e) {
                        var t = e.scrollElement,
                            n = e.scrollIndicatorMode,
                            s = (0, a.useState)(0),
                            u = (0, r.A)(s, 2),
                            c = u[0],
                            d = u[1],
                            f = (0, a.useState)([]),
                            p = (0, r.A)(f, 2),
                            h = p[0],
                            m = p[1];
                        if ((0, a.useEffect)((function() {
                                if (t) {
                                    var e = function() {
                                            var e = (0, o.Z)(t);
                                            h.length !== e && m(new Array(e).fill(0));
                                            var n = (0, o.f)(t, e);
                                            c !== n && d(n)
                                        },
                                        n = new ResizeObserver(e);
                                    return n.observe(t), t.addEventListener("scroll", e),
                                        function() {
                                            t.removeEventListener("scroll", e), n.disconnect()
                                        }
                                }
                            }), [t, h, c]), n !== l.Hidden) {
                            return (0, i.jsx)("div", {
                                className: "flex h-[12px] gap-[4px] items-end justify-center px-[10px] mt-[10px] mb-[20px] ".concat(n === l.BigTopMargin ? "mt-[40px]" : ""),
                                children: h.length > 1 && h.map((function(e, n) {
                                    return (0, i.jsx)("div", {
                                        onClick: function() {
                                            return e = n, void(t && t.scrollTo({
                                                left: e * t.offsetWidth,
                                                behavior: "smooth"
                                            }));
                                            var e
                                        },
                                        className: "h-[8px] cursor-pointer transition-[border-bottom] border-black flex-1 max-w-[20px] md:max-w-[25px] ".concat(c === n ? "border-b-[8px]" : "border-b-[3px] hover:border-b-[8px]")
                                    }, n)
                                }))
                            })
                        }
                    }
            },
            5226: (e, t, n) => {
                "use strict";
                n.d(t, {
                    E: () => d,
                    I: () => c
                });
                var r = n(2061),
                    a = n(4041),
                    o = n(7434),
                    i = n(3536),
                    l = n(6335),
                    s = n(1429),
                    u = n(1085),
                    c = "adidas-group:consents",
                    d = function() {
                        var e = (0, o.Bd)().t,
                            t = (0, i.Ez)().locale,
                            n = (0, a.useState)(),
                            d = (0, r.A)(n, 2),
                            f = d[0],
                            p = d[1];
                        if ((0, a.useEffect)((function() {
                                function e() {
                                    p((0, l.io)(c))
                                }
                                return window.addEventListener("consents:change", e), e(),
                                    function() {
                                        return window.removeEventListener("consents:change", e)
                                    }
                            }), []), null !== f) return null;

                        function h(e) {
                            var t = {
                                ga: e
                            };
                            (0, l.UV)(c, t, 15552e6), p(t)
                        }
                        return (0, u.jsx)("div", {
                            className: "bg-black fixed bottom-0 left-0 w-full z-[200] px-[16px] md:px-[25px]",
                            children: (0, u.jsxs)("div", {
                                className: "grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-[16px] py-[20px] md:py-[30px] md:max-w-[1420px] mx-auto",
                                children: [(0, u.jsx)("div", {
                                    className: "text-white flex-1",
                                    children: (0, u.jsx)(o.x6, {
                                        i18nKey: e("cookie_policy"),
                                        components: {
                                            readourpolicy: (0, u.jsx)("a", {
                                                href: "de" === t ? "cookie-hinweis" : "cookie-statement",
                                                className: "underline lowercase font-bold",
                                                children: e("here")
                                            })
                                        }
                                    })
                                }), (0, u.jsxs)("div", {
                                    className: "flex gap-[22px]",
                                    children: [(0, u.jsx)(s.$, {
                                        text: e("accept_and_close"),
                                        mode: s.y.InvertColor,
                                        showArrow: !0,
                                        onClick: function() {
                                            return h(1)
                                        }
                                    }), (0, u.jsx)("button", {
                                        className: "link underline hover:text-hover-grey transition-all text-white text-left",
                                        onClick: function() {
                                            return h(0)
                                        },
                                        children: e("only_allow_required")
                                    })]
                                })]
                            })
                        })
                    }
            },
            1525: (e, t, n) => {
                "use strict";
                n.d(t, {
                    l: () => i
                });
                var r = n(2061),
                    a = n(4041),
                    o = n(1085),
                    i = function(e) {
                        var t = e.children,
                            n = e.disablePadding,
                            i = e.onClose,
                            l = (0, a.useState)(null),
                            s = (0, r.A)(l, 2),
                            u = s[0],
                            c = s[1],
                            d = (0, a.useState)(null),
                            f = (0, r.A)(d, 2),
                            p = f[0],
                            h = f[1],
                            m = (0, a.useState)(!1),
                            g = (0, r.A)(m, 2),
                            v = g[0],
                            y = g[1];
                        return (0, a.useEffect)((function() {
                            return u && !u.open && u.showModal && u.showModal(), window.dispatchEvent(new Event("dialog:change")),
                                function() {
                                    window.dispatchEvent(new Event("dialog:change"))
                                }
                        }), [u]), (0, a.useEffect)((function() {
                            p && !v && (p.scrollTo(0, 0), y(!0))
                        }), [p, v]), (0, o.jsxs)("dialog", {
                            onClick: function(e) {
                                e.target === e.currentTarget && i()
                            },
                            className: "p-0 overflow-visible backdrop:bg-[black] menu:border border-solid border-black backdrop:opacity-70 bg-white fixed z-30 menu:max-w-[90vw] menu:w-[660px] max-menu:bottom-0 max-menu:w-full max-menu:top-[unset] max-menu:max-w-[100vw]",
                            ref: c,
                            children: [(0, o.jsx)("div", {
                                ref: h,
                                className: "overflow-auto max-h-[80vh] menu:max-h-[92vh] max-menu:h-auto".concat(n ? "" : " p-[20px] md:p-[25px]"),
                                children: t
                            }), (0, o.jsx)("button", {
                                className: "bg-white text-black border border-solid border-black cursor-pointer flex h-[36px] w-[36px] justify-center absolute top-[-18px] right-[15px] menu:top-[-17px] menu:right-[-17px] z-[5] outline-none",
                                onClick: i,
                                children: (0, o.jsx)("img", {
                                    src: "public/icons/close-icon.svg"
                                })
                            })]
                        })
                    }
            },
            5779: (e, t, n) => {
                "use strict";
                n.d(t, {
                    x: () => c
                });
                var r = n(6714),
                    a = n(7434),
                    o = n(463),
                    i = n(1429),
                    l = n(1085),
                    s = function() {
                        var e = (0, a.Bd)().t,
                            t = (0, o.rd)().basepath;
                        return (0, l.jsx)("div", {
                            className: "max-w-[1050px] px-[16px] md:px-[24px] mx-auto mt-[60px]",
                            children: (0, l.jsxs)("div", {
                                className: "flex flex-col",
                                children: [(0, l.jsx)("h1", {
                                    children: e("page_not_found")
                                }), (0, l.jsx)("div", {
                                    children: (0, l.jsx)(a.x6, {
                                        i18nKey: e("page_not_found_message"),
                                        components: {
                                            search: (0, l.jsx)("a", {
                                                className: "underline",
                                                href: "search",
                                                children: e("search")
                                            }),
                                            home: (0, l.jsx)("div", {
                                                className: "mt-[20px]",
                                                children: (0, l.jsx)(i.$, {
                                                    text: e("home"),
                                                    href: t
                                                })
                                            })
                                        }
                                    })
                                })]
                            })
                        })
                    },
                    u = function() {
                        var e = (0, a.Bd)().t;
                        return (0, l.jsxs)("div", {
                            className: "max-w-[1050px] px-[16px] md:px-[24px] md:p-0 mx-auto mt-[60px]",
                            children: [(0, l.jsxs)("div", {
                                className: "flex flex-col",
                                children: [(0, l.jsx)("h1", {
                                    children: e("internal_server_error_title")
                                }), (0, l.jsx)("h3", {
                                    children: e("internal_server_error")
                                }), (0, l.jsxs)("p", {
                                    children: [e("internal_server_error_desc_one"), (0, l.jsx)("a", {
                                        className: "link",
                                        "data-ignore": !0,
                                        href: "mailto:corporate.press@adidas-group.com",
                                        children: "corporate.press@adidas-group.com"
                                    }), " ", e("internal_server_error_desc_two")]
                                }), (0, l.jsx)("p", {
                                    children: e("internal_server_error_check_out_adidas_news")
                                }), (0, l.jsx)("p", {
                                    children: (0, l.jsx)("a", {
                                        href: "https://news.adidas.com/",
                                        target: "_blank",
                                        className: "link",
                                        "data-ignore": !0,
                                        rel: "noreferrer",
                                        children: "https://news.adidas.com/"
                                    })
                                }), (0, l.jsx)("p", {
                                    children: e("internal_server_error_check_back_later")
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "w-full mx-auto py-[20px] flex flex-col md:flex-row gap-[20px]",
                                children: [(0, l.jsxs)("div", {
                                    className: "bg-primary-light-grey px-[20px] py-[30px] flex-1 flex flex-col md:items-center",
                                    children: [(0, l.jsx)("h2", {
                                        className: "md:text-center",
                                        children: "Company contact"
                                    }), (0, l.jsx)("p", {
                                        className: "large font-bold !mb-0 md:text-center",
                                        children: "adidas AG"
                                    }), (0, l.jsxs)("p", {
                                        className: "small md:text-center",
                                        children: ["World of Sports", (0, l.jsx)("br", {}), "Adi-Dassler-straße 1", (0, l.jsx)("br", {}), "91074 Herzogenaurach", (0, l.jsx)("br", {}), "Germany"]
                                    }), (0, l.jsx)("a", {
                                        className: "link mb-[20px]",
                                        href: "tel:+49 (0) 9132 84-0",
                                        children: "+49 (0) 9132 84-0"
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "bg-primary-light-grey px-[20px] py-[30px] flex-1 flex flex-col md:items-center",
                                    children: [(0, l.jsx)("h2", {
                                        className: "md:text-center",
                                        children: "Investor relations contact"
                                    }), (0, l.jsx)("p", {
                                        className: "large font-bold !mb-0 md:text-center",
                                        children: "adidas AG Investor Relations"
                                    }), (0, l.jsxs)("p", {
                                        className: "small md:text-center",
                                        children: ["World of Sports", (0, l.jsx)("br", {}), "Adi-Dassler-straße 1", (0, l.jsx)("br", {}), "91074 Herzogenaurach", (0, l.jsx)("br", {}), "Germany"]
                                    }), (0, l.jsx)("a", {
                                        className: "link mb-[20px]",
                                        href: "tel:+49 (0) 9132 84-0",
                                        children: "+49 (0) 9132 84-0"
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "bg-primary-light-grey px-[20px] py-[30px] flex-1 flex flex-col md:items-center",
                                    children: [(0, l.jsx)("h2", {
                                        className: "md:text-center",
                                        children: "Sustainability Contact"
                                    }), (0, l.jsx)("p", {
                                        className: "large font-bold !mb-0 md:text-center",
                                        children: "adidas AG Social & Environmental Affairs"
                                    }), (0, l.jsxs)("p", {
                                        className: "small md:text-center",
                                        children: ["World of Sports", (0, l.jsx)("br", {}), "Adi-Dassler-straße 1", (0, l.jsx)("br", {}), "91074 Herzogenaurach", (0, l.jsx)("br", {}), "Germany"]
                                    }), (0, l.jsx)("a", {
                                        className: "link mb-[20px]",
                                        href: "tel:+49 (0) 9132 84-0",
                                        children: "+49 (0) 9132 84-0"
                                    })]
                                })]
                            })]
                        })
                    },
                    c = function(e) {
                        var t = e.error;
                        return t && t.code === r.O.NotFound ? (0, l.jsx)(s, {}) : (0, l.jsx)(u, {})
                    }
            },
            8694: (e, t, n) => {
                "use strict";
                n.d(t, {
                    o: () => c,
                    y: () => u
                });
                var r = n(4586),
                    a = n(4041),
                    o = n(5462),
                    i = n(1085);

                function l(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }
                var s = (0, a.lazy)((function() {
                        return n.e(78).then(n.bind(n, 936))
                    })),
                    u = function(e) {
                        return e[e.Default = 0] = "Default", e[e.Hidden = 1] = "Hidden", e[e.Small = 2] = "Small", e[e.OnTop = 3] = "OnTop", e
                    }({});

                function c(e) {
                    return (0, o._P)("HorizontalScrollLazy"), (0, i.jsx)(s, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? l(Object(n), !0).forEach((function(t) {
                                (0, r.A)(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, e))
                }
            },
            2407: (e, t, n) => {
                "use strict";
                n.d(t, {
                    f: () => c
                });
                var r = n(6330),
                    a = n(4619),
                    o = n(5799),
                    i = n.n(o),
                    l = n(7434),
                    s = n(1525),
                    u = n(1085),
                    c = function(e) {
                        var t = e.locales,
                            n = e.onClose,
                            o = (0, l.Bd)().t,
                            c = t[0],
                            d = (0, a.A)(t).sort((function(e, t) {
                                return e.name > t.name ? 1 : -1
                            }));

                        function f() {
                            return (f = (0, r.A)(i().mark((function e(t) {
                                var n, r, a;
                                return i().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return (n = window.location.pathname.substring(c.basepath.length)).startsWith("/") || (n = "/".concat(n)), e.next = 4, fetch("api/v1/locales/".concat(encodeURIComponent(t.locale), "/url?url=").concat(encodeURIComponent(n)));
                                        case 4:
                                            if (!(r = e.sent).ok) {
                                                e.next = 9;
                                                break
                                            }
                                            return e.next = 8, r.json();
                                        case 8:
                                            a = e.sent.url;
                                        case 9:
                                            window.location.pathname = "".concat(t.basepath).concat(a || "");
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))).apply(this, arguments)
                        }
                        return (0, u.jsx)(s.l, {
                            onClose: n,
                            children: (0, u.jsxs)("div", {
                                className: "px-[20px] py-[30px] menu:p-[20px]",
                                children: [(0, u.jsx)("h2", {
                                    children: o("choose_your_language")
                                }), (0, u.jsx)("div", {
                                    role: "radiogroup",
                                    className: "flex relative mt-[10px]",
                                    children: (0, u.jsx)("div", {
                                        className: "flex flex-col gap-[20px]",
                                        children: d.map((function(e) {
                                            return (0, u.jsxs)("label", {
                                                className: "cursor-pointer flex shrink-0 items-center text-[16px] font-normal tracking-normal normal-case",
                                                children: [(0, u.jsx)("input", {
                                                    type: "radio",
                                                    name: "radio",
                                                    className: "h-0 w-0 p-0 absolute opacity-0 [&:hover~span:before]:border-black [&:checked~span]:font-bold [&:checked~span:before]:bg-black [&:checked~span:before]:border-black [&:checked~span:after]:scale-100",
                                                    checked: e === c,
                                                    onChange: function(t) {
                                                        t.target.checked && e !== c && function(e) {
                                                            f.apply(this, arguments)
                                                        }(e)
                                                    }
                                                }), (0, u.jsx)("span", {
                                                    className: "inline-flex leading-[24px] min-h-[24px] relative before:bg-white before:block before:border-solid before:border-2 before:border-hover-grey before:rounded-full before:shrink-0 before:h-[24px] before:w-[24px] before:mr-[14px] before:pointer-events-none before:transition-all before:duration-100 before:ease-[cubic-bezier(.3,0,.45,1)] after:transition-all after:duration-100 after:ease-[cubic-bezier(.3,0,.45,1)] after:bg-white after:block after:rounded-full after:h-[8px] after:w-[8px] after:absolute after:left-[8px] after:top-[8px] after:scale-0",
                                                    children: e.name
                                                })]
                                            }, e.locale)
                                        }))
                                    })
                                })]
                            })
                        })
                    }
            },
            4804: (e, t, n) => {
                "use strict";
                n.d(t, {
                    I: () => v,
                    h: () => m
                });
                var r = n(7434),
                    a = n(463),
                    o = n(6335),
                    i = n(3284),
                    l = n(1429),
                    s = n(8931),
                    u = n(7277),
                    c = n(8694),
                    d = n(1675),
                    f = n(1085);

                function p(e, t) {
                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!n) {
                        if (Array.isArray(e) || (n = function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return h(e, t);
                                    var n = {}.toString.call(e).slice(8, -1);
                                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? h(e, t) : void 0
                                }
                            }(e)) || t && e && "number" == typeof e.length) {
                            n && (e = n);
                            var r = 0,
                                a = function() {};
                            return {
                                s: a,
                                n: function() {
                                    return r >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[r++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: a
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var o, i = !0,
                        l = !1;
                    return {
                        s: function() {
                            n = n.call(e)
                        },
                        n: function() {
                            var e = n.next();
                            return i = e.done, e
                        },
                        e: function(e) {
                            l = !0, o = e
                        },
                        f: function() {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                    }
                }

                function h(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r
                }
                var m = "magazine-header-navigation",
                    g = function(e, t) {
                        if (!t) return !1;
                        if (e === "/".concat(t.url)) return !0;
                        var n, r = p(t.children || []);
                        try {
                            for (r.s(); !(n = r.n()).done;) {
                                var a = n.value;
                                if (e === "/".concat(a.url)) return !0
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                        return !1
                    },
                    v = function(e) {
                        var t, n = e.magazinePage,
                            r = e.menuItems,
                            i = e.magazineCarouselItems,
                            l = (0, a.rd)().pathname;
                        return (0, f.jsxs)(f.Fragment, {
                            children: [i.length > 0 && g(l, n) && (0, f.jsx)(s.A, {
                                carouselItems: i,
                                menuItems: r,
                                showLineIndicator: !0,
                                renderItem: y
                            }), (0, f.jsx)("div", {
                                className: "sticky top-[-1px] bg-white z-40 border-b border-t border-primary-light-grey",
                                children: (0, f.jsxs)("div", {
                                    className: "flex flex-col items-center menu:flex-row max-w-[1600px] w-full mx-auto",
                                    children: [(0, f.jsxs)("div", {
                                        className: "flex w-full self-stretch justify-between menu:justify-end px-[16px] menu:px-0 menu:flex-1 items-center menu:border-r border-primary-light-grey",
                                        children: [(0, f.jsx)("div", {
                                            className: "hidden xs:flex menu:hidden",
                                            children: (0, f.jsx)("a", {
                                                href: "magazine/search",
                                                children: (0, f.jsx)("svg", {
                                                    className: "w-[20px] h-[20px] mr-[12px]",
                                                    children: (0, f.jsx)("use", {
                                                        xlinkHref: "public/icons/search.svg#search"
                                                    })
                                                })
                                            })
                                        }), (0, f.jsx)("div", {
                                            className: "flex py-[14px] px-[16px]",
                                            children: (0, f.jsx)("a", {
                                                href: n.url,
                                                children: (0, f.jsx)("svg", {
                                                    className: "fill-black h-[36px] w-[200px]",
                                                    children: (0, f.jsx)("use", {
                                                        xlinkHref: "public/i3s-logo.svg#i3s-logo"
                                                    })
                                                })
                                            })
                                        }), (0, f.jsxs)("div", {
                                            className: "hidden xs:flex menu:hidden",
                                            children: [(0, f.jsx)("a", {
                                                href: "https://adidas.pub/43na6As",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: (0, f.jsx)("svg", {
                                                    className: "w-[22px] h-[22px] mr-[12px]",
                                                    children: (0, f.jsx)("use", {
                                                        xlinkHref: "public/icons/icons.svg#instagram"
                                                    })
                                                })
                                            }), (0, f.jsx)("a", {
                                                href: "https://adidas.pub/3vfPFZm",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: (0, f.jsx)("svg", {
                                                    className: "w-[22px] h-[22px]",
                                                    children: (0, f.jsx)("use", {
                                                        xlinkHref: "public/icons/icons.svg#cw-linkedin"
                                                    })
                                                })
                                            })]
                                        })]
                                    }), (0, f.jsxs)("div", {
                                        "data-id": m,
                                        className: "menu:flex w-full min-w-0 text-center menu:text-left items-center justify-center",
                                        children: [(0, f.jsx)("div", {
                                            children: (0, f.jsx)(c.o, {
                                                disableScrollIntoView: !0,
                                                arrowsMode: c.y.Small,
                                                scrollIndicatorMode: u.c.Hidden,
                                                children: null === (t = n.children) || void 0 === t ? void 0 : t.map((function(e) {
                                                    return (0, f.jsx)("div", {
                                                        className: "inline-block",
                                                        children: (0, f.jsx)("a", {
                                                            className: (t = (0, d.me)(l, e), "text-[13px] py-[6px] menu:py-[30px] menu:text-[15px] xl:text-[20px] adineuepro mx-[13px] xl:mx-[15px] leading-[17px] menu:leading-[22px] tracking-[2px] whitespace-nowrap uppercase border-b-[3px] group-hover:border-black flex items-center ".concat(t ? "border-black font-bold " : "border-transparent ")),
                                                            href: e.url,
                                                            target: (0, o.u5)(e.url),
                                                            children: e.title
                                                        })
                                                    }, e.id);
                                                    var t
                                                }))
                                            })
                                        }), (0, f.jsx)("a", {
                                            className: "hidden menu:flex ",
                                            href: "magazine/search",
                                            children: (0, f.jsx)("svg", {
                                                className: "w-[23px] h-[23px] menu:ml-[5px] xl:ml-[30px] mb-[2px]",
                                                children: (0, f.jsx)("use", {
                                                    xlinkHref: "public/icons/search.svg#search"
                                                })
                                            })
                                        })]
                                    }), (0, f.jsxs)("div", {
                                        className: "hidden menu:flex gap-[20px] border-l border-primary-light-grey items-center self-stretch px-[16px]",
                                        children: [(0, f.jsx)("a", {
                                            href: "https://adidas.pub/43na6As",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: (0, f.jsx)("svg", {
                                                className: "w-[28px] h-[28px]",
                                                children: (0, f.jsx)("use", {
                                                    xlinkHref: "public/icons/icons.svg#instagram"
                                                })
                                            })
                                        }), (0, f.jsx)("a", {
                                            href: "https://adidas.pub/3vfPFZm",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: (0, f.jsx)("svg", {
                                                className: "w-[28px] h-[28px]",
                                                children: (0, f.jsx)("use", {
                                                    xlinkHref: "public/icons/icons.svg#cw-linkedin"
                                                })
                                            })
                                        })]
                                    })]
                                })
                            })]
                        })
                    };

                function y(e) {
                    var t, n = e.index,
                        a = e.carouselItem,
                        s = e.transition,
                        u = e.translate,
                        c = e.menuItems,
                        d = (0, r.Bd)().t,
                        p = null === (t = a.page.meta) || void 0 === t ? void 0 : t.image,
                        h = a.page.meta && a.page.meta.youtube;
                    return (0, f.jsxs)("div", {
                        className: "row-[1] col-[1] flex h-[400px] md:h-[560px] relative",
                        style: {
                            transition: s,
                            translate: u
                        },
                        children: [(0, f.jsx)("div", {
                            className: "absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"
                        }), h && (0, f.jsx)("iframe", {
                            className: "w-full h-full absolute left-0 top-0",
                            src: "https://www.youtube.com/embed/".concat(h, "?autoplay=1&mute=1&controls=0&loop=1&playlist=").concat(h),
                            title: "YouTube video player",
                            allowFullScreen: !0,
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        }), !h && (0, o.wu)(p) && (0, f.jsx)("img", {
                            className: "w-full h-full object-cover absolute left-0 top-0",
                            src: (0, o.Sh)(p, 2e3),
                            alt: a.page.title
                        }), !h && (0, o.cZ)(p) && (0, f.jsx)(f.Fragment, {
                            children: (0, f.jsx)("video", {
                                className: "w-full h-full object-cover absolute left-0 top-0",
                                src: p,
                                autoPlay: !0,
                                loop: !0,
                                muted: !0,
                                playsInline: !0
                            })
                        }), (0, f.jsxs)("div", {
                            className: "relative flex flex-col flex-1 justify-end pb-[90px] lg:pb-[105px] xl:pb-[125px] max-w-[1600px] px-[16px] md:px-[25px] z-10 mx-auto",
                            children: [(0, f.jsx)("div", {
                                className: "label text-white",
                                children: a.category ? a.category : (0, i.ef)(a.page, c)
                            }), (0, f.jsx)("h1", {
                                className: "!mb-0 mt-[20px] h-[95px] sm:h-auto text-white max-w-[800px] line-clamp-3",
                                children: a.page.title
                            }), a.page.url && (0, f.jsx)(l.$, {
                                className: "mt-[35px] self-start",
                                text: d("read_more"),
                                href: a.page.url,
                                mode: l.y.InvertColor,
                                target: (0, o.u5)(a.page.url)
                            })]
                        })]
                    }, n)
                }
            },
            1675: (e, t, n) => {
                "use strict";
                n.d(t, {
                    DW: () => x,
                    me: () => y
                });
                var r = n(2061),
                    a = n(4586),
                    o = n(4619),
                    i = n(4041),
                    l = n(7434),
                    s = n(5462),
                    u = n(463),
                    c = n(3912),
                    d = n(6335),
                    f = n(5779),
                    p = n(2407),
                    h = n(4804),
                    m = n(2060),
                    g = n(1085);

                function v(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }
                var y = function(e, t) {
                        var n, r = !1;
                        return [t.url].concat((0, o.A)((null === (n = t.children) || void 0 === n ? void 0 : n.map((function(e) {
                            return [e].concat((0, o.A)(e.children || []))
                        })).flat().map((function(e) {
                            return e.url
                        })).filter((function(e) {
                            return !!e
                        }))) || [])).forEach((function(t) {
                            (function(e, t) {
                                return !!t && (e.startsWith("/".concat(t, "/")) || e === "/".concat(t) || e === t)
                            })(e, t) && (r = !0)
                        })), r
                    },
                    b = function(e) {
                        return "text-[13px] py-[6px] 2xl:text-[16px] mx-[15px] leading-[17px] 2xl:leading-[22px] tracking-[2px] whitespace-nowrap uppercase border-b-[3px] group-hover:border-black flex items-center ".concat(e ? "border-black font-bold " : "border-transparent ")
                    },
                    x = function() {
                        return (0, g.jsx)(c.M, {
                            loadingFallback: (0, g.jsx)(m.e, {}),
                            errorFallback: function(e) {
                                return (0, g.jsx)(f.x, function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? v(Object(n), !0).forEach((function(t) {
                                            (0, a.A)(e, t, n[t])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                        }))
                                    }
                                    return e
                                }({}, e))
                            },
                            children: (0, g.jsx)(w, {})
                        })
                    },
                    w = function() {
                        var e, t = (0, s.Qd)({
                                tag: "menu"
                            }).pages,
                            n = t.find((function(e) {
                                var t;
                                return null === (t = e.meta) || void 0 === t ? void 0 : t.magazine
                            })),
                            r = (null == n || null === (e = n.meta) || void 0 === e || null === (e = e["magazine:carousel"]) || void 0 === e ? void 0 : e.split(",")) || [],
                            a = t.map((function(e) {
                                var t;
                                return [null === (t = e.meta) || void 0 === t ? void 0 : t["recommendation:pageId"]].concat((0, o.A)(r))
                            })).flat().filter((function(e, t, n) {
                                return e && n.indexOf(e) === t
                            })),
                            i = (0, s.Qd)({
                                pageIds: a
                            }).pages,
                            l = r.map((function(e) {
                                return i.find((function(t) {
                                    return t.id.toString() === e
                                }))
                            })).filter((function(e) {
                                return e
                            })).map((function(e) {
                                return {
                                    page: e
                                }
                            }));
                        return (0, g.jsxs)(g.Fragment, {
                            children: [(0, g.jsx)(S, {
                                pages: t,
                                magazinePage: n,
                                recommendedPages: i
                            }), (0, g.jsx)(P, {
                                pages: t,
                                magazinePage: n,
                                recommendedPages: i
                            }), (0, g.jsx)(k, {
                                menuItems: t,
                                magazinePage: n,
                                magazineCarouselItems: l
                            })]
                        })
                    },
                    k = function(e) {
                        var t = e.menuItems,
                            n = e.magazinePage,
                            r = e.magazineCarouselItems,
                            a = (0, u.rd)().pathname;
                        return n && y(a, n) ? (0, g.jsx)(h.I, {
                            menuItems: t,
                            magazinePage: n,
                            magazineCarouselItems: r
                        }) : null
                    },
                    S = function(e) {
                        var t = e.pages,
                            n = e.magazinePage,
                            a = e.recommendedPages,
                            o = (0, u.rd)().basepath,
                            l = (0, s.jc)().locales,
                            c = (0, i.useState)(!1),
                            d = (0, r.A)(c, 2),
                            f = d[0],
                            h = d[1];
                        return (0, g.jsx)(g.Fragment, {
                            children: (0, g.jsx)("header", {
                                className: "hidden menu:flex sticky top-0 bg-white border-b border-primary-light-grey border-solid items-end justify-center h-[59px] z-30 hover:z-50 transition-[top]",
                                children: (0, g.jsxs)("div", {
                                    className: "items-end flex flex-1 w-full max-w-[1600px] px-[25px] justify-between",
                                    children: [(0, g.jsx)("div", {
                                        className: "flex-1",
                                        children: (0, g.jsx)("a", {
                                            className: "inline-block mb-[12px]",
                                            href: o,
                                            title: "home",
                                            children: (0, g.jsx)("img", {
                                                className: "w-[88px]",
                                                src: "public/adidas-logo.svg"
                                            })
                                        })
                                    }), (0, g.jsxs)("nav", {
                                        className: "flex",
                                        role: "navigation",
                                        "aria-label": "Main",
                                        children: [t.map((function(e) {
                                            return (0, g.jsx)(j, {
                                                page: e,
                                                recommendedPages: a,
                                                magazinePage: n
                                            }, e.id)
                                        })), (0, g.jsx)("div", {
                                            className: "group flex items-end",
                                            children: (0, g.jsxs)("button", {
                                                className: b(!1),
                                                onClick: function() {
                                                    return h(!0)
                                                },
                                                children: [(0, g.jsx)("svg", {
                                                    className: "w-[18px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] mr-[8px] align-middle",
                                                    children: (0, g.jsx)("use", {
                                                        xlinkHref: "public/icons/icons.svg#".concat(l[0].locale)
                                                    })
                                                }), l[0].locale]
                                            })
                                        }), (0, g.jsx)("div", {
                                            className: "group flex items-end",
                                            children: (0, g.jsx)("a", {
                                                className: b(!1),
                                                href: "search",
                                                children: (0, g.jsx)("svg", {
                                                    className: "w-[20px] h-[20px]",
                                                    children: (0, g.jsx)("use", {
                                                        xlinkHref: "public/icons/icons.svg#search"
                                                    })
                                                })
                                            })
                                        }), f && (0, g.jsx)(p.f, {
                                            locales: l,
                                            onClose: function() {
                                                return h(!1)
                                            }
                                        })]
                                    })]
                                })
                            })
                        })
                    },
                    j = function(e) {
                        var t = e.page,
                            n = e.recommendedPages,
                            a = e.magazinePage,
                            o = (0, u.rd)().pathname,
                            l = y(o, t),
                            s = (0, i.useState)(!1),
                            c = (0, r.A)(s, 2),
                            f = c[0],
                            p = c[1];
                        return (0, i.useEffect)((function() {
                            f && setTimeout((function() {
                                return p(!1)
                            }), 200)
                        }), [f]), (0, g.jsxs)("div", {
                            className: "flex items-end group ".concat(t.children ? "[&:not(:has(div>div>div>div:hover>div))>div]:shadow-xl" : "[&>div]:shadow-lg"),
                            children: [(0, g.jsx)("a", {
                                className: b(l),
                                href: t.url,
                                target: (0, d.u5)(t.url),
                                rel: (0, d.y0)(t.url),
                                onClick: t.url ? function() {
                                    return p(!0)
                                } : void 0,
                                children: t.title
                            }), t.children && t !== a && (0, g.jsxs)("div", {
                                className: "".concat(f ? "!hidden" : "hidden", " group-hover:block absolute top-full left-0 right-0 bg-white border-t border-primary-light-grey"),
                                children: [(0, g.jsxs)("div", {
                                    className: "w-full max-w-[1600px] mx-auto px-[25px] flex",
                                    children: [(0, g.jsx)("div", {
                                        className: "flex flex-col items-start flex-1 py-[30px]",
                                        children: t.children.map((function(e) {
                                            return (0, g.jsx)(O, {
                                                page: e,
                                                parentPage: t,
                                                recommendedPages: n,
                                                setIsClicked: p
                                            }, e.id)
                                        }))
                                    }), (0, g.jsx)("div", {
                                        className: "flex-1"
                                    }), (0, g.jsx)(L, {
                                        recommendedPages: n,
                                        item: t,
                                        setIsClicked: p
                                    })]
                                }), (0, g.jsx)(E, {})]
                            })]
                        })
                    },
                    O = function(e) {
                        var t = e.page,
                            n = e.parentPage,
                            r = e.recommendedPages,
                            a = e.setIsClicked,
                            o = (0, u.rd)().pathname,
                            i = y(o, t);
                        return (0, g.jsxs)("div", {
                            className: "group/second hover:underline".concat(t.children ? " hoverable" : ""),
                            children: [(0, g.jsxs)("a", {
                                className: "relative z-40 flex items-center py-[10px] text-[13px] 2xl:text-[16px] leading-[17px] 2xl:leading-[22px] uppercase".concat(i ? " font-bold" : ""),
                                href: t.url,
                                target: (0, d.u5)(t.url),
                                onClick: t.url ? function() {
                                    return a(!0)
                                } : void 0,
                                children: [t.title, t.children && (0, g.jsx)("svg", {
                                    className: "w-[10px] h-[16px] ml-[10px]",
                                    children: (0, g.jsx)("use", {
                                        xlinkHref: "public/icons/icons.svg#arrow-right"
                                    })
                                })]
                            }), t.children && (0, g.jsxs)("div", {
                                className: "hidden group-hover/second:flex absolute top-0 right-0 left-0 min-h-[100%] flex-col z-30 bg-white shadow-xl",
                                children: [(0, g.jsxs)("div", {
                                    className: "flex-1 w-full max-w-[1600px] mx-auto px-[25px] flex",
                                    children: [(0, g.jsx)("div", {
                                        className: "flex-1"
                                    }), (0, g.jsx)("div", {
                                        className: "flex flex-col flex-1 py-[30px]",
                                        children: t.children.map((function(e) {
                                            return (0, g.jsx)(N, {
                                                page: e,
                                                setIsClicked: a
                                            }, e.id)
                                        }))
                                    }), (0, g.jsx)(L, {
                                        recommendedPages: r,
                                        item: n,
                                        setIsClicked: a
                                    })]
                                }), (0, g.jsx)(E, {})]
                            })]
                        })
                    },
                    N = function(e) {
                        var t = e.page,
                            n = e.setIsClicked,
                            r = (0, u.rd)().pathname,
                            a = y(r, t);
                        return (0, g.jsx)("a", {
                            className: "text-[13px] leading-[17px] xl:text-[14px] xl:leading-[18px] tracking-normal hover:underline py-[10px]".concat(a ? " font-bold" : ""),
                            href: t.url,
                            target: (0, d.u5)(t.url),
                            onClick: t.url ? function() {
                                return n(!0)
                            } : void 0,
                            children: t.title
                        }, t.id)
                    },
                    E = function() {
                        var e = (0, l.Bd)().t;
                        return (0, g.jsx)("div", {
                            className: "border-t border-primary-light-grey",
                            children: (0, g.jsxs)("div", {
                                className: "flex py-[20px] items-center justify-around w-full max-w-[1600px] mx-auto px-[25px]",
                                children: [(0, g.jsxs)("a", {
                                    href: "https://careers.adidas-group.com/",
                                    target: "_blank",
                                    className: "text-[14px] leading-none hover:underline flex items-baseline",
                                    rel: "noreferrer",
                                    children: [e("explore_adidas_careers"), (0, g.jsx)("svg", {
                                        className: "w-[8px] h-[8px] ml-[10px]",
                                        children: (0, g.jsx)("use", {
                                            xlinkHref: "public/icons/icons.svg#cw-functional-arrow-external"
                                        })
                                    })]
                                }), (0, g.jsxs)("a", {
                                    href: "https://www.adidasfoundation.org/",
                                    target: "_blank",
                                    className: "text-[14px] leading-none hover:underline flex items-center",
                                    rel: "noreferrer",
                                    children: [(0, g.jsx)("svg", {
                                        className: "w-[40px] h-[40px] mr-[8px]",
                                        children: (0, g.jsx)("use", {
                                            xlinkHref: "public/icons/icons.svg#adidas-foundation"
                                        })
                                    }), (0, g.jsxs)("span", {
                                        className: "inline-flex items-baseline",
                                        children: [e("explore_adidas_foundation"), (0, g.jsx)("svg", {
                                            className: "w-[8px] h-[8px] ml-[10px]",
                                            children: (0, g.jsx)("use", {
                                                xlinkHref: "public/icons/icons.svg#cw-functional-arrow-external"
                                            })
                                        })]
                                    })]
                                }), (0, g.jsxs)("a", {
                                    href: "https://www.adidas.com/",
                                    target: "_blank",
                                    className: "text-[14px] leading-none hover:underline flex items-center",
                                    rel: "noreferrer",
                                    children: [(0, g.jsx)("svg", {
                                        className: "w-[26px] h-[26px] mr-[8px] mb-[-5px]",
                                        children: (0, g.jsx)("use", {
                                            xlinkHref: "public/icons/icons.svg#logo"
                                        })
                                    }), (0, g.jsxs)("span", {
                                        className: "inline-flex items-baseline",
                                        children: [e("shop_on_adidas_com"), (0, g.jsx)("svg", {
                                            className: "w-[8px] h-[8px] ml-[10px]",
                                            children: (0, g.jsx)("use", {
                                                xlinkHref: "public/icons/icons.svg#cw-functional-arrow-external"
                                            })
                                        })]
                                    })]
                                })]
                            })
                        })
                    },
                    P = function(e) {
                        var t = e.pages,
                            n = e.magazinePage,
                            a = (0, u.rd)().basepath,
                            o = (0, s.jc)().locales,
                            l = (0, i.useState)(!1),
                            c = (0, r.A)(l, 2),
                            d = c[0],
                            f = c[1],
                            h = (0, i.useState)(!1),
                            m = (0, r.A)(h, 2),
                            v = m[0],
                            y = m[1];
                        return (0, g.jsxs)(g.Fragment, {
                            children: [(0, g.jsxs)("div", {
                                className: "bg-white h-full w-full z-[100] fixed top-0 overflow-hidden transform-gpu transition-all duration-400 menu:hidden grid grid-rows-mobile-nav ".concat(d ? "translate-x-0" : "translate-x-[-100%]"),
                                children: [(0, g.jsx)("div", {
                                    className: "bg-primary-white duration-200 ease-linear pl-[25px] pr-[12px] transition-transform translate-y-0 opacity-100 border-primary-light-grey border-solid border-b h-mobile-header box-content",
                                    children: (0, g.jsxs)("div", {
                                        className: "h-full grid justify-between grid-flow-col items-center",
                                        children: [(0, g.jsx)("div", {
                                            className: "w-[36px]"
                                        }), (0, g.jsx)("a", {
                                            href: "",
                                            onClick: function() {
                                                return f(!1), !0
                                            },
                                            children: (0, g.jsx)("img", {
                                                className: "w-[88px]",
                                                src: "public/adidas-logo.svg"
                                            })
                                        }), (0, g.jsx)("button", {
                                            onClick: function() {
                                                return f(!1)
                                            },
                                            children: (0, g.jsx)("svg", {
                                                className: "w-[24px] h-[24px]",
                                                children: (0, g.jsx)("use", {
                                                    xlinkHref: "public/icons/icons.svg#close"
                                                })
                                            })
                                        })]
                                    })
                                }), (0, g.jsx)(C, {
                                    pages: t,
                                    magazinePage: n,
                                    onLinkClick: function() {
                                        return f(!1)
                                    }
                                }), (0, g.jsx)("div", {
                                    className: "group flex items-center border-primary-light-grey border-solid border-t",
                                    children: (0, g.jsxs)("button", {
                                        className: "flex mx-[24px] font-bold whitespace-nowrap uppercase",
                                        onClick: function() {
                                            return y(!0)
                                        },
                                        children: [(0, g.jsx)("svg", {
                                            className: "w-[24px] h-[24px] mr-[10px]",
                                            children: (0, g.jsx)("use", {
                                                xlinkHref: "public/icons/icons.svg#".concat(o[0].locale)
                                            })
                                        }), o[0].name]
                                    })
                                }), v && (0, g.jsx)(p.f, {
                                    locales: o,
                                    onClose: function() {
                                        return y(!1)
                                    }
                                })]
                            }), (0, g.jsxs)("header", {
                                className: "flex menu:hidden px-[25px] sticky top-0 bg-white border-b border-primary-light-grey border-solid items-center justify-between h-[62px] z-20 transition-[top]",
                                children: [(0, g.jsx)("button", {
                                    onClick: function() {
                                        return f(!0)
                                    },
                                    children: (0, g.jsx)("svg", {
                                        className: "w-[24px] h-[24px]",
                                        viewBox: "0 0 24 24",
                                        children: (0, g.jsx)("path", {
                                            d: "M0 6h24M0 12h24M0 18h24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeMiterlimit: "10",
                                            strokeWidth: "2"
                                        })
                                    })
                                }), (0, g.jsx)("a", {
                                    className: "block",
                                    href: a,
                                    title: "home",
                                    children: (0, g.jsx)("img", {
                                        className: "w-[88px]",
                                        src: "public/adidas-logo.svg"
                                    })
                                }), (0, g.jsx)("div", {
                                    className: "w-[24px]",
                                    children: (0, g.jsx)("a", {
                                        className: "mb-[-1px] nav-item",
                                        href: "search",
                                        children: (0, g.jsx)("svg", {
                                            className: "w-[24px] h-[24px]",
                                            children: (0, g.jsx)("use", {
                                                xlinkHref: "public/icons/icons.svg#search"
                                            })
                                        })
                                    })
                                })]
                            })]
                        })
                    },
                    C = function(e) {
                        var t = e.pages,
                            n = e.magazinePage,
                            a = e.onLinkClick,
                            o = (0, l.Bd)().t,
                            s = (0, i.useState)(),
                            u = (0, r.A)(s, 2),
                            c = u[0],
                            d = u[1];
                        return (0, g.jsx)(g.Fragment, {
                            children: (0, g.jsxs)("div", {
                                className: "scrollable-content",
                                children: [(0, g.jsx)("ul", {
                                    className: "border-primary-light-grey border-solid border-b list-none pl-0 my-0",
                                    children: t.map((function(e) {
                                        return (0, g.jsxs)("li", {
                                            className: "mt-0",
                                            children: [e.url && !e.children && (0, g.jsx)("a", {
                                                className: "text-[18px] leading-[22px] tracking-[0.4px] uppercase pt-[25px] pb-[15px] w-full block px-[25px] font-bold",
                                                href: e.url,
                                                title: e.title,
                                                children: e.title
                                            }), e.children && (0, g.jsx)(z, {
                                                item: e,
                                                magazinePage: n,
                                                open: c === e.id,
                                                onLinkClick: function() {
                                                    return a()
                                                },
                                                onToggle: function(t) {
                                                    return d(t ? e.id : void 0)
                                                }
                                            })]
                                        }, "m-".concat(e.id))
                                    }))
                                }), (0, g.jsxs)("ul", {
                                    className: "pl-[25px] pr-[15px] grid gap-[40px] grid-flow-row mt-[20px] mb-0 list-none",
                                    children: [(0, g.jsx)("li", {
                                        className: "mt-0",
                                        children: (0, g.jsxs)("div", {
                                            className: "flex flex-row items-end justify-between",
                                            children: [(0, g.jsx)("a", {
                                                href: "https://careers.adidas-group.com/",
                                                target: "_blank",
                                                className: "text-[18px] leading-none hover:underline",
                                                rel: "noreferrer",
                                                children: o("explore_adidas_careers")
                                            }), (0, g.jsx)("svg", {
                                                className: "w-[11px] h-[11px]",
                                                children: (0, g.jsx)("use", {
                                                    xlinkHref: "public/icons/icons.svg#cw-functional-arrow-external"
                                                })
                                            })]
                                        })
                                    }), (0, g.jsxs)("li", {
                                        className: "mt-0",
                                        children: [(0, g.jsx)("svg", {
                                            className: "w-[48px] h-[48px]",
                                            children: (0, g.jsx)("use", {
                                                xlinkHref: "public/icons/icons.svg#adidas-foundation"
                                            })
                                        }), (0, g.jsxs)("div", {
                                            className: "flex flex-row items-end justify-between",
                                            children: [(0, g.jsx)("a", {
                                                href: "https://www.adidasfoundation.org/",
                                                target: "_blank",
                                                className: "text-[18px] leading-none hover:underline",
                                                rel: "noreferrer",
                                                children: o("explore_adidas_foundation")
                                            }), (0, g.jsx)("svg", {
                                                className: "w-[11px] h-[11px]",
                                                children: (0, g.jsx)("use", {
                                                    xlinkHref: "public/icons/icons.svg#cw-functional-arrow-external"
                                                })
                                            })]
                                        })]
                                    }), (0, g.jsxs)("li", {
                                        className: "mt-0",
                                        children: [(0, g.jsx)("svg", {
                                            className: "w-[46px] h-[46px]",
                                            children: (0, g.jsx)("use", {
                                                xlinkHref: "public/icons/icons.svg#logo"
                                            })
                                        }), (0, g.jsxs)("div", {
                                            className: "flex flex-row items-end justify-between",
                                            children: [(0, g.jsx)("a", {
                                                href: "https://www.adidas.com/",
                                                target: "_blank",
                                                className: "text-[18px] leading-none hover:underline",
                                                rel: "noreferrer",
                                                children: o("shop_on_adidas_com")
                                            }), (0, g.jsx)("svg", {
                                                className: "w-[11px] h-[11px]",
                                                children: (0, g.jsx)("use", {
                                                    xlinkHref: "public/icons/icons.svg#cw-functional-arrow-external"
                                                })
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        })
                    },
                    z = function(e) {
                        var t, n = e.item,
                            a = e.magazinePage,
                            o = e.open,
                            l = e.onToggle,
                            s = e.onLinkClick,
                            c = (0, u.rd)().pathname,
                            d = (0, i.useState)(),
                            f = (0, r.A)(d, 2),
                            p = f[0],
                            h = f[1];
                        return (0, g.jsxs)(g.Fragment, {
                            children: [(0, g.jsxs)(_, {
                                onToggle: l,
                                onLinkClick: function() {
                                    return s()
                                },
                                item: n,
                                open: o,
                                children: [(0, g.jsx)("span", {
                                    className: "inline-block",
                                    children: n.title
                                }), n.children && n.children.length > 0 && n !== a && (0, g.jsx)("svg", {
                                    className: "w-[24px] h-[24px] ".concat(o ? "rotate-[-180deg]" : "rotate-0", " transition-all duration-400"),
                                    children: (0, g.jsx)("use", {
                                        xlinkHref: "public/icons/icons.svg#arrow-down"
                                    })
                                })]
                            }), n !== a && (0, g.jsx)("div", {
                                className: "bg-primary-light-grey menu-content ".concat(o ? "open" : ""),
                                children: (0, g.jsx)("div", {
                                    className: "overflow-hidden",
                                    children: (0, g.jsx)("ul", {
                                        className: "py-[20px] overflow-hidden list-none pl-0 my-0",
                                        children: null === (t = n.children) || void 0 === t ? void 0 : t.map((function(e) {
                                            return (0, g.jsxs)("li", {
                                                className: "mt-0",
                                                children: [e.url && (0, g.jsx)("a", {
                                                    href: e.url,
                                                    title: e.title,
                                                    onClick: function() {
                                                        return s(), !0
                                                    },
                                                    className: "text-[18px] leading-[22px] tracking-[0.4px] uppercase pr-[60px] block pl-[25px] pt-[25px] pb-[15px] ".concat(y(c, e) ? "font-bold" : ""),
                                                    children: e.title
                                                }), e.children && (0, g.jsx)(T, {
                                                    item: e,
                                                    open: p === e.id,
                                                    magazinePage: a,
                                                    onLinkClick: function() {
                                                        return s()
                                                    },
                                                    onToggle: function(t) {
                                                        return h(t ? e.id : void 0)
                                                    }
                                                })]
                                            }, "m-".concat(e.id))
                                        }))
                                    })
                                })
                            })]
                        })
                    };

                function _(e) {
                    var t = e.item,
                        n = e.onToggle,
                        r = e.open,
                        a = e.children,
                        o = e.onLinkClick,
                        l = (0, i.useRef)(null);
                    (0, i.useEffect)((function() {
                        r && null != l && l.current && l.current.scrollIntoView({
                            behavior: "smooth"
                        })
                    }), [r]);
                    var s = "pl-[25px] pr-[12px] text-[18px] leading-[22px] tracking-[0.4px] uppercase pt-[25px] pb-[15px] w-full flex justify-between font-bold";
                    return void 0 !== t.url ? (0, g.jsx)("a", {
                        ref: l,
                        className: s,
                        title: t.title,
                        onClick: function() {
                            n(!r), o()
                        },
                        href: t.url,
                        children: a
                    }) : (0, g.jsx)("button", {
                        ref: l,
                        className: s,
                        title: t.title,
                        onClick: function() {
                            return n(!r)
                        },
                        children: a
                    })
                }
                var T = function(e) {
                        var t, n = e.item,
                            r = e.open,
                            a = e.onToggle,
                            o = e.onLinkClick,
                            l = (0, i.useRef)(null),
                            s = (0, u.rd)().pathname,
                            c = y(s, n);
                        return (0, i.useEffect)((function() {
                            r && l.current && l.current.scrollIntoView({
                                behavior: "smooth"
                            })
                        }), [r]), (0, g.jsxs)(g.Fragment, {
                            children: [(0, g.jsxs)("button", {
                                ref: l,
                                className: "pl-[25px] pr-[12px] text-[18px] leading-[22px] tracking-[0.4px] uppercase pt-[25px] pb-[15px] w-full flex justify-between ".concat(c ? "font-bold" : ""),
                                title: n.title,
                                onClick: function() {
                                    return a(!r)
                                },
                                children: [(0, g.jsx)("span", {
                                    className: "inline-block",
                                    children: n.title
                                }), (0, g.jsx)("svg", {
                                    className: "w-[24px] h-[24px] ".concat(r ? "rotate-[-180deg]" : "rotate-0", " transition-all duration-400"),
                                    children: (0, g.jsx)("use", {
                                        xlinkHref: "public/icons/icons.svg#arrow-down"
                                    })
                                })]
                            }), (0, g.jsx)("div", {
                                className: "menu-content ".concat(r ? "open" : ""),
                                children: (0, g.jsx)("ul", {
                                    className: "overflow-hidden list-none pl-0 my-0",
                                    children: null === (t = n.children) || void 0 === t ? void 0 : t.map((function(e) {
                                        return (0, g.jsx)("li", {
                                            className: "mt-0",
                                            children: (0, g.jsx)("a", {
                                                href: e.url,
                                                title: e.title,
                                                className: "text-[18px] leading-[22px] tracking-[0.4px] pr-[60px] block pl-[60px] pt-[25px] pb-[15px] ".concat(y(s, e) ? "font-bold" : ""),
                                                onClick: function() {
                                                    return o(), !0
                                                },
                                                children: e.title
                                            })
                                        }, "m-".concat(e.id))
                                    }))
                                })
                            })]
                        })
                    },
                    L = function(e) {
                        var t, n, r, a = e.item,
                            o = e.recommendedPages,
                            i = e.setIsClicked,
                            s = (0, l.Bd)().t,
                            u = null === (t = a.meta) || void 0 === t ? void 0 : t["recommendation:pageId"],
                            c = u ? o.find((function(e) {
                                return e.id === parseInt(u)
                            })) : null;
                        return (0, g.jsx)("div", {
                            className: "flex-1 py-[30px] px-[25px]".concat(c ? " border-l border-solid border-primary-light-grey" : ""),
                            children: c && (0, g.jsxs)("a", {
                                className: "block",
                                href: c.url,
                                target: (0, d.u5)(c.url),
                                onClick: function() {
                                    return i(!0)
                                },
                                children: [(0, g.jsx)("h4", {
                                    className: "uppercase mb-[10px]",
                                    children: s("recommendation")
                                }), (null === (n = c.meta) || void 0 === n ? void 0 : n.image) && (0, g.jsx)("div", {
                                    className: "pb-[49.2%] relative w-full bg-primary-light-grey my-[10px]",
                                    children: (0, g.jsx)("img", {
                                        src: null === (r = c.meta) || void 0 === r ? void 0 : r.image,
                                        className: "absolute w-full h-full object-cover transition-opacity"
                                    })
                                }), c.title && (0, g.jsx)("h5", {
                                    className: "mt-[4px]",
                                    children: c.title
                                }), (0, g.jsx)("span", {
                                    className: "link",
                                    children: s("read_more")
                                })]
                            })
                        })
                    }
            },
            2060: (e, t, n) => {
                "use strict";
                n.d(t, {
                    e: () => i
                });
                var r = n(2061),
                    a = n(4041),
                    o = n(1085),
                    i = function(e) {
                        var t = e.delayLoader,
                            n = (0, a.useState)(!t),
                            i = (0, r.A)(n, 2),
                            l = i[0],
                            s = i[1];
                        return (0, a.useEffect)((function() {
                            if (t) {
                                var e = setTimeout((function() {
                                    s(!0)
                                }), 1e3);
                                return function() {
                                    return clearTimeout(e)
                                }
                            }
                            s(!0)
                        }), [t]), l ? (0, o.jsx)("div", {
                            className: "w-full",
                            children: (0, o.jsx)("div", {
                                className: "loader mx-auto my-[30px]"
                            })
                        }) : null
                    }
            },
            3284: (e, t, n) => {
                "use strict";
                n.d(t, {
                    UR: () => s,
                    ef: () => l,
                    l7: () => i
                });
                var r = n(4619);

                function a(e, t) {
                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!n) {
                        if (Array.isArray(e) || (n = function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return o(e, t);
                                    var n = {}.toString.call(e).slice(8, -1);
                                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
                                }
                            }(e)) || t && e && "number" == typeof e.length) {
                            n && (e = n);
                            var r = 0,
                                a = function() {};
                            return {
                                s: a,
                                n: function() {
                                    return r >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[r++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: a
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var i, l = !0,
                        s = !1;
                    return {
                        s: function() {
                            n = n.call(e)
                        },
                        n: function() {
                            var e = n.next();
                            return l = e.done, e
                        },
                        e: function(e) {
                            s = !0, i = e
                        },
                        f: function() {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                    }
                }

                function o(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r
                }
                var i = function e(t, n, o, i) {
                        var l, s = a(n);
                        try {
                            for (s.s(); !(l = s.n()).done;) {
                                var u = l.value;
                                if (u.id === t) return i && o.push(u), o;
                                if (u.children) {
                                    var c = e(t, u.children, [].concat((0, r.A)(o), [u]), i);
                                    if (c) return c
                                }
                            }
                        } catch (e) {
                            s.e(e)
                        } finally {
                            s.f()
                        }
                        return null
                    },
                    l = function(e, t) {
                        var n;
                        if (null !== (n = e.meta) && void 0 !== n && n.label) return e.meta.label;
                        var r = i(e.id, t, []);
                        return null != r && r.length ? r[0].title : void 0
                    },
                    s = function e(t, n) {
                        var r, o = a(t);
                        try {
                            for (o.s(); !(r = o.n()).done;) {
                                var i = r.value;
                                if (i.url === n) return i;
                                if (i.children) {
                                    var l = e(i.children, n);
                                    if (l) return l
                                }
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                        return null
                    }
            },
            9618: (e, t, n) => {
                "use strict";

                function r(e) {
                    var t = e.scrollWidth,
                        n = e.offsetWidth,
                        r = Math.ceil(t / n);
                    return isNaN(r) || r < 0 ? 0 : r
                }

                function a(e, t) {
                    var n = e.scrollWidth,
                        a = e.offsetWidth,
                        o = e.scrollLeft;
                    if (void 0 === t && (t = r(e)), t <= 0) return 0;
                    var i = o / (n - a);
                    if (i <= 0) return 0;
                    if (i >= 1) return t - 1;
                    var l = 1 / t;
                    return Math.floor(i / l)
                }
                n.d(t, {
                    Z: () => r,
                    f: () => a
                })
            },
            7177: (e, t, n) => {
                "use strict";
                n.d(t, {
                    J: () => r
                });
                var r = {
                    getCookie: function(e) {
                        for (var t = e + "=", n = decodeURIComponent(document.cookie).split(";"), r = 0; r < n.length; r++) {
                            for (var a = n[r];
                                " " == a.charAt(0);) a = a.substring(1);
                            if (0 == a.indexOf(t)) return a.substring(t.length, a.length)
                        }
                    },
                    setCookie: function(e, t, n) {
                        var r = new Date;
                        r.setTime(r.getTime() + n);
                        var a = "expires=" + r.toUTCString();
                        document.cookie = e + "=" + t + ";" + a + ";path=/"
                    }
                }
            },
            3313: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Ez: () => p,
                    M9: () => f,
                    bP: () => u
                });
                var r = n(6330),
                    a = n(2061),
                    o = n(5799),
                    i = n.n(o),
                    l = n(4041),
                    s = n(1085),
                    u = function(e) {
                        return e[e.Default = 0] = "Default", e[e.Url = 1] = "Url", e[e.Pathname = 2] = "Pathname", e[e.Duration = 3] = "Duration", e[e.DurationPathname = 4] = "DurationPathname", e
                    }({}),
                    c = (0, l.createContext)(null),
                    d = "undefined" == typeof window,
                    f = function(e) {
                        var t = e.children,
                            n = e.data,
                            o = e.defaultFetcher,
                            f = e.staticTemplates,
                            p = e.getCookie,
                            h = e.locale,
                            m = e.lazyComponents,
                            g = e.origin,
                            v = e.environment,
                            y = (0, l.useState)((function() {
                                return {}
                            })),
                            b = (0, a.A)(y, 1)[0],
                            x = (0, l.useCallback)((function(e, t) {
                                var a = n[e];
                                if (!a) {
                                    var l, s = null !== (l = null == t ? void 0 : t.fetcher) && void 0 !== l ? l : o;
                                    a = {
                                        promise: s.fetchData(e, null == t ? void 0 : t.init),
                                        cacheType: null == t ? void 0 : t.cacheType,
                                        cacheDuration: null == t ? void 0 : t.cacheDuration,
                                        pathname: d ? void 0 : window.location.pathname
                                    }, n[e] = a, (0, r.A)(i().mark((function t() {
                                        var r;
                                        return i().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.prev = 0, t.next = 3, a.promise;
                                                case 3:
                                                    a.value = t.sent, t.next = 9;
                                                    break;
                                                case 6:
                                                    t.prev = 6, t.t0 = t.catch(0), a.error = t.t0;
                                                case 9:
                                                    a.promise = void 0, a.timeout && (clearTimeout(a.timeout), delete a.timeout), a.cacheType !== u.Duration && a.cacheType !== u.DurationPathname || d || n[e] !== a || (a.timeout = setTimeout((function() {
                                                        a.cacheType === u.Duration && delete n[e], delete a.timeout
                                                    }), null !== (r = a.cacheDuration) && void 0 !== r ? r : 6e4));
                                                case 12:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t, null, [
                                            [0, 6]
                                        ])
                                    })))()
                                }
                                return a
                            }), [n, o]),
                            w = (0, l.useCallback)((function(e, t) {
                                var n = b[e];
                                return n || (n = {
                                    promise: t()
                                }, b[e] = n, (0, r.A)(i().mark((function e() {
                                    return i().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, n.promise;
                                            case 3:
                                                n.value = e.sent, e.next = 9;
                                                break;
                                            case 6:
                                                e.prev = 6, e.t0 = e.catch(0), n.error = e.t0;
                                            case 9:
                                                n.promise = void 0;
                                            case 10:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 6]
                                    ])
                                })))()), n
                            }), [b]),
                            k = (0, l.useCallback)((function(e) {
                                var t = n[e];
                                t && (t.timeout && (clearTimeout(t.timeout), delete t.timeout), delete n[e])
                            }), [n]);
                        (0, l.useEffect)((function() {
                            var e = window.location.pathname;
                            Object.entries(n).forEach((function(t) {
                                var r, o = (0, a.A)(t, 2),
                                    i = o[0],
                                    l = o[1];
                                l.cacheType !== u.Duration && l.cacheType !== u.DurationPathname || l.timeout || (l.timeout = setTimeout((function() {
                                    l.cacheType === u.Duration && delete n[i], delete l.timeout
                                }), null !== (r = l.cacheDuration) && void 0 !== r ? r : 6e4));
                                l.cacheType !== u.Pathname && l.cacheType !== u.DurationPathname || l.pathname || (l.pathname = e)
                            }));
                            var t = function() {
                                e = window.location.pathname, Object.entries(n).forEach((function(t) {
                                    var r = (0, a.A)(t, 2),
                                        o = r[0],
                                        i = r[1];
                                    (i.error || i.cacheType === u.Url || i.cacheType === u.Pathname && e !== i.pathname || i.cacheType === u.DurationPathname && !i.timeout && e !== i.pathname) && (i.timeout && (clearTimeout(i.timeout), delete i.timeout), delete n[o])
                                })), Object.entries(b).forEach((function(e) {
                                    var t = (0, a.A)(e, 2),
                                        n = t[0];
                                    t[1].error && delete b[n]
                                }))
                            };
                            return window.addEventListener("popstate", t), window.addEventListener("router:pushState", t),
                                function() {
                                    window.removeEventListener("popstate", t), window.removeEventListener("router:pushState", t)
                                }
                        }), [n, b]);
                        var S = {
                            staticTemplates: f,
                            fetchData: x,
                            lazyImport: w,
                            clearCache: k,
                            getCookie: p,
                            locale: h,
                            lazyComponents: m,
                            origin: g,
                            environment: v
                        };
                        return (0, s.jsx)(c.Provider, {
                            value: S,
                            children: t
                        })
                    },
                    p = function() {
                        return (0, l.useContext)(c)
                    }
            },
            3536: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Ez: () => r.Ez,
                    M9: () => r.M9,
                    bP: () => r.bP
                });
                var r = n(3313)
            },
            6714: (e, t, n) => {
                "use strict";
                n.d(t, {
                    u: () => h,
                    O: () => p
                });
                var r = n(414),
                    a = n(5152),
                    o = n(705),
                    i = n(2715),
                    l = n(9296),
                    s = n(1087);

                function u() {
                    try {
                        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                    } catch (e) {}
                    return (u = function() {
                        return !!e
                    })()
                }

                function c(e) {
                    var t = "function" == typeof Map ? new Map : void 0;
                    return c = function(e) {
                        if (null === e || ! function(e) {
                                try {
                                    return -1 !== Function.toString.call(e).indexOf("[native code]")
                                } catch (t) {
                                    return "function" == typeof e
                                }
                            }(e)) return e;
                        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== t) {
                            if (t.has(e)) return t.get(e);
                            t.set(e, n)
                        }

                        function n() {
                            return function(e, t, n) {
                                if (u()) return Reflect.construct.apply(null, arguments);
                                var r = [null];
                                r.push.apply(r, t);
                                var a = new(e.bind.apply(e, r));
                                return n && (0, s.A)(a, n.prototype), a
                            }(e, arguments, (0, i.A)(this).constructor)
                        }
                        return n.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: n,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), (0, s.A)(n, e)
                    }, c(e)
                }

                function d(e, t, n) {
                    return t = (0, i.A)(t), (0, o.A)(e, f() ? Reflect.construct(t, n || [], (0, i.A)(e).constructor) : t.apply(e, n))
                }

                function f() {
                    try {
                        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                    } catch (e) {}
                    return (f = function() {
                        return !!e
                    })()
                }
                var p = function(e) {
                        return e[e.NotFound = 0] = "NotFound", e[e.Unhandled = 1] = "Unhandled", e[e.Eqs = 2] = "Eqs", e[e.AdidasNews = 3] = "AdidasNews", e[e.Olapic = 4] = "Olapic", e
                    }({}),
                    h = function(e) {
                        function t(e, n) {
                            var r;
                            return (0, a.A)(this, t), (r = d(this, t, [n])).code = e, r
                        }
                        return (0, l.A)(t, e), (0, r.A)(t)
                    }(c(Error))
            },
            5462: (e, t, n) => {
                "use strict";
                n.d(t, {
                    d7: () => o,
                    st: () => s,
                    B4: () => j,
                    _P: () => u,
                    tb: () => d,
                    jc: () => f,
                    p$: () => g,
                    ly: () => v,
                    Qd: () => y,
                    yE: () => w,
                    SQ: () => k,
                    j9: () => S
                });
                var r = n(2061),
                    a = n(4041);

                function o(e, t) {
                    var n = (0, a.useState)(e),
                        o = (0, r.A)(n, 2),
                        i = o[0],
                        l = o[1];
                    return (0, a.useEffect)((function() {
                        var n = setTimeout((function() {
                            return l(e)
                        }), t || 500);
                        return function() {
                            clearTimeout(n)
                        }
                    }), [e, t]), i
                }
                var i = n(3536),
                    l = n(3415),
                    s = function(e, t) {
                        var n = (0, i.Ez)(),
                            o = n.fetchData,
                            s = n.clearCache,
                            u = (0, a.useState)(),
                            c = (0, r.A)(u, 2)[1],
                            d = (0, a.useCallback)((function() {
                                return c({})
                            }), []),
                            f = e;
                        null != t && t.query && (f = (0, l.D)(f, t.query));
                        var p = o(f, {
                            cacheType: null == t ? void 0 : t.cacheType,
                            cacheDuration: null == t ? void 0 : t.cacheDuration
                        });
                        if (void 0 !== p.promise) throw p.promise;
                        if (p.error) throw p.error;
                        return {
                            value: p.value,
                            reload: function() {
                                s(f), d()
                            }
                        }
                    };

                function u(e) {
                    var t = (0, i.Ez)().lazyComponents;
                    t && !t.includes(e) && t.push(e)
                }
                var c = n(3313);

                function d(e, t) {
                    var n = (0, c.Ez)().lazyImport;
                    u(e);
                    var r = n(e, t);
                    if (void 0 !== r.promise) throw r.promise;
                    if (r.error) throw r.error;
                    return r.value
                }
                var f = function() {
                        var e = s("api/v1/locales");
                        return {
                            locales: e.value,
                            reload: e.reload
                        }
                    },
                    p = n(4586);

                function h(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function m(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? h(Object(n), !0).forEach((function(t) {
                            (0, p.A)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var g = function(e, t) {
                        var n = s("api/v1/news", {
                                query: {
                                    tag: e,
                                    year: null == t ? void 0 : t.year,
                                    month: null == t ? void 0 : t.month,
                                    page: null == t ? void 0 : t.page,
                                    count: null == t ? void 0 : t.count,
                                    dateTo: null == t ? void 0 : t.dateTo,
                                    dateFrom: null == t ? void 0 : t.dateFrom,
                                    sort: null == t ? void 0 : t.sort,
                                    includeTotal: null != t && t.includeTotal ? 1 : void 0,
                                    locale: null == t ? void 0 : t.locale
                                },
                                cacheType: i.bP.DurationPathname
                            }),
                            r = n.value,
                            a = n.reload;
                        return m(m({}, r), {}, {
                            reload: a
                        })
                    },
                    v = function(e, t) {
                        var n = s("api/v1/news/years", {
                            query: {
                                tag: e,
                                locale: t
                            },
                            cacheType: i.bP.DurationPathname
                        });
                        return {
                            tagYears: n.value,
                            reload: n.reload
                        }
                    },
                    y = function(e) {
                        var t = s("api/v1/pages", {
                            query: e
                        });
                        return {
                            pages: t.value,
                            reload: t.reload
                        }
                    },
                    b = "undefined" == typeof window,
                    x = !0,
                    w = function(e, t, n) {
                        b || (0, a.useLayoutEffect)((function() {
                            if (x) x = !1;
                            else if (n) {
                                var e = n();
                                void 0 !== e && window.scrollTo(0, e)
                            } else window.location.hash || window.scrollTo(0, 0)
                        }), [e, t, n])
                    },
                    k = function(e, t) {
                        var n = s("api/v1/search", {
                            query: {
                                q: e,
                                tag: t
                            },
                            cacheType: i.bP.Pathname
                        });
                        return {
                            pages: n.value,
                            reload: n.reload
                        }
                    },
                    S = function(e) {
                        var t = s("api/v1/url", {
                            query: {
                                path: e
                            },
                            cacheType: i.bP.DurationPathname
                        });
                        return {
                            page: t.value,
                            reload: t.reload
                        }
                    };

                function j(e, t) {
                    var n = (0, a.useState)(!1),
                        o = (0, r.A)(n, 2),
                        i = o[0],
                        l = o[1];
                    return (0, a.useEffect)((function() {
                        if (e) {
                            var n = new IntersectionObserver((function(e) {
                                var t = (0, r.A)(e, 1)[0];
                                l(t.isIntersecting)
                            }), t);
                            return n.observe(e),
                                function() {
                                    return n.disconnect()
                                }
                        }
                    }), [t, e]), i
                }
            },
            463: (e, t, n) => {
                "use strict";
                n.d(t, {
                    DO: () => c,
                    qh: () => g,
                    dO: () => b,
                    rd: () => p,
                    ok: () => x
                });
                var r = n(2061),
                    a = n(4041),
                    o = n(3415),
                    i = (0, a.createContext)(null),
                    l = function(e, t) {
                        var n;
                        e.startsWith("/") && (e = e.substring(1));
                        for (var r = "".concat(null !== (n = t.parentRoutePath) && void 0 !== n ? n : "", "/").concat(e), a = "/" === r ? [] : r.substring(1).split("/"), o = {}, i = 0; i < a.length; ++i) {
                            var l = a[i];
                            if ("*" === l) {
                                var s = t.segments.slice(i).join("/");
                                o["*"] = s ? decodeURIComponent("/".concat(s)) : "", r = r.substring(0, r.length - 2);
                                break
                            }
                            if (i >= t.segments.length) return;
                            var u = t.segments[i];
                            if (l.startsWith(":")) o[l.substring(1)] = decodeURIComponent(u);
                            else if (l !== u) return
                        }
                        if (i === t.segments.length || o["*"]) return {
                            routePath: r,
                            params: o
                        }
                    },
                    s = function(e, t, n, r) {
                        for (var a; t.endsWith("/");) t = t.substring(0, t.length - 1);
                        if (r && (r.endsWith("/") && (r = r.substring(0, r.length - 1)), t.startsWith(r)))
                            for (t = t.substring(r.length); t.endsWith("/");) t = t.substring(0, t.length - 1);
                        var o = "" === t ? [] : t.substring(1).split("/");
                        return {
                            navigate: e,
                            basepath: null !== (a = r) && void 0 !== a ? a : "",
                            pathname: t,
                            segments: o,
                            search: n,
                            params: {}
                        }
                    },
                    u = n(1085),
                    c = function(e) {
                        var t = e.children,
                            n = e.basepath,
                            l = e.onAnchorClick,
                            c = (0, a.useCallback)((function(e, t) {
                                var r = "".concat(window.location.origin).concat(n).concat(e);
                                null != t && t.query && (r = (0, o.D)(r, t.query)), history.pushState(null, "", r), h(s(c, location.pathname, location.search, n)), window.dispatchEvent(new Event("router:pushState"))
                            }), [n]),
                            d = (0, a.useState)((function() {
                                return s(c, location.pathname, location.search, n)
                            })),
                            f = (0, r.A)(d, 2),
                            p = f[0],
                            h = f[1];
                        return (0, a.useEffect)((function() {
                            var e = function() {
                                    h(s(c, location.pathname, location.search, n))
                                },
                                t = function(e) {
                                    for (var t = e.target; t;) {
                                        if ("A" === t.tagName) {
                                            null == l || l(t);
                                            var r = t.getAttribute("href"),
                                                a = t.href;
                                            if (!e.shiftKey && a && (a.startsWith("".concat(window.location.origin).concat(n || "")) || "".concat(a, "/") === "".concat(window.location.origin).concat(n || "")) && (null == r || !r.trim().match(/^[a-zA-Z]*:\/\/.*/)) && !t.dataset.ignore && !t.target) {
                                                e.preventDefault(), history.pushState(null, "", a), h(s(c, location.pathname, location.search, n)), window.dispatchEvent(new Event("router:pushState"));
                                                break
                                            }
                                        }
                                        t = t.parentNode
                                    }
                                };
                            return window.addEventListener("popstate", e), window.addEventListener("click", t),
                                function() {
                                    window.removeEventListener("popstate", e), window.removeEventListener("click", t)
                                }
                        }), [n, c, l]), (0, u.jsx)(i.Provider, {
                            value: p,
                            children: t
                        })
                    },
                    d = n(7545),
                    f = n(4586),
                    p = function() {
                        return (0, a.useContext)(i)
                    };

                function h(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function m(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? h(Object(n), !0).forEach((function(t) {
                            (0, f.A)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var g = function(e) {
                    var t = e.path,
                        n = e.children,
                        r = p(),
                        a = l(t, r);
                    if (a) {
                        var o = m(m({}, r), {}, {
                            parentRoutePath: a.routePath,
                            params: a.params
                        });
                        return (0, u.jsx)(i.Provider, {
                            value: o,
                            children: n
                        })
                    }
                };

                function v(e, t) {
                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!n) {
                        if (Array.isArray(e) || (n = function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return y(e, t);
                                    var n = {}.toString.call(e).slice(8, -1);
                                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(e, t) : void 0
                                }
                            }(e)) || t && e && "number" == typeof e.length) {
                            n && (e = n);
                            var r = 0,
                                a = function() {};
                            return {
                                s: a,
                                n: function() {
                                    return r >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[r++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: a
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var o, i = !0,
                        l = !1;
                    return {
                        s: function() {
                            n = n.call(e)
                        },
                        n: function() {
                            var e = n.next();
                            return i = e.done, e
                        },
                        e: function(e) {
                            l = !0, o = e
                        },
                        f: function() {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                    }
                }

                function y(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r
                }(0, d.A)(g);
                var b = function(e) {
                        var t, n = e.children,
                            r = p(),
                            o = v(a.Children.toArray(n));
                        try {
                            for (o.s(); !(t = o.n()).done;) {
                                var i = t.value;
                                if (i.type == g) {
                                    var s = i.props.path;
                                    if (l(s, r)) return i
                                }
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                    },
                    x = function() {
                        var e = p(),
                            t = e.navigate,
                            n = e.pathname,
                            r = p().search;
                        return {
                            searchParams: new URLSearchParams(r),
                            applySearchParams: function(e) {
                                var r = e.toString();
                                r && (r = "?".concat(r)), t("".concat(n.substring(1)).concat(r))
                            }
                        }
                    }
            },
            3912: (e, t, n) => {
                "use strict";
                n.d(t, {
                    M: () => p
                });
                var r = n(5152),
                    a = n(414),
                    o = n(705),
                    i = n(2715),
                    l = n(9296),
                    s = n(4041);

                function u(e, t, n) {
                    return t = (0, i.A)(t), (0, o.A)(e, c() ? Reflect.construct(t, n || [], (0, i.A)(e).constructor) : t.apply(e, n))
                }

                function c() {
                    try {
                        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                    } catch (e) {}
                    return (c = function() {
                        return !!e
                    })()
                }
                var d = function(e) {
                        function t(e) {
                            var n;
                            return (0, r.A)(this, t), (n = u(this, t, [e])).state = {
                                error: null
                            }, n
                        }
                        return (0, l.A)(t, e), (0, a.A)(t, [{
                            key: "render",
                            value: function() {
                                return this.state.error ? this.props.fallback({
                                    error: this.state.error
                                }) : this.props.children
                            }
                        }], [{
                            key: "getDerivedStateFromError",
                            value: function(e) {
                                return {
                                    error: e
                                }
                            }
                        }])
                    }(s.Component),
                    f = n(1085),
                    p = function(e) {
                        var t = e.loadingFallback,
                            n = e.errorFallback,
                            r = e.children;
                        return (0, f.jsx)(d, {
                            fallback: n,
                            children: (0, f.jsx)(s.Suspense, {
                                fallback: t,
                                children: r
                            })
                        })
                    }
            },
            3415: (e, t, n) => {
                "use strict";
                n.d(t, {
                    D: () => a
                });
                var r = n(2061),
                    a = function(e, t) {
                        var n = new URLSearchParams;
                        Object.entries(t).forEach((function(e) {
                            var t = (0, r.A)(e, 2),
                                a = t[0],
                                o = t[1];
                            Array.isArray(o) ? o.forEach((function(e) {
                                void 0 !== e && n.append(a, e.toString())
                            })) : void 0 !== o && n.append(a, o.toString())
                        }));
                        var a = n.toString();
                        return a ? "".concat(e).concat(e.includes("?") ? "&" : "?").concat(a) : e
                    }
            },
            6335: (e, t, n) => {
                "use strict";
                n.d(t, {
                    ow: () => f,
                    f7: () => y,
                    Sh: () => v,
                    WN: () => E,
                    XW: () => O,
                    Yq: () => m,
                    Lk: () => g,
                    DT: () => C,
                    io: () => a,
                    rK: () => p,
                    MQ: () => h,
                    y0: () => j,
                    u5: () => S,
                    IQ: () => k,
                    bn: () => s,
                    wu: () => u,
                    cZ: () => c,
                    sQ: () => d,
                    zP: () => z,
                    UV: () => o
                });
                var r = n(7177);

                function a(e) {
                    var t = r.J.getCookie(e);
                    if (t) try {
                        return JSON.parse(t)
                    } catch (e) {
                        console.error(e)
                    }
                    return null
                }

                function o(e, t, n) {
                    r.J.setCookie(e, JSON.stringify(t), n), window.dispatchEvent(new Event("consents:change"))
                }
                var i = [".mp4", ".mov", ".avi", ".flv", ".wmv", ".mkv", ".webm"],
                    l = [".jpg", ".jpeg", ".svg", ".webp", ".gif", ".png", ".avif"];

                function s(e) {
                    if (void 0 === e) return "";
                    var t = 0 == e ? 0 : Math.floor(Math.log(e) / Math.log(1024));
                    return "".concat((e / Math.pow(1024, t)).toFixed(2), " ").concat(["B", "kB", "MB", "GB", "TB"][t])
                }

                function u(e) {
                    return !!e && !!l.filter((function(t) {
                        return e.includes(t)
                    })).length
                }

                function c(e) {
                    return !!e && !!i.filter((function(t) {
                        return e.includes(t)
                    })).length
                }

                function d(e) {
                    return !!e && (!e.paused && !e.ended && e.currentTime > 0 && e.readyState > 2)
                }
                var f = function(e) {
                    return e.Short = "short", e.Long = "long", e.LongWeekday = "long-weekday", e
                }({});

                function p() {
                    var e = new Date;
                    return new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()))
                }

                function h() {
                    return p().toISOString()
                }

                function m(e, t, n) {
                    if (!t) return "";
                    switch (n) {
                        case f.Short:
                            return new Intl.DateTimeFormat(e, {
                                year: "numeric",
                                month: "short",
                                day: "2-digit",
                                timeZone: "Europe/Berlin"
                            }).format(new Date(t));
                        case f.LongWeekday:
                            return new Intl.DateTimeFormat(e, {
                                year: "numeric",
                                month: "long",
                                day: "2-digit",
                                weekday: "short",
                                timeZone: "Europe/Berlin"
                            }).format(new Date(t));
                        case f.Long:
                        default:
                            return new Intl.DateTimeFormat(e, {
                                dateStyle: "long",
                                timeZone: "Europe/Berlin"
                            }).format(new Date(t))
                    }
                }

                function g(e, t, n, r) {
                    if (!t) return "";
                    var a = m(e, t, r);
                    if (n) {
                        var o = m(e, n, r);
                        return "".concat(a, " - ").concat(o)
                    }
                    return a
                }

                function v(e, t, n, r, a) {
                    var o, i;
                    return c(e) ? (i = void 0 !== t && void 0 !== n ? "$w_".concat(t, ",$h_").concat(n, "/if_$w_gt_w,$w_w/if_$h_gt_h,$h_h/c_fill,w_$w,h_$h") : void 0 !== t ? "$w_".concat(t, "/if_$w_gt_w,$w_w/c_fill,w_$w") : void 0 !== n ? "$h_".concat(n, "/if_$h_gt_h,$h_h/c_fill,h_$h") : "c_fill", null !== (o = e) && void 0 !== o && o.endsWith(".mov") && (e = "".concat(e.substring(0, e.length - 3), "mp4")), y(e, "".concat(i).concat(r ? ",ar_".concat(r) : "").concat(a ? ",".concat(a) : ""))) : y(e, "c_lfill".concat(void 0 !== t ? ",w_".concat(t) : "").concat(void 0 !== n ? ",h_".concat(n) : "").concat(r ? ",ar_".concat(r) : "").concat(a ? ",".concat(a) : ""))
                }

                function y(e, t) {
                    if (null == e || !e.includes("res.cloudinary.com/")) return e;
                    var n = e.indexOf("/upload/");
                    return -1 === n ? e : (n += 8, "".concat(e.substring(0, n)).concat(t, "/").concat(e.substring(n)))
                }
                var b = n(6330),
                    x = n(5799),
                    w = n.n(x),
                    k = function(e) {
                        var t;
                        return void 0 !== (null === (t = e.meta) || void 0 === t ? void 0 : t["external:url"]) ? "_blank" : void 0
                    },
                    S = function(e) {
                        if (e && (e.startsWith("http://") || e.startsWith("https://"))) return "_blank"
                    },
                    j = function(e) {
                        if (e && (e.startsWith("http://") || e.startsWith("https://"))) return "noreferrer"
                    },
                    O = function(e) {
                        if (e.startsWith("http://") || e.startsWith("https://")) try {
                            var t = new URL(e).hostname;
                            return t.startsWith("www.") && (t = t.substring(4)), t
                        } catch (e) {}
                        return ""
                    };

                function N(e) {
                    var t = e.lastIndexOf("/");
                    return -1 !== t ? e.substring(t + 1) : e
                }

                function E(e) {
                    return P.apply(this, arguments)
                }

                function P() {
                    return (P = (0, b.A)(w().mark((function e(t) {
                        var n, r, a, o, i;
                        return w().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = t.currentTarget.href) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    return t.preventDefault(), e.prev = 4, e.next = 7, fetch(n);
                                case 7:
                                    return r = e.sent, e.next = 10, r.blob();
                                case 10:
                                    a = e.sent, o = URL.createObjectURL(a), (i = document.createElement("a")).href = o, i.download = N(n), document.body.appendChild(i), i.dataset.ignore = "true", i.click(), i.remove(), e.next = 24;
                                    break;
                                case 21:
                                    e.prev = 21, e.t0 = e.catch(4), console.error(e.t0);
                                case 24:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [4, 21]
                        ])
                    })))).apply(this, arguments)
                }

                function C(e, t) {
                    var n;
                    if (S(t.url)) return "";
                    var r = null == e ? void 0 : e.find((function(e) {
                        return e.locale === t.locale
                    }));
                    return null !== (n = null == r ? void 0 : r.basepath) && void 0 !== n ? n : ""
                }

                function z() {
                    for (var e, t = "", n = 0; n < arguments.length; n++)(e = n < 0 || arguments.length <= n ? void 0 : arguments[n]) && "string" == typeof e && (t += (t && " ") + e);
                    return t
                }
            },
            2558: (e, t, n) => {
                "use strict";
                n.d(t, {
                    b8: () => S,
                    je: () => f,
                    aJ: () => l,
                    $w: () => N,
                    _A: () => z,
                    JK: () => L,
                    Qq: () => i
                });
                var r = n(4041),
                    a = n(4619),
                    o = (0, r.createContext)(null),
                    i = function() {
                        return (0, r.useContext)(o)
                    },
                    l = function(e) {
                        var t = e.item,
                            n = e.parentModels,
                            r = e.parentItem,
                            o = i(),
                            l = t.model ? [t.model].concat((0, a.A)(n)) : n,
                            s = o.plugins.find((function(e) {
                                return e.type === t.type
                            }));
                        return (null == s ? void 0 : s.render({
                            item: t,
                            models: l,
                            parentItem: r
                        })) || null
                    },
                    s = n(1085),
                    u = function(e) {
                        var t = e.value,
                            n = e.children;
                        return (0, s.jsx)(o.Provider, {
                            value: t,
                            children: n
                        })
                    };

                function c(e, t) {
                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!n) {
                        if (Array.isArray(e) || (n = function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return d(e, t);
                                    var n = {}.toString.call(e).slice(8, -1);
                                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0
                                }
                            }(e)) || t && e && "number" == typeof e.length) {
                            n && (e = n);
                            var r = 0,
                                a = function() {};
                            return {
                                s: a,
                                n: function() {
                                    return r >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[r++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: a
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var o, i = !0,
                        l = !1;
                    return {
                        s: function() {
                            n = n.call(e)
                        },
                        n: function() {
                            var e = n.next();
                            return i = e.done, e
                        },
                        e: function(e) {
                            l = !0, o = e
                        },
                        f: function() {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                    }
                }

                function d(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r
                }
                var f = function(e) {
                        var t, n = e.content,
                            a = e.plugins,
                            i = e.attachItemId,
                            c = e.models,
                            d = (0, r.useContext)(o),
                            f = {
                                content: n,
                                plugins: a,
                                attachItemId: i,
                                getProp: m,
                                getModelValue: h
                            },
                            p = (0, s.jsx)(s.Fragment, {
                                children: null === (t = n.layout) || void 0 === t ? void 0 : t.map((function(e) {
                                    return (0, s.jsx)(l, {
                                        item: e,
                                        parentItem: null,
                                        parentModels: c || []
                                    }, e.id)
                                }))
                            });
                        return d ? p : (0, s.jsx)(u, {
                            value: f,
                            children: p
                        })
                    },
                    p = /\${(.+?)}/g,
                    h = function(e, t) {
                        var n, r = c(t);
                        try {
                            for (r.s(); !(n = r.n()).done;) {
                                var a, o = n.value,
                                    i = e.split("."),
                                    l = o,
                                    s = c(i);
                                try {
                                    for (s.s(); !(a = s.n()).done;) {
                                        if (void 0 === (l = l[a.value])) break
                                    }
                                } catch (e) {
                                    s.e(e)
                                } finally {
                                    s.f()
                                }
                                if (void 0 !== l) return l
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                    },
                    m = function(e, t, n) {
                        var r = e[t];
                        return "string" == typeof r && (r = r.replace(p, (function(e, t) {
                            var r;
                            return null !== (r = h(t, n)) && void 0 !== r ? r : ""
                        }))), r
                    },
                    g = n(5152),
                    v = n(414),
                    y = n(4586);

                function b(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function x(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? b(Object(n), !0).forEach((function(t) {
                            (0, y.A)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var w = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"],
                    k = function(e) {
                        var t, n = e.item,
                            a = e.models,
                            o = i(),
                            u = o.getProp(n, "$tag", a),
                            c = o.getProp(n, "$className", a),
                            d = o.getProp(n, "$attrs", a),
                            f = o.getProp(n, "$style", a);
                        return u ? (0, r.createElement)(u, x({
                            className: c,
                            style: f,
                            "data-id": o.attachItemId ? n.id : void 0
                        }, d), w.includes(u) || null === (t = n.children) || void 0 === t ? void 0 : t.map((function(e) {
                            return (0, s.jsx)(l, {
                                item: e,
                                parentModels: a,
                                parentItem: n
                            }, e.id)
                        }))) : null
                    },
                    S = function() {
                        return (0, v.A)((function e() {
                            (0, g.A)(this, e), (0, y.A)(this, "type", "html")
                        }), [{
                            key: "render",
                            value: function(e) {
                                return (0, s.jsx)(k, x({}, e))
                            }
                        }])
                    }();

                function j(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }
                var O = function(e) {
                        var t = e.item,
                            n = e.models,
                            r = i(),
                            a = r.getProp(t, "$className", n),
                            o = r.getProp(t, "$style", n),
                            l = r.getProp(t, "$html", n);
                        return l ? (0, s.jsx)("div", {
                            className: a,
                            style: o,
                            "data-id": r.attachItemId ? t.id : void 0,
                            dangerouslySetInnerHTML: {
                                __html: l
                            }
                        }) : null
                    },
                    N = function() {
                        return (0, v.A)((function e() {
                            (0, g.A)(this, e), (0, y.A)(this, "type", "richtext")
                        }), [{
                            key: "render",
                            value: function(e) {
                                return (0, s.jsx)(O, function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? j(Object(n), !0).forEach((function(t) {
                                            (0, y.A)(e, t, n[t])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach((function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                        }))
                                    }
                                    return e
                                }({}, e))
                            }
                        }])
                    }();

                function E(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function P(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? E(Object(n), !0).forEach((function(t) {
                            (0, y.A)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var C = function(e) {
                        var t = e.item,
                            n = e.models,
                            r = e.pluginConfig,
                            a = e.parentItem,
                            o = i(),
                            u = o.getProp(t, "$templateId", n);
                        if (!u) return null;
                        var c = r.templates[u];
                        return c ? "dynamic" === c.type ? (0, s.jsxs)(s.Fragment, {
                            children: [o.attachItemId && (0, s.jsx)("span", {
                                className: "latte-comment",
                                "data-tid": t.id
                            }), c.layout.map((function(e) {
                                return (0, s.jsx)(l, {
                                    item: e,
                                    parentModels: n,
                                    parentItem: t
                                }, e.id)
                            })), o.attachItemId && (0, s.jsx)("span", {
                                className: "latte-comment",
                                "data-tid-end": !0
                            })]
                        }) : (0, s.jsxs)(s.Fragment, {
                            children: [o.attachItemId && (0, s.jsx)("span", {
                                className: "latte-comment",
                                "data-tid": t.id
                            }), c.render({
                                item: t,
                                models: n,
                                parentItem: a
                            }), o.attachItemId && (0, s.jsx)("span", {
                                className: "latte-comment",
                                "data-tid-end": !0
                            })]
                        }) : void 0
                    },
                    z = function() {
                        return (0, v.A)((function e(t) {
                            (0, g.A)(this, e), (0, y.A)(this, "type", "template"), this.pluginConfig = t
                        }), [{
                            key: "render",
                            value: function(e) {
                                return (0, s.jsx)(C, P(P({}, e), {}, {
                                    pluginConfig: this.pluginConfig
                                }))
                            }
                        }])
                    }();

                function _(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }
                var T = function(e) {
                        var t = e.item,
                            n = e.models,
                            r = i(),
                            a = r.getProp(t, "$text", n);
                        return a ? (0, s.jsxs)(s.Fragment, {
                            children: [r.attachItemId && (0, s.jsx)("span", {
                                className: "latte-comment",
                                "data-tid": t.id
                            }), a, r.attachItemId && (0, s.jsx)("span", {
                                className: "latte-comment",
                                "data-tid-end": !0
                            })]
                        }) : null
                    },
                    L = function() {
                        return (0, v.A)((function e() {
                            (0, g.A)(this, e), (0, y.A)(this, "type", "text")
                        }), [{
                            key: "render",
                            value: function(e) {
                                return (0, s.jsx)(T, function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? _(Object(n), !0).forEach((function(t) {
                                            (0, y.A)(e, t, n[t])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _(Object(n)).forEach((function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                        }))
                                    }
                                    return e
                                }({}, e))
                            }
                        }])
                    }()
            },
            7400: (e, t, n) => {
                "use strict";
                var r = n(4041),
                    a = n(7967);

                function o(e) {
                    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                var i = new Set,
                    l = {};

                function s(e, t) {
                    u(e, t), u(e + "Capture", t)
                }

                function u(e, t) {
                    for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e])
                }
                var c = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
                    d = Object.prototype.hasOwnProperty,
                    f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                    p = {},
                    h = {};

                function m(e, t, n, r, a, o, i) {
                    this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i
                }
                var g = {};
                "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                    g[e] = new m(e, 0, !1, e, null, !1, !1)
                })), [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"]
                ].forEach((function(e) {
                    var t = e[0];
                    g[t] = new m(t, 1, !1, e[1], null, !1, !1)
                })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                    g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1)
                })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                    g[e] = new m(e, 2, !1, e, null, !1, !1)
                })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                    g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1)
                })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                    g[e] = new m(e, 3, !0, e, null, !1, !1)
                })), ["capture", "download"].forEach((function(e) {
                    g[e] = new m(e, 4, !1, e, null, !1, !1)
                })), ["cols", "rows", "size", "span"].forEach((function(e) {
                    g[e] = new m(e, 6, !1, e, null, !1, !1)
                })), ["rowSpan", "start"].forEach((function(e) {
                    g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1)
                }));
                var v = /[\-:]([a-z])/g;

                function y(e) {
                    return e[1].toUpperCase()
                }

                function b(e, t, n, r) {
                    var a = g.hasOwnProperty(t) ? g[t] : null;
                    (null !== a ? 0 !== a.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function(e, t, n, r) {
                        if (null == t || function(e, t, n, r) {
                                if (null !== n && 0 === n.type) return !1;
                                switch (typeof t) {
                                    case "function":
                                    case "symbol":
                                        return !0;
                                    case "boolean":
                                        return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                    default:
                                        return !1
                                }
                            }(e, t, n, r)) return !0;
                        if (r) return !1;
                        if (null !== n) switch (n.type) {
                            case 3:
                                return !t;
                            case 4:
                                return !1 === t;
                            case 5:
                                return isNaN(t);
                            case 6:
                                return isNaN(t) || 1 > t
                        }
                        return !1
                    }(t, n, a, r) && (n = null), r || null === a ? function(e) {
                        return !!d.call(h, e) || !d.call(p, e) && (f.test(e) ? h[e] = !0 : (p[e] = !0, !1))
                    }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName, r = a.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
                }
                "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                    var t = e.replace(v, y);
                    g[t] = new m(t, 1, !1, e, null, !1, !1)
                })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                    var t = e.replace(v, y);
                    g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
                })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                    var t = e.replace(v, y);
                    g[t] = new m(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
                })), ["tabIndex", "crossOrigin"].forEach((function(e) {
                    g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1)
                })), g.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
                    g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0)
                }));
                var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    w = Symbol.for("react.element"),
                    k = Symbol.for("react.portal"),
                    S = Symbol.for("react.fragment"),
                    j = Symbol.for("react.strict_mode"),
                    O = Symbol.for("react.profiler"),
                    N = Symbol.for("react.provider"),
                    E = Symbol.for("react.context"),
                    P = Symbol.for("react.forward_ref"),
                    C = Symbol.for("react.suspense"),
                    z = Symbol.for("react.suspense_list"),
                    _ = Symbol.for("react.memo"),
                    T = Symbol.for("react.lazy");
                Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
                var L = Symbol.for("react.offscreen");
                Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
                var I = Symbol.iterator;

                function A(e) {
                    return null === e || "object" != typeof e ? null : "function" == typeof(e = I && e[I] || e["@@iterator"]) ? e : null
                }
                var M, R = Object.assign;

                function D(e) {
                    if (void 0 === M) try {
                        throw Error()
                    } catch (e) {
                        var t = e.stack.trim().match(/\n( *(at )?)/);
                        M = t && t[1] || ""
                    }
                    return "\n" + M + e
                }
                var F = !1;

                function $(e, t) {
                    if (!e || F) return "";
                    F = !0;
                    var n = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    try {
                        if (t)
                            if (t = function() {
                                    throw Error()
                                }, Object.defineProperty(t.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), "object" == typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(t, [])
                                } catch (e) {
                                    var r = e
                                }
                                Reflect.construct(e, [], t)
                            } else {
                                try {
                                    t.call()
                                } catch (e) {
                                    r = e
                                }
                                e.call(t.prototype)
                            }
                        else {
                            try {
                                throw Error()
                            } catch (e) {
                                r = e
                            }
                            e()
                        }
                    } catch (t) {
                        if (t && r && "string" == typeof t.stack) {
                            for (var a = t.stack.split("\n"), o = r.stack.split("\n"), i = a.length - 1, l = o.length - 1; 1 <= i && 0 <= l && a[i] !== o[l];) l--;
                            for (; 1 <= i && 0 <= l; i--, l--)
                                if (a[i] !== o[l]) {
                                    if (1 !== i || 1 !== l)
                                        do {
                                            if (i--, 0 > --l || a[i] !== o[l]) {
                                                var s = "\n" + a[i].replace(" at new ", " at ");
                                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s
                                            }
                                        } while (1 <= i && 0 <= l);
                                    break
                                }
                        }
                    } finally {
                        F = !1, Error.prepareStackTrace = n
                    }
                    return (e = e ? e.displayName || e.name : "") ? D(e) : ""
                }

                function H(e) {
                    switch (e.tag) {
                        case 5:
                            return D(e.type);
                        case 16:
                            return D("Lazy");
                        case 13:
                            return D("Suspense");
                        case 19:
                            return D("SuspenseList");
                        case 0:
                        case 2:
                        case 15:
                            return e = $(e.type, !1);
                        case 11:
                            return e = $(e.type.render, !1);
                        case 1:
                            return e = $(e.type, !0);
                        default:
                            return ""
                    }
                }

                function U(e) {
                    if (null == e) return null;
                    if ("function" == typeof e) return e.displayName || e.name || null;
                    if ("string" == typeof e) return e;
                    switch (e) {
                        case S:
                            return "Fragment";
                        case k:
                            return "Portal";
                        case O:
                            return "Profiler";
                        case j:
                            return "StrictMode";
                        case C:
                            return "Suspense";
                        case z:
                            return "SuspenseList"
                    }
                    if ("object" == typeof e) switch (e.$$typeof) {
                        case E:
                            return (e.displayName || "Context") + ".Consumer";
                        case N:
                            return (e._context.displayName || "Context") + ".Provider";
                        case P:
                            var t = e.render;
                            return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                        case _:
                            return null !== (t = e.displayName || null) ? t : U(e.type) || "Memo";
                        case T:
                            t = e._payload, e = e._init;
                            try {
                                return U(e(t))
                            } catch (e) {}
                    }
                    return null
                }

                function V(e) {
                    var t = e.type;
                    switch (e.tag) {
                        case 24:
                            return "Cache";
                        case 9:
                            return (t.displayName || "Context") + ".Consumer";
                        case 10:
                            return (t._context.displayName || "Context") + ".Provider";
                        case 18:
                            return "DehydratedFragment";
                        case 11:
                            return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                        case 7:
                            return "Fragment";
                        case 5:
                            return t;
                        case 4:
                            return "Portal";
                        case 3:
                            return "Root";
                        case 6:
                            return "Text";
                        case 16:
                            return U(t);
                        case 8:
                            return t === j ? "StrictMode" : "Mode";
                        case 22:
                            return "Offscreen";
                        case 12:
                            return "Profiler";
                        case 21:
                            return "Scope";
                        case 13:
                            return "Suspense";
                        case 19:
                            return "SuspenseList";
                        case 25:
                            return "TracingMarker";
                        case 1:
                        case 0:
                        case 17:
                        case 2:
                        case 14:
                        case 15:
                            if ("function" == typeof t) return t.displayName || t.name || null;
                            if ("string" == typeof t) return t
                    }
                    return null
                }

                function B(e) {
                    switch (typeof e) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                        case "object":
                            return e;
                        default:
                            return ""
                    }
                }

                function W(e) {
                    var t = e.type;
                    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
                }

                function Q(e) {
                    e._valueTracker || (e._valueTracker = function(e) {
                        var t = W(e) ? "checked" : "value",
                            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                            r = "" + e[t];
                        if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                            var a = n.get,
                                o = n.set;
                            return Object.defineProperty(e, t, {
                                configurable: !0,
                                get: function() {
                                    return a.call(this)
                                },
                                set: function(e) {
                                    r = "" + e, o.call(this, e)
                                }
                            }), Object.defineProperty(e, t, {
                                enumerable: n.enumerable
                            }), {
                                getValue: function() {
                                    return r
                                },
                                setValue: function(e) {
                                    r = "" + e
                                },
                                stopTracking: function() {
                                    e._valueTracker = null, delete e[t]
                                }
                            }
                        }
                    }(e))
                }

                function K(e) {
                    if (!e) return !1;
                    var t = e._valueTracker;
                    if (!t) return !0;
                    var n = t.getValue(),
                        r = "";
                    return e && (r = W(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
                }

                function q(e) {
                    if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
                    try {
                        return e.activeElement || e.body
                    } catch (t) {
                        return e.body
                    }
                }

                function Y(e, t) {
                    var n = t.checked;
                    return R({}, t, {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: void 0,
                        checked: null != n ? n : e._wrapperState.initialChecked
                    })
                }

                function G(e, t) {
                    var n = null == t.defaultValue ? "" : t.defaultValue,
                        r = null != t.checked ? t.checked : t.defaultChecked;
                    n = B(null != t.value ? t.value : n), e._wrapperState = {
                        initialChecked: r,
                        initialValue: n,
                        controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                    }
                }

                function J(e, t) {
                    null != (t = t.checked) && b(e, "checked", t, !1)
                }

                function X(e, t) {
                    J(e, t);
                    var n = B(t.value),
                        r = t.type;
                    if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                    else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                    t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, B(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
                }

                function Z(e, t, n) {
                    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                        var r = t.type;
                        if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
                        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                    }
                    "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
                }

                function ee(e, t, n) {
                    "number" === t && q(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
                }
                var te = Array.isArray;

                function ne(e, t, n, r) {
                    if (e = e.options, t) {
                        t = {};
                        for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
                        for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0)
                    } else {
                        for (n = "" + B(n), t = null, a = 0; a < e.length; a++) {
                            if (e[a].value === n) return e[a].selected = !0, void(r && (e[a].defaultSelected = !0));
                            null !== t || e[a].disabled || (t = e[a])
                        }
                        null !== t && (t.selected = !0)
                    }
                }

                function re(e, t) {
                    if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
                    return R({}, t, {
                        value: void 0,
                        defaultValue: void 0,
                        children: "" + e._wrapperState.initialValue
                    })
                }

                function ae(e, t) {
                    var n = t.value;
                    if (null == n) {
                        if (n = t.children, t = t.defaultValue, null != n) {
                            if (null != t) throw Error(o(92));
                            if (te(n)) {
                                if (1 < n.length) throw Error(o(93));
                                n = n[0]
                            }
                            t = n
                        }
                        null == t && (t = ""), n = t
                    }
                    e._wrapperState = {
                        initialValue: B(n)
                    }
                }

                function oe(e, t) {
                    var n = B(t.value),
                        r = B(t.defaultValue);
                    null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
                }

                function ie(e) {
                    var t = e.textContent;
                    t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
                }

                function le(e) {
                    switch (e) {
                        case "svg":
                            return "http://www.w3.org/2000/svg";
                        case "math":
                            return "http://www.w3.org/1998/Math/MathML";
                        default:
                            return "http://www.w3.org/1999/xhtml"
                    }
                }

                function se(e, t) {
                    return null == e || "http://www.w3.org/1999/xhtml" === e ? le(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
                }
                var ue, ce, de = (ce = function(e, t) {
                    if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
                    else {
                        for ((ue = ue || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ue.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                        for (; t.firstChild;) e.appendChild(t.firstChild)
                    }
                }, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
                    MSApp.execUnsafeLocalFunction((function() {
                        return ce(e, t)
                    }))
                } : ce);

                function fe(e, t) {
                    if (t) {
                        var n = e.firstChild;
                        if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
                    }
                    e.textContent = t
                }
                var pe = {
                        animationIterationCount: !0,
                        aspectRatio: !0,
                        borderImageOutset: !0,
                        borderImageSlice: !0,
                        borderImageWidth: !0,
                        boxFlex: !0,
                        boxFlexGroup: !0,
                        boxOrdinalGroup: !0,
                        columnCount: !0,
                        columns: !0,
                        flex: !0,
                        flexGrow: !0,
                        flexPositive: !0,
                        flexShrink: !0,
                        flexNegative: !0,
                        flexOrder: !0,
                        gridArea: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowSpan: !0,
                        gridRowStart: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnSpan: !0,
                        gridColumnStart: !0,
                        fontWeight: !0,
                        lineClamp: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        tabSize: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                        fillOpacity: !0,
                        floodOpacity: !0,
                        stopOpacity: !0,
                        strokeDasharray: !0,
                        strokeDashoffset: !0,
                        strokeMiterlimit: !0,
                        strokeOpacity: !0,
                        strokeWidth: !0
                    },
                    he = ["Webkit", "ms", "Moz", "O"];

                function me(e, t, n) {
                    return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || pe.hasOwnProperty(e) && pe[e] ? ("" + t).trim() : t + "px"
                }

                function ge(e, t) {
                    for (var n in e = e.style, t)
                        if (t.hasOwnProperty(n)) {
                            var r = 0 === n.indexOf("--"),
                                a = me(n, t[n], r);
                            "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a
                        }
                }
                Object.keys(pe).forEach((function(e) {
                    he.forEach((function(t) {
                        t = t + e.charAt(0).toUpperCase() + e.substring(1), pe[t] = pe[e]
                    }))
                }));
                var ve = R({
                    menuitem: !0
                }, {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    embed: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    keygen: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0
                });

                function ye(e, t) {
                    if (t) {
                        if (ve[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(o(137, e));
                        if (null != t.dangerouslySetInnerHTML) {
                            if (null != t.children) throw Error(o(60));
                            if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61))
                        }
                        if (null != t.style && "object" != typeof t.style) throw Error(o(62))
                    }
                }

                function be(e, t) {
                    if (-1 === e.indexOf("-")) return "string" == typeof t.is;
                    switch (e) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                            return !1;
                        default:
                            return !0
                    }
                }
                var xe = null;

                function we(e) {
                    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
                }
                var ke = null,
                    Se = null,
                    je = null;

                function Oe(e) {
                    if (e = ba(e)) {
                        if ("function" != typeof ke) throw Error(o(280));
                        var t = e.stateNode;
                        t && (t = wa(t), ke(e.stateNode, e.type, t))
                    }
                }

                function Ne(e) {
                    Se ? je ? je.push(e) : je = [e] : Se = e
                }

                function Ee() {
                    if (Se) {
                        var e = Se,
                            t = je;
                        if (je = Se = null, Oe(e), t)
                            for (e = 0; e < t.length; e++) Oe(t[e])
                    }
                }

                function Pe(e, t) {
                    return e(t)
                }

                function Ce() {}
                var ze = !1;

                function _e(e, t, n) {
                    if (ze) return e(t, n);
                    ze = !0;
                    try {
                        return Pe(e, t, n)
                    } finally {
                        ze = !1, (null !== Se || null !== je) && (Ce(), Ee())
                    }
                }

                function Te(e, t) {
                    var n = e.stateNode;
                    if (null === n) return null;
                    var r = wa(n);
                    if (null === r) return null;
                    n = r[t];
                    e: switch (t) {
                        case "onClick":
                        case "onClickCapture":
                        case "onDoubleClick":
                        case "onDoubleClickCapture":
                        case "onMouseDown":
                        case "onMouseDownCapture":
                        case "onMouseMove":
                        case "onMouseMoveCapture":
                        case "onMouseUp":
                        case "onMouseUpCapture":
                        case "onMouseEnter":
                            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                            break e;
                        default:
                            e = !1
                    }
                    if (e) return null;
                    if (n && "function" != typeof n) throw Error(o(231, t, typeof n));
                    return n
                }
                var Le = !1;
                if (c) try {
                    var Ie = {};
                    Object.defineProperty(Ie, "passive", {
                        get: function() {
                            Le = !0
                        }
                    }), window.addEventListener("test", Ie, Ie), window.removeEventListener("test", Ie, Ie)
                } catch (ce) {
                    Le = !1
                }

                function Ae(e, t, n, r, a, o, i, l, s) {
                    var u = Array.prototype.slice.call(arguments, 3);
                    try {
                        t.apply(n, u)
                    } catch (e) {
                        this.onError(e)
                    }
                }
                var Me = !1,
                    Re = null,
                    De = !1,
                    Fe = null,
                    $e = {
                        onError: function(e) {
                            Me = !0, Re = e
                        }
                    };

                function He(e, t, n, r, a, o, i, l, s) {
                    Me = !1, Re = null, Ae.apply($e, arguments)
                }

                function Ue(e) {
                    var t = e,
                        n = e;
                    if (e.alternate)
                        for (; t.return;) t = t.return;
                    else {
                        e = t;
                        do {
                            !!(4098 & (t = e).flags) && (n = t.return), e = t.return
                        } while (e)
                    }
                    return 3 === t.tag ? n : null
                }

                function Ve(e) {
                    if (13 === e.tag) {
                        var t = e.memoizedState;
                        if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
                    }
                    return null
                }

                function Be(e) {
                    if (Ue(e) !== e) throw Error(o(188))
                }

                function We(e) {
                    return null !== (e = function(e) {
                        var t = e.alternate;
                        if (!t) {
                            if (null === (t = Ue(e))) throw Error(o(188));
                            return t !== e ? null : e
                        }
                        for (var n = e, r = t;;) {
                            var a = n.return;
                            if (null === a) break;
                            var i = a.alternate;
                            if (null === i) {
                                if (null !== (r = a.return)) {
                                    n = r;
                                    continue
                                }
                                break
                            }
                            if (a.child === i.child) {
                                for (i = a.child; i;) {
                                    if (i === n) return Be(a), e;
                                    if (i === r) return Be(a), t;
                                    i = i.sibling
                                }
                                throw Error(o(188))
                            }
                            if (n.return !== r.return) n = a, r = i;
                            else {
                                for (var l = !1, s = a.child; s;) {
                                    if (s === n) {
                                        l = !0, n = a, r = i;
                                        break
                                    }
                                    if (s === r) {
                                        l = !0, r = a, n = i;
                                        break
                                    }
                                    s = s.sibling
                                }
                                if (!l) {
                                    for (s = i.child; s;) {
                                        if (s === n) {
                                            l = !0, n = i, r = a;
                                            break
                                        }
                                        if (s === r) {
                                            l = !0, r = i, n = a;
                                            break
                                        }
                                        s = s.sibling
                                    }
                                    if (!l) throw Error(o(189))
                                }
                            }
                            if (n.alternate !== r) throw Error(o(190))
                        }
                        if (3 !== n.tag) throw Error(o(188));
                        return n.stateNode.current === n ? e : t
                    }(e)) ? Qe(e) : null
                }

                function Qe(e) {
                    if (5 === e.tag || 6 === e.tag) return e;
                    for (e = e.child; null !== e;) {
                        var t = Qe(e);
                        if (null !== t) return t;
                        e = e.sibling
                    }
                    return null
                }
                var Ke = a.unstable_scheduleCallback,
                    qe = a.unstable_cancelCallback,
                    Ye = a.unstable_shouldYield,
                    Ge = a.unstable_requestPaint,
                    Je = a.unstable_now,
                    Xe = a.unstable_getCurrentPriorityLevel,
                    Ze = a.unstable_ImmediatePriority,
                    et = a.unstable_UserBlockingPriority,
                    tt = a.unstable_NormalPriority,
                    nt = a.unstable_LowPriority,
                    rt = a.unstable_IdlePriority,
                    at = null,
                    ot = null;
                var it = Math.clz32 ? Math.clz32 : function(e) {
                        return e >>>= 0, 0 === e ? 32 : 31 - (lt(e) / st | 0) | 0
                    },
                    lt = Math.log,
                    st = Math.LN2;
                var ut = 64,
                    ct = 4194304;

                function dt(e) {
                    switch (e & -e) {
                        case 1:
                            return 1;
                        case 2:
                            return 2;
                        case 4:
                            return 4;
                        case 8:
                            return 8;
                        case 16:
                            return 16;
                        case 32:
                            return 32;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return 4194240 & e;
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            return 130023424 & e;
                        case 134217728:
                            return 134217728;
                        case 268435456:
                            return 268435456;
                        case 536870912:
                            return 536870912;
                        case 1073741824:
                            return 1073741824;
                        default:
                            return e
                    }
                }

                function ft(e, t) {
                    var n = e.pendingLanes;
                    if (0 === n) return 0;
                    var r = 0,
                        a = e.suspendedLanes,
                        o = e.pingedLanes,
                        i = 268435455 & n;
                    if (0 !== i) {
                        var l = i & ~a;
                        0 !== l ? r = dt(l) : 0 !== (o &= i) && (r = dt(o))
                    } else 0 !== (i = n & ~a) ? r = dt(i) : 0 !== o && (r = dt(o));
                    if (0 === r) return 0;
                    if (0 !== t && t !== r && !(t & a) && ((a = r & -r) >= (o = t & -t) || 16 === a && 4194240 & o)) return t;
                    if (4 & r && (r |= 16 & n), 0 !== (t = e.entangledLanes))
                        for (e = e.entanglements, t &= r; 0 < t;) a = 1 << (n = 31 - it(t)), r |= e[n], t &= ~a;
                    return r
                }

                function pt(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 4:
                            return t + 250;
                        case 8:
                        case 16:
                        case 32:
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return t + 5e3;
                        default:
                            return -1
                    }
                }

                function ht(e) {
                    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
                }

                function mt() {
                    var e = ut;
                    return !(4194240 & (ut <<= 1)) && (ut = 64), e
                }

                function gt(e) {
                    for (var t = [], n = 0; 31 > n; n++) t.push(e);
                    return t
                }

                function vt(e, t, n) {
                    e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - it(t)] = n
                }

                function yt(e, t) {
                    var n = e.entangledLanes |= t;
                    for (e = e.entanglements; n;) {
                        var r = 31 - it(n),
                            a = 1 << r;
                        a & t | e[r] & t && (e[r] |= t), n &= ~a
                    }
                }
                var bt = 0;

                function xt(e) {
                    return 1 < (e &= -e) ? 4 < e ? 268435455 & e ? 16 : 536870912 : 4 : 1
                }
                var wt, kt, St, jt, Ot, Nt = !1,
                    Et = [],
                    Pt = null,
                    Ct = null,
                    zt = null,
                    _t = new Map,
                    Tt = new Map,
                    Lt = [],
                    It = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

                function At(e, t) {
                    switch (e) {
                        case "focusin":
                        case "focusout":
                            Pt = null;
                            break;
                        case "dragenter":
                        case "dragleave":
                            Ct = null;
                            break;
                        case "mouseover":
                        case "mouseout":
                            zt = null;
                            break;
                        case "pointerover":
                        case "pointerout":
                            _t.delete(t.pointerId);
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            Tt.delete(t.pointerId)
                    }
                }

                function Mt(e, t, n, r, a, o) {
                    return null === e || e.nativeEvent !== o ? (e = {
                        blockedOn: t,
                        domEventName: n,
                        eventSystemFlags: r,
                        nativeEvent: o,
                        targetContainers: [a]
                    }, null !== t && (null !== (t = ba(t)) && kt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e)
                }

                function Rt(e) {
                    var t = ya(e.target);
                    if (null !== t) {
                        var n = Ue(t);
                        if (null !== n)
                            if (13 === (t = n.tag)) {
                                if (null !== (t = Ve(n))) return e.blockedOn = t, void Ot(e.priority, (function() {
                                    St(n)
                                }))
                            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                    }
                    e.blockedOn = null
                }

                function Dt(e) {
                    if (null !== e.blockedOn) return !1;
                    for (var t = e.targetContainers; 0 < t.length;) {
                        var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                        if (null !== n) return null !== (t = ba(n)) && kt(t), e.blockedOn = n, !1;
                        var r = new(n = e.nativeEvent).constructor(n.type, n);
                        xe = r, n.target.dispatchEvent(r), xe = null, t.shift()
                    }
                    return !0
                }

                function Ft(e, t, n) {
                    Dt(e) && n.delete(t)
                }

                function $t() {
                    Nt = !1, null !== Pt && Dt(Pt) && (Pt = null), null !== Ct && Dt(Ct) && (Ct = null), null !== zt && Dt(zt) && (zt = null), _t.forEach(Ft), Tt.forEach(Ft)
                }

                function Ht(e, t) {
                    e.blockedOn === t && (e.blockedOn = null, Nt || (Nt = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, $t)))
                }

                function Ut(e) {
                    function t(t) {
                        return Ht(t, e)
                    }
                    if (0 < Et.length) {
                        Ht(Et[0], e);
                        for (var n = 1; n < Et.length; n++) {
                            var r = Et[n];
                            r.blockedOn === e && (r.blockedOn = null)
                        }
                    }
                    for (null !== Pt && Ht(Pt, e), null !== Ct && Ht(Ct, e), null !== zt && Ht(zt, e), _t.forEach(t), Tt.forEach(t), n = 0; n < Lt.length; n++)(r = Lt[n]).blockedOn === e && (r.blockedOn = null);
                    for (; 0 < Lt.length && null === (n = Lt[0]).blockedOn;) Rt(n), null === n.blockedOn && Lt.shift()
                }
                var Vt = x.ReactCurrentBatchConfig,
                    Bt = !0;

                function Wt(e, t, n, r) {
                    var a = bt,
                        o = Vt.transition;
                    Vt.transition = null;
                    try {
                        bt = 1, Kt(e, t, n, r)
                    } finally {
                        bt = a, Vt.transition = o
                    }
                }

                function Qt(e, t, n, r) {
                    var a = bt,
                        o = Vt.transition;
                    Vt.transition = null;
                    try {
                        bt = 4, Kt(e, t, n, r)
                    } finally {
                        bt = a, Vt.transition = o
                    }
                }

                function Kt(e, t, n, r) {
                    if (Bt) {
                        var a = Yt(e, t, n, r);
                        if (null === a) Br(e, t, r, qt, n), At(e, r);
                        else if (function(e, t, n, r, a) {
                                switch (t) {
                                    case "focusin":
                                        return Pt = Mt(Pt, e, t, n, r, a), !0;
                                    case "dragenter":
                                        return Ct = Mt(Ct, e, t, n, r, a), !0;
                                    case "mouseover":
                                        return zt = Mt(zt, e, t, n, r, a), !0;
                                    case "pointerover":
                                        var o = a.pointerId;
                                        return _t.set(o, Mt(_t.get(o) || null, e, t, n, r, a)), !0;
                                    case "gotpointercapture":
                                        return o = a.pointerId, Tt.set(o, Mt(Tt.get(o) || null, e, t, n, r, a)), !0
                                }
                                return !1
                            }(a, e, t, n, r)) r.stopPropagation();
                        else if (At(e, r), 4 & t && -1 < It.indexOf(e)) {
                            for (; null !== a;) {
                                var o = ba(a);
                                if (null !== o && wt(o), null === (o = Yt(e, t, n, r)) && Br(e, t, r, qt, n), o === a) break;
                                a = o
                            }
                            null !== a && r.stopPropagation()
                        } else Br(e, t, r, null, n)
                    }
                }
                var qt = null;

                function Yt(e, t, n, r) {
                    if (qt = null, null !== (e = ya(e = we(r))))
                        if (null === (t = Ue(e))) e = null;
                        else if (13 === (n = t.tag)) {
                        if (null !== (e = Ve(t))) return e;
                        e = null
                    } else if (3 === n) {
                        if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                        e = null
                    } else t !== e && (e = null);
                    return qt = e, null
                }

                function Gt(e) {
                    switch (e) {
                        case "cancel":
                        case "click":
                        case "close":
                        case "contextmenu":
                        case "copy":
                        case "cut":
                        case "auxclick":
                        case "dblclick":
                        case "dragend":
                        case "dragstart":
                        case "drop":
                        case "focusin":
                        case "focusout":
                        case "input":
                        case "invalid":
                        case "keydown":
                        case "keypress":
                        case "keyup":
                        case "mousedown":
                        case "mouseup":
                        case "paste":
                        case "pause":
                        case "play":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointerup":
                        case "ratechange":
                        case "reset":
                        case "resize":
                        case "seeked":
                        case "submit":
                        case "touchcancel":
                        case "touchend":
                        case "touchstart":
                        case "volumechange":
                        case "change":
                        case "selectionchange":
                        case "textInput":
                        case "compositionstart":
                        case "compositionend":
                        case "compositionupdate":
                        case "beforeblur":
                        case "afterblur":
                        case "beforeinput":
                        case "blur":
                        case "fullscreenchange":
                        case "focus":
                        case "hashchange":
                        case "popstate":
                        case "select":
                        case "selectstart":
                            return 1;
                        case "drag":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "mousemove":
                        case "mouseout":
                        case "mouseover":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "scroll":
                        case "toggle":
                        case "touchmove":
                        case "wheel":
                        case "mouseenter":
                        case "mouseleave":
                        case "pointerenter":
                        case "pointerleave":
                            return 4;
                        case "message":
                            switch (Xe()) {
                                case Ze:
                                    return 1;
                                case et:
                                    return 4;
                                case tt:
                                case nt:
                                    return 16;
                                case rt:
                                    return 536870912;
                                default:
                                    return 16
                            }
                        default:
                            return 16
                    }
                }
                var Jt = null,
                    Xt = null,
                    Zt = null;

                function en() {
                    if (Zt) return Zt;
                    var e, t, n = Xt,
                        r = n.length,
                        a = "value" in Jt ? Jt.value : Jt.textContent,
                        o = a.length;
                    for (e = 0; e < r && n[e] === a[e]; e++);
                    var i = r - e;
                    for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
                    return Zt = a.slice(e, 1 < t ? 1 - t : void 0)
                }

                function tn(e) {
                    var t = e.keyCode;
                    return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
                }

                function nn() {
                    return !0
                }

                function rn() {
                    return !1
                }

                function an(e) {
                    function t(t, n, r, a, o) {
                        for (var i in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = o, this.currentTarget = null, e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(a) : a[i]);
                        return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? nn : rn, this.isPropagationStopped = rn, this
                    }
                    return R(t.prototype, {
                        preventDefault: function() {
                            this.defaultPrevented = !0;
                            var e = this.nativeEvent;
                            e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn)
                        },
                        stopPropagation: function() {
                            var e = this.nativeEvent;
                            e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn)
                        },
                        persist: function() {},
                        isPersistent: nn
                    }), t
                }
                var on, ln, sn, un = {
                        eventPhase: 0,
                        bubbles: 0,
                        cancelable: 0,
                        timeStamp: function(e) {
                            return e.timeStamp || Date.now()
                        },
                        defaultPrevented: 0,
                        isTrusted: 0
                    },
                    cn = an(un),
                    dn = R({}, un, {
                        view: 0,
                        detail: 0
                    }),
                    fn = an(dn),
                    pn = R({}, dn, {
                        screenX: 0,
                        screenY: 0,
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        getModifierState: On,
                        button: 0,
                        buttons: 0,
                        relatedTarget: function(e) {
                            return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                        },
                        movementX: function(e) {
                            return "movementX" in e ? e.movementX : (e !== sn && (sn && "mousemove" === e.type ? (on = e.screenX - sn.screenX, ln = e.screenY - sn.screenY) : ln = on = 0, sn = e), on)
                        },
                        movementY: function(e) {
                            return "movementY" in e ? e.movementY : ln
                        }
                    }),
                    hn = an(pn),
                    mn = an(R({}, pn, {
                        dataTransfer: 0
                    })),
                    gn = an(R({}, dn, {
                        relatedTarget: 0
                    })),
                    vn = an(R({}, un, {
                        animationName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    yn = R({}, un, {
                        clipboardData: function(e) {
                            return "clipboardData" in e ? e.clipboardData : window.clipboardData
                        }
                    }),
                    bn = an(yn),
                    xn = an(R({}, un, {
                        data: 0
                    })),
                    wn = {
                        Esc: "Escape",
                        Spacebar: " ",
                        Left: "ArrowLeft",
                        Up: "ArrowUp",
                        Right: "ArrowRight",
                        Down: "ArrowDown",
                        Del: "Delete",
                        Win: "OS",
                        Menu: "ContextMenu",
                        Apps: "ContextMenu",
                        Scroll: "ScrollLock",
                        MozPrintableKey: "Unidentified"
                    },
                    kn = {
                        8: "Backspace",
                        9: "Tab",
                        12: "Clear",
                        13: "Enter",
                        16: "Shift",
                        17: "Control",
                        18: "Alt",
                        19: "Pause",
                        20: "CapsLock",
                        27: "Escape",
                        32: " ",
                        33: "PageUp",
                        34: "PageDown",
                        35: "End",
                        36: "Home",
                        37: "ArrowLeft",
                        38: "ArrowUp",
                        39: "ArrowRight",
                        40: "ArrowDown",
                        45: "Insert",
                        46: "Delete",
                        112: "F1",
                        113: "F2",
                        114: "F3",
                        115: "F4",
                        116: "F5",
                        117: "F6",
                        118: "F7",
                        119: "F8",
                        120: "F9",
                        121: "F10",
                        122: "F11",
                        123: "F12",
                        144: "NumLock",
                        145: "ScrollLock",
                        224: "Meta"
                    },
                    Sn = {
                        Alt: "altKey",
                        Control: "ctrlKey",
                        Meta: "metaKey",
                        Shift: "shiftKey"
                    };

                function jn(e) {
                    var t = this.nativeEvent;
                    return t.getModifierState ? t.getModifierState(e) : !!(e = Sn[e]) && !!t[e]
                }

                function On() {
                    return jn
                }
                var Nn = R({}, dn, {
                        key: function(e) {
                            if (e.key) {
                                var t = wn[e.key] || e.key;
                                if ("Unidentified" !== t) return t
                            }
                            return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? kn[e.keyCode] || "Unidentified" : ""
                        },
                        code: 0,
                        location: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        repeat: 0,
                        locale: 0,
                        getModifierState: On,
                        charCode: function(e) {
                            return "keypress" === e.type ? tn(e) : 0
                        },
                        keyCode: function(e) {
                            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        },
                        which: function(e) {
                            return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        }
                    }),
                    En = an(Nn),
                    Pn = an(R({}, pn, {
                        pointerId: 0,
                        width: 0,
                        height: 0,
                        pressure: 0,
                        tangentialPressure: 0,
                        tiltX: 0,
                        tiltY: 0,
                        twist: 0,
                        pointerType: 0,
                        isPrimary: 0
                    })),
                    Cn = an(R({}, dn, {
                        touches: 0,
                        targetTouches: 0,
                        changedTouches: 0,
                        altKey: 0,
                        metaKey: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        getModifierState: On
                    })),
                    zn = an(R({}, un, {
                        propertyName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    _n = R({}, pn, {
                        deltaX: function(e) {
                            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                        },
                        deltaY: function(e) {
                            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                        },
                        deltaZ: 0,
                        deltaMode: 0
                    }),
                    Tn = an(_n),
                    Ln = [9, 13, 27, 32],
                    In = c && "CompositionEvent" in window,
                    An = null;
                c && "documentMode" in document && (An = document.documentMode);
                var Mn = c && "TextEvent" in window && !An,
                    Rn = c && (!In || An && 8 < An && 11 >= An),
                    Dn = String.fromCharCode(32),
                    Fn = !1;

                function $n(e, t) {
                    switch (e) {
                        case "keyup":
                            return -1 !== Ln.indexOf(t.keyCode);
                        case "keydown":
                            return 229 !== t.keyCode;
                        case "keypress":
                        case "mousedown":
                        case "focusout":
                            return !0;
                        default:
                            return !1
                    }
                }

                function Hn(e) {
                    return "object" == typeof(e = e.detail) && "data" in e ? e.data : null
                }
                var Un = !1;
                var Vn = {
                    color: !0,
                    date: !0,
                    datetime: !0,
                    "datetime-local": !0,
                    email: !0,
                    month: !0,
                    number: !0,
                    password: !0,
                    range: !0,
                    search: !0,
                    tel: !0,
                    text: !0,
                    time: !0,
                    url: !0,
                    week: !0
                };

                function Bn(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return "input" === t ? !!Vn[e.type] : "textarea" === t
                }

                function Wn(e, t, n, r) {
                    Ne(r), 0 < (t = Qr(t, "onChange")).length && (n = new cn("onChange", "change", null, n, r), e.push({
                        event: n,
                        listeners: t
                    }))
                }
                var Qn = null,
                    Kn = null;

                function qn(e) {
                    Dr(e, 0)
                }

                function Yn(e) {
                    if (K(xa(e))) return e
                }

                function Gn(e, t) {
                    if ("change" === e) return t
                }
                var Jn = !1;
                if (c) {
                    var Xn;
                    if (c) {
                        var Zn = "oninput" in document;
                        if (!Zn) {
                            var er = document.createElement("div");
                            er.setAttribute("oninput", "return;"), Zn = "function" == typeof er.oninput
                        }
                        Xn = Zn
                    } else Xn = !1;
                    Jn = Xn && (!document.documentMode || 9 < document.documentMode)
                }

                function tr() {
                    Qn && (Qn.detachEvent("onpropertychange", nr), Kn = Qn = null)
                }

                function nr(e) {
                    if ("value" === e.propertyName && Yn(Kn)) {
                        var t = [];
                        Wn(t, Kn, e, we(e)), _e(qn, t)
                    }
                }

                function rr(e, t, n) {
                    "focusin" === e ? (tr(), Kn = n, (Qn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
                }

                function ar(e) {
                    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Yn(Kn)
                }

                function or(e, t) {
                    if ("click" === e) return Yn(t)
                }

                function ir(e, t) {
                    if ("input" === e || "change" === e) return Yn(t)
                }
                var lr = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                };

                function sr(e, t) {
                    if (lr(e, t)) return !0;
                    if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                    var n = Object.keys(e),
                        r = Object.keys(t);
                    if (n.length !== r.length) return !1;
                    for (r = 0; r < n.length; r++) {
                        var a = n[r];
                        if (!d.call(t, a) || !lr(e[a], t[a])) return !1
                    }
                    return !0
                }

                function ur(e) {
                    for (; e && e.firstChild;) e = e.firstChild;
                    return e
                }

                function cr(e, t) {
                    var n, r = ur(e);
                    for (e = 0; r;) {
                        if (3 === r.nodeType) {
                            if (n = e + r.textContent.length, e <= t && n >= t) return {
                                node: r,
                                offset: t - e
                            };
                            e = n
                        }
                        e: {
                            for (; r;) {
                                if (r.nextSibling) {
                                    r = r.nextSibling;
                                    break e
                                }
                                r = r.parentNode
                            }
                            r = void 0
                        }
                        r = ur(r)
                    }
                }

                function dr(e, t) {
                    return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? dr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
                }

                function fr() {
                    for (var e = window, t = q(); t instanceof e.HTMLIFrameElement;) {
                        try {
                            var n = "string" == typeof t.contentWindow.location.href
                        } catch (e) {
                            n = !1
                        }
                        if (!n) break;
                        t = q((e = t.contentWindow).document)
                    }
                    return t
                }

                function pr(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
                }

                function hr(e) {
                    var t = fr(),
                        n = e.focusedElem,
                        r = e.selectionRange;
                    if (t !== n && n && n.ownerDocument && dr(n.ownerDocument.documentElement, n)) {
                        if (null !== r && pr(n))
                            if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                            else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                            e = e.getSelection();
                            var a = n.textContent.length,
                                o = Math.min(r.start, a);
                            r = void 0 === r.end ? o : Math.min(r.end, a), !e.extend && o > r && (a = r, r = o, o = a), a = cr(n, o);
                            var i = cr(n, r);
                            a && i && (1 !== e.rangeCount || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && ((t = t.createRange()).setStart(a.node, a.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
                        }
                        for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
                            element: e,
                            left: e.scrollLeft,
                            top: e.scrollTop
                        });
                        for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
                    }
                }
                var mr = c && "documentMode" in document && 11 >= document.documentMode,
                    gr = null,
                    vr = null,
                    yr = null,
                    br = !1;

                function xr(e, t, n) {
                    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                    br || null == gr || gr !== q(r) || ("selectionStart" in (r = gr) && pr(r) ? r = {
                        start: r.selectionStart,
                        end: r.selectionEnd
                    } : r = {
                        anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                        anchorOffset: r.anchorOffset,
                        focusNode: r.focusNode,
                        focusOffset: r.focusOffset
                    }, yr && sr(yr, r) || (yr = r, 0 < (r = Qr(vr, "onSelect")).length && (t = new cn("onSelect", "select", null, t, n), e.push({
                        event: t,
                        listeners: r
                    }), t.target = gr)))
                }

                function wr(e, t) {
                    var n = {};
                    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
                }
                var kr = {
                        animationend: wr("Animation", "AnimationEnd"),
                        animationiteration: wr("Animation", "AnimationIteration"),
                        animationstart: wr("Animation", "AnimationStart"),
                        transitionend: wr("Transition", "TransitionEnd")
                    },
                    Sr = {},
                    jr = {};

                function Or(e) {
                    if (Sr[e]) return Sr[e];
                    if (!kr[e]) return e;
                    var t, n = kr[e];
                    for (t in n)
                        if (n.hasOwnProperty(t) && t in jr) return Sr[e] = n[t];
                    return e
                }
                c && (jr = document.createElement("div").style, "AnimationEvent" in window || (delete kr.animationend.animation, delete kr.animationiteration.animation, delete kr.animationstart.animation), "TransitionEvent" in window || delete kr.transitionend.transition);
                var Nr = Or("animationend"),
                    Er = Or("animationiteration"),
                    Pr = Or("animationstart"),
                    Cr = Or("transitionend"),
                    zr = new Map,
                    _r = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

                function Tr(e, t) {
                    zr.set(e, t), s(t, [e])
                }
                for (var Lr = 0; Lr < _r.length; Lr++) {
                    var Ir = _r[Lr];
                    Tr(Ir.toLowerCase(), "on" + (Ir[0].toUpperCase() + Ir.slice(1)))
                }
                Tr(Nr, "onAnimationEnd"), Tr(Er, "onAnimationIteration"), Tr(Pr, "onAnimationStart"), Tr("dblclick", "onDoubleClick"), Tr("focusin", "onFocus"), Tr("focusout", "onBlur"), Tr(Cr, "onTransitionEnd"), u("onMouseEnter", ["mouseout", "mouseover"]), u("onMouseLeave", ["mouseout", "mouseover"]), u("onPointerEnter", ["pointerout", "pointerover"]), u("onPointerLeave", ["pointerout", "pointerover"]), s("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), s("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), s("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), s("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), s("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), s("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
                var Ar = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                    Mr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));

                function Rr(e, t, n) {
                    var r = e.type || "unknown-event";
                    e.currentTarget = n,
                        function(e, t, n, r, a, i, l, s, u) {
                            if (He.apply(this, arguments), Me) {
                                if (!Me) throw Error(o(198));
                                var c = Re;
                                Me = !1, Re = null, De || (De = !0, Fe = c)
                            }
                        }(r, t, void 0, e), e.currentTarget = null
                }

                function Dr(e, t) {
                    t = !!(4 & t);
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n],
                            a = r.event;
                        r = r.listeners;
                        e: {
                            var o = void 0;
                            if (t)
                                for (var i = r.length - 1; 0 <= i; i--) {
                                    var l = r[i],
                                        s = l.instance,
                                        u = l.currentTarget;
                                    if (l = l.listener, s !== o && a.isPropagationStopped()) break e;
                                    Rr(a, l, u), o = s
                                } else
                                    for (i = 0; i < r.length; i++) {
                                        if (s = (l = r[i]).instance, u = l.currentTarget, l = l.listener, s !== o && a.isPropagationStopped()) break e;
                                        Rr(a, l, u), o = s
                                    }
                        }
                    }
                    if (De) throw e = Fe, De = !1, Fe = null, e
                }

                function Fr(e, t) {
                    var n = t[ma];
                    void 0 === n && (n = t[ma] = new Set);
                    var r = e + "__bubble";
                    n.has(r) || (Vr(t, e, 2, !1), n.add(r))
                }

                function $r(e, t, n) {
                    var r = 0;
                    t && (r |= 4), Vr(n, e, r, t)
                }
                var Hr = "_reactListening" + Math.random().toString(36).slice(2);

                function Ur(e) {
                    if (!e[Hr]) {
                        e[Hr] = !0, i.forEach((function(t) {
                            "selectionchange" !== t && (Mr.has(t) || $r(t, !1, e), $r(t, !0, e))
                        }));
                        var t = 9 === e.nodeType ? e : e.ownerDocument;
                        null === t || t[Hr] || (t[Hr] = !0, $r("selectionchange", !1, t))
                    }
                }

                function Vr(e, t, n, r) {
                    switch (Gt(t)) {
                        case 1:
                            var a = Wt;
                            break;
                        case 4:
                            a = Qt;
                            break;
                        default:
                            a = Kt
                    }
                    n = a.bind(null, t, n, e), a = void 0, !Le || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, {
                        capture: !0,
                        passive: a
                    }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, {
                        passive: a
                    }) : e.addEventListener(t, n, !1)
                }

                function Br(e, t, n, r, a) {
                    var o = r;
                    if (!(1 & t || 2 & t || null === r)) e: for (;;) {
                        if (null === r) return;
                        var i = r.tag;
                        if (3 === i || 4 === i) {
                            var l = r.stateNode.containerInfo;
                            if (l === a || 8 === l.nodeType && l.parentNode === a) break;
                            if (4 === i)
                                for (i = r.return; null !== i;) {
                                    var s = i.tag;
                                    if ((3 === s || 4 === s) && ((s = i.stateNode.containerInfo) === a || 8 === s.nodeType && s.parentNode === a)) return;
                                    i = i.return
                                }
                            for (; null !== l;) {
                                if (null === (i = ya(l))) return;
                                if (5 === (s = i.tag) || 6 === s) {
                                    r = o = i;
                                    continue e
                                }
                                l = l.parentNode
                            }
                        }
                        r = r.return
                    }
                    _e((function() {
                        var r = o,
                            a = we(n),
                            i = [];
                        e: {
                            var l = zr.get(e);
                            if (void 0 !== l) {
                                var s = cn,
                                    u = e;
                                switch (e) {
                                    case "keypress":
                                        if (0 === tn(n)) break e;
                                    case "keydown":
                                    case "keyup":
                                        s = En;
                                        break;
                                    case "focusin":
                                        u = "focus", s = gn;
                                        break;
                                    case "focusout":
                                        u = "blur", s = gn;
                                        break;
                                    case "beforeblur":
                                    case "afterblur":
                                        s = gn;
                                        break;
                                    case "click":
                                        if (2 === n.button) break e;
                                    case "auxclick":
                                    case "dblclick":
                                    case "mousedown":
                                    case "mousemove":
                                    case "mouseup":
                                    case "mouseout":
                                    case "mouseover":
                                    case "contextmenu":
                                        s = hn;
                                        break;
                                    case "drag":
                                    case "dragend":
                                    case "dragenter":
                                    case "dragexit":
                                    case "dragleave":
                                    case "dragover":
                                    case "dragstart":
                                    case "drop":
                                        s = mn;
                                        break;
                                    case "touchcancel":
                                    case "touchend":
                                    case "touchmove":
                                    case "touchstart":
                                        s = Cn;
                                        break;
                                    case Nr:
                                    case Er:
                                    case Pr:
                                        s = vn;
                                        break;
                                    case Cr:
                                        s = zn;
                                        break;
                                    case "scroll":
                                        s = fn;
                                        break;
                                    case "wheel":
                                        s = Tn;
                                        break;
                                    case "copy":
                                    case "cut":
                                    case "paste":
                                        s = bn;
                                        break;
                                    case "gotpointercapture":
                                    case "lostpointercapture":
                                    case "pointercancel":
                                    case "pointerdown":
                                    case "pointermove":
                                    case "pointerout":
                                    case "pointerover":
                                    case "pointerup":
                                        s = Pn
                                }
                                var c = !!(4 & t),
                                    d = !c && "scroll" === e,
                                    f = c ? null !== l ? l + "Capture" : null : l;
                                c = [];
                                for (var p, h = r; null !== h;) {
                                    var m = (p = h).stateNode;
                                    if (5 === p.tag && null !== m && (p = m, null !== f && (null != (m = Te(h, f)) && c.push(Wr(h, m, p)))), d) break;
                                    h = h.return
                                }
                                0 < c.length && (l = new s(l, u, null, n, a), i.push({
                                    event: l,
                                    listeners: c
                                }))
                            }
                        }
                        if (!(7 & t)) {
                            if (s = "mouseout" === e || "pointerout" === e, (!(l = "mouseover" === e || "pointerover" === e) || n === xe || !(u = n.relatedTarget || n.fromElement) || !ya(u) && !u[ha]) && (s || l) && (l = a.window === a ? a : (l = a.ownerDocument) ? l.defaultView || l.parentWindow : window, s ? (s = r, null !== (u = (u = n.relatedTarget || n.toElement) ? ya(u) : null) && (u !== (d = Ue(u)) || 5 !== u.tag && 6 !== u.tag) && (u = null)) : (s = null, u = r), s !== u)) {
                                if (c = hn, m = "onMouseLeave", f = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (c = Pn, m = "onPointerLeave", f = "onPointerEnter", h = "pointer"), d = null == s ? l : xa(s), p = null == u ? l : xa(u), (l = new c(m, h + "leave", s, n, a)).target = d, l.relatedTarget = p, m = null, ya(a) === r && ((c = new c(f, h + "enter", u, n, a)).target = p, c.relatedTarget = d, m = c), d = m, s && u) e: {
                                    for (f = u, h = 0, p = c = s; p; p = Kr(p)) h++;
                                    for (p = 0, m = f; m; m = Kr(m)) p++;
                                    for (; 0 < h - p;) c = Kr(c),
                                    h--;
                                    for (; 0 < p - h;) f = Kr(f),
                                    p--;
                                    for (; h--;) {
                                        if (c === f || null !== f && c === f.alternate) break e;
                                        c = Kr(c), f = Kr(f)
                                    }
                                    c = null
                                }
                                else c = null;
                                null !== s && qr(i, l, s, c, !1), null !== u && null !== d && qr(i, d, u, c, !0)
                            }
                            if ("select" === (s = (l = r ? xa(r) : window).nodeName && l.nodeName.toLowerCase()) || "input" === s && "file" === l.type) var g = Gn;
                            else if (Bn(l))
                                if (Jn) g = ir;
                                else {
                                    g = ar;
                                    var v = rr
                                }
                            else(s = l.nodeName) && "input" === s.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (g = or);
                            switch (g && (g = g(e, r)) ? Wn(i, g, n, a) : (v && v(e, l, r), "focusout" === e && (v = l._wrapperState) && v.controlled && "number" === l.type && ee(l, "number", l.value)), v = r ? xa(r) : window, e) {
                                case "focusin":
                                    (Bn(v) || "true" === v.contentEditable) && (gr = v, vr = r, yr = null);
                                    break;
                                case "focusout":
                                    yr = vr = gr = null;
                                    break;
                                case "mousedown":
                                    br = !0;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    br = !1, xr(i, n, a);
                                    break;
                                case "selectionchange":
                                    if (mr) break;
                                case "keydown":
                                case "keyup":
                                    xr(i, n, a)
                            }
                            var y;
                            if (In) e: {
                                switch (e) {
                                    case "compositionstart":
                                        var b = "onCompositionStart";
                                        break e;
                                    case "compositionend":
                                        b = "onCompositionEnd";
                                        break e;
                                    case "compositionupdate":
                                        b = "onCompositionUpdate";
                                        break e
                                }
                                b = void 0
                            }
                            else Un ? $n(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
                            b && (Rn && "ko" !== n.locale && (Un || "onCompositionStart" !== b ? "onCompositionEnd" === b && Un && (y = en()) : (Xt = "value" in (Jt = a) ? Jt.value : Jt.textContent, Un = !0)), 0 < (v = Qr(r, b)).length && (b = new xn(b, e, null, n, a), i.push({
                                event: b,
                                listeners: v
                            }), y ? b.data = y : null !== (y = Hn(n)) && (b.data = y))), (y = Mn ? function(e, t) {
                                switch (e) {
                                    case "compositionend":
                                        return Hn(t);
                                    case "keypress":
                                        return 32 !== t.which ? null : (Fn = !0, Dn);
                                    case "textInput":
                                        return (e = t.data) === Dn && Fn ? null : e;
                                    default:
                                        return null
                                }
                            }(e, n) : function(e, t) {
                                if (Un) return "compositionend" === e || !In && $n(e, t) ? (e = en(), Zt = Xt = Jt = null, Un = !1, e) : null;
                                switch (e) {
                                    case "paste":
                                    default:
                                        return null;
                                    case "keypress":
                                        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                            if (t.char && 1 < t.char.length) return t.char;
                                            if (t.which) return String.fromCharCode(t.which)
                                        }
                                        return null;
                                    case "compositionend":
                                        return Rn && "ko" !== t.locale ? null : t.data
                                }
                            }(e, n)) && (0 < (r = Qr(r, "onBeforeInput")).length && (a = new xn("onBeforeInput", "beforeinput", null, n, a), i.push({
                                event: a,
                                listeners: r
                            }), a.data = y))
                        }
                        Dr(i, t)
                    }))
                }

                function Wr(e, t, n) {
                    return {
                        instance: e,
                        listener: t,
                        currentTarget: n
                    }
                }

                function Qr(e, t) {
                    for (var n = t + "Capture", r = []; null !== e;) {
                        var a = e,
                            o = a.stateNode;
                        5 === a.tag && null !== o && (a = o, null != (o = Te(e, n)) && r.unshift(Wr(e, o, a)), null != (o = Te(e, t)) && r.push(Wr(e, o, a))), e = e.return
                    }
                    return r
                }

                function Kr(e) {
                    if (null === e) return null;
                    do {
                        e = e.return
                    } while (e && 5 !== e.tag);
                    return e || null
                }

                function qr(e, t, n, r, a) {
                    for (var o = t._reactName, i = []; null !== n && n !== r;) {
                        var l = n,
                            s = l.alternate,
                            u = l.stateNode;
                        if (null !== s && s === r) break;
                        5 === l.tag && null !== u && (l = u, a ? null != (s = Te(n, o)) && i.unshift(Wr(n, s, l)) : a || null != (s = Te(n, o)) && i.push(Wr(n, s, l))), n = n.return
                    }
                    0 !== i.length && e.push({
                        event: t,
                        listeners: i
                    })
                }
                var Yr = /\r\n?/g,
                    Gr = /\u0000|\uFFFD/g;

                function Jr(e) {
                    return ("string" == typeof e ? e : "" + e).replace(Yr, "\n").replace(Gr, "")
                }

                function Xr(e, t, n) {
                    if (t = Jr(t), Jr(e) !== t && n) throw Error(o(425))
                }

                function Zr() {}
                var ea = null,
                    ta = null;

                function na(e, t) {
                    return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
                }
                var ra = "function" == typeof setTimeout ? setTimeout : void 0,
                    aa = "function" == typeof clearTimeout ? clearTimeout : void 0,
                    oa = "function" == typeof Promise ? Promise : void 0,
                    ia = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== oa ? function(e) {
                        return oa.resolve(null).then(e).catch(la)
                    } : ra;

                function la(e) {
                    setTimeout((function() {
                        throw e
                    }))
                }

                function sa(e, t) {
                    var n = t,
                        r = 0;
                    do {
                        var a = n.nextSibling;
                        if (e.removeChild(n), a && 8 === a.nodeType)
                            if ("/$" === (n = a.data)) {
                                if (0 === r) return e.removeChild(a), void Ut(t);
                                r--
                            } else "$" !== n && "$?" !== n && "$!" !== n || r++;
                        n = a
                    } while (n);
                    Ut(t)
                }

                function ua(e) {
                    for (; null != e; e = e.nextSibling) {
                        var t = e.nodeType;
                        if (1 === t || 3 === t) break;
                        if (8 === t) {
                            if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
                            if ("/$" === t) return null
                        }
                    }
                    return e
                }

                function ca(e) {
                    e = e.previousSibling;
                    for (var t = 0; e;) {
                        if (8 === e.nodeType) {
                            var n = e.data;
                            if ("$" === n || "$!" === n || "$?" === n) {
                                if (0 === t) return e;
                                t--
                            } else "/$" === n && t++
                        }
                        e = e.previousSibling
                    }
                    return null
                }
                var da = Math.random().toString(36).slice(2),
                    fa = "__reactFiber$" + da,
                    pa = "__reactProps$" + da,
                    ha = "__reactContainer$" + da,
                    ma = "__reactEvents$" + da,
                    ga = "__reactListeners$" + da,
                    va = "__reactHandles$" + da;

                function ya(e) {
                    var t = e[fa];
                    if (t) return t;
                    for (var n = e.parentNode; n;) {
                        if (t = n[ha] || n[fa]) {
                            if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                                for (e = ca(e); null !== e;) {
                                    if (n = e[fa]) return n;
                                    e = ca(e)
                                }
                            return t
                        }
                        n = (e = n).parentNode
                    }
                    return null
                }

                function ba(e) {
                    return !(e = e[fa] || e[ha]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
                }

                function xa(e) {
                    if (5 === e.tag || 6 === e.tag) return e.stateNode;
                    throw Error(o(33))
                }

                function wa(e) {
                    return e[pa] || null
                }
                var ka = [],
                    Sa = -1;

                function ja(e) {
                    return {
                        current: e
                    }
                }

                function Oa(e) {
                    0 > Sa || (e.current = ka[Sa], ka[Sa] = null, Sa--)
                }

                function Na(e, t) {
                    Sa++, ka[Sa] = e.current, e.current = t
                }
                var Ea = {},
                    Pa = ja(Ea),
                    Ca = ja(!1),
                    za = Ea;

                function _a(e, t) {
                    var n = e.type.contextTypes;
                    if (!n) return Ea;
                    var r = e.stateNode;
                    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                    var a, o = {};
                    for (a in n) o[a] = t[a];
                    return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
                }

                function Ta(e) {
                    return null != (e = e.childContextTypes)
                }

                function La() {
                    Oa(Ca), Oa(Pa)
                }

                function Ia(e, t, n) {
                    if (Pa.current !== Ea) throw Error(o(168));
                    Na(Pa, t), Na(Ca, n)
                }

                function Aa(e, t, n) {
                    var r = e.stateNode;
                    if (t = t.childContextTypes, "function" != typeof r.getChildContext) return n;
                    for (var a in r = r.getChildContext())
                        if (!(a in t)) throw Error(o(108, V(e) || "Unknown", a));
                    return R({}, n, r)
                }

                function Ma(e) {
                    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ea, za = Pa.current, Na(Pa, e), Na(Ca, Ca.current), !0
                }

                function Ra(e, t, n) {
                    var r = e.stateNode;
                    if (!r) throw Error(o(169));
                    n ? (e = Aa(e, t, za), r.__reactInternalMemoizedMergedChildContext = e, Oa(Ca), Oa(Pa), Na(Pa, e)) : Oa(Ca), Na(Ca, n)
                }
                var Da = null,
                    Fa = !1,
                    $a = !1;

                function Ha(e) {
                    null === Da ? Da = [e] : Da.push(e)
                }

                function Ua() {
                    if (!$a && null !== Da) {
                        $a = !0;
                        var e = 0,
                            t = bt;
                        try {
                            var n = Da;
                            for (bt = 1; e < n.length; e++) {
                                var r = n[e];
                                do {
                                    r = r(!0)
                                } while (null !== r)
                            }
                            Da = null, Fa = !1
                        } catch (t) {
                            throw null !== Da && (Da = Da.slice(e + 1)), Ke(Ze, Ua), t
                        } finally {
                            bt = t, $a = !1
                        }
                    }
                    return null
                }
                var Va = [],
                    Ba = 0,
                    Wa = null,
                    Qa = 0,
                    Ka = [],
                    qa = 0,
                    Ya = null,
                    Ga = 1,
                    Ja = "";

                function Xa(e, t) {
                    Va[Ba++] = Qa, Va[Ba++] = Wa, Wa = e, Qa = t
                }

                function Za(e, t, n) {
                    Ka[qa++] = Ga, Ka[qa++] = Ja, Ka[qa++] = Ya, Ya = e;
                    var r = Ga;
                    e = Ja;
                    var a = 32 - it(r) - 1;
                    r &= ~(1 << a), n += 1;
                    var o = 32 - it(t) + a;
                    if (30 < o) {
                        var i = a - a % 5;
                        o = (r & (1 << i) - 1).toString(32), r >>= i, a -= i, Ga = 1 << 32 - it(t) + a | n << a | r, Ja = o + e
                    } else Ga = 1 << o | n << a | r, Ja = e
                }

                function eo(e) {
                    null !== e.return && (Xa(e, 1), Za(e, 1, 0))
                }

                function to(e) {
                    for (; e === Wa;) Wa = Va[--Ba], Va[Ba] = null, Qa = Va[--Ba], Va[Ba] = null;
                    for (; e === Ya;) Ya = Ka[--qa], Ka[qa] = null, Ja = Ka[--qa], Ka[qa] = null, Ga = Ka[--qa], Ka[qa] = null
                }
                var no = null,
                    ro = null,
                    ao = !1,
                    oo = null;

                function io(e, t) {
                    var n = _u(5, null, null, 0);
                    n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
                }

                function lo(e, t) {
                    switch (e.tag) {
                        case 5:
                            var n = e.type;
                            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, no = e, ro = ua(t.firstChild), !0);
                        case 6:
                            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, no = e, ro = null, !0);
                        case 13:
                            return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Ya ? {
                                id: Ga,
                                overflow: Ja
                            } : null, e.memoizedState = {
                                dehydrated: t,
                                treeContext: n,
                                retryLane: 1073741824
                            }, (n = _u(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, no = e, ro = null, !0);
                        default:
                            return !1
                    }
                }

                function so(e) {
                    return !(!(1 & e.mode) || 128 & e.flags)
                }

                function uo(e) {
                    if (ao) {
                        var t = ro;
                        if (t) {
                            var n = t;
                            if (!lo(e, t)) {
                                if (so(e)) throw Error(o(418));
                                t = ua(n.nextSibling);
                                var r = no;
                                t && lo(e, t) ? io(r, n) : (e.flags = -4097 & e.flags | 2, ao = !1, no = e)
                            }
                        } else {
                            if (so(e)) throw Error(o(418));
                            e.flags = -4097 & e.flags | 2, ao = !1, no = e
                        }
                    }
                }

                function co(e) {
                    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                    no = e
                }

                function fo(e) {
                    if (e !== no) return !1;
                    if (!ao) return co(e), ao = !0, !1;
                    var t;
                    if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !na(e.type, e.memoizedProps)), t && (t = ro)) {
                        if (so(e)) throw po(), Error(o(418));
                        for (; t;) io(e, t), t = ua(t.nextSibling)
                    }
                    if (co(e), 13 === e.tag) {
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
                        e: {
                            for (e = e.nextSibling, t = 0; e;) {
                                if (8 === e.nodeType) {
                                    var n = e.data;
                                    if ("/$" === n) {
                                        if (0 === t) {
                                            ro = ua(e.nextSibling);
                                            break e
                                        }
                                        t--
                                    } else "$" !== n && "$!" !== n && "$?" !== n || t++
                                }
                                e = e.nextSibling
                            }
                            ro = null
                        }
                    } else ro = no ? ua(e.stateNode.nextSibling) : null;
                    return !0
                }

                function po() {
                    for (var e = ro; e;) e = ua(e.nextSibling)
                }

                function ho() {
                    ro = no = null, ao = !1
                }

                function mo(e) {
                    null === oo ? oo = [e] : oo.push(e)
                }
                var go = x.ReactCurrentBatchConfig;

                function vo(e, t, n) {
                    if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
                        if (n._owner) {
                            if (n = n._owner) {
                                if (1 !== n.tag) throw Error(o(309));
                                var r = n.stateNode
                            }
                            if (!r) throw Error(o(147, e));
                            var a = r,
                                i = "" + e;
                            return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === i ? t.ref : (t = function(e) {
                                var t = a.refs;
                                null === e ? delete t[i] : t[i] = e
                            }, t._stringRef = i, t)
                        }
                        if ("string" != typeof e) throw Error(o(284));
                        if (!n._owner) throw Error(o(290, e))
                    }
                    return e
                }

                function yo(e, t) {
                    throw e = Object.prototype.toString.call(t), Error(o(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
                }

                function bo(e) {
                    return (0, e._init)(e._payload)
                }

                function xo(e) {
                    function t(t, n) {
                        if (e) {
                            var r = t.deletions;
                            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
                        }
                    }

                    function n(n, r) {
                        if (!e) return null;
                        for (; null !== r;) t(n, r), r = r.sibling;
                        return null
                    }

                    function r(e, t) {
                        for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                        return e
                    }

                    function a(e, t) {
                        return (e = Lu(e, t)).index = 0, e.sibling = null, e
                    }

                    function i(t, n, r) {
                        return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
                    }

                    function l(t) {
                        return e && null === t.alternate && (t.flags |= 2), t
                    }

                    function s(e, t, n, r) {
                        return null === t || 6 !== t.tag ? ((t = Ru(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t)
                    }

                    function u(e, t, n, r) {
                        var o = n.type;
                        return o === S ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === o || "object" == typeof o && null !== o && o.$$typeof === T && bo(o) === t.type) ? ((r = a(t, n.props)).ref = vo(e, t, n), r.return = e, r) : ((r = Iu(n.type, n.key, n.props, null, e.mode, r)).ref = vo(e, t, n), r.return = e, r)
                    }

                    function c(e, t, n, r) {
                        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Du(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t)
                    }

                    function d(e, t, n, r, o) {
                        return null === t || 7 !== t.tag ? ((t = Au(n, e.mode, r, o)).return = e, t) : ((t = a(t, n)).return = e, t)
                    }

                    function f(e, t, n) {
                        if ("string" == typeof t && "" !== t || "number" == typeof t) return (t = Ru("" + t, e.mode, n)).return = e, t;
                        if ("object" == typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case w:
                                    return (n = Iu(t.type, t.key, t.props, null, e.mode, n)).ref = vo(e, null, t), n.return = e, n;
                                case k:
                                    return (t = Du(t, e.mode, n)).return = e, t;
                                case T:
                                    return f(e, (0, t._init)(t._payload), n)
                            }
                            if (te(t) || A(t)) return (t = Au(t, e.mode, n, null)).return = e, t;
                            yo(e, t)
                        }
                        return null
                    }

                    function p(e, t, n, r) {
                        var a = null !== t ? t.key : null;
                        if ("string" == typeof n && "" !== n || "number" == typeof n) return null !== a ? null : s(e, t, "" + n, r);
                        if ("object" == typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case w:
                                    return n.key === a ? u(e, t, n, r) : null;
                                case k:
                                    return n.key === a ? c(e, t, n, r) : null;
                                case T:
                                    return p(e, t, (a = n._init)(n._payload), r)
                            }
                            if (te(n) || A(n)) return null !== a ? null : d(e, t, n, r, null);
                            yo(e, n)
                        }
                        return null
                    }

                    function h(e, t, n, r, a) {
                        if ("string" == typeof r && "" !== r || "number" == typeof r) return s(t, e = e.get(n) || null, "" + r, a);
                        if ("object" == typeof r && null !== r) {
                            switch (r.$$typeof) {
                                case w:
                                    return u(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                                case k:
                                    return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                                case T:
                                    return h(e, t, n, (0, r._init)(r._payload), a)
                            }
                            if (te(r) || A(r)) return d(t, e = e.get(n) || null, r, a, null);
                            yo(t, r)
                        }
                        return null
                    }

                    function m(a, o, l, s) {
                        for (var u = null, c = null, d = o, m = o = 0, g = null; null !== d && m < l.length; m++) {
                            d.index > m ? (g = d, d = null) : g = d.sibling;
                            var v = p(a, d, l[m], s);
                            if (null === v) {
                                null === d && (d = g);
                                break
                            }
                            e && d && null === v.alternate && t(a, d), o = i(v, o, m), null === c ? u = v : c.sibling = v, c = v, d = g
                        }
                        if (m === l.length) return n(a, d), ao && Xa(a, m), u;
                        if (null === d) {
                            for (; m < l.length; m++) null !== (d = f(a, l[m], s)) && (o = i(d, o, m), null === c ? u = d : c.sibling = d, c = d);
                            return ao && Xa(a, m), u
                        }
                        for (d = r(a, d); m < l.length; m++) null !== (g = h(d, a, m, l[m], s)) && (e && null !== g.alternate && d.delete(null === g.key ? m : g.key), o = i(g, o, m), null === c ? u = g : c.sibling = g, c = g);
                        return e && d.forEach((function(e) {
                            return t(a, e)
                        })), ao && Xa(a, m), u
                    }

                    function g(a, l, s, u) {
                        var c = A(s);
                        if ("function" != typeof c) throw Error(o(150));
                        if (null == (s = c.call(s))) throw Error(o(151));
                        for (var d = c = null, m = l, g = l = 0, v = null, y = s.next(); null !== m && !y.done; g++, y = s.next()) {
                            m.index > g ? (v = m, m = null) : v = m.sibling;
                            var b = p(a, m, y.value, u);
                            if (null === b) {
                                null === m && (m = v);
                                break
                            }
                            e && m && null === b.alternate && t(a, m), l = i(b, l, g), null === d ? c = b : d.sibling = b, d = b, m = v
                        }
                        if (y.done) return n(a, m), ao && Xa(a, g), c;
                        if (null === m) {
                            for (; !y.done; g++, y = s.next()) null !== (y = f(a, y.value, u)) && (l = i(y, l, g), null === d ? c = y : d.sibling = y, d = y);
                            return ao && Xa(a, g), c
                        }
                        for (m = r(a, m); !y.done; g++, y = s.next()) null !== (y = h(m, a, g, y.value, u)) && (e && null !== y.alternate && m.delete(null === y.key ? g : y.key), l = i(y, l, g), null === d ? c = y : d.sibling = y, d = y);
                        return e && m.forEach((function(e) {
                            return t(a, e)
                        })), ao && Xa(a, g), c
                    }
                    return function e(r, o, i, s) {
                        if ("object" == typeof i && null !== i && i.type === S && null === i.key && (i = i.props.children), "object" == typeof i && null !== i) {
                            switch (i.$$typeof) {
                                case w:
                                    e: {
                                        for (var u = i.key, c = o; null !== c;) {
                                            if (c.key === u) {
                                                if ((u = i.type) === S) {
                                                    if (7 === c.tag) {
                                                        n(r, c.sibling), (o = a(c, i.props.children)).return = r, r = o;
                                                        break e
                                                    }
                                                } else if (c.elementType === u || "object" == typeof u && null !== u && u.$$typeof === T && bo(u) === c.type) {
                                                    n(r, c.sibling), (o = a(c, i.props)).ref = vo(r, c, i), o.return = r, r = o;
                                                    break e
                                                }
                                                n(r, c);
                                                break
                                            }
                                            t(r, c), c = c.sibling
                                        }
                                        i.type === S ? ((o = Au(i.props.children, r.mode, s, i.key)).return = r, r = o) : ((s = Iu(i.type, i.key, i.props, null, r.mode, s)).ref = vo(r, o, i), s.return = r, r = s)
                                    }
                                    return l(r);
                                case k:
                                    e: {
                                        for (c = i.key; null !== o;) {
                                            if (o.key === c) {
                                                if (4 === o.tag && o.stateNode.containerInfo === i.containerInfo && o.stateNode.implementation === i.implementation) {
                                                    n(r, o.sibling), (o = a(o, i.children || [])).return = r, r = o;
                                                    break e
                                                }
                                                n(r, o);
                                                break
                                            }
                                            t(r, o), o = o.sibling
                                        }(o = Du(i, r.mode, s)).return = r,
                                        r = o
                                    }
                                    return l(r);
                                case T:
                                    return e(r, o, (c = i._init)(i._payload), s)
                            }
                            if (te(i)) return m(r, o, i, s);
                            if (A(i)) return g(r, o, i, s);
                            yo(r, i)
                        }
                        return "string" == typeof i && "" !== i || "number" == typeof i ? (i = "" + i, null !== o && 6 === o.tag ? (n(r, o.sibling), (o = a(o, i)).return = r, r = o) : (n(r, o), (o = Ru(i, r.mode, s)).return = r, r = o), l(r)) : n(r, o)
                    }
                }
                var wo = xo(!0),
                    ko = xo(!1),
                    So = ja(null),
                    jo = null,
                    Oo = null,
                    No = null;

                function Eo() {
                    No = Oo = jo = null
                }

                function Po(e) {
                    var t = So.current;
                    Oa(So), e._currentValue = t
                }

                function Co(e, t, n) {
                    for (; null !== e;) {
                        var r = e.alternate;
                        if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
                        e = e.return
                    }
                }

                function zo(e, t) {
                    jo = e, No = Oo = null, null !== (e = e.dependencies) && null !== e.firstContext && (!!(e.lanes & t) && (bl = !0), e.firstContext = null)
                }

                function _o(e) {
                    var t = e._currentValue;
                    if (No !== e)
                        if (e = {
                                context: e,
                                memoizedValue: t,
                                next: null
                            }, null === Oo) {
                            if (null === jo) throw Error(o(308));
                            Oo = e, jo.dependencies = {
                                lanes: 0,
                                firstContext: e
                            }
                        } else Oo = Oo.next = e;
                    return t
                }
                var To = null;

                function Lo(e) {
                    null === To ? To = [e] : To.push(e)
                }

                function Io(e, t, n, r) {
                    var a = t.interleaved;
                    return null === a ? (n.next = n, Lo(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Ao(e, r)
                }

                function Ao(e, t) {
                    e.lanes |= t;
                    var n = e.alternate;
                    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
                    return 3 === n.tag ? n.stateNode : null
                }
                var Mo = !1;

                function Ro(e) {
                    e.updateQueue = {
                        baseState: e.memoizedState,
                        firstBaseUpdate: null,
                        lastBaseUpdate: null,
                        shared: {
                            pending: null,
                            interleaved: null,
                            lanes: 0
                        },
                        effects: null
                    }
                }

                function Do(e, t) {
                    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        effects: e.effects
                    })
                }

                function Fo(e, t) {
                    return {
                        eventTime: e,
                        lane: t,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null
                    }
                }

                function $o(e, t, n) {
                    var r = e.updateQueue;
                    if (null === r) return null;
                    if (r = r.shared, 2 & Ps) {
                        var a = r.pending;
                        return null === a ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Ao(e, n)
                    }
                    return null === (a = r.interleaved) ? (t.next = t, Lo(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Ao(e, n)
                }

                function Ho(e, t, n) {
                    if (null !== (t = t.updateQueue) && (t = t.shared, 4194240 & n)) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
                    }
                }

                function Uo(e, t) {
                    var n = e.updateQueue,
                        r = e.alternate;
                    if (null !== r && n === (r = r.updateQueue)) {
                        var a = null,
                            o = null;
                        if (null !== (n = n.firstBaseUpdate)) {
                            do {
                                var i = {
                                    eventTime: n.eventTime,
                                    lane: n.lane,
                                    tag: n.tag,
                                    payload: n.payload,
                                    callback: n.callback,
                                    next: null
                                };
                                null === o ? a = o = i : o = o.next = i, n = n.next
                            } while (null !== n);
                            null === o ? a = o = t : o = o.next = t
                        } else a = o = t;
                        return n = {
                            baseState: r.baseState,
                            firstBaseUpdate: a,
                            lastBaseUpdate: o,
                            shared: r.shared,
                            effects: r.effects
                        }, void(e.updateQueue = n)
                    }
                    null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
                }

                function Vo(e, t, n, r) {
                    var a = e.updateQueue;
                    Mo = !1;
                    var o = a.firstBaseUpdate,
                        i = a.lastBaseUpdate,
                        l = a.shared.pending;
                    if (null !== l) {
                        a.shared.pending = null;
                        var s = l,
                            u = s.next;
                        s.next = null, null === i ? o = u : i.next = u, i = s;
                        var c = e.alternate;
                        null !== c && ((l = (c = c.updateQueue).lastBaseUpdate) !== i && (null === l ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = s))
                    }
                    if (null !== o) {
                        var d = a.baseState;
                        for (i = 0, c = u = s = null, l = o;;) {
                            var f = l.lane,
                                p = l.eventTime;
                            if ((r & f) === f) {
                                null !== c && (c = c.next = {
                                    eventTime: p,
                                    lane: 0,
                                    tag: l.tag,
                                    payload: l.payload,
                                    callback: l.callback,
                                    next: null
                                });
                                e: {
                                    var h = e,
                                        m = l;
                                    switch (f = t, p = n, m.tag) {
                                        case 1:
                                            if ("function" == typeof(h = m.payload)) {
                                                d = h.call(p, d, f);
                                                break e
                                            }
                                            d = h;
                                            break e;
                                        case 3:
                                            h.flags = -65537 & h.flags | 128;
                                        case 0:
                                            if (null == (f = "function" == typeof(h = m.payload) ? h.call(p, d, f) : h)) break e;
                                            d = R({}, d, f);
                                            break e;
                                        case 2:
                                            Mo = !0
                                    }
                                }
                                null !== l.callback && 0 !== l.lane && (e.flags |= 64, null === (f = a.effects) ? a.effects = [l] : f.push(l))
                            } else p = {
                                eventTime: p,
                                lane: f,
                                tag: l.tag,
                                payload: l.payload,
                                callback: l.callback,
                                next: null
                            }, null === c ? (u = c = p, s = d) : c = c.next = p, i |= f;
                            if (null === (l = l.next)) {
                                if (null === (l = a.shared.pending)) break;
                                l = (f = l).next, f.next = null, a.lastBaseUpdate = f, a.shared.pending = null
                            }
                        }
                        if (null === c && (s = d), a.baseState = s, a.firstBaseUpdate = u, a.lastBaseUpdate = c, null !== (t = a.shared.interleaved)) {
                            a = t;
                            do {
                                i |= a.lane, a = a.next
                            } while (a !== t)
                        } else null === o && (a.shared.lanes = 0);
                        Ms |= i, e.lanes = i, e.memoizedState = d
                    }
                }

                function Bo(e, t, n) {
                    if (e = t.effects, t.effects = null, null !== e)
                        for (t = 0; t < e.length; t++) {
                            var r = e[t],
                                a = r.callback;
                            if (null !== a) {
                                if (r.callback = null, r = n, "function" != typeof a) throw Error(o(191, a));
                                a.call(r)
                            }
                        }
                }
                var Wo = {},
                    Qo = ja(Wo),
                    Ko = ja(Wo),
                    qo = ja(Wo);

                function Yo(e) {
                    if (e === Wo) throw Error(o(174));
                    return e
                }

                function Go(e, t) {
                    switch (Na(qo, t), Na(Ko, e), Na(Qo, Wo), e = t.nodeType) {
                        case 9:
                        case 11:
                            t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
                            break;
                        default:
                            t = se(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                    }
                    Oa(Qo), Na(Qo, t)
                }

                function Jo() {
                    Oa(Qo), Oa(Ko), Oa(qo)
                }

                function Xo(e) {
                    Yo(qo.current);
                    var t = Yo(Qo.current),
                        n = se(t, e.type);
                    t !== n && (Na(Ko, e), Na(Qo, n))
                }

                function Zo(e) {
                    Ko.current === e && (Oa(Qo), Oa(Ko))
                }
                var ei = ja(0);

                function ti(e) {
                    for (var t = e; null !== t;) {
                        if (13 === t.tag) {
                            var n = t.memoizedState;
                            if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
                        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                            if (128 & t.flags) return t
                        } else if (null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                    return null
                }
                var ni = [];

                function ri() {
                    for (var e = 0; e < ni.length; e++) ni[e]._workInProgressVersionPrimary = null;
                    ni.length = 0
                }
                var ai = x.ReactCurrentDispatcher,
                    oi = x.ReactCurrentBatchConfig,
                    ii = 0,
                    li = null,
                    si = null,
                    ui = null,
                    ci = !1,
                    di = !1,
                    fi = 0,
                    pi = 0;

                function hi() {
                    throw Error(o(321))
                }

                function mi(e, t) {
                    if (null === t) return !1;
                    for (var n = 0; n < t.length && n < e.length; n++)
                        if (!lr(e[n], t[n])) return !1;
                    return !0
                }

                function gi(e, t, n, r, a, i) {
                    if (ii = i, li = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ai.current = null === e || null === e.memoizedState ? Zi : el, e = n(r, a), di) {
                        i = 0;
                        do {
                            if (di = !1, fi = 0, 25 <= i) throw Error(o(301));
                            i += 1, ui = si = null, t.updateQueue = null, ai.current = tl, e = n(r, a)
                        } while (di)
                    }
                    if (ai.current = Xi, t = null !== si && null !== si.next, ii = 0, ui = si = li = null, ci = !1, t) throw Error(o(300));
                    return e
                }

                function vi() {
                    var e = 0 !== fi;
                    return fi = 0, e
                }

                function yi() {
                    var e = {
                        memoizedState: null,
                        baseState: null,
                        baseQueue: null,
                        queue: null,
                        next: null
                    };
                    return null === ui ? li.memoizedState = ui = e : ui = ui.next = e, ui
                }

                function bi() {
                    if (null === si) {
                        var e = li.alternate;
                        e = null !== e ? e.memoizedState : null
                    } else e = si.next;
                    var t = null === ui ? li.memoizedState : ui.next;
                    if (null !== t) ui = t, si = e;
                    else {
                        if (null === e) throw Error(o(310));
                        e = {
                            memoizedState: (si = e).memoizedState,
                            baseState: si.baseState,
                            baseQueue: si.baseQueue,
                            queue: si.queue,
                            next: null
                        }, null === ui ? li.memoizedState = ui = e : ui = ui.next = e
                    }
                    return ui
                }

                function xi(e, t) {
                    return "function" == typeof t ? t(e) : t
                }

                function wi(e) {
                    var t = bi(),
                        n = t.queue;
                    if (null === n) throw Error(o(311));
                    n.lastRenderedReducer = e;
                    var r = si,
                        a = r.baseQueue,
                        i = n.pending;
                    if (null !== i) {
                        if (null !== a) {
                            var l = a.next;
                            a.next = i.next, i.next = l
                        }
                        r.baseQueue = a = i, n.pending = null
                    }
                    if (null !== a) {
                        i = a.next, r = r.baseState;
                        var s = l = null,
                            u = null,
                            c = i;
                        do {
                            var d = c.lane;
                            if ((ii & d) === d) null !== u && (u = u.next = {
                                lane: 0,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
                            else {
                                var f = {
                                    lane: d,
                                    action: c.action,
                                    hasEagerState: c.hasEagerState,
                                    eagerState: c.eagerState,
                                    next: null
                                };
                                null === u ? (s = u = f, l = r) : u = u.next = f, li.lanes |= d, Ms |= d
                            }
                            c = c.next
                        } while (null !== c && c !== i);
                        null === u ? l = r : u.next = s, lr(r, t.memoizedState) || (bl = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = u, n.lastRenderedState = r
                    }
                    if (null !== (e = n.interleaved)) {
                        a = e;
                        do {
                            i = a.lane, li.lanes |= i, Ms |= i, a = a.next
                        } while (a !== e)
                    } else null === a && (n.lanes = 0);
                    return [t.memoizedState, n.dispatch]
                }

                function ki(e) {
                    var t = bi(),
                        n = t.queue;
                    if (null === n) throw Error(o(311));
                    n.lastRenderedReducer = e;
                    var r = n.dispatch,
                        a = n.pending,
                        i = t.memoizedState;
                    if (null !== a) {
                        n.pending = null;
                        var l = a = a.next;
                        do {
                            i = e(i, l.action), l = l.next
                        } while (l !== a);
                        lr(i, t.memoizedState) || (bl = !0), t.memoizedState = i, null === t.baseQueue && (t.baseState = i), n.lastRenderedState = i
                    }
                    return [i, r]
                }

                function Si() {}

                function ji(e, t) {
                    var n = li,
                        r = bi(),
                        a = t(),
                        i = !lr(r.memoizedState, a);
                    if (i && (r.memoizedState = a, bl = !0), r = r.queue, Mi(Ei.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || null !== ui && 1 & ui.memoizedState.tag) {
                        if (n.flags |= 2048, _i(9, Ni.bind(null, n, r, a, t), void 0, null), null === Cs) throw Error(o(349));
                        30 & ii || Oi(n, t, a)
                    }
                    return a
                }

                function Oi(e, t, n) {
                    e.flags |= 16384, e = {
                        getSnapshot: t,
                        value: n
                    }, null === (t = li.updateQueue) ? (t = {
                        lastEffect: null,
                        stores: null
                    }, li.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
                }

                function Ni(e, t, n, r) {
                    t.value = n, t.getSnapshot = r, Pi(t) && Ci(e)
                }

                function Ei(e, t, n) {
                    return n((function() {
                        Pi(t) && Ci(e)
                    }))
                }

                function Pi(e) {
                    var t = e.getSnapshot;
                    e = e.value;
                    try {
                        var n = t();
                        return !lr(e, n)
                    } catch (e) {
                        return !0
                    }
                }

                function Ci(e) {
                    var t = Ao(e, 1);
                    null !== t && nu(t, e, 1, -1)
                }

                function zi(e) {
                    var t = yi();
                    return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: xi,
                        lastRenderedState: e
                    }, t.queue = e, e = e.dispatch = qi.bind(null, li, e), [t.memoizedState, e]
                }

                function _i(e, t, n, r) {
                    return e = {
                        tag: e,
                        create: t,
                        destroy: n,
                        deps: r,
                        next: null
                    }, null === (t = li.updateQueue) ? (t = {
                        lastEffect: null,
                        stores: null
                    }, li.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
                }

                function Ti() {
                    return bi().memoizedState
                }

                function Li(e, t, n, r) {
                    var a = yi();
                    li.flags |= e, a.memoizedState = _i(1 | t, n, void 0, void 0 === r ? null : r)
                }

                function Ii(e, t, n, r) {
                    var a = bi();
                    r = void 0 === r ? null : r;
                    var o = void 0;
                    if (null !== si) {
                        var i = si.memoizedState;
                        if (o = i.destroy, null !== r && mi(r, i.deps)) return void(a.memoizedState = _i(t, n, o, r))
                    }
                    li.flags |= e, a.memoizedState = _i(1 | t, n, o, r)
                }

                function Ai(e, t) {
                    return Li(8390656, 8, e, t)
                }

                function Mi(e, t) {
                    return Ii(2048, 8, e, t)
                }

                function Ri(e, t) {
                    return Ii(4, 2, e, t)
                }

                function Di(e, t) {
                    return Ii(4, 4, e, t)
                }

                function Fi(e, t) {
                    return "function" == typeof t ? (e = e(), t(e), function() {
                        t(null)
                    }) : null != t ? (e = e(), t.current = e, function() {
                        t.current = null
                    }) : void 0
                }

                function $i(e, t, n) {
                    return n = null != n ? n.concat([e]) : null, Ii(4, 4, Fi.bind(null, t, e), n)
                }

                function Hi() {}

                function Ui(e, t) {
                    var n = bi();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && mi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
                }

                function Vi(e, t) {
                    var n = bi();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && mi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
                }

                function Bi(e, t, n) {
                    return 21 & ii ? (lr(n, t) || (n = mt(), li.lanes |= n, Ms |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, bl = !0), e.memoizedState = n)
                }

                function Wi(e, t) {
                    var n = bt;
                    bt = 0 !== n && 4 > n ? n : 4, e(!0);
                    var r = oi.transition;
                    oi.transition = {};
                    try {
                        e(!1), t()
                    } finally {
                        bt = n, oi.transition = r
                    }
                }

                function Qi() {
                    return bi().memoizedState
                }

                function Ki(e, t, n) {
                    var r = tu(e);
                    if (n = {
                            lane: r,
                            action: n,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        }, Yi(e)) Gi(t, n);
                    else if (null !== (n = Io(e, t, n, r))) {
                        nu(n, e, r, eu()), Ji(n, t, r)
                    }
                }

                function qi(e, t, n) {
                    var r = tu(e),
                        a = {
                            lane: r,
                            action: n,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        };
                    if (Yi(e)) Gi(t, a);
                    else {
                        var o = e.alternate;
                        if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer)) try {
                            var i = t.lastRenderedState,
                                l = o(i, n);
                            if (a.hasEagerState = !0, a.eagerState = l, lr(l, i)) {
                                var s = t.interleaved;
                                return null === s ? (a.next = a, Lo(t)) : (a.next = s.next, s.next = a), void(t.interleaved = a)
                            }
                        } catch (e) {}
                        null !== (n = Io(e, t, a, r)) && (nu(n, e, r, a = eu()), Ji(n, t, r))
                    }
                }

                function Yi(e) {
                    var t = e.alternate;
                    return e === li || null !== t && t === li
                }

                function Gi(e, t) {
                    di = ci = !0;
                    var n = e.pending;
                    null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
                }

                function Ji(e, t, n) {
                    if (4194240 & n) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
                    }
                }
                var Xi = {
                        readContext: _o,
                        useCallback: hi,
                        useContext: hi,
                        useEffect: hi,
                        useImperativeHandle: hi,
                        useInsertionEffect: hi,
                        useLayoutEffect: hi,
                        useMemo: hi,
                        useReducer: hi,
                        useRef: hi,
                        useState: hi,
                        useDebugValue: hi,
                        useDeferredValue: hi,
                        useTransition: hi,
                        useMutableSource: hi,
                        useSyncExternalStore: hi,
                        useId: hi,
                        unstable_isNewReconciler: !1
                    },
                    Zi = {
                        readContext: _o,
                        useCallback: function(e, t) {
                            return yi().memoizedState = [e, void 0 === t ? null : t], e
                        },
                        useContext: _o,
                        useEffect: Ai,
                        useImperativeHandle: function(e, t, n) {
                            return n = null != n ? n.concat([e]) : null, Li(4194308, 4, Fi.bind(null, t, e), n)
                        },
                        useLayoutEffect: function(e, t) {
                            return Li(4194308, 4, e, t)
                        },
                        useInsertionEffect: function(e, t) {
                            return Li(4, 2, e, t)
                        },
                        useMemo: function(e, t) {
                            var n = yi();
                            return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                        },
                        useReducer: function(e, t, n) {
                            var r = yi();
                            return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                                pending: null,
                                interleaved: null,
                                lanes: 0,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: t
                            }, r.queue = e, e = e.dispatch = Ki.bind(null, li, e), [r.memoizedState, e]
                        },
                        useRef: function(e) {
                            return e = {
                                current: e
                            }, yi().memoizedState = e
                        },
                        useState: zi,
                        useDebugValue: Hi,
                        useDeferredValue: function(e) {
                            return yi().memoizedState = e
                        },
                        useTransition: function() {
                            var e = zi(!1),
                                t = e[0];
                            return e = Wi.bind(null, e[1]), yi().memoizedState = e, [t, e]
                        },
                        useMutableSource: function() {},
                        useSyncExternalStore: function(e, t, n) {
                            var r = li,
                                a = yi();
                            if (ao) {
                                if (void 0 === n) throw Error(o(407));
                                n = n()
                            } else {
                                if (n = t(), null === Cs) throw Error(o(349));
                                30 & ii || Oi(r, t, n)
                            }
                            a.memoizedState = n;
                            var i = {
                                value: n,
                                getSnapshot: t
                            };
                            return a.queue = i, Ai(Ei.bind(null, r, i, e), [e]), r.flags |= 2048, _i(9, Ni.bind(null, r, i, n, t), void 0, null), n
                        },
                        useId: function() {
                            var e = yi(),
                                t = Cs.identifierPrefix;
                            if (ao) {
                                var n = Ja;
                                t = ":" + t + "R" + (n = (Ga & ~(1 << 32 - it(Ga) - 1)).toString(32) + n), 0 < (n = fi++) && (t += "H" + n.toString(32)), t += ":"
                            } else t = ":" + t + "r" + (n = pi++).toString(32) + ":";
                            return e.memoizedState = t
                        },
                        unstable_isNewReconciler: !1
                    },
                    el = {
                        readContext: _o,
                        useCallback: Ui,
                        useContext: _o,
                        useEffect: Mi,
                        useImperativeHandle: $i,
                        useInsertionEffect: Ri,
                        useLayoutEffect: Di,
                        useMemo: Vi,
                        useReducer: wi,
                        useRef: Ti,
                        useState: function() {
                            return wi(xi)
                        },
                        useDebugValue: Hi,
                        useDeferredValue: function(e) {
                            return Bi(bi(), si.memoizedState, e)
                        },
                        useTransition: function() {
                            return [wi(xi)[0], bi().memoizedState]
                        },
                        useMutableSource: Si,
                        useSyncExternalStore: ji,
                        useId: Qi,
                        unstable_isNewReconciler: !1
                    },
                    tl = {
                        readContext: _o,
                        useCallback: Ui,
                        useContext: _o,
                        useEffect: Mi,
                        useImperativeHandle: $i,
                        useInsertionEffect: Ri,
                        useLayoutEffect: Di,
                        useMemo: Vi,
                        useReducer: ki,
                        useRef: Ti,
                        useState: function() {
                            return ki(xi)
                        },
                        useDebugValue: Hi,
                        useDeferredValue: function(e) {
                            var t = bi();
                            return null === si ? t.memoizedState = e : Bi(t, si.memoizedState, e)
                        },
                        useTransition: function() {
                            return [ki(xi)[0], bi().memoizedState]
                        },
                        useMutableSource: Si,
                        useSyncExternalStore: ji,
                        useId: Qi,
                        unstable_isNewReconciler: !1
                    };

                function nl(e, t) {
                    if (e && e.defaultProps) {
                        for (var n in t = R({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                        return t
                    }
                    return t
                }

                function rl(e, t, n, r) {
                    n = null == (n = n(r, t = e.memoizedState)) ? t : R({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
                }
                var al = {
                    isMounted: function(e) {
                        return !!(e = e._reactInternals) && Ue(e) === e
                    },
                    enqueueSetState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = eu(),
                            a = tu(e),
                            o = Fo(r, a);
                        o.payload = t, null != n && (o.callback = n), null !== (t = $o(e, o, a)) && (nu(t, e, a, r), Ho(t, e, a))
                    },
                    enqueueReplaceState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = eu(),
                            a = tu(e),
                            o = Fo(r, a);
                        o.tag = 1, o.payload = t, null != n && (o.callback = n), null !== (t = $o(e, o, a)) && (nu(t, e, a, r), Ho(t, e, a))
                    },
                    enqueueForceUpdate: function(e, t) {
                        e = e._reactInternals;
                        var n = eu(),
                            r = tu(e),
                            a = Fo(n, r);
                        a.tag = 2, null != t && (a.callback = t), null !== (t = $o(e, a, r)) && (nu(t, e, r, n), Ho(t, e, r))
                    }
                };

                function ol(e, t, n, r, a, o, i) {
                    return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, i) : !t.prototype || !t.prototype.isPureReactComponent || (!sr(n, r) || !sr(a, o))
                }

                function il(e, t, n) {
                    var r = !1,
                        a = Ea,
                        o = t.contextType;
                    return "object" == typeof o && null !== o ? o = _o(o) : (a = Ta(t) ? za : Pa.current, o = (r = null != (r = t.contextTypes)) ? _a(e, a) : Ea), t = new t(n, o), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = al, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t
                }

                function ll(e, t, n, r) {
                    e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && al.enqueueReplaceState(t, t.state, null)
                }

                function sl(e, t, n, r) {
                    var a = e.stateNode;
                    a.props = n, a.state = e.memoizedState, a.refs = {}, Ro(e);
                    var o = t.contextType;
                    "object" == typeof o && null !== o ? a.context = _o(o) : (o = Ta(t) ? za : Pa.current, a.context = _a(e, o)), a.state = e.memoizedState, "function" == typeof(o = t.getDerivedStateFromProps) && (rl(e, t, o, n), a.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof a.getSnapshotBeforeUpdate || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || (t = a.state, "function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), t !== a.state && al.enqueueReplaceState(a, a.state, null), Vo(e, n, a, r), a.state = e.memoizedState), "function" == typeof a.componentDidMount && (e.flags |= 4194308)
                }

                function ul(e, t) {
                    try {
                        var n = "",
                            r = t;
                        do {
                            n += H(r), r = r.return
                        } while (r);
                        var a = n
                    } catch (e) {
                        a = "\nError generating stack: " + e.message + "\n" + e.stack
                    }
                    return {
                        value: e,
                        source: t,
                        stack: a,
                        digest: null
                    }
                }

                function cl(e, t, n) {
                    return {
                        value: e,
                        source: null,
                        stack: null != n ? n : null,
                        digest: null != t ? t : null
                    }
                }

                function dl(e, t) {
                    try {
                        console.error(t.value)
                    } catch (e) {
                        setTimeout((function() {
                            throw e
                        }))
                    }
                }
                var fl = "function" == typeof WeakMap ? WeakMap : Map;

                function pl(e, t, n) {
                    (n = Fo(-1, n)).tag = 3, n.payload = {
                        element: null
                    };
                    var r = t.value;
                    return n.callback = function() {
                        Bs || (Bs = !0, Ws = r), dl(0, t)
                    }, n
                }

                function hl(e, t, n) {
                    (n = Fo(-1, n)).tag = 3;
                    var r = e.type.getDerivedStateFromError;
                    if ("function" == typeof r) {
                        var a = t.value;
                        n.payload = function() {
                            return r(a)
                        }, n.callback = function() {
                            dl(0, t)
                        }
                    }
                    var o = e.stateNode;
                    return null !== o && "function" == typeof o.componentDidCatch && (n.callback = function() {
                        dl(0, t), "function" != typeof r && (null === Qs ? Qs = new Set([this]) : Qs.add(this));
                        var e = t.stack;
                        this.componentDidCatch(t.value, {
                            componentStack: null !== e ? e : ""
                        })
                    }), n
                }

                function ml(e, t, n) {
                    var r = e.pingCache;
                    if (null === r) {
                        r = e.pingCache = new fl;
                        var a = new Set;
                        r.set(t, a)
                    } else void 0 === (a = r.get(t)) && (a = new Set, r.set(t, a));
                    a.has(n) || (a.add(n), e = Ou.bind(null, e, t, n), t.then(e, e))
                }

                function gl(e) {
                    do {
                        var t;
                        if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
                        e = e.return
                    } while (null !== e);
                    return null
                }

                function vl(e, t, n, r, a) {
                    return 1 & e.mode ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Fo(-1, 1)).tag = 2, $o(n, t, 1))), n.lanes |= 1), e)
                }
                var yl = x.ReactCurrentOwner,
                    bl = !1;

                function xl(e, t, n, r) {
                    t.child = null === e ? ko(t, null, n, r) : wo(t, e.child, n, r)
                }

                function wl(e, t, n, r, a) {
                    n = n.render;
                    var o = t.ref;
                    return zo(t, a), r = gi(e, t, n, r, o, a), n = vi(), null === e || bl ? (ao && n && eo(t), t.flags |= 1, xl(e, t, r, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Bl(e, t, a))
                }

                function kl(e, t, n, r, a) {
                    if (null === e) {
                        var o = n.type;
                        return "function" != typeof o || Tu(o) || void 0 !== o.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Iu(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = o, Sl(e, t, o, r, a))
                    }
                    if (o = e.child, !(e.lanes & a)) {
                        var i = o.memoizedProps;
                        if ((n = null !== (n = n.compare) ? n : sr)(i, r) && e.ref === t.ref) return Bl(e, t, a)
                    }
                    return t.flags |= 1, (e = Lu(o, r)).ref = t.ref, e.return = t, t.child = e
                }

                function Sl(e, t, n, r, a) {
                    if (null !== e) {
                        var o = e.memoizedProps;
                        if (sr(o, r) && e.ref === t.ref) {
                            if (bl = !1, t.pendingProps = r = o, !(e.lanes & a)) return t.lanes = e.lanes, Bl(e, t, a);
                            131072 & e.flags && (bl = !0)
                        }
                    }
                    return Nl(e, t, n, r, a)
                }

                function jl(e, t, n) {
                    var r = t.pendingProps,
                        a = r.children,
                        o = null !== e ? e.memoizedState : null;
                    if ("hidden" === r.mode)
                        if (1 & t.mode) {
                            if (!(1073741824 & n)) return e = null !== o ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                                baseLanes: e,
                                cachePool: null,
                                transitions: null
                            }, t.updateQueue = null, Na(Ls, Ts), Ts |= e, null;
                            t.memoizedState = {
                                baseLanes: 0,
                                cachePool: null,
                                transitions: null
                            }, r = null !== o ? o.baseLanes : n, Na(Ls, Ts), Ts |= r
                        } else t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null,
                            transitions: null
                        }, Na(Ls, Ts), Ts |= n;
                    else null !== o ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Na(Ls, Ts), Ts |= r;
                    return xl(e, t, a, n), t.child
                }

                function Ol(e, t) {
                    var n = t.ref;
                    (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
                }

                function Nl(e, t, n, r, a) {
                    var o = Ta(n) ? za : Pa.current;
                    return o = _a(t, o), zo(t, a), n = gi(e, t, n, r, o, a), r = vi(), null === e || bl ? (ao && r && eo(t), t.flags |= 1, xl(e, t, n, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Bl(e, t, a))
                }

                function El(e, t, n, r, a) {
                    if (Ta(n)) {
                        var o = !0;
                        Ma(t)
                    } else o = !1;
                    if (zo(t, a), null === t.stateNode) Vl(e, t), il(t, n, r), sl(t, n, r, a), r = !0;
                    else if (null === e) {
                        var i = t.stateNode,
                            l = t.memoizedProps;
                        i.props = l;
                        var s = i.context,
                            u = n.contextType;
                        "object" == typeof u && null !== u ? u = _o(u) : u = _a(t, u = Ta(n) ? za : Pa.current);
                        var c = n.getDerivedStateFromProps,
                            d = "function" == typeof c || "function" == typeof i.getSnapshotBeforeUpdate;
                        d || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (l !== r || s !== u) && ll(t, i, r, u), Mo = !1;
                        var f = t.memoizedState;
                        i.state = f, Vo(t, r, i, a), s = t.memoizedState, l !== r || f !== s || Ca.current || Mo ? ("function" == typeof c && (rl(t, n, c, r), s = t.memoizedState), (l = Mo || ol(t, n, l, r, f, s, u)) ? (d || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || ("function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" == typeof i.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = u, r = l) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), r = !1)
                    } else {
                        i = t.stateNode, Do(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : nl(t.type, l), i.props = u, d = t.pendingProps, f = i.context, "object" == typeof(s = n.contextType) && null !== s ? s = _o(s) : s = _a(t, s = Ta(n) ? za : Pa.current);
                        var p = n.getDerivedStateFromProps;
                        (c = "function" == typeof p || "function" == typeof i.getSnapshotBeforeUpdate) || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (l !== d || f !== s) && ll(t, i, r, s), Mo = !1, f = t.memoizedState, i.state = f, Vo(t, r, i, a);
                        var h = t.memoizedState;
                        l !== d || f !== h || Ca.current || Mo ? ("function" == typeof p && (rl(t, n, p, r), h = t.memoizedState), (u = Mo || ol(t, n, u, r, f, h, s) || !1) ? (c || "function" != typeof i.UNSAFE_componentWillUpdate && "function" != typeof i.componentWillUpdate || ("function" == typeof i.componentWillUpdate && i.componentWillUpdate(r, h, s), "function" == typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, h, s)), "function" == typeof i.componentDidUpdate && (t.flags |= 4), "function" == typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof i.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), i.props = r, i.state = h, i.context = s, r = u) : ("function" != typeof i.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
                    }
                    return Pl(e, t, n, r, o, a)
                }

                function Pl(e, t, n, r, a, o) {
                    Ol(e, t);
                    var i = !!(128 & t.flags);
                    if (!r && !i) return a && Ra(t, n, !1), Bl(e, t, o);
                    r = t.stateNode, yl.current = t;
                    var l = i && "function" != typeof n.getDerivedStateFromError ? null : r.render();
                    return t.flags |= 1, null !== e && i ? (t.child = wo(t, e.child, null, o), t.child = wo(t, null, l, o)) : xl(e, t, l, o), t.memoizedState = r.state, a && Ra(t, n, !0), t.child
                }

                function Cl(e) {
                    var t = e.stateNode;
                    t.pendingContext ? Ia(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Ia(0, t.context, !1), Go(e, t.containerInfo)
                }

                function zl(e, t, n, r, a) {
                    return ho(), mo(a), t.flags |= 256, xl(e, t, n, r), t.child
                }
                var _l, Tl, Ll, Il, Al = {
                    dehydrated: null,
                    treeContext: null,
                    retryLane: 0
                };

                function Ml(e) {
                    return {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    }
                }

                function Rl(e, t, n) {
                    var r, a = t.pendingProps,
                        i = ei.current,
                        l = !1,
                        s = !!(128 & t.flags);
                    if ((r = s) || (r = (null === e || null !== e.memoizedState) && !!(2 & i)), r ? (l = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (i |= 1), Na(ei, 1 & i), null === e) return uo(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (1 & t.mode ? "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = a.children, e = a.fallback, l ? (a = t.mode, l = t.child, s = {
                        mode: "hidden",
                        children: s
                    }, 1 & a || null === l ? l = Mu(s, a, 0, null) : (l.childLanes = 0, l.pendingProps = s), e = Au(e, a, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Ml(n), t.memoizedState = Al, e) : Dl(t, s));
                    if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated)) return function(e, t, n, r, a, i, l) {
                        if (n) return 256 & t.flags ? (t.flags &= -257, Fl(e, t, l, r = cl(Error(o(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, a = t.mode, r = Mu({
                            mode: "visible",
                            children: r.children
                        }, a, 0, null), (i = Au(i, a, l, null)).flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, 1 & t.mode && wo(t, e.child, null, l), t.child.memoizedState = Ml(l), t.memoizedState = Al, i);
                        if (!(1 & t.mode)) return Fl(e, t, l, null);
                        if ("$!" === a.data) {
                            if (r = a.nextSibling && a.nextSibling.dataset) var s = r.dgst;
                            return r = s, Fl(e, t, l, r = cl(i = Error(o(419)), r, void 0))
                        }
                        if (s = !!(l & e.childLanes), bl || s) {
                            if (null !== (r = Cs)) {
                                switch (l & -l) {
                                    case 4:
                                        a = 2;
                                        break;
                                    case 16:
                                        a = 8;
                                        break;
                                    case 64:
                                    case 128:
                                    case 256:
                                    case 512:
                                    case 1024:
                                    case 2048:
                                    case 4096:
                                    case 8192:
                                    case 16384:
                                    case 32768:
                                    case 65536:
                                    case 131072:
                                    case 262144:
                                    case 524288:
                                    case 1048576:
                                    case 2097152:
                                    case 4194304:
                                    case 8388608:
                                    case 16777216:
                                    case 33554432:
                                    case 67108864:
                                        a = 32;
                                        break;
                                    case 536870912:
                                        a = 268435456;
                                        break;
                                    default:
                                        a = 0
                                }
                                0 !== (a = a & (r.suspendedLanes | l) ? 0 : a) && a !== i.retryLane && (i.retryLane = a, Ao(e, a), nu(r, e, a, -1))
                            }
                            return mu(), Fl(e, t, l, r = cl(Error(o(421))))
                        }
                        return "$?" === a.data ? (t.flags |= 128, t.child = e.child, t = Eu.bind(null, e), a._reactRetry = t, null) : (e = i.treeContext, ro = ua(a.nextSibling), no = t, ao = !0, oo = null, null !== e && (Ka[qa++] = Ga, Ka[qa++] = Ja, Ka[qa++] = Ya, Ga = e.id, Ja = e.overflow, Ya = t), t = Dl(t, r.children), t.flags |= 4096, t)
                    }(e, t, s, a, r, i, n);
                    if (l) {
                        l = a.fallback, s = t.mode, r = (i = e.child).sibling;
                        var u = {
                            mode: "hidden",
                            children: a.children
                        };
                        return 1 & s || t.child === i ? (a = Lu(i, u)).subtreeFlags = 14680064 & i.subtreeFlags : ((a = t.child).childLanes = 0, a.pendingProps = u, t.deletions = null), null !== r ? l = Lu(r, l) : (l = Au(l, s, n, null)).flags |= 2, l.return = t, a.return = t, a.sibling = l, t.child = a, a = l, l = t.child, s = null === (s = e.child.memoizedState) ? Ml(n) : {
                            baseLanes: s.baseLanes | n,
                            cachePool: null,
                            transitions: s.transitions
                        }, l.memoizedState = s, l.childLanes = e.childLanes & ~n, t.memoizedState = Al, a
                    }
                    return e = (l = e.child).sibling, a = Lu(l, {
                        mode: "visible",
                        children: a.children
                    }), !(1 & t.mode) && (a.lanes = n), a.return = t, a.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = a, t.memoizedState = null, a
                }

                function Dl(e, t) {
                    return (t = Mu({
                        mode: "visible",
                        children: t
                    }, e.mode, 0, null)).return = e, e.child = t
                }

                function Fl(e, t, n, r) {
                    return null !== r && mo(r), wo(t, e.child, null, n), (e = Dl(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
                }

                function $l(e, t, n) {
                    e.lanes |= t;
                    var r = e.alternate;
                    null !== r && (r.lanes |= t), Co(e.return, t, n)
                }

                function Hl(e, t, n, r, a) {
                    var o = e.memoizedState;
                    null === o ? e.memoizedState = {
                        isBackwards: t,
                        rendering: null,
                        renderingStartTime: 0,
                        last: r,
                        tail: n,
                        tailMode: a
                    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a)
                }

                function Ul(e, t, n) {
                    var r = t.pendingProps,
                        a = r.revealOrder,
                        o = r.tail;
                    if (xl(e, t, r.children, n), 2 & (r = ei.current)) r = 1 & r | 2, t.flags |= 128;
                    else {
                        if (null !== e && 128 & e.flags) e: for (e = t.child; null !== e;) {
                            if (13 === e.tag) null !== e.memoizedState && $l(e, n, t);
                            else if (19 === e.tag) $l(e, n, t);
                            else if (null !== e.child) {
                                e.child.return = e, e = e.child;
                                continue
                            }
                            if (e === t) break e;
                            for (; null === e.sibling;) {
                                if (null === e.return || e.return === t) break e;
                                e = e.return
                            }
                            e.sibling.return = e.return, e = e.sibling
                        }
                        r &= 1
                    }
                    if (Na(ei, r), 1 & t.mode) switch (a) {
                        case "forwards":
                            for (n = t.child, a = null; null !== n;) null !== (e = n.alternate) && null === ti(e) && (a = n), n = n.sibling;
                            null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Hl(t, !1, a, n, o);
                            break;
                        case "backwards":
                            for (n = null, a = t.child, t.child = null; null !== a;) {
                                if (null !== (e = a.alternate) && null === ti(e)) {
                                    t.child = a;
                                    break
                                }
                                e = a.sibling, a.sibling = n, n = a, a = e
                            }
                            Hl(t, !0, n, null, o);
                            break;
                        case "together":
                            Hl(t, !1, null, null, void 0);
                            break;
                        default:
                            t.memoizedState = null
                    } else t.memoizedState = null;
                    return t.child
                }

                function Vl(e, t) {
                    !(1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
                }

                function Bl(e, t, n) {
                    if (null !== e && (t.dependencies = e.dependencies), Ms |= t.lanes, !(n & t.childLanes)) return null;
                    if (null !== e && t.child !== e.child) throw Error(o(153));
                    if (null !== t.child) {
                        for (n = Lu(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Lu(e, e.pendingProps)).return = t;
                        n.sibling = null
                    }
                    return t.child
                }

                function Wl(e, t) {
                    if (!ao) switch (e.tailMode) {
                        case "hidden":
                            t = e.tail;
                            for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                            null === n ? e.tail = null : n.sibling = null;
                            break;
                        case "collapsed":
                            n = e.tail;
                            for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                            null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
                }

                function Ql(e) {
                    var t = null !== e.alternate && e.alternate.child === e.child,
                        n = 0,
                        r = 0;
                    if (t)
                        for (var a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= 14680064 & a.subtreeFlags, r |= 14680064 & a.flags, a.return = e, a = a.sibling;
                    else
                        for (a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
                    return e.subtreeFlags |= r, e.childLanes = n, t
                }

                function Kl(e, t, n) {
                    var r = t.pendingProps;
                    switch (to(t), t.tag) {
                        case 2:
                        case 16:
                        case 15:
                        case 0:
                        case 11:
                        case 7:
                        case 8:
                        case 12:
                        case 9:
                        case 14:
                            return Ql(t), null;
                        case 1:
                        case 17:
                            return Ta(t.type) && La(), Ql(t), null;
                        case 3:
                            return r = t.stateNode, Jo(), Oa(Ca), Oa(Pa), ri(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (fo(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && !(256 & t.flags) || (t.flags |= 1024, null !== oo && (iu(oo), oo = null))), Tl(e, t), Ql(t), null;
                        case 5:
                            Zo(t);
                            var a = Yo(qo.current);
                            if (n = t.type, null !== e && null != t.stateNode) Ll(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                            else {
                                if (!r) {
                                    if (null === t.stateNode) throw Error(o(166));
                                    return Ql(t), null
                                }
                                if (e = Yo(Qo.current), fo(t)) {
                                    r = t.stateNode, n = t.type;
                                    var i = t.memoizedProps;
                                    switch (r[fa] = t, r[pa] = i, e = !!(1 & t.mode), n) {
                                        case "dialog":
                                            Fr("cancel", r), Fr("close", r);
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Fr("load", r);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (a = 0; a < Ar.length; a++) Fr(Ar[a], r);
                                            break;
                                        case "source":
                                            Fr("error", r);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Fr("error", r), Fr("load", r);
                                            break;
                                        case "details":
                                            Fr("toggle", r);
                                            break;
                                        case "input":
                                            G(r, i), Fr("invalid", r);
                                            break;
                                        case "select":
                                            r._wrapperState = {
                                                wasMultiple: !!i.multiple
                                            }, Fr("invalid", r);
                                            break;
                                        case "textarea":
                                            ae(r, i), Fr("invalid", r)
                                    }
                                    for (var s in ye(n, i), a = null, i)
                                        if (i.hasOwnProperty(s)) {
                                            var u = i[s];
                                            "children" === s ? "string" == typeof u ? r.textContent !== u && (!0 !== i.suppressHydrationWarning && Xr(r.textContent, u, e), a = ["children", u]) : "number" == typeof u && r.textContent !== "" + u && (!0 !== i.suppressHydrationWarning && Xr(r.textContent, u, e), a = ["children", "" + u]) : l.hasOwnProperty(s) && null != u && "onScroll" === s && Fr("scroll", r)
                                        }
                                    switch (n) {
                                        case "input":
                                            Q(r), Z(r, i, !0);
                                            break;
                                        case "textarea":
                                            Q(r), ie(r);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" == typeof i.onClick && (r.onclick = Zr)
                                    }
                                    r = a, t.updateQueue = r, null !== r && (t.flags |= 4)
                                } else {
                                    s = 9 === a.nodeType ? a : a.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = le(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = s.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = s.createElement(n, {
                                        is: r.is
                                    }) : (e = s.createElement(n), "select" === n && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[fa] = t, e[pa] = r, _l(e, t, !1, !1), t.stateNode = e;
                                    e: {
                                        switch (s = be(n, r), n) {
                                            case "dialog":
                                                Fr("cancel", e), Fr("close", e), a = r;
                                                break;
                                            case "iframe":
                                            case "object":
                                            case "embed":
                                                Fr("load", e), a = r;
                                                break;
                                            case "video":
                                            case "audio":
                                                for (a = 0; a < Ar.length; a++) Fr(Ar[a], e);
                                                a = r;
                                                break;
                                            case "source":
                                                Fr("error", e), a = r;
                                                break;
                                            case "img":
                                            case "image":
                                            case "link":
                                                Fr("error", e), Fr("load", e), a = r;
                                                break;
                                            case "details":
                                                Fr("toggle", e), a = r;
                                                break;
                                            case "input":
                                                G(e, r), a = Y(e, r), Fr("invalid", e);
                                                break;
                                            case "option":
                                            default:
                                                a = r;
                                                break;
                                            case "select":
                                                e._wrapperState = {
                                                    wasMultiple: !!r.multiple
                                                }, a = R({}, r, {
                                                    value: void 0
                                                }), Fr("invalid", e);
                                                break;
                                            case "textarea":
                                                ae(e, r), a = re(e, r), Fr("invalid", e)
                                        }
                                        for (i in ye(n, a), u = a)
                                            if (u.hasOwnProperty(i)) {
                                                var c = u[i];
                                                "style" === i ? ge(e, c) : "dangerouslySetInnerHTML" === i ? null != (c = c ? c.__html : void 0) && de(e, c) : "children" === i ? "string" == typeof c ? ("textarea" !== n || "" !== c) && fe(e, c) : "number" == typeof c && fe(e, "" + c) : "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (l.hasOwnProperty(i) ? null != c && "onScroll" === i && Fr("scroll", e) : null != c && b(e, i, c, s))
                                            }
                                        switch (n) {
                                            case "input":
                                                Q(e), Z(e, r, !1);
                                                break;
                                            case "textarea":
                                                Q(e), ie(e);
                                                break;
                                            case "option":
                                                null != r.value && e.setAttribute("value", "" + B(r.value));
                                                break;
                                            case "select":
                                                e.multiple = !!r.multiple, null != (i = r.value) ? ne(e, !!r.multiple, i, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                                break;
                                            default:
                                                "function" == typeof a.onClick && (e.onclick = Zr)
                                        }
                                        switch (n) {
                                            case "button":
                                            case "input":
                                            case "select":
                                            case "textarea":
                                                r = !!r.autoFocus;
                                                break e;
                                            case "img":
                                                r = !0;
                                                break e;
                                            default:
                                                r = !1
                                        }
                                    }
                                    r && (t.flags |= 4)
                                }
                                null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
                            }
                            return Ql(t), null;
                        case 6:
                            if (e && null != t.stateNode) Il(e, t, e.memoizedProps, r);
                            else {
                                if ("string" != typeof r && null === t.stateNode) throw Error(o(166));
                                if (n = Yo(qo.current), Yo(Qo.current), fo(t)) {
                                    if (r = t.stateNode, n = t.memoizedProps, r[fa] = t, (i = r.nodeValue !== n) && null !== (e = no)) switch (e.tag) {
                                        case 3:
                                            Xr(r.nodeValue, n, !!(1 & e.mode));
                                            break;
                                        case 5:
                                            !0 !== e.memoizedProps.suppressHydrationWarning && Xr(r.nodeValue, n, !!(1 & e.mode))
                                    }
                                    i && (t.flags |= 4)
                                } else(r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[fa] = t, t.stateNode = r
                            }
                            return Ql(t), null;
                        case 13:
                            if (Oa(ei), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                                if (ao && null !== ro && 1 & t.mode && !(128 & t.flags)) po(), ho(), t.flags |= 98560, i = !1;
                                else if (i = fo(t), null !== r && null !== r.dehydrated) {
                                    if (null === e) {
                                        if (!i) throw Error(o(318));
                                        if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(o(317));
                                        i[fa] = t
                                    } else ho(), !(128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                    Ql(t), i = !1
                                } else null !== oo && (iu(oo), oo = null), i = !0;
                                if (!i) return 65536 & t.flags ? t : null
                            }
                            return 128 & t.flags ? (t.lanes = n, t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 1 & t.mode && (null === e || 1 & ei.current ? 0 === Is && (Is = 3) : mu())), null !== t.updateQueue && (t.flags |= 4), Ql(t), null);
                        case 4:
                            return Jo(), Tl(e, t), null === e && Ur(t.stateNode.containerInfo), Ql(t), null;
                        case 10:
                            return Po(t.type._context), Ql(t), null;
                        case 19:
                            if (Oa(ei), null === (i = t.memoizedState)) return Ql(t), null;
                            if (r = !!(128 & t.flags), null === (s = i.rendering))
                                if (r) Wl(i, !1);
                                else {
                                    if (0 !== Is || null !== e && 128 & e.flags)
                                        for (e = t.child; null !== e;) {
                                            if (null !== (s = ti(e))) {
                                                for (t.flags |= 128, Wl(i, !1), null !== (r = s.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (i = n).flags &= 14680066, null === (s = i.alternate) ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = null === e ? null : {
                                                    lanes: e.lanes,
                                                    firstContext: e.firstContext
                                                }), n = n.sibling;
                                                return Na(ei, 1 & ei.current | 2), t.child
                                            }
                                            e = e.sibling
                                        }
                                    null !== i.tail && Je() > Us && (t.flags |= 128, r = !0, Wl(i, !1), t.lanes = 4194304)
                                }
                            else {
                                if (!r)
                                    if (null !== (e = ti(s))) {
                                        if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Wl(i, !0), null === i.tail && "hidden" === i.tailMode && !s.alternate && !ao) return Ql(t), null
                                    } else 2 * Je() - i.renderingStartTime > Us && 1073741824 !== n && (t.flags |= 128, r = !0, Wl(i, !1), t.lanes = 4194304);
                                i.isBackwards ? (s.sibling = t.child, t.child = s) : (null !== (n = i.last) ? n.sibling = s : t.child = s, i.last = s)
                            }
                            return null !== i.tail ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Je(), t.sibling = null, n = ei.current, Na(ei, r ? 1 & n | 2 : 1 & n), t) : (Ql(t), null);
                        case 22:
                        case 23:
                            return du(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 1 & t.mode ? !!(1073741824 & Ts) && (Ql(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Ql(t), null;
                        case 24:
                        case 25:
                            return null
                    }
                    throw Error(o(156, t.tag))
                }

                function ql(e, t) {
                    switch (to(t), t.tag) {
                        case 1:
                            return Ta(t.type) && La(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 3:
                            return Jo(), Oa(Ca), Oa(Pa), ri(), 65536 & (e = t.flags) && !(128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                        case 5:
                            return Zo(t), null;
                        case 13:
                            if (Oa(ei), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                                if (null === t.alternate) throw Error(o(340));
                                ho()
                            }
                            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 19:
                            return Oa(ei), null;
                        case 4:
                            return Jo(), null;
                        case 10:
                            return Po(t.type._context), null;
                        case 22:
                        case 23:
                            return du(), null;
                        default:
                            return null
                    }
                }
                _l = function(e, t) {
                    for (var n = t.child; null !== n;) {
                        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                        else if (4 !== n.tag && null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue
                        }
                        if (n === t) break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === t) return;
                            n = n.return
                        }
                        n.sibling.return = n.return, n = n.sibling
                    }
                }, Tl = function() {}, Ll = function(e, t, n, r) {
                    var a = e.memoizedProps;
                    if (a !== r) {
                        e = t.stateNode, Yo(Qo.current);
                        var o, i = null;
                        switch (n) {
                            case "input":
                                a = Y(e, a), r = Y(e, r), i = [];
                                break;
                            case "select":
                                a = R({}, a, {
                                    value: void 0
                                }), r = R({}, r, {
                                    value: void 0
                                }), i = [];
                                break;
                            case "textarea":
                                a = re(e, a), r = re(e, r), i = [];
                                break;
                            default:
                                "function" != typeof a.onClick && "function" == typeof r.onClick && (e.onclick = Zr)
                        }
                        for (c in ye(n, r), n = null, a)
                            if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                                if ("style" === c) {
                                    var s = a[c];
                                    for (o in s) s.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
                                } else "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (l.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
                        for (c in r) {
                            var u = r[c];
                            if (s = null != a ? a[c] : void 0, r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                                if ("style" === c)
                                    if (s) {
                                        for (o in s) !s.hasOwnProperty(o) || u && u.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                                        for (o in u) u.hasOwnProperty(o) && s[o] !== u[o] && (n || (n = {}), n[o] = u[o])
                                    } else n || (i || (i = []), i.push(c, n)), n = u;
                            else "dangerouslySetInnerHTML" === c ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, null != u && s !== u && (i = i || []).push(c, u)) : "children" === c ? "string" != typeof u && "number" != typeof u || (i = i || []).push(c, "" + u) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (l.hasOwnProperty(c) ? (null != u && "onScroll" === c && Fr("scroll", e), i || s === u || (i = [])) : (i = i || []).push(c, u))
                        }
                        n && (i = i || []).push("style", n);
                        var c = i;
                        (t.updateQueue = c) && (t.flags |= 4)
                    }
                }, Il = function(e, t, n, r) {
                    n !== r && (t.flags |= 4)
                };
                var Yl = !1,
                    Gl = !1,
                    Jl = "function" == typeof WeakSet ? WeakSet : Set,
                    Xl = null;

                function Zl(e, t) {
                    var n = e.ref;
                    if (null !== n)
                        if ("function" == typeof n) try {
                            n(null)
                        } catch (n) {
                            ju(e, t, n)
                        } else n.current = null
                }

                function es(e, t, n) {
                    try {
                        n()
                    } catch (n) {
                        ju(e, t, n)
                    }
                }
                var ts = !1;

                function ns(e, t, n) {
                    var r = t.updateQueue;
                    if (null !== (r = null !== r ? r.lastEffect : null)) {
                        var a = r = r.next;
                        do {
                            if ((a.tag & e) === e) {
                                var o = a.destroy;
                                a.destroy = void 0, void 0 !== o && es(t, n, o)
                            }
                            a = a.next
                        } while (a !== r)
                    }
                }

                function rs(e, t) {
                    if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                        var n = t = t.next;
                        do {
                            if ((n.tag & e) === e) {
                                var r = n.create;
                                n.destroy = r()
                            }
                            n = n.next
                        } while (n !== t)
                    }
                }

                function as(e) {
                    var t = e.ref;
                    if (null !== t) {
                        var n = e.stateNode;
                        e.tag, e = n, "function" == typeof t ? t(e) : t.current = e
                    }
                }

                function os(e) {
                    var t = e.alternate;
                    null !== t && (e.alternate = null, os(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && (delete t[fa], delete t[pa], delete t[ma], delete t[ga], delete t[va])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
                }

                function is(e) {
                    return 5 === e.tag || 3 === e.tag || 4 === e.tag
                }

                function ls(e) {
                    e: for (;;) {
                        for (; null === e.sibling;) {
                            if (null === e.return || is(e.return)) return null;
                            e = e.return
                        }
                        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                            if (2 & e.flags) continue e;
                            if (null === e.child || 4 === e.tag) continue e;
                            e.child.return = e, e = e.child
                        }
                        if (!(2 & e.flags)) return e.stateNode
                    }
                }

                function ss(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Zr));
                    else if (4 !== r && null !== (e = e.child))
                        for (ss(e, t, n), e = e.sibling; null !== e;) ss(e, t, n), e = e.sibling
                }

                function us(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
                    else if (4 !== r && null !== (e = e.child))
                        for (us(e, t, n), e = e.sibling; null !== e;) us(e, t, n), e = e.sibling
                }
                var cs = null,
                    ds = !1;

                function fs(e, t, n) {
                    for (n = n.child; null !== n;) ps(e, t, n), n = n.sibling
                }

                function ps(e, t, n) {
                    if (ot && "function" == typeof ot.onCommitFiberUnmount) try {
                        ot.onCommitFiberUnmount(at, n)
                    } catch (e) {}
                    switch (n.tag) {
                        case 5:
                            Gl || Zl(n, t);
                        case 6:
                            var r = cs,
                                a = ds;
                            cs = null, fs(e, t, n), ds = a, null !== (cs = r) && (ds ? (e = cs, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : cs.removeChild(n.stateNode));
                            break;
                        case 18:
                            null !== cs && (ds ? (e = cs, n = n.stateNode, 8 === e.nodeType ? sa(e.parentNode, n) : 1 === e.nodeType && sa(e, n), Ut(e)) : sa(cs, n.stateNode));
                            break;
                        case 4:
                            r = cs, a = ds, cs = n.stateNode.containerInfo, ds = !0, fs(e, t, n), cs = r, ds = a;
                            break;
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (!Gl && (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))) {
                                a = r = r.next;
                                do {
                                    var o = a,
                                        i = o.destroy;
                                    o = o.tag, void 0 !== i && (2 & o || 4 & o) && es(n, t, i), a = a.next
                                } while (a !== r)
                            }
                            fs(e, t, n);
                            break;
                        case 1:
                            if (!Gl && (Zl(n, t), "function" == typeof(r = n.stateNode).componentWillUnmount)) try {
                                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
                            } catch (e) {
                                ju(n, t, e)
                            }
                            fs(e, t, n);
                            break;
                        case 21:
                            fs(e, t, n);
                            break;
                        case 22:
                            1 & n.mode ? (Gl = (r = Gl) || null !== n.memoizedState, fs(e, t, n), Gl = r) : fs(e, t, n);
                            break;
                        default:
                            fs(e, t, n)
                    }
                }

                function hs(e) {
                    var t = e.updateQueue;
                    if (null !== t) {
                        e.updateQueue = null;
                        var n = e.stateNode;
                        null === n && (n = e.stateNode = new Jl), t.forEach((function(t) {
                            var r = Pu.bind(null, e, t);
                            n.has(t) || (n.add(t), t.then(r, r))
                        }))
                    }
                }

                function ms(e, t) {
                    var n = t.deletions;
                    if (null !== n)
                        for (var r = 0; r < n.length; r++) {
                            var a = n[r];
                            try {
                                var i = e,
                                    l = t,
                                    s = l;
                                e: for (; null !== s;) {
                                    switch (s.tag) {
                                        case 5:
                                            cs = s.stateNode, ds = !1;
                                            break e;
                                        case 3:
                                        case 4:
                                            cs = s.stateNode.containerInfo, ds = !0;
                                            break e
                                    }
                                    s = s.return
                                }
                                if (null === cs) throw Error(o(160));
                                ps(i, l, a), cs = null, ds = !1;
                                var u = a.alternate;
                                null !== u && (u.return = null), a.return = null
                            } catch (e) {
                                ju(a, t, e)
                            }
                        }
                    if (12854 & t.subtreeFlags)
                        for (t = t.child; null !== t;) gs(t, e), t = t.sibling
                }

                function gs(e, t) {
                    var n = e.alternate,
                        r = e.flags;
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (ms(t, e), vs(e), 4 & r) {
                                try {
                                    ns(3, e, e.return), rs(3, e)
                                } catch (t) {
                                    ju(e, e.return, t)
                                }
                                try {
                                    ns(5, e, e.return)
                                } catch (t) {
                                    ju(e, e.return, t)
                                }
                            }
                            break;
                        case 1:
                            ms(t, e), vs(e), 512 & r && null !== n && Zl(n, n.return);
                            break;
                        case 5:
                            if (ms(t, e), vs(e), 512 & r && null !== n && Zl(n, n.return), 32 & e.flags) {
                                var a = e.stateNode;
                                try {
                                    fe(a, "")
                                } catch (t) {
                                    ju(e, e.return, t)
                                }
                            }
                            if (4 & r && null != (a = e.stateNode)) {
                                var i = e.memoizedProps,
                                    l = null !== n ? n.memoizedProps : i,
                                    s = e.type,
                                    u = e.updateQueue;
                                if (e.updateQueue = null, null !== u) try {
                                    "input" === s && "radio" === i.type && null != i.name && J(a, i), be(s, l);
                                    var c = be(s, i);
                                    for (l = 0; l < u.length; l += 2) {
                                        var d = u[l],
                                            f = u[l + 1];
                                        "style" === d ? ge(a, f) : "dangerouslySetInnerHTML" === d ? de(a, f) : "children" === d ? fe(a, f) : b(a, d, f, c)
                                    }
                                    switch (s) {
                                        case "input":
                                            X(a, i);
                                            break;
                                        case "textarea":
                                            oe(a, i);
                                            break;
                                        case "select":
                                            var p = a._wrapperState.wasMultiple;
                                            a._wrapperState.wasMultiple = !!i.multiple;
                                            var h = i.value;
                                            null != h ? ne(a, !!i.multiple, h, !1) : p !== !!i.multiple && (null != i.defaultValue ? ne(a, !!i.multiple, i.defaultValue, !0) : ne(a, !!i.multiple, i.multiple ? [] : "", !1))
                                    }
                                    a[pa] = i
                                } catch (t) {
                                    ju(e, e.return, t)
                                }
                            }
                            break;
                        case 6:
                            if (ms(t, e), vs(e), 4 & r) {
                                if (null === e.stateNode) throw Error(o(162));
                                a = e.stateNode, i = e.memoizedProps;
                                try {
                                    a.nodeValue = i
                                } catch (t) {
                                    ju(e, e.return, t)
                                }
                            }
                            break;
                        case 3:
                            if (ms(t, e), vs(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                                Ut(t.containerInfo)
                            } catch (t) {
                                ju(e, e.return, t)
                            }
                            break;
                        case 4:
                        default:
                            ms(t, e), vs(e);
                            break;
                        case 13:
                            ms(t, e), vs(e), 8192 & (a = e.child).flags && (i = null !== a.memoizedState, a.stateNode.isHidden = i, !i || null !== a.alternate && null !== a.alternate.memoizedState || (Hs = Je())), 4 & r && hs(e);
                            break;
                        case 22:
                            if (d = null !== n && null !== n.memoizedState, 1 & e.mode ? (Gl = (c = Gl) || d, ms(t, e), Gl = c) : ms(t, e), vs(e), 8192 & r) {
                                if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !d && 1 & e.mode)
                                    for (Xl = e, d = e.child; null !== d;) {
                                        for (f = Xl = d; null !== Xl;) {
                                            switch (h = (p = Xl).child, p.tag) {
                                                case 0:
                                                case 11:
                                                case 14:
                                                case 15:
                                                    ns(4, p, p.return);
                                                    break;
                                                case 1:
                                                    Zl(p, p.return);
                                                    var m = p.stateNode;
                                                    if ("function" == typeof m.componentWillUnmount) {
                                                        r = p, n = p.return;
                                                        try {
                                                            t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount()
                                                        } catch (e) {
                                                            ju(r, n, e)
                                                        }
                                                    }
                                                    break;
                                                case 5:
                                                    Zl(p, p.return);
                                                    break;
                                                case 22:
                                                    if (null !== p.memoizedState) {
                                                        ws(f);
                                                        continue
                                                    }
                                            }
                                            null !== h ? (h.return = p, Xl = h) : ws(f)
                                        }
                                        d = d.sibling
                                    }
                                e: for (d = null, f = e;;) {
                                    if (5 === f.tag) {
                                        if (null === d) {
                                            d = f;
                                            try {
                                                a = f.stateNode, c ? "function" == typeof(i = a.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none" : (s = f.stateNode, l = null != (u = f.memoizedProps.style) && u.hasOwnProperty("display") ? u.display : null, s.style.display = me("display", l))
                                            } catch (t) {
                                                ju(e, e.return, t)
                                            }
                                        }
                                    } else if (6 === f.tag) {
                                        if (null === d) try {
                                            f.stateNode.nodeValue = c ? "" : f.memoizedProps
                                        } catch (t) {
                                            ju(e, e.return, t)
                                        }
                                    } else if ((22 !== f.tag && 23 !== f.tag || null === f.memoizedState || f === e) && null !== f.child) {
                                        f.child.return = f, f = f.child;
                                        continue
                                    }
                                    if (f === e) break e;
                                    for (; null === f.sibling;) {
                                        if (null === f.return || f.return === e) break e;
                                        d === f && (d = null), f = f.return
                                    }
                                    d === f && (d = null), f.sibling.return = f.return, f = f.sibling
                                }
                            }
                            break;
                        case 19:
                            ms(t, e), vs(e), 4 & r && hs(e);
                        case 21:
                    }
                }

                function vs(e) {
                    var t = e.flags;
                    if (2 & t) {
                        try {
                            e: {
                                for (var n = e.return; null !== n;) {
                                    if (is(n)) {
                                        var r = n;
                                        break e
                                    }
                                    n = n.return
                                }
                                throw Error(o(160))
                            }
                            switch (r.tag) {
                                case 5:
                                    var a = r.stateNode;
                                    32 & r.flags && (fe(a, ""), r.flags &= -33), us(e, ls(e), a);
                                    break;
                                case 3:
                                case 4:
                                    var i = r.stateNode.containerInfo;
                                    ss(e, ls(e), i);
                                    break;
                                default:
                                    throw Error(o(161))
                            }
                        }
                        catch (t) {
                            ju(e, e.return, t)
                        }
                        e.flags &= -3
                    }
                    4096 & t && (e.flags &= -4097)
                }

                function ys(e, t, n) {
                    Xl = e, bs(e, t, n)
                }

                function bs(e, t, n) {
                    for (var r = !!(1 & e.mode); null !== Xl;) {
                        var a = Xl,
                            o = a.child;
                        if (22 === a.tag && r) {
                            var i = null !== a.memoizedState || Yl;
                            if (!i) {
                                var l = a.alternate,
                                    s = null !== l && null !== l.memoizedState || Gl;
                                l = Yl;
                                var u = Gl;
                                if (Yl = i, (Gl = s) && !u)
                                    for (Xl = a; null !== Xl;) s = (i = Xl).child, 22 === i.tag && null !== i.memoizedState ? ks(a) : null !== s ? (s.return = i, Xl = s) : ks(a);
                                for (; null !== o;) Xl = o, bs(o, t, n), o = o.sibling;
                                Xl = a, Yl = l, Gl = u
                            }
                            xs(e)
                        } else 8772 & a.subtreeFlags && null !== o ? (o.return = a, Xl = o) : xs(e)
                    }
                }

                function xs(e) {
                    for (; null !== Xl;) {
                        var t = Xl;
                        if (8772 & t.flags) {
                            var n = t.alternate;
                            try {
                                if (8772 & t.flags) switch (t.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Gl || rs(5, t);
                                        break;
                                    case 1:
                                        var r = t.stateNode;
                                        if (4 & t.flags && !Gl)
                                            if (null === n) r.componentDidMount();
                                            else {
                                                var a = t.elementType === t.type ? n.memoizedProps : nl(t.type, n.memoizedProps);
                                                r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                            }
                                        var i = t.updateQueue;
                                        null !== i && Bo(t, i, r);
                                        break;
                                    case 3:
                                        var l = t.updateQueue;
                                        if (null !== l) {
                                            if (n = null, null !== t.child) switch (t.child.tag) {
                                                case 5:
                                                case 1:
                                                    n = t.child.stateNode
                                            }
                                            Bo(t, l, n)
                                        }
                                        break;
                                    case 5:
                                        var s = t.stateNode;
                                        if (null === n && 4 & t.flags) {
                                            n = s;
                                            var u = t.memoizedProps;
                                            switch (t.type) {
                                                case "button":
                                                case "input":
                                                case "select":
                                                case "textarea":
                                                    u.autoFocus && n.focus();
                                                    break;
                                                case "img":
                                                    u.src && (n.src = u.src)
                                            }
                                        }
                                        break;
                                    case 6:
                                    case 4:
                                    case 12:
                                    case 19:
                                    case 17:
                                    case 21:
                                    case 22:
                                    case 23:
                                    case 25:
                                        break;
                                    case 13:
                                        if (null === t.memoizedState) {
                                            var c = t.alternate;
                                            if (null !== c) {
                                                var d = c.memoizedState;
                                                if (null !== d) {
                                                    var f = d.dehydrated;
                                                    null !== f && Ut(f)
                                                }
                                            }
                                        }
                                        break;
                                    default:
                                        throw Error(o(163))
                                }
                                Gl || 512 & t.flags && as(t)
                            } catch (e) {
                                ju(t, t.return, e)
                            }
                        }
                        if (t === e) {
                            Xl = null;
                            break
                        }
                        if (null !== (n = t.sibling)) {
                            n.return = t.return, Xl = n;
                            break
                        }
                        Xl = t.return
                    }
                }

                function ws(e) {
                    for (; null !== Xl;) {
                        var t = Xl;
                        if (t === e) {
                            Xl = null;
                            break
                        }
                        var n = t.sibling;
                        if (null !== n) {
                            n.return = t.return, Xl = n;
                            break
                        }
                        Xl = t.return
                    }
                }

                function ks(e) {
                    for (; null !== Xl;) {
                        var t = Xl;
                        try {
                            switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    var n = t.return;
                                    try {
                                        rs(4, t)
                                    } catch (e) {
                                        ju(t, n, e)
                                    }
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if ("function" == typeof r.componentDidMount) {
                                        var a = t.return;
                                        try {
                                            r.componentDidMount()
                                        } catch (e) {
                                            ju(t, a, e)
                                        }
                                    }
                                    var o = t.return;
                                    try {
                                        as(t)
                                    } catch (e) {
                                        ju(t, o, e)
                                    }
                                    break;
                                case 5:
                                    var i = t.return;
                                    try {
                                        as(t)
                                    } catch (e) {
                                        ju(t, i, e)
                                    }
                            }
                        } catch (e) {
                            ju(t, t.return, e)
                        }
                        if (t === e) {
                            Xl = null;
                            break
                        }
                        var l = t.sibling;
                        if (null !== l) {
                            l.return = t.return, Xl = l;
                            break
                        }
                        Xl = t.return
                    }
                }
                var Ss, js = Math.ceil,
                    Os = x.ReactCurrentDispatcher,
                    Ns = x.ReactCurrentOwner,
                    Es = x.ReactCurrentBatchConfig,
                    Ps = 0,
                    Cs = null,
                    zs = null,
                    _s = 0,
                    Ts = 0,
                    Ls = ja(0),
                    Is = 0,
                    As = null,
                    Ms = 0,
                    Rs = 0,
                    Ds = 0,
                    Fs = null,
                    $s = null,
                    Hs = 0,
                    Us = 1 / 0,
                    Vs = null,
                    Bs = !1,
                    Ws = null,
                    Qs = null,
                    Ks = !1,
                    qs = null,
                    Ys = 0,
                    Gs = 0,
                    Js = null,
                    Xs = -1,
                    Zs = 0;

                function eu() {
                    return 6 & Ps ? Je() : -1 !== Xs ? Xs : Xs = Je()
                }

                function tu(e) {
                    return 1 & e.mode ? 2 & Ps && 0 !== _s ? _s & -_s : null !== go.transition ? (0 === Zs && (Zs = mt()), Zs) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : Gt(e.type) : 1
                }

                function nu(e, t, n, r) {
                    if (50 < Gs) throw Gs = 0, Js = null, Error(o(185));
                    vt(e, n, r), 2 & Ps && e === Cs || (e === Cs && (!(2 & Ps) && (Rs |= n), 4 === Is && lu(e, _s)), ru(e, r), 1 === n && 0 === Ps && !(1 & t.mode) && (Us = Je() + 500, Fa && Ua()))
                }

                function ru(e, t) {
                    var n = e.callbackNode;
                    ! function(e, t) {
                        for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
                            var i = 31 - it(o),
                                l = 1 << i,
                                s = a[i]; - 1 === s ? l & n && !(l & r) || (a[i] = pt(l, t)) : s <= t && (e.expiredLanes |= l), o &= ~l
                        }
                    }(e, t);
                    var r = ft(e, e === Cs ? _s : 0);
                    if (0 === r) null !== n && qe(n), e.callbackNode = null, e.callbackPriority = 0;
                    else if (t = r & -r, e.callbackPriority !== t) {
                        if (null != n && qe(n), 1 === t) 0 === e.tag ? function(e) {
                            Fa = !0, Ha(e)
                        }(su.bind(null, e)) : Ha(su.bind(null, e)), ia((function() {
                            !(6 & Ps) && Ua()
                        })), n = null;
                        else {
                            switch (xt(r)) {
                                case 1:
                                    n = Ze;
                                    break;
                                case 4:
                                    n = et;
                                    break;
                                case 16:
                                default:
                                    n = tt;
                                    break;
                                case 536870912:
                                    n = rt
                            }
                            n = Cu(n, au.bind(null, e))
                        }
                        e.callbackPriority = t, e.callbackNode = n
                    }
                }

                function au(e, t) {
                    if (Xs = -1, Zs = 0, 6 & Ps) throw Error(o(327));
                    var n = e.callbackNode;
                    if (ku() && e.callbackNode !== n) return null;
                    var r = ft(e, e === Cs ? _s : 0);
                    if (0 === r) return null;
                    if (30 & r || r & e.expiredLanes || t) t = gu(e, r);
                    else {
                        t = r;
                        var a = Ps;
                        Ps |= 2;
                        var i = hu();
                        for (Cs === e && _s === t || (Vs = null, Us = Je() + 500, fu(e, t));;) try {
                            yu();
                            break
                        } catch (t) {
                            pu(e, t)
                        }
                        Eo(), Os.current = i, Ps = a, null !== zs ? t = 0 : (Cs = null, _s = 0, t = Is)
                    }
                    if (0 !== t) {
                        if (2 === t && (0 !== (a = ht(e)) && (r = a, t = ou(e, a))), 1 === t) throw n = As, fu(e, 0), lu(e, r), ru(e, Je()), n;
                        if (6 === t) lu(e, r);
                        else {
                            if (a = e.current.alternate, !(30 & r || function(e) {
                                    for (var t = e;;) {
                                        if (16384 & t.flags) {
                                            var n = t.updateQueue;
                                            if (null !== n && null !== (n = n.stores))
                                                for (var r = 0; r < n.length; r++) {
                                                    var a = n[r],
                                                        o = a.getSnapshot;
                                                    a = a.value;
                                                    try {
                                                        if (!lr(o(), a)) return !1
                                                    } catch (e) {
                                                        return !1
                                                    }
                                                }
                                        }
                                        if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
                                        else {
                                            if (t === e) break;
                                            for (; null === t.sibling;) {
                                                if (null === t.return || t.return === e) return !0;
                                                t = t.return
                                            }
                                            t.sibling.return = t.return, t = t.sibling
                                        }
                                    }
                                    return !0
                                }(a) || (t = gu(e, r), 2 === t && (i = ht(e), 0 !== i && (r = i, t = ou(e, i))), 1 !== t))) throw n = As, fu(e, 0), lu(e, r), ru(e, Je()), n;
                            switch (e.finishedWork = a, e.finishedLanes = r, t) {
                                case 0:
                                case 1:
                                    throw Error(o(345));
                                case 2:
                                case 5:
                                    wu(e, $s, Vs);
                                    break;
                                case 3:
                                    if (lu(e, r), (130023424 & r) === r && 10 < (t = Hs + 500 - Je())) {
                                        if (0 !== ft(e, 0)) break;
                                        if (((a = e.suspendedLanes) & r) !== r) {
                                            eu(), e.pingedLanes |= e.suspendedLanes & a;
                                            break
                                        }
                                        e.timeoutHandle = ra(wu.bind(null, e, $s, Vs), t);
                                        break
                                    }
                                    wu(e, $s, Vs);
                                    break;
                                case 4:
                                    if (lu(e, r), (4194240 & r) === r) break;
                                    for (t = e.eventTimes, a = -1; 0 < r;) {
                                        var l = 31 - it(r);
                                        i = 1 << l, (l = t[l]) > a && (a = l), r &= ~i
                                    }
                                    if (r = a, 10 < (r = (120 > (r = Je() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * js(r / 1960)) - r)) {
                                        e.timeoutHandle = ra(wu.bind(null, e, $s, Vs), r);
                                        break
                                    }
                                    wu(e, $s, Vs);
                                    break;
                                default:
                                    throw Error(o(329))
                            }
                        }
                    }
                    return ru(e, Je()), e.callbackNode === n ? au.bind(null, e) : null
                }

                function ou(e, t) {
                    var n = Fs;
                    return e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256), 2 !== (e = gu(e, t)) && (t = $s, $s = n, null !== t && iu(t)), e
                }

                function iu(e) {
                    null === $s ? $s = e : $s.push.apply($s, e)
                }

                function lu(e, t) {
                    for (t &= ~Ds, t &= ~Rs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                        var n = 31 - it(t),
                            r = 1 << n;
                        e[n] = -1, t &= ~r
                    }
                }

                function su(e) {
                    if (6 & Ps) throw Error(o(327));
                    ku();
                    var t = ft(e, 0);
                    if (!(1 & t)) return ru(e, Je()), null;
                    var n = gu(e, t);
                    if (0 !== e.tag && 2 === n) {
                        var r = ht(e);
                        0 !== r && (t = r, n = ou(e, r))
                    }
                    if (1 === n) throw n = As, fu(e, 0), lu(e, t), ru(e, Je()), n;
                    if (6 === n) throw Error(o(345));
                    return e.finishedWork = e.current.alternate, e.finishedLanes = t, wu(e, $s, Vs), ru(e, Je()), null
                }

                function uu(e, t) {
                    var n = Ps;
                    Ps |= 1;
                    try {
                        return e(t)
                    } finally {
                        0 === (Ps = n) && (Us = Je() + 500, Fa && Ua())
                    }
                }

                function cu(e) {
                    null !== qs && 0 === qs.tag && !(6 & Ps) && ku();
                    var t = Ps;
                    Ps |= 1;
                    var n = Es.transition,
                        r = bt;
                    try {
                        if (Es.transition = null, bt = 1, e) return e()
                    } finally {
                        bt = r, Es.transition = n, !(6 & (Ps = t)) && Ua()
                    }
                }

                function du() {
                    Ts = Ls.current, Oa(Ls)
                }

                function fu(e, t) {
                    e.finishedWork = null, e.finishedLanes = 0;
                    var n = e.timeoutHandle;
                    if (-1 !== n && (e.timeoutHandle = -1, aa(n)), null !== zs)
                        for (n = zs.return; null !== n;) {
                            var r = n;
                            switch (to(r), r.tag) {
                                case 1:
                                    null != (r = r.type.childContextTypes) && La();
                                    break;
                                case 3:
                                    Jo(), Oa(Ca), Oa(Pa), ri();
                                    break;
                                case 5:
                                    Zo(r);
                                    break;
                                case 4:
                                    Jo();
                                    break;
                                case 13:
                                case 19:
                                    Oa(ei);
                                    break;
                                case 10:
                                    Po(r.type._context);
                                    break;
                                case 22:
                                case 23:
                                    du()
                            }
                            n = n.return
                        }
                    if (Cs = e, zs = e = Lu(e.current, null), _s = Ts = t, Is = 0, As = null, Ds = Rs = Ms = 0, $s = Fs = null, null !== To) {
                        for (t = 0; t < To.length; t++)
                            if (null !== (r = (n = To[t]).interleaved)) {
                                n.interleaved = null;
                                var a = r.next,
                                    o = n.pending;
                                if (null !== o) {
                                    var i = o.next;
                                    o.next = a, r.next = i
                                }
                                n.pending = r
                            }
                        To = null
                    }
                    return e
                }

                function pu(e, t) {
                    for (;;) {
                        var n = zs;
                        try {
                            if (Eo(), ai.current = Xi, ci) {
                                for (var r = li.memoizedState; null !== r;) {
                                    var a = r.queue;
                                    null !== a && (a.pending = null), r = r.next
                                }
                                ci = !1
                            }
                            if (ii = 0, ui = si = li = null, di = !1, fi = 0, Ns.current = null, null === n || null === n.return) {
                                Is = 1, As = t, zs = null;
                                break
                            }
                            e: {
                                var i = e,
                                    l = n.return,
                                    s = n,
                                    u = t;
                                if (t = _s, s.flags |= 32768, null !== u && "object" == typeof u && "function" == typeof u.then) {
                                    var c = u,
                                        d = s,
                                        f = d.tag;
                                    if (!(1 & d.mode || 0 !== f && 11 !== f && 15 !== f)) {
                                        var p = d.alternate;
                                        p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null)
                                    }
                                    var h = gl(l);
                                    if (null !== h) {
                                        h.flags &= -257, vl(h, l, s, 0, t), 1 & h.mode && ml(i, c, t), u = c;
                                        var m = (t = h).updateQueue;
                                        if (null === m) {
                                            var g = new Set;
                                            g.add(u), t.updateQueue = g
                                        } else m.add(u);
                                        break e
                                    }
                                    if (!(1 & t)) {
                                        ml(i, c, t), mu();
                                        break e
                                    }
                                    u = Error(o(426))
                                } else if (ao && 1 & s.mode) {
                                    var v = gl(l);
                                    if (null !== v) {
                                        !(65536 & v.flags) && (v.flags |= 256), vl(v, l, s, 0, t), mo(ul(u, s));
                                        break e
                                    }
                                }
                                i = u = ul(u, s),
                                4 !== Is && (Is = 2),
                                null === Fs ? Fs = [i] : Fs.push(i),
                                i = l;do {
                                    switch (i.tag) {
                                        case 3:
                                            i.flags |= 65536, t &= -t, i.lanes |= t, Uo(i, pl(0, u, t));
                                            break e;
                                        case 1:
                                            s = u;
                                            var y = i.type,
                                                b = i.stateNode;
                                            if (!(128 & i.flags || "function" != typeof y.getDerivedStateFromError && (null === b || "function" != typeof b.componentDidCatch || null !== Qs && Qs.has(b)))) {
                                                i.flags |= 65536, t &= -t, i.lanes |= t, Uo(i, hl(i, s, t));
                                                break e
                                            }
                                    }
                                    i = i.return
                                } while (null !== i)
                            }
                            xu(n)
                        } catch (e) {
                            t = e, zs === n && null !== n && (zs = n = n.return);
                            continue
                        }
                        break
                    }
                }

                function hu() {
                    var e = Os.current;
                    return Os.current = Xi, null === e ? Xi : e
                }

                function mu() {
                    0 !== Is && 3 !== Is && 2 !== Is || (Is = 4), null === Cs || !(268435455 & Ms) && !(268435455 & Rs) || lu(Cs, _s)
                }

                function gu(e, t) {
                    var n = Ps;
                    Ps |= 2;
                    var r = hu();
                    for (Cs === e && _s === t || (Vs = null, fu(e, t));;) try {
                        vu();
                        break
                    } catch (t) {
                        pu(e, t)
                    }
                    if (Eo(), Ps = n, Os.current = r, null !== zs) throw Error(o(261));
                    return Cs = null, _s = 0, Is
                }

                function vu() {
                    for (; null !== zs;) bu(zs)
                }

                function yu() {
                    for (; null !== zs && !Ye();) bu(zs)
                }

                function bu(e) {
                    var t = Ss(e.alternate, e, Ts);
                    e.memoizedProps = e.pendingProps, null === t ? xu(e) : zs = t, Ns.current = null
                }

                function xu(e) {
                    var t = e;
                    do {
                        var n = t.alternate;
                        if (e = t.return, 32768 & t.flags) {
                            if (null !== (n = ql(n, t))) return n.flags &= 32767, void(zs = n);
                            if (null === e) return Is = 6, void(zs = null);
                            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
                        } else if (null !== (n = Kl(n, t, Ts))) return void(zs = n);
                        if (null !== (t = t.sibling)) return void(zs = t);
                        zs = t = e
                    } while (null !== t);
                    0 === Is && (Is = 5)
                }

                function wu(e, t, n) {
                    var r = bt,
                        a = Es.transition;
                    try {
                        Es.transition = null, bt = 1,
                            function(e, t, n, r) {
                                do {
                                    ku()
                                } while (null !== qs);
                                if (6 & Ps) throw Error(o(327));
                                n = e.finishedWork;
                                var a = e.finishedLanes;
                                if (null === n) return null;
                                if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
                                e.callbackNode = null, e.callbackPriority = 0;
                                var i = n.lanes | n.childLanes;
                                if (function(e, t) {
                                        var n = e.pendingLanes & ~t;
                                        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
                                        var r = e.eventTimes;
                                        for (e = e.expirationTimes; 0 < n;) {
                                            var a = 31 - it(n),
                                                o = 1 << a;
                                            t[a] = 0, r[a] = -1, e[a] = -1, n &= ~o
                                        }
                                    }(e, i), e === Cs && (zs = Cs = null, _s = 0), !(2064 & n.subtreeFlags) && !(2064 & n.flags) || Ks || (Ks = !0, Cu(tt, (function() {
                                        return ku(), null
                                    }))), i = !!(15990 & n.flags), !!(15990 & n.subtreeFlags) || i) {
                                    i = Es.transition, Es.transition = null;
                                    var l = bt;
                                    bt = 1;
                                    var s = Ps;
                                    Ps |= 4, Ns.current = null,
                                        function(e, t) {
                                            if (ea = Bt, pr(e = fr())) {
                                                if ("selectionStart" in e) var n = {
                                                    start: e.selectionStart,
                                                    end: e.selectionEnd
                                                };
                                                else e: {
                                                    var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                                    if (r && 0 !== r.rangeCount) {
                                                        n = r.anchorNode;
                                                        var a = r.anchorOffset,
                                                            i = r.focusNode;
                                                        r = r.focusOffset;
                                                        try {
                                                            n.nodeType, i.nodeType
                                                        } catch (e) {
                                                            n = null;
                                                            break e
                                                        }
                                                        var l = 0,
                                                            s = -1,
                                                            u = -1,
                                                            c = 0,
                                                            d = 0,
                                                            f = e,
                                                            p = null;
                                                        t: for (;;) {
                                                            for (var h; f !== n || 0 !== a && 3 !== f.nodeType || (s = l + a), f !== i || 0 !== r && 3 !== f.nodeType || (u = l + r), 3 === f.nodeType && (l += f.nodeValue.length), null !== (h = f.firstChild);) p = f, f = h;
                                                            for (;;) {
                                                                if (f === e) break t;
                                                                if (p === n && ++c === a && (s = l), p === i && ++d === r && (u = l), null !== (h = f.nextSibling)) break;
                                                                p = (f = p).parentNode
                                                            }
                                                            f = h
                                                        }
                                                        n = -1 === s || -1 === u ? null : {
                                                            start: s,
                                                            end: u
                                                        }
                                                    } else n = null
                                                }
                                                n = n || {
                                                    start: 0,
                                                    end: 0
                                                }
                                            } else n = null;
                                            for (ta = {
                                                    focusedElem: e,
                                                    selectionRange: n
                                                }, Bt = !1, Xl = t; null !== Xl;)
                                                if (e = (t = Xl).child, 1028 & t.subtreeFlags && null !== e) e.return = t, Xl = e;
                                                else
                                                    for (; null !== Xl;) {
                                                        t = Xl;
                                                        try {
                                                            var m = t.alternate;
                                                            if (1024 & t.flags) switch (t.tag) {
                                                                case 0:
                                                                case 11:
                                                                case 15:
                                                                case 5:
                                                                case 6:
                                                                case 4:
                                                                case 17:
                                                                    break;
                                                                case 1:
                                                                    if (null !== m) {
                                                                        var g = m.memoizedProps,
                                                                            v = m.memoizedState,
                                                                            y = t.stateNode,
                                                                            b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? g : nl(t.type, g), v);
                                                                        y.__reactInternalSnapshotBeforeUpdate = b
                                                                    }
                                                                    break;
                                                                case 3:
                                                                    var x = t.stateNode.containerInfo;
                                                                    1 === x.nodeType ? x.textContent = "" : 9 === x.nodeType && x.documentElement && x.removeChild(x.documentElement);
                                                                    break;
                                                                default:
                                                                    throw Error(o(163))
                                                            }
                                                        } catch (e) {
                                                            ju(t, t.return, e)
                                                        }
                                                        if (null !== (e = t.sibling)) {
                                                            e.return = t.return, Xl = e;
                                                            break
                                                        }
                                                        Xl = t.return
                                                    }
                                            m = ts, ts = !1
                                        }(e, n), gs(n, e), hr(ta), Bt = !!ea, ta = ea = null, e.current = n, ys(n, e, a), Ge(), Ps = s, bt = l, Es.transition = i
                                } else e.current = n;
                                if (Ks && (Ks = !1, qs = e, Ys = a), i = e.pendingLanes, 0 === i && (Qs = null), function(e) {
                                        if (ot && "function" == typeof ot.onCommitFiberRoot) try {
                                            ot.onCommitFiberRoot(at, e, void 0, !(128 & ~e.current.flags))
                                        } catch (e) {}
                                    }(n.stateNode), ru(e, Je()), null !== t)
                                    for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, {
                                        componentStack: a.stack,
                                        digest: a.digest
                                    });
                                if (Bs) throw Bs = !1, e = Ws, Ws = null, e;
                                !!(1 & Ys) && 0 !== e.tag && ku(), i = e.pendingLanes, 1 & i ? e === Js ? Gs++ : (Gs = 0, Js = e) : Gs = 0, Ua()
                            }(e, t, n, r)
                    } finally {
                        Es.transition = a, bt = r
                    }
                    return null
                }

                function ku() {
                    if (null !== qs) {
                        var e = xt(Ys),
                            t = Es.transition,
                            n = bt;
                        try {
                            if (Es.transition = null, bt = 16 > e ? 16 : e, null === qs) var r = !1;
                            else {
                                if (e = qs, qs = null, Ys = 0, 6 & Ps) throw Error(o(331));
                                var a = Ps;
                                for (Ps |= 4, Xl = e.current; null !== Xl;) {
                                    var i = Xl,
                                        l = i.child;
                                    if (16 & Xl.flags) {
                                        var s = i.deletions;
                                        if (null !== s) {
                                            for (var u = 0; u < s.length; u++) {
                                                var c = s[u];
                                                for (Xl = c; null !== Xl;) {
                                                    var d = Xl;
                                                    switch (d.tag) {
                                                        case 0:
                                                        case 11:
                                                        case 15:
                                                            ns(8, d, i)
                                                    }
                                                    var f = d.child;
                                                    if (null !== f) f.return = d, Xl = f;
                                                    else
                                                        for (; null !== Xl;) {
                                                            var p = (d = Xl).sibling,
                                                                h = d.return;
                                                            if (os(d), d === c) {
                                                                Xl = null;
                                                                break
                                                            }
                                                            if (null !== p) {
                                                                p.return = h, Xl = p;
                                                                break
                                                            }
                                                            Xl = h
                                                        }
                                                }
                                            }
                                            var m = i.alternate;
                                            if (null !== m) {
                                                var g = m.child;
                                                if (null !== g) {
                                                    m.child = null;
                                                    do {
                                                        var v = g.sibling;
                                                        g.sibling = null, g = v
                                                    } while (null !== g)
                                                }
                                            }
                                            Xl = i
                                        }
                                    }
                                    if (2064 & i.subtreeFlags && null !== l) l.return = i, Xl = l;
                                    else e: for (; null !== Xl;) {
                                        if (2048 & (i = Xl).flags) switch (i.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                ns(9, i, i.return)
                                        }
                                        var y = i.sibling;
                                        if (null !== y) {
                                            y.return = i.return, Xl = y;
                                            break e
                                        }
                                        Xl = i.return
                                    }
                                }
                                var b = e.current;
                                for (Xl = b; null !== Xl;) {
                                    var x = (l = Xl).child;
                                    if (2064 & l.subtreeFlags && null !== x) x.return = l, Xl = x;
                                    else e: for (l = b; null !== Xl;) {
                                        if (2048 & (s = Xl).flags) try {
                                            switch (s.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    rs(9, s)
                                            }
                                        } catch (e) {
                                            ju(s, s.return, e)
                                        }
                                        if (s === l) {
                                            Xl = null;
                                            break e
                                        }
                                        var w = s.sibling;
                                        if (null !== w) {
                                            w.return = s.return, Xl = w;
                                            break e
                                        }
                                        Xl = s.return
                                    }
                                }
                                if (Ps = a, Ua(), ot && "function" == typeof ot.onPostCommitFiberRoot) try {
                                    ot.onPostCommitFiberRoot(at, e)
                                } catch (e) {}
                                r = !0
                            }
                            return r
                        } finally {
                            bt = n, Es.transition = t
                        }
                    }
                    return !1
                }

                function Su(e, t, n) {
                    e = $o(e, t = pl(0, t = ul(n, t), 1), 1), t = eu(), null !== e && (vt(e, 1, t), ru(e, t))
                }

                function ju(e, t, n) {
                    if (3 === e.tag) Su(e, e, n);
                    else
                        for (; null !== t;) {
                            if (3 === t.tag) {
                                Su(t, e, n);
                                break
                            }
                            if (1 === t.tag) {
                                var r = t.stateNode;
                                if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Qs || !Qs.has(r))) {
                                    t = $o(t, e = hl(t, e = ul(n, e), 1), 1), e = eu(), null !== t && (vt(t, 1, e), ru(t, e));
                                    break
                                }
                            }
                            t = t.return
                        }
                }

                function Ou(e, t, n) {
                    var r = e.pingCache;
                    null !== r && r.delete(t), t = eu(), e.pingedLanes |= e.suspendedLanes & n, Cs === e && (_s & n) === n && (4 === Is || 3 === Is && (130023424 & _s) === _s && 500 > Je() - Hs ? fu(e, 0) : Ds |= n), ru(e, t)
                }

                function Nu(e, t) {
                    0 === t && (1 & e.mode ? (t = ct, !(130023424 & (ct <<= 1)) && (ct = 4194304)) : t = 1);
                    var n = eu();
                    null !== (e = Ao(e, t)) && (vt(e, t, n), ru(e, n))
                }

                function Eu(e) {
                    var t = e.memoizedState,
                        n = 0;
                    null !== t && (n = t.retryLane), Nu(e, n)
                }

                function Pu(e, t) {
                    var n = 0;
                    switch (e.tag) {
                        case 13:
                            var r = e.stateNode,
                                a = e.memoizedState;
                            null !== a && (n = a.retryLane);
                            break;
                        case 19:
                            r = e.stateNode;
                            break;
                        default:
                            throw Error(o(314))
                    }
                    null !== r && r.delete(t), Nu(e, n)
                }

                function Cu(e, t) {
                    return Ke(e, t)
                }

                function zu(e, t, n, r) {
                    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
                }

                function _u(e, t, n, r) {
                    return new zu(e, t, n, r)
                }

                function Tu(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent)
                }

                function Lu(e, t) {
                    var n = e.alternate;
                    return null === n ? ((n = _u(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                        lanes: t.lanes,
                        firstContext: t.firstContext
                    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
                }

                function Iu(e, t, n, r, a, i) {
                    var l = 2;
                    if (r = e, "function" == typeof e) Tu(e) && (l = 1);
                    else if ("string" == typeof e) l = 5;
                    else e: switch (e) {
                        case S:
                            return Au(n.children, a, i, t);
                        case j:
                            l = 8, a |= 8;
                            break;
                        case O:
                            return (e = _u(12, n, t, 2 | a)).elementType = O, e.lanes = i, e;
                        case C:
                            return (e = _u(13, n, t, a)).elementType = C, e.lanes = i, e;
                        case z:
                            return (e = _u(19, n, t, a)).elementType = z, e.lanes = i, e;
                        case L:
                            return Mu(n, a, i, t);
                        default:
                            if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                                case N:
                                    l = 10;
                                    break e;
                                case E:
                                    l = 9;
                                    break e;
                                case P:
                                    l = 11;
                                    break e;
                                case _:
                                    l = 14;
                                    break e;
                                case T:
                                    l = 16, r = null;
                                    break e
                            }
                            throw Error(o(130, null == e ? e : typeof e, ""))
                    }
                    return (t = _u(l, n, t, a)).elementType = e, t.type = r, t.lanes = i, t
                }

                function Au(e, t, n, r) {
                    return (e = _u(7, e, r, t)).lanes = n, e
                }

                function Mu(e, t, n, r) {
                    return (e = _u(22, e, r, t)).elementType = L, e.lanes = n, e.stateNode = {
                        isHidden: !1
                    }, e
                }

                function Ru(e, t, n) {
                    return (e = _u(6, e, null, t)).lanes = n, e
                }

                function Du(e, t, n) {
                    return (t = _u(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                        containerInfo: e.containerInfo,
                        pendingChildren: null,
                        implementation: e.implementation
                    }, t
                }

                function Fu(e, t, n, r, a) {
                    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = gt(0), this.expirationTimes = gt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gt(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null
                }

                function $u(e, t, n, r, a, o, i, l, s) {
                    return e = new Fu(e, t, n, l, s), 1 === t ? (t = 1, !0 === o && (t |= 8)) : t = 0, o = _u(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
                        element: r,
                        isDehydrated: n,
                        cache: null,
                        transitions: null,
                        pendingSuspenseBoundaries: null
                    }, Ro(o), e
                }

                function Hu(e) {
                    if (!e) return Ea;
                    e: {
                        if (Ue(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(o(170));
                        var t = e;do {
                            switch (t.tag) {
                                case 3:
                                    t = t.stateNode.context;
                                    break e;
                                case 1:
                                    if (Ta(t.type)) {
                                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                        break e
                                    }
                            }
                            t = t.return
                        } while (null !== t);
                        throw Error(o(171))
                    }
                    if (1 === e.tag) {
                        var n = e.type;
                        if (Ta(n)) return Aa(e, n, t)
                    }
                    return t
                }

                function Uu(e, t, n, r, a, o, i, l, s) {
                    return (e = $u(n, r, !0, e, 0, o, 0, l, s)).context = Hu(null), n = e.current, (o = Fo(r = eu(), a = tu(n))).callback = null != t ? t : null, $o(n, o, a), e.current.lanes = a, vt(e, a, r), ru(e, r), e
                }

                function Vu(e, t, n, r) {
                    var a = t.current,
                        o = eu(),
                        i = tu(a);
                    return n = Hu(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Fo(o, i)).payload = {
                        element: e
                    }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = $o(a, t, i)) && (nu(e, a, i, o), Ho(e, a, i)), i
                }

                function Bu(e) {
                    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
                }

                function Wu(e, t) {
                    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                        var n = e.retryLane;
                        e.retryLane = 0 !== n && n < t ? n : t
                    }
                }

                function Qu(e, t) {
                    Wu(e, t), (e = e.alternate) && Wu(e, t)
                }
                Ss = function(e, t, n) {
                    if (null !== e)
                        if (e.memoizedProps !== t.pendingProps || Ca.current) bl = !0;
                        else {
                            if (!(e.lanes & n || 128 & t.flags)) return bl = !1,
                                function(e, t, n) {
                                    switch (t.tag) {
                                        case 3:
                                            Cl(t), ho();
                                            break;
                                        case 5:
                                            Xo(t);
                                            break;
                                        case 1:
                                            Ta(t.type) && Ma(t);
                                            break;
                                        case 4:
                                            Go(t, t.stateNode.containerInfo);
                                            break;
                                        case 10:
                                            var r = t.type._context,
                                                a = t.memoizedProps.value;
                                            Na(So, r._currentValue), r._currentValue = a;
                                            break;
                                        case 13:
                                            if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (Na(ei, 1 & ei.current), t.flags |= 128, null) : n & t.child.childLanes ? Rl(e, t, n) : (Na(ei, 1 & ei.current), null !== (e = Bl(e, t, n)) ? e.sibling : null);
                                            Na(ei, 1 & ei.current);
                                            break;
                                        case 19:
                                            if (r = !!(n & t.childLanes), 128 & e.flags) {
                                                if (r) return Ul(e, t, n);
                                                t.flags |= 128
                                            }
                                            if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), Na(ei, ei.current), r) break;
                                            return null;
                                        case 22:
                                        case 23:
                                            return t.lanes = 0, jl(e, t, n)
                                    }
                                    return Bl(e, t, n)
                                }(e, t, n);
                            bl = !!(131072 & e.flags)
                        }
                    else bl = !1, ao && 1048576 & t.flags && Za(t, Qa, t.index);
                    switch (t.lanes = 0, t.tag) {
                        case 2:
                            var r = t.type;
                            Vl(e, t), e = t.pendingProps;
                            var a = _a(t, Pa.current);
                            zo(t, n), a = gi(null, t, r, e, a, n);
                            var i = vi();
                            return t.flags |= 1, "object" == typeof a && null !== a && "function" == typeof a.render && void 0 === a.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ta(r) ? (i = !0, Ma(t)) : i = !1, t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, Ro(t), a.updater = al, t.stateNode = a, a._reactInternals = t, sl(t, r, e, n), t = Pl(null, t, r, !0, i, n)) : (t.tag = 0, ao && i && eo(t), xl(null, t, a, n), t = t.child), t;
                        case 16:
                            r = t.elementType;
                            e: {
                                switch (Vl(e, t), e = t.pendingProps, r = (a = r._init)(r._payload), t.type = r, a = t.tag = function(e) {
                                    if ("function" == typeof e) return Tu(e) ? 1 : 0;
                                    if (null != e) {
                                        if ((e = e.$$typeof) === P) return 11;
                                        if (e === _) return 14
                                    }
                                    return 2
                                }(r), e = nl(r, e), a) {
                                    case 0:
                                        t = Nl(null, t, r, e, n);
                                        break e;
                                    case 1:
                                        t = El(null, t, r, e, n);
                                        break e;
                                    case 11:
                                        t = wl(null, t, r, e, n);
                                        break e;
                                    case 14:
                                        t = kl(null, t, r, nl(r.type, e), n);
                                        break e
                                }
                                throw Error(o(306, r, ""))
                            }
                            return t;
                        case 0:
                            return r = t.type, a = t.pendingProps, Nl(e, t, r, a = t.elementType === r ? a : nl(r, a), n);
                        case 1:
                            return r = t.type, a = t.pendingProps, El(e, t, r, a = t.elementType === r ? a : nl(r, a), n);
                        case 3:
                            e: {
                                if (Cl(t), null === e) throw Error(o(387));r = t.pendingProps,
                                a = (i = t.memoizedState).element,
                                Do(e, t),
                                Vo(t, r, null, n);
                                var l = t.memoizedState;
                                if (r = l.element, i.isDehydrated) {
                                    if (i = {
                                            element: r,
                                            isDehydrated: !1,
                                            cache: l.cache,
                                            pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                                            transitions: l.transitions
                                        }, t.updateQueue.baseState = i, t.memoizedState = i, 256 & t.flags) {
                                        t = zl(e, t, r, n, a = ul(Error(o(423)), t));
                                        break e
                                    }
                                    if (r !== a) {
                                        t = zl(e, t, r, n, a = ul(Error(o(424)), t));
                                        break e
                                    }
                                    for (ro = ua(t.stateNode.containerInfo.firstChild), no = t, ao = !0, oo = null, n = ko(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                                } else {
                                    if (ho(), r === a) {
                                        t = Bl(e, t, n);
                                        break e
                                    }
                                    xl(e, t, r, n)
                                }
                                t = t.child
                            }
                            return t;
                        case 5:
                            return Xo(t), null === e && uo(t), r = t.type, a = t.pendingProps, i = null !== e ? e.memoizedProps : null, l = a.children, na(r, a) ? l = null : null !== i && na(r, i) && (t.flags |= 32), Ol(e, t), xl(e, t, l, n), t.child;
                        case 6:
                            return null === e && uo(t), null;
                        case 13:
                            return Rl(e, t, n);
                        case 4:
                            return Go(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = wo(t, null, r, n) : xl(e, t, r, n), t.child;
                        case 11:
                            return r = t.type, a = t.pendingProps, wl(e, t, r, a = t.elementType === r ? a : nl(r, a), n);
                        case 7:
                            return xl(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return xl(e, t, t.pendingProps.children, n), t.child;
                        case 10:
                            e: {
                                if (r = t.type._context, a = t.pendingProps, i = t.memoizedProps, l = a.value, Na(So, r._currentValue), r._currentValue = l, null !== i)
                                    if (lr(i.value, l)) {
                                        if (i.children === a.children && !Ca.current) {
                                            t = Bl(e, t, n);
                                            break e
                                        }
                                    } else
                                        for (null !== (i = t.child) && (i.return = t); null !== i;) {
                                            var s = i.dependencies;
                                            if (null !== s) {
                                                l = i.child;
                                                for (var u = s.firstContext; null !== u;) {
                                                    if (u.context === r) {
                                                        if (1 === i.tag) {
                                                            (u = Fo(-1, n & -n)).tag = 2;
                                                            var c = i.updateQueue;
                                                            if (null !== c) {
                                                                var d = (c = c.shared).pending;
                                                                null === d ? u.next = u : (u.next = d.next, d.next = u), c.pending = u
                                                            }
                                                        }
                                                        i.lanes |= n, null !== (u = i.alternate) && (u.lanes |= n), Co(i.return, n, t), s.lanes |= n;
                                                        break
                                                    }
                                                    u = u.next
                                                }
                                            } else if (10 === i.tag) l = i.type === t.type ? null : i.child;
                                            else if (18 === i.tag) {
                                                if (null === (l = i.return)) throw Error(o(341));
                                                l.lanes |= n, null !== (s = l.alternate) && (s.lanes |= n), Co(l, n, t), l = i.sibling
                                            } else l = i.child;
                                            if (null !== l) l.return = i;
                                            else
                                                for (l = i; null !== l;) {
                                                    if (l === t) {
                                                        l = null;
                                                        break
                                                    }
                                                    if (null !== (i = l.sibling)) {
                                                        i.return = l.return, l = i;
                                                        break
                                                    }
                                                    l = l.return
                                                }
                                            i = l
                                        }
                                xl(e, t, a.children, n),
                                t = t.child
                            }
                            return t;
                        case 9:
                            return a = t.type, r = t.pendingProps.children, zo(t, n), r = r(a = _o(a)), t.flags |= 1, xl(e, t, r, n), t.child;
                        case 14:
                            return a = nl(r = t.type, t.pendingProps), kl(e, t, r, a = nl(r.type, a), n);
                        case 15:
                            return Sl(e, t, t.type, t.pendingProps, n);
                        case 17:
                            return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : nl(r, a), Vl(e, t), t.tag = 1, Ta(r) ? (e = !0, Ma(t)) : e = !1, zo(t, n), il(t, r, a), sl(t, r, a, n), Pl(null, t, r, !0, e, n);
                        case 19:
                            return Ul(e, t, n);
                        case 22:
                            return jl(e, t, n)
                    }
                    throw Error(o(156, t.tag))
                };
                var Ku = "function" == typeof reportError ? reportError : function(e) {
                    console.error(e)
                };

                function qu(e) {
                    this._internalRoot = e
                }

                function Yu(e) {
                    this._internalRoot = e
                }

                function Gu(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
                }

                function Ju(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
                }

                function Xu() {}

                function Zu(e, t, n, r, a) {
                    var o = n._reactRootContainer;
                    if (o) {
                        var i = o;
                        if ("function" == typeof a) {
                            var l = a;
                            a = function() {
                                var e = Bu(i);
                                l.call(e)
                            }
                        }
                        Vu(t, i, e, a)
                    } else i = function(e, t, n, r, a) {
                        if (a) {
                            if ("function" == typeof r) {
                                var o = r;
                                r = function() {
                                    var e = Bu(i);
                                    o.call(e)
                                }
                            }
                            var i = Uu(t, r, e, 0, null, !1, 0, "", Xu);
                            return e._reactRootContainer = i, e[ha] = i.current, Ur(8 === e.nodeType ? e.parentNode : e), cu(), i
                        }
                        for (; a = e.lastChild;) e.removeChild(a);
                        if ("function" == typeof r) {
                            var l = r;
                            r = function() {
                                var e = Bu(s);
                                l.call(e)
                            }
                        }
                        var s = $u(e, 0, !1, null, 0, !1, 0, "", Xu);
                        return e._reactRootContainer = s, e[ha] = s.current, Ur(8 === e.nodeType ? e.parentNode : e), cu((function() {
                            Vu(t, s, n, r)
                        })), s
                    }(n, t, e, a, r);
                    return Bu(i)
                }
                Yu.prototype.render = qu.prototype.render = function(e) {
                    var t = this._internalRoot;
                    if (null === t) throw Error(o(409));
                    Vu(e, t, null, null)
                }, Yu.prototype.unmount = qu.prototype.unmount = function() {
                    var e = this._internalRoot;
                    if (null !== e) {
                        this._internalRoot = null;
                        var t = e.containerInfo;
                        cu((function() {
                            Vu(null, e, null, null)
                        })), t[ha] = null
                    }
                }, Yu.prototype.unstable_scheduleHydration = function(e) {
                    if (e) {
                        var t = jt();
                        e = {
                            blockedOn: null,
                            target: e,
                            priority: t
                        };
                        for (var n = 0; n < Lt.length && 0 !== t && t < Lt[n].priority; n++);
                        Lt.splice(n, 0, e), 0 === n && Rt(e)
                    }
                }, wt = function(e) {
                    switch (e.tag) {
                        case 3:
                            var t = e.stateNode;
                            if (t.current.memoizedState.isDehydrated) {
                                var n = dt(t.pendingLanes);
                                0 !== n && (yt(t, 1 | n), ru(t, Je()), !(6 & Ps) && (Us = Je() + 500, Ua()))
                            }
                            break;
                        case 13:
                            cu((function() {
                                var t = Ao(e, 1);
                                if (null !== t) {
                                    var n = eu();
                                    nu(t, e, 1, n)
                                }
                            })), Qu(e, 1)
                    }
                }, kt = function(e) {
                    if (13 === e.tag) {
                        var t = Ao(e, 134217728);
                        if (null !== t) nu(t, e, 134217728, eu());
                        Qu(e, 134217728)
                    }
                }, St = function(e) {
                    if (13 === e.tag) {
                        var t = tu(e),
                            n = Ao(e, t);
                        if (null !== n) nu(n, e, t, eu());
                        Qu(e, t)
                    }
                }, jt = function() {
                    return bt
                }, Ot = function(e, t) {
                    var n = bt;
                    try {
                        return bt = e, t()
                    } finally {
                        bt = n
                    }
                }, ke = function(e, t, n) {
                    switch (t) {
                        case "input":
                            if (X(e, n), t = n.name, "radio" === n.type && null != t) {
                                for (n = e; n.parentNode;) n = n.parentNode;
                                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                    var r = n[t];
                                    if (r !== e && r.form === e.form) {
                                        var a = wa(r);
                                        if (!a) throw Error(o(90));
                                        K(r), X(r, a)
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            oe(e, n);
                            break;
                        case "select":
                            null != (t = n.value) && ne(e, !!n.multiple, t, !1)
                    }
                }, Pe = uu, Ce = cu;
                var ec = {
                        usingClientEntryPoint: !1,
                        Events: [ba, xa, wa, Ne, Ee, uu]
                    },
                    tc = {
                        findFiberByHostInstance: ya,
                        bundleType: 0,
                        version: "18.3.1",
                        rendererPackageName: "react-dom"
                    },
                    nc = {
                        bundleType: tc.bundleType,
                        version: tc.version,
                        rendererPackageName: tc.rendererPackageName,
                        rendererConfig: tc.rendererConfig,
                        overrideHookState: null,
                        overrideHookStateDeletePath: null,
                        overrideHookStateRenamePath: null,
                        overrideProps: null,
                        overridePropsDeletePath: null,
                        overridePropsRenamePath: null,
                        setErrorHandler: null,
                        setSuspenseHandler: null,
                        scheduleUpdate: null,
                        currentDispatcherRef: x.ReactCurrentDispatcher,
                        findHostInstanceByFiber: function(e) {
                            return null === (e = We(e)) ? null : e.stateNode
                        },
                        findFiberByHostInstance: tc.findFiberByHostInstance || function() {
                            return null
                        },
                        findHostInstancesForRefresh: null,
                        scheduleRefresh: null,
                        scheduleRoot: null,
                        setRefreshHandler: null,
                        getCurrentFiber: null,
                        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
                    };
                if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                    var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (!rc.isDisabled && rc.supportsFiber) try {
                        at = rc.inject(nc), ot = rc
                    } catch (ce) {}
                }
                t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec, t.createPortal = function(e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    if (!Gu(t)) throw Error(o(200));
                    return function(e, t, n) {
                        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                        return {
                            $$typeof: k,
                            key: null == r ? null : "" + r,
                            children: e,
                            containerInfo: t,
                            implementation: n
                        }
                    }(e, t, null, n)
                }, t.createRoot = function(e, t) {
                    if (!Gu(e)) throw Error(o(299));
                    var n = !1,
                        r = "",
                        a = Ku;
                    return null != t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (a = t.onRecoverableError)), t = $u(e, 1, !1, null, 0, n, 0, r, a), e[ha] = t.current, Ur(8 === e.nodeType ? e.parentNode : e), new qu(t)
                }, t.findDOMNode = function(e) {
                    if (null == e) return null;
                    if (1 === e.nodeType) return e;
                    var t = e._reactInternals;
                    if (void 0 === t) {
                        if ("function" == typeof e.render) throw Error(o(188));
                        throw e = Object.keys(e).join(","), Error(o(268, e))
                    }
                    return e = null === (e = We(t)) ? null : e.stateNode
                }, t.flushSync = function(e) {
                    return cu(e)
                }, t.hydrate = function(e, t, n) {
                    if (!Ju(t)) throw Error(o(200));
                    return Zu(null, e, t, !0, n)
                }, t.hydrateRoot = function(e, t, n) {
                    if (!Gu(e)) throw Error(o(405));
                    var r = null != n && n.hydratedSources || null,
                        a = !1,
                        i = "",
                        l = Ku;
                    if (null != n && (!0 === n.unstable_strictMode && (a = !0), void 0 !== n.identifierPrefix && (i = n.identifierPrefix), void 0 !== n.onRecoverableError && (l = n.onRecoverableError)), t = Uu(t, null, e, 1, null != n ? n : null, a, 0, i, l), e[ha] = t.current, Ur(e), r)
                        for (e = 0; e < r.length; e++) a = (a = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
                    return new Yu(t)
                }, t.render = function(e, t, n) {
                    if (!Ju(t)) throw Error(o(200));
                    return Zu(null, e, t, !1, n)
                }, t.unmountComponentAtNode = function(e) {
                    if (!Ju(e)) throw Error(o(40));
                    return !!e._reactRootContainer && (cu((function() {
                        Zu(null, null, e, !1, (function() {
                            e._reactRootContainer = null, e[ha] = null
                        }))
                    })), !0)
                }, t.unstable_batchedUpdates = uu, t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
                    if (!Ju(n)) throw Error(o(200));
                    if (null == e || void 0 === e._reactInternals) throw Error(o(38));
                    return Zu(e, t, n, !1, r)
                }, t.version = "18.3.1-next-f1338f8080-20240426"
            },
            5873: (e, t, n) => {
                "use strict";
                var r = n(3144);
                r.createRoot, t.c = r.hydrateRoot
            },
            3144: (e, t, n) => {
                "use strict";
                ! function e() {
                    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (e) {
                        console.error(e)
                    }
                }(), e.exports = n(7400)
            },
            3335: (e, t, n) => {
                "use strict";
                var r = n(4041),
                    a = Symbol.for("react.element"),
                    o = Symbol.for("react.fragment"),
                    i = Object.prototype.hasOwnProperty,
                    l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    s = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function u(e, t, n) {
                    var r, o = {},
                        u = null,
                        c = null;
                    for (r in void 0 !== n && (u = "" + n), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (c = t.ref), t) i.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]);
                    if (e && e.defaultProps)
                        for (r in t = e.defaultProps) void 0 === o[r] && (o[r] = t[r]);
                    return {
                        $$typeof: a,
                        type: e,
                        key: u,
                        ref: c,
                        props: o,
                        _owner: l.current
                    }
                }
                t.Fragment = o, t.jsx = u, t.jsxs = u
            },
            4304: (e, t) => {
                "use strict";
                var n = Symbol.for("react.element"),
                    r = Symbol.for("react.portal"),
                    a = Symbol.for("react.fragment"),
                    o = Symbol.for("react.strict_mode"),
                    i = Symbol.for("react.profiler"),
                    l = Symbol.for("react.provider"),
                    s = Symbol.for("react.context"),
                    u = Symbol.for("react.forward_ref"),
                    c = Symbol.for("react.suspense"),
                    d = Symbol.for("react.memo"),
                    f = Symbol.for("react.lazy"),
                    p = Symbol.iterator;
                var h = {
                        isMounted: function() {
                            return !1
                        },
                        enqueueForceUpdate: function() {},
                        enqueueReplaceState: function() {},
                        enqueueSetState: function() {}
                    },
                    m = Object.assign,
                    g = {};

                function v(e, t, n) {
                    this.props = e, this.context = t, this.refs = g, this.updater = n || h
                }

                function y() {}

                function b(e, t, n) {
                    this.props = e, this.context = t, this.refs = g, this.updater = n || h
                }
                v.prototype.isReactComponent = {}, v.prototype.setState = function(e, t) {
                    if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                    this.updater.enqueueSetState(this, e, t, "setState")
                }, v.prototype.forceUpdate = function(e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
                }, y.prototype = v.prototype;
                var x = b.prototype = new y;
                x.constructor = b, m(x, v.prototype), x.isPureReactComponent = !0;
                var w = Array.isArray,
                    k = Object.prototype.hasOwnProperty,
                    S = {
                        current: null
                    },
                    j = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function O(e, t, r) {
                    var a, o = {},
                        i = null,
                        l = null;
                    if (null != t)
                        for (a in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (i = "" + t.key), t) k.call(t, a) && !j.hasOwnProperty(a) && (o[a] = t[a]);
                    var s = arguments.length - 2;
                    if (1 === s) o.children = r;
                    else if (1 < s) {
                        for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
                        o.children = u
                    }
                    if (e && e.defaultProps)
                        for (a in s = e.defaultProps) void 0 === o[a] && (o[a] = s[a]);
                    return {
                        $$typeof: n,
                        type: e,
                        key: i,
                        ref: l,
                        props: o,
                        _owner: S.current
                    }
                }

                function N(e) {
                    return "object" == typeof e && null !== e && e.$$typeof === n
                }
                var E = /\/+/g;

                function P(e, t) {
                    return "object" == typeof e && null !== e && null != e.key ? function(e) {
                        var t = {
                            "=": "=0",
                            ":": "=2"
                        };
                        return "$" + e.replace(/[=:]/g, (function(e) {
                            return t[e]
                        }))
                    }("" + e.key) : t.toString(36)
                }

                function C(e, t, a, o, i) {
                    var l = typeof e;
                    "undefined" !== l && "boolean" !== l || (e = null);
                    var s = !1;
                    if (null === e) s = !0;
                    else switch (l) {
                        case "string":
                        case "number":
                            s = !0;
                            break;
                        case "object":
                            switch (e.$$typeof) {
                                case n:
                                case r:
                                    s = !0
                            }
                    }
                    if (s) return i = i(s = e), e = "" === o ? "." + P(s, 0) : o, w(i) ? (a = "", null != e && (a = e.replace(E, "$&/") + "/"), C(i, t, a, "", (function(e) {
                        return e
                    }))) : null != i && (N(i) && (i = function(e, t) {
                        return {
                            $$typeof: n,
                            type: e.type,
                            key: t,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(i, a + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(E, "$&/") + "/") + e)), t.push(i)), 1;
                    if (s = 0, o = "" === o ? "." : o + ":", w(e))
                        for (var u = 0; u < e.length; u++) {
                            var c = o + P(l = e[u], u);
                            s += C(l, t, a, c, i)
                        } else if (c = function(e) {
                                return null === e || "object" != typeof e ? null : "function" == typeof(e = p && e[p] || e["@@iterator"]) ? e : null
                            }(e), "function" == typeof c)
                            for (e = c.call(e), u = 0; !(l = e.next()).done;) s += C(l = l.value, t, a, c = o + P(l, u++), i);
                        else if ("object" === l) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                    return s
                }

                function z(e, t, n) {
                    if (null == e) return e;
                    var r = [],
                        a = 0;
                    return C(e, r, "", "", (function(e) {
                        return t.call(n, e, a++)
                    })), r
                }

                function _(e) {
                    if (-1 === e._status) {
                        var t = e._result;
                        (t = t()).then((function(t) {
                            0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
                        }), (function(t) {
                            0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
                        })), -1 === e._status && (e._status = 0, e._result = t)
                    }
                    if (1 === e._status) return e._result.default;
                    throw e._result
                }
                var T = {
                        current: null
                    },
                    L = {
                        transition: null
                    },
                    I = {
                        ReactCurrentDispatcher: T,
                        ReactCurrentBatchConfig: L,
                        ReactCurrentOwner: S
                    };

                function A() {
                    throw Error("act(...) is not supported in production builds of React.")
                }
                t.Children = {
                    map: z,
                    forEach: function(e, t, n) {
                        z(e, (function() {
                            t.apply(this, arguments)
                        }), n)
                    },
                    count: function(e) {
                        var t = 0;
                        return z(e, (function() {
                            t++
                        })), t
                    },
                    toArray: function(e) {
                        return z(e, (function(e) {
                            return e
                        })) || []
                    },
                    only: function(e) {
                        if (!N(e)) throw Error("React.Children.only expected to receive a single React element child.");
                        return e
                    }
                }, t.Component = v, t.Fragment = a, t.Profiler = i, t.PureComponent = b, t.StrictMode = o, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I, t.act = A, t.cloneElement = function(e, t, r) {
                    if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                    var a = m({}, e.props),
                        o = e.key,
                        i = e.ref,
                        l = e._owner;
                    if (null != t) {
                        if (void 0 !== t.ref && (i = t.ref, l = S.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
                        for (u in t) k.call(t, u) && !j.hasOwnProperty(u) && (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u])
                    }
                    var u = arguments.length - 2;
                    if (1 === u) a.children = r;
                    else if (1 < u) {
                        s = Array(u);
                        for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
                        a.children = s
                    }
                    return {
                        $$typeof: n,
                        type: e.type,
                        key: o,
                        ref: i,
                        props: a,
                        _owner: l
                    }
                }, t.createContext = function(e) {
                    return (e = {
                        $$typeof: s,
                        _currentValue: e,
                        _currentValue2: e,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null,
                        _defaultValue: null,
                        _globalName: null
                    }).Provider = {
                        $$typeof: l,
                        _context: e
                    }, e.Consumer = e
                }, t.createElement = O, t.createFactory = function(e) {
                    var t = O.bind(null, e);
                    return t.type = e, t
                }, t.createRef = function() {
                    return {
                        current: null
                    }
                }, t.forwardRef = function(e) {
                    return {
                        $$typeof: u,
                        render: e
                    }
                }, t.isValidElement = N, t.lazy = function(e) {
                    return {
                        $$typeof: f,
                        _payload: {
                            _status: -1,
                            _result: e
                        },
                        _init: _
                    }
                }, t.memo = function(e, t) {
                    return {
                        $$typeof: d,
                        type: e,
                        compare: void 0 === t ? null : t
                    }
                }, t.startTransition = function(e) {
                    var t = L.transition;
                    L.transition = {};
                    try {
                        e()
                    } finally {
                        L.transition = t
                    }
                }, t.unstable_act = A, t.useCallback = function(e, t) {
                    return T.current.useCallback(e, t)
                }, t.useContext = function(e) {
                    return T.current.useContext(e)
                }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
                    return T.current.useDeferredValue(e)
                }, t.useEffect = function(e, t) {
                    return T.current.useEffect(e, t)
                }, t.useId = function() {
                    return T.current.useId()
                }, t.useImperativeHandle = function(e, t, n) {
                    return T.current.useImperativeHandle(e, t, n)
                }, t.useInsertionEffect = function(e, t) {
                    return T.current.useInsertionEffect(e, t)
                }, t.useLayoutEffect = function(e, t) {
                    return T.current.useLayoutEffect(e, t)
                }, t.useMemo = function(e, t) {
                    return T.current.useMemo(e, t)
                }, t.useReducer = function(e, t, n) {
                    return T.current.useReducer(e, t, n)
                }, t.useRef = function(e) {
                    return T.current.useRef(e)
                }, t.useState = function(e) {
                    return T.current.useState(e)
                }, t.useSyncExternalStore = function(e, t, n) {
                    return T.current.useSyncExternalStore(e, t, n)
                }, t.useTransition = function() {
                    return T.current.useTransition()
                }, t.version = "18.3.1"
            },
            4041: (e, t, n) => {
                "use strict";
                e.exports = n(4304)
            },
            1085: (e, t, n) => {
                "use strict";
                e.exports = n(3335)
            },
            2568: (e, t) => {
                "use strict";

                function n(e, t) {
                    var n = e.length;
                    e.push(t);
                    e: for (; 0 < n;) {
                        var r = n - 1 >>> 1,
                            a = e[r];
                        if (!(0 < o(a, t))) break e;
                        e[r] = t, e[n] = a, n = r
                    }
                }

                function r(e) {
                    return 0 === e.length ? null : e[0]
                }

                function a(e) {
                    if (0 === e.length) return null;
                    var t = e[0],
                        n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e: for (var r = 0, a = e.length, i = a >>> 1; r < i;) {
                            var l = 2 * (r + 1) - 1,
                                s = e[l],
                                u = l + 1,
                                c = e[u];
                            if (0 > o(s, n)) u < a && 0 > o(c, s) ? (e[r] = c, e[u] = n, r = u) : (e[r] = s, e[l] = n, r = l);
                            else {
                                if (!(u < a && 0 > o(c, n))) break e;
                                e[r] = c, e[u] = n, r = u
                            }
                        }
                    }
                    return t
                }

                function o(e, t) {
                    var n = e.sortIndex - t.sortIndex;
                    return 0 !== n ? n : e.id - t.id
                }
                if ("object" == typeof performance && "function" == typeof performance.now) {
                    var i = performance;
                    t.unstable_now = function() {
                        return i.now()
                    }
                } else {
                    var l = Date,
                        s = l.now();
                    t.unstable_now = function() {
                        return l.now() - s
                    }
                }
                var u = [],
                    c = [],
                    d = 1,
                    f = null,
                    p = 3,
                    h = !1,
                    m = !1,
                    g = !1,
                    v = "function" == typeof setTimeout ? setTimeout : null,
                    y = "function" == typeof clearTimeout ? clearTimeout : null,
                    b = "undefined" != typeof setImmediate ? setImmediate : null;

                function x(e) {
                    for (var t = r(c); null !== t;) {
                        if (null === t.callback) a(c);
                        else {
                            if (!(t.startTime <= e)) break;
                            a(c), t.sortIndex = t.expirationTime, n(u, t)
                        }
                        t = r(c)
                    }
                }

                function w(e) {
                    if (g = !1, x(e), !m)
                        if (null !== r(u)) m = !0, L(k);
                        else {
                            var t = r(c);
                            null !== t && I(w, t.startTime - e)
                        }
                }

                function k(e, n) {
                    m = !1, g && (g = !1, y(N), N = -1), h = !0;
                    var o = p;
                    try {
                        for (x(n), f = r(u); null !== f && (!(f.expirationTime > n) || e && !C());) {
                            var i = f.callback;
                            if ("function" == typeof i) {
                                f.callback = null, p = f.priorityLevel;
                                var l = i(f.expirationTime <= n);
                                n = t.unstable_now(), "function" == typeof l ? f.callback = l : f === r(u) && a(u), x(n)
                            } else a(u);
                            f = r(u)
                        }
                        if (null !== f) var s = !0;
                        else {
                            var d = r(c);
                            null !== d && I(w, d.startTime - n), s = !1
                        }
                        return s
                    } finally {
                        f = null, p = o, h = !1
                    }
                }
                "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
                var S, j = !1,
                    O = null,
                    N = -1,
                    E = 5,
                    P = -1;

                function C() {
                    return !(t.unstable_now() - P < E)
                }

                function z() {
                    if (null !== O) {
                        var e = t.unstable_now();
                        P = e;
                        var n = !0;
                        try {
                            n = O(!0, e)
                        } finally {
                            n ? S() : (j = !1, O = null)
                        }
                    } else j = !1
                }
                if ("function" == typeof b) S = function() {
                    b(z)
                };
                else if ("undefined" != typeof MessageChannel) {
                    var _ = new MessageChannel,
                        T = _.port2;
                    _.port1.onmessage = z, S = function() {
                        T.postMessage(null)
                    }
                } else S = function() {
                    v(z, 0)
                };

                function L(e) {
                    O = e, j || (j = !0, S())
                }

                function I(e, n) {
                    N = v((function() {
                        e(t.unstable_now())
                    }), n)
                }
                t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
                    e.callback = null
                }, t.unstable_continueExecution = function() {
                    m || h || (m = !0, L(k))
                }, t.unstable_forceFrameRate = function(e) {
                    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : E = 0 < e ? Math.floor(1e3 / e) : 5
                }, t.unstable_getCurrentPriorityLevel = function() {
                    return p
                }, t.unstable_getFirstCallbackNode = function() {
                    return r(u)
                }, t.unstable_next = function(e) {
                    switch (p) {
                        case 1:
                        case 2:
                        case 3:
                            var t = 3;
                            break;
                        default:
                            t = p
                    }
                    var n = p;
                    p = t;
                    try {
                        return e()
                    } finally {
                        p = n
                    }
                }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            e = 3
                    }
                    var n = p;
                    p = e;
                    try {
                        return t()
                    } finally {
                        p = n
                    }
                }, t.unstable_scheduleCallback = function(e, a, o) {
                    var i = t.unstable_now();
                    switch ("object" == typeof o && null !== o ? o = "number" == typeof(o = o.delay) && 0 < o ? i + o : i : o = i, e) {
                        case 1:
                            var l = -1;
                            break;
                        case 2:
                            l = 250;
                            break;
                        case 5:
                            l = 1073741823;
                            break;
                        case 4:
                            l = 1e4;
                            break;
                        default:
                            l = 5e3
                    }
                    return e = {
                        id: d++,
                        callback: a,
                        priorityLevel: e,
                        startTime: o,
                        expirationTime: l = o + l,
                        sortIndex: -1
                    }, o > i ? (e.sortIndex = o, n(c, e), null === r(u) && e === r(c) && (g ? (y(N), N = -1) : g = !0, I(w, o - i))) : (e.sortIndex = l, n(u, e), m || h || (m = !0, L(k))), e
                }, t.unstable_shouldYield = C, t.unstable_wrapCallback = function(e) {
                    var t = p;
                    return function() {
                        var n = p;
                        p = t;
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            p = n
                        }
                    }
                }
            },
            7967: (e, t, n) => {
                "use strict";
                e.exports = n(2568)
            },
            9002: e => {
                e.exports = {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    embed: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0
                }
            },
            7048: (e, t, n) => {
                var r = n(4319).default;

                function a() {
                    "use strict";
                    e.exports = a = function() {
                        return n
                    }, e.exports.__esModule = !0, e.exports.default = e.exports;
                    var t, n = {},
                        o = Object.prototype,
                        i = o.hasOwnProperty,
                        l = Object.defineProperty || function(e, t, n) {
                            e[t] = n.value
                        },
                        s = "function" == typeof Symbol ? Symbol : {},
                        u = s.iterator || "@@iterator",
                        c = s.asyncIterator || "@@asyncIterator",
                        d = s.toStringTag || "@@toStringTag";

                    function f(e, t, n) {
                        return Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), e[t]
                    }
                    try {
                        f({}, "")
                    } catch (t) {
                        f = function(e, t, n) {
                            return e[t] = n
                        }
                    }

                    function p(e, t, n, r) {
                        var a = t && t.prototype instanceof x ? t : x,
                            o = Object.create(a.prototype),
                            i = new L(r || []);
                        return l(o, "_invoke", {
                            value: C(e, n, i)
                        }), o
                    }

                    function h(e, t, n) {
                        try {
                            return {
                                type: "normal",
                                arg: e.call(t, n)
                            }
                        } catch (e) {
                            return {
                                type: "throw",
                                arg: e
                            }
                        }
                    }
                    n.wrap = p;
                    var m = "suspendedStart",
                        g = "suspendedYield",
                        v = "executing",
                        y = "completed",
                        b = {};

                    function x() {}

                    function w() {}

                    function k() {}
                    var S = {};
                    f(S, u, (function() {
                        return this
                    }));
                    var j = Object.getPrototypeOf,
                        O = j && j(j(I([])));
                    O && O !== o && i.call(O, u) && (S = O);
                    var N = k.prototype = x.prototype = Object.create(S);

                    function E(e) {
                        ["next", "throw", "return"].forEach((function(t) {
                            f(e, t, (function(e) {
                                return this._invoke(t, e)
                            }))
                        }))
                    }

                    function P(e, t) {
                        function n(a, o, l, s) {
                            var u = h(e[a], e, o);
                            if ("throw" !== u.type) {
                                var c = u.arg,
                                    d = c.value;
                                return d && "object" == r(d) && i.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                                    n("next", e, l, s)
                                }), (function(e) {
                                    n("throw", e, l, s)
                                })) : t.resolve(d).then((function(e) {
                                    c.value = e, l(c)
                                }), (function(e) {
                                    return n("throw", e, l, s)
                                }))
                            }
                            s(u.arg)
                        }
                        var a;
                        l(this, "_invoke", {
                            value: function(e, r) {
                                function o() {
                                    return new t((function(t, a) {
                                        n(e, r, t, a)
                                    }))
                                }
                                return a = a ? a.then(o, o) : o()
                            }
                        })
                    }

                    function C(e, n, r) {
                        var a = m;
                        return function(o, i) {
                            if (a === v) throw Error("Generator is already running");
                            if (a === y) {
                                if ("throw" === o) throw i;
                                return {
                                    value: t,
                                    done: !0
                                }
                            }
                            for (r.method = o, r.arg = i;;) {
                                var l = r.delegate;
                                if (l) {
                                    var s = z(l, r);
                                    if (s) {
                                        if (s === b) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if (a === m) throw a = y, r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                a = v;
                                var u = h(e, n, r);
                                if ("normal" === u.type) {
                                    if (a = r.done ? y : g, u.arg === b) continue;
                                    return {
                                        value: u.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === u.type && (a = y, r.method = "throw", r.arg = u.arg)
                            }
                        }
                    }

                    function z(e, n) {
                        var r = n.method,
                            a = e.iterator[r];
                        if (a === t) return n.delegate = null, "throw" === r && e.iterator.return && (n.method = "return", n.arg = t, z(e, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), b;
                        var o = h(a, e.iterator, n.arg);
                        if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, b;
                        var i = o.arg;
                        return i ? i.done ? (n[e.resultName] = i.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, b) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, b)
                    }

                    function _(e) {
                        var t = {
                            tryLoc: e[0]
                        };
                        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                    }

                    function T(e) {
                        var t = e.completion || {};
                        t.type = "normal", delete t.arg, e.completion = t
                    }

                    function L(e) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], e.forEach(_, this), this.reset(!0)
                    }

                    function I(e) {
                        if (e || "" === e) {
                            var n = e[u];
                            if (n) return n.call(e);
                            if ("function" == typeof e.next) return e;
                            if (!isNaN(e.length)) {
                                var a = -1,
                                    o = function n() {
                                        for (; ++a < e.length;)
                                            if (i.call(e, a)) return n.value = e[a], n.done = !1, n;
                                        return n.value = t, n.done = !0, n
                                    };
                                return o.next = o
                            }
                        }
                        throw new TypeError(r(e) + " is not iterable")
                    }
                    return w.prototype = k, l(N, "constructor", {
                        value: k,
                        configurable: !0
                    }), l(k, "constructor", {
                        value: w,
                        configurable: !0
                    }), w.displayName = f(k, d, "GeneratorFunction"), n.isGeneratorFunction = function(e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === w || "GeneratorFunction" === (t.displayName || t.name))
                    }, n.mark = function(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, k) : (e.__proto__ = k, f(e, d, "GeneratorFunction")), e.prototype = Object.create(N), e
                    }, n.awrap = function(e) {
                        return {
                            __await: e
                        }
                    }, E(P.prototype), f(P.prototype, c, (function() {
                        return this
                    })), n.AsyncIterator = P, n.async = function(e, t, r, a, o) {
                        void 0 === o && (o = Promise);
                        var i = new P(p(e, t, r, a), o);
                        return n.isGeneratorFunction(t) ? i : i.next().then((function(e) {
                            return e.done ? e.value : i.next()
                        }))
                    }, E(N), f(N, d, "Generator"), f(N, u, (function() {
                        return this
                    })), f(N, "toString", (function() {
                        return "[object Generator]"
                    })), n.keys = function(e) {
                        var t = Object(e),
                            n = [];
                        for (var r in t) n.push(r);
                        return n.reverse(),
                            function e() {
                                for (; n.length;) {
                                    var r = n.pop();
                                    if (r in t) return e.value = r, e.done = !1, e
                                }
                                return e.done = !0, e
                            }
                    }, n.values = I, L.prototype = {
                        constructor: L,
                        reset: function(e) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(T), !e)
                                for (var n in this) "t" === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                        },
                        stop: function() {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type) throw e.arg;
                            return this.rval
                        },
                        dispatchException: function(e) {
                            if (this.done) throw e;
                            var n = this;

                            function r(r, a) {
                                return l.type = "throw", l.arg = e, n.next = r, a && (n.method = "next", n.arg = t), !!a
                            }
                            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                                var o = this.tryEntries[a],
                                    l = o.completion;
                                if ("root" === o.tryLoc) return r("end");
                                if (o.tryLoc <= this.prev) {
                                    var s = i.call(o, "catchLoc"),
                                        u = i.call(o, "finallyLoc");
                                    if (s && u) {
                                        if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                                        if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                    } else if (s) {
                                        if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                                    } else {
                                        if (!u) throw Error("try statement without catch or finally");
                                        if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(e, t) {
                            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                var r = this.tryEntries[n];
                                if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                    var a = r;
                                    break
                                }
                            }
                            a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                            var o = a ? a.completion : {};
                            return o.type = e, o.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, b) : this.complete(o)
                        },
                        complete: function(e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), b
                        },
                        finish: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var n = this.tryEntries[t];
                                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), T(n), b
                            }
                        },
                        catch: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var n = this.tryEntries[t];
                                if (n.tryLoc === e) {
                                    var r = n.completion;
                                    if ("throw" === r.type) {
                                        var a = r.arg;
                                        T(n)
                                    }
                                    return a
                                }
                            }
                            throw Error("illegal catch attempt")
                        },
                        delegateYield: function(e, n, r) {
                            return this.delegate = {
                                iterator: I(e),
                                resultName: n,
                                nextLoc: r
                            }, "next" === this.method && (this.arg = t), b
                        }
                    }, n
                }
                e.exports = a, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            4319: e => {
                function t(n) {
                    return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n)
                }
                e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            5799: (e, t, n) => {
                var r = n(7048)();
                e.exports = r;
                try {
                    regeneratorRuntime = r
                } catch (e) {
                    "object" == typeof globalThis ? globalThis.regeneratorRuntime = r : Function("r", "regeneratorRuntime = r")(r)
                }
            },
            6284: (e, t, n) => {
                "use strict";

                function r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r
                }
                n.d(t, {
                    A: () => r
                })
            },
            6330: (e, t, n) => {
                "use strict";

                function r(e, t, n, r, a, o, i) {
                    try {
                        var l = e[o](i),
                            s = l.value
                    } catch (e) {
                        return void n(e)
                    }
                    l.done ? t(s) : Promise.resolve(s).then(r, a)
                }

                function a(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(a, o) {
                            var i = e.apply(t, n);

                            function l(e) {
                                r(i, a, o, l, s, "next", e)
                            }

                            function s(e) {
                                r(i, a, o, l, s, "throw", e)
                            }
                            l(void 0)
                        }))
                    }
                }
                n.d(t, {
                    A: () => a
                })
            },
            5152: (e, t, n) => {
                "use strict";

                function r(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }
                n.d(t, {
                    A: () => r
                })
            },
            414: (e, t, n) => {
                "use strict";
                n.d(t, {
                    A: () => o
                });
                var r = n(1369);

                function a(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, (0, r.A)(a.key), a)
                    }
                }

                function o(e, t, n) {
                    return t && a(e.prototype, t), n && a(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), e
                }
            },
            4586: (e, t, n) => {
                "use strict";
                n.d(t, {
                    A: () => a
                });
                var r = n(1369);

                function a(e, t, n) {
                    return (t = (0, r.A)(t)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
            },
            2715: (e, t, n) => {
                "use strict";

                function r(e) {
                    return r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, r(e)
                }
                n.d(t, {
                    A: () => r
                })
            },
            9296: (e, t, n) => {
                "use strict";
                n.d(t, {
                    A: () => a
                });
                var r = n(1087);

                function a(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && (0, r.A)(e, t)
                }
            },
            705: (e, t, n) => {
                "use strict";
                n.d(t, {
                    A: () => a
                });
                var r = n(7545);

                function a(e, t) {
                    if (t && ("object" == (0, r.A)(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }
            },
            1087: (e, t, n) => {
                "use strict";

                function r(e, t) {
                    return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t, e
                    }, r(e, t)
                }
                n.d(t, {
                    A: () => r
                })
            },
            2061: (e, t, n) => {
                "use strict";
                n.d(t, {
                    A: () => a
                });
                var r = n(7985);

                function a(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != n) {
                            var r, a, o, i, l = [],
                                s = !0,
                                u = !1;
                            try {
                                if (o = (n = n.call(e)).next, 0 === t) {
                                    if (Object(n) !== n) return;
                                    s = !1
                                } else
                                    for (; !(s = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); s = !0);
                            } catch (e) {
                                u = !0, a = e
                            } finally {
                                try {
                                    if (!s && null != n.return && (i = n.return(), Object(i) !== i)) return
                                } finally {
                                    if (u) throw a
                                }
                            }
                            return l
                        }
                    }(e, t) || (0, r.A)(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }
            },
            4619: (e, t, n) => {
                "use strict";
                n.d(t, {
                    A: () => o
                });
                var r = n(6284);
                var a = n(7985);

                function o(e) {
                    return function(e) {
                        if (Array.isArray(e)) return (0, r.A)(e)
                    }(e) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(e) || (0, a.A)(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }
            },
            1369: (e, t, n) => {
                "use strict";
                n.d(t, {
                    A: () => a
                });
                var r = n(7545);

                function a(e) {
                    var t = function(e, t) {
                        if ("object" != (0, r.A)(e) || !e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var a = n.call(e, t || "default");
                            if ("object" != (0, r.A)(a)) return a;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == (0, r.A)(t) ? t : t + ""
                }
            },
            7545: (e, t, n) => {
                "use strict";

                function r(e) {
                    return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, r(e)
                }
                n.d(t, {
                    A: () => r
                })
            },
            7985: (e, t, n) => {
                "use strict";
                n.d(t, {
                    A: () => a
                });
                var r = n(6284);

                function a(e, t) {
                    if (e) {
                        if ("string" == typeof e) return (0, r.A)(e, t);
                        var n = {}.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? (0, r.A)(e, t) : void 0
                    }
                }
            },
            7434: (e, t, n) => {
                "use strict";
                n.d(t, {
                    x6: () => R,
                    r9: () => I,
                    Bd: () => F
                });
                var r = n(4041),
                    a = n(9002),
                    o = n.n(a),
                    i = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;

                function l(e) {
                    var t = {
                            type: "tag",
                            name: "",
                            voidElement: !1,
                            attrs: {},
                            children: []
                        },
                        n = e.match(/<\/?([^\s]+?)[/\s>]/);
                    if (n && (t.name = n[1], (o()[n[1]] || "/" === e.charAt(e.length - 2)) && (t.voidElement = !0), t.name.startsWith("!--"))) {
                        var r = e.indexOf("--\x3e");
                        return {
                            type: "comment",
                            comment: -1 !== r ? e.slice(4, r) : ""
                        }
                    }
                    for (var a = new RegExp(i), l = null; null !== (l = a.exec(e));)
                        if (l[0].trim())
                            if (l[1]) {
                                var s = l[1].trim(),
                                    u = [s, ""];
                                s.indexOf("=") > -1 && (u = s.split("=")), t.attrs[u[0]] = u[1], a.lastIndex--
                            } else l[2] && (t.attrs[l[2]] = l[3].trim().substring(1, l[3].length - 1));
                    return t
                }
                var s = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
                    u = /^\s*$/,
                    c = Object.create(null);

                function d(e, t) {
                    switch (t.type) {
                        case "text":
                            return e + t.content;
                        case "tag":
                            return e += "<" + t.name + (t.attrs ? function(e) {
                                var t = [];
                                for (var n in e) t.push(n + '="' + e[n] + '"');
                                return t.length ? " " + t.join(" ") : ""
                            }(t.attrs) : "") + (t.voidElement ? "/>" : ">"), t.voidElement ? e : e + t.children.reduce(d, "") + "</" + t.name + ">";
                        case "comment":
                            return e + "\x3c!--" + t.comment + "--\x3e"
                    }
                }
                var f = {
                    parse: function(e, t) {
                        t || (t = {}), t.components || (t.components = c);
                        var n, r = [],
                            a = [],
                            o = -1,
                            i = !1;
                        if (0 !== e.indexOf("<")) {
                            var d = e.indexOf("<");
                            r.push({
                                type: "text",
                                content: -1 === d ? e : e.substring(0, d)
                            })
                        }
                        return e.replace(s, (function(s, c) {
                            if (i) {
                                if (s !== "</" + n.name + ">") return;
                                i = !1
                            }
                            var d, f = "/" !== s.charAt(1),
                                p = s.startsWith("\x3c!--"),
                                h = c + s.length,
                                m = e.charAt(h);
                            if (p) {
                                var g = l(s);
                                return o < 0 ? (r.push(g), r) : ((d = a[o]).children.push(g), r)
                            }
                            if (f && (o++, "tag" === (n = l(s)).type && t.components[n.name] && (n.type = "component", i = !0), n.voidElement || i || !m || "<" === m || n.children.push({
                                    type: "text",
                                    content: e.slice(h, e.indexOf("<", h))
                                }), 0 === o && r.push(n), (d = a[o - 1]) && d.children.push(n), a[o] = n), (!f || n.voidElement) && (o > -1 && (n.voidElement || n.name === s.slice(2, -1)) && (o--, n = -1 === o ? r : a[o]), !i && "<" !== m && m)) {
                                d = -1 === o ? r : a[o].children;
                                var v = e.indexOf("<", h),
                                    y = e.slice(h, -1 === v ? void 0 : v);
                                u.test(y) && (y = " "), (v > -1 && o + d.length >= 0 || " " !== y) && d.push({
                                    type: "text",
                                    content: y
                                })
                            }
                        })), r
                    },
                    stringify: function(e) {
                        return e.reduce((function(e, t) {
                            return e + d("", t)
                        }), "")
                    }
                };
                const p = f,
                    h = (...e) => {
                        console ? .warn && (x(e[0]) && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e))
                    },
                    m = {},
                    g = (...e) => {
                        x(e[0]) && m[e[0]] || (x(e[0]) && (m[e[0]] = new Date), h(...e))
                    },
                    v = (e, t) => () => {
                        if (e.isInitialized) t();
                        else {
                            const n = () => {
                                setTimeout((() => {
                                    e.off("initialized", n)
                                }), 0), t()
                            };
                            e.on("initialized", n)
                        }
                    },
                    y = (e, t, n) => {
                        e.loadNamespaces(t, v(e, n))
                    },
                    b = (e, t, n, r) => {
                        x(n) && (n = [n]), n.forEach((t => {
                            e.options.ns.indexOf(t) < 0 && e.options.ns.push(t)
                        })), e.loadLanguages(t, v(e, r))
                    },
                    x = e => "string" == typeof e,
                    w = e => "object" == typeof e && null !== e,
                    k = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
                    S = {
                        "&amp;": "&",
                        "&#38;": "&",
                        "&lt;": "<",
                        "&#60;": "<",
                        "&gt;": ">",
                        "&#62;": ">",
                        "&apos;": "'",
                        "&#39;": "'",
                        "&quot;": '"',
                        "&#34;": '"',
                        "&nbsp;": " ",
                        "&#160;": " ",
                        "&copy;": "©",
                        "&#169;": "©",
                        "&reg;": "®",
                        "&#174;": "®",
                        "&hellip;": "…",
                        "&#8230;": "…",
                        "&#x2F;": "/",
                        "&#47;": "/"
                    },
                    j = e => S[e];
                let O = {
                    bindI18n: "languageChanged",
                    bindI18nStore: "",
                    transEmptyNodeValue: "",
                    transSupportBasicHtmlNodes: !0,
                    transWrapTextNodes: "",
                    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
                    useSuspense: !0,
                    unescape: e => e.replace(k, j)
                };
                const N = () => O;
                let E;
                const P = () => E,
                    C = (e, t) => {
                        if (!e) return !1;
                        const n = e.props ? .children ? ? e.children;
                        return t ? n.length > 0 : !!n
                    },
                    z = e => {
                        if (!e) return [];
                        const t = e.props ? .children ? ? e.children;
                        return e.props ? .i18nIsDynamicList ? _(t) : t
                    },
                    _ = e => Array.isArray(e) ? e : [e],
                    T = (e, t) => {
                        if (!e) return "";
                        let n = "";
                        const a = _(e),
                            o = t ? .transSupportBasicHtmlNodes ? t.transKeepBasicHtmlNodesFor ? ? [] : [];
                        return a.forEach(((e, a) => {
                            if (x(e)) n += `${e}`;
                            else if ((0, r.isValidElement)(e)) {
                                const {
                                    props: r,
                                    type: i
                                } = e, l = Object.keys(r).length, s = o.indexOf(i) > -1, u = r.children;
                                if (u || !s || l)
                                    if (!u && (!s || l) || r.i18nIsDynamicList) n += `<${a}></${a}>`;
                                    else if (s && 1 === l && x(u)) n += `<${i}>${u}</${i}>`;
                                else {
                                    const e = T(u, t);
                                    n += `<${a}>${e}</${a}>`
                                } else n += `<${i}/>`
                            } else if (null === e) h("Trans: the passed in value is invalid - seems you passed in a null child.");
                            else if (w(e)) {
                                const {
                                    format: t,
                                    ...r
                                } = e, a = Object.keys(r);
                                if (1 === a.length) {
                                    const e = t ? `${a[0]}, ${t}` : a[0];
                                    n += `{{${e}}}`
                                } else h("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", e)
                            } else h("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", e)
                        })), n
                    },
                    L = (e, t, n, a, o, i) => {
                        if ("" === t) return [];
                        const l = a.transKeepBasicHtmlNodesFor || [],
                            s = t && new RegExp(l.map((e => `<${e}`)).join("|")).test(t);
                        if (!e && !s && !i) return [t];
                        const u = {},
                            c = e => {
                                _(e).forEach((e => {
                                    x(e) || (C(e) ? c(z(e)) : w(e) && !(0, r.isValidElement)(e) && Object.assign(u, e))
                                }))
                            };
                        c(e);
                        const d = p.parse(`<0>${t}</0>`),
                            f = { ...u,
                                ...o
                            },
                            h = (e, t, n) => {
                                const a = z(e),
                                    o = g(a, t.children, n);
                                return (e => Array.isArray(e) && e.every(r.isValidElement))(a) && 0 === o.length || e.props ? .i18nIsDynamicList ? a : o
                            },
                            m = (e, t, n, a, o) => {
                                e.dummy ? (e.children = t, n.push((0, r.cloneElement)(e, {
                                    key: a
                                }, o ? void 0 : t))) : n.push(...r.Children.map([e], (e => {
                                    const n = { ...e.props
                                    };
                                    return delete n.i18nIsDynamicList, (0, r.createElement)(e.type, { ...n,
                                        key: a,
                                        ref: e.ref
                                    }, o ? null : t)
                                })))
                            },
                            g = (t, o, u) => {
                                const c = _(t);
                                return _(o).reduce(((t, o, d) => {
                                    const p = o.children ? .[0] ? .content && n.services.interpolator.interpolate(o.children[0].content, f, n.language);
                                    if ("tag" === o.type) {
                                        let i = c[parseInt(o.name, 10)];
                                        1 !== u.length || i || (i = u[0][o.name]), i || (i = {});
                                        const v = 0 !== Object.keys(o.attrs).length ? ((e, t) => {
                                                const n = { ...t
                                                };
                                                return n.props = Object.assign(e.props, t.props), n
                                            })({
                                                props: o.attrs
                                            }, i) : i,
                                            y = (0, r.isValidElement)(v),
                                            b = y && C(o, !0) && !o.voidElement,
                                            k = s && w(v) && v.dummy && !y,
                                            S = w(e) && Object.hasOwnProperty.call(e, o.name);
                                        if (x(v)) {
                                            const e = n.services.interpolator.interpolate(v, f, n.language);
                                            t.push(e)
                                        } else if (C(v) || b) {
                                            const e = h(v, o, u);
                                            m(v, e, t, d)
                                        } else if (k) {
                                            const e = g(c, o.children, u);
                                            m(v, e, t, d)
                                        } else if (Number.isNaN(parseFloat(o.name)))
                                            if (S) {
                                                const e = h(v, o, u);
                                                m(v, e, t, d, o.voidElement)
                                            } else if (a.transSupportBasicHtmlNodes && l.indexOf(o.name) > -1)
                                            if (o.voidElement) t.push((0, r.createElement)(o.name, {
                                                key: `${o.name}-${d}`
                                            }));
                                            else {
                                                const e = g(c, o.children, u);
                                                t.push((0, r.createElement)(o.name, {
                                                    key: `${o.name}-${d}`
                                                }, e))
                                            }
                                        else if (o.voidElement) t.push(`<${o.name} />`);
                                        else {
                                            const e = g(c, o.children, u);
                                            t.push(`<${o.name}>${e}</${o.name}>`)
                                        } else if (w(v) && !y) {
                                            const e = o.children[0] ? p : null;
                                            e && t.push(e)
                                        } else m(v, p, t, d, 1 !== o.children.length || !p)
                                    } else if ("text" === o.type) {
                                        const e = a.transWrapTextNodes,
                                            l = i ? a.unescape(n.services.interpolator.interpolate(o.content, f, n.language)) : n.services.interpolator.interpolate(o.content, f, n.language);
                                        e ? t.push((0, r.createElement)(e, {
                                            key: `${o.name}-${d}`
                                        }, l)) : t.push(l)
                                    }
                                    return t
                                }), [])
                            },
                            v = g([{
                                dummy: !0,
                                children: e || []
                            }], d, _(e || []));
                        return z(v[0])
                    };
                const I = {
                        type: "3rdParty",
                        init(e) {
                            ((e = {}) => {
                                O = { ...O,
                                    ...e
                                }
                            })(e.options.react), (e => {
                                E = e
                            })(e)
                        }
                    },
                    A = (0, r.createContext)();
                class M {
                    constructor() {
                        this.usedNamespaces = {}
                    }
                    addUsedNamespaces(e) {
                        e.forEach((e => {
                            this.usedNamespaces[e] ? ? = !0
                        }))
                    }
                    getUsedNamespaces = () => Object.keys(this.usedNamespaces)
                }

                function R({
                    children: e,
                    count: t,
                    parent: n,
                    i18nKey: a,
                    context: o,
                    tOptions: i = {},
                    values: l,
                    defaults: s,
                    components: u,
                    ns: c,
                    i18n: d,
                    t: f,
                    shouldUnescape: p,
                    ...h
                }) {
                    const {
                        i18n: m,
                        defaultNS: v
                    } = (0, r.useContext)(A) || {}, y = d || m || P(), b = f || y ? .t.bind(y);
                    return function({
                        children: e,
                        count: t,
                        parent: n,
                        i18nKey: a,
                        context: o,
                        tOptions: i = {},
                        values: l,
                        defaults: s,
                        components: u,
                        ns: c,
                        i18n: d,
                        t: f,
                        shouldUnescape: p,
                        ...h
                    }) {
                        const m = d || P();
                        if (!m) return g("You will need to pass in an i18next instance by using i18nextReactModule"), e;
                        const v = f || m.t.bind(m) || (e => e),
                            y = { ...N(),
                                ...m.options ? .react
                            };
                        let b = c || v.ns || m.options ? .defaultNS;
                        b = x(b) ? [b] : b || ["translation"];
                        const w = T(e, y),
                            k = s || w || y.transEmptyNodeValue || a,
                            {
                                hashTransKey: S
                            } = y,
                            j = a || (S ? S(w || k) : w || k);
                        m.options ? .interpolation ? .defaultVariables && (l = l && Object.keys(l).length > 0 ? { ...l,
                            ...m.options.interpolation.defaultVariables
                        } : { ...m.options.interpolation.defaultVariables
                        });
                        const O = l || void 0 !== t || !e ? i.interpolation : {
                                interpolation: { ...i.interpolation,
                                    prefix: "#$?",
                                    suffix: "?$#"
                                }
                            },
                            E = { ...i,
                                context: o || i.context,
                                count: t,
                                ...l,
                                ...O,
                                defaultValue: k,
                                ns: b
                            },
                            C = j ? v(j, E) : k;
                        u && Object.keys(u).forEach((e => {
                            const t = u[e];
                            "function" == typeof t.type || !t.props || !t.props.children || C.indexOf(`${e}/>`) < 0 && C.indexOf(`${e} />`) < 0 || (u[e] = (0, r.createElement)((function() {
                                return (0, r.createElement)(r.Fragment, null, t)
                            })))
                        }));
                        const z = L(u || e, C, m, y, E, p),
                            _ = n ? ? y.defaultTransParent;
                        return _ ? (0, r.createElement)(_, h, z) : z
                    }({
                        children: e,
                        count: t,
                        parent: n,
                        i18nKey: a,
                        context: o,
                        tOptions: i,
                        values: l,
                        defaults: s,
                        components: u,
                        ns: c || b ? .ns || v || y ? .options ? .defaultNS,
                        i18n: y,
                        t: f,
                        shouldUnescape: p,
                        ...h
                    })
                }
                const D = (e, t, n, r) => e.getFixedT(t, n, r),
                    F = (e, t = {}) => {
                        const {
                            i18n: n
                        } = t, {
                            i18n: a,
                            defaultNS: o
                        } = (0, r.useContext)(A) || {}, i = n || a || P();
                        if (i && !i.reportNamespaces && (i.reportNamespaces = new M), !i) {
                            g("You will need to pass in an i18next instance by using initReactI18next");
                            const e = (e, t) => x(t) ? t : w(t) && x(t.defaultValue) ? t.defaultValue : Array.isArray(e) ? e[e.length - 1] : e,
                                t = [e, {}, !1];
                            return t.t = e, t.i18n = {}, t.ready = !1, t
                        }
                        i.options.react ? .wait && g("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
                        const l = { ...N(),
                                ...i.options.react,
                                ...t
                            },
                            {
                                useSuspense: s,
                                keyPrefix: u
                            } = l;
                        let c = e || o || i.options ? .defaultNS;
                        c = x(c) ? [c] : c || ["translation"], i.reportNamespaces.addUsedNamespaces ? .(c);
                        const d = (i.isInitialized || i.initializedStoreOnce) && c.every((e => ((e, t, n = {}) => t.languages && t.languages.length ? t.hasLoadedNamespace(e, {
                                lng: n.lng,
                                precheck: (t, r) => {
                                    if (n.bindI18n ? .indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !r(t.isLanguageChangingTo, e)) return !1
                                }
                            }) : (g("i18n.languages were undefined or empty", t.languages), !0))(e, i, l))),
                            f = ((e, t, n, a) => (0, r.useCallback)(D(e, t, n, a), [e, t, n, a]))(i, t.lng || null, "fallback" === l.nsMode ? c : c[0], u),
                            p = () => f,
                            h = () => D(i, t.lng || null, "fallback" === l.nsMode ? c : c[0], u),
                            [m, v] = (0, r.useState)(p);
                        let k = c.join();
                        t.lng && (k = `${t.lng}${k}`);
                        const S = ((e, t) => {
                                const n = (0, r.useRef)();
                                return (0, r.useEffect)((() => {
                                    n.current = t ? n.current : e
                                }), [e, t]), n.current
                            })(k),
                            j = (0, r.useRef)(!0);
                        (0, r.useEffect)((() => {
                            const {
                                bindI18n: e,
                                bindI18nStore: n
                            } = l;
                            j.current = !0, d || s || (t.lng ? b(i, t.lng, c, (() => {
                                j.current && v(h)
                            })) : y(i, c, (() => {
                                j.current && v(h)
                            }))), d && S && S !== k && j.current && v(h);
                            const r = () => {
                                j.current && v(h)
                            };
                            return e && i ? .on(e, r), n && i ? .store.on(n, r), () => {
                                j.current = !1, i && e ? .split(" ").forEach((e => i.off(e, r))), n && i && n.split(" ").forEach((e => i.store.off(e, r)))
                            }
                        }), [i, k]), (0, r.useEffect)((() => {
                            j.current && d && v(p)
                        }), [i, u, d]);
                        const O = [m, i, d];
                        if (O.t = m, O.i18n = i, O.ready = d, d) return O;
                        if (!d && !s) return O;
                        throw new Promise((e => {
                            t.lng ? b(i, t.lng, c, (() => e())) : y(i, c, (() => e()))
                        }))
                    }
            }
        },
        a = {};

    function o(e) {
        var t = a[e];
        if (void 0 !== t) return t.exports;
        var n = a[e] = {
            exports: {}
        };
        return r[e](n, n.exports, o), n.exports
    }
    o.m = r, e = [], o.O = (t, n, r, a) => {
        if (!n) {
            var i = 1 / 0;
            for (c = 0; c < e.length; c++) {
                for (var [n, r, a] = e[c], l = !0, s = 0; s < n.length; s++)(!1 & a || i >= a) && Object.keys(o.O).every((e => o.O[e](n[s]))) ? n.splice(s--, 1) : (l = !1, a < i && (i = a));
                if (l) {
                    e.splice(c--, 1);
                    var u = r();
                    void 0 !== u && (t = u)
                }
            }
            return t
        }
        a = a || 0;
        for (var c = e.length; c > 0 && e[c - 1][2] > a; c--) e[c] = e[c - 1];
        e[c] = [n, r, a]
    }, o.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return o.d(t, {
            a: t
        }), t
    }, o.d = (e, t) => {
        for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, o.f = {}, o.e = e => Promise.all(Object.keys(o.f).reduce(((t, n) => (o.f[n](e, t), t)), [])), o.u = e => (({
        44: "SocialMediaTemplate",
        78: "HorizontalScrollLazy",
        231: "PhotoGalleryTemplate",
        259: "CollapsibleTemplate",
        667: "MagazineArticleListTemplate",
        870: "HistoryTextTemplate",
        1462: "SiteMapTemplate",
        1799: "MagazineGalleryTemplate",
        1828: "HistorySeparatorTemplate",
        1830: "RelatedTemplate",
        1913: "RichTextImageTemplate",
        1975: "IframeResizer",
        2141: "TeaserTemplate",
        2156: "SocialTemplate",
        2272: "PopularTemplate",
        2375: "MagazineAudioTemplate",
        2449: "TabSelectorLazy",
        2481: "MagazineXLinkTemplate",
        2626: "MagazineSocialTemplate",
        2640: "NotificationLinkTemplate",
        2831: "HeroCarouselTemplate",
        2862: "HomeMagazineTemplate",
        2922: "CookiesTemplate",
        2942: "RichTextTemplate",
        3006: "MagazineRecentTemplate",
        3389: "SearchTemplate",
        3512: "MagazineRichTextInstagramTemplate",
        3617: "JoinUsTemplate",
        3627: "KeyFactsTemplate",
        3650: "TabTemplate",
        3746: "FramerMotion",
        3917: "LinkTemplate",
        4039: "HomePressReleasesTemplate",
        4148: "HistorySectionTemplate",
        4564: "MagazineRichTextXTemplate",
        4781: "HistoryQuoteTemplate",
        4866: "VideoTemplate",
        5057: "MagazineQuoteTemplate",
        5134: "ContactsTemplate",
        5150: "HtmlTemplate",
        5153: "MagazineVideoArticlesTemplate",
        5258: "HomeMediaCoverageTemplate",
        5361: "MediaCoverageTemplate",
        5481: "HistoryProductsCarouselTemplate",
        5559: "InstagramPost",
        5572: "ImageTemplate",
        5596: "DisclaimerTemplate",
        5604: "HomeJoinUsTemplate",
        5634: "HistorySingleImageTemplate",
        5954: "MagazineLinksTemplate",
        5957: "OverviewFinancialCalendar",
        6115: "AddressTemplate",
        6143: "ArticleList",
        6708: "MagazineSeriesTemplate",
        6739: "MagazineTemplate",
        6917: "EmployeeTemplate",
        7105: "SharePriceTemplate",
        7218: "HistoryYoutubeTemplate",
        7338: "FactsTemplate",
        7779: "HistoryMasterHeadTemplate",
        7872: "MagazineRelatedTemplate",
        7960: "MagazineRichTextTemplate",
        8447: "PageHeaderTemplate",
        8472: "NewsTemplate",
        8497: "MagazineSpotlightTemplate",
        8602: "InvestmentCalculatorTemplate",
        8619: "MagazineRichTextImageTemplate",
        8879: "QuoteTemplate",
        9104: "YoutubeTemplate",
        9164: "MagazineHeaderTemplate",
        9228: "ResourcesTemplate",
        9343: "MagazineTeaserTemplate",
        9371: "HistoryYearsTemplate",
        9642: "HistoryImageTemplate",
        9735: "StockBannerTemplate",
        9754: "HistoryTimelineTemplate",
        9827: "HistoryGalleryTemplate"
    }[e] || e) + ".bundle.js"), o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), t = {}, n = "@portals/adidas-all:", o.l = (e, r, a, i) => {
        if (t[e]) t[e].push(r);
        else {
            var l, s;
            if (void 0 !== a)
                for (var u = document.getElementsByTagName("script"), c = 0; c < u.length; c++) {
                    var d = u[c];
                    if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == n + a) {
                        l = d;
                        break
                    }
                }
            l || (s = !0, (l = document.createElement("script")).charset = "utf-8", l.timeout = 120, o.nc && l.setAttribute("nonce", o.nc), l.setAttribute("data-webpack", n + a), l.src = e), t[e] = [r];
            var f = (n, r) => {
                    l.onerror = l.onload = null, clearTimeout(p);
                    var a = t[e];
                    if (delete t[e], l.parentNode && l.parentNode.removeChild(l), a && a.forEach((e => e(r))), n) return n(r)
                },
                p = setTimeout(f.bind(null, void 0, {
                    type: "timeout",
                    target: l
                }), 12e4);
            l.onerror = f.bind(null, l.onerror), l.onload = f.bind(null, l.onload), s && document.head.appendChild(l)
        }
    }, o.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.p = "public/", (() => {
        var e = {
            3818: 0,
            1869: 0
        };
        o.f.j = (t, n) => {
            var r = o.o(e, t) ? e[t] : void 0;
            if (0 !== r)
                if (r) n.push(r[2]);
                else if (1869 != t) {
                var a = new Promise(((n, a) => r = e[t] = [n, a]));
                n.push(r[2] = a);
                var i = o.p + o.u(t),
                    l = new Error;
                o.l(i, (n => {
                    if (o.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                        var a = n && ("load" === n.type ? "missing" : n.type),
                            i = n && n.target && n.target.src;
                        l.message = "Loading chunk " + t + " failed.\n(" + a + ": " + i + ")", l.name = "ChunkLoadError", l.type = a, l.request = i, r[1](l)
                    }
                }), "chunk-" + t, t)
            } else e[t] = 0
        }, o.O.j = t => 0 === e[t];
        var t = (t, n) => {
                var r, a, [i, l, s] = n,
                    u = 0;
                if (i.some((t => 0 !== e[t]))) {
                    for (r in l) o.o(l, r) && (o.m[r] = l[r]);
                    if (s) var c = s(o)
                }
                for (t && t(n); u < i.length; u++) a = i[u], o.o(e, a) && e[a] && e[a][0](), e[a] = 0;
                return o.O(c)
            },
            n = self.webpackChunk_portals_adidas_all = self.webpackChunk_portals_adidas_all || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
    })();
    var i = o.O(void 0, [1869], (() => o(9252)));
    i = o.O(i)
})();