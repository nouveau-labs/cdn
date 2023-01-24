!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.DvcExternalAPI = t())
    : (e.DvcExternalAPI = t());
})(window, function () {
  return (function (e) {
    var t = {};
    function i(n) {
      if (t[n]) return t[n].exports;
      var r = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
    }
    return (
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
      (i.p = "/console/"),
      i((i.s = 1))
    );
  })([
    function (e, t, i) {
      "use strict";
      var n,
        r = "object" == typeof Reflect ? Reflect : null,
        s =
          r && "function" == typeof r.apply
            ? r.apply
            : function (e, t, i) {
                return Function.prototype.apply.call(e, t, i);
              };
      n =
        r && "function" == typeof r.ownKeys
          ? r.ownKeys
          : Object.getOwnPropertySymbols
          ? function (e) {
              return Object.getOwnPropertyNames(e).concat(
                Object.getOwnPropertySymbols(e)
              );
            }
          : function (e) {
              return Object.getOwnPropertyNames(e);
            };
      var a =
        Number.isNaN ||
        function (e) {
          return e != e;
        };
      function o() {
        o.init.call(this);
      }
      (e.exports = o),
        (e.exports.once = function (e, t) {
          return new Promise(function (i, n) {
            function r(i) {
              e.removeListener(t, s), n(i);
            }
            function s() {
              "function" == typeof e.removeListener &&
                e.removeListener("error", r),
                i([].slice.call(arguments));
            }
            f(e, t, s, { once: !0 }),
              "error" !== t &&
                (function (e, t, i) {
                  "function" == typeof e.on && f(e, "error", t, i);
                })(e, r, { once: !0 });
          });
        }),
        (o.EventEmitter = o),
        (o.prototype._events = void 0),
        (o.prototype._eventsCount = 0),
        (o.prototype._maxListeners = void 0);
      var d = 10;
      function c(e) {
        if ("function" != typeof e)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof e
          );
      }
      function p(e) {
        return void 0 === e._maxListeners
          ? o.defaultMaxListeners
          : e._maxListeners;
      }
      function u(e, t, i, n) {
        var r, s, a, o;
        if (
          (c(i),
          void 0 === (s = e._events)
            ? ((s = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== s.newListener &&
                (e.emit("newListener", t, i.listener ? i.listener : i),
                (s = e._events)),
              (a = s[t])),
          void 0 === a)
        )
          (a = s[t] = i), ++e._eventsCount;
        else if (
          ("function" == typeof a
            ? (a = s[t] = n ? [i, a] : [a, i])
            : n
            ? a.unshift(i)
            : a.push(i),
          (r = p(e)) > 0 && a.length > r && !a.warned)
        ) {
          a.warned = !0;
          var d = new Error(
            "Possible EventEmitter memory leak detected. " +
              a.length +
              " " +
              String(t) +
              " listeners added. Use emitter.setMaxListeners() to increase limit"
          );
          (d.name = "MaxListenersExceededWarning"),
            (d.emitter = e),
            (d.type = t),
            (d.count = a.length),
            (o = d),
            console && console.warn && console.warn(o);
        }
        return e;
      }
      function l() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          );
      }
      function h(e, t, i) {
        var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: i },
          r = l.bind(n);
        return (r.listener = i), (n.wrapFn = r), r;
      }
      function m(e, t, i) {
        var n = e._events;
        if (void 0 === n) return [];
        var r = n[t];
        return void 0 === r
          ? []
          : "function" == typeof r
          ? i
            ? [r.listener || r]
            : [r]
          : i
          ? (function (e) {
              for (var t = new Array(e.length), i = 0; i < t.length; ++i)
                t[i] = e[i].listener || e[i];
              return t;
            })(r)
          : v(r, r.length);
      }
      function g(e) {
        var t = this._events;
        if (void 0 !== t) {
          var i = t[e];
          if ("function" == typeof i) return 1;
          if (void 0 !== i) return i.length;
        }
        return 0;
      }
      function v(e, t) {
        for (var i = new Array(t), n = 0; n < t; ++n) i[n] = e[n];
        return i;
      }
      function f(e, t, i, n) {
        if ("function" == typeof e.on) n.once ? e.once(t, i) : e.on(t, i);
        else {
          if ("function" != typeof e.addEventListener)
            throw new TypeError(
              'The "emitter" argument must be of type EventEmitter. Received type ' +
                typeof e
            );
          e.addEventListener(t, function r(s) {
            n.once && e.removeEventListener(t, r), i(s);
          });
        }
      }
      Object.defineProperty(o, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return d;
        },
        set: function (e) {
          if ("number" != typeof e || e < 0 || a(e))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          d = e;
        },
      }),
        (o.init = function () {
          (void 0 !== this._events &&
            this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (o.prototype.setMaxListeners = function (e) {
          if ("number" != typeof e || e < 0 || a(e))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          return (this._maxListeners = e), this;
        }),
        (o.prototype.getMaxListeners = function () {
          return p(this);
        }),
        (o.prototype.emit = function (e) {
          for (var t = [], i = 1; i < arguments.length; i++)
            t.push(arguments[i]);
          var n = "error" === e,
            r = this._events;
          if (void 0 !== r) n = n && void 0 === r.error;
          else if (!n) return !1;
          if (n) {
            var a;
            if ((t.length > 0 && (a = t[0]), a instanceof Error)) throw a;
            var o = new Error(
              "Unhandled error." + (a ? " (" + a.message + ")" : "")
            );
            throw ((o.context = a), o);
          }
          var d = r[e];
          if (void 0 === d) return !1;
          if ("function" == typeof d) s(d, this, t);
          else {
            var c = d.length,
              p = v(d, c);
            for (i = 0; i < c; ++i) s(p[i], this, t);
          }
          return !0;
        }),
        (o.prototype.addListener = function (e, t) {
          return u(this, e, t, !1);
        }),
        (o.prototype.on = o.prototype.addListener),
        (o.prototype.prependListener = function (e, t) {
          return u(this, e, t, !0);
        }),
        (o.prototype.once = function (e, t) {
          return c(t), this.on(e, h(this, e, t)), this;
        }),
        (o.prototype.prependOnceListener = function (e, t) {
          return c(t), this.prependListener(e, h(this, e, t)), this;
        }),
        (o.prototype.removeListener = function (e, t) {
          var i, n, r, s, a;
          if ((c(t), void 0 === (n = this._events))) return this;
          if (void 0 === (i = n[e])) return this;
          if (i === t || i.listener === t)
            0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete n[e],
                n.removeListener &&
                  this.emit("removeListener", e, i.listener || t));
          else if ("function" != typeof i) {
            for (r = -1, s = i.length - 1; s >= 0; s--)
              if (i[s] === t || i[s].listener === t) {
                (a = i[s].listener), (r = s);
                break;
              }
            if (r < 0) return this;
            0 === r
              ? i.shift()
              : (function (e, t) {
                  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                  e.pop();
                })(i, r),
              1 === i.length && (n[e] = i[0]),
              void 0 !== n.removeListener &&
                this.emit("removeListener", e, a || t);
          }
          return this;
        }),
        (o.prototype.off = o.prototype.removeListener),
        (o.prototype.removeAllListeners = function (e) {
          var t, i, n;
          if (void 0 === (i = this._events)) return this;
          if (void 0 === i.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== i[e] &&
                  (0 == --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete i[e]),
              this
            );
          if (0 === arguments.length) {
            var r,
              s = Object.keys(i);
            for (n = 0; n < s.length; ++n)
              "removeListener" !== (r = s[n]) && this.removeAllListeners(r);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" == typeof (t = i[e])) this.removeListener(e, t);
          else if (void 0 !== t)
            for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n]);
          return this;
        }),
        (o.prototype.listeners = function (e) {
          return m(this, e, !0);
        }),
        (o.prototype.rawListeners = function (e) {
          return m(this, e, !1);
        }),
        (o.listenerCount = function (e, t) {
          return "function" == typeof e.listenerCount
            ? e.listenerCount(t)
            : g.call(e, t);
        }),
        (o.prototype.listenerCount = g),
        (o.prototype.eventNames = function () {
          return this._eventsCount > 0 ? n(this._events) : [];
        });
    },
    function (e, t, i) {
      e.exports = i(2).default;
    },
    function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, "default", function () {
          return v;
        });
      var n = i(0),
        r = i.n(n);
      var s = function (e) {
        var t,
          i = e.scope,
          n = e.window,
          r = e.windowForEventListening || window,
          s = e.allowedOrigin,
          a = {},
          o = [],
          d = {},
          c = !1,
          p = function (e) {
            var t;
            try {
              t = JSON.parse(e.data);
            } catch (e) {
              return;
            }
            if ((!s || e.origin === s) && t && t.postis && t.scope === i) {
              var n = a[t.method];
              if (n)
                for (var r = 0; r < n.length; r++) n[r].call(null, t.params);
              else
                (d[t.method] = d[t.method] || []), d[t.method].push(t.params);
            }
          };
        r.addEventListener("message", p, !1);
        var u = {
            listen: function (e, t) {
              (a[e] = a[e] || []), a[e].push(t);
              var i = d[e];
              if (i)
                for (var n = a[e], r = 0; r < n.length; r++)
                  for (var s = 0; s < i.length; s++) n[r].call(null, i[s]);
              delete d[e];
            },
            send: function (e) {
              var t = e.method;
              (c || "__ready__" === e.method) &&
              n &&
              "function" == typeof n.postMessage
                ? n.postMessage(
                    JSON.stringify({
                      postis: !0,
                      scope: i,
                      method: t,
                      params: e.params,
                    }),
                    "*"
                  )
                : o.push(e);
            },
            ready: function (e) {
              c
                ? e()
                : setTimeout(function () {
                    u.ready(e);
                  }, 50);
            },
            destroy: function (e) {
              clearInterval(t),
                (c = !1),
                r &&
                  "function" == typeof r.removeEventListener &&
                  r.removeEventListener("message", p),
                e && e();
            },
          },
          l = +new Date() + Math.random() + "";
        return (
          (t = setInterval(function () {
            u.send({ method: "__ready__", params: l });
          }, 50)),
          u.listen("__ready__", function (e) {
            if (e === l) {
              clearInterval(t), (c = !0);
              for (var i = 0; i < o.length; i++) u.send(o[i]);
              o = [];
            } else u.send({ method: "__ready__", params: e });
          }),
          u
        );
      };
      const a = { window: window.opener || window.parent };
      class o {
        constructor({ postisOptions: e } = {}) {
          (this.postis = s({ ...a, ...e })),
            (this._receiveCallback = () => {}),
            this.postis.listen("message", (e) => this._receiveCallback(e));
        }
        dispose() {
          this.postis.destroy();
        }
        send(e) {
          this.postis.send({ method: "message", params: e });
        }
        setReceiveCallback(e) {
          this._receiveCallback = e;
        }
      }
      class d {
        constructor({ backend: e } = {}) {
          (this._listeners = new Map()),
            (this._requestID = 0),
            (this._responseHandlers = new Map()),
            (this._unprocessedMessages = new Set()),
            (this.addListener = this.on),
            e && this.setBackend(e);
        }
        _disposeBackend() {
          this._backend && (this._backend.dispose(), (this._backend = null));
        }
        _onMessageReceived(e) {
          if ("response" === e.type) {
            const t = this._responseHandlers.get(e.id);
            t && (t(e), this._responseHandlers.delete(e.id));
          } else
            "request" === e.type
              ? this.emit("request", e.data, (t, i) => {
                  this._backend.send({
                    type: "response",
                    error: i,
                    id: e.id,
                    result: t,
                  });
                })
              : this.emit("event", e.data);
        }
        dispose() {
          this._responseHandlers.clear(),
            this._unprocessedMessages.clear(),
            this.removeAllListeners(),
            this._disposeBackend();
        }
        emit(e, ...t) {
          const i = this._listeners.get(e);
          let n = !1;
          return (
            i &&
              i.size &&
              i.forEach((e) => {
                n = e(...t) || n;
              }),
            n || this._unprocessedMessages.add(t),
            n
          );
        }
        on(e, t) {
          let i = this._listeners.get(e);
          return (
            i || ((i = new Set()), this._listeners.set(e, i)),
            i.add(t),
            this._unprocessedMessages.forEach((e) => {
              t(...e) && this._unprocessedMessages.delete(e);
            }),
            this
          );
        }
        removeAllListeners(e) {
          return e ? this._listeners.delete(e) : this._listeners.clear(), this;
        }
        removeListener(e, t) {
          const i = this._listeners.get(e);
          return i && i.delete(t), this;
        }
        sendEvent(e = {}) {
          this._backend && this._backend.send({ type: "event", data: e });
        }
        sendRequest(e) {
          if (!this._backend)
            return Promise.reject(new Error("No transport backend defined!"));
          this._requestID++;
          const t = this._requestID;
          return new Promise((i, n) => {
            this._responseHandlers.set(t, ({ error: e, result: t }) => {
              void 0 !== t
                ? i(t)
                : n(
                    void 0 !== e ? e : new Error("Unexpected response format!")
                  );
            }),
              this._backend.send({ type: "request", data: e, id: t });
          });
        }
        setBackend(e) {
          this._disposeBackend(),
            (this._backend = e),
            this._backend.setReceiveCallback(
              this._onMessageReceived.bind(this)
            );
        }
      }
      function c(e, t) {
        return e.sendRequest({ type: "devices", name: "setDevice", device: t });
      }
      const p = ["css/all.css", "libs/alwaysontop.min.js"],
        u = {
          answerKnockingParticipant: "answer-knocking-participant",
          approveVideo: "approve-video",
          askToUnmute: "ask-to-unmute",
          avatarUrl: "avatar-url",
          cancelPrivateChat: "cancel-private-chat",
          displayName: "display-name",
          e2eeKey: "e2ee-key",
          email: "email",
          toggleLobby: "toggle-lobby",
          hangup: "video-hangup",
          initiatePrivateChat: "initiate-private-chat",
          kickParticipant: "kick-participant",
          muteEveryone: "mute-everyone",
          overwriteConfig: "overwrite-config",
          password: "password",
          pinParticipant: "pin-participant",
          rejectParticipant: "reject-participant",
          resizeLargeVideo: "resize-large-video",
          sendChatMessage: "send-chat-message",
          sendEndpointTextMessage: "send-endpoint-text-message",
          sendTones: "send-tones",
          setFollowMe: "set-follow-me",
          setLargeVideoParticipant: "set-large-video-participant",
          setMediaEncryptionKey: "set-media-encryption-key",
          setParticipantVolume: "set-participant-volume",
          setTileView: "set-tile-view",
          setVideoQuality: "set-video-quality",
          startRecording: "start-recording",
          startShareVideo: "start-share-video",
          stopRecording: "stop-recording",
          stopShareVideo: "stop-share-video",
          subject: "subject",
          submitFeedback: "submit-feedback",
          toggleAudio: "toggle-audio",
          toggleCamera: "toggle-camera",
          toggleCameraMirror: "toggle-camera-mirror",
          toggleChat: "toggle-chat",
          toggleE2EE: "toggle-e2ee",
          toggleFilmStrip: "toggle-film-strip",
          toggleModeration: "toggle-moderation",
          toggleRaiseHand: "toggle-raise-hand",
          toggleShareAudio: "toggle-share-audio",
          toggleShareScreen: "toggle-share-screen",
          toggleTileView: "toggle-tile-view",
          toggleVirtualBackgroundDialog: "toggle-virtual-background",
          toggleVideo: "toggle-video",
        },
        l = {
          "avatar-changed": "avatarChanged",
          "audio-availability-changed": "audioAvailabilityChanged",
          "audio-mute-status-changed": "audioMuteStatusChanged",
          "browser-support": "browserSupport",
          "camera-error": "cameraError",
          "chat-updated": "chatUpdated",
          "content-sharing-participants-changed":
            "contentSharingParticipantsChanged",
          "data-channel-opened": "dataChannelOpened",
          "device-list-changed": "deviceListChanged",
          "display-name-change": "displayNameChange",
          "email-change": "emailChange",
          "error-occurred": "errorOccurred",
          "endpoint-text-message-received": "endpointTextMessageReceived",
          "feedback-submitted": "feedbackSubmitted",
          "feedback-prompt-displayed": "feedbackPromptDisplayed",
          "filmstrip-display-changed": "filmstripDisplayChanged",
          "incoming-message": "incomingMessage",
          "knocking-participant": "knockingParticipant",
          log: "log",
          "mic-error": "micError",
          "moderation-participant-approved": "moderationParticipantApproved",
          "moderation-participant-rejected": "moderationParticipantRejected",
          "moderation-status-changed": "moderationStatusChanged",
          "mouse-enter": "mouseEnter",
          "mouse-leave": "mouseLeave",
          "mouse-move": "mouseMove",
          "outgoing-message": "outgoingMessage",
          "participant-joined": "participantJoined",
          "participant-kicked-out": "participantKickedOut",
          "participant-left": "participantLeft",
          "participant-role-changed": "participantRoleChanged",
          "password-required": "passwordRequired",
          "proxy-connection-event": "proxyConnectionEvent",
          "raise-hand-updated": "raiseHandUpdated",
          "recording-link-available": "recordingLinkAvailable",
          "recording-status-changed": "recordingStatusChanged",
          "video-ready-to-close": "readyToClose",
          "video-conference-joined": "videoConferenceJoined",
          "video-conference-left": "videoConferenceLeft",
          "video-availability-changed": "videoAvailabilityChanged",
          "video-mute-status-changed": "videoMuteStatusChanged",
          "video-quality-changed": "videoQualityChanged",
          "screen-sharing-status-changed": "screenSharingStatusChanged",
          "dominant-speaker-changed": "dominantSpeakerChanged",
          "subject-change": "subjectChange",
          "suspend-detected": "suspendDetected",
          "tile-view-changed": "tileViewChanged",
          "toolbar-button-clicked": "toolbarButtonClicked",
          "meeting-mode-changed": "meetingModeChanged",
        };
      let h = 0;
      function m(e, t) {
        e._numberOfParticipants += t;
      }
      function g(e) {
        let t;
        return (
          "string" == typeof e &&
          null !== String(e).match(/([0-9]*\.?[0-9]+)(em|pt|px|%)$/)
            ? (t = e)
            : "number" == typeof e && (t = e + "px"),
          t
        );
      }
      class v extends r.a {
        constructor(e, ...t) {
          super();
          const {
            width: i = "100%",
            height: n = "100%",
            parentNode: r = document.body,
            configOverwrite: s = {},
            interfaceConfigOverwrite: a = {},
            onload: c,
            stripOptions: p,
            invitees: u,
            devices: l,
            userInfo: m,
            e2eeKey: g,
          } = (function (e) {
            if (!e.length) return {};
            switch (typeof e[0]) {
              case "string":
              case "undefined": {
                const [t, i, n, r, s, a, o, d, c] = e;
                return {
                  roomName: t,
                  width: i,
                  height: n,
                  parentNode: r,
                  configOverwrite: s,
                  interfaceConfigOverwrite: a,
                  jwt: o,
                  pwd: d,
                  onload: c,
                };
              }
              case "object":
                return e[0];
              default:
                throw new Error("Can't parse the arguments!");
            }
          })(t);
          if (
            ((this._parentNode = r),
            e.includes("#")
              ? (this._url = `${e}&jitsi_meet_external_api_id=${h}`)
              : (this._url = `${e}#jitsi_meet_external_api_id=${h}`),
            p)
          ) {
            (this.isStripMode = !0),
              (this.stripHeight = "65px"),
              (this.stripWidth = p.stripWidth),
              (this.expandedHeight = p.expandedHeight),
              (this.expandedWidth = p.expandedWidth);
            const e = p.stripPosition ? p.stripPosition : "top";
            (this._url = `${this._url}&strip_position=${e}`),
              this._createIFrame(this.stripHeight, p.stripWidth, c);
          } else this._createIFrame(n, i, c);
          (this._transport = new d({
            backend: new o({
              postisOptions: {
                allowedOrigin: new URL(this._url).origin,
                scope: "jitsi_meet_external_api_" + h,
                window: this._frame.contentWindow,
              },
            }),
          })),
            Array.isArray(u) && u.length > 0 && this.invite(u),
            (this._tmpE2EEKey = g),
            (this._isLargeVideoVisible = !0),
            (this._numberOfParticipants = 0),
            (this._participants = {}),
            (this._myUserID = void 0),
            (this._onStageParticipant = void 0),
            this._setupListeners(),
            h++;
        }
        _createIFrame(e, t, i) {
          (this._frame = document.createElement("iframe")),
            (this._frame.allow =
              "camera; microphone; display-capture; autoplay; clipboard-write"),
            (this._frame.src = this._url),
            (this._frame.name = "dvcConferenceFrame"),
            (this._frame.id = "dvcConferenceFrame"),
            this._setSize(e, t),
            this._frame.setAttribute("allowFullScreen", "true"),
            (this._frame.style.border = 0),
            i && (this._frame.onload = i),
            (this._frame = this._parentNode.appendChild(this._frame));
        }
        _getAlwaysOnTopResources() {
          const e = this._frame.contentWindow,
            t = e.document;
          let i = "";
          const n = t.querySelector("base");
          if (n && n.href) i = n.href;
          else {
            const { protocol: t, host: n } = e.location;
            i = `${t}//${n}`;
          }
          return p.map((e) => new URL(e, i).href);
        }
        _getFormattedDisplayName(e) {
          const { formattedDisplayName: t } = this._participants[e] || {};
          return t;
        }
        _getOnStageParticipant() {
          return this._onStageParticipant;
        }
        _getLargeVideo() {
          const e = this.getIFrame();
          if (
            this._isLargeVideoVisible &&
            e &&
            e.contentWindow &&
            e.contentWindow.document
          )
            return e.contentWindow.document.getElementById("largeVideo");
        }
        _getParticipantVideo(e) {
          const t = this.getIFrame();
          if (t && t.contentWindow && t.contentWindow.document)
            return void 0 === e || e === this._myUserID
              ? t.contentWindow.document.getElementById("localVideo_container")
              : t.contentWindow.document.querySelector(
                  `#participant_${e} video`
                );
        }
        _setSize(e, t) {
          const i = g(e),
            n = g(t);
          void 0 !== i && ((this._height = e), (this._frame.style.height = i)),
            void 0 !== n && ((this._width = t), (this._frame.style.width = n));
        }
        _setupListeners() {
          this._transport.on("event", ({ name: e, ...t }) => {
            const i = t.id;
            switch (e) {
              case "video-conference-joined":
                void 0 !== this._tmpE2EEKey &&
                  (this.executeCommand(u.e2eeKey, this._tmpE2EEKey),
                  (this._tmpE2EEKey = void 0)),
                  (this._myUserID = i),
                  (this._participants[i] = { avatarURL: t.avatarURL });
              case "participant-joined":
                (this._participants[i] = this._participants[i] || {}),
                  (this._participants[i].displayName = t.displayName),
                  (this._participants[i].formattedDisplayName =
                    t.formattedDisplayName),
                  m(this, 1);
                break;
              case "participant-left":
                m(this, -1), delete this._participants[i];
                break;
              case "display-name-change": {
                const e = this._participants[i];
                e &&
                  ((e.displayName = t.displayname),
                  (e.formattedDisplayName = t.formattedDisplayName));
                break;
              }
              case "email-change": {
                const e = this._participants[i];
                e && (e.email = t.email);
                break;
              }
              case "avatar-changed": {
                const e = this._participants[i];
                e && (e.avatarURL = t.avatarURL);
                break;
              }
              case "on-stage-participant-changed":
                (this._onStageParticipant = i), this.emit("largeVideoChanged");
                break;
              case "large-video-visibility-changed":
                (this._isLargeVideoVisible = t.isVisible),
                  this.emit("largeVideoChanged");
                break;
              case "video-conference-left":
                m(this, -1), delete this._participants[this._myUserID];
                break;
              case "video-quality-changed":
                this._videoQuality = t.videoQuality;
                break;
              case "local-storage-changed":
                return !0;
              case "resize-strip":
                return (
                  this.isStripMode &&
                    ("INCREASE" === t.resizeMode
                      ? this._setSize(this.expandedHeight, this.expandedWidth)
                      : this._setSize(this.stripHeight, this.stripWidth)),
                  !0
                );
            }
            const n = l[e];
            return !!n && (this.emit(n, t), !0);
          });
        }
        addEventListener(e, t) {
          this.on(e, t);
        }
        addEventListeners(e) {
          for (const t in e) this.addEventListener(t, e[t]);
        }
        captureLargeVideoScreenshot() {
          return this._transport.sendRequest({
            name: "capture-largevideo-screenshot",
          });
        }
        dispose() {
          this.emit("_willDispose"),
            this._transport.dispose(),
            this.removeAllListeners(),
            this._frame &&
              this._frame.parentNode &&
              this._frame.parentNode.removeChild(this._frame);
        }
        executeCommand(e, ...t) {
          e in u
            ? this._transport.sendEvent({ data: t, name: u[e] })
            : console.error("Not supported command name.");
        }
        executeCommands(e) {
          for (const t in e) this.executeCommand(t, e[t]);
        }
        getAvailableDevices() {
          return this._transport
            .sendRequest({ type: "devices", name: "getAvailableDevices" })
            .catch((e) => (console.error(e), {}));
        }
        getContentSharingParticipants() {
          return this._transport.sendRequest({
            name: "get-content-sharing-participants",
          });
        }
        getCurrentDevices() {
          return this._transport
            .sendRequest({ type: "devices", name: "getCurrentDevices" })
            .catch((e) => (console.error(e), {}));
        }
        getCustomAvatarBackgrounds() {
          return this._transport.sendRequest({
            name: "get-custom-avatar-backgrounds",
          });
        }
        getLivestreamUrl() {
          return this._transport.sendRequest({ name: "get-livestream-url" });
        }
        getParticipantsInfo() {
          const e = Object.keys(this._participants),
            t = Object.values(this._participants);
          return (
            t.forEach((t, i) => {
              t.participantId = e[i];
            }),
            t
          );
        }
        getVideoQuality() {
          return this._videoQuality;
        }
        isAudioAvailable() {
          return this._transport.sendRequest({ name: "is-audio-available" });
        }
        isDeviceChangeAvailable(e) {
          return (function (e, t) {
            return e.sendRequest({
              deviceType: t,
              type: "devices",
              name: "isDeviceChangeAvailable",
            });
          })(this._transport, e);
        }
        isDeviceListAvailable() {
          return this._transport.sendRequest({
            type: "devices",
            name: "isDeviceListAvailable",
          });
        }
        isMultipleAudioInputSupported() {
          return this._transport.sendRequest({
            type: "devices",
            name: "isMultipleAudioInputSupported",
          });
        }
        invite(e) {
          return Array.isArray(e) && 0 !== e.length
            ? this._transport.sendRequest({ name: "invite", invitees: e })
            : Promise.reject(new TypeError("Invalid Argument"));
        }
        isAudioMuted() {
          return this._transport.sendRequest({ name: "is-audio-muted" });
        }
        isModerationOn(e) {
          return this._transport.sendRequest({
            name: "is-moderation-on",
            mediaType: e,
          });
        }
        isParticipantForceMuted(e, t) {
          return this._transport.sendRequest({
            name: "is-participant-force-muted",
            participantId: e,
            mediaType: t,
          });
        }
        isSharingScreen() {
          return this._transport.sendRequest({ name: "is-sharing-screen" });
        }
        getAvatarURL(e) {
          const { avatarURL: t } = this._participants[e] || {};
          return t;
        }
        getDeploymentInfo() {
          return this._transport.sendRequest({ name: "deployment-info" });
        }
        getDisplayName(e) {
          const { displayName: t } = this._participants[e] || {};
          return t;
        }
        getEmail(e) {
          const { email: t } = this._participants[e] || {};
          return t;
        }
        getIFrame() {
          return this._frame;
        }
        getNumberOfParticipants() {
          return this._numberOfParticipants;
        }
        isVideoAvailable() {
          return this._transport.sendRequest({ name: "is-video-available" });
        }
        isVideoMuted() {
          return this._transport.sendRequest({ name: "is-video-muted" });
        }
        pinParticipant(e) {
          this.executeCommand("pinParticipant", e);
        }
        removeEventListener(e) {
          this.removeAllListeners(e);
        }
        removeEventListeners(e) {
          e.forEach((e) => this.removeEventListener(e));
        }
        resizeLargeVideo(e, t) {
          e <= this._width &&
            t <= this._height &&
            this.executeCommand("resizeLargeVideo", e, t);
        }
        sendProxyConnectionEvent(e) {
          this._transport.sendEvent({
            data: [e],
            name: "proxy-connection-event",
          });
        }
        setAudioInputDevice(e, t) {
          return (function (e, t, i) {
            return c(e, { id: i, kind: "audioinput", label: t });
          })(this._transport, e, t);
        }
        setAudioOutputDevice(e, t) {
          return (function (e, t, i) {
            return c(e, { id: i, kind: "audiooutput", label: t });
          })(this._transport, e, t);
        }
        setLargeVideoParticipant(e) {
          this.executeCommand("setLargeVideoParticipant", e);
        }
        setVideoInputDevice(e, t) {
          return (function (e, t, i) {
            return c(e, { id: i, kind: "videoinput", label: t });
          })(this._transport, e, t);
        }
        startRecording(e) {
          this.executeCommand("startRecording", e);
        }
        stopRecording(e) {
          this.executeCommand("stopRecording", e);
        }
        toggleE2EE(e) {
          this.executeCommand("toggleE2EE", e);
        }
        async setMediaEncryptionKey(e) {
          const { key: t, index: i } = e;
          if (t) {
            const e = await crypto.subtle.exportKey("raw", t);
            this.executeCommand(
              "setMediaEncryptionKey",
              JSON.stringify({
                exportedKey: Array.from(new Uint8Array(e)),
                index: i,
              })
            );
          } else
            this.executeCommand(
              "setMediaEncryptionKey",
              JSON.stringify({ exportedKey: !1, index: i })
            );
        }
      }
    },
  ]);
});
