(() => {
	var e = {
			839(e, t, n) {
				var o = n(347),
					r = n(628)(o);
				(r.push([
					e.id,
					"\n.m8FXBR {\n\toverflow: hidden;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 99999;\n}\n\n.m8FXBR.t_E9eW {\n\tposition: fixed;\n}\n\n.nAM_hf {\n\tbackground: #000;\n\tbackdrop-filter: blur(10px);\n\n\tposition: relative;\n\tz-index: 1;\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\n\topacity: 0;\n\ttransition: opacity 0.5s ease-in-out;\n}\n\n.qmpUYt {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.qmpUYt.qWB0AN {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 99999;\n\tcursor: pointer;\n}\n\n.aPwh82 {\n\tposition: absolute;\n\tz-index: 9999;\n\ttop: 0;\n\n\tpadding-top: 10%;\n\twidth: 100%;\n\theight: 100%;\n\ttext-align: center;\n\tcolor: #FFF;\n\n\tfont: 700 15pt 'Arial', sans-serif;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n\ttransition: 0.1s ease-in-out;\n\tline-height: 1em;\n\n\tdisplay: none;\n}\n\n.qQtYdx {\n    background: rgba(0, 43, 80, 0.5);\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n\tz-index: 11;\n}\n\n.PBq_cb {\n\tcursor:pointer;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 10;\n}\n\n.PBq_cb:hover .qQtYdx {\n\t\tbackground: rgba(0, 43, 80, 0.7);\n\t}\n\n.o_W9J9 {\n\tposition: absolute;\n    top: 50%;\n    left: 50%;\n    z-index: 12;\n}\n\n.o_W9J9:before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\twidth: 100px;\n\t\theight: 100px;\n\t\tdisplay: block;\n\t\tborder: 2px solid #fff;\n\t\tborder-radius: 50%;\n\t\t-webkit-user-select: none;\n\t\t   -moz-user-select: none;\n\t\t        user-select: none;\n\t\tbackground-color: rgba(0, 0, 0, 0.6);\n\t\ttransition: background-color 0.5s ease;\n\t\tanimation: 1s linear infinite vCajRE;\n\t\tz-index: 12;\n\t}\n\n.o_W9J9:after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tdisplay: block;\n\t\tbox-sizing: border-box;\n\t\tborder-color: transparent transparent transparent #fff;\n\t\tborder-style: solid;\n\t\tborder-width: 26px 0 26px 40px;\n\t\tpointer-events: none;\n\t\tanimation: 1s linear infinite vCajRE;\n\t\tleft: 6px;\n\t\tz-index: 12;\n\t}\n\n@keyframes vCajRE {\n\t0% {\n\t\ttransform: translate(-50%, -50%) scale(0.95);\n\t}\n\t70% {\n\t\ttransform: translate(-50%, -50%) scale(1.1);\n\t}\n\t100% {\n\t\ttransform: translate(-50%, -50%) scale(0.95);\n\t}\n}\n\n.mRoqOt {\n\tbackground: #B8C7DD;\n\twidth: 100%;\n\theight: 5px;\n\tposition: absolute;\n\tbottom: 0;\n\tz-index: 9999;\n}\n\n._p4ryH {\n\tposition:relative;\n\tbottom:0px;\n\tbackground: #009CFF;\n\theight: 100%;\n\twidth: 0%;\n\ttransition: width 0.5s;\n\ttransition-timing-function: linear;\n}\n\n.LI2Nug {\n\tbottom: 10px;\n\tposition: absolute;\n\tleft: 10px;\n\tz-index: 9999;\n\tcolor: #FFF;\n\tfont: 700 9pt 'Arial', sans-serif;\n\tfilter: drop-shadow(0 0 0.2rem black);\n}\n\n.pkttBY {\n\tdisplay: block;\n\tpointer-events: auto;\n}\n\n.pkttBY .nAM_hf {\n\t\topacity: 1;\n\t}\n\n.Q94dIO {\n\tdisplay: none;\n\tpointer-events: none;\n}\n",
					"",
				]),
					(r.locals = {
						container: "m8FXBR",
						fixed: "t_E9eW",
						insideContainer: "nAM_hf",
						adContainer: "qmpUYt",
						houseAdContainer: "qWB0AN",
						startAdButton: "aPwh82",
						pauseButtonBg: "qQtYdx",
						pauseButtonContainer: "PBq_cb",
						pauseButton: "o_W9J9",
						pokiPulse: "vCajRE",
						progressContainer: "mRoqOt",
						progressBar: "_p4ryH",
						nrAdsContainer: "LI2Nug",
						visible: "pkttBY",
						hidden: "Q94dIO",
					}),
					(e.exports = r));
			},
			366(e, t, n) {
				var o = n(72),
					r = n(825),
					i = n(659),
					a = n(56),
					s = n(540),
					c = n(113),
					d = n(839);
				d = d.__esModule ? d.default : d;
				var l = {};
				((l.styleTagTransform = c),
					(l.setAttributes = a),
					(l.insert = i.bind(null, "head")),
					(l.domAPI = r),
					(l.insertStyleElement = s));
				o(d, l);
				e.exports = (d && d.locals) || {};
			},
			72(e) {
				"use strict";
				var t = [];
				function n(e) {
					for (var n = -1, o = 0; o < t.length; o++)
						if (t[o].identifier === e) {
							n = o;
							break;
						}
					return n;
				}
				function o(e, o) {
					for (var i = {}, a = [], s = 0; s < e.length; s++) {
						var c = e[s],
							d = o.base ? c[0] + o.base : c[0],
							l = i[d] || 0,
							u = "".concat(d, " ").concat(l);
						i[d] = l + 1;
						var p = n(u),
							f = {
								css: c[1],
								media: c[2],
								sourceMap: c[3],
								supports: c[4],
								layer: c[5],
							};
						if (-1 !== p) (t[p].references++, t[p].updater(f));
						else {
							var m = r(f, o);
							((o.byIndex = s),
								t.splice(s, 0, { identifier: u, updater: m, references: 1 }));
						}
						a.push(u);
					}
					return a;
				}
				function r(e, t) {
					var n = t.domAPI(t);
					n.update(e);
					return function (t) {
						if (t) {
							if (
								t.css === e.css &&
								t.media === e.media &&
								t.sourceMap === e.sourceMap &&
								t.supports === e.supports &&
								t.layer === e.layer
							)
								return;
							n.update((e = t));
						} else n.remove();
					};
				}
				e.exports = function (e, r) {
					var i = o((e = e || []), (r = r || {}));
					return function (e) {
						e = e || [];
						for (var a = 0; a < i.length; a++) {
							var s = n(i[a]);
							t[s].references--;
						}
						for (var c = o(e, r), d = 0; d < i.length; d++) {
							var l = n(i[d]);
							0 === t[l].references && (t[l].updater(), t.splice(l, 1));
						}
						i = c;
					};
				};
			},
			659(e) {
				"use strict";
				var t = {};
				e.exports = function (e, n) {
					var o = (function (e) {
						if (void 0 === t[e]) {
							var n = document.querySelector(e);
							if (
								window.HTMLIFrameElement &&
								n instanceof window.HTMLIFrameElement
							)
								try {
									n = n.contentDocument.head;
								} catch (e) {
									n = null;
								}
							t[e] = n;
						}
						return t[e];
					})(e);
					if (!o)
						throw new Error(
							"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
						);
					o.appendChild(n);
				};
			},
			540(e) {
				"use strict";
				e.exports = function (e) {
					var t = document.createElement("style");
					return (e.setAttributes(t, e.attributes), e.insert(t, e.options), t);
				};
			},
			56(e, t, n) {
				"use strict";
				e.exports = function (e) {
					var t = n.nc;
					t && e.setAttribute("nonce", t);
				};
			},
			825(e) {
				"use strict";
				e.exports = function (e) {
					if ("undefined" == typeof document)
						return { update: function () {}, remove: function () {} };
					var t = e.insertStyleElement(e);
					return {
						update: function (n) {
							!(function (e, t, n) {
								var o = "";
								(n.supports && (o += "@supports (".concat(n.supports, ") {")),
									n.media && (o += "@media ".concat(n.media, " {")));
								var r = void 0 !== n.layer;
								(r &&
									(o += "@layer".concat(
										n.layer.length > 0 ? " ".concat(n.layer) : "",
										" {",
									)),
									(o += n.css),
									r && (o += "}"),
									n.media && (o += "}"),
									n.supports && (o += "}"));
								var i = n.sourceMap;
								(i &&
									"undefined" != typeof btoa &&
									(o +=
										"\n/*# sourceMappingURL=data:application/json;base64,".concat(
											btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
											" */",
										)),
									t.styleTagTransform(o, e, t.options));
							})(t, e, n);
						},
						remove: function () {
							!(function (e) {
								if (null === e.parentNode) return !1;
								e.parentNode.removeChild(e);
							})(t);
						},
					};
				};
			},
			113(e) {
				"use strict";
				e.exports = function (e, t) {
					if (t.styleSheet) t.styleSheet.cssText = e;
					else {
						for (; t.firstChild; ) t.removeChild(t.firstChild);
						t.appendChild(document.createTextNode(e));
					}
				};
			},
			628(e) {
				"use strict";
				e.exports = function (e) {
					var t = [];
					return (
						(t.toString = function () {
							return this.map(function (t) {
								var n = "",
									o = void 0 !== t[5];
								return (
									t[4] && (n += "@supports (".concat(t[4], ") {")),
									t[2] && (n += "@media ".concat(t[2], " {")),
									o &&
										(n += "@layer".concat(
											t[5].length > 0 ? " ".concat(t[5]) : "",
											" {",
										)),
									(n += e(t)),
									o && (n += "}"),
									t[2] && (n += "}"),
									t[4] && (n += "}"),
									n
								);
							}).join("");
						}),
						(t.i = function (e, n, o, r, i) {
							"string" == typeof e && (e = [[null, e, void 0]]);
							var a = {};
							if (o)
								for (var s = 0; s < this.length; s++) {
									var c = this[s][0];
									null != c && (a[c] = !0);
								}
							for (var d = 0; d < e.length; d++) {
								var l = [].concat(e[d]);
								(o && a[l[0]]) ||
									(void 0 !== i &&
										(void 0 === l[5] ||
											(l[1] = "@layer"
												.concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
												.concat(l[1], "}")),
										(l[5] = i)),
									n &&
										(l[2]
											? ((l[1] = "@media "
													.concat(l[2], " {")
													.concat(l[1], "}")),
												(l[2] = n))
											: (l[2] = n)),
									r &&
										(l[4]
											? ((l[1] = "@supports ("
													.concat(l[4], ") {")
													.concat(l[1], "}")),
												(l[4] = r))
											: (l[4] = "".concat(r))),
									t.push(l));
							}
						}),
						t
					);
				};
			},
			347(e) {
				"use strict";
				e.exports = function (e) {
					return e[1];
				};
			},
		},
		t = {};
	function n(o) {
		var r = t[o];
		if (void 0 !== r) return r.exports;
		var i = (t[o] = { id: o, exports: {} });
		return (e[o](i, i.exports, n), i.exports);
	}
	((n.n = (e) => {
		var t = e && e.__esModule ? () => e.default : () => e;
		return (n.d(t, { a: t }), t);
	}),
		(n.d = (e, t) => {
			for (var o in t)
				n.o(t, o) &&
					!n.o(e, o) &&
					Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
		}),
		(n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
		(n.nc = void 0),
		(() => {
			"use strict";
			const e = {
				ready: "pokiAppReady",
				failed: "pokiAppFailed",
				startLoading: "pokiAppStartLoading",
				ads: {
					startTimer: "pokiStartTimer",
					completed: "pokiAdsCompleted",
					error: "pokiAdsError",
					impression: "pokiAdsImpression",
					durationChange: "pokiAdsDurationChange",
					limit: "pokiAdsLimit",
					ready: "pokiAdsReady",
					requested: "pokiAdsRequested",
					prebidRequested: "pokiAdsPrebidRequested",
					skipped: "pokiAdsSkipped",
					started: "pokiAdsStarted",
					stopped: "pokiAdsStopped",
					busy: "pokiAdsBusy",
					loaded: "pokiAdsLoaded",
					hideSpinner: "pokiAdsHideSpinner",
					position: {
						preroll: "PP",
						midroll: "PM",
						rewarded: "PR",
						display: "DP",
					},
					video: {
						clicked: "pokiVideoAdsClicked",
						firstQuartile: "pokiVideoAdsFirstQuartile",
						midPoint: "pokiVideoAdsMidPoint",
						thirdQuartile: "pokiVideoAdsThirdQuartile",
						error: "pokiVideoAdsError",
						loaderError: "pokiVideoAdsLoaderError",
						paused: "pokiVideoAdsPauseTriggered",
						resumed: "pokiVideoAdsResumedTriggered",
						progress: "pokiVideoAdsProgress",
						buffering: "pokiVideoAdsBuffering",
						startHouseAdFlow: "pokiVideoAdsStartHouseAdFlow",
					},
					display: { error: "pokiDisplayAdsError" },
					extendedVideoError: "pokiAdsExtendedVideoError",
					debugging: "pokiAdsDebugging",
				},
				info: {
					messages: {
						timeLimit:
							"The ad-request was not processed, because of a time constraint",
						prerollLimit:
							"The ad-request was cancelled, because we're not allowed to show a preroll (PokiSDK.commercialBreak before PokiSDK.gameplayStart)",
						disabled:
							"The ad-request was cancelled, because we've disabled this format for this specific configuration",
					},
				},
				playtest: {
					startVideo: "pokiPlaytestStartVideo",
					stopVideo: "pokiPlaytestStopVideo",
				},
				message: {
					event: "pokiMessageEvent",
					sdkDetails: "pokiMessageSdkDetails",
					setPokiURLParams: "pokiMessageSetPokiURLParams",
					sendGameScreenshot: "pokiMessageSendScreenshot",
					sendGameRawScreenshot: "pokiMessageSendRawScreenshot",
					sendUploadScreenshot: "pokiMessageSendUploadScreenshot",
					sendCommand: "pokiMessageSendCommand",
					sendInspectorEvent: "pokiMessageInspectorEvent",
					sendInspectorCookies: "pokiMessageSendInspectorCookies",
					sendInspectorConsole: "pokiMessageSendInspectorConsole",
					sendScore: "pokiMessageSendScore",
					scoreUpdate: "pokiMessageScoreUpdate",
					showLeaderboard: "pokiMessageShowLeaderboard",
					openExternalLink: "pokiMessageOpenExternalLink",
				},
				tracking: {
					custom: "pokiTrackingCustom",
					debugTrueInProduction: "pokiMessageDebugTrueProduction",
					screen: {
						gameplayStart: "pokiTrackingScreenGameplayStart",
						gameplayStop: "pokiTrackingScreenGameplayStop",
						gameLoadingFinished: "pokiTrackingScreenGameLoadingFinished",
						commercialBreak: "pokiTrackingScreenCommercialBreak",
						rewardedBreak: "pokiTrackingScreenRewardedBreak",
						firstRound: "pokiTrackingScreenFirstRound",
						displayAd: "pokiTrackingScreenDisplayAdRequest",
						destroyAd: "pokiTrackingScreenDisplayAdDestroy",
						playerActive: "pokiTrackingScreenPlayerActive",
					},
					playtest: {
						showModal: "pokiTrackingPlaytestShowModal",
						accepted: "pokiTrackingPlaytestAccepted",
						rejected: "pokiTrackingPlaytestRejected",
						noCanvas: "pokiTrackingPlaytestNoCanvas",
						notLoaded: "pokiTrackingPlaytestNotLoaded",
						starting: "pokiTrackingPlaytestStarting",
						closed: "pokiTrackingPlaytestClosed",
						error: "pokiTrackingPlaytestError",
					},
					playerfittest: { starting: "pokiTrackingPlayerFitStarting" },
					sdk: {
						status: {
							initialized: "pokiTrackingSdkStatusInitialized",
							failed: "pokiTrackingSdkStatusFailed",
						},
					},
					ads: {
						ay: { failed: "pokiTrackingAdsAYFailed" },
						status: {
							busy: "pokiTrackingAdsStatusBusy",
							completed: "pokiTrackingAdsStatusCompleted",
							error: "pokiTrackingAdsStatusError",
							impression: "pokiTrackingAdsStatusImpression",
							limit: "pokiTrackingAdsStatusLimit",
							ready: "pokiTrackingAdsStatusReady",
							requested: "pokiTrackingAdsStatusRequested",
							prebidRequested: "pokiTrackingAdsStatusPrebidRequested",
							skipped: "pokiTrackingAdsStatusSkipped",
							started: "pokiTrackingAdsStatusStarted",
							buffering: "pokiTrackingAdsStatusBuffering",
						},
						video: {
							clicked: "pokiTrackingAdsVideoClicked",
							error: "pokiTrackingAdsVideoError",
							loaderError: "pokiTrackingAdsVideoLoaderError",
							progress: "pokiTrackingAdsVideoProgress",
							paused: "pokiTrackingAdsVideoPaused",
							resumed: "pokiTrackingAdsVideoResumed",
							extendedVideoError: "pokiTrackingAdsVideoExtendedVideoError",
						},
						display: {
							requested: "pokiTrackingScreenDisplayAdRequested",
							impression: "pokiTrackingScreenDisplayAdImpression",
							notFilled: "pokiTrackingAdsDisplayNotFilled",
						},
						rewardedWeb: {
							request: "pokiTrackingRewardedWebRequest",
							ready: "pokiTrackingRewardedWebReady",
							impression: "pokiTrackingRewardedWebImpression",
							closedGranted: "pokiTrackingRewardedWebClosedGranted",
							closedDeclined: "pokiTrackingRewardedWebclosedDeclined",
							empty: "pokiTrackingRewardedWebEmpty",
						},
						debugging: "pokiTrackingAdsDebugging",
						h5GamingEnabled: "pokiTrackingH5GamingEnabled",
					},
				},
				accounts: {
					openAuthPanel: { type: "pokiAccountsOpenAuthPanel", version: 1 },
					authPanelClosed: "pokiAccountsAuthPanelClosed",
					getUserInfo: "pokiAccountsGetUserInfo",
					getUserToken: "pokiAccountsGetUserToken",
					userToken: "pokiAccountsUserToken",
					userInfo: "pokiAccountsUserInfo",
				},
			};
			var t = 15552e3;
			function o(e) {
				var t = new RegExp("".concat(e, "=([^;]+)(?:;|$)")).exec(
					document.cookie,
				);
				return t ? t[1] : "";
			}
			function r(e, n, o) {
				document.cookie = ""
					.concat(e, "=")
					.concat(n, "; path=/; samesite=lax; max-age=")
					.concat(Math.min(o || t, t));
			}
			function i() {
				for (var e = Math.floor(Date.now() / 1e3), t = "", n = 0; n < 4; n++)
					((t = String.fromCharCode(255 & e) + t), (e >>= 8));
				if (window.crypto && crypto.getRandomValues && Uint32Array) {
					var o = new Uint32Array(12);
					crypto.getRandomValues(o);
					for (var r = 0; r < 12; r++) t += String.fromCharCode(255 & o[r]);
				} else
					for (var i = 0; i < 12; i++)
						t += String.fromCharCode(Math.floor(256 * Math.random()));
				return btoa(t)
					.replace(/\+/g, "-")
					.replace(/\//g, "_")
					.replace(/=/g, "");
			}
			function a(e, t, n) {
				console.error(e);
				var o = [
					{ k: "where", v: t },
					{
						k: "error",
						v:
							e.name && e.message
								? "".concat(e.name, ": ").concat(e.message)
								: JSON.stringify(e),
					},
				];
				if (void 0 !== n) {
					var r = n;
					("string" != typeof e && (r = JSON.stringify(e)),
						o.push({ k: "extra", v: r }));
				}
				!(function (e, t) {
					fetch(e, {
						method: "POST",
						headers: { "Content-Type": "text/plain" },
						body: t,
						mode: "no-cors",
						keepalive: !0,
						credentials: "omit",
					}).catch(function (n) {
						console.error(n);
						try {
							var o =
								"XMLHttpRequest" in window
									? new XMLHttpRequest()
									: new ActiveXObject("Microsoft.XMLHTTP");
							(o.open("POST", e, !0),
								o.setRequestHeader("Content-Type", "text/plain"),
								o.send(t));
						} catch (e) {}
					});
				})(
					"https://t.poki.io/l",
					JSON.stringify({ c: "observer-error", ve: 7, d: o }),
				);
			}
			var s = "poki_uid",
				c = "poki_uid_new",
				d = "poki_uid_version",
				l = "poki_uid_ttl",
				u = 15552e3;
			function p(e) {
				if (!e) return "";
				try {
					var t = /^[a-zA-Z][a-zA-Z0-9+\-.]*:\/\//.test(e);
					return new URL(t ? e : "https://".concat(e)).hostname || "";
				} catch (e) {
					return "";
				}
			}
			function f(e) {
				if (/^\d{1,3}(\.\d{1,3}){3}$/.test(e) || e.includes(":")) return e;
				if ("gemini.google.com" === e) return "gemini-google";
				if ("bard.google.com" === e) return "bard-google";
				if ("com.google.android.googlequicksearchbox" === e) return e;
				var t = (function (e) {
					if (!e) return "";
					if (/^\d{1,3}(\.\d{1,3}){3}$/.test(e) || e.includes(":")) return e;
					var t = e.split(".").filter(Boolean);
					if (t.length <= 2) return e;
					var n = new Set([
							"co.uk",
							"gov.uk",
							"ac.uk",
							"sch.uk",
							"com.au",
							"net.au",
							"org.au",
							"com.br",
							"com.mx",
							"com.tr",
							"com.ar",
							"com.cn",
							"com.hk",
							"com.tw",
							"com.sg",
							"com.my",
							"com.id",
							"co.nz",
							"co.in",
							"co.kr",
							"co.za",
							"co.jp",
						]),
						o = t.slice(-2).join("."),
						r = t.slice(-3).join(".");
					return n.has(o)
						? t.slice(-3).join(".")
						: n.has(r)
							? t.slice(-4).join(".")
							: o;
				})(e);
				return t ? t.split(".")[0] || t : e || "";
			}
			function m(e, t) {
				var n = e.getAll(t);
				return n && 0 !== n.length ? n[n.length - 1] : "";
			}
			window._pokiUserGlobalName = window._pokiUserGlobalName || "user";
			var g = new Set([
					"authorize.roblox.com",
					"accounts.google.com",
					"appleid.apple.com",
					"idmsa.apple.com",
					"login.microsoftonline.com",
					"login.live.com",
				]),
				h = new Set([
					"doubleclick",
					"googlesyndication",
					"googleapis",
					"googleadservices",
				]),
				y = new Set([
					"doubleclick",
					"googlesyndication",
					"googleapis",
					"googleadservices",
					"adsenseformobileapps",
				]),
				w = new Set([
					"google",
					"bing",
					"brave",
					"yahoo",
					"baidu",
					"yandex",
					"duckduckgo",
					"aol",
					"ask",
					"avg",
					"babylon",
					"googleweblight",
					"info",
					"izito",
					"msn",
					"myway",
					"naver",
					"qo-search",
					"searchencrypt",
					"search-results",
					"searchlock",
					"seznam",
					"so",
					"sogou",
					"startpage",
					"startpagina",
					"startsiden",
					"virgilio",
					"wp",
					"zapmeta",
					"100searchengines",
					"dailysearches",
					"easyfindanswers",
					"ecosia",
					"findretro",
					"geniol",
					"gsearch",
					"gosearcresults",
					"gosrch",
					"juniorsafesearch",
					"karmasearch",
					"keyboardsearch",
					"kvasir",
					"metager",
					"mojeek",
					"mysearcheasy",
					"onlineradiok",
					"panda-search",
					"petalsearch",
					"presearch",
					"qwant",
					"rammerhead",
					"relatedsearches",
					"search",
					"search-browser",
					"searchbip",
					"searcheira",
					"search-io",
					"search-load",
					"searchmusic-online",
					"search-redirect",
					"searchsafe",
					"searchsail",
					"search-sprint",
					"search-tab",
					"searchspear",
					"sosearcher",
					"srchoffer",
					"syndicatedsearch",
					"trojanwall",
					"voicecommandsearcher",
					"web-explore",
					"webcrawler",
					"yellow-search",
					"ziyuan",
					"ziyuanm",
					"zuiben",
					"coccoc",
					"zhanlian",
				]);
			function v() {
				var e,
					t =
						arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					n = t.search,
					o = void 0 === n ? "" : n,
					r = t.referrer,
					i = void 0 === r ? "" : r,
					a = new URLSearchParams(o),
					s = p(i),
					c = f(s),
					d = "" !== i,
					l = a.has("tt"),
					u = a.has("sc"),
					v = m(a, "utm_source"),
					b = m(a, "utm_medium"),
					k = m(a, "utm_term"),
					A = m(a, "poki_source"),
					S = m(a, "placement"),
					E = m(a, "gclid"),
					I = m(a, "msclkid"),
					_ = m(a, "yclid"),
					x = m(a, "ttclid"),
					P = m(a, "fbclid"),
					T = m(a, "adgroup"),
					C = m(a, "creative"),
					O = m(a, "network");
				e = c || ("" === s && "" !== i ? "" : i);
				var D,
					L,
					M = !d || "poki" === e || y.has(e),
					B = (D = (i || "").match(/^android-app:\/\/([^/]+)/i))
						? D[1].toLowerCase()
						: null,
					N = (function (e) {
						var t = (e || "").match(/^ios-app:\/\/([^/]+)/i);
						return t ? t[1].toLowerCase() : null;
					})(i),
					R = (function (e) {
						var t = (e || "").match(/^mobileapp::\d+-([^/]+)/i);
						return t ? t[1].toLowerCase() : null;
					})(i),
					j =
						M && S.includes("mobileapp::") && S.includes("mobileapp::2-")
							? (function (e) {
									var t =
											arguments.length > 1 && void 0 !== arguments[1]
												? arguments[1]
												: /^mobileapp::2-([^/]+)/,
										n = (e || "").match(t);
									return n ? n[1] : null;
								})(S)
							: null;
				L =
					"chrome_extension" === v
						? "poki_chrome_extension"
						: "edge_extension" === v
							? "poki_edge_extension"
							: l
								? "tiktok"
								: u
									? "snapchat"
									: "android_app" === A
										? "poki_android_app"
										: "web_app_manifest" === v
											? "pwa"
											: B ||
												N ||
												R ||
												(!d && v
													? v
													: j ||
														(M && S
															? f(p(S)) || S
															: "g" === O
																? "google"
																: "ytv" === O
																	? "youtube"
																	: d || E || I || _ || x || P || T || C
																		? !d && E && /^\d+$/.test(E)
																			? "direct"
																			: "" === e && d
																				? "unknown"
																				: e || "unknown"
																		: "direct"));
				var F,
					U =
						h.has(L) ||
						!!(E || I || _ || x || P || T || C) ||
						"cpc" === b ||
						"rtb-cpm" === b ||
						"ppc" === b ||
						"paid" === b,
					V = (s || "").toLowerCase(),
					G =
						!g.has(V) &&
						(w.has(L) ||
							/^com\.google\.android\.googlequicksearchbox$/.test(V) ||
							(function (e) {
								return /^webcache\.googleusercontent\.com$/.test(e);
							})(V) ||
							(!!k && "share" !== b));
				return (
					(F =
						"snapchat" === v
							? "cpc"
							: P && !v
								? "organic"
								: U
									? "cpc"
									: G
										? "organic"
										: g.has(V)
											? "oauth"
											: "pwa" === L ||
												  "poki_android_app" === L ||
												  d ||
												  "social" === b ||
												  "email" === b
												? "referral"
												: L
													? "unknown"
													: "direct"),
					"direct" === L &&
						"direct" !== F &&
						"unknown" !== F &&
						"referral" !== F &&
						(L = "unknown"),
					h.has(L) && (L = "unknown"),
					"poki" === L && "cpc" === F && (L = "unknown"),
					{ source: L, medium: F }
				);
			}
			var b = 18e5,
				k = "poki_session";
			window._pokiSessionGlobalName =
				window._pokiSessionGlobalName || "session";
			var A = [
				"poki.at",
				"poki.be",
				"poki.by",
				"poki.ch",
				"poki.cn",
				"poki.co.id",
				"poki.co.il",
				"poki.com.br",
				"poki.com",
				"poki.cz",
				"poki.de",
				"poki.dk",
				"poki.fi",
				"poki.it",
				"poki.jp",
				"poki.nl",
				"poki.pl",
				"poki.pt",
				"poki.se",
				"www.trochoi.net",
			];
			function S() {
				try {
					var e = new URL(document.referrer).hostname;
					return "poki.com";
				} catch (e) {}
				return "";
			}
			function E(e, t) {
				if (!e) return !1;
				if (!(e && e.page && e.landing_page && e.previous_page)) return !1;
				if (!e.tab_id) return !1;
				if (!e.expire || Date.now() > e.expire) return !1;
				if (e.expire > Date.now() + b) return !1;
				if (t) {
					var n = v({
							referrer: document.referrer,
							search: window.location.search,
						}),
						o = n.source,
						r = n.medium;
					if ("oauth" !== r && o !== e.source) return !1;
					var i = "cpc" === r,
						a = "cpc" === e.medium;
					if (i && !a) return !1;
				}
				return !0;
			}
			function I() {
				var e = null;
				E(window[window._pokiSessionGlobalName], !1) &&
					(e = window[window._pokiSessionGlobalName]);
				try {
					var t = sessionStorage.getItem(k);
					if (t) {
						var n = JSON.parse(t);
						E(n, !1) && (!e || n.depth > e.depth) && (e = n);
					}
				} catch (e) {
					try {
						a(e, "getSession", sessionStorage.getItem(k));
					} catch (t) {
						a(e, "getSession", t);
					}
				}
				return e;
			}
			function _() {
				var e = 0;
				window[window._pokiSessionGlobalName] &&
					window[window._pokiSessionGlobalName].count &&
					(e = window[window._pokiSessionGlobalName].count);
				try {
					var t = sessionStorage.getItem(k);
					if (t) {
						var n = JSON.parse(t);
						n && n.count && n.count > e && (e = n.count);
					}
				} catch (e) {
					try {
						a(e, "getPreviousSessionCount", sessionStorage.getItem(k));
					} catch (t) {
						a(e, "getPreviousSessionCount", t);
					}
				}
				try {
					var r = o(k);
					if (r) {
						var i = JSON.parse(r);
						i && i.count && i.count > e && (e = i.count);
					}
				} catch (e) {
					try {
						a(e, "getPreviousSessionCount", o(k));
					} catch (t) {
						a(e, "getPreviousSessionCount", t);
					}
				}
				return e;
			}
			function x() {
				if (
					window[window._pokiSessionGlobalName] &&
					window[window._pokiSessionGlobalName].tab_id
				)
					return window[window._pokiSessionGlobalName].tab_id;
				try {
					var e = sessionStorage.getItem(k);
					if (e) {
						var t = JSON.parse(e);
						if (t && t.tab_id) return t.tab_id;
					}
				} catch (e) {}
				return i();
			}
			function P() {
				var e = 0,
					t = I();
				t && (e = t.depth);
				try {
					var n = o(k);
					if (n) {
						var r = JSON.parse(n);
						!E(r, !t) || (t && r.id !== t.id) || (e = Math.max(e, r.depth));
					}
				} catch (e) {
					var i = null;
					try {
						i = o(k) || null;
					} catch (e) {}
					a(e, "getSessionDepth", i);
				}
				return e;
			}
			const T = (e, t) => {
					let n = !1;
					return (
						Object.keys(t).forEach((o) => {
							t[o] === e && (n = !0);
						}),
						n
					);
				},
				C = [
					"AT",
					"BE",
					"BG",
					"HR",
					"CY",
					"CZ",
					"DK",
					"EE",
					"FI",
					"FR",
					"DE",
					"GR",
					"GB",
					"HU",
					"IE",
					"IT",
					"LV",
					"LT",
					"LU",
					"MT",
					"NL",
					"PL",
					"PT",
					"RO",
					"SK",
					"SI",
					"ES",
					"SE",
					"IS",
					"LI",
					"NO",
				];
			const O = (e, t) => {
					if ("undefined" == typeof window && !t) return "";
					e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
					const n = new RegExp(`(?:[\\?&]|^)${e}=([^&#]*)`).exec(
						t || window?.location?.search || "",
					);
					return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "));
				},
				D = () =>
					"undefined" != typeof navigator &&
					/(?:phone|windows\s+phone|ipod|blackberry|(?:android|bb\d+|meego|silk|googlebot) .+? mobile|palm|windows\s+ce|opera mini|avantgo|mobilesafari|docomo|kaios)/i.test(
						navigator.userAgent,
					),
				L = () =>
					"undefined" != typeof navigator &&
					/(?:ipad|playbook|(?:android|bb\d+|meego|silk)(?! .+? mobile))/i.test(
						navigator.userAgent,
					);
			var M;
			!(function (e) {
				((e.ON = "on"),
					(e.NOT_APPLICABLE = "not_applicable"),
					(e.DISABLED = "disabled"),
					(e.PBS_ONLY = "pbs_only"),
					(e.DPF_ONLY = "dpf_only"),
					(e.CSTS_ONLY = "csts_only"),
					(e.PBS_DPF_CSTS = "pbs_dpf_csts"));
			})(M || (M = {}));
			const B = O("referrer") || "",
				N = O("ccpaApplies") || "",
				R = {
					bot: "1" === O("bot"),
					categories: O("categories") || "",
					device: D() ? "mobile" : L() ? "tablet" : "desktop",
					experiment: O("experiment") || "",
					forceAd: O("force_ad") || !1,
					isPokiIframe: (parseInt(O("site_id"), 10) || 0) > 0,
					isPokiExternal: !!window.isPokiExternal,
					siteID: parseInt(O("site_id"), 10) || 3,
					tag: O("tag") || "",
					versionID: O("game_version_id"),
					debugMode: "true" === O("pokiDebug"),
					logMode: "" !== O("pokiLogging"),
					testVideos: "true" === O("testVideos"),
					referrerParam: B,
					isPlayground: !!window.isPokiPlayground,
					isInspector:
						"inspector-uploads.poki-user-content.com" ===
							window?.location?.host ||
						document?.referrer?.includes("inspector.poki.dev") ||
						"1" === O("inspector"),
					houseAdsOnly: !1,
					adOverrideMode: !1,
					googlePreview: !!O("google_preview"),
					ccpaApplies: "1" === N || ("0" !== N && void 0),
					country: (O("country") || "").toUpperCase(),
					gameID: O("game_id"),
					gdprApplies:
						((j = (O("country") || "").toUpperCase()), C.includes(j)),
					contentGameID: void 0,
					specialCondition: O("special_condition"),
					nonPersonalized: "y" === O("nonPersonalized"),
					familyFriendly: "y" === O("familyFriendly"),
					kioskMode: "y" === O("kioskMode") || !!window?.kioskMode,
					forceBidder: O("force_bidder") || "",
					cloudSaveGames: "y" === O("cloudsavegames"),
					AYMode: M.ON,
					forceStartAY: "y" === O("forceStartAY"),
				};
			var j;
			const F = (e, t) => {
					R[e] = t;
				},
				U = R;
			class V {
				static sendMessage(t, n, o = window.parent) {
					if (!T(t, e.message)) {
						const t = Object.keys(e.message).map((e) => `poki.message.${e}`);
						throw new TypeError(
							`Argument 'type' must be one of ${t.join(", ")}`,
						);
					}
					const r = n || {};
					(U.gameID &&
						U.versionID &&
						(r.pokifordevs = {
							game_id: U.gameID,
							game_version_id: U.versionID,
						}),
						o?.postMessage({ type: t, content: r }, "*"));
				}
			}
			class G {
				static debug = !1;
				static log = !1;
				static init = (e, t) => {
					const { hostname: n } = window.location,
						o =
							"localhost" === n ||
							"127.0.0.1" === n ||
							"[::1]" === n ||
							"launch.playcanvas.com" === n ||
							"https://gemini.google.com" ===
								document.location.ancestorOrigins?.[0];
					(void 0 === e &&
						(o
							? ((e = !0), void 0 === t && (t = !1))
							: ((e = !1), void 0 === t && (t = !1))),
						U.isInspector
							? ((e = !0), (t = !0))
							: (n.endsWith(".poki-gdn.com") || n.endsWith(".gdn.poki.com")) &&
								((e = !1), (t = !1)),
						U.debugMode && (e = !0),
						U.logMode && (t = !0),
						void 0 === t && (t = e),
						(G.debug = e),
						(G.log = t));
				};
			}
			const z = (e) => {
					let t = [];
					return (
						Object.keys(e).forEach((n) => {
							"object" == typeof e[n] ? (t = t.concat(z(e[n]))) : t.push(e[n]);
						}),
						t
					);
				},
				K = z;
			class H {
				static listeners = {};
				static videoDataAnnotations = {};
				static clearEventListeners() {
					this.listeners = {};
				}
				static removeEventListener(e, t) {
					if (!Object.prototype.hasOwnProperty.call(this.listeners, e)) return;
					const n = this.listeners[e].indexOf(t);
					-1 !== n && this.listeners[e].splice(n, 1);
				}
				static addEventListener(e, t, n = !1) {
					if (
						((n = !!n),
						Object.prototype.hasOwnProperty.call(this.listeners, e) ||
							(this.listeners[e] = []),
						n)
					) {
						const n = (o) => {
							(this.removeEventListener.bind(this)(e, n), t(o));
						};
						this.listeners[e].push(n);
					} else this.listeners[e].push(t);
				}
				static dispatchEvent(e, t = {}) {
					const n = Object.keys(this.listeners);
					for (let o = 0; o < n.length; o++) {
						const r = n[o];
						if (e === r) {
							const e = this.listeners[r];
							for (let n = 0; n < e.length; n++)
								e[n]({ ...this.videoDataAnnotations, ...t });
						}
					}
				}
				static addVideoDataAnnotations(e) {
					this.videoDataAnnotations = { ...this.videoDataAnnotations, ...e };
				}
				static getVideoDataAnnotations() {
					return this.videoDataAnnotations;
				}
				static clearVideoDataAnnotations() {
					this.videoDataAnnotations = {};
				}
			}
			const q = (e) => {
				if ("undefined" == typeof window || "undefined" == typeof fetch) return;
				const t = H.getVideoDataAnnotations();
				let { size: n } = e;
				e.event?.startsWith("video-") && (n = "640x360v");
				const o = {
					...e,
					size: n,
					adBreakId: e.adBreakId || t.adBreakId,
					currentAdNumber: e.currentAdNumber || t.currentAdNumber,
					totalAdAmount: e.totalAdAmount || t.totalAdAmount,
					opportunity_id: e.opportunityId || t.opportunityId,
					ad_unit_path: e.adUnitPath || t.adUnitPath,
					p4d_game_id: U.gameID,
					p4d_version_id: U.versionID,
					bidder: e.bidder || t.bidder,
					bid: e.bid || t.bid || 0,
					error_code: e.errorCode,
					creative_id: e.creativeId || t.creativeId,
					experiment: U.experiment,
				};
			/* Removed poki.com fetch
			fetch("https://t.poki.io/adserver", {
				method: "POST",
				mode: "no-cors",
				body: JSON.stringify(o),
			}).catch((e) => {
				console.warn("%cPOKI:%c adserver error", "font-weight: bold", "", e);
			});
			*/
			};
			function W(e, ...t) {
				console.warn(
					`%cPOKI:%c ${e}`,
					"background-color: red; border-radius: 3px; color: white; padding: 1px 5px",
					"",
					...t,
				);
			}
			function Y(e, ...t) {
				console.error(
					`%cPOKI:%c ${e}`,
					"background-color: red; border-radius: 3px; color: white; padding: 1px 5px",
					"",
					...t,
				);
			}
			const J = (e, t = !1) =>
				new Promise((n, o) => {
					const r = document.createElement("script");
					((r.type = t ? "module" : "text/javascript"),
						(r.async = !0),
						(r.src = e));
					const i = () => {
						(r.readyState &&
							"loaded" !== r.readyState &&
							"complete" !== r.readyState) ||
							(n(), (r.onload = null), (r.onreadystatechange = null));
					};
					((r.onload = i),
						(r.onreadystatechange = i),
						(r.onerror = o),
						document.head.appendChild(r));
				});
			let Q = null;
			const $ = K(e.tracking),
				Z = window;
			class X {
				static logToObserver = !1;
				static cmpRequired = void 0;
				static cmpIndex = void 0;
				static eventQueue = [];
				static track(t, n = {}) {
					try {
						let o = { ...n };
						if (-1 === $.indexOf(t))
							throw new TypeError(
								`Invalid 'event', must be one of ${$.join(", ")}`,
							);
						if ("object" != typeof o)
							throw new TypeError("Invalid data, must be an object");
						const r = H.getVideoDataAnnotations();
						if (r?.pokiAdServer)
							switch (t) {
								case e.tracking.ads.status.started: {
									const { creativeId: e } = r;
									(H.addVideoDataAnnotations({ houseAdId: e }),
										(o.houseAdId = e));
									break;
								}
								case e.tracking.ads.status.impression: {
									const e = o?.creativeId;
									(q({ ...o, event: "video-impression", creativeId: e }),
										H.addVideoDataAnnotations({ houseAdId: e }),
										(o.houseAdId = e));
									break;
								}
								case e.tracking.ads.video.error:
									q({ ...o, event: "video-error", errorCode: o?.errorCode });
									break;
								case e.tracking.ads.video.loaderError:
									q({
										...o,
										event: "video-adsloader-error",
										errorCode: o?.errorCode,
									});
									break;
								case e.tracking.ads.status.completed:
									q({ ...o, event: "video-complete" });
									break;
								case e.tracking.ads.video.clicked:
									q({ ...o, event: "video-clicked" });
							}
						if (
							(t.includes("pokiTrackingRewardedWeb") && (o = r),
							G.log &&
								(Object.keys(o).length
									? console.info(
											`%cPOKI_TRACKER:%c Tracked event '${t}' with data:`,
											"font-weight: bold",
											"",
											o,
										)
									: console.info(
											`%cPOKI_TRACKER:%c Tracked event '${t}'`,
											"font-weight: bold",
											"",
										)),
							Q?.({ event: t, data: o }),
							V.sendMessage(e.message.event, { event: t, data: o }),
							!(
								U.isPokiIframe ||
								U.isInspector ||
								U.isPlayground ||
								U.isPokiExternal
							))
						) {
							const n = "sdk",
								r = "message",
								i = {
									content: {
										event: t,
										data: o,
										pokifordevs: { game_id: U.gameID, game_version_id: void 0 },
									},
									type: e.message.event,
								};
							X.logToObserver
								? X.pushEvent(n, r, i)
								: (X.eventQueue.push([n, r, i]),
									X.eventQueue.length > 100 && X.eventQueue.shift());
						}
					} catch (e) {
						Y("error while tracking event", e);
					}
				}
				static setupDefaultEvents() {
					const t = {
						[e.ready]: e.tracking.sdk.status.initialized,
						[e.failed]: e.tracking.sdk.status.failed,
						[e.ads.busy]: e.tracking.ads.status.busy,
						[e.ads.completed]: e.tracking.ads.status.completed,
						[e.ads.error]: e.tracking.ads.status.error,
						[e.ads.impression]: e.tracking.ads.status.impression,
						[e.ads.limit]: e.tracking.ads.status.limit,
						[e.ads.ready]: e.tracking.ads.status.ready,
						[e.ads.requested]: e.tracking.ads.status.requested,
						[e.ads.prebidRequested]: e.tracking.ads.status.prebidRequested,
						[e.ads.skipped]: e.tracking.ads.status.skipped,
						[e.ads.started]: e.tracking.ads.status.started,
						[e.ads.video.clicked]: e.tracking.ads.video.clicked,
						[e.ads.video.error]: e.tracking.ads.video.error,
						[e.ads.video.loaderError]: e.tracking.ads.video.loaderError,
						[e.ads.video.buffering]: e.tracking.ads.status.buffering,
						[e.ads.video.progress]: e.tracking.ads.video.progress,
						[e.ads.video.paused]: e.tracking.ads.video.paused,
						[e.ads.video.resumed]: e.tracking.ads.video.resumed,
						[e.ads.extendedVideoError]: e.tracking.ads.video.extendedVideoError,
					};
					Object.keys(t).forEach((e) => {
						H.addEventListener(e, (n) => {
							X.track(t[e], n);
						});
					});
				}
				static pushEvent(e, t, n) {
					Z.pokiGTM.push({
						event: `${e}-${t}`,
						eventNoun: e,
						eventVerb: t,
						eventData: n || {},
					});
				}
				static setRequireConsent(e) {
					((X.cmpRequired = e), X.setupObserverIfCMP());
				}
				static setupObserverWithCMP(e) {
					((X.cmpIndex = e), X.setupObserverIfCMP());
				}
				static setupObserverIfCMP() {
					if (void 0 !== X.cmpRequired && void 0 !== X.cmpIndex)
						if (X.cmpRequired) {
							if (!window.__tcfapi)
								return void console.error(
									"%cPOKI:%c PokiSDK.enableEventTracking() was called but no CMP is present.",
									"font-weight: bold",
									"",
								);
							window.__tcfapi("addEventListener", 2, (e, t) => {
								!t ||
									("tcloaded" !== e.eventStatus &&
										"useractioncomplete" !== e.eventStatus) ||
									(window.__tcfapi("getNonIABVendorConsents", 2, (e) => {
										e &&
											e.nonIabVendorConsents &&
											e.nonIabVendorConsents[X.cmpIndex || 0] &&
											X.setupObserver();
									}),
									window.__tcfapi(
										"removeEventListener",
										2,
										() => {},
										e.listenerId,
									));
							});
						} else X.setupObserver();
				}
				static setupObserver() {
					for (
						Z._pokiSessionGlobalName = "pokiSession",
							Z._pokiUserGlobalName = "pokiUser",
							Z._pokiContextGlobalName = "pokiContext",
							Z._pokiTrackerGlobalName = "pokiTracker",
							(function (e, t, n) {
								var s,
									d = null;
								try {
									((d = I())
										? ((d.previous_page.path = d.page.path),
											(d.previous_page.type = d.page.type),
											(d.previous_page.id = d.page.id),
											(d.previous_page.start = d.page.start),
											(d.previous_page.pageview_id = d.page.pageview_id),
											(d.page.path = e),
											(d.page.type = t),
											(d.page.id = n),
											(d.page.start = Date.now()),
											(d.page.pageview_id = i()),
											(d.depth = P() + 1),
											(d.expire = Date.now() + b))
										: (d = (function (e, t, n) {
												try {
													var s = o(k);
													if (s) {
														var c = JSON.parse(s);
														if (E(c, !0))
															return (
																(c.previous_page.path = c.page.path),
																(c.previous_page.type = c.page.type),
																(c.previous_page.id = c.page.id),
																(c.previous_page.start = c.page.start),
																(c.previous_page.pageview_id =
																	c.page.pageview_id),
																(c.page.path = e),
																(c.page.type = t),
																(c.page.id = n),
																(c.page.start = Date.now()),
																(c.page.pageview_id = i()),
																(c.depth = P() + 1),
																(c.expire = Date.now() + b),
																(c.tab_id = x()),
																r(k, JSON.stringify(c)),
																c
															);
													}
												} catch (e) {
													var d = null;
													try {
														d = o(k) || null;
													} catch (e) {}
													a(e, "getSessionDepth", d);
												}
												var l = i(),
													u = v({
														referrer: document.referrer,
														search: window.location.search,
													}),
													p = u.source,
													f = u.medium;
												return {
													id: i(),
													expire: Date.now() + b,
													tab_id: x(),
													depth: 1,
													count: _() + 1,
													page: {
														path: e,
														type: t,
														id: n,
														start: Date.now(),
														pageview_id: l,
													},
													previous_page: {},
													landing_page: {
														path: e,
														type: t,
														id: n,
														start: Date.now(),
														pageview_id: l,
													},
													referrer_domain: S(),
													source: p,
													medium: f,
												};
											})(e, t, n)),
										d.count > 1 &&
											((s = parseInt(o(l), 10) || u),
											r(c, "0", s),
											window[window._pokiUserGlobalName] &&
												(window[window._pokiUserGlobalName].is_new = !1)));
									var p = JSON.stringify(d);
									try {
										sessionStorage.setItem(k, p);
									} catch (e) {
										a(e, "updateSession-1");
									}
									window[window._pokiSessionGlobalName] = d;
									try {
										r(k, p);
									} catch (e) {
										a(e, "updateSession-4");
									}
								} catch (e) {
									a(e, "updateSession-2");
								}
							})(window.location.pathname, "external", U.contentGameID),
							(function () {
								var e,
									t,
									n,
									a,
									p =
										null === (e = window[window._pokiUserGlobalName]) ||
										void 0 === e
											? void 0
											: e.id,
									f =
										(null === (t = window[window._pokiUserGlobalName]) ||
										void 0 === t
											? void 0
											: t.is_new) || !1,
									m =
										(null === (n = window[window._pokiUserGlobalName]) ||
										void 0 === n
											? void 0
											: n.version) || 0,
									g =
										(null === (a = window[window._pokiUserGlobalName]) ||
										void 0 === a
											? void 0
											: a.ttl) || u;
								(p ||
									((p = o(s)),
									(f = "1" === o(c)),
									(m = parseInt(o(d), 10) || 0),
									(g = parseInt(o(l), 10) || g)),
									(p &&
										(function (e) {
											if (!/^[A-Za-z0-9-_]+$/.test(e)) return !1;
											try {
												return (
													16 ===
													atob(e.replace(/-/g, "+").replace(/_/g, "/")).length
												);
											} catch (e) {
												return !1;
											}
										})(p)) ||
										((p = i()), (f = !0), (m = 2), (g = u)),
									r(s, p, g),
									r(c, f ? "1" : "0", g),
									r(d, m, g),
									r(l, g, g),
									(window[window._pokiUserGlobalName] = {
										id: p,
										is_new: f,
										version: m,
										ttl: g,
									}));
							})(),
							Z[Z._pokiSessionGlobalName].referrer = U.referrerParam,
							Z[Z._pokiContextGlobalName] = {
								tag: null,
								site: {
									id: null,
									domain: window.location.hostname,
									prefix: "",
								},
								page: {
									id: U.contentGameID,
									type: "external",
									path: window.location.pathname,
									pageview_id: i(),
								},
								user: Z[Z._pokiUserGlobalName],
								session: Z[Z._pokiSessionGlobalName],
							},
							Z.pokiGTM = Z.pokiGTM || [],
							J("https://a.poki-cdn.com/t2.js"),
							X.logToObserver = !0;
						X.eventQueue.length;
					) {
						const [e, t, n] = X.eventQueue.shift();
						X.pushEvent(e, t, n);
					}
				}
			}
			function ee() {
				const e = window,
					t = [];
				return (
					("function" != typeof e.ga && "function" != typeof e.gtag) ||
						t.push("ga"),
					e.mixpanel &&
						"function" == typeof e.mixpanel.track &&
						t.push("mixpanel"),
					"function" == typeof e.GameAnalytics && t.push("gameanalytics"),
					(e.kongregateAPI || e.kongregate) && t.push("kongregate"),
					e.FlurryAgent && t.push("flurry"),
					e.Countly && t.push("countly"),
					e.amplitude && t.push("amplitude"),
					t
				);
			}
			function te(e) {
				switch (Object.prototype.toString.call(e)) {
					case "[object Error]":
					case "[object Exception]":
					case "[object DOMException]":
						return !0;
					default:
						return e instanceof Error;
				}
			}
			function ne(e) {
				try {
					const t = new WeakSet();
					return JSON.stringify(e, (e, n) => {
						if ("object" == typeof n && null !== n) {
							if (t.has(n)) return "[Circular]";
							t.add(n);
						}
						return n;
					});
				} catch {
					try {
						return e.toString();
					} catch {
						return "[Object]";
					}
				}
			}
			let oe;
			function re() {
				return oe;
			}
			const ie = [],
				ae = (function (e) {
					let t = !1,
						n = 0;
					return (o) => {
						if (t) return void n++;
						((t = !0),
							setTimeout(() => {
								t = !1;
							}, e));
						const r = n;
						((n = 0), o(r));
					};
				})(100),
				se = console.error,
				ce = ["Audio callback had starved sending audio by"];
			let de = !1;
			const le = Math.random().toString(36).substring(2);
			let ue;
			function pe() {
				const e = window;
				if (e.config?.unityVersion) return e.config.unityVersion;
				if (e.Phaser?.VERSION) return e.Phaser.VERSION;
				if (e.pc?.version) return e.pc.version;
				if (e.Module?.engineVersion) return e.Module.engineVersion;
				const t = re();
				return t || void 0;
			}
			function fe(e, t = !0) {
				U.gameID && !U.isPlayground
					? ae((t) => {
							try {
								const n = e.message || ne(e);
								(ie.push({ n: e.name, m: n, s: JSON.stringify(e.stack) }),
									ue && ue({ name: e.name, message: n, stack: e.stack }));
								const o = JSON.stringify({
										gid: U.gameID,
										vid: U.versionID,
										ve: 7,
										n: e.name,
										m: n + (t ? ` (skipped ${t} errors)` : ""),
										s: JSON.stringify(e.stack),
										ui: le,
										ev: `${pe()}`,
									}),
									r = "https://t.poki.io/ge";
								if (navigator.sendBeacon) navigator.sendBeacon(r, o);
								else {
									const e = new XMLHttpRequest();
									(e.open("POST", r, !0), e.send(o));
								}
							} catch (e) {
								se("%cPOKI:%c failed to log error", "font-weight: bold", "", e);
							}
						})
					: t &&
						console.error("%cPOKI:%c game error", "font-weight: bold", "", e);
			}
			function me(e) {
				te(e.reason)
					? fe(e.reason)
					: fe({
							name: "unhandledrejection",
							message: JSON.stringify(e.reason) || ne(e),
						});
			}
			function ge(e) {
				te(e.error) ? fe(e.error) : fe(e);
			}
			function he() {
				if (
					U.gameID &&
					!U.isPlayground &&
					!U.isPokiExternal &&
					U.isPokiIframe &&
					!de
				) {
					((de = !0),
						window.addEventListener("unhandledrejection", me),
						window.addEventListener("error", ge));
					try {
						console.error = (...e) => {
							const t = ne(e);
							(ce.some((e) => t.includes(e)) ||
								fe({ name: "console.error", message: t }, !1),
								se.apply(console, e));
						};
					} catch {}
				}
			}
			"undefined" != typeof window && he();
			const ye = () => {
				let e = Math.floor(Date.now() / 1e3),
					t = "";
				for (let n = 0; n < 4; n++)
					((t = String.fromCharCode(255 & e) + t), (e >>= 8));
				if (window.crypto && crypto.getRandomValues && Uint32Array) {
					const e = new Uint32Array(12);
					crypto.getRandomValues(e);
					for (let n = 0; n < 12; n++) t += String.fromCharCode(255 & e[n]);
				} else
					for (let e = 0; e < 12; e++)
						t += String.fromCharCode(Math.floor(256 * Math.random()));
				return btoa(t)
					.replace(/\+/g, "-")
					.replace(/\//g, "_")
					.replace(/=/g, "");
			};
			var we;
			!(function (e) {
				((e.SMALL = "small"), (e.MEDIUM = "medium"), (e.LARGE = "large"));
			})(we || (we = {}));
			const ve = window.requestAnimationFrame;
			function be(e) {
				return Math.round(100 * e) / 100;
			}
			class ke {
				#e = [];
				#t = 0;
				#n;
				constructor(e) {
					Math.random() > e ||
						((this.#n = performance.now() + 1e3),
						ve(() => {
							this.#o();
						}));
				}
				#o() {
					const e = performance.now();
					for (; e >= this.#n; )
						(this.#e.unshift(this.#t),
							this.#e.length > 10 && this.#e.pop(),
							(this.#t = 0),
							(this.#n += 1e3));
					(this.#t++,
						ve(() => {
							this.#o();
						}));
				}
				stats() {
					if (0 === this.#e.length) return;
					const e = Math.min(...this.#e),
						t = Math.max(...this.#e),
						n = be(this.#e.reduce((e, t) => e + t, 0) / this.#e.length);
					let o = be(
						this.#e
							.slice(1)
							.map((e, t) => Math.abs(e - this.#e[t]))
							.reduce((e, t) => e + t, 0) /
							(this.#e.length - 1),
					);
					return (Number.isNaN(o) && (o = 0), `${e}|${t}|${n}|${o}`);
				}
			}
			const Ae = Math.random().toString(36).substring(2);
			async function Se() {
				const e = await window.cookieStore.getAll(),
					t = window.indexedDB.databases
						? await window.indexedDB.databases()
						: [];
				return [
					...e.map((e) => ({
						name: e.name,
						expire_seconds: Math.round((e.expires - Date.now()) / 1e3),
						type: "cookie",
						domain: e.domain,
					})),
					...Object.keys(window.localStorage).map((e) => ({
						name: e,
						expire_seconds: 15552e3,
						type: "localStorage",
					})),
					...t.map((e) => ({ name: e.name, expire_seconds: 0, type: "idb" })),
				];
			}
			class Ee {
				static async collectAndLog() {
					try {
						const e = {
							cookies: await Se(),
							p4d_game_id: U.gameID,
							user_id: Ae,
						};
					/* Removed poki.com fetch
					fetch("https://t.poki.io/game-cookies", {
						method: "post",
						body: JSON.stringify(e),
					}).catch();
					*/
					} catch {}
				}
				static trackSavegames() {
					window.cookieStore &&
						window.cookieStore.getAll &&
						U.gameID &&
						(Math.random() > 0.01 ||
							(navigator.userAgent.indexOf("Safari") > -1 &&
								navigator.userAgent.indexOf("Chrome") <= -1) ||
							(Ee.collectAndLog(), setInterval(Ee.collectAndLog, 12e4)));
				}
			}
			const Ie = (() => {
				let e = 0;
				return () => (
					(e += 1),
					`u${`0000${(((36 * Math.random()) ** 4) | 0).toString(36)}`.slice(-4)}${e}`
				);
			})();
			function _e(e) {
				const t = [];
				for (let n = 0, o = e.length; n < o; n++) t.push(e[n]);
				return t;
			}
			function xe(e) {
				return "style" in e;
			}
			const Pe = (e, t) => {
					if (e instanceof t) return !0;
					const n = Object.getPrototypeOf(e);
					return null !== n && (n.constructor.name === t.name || Pe(n, t));
				},
				Te = new Set([
					"cx",
					"cy",
					"x",
					"y",
					"r",
					"rx",
					"ry",
					"d",
					"fill",
					"alignment-baseline",
					"baseline-shift",
					"clip-rule",
					"color-interpolation",
					"color-interpolation-filters",
					"color-rendering",
					"dominant-baseline",
					"fill-opacity",
					"fill-rule",
					"flood-color",
					"flood-opacity",
					"glyph-orientation-horizontal",
					"glyph-orientation-vertical",
					"lighting-color",
					"marker-end",
					"marker-mid",
					"marker-start",
					"paint-order",
					"shape-rendering",
					"stop-color",
					"stop-opacity",
					"stroke",
					"stroke-dasharray",
					"stroke-dashoffset",
					"stroke-linecap",
					"stroke-linejoin",
					"stroke-miterlimit",
					"stroke-opacity",
					"stroke-width",
					"text-anchor",
					"vector-effect",
				]),
				Ce = { html: void 0, svg: void 0 };
			function Oe(e, t = {}) {
				const n = Pe(e, SVGElement) ? "svg" : "html",
					o = Ce[n];
				if (o) return o;
				const r =
						t.includeStyleProperties ??
						_e(window.getComputedStyle(document.documentElement)),
					i = "html" === n ? r.filter((e) => !Te.has(e)) : [...r];
				return ((Ce[n] = i), i);
			}
			function De(e, t) {
				const n = (e.ownerDocument.defaultView || window)
					.getComputedStyle(e)
					.getPropertyValue(t);
				return n ? parseFloat(n.replace("px", "")) : 0;
			}
			function Le(e, t = {}) {
				return {
					width:
						t.width ||
						(function (e) {
							const t = De(e, "border-left-width"),
								n = De(e, "border-right-width");
							return e.clientWidth + t + n;
						})(e),
					height:
						t.height ||
						(function (e) {
							const t = De(e, "border-top-width"),
								n = De(e, "border-bottom-width");
							return e.clientHeight + t + n;
						})(e),
				};
			}
			const Me = 16384;
			function Be(e) {
				return new Promise((t, n) => {
					const o = new Image();
					((o.decode = () => t(o)),
						(o.onload = () => t(o)),
						(o.onerror = n),
						(o.crossOrigin = "anonymous"),
						(o.decoding = "async"),
						(o.src = e));
				});
			}
			async function Ne(e, t, n) {
				const o = "http://www.w3.org/2000/svg",
					r = document.createElementNS(o, "svg"),
					i = document.createElementNS(o, "foreignObject");
				return (
					r.setAttribute("width", `${t}`),
					r.setAttribute("height", `${n}`),
					r.setAttribute("viewBox", `0 0 ${t} ${n}`),
					i.setAttribute("width", "100%"),
					i.setAttribute("height", "100%"),
					i.setAttribute("x", "0"),
					i.setAttribute("y", "0"),
					i.setAttribute("externalResourcesRequired", "true"),
					r.appendChild(i),
					i.appendChild(e),
					(async function (e) {
						return Promise.resolve()
							.then(() => new XMLSerializer().serializeToString(e))
							.then(encodeURIComponent)
							.then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
					})(r)
				);
			}
			function Re(e, t, n, o) {
				const r = `.${e}:${t}`,
					i = n.cssText
						? (function (e) {
								const t = e.getPropertyValue("content");
								return `${e.cssText} content: '${t.replace(/'|"/g, "")}';`;
							})(n)
						: (function (e, t) {
								return Oe(document.documentElement, t)
									.map(
										(t) =>
											`${t}: ${e.getPropertyValue(t)}${e.getPropertyPriority(t) ? " !important" : ""};`,
									)
									.join(" ");
							})(n, o);
				return document.createTextNode(`${r}{${i}}`);
			}
			function je(e, t, n, o) {
				const r = window.getComputedStyle(e, n),
					i = r.getPropertyValue("content");
				if ("" === i || "none" === i) return;
				const a = Ie();
				try {
					t.className = `${t.className} ${a}`;
				} catch {
					return;
				}
				const s = document.createElement("style");
				(s.appendChild(Re(a, n, r, o)), t.appendChild(s));
			}
			const Fe = "application/font-woff",
				Ue = "image/jpeg",
				Ve = {
					woff: Fe,
					woff2: Fe,
					ttf: "application/font-truetype",
					eot: "application/vnd.ms-fontobject",
					png: "image/png",
					jpg: Ue,
					jpeg: Ue,
					gif: "image/gif",
					tiff: "image/tiff",
					svg: "image/svg+xml",
					webp: "image/webp",
				};
			function Ge(e) {
				const t = (function (e) {
					const t = /\.([^./]*?)$/g.exec(e);
					return t ? t[1] : "";
				})(e).toLowerCase();
				return Ve[t] || "";
			}
			function ze(e) {
				return -1 !== e.search(/^(data:)/);
			}
			function Ke(e, t) {
				return `data:${t};base64,${e}`;
			}
			async function He(e, t, n) {
				const o = await fetch(e, t);
				if (404 === o.status) throw new Error(`Resource "${o.url}" not found`);
				const r = await o.blob();
				return new Promise((e, t) => {
					const i = new FileReader();
					((i.onerror = t),
						(i.onloadend = () => {
							try {
								e(n({ res: o, result: i.result }));
							} catch (e) {
								t(e);
							}
						}),
						i.readAsDataURL(r));
				});
			}
			const qe = {};
			async function We(e, t, n) {
				const o = (function (e, t, n) {
					let o = e.replace(/\?.*/, "");
					return (
						n && (o = e),
						/ttf|otf|eot|woff2?/i.test(o) && (o = o.replace(/.*\//, "")),
						t ? `[${t}]${o}` : o
					);
				})(e, t, n.includeQueryParams);
				if (null != qe[o]) return qe[o];
				let r;
				n.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + new Date().getTime());
				try {
					const o = await He(
						e,
						n.fetchRequestInit,
						({ res: e, result: n }) => (
							t || (t = e.headers.get("Content-Type") || ""),
							(function (e) {
								return e.split(/,/)[1];
							})(n)
						),
					);
					r = Ke(o, t);
				} catch (t) {
					r = n.imagePlaceholder || "";
					let o = `Failed to fetch resource: ${e}`;
					(t && (o = "string" == typeof t ? t : t.message),
						o &&
							console.warn(
								"%cPOKI:%c failed to fetch resource",
								"font-weight: bold",
								"",
								o,
							));
				}
				return ((qe[o] = r), r);
			}
			async function Ye(e, t) {
				return Pe(e, HTMLCanvasElement)
					? (async function (e) {
							try {
								if (e.getContext("2d")) return Be(e.toDataURL());
							} catch {}
							if (0 === e.width || 0 === e.height) return Be("data:,");
							const t = document
								.createElement("canvas")
								.getContext("2d", { alpha: !0 });
							((t.canvas.width = e.width), (t.canvas.height = e.height));
							const n = t.getImageData(0, 0, t.canvas.width, t.canvas.height);
							return Be(
								await new Promise((o) => {
									try {
										requestAnimationFrame(() => {
											const r = document
													.createElement("canvas")
													.getContext("webgl2"),
												i = r.createTexture(),
												a = r.createFramebuffer();
											(r.bindTexture(r.TEXTURE_2D, i),
												r.bindFramebuffer(r.FRAMEBUFFER, a),
												r.texImage2D(
													r.TEXTURE_2D,
													0,
													r.RGBA,
													r.RGBA,
													r.UNSIGNED_BYTE,
													e,
												),
												r.framebufferTexture2D(
													r.FRAMEBUFFER,
													r.COLOR_ATTACHMENT0,
													r.TEXTURE_2D,
													i,
													0,
												),
												r.readPixels(
													0,
													0,
													e.width,
													e.height,
													r.RGBA,
													r.UNSIGNED_BYTE,
													new Uint8Array(n.data.buffer),
												),
												t.putImageData(n, 0, 0),
												r.deleteTexture(i),
												r.deleteFramebuffer(a));
											const s = r.getExtension("WEBGL_lose_context");
											(s && s.loseContext(), o(t.canvas.toDataURL()));
										});
									} catch {
										o("data:,");
									}
								}),
							);
						})(e)
					: Pe(e, HTMLVideoElement)
						? (async function (e, t) {
								if (e.currentSrc) {
									const t = document.createElement("canvas"),
										n = t.getContext("2d");
									return (
										(t.width = e.clientWidth),
										(t.height = e.clientHeight),
										n?.drawImage(e, 0, 0, t.width, t.height),
										Be(t.toDataURL())
									);
								}
								const { poster: n } = e,
									o = Ge(n);
								return Be(await We(n, o, t));
							})(e, t)
						: Pe(e, HTMLIFrameElement)
							? (async function (e, t) {
									try {
										if (e?.contentDocument?.body)
											return await Xe(e.contentDocument.body, t, !0);
									} catch {}
									return e.cloneNode(!1);
								})(e, t)
							: e.cloneNode(Qe(e));
			}
			const Je = (e) => "SLOT" === e.tagName?.toUpperCase(),
				Qe = (e) => null != e.tagName && "SVG" === e.tagName.toUpperCase();
			function $e(e, t, n) {
				return (
					(function (e, t, n) {
						const o = t.style;
						if (!o) return;
						const r = window.getComputedStyle(e);
						r.cssText
							? ((o.cssText = r.cssText),
								(o.transformOrigin = r.transformOrigin))
							: Oe(e, n).forEach((n) => {
									let i = r.getPropertyValue(n);
									if ("font-size" === n && i.endsWith("px")) {
										const e =
											Math.floor(parseFloat(i.substring(0, i.length - 2))) -
											0.1;
										i = `${e}px`;
									}
									(Pe(e, HTMLIFrameElement) &&
										"display" === n &&
										"inline" === i &&
										(i = "block"),
										"d" === n &&
											t.getAttribute("d") &&
											(i = `path(${t.getAttribute("d")})`),
										o.setProperty(n, i, r.getPropertyPriority(n)));
								});
					})(e, t, n),
					Pe(e, HTMLElement) &&
					Pe(t, HTMLElement) &&
					((function (e, t) {
						(Pe(e, HTMLTextAreaElement) && (t.innerHTML = e.value),
							Pe(e, HTMLInputElement) && t.setAttribute("value", e.value));
					})(e, t),
					(function (e, t) {
						if (Pe(e, HTMLSelectElement)) {
							const n = t,
								o = Array.from(n.children).find(
									(t) => e.value === t.getAttribute("value"),
								);
							o && o.setAttribute("selected", "");
						}
					})(e, t),
					(function (e, t, n) {
						(je(e, t, ":before", n), je(e, t, ":after", n));
					})(e, t, n),
					n.patchScroll)
						? (function (e, t) {
								if ((0 === e.scrollTop && 0 === e.scrollLeft) || !t.children)
									return t;
								for (let n = 0; n < t.children.length; n += 1) {
									const o = t.children[n];
									if (!o.children) continue;
									const { transform: r } = o.style,
										i = new DOMMatrix(r),
										{ a: a, b: s, c: c, d: d } = i;
									((i.a = 1),
										(i.b = 0),
										(i.c = 0),
										(i.d = 1),
										i.translateSelf(-e.scrollLeft, -e.scrollTop),
										(i.a = a),
										(i.b = s),
										(i.c = c),
										(i.d = d),
										(o.style.transform = i.toString()));
								}
								return t;
							})(e, t)
						: t
				);
			}
			let Ze = 0;
			async function Xe(e, t, n) {
				return n || !t.filter || t.filter(e)
					? xe(e)
						? (Ze++,
							Ze % 5 == 0 &&
								(await ((o = 0),
								(e) =>
									new Promise((t) => {
										setTimeout(() => t(e), o);
									}))),
							Promise.resolve(e)
								.then((e) => Ye(e, t))
								.then((n) =>
									(async function (e, t, n) {
										if (Qe(t)) return t;
										let o = [];
										return (
											(o =
												Je(e) && e.assignedNodes
													? _e(e.assignedNodes())
													: Pe(e, HTMLIFrameElement) && e.contentDocument?.body
														? _e(e.contentDocument.body.childNodes)
														: _e(
																("shadowRoot" in e ? (e.shadowRoot ?? e) : e)
																	.childNodes,
															)),
											0 === o.length ||
												Pe(e, HTMLVideoElement) ||
												(await o.reduce(
													(e, o) =>
														e
															.then(() => Xe(o, n))
															.then((e) => {
																e && t.appendChild(e);
															}),
													Promise.resolve(),
												)),
											t
										);
									})(e, n, t),
								)
								.then((n) => $e(e, n, t))
								.then((e) =>
									(async function (e, t) {
										const n = e.querySelectorAll
											? e.querySelectorAll("use")
											: [];
										if (0 === n.length) return e;
										const o = {};
										for (let r = 0; r < n.length; r++) {
											const i = n[r].getAttribute("xlink:href");
											if (i) {
												const n = e.querySelector(i),
													r = document.querySelector(i);
												n || !r || o[i] || (o[i] = await Xe(r, t, !0));
											}
										}
										const r = Object.values(o);
										if (r.length) {
											const t = "http://www.w3.org/1999/xhtml",
												n = document.createElementNS(t, "svg");
											(n.setAttribute("xmlns", t),
												(n.style.position = "absolute"),
												(n.style.width = "0"),
												(n.style.height = "0"),
												(n.style.overflow = "hidden"),
												(n.style.display = "none"));
											const o = document.createElementNS(t, "defs");
											n.appendChild(o);
											for (let e = 0; e < r.length; e++) o.appendChild(r[e]);
											e.appendChild(n);
										}
										return e;
									})(e, t),
								))
						: e.cloneNode(!1)
					: null;
				var o;
			}
			const et = /url\((['"]?)([^'"]+?)\1\)/g,
				tt = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
				nt = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
			async function ot(e, t, n, o, r) {
				try {
					const i = n
							? (function (e, t) {
									if (e.match(/^[a-z]+:\/\//i)) return e;
									if (e.match(/^\/\//)) return window.location.protocol + e;
									if (e.match(/^[a-z]+:/i)) return e;
									const n = document.implementation.createHTMLDocument(),
										o = n.createElement("base"),
										r = n.createElement("a");
									return (
										n.head.appendChild(o),
										n.body.appendChild(r),
										t && (o.href = t),
										(r.href = e),
										r.href
									);
								})(t, n)
							: t,
						a = Ge(t);
					let s;
					if (r) {
						s = Ke(await r(i), a);
					} else s = await We(i, a, o);
					return e.replace(
						(function (e) {
							const t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
							return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g");
						})(t),
						`$1${s}$3`,
					);
				} catch {}
				return e;
			}
			function rt(e) {
				return -1 !== e.search(et);
			}
			async function it(e, t, n) {
				if (!rt(e)) return e;
				const o = (function (e, { preferredFontFormat: t }) {
						return t
							? e.replace(nt, (e) => {
									for (;;) {
										const [n, , o] = tt.exec(e) || [];
										if (!o) return "";
										if (o === t) return `src: ${n};`;
									}
								})
							: e;
					})(e, n),
					r = (function (e) {
						const t = [];
						return (
							e.replace(et, (e, n, o) => (t.push(o), e)),
							t.filter((e) => !ze(e))
						);
					})(o);
				return r.reduce(
					(e, o) => e.then((e) => ot(e, o, t, n)),
					Promise.resolve(o),
				);
			}
			async function at(e, t, n) {
				const o = t.style?.getPropertyValue(e);
				if (o) {
					const r = await it(o, null, n);
					return (
						t.style.setProperty(e, r, t.style.getPropertyPriority(e)),
						!0
					);
				}
				return !1;
			}
			async function st(e, t) {
				xe(e) &&
					(await (async function (e, t) {
						((await at("background", e, t)) ||
							(await at("background-image", e, t)),
							(await at("mask", e, t)) || (await at("mask-image", e, t)));
					})(e, t),
					await (async function (e, t) {
						const n = Pe(e, HTMLImageElement),
							o = Pe(e, SVGImageElement);
						if ((!n || ze(e.src)) && (!o || ze(e.href.baseVal))) return;
						const r = n ? e.src : e.href.baseVal,
							i = await We(r, Ge(r), t);
						await new Promise((t, o) => {
							((e.onload = t), (e.onerror = o));
							const r = e;
							(r.decode && (r.decode = t),
								"lazy" === r.loading && (r.loading = "eager"),
								n ? ((e.srcset = ""), (e.src = i)) : (e.href.baseVal = i));
						});
					})(e, t),
					await (async function (e, t) {
						const n = _e(e.childNodes).map((e) => st(e, t));
						await Promise.all(n).then(() => e);
					})(e, t));
			}
			const ct = {};
			async function dt(e) {
				let t = ct[e];
				if (null != t) return t;
				const n = await fetch(e);
				return ((t = { url: e, cssText: await n.text() }), (ct[e] = t), t);
			}
			async function lt(e, t) {
				let { cssText: n } = e;
				const o = /url\(["']?([^"')]+)["']?\)/g,
					r = (n.match(/url\([^)]+\)/g) || []).map(async (r) => {
						let i = r.replace(o, "$1");
						return (
							i.startsWith("https://") || (i = new URL(i, e.url).href),
							He(
								i,
								t.fetchRequestInit,
								({ result: e }) => ((n = n.replace(r, `url(${e})`)), [r, e]),
							)
						);
					});
				return Promise.all(r).then(() => n);
			}
			function ut(e) {
				if (null == e) return [];
				const t = [];
				let n = e.replace(/(\/\*[\s\S]*?\*\/)/gi, "");
				const o = new RegExp(
					"((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})",
					"gi",
				);
				for (;;) {
					const e = o.exec(n);
					if (null === e) break;
					t.push(e[0]);
				}
				n = n.replace(o, "");
				const r = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
					i = new RegExp(
						"((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",
						"gi",
					);
				for (;;) {
					let e = r.exec(n);
					if (null === e) {
						if (((e = i.exec(n)), null === e)) break;
						r.lastIndex = i.lastIndex;
					} else i.lastIndex = r.lastIndex;
					t.push(e[0]);
				}
				return t;
			}
			async function pt(e, t) {
				if (null == e.ownerDocument)
					throw new Error("Provided element is not within a Document");
				const n = _e(e.ownerDocument.styleSheets),
					o = await (async function (e, t) {
						const n = [],
							o = [];
						return (
							e.forEach((n) => {
								if ("cssRules" in n)
									try {
										_e(n.cssRules || []).forEach((e, r) => {
											if (e instanceof CSSImportRule) {
												let i = r + 1;
												const a = dt(e.href)
													.then((e) => lt(e, t))
													.then((e) =>
														ut(e).forEach((e) => {
															try {
																n.insertRule(
																	e,
																	e.startsWith("@import")
																		? (i += 1)
																		: n.cssRules.length,
																);
															} catch (t) {
																console.error(
																	"Error inserting rule from remote css",
																	{ rule2: e, err: t },
																);
															}
														}),
													)
													.catch((e) => {
														console.error(
															"Error loading remote css",
															e.toString(),
														);
													});
												o.push(a);
											}
										});
									} catch (r) {
										const i =
											e.find((e) => null == e.href) || document.styleSheets[0];
										(null != n.href &&
											o.push(
												dt(n.href)
													.then((e) => lt(e, t))
													.then((e) =>
														ut(e).forEach((e) => {
															i.insertRule(e, i.cssRules.length);
														}),
													)
													.catch((e) => {
														console.error("Error loading remote stylesheet", e);
													}),
											),
											console.error("Error inlining remote css file", r));
									}
							}),
							Promise.all(o).then(
								() => (
									e.forEach((e) => {
										if ("cssRules" in e)
											try {
												_e(e.cssRules || []).forEach((e) => {
													n.push(e);
												});
											} catch (t) {
												console.error(
													`Error while reading CSS rules from ${e.href}`,
													t,
												);
											}
									}),
									n
								),
							)
						);
					})(n, t);
				return (function (e) {
					return e
						.filter((e) => e instanceof CSSFontFaceRule)
						.filter((e) => rt(e.style.getPropertyValue("src")));
				})(o);
			}
			async function ft(e, t) {
				const n =
					null != t.fontEmbedCSS
						? t.fontEmbedCSS
						: t.skipFonts
							? null
							: await (async function (e, t) {
									const n = await pt(e, t);
									return (
										await Promise.all(
											n.map((e) => {
												const n = e.parentStyleSheet
													? e.parentStyleSheet.href
													: null;
												return it(e.cssText, n, t);
											}),
										)
									).join("\n");
								})(e, t);
				if (n) {
					const t = document.createElement("style"),
						o = document.createTextNode(n);
					(t.appendChild(o),
						e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t));
				}
			}
			async function mt(e, t = {}) {
				const { width: n, height: o } = Le(e, t),
					r = await Xe(e, t, !0);
				(await ft(r, t),
					await st(r, t),
					(function (e, t) {
						const { style: n } = e;
						(t.backgroundColor && (n.backgroundColor = t.backgroundColor),
							t.width && (n.width = `${t.width}px`),
							t.height && (n.height = `${t.height}px`));
						const o = t.style;
						null != o &&
							Object.keys(o).forEach((e) => {
								n[e] = o[e];
							});
					})(r, t));
				return await Ne(r, n, o);
			}
			async function gt(e, t = {}) {
				const { width: n, height: o } = Le(e, t),
					r = await mt(e, t),
					i = await Be(r),
					a = document.createElement("canvas"),
					s = a.getContext("2d"),
					c = window.devicePixelRatio || 1,
					d = t.canvasWidth || n,
					l = t.canvasHeight || o;
				return (
					(a.width = d * c),
					(a.height = l * c),
					t.skipAutoScale ||
						(function (e) {
							(e.width > Me || e.height > Me) &&
								(e.width > Me && e.height > Me
									? e.width > e.height
										? ((e.height *= Me / e.width), (e.width = Me))
										: ((e.width *= Me / e.height), (e.height = Me))
									: e.width > Me
										? ((e.height *= Me / e.width), (e.width = Me))
										: ((e.width *= Me / e.height), (e.height = Me)));
						})(a),
					(a.style.width = `${d}`),
					(a.style.height = `${l}`),
					t.backgroundColor &&
						((s.fillStyle = t.backgroundColor),
						s.fillRect(0, 0, a.width, a.height)),
					s.drawImage(i, 0, 0, a.width, a.height),
					a
				);
			}
			async function ht(e, t = {}) {
				return (await gt(e, t)).toDataURL();
			}
			var yt = n(366),
				wt = n.n(yt);
			async function vt(e, t = {}, n = 5e3) {
				const o = new AbortController(),
					{ signal: r } = o,
					i = { ...t, signal: r };
				let a = null;
				const s = new Promise((e, t) => {
					a = setTimeout(() => {
						(o.abort(),
							t(
								new DOMException(`Signal timed out after ${n}ms`, "AbortError"),
							));
					}, n);
				});
				try {
					const t = await Promise.race([fetch(e, i), s]);
					return (a && clearTimeout(a), t);
				} catch (t) {
					throw (
						a && clearTimeout(a),
						t instanceof Error && "AbortError" === t.name
							? (W(
									`fetchWithTimeout: Fetch aborted for ${e}. Error: ${t.message}`,
								),
								t)
							: t instanceof Error
								? (W(`fetchWithTimeout: Fetch error for ${e}:`, t.message), t)
								: (W(
										`fetchWithTimeout: An unexpected error occurred for ${e}:`,
										t,
									),
									new Error("An unexpected fetch error occurred."))
					);
				}
			}
			const bt = async (e) => {
					const { screenshot: t } = e,
						n = await vt(
							"https://api.poki.io/screenshot",
							{
								method: "POST",
								headers: { "Content-Type": "application/json" },
								body: JSON.stringify({
									data: t,
									p4d_game_id: U.gameID,
									p4d_version_id: U.versionID,
								}),
							},
							3e4,
						);
					try {
						if (200 === n.status) {
							return "https://poki-user-content.com/" + (await n.json()).source;
						}
					} catch {}
					return null;
				},
				kt = async () => {
					const e = (e) =>
							![
								"VIDEO",
								"TEXTAREA",
								"SCRIPT",
								"NOSCRIPT",
								"INPUT",
								"IFRAME",
							].includes(e.nodeName) &&
							!("IMG" === e.nodeName && !e.getAttribute("src")) &&
							!e.classList?.contains(wt().container),
						t = document.body.style.minWidth,
						n = document.body.style.minHeight;
					((document.body.style.minWidth = "100%"),
						(document.body.style.minHeight = "100%"));
					let o = await ht(document.body, {
						filter: e,
						width: window.innerWidth,
						height: window.innerHeight,
						backgroundColor: "#fff",
					});
					if (o && o.length < 10) {
						const t = document.body.style.position;
						((document.body.style.position = "fixed"),
							(o = await ht(document.body, {
								filter: e,
								width: window.innerWidth,
								height: window.innerHeight,
								backgroundColor: "#fff",
							})),
							(document.body.style.position = t));
					}
					return (
						(document.body.style.minWidth = t),
						(document.body.style.minHeight = n),
						o
					);
				},
				At = async (e = null) => {
					let t = await kt();
					if (t && t.length > 10) {
						e &&
							(t = await (async (e, t) => {
								const { title: n, thumbnail: o } = t,
									r = new Image();
								r.crossOrigin = "Anonymous";
								const i = new Promise((e) => {
									r.onload = () => e(r);
								});
								r.src = e;
								const a = new Image();
								a.crossOrigin = "Anonymous";
								const s = new Promise((e) => {
									a.onload = () => e(a);
								});
								a.src = "https://a.poki-cdn.com/images/screenshot-frame.png";
								const c = new Image();
								c.crossOrigin = "Anonymous";
								const d = new Promise((e) => {
									c.onload = () => e(c);
								});
								c.src = `https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=128,height=128,fit=cover,f=auto/${o}`;
								const l = new FontFace(
										"TorusBold",
										"url(https://a.poki-cdn.com/fonts/torus-bold-latin.woff2)",
									).load(),
									[u, p, f, m] = await Promise.all([i, s, d, l]),
									g = document.createElement("canvas");
								((g.width = u.width), (g.height = u.height));
								const h = g.getContext("2d");
								h.drawImage(u, 0, 0);
								const y = g.width / p.width,
									w = p.height * y,
									v = g.height - w;
								h.drawImage(p, 0, v, g.width, w);
								const b = f.height * y;
								((e, t, n, o, r, i, a) => {
									(e.save(), e.beginPath());
									const s = n + r,
										c = o + i;
									(e.moveTo(n + a, o),
										e.lineTo(s - a, o),
										e.quadraticCurveTo(s, o, s, o + a),
										e.lineTo(s, c - a),
										e.quadraticCurveTo(s, c, s - a, c),
										e.lineTo(n + a, c),
										e.quadraticCurveTo(n, c, n, c - a),
										e.lineTo(n, o + a),
										e.quadraticCurveTo(n, o, n + a, o),
										e.closePath(),
										e.clip(),
										e.drawImage(t, n, o, r, i),
										e.restore());
								})(h, f, 64 * y, v + 20 * y, b, b, 24 * y);
								const { fonts: k } = document;
								k.add(m);
								const A = 226 * y,
									S = v + 68 * y;
								return (
									(h.textAlign = "left"),
									(h.textBaseline = "top"),
									(h.fillStyle = "#002b50"),
									(h.font = `700 ${56 * y}px TorusBold,sans-serif`),
									h.fillText(n, A, S),
									g.toDataURL()
								);
							})(t, e));
						return await bt({ screenshot: t });
					}
					return null;
				};
			function St() {
				let e;
				try {
					((e = performance
						.getEntriesByType("resource")
						.map((e) => e.encodedBodySize)
						.reduce((e, t) => e + t)),
						(e +=
							performance.getEntriesByType("navigation")[0].encodedBodySize));
				} catch {}
				return e;
			}
			const Et = "once",
				It = "force",
				_t = "on",
				xt = "off";
			let Pt = [],
				Tt = "";
			function Ct() {
				return Pt;
			}
			function Ot(e) {
				Pt = e;
			}
			function Dt() {
				return Tt;
			}
			function Lt(e) {
				if ("" !== e && e !== Et && e !== It && e !== _t && e !== xt)
					throw new Error(`Invalid playtest capture mode: ${e}`);
				Tt = e;
			}
			const Mt =
					"MacIntel" === window.navigator.platform &&
					void 0 !== window.navigator.standalone &&
					navigator.maxTouchPoints > 1,
				Bt = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
			const Nt = D() || L() || Mt;
			let Rt = !1;
			const jt = new Image();
			((jt.src =
				"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAdCAYAAACqhkzFAAADE2lDQ1BJQ0MgcHJvZmlsZQAAeNp9kk9s21Qcxz+2X92qCh4qYRqoqnIAKqoNma6gbkAhadI/tOuyJB1t4IDrOHUSx7ZsZyw9IuAIk+AAJ1BXCQ4cOMDWgZDQDttlEoi/EkIc0DQuO1ExTYIqHOKsOfEu7/s++r7v7/d+eiB2DN93BNB0o6Awn0mtrZdTg38i8TAjPMghwwz9dD6/DNDb+5YEd35GAvjhmOH7zpWvPt3rnJoYe2f/8/GxV3N3+f81XLFCE/gX5C9NP4hA2QXyr0V+BGIISAZr62UQo0Bys6t1ILnR1VkgGZQKsyDWgJRpGxUQ54GjG318s083nZYZ9zAGJIJWYRXQQDofNopLsX7LNHJF4H6Q3rOtxWVAgLTjR5lC7PmkGsytxp5Ldmuhl3OtFi2WYv1jw1sqAMMg/WGGs+XeXXdj5TSQAOl2q7GajvndipXN9TyBV4g9srpll14CVJBHwnPFHDAC8pEte3Yl5hN148V87NctZz6uKz/rR/nT9+o6K8vAYZDnrPDgjZFdWuhq+ZUoKPXuOtXa3GKcec4OFgqxft138su9TCPIzQNJkN+23NVil8vbFSO7FOd8JkbFjHhOTIuMmBEvkKVGiI+DRZ08Bi4RBg4OxsCtge85hYdLjQiPoO9k0SJgiRp1LBy2pDMUMbGxCGjifZG8uvNTYnfoekSRBvUuF0kxLdLiefGMeEqcIE2VmvwQBvX3vfbJszYZajhUCGlwk4BmdaZ98qytX9cv6lf0X/Tb+o7yobKr3FC+Vi6TwcKK/fdqa0PaMS2tTWhJbVAb1R4lR4MAA5cVbtImIuIOZQxCHDxcdUodV6fUx0mp42pWPaE+qT7dNxuDNkUa3CKgCX1/VwIS8ayngFFm8fBpE1BjE5uIFGn8eMYpFnExeYKjpJhEZ5Lja+vlVDdu7wwSIB2+ccC8bZj+G5QLB2zjA7j8Jhz59YA98hEcegMufesbgQGAAsjVKvz1Mdy3Dg98B8Mvh9Xjk93uExkY+L3T2XsMBt+F/Qudzj/bnc7+RVB+g2/c/wD2jOYIAU+O+QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAQpSURBVHjapFZLLFx9FD9z74x2COod72eQUCLSSGhrPOoRFhY23xcaYtdWx6O0lSbNJxQpY6ZtpG2w6aIWFgRhiIVHLBoiLLxJBB2PIMSMx2B6zr+9k2lSH6Mnubn/3HPv75zzO68rSklJKQoPD1fs7u6CwWCAs7MzEIlExvv5+Tl7TufT09PfdPSc9CR6vR54ngd+YWFhxMrK6lZgYKBaq9UaPza9kwjgpjoSQU86juOAx/PLxcXFu9bW1qd+fn5DBwcHfw0ox8tyfn4+3tLSUu/v7z+k0+n+CvA5AdJD9DQBPT1B0GFTT80B5PAsIWVcXBxT9PT0vJmYmHjh5OQE1xEC5MlKU1MTtLa2sofd3d1Vk5OT1wJlScHLIicnB+Lj45nrg4ODFH6ira2tztvbe4Q4NYfDMgJMS0uDoKAgFvrx8TEMDw8DJuqBjY2NlkAPDw+vxqHol0YsFhvdrqqqguLiYnZWq9Vvp6ennzk4OFwpZPFFitraWmakpqaGEvWWnMDiV+zs7FyalAuluroaioqKhOzXzczMFF/mKXdZCHV1dcbwe3t7a+fm5uT/B8pdhRcKv6CgQCgp5ezsbAGBCgkxG5Ckvr4eCgsL2bmvr68eh0r+nzzlzClahUIBcrlc8PQdltVTe3v73zzlzO0EpVIJZWVlAqeqpaWlJ6aectfp18rKSmhoaBDq9D2CPrazs2Oeii/7mKY01SMNX+qWlZUV2NzcBBx1gF0E+/v7BPohNjZWjFNKJaZO+VO2BNne3obk5GRYX1/Xb2xsSC56b2BgQImGpRd6mJeXB1lZWay3iSMcaQxMKpVuHx0d6XASLXt6eq7iLllFL1fRO42Hh8eeEVBYNjQYSktLobm5Gdra2piH7e3tgIOXNT/2eTb2dndXVxckJSXByckJ0Nnd3R0QEHiM+BWGLFGpVGBhYQGRkZFnHR0dLFnEGYWL1mFtbQ3GxsaIT9uKioqvBI4UgEajgeXlZXB1dWW8klUt0djS0mJITEzU0UTCLaiJiIhQ0xmtGkhwJRDR7GpsbJRRcvAbyM/PBy8vL2a4pKSEVin/HN+/QdMa0y9BS98x5HsxMTHv+vv7X+N0EaWmpoKvry84OjpSQdPwvY27/DNFEBAQwAAp20QbhVyKBymFiB98y8jIuB8VFbVKSxvJd8a+vYOh6mUyGd/Z2Qmjo6OwtbXlhpwthYWFTe7t7TFKcAX/nIf4F8DA0tPTW3De/Yt8GMgaJSchIeE/9OjR+Pi4JDg42FgBPj4+A7gevru4uBj/LJydnRmPRP5NtP6xvLz8H+KSwCg5tEcwlE38VWkQgHBFDGVnZydlZmbK3Nzc+smoRCJh7wuVIs7NzX2IJfEFC5d1A2WPSoE2A/3vREdHv5+amgoPCQn5FBoa+oWooMzSu6blJsgPAQYACgtfMJolu7EAAAAASUVORK5CYII="),
				(jt.onload = () => {
					Rt = !0;
				}));
			class Ft {
				image = null;
				ready = !1;
				drawSize = 0;
				previousMouseDown = !1;
				#r = 20;
				#i = 60;
				#a = 100;
				#s = 40;
				#c = 2;
				constructor(e) {
					((this.image = new Image()),
						(this.image.src = e),
						(this.image.onload = () => {
							this.ready = !0;
						}));
				}
				update(e) {
					var t, n, o;
					(e &&
						!this.previousMouseDown &&
						((this.drawSize += this.#r),
						(this.drawSize =
							((t = this.drawSize),
							(n = this.#i),
							(o = this.#a),
							Math.min(Math.max(t, n), o)))),
						(this.drawSize -= this.#c),
						(this.drawSize = e
							? Math.max(this.drawSize, this.#s)
							: Math.max(this.drawSize, 0)),
						(this.previousMouseDown = e));
				}
				draw(e, t, n) {
					const o = this.drawSize / 2,
						r = t - o,
						i = n - o;
					e.drawImage(
						this.image,
						0,
						0,
						this.image.width,
						this.image.height,
						r,
						i,
						this.drawSize,
						this.drawSize,
					);
				}
				destroy() {
					((this.image = null), (this.ready = !1));
				}
			}
			const Ut = new Ft(
					"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAtCAYAAADV2ImkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAArGSURBVHgBvVlbbFxHGZ451z273rXXsWt7k5RESpwoJqQpqdI2hTiNeQDaB0COoAIkHgolECQuEpc+eA0SD6ihBKrmIU+FloK3SJFIoWpDurmASy5qIbEJJaI0TryRb3vzXs5lZpg5O7N79vTs2gkVRxrP8dkzM9988/3/P/MfCN6HixACxwGA6fFxaXB2AGYTGRgfGCCJTIak6e/DY2N4jL4GISTgf7wguMPLBTk+rloj39srK+TDsqrvkSD4kARAlyTBGHsHYVKg1bsIo+sEgb+Zjnk69NpT6bGxMftOwd8uYDg6OiGte2Rdf2zLzq+rmv7VkAI7dRkAnSJVaJFpjxDWOsYUEqLFocVEAFRpMR0yYznOmepy/kfvHD14LZVKodsCsNoXk8mkZO38Yq/Wn0jquv5EhwpAWAHAoGBDtGgcsMTBuoABB0xvLFpMWioOAGValmkxbfRCaak0/pOPxa6tlvFVAR4dHZW3fOdX3zI07cmYBjujFGwHBRumdYiC1ChglQGGNcCssNEJqRXGsM0BM5ZLTq0ULQAKJpkplys/3jH78rEDBw6wObYFLq+AFY4mk9rWL/z0F7Gw/v3eEAytCQHQrQMQp6VTqxXGdkSpMS5Yd5mn9zpfAVYb/H+2GkxC7qrIsBMo6iMzxqa7doTzr50/fx7dMcMHJ6b6ezZseSluyHsYyC4OMMLlwICotAdVrmlXsCs6xi7NVBagJgvBNJMFY5rJokBZztGyWAUga5LL5euXR5769I550ILplgx//NAhffPw5891h+VdvQYAPXqNWQY6ptZYDQewyKShcj2L2r3nE2OyYc9lLiGhe9mdKOxD4Z4HNtrSr996K+2sGvBwMqk8+JkfHuky1E/2UgkIGXTREuXLz5aXgW3Sr0fHopa55xC1EgBWGCq7MJDu1u55oGertP7VS5dO4BUBM2/QP/Ltx2ORcJKB7WaAuV5jQgqcVTG4cGWilribgJ7/pdqjOpveNl4ZMR04UNklDW0v7V+vTKbT6SZpSH7A5d1f2xwNh5+Mc8NiEohyw3KXXeHG4mERegYVF/QVwbbCQbJVMbiBshWLcfvo4mNGdPUHc9tG72rLMIteZ7Pqkbih7OkJNQAzZusS4Iyy5YewMePV+EfxjggsQRMl9WADdWB0Rfete/iVdPo5HMjwd19ZGDQ09TGmU1Ei3BsIrfo1J4Bwh9A8OAgA7fEmjC3GuM7dYJgbc5TXRkj9SnnnQBPLdYZZcOjf/9jPug15O9Nt3OMNDG5cXgmIpfaChh6g0PM88PL2ARvtGLuI8mkTHh2VCHp4vXpKaLnOcGRoSA2p8kfrzt/HrOwDKwZYiVHiK8A3QcmjaTegcFfJXCbDoemhJ2ZnQUi0cwEz7fbu/+awpkjrhCGISCTACqtuB84Lxg/MvyLiR2EHwuUJ0AKHocJY52e/MSyau4BpDJc0Rd/nuivJEwA8EQy2AbaaXUugnnkteXy3CDgMeIgTF1LVe9kusQ44Hh+hgOXtutTQapMMQINdYWBwFYDagfdKRLDslYcqN4DLurYHgJRcB2xZGVmSpbvr4RQ2bxWF028FFraZAPG1IZ42TX1AT1AB3INwPJKifDA+NKQIwLAUpr9BuF4WeuKmKGbNem9lUN77dtolvucAtJ64N6TzQ0Gnc92oMUwNDkQ7DLp/hjExQxjQcdAgQfekRd3Kvb1nHNh8X6ulKI4xsQLocqlAIonO60voj0ABdStDCvLDrdqRoPehry17IefucyBVAqRGF2cPC6wl9rzkB+kH1I61Vs/aaZk9E3voZsPERTleI9WVxI3LGYIIKSB+pMEcuDjigIBBVvIK7TTvBS2eYX5D+NiYRzy28ScI3SyULPck4jKsrzUItsyr7EebnwzYy8g361ZAVgIV9E5QMHHDMmicThx+gLVtdCPqQHfxXYaL9i3HqZYnTX66tXkRcd0rj1aurRW4VvJo0jRp7CNEaoDxyQrDhBxryrYlTPMZhDFMPrJxIzaXly9XnVr+wEaN8xebsVgiQIINxg+ulYG289WINFICgjA3j0FLeSn35677hhymBlfIV65cwfN/+O3ZKiIFdkCs8KQHA25zHQWdv4MMDwYw6H/WBJo0ki0if8HGrojioNm5l58/t2bpPDUzUrO8kZER3KWp1Uoh/8syT3SwRlVcWxaHNJaLkGbWWmnar9GgwFI3cB9YttIlm+Oomn9VwnZlamobqTNM98L4JlxrLr155liRJzlYA3EcdyWCm0G3c2sk4N4vF+zVqwDryQq5iRaKIf/23w+jxWV7aGjUbeoCZsiHOqfR8tU3b5XzhefzVu1l0bDMDUB4EOxjO4jdoPv6JDyuU2zUKx6i2NgFNn5x+bhz5dy/jIc2WzRmNACzPijlCKugeuPsH58uWKSYt2tJDgG6ghryEKD9xuVn2c+0mCTyMGsKCXBm2biMsEIFZUrvTB2WOsLl7MmTdROqnzhSqQO4e3O36czM3MgvLjyTM2kmxuKN+azLvHObH2H8bo+A1qHXm2dzSLMEirx/NibLArE6v3DrmcKFU/+UF5FNM5z1Q2jTqfkTu3eTTNkG5uULU/qmnX1QD233bobYwFLAqYPwP36JEM/yuwHBA9bkXsCbrlriKaulbO6F2d8ffTrioOLc3EVreno6GHA6/ToY2nAawA6dZKcuToa37dpDZCUBAxgTGhQ+2vvMGwAcn8uyUEOvQqtsJZcoqwsMbMW+OvObZ7/s2FK+uICqqdSzTclBX+ZnHExNvY5PXPwTcYhBUG7+jDQwuJemj3oIbA0Ke4Ah3ABqc6AmB1oVYBH3ABYHW60xu1iqXpw7ffxLShXMgUKuPDgIbH/mJ9AzTUxMyJOTQFuQ342qNo4PfOrxsc7u+Ofco7/G8wbisKo0En1iww89Pgx5tO5Pahc8oPNUBjd/d2y8RJxc3FxTymbjJrWr96Re5RaAwRtvvESyloZVrOH8Py5Mgrs+sOBoka0OkKLu8nIGhbsTcd/yhlSnsfxMq0WnIYGsWZPBYoUUc/PzR/59/OhhyVYLSlguL9/qDwTbkmFxDQ8nlegg0DpoigCqSiR+z0ODXVvvPRSJRh+N8sRgmKda6+cv2JyBr8sDNyYh/G0pl31x8dyrP89nrmWIHSo5EakEbqyzJiZGcatPCG0Bs50cTQHILMlCd/whyTHCCFpGdNv9m2Lb7z8YNoz7dFUeMDzfOLzZSKZ1sVW0kPAMpFjJzr84/5dTz+HZ/8zZGFUcKJcH+8wKfZ0GiCRuh6ktYHGxFOzs7ICsKI5ekfOGBSxdMWXdArLat//RB8Nr+ncrhrFFUZS1sqr2Q0nqcAFjvEwwKdpm9W2rlL9YzeamF0+fmEQEm1CRLGsZmdFeuarkuqqJRAatBHbVgNlVYzsl9/ffUkpGRSPzuZDd2aE4FlEMIqsEO7Ij0f21ItOUgUwwYlxbQCUAOxg6qgYwItDBFWRLKrSUSJ+F52bsDRv2OsnkPnFWWPFaNWAPcjiaSknxk1kqgIyapXkZQ8UKMVSZFCzXiE2JSPQrA7AUh4QwBYojGMo2QpJlR0zgZBPAAXQrkEqNUkZv7wPj7QOu46ZeezwppdNAGhychYnECLw0O+0mO7oqkVq/ffTbCJKx4yjYNK/gRCLhWj5den8E//9fLKHI2Gd6Z4U+ce8BK+y39+n6L5YV4ArrvzyVAAAAAElFTkSuQmCC",
				),
				Vt = new Ft(
					"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADBSURBVHgBvdZdEcIwDAfwZAqQgAQs4AAHIAEHzAlSWgfMARZAQUjZ9rDbR5M22f+uzdaX30OvaREUIaIDlxuPVCMiRrAOIw+a5zngrsiYlwmWQWwwIVKHKZEyrBDRYZWIDDNCtjFjZBlzQsaEZCB/HLm+wTfnhqcT+OfawD75Jijy+IBvuv/M+3Qnv4QJyQst2Wf1LFli2e5ggYn7XQ2m7uAlWPGdpMGqb1kJZvZuaN2RDBakCIIi1Hf6y/DbaR6QP+1P5pe98AyNAAAAAElFTkSuQmCC",
				);
			function Gt(e, t, n, o, r, i) {
				if (!Rt || !i || !jt) return;
				const a = Math.max(o, r);
				if (
					((function (e, t, n, o, r, i) {
						[Ut, Vt].forEach((a) => {
							if (!a.ready || !i) return;
							const s = a === Ut ? t : n;
							a.update(s);
							const c = e.x * o,
								d = e.y * r;
							a.draw(i, c, d);
						});
					})(e, t, n, o, r, i),
					!Nt)
				) {
					const t = 0.5 * a;
					i.drawImage(
						jt,
						0,
						0,
						jt.width,
						jt.height,
						e.x * o,
						e.y * r,
						jt.width * t,
						jt.height * t,
					);
				}
			}
			const zt = "Game tab in background";
			let Kt = !0,
				Ht = [],
				qt = null,
				Wt = document.createElement("canvas"),
				Yt = null,
				Jt = null,
				Qt = null,
				$t = 0,
				Zt = [],
				Xt = [],
				en = [],
				tn = [],
				nn = 24;
			((D() || L() || Mt) && (nn = 12),
				Wt.setAttribute("data-poki-no-playtest", "true"),
				Wt.addEventListener("webglcontextlost", () => {
					(console.info(
						"%cPOKI_PLAYTEST:%c streamCanvas context lost",
						"font-weight: bold",
						"",
					),
						(Wt = document.createElement("canvas")),
						(Yt = null));
				}));
			const on = { x: 0, y: 0 };
			let rn = !1,
				an = !1,
				sn = !1,
				cn = !1,
				dn = "",
				ln = 1,
				un = 1,
				pn = -1,
				fn = -1;
			function mn(e) {
				if (null === qt || !Ht.length) return;
				const t = Ht[0],
					n = t.width / qt.width,
					o = t.height / qt.height,
					r = (e.clientX - qt.left) * n,
					i = (e.clientY - qt.top) * o;
				((on.x = Math.max(0, Math.min(r, t.width))),
					(on.y = Math.max(0, Math.min(i, t.height))));
			}
			const gn = (e) => {
					Ht.length && Wt && mn(e);
				},
				hn = (e) => {
					Ht.length &&
						Wt &&
						(0 === e.button
							? ((rn = !0), (an = !1))
							: 2 === e.button
								? ((sn = !0), (cn = !1))
								: 1 === e.button &&
									((rn = !0), (an = !1), (sn = !0), (cn = !1)),
						mn(e));
				},
				yn = (e) => {
					0 === e.button
						? (an = !0)
						: 2 === e.button
							? (cn = !0)
							: 1 === e.button && ((an = !0), (cn = !0));
				};
			function wn() {
				const e = dn;
				e &&
					Wt &&
					Yt &&
					((Yt.fillStyle = "rgba(255, 255, 255, 0.5)"),
					Yt.fillRect(0, 0, Wt.width, Wt.height),
					(Yt.font = "48px Arial"),
					(Yt.fillStyle = "#009cff"),
					(Yt.textAlign = "center"),
					Yt.fillText(e, Wt.width / 2, Wt.height / 2));
			}
			function vn(e) {
				if (!Wt || !Ht.length) return;
				const t = Ht[0],
					n = t.width,
					o = t.height;
				if (n === pn && o === fn && !e) return;
				((pn = n), (fn = o), (qt = t.getBoundingClientRect()));
				let { width: r, height: i } = qt;
				(0 !== r && 0 !== i) || ((r = n), (i = o));
				const a = D() || L(),
					s = Mt ? 1024 : a ? 640 : 1280,
					c = Math.min(s / r, s / i, 1);
				((r = Math.round(r * c)),
					(i = Math.round(i * c)),
					(ln = r / n),
					(un = i / o));
				e || Wt.width !== r || Wt.height !== i
					? ((Wt.width = r),
						(Wt.height = i),
						console.info(
							`%cPOKI_PLAYTEST:%c capturing at ${r}x${i} (${n}x${o})`,
							"font-weight: bold",
							"",
						))
					: console.info(
							`%cPOKI_PLAYTEST:%c resize but video unchanged ${r}x${i} (${n}x${o})`,
							"font-weight: bold",
							"",
						);
			}
			function bn(e) {
				let t = null;
				for (let n = 0; n < e.length; n++)
					if (!document.body.contains(e[n])) {
						if (e[n].pokiHtmlDummyCanvas) continue;
						if (
							(t || (t = document.getElementsByTagName("flt-glass-pane")), t)
						) {
							let o = !1;
							for (let r = 0; r < t.length; r++)
								t[r].shadowRoot?.contains(e[n]) && (o = !0);
							if (o) continue;
						}
						return !1;
					}
				return !0;
			}
			async function kn(e) {
				if (
					Wt &&
					(Jt ||
						((Jt = document.createElement("canvas")),
						0 === Ht.length
							? ((Jt.width = Wt.width), (Jt.height = Wt.height))
							: ((Jt.width = Ht[0].width), (Jt.height = Ht[0].height)),
						Jt.addEventListener("contextlost", () => {
							((Jt = null), (Qt = null));
						})),
					Qt || ((Qt = Jt.getContext("2d")), Qt))
				)
					try {
						performance.now();
						const t = await (async (e) => {
							const t = [
								"VIDEO",
								"TEXTAREA",
								"SCRIPT",
								"NOSCRIPT",
								"INPUT",
								"IFRAME",
							];
							e || t.push("CANVAS");
							const n = (e) =>
									!(
										t.includes(e.nodeName) ||
										("IMG" === e.nodeName && !e.getAttribute("src")) ||
										e.classList?.contains(wt().container) ||
										"true" === e.getAttribute?.("data-poki-playtest-skip")
									),
								o = document.body.style.minWidth,
								r = document.body.style.minHeight,
								i = document.body.style.backgroundColor;
							let a;
							((document.body.style.minWidth = "100%"),
								(document.body.style.minHeight = "100%"),
								e || (document.body.style.backgroundColor = "transparent"));
							try {
								a = await mt(document.body, {
									filter: n,
									width: window.innerWidth,
									height: window.innerHeight,
								});
							} catch (e) {
								console.warn(
									"%cPOKI:%c failed to generate svg",
									"font-weight: bold",
									"",
									e,
								);
							}
							return (
								(document.body.style.minWidth = o),
								(document.body.style.minHeight = r),
								(document.body.style.backgroundColor = i),
								a
							);
						})(e);
						if (t && t.length > 10) {
							const e = await new Promise((e, n) => {
								const o = new Image();
								((o.decode = () => e(o)),
									(o.onload = () => e(o)),
									(o.onerror = n),
									(o.crossOrigin = "anonymous"),
									(o.decoding = "async"),
									(o.src = t));
							});
							requestAnimationFrame(() => {
								Jt &&
									Qt &&
									(Qt.clearRect(0, 0, Jt.width, Jt.height),
									Qt.drawImage(
										e,
										0,
										0,
										e.width,
										e.height,
										0,
										0,
										Jt.width,
										Jt.height,
									),
									($t = 0));
							});
						}
					} catch (e) {
						(console.warn(
							"%cPOKI_PLAYTEST:%c ui canvas error",
							"font-weight: bold",
							"",
							e.name,
							e.message,
							e.stack,
						),
							$t++);
						const t = Dt();
						(t === _t || t === It) && $t > 10 && (Kt = !0);
					}
			}
			function An(e) {
				dn = e;
			}
			async function Sn(e) {
				if (!Kt) {
					Ht = e;
					for (let e = 0; e < Zt.length; e++) Zt[e].stop();
					for (let e = 0; e < Xt.length; e++) Xt[e].readable.cancel();
					for (let e = 0; e < en.length; e++) en[e].cancel();
					for (let e = 0; e < tn.length; e++) tn[e].close();
					((Zt = []), (Xt = []), (en = []), (tn = []));
					try {
						if (Bt)
							for (let e = 0; e < Ht.length; e++) {
								if (Ht[e].pokiHtmlDummyCanvas) continue;
								const t = Ht[e].captureStream(nn).getVideoTracks()[0];
								(Zt.push(t), tn.push(null));
								const n = new Blob(
										[
											"self.onmessage=(async({data:{track:e}})=>{if(!e)return;const a=new MediaStreamTrackProcessor({track:e}).readable.getReader(),s=()=>{a.read().then(({done:e,value:a})=>{e?a.close():(postMessage(a),a.close(),s())})};s()});",
										],
										{ type: "application/javascript" },
									),
									o = new Worker(URL.createObjectURL(n));
								o.onmessage = ({ data: t }) => {
									tn.length <= e ||
										(null !== tn[e] && tn[e].close(), (tn[e] = t));
								};
								try {
									o.postMessage({ track: t });
								} catch (e) {
									(console.warn(
										"%cPOKI_PLAYTEST:%c worker error",
										"font-weight: bold",
										"",
										e,
									),
										(Kt = !0));
								}
							}
						else
							for (let e = 0; e < Ht.length; e++) {
								if (Ht[e].pokiHtmlDummyCanvas) continue;
								const t = Ht[e].captureStream(nn).getVideoTracks()[0],
									n = new window.MediaStreamTrackProcessor(t),
									o = n.readable.getReader();
								(Zt.push(t), Xt.push(n), en.push(o), tn.push(null));
								const r = () => {
									o.read().then(({ done: t, value: n }) => {
										t
											? (Kt = !0)
											: tn.length <= e
												? n.close()
												: (null !== tn[e] && tn[e].close(), (tn[e] = n), r());
									});
								};
								r();
							}
						vn(!0);
					} catch (e) {
						(console.warn(
							"%cPOKI_PLAYTEST:%c setPlaytestSoureCanvasses error",
							"font-weight: bold",
							"",
							e,
						),
							(Kt = !0));
					}
				}
			}
			function En() {
				const e = Ct();
				if (e?.length && bn(e)) return e;
				const t = Dt();
				if (t === It) {
					const e = document.createElement("canvas");
					return (
						(e.width = window.innerWidth),
						(e.height = window.innerHeight),
						e.setAttribute("data-poki-html-canvas", "true"),
						(e.pokiHtmlDummyCanvas = !0),
						[e]
					);
				}
				let n = 0,
					o = Array.from(document.getElementsByTagName("canvas"));
				if (0 === o.length) {
					const e = document.getElementsByTagName("flt-glass-pane");
					for (let t = 0; t < e.length; t++) {
						const { shadowRoot: n } = e[t];
						n && (o = o.concat(Array.from(n.querySelectorAll("canvas"))));
					}
				}
				let r = [];
				if (
					(o.forEach((e) => {
						if ("true" === e.getAttribute("data-poki-no-playtest")) return;
						const t = getComputedStyle(e),
							{ width: o, height: i } = t,
							a = parseInt(o, 10) * parseInt(i, 10);
						a >= n &&
							(function (e) {
								if (!e) return !1;
								let t = e,
									n = !0;
								for (; t && t !== document.body; ) {
									const e = window.getComputedStyle(t);
									if ("none" === e.display) return !1;
									if ("hidden" === e.visibility) return !1;
									if (n && (0 === t.offsetWidth || 0 === t.offsetHeight))
										return !1;
									("absolute" === e.position && (n = !1),
										(t = t.parentElement));
								}
								const o = e.getBoundingClientRect(),
									r =
										window.innerHeight || document.documentElement.clientHeight,
									i = window.innerWidth || document.documentElement.clientWidth;
								return !(
									o.right < 0 ||
									o.bottom < 0 ||
									o.left > i ||
									o.top > r
								);
							})(e) &&
							(a > n && (r = []),
							r.push({ canvas: e, style: t, index: r.length }),
							(n = a));
					}),
					0 === r.length)
				) {
					if (t === _t) {
						const e = document.createElement("canvas");
						return (
							(e.width = window.innerWidth),
							(e.height = window.innerHeight),
							e.setAttribute("data-poki-html-canvas", "true"),
							(e.pokiHtmlDummyCanvas = !0),
							[e]
						);
					}
					return [];
				}
				return (
					r.sort((e, t) => {
						const n = parseInt(e.style.zIndex, 10) || 0,
							o = parseInt(t.style.zIndex, 10) || 0;
						return n < o ? -1 : n > o ? 1 : e.index - t.index;
					}),
					r.map((e) => e.canvas)
				);
			}
			function In(e, t) {
				if (!Wt) return null;
				((Kt = !1), Sn(e), vn(!0));
				const n = Wt.captureStream(nn);
				let o;
				(window.addEventListener("pointermove", gn, {
					capture: !0,
					passive: !0,
				}),
					window.addEventListener("pointerdown", hn, {
						capture: !0,
						passive: !0,
					}),
					window.addEventListener("pointerup", yn, {
						capture: !0,
						passive: !0,
					}),
					window.addEventListener("contextmenu", yn, {
						capture: !0,
						passive: !0,
					}));
				let r,
					i = 0,
					a = null;
				const s = Dt();
				if (s === _t || s === It) {
					let e = 0;
					o = setInterval(() => {
						if (!Wt) return;
						const t = !!Ht[0].pokiHtmlDummyCanvas;
						!t ||
							(Ht[0].width === window.innerWidth &&
								Ht[0].height === window.innerHeight) ||
							((Ht[0].width = window.innerWidth),
							(Ht[0].height = window.innerHeight));
						let n = !1;
						if (
							(t &&
								document.getElementsByTagName("canvas").length > 0 &&
								(n = !0),
							!n)
						) {
							const t = (function (e) {
								const t = 3 & e.length,
									n = e.length - t,
									o = 3432918353,
									r = 461845907;
								let i = 0,
									a = 0,
									s = 0;
								for (; s < n; )
									((a =
										(255 & e.charCodeAt(s)) |
										((255 & e.charCodeAt(++s)) << 8) |
										((255 & e.charCodeAt(++s)) << 16) |
										((255 & e.charCodeAt(++s)) << 24)),
										++s,
										(a =
											((65535 & a) * o + ((((a >>> 16) * o) & 65535) << 16)) &
											4294967295),
										(a = (a << 15) | (a >>> 17)),
										(a =
											((65535 & a) * r + ((((a >>> 16) * r) & 65535) << 16)) &
											4294967295),
										(i ^= a),
										(i = (i << 13) | (i >>> 19)),
										(i = (5 * i + 3864292196) & 4294967295));
								switch (((a = 0), t)) {
									case 3:
										a ^= (255 & e.charCodeAt(s + 2)) << 16;
									case 2:
										a ^= (255 & e.charCodeAt(s + 1)) << 8;
									case 1:
										((a ^= 255 & e.charCodeAt(s)),
											(a =
												((65535 & a) * o + ((((a >>> 16) * o) & 65535) << 16)) &
												4294967295),
											(a = (a << 15) | (a >>> 17)),
											(a =
												((65535 & a) * r + ((((a >>> 16) * r) & 65535) << 16)) &
												4294967295),
											(i ^= a));
								}
								return (
									(i ^= e.length),
									(i ^= i >>> 16),
									(i =
										(2246822507 * (65535 & i) +
											(((2246822507 * (i >>> 16)) & 65535) << 16)) &
										4294967295),
									(i ^= i >>> 13),
									(i =
										(3266489909 * (65535 & i) +
											(((3266489909 * (i >>> 16)) & 65535) << 16)) &
										4294967295),
									(i ^= i >>> 16),
									i >>> 0
								);
							})(document.body.innerHTML);
							e !== t && ((e = t), (n = !0));
						}
						n && kn(t);
					}, 1e3);
				}
				return (
					(r = setInterval(() => {
						if (Kt || !Wt || !Ht.length || i > 10)
							return (
								console.info(
									"%cPOKI_PLAYTEST:%c",
									"font-weight: bold",
									"",
									Kt ? "stopped" : "crashed",
									Kt,
									!Wt,
									!Ht.length,
									i,
								),
								window.removeEventListener("pointermove", gn),
								window.removeEventListener("pointerdown", hn),
								window.removeEventListener("pointerup", yn),
								window.removeEventListener("contextmenu", yn),
								clearInterval(o),
								Lt(""),
								(Wt = null),
								(Yt = null),
								(Jt = null),
								(Qt = null),
								Sn([]),
								Ut.destroy(),
								Vt.destroy(),
								clearInterval(r),
								a && clearTimeout(a),
								void t()
							);
						if (!bn(Ht)) {
							console.info(
								"%cPOKI_PLAYTEST:%c source canvasses not in DOM",
								"font-weight: bold",
								"",
							);
							const e = En();
							return void (e.length
								? Sn(e)
								: (console.info(
										"%cPOKI_PLAYTEST:%c no source canvasses found",
										"font-weight: bold",
										"",
									),
									i++));
						}
						if (!Yt && ((Yt = Wt.getContext("2d")), !Yt))
							return (
								console.info(
									"%cPOKI_PLAYTEST:%c streamCanvas context creation failed",
									"font-weight: bold",
									"",
								),
								void i++
							);
						((i = 0), vn(!1));
						const e = Dt();
						(e === Et
							? (Lt(""), kn(!1))
							: e === xt && (Lt(""), (Jt = null), (Qt = null)),
							Yt.clearRect(0, 0, Wt.width, Wt.height));
						for (let e = 0; e < tn.length; e++) {
							const t = tn[e];
							null !== t &&
								Yt.drawImage(
									t,
									0,
									0,
									t.displayWidth,
									t.displayHeight,
									0,
									0,
									Wt.width,
									Wt.height,
								);
						}
						(Jt &&
							Yt.drawImage(
								Jt,
								0,
								0,
								Jt.width,
								Jt.height,
								0,
								0,
								Wt.width,
								Wt.height,
							),
							Gt(on, rn, sn, ln, un, Yt),
							rn && an && ((rn = !1), (an = !1)),
							sn && cn && ((sn = !1), (cn = !1)),
							wn());
					}, 1e3 / nn)),
					window.addEventListener("visibilitychange", () => {
						(console.info(
							"%cPOKI_PLAYTEST:%c visibility change",
							"font-weight: bold",
							"",
							document.visibilityState,
						),
							a && clearTimeout(a),
							"visible" === document.visibilityState
								? dn === zt && (dn = "")
								: ((dn = zt),
									wn(),
									(a = setTimeout(() => {
										Kt = !0;
									}, 6e4))));
					}),
					window.addEventListener("resize", () => {
						console.info(
							"%cPOKI_PLAYTEST:%c resize",
							"font-weight: bold",
							"",
							window.innerWidth,
							window.innerHeight,
						);
					}),
					window.addEventListener("orientationchange", (e) => {
						console.info(
							"%cPOKI_PLAYTEST:%c orientationchange",
							"font-weight: bold",
							"",
							e?.target?.screen?.orientation?.type,
						);
					}),
					window.screen.orientation.addEventListener("change", (e) => {
						console.info(
							"%cPOKI_PLAYTEST:%c orientation change",
							"font-weight: bold",
							"",
							e.target?.type,
						);
					}),
					n
				);
			}
			const _n = new RegExp(
				`(${["WebView", "(iPhone|iPod|iPad)(?!.*Safari)", "Android.*(;\\s+wv|Version/\\d.\\d\\s+Chrome/\\d+(\\.0){3})", "Linux; U; Android"].join("|")})`,
				"ig",
			);
			function xn() {
				window.navigator.userAgent.match(_n) &&
					!U.isPlayground &&
					document.addEventListener(
						"touchmove",
						(e) => (e.preventDefault(), (e.returnValue = !1), !1),
						{ passive: !1 },
					);
			}
			function Pn() {
				return `User_${Math.floor(9e8 * Math.random()) + 1e8}`;
			}
			class Tn {
				#d = null;
				#l() {
					if (!U.isPokiIframe)
						throw new Error("User accounts is not available");
				}
				getUser = async () =>
					G.debug
						? {
								username: "TestUser",
								avatarUrl:
									"https://a.poki-cdn.com/img/placeholder_gradient.png",
								optedIn: !0,
							}
						: (this.#l(), this.#d || (this.#d = await this.#u()), this.#d);
				getToken = async () =>
					G.debug
						? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiJsVVNGaCtFUjZIaW83VHhjRW9Pc0d1UnJaNU0wNFdQSlpkQ1BBZ09Wcko4Zm5QQTRmK3Zob1E4PSIsImlzcyI6IlBva2kiLCJleHAiOjIzOTIyNzU0NDd9.S7aW6C3Uwe1hINZA1kg20QWTwE0TqKhUkpJUtU16twM"
						: (this.#l(), this.#p());
				login = async () => {
					if (G.debug) return;
					this.#l();
					return (await this.getUser())
						? void 0
						: new Promise((t, n) => {
								function o(t) {
									t.data.type === e.accounts.authPanelClosed &&
										(window.removeEventListener("message", o),
										n(
											new Error(
												"User closed the auth panel without signing in.",
											),
										));
								}
								(window?.top?.postMessage(
									{
										type: e.accounts.openAuthPanel.type,
										content: {
											trigger: `sdk-${U.gameID}`,
											version: e.accounts.openAuthPanel.version,
										},
									},
									"*",
								),
									window.addEventListener("message", o),
									setTimeout(() => {
										(window.removeEventListener("message", o),
											n(
												new Error(
													"Login timeout. User took too long to complete the action.",
												),
											));
									}, 45e3));
							});
				};
				#u = async () => {
					try {
						return new Promise((t) => {
							window?.top?.postMessage({ type: e.accounts.getUserInfo }, "*");
							const n = (o) => {
								if (o.data.type === e.accounts.userInfo) {
									window.removeEventListener("message", n);
									const { enabled: e, session: r } = o.data;
									if (!e || !r?.id) return void t(null);
									((this.#d = {
										username: r?.username ?? Pn(),
										avatarUrl:
											r?.avatar?.medium ??
											"https://a.poki-cdn.com/img/placeholder_gradient.png",
										optedIn: r.optedin ?? !1,
									}),
										t(this.#d));
								}
							};
							(window.addEventListener("message", n),
								setTimeout(() => {
									(window.removeEventListener("message", n), t(null));
								}, 8e3));
						});
					} catch (e) {
						W("failed to fetch user info:", e);
					}
					return null;
				};
				#p = async () => {
					try {
						return new Promise((t) => {
							window?.top?.postMessage({ type: e.accounts.getUserToken }, "*");
							const n = (o) => {
								if (o.data.type === e.accounts.userToken) {
									window.removeEventListener("message", n);
									const { token: e, error: r } = o.data;
									if (r)
										return (W("failed to fetch user token:", r), void t(null));
									if (!e) return void t(null);
									t(e);
								}
							};
							(window.addEventListener("message", n),
								setTimeout(() => {
									(window.removeEventListener("message", n), t(null));
								}, 8e3));
						});
					} catch (e) {
						W("failed to fetch user token:", e);
					}
					return null;
				};
			}
			let Cn = !1,
				On = 1,
				Dn = !1;
			const Ln = new Map();
			function Mn(t) {
				const { data: n } = t;
				if (n?.type !== e.message.scoreUpdate) return;
				const o = Ln.get(n.message_id);
				o &&
					(Ln.delete(n.message_id),
					o(n.leaderboards),
					0 === Ln.size &&
						(window.removeEventListener("message", Mn), (Dn = !1)));
			}
			let Bn = 0;
			function Nn() {
				return Bn;
			}
			const Rn = atob("c3VibWl0U2NvcmU=");
			const jn = class {
					__monetization;
					__gameStarted = !1;
					#f = !1;
					#m;
					#g = new ke(0.01);
					#h;
					#y = 0;
					#w = 0;
					#v = 0;
					#b = 0;
					#k = new Tn();
					#A = !1;
					#S = null;
					constructor(e, t = !1) {
						((this.__monetization = e),
							(this.#A = t),
							xn(),
							setInterval(() => {
								this.#w = Math.max(this.#w - 1, 0);
							}, 1e3));
					}
					init = (t = {}) => {
						if ((this.__logCall("init", t), this.#S))
							return (Y("PokiSDK.init() called more than once"), this.#S);
						(t[Rn] &&
							t[Rn]((t, n) =>
								(async function (t, n) {
									const o = {
										time_on_page: performance.now(),
										p4d_version_id: U.versionID,
										sdk_version: "70ee7b5c1eccffc18065fd544e57184b0e1002f6",
									};
									if (!Cn) {
										const e =
												"74b97156-f40b-11e9-859c-c6053849a814" === U.gameID &&
												n > 4e4,
											r =
												"7e485857-686e-47f6-9588-1dacf536421b" === U.gameID &&
												n > 1e3 &&
												"points" === t;
										if (e || r)
											try {
												const e = await At();
												e
													? ((o.screenshot = e), (Cn = !0))
													: (o.screenshot = "failed");
											} catch {
												o.screenshot = "error";
											}
									}
									Dn || ((Dn = !0), window.addEventListener("message", Mn));
									const r = (On++).toString(36);
									return (
										V.sendMessage(e.message.sendScore, {
											data: {
												leaderboard: t,
												score: n,
												meta: o,
												message_id: r,
											},
										}),
										new Promise((e) => {
											Ln.set(r, e);
										})
									);
								})(t, n),
							),
							window.addEventListener("pointerdown", this.#E),
							document.addEventListener("keydown", this.#E));
						const n = window;
						if (n.engine?.config?.onPrint) {
							const e = n.engine.config.onPrint;
							n.engine.config.onPrint = (...t) => {
								e(...t);
								const o = t[0]?.match(/Godot Engine (.+)/);
								o &&
									o[1] &&
									(!(function (e) {
										oe = e;
									})(o[1]),
									(n.engine.config.onPrint = e));
							};
						}
						return (
							(this.#S = new Promise((n) => {
								(this.__monetization.init({
									onReady: () => {
										(O("preroll") && this.__monetization.forcePreroll(), n());
									},
									...t,
								}),
									this.#I(),
									U.isInspector && this.#_(),
									document.location.search.length <= 1 &&
										V.sendMessage(e.message.sendInspectorEvent, {
											event: "bad-behavior",
											data: { behavior: "rewrite_query_params" },
										}),
									V.sendMessage(e.message.sdkDetails, {
										version: "70ee7b5c1eccffc18065fd544e57184b0e1002f6",
									}));
							})),
							this.#S
						);
					};
					#I = () => {
						window.addEventListener(
							"message",
							async (t) => {
								if ("pokiGenerateScreenshot" === t.data.type)
									(async (t) => {
										const { hasFrame: n } = t;
										let o = null;
										if (n) {
											const { title: e, thumbnail: n } = t;
											o = await At({ title: e, thumbnail: n });
										} else o = await At();
										const r = { screenshot: o, errors: ie };
										(t.callback && (r.callback = t.callback),
											V.sendMessage(e.message.sendGameScreenshot, { data: r }));
									})(t.data);
								else if ("pokiGenerateRawScreenshot" === t.data.type)
									(async () => {
										const t = await kt();
										V.sendMessage(e.message.sendGameRawScreenshot, {
											data: { screenshot: t },
										});
									})();
								else if ("pokiUploadScreenshot" === t.data.type) {
									const n = await bt(t.data);
									V.sendMessage(e.message.sendUploadScreenshot, {
										data: { screenshot: n },
									});
								}
							},
							!1,
						);
					};
					#_ = () => {
						if (
							(window.addEventListener(
								"message",
								async (t) => {
									if (
										("pokiInspectorAllowCommercialBreak" === t.data.type &&
											(F("adOverrideMode", !0), F("houseAdsOnly", !0)),
										"pokiInspectorDisallowCommercialBreak" === t.data.type &&
											(F("adOverrideMode", !1), F("houseAdsOnly", !1)),
										"pokiInspectorRequestCookies" === t.data.type &&
											Se().then((t) => {
												(V.sendMessage(e.message.sendInspectorCookies, {
													data: { cookies: t },
												}),
													V.sendMessage(e.message.sendInspectorEvent, {
														event: "cookies",
														data: { cookies: t },
													}));
											}),
										"pokiInspectorClearLocalStorage" === t.data.type)
									)
										try {
											if ((localStorage.clear(), indexedDB.databases)) {
												const e = await indexedDB.databases(),
													t = (
														await Promise.allSettled(
															e
																.filter((e) => "string" == typeof e.name)
																.map((e) => indexedDB.deleteDatabase(e.name)),
														)
													).filter((e) => "rejected" === e.status);
												t.length > 0 &&
													W(
														"PokiSDK: Some IndexedDB databases failed to delete",
														t,
													);
											}
											(document.cookie.split(";").forEach((e) => {
												const t = e.split("=")[0].trim();
												document.cookie = `${t}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
											}),
												V.sendMessage(e.message.sendInspectorEvent, {
													event: "localStorageCleared",
												}));
										} catch (t) {
											(W("PokiSDK: Error clearing localStorage", t),
												V.sendMessage(e.message.sendInspectorEvent, {
													event: "localStorageClearError",
													data: { error: String(t) },
												}));
										}
								},
								!1,
							),
							"desktop" !== U.device)
						)
							try {
								const t = (t) => {
									const n = console[t];
									console[t] = (...o) => {
										(V.sendMessage(e.message.sendInspectorConsole, {
											data: { level: t, args: ne(o) },
										}),
											V.sendMessage(e.message.sendInspectorEvent, {
												event: "console",
												data: { level: t, args: ne(o) },
											}),
											n.apply(console, o));
									};
								};
								(t("log"), t("warn"), t("error"));
							} catch {}
					};
					initWithVideoHB = () => this.init();
					setDebug = (t = !0) => {
						this.__logCall("setDebug", t);
						const { hostname: n } = window.location;
						n.endsWith("poki-gdn.com") || n.endsWith("gdn.poki.com")
							? t && X.track(e.tracking.debugTrueInProduction)
							: ((G.debug = t),
								(G.log = t ?? G.log),
								t
									? (function () {
											if (de) {
												((de = !1),
													window.removeEventListener("unhandledrejection", me),
													window.removeEventListener("error", ge));
												try {
													console.error = se;
												} catch {}
											}
										})()
									: he());
					};
					setLogging = (e) => {
						(this.__logCall("setLogging", e), (G.log = e));
					};
					#x = () => this.#w >= 10;
					gameLoadingFinished = () => {
						(this.__logCall("gameLoadingFinished"),
							clearInterval(window.pokiCancelProgressInterval),
							X.track(e.tracking.screen.gameLoadingFinished, {
								transferSize: St(),
								trackers: ee().join(","),
								error_session_id: le,
								now: Math.round(window.performance?.now?.()) || void 0,
							}));
						const t = window.pokiMeasureBuildin;
						(window.PokiSDK.measure("game", "loading", "complete"),
							(window.pokiMeasureBuildin = t));
					};
					gameplayStart = (t) => {
						if ((this.__logCall("gameplayStart", t), this.#x()))
							return void W(
								"PokiSDK.gameplayStart() ignored because of too many events",
							);
						((this.#f = !0),
							this.__gameStarted ||
								((this.__gameStarted = !0),
								X.track(e.tracking.screen.firstRound),
								this.__monetization.startStartAdsAfterTimer()));
						const n = this.#w;
						(setTimeout(() => {
							let o;
							(performance.now() - Nn() < 5e3 && (o = this.#h),
								X.track(e.tracking.screen.gameplayStart, {
									...t,
									fps: this.#g.stats(),
									badEvents: n,
									interaction: o,
								}));
						}, 0),
							clearTimeout(this.#m),
							(this.#m = setTimeout(() => {
								(window.addEventListener("pointermove", this.#P),
									document.addEventListener("keydown", this.#P));
							}, 6e5)),
							this.#y &&
								(this.#y > performance.now() - 50 && this.#w++, (this.#y = 0)));
					};
					gameplayStop = (t) => {
						(this.__logCall("gameplayStop", t),
							this.#x()
								? W(
										"PokiSDK.gameplayStart() ignored because of too many events",
									)
								: ((this.#f = !1),
									X.track(e.tracking.screen.gameplayStop, {
										...t,
										fps: this.#g.stats(),
									}),
									clearTimeout(this.#m),
									window.removeEventListener("pointermove", this.#P),
									document.removeEventListener("keydown", this.#P),
									(this.#y = performance.now())));
					};
					openExternalLink = (t) => {
						(this.__logCall("openExternalLink", t),
							V.sendMessage(e.message.openExternalLink, {
								params: { url: t },
							}));
					};
					customEvent = (t, n, o = {}) => {
						(this.__logCall("customEvent", t, n, o),
							t && n
								? ((t = String(t)),
									(n = String(n)),
									(o = { ...o }),
									("game" === t && "segment" === n && o.segment) ||
										X.track(e.tracking.custom, {
											eventNoun: t,
											eventVerb: n,
											eventData: o,
										}))
								: console.error(
										"%cPOKI:%c PokiSDK.customEvent() needs at least a noun and a verb",
										"font-weight: bold",
										"",
									));
					};
					commercialBreak = (t) =>
						new Promise((n) => {
							if (
								(this.__logCall("commercialBreak", t),
								"977b60eb-ff81-4c3a-895b-b585410d6c0d" === U.gameID)
							)
								return void n();
							if (this.#x())
								return (
									W(
										"PokiSDK.commercialBreak() ignored because of too many calls",
									),
									void n()
								);
							const o = this.__gameStarted
								? e.ads.position.midroll
								: e.ads.position.preroll;
							this.__runVideoAd({
								amount: 1,
								position: o,
								onStart: () => {
									if (
										(this.#v++,
										window.pokiMeasureBuildin &&
											window.PokiSDK.measure("midroll", this.#v),
										"function" == typeof t)
									)
										try {
											t();
										} catch (e) {
											W(
												"error in onStart callback of PokiSDK.commercialBreak()",
												e,
											);
										}
								},
							}).then(() => {
								n();
							});
						});
					rewardedBreak = (t) =>
						new Promise((n) => {
							if (
								(this.__logCall("rewardedBreak", t),
								"977b60eb-ff81-4c3a-895b-b585410d6c0d" === U.gameID)
							)
								return void n(!1);
							let o,
								r = 1;
							if ("function" == typeof t) o = t;
							else if ("object" == typeof t) {
								t.onStart && (o = t.onStart);
								const e = t?.size || we.SMALL;
								e === we.SMALL
									? (r = 1)
									: e === we.MEDIUM
										? (r = 2)
										: e === we.LARGE && (r = 3);
							}
							setTimeout(() => {
								this.__runVideoAd({
									position: e.ads.position.rewarded,
									amount: r,
									onStart: () => {
										if (
											(this.#b++,
											window.pokiMeasureBuildin &&
												window.PokiSDK.measure("rewarded", this.#b),
											"function" == typeof o)
										)
											try {
												o();
											} catch (e) {
												W(
													"error in onStart callback of PokiSDK.rewardedBreak()",
													e,
												);
											}
									},
								}).then((e) => {
									n(e);
								});
							}, 0);
						});
					displayAd = (t, n, o, r) => {
						if (
							(this.__logCall("displayAd", t, n, o, r),
							"977b60eb-ff81-4c3a-895b-b585410d6c0d" === U.gameID)
						)
							return void (o && o());
						const i = ye();
						X.track(e.tracking.screen.displayAd, {
							size: n,
							opportunityId: i,
							duringGameplay: this.#f,
						});
						const a = {
							container: t,
							opportunityId: i,
							size: n,
							duringGameplay: this.#f,
							onCanDestroy: o,
							onDisplayRendered: r,
							headerBiddingAllowed: !0,
						};
						this.__monetization.displayAd(a);
					};
					destroyAd = (e) => {
						(this.__logCall("destroyAd", e), this.__monetization.destroyAd(e));
					};
					isAdBlocked = () => !1;
					muteAd = () => {
						(this.__logCall("muteAd"), this.__monetization.muteAd());
					};
					setVolume = (e) => {
						(this.__logCall("setVolume", e), this.__monetization.setVolume(e));
					};
					logError = (e) => {
						this.captureError(e);
					};
					setPlaytestCanvas = (e) => {
						(this.__logCall("setPlaytestCanvas", e), this.playtestSetCanvas(e));
					};
					playtestSetCanvas = (e) => {
						if ((this.__logCall("playtestSetCanvas", e), !e))
							return void Ot([]);
						const t = [].concat(e);
						(Ot(t), Sn(t));
					};
					playtestCaptureHtmlOnce = () => {
						(this.__logCall("playtestCaptureHtmlOnce"), Lt(Et));
					};
					playtestCaptureHtmlForce = () => {
						(this.__logCall("playtestCaptureHtmlForce"), Lt(It));
					};
					playtestCaptureHtmlOn = () => {
						(this.__logCall("playtestCaptureHtmlOn"), Lt(_t));
					};
					playtestCaptureHtmlOff = () => {
						(this.__logCall("playtestCaptureHtmlOff"), Lt(xt));
					};
					getIsoLanguage = () => O("iso_lang");
					shareableURL = (t = {}) =>
						new Promise((n, o) => {
							this.__logCall("shareableURL", t);
							const r = new URLSearchParams(),
								i = Object.keys(t);
							if (U.isPokiIframe || U.isInspector) {
								const o = O("poki_url");
								(i.forEach((e) => {
									void 0 !== t[e] && null !== t[e] && r.set(`gd${e}`, t[e]);
								}),
									n(`${o}?${r.toString()}`),
									V.sendMessage(e.message.setPokiURLParams, { params: t }));
							} else
								window.self === window.top
									? (i.forEach((e) => {
											void 0 !== t[e] && null !== t[e] && r.set(`${e}`, t[e]);
										}),
										n(
											`${window.location.origin}${window.location.pathname}?${r.toString()}`,
										))
									: o(
											new Error(
												"shareableURL only works on Poki or a top level frame",
											),
										);
						});
					movePill = (e, t) => {
						(this.__logCall("movePill", e, t),
							"number" == typeof e && "number" == typeof t
								? window?.top?.postMessage(
										{
											type: "pokiMessageSetMobileNavPosition",
											content: { topPercent: e, topPx: t },
										},
										"*",
									)
								: W("PokiSDK.movePill() called with invalid parameters", e, t));
					};
					getURLParam = (e) => O(`gd${e}`) || O(e);
					captureError = (e) => {
						(this.__logCall("captureError", e), fe(e));
					};
					getLanguage = () => navigator.language.toLowerCase().split("-")[0];
					generateScreenshot = async () => (
						this.__logCall("generateScreenshot"),
						At()
					);
					showLeaderboard = (t) => {
						V.sendMessage(e.message.showLeaderboard, {
							data: { id: (Number.isInteger(t) && t) || -1 },
						});
					};
					enableEventTracking = (e) => {
						(this.__logCall("enableEventTracking", e),
							U.isPlayground ||
								U.isPokiIframe ||
								U.isInspector ||
								document?.referrer?.includes("games.poki.com") ||
								X.setupObserverWithCMP(e || 0));
					};
					__runVideoAd = ({
						position: t,
						amount: n,
						onStart: o,
						timeBetweenAds: r,
						platformAd: i,
					}) =>
						new Promise((a) => {
							let s = 1;
							this.__monetization.setNrAds(s, n);
							const c = ye(),
								d = (o) => {
									setTimeout(() => {
										if (
											o?.type === e.ads.limit ||
											o?.type === e.ads.busy ||
											o?.type === e.ads.stopped
										)
											return void a(!1);
										if (s === n || this.#A)
											return (
												H.dispatchEvent(e.ads.startTimer, {
													overwriteTimeBetweenAds: r,
												}),
												void a(!!o?.rewardAllowed)
											);
										const l = H.getVideoDataAnnotations();
										if ("poki" === l?.bidder)
											return (
												H.dispatchEvent(e.ads.startTimer, {
													overwriteTimeBetweenAds: r,
												}),
												void a(!0)
											);
										(s++,
											H.clearVideoDataAnnotations(),
											H.addVideoDataAnnotations({
												adBreakId: c,
												position: t,
												opportunityId: ye(),
												currentAdNumber: s,
												totalAdAmount: n,
											}),
											this.__monetization.setNrAds(s, n),
											this.__monetization.requestAd({
												position: t,
												platformAd: i,
												onFinish: d,
											}));
									}, 0);
								};
							(H.clearVideoDataAnnotations(),
								H.addVideoDataAnnotations({
									adBreakId: c,
									position: t,
									opportunityId: ye(),
									currentAdNumber: 1,
									totalAdAmount: n,
								}),
								this.__monetization.requestAd({
									position: t,
									platformAd: i,
									onFinish: d,
									onStart: () => {
										if (
											(this.__monetization.setNrAds(s, n),
											"function" == typeof o)
										)
											try {
												o();
											} catch (e) {
												console.error(
													"%cPOKI:%c error in onStart callback of PokiSDK.runVideoAd()",
													"font-weight: bold",
													"",
													e,
												);
											}
									},
								}));
						});
					#P = () => {
						(window.removeEventListener("pointermove", this.#P),
							document.removeEventListener("keydown", this.#P),
							X.track(e.tracking.screen.playerActive),
							(this.#m = setTimeout(() => {
								(window.addEventListener("pointermove", this.#P),
									document.addEventListener("keydown", this.#P));
							}, 6e5)));
					};
					#E = (e) => {
						var t;
						("pointerdown" === e.type
							? (this.#h = "pointerdown")
							: "keydown" === e.type
								? (this.#h = `keydown-${e.code}`)
								: (this.#h = "unknown"),
							(t = performance.now()),
							(Bn = t));
					};
					__logCall = (e, ...t) => {
						if (!U.isPlayground) {
							for (let e = 0; e < t.length; e++) void 0 === t[e] && (t[e] = "");
							!(function (e, ...t) {
								console.info(
									`%cPOKI:%c ${e}`,
									"background-color: green; border-radius: 3px; color: white; padding: 1px 5px",
									"",
									...t,
								);
							})(`PokiSDK.${e}(`, ...t, ")");
						}
					};
					setDebugTouchOverlayController = () => {};
					gameInteractive = () => {};
					gameLoadingProgress = () => {};
					gameLoadingStart = () => {};
					getLeaderboard = () => Promise.resolve([]);
					happyTime = () => {};
					sendHighscore = () => {};
					setPlayerAge = () => {};
					roundStart = () => {};
					roundEnd = () => {};
					getUser = async () => this.#k.getUser();
					getToken = async () => this.#k.getToken();
					login = async () => this.#k.login();
				},
				Fn = {
					adTagUrl:
						"//pubads.g.doubleclick.net/gampad/ads?sz=640x360|640x480&iu=/1053551/Pub-Poki-Generic&ciu_szs&impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1&url={url}&description_url={descriptionUrl}&correlator={timestamp}&nofb=1",
					adTiming: {
						preroll: !1,
						timeBetweenAds: 12e4,
						timePerTry: 7e3,
						startAdsAfter: 12e4,
					},
					waterfallRetries: 2,
				};
			function Un(e) {
				let t = `/21682198607/debug-display/debug-display-${e}`;
				return (
					G.debug ||
						(t = U.isPokiIframe
							? `/21682198607/${U.device}_ingame_${e}/${U.siteID}_${U.device}_ingame_${e}`
							: U.isPokiExternal
								? `/21682198607/external_${U.device}_display_platform`
								: `/21682198607/external_${U.device}_display_ingame/external_${U.device}_ingame_${e}`),
					t
				);
			}
			const Vn = () => {
				let { pathname: e } = window.location;
				"/" !== e[0] && (e = `/${e}`);
				let t = "";
				window.top !== window && (t = encodeURIComponent(document.referrer));
			/* Removed poki.com fetch - return empty promise */
			return Promise.resolve({ status: 404 })
			/* Original code:
			return vt(
				`https://devs-api.poki.com/gameinfo/@sdk?href=${encodeURIComponent(`${window.location.protocol}//${window.location.host}${e}${window.location.search}`)}&referrer=${t}`,
				{ method: "GET", headers: { "Content-Type": "text/plain" } },
			)
			*/
					.then(async (e) => {
						if (e.status >= 200 && e.status < 400) {
							const t = await e.json();
							if (!t.game_id) return;
							return {
								gameID: t.game_id,
								gameTitle: t.game_name,
								playtestRecord: t.playtest_record,
								playtestVersion: t.playtest_version,
								playtestDeviceCategory: t.playtest_device_category,
								playtestNewUser: t.playtest_new_user,
								playtestRequestID: t.playtest_request_id,
								metrictestID: t.metrictest_id,
								metrictestVersion: t.metrictest_version,
								metrictestDeviceCategory: t.metrictest_device_category,
								cachedContentGameID: t.cached_content_game_id,
								specialConditions: t.ad_settings.special_conditions,
								adTiming: {
									preroll: t.ad_settings.preroll,
									timePerTry: t.ad_settings.time_per_try,
									timeBetweenAds: t.ad_settings.time_between_ads,
									startAdsAfter: t.ad_settings.start_ads_after,
								},
							};
						}
						throw e;
					})
					.catch((e) =>
						(async function (e) {
							console.warn(
								"%cPOKI:%c failed request p4d info",
								"font-weight: bold",
								"",
								e,
							);
							try {
								let { pathname: t } = window.location;
								"/" !== t[0] && (t = `/${t}`);
								const n = JSON.stringify({
										c: "sdk-p4d-error",
										ve: 7,
										d: [
											{
												k: "error",
												v: JSON.stringify({
													status: e.status,
													json: e.json && (await e.json()),
													body: JSON.stringify({
														href: `${window.location.protocol}//${window.location.host}${t}${window.location.search}`,
													}),
													name: e.name,
													message: e.message,
												}),
											},
										],
									}),
									o = "https://t.poki.io/l";
								if (navigator.sendBeacon) navigator.sendBeacon(o, n);
								else
									try {
										const e = new XMLHttpRequest();
										(e.open("POST", o, !0), e.send(n));
									} catch {}
							} catch {}
						})(e),
					);
			};
			function Gn() {
				const e = document.getElementById("poki-playtest-popup-reject"),
					t = document.getElementById("poki-playtest-popup-resolve");
				(e?.removeEventListener("pointerdown", Gn),
					t?.removeEventListener("pointerdown", Gn),
					document.getElementById("poki-playtest-popup-wrapper")?.remove(),
					document.getElementById("poki-playtest-template-markup")?.remove(),
					document.getElementById("poki-playtest-template-style")?.remove());
			}
			function zn(e) {
				e.stopImmediatePropagation();
			}
			function Kn({ gameTitle: e, rejectCallback: t, resolveCallback: n }) {
				const o = document.body;
				!(function (e) {
					const t = document.createElement("template");
					((t.innerHTML =
						'\n\t<template id="poki-playtest-template-markup">\n\t\t<div class="poki-playtest-popup-scope-reset poki-playtest-popup-wrapper" id="poki-playtest-popup-wrapper">\n\t\t\t<div class="poki-playtest-popup-scope-reset poki-playtest-popup">\n\t\t\t\t<header class="poki-playtest-popup-scope-reset poki-playtest-popup__header">\n\t\t\t\t\t<img class="poki-playtest-popup-scope-reset poki-playtest-popup__header__img" width="36" height="36" src="https://a.poki-cdn.com/playtest/playtest-icon.svg" alt="Lab icon">\n\t\t\t\t\t<h2 class="poki-playtest-popup-scope-reset poki-playtest-popup__header__title">Hey there, adventurer</h2>\n\t\t\t\t</header>\n\n\t\t\t\t<div class="poki-playtest-popup-scope-reset poki-playtest-popup__content">\n\t\t\t\t\t<p>You found a mystery game and have been selected to test it out! When you join the playtest, we&apos;ll record your gameplay to see all the fun (and maybe some goofy) moments you encounter. This helps the developer figure out what rocks and what needs a little extra magic in their game.</p>\n\t\t\t\t\t<p>And hey, if you&apos;re not feeling it, no biggie - you can refuse the playtest and still play the game just like normal. For more information, please read our <a href="https://a.poki-cdn.com/playtest/2025.11.25_Poki_Playtest_Privacy_Statement.pdf" download="2025-11-25 Poki Playtest Privacy Statement.pdf" target="_blank">Privacy Statement Playtest</a>.</p>\n\t\t\t\t\t<h3>Do you consent to join the playtest of <span id="poki-playtest-popup-game-title">%GAME_TITLE%</span>?</h3>\n\t\t\t\t\t<p><small>Please note that this game has been uploaded independently by this game&apos;s developer and has not yet been verified by the Poki team. If you run into any trouble, contact us at <strong><a href="mailto:hello@poki.com">hello@poki.com</a></strong></small></p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="poki-playtest-popup-scope-reset poki-playtest-popup__actions">\n\t\t\t\t\t<button type="button" id="poki-playtest-popup-reject" class="poki-playtest-popup-scope-reset poki-playtest-popup__button">No, thanks</button>\n\t\t\t\t\t<button type="button" id="poki-playtest-popup-resolve" class="poki-playtest-popup-scope-reset poki-playtest-popup__button">Yes, let\'s go</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</template>\n'),
						e.appendChild(t.content));
					const n = document.createElement("style");
					((n.innerHTML =
						'\n\t.poki-playtest-popup {\n\t\tall: unset;\n\n\t\t& *,\n\t\t& *::before,\n\t\t& *::after {\n\t\t\tbox-sizing: border-box;\n\t\t}\n\t}\n\n\t.poki-playtest-popup {\n\t\tborder-radius: 16px;\n\t\tbackground: #FFF;\n\t\tbox-shadow: 0px 60px 24px 0px rgba(93, 107, 132, 0.03), 0px 34px 20px 0px rgba(93, 107, 132, 0.09), 0px 15px 15px 0px rgba(93, 107, 132, 0.15), 0px 4px 8px 0px rgba(93, 107, 132, 0.18);\n\n\t\tdisplay: flex;\n\t\tmax-width: 480px;\n\t\tmin-width: 320px;\n\t\twidth: 100%;\n\t\tpadding: 8px 0 16px 0;\n\t\tflex-direction: column;\n\t\talign-items: flex-start;\n\t\tgap: 16px;\n\t\tcolor: #002B50;\n\n\t\tposition: fixed;\n\t\tz-index: 99999;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t}\n\n\t.poki-playtest-popup__header {\n\t\t\tdisplay: flex;\n\t\t\twidth: 100%;\n\t\t\tpadding: 8px 16px 16px;\n\t\t\talign-items: center;\n\t\t\tgap: 12px;\n\t\t\tborder-bottom: 2px solid #F0F5FC;\n\t}\n\n\t.poki-playtest-popup__header__img {\n\t\tall: unset;\n\t}\n\n\t.poki-playtest-popup__header__title {\n\t\tfont: 700 24px/1.16 Torus, sans-serif;\n\t\tmargin: 0;\n\t}\n\n\t.poki-playtest-popup__content {\n\t\tfont: 400 14px/1.57 "Proxima Nova", sans-serif;\n\t\tpadding: 0 16px;\n\n\t\ta {\n\t\t\tcolor: #0074E0;\n\t\t\tpointer-events: auto;\n\n\t\t\t&:hover {\n\t\t\t\tcolor: #009CFF;\n\t\t\t}\n\t\t}\n\n\t\tp {\n\t\t\tmargin: 8px 0 0;\n\n\t\t\t&:first-child {\n\t\t\t\tmargin-top: 0;\n\t\t\t}\n\n\t\t\tsmall {\n\t\t\t\tall: unset;\n\t\t\t}\n\n\t\t\t&:has(small) {\n\t\t\t\tcolor: #5D6B84;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tline-height: 1.33;\n\t\t\t\tletter-spacing: 0.3px;\n\t\t\t}\n\t\t}\n\n\t\th3 {\n\t\t\tfont-weight: 700;\n\t\t\tfont-size: 16px;\n\t\t\tline-height: 1.5;\n\t\t\tmargin: 16px 0 14px;\n\t\t}\n\t}\n\n\t@media screen and (max-width: 640px) {\n\t\t.poki-playtest-popup {\n\t\t\tgap: 8px;\n\t\t\tpadding: 8px 0 12px 0;\n\t\t}\n\t\t.poki-playtest-popup__header {\n\t\t\tpadding: 0px 16px 0px;\n\t\t\talign-items: center;\n\t\t\tgap: 8px;\n\t\t}\n\t\t.poki-playtest-popup__content {\n\t\t\tfont-size: 12px;\n\t\t\tline-height: 1.33;\n\t\t}\n\t}\n\n\t.poki-playtest-popup__actions {\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\tpadding: 8px 16px 0;\n\t\tgap: 16px;\n\t\tjustify-content: center;\n\t}\n\n\t.poki-playtest-popup__button {\n\t\tdisplay: flex;\n\t\tpadding: 7px 24px 9px;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tflex: 1 0 0;\n\t\tborder-radius: 24px;\n\t\tbackground: #009CFF;\n\t\tcursor: pointer;\n\t\tpointer-events: auto;\n\n\t\tcolor: #FFF;\n\t\tfont: 700 16px/1.25 Torus, sans-serif;\n\n\t\t&:hover {\n\t\t\tbackground-color: #0074E0;\n\t\t}\n\t}\n\n\t.poki-playtest-popup-wrapper {\n\t\tall: unset;\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tbackground: #002B50AF;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tz-index: 99998;\n\t}\n\n\t.poki-playtest-popup-scope-reset {\n\t\tletter-spacing: normal;\n\t\ttext-align: left;\n\t\ttext-decoration: none;\n\t\ttext-indent: 0;\n\t\ttext-shadow: none;\n\t\ttext-transform: none;\n\t\twhite-space: normal;\n\t\tword-spacing: normal;\n\t}\n'),
						(n.id = "poki-playtest-template-style"),
						e.appendChild(n));
				})(o);
				const r = document
					.getElementById("poki-playtest-template-markup")
					.content.cloneNode(!0);
				((r.querySelector("#poki-playtest-popup-game-title").textContent = e),
					(async function () {
						const e = new FontFace(
								"ProximaNova",
								"url(https://a.poki-cdn.com/fonts/proxima-nova-regular-latin.woff2)",
							).load(),
							t = new FontFace(
								"ProximaNova",
								"url(https://a.poki-cdn.com/fonts/proxima-nova-bold-latin.woff2)",
								{ weight: "bold" },
							).load(),
							n = new FontFace(
								"Torus",
								"url(https://a.poki-cdn.com/fonts/torus-bold-latin.woff2)",
							).load(),
							[o, r, i] = await Promise.all([e, t, n]);
						(document.fonts.add(o),
							document.fonts.add(r),
							document.fonts.add(i));
					})().then(() => {
						(o.appendChild(r),
							(function ({ rejectCallback: e, resolveCallback: t }) {
								const n = document.getElementById("poki-playtest-popup-reject"),
									o = document.getElementById("poki-playtest-popup-resolve");
								(n?.addEventListener("pointerup", () => {
									(setTimeout(Gn, 10), e());
								}),
									o?.addEventListener("pointerup", () => {
										(setTimeout(Gn, 10), t());
									}));
								const r = document.getElementById(
									"poki-playtest-popup-wrapper",
								);
								r &&
									[
										"pointerdown",
										"pointerup",
										"pointermove",
										"click",
										"mousedown",
										"mouseup",
										"mousemove",
										"touchstart",
										"touchend",
										"touchmove",
										"contextmenu",
										"dragstart",
									].forEach((e) => r.addEventListener(e, zn));
							})({ rejectCallback: t, resolveCallback: n }));
					}));
			}
			function Hn(e) {
				const t = [];
				let n = 0;
				for (let o = 0; o < e.length; o++) {
					if (n > 0) {
						n--;
						continue;
					}
					const r = e[o];
					if ("string" == typeof r)
						((n = (r.match(/%c/g) || []).length), t.push(r.replace(/%c/g, "")));
					else
						try {
							t.push(String(r));
						} catch (e) {
							t.push(`<${e.message}>`);
						}
				}
				return t.join(" ");
			}
			let qn = 0,
				Wn = 0;
			function Yn() {
				return qn;
			}
			const Jn = window.requestAnimationFrame;
			function Qn(e) {
		/* Removed poki.com fetch
		fetch("https://mystery-game-tile.poki.io/v0/metric", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(e),
		});
		*/
			}
			function $n(e) {
				const t = Math.random().toString(36).substring(2);
				let n = 0,
					o = !1,
					r = 0,
					i = 0,
					a = 0,
					s = [];
				const c = () => {
					(a++, Jn(c));
				};
				(c(),
					setInterval(() => {
						(s.push(a), (a = 0));
					}, 1e3));
				window.addEventListener("beforeunload", () => {
					const a = Yn() > 0,
						c = s,
						d = performance.now();
					((s = []),
						o || (n = d),
						Qn({
							metrictest_id: e.metrictestID,
							play_id: t,
							started: a,
							duration: n,
							total_duration: d,
							timed_out: !0,
							sdk_version: "70ee7b5c1eccffc18065fd544e57184b0e1002f6",
							fpss: c,
							upvotes: r,
							downvotes: i,
							have_interaction: Nn() > 0,
						}));
				});
				window.addEventListener("message", (e) => {
					e.data &&
						"vote" === e.data.type &&
						(e.data.direction < 0 ? i++ : e.data.direction > 0 && r++);
				});
				return (
					setInterval(() => {
						const a = Yn() > 0,
							c = s,
							d = performance.now();
						if (((s = []), !o)) {
							n = d;
							const e = 6e4;
							d - Math.max(Wn, Nn()) > e && (o = !0);
						}
						Qn({
							metrictest_id: e.metrictestID,
							play_id: t,
							started: a,
							duration: n,
							total_duration: d,
							timed_out: o,
							sdk_version: "70ee7b5c1eccffc18065fd544e57184b0e1002f6",
							fpss: c,
							upvotes: r,
							downvotes: i,
							have_interaction: Nn() > 0,
						});
					}, 1e4),
					t
				);
			}
			let Zn = !1;
			try {
				"1" === localStorage.getItem("poki_pbf")
					? (Zn = !0)
					: U.isPlayground ||
						"GB" === U.country ||
						localStorage.setItem("poki_pbf", "1");
			} catch {}
			function Xn() {
				if (void 0 === window.MediaRecorder) return;
				let e = 'video/webm;codecs="vp9"';
				return (
					(("undefined" != typeof navigator &&
						/(iPad|iPhone|iPod)/gi.test(navigator.userAgent)) ||
						Mt ||
						Bt) &&
						(e = 'video/mp4;codecs="avc1.42000d"'),
					MediaRecorder.isTypeSupported(e) ? e : void 0
				);
			}
			let eo = (e, t) => {},
				to = [],
				no = null,
				oo = 0;
			const ro = [
					...Object.values(e.tracking.screen),
					e.tracking.ads.status.completed,
					e.tracking.ads.status.error,
					e.tracking.ads.status.limit,
					e.tracking.ads.video.progress,
				],
				io = {
					[e.tracking.screen.commercialBreak]: "commercialBreak",
					[e.tracking.screen.gameLoadingFinished]: "gameLoadingFinished",
					[e.tracking.screen.gameplayStart]: "gameplayStart",
					[e.tracking.screen.gameplayStop]: "gameplayStop",
					[e.tracking.screen.rewardedBreak]: "rewardedBreak",
				};
			let ao = [],
				so = [];
			try {
				const e = (e) => {
					const t = console[e];
					((console[e] = (...n) => {
						(t.apply(console, n),
							so &&
								so.push({
									timeMs: performance.now(),
									level: e,
									message: Hn(n),
								}));
					}),
						ao.push(() => {
							console[e] = t;
						}));
				};
				U.gameID &&
					!U.isPlayground &&
					!U.isPokiExternal &&
					U.isPokiIframe &&
					(e("log"), e("info"), e("warn"), e("error"));
			} catch {}
			function co() {
				((to = null), ao.forEach((e) => e()), (ao = []), (so = null));
			}
			function lo(t, n, o) {
				console.info(
					"%cPOKI_PLAYTEST:%c start recording using codec",
					"font-weight: bold",
					"",
					n,
				);
				const r = In(t, () => {
					no?.close(1e3, "Playtest recording stopped");
				});
			/* Removed poki.com WebSocket
			r &&
				((no = new WebSocket("wss://playtest-recorder.poki.io/ws")),
			*/
			r && false && ((no = null),
					no.addEventListener("error", () => {
						(X.track(e.tracking.playtest.error, { message: "websocket error" }),
							console.info(
								"%cPOKI_PLAYTEST:%c error",
								"font-weight: bold",
								"",
							));
					}),
					no.addEventListener("open", () => {
						if (!no) return;
						if (no.readyState === no.OPEN) {
							let e;
							try {
								const t = document.createElement("canvas"),
									n = {
										powerPreference: "high-performance",
										failIfMajorPerformanceCaveat: !1,
									};
								let o = t.getContext("webgl2", n);
								if (
									(o ||
										((o = t.getContext("webgl", n)),
										o || (o = t.getContext("experimental-webgl", n))),
									o)
								) {
									const t = o,
										n = t.getExtension("WEBGL_debug_renderer_info");
									(n && (e = t.getParameter(n.UNMASKED_RENDERER_WEBGL)),
										e || (e = t.getParameter(t.RENDERER)));
								}
							} catch {}
							const n = JSON.stringify({
								type: "save",
								game_id: U.gameID,
								version_id: U.versionID,
								playtest_request_id: o,
								webgl_renderer: e,
								sdk_version: "70ee7b5c1eccffc18065fd544e57184b0e1002f6",
								cpus: navigator.hardwareConcurrency,
								device_pixel_ratio: window.devicePixelRatio || 1,
								canvasses: t.length,
							});
							(no.send(n),
								console.info(
									"%cPOKI_PLAYTEST:%c websocket open",
									"font-weight: bold",
									"",
									n,
								));
						}
						const i = new MediaRecorder(r, {
								mimeType: n,
								videoBitsPerSecond: 5e5,
							}),
							a = performance.now(),
							s = (e) => Math.round((e || performance.now()) - a);
						(i.addEventListener("stop", () => {
							console.info(
								"%cPOKI_PLAYTEST:%c recording stopped",
								"font-weight: bold",
								"",
							);
						}),
							i.addEventListener("error", (e) => {
								console.warn(
									"%cPOKI_PLAYTEST:%c",
									"font-weight: bold",
									"",
									e.error,
								);
							}),
							i.addEventListener("dataavailable", (e) => {
								e.data.size > 0 &&
									no &&
									no.readyState === no.OPEN &&
									no.send(e.data);
							}),
							i.start(250));
						const c = {};
						let d = !1;
						(document.addEventListener("keydown", (e) => {
							c[e.code] || ((c[e.code] = !0), (d = !0));
						}),
							document.addEventListener("keyup", (e) => {
								c[e.code] && ((c[e.code] = !1), (d = !0));
							}));
						const l = setInterval(() => {
							const e = Object.keys(c);
							(d &&
								e.length > 0 &&
								no &&
								no.readyState === no.OPEN &&
								no.send(
									JSON.stringify({ type: "keyboard", offset: s(), keys: c }),
								),
								(d = !1),
								e.forEach((e) => {
									c[e] || delete c[e];
								}));
						}, 50);
						((eo = (e, t) => {
							if (!no || no.readyState !== no.OPEN) return;
							no.send(ne({ type: "sdk-event", offset: s(t), event: e }));
							const n = io[e];
							n &&
								no.send(
									ne({
										type: "console",
										offset: s(t),
										level: "log",
										message: `PokiSDK.${n}()`,
									}),
								);
						}),
							null !== to &&
								(to.forEach((e) => {
									eo(e.event, e.timeMs);
								}),
								(to = null)),
							(ue = (e) => {
								no &&
									no.readyState === no.OPEN &&
									no.send(
										JSON.stringify({ type: "error", offset: s(), error: e }),
									);
							}),
							ao.forEach((e) => e()),
							(ao = []));
						try {
							const e = (e) => {
								const t = console[e];
								((console[e] = (...n) => {
									(t.apply(console, n),
										no &&
											no.readyState === no.OPEN &&
											no.send(
												JSON.stringify({
													type: "console",
													offset: s(),
													level: e,
													message: Hn(n),
												}),
											));
								}),
									ao.push(() => {
										console[e] = t;
									}));
							};
							(e("log"), e("info"), e("warn"), e("error"));
						} catch {}
						(so &&
							(so.forEach((e) => {
								no &&
									no.readyState === no.OPEN &&
									no.send(
										JSON.stringify({
											type: "console",
											offset: s(e.timeMs),
											level: e.level,
											message: e.message,
										}),
									);
							}),
							(so = null)),
							Dt() === It &&
								no.send(
									JSON.stringify({
										type: "console",
										offset: s(),
										level: "log",
										message: "No canvas found, using HTML capture",
									}),
								));
						const u = ({ position: t }) => {
							if (!no || no.readyState !== no.OPEN) return;
							let n = e.tracking.screen.commercialBreak,
								o = "Commercial Break";
							(t === e.ads.position.rewarded &&
								((n = e.tracking.screen.rewardedBreak), (o = "Rewarded Break")),
								An(o),
								no.send(
									JSON.stringify({ type: "sdk-event", offset: s(), event: n }),
								));
						};
						H.addEventListener(e.playtest.startVideo, u);
						const p = () => {
							An("");
						};
						H.addEventListener(e.playtest.stopVideo, p);
						const f = new ke(1),
							m = setInterval(() => {
								no &&
									no.readyState === no.OPEN &&
									no.send(
										JSON.stringify({
											type: "fps",
											offset: s(),
											stats: f.stats(),
										}),
									);
							}, 1e3);
						no.addEventListener("close", (t) => {
							(console.info(
								"%cPOKI_PLAYTEST:%c websocket closed",
								"font-weight: bold",
								"",
								t,
							),
								(eo = () => {}),
								H.removeEventListener(e.playtest.startVideo, u),
								H.removeEventListener(e.playtest.stopVideo, p),
								clearInterval(l),
								clearInterval(m),
								i.stop(),
								(Kt = !0),
								(no = null),
								co(),
								X.track(e.tracking.playtest.closed, {
									reason: `${t.reason}:${t.code}:${t.wasClean}`,
								}));
						});
					}));
			}
			Q = function (t) {
				var n;
				if (
					((n = performance.now()),
					(Wn = n),
					t.event === e.tracking.screen.gameLoadingFinished
						? (oo = performance.now())
						: t.event === e.tracking.screen.gameplayStart &&
							(function (e) {
								qn = e;
							})(performance.now()),
					ro.includes(t.event))
				)
					try {
						(eo(t.event),
							null !== to &&
								to.push({ event: t.event, timeMs: performance.now() }));
					} catch (e) {
						console.warn("%cPOKI_PLAYTEST:%c", "font-weight: bold", "", e);
					}
			};
			function uo(t) {
				const n = (function (e) {
						if ("1" === O("playtest")) return !0;
						if (!U.country) return !1;
						if (!U.isPokiIframe) return !1;
						if (!e.playtestRecord) return !1;
						if (e.playtestVersion && e.playtestVersion !== U.versionID)
							return !1;
						if (e.playtestNewUser && Zn) return !1;
						const t = D() || L() || Mt;
						if ("desktop" === e.playtestDeviceCategory && t) return !1;
						if ("mobile" === e.playtestDeviceCategory && !t) return !1;
						if (["GB", "NL", "CA"].includes(U.country)) return !1;
						const n = navigator;
						if (
							n.connection &&
							n.connection.effectiveType &&
							"4g" !== n.connection.effectiveType
						)
							return !1;
						if (n?.hardwareConcurrency < 8) return !1;
						if (
							!document
								.createElement("canvas")
								.getContext("webgl2", { failIfMajorPerformanceCaveat: !0 })
						)
							return !1;
						if (Bt) {
							const e = n.userAgent.match(/Version\/([\d]+)/);
							if (!e || parseInt(e[1], 10) < 18) return !1;
						} else if (void 0 === window.MediaStreamTrackProcessor) return !1;
						return !0;
					})(t),
					o = Xn(),
					r = "1" === O("playerfittest");
				if (n && o && !r) {
					var i;
					(X.track(e.tracking.playtest.showModal, { show: !0 }),
						console.info("%cPOKI_PLAYTEST:%c init", "font-weight: bold", "", o),
						((i = t?.gameTitle || "this game"),
						new Promise((e, t) => {
							(console.info(
								"%cPOKI_PLAYTEST:%c showing consent screen",
								"font-weight: bold",
								"",
							),
								Kn({ rejectCallback: t, resolveCallback: e, gameTitle: i }));
						}))
							.then(() => {
								X.track(e.tracking.playtest.accepted);
								const n = performance.now() + 6e4;
								let r = 0,
									i = performance.now();
								const a = setInterval(() => {
									const s = performance.now();
									if (
										!(function () {
											const e = window;
											return !!(
												(e.pc && (e.pc.app || e.pc.AppBase)) ||
												e.c3_runtimeInterface ||
												e._dmJSDeviceShared ||
												e.g_WebAudioContext ||
												e.unityGame
											);
										})()
									) {
										const t = St() || 0;
										(t !== r && ((r = t), (i = s)),
											((oo && s - oo > 1e4) || s - i > 1e4) &&
												(X.track(e.tracking.playtest.noCanvas),
												console.info(
													"%cPOKI_PLAYTEST:%c no canvas found, switch to HTML capture",
													"font-weight: bold",
													"",
												),
												Lt(It)));
									}
									const c = En();
									if (c.length) {
										(clearInterval(a), X.track(e.tracking.playtest.starting));
										try {
											lo(c, o, t.playtestRequestID);
										} catch {}
									}
									s > n &&
										(X.track(e.tracking.playtest.notLoaded),
										clearInterval(a),
										console.info(
											"%cPOKI_PLAYTEST:%c no gameLoadingFinished within 2 minutes",
											"font-weight: bold",
											"",
										),
										co());
								}, 1e3);
							})
							.catch((t) => {
								(X.track(e.tracking.playtest.rejected),
									console.info(
										"%cPOKI_PLAYTEST:%c rejected",
										"font-weight: bold",
										"",
										t,
									),
									co());
							}));
				} else {
					if (r || (t.metrictestID && U.isPokiIframe)) {
						const n = $n(t);
						X.track(e.tracking.playerfittest.starting, { playId: n });
					}
					co();
				}
			}
			function po(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
				return o;
			}
			function fo(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function");
			}
			function mo(e, t, n) {
				return (
					t &&
						(function (e, t) {
							for (var n = 0; n < t.length; n++) {
								var o = t[n];
								((o.enumerable = o.enumerable || !1),
									(o.configurable = !0),
									"value" in o && (o.writable = !0),
									Object.defineProperty(e, vo(o.key), o));
							}
						})(e.prototype, t),
					Object.defineProperty(e, "prototype", { writable: !1 }),
					e
				);
			}
			function go(e, t, n) {
				return (
					(t = vo(t)) in e
						? Object.defineProperty(e, t, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0,
							})
						: (e[t] = n),
					e
				);
			}
			function ho(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					(t &&
						(o = o.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})),
						n.push.apply(n, o));
				}
				return n;
			}
			function yo(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2
						? ho(Object(n), !0).forEach(function (t) {
								go(e, t, n[t]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
							: ho(Object(n)).forEach(function (t) {
									Object.defineProperty(
										e,
										t,
										Object.getOwnPropertyDescriptor(n, t),
									);
								});
				}
				return e;
			}
			function wo(e, t) {
				return (
					(function (e) {
						if (Array.isArray(e)) return e;
					})(e) ||
					(function (e, t) {
						var n =
							null == e
								? null
								: ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
									e["@@iterator"];
						if (null != n) {
							var o,
								r,
								i,
								a,
								s = [],
								c = !0,
								d = !1;
							try {
								if (((i = (n = n.call(e)).next), 0 === t)) {
									if (Object(n) !== n) return;
									c = !1;
								} else
									for (
										;
										!(c = (o = i.call(n)).done) &&
										(s.push(o.value), s.length !== t);
										c = !0
									);
							} catch (e) {
								((d = !0), (r = e));
							} finally {
								try {
									if (
										!c &&
										null != n.return &&
										((a = n.return()), Object(a) !== a)
									)
										return;
								} finally {
									if (d) throw r;
								}
							}
							return s;
						}
					})(e, t) ||
					ko(e, t) ||
					(function () {
						throw new TypeError(
							"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
						);
					})()
				);
			}
			function vo(e) {
				var t = (function (e, t) {
					if ("object" != typeof e || !e) return e;
					var n = e[Symbol.toPrimitive];
					if (void 0 !== n) {
						var o = n.call(e, t);
						if ("object" != typeof o) return o;
						throw new TypeError("@@toPrimitive must return a primitive value.");
					}
					return String(e);
				})(e, "string");
				return "symbol" == typeof t ? t : t + "";
			}
			function bo(e) {
				return (
					(bo =
						"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
							? function (e) {
									return typeof e;
								}
							: function (e) {
									return e &&
										"function" == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? "symbol"
										: typeof e;
								}),
					bo(e)
				);
			}
			function ko(e, t) {
				if (e) {
					if ("string" == typeof e) return po(e, t);
					var n = {}.toString.call(e).slice(8, -1);
					return (
						"Object" === n && e.constructor && (n = e.constructor.name),
						"Map" === n || "Set" === n
							? Array.from(e)
							: "Arguments" === n ||
								  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
								? po(e, t)
								: void 0
					);
				}
			}
			var Ao = mo(function e(t) {
				(fo(this, e), (this.p = new Promise(t)));
			});
			((Ao.__typeson__type__ = "TypesonPromise"),
				"undefined" != typeof Symbol &&
					Object.defineProperty(Ao.prototype, Symbol.toStringTag, {
						get: function () {
							return "TypesonPromise";
						},
					}),
				(Ao.prototype.then = function (e, t) {
					var n = this;
					return new Ao(function (o, r) {
						n.p
							.then(function (t) {
								o(e ? e(t) : t);
							})
							.catch(function (e) {
								return t ? t(e) : Promise.reject(e);
							})
							.then(o, r);
					});
				}),
				(Ao.prototype.catch = function (e) {
					return this.then(function () {}, e);
				}),
				(Ao.resolve = function (e) {
					return new Ao(function (t) {
						t(e);
					});
				}),
				(Ao.reject = function (e) {
					return new Ao(function (t, n) {
						n(e);
					});
				}),
				(Ao.all = function (e) {
					return new Ao(function (t, n) {
						Promise.all(
							e.map(function (e) {
								return null != e &&
									e.constructor &&
									"__typeson__type__" in e.constructor &&
									"TypesonPromise" === e.constructor.__typeson__type__
									? e.p
									: e;
							}),
						).then(t, n);
					});
				}),
				(Ao.race = function (e) {
					return new Ao(function (t, n) {
						Promise.race(
							e.map(function (e) {
								return null != e &&
									e.constructor &&
									"__typeson__type__" in e.constructor &&
									"TypesonPromise" === e.constructor.__typeson__type__
									? e.p
									: e;
							}),
						).then(t, n);
					});
				}),
				(Ao.allSettled = function (e) {
					return new Ao(function (t, n) {
						Promise.allSettled(
							e.map(function (e) {
								return null != e &&
									e.constructor &&
									"__typeson__type__" in e.constructor &&
									"TypesonPromise" === e.constructor.__typeson__type__
									? e.p
									: e;
							}),
						).then(t, n);
					});
				}));
			var So = Object.hasOwn,
				Eo = Object.getPrototypeOf;
			function Io(e, t) {
				return (
					Co(e) &&
					"function" == typeof e.then &&
					(!t || "function" == typeof e.catch)
				);
			}
			function _o(e) {
				return Object.prototype.toString.call(e).slice(8, -1);
			}
			function xo(e, t) {
				if (!e || "object" !== bo(e)) return !1;
				var n = Eo(e);
				if (!n) return null === t;
				var o = So(n, "constructor") && n.constructor;
				return "function" != typeof o
					? null === t
					: t === o ||
							(null !== t &&
								Function.prototype.toString.call(o) ===
									Function.prototype.toString.call(t)) ||
							("function" == typeof t &&
								"string" == typeof o.__typeson__type__ &&
								o.__typeson__type__ === t.__typeson__type__);
			}
			function Po(e) {
				return !(!e || "Object" !== _o(e)) && (!Eo(e) || xo(e, Object));
			}
			function To(e) {
				if (!e || "Object" !== _o(e)) return !1;
				var t = Eo(e);
				return !t || xo(e, Object) || To(t);
			}
			function Co(e) {
				return null !== e && "object" === bo(e);
			}
			function Oo(e) {
				return e
					.replaceAll("''", "''''")
					.replace(/^$/, "''")
					.replaceAll("~", "~0")
					.replaceAll(".", "~1");
			}
			function Do(e) {
				return e
					.replaceAll("~1", ".")
					.replaceAll("~0", "~")
					.replace(/^''$/, "")
					.replaceAll("''''", "''");
			}
			function Lo(e, t) {
				if ("" === t) return e;
				if (null === e || "object" !== bo(e))
					throw new TypeError("Unexpected non-object type");
				var n = t.indexOf(".");
				if (-1 !== n) {
					var o = e[Do(t.slice(0, n))];
					return void 0 === o ? void 0 : Lo(o, t.slice(n + 1));
				}
				return e[Do(t)];
			}
			function Mo(e, t, n) {
				if ("" === t) return n;
				if (!e || "object" !== bo(e))
					throw new TypeError("Unexpected non-object type");
				if ("__proto__" === t) throw new TypeError("Invalid property");
				var o = t.indexOf(".");
				return -1 !== o
					? Mo(e[Do(t.slice(0, o))], t.slice(o + 1), n)
					: ((e[Do(t)] = n), e);
			}
			function Bo(e) {
				return null === e ? "null" : Array.isArray(e) ? "array" : bo(e);
			}
			function No(e, t, n) {
				return ((e && e.then) || (e = Promise.resolve(e)), t ? e.then(t) : e);
			}
			var Ro = Object.keys,
				jo = Object.hasOwn,
				Fo = Array.isArray,
				Uo = [
					"type",
					"replaced",
					"iterateIn",
					"iterateUnsetNumeric",
					"addLength",
				];
			function Vo(e) {
				return function () {
					for (var t = [], n = 0; n < arguments.length; n++)
						t[n] = arguments[n];
					try {
						return Promise.resolve(e.apply(this, t));
					} catch (e) {
						return Promise.reject(e);
					}
				};
			}
			function Go(e, t) {
				var n, o;
				if ("" === e.keypath) return -1;
				var r = null !== (n = e.keypath.match(/\./g)) && void 0 !== n ? n : 0,
					i = null !== (o = t.keypath.match(/\./g)) && void 0 !== o ? o : 0;
				return (
					r && (r = r.length),
					i && (i = i.length),
					r > i
						? -1
						: r < i
							? 1
							: e.keypath < t.keypath
								? -1
								: e.keypath > t.keypath
									? 1
									: 0
				);
			}
			var zo = mo(
					function e(t) {
						(fo(this, e),
							(this.options = t),
							(this.plainObjectReplacers = []),
							(this.nonplainObjectReplacers = []),
							(this.revivers = {}),
							(this.types = {}));
					},
					[
						{
							key: "stringify",
							value: function (e, t, n, o) {
								o = yo(
									yo(yo({}, this.options), o),
									{},
									{ stringification: !0 },
								);
								var r = this.encapsulate(e, null, o);
								return Fo(r)
									? JSON.stringify(r[0], t, n)
									: r.then(function (e) {
											return JSON.stringify(e, t, n);
										});
							},
						},
						{
							key: "stringifySync",
							value: function (e, t, n, o) {
								return this.stringify(
									e,
									t,
									n,
									yo(yo({ throwOnBadSyncType: !0 }, o), {}, { sync: !0 }),
								);
							},
						},
						{
							key: "stringifyAsync",
							value: function (e, t, n, o) {
								return this.stringify(
									e,
									t,
									n,
									yo(yo({ throwOnBadSyncType: !0 }, o), {}, { sync: !1 }),
								);
							},
						},
						{
							key: "parse",
							value: function (e, t, n) {
								return (
									(n = yo(yo(yo({}, this.options), n), {}, { parse: !0 })),
									this.revive(JSON.parse(e, t), n)
								);
							},
						},
						{
							key: "parseSync",
							value: function (e, t, n) {
								return this.parse(
									e,
									t,
									yo(yo({ throwOnBadSyncType: !0 }, n), {}, { sync: !0 }),
								);
							},
						},
						{
							key: "parseAsync",
							value: function (e, t, n) {
								return this.parse(
									e,
									t,
									yo(yo({ throwOnBadSyncType: !0 }, n), {}, { sync: !1 }),
								);
							},
						},
						{
							key: "specialTypeNames",
							value: function (e, t) {
								var n =
									arguments.length > 2 && void 0 !== arguments[2]
										? arguments[2]
										: {};
								return ((n.returnTypeNames = !0), this.encapsulate(e, t, n));
							},
						},
						{
							key: "rootTypeName",
							value: function (e, t) {
								var n =
									arguments.length > 2 && void 0 !== arguments[2]
										? arguments[2]
										: {};
								return ((n.iterateNone = !0), this.encapsulate(e, t, n));
							},
						},
						{
							key: "encapsulate",
							value: function (e, t, n) {
								var o = this,
									r = yo(yo({ sync: !0 }, this.options), n),
									i = r.sync,
									a = {},
									s = [],
									c = [],
									d = [],
									l = !("cyclic" in r) || r.cyclic,
									u = r.encapsulateObserver,
									p = function (e) {
										var t = Object.values(a);
										if (r.iterateNone) return t.length ? t[0] : Bo(e);
										if (t.length) {
											if (r.returnTypeNames)
												return (function (e) {
													return (
														(function (e) {
															if (Array.isArray(e)) return po(e);
														})(e) ||
														(function (e) {
															if (
																("undefined" != typeof Symbol &&
																	null != e[Symbol.iterator]) ||
																null != e["@@iterator"]
															)
																return Array.from(e);
														})(e) ||
														ko(e) ||
														(function () {
															throw new TypeError(
																"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
															);
														})()
													);
												})(new Set(t));
											e && Po(e) && !jo(e, "$types")
												? (e.$types = a)
												: (e = { $: e, $types: { $: a } });
										} else
											Co(e) && jo(e, "$types") && (e = { $: e, $types: !0 });
										return !r.returnTypeNames && e;
									},
									f = Vo(function (e, t) {
										return No(
											Promise.all(
												t.map(function (e) {
													return e[1].p;
												}),
											),
											function (n) {
												return No(
													Promise.all(
														n.map(
															Vo(function (n) {
																var o = !1,
																	r = [],
																	i = wo(t.splice(0, 1), 1),
																	a = wo(i[0], 7),
																	s = a[0],
																	c = a[2],
																	d = a[3],
																	l = a[4],
																	u = a[5],
																	p = a[6],
																	m = g(s, n, c, d, r, !0, p),
																	h = xo(m, Ao);
																return (function (e, t) {
																	var n = e();
																	return n && n.then ? n.then(t) : t(n);
																})(
																	function () {
																		if (s && h)
																			return No(m.p, function (t) {
																				l[u] = t;
																				var n = f(e, r);
																				return ((o = !0), n);
																			});
																	},
																	function (t) {
																		return o
																			? t
																			: (s ? (l[u] = m) : (e = h ? m.p : m),
																				f(e, r));
																	},
																);
															}),
														),
													),
													function () {
														return e;
													},
												);
											},
										);
									}),
									m = function (e, t, n) {
										Object.assign(e, t);
										var o = Uo.map(function (t) {
											var n = e[t];
											return (delete e[t], n);
										});
										(n(),
											Uo.forEach(function (t, n) {
												e[t] = o[n];
											}));
									},
									g = function (e, t, n, i, d, l, p) {
										var f,
											y = {},
											w = bo(t),
											v = u
												? function (o) {
														var r,
															a =
																null !== (r = null != p ? p : i.type) &&
																void 0 !== r
																	? r
																	: Bo(t);
														u(
															Object.assign(
																null != o ? o : y,
																{
																	keypath: e,
																	value: t,
																	cyclic: n,
																	stateObj: i,
																	promisesData: d,
																	resolvingTypesonPromise: l,
																	awaitingTypesonPromise: xo(t, Ao),
																},
																{ type: a },
															),
														);
													}
												: null;
										if (
											["string", "boolean", "number", "undefined"].includes(w)
										)
											return (
												void 0 === t ||
												Number.isNaN(t) ||
												t === Number.NEGATIVE_INFINITY ||
												t === Number.POSITIVE_INFINITY ||
												0 === t
													? (f = i.replaced ? t : h(e, t, i, d, !1, l, v)) !==
															t && (y = { replaced: f })
													: (f = t),
												v && v(),
												f
											);
										if (null === t) return (v && v(), t);
										if (
											n &&
											!i.iterateIn &&
											!i.iterateUnsetNumeric &&
											t &&
											"object" === bo(t)
										) {
											var b = s.indexOf(t);
											if (-1 !== b)
												return (
													(a[e] = "#"),
													v && v({ cyclicKeypath: c[b] }),
													"#" + c[b]
												);
											!0 === n && (s.push(t), c.push(e));
										}
										var k,
											A = Po(t),
											S = Fo(t),
											E =
												((A || S) &&
													(!o.plainObjectReplacers.length || i.replaced)) ||
												i.iterateIn
													? t
													: h(e, t, i, d, A || S, null, v);
										if (
											(E !== t
												? ((f = E), (y = { replaced: E }))
												: "" === e && xo(t, Ao)
													? (d.push([e, t, n, i, void 0, void 0, i.type]),
														(f = t))
													: (S && "object" !== i.iterateIn) ||
														  "array" === i.iterateIn
														? ((k = new Array(t.length)), (y = { clone: k }))
														: (["function", "symbol"].includes(bo(t)) ||
																	"toJSON" in t ||
																	xo(t, Ao) ||
																	xo(t, Promise) ||
																	xo(t, ArrayBuffer)) &&
															  !A &&
															  "object" !== i.iterateIn
															? (f = t)
															: ((k = {}),
																i.addLength && (k.length = t.length),
																(y = { clone: k })),
											v && v(),
											r.iterateNone)
										)
											return null != k ? k : f;
										if (!k) return f;
										if (i.iterateIn) {
											var I = function (o) {
												var r = { ownKeys: jo(t, o) };
												m(i, r, function () {
													var r = e + (e ? "." : "") + Oo(o),
														a = g(r, t[o], Boolean(n), i, d, l);
													xo(a, Ao)
														? d.push([r, a, Boolean(n), i, k, o, i.type])
														: void 0 !== a && (k[o] = a);
												});
											};
											for (var _ in t) I(_);
											v && v({ endIterateIn: !0, end: !0 });
										} else
											(Ro(t).forEach(function (o) {
												var r = e + (e ? "." : "") + Oo(o);
												m(i, { ownKeys: !0 }, function () {
													var e = g(r, t[o], Boolean(n), i, d, l);
													xo(e, Ao)
														? d.push([r, e, Boolean(n), i, k, o, i.type])
														: void 0 !== e && (k[o] = e);
												});
											}),
												v && v({ endIterateOwn: !0, end: !0 }));
										if (i.iterateUnsetNumeric) {
											for (
												var x = t.length,
													P = function (o) {
														if (!(o in t)) {
															var r = ""
																.concat(e)
																.concat(e ? "." : "")
																.concat(String(o));
															m(i, { ownKeys: !1 }, function () {
																var e = g(r, void 0, Boolean(n), i, d, l);
																xo(e, Ao)
																	? d.push([r, e, Boolean(n), i, k, o, i.type])
																	: void 0 !== e && (k[o] = e);
															});
														}
													},
													T = 0;
												T < x;
												T++
											)
												P(T);
											v && v({ endIterateUnsetNumeric: !0, end: !0 });
										}
										return k;
									},
									h = function (e, t, n, r, s, c, d) {
										for (
											var u = s
													? o.plainObjectReplacers
													: o.nonplainObjectReplacers,
												p = u.length;
											p--;
										) {
											var f = u[p];
											if (f.test(t, n)) {
												var m = f.type;
												if (o.revivers[m]) {
													var h = a[e];
													a[e] = h ? [m].concat(h) : m;
												}
												if (
													(Object.assign(n, { type: m, replaced: !0 }),
													(i || !f.replaceAsync) && !f.replace)
												)
													return (
														d && d({ typeDetected: !0 }),
														g(e, t, l && "readonly", n, r, c, m)
													);
												d && d({ replacing: !0 });
												var y = void 0;
												if (i || !f.replaceAsync) {
													if (void 0 === f.replace)
														throw new TypeError("Missing replacer");
													y = f.replace(t, n);
												} else y = f.replaceAsync(t, n);
												return g(e, y, l && "readonly", n, r, c, m);
											}
										}
										return t;
									},
									y = g("", e, l, null != t ? t : {}, d);
								if (d.length)
									return i && r.throwOnBadSyncType
										? (function () {
												throw new TypeError(
													"Sync method requested but async result obtained",
												);
											})()
										: Promise.resolve(f(y, d)).then(p);
								if (!i && r.throwOnBadSyncType)
									throw new TypeError(
										"Async method requested but sync result obtained",
									);
								return r.stringification && i
									? [p(y)]
									: i
										? p(y)
										: Promise.resolve(p(y));
							},
						},
						{
							key: "encapsulateSync",
							value: function (e, t, n) {
								return this.encapsulate(
									e,
									t,
									yo(yo({ throwOnBadSyncType: !0 }, n), {}, { sync: !0 }),
								);
							},
						},
						{
							key: "encapsulateAsync",
							value: function (e, t, n) {
								return this.encapsulate(
									e,
									t,
									yo(yo({ throwOnBadSyncType: !0 }, n), {}, { sync: !1 }),
								);
							},
						},
						{
							key: "revive",
							value: function (e, t) {
								var n = this,
									o = yo(yo({ sync: !0 }, this.options), t),
									r = o.sync;
								function i(e) {
									if (r) return e;
									if (o.throwOnBadSyncType)
										throw new TypeError(
											"Async method requested but sync result obtained",
										);
									return Promise.resolve(e);
								}
								if (!e || "object" !== bo(e) || Array.isArray(e)) return i(e);
								var a = e.$types;
								if (!0 === a) return i(e.$);
								if (!a || "object" !== bo(a) || Array.isArray(a)) return i(e);
								var s = [],
									c = {},
									d = !0;
								a.$ && Po(a.$) && ((e = e.$), (a = a.$), (d = !1));
								var l = function (e, t) {
										var o,
											i = wo(
												null !== (o = n.revivers[e]) && void 0 !== o ? o : [],
												1,
											)[0];
										if (!i) throw new Error("Unregistered type: " + e);
										if (r && !("revive" in i)) return t;
										if (!r && i.reviveAsync) return i.reviveAsync(t, c);
										if (i.revive) return i.revive(t, c);
										throw new Error("Missing reviver");
									},
									u = [];
								function p(e) {
									return xo(e, Ko) ? void 0 : e;
								}
								var f,
									m = (function () {
										var t = [];
										if (!a) throw new Error("Found bad `types`");
										if (
											(Object.entries(a).forEach(function (e) {
												var o = wo(e, 2),
													r = o[0],
													i = o[1];
												"#" !== i &&
													[].concat(i).forEach(function (e) {
														var o;
														wo(
															null !== (o = n.revivers[e]) && void 0 !== o
																? o
																: [null, {}],
															2,
														)[1].plain &&
															(t.push({ keypath: r, type: e }), delete a[r]);
													});
											}),
											t.length)
										)
											return (
												t.sort(Go),
												t.reduce(
													function t(n, o) {
														var r = o.keypath,
															i = o.type;
														if (Io(n))
															return n.then(function (e) {
																return t(e, { keypath: r, type: i });
															});
														var a = Lo(e, r);
														if (xo((a = l(i, a)), Ao))
															return a.then(function (t) {
																var n = Mo(e, r, t);
																n === t && (e = n);
															});
														var s = Mo(e, r, a);
														s === a && (e = s);
													},
													void 0,
												)
											);
									})();
								return (
									xo(m, Ao)
										? (f = m.then(function () {
												return e;
											}))
										: ((f = (function e(t, n, o, r, i) {
												if (!d || "$types" !== t) {
													var c = a[t],
														p = Fo(n);
													if (p || Po(n)) {
														var f = p ? new Array(n.length) : {};
														for (
															Ro(n).forEach(function (r) {
																var i = e(
																		t + (t ? "." : "") + Oo(r),
																		n[r],
																		null != o ? o : f,
																		f,
																		r,
																	),
																	a = function (e) {
																		return (
																			xo(e, Ko)
																				? (f[r] = void 0)
																				: void 0 !== e && (f[r] = e),
																			e
																		);
																	};
																xo(i, Ao)
																	? u.push(
																			i.then(function (e) {
																				return a(e);
																			}),
																		)
																	: a(i);
															}),
																n = f;
															s.length;
														) {
															var m = wo(s[0], 4),
																g = m[0],
																h = m[1],
																y = m[2],
																w = m[3],
																v = Lo(g, h);
															if (void 0 === v) break;
															((y[w] = v), s.splice(0, 1));
														}
													}
													if (!c) return n;
													if ("#" === c) {
														var b = Lo(o, n.slice(1));
														return (
															void 0 === b && s.push([o, n.slice(1), r, i]),
															b
														);
													}
													return [].concat(c).reduce(function e(t, n) {
														if (xo(t, Ao))
															return t.then(function (t) {
																return e(t, n);
															});
														if ("string" != typeof n)
															throw new TypeError("Bad type JSON");
														return l(n, t);
													}, n);
												}
											})("", e, null)),
											u.length &&
												(f = Ao.resolve(f)
													.then(function (e) {
														return Ao.all([e].concat(u));
													})
													.then(function (e) {
														return wo(e, 1)[0];
													}))),
									Io(f)
										? r && o.throwOnBadSyncType
											? (function () {
													throw new TypeError(
														"Sync method requested but async result obtained",
													);
												})()
											: xo(f, Ao)
												? f.p.then(p)
												: f
										: !r && o.throwOnBadSyncType
											? (function () {
													throw new TypeError(
														"Async method requested but sync result obtained",
													);
												})()
											: r
												? p(f)
												: Promise.resolve(p(f))
								);
							},
						},
						{
							key: "reviveSync",
							value: function (e, t) {
								return this.revive(
									e,
									yo(yo({ throwOnBadSyncType: !0 }, t), {}, { sync: !0 }),
								);
							},
						},
						{
							key: "reviveAsync",
							value: function (e, t) {
								return this.revive(
									e,
									yo(yo({ throwOnBadSyncType: !0 }, t), {}, { sync: !1 }),
								);
							},
						},
						{
							key: "register",
							value: function (e, t) {
								var n = this,
									o = null != t ? t : {},
									r = function (e) {
										Fo(e)
											? e.forEach(function (e) {
													r(e);
												})
											: Ro(e).forEach(function (t) {
													var r;
													if ("#" === t)
														throw new TypeError(
															"# cannot be used as a type name as it is reserved for cyclic objects",
														);
													if (Ho.includes(t))
														throw new TypeError(
															"Plain JSON object types are reserved as type names",
														);
													var i = e[t],
														a =
															i &&
															"function" != typeof i &&
															!Array.isArray(i) &&
															i.testPlainObjects
																? n.plainObjectReplacers
																: n.nonplainObjectReplacers,
														s = a.filter(function (e) {
															return e.type === t;
														});
													if (
														(s.length &&
															(a.splice(a.indexOf(s[0]), 1),
															delete n.revivers[t],
															delete n.types[t]),
														"function" == typeof i)
													) {
														var c = i;
														i = {
															test: function (e) {
																return e && e.constructor === c;
															},
															replace: function (e) {
																return yo({}, e);
															},
															revive: function (e) {
																return Object.assign(
																	Object.create(c.prototype),
																	e,
																);
															},
														};
													} else if (Fo(i)) {
														var d = wo(i, 3);
														i = { test: d[0], replace: d[1], revive: d[2] };
													}
													if (null !== (r = i) && void 0 !== r && r.test) {
														var l = { type: t, test: i.test.bind(i) };
														(i.replace && (l.replace = i.replace.bind(i)),
															i.replaceAsync &&
																(l.replaceAsync = i.replaceAsync.bind(i)));
														var u =
															"number" == typeof o.fallback
																? o.fallback
																: o.fallback
																	? 0
																	: Number.POSITIVE_INFINITY;
														if (
															(i.testPlainObjects
																? n.plainObjectReplacers.splice(u, 0, l)
																: n.nonplainObjectReplacers.splice(u, 0, l),
															i.revive || i.reviveAsync)
														) {
															var p = {};
															(i.revive && (p.revive = i.revive.bind(i)),
																i.reviveAsync &&
																	(p.reviveAsync = i.reviveAsync.bind(i)),
																(n.revivers[t] = [
																	p,
																	{ plain: i.testPlainObjects },
																]));
														}
														n.types[t] = i;
													}
												});
									};
								return (
									[].concat(e).forEach(function (e) {
										r(e);
									}),
									this
								);
							},
						},
					],
				),
				Ko = mo(function e() {
					fo(this, e);
				});
			Ko.__typeson__type__ = "TypesonUndefined";
			for (
				var Ho = ["null", "boolean", "number", "string", "array", "object"],
					qo =
						"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
					Wo = new Uint8Array(256),
					Yo = 0;
				Yo < 64;
				Yo++
			)
				Wo[qo.codePointAt(Yo)] = Yo;
			var Jo = function (e, t, n) {
					null == n && (n = e.byteLength);
					for (
						var o = new Uint8Array(e, 0, n), r = o.length, i = "", a = 0;
						a < r;
						a += 3
					)
						((i += qo[o[a] >> 2]),
							(i += qo[((3 & o[a]) << 4) | (o[a + 1] >> 4)]),
							(i += qo[((15 & o[a + 1]) << 2) | (o[a + 2] >> 6)]),
							(i += qo[63 & o[a + 2]]));
					return (
						r % 3 == 2
							? (i = i.slice(0, -1) + "=")
							: r % 3 == 1 && (i = i.slice(0, -2) + "=="),
						i
					);
				},
				Qo = function (e, t) {
					var n = e.length;
					if (n % 4)
						throw new Error("Bad base64 length: not divisible by four");
					var o,
						r,
						i,
						a,
						s = 0.75 * e.length,
						c = 0;
					"=" === e[e.length - 1] && (s--, "=" === e[e.length - 2] && s--);
					for (
						var d = new ArrayBuffer(s, t), l = new Uint8Array(d), u = 0;
						u < n;
						u += 4
					)
						((o = Wo[e.codePointAt(u)]),
							(r = Wo[e.codePointAt(u + 1)]),
							(i = Wo[e.codePointAt(u + 2)]),
							(a = Wo[e.codePointAt(u + 3)]),
							(l[c++] = (o << 2) | (r >> 4)),
							(l[c++] = ((15 & r) << 4) | (i >> 2)),
							(l[c++] = ((3 & i) << 6) | (63 & a)));
					return d;
				};
			const $o = {
					arraybuffer: {
						test: (e) => "ArrayBuffer" === _o(e),
						replace(e, t) {
							t.buffers || (t.buffers = []);
							const n = t.buffers.indexOf(e);
							return -1 !== n
								? { index: n }
								: (t.buffers.push(e),
									{
										s: Jo(e),
										maxByteLength: e.maxByteLength,
										resizable: e.resizable,
									});
						},
						revive(e, t) {
							if ((t.buffers || (t.buffers = []), Object.hasOwn(e, "index")))
								return t.buffers[e.index];
							const n = Qo(
								e.s,
								e.resizable ? { maxByteLength: e.maxByteLength } : void 0,
							);
							return (t.buffers.push(n), n);
						},
					},
				},
				Zo = {
					bigintObject: {
						test: (e) => "object" == typeof e && xo(e, BigInt),
						replace: String,
						revive: (e) => new Object(BigInt(e)),
					},
				},
				Xo = {
					bigint: {
						test: (e) => "bigint" == typeof e,
						replace: String,
						revive: (e) => BigInt(e),
					},
				};
			function er(e) {
				return new Uint8Array(e).reduce(
					(e, t) => e + String.fromCodePoint(t),
					"",
				);
			}
			function tr(e) {
				const t = new Uint8Array(e.length);
				for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
				return t.buffer;
			}
			const nr = {
				blob: {
					test: (e) => "Blob" === _o(e),
					replace(e) {
						const t = new XMLHttpRequest();
						if (
							(t.overrideMimeType("text/plain; charset=x-user-defined"),
							t.open("GET", URL.createObjectURL(e), !1),
							t.send(),
							200 !== t.status && 0 !== t.status)
						)
							throw new Error("Bad Blob access: " + t.status);
						return { type: e.type, stringContents: t.responseText };
					},
					revive(e) {
						const { type: t, stringContents: n } = e;
						return new Blob([tr(n)], { type: t });
					},
					replaceAsync: (e) =>
						new Ao((t, n) => {
							const o = new FileReader();
							(o.addEventListener("load", () => {
								t({ type: e.type, stringContents: er(o.result) });
							}),
								o.addEventListener("error", () => {
									n(o.error);
								}),
								o.readAsArrayBuffer(e));
						}),
				},
			};
			const or = {
					cryptokey: {
						test: (e) => "CryptoKey" === _o(e) && e.extractable,
						replaceAsync: (e) =>
							new Ao(async (t, n) => {
								let o;
								try {
									o = await crypto.subtle.exportKey("jwk", e);
								} catch (t) {
									return void n(t);
								}
								t({ jwk: o, algorithm: e.algorithm, usages: e.usages });
							}),
						revive(e) {
							const { jwk: t, algorithm: n, usages: o } = e;
							return crypto.subtle.importKey("jwk", t, n, !0, o);
						},
					},
				},
				rr = {
					dataview: {
						test: (e) => "DataView" === _o(e),
						replace({ buffer: e, byteOffset: t, byteLength: n }, o) {
							o.buffers || (o.buffers = []);
							const r = o.buffers.indexOf(e);
							return -1 !== r
								? { index: r, byteOffset: t, byteLength: n }
								: (o.buffers.push(e),
									{
										encoded: Jo(e),
										maxByteLength: e.maxByteLength,
										resizable: e.resizable,
										byteOffset: t,
										byteLength: n,
									});
						},
						revive(e, t) {
							t.buffers || (t.buffers = []);
							const {
								byteOffset: n,
								byteLength: o,
								encoded: r,
								index: i,
								maxByteLength: a,
								resizable: s,
							} = e;
							let c;
							return (
								"index" in e
									? (c = t.buffers[i])
									: ((c = Qo(r, s ? { maxByteLength: a } : a)),
										t.buffers.push(c)),
								new DataView(c, n, o)
							);
						},
					},
				},
				ir = {
					date: {
						test: (e) => "Date" === _o(e),
						replace(e) {
							const t = e.getTime();
							return Number.isNaN(t) ? "NaN" : t;
						},
						revive: (e) => ("NaN" === e ? new Date(Number.NaN) : new Date(e)),
					},
				},
				ar = {
					domexception: {
						test: (e) => "DOMException" === _o(e),
						replace: (e) => ({ name: e.name, message: e.message }),
						revive: ({ message: e, name: t }) => new DOMException(e, t),
					},
				},
				sr = {};
			function cr(e) {
				sr[e.name.toLowerCase()] = {
					test: (t) => _o(t) === e.name,
					replace: (e) =>
						e.is2D
							? { a: e.a, b: e.b, c: e.c, d: e.d, e: e.e, f: e.f }
							: {
									m11: e.m11,
									m12: e.m12,
									m13: e.m13,
									m14: e.m14,
									m21: e.m21,
									m22: e.m22,
									m23: e.m23,
									m24: e.m24,
									m31: e.m31,
									m32: e.m32,
									m33: e.m33,
									m34: e.m34,
									m41: e.m41,
									m42: e.m42,
									m43: e.m43,
									m44: e.m44,
								},
					revive: (t) =>
						Object.hasOwn(t, "a")
							? new e([t.a, t.b, t.c, t.d, t.e, t.f])
							: new e([
									t.m11,
									t.m12,
									t.m13,
									t.m14,
									t.m21,
									t.m22,
									t.m23,
									t.m24,
									t.m31,
									t.m32,
									t.m33,
									t.m34,
									t.m41,
									t.m42,
									t.m43,
									t.m44,
								]),
				};
			}
			("undefined" != typeof DOMMatrix && cr(DOMMatrix),
				"undefined" != typeof DOMMatrixReadOnly && cr(DOMMatrixReadOnly));
			const dr = {};
			function lr(e) {
				dr[e.name.toLowerCase()] = {
					test: (t) => _o(t) === e.name,
					replace: (e) => ({ x: e.x, y: e.y, z: e.z, w: e.w }),
					revive: ({ x: t, y: n, z: o, w: r }) => new e(t, n, o, r),
				};
			}
			("undefined" != typeof DOMPoint && lr(DOMPoint),
				"undefined" != typeof DOMPointReadOnly && lr(DOMPointReadOnly));
			const ur = {
					domquad: {
						test: (e) => "DOMQuad" === _o(e),
						replace: (e) => ({ p1: e.p1, p2: e.p2, p3: e.p3, p4: e.p4 }),
						revive: ({ p1: e, p2: t, p3: n, p4: o }) => new DOMQuad(e, t, n, o),
					},
				},
				pr = {};
			function fr(e) {
				pr[e.name.toLowerCase()] = {
					test: (t) => _o(t) === e.name,
					replace: (e) => ({
						x: e.x,
						y: e.y,
						width: e.width,
						height: e.height,
					}),
					revive: ({ x: t, y: n, width: o, height: r }) => new e(t, n, o, r),
				};
			}
			("undefined" != typeof DOMRect && fr(DOMRect),
				"undefined" != typeof DOMRectReadOnly && fr(DOMRectReadOnly));
			const mr = {
					error: {
						test: (e) => "Error" === _o(e),
						replace: ({
							name: e,
							message: t,
							cause: n,
							stack: o,
							fileName: r,
							lineNumber: i,
							columnNumber: a,
						}) => ({
							name: e,
							message: t,
							cause: n,
							stack: o,
							fileName: r,
							lineNumber: i,
							columnNumber: a,
						}),
						revive(e) {
							const t = new Error(e.message);
							return (
								(t.name = e.name),
								(t.cause = e.cause),
								(t.stack = e.stack),
								(t.fileName = e.fileName),
								(t.lineNumber = e.lineNumber),
								(t.columnNumber = e.columnNumber),
								t
							);
						},
					},
				},
				gr = {};
			function hr(e) {
				gr[e.name.toLowerCase()] = {
					test: (t) => xo(t, e),
					replace: ({
						name: e,
						message: t,
						cause: n,
						stack: o,
						fileName: r,
						lineNumber: i,
						columnNumber: a,
						errors: s,
					}) => ({
						name: e,
						message: t,
						cause: n,
						stack: o,
						fileName: r,
						lineNumber: i,
						columnNumber: a,
						errors: s,
					}),
					revive(t) {
						const n =
							"undefined" != typeof AggregateError && e === AggregateError
								? new e(t.errors, t.message)
								: new e(t.message);
						return (
							(n.name = t.name),
							(n.cause = t.cause),
							(n.stack = t.stack),
							(n.fileName = t.fileName),
							(n.lineNumber = t.lineNumber),
							(n.columnNumber = t.columnNumber),
							n
						);
					},
				};
			}
			([
				TypeError,
				RangeError,
				SyntaxError,
				ReferenceError,
				EvalError,
				URIError,
			].forEach((e) => hr(e)),
				"undefined" != typeof AggregateError && hr(AggregateError),
				"function" == typeof InternalError && hr(InternalError));
			const yr = {
					file: {
						test: (e) => "File" === _o(e),
						replace(e) {
							const t = new XMLHttpRequest();
							if (
								(t.overrideMimeType("text/plain; charset=x-user-defined"),
								t.open("GET", URL.createObjectURL(e), !1),
								t.send(),
								200 !== t.status && 0 !== t.status)
							)
								throw new Error("Bad File access: " + t.status);
							return {
								type: e.type,
								stringContents: t.responseText,
								name: e.name,
								lastModified: e.lastModified,
							};
						},
						revive: ({
							name: e,
							type: t,
							stringContents: n,
							lastModified: o,
						}) => new File([tr(n)], e, { type: t, lastModified: o }),
						replaceAsync: (e) =>
							new Ao(function (t, n) {
								const o = new FileReader();
								(o.addEventListener("load", function () {
									t({
										type: e.type,
										stringContents: er(o.result),
										name: e.name,
										lastModified: e.lastModified,
									});
								}),
									o.addEventListener("error", function () {
										n(o.error);
									}),
									o.readAsArrayBuffer(e));
							}),
					},
				},
				wr = {
					file: yr.file,
					filelist: {
						test: (e) => "FileList" === _o(e),
						replace(e) {
							const t = [];
							for (let n = 0; n < e.length; n++) t[n] = e.item(n);
							return t;
						},
						revive(e) {
							class t {
								constructor() {
									((this._files = arguments[0]),
										(this.length = this._files.length));
								}
								item(e) {
									return this._files[e];
								}
								get [Symbol.toStringTag]() {
									return "FileList";
								}
							}
							return new t(e);
						},
					},
				},
				vr = {
					imagebitmap: {
						test: (e) =>
							"ImageBitmap" === _o(e) ||
							(e && e.dataset && "ImageBitmap" === e.dataset.toStringTag),
						replace(e) {
							const t = document.createElement("canvas");
							return (
								t.getContext("2d").drawImage(e, 0, 0),
								{ width: e.width, height: e.height, dataURL: t.toDataURL() }
							);
						},
						revive(e) {
							const t =
									"undefined" == typeof OffscreenCanvas
										? document.createElement("canvas")
										: new OffscreenCanvas(e.width, e.height),
								n = t.getContext("2d"),
								o = document.createElement("img");
							return (
								o.addEventListener("load", function () {
									n.drawImage(o, 0, 0);
								}),
								(o.src = e.dataURL),
								"undefined" == typeof OffscreenCanvas
									? t
									: t.transferToImageBitmap()
							);
						},
						reviveAsync(e) {
							const t = document.createElement("canvas"),
								n = t.getContext("2d"),
								o = document.createElement("img");
							return (
								o.addEventListener("load", function () {
									n.drawImage(o, 0, 0);
								}),
								(o.src = e.dataURL),
								new Ao(async (e, n) => {
									try {
										e(await createImageBitmap(t));
									} catch (e) {
										n(e);
									}
								})
							);
						},
					},
				},
				br = {
					imagedata: {
						test: (e) => "ImageData" === _o(e),
						replace: (e) => ({
							array: [...e.data],
							width: e.width,
							height: e.height,
						}),
						revive: (e) =>
							new ImageData(new Uint8ClampedArray(e.array), e.width, e.height),
					},
				},
				kr = {
					infinity: {
						test: (e) => e === Number.POSITIVE_INFINITY,
						replace: () => "Infinity",
						revive: () => Number.POSITIVE_INFINITY,
					},
				},
				Ar = {
					test: (e) => xo(e, Intl.Collator),
					replace: (e) => e.resolvedOptions(),
					revive: (e) => new Intl.Collator(e.locale, e),
				},
				Sr = {
					IntlCollator: Ar,
					IntlDateTimeFormat: {
						test: (e) => xo(e, Intl.DateTimeFormat),
						replace: (e) => e.resolvedOptions(),
						revive: (e) => new Intl.DateTimeFormat(e.locale, e),
					},
					IntlNumberFormat: {
						test: (e) => xo(e, Intl.NumberFormat),
						replace: (e) => e.resolvedOptions(),
						revive: (e) => new Intl.NumberFormat(e.locale, e),
					},
				},
				Er = {
					map: {
						test: (e) => "Map" === _o(e),
						replace: (e) => [...e.entries()],
						revive: (e) => new Map(e),
					},
				},
				Ir = {
					nan: {
						test: (e) => Number.isNaN(e),
						replace: () => "NaN",
						revive: () => Number.NaN,
					},
				},
				_r = {
					negativeInfinity: {
						test: (e) => e === Number.NEGATIVE_INFINITY,
						replace: () => "-Infinity",
						revive: () => Number.NEGATIVE_INFINITY,
					},
				},
				xr = {
					negativeZero: {
						test: (e) => Object.is(e, -0),
						replace: () => 0,
						revive: () => -0,
					},
				},
				Pr = {
					StringObject: {
						test: (e) => "String" === _o(e) && "object" == typeof e,
						replace: String,
						revive: (e) => new String(e),
					},
					BooleanObject: {
						test: (e) => "Boolean" === _o(e) && "object" == typeof e,
						replace: (e) => e.valueOf(),
						revive: (e) => new Boolean(e),
					},
					NumberObject: {
						test: (e) => "Number" === _o(e) && "object" == typeof e,
						replace: Number,
						revive: (e) => new Number(e),
					},
				},
				Tr = {
					regexp: {
						test: (e) => "RegExp" === _o(e),
						replace: (e) => ({
							source: e.source,
							flags:
								(e.global ? "g" : "") +
								(e.ignoreCase ? "i" : "") +
								(e.multiline ? "m" : "") +
								(e.sticky ? "y" : "") +
								(e.unicode ? "u" : "") +
								(e.unicodeSets ? "v" : "") +
								(e.hasIndices ? "d" : "") +
								(e.dotAll ? "s" : ""),
						}),
						revive: ({ source: e, flags: t }) => new RegExp(e, t),
					},
				},
				Cr = {
					set: {
						test: (e) => "Set" === _o(e),
						replace: (e) => [...e.values()],
						revive: (e) => new Set(e),
					},
				},
				Or = {};
			"function" == typeof Int8Array &&
				[
					Int8Array,
					Uint8Array,
					Uint8ClampedArray,
					Int16Array,
					Uint16Array,
					Int32Array,
					Uint32Array,
					Float32Array,
					Float64Array,
					...("function" == typeof BigInt64Array
						? [BigInt64Array, BigUint64Array]
						: []),
				].forEach((e) =>
					(function (e) {
						const t = e.name;
						Or[t.toLowerCase()] = {
							test: (e) => _o(e) === t,
							replace: (e) =>
								(0 === e.byteOffset && e.byteLength === e.buffer.byteLength
									? e
									: e.slice(0)
								).buffer,
							revive: (t) => ("ArrayBuffer" === _o(t) ? new e(t) : t),
						};
					})(e),
				);
			const Dr = {};
			"function" == typeof Int8Array &&
				[
					Int8Array,
					Uint8Array,
					Uint8ClampedArray,
					Int16Array,
					Uint16Array,
					Int32Array,
					Uint32Array,
					Float32Array,
					Float64Array,
					...("function" == typeof BigInt64Array
						? [BigInt64Array, BigUint64Array]
						: []),
				].forEach((e) =>
					(function (e) {
						const t = e.name;
						Dr[t.toLowerCase()] = {
							test: (e) => _o(e) === t,
							replace({ buffer: e, byteOffset: t, length: n }, o) {
								o.buffers || (o.buffers = []);
								const r = o.buffers.indexOf(e);
								return -1 !== r
									? { index: r, byteOffset: t, length: n }
									: (o.buffers.push(e),
										{
											maxByteLength: e.maxByteLength,
											resizable: e.resizable,
											encoded: Jo(e),
											byteOffset: t,
											length: n,
										});
							},
							revive(t, n) {
								n.buffers || (n.buffers = []);
								const {
									byteOffset: o,
									length: r,
									encoded: i,
									index: a,
									maxByteLength: s,
									resizable: c,
								} = t;
								let d;
								return (
									"index" in t
										? (d = n.buffers[a])
										: ((d = Qo(i, c ? { maxByteLength: s } : void 0)),
											n.buffers.push(d)),
									new e(d, o, r)
								);
							},
						};
					})(e),
				);
			const Lr = {
					undef: {
						test: (e, t) => void 0 === e && (t.ownKeys || !("ownKeys" in t)),
						replace: () => 0,
						revive: () => new Ko(),
					},
				},
				Mr = {
					userObject: {
						test: (e) => To(e),
						replace: (e) => ({ ...e }),
						revive: (e) => e,
					},
				},
				Br = [
					{
						arrayNonindexKeys: {
							testPlainObjects: !0,
							test: (e, t) =>
								!!Array.isArray(e) &&
								(Object.keys(e).some((e) => String(Number.parseInt(e)) !== e) &&
									((t.iterateIn = "object"), (t.addLength = !0)),
								!0),
							replace: (e, t) => ((t.iterateUnsetNumeric = !0), e),
							revive(e) {
								if (Array.isArray(e)) return e;
								const t = [];
								return (
									Object.entries(e).forEach(([e, n]) => {
										t[e] = n;
									}),
									t
								);
							},
						},
					},
					{
						sparseUndefined: {
							test: (e, t) => void 0 === e && !1 === t.ownKeys,
							replace: () => 0,
							revive() {},
						},
					},
				],
				Nr = [Ir, kr, _r, xr],
				Rr =
					([Lr, Br, Pr, Nr, ir, mr, gr, Tr].concat(
						"function" == typeof Map ? Er : [],
						"function" == typeof Set ? Cr : [],
						"function" == typeof ArrayBuffer ? $o : [],
						"function" == typeof Uint8Array ? Dr : [],
						"function" == typeof DataView ? rr : [],
						"undefined" != typeof Intl ? Sr : [],
						"undefined" != typeof BigInt ? [Xo, Zo] : [],
					),
					[Mr, Lr, Br, Pr, Nr, ir, Tr, br, vr, yr, wr, nr, mr, gr].concat(
						"function" == typeof Map ? Er : [],
						"function" == typeof Set ? Cr : [],
						"function" == typeof ArrayBuffer ? $o : [],
						"function" == typeof Uint8Array ? Dr : [],
						"function" == typeof DataView ? rr : [],
						"undefined" != typeof crypto ? or : [],
						"undefined" != typeof BigInt ? [Xo, Zo] : [],
						"undefined" != typeof DOMException ? ar : [],
						"undefined" != typeof DOMRect ? pr : [],
						"undefined" != typeof DOMPoint ? dr : [],
						"undefined" != typeof DOMQuad ? ur : [],
						"undefined" != typeof DOMMatrix ? sr : [],
					));
			Rr.concat({
				checkDataCloneException: {
					test(e) {
						const t = {}.toString.call(e).slice(8, -1);
						if (
							["symbol", "function"].includes(typeof e) ||
							[
								"Arguments",
								"Module",
								"Promise",
								"WeakMap",
								"WeakSet",
								"Event",
								"MessageChannel",
							].includes(t) ||
							(e &&
								"object" == typeof e &&
								"number" == typeof e.nodeType &&
								"function" == typeof e.insertBefore)
						)
							throw new DOMException(
								"The object cannot be cloned.",
								"DataCloneError",
							);
						return !1;
					},
				},
			});
			function jr(e) {
				if (!document.body || !document.body.appendChild)
					return void document.addEventListener("DOMContentLoaded", () => {
						jr(e);
					});
				const t = document.createElement("iframe");
				((t.style.display = "none"),
					document.body.appendChild(t),
					t.contentWindow &&
						(t.contentWindow.document.open(),
						t.contentWindow.document.write(`<script>${e}<\/script>`),
						t.contentWindow.document.close()));
			}
			function Fr(e, t, n, o, r, i) {
				return Kr(
					(function (e, t) {
						return (e << t) | (e >>> (32 - t));
					})(Kr(Kr(t, e), Kr(o, i)), r),
					n,
				);
			}
			function Ur(e, t, n, o, r, i, a) {
				return Fr((t & n) | (~t & o), e, t, r, i, a);
			}
			function Vr(e, t, n, o, r, i, a) {
				return Fr((t & o) | (n & ~o), e, t, r, i, a);
			}
			function Gr(e, t, n, o, r, i, a) {
				return Fr(t ^ n ^ o, e, t, r, i, a);
			}
			function zr(e, t, n, o, r, i, a) {
				return Fr(n ^ (t | ~o), e, t, r, i, a);
			}
			function Kr(e, t) {
				const n = (65535 & e) + (65535 & t);
				return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n);
			}
			let Hr,
				qr = "";
			try {
				const e = window.location.href.split("?")[0].replace(/\/[^/]*$/, "");
				((qr = (function (e) {
					const t = (function (e) {
						for (
							var t, n = "0123456789ABCDEF", o = "", r = 0;
							r < e.length;
							r++
						)
							((t = e.charCodeAt(r)),
								(o += n.charAt((t >>> 4) & 15) + n.charAt(15 & t)));
						return o;
					})(
						(function (e) {
							for (var t = "", n = 0; n < 32 * e.length; n += 8)
								t += String.fromCharCode((e[n >> 5] >>> (n % 32)) & 255);
							return t;
						})(
							(function (e, t) {
								((e[t >> 5] |= 128 << (t % 32)),
									(e[14 + (((t + 64) >>> 9) << 4)] = t));
								for (
									var n = 1732584193,
										o = -271733879,
										r = -1732584194,
										i = 271733878,
										a = 0;
									a < e.length;
									a += 16
								) {
									const t = n,
										s = o,
										c = r,
										d = i;
									((o = zr(
										(o = zr(
											(o = zr(
												(o = zr(
													(o = Gr(
														(o = Gr(
															(o = Gr(
																(o = Gr(
																	(o = Vr(
																		(o = Vr(
																			(o = Vr(
																				(o = Vr(
																					(o = Ur(
																						(o = Ur(
																							(o = Ur(
																								(o = Ur(
																									o,
																									(r = Ur(
																										r,
																										(i = Ur(
																											i,
																											(n = Ur(
																												n,
																												o,
																												r,
																												i,
																												e[a + 0],
																												7,
																												-680876936,
																											)),
																											o,
																											r,
																											e[a + 1],
																											12,
																											-389564586,
																										)),
																										n,
																										o,
																										e[a + 2],
																										17,
																										606105819,
																									)),
																									i,
																									n,
																									e[a + 3],
																									22,
																									-1044525330,
																								)),
																								(r = Ur(
																									r,
																									(i = Ur(
																										i,
																										(n = Ur(
																											n,
																											o,
																											r,
																											i,
																											e[a + 4],
																											7,
																											-176418897,
																										)),
																										o,
																										r,
																										e[a + 5],
																										12,
																										1200080426,
																									)),
																									n,
																									o,
																									e[a + 6],
																									17,
																									-1473231341,
																								)),
																								i,
																								n,
																								e[a + 7],
																								22,
																								-45705983,
																							)),
																							(r = Ur(
																								r,
																								(i = Ur(
																									i,
																									(n = Ur(
																										n,
																										o,
																										r,
																										i,
																										e[a + 8],
																										7,
																										1770035416,
																									)),
																									o,
																									r,
																									e[a + 9],
																									12,
																									-1958414417,
																								)),
																								n,
																								o,
																								e[a + 10],
																								17,
																								-42063,
																							)),
																							i,
																							n,
																							e[a + 11],
																							22,
																							-1990404162,
																						)),
																						(r = Ur(
																							r,
																							(i = Ur(
																								i,
																								(n = Ur(
																									n,
																									o,
																									r,
																									i,
																									e[a + 12],
																									7,
																									1804603682,
																								)),
																								o,
																								r,
																								e[a + 13],
																								12,
																								-40341101,
																							)),
																							n,
																							o,
																							e[a + 14],
																							17,
																							-1502002290,
																						)),
																						i,
																						n,
																						e[a + 15],
																						22,
																						1236535329,
																					)),
																					(r = Vr(
																						r,
																						(i = Vr(
																							i,
																							(n = Vr(
																								n,
																								o,
																								r,
																								i,
																								e[a + 1],
																								5,
																								-165796510,
																							)),
																							o,
																							r,
																							e[a + 6],
																							9,
																							-1069501632,
																						)),
																						n,
																						o,
																						e[a + 11],
																						14,
																						643717713,
																					)),
																					i,
																					n,
																					e[a + 0],
																					20,
																					-373897302,
																				)),
																				(r = Vr(
																					r,
																					(i = Vr(
																						i,
																						(n = Vr(
																							n,
																							o,
																							r,
																							i,
																							e[a + 5],
																							5,
																							-701558691,
																						)),
																						o,
																						r,
																						e[a + 10],
																						9,
																						38016083,
																					)),
																					n,
																					o,
																					e[a + 15],
																					14,
																					-660478335,
																				)),
																				i,
																				n,
																				e[a + 4],
																				20,
																				-405537848,
																			)),
																			(r = Vr(
																				r,
																				(i = Vr(
																					i,
																					(n = Vr(
																						n,
																						o,
																						r,
																						i,
																						e[a + 9],
																						5,
																						568446438,
																					)),
																					o,
																					r,
																					e[a + 14],
																					9,
																					-1019803690,
																				)),
																				n,
																				o,
																				e[a + 3],
																				14,
																				-187363961,
																			)),
																			i,
																			n,
																			e[a + 8],
																			20,
																			1163531501,
																		)),
																		(r = Vr(
																			r,
																			(i = Vr(
																				i,
																				(n = Vr(
																					n,
																					o,
																					r,
																					i,
																					e[a + 13],
																					5,
																					-1444681467,
																				)),
																				o,
																				r,
																				e[a + 2],
																				9,
																				-51403784,
																			)),
																			n,
																			o,
																			e[a + 7],
																			14,
																			1735328473,
																		)),
																		i,
																		n,
																		e[a + 12],
																		20,
																		-1926607734,
																	)),
																	(r = Gr(
																		r,
																		(i = Gr(
																			i,
																			(n = Gr(
																				n,
																				o,
																				r,
																				i,
																				e[a + 5],
																				4,
																				-378558,
																			)),
																			o,
																			r,
																			e[a + 8],
																			11,
																			-2022574463,
																		)),
																		n,
																		o,
																		e[a + 11],
																		16,
																		1839030562,
																	)),
																	i,
																	n,
																	e[a + 14],
																	23,
																	-35309556,
																)),
																(r = Gr(
																	r,
																	(i = Gr(
																		i,
																		(n = Gr(
																			n,
																			o,
																			r,
																			i,
																			e[a + 1],
																			4,
																			-1530992060,
																		)),
																		o,
																		r,
																		e[a + 4],
																		11,
																		1272893353,
																	)),
																	n,
																	o,
																	e[a + 7],
																	16,
																	-155497632,
																)),
																i,
																n,
																e[a + 10],
																23,
																-1094730640,
															)),
															(r = Gr(
																r,
																(i = Gr(
																	i,
																	(n = Gr(n, o, r, i, e[a + 13], 4, 681279174)),
																	o,
																	r,
																	e[a + 0],
																	11,
																	-358537222,
																)),
																n,
																o,
																e[a + 3],
																16,
																-722521979,
															)),
															i,
															n,
															e[a + 6],
															23,
															76029189,
														)),
														(r = Gr(
															r,
															(i = Gr(
																i,
																(n = Gr(n, o, r, i, e[a + 9], 4, -640364487)),
																o,
																r,
																e[a + 12],
																11,
																-421815835,
															)),
															n,
															o,
															e[a + 15],
															16,
															530742520,
														)),
														i,
														n,
														e[a + 2],
														23,
														-995338651,
													)),
													(r = zr(
														r,
														(i = zr(
															i,
															(n = zr(n, o, r, i, e[a + 0], 6, -198630844)),
															o,
															r,
															e[a + 7],
															10,
															1126891415,
														)),
														n,
														o,
														e[a + 14],
														15,
														-1416354905,
													)),
													i,
													n,
													e[a + 5],
													21,
													-57434055,
												)),
												(r = zr(
													r,
													(i = zr(
														i,
														(n = zr(n, o, r, i, e[a + 12], 6, 1700485571)),
														o,
														r,
														e[a + 3],
														10,
														-1894986606,
													)),
													n,
													o,
													e[a + 10],
													15,
													-1051523,
												)),
												i,
												n,
												e[a + 1],
												21,
												-2054922799,
											)),
											(r = zr(
												r,
												(i = zr(
													i,
													(n = zr(n, o, r, i, e[a + 8], 6, 1873313359)),
													o,
													r,
													e[a + 15],
													10,
													-30611744,
												)),
												n,
												o,
												e[a + 6],
												15,
												-1560198380,
											)),
											i,
											n,
											e[a + 13],
											21,
											1309151649,
										)),
										(r = zr(
											r,
											(i = zr(
												i,
												(n = zr(n, o, r, i, e[a + 4], 6, -145523070)),
												o,
												r,
												e[a + 11],
												10,
												-1120210379,
											)),
											n,
											o,
											e[a + 2],
											15,
											718787259,
										)),
										i,
										n,
										e[a + 9],
										21,
										-343485551,
									)),
										(n = Kr(n, t)),
										(o = Kr(o, s)),
										(r = Kr(r, c)),
										(i = Kr(i, d)));
								}
								return Array(n, o, r, i);
							})(
								(function (e) {
									for (var t = Array(e.length >> 2), n = 0; n < t.length; n++)
										t[n] = 0;
									for (n = 0; n < 8 * e.length; n += 8)
										t[n >> 5] |= (255 & e.charCodeAt(n / 8)) << (n % 32);
									return t;
								})(e),
								8 * e.length,
							),
						),
					);
					return t.toLowerCase();
				})(e)),
					(Hr = localStorage.getItem("savegame_idbfs_hash")));
			} catch {}
			function Wr(e) {
				if (!Hr) return e;
				try {
					return e.replace(qr, Hr);
				} catch {
					return e;
				}
			}
			const Yr = 1e4,
				Jr = 2e4,
				Qr = "poki_gs_state_token",
				$r = "poki_playtime",
				Zr = [Qr, $r],
				Xr = [];
			let ei = performance.now();
			function ti(e) {
				return (
					!e ||
					"UnityCache" === e ||
					"EM_PRELOAD_CACHE" === e ||
					"emscripten_filesystem" === e
				);
			}
			async function ni() {
				if (!("databases" in indexedDB))
					return (
						console.warn(
							"%cPOKI_SAVEGAME:%c indexedDB.databases() is not supported in this browser.",
							"font-weight: bold",
							"",
						),
						[]
					);
				const e = await indexedDB.databases();
				0 === e.length &&
					(console.info(
						"%cPOKI_SAVEGAME:%c No databases found, using IDBDatabaseInfos",
						"font-weight: bold",
						"",
						Xr.map((e) => e.name),
					),
					e.push(...Xr));
				const t = [];
				e.forEach(async (e) => {
					var n, o;
					ti(e.name) ||
						t.push(
							((n = e.name || ""),
							(o = e.version),
							new Promise((e, t) => {
								if (!n)
									return void t(
										new Error("Cannot export database without a name"),
									);
								const r = indexedDB.open(n, o);
								((r.onsuccess = (o) => {
									const r = o.target.result,
										i = Array.from(r.objectStoreNames),
										a = { name: n, version: r.version, objectStores: [] };
									let s = i.length;
									if (0 === s)
										return (
											r.close(),
											void t(new Error(`Database ${n} has no object stores.`))
										);
									i.forEach((t) => {
										const o = r.transaction(t, "readonly").objectStore(t),
											i = Array.from(o.indexNames),
											c = [],
											d = {
												name: t,
												keyPath: o.keyPath,
												autoIncrement: o.autoIncrement,
												indexes: [],
												data: [],
											};
										i.forEach((e) => {
											const t = o.index(e),
												n = {
													name: e,
													keyPath: t.keyPath,
													unique: t.unique,
													multiEntry: t.multiEntry,
												};
											d.indexes.push(n);
										});
										const l = o.openCursor();
										((l.onerror = () => {
											(console.warn(
												`%cPOKI_SAVEGAME:%c error fetching data from object store ${t}`,
												"font-weight: bold",
												"",
											),
												s--,
												0 === s && (r.close(), e(a)));
										}),
											(l.onsuccess = (o) => {
												const i = o.target;
												if (!i) return;
												const l = i.result;
												if (null === l)
													return (
														(d.data = c),
														a.objectStores.push(d),
														s--,
														void (0 === s && (r.close(), e(a)))
													);
												(!(function (e, t, n) {
													return (
														"string" == typeof n &&
														!(
															"/data" !== e ||
															"FILE_DATA" !== t ||
															(!n.endsWith(".zip") &&
																!n.includes("liveupdate.arc"))
														)
													);
												})(n, t, l.primaryKey)
													? c.push({ k: Wr(l.primaryKey), v: l.value })
													: console.info(
															`%cPOKI_SAVEGAME:%c Skipping row ${l.primaryKey}`,
															"font-weight: bold",
															"",
														),
													l.continue());
											}));
									});
								}),
									(r.onerror = (e) => {
										(console.warn(
											"%cPOKI_SAVEGAME:%c error opening database",
											"font-weight: bold",
											"",
											e.target.error,
										),
											t(e.target.error));
									}));
							})),
						);
				});
				return (await Promise.allSettled(t))
					.filter((e) => "fulfilled" === e.status)
					.map((e) => e.value);
			}
			function oi() {
				console.info(
					"%cPOKI_SAVEGAME:%c setupCloudSaveExports",
					"font-weight: bold",
					"",
				);
				const e = new zo().register([Rr]);
				function t(e, t) {
					const n = { name: e, version: t };
					Xr.find((n) => n.name === e && n.version === t) || Xr.push(n);
				}
				jr(
					`(${function () {
						window.addEventListener("storage", (e) => {
							(e.key &&
								[
									"poki_gs_state_token",
									"poki_playtime",
									"savegame_idbfs_hash",
								].includes(e.key)) ||
								window?.parent?.postMessage(
									{ type: "LocalStorageChanged" },
									"*",
								);
						});
					}.toString()})();`,
				);
				const n = (function (e, t = 300, n = 1e3) {
					let o, r;
					return function (...i) {
						const a = this,
							s = () => {
								(clearTimeout(o),
									clearTimeout(r),
									(o = void 0),
									(r = void 0),
									e.apply(a, i));
							};
						(clearTimeout(o),
							(o = setTimeout(s, t)),
							r || (r = setTimeout(s, n)));
					};
				})(
					() => {
						(console.info(
							"%cPOKI_SAVEGAME:%c trigger mutate",
							"font-weight: bold",
							"",
						),
							(() => {
								const t = performance.now(),
									n = Math.ceil((t - ei) / 1e3);
								let o = 0;
								try {
									o = Number.parseInt(localStorage.getItem($r) || "0", 10);
								} catch (e) {
									W("error getting current playtime", e);
								}
								const r = o + n;
								try {
									localStorage.setItem($r, r.toString());
								} catch (e) {
									W("error setting current playtime", e);
								}
								ei = t;
								try {
									const t = {};
									for (let e = 0; e < localStorage.length; e++) {
										const n = localStorage.key(e);
										if (n && !Zr.includes(n)) {
											const e = localStorage.getItem(n);
											null !== e && (t[n] = e);
										}
									}
									ni().then((o) => {
										const i = {
											ls: JSON.stringify(t),
											idb: e.stringify(o),
											playtimeInterval: n,
											metadata: { playtime: r },
											version: 1,
										};
										window?.top?.postMessage(
											{ type: "mutateSaveGame", content: i },
											"*",
										);
									});
								} catch (e) {
									console.warn(
										"%cPOKI_SAVEGAME:%c savegame error",
										"font-weight: bold",
										"",
										e,
									);
								}
							})());
					},
					Yr,
					Jr,
				);
				window.addEventListener("message", async (e) => {
					if ("LocalStorageChanged" === e?.data?.type)
						return (
							console.info(
								"%cPOKI_SAVEGAME:%c localStorage Pulse",
								"font-weight: bold",
								"",
							),
							void n()
						);
					"pokiSetEtag" === e?.data?.type &&
						((e) => {
							const { etag: t } = e.data;
							try {
								localStorage.setItem(Qr, t);
							} catch (e) {
								W("error setting etag", e);
							}
						})(e);
				});
				const o = (e, t) => {
						ti(e)
							? console.info(`Skip IDB Pulse - DB: ${e}, action: ${t}`)
							: n();
					},
					r = window.IDBObjectStore.prototype.put;
				window.IDBObjectStore.prototype.put = function (...e) {
					t(this.transaction.db.name, this.transaction.db.version);
					const n = r.apply(this, e);
					return (o(this.transaction.db.name, "put"), n);
				};
				const i = window.IDBObjectStore.prototype.add;
				window.IDBObjectStore.prototype.add = function (...e) {
					t(this.transaction.db.name, this.transaction.db.version);
					const n = i.apply(this, e);
					return (o(this.transaction.db.name, "add"), n);
				};
				const a = window.IDBObjectStore.prototype.delete;
				window.IDBObjectStore.prototype.delete = function (...e) {
					t(this.transaction.db.name, this.transaction.db.version);
					const n = a.apply(this, e);
					return (o(this.transaction.db.name, "delete"), n);
				};
				const s = window.IDBObjectStore.prototype.clear;
				window.IDBObjectStore.prototype.clear = function (...e) {
					t(this.transaction.db.name, this.transaction.db.version);
					const n = s.apply(this, e);
					return (o(this.transaction.db.name, "clear"), n);
				};
				const c = indexedDB.open.bind(indexedDB);
				indexedDB.open = function (e, n) {
					return (e && t(e, "number" == typeof n ? n : 1), c(e, n));
				};
			}
			const ri = "none",
				ii = "requesting";
			class ai {
				runningAsInGameHoistingSDK = !0;
				#T = {};
				#C = Fn.adTiming;
				#O = new MutationObserver(this.mutationObserved.bind(this));
				#D = ri;
				#L;
				#M = !1;
				init = (e) => {
					if (this.#M) return;
					this.#M = !0;
					const { onReady: t = null } = e;
					(U.isPokiIframe && setTimeout(Ee.trackSavegames, 1e4),
						U.cloudSaveGames && oi(),
						U.kioskMode &&
							document.addEventListener("keydown", (e) => {
								"Escape" === e.key && this.postSDKMessage("keydownEscape");
							}));
					const n = () => {
						let e,
							n = 1;
						this.#T.playgroundInit = () => {
							(clearTimeout(e), t?.());
						};
						const o = () => {
							(this.postSDKMessage("adTiming", {
								adTiming: this.#C,
								specialConditions: this.#L,
							}),
								n++,
								(e = setTimeout(o, 100 * n)));
						};
						e = setTimeout(o, 100 * n);
					};
					if (U.forceAd)
						return (
							(this.#C = {
								preroll: !0,
								timeBetweenAds: 12e4,
								timePerTry: 7e3,
								startAdsAfter: 0,
							}),
							void n()
						);
					if (G.debug) return void n();
					Vn()
						.then((e) => {
							if (
								((this.#C = e?.adTiming || Fn.adTiming),
								(this.#L = e?.specialConditions || []),
								D() || L()
									? (this.#C = { startAdsAfter: 36e4, timeBetweenAds: 36e4 })
									: (this.#C = { startAdsAfter: 12e4, timeBetweenAds: 18e4 }),
								n(),
								e)
							)
								try {
									uo(e);
								} catch (e) {
									console.warn(
										"%cPOKI:%c error in maybeStartPlaytest",
										"font-weight: bold",
										"",
										e,
									);
								}
						})
						.catch(() => {
							n();
						});
				};
				forcePreroll() {
					this.postSDKMessage("forcePreroll");
				}
				startStartAdsAfterTimer() {
					this.postSDKMessage("startStartAdsAfterTimer");
				}
				isAdBlocked = () => !1;
				muteAd() {
					this.postSDKMessage("muteAd");
				}
				setVolume(e) {
					this.postSDKMessage("setVolume", { volume: e || 1 });
				}
				requestAd(t) {
					const { onStart: n, onFinish: o, position: r, customCriteria: i } = t,
						a = ye();
					if (this.#D === ri)
						((this.#D = ii),
							(this.#T[a] = {
								position: r,
								onStart: () => {
									if (n && "function" == typeof n)
										try {
											n();
										} catch (e) {
											console.error(
												"%cPOKI:%c error in onStart callback",
												"font-weight: bold",
												"",
												e,
											);
										}
								},
								onFinish: (e) => {
									if (o && "function" == typeof o)
										try {
											o({ rewardAllowed: e });
										} catch (e) {
											console.error(
												"%cPOKI:%c error in onFinish callback",
												"font-weight: bold",
												"",
												e,
											);
										}
								},
							}),
							this.postSDKMessage("requestVideoAd", {
								position: r,
								customCriteria: i,
								opportunityId: a,
							}));
					else if (o)
						try {
							r === e.ads.position.rewarded ? o({ rewardAllowed: !1 }) : o();
						} catch (e) {
							console.error(
								"%cPOKI:%c error in onFinish callback",
								"font-weight: bold",
								"",
								e,
							);
						}
				}
				displayAd(e) {
					if (U.kioskMode) return !1;
					const {
						container: t,
						size: n,
						opportunityId: o,
						onCanDestroy: r,
						onDisplayRendered: i,
					} = e;
					if (!t)
						return (
							console.error(
								"%cPOKI:%c PokiSDK.displayAd() given container does not exist",
								"font-weight: bold",
								"",
							),
							!1
						);
					const a = t.getAttribute("data-poki-ad-container-id") || ye();
					(this.cleanAdContainer(a),
						t.setAttribute("data-poki-ad-container-id", a),
						t.setAttribute("data-poki-opportunity-id", o));
					const [s, c] = n.split("x").map((e) => parseInt(e, 10)),
						d = document.createElement("div");
					((d.style.width = `${s}px`),
						(d.style.height = `${c}px`),
						(d.style.overflow = "hidden"),
						(d.style.position = "relative"),
						(d.style.pointerEvents = "none"),
						t.appendChild(d));
					const l = t.getBoundingClientRect(),
						u = { x: l?.x || 0, y: l?.y || 0, w: s || 0, h: c || 0 };
					return (
						(this.#T[o] = {
							onCanDestroy: () => {
								r && "function" == typeof r && r();
							},
							onDisplayRendered: (e) => {
								i && "function" == typeof i && i(e);
							},
						}),
						this.#O.observe(t.parentElement || document.body, {
							childList: !0,
						}),
						this.#O.observe(t, { attributes: !0, attributeFilter: ["style"] }),
						this.postSDKMessage("displayAd", {
							containerID: a,
							adUnitPath: Un(n),
							size: e.size,
							opportunityId: o,
							duringGameplay: e.duringGameplay,
							location: u,
						}),
						!0
					);
				}
				destroyAd(e) {
					if (!e)
						return void console.error(
							"%cPOKI:%c PokiSDK.destroyAd() given container does not exist",
							"font-weight: bold",
							"",
						);
					const t = e.getAttribute("data-poki-opportunity-id"),
						n = e.getAttribute("data-poki-ad-container-id");
					n &&
						(delete this.#T[t],
						this.cleanAdContainer(n),
						this.postSDKMessage("destroyAd", {
							containerID: n,
							opportunityId: t,
						}));
				}
				mutationObserved(e) {
					e.forEach((e) => {
						var t;
						("childList" === e?.type &&
							e.removedNodes?.forEach?.((e) => {
								e?.getAttribute?.("data-poki-ad-container-id") &&
									this.destroyAd(e);
							}),
							"attributes" === e?.type &&
								e?.target?.getAttribute?.("data-poki-ad-container-id") &&
								((t = e.target),
								("none" === t?.style.display ||
									parseInt(t.style.opacity, 10) < 1 ||
									"hidden" === t.style.visibility) &&
									this.destroyAd(e.target)));
					});
				}
				postSDKMessage = async (t, n = {}) => {
					V.sendMessage(
						e.message.sendCommand,
						{ event: t, data: n },
						window.top,
					);
				};
				handleMessageReceived = (t) => {
					switch (t?.data?.type) {
						case "hoist_displayAd_onDisplayRendered": {
							const e = t?.data?.data;
							if (e) {
								const { opportunityId: t, isEmpty: n } = e;
								this.#T[t]?.onDisplayRendered?.(n);
							}
							break;
						}
						case "hoist_displayAd_onCanDestroy": {
							const e = t?.data?.data;
							if (e) {
								const { opportunityId: t } = e;
								this.#T[t]?.onCanDestroy?.();
							}
							break;
						}
						case "hoist_videoAd_onStart": {
							const n = t?.data?.data;
							if (n) {
								const { opportunityId: t } = n;
								if (this.#D !== ii) return;
								if (!this.#T[t]) return;
								const { onStart: o, position: r } = this.#T[t];
								(o && o(),
									H.dispatchEvent(e.playtest.startVideo, { position: r }),
									(this.#D = "playing"));
							}
							break;
						}
						case "hoist_videoAd_onFinish": {
							const n = t?.data?.data;
							if (n) {
								const { opportunityId: t, rewardAllowed: o } = n;
								if (!this.#T[t]) return;
								const { onFinish: r, position: i } = this.#T[t];
								if (this.#D === ii) {
									if (r)
										try {
											i === e.ads.position.rewarded ? r(!!o) : r();
										} catch (e) {
											console.error(
												"%cPOKI:%c error in onFinish callback",
												"font-weight: bold",
												"",
												e,
											);
										}
									return ((this.#D = ri), void delete this.#T[t]);
								}
								if (r)
									try {
										r(o);
									} catch (e) {
										console.error(
											"%cPOKI:%c error in onFinish callback",
											"font-weight: bold",
											"",
											e,
										);
									}
								(H.dispatchEvent(e.playtest.stopVideo),
									(this.#D = ri),
									delete this.#T[t]);
							}
							break;
						}
						case "hoist_playgroundInit":
							(this.#T.playgroundInit?.(), delete this.#T.playgroundInit);
							break;
						case "hoist_displayAd_destroy": {
							const e = t?.data?.data;
							if (e) {
								const { containerID: t } = e;
								this.cleanAdContainer(t);
							}
							break;
						}
						case "hoist_refocus_game": {
							const e = new Event("focus");
							window.dispatchEvent(e);
							break;
						}
					}
				};
				cleanAdContainer = (e) => {
					const t = document.querySelector(
						`*[data-poki-ad-container-id="${e}"]`,
					);
					if (t) {
						for (; t.lastChild; ) t.removeChild(t.lastChild);
						(t.removeAttribute("data-poki-opportunity-id"),
							t.removeAttribute("data-poki-ad-container-id"));
					}
				};
				stopVideoAd() {}
				resizeVideoAd() {}
				setAdTimings(e) {}
				setSpecialConditions(e) {}
				setNrAds(e) {}
			}
			!(function (e) {
				for (const t in e) t.startsWith("__") || (window.PokiSDK[t] = e[t]);
			})(
				new (class extends jn {
					constructor() {
						(super(new ai(), !0),
							window.addEventListener(
								"message",
								this.__monetization.handleMessageReceived,
							));
					}
				})(),
			);
		})());
})();
