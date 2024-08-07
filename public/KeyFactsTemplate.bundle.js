"use strict";
(self.webpackChunk_portals_adidas_all = self.webpackChunk_portals_adidas_all || []).push([
    [3627], {
        2428: (e, a, s) => {
            s.r(a), s.d(a, {
                default: () => c
            });
            var t = s(7434),
                l = s(2558),
                r = s(5462),
                m = s(6335),
                d = s(1085);

            function c(e) {
                var a = e.models;
                (0, r._P)("KeyFactsTemplate");
                var s = (0, t.Bd)().t,
                    c = (0, l.Qq)(),
                    i = c.getModelValue("year", a),
                    n = c.getModelValue("netSale", a),
                    o = c.getModelValue("employees", a),
                    p = c.getModelValue("moreLink", a),
                    x = c.getModelValue("externalLink", a);
                return (0, d.jsxs)("div", {
                    className: "w-full mx-auto max-w-[1600px] pt-[40px] mb-[110px] md:mb-[80px] px-[15px] md:px-[24px] grid gap-[10px] items-end",
                    children: [(0, d.jsxs)("div", {
                        className: "inline-block",
                        children: [(0, d.jsx)("h2", {
                            className: "mb-0 mr-[25px] md:inline text-wrap",
                            children: s("share_price")
                        }), p && (0, d.jsx)("a", {
                            className: "link whitespace-nowrap",
                            href: p,
                            children: s("more")
                        })]
                    }), (0, d.jsxs)("div", {
                        className: "row-start-3 col-start-1 md:row-start-1 md:col-start-2 md:col-span-2 inline-block text-wrap",
                        children: [(0, d.jsx)("h2", {
                            className: "mb-0 md:inline text-wrap mt-[50px] md:mt-0",
                            children: "".concat(s("key_facts"), " ").concat(i)
                        }), x && (0, d.jsx)("a", {
                            className: "link mt-[9px] whitespace-nowrap md:float-right",
                            href: x,
                            target: "blank",
                            children: (0, m.XW)(x) || s("read_more")
                        })]
                    }), (0, d.jsx)("iframe", {
                        title: "share price",
                        "data-controller": "iframe",
                        "data-target": "iframe.iframe",
                        className: "h-[85px] w-[220px] row-start-2 self-start",
                        src: "https://charts3.equitystory.com/teaser/adidas-v31/English/ "
                    }), (0, d.jsxs)("div", {
                        className: "row-start-4 md:col-start-2 md:row-start-2",
                        children: [(0, d.jsx)("h2", {
                            className: "h1 mb-[4px] mt-[20px] md:mt-0",
                            children: n
                        }), (0, d.jsx)("p", {
                            className: "mb-0",
                            children: (0, d.jsx)("b", {
                                children: s("net_sales")
                            })
                        })]
                    }), (0, d.jsxs)("div", {
                        className: "row-start-5 md:col-start-3 md:row-start-2",
                        children: [(0, d.jsx)("h2", {
                            className: "h1 mb-[4px] mt-[20px] md:mt-0",
                            children: new Intl.NumberFormat("en-US").format(o || 0)
                        }), (0, d.jsx)("p", {
                            className: "mb-0",
                            children: (0, d.jsx)("b", {
                                children: s("employees_worldwide")
                            })
                        })]
                    })]
                })
            }
        }
    }
]);