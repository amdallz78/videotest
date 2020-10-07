!(function (e) {
  var t = {};
  function i(n) {
    if (t[n]) return t[n].exports;
    var r = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
  }
  (i.m = e),
    (i.c = t),
    (i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          i.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = ""),
    i((i.s = 16));
})([
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.COMPANY_URL = t.REINIT_JITTER = t.WRAPED_PLAYER_CLASS = t.PLAYER_CLASS = t.MEDIA_QUERYS = t.CLASSES = t.ASPECT_RATIO = void 0),
      (t.ASPECT_RATIO = 0.5625),
      (t.CLASSES = {
        video: "v",
        container: "vc",
        adContainer: "ac",
        controls: "c",
        skip: "s",
        playYoutube: "youP",
        progress: "p",
      }),
      (t.MEDIA_QUERYS = [
        "screen and (min-width:340px)",
        "screen and (min-width:1280px)",
        "screen and (min-width:1920px)",
      ]),
      (t.PLAYER_CLASS = "df-player"),
      (t.WRAPED_PLAYER_CLASS = "wraped-by-df"),
      (t.REINIT_JITTER = 1e3),
      (t.COMPANY_URL =
        "https://rtb.adstest.tbhost.org/v/?guid=videoGuid&prid=5&pid=10_15_0");
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.isOk = void 0);
    const n = i(5);
    t.isOk = () => n.checkDoman("ok.ru");
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ReinitError = void 0);
    class n extends Error {
      constructor(e) {
        super(e), (this.name = "ReinitError");
      }
      toString() {
        return `[object ${this.name}]`;
      }
    }
    t.ReinitError = n;
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getPosition = void 0),
      (t.getPosition = (e) => {
        let t = { width: 0, height: 0, x: 0, y: 0 };
        if (void 0 !== e) {
          const i = e.parentElement || e;
          t =
            0 === e.getBoundingClientRect().width
              ? i.getBoundingClientRect()
              : e.getBoundingClientRect();
        }
        return {
          width: t.width,
          height: t.height,
          x: t.x + window.pageXOffset,
          y: t.y + window.pageYOffset,
        };
      });
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.pauseEvent = t.playEvent = void 0),
      (t.playEvent = new CustomEvent("dfPlay", {
        bubbles: !0,
        detail: "ad can be played",
      })),
      (t.pauseEvent = new CustomEvent("dfPause", {
        bubbles: !0,
        detail: "ad must be paused",
      }));
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.checkDoman = void 0),
      (t.checkDoman = (e) => document.domain.includes(e));
  },
  function (e, t, i) {
    "use strict";
    var n =
      (this && this.__awaiter) ||
      function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, s) {
          function o(e) {
            try {
              c(n.next(e));
            } catch (t) {
              s(t);
            }
          }
          function a(e) {
            try {
              c(n.throw(e));
            } catch (t) {
              s(t);
            }
          }
          function c(e) {
            var t;
            e.done
              ? r(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(o, a);
          }
          c((n = n.apply(e, t || [])).next());
        });
      };
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.stopTargetVideoAction = void 0);
    const r = i(10);
    t.stopTargetVideoAction = (e, t) =>
      n(void 0, void 0, void 0, function* () {
        switch (t) {
          case "youtube":
            r.you_pause(e);
            break;
          case "youtube":
            e.pause();
            break;
          default:
            try {
              r.you_pause(e);
            } catch (i) {}
            try {
              e.pause();
            } catch (i) {}
        }
      });
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.genID = void 0),
      (t.genID = function () {
        return "_" + Math.random().toString(36).substr(2, 9);
      });
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.isVk = void 0);
    const n = i(5);
    t.isVk = () => n.checkDoman("vk.com");
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.TerminateError = void 0);
    class n extends Error {
      constructor(e, t) {
        super(e), (this.name = "TerminateError"), t();
      }
      toString() {
        return `[object ${this.name}]`;
      }
    }
    t.TerminateError = n;
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.you_play = t.you_pause = void 0);
    const n = (e, t) => {
      var i;
      null === (i = e.contentWindow) ||
        void 0 === i ||
        i.postMessage(
          JSON.stringify({ event: "command", func: t, args: [] }),
          "*"
        );
    };
    (t.you_pause = (e) => {
      n(e, "pauseVideo");
    }),
      (t.you_play = (e) => {
        n(e, "playVideo");
      });
  },
  function (e, t, i) {
    "use strict";
    var n =
      (this && this.__awaiter) ||
      function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, s) {
          function o(e) {
            try {
              c(n.next(e));
            } catch (t) {
              s(t);
            }
          }
          function a(e) {
            try {
              c(n.throw(e));
            } catch (t) {
              s(t);
            }
          }
          function c(e) {
            var t;
            e.done
              ? r(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(o, a);
          }
          c((n = n.apply(e, t || [])).next());
        });
      };
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.startTargetVideoAction = void 0);
    const r = i(10);
    t.startTargetVideoAction = (e, t) =>
      n(void 0, void 0, void 0, function* () {
        "youtube" === t
          ? r.you_play(e)
          : (yield e.play(), e.paused && e.click());
      });
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.isVkBox = void 0);
    const n = i(8);
    t.isVkBox = () => {
      var e;
      if (!n.isVk()) return !1;
      return (
        (null === (e = document.querySelector("#mv_player_box")) || void 0 === e
          ? void 0
          : e.hasChildNodes()) || !1
      );
    };
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.isOkFeedVideo = void 0);
    const n = i(1);
    t.isOkFeedVideo = (e) => {
      if (!n.isOk()) return !1;
      return (
        "absolute" !==
        window.getComputedStyle(e, null).getPropertyValue("position")
      );
    };
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.createButton = void 0),
      (t.createButton = (e, t) => {
        const i = document.createElement("button");
        return i.classList.add(t[e]), i;
      });
  },
  function (e, t) {
    var i;
    i = (function () {
      return this;
    })();
    try {
      i = i || new Function("return this")();
    } catch (n) {
      "object" == typeof window && (i = window);
    }
    e.exports = i;
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    i(17).insertPlayers();
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.insertPlayers = void 0);
    const n = i(18),
      r = i(19),
      s = i(20),
      o = i(3),
      a = i(21),
      c = i(23),
      u = i(24),
      l = i(25),
      d = i(26),
      h = i(27),
      p = i(64),
      f = i(66),
      v = i(67),
      m = i(0);
    t.insertPlayers = () => {
      let e = window.location.href;
      const t = [],
        i = () => {
          r.youtubeFrames.forEach((e) => {
            if (d.isWraped(e)) return;
            const t = o.getPosition(e);
            e.src = n.configYoutubeSrc(e);
            const i = a.createContainer();
            c.wrap(e, "youtube"),
              new h.Player(m.COMPANY_URL, i, t, e, "youtube");
          }),
            ((e) => {
              s.customPlayer().forEach((t) => {
                if (
                  d.isWraped(t) ||
                  u.isOutstream(t) ||
                  l.notDisplayDomains() ||
                  p.isZeroSize(t) ||
                  f.hasBlacklistClasses(t) ||
                  v.isGif(t)
                )
                  return;
                c.wrap(t, "other");
                const i = o.getPosition(t),
                  n = a.createContainer(),
                  r = new h.Player(m.COMPANY_URL, n, i, t, "other");
                e.push(r);
              });
            })(t);
        },
        g = () => {
          e !== window.location.href &&
            (t.forEach((e) => e.removeFromPage()), (t.length = 0), i()),
            (e = window.location.href);
        };
      window.addEventListener("click", g, !0),
        window.addEventListener("popstate", g, !0),
        document.addEventListener("load", g, !0),
        "loading" == document.readyState
          ? document.addEventListener("DOMContentLoaded", i)
          : i(),
        setTimeout(() => {
          i();
        }, 350);
    };
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.configYoutubeSrc = void 0);
    const n = /origin=[a-z1-9\/:.]*/gi;
    t.configYoutubeSrc = (e) => {
      if (!e.src.includes("?")) return e.src + "?origin=*&enablejsapi=1";
      const t = e.src.includes("origin")
        ? e.src.replace(n, "origin=*")
        : e.src + "&origin=*";
      return t.includes("enablejsapi") ? t : t + "&enablejsapi=1";
    };
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.youtubeFrames = void 0);
    t.youtubeFrames = [...document.querySelectorAll("iframe")].filter((e) =>
      e.src.includes("youtu")
    );
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.customPlayer = void 0),
      (t.customPlayer = () => [...document.getElementsByTagName("video")]);
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.createContainer = void 0);
    const n = i(0),
      r = i(22);
    t.createContainer = () => {
      const e = document.createElement("div");
      return (
        e.setAttribute("class", n.PLAYER_CLASS),
        r.isYoutube() && (e.style.zIndex = "1000"),
        e
      );
    };
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.isYoutube = void 0);
    const n = i(5);
    t.isYoutube = () => n.checkDoman("youtube.com");
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.wrap = void 0);
    const n = i(7),
      r = i(0);
    t.wrap = (e, t) => {
      const i = e.id || n.genID();
      e.classList.add(r.WRAPED_PLAYER_CLASS),
        "youtube" === t && e.setAttribute("id", i);
    };
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.isOutstream = void 0);
    const n = i(1),
      r = i(8);
    t.isOutstream = (e) => {
      if (n.isOk() || r.isVk()) return !1;
      const t = e.getAttribute("muted") && e.getAttribute("autoplay"),
        i = e.muted && e.autoplay;
      return t || i;
    };
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.notDisplayDomains = void 0);
    const n = ["afisha.yandex.ru"];
    t.notDisplayDomains = () => {
      const e = document.domain;
      return n.some((t) => t === e);
    };
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.isWraped = void 0);
    const n = i(0);
    t.isWraped = (e) => {
      var t, i;
      return (
        e.classList.contains(n.WRAPED_PLAYER_CLASS) ||
        (null ===
          (i =
            null === (t = e.parentElement) || void 0 === t
              ? void 0
              : t.parentElement) || void 0 === i
          ? void 0
          : i.classList.contains(n.PLAYER_CLASS))
      );
    };
  },
  function (e, t, i) {
    "use strict";
    var n =
      (this && this.__awaiter) ||
      function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, s) {
          function o(e) {
            try {
              c(n.next(e));
            } catch (t) {
              s(t);
            }
          }
          function a(e) {
            try {
              c(n.throw(e));
            } catch (t) {
              s(t);
            }
          }
          function c(e) {
            var t;
            e.done
              ? r(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(o, a);
          }
          c((n = n.apply(e, t || [])).next());
        });
      };
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.Player = void 0);
    const r = i(0),
      s = i(28),
      o = i(30),
      a = i(32),
      c = i(37),
      u = i(54),
      l = i(9),
      d = i(2),
      h = i(55),
      p = i(60),
      f = i(7),
      v = i(61),
      m = i(63),
      g = i(11),
      y = i(6);
    t.Player = class {
      constructor(e, t, i, n, o) {
        (this.currentRetray = 0),
          (this.logger = new s.Logger(this)),
          (this.retrays = 0),
          (this.aspect_ratio = r.ASPECT_RATIO),
          (this.custom_classes = r.CLASSES),
          (this.randomizer = f.genID()),
          (this.media_querys = r.MEDIA_QUERYS),
          (this.unsubscribeVPAID = []),
          (this.playAd = () => {}),
          (this.pauseAd = () => {}),
          (this.autoPlayFn = () => {}),
          (this.initVpaidCreative = []),
          (this.httpRegExp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g),
          (this.url = e),
          (this.frame = n),
          (this.type = o),
          (this.position = i),
          (this.custom_classes = Object.assign({}, this.custom_classes));
        for (let r in this.custom_classes)
          this.custom_classes[r] = this.custom_classes[r] + this.randomizer;
        (this.container = t),
          (this.DOM = new c.DOMClass(
            this.container,
            this.custom_classes,
            this.aspect_ratio,
            this.randomizer,
            this.frame,
            this.position,
            this.type
          ));
        const u = p.getWitdhAndHeight(this.container, this.aspect_ratio);
        (this.VAST = new a.VASTClass(this.url, this.logger, u)), this.init();
      }
      init() {
        return n(this, void 0, void 0, function* () {
          try {
            yield this.VAST.fetch(),
              this.DOM.createPlayer(),
              this.DOM.createIcons(this.VAST.skippable),
              this.VAST.containVIPAID && this.DOM.hideIcons(),
              this.DOM.addActionsToPlayer();
            const e = u.configCreativesForVideo(
              this.VAST.mediaFiles,
              this.media_querys
            );
            this.DOM.addVideoSource(e),
              this.VAST.bindActions(
                this.DOM.video,
                this.DOM.buttonSkip,
                this.frame,
                this.removeFromPage.bind(this),
                this.DOM.updateSkipButton,
                this.DOM.progressBar,
                this.type,
                this.container
              );
          } catch (e) {
            this.logger.log(new d.ReinitError(e));
          }
          return (
            "youtube" === this.type && v.sendMessage(this.frame), this.create()
          );
        });
      }
      createEventListeners() {
        let e = !1;
        (this.playAd = () => {
          this.DOM.video.src.match(new RegExp(this.httpRegExp))
            ? (y.stopTargetVideoAction(this.frame, this.type),
              this.DOM.video
                .play()
                .then(() => {
                  this.DOM.displayAd(),
                    this.VAST.tracker.trackImpression(),
                    this.VAST.tracker.setPaused(!1);
                })
                .catch((e) => {
                  this.logger.log(new d.ReinitError(e));
                }))
            : (!0 !== e && g.startTargetVideoAction(this.frame, this.type),
              (e = !0));
        }),
          (this.pauseAd = () => {
            this.DOM.video.pause(), this.VAST.tracker.setPaused(!0);
          }),
          this.container.addEventListener("dfPlay", this.playAd),
          this.container.addEventListener("dfPause", this.pauseAd),
          this.container.addEventListener(
            "click",
            (e) => {
              this.playAd(),
                this.DOM.hidePlayer(),
                (this.unsubscribeVPAID = this.initVpaidCreative.map((e) =>
                  n(this, void 0, void 0, function* () {
                    if (e)
                      try {
                        const t = yield e;
                        if (t) {
                          return t();
                        }
                        return null;
                      } catch (t) {
                        this.logger.log(new d.ReinitError(t));
                      }
                    return null;
                  })
                )),
                e.stopPropagation();
            },
            { once: !0, capture: !0 }
          ),
          "youtube" === this.type && m.startListening(this, this.container);
      }
      create() {
        if (
          ((this.autoPlayFn = this.DOM.appendToRealDOM()),
          this.VAST.containVIPAID)
        ) {
          const t = this.DOM.adContainerInit();
          try {
            this.initVpaidCreative = o.loadVPAID(
              this.container,
              this.DOM.video,
              t,
              this.VAST.mediaFiles,
              h.initVPAID,
              this.randomizer,
              this.VAST.tracker,
              this.VAST.creatives.adParameters,
              this.aspect_ratio,
              this.logger,
              this.DOM.setVideoHeight,
              this.DOM
            );
          } catch (e) {
            return this.logger.log(new d.ReinitError(e));
          }
        } else this.DOM.setVideoHeight(this.DOM, null);
        this.createEventListeners();
      }
      cleanStylesAndScripts() {
        [...document.querySelectorAll("." + this.randomizer)].forEach((e) => {
          e.remove();
        });
      }
      trackerSendError() {
        try {
          this.VAST.tracker.errorWithCode("900", !0);
        } catch (e) {}
      }
      reInitByError() {
        if (
          ((this.container.style.display = "none"),
          (this.currentRetray += 1),
          this.trackerSendError(),
          this.unsubscribeVastAndVpaid(),
          this.cleanStylesAndScripts(),
          this.currentRetray >= this.retrays)
        )
          return void this.logger.log(
            new l.TerminateError(
              "Превышен лимит перезапроса VAST",
              this.removeFromPage.bind(this)
            )
          );
        const e = this.init.bind(this),
          t = this;
        setTimeout(() => {
          e(), t.playAd();
        }, r.REINIT_JITTER);
      }
      unsubscribeVastAndVpaid() {
        this.unsubscribeVPAID.forEach((e) =>
          n(this, void 0, void 0, function* () {
            const t = yield e;
            null !== t && t();
          })
        );
      }
      removeFromPage() {
        this.cleanStylesAndScripts(),
          this.unsubscribeVastAndVpaid(),
          this.container.removeEventListener("dfPlay", this.playAd),
          this.container.removeEventListener("dfPause", this.pauseAd);
        try {
          this.DOM.removeFromPage.call(this.DOM);
        } catch (e) {}
      }
    };
  },
  function (e, t, i) {
    "use strict";
    var n =
      (this && this.__awaiter) ||
      function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, s) {
          function o(e) {
            try {
              c(n.next(e));
            } catch (t) {
              s(t);
            }
          }
          function a(e) {
            try {
              c(n.throw(e));
            } catch (t) {
              s(t);
            }
          }
          function c(e) {
            var t;
            e.done
              ? r(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(o, a);
          }
          c((n = n.apply(e, t || [])).next());
        });
      };
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.Logger = void 0);
    const r = i(29);
    t.Logger = class {
      constructor(e) {
        this.player = e;
      }
      log(e) {
        return n(this, void 0, void 0, function* () {
          if ("noError" !== e.message) {
            const t = r.errorCodesVAST[e.message] || "900";
            try {
              this.player.VAST.tracker.errorWithCode(t, parseInt(t) > 901);
            } catch (e) {
              try {
                this.player.VAST.vastRespons.ads[0].errorURLTemplates.forEach(
                  (e) => {
                    fetch(e.replace("[ERRORCODE]", "902"));
                  }
                );
              } catch (e) {}
            }
          }
          switch (e.toString()) {
            case "[object TerminateError]":
              break;
            case "[object ReinitError]":
              this.player.reInitByError();
          }
        });
      }
    };
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.errorCodesVAST = void 0),
      (t.errorCodesVAST = {
        "no active campaigns": "901",
        "Некорректный VAST, отсутствует параметр ads": "902",
        "Превышен лимит перезапроса VAST": "903",
      });
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.loadVPAID = void 0);
    const n = i(31);
    t.loadVPAID = (e, t, i, r, s, o, a, c, u, l, d, h) => {
      t.innerHTML = "";
      return r.map((r) => {
        if ("application/javascript" === r.mimeType) {
          return n.addScriptToDocument(
            r.fileURL,
            s,
            o,
            e,
            i,
            a,
            c,
            t,
            u,
            l,
            d,
            h
          );
        }
        return null;
      });
    };
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.addScriptToDocument = void 0);
    const n = i(2);
    t.addScriptToDocument = (e, t, i, r, s, o, a, c, u, l, d, h) =>
      new Promise((p, f) => {
        var v;
        const m = document.createElement("iframe");
        m.classList.add("iframe-" + i),
          m.setAttribute(
            "style",
            "border:0px;margin:0px;opacity:1;padding:0px;height:0;position:absolute;width:0;top:0;left:0;"
          ),
          m.setAttribute("allow", "autoplay"),
          window.top.document.body.appendChild(m);
        const g =
          null === (v = m.contentWindow) || void 0 === v ? void 0 : v.document;
        null == g ||
          g.write("<head><style>body{margin:0}</style></head><body></body>");
        const y = document.createElement("script");
        null == g || g.body.appendChild(y),
          null == y ||
            y.addEventListener("load", function () {
              T();
            }),
          null == y ||
            y.addEventListener("error", function () {
              l.log(new n.ReinitError("Ошибка загрузки VPAID")), f(null);
            });
        const T = () => {
          try {
            const e = m.contentDocument.defaultView.getVPAIDAd(),
              i = t(e, o, a, r, s, c, u, l, d, h);
            p(i);
          } catch (e) {
            l.log(new n.ReinitError(e)), f(null);
          }
        };
        y.src = e;
      });
  },
  function (e, t, i) {
    "use strict";
    var n =
      (this && this.__awaiter) ||
      function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, s) {
          function o(e) {
            try {
              c(n.next(e));
            } catch (t) {
              s(t);
            }
          }
          function a(e) {
            try {
              c(n.throw(e));
            } catch (t) {
              s(t);
            }
          }
          function c(e) {
            var t;
            e.done
              ? r(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(o, a);
          }
          c((n = n.apply(e, t || [])).next());
        });
      };
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.VASTClass = void 0);
    const r = i(33),
      s = i(34),
      o = i(35),
      a = i(36);
    t.VASTClass = class {
      constructor(e, t, i) {
        (this.vastClient = new r.VASTClient()),
          (this.containVIPAID = !1),
          (this.isValid = !0),
          (this.skippable = !0),
          (this.logger = t),
          (this.url = e),
          (this.widthAndHeight = i);
      }
      fetch() {
        return n(this, void 0, void 0, function* () {
          try {
            o.replaceMacro(this.vastClient, this.widthAndHeight),
              (this.vastRespons = yield this.vastClient.get(this.url));
          } catch (e) {
            throw ((this.isValid = !1), "Получение VAST " + e);
          }
          if (void 0 === this.vastRespons.ads[0])
            throw (
              ((this.isValid = !1),
              "Некорректный VAST, отсутствует параметр ads")
            );
          (this.firstAdd = this.vastRespons.ads[0]),
            (this.firstAdd.errorURLTemplates = this.decodeURLs(
              this.firstAdd.errorURLTemplates
            )),
            (this.creatives = this.firstAdd.creatives[0]),
            (this.skippable = !!this.creatives.skipDelay),
            (this.mediaFiles = this.creatives.mediaFiles),
            (this.containVIPAID = this.mediaFiles.some(s.VPAIDCondition)),
            (this.tracker = new r.VASTTracker(
              this.vastClient,
              this.firstAdd,
              this.creatives
            ));
        });
      }
      decodeURLs(e) {
        return e.map((e) => decodeURI(e));
      }
      bindActions(e, t, i, n, r, s, o, c) {
        (this.video = e),
          a.commonActions(
            this.video,
            this.tracker,
            this.logger,
            t,
            i,
            n,
            r,
            s,
            o,
            c
          );
      }
    };
  },
  function (e, t, i) {
    "use strict";
    i.r(t),
      i.d(t, "VASTClient", function () {
        return ie;
      }),
      i.d(t, "VASTParser", function () {
        return Z;
      }),
      i.d(t, "VASTTracker", function () {
        return ne;
      });
    var n = function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      },
      r = (function () {
        function e(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function (t, i, n) {
          return i && e(t.prototype, i), n && e(t, n), t;
        };
      })(),
      s = function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      },
      o = function (e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      },
      a = function e() {
        n(this, e),
          (this.id = null),
          (this.sequence = null),
          (this.system = null),
          (this.title = null),
          (this.description = null),
          (this.advertiser = null),
          (this.pricing = null),
          (this.survey = null),
          (this.errorURLTemplates = []),
          (this.impressionURLTemplates = []),
          (this.creatives = []),
          (this.extensions = []);
      },
      c = function e() {
        n(this, e), (this.attributes = {}), (this.children = []);
      },
      u = function e() {
        n(this, e),
          (this.name = null),
          (this.value = null),
          (this.attributes = {});
      },
      l = function e() {
        n(this, e),
          (this.id = null),
          (this.width = 0),
          (this.height = 0),
          (this.type = null),
          (this.staticResource = null),
          (this.htmlResource = null),
          (this.iframeResource = null),
          (this.altText = null),
          (this.companionClickThroughURLTemplate = null),
          (this.companionClickTrackingURLTemplates = []),
          (this.trackingEvents = {});
      },
      d = function e() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        n(this, e),
          (this.id = t.id || null),
          (this.adId = t.adId || null),
          (this.sequence = t.sequence || null),
          (this.apiFramework = t.apiFramework || null),
          (this.trackingEvents = {});
      },
      h = (function (e) {
        function t() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          n(this, t);
          var i = o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
          );
          return (i.type = "companion"), (i.variations = []), i;
        }
        return s(t, d), t;
      })();
    function p(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        n = [];
      for (var r in (t.ASSETURI && (t.ASSETURI = f(t.ASSETURI)),
      t.CONTENTPLAYHEAD && (t.CONTENTPLAYHEAD = f(t.CONTENTPLAYHEAD)),
      !t.ERRORCODE ||
        i.isCustomCode ||
        /^[0-9]{3}$/.test(t.ERRORCODE) ||
        (t.ERRORCODE = 900),
      (t.CACHEBUSTING = v(Math.round(1e8 * Math.random()).toString())),
      (t.TIMESTAMP = f(new Date().toISOString())),
      (t.RANDOM = t.random = t.CACHEBUSTING),
      e)) {
        var s = decodeURI(e[r]);
        if ("string" == typeof s) {
          for (var o in t) {
            var a = t[o],
              c = "[" + o + "]",
              u = "%%" + o + "%%";
            s = (s = s.replace(c, a)).replace(u, a);
          }
          n.push(s);
        }
      }
      return n;
    }
    function f(e) {
      return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
        return "%" + e.charCodeAt(0).toString(16);
      });
    }
    function v(e) {
      return e.length < 8
        ? m(0, 8 - e.length, !1)
            .map(function () {
              return "0";
            })
            .join("") + e
        : e;
    }
    function m(e, t, i) {
      for (
        var n = [], r = e < t, s = i ? (r ? t + 1 : t - 1) : t, o = e;
        r ? o < s : o > s;
        r ? o++ : o--
      )
        n.push(o);
      return n;
    }
    var g = {
      track: function (e, t, i) {
        p(e, t, i).forEach(function (e) {
          "undefined" != typeof window &&
            null !== window &&
            (new Image().src = e);
        });
      },
      resolveURLTemplates: p,
      encodeURIComponentRFC3986: f,
      leftpad: v,
      range: m,
      isNumeric: function (e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
      },
      flatten: function e(t) {
        return t.reduce(function (t, i) {
          return t.concat(Array.isArray(i) ? e(i) : i);
        }, []);
      },
    };
    var y = {
      childByName: function (e, t) {
        var i = e.childNodes;
        for (var n in i) {
          var r = i[n];
          if (r.nodeName === t) return r;
        }
      },
      childrenByName: function (e, t) {
        var i = [],
          n = e.childNodes;
        for (var r in n) {
          var s = n[r];
          s.nodeName === t && i.push(s);
        }
        return i;
      },
      resolveVastAdTagURI: function (e, t) {
        return t
          ? 0 === e.indexOf("//")
            ? "" + location.protocol + e
            : -1 === e.indexOf("://")
            ? t.slice(0, t.lastIndexOf("/")) + "/" + e
            : e
          : e;
      },
      parseBoolean: function (e) {
        return -1 !== ["true", "TRUE", "1"].indexOf(e);
      },
      parseNodeText: function (e) {
        return e && (e.textContent || e.text || "").trim();
      },
      copyNodeAttribute: function (e, t, i) {
        var n = t.getAttribute(e);
        n && i.setAttribute(e, n);
      },
      parseDuration: function (e) {
        if (null == e) return -1;
        if (g.isNumeric(e)) return parseInt(e);
        var t = e.split(":");
        if (3 !== t.length) return -1;
        var i = t[2].split("."),
          n = parseInt(i[0]);
        2 === i.length && (n += parseFloat("0." + i[1]));
        var r = parseInt(60 * t[1]),
          s = parseInt(60 * t[0] * 60);
        return isNaN(s) || isNaN(r) || isNaN(n) || r > 3600 || n > 60
          ? -1
          : s + r + n;
      },
      splitVAST: function (e) {
        var t = [],
          i = null;
        return (
          e.forEach(function (n, r) {
            if (
              (n.sequence && (n.sequence = parseInt(n.sequence, 10)),
              n.sequence > 1)
            ) {
              var s = e[r - 1];
              if (s && s.sequence === n.sequence - 1)
                return void (i && i.push(n));
              delete n.sequence;
            }
            (i = [n]), t.push(i);
          }),
          t
        );
      },
      mergeWrapperAdData: function (e, t) {
        (e.errorURLTemplates = t.errorURLTemplates.concat(e.errorURLTemplates)),
          (e.impressionURLTemplates = t.impressionURLTemplates.concat(
            e.impressionURLTemplates
          )),
          (e.extensions = t.extensions.concat(e.extensions)),
          e.creatives.forEach(function (e) {
            if (t.trackingEvents && t.trackingEvents[e.type])
              for (var i in t.trackingEvents[e.type]) {
                var n = t.trackingEvents[e.type][i];
                Array.isArray(e.trackingEvents[i]) ||
                  (e.trackingEvents[i] = []),
                  (e.trackingEvents[i] = e.trackingEvents[i].concat(n));
              }
          }),
          t.videoClickTrackingURLTemplates &&
            t.videoClickTrackingURLTemplates.length &&
            e.creatives.forEach(function (e) {
              "linear" === e.type &&
                (e.videoClickTrackingURLTemplates = e.videoClickTrackingURLTemplates.concat(
                  t.videoClickTrackingURLTemplates
                ));
            }),
          t.videoCustomClickURLTemplates &&
            t.videoCustomClickURLTemplates.length &&
            e.creatives.forEach(function (e) {
              "linear" === e.type &&
                (e.videoCustomClickURLTemplates = e.videoCustomClickURLTemplates.concat(
                  t.videoCustomClickURLTemplates
                ));
            }),
          t.videoClickThroughURLTemplate &&
            e.creatives.forEach(function (e) {
              "linear" !== e.type ||
                (null !== e.videoClickThroughURLTemplate &&
                  void 0 !== e.videoClickThroughURLTemplate) ||
                (e.videoClickThroughURLTemplate =
                  t.videoClickThroughURLTemplate);
            });
      },
    };
    function T(e, t) {
      var i = new h(t);
      return (
        y.childrenByName(e, "Companion").forEach(function (e) {
          var t = new l();
          (t.id = e.getAttribute("id") || null),
            (t.width = e.getAttribute("width")),
            (t.height = e.getAttribute("height")),
            (t.companionClickTrackingURLTemplates = []),
            y.childrenByName(e, "HTMLResource").forEach(function (e) {
              (t.type = e.getAttribute("creativeType") || "text/html"),
                (t.htmlResource = y.parseNodeText(e));
            }),
            y.childrenByName(e, "IFrameResource").forEach(function (e) {
              (t.type = e.getAttribute("creativeType") || 0),
                (t.iframeResource = y.parseNodeText(e));
            }),
            y.childrenByName(e, "StaticResource").forEach(function (i) {
              (t.type = i.getAttribute("creativeType") || 0),
                y.childrenByName(e, "AltText").forEach(function (e) {
                  t.altText = y.parseNodeText(e);
                }),
                (t.staticResource = y.parseNodeText(i));
            }),
            y.childrenByName(e, "TrackingEvents").forEach(function (e) {
              y.childrenByName(e, "Tracking").forEach(function (e) {
                var i = e.getAttribute("event"),
                  n = y.parseNodeText(e);
                i &&
                  n &&
                  (Array.isArray(t.trackingEvents[i]) ||
                    (t.trackingEvents[i] = []),
                  t.trackingEvents[i].push(n));
              });
            }),
            y.childrenByName(e, "CompanionClickTracking").forEach(function (e) {
              t.companionClickTrackingURLTemplates.push(y.parseNodeText(e));
            }),
            (t.companionClickThroughURLTemplate = y.parseNodeText(
              y.childByName(e, "CompanionClickThrough")
            )),
            (t.companionClickTrackingURLTemplate = y.parseNodeText(
              y.childByName(e, "CompanionClickTracking")
            )),
            i.variations.push(t);
        }),
        i
      );
    }
    var b = (function (e) {
        function t() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          n(this, t);
          var i = o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
          );
          return (
            (i.type = "linear"),
            (i.duration = 0),
            (i.skipDelay = null),
            (i.mediaFiles = []),
            (i.videoClickThroughURLTemplate = null),
            (i.videoClickTrackingURLTemplates = []),
            (i.videoCustomClickURLTemplates = []),
            (i.adParameters = null),
            (i.icons = []),
            i
          );
        }
        return s(t, d), t;
      })(),
      k = function e() {
        n(this, e),
          (this.program = null),
          (this.height = 0),
          (this.width = 0),
          (this.xPosition = 0),
          (this.yPosition = 0),
          (this.apiFramework = null),
          (this.offset = null),
          (this.duration = 0),
          (this.type = null),
          (this.staticResource = null),
          (this.htmlResource = null),
          (this.iframeResource = null),
          (this.iconClickThroughURLTemplate = null),
          (this.iconClickTrackingURLTemplates = []),
          (this.iconViewTrackingURLTemplate = null);
      },
      A = function e() {
        n(this, e),
          (this.id = null),
          (this.fileURL = null),
          (this.deliveryType = "progressive"),
          (this.mimeType = null),
          (this.codec = null),
          (this.bitrate = 0),
          (this.minBitrate = 0),
          (this.maxBitrate = 0),
          (this.width = 0),
          (this.height = 0),
          (this.apiFramework = null),
          (this.scalable = null),
          (this.maintainAspectRatio = null);
      };
    function w(e, t) {
      var i = void 0,
        n = new b(t);
      n.duration = y.parseDuration(
        y.parseNodeText(y.childByName(e, "Duration"))
      );
      var r = e.getAttribute("skipoffset");
      if (null == r) n.skipDelay = null;
      else if ("%" === r.charAt(r.length - 1) && -1 !== n.duration) {
        var s = parseInt(r, 10);
        n.skipDelay = n.duration * (s / 100);
      } else n.skipDelay = y.parseDuration(r);
      var o = y.childByName(e, "VideoClicks");
      o &&
        ((n.videoClickThroughURLTemplate = y.parseNodeText(
          y.childByName(o, "ClickThrough")
        )),
        y.childrenByName(o, "ClickTracking").forEach(function (e) {
          n.videoClickTrackingURLTemplates.push(y.parseNodeText(e));
        }),
        y.childrenByName(o, "CustomClick").forEach(function (e) {
          n.videoCustomClickURLTemplates.push(y.parseNodeText(e));
        }));
      var a = y.childByName(e, "AdParameters");
      a && (n.adParameters = y.parseNodeText(a)),
        y.childrenByName(e, "TrackingEvents").forEach(function (e) {
          y.childrenByName(e, "Tracking").forEach(function (e) {
            var t = e.getAttribute("event"),
              r = y.parseNodeText(e);
            if (t && r) {
              if ("progress" === t) {
                if (!(i = e.getAttribute("offset"))) return;
                t =
                  "%" === i.charAt(i.length - 1)
                    ? "progress-" + i
                    : "progress-" + Math.round(y.parseDuration(i));
              }
              Array.isArray(n.trackingEvents[t]) || (n.trackingEvents[t] = []),
                n.trackingEvents[t].push(r);
            }
          });
        }),
        y.childrenByName(e, "MediaFiles").forEach(function (e) {
          y.childrenByName(e, "MediaFile").forEach(function (e) {
            var t = new A();
            (t.id = e.getAttribute("id")),
              (t.fileURL = y.parseNodeText(e)),
              (t.deliveryType = e.getAttribute("delivery")),
              (t.codec = e.getAttribute("codec")),
              (t.mimeType = e.getAttribute("type")),
              (t.apiFramework = e.getAttribute("apiFramework")),
              (t.bitrate = parseInt(e.getAttribute("bitrate") || 0)),
              (t.minBitrate = parseInt(e.getAttribute("minBitrate") || 0)),
              (t.maxBitrate = parseInt(e.getAttribute("maxBitrate") || 0)),
              (t.width = parseInt(e.getAttribute("width") || 0)),
              (t.height = parseInt(e.getAttribute("height") || 0));
            var i = e.getAttribute("scalable");
            i &&
              "string" == typeof i &&
              ("true" === (i = i.toLowerCase())
                ? (t.scalable = !0)
                : "false" === i && (t.scalable = !1));
            var r = e.getAttribute("maintainAspectRatio");
            r &&
              "string" == typeof r &&
              ("true" === (r = r.toLowerCase())
                ? (t.maintainAspectRatio = !0)
                : "false" === r && (t.maintainAspectRatio = !1)),
              n.mediaFiles.push(t);
          });
        });
      var c = y.childByName(e, "Icons");
      return (
        c &&
          y.childrenByName(c, "Icon").forEach(function (e) {
            var t = new k();
            (t.program = e.getAttribute("program")),
              (t.height = parseInt(e.getAttribute("height") || 0)),
              (t.width = parseInt(e.getAttribute("width") || 0)),
              (t.xPosition = (function (e) {
                return -1 !== ["left", "right"].indexOf(e)
                  ? e
                  : parseInt(e || 0);
              })(e.getAttribute("xPosition"))),
              (t.yPosition = (function (e) {
                return -1 !== ["top", "bottom"].indexOf(e)
                  ? e
                  : parseInt(e || 0);
              })(e.getAttribute("yPosition"))),
              (t.apiFramework = e.getAttribute("apiFramework")),
              (t.offset = y.parseDuration(e.getAttribute("offset"))),
              (t.duration = y.parseDuration(e.getAttribute("duration"))),
              y.childrenByName(e, "HTMLResource").forEach(function (e) {
                (t.type = e.getAttribute("creativeType") || "text/html"),
                  (t.htmlResource = y.parseNodeText(e));
              }),
              y.childrenByName(e, "IFrameResource").forEach(function (e) {
                (t.type = e.getAttribute("creativeType") || 0),
                  (t.iframeResource = y.parseNodeText(e));
              }),
              y.childrenByName(e, "StaticResource").forEach(function (e) {
                (t.type = e.getAttribute("creativeType") || 0),
                  (t.staticResource = y.parseNodeText(e));
              });
            var i = y.childByName(e, "IconClicks");
            i &&
              ((t.iconClickThroughURLTemplate = y.parseNodeText(
                y.childByName(i, "IconClickThrough")
              )),
              y.childrenByName(i, "IconClickTracking").forEach(function (e) {
                t.iconClickTrackingURLTemplates.push(y.parseNodeText(e));
              })),
              (t.iconViewTrackingURLTemplate = y.parseNodeText(
                y.childByName(e, "IconViewTracking")
              )),
              n.icons.push(t);
          }),
        n
      );
    }
    var E = (function (e) {
        function t() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          n(this, t);
          var i = o(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
          );
          return (i.type = "nonlinear"), (i.variations = []), i;
        }
        return s(t, d), t;
      })(),
      L = function e() {
        n(this, e),
          (this.id = null),
          (this.width = 0),
          (this.height = 0),
          (this.expandedWidth = 0),
          (this.expandedHeight = 0),
          (this.scalable = !0),
          (this.maintainAspectRatio = !0),
          (this.minSuggestedDuration = 0),
          (this.apiFramework = "static"),
          (this.type = null),
          (this.staticResource = null),
          (this.htmlResource = null),
          (this.iframeResource = null),
          (this.nonlinearClickThroughURLTemplate = null),
          (this.nonlinearClickTrackingURLTemplates = []),
          (this.adParameters = null);
      };
    function R(e, t) {
      var i = new E(t);
      return (
        y.childrenByName(e, "TrackingEvents").forEach(function (e) {
          var t = void 0,
            n = void 0;
          y.childrenByName(e, "Tracking").forEach(function (e) {
            (t = e.getAttribute("event")),
              (n = y.parseNodeText(e)),
              t &&
                n &&
                (Array.isArray(i.trackingEvents[t]) ||
                  (i.trackingEvents[t] = []),
                i.trackingEvents[t].push(n));
          });
        }),
        y.childrenByName(e, "NonLinear").forEach(function (e) {
          var t = new L();
          (t.id = e.getAttribute("id") || null),
            (t.width = e.getAttribute("width")),
            (t.height = e.getAttribute("height")),
            (t.expandedWidth = e.getAttribute("expandedWidth")),
            (t.expandedHeight = e.getAttribute("expandedHeight")),
            (t.scalable = y.parseBoolean(e.getAttribute("scalable"))),
            (t.maintainAspectRatio = y.parseBoolean(
              e.getAttribute("maintainAspectRatio")
            )),
            (t.minSuggestedDuration = y.parseDuration(
              e.getAttribute("minSuggestedDuration")
            )),
            (t.apiFramework = e.getAttribute("apiFramework")),
            y.childrenByName(e, "HTMLResource").forEach(function (e) {
              (t.type = e.getAttribute("creativeType") || "text/html"),
                (t.htmlResource = y.parseNodeText(e));
            }),
            y.childrenByName(e, "IFrameResource").forEach(function (e) {
              (t.type = e.getAttribute("creativeType") || 0),
                (t.iframeResource = y.parseNodeText(e));
            }),
            y.childrenByName(e, "StaticResource").forEach(function (e) {
              (t.type = e.getAttribute("creativeType") || 0),
                (t.staticResource = y.parseNodeText(e));
            });
          var n = y.childByName(e, "AdParameters");
          n && (t.adParameters = y.parseNodeText(n)),
            (t.nonlinearClickThroughURLTemplate = y.parseNodeText(
              y.childByName(e, "NonLinearClickThrough")
            )),
            y.childrenByName(e, "NonLinearClickTracking").forEach(function (e) {
              t.nonlinearClickTrackingURLTemplates.push(y.parseNodeText(e));
            }),
            i.variations.push(t);
        }),
        i
      );
    }
    function _(e) {
      var t = e.childNodes;
      for (var i in t) {
        var n = t[i];
        if (-1 !== ["Wrapper", "InLine"].indexOf(n.nodeName)) {
          if (
            (y.copyNodeAttribute("id", e, n),
            y.copyNodeAttribute("sequence", e, n),
            "Wrapper" === n.nodeName)
          )
            return P(n);
          if ("InLine" === n.nodeName) return C(n);
        }
      }
    }
    function C(e) {
      var t = e.childNodes,
        i = new a();
      for (var n in ((i.id = e.getAttribute("id") || null),
      (i.sequence = e.getAttribute("sequence") || null),
      t)) {
        var r = t[n];
        switch (r.nodeName) {
          case "Error":
            i.errorURLTemplates.push(y.parseNodeText(r));
            break;
          case "Impression":
            i.impressionURLTemplates.push(y.parseNodeText(r));
            break;
          case "Creatives":
            y.childrenByName(r, "Creative").forEach(function (e) {
              var t = {
                id: e.getAttribute("id") || null,
                adId: S(e),
                sequence: e.getAttribute("sequence") || null,
                apiFramework: e.getAttribute("apiFramework") || null,
              };
              for (var n in e.childNodes) {
                var r = e.childNodes[n],
                  s = void 0;
                switch (r.nodeName) {
                  case "Linear":
                    (s = w(r, t)) && i.creatives.push(s);
                    break;
                  case "NonLinearAds":
                    (s = R(r, t)) && i.creatives.push(s);
                    break;
                  case "CompanionAds":
                    (s = T(r, t)) && i.creatives.push(s);
                }
              }
            });
            break;
          case "Extensions":
            x(i.extensions, y.childrenByName(r, "Extension"));
            break;
          case "AdSystem":
            i.system = {
              value: y.parseNodeText(r),
              version: r.getAttribute("version") || null,
            };
            break;
          case "AdTitle":
            i.title = y.parseNodeText(r);
            break;
          case "Description":
            i.description = y.parseNodeText(r);
            break;
          case "Advertiser":
            i.advertiser = y.parseNodeText(r);
            break;
          case "Pricing":
            i.pricing = {
              value: y.parseNodeText(r),
              model: r.getAttribute("model") || null,
              currency: r.getAttribute("currency") || null,
            };
            break;
          case "Survey":
            i.survey = y.parseNodeText(r);
        }
      }
      return i;
    }
    function P(e) {
      var t = C(e),
        i = y.childByName(e, "VASTAdTagURI");
      if (
        (i
          ? (t.nextWrapperURL = y.parseNodeText(i))
          : (i = y.childByName(e, "VASTAdTagURL")) &&
            (t.nextWrapperURL = y.parseNodeText(y.childByName(i, "URL"))),
        t.creatives.forEach(function (e) {
          if (-1 !== ["linear", "nonlinear"].indexOf(e.type)) {
            if (e.trackingEvents) {
              t.trackingEvents || (t.trackingEvents = {}),
                t.trackingEvents[e.type] || (t.trackingEvents[e.type] = {});
              var i = function (i) {
                var n = e.trackingEvents[i];
                Array.isArray(t.trackingEvents[e.type][i]) ||
                  (t.trackingEvents[e.type][i] = []),
                  n.forEach(function (n) {
                    t.trackingEvents[e.type][i].push(n);
                  });
              };
              for (var n in e.trackingEvents) i(n);
            }
            e.videoClickTrackingURLTemplates &&
              (Array.isArray(t.videoClickTrackingURLTemplates) ||
                (t.videoClickTrackingURLTemplates = []),
              e.videoClickTrackingURLTemplates.forEach(function (e) {
                t.videoClickTrackingURLTemplates.push(e);
              })),
              e.videoClickThroughURLTemplate &&
                (t.videoClickThroughURLTemplate =
                  e.videoClickThroughURLTemplate),
              e.videoCustomClickURLTemplates &&
                (Array.isArray(t.videoCustomClickURLTemplates) ||
                  (t.videoCustomClickURLTemplates = []),
                e.videoCustomClickURLTemplates.forEach(function (e) {
                  t.videoCustomClickURLTemplates.push(e);
                }));
          }
        }),
        t.nextWrapperURL)
      )
        return t;
    }
    function x(e, t) {
      t.forEach(function (t) {
        var i = new c(),
          n = t.attributes,
          r = t.childNodes;
        if (t.attributes)
          for (var s in n) {
            var o = n[s];
            o.nodeName &&
              o.nodeValue &&
              (i.attributes[o.nodeName] = o.nodeValue);
          }
        for (var a in r) {
          var l = r[a],
            d = y.parseNodeText(l);
          if ("#comment" !== l.nodeName && "" !== d) {
            var h = new u();
            if (((h.name = l.nodeName), (h.value = d), l.attributes)) {
              var p = l.attributes;
              for (var f in p) {
                var v = p[f];
                h.attributes[v.nodeName] = v.nodeValue;
              }
            }
            i.children.push(h);
          }
        }
        e.push(i);
      });
    }
    function S(e) {
      return (
        e.getAttribute("AdID") ||
        e.getAttribute("adID") ||
        e.getAttribute("adId") ||
        null
      );
    }
    function O() {}
    function U() {
      U.init.call(this);
    }
    function M(e) {
      return void 0 === e._maxListeners
        ? U.defaultMaxListeners
        : e._maxListeners;
    }
    function V(e, t, i) {
      if (t) e.call(i);
      else for (var n = e.length, r = H(e, n), s = 0; s < n; ++s) r[s].call(i);
    }
    function N(e, t, i, n) {
      if (t) e.call(i, n);
      else
        for (var r = e.length, s = H(e, r), o = 0; o < r; ++o) s[o].call(i, n);
    }
    function D(e, t, i, n, r) {
      if (t) e.call(i, n, r);
      else
        for (var s = e.length, o = H(e, s), a = 0; a < s; ++a)
          o[a].call(i, n, r);
    }
    function I(e, t, i, n, r, s) {
      if (t) e.call(i, n, r, s);
      else
        for (var o = e.length, a = H(e, o), c = 0; c < o; ++c)
          a[c].call(i, n, r, s);
    }
    function j(e, t, i, n) {
      if (t) e.apply(i, n);
      else
        for (var r = e.length, s = H(e, r), o = 0; o < r; ++o) s[o].apply(i, n);
    }
    function B(e, t, i, n) {
      var r, s, o;
      if ("function" != typeof i)
        throw new TypeError('"listener" argument must be a function');
      if (
        ((s = e._events)
          ? (s.newListener &&
              (e.emit("newListener", t, i.listener ? i.listener : i),
              (s = e._events)),
            (o = s[t]))
          : ((s = e._events = new O()), (e._eventsCount = 0)),
        o)
      ) {
        if (
          ("function" == typeof o
            ? (o = s[t] = n ? [i, o] : [o, i])
            : n
            ? o.unshift(i)
            : o.push(i),
          !o.warned && (r = M(e)) && r > 0 && o.length > r)
        ) {
          o.warned = !0;
          var a = new Error(
            "Possible EventEmitter memory leak detected. " +
              o.length +
              " " +
              t +
              " listeners added. Use emitter.setMaxListeners() to increase limit"
          );
          (a.name = "MaxListenersExceededWarning"),
            (a.emitter = e),
            (a.type = t),
            (a.count = o.length),
            console.warn;
        }
      } else (o = s[t] = i), ++e._eventsCount;
      return e;
    }
    function F(e, t, i) {
      var n = !1;
      function r() {
        e.removeListener(t, r), n || ((n = !0), i.apply(e, arguments));
      }
      return (r.listener = i), r;
    }
    function W(e) {
      var t = this._events;
      if (t) {
        var i = t[e];
        if ("function" == typeof i) return 1;
        if (i) return i.length;
      }
      return 0;
    }
    function H(e, t) {
      for (var i = new Array(t); t--; ) i[t] = e[t];
      return i;
    }
    function z() {
      var e = void 0;
      return window.XDomainRequest && (e = new XDomainRequest()), e;
    }
    (O.prototype = Object.create(null)),
      (U.EventEmitter = U),
      (U.usingDomains = !1),
      (U.prototype.domain = void 0),
      (U.prototype._events = void 0),
      (U.prototype._maxListeners = void 0),
      (U.defaultMaxListeners = 10),
      (U.init = function () {
        (this.domain = null),
          U.usingDomains &&
            (!(void 0).active ||
              this instanceof (void 0).Domain ||
              (this.domain = (void 0).active)),
          (this._events &&
            this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = new O()), (this._eventsCount = 0)),
          (this._maxListeners = this._maxListeners || void 0);
      }),
      (U.prototype.setMaxListeners = function (e) {
        if ("number" != typeof e || e < 0 || isNaN(e))
          throw new TypeError('"n" argument must be a positive number');
        return (this._maxListeners = e), this;
      }),
      (U.prototype.getMaxListeners = function () {
        return M(this);
      }),
      (U.prototype.emit = function (e) {
        var t,
          i,
          n,
          r,
          s,
          o,
          a,
          c = "error" === e;
        if ((o = this._events)) c = c && null == o.error;
        else if (!c) return !1;
        if (((a = this.domain), c)) {
          if (((t = arguments[1]), !a)) {
            if (t instanceof Error) throw t;
            var u = new Error(
              'Uncaught, unspecified "error" event. (' + t + ")"
            );
            throw ((u.context = t), u);
          }
          return (
            t || (t = new Error('Uncaught, unspecified "error" event')),
            (t.domainEmitter = this),
            (t.domain = a),
            (t.domainThrown = !1),
            a.emit("error", t),
            !1
          );
        }
        if (!(i = o[e])) return !1;
        var l = "function" == typeof i;
        switch ((n = arguments.length)) {
          case 1:
            V(i, l, this);
            break;
          case 2:
            N(i, l, this, arguments[1]);
            break;
          case 3:
            D(i, l, this, arguments[1], arguments[2]);
            break;
          case 4:
            I(i, l, this, arguments[1], arguments[2], arguments[3]);
            break;
          default:
            for (r = new Array(n - 1), s = 1; s < n; s++)
              r[s - 1] = arguments[s];
            j(i, l, this, r);
        }
        return !0;
      }),
      (U.prototype.addListener = function (e, t) {
        return B(this, e, t, !1);
      }),
      (U.prototype.on = U.prototype.addListener),
      (U.prototype.prependListener = function (e, t) {
        return B(this, e, t, !0);
      }),
      (U.prototype.once = function (e, t) {
        if ("function" != typeof t)
          throw new TypeError('"listener" argument must be a function');
        return this.on(e, F(this, e, t)), this;
      }),
      (U.prototype.prependOnceListener = function (e, t) {
        if ("function" != typeof t)
          throw new TypeError('"listener" argument must be a function');
        return this.prependListener(e, F(this, e, t)), this;
      }),
      (U.prototype.removeListener = function (e, t) {
        var i, n, r, s, o;
        if ("function" != typeof t)
          throw new TypeError('"listener" argument must be a function');
        if (!(n = this._events)) return this;
        if (!(i = n[e])) return this;
        if (i === t || (i.listener && i.listener === t))
          0 == --this._eventsCount
            ? (this._events = new O())
            : (delete n[e],
              n.removeListener &&
                this.emit("removeListener", e, i.listener || t));
        else if ("function" != typeof i) {
          for (r = -1, s = i.length; s-- > 0; )
            if (i[s] === t || (i[s].listener && i[s].listener === t)) {
              (o = i[s].listener), (r = s);
              break;
            }
          if (r < 0) return this;
          if (1 === i.length) {
            if (((i[0] = void 0), 0 == --this._eventsCount))
              return (this._events = new O()), this;
            delete n[e];
          } else
            !(function (e, t) {
              for (var i = t, n = i + 1, r = e.length; n < r; i += 1, n += 1)
                e[i] = e[n];
              e.pop();
            })(i, r);
          n.removeListener && this.emit("removeListener", e, o || t);
        }
        return this;
      }),
      (U.prototype.removeAllListeners = function (e) {
        var t, i;
        if (!(i = this._events)) return this;
        if (!i.removeListener)
          return (
            0 === arguments.length
              ? ((this._events = new O()), (this._eventsCount = 0))
              : i[e] &&
                (0 == --this._eventsCount
                  ? (this._events = new O())
                  : delete i[e]),
            this
          );
        if (0 === arguments.length) {
          for (var n, r = Object.keys(i), s = 0; s < r.length; ++s)
            "removeListener" !== (n = r[s]) && this.removeAllListeners(n);
          return (
            this.removeAllListeners("removeListener"),
            (this._events = new O()),
            (this._eventsCount = 0),
            this
          );
        }
        if ("function" == typeof (t = i[e])) this.removeListener(e, t);
        else if (t)
          do {
            this.removeListener(e, t[t.length - 1]);
          } while (t[0]);
        return this;
      }),
      (U.prototype.listeners = function (e) {
        var t,
          i = this._events;
        return i && (t = i[e])
          ? "function" == typeof t
            ? [t.listener || t]
            : (function (e) {
                for (var t = new Array(e.length), i = 0; i < t.length; ++i)
                  t[i] = e[i].listener || e[i];
                return t;
              })(t)
          : [];
      }),
      (U.listenerCount = function (e, t) {
        return "function" == typeof e.listenerCount
          ? e.listenerCount(t)
          : W.call(e, t);
      }),
      (U.prototype.listenerCount = W),
      (U.prototype.eventNames = function () {
        return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
      });
    var q = {
      get: function (e, t, i) {
        var n =
          "function" == typeof window.ActiveXObject
            ? new window.ActiveXObject("Microsoft.XMLDOM")
            : void 0;
        if (!n)
          return i(
            new Error("FlashURLHandler: Microsoft.XMLDOM format not supported")
          );
        n.async = !1;
        var r = z();
        r.open("GET", e),
          (r.timeout = t.timeout || 0),
          (r.withCredentials = t.withCredentials || !1),
          r.send(),
          (r.onprogress = function () {}),
          (r.onload = function () {
            n.loadXML(r.responseText), i(null, n);
          });
      },
      supported: function () {
        return !!z();
      },
    };
    var Y = {
      get: function (e, t, i) {
        i(
          new Error(
            "Please bundle the library for node to use the node urlHandler"
          )
        );
      },
    };
    function $() {
      try {
        var e = new window.XMLHttpRequest();
        return "withCredentials" in e ? e : null;
      } catch (e) {
        return null;
      }
    }
    var Q = {
      get: function (e, t, i) {
        if ("https:" === window.location.protocol && 0 === e.indexOf("http://"))
          return i(new Error("XHRURLHandler: Cannot go from HTTPS to HTTP."));
        try {
          var n = $();
          n.open("GET", e),
            (n.timeout = t.timeout || 0),
            (n.withCredentials = t.withCredentials || !1),
            n.overrideMimeType && n.overrideMimeType("text/xml"),
            (n.onreadystatechange = function () {
              4 === n.readyState &&
                (200 === n.status
                  ? i(null, n.responseXML)
                  : i(new Error("XHRURLHandler: " + n.statusText)));
            }),
            n.send();
        } catch (e) {
          i(new Error("XHRURLHandler: Unexpected error"));
        }
      },
      supported: function () {
        return !!$();
      },
    };
    var X = {
        get: function (e, t, i) {
          return (
            i || ("function" == typeof t && (i = t), (t = {})),
            "undefined" == typeof window || null === window
              ? Y.get(e, t, i)
              : Q.supported()
              ? Q.get(e, t, i)
              : q.supported()
              ? q.get(e, t, i)
              : i(
                  new Error(
                    "Current context is not supported by any of the default URLHandlers. Please provide a custom URLHandler"
                  )
                )
          );
        },
      },
      G = function e() {
        n(this, e),
          (this.ads = []),
          (this.errorURLTemplates = []),
          (this.version = null);
      },
      J = { ERRORCODE: 900, extensions: [] },
      Z = (function (e) {
        function t() {
          n(this, t);
          var e = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (
            (e.remainingAds = []),
            (e.parentURLs = []),
            (e.errorURLTemplates = []),
            (e.rootErrorURLTemplates = []),
            (e.maxWrapperDepth = null),
            (e.URLTemplateFilters = []),
            (e.fetchingOptions = {}),
            e
          );
        }
        return (
          s(t, U),
          r(t, [
            {
              key: "addURLTemplateFilter",
              value: function (e) {
                "function" == typeof e && this.URLTemplateFilters.push(e);
              },
            },
            {
              key: "removeURLTemplateFilter",
              value: function () {
                this.URLTemplateFilters.pop();
              },
            },
            {
              key: "countURLTemplateFilters",
              value: function () {
                return this.URLTemplateFilters.length;
              },
            },
            {
              key: "clearURLTemplateFilters",
              value: function () {
                this.URLTemplateFilters = [];
              },
            },
            {
              key: "trackVastError",
              value: function (e, t) {
                for (
                  var i = arguments.length, n = Array(i > 2 ? i - 2 : 0), r = 2;
                  r < i;
                  r++
                )
                  n[r - 2] = arguments[r];
                this.emit(
                  "VAST-error",
                  Object.assign.apply(Object, [{}, J, t].concat(n))
                ),
                  g.track(e, t);
              },
            },
            {
              key: "getErrorURLTemplates",
              value: function () {
                return this.rootErrorURLTemplates.concat(
                  this.errorURLTemplates
                );
              },
            },
            {
              key: "fetchVAST",
              value: function (e, t, i) {
                var n = this;
                return new Promise(function (r, s) {
                  n.URLTemplateFilters.forEach(function (t) {
                    e = t(e);
                  }),
                    n.parentURLs.push(e),
                    n.emit("VAST-resolving", {
                      url: e,
                      wrapperDepth: t,
                      originalUrl: i,
                    }),
                    n.urlHandler.get(e, n.fetchingOptions, function (t, i) {
                      n.emit("VAST-resolved", { url: e, error: t }),
                        t ? s(t) : r(i);
                    });
                });
              },
            },
            {
              key: "initParsingStatus",
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                (this.rootURL = ""),
                  (this.remainingAds = []),
                  (this.parentURLs = []),
                  (this.errorURLTemplates = []),
                  (this.rootErrorURLTemplates = []),
                  (this.maxWrapperDepth = e.wrapperLimit || 10),
                  (this.fetchingOptions = {
                    timeout: e.timeout,
                    withCredentials: e.withCredentials,
                  }),
                  (this.urlHandler = e.urlHandler || e.urlhandler || X),
                  (this.vastVersion = null);
              },
            },
            {
              key: "getRemainingAds",
              value: function (e) {
                var t = this;
                if (0 === this.remainingAds.length)
                  return Promise.reject(
                    new Error("No more ads are available for the given VAST")
                  );
                var i = e
                  ? g.flatten(this.remainingAds)
                  : this.remainingAds.shift();
                return (
                  (this.errorURLTemplates = []),
                  (this.parentURLs = []),
                  this.resolveAds(i, {
                    wrapperDepth: 0,
                    originalUrl: this.rootURL,
                  }).then(function (e) {
                    return t.buildVASTResponse(e);
                  })
                );
              },
            },
            {
              key: "getAndParseVAST",
              value: function (e) {
                var t = this,
                  i =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                return (
                  this.initParsingStatus(i),
                  (this.rootURL = e),
                  this.fetchVAST(e).then(function (n) {
                    return (
                      (i.originalUrl = e),
                      (i.isRootVAST = !0),
                      t.parse(n, i).then(function (e) {
                        return t.buildVASTResponse(e);
                      })
                    );
                  })
                );
              },
            },
            {
              key: "parseVAST",
              value: function (e) {
                var t = this,
                  i =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                return (
                  this.initParsingStatus(i),
                  (i.isRootVAST = !0),
                  this.parse(e, i).then(function (e) {
                    return t.buildVASTResponse(e);
                  })
                );
              },
            },
            {
              key: "buildVASTResponse",
              value: function (e) {
                var t = new G();
                return (
                  (t.ads = e),
                  (t.errorURLTemplates = this.getErrorURLTemplates()),
                  (t.version = this.vastVersion),
                  this.completeWrapperResolving(t),
                  t
                );
              },
            },
            {
              key: "parseVastXml",
              value: function (e, t) {
                var i = t.isRootVAST,
                  n = void 0 !== i && i;
                if (
                  !e ||
                  !e.documentElement ||
                  "VAST" !== e.documentElement.nodeName
                )
                  throw new Error("Invalid VAST XMLDocument");
                var r = [],
                  s = e.documentElement.childNodes;
                if (n) {
                  var o = e.documentElement.getAttribute("version");
                  o && (this.vastVersion = o);
                }
                for (var a in s) {
                  var c = s[a];
                  if ("Error" === c.nodeName) {
                    var u = y.parseNodeText(c);
                    n
                      ? this.rootErrorURLTemplates.push(u)
                      : this.errorURLTemplates.push(u);
                  }
                  if ("Ad" === c.nodeName) {
                    var l = _(c);
                    l
                      ? r.push(l)
                      : this.trackVastError(this.getErrorURLTemplates(), {
                          ERRORCODE: 101,
                        });
                  }
                }
                return r;
              },
            },
            {
              key: "parse",
              value: function (e, t) {
                var i = t.resolveAll,
                  n = void 0 === i || i,
                  r = t.wrapperSequence,
                  s = void 0 === r ? null : r,
                  o = t.originalUrl,
                  a = void 0 === o ? null : o,
                  c = t.wrapperDepth,
                  u = void 0 === c ? 0 : c,
                  l = t.isRootVAST,
                  d = void 0 !== l && l,
                  h = [];
                try {
                  h = this.parseVastXml(e, { isRootVAST: d });
                } catch (e) {
                  return Promise.reject(e);
                }
                var p = h.length,
                  f = h[p - 1];
                return (
                  1 === p && null != s && f && !f.sequence && (f.sequence = s),
                  !1 === n &&
                    ((this.remainingAds = y.splitVAST(h)),
                    (h = this.remainingAds.shift())),
                  this.resolveAds(h, { wrapperDepth: u, originalUrl: a })
                );
              },
            },
            {
              key: "resolveAds",
              value: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  i = arguments[1],
                  n = i.wrapperDepth,
                  r = i.originalUrl,
                  s = [];
                return (
                  t.forEach(function (t) {
                    var i = e.resolveWrappers(t, n, r);
                    s.push(i);
                  }),
                  Promise.all(s).then(function (t) {
                    var i = g.flatten(t);
                    if (!i && e.remainingAds.length > 0) {
                      var s = e.remainingAds.shift();
                      return e.resolveAds(s, {
                        wrapperDepth: n,
                        originalUrl: r,
                      });
                    }
                    return i;
                  })
                );
              },
            },
            {
              key: "resolveWrappers",
              value: function (e, t, i) {
                var n = this;
                return new Promise(function (r) {
                  if ((t++, !e.nextWrapperURL))
                    return delete e.nextWrapperURL, r(e);
                  if (
                    t >= n.maxWrapperDepth ||
                    -1 !== n.parentURLs.indexOf(e.nextWrapperURL)
                  )
                    return (e.errorCode = 302), delete e.nextWrapperURL, r(e);
                  e.nextWrapperURL = y.resolveVastAdTagURI(e.nextWrapperURL, i);
                  var s = e.sequence;
                  (i = e.nextWrapperURL),
                    n
                      .fetchVAST(e.nextWrapperURL, t, i)
                      .then(function (o) {
                        return n
                          .parse(o, {
                            originalUrl: i,
                            wrapperSequence: s,
                            wrapperDepth: t,
                          })
                          .then(function (t) {
                            if ((delete e.nextWrapperURL, 0 === t.length))
                              return (e.creatives = []), r(e);
                            t.forEach(function (t) {
                              t && y.mergeWrapperAdData(t, e);
                            }),
                              r(t);
                          });
                      })
                      .catch(function (t) {
                        (e.errorCode = 301), (e.errorMessage = t.message), r(e);
                      });
                });
              },
            },
            {
              key: "completeWrapperResolving",
              value: function (e) {
                if (0 === e.ads.length)
                  this.trackVastError(e.errorURLTemplates, { ERRORCODE: 303 });
                else
                  for (var t = e.ads.length - 1; t >= 0; t--) {
                    var i = e.ads[t];
                    (i.errorCode || 0 === i.creatives.length) &&
                      (this.trackVastError(
                        i.errorURLTemplates.concat(e.errorURLTemplates),
                        { ERRORCODE: i.errorCode || 303 },
                        { ERRORMESSAGE: i.errorMessage || "" },
                        { extensions: i.extensions },
                        { system: i.system }
                      ),
                      e.ads.splice(t, 1));
                  }
              },
            },
          ]),
          t
        );
      })(),
      K = null,
      ee = {
        data: {},
        length: 0,
        getItem: function (e) {
          return this.data[e];
        },
        setItem: function (e, t) {
          (this.data[e] = t), (this.length = Object.keys(this.data).length);
        },
        removeItem: function (e) {
          delete this.data[e], (this.length = Object.keys(this.data).length);
        },
        clear: function () {
          (this.data = {}), (this.length = 0);
        },
      },
      te = (function () {
        function e() {
          n(this, e), (this.storage = this.initStorage());
        }
        return (
          r(e, [
            {
              key: "initStorage",
              value: function () {
                if (K) return K;
                try {
                  K =
                    "undefined" != typeof window && null !== window
                      ? window.localStorage || window.sessionStorage
                      : null;
                } catch (e) {
                  K = null;
                }
                return (K && !this.isStorageDisabled(K)) || (K = ee).clear(), K;
              },
            },
            {
              key: "isStorageDisabled",
              value: function (e) {
                var t = "__VASTStorage__";
                try {
                  if ((e.setItem(t, t), e.getItem(t) !== t))
                    return e.removeItem(t), !0;
                } catch (e) {
                  return !0;
                }
                return e.removeItem(t), !1;
              },
            },
            {
              key: "getItem",
              value: function (e) {
                return this.storage.getItem(e);
              },
            },
            {
              key: "setItem",
              value: function (e, t) {
                return this.storage.setItem(e, t);
              },
            },
            {
              key: "removeItem",
              value: function (e) {
                return this.storage.removeItem(e);
              },
            },
            {
              key: "clear",
              value: function () {
                return this.storage.clear();
              },
            },
          ]),
          e
        );
      })(),
      ie = (function () {
        function e(t, i, r) {
          n(this, e),
            (this.cappingFreeLunch = t || 0),
            (this.cappingMinimumTimeInterval = i || 0),
            (this.defaultOptions = { withCredentials: !1, timeout: 0 }),
            (this.vastParser = new Z()),
            (this.storage = r || new te()),
            void 0 === this.lastSuccessfulAd && (this.lastSuccessfulAd = 0),
            void 0 === this.totalCalls && (this.totalCalls = 0),
            void 0 === this.totalCallsTimeout && (this.totalCallsTimeout = 0);
        }
        return (
          r(e, [
            {
              key: "getParser",
              value: function () {
                return this.vastParser;
              },
            },
            {
              key: "hasRemainingAds",
              value: function () {
                return this.vastParser.remainingAds.length > 0;
              },
            },
            {
              key: "getNextAds",
              value: function (e) {
                return this.vastParser.getRemainingAds(e);
              },
            },
            {
              key: "get",
              value: function (e) {
                var t = this,
                  i =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = Date.now();
                return (
                  (i = Object.assign(
                    {},
                    this.defaultOptions,
                    i
                  )).hasOwnProperty("resolveAll") || (i.resolveAll = !1),
                  this.totalCallsTimeout < n
                    ? ((this.totalCalls = 1),
                      (this.totalCallsTimeout = n + 36e5))
                    : this.totalCalls++,
                  new Promise(function (r, s) {
                    if (t.cappingFreeLunch >= t.totalCalls)
                      return s(
                        new Error(
                          "VAST call canceled – FreeLunch capping not reached yet " +
                            t.totalCalls +
                            "/" +
                            t.cappingFreeLunch
                        )
                      );
                    var o = n - t.lastSuccessfulAd;
                    if (o < 0) t.lastSuccessfulAd = 0;
                    else if (o < t.cappingMinimumTimeInterval)
                      return s(
                        new Error(
                          "VAST call canceled – (" +
                            t.cappingMinimumTimeInterval +
                            ")ms minimum interval reached"
                        )
                      );
                    t.vastParser
                      .getAndParseVAST(e, i)
                      .then(function (e) {
                        return r(e);
                      })
                      .catch(function (e) {
                        return s(e);
                      });
                  })
                );
              },
            },
            {
              key: "lastSuccessfulAd",
              get: function () {
                return this.storage.getItem("vast-client-last-successful-ad");
              },
              set: function (e) {
                this.storage.setItem("vast-client-last-successful-ad", e);
              },
            },
            {
              key: "totalCalls",
              get: function () {
                return this.storage.getItem("vast-client-total-calls");
              },
              set: function (e) {
                this.storage.setItem("vast-client-total-calls", e);
              },
            },
            {
              key: "totalCallsTimeout",
              get: function () {
                return this.storage.getItem("vast-client-total-calls-timeout");
              },
              set: function (e) {
                this.storage.setItem("vast-client-total-calls-timeout", e);
              },
            },
          ]),
          e
        );
      })(),
      ne = (function (e) {
        function t(e, i, r) {
          var s =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          n(this, t);
          var a = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          for (var c in ((a.ad = i),
          (a.creative = r),
          (a.variation = s),
          (a.muted = !1),
          (a.impressed = !1),
          (a.skippable = !1),
          (a.trackingEvents = {}),
          (a._alreadyTriggeredQuartiles = {}),
          (a.emitAlwaysEvents = [
            "creativeView",
            "start",
            "firstQuartile",
            "midpoint",
            "thirdQuartile",
            "complete",
            "resume",
            "pause",
            "rewind",
            "skip",
            "closeLinear",
            "close",
          ]),
          a.creative.trackingEvents)) {
            var u = a.creative.trackingEvents[c];
            a.trackingEvents[c] = u.slice(0);
          }
          return (
            a.creative instanceof b
              ? a._initLinearTracking()
              : a._initVariationTracking(),
            e &&
              a.on("start", function () {
                e.lastSuccessfulAd = Date.now();
              }),
            a
          );
        }
        return (
          s(t, U),
          r(t, [
            {
              key: "_initLinearTracking",
              value: function () {
                (this.linear = !0),
                  (this.skipDelay = this.creative.skipDelay),
                  this.setDuration(this.creative.duration),
                  (this.clickThroughURLTemplate = this.creative.videoClickThroughURLTemplate),
                  (this.clickTrackingURLTemplates = this.creative.videoClickTrackingURLTemplates);
              },
            },
            {
              key: "_initVariationTracking",
              value: function () {
                if (
                  ((this.linear = !1), (this.skipDelay = -1), this.variation)
                ) {
                  for (var e in this.variation.trackingEvents) {
                    var t = this.variation.trackingEvents[e];
                    this.trackingEvents[e]
                      ? (this.trackingEvents[e] = this.trackingEvents[e].concat(
                          t.slice(0)
                        ))
                      : (this.trackingEvents[e] = t.slice(0));
                  }
                  this.variation instanceof L
                    ? ((this.clickThroughURLTemplate = this.variation.nonlinearClickThroughURLTemplate),
                      (this.clickTrackingURLTemplates = this.variation.nonlinearClickTrackingURLTemplates),
                      this.setDuration(this.variation.minSuggestedDuration))
                    : this.variation instanceof l &&
                      ((this.clickThroughURLTemplate = this.variation.companionClickThroughURLTemplate),
                      (this.clickTrackingURLTemplates = this.variation.companionClickTrackingURLTemplates));
                }
              },
            },
            {
              key: "setDuration",
              value: function (e) {
                (this.assetDuration = e),
                  (this.quartiles = {
                    firstQuartile: Math.round(25 * this.assetDuration) / 100,
                    midpoint: Math.round(50 * this.assetDuration) / 100,
                    thirdQuartile: Math.round(75 * this.assetDuration) / 100,
                  });
              },
            },
            {
              key: "setProgress",
              value: function (e) {
                var t = this,
                  i = this.skipDelay || -1;
                if (
                  (-1 === i ||
                    this.skippable ||
                    (i > e
                      ? this.emit("skip-countdown", i - e)
                      : ((this.skippable = !0),
                        this.emit("skip-countdown", 0))),
                  this.assetDuration > 0)
                ) {
                  var n = [];
                  if (e > 0) {
                    var r = Math.round((e / this.assetDuration) * 100);
                    for (var s in (n.push("start"),
                    n.push("progress-" + r + "%"),
                    n.push("progress-" + Math.round(e)),
                    this.quartiles))
                      this.isQuartileReached(s, this.quartiles[s], e) &&
                        (n.push(s), (this._alreadyTriggeredQuartiles[s] = !0));
                  }
                  n.forEach(function (e) {
                    t.track(e, !0);
                  }),
                    e < this.progress && this.track("rewind");
                }
                this.progress = e;
              },
            },
            {
              key: "isQuartileReached",
              value: function (e, t, i) {
                var n = !1;
                return (
                  t <= i && !this._alreadyTriggeredQuartiles[e] && (n = !0), n
                );
              },
            },
            {
              key: "setMuted",
              value: function (e) {
                this.muted !== e && this.track(e ? "mute" : "unmute"),
                  (this.muted = e);
              },
            },
            {
              key: "setPaused",
              value: function (e) {
                this.paused !== e && this.track(e ? "pause" : "resume"),
                  (this.paused = e);
              },
            },
            {
              key: "setFullscreen",
              value: function (e) {
                this.fullscreen !== e &&
                  this.track(e ? "fullscreen" : "exitFullscreen"),
                  (this.fullscreen = e);
              },
            },
            {
              key: "setExpand",
              value: function (e) {
                this.expanded !== e && this.track(e ? "expand" : "collapse"),
                  (this.expanded = e);
              },
            },
            {
              key: "setSkipDelay",
              value: function (e) {
                "number" == typeof e && (this.skipDelay = e);
              },
            },
            {
              key: "trackImpression",
              value: function () {
                this.impressed ||
                  ((this.impressed = !0),
                  this.trackURLs(this.ad.impressionURLTemplates),
                  this.track("creativeView"));
              },
            },
            {
              key: "errorWithCode",
              value: function (e) {
                var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                this.trackURLs(
                  this.ad.errorURLTemplates,
                  { ERRORCODE: e },
                  { isCustomCode: t }
                );
              },
            },
            {
              key: "complete",
              value: function () {
                this.track("complete");
              },
            },
            {
              key: "close",
              value: function () {
                this.track(this.linear ? "closeLinear" : "close");
              },
            },
            {
              key: "skip",
              value: function () {
                this.track("skip");
              },
            },
            {
              key: "click",
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : null;
                this.clickTrackingURLTemplates &&
                  this.clickTrackingURLTemplates.length &&
                  this.trackURLs(this.clickTrackingURLTemplates);
                var t = this.clickThroughURLTemplate || e;
                if (t) {
                  var i = this.linear
                      ? { CONTENTPLAYHEAD: this.progressFormatted() }
                      : {},
                    n = g.resolveURLTemplates([t], i)[0];
                  this.emit("clickthrough", n);
                }
              },
            },
            {
              key: "track",
              value: function (e) {
                var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                "closeLinear" === e &&
                  !this.trackingEvents[e] &&
                  this.trackingEvents.close &&
                  (e = "close");
                var i = this.trackingEvents[e],
                  n = this.emitAlwaysEvents.indexOf(e) > -1;
                i
                  ? (this.emit(e, ""), this.trackURLs(i))
                  : n && this.emit(e, ""),
                  t &&
                    (delete this.trackingEvents[e],
                    n &&
                      this.emitAlwaysEvents.splice(
                        this.emitAlwaysEvents.indexOf(e),
                        1
                      ));
              },
            },
            {
              key: "trackURLs",
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                this.linear &&
                  (this.creative &&
                    this.creative.mediaFiles &&
                    this.creative.mediaFiles[0] &&
                    this.creative.mediaFiles[0].fileURL &&
                    (t.ASSETURI = this.creative.mediaFiles[0].fileURL),
                  (t.CONTENTPLAYHEAD = this.progressFormatted())),
                  g.track(e, t, i);
              },
            },
            {
              key: "progressFormatted",
              value: function () {
                var e = parseInt(this.progress),
                  t = e / 3600;
                t.length < 2 && (t = "0" + t);
                var i = (e / 60) % 60;
                i.length < 2 && (i = "0" + i);
                var n = e % 60;
                return (
                  n.length < 2 && (n = "0" + i),
                  t +
                    ":" +
                    i +
                    ":" +
                    n +
                    "." +
                    parseInt(100 * (this.progress - e))
                );
              },
            },
          ]),
          t
        );
      })();
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.VPAIDCondition = void 0),
      (t.VPAIDCondition = (e) =>
        "VPAID" === e.apiFramework && "application/javascript" === e.mimeType);
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.replaceMacro = void 0),
      (t.replaceMacro = (e, t) => {
        e.getParser().addURLTemplateFilter((e) =>
          e.replace("%5Bwidth%5D", "" + t[0]).replace("%5Bheight%5D", "" + t[1])
        );
      });
  },
  function (e, t, i) {
    "use strict";
    var n =
      (this && this.__awaiter) ||
      function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, s) {
          function o(e) {
            try {
              c(n.next(e));
            } catch (t) {
              s(t);
            }
          }
          function a(e) {
            try {
              c(n.throw(e));
            } catch (t) {
              s(t);
            }
          }
          function c(e) {
            var t;
            e.done
              ? r(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(o, a);
          }
          c((n = n.apply(e, t || [])).next());
        });
      };
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.commonActions = void 0);
    const r = i(2),
      s = i(9),
      o = i(4),
      a = i(0),
      c = i(6),
      u = i(11);
    t.commonActions = (e, t, i, l, d, h, p, f, v, m) => {
      let g = !1;
      const y = e.querySelector("source:last-child"),
        T = () =>
          n(void 0, void 0, void 0, function* () {
            d.classList.remove(a.WRAPED_PLAYER_CLASS),
              u.startTargetVideoAction(d, v);
          }),
        b = () => {
          t.trackImpression();
        },
        k = () => {
          c.stopTargetVideoAction(d, v),
            e.dispatchEvent(o.playEvent),
            t.setPaused(!1);
        },
        A = () => {
          P(),
            g && "youtube" !== v && d.play(),
            i.log(new r.ReinitError("402"));
        },
        w = () => {
          t.setPaused(!0);
        },
        E = () =>
          n(void 0, void 0, void 0, function* () {
            t.complete(), T(), i.log(new s.TerminateError("skip", h));
          }),
        L = (e) => {
          t.setMuted(e.target.muted);
        },
        R = () => {
          t.click();
        },
        _ = (i) => {
          t.setProgress(i.target.currentTime),
            ((e, t) => {
              const i = Math.floor((100 / e.duration) * e.currentTime);
              (t.value = i), (t.innerHTML = i + "% played");
            })(e, f);
        },
        C = () => {
          t.skip();
        };
      e.addEventListener("error", A),
        null !== y && y.addEventListener("error", A),
        e.addEventListener(
          "canplay",
          () => {
            e.addEventListener("play", b, { once: !0 }),
              e.addEventListener("play", k),
              e.addEventListener("pause", w),
              e.addEventListener("ended", E),
              e.addEventListener("volumechange", L),
              e.addEventListener("timeupdate", _),
              e.addEventListener("click", R),
              l.addEventListener("click", C),
              "other" === v && (d.addEventListener("timeupdate", k), (g = !0));
          },
          { once: !0 }
        ),
        t.on("clickthrough", (e) => {
          window.open(e);
        });
      const P = () => {
        e.removeEventListener("play", k),
          null !== y && y.removeEventListener("error", A),
          e.removeEventListener("error", A),
          e.removeEventListener("pause", w),
          e.removeEventListener("ended", E),
          e.removeEventListener("volumechange", L),
          e.removeEventListener("timeupdate", _),
          e.removeEventListener("click", R),
          l.removeEventListener("click", C),
          "other" === v && d.removeEventListener("timeupdate", k);
      };
      t.on("skip", () => {
        T(), P(), i.log(new s.TerminateError("noError", h));
      }),
        t.on("complete", () => {
          T(), P(), i.log(new s.TerminateError("noError", h));
        }),
        t.on("skip-countdown", (e) => {
          p(parseInt(e));
        }),
        t.on("start", () => {}),
        t.on("firstQuartile", () => {}),
        t.on("midpoint", () => {}),
        t.on("thirdQuartile", () => {}),
        t.on("rewind", () => {});
    };
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.DOMClass = void 0);
    const n = i(38),
      r = i(39),
      s = i(42),
      o = i(44),
      a = i(48),
      c = i(52),
      u = i(53);
    t.DOMClass = class {
      constructor(e, t, i, n, r, s, o) {
        (this.VirtualDOMPlayer = document.createDocumentFragment()),
          (this.ua = navigator.userAgent),
          (this.updateSkipButton = (e) => {
            this.buttonSkip.innerHTML =
              0 === e ? this.makeEnablade() : "" + String(e);
          }),
          (this.makeEnablade = () => ((this.buttonSkip.disabled = !1), "►")),
          (this.parentNode = e),
          (this.Class = t),
          (this.aspect_ratio = i),
          (this.randomizer = n),
          (this.frame = r),
          (this.position = s),
          (this.playerType = o);
      }
      appendToRealDOM() {
        const e = this.appendCallback.bind(this);
        return (
          r.appendToRealDOM(
            this.parentNode,
            this.video,
            this.VirtualDOMPlayer,
            this.position,
            e
          ),
          u.autoPlayPause(
            this.parentNode,
            this.video,
            this.buttonPlay,
            this.wrapper
          )
        );
      }
      removeFromPage() {
        try {
          this.parentNode.remove(),
            window.removeEventListener("resize", this.resizeThrottler);
        } catch (e) {}
      }
      addActionsToPlayer() {
        this.VirtualDOMPlayer.appendChild(this.wrapper);
      }
      createIcons(e) {
        this.createControls(e);
      }
      hideIcons() {
        [this.buttonSkip, this.progressBar, this.buttonPlay].forEach((e) => {
          e.style.display = "none";
        });
      }
      createPlayer() {
        (this.parentNode.style.display = "block"),
          (this.VirtualDOMPlayer = document.createDocumentFragment()),
          (this.wrapper = document.createElement("div")),
          this.wrapper.classList.add(this.Class.container),
          this.createVideo(),
          this.createComment();
      }
      adContainerInit() {
        const e = document.createElement("div");
        return (
          e.classList.add(this.Class.adContainer),
          this.wrapper.appendChild(e),
          e
        );
      }
      addVideoSource(e) {
        c.addVideoSource(e, this.ua, this.video);
      }
      displayAd() {
        (this.parentNode.style.display = "block"),
          (this.wrapper.style.display = "grid");
      }
      hidePlayer() {
        this.parentNode.style.display = "none";
      }
      appendCallback() {
        n.inlineCSS(this.Class, this.randomizer, this.playerType);
      }
      createComment() {
        const e = document.createComment(
          "Copyright © digitalfrontier. All rights reserved."
        );
        this.wrapper.appendChild(e);
      }
      createVideo() {
        (this.video = s.createVideo(this.Class)),
          this.wrapper.appendChild(this.video);
      }
      createControls(e) {
        const t = o.createControls(this.Class);
        e && this.wrapper.appendChild(t.skip),
          this.wrapper.appendChild(t.all),
          this.wrapper.appendChild(t.progress),
          (this.buttonSkip = t.skip),
          (this.progressBar = t.progress),
          (this.buttonPlay = t.playButton);
      }
      setVideoHeight(e, t) {
        e.resizeThrottler = a.resetPosition(e.parentNode, e.video, e.frame, t);
      }
    };
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.inlineCSS = void 0),
      (t.inlineCSS = (e, t, i) => {
        var n;
        const r = () =>
            document.location.toString().includes("youtube") || "youtube" === i
              ? "#fc0"
              : "#00a1ff",
          s = document.createElement("style");
        (s.innerHTML = `\n\n  .df-player {\n    position: absolute;\n    box-sizing: content-box;\n    cursor: pointer;\n    z-index: 2147483648;\n    font-size: 16px;\n  }\n.${
          e.playYoutube
        } {\n    background: none;\n    border: none;\n    cursor: pointer;\n    speak: none;\n    outline: none;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    width: 3em;\n    padding: 0;\n}\n.${
          e.playYoutube
        } svg {\n    left: 0;\n    position: relative;\n    top: 0;\n    width: 100%;\n    fill: #fff;\n}\n\n\n.${
          e.video
        } {\n    width: 100%!important;\n    height: 100%;\n    object-fit: cover;\n    grid-area: 1/ -1;\n    cursor: pointer;\n    object-fit: contain;\n    background-color: black;\n    z-index: -1;\n}\n\n.${
          e.controls
        } {\n    display: flex;\n    list-style: none;\n    width: 97%;\n    justify-content: flex-start;\n    position: absolute;\n    bottom: 0;\n    opacity: 0.6;\n    box-sizing: border-box;\n    align-items: center;\n    margin: 0 1.5%;\n    height: 2em;\n}\n\n.${
          e.skip
        }:before {\n    position: relative;\n    display: block;\n    content: "${
          /en/g.test(navigator.language) ? "Skip" : "Пропустить рекламу"
        }";\n    padding-right: 5px;\n}\n.${
          e.skip
        } {\n    text-shadow: 0 0 4px rgba(0,0,0,0.75);\n    color: #fff;\n    position: absolute;\n    bottom: 4em;\n    right: 1em;\n    fill: rgb(46, 46, 46); \n    border: 1px solid rgba(255,255,255,0.5);\n    border-right: 0;\n    direction: ltr;\n    cursor: pointer;\n    padding: 10px 6px 8px 10px;\n    speak: none;\n    outline: none;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; \n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 2em;\n    font-size: 18px;\n    background: rgba(0,0,0,0.9);\n    opacity: 0.5;\n}\n.${
          e.skip
        }:hover {\n  opacity: 1;\n  border: 1px solid rgba(255,255,255,1);\n  background: rgba(0,0,0,0.9);\n  color: #fff;\n}\n.${
          e.adContainer
        } {\n    left: 0;\n    width: 100%;\n    height: 100%;\n    padding-top: 10px;\n    grid-area: 1/-1;\n}\n.${
          e.container
        } {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    clear: both;\n    top: 0;\n    display: none;\n}\n\n.${
          e.progress
        } {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 100%;\n    color: ${r()};\n    height: 4px;\n    border: none;\n    background: rgba(255,255,255,.4);\n    outline: none;\n    border: none;\n    position: absolute;\n    bottom: 2.2em;\n    width: 97%;\n    margin: 0 1.5%;\n}\n\nprogress.${
          e.progress
        }::-webkit-progress-bar {\n    background: rgba(255,255,255,.4);\n  }\nprogress.${
          e.progress
        }::-webkit-progress-value {background: ${r()};}\n\nprogress.${
          e.progress
        }::-moz-progress-bar {background: ${r()};; }\n\nprogress.${
          e.progress
        }[value] {\n    -webkit-appearance: none;\n    appearance: none;\n}\n.${
          e.container
        }:hover .${e.controls}, .${
          e.container
        }:hover {\n    opacity: 1;\n}\n\n\n@media (min-width: 320px) and (max-width: 767px) {\n    .${
          e.skip
        } {\n        font-size: 14px;\n    }\n}`),
          s.classList.add(t);
        const o = document.querySelector("script");
        null === (n = null == o ? void 0 : o.parentNode) ||
          void 0 === n ||
          n.insertBefore(s, o);
      });
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.appendToRealDOM = void 0);
    const n = i(40),
      r = i(1),
      s = i(12),
      o = i(41),
      a = i(13),
      c = (e, t) => {
        (e.style.top = t.y + "px"),
          (e.style.left = t.x + "px"),
          (e.style.width = t.width + "px"),
          (e.style.height = t.height + "px");
      },
      u = (e, t) => {
        (e.style.top = "0"),
          (e.style.left = "0"),
          (e.style.width = t.width + "px"),
          (e.style.height = t.height + "px");
      },
      l = (e, t) => {
        null !== t ? t.prepend(e) : document.body.prepend(e);
      };
    t.appendToRealDOM = (e, t, i, d, h) => {
      e.appendChild(i),
        r.isOk()
          ? ((e, t, i) => {
              const r = n.findOkContainer();
              null === r || a.isOkFeedVideo(i) ? c(e, t) : u(e, t), l(e, r);
            })(e, d, t)
          : s.isVkBox()
          ? ((e, t) => {
              const i = o.findVkBox();
              u(e, t), l(e, i);
            })(e, d)
          : ((e, t) => {
              c(e, t), l(e, null);
            })(e, d),
        h(),
        t.load();
    };
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.findOkContainer = void 0);
    const n = i(1);
    t.findOkContainer = () => {
      if (!n.isOk()) return null;
      return document.querySelector(".vp-layer");
    };
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.findVkBox = void 0),
      (t.findVkBox = () => document.querySelector("#mv_player_box"));
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.createVideo = void 0);
    const n = i(43);
    t.createVideo = (e) => {
      const t = document.createElement("video");
      return (
        t.classList.add(e.video),
        (t.controls = !1),
        n.attributeSetter(
          [
            { attr: "preload", value: "auto" },
            { attr: "playsinline", value: "" },
            { attr: "x-webkit-airplay", value: "allow" },
            { attr: "webkit-playsinline", value: "" },
            { attr: "pip", value: "false" },
            { attr: "webkit-playsinline", value: "webkit-playsinline" },
            { attr: "playsinline", value: "" },
          ],
          t
        ),
        t
      );
    };
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.attributeSetter = void 0),
      (t.attributeSetter = (e, t) => {
        e.forEach(({ attr: e, value: i }) => t.setAttribute(e, i.toString()));
      });
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.createControls = void 0);
    const n = i(14),
      r = i(45),
      s = i(4);
    t.createControls = (e) => {
      const t = document.createElement("div");
      t.classList.add(e.controls);
      const i = n.createButton("skip", e);
      i.setAttribute("aria-label", "Skip"),
        i.classList.add(e.skip),
        (i.disabled = !0);
      const o = document.createElement("progress");
      o.setAttribute("max", "100"),
        o.setAttribute("value", "0"),
        o.setAttribute("min", "0"),
        o.classList.add(e.progress);
      const a = r.drawPlayButton(e);
      return (
        a.addEventListener("click", function () {
          "false" === this.dataset.play
            ? this.dispatchEvent(s.playEvent)
            : this.dispatchEvent(s.pauseEvent);
        }),
        t.appendChild(a),
        { skip: i, progress: o, playButton: a, all: t }
      );
    };
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.drawPlayButton = void 0);
    const n = i(14),
      r = i(46),
      s = i(47);
    t.drawPlayButton = (e) => {
      const t = (e) =>
        `<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">${e}</svg>`;
      let i = !1;
      const o = n.createButton("playYoutube", e);
      return (
        (o.dataset.play = "" + i),
        (o.onclick = () => {
          (i = !i),
            (o.dataset.play = "" + i),
            (o.innerHTML = t(i ? r.playPath : s.pausePath));
        }),
        (o.innerHTML = t(s.pausePath)),
        o
      );
    };
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.playPath = void 0),
      (t.playPath =
        '<path d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path>');
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.pausePath = void 0),
      (t.pausePath =
        '<path d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path>');
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.resetPosition = void 0);
    const n = i(3),
      r = i(49),
      s = i(50),
      o = i(1),
      a = i(12),
      c = i(13),
      u = i(51),
      l = (e, t) => {
        (e.style.top = t.y + "px"),
          (e.style.left = t.x + "px"),
          (e.style.width = t.width + "px"),
          (e.style.height = t.height + "px"),
          (e.style.position = "absolute");
      },
      d = (e) => {
        (e.style.left = "0"), (e.style.top = "0");
      },
      h = (e, t, i, n) =>
        u.isInIframe()
          ? ((e) => {
              (e.style.left = "0"),
                (e.style.top = "0"),
                (e.style.width = "100%"),
                (e.style.height = "100%");
            })(e)
          : s.isYouTubeMini()
          ? ((e, t) => {
              (e.style.position = "fixed"),
                l(e, t),
                (e.style.top = String(
                  document.documentElement.clientHeight - t.y
                )),
                (e.style.zIndex = "100000");
            })(e, t)
          : r.isYouTubeWide()
          ? ((e, t) => {
              (e.style.left = "0"), (e.style.width = t.width + 2 * t.x + "px");
            })(e, t)
          : a.isVkBox()
          ? d(e)
          : o.isOk() && c.isOkFeedVideo(n)
          ? ((e.style.zIndex = "5000"), void d(e))
          : void 0;
    t.resetPosition = (e, t, i, r) => {
      let s = n.getPosition(i);
      let o;
      const a = [],
        c =
          ((u = () => {
            if (!t) return void window.removeEventListener("resize", c);
            const o = n.getPosition(i);
            null !== r && r.resizeAd(o.width, o.height, "normal"),
              l(e, o),
              h(e, o, 0, i),
              (s = o);
          }),
          () => {
            t &&
              (a.push(u),
              o ||
                (o = setTimeout(function () {
                  o = null;
                  const e = a.pop();
                  "function" == typeof e && e(), (a.length = 0);
                }, 150)));
          });
      var u;
      return (
        window.addEventListener("resize", c),
        setTimeout(() => {
          c();
        }, 50),
        setTimeout(() => {
          c();
        }, 500),
        c
      );
    };
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.isYouTubeWide = void 0),
      (t.isYouTubeWide = () => {
        var e;
        const t =
          null === (e = document.querySelector("#player-theater-container")) ||
          void 0 === e
            ? void 0
            : e.querySelector("#player-container");
        return !!t && t.hasChildNodes();
      });
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.isYouTubeMini = void 0),
      (t.isYouTubeMini = () =>
        !!document.querySelector(".ytp-player-minimized"));
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.isInIframe = void 0),
      (t.isInIframe = () => {
        try {
          return window.self !== window.top;
        } catch (e) {
          return !0;
        }
      });
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.addVideoSource = void 0),
      (t.addVideoSource = (e, t, i) => {
        e.forEach((e) => {
          const n = document.createElement("source");
          (n.src = e.src),
            (n.type = e.type),
            (n.media = t.search(/Edge/) > 0 ? "" : e.media),
            i.appendChild(n);
        });
      });
  },
  function (e, t, i) {
    "use strict";
    var n =
      (this && this.__awaiter) ||
      function (e, t, i, n) {
        return new (i || (i = Promise))(function (r, s) {
          function o(e) {
            try {
              c(n.next(e));
            } catch (t) {
              s(t);
            }
          }
          function a(e) {
            try {
              c(n.throw(e));
            } catch (t) {
              s(t);
            }
          }
          function c(e) {
            var t;
            e.done
              ? r(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(o, a);
          }
          c((n = n.apply(e, t || [])).next());
        });
      };
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.autoPlayPause = void 0);
    const r = i(4);
    t.autoPlayPause = (e, t, i, s) => {
      const o = () =>
        n(void 0, void 0, void 0, function* () {
          if ("true" === i.dataset.play || !s.style.display) return;
          if (!t)
            return (
              window.removeEventListener("scroll", o),
              void window.removeEventListener("resize", o)
            );
          let n = e.getBoundingClientRect();
          n.top > -n.height / 2 &&
          n.bottom <= document.documentElement.clientHeight + n.height / 2 == 1
            ? e.dispatchEvent(r.playEvent)
            : e.dispatchEvent(r.pauseEvent);
        });
      return (
        setTimeout(o, 0),
        window.addEventListener("scroll", o, !1),
        window.addEventListener("resize", o, !1),
        o
      );
    };
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.configCreativesForVideo = void 0),
      (t.configCreativesForVideo = (e, t) => {
        if (1 === e.length)
          return [
            {
              src: e[0].fileURL,
              type: e[0].mimeType,
              media: "all",
              poster: "",
            },
          ];
        return e
          .sort((e, t) => (e.width < t.width ? -1 : 1))
          .reduce(
            (e, i, n) => (
              e.push({
                src: i.fileURL,
                type: i.mimeType,
                media: t[n],
                poster: "",
              }),
              e
            ),
            []
          );
      });
  },
  function (e, t, i) {
    "use strict";
    (function (e) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.initVPAID = void 0);
      const n = i(56),
        r = i(2),
        s = i(57),
        o = i(58),
        a = i(59),
        c = i(3);
      t.initVPAID = (t, i, u, l, d, h, p, f, v, m) => {
        if (!n.checkSpec(t))
          return (
            f.log(
              new r.ReinitError(
                "VPAID не валиден, так как не предоставляет все обязательные методы"
              )
            ),
            null
          );
        return () => {
          t.handshakeVersion("2.0");
          const n = c.getPosition(l);
          let p = e.setTimeout(() => {
            f.log(new r.ReinitError("too long load vpaid"));
          }, 117e3);
          t.initAd(
            n.width,
            n.height,
            "normal",
            -1,
            { AdParameters: u },
            { slot: d, videoSlot: h, videoSlotCanAutoPlay: !0 }
          ),
            v(m, t),
            setTimeout(() => {
              t.pauseAd();
            }, 0);
          const g = s.listenEvents(h, t, i, f, p, m);
          for (let e in g) {
            const i = g[e];
            a.subscribeGuard(i) && t.subscribe(i, e);
          }
          o.bindActions(t, i);
          const y = () => {
            i.close();
            for (let e in g) {
              const i = g[e];
              a.subscribeGuard(i) && t.unsubscribe(i, e);
            }
          };
          return window.addEventListener("beforeunload", y, !1), y;
        };
      };
    }.call(this, i(15)));
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.checkSpec = void 0),
      (t.checkSpec = (e) =>
        !!(
          e.handshakeVersion &&
          "function" == typeof e.handshakeVersion &&
          e.initAd &&
          "function" == typeof e.initAd &&
          e.startAd &&
          "function" == typeof e.startAd &&
          e.stopAd &&
          "function" == typeof e.stopAd &&
          e.skipAd &&
          "function" == typeof e.skipAd &&
          e.resizeAd &&
          "function" == typeof e.resizeAd &&
          e.pauseAd &&
          "function" == typeof e.pauseAd &&
          e.resumeAd &&
          "function" == typeof e.resumeAd &&
          e.expandAd &&
          "function" == typeof e.expandAd &&
          e.collapseAd &&
          "function" == typeof e.collapseAd &&
          e.subscribe &&
          "function" == typeof e.subscribe &&
          e.unsubscribe &&
          "function" == typeof e.unsubscribe
        ));
  },
  function (e, t, i) {
    "use strict";
    (function (e) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.listenEvents = void 0);
      const n = i(2),
        r = i(6);
      t.listenEvents = (t, i, s, o, a, c) => {
        let u;
        return {
          AdLoaded: () => {
            i.startAd(),
              clearTimeout(a),
              (u = e.setTimeout(() => {
                o.log(new n.ReinitError("too long load"));
              }, 8e3));
          },
          AdVolumeChange: () => {
            t.addEventListener("volumechange", (e) => {
              s.setMuted(e.target.muted);
            });
          },
          AdVideoStart: () => {
            s.setPaused(!1), r.stopTargetVideoAction(c.frame, "youtube");
          },
          AdStarted: () => {
            clearTimeout(u),
              c.displayAd(),
              c.video.play(),
              i.resumeAd(),
              s.trackImpression();
          },
          AdPlaying: () => {},
          AdError: (e) => {
            o.log(new n.ReinitError(e.message));
          },
          AdLog: (e) => {},
          AdImpression: () => {},
          AdStopped: () => {
            s.complete();
          },
          AdVideoComplete: () => {},
          AdUserClose: () => {},
          AdPaused: () => {},
          AdClickThru: () => {
            s.click();
          },
          AdVideoFirstQuartile: () => {
            s.setProgress(25);
          },
          AdVideoMidpoint: () => {
            s.setProgress(50);
          },
          AdVideoThirdQuartile: () => {
            s.setProgress(75);
          },
          AdDurationChange: () => {},
          AdInteraction: () => {},
          AdUserAcceptInvitation: () => {},
        };
      };
    }.call(this, i(15)));
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.bindActions = void 0),
      (t.bindActions = (e, t) => {
        t.on("resume", () => {
          e.resumeAd();
        }),
          t.on("pause", () => {
            e.pauseAd();
          }),
          t.on("skip", () => {
            e.skipAd();
          });
      });
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.subscribeGuard = void 0),
      (t.subscribeGuard = (e) => "function" == typeof e);
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getWitdhAndHeight = void 0),
      (t.getWitdhAndHeight = (e, t) => {
        const i = e.offsetWidth;
        return [i, Number(i * t)];
      });
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.sendMessage = void 0);
    const n = i(62);
    t.sendMessage = (e) => {
      n.isIframe(e) &&
        (e.onload = () => {
          var t, i;
          let n = JSON.stringify({
            event: "listening",
            id: e.id,
            channel: "widget",
          });
          null === (t = e.contentWindow) ||
            void 0 === t ||
            t.postMessage(n, "https://www.youtube.com"),
            (n = JSON.stringify({
              event: "command",
              func: "addEventListener",
              args: ["onStateChange"],
              id: e.id,
              channel: "widget",
            })),
            null === (i = e.contentWindow) ||
              void 0 === i ||
              i.postMessage(n, "https://www.youtube.com");
        });
    };
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.isIframe = void 0),
      (t.isIframe = (e) => void 0 !== e.contentWindow);
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.startListening = void 0);
    const n = i(4);
    t.startListening = (e, t) => {
      let i = !1;
      window.addEventListener("message", () => {}, { once: !0 }),
        window.addEventListener("message", (r) => {
          try {
            var s = JSON.parse(r.data);
          } catch (o) {}
          if (
            "https://www.youtube.com" === r.origin &&
            void 0 !== r.data &&
            s.id === e.frame.id
          )
            try {
              if ("onStateChange" !== s.event) return;
              !1 === i && setTimeout(e.autoPlayFn, 0),
                (i = !0),
                1 === s.info && t.dispatchEvent(n.playEvent);
            } catch (r) {}
        });
    };
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.isZeroSize = void 0);
    const n = i(65),
      r = i(3);
    t.isZeroSize = (e) => {
      if (null !== n.findFlowplayer) return !1;
      const t = r.getPosition(e);
      return t.height < 1 || t.width < 1;
    };
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.findFlowplayer = void 0);
    t.findFlowplayer = () => document.querySelector(".fp-engine");
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.hasBlacklistClasses = void 0);
    const n = /banner/;
    t.hasBlacklistClasses = (e) => {
      const t = Array.from(e.classList).join();
      return n.test(t);
    };
  },
  function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.isGif = void 0),
      (t.isGif = (e) => e.classList.contains("gif_video"));
  },
]);
