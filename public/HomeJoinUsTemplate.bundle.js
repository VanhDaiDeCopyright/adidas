"use strict";
(self.webpackChunk_portals_adidas_all = self.webpackChunk_portals_adidas_all || []).push([
    [5604], {
        4507: (e, t, l) => {
            l.r(t), l.d(t, {
                default: () => i
            });
            var s = l(7434),
                a = l(2558),
                o = l(5462),
                r = l(1429),
                n = l(1085);

            function i(e) {
                var t = e.models;
                (0, o._P)("HomeJoinUsTemplate");
                var l = (0, s.Bd)().t,
                    i = (0, a.Qq)(),
                    c = i.getModelValue("openPositions", t),
                    d = i.getModelValue("locations", t),
                    p = i.getModelValue("countries", t);
                return (0, n.jsxs)("div", {
                    className: "w-full mx-auto max-w-[1600px] pt-[60px] pb-[30px] mb-[30px] flex flex-col items-center relative",
                    children: [(0, n.jsx)("div", {
                        className: "absolute w-full h-full top-0 left-0 brightness-75 bg-cover",
                        style: {
                            backgroundImage: "url(public/join-us.jpg)"
                        }
                    }), (0, n.jsx)("h2", {
                        className: "text-white mb-40px relative",
                        children: l("join_us")
                    }), (0, n.jsxs)("div", {
                        className: "flex flex-col md:flex-row md:w-full relative",
                        children: [(0, n.jsx)(x, {
                            text: "Open positions",
                            count: c || 0
                        }), (0, n.jsx)(x, {
                            text: "Locations",
                            count: d || 0
                        }), (0, n.jsx)(x, {
                            text: "Countries",
                            count: p || 0
                        })]
                    }), (0, n.jsx)(r.$, {
                        className: "relative",
                        text: "careers.adidas-group.com",
                        href: "https://careers.adidas-group.com",
                        target: "_blank",
                        mode: r.y.InvertColor
                    })]
                })
            }
            var x = function(e) {
                var t = e.text,
                    l = e.count;
                return (0, n.jsxs)("div", {
                    className: "flex flex-1 flex-col items-center border-b-[1px] py-[20px] md:border-b-0 last:border-b-0",
                    children: [(0, n.jsx)("span", {
                        className: "text-white text-[22px] leading-[34px] font-bold",
                        children: t
                    }), (0, n.jsx)("span", {
                        className: "text-[80px] text-white font-['adineuePRO'] tracking-[.4px] font-bold leading-[3rem] leading-[74px]",
                        children: l
                    })]
                })
            }
        }
    }
]);