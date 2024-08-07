"use strict";
(self.webpackChunk_portals_adidas_all = self.webpackChunk_portals_adidas_all || []).push([
    [9735], {
        6816: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => m
            });
            var r = a(2061),
                n = a(6330),
                s = a(5799),
                i = a.n(s),
                l = a(4041),
                c = a(2558),
                o = a(5462),
                u = a(1085),
                d = function() {
                    var e = (0, n.A)(i().mark((function e() {
                        var t, a, r, n, s, l, c, o, u, d, p, h, f, m, _;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = Date.now(), e.next = 3, fetch("https://charts3.equitystory.com/tpl/adidas-v31/English/?action=teaser&language=English&company=adidas-v31&variant=&default_isin=DE000A1EWWW0&default_exchange%5B%5D=adidas_xetra&default_news_types%5B%5D=adhoc&default_news_types%5B%5D=corporate&default_news_types%5B%5D=dividend_marker&default_range=1D&default_type=spline&ignore_timezone_offset=true&default_decimal_precision=2&update_top_table=true&update_bottom_table=true&show_trade_history=true&disable_volume=0&disable_macd=1&disable_rsi=1&disable_navigator=1&show_intraday_benchmarks=false&bond=0&date_ipo=1997-11-28&lookup_range=&default_timezone_offset=0&default_template=teaser%2Fbottom-table.tpl.php&_=".concat(n));
                                case 3:
                                    if ((s = e.sent).ok) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 6:
                                    return e.next = 8, s.text();
                                case 8:
                                    return l = e.sent, c = new DOMParser, o = c.parseFromString(l, "text/html"), u = o.getElementsByClassName("btm-table__price"), d = o.getElementsByClassName("btm-table__change-val"), p = o.getElementsByClassName("btm-table__change-icon"), h = (null === (t = u.item(0)) || void 0 === t || null === (t = t.textContent) || void 0 === t || null === (t = t.match(/[0-9.]+/)) || void 0 === t ? void 0 : t[0]) || "", f = (null === (a = d.item(0)) || void 0 === a || null === (a = a.textContent) || void 0 === a || null === (a = a.match(/[-+0-9.]+/)) || void 0 === a ? void 0 : a[0]) || "", m = (null === (r = p.item(0)) || void 0 === r ? void 0 : r.getAttribute("src")) || "", _ = {
                                        price: h,
                                        change: f,
                                        icon: m
                                    }, e.abrupt("return", _);
                                case 19:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                p = function(e) {
                    return e.startsWith("+") ? "text-chart-green" : e.startsWith("-") ? "text-chart-red" : "text-primary-light-grey"
                },
                h = function(e) {
                    return e.startsWith("+") ? "cw-share-price-positive" : e.startsWith("-") ? "cw-share-price-negative" : "cw-share-price-neutral"
                },
                f = function(e) {
                    return e.startsWith("+") ? "fill-chart-green" : e.startsWith("-") ? "fill-chart-red" : "fill-primary-light-grey"
                };

            function m(e) {
                var t = e.item,
                    a = e.models;
                (0, o._P)("StockBannerTemplate");
                var s = (0, c.Qq)().getModelValue("sharePriceUrl", a),
                    m = (0, l.useState)(void 0),
                    _ = (0, r.A)(m, 2),
                    x = _[0],
                    g = _[1];
                return (0, l.useEffect)((function() {
                    function e() {
                        return (e = (0, n.A)(i().mark((function e() {
                            var t;
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, d();
                                    case 2:
                                        t = e.sent, g(t);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }! function() {
                        e.apply(this, arguments)
                    }()
                }), [g]), (0, u.jsx)("div", {
                    "data-item-id": t.id,
                    className: "flex justify-center items-center h-[30px] w-full bg-black",
                    children: (0, u.jsx)("a", {
                        className: "text-white w-full",
                        href: s,
                        children: x && (0, u.jsxs)("div", {
                            className: "flex justify-center items-center",
                            children: [(0, u.jsx)("span", {
                                className: "mr-[10px]",
                                children: "XETRA"
                            }), (0, u.jsx)("span", {
                                className: "font-bold mr-[10px]",
                                children: x.price
                            }), (0, u.jsx)("svg", {
                                className: "w-[18px] h-[18px] mr-[10px] ".concat(f(x.change)),
                                children: (0, u.jsx)("use", {
                                    xlinkHref: "public/icons/icons.svg#".concat(h(x.change))
                                })
                            }), (0, u.jsx)("span", {
                                className: "font-bold ".concat(p(x.change)),
                                children: x.change
                            })]
                        })
                    })
                })
            }
        }
    }
]);