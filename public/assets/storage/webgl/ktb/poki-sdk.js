(() => {
	"use strict";
	const e = (e) => {
			const t = RegExp(`[?&]${e}=([^&]*)`).exec(window.location.search);
			return t && decodeURIComponent(t[1].replace(/\+/g, " "));
		},
		t = "kids" === e("tag"),
		o = !!window.adBridge,
		i = "yes" === e("hoist") || "yes" === e("gdhoist"),
		n = (parseInt(e("site_id") || "", 10) || 0) > 0,
		r = navigator.userAgent.includes("PokiCar"),
		a = t || r,
		s = navigator.userAgent.includes("PokiApp");
	const d = new (class {
		#e = [];
		enqueue(e, t, o, i) {
			const n = { fn: e, args: t || [], resolveFn: o, rejectFn: i };
			a ? o && o(!0) : this.#e.push(n);
		}
		dequeue() {
			for (; this.#e.length > 0; ) {
				const e = this.#e.shift(),
					{ fn: t, args: o } = e;
				if ("function" == typeof window.PokiSDK[t])
					if (e?.resolveFn || e?.rejectFn) {
						const i = "init" === t;
						if (
							(window.PokiSDK[t](...o)
								.catch((...t) => {
									("function" == typeof e.rejectFn && e.rejectFn(...t),
										i &&
											setTimeout(() => {
												this.dequeue();
											}, 0));
								})
								.then((...t) => {
									("function" == typeof e.resolveFn && e.resolveFn(...t),
										i &&
											setTimeout(() => {
												this.dequeue();
											}, 0));
								}),
							i)
						)
							break;
					} else window.PokiSDK[t](...o);
				else
					console.error(
						`%cPOKI:%c cannot execute ${t}`,
						"font-weight: bold",
						"",
					);
			}
		}
		init = (e = {}) =>
			new Promise((t, o) => {
				this.enqueue("init", [e], t, o);
			});
		rewardedBreak = () =>
			new Promise((e) => {
				e(!1);
			});
		commercialBreak = (e) =>
			new Promise((t, o) => {
				this.enqueue("commercialBreak", [e], t, o);
			});
		displayAd = (e, t, o, i) => {
			(i && i(!0), o && o());
		};
		withArguments =
			(e) =>
			(...t) => {
				this.enqueue(e, t);
			};
		withPromise = (e) => () =>
			new Promise((t, o) => {
				this.enqueue(e, [], t, o);
			});
		handleAutoResolvePromise = () =>
			new Promise((e) => {
				e();
			});
		throwNotLoaded = () => {
			console.debug(
				"PokiSDK is not loaded yet. Not all methods are available.",
			);
		};
		doNothing = () => {};
	})();
	if (
		((window.PokiSDK = {
			init: d.init,
			initWithVideoHB: d.init,
			commercialBreak: d.commercialBreak,
			rewardedBreak: d.rewardedBreak,
			displayAd: d.displayAd,
			destroyAd: d.doNothing,
			getLeaderboard: d.handleAutoResolvePromise,
			shareableURL: () =>
				new Promise((e, t) => {
					t();
				}),
			getURLParam: (t) => e(`gd${t}`) || e(t) || "",
			getLanguage: () => navigator.language.toLowerCase().split("-")[0],
			getIsoLanguage: () => e("iso_lang") || void 0,
			isAdBlocked: () => {},
			getUser: d.withPromise("getUser"),
			getToken: d.withPromise("getToken"),
			login: d.withPromise("login"),
			generateScreenshot: d.withPromise("generateScreenshot"),
		}),
		[
			"captureError",
			"customEvent",
			"gameInteractive",
			"gameLoadingFinished",
			"gameLoadingProgress",
			"gameLoadingStart",
			"gameplayStart",
			"gameplayStop",
			"happyTime",
			"logError",
			"muteAd",
			"roundEnd",
			"roundStart",
			"sendHighscore",
			"setDebug",
			"setDebugTouchOverlayController",
			"setLogging",
			"setPlayerAge",
			"setPlaytestCanvas",
			"enableEventTracking",
			"openExternalLink",
			"playtestSetCanvas",
			"playtestCaptureHtmlOnce",
			"playtestCaptureHtmlForce",
			"playtestCaptureHtmlOn",
			"playtestCaptureHtmlOff",
			"movePill",
			"showLeaderboard",
		].forEach((e) => {
			window.PokiSDK[e] = d.withArguments(e);
		}),
		!o && !t)
	)
		try {
			let t = localStorage.getItem("poki_events_user_id");
			t ||
				((t = crypto.randomUUID()),
				"GB" !== e("country") &&
					localStorage.setItem("poki_events_user_id", t));
			const o = crypto.randomUUID(),
				i = e("game_id"),
				r = e("game_version_id"),
				a = "1" === localStorage.getItem("poki_pbf");
			let s = 1;
			((window.PokiSDK.measure = (d, c, l) => {
				if (
					((d = `${d}`),
					(c = void 0 === c ? "" : `${c}`),
					(l = void 0 === l ? "" : `${l}`),
					(window.pokiMeasureBuildin = !0),
					"funnel" === d)
				) {
					if (c !== `${s}` || void 0 === s)
						return (
							s &&
								console.error(`PokiSDK: expected funnel ${s} got ${c} (${l})`),
							void (s = void 0)
						);
					s++;
				}
				if (
					(window.parent.postMessage(
						{
							type: "pokiMessageEvent",
							content: {
								event: "pokiTrackingMeasure",
								data: { category: d, action: c, label: l },
							},
						},
						"*",
					),
					i && r)
				) {
					const s = {
						category: d,
						action: c,
						label: l,
						p4d_game_id: i,
						p4d_version_id: r,
						time_on_page: Math.floor(performance.now()),
						user_id: t,
						user_new: !a,
						gameplay_id: o,
						experiment: e("experiment") || void 0,
					};
					n
						? window.parent.postMessage(
								{ type: "pokiMessageSendGameEvent", content: { payload: s } },
								"*",
							)
						: /* Removed poki.com fetch */ void 0;
					/* Original code:
					: fetch("https://t.poki.io/game-event", {
							method: "POST",
							headers: { "Content-Type": "text/plain" },
							body: JSON.stringify(s),
							mode: "no-cors",
							keepalive: !0,
							credentials: "omit",
						}).catch((e) => {
							console.warn(
								"%cPOKI:%c failed to measure",
								"font-weight: bold",
								"",
								e,
							);
						});
					*/
				}
			}),
				window.PokiSDK.measure("game", "loading", "start"),
				(window.pokiMeasureBuildin = !1));
		} catch (e) {
			(console.error(e), (window.PokiSDK.measure = () => {}));
		}
	if (!a) {
		const t = (() => {
				const t =
					window.pokiSDKVersion ||
					e("ab") ||
					"70ee7b5c1eccffc18065fd544e57184b0e1002f6";
				let n = `poki-sdk-core-${t}.js`;
				return (
					o && (n = `poki-sdk-playground-${t}.js`),
					i && (n = `poki-sdk-hoist-${t}.js`),
					s && o && (n = `poki-sdk-app-${t}.js`),
					`${n}`
				);
			})(),
			n = document.createElement("script");
		(n.setAttribute("src", t),
			n.setAttribute("type", "text/javascript"),
			n.setAttribute("crossOrigin", "anonymous"),
			(n.onload = () => d.dequeue()),
			document.head.appendChild(n));
	}
})();
