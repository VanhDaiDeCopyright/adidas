"use strict";
(self.webpackChunk_portals_adidas_all = self.webpackChunk_portals_adidas_all || []).push([
    [4039], {
        3016: (e, s, a) => {
            a.r(s), a.d(s, {
                default: () => t
            });
            var l = a(7434),
                r = a(2558),
                d = a(3536),
                c = a(5462),
                p = a(6335),
                i = a(1085);

            function t(e) {
                var s = e.models;
                (0, c._P)("HomePressReleasesTemplate");
                var a = (0, l.Bd)().t,
                    t = (0, d.Ez)().locale,
                    n = (0, c.Qd)({
                        tag: ["press-releases", "factsheet"]
                    }).pages,
                    x = (0, r.Qq)().getModelValue("seeAllUrl", s);
                return (0, i.jsxs)("div", {
                    className: "w-full mx-auto max-w-[1600px] px-[24px] py-[20px] mb-[30px]",
                    children: [(0, i.jsxs)("div", {
                        className: "flex",
                        children: [(0, i.jsx)("h2", {
                            className: "flex-1",
                            children: a("press_releases")
                        }), x && (0, i.jsx)("a", {
                            className: "link self-start mt-[4px] uppercase",
                            href: x,
                            children: a("see_all")
                        })]
                    }), (0, i.jsx)("div", {
                        className: "grid md:grid-cols-3 gap-[20px]",
                        children: n.map((function(e) {
                            return (0, i.jsxs)("a", {
                                className: "border-b-[1px] border-black pb-[30px]",
                                href: e.url,
                                target: (0, p.IQ)(e),
                                children: [e.date && (0, i.jsx)("div", {
                                    className: "label",
                                    children: (0, p.Yq)(t, e.date)
                                }), (0, i.jsx)("h3", {
                                    children: e.title
                                }), (0, i.jsx)("span", {
                                    className: "link inline-block uppercase",
                                    children: a("read_more")
                                })]
                            }, e.id)
                        }))
                    })]
                })
            }
        }
    }
]);