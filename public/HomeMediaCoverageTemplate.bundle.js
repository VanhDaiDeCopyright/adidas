"use strict";
(self.webpackChunk_portals_adidas_all = self.webpackChunk_portals_adidas_all || []).push([
    [5258], {
        8550: (e, l, a) => {
            a.d(l, {
                q: () => o
            });
            var s = a(2061),
                t = a(4041),
                i = a(7434),
                r = a(3536),
                c = a(6335),
                n = a(1525),
                d = a(1085);

            function o(e) {
                var l, a, n, o = e.item,
                    x = (0, i.Bd)().t,
                    u = (0, r.Ez)().locale,
                    p = (0, t.useState)(!1),
                    h = (0, s.A)(p, 2),
                    v = h[0],
                    j = h[1];
                return (0, d.jsxs)(d.Fragment, {
                    children: [v && (0, d.jsx)(m, {
                        onClose: function() {
                            return j(!1)
                        },
                        item: o
                    }), (0, d.jsxs)("button", {
                        className: "mb-[40px] cursor-pointer flex flex-col text-start",
                        onClick: function() {
                            return j(!0)
                        },
                        children: [(0, d.jsx)("img", {
                            className: "aspect-[4/3] w-full mb-[8px] object-cover",
                            src: (0, c.Sh)(null === (l = o.meta) || void 0 === l ? void 0 : l.image, 500, void 0, "4:3")
                        }), (0, d.jsx)("div", {
                            className: "label",
                            children: "".concat(o.date && (0, c.Yq)(u, o.date, c.ow.LongWeekday)).concat(null !== (a = o.meta) && void 0 !== a && a.label ? " · " : "").concat((null === (n = o.meta) || void 0 === n ? void 0 : n.label) || "")
                        }), (0, d.jsx)("h4", {
                            children: o.title
                        }), o.url && (0, d.jsx)("span", {
                            className: "link",
                            children: (0, c.XW)(o.url) || x("read_more")
                        })]
                    }, o.id)]
                })
            }

            function m(e) {
                var l, a, s, t = e.item,
                    o = e.onClose,
                    m = null == t || null === (l = t.meta) || void 0 === l ? void 0 : l.image,
                    x = (0, i.Bd)().t,
                    u = (0, r.Ez)().locale;
                return (0, d.jsxs)(n.l, {
                    onClose: o,
                    disablePadding: !0,
                    children: [m && (0, d.jsx)("img", {
                        className: "aspect-[4/2] w-full object-cover",
                        src: (0, c.Sh)(m, 1e3)
                    }), (0, d.jsxs)("div", {
                        className: "p-[16px] md:p-[25px]",
                        children: [(0, d.jsx)("h2", {
                            children: x("adidas_news")
                        }), (0, d.jsx)("div", {
                            className: "label",
                            children: "".concat(t.date && new Intl.DateTimeFormat(u, {
                                dateStyle: "long"
                            }).format(new Date(t.date))).concat(null !== (a = t.meta) && void 0 !== a && a.label ? " · " : "").concat((null === (s = t.meta) || void 0 === s ? void 0 : s.label) || "")
                        }), (0, d.jsx)("h4", {
                            children: t.title
                        }), t.description && (0, d.jsx)("p", {
                            children: t.description
                        }), t.url && (0, d.jsx)("a", {
                            className: "link",
                            href: t.url,
                            target: (0, c.IQ)(t),
                            children: (0, c.XW)(t.url) || x("read_more")
                        })]
                    })]
                })
            }
        },
        6377: (e, l, a) => {
            a.r(l), a.d(l, {
                default: () => d
            });
            var s = a(7434),
                t = a(2558),
                i = a(5462),
                r = a(8550),
                c = a(1085),
                n = [".biz", ".product", ".sport", ".commitment"];

            function d(e) {
                var l = e.models;
                (0, i._P)("HomeMediaCoverageTemplate");
                var a = (0, s.Bd)().t,
                    d = (0, i.Qd)({
                        tag: n
                    }).pages,
                    o = (0, t.Qq)().getModelValue("seeAllUrl", l);
                return (0, c.jsxs)("div", {
                    className: "w-full mx-auto max-w-[1600px] px-[24px] py-[20px] mb-[30px]",
                    children: [(0, c.jsxs)("div", {
                        className: "flex",
                        children: [(0, c.jsx)("h2", {
                            className: "flex-1",
                            children: a("media_coverage")
                        }), o && (0, c.jsx)("a", {
                            className: "link self-start mt-[4px] uppercase",
                            href: o,
                            children: a("see_all")
                        })]
                    }), (0, c.jsx)("div", {
                        className: "overflow-auto",
                        children: (0, c.jsx)("div", {
                            className: "grid grid-cols-3 gap-[20px] min-w-[670px]",
                            children: d.map((function(e) {
                                return (0, c.jsx)(r.q, {
                                    item: e
                                }, e.id)
                            }))
                        })
                    })]
                })
            }
        }
    }
]);