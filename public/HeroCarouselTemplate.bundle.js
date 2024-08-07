"use strict";
(self.webpackChunk_portals_adidas_all = self.webpackChunk_portals_adidas_all || []).push([
    [2831], {
        1176: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => c
            });
            var r = a(4619),
                l = a(7434),
                n = a(2558),
                s = a(5462),
                i = a(6335),
                d = a(1429),
                u = a(8931),
                o = a(3284),
                p = a(1085);

            function c(e) {
                var t = e.models;
                (0, s._P)("HeroCarouselTemplate");
                var a = (0, n.Qq)().getModelValue("entries", t),
                    l = null == a ? void 0 : a.map((function(e) {
                        var t;
                        return [e.pageId].concat((0, r.A)((null === (t = e.related) || void 0 === t ? void 0 : t.map((function(e) {
                            return e.pageId
                        }))) || []))
                    })).flat().filter((function(e) {
                        return e
                    })).map((function(e) {
                        return null == e ? void 0 : e.toString()
                    }));
                if (null != l && l.length) return (0, p.jsx)(m, {
                    pageIds: l,
                    entries: a
                })
            }

            function m(e) {
                var t = e.pageIds,
                    a = e.entries,
                    r = (0, s.Qd)({
                        pageIds: t
                    }).pages,
                    l = (0, s.Qd)({
                        tag: "menu"
                    }).pages,
                    n = a.slice().sort((function(e, t) {
                        return e.sortNum - t.sortNum
                    })).map((function(e) {
                        var t;
                        return {
                            page: r.find((function(t) {
                                return t.id === e.pageId
                            })),
                            category: e.category,
                            related: null === (t = e.related) || void 0 === t ? void 0 : t.map((function(e) {
                                return {
                                    page: r.find((function(t) {
                                        return t.id === e.pageId
                                    }))
                                }
                            })).filter((function(e) {
                                return e.page
                            }))
                        }
                    })).filter((function(e) {
                        return e.page
                    }));
                return (0, p.jsx)(u.A, {
                    carouselItems: n,
                    menuItems: l,
                    showArrows: !0,
                    enableRelatedItems: !0,
                    renderItem: f
                })
            }

            function f(e) {
                var t, a, r = e.index,
                    n = e.carouselItem,
                    s = e.transition,
                    u = e.translate,
                    c = e.menuItems,
                    m = (0, l.Bd)().t;
                return (0, p.jsxs)("div", {
                    className: "row-[1] col-[1] flex flex-col md:flex-row md:max-h-[700px]",
                    style: {
                        transition: s,
                        translate: u
                    },
                    children: [(0, p.jsxs)("div", {
                        className: "flex flex-col flex-1 justify-end py-[20px] pl-[20px] md:py-[30px] md:pb-[88px] md:pr-[20px] md:min-h-[500px]",
                        children: [(0, p.jsx)("div", {
                            className: "label",
                            children: n.category ? n.category : (0, o.ef)(n.page, c)
                        }), (0, p.jsx)("h1", {
                            className: "!mb-0",
                            children: n.page.title
                        }), n.page.url && (0, p.jsx)(d.$, {
                            className: "mt-[20px] self-start",
                            text: m("read_more"),
                            href: n.page.url,
                            target: (0, i.u5)(n.page.url)
                        })]
                    }), (0, p.jsx)("div", {
                        className: "flex-1 mt-[20px] md:mt-0",
                        children: (0, p.jsx)("img", {
                            className: "w-full h-full object-cover aspect-[5/6] md:aspect-auto",
                            src: (0, i.Sh)(null === (t = n.page.meta) || void 0 === t ? void 0 : t.image, 1200),
                            alt: null === (a = n.page) || void 0 === a ? void 0 : a.title
                        })
                    })]
                }, r)
            }
        }
    }
]);