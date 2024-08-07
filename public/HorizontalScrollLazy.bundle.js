"use strict";
(self.webpackChunk_portals_adidas_all = self.webpackChunk_portals_adidas_all || []).push([
    [78], {
        936: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => u
            });
            var n = r(2061),
                o = r(4041),
                s = r(9618),
                l = r(2470),
                i = r(7277),
                c = r(8694),
                a = r(1085);

            function u(e) {
                var t = e.children,
                    r = e.arrowsMode,
                    u = e.scrollIndicatorMode,
                    f = e.disableScrollIntoView;
                r || (r = c.y.Default);
                var d = (0, o.useRef)(0),
                    v = (0, o.useState)(null),
                    h = (0, n.A)(v, 2),
                    p = h[0],
                    g = h[1],
                    w = (0, o.useState)(!0),
                    x = (0, n.A)(w, 2),
                    m = x[0],
                    b = x[1],
                    L = (0, o.useState)(!1),
                    j = (0, n.A)(L, 2),
                    k = j[0],
                    S = j[1],
                    E = (0, o.useState)(!1),
                    y = (0, n.A)(E, 2),
                    C = y[0],
                    T = y[1],
                    N = (0, o.useState)(null),
                    R = (0, n.A)(N, 2),
                    X = R[0],
                    A = R[1],
                    D = (0, o.useState)(!1),
                    _ = (0, n.A)(D, 2),
                    H = _[0],
                    M = _[1];
                (0, o.useEffect)((function() {
                    if (p) {
                        if (!X) {
                            if (f) return;
                            var e = new ResizeObserver((function() {
                                var e = p.getBoundingClientRect();
                                if (m)
                                    for (var t = p.children.length - 1; t >= 0; --t) {
                                        var r = p.children[t];
                                        if (r.getBoundingClientRect().x <= e.x) {
                                            var n = void 0;
                                            n = 1 === t ? 0 : r.offsetLeft, p.scrollTo({
                                                behavior: "smooth",
                                                left: n
                                            });
                                            break
                                        }
                                    } else
                                        for (var o = 0; o < p.children.length; ++o) {
                                            var s = p.children[o],
                                                l = s.getBoundingClientRect();
                                            if (l.x + l.width >= e.x + e.width) {
                                                o == p.children.length - 2 && (s = p.children[p.children.length - 1]), p.scrollTo({
                                                    behavior: "smooth",
                                                    left: s.offsetLeft - (e.width - l.width)
                                                });
                                                break
                                            }
                                        }
                            }));
                            return e.observe(p),
                                function() {
                                    return e.disconnect()
                                }
                        }
                        var t = function(e) {
                                var t = "touchmove" === e.type ? e.touches[0].pageX : e.pageX,
                                    r = X.startScrollLeft - t + X.startX;
                                r !== p.scrollLeft && (p.scrollLeft = r)
                            },
                            r = function() {
                                A(null), setTimeout((function() {
                                    return M(!1)
                                }))
                            };
                        return window.addEventListener("mousemove", t), window.addEventListener("touchmove", t), window.addEventListener("mouseup", r), window.addEventListener("touchend", r),
                            function() {
                                window.removeEventListener("mousemove", t), window.removeEventListener("touchmove", t), window.removeEventListener("mouseup", r), window.removeEventListener("touchend", r)
                            }
                    }
                }), [X, p, m, f]), (0, o.useEffect)((function() {
                    if (p) {
                        var e = function() {
                            var e = p.scrollLeft,
                                t = p.offsetWidth,
                                r = p.scrollWidth,
                                n = e > 0;
                            C !== n && T(n);
                            var o = e + t < r;
                            if (k !== o && S(o), X && (e !== X.startScrollLeft && M(!0), e !== d.current)) {
                                var s = e < d.current;
                                m !== s && b(s), d.current = e
                            }
                        };
                        p.addEventListener("scroll", e);
                        var t = new ResizeObserver(e);
                        return t.observe(p),
                            function() {
                                p.removeEventListener("scroll", e), t.disconnect()
                            }
                    }
                }), [X, m, p, C, k]);
                var B = function(e, t) {
                    e.stopPropagation();
                    var r = (0, s.f)(p);
                    null == p || p.scrollTo({
                        left: (r + (t ? 1 : -1)) * p.offsetWidth,
                        behavior: "smooth"
                    })
                };
                return (0, a.jsxs)("div", {
                    className: "flex flex-col relative",
                    children: [(0, a.jsx)("div", {
                        className: "scrollable-content whitespace-nowrap ".concat(X ? "cursor-grabbing" : "cursor-grab"),
                        ref: g,
                        onMouseDown: function(e) {
                            0 === e.button && (e.preventDefault(), A({
                                startScrollLeft: e.currentTarget.scrollLeft,
                                startX: e.pageX
                            }))
                        },
                        onTouchStart: function(e) {
                            A({
                                startScrollLeft: e.currentTarget.scrollLeft,
                                startX: e.touches[0].pageX
                            })
                        },
                        onClick: function(e) {
                            H && (e.preventDefault(), e.stopPropagation())
                        },
                        children: t
                    }), r === c.y.OnTop && (0, a.jsxs)("div", {
                        className: "hidden sm:flex absolute -top-[66px] right-0 gap-[24px]",
                        children: [(0, a.jsx)("svg", {
                            className: "w-[40px] h-[40px] cursor-pointer ".concat(C ? "" : "opacity-40"),
                            onClick: function(e) {
                                return B(e)
                            },
                            children: (0, a.jsx)("use", {
                                xlinkHref: "public/icons/icons.svg#arrow-left"
                            })
                        }), (0, a.jsx)("svg", {
                            className: "w-[40px] h-[40px] cursor-pointer ".concat(k ? "" : "opacity-40"),
                            onClick: function(e) {
                                return B(e, !0)
                            },
                            children: (0, a.jsx)("use", {
                                xlinkHref: "public/icons/icons.svg#arrow-right"
                            })
                        })]
                    }), C && (0, a.jsxs)(a.Fragment, {
                        children: [r === c.y.Default && (0, a.jsx)(l.U, {
                            onClick: B
                        }), r === c.y.Small && (0, a.jsx)("svg", {
                            className: "fill-current w-[20px] h-[20px] pr-[5px] absolute top-1/2 left-0 translate-y-[-50%] bg-white",
                            children: (0, a.jsx)("use", {
                                xlinkHref: "public/icons/icons.svg#arrow-left"
                            })
                        })]
                    }), k && (0, a.jsxs)(a.Fragment, {
                        children: [r === c.y.Default && (0, a.jsx)(l.U, {
                            isRight: !0,
                            onClick: function(e) {
                                return B(e, !0)
                            }
                        }), r === c.y.Small && (0, a.jsx)("svg", {
                            className: "fill-current w-[20px] h-[20px] pl-[5px] absolute top-1/2 right-0 translate-y-[-50%] bg-white",
                            children: (0, a.jsx)("use", {
                                xlinkHref: "public/icons/icons.svg#arrow-right"
                            })
                        })]
                    }), (0, a.jsx)(i.P, {
                        scrollElement: p,
                        scrollIndicatorMode: u
                    })]
                })
            }
        }
    }
]);