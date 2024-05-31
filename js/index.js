// !(function () {
//   "use strict";
//   class t {
//     t;
//     i = [];
//     o = new Set();
//     constructor(t) {
//       this.t = t?.t ?? 1;
//     }
//     h(t) {
//       t.addEventListener("success", () => {
//         this.u(t);
//       }),
//         t.addEventListener("failed", () => {
//           this.u(t);
//         }),
//         this.i.push(t);
//     }
//     clear() {
//       this.i.length = 0;
//     }
//     start() {
//       const t = this.t - this.o.size,
//         i = this.i.splice(0, t);
//       for (const t of i) this.l(t);
//     }
//     l(t) {
//       setTimeout(() => t.p()), this.o.add(t);
//     }
//     u(t) {
//       this.o.delete(t);
//       const i = this.i.shift();
//       i && this.l(i);
//     }
//   }
//   class i {
//     m = new EventTarget();
//     v;
//     constructor(t) {
//       this.v = t;
//     }
//     addEventListener(t, i) {
//       this.m.addEventListener(t, i, { once: !0 });
//     }
//     async p() {
//       return Promise.resolve(this.v())
//         .then((t) =>
//           this.m.dispatchEvent(new CustomEvent("success", { detail: t }))
//         )
//         .catch((t) =>
//           this.m.dispatchEvent(new CustomEvent("failed", { detail: t }))
//         );
//     }
//   }
//   class s {
//     queue;
//     _;
//     loading = new Set();
//     L = new Map();
//     R = new Map();
//     options = { P: 1 };
//     constructor(i) {
//       (this.options = { ...this.options, ...i }),
//         (this.queue = new t({ t: this.options.P })),
//         (this._ = new IntersectionObserver((t) => {
//           t.forEach((t) => {
//             const i = this.L.get(t.target);
//             i &&
//               (t.isIntersecting
//                 ? (this.loading.add(i),
//                   i
//                     .load()
//                     .then(() => this.S(i))
//                     .catch(() => this.S(i))
//                     .finally(() => this.A()))
//                 : i.cancel());
//           });
//         }));
//     }
//     register(t) {
//       t.$ ||
//         (this.L.set(t.element, t),
//         this._.observe(t.element),
//         this.R.set(t.element, this.C(t.element)));
//     }
//     C(t) {
//       const i = t.getBoundingClientRect();
//       if (!i.width && !i.height) {
//         return t.parentElement ? this.C(t.parentElement) : t;
//       }
//       return t;
//     }
//     async A() {
//       if (!this.loading.size) {
//         this.queue.clear();
//         for (const t of this.U()) {
//           const s = new i(() => t.load());
//           s.addEventListener("success", () => this.S(t)),
//             s.addEventListener("failed", () => this.S(t)),
//             this.queue.h(s);
//         }
//         this.queue.start();
//       }
//     }
//     S(t) {
//       this.loading.delete(t),
//         t.$ &&
//           (this.R.delete(t.element),
//           this.L.delete(t.element),
//           this._.unobserve(t.element));
//     }
//     U() {
//       const t = Array.from(this.L.values()).sort(
//         (t, i) => this.T(t.element) - this.T(i.element)
//       );
//       return t;
//     }
//     T(t) {
//       const i = this.R.get(t)?.getBoundingClientRect();
//       if (!i) return 1 / 0;
//       const s = window.innerWidth / 2,
//         e = window.innerHeight / 2,
//         n = i.x + i.width / 2,
//         r = i.y + i.height / 2;
//       return Math.sqrt((s - n) ** 2 + (e - r) ** 2);
//     }
//   }
//   function e(t) {
//     return new Promise((i) => {
//       const s = t ?? i;
//       "loading" !== document.readyState
//         ? s()
//         : window.addEventListener("DOMContentLoaded", () => s());
//     });
//   }
//   class n {
//     messages = [];
//     M = [];
//     state = "idle";
//     k() {
//       return 0 === this.messages.length;
//     }
//     I(t) {
//       this.M.push(t);
//     }
//     D(...t) {
//       t.forEach((t) => this.messages.push(t));
//     }
//     clear() {
//       this.messages.length = 0;
//     }
//     start() {
//       "stopped" !== this.state &&
//         ((this.state = "running"),
//         window.requestAnimationFrame(() => this.N()));
//     }
//     stop() {
//       this.state = "stopped";
//     }
//     N() {
//       if (!this.M.length) return;
//       if ("running" !== this.state) return;
//       const t = this.messages.shift();
//       t && this.M.forEach((i) => i(t)),
//         this.k()
//           ? (this.state = "idle")
//           : window.requestAnimationFrame(() => this.N());
//     }
//   }
//   class r {
//     _;
//     O = [];
//     selector;
//     mark;
//     H = new WeakSet();
//     constructor(t, i = "data-detected") {
//       (this.selector = t), (this.mark = i);
//       const s = new n();
//       s.I((t) => this.j(t)),
//         (this._ = new MutationObserver((t) => {
//           t.forEach((t) => s.D(t.target)), s.start();
//         }));
//     }
//     W(t) {
//       this.O.push(t);
//     }
//     observe(t) {
//       this.j(t), this._.observe(t, { childList: !0, subtree: !0 });
//     }
//     disconnect() {
//       this._.disconnect();
//     }
//     j(t) {
//       const i = t.querySelectorAll(this.selector);
//       Array.from(i)
//         .filter((t) => !this.H.has(t))
//         .forEach((t) => {
//           this.H.add(t),
//             this.O.forEach((i) => {
//               i(t), t.setAttribute(this.mark, "true");
//             });
//         });
//     }
//   }
//   const o = [
//     { F: "video/mp4;codecs=avc1.640029", type: "avc" },
//     { F: "video/mp4;codecs=hvc1", type: "hevc" },
//     { F: "video/webm;codecs=vp9", type: "vp9" },
//   ];
//   class h {
//     static q() {
//       const t = [],
//         i = document.createElement("video");
//       for (const s of o) "probably" === i.canPlayType(s.F) && t.push(s.type);
//       return i.remove(), t;
//     }
//   }
//   class a {
//     element;
//     B;
//     V = { state: "data-state" };
//     Z = "idle";
//     get state() {
//       return this.Z;
//     }
//     get $() {
//       return "loaded" === this.state || "error" === this.state;
//     }
//     constructor(t, i) {
//       (this.element = t), (this.V = { ...this.V, ...i });
//       const s = t.getAttribute(this.V.state);
//       s ? (this.Z = s) : t.setAttribute(this.V.state, this.state);
//     }
//     S() {}
//     G() {
//       this.element.setAttribute(this.V.state, this.state), this.B?.abort();
//     }
//     async load() {
//       return "loading" === this.state
//         ? this
//         : new Promise((t, i) => {
//             (this.Z = "loading"),
//               this.element.setAttribute(this.V.state, this.state),
//               (this.B = new AbortController()),
//               this.element.addEventListener(
//                 "load",
//                 () => {
//                   (this.Z = "loaded"), this.S(), this.G(), t(this);
//                 },
//                 { once: !0, signal: this.B.signal }
//               ),
//               this.element.addEventListener(
//                 "cancel",
//                 () => {
//                   (this.Z = "cancel"), this.G(), t(this);
//                 },
//                 { once: !0, signal: this.B.signal }
//               ),
//               this.element.addEventListener(
//                 "error",
//                 () => {
//                   (this.Z = "error"), this.G(), i(this);
//                 },
//                 { once: !0, signal: this.B.signal }
//               ),
//               this.J();
//           });
//     }
//     cancel() {
//       "loading" === this.state &&
//         (this.element.dispatchEvent(new Event("cancel")), this.K());
//     }
//   }
//   class c extends a {
//     sources = [];
//     src;
//     srcset;
//     placeholder;
//     attributes = { src: "data-src", srcset: "data-srcset", placeholder: "src" };
//     constructor(t, i) {
//       super(t, i),
//         (this.attributes = { ...this.attributes, ...i }),
//         (this.src = t.getAttribute(this.attributes.src) ?? ""),
//         (this.srcset = t.getAttribute(this.attributes.srcset) ?? ""),
//         (this.placeholder = t.getAttribute(this.attributes.placeholder) ?? "");
//       const s = this.element.parentElement;
//       s &&
//         "PICTURE" === s.tagName &&
//         (this.sources = Array.from(s.querySelectorAll(":scope > source")));
//     }
//     J() {
//       this.sources.forEach((t) => {
//         const i = t.getAttribute(this.attributes.srcset);
//         i && (t.srcset = i);
//       }),
//         this.srcset && (this.element.srcset = this.srcset),
//         this.src && (this.element.src = this.src);
//     }
//     K() {
//       this.sources.forEach((t) => {
//         t.srcset && (t.srcset = "");
//       }),
//         this.element.srcset && (this.element.srcset = ""),
//         this.element.src && (this.element.src = this.placeholder);
//     }
//     S() {
//       this.element.src === this.placeholder &&
//         this.element.removeAttribute("src");
//     }
//   }
//   class d {
//     parent;
//     Y = new Map();
//     constructor(t) {
//       this.parent = t;
//     }
//     register(t, i) {
//       if (this.Y.has(t)) throw (t.toString(), new Error());
//       return this.Y.set(t, i), this;
//     }
//     resolve(t) {
//       const i = this.X(t);
//       if (i) return i;
//       throw (t.toString(), new Error());
//     }
//     X(t) {
//       return this.Y.has(t)
//         ? this.Y.get(t)
//         : this.parent
//         ? this.parent.X(t)
//         : void 0;
//     }
//   }
//   class u {
//     tt;
//     it;
//     state = "idle";
//     children = new Map();
//     constructor(t, i) {
//       (this.tt = t), (this.it = new d(i));
//     }
//     async register() {
//       this.constructor.name;
//     }
//     async st() {
//       this.constructor.name;
//     }
//     async terminate() {
//       this.constructor.name;
//     }
//     async et() {
//       this.constructor.name;
//     }
//     async nt() {
//       try {
//         await this.initialize(), await this.N();
//       } catch (t) {
//         throw (await this.rt(), t);
//       }
//     }
//     dispatchEvent(t) {
//       if ("terminate" === t) this.rt();
//     }
//     async ot(t) {
//       try {
//         await t();
//       } catch (t) {
//         throw ((this.state = "error"), await this.et(), t);
//       }
//     }
//     async initialize() {
//       "idle" === this.state &&
//         ((this.state = "ready"),
//         this.ht.forEach((t) => this.children.set(t, new t(this.tt, this.it))),
//         await this.ot(() => this.register()),
//         await this.ot(() => this.st()),
//         this.constructor.name,
//         this.state,
//         await Promise.all(
//           [...this.children.values()].map((t) => t.initialize())
//         ));
//     }
//     async N() {
//       "ready" === this.state &&
//         ((this.state = "inProgress"),
//         await this.ot(() => this.p()),
//         this.constructor.name,
//         this.state,
//         await Promise.all([...this.children.values()].map((t) => t.N())));
//     }
//     async rt() {
//       "terminate" !== this.state &&
//         ("error" !== this.state && (this.state = "terminate"),
//         await this.ot(() => this.terminate()),
//         this.constructor.name,
//         this.state,
//         await Promise.all([...this.children.values()].map((t) => t.rt())));
//     }
//   }
//   class l {
//     service;
//     detail;
//     ct = { width: "data-layout-width", height: "data-layout-height" };
//     constructor(t, i = {}) {
//       (this.service = t), (this.detail = i);
//     }
//     p(t) {
//       this.dt(t) || this.ut(t);
//     }
//     lt(t) {
//       return t && this.service.wt(t) && !this.service.gt(t)
//         ? this.service.ft(t)
//         : t;
//     }
//     vt(t, i, s, e = !1) {
//       const n = t.getAttribute(i);
//       n && (t.setAttribute(s, n), e && t.removeAttribute(i));
//     }
//     yt(t, i, s) {
//       const e = t.getAttribute("style") ?? "";
//       return (
//         !e.includes("aspect-ratio") &&
//         (t.setAttribute("style", `aspect-ratio: ${i}/${s};` + e), !0)
//       );
//     }
//   }
//   class w extends l {
//     bt = {
//       src: "data-original-src",
//       srcset: "data-original-srcset",
//       naturalWidth: "data-original-natural-width",
//       naturalHeight: "data-original-natural-height",
//     };
//     xt = { src: "data-src", srcset: "data-srcset" };
//     dt(t) {
//       return (
//         "optimize-image" === t.getAttribute("data-landinghub") ||
//         (!t.hasAttribute(this.xt.src) &&
//           !t.hasAttribute(this.xt.srcset) &&
//           Boolean(t.src) &&
//           t.complete)
//       );
//     }
//     ut(t) {
//       const i = this.st(t);
//       if (
//         (this._t(t, i),
//         "eager" === t.getAttribute("loading") ||
//           "eager" === this.service.loading)
//       )
//         return this.replace(t);
//       if ("native" === this.service.loading)
//         return t.setAttribute("loading", "lazy"), this.replace(t);
//       if (
//         (t.removeAttribute("loading"),
//         t.setAttribute("data-landinghub", "optimize-image"),
//         !t.src.startsWith("data:image"))
//       ) {
//         const i =
//             t.getAttribute(this.ct.width) ??
//             t.getAttribute(this.bt.naturalWidth),
//           s =
//             t.getAttribute(this.ct.height) ??
//             t.getAttribute(this.bt.naturalHeight);
//         i && s
//           ? t.setAttribute(
//               "src",
//               `data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='${i}'%20height='${s}'%3E%3C/svg%3E`
//             )
//           : t.setAttribute(
//               "src",
//               "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz4="
//             );
//       }
//       return this.replace(t, {
//         src: "data-landinghub-src",
//         srcset: "data-landinghub-srcset",
//       });
//     }
//     st(t) {
//       t.setAttribute("decoding", "async"),
//         t.src.startsWith("data:image") ||
//           (t.naturalWidth &&
//             t.naturalHeight &&
//             (t.setAttribute(this.bt.naturalWidth, t.naturalWidth.toString()),
//             t.setAttribute(this.bt.naturalHeight, t.naturalHeight.toString())),
//           this.vt(t, "src", this.bt.src, !0)),
//         this.vt(t, "srcset", this.bt.srcset, !0),
//         this.vt(t, this.xt.src, this.bt.src),
//         this.vt(t, this.xt.srcset, this.bt.srcset);
//       const i = t.closest("picture");
//       if (i) {
//         i.querySelectorAll(":scope > source").forEach((t) => {
//           this.vt(t, "srcset", this.bt.srcset, !0),
//             this.vt(t, this.xt.srcset, this.bt.srcset);
//         });
//       }
//       const s = t.getAttribute(this.bt.src);
//       if (s) return this.detail[s];
//       const e = t.getAttribute(this.bt.srcset);
//       if (e) {
//         const t = e.split(",").map((t) => t.trim().split(" ")[0]);
//         for (const i of t) if (this.detail[i]) return this.detail[i];
//       }
//     }
//     _t(t, i) {
//       const s = Number(
//           t.getAttribute("width")?.replace(/(\d+)(px)$/, "$1") ?? "0"
//         ),
//         e = Number(
//           t.getAttribute("height")?.replace(/(\d+)(px)$/, "$1") ?? "0"
//         );
//       if (s && e)
//         return (
//           t.setAttribute(this.ct.width, s.toString()),
//           void t.setAttribute(this.ct.height, e.toString())
//         );
//       const n = i?.width,
//         r = i?.height;
//       if (n && r)
//         if (
//           (t.setAttribute(this.ct.width, n.toString()),
//           t.setAttribute(this.ct.height, r.toString()),
//           0 === s && 0 === e)
//         )
//           (t.width = n), (t.height = r);
//         else if (!s || !e) {
//           this.yt(t, n, r) &&
//             t.addEventListener("load", () => {
//               t.naturalWidth &&
//                 t.naturalHeight &&
//                 (t.style.aspectRatio = `${t.naturalWidth}/${t.naturalHeight}`);
//             });
//         }
//     }
//     replace(t, i = { src: "src", srcset: "srcset" }) {
//       const s = t.getAttribute(this.bt.src);
//       if (s) {
//         const e = this.lt(s);
//         t.setAttribute(i.src, e),
//           t.hasAttribute(this.xt.src) && t.setAttribute(this.xt.src, e);
//       }
//       const e = t.getAttribute(this.bt.srcset);
//       if (e) {
//         const s = this.Et(e);
//         t.setAttribute(i.srcset, s),
//           t.hasAttribute(this.xt.srcset) && t.setAttribute(this.xt.srcset, s);
//       }
//       const n = t.closest("picture");
//       if (n) {
//         n.querySelectorAll(":scope > source").forEach((t) => {
//           const s = t.getAttribute(this.bt.srcset);
//           if (s) {
//             const e = this.Et(s);
//             t.setAttribute(i.srcset, e),
//               t.hasAttribute(this.xt.srcset) &&
//                 t.setAttribute(this.xt.srcset, e);
//           }
//         });
//       }
//     }
//     Et(t) {
//       return t
//         .split(",")
//         .map((t) => {
//           const i = t.trim().split(" "),
//             s = i.shift() ?? "";
//           return this.lt(s) + " " + i.join(" ");
//         })
//         .join(",");
//     }
//   }
//   class p extends u {
//     ht = [];
//     async register() {
//       const t = this.it.resolve(pt),
//         i = this.tt.get(dt).products;
//       this.it.register("P", new w(t, i)),
//         this.it.register(
//           "D",
//           new r(
//             `img:not([${this.tt.get(ct)}-dispatcher-disable])`,
//             `${this.tt.get(ct)}-detected`
//           )
//         );
//     }
//     async p() {
//       const t = this.it.resolve("D"),
//         i = this.it.resolve("P"),
//         s = this.it.resolve(gt);
//       t.W((t) => {
//         if (
//           (t.hasAttribute(`${this.tt.get(ct)}-detected`) || i.p(t),
//           "optimize-image" === t.getAttribute(this.tt.get(ct)))
//         ) {
//           const i = new c(t, {
//             src: `${this.tt.get(ct)}-src`,
//             srcset: `${this.tt.get(ct)}-srcset`,
//             state: `${this.tt.get(ct)}-status`,
//           });
//           s.register(i);
//         }
//       }),
//         "loading" === document.readyState &&
//           t.observe(document.documentElement),
//         e(() => {
//           t.disconnect(), t.observe(document.body);
//         });
//     }
//   }
//   class g extends u {
//     ht = [];
//     async p() {
//       const t = this.it.resolve(pt),
//         i = this.tt.get(dt);
//       i.performance?.largestContents?.forEach((i) => {
//         const s = document.createElement("link");
//         s.setAttribute(this.tt.get(ct), "preload-tag"),
//           (s.rel = "preload"),
//           (s.as = i.type),
//           t.wt(i.url) && !t.gt(i.url)
//             ? (s.href = t.ft(i.url))
//             : (s.href = i.url),
//           document.head.prepend(s);
//       });
//     }
//   }
//   class m extends u {
//     ht = [];
//     async p() {
//       if (!document.querySelector(`[${this.tt.get(ct)}="fix-style-tag"]`)) {
//         const t = document.createElement("style");
//         t.setAttribute(this.tt.get(ct), "fix-style-tag"),
//           (t.textContent =
//             ':where(img[data-landinghub="optimize-image"],video[data-landinghub="optimize-video"]) { height: auto; }'),
//           document.head.prepend(t);
//       }
//     }
//   }
//   var f = -1,
//     v = function (t) {
//       addEventListener(
//         "pageshow",
//         function (i) {
//           i.persisted && ((f = i.timeStamp), t(i));
//         },
//         !0
//       );
//     },
//     y = function () {
//       return (
//         window.performance &&
//         performance.getEntriesByType &&
//         performance.getEntriesByType("navigation")[0]
//       );
//     },
//     b = function () {
//       var t = y();
//       return (t && t.Lt) || 0;
//     },
//     x = function (t, i) {
//       var s = y(),
//         e = "navigate";
//       return (
//         f >= 0
//           ? (e = "back-forward-cache")
//           : s &&
//             (document.prerendering || b() > 0
//               ? (e = "prerender")
//               : document.wasDiscarded
//               ? (e = "restore")
//               : s.type && (e = s.type.replace(/_/g, "-"))),
//         {
//           name: t,
//           value: void 0 === i ? -1 : i,
//           Rt: "good",
//           delta: 0,
//           entries: [],
//           id: "v3-"
//             .concat(Date.now(), "-")
//             .concat(Math.floor(8999999999999 * Math.random()) + 1e12),
//           Pt: e,
//         }
//       );
//     },
//     _ = function (t, i, s) {
//       try {
//         if (PerformanceObserver.supportedEntryTypes.includes(t)) {
//           var e = new PerformanceObserver(function (t) {
//             Promise.resolve().then(function () {
//               i(t.getEntries());
//             });
//           });
//           return (
//             e.observe(Object.assign({ type: t, buffered: !0 }, s || {})), e
//           );
//         }
//       } catch (t) {}
//     },
//     E = function (t, i, s, e) {
//       var n, r;
//       return function (o) {
//         i.value >= 0 &&
//           (o || e) &&
//           ((r = i.value - (n || 0)) || void 0 === n) &&
//           ((n = i.value),
//           (i.delta = r),
//           (i.Rt = (function (t, i) {
//             return t > i[1] ? "poor" : t > i[0] ? "needs-improvement" : "good";
//           })(i.value, s)),
//           t(i));
//       };
//     },
//     L = function (t) {
//       requestAnimationFrame(function () {
//         return requestAnimationFrame(function () {
//           return t();
//         });
//       });
//     },
//     R = function (t) {
//       var i = function (i) {
//         ("pagehide" !== i.type && "hidden" !== document.visibilityState) ||
//           t(i);
//       };
//       addEventListener("visibilitychange", i, !0),
//         addEventListener("pagehide", i, !0);
//     },
//     P = function (t) {
//       var i = !1;
//       return function (s) {
//         i || (t(s), (i = !0));
//       };
//     },
//     S = -1,
//     A = function () {
//       return "hidden" !== document.visibilityState || document.prerendering
//         ? 1 / 0
//         : 0;
//     },
//     $ = function (t) {
//       "hidden" === document.visibilityState &&
//         S > -1 &&
//         ((S = "visibilitychange" === t.type ? t.timeStamp : 0), U());
//     },
//     C = function () {
//       addEventListener("visibilitychange", $, !0),
//         addEventListener("prerenderingchange", $, !0);
//     },
//     U = function () {
//       removeEventListener("visibilitychange", $, !0),
//         removeEventListener("prerenderingchange", $, !0);
//     },
//     T = function () {
//       return (
//         S < 0 &&
//           ((S = A()),
//           C(),
//           v(function () {
//             setTimeout(function () {
//               (S = A()), C();
//             }, 0);
//           })),
//         {
//           get St() {
//             return S;
//           },
//         }
//       );
//     },
//     M = function (t) {
//       document.prerendering
//         ? addEventListener(
//             "prerenderingchange",
//             function () {
//               return t();
//             },
//             !0
//           )
//         : t();
//     },
//     k = [1800, 3e3],
//     I = function (t, i) {
//       (i = i || {}),
//         M(function () {
//           var s,
//             e = T(),
//             n = x("FCP"),
//             r = _("paint", function (t) {
//               t.forEach(function (t) {
//                 "first-contentful-paint" === t.name &&
//                   (r.disconnect(),
//                   t.startTime < e.St &&
//                     ((n.value = Math.max(t.startTime - b(), 0)),
//                     n.entries.push(t),
//                     s(!0)));
//               });
//             });
//           r &&
//             ((s = E(t, n, k, i.At)),
//             v(function (e) {
//               (n = x("FCP")),
//                 (s = E(t, n, k, i.At)),
//                 L(function () {
//                   (n.value = performance.now() - e.timeStamp), s(!0);
//                 });
//             }));
//         });
//     },
//     z = [0.1, 0.25],
//     D = (new Date(), [2500, 4e3]),
//     N = {};
//   class O {
//     w;
//     d;
//     $t = new WeakSet();
//     Ct = [];
//     Ut;
//     constructor(t, i) {
//       (this.w = t), (this.d = i), (this.Ut = this.d.documentElement);
//     }
//     Tt(t) {
//       this.Ct.push(t);
//     }
//     Mt(t) {
//       this.$t.has(t) || (this.ut(t), this.$t.add(t));
//     }
//     kt(t) {
//       t.forEach((t) => this.Mt(t));
//     }
//     j(t) {
//       this.Ct.forEach((i) => i(t));
//     }
//     It(t) {
//       const i = [];
//       let s = t;
//       for (; s?.nodeType === Node.ELEMENT_NODE && "HTML" !== s?.nodeName; ) {
//         let t = s.tagName.toLowerCase(),
//           e = 1,
//           n = s.previousElementSibling;
//         for (; n; )
//           n.tagName.toLowerCase() === t && e++, (n = n.previousElementSibling);
//         e > 1 && (t += `:nth-of-type(${e})`), i.push(t), (s = s.parentElement);
//       }
//       return i.reverse().join(">");
//     }
//   }
//   class H {
//     static round(t, i = 0) {
//       const s = 10 ** i;
//       return Math.round(t * s) / s;
//     }
//   }
//   class j extends O {
//     zt;
//     Dt;
//     Nt;
//     get Ot() {
//       return H.round(this.Ut.scrollTop);
//     }
//     get Ht() {
//       return this.Ot + this.w.innerHeight;
//     }
//     constructor(t, i, s = 0) {
//       super(t, i),
//         (this.Nt = H.round(s)),
//         (this.zt = this.Ut.clientWidth),
//         (this.Dt = this.Ut.clientHeight);
//     }
//     ut() {
//       let t, i;
//       this.jt("static"),
//         this.d.addEventListener(
//           "scroll",
//           () => {
//             const i = this.Nt < this.Ut.scrollTop ? "down" : "up";
//             t = this.Wt(t, () => this.jt(i));
//           },
//           { passive: !0 }
//         ),
//         this.w.addEventListener(
//           "resize",
//           () => {
//             i = this.Wt(i, () => {
//               const t = this.Ut.clientWidth,
//                 i = this.Ut.clientHeight;
//               (this.zt === t && this.Dt === i) ||
//                 ((this.zt = t), (this.Dt = i), this.jt("resize"));
//             });
//           },
//           { passive: !0 }
//         );
//     }
//     Wt(t, i) {
//       return clearTimeout(t), this.w.setTimeout(() => i(), 1e3);
//     }
//     jt(t) {
//       const i = this.Ut.scrollWidth,
//         s = this.Ut.scrollHeight,
//         e = this.w.innerWidth,
//         n = this.w.innerHeight,
//         r = this.Ot,
//         o = Math.min(this.Ht, s),
//         h = Math.abs(this.Nt - r);
//       (h < 100 && ("down" === t || "up" === t)) ||
//         ((this.Nt = r),
//         this.j({
//           arrival_rate: H.round(o / s, 2),
//           attention_top: r,
//           attention_bottom: o,
//           delta: h,
//           direction: t,
//           page_width: i,
//           page_height: s,
//           view_width: e,
//           view_height: n,
//         }));
//     }
//   }
//   class W extends O {
//     ut(t) {
//       t.addEventListener("click", (i) => {
//         if (!(i instanceof MouseEvent)) return;
//         const s = t.getBoundingClientRect(),
//           e = {
//             selector: this.It(t),
//             node_name: t.nodeName.toLowerCase(),
//             client_width: H.round(s.width),
//             client_height: H.round(s.height),
//             page_x: H.round(i.pageX),
//             page_y: H.round(i.pageY),
//             offset_x: H.round(i.clientX - s.x),
//             offset_y: H.round(i.clientY - s.y),
//             view_width: this.Ut.clientWidth,
//             view_height: this.Ut.clientHeight,
//           };
//         this.j(e);
//       });
//     }
//   }
//   class F extends O {
//     ut(t) {
//       const i = new window.AbortController();
//       t.querySelectorAll(
//         'input:not([type="hidden"]):not([type="image"]):not([type="reset"]):not([type="submit"]), select, textarea'
//       ).forEach((s) => {
//         s.addEventListener(
//           "change",
//           () => {
//             const e = {
//               selector: this.It(t),
//               form_name: t.getAttribute("name") ?? "",
//               form_action: t.action,
//               form_field_selector: this.It(s),
//               form_field_node_name: s.nodeName.toLowerCase(),
//               form_field_name: s.name,
//               form_field_type: s.type,
//             };
//             this.j(e), i.abort();
//           },
//           { once: !0, signal: i.signal }
//         );
//       });
//     }
//   }
//   class q extends O {
//     ut(t) {
//       t.addEventListener(
//         "submit",
//         (i) => {
//           const s = {
//               selector: this.It(t),
//               form_name: t.getAttribute("name") ?? "",
//               form_action: t.action,
//             },
//             e = i.submitter;
//           e &&
//             ((s.form_field_selector = this.It(e)),
//             (s.form_field_node_name = e.nodeName.toLowerCase())),
//             this.j(s);
//         },
//         { once: !0 }
//       );
//     }
//   }
//   class B {
//     Ft;
//     qt;
//     Bt = 0;
//     Vt = 0;
//     get Zt() {
//       return this.Ft && this.qt;
//     }
//     constructor(t, i) {
//       (this.Ft = t), (this.qt = i), this.Gt();
//     }
//     measure(t = !1) {
//       if (this.Zt || t) {
//         const t = this.Jt();
//         (this.Bt = this.Kt(t)), (this.Vt = t);
//       }
//       return this.Bt;
//     }
//     Qt(t = this.Ft, i = this.qt) {
//       this.Yt(), (this.Ft = t), (this.qt = i), this.Gt();
//     }
//     Gt() {
//       this.Vt = this.Jt();
//     }
//     Yt() {
//       this.Bt = this.measure();
//     }
//     Kt(t) {
//       return (t || this.Jt()) - this.Vt + this.Bt;
//     }
//     Jt() {
//       return Date.now();
//     }
//   }
//   class V {
//     types = ["page_view", "performance", "action"];
//     m = new EventTarget();
//     Xt;
//     ti;
//     ii;
//     constructor(t, i) {
//       (this.Xt = this.si()),
//         (this.ti = t.href),
//         (this.ii = i),
//         this.ei(this.types[0], (t) => {
//           t.detail && this.ni(this.types[0], t.detail);
//         }),
//         this.ei(this.types[1], (t) => {
//           t.detail && this.ni(this.types[1], t.detail);
//         }),
//         this.ei(this.types[2], (t) => {
//           t.detail && this.ni(this.types[2], t.detail);
//         });
//     }
//     ri(t) {
//       this.oi(this.types[0], t);
//     }
//     hi(t) {
//       this.oi(this.types[1], t);
//     }
//     ai(t) {
//       const i = this.ii.measure("scroll" === t.name);
//       this.oi(this.types[2], Object.assign(t, { engagement_time: i }));
//     }
//     oi(t, i) {
//       this.m.dispatchEvent(
//         new CustomEvent(t, {
//           detail: Object.assign(i, {
//             page_view_id: this.Xt,
//             event_at: new Date(),
//           }),
//         })
//       );
//     }
//     ei(t, i) {
//       this.m.addEventListener(t, i);
//     }
//     ni(t, i) {
//       try {
//         return navigator.sendBeacon(
//           this.ti + t,
//           new Blob([JSON.stringify(i)], { type: "application/json" })
//         );
//       } catch (t) {
//         return !1;
//       }
//     }
//     si() {
//       return globalThis.crypto?.randomUUID
//         ? globalThis.crypto.randomUUID()
//         : "xxxxxxxx-xxxx-4xxx-Nxxx-xxxxxxxxxxxx".replace(/[xN]/g, (t) => {
//             const i = Math.floor(16 * Math.random());
//             return "x" === t ? i.toString(16) : ((3 & i) | 8).toString(16);
//           });
//     }
//   }
//   const Z = Symbol();
//   class G extends u {
//     ht = [];
//     async register() {
//       const t = new B(document.hasFocus(), !document.hidden);
//       window.addEventListener("focus", () => t.Qt(!0)),
//         window.addEventListener("blur", () => t.Qt(!1)),
//         document.addEventListener("visibilitychange", () =>
//           t.Qt(void 0, !document.hidden)
//         ),
//         this.it.register(Z, new V(new URL(this.tt.get(wt)), t));
//     }
//     async p() {
//       const t = this.it.resolve(Z);
//       this.ci(t), this.di(t), this.ui(t);
//     }
//     ci(t) {
//       const i = this.tt.get(ot),
//         s = this.it.resolve(ft),
//         e = this.tt.get(lt);
//       t.ri({
//         dispatcher_id: i.id,
//         experience_id: s.li?.id,
//         version: s.version,
//         page_url: e.href,
//         referrer: document.referrer,
//         user_agent: navigator.userAgent,
//         window_width: window.innerWidth,
//         window_height: window.innerHeight,
//         navigation_type: this.wi()?.type,
//         network_rtt: navigator.connection?.rtt,
//         network_downlink: navigator.connection?.downlink,
//         network_effective_type: navigator.connection?.effectiveType,
//         visited_at: new Date(),
//       });
//     }
//     di(t) {
//       var i;
//       e(() => {
//         let i = this.wi()?.domContentLoadedEventStart;
//         if (!i) {
//           const t = window.performance.timing;
//           if (!t) return;
//           i = t.domContentLoadedEventStart - t.navigationStart;
//         }
//         t.hi({ name: "DomContentLoaded", value: i });
//       }),
//         (i = () => {
//           let i = this.wi()?.loadEventStart;
//           if (!i) {
//             const t = window.performance.timing;
//             if (!t) return;
//             i = t.loadEventStart - t.navigationStart;
//           }
//           t.hi({ name: "Load", value: i });
//         }),
//         new Promise((t) => {
//           const s = i ?? t;
//           "complete" === document.readyState
//             ? s()
//             : window.addEventListener("load", () => s());
//         });
//       const s = (i, s) => {
//         const { id: e, value: n, Rt: r, delta: o, Pt: h } = s;
//         t.hi({
//           name: i,
//           value: n,
//           detail: { id: e, rating: r, delta: o, navigation_type: h },
//         });
//       };
//       I((t) => s(t.name, t)),
//         (function (t, i) {
//           (i = i || {}),
//             M(function () {
//               var s,
//                 e = T(),
//                 n = x("LCP"),
//                 r = function (t) {
//                   var i = t[t.length - 1];
//                   i &&
//                     i.startTime < e.St &&
//                     ((n.value = Math.max(i.startTime - b(), 0)),
//                     (n.entries = [i]),
//                     s());
//                 },
//                 o = _("largest-contentful-paint", r);
//               if (o) {
//                 s = E(t, n, D, i.At);
//                 var h = P(function () {
//                   N[n.id] ||
//                     (r(o.takeRecords()), o.disconnect(), (N[n.id] = !0), s(!0));
//                 });
//                 ["keydown", "click"].forEach(function (t) {
//                   addEventListener(
//                     t,
//                     function () {
//                       return setTimeout(h, 0);
//                     },
//                     !0
//                   );
//                 }),
//                   R(h),
//                   v(function (e) {
//                     (n = x("LCP")),
//                       (s = E(t, n, D, i.At)),
//                       L(function () {
//                         (n.value = performance.now() - e.timeStamp),
//                           (N[n.id] = !0),
//                           s(!0);
//                       });
//                   });
//               }
//             });
//         })((t) => s(t.name, t)),
//         (function (t, i) {
//           (i = i || {}),
//             I(
//               P(function () {
//                 var s,
//                   e = x("CLS", 0),
//                   n = 0,
//                   r = [],
//                   o = function (t) {
//                     t.forEach(function (t) {
//                       if (!t.hadRecentInput) {
//                         var i = r[0],
//                           s = r[r.length - 1];
//                         n &&
//                         t.startTime - s.startTime < 1e3 &&
//                         t.startTime - i.startTime < 5e3
//                           ? ((n += t.value), r.push(t))
//                           : ((n = t.value), (r = [t]));
//                       }
//                     }),
//                       n > e.value && ((e.value = n), (e.entries = r), s());
//                   },
//                   h = _("layout-shift", o);
//                 h &&
//                   ((s = E(t, e, z, i.At)),
//                   R(function () {
//                     o(h.takeRecords()), s(!0);
//                   }),
//                   v(function () {
//                     (n = 0),
//                       (e = x("CLS", 0)),
//                       (s = E(t, e, z, i.At)),
//                       L(function () {
//                         return s();
//                       });
//                   }),
//                   setTimeout(s, 0));
//               })
//             );
//         })((t) => s(t.name, t));
//     }
//     ui(t) {
//       this.pi(t), this.gi(t), this.mi(t), this.fi(t);
//     }
//     pi(t) {
//       e(() => {
//         const i = new j(window, document, document.documentElement.scrollTop);
//         i.Tt((i) => {
//           t.ai({ name: "scroll", ...i });
//         }),
//           i.Mt(document.documentElement);
//       });
//     }
//     gi(t) {
//       const i = new W(window, document);
//       i.Tt((i) => {
//         t.ai({ name: "click", ...i });
//       });
//       const s = this.tt.get(ct),
//         n = new r(
//           'a, button, input[type="button"], input[type="image"], input[type="reset"], input[type="submit"]',
//           `${s}-exp-action`
//         );
//       n.W((t) => i.Mt(t)), e(() => n.observe(document.documentElement));
//     }
//     mi(t) {
//       const i = new F(window, document);
//       i.Tt((i) => {
//         t.ai({ name: "form_start", ...i });
//       });
//       const s = new q(window, document);
//       s.Tt((i) => {
//         t.ai({ name: "form_submit", ...i });
//       });
//       const n = this.tt.get(ct),
//         o = new r("form", `${n}-exp-action`);
//       o.W((t) => {
//         i.Mt(t), s.Mt(t);
//       }),
//         e(() => o.observe(document.documentElement));
//     }
//     fi(t) {
//       window.addEventListener("pagehide", () => t.ai({ name: "unload" }));
//     }
//     wi() {
//       return window.performance.getEntriesByType("navigation")[0];
//     }
//   }
//   class J {
//     vi;
//     yi;
//     elements = new Map();
//     options = { attributes: { state: "data-state" } };
//     constructor(t) {
//       (this.options = { ...this.options, ...t }),
//         (this.vi = new IntersectionObserver((t) => this.bi(t))),
//         (this.yi = new IntersectionObserver((t, i) => this.xi(t, i)));
//     }
//     register(t, i = !1) {
//       this.elements.set(t, t), this.vi.observe(t), i && this.yi.observe(t);
//     }
//     bi(t) {
//       t.forEach((t) => {
//         const i = this.elements.get(t.target);
//         i &&
//           (t.isIntersecting
//             ? "play" === i.getAttribute(this.options.attributes.state) &&
//               i.play()
//             : i.paused
//             ? i.setAttribute(this.options.attributes.state, "pause")
//             : (i.setAttribute(this.options.attributes.state, "play"),
//               i.pause()));
//       });
//     }
//     xi(t, i) {
//       t.forEach(async (t) => {
//         if (!t.isIntersecting) return;
//         const s = this.elements.get(t.target);
//         if (!s) return;
//         const e = { once: !0 };
//         s.addEventListener(
//           "playing",
//           () => {
//             i.unobserve(s),
//               s.addEventListener("loadstart", () => i.observe(s), e);
//           },
//           e
//         );
//         try {
//           (s.muted = !0), await s.play();
//         } catch (t) {
//           throw (
//             ("AbortError" === t.name &&
//               s.addEventListener("canplay", () => s.play(), e),
//             "NotAllowedError" === t.name &&
//               (s.controls ||
//                 ((s.controls = !0),
//                 s.addEventListener("play", () => (s.controls = !1), e))),
//             t)
//           );
//         }
//       });
//     }
//   }
//   class K extends a {
//     sources = [];
//     poster;
//     placeholder;
//     attributes = { poster: "data-poster", placeholder: "poster" };
//     constructor(t, i) {
//       super(t, i),
//         (this.attributes = { ...this.attributes, ...i }),
//         (this.poster = this.element.getAttribute(this.attributes.poster) ?? "");
//       const s = this.element.getAttribute(this.attributes.placeholder);
//       (this.placeholder =
//         s ||
//         "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4K"),
//         (this.sources = Array.from(
//           this.element.querySelectorAll(":scope > source")
//         ));
//     }
//     J() {
//       if (
//         (this.element.readyState > this.element.HAVE_METADATA &&
//           !this.poster &&
//           this.element.dispatchEvent(new Event("load")),
//         this.element.readyState < this.element.HAVE_METADATA)
//       ) {
//         if (!this.poster) {
//           let t;
//           this.element.addEventListener(
//             "loadedmetadata",
//             () => {
//               this.element.dispatchEvent(new Event("load"));
//             },
//             { once: !0, signal: this.B?.signal }
//           ),
//             this.sources.forEach((i) => {
//               i.addEventListener(
//                 "error",
//                 () => {
//                   t && clearTimeout(t),
//                     (t = setTimeout(
//                       () => this.element.dispatchEvent(new Event("error")),
//                       3e3
//                     ));
//                 },
//                 { once: !0, signal: this.B?.signal }
//               );
//             });
//         }
//         this.element.preload = "metadata";
//       }
//       if (this.poster) {
//         const t = new Image();
//         t.addEventListener(
//           "load",
//           () => {
//             t.remove(), this.element.dispatchEvent(new Event("load"));
//           },
//           { once: !0 }
//         ),
//           this.element.addEventListener(
//             "poster-cancel",
//             () => {
//               (t.src = ""), t.remove();
//             },
//             { once: !0 }
//           ),
//           t.addEventListener(
//             "error",
//             () => {
//               t.remove(), this.element.dispatchEvent(new Event("error"));
//             },
//             { once: !0 }
//           ),
//           (t.src = this.poster),
//           (this.element.poster = this.poster);
//       }
//     }
//     K() {
//       this.element.poster && (this.element.poster = this.placeholder),
//         this.element.dispatchEvent(new Event("poster-cancel"));
//     }
//   }
//   class Q extends l {
//     _i;
//     Ei = { src: "data-original-src", poster: "data-original-poster" };
//     xt = { src: "data-src", poster: "data-poster" };
//     constructor(t, i = {}, s = []) {
//       super(t, i), (this._i = s);
//     }
//     dt(t) {
//       return (
//         "optimize-video" === t.getAttribute("data-landinghub") ||
//         t.readyState >= t.HAVE_FUTURE_DATA
//       );
//     }
//     ut(t) {
//       const i = this.st(t);
//       this._t(t, i),
//         t.hasAttribute(this.ct.width) && t.hasAttribute(this.ct.height)
//           ? (t.setAttribute("preload", "none"),
//             t.setAttribute("data-landinghub", "optimize-video"))
//           : t.setAttribute("preload", "metadata");
//       let s = t.getAttribute(this.Ei.poster);
//       if (
//         (!s && i?.thb && ((s = i.thb), t.setAttribute(this.Ei.poster, i.thb)),
//         s)
//       ) {
//         if (t.hasAttribute("autoplay")) {
//           t.removeAttribute("autoplay");
//           const i = JSON.stringify({ autoplay: !0 });
//           t.setAttribute("data-landinghub-behavior", i);
//         }
//         t.setAttribute("data-landinghub", "optimize-video");
//       }
//       this.replace(t, { src: "src", poster: "data-landinghub-poster" });
//     }
//     st(t) {
//       const i = t.querySelectorAll(":scope > source");
//       if (!t.hasAttribute("src"))
//         if (1 === i.length) {
//           const s = i[0],
//             e = s.getAttribute("src");
//           e && t.setAttribute("src", e);
//           const n = s.getAttribute(this.xt.src);
//           n && t.setAttribute(this.xt.src, n), s.remove();
//         } else {
//           const s = new Set();
//           if (
//             (i.forEach((t) => {
//               this.vt(t, "src", this.Ei.src, !0),
//                 this.vt(t, this.xt.src, this.Ei.src);
//               const i = t.getAttribute(this.Ei.src);
//               i && s.add(i);
//             }),
//             1 === s.size)
//           ) {
//             const e = s.values().next().value;
//             t.setAttribute("src", e),
//               t.querySelector(`source[${this.xt.src}]`) &&
//                 t.setAttribute(this.xt.src, e),
//               i.forEach((t) => {
//                 t.remove();
//               });
//           }
//         }
//       this.vt(t, "src", this.Ei.src, !0),
//         this.vt(t, this.xt.src, this.Ei.src),
//         t.poster &&
//           !t.poster.startsWith("data:image") &&
//           (this.vt(t, "poster", this.Ei.poster),
//           t.setAttribute(
//             "poster",
//             "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4K"
//           ),
//           t.removeAttribute("poster")),
//         this.vt(t, this.xt.poster, this.Ei.poster);
//       const s = t.getAttribute(this.Ei.src);
//       if (s && this.detail[s]) return this.detail[s];
//       for (const t of i) {
//         const i = t.getAttribute(this.Ei.src);
//         if (i && this.detail[i]) return this.detail[i];
//       }
//     }
//     _t(t, i) {
//       const s = Number(
//           t.getAttribute("width")?.replace(/(\d+)(px)$/, "$1") ?? "0"
//         ),
//         e = Number(
//           t.getAttribute("height")?.replace(/(\d+)(px)$/, "$1") ?? "0"
//         ),
//         n = i?.width,
//         r = i?.height,
//         o = n && r;
//       let h = !1;
//       s && e
//         ? (t.setAttribute(this.ct.width, s.toString()),
//           t.setAttribute(this.ct.height, e.toString()),
//           (h = this.yt(t, s, e)))
//         : o &&
//           (t.setAttribute(this.ct.width, n.toString()),
//           t.setAttribute(this.ct.height, r.toString()),
//           (h = this.yt(t, n, r)),
//           0 === s && 0 === e && ((t.width = n), (t.height = r))),
//         h &&
//           t.addEventListener("loadedmetadata", () => {
//             t.videoWidth &&
//               t.videoHeight &&
//               (t.style.aspectRatio = `${t.videoWidth}/${t.videoHeight}`);
//           });
//     }
//     replace(t, i = { src: "src", poster: "poster" }) {
//       const s = t.getAttribute(this.Ei.poster);
//       if (s) {
//         const e = this.lt(s);
//         t.setAttribute(i.poster, e),
//           t.hasAttribute(this.xt.poster) && t.setAttribute(this.xt.poster, e);
//       }
//       const e = t.getAttribute(this.Ei.src);
//       if (e) {
//         const s = new URL(this.lt(e), this.service.location.href);
//         this._i.length &&
//           this.service.wt(e) &&
//           s.searchParams.set("landinghub-codec", this._i.join(",")),
//           t.setAttribute(i.src, s.href),
//           t.hasAttribute(this.xt.src) && t.setAttribute(this.xt.src, s.href);
//       } else {
//         t.querySelectorAll(":scope > source").forEach((t) => {
//           const s = t.getAttribute(this.Ei.src);
//           if (s) {
//             const e = this.lt(s);
//             t.setAttribute(i.src, e),
//               t.hasAttribute(this.xt.src) && t.setAttribute(this.xt.src, e);
//           }
//         }),
//           t.load();
//       }
//     }
//   }
//   class Y extends u {
//     ht = [];
//     async register() {
//       const t = this.it.resolve(pt),
//         i = this.tt.get(dt).products;
//       this.it.register("P", new Q(t, i, h.q())),
//         this.it.register("C", new J()),
//         this.it.register(
//           "D",
//           new r(
//             `video:not([${this.tt.get(ct)}-dispatcher-disable])`,
//             `${this.tt.get(ct)}-detected`
//           )
//         );
//     }
//     async p() {
//       const t = this.it.resolve("D"),
//         i = this.it.resolve("P"),
//         s = this.it.resolve(gt),
//         n = this.it.resolve("C");
//       t.W((t) => {
//         if (
//           (t.hasAttribute(`${this.tt.get(ct)}-detected`) || i.p(t),
//           "optimize-video" === t.getAttribute(this.tt.get(ct)))
//         ) {
//           const i = new K(t, {
//             poster: `${this.tt.get(ct)}-poster`,
//             state: `${this.tt.get(ct)}-status`,
//           });
//           s.register(i);
//         }
//         const e = JSON.parse(
//           t.getAttribute(`${this.tt.get(ct)}-behavior`) ?? "{}"
//         );
//         n.register(t, e.autoplay);
//       }),
//         "loading" === document.readyState &&
//           t.observe(document.documentElement),
//         e(() => {
//           t.disconnect(), t.observe(document.body);
//         });
//     }
//   }
//   class X {
//     static log(t, ...i) {
//       this.Li("log", t, ...i);
//     }
//     static info(t, ...i) {
//       this.Li("info", t, ...i);
//     }
//     static warn(t, ...i) {
//       this.Li("warn", t, ...i);
//     }
//     static error(t, ...i) {
//       this.Li("error", t, ...i);
//     }
//     static Li(t, i, ...s) {
//       console[t](
//         "%cLandingHub",
//         "color:#FFF;background-color:#E83828;padding:2px;border-radius: 2px",
//         i,
//         ...s
//       );
//     }
//   }
//   class tt {
//     location;
//     constructor(t) {
//       this.location = t;
//     }
//     value(t, i) {
//       switch (t) {
//         case "PATH":
//           return decodeURI(this.location.pathname);
//         case "QUERY_KEY":
//           return [...this.location.searchParams.keys()];
//         case "QUERY_VALUE":
//           if (!i) throw new Error("key is required");
//           return this.location.searchParams.get(i);
//         default:
//           throw new Error(`Unknown field type: ${t}.`);
//       }
//     }
//   }
//   class it {
//     field;
//     constructor(t) {
//       this.field = t;
//     }
//     entries(t) {
//       return !!t.length && t.every((t) => this.Ri(t));
//     }
//     Ri(t) {
//       const i = this.field.value(t.field.type, t.field.queryKey);
//       return (
//         !!i && t.patterns.some((s) => this.evaluate(t.operator, i, s, t.option))
//       );
//     }
//     evaluate(t, i, s, e) {
//       if (Array.isArray(i) && "contain" === t) return this.contain(i, s);
//       if ("string" == typeof i)
//         switch (t) {
//           case "equal":
//             return this.Pi(i, s);
//           case "contain":
//             return this.contain(i, s);
//           case "startWith":
//             return this.Si(i, s);
//           case "endWith":
//             return this.Ai(i, s);
//           case "match":
//             return this.match(i, s, e?.caseSensitive);
//         }
//       throw new Error(`Operator: ${t} is not supported typeof ${typeof i}`);
//     }
//     Pi(t, i) {
//       return t === i;
//     }
//     contain(t, i) {
//       return t.includes(i);
//     }
//     Si(t, i) {
//       return t.startsWith(i);
//     }
//     Ai(t, i) {
//       return t.endsWith(i);
//     }
//     match(t, i, s) {
//       return new RegExp(i, s ? void 0 : "i").test(t);
//     }
//   }
//   class st {
//     url;
//     constructor(t, i) {
//       (t =
//         "string" == typeof t
//           ? encodeURI(t.trim())
//           : new URL(encodeURI(t.href))),
//         "string" == typeof i
//           ? (i = encodeURI(i.trim()))
//           : i && (i = new URL(encodeURI(i.href))),
//         (this.url = new URL(t, i));
//     }
//     get href() {
//       return decodeURI(this.url.href);
//     }
//     get pathname() {
//       return decodeURI(this.url.pathname);
//     }
//     get search() {
//       return decodeURI(this.url.search);
//     }
//     get host() {
//       return this.url.host;
//     }
//     get searchParams() {
//       return new URLSearchParams(this.url.searchParams);
//     }
//   }
//   class et {
//     domain;
//     $i;
//     location;
//     loading = "eager";
//     allowReferrers = new Set();
//     allowDomains = new Set();
//     constructor(t, i) {
//       (this.$i = new URL(t.baseUrl)),
//         (this.location = i),
//         (this.domain = this.$i.hostname.split(".").splice(-2).join(".")),
//         t.lazyload?.enable &&
//           (this.loading = t.lazyload.native ? "native" : "original"),
//         t.allowReferrers && (this.allowReferrers = new Set(t.allowReferrers)),
//         t.allowDomains && (this.allowDomains = new Set(t.allowDomains));
//     }
//     Ci() {
//       return this.allowReferrers.has(this.location.hostname);
//     }
//     wt(t) {
//       const i = new URL(t, this.location);
//       return (
//         i.hostname.endsWith(this.location.hostname) ||
//         this.allowDomains.has(i.hostname)
//       );
//     }
//     gt(t) {
//       return new URL(t, this.location).hostname.endsWith(this.domain);
//     }
//     ft(t) {
//       const i = new st(t, this.location);
//       return this.$i.href + encodeURIComponent(i.href);
//     }
//   }
//   class nt {
//     enable = !1;
//     version = "inactive";
//     Ui;
//     Ti;
//     get li() {
//       if (this.Ti) return { id: this.Ti?.id, name: this.Ti?.name };
//     }
//     constructor(t, i) {
//       (this.Ui = i),
//         (this.Ti = t.find((t) => this.Ui.entries(t.expressions))),
//         this.Ti && ((this.enable = !0), (this.version = this.Mi(0.5)));
//     }
//     Mi(t) {
//       let i = 0;
//       return (
//         (i = globalThis.crypto?.getRandomValues
//           ? globalThis.crypto.getRandomValues(new Uint32Array(1))[0] /
//             4294967295
//           : Math.random()),
//         i < t ? "active" : "inactive"
//       );
//     }
//   }
//   class rt {
//     Ui;
//     constructor(t) {
//       this.Ui = t;
//     }
//     ki(t) {
//       return (
//         !t.deny.some((t) => this.Ui.entries(t.expressions)) &&
//         t.allow.some((t) => this.Ui.entries(t.expressions))
//       );
//     }
//   }
//   const ot = Symbol(),
//     ht = Symbol(),
//     at = Symbol(),
//     ct = Symbol(),
//     dt = Symbol(),
//     ut = Symbol(),
//     lt = Symbol(),
//     wt = Symbol(),
//     pt = Symbol(),
//     gt = Symbol(),
//     mt = Symbol(),
//     ft = Symbol();
//   let vt = {
//     id: "05cf56da-ca6f-4967-bee8-3f9c6443ef81",
//     baseUrl: "https://fll-idr-j1su9lka.landinghub.site/.landinghub/",
//     allowReferrers: ["lp.chocozap.jp"],
//     allowDomains: [],
//     allowQuerystringKeys: [],
//     lazyload: { enable: true, native: false },
//   };
//   const yt = {
//       allow: [
//         {
//           name: "valid-for-all-pages",
//           expressions: [
//             { operator: "startWith", field: { type: "PATH" }, patterns: ["/"] },
//           ],
//         },
//       ],
//       deny: [
//         {
//           name: "リフレッシュ02",
//           expressions: [
//             {
//               operator: "contain",
//               field: { type: "PATH" },
//               patterns: ["/main-01/refresh02/"],
//             },
//           ],
//         },
//         {
//           name: "https://lp.chocozap.jp/main-01/cta1/",
//           expressions: [
//             {
//               operator: "contain",
//               field: { type: "PATH" },
//               patterns: ["main-01/cta1/"],
//             },
//           ],
//         },
//         {
//           name: "秋LP",
//           expressions: [
//             {
//               operator: "contain",
//               field: { type: "PATH" },
//               patterns: ["/main-01-fv/autumn/"],
//             },
//           ],
//         },
//         {
//           name: "https://lp.chocozap.jp/senior-01/",
//           expressions: [
//             {
//               operator: "contain",
//               field: { type: "PATH" },
//               patterns: ["senior-01/"],
//             },
//           ],
//         },
//         {
//           name: "使い放題LP（＝BA03）",
//           expressions: [
//             {
//               operator: "contain",
//               field: { type: "PATH" },
//               patterns: ["/main-01-fv/tukaihoudai/"],
//             },
//           ],
//         },
//         {
//           name: "https://lp.chocozap.jp/main-01/cpbanner/",
//           expressions: [
//             {
//               operator: "contain",
//               field: { type: "PATH" },
//               patterns: ["main-01/cpbanner/"],
//             },
//           ],
//         },
//         {
//           name: "https://lp.chocozap.jp/diet-04/cpbanner/",
//           expressions: [
//             {
//               operator: "contain",
//               field: { type: "PATH" },
//               patterns: ["diet-04/cpbanner/"],
//             },
//           ],
//         },
//         {
//           name: "10月CP用猫LP",
//           expressions: [
//             {
//               operator: "contain",
//               field: { type: "PATH" },
//               patterns: ["/main-01-fv/neko02/"],
//             },
//           ],
//         },
//         {
//           name: "https://lp.chocozap.jp/main-01/refresh02/",
//           expressions: [
//             {
//               operator: "contain",
//               field: { type: "PATH" },
//               patterns: ["main-01/refresh02/"],
//             },
//           ],
//         },
//         {
//           name: "https://lp.chocozap.jp/diet-04/cta2/",
//           expressions: [
//             {
//               operator: "contain",
//               field: { type: "PATH" },
//               patterns: ["diet-04/cta2/"],
//             },
//           ],
//         },
//         {
//           name: "https://lp.chocozap.jp/diet-04/cta1/",
//           expressions: [
//             {
//               operator: "contain",
//               field: { type: "PATH" },
//               patterns: ["diet-04/cta1/"],
//             },
//           ],
//         },
//         {
//           name: "https://lp.chocozap.jp/senior-04/02/cta1/",
//           expressions: [
//             {
//               operator: "contain",
//               field: { type: "PATH" },
//               patterns: ["senior-04/02/cta1/"],
//             },
//           ],
//         },
//         {
//           name: "https://lp.chocozap.jp/main-01/cta2/",
//           expressions: [
//             {
//               operator: "contain",
//               field: { type: "PATH" },
//               patterns: ["main-01/cta2/"],
//             },
//           ],
//         },
//         {
//           name: "BA03",
//           expressions: [
//             {
//               operator: "contain",
//               field: { type: "PATH" },
//               patterns: ["/main-01-ofv/beforeafter03/"],
//             },
//           ],
//         },
//         {
//           name: "https://lp.chocozap.jp/senior-04/02/cta2/",
//           expressions: [
//             {
//               operator: "contain",
//               field: { type: "PATH" },
//               patterns: ["senior-04/02/cta2/"],
//             },
//           ],
//         },
//       ],
//     },
//     bt = [],
//     xt = new URL("https://airport.landinghub.cloud/dispatcher/manifest.json"),
//     _t = "data-landinghub",
//     Et = document.querySelector(`[${_t}="dispatcher-tag"]`);
//   if (Et) {
//     const t = Et.getAttribute(`${_t}-lazyload`);
//     vt = { ...vt, lazyload: { enable: "eager" !== t, native: "native" === t } };
//   }
//   xt.searchParams.set("id", vt.id),
//     xt.searchParams.set("location", window.location.href),
//     vt.allowQuerystringKeys.length &&
//       xt.searchParams.set("wl", vt.allowQuerystringKeys.join(","));
//   const Lt = new (class {
//       tt;
//       constructor(t) {
//         this.tt = t;
//       }
//       get(t, i) {
//         return Object.getOwnPropertyDescriptor(this.tt, t)?.value ?? i;
//       }
//     })({
//       [ot]: vt,
//       [ht]: yt,
//       [at]: bt,
//       [ct]: _t,
//       [dt]: { performance: {}, products: {} },
//       [ut]: xt,
//       [lt]: new URL(window.location.href),
//       [wt]: new URL("https://collect.landinghub.cloud/"),
//     }),
//     Rt = new (class extends u {
//       ht = [g, m, p, Y];
//       async register() {
//         this.it.register(gt, new s({ P: 2 })),
//           this.it.register(pt, new et(this.tt.get(ot), this.tt.get(lt)));
//         const t = new it(new tt(this.tt.get(lt)));
//         this.it.register(mt, new rt(t)),
//           this.it.register(ft, new nt(this.tt.get(at), t));
//       }
//       async st() {
//         if (!this.it.resolve(mt).ki(this.tt.get(ht)))
//           return (
//             this.dispatchEvent("terminate"),
//             void X.info("Dispatcher disable by trigger.")
//           );
//         const t = this.it.resolve(ft);
//         if (t.enable) {
//           if (
//             (new G(this.tt, this.it).nt(),
//             X.info(`Experience tracking is now available. (${t.li?.name})`),
//             "inactive" === t.version)
//           )
//             return (
//               this.dispatchEvent("terminate"),
//               void X.info(
//                 "Dispatcher disable by inactive version of experience."
//               )
//             );
//           X.info("Dispatcher enable by active version of experience.");
//         } else X.info("Dispatcher enable by trigger.");
//         const i = new Promise((t) => {
//             setTimeout(t, 500);
//           }),
//           s = fetch(this.tt.get(ut))
//             .then((t) => {
//               if (!t.ok) throw new Error();
//               return t.json();
//             })
//             .then((t) => {
//               const i = this.tt.get(dt);
//               Object.keys(i).forEach((s) => Object.assign(i[s], t[s]));
//             })
//             .catch(() => X.info("failed to get manifest."));
//         await Promise.race([i, s]);
//       }
//       async p() {
//         const t = this.it.resolve(gt);
//         window.addEventListener("load", () => {
//           t.A();
//         });
//       }
//     })(Lt);
//   Rt.nt();
// })();
