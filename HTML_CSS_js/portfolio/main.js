(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function (e, n, t) {
      e.exports = t("zUnb");
    },
    Dm1U: function (e, n, t) {
      var r, o, i, l;
      (o = this),
        (i = window),
        (l = document),
        void 0 ===
          (r = function () {
            return (
              (o.fullpage = (function (e, n) {
                "use strict";
                var t = "fullpage-wrapper",
                  r = "." + t,
                  o = "fp-responsive",
                  i = "fp-notransition",
                  l = "fp-destroyed",
                  u = "fp-enabled",
                  a = "fp-viewing",
                  s = "active",
                  c = "." + s,
                  d = "fp-completely",
                  f = "fp-section",
                  p = "." + f,
                  h = p + c,
                  v = "fp-tableCell",
                  g = "." + v,
                  y = "fp-auto-height",
                  m = "fp-normal-scroll",
                  b = "#fp-nav",
                  w = "fp-slide",
                  _ = "." + w,
                  E = _ + c,
                  C = "fp-slides",
                  x = "." + C,
                  S = "fp-slidesContainer",
                  k = "." + S,
                  T = "fp-table",
                  N = "fp-slidesNav",
                  A = "." + N,
                  I = A + " a",
                  O = ".fp-controlArrow",
                  M = "fp-prev",
                  R = O + ".fp-prev",
                  D = O + ".fp-next";
                function P(n, t) {
                  e.console && e.console[n] && e.console[n]("fullPage: " + t);
                }
                function j(e, t) {
                  return (t = 1 < arguments.length ? t : n)
                    ? t.querySelectorAll(e)
                    : null;
                }
                function H(e) {
                  e = e || {};
                  for (var n = 1, t = arguments.length; n < t; ++n) {
                    var r = arguments[n];
                    if (r)
                      for (var o in r)
                        r.hasOwnProperty(o) &&
                          (e[o] =
                            "[object Object]" !==
                            Object.prototype.toString.call(r[o])
                              ? r[o]
                              : H(e[o], r[o]));
                  }
                  return e;
                }
                function L(e, n) {
                  return (
                    null != e &&
                    (e.classList
                      ? e.classList.contains(n)
                      : new RegExp("(^| )" + n + "( |$)", "gi").test(
                          e.className
                        ))
                  );
                }
                function V() {
                  return "innerHeight" in e
                    ? e.innerHeight
                    : n.documentElement.offsetHeight;
                }
                function B() {
                  return e.innerWidth;
                }
                function F(e, n) {
                  var t;
                  for (t in ((e = G(e)), n))
                    if (n.hasOwnProperty(t) && null !== t)
                      for (var r = 0; r < e.length; r++) e[r].style[t] = n[t];
                  return e;
                }
                function z(e, n, t) {
                  for (var r = e[t]; r && !ve(r, n); ) r = r[t];
                  return r;
                }
                function U(e, n) {
                  return z(e, n, "previousElementSibling");
                }
                function Z(e, n) {
                  return z(e, n, "nextElementSibling");
                }
                function W(e, n) {
                  if (null == n) return e.previousElementSibling;
                  var t = W(e);
                  return t && ve(t, n) ? t : null;
                }
                function Q(e, n) {
                  if (null == n) return e.nextElementSibling;
                  var t = Q(e);
                  return t && ve(t, n) ? t : null;
                }
                function Y(e) {
                  return e[e.length - 1];
                }
                function q(e, n) {
                  e = J(e) ? e[0] : e;
                  for (
                    var t =
                        null != n
                          ? j(n, e.parentNode)
                          : e.parentNode.childNodes,
                      r = 0,
                      o = 0;
                    o < t.length;
                    o++
                  ) {
                    if (t[o] == e) return r;
                    1 == t[o].nodeType && r++;
                  }
                  return -1;
                }
                function G(e) {
                  return J(e) ? e : [e];
                }
                function K(e) {
                  e = G(e);
                  for (var n = 0; n < e.length; n++)
                    e[n].style.display = "none";
                  return e;
                }
                function X(e) {
                  e = G(e);
                  for (var n = 0; n < e.length; n++)
                    e[n].style.display = "block";
                  return e;
                }
                function J(e) {
                  return (
                    "[object Array]" === Object.prototype.toString.call(e) ||
                    "[object NodeList]" === Object.prototype.toString.call(e)
                  );
                }
                function $(e, n) {
                  e = G(e);
                  for (var t = 0; t < e.length; t++) {
                    var r = e[t];
                    r.classList ? r.classList.add(n) : (r.className += " " + n);
                  }
                  return e;
                }
                function ee(e, n) {
                  e = G(e);
                  for (var t = n.split(" "), r = 0; r < t.length; r++) {
                    n = t[r];
                    for (var o = 0; o < e.length; o++) {
                      var i = e[o];
                      i.classList
                        ? i.classList.remove(n)
                        : (i.className = i.className.replace(
                            new RegExp(
                              "(^|\\b)" + n.split(" ").join("|") + "(\\b|$)",
                              "gi"
                            ),
                            " "
                          ));
                    }
                  }
                  return e;
                }
                function ne(e, n) {
                  n.appendChild(e);
                }
                function te(e, t, r) {
                  var o;
                  t = t || n.createElement("div");
                  for (var i = 0; i < e.length; i++) {
                    var l = e[i];
                    ((r && !i) || !r) &&
                      ((o = t.cloneNode(!0)), l.parentNode.insertBefore(o, l)),
                      o.appendChild(l);
                  }
                  return e;
                }
                function re(e, n) {
                  te(e, n, !0);
                }
                function oe(e, n) {
                  for (
                    "string" == typeof n && (n = ye(n)), e.appendChild(n);
                    e.firstChild !== n;

                  )
                    n.appendChild(e.firstChild);
                }
                function ie(e) {
                  for (var t = n.createDocumentFragment(); e.firstChild; )
                    t.appendChild(e.firstChild);
                  e.parentNode.replaceChild(t, e);
                }
                function le(e, n) {
                  return e && 1 === e.nodeType
                    ? ve(e, n)
                      ? e
                      : le(e.parentNode, n)
                    : null;
                }
                function ue(e, n) {
                  se(e, e.nextSibling, n);
                }
                function ae(e, n) {
                  se(e, e, n);
                }
                function se(e, n, t) {
                  J(t) || ("string" == typeof t && (t = ye(t)), (t = [t]));
                  for (var r = 0; r < t.length; r++)
                    e.parentNode.insertBefore(t[r], n);
                }
                function ce() {
                  var t = n.documentElement;
                  return (e.pageYOffset || t.scrollTop) - (t.clientTop || 0);
                }
                function de(e) {
                  return Array.prototype.filter.call(
                    e.parentNode.children,
                    function (n) {
                      return n !== e;
                    }
                  );
                }
                function fe(e) {
                  e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
                }
                function pe(e) {
                  if ("function" == typeof e) return !0;
                  var n = Object.prototype.toString(e);
                  return (
                    "[object Function]" === n ||
                    "[object GeneratorFunction]" === n
                  );
                }
                function he(t, r, o) {
                  var i;
                  (o = void 0 === o ? {} : o),
                    "function" == typeof e.CustomEvent
                      ? (i = new CustomEvent(r, { detail: o }))
                      : (i = n.createEvent("CustomEvent")).initCustomEvent(
                          r,
                          !0,
                          !0,
                          o
                        ),
                    t.dispatchEvent(i);
                }
                function ve(e, n) {
                  return (
                    e.matches ||
                    e.matchesSelector ||
                    e.msMatchesSelector ||
                    e.mozMatchesSelector ||
                    e.webkitMatchesSelector ||
                    e.oMatchesSelector
                  ).call(e, n);
                }
                function ge(e, n) {
                  if ("boolean" == typeof n)
                    for (var t = 0; t < e.length; t++)
                      e[t].style.display = n ? "block" : "none";
                  return e;
                }
                function ye(e) {
                  var t = n.createElement("div");
                  return (t.innerHTML = e.trim()), t.firstChild;
                }
                function me(e) {
                  e = G(e);
                  for (var n = 0; n < e.length; n++) {
                    var t = e[n];
                    t && t.parentElement && t.parentNode.removeChild(t);
                  }
                }
                function be(e, n, t) {
                  for (var r = e[t], o = []; r; )
                    (ve(r, n) || null == n) && o.push(r), (r = r[t]);
                  return o;
                }
                function we(e, n) {
                  return be(e, n, "nextElementSibling");
                }
                function _e(e, n) {
                  return be(e, n, "previousElementSibling");
                }
                function Ee(e, n) {
                  e.insertBefore(n, e.firstChild);
                }
                return (
                  e.NodeList &&
                    !NodeList.prototype.forEach &&
                    (NodeList.prototype.forEach = function (n, t) {
                      t = t || e;
                      for (var r = 0; r < this.length; r++)
                        n.call(t, this[r], r, this);
                    }),
                  (e.fp_utils = {
                    $: j,
                    deepExtend: H,
                    hasClass: L,
                    getWindowHeight: V,
                    css: F,
                    until: z,
                    prevUntil: U,
                    nextUntil: Z,
                    prev: W,
                    next: Q,
                    last: Y,
                    index: q,
                    getList: G,
                    hide: K,
                    show: X,
                    isArrayOrList: J,
                    addClass: $,
                    removeClass: ee,
                    appendTo: ne,
                    wrap: te,
                    wrapAll: re,
                    wrapInner: oe,
                    unwrap: ie,
                    closest: le,
                    after: ue,
                    before: ae,
                    insertBefore: se,
                    getScrollTop: ce,
                    siblings: de,
                    preventDefault: fe,
                    isFunction: pe,
                    trigger: he,
                    matches: ve,
                    toggle: ge,
                    createElementFromHTML: ye,
                    remove: me,
                    filter: function (e, n) {
                      Array.prototype.filter.call(e, n);
                    },
                    untilAll: be,
                    nextAll: we,
                    prevAll: _e,
                    showError: P,
                    prependTo: Ee,
                    toggleClass: function (e, n, t) {
                      if (e.classList && null == t) e.classList.toggle(n);
                      else {
                        var r = L(e, n);
                        (r && null == t) || !t
                          ? ee(e, n)
                          : ((!r && null == t) || t) && $(e, n);
                      }
                    },
                  }),
                  function (z, G) {
                    var te =
                        (G &&
                          new RegExp(
                            "([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$"
                          ).test(G.licenseKey)) ||
                        -1 < n.domain.indexOf("alvarotrigo.com"),
                      se = j("html, body"),
                      be = j("html")[0],
                      Ce = j("body")[0];
                    if (!L(be, u)) {
                      var xe = {};
                      G = H(
                        {
                          menu: !1,
                          anchors: [],
                          lockAnchors: !1,
                          navigation: !1,
                          navigationPosition: "right",
                          navigationTooltips: [],
                          showActiveTooltip: !1,
                          slidesNavigation: !1,
                          slidesNavPosition: "bottom",
                          scrollBar: !1,
                          hybrid: !1,
                          css3: !0,
                          scrollingSpeed: 700,
                          autoScrolling: !0,
                          fitToSection: !0,
                          fitToSectionDelay: 1e3,
                          easing: "easeInOutCubic",
                          easingcss3: "ease",
                          loopBottom: !1,
                          loopTop: !1,
                          loopHorizontal: !0,
                          continuousVertical: !1,
                          continuousHorizontal: !1,
                          scrollHorizontally: !1,
                          interlockedSlides: !1,
                          dragAndMove: !1,
                          offsetSections: !1,
                          resetSliders: !1,
                          fadingEffect: !1,
                          normalScrollElements: null,
                          scrollOverflow: !1,
                          scrollOverflowReset: !1,
                          scrollOverflowHandler: e.fp_scrolloverflow
                            ? e.fp_scrolloverflow.iscrollHandler
                            : null,
                          scrollOverflowOptions: null,
                          touchSensitivity: 5,
                          touchWrapper: "string" == typeof z ? j(z)[0] : z,
                          bigSectionsDestination: null,
                          keyboardScrolling: !0,
                          animateAnchor: !0,
                          recordHistory: !0,
                          controlArrows: !0,
                          controlArrowColor: "#fff",
                          verticalCentered: !0,
                          sectionsColor: [],
                          paddingTop: 0,
                          paddingBottom: 0,
                          fixedElements: null,
                          responsive: 0,
                          responsiveWidth: 0,
                          responsiveHeight: 0,
                          responsiveSlides: !1,
                          parallax: !1,
                          parallaxOptions: {
                            type: "reveal",
                            percentage: 62,
                            property: "translate",
                          },
                          cards: !1,
                          cardsOptions: {
                            perspective: 100,
                            fadeContent: !0,
                            fadeBackground: !0,
                          },
                          sectionSelector: ".section",
                          slideSelector: ".slide",
                          v2compatible: !1,
                          afterLoad: null,
                          onLeave: null,
                          afterRender: null,
                          afterResize: null,
                          afterReBuild: null,
                          afterSlideLoad: null,
                          onSlideLeave: null,
                          afterResponsive: null,
                          lazyLoading: !0,
                        },
                        G
                      );
                      var Se,
                        ke,
                        Te,
                        Ne,
                        Ae = !1,
                        Ie = navigator.userAgent.match(
                          /(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/
                        ),
                        Oe =
                          "ontouchstart" in e ||
                          0 < navigator.msMaxTouchPoints ||
                          navigator.maxTouchPoints,
                        Me = "string" == typeof z ? j(z)[0] : z,
                        Re = V(),
                        De = B(),
                        Pe = !1,
                        je = !0,
                        He = !0,
                        Le = [],
                        Ve = { m: { up: !0, down: !0, left: !0, right: !0 } };
                      Ve.k = H({}, Ve.m);
                      var Be,
                        Fe,
                        ze,
                        Ue,
                        Ze,
                        We,
                        Qe,
                        Ye,
                        qe,
                        Ge,
                        Ke = rr(),
                        Xe = {
                          touchmove: "ontouchmove" in e ? "touchmove" : Ke.move,
                          touchstart:
                            "ontouchstart" in e ? "touchstart" : Ke.down,
                        },
                        Je = !1,
                        $e = !L(Ce, _t("OHNsd3AtZnVsbHBhZ2UtanM5T20=")),
                        en =
                          'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
                        nn = !1;
                      try {
                        var tn = Object.defineProperty({}, "passive", {
                          get: function () {
                            nn = !0;
                          },
                        });
                        e.addEventListener("testPassive", null, tn),
                          e.removeEventListener("testPassive", null, tn);
                      } catch (z) {}
                      var rn,
                        on,
                        ln = H({}, G),
                        un = !1,
                        an = !0,
                        sn = {};
                      vr(),
                        (e.fp_easings = H(e.fp_easings, {
                          easeInOutCubic: function (e, n, t, r) {
                            return (e /= r / 2) < 1
                              ? (t / 2) * e * e * e + n
                              : (t / 2) * ((e -= 2) * e * e + 2) + n;
                          },
                        })),
                        Me &&
                          ((xe.version = "3.0.8"),
                          (xe.setAutoScrolling = En),
                          (xe.setRecordHistory = Cn),
                          (xe.setScrollingSpeed = xn),
                          (xe.setFitToSection = Sn),
                          (xe.setLockAnchors = function (e) {
                            G.lockAnchors = e;
                          }),
                          (xe.setMouseWheelScrolling = kn),
                          (xe.setAllowScrolling = Tn),
                          (xe.setKeyboardScrolling = An),
                          (xe.moveSectionUp = In),
                          (xe.moveSectionDown = On),
                          (xe.silentMoveTo = Mn),
                          (xe.moveTo = Rn),
                          (xe.moveSlideRight = Dn),
                          (xe.moveSlideLeft = Pn),
                          (xe.fitToSection = Kn),
                          (xe.reBuild = jn),
                          (xe.setResponsive = Ln),
                          (xe.getFullpageData = function () {
                            return {
                              options: G,
                              internals: {
                                container: Me,
                                canScroll: He,
                                isScrollAllowed: Ve,
                                getDestinationPosition: lt,
                                isTouch: Oe,
                                c: xt,
                                getXmovement: Qt,
                                removeAnimation: Ut,
                                getTransforms: ur,
                                lazyLoad: vt,
                                addAnimation: zt,
                                performHorizontalMove: Lt,
                                landscapeScroll: Pt,
                                silentLandscapeScroll: ir,
                                keepSlidesPosition: it,
                                silentScroll: lr,
                                styleSlides: Zn,
                                styleSection: Qn,
                                scrollHandler: Gn,
                                getEventsPage: or,
                                getMSPointer: rr,
                                isReallyTouch: et,
                                usingExtension: cr,
                                toggleControlArrows: jt,
                                touchStartHandler: nt,
                                touchMoveHandler: $n,
                              },
                            };
                          }),
                          (xe.destroy = function (t) {
                            he(Me, "destroy", t),
                              En(!1, "internal"),
                              Tn(!0),
                              Nn(!1),
                              An(!1),
                              $(Me, l),
                              [Ze, Ue, Fe, We, Qe, qe, ze].forEach(function (
                                e
                              ) {
                                clearTimeout(e);
                              }),
                              e.removeEventListener("scroll", Gn),
                              e.removeEventListener("hashchange", Tt),
                              e.removeEventListener("resize", Vt),
                              n.removeEventListener("keydown", At),
                              n.removeEventListener("keyup", It),
                              ["click", "touchstart"].forEach(function (e) {
                                n.removeEventListener(e, Vn);
                              }),
                              [
                                "mouseenter",
                                "touchstart",
                                "mouseleave",
                                "touchend",
                              ].forEach(function (e) {
                                n.removeEventListener(e, Fn, !0);
                              }),
                              dr("dragAndMove", "destroy"),
                              t &&
                                (lr(0),
                                j(
                                  "img[data-src], source[data-src], audio[data-src], iframe[data-src]",
                                  Me
                                ).forEach(function (e) {
                                  pt(e, "src");
                                }),
                                j("img[data-srcset]").forEach(function (e) {
                                  pt(e, "srcset");
                                }),
                                me(j(b + ", " + A + ", " + O)),
                                F(j(p), {
                                  height: "",
                                  "background-color": "",
                                  padding: "",
                                }),
                                F(j(_), { width: "" }),
                                F(Me, {
                                  height: "",
                                  position: "",
                                  "-ms-touch-action": "",
                                  "touch-action": "",
                                }),
                                F(se, { overflow: "", height: "" }),
                                ee(be, u),
                                ee(Ce, o),
                                Ce.className.split(/\s+/).forEach(function (e) {
                                  0 === e.indexOf(a) && ee(Ce, e);
                                }),
                                j(p + ", " + _).forEach(function (e) {
                                  G.scrollOverflowHandler &&
                                    G.scrollOverflow &&
                                    G.scrollOverflowHandler.remove(e),
                                    ee(e, T + " " + s + " " + d),
                                    e.getAttribute("data-fp-styles") &&
                                      e.setAttribute(
                                        "style",
                                        e.getAttribute("data-fp-styles")
                                      ),
                                    L(e, f) &&
                                      !un &&
                                      e.removeAttribute("data-anchor");
                                }),
                                sr(Me),
                                [g, k, x].forEach(function (e) {
                                  j(e, Me).forEach(function (e) {
                                    ie(e);
                                  });
                                }),
                                e.scrollTo(0, 0),
                                [f, w, S].forEach(function (e) {
                                  ee(j("." + e), e);
                                }));
                          }),
                          (xe.getActiveSection = function () {
                            return new br(j(h)[0]);
                          }),
                          (xe.getActiveSlide = function () {
                            return ct(j(E, j(h)[0])[0]);
                          }),
                          (xe.landscapeScroll = Pt),
                          (xe.test = {
                            top: "0px",
                            translate3d: "translate3d(0px, 0px, 0px)",
                            translate3dH: (function () {
                              for (
                                var e = [], n = 0;
                                n < j(G.sectionSelector, Me).length;
                                n++
                              )
                                e.push("translate3d(0px, 0px, 0px)");
                              return e;
                            })(),
                            left: (function () {
                              for (
                                var e = [], n = 0;
                                n < j(G.sectionSelector, Me).length;
                                n++
                              )
                                e.push(0);
                              return e;
                            })(),
                            options: G,
                            setAutoScrolling: En,
                          }),
                          (xe.shared = {
                            afterRenderActions: qn,
                            isNormalScrollElement: !1,
                          }),
                          (e.fullpage_api = xe),
                          (e.fullpage_extensions = !0),
                          G.$ &&
                            Object.keys(xe).forEach(function (e) {
                              G.$.fn.fullpage[e] = xe[e];
                            }),
                          Un("continuousHorizontal"),
                          Un("scrollHorizontally"),
                          Un("resetSliders"),
                          Un("interlockedSlides"),
                          Un("responsiveSlides"),
                          Un("fadingEffect"),
                          Un("dragAndMove"),
                          Un("offsetSections"),
                          Un("scrollOverflowReset"),
                          Un("parallax"),
                          Un("cards"),
                          dr("dragAndMove", "init"),
                          G.css3 &&
                            (G.css3 = (function () {
                              var t,
                                r = n.createElement("p"),
                                o = {
                                  webkitTransform: "-webkit-transform",
                                  OTransform: "-o-transform",
                                  msTransform: "-ms-transform",
                                  MozTransform: "-moz-transform",
                                  transform: "transform",
                                };
                              for (var i in ((r.style.display = "block"),
                              n.body.insertBefore(r, null),
                              o))
                                void 0 !== r.style[i] &&
                                  ((r.style[i] = "translate3d(1px,1px,1px)"),
                                  (t = e
                                    .getComputedStyle(r)
                                    .getPropertyValue(o[i])));
                              return (
                                n.body.removeChild(r),
                                void 0 !== t && 0 < t.length && "none" !== t
                              );
                            })()),
                          (G.scrollBar = G.scrollBar || G.hybrid),
                          (function () {
                            if (!G.anchors.length) {
                              var e = "[data-anchor]",
                                n = j(
                                  G.sectionSelector.split(",").join(e + ",") +
                                    e,
                                  Me
                                );
                              n.length &&
                                ((un = !0),
                                n.forEach(function (e) {
                                  G.anchors.push(
                                    e.getAttribute("data-anchor").toString()
                                  );
                                }));
                            }
                            if (!G.navigationTooltips.length) {
                              var t = "[data-tooltip]",
                                r = j(
                                  G.sectionSelector.split(",").join(t + ",") +
                                    t,
                                  Me
                                );
                              r.length &&
                                r.forEach(function (e) {
                                  G.navigationTooltips.push(
                                    e.getAttribute("data-tooltip").toString()
                                  );
                                });
                            }
                          })(),
                          (function () {
                            F(Me, { height: "100%", position: "relative" }),
                              $(Me, t),
                              $(be, u),
                              (Re = V()),
                              ee(Me, l),
                              $(j(G.sectionSelector, Me), f),
                              $(j(G.slideSelector, Me), w),
                              dr("parallax", "init");
                            for (var e = j(p), o = 0; o < e.length; o++) {
                              var i = o,
                                a = e[o],
                                c = j(_, a),
                                d = c.length;
                              a.setAttribute(
                                "data-fp-styles",
                                a.getAttribute("style")
                              ),
                                Qn(a, i),
                                void 0 !== G.anchors[(v = i)] &&
                                  L(a, s) &&
                                  Zt(G.anchors[v], v),
                                G.menu &&
                                  G.css3 &&
                                  null != le(j(G.menu)[0], r) &&
                                  j(G.menu).forEach(function (e) {
                                    Ce.appendChild(e);
                                  }),
                                0 < d
                                  ? Zn(a, c, d)
                                  : G.verticalCentered && Yt(a);
                            }
                            var v;
                            G.fixedElements &&
                              G.css3 &&
                              j(G.fixedElements).forEach(function (e) {
                                Ce.appendChild(e);
                              }),
                              G.navigation &&
                                (function () {
                                  var e = n.createElement("div");
                                  e.setAttribute("id", "fp-nav");
                                  var t = n.createElement("ul");
                                  e.appendChild(t), ne(e, Ce);
                                  var r = j(b)[0];
                                  $(r, "fp-" + G.navigationPosition),
                                    G.showActiveTooltip &&
                                      $(r, "fp-show-active");
                                  for (
                                    var o = "", i = 0;
                                    i < j(p).length;
                                    i++
                                  ) {
                                    var l = "";
                                    G.anchors.length && (l = G.anchors[i]),
                                      (o +=
                                        '<li><a href="#' +
                                        l +
                                        '"><span class="fp-sr-only">' +
                                        Yn(i, "Section") +
                                        "</span><span></span></a>");
                                    var u = G.navigationTooltips[i];
                                    void 0 !== u &&
                                      "" !== u &&
                                      (o +=
                                        '<div class="fp-tooltip fp-' +
                                        G.navigationPosition +
                                        '">' +
                                        u +
                                        "</div>"),
                                      (o += "</li>");
                                  }
                                  (j("ul", r)[0].innerHTML = o),
                                    F(j(b), {
                                      "margin-top":
                                        "-" + j(b)[0].offsetHeight / 2 + "px",
                                    }),
                                    $(
                                      j("a", j("li", j(b)[0])[q(j(h)[0], p)]),
                                      s
                                    );
                                })(),
                              j(
                                'iframe[src*="youtube.com/embed/"]',
                                Me
                              ).forEach(function (e) {
                                var n, t, r;
                                (t = "enablejsapi=1"),
                                  (r = (n = e).getAttribute("src")),
                                  n.setAttribute(
                                    "src",
                                    r + (/\?/.test(r) ? "&" : "?") + t
                                  );
                              }),
                              dr("fadingEffect", "apply"),
                              dr("cards", "init"),
                              G.scrollOverflow &&
                                (Be = G.scrollOverflowHandler.init(G));
                          })(),
                          Tn(!0),
                          Nn(!0),
                          En(G.autoScrolling, "internal"),
                          Ft(),
                          tr(),
                          "complete" === n.readyState && kt(),
                          e.addEventListener("load", kt),
                          G.scrollOverflow || qn(),
                          (function () {
                            for (var e = 1; e < 4; e++)
                              qe = setTimeout(zn, 350 * e);
                          })(),
                          $e || xt("l"),
                          e.addEventListener("scroll", Gn),
                          e.addEventListener("hashchange", Tt),
                          e.addEventListener("blur", function () {
                            Te = je = !1;
                          }),
                          e.addEventListener("resize", Vt),
                          n.addEventListener("keydown", At),
                          n.addEventListener("keyup", It),
                          ["click", "touchstart"].forEach(function (e) {
                            n.addEventListener(e, Vn);
                          }),
                          G.normalScrollElements &&
                            (["mouseenter", "touchstart"].forEach(function (e) {
                              Bn(e, !1);
                            }),
                            ["mouseleave", "touchend"].forEach(function (e) {
                              Bn(e, !0);
                            })),
                          dr("dragAndMove", "turnOffTouch"));
                      var cn,
                        dn,
                        fn,
                        pn = !1,
                        hn = 0,
                        vn = 0,
                        gn = 0,
                        yn = 0,
                        mn = new Date().getTime(),
                        bn = 0,
                        wn = 0,
                        _n = Re;
                      return xe;
                    }
                    function En(e, n) {
                      e || lr(0), hr("autoScrolling", e, n);
                      var t = j(h)[0];
                      if (G.autoScrolling && !G.scrollBar)
                        F(se, { overflow: "hidden", height: "100%" }),
                          Cn(ln.recordHistory, "internal"),
                          F(Me, {
                            "-ms-touch-action": "none",
                            "touch-action": "none",
                          }),
                          null != t && lr(t.offsetTop);
                      else if (
                        (F(se, { overflow: "visible", height: "initial" }),
                        Cn(!!G.autoScrolling && ln.recordHistory, "internal"),
                        F(Me, { "-ms-touch-action": "", "touch-action": "" }),
                        sr(Me),
                        null != t)
                      ) {
                        var r = dt(t.offsetTop);
                        r.element.scrollTo(0, r.options);
                      }
                      he(Me, "setAutoScrolling", e);
                    }
                    function Cn(e, n) {
                      hr("recordHistory", e, n);
                    }
                    function xn(e, n) {
                      "internal" !== n &&
                        cr("fadingEffect") &&
                        xe.fadingEffect.update(e),
                        cr("cards") && xe.cards.update(e),
                        hr("scrollingSpeed", e, n);
                    }
                    function Sn(e, n) {
                      hr("fitToSection", e, n);
                    }
                    function kn(t) {
                      t
                        ? ((function () {
                            var t,
                              r = "";
                            e.addEventListener
                              ? (t = "addEventListener")
                              : ((t = "attachEvent"), (r = "on"));
                            var o =
                              "onwheel" in n.createElement("div")
                                ? "wheel"
                                : void 0 !== n.onmousewheel
                                ? "mousewheel"
                                : "DOMMouseScroll";
                            n[t](
                              "DOMMouseScroll" == o
                                ? r + "MozMousePixelScroll"
                                : r + o,
                              rt,
                              !!nn && { passive: !1 }
                            );
                          })(),
                          Me.addEventListener("mousedown", Ot),
                          Me.addEventListener("mouseup", Mt))
                        : (n.addEventListener
                            ? (n.removeEventListener("mousewheel", rt, !1),
                              n.removeEventListener("wheel", rt, !1),
                              n.removeEventListener(
                                "MozMousePixelScroll",
                                rt,
                                !1
                              ))
                            : n.detachEvent("onmousewheel", rt),
                          Me.removeEventListener("mousedown", Ot),
                          Me.removeEventListener("mouseup", Mt));
                    }
                    function Tn(e, n) {
                      void 0 !== n
                        ? (n = n.replace(/ /g, "").split(",")).forEach(
                            function (n) {
                              ar(e, n, "m");
                            }
                          )
                        : ar(e, "all", "m"),
                        he(Me, "setAllowScrolling", {
                          value: e,
                          directions: n,
                        });
                    }
                    function Nn(e) {
                      e
                        ? (kn(!0),
                          (function () {
                            if (Ie || Oe) {
                              G.autoScrolling &&
                                (Ce.removeEventListener(Xe.touchmove, Jn, {
                                  passive: !1,
                                }),
                                Ce.addEventListener(Xe.touchmove, Jn, {
                                  passive: !1,
                                }));
                              var e = G.touchWrapper;
                              e.removeEventListener(Xe.touchstart, nt),
                                e.removeEventListener(Xe.touchmove, $n, {
                                  passive: !1,
                                }),
                                e.addEventListener(Xe.touchstart, nt),
                                e.addEventListener(Xe.touchmove, $n, {
                                  passive: !1,
                                });
                            }
                          })())
                        : (kn(!1),
                          (function () {
                            if (Ie || Oe) {
                              G.autoScrolling &&
                                (Ce.removeEventListener(Xe.touchmove, $n, {
                                  passive: !1,
                                }),
                                Ce.removeEventListener(Xe.touchmove, Jn, {
                                  passive: !1,
                                }));
                              var e = G.touchWrapper;
                              e.removeEventListener(Xe.touchstart, nt),
                                e.removeEventListener(Xe.touchmove, $n, {
                                  passive: !1,
                                });
                            }
                          })());
                    }
                    function An(e, n) {
                      void 0 !== n
                        ? (n = n.replace(/ /g, "").split(",")).forEach(
                            function (n) {
                              ar(e, n, "k");
                            }
                          )
                        : (ar(e, "all", "k"), (G.keyboardScrolling = e));
                    }
                    function In() {
                      var e = U(j(h)[0], p);
                      e ||
                        (!G.loopTop && !G.continuousVertical) ||
                        (e = Y(j(p))),
                        null != e && ut(e, null, !0);
                    }
                    function On() {
                      var e = Z(j(h)[0], p);
                      e ||
                        (!G.loopBottom && !G.continuousVertical) ||
                        (e = j(p)[0]),
                        null != e && ut(e, null, !1);
                    }
                    function Mn(e, n) {
                      xn(0, "internal"),
                        Rn(e, n),
                        xn(ln.scrollingSpeed, "internal");
                    }
                    function Rn(e, n) {
                      var t = Kt(e);
                      void 0 !== n ? Xt(e, n) : null != t && ut(t);
                    }
                    function Dn(e) {
                      ot("right", e);
                    }
                    function Pn(e) {
                      ot("left", e);
                    }
                    function jn(n) {
                      if (!L(Me, l)) {
                        (Pe = !0), (Re = V()), (De = B());
                        for (var t = j(p), r = 0; r < t.length; ++r) {
                          var o = t[r],
                            i = j(x, o)[0],
                            u = j(_, o);
                          G.verticalCentered &&
                            F(j(g, o), { height: qt(o) + "px" }),
                            F(o, { height: Wn(o) + "px" }),
                            1 < u.length && Pt(i, j(E, i)[0]);
                        }
                        G.scrollOverflow && Be.createScrollBarForAll();
                        var a = q(j(h)[0], p);
                        a && !cr("fadingEffect") && Mn(a + 1),
                          (Pe = !1),
                          pe(G.afterResize) &&
                            n &&
                            G.afterResize.call(Me, e.innerWidth, e.innerHeight),
                          pe(G.afterReBuild) && !n && G.afterReBuild.call(Me),
                          he(Me, "afterRebuild");
                      }
                    }
                    function Hn() {
                      return L(Ce, o);
                    }
                    function Ln(e) {
                      var n = Hn();
                      e
                        ? n ||
                          (En(!1, "internal"),
                          Sn(!1, "internal"),
                          K(j(b)),
                          $(Ce, o),
                          pe(G.afterResponsive) &&
                            G.afterResponsive.call(Me, e),
                          dr("responsiveSlides", "toSections"),
                          he(Me, "afterResponsive", e),
                          G.scrollOverflow && Be.createScrollBarForAll())
                        : n &&
                          (En(ln.autoScrolling, "internal"),
                          Sn(ln.autoScrolling, "internal"),
                          X(j(b)),
                          ee(Ce, o),
                          pe(G.afterResponsive) &&
                            G.afterResponsive.call(Me, e),
                          dr("responsiveSlides", "toSlides"),
                          he(Me, "afterResponsive", e));
                    }
                    function Vn(e) {
                      var n = e.target;
                      n && le(n, b + " a")
                        ? function (e) {
                            fe(e);
                            var n = q(le(this, b + " li"));
                            ut(j(p)[n]);
                          }.call(n, e)
                        : ve(n, ".fp-tooltip")
                        ? function () {
                            he(W(this), "click");
                          }.call(n)
                        : ve(n, O)
                        ? function () {
                            var e = le(this, p);
                            L(this, M)
                              ? Ve.m.left && Pn(e)
                              : Ve.m.right && Dn(e);
                          }.call(n, e)
                        : ve(n, I) || null != le(n, I)
                        ? function (e) {
                            fe(e);
                            var n = j(x, le(this, p))[0];
                            Pt(n, j(_, n)[q(le(this, "li"))]);
                          }.call(n, e)
                        : le(n, G.menu + " [data-menuanchor]") &&
                          function (e) {
                            !j(G.menu)[0] ||
                              (!G.lockAnchors && G.anchors.length) ||
                              (fe(e), Rn(this.getAttribute("data-menuanchor")));
                          }.call(n, e);
                    }
                    function Bn(e, t) {
                      (n["fp_" + e] = t), n.addEventListener(e, Fn, !0);
                    }
                    function Fn(e) {
                      var t = e.type,
                        r = !1,
                        o = G.scrollOverflow,
                        i =
                          "mouseleave" === t
                            ? e.toElement || e.relatedTarget
                            : e.target;
                      if (i == n || !i)
                        return (
                          Nn(!0),
                          void (o && G.scrollOverflowHandler.setIscroll(i, !0))
                        );
                      "touchend" === t &&
                        ((an = !1),
                        setTimeout(function () {
                          an = !0;
                        }, 800)),
                        ("mouseenter" !== t || an) &&
                          (G.normalScrollElements
                            .split(",")
                            .forEach(function (e) {
                              if (!r) {
                                var n = ve(i, e),
                                  t = le(i, e);
                                (n || t) &&
                                  (xe.shared.isNormalScrollElement ||
                                    (Nn(!1),
                                    o &&
                                      G.scrollOverflowHandler.setIscroll(
                                        i,
                                        !1
                                      )),
                                  (xe.shared.isNormalScrollElement = !0),
                                  (r = !0));
                              }
                            }),
                          !r &&
                            xe.shared.isNormalScrollElement &&
                            (Nn(!0),
                            o && G.scrollOverflowHandler.setIscroll(i, !0),
                            (xe.shared.isNormalScrollElement = !1)));
                    }
                    function zn() {
                      var e = V(),
                        n = B();
                      (Re === e && De === n) || ((Re = e), (De = n), jn(!0));
                    }
                    function Un(n) {
                      var t = "fp_" + n + "Extension";
                      (sn[n] = G[n + "Key"]),
                        (xe[n] = void 0 !== e[t] ? new e[t]() : null),
                        xe[n] && xe[n].c(n);
                    }
                    function Zn(e, t, r) {
                      var o = 100 * r,
                        i = 100 / r,
                        l = n.createElement("div");
                      (l.className = C), re(t, l);
                      var u,
                        a,
                        c = n.createElement("div");
                      (c.className = S),
                        re(t, c),
                        F(j(k, e), { width: o + "%" }),
                        1 < r &&
                          (G.controlArrows &&
                            ((u = e),
                            (a = [
                              ye('<div class="fp-controlArrow fp-prev"></div>'),
                              ye('<div class="fp-controlArrow fp-next"></div>'),
                            ]),
                            ue(j(x, u)[0], a),
                            "#fff" !== G.controlArrowColor &&
                              (F(j(D, u), {
                                "border-color":
                                  "transparent transparent transparent " +
                                  G.controlArrowColor,
                              }),
                              F(j(R, u), {
                                "border-color":
                                  "transparent " +
                                  G.controlArrowColor +
                                  " transparent transparent",
                              })),
                            G.loopHorizontal || K(j(R, u))),
                          G.slidesNavigation &&
                            (function (e, n) {
                              ne(
                                ye('<div class="' + N + '"><ul></ul></div>'),
                                e
                              );
                              var t = j(A, e)[0];
                              $(t, "fp-" + G.slidesNavPosition);
                              for (var r = 0; r < n; r++)
                                ne(
                                  ye(
                                    '<li><a href="#"><span class="fp-sr-only">' +
                                      Yn(r, "Slide") +
                                      "</span><span></span></a></li>"
                                  ),
                                  j("ul", t)[0]
                                );
                              F(t, {
                                "margin-left": "-" + t.innerWidth / 2 + "px",
                              }),
                                $(j("a", j("li", t)[0]), s);
                            })(e, r)),
                        t.forEach(function (e) {
                          F(e, { width: i + "%" }), G.verticalCentered && Yt(e);
                        });
                      var d = j(E, e)[0];
                      null != d &&
                      (0 !== q(j(h), p) || (0 === q(j(h), p) && 0 !== q(d)))
                        ? (ir(d, "internal"), $(d, "fp-initial"))
                        : $(t[0], s);
                    }
                    function Wn(e) {
                      return G.offsetSections && xe.offsetSections
                        ? Math.round(xe.offsetSections.getWindowHeight(e))
                        : V();
                    }
                    function Qn(e, n) {
                      n || null != j(h)[0] || $(e, s),
                        (Ne = j(h)[0]),
                        F(e, { height: Wn(e) + "px" }),
                        G.paddingTop && F(e, { "padding-top": G.paddingTop }),
                        G.paddingBottom &&
                          F(e, { "padding-bottom": G.paddingBottom }),
                        void 0 !== G.sectionsColor[n] &&
                          F(e, { "background-color": G.sectionsColor[n] }),
                        void 0 !== G.anchors[n] &&
                          e.setAttribute("data-anchor", G.anchors[n]);
                    }
                    function Yn(e, n) {
                      return (
                        G.navigationTooltips[e] ||
                        G.anchors[e] ||
                        n + " " + (e + 1)
                      );
                    }
                    function qn() {
                      var e,
                        n,
                        t = j(h)[0];
                      $(t, d),
                        vt(t),
                        ht(),
                        yt(t),
                        G.scrollOverflow && G.scrollOverflowHandler.afterLoad(),
                        (n = Kt((e = Nt()).section)),
                        (e.section && n && (void 0 === n || q(n) !== q(Ne))) ||
                          !pe(G.afterLoad) ||
                          at("afterLoad", {
                            activeSection: t,
                            element: t,
                            direction: null,
                            anchorLink: t.getAttribute("data-anchor"),
                            sectionIndex: q(t, p),
                          }),
                        pe(G.afterRender) && at("afterRender"),
                        he(Me, "afterRender");
                    }
                    function Gn() {
                      var e;
                      if (
                        (he(Me, "onScroll"),
                        (!G.autoScrolling ||
                          G.scrollBar ||
                          cr("dragAndMove")) &&
                          !pr())
                      ) {
                        var n = cr("dragAndMove")
                            ? Math.abs(xe.dragAndMove.getCurrentScroll())
                            : ce(),
                          t = 0,
                          r = n + V() / 2,
                          o =
                            (cr("dragAndMove")
                              ? xe.dragAndMove.getDocumentHeight()
                              : Ce.offsetHeight - V()) === n,
                          i = j(p);
                        if (o) t = i.length - 1;
                        else if (n)
                          for (var l = 0; l < i.length; ++l)
                            i[l].offsetTop <= r && (t = l);
                        else t = 0;
                        if (!L((e = i[t]), s)) {
                          pn = !0;
                          var u,
                            a,
                            c = j(h)[0],
                            d = q(c, p) + 1,
                            f = Wt(e),
                            v = e.getAttribute("data-anchor"),
                            g = q(e, p) + 1,
                            y = j(E, e)[0],
                            m = {
                              activeSection: c,
                              sectionIndex: g - 1,
                              anchorLink: v,
                              element: e,
                              leavingSection: d,
                              direction: f,
                            };
                          y &&
                            ((a = y.getAttribute("data-anchor")), (u = q(y))),
                            He &&
                              ($(e, s),
                              ee(de(e), s),
                              dr("parallax", "afterLoad"),
                              pe(G.onLeave) && at("onLeave", m),
                              pe(G.afterLoad) && at("afterLoad", m),
                              cr("resetSliders") &&
                                xe.resetSliders.apply({
                                  localIsResizing: Pe,
                                  leavingSection: d,
                                }),
                              bt(c),
                              vt(e),
                              yt(e),
                              Zt(v, g - 1),
                              G.anchors.length && (Se = v),
                              $t(u, a, v)),
                            clearTimeout(We),
                            (We = setTimeout(function () {
                              pn = !1;
                            }, 100));
                        }
                        G.fitToSection &&
                          (clearTimeout(Qe),
                          (Qe = setTimeout(function () {
                            G.fitToSection &&
                              j(h)[0].offsetHeight <= Re &&
                              Kn();
                          }, G.fitToSectionDelay)));
                      }
                    }
                    function Kn() {
                      He && ((Pe = !0), ut(j(h)[0]), (Pe = !1));
                    }
                    function Xn(e) {
                      if (Ve.m[e]) {
                        var n = "down" === e ? On : In;
                        if (
                          (cr("scrollHorizontally") &&
                            (n = xe.scrollHorizontally.getScrollSection(e, n)),
                          G.scrollOverflow)
                        ) {
                          var t = G.scrollOverflowHandler.scrollable(j(h)[0]);
                          if (null != t) {
                            if (
                              !G.scrollOverflowHandler.isScrolled(
                                "down" === e ? "bottom" : "top",
                                t
                              )
                            )
                              return !0;
                            n();
                          } else n();
                        } else n();
                      }
                    }
                    function Jn(e) {
                      G.autoScrolling && et(e) && Ve.m.up && fe(e);
                    }
                    function $n(n) {
                      var t = le(n.target, p) || j(h)[0];
                      if (et(n)) {
                        G.autoScrolling && fe(n);
                        var r = or(n);
                        (gn = r.y),
                          (yn = r.x),
                          j(x, t).length &&
                          Math.abs(vn - yn) > Math.abs(hn - gn)
                            ? !Ae &&
                              Math.abs(vn - yn) >
                                (B() / 100) * G.touchSensitivity &&
                              (yn < vn
                                ? Ve.m.right && Dn(t)
                                : Ve.m.left && Pn(t))
                            : G.autoScrolling &&
                              He &&
                              Math.abs(hn - gn) >
                                (e.innerHeight / 100) * G.touchSensitivity &&
                              (gn < hn ? Xn("down") : hn < gn && Xn("up"));
                      }
                    }
                    function et(e) {
                      return (
                        void 0 === e.pointerType || "mouse" != e.pointerType
                      );
                    }
                    function nt(e) {
                      if ((G.fitToSection && (rn = !1), et(e))) {
                        var n = or(e);
                        (hn = n.y), (vn = n.x);
                      }
                    }
                    function tt(e, n) {
                      for (
                        var t = 0,
                          r = e.slice(Math.max(e.length - n, 1)),
                          o = 0;
                        o < r.length;
                        o++
                      )
                        t += r[o];
                      return Math.ceil(t / n);
                    }
                    function rt(n) {
                      var t = new Date().getTime(),
                        r = L(j(".fp-completely")[0], m);
                      if (!Ve.m.down && !Ve.m.up) return fe(n), !1;
                      if (G.autoScrolling && !Te && !r) {
                        var o =
                            (n = n || e.event).wheelDelta ||
                            -n.deltaY ||
                            -n.detail,
                          i = Math.max(-1, Math.min(1, o)),
                          l = void 0 !== n.wheelDeltaX || void 0 !== n.deltaX,
                          u =
                            Math.abs(n.wheelDeltaX) < Math.abs(n.wheelDelta) ||
                            Math.abs(n.deltaX) < Math.abs(n.deltaY) ||
                            !l;
                        149 < Le.length && Le.shift(),
                          Le.push(Math.abs(o)),
                          G.scrollBar && fe(n);
                        var a = t - mn;
                        if (((mn = t), 200 < a && (Le = []), He && !fr())) {
                          var s = tt(Le, 10);
                          tt(Le, 70) <= s && u && Xn(i < 0 ? "down" : "up");
                        }
                        return !1;
                      }
                      G.fitToSection && (rn = !1);
                    }
                    function ot(e, n) {
                      var t = null == n ? j(h)[0] : n,
                        r = j(x, t)[0];
                      if (!(null == r || fr() || Ae || j(_, r).length < 2)) {
                        var o = j(E, r)[0],
                          i = null;
                        if (null == (i = "left" === e ? U(o, _) : Z(o, _))) {
                          if (!G.loopHorizontal) return;
                          var l = de(o);
                          i = "left" === e ? l[l.length - 1] : l[0];
                        }
                        (Ae = !xe.test.isTesting), Pt(r, i, e);
                      }
                    }
                    function it() {
                      for (var e = j(E), n = 0; n < e.length; n++)
                        ir(e[n], "internal");
                    }
                    function lt(e) {
                      var n = e.offsetHeight,
                        t = e.offsetTop,
                        r = t,
                        o =
                          cr("dragAndMove") && xe.dragAndMove.isGrabbing
                            ? xe.dragAndMove.isScrollingDown()
                            : bn < t,
                        i = r - Re + n,
                        l = G.bigSectionsDestination;
                      return (
                        Re < n
                          ? ((o || l) && "bottom" !== l) || (r = i)
                          : (o || (Pe && null == Q(e))) && (r = i),
                        G.offsetSections &&
                          xe.offsetSections &&
                          (r = xe.offsetSections.getSectionPosition(o, r, e)),
                        (bn = r)
                      );
                    }
                    function ut(e, n, t) {
                      if (null != e) {
                        var o,
                          i,
                          l = {
                            element: e,
                            callback: n,
                            isMovementUp: t,
                            dtop: lt(e),
                            yMovement: Wt(e),
                            anchorLink: e.getAttribute("data-anchor"),
                            sectionIndex: q(e, p),
                            activeSlide: j(E, e)[0],
                            activeSection: j(h)[0],
                            leavingSection: q(j(h), p) + 1,
                            localIsResizing: Pe,
                          };
                        if (
                          !(
                            (l.activeSection == e && !Pe) ||
                            (G.scrollBar && ce() === l.dtop && !L(e, y))
                          )
                        ) {
                          if (
                            (null != l.activeSlide &&
                              ((o = l.activeSlide.getAttribute("data-anchor")),
                              (i = q(l.activeSlide))),
                            !l.localIsResizing)
                          ) {
                            var u = l.yMovement;
                            if (
                              (void 0 !== t && (u = t ? "up" : "down"),
                              (l.direction = u),
                              pe(G.onLeave) && !1 === at("onLeave", l))
                            )
                              return;
                          }
                          var a;
                          dr("parallax", "apply", l),
                            dr("cards", "apply", l),
                            G.autoScrolling &&
                              G.continuousVertical &&
                              void 0 !== l.isMovementUp &&
                              ((!l.isMovementUp && "up" == l.yMovement) ||
                                (l.isMovementUp && "down" == l.yMovement)) &&
                              ((c = l).isMovementUp
                                ? ae(j(h)[0], we(c.activeSection, p))
                                : ue(j(h)[0], _e(c.activeSection, p).reverse()),
                              lr(j(h)[0].offsetTop),
                              it(),
                              (c.wrapAroundElements = c.activeSection),
                              (c.dtop = c.element.offsetTop),
                              (c.yMovement = Wt(c.element)),
                              (c.leavingSection = q(c.activeSection, p) + 1),
                              (c.sectionIndex = q(c.element, p)),
                              he(j(r)[0], "onContinuousVertical", c),
                              (l = c)),
                            cr("scrollOverflowReset") &&
                              xe.scrollOverflowReset.setPrevious(
                                l.activeSection
                              ),
                            l.localIsResizing || bt(l.activeSection),
                            G.scrollOverflow &&
                              G.scrollOverflowHandler.beforeLeave(),
                            $(e, s),
                            ee(de(e), s),
                            vt(e),
                            G.scrollOverflow &&
                              G.scrollOverflowHandler.onLeave(),
                            (He = xe.test.isTesting),
                            $t(i, o, l.anchorLink),
                            (function (e) {
                              if (G.css3 && G.autoScrolling && !G.scrollBar)
                                Gt(
                                  "translate3d(0px, -" +
                                    Math.round(e.dtop) +
                                    "px, 0px)",
                                  !0
                                ),
                                  G.scrollingSpeed
                                    ? (clearTimeout(Ue),
                                      (Ue = setTimeout(function () {
                                        ft(e);
                                      }, G.scrollingSpeed)))
                                    : ft(e);
                              else {
                                var n = dt(e.dtop);
                                (xe.test.top = -e.dtop + "px"),
                                  gr(
                                    n.element,
                                    n.options,
                                    G.scrollingSpeed,
                                    function () {
                                      G.scrollBar
                                        ? setTimeout(function () {
                                            ft(e);
                                          }, 30)
                                        : ft(e);
                                    }
                                  );
                              }
                            })(l),
                            (Se = l.anchorLink),
                            Zt(
                              l.anchorLink,
                              null == (a = l).wrapAroundElements
                                ? a.sectionIndex
                                : a.isMovementUp
                                ? j(p).length - 1
                                : 0
                            );
                        }
                      }
                      var c;
                    }
                    function at(e, n) {
                      var t,
                        r,
                        o,
                        i =
                          ((r = n),
                          (o = G.v2compatible
                            ? {
                                afterRender: function () {
                                  return [Me];
                                },
                                onLeave: function () {
                                  return [
                                    r.activeSection,
                                    r.leavingSection,
                                    r.sectionIndex + 1,
                                    r.direction,
                                  ];
                                },
                                afterLoad: function () {
                                  return [
                                    r.element,
                                    r.anchorLink,
                                    r.sectionIndex + 1,
                                  ];
                                },
                                afterSlideLoad: function () {
                                  return [
                                    r.destiny,
                                    r.anchorLink,
                                    r.sectionIndex + 1,
                                    r.slideAnchor,
                                    r.slideIndex,
                                  ];
                                },
                                onSlideLeave: function () {
                                  return [
                                    r.prevSlide,
                                    r.anchorLink,
                                    r.sectionIndex + 1,
                                    r.prevSlideIndex,
                                    r.direction,
                                    r.slideIndex,
                                  ];
                                },
                              }
                            : {
                                afterRender: function () {
                                  return {
                                    section: st(j(h)[0]),
                                    slide: ct(j(E, j(h)[0])[0]),
                                  };
                                },
                                onLeave: function () {
                                  return {
                                    origin: st(r.activeSection),
                                    destination: st(r.element),
                                    direction: r.direction,
                                  };
                                },
                                afterLoad: function () {
                                  return o.onLeave();
                                },
                                afterSlideLoad: function () {
                                  return {
                                    section: st(r.section),
                                    origin: ct(r.prevSlide),
                                    destination: ct(r.destiny),
                                    direction: r.direction,
                                  };
                                },
                                onSlideLeave: function () {
                                  return o.afterSlideLoad();
                                },
                              })[e]());
                      if (G.v2compatible) {
                        if (!1 === G[e].apply(i[0], i.slice(1))) return !1;
                      } else if (
                        (he(Me, e, i),
                        !1 ===
                          G[e].apply(
                            i[Object.keys(i)[0]],
                            ((t = i),
                            Object.keys(t).map(function (e) {
                              return t[e];
                            }))
                          ))
                      )
                        return !1;
                      return !0;
                    }
                    function st(e) {
                      return e ? new br(e) : null;
                    }
                    function ct(e) {
                      return e
                        ? new (function (e) {
                            mr.call(this, e, _);
                          })(e)
                        : null;
                    }
                    function dt(n) {
                      var t = {};
                      return (
                        G.autoScrolling && !G.scrollBar
                          ? ((t.options = -n), (t.element = j(r)[0]))
                          : ((t.options = n), (t.element = e)),
                        t
                      );
                    }
                    function ft(e) {
                      var n;
                      null != (n = e).wrapAroundElements &&
                        (n.isMovementUp
                          ? ae(j(p)[0], n.wrapAroundElements)
                          : ue(j(p)[j(p).length - 1], n.wrapAroundElements),
                        lr(j(h)[0].offsetTop),
                        it(),
                        (n.sectionIndex = q(n.element, p)),
                        (n.leavingSection = q(n.activeSection, p) + 1)),
                        pe(G.afterLoad) &&
                          !e.localIsResizing &&
                          at("afterLoad", e),
                        G.scrollOverflow && G.scrollOverflowHandler.afterLoad(),
                        dr("parallax", "afterLoad"),
                        dr("scrollOverflowReset", "reset"),
                        cr("resetSliders") && xe.resetSliders.apply(e),
                        e.localIsResizing || yt(e.element),
                        $(e.element, d),
                        ee(de(e.element), d),
                        ht(),
                        (He = !0),
                        pe(e.callback) && e.callback();
                    }
                    function pt(e, n) {
                      e.setAttribute(n, e.getAttribute("data-" + n)),
                        e.removeAttribute("data-" + n);
                    }
                    function ht() {
                      var e =
                        j(".fp-auto-height")[0] ||
                        (Hn() && j(".fp-auto-height-responsive")[0]);
                      G.lazyLoading &&
                        e &&
                        j(p + ":not(" + c + ")").forEach(function (e) {
                          var n, t, r;
                          (r = (n = e.getBoundingClientRect()).bottom),
                            (((t = n.top) + 2 < Re && 0 < t) ||
                              (2 < r && r < Re)) &&
                              vt(e);
                        });
                    }
                    function vt(e) {
                      G.lazyLoading &&
                        j(
                          "img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",
                          wt(e)
                        ).forEach(function (n) {
                          if (
                            (["src", "srcset"].forEach(function (t) {
                              var r = n.getAttribute("data-" + t);
                              null != r &&
                                r &&
                                (pt(n, t),
                                n.addEventListener("load", function () {
                                  gt(e);
                                }));
                            }),
                            ve(n, "source"))
                          ) {
                            var t = le(n, "video, audio");
                            t &&
                              (t.load(),
                              (t.onloadeddata = function () {
                                gt(e);
                              }));
                          }
                        });
                    }
                    function gt(e) {
                      G.scrollOverflow &&
                        (clearTimeout(on),
                        (on = setTimeout(function () {
                          Be.createScrollBar(e);
                        }, 200)));
                    }
                    function yt(e) {
                      var n = wt(e);
                      j("video, audio", n).forEach(function (e) {
                        e.hasAttribute("data-autoplay") &&
                          "function" == typeof e.play &&
                          e.play();
                      }),
                        j('iframe[src*="youtube.com/embed/"]', n).forEach(
                          function (e) {
                            e.hasAttribute("data-autoplay") && mt(e),
                              (e.onload = function () {
                                e.hasAttribute("data-autoplay") && mt(e);
                              });
                          }
                        );
                    }
                    function mt(e) {
                      e.contentWindow.postMessage(
                        '{"event":"command","func":"playVideo","args":""}',
                        "*"
                      );
                    }
                    function bt(e) {
                      var n = wt(e);
                      j("video, audio", n).forEach(function (e) {
                        e.hasAttribute("data-keepplaying") ||
                          "function" != typeof e.pause ||
                          e.pause();
                      }),
                        j('iframe[src*="youtube.com/embed/"]', n).forEach(
                          function (e) {
                            /youtube\.com\/embed\//.test(
                              e.getAttribute("src")
                            ) &&
                              !e.hasAttribute("data-keepplaying") &&
                              e.contentWindow.postMessage(
                                '{"event":"command","func":"pauseVideo","args":""}',
                                "*"
                              );
                          }
                        );
                    }
                    function wt(e) {
                      var n = j(E, e);
                      return n.length && (e = n[0]), e;
                    }
                    function _t(e) {
                      var n =
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                      function t(e) {
                        var t,
                          r,
                          o,
                          i,
                          l,
                          u,
                          a = "",
                          s = 0;
                        for (
                          e = e.replace(/[^A-Za-z0-9+/=]/g, "");
                          s < e.length;

                        )
                          (t =
                            (n.indexOf(e.charAt(s++)) << 2) |
                            ((i = n.indexOf(e.charAt(s++))) >> 4)),
                            (r =
                              ((15 & i) << 4) |
                              ((l = n.indexOf(e.charAt(s++))) >> 2)),
                            (o =
                              ((3 & l) << 6) | (u = n.indexOf(e.charAt(s++)))),
                            (a += String.fromCharCode(t)),
                            64 != l && (a += String.fromCharCode(r)),
                            64 != u && (a += String.fromCharCode(o));
                        return (function (e) {
                          for (
                            var n, t = "", r = 0, o = 0, i = 0;
                            r < e.length;

                          )
                            (o = e.charCodeAt(r)) < 128
                              ? ((t += String.fromCharCode(o)), r++)
                              : 191 < o && o < 224
                              ? ((i = e.charCodeAt(r + 1)),
                                (t += String.fromCharCode(
                                  ((31 & o) << 6) | (63 & i)
                                )),
                                (r += 2))
                              : ((i = e.charCodeAt(r + 1)),
                                (n = e.charCodeAt(r + 2)),
                                (t += String.fromCharCode(
                                  ((15 & o) << 12) | ((63 & i) << 6) | (63 & n)
                                )),
                                (r += 3));
                          return t;
                        })(a);
                      }
                      function r(e) {
                        return e.slice(3).slice(0, -3);
                      }
                      return (function (e) {
                        var n = e.split("_");
                        if (1 < n.length) {
                          var o = n[1];
                          return (
                            e.replace(r(n[1]), "").split("_")[0] +
                            "_" +
                            t(o.slice(3).slice(0, -3))
                          );
                        }
                        return r(e);
                      })(t(e));
                    }
                    function Et(n) {
                      n.forEach(function (n) {
                        if (
                          n.removedNodes[0] &&
                          n.removedNodes[0].isEqualNode(dn)
                        ) {
                          clearTimeout(fn);
                          var t = _t("bDIwc2V0VGltZW91dDAzbA==");
                          fn = e[t](Ct, 900);
                        }
                      });
                    }
                    function Ct() {
                      Je = !1;
                    }
                    function xt(t) {
                      if (
                        ((dn = n.createElement("div")),
                        (cn = _t(
                          "MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="
                        )),
                        $e ||
                          (cn = cn
                            .replace("extensions/", "")
                            .replace("Extension", "")),
                        (dn.innerHTML = cn),
                        (dn = dn.firstChild),
                        "MutationObserver" in e &&
                          new MutationObserver(Et).observe(n.body, {
                            childList: !0,
                            subtree: !1,
                          }),
                        (!$e || (cr(t) && xe[t])) &&
                          (!(function (e) {
                            var t = void 0 !== sn[e] && sn[e].length,
                              r = [],
                              o = !1;
                            return (
                              J(sn[e]) ? (r = sn[e]) : r.push(sn[e]),
                              r.forEach(function (r) {
                                var i = (function () {
                                    if (n.domain.length) {
                                      for (
                                        var e = n.domain
                                          .replace(/^(www\.)/, "")
                                          .split(".");
                                        2 < e.length;

                                      )
                                        e.shift();
                                      return e
                                        .join(".")
                                        .replace(/(^\.*)|(\.*$)/g, "");
                                    }
                                    return "";
                                  })(),
                                  l = [
                                    "MTM0bG9jYWxob3N0MjM0",
                                    "MTM0MC4xMjM0",
                                    "MTM0anNoZWxsLm5ldDIzNA==",
                                    "UDdDQU5ZNlNN",
                                  ],
                                  u = _t(l[0]),
                                  a = _t(l[1]),
                                  s = _t(l[2]),
                                  c = _t(l[3]),
                                  d =
                                    [u, a, s].indexOf(i) < 0 && 0 !== i.length;
                                if (!t && d) return !1;
                                var f = t ? _t(r) : "",
                                  p =
                                    1 < (f = f.split("_")).length &&
                                    -1 <
                                      f[1].indexOf(e, f[1].length - e.length),
                                  h =
                                    f[0].indexOf(i, f[0].length - i.length) < 0;
                                o = o || (!(h && d && c != f[0]) && p) || !d;
                              }),
                              o
                            );
                          })(t) ||
                            !$e))
                      ) {
                        St();
                        var r = _t("MzQ1c2V0SW50ZXJ2YWwxMjM=");
                        e[r](St, 2e3);
                      }
                    }
                    function St() {
                      dn &&
                        (Je ||
                          (Math.random() < 0.5 ? Ee(Ce, dn) : ne(dn, Ce),
                          (Je = !0)),
                        dn.setAttribute(
                          "style",
                          _t(
                            "MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz"
                          ).replace(/;/g, _t("MTIzICFpbXBvcnRhbnQ7MzQ1"))
                        ));
                    }
                    function kt() {
                      var e = Nt(),
                        n = e.section,
                        t = e.slide;
                      n && (G.animateAnchor ? Xt(n, t) : Mn(n, t));
                    }
                    function Tt() {
                      if (!pn && !G.lockAnchors) {
                        var e = Nt(),
                          n = e.section,
                          t = e.slide,
                          r = void 0 === Se,
                          o = void 0 === Se && void 0 === t && !Ae;
                        if (n && n.length) {
                          var i = !cr("dragAndMove") || ke;
                          ((n && n !== Se && !r) ||
                            o ||
                            (!Ae && ke != t && i)) &&
                            Xt(n, t);
                        }
                      }
                    }
                    function Nt() {
                      var n,
                        t,
                        r = e.location.hash;
                      if (r.length) {
                        var o = r.replace("#", "").split("/"),
                          i = -1 < r.indexOf("#/");
                        n = i ? "/" + o[1] : decodeURIComponent(o[0]);
                        var l = i ? o[2] : o[1];
                        l && l.length && (t = decodeURIComponent(l));
                      }
                      return { section: n, slide: t };
                    }
                    function At(e) {
                      clearTimeout(Ye);
                      var t = n.activeElement,
                        r = e.keyCode;
                      9 === r
                        ? (function (e) {
                            var t,
                              r,
                              o,
                              i,
                              l,
                              u,
                              a = e.shiftKey,
                              s = n.activeElement,
                              c = Rt(wt(j(h)[0]));
                            function d(e) {
                              return fe(e), c[0] ? c[0].focus() : null;
                            }
                            (t = e),
                              (o = (r = Rt(n)).indexOf(n.activeElement)),
                              (l = ct(
                                le((i = r[t.shiftKey ? o - 1 : o + 1]), _)
                              )),
                              (u = st(le(i, p))),
                              (l || u) &&
                                (s
                                  ? null == le(s, h + "," + h + " " + E) &&
                                    (s = d(e))
                                  : d(e),
                                ((!a && s == c[c.length - 1]) ||
                                  (a && s == c[0])) &&
                                  fe(e));
                          })(e)
                        : ve(t, "textarea") ||
                          ve(t, "input") ||
                          ve(t, "select") ||
                          "true" === t.getAttribute("contentEditable") ||
                          "" === t.getAttribute("contentEditable") ||
                          !G.keyboardScrolling ||
                          !G.autoScrolling ||
                          (-1 < [40, 38, 32, 33, 34].indexOf(r) && fe(e),
                          (Te = e.ctrlKey),
                          (Ye = setTimeout(function () {
                            !(function (e) {
                              var t = e.shiftKey,
                                r = n.activeElement,
                                o = ve(r, "video") || ve(r, "audio");
                              if (He || !([37, 39].indexOf(e.keyCode) < 0))
                                switch (e.keyCode) {
                                  case 38:
                                  case 33:
                                    Ve.k.up && In();
                                    break;
                                  case 32:
                                    if (t && Ve.k.up && !o) {
                                      In();
                                      break;
                                    }
                                  case 40:
                                  case 34:
                                    Ve.k.down &&
                                      ((32 === e.keyCode && o) || On());
                                    break;
                                  case 36:
                                    Ve.k.up && Rn(1);
                                    break;
                                  case 35:
                                    Ve.k.down && Rn(j(p).length);
                                    break;
                                  case 37:
                                    Ve.k.left && Pn();
                                    break;
                                  case 39:
                                    Ve.k.right && Dn();
                                }
                            })(e);
                          }, 150)));
                    }
                    function It(e) {
                      je && (Te = e.ctrlKey);
                    }
                    function Ot(e) {
                      2 == e.which &&
                        ((wn = e.pageY), Me.addEventListener("mousemove", Dt));
                    }
                    function Mt(e) {
                      2 == e.which && Me.removeEventListener("mousemove", Dt);
                    }
                    function Rt(e) {
                      return [].slice.call(j(en, e)).filter(function (e) {
                        return (
                          "-1" !== e.getAttribute("tabindex") &&
                          null !== e.offsetParent
                        );
                      });
                    }
                    function Dt(e) {
                      G.autoScrolling &&
                        (He &&
                          (e.pageY < wn && Ve.m.up
                            ? In()
                            : e.pageY > wn && Ve.m.down && On()),
                        (wn = e.pageY));
                    }
                    function Pt(e, n, t) {
                      var r = le(e, p),
                        o = {
                          slides: e,
                          destiny: n,
                          direction: t,
                          destinyPos: { left: n.offsetLeft },
                          slideIndex: q(n),
                          section: r,
                          sectionIndex: q(r, p),
                          anchorLink: r.getAttribute("data-anchor"),
                          slidesNav: j(A, r)[0],
                          slideAnchor: nr(n),
                          prevSlide: j(E, r)[0],
                          prevSlideIndex: q(j(E, r)[0]),
                          localIsResizing: Pe,
                        };
                      (o.xMovement = Qt(o.prevSlideIndex, o.slideIndex)),
                        (o.direction = o.direction ? o.direction : o.xMovement),
                        o.localIsResizing || (He = !1),
                        dr("parallax", "applyHorizontal", o),
                        dr("cards", "apply", o),
                        G.onSlideLeave &&
                        !o.localIsResizing &&
                        "none" !== o.xMovement &&
                        pe(G.onSlideLeave) &&
                        !1 === at("onSlideLeave", o)
                          ? (Ae = !1)
                          : ($(n, s),
                            ee(de(n), s),
                            o.localIsResizing || (bt(o.prevSlide), vt(n)),
                            jt(o),
                            L(r, s) &&
                              !o.localIsResizing &&
                              $t(o.slideIndex, o.slideAnchor, o.anchorLink),
                            xe.continuousHorizontal &&
                              xe.continuousHorizontal.apply(o),
                            pr() ? Ht(o) : Lt(e, o, !0),
                            G.interlockedSlides &&
                              xe.interlockedSlides &&
                              ((cr("continuousHorizontal") &&
                                void 0 !== t &&
                                t !== o.xMovement) ||
                                xe.interlockedSlides.apply(o)));
                    }
                    function jt(e) {
                      !G.loopHorizontal &&
                        G.controlArrows &&
                        (ge(j(R, e.section), 0 !== e.slideIndex),
                        ge(j(D, e.section), null != Q(e.destiny)));
                    }
                    function Ht(e) {
                      var n, t;
                      xe.continuousHorizontal &&
                        xe.continuousHorizontal.afterSlideLoads(e),
                        (n = e.slidesNav),
                        (t = e.slideIndex),
                        G.slidesNavigation &&
                          null != n &&
                          (ee(j(c, n), s), $(j("a", j("li", n)[t]), s)),
                        e.localIsResizing ||
                          (dr("parallax", "afterSlideLoads"),
                          dr("scrollOverflowReset", "setPrevious", e.prevSlide),
                          dr("scrollOverflowReset", "reset"),
                          pe(G.afterSlideLoad) && at("afterSlideLoad", e),
                          (He = !0),
                          yt(e.destiny)),
                        (Ae = !1),
                        cr("interlockedSlides") &&
                          xe.interlockedSlides.apply(e);
                    }
                    function Lt(e, n, t) {
                      var r = n.destinyPos;
                      if (G.css3) {
                        var o =
                          "translate3d(-" +
                          Math.round(r.left) +
                          "px, 0px, 0px)";
                        (xe.test.translate3dH[n.sectionIndex] = o),
                          F(zt(j(k, e)), ur(o)),
                          (Ze = setTimeout(function () {
                            t && Ht(n);
                          }, G.scrollingSpeed));
                      } else
                        (xe.test.left[n.sectionIndex] = Math.round(r.left)),
                          gr(
                            e,
                            Math.round(r.left),
                            G.scrollingSpeed,
                            function () {
                              t && Ht(n);
                            }
                          );
                    }
                    function Vt() {
                      clearTimeout(Fe),
                        (Fe = setTimeout(function () {
                          for (var e = 0; e < 4; e++)
                            ze = setTimeout(Bt, 200 * e);
                        }, 200));
                    }
                    function Bt() {
                      if ((he(Me, "onResize"), Ft(), Ie)) {
                        var e = n.activeElement;
                        if (
                          !ve(e, "textarea") &&
                          !ve(e, "input") &&
                          !ve(e, "select")
                        ) {
                          var t = V();
                          Math.abs(t - _n) > (20 * Math.max(_n, t)) / 100 &&
                            (jn(!0), (_n = t));
                        }
                      } else zn();
                    }
                    function Ft() {
                      var n = G.responsive || G.responsiveWidth,
                        t = G.responsiveHeight,
                        r = n && e.innerWidth < n,
                        o = t && e.innerHeight < t;
                      n && t ? Ln(r || o) : n ? Ln(r) : t && Ln(o);
                    }
                    function zt(e) {
                      var n = "all " + G.scrollingSpeed + "ms " + G.easingcss3;
                      return (
                        ee(e, i),
                        F(e, { "-webkit-transition": n, transition: n })
                      );
                    }
                    function Ut(e) {
                      return $(e, i);
                    }
                    function Zt(e, n) {
                      var t, r, o, i;
                      (t = e),
                        j(G.menu).forEach(function (e) {
                          G.menu &&
                            null != e &&
                            (ee(j(c, e), s),
                            $(j('[data-menuanchor="' + t + '"]', e), s));
                        }),
                        (r = e),
                        (o = n),
                        (i = j(b)[0]),
                        G.navigation &&
                          null != i &&
                          "none" !== i.style.display &&
                          (ee(j(c, j(b)[0]), s),
                          $(
                            r
                              ? j('a[href="#' + r + '"]', j(b)[0])
                              : j("a", j("li", j(b)[0])[o]),
                            s
                          ));
                    }
                    function Wt(e) {
                      var n = q(j(h)[0], p),
                        t = q(e, p);
                      return n == t ? "none" : t < n ? "up" : "down";
                    }
                    function Qt(e, n) {
                      return e == n ? "none" : n < e ? "left" : "right";
                    }
                    function Yt(e) {
                      if (!L(e, T)) {
                        var t = n.createElement("div");
                        (t.className = v),
                          (t.style.height = qt(e) + "px"),
                          $(e, T),
                          oe(e, t);
                      }
                    }
                    function qt(e) {
                      var n = Wn(e);
                      if (G.paddingTop || G.paddingBottom) {
                        var t = e;
                        L(t, f) || (t = le(e, p)),
                          (n -=
                            parseInt(getComputedStyle(t)["padding-top"]) +
                            parseInt(getComputedStyle(t)["padding-bottom"]));
                      }
                      return n;
                    }
                    function Gt(e, n) {
                      n ? zt(Me) : Ut(Me),
                        clearTimeout(Ge),
                        F(Me, ur(e)),
                        (xe.test.translate3d = e),
                        (Ge = setTimeout(function () {
                          ee(Me, i);
                        }, 10));
                    }
                    function Kt(e) {
                      var n = j(p + '[data-anchor="' + e + '"]', Me)[0];
                      if (!n) {
                        var t = void 0 !== e ? e - 1 : 0;
                        n = j(p)[t];
                      }
                      return n;
                    }
                    function Xt(e, n) {
                      var t = Kt(e);
                      if (null != t) {
                        var r,
                          o,
                          i,
                          l =
                            (null ==
                              (i = j(
                                _ + '[data-anchor="' + (r = n) + '"]',
                                (o = t)
                              )[0]) &&
                              ((r = void 0 !== r ? r : 0), (i = j(_, o)[r])),
                            i);
                        nr(t) === Se || L(t, s)
                          ? Jt(l)
                          : ut(t, function () {
                              Jt(l);
                            });
                      }
                    }
                    function Jt(e) {
                      null != e && Pt(le(e, x), e);
                    }
                    function $t(e, n, t, r) {
                      var o = "";
                      G.anchors.length &&
                        !G.lockAnchors &&
                        (e
                          ? (null != t && (o = t),
                            null == n && (n = e),
                            er(o + "/" + (ke = n)))
                          : (null != e && (ke = n), er(t))),
                        tr();
                    }
                    function er(n) {
                      if (G.recordHistory) location.hash = n;
                      else if (Ie || Oe)
                        e.history.replaceState(void 0, void 0, "#" + n);
                      else {
                        var t = e.location.href.split("#")[0];
                        e.location.replace(t + "#" + n);
                      }
                    }
                    function nr(e) {
                      if (!e) return null;
                      var n = e.getAttribute("data-anchor"),
                        t = q(e);
                      return null == n && (n = t), n;
                    }
                    function tr() {
                      var e = j(h)[0],
                        n = j(E, e)[0],
                        t = nr(e),
                        r = nr(n),
                        o = String(t);
                      n && (o = o + "-" + r),
                        (o = o.replace("/", "-").replace("#", ""));
                      var i = new RegExp("\\b\\s?" + a + "-[^\\s]+\\b", "g");
                      (Ce.className = Ce.className.replace(i, "")),
                        $(Ce, a + "-" + o);
                    }
                    function rr() {
                      return e.PointerEvent
                        ? { down: "pointerdown", move: "pointermove" }
                        : { down: "MSPointerDown", move: "MSPointerMove" };
                    }
                    function or(e) {
                      var n = [];
                      return (
                        (n.y =
                          void 0 !== e.pageY && (e.pageY || e.pageX)
                            ? e.pageY
                            : e.touches[0].pageY),
                        (n.x =
                          void 0 !== e.pageX && (e.pageY || e.pageX)
                            ? e.pageX
                            : e.touches[0].pageX),
                        Oe &&
                          et(e) &&
                          G.scrollBar &&
                          void 0 !== e.touches &&
                          ((n.y = e.touches[0].pageY),
                          (n.x = e.touches[0].pageX)),
                        n
                      );
                    }
                    function ir(e, n) {
                      xn(0, "internal"),
                        void 0 !== n && (Pe = !0),
                        Pt(le(e, x), e),
                        void 0 !== n && (Pe = !1),
                        xn(ln.scrollingSpeed, "internal");
                    }
                    function lr(e) {
                      var n = Math.round(e);
                      if (G.css3 && G.autoScrolling && !G.scrollBar)
                        Gt("translate3d(0px, -" + n + "px, 0px)", !1);
                      else if (G.autoScrolling && !G.scrollBar)
                        F(Me, { top: -n + "px" }), (xe.test.top = -n + "px");
                      else {
                        var t = dt(n);
                        yr(t.element, t.options);
                      }
                    }
                    function ur(e) {
                      return {
                        "-webkit-transform": e,
                        "-moz-transform": e,
                        "-ms-transform": e,
                        transform: e,
                      };
                    }
                    function ar(e, n, t) {
                      "all" !== n
                        ? (Ve[t][n] = e)
                        : Object.keys(Ve[t]).forEach(function (n) {
                            Ve[t][n] = e;
                          });
                    }
                    function sr(e) {
                      return F(e, {
                        "-webkit-transition": "none",
                        transition: "none",
                      });
                    }
                    function cr(e) {
                      return null !== G[e] &&
                        "[object Array]" ===
                          Object.prototype.toString.call(G[e])
                        ? G[e].length && xe[e]
                        : G[e] && xe[e];
                    }
                    function dr(e, n, t) {
                      if (cr(e)) return xe[e][n](t);
                    }
                    function fr() {
                      return cr("dragAndMove") && xe.dragAndMove.isAnimating;
                    }
                    function pr() {
                      return cr("dragAndMove") && xe.dragAndMove.isGrabbing;
                    }
                    function hr(e, n, t) {
                      (G[e] = n), "internal" !== t && (ln[e] = n);
                    }
                    function vr() {
                      var e = G.licenseKey,
                        n = "font-size: 15px;background:yellow;";
                      te
                        ? e &&
                          e.length < 20 &&
                          (console.warn(
                            "%c This website was made using fullPage.js slider. More info on the following website:",
                            n
                          ),
                          console.warn(
                            "%c https://alvarotrigo.com/fullPage/",
                            n
                          ))
                        : (P(
                            "error",
                            "Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"
                          ),
                          P(
                            "error",
                            "https://github.com/alvarotrigo/fullPage.js#options."
                          )),
                        L(be, u)
                          ? P(
                              "error",
                              "Fullpage.js can only be initialized once and you are doing it multiple times!"
                            )
                          : (G.continuousVertical &&
                              (G.loopTop || G.loopBottom) &&
                              ((G.continuousVertical = !1),
                              P(
                                "warn",
                                "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"
                              )),
                            !G.scrollOverflow ||
                              (!G.scrollBar && G.autoScrolling) ||
                              P(
                                "warn",
                                "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"
                              ),
                            !G.continuousVertical ||
                              (!G.scrollBar && G.autoScrolling) ||
                              ((G.continuousVertical = !1),
                              P(
                                "warn",
                                "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled"
                              )),
                            G.scrollOverflow &&
                              null == G.scrollOverflowHandler &&
                              ((G.scrollOverflow = !1),
                              P(
                                "error",
                                "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js."
                              )),
                            G.anchors.forEach(function (e) {
                              var n = [].slice
                                  .call(j("[name]"))
                                  .filter(function (n) {
                                    return (
                                      n.getAttribute("name") &&
                                      n.getAttribute("name").toLowerCase() ==
                                        e.toLowerCase()
                                    );
                                  }),
                                t = [].slice
                                  .call(j("[id]"))
                                  .filter(function (n) {
                                    return (
                                      n.getAttribute("id") &&
                                      n.getAttribute("id").toLowerCase() ==
                                        e.toLowerCase()
                                    );
                                  });
                              (t.length || n.length) &&
                                (P(
                                  "error",
                                  "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."
                                ),
                                (t.length || n.length) &&
                                  P(
                                    "error",
                                    '"' +
                                      e +
                                      '" is is being used by another element `' +
                                      (t.length ? "id" : "name") +
                                      "` property"
                                  ));
                            }));
                    }
                    function gr(n, t, r, o) {
                      var i,
                        l =
                          (i = n).self != e && L(i, C)
                            ? i.scrollLeft
                            : !G.autoScrolling || G.scrollBar
                            ? ce()
                            : i.offsetTop,
                        u = t - l,
                        a = 0;
                      rn = !0;
                      var s = function () {
                        if (rn) {
                          var i = t;
                          (a += 20),
                            r && (i = e.fp_easings[G.easing](a, l, u, r)),
                            yr(n, i),
                            a < r ? setTimeout(s, 20) : void 0 !== o && o();
                        } else a < r && o();
                      };
                      s();
                    }
                    function yr(n, t) {
                      !G.autoScrolling ||
                      G.scrollBar ||
                      (n.self != e && L(n, C))
                        ? n.self != e && L(n, C)
                          ? (n.scrollLeft = t)
                          : n.scrollTo(0, t)
                        : (n.style.top = t + "px");
                    }
                    function mr(e, n) {
                      (this.anchor = e.getAttribute("data-anchor")),
                        (this.item = e),
                        (this.index = q(e, n)),
                        (this.isLast =
                          this.index ===
                          e.parentElement.querySelectorAll(n).length - 1),
                        (this.isFirst = !this.index);
                    }
                    function br(e) {
                      mr.call(this, e, p);
                    }
                    vr();
                  }
                );
              })(i, l)),
              o.fullpage
            );
          }.call(n, t, n, e)) || (e.exports = r),
        window.jQuery &&
          window.fullpage &&
          (function (e, n) {
            "use strict";
            e && n
              ? (e.fn.fullpage = function (t) {
                  (t = e.extend({}, t, { $: e })), new n(this[0], t);
                })
              : window.fp_utils.showError(
                  "error",
                  "jQuery is required to use the jQuery fullpage adapter!"
                );
          })(window.jQuery, window.fullpage);
    },
    crnd: function (e, n) {
      function t(e) {
        return Promise.resolve().then(function () {
          var n = new Error("Cannot find module '" + e + "'");
          throw ((n.code = "MODULE_NOT_FOUND"), n);
        });
      }
      (t.keys = function () {
        return [];
      }),
        (t.resolve = t),
        (e.exports = t),
        (t.id = "crnd");
    },
    zUnb: function (e, n, t) {
      "use strict";
      t.r(n);
      var r = function (e, n) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, n) {
              e.__proto__ = n;
            }) ||
          function (e, n) {
            for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
          })(e, n);
      };
      function o(e, n) {
        function t() {
          this.constructor = e;
        }
        r(e, n),
          (e.prototype =
            null === n
              ? Object.create(n)
              : ((t.prototype = n.prototype), new t()));
      }
      var i = function () {
        return (i =
          Object.assign ||
          function (e) {
            for (var n, t = 1, r = arguments.length; t < r; t++)
              for (var o in (n = arguments[t]))
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            return e;
          }).apply(this, arguments);
      };
      function l(e, n, t, r) {
        var o,
          i = arguments.length,
          l =
            i < 3
              ? n
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(n, t))
              : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          l = Reflect.decorate(e, n, t, r);
        else
          for (var u = e.length - 1; u >= 0; u--)
            (o = e[u]) &&
              (l = (i < 3 ? o(l) : i > 3 ? o(n, t, l) : o(n, t)) || l);
        return i > 3 && l && Object.defineProperty(n, t, l), l;
      }
      function u(e, n) {
        return function (t, r) {
          n(t, r, e);
        };
      }
      function a(e, n) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, n);
      }
      function s(e) {
        var n = "function" == typeof Symbol && e[Symbol.iterator],
          t = 0;
        return n
          ? n.call(e)
          : {
              next: function () {
                return (
                  e && t >= e.length && (e = void 0),
                  { value: e && e[t++], done: !e }
                );
              },
            };
      }
      function c(e, n) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var r,
          o,
          i = t.call(e),
          l = [];
        try {
          for (; (void 0 === n || n-- > 0) && !(r = i.next()).done; )
            l.push(r.value);
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            r && !r.done && (t = i.return) && t.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return l;
      }
      function d() {
        for (var e = [], n = 0; n < arguments.length; n++)
          e = e.concat(c(arguments[n]));
        return e;
      }
      var f =
        Array.isArray ||
        function (e) {
          return e && "number" == typeof e.length;
        };
      function p(e) {
        return null != e && "object" == typeof e;
      }
      function h(e) {
        return "function" == typeof e;
      }
      var v,
        g = { e: {} };
      function y() {
        try {
          return v.apply(this, arguments);
        } catch (e) {
          return (g.e = e), g;
        }
      }
      function m(e) {
        return (v = e), y;
      }
      var b = (function (e) {
          function n(t) {
            var r =
              e.call(
                this,
                t
                  ? t.length +
                      " errors occurred during unsubscription:\n  " +
                      t
                        .map(function (e, n) {
                          return n + 1 + ") " + e.toString();
                        })
                        .join("\n  ")
                  : ""
              ) || this;
            return (
              (r.errors = t),
              (r.name = "UnsubscriptionError"),
              Object.setPrototypeOf(r, n.prototype),
              r
            );
          }
          return o(n, e), n;
        })(Error),
        w = (function () {
          function e(e) {
            (this.closed = !1),
              (this._parent = null),
              (this._parents = null),
              (this._subscriptions = null),
              e && (this._unsubscribe = e);
          }
          var n;
          return (
            (e.prototype.unsubscribe = function () {
              var e,
                n = !1;
              if (!this.closed) {
                var t = this._parent,
                  r = this._parents,
                  o = this._unsubscribe,
                  i = this._subscriptions;
                (this.closed = !0),
                  (this._parent = null),
                  (this._parents = null),
                  (this._subscriptions = null);
                for (var l = -1, u = r ? r.length : 0; t; )
                  t.remove(this), (t = (++l < u && r[l]) || null);
                if (
                  (h(o) &&
                    m(o).call(this) === g &&
                    ((n = !0),
                    (e = e || (g.e instanceof b ? _(g.e.errors) : [g.e]))),
                  f(i))
                )
                  for (l = -1, u = i.length; ++l < u; ) {
                    var a = i[l];
                    if (p(a) && m(a.unsubscribe).call(a) === g) {
                      (n = !0), (e = e || []);
                      var s = g.e;
                      s instanceof b ? (e = e.concat(_(s.errors))) : e.push(s);
                    }
                  }
                if (n) throw new b(e);
              }
            }),
            (e.prototype.add = function (n) {
              if (!n || n === e.EMPTY) return e.EMPTY;
              if (n === this) return this;
              var t = n;
              switch (typeof n) {
                case "function":
                  t = new e(n);
                case "object":
                  if (t.closed || "function" != typeof t.unsubscribe) return t;
                  if (this.closed) return t.unsubscribe(), t;
                  if ("function" != typeof t._addParent) {
                    var r = t;
                    (t = new e())._subscriptions = [r];
                  }
                  break;
                default:
                  throw new Error(
                    "unrecognized teardown " + n + " added to Subscription."
                  );
              }
              return (
                (this._subscriptions || (this._subscriptions = [])).push(t),
                t._addParent(this),
                t
              );
            }),
            (e.prototype.remove = function (e) {
              var n = this._subscriptions;
              if (n) {
                var t = n.indexOf(e);
                -1 !== t && n.splice(t, 1);
              }
            }),
            (e.prototype._addParent = function (e) {
              var n = this._parent,
                t = this._parents;
              n && n !== e
                ? t
                  ? -1 === t.indexOf(e) && t.push(e)
                  : (this._parents = [e])
                : (this._parent = e);
            }),
            (e.EMPTY = (((n = new e()).closed = !0), n)),
            e
          );
        })();
      function _(e) {
        return e.reduce(function (e, n) {
          return e.concat(n instanceof b ? n.errors : n);
        }, []);
      }
      var E = !1,
        C = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(e) {
            E = e;
          },
          get useDeprecatedSynchronousErrorHandling() {
            return E;
          },
        };
      function x(e) {
        setTimeout(function () {
          throw e;
        });
      }
      var S = {
          closed: !0,
          next: function (e) {},
          error: function (e) {
            if (C.useDeprecatedSynchronousErrorHandling) throw e;
            x(e);
          },
          complete: function () {},
        },
        k =
          "function" == typeof Symbol && "function" == typeof Symbol.for
            ? Symbol.for("rxSubscriber")
            : "@@rxSubscriber",
        T = (function (e) {
          function n(n, t, r) {
            var o,
              i = e.call(this) || this;
            switch (
              ((i.syncErrorValue = null),
              (i.syncErrorThrown = !1),
              (i.syncErrorThrowable = !1),
              (i.isStopped = !1),
              arguments.length)
            ) {
              case 0:
                i.destination = S;
                break;
              case 1:
                if (!n) {
                  i.destination = S;
                  break;
                }
                if ("object" == typeof n) {
                  if (
                    (o = n) instanceof T ||
                    ("syncErrorThrowable" in o && o[k])
                  ) {
                    var l = n[k]();
                    (i.syncErrorThrowable = l.syncErrorThrowable),
                      (i.destination = l),
                      l.add(i);
                  } else
                    (i.syncErrorThrowable = !0), (i.destination = new N(i, n));
                  break;
                }
              default:
                (i.syncErrorThrowable = !0),
                  (i.destination = new N(i, n, t, r));
            }
            return i;
          }
          return (
            o(n, e),
            (n.prototype[k] = function () {
              return this;
            }),
            (n.create = function (e, t, r) {
              var o = new n(e, t, r);
              return (o.syncErrorThrowable = !1), o;
            }),
            (n.prototype.next = function (e) {
              this.isStopped || this._next(e);
            }),
            (n.prototype.error = function (e) {
              this.isStopped || ((this.isStopped = !0), this._error(e));
            }),
            (n.prototype.complete = function () {
              this.isStopped || ((this.isStopped = !0), this._complete());
            }),
            (n.prototype.unsubscribe = function () {
              this.closed ||
                ((this.isStopped = !0), e.prototype.unsubscribe.call(this));
            }),
            (n.prototype._next = function (e) {
              this.destination.next(e);
            }),
            (n.prototype._error = function (e) {
              this.destination.error(e), this.unsubscribe();
            }),
            (n.prototype._complete = function () {
              this.destination.complete(), this.unsubscribe();
            }),
            (n.prototype._unsubscribeAndRecycle = function () {
              var e = this._parent,
                n = this._parents;
              return (
                (this._parent = null),
                (this._parents = null),
                this.unsubscribe(),
                (this.closed = !1),
                (this.isStopped = !1),
                (this._parent = e),
                (this._parents = n),
                this
              );
            }),
            n
          );
        })(w),
        N = (function (e) {
          function n(n, t, r, o) {
            var i,
              l = e.call(this) || this;
            l._parentSubscriber = n;
            var u = l;
            return (
              h(t)
                ? (i = t)
                : t &&
                  ((i = t.next),
                  (r = t.error),
                  (o = t.complete),
                  t !== S &&
                    (h((u = Object.create(t)).unsubscribe) &&
                      l.add(u.unsubscribe.bind(u)),
                    (u.unsubscribe = l.unsubscribe.bind(l)))),
              (l._context = u),
              (l._next = i),
              (l._error = r),
              (l._complete = o),
              l
            );
          }
          return (
            o(n, e),
            (n.prototype.next = function (e) {
              if (!this.isStopped && this._next) {
                var n = this._parentSubscriber;
                C.useDeprecatedSynchronousErrorHandling && n.syncErrorThrowable
                  ? this.__tryOrSetError(n, this._next, e) && this.unsubscribe()
                  : this.__tryOrUnsub(this._next, e);
              }
            }),
            (n.prototype.error = function (e) {
              if (!this.isStopped) {
                var n = this._parentSubscriber,
                  t = C.useDeprecatedSynchronousErrorHandling;
                if (this._error)
                  t && n.syncErrorThrowable
                    ? (this.__tryOrSetError(n, this._error, e),
                      this.unsubscribe())
                    : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
                else if (n.syncErrorThrowable)
                  t ? ((n.syncErrorValue = e), (n.syncErrorThrown = !0)) : x(e),
                    this.unsubscribe();
                else {
                  if ((this.unsubscribe(), t)) throw e;
                  x(e);
                }
              }
            }),
            (n.prototype.complete = function () {
              var e = this;
              if (!this.isStopped) {
                var n = this._parentSubscriber;
                if (this._complete) {
                  var t = function () {
                    return e._complete.call(e._context);
                  };
                  C.useDeprecatedSynchronousErrorHandling &&
                  n.syncErrorThrowable
                    ? (this.__tryOrSetError(n, t), this.unsubscribe())
                    : (this.__tryOrUnsub(t), this.unsubscribe());
                } else this.unsubscribe();
              }
            }),
            (n.prototype.__tryOrUnsub = function (e, n) {
              try {
                e.call(this._context, n);
              } catch (e) {
                if (
                  (this.unsubscribe(), C.useDeprecatedSynchronousErrorHandling)
                )
                  throw e;
                x(e);
              }
            }),
            (n.prototype.__tryOrSetError = function (e, n, t) {
              if (!C.useDeprecatedSynchronousErrorHandling)
                throw new Error("bad call");
              try {
                n.call(this._context, t);
              } catch (n) {
                return C.useDeprecatedSynchronousErrorHandling
                  ? ((e.syncErrorValue = n), (e.syncErrorThrown = !0), !0)
                  : (x(n), !0);
              }
              return !1;
            }),
            (n.prototype._unsubscribe = function () {
              var e = this._parentSubscriber;
              (this._context = null),
                (this._parentSubscriber = null),
                e.unsubscribe();
            }),
            n
          );
        })(T),
        A =
          ("function" == typeof Symbol && Symbol.observable) || "@@observable";
      var I = (function () {
        function e(e) {
          (this._isScalar = !1), e && (this._subscribe = e);
        }
        return (
          (e.prototype.lift = function (n) {
            var t = new e();
            return (t.source = this), (t.operator = n), t;
          }),
          (e.prototype.subscribe = function (e, n, t) {
            var r = this.operator,
              o = (function (e, n, t) {
                if (e) {
                  if (e instanceof T) return e;
                  if (e[k]) return e[k]();
                }
                return e || n || t ? new T(e, n, t) : new T(S);
              })(e, n, t);
            if (
              (r
                ? r.call(o, this.source)
                : o.add(
                    this.source ||
                      (C.useDeprecatedSynchronousErrorHandling &&
                        !o.syncErrorThrowable)
                      ? this._subscribe(o)
                      : this._trySubscribe(o)
                  ),
              C.useDeprecatedSynchronousErrorHandling &&
                o.syncErrorThrowable &&
                ((o.syncErrorThrowable = !1), o.syncErrorThrown))
            )
              throw o.syncErrorValue;
            return o;
          }),
          (e.prototype._trySubscribe = function (e) {
            try {
              return this._subscribe(e);
            } catch (n) {
              C.useDeprecatedSynchronousErrorHandling &&
                ((e.syncErrorThrown = !0), (e.syncErrorValue = n)),
                e.error(n);
            }
          }),
          (e.prototype.forEach = function (e, n) {
            var t = this;
            return new (n = O(n))(function (n, r) {
              var o;
              o = t.subscribe(
                function (n) {
                  try {
                    e(n);
                  } catch (e) {
                    r(e), o && o.unsubscribe();
                  }
                },
                r,
                n
              );
            });
          }),
          (e.prototype._subscribe = function (e) {
            var n = this.source;
            return n && n.subscribe(e);
          }),
          (e.prototype[A] = function () {
            return this;
          }),
          (e.prototype.pipe = function () {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n];
            return 0 === e.length
              ? this
              : ((t = e)
                  ? 1 === t.length
                    ? t[0]
                    : function (e) {
                        return t.reduce(function (e, n) {
                          return n(e);
                        }, e);
                      }
                  : function () {})(this);
            var t;
          }),
          (e.prototype.toPromise = function (e) {
            var n = this;
            return new (e = O(e))(function (e, t) {
              var r;
              n.subscribe(
                function (e) {
                  return (r = e);
                },
                function (e) {
                  return t(e);
                },
                function () {
                  return e(r);
                }
              );
            });
          }),
          (e.create = function (n) {
            return new e(n);
          }),
          e
        );
      })();
      function O(e) {
        if ((e || (e = C.Promise || Promise), !e))
          throw new Error("no Promise impl found");
        return e;
      }
      var M = (function (e) {
          function n() {
            var t = e.call(this, "object unsubscribed") || this;
            return (
              (t.name = "ObjectUnsubscribedError"),
              Object.setPrototypeOf(t, n.prototype),
              t
            );
          }
          return o(n, e), n;
        })(Error),
        R = (function (e) {
          function n(n, t) {
            var r = e.call(this) || this;
            return (r.subject = n), (r.subscriber = t), (r.closed = !1), r;
          }
          return (
            o(n, e),
            (n.prototype.unsubscribe = function () {
              if (!this.closed) {
                this.closed = !0;
                var e = this.subject,
                  n = e.observers;
                if (
                  ((this.subject = null),
                  n && 0 !== n.length && !e.isStopped && !e.closed)
                ) {
                  var t = n.indexOf(this.subscriber);
                  -1 !== t && n.splice(t, 1);
                }
              }
            }),
            n
          );
        })(w),
        D = (function (e) {
          function n(n) {
            var t = e.call(this, n) || this;
            return (t.destination = n), t;
          }
          return o(n, e), n;
        })(T),
        P = (function (e) {
          function n() {
            var n = e.call(this) || this;
            return (
              (n.observers = []),
              (n.closed = !1),
              (n.isStopped = !1),
              (n.hasError = !1),
              (n.thrownError = null),
              n
            );
          }
          return (
            o(n, e),
            (n.prototype[k] = function () {
              return new D(this);
            }),
            (n.prototype.lift = function (e) {
              var n = new j(this, this);
              return (n.operator = e), n;
            }),
            (n.prototype.next = function (e) {
              if (this.closed) throw new M();
              if (!this.isStopped)
                for (
                  var n = this.observers, t = n.length, r = n.slice(), o = 0;
                  o < t;
                  o++
                )
                  r[o].next(e);
            }),
            (n.prototype.error = function (e) {
              if (this.closed) throw new M();
              (this.hasError = !0),
                (this.thrownError = e),
                (this.isStopped = !0);
              for (
                var n = this.observers, t = n.length, r = n.slice(), o = 0;
                o < t;
                o++
              )
                r[o].error(e);
              this.observers.length = 0;
            }),
            (n.prototype.complete = function () {
              if (this.closed) throw new M();
              this.isStopped = !0;
              for (
                var e = this.observers, n = e.length, t = e.slice(), r = 0;
                r < n;
                r++
              )
                t[r].complete();
              this.observers.length = 0;
            }),
            (n.prototype.unsubscribe = function () {
              (this.isStopped = !0),
                (this.closed = !0),
                (this.observers = null);
            }),
            (n.prototype._trySubscribe = function (n) {
              if (this.closed) throw new M();
              return e.prototype._trySubscribe.call(this, n);
            }),
            (n.prototype._subscribe = function (e) {
              if (this.closed) throw new M();
              return this.hasError
                ? (e.error(this.thrownError), w.EMPTY)
                : this.isStopped
                ? (e.complete(), w.EMPTY)
                : (this.observers.push(e), new R(this, e));
            }),
            (n.prototype.asObservable = function () {
              var e = new I();
              return (e.source = this), e;
            }),
            (n.create = function (e, n) {
              return new j(e, n);
            }),
            n
          );
        })(I),
        j = (function (e) {
          function n(n, t) {
            var r = e.call(this) || this;
            return (r.destination = n), (r.source = t), r;
          }
          return (
            o(n, e),
            (n.prototype.next = function (e) {
              var n = this.destination;
              n && n.next && n.next(e);
            }),
            (n.prototype.error = function (e) {
              var n = this.destination;
              n && n.error && this.destination.error(e);
            }),
            (n.prototype.complete = function () {
              var e = this.destination;
              e && e.complete && this.destination.complete();
            }),
            (n.prototype._subscribe = function (e) {
              return this.source ? this.source.subscribe(e) : w.EMPTY;
            }),
            n
          );
        })(P),
        H = (function (e) {
          function n(n, t, r) {
            var o = e.call(this) || this;
            return (
              (o.parent = n),
              (o.outerValue = t),
              (o.outerIndex = r),
              (o.index = 0),
              o
            );
          }
          return (
            o(n, e),
            (n.prototype._next = function (e) {
              this.parent.notifyNext(
                this.outerValue,
                e,
                this.outerIndex,
                this.index++,
                this
              );
            }),
            (n.prototype._error = function (e) {
              this.parent.notifyError(e, this), this.unsubscribe();
            }),
            (n.prototype._complete = function () {
              this.parent.notifyComplete(this), this.unsubscribe();
            }),
            n
          );
        })(T),
        L = function (e) {
          return function (n) {
            for (var t = 0, r = e.length; t < r && !n.closed; t++) n.next(e[t]);
            n.closed || n.complete();
          };
        },
        V = function (e) {
          return function (n) {
            return (
              e
                .then(
                  function (e) {
                    n.closed || (n.next(e), n.complete());
                  },
                  function (e) {
                    return n.error(e);
                  }
                )
                .then(null, x),
              n
            );
          };
        },
        B = (function () {
          return "function" == typeof Symbol && Symbol.iterator
            ? Symbol.iterator
            : "@@iterator";
        })(),
        F = function (e) {
          return function (n) {
            for (var t = e[B](); ; ) {
              var r = t.next();
              if (r.done) {
                n.complete();
                break;
              }
              if ((n.next(r.value), n.closed)) break;
            }
            return (
              "function" == typeof t.return &&
                n.add(function () {
                  t.return && t.return();
                }),
              n
            );
          };
        },
        z = function (e) {
          return function (n) {
            var t = e[A]();
            if ("function" != typeof t.subscribe)
              throw new TypeError(
                "Provided object does not correctly implement Symbol.observable"
              );
            return t.subscribe(n);
          };
        },
        U = function (e) {
          return e && "number" == typeof e.length && "function" != typeof e;
        };
      function Z(e) {
        return (
          e && "function" != typeof e.subscribe && "function" == typeof e.then
        );
      }
      var W = function (e) {
          if (e instanceof I)
            return function (n) {
              return e._isScalar
                ? (n.next(e.value), void n.complete())
                : e.subscribe(n);
            };
          if (e && "function" == typeof e[A]) return z(e);
          if (U(e)) return L(e);
          if (Z(e)) return V(e);
          if (e && "function" == typeof e[B]) return F(e);
          var n = p(e) ? "an invalid object" : "'" + e + "'";
          throw new TypeError(
            "You provided " +
              n +
              " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable."
          );
        },
        Q = (function (e) {
          function n() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            o(n, e),
            (n.prototype.notifyNext = function (e, n, t, r, o) {
              this.destination.next(n);
            }),
            (n.prototype.notifyError = function (e, n) {
              this.destination.error(e);
            }),
            (n.prototype.notifyComplete = function (e) {
              this.destination.complete();
            }),
            n
          );
        })(T),
        Y = (function () {
          function e(e, n) {
            (this.project = e), (this.thisArg = n);
          }
          return (
            (e.prototype.call = function (e, n) {
              return n.subscribe(new q(e, this.project, this.thisArg));
            }),
            e
          );
        })(),
        q = (function (e) {
          function n(n, t, r) {
            var o = e.call(this, n) || this;
            return (o.project = t), (o.count = 0), (o.thisArg = r || o), o;
          }
          return (
            o(n, e),
            (n.prototype._next = function (e) {
              var n;
              try {
                n = this.project.call(this.thisArg, e, this.count++);
              } catch (e) {
                return void this.destination.error(e);
              }
              this.destination.next(n);
            }),
            n
          );
        })(T);
      function G(e, n) {
        return new I(
          n
            ? function (t) {
                var r = new w(),
                  o = 0;
                return (
                  r.add(
                    n.schedule(function () {
                      o !== e.length
                        ? (t.next(e[o++]), t.closed || r.add(this.schedule()))
                        : t.complete();
                    })
                  ),
                  r
                );
              }
            : L(e)
        );
      }
      var K = (function () {
          function e(e, n) {
            void 0 === n && (n = Number.POSITIVE_INFINITY),
              (this.project = e),
              (this.concurrent = n);
          }
          return (
            (e.prototype.call = function (e, n) {
              return n.subscribe(new X(e, this.project, this.concurrent));
            }),
            e
          );
        })(),
        X = (function (e) {
          function n(n, t, r) {
            void 0 === r && (r = Number.POSITIVE_INFINITY);
            var o = e.call(this, n) || this;
            return (
              (o.project = t),
              (o.concurrent = r),
              (o.hasCompleted = !1),
              (o.buffer = []),
              (o.active = 0),
              (o.index = 0),
              o
            );
          }
          return (
            o(n, e),
            (n.prototype._next = function (e) {
              this.active < this.concurrent
                ? this._tryNext(e)
                : this.buffer.push(e);
            }),
            (n.prototype._tryNext = function (e) {
              var n,
                t = this.index++;
              try {
                n = this.project(e, t);
              } catch (e) {
                return void this.destination.error(e);
              }
              this.active++, this._innerSub(n, e, t);
            }),
            (n.prototype._innerSub = function (e, n, t) {
              var r, o;
              this.add(((r = e), (o = new H(this, n, t)), W(r)(o)));
            }),
            (n.prototype._complete = function () {
              (this.hasCompleted = !0),
                0 === this.active &&
                  0 === this.buffer.length &&
                  this.destination.complete();
            }),
            (n.prototype.notifyNext = function (e, n, t, r, o) {
              this.destination.next(n);
            }),
            (n.prototype.notifyComplete = function (e) {
              var n = this.buffer;
              this.remove(e),
                this.active--,
                n.length > 0
                  ? this._next(n.shift())
                  : 0 === this.active &&
                    this.hasCompleted &&
                    this.destination.complete();
            }),
            n
          );
        })(Q);
      function J(e) {
        return e;
      }
      function $() {
        return function (e) {
          return e.lift(new ee(e));
        };
      }
      var ee = (function () {
          function e(e) {
            this.connectable = e;
          }
          return (
            (e.prototype.call = function (e, n) {
              var t = this.connectable;
              t._refCount++;
              var r = new ne(e, t),
                o = n.subscribe(r);
              return r.closed || (r.connection = t.connect()), o;
            }),
            e
          );
        })(),
        ne = (function (e) {
          function n(n, t) {
            var r = e.call(this, n) || this;
            return (r.connectable = t), r;
          }
          return (
            o(n, e),
            (n.prototype._unsubscribe = function () {
              var e = this.connectable;
              if (e) {
                this.connectable = null;
                var n = e._refCount;
                if (n <= 0) this.connection = null;
                else if (((e._refCount = n - 1), n > 1)) this.connection = null;
                else {
                  var t = this.connection,
                    r = e._connection;
                  (this.connection = null),
                    !r || (t && r !== t) || r.unsubscribe();
                }
              } else this.connection = null;
            }),
            n
          );
        })(T),
        te = (function (e) {
          function n(n, t) {
            var r = e.call(this) || this;
            return (
              (r.source = n),
              (r.subjectFactory = t),
              (r._refCount = 0),
              (r._isComplete = !1),
              r
            );
          }
          return (
            o(n, e),
            (n.prototype._subscribe = function (e) {
              return this.getSubject().subscribe(e);
            }),
            (n.prototype.getSubject = function () {
              var e = this._subject;
              return (
                (e && !e.isStopped) || (this._subject = this.subjectFactory()),
                this._subject
              );
            }),
            (n.prototype.connect = function () {
              var e = this._connection;
              return (
                e ||
                  ((this._isComplete = !1),
                  (e = this._connection = new w()).add(
                    this.source.subscribe(new oe(this.getSubject(), this))
                  ),
                  e.closed
                    ? ((this._connection = null), (e = w.EMPTY))
                    : (this._connection = e)),
                e
              );
            }),
            (n.prototype.refCount = function () {
              return $()(this);
            }),
            n
          );
        })(I).prototype,
        re = {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: te._subscribe },
          _isComplete: { value: te._isComplete, writable: !0 },
          getSubject: { value: te.getSubject },
          connect: { value: te.connect },
          refCount: { value: te.refCount },
        },
        oe = (function (e) {
          function n(n, t) {
            var r = e.call(this, n) || this;
            return (r.connectable = t), r;
          }
          return (
            o(n, e),
            (n.prototype._error = function (n) {
              this._unsubscribe(), e.prototype._error.call(this, n);
            }),
            (n.prototype._complete = function () {
              (this.connectable._isComplete = !0),
                this._unsubscribe(),
                e.prototype._complete.call(this);
            }),
            (n.prototype._unsubscribe = function () {
              var e = this.connectable;
              if (e) {
                this.connectable = null;
                var n = e._connection;
                (e._refCount = 0),
                  (e._subject = null),
                  (e._connection = null),
                  n && n.unsubscribe();
              }
            }),
            n
          );
        })(D);
      function ie() {
        return new P();
      }
      function le(e) {
        return {
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      var ue = (function () {
          function e(e, n) {
            (this._desc = e),
              (this.ngMetadataName = "InjectionToken"),
              (this.ngInjectableDef =
                void 0 !== n
                  ? le({
                      providedIn: n.providedIn || "root",
                      factory: n.factory,
                    })
                  : void 0);
          }
          return (
            (e.prototype.toString = function () {
              return "InjectionToken " + this._desc;
            }),
            e
          );
        })(),
        ae = "__parameters__";
      function se(e, n, t) {
        var r = (function (e) {
          return function () {
            for (var n = [], t = 0; t < arguments.length; t++)
              n[t] = arguments[t];
            if (e) {
              var r = e.apply(void 0, d(n));
              for (var o in r) this[o] = r[o];
            }
          };
        })(n);
        function o() {
          for (var e, n = [], t = 0; t < arguments.length; t++)
            n[t] = arguments[t];
          if (this instanceof o) return r.apply(this, n), this;
          var i = new ((e = o).bind.apply(e, d([void 0], n)))();
          return (l.annotation = i), l;
          function l(e, n, t) {
            for (
              var r = e.hasOwnProperty(ae)
                ? e[ae]
                : Object.defineProperty(e, ae, { value: [] })[ae];
              r.length <= t;

            )
              r.push(null);
            return (r[t] = r[t] || []).push(i), e;
          }
        }
        return (
          t && (o.prototype = Object.create(t.prototype)),
          (o.prototype.ngMetadataName = e),
          (o.annotationCls = o),
          o
        );
      }
      Function;
      var ce = "undefined" != typeof window && window,
        de =
          "undefined" != typeof self &&
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        fe = ("undefined" != typeof global && global) || ce || de,
        pe = Promise.resolve(0),
        he = null;
      function ve() {
        if (!he) {
          var e = fe.Symbol;
          if (e && e.iterator) he = e.iterator;
          else
            for (
              var n = Object.getOwnPropertyNames(Map.prototype), t = 0;
              t < n.length;
              ++t
            ) {
              var r = n[t];
              "entries" !== r &&
                "size" !== r &&
                Map.prototype[r] === Map.prototype.entries &&
                (he = r);
            }
        }
        return he;
      }
      function ge(e) {
        "undefined" == typeof Zone
          ? pe.then(function () {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask("scheduleMicrotask", e);
      }
      function ye(e, n) {
        return (
          e === n ||
          ("number" == typeof e && "number" == typeof n && isNaN(e) && isNaN(n))
        );
      }
      function me(e) {
        if ("string" == typeof e) return e;
        if (e instanceof Array) return "[" + e.map(me).join(", ") + "]";
        if (null == e) return "" + e;
        if (e.overriddenName) return "" + e.overriddenName;
        if (e.name) return "" + e.name;
        var n = e.toString();
        if (null == n) return "" + n;
        var t = n.indexOf("\n");
        return -1 === t ? n : n.substring(0, t);
      }
      function be(e) {
        return (
          (e.__forward_ref__ = be),
          (e.toString = function () {
            return me(this());
          }),
          e
        );
      }
      function we(e) {
        return "function" == typeof e &&
          e.hasOwnProperty("__forward_ref__") &&
          e.__forward_ref__ === be
          ? e()
          : e;
      }
      var _e = se("Inject", function (e) {
          return { token: e };
        }),
        Ee = se("Optional"),
        Ce = se("Self"),
        xe = se("SkipSelf"),
        Se = "__source",
        ke = new Object(),
        Te = ke,
        Ne = new ue("INJECTOR"),
        Ae = (function () {
          function e() {}
          return (
            (e.prototype.get = function (e, n) {
              if ((void 0 === n && (n = ke), n === ke))
                throw new Error(
                  "NullInjectorError: No provider for " + me(e) + "!"
                );
              return n;
            }),
            e
          );
        })(),
        Ie = (function () {
          function e() {}
          return (
            (e.create = function (e, n) {
              return Array.isArray(e)
                ? new Be(e, n)
                : new Be(e.providers, e.parent, e.name || null);
            }),
            (e.THROW_IF_NOT_FOUND = ke),
            (e.NULL = new Ae()),
            (e.ngInjectableDef = le({
              providedIn: "any",
              factory: function () {
                return Qe(Ne);
              },
            })),
            e
          );
        })(),
        Oe = function (e) {
          return e;
        },
        Me = [],
        Re = Oe,
        De = function () {
          return Array.prototype.slice.call(arguments);
        },
        Pe = {},
        je = (function (e) {
          for (var n in e) if (e[n] === Pe) return n;
          throw Error("!prop");
        })({ provide: String, useValue: Pe }),
        He = Ie.NULL,
        Le = /\n/gm,
        Ve = "\u0275",
        Be = (function () {
          function e(e, n, t) {
            void 0 === n && (n = He),
              void 0 === t && (t = null),
              (this.parent = n),
              (this.source = t);
            var r = (this._records = new Map());
            r.set(Ie, { token: Ie, fn: Oe, deps: Me, value: this, useNew: !1 }),
              r.set(Ne, {
                token: Ne,
                fn: Oe,
                deps: Me,
                value: this,
                useNew: !1,
              }),
              (function e(n, t) {
                if (t)
                  if ((t = we(t)) instanceof Array)
                    for (var r = 0; r < t.length; r++) e(n, t[r]);
                  else {
                    if ("function" == typeof t)
                      throw Ue("Function/Class not supported", t);
                    if (!t || "object" != typeof t || !t.provide)
                      throw Ue("Unexpected provider", t);
                    var o = we(t.provide),
                      i = (function (e) {
                        var n = (function (e) {
                            var n = Me,
                              t = e.deps;
                            if (t && t.length) {
                              n = [];
                              for (var r = 0; r < t.length; r++) {
                                var o = 6;
                                if ((a = we(t[r])) instanceof Array)
                                  for (var i = 0, l = a; i < l.length; i++) {
                                    var u = l[i];
                                    u instanceof Ee || u == Ee
                                      ? (o |= 1)
                                      : u instanceof xe || u == xe
                                      ? (o &= -3)
                                      : u instanceof Ce || u == Ce
                                      ? (o &= -5)
                                      : (a = u instanceof _e ? u.token : we(u));
                                  }
                                n.push({ token: a, options: o });
                              }
                            } else if (e.useExisting) {
                              var a;
                              n = [
                                { token: (a = we(e.useExisting)), options: 6 },
                              ];
                            } else if (!(t || je in e))
                              throw Ue("'deps' required", e);
                            return n;
                          })(e),
                          t = Oe,
                          r = Me,
                          o = !1,
                          i = we(e.provide);
                        if (je in e) r = e.useValue;
                        else if (e.useFactory) t = e.useFactory;
                        else if (e.useExisting);
                        else if (e.useClass) (o = !0), (t = we(e.useClass));
                        else {
                          if ("function" != typeof i)
                            throw Ue(
                              "StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable",
                              e
                            );
                          (o = !0), (t = i);
                        }
                        return { deps: n, fn: t, useNew: o, value: r };
                      })(t);
                    if (!0 === t.multi) {
                      var l = n.get(o);
                      if (l) {
                        if (l.fn !== De) throw Fe(o);
                      } else
                        n.set(
                          o,
                          (l = {
                            token: t.provide,
                            deps: [],
                            useNew: !1,
                            fn: De,
                            value: Me,
                          })
                        );
                      l.deps.push({ token: (o = t), options: 6 });
                    }
                    var u = n.get(o);
                    if (u && u.fn == De) throw Fe(o);
                    n.set(o, i);
                  }
              })(r, e);
          }
          return (
            (e.prototype.get = function (e, n, t) {
              void 0 === t && (t = 0);
              var r = this._records.get(e);
              try {
                return (function e(n, t, r, o, i, l) {
                  try {
                    return (function (n, t, r, o, i, l) {
                      var u, a;
                      if (!t || 4 & l) 2 & l || (a = o.get(n, i, 0));
                      else {
                        if ((a = t.value) == Re)
                          throw Error(Ve + "Circular dependency");
                        if (a === Me) {
                          t.value = Re;
                          var s = t.useNew,
                            c = t.fn,
                            f = t.deps,
                            p = Me;
                          if (f.length) {
                            p = [];
                            for (var h = 0; h < f.length; h++) {
                              var v = f[h],
                                g = v.options,
                                y = 2 & g ? r.get(v.token) : void 0;
                              p.push(
                                e(
                                  v.token,
                                  y,
                                  r,
                                  y || 4 & g ? o : He,
                                  1 & g ? null : Ie.THROW_IF_NOT_FOUND,
                                  0
                                )
                              );
                            }
                          }
                          t.value = a = s
                            ? new ((u = c).bind.apply(u, d([void 0], p)))()
                            : c.apply(void 0, p);
                        }
                      }
                      return a;
                    })(n, t, r, o, i, l);
                  } catch (e) {
                    throw (
                      (e instanceof Error || (e = new Error(e)),
                      (e.ngTempTokenPath = e.ngTempTokenPath || []).unshift(n),
                      t && t.value == Re && (t.value = Me),
                      e)
                    );
                  }
                })(e, r, this._records, this.parent, n, t);
              } catch (n) {
                var o = n.ngTempTokenPath;
                throw (
                  (e[Se] && o.unshift(e[Se]),
                  (n.message = ze("\n" + n.message, o, this.source)),
                  (n.ngTokenPath = o),
                  (n.ngTempTokenPath = null),
                  n)
                );
              }
            }),
            (e.prototype.toString = function () {
              var e = [];
              return (
                this._records.forEach(function (n, t) {
                  return e.push(me(t));
                }),
                "StaticInjector[" + e.join(", ") + "]"
              );
            }),
            e
          );
        })();
      function Fe(e) {
        return Ue("Cannot mix multi providers and regular providers", e);
      }
      function ze(e, n, t) {
        void 0 === t && (t = null),
          (e =
            e && "\n" === e.charAt(0) && e.charAt(1) == Ve ? e.substr(2) : e);
        var r = me(n);
        if (n instanceof Array) r = n.map(me).join(" -> ");
        else if ("object" == typeof n) {
          var o = [];
          for (var i in n)
            if (n.hasOwnProperty(i)) {
              var l = n[i];
              o.push(
                i + ":" + ("string" == typeof l ? JSON.stringify(l) : me(l))
              );
            }
          r = "{" + o.join(", ") + "}";
        }
        return (
          "StaticInjectorError" +
          (t ? "(" + t + ")" : "") +
          "[" +
          r +
          "]: " +
          e.replace(Le, "\n  ")
        );
      }
      function Ue(e, n) {
        return new Error(ze(e, n));
      }
      var Ze = void 0;
      function We(e) {
        var n = Ze;
        return (Ze = e), n;
      }
      function Qe(e, n) {
        if ((void 0 === n && (n = 0), void 0 === Ze))
          throw new Error("inject() must be called from an injection context");
        if (null === Ze) {
          var t = e.ngInjectableDef;
          if (t && "root" == t.providedIn)
            return void 0 === t.value ? (t.value = t.factory()) : t.value;
          if (8 & n) return null;
          throw new Error("Injector: NOT_FOUND [" + me(e) + "]");
        }
        return Ze.get(e, 8 & n ? null : void 0, n);
      }
      function Ye(e) {
        for (var n = [], t = 0; t < e.length; t++) {
          var r = e[t];
          if (Array.isArray(r)) {
            if (0 === r.length)
              throw new Error("Arguments array must have arguments.");
            for (var o = void 0, i = 0, l = 0; l < r.length; l++) {
              var u = r[l];
              u instanceof Ee || "Optional" === u.ngMetadataName
                ? (i |= 8)
                : u instanceof xe || "SkipSelf" === u.ngMetadataName
                ? (i |= 4)
                : u instanceof Ce || "Self" === u.ngMetadataName
                ? (i |= 2)
                : (o = u instanceof _e ? u.token : u);
            }
            n.push(Qe(o, i));
          } else n.push(Qe(r));
        }
        return n;
      }
      String;
      var qe = (function (e) {
          return (
            (e[(e.Emulated = 0)] = "Emulated"),
            (e[(e.Native = 1)] = "Native"),
            (e[(e.None = 2)] = "None"),
            (e[(e.ShadowDom = 3)] = "ShadowDom"),
            e
          );
        })({}),
        Ge = new (function (e) {
          (this.full = e),
            (this.major = e.split(".")[0]),
            (this.minor = e.split(".")[1]),
            (this.patch = e.split(".").slice(2).join("."));
        })("6.1.10"),
        Ke = "ngDebugContext",
        Xe = "ngOriginalError",
        Je = "ngErrorLogger";
      function $e(e) {
        return e[Ke];
      }
      function en(e) {
        return e[Xe];
      }
      function nn(e) {
        for (var n = [], t = 1; t < arguments.length; t++)
          n[t - 1] = arguments[t];
        e.error.apply(e, d(n));
      }
      var tn = (function () {
          function e() {
            this._console = console;
          }
          return (
            (e.prototype.handleError = function (e) {
              var n = this._findOriginalError(e),
                t = this._findContext(e),
                r = (function (e) {
                  return e[Je] || nn;
                })(e);
              r(this._console, "ERROR", e),
                n && r(this._console, "ORIGINAL ERROR", n),
                t && r(this._console, "ERROR CONTEXT", t);
            }),
            (e.prototype._findContext = function (e) {
              return e ? ($e(e) ? $e(e) : this._findContext(en(e))) : null;
            }),
            (e.prototype._findOriginalError = function (e) {
              for (var n = en(e); n && en(n); ) n = en(n);
              return n;
            }),
            e
          );
        })(),
        rn = new ue(
          "The presence of this token marks an injector as being the root injector."
        ),
        on = {},
        ln = {},
        un = [],
        an = void 0;
      function sn() {
        return void 0 === an && (an = new Ae()), an;
      }
      var cn = (function () {
        function e(e, n, t) {
          var r = this;
          (this.parent = t),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this.destroyed = !1),
            pn([e], function (e) {
              return r.processInjectorType(e, new Set());
            }),
            n &&
              pn(n, function (e) {
                return r.processProvider(e);
              }),
            this.records.set(Ne, fn(void 0, this)),
            (this.isRootInjector = this.records.has(rn)),
            this.injectorDefTypes.forEach(function (e) {
              return r.get(e);
            });
        }
        return (
          (e.prototype.destroy = function () {
            this.assertNotDestroyed(), (this.destroyed = !0);
            try {
              this.onDestroy.forEach(function (e) {
                return e.ngOnDestroy();
              });
            } finally {
              this.records.clear(),
                this.onDestroy.clear(),
                this.injectorDefTypes.clear();
            }
          }),
          (e.prototype.get = function (e, n, t) {
            void 0 === n && (n = Te),
              void 0 === t && (t = 0),
              this.assertNotDestroyed();
            var r,
              o = We(this);
            try {
              if (!(4 & t)) {
                var i = this.records.get(e);
                if (void 0 === i) {
                  var l =
                    (("function" == typeof (r = e) ||
                      ("object" == typeof r && r instanceof ue)) &&
                      e.ngInjectableDef) ||
                    void 0;
                  void 0 !== l &&
                    this.injectableDefInScope(l) &&
                    ((i = dn(e)), this.records.set(e, i));
                }
                if (void 0 !== i) return this.hydrate(e, i);
              }
              return 2 & t && sn(), this.parent.get(e, n);
            } finally {
              We(o);
            }
          }),
          (e.prototype.assertNotDestroyed = function () {
            if (this.destroyed)
              throw new Error("Injector has already been destroyed.");
          }),
          (e.prototype.processInjectorType = function (e, n) {
            var t = this,
              r = (e = we(e)).ngInjectorDef,
              o = (null == r && e.ngModule) || void 0,
              i = void 0 === o ? e : o,
              l = (void 0 !== o && e.providers) || un;
            if ((void 0 !== o && (r = o.ngInjectorDef), null != r)) {
              if (n.has(i))
                throw new Error(
                  "Circular dependency: type " +
                    me(i) +
                    " ends up importing itself."
                );
              if (
                (this.injectorDefTypes.add(i),
                this.records.set(i, fn(r.factory)),
                null != r.imports)
              ) {
                n.add(i);
                try {
                  pn(r.imports, function (e) {
                    return t.processInjectorType(e, n);
                  });
                } finally {
                  n.delete(i);
                }
              }
              null != r.providers &&
                pn(r.providers, function (e) {
                  return t.processProvider(e);
                }),
                pn(l, function (e) {
                  return t.processProvider(e);
                });
            }
          }),
          (e.prototype.processProvider = function (e) {
            var n = hn((e = we(e))) ? e : we(e.provide),
              t = (function (e) {
                var n = we(e),
                  t = on,
                  r = void 0;
                if (hn(e)) return dn(e);
                if (((n = we(e.provide)), je in e)) t = e.useValue;
                else if (e.useExisting)
                  r = function () {
                    return Qe(e.useExisting);
                  };
                else if (e.useFactory)
                  r = function () {
                    return e.useFactory.apply(e, d(Ye(e.deps || [])));
                  };
                else {
                  var o = e.useClass || n;
                  if (!e.deps) return dn(o);
                  r = function () {
                    return new (o.bind.apply(o, d([void 0], Ye(e.deps))))();
                  };
                }
                return fn(r, t);
              })(e);
            if (hn(e) || !0 !== e.multi) {
              var r = this.records.get(n);
              if (r && void 0 !== r.multi)
                throw new Error("Mixed multi-provider for " + me(n));
            } else {
              var o = this.records.get(n);
              if (o) {
                if (void 0 === o.multi)
                  throw new Error("Mixed multi-provider for " + n + ".");
              } else
                ((o = fn(void 0, on, !0)).factory = function () {
                  return Ye(o.multi);
                }),
                  this.records.set(n, o);
              (n = e), o.multi.push(e);
            }
            this.records.set(n, t);
          }),
          (e.prototype.hydrate = function (e, n) {
            if (n.value === ln) throw new Error("Circular dep for " + me(e));
            var t;
            return (
              n.value === on && ((n.value = ln), (n.value = n.factory())),
              "object" == typeof n.value &&
                n.value &&
                "object" == typeof (t = n.value) &&
                null != t &&
                t.ngOnDestroy &&
                "function" == typeof t.ngOnDestroy &&
                this.onDestroy.add(n.value),
              n.value
            );
          }),
          (e.prototype.injectableDefInScope = function (e) {
            return (
              !!e.providedIn &&
              ("string" == typeof e.providedIn
                ? "any" === e.providedIn ||
                  ("root" === e.providedIn && this.isRootInjector)
                : this.injectorDefTypes.has(e.providedIn))
            );
          }),
          e
        );
      })();
      function dn(e) {
        var n = e.ngInjectableDef;
        if (void 0 === n) {
          if (e instanceof ue)
            throw new Error(
              "Token " + me(e) + " is missing an ngInjectableDef definition."
            );
          return fn(function () {
            return new e();
          });
        }
        return fn(n.factory);
      }
      function fn(e, n, t) {
        return (
          void 0 === n && (n = on),
          void 0 === t && (t = !1),
          { factory: e, value: n, multi: t ? [] : void 0 }
        );
      }
      function pn(e, n) {
        e.forEach(function (e) {
          return Array.isArray(e) ? pn(e, n) : n(e);
        });
      }
      function hn(e) {
        return "function" == typeof e;
      }
      function vn(e) {
        return !!e && "function" == typeof e.then;
      }
      var gn = new ue("Application Initializer"),
        yn = (function () {
          function e(e) {
            var n = this;
            (this.appInits = e),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise(function (e, t) {
                (n.resolve = e), (n.reject = t);
              }));
          }
          return (
            (e.prototype.runInitializers = function () {
              var e = this;
              if (!this.initialized) {
                var n = [],
                  t = function () {
                    (e.done = !0), e.resolve();
                  };
                if (this.appInits)
                  for (var r = 0; r < this.appInits.length; r++) {
                    var o = this.appInits[r]();
                    vn(o) && n.push(o);
                  }
                Promise.all(n)
                  .then(function () {
                    t();
                  })
                  .catch(function (n) {
                    e.reject(n);
                  }),
                  0 === n.length && t(),
                  (this.initialized = !0);
              }
            }),
            l([u(0, _e(gn)), u(0, Ee())], e)
          );
        })(),
        mn = new ue("AppId");
      function bn() {
        return "" + wn() + wn() + wn();
      }
      function wn() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      var _n = new ue("Platform Initializer"),
        En = new ue("Platform ID"),
        Cn = new ue("appBootstrapListener"),
        xn = (function () {
          function e() {}
          return (
            (e.prototype.log = function (e) {
              console.log(e);
            }),
            (e.prototype.warn = function (e) {
              console.warn(e);
            }),
            e
          );
        })();
      function Sn() {
        throw new Error("Runtime compiler is not loaded");
      }
      var kn = (function () {
          function e() {}
          return (
            (e.prototype.compileModuleSync = function (e) {
              throw Sn();
            }),
            (e.prototype.compileModuleAsync = function (e) {
              throw Sn();
            }),
            (e.prototype.compileModuleAndAllComponentsSync = function (e) {
              throw Sn();
            }),
            (e.prototype.compileModuleAndAllComponentsAsync = function (e) {
              throw Sn();
            }),
            (e.prototype.clearCache = function () {}),
            (e.prototype.clearCacheFor = function (e) {}),
            (e.prototype.getModuleId = function (e) {}),
            e
          );
        })(),
        Tn = function () {},
        Nn = function () {},
        An = function () {};
      function In(e) {
        var n = Error(
          "No component factory found for " +
            me(e) +
            ". Did you add it to @NgModule.entryComponents?"
        );
        return (n[Rn] = e), n;
      }
      var On,
        Mn,
        Rn = "ngComponent",
        Dn = (function () {
          function e() {}
          return (
            (e.prototype.resolveComponentFactory = function (e) {
              throw In(e);
            }),
            e
          );
        })(),
        Pn = (function () {
          function e() {}
          return (e.NULL = new Dn()), e;
        })(),
        jn = (function () {
          function e(e, n, t) {
            (this._parent = n),
              (this._ngModule = t),
              (this._factories = new Map());
            for (var r = 0; r < e.length; r++) {
              var o = e[r];
              this._factories.set(o.componentType, o);
            }
          }
          return (
            (e.prototype.resolveComponentFactory = function (e) {
              var n = this._factories.get(e);
              if (
                (!n &&
                  this._parent &&
                  (n = this._parent.resolveComponentFactory(e)),
                !n)
              )
                throw In(e);
              return new Hn(n, this._ngModule);
            }),
            e
          );
        })(),
        Hn = (function (e) {
          function n(n, t) {
            var r = e.call(this) || this;
            return (
              (r.factory = n),
              (r.ngModule = t),
              (r.selector = n.selector),
              (r.componentType = n.componentType),
              (r.ngContentSelectors = n.ngContentSelectors),
              (r.inputs = n.inputs),
              (r.outputs = n.outputs),
              r
            );
          }
          return (
            o(n, e),
            (n.prototype.create = function (e, n, t, r) {
              return this.factory.create(e, n, t, r || this.ngModule);
            }),
            n
          );
        })(An),
        Ln = function () {},
        Vn = function () {},
        Bn = (function () {
          var e = fe.wtf;
          return !(!e || !(On = e.trace) || ((Mn = On.events), 0));
        })();
      function Fn(e, n) {
        return null;
      }
      var zn = Bn
          ? function (e, n) {
              return void 0 === n && (n = null), Mn.createScope(e, n);
            }
          : function (e, n) {
              return Fn;
            },
        Un = Bn
          ? function (e, n) {
              return On.leaveScope(e, n), n;
            }
          : function (e, n) {
              return n;
            },
        Zn = (function (e) {
          function n(n) {
            void 0 === n && (n = !1);
            var t = e.call(this) || this;
            return (t.__isAsync = n), t;
          }
          return (
            o(n, e),
            (n.prototype.emit = function (n) {
              e.prototype.next.call(this, n);
            }),
            (n.prototype.subscribe = function (n, t, r) {
              var o,
                i = function (e) {
                  return null;
                },
                l = function () {
                  return null;
                };
              n && "object" == typeof n
                ? ((o = this.__isAsync
                    ? function (e) {
                        setTimeout(function () {
                          return n.next(e);
                        });
                      }
                    : function (e) {
                        n.next(e);
                      }),
                  n.error &&
                    (i = this.__isAsync
                      ? function (e) {
                          setTimeout(function () {
                            return n.error(e);
                          });
                        }
                      : function (e) {
                          n.error(e);
                        }),
                  n.complete &&
                    (l = this.__isAsync
                      ? function () {
                          setTimeout(function () {
                            return n.complete();
                          });
                        }
                      : function () {
                          n.complete();
                        }))
                : ((o = this.__isAsync
                    ? function (e) {
                        setTimeout(function () {
                          return n(e);
                        });
                      }
                    : function (e) {
                        n(e);
                      }),
                  t &&
                    (i = this.__isAsync
                      ? function (e) {
                          setTimeout(function () {
                            return t(e);
                          });
                        }
                      : function (e) {
                          t(e);
                        }),
                  r &&
                    (l = this.__isAsync
                      ? function () {
                          setTimeout(function () {
                            return r();
                          });
                        }
                      : function () {
                          r();
                        }));
              var u = e.prototype.subscribe.call(this, o, i, l);
              return n instanceof w && n.add(u), u;
            }),
            n
          );
        })(P),
        Wn = (function () {
          function e(e) {
            var n,
              t = e.enableLongStackTrace,
              r = void 0 !== t && t;
            if (
              ((this.hasPendingMicrotasks = !1),
              (this.hasPendingMacrotasks = !1),
              (this.isStable = !0),
              (this.onUnstable = new Zn(!1)),
              (this.onMicrotaskEmpty = new Zn(!1)),
              (this.onStable = new Zn(!1)),
              (this.onError = new Zn(!1)),
              "undefined" == typeof Zone)
            )
              throw new Error("In this configuration Angular requires Zone.js");
            Zone.assertZonePatched(),
              (this._nesting = 0),
              (this._outer = this._inner = Zone.current),
              Zone.wtfZoneSpec &&
                (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
              Zone.TaskTrackingZoneSpec &&
                (this._inner = this._inner.fork(
                  new Zone.TaskTrackingZoneSpec()
                )),
              r &&
                Zone.longStackTraceZoneSpec &&
                (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
              ((n = this)._inner = n._inner.fork({
                name: "angular",
                properties: { isAngularZone: !0 },
                onInvokeTask: function (e, t, r, o, i, l) {
                  try {
                    return Gn(n), e.invokeTask(r, o, i, l);
                  } finally {
                    Kn(n);
                  }
                },
                onInvoke: function (e, t, r, o, i, l, u) {
                  try {
                    return Gn(n), e.invoke(r, o, i, l, u);
                  } finally {
                    Kn(n);
                  }
                },
                onHasTask: function (e, t, r, o) {
                  e.hasTask(r, o),
                    t === r &&
                      ("microTask" == o.change
                        ? ((n.hasPendingMicrotasks = o.microTask), qn(n))
                        : "macroTask" == o.change &&
                          (n.hasPendingMacrotasks = o.macroTask));
                },
                onHandleError: function (e, t, r, o) {
                  return (
                    e.handleError(r, o),
                    n.runOutsideAngular(function () {
                      return n.onError.emit(o);
                    }),
                    !1
                  );
                },
              }));
          }
          return (
            (e.isInAngularZone = function () {
              return !0 === Zone.current.get("isAngularZone");
            }),
            (e.assertInAngularZone = function () {
              if (!e.isInAngularZone())
                throw new Error(
                  "Expected to be in Angular Zone, but it is not!"
                );
            }),
            (e.assertNotInAngularZone = function () {
              if (e.isInAngularZone())
                throw new Error(
                  "Expected to not be in Angular Zone, but it is!"
                );
            }),
            (e.prototype.run = function (e, n, t) {
              return this._inner.run(e, n, t);
            }),
            (e.prototype.runTask = function (e, n, t, r) {
              var o = this._inner,
                i = o.scheduleEventTask("NgZoneEvent: " + r, e, Yn, Qn, Qn);
              try {
                return o.runTask(i, n, t);
              } finally {
                o.cancelTask(i);
              }
            }),
            (e.prototype.runGuarded = function (e, n, t) {
              return this._inner.runGuarded(e, n, t);
            }),
            (e.prototype.runOutsideAngular = function (e) {
              return this._outer.run(e);
            }),
            e
          );
        })();
      function Qn() {}
      var Yn = {};
      function qn(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(function () {
                  return e.onStable.emit(null);
                });
              } finally {
                e.isStable = !0;
              }
          }
      }
      function Gn(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function Kn(e) {
        e._nesting--, qn(e);
      }
      var Xn,
        Jn = (function () {
          function e() {
            (this.hasPendingMicrotasks = !1),
              (this.hasPendingMacrotasks = !1),
              (this.isStable = !0),
              (this.onUnstable = new Zn()),
              (this.onMicrotaskEmpty = new Zn()),
              (this.onStable = new Zn()),
              (this.onError = new Zn());
          }
          return (
            (e.prototype.run = function (e) {
              return e();
            }),
            (e.prototype.runGuarded = function (e) {
              return e();
            }),
            (e.prototype.runOutsideAngular = function (e) {
              return e();
            }),
            (e.prototype.runTask = function (e) {
              return e();
            }),
            e
          );
        })(),
        $n = (function () {
          function e(e) {
            var n = this;
            (this._ngZone = e),
              (this._pendingCount = 0),
              (this._isZoneStable = !0),
              (this._didWork = !1),
              (this._callbacks = []),
              this._watchAngularEvents(),
              e.run(function () {
                n.taskTrackingZone = Zone.current.get("TaskTrackingZone");
              });
          }
          return (
            (e.prototype._watchAngularEvents = function () {
              var e = this;
              this._ngZone.onUnstable.subscribe({
                next: function () {
                  (e._didWork = !0), (e._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(function () {
                  e._ngZone.onStable.subscribe({
                    next: function () {
                      Wn.assertNotInAngularZone(),
                        ge(function () {
                          (e._isZoneStable = !0), e._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }),
            (e.prototype.increasePendingRequestCount = function () {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }),
            (e.prototype.decreasePendingRequestCount = function () {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error("pending async requests below zero");
              return this._runCallbacksIfReady(), this._pendingCount;
            }),
            (e.prototype.isStable = function () {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }),
            (e.prototype._runCallbacksIfReady = function () {
              var e = this;
              if (this.isStable())
                ge(function () {
                  for (; 0 !== e._callbacks.length; ) {
                    var n = e._callbacks.pop();
                    clearTimeout(n.timeoutId), n.doneCb(e._didWork);
                  }
                  e._didWork = !1;
                });
              else {
                var n = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(function (e) {
                  return (
                    !e.updateCb ||
                    !e.updateCb(n) ||
                    (clearTimeout(e.timeoutId), !1)
                  );
                })),
                  (this._didWork = !0);
              }
            }),
            (e.prototype.getPendingTasks = function () {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map(function (e) {
                    return {
                      source: e.source,
                      isPeriodic: e.data.isPeriodic,
                      delay: e.data.delay,
                      creationLocation: e.creationLocation,
                      xhr: e.data.target,
                    };
                  })
                : [];
            }),
            (e.prototype.addCallback = function (e, n, t) {
              var r = this,
                o = -1;
              n &&
                n > 0 &&
                (o = setTimeout(function () {
                  (r._callbacks = r._callbacks.filter(function (e) {
                    return e.timeoutId !== o;
                  })),
                    e(r._didWork, r.getPendingTasks());
                }, n)),
                this._callbacks.push({ doneCb: e, timeoutId: o, updateCb: t });
            }),
            (e.prototype.whenStable = function (e, n, t) {
              if (t && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
                );
              this.addCallback(e, n, t), this._runCallbacksIfReady();
            }),
            (e.prototype.getPendingRequestCount = function () {
              return this._pendingCount;
            }),
            (e.prototype.findProviders = function (e, n, t) {
              return [];
            }),
            e
          );
        })(),
        et = (function () {
          function e() {
            (this._applications = new Map()), nt.addToWindow(this);
          }
          return (
            (e.prototype.registerApplication = function (e, n) {
              this._applications.set(e, n);
            }),
            (e.prototype.unregisterApplication = function (e) {
              this._applications.delete(e);
            }),
            (e.prototype.unregisterAllApplications = function () {
              this._applications.clear();
            }),
            (e.prototype.getTestability = function (e) {
              return this._applications.get(e) || null;
            }),
            (e.prototype.getAllTestabilities = function () {
              return Array.from(this._applications.values());
            }),
            (e.prototype.getAllRootElements = function () {
              return Array.from(this._applications.keys());
            }),
            (e.prototype.findTestabilityInTree = function (e, n) {
              return (
                void 0 === n && (n = !0), nt.findTestabilityInTree(this, e, n)
              );
            }),
            l([a("design:paramtypes", [])], e)
          );
        })(),
        nt = new ((function () {
          function e() {}
          return (
            (e.prototype.addToWindow = function (e) {}),
            (e.prototype.findTestabilityInTree = function (e, n, t) {
              return null;
            }),
            e
          );
        })())(),
        tt = !0,
        rt = !1,
        ot = new ue("AllowMultipleToken");
      function it() {
        return (rt = !0), tt;
      }
      var lt = function (e, n) {
        (this.name = e), (this.token = n);
      };
      function ut(e, n, t) {
        void 0 === t && (t = []);
        var r = "Platform: " + n,
          o = new ue(r);
        return function (n) {
          void 0 === n && (n = []);
          var i = at();
          if (!i || i.injector.get(ot, !1))
            if (e) e(t.concat(n).concat({ provide: o, useValue: !0 }));
            else {
              var l = t.concat(n).concat({ provide: o, useValue: !0 });
              !(function (e) {
                if (Xn && !Xn.destroyed && !Xn.injector.get(ot, !1))
                  throw new Error(
                    "There can be only one platform. Destroy the previous one to create a new one."
                  );
                Xn = e.get(st);
                var n = e.get(_n, null);
                n &&
                  n.forEach(function (e) {
                    return e();
                  });
              })(Ie.create({ providers: l, name: r }));
            }
          return (function (e) {
            var n = at();
            if (!n) throw new Error("No platform exists!");
            if (!n.injector.get(e, null))
              throw new Error(
                "A platform with a different configuration has been created. Please destroy it first."
              );
            return n;
          })(o);
        };
      }
      function at() {
        return Xn && !Xn.destroyed ? Xn : null;
      }
      var st = (function () {
        function e(e) {
          (this._injector = e),
            (this._modules = []),
            (this._destroyListeners = []),
            (this._destroyed = !1);
        }
        return (
          (e.prototype.bootstrapModuleFactory = function (e, n) {
            var t,
              r = this,
              o =
                "noop" === (t = n ? n.ngZone : void 0)
                  ? new Jn()
                  : ("zone.js" === t ? void 0 : t) ||
                    new Wn({ enableLongStackTrace: it() }),
              i = [{ provide: Wn, useValue: o }];
            return o.run(function () {
              var n = Ie.create({
                  providers: i,
                  parent: r.injector,
                  name: e.moduleType.name,
                }),
                t = e.create(n),
                l = t.injector.get(tn, null);
              if (!l)
                throw new Error(
                  "No ErrorHandler. Is platform module (BrowserModule) included?"
                );
              return (
                t.onDestroy(function () {
                  return ft(r._modules, t);
                }),
                o.runOutsideAngular(function () {
                  return o.onError.subscribe({
                    next: function (e) {
                      l.handleError(e);
                    },
                  });
                }),
                (function (e, n, o) {
                  try {
                    var i =
                      ((l = t.injector.get(yn)).runInitializers(),
                      l.donePromise.then(function () {
                        return r._moduleDoBootstrap(t), t;
                      }));
                    return vn(i)
                      ? i.catch(function (t) {
                          throw (
                            (n.runOutsideAngular(function () {
                              return e.handleError(t);
                            }),
                            t)
                          );
                        })
                      : i;
                  } catch (t) {
                    throw (
                      (n.runOutsideAngular(function () {
                        return e.handleError(t);
                      }),
                      t)
                    );
                  }
                  var l;
                })(l, o)
              );
            });
          }),
          (e.prototype.bootstrapModule = function (e, n) {
            var t = this;
            void 0 === n && (n = []);
            var r = this.injector.get(Tn),
              o = ct({}, n);
            return r
              .createCompiler([o])
              .compileModuleAsync(e)
              .then(function (e) {
                return t.bootstrapModuleFactory(e, o);
              });
          }),
          (e.prototype._moduleDoBootstrap = function (e) {
            var n = e.injector.get(dt);
            if (e._bootstrapComponents.length > 0)
              e._bootstrapComponents.forEach(function (e) {
                return n.bootstrap(e);
              });
            else {
              if (!e.instance.ngDoBootstrap)
                throw new Error(
                  "The module " +
                    me(e.instance.constructor) +
                    ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.'
                );
              e.instance.ngDoBootstrap(n);
            }
            this._modules.push(e);
          }),
          (e.prototype.onDestroy = function (e) {
            this._destroyListeners.push(e);
          }),
          Object.defineProperty(e.prototype, "injector", {
            get: function () {
              return this._injector;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.destroy = function () {
            if (this._destroyed)
              throw new Error("The platform has already been destroyed!");
            this._modules.slice().forEach(function (e) {
              return e.destroy();
            }),
              this._destroyListeners.forEach(function (e) {
                return e();
              }),
              (this._destroyed = !0);
          }),
          Object.defineProperty(e.prototype, "destroyed", {
            get: function () {
              return this._destroyed;
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })();
      function ct(e, n) {
        return Array.isArray(n) ? n.reduce(ct, e) : i({}, e, n);
      }
      var dt = (function () {
        function e(e, n, t, r, o, i) {
          var l = this;
          (this._zone = e),
            (this._console = n),
            (this._injector = t),
            (this._exceptionHandler = r),
            (this._componentFactoryResolver = o),
            (this._initStatus = i),
            (this._bootstrapListeners = []),
            (this._views = []),
            (this._runningTick = !1),
            (this._enforceNoNewChanges = !1),
            (this._stable = !0),
            (this.componentTypes = []),
            (this.components = []),
            (this._enforceNoNewChanges = it()),
            this._zone.onMicrotaskEmpty.subscribe({
              next: function () {
                l._zone.run(function () {
                  l.tick();
                });
              },
            });
          var u = new I(function (e) {
              (l._stable =
                l._zone.isStable &&
                !l._zone.hasPendingMacrotasks &&
                !l._zone.hasPendingMicrotasks),
                l._zone.runOutsideAngular(function () {
                  e.next(l._stable), e.complete();
                });
            }),
            a = new I(function (e) {
              var n;
              l._zone.runOutsideAngular(function () {
                n = l._zone.onStable.subscribe(function () {
                  Wn.assertNotInAngularZone(),
                    ge(function () {
                      l._stable ||
                        l._zone.hasPendingMacrotasks ||
                        l._zone.hasPendingMicrotasks ||
                        ((l._stable = !0), e.next(!0));
                    });
                });
              });
              var t = l._zone.onUnstable.subscribe(function () {
                Wn.assertInAngularZone(),
                  l._stable &&
                    ((l._stable = !1),
                    l._zone.runOutsideAngular(function () {
                      e.next(!1);
                    }));
              });
              return function () {
                n.unsubscribe(), t.unsubscribe();
              };
            });
          this.isStable = (function () {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n];
            var t,
              r = Number.POSITIVE_INFINITY,
              o = null,
              i = e[e.length - 1];
            return (
              (t = i) && "function" == typeof t.schedule
                ? ((o = e.pop()),
                  e.length > 1 &&
                    "number" == typeof e[e.length - 1] &&
                    (r = e.pop()))
                : "number" == typeof i && (r = e.pop()),
              null === o && 1 === e.length && e[0] instanceof I
                ? e[0]
                : (function (e) {
                    return (
                      void 0 === e && (e = Number.POSITIVE_INFINITY),
                      (function e(n, t, r) {
                        return (
                          void 0 === r && (r = Number.POSITIVE_INFINITY),
                          "function" == typeof t
                            ? function (o) {
                                return o.pipe(
                                  e(function (e, r) {
                                    return ((o = n(e, r)),
                                    o instanceof I ? o : new I(W(o))).pipe(
                                      (function (e, n) {
                                        return function (n) {
                                          return n.lift(new Y(e, void 0));
                                        };
                                      })(function (n, o) {
                                        return t(e, n, r, o);
                                      })
                                    );
                                    var o;
                                  }, r)
                                );
                              }
                            : ("number" == typeof t && (r = t),
                              function (e) {
                                return e.lift(new K(n, r));
                              })
                        );
                      })(J, e)
                    );
                  })(r)(G(e, o))
            );
          })(
            u,
            a.pipe(function (e) {
              return $()(
                ((n = ie),
                function (e) {
                  var t;
                  t =
                    "function" == typeof n
                      ? n
                      : function () {
                          return n;
                        };
                  var r = Object.create(e, re);
                  return (r.source = e), (r.subjectFactory = t), r;
                })(e)
              );
              var n;
            })
          );
        }
        var n;
        return (
          (n = e),
          (e.prototype.bootstrap = function (e, n) {
            var t,
              r = this;
            if (!this._initStatus.done)
              throw new Error(
                "Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module."
              );
            (t =
              e instanceof An
                ? e
                : this._componentFactoryResolver.resolveComponentFactory(e)),
              this.componentTypes.push(t.componentType);
            var o = t instanceof Hn ? null : this._injector.get(Ln),
              i = t.create(Ie.NULL, [], n || t.selector, o);
            i.onDestroy(function () {
              r._unloadComponent(i);
            });
            var l = i.injector.get($n, null);
            return (
              l &&
                i.injector
                  .get(et)
                  .registerApplication(i.location.nativeElement, l),
              this._loadComponent(i),
              it() &&
                this._console.log(
                  "Angular is running in the development mode. Call enableProdMode() to enable the production mode."
                ),
              i
            );
          }),
          (e.prototype.tick = function () {
            var e = this;
            if (this._runningTick)
              throw new Error("ApplicationRef.tick is called recursively");
            var t = n._tickScope();
            try {
              (this._runningTick = !0),
                this._views.forEach(function (e) {
                  return e.detectChanges();
                }),
                this._enforceNoNewChanges &&
                  this._views.forEach(function (e) {
                    return e.checkNoChanges();
                  });
            } catch (n) {
              this._zone.runOutsideAngular(function () {
                return e._exceptionHandler.handleError(n);
              });
            } finally {
              (this._runningTick = !1), Un(t);
            }
          }),
          (e.prototype.attachView = function (e) {
            var n = e;
            this._views.push(n), n.attachToAppRef(this);
          }),
          (e.prototype.detachView = function (e) {
            var n = e;
            ft(this._views, n), n.detachFromAppRef();
          }),
          (e.prototype._loadComponent = function (e) {
            this.attachView(e.hostView),
              this.tick(),
              this.components.push(e),
              this._injector
                .get(Cn, [])
                .concat(this._bootstrapListeners)
                .forEach(function (n) {
                  return n(e);
                });
          }),
          (e.prototype._unloadComponent = function (e) {
            this.detachView(e.hostView), ft(this.components, e);
          }),
          (e.prototype.ngOnDestroy = function () {
            this._views.slice().forEach(function (e) {
              return e.destroy();
            });
          }),
          Object.defineProperty(e.prototype, "viewCount", {
            get: function () {
              return this._views.length;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e._tickScope = zn("ApplicationRef#tick()")),
          e
        );
      })();
      function ft(e, n) {
        var t = e.indexOf(n);
        t > -1 && e.splice(t, 1);
      }
      var pt = function () {},
        ht = (function (e) {
          return (
            (e[(e.Important = 1)] = "Important"),
            (e[(e.DashCase = 2)] = "DashCase"),
            e
          );
        })({}),
        vt = function () {},
        gt = function (e) {
          this.nativeElement = e;
        },
        yt = (function () {
          function e() {
            (this.dirty = !0),
              (this._results = []),
              (this.changes = new Zn()),
              (this.length = 0);
          }
          return (
            (e.prototype.map = function (e) {
              return this._results.map(e);
            }),
            (e.prototype.filter = function (e) {
              return this._results.filter(e);
            }),
            (e.prototype.find = function (e) {
              return this._results.find(e);
            }),
            (e.prototype.reduce = function (e, n) {
              return this._results.reduce(e, n);
            }),
            (e.prototype.forEach = function (e) {
              this._results.forEach(e);
            }),
            (e.prototype.some = function (e) {
              return this._results.some(e);
            }),
            (e.prototype.toArray = function () {
              return this._results.slice();
            }),
            (e.prototype[ve()] = function () {
              return this._results[ve()]();
            }),
            (e.prototype.toString = function () {
              return this._results.toString();
            }),
            (e.prototype.reset = function (e) {
              (this._results = (function e(n) {
                return n.reduce(function (n, t) {
                  var r = Array.isArray(t) ? e(t) : t;
                  return n.concat(r);
                }, []);
              })(e)),
                (this.dirty = !1),
                (this.length = this._results.length),
                (this.last = this._results[this.length - 1]),
                (this.first = this._results[0]);
            }),
            (e.prototype.notifyOnChanges = function () {
              this.changes.emit(this);
            }),
            (e.prototype.setDirty = function () {
              this.dirty = !0;
            }),
            (e.prototype.destroy = function () {
              this.changes.complete(), this.changes.unsubscribe();
            }),
            e
          );
        })(),
        mt = function () {},
        bt = (function () {
          function e(e, n, t) {
            (this._debugContext = t),
              (this.nativeNode = e),
              n && n instanceof wt ? n.addChild(this) : (this.parent = null),
              (this.listeners = []);
          }
          return (
            Object.defineProperty(e.prototype, "injector", {
              get: function () {
                return this._debugContext.injector;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "componentInstance", {
              get: function () {
                return this._debugContext.component;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "context", {
              get: function () {
                return this._debugContext.context;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "references", {
              get: function () {
                return this._debugContext.references;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "providerTokens", {
              get: function () {
                return this._debugContext.providerTokens;
              },
              enumerable: !0,
              configurable: !0,
            }),
            e
          );
        })(),
        wt = (function (e) {
          function n(n, t, r) {
            var o = e.call(this, n, t, r) || this;
            return (
              (o.properties = {}),
              (o.attributes = {}),
              (o.classes = {}),
              (o.styles = {}),
              (o.childNodes = []),
              (o.nativeElement = n),
              o
            );
          }
          return (
            o(n, e),
            (n.prototype.addChild = function (e) {
              e && (this.childNodes.push(e), (e.parent = this));
            }),
            (n.prototype.removeChild = function (e) {
              var n = this.childNodes.indexOf(e);
              -1 !== n && ((e.parent = null), this.childNodes.splice(n, 1));
            }),
            (n.prototype.insertChildrenAfter = function (e, n) {
              var t,
                r = this,
                o = this.childNodes.indexOf(e);
              -1 !== o &&
                ((t = this.childNodes).splice.apply(t, d([o + 1, 0], n)),
                n.forEach(function (e) {
                  e.parent && e.parent.removeChild(e), (e.parent = r);
                }));
            }),
            (n.prototype.insertBefore = function (e, n) {
              var t = this.childNodes.indexOf(e);
              -1 === t
                ? this.addChild(n)
                : (n.parent && n.parent.removeChild(n),
                  (n.parent = this),
                  this.childNodes.splice(t, 0, n));
            }),
            (n.prototype.query = function (e) {
              return this.queryAll(e)[0] || null;
            }),
            (n.prototype.queryAll = function (e) {
              var n = [];
              return (
                (function e(n, t, r) {
                  n.childNodes.forEach(function (n) {
                    n instanceof wt && (t(n) && r.push(n), e(n, t, r));
                  });
                })(this, e, n),
                n
              );
            }),
            (n.prototype.queryAllNodes = function (e) {
              var n = [];
              return (
                (function e(n, t, r) {
                  n instanceof wt &&
                    n.childNodes.forEach(function (n) {
                      t(n) && r.push(n), n instanceof wt && e(n, t, r);
                    });
                })(this, e, n),
                n
              );
            }),
            Object.defineProperty(n.prototype, "children", {
              get: function () {
                return this.childNodes.filter(function (e) {
                  return e instanceof n;
                });
              },
              enumerable: !0,
              configurable: !0,
            }),
            (n.prototype.triggerEventHandler = function (e, n) {
              this.listeners.forEach(function (t) {
                t.name == e && t.callback(n);
              });
            }),
            n
          );
        })(bt),
        _t = new Map();
      function Et(e) {
        return _t.get(e) || null;
      }
      function Ct(e) {
        _t.set(e.nativeNode, e);
      }
      function xt(e, n) {
        var t = Tt(e),
          r = Tt(n);
        return t && r
          ? (function (e, n, t) {
              for (var r = e[ve()](), o = n[ve()](); ; ) {
                var i = r.next(),
                  l = o.next();
                if (i.done && l.done) return !0;
                if (i.done || l.done) return !1;
                if (!t(i.value, l.value)) return !1;
              }
            })(e, n, xt)
          : !(
              t ||
              !e ||
              ("object" != typeof e && "function" != typeof e) ||
              r ||
              !n ||
              ("object" != typeof n && "function" != typeof n)
            ) || ye(e, n);
      }
      var St = (function () {
          function e(e) {
            this.wrapped = e;
          }
          return (
            (e.wrap = function (n) {
              return new e(n);
            }),
            (e.unwrap = function (n) {
              return e.isWrapped(n) ? n.wrapped : n;
            }),
            (e.isWrapped = function (n) {
              return n instanceof e;
            }),
            e
          );
        })(),
        kt = (function () {
          function e(e, n, t) {
            (this.previousValue = e),
              (this.currentValue = n),
              (this.firstChange = t);
          }
          return (
            (e.prototype.isFirstChange = function () {
              return this.firstChange;
            }),
            e
          );
        })();
      function Tt(e) {
        return (
          !!Nt(e) && (Array.isArray(e) || (!(e instanceof Map) && ve() in e))
        );
      }
      function Nt(e) {
        return null !== e && ("function" == typeof e || "object" == typeof e);
      }
      var At = (function () {
          function e() {}
          return (
            (e.prototype.supports = function (e) {
              return Tt(e);
            }),
            (e.prototype.create = function (e) {
              return new Ot(e);
            }),
            e
          );
        })(),
        It = function (e, n) {
          return n;
        },
        Ot = (function () {
          function e(e) {
            (this.length = 0),
              (this._linkedRecords = null),
              (this._unlinkedRecords = null),
              (this._previousItHead = null),
              (this._itHead = null),
              (this._itTail = null),
              (this._additionsHead = null),
              (this._additionsTail = null),
              (this._movesHead = null),
              (this._movesTail = null),
              (this._removalsHead = null),
              (this._removalsTail = null),
              (this._identityChangesHead = null),
              (this._identityChangesTail = null),
              (this._trackByFn = e || It);
          }
          return (
            (e.prototype.forEachItem = function (e) {
              var n;
              for (n = this._itHead; null !== n; n = n._next) e(n);
            }),
            (e.prototype.forEachOperation = function (e) {
              for (
                var n = this._itHead, t = this._removalsHead, r = 0, o = null;
                n || t;

              ) {
                var i = !t || (n && n.currentIndex < Pt(t, r, o)) ? n : t,
                  l = Pt(i, r, o),
                  u = i.currentIndex;
                if (i === t) r--, (t = t._nextRemoved);
                else if (((n = n._next), null == i.previousIndex)) r++;
                else {
                  o || (o = []);
                  var a = l - r,
                    s = u - r;
                  if (a != s) {
                    for (var c = 0; c < a; c++) {
                      var d = c < o.length ? o[c] : (o[c] = 0),
                        f = d + c;
                      s <= f && f < a && (o[c] = d + 1);
                    }
                    o[i.previousIndex] = s - a;
                  }
                }
                l !== u && e(i, l, u);
              }
            }),
            (e.prototype.forEachPreviousItem = function (e) {
              var n;
              for (n = this._previousItHead; null !== n; n = n._nextPrevious)
                e(n);
            }),
            (e.prototype.forEachAddedItem = function (e) {
              var n;
              for (n = this._additionsHead; null !== n; n = n._nextAdded) e(n);
            }),
            (e.prototype.forEachMovedItem = function (e) {
              var n;
              for (n = this._movesHead; null !== n; n = n._nextMoved) e(n);
            }),
            (e.prototype.forEachRemovedItem = function (e) {
              var n;
              for (n = this._removalsHead; null !== n; n = n._nextRemoved) e(n);
            }),
            (e.prototype.forEachIdentityChange = function (e) {
              var n;
              for (
                n = this._identityChangesHead;
                null !== n;
                n = n._nextIdentityChange
              )
                e(n);
            }),
            (e.prototype.diff = function (e) {
              if ((null == e && (e = []), !Tt(e)))
                throw new Error(
                  "Error trying to diff '" +
                    me(e) +
                    "'. Only arrays and iterables are allowed"
                );
              return this.check(e) ? this : null;
            }),
            (e.prototype.onDestroy = function () {}),
            (e.prototype.check = function (e) {
              var n = this;
              this._reset();
              var t,
                r,
                o,
                i = this._itHead,
                l = !1;
              if (Array.isArray(e)) {
                this.length = e.length;
                for (var u = 0; u < this.length; u++)
                  (o = this._trackByFn(u, (r = e[u]))),
                    null !== i && ye(i.trackById, o)
                      ? (l && (i = this._verifyReinsertion(i, r, o, u)),
                        ye(i.item, r) || this._addIdentityChange(i, r))
                      : ((i = this._mismatch(i, r, o, u)), (l = !0)),
                    (i = i._next);
              } else
                (t = 0),
                  (function (e, n) {
                    if (Array.isArray(e))
                      for (var t = 0; t < e.length; t++) n(e[t]);
                    else
                      for (
                        var r = e[ve()](), o = void 0;
                        !(o = r.next()).done;

                      )
                        n(o.value);
                  })(e, function (e) {
                    (o = n._trackByFn(t, e)),
                      null !== i && ye(i.trackById, o)
                        ? (l && (i = n._verifyReinsertion(i, e, o, t)),
                          ye(i.item, e) || n._addIdentityChange(i, e))
                        : ((i = n._mismatch(i, e, o, t)), (l = !0)),
                      (i = i._next),
                      t++;
                  }),
                  (this.length = t);
              return this._truncate(i), (this.collection = e), this.isDirty;
            }),
            Object.defineProperty(e.prototype, "isDirty", {
              get: function () {
                return (
                  null !== this._additionsHead ||
                  null !== this._movesHead ||
                  null !== this._removalsHead ||
                  null !== this._identityChangesHead
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype._reset = function () {
              if (this.isDirty) {
                var e = void 0,
                  n = void 0;
                for (
                  e = this._previousItHead = this._itHead;
                  null !== e;
                  e = e._next
                )
                  e._nextPrevious = e._next;
                for (e = this._additionsHead; null !== e; e = e._nextAdded)
                  e.previousIndex = e.currentIndex;
                for (
                  this._additionsHead = this._additionsTail = null,
                    e = this._movesHead;
                  null !== e;
                  e = n
                )
                  (e.previousIndex = e.currentIndex), (n = e._nextMoved);
                (this._movesHead = this._movesTail = null),
                  (this._removalsHead = this._removalsTail = null),
                  (this._identityChangesHead = this._identityChangesTail =
                    null);
              }
            }),
            (e.prototype._mismatch = function (e, n, t, r) {
              var o;
              return (
                null === e
                  ? (o = this._itTail)
                  : ((o = e._prev), this._remove(e)),
                null !==
                (e =
                  null === this._linkedRecords
                    ? null
                    : this._linkedRecords.get(t, r))
                  ? (ye(e.item, n) || this._addIdentityChange(e, n),
                    this._moveAfter(e, o, r))
                  : null !==
                    (e =
                      null === this._unlinkedRecords
                        ? null
                        : this._unlinkedRecords.get(t, null))
                  ? (ye(e.item, n) || this._addIdentityChange(e, n),
                    this._reinsertAfter(e, o, r))
                  : (e = this._addAfter(new Mt(n, t), o, r)),
                e
              );
            }),
            (e.prototype._verifyReinsertion = function (e, n, t, r) {
              var o =
                null === this._unlinkedRecords
                  ? null
                  : this._unlinkedRecords.get(t, null);
              return (
                null !== o
                  ? (e = this._reinsertAfter(o, e._prev, r))
                  : e.currentIndex != r &&
                    ((e.currentIndex = r), this._addToMoves(e, r)),
                e
              );
            }),
            (e.prototype._truncate = function (e) {
              for (; null !== e; ) {
                var n = e._next;
                this._addToRemovals(this._unlink(e)), (e = n);
              }
              null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
                null !== this._additionsTail &&
                  (this._additionsTail._nextAdded = null),
                null !== this._movesTail && (this._movesTail._nextMoved = null),
                null !== this._itTail && (this._itTail._next = null),
                null !== this._removalsTail &&
                  (this._removalsTail._nextRemoved = null),
                null !== this._identityChangesTail &&
                  (this._identityChangesTail._nextIdentityChange = null);
            }),
            (e.prototype._reinsertAfter = function (e, n, t) {
              null !== this._unlinkedRecords && this._unlinkedRecords.remove(e);
              var r = e._prevRemoved,
                o = e._nextRemoved;
              return (
                null === r ? (this._removalsHead = o) : (r._nextRemoved = o),
                null === o ? (this._removalsTail = r) : (o._prevRemoved = r),
                this._insertAfter(e, n, t),
                this._addToMoves(e, t),
                e
              );
            }),
            (e.prototype._moveAfter = function (e, n, t) {
              return (
                this._unlink(e),
                this._insertAfter(e, n, t),
                this._addToMoves(e, t),
                e
              );
            }),
            (e.prototype._addAfter = function (e, n, t) {
              return (
                this._insertAfter(e, n, t),
                (this._additionsTail =
                  null === this._additionsTail
                    ? (this._additionsHead = e)
                    : (this._additionsTail._nextAdded = e)),
                e
              );
            }),
            (e.prototype._insertAfter = function (e, n, t) {
              var r = null === n ? this._itHead : n._next;
              return (
                (e._next = r),
                (e._prev = n),
                null === r ? (this._itTail = e) : (r._prev = e),
                null === n ? (this._itHead = e) : (n._next = e),
                null === this._linkedRecords &&
                  (this._linkedRecords = new Dt()),
                this._linkedRecords.put(e),
                (e.currentIndex = t),
                e
              );
            }),
            (e.prototype._remove = function (e) {
              return this._addToRemovals(this._unlink(e));
            }),
            (e.prototype._unlink = function (e) {
              null !== this._linkedRecords && this._linkedRecords.remove(e);
              var n = e._prev,
                t = e._next;
              return (
                null === n ? (this._itHead = t) : (n._next = t),
                null === t ? (this._itTail = n) : (t._prev = n),
                e
              );
            }),
            (e.prototype._addToMoves = function (e, n) {
              return e.previousIndex === n
                ? e
                : ((this._movesTail =
                    null === this._movesTail
                      ? (this._movesHead = e)
                      : (this._movesTail._nextMoved = e)),
                  e);
            }),
            (e.prototype._addToRemovals = function (e) {
              return (
                null === this._unlinkedRecords &&
                  (this._unlinkedRecords = new Dt()),
                this._unlinkedRecords.put(e),
                (e.currentIndex = null),
                (e._nextRemoved = null),
                null === this._removalsTail
                  ? ((this._removalsTail = this._removalsHead = e),
                    (e._prevRemoved = null))
                  : ((e._prevRemoved = this._removalsTail),
                    (this._removalsTail = this._removalsTail._nextRemoved = e)),
                e
              );
            }),
            (e.prototype._addIdentityChange = function (e, n) {
              return (
                (e.item = n),
                (this._identityChangesTail =
                  null === this._identityChangesTail
                    ? (this._identityChangesHead = e)
                    : (this._identityChangesTail._nextIdentityChange = e)),
                e
              );
            }),
            e
          );
        })(),
        Mt = function (e, n) {
          (this.item = e),
            (this.trackById = n),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        },
        Rt = (function () {
          function e() {
            (this._head = null), (this._tail = null);
          }
          return (
            (e.prototype.add = function (e) {
              null === this._head
                ? ((this._head = this._tail = e),
                  (e._nextDup = null),
                  (e._prevDup = null))
                : ((this._tail._nextDup = e),
                  (e._prevDup = this._tail),
                  (e._nextDup = null),
                  (this._tail = e));
            }),
            (e.prototype.get = function (e, n) {
              var t;
              for (t = this._head; null !== t; t = t._nextDup)
                if ((null === n || n <= t.currentIndex) && ye(t.trackById, e))
                  return t;
              return null;
            }),
            (e.prototype.remove = function (e) {
              var n = e._prevDup,
                t = e._nextDup;
              return (
                null === n ? (this._head = t) : (n._nextDup = t),
                null === t ? (this._tail = n) : (t._prevDup = n),
                null === this._head
              );
            }),
            e
          );
        })(),
        Dt = (function () {
          function e() {
            this.map = new Map();
          }
          return (
            (e.prototype.put = function (e) {
              var n = e.trackById,
                t = this.map.get(n);
              t || ((t = new Rt()), this.map.set(n, t)), t.add(e);
            }),
            (e.prototype.get = function (e, n) {
              var t = this.map.get(e);
              return t ? t.get(e, n) : null;
            }),
            (e.prototype.remove = function (e) {
              var n = e.trackById;
              return this.map.get(n).remove(e) && this.map.delete(n), e;
            }),
            Object.defineProperty(e.prototype, "isEmpty", {
              get: function () {
                return 0 === this.map.size;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.clear = function () {
              this.map.clear();
            }),
            e
          );
        })();
      function Pt(e, n, t) {
        var r = e.previousIndex;
        if (null === r) return r;
        var o = 0;
        return t && r < t.length && (o = t[r]), r + n + o;
      }
      var jt = (function () {
          function e() {}
          return (
            (e.prototype.supports = function (e) {
              return e instanceof Map || Nt(e);
            }),
            (e.prototype.create = function () {
              return new Ht();
            }),
            e
          );
        })(),
        Ht = (function () {
          function e() {
            (this._records = new Map()),
              (this._mapHead = null),
              (this._appendAfter = null),
              (this._previousMapHead = null),
              (this._changesHead = null),
              (this._changesTail = null),
              (this._additionsHead = null),
              (this._additionsTail = null),
              (this._removalsHead = null),
              (this._removalsTail = null);
          }
          return (
            Object.defineProperty(e.prototype, "isDirty", {
              get: function () {
                return (
                  null !== this._additionsHead ||
                  null !== this._changesHead ||
                  null !== this._removalsHead
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.forEachItem = function (e) {
              var n;
              for (n = this._mapHead; null !== n; n = n._next) e(n);
            }),
            (e.prototype.forEachPreviousItem = function (e) {
              var n;
              for (n = this._previousMapHead; null !== n; n = n._nextPrevious)
                e(n);
            }),
            (e.prototype.forEachChangedItem = function (e) {
              var n;
              for (n = this._changesHead; null !== n; n = n._nextChanged) e(n);
            }),
            (e.prototype.forEachAddedItem = function (e) {
              var n;
              for (n = this._additionsHead; null !== n; n = n._nextAdded) e(n);
            }),
            (e.prototype.forEachRemovedItem = function (e) {
              var n;
              for (n = this._removalsHead; null !== n; n = n._nextRemoved) e(n);
            }),
            (e.prototype.diff = function (e) {
              if (e) {
                if (!(e instanceof Map || Nt(e)))
                  throw new Error(
                    "Error trying to diff '" +
                      me(e) +
                      "'. Only maps and objects are allowed"
                  );
              } else e = new Map();
              return this.check(e) ? this : null;
            }),
            (e.prototype.onDestroy = function () {}),
            (e.prototype.check = function (e) {
              var n = this;
              this._reset();
              var t = this._mapHead;
              if (
                ((this._appendAfter = null),
                this._forEach(e, function (e, r) {
                  if (t && t.key === r)
                    n._maybeAddToChanges(t, e),
                      (n._appendAfter = t),
                      (t = t._next);
                  else {
                    var o = n._getOrCreateRecordForKey(r, e);
                    t = n._insertBeforeOrAppend(t, o);
                  }
                }),
                t)
              ) {
                t._prev && (t._prev._next = null), (this._removalsHead = t);
                for (var r = t; null !== r; r = r._nextRemoved)
                  r === this._mapHead && (this._mapHead = null),
                    this._records.delete(r.key),
                    (r._nextRemoved = r._next),
                    (r.previousValue = r.currentValue),
                    (r.currentValue = null),
                    (r._prev = null),
                    (r._next = null);
              }
              return (
                this._changesTail && (this._changesTail._nextChanged = null),
                this._additionsTail && (this._additionsTail._nextAdded = null),
                this.isDirty
              );
            }),
            (e.prototype._insertBeforeOrAppend = function (e, n) {
              if (e) {
                var t = e._prev;
                return (
                  (n._next = e),
                  (n._prev = t),
                  (e._prev = n),
                  t && (t._next = n),
                  e === this._mapHead && (this._mapHead = n),
                  (this._appendAfter = e),
                  e
                );
              }
              return (
                this._appendAfter
                  ? ((this._appendAfter._next = n),
                    (n._prev = this._appendAfter))
                  : (this._mapHead = n),
                (this._appendAfter = n),
                null
              );
            }),
            (e.prototype._getOrCreateRecordForKey = function (e, n) {
              if (this._records.has(e)) {
                var t = this._records.get(e);
                this._maybeAddToChanges(t, n);
                var r = t._prev,
                  o = t._next;
                return (
                  r && (r._next = o),
                  o && (o._prev = r),
                  (t._next = null),
                  (t._prev = null),
                  t
                );
              }
              var i = new Lt(e);
              return (
                this._records.set(e, i),
                (i.currentValue = n),
                this._addToAdditions(i),
                i
              );
            }),
            (e.prototype._reset = function () {
              if (this.isDirty) {
                var e = void 0;
                for (
                  this._previousMapHead = this._mapHead,
                    e = this._previousMapHead;
                  null !== e;
                  e = e._next
                )
                  e._nextPrevious = e._next;
                for (e = this._changesHead; null !== e; e = e._nextChanged)
                  e.previousValue = e.currentValue;
                for (e = this._additionsHead; null != e; e = e._nextAdded)
                  e.previousValue = e.currentValue;
                (this._changesHead = this._changesTail = null),
                  (this._additionsHead = this._additionsTail = null),
                  (this._removalsHead = null);
              }
            }),
            (e.prototype._maybeAddToChanges = function (e, n) {
              ye(n, e.currentValue) ||
                ((e.previousValue = e.currentValue),
                (e.currentValue = n),
                this._addToChanges(e));
            }),
            (e.prototype._addToAdditions = function (e) {
              null === this._additionsHead
                ? (this._additionsHead = this._additionsTail = e)
                : ((this._additionsTail._nextAdded = e),
                  (this._additionsTail = e));
            }),
            (e.prototype._addToChanges = function (e) {
              null === this._changesHead
                ? (this._changesHead = this._changesTail = e)
                : ((this._changesTail._nextChanged = e),
                  (this._changesTail = e));
            }),
            (e.prototype._forEach = function (e, n) {
              e instanceof Map
                ? e.forEach(n)
                : Object.keys(e).forEach(function (t) {
                    return n(e[t], t);
                  });
            }),
            e
          );
        })(),
        Lt = function (e) {
          (this.key = e),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        },
        Vt = (function () {
          function e(e) {
            this.factories = e;
          }
          return (
            (e.create = function (n, t) {
              if (null != t) {
                var r = t.factories.slice();
                n = n.concat(r);
              }
              return new e(n);
            }),
            (e.extend = function (n) {
              return {
                provide: e,
                useFactory: function (t) {
                  if (!t)
                    throw new Error(
                      "Cannot extend IterableDiffers without a parent injector"
                    );
                  return e.create(n, t);
                },
                deps: [[e, new xe(), new Ee()]],
              };
            }),
            (e.prototype.find = function (e) {
              var n,
                t = this.factories.find(function (n) {
                  return n.supports(e);
                });
              if (null != t) return t;
              throw new Error(
                "Cannot find a differ supporting object '" +
                  e +
                  "' of type '" +
                  ((n = e).name || typeof n) +
                  "'"
              );
            }),
            (e.ngInjectableDef = le({
              providedIn: "root",
              factory: function () {
                return new e([new At()]);
              },
            })),
            e
          );
        })(),
        Bt = (function () {
          function e(e) {
            this.factories = e;
          }
          return (
            (e.create = function (n, t) {
              if (t) {
                var r = t.factories.slice();
                n = n.concat(r);
              }
              return new e(n);
            }),
            (e.extend = function (n) {
              return {
                provide: e,
                useFactory: function (t) {
                  if (!t)
                    throw new Error(
                      "Cannot extend KeyValueDiffers without a parent injector"
                    );
                  return e.create(n, t);
                },
                deps: [[e, new xe(), new Ee()]],
              };
            }),
            (e.prototype.find = function (e) {
              var n = this.factories.find(function (n) {
                return n.supports(e);
              });
              if (n) return n;
              throw new Error(
                "Cannot find a differ supporting object '" + e + "'"
              );
            }),
            e
          );
        })(),
        Ft = [new jt()],
        zt = new Vt([new At()]),
        Ut = new Bt(Ft),
        Zt = ut(null, "core", [
          { provide: En, useValue: "unknown" },
          { provide: st, deps: [Ie] },
          { provide: et, deps: [] },
          { provide: xn, deps: [] },
        ]),
        Wt = new ue("LocaleId");
      function Qt() {
        return zt;
      }
      function Yt() {
        return Ut;
      }
      function qt(e) {
        return e || "en-US";
      }
      var Gt = function (e) {},
        Kt = (function () {
          function e(e) {
            if (
              ((this.defaultDoc = e),
              (this.inertDocument =
                this.defaultDoc.implementation.createHTMLDocument(
                  "sanitization-inert"
                )),
              (this.inertBodyElement = this.inertDocument.body),
              null == this.inertBodyElement)
            ) {
              var n = this.inertDocument.createElement("html");
              this.inertDocument.appendChild(n),
                (this.inertBodyElement =
                  this.inertDocument.createElement("body")),
                n.appendChild(this.inertBodyElement);
            }
            (this.inertBodyElement.innerHTML =
              '<svg><g onload="this.parentNode.remove()"></g></svg>'),
              !this.inertBodyElement.querySelector ||
              this.inertBodyElement.querySelector("svg")
                ? ((this.inertBodyElement.innerHTML =
                    '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">'),
                  (this.getInertBodyElement =
                    this.inertBodyElement.querySelector &&
                    this.inertBodyElement.querySelector("svg img") &&
                    (function () {
                      try {
                        return !!window.DOMParser;
                      } catch (e) {
                        return !1;
                      }
                    })()
                      ? this.getInertBodyElement_DOMParser
                      : this.getInertBodyElement_InertDocument))
                : (this.getInertBodyElement = this.getInertBodyElement_XHR);
          }
          return (
            (e.prototype.getInertBodyElement_XHR = function (e) {
              e = "<body><remove></remove>" + e + "</body>";
              try {
                e = encodeURI(e);
              } catch (e) {
                return null;
              }
              var n = new XMLHttpRequest();
              (n.responseType = "document"),
                n.open("GET", "data:text/html;charset=utf-8," + e, !1),
                n.send(null);
              var t = n.response.body;
              return t.removeChild(t.firstChild), t;
            }),
            (e.prototype.getInertBodyElement_DOMParser = function (e) {
              e = "<body><remove></remove>" + e + "</body>";
              try {
                var n = new window.DOMParser().parseFromString(
                  e,
                  "text/html"
                ).body;
                return n.removeChild(n.firstChild), n;
              } catch (e) {
                return null;
              }
            }),
            (e.prototype.getInertBodyElement_InertDocument = function (e) {
              var n = this.inertDocument.createElement("template");
              return "content" in n
                ? ((n.innerHTML = e), n)
                : ((this.inertBodyElement.innerHTML = e),
                  this.defaultDoc.documentMode &&
                    this.stripCustomNsAttrs(this.inertBodyElement),
                  this.inertBodyElement);
            }),
            (e.prototype.stripCustomNsAttrs = function (e) {
              for (var n = e.attributes, t = n.length - 1; 0 < t; t--) {
                var r = n.item(t).name;
                ("xmlns:ns1" !== r && 0 !== r.indexOf("ns1:")) ||
                  e.removeAttribute(r);
              }
              for (var o = e.firstChild; o; )
                o.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(o),
                  (o = o.nextSibling);
            }),
            e
          );
        })(),
        Xt = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        Jt =
          /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function $t(e) {
        return (e = String(e)).match(Xt) || e.match(Jt)
          ? e
          : (it() &&
              console.warn(
                "WARNING: sanitizing unsafe URL value " +
                  e +
                  " (see http://g.co/ng/security#xss)"
              ),
            "unsafe:" + e);
      }
      function er(e) {
        var n,
          t,
          r = {};
        try {
          for (var o = s(e.split(",")), i = o.next(); !i.done; i = o.next())
            r[i.value] = !0;
        } catch (e) {
          n = { error: e };
        } finally {
          try {
            i && !i.done && (t = o.return) && t.call(o);
          } finally {
            if (n) throw n.error;
          }
        }
        return r;
      }
      function nr() {
        for (var e, n, t = [], r = 0; r < arguments.length; r++)
          t[r] = arguments[r];
        var o = {};
        try {
          for (var i = s(t), l = i.next(); !l.done; l = i.next()) {
            var u = l.value;
            for (var a in u) u.hasOwnProperty(a) && (o[a] = !0);
          }
        } catch (n) {
          e = { error: n };
        } finally {
          try {
            l && !l.done && (n = i.return) && n.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return o;
      }
      var tr,
        rr = er("area,br,col,hr,img,wbr"),
        or = er("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
        ir = er("rp,rt"),
        lr = nr(ir, or),
        ur = nr(
          rr,
          nr(
            or,
            er(
              "address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul"
            )
          ),
          nr(
            ir,
            er(
              "a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video"
            )
          ),
          lr
        ),
        ar = er("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
        sr = er("srcset"),
        cr = nr(
          ar,
          sr,
          er(
            "abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"
          )
        ),
        dr = (function () {
          function e() {
            (this.sanitizedSomething = !1), (this.buf = []);
          }
          return (
            (e.prototype.sanitizeChildren = function (e) {
              for (var n = e.firstChild; n; )
                if (
                  (n.nodeType === Node.ELEMENT_NODE
                    ? this.startElement(n)
                    : n.nodeType === Node.TEXT_NODE
                    ? this.chars(n.nodeValue)
                    : (this.sanitizedSomething = !0),
                  n.firstChild)
                )
                  n = n.firstChild;
                else
                  for (; n; ) {
                    n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
                    var t = this.checkClobberedElement(n, n.nextSibling);
                    if (t) {
                      n = t;
                      break;
                    }
                    n = this.checkClobberedElement(n, n.parentNode);
                  }
              return this.buf.join("");
            }),
            (e.prototype.startElement = function (e) {
              var n = e.nodeName.toLowerCase();
              if (ur.hasOwnProperty(n)) {
                this.buf.push("<"), this.buf.push(n);
                for (var t, r = e.attributes, o = 0; o < r.length; o++) {
                  var i = r.item(o),
                    l = i.name,
                    u = l.toLowerCase();
                  if (cr.hasOwnProperty(u)) {
                    var a = i.value;
                    ar[u] && (a = $t(a)),
                      sr[u] &&
                        ((t = a),
                        (a = (t = String(t))
                          .split(",")
                          .map(function (e) {
                            return $t(e.trim());
                          })
                          .join(", "))),
                      this.buf.push(" ", l, '="', hr(a), '"');
                  } else this.sanitizedSomething = !0;
                }
                this.buf.push(">");
              } else this.sanitizedSomething = !0;
            }),
            (e.prototype.endElement = function (e) {
              var n = e.nodeName.toLowerCase();
              ur.hasOwnProperty(n) &&
                !rr.hasOwnProperty(n) &&
                (this.buf.push("</"), this.buf.push(n), this.buf.push(">"));
            }),
            (e.prototype.chars = function (e) {
              this.buf.push(hr(e));
            }),
            (e.prototype.checkClobberedElement = function (e, n) {
              if (
                n &&
                (e.compareDocumentPosition(n) &
                  Node.DOCUMENT_POSITION_CONTAINED_BY) ===
                  Node.DOCUMENT_POSITION_CONTAINED_BY
              )
                throw new Error(
                  "Failed to sanitize html because the element is clobbered: " +
                    e.outerHTML
                );
              return n;
            }),
            e
          );
        })(),
        fr = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        pr = /([^\#-~ |!])/g;
      function hr(e) {
        return e
          .replace(/&/g, "&amp;")
          .replace(fr, function (e) {
            return (
              "&#" +
              (1024 * (e.charCodeAt(0) - 55296) +
                (e.charCodeAt(1) - 56320) +
                65536) +
              ";"
            );
          })
          .replace(pr, function (e) {
            return "&#" + e.charCodeAt(0) + ";";
          })
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      function vr(e) {
        return "content" in e &&
          (function (e) {
            return (
              e.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === e.nodeName
            );
          })(e)
          ? e.content
          : null;
      }
      var gr = new RegExp(
          "^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$",
          "g"
        ),
        yr = /^url\(([^)]+)\)$/,
        mr = (function (e) {
          return (
            (e[(e.NONE = 0)] = "NONE"),
            (e[(e.HTML = 1)] = "HTML"),
            (e[(e.STYLE = 2)] = "STYLE"),
            (e[(e.SCRIPT = 3)] = "SCRIPT"),
            (e[(e.URL = 4)] = "URL"),
            (e[(e.RESOURCE_URL = 5)] = "RESOURCE_URL"),
            e
          );
        })({}),
        br = function () {};
      function wr(e, n, t) {
        var r = e.state,
          o = 1792 & r;
        return o === n
          ? ((e.state = (-1793 & r) | t), (e.initIndex = -1), !0)
          : o === t;
      }
      function _r(e, n, t) {
        return (
          (1792 & e.state) === n &&
          e.initIndex <= t &&
          ((e.initIndex = t + 1), !0)
        );
      }
      function Er(e, n) {
        return e.nodes[n];
      }
      function Cr(e, n) {
        return e.nodes[n];
      }
      function xr(e, n) {
        return e.nodes[n];
      }
      function Sr(e, n) {
        return e.nodes[n];
      }
      function kr(e, n) {
        return e.nodes[n];
      }
      var Tr = {
        setCurrentNode: void 0,
        createRootView: void 0,
        createEmbeddedView: void 0,
        createComponentView: void 0,
        createNgModuleRef: void 0,
        overrideProvider: void 0,
        overrideComponentView: void 0,
        clearOverrides: void 0,
        checkAndUpdateView: void 0,
        checkNoChangesView: void 0,
        destroyView: void 0,
        resolveDep: void 0,
        createDebugContext: void 0,
        handleEvent: void 0,
        updateDirectives: void 0,
        updateRenderer: void 0,
        dirtyParentQueries: void 0,
      };
      function Nr(e, n, t, r) {
        var o =
          "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '" +
          n +
          "'. Current value: '" +
          t +
          "'.";
        return (
          r &&
            (o +=
              " It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?"),
          (function (e, n) {
            var t = new Error(e);
            return Ar(t, n), t;
          })(o, e)
        );
      }
      function Ar(e, n) {
        (e[Ke] = n), (e[Je] = n.logError.bind(n));
      }
      function Ir(e) {
        return new Error(
          "ViewDestroyedError: Attempt to use a destroyed view: " + e
        );
      }
      var Or = function () {},
        Mr = new Map();
      function Rr(e) {
        var n = Mr.get(e);
        return n || ((n = me(e) + "_" + Mr.size), Mr.set(e, n)), n;
      }
      var Dr = "$$undefined",
        Pr = "$$empty",
        jr = 0;
      function Hr(e, n, t, r) {
        return !(!(2 & e.state) && ye(e.oldValues[n.bindingIndex + t], r));
      }
      function Lr(e, n, t, r) {
        return !!Hr(e, n, t, r) && ((e.oldValues[n.bindingIndex + t] = r), !0);
      }
      function Vr(e, n, t, r) {
        var o = e.oldValues[n.bindingIndex + t];
        if (1 & e.state || !xt(o, r)) {
          var i = n.bindings[t].name;
          throw Nr(
            Tr.createDebugContext(e, n.nodeIndex),
            i + ": " + o,
            i + ": " + r,
            0 != (1 & e.state)
          );
        }
      }
      function Br(e) {
        for (var n = e; n; )
          2 & n.def.flags && (n.state |= 8),
            (n = n.viewContainerParent || n.parent);
      }
      function Fr(e, n) {
        for (var t = e; t && t !== n; )
          (t.state |= 64), (t = t.viewContainerParent || t.parent);
      }
      function zr(e, n, t, r) {
        try {
          return (
            Br(33554432 & e.def.nodes[n].flags ? Cr(e, n).componentView : e),
            Tr.handleEvent(e, n, t, r)
          );
        } catch (n) {
          e.root.errorHandler.handleError(n);
        }
      }
      function Ur(e) {
        return e.parent ? Cr(e.parent, e.parentNodeDef.nodeIndex) : null;
      }
      function Zr(e) {
        return e.parent ? e.parentNodeDef.parent : null;
      }
      function Wr(e, n) {
        switch (201347067 & n.flags) {
          case 1:
            return Cr(e, n.nodeIndex).renderElement;
          case 2:
            return Er(e, n.nodeIndex).renderText;
        }
      }
      function Qr(e) {
        return !!e.parent && !!(32768 & e.parentNodeDef.flags);
      }
      function Yr(e) {
        return !(!e.parent || 32768 & e.parentNodeDef.flags);
      }
      function qr(e) {
        var n = {},
          t = 0,
          r = {};
        return (
          e &&
            e.forEach(function (e) {
              var o = c(e, 2),
                i = o[0],
                l = o[1];
              "number" == typeof i
                ? ((n[i] = l),
                  (t |= (function (e) {
                    return 1 << e % 32;
                  })(i)))
                : (r[i] = l);
            }),
          { matchedQueries: n, references: r, matchedQueryIds: t }
        );
      }
      function Gr(e, n) {
        return e.map(function (e) {
          var t, r, o;
          return (
            Array.isArray(e)
              ? ((o = (t = c(e, 2))[0]), (r = t[1]))
              : ((o = 0), (r = e)),
            r &&
              ("function" == typeof r || "object" == typeof r) &&
              n &&
              Object.defineProperty(r, Se, { value: n, configurable: !0 }),
            { flags: o, token: r, tokenKey: Rr(r) }
          );
        });
      }
      function Kr(e, n, t) {
        var r = t.renderParent;
        return r
          ? 0 == (1 & r.flags) ||
            0 == (33554432 & r.flags) ||
            (r.element.componentRendererType &&
              r.element.componentRendererType.encapsulation === qe.Native)
            ? Cr(e, t.renderParent.nodeIndex).renderElement
            : void 0
          : n;
      }
      var Xr = new WeakMap();
      function Jr(e) {
        var n = Xr.get(e);
        return (
          n ||
            (((n = e(function () {
              return Or;
            })).factory = e),
            Xr.set(e, n)),
          n
        );
      }
      function $r(e, n, t, r, o) {
        3 === n && (t = e.renderer.parentNode(Wr(e, e.def.lastRenderRootNode))),
          eo(e, n, 0, e.def.nodes.length - 1, t, r, o);
      }
      function eo(e, n, t, r, o, i, l) {
        for (var u = t; u <= r; u++) {
          var a = e.def.nodes[u];
          11 & a.flags && to(e, a, n, o, i, l), (u += a.childCount);
        }
      }
      function no(e, n, t, r, o, i) {
        for (var l = e; l && !Qr(l); ) l = l.parent;
        for (
          var u = l.parent,
            a = Zr(l),
            s = a.nodeIndex + a.childCount,
            c = a.nodeIndex + 1;
          c <= s;
          c++
        ) {
          var d = u.def.nodes[c];
          d.ngContentIndex === n && to(u, d, t, r, o, i), (c += d.childCount);
        }
        if (!u.parent) {
          var f = e.root.projectableNodes[n];
          if (f) for (c = 0; c < f.length; c++) ro(e, f[c], t, r, o, i);
        }
      }
      function to(e, n, t, r, o, i) {
        if (8 & n.flags) no(e, n.ngContent.index, t, r, o, i);
        else {
          var l = Wr(e, n);
          if (
            (3 === t && 33554432 & n.flags && 48 & n.bindingFlags
              ? (16 & n.bindingFlags && ro(e, l, t, r, o, i),
                32 & n.bindingFlags &&
                  ro(Cr(e, n.nodeIndex).componentView, l, t, r, o, i))
              : ro(e, l, t, r, o, i),
            16777216 & n.flags)
          )
            for (
              var u = Cr(e, n.nodeIndex).viewContainer._embeddedViews, a = 0;
              a < u.length;
              a++
            )
              $r(u[a], t, r, o, i);
          1 & n.flags &&
            !n.element.name &&
            eo(e, t, n.nodeIndex + 1, n.nodeIndex + n.childCount, r, o, i);
        }
      }
      function ro(e, n, t, r, o, i) {
        var l = e.renderer;
        switch (t) {
          case 1:
            l.appendChild(r, n);
            break;
          case 2:
            l.insertBefore(r, n, o);
            break;
          case 3:
            l.removeChild(r, n);
            break;
          case 0:
            i.push(n);
        }
      }
      var oo = /^:([^:]+):(.+)$/;
      function io(e) {
        if (":" === e[0]) {
          var n = e.match(oo);
          return [n[1], n[2]];
        }
        return ["", e];
      }
      function lo(e) {
        for (var n = 0, t = 0; t < e.length; t++) n |= e[t].flags;
        return n;
      }
      function uo(e, n, t, r, o, i, l, u, a, s, d, f) {
        var p;
        void 0 === l && (l = []), s || (s = Or);
        var h = qr(t),
          v = h.matchedQueries,
          g = h.references,
          y = h.matchedQueryIds,
          m = null,
          b = null;
        i && ((m = (p = c(io(i), 2))[0]), (b = p[1])), (u = u || []);
        for (var w = new Array(u.length), _ = 0; _ < u.length; _++) {
          var E = c(u[_], 3),
            C = E[0],
            x = E[2],
            S = c(io(E[1]), 2),
            k = S[0],
            T = S[1],
            N = void 0,
            A = void 0;
          switch (15 & C) {
            case 4:
              A = x;
              break;
            case 1:
            case 8:
              N = x;
          }
          w[_] = {
            flags: C,
            ns: k,
            name: T,
            nonMinifiedName: T,
            securityContext: N,
            suffix: A,
          };
        }
        a = a || [];
        var I = new Array(a.length);
        for (_ = 0; _ < a.length; _++) {
          var O = c(a[_], 2);
          I[_] = { type: 0, target: O[0], eventName: O[1], propName: null };
        }
        var M = (l = l || []).map(function (e) {
          var n = c(e, 2),
            t = n[1],
            r = c(io(n[0]), 2);
          return [r[0], r[1], t];
        });
        return (
          (f = (function (e) {
            if (e && e.id === Dr) {
              var n =
                (null != e.encapsulation && e.encapsulation !== qe.None) ||
                e.styles.length ||
                Object.keys(e.data).length;
              e.id = n ? "c" + jr++ : Pr;
            }
            return e && e.id === Pr && (e = null), e || null;
          })(f)),
          d && (n |= 33554432),
          {
            nodeIndex: -1,
            parent: null,
            renderParent: null,
            bindingIndex: -1,
            outputIndex: -1,
            checkIndex: e,
            flags: (n |= 1),
            childFlags: 0,
            directChildFlags: 0,
            childMatchedQueries: 0,
            matchedQueries: v,
            matchedQueryIds: y,
            references: g,
            ngContentIndex: r,
            childCount: o,
            bindings: w,
            bindingFlags: lo(w),
            outputs: I,
            element: {
              ns: m,
              name: b,
              attrs: M,
              template: null,
              componentProvider: null,
              componentView: d || null,
              componentRendererType: f,
              publicProviders: null,
              allProviders: null,
              handleEvent: s || Or,
            },
            provider: null,
            text: null,
            query: null,
            ngContent: null,
          }
        );
      }
      function ao(e, n, t) {
        var r,
          o = t.element,
          i = e.root.selectorOrNode,
          l = e.renderer;
        if (e.parent || !i) {
          r = o.name ? l.createElement(o.name, o.ns) : l.createComment("");
          var u = Kr(e, n, t);
          u && l.appendChild(u, r);
        } else r = l.selectRootElement(i);
        if (o.attrs)
          for (var a = 0; a < o.attrs.length; a++) {
            var s = c(o.attrs[a], 3);
            l.setAttribute(r, s[1], s[2], s[0]);
          }
        return r;
      }
      function so(e, n, t, r) {
        for (var o = 0; o < t.outputs.length; o++) {
          var i = t.outputs[o],
            l = co(
              e,
              t.nodeIndex,
              ((d = i.eventName), (c = i.target) ? c + ":" + d : d)
            ),
            u = i.target,
            a = e;
          "component" === i.target && ((u = null), (a = n));
          var s = a.renderer.listen(u || r, i.eventName, l);
          e.disposables[t.outputIndex + o] = s;
        }
        var c, d;
      }
      function co(e, n, t) {
        return function (r) {
          return zr(e, n, t, r);
        };
      }
      function fo(e, n, t, r) {
        if (!Lr(e, n, t, r)) return !1;
        var o = n.bindings[t],
          i = Cr(e, n.nodeIndex),
          l = i.renderElement,
          u = o.name;
        switch (15 & o.flags) {
          case 1:
            !(function (e, n, t, r, o, i) {
              var l = n.securityContext,
                u = l ? e.root.sanitizer.sanitize(l, i) : i;
              u = null != u ? u.toString() : null;
              var a = e.renderer;
              null != i
                ? a.setAttribute(t, o, u, r)
                : a.removeAttribute(t, o, r);
            })(e, o, l, o.ns, u, r);
            break;
          case 2:
            !(function (e, n, t, r) {
              var o = e.renderer;
              r ? o.addClass(n, t) : o.removeClass(n, t);
            })(e, l, u, r);
            break;
          case 4:
            !(function (e, n, t, r, o) {
              var i = e.root.sanitizer.sanitize(mr.STYLE, o);
              if (null != i) {
                i = i.toString();
                var l = n.suffix;
                null != l && (i += l);
              } else i = null;
              var u = e.renderer;
              null != i ? u.setStyle(t, r, i) : u.removeStyle(t, r);
            })(e, o, l, u, r);
            break;
          case 8:
            !(function (e, n, t, r, o) {
              var i = n.securityContext,
                l = i ? e.root.sanitizer.sanitize(i, o) : o;
              e.renderer.setProperty(t, r, l);
            })(
              33554432 & n.flags && 32 & o.flags ? i.componentView : e,
              o,
              l,
              u,
              r
            );
        }
        return !0;
      }
      var po = new Object(),
        ho = Rr(Ie),
        vo = Rr(Ne),
        go = Rr(Ln);
      function yo(e, n, t, r) {
        return (
          (t = we(t)),
          { index: -1, deps: Gr(r, me(n)), flags: e, token: n, value: t }
        );
      }
      function mo(e, n, t) {
        void 0 === t && (t = Ie.THROW_IF_NOT_FOUND);
        var r,
          o,
          i = We(e);
        try {
          if (8 & n.flags) return n.token;
          if ((2 & n.flags && (t = null), 1 & n.flags))
            return e._parent.get(n.token, t);
          var l = n.tokenKey;
          switch (l) {
            case ho:
            case vo:
            case go:
              return e;
          }
          var u = e._def.providersByKey[l];
          if (u) {
            var a = e._providers[u.index];
            return (
              void 0 === a && (a = e._providers[u.index] = bo(e, u)),
              a === po ? void 0 : a
            );
          }
          if (
            n.token.ngInjectableDef &&
            ((r = e),
            null != (o = n.token.ngInjectableDef).providedIn &&
              ((function (e, n) {
                return e._def.modules.indexOf(o.providedIn) > -1;
              })(r) ||
                ("root" === o.providedIn && r._def.isRoot)))
          ) {
            var s = e._providers.length;
            return (
              (e._def.providersByKey[n.tokenKey] = {
                flags: 5120,
                value: n.token.ngInjectableDef.factory,
                deps: [],
                index: s,
                token: n.token,
              }),
              (e._providers[s] = po),
              (e._providers[s] = bo(e, e._def.providersByKey[n.tokenKey]))
            );
          }
          return 4 & n.flags ? t : e._parent.get(n.token, t);
        } finally {
          We(i);
        }
      }
      function bo(e, n) {
        var t;
        switch (201347067 & n.flags) {
          case 512:
            t = (function (e, n, t) {
              var r = t.length;
              switch (r) {
                case 0:
                  return new n();
                case 1:
                  return new n(mo(e, t[0]));
                case 2:
                  return new n(mo(e, t[0]), mo(e, t[1]));
                case 3:
                  return new n(mo(e, t[0]), mo(e, t[1]), mo(e, t[2]));
                default:
                  for (var o = new Array(r), i = 0; i < r; i++)
                    o[i] = mo(e, t[i]);
                  return new (n.bind.apply(n, d([void 0], o)))();
              }
            })(e, n.value, n.deps);
            break;
          case 1024:
            t = (function (e, n, t) {
              var r = t.length;
              switch (r) {
                case 0:
                  return n();
                case 1:
                  return n(mo(e, t[0]));
                case 2:
                  return n(mo(e, t[0]), mo(e, t[1]));
                case 3:
                  return n(mo(e, t[0]), mo(e, t[1]), mo(e, t[2]));
                default:
                  for (var o = Array(r), i = 0; i < r; i++) o[i] = mo(e, t[i]);
                  return n.apply(void 0, d(o));
              }
            })(e, n.value, n.deps);
            break;
          case 2048:
            t = mo(e, n.deps[0]);
            break;
          case 256:
            t = n.value;
        }
        return (
          t === po ||
            null == t ||
            "object" != typeof t ||
            131072 & n.flags ||
            "function" != typeof t.ngOnDestroy ||
            (n.flags |= 131072),
          void 0 === t ? po : t
        );
      }
      function wo(e, n) {
        var t = e.viewContainer._embeddedViews;
        if (((null == n || n >= t.length) && (n = t.length - 1), n < 0))
          return null;
        var r = t[n];
        return (
          (r.viewContainerParent = null),
          xo(t, n),
          Tr.dirtyParentQueries(r),
          Eo(r),
          r
        );
      }
      function _o(e, n, t) {
        var r = n ? Wr(n, n.def.lastRenderRootNode) : e.renderElement;
        $r(t, 2, t.renderer.parentNode(r), t.renderer.nextSibling(r), void 0);
      }
      function Eo(e) {
        $r(e, 3, null, null, void 0);
      }
      function Co(e, n, t) {
        n >= e.length ? e.push(t) : e.splice(n, 0, t);
      }
      function xo(e, n) {
        n >= e.length - 1 ? e.pop() : e.splice(n, 1);
      }
      var So = new Object(),
        ko = (function (e) {
          function n(n, t, r, o, i, l) {
            var u = e.call(this) || this;
            return (
              (u.selector = n),
              (u.componentType = t),
              (u._inputs = o),
              (u._outputs = i),
              (u.ngContentSelectors = l),
              (u.viewDefFactory = r),
              u
            );
          }
          return (
            o(n, e),
            Object.defineProperty(n.prototype, "inputs", {
              get: function () {
                var e = [],
                  n = this._inputs;
                for (var t in n) e.push({ propName: t, templateName: n[t] });
                return e;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(n.prototype, "outputs", {
              get: function () {
                var e = [];
                for (var n in this._outputs)
                  e.push({ propName: n, templateName: this._outputs[n] });
                return e;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (n.prototype.create = function (e, n, t, r) {
              if (!r) throw new Error("ngModule should be provided");
              var o = Jr(this.viewDefFactory),
                i = o.nodes[0].element.componentProvider.nodeIndex,
                l = Tr.createRootView(e, n || [], t, o, r, So),
                u = xr(l, i).instance;
              return (
                t &&
                  l.renderer.setAttribute(
                    Cr(l, 0).renderElement,
                    "ng-version",
                    Ge.full
                  ),
                new To(l, new Oo(l), u)
              );
            }),
            n
          );
        })(An),
        To = (function (e) {
          function n(n, t, r) {
            var o = e.call(this) || this;
            return (
              (o._view = n),
              (o._viewRef = t),
              (o._component = r),
              (o._elDef = o._view.def.nodes[0]),
              (o.hostView = t),
              (o.changeDetectorRef = t),
              (o.instance = r),
              o
            );
          }
          return (
            o(n, e),
            Object.defineProperty(n.prototype, "location", {
              get: function () {
                return new gt(
                  Cr(this._view, this._elDef.nodeIndex).renderElement
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(n.prototype, "injector", {
              get: function () {
                return new Po(this._view, this._elDef);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(n.prototype, "componentType", {
              get: function () {
                return this._component.constructor;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (n.prototype.destroy = function () {
              this._viewRef.destroy();
            }),
            (n.prototype.onDestroy = function (e) {
              this._viewRef.onDestroy(e);
            }),
            n
          );
        })(Nn);
      function No(e, n, t) {
        return new Ao(e, n, t);
      }
      var Ao = (function () {
        function e(e, n, t) {
          (this._view = e),
            (this._elDef = n),
            (this._data = t),
            (this._embeddedViews = []);
        }
        return (
          Object.defineProperty(e.prototype, "element", {
            get: function () {
              return new gt(this._data.renderElement);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "injector", {
            get: function () {
              return new Po(this._view, this._elDef);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "parentInjector", {
            get: function () {
              for (var e = this._view, n = this._elDef.parent; !n && e; )
                (n = Zr(e)), (e = e.parent);
              return e ? new Po(e, n) : new Po(this._view, null);
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.clear = function () {
            for (var e = this._embeddedViews.length - 1; e >= 0; e--) {
              var n = wo(this._data, e);
              Tr.destroyView(n);
            }
          }),
          (e.prototype.get = function (e) {
            var n = this._embeddedViews[e];
            if (n) {
              var t = new Oo(n);
              return t.attachToViewContainerRef(this), t;
            }
            return null;
          }),
          Object.defineProperty(e.prototype, "length", {
            get: function () {
              return this._embeddedViews.length;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.createEmbeddedView = function (e, n, t) {
            var r = e.createEmbeddedView(n || {});
            return this.insert(r, t), r;
          }),
          (e.prototype.createComponent = function (e, n, t, r, o) {
            var i = t || this.parentInjector;
            o || e instanceof Hn || (o = i.get(Ln));
            var l = e.create(i, r, void 0, o);
            return this.insert(l.hostView, n), l;
          }),
          (e.prototype.insert = function (e, n) {
            if (e.destroyed)
              throw new Error(
                "Cannot insert a destroyed View in a ViewContainer!"
              );
            var t,
              r,
              o,
              i,
              l = e;
            return (
              (o = l._view),
              (i = (t = this._data).viewContainer._embeddedViews),
              (null !== (r = n) && void 0 !== r) || (r = i.length),
              (o.viewContainerParent = this._view),
              Co(i, r, o),
              (function (e, n) {
                var t = Ur(n);
                if (t && t !== e && !(16 & n.state)) {
                  n.state |= 16;
                  var r = t.template._projectedViews;
                  r || (r = t.template._projectedViews = []),
                    r.push(n),
                    (function (e, t) {
                      if (!(4 & t.flags)) {
                        (n.parent.def.nodeFlags |= 4), (t.flags |= 4);
                        for (var r = t.parent; r; )
                          (r.childFlags |= 4), (r = r.parent);
                      }
                    })(0, n.parentNodeDef);
                }
              })(t, o),
              Tr.dirtyParentQueries(o),
              _o(t, r > 0 ? i[r - 1] : null, o),
              l.attachToViewContainerRef(this),
              e
            );
          }),
          (e.prototype.move = function (e, n) {
            if (e.destroyed)
              throw new Error(
                "Cannot move a destroyed View in a ViewContainer!"
              );
            var t,
              r,
              o,
              i,
              l,
              u = this._embeddedViews.indexOf(e._view);
            return (
              (o = n),
              (l = (i = (t = this._data).viewContainer._embeddedViews)[
                (r = u)
              ]),
              xo(i, r),
              null == o && (o = i.length),
              Co(i, o, l),
              Tr.dirtyParentQueries(l),
              Eo(l),
              _o(t, o > 0 ? i[o - 1] : null, l),
              e
            );
          }),
          (e.prototype.indexOf = function (e) {
            return this._embeddedViews.indexOf(e._view);
          }),
          (e.prototype.remove = function (e) {
            var n = wo(this._data, e);
            n && Tr.destroyView(n);
          }),
          (e.prototype.detach = function (e) {
            var n = wo(this._data, e);
            return n ? new Oo(n) : null;
          }),
          e
        );
      })();
      function Io(e) {
        return new Oo(e);
      }
      var Oo = (function () {
        function e(e) {
          (this._view = e),
            (this._viewContainerRef = null),
            (this._appRef = null);
        }
        return (
          Object.defineProperty(e.prototype, "rootNodes", {
            get: function () {
              return $r(this._view, 0, void 0, void 0, (e = [])), e;
              var e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "context", {
            get: function () {
              return this._view.context;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "destroyed", {
            get: function () {
              return 0 != (128 & this._view.state);
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.markForCheck = function () {
            Br(this._view);
          }),
          (e.prototype.detach = function () {
            this._view.state &= -5;
          }),
          (e.prototype.detectChanges = function () {
            var e = this._view.root.rendererFactory;
            e.begin && e.begin();
            try {
              Tr.checkAndUpdateView(this._view);
            } finally {
              e.end && e.end();
            }
          }),
          (e.prototype.checkNoChanges = function () {
            Tr.checkNoChangesView(this._view);
          }),
          (e.prototype.reattach = function () {
            this._view.state |= 4;
          }),
          (e.prototype.onDestroy = function (e) {
            this._view.disposables || (this._view.disposables = []),
              this._view.disposables.push(e);
          }),
          (e.prototype.destroy = function () {
            this._appRef
              ? this._appRef.detachView(this)
              : this._viewContainerRef &&
                this._viewContainerRef.detach(
                  this._viewContainerRef.indexOf(this)
                ),
              Tr.destroyView(this._view);
          }),
          (e.prototype.detachFromAppRef = function () {
            (this._appRef = null),
              Eo(this._view),
              Tr.dirtyParentQueries(this._view);
          }),
          (e.prototype.attachToAppRef = function (e) {
            if (this._viewContainerRef)
              throw new Error(
                "This view is already attached to a ViewContainer!"
              );
            this._appRef = e;
          }),
          (e.prototype.attachToViewContainerRef = function (e) {
            if (this._appRef)
              throw new Error(
                "This view is already attached directly to the ApplicationRef!"
              );
            this._viewContainerRef = e;
          }),
          e
        );
      })();
      function Mo(e, n) {
        return new Ro(e, n);
      }
      var Ro = (function (e) {
        function n(n, t) {
          var r = e.call(this) || this;
          return (r._parentView = n), (r._def = t), r;
        }
        return (
          o(n, e),
          (n.prototype.createEmbeddedView = function (e) {
            return new Oo(
              Tr.createEmbeddedView(
                this._parentView,
                this._def,
                this._def.element.template,
                e
              )
            );
          }),
          Object.defineProperty(n.prototype, "elementRef", {
            get: function () {
              return new gt(
                Cr(this._parentView, this._def.nodeIndex).renderElement
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          n
        );
      })(mt);
      function Do(e, n) {
        return new Po(e, n);
      }
      var Po = (function () {
        function e(e, n) {
          (this.view = e), (this.elDef = n);
        }
        return (
          (e.prototype.get = function (e, n) {
            return (
              void 0 === n && (n = Ie.THROW_IF_NOT_FOUND),
              Tr.resolveDep(
                this.view,
                this.elDef,
                !!this.elDef && 0 != (33554432 & this.elDef.flags),
                { flags: 0, token: e, tokenKey: Rr(e) },
                n
              )
            );
          }),
          e
        );
      })();
      function jo(e, n) {
        var t = e.def.nodes[n];
        if (1 & t.flags) {
          var r = Cr(e, t.nodeIndex);
          return t.element.template ? r.template : r.renderElement;
        }
        if (2 & t.flags) return Er(e, t.nodeIndex).renderText;
        if (20240 & t.flags) return xr(e, t.nodeIndex).instance;
        throw new Error("Illegal state: read nodeValue for node index " + n);
      }
      function Ho(e) {
        return new Lo(e.renderer);
      }
      var Lo = (function () {
        function e(e) {
          this.delegate = e;
        }
        return (
          (e.prototype.selectRootElement = function (e) {
            return this.delegate.selectRootElement(e);
          }),
          (e.prototype.createElement = function (e, n) {
            var t = c(io(n), 2),
              r = this.delegate.createElement(t[1], t[0]);
            return e && this.delegate.appendChild(e, r), r;
          }),
          (e.prototype.createViewRoot = function (e) {
            return e;
          }),
          (e.prototype.createTemplateAnchor = function (e) {
            var n = this.delegate.createComment("");
            return e && this.delegate.appendChild(e, n), n;
          }),
          (e.prototype.createText = function (e, n) {
            var t = this.delegate.createText(n);
            return e && this.delegate.appendChild(e, t), t;
          }),
          (e.prototype.projectNodes = function (e, n) {
            for (var t = 0; t < n.length; t++)
              this.delegate.appendChild(e, n[t]);
          }),
          (e.prototype.attachViewAfter = function (e, n) {
            for (
              var t = this.delegate.parentNode(e),
                r = this.delegate.nextSibling(e),
                o = 0;
              o < n.length;
              o++
            )
              this.delegate.insertBefore(t, n[o], r);
          }),
          (e.prototype.detachView = function (e) {
            for (var n = 0; n < e.length; n++) {
              var t = e[n],
                r = this.delegate.parentNode(t);
              this.delegate.removeChild(r, t);
            }
          }),
          (e.prototype.destroyView = function (e, n) {
            for (var t = 0; t < n.length; t++) this.delegate.destroyNode(n[t]);
          }),
          (e.prototype.listen = function (e, n, t) {
            return this.delegate.listen(e, n, t);
          }),
          (e.prototype.listenGlobal = function (e, n, t) {
            return this.delegate.listen(e, n, t);
          }),
          (e.prototype.setElementProperty = function (e, n, t) {
            this.delegate.setProperty(e, n, t);
          }),
          (e.prototype.setElementAttribute = function (e, n, t) {
            var r = c(io(n), 2),
              o = r[0],
              i = r[1];
            null != t
              ? this.delegate.setAttribute(e, i, t, o)
              : this.delegate.removeAttribute(e, i, o);
          }),
          (e.prototype.setBindingDebugInfo = function (e, n, t) {}),
          (e.prototype.setElementClass = function (e, n, t) {
            t ? this.delegate.addClass(e, n) : this.delegate.removeClass(e, n);
          }),
          (e.prototype.setElementStyle = function (e, n, t) {
            null != t
              ? this.delegate.setStyle(e, n, t)
              : this.delegate.removeStyle(e, n);
          }),
          (e.prototype.invokeElementMethod = function (e, n, t) {
            e[n].apply(e, t);
          }),
          (e.prototype.setText = function (e, n) {
            this.delegate.setValue(e, n);
          }),
          (e.prototype.animate = function () {
            throw new Error("Renderer.animate is no longer supported!");
          }),
          e
        );
      })();
      function Vo(e, n, t, r) {
        return new Bo(e, n, t, r);
      }
      var Bo = (function () {
          function e(e, n, t, r) {
            (this._moduleType = e),
              (this._parent = n),
              (this._bootstrapComponents = t),
              (this._def = r),
              (this._destroyListeners = []),
              (this._destroyed = !1),
              (this.injector = this),
              (function (e) {
                for (
                  var n = e._def,
                    t = (e._providers = new Array(n.providers.length)),
                    r = 0;
                  r < n.providers.length;
                  r++
                ) {
                  var o = n.providers[r];
                  4096 & o.flags || (void 0 === t[r] && (t[r] = bo(e, o)));
                }
              })(this);
          }
          return (
            (e.prototype.get = function (e, n, t) {
              void 0 === n && (n = Ie.THROW_IF_NOT_FOUND),
                void 0 === t && (t = 0);
              var r = 0;
              return (
                4 & t ? (r |= 1) : 2 & t && (r |= 4),
                mo(this, { token: e, tokenKey: Rr(e), flags: r }, n)
              );
            }),
            Object.defineProperty(e.prototype, "instance", {
              get: function () {
                return this.get(this._moduleType);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "componentFactoryResolver", {
              get: function () {
                return this.get(Pn);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.destroy = function () {
              if (this._destroyed)
                throw new Error(
                  "The ng module " +
                    me(this.instance.constructor) +
                    " has already been destroyed."
                );
              (this._destroyed = !0),
                (function (e, n) {
                  for (
                    var t = e._def, r = new Set(), o = 0;
                    o < t.providers.length;
                    o++
                  )
                    if (131072 & t.providers[o].flags) {
                      var i = e._providers[o];
                      if (i && i !== po) {
                        var l = i.ngOnDestroy;
                        "function" != typeof l ||
                          r.has(i) ||
                          (l.apply(i), r.add(i));
                      }
                    }
                })(this),
                this._destroyListeners.forEach(function (e) {
                  return e();
                });
            }),
            (e.prototype.onDestroy = function (e) {
              this._destroyListeners.push(e);
            }),
            e
          );
        })(),
        Fo = Rr(function () {}),
        zo = Rr(vt),
        Uo = Rr(gt),
        Zo = Rr(function () {}),
        Wo = Rr(mt),
        Qo = Rr(function () {}),
        Yo = Rr(Ie),
        qo = Rr(Ne);
      function Go(e, n, t, r, o, i, l, u) {
        var a = [];
        if (l)
          for (var s in l) {
            var d = c(l[s], 2);
            a[d[0]] = {
              flags: 8,
              name: s,
              nonMinifiedName: d[1],
              ns: null,
              securityContext: null,
              suffix: null,
            };
          }
        var f = [];
        if (u)
          for (var p in u)
            f.push({ type: 1, propName: p, target: null, eventName: u[p] });
        return (function (e, n, t, r, o, i, l, u, a) {
          var s = qr(t),
            c = s.matchedQueries,
            d = s.references,
            f = s.matchedQueryIds;
          a || (a = []), u || (u = []), (i = we(i));
          var p = Gr(l, me(o));
          return {
            nodeIndex: -1,
            parent: null,
            renderParent: null,
            bindingIndex: -1,
            outputIndex: -1,
            checkIndex: e,
            flags: n,
            childFlags: 0,
            directChildFlags: 0,
            childMatchedQueries: 0,
            matchedQueries: c,
            matchedQueryIds: f,
            references: d,
            ngContentIndex: -1,
            childCount: r,
            bindings: u,
            bindingFlags: lo(u),
            outputs: a,
            element: null,
            provider: { token: o, value: i, deps: p },
            text: null,
            query: null,
            ngContent: null,
          };
        })(e, (n |= 16384), t, r, o, o, i, a, f);
      }
      function Ko(e, n) {
        return ei(e, n);
      }
      function Xo(e, n) {
        for (var t = e; t.parent && !Qr(t); ) t = t.parent;
        return ni(t.parent, Zr(t), !0, n.provider.value, n.provider.deps);
      }
      function Jo(e, n) {
        var t = ni(
          e,
          n.parent,
          (32768 & n.flags) > 0,
          n.provider.value,
          n.provider.deps
        );
        if (n.outputs.length)
          for (var r = 0; r < n.outputs.length; r++) {
            var o = n.outputs[r],
              i = t[o.propName].subscribe(
                $o(e, n.parent.nodeIndex, o.eventName)
              );
            e.disposables[n.outputIndex + r] = i.unsubscribe.bind(i);
          }
        return t;
      }
      function $o(e, n, t) {
        return function (r) {
          return zr(e, n, t, r);
        };
      }
      function ei(e, n) {
        var t = (8192 & n.flags) > 0,
          r = n.provider;
        switch (201347067 & n.flags) {
          case 512:
            return ni(e, n.parent, t, r.value, r.deps);
          case 1024:
            return (function (e, n, t, r, o) {
              var i = o.length;
              switch (i) {
                case 0:
                  return r();
                case 1:
                  return r(ri(e, n, t, o[0]));
                case 2:
                  return r(ri(e, n, t, o[0]), ri(e, n, t, o[1]));
                case 3:
                  return r(
                    ri(e, n, t, o[0]),
                    ri(e, n, t, o[1]),
                    ri(e, n, t, o[2])
                  );
                default:
                  for (var l = Array(i), u = 0; u < i; u++)
                    l[u] = ri(e, n, t, o[u]);
                  return r.apply(void 0, d(l));
              }
            })(e, n.parent, t, r.value, r.deps);
          case 2048:
            return ri(e, n.parent, t, r.deps[0]);
          case 256:
            return r.value;
        }
      }
      function ni(e, n, t, r, o) {
        var i = o.length;
        switch (i) {
          case 0:
            return new r();
          case 1:
            return new r(ri(e, n, t, o[0]));
          case 2:
            return new r(ri(e, n, t, o[0]), ri(e, n, t, o[1]));
          case 3:
            return new r(
              ri(e, n, t, o[0]),
              ri(e, n, t, o[1]),
              ri(e, n, t, o[2])
            );
          default:
            for (var l = new Array(i), u = 0; u < i; u++)
              l[u] = ri(e, n, t, o[u]);
            return new (r.bind.apply(r, d([void 0], l)))();
        }
      }
      var ti = {};
      function ri(e, n, t, r, o) {
        if ((void 0 === o && (o = Ie.THROW_IF_NOT_FOUND), 8 & r.flags))
          return r.token;
        var i = e;
        2 & r.flags && (o = null);
        var l = r.tokenKey;
        l === Qo && (t = !(!n || !n.element.componentView)),
          n && 1 & r.flags && ((t = !1), (n = n.parent));
        for (var u = e; u; ) {
          if (n)
            switch (l) {
              case Fo:
                return Ho(oi(u, n, t));
              case zo:
                return oi(u, n, t).renderer;
              case Uo:
                return new gt(Cr(u, n.nodeIndex).renderElement);
              case Zo:
                return Cr(u, n.nodeIndex).viewContainer;
              case Wo:
                if (n.element.template) return Cr(u, n.nodeIndex).template;
                break;
              case Qo:
                return Io(oi(u, n, t));
              case Yo:
              case qo:
                return Do(u, n);
              default:
                var a = (
                  t ? n.element.allProviders : n.element.publicProviders
                )[l];
                if (a) {
                  var s = xr(u, a.nodeIndex);
                  return (
                    s ||
                      ((s = { instance: ei(u, a) }),
                      (u.nodes[a.nodeIndex] = s)),
                    s.instance
                  );
                }
            }
          (t = Qr(u)), (n = Zr(u)), (u = u.parent), 4 & r.flags && (u = null);
        }
        var c = i.root.injector.get(r.token, ti);
        return c !== ti || o === ti
          ? c
          : i.root.ngModule.injector.get(r.token, o);
      }
      function oi(e, n, t) {
        var r;
        if (t) r = Cr(e, n.nodeIndex).componentView;
        else for (r = e; r.parent && !Qr(r); ) r = r.parent;
        return r;
      }
      function ii(e, n, t, r, o, i) {
        if (32768 & t.flags) {
          var l = Cr(e, t.parent.nodeIndex).componentView;
          2 & l.def.flags && (l.state |= 8);
        }
        if (((n.instance[t.bindings[r].name] = o), 524288 & t.flags)) {
          i = i || {};
          var u = St.unwrap(e.oldValues[t.bindingIndex + r]);
          i[t.bindings[r].nonMinifiedName] = new kt(u, o, 0 != (2 & e.state));
        }
        return (e.oldValues[t.bindingIndex + r] = o), i;
      }
      function li(e, n) {
        if (e.def.nodeFlags & n)
          for (var t = e.def.nodes, r = 0, o = 0; o < t.length; o++) {
            var i = t[o],
              l = i.parent;
            for (
              !l && i.flags & n && ai(e, o, i.flags & n, r++),
                0 == (i.childFlags & n) && (o += i.childCount);
              l && 1 & l.flags && o === l.nodeIndex + l.childCount;

            )
              l.directChildFlags & n && (r = ui(e, l, n, r)), (l = l.parent);
          }
      }
      function ui(e, n, t, r) {
        for (var o = n.nodeIndex + 1; o <= n.nodeIndex + n.childCount; o++) {
          var i = e.def.nodes[o];
          i.flags & t && ai(e, o, i.flags & t, r++), (o += i.childCount);
        }
        return r;
      }
      function ai(e, n, t, r) {
        var o = xr(e, n);
        if (o) {
          var i = o.instance;
          i &&
            (Tr.setCurrentNode(e, n),
            1048576 & t && _r(e, 512, r) && i.ngAfterContentInit(),
            2097152 & t && i.ngAfterContentChecked(),
            4194304 & t && _r(e, 768, r) && i.ngAfterViewInit(),
            8388608 & t && i.ngAfterViewChecked(),
            131072 & t && i.ngOnDestroy());
        }
      }
      function si(e) {
        for (var n = e.def.nodeMatchedQueries; e.parent && Yr(e); ) {
          var t = e.parentNodeDef;
          e = e.parent;
          for (var r = t.nodeIndex + t.childCount, o = 0; o <= r; o++)
            67108864 & (i = e.def.nodes[o]).flags &&
              536870912 & i.flags &&
              (i.query.filterId & n) === i.query.filterId &&
              kr(e, o).setDirty(),
              (!(1 & i.flags && o + i.childCount < t.nodeIndex) &&
                67108864 & i.childFlags &&
                536870912 & i.childFlags) ||
                (o += i.childCount);
        }
        if (134217728 & e.def.nodeFlags)
          for (o = 0; o < e.def.nodes.length; o++) {
            var i;
            134217728 & (i = e.def.nodes[o]).flags &&
              536870912 & i.flags &&
              kr(e, o).setDirty(),
              (o += i.childCount);
          }
      }
      function ci(e, n) {
        var t = kr(e, n.nodeIndex);
        if (t.dirty) {
          var r,
            o = void 0;
          if (67108864 & n.flags) {
            var i = n.parent.parent;
            (o = di(e, i.nodeIndex, i.nodeIndex + i.childCount, n.query, [])),
              (r = xr(e, n.parent.nodeIndex).instance);
          } else
            134217728 & n.flags &&
              ((o = di(e, 0, e.def.nodes.length - 1, n.query, [])),
              (r = e.component));
          t.reset(o);
          for (var l = n.query.bindings, u = !1, a = 0; a < l.length; a++) {
            var s = l[a],
              c = void 0;
            switch (s.bindingType) {
              case 0:
                c = t.first;
                break;
              case 1:
                (c = t), (u = !0);
            }
            r[s.propName] = c;
          }
          u && t.notifyOnChanges();
        }
      }
      function di(e, n, t, r, o) {
        for (var i = n; i <= t; i++) {
          var l = e.def.nodes[i],
            u = l.matchedQueries[r.id];
          if (
            (null != u && o.push(fi(e, l, u)),
            1 & l.flags &&
              l.element.template &&
              (l.element.template.nodeMatchedQueries & r.filterId) ===
                r.filterId)
          ) {
            var a = Cr(e, i);
            if (
              ((l.childMatchedQueries & r.filterId) === r.filterId &&
                (di(e, i + 1, i + l.childCount, r, o), (i += l.childCount)),
              16777216 & l.flags)
            )
              for (
                var s = a.viewContainer._embeddedViews, c = 0;
                c < s.length;
                c++
              ) {
                var d = s[c],
                  f = Ur(d);
                f && f === a && di(d, 0, d.def.nodes.length - 1, r, o);
              }
            var p = a.template._projectedViews;
            if (p)
              for (c = 0; c < p.length; c++) {
                var h = p[c];
                di(h, 0, h.def.nodes.length - 1, r, o);
              }
          }
          (l.childMatchedQueries & r.filterId) !== r.filterId &&
            (i += l.childCount);
        }
        return o;
      }
      function fi(e, n, t) {
        if (null != t)
          switch (t) {
            case 1:
              return Cr(e, n.nodeIndex).renderElement;
            case 0:
              return new gt(Cr(e, n.nodeIndex).renderElement);
            case 2:
              return Cr(e, n.nodeIndex).template;
            case 3:
              return Cr(e, n.nodeIndex).viewContainer;
            case 4:
              return xr(e, n.nodeIndex).instance;
          }
      }
      function pi(e, n, t) {
        var r = Kr(e, n, t);
        r && no(e, t.ngContent.index, 1, r, null, void 0);
      }
      function hi(e, n, t) {
        for (var r = new Array(t.length - 1), o = 1; o < t.length; o++)
          r[o - 1] = {
            flags: 8,
            name: null,
            ns: null,
            nonMinifiedName: null,
            securityContext: null,
            suffix: t[o],
          };
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: e,
          flags: 2,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: n,
          childCount: 0,
          bindings: r,
          bindingFlags: 8,
          outputs: [],
          element: null,
          provider: null,
          text: { prefix: t[0] },
          query: null,
          ngContent: null,
        };
      }
      function vi(e, n, t) {
        var r,
          o = e.renderer;
        r = o.createText(t.text.prefix);
        var i = Kr(e, n, t);
        return i && o.appendChild(i, r), { renderText: r };
      }
      function gi(e, n) {
        return (null != e ? e.toString() : "") + n.suffix;
      }
      function yi(e, n, t, r) {
        for (
          var o = 0,
            i = 0,
            l = 0,
            u = 0,
            a = 0,
            s = null,
            c = null,
            d = !1,
            f = !1,
            p = null,
            h = 0;
          h < n.length;
          h++
        ) {
          var v = n[h];
          if (
            ((v.nodeIndex = h),
            (v.parent = s),
            (v.bindingIndex = o),
            (v.outputIndex = i),
            (v.renderParent = c),
            (l |= v.flags),
            (a |= v.matchedQueryIds),
            v.element)
          ) {
            var g = v.element;
            (g.publicProviders = s
              ? s.element.publicProviders
              : Object.create(null)),
              (g.allProviders = g.publicProviders),
              (d = !1),
              (f = !1),
              v.element.template &&
                (a |= v.element.template.nodeMatchedQueries);
          }
          if (
            (bi(s, v, n.length),
            (o += v.bindings.length),
            (i += v.outputs.length),
            !c && 3 & v.flags && (p = v),
            20224 & v.flags)
          ) {
            d ||
              ((d = !0),
              (s.element.publicProviders = Object.create(
                s.element.publicProviders
              )),
              (s.element.allProviders = s.element.publicProviders));
            var y = 0 != (32768 & v.flags);
            0 == (8192 & v.flags) || y
              ? (s.element.publicProviders[Rr(v.provider.token)] = v)
              : (f ||
                  ((f = !0),
                  (s.element.allProviders = Object.create(
                    s.element.publicProviders
                  ))),
                (s.element.allProviders[Rr(v.provider.token)] = v)),
              y && (s.element.componentProvider = v);
          }
          if (
            (s
              ? ((s.childFlags |= v.flags),
                (s.directChildFlags |= v.flags),
                (s.childMatchedQueries |= v.matchedQueryIds),
                v.element &&
                  v.element.template &&
                  (s.childMatchedQueries |=
                    v.element.template.nodeMatchedQueries))
              : (u |= v.flags),
            v.childCount > 0)
          )
            (s = v), mi(v) || (c = v);
          else
            for (; s && h === s.nodeIndex + s.childCount; ) {
              var m = s.parent;
              m &&
                ((m.childFlags |= s.childFlags),
                (m.childMatchedQueries |= s.childMatchedQueries)),
                (c = (s = m) && mi(s) ? s.renderParent : s);
            }
        }
        return {
          factory: null,
          nodeFlags: l,
          rootNodeFlags: u,
          nodeMatchedQueries: a,
          flags: e,
          nodes: n,
          updateDirectives: t || Or,
          updateRenderer: r || Or,
          handleEvent: function (e, t, r, o) {
            return n[t].element.handleEvent(e, r, o);
          },
          bindingCount: o,
          outputCount: i,
          lastRenderRootNode: p,
        };
      }
      function mi(e) {
        return 0 != (1 & e.flags) && null === e.element.name;
      }
      function bi(e, n, t) {
        var r = n.element && n.element.template;
        if (r) {
          if (!r.lastRenderRootNode)
            throw new Error(
              "Illegal State: Embedded templates without nodes are not allowed!"
            );
          if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags)
            throw new Error(
              "Illegal State: Last root node of a template can't have embedded views, at index " +
                n.nodeIndex +
                "!"
            );
        }
        if (20224 & n.flags && 0 == (1 & (e ? e.flags : 0)))
          throw new Error(
            "Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index " +
              n.nodeIndex +
              "!"
          );
        if (n.query) {
          if (67108864 & n.flags && (!e || 0 == (16384 & e.flags)))
            throw new Error(
              "Illegal State: Content Query nodes need to be children of directives, at index " +
                n.nodeIndex +
                "!"
            );
          if (134217728 & n.flags && e)
            throw new Error(
              "Illegal State: View Query nodes have to be top level nodes, at index " +
                n.nodeIndex +
                "!"
            );
        }
        if (n.childCount) {
          var o = e ? e.nodeIndex + e.childCount : t - 1;
          if (n.nodeIndex <= o && n.nodeIndex + n.childCount > o)
            throw new Error(
              "Illegal State: childCount of node leads outside of parent, at index " +
                n.nodeIndex +
                "!"
            );
        }
      }
      function wi(e, n, t, r) {
        var o = Ci(e.root, e.renderer, e, n, t);
        return xi(o, e.component, r), Si(o), o;
      }
      function _i(e, n, t) {
        var r = Ci(e, e.renderer, null, null, n);
        return xi(r, t, t), Si(r), r;
      }
      function Ei(e, n, t, r) {
        var o,
          i = n.element.componentRendererType;
        return (
          (o = i
            ? e.root.rendererFactory.createRenderer(r, i)
            : e.root.renderer),
          Ci(e.root, o, e, n.element.componentProvider, t)
        );
      }
      function Ci(e, n, t, r, o) {
        var i = new Array(o.nodes.length),
          l = o.outputCount ? new Array(o.outputCount) : null;
        return {
          def: o,
          parent: t,
          viewContainerParent: null,
          parentNodeDef: r,
          context: null,
          component: null,
          nodes: i,
          state: 13,
          root: e,
          renderer: n,
          oldValues: new Array(o.bindingCount),
          disposables: l,
          initIndex: -1,
        };
      }
      function xi(e, n, t) {
        (e.component = n), (e.context = t);
      }
      function Si(e) {
        var n;
        Qr(e) &&
          (n = Cr(e.parent, e.parentNodeDef.parent.nodeIndex).renderElement);
        for (var t = e.def, r = e.nodes, o = 0; o < t.nodes.length; o++) {
          var i = t.nodes[o];
          Tr.setCurrentNode(e, o);
          var l = void 0;
          switch (201347067 & i.flags) {
            case 1:
              var u = ao(e, n, i),
                a = void 0;
              if (33554432 & i.flags) {
                var s = Jr(i.element.componentView);
                a = Tr.createComponentView(e, i, s, u);
              }
              so(e, a, i, u),
                (l = {
                  renderElement: u,
                  componentView: a,
                  viewContainer: null,
                  template: i.element.template ? Mo(e, i) : void 0,
                }),
                16777216 & i.flags && (l.viewContainer = No(e, i, l));
              break;
            case 2:
              l = vi(e, n, i);
              break;
            case 512:
            case 1024:
            case 2048:
            case 256:
              (l = r[o]) || 4096 & i.flags || (l = { instance: Ko(e, i) });
              break;
            case 16:
              l = { instance: Xo(e, i) };
              break;
            case 16384:
              (l = r[o]) || (l = { instance: Jo(e, i) }),
                32768 & i.flags &&
                  xi(
                    Cr(e, i.parent.nodeIndex).componentView,
                    l.instance,
                    l.instance
                  );
              break;
            case 32:
            case 64:
            case 128:
              l = { value: void 0 };
              break;
            case 67108864:
            case 134217728:
              l = new yt();
              break;
            case 8:
              pi(e, n, i), (l = void 0);
          }
          r[o] = l;
        }
        Di(e, Ri.CreateViewNodes), Li(e, 201326592, 268435456, 0);
      }
      function ki(e) {
        Ai(e),
          Tr.updateDirectives(e, 1),
          Pi(e, Ri.CheckNoChanges),
          Tr.updateRenderer(e, 1),
          Di(e, Ri.CheckNoChanges),
          (e.state &= -97);
      }
      function Ti(e) {
        1 & e.state ? ((e.state &= -2), (e.state |= 2)) : (e.state &= -3),
          wr(e, 0, 256),
          Ai(e),
          Tr.updateDirectives(e, 0),
          Pi(e, Ri.CheckAndUpdate),
          Li(e, 67108864, 536870912, 0);
        var n = wr(e, 256, 512);
        li(e, 2097152 | (n ? 1048576 : 0)),
          Tr.updateRenderer(e, 0),
          Di(e, Ri.CheckAndUpdate),
          Li(e, 134217728, 536870912, 0),
          li(e, 8388608 | ((n = wr(e, 512, 768)) ? 4194304 : 0)),
          2 & e.def.flags && (e.state &= -9),
          (e.state &= -97),
          wr(e, 768, 1024);
      }
      function Ni(e, n, t, r, o, i, l, u, a, s, c, f, p) {
        return 0 === t
          ? (function (e, n, t, r, o, i, l, u, a, s, c, d) {
              switch (201347067 & n.flags) {
                case 1:
                  return (function (e, n, t, r, o, i, l, u, a, s, c, d) {
                    var f = n.bindings.length,
                      p = !1;
                    return (
                      f > 0 && fo(e, n, 0, t) && (p = !0),
                      f > 1 && fo(e, n, 1, r) && (p = !0),
                      f > 2 && fo(e, n, 2, o) && (p = !0),
                      f > 3 && fo(e, n, 3, i) && (p = !0),
                      f > 4 && fo(e, n, 4, l) && (p = !0),
                      f > 5 && fo(e, n, 5, u) && (p = !0),
                      f > 6 && fo(e, n, 6, a) && (p = !0),
                      f > 7 && fo(e, n, 7, s) && (p = !0),
                      f > 8 && fo(e, n, 8, c) && (p = !0),
                      f > 9 && fo(e, n, 9, d) && (p = !0),
                      p
                    );
                  })(e, n, t, r, o, i, l, u, a, s, c, d);
                case 2:
                  return (function (e, n, t, r, o, i, l, u, a, s, c, d) {
                    var f = !1,
                      p = n.bindings,
                      h = p.length;
                    if (
                      (h > 0 && Lr(e, n, 0, t) && (f = !0),
                      h > 1 && Lr(e, n, 1, r) && (f = !0),
                      h > 2 && Lr(e, n, 2, o) && (f = !0),
                      h > 3 && Lr(e, n, 3, i) && (f = !0),
                      h > 4 && Lr(e, n, 4, l) && (f = !0),
                      h > 5 && Lr(e, n, 5, u) && (f = !0),
                      h > 6 && Lr(e, n, 6, a) && (f = !0),
                      h > 7 && Lr(e, n, 7, s) && (f = !0),
                      h > 8 && Lr(e, n, 8, c) && (f = !0),
                      h > 9 && Lr(e, n, 9, d) && (f = !0),
                      f)
                    ) {
                      var v = n.text.prefix;
                      h > 0 && (v += gi(t, p[0])),
                        h > 1 && (v += gi(r, p[1])),
                        h > 2 && (v += gi(o, p[2])),
                        h > 3 && (v += gi(i, p[3])),
                        h > 4 && (v += gi(l, p[4])),
                        h > 5 && (v += gi(u, p[5])),
                        h > 6 && (v += gi(a, p[6])),
                        h > 7 && (v += gi(s, p[7])),
                        h > 8 && (v += gi(c, p[8])),
                        h > 9 && (v += gi(d, p[9]));
                      var g = Er(e, n.nodeIndex).renderText;
                      e.renderer.setValue(g, v);
                    }
                    return f;
                  })(e, n, t, r, o, i, l, u, a, s, c, d);
                case 16384:
                  return (function (e, n, t, r, o, i, l, u, a, s, c, d) {
                    var f = xr(e, n.nodeIndex),
                      p = f.instance,
                      h = !1,
                      v = void 0,
                      g = n.bindings.length;
                    return (
                      g > 0 &&
                        Hr(e, n, 0, t) &&
                        ((h = !0), (v = ii(e, f, n, 0, t, v))),
                      g > 1 &&
                        Hr(e, n, 1, r) &&
                        ((h = !0), (v = ii(e, f, n, 1, r, v))),
                      g > 2 &&
                        Hr(e, n, 2, o) &&
                        ((h = !0), (v = ii(e, f, n, 2, o, v))),
                      g > 3 &&
                        Hr(e, n, 3, i) &&
                        ((h = !0), (v = ii(e, f, n, 3, i, v))),
                      g > 4 &&
                        Hr(e, n, 4, l) &&
                        ((h = !0), (v = ii(e, f, n, 4, l, v))),
                      g > 5 &&
                        Hr(e, n, 5, u) &&
                        ((h = !0), (v = ii(e, f, n, 5, u, v))),
                      g > 6 &&
                        Hr(e, n, 6, a) &&
                        ((h = !0), (v = ii(e, f, n, 6, a, v))),
                      g > 7 &&
                        Hr(e, n, 7, s) &&
                        ((h = !0), (v = ii(e, f, n, 7, s, v))),
                      g > 8 &&
                        Hr(e, n, 8, c) &&
                        ((h = !0), (v = ii(e, f, n, 8, c, v))),
                      g > 9 &&
                        Hr(e, n, 9, d) &&
                        ((h = !0), (v = ii(e, f, n, 9, d, v))),
                      v && p.ngOnChanges(v),
                      65536 & n.flags &&
                        _r(e, 256, n.nodeIndex) &&
                        p.ngOnInit(),
                      262144 & n.flags && p.ngDoCheck(),
                      h
                    );
                  })(e, n, t, r, o, i, l, u, a, s, c, d);
                case 32:
                case 64:
                case 128:
                  return (function (e, n, t, r, o, i, l, u, a, s, c, d) {
                    var f = n.bindings,
                      p = !1,
                      h = f.length;
                    if (
                      (h > 0 && Lr(e, n, 0, t) && (p = !0),
                      h > 1 && Lr(e, n, 1, r) && (p = !0),
                      h > 2 && Lr(e, n, 2, o) && (p = !0),
                      h > 3 && Lr(e, n, 3, i) && (p = !0),
                      h > 4 && Lr(e, n, 4, l) && (p = !0),
                      h > 5 && Lr(e, n, 5, u) && (p = !0),
                      h > 6 && Lr(e, n, 6, a) && (p = !0),
                      h > 7 && Lr(e, n, 7, s) && (p = !0),
                      h > 8 && Lr(e, n, 8, c) && (p = !0),
                      h > 9 && Lr(e, n, 9, d) && (p = !0),
                      p)
                    ) {
                      var v = Sr(e, n.nodeIndex),
                        g = void 0;
                      switch (201347067 & n.flags) {
                        case 32:
                          (g = new Array(f.length)),
                            h > 0 && (g[0] = t),
                            h > 1 && (g[1] = r),
                            h > 2 && (g[2] = o),
                            h > 3 && (g[3] = i),
                            h > 4 && (g[4] = l),
                            h > 5 && (g[5] = u),
                            h > 6 && (g[6] = a),
                            h > 7 && (g[7] = s),
                            h > 8 && (g[8] = c),
                            h > 9 && (g[9] = d);
                          break;
                        case 64:
                          (g = {}),
                            h > 0 && (g[f[0].name] = t),
                            h > 1 && (g[f[1].name] = r),
                            h > 2 && (g[f[2].name] = o),
                            h > 3 && (g[f[3].name] = i),
                            h > 4 && (g[f[4].name] = l),
                            h > 5 && (g[f[5].name] = u),
                            h > 6 && (g[f[6].name] = a),
                            h > 7 && (g[f[7].name] = s),
                            h > 8 && (g[f[8].name] = c),
                            h > 9 && (g[f[9].name] = d);
                          break;
                        case 128:
                          var y = t;
                          switch (h) {
                            case 1:
                              g = y.transform(t);
                              break;
                            case 2:
                              g = y.transform(r);
                              break;
                            case 3:
                              g = y.transform(r, o);
                              break;
                            case 4:
                              g = y.transform(r, o, i);
                              break;
                            case 5:
                              g = y.transform(r, o, i, l);
                              break;
                            case 6:
                              g = y.transform(r, o, i, l, u);
                              break;
                            case 7:
                              g = y.transform(r, o, i, l, u, a);
                              break;
                            case 8:
                              g = y.transform(r, o, i, l, u, a, s);
                              break;
                            case 9:
                              g = y.transform(r, o, i, l, u, a, s, c);
                              break;
                            case 10:
                              g = y.transform(r, o, i, l, u, a, s, c, d);
                          }
                      }
                      v.value = g;
                    }
                    return p;
                  })(e, n, t, r, o, i, l, u, a, s, c, d);
                default:
                  throw "unreachable";
              }
            })(e, n, r, o, i, l, u, a, s, c, f, p)
          : (function (e, n, t) {
              switch (201347067 & n.flags) {
                case 1:
                  return (function (e, n, t) {
                    for (var r = !1, o = 0; o < t.length; o++)
                      fo(e, n, o, t[o]) && (r = !0);
                    return r;
                  })(e, n, t);
                case 2:
                  return (function (e, n, t) {
                    for (var r = n.bindings, o = !1, i = 0; i < t.length; i++)
                      Lr(e, n, i, t[i]) && (o = !0);
                    if (o) {
                      var l = "";
                      for (i = 0; i < t.length; i++) l += gi(t[i], r[i]);
                      l = n.text.prefix + l;
                      var u = Er(e, n.nodeIndex).renderText;
                      e.renderer.setValue(u, l);
                    }
                    return o;
                  })(e, n, t);
                case 16384:
                  return (function (e, n, t) {
                    for (
                      var r = xr(e, n.nodeIndex),
                        o = r.instance,
                        i = !1,
                        l = void 0,
                        u = 0;
                      u < t.length;
                      u++
                    )
                      Hr(e, n, u, t[u]) &&
                        ((i = !0), (l = ii(e, r, n, u, t[u], l)));
                    return (
                      l && o.ngOnChanges(l),
                      65536 & n.flags &&
                        _r(e, 256, n.nodeIndex) &&
                        o.ngOnInit(),
                      262144 & n.flags && o.ngDoCheck(),
                      i
                    );
                  })(e, n, t);
                case 32:
                case 64:
                case 128:
                  return (function (e, n, t) {
                    for (var r = n.bindings, o = !1, i = 0; i < t.length; i++)
                      Lr(e, n, i, t[i]) && (o = !0);
                    if (o) {
                      var l = Sr(e, n.nodeIndex),
                        u = void 0;
                      switch (201347067 & n.flags) {
                        case 32:
                          u = t;
                          break;
                        case 64:
                          for (u = {}, i = 0; i < t.length; i++)
                            u[r[i].name] = t[i];
                          break;
                        case 128:
                          var a = t[0],
                            s = t.slice(1);
                          u = a.transform.apply(a, d(s));
                      }
                      l.value = u;
                    }
                    return o;
                  })(e, n, t);
                default:
                  throw "unreachable";
              }
            })(e, n, r);
      }
      function Ai(e) {
        var n = e.def;
        if (4 & n.nodeFlags)
          for (var t = 0; t < n.nodes.length; t++) {
            var r = n.nodes[t];
            if (4 & r.flags) {
              var o = Cr(e, t).template._projectedViews;
              if (o)
                for (var i = 0; i < o.length; i++) {
                  var l = o[i];
                  (l.state |= 32), Fr(l, e);
                }
            } else 0 == (4 & r.childFlags) && (t += r.childCount);
          }
      }
      function Ii(e, n, t, r, o, i, l, u, a, s, c, d, f) {
        return (
          0 === t
            ? (function (e, n, t, r, o, i, l, u, a, s, c, d) {
                var f = n.bindings.length;
                f > 0 && Vr(e, n, 0, t),
                  f > 1 && Vr(e, n, 1, r),
                  f > 2 && Vr(e, n, 2, o),
                  f > 3 && Vr(e, n, 3, i),
                  f > 4 && Vr(e, n, 4, l),
                  f > 5 && Vr(e, n, 5, u),
                  f > 6 && Vr(e, n, 6, a),
                  f > 7 && Vr(e, n, 7, s),
                  f > 8 && Vr(e, n, 8, c),
                  f > 9 && Vr(e, n, 9, d);
              })(e, n, r, o, i, l, u, a, s, c, d, f)
            : (function (e, n, t) {
                for (var r = 0; r < t.length; r++) Vr(e, n, r, t[r]);
              })(e, n, r),
          !1
        );
      }
      function Oi(e, n) {
        if (kr(e, n.nodeIndex).dirty)
          throw Nr(
            Tr.createDebugContext(e, n.nodeIndex),
            "Query " + n.query.id + " not dirty",
            "Query " + n.query.id + " dirty",
            0 != (1 & e.state)
          );
      }
      function Mi(e) {
        if (!(128 & e.state)) {
          if (
            (Pi(e, Ri.Destroy), Di(e, Ri.Destroy), li(e, 131072), e.disposables)
          )
            for (var n = 0; n < e.disposables.length; n++) e.disposables[n]();
          !(function (e) {
            if (16 & e.state) {
              var n = Ur(e);
              if (n) {
                var t = n.template._projectedViews;
                t && (xo(t, t.indexOf(e)), Tr.dirtyParentQueries(e));
              }
            }
          })(e),
            e.renderer.destroyNode &&
              (function (e) {
                for (var n = e.def.nodes.length, t = 0; t < n; t++) {
                  var r = e.def.nodes[t];
                  1 & r.flags
                    ? e.renderer.destroyNode(Cr(e, t).renderElement)
                    : 2 & r.flags
                    ? e.renderer.destroyNode(Er(e, t).renderText)
                    : (67108864 & r.flags || 134217728 & r.flags) &&
                      kr(e, t).destroy();
                }
              })(e),
            Qr(e) && e.renderer.destroy(),
            (e.state |= 128);
        }
      }
      var Ri = (function (e) {
        return (
          (e[(e.CreateViewNodes = 0)] = "CreateViewNodes"),
          (e[(e.CheckNoChanges = 1)] = "CheckNoChanges"),
          (e[(e.CheckNoChangesProjectedViews = 2)] =
            "CheckNoChangesProjectedViews"),
          (e[(e.CheckAndUpdate = 3)] = "CheckAndUpdate"),
          (e[(e.CheckAndUpdateProjectedViews = 4)] =
            "CheckAndUpdateProjectedViews"),
          (e[(e.Destroy = 5)] = "Destroy"),
          e
        );
      })({});
      function Di(e, n) {
        var t = e.def;
        if (33554432 & t.nodeFlags)
          for (var r = 0; r < t.nodes.length; r++) {
            var o = t.nodes[r];
            33554432 & o.flags
              ? ji(Cr(e, r).componentView, n)
              : 0 == (33554432 & o.childFlags) && (r += o.childCount);
          }
      }
      function Pi(e, n) {
        var t = e.def;
        if (16777216 & t.nodeFlags)
          for (var r = 0; r < t.nodes.length; r++) {
            var o = t.nodes[r];
            if (16777216 & o.flags)
              for (
                var i = Cr(e, r).viewContainer._embeddedViews, l = 0;
                l < i.length;
                l++
              )
                ji(i[l], n);
            else 0 == (16777216 & o.childFlags) && (r += o.childCount);
          }
      }
      function ji(e, n) {
        var t = e.state;
        switch (n) {
          case Ri.CheckNoChanges:
            0 == (128 & t) &&
              (12 == (12 & t)
                ? ki(e)
                : 64 & t && Hi(e, Ri.CheckNoChangesProjectedViews));
            break;
          case Ri.CheckNoChangesProjectedViews:
            0 == (128 & t) && (32 & t ? ki(e) : 64 & t && Hi(e, n));
            break;
          case Ri.CheckAndUpdate:
            0 == (128 & t) &&
              (12 == (12 & t)
                ? Ti(e)
                : 64 & t && Hi(e, Ri.CheckAndUpdateProjectedViews));
            break;
          case Ri.CheckAndUpdateProjectedViews:
            0 == (128 & t) && (32 & t ? Ti(e) : 64 & t && Hi(e, n));
            break;
          case Ri.Destroy:
            Mi(e);
            break;
          case Ri.CreateViewNodes:
            Si(e);
        }
      }
      function Hi(e, n) {
        Pi(e, n), Di(e, n);
      }
      function Li(e, n, t, r) {
        if (e.def.nodeFlags & n && e.def.nodeFlags & t)
          for (var o = e.def.nodes.length, i = 0; i < o; i++) {
            var l = e.def.nodes[i];
            if (l.flags & n && l.flags & t)
              switch ((Tr.setCurrentNode(e, l.nodeIndex), r)) {
                case 0:
                  ci(e, l);
                  break;
                case 1:
                  Oi(e, l);
              }
            (l.childFlags & n && l.childFlags & t) || (i += l.childCount);
          }
      }
      var Vi = !1;
      function Bi(e, n, t, r, o, i) {
        return _i(zi(e, o, o.injector.get(pt), n, t), r, i);
      }
      function Fi(e, n, t, r, o, i) {
        var l = o.injector.get(pt),
          u = zi(e, o, new El(l), n, t),
          a = Ji(r);
        return wl(ul.create, _i, null, [u, a, i]);
      }
      function zi(e, n, t, r, o) {
        var i = n.injector.get(br),
          l = n.injector.get(tn);
        return {
          ngModule: n,
          injector: e,
          projectableNodes: r,
          selectorOrNode: o,
          sanitizer: i,
          rendererFactory: t,
          renderer: t.createRenderer(null, null),
          errorHandler: l,
        };
      }
      function Ui(e, n, t, r) {
        var o = Ji(t);
        return wl(ul.create, wi, null, [e, n, o, r]);
      }
      function Zi(e, n, t, r) {
        return (
          (t = qi.get(n.element.componentProvider.provider.token) || Ji(t)),
          wl(ul.create, Ei, null, [e, n, t, r])
        );
      }
      function Wi(e, n, t, r) {
        return Vo(
          e,
          n,
          t,
          (function (e) {
            var n = (function (e) {
                var n = !1,
                  t = !1;
                return 0 === Qi.size
                  ? { hasOverrides: n, hasDeprecatedOverrides: t }
                  : (e.providers.forEach(function (e) {
                      var r = Qi.get(e.token);
                      3840 & e.flags &&
                        r &&
                        ((n = !0), (t = t || r.deprecatedBehavior));
                    }),
                    e.modules.forEach(function (e) {
                      Yi.forEach(function (r, o) {
                        o.ngInjectableDef.providedIn === e &&
                          ((n = !0), (t = t || r.deprecatedBehavior));
                      });
                    }),
                    { hasOverrides: n, hasDeprecatedOverrides: t });
              })(e),
              t = n.hasDeprecatedOverrides;
            return n.hasOverrides
              ? ((function (e) {
                  for (var n = 0; n < e.providers.length; n++) {
                    var r = e.providers[n];
                    t && (r.flags |= 4096);
                    var o = Qi.get(r.token);
                    o &&
                      ((r.flags = (-3841 & r.flags) | o.flags),
                      (r.deps = Gr(o.deps)),
                      (r.value = o.value));
                  }
                  if (Yi.size > 0) {
                    var i = new Set(e.modules);
                    Yi.forEach(function (n, r) {
                      if (i.has(r.ngInjectableDef.providedIn)) {
                        var o = {
                          token: r,
                          flags: n.flags | (t ? 4096 : 0),
                          deps: Gr(n.deps),
                          value: n.value,
                          index: e.providers.length,
                        };
                        e.providers.push(o), (e.providersByKey[Rr(r)] = o);
                      }
                    });
                  }
                })(
                  (e = e.factory(function () {
                    return Or;
                  }))
                ),
                e)
              : e;
          })(r)
        );
      }
      var Qi = new Map(),
        Yi = new Map(),
        qi = new Map();
      function Gi(e) {
        Qi.set(e.token, e),
          "function" == typeof e.token &&
            e.token.ngInjectableDef &&
            "function" == typeof e.token.ngInjectableDef.providedIn &&
            Yi.set(e.token, e);
      }
      function Ki(e, n) {
        var t = Jr(Jr(n.viewDefFactory).nodes[0].element.componentView);
        qi.set(e, t);
      }
      function Xi() {
        Qi.clear(), Yi.clear(), qi.clear();
      }
      function Ji(e) {
        if (0 === Qi.size) return e;
        var n = (function (e) {
          for (var n = [], t = null, r = 0; r < e.nodes.length; r++) {
            var o = e.nodes[r];
            1 & o.flags && (t = o),
              t &&
                3840 & o.flags &&
                Qi.has(o.provider.token) &&
                (n.push(t.nodeIndex), (t = null));
          }
          return n;
        })(e);
        if (0 === n.length) return e;
        e = e.factory(function () {
          return Or;
        });
        for (var t = 0; t < n.length; t++) r(e, n[t]);
        return e;
        function r(e, n) {
          for (var t = n + 1; t < e.nodes.length; t++) {
            var r = e.nodes[t];
            if (1 & r.flags) return;
            if (3840 & r.flags) {
              var o = r.provider,
                i = Qi.get(o.token);
              i &&
                ((r.flags = (-3841 & r.flags) | i.flags),
                (o.deps = Gr(i.deps)),
                (o.value = i.value));
            }
          }
        }
      }
      function $i(e, n, t, r, o, i, l, u, a, s, c, d, f) {
        var p = e.def.nodes[n];
        return (
          Ni(e, p, t, r, o, i, l, u, a, s, c, d, f),
          224 & p.flags ? Sr(e, n).value : void 0
        );
      }
      function el(e, n, t, r, o, i, l, u, a, s, c, d, f) {
        var p = e.def.nodes[n];
        return (
          Ii(e, p, t, r, o, i, l, u, a, s, c, d, f),
          224 & p.flags ? Sr(e, n).value : void 0
        );
      }
      function nl(e) {
        return wl(ul.detectChanges, Ti, null, [e]);
      }
      function tl(e) {
        return wl(ul.checkNoChanges, ki, null, [e]);
      }
      function rl(e) {
        return wl(ul.destroy, Mi, null, [e]);
      }
      var ol,
        il,
        ll,
        ul = (function (e) {
          return (
            (e[(e.create = 0)] = "create"),
            (e[(e.detectChanges = 1)] = "detectChanges"),
            (e[(e.checkNoChanges = 2)] = "checkNoChanges"),
            (e[(e.destroy = 3)] = "destroy"),
            (e[(e.handleEvent = 4)] = "handleEvent"),
            e
          );
        })({});
      function al(e, n) {
        (il = e), (ll = n);
      }
      function sl(e, n, t, r) {
        return (
          al(e, n), wl(ul.handleEvent, e.def.handleEvent, null, [e, n, t, r])
        );
      }
      function cl(e, n) {
        if (128 & e.state) throw Ir(ul[ol]);
        return (
          al(e, gl(e, 0)),
          e.def.updateDirectives(function (e, t, r) {
            for (var o = [], i = 3; i < arguments.length; i++)
              o[i - 3] = arguments[i];
            var l = e.def.nodes[t];
            return (
              0 === n ? fl(e, l, r, o) : pl(e, l, r, o),
              16384 & l.flags && al(e, gl(e, t)),
              224 & l.flags ? Sr(e, l.nodeIndex).value : void 0
            );
          }, e)
        );
      }
      function dl(e, n) {
        if (128 & e.state) throw Ir(ul[ol]);
        return (
          al(e, yl(e, 0)),
          e.def.updateRenderer(function (e, t, r) {
            for (var o = [], i = 3; i < arguments.length; i++)
              o[i - 3] = arguments[i];
            var l = e.def.nodes[t];
            return (
              0 === n ? fl(e, l, r, o) : pl(e, l, r, o),
              3 & l.flags && al(e, yl(e, t)),
              224 & l.flags ? Sr(e, l.nodeIndex).value : void 0
            );
          }, e)
        );
      }
      function fl(e, n, t, r) {
        if (Ni.apply(void 0, d([e, n, t], r))) {
          var o = 1 === t ? r[0] : r;
          if (16384 & n.flags) {
            for (var i = {}, l = 0; l < n.bindings.length; l++) {
              var u = n.bindings[l],
                a = o[l];
              8 & u.flags &&
                (i[
                  ((p = u.nonMinifiedName),
                  "ng-reflect-" +
                    (p = p.replace(/[$@]/g, "_").replace(hl, function () {
                      for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                      return "-" + e[1].toLowerCase();
                    })))
                ] = vl(a));
            }
            var s = n.parent,
              c = Cr(e, s.nodeIndex).renderElement;
            if (s.element.name)
              for (var f in i)
                null != (a = i[f])
                  ? e.renderer.setAttribute(c, f, a)
                  : e.renderer.removeAttribute(c, f);
            else
              e.renderer.setValue(c, "bindings=" + JSON.stringify(i, null, 2));
          }
        }
        var p;
      }
      function pl(e, n, t, r) {
        Ii.apply(void 0, d([e, n, t], r));
      }
      var hl = /([A-Z])/g;
      function vl(e) {
        try {
          return null != e ? e.toString().slice(0, 30) : e;
        } catch (e) {
          return "[ERROR] Exception while trying to serialize the value";
        }
      }
      function gl(e, n) {
        for (var t = n; t < e.def.nodes.length; t++) {
          var r = e.def.nodes[t];
          if (16384 & r.flags && r.bindings && r.bindings.length) return t;
        }
        return null;
      }
      function yl(e, n) {
        for (var t = n; t < e.def.nodes.length; t++) {
          var r = e.def.nodes[t];
          if (3 & r.flags && r.bindings && r.bindings.length) return t;
        }
        return null;
      }
      var ml = (function () {
        function e(e, n) {
          (this.view = e),
            (this.nodeIndex = n),
            null == n && (this.nodeIndex = n = 0),
            (this.nodeDef = e.def.nodes[n]);
          for (var t = this.nodeDef, r = e; t && 0 == (1 & t.flags); )
            t = t.parent;
          if (!t) for (; !t && r; ) (t = Zr(r)), (r = r.parent);
          (this.elDef = t), (this.elView = r);
        }
        return (
          Object.defineProperty(e.prototype, "elOrCompView", {
            get: function () {
              return (
                Cr(this.elView, this.elDef.nodeIndex).componentView || this.view
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "injector", {
            get: function () {
              return Do(this.elView, this.elDef);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "component", {
            get: function () {
              return this.elOrCompView.component;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "context", {
            get: function () {
              return this.elOrCompView.context;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "providerTokens", {
            get: function () {
              var e = [];
              if (this.elDef)
                for (
                  var n = this.elDef.nodeIndex + 1;
                  n <= this.elDef.nodeIndex + this.elDef.childCount;
                  n++
                ) {
                  var t = this.elView.def.nodes[n];
                  20224 & t.flags && e.push(t.provider.token),
                    (n += t.childCount);
                }
              return e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "references", {
            get: function () {
              var e = {};
              if (this.elDef) {
                bl(this.elView, this.elDef, e);
                for (
                  var n = this.elDef.nodeIndex + 1;
                  n <= this.elDef.nodeIndex + this.elDef.childCount;
                  n++
                ) {
                  var t = this.elView.def.nodes[n];
                  20224 & t.flags && bl(this.elView, t, e), (n += t.childCount);
                }
              }
              return e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "componentRenderElement", {
            get: function () {
              var e = (function (e) {
                for (; e && !Qr(e); ) e = e.parent;
                return e.parent ? Cr(e.parent, Zr(e).nodeIndex) : null;
              })(this.elOrCompView);
              return e ? e.renderElement : void 0;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "renderNode", {
            get: function () {
              return 2 & this.nodeDef.flags
                ? Wr(this.view, this.nodeDef)
                : Wr(this.elView, this.elDef);
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.logError = function (e) {
            for (var n, t, r = [], o = 1; o < arguments.length; o++)
              r[o - 1] = arguments[o];
            2 & this.nodeDef.flags
              ? ((n = this.view.def), (t = this.nodeDef.nodeIndex))
              : ((n = this.elView.def), (t = this.elDef.nodeIndex));
            var i = (function (e, n) {
                for (var t = -1, r = 0; r <= n; r++)
                  3 & e.nodes[r].flags && t++;
                return t;
              })(n, t),
              l = -1;
            n.factory(function () {
              var n;
              return ++l === i ? (n = e.error).bind.apply(n, d([e], r)) : Or;
            }),
              l < i &&
                (e.error(
                  "Illegal state: the ViewDefinitionFactory did not call the logger!"
                ),
                e.error.apply(e, d(r)));
          }),
          e
        );
      })();
      function bl(e, n, t) {
        for (var r in n.references) t[r] = fi(e, n, n.references[r]);
      }
      function wl(e, n, t, r) {
        var o = ol,
          i = il,
          l = ll;
        try {
          ol = e;
          var u = n.apply(t, r);
          return (il = i), (ll = l), (ol = o), u;
        } catch (e) {
          if ($e(e) || !il) throw e;
          throw (function (e, n) {
            return (
              e instanceof Error || (e = new Error(e.toString())), Ar(e, n), e
            );
          })(e, _l());
        }
      }
      function _l() {
        return il ? new ml(il, ll) : null;
      }
      var El = (function () {
          function e(e) {
            this.delegate = e;
          }
          return (
            (e.prototype.createRenderer = function (e, n) {
              return new Cl(this.delegate.createRenderer(e, n));
            }),
            (e.prototype.begin = function () {
              this.delegate.begin && this.delegate.begin();
            }),
            (e.prototype.end = function () {
              this.delegate.end && this.delegate.end();
            }),
            (e.prototype.whenRenderingDone = function () {
              return this.delegate.whenRenderingDone
                ? this.delegate.whenRenderingDone()
                : Promise.resolve(null);
            }),
            e
          );
        })(),
        Cl = (function () {
          function e(e) {
            (this.delegate = e), (this.data = this.delegate.data);
          }
          return (
            (e.prototype.destroyNode = function (e) {
              !(function (e) {
                _t.delete(e.nativeNode);
              })(Et(e)),
                this.delegate.destroyNode && this.delegate.destroyNode(e);
            }),
            (e.prototype.destroy = function () {
              this.delegate.destroy();
            }),
            (e.prototype.createElement = function (e, n) {
              var t = this.delegate.createElement(e, n),
                r = _l();
              if (r) {
                var o = new wt(t, null, r);
                (o.name = e), Ct(o);
              }
              return t;
            }),
            (e.prototype.createComment = function (e) {
              var n = this.delegate.createComment(e),
                t = _l();
              return t && Ct(new bt(n, null, t)), n;
            }),
            (e.prototype.createText = function (e) {
              var n = this.delegate.createText(e),
                t = _l();
              return t && Ct(new bt(n, null, t)), n;
            }),
            (e.prototype.appendChild = function (e, n) {
              var t = Et(e),
                r = Et(n);
              t && r && t instanceof wt && t.addChild(r),
                this.delegate.appendChild(e, n);
            }),
            (e.prototype.insertBefore = function (e, n, t) {
              var r = Et(e),
                o = Et(n),
                i = Et(t);
              r && o && r instanceof wt && r.insertBefore(i, o),
                this.delegate.insertBefore(e, n, t);
            }),
            (e.prototype.removeChild = function (e, n) {
              var t = Et(e),
                r = Et(n);
              t && r && t instanceof wt && t.removeChild(r),
                this.delegate.removeChild(e, n);
            }),
            (e.prototype.selectRootElement = function (e) {
              var n = this.delegate.selectRootElement(e),
                t = _l();
              return t && Ct(new wt(n, null, t)), n;
            }),
            (e.prototype.setAttribute = function (e, n, t, r) {
              var o = Et(e);
              o && o instanceof wt && (o.attributes[r ? r + ":" + n : n] = t),
                this.delegate.setAttribute(e, n, t, r);
            }),
            (e.prototype.removeAttribute = function (e, n, t) {
              var r = Et(e);
              r &&
                r instanceof wt &&
                (r.attributes[t ? t + ":" + n : n] = null),
                this.delegate.removeAttribute(e, n, t);
            }),
            (e.prototype.addClass = function (e, n) {
              var t = Et(e);
              t && t instanceof wt && (t.classes[n] = !0),
                this.delegate.addClass(e, n);
            }),
            (e.prototype.removeClass = function (e, n) {
              var t = Et(e);
              t && t instanceof wt && (t.classes[n] = !1),
                this.delegate.removeClass(e, n);
            }),
            (e.prototype.setStyle = function (e, n, t, r) {
              var o = Et(e);
              o && o instanceof wt && (o.styles[n] = t),
                this.delegate.setStyle(e, n, t, r);
            }),
            (e.prototype.removeStyle = function (e, n, t) {
              var r = Et(e);
              r && r instanceof wt && (r.styles[n] = null),
                this.delegate.removeStyle(e, n, t);
            }),
            (e.prototype.setProperty = function (e, n, t) {
              var r = Et(e);
              r && r instanceof wt && (r.properties[n] = t),
                this.delegate.setProperty(e, n, t);
            }),
            (e.prototype.listen = function (e, n, t) {
              if ("string" != typeof e) {
                var r = Et(e);
                r &&
                  r.listeners.push(
                    new (function (e, n) {
                      (this.name = e), (this.callback = n);
                    })(n, t)
                  );
              }
              return this.delegate.listen(e, n, t);
            }),
            (e.prototype.parentNode = function (e) {
              return this.delegate.parentNode(e);
            }),
            (e.prototype.nextSibling = function (e) {
              return this.delegate.nextSibling(e);
            }),
            (e.prototype.setValue = function (e, n) {
              return this.delegate.setValue(e, n);
            }),
            e
          );
        })(),
        xl = (function (e) {
          function n(n, t, r) {
            var o = e.call(this) || this;
            return (
              (o.moduleType = n),
              (o._bootstrapComponents = t),
              (o._ngModuleDefFactory = r),
              o
            );
          }
          return (
            o(n, e),
            (n.prototype.create = function (e) {
              !(function () {
                if (!Vi) {
                  Vi = !0;
                  var e = it()
                    ? {
                        setCurrentNode: al,
                        createRootView: Fi,
                        createEmbeddedView: Ui,
                        createComponentView: Zi,
                        createNgModuleRef: Wi,
                        overrideProvider: Gi,
                        overrideComponentView: Ki,
                        clearOverrides: Xi,
                        checkAndUpdateView: nl,
                        checkNoChangesView: tl,
                        destroyView: rl,
                        createDebugContext: function (e, n) {
                          return new ml(e, n);
                        },
                        handleEvent: sl,
                        updateDirectives: cl,
                        updateRenderer: dl,
                      }
                    : {
                        setCurrentNode: function () {},
                        createRootView: Bi,
                        createEmbeddedView: wi,
                        createComponentView: Ei,
                        createNgModuleRef: Vo,
                        overrideProvider: Or,
                        overrideComponentView: Or,
                        clearOverrides: Or,
                        checkAndUpdateView: Ti,
                        checkNoChangesView: ki,
                        destroyView: Mi,
                        createDebugContext: function (e, n) {
                          return new ml(e, n);
                        },
                        handleEvent: function (e, n, t, r) {
                          return e.def.handleEvent(e, n, t, r);
                        },
                        updateDirectives: function (e, n) {
                          return e.def.updateDirectives(0 === n ? $i : el, e);
                        },
                        updateRenderer: function (e, n) {
                          return e.def.updateRenderer(0 === n ? $i : el, e);
                        },
                      };
                  (Tr.setCurrentNode = e.setCurrentNode),
                    (Tr.createRootView = e.createRootView),
                    (Tr.createEmbeddedView = e.createEmbeddedView),
                    (Tr.createComponentView = e.createComponentView),
                    (Tr.createNgModuleRef = e.createNgModuleRef),
                    (Tr.overrideProvider = e.overrideProvider),
                    (Tr.overrideComponentView = e.overrideComponentView),
                    (Tr.clearOverrides = e.clearOverrides),
                    (Tr.checkAndUpdateView = e.checkAndUpdateView),
                    (Tr.checkNoChangesView = e.checkNoChangesView),
                    (Tr.destroyView = e.destroyView),
                    (Tr.resolveDep = ri),
                    (Tr.createDebugContext = e.createDebugContext),
                    (Tr.handleEvent = e.handleEvent),
                    (Tr.updateDirectives = e.updateDirectives),
                    (Tr.updateRenderer = e.updateRenderer),
                    (Tr.dirtyParentQueries = si);
                }
              })();
              var n = (function (e) {
                var n = Array.from(e.providers),
                  t = Array.from(e.modules),
                  r = {};
                for (var o in e.providersByKey) r[o] = e.providersByKey[o];
                return {
                  factory: e.factory,
                  isRoot: e.isRoot,
                  providers: n,
                  modules: t,
                  providersByKey: r,
                };
              })(Jr(this._ngModuleDefFactory));
              return Tr.createNgModuleRef(
                this.moduleType,
                e || Ie.NULL,
                this._bootstrapComponents,
                n
              );
            }),
            n
          );
        })(Vn),
        Sl = 16,
        kl = 0,
        Tl = 1,
        Nl = 2,
        Al = 3,
        Il = 4,
        Ol = 5,
        Ml = 6,
        Rl = 7,
        Dl = 8,
        Pl = 9,
        jl = 10,
        Hl = 11,
        Ll = 14;
      function Vl(e, n, t) {
        e.afterContentInit &&
          (n.contentHooks || (n.contentHooks = [])).push(t, e.afterContentInit),
          e.afterContentChecked &&
            ((n.contentHooks || (n.contentHooks = [])).push(
              t,
              e.afterContentChecked
            ),
            (n.contentCheckHooks || (n.contentCheckHooks = [])).push(
              t,
              e.afterContentChecked
            ));
      }
      function Bl(e, n, t) {
        e.afterViewInit &&
          (n.viewHooks || (n.viewHooks = [])).push(t, e.afterViewInit),
          e.afterViewChecked &&
            ((n.viewHooks || (n.viewHooks = [])).push(t, e.afterViewChecked),
            (n.viewCheckHooks || (n.viewCheckHooks = [])).push(
              t,
              e.afterViewChecked
            ));
      }
      function Fl(e, n, t) {
        null != e.onDestroy &&
          (n.destroyHooks || (n.destroyHooks = [])).push(t, e.onDestroy);
      }
      function zl(e, n, t) {
        16 & e[Il] && (Ul(e[Rl], n.initHooks, n.checkHooks, t), (e[Il] &= -17));
      }
      function Ul(e, n, t, r) {
        var o = r ? n : t;
        o && Zl(e, o);
      }
      function Zl(e, n) {
        for (var t = 0; t < n.length; t += 2) n[t + 1].call(e[n[t]]);
      }
      var Wl = 0,
        Ql = 4,
        Yl = "ngProjectAs";
      function ql(e) {
        return !!e.listen;
      }
      var Gl = {
        createRenderer: function (e, n) {
          return document;
        },
      };
      function Kl(e) {
        return Array.isArray(e) ? e[0] : e;
      }
      function Xl(e) {
        if (2 === e.tNode.type) {
          var n = e.data;
          return n[Nl] ? n[Nl][Ol] : null;
        }
        return e.tNode.next ? e.view[e.tNode.next.index] : null;
      }
      function Jl(e) {
        return e.tNode.child
          ? Kl((2 === e.tNode.type ? e.data : e.view)[e.tNode.child.index])
          : null;
      }
      function $l(e) {
        if (-1 === e.tNode.index && 2 === e.tNode.type) {
          var n = e.data[Ll];
          return -1 === n ? null : e.view[n].dynamicLContainerNode;
        }
        var t = e.tNode.parent;
        return Kl(t ? e.view[t.index] : e.view[Ol]);
      }
      var eu = [];
      function nu(e) {
        for (var n = e[Ol]; 2 === n.tNode.type; ) n = (e = e[Tl])[Ol];
        return n;
      }
      function tu(e, n, t, r, o) {
        0 === e
          ? ql(n)
            ? n.insertBefore(t, r, o)
            : t.insertBefore(r, o, !0)
          : 1 === e
          ? ql(n)
            ? n.removeChild(t, r)
            : t.removeChild(r)
          : 2 === e && n.destroyNode(r);
      }
      function ru(e) {
        if (-1 === e[kl].childIndex) return null;
        var n = e[e[kl].childIndex];
        return n.data ? n.data : n.dynamicLContainerNode.data;
      }
      function ou(e, n) {
        var t;
        return (t = e[Ol]) && 2 === t.tNode.type
          ? $l(t).data
          : e[Tl] === n
          ? null
          : e[Tl];
      }
      function iu(e) {
        if (e[kl]) {
          var n = e;
          !(function (e) {
            var n = e[kl].cleanup;
            if (null != n) {
              for (var t = 0; t < n.length - 1; t += 2)
                "string" == typeof n[t]
                  ? (Kl(e[n[t + 1]]).native.removeEventListener(
                      n[t],
                      e[Dl][n[t + 2]],
                      n[t + 3]
                    ),
                    (t += 2))
                  : "number" == typeof n[t]
                  ? (0, e[Dl][n[t]])()
                  : n[t].call(e[Dl][n[t + 1]]);
              e[Dl] = null;
            }
          })(n),
            (function (e) {
              var n,
                t = e[kl];
              null != t && null != (n = t.destroyHooks) && Zl(e[Rl], n);
            })(n),
            (r = (t = n)[kl] && t[kl].pipeDestroyHooks) && Zl(t, r),
            -1 === n[kl].id && ql(n[Hl]) && n[Hl].destroy();
        }
        var t, r;
      }
      var lu,
        uu,
        au,
        su,
        cu,
        du,
        fu,
        pu,
        hu,
        vu = "__ngHostLNode__",
        gu = Promise.resolve(null),
        yu = [0, 0],
        mu = new Array(Sl).fill(null),
        bu = !1,
        wu = !0;
      function _u(e, n) {
        var t = pu;
        return (
          (hu = e && e[Rl]),
          (cu = e && e[kl]),
          (fu = e && 1 == (1 & e[Il])),
          (wu = e && cu.firstTemplatePass),
          (lu = e && e[Hl]),
          null != n && ((au = n), (su = !0)),
          (pu = e),
          (du = e && e[Al]),
          t
        );
      }
      function Eu(e, n) {
        n ||
          (bu || Ul(hu, cu.viewHooks, cu.viewCheckHooks, fu), (pu[Il] &= -6)),
          (pu[Il] |= 16),
          (pu[Ml] = -1),
          _u(e, null);
      }
      function Cu() {
        bu || zl(pu, cu, fu),
          (function (e) {
            for (var n = ru(pu); null !== n; n = n[Nl])
              if (n.length < Sl && null === n[Wl])
                for (var t = n, r = 0; r < t[Ql].length; r++) {
                  var o = t[Ql][r],
                    i = o.data;
                  Tu(o, i[kl], i[Pl], 2);
                }
          })(),
          bu || Ul(hu, cu.contentHooks, cu.contentCheckHooks, fu),
          (cu.firstTemplatePass = wu = !1),
          xu(cu.hostBindings),
          (function (e) {
            if (null != e.contentQueries)
              for (var n = 0; n < e.contentQueries.length; n += 2) {
                var t = e.contentQueries[n];
                e.directives[t].contentQueriesRefresh(
                  t,
                  e.contentQueries[n + 1]
                );
              }
          })(cu),
          (function (e) {
            if (null != e)
              for (var n = 0; n < e.length; n += 2) Pu(e[n], e[n + 1]);
          })(cu.components);
      }
      function xu(e) {
        if (null != e)
          for (var n = cu.directives, t = 0; t < e.length; t += 2) {
            var r = e[t],
              o = n[r];
            o.hostBindings && o.hostBindings(r, e[t + 1]);
          }
      }
      function Su(e, n, t, r, o) {
        return [
          n,
          pu,
          null,
          null,
          25 | r,
          null,
          -1,
          null,
          null,
          t,
          pu && pu[jl],
          e,
          o || null,
          null,
          -1,
          null,
        ];
      }
      function ku(e, n, t, r, o, i) {
        var l = su ? au : au && $l(au),
          u = l && l.view === pu ? l.tNode : null,
          a =
            (su ? du : au && au.queries) ||
            (l && l.queries && l.queries.child()),
          s = null != i,
          c = (function (e, n, t, r, o, i) {
            return {
              native: r,
              view: pu,
              nodeInjector: t ? t.nodeInjector : null,
              data: o,
              queries: i,
              tNode: null,
              dynamicLContainerNode: null,
            };
          })(0, 0, l, t, s ? i : null, a);
        if (-1 === e || 2 === n)
          c.tNode = (i ? i[kl].node : null) || Du(n, e, null, null, u, null);
        else {
          var d = e + Sl,
            f = cu.data;
          if (((pu[d] = c), d >= f.length)) {
            var p = (f[d] = Du(n, d, r, o, u, null));
            if (!su && au) {
              var h = au.tNode;
              (h.next = p),
                h.dynamicContainerNode && (h.dynamicContainerNode.next = p);
            }
          }
          (c.tNode = f[d]),
            su &&
              ((du = null),
              ((null == au.tNode.child && au.view === pu) ||
                2 === au.tNode.type) &&
                (au.tNode.child = c.tNode));
        }
        if (2 == (2 & n) && s) {
          var v = i;
          (v[Ol] = c), wu && (v[kl].node = c.tNode);
        }
        return (au = c), (su = !0), c;
      }
      function Tu(e, n, t, r) {
        var o,
          i = su,
          l = au;
        if (null == e.data[Tl] && e.data[Pl] && !n.template) Hu(e.data[Pl]);
        else
          try {
            (su = !0),
              (au = null),
              (o = _u(e.data, e)),
              Ou(),
              n.template(r, t),
              2 & r ? Cu() : (e.data[kl].firstTemplatePass = wu = !1);
          } finally {
            Eu(o, 1 == (1 & r)), (su = i), (au = l);
          }
        return e;
      }
      function Nu(e, n, t, r) {
        var o = _u(n, e);
        try {
          uu.begin && uu.begin(),
            r
              ? (Ou(), r(Au(n), t), Cu())
              : (bu ||
                  (zl(pu, cu, fu),
                  Ul(hu, cu.contentHooks, cu.contentCheckHooks, fu)),
                xu(yu),
                Pu(0, Sl));
        } finally {
          uu.end && uu.end(), Eu(o);
        }
      }
      function Au(e) {
        return 1 & e[Il] ? 3 : 2;
      }
      var Iu = null;
      function Ou() {
        Iu = null;
      }
      function Mu(e, n, t, r, o) {
        return {
          id: e,
          template: n,
          viewQuery: o,
          node: null,
          data: mu.slice(),
          childIndex: -1,
          bindingStartIndex: -1,
          directives: null,
          firstTemplatePass: !0,
          initHooks: null,
          checkHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          pipeDestroyHooks: null,
          cleanup: null,
          hostBindings: null,
          contentQueries: null,
          components: null,
          directiveRegistry: "function" == typeof t ? t() : t,
          pipeRegistry: "function" == typeof r ? r() : r,
          currentMatches: null,
        };
      }
      function Ru(e, n) {
        uu = e;
        var t = e.createRenderer(null, null);
        return "string" == typeof n
          ? ql(t)
            ? t.selectRootElement(n)
            : t.querySelector(n)
          : n;
      }
      function Du(e, n, t, r, o, i) {
        return {
          type: e,
          index: n,
          flags: 0,
          tagName: t,
          attrs: r,
          localNames: null,
          initialInputs: void 0,
          inputs: void 0,
          outputs: void 0,
          tViews: i,
          next: null,
          child: null,
          parent: o,
          dynamicContainerNode: null,
          detached: null,
          stylingTemplate: null,
          projection: null,
        };
      }
      function Pu(e, n) {
        var t = pu[n],
          r = t.data;
        ju(r) && 6 & r[Il] && Bu(r, t, hu[e]);
      }
      function ju(e) {
        return 8 == (8 & e[Il]);
      }
      function Hu(e) {
        for (var n = 0; n < e.components.length; n++) {
          var t = e.components[n];
          Nu(Fu(t), Lu(t), t);
        }
      }
      function Lu(e) {
        for (var n = Fu(e).view; n[Tl]; ) n = n[Tl];
        return n;
      }
      function Vu(e) {
        var n = Fu(e);
        Bu(n.data, n, e);
      }
      function Bu(e, n, t) {
        var r = _u(e, n),
          o = e[kl],
          i = o.template,
          l = o.viewQuery;
        try {
          Ou(),
            (function (n, t, r) {
              n && 1 & e[Il] && n(1, r);
            })(l, 0, t),
            i(Au(e), t),
            Cu(),
            (function (e, n) {
              e && e(2, n);
            })(l, t);
        } finally {
          Eu(r);
        }
      }
      function Fu(e) {
        return e[vu];
      }
      var zu = gu;
      function Uu(e) {
        return { components: [], scheduler: e, clean: zu };
      }
      var Zu = (function () {
          function e(e, n) {
            (this._view = e),
              (this._appRef = null),
              (this._viewContainerRef = null),
              (this._lViewNode = null),
              (this.context = n);
          }
          return (
            (e.prototype._setComponentContext = function (e, n) {
              (this._view = e), (this.context = n);
            }),
            Object.defineProperty(e.prototype, "destroyed", {
              get: function () {
                return 32 == (32 & this._view[Il]);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.destroy = function () {
              var e, n;
              this._viewContainerRef &&
                ju(this._view) &&
                (this._viewContainerRef.detach(
                  this._viewContainerRef.indexOf(this)
                ),
                (this._viewContainerRef = null)),
                ql((n = (e = this._view)[Hl])) &&
                  n.destroyNode &&
                  (function (n, t, r, o, i, l) {
                    for (var u = e[Ol], a = -1; u; ) {
                      var s = null,
                        c = u.tNode.type;
                      if (3 === c)
                        tu(2, o, null, u.native, l),
                          u.dynamicLContainerNode &&
                            tu(2, o, null, u.dynamicLContainerNode.native, l);
                      else if (0 === c) {
                        tu(2, o, null, u.native, l);
                        var d = u,
                          f = d.dynamicLContainerNode
                            ? d.dynamicLContainerNode.data
                            : d.data;
                        (s = f[Ql].length ? Jl(f[Ql][0]) : null) &&
                          (l = d.dynamicLContainerNode
                            ? d.dynamicLContainerNode.native
                            : d.native);
                      } else if (1 === c) {
                        var p = nu(u.view),
                          h = p.tNode.projection[u.tNode.projection];
                        (eu[++a] = u), (s = h ? p.data[Tl][h.index] : null);
                      } else s = Jl(u);
                      if (null === s)
                        for (
                          null === (s = Xl(u)) &&
                          8192 & u.tNode.flags &&
                          (s = Xl(eu[a--]));
                          u && !s;

                        ) {
                          if (null === (u = $l(u)) || u === t) return null;
                          u.tNode.next || 0 !== c || (l = u.native),
                            (s = Xl(u));
                        }
                      u = s;
                    }
                  })(0, e[Ol], 0, n),
                (function (e) {
                  if (-1 === e[kl].childIndex) return iu(e);
                  for (var n = ru(e); n; ) {
                    var t = null;
                    if (
                      (n.length >= Sl
                        ? n[kl].childIndex > -1 && (t = ru(n))
                        : n[Ql].length && (t = n[Ql][0].data),
                      null == t)
                    ) {
                      for (; n && !n[Nl] && n !== e; ) iu(n), (n = ou(n, e));
                      iu(n || e), (t = n && n[Nl]);
                    }
                    n = t;
                  }
                })(e),
                (e[Il] |= 32);
            }),
            (e.prototype.onDestroy = function (e) {
              var n, t;
              (t = e),
                (function (e) {
                  return e[Dl] || (e[Dl] = []);
                })((n = this._view)).push(t),
                n[kl].firstTemplatePass &&
                  (function (e) {
                    return e[kl].cleanup || (e[kl].cleanup = []);
                  })(n).push(n[Dl].length - 1, null);
            }),
            (e.prototype.markForCheck = function () {
              !(function (e) {
                for (var n = e; null != n[Tl]; ) (n[Il] |= 4), (n = n[Tl]);
                var t, r;
                (n[Il] |= 4),
                  (t = n[Pl]).clean == gu &&
                    ((t.clean = new Promise(function (e) {
                      return (r = e);
                    })),
                    t.scheduler(function () {
                      Hu(t), r(null), (t.clean = gu);
                    }));
              })(this._view);
            }),
            (e.prototype.detach = function () {
              this._view[Il] &= -9;
            }),
            (e.prototype.reattach = function () {
              this._view[Il] |= 8;
            }),
            (e.prototype.detectChanges = function () {
              Vu(this.context);
            }),
            (e.prototype.checkNoChanges = function () {
              !(function (e) {
                bu = !0;
                try {
                  Vu(e);
                } finally {
                  bu = !1;
                }
              })(this.context);
            }),
            (e.prototype.attachToViewContainerRef = function (e) {
              this._viewContainerRef = e;
            }),
            (e.prototype.detachFromAppRef = function () {
              this._appRef = null;
            }),
            (e.prototype.attachToAppRef = function (e) {
              this._appRef = e;
            }),
            e
          );
        })(),
        Wu = (function (e) {
          function n() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            o(n, e),
            (n.prototype.resolveComponentFactory = function (e) {
              return new Gu(e.ngComponentDef);
            }),
            n
          );
        })(Pn);
      function Qu(e) {
        var n = [];
        for (var t in e)
          e.hasOwnProperty(t) && n.push({ propName: e[t], templateName: t });
        return n;
      }
      var Yu = new ue("ROOT_CONTEXT_TOKEN", {
          providedIn: "root",
          factory: function () {
            return Uu(Qe(qu));
          },
        }),
        qu = new ue("SCHEDULER_TOKEN", {
          providedIn: "root",
          factory: function () {
            return requestAnimationFrame.bind(window);
          },
        }),
        Gu = (function (e) {
          function n(n) {
            var t = e.call(this) || this;
            return (
              (t.componentDef = n),
              (t.componentType = n.type),
              (t.selector = n.selectors[0][0]),
              (t.ngContentSelectors = []),
              t
            );
          }
          return (
            o(n, e),
            Object.defineProperty(n.prototype, "inputs", {
              get: function () {
                return Qu(this.componentDef.inputs);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(n.prototype, "outputs", {
              get: function () {
                return Qu(this.componentDef.outputs);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (n.prototype.create = function (e, n, t, r) {
              var o,
                i,
                l = void 0 === t,
                u = r ? r.injector.get(pt) : Gl,
                a = l
                  ? ((o = this.selector),
                    ql(
                      (i =
                        u.createRenderer(
                          null,
                          this.componentDef.rendererType
                        ) || lu)
                    )
                      ? i.createElement(o, Iu)
                      : null === Iu
                      ? i.createElement(o)
                      : i.createElementNS(Iu, o))
                  : Ru(u, t),
                s =
                  r && !l
                    ? r.injector.get(Yu)
                    : Uu(requestAnimationFrame.bind(window)),
                c = Su(
                  u.createRenderer(a, this.componentDef.rendererType),
                  Mu(-1, null, null, null, null),
                  s,
                  this.componentDef.onPush ? 4 : 2
                );
              c[jl] = (r && r.injector) || null;
              var d,
                f,
                p = _u(c, null);
              try {
                if (
                  (u.begin && u.begin(),
                  (f = (function (e, n, t, r) {
                    (su = !1), (au = null);
                    var o,
                      i = ku(
                        0,
                        3,
                        n,
                        null,
                        null,
                        Su(
                          lu,
                          (o = t.template).ngPrivateData ||
                            (o.ngPrivateData = Mu(
                              -1,
                              o,
                              t.directiveDefs,
                              t.pipeDefs,
                              t.viewQuery
                            )),
                          null,
                          t.onPush ? 4 : 2,
                          r
                        )
                      );
                    return (
                      wu &&
                        ((i.tNode.flags = 4096),
                        t.diPublic && t.diPublic(t),
                        (cu.directives = [t])),
                      i
                    );
                  })(0, a, this.componentDef)),
                  s.components.push(
                    (d = (function (e, n, t) {
                      if (
                        (Object.defineProperty(n, vu, {
                          enumerable: !1,
                          value: au,
                        }),
                        null == hu && (pu[Rl] = hu = []),
                        (hu[e] = n),
                        wu)
                      ) {
                        var r = au.tNode.flags;
                        0 == (4095 & r)
                          ? (au.tNode.flags = (e << 14) | (4096 & r) | 1)
                          : au.tNode.flags++;
                      } else {
                        var o = t.diPublic;
                        o && o(t);
                      }
                      return (
                        null != t.attributes &&
                          3 == au.tNode.type &&
                          (function (e, n) {
                            for (var t = ql(lu), r = 0; r < n.length; ) {
                              var o = n[r];
                              if (1 === o) break;
                              if (o === Yl) r += 2;
                              else if (0 === o) {
                                var i = n[r + 1],
                                  l = n[r + 2],
                                  u = n[r + 3];
                                t
                                  ? lu.setAttribute(e, l, u, i)
                                  : e.setAttributeNS(i, l, u),
                                  (r += 4);
                              } else
                                (u = n[r + 1]),
                                  t
                                    ? lu.setAttribute(e, o, u)
                                    : e.setAttribute(o, u),
                                  (r += 2);
                            }
                          })(au.native, t.attributes),
                        n
                      );
                    })(0, this.componentDef.factory(), this.componentDef))
                  ),
                  (function (e, n, t) {
                    e &&
                      null != e.changeDetectorRef &&
                      e.changeDetectorRef._setComponentContext(f.data, d);
                  })(f.nodeInjector),
                  (function (e, n) {
                    var t = Fu(e),
                      r = t.view[kl];
                    (function (e, n, t, r) {
                      n && (r.initHooks || (r.initHooks = [])).push(0, n),
                        t &&
                          ((r.initHooks || (r.initHooks = [])).push(0, t),
                          (r.checkHooks || (r.checkHooks = [])).push(0, t));
                    })(0, n.onInit, n.doCheck, r),
                      (function (e, n) {
                        if (n.firstTemplatePass)
                          for (
                            var t = e >> 14, r = t + (4095 & e), o = t;
                            o < r;
                            o++
                          ) {
                            var i = n.directives[o];
                            Vl(i, n, o), Bl(i, n, o), Fl(i, n, o);
                          }
                      })(t.tNode.flags, r);
                  })(d, this.componentDef),
                  n)
                )
                  for (
                    var h = 0, v = (f.tNode.projection = []), g = 0;
                    g < n.length;
                    g++
                  ) {
                    for (
                      var y = n[g], m = null, b = null, w = 0;
                      w < y.length;
                      w++
                    ) {
                      var _ = ku(++h, 3, y[w], null, null);
                      b ? (b.next = _.tNode) : (m = _.tNode), (b = _.tNode);
                    }
                    v.push(m);
                  }
                Tu(f, f.data[kl], d, 1), (f.data[Il] &= -2);
              } finally {
                _u(p, null), u.end && u.end();
              }
              var E = new Ku(this.componentType, d, c, e, a);
              return l && (E.hostView._lViewNode.tNode.child = f.tNode), E;
            }),
            n
          );
        })(An),
        Ku = (function (e) {
          function n(n, t, r, o, i) {
            var l = e.call(this) || this;
            return (
              (l.destroyCbs = []),
              (l.instance = t),
              (l.hostView = l.changeDetectorRef = new Zu(r, t)),
              (l.hostView._lViewNode = ku(-1, 2, null, null, null, r)),
              (l.injector = o),
              (l.location = new gt(i)),
              (l.componentType = n),
              l
            );
          }
          return (
            o(n, e),
            (n.prototype.destroy = function () {
              this.destroyCbs.forEach(function (e) {
                return e();
              }),
                (this.destroyCbs = null);
            }),
            (n.prototype.onDestroy = function (e) {
              this.destroyCbs.push(e);
            }),
            n
          );
        })(Nn),
        Xu = {
          provide: Pn,
          useFactory: function () {
            return new Wu();
          },
          deps: [],
        },
        Ju = (function (e) {
          function n(n, t) {
            var r = e.call(this) || this;
            return (
              (r._bootstrapComponents = []),
              (r.destroyCbs = []),
              (r._bootstrapComponents = n.ngModuleDef.bootstrap),
              (r.injector = (function (e, n, t) {
                return (
                  void 0 === n && (n = null),
                  void 0 === t && (t = null),
                  (n = n || sn()),
                  new cn(e, t, n)
                );
              })(n, t, [Xu, { provide: Ln, useValue: r }])),
              (r.instance = r.injector.get(n)),
              (r.componentFactoryResolver = new Wu()),
              r
            );
          }
          return (
            o(n, e),
            (n.prototype.destroy = function () {
              this.destroyCbs.forEach(function (e) {
                return e();
              }),
                (this.destroyCbs = null);
            }),
            (n.prototype.onDestroy = function (e) {
              this.destroyCbs.push(e);
            }),
            n
          );
        })(Ln);
      !(function (e) {
        function n(n) {
          var t = e.call(this) || this;
          return (t.moduleType = n), t;
        }
        o(n, e),
          (n.prototype.create = function (e) {
            return new Ju(this.moduleType, e);
          });
      })(Vn);
      var $u = function () {},
        ea = (function () {
          function e() {
            this.config = {
              licenseKey: "YOUR LICENSE KEY HERE",
              anchors: ["page1", "page2", "page3", "page4", "page5"],
              menu: "#menu",
              navigation: !0,
              sectionsColor: [
                "#0798ec",
                "#e4273b",
                "#fec401",
                "whitesmoke",
                "#ccddff",
              ],
            };
          }
          return (
            (e.prototype.ngOnInit = function () {}),
            (e.prototype.getRef = function (e) {
              this.fullpage_api = e;
            }),
            e
          );
        })(),
        na = function () {},
        ta = void 0,
        ra = [
          "en",
          [["a", "p"], ["AM", "PM"], ta],
          [["AM", "PM"], ta, ta],
          [
            ["S", "M", "T", "W", "T", "F", "S"],
            ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          ],
          ta,
          [
            ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
          ],
          ta,
          [
            ["B", "A"],
            ["BC", "AD"],
            ["Before Christ", "Anno Domini"],
          ],
          0,
          [6, 0],
          ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
          ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
          ["{1}, {0}", ta, "{1} 'at' {0}", ta],
          [
            ".",
            ",",
            ";",
            "%",
            "+",
            "-",
            "E",
            "\xd7",
            "\u2030",
            "\u221e",
            "NaN",
            ":",
          ],
          ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
          "$",
          "US Dollar",
          {},
          function (e) {
            var n = Math.floor(Math.abs(e)),
              t = e.toString().replace(/^[^.]*\.?/, "").length;
            return 1 === n && 0 === t ? 1 : 5;
          },
        ],
        oa = {},
        ia = (function (e) {
          return (
            (e[(e.Zero = 0)] = "Zero"),
            (e[(e.One = 1)] = "One"),
            (e[(e.Two = 2)] = "Two"),
            (e[(e.Few = 3)] = "Few"),
            (e[(e.Many = 4)] = "Many"),
            (e[(e.Other = 5)] = "Other"),
            e
          );
        })({}),
        la = new ue("UseV4Plurals"),
        ua = function () {},
        aa = (function (e) {
          function n(n, t) {
            var r = e.call(this) || this;
            return (r.locale = n), (r.deprecatedPluralFn = t), r;
          }
          return (
            o(n, e),
            (n.prototype.getPluralCategory = function (e, n) {
              switch (
                this.deprecatedPluralFn
                  ? this.deprecatedPluralFn(n || this.locale, e)
                  : (function (e) {
                      return (function (e) {
                        var n = e.toLowerCase().replace(/_/g, "-"),
                          t = oa[n];
                        if (t) return t;
                        var r = n.split("-")[0];
                        if ((t = oa[r])) return t;
                        if ("en" === r) return ra;
                        throw new Error(
                          'Missing locale data for the locale "' + e + '".'
                        );
                      })(e)[18];
                    })(n || this.locale)(e)
              ) {
                case ia.Zero:
                  return "zero";
                case ia.One:
                  return "one";
                case ia.Two:
                  return "two";
                case ia.Few:
                  return "few";
                case ia.Many:
                  return "many";
                default:
                  return "other";
              }
            }),
            l([u(0, _e(Wt)), u(1, Ee()), u(1, _e(la))], n)
          );
        })(ua),
        sa = function () {},
        ca = new ue("DocumentToken"),
        da = "server";
      function fa(e) {
        return e === da;
      }
      var pa = null;
      pa || "undefined" == typeof window || (pa = t("Dm1U"));
      var ha = (function () {
          function e(e, n) {
            (this.platformId = e), (this.renderer = n), (this.ref = new Zn());
          }
          return (
            (e.prototype.ngAfterViewInit = function () {
              "browser" === this.platformId && this.initFullpage(),
                fa(this.platformId);
            }),
            (e.prototype.initFullpage = function () {
              (this.fullpage_api = new pa("#" + this.id, this.options)),
                this.addBuildFunction(),
                this.ref.emit(this.fullpage_api);
            }),
            (e.prototype.addBuildFunction = function () {
              var e = this;
              this.fullpage_api.build = function () {
                var n = e.fullpage_api.getActiveSection(),
                  t = e.fullpage_api.getActiveSlide();
                e.destroyFullpage(),
                  n && e.renderer.addClass(n.item, "active"),
                  t && e.renderer.addClass(t.item, "active"),
                  e.initFullpage();
              };
            }),
            (e.prototype.destroyFullpage = function () {
              void 0 !== this.fullpage_api &&
                void 0 !== this.fullpage_api.destroy &&
                this.fullpage_api.destroy("all");
            }),
            (e.prototype.ngOnDestroy = function () {
              this.destroyFullpage();
            }),
            e
          );
        })(),
        va = (function () {
          function e() {}
          return (
            (e.prototype.onClick = function (e) {
              this.href.length > 0 &&
                "#" === this.href[0] &&
                (e.preventDefault(), (window.location.hash = this.href));
            }),
            e
          );
        })(),
        ga = function () {},
        ya = (function (e) {
          return {
            id: Dr,
            styles: e.styles,
            encapsulation: e.encapsulation,
            data: e.data,
          };
        })({ encapsulation: 0, styles: [[""]], data: {} });
      function ma(e) {
        return yi(
          0,
          [
            (e()(),
            uo(
              0,
              0,
              null,
              null,
              2,
              "a",
              [
                ["alt", "fullPage homepage"],
                ["href", "https://alvarotrigo.com/fullPage/"],
                ["id", "logo"],
              ],
              null,
              [[null, "click"]],
              function (e, n, t) {
                var r = !0;
                return (
                  "click" === n && (r = !1 !== jo(e, 1).onClick(t) && r), r
                );
              },
              null,
              null
            )),
            Go(1, 16384, null, 0, va, [], { href: [0, "href"] }, null),
            (e()(), hi(-1, null, ["fullPage"])),
            (e()(),
            uo(
              3,
              0,
              null,
              null,
              18,
              "ul",
              [["id", "menu"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            uo(
              4,
              0,
              null,
              null,
              3,
              "li",
              [
                ["class", "active"],
                ["data-menuanchor", "page1"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            uo(
              5,
              0,
              null,
              null,
              2,
              "a",
              [["href", "#page1"]],
              null,
              [[null, "click"]],
              function (e, n, t) {
                var r = !0;
                return (
                  "click" === n && (r = !1 !== jo(e, 6).onClick(t) && r), r
                );
              },
              null,
              null
            )),
            Go(6, 16384, null, 0, va, [], { href: [0, "href"] }, null),
            (e()(), hi(-1, null, ["intro"])),
            (e()(),
            uo(
              8,
              0,
              null,
              null,
              3,
              "li",
              [["data-menuanchor", "page2"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            uo(
              9,
              0,
              null,
              null,
              2,
              "a",
              [["href", "#page2"]],
              null,
              [[null, "click"]],
              function (e, n, t) {
                var r = !0;
                return (
                  "click" === n && (r = !1 !== jo(e, 10).onClick(t) && r), r
                );
              },
              null,
              null
            )),
            Go(10, 16384, null, 0, va, [], { href: [0, "href"] }, null),
            (e()(), hi(-1, null, ["skills"])),
            (e()(),
            uo(
              12,
              0,
              null,
              null,
              3,
              "li",
              [["data-menuanchor", "page3"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            uo(
              13,
              0,
              null,
              null,
              2,
              "a",
              [["href", "#page3"]],
              null,
              [[null, "click"]],
              function (e, n, t) {
                var r = !0;
                return (
                  "click" === n && (r = !1 !== jo(e, 14).onClick(t) && r), r
                );
              },
              null,
              null
            )),
            Go(14, 16384, null, 0, va, [], { href: [0, "href"] }, null),
            (e()(), hi(-1, null, ["works"])),
            (e()(),
            uo(16, 0, null, null, 5, "li", [], null, null, null, null, null)),
            (e()(),
            uo(
              17,
              0,
              null,
              null,
              4,
              "a",
              [
                ["class", "twitter-share"],
                ["href", "https://twitter.com/imac2"],
                ["rel", "noopener"],
                ["target", "_blank"],
              ],
              null,
              [[null, "click"]],
              function (e, n, t) {
                var r = !0;
                return (
                  "click" === n && (r = !1 !== jo(e, 18).onClick(t) && r), r
                );
              },
              null,
              null
            )),
            Go(18, 16384, null, 0, va, [], { href: [0, "href"] }, null),
            (e()(),
            uo(19, 0, null, null, 2, "i", [], null, null, null, null, null)),
            (e()(),
            uo(
              20,
              0,
              null,
              null,
              1,
              ":svg:svg",
              [["viewBox", "0 0 512 512"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            uo(
              21,
              0,
              null,
              null,
              0,
              ":svg:path",
              [
                [
                  "d",
                  "M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z",
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            uo(
              22,
              0,
              [["fullpageRef", 1]],
              null,
              258,
              "div",
              [
                ["fullpage", ""],
                ["id", "fullpage"],
              ],
              null,
              [[null, "ref"]],
              function (e, n, t) {
                var r = !0;
                return (
                  "ref" === n && (r = !1 !== e.component.getRef(t) && r), r
                );
              },
              null,
              null
            )),
            Go(
              23,
              4341760,
              null,
              0,
              ha,
              [En, vt],
              { id: [0, "id"], options: [1, "options"] },
              { ref: "ref" }
            ),
            (e()(),
            uo(
              24,
              0,
              null,
              null,
              14,
              "div",
              [
                ["class", "section fp-table active"],
                ["id", "section-1"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            uo(
              25,
              0,
              null,
              null,
              13,
              "div",
              [["class", "fp-tableCell"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            uo(26, 0, null, null, 1, "h2", [], null, null, null, null, null)),
            (e()(), hi(-1, null, ["HI"])),
            (e()(),
            uo(28, 0, null, null, 1, "h1", [], null, null, null, null, null)),
            (e()(),
            hi(-1, null, [
              "HI THERE I'M eunyoung. FRONT-END DEVELOPER",
            ])),
            (e()(),
            uo(30, 0, null, null, 8, "ul", [], null, null, null, null, null)),
            (e()(),
            uo(31, 0, null, null, 3, "li", [], null, null, null, null, null)),
            (e()(),
            uo(
              32,
              0,
              null,
              null,
              2,
              "a",
              [
                ["class", "section-1-button section-1-extensionsButton"],
                ["data-t", ""],
                ["href", "https://alvarotrigo.com/fullPage/extensions/"],
              ],
              null,
              [[null, "click"]],
              function (e, n, t) {
                var r = !0;
                return (
                  "click" === n && (r = !1 !== jo(e, 33).onClick(t) && r), r
                );
              },
              null,
              null
            )),
            Go(33, 16384, null, 0, va, [], { href: [0, "href"] }, null),
            (e()(), hi(-1, null, ["Extensions"])),
            (e()(),
            uo(35, 0, null, null, 3, "li", [], null, null, null, null, null)),
            (e()(),
            uo(
              36,
              0,
              null,
              null,
              2,
              "a",
              [
                ["class", "section-1-button"],
                ["href", "https://github.com/alvarotrigo/angular-fullpage"],
                ["rel", "noopener"],
              ],
              null,
              [[null, "click"]],
              function (e, n, t) {
                var r = !0;
                return (
                  "click" === n && (r = !1 !== jo(e, 37).onClick(t) && r), r
                );
              },
              null,
              null
            )),
            Go(37, 16384, null, 0, va, [], { href: [0, "href"] }, null),
            (e()(), hi(-1, null, ["View on Github"])),
            (e()(),
            uo(
              39,
              0,
              null,
              null,
              238,
              "div",
              [
                ["class", "section"],
                ["id", "section-2"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            uo(
              40,
              0,
              null,
              null,
              228,
              "div",
              [
                ["class", "slide active"],
                ["id", "slide-2-1"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            uo(
              41,
              0,
              null,
              null,
              227,
              "div",
              [["class", "shell"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            uo(
              42,
              0,
              null,
              null,
              13,
              "div",
              [["class", "shell-header"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            uo(
              43,
              0,
              null,
              null,
              0,
              "span",
              [["class", "shell-header-actions shell-header-close"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            uo(
              44,
              0,
              null,
              null,
              0,
              "span",
              [["class", "shell-header-actions shell-header-minimize"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            uo(
              45,
              0,
              null,
              null,
              0,
              "span",
              [["class", "shell-header-actions shell-header-maximize"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            uo(
              46,
              0,
              null,
              null,
              6,
              "span",
              [["class", "shell-tabs"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            uo(
              47,
              0,
              null,
              null,
              2,
              "a",
              [
                ["class", "active shell-tab"],
                ["href", "#html"],
              ],
              null,
              [[null, "click"]],
              function (e, n, t) {
                var r = !0;
                return (
                  "click" === n && (r = !1 !== jo(e, 48).onClick(t) && r), r
                );
              },
              null,
              null
            )),
            Go(48, 16384, null, 0, va, [], { href: [0, "href"] }, null),
            (e()(), hi(-1, null, ["HTML"])),
            (e()(),
            uo(
              50,
              0,
              null,
              null,
              2,
              "a",
              [
                ["class", "shell-tab"],
                ["href", "#js"],
              ],
              null,
              [[null, "click"]],
              function (e, n, t) {
                var r = !0;
                return (
                  "click" === n && (r = !1 !== jo(e, 51).onClick(t) && r), r
                );
              },
              null,
              null
            )),
            Go(51, 16384, null, 0, va, [], { href: [0, "href"] }, null),
            (e()(), hi(-1, null, ["JS"])),
            (e()(),
            uo(
              53,
              0,
              null,
              null,
              2,
              "a",
              [
                ["class", "shell-demo"],
                ["href", "https://codepen.io/alvarotrigo/pen/zpQmwq"],
              ],
              null,
              [[null, "click"]],
              function (e, n, t) {
                var r = !0;
                return (
                  "click" === n && (r = !1 !== jo(e, 54).onClick(t) && r), r
                );
              },
              null,
              null
            )),
            Go(54, 16384, null, 0, va, [], { href: [0, "href"] }, null),
            (e()(), hi(-1, null, ["See in Codepen"])),
            (e()(),
            uo(
              56,
              0,
              null,
              null,
              212,
              "div",
              [["class", "shell-body"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            uo(
              57,
              0,
              null,
              null,
              113,
              "div",
              [
                ["class", "shell-tab-content active"],
                ["data-tab", "html"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            uo(
              58,
              0,
              null,
              null,
              112,
              "figure",
              [["class", "highlight"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            uo(
              59,
              0,
              null,
              null,
              111,
              "pre",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            uo(
              60,
              0,
              null,
              null,
              110,
              "code",
              [
                ["class", "language-html"],
                ["data-lang", "html"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            uo(
              61,
              0,
              null,
              null,
              1,
              "span",
              [["class", "c"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["\x3c!-- app.component.html --\x3e"])),
            (e()(), hi(-1, null, ["\n"])),
            (e()(),
            uo(
              64,
              0,
              null,
              null,
              1,
              "span",
              [["class", "nt"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["<div"])),
            (e()(), hi(-1, null, [" "])),
            (e()(),
            uo(
              67,
              0,
              null,
              null,
              1,
              "span",
              [["class", "na"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["fullpage"])),
            (e()(), hi(-1, null, [" "])),
            (e()(),
            uo(
              70,
              0,
              null,
              null,
              1,
              "span",
              [["class", "na"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["id="])),
            (e()(),
            uo(
              72,
              0,
              null,
              null,
              1,
              "span",
              [["class", "s"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ['"fullpage"'])),
            (e()(), hi(-1, null, ["\n"])),
            (e()(),
            uo(
              75,
              0,
              null,
              null,
              1,
              "span",
              [["class", "na"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["["])),
            (e()(),
            uo(
              77,
              0,
              null,
              null,
              1,
              "span",
              [["class", "na"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["options"])),
            (e()(),
            uo(
              79,
              0,
              null,
              null,
              1,
              "span",
              [["class", "na"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, [']="'])),
            (e()(),
            uo(
              81,
              0,
              null,
              null,
              1,
              "span",
              [["class", "na"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["config"])),
            (e()(),
            uo(
              83,
              0,
              null,
              null,
              1,
              "span",
              [["class", "na"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ['"'])),
            (e()(), hi(-1, null, ["\n"])),
            (e()(),
            uo(
              86,
              0,
              null,
              null,
              1,
              "span",
              [["class", "na"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["("])),
            (e()(),
            uo(
              88,
              0,
              null,
              null,
              1,
              "span",
              [["class", "na"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["ref"])),
            (e()(),
            uo(
              90,
              0,
              null,
              null,
              1,
              "span",
              [["class", "na"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, [')="'])),
            (e()(),
            uo(
              92,
              0,
              null,
              null,
              1,
              "span",
              [["class", "na"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["getRef"])),
            (e()(),
            uo(
              94,
              0,
              null,
              null,
              1,
              "span",
              [["class", "na"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["($"])),
            (e()(),
            uo(
              96,
              0,
              null,
              null,
              1,
              "span",
              [["class", "na"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["event"])),
            (e()(),
            uo(
              98,
              0,
              null,
              null,
              1,
              "span",
              [["class", "na"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, [')"'])),
            (e()(),
            uo(
              100,
              0,
              null,
              null,
              1,
              "span",
              [["class", "nt"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, [">"])),
            (e()(), hi(-1, null, ["\n    "])),
            (e()(),
            uo(
              103,
              0,
              null,
              null,
              1,
              "span",
              [["class", "nt"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["<div"])),
            (e()(), hi(-1, null, [" "])),
            (e()(),
            uo(
              106,
              0,
              null,
              null,
              1,
              "span",
              [["class", "na"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["class="])),
            (e()(),
            uo(
              108,
              0,
              null,
              null,
              1,
              "span",
              [["class", "s"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ['"section"'])),
            (e()(),
            uo(
              110,
              0,
              null,
              null,
              1,
              "span",
              [["class", "nt"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, [">"])),
            (e()(), hi(-1, null, ["\n        intro\n         "])),
            (e()(),
            uo(
              113,
              0,
              null,
              null,
              1,
              "span",
              [["class", "nt"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["<button"])),
            (e()(), hi(-1, null, [" "])),
            (e()(),
            uo(
              116,
              0,
              null,
              null,
              1,
              "span",
              [["class", "na"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["("])),
            (e()(),
            uo(
              118,
              0,
              null,
              null,
              1,
              "span",
              [["class", "na"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["click"])),
            (e()(),
            uo(
              120,
              0,
              null,
              null,
              1,
              "span",
              [["class", "na"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, [')="'])),
            (e()(),
            uo(
              122,
              0,
              null,
              null,
              1,
              "span",
              [["class", "na"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["fullpage"])),
            (e()(),
            uo(
              124,
              0,
              null,
              null,
              1,
              "span",
              [["class", "na"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["."])),
            (e()(),
            uo(
              126,
              0,
              null,
              null,
              1,
              "span",
              [["class", "na"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["api"])),
            (e()(),
            uo(
              128,
              0,
              null,
              null,
              1,
              "span",
              [["class", "na"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["."])),
            (e()(),
            uo(
              130,
              0,
              null,
              null,
              1,
              "span",
              [["class", "na"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["moveSectionDown"])),
            (e()(),
            uo(
              132,
              0,
              null,
              null,
              1,
              "span",
              [["class", "na"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ['()"'])),
            (e()(),
            uo(
              134,
              0,
              null,
              null,
              1,
              "span",
              [["class", "nt"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, [">"])),
            (e()(), hi(-1, null, ["\n            Next\n        "])),
            (e()(),
            uo(
              137,
              0,
              null,
              null,
              1,
              "span",
              [["class", "nt"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["</button>"])),
            (e()(), hi(-1, null, ["\n    "])),
            (e()(),
            uo(
              140,
              0,
              null,
              null,
              1,
              "span",
              [["class", "nt"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["</div>"])),
            (e()(), hi(-1, null, ["\n    "])),
            (e()(),
            uo(
              143,
              0,
              null,
              null,
              1,
              "span",
              [["class", "nt"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["<div"])),
            (e()(), hi(-1, null, [" "])),
            (e()(),
            uo(
              146,
              0,
              null,
              null,
              1,
              "span",
              [["class", "na"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["class="])),
            (e()(),
            uo(
              148,
              0,
              null,
              null,
              1,
              "span",
              [["class", "s"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ['"section"'])),
            (e()(),
            uo(
              150,
              0,
              null,
              null,
              1,
              "span",
              [["class", "nt"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, [">"])),
            (e()(), hi(-1, null, ["skills"])),
            (e()(),
            uo(
              153,
              0,
              null,
              null,
              1,
              "span",
              [["class", "nt"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["</div>"])),
            (e()(), hi(-1, null, ["\n    "])),
            (e()(),
            uo(
              156,
              0,
              null,
              null,
              1,
              "span",
              [["class", "nt"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["<div"])),
            (e()(), hi(-1, null, [" "])),
            (e()(),
            uo(
              159,
              0,
              null,
              null,
              1,
              "span",
              [["class", "na"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["class="])),
            (e()(),
            uo(
              161,
              0,
              null,
              null,
              1,
              "span",
              [["class", "s"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ['"section"'])),
            (e()(),
            uo(
              163,
              0,
              null,
              null,
              1,
              "span",
              [["class", "nt"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, [">"])),
            (e()(), hi(-1, null, ["works"])),
            (e()(),
            uo(
              166,
              0,
              null,
              null,
              1,
              "span",
              [["class", "nt"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["</div>"])),
            (e()(), hi(-1, null, ["\n"])),
            (e()(),
            uo(
              169,
              0,
              null,
              null,
              1,
              "span",
              [["class", "nt"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["</div>"])),
            (e()(),
            uo(
              171,
              0,
              null,
              null,
              97,
              "div",
              [
                ["class", "shell-tab-content"],
                ["data-tab", "js"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            uo(
              172,
              0,
              null,
              null,
              96,
              "figure",
              [["class", "highlight"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            uo(
              173,
              0,
              null,
              null,
              95,
              "pre",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            uo(
              174,
              0,
              null,
              null,
              94,
              "code",
              [
                ["class", "language-typescript"],
                ["data-lang", "typescript"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            uo(
              175,
              0,
              null,
              null,
              1,
              "span",
              [["class", "c1"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["// app.component.ts"])),
            (e()(), hi(-1, null, ["\n"])),
            (e()(),
            uo(
              178,
              0,
              null,
              null,
              1,
              "span",
              [["class", "k"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["export"])),
            (e()(), hi(-1, null, [" "])),
            (e()(),
            uo(
              181,
              0,
              null,
              null,
              1,
              "span",
              [["class", "kd"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["class"])),
            (e()(), hi(-1, null, [" "])),
            (e()(),
            uo(
              184,
              0,
              null,
              null,
              1,
              "span",
              [["class", "nx"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["AppComponent"])),
            (e()(), hi(-1, null, [" "])),
            (e()(),
            uo(
              187,
              0,
              null,
              null,
              1,
              "span",
              [["class", "p"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["{{"])),
            (e()(), hi(-1, null, ["\n  "])),
            (e()(),
            uo(
              190,
              0,
              null,
              null,
              1,
              "span",
              [["class", "nl"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["config"])),
            (e()(),
            uo(
              192,
              0,
              null,
              null,
              1,
              "span",
              [["class", "p"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, [":"])),
            (e()(), hi(-1, null, [" "])),
            (e()(),
            uo(
              195,
              0,
              null,
              null,
              1,
              "span",
              [["class", "nx"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["any"])),
            (e()(),
            uo(
              197,
              0,
              null,
              null,
              1,
              "span",
              [["class", "p"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, [";"])),
            (e()(), hi(-1, null, ["\n  "])),
            (e()(),
            uo(
              200,
              0,
              null,
              null,
              1,
              "span",
              [["class", "nl"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["fullpage_api"])),
            (e()(),
            uo(
              202,
              0,
              null,
              null,
              1,
              "span",
              [["class", "p"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, [":"])),
            (e()(), hi(-1, null, [" "])),
            (e()(),
            uo(
              205,
              0,
              null,
              null,
              1,
              "span",
              [["class", "nx"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["any"])),
            (e()(),
            uo(
              207,
              0,
              null,
              null,
              1,
              "span",
              [["class", "p"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, [";"])),
            (e()(), hi(-1, null, ["\n\n  "])),
            (e()(),
            uo(
              210,
              0,
              null,
              null,
              1,
              "span",
              [["class", "kd"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["constructor"])),
            (e()(),
            uo(
              212,
              0,
              null,
              null,
              1,
              "span",
              [["class", "p"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["()"])),
            (e()(), hi(-1, null, [" "])),
            (e()(),
            uo(
              215,
              0,
              null,
              null,
              1,
              "span",
              [["class", "p"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["{{"])),
            (e()(), hi(-1, null, ["\n\n    "])),
            (e()(),
            uo(
              218,
              0,
              null,
              null,
              1,
              "span",
              [["class", "c1"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            hi(-1, null, [
              "// for more details on config options please visit fullPage.js docs",
            ])),
            (e()(), hi(-1, null, ["\n    "])),
            (e()(),
            uo(
              221,
              0,
              null,
              null,
              1,
              "span",
              [["class", "k"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["this"])),
            (e()(),
            uo(
              223,
              0,
              null,
              null,
              1,
              "span",
              [["class", "p"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["."])),
            (e()(),
            uo(
              225,
              0,
              null,
              null,
              1,
              "span",
              [["class", "nx"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["config"])),
            (e()(), hi(-1, null, [" "])),
            (e()(),
            uo(
              228,
              0,
              null,
              null,
              1,
              "span",
              [["class", "o"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["="])),
            (e()(), hi(-1, null, [" "])),
            (e()(),
            uo(
              231,
              0,
              null,
              null,
              1,
              "span",
              [["class", "p"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["{{"])),
            (e()(), hi(-1, null, ["\n      "])),
            (e()(),
            uo(
              234,
              0,
              null,
              null,
              1,
              "span",
              [["class", "na"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["menu"])),
            (e()(),
            uo(
              236,
              0,
              null,
              null,
              1,
              "span",
              [["class", "p"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, [":"])),
            (e()(), hi(-1, null, [" "])),
            (e()(),
            uo(
              239,
              0,
              null,
              null,
              1,
              "span",
              [["class", "s1"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["'#menu'"])),
            (e()(),
            uo(
              241,
              0,
              null,
              null,
              1,
              "span",
              [["class", "p"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, [","])),
            (e()(), hi(-1, null, ["\n      "])),
            (e()(),
            uo(
              244,
              0,
              null,
              null,
              1,
              "span",
              [["class", "nx"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["anchors"])),
            (e()(),
            uo(
              246,
              0,
              null,
              null,
              1,
              "span",
              [["class", "p"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["["])),
            (e()(),
            uo(
              248,
              0,
              null,
              null,
              1,
              "span",
              [["class", "s1"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["'page1'"])),
            (e()(),
            uo(
              250,
              0,
              null,
              null,
              1,
              "span",
              [["class", "p"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, [","])),
            (e()(),
            uo(
              252,
              0,
              null,
              null,
              1,
              "span",
              [["class", "s1"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["'page2'"])),
            (e()(),
            uo(
              254,
              0,
              null,
              null,
              1,
              "span",
              [["class", "p"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, [","])),
            (e()(),
            uo(
              256,
              0,
              null,
              null,
              1,
              "span",
              [["class", "s1"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["'page3'"])),
            (e()(),
            uo(
              258,
              0,
              null,
              null,
              1,
              "span",
              [["class", "p"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["]"])),
            (e()(), hi(-1, null, ["\n    "])),
            (e()(),
            uo(
              261,
              0,
              null,
              null,
              1,
              "span",
              [["class", "p"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["}};"])),
            (e()(), hi(-1, null, ["\n  "])),
            (e()(),
            uo(
              264,
              0,
              null,
              null,
              1,
              "span",
              [["class", "p"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["}}"])),
            (e()(), hi(-1, null, ["\n"])),
            (e()(),
            uo(
              267,
              0,
              null,
              null,
              1,
              "span",
              [["class", "p"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), hi(-1, null, ["}}"])),
            (e()(),
            uo(
              269,
              0,
              null,
              null,
              2,
              "div",
              [["class", "slide"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            uo(270, 0, null, null, 1, "h3", [], null, null, null, null, null)),
            (e()(), hi(-1, null, ["Slide 2.2"])),
            (e()(),
            uo(
              272,
              0,
              null,
              null,
              2,
              "div",
              [["class", "slide"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            uo(273, 0, null, null, 1, "h3", [], null, null, null, null, null)),
            (e()(), hi(-1, null, ["Slide 2.2"])),
            (e()(),
            uo(
              275,
              0,
              null,
              null,
              2,
              "div",
              [["class", "slide"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            uo(276, 0, null, null, 1, "h3", [], null, null, null, null, null)),
            (e()(), hi(-1, null, ["Slide 2.2"])),
            (e()(),
            uo(
              278,
              0,
              null,
              null,
              2,
              "div",
              [
                ["class", "section"],
                ["id", "section2"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            uo(279, 0, null, null, 1, "h3", [], null, null, null, null, null)),
            (e()(), hi(-1, null, ["works"])),
            (e()(),
            uo(
              281,
              0,
              null,
              null,
              1,
              "noscript",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            uo(
              282,
              0,
              null,
              null,
              0,
              "img",
              [
                ["height", "1"],
                [
                  "src",
                  "https://www.facebook.com/tr?id=1786065945027357&ev=PageView&noscript=1",
                ],
                ["style", "display:none"],
                ["width", "1"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          function (e, n) {
            var t = n.component;
            e(n, 1, 0, "https://alvarotrigo.com/fullPage/"),
              e(n, 6, 0, "#page1"),
              e(n, 10, 0, "#page2"),
              e(n, 14, 0, "#page3"),
              e(n, 18, 0, "https://twitter.com/imac2"),
              e(n, 23, 0, "fullpage", t.config),
              e(n, 33, 0, "https://alvarotrigo.com/fullPage/extensions/"),
              e(n, 37, 0, "https://github.com/alvarotrigo/angular-fullpage"),
              e(n, 48, 0, "#html"),
              e(n, 51, 0, "#js"),
              e(n, 54, 0, "https://codepen.io/alvarotrigo/pen/zpQmwq");
          },
          null
        );
      }
      var ba = (function (e, n, t, r, o, i) {
          return new ko(
            "app-root",
            ea,
            function (e) {
              return yi(
                0,
                [
                  (e()(),
                  uo(
                    0,
                    0,
                    null,
                    null,
                    1,
                    "app-root",
                    [],
                    null,
                    null,
                    null,
                    ma,
                    ya
                  )),
                  Go(1, 114688, null, 0, ea, [], null, null),
                ],
                function (e, n) {
                  e(n, 1, 0);
                },
                null
              );
            },
            {},
            {},
            []
          );
        })(),
        wa = null;
      function _a() {
        return wa;
      }
      var Ea,
        Ca = {
          class: "className",
          innerHtml: "innerHTML",
          readonly: "readOnly",
          tabindex: "tabIndex",
        },
        xa = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          Del: "Delete",
          Esc: "Escape",
          Left: "ArrowLeft",
          Right: "ArrowRight",
          Up: "ArrowUp",
          Down: "ArrowDown",
          Menu: "ContextMenu",
          Scroll: "ScrollLock",
          Win: "OS",
        },
        Sa = {
          A: "1",
          B: "2",
          C: "3",
          D: "4",
          E: "5",
          F: "6",
          G: "7",
          H: "8",
          I: "9",
          J: "*",
          K: "+",
          M: "-",
          N: ".",
          O: "/",
          "`": "0",
          "\x90": "NumLock",
        };
      fe.Node &&
        (Ea =
          fe.Node.prototype.contains ||
          function (e) {
            return !!(16 & this.compareDocumentPosition(e));
          });
      var ka,
        Ta = (function (e) {
          function n() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            o(n, e),
            (n.prototype.parse = function (e) {
              throw new Error("parse not implemented");
            }),
            (n.makeCurrent = function () {
              var e;
              (e = new n()), wa || (wa = e);
            }),
            (n.prototype.hasProperty = function (e, n) {
              return n in e;
            }),
            (n.prototype.setProperty = function (e, n, t) {
              e[n] = t;
            }),
            (n.prototype.getProperty = function (e, n) {
              return e[n];
            }),
            (n.prototype.invoke = function (e, n, t) {
              var r;
              (r = e)[n].apply(r, d(t));
            }),
            (n.prototype.logError = function (e) {
              window.console &&
                (console.error ? console.error(e) : console.log(e));
            }),
            (n.prototype.log = function (e) {
              window.console && window.console.log && window.console.log(e);
            }),
            (n.prototype.logGroup = function (e) {
              window.console && window.console.group && window.console.group(e);
            }),
            (n.prototype.logGroupEnd = function () {
              window.console &&
                window.console.groupEnd &&
                window.console.groupEnd();
            }),
            Object.defineProperty(n.prototype, "attrToPropMap", {
              get: function () {
                return Ca;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (n.prototype.contains = function (e, n) {
              return Ea.call(e, n);
            }),
            (n.prototype.querySelector = function (e, n) {
              return e.querySelector(n);
            }),
            (n.prototype.querySelectorAll = function (e, n) {
              return e.querySelectorAll(n);
            }),
            (n.prototype.on = function (e, n, t) {
              e.addEventListener(n, t, !1);
            }),
            (n.prototype.onAndCancel = function (e, n, t) {
              return (
                e.addEventListener(n, t, !1),
                function () {
                  e.removeEventListener(n, t, !1);
                }
              );
            }),
            (n.prototype.dispatchEvent = function (e, n) {
              e.dispatchEvent(n);
            }),
            (n.prototype.createMouseEvent = function (e) {
              var n = this.getDefaultDocument().createEvent("MouseEvent");
              return n.initEvent(e, !0, !0), n;
            }),
            (n.prototype.createEvent = function (e) {
              var n = this.getDefaultDocument().createEvent("Event");
              return n.initEvent(e, !0, !0), n;
            }),
            (n.prototype.preventDefault = function (e) {
              e.preventDefault(), (e.returnValue = !1);
            }),
            (n.prototype.isPrevented = function (e) {
              return (
                e.defaultPrevented || (null != e.returnValue && !e.returnValue)
              );
            }),
            (n.prototype.getInnerHTML = function (e) {
              return e.innerHTML;
            }),
            (n.prototype.getTemplateContent = function (e) {
              return "content" in e && this.isTemplateElement(e)
                ? e.content
                : null;
            }),
            (n.prototype.getOuterHTML = function (e) {
              return e.outerHTML;
            }),
            (n.prototype.nodeName = function (e) {
              return e.nodeName;
            }),
            (n.prototype.nodeValue = function (e) {
              return e.nodeValue;
            }),
            (n.prototype.type = function (e) {
              return e.type;
            }),
            (n.prototype.content = function (e) {
              return this.hasProperty(e, "content") ? e.content : e;
            }),
            (n.prototype.firstChild = function (e) {
              return e.firstChild;
            }),
            (n.prototype.nextSibling = function (e) {
              return e.nextSibling;
            }),
            (n.prototype.parentElement = function (e) {
              return e.parentNode;
            }),
            (n.prototype.childNodes = function (e) {
              return e.childNodes;
            }),
            (n.prototype.childNodesAsList = function (e) {
              for (
                var n = e.childNodes, t = new Array(n.length), r = 0;
                r < n.length;
                r++
              )
                t[r] = n[r];
              return t;
            }),
            (n.prototype.clearNodes = function (e) {
              for (; e.firstChild; ) e.removeChild(e.firstChild);
            }),
            (n.prototype.appendChild = function (e, n) {
              e.appendChild(n);
            }),
            (n.prototype.removeChild = function (e, n) {
              e.removeChild(n);
            }),
            (n.prototype.replaceChild = function (e, n, t) {
              e.replaceChild(n, t);
            }),
            (n.prototype.remove = function (e) {
              return e.parentNode && e.parentNode.removeChild(e), e;
            }),
            (n.prototype.insertBefore = function (e, n, t) {
              e.insertBefore(t, n);
            }),
            (n.prototype.insertAllBefore = function (e, n, t) {
              t.forEach(function (t) {
                return e.insertBefore(t, n);
              });
            }),
            (n.prototype.insertAfter = function (e, n, t) {
              e.insertBefore(t, n.nextSibling);
            }),
            (n.prototype.setInnerHTML = function (e, n) {
              e.innerHTML = n;
            }),
            (n.prototype.getText = function (e) {
              return e.textContent;
            }),
            (n.prototype.setText = function (e, n) {
              e.textContent = n;
            }),
            (n.prototype.getValue = function (e) {
              return e.value;
            }),
            (n.prototype.setValue = function (e, n) {
              e.value = n;
            }),
            (n.prototype.getChecked = function (e) {
              return e.checked;
            }),
            (n.prototype.setChecked = function (e, n) {
              e.checked = n;
            }),
            (n.prototype.createComment = function (e) {
              return this.getDefaultDocument().createComment(e);
            }),
            (n.prototype.createTemplate = function (e) {
              var n = this.getDefaultDocument().createElement("template");
              return (n.innerHTML = e), n;
            }),
            (n.prototype.createElement = function (e, n) {
              return (n = n || this.getDefaultDocument()).createElement(e);
            }),
            (n.prototype.createElementNS = function (e, n, t) {
              return (t = t || this.getDefaultDocument()).createElementNS(e, n);
            }),
            (n.prototype.createTextNode = function (e, n) {
              return (n = n || this.getDefaultDocument()).createTextNode(e);
            }),
            (n.prototype.createScriptTag = function (e, n, t) {
              var r = (t = t || this.getDefaultDocument()).createElement(
                "SCRIPT"
              );
              return r.setAttribute(e, n), r;
            }),
            (n.prototype.createStyleElement = function (e, n) {
              var t = (n = n || this.getDefaultDocument()).createElement(
                "style"
              );
              return this.appendChild(t, this.createTextNode(e, n)), t;
            }),
            (n.prototype.createShadowRoot = function (e) {
              return e.createShadowRoot();
            }),
            (n.prototype.getShadowRoot = function (e) {
              return e.shadowRoot;
            }),
            (n.prototype.getHost = function (e) {
              return e.host;
            }),
            (n.prototype.clone = function (e) {
              return e.cloneNode(!0);
            }),
            (n.prototype.getElementsByClassName = function (e, n) {
              return e.getElementsByClassName(n);
            }),
            (n.prototype.getElementsByTagName = function (e, n) {
              return e.getElementsByTagName(n);
            }),
            (n.prototype.classList = function (e) {
              return Array.prototype.slice.call(e.classList, 0);
            }),
            (n.prototype.addClass = function (e, n) {
              e.classList.add(n);
            }),
            (n.prototype.removeClass = function (e, n) {
              e.classList.remove(n);
            }),
            (n.prototype.hasClass = function (e, n) {
              return e.classList.contains(n);
            }),
            (n.prototype.setStyle = function (e, n, t) {
              e.style[n] = t;
            }),
            (n.prototype.removeStyle = function (e, n) {
              e.style[n] = "";
            }),
            (n.prototype.getStyle = function (e, n) {
              return e.style[n];
            }),
            (n.prototype.hasStyle = function (e, n, t) {
              var r = this.getStyle(e, n) || "";
              return t ? r == t : r.length > 0;
            }),
            (n.prototype.tagName = function (e) {
              return e.tagName;
            }),
            (n.prototype.attributeMap = function (e) {
              for (
                var n = new Map(), t = e.attributes, r = 0;
                r < t.length;
                r++
              ) {
                var o = t.item(r);
                n.set(o.name, o.value);
              }
              return n;
            }),
            (n.prototype.hasAttribute = function (e, n) {
              return e.hasAttribute(n);
            }),
            (n.prototype.hasAttributeNS = function (e, n, t) {
              return e.hasAttributeNS(n, t);
            }),
            (n.prototype.getAttribute = function (e, n) {
              return e.getAttribute(n);
            }),
            (n.prototype.getAttributeNS = function (e, n, t) {
              return e.getAttributeNS(n, t);
            }),
            (n.prototype.setAttribute = function (e, n, t) {
              e.setAttribute(n, t);
            }),
            (n.prototype.setAttributeNS = function (e, n, t, r) {
              e.setAttributeNS(n, t, r);
            }),
            (n.prototype.removeAttribute = function (e, n) {
              e.removeAttribute(n);
            }),
            (n.prototype.removeAttributeNS = function (e, n, t) {
              e.removeAttributeNS(n, t);
            }),
            (n.prototype.templateAwareRoot = function (e) {
              return this.isTemplateElement(e) ? this.content(e) : e;
            }),
            (n.prototype.createHtmlDocument = function () {
              return document.implementation.createHTMLDocument("fakeTitle");
            }),
            (n.prototype.getDefaultDocument = function () {
              return document;
            }),
            (n.prototype.getBoundingClientRect = function (e) {
              try {
                return e.getBoundingClientRect();
              } catch (e) {
                return {
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  width: 0,
                  height: 0,
                };
              }
            }),
            (n.prototype.getTitle = function (e) {
              return e.title;
            }),
            (n.prototype.setTitle = function (e, n) {
              e.title = n || "";
            }),
            (n.prototype.elementMatches = function (e, n) {
              return (
                !!this.isElementNode(e) &&
                ((e.matches && e.matches(n)) ||
                  (e.msMatchesSelector && e.msMatchesSelector(n)) ||
                  (e.webkitMatchesSelector && e.webkitMatchesSelector(n)))
              );
            }),
            (n.prototype.isTemplateElement = function (e) {
              return this.isElementNode(e) && "TEMPLATE" === e.nodeName;
            }),
            (n.prototype.isTextNode = function (e) {
              return e.nodeType === Node.TEXT_NODE;
            }),
            (n.prototype.isCommentNode = function (e) {
              return e.nodeType === Node.COMMENT_NODE;
            }),
            (n.prototype.isElementNode = function (e) {
              return e.nodeType === Node.ELEMENT_NODE;
            }),
            (n.prototype.hasShadowRoot = function (e) {
              return null != e.shadowRoot && e instanceof HTMLElement;
            }),
            (n.prototype.isShadowRoot = function (e) {
              return e instanceof DocumentFragment;
            }),
            (n.prototype.importIntoDoc = function (e) {
              return document.importNode(this.templateAwareRoot(e), !0);
            }),
            (n.prototype.adoptNode = function (e) {
              return document.adoptNode(e);
            }),
            (n.prototype.getHref = function (e) {
              return e.getAttribute("href");
            }),
            (n.prototype.getEventKey = function (e) {
              var n = e.key;
              if (null == n) {
                if (null == (n = e.keyIdentifier)) return "Unidentified";
                n.startsWith("U+") &&
                  ((n = String.fromCharCode(parseInt(n.substring(2), 16))),
                  3 === e.location && Sa.hasOwnProperty(n) && (n = Sa[n]));
              }
              return xa[n] || n;
            }),
            (n.prototype.getGlobalEventTarget = function (e, n) {
              return "window" === n
                ? window
                : "document" === n
                ? e
                : "body" === n
                ? e.body
                : null;
            }),
            (n.prototype.getHistory = function () {
              return window.history;
            }),
            (n.prototype.getLocation = function () {
              return window.location;
            }),
            (n.prototype.getBaseHref = function (e) {
              var n,
                t =
                  Na || (Na = document.querySelector("base"))
                    ? Na.getAttribute("href")
                    : null;
              return null == t
                ? null
                : ((n = t),
                  ka || (ka = document.createElement("a")),
                  ka.setAttribute("href", n),
                  "/" === ka.pathname.charAt(0)
                    ? ka.pathname
                    : "/" + ka.pathname);
            }),
            (n.prototype.resetBaseElement = function () {
              Na = null;
            }),
            (n.prototype.getUserAgent = function () {
              return window.navigator.userAgent;
            }),
            (n.prototype.setData = function (e, n, t) {
              this.setAttribute(e, "data-" + n, t);
            }),
            (n.prototype.getData = function (e, n) {
              return this.getAttribute(e, "data-" + n);
            }),
            (n.prototype.getComputedStyle = function (e) {
              return getComputedStyle(e);
            }),
            (n.prototype.supportsWebAnimation = function () {
              return "function" == typeof Element.prototype.animate;
            }),
            (n.prototype.performanceNow = function () {
              return window.performance && window.performance.now
                ? window.performance.now()
                : new Date().getTime();
            }),
            (n.prototype.supportsCookies = function () {
              return !0;
            }),
            (n.prototype.getCookie = function (e) {
              return (function (e, n) {
                var t, r;
                n = encodeURIComponent(n);
                try {
                  for (
                    var o = s(e.split(";")), i = o.next();
                    !i.done;
                    i = o.next()
                  ) {
                    var l = i.value,
                      u = l.indexOf("="),
                      a = c(
                        -1 == u ? [l, ""] : [l.slice(0, u), l.slice(u + 1)],
                        2
                      ),
                      d = a[1];
                    if (a[0].trim() === n) return decodeURIComponent(d);
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    i && !i.done && (r = o.return) && r.call(o);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                return null;
              })(document.cookie, e);
            }),
            (n.prototype.setCookie = function (e, n) {
              document.cookie =
                encodeURIComponent(e) + "=" + encodeURIComponent(n);
            }),
            n
          );
        })(
          (function (e) {
            function n() {
              var n = e.call(this) || this;
              (n._animationPrefix = null), (n._transitionEnd = null);
              try {
                var t = n.createElement("div", document);
                if (null != n.getStyle(t, "animationName"))
                  n._animationPrefix = "";
                else
                  for (
                    var r = ["Webkit", "Moz", "O", "ms"], o = 0;
                    o < r.length;
                    o++
                  )
                    if (null != n.getStyle(t, r[o] + "AnimationName")) {
                      n._animationPrefix = "-" + r[o].toLowerCase() + "-";
                      break;
                    }
                var i = {
                  WebkitTransition: "webkitTransitionEnd",
                  MozTransition: "transitionend",
                  OTransition: "oTransitionEnd otransitionend",
                  transition: "transitionend",
                };
                Object.keys(i).forEach(function (e) {
                  null != n.getStyle(t, e) && (n._transitionEnd = i[e]);
                });
              } catch (e) {
                (n._animationPrefix = null), (n._transitionEnd = null);
              }
              return n;
            }
            return (
              o(n, e),
              (n.prototype.getDistributedNodes = function (e) {
                return e.getDistributedNodes();
              }),
              (n.prototype.resolveAndSetHref = function (e, n, t) {
                e.href = null == t ? n : n + "/../" + t;
              }),
              (n.prototype.supportsDOMEvents = function () {
                return !0;
              }),
              (n.prototype.supportsNativeShadowDOM = function () {
                return "function" == typeof document.body.createShadowRoot;
              }),
              (n.prototype.getAnimationPrefix = function () {
                return this._animationPrefix ? this._animationPrefix : "";
              }),
              (n.prototype.getTransitionEnd = function () {
                return this._transitionEnd ? this._transitionEnd : "";
              }),
              (n.prototype.supportsAnimation = function () {
                return (
                  null != this._animationPrefix && null != this._transitionEnd
                );
              }),
              n
            );
          })(
            (function () {
              function e() {
                this.resourceLoaderType = null;
              }
              return (
                Object.defineProperty(e.prototype, "attrToPropMap", {
                  get: function () {
                    return this._attrToPropMap;
                  },
                  set: function (e) {
                    this._attrToPropMap = e;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                e
              );
            })()
          )
        ),
        Na = null,
        Aa = ca;
      function Ia() {
        return !!window.history.pushState;
      }
      var Oa = (function (e) {
          function n(n) {
            var t = e.call(this) || this;
            return (t._doc = n), t._init(), t;
          }
          return (
            o(n, e),
            (n.prototype._init = function () {
              (this.location = _a().getLocation()),
                (this._history = _a().getHistory());
            }),
            (n.prototype.getBaseHrefFromDOM = function () {
              return _a().getBaseHref(this._doc);
            }),
            (n.prototype.onPopState = function (e) {
              _a()
                .getGlobalEventTarget(this._doc, "window")
                .addEventListener("popstate", e, !1);
            }),
            (n.prototype.onHashChange = function (e) {
              _a()
                .getGlobalEventTarget(this._doc, "window")
                .addEventListener("hashchange", e, !1);
            }),
            Object.defineProperty(n.prototype, "pathname", {
              get: function () {
                return this.location.pathname;
              },
              set: function (e) {
                this.location.pathname = e;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(n.prototype, "search", {
              get: function () {
                return this.location.search;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(n.prototype, "hash", {
              get: function () {
                return this.location.hash;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (n.prototype.pushState = function (e, n, t) {
              Ia()
                ? this._history.pushState(e, n, t)
                : (this.location.hash = t);
            }),
            (n.prototype.replaceState = function (e, n, t) {
              Ia()
                ? this._history.replaceState(e, n, t)
                : (this.location.hash = t);
            }),
            (n.prototype.forward = function () {
              this._history.forward();
            }),
            (n.prototype.back = function () {
              this._history.back();
            }),
            l([u(0, _e(Aa)), a("design:paramtypes", [Object])], n)
          );
        })(na),
        Ma = new ue("TRANSITION_ID"),
        Ra = [
          {
            provide: gn,
            useFactory: function (e, n, t) {
              return function () {
                t.get(yn).donePromise.then(function () {
                  var t = _a();
                  Array.prototype.slice
                    .apply(t.querySelectorAll(n, "style[ng-transition]"))
                    .filter(function (n) {
                      return t.getAttribute(n, "ng-transition") === e;
                    })
                    .forEach(function (e) {
                      return t.remove(e);
                    });
                });
              };
            },
            deps: [Ma, Aa, Ie],
            multi: !0,
          },
        ],
        Da = (function () {
          function e() {}
          return (
            (e.init = function () {
              var n;
              (n = new e()), (nt = n);
            }),
            (e.prototype.addToWindow = function (e) {
              (fe.getAngularTestability = function (n, t) {
                void 0 === t && (t = !0);
                var r = e.findTestabilityInTree(n, t);
                if (null == r)
                  throw new Error("Could not find testability for element.");
                return r;
              }),
                (fe.getAllAngularTestabilities = function () {
                  return e.getAllTestabilities();
                }),
                (fe.getAllAngularRootElements = function () {
                  return e.getAllRootElements();
                }),
                fe.frameworkStabilizers || (fe.frameworkStabilizers = []),
                fe.frameworkStabilizers.push(function (e) {
                  var n = fe.getAllAngularTestabilities(),
                    t = n.length,
                    r = !1,
                    o = function (n) {
                      (r = r || n), 0 == --t && e(r);
                    };
                  n.forEach(function (e) {
                    e.whenStable(o);
                  });
                });
            }),
            (e.prototype.findTestabilityInTree = function (e, n, t) {
              if (null == n) return null;
              var r = e.getTestability(n);
              return null != r
                ? r
                : t
                ? _a().isShadowRoot(n)
                  ? this.findTestabilityInTree(e, _a().getHost(n), !0)
                  : this.findTestabilityInTree(e, _a().parentElement(n), !0)
                : null;
            }),
            e
          );
        })();
      function Pa(e, n) {
        ("undefined" != typeof COMPILED && COMPILED) ||
          ((fe.ng = fe.ng || {})[e] = n);
      }
      var ja = { ApplicationRef: dt, NgZone: Wn };
      function Ha(e) {
        return Et(e);
      }
      var La = new ue("EventManagerPlugins"),
        Va = (function () {
          function e(e, n) {
            var t = this;
            (this._zone = n),
              (this._eventNameToPlugin = new Map()),
              e.forEach(function (e) {
                return (e.manager = t);
              }),
              (this._plugins = e.slice().reverse());
          }
          return (
            (e.prototype.addEventListener = function (e, n, t) {
              return this._findPluginFor(n).addEventListener(e, n, t);
            }),
            (e.prototype.addGlobalEventListener = function (e, n, t) {
              return this._findPluginFor(n).addGlobalEventListener(e, n, t);
            }),
            (e.prototype.getZone = function () {
              return this._zone;
            }),
            (e.prototype._findPluginFor = function (e) {
              var n = this._eventNameToPlugin.get(e);
              if (n) return n;
              for (var t = this._plugins, r = 0; r < t.length; r++) {
                var o = t[r];
                if (o.supports(e)) return this._eventNameToPlugin.set(e, o), o;
              }
              throw new Error("No event manager plugin found for event " + e);
            }),
            l([u(0, _e(La))], e)
          );
        })(),
        Ba = (function () {
          function e(e) {
            this._doc = e;
          }
          return (
            (e.prototype.addGlobalEventListener = function (e, n, t) {
              var r = _a().getGlobalEventTarget(this._doc, e);
              if (!r)
                throw new Error(
                  "Unsupported event target " + r + " for event " + n
                );
              return this.addEventListener(r, n, t);
            }),
            e
          );
        })(),
        Fa = (function () {
          function e() {
            this._stylesSet = new Set();
          }
          return (
            (e.prototype.addStyles = function (e) {
              var n = this,
                t = new Set();
              e.forEach(function (e) {
                n._stylesSet.has(e) || (n._stylesSet.add(e), t.add(e));
              }),
                this.onStylesAdded(t);
            }),
            (e.prototype.onStylesAdded = function (e) {}),
            (e.prototype.getAllStyles = function () {
              return Array.from(this._stylesSet);
            }),
            e
          );
        })(),
        za = (function (e) {
          function n(n) {
            var t = e.call(this) || this;
            return (
              (t._doc = n),
              (t._hostNodes = new Set()),
              (t._styleNodes = new Set()),
              t._hostNodes.add(n.head),
              t
            );
          }
          return (
            o(n, e),
            (n.prototype._addStylesToHost = function (e, n) {
              var t = this;
              e.forEach(function (e) {
                var r = t._doc.createElement("style");
                (r.textContent = e), t._styleNodes.add(n.appendChild(r));
              });
            }),
            (n.prototype.addHost = function (e) {
              this._addStylesToHost(this._stylesSet, e), this._hostNodes.add(e);
            }),
            (n.prototype.removeHost = function (e) {
              this._hostNodes.delete(e);
            }),
            (n.prototype.onStylesAdded = function (e) {
              var n = this;
              this._hostNodes.forEach(function (t) {
                return n._addStylesToHost(e, t);
              });
            }),
            (n.prototype.ngOnDestroy = function () {
              this._styleNodes.forEach(function (e) {
                return _a().remove(e);
              });
            }),
            l([u(0, _e(Aa))], n)
          );
        })(Fa),
        Ua = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        },
        Za = /%COMP%/g,
        Wa = "_nghost-%COMP%",
        Qa = "_ngcontent-%COMP%";
      function Ya(e, n, t) {
        for (var r = 0; r < n.length; r++) {
          var o = n[r];
          Array.isArray(o) ? Ya(e, o, t) : ((o = o.replace(Za, e)), t.push(o));
        }
        return t;
      }
      function qa(e) {
        return function (n) {
          !1 === e(n) && (n.preventDefault(), (n.returnValue = !1));
        };
      }
      var Ga = (function () {
          function e(e, n) {
            (this.eventManager = e),
              (this.sharedStylesHost = n),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new Ka(e));
          }
          return (
            (e.prototype.createRenderer = function (e, n) {
              if (!e || !n) return this.defaultRenderer;
              switch (n.encapsulation) {
                case qe.Emulated:
                  var t = this.rendererByCompId.get(n.id);
                  return (
                    t ||
                      ((t = new es(
                        this.eventManager,
                        this.sharedStylesHost,
                        n
                      )),
                      this.rendererByCompId.set(n.id, t)),
                    t.applyToHost(e),
                    t
                  );
                case qe.Native:
                case qe.ShadowDom:
                  return new ns(this.eventManager, this.sharedStylesHost, e, n);
                default:
                  if (!this.rendererByCompId.has(n.id)) {
                    var r = Ya(n.id, n.styles, []);
                    this.sharedStylesHost.addStyles(r),
                      this.rendererByCompId.set(n.id, this.defaultRenderer);
                  }
                  return this.defaultRenderer;
              }
            }),
            (e.prototype.begin = function () {}),
            (e.prototype.end = function () {}),
            e
          );
        })(),
        Ka = (function () {
          function e(e) {
            (this.eventManager = e), (this.data = Object.create(null));
          }
          return (
            (e.prototype.destroy = function () {}),
            (e.prototype.createElement = function (e, n) {
              return n
                ? document.createElementNS(Ua[n], e)
                : document.createElement(e);
            }),
            (e.prototype.createComment = function (e) {
              return document.createComment(e);
            }),
            (e.prototype.createText = function (e) {
              return document.createTextNode(e);
            }),
            (e.prototype.appendChild = function (e, n) {
              e.appendChild(n);
            }),
            (e.prototype.insertBefore = function (e, n, t) {
              e && e.insertBefore(n, t);
            }),
            (e.prototype.removeChild = function (e, n) {
              e && e.removeChild(n);
            }),
            (e.prototype.selectRootElement = function (e) {
              var n = "string" == typeof e ? document.querySelector(e) : e;
              if (!n)
                throw new Error(
                  'The selector "' + e + '" did not match any elements'
                );
              return (n.textContent = ""), n;
            }),
            (e.prototype.parentNode = function (e) {
              return e.parentNode;
            }),
            (e.prototype.nextSibling = function (e) {
              return e.nextSibling;
            }),
            (e.prototype.setAttribute = function (e, n, t, r) {
              if (r) {
                n = r + ":" + n;
                var o = Ua[r];
                o ? e.setAttributeNS(o, n, t) : e.setAttribute(n, t);
              } else e.setAttribute(n, t);
            }),
            (e.prototype.removeAttribute = function (e, n, t) {
              if (t) {
                var r = Ua[t];
                r ? e.removeAttributeNS(r, n) : e.removeAttribute(t + ":" + n);
              } else e.removeAttribute(n);
            }),
            (e.prototype.addClass = function (e, n) {
              e.classList.add(n);
            }),
            (e.prototype.removeClass = function (e, n) {
              e.classList.remove(n);
            }),
            (e.prototype.setStyle = function (e, n, t, r) {
              r & ht.DashCase
                ? e.style.setProperty(n, t, r & ht.Important ? "important" : "")
                : (e.style[n] = t);
            }),
            (e.prototype.removeStyle = function (e, n, t) {
              t & ht.DashCase ? e.style.removeProperty(n) : (e.style[n] = "");
            }),
            (e.prototype.setProperty = function (e, n, t) {
              Ja(n, "property"), (e[n] = t);
            }),
            (e.prototype.setValue = function (e, n) {
              e.nodeValue = n;
            }),
            (e.prototype.listen = function (e, n, t) {
              return (
                Ja(n, "listener"),
                "string" == typeof e
                  ? this.eventManager.addGlobalEventListener(e, n, qa(t))
                  : this.eventManager.addEventListener(e, n, qa(t))
              );
            }),
            e
          );
        })(),
        Xa = "@".charCodeAt(0);
      function Ja(e, n) {
        if (e.charCodeAt(0) === Xa)
          throw new Error(
            "Found the synthetic " +
              n +
              " " +
              e +
              '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.'
          );
      }
      var $a,
        es = (function (e) {
          function n(n, t, r) {
            var o = e.call(this, n) || this;
            o.component = r;
            var i = Ya(r.id, r.styles, []);
            return (
              t.addStyles(i),
              (o.contentAttr = Qa.replace(Za, r.id)),
              (o.hostAttr = Wa.replace(Za, r.id)),
              o
            );
          }
          return (
            o(n, e),
            (n.prototype.applyToHost = function (n) {
              e.prototype.setAttribute.call(this, n, this.hostAttr, "");
            }),
            (n.prototype.createElement = function (n, t) {
              var r = e.prototype.createElement.call(this, n, t);
              return (
                e.prototype.setAttribute.call(this, r, this.contentAttr, ""), r
              );
            }),
            n
          );
        })(Ka),
        ns = (function (e) {
          function n(n, t, r, o) {
            var i = e.call(this, n) || this;
            (i.sharedStylesHost = t),
              (i.hostEl = r),
              (i.component = o),
              (i.shadowRoot =
                o.encapsulation === qe.ShadowDom
                  ? r.attachShadow({ mode: "open" })
                  : r.createShadowRoot()),
              i.sharedStylesHost.addHost(i.shadowRoot);
            for (var l = Ya(o.id, o.styles, []), u = 0; u < l.length; u++) {
              var a = document.createElement("style");
              (a.textContent = l[u]), i.shadowRoot.appendChild(a);
            }
            return i;
          }
          return (
            o(n, e),
            (n.prototype.nodeOrShadowRoot = function (e) {
              return e === this.hostEl ? this.shadowRoot : e;
            }),
            (n.prototype.destroy = function () {
              this.sharedStylesHost.removeHost(this.shadowRoot);
            }),
            (n.prototype.appendChild = function (n, t) {
              return e.prototype.appendChild.call(
                this,
                this.nodeOrShadowRoot(n),
                t
              );
            }),
            (n.prototype.insertBefore = function (n, t, r) {
              return e.prototype.insertBefore.call(
                this,
                this.nodeOrShadowRoot(n),
                t,
                r
              );
            }),
            (n.prototype.removeChild = function (n, t) {
              return e.prototype.removeChild.call(
                this,
                this.nodeOrShadowRoot(n),
                t
              );
            }),
            (n.prototype.parentNode = function (n) {
              return this.nodeOrShadowRoot(
                e.prototype.parentNode.call(this, this.nodeOrShadowRoot(n))
              );
            }),
            n
          );
        })(Ka),
        ts =
          ("undefined" != typeof Zone && Zone.__symbol__) ||
          function (e) {
            return "__zone_symbol__" + e;
          },
        rs = ts("addEventListener"),
        os = ts("removeEventListener"),
        is = {},
        ls = "__zone_symbol__propagationStopped";
      "undefined" != typeof Zone &&
        Zone[ts("BLACK_LISTED_EVENTS")] &&
        ($a = {});
      var us = function (e) {
          return !!$a && $a.hasOwnProperty(e);
        },
        as = function (e) {
          var n = is[e.type];
          if (n) {
            var t = this[n];
            if (t) {
              var r = [e];
              if (1 === t.length)
                return (l = t[0]).zone !== Zone.current
                  ? l.zone.run(l.handler, this, r)
                  : l.handler.apply(this, r);
              for (
                var o = t.slice(), i = 0;
                i < o.length && !0 !== e[ls];
                i++
              ) {
                var l;
                (l = o[i]).zone !== Zone.current
                  ? l.zone.run(l.handler, this, r)
                  : l.handler.apply(this, r);
              }
            }
          }
        },
        ss = (function (e) {
          function n(n, t, r) {
            var o = e.call(this, n) || this;
            return (o.ngZone = t), (r && fa(r)) || o.patchEvent(), o;
          }
          return (
            o(n, e),
            (n.prototype.patchEvent = function () {
              if (
                "undefined" != typeof Event &&
                Event &&
                Event.prototype &&
                !Event.prototype.__zone_symbol__stopImmediatePropagation
              ) {
                var e =
                  (Event.prototype.__zone_symbol__stopImmediatePropagation =
                    Event.prototype.stopImmediatePropagation);
                Event.prototype.stopImmediatePropagation = function () {
                  this && (this[ls] = !0), e && e.apply(this, arguments);
                };
              }
            }),
            (n.prototype.supports = function (e) {
              return !0;
            }),
            (n.prototype.addEventListener = function (e, n, t) {
              var r = this,
                o = t;
              if (!e[rs] || (Wn.isInAngularZone() && !us(n)))
                e.addEventListener(n, o, !1);
              else {
                var i = is[n];
                i || (i = is[n] = ts("ANGULAR" + n + "FALSE"));
                var l = e[i],
                  u = l && l.length > 0;
                l || (l = e[i] = []);
                var a = us(n) ? Zone.root : Zone.current;
                if (0 === l.length) l.push({ zone: a, handler: o });
                else {
                  for (var s = !1, c = 0; c < l.length; c++)
                    if (l[c].handler === o) {
                      s = !0;
                      break;
                    }
                  s || l.push({ zone: a, handler: o });
                }
                u || e[rs](n, as, !1);
              }
              return function () {
                return r.removeEventListener(e, n, o);
              };
            }),
            (n.prototype.removeEventListener = function (e, n, t) {
              var r = e[os];
              if (!r) return e.removeEventListener.apply(e, [n, t, !1]);
              var o = is[n],
                i = o && e[o];
              if (!i) return e.removeEventListener.apply(e, [n, t, !1]);
              for (var l = !1, u = 0; u < i.length; u++)
                if (i[u].handler === t) {
                  (l = !0), i.splice(u, 1);
                  break;
                }
              l
                ? 0 === i.length && r.apply(e, [n, as, !1])
                : e.removeEventListener.apply(e, [n, t, !1]);
            }),
            l([u(0, _e(Aa)), u(2, Ee()), u(2, _e(En))], n)
          );
        })(Ba),
        cs = {
          pan: !0,
          panstart: !0,
          panmove: !0,
          panend: !0,
          pancancel: !0,
          panleft: !0,
          panright: !0,
          panup: !0,
          pandown: !0,
          pinch: !0,
          pinchstart: !0,
          pinchmove: !0,
          pinchend: !0,
          pinchcancel: !0,
          pinchin: !0,
          pinchout: !0,
          press: !0,
          pressup: !0,
          rotate: !0,
          rotatestart: !0,
          rotatemove: !0,
          rotateend: !0,
          rotatecancel: !0,
          swipe: !0,
          swipeleft: !0,
          swiperight: !0,
          swipeup: !0,
          swipedown: !0,
          tap: !0,
        },
        ds = new ue("HammerGestureConfig"),
        fs = new ue("HammerLoader"),
        ps = (function () {
          function e() {
            (this.events = []), (this.overrides = {});
          }
          return (
            (e.prototype.buildHammer = function (e) {
              var n = new Hammer(e, this.options);
              for (var t in (n.get("pinch").set({ enable: !0 }),
              n.get("rotate").set({ enable: !0 }),
              this.overrides))
                n.get(t).set(this.overrides[t]);
              return n;
            }),
            e
          );
        })(),
        hs = (function (e) {
          function n(n, t, r, o) {
            var i = e.call(this, n) || this;
            return (i._config = t), (i.console = r), (i.loader = o), i;
          }
          return (
            o(n, e),
            (n.prototype.supports = function (e) {
              return !(
                (!cs.hasOwnProperty(e.toLowerCase()) &&
                  !this.isCustomEvent(e)) ||
                (!window.Hammer &&
                  !this.loader &&
                  (this.console.warn(
                    'The "' +
                      e +
                      '" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.'
                  ),
                  1))
              );
            }),
            (n.prototype.addEventListener = function (e, n, t) {
              var r = this,
                o = this.manager.getZone();
              if (((n = n.toLowerCase()), !window.Hammer && this.loader)) {
                var i = !1,
                  l = function () {
                    i = !0;
                  };
                return (
                  this.loader()
                    .then(function () {
                      if (!window.Hammer)
                        return (
                          r.console.warn(
                            "The custom HAMMER_LOADER completed, but Hammer.JS is not present."
                          ),
                          void (l = function () {})
                        );
                      i || (l = r.addEventListener(e, n, t));
                    })
                    .catch(function () {
                      r.console.warn(
                        'The "' +
                          n +
                          '" event cannot be bound because the custom Hammer.JS loader failed.'
                      ),
                        (l = function () {});
                    }),
                  function () {
                    l();
                  }
                );
              }
              return o.runOutsideAngular(function () {
                var i = r._config.buildHammer(e),
                  l = function (e) {
                    o.runGuarded(function () {
                      t(e);
                    });
                  };
                return (
                  i.on(n, l),
                  function () {
                    i.off(n, l), "function" == typeof i.destroy && i.destroy();
                  }
                );
              });
            }),
            (n.prototype.isCustomEvent = function (e) {
              return this._config.events.indexOf(e) > -1;
            }),
            l([u(0, _e(Aa)), u(1, _e(ds)), u(3, Ee()), u(3, _e(fs))], n)
          );
        })(Ba),
        vs = ["alt", "control", "meta", "shift"],
        gs = {
          alt: function (e) {
            return e.altKey;
          },
          control: function (e) {
            return e.ctrlKey;
          },
          meta: function (e) {
            return e.metaKey;
          },
          shift: function (e) {
            return e.shiftKey;
          },
        },
        ys = (function (e) {
          function n(n) {
            return e.call(this, n) || this;
          }
          var t;
          return (
            o(n, e),
            (t = n),
            (n.prototype.supports = function (e) {
              return null != t.parseEventName(e);
            }),
            (n.prototype.addEventListener = function (e, n, r) {
              var o = t.parseEventName(n),
                i = t.eventCallback(o.fullKey, r, this.manager.getZone());
              return this.manager.getZone().runOutsideAngular(function () {
                return _a().onAndCancel(e, o.domEventName, i);
              });
            }),
            (n.parseEventName = function (e) {
              var n = e.toLowerCase().split("."),
                r = n.shift();
              if (0 === n.length || ("keydown" !== r && "keyup" !== r))
                return null;
              var o = t._normalizeKey(n.pop()),
                i = "";
              if (
                (vs.forEach(function (e) {
                  var t = n.indexOf(e);
                  t > -1 && (n.splice(t, 1), (i += e + "."));
                }),
                (i += o),
                0 != n.length || 0 === o.length)
              )
                return null;
              var l = {};
              return (l.domEventName = r), (l.fullKey = i), l;
            }),
            (n.getEventFullKey = function (e) {
              var n = "",
                t = _a().getEventKey(e);
              return (
                " " === (t = t.toLowerCase())
                  ? (t = "space")
                  : "." === t && (t = "dot"),
                vs.forEach(function (r) {
                  r != t && (0, gs[r])(e) && (n += r + ".");
                }),
                (n += t)
              );
            }),
            (n.eventCallback = function (e, n, r) {
              return function (o) {
                t.getEventFullKey(o) === e &&
                  r.runGuarded(function () {
                    return n(o);
                  });
              };
            }),
            (n._normalizeKey = function (e) {
              switch (e) {
                case "esc":
                  return "escape";
                default:
                  return e;
              }
            }),
            (t = l([u(0, _e(Aa))], n))
          );
        })(Ba),
        ms = function () {},
        bs = (function (e) {
          function n(n) {
            var t = e.call(this) || this;
            return (t._doc = n), t;
          }
          return (
            o(n, e),
            (n.prototype.sanitize = function (e, n) {
              if (null == n) return null;
              switch (e) {
                case mr.NONE:
                  return n;
                case mr.HTML:
                  return n instanceof _s
                    ? n.changingThisBreaksApplicationSecurity
                    : (this.checkNotSafeValue(n, "HTML"),
                      (function (e, n) {
                        var t = null;
                        try {
                          tr = tr || new Kt(e);
                          var r = n ? String(n) : "";
                          t = tr.getInertBodyElement(r);
                          var o = 5,
                            i = r;
                          do {
                            if (0 === o)
                              throw new Error(
                                "Failed to sanitize html because the input is unstable"
                              );
                            o--,
                              (r = i),
                              (i = t.innerHTML),
                              (t = tr.getInertBodyElement(r));
                          } while (r !== i);
                          var l = new dr(),
                            u = l.sanitizeChildren(vr(t) || t);
                          return (
                            it() &&
                              l.sanitizedSomething &&
                              console.warn(
                                "WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss)."
                              ),
                            u
                          );
                        } finally {
                          if (t)
                            for (var a = vr(t) || t; a.firstChild; )
                              a.removeChild(a.firstChild);
                        }
                      })(this._doc, String(n)));
                case mr.STYLE:
                  return n instanceof Es
                    ? n.changingThisBreaksApplicationSecurity
                    : (this.checkNotSafeValue(n, "Style"),
                      (function (e) {
                        if (!(e = String(e).trim())) return "";
                        var n = e.match(yr);
                        return (n && $t(n[1]) === n[1]) ||
                          (e.match(gr) &&
                            (function (e) {
                              for (
                                var n = !0, t = !0, r = 0;
                                r < e.length;
                                r++
                              ) {
                                var o = e.charAt(r);
                                "'" === o && t
                                  ? (n = !n)
                                  : '"' === o && n && (t = !t);
                              }
                              return n && t;
                            })(e))
                          ? e
                          : (it() &&
                              console.warn(
                                "WARNING: sanitizing unsafe style value " +
                                  e +
                                  " (see http://g.co/ng/security#xss)."
                              ),
                            "unsafe");
                      })(n));
                case mr.SCRIPT:
                  if (n instanceof Cs)
                    return n.changingThisBreaksApplicationSecurity;
                  throw (
                    (this.checkNotSafeValue(n, "Script"),
                    new Error("unsafe value used in a script context"))
                  );
                case mr.URL:
                  return n instanceof Ss || n instanceof xs
                    ? n.changingThisBreaksApplicationSecurity
                    : (this.checkNotSafeValue(n, "URL"), $t(String(n)));
                case mr.RESOURCE_URL:
                  if (n instanceof Ss)
                    return n.changingThisBreaksApplicationSecurity;
                  throw (
                    (this.checkNotSafeValue(n, "ResourceURL"),
                    new Error(
                      "unsafe value used in a resource URL context (see http://g.co/ng/security#xss)"
                    ))
                  );
                default:
                  throw new Error(
                    "Unexpected SecurityContext " +
                      e +
                      " (see http://g.co/ng/security#xss)"
                  );
              }
            }),
            (n.prototype.checkNotSafeValue = function (e, n) {
              if (e instanceof ws)
                throw new Error(
                  "Required a safe " +
                    n +
                    ", got a " +
                    e.getTypeName() +
                    " (see http://g.co/ng/security#xss)"
                );
            }),
            (n.prototype.bypassSecurityTrustHtml = function (e) {
              return new _s(e);
            }),
            (n.prototype.bypassSecurityTrustStyle = function (e) {
              return new Es(e);
            }),
            (n.prototype.bypassSecurityTrustScript = function (e) {
              return new Cs(e);
            }),
            (n.prototype.bypassSecurityTrustUrl = function (e) {
              return new xs(e);
            }),
            (n.prototype.bypassSecurityTrustResourceUrl = function (e) {
              return new Ss(e);
            }),
            l([u(0, _e(Aa))], n)
          );
        })(ms),
        ws = (function () {
          function e(e) {
            this.changingThisBreaksApplicationSecurity = e;
          }
          return (
            (e.prototype.toString = function () {
              return (
                "SafeValue must use [property]=binding: " +
                this.changingThisBreaksApplicationSecurity +
                " (see http://g.co/ng/security#xss)"
              );
            }),
            e
          );
        })(),
        _s = (function (e) {
          function n() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            o(n, e),
            (n.prototype.getTypeName = function () {
              return "HTML";
            }),
            n
          );
        })(ws),
        Es = (function (e) {
          function n() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            o(n, e),
            (n.prototype.getTypeName = function () {
              return "Style";
            }),
            n
          );
        })(ws),
        Cs = (function (e) {
          function n() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            o(n, e),
            (n.prototype.getTypeName = function () {
              return "Script";
            }),
            n
          );
        })(ws),
        xs = (function (e) {
          function n() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            o(n, e),
            (n.prototype.getTypeName = function () {
              return "URL";
            }),
            n
          );
        })(ws),
        Ss = (function (e) {
          function n() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            o(n, e),
            (n.prototype.getTypeName = function () {
              return "ResourceURL";
            }),
            n
          );
        })(ws),
        ks = ut(Zt, "browser", [
          { provide: En, useValue: "browser" },
          {
            provide: _n,
            useValue: function () {
              Ta.makeCurrent(), Da.init();
            },
            multi: !0,
          },
          { provide: na, useClass: Oa, deps: [Aa] },
          {
            provide: Aa,
            useFactory: function () {
              return document;
            },
            deps: [],
          },
        ]);
      function Ts() {
        return new tn();
      }
      var Ns = (function () {
        function e(e) {
          if (e)
            throw new Error(
              "BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead."
            );
        }
        var n;
        return (
          (n = e),
          (e.withServerTransition = function (e) {
            return {
              ngModule: n,
              providers: [
                { provide: mn, useValue: e.appId },
                { provide: Ma, useExisting: mn },
                Ra,
              ],
            };
          }),
          (n = l([u(0, Ee()), u(0, xe()), u(0, _e(n))], e))
        );
      })();
      "undefined" != typeof window && window;
      var As = (function (e, n, t) {
        return new xl($u, [ea], function (e) {
          return (function (e) {
            for (var n = {}, t = [], r = !1, o = 0; o < e.length; o++) {
              var i = e[o];
              i.token === rn && !0 === i.value && (r = !0),
                1073741824 & i.flags && t.push(i.token),
                (i.index = o),
                (n[Rr(i.token)] = i);
            }
            return {
              factory: null,
              providersByKey: n,
              providers: e,
              modules: t,
              isRoot: r,
            };
          })([
            yo(512, Pn, jn, [[8, [ba]], [3, Pn], Ln]),
            yo(5120, Wt, qt, [[3, Wt]]),
            yo(4608, ua, aa, [Wt, [2, la]]),
            yo(4608, kn, kn, []),
            yo(5120, mn, bn, []),
            yo(5120, Vt, Qt, []),
            yo(5120, Bt, Yt, []),
            yo(4608, ms, bs, [ca]),
            yo(6144, br, null, [ms]),
            yo(4608, ds, ps, []),
            yo(
              5120,
              La,
              function (e, n, t, r, o, i, l, u) {
                return [new ss(e, n, t), new ys(r), new hs(o, i, l, u)];
              },
              [ca, Wn, En, ca, ca, ds, xn, [2, fs]]
            ),
            yo(4608, Va, Va, [La, Wn]),
            yo(135680, za, za, [ca]),
            yo(4608, Ga, Ga, [Va, za]),
            yo(6144, pt, null, [Ga]),
            yo(6144, Fa, null, [za]),
            yo(4608, $n, $n, [Wn]),
            yo(1073742336, sa, sa, []),
            yo(1024, tn, Ts, []),
            yo(
              1024,
              gn,
              function (e) {
                return [
                  ((n = e),
                  Pa("probe", Ha),
                  Pa(
                    "coreTokens",
                    i(
                      {},
                      ja,
                      (n || []).reduce(function (e, n) {
                        return (e[n.name] = n.token), e;
                      }, {})
                    )
                  ),
                  function () {
                    return Ha;
                  }),
                ];
                var n;
              },
              [[2, lt]]
            ),
            yo(512, yn, yn, [[2, gn]]),
            yo(131584, dt, dt, [Wn, xn, Ie, tn, Pn, yn]),
            yo(1073742336, Gt, Gt, [dt]),
            yo(1073742336, Ns, Ns, [[3, Ns]]),
            yo(1073742336, ga, ga, []),
            yo(1073742336, $u, $u, []),
            yo(256, rn, !0, []),
          ]);
        });
      })();
      (function () {
        if (rt)
          throw new Error("Cannot enable prod mode after platform setup.");
        tt = !1;
      })(),
        ks()
          .bootstrapModuleFactory(As)
          .catch(function (e) {
            return console.error(e);
          });
    },
  },
  [[0, 0]],
]);
