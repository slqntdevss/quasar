(function () {
	const o = document.createElement("link").relList;
	if (o && o.supports && o.supports("modulepreload")) return;
	for (const r of document.querySelectorAll('link[rel="modulepreload"]')) c(r);
	new MutationObserver((r) => {
		for (const i of r)
			if (i.type === "childList")
				for (const a of i.addedNodes)
					a.tagName === "LINK" && a.rel === "modulepreload" && c(a);
	}).observe(document, { childList: !0, subtree: !0 });
	function s(r) {
		const i = {};
		return (
			r.integrity && (i.integrity = r.integrity),
			r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
			r.crossOrigin === "use-credentials"
				? (i.credentials = "include")
				: r.crossOrigin === "anonymous"
					? (i.credentials = "omit")
					: (i.credentials = "same-origin"),
			i
		);
	}
	function c(r) {
		if (r.ep) return;
		r.ep = !0;
		const i = s(r);
		fetch(r.href, i);
	}
})();
(function (t) {
	const [o, s, c, r, i, a, l] = Array.from(Array(7), Symbol),
		f = "dlcomponent",
		d = {};
	function v() {
		return `${Array(4)
			.fill(0)
			.map(() => Math.floor(36 * Math.random()).toString(36))
			.join("")}`;
	}
	const z = (y) =>
			function (P, ...B) {
				let D = "";
				for (let R of P) D += R + (B.shift() || "");
				return F("dl" + v(), D, y);
			},
		V = z(!1),
		b = z(!0);
	function F(y, P, B) {
		let D = d[P];
		if (D) return D;
		d[P] = y;
		const R = document.createElement("style");
		document.head.appendChild(R);
		let x = "",
			C = "";
		for (
			P += `
`;
			;
		) {
			let [q, ...O] = P.split(`
`);
			if (
				q.trim().endsWith("{") ||
				((C +=
					q +
					`
`),
				!(P = O.join(`
`)))
			)
				break;
		}
		R.textContent = P;
		let U = !0;
		if (((U = !!window.CSSScopeRule), B && U)) {
			let q = "";
			for (const O of R.sheet.cssRules)
				O.selectorText || O.media
					? O.selectorText?.startsWith(":")
						? ((O.selectorText = `.${y}${O.selectorText}`), (q += O.cssText))
						: (x += O.cssText)
					: (q += O.cssText);
			R.textContent = `.${y} {${C}} @scope (.${y}) to (:not(.${y}).${f} *) { ${x} } ${q}`;
		} else {
			let q = "";
			B &&
				!U &&
				(q = (function (W) {
					let j = `:not(${W}).${f}`,
						ie = (re, ee) =>
							`${re} *${ee > 50 ? "" : `:not(${ie(re + " " + (ee % 2 == 0 ? W : j), ee + 1)})`}`;
					return `:not(${ie(j, 0)})`;
				})(`.${y}`));
			const O = (W) => {
				(W.selectorText &&
					(W.selectorText = W.selectorText
						.split(",")
						.map((j) =>
							(j = j.trim())[0] === "&"
								? `.${y}${j.slice(1)}${q}`
								: j[0] === ":"
									? `.${y}${j}${q}`
									: `.${y} ${j}${q}`,
						)
						.join(", ")),
					(x += W.cssText));
			};
			for (const W of R.sheet.cssRules)
				W.media && W.media.mediaText
					? ((x += `@media(${W.media.mediaText}){`),
						Array.from(W.cssRules).map(O),
						(x += "}"))
					: O(W);
			R.textContent = `.${y} {${C}}${x}`;
		}
		return y;
	}
	let H = document;
	const _ = Symbol();
	let $ = !1;
	(Object.defineProperty(window, "use", {
		get: () => (
			($ = !0),
			(y, P, ...B) => {
				if (y instanceof Array) return K(y, P, ...B);
				(I(y) || T(y), ($ = !1));
				let D = {
					get value() {
						return (function (R) {
							let x = R[c],
								C = x[r],
								U = R[o],
								q = x[s];
							for (let O of C) if (((q = q[O]), !w(q))) break;
							for (let O of U) q = O(q);
							return q;
						})(D);
					},
				};
				if (T(y)) {
					let R = [...y[o]];
					(P && R.push(P), (D[c] = y[c]), (D[o] = R));
				} else ((D[c] = y), (D[o] = P ? [P] : []));
				return D;
			}
		),
	}),
		Object.defineProperty(window, "useChange", {
			get: () => (
				($ = !0),
				(y, P) => {
					(($ = !1), (y = y instanceof Array ? y : [y]));
					for (let B of y) (I(B) || T(B), u(use(B), P));
				}
			),
		}));
	const K = (y, ...P) => {
		$ = !1;
		let B = S({});
		const D = [];
		for (const R in y)
			if ((D.push(y[R]), P[R])) {
				let x = P[R];
				if ((I(x) && (x = use(x)), T(x))) {
					const C = D.length;
					let U;
					u(use(x), (q) => {
						D[C] = String(q);
						let O = D.join("");
						(O != U && (B.string = O), (U = O));
					});
				} else D.push(String(x));
			}
		return ((B.string = D.join("")), use(B.string));
	};
	let Q = new Map();
	function S(y) {
		(w(y), (y[i] = []), (y[s] = y));
		let P = Symbol.toPrimitive;
		return new Proxy(y, {
			get(D, R, x) {
				if ($) {
					let C = Symbol(),
						U = new Proxy(
							{ [s]: D, [c]: x, [r]: [R], [P]: () => C },
							{
								get: (q, O) =>
									[s, c, r, o, P].includes(O)
										? q[O]
										: ((O = Q.get(O) || O), q[r].push(O), U),
							},
						);
					return (Q.set(C, U), U);
				}
				return Reflect.get(D, R, x);
			},
			set(D, R, x) {
				let C = Reflect.set(D, R, x);
				for (let U of D[i]) U(D, R, x);
				return (D[l] && D[l](D, R, D[R]), C);
			},
		});
	}
	let w = (y) => y instanceof Object;
	function L(y) {
		return w(y) && i in y;
	}
	function I(y) {
		return w(y) && r in y;
	}
	function T(y) {
		return w(y) && o in y;
	}
	function m(y) {
		return y[o].length != 0;
	}
	function u(y, P) {
		T(y);
		let B,
			D = y[c],
			R = y[o],
			x = [];
		function C() {
			let O = D[s];
			for (B of x) if (((O = O[B]), !w(O))) break;
			for (let W of R) O = W(O);
			P(O);
		}
		let U = (O, W) =>
			function j(ie, re, ee) {
				if (re === x[W] && O === ie && (C(), w(ee))) {
					let le = ee[i];
					le && !le.includes(j) && le.push(U(ee[s], W + 1));
				}
			};
		for (let O in D[r]) {
			let W = D[r][O];
			w(W) && W[s]
				? u(W, (j) => {
						((x[O] = j), C());
					})
				: (x[O] = W);
		}
		let q = U(D[s], 0);
		(D[s][i].push(q), q(D[s], x[0], D[s][x[0]]));
	}
	function k(y, P, B) {
		let D, R, x, C;
		u(y, (U) => {
			((x = R?.[0]),
				x && (D = x.previousSibling || (C = x.parentNode)),
				R && R.forEach((q) => q.remove()),
				(R = Z(B ? (U ? B.then : B.otherwise) : U, (q) => {
					D ? (C ? (D.prepend(q), (C = null)) : D.after(q), (D = q)) : P(q);
				})));
		});
	}
	let M = (y) => (P) => {
		let B = y[c],
			D = y[r],
			R = 0;
		for (; R < D.length - 1; R++) if (((B = B[D[R]]), !w(B))) return;
		B[D[R]] = P;
	};
	function ne(y, P, ...B) {
		if (y == _) return B;
		if (typeof y == "function") {
			let x = S(Object.create(y.prototype));
			for (let W in P) {
				let j = P[W];
				if (W.startsWith("bind:")) {
					(T(j), m(j));
					let ie = M(j[c]),
						re = W.substring(5);
					if (re == "this") ie(x);
					else {
						let ee = !1;
						(u(j, (le) => {
							ee ? (ee = !1) : ((ee = !0), (x[re] = le));
						}),
							u(use(x[re]), (le) => {
								ee ? (ee = !1) : ((ee = !0), ie(le));
							}));
					}
					delete P[W];
				} else T(j) && (u(j, (ie) => (x[W] = ie)), delete P[W]);
			}
			(Object.assign(x, P), (x.children = []));
			for (let W of B) Z(W, x.children.push.bind(x.children));
			let C = y.apply(x);
			((C.$ = x), (x.root = C));
			let U = C.classList,
				q = x.css,
				O = y.name.replace(/\$/g, "-");
			return (
				q && U.add(F(`${O}-${v()}`, q, !0)),
				x._leak || U.add(f),
				C.setAttribute("data-component", y.name),
				typeof x.mount == "function" && x.mount(),
				C
			);
		}
		let D = P?.xmlns,
			R = D ? H.createElementNS(D, y) : H.createElement(y);
		for (let x of B) Z(x, R.append.bind(R));
		if (!P) return R;
		((x, C) => {
			x in P && (C(P[x]), delete P[x]);
		})("class", (x) => {
			if (
				(typeof x == "string" || x instanceof Array || T(x),
				typeof x != "string")
			)
				if (T(x)) {
					let C = "";
					u(x, (U) => {
						for (let q of C.split(" ")) q && R.classList.remove(q);
						if (typeof U == "string") {
							for (let q of U.split(" ")) q && R.classList.add(q);
							C = U;
						}
					});
				} else
					for (let C of x)
						if (T(C)) {
							let U = null;
							u(C, (q) => {
								(typeof U == "string" && R.classList.remove(U),
									R.classList.add(q),
									(U = q));
							});
						} else R.classList.add(C);
			else R.setAttribute("class", x);
		});
		for (let x in P) {
			let C = P[x];
			if (x.startsWith("bind:")) {
				(T(C), m(C));
				let U = x.substring(5),
					q = M(C[c]);
				(U == "this"
					? q(R)
					: U == "value"
						? (u(C, (O) => (R.value = O)),
							R.addEventListener("change", () => q(R.value)))
						: U == "checked" &&
							(u(C, (O) => (R.checked = O)),
							R.addEventListener("click", () => q(R.checked))),
					delete P[x]);
			}
			if (x.startsWith("class:")) {
				let U = x.substring(6);
				(T(C)
					? u(C, (q) => {
							q ? R.classList.add(U) : R.classList.remove(U);
						})
					: C && R.classList.add(U),
					delete P[x]);
			}
			if (x == "style" && w(C) && !T(C)) {
				for (let U in C) {
					let q = L(C) ? use(C[U]) : C[U];
					T(q) ? u(q, (O) => (R.style[U] = O)) : (R.style[U] = q);
				}
				delete P[x];
			}
		}
		for (let x in P) {
			let C = P[x];
			T(C)
				? u(C, (U) => {
						he(R, x, U);
					})
				: he(R, x, C);
		}
		return (D && (R.innerHTML = R.innerHTML), R);
	}
	function Z(y, P) {
		let B, D, R;
		if (T(y)) k(y, P);
		else {
			if (!w(y) || !(a in y)) {
				if (y instanceof Node) return (P(y), [y]);
				if (y instanceof Array) {
					for (B of ((D = []), y)) D = D.concat(Z(B, P));
					return (D[0] || (D = Z("", P)), D);
				}
				return (y == null && (y = ""), (R = H.createTextNode(y)), P(R), [R]);
			}
			k(y[a], P, y);
		}
	}
	function he(y, P, B) {
		if ((!B && y.hasAttribute(P) && y.removeAttribute(P), B))
			if (P.startsWith("on:")) {
				let D = P.substring(3);
				for (let R of D.split("$"))
					y.addEventListener(R, (...x) => {
						((self.$el = y), B(...x));
					});
			} else y.setAttribute(P, B);
	}
	((t.$if = function (y, P, B) {
		return (
			(B ??= H.createTextNode("")),
			T(y) ? { [a]: y, then: P, otherwise: B } : y ? P : B
		);
	}),
		(t.$state = S),
		(t.$store = function (y, { ident: P, backing: B, autosave: D }) {
			let R, x;
			typeof B == "string"
				? B === "localstorage" &&
					((R = () => localStorage.getItem(P)),
					(x = (O, W) => {
						localStorage.setItem(O, W);
					}))
				: ({ read: R, write: x } = B);
			let C = () => {
					console.info("[dreamland.js]: saving " + P);
					let O = {},
						W = 0,
						j = (re) => {
							let ee = { stateful: L(re), values: {} },
								le = W++;
							O[le] = ee;
							for (let ce in re) {
								let ue = re[ce];
								if (!T(ue))
									switch (typeof ue) {
										case "string":
										case "number":
										case "boolean":
										case "undefined":
											ee.values[ce] = JSON.stringify(ue);
											break;
										case "object":
											if (ue instanceof Array) {
												ee.values[ce] = ue.map((ge) =>
													typeof ge == "object" ? j(ge) : JSON.stringify(ge),
												);
												break;
											}
											ue === null
												? (ee.values[ce] = "null")
												: (ue.__proto__, (ee.values[ce] = j(ue)));
									}
							}
							return le;
						};
					j(y);
					let ie = JSON.stringify(O);
					x(P, ie);
				},
				U = (O, W, j) => {
					(L(j) && (j[s][l] = U), C());
				},
				q = JSON.parse(R(P));
			if (q) {
				let O = {},
					W = (j) => {
						if (O[j]) return O[j];
						let ie = q[j],
							re = {};
						for (let le in ie.values) {
							let ce = ie.values[le];
							re[le] =
								typeof ce == "string"
									? JSON.parse(ce)
									: ce instanceof Array
										? ce.map((ue) =>
												typeof ue == "string" ? JSON.parse(ue) : W(ue),
											)
										: W(ce);
						}
						ie.stateful && D == "auto" && (re[l] = U);
						let ee = ie.stateful ? S(re) : re;
						return ((O[j] = ee), ee);
					};
				y = W(0);
			}
			switch (D) {
				case "beforeunload":
					addEventListener("beforeunload", C);
					break;
				case "manual":
					break;
				case "auto":
					y[l] = U;
			}
			return S(y);
		}),
		(t.Fragment = _),
		(t.css = V),
		(t.h = ne),
		(t.html = function (y, ...P) {
			y = [...y];
			let B = "",
				D = {};
			for (let x = 0; x < y.length; x++) {
				let C = y[x],
					U = P[x],
					q = P[x] instanceof Function && /^ *\/>/.exec(y[x + 1]);
				if (
					(/< *$/.test(C) &&
						q &&
						(y[x + 1] = y[x + 1].substr(q.index + q[0].length)),
					(B += C),
					x < P.length)
				) {
					let O,
						W = Object.values(D).findIndex((j) => j === U);
					(W !== -1 ? (O = Object.keys(D)[W]) : ((O = "h" + v()), (D[O] = U)),
						(B += O),
						q && (B += `></${O}>`));
				}
			}
			let R = new DOMParser().parseFromString(B, "text/html");
			return (
				R.body.children.length,
				(function x(C) {
					let U = C.nodeName.toLowerCase();
					if (U === "#text") return C.textContent;
					U in D && (U = D[U]);
					let q = [...C.childNodes].map(x);
					for (let W = 0; W < q.length; W++) {
						let j = q[W];
						if (typeof j == "string")
							for (const [ie, re] of Object.entries(D)) {
								if (!j) break;
								if (!j.includes(ie)) continue;
								let ee;
								(([ee, j] = j.split(ie)),
									(q = [...q.slice(0, W), ee, re, j, ...q.slice(W + 1)]),
									(W += 2));
							}
					}
					let O = {};
					if (!C.attributes) return C;
					for (const W of [...C.attributes]) {
						let j = W.nodeValue;
						(j in D && (j = D[j]), (O[W.name] = j));
					}
					return ne(U, O, q);
				})(R.body.children[0])
			);
		}),
		(t.isDLPtr = T),
		(t.isStateful = L),
		(t.scope = b));
})(window);
const gameState = $state({
		qr: null,
		ready: !1,
		loginstate: 0,
		playing: !1,
		logbuf: [],
	}),
	dotnet = (await eval('import("./_framework/dotnet.js")')).dotnet;
let exports$1;
function encryptRSA(t, o, s) {
	const c = (f, d, v) => {
			let z = 1n;
			for (f = f % v; d > 0n; )
				(d % 2n === 1n && (z = (z * f) % v), (d = d >> 1n), (f = (f * f) % v));
			return z;
		},
		i = ((f, d) => {
			const v = f.length,
				z = Math.ceil(d.toString(16).length / 2);
			if (v > z - 11) throw new Error("Message too long for RSA encryption");
			const V = z - v - 3,
				b = Array(V).fill(255);
			return BigInt(
				"0x" +
					[
						"00",
						"02",
						...b.map((F) => F.toString(16).padStart(2, "0")),
						"00",
						...Array.from(f).map((F) => F.toString(16).padStart(2, "0")),
					].join(""),
			);
		})(t, o);
	let l = c(i, s, o).toString(16);
	return (
		l.length % 2 && (l = "0" + l),
		new Uint8Array(
			Array.from(l.match(/.{2}/g) || []).map((f) => parseInt(f, 16)),
		)
	);
}
const realFetch = window.fetch;
async function preInit() {
	console.debug("initializing dotnet");
	const t = await dotnet
			.withConfig({ pthreadPoolInitialSize: 16 })
			.withEnvironmentVariable("MONO_SLEEP_ABORT_LIMIT", "99999")
			.withRuntimeOptions([
				"--jiterpreter-minimum-trace-hit-count=500",
				"--jiterpreter-trace-monitoring-period=100",
				"--jiterpreter-trace-monitoring-max-average-penalty=150",
				`--jiterpreter-wasm-bytes-limit=${64 * 1024 * 1024}`,
				`--jiterpreter-table-size=${32 * 1024}`,
				"--jiterpreter-stats-enabled",
			])
			.withResourceLoader((s, c, r, i, a) => {
				if (s === "dotnetwasm" && a === "dotnetwasm")
					return (async () => {
						let l = 0,
							f = async () => {
								let b = await realFetch(r + l);
								if ((l++, !b.body))
									throw new Error("no body in fetch response");
								return b.status === 200 ? b.body.getReader() : null;
							},
							d = await f();
						if (!d) throw new Error("failed to fetch first chunk");
						let v = d,
							z = new ReadableStream({
								async pull(b) {
									let { value: F, done: H } = await v.read();
									H || !F
										? ((d = await f()),
											d ? ((v = d), await this.pull(b)) : b.close())
										: b.enqueue(F);
								},
							});
						return new Response(z, {
							headers: new Headers({ "Content-Type": "application/wasm" }),
						});
					})();
			})
			.create(),
		o = t.getConfig();
	((exports$1 = await t.getAssemblyExports(o.mainAssemblyName)),
		(window.exports = exports$1),
		t.setModuleImports("interop.js", {
			encryptrsa: (s, c, r) => {
				let i = BigInt("0x" + s),
					a = BigInt("0x" + c),
					l = encryptRSA(r, i, a);
				return new Uint8Array(l);
			},
		}),
		t.setModuleImports("depot.js", {
			newqr: (s) => {
				gameState.qr = s;
			},
		}),
		(self.wasm = {
			Module: t.Module,
			dotnet,
			runtime: t,
			config: o,
			exports: exports$1,
		}),
		console.debug("PreInit..."),
		await t.runMain(),
		await exports$1.Program.PreInit(),
		console.debug("dotnet initialized"),
		(gameState.ready = !0));
}
async function play() {
	((gameState.playing = !0), console.debug("Init..."));
	const t = performance.now();
	await exports$1.Program.Init(screen.width, screen.height);
	const o = performance.now();
	(console.debug(`Init : ${(o - t).toFixed(2)}ms`),
		console.debug("MainLoop..."),
		await exports$1.Program.MainLoop(),
		console.debug("Cleanup..."),
		await exports$1.Program.Cleanup(),
		(gameState.ready = !1),
		(gameState.playing = !1));
}
useChange([gameState.playing], () => {
	try {
		gameState.playing ? navigator.keyboard.lock() : navigator.keyboard.unlock();
	} catch (t) {
		console.log("keyboard lock error:", t);
	}
});
document.addEventListener("keydown", (t) => {
	gameState.playing &&
		[
			"Space",
			"ArrowUp",
			"ArrowDown",
			"ArrowLeft",
			"ArrowRight",
			"Tab",
		].includes(t.code) &&
		t.preventDefault();
});
function proxyConsole(t, o) {
	const s = console[t].bind(console);
	console[t] = (...c) => {
		let r;
		try {
			r = c.join(" ");
		} catch {
			r = "<failed to render>";
		}
		(s(...c),
			(gameState.logbuf = [
				{ color: o, log: `[${new Date().toISOString()}]: ${r}` },
			]));
	};
}
proxyConsole("error", "var(--error)");
proxyConsole("warn", "var(--warning)");
proxyConsole("log", "var(--fg)");
proxyConsole("info", "var(--info)");
proxyConsole("debug", "var(--fg6)");
const LogView = function () {
		this.css = `
		height: 16rem;
		overflow: scroll;
		padding: 1em;
		background: var(--bg);

		font-family: var(--font-mono);

		::-webkit-scrollbar {
			display: none;
		}
	`;
		const t = (o, s) => {
			const c = document.createElement("div");
			return ((c.innerText = s), (c.style.color = o), c);
		};
		return (
			(this.mount = () => {
				useChange([gameState.logbuf], () => {
					if (gameState.logbuf.length > 0) {
						for (const o of gameState.logbuf)
							this.root.appendChild(t(o.color, o.log));
						this.root.scrollTop = this.root.scrollHeight;
					}
				});
			}),
			h("div", { class: "tcontainer" })
		);
	},
	Icon = function () {
		return (
			(this._leak = !0),
			(this.mount = () => {
				((this.root.innerHTML = this.icon.body),
					useChange([this.icon], () => {
						this.root.innerHTML = this.icon.body;
					}));
			}),
			h("svg", {
				width: "1em",
				height: "1em",
				viewBox: use`0 0 ${this.icon.width} ${this.icon.height}`,
				xmlns: "http://www.w3.org/2000/svg",
				class: `component-icon ${this.class}`,
			})
		);
	},
	Button = function () {
		return (
			(this._leak = !0),
			(this.css = `
		button {
			display: flex;
			align-items: center;
			justify-content: center;

			width: 100%;
			height: 100%;

			padding: 0.5rem;

			transition: background 0.25s;
			font-family: var(--font-body);
			cursor: pointer;
			font-size: 13pt;
		}

		button.icon-full svg, button.icon-left svg {
			width: 1.5rem;
			height: 1.5rem;
		}
		button.icon-full {
		}
		button.icon-left {
			gap: 0.25rem;
		}

		button.type-primary {
			background: var(--bg);
			color: var(--fg);
		}
		button.type-normal {
			background: var(--bg);
			color: var(--fg);
		}
		button.type-listitem {
			background: transparent;
			color: var(--fg);
			border-radius: 0.5rem;
		}
		button.type-listaction {
			background: var(--bg);
			color: var(--fg);
		}

		button.type-primary:not(:disabled):hover {
			background: color-mix(in srgb, var(--bg) 95%, white);
		}
		button.type-primary:not(:disabled):active {
			background: color-mix(in srgb, var(--bg) 95%, white);
		}
		button.type-normal:not(:disabled):hover {
			background: var(--surface2);
		}
		button.type-normal:not(:disabled):active {
			background: var(--surface3);
		}
		button.type-listitem:not(:disabled):hover {
			background: var(--surface1);
		}
		button.type-listitem:not(:disabled):active {
			background: var(--surface2);
		}
		button.type-listaction:not(:disabled):hover {
			background: var(--surface3);
		}
		button.type-listaction:not(:disabled):active {
			background: var(--surface4);
		}

		button:disabled {
			background: var(--surface0);
			cursor: not-allowed;
		}
	`),
			h(
				"div",
				null,
				h(
					"button",
					{
						"on:click": this["on:click"],
						class: `tcontainer icon-${this.icon} type-${this.type} ${this.class}`,
						disabled: use(this.disabled),
						title: use(this.title),
						"aria-label": this.label,
					},
					use(this.children),
				),
			)
		);
	},
	Link = function () {
		return h(
			"a",
			{ href: this.href, class: "component-link", target: "_blank" },
			this.children,
		);
	};
var commonjsGlobal =
	typeof globalThis < "u"
		? globalThis
		: typeof window < "u"
			? window
			: typeof global < "u"
				? global
				: typeof self < "u"
					? self
					: {};
function getDefaultExportFromCjs(t) {
	return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
		? t.default
		: t;
}
function getAugmentedNamespace(t) {
	if (Object.prototype.hasOwnProperty.call(t, "__esModule")) return t;
	var o = t.default;
	if (typeof o == "function") {
		var s = function c() {
			return this instanceof c
				? Reflect.construct(o, arguments, this.constructor)
				: o.apply(this, arguments);
		};
		s.prototype = o.prototype;
	} else s = {};
	return (
		Object.defineProperty(s, "__esModule", { value: !0 }),
		Object.keys(t).forEach(function (c) {
			var r = Object.getOwnPropertyDescriptor(t, c);
			Object.defineProperty(
				s,
				c,
				r.get
					? r
					: {
							enumerable: !0,
							get: function () {
								return t[c];
							},
						},
			);
		}),
		s
	);
}
var tarStream = {},
	events = { exports: {} },
	hasRequiredEvents;
function requireEvents() {
	if (hasRequiredEvents) return events.exports;
	hasRequiredEvents = 1;
	var t = typeof Reflect == "object" ? Reflect : null,
		o =
			t && typeof t.apply == "function"
				? t.apply
				: function (w, L, I) {
						return Function.prototype.apply.call(w, L, I);
					},
		s;
	t && typeof t.ownKeys == "function"
		? (s = t.ownKeys)
		: Object.getOwnPropertySymbols
			? (s = function (w) {
					return Object.getOwnPropertyNames(w).concat(
						Object.getOwnPropertySymbols(w),
					);
				})
			: (s = function (w) {
					return Object.getOwnPropertyNames(w);
				});
	function c(S) {
		console && console.warn && console.warn(S);
	}
	var r =
		Number.isNaN ||
		function (w) {
			return w !== w;
		};
	function i() {
		i.init.call(this);
	}
	((events.exports = i),
		(events.exports.once = $),
		(i.EventEmitter = i),
		(i.prototype._events = void 0),
		(i.prototype._eventsCount = 0),
		(i.prototype._maxListeners = void 0));
	var a = 10;
	function l(S) {
		if (typeof S != "function")
			throw new TypeError(
				'The "listener" argument must be of type Function. Received type ' +
					typeof S,
			);
	}
	(Object.defineProperty(i, "defaultMaxListeners", {
		enumerable: !0,
		get: function () {
			return a;
		},
		set: function (S) {
			if (typeof S != "number" || S < 0 || r(S))
				throw new RangeError(
					'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
						S +
						".",
				);
			a = S;
		},
	}),
		(i.init = function () {
			((this._events === void 0 ||
				this._events === Object.getPrototypeOf(this)._events) &&
				((this._events = Object.create(null)), (this._eventsCount = 0)),
				(this._maxListeners = this._maxListeners || void 0));
		}),
		(i.prototype.setMaxListeners = function (w) {
			if (typeof w != "number" || w < 0 || r(w))
				throw new RangeError(
					'The value of "n" is out of range. It must be a non-negative number. Received ' +
						w +
						".",
				);
			return ((this._maxListeners = w), this);
		}));
	function f(S) {
		return S._maxListeners === void 0 ? i.defaultMaxListeners : S._maxListeners;
	}
	((i.prototype.getMaxListeners = function () {
		return f(this);
	}),
		(i.prototype.emit = function (w) {
			for (var L = [], I = 1; I < arguments.length; I++) L.push(arguments[I]);
			var T = w === "error",
				m = this._events;
			if (m !== void 0) T = T && m.error === void 0;
			else if (!T) return !1;
			if (T) {
				var u;
				if ((L.length > 0 && (u = L[0]), u instanceof Error)) throw u;
				var k = new Error(
					"Unhandled error." + (u ? " (" + u.message + ")" : ""),
				);
				throw ((k.context = u), k);
			}
			var M = m[w];
			if (M === void 0) return !1;
			if (typeof M == "function") o(M, this, L);
			else
				for (var ne = M.length, Z = F(M, ne), I = 0; I < ne; ++I)
					o(Z[I], this, L);
			return !0;
		}));
	function d(S, w, L, I) {
		var T, m, u;
		if (
			(l(L),
			(m = S._events),
			m === void 0
				? ((m = S._events = Object.create(null)), (S._eventsCount = 0))
				: (m.newListener !== void 0 &&
						(S.emit("newListener", w, L.listener ? L.listener : L),
						(m = S._events)),
					(u = m[w])),
			u === void 0)
		)
			((u = m[w] = L), ++S._eventsCount);
		else if (
			(typeof u == "function"
				? (u = m[w] = I ? [L, u] : [u, L])
				: I
					? u.unshift(L)
					: u.push(L),
			(T = f(S)),
			T > 0 && u.length > T && !u.warned)
		) {
			u.warned = !0;
			var k = new Error(
				"Possible EventEmitter memory leak detected. " +
					u.length +
					" " +
					String(w) +
					" listeners added. Use emitter.setMaxListeners() to increase limit",
			);
			((k.name = "MaxListenersExceededWarning"),
				(k.emitter = S),
				(k.type = w),
				(k.count = u.length),
				c(k));
		}
		return S;
	}
	((i.prototype.addListener = function (w, L) {
		return d(this, w, L, !1);
	}),
		(i.prototype.on = i.prototype.addListener),
		(i.prototype.prependListener = function (w, L) {
			return d(this, w, L, !0);
		}));
	function v() {
		if (!this.fired)
			return (
				this.target.removeListener(this.type, this.wrapFn),
				(this.fired = !0),
				arguments.length === 0
					? this.listener.call(this.target)
					: this.listener.apply(this.target, arguments)
			);
	}
	function z(S, w, L) {
		var I = { fired: !1, wrapFn: void 0, target: S, type: w, listener: L },
			T = v.bind(I);
		return ((T.listener = L), (I.wrapFn = T), T);
	}
	((i.prototype.once = function (w, L) {
		return (l(L), this.on(w, z(this, w, L)), this);
	}),
		(i.prototype.prependOnceListener = function (w, L) {
			return (l(L), this.prependListener(w, z(this, w, L)), this);
		}),
		(i.prototype.removeListener = function (w, L) {
			var I, T, m, u, k;
			if ((l(L), (T = this._events), T === void 0)) return this;
			if (((I = T[w]), I === void 0)) return this;
			if (I === L || I.listener === L)
				--this._eventsCount === 0
					? (this._events = Object.create(null))
					: (delete T[w],
						T.removeListener &&
							this.emit("removeListener", w, I.listener || L));
			else if (typeof I != "function") {
				for (m = -1, u = I.length - 1; u >= 0; u--)
					if (I[u] === L || I[u].listener === L) {
						((k = I[u].listener), (m = u));
						break;
					}
				if (m < 0) return this;
				(m === 0 ? I.shift() : H(I, m),
					I.length === 1 && (T[w] = I[0]),
					T.removeListener !== void 0 &&
						this.emit("removeListener", w, k || L));
			}
			return this;
		}),
		(i.prototype.off = i.prototype.removeListener),
		(i.prototype.removeAllListeners = function (w) {
			var L, I, T;
			if (((I = this._events), I === void 0)) return this;
			if (I.removeListener === void 0)
				return (
					arguments.length === 0
						? ((this._events = Object.create(null)), (this._eventsCount = 0))
						: I[w] !== void 0 &&
							(--this._eventsCount === 0
								? (this._events = Object.create(null))
								: delete I[w]),
					this
				);
			if (arguments.length === 0) {
				var m = Object.keys(I),
					u;
				for (T = 0; T < m.length; ++T)
					((u = m[T]), u !== "removeListener" && this.removeAllListeners(u));
				return (
					this.removeAllListeners("removeListener"),
					(this._events = Object.create(null)),
					(this._eventsCount = 0),
					this
				);
			}
			if (((L = I[w]), typeof L == "function")) this.removeListener(w, L);
			else if (L !== void 0)
				for (T = L.length - 1; T >= 0; T--) this.removeListener(w, L[T]);
			return this;
		}));
	function V(S, w, L) {
		var I = S._events;
		if (I === void 0) return [];
		var T = I[w];
		return T === void 0
			? []
			: typeof T == "function"
				? L
					? [T.listener || T]
					: [T]
				: L
					? _(T)
					: F(T, T.length);
	}
	((i.prototype.listeners = function (w) {
		return V(this, w, !0);
	}),
		(i.prototype.rawListeners = function (w) {
			return V(this, w, !1);
		}),
		(i.listenerCount = function (S, w) {
			return typeof S.listenerCount == "function"
				? S.listenerCount(w)
				: b.call(S, w);
		}),
		(i.prototype.listenerCount = b));
	function b(S) {
		var w = this._events;
		if (w !== void 0) {
			var L = w[S];
			if (typeof L == "function") return 1;
			if (L !== void 0) return L.length;
		}
		return 0;
	}
	i.prototype.eventNames = function () {
		return this._eventsCount > 0 ? s(this._events) : [];
	};
	function F(S, w) {
		for (var L = new Array(w), I = 0; I < w; ++I) L[I] = S[I];
		return L;
	}
	function H(S, w) {
		for (; w + 1 < S.length; w++) S[w] = S[w + 1];
		S.pop();
	}
	function _(S) {
		for (var w = new Array(S.length), L = 0; L < w.length; ++L)
			w[L] = S[L].listener || S[L];
		return w;
	}
	function $(S, w) {
		return new Promise(function (L, I) {
			function T(u) {
				(S.removeListener(w, m), I(u));
			}
			function m() {
				(typeof S.removeListener == "function" && S.removeListener("error", T),
					L([].slice.call(arguments)));
			}
			(Q(S, w, m, { once: !0 }), w !== "error" && K(S, T, { once: !0 }));
		});
	}
	function K(S, w, L) {
		typeof S.on == "function" && Q(S, "error", w, L);
	}
	function Q(S, w, L, I) {
		if (typeof S.on == "function") I.once ? S.once(w, L) : S.on(w, L);
		else if (typeof S.addEventListener == "function")
			S.addEventListener(w, function T(m) {
				(I.once && S.removeEventListener(w, T), L(m));
			});
		else
			throw new TypeError(
				'The "emitter" argument must be of type EventEmitter. Received type ' +
					typeof S,
			);
	}
	return events.exports;
}
var _default, hasRequired_default;
function require_default() {
	return (
		hasRequired_default ||
			((hasRequired_default = 1), (_default = requireEvents())),
		_default
	);
}
var fixedSize, hasRequiredFixedSize;
function requireFixedSize() {
	return (
		hasRequiredFixedSize ||
			((hasRequiredFixedSize = 1),
			(fixedSize = class {
				constructor(o) {
					if (!(o > 0) || ((o - 1) & o) !== 0)
						throw new Error(
							"Max size for a FixedFIFO should be a power of two",
						);
					((this.buffer = new Array(o)),
						(this.mask = o - 1),
						(this.top = 0),
						(this.btm = 0),
						(this.next = null));
				}
				clear() {
					((this.top = this.btm = 0),
						(this.next = null),
						this.buffer.fill(void 0));
				}
				push(o) {
					return this.buffer[this.top] !== void 0
						? !1
						: ((this.buffer[this.top] = o),
							(this.top = (this.top + 1) & this.mask),
							!0);
				}
				shift() {
					const o = this.buffer[this.btm];
					if (o !== void 0)
						return (
							(this.buffer[this.btm] = void 0),
							(this.btm = (this.btm + 1) & this.mask),
							o
						);
				}
				peek() {
					return this.buffer[this.btm];
				}
				isEmpty() {
					return this.buffer[this.btm] === void 0;
				}
			})),
		fixedSize
	);
}
var fastFifo, hasRequiredFastFifo;
function requireFastFifo() {
	if (hasRequiredFastFifo) return fastFifo;
	hasRequiredFastFifo = 1;
	const t = requireFixedSize();
	return (
		(fastFifo = class {
			constructor(s) {
				((this.hwm = s || 16),
					(this.head = new t(this.hwm)),
					(this.tail = this.head),
					(this.length = 0));
			}
			clear() {
				((this.head = this.tail), this.head.clear(), (this.length = 0));
			}
			push(s) {
				if ((this.length++, !this.head.push(s))) {
					const c = this.head;
					((this.head = c.next = new t(2 * this.head.buffer.length)),
						this.head.push(s));
				}
			}
			shift() {
				this.length !== 0 && this.length--;
				const s = this.tail.shift();
				if (s === void 0 && this.tail.next) {
					const c = this.tail.next;
					return ((this.tail.next = null), (this.tail = c), this.tail.shift());
				}
				return s;
			}
			peek() {
				const s = this.tail.peek();
				return s === void 0 && this.tail.next ? this.tail.next.peek() : s;
			}
			isEmpty() {
				return this.length === 0;
			}
		}),
		fastFifo
	);
}
var browser = { exports: {} },
	ascii,
	hasRequiredAscii;
function requireAscii() {
	if (hasRequiredAscii) return ascii;
	hasRequiredAscii = 1;
	function t(c) {
		return c.length;
	}
	function o(c) {
		const r = c.byteLength;
		let i = "";
		for (let a = 0; a < r; a++) i += String.fromCharCode(c[a] & 127);
		return i;
	}
	function s(c, r) {
		const i = c.byteLength;
		for (let a = 0; a < i; a++) c[a] = r.charCodeAt(a);
		return i;
	}
	return ((ascii = { byteLength: t, toString: o, write: s }), ascii);
}
var base64, hasRequiredBase64;
function requireBase64() {
	if (hasRequiredBase64) return base64;
	hasRequiredBase64 = 1;
	const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
		o = new Uint8Array(256);
	for (let i = 0; i < t.length; i++) o[t.charCodeAt(i)] = i;
	((o[45] = 62), (o[95] = 63));
	function s(i) {
		let a = i.length;
		return (
			i.charCodeAt(a - 1) === 61 && a--,
			a > 1 && i.charCodeAt(a - 1) === 61 && a--,
			(a * 3) >>> 2
		);
	}
	function c(i) {
		const a = i.byteLength;
		let l = "";
		for (let f = 0; f < a; f += 3)
			l +=
				t[i[f] >> 2] +
				t[((i[f] & 3) << 4) | (i[f + 1] >> 4)] +
				t[((i[f + 1] & 15) << 2) | (i[f + 2] >> 6)] +
				t[i[f + 2] & 63];
		return (
			a % 3 === 2
				? (l = l.substring(0, l.length - 1) + "=")
				: a % 3 === 1 && (l = l.substring(0, l.length - 2) + "=="),
			l
		);
	}
	function r(i, a) {
		const l = i.byteLength;
		for (let f = 0, d = 0; d < l; f += 4) {
			const v = o[a.charCodeAt(f)],
				z = o[a.charCodeAt(f + 1)],
				V = o[a.charCodeAt(f + 2)],
				b = o[a.charCodeAt(f + 3)];
			((i[d++] = (v << 2) | (z >> 4)),
				(i[d++] = ((z & 15) << 4) | (V >> 2)),
				(i[d++] = ((V & 3) << 6) | (b & 63)));
		}
		return l;
	}
	return ((base64 = { byteLength: s, toString: c, write: r }), base64);
}
var hex, hasRequiredHex;
function requireHex() {
	if (hasRequiredHex) return hex;
	hasRequiredHex = 1;
	function t(r) {
		return r.length >>> 1;
	}
	function o(r) {
		const i = r.byteLength;
		r = new DataView(r.buffer, r.byteOffset, i);
		let a = "",
			l = 0;
		for (let f = i - (i % 4); l < f; l += 4)
			a += r.getUint32(l).toString(16).padStart(8, "0");
		for (; l < i; l++) a += r.getUint8(l).toString(16).padStart(2, "0");
		return a;
	}
	function s(r, i) {
		const a = r.byteLength;
		for (let l = 0; l < a; l++) {
			const f = c(i.charCodeAt(l * 2)),
				d = c(i.charCodeAt(l * 2 + 1));
			if (f === void 0 || d === void 0) return r.subarray(0, l);
			r[l] = (f << 4) | d;
		}
		return a;
	}
	hex = { byteLength: t, toString: o, write: s };
	function c(r) {
		if (r >= 48 && r <= 57) return r - 48;
		if (r >= 65 && r <= 70) return r - 65 + 10;
		if (r >= 97 && r <= 102) return r - 97 + 10;
	}
	return hex;
}
var latin1, hasRequiredLatin1;
function requireLatin1() {
	if (hasRequiredLatin1) return latin1;
	hasRequiredLatin1 = 1;
	function t(c) {
		return c.length;
	}
	function o(c) {
		const r = c.byteLength;
		let i = "";
		for (let a = 0; a < r; a++) i += String.fromCharCode(c[a]);
		return i;
	}
	function s(c, r) {
		const i = c.byteLength;
		for (let a = 0; a < i; a++) c[a] = r.charCodeAt(a);
		return i;
	}
	return ((latin1 = { byteLength: t, toString: o, write: s }), latin1);
}
var utf8, hasRequiredUtf8;
function requireUtf8() {
	if (hasRequiredUtf8) return utf8;
	hasRequiredUtf8 = 1;
	function t(c) {
		let r = 0;
		for (let i = 0, a = c.length; i < a; i++) {
			const l = c.charCodeAt(i);
			if (l >= 55296 && l <= 56319 && i + 1 < a) {
				const f = c.charCodeAt(i + 1);
				if (f >= 56320 && f <= 57343) {
					((r += 4), i++);
					continue;
				}
			}
			l <= 127 ? (r += 1) : l <= 2047 ? (r += 2) : (r += 3);
		}
		return r;
	}
	let o;
	if (typeof TextDecoder < "u") {
		const c = new TextDecoder();
		o = function (i) {
			return c.decode(i);
		};
	} else
		o = function (r) {
			const i = r.byteLength;
			let a = "",
				l = 0;
			for (; l < i; ) {
				let f = r[l];
				if (f <= 127) {
					((a += String.fromCharCode(f)), l++);
					continue;
				}
				let d = 0,
					v = 0;
				if (
					(f <= 223
						? ((d = 1), (v = f & 31))
						: f <= 239
							? ((d = 2), (v = f & 15))
							: f <= 244 && ((d = 3), (v = f & 7)),
					i - l - d > 0)
				) {
					let z = 0;
					for (; z < d; )
						((f = r[l + z + 1]), (v = (v << 6) | (f & 63)), (z += 1));
				} else ((v = 65533), (d = i - l));
				((a += String.fromCodePoint(v)), (l += d + 1));
			}
			return a;
		};
	let s;
	if (typeof TextEncoder < "u") {
		const c = new TextEncoder();
		s = function (i, a) {
			return c.encodeInto(a, i).written;
		};
	} else
		s = function (r, i) {
			const a = r.byteLength;
			let l = 0,
				f = 0;
			for (; l < i.length; ) {
				const d = i.codePointAt(l);
				if (d <= 127) {
					((r[f++] = d), l++);
					continue;
				}
				let v = 0,
					z = 0;
				for (
					d <= 2047
						? ((v = 6), (z = 192))
						: d <= 65535
							? ((v = 12), (z = 224))
							: d <= 2097151 && ((v = 18), (z = 240)),
						r[f++] = z | (d >> v),
						v -= 6;
					v >= 0;
				)
					((r[f++] = 128 | ((d >> v) & 63)), (v -= 6));
				l += d >= 65536 ? 2 : 1;
			}
			return a;
		};
	return ((utf8 = { byteLength: t, toString: o, write: s }), utf8);
}
var utf16le, hasRequiredUtf16le;
function requireUtf16le() {
	if (hasRequiredUtf16le) return utf16le;
	hasRequiredUtf16le = 1;
	function t(c) {
		return c.length * 2;
	}
	function o(c) {
		const r = c.byteLength;
		let i = "";
		for (let a = 0; a < r - 1; a += 2)
			i += String.fromCharCode(c[a] + c[a + 1] * 256);
		return i;
	}
	function s(c, r) {
		const i = c.byteLength;
		let a = i;
		for (let l = 0; l < r.length && !((a -= 2) < 0); ++l) {
			const f = r.charCodeAt(l),
				d = f >> 8,
				v = f % 256;
			((c[l * 2] = v), (c[l * 2 + 1] = d));
		}
		return i;
	}
	return ((utf16le = { byteLength: t, toString: o, write: s }), utf16le);
}
var hasRequiredBrowser;
function requireBrowser() {
	return (
		hasRequiredBrowser ||
			((hasRequiredBrowser = 1),
			(function (t, o) {
				const s = requireAscii(),
					c = requireBase64(),
					r = requireHex(),
					i = requireLatin1(),
					a = requireUtf8(),
					l = requireUtf16le(),
					f = new Uint8Array(Uint16Array.of(255).buffer)[0] === 255;
				function d(n) {
					switch (n) {
						case "ascii":
							return s;
						case "base64":
							return c;
						case "hex":
							return r;
						case "binary":
						case "latin1":
							return i;
						case "utf8":
						case "utf-8":
						case void 0:
						case null:
							return a;
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return l;
						default:
							throw new Error(`Unknown encoding '${n}'`);
					}
				}
				function v(n) {
					return n instanceof Uint8Array;
				}
				function z(n) {
					try {
						return (d(n), !0);
					} catch {
						return !1;
					}
				}
				function V(n, p, g) {
					const N = new Uint8Array(n);
					return (p !== void 0 && o.fill(N, p, 0, N.byteLength, g), N);
				}
				function b(n) {
					return new Uint8Array(n);
				}
				function F(n) {
					return new Uint8Array(n);
				}
				function H(n, p) {
					return d(p).byteLength(n);
				}
				function _(n, p) {
					if (n === p) return 0;
					const g = Math.min(n.byteLength, p.byteLength);
					((n = new DataView(n.buffer, n.byteOffset, n.byteLength)),
						(p = new DataView(p.buffer, p.byteOffset, p.byteLength)));
					let N = 0;
					for (let Y = g - (g % 4); N < Y; N += 4) {
						const X = n.getUint32(N, f),
							se = p.getUint32(N, f);
						if (X !== se) break;
					}
					for (; N < g; N++) {
						const Y = n.getUint8(N),
							X = p.getUint8(N);
						if (Y < X) return -1;
						if (Y > X) return 1;
					}
					return n.byteLength > p.byteLength
						? 1
						: n.byteLength < p.byteLength
							? -1
							: 0;
				}
				function $(n, p) {
					p === void 0 && (p = n.reduce((Y, X) => Y + X.byteLength, 0));
					const g = new Uint8Array(p);
					let N = 0;
					for (const Y of n) {
						if (N + Y.byteLength > g.byteLength)
							return (g.set(Y.subarray(0, g.byteLength - N), N), g);
						(g.set(Y, N), (N += Y.byteLength));
					}
					return g;
				}
				function K(n, p, g = 0, N = 0, Y = n.byteLength) {
					if ((g < 0 && (g = 0), g >= p.byteLength)) return 0;
					const X = p.byteLength - g;
					if ((N < 0 && (N = 0), N >= n.byteLength || Y <= N)) return 0;
					(Y > n.byteLength && (Y = n.byteLength), Y - N > X && (Y = N + X));
					const se = Y - N;
					return (
						n === p
							? p.copyWithin(g, N, Y)
							: ((N !== 0 || Y !== n.byteLength) && (n = n.subarray(N, Y)),
								p.set(n, g)),
						se
					);
				}
				function Q(n, p) {
					return n === p
						? !0
						: n.byteLength !== p.byteLength
							? !1
							: _(n, p) === 0;
				}
				function S(n, p, g = 0, N = n.byteLength, Y = "utf8") {
					if (
						(typeof p == "string"
							? typeof g == "string"
								? ((Y = g), (g = 0), (N = n.byteLength))
								: typeof N == "string" && ((Y = N), (N = n.byteLength))
							: typeof p == "number"
								? (p = p & 255)
								: typeof p == "boolean" && (p = +p),
						g < 0 && (g = 0),
						g >= n.byteLength || N <= g)
					)
						return n;
					if ((N > n.byteLength && (N = n.byteLength), typeof p == "number"))
						return n.fill(p, g, N);
					typeof p == "string" && (p = o.from(p, Y));
					const X = p.byteLength;
					for (let se = 0, me = N - g; se < me; ++se) n[se + g] = p[se % X];
					return n;
				}
				function w(n, p, g) {
					return typeof n == "string"
						? L(n, p)
						: Array.isArray(n)
							? I(n)
							: ArrayBuffer.isView(n)
								? T(n)
								: m(n, p, g);
				}
				function L(n, p) {
					const g = d(p),
						N = new Uint8Array(g.byteLength(n));
					return (g.write(N, n), N);
				}
				function I(n) {
					const p = new Uint8Array(n.length);
					return (p.set(n), p);
				}
				function T(n) {
					const p = new Uint8Array(n.byteLength);
					return (p.set(n), p);
				}
				function m(n, p, g) {
					return new Uint8Array(n, p, g);
				}
				function u(n, p, g, N) {
					return k(n, p, g, N) !== -1;
				}
				function k(n, p, g, N) {
					return ne(n, p, g, N, !0);
				}
				function M(n, p, g, N) {
					return ne(n, p, g, N, !1);
				}
				function ne(n, p, g, N, Y) {
					if (n.byteLength === 0) return -1;
					if (
						(typeof g == "string"
							? ((N = g), (g = 0))
							: g === void 0
								? (g = Y ? 0 : n.length - 1)
								: g < 0 && (g += n.byteLength),
						g >= n.byteLength)
					) {
						if (Y) return -1;
						g = n.byteLength - 1;
					} else if (g < 0)
						if (Y) g = 0;
						else return -1;
					if (typeof p == "string") p = w(p, N);
					else if (typeof p == "number")
						return ((p = p & 255), Y ? n.indexOf(p, g) : n.lastIndexOf(p, g));
					if (p.byteLength === 0) return -1;
					if (Y) {
						let X = -1;
						for (let se = g; se < n.byteLength; se++)
							if (n[se] === p[X === -1 ? 0 : se - X]) {
								if ((X === -1 && (X = se), se - X + 1 === p.byteLength))
									return X;
							} else (X !== -1 && (se -= se - X), (X = -1));
					} else {
						g + p.byteLength > n.byteLength &&
							(g = n.byteLength - p.byteLength);
						for (let X = g; X >= 0; X--) {
							let se = !0;
							for (let me = 0; me < p.byteLength; me++)
								if (n[X + me] !== p[me]) {
									se = !1;
									break;
								}
							if (se) return X;
						}
					}
					return -1;
				}
				function Z(n, p, g) {
					const N = n[p];
					((n[p] = n[g]), (n[g] = N));
				}
				function he(n) {
					const p = n.byteLength;
					if (p % 2 !== 0)
						throw new RangeError("Buffer size must be a multiple of 16-bits");
					for (let g = 0; g < p; g += 2) Z(n, g, g + 1);
					return n;
				}
				function y(n) {
					const p = n.byteLength;
					if (p % 4 !== 0)
						throw new RangeError("Buffer size must be a multiple of 32-bits");
					for (let g = 0; g < p; g += 4) (Z(n, g, g + 3), Z(n, g + 1, g + 2));
					return n;
				}
				function P(n) {
					const p = n.byteLength;
					if (p % 8 !== 0)
						throw new RangeError("Buffer size must be a multiple of 64-bits");
					for (let g = 0; g < p; g += 8)
						(Z(n, g, g + 7),
							Z(n, g + 1, g + 6),
							Z(n, g + 2, g + 5),
							Z(n, g + 3, g + 4));
					return n;
				}
				function B(n) {
					return n;
				}
				function D(n, p = "utf8", g = 0, N = n.byteLength) {
					return arguments.length === 1
						? a.toString(n)
						: arguments.length === 2
							? d(p).toString(n)
							: (g < 0 && (g = 0),
								g >= n.byteLength || N <= g
									? ""
									: (N > n.byteLength && (N = n.byteLength),
										(g !== 0 || N !== n.byteLength) && (n = n.subarray(g, N)),
										d(p).toString(n)));
				}
				function R(n, p, g, N, Y) {
					if (arguments.length === 2) return a.write(n, p);
					(typeof g == "string"
						? ((Y = g), (g = 0), (N = n.byteLength))
						: typeof N == "string" && ((Y = N), (N = n.byteLength - g)),
						(N = Math.min(N, o.byteLength(p, Y))));
					let X = g;
					if ((X < 0 && (X = 0), X >= n.byteLength)) return 0;
					let se = g + N;
					return se <= X
						? 0
						: (se > n.byteLength && (se = n.byteLength),
							(X !== 0 || se !== n.byteLength) && (n = n.subarray(X, se)),
							d(Y).write(n, p));
				}
				function x(n, p = 0) {
					return new DataView(n.buffer, n.byteOffset, n.byteLength).getFloat64(
						p,
						!1,
					);
				}
				function C(n, p = 0) {
					return new DataView(n.buffer, n.byteOffset, n.byteLength).getFloat64(
						p,
						!0,
					);
				}
				function U(n, p = 0) {
					return new DataView(n.buffer, n.byteOffset, n.byteLength).getFloat32(
						p,
						!1,
					);
				}
				function q(n, p = 0) {
					return new DataView(n.buffer, n.byteOffset, n.byteLength).getFloat32(
						p,
						!0,
					);
				}
				function O(n, p = 0) {
					return new DataView(n.buffer, n.byteOffset, n.byteLength).getInt32(
						p,
						!1,
					);
				}
				function W(n, p = 0) {
					return new DataView(n.buffer, n.byteOffset, n.byteLength).getInt32(
						p,
						!0,
					);
				}
				function j(n, p = 0) {
					return new DataView(n.buffer, n.byteOffset, n.byteLength).getUint32(
						p,
						!1,
					);
				}
				function ie(n, p = 0) {
					return new DataView(n.buffer, n.byteOffset, n.byteLength).getUint32(
						p,
						!0,
					);
				}
				function re(n, p, g = 0) {
					return (
						new DataView(n.buffer, n.byteOffset, n.byteLength).setFloat64(
							g,
							p,
							!1,
						),
						g + 8
					);
				}
				function ee(n, p, g = 0) {
					return (
						new DataView(n.buffer, n.byteOffset, n.byteLength).setFloat64(
							g,
							p,
							!0,
						),
						g + 8
					);
				}
				function le(n, p, g = 0) {
					return (
						new DataView(n.buffer, n.byteOffset, n.byteLength).setFloat32(
							g,
							p,
							!1,
						),
						g + 4
					);
				}
				function ce(n, p, g = 0) {
					return (
						new DataView(n.buffer, n.byteOffset, n.byteLength).setFloat32(
							g,
							p,
							!0,
						),
						g + 4
					);
				}
				function ue(n, p, g = 0) {
					return (
						new DataView(n.buffer, n.byteOffset, n.byteLength).setInt32(
							g,
							p,
							!1,
						),
						g + 4
					);
				}
				function ge(n, p, g = 0) {
					return (
						new DataView(n.buffer, n.byteOffset, n.byteLength).setInt32(
							g,
							p,
							!0,
						),
						g + 4
					);
				}
				function _e(n, p, g = 0) {
					return (
						new DataView(n.buffer, n.byteOffset, n.byteLength).setUint32(
							g,
							p,
							!1,
						),
						g + 4
					);
				}
				function we(n, p, g = 0) {
					return (
						new DataView(n.buffer, n.byteOffset, n.byteLength).setUint32(
							g,
							p,
							!0,
						),
						g + 4
					);
				}
				t.exports = o = {
					isBuffer: v,
					isEncoding: z,
					alloc: V,
					allocUnsafe: b,
					allocUnsafeSlow: F,
					byteLength: H,
					compare: _,
					concat: $,
					copy: K,
					equals: Q,
					fill: S,
					from: w,
					includes: u,
					indexOf: k,
					lastIndexOf: M,
					swap16: he,
					swap32: y,
					swap64: P,
					toBuffer: B,
					toString: D,
					write: R,
					readDoubleBE: x,
					readDoubleLE: C,
					readFloatBE: U,
					readFloatLE: q,
					readInt32BE: O,
					readInt32LE: W,
					readUInt32BE: j,
					readUInt32LE: ie,
					writeDoubleBE: re,
					writeDoubleLE: ee,
					writeFloatBE: le,
					writeFloatLE: ce,
					writeInt32BE: ue,
					writeInt32LE: ge,
					writeUInt32BE: _e,
					writeUInt32LE: we,
				};
			})(browser, browser.exports)),
		browser.exports
	);
}
var passThroughDecoder, hasRequiredPassThroughDecoder;
function requirePassThroughDecoder() {
	if (hasRequiredPassThroughDecoder) return passThroughDecoder;
	hasRequiredPassThroughDecoder = 1;
	const t = requireBrowser();
	return (
		(passThroughDecoder = class {
			constructor(s) {
				this.encoding = s;
			}
			get remaining() {
				return 0;
			}
			decode(s) {
				return t.toString(s, this.encoding);
			}
			flush() {
				return "";
			}
		}),
		passThroughDecoder
	);
}
var utf8Decoder, hasRequiredUtf8Decoder;
function requireUtf8Decoder() {
	if (hasRequiredUtf8Decoder) return utf8Decoder;
	hasRequiredUtf8Decoder = 1;
	const t = requireBrowser();
	utf8Decoder = class {
		constructor() {
			this._reset();
		}
		get remaining() {
			return this.bytesSeen;
		}
		decode(r) {
			if (r.byteLength === 0) return "";
			if (this.bytesNeeded === 0 && o(r, 0) === 0)
				return ((this.bytesSeen = s(r)), t.toString(r, "utf8"));
			let i = "",
				a = 0;
			if (this.bytesNeeded > 0) {
				for (; a < r.byteLength; ) {
					const d = r[a];
					if (d < this.lowerBoundary || d > this.upperBoundary) {
						((i += "�"), this._reset());
						break;
					}
					if (
						((this.lowerBoundary = 128),
						(this.upperBoundary = 191),
						(this.codePoint = (this.codePoint << 6) | (d & 63)),
						this.bytesSeen++,
						a++,
						this.bytesSeen === this.bytesNeeded)
					) {
						((i += String.fromCodePoint(this.codePoint)), this._reset());
						break;
					}
				}
				if (this.bytesNeeded > 0) return i;
			}
			const l = o(r, a),
				f = r.byteLength - l;
			f > a && (i += t.toString(r, "utf8", a, f));
			for (let d = f; d < r.byteLength; d++) {
				const v = r[d];
				if (this.bytesNeeded === 0) {
					v <= 127
						? ((this.bytesSeen = 0), (i += String.fromCharCode(v)))
						: v >= 194 && v <= 223
							? ((this.bytesNeeded = 2),
								(this.bytesSeen = 1),
								(this.codePoint = v & 31))
							: v >= 224 && v <= 239
								? (v === 224
										? (this.lowerBoundary = 160)
										: v === 237 && (this.upperBoundary = 159),
									(this.bytesNeeded = 3),
									(this.bytesSeen = 1),
									(this.codePoint = v & 15))
								: v >= 240 && v <= 244
									? (v === 240
											? (this.lowerBoundary = 144)
											: v === 244 && (this.upperBoundary = 143),
										(this.bytesNeeded = 4),
										(this.bytesSeen = 1),
										(this.codePoint = v & 7))
									: ((this.bytesSeen = 1), (i += "�"));
					continue;
				}
				if (v < this.lowerBoundary || v > this.upperBoundary) {
					((i += "�"), d--, this._reset());
					continue;
				}
				((this.lowerBoundary = 128),
					(this.upperBoundary = 191),
					(this.codePoint = (this.codePoint << 6) | (v & 63)),
					this.bytesSeen++,
					this.bytesSeen === this.bytesNeeded &&
						((i += String.fromCodePoint(this.codePoint)), this._reset()));
			}
			return i;
		}
		flush() {
			const r = this.bytesNeeded > 0 ? "�" : "";
			return (this._reset(), r);
		}
		_reset() {
			((this.codePoint = 0),
				(this.bytesNeeded = 0),
				(this.bytesSeen = 0),
				(this.lowerBoundary = 128),
				(this.upperBoundary = 191));
		}
	};
	function o(c, r) {
		const i = c.byteLength;
		if (i <= r) return 0;
		const a = Math.max(r, i - 4);
		let l = i - 1;
		for (; l > a && (c[l] & 192) === 128; ) l--;
		if (l < r) return 0;
		const f = c[l];
		let d;
		if (f <= 127) return 0;
		if (f >= 194 && f <= 223) d = 2;
		else if (f >= 224 && f <= 239) d = 3;
		else if (f >= 240 && f <= 244) d = 4;
		else return 0;
		const v = i - l;
		return v < d ? v : 0;
	}
	function s(c) {
		const r = c.byteLength;
		if (r === 0) return 0;
		const i = c[r - 1];
		if (i <= 127) return 0;
		if ((i & 192) !== 128) return 1;
		const a = Math.max(0, r - 4);
		let l = r - 2;
		for (; l >= a && (c[l] & 192) === 128; ) l--;
		if (l < 0) return 1;
		const f = c[l];
		let d;
		if (f >= 194 && f <= 223) d = 2;
		else if (f >= 224 && f <= 239) d = 3;
		else if (f >= 240 && f <= 244) d = 4;
		else return 1;
		if (r - l !== d) return 1;
		if (d >= 3) {
			const v = c[l + 1];
			if (
				(f === 224 && v < 160) ||
				(f === 237 && v > 159) ||
				(f === 240 && v < 144) ||
				(f === 244 && v > 143)
			)
				return 1;
		}
		return 0;
	}
	return utf8Decoder;
}
var textDecoder, hasRequiredTextDecoder;
function requireTextDecoder() {
	if (hasRequiredTextDecoder) return textDecoder;
	hasRequiredTextDecoder = 1;
	const t = requirePassThroughDecoder(),
		o = requireUtf8Decoder();
	textDecoder = class {
		constructor(r = "utf8") {
			switch (((this.encoding = s(r)), this.encoding)) {
				case "utf8":
					this.decoder = new o();
					break;
				case "utf16le":
				case "base64":
					throw new Error("Unsupported encoding: " + this.encoding);
				default:
					this.decoder = new t(this.encoding);
			}
		}
		get remaining() {
			return this.decoder.remaining;
		}
		push(r) {
			return typeof r == "string" ? r : this.decoder.decode(r);
		}
		write(r) {
			return this.push(r);
		}
		end(r) {
			let i = "";
			return (r && (i = this.push(r)), (i += this.decoder.flush()), i);
		}
	};
	function s(c) {
		switch (((c = c.toLowerCase()), c)) {
			case "utf8":
			case "utf-8":
				return "utf8";
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le":
				return "utf16le";
			case "latin1":
			case "binary":
				return "latin1";
			case "base64":
			case "ascii":
			case "hex":
				return c;
			default:
				throw new Error("Unknown encoding: " + c);
		}
	}
	return textDecoder;
}
var streamx, hasRequiredStreamx;
function requireStreamx() {
	if (hasRequiredStreamx) return streamx;
	hasRequiredStreamx = 1;
	const { EventEmitter: t } = require_default(),
		o = new Error("Stream was destroyed"),
		s = new Error("Premature close"),
		c = requireFastFifo(),
		r = requireTextDecoder(),
		i =
			typeof queueMicrotask > "u"
				? (A) => commonjsGlobal.process.nextTick(A)
				: queueMicrotask,
		a = (1 << 29) - 1,
		l = 1,
		f = 2,
		d = 4,
		v = 8,
		z = a ^ l,
		V = a ^ f,
		b = 16,
		F = 32,
		H = 64,
		_ = 128,
		$ = 256,
		K = 512,
		Q = 1024,
		S = 2048,
		w = 4096,
		L = 8192,
		I = 16384,
		T = 32768,
		m = 65536,
		u = 131072,
		k = $ | K,
		M = b | m,
		ne = H | b,
		Z = w | _,
		he = $ | u,
		y = a ^ b,
		P = a ^ H,
		B = a ^ (H | m),
		D = a ^ m,
		R = a ^ $,
		x = a ^ (_ | L),
		C = a ^ Q,
		U = a ^ k,
		q = a ^ T,
		O = a ^ F,
		W = a ^ u,
		j = a ^ he,
		ie = 1 << 18,
		re = 2 << 18,
		ee = 4 << 18,
		le = 8 << 18,
		ce = 16 << 18,
		ue = 32 << 18,
		ge = 64 << 18,
		_e = 128 << 18,
		we = 256 << 18,
		n = 512 << 18,
		p = 1024 << 18,
		g = a ^ (ie | we),
		N = a ^ ee,
		Y = a ^ (ie | n),
		X = a ^ ce,
		se = a ^ le,
		me = a ^ _e,
		Ge = a ^ re,
		Ie = a ^ p,
		xe = b | ie,
		Ne = a ^ xe,
		ke = I | ue,
		fe = d | v | f,
		de = fe | l,
		Pe = fe | ke,
		Ke = N & P,
		Te = _e | T,
		Ye = Te & Ne,
		qe = de | Ye,
		Qe = de | Q | I,
		Oe = de | I | _,
		Je = de | Q | _,
		Ze = de | w | _ | L,
		Xe = de | b | Q | I | m | u,
		et = fe | Q | I,
		tt = F | de | T | H,
		nt = T | l,
		it = de | n | ue,
		rt = le | ce,
		Ce = le | ie,
		st = le | ce | de | ie,
		Fe = de | ie | le | p,
		at = ee | ie,
		ot = ie | we,
		lt = de | n | Ce | ue,
		ut = ce | fe | n | ue,
		ct = re | de | _e | ee,
		ht = n | ue | fe,
		Le = Symbol.asyncIterator || Symbol("asyncIterator");
	class Ue {
		constructor(
			e,
			{
				highWaterMark: E = 16384,
				map: G = null,
				mapWritable: J,
				byteLength: oe,
				byteLengthWritable: ae,
			} = {},
		) {
			((this.stream = e),
				(this.queue = new c()),
				(this.highWaterMark = E),
				(this.buffered = 0),
				(this.error = null),
				(this.pipeline = null),
				(this.drains = null),
				(this.byteLength = ae || oe || je),
				(this.map = J || G),
				(this.afterWrite = _t.bind(this)),
				(this.afterUpdateNextTick = wt.bind(this)));
		}
		get ended() {
			return (this.stream._duplexState & ue) !== 0;
		}
		push(e) {
			return (this.stream._duplexState & ht) !== 0
				? !1
				: (this.map !== null && (e = this.map(e)),
					(this.buffered += this.byteLength(e)),
					this.queue.push(e),
					this.buffered < this.highWaterMark
						? ((this.stream._duplexState |= le), !0)
						: ((this.stream._duplexState |= rt), !1));
		}
		shift() {
			const e = this.queue.shift();
			return (
				(this.buffered -= this.byteLength(e)),
				this.buffered === 0 && (this.stream._duplexState &= se),
				e
			);
		}
		end(e) {
			(typeof e == "function"
				? this.stream.once("finish", e)
				: e != null && this.push(e),
				(this.stream._duplexState = (this.stream._duplexState | n) & N));
		}
		autoBatch(e, E) {
			const G = [],
				J = this.stream;
			for (G.push(e); (J._duplexState & Fe) === Ce; )
				G.push(J._writableState.shift());
			if ((J._duplexState & de) !== 0) return E(null);
			J._writev(G, E);
		}
		update() {
			const e = this.stream;
			e._duplexState |= re;
			do {
				for (; (e._duplexState & Fe) === le; ) {
					const E = this.shift();
					((e._duplexState |= ot), e._write(E, this.afterWrite));
				}
				(e._duplexState & at) === 0 && this.updateNonPrimary();
			} while (this.continueUpdate() === !0);
			e._duplexState &= Ge;
		}
		updateNonPrimary() {
			const e = this.stream;
			if ((e._duplexState & lt) === n) {
				((e._duplexState = e._duplexState | ie), e._final(mt.bind(this)));
				return;
			}
			if ((e._duplexState & fe) === d) {
				(e._duplexState & Te) === 0 &&
					((e._duplexState |= xe), e._destroy($e.bind(this)));
				return;
			}
			(e._duplexState & qe) === l &&
				((e._duplexState = (e._duplexState | xe) & z), e._open(We.bind(this)));
		}
		continueUpdate() {
			return (this.stream._duplexState & _e) === 0
				? !1
				: ((this.stream._duplexState &= me), !0);
		}
		updateCallback() {
			(this.stream._duplexState & ct) === ee
				? this.update()
				: this.updateNextTick();
		}
		updateNextTick() {
			(this.stream._duplexState & _e) === 0 &&
				((this.stream._duplexState |= _e),
				(this.stream._duplexState & re) === 0 && i(this.afterUpdateNextTick));
		}
	}
	class dt {
		constructor(
			e,
			{
				highWaterMark: E = 16384,
				map: G = null,
				mapReadable: J,
				byteLength: oe,
				byteLengthReadable: ae,
			} = {},
		) {
			((this.stream = e),
				(this.queue = new c()),
				(this.highWaterMark = E === 0 ? 1 : E),
				(this.buffered = 0),
				(this.readAhead = E > 0),
				(this.error = null),
				(this.pipeline = null),
				(this.byteLength = ae || oe || je),
				(this.map = J || G),
				(this.pipeTo = null),
				(this.afterRead = yt.bind(this)),
				(this.afterUpdateNextTick = bt.bind(this)));
		}
		get ended() {
			return (this.stream._duplexState & I) !== 0;
		}
		pipe(e, E) {
			if (this.pipeTo !== null)
				throw new Error("Can only pipe to one destination");
			if (
				(typeof E != "function" && (E = null),
				(this.stream._duplexState |= K),
				(this.pipeTo = e),
				(this.pipeline = new pt(this.stream, e, E)),
				E && this.stream.on("error", Ve),
				ve(e))
			)
				((e._writableState.pipeline = this.pipeline),
					E && e.on("error", Ve),
					e.on("finish", this.pipeline.finished.bind(this.pipeline)));
			else {
				const G = this.pipeline.done.bind(this.pipeline, e),
					J = this.pipeline.done.bind(this.pipeline, e, null);
				(e.on("error", G),
					e.on("close", J),
					e.on("finish", this.pipeline.finished.bind(this.pipeline)));
			}
			(e.on("drain", gt.bind(this)),
				this.stream.emit("piping", e),
				e.emit("pipe", this.stream));
		}
		push(e) {
			const E = this.stream;
			return e === null
				? ((this.highWaterMark = 0),
					(E._duplexState = (E._duplexState | Q) & B),
					!1)
				: this.map !== null && ((e = this.map(e)), e === null)
					? ((E._duplexState &= D), this.buffered < this.highWaterMark)
					: ((this.buffered += this.byteLength(e)),
						this.queue.push(e),
						(E._duplexState = (E._duplexState | _) & D),
						this.buffered < this.highWaterMark);
		}
		shift() {
			const e = this.queue.shift();
			return (
				(this.buffered -= this.byteLength(e)),
				this.buffered === 0 && (this.stream._duplexState &= x),
				e
			);
		}
		unshift(e) {
			const E = [this.map !== null ? this.map(e) : e];
			for (; this.buffered > 0; ) E.push(this.shift());
			for (let G = 0; G < E.length - 1; G++) {
				const J = E[G];
				((this.buffered += this.byteLength(J)), this.queue.push(J));
			}
			this.push(E[E.length - 1]);
		}
		read() {
			const e = this.stream;
			if ((e._duplexState & Oe) === _) {
				const E = this.shift();
				return (
					this.pipeTo !== null &&
						this.pipeTo.write(E) === !1 &&
						(e._duplexState &= U),
					(e._duplexState & S) !== 0 && e.emit("data", E),
					E
				);
			}
			return (
				this.readAhead === !1 && ((e._duplexState |= u), this.updateNextTick()),
				null
			);
		}
		drain() {
			const e = this.stream;
			for (; (e._duplexState & Oe) === _ && (e._duplexState & k) !== 0; ) {
				const E = this.shift();
				(this.pipeTo !== null &&
					this.pipeTo.write(E) === !1 &&
					(e._duplexState &= U),
					(e._duplexState & S) !== 0 && e.emit("data", E));
			}
		}
		update() {
			const e = this.stream;
			e._duplexState |= F;
			do {
				for (
					this.drain();
					this.buffered < this.highWaterMark && (e._duplexState & Xe) === u;
				)
					((e._duplexState |= M), e._read(this.afterRead), this.drain());
				((e._duplexState & Ze) === Z &&
					((e._duplexState |= L), e.emit("readable")),
					(e._duplexState & ne) === 0 && this.updateNonPrimary());
			} while (this.continueUpdate() === !0);
			e._duplexState &= O;
		}
		updateNonPrimary() {
			const e = this.stream;
			if (
				((e._duplexState & Je) === Q &&
					((e._duplexState = (e._duplexState | I) & C),
					e.emit("end"),
					(e._duplexState & Pe) === ke && (e._duplexState |= d),
					this.pipeTo !== null && this.pipeTo.end()),
				(e._duplexState & fe) === d)
			) {
				(e._duplexState & Te) === 0 &&
					((e._duplexState |= xe), e._destroy($e.bind(this)));
				return;
			}
			(e._duplexState & qe) === l &&
				((e._duplexState = (e._duplexState | xe) & z), e._open(We.bind(this)));
		}
		continueUpdate() {
			return (this.stream._duplexState & T) === 0
				? !1
				: ((this.stream._duplexState &= q), !0);
		}
		updateCallback() {
			(this.stream._duplexState & tt) === H
				? this.update()
				: this.updateNextTick();
		}
		updateNextTickIfOpen() {
			(this.stream._duplexState & nt) === 0 &&
				((this.stream._duplexState |= T),
				(this.stream._duplexState & F) === 0 && i(this.afterUpdateNextTick));
		}
		updateNextTick() {
			(this.stream._duplexState & T) === 0 &&
				((this.stream._duplexState |= T),
				(this.stream._duplexState & F) === 0 && i(this.afterUpdateNextTick));
		}
	}
	class ft {
		constructor(e) {
			((this.data = null),
				(this.afterTransform = St.bind(e)),
				(this.afterFinal = null));
		}
	}
	class pt {
		constructor(e, E, G) {
			((this.from = e),
				(this.to = E),
				(this.afterPipe = G),
				(this.error = null),
				(this.pipeToFinished = !1));
		}
		finished() {
			this.pipeToFinished = !0;
		}
		done(e, E) {
			if (
				(E && (this.error = E),
				e === this.to && ((this.to = null), this.from !== null))
			) {
				((this.from._duplexState & I) === 0 || !this.pipeToFinished) &&
					this.from.destroy(
						this.error || new Error("Writable stream closed prematurely"),
					);
				return;
			}
			if (e === this.from && ((this.from = null), this.to !== null)) {
				(e._duplexState & I) === 0 &&
					this.to.destroy(
						this.error || new Error("Readable stream closed before ending"),
					);
				return;
			}
			(this.afterPipe !== null && this.afterPipe(this.error),
				(this.to = this.from = this.afterPipe = null));
		}
	}
	function gt() {
		((this.stream._duplexState |= K), this.updateCallback());
	}
	function mt(A) {
		const e = this.stream;
		(A && e.destroy(A),
			(e._duplexState & fe) === 0 && ((e._duplexState |= ue), e.emit("finish")),
			(e._duplexState & Pe) === ke && (e._duplexState |= d),
			(e._duplexState &= Y),
			(e._duplexState & re) === 0 ? this.update() : this.updateNextTick());
	}
	function $e(A) {
		const e = this.stream;
		(!A && this.error !== o && (A = this.error),
			A && e.emit("error", A),
			(e._duplexState |= v),
			e.emit("close"));
		const E = e._readableState,
			G = e._writableState;
		if (
			(E !== null && E.pipeline !== null && E.pipeline.done(e, A), G !== null)
		) {
			for (; G.drains !== null && G.drains.length > 0; )
				G.drains.shift().resolve(!1);
			G.pipeline !== null && G.pipeline.done(e, A);
		}
	}
	function _t(A) {
		const e = this.stream;
		(A && e.destroy(A),
			(e._duplexState &= g),
			this.drains !== null && xt(this.drains),
			(e._duplexState & st) === ce &&
				((e._duplexState &= X),
				(e._duplexState & ge) === ge && e.emit("drain")),
			this.updateCallback());
	}
	function yt(A) {
		(A && this.stream.destroy(A),
			(this.stream._duplexState &= y),
			this.readAhead === !1 &&
				(this.stream._duplexState & $) === 0 &&
				(this.stream._duplexState &= W),
			this.updateCallback());
	}
	function bt() {
		(this.stream._duplexState & F) === 0 &&
			((this.stream._duplexState &= q), this.update());
	}
	function wt() {
		(this.stream._duplexState & re) === 0 &&
			((this.stream._duplexState &= me), this.update());
	}
	function xt(A) {
		for (let e = 0; e < A.length; e++)
			--A[e].writes === 0 && (A.shift().resolve(!0), e--);
	}
	function We(A) {
		const e = this.stream;
		(A && e.destroy(A),
			(e._duplexState & d) === 0 &&
				((e._duplexState & Qe) === 0 && (e._duplexState |= H),
				(e._duplexState & it) === 0 && (e._duplexState |= ee),
				e.emit("open")),
			(e._duplexState &= Ne),
			e._writableState !== null && e._writableState.updateCallback(),
			e._readableState !== null && e._readableState.updateCallback());
	}
	function St(A, e) {
		(e != null && this.push(e), this._writableState.afterWrite(A));
	}
	function vt(A) {
		(this._readableState !== null &&
			(A === "data" &&
				((this._duplexState |= S | he), this._readableState.updateNextTick()),
			A === "readable" &&
				((this._duplexState |= w), this._readableState.updateNextTick())),
			this._writableState !== null &&
				A === "drain" &&
				((this._duplexState |= ge), this._writableState.updateNextTick()));
	}
	class Re extends t {
		constructor(e) {
			(super(),
				(this._duplexState = 0),
				(this._readableState = null),
				(this._writableState = null),
				e &&
					(e.open && (this._open = e.open),
					e.destroy && (this._destroy = e.destroy),
					e.predestroy && (this._predestroy = e.predestroy),
					e.signal && e.signal.addEventListener("abort", qt.bind(this))),
				this.on("newListener", vt));
		}
		_open(e) {
			e(null);
		}
		_destroy(e) {
			e(null);
		}
		_predestroy() {}
		get readable() {
			return this._readableState !== null ? !0 : void 0;
		}
		get writable() {
			return this._writableState !== null ? !0 : void 0;
		}
		get destroyed() {
			return (this._duplexState & v) !== 0;
		}
		get destroying() {
			return (this._duplexState & fe) !== 0;
		}
		destroy(e) {
			(this._duplexState & fe) === 0 &&
				(e || (e = o),
				(this._duplexState = (this._duplexState | d) & Ke),
				this._readableState !== null &&
					((this._readableState.highWaterMark = 0),
					(this._readableState.error = e)),
				this._writableState !== null &&
					((this._writableState.highWaterMark = 0),
					(this._writableState.error = e)),
				(this._duplexState |= f),
				this._predestroy(),
				(this._duplexState &= V),
				this._readableState !== null && this._readableState.updateNextTick(),
				this._writableState !== null && this._writableState.updateNextTick());
		}
	}
	class Se extends Re {
		constructor(e) {
			(super(e),
				(this._duplexState |= l | ue | u),
				(this._readableState = new dt(this, e)),
				e &&
					(this._readableState.readAhead === !1 && (this._duplexState &= W),
					e.read && (this._read = e.read),
					e.eagerOpen && this._readableState.updateNextTick(),
					e.encoding && this.setEncoding(e.encoding)));
		}
		setEncoding(e) {
			const E = new r(e),
				G = this._readableState.map || kt;
			return ((this._readableState.map = J), this);
			function J(oe) {
				const ae = E.push(oe);
				return ae === "" && (oe.byteLength !== 0 || E.remaining > 0)
					? null
					: G(ae);
			}
		}
		_read(e) {
			e(null);
		}
		pipe(e, E) {
			return (
				this._readableState.updateNextTick(),
				this._readableState.pipe(e, E),
				e
			);
		}
		read() {
			return (this._readableState.updateNextTick(), this._readableState.read());
		}
		push(e) {
			return (
				this._readableState.updateNextTickIfOpen(),
				this._readableState.push(e)
			);
		}
		unshift(e) {
			return (
				this._readableState.updateNextTickIfOpen(),
				this._readableState.unshift(e)
			);
		}
		resume() {
			return (
				(this._duplexState |= he),
				this._readableState.updateNextTick(),
				this
			);
		}
		pause() {
			return (
				(this._duplexState &= this._readableState.readAhead === !1 ? j : R),
				this
			);
		}
		static _fromAsyncIterator(e, E) {
			let G;
			const J = new Se({
				...E,
				read(ae) {
					e.next().then(oe).then(ae.bind(null, null)).catch(ae);
				},
				predestroy() {
					G = e.return();
				},
				destroy(ae) {
					if (!G) return ae(null);
					G.then(ae.bind(null, null)).catch(ae);
				},
			});
			return J;
			function oe(ae) {
				ae.done ? J.push(null) : J.push(ae.value);
			}
		}
		static from(e, E) {
			if (It(e)) return e;
			if (e[Le]) return this._fromAsyncIterator(e[Le](), E);
			Array.isArray(e) || (e = e === void 0 ? [] : [e]);
			let G = 0;
			return new Se({
				...E,
				read(J) {
					(this.push(G === e.length ? null : e[G++]), J(null));
				},
			});
		}
		static isBackpressured(e) {
			return (
				(e._duplexState & et) !== 0 ||
				e._readableState.buffered >= e._readableState.highWaterMark
			);
		}
		static isPaused(e) {
			return (e._duplexState & $) === 0;
		}
		[Le]() {
			const e = this;
			let E = null,
				G = null,
				J = null;
			return (
				this.on("error", (te) => {
					E = te;
				}),
				this.on("readable", oe),
				this.on("close", ae),
				{
					[Le]() {
						return this;
					},
					next() {
						return new Promise(function (te, pe) {
							((G = te), (J = pe));
							const ye = e.read();
							ye !== null ? be(ye) : (e._duplexState & v) !== 0 && be(null);
						});
					},
					return() {
						return Ee(null);
					},
					throw(te) {
						return Ee(te);
					},
				}
			);
			function oe() {
				G !== null && be(e.read());
			}
			function ae() {
				G !== null && be(null);
			}
			function be(te) {
				J !== null &&
					(E
						? J(E)
						: te === null && (e._duplexState & I) === 0
							? J(o)
							: G({ value: te, done: te === null }),
					(J = G = null));
			}
			function Ee(te) {
				return (
					e.destroy(te),
					new Promise((pe, ye) => {
						if (e._duplexState & v) return pe({ value: void 0, done: !0 });
						e.once("close", function () {
							te ? ye(te) : pe({ value: void 0, done: !0 });
						});
					})
				);
			}
		}
	}
	class Me extends Re {
		constructor(e) {
			(super(e),
				(this._duplexState |= l | I),
				(this._writableState = new Ue(this, e)),
				e &&
					(e.writev && (this._writev = e.writev),
					e.write && (this._write = e.write),
					e.final && (this._final = e.final),
					e.eagerOpen && this._writableState.updateNextTick()));
		}
		cork() {
			this._duplexState |= p;
		}
		uncork() {
			((this._duplexState &= Ie), this._writableState.updateNextTick());
		}
		_writev(e, E) {
			E(null);
		}
		_write(e, E) {
			this._writableState.autoBatch(e, E);
		}
		_final(e) {
			e(null);
		}
		static isBackpressured(e) {
			return (e._duplexState & ut) !== 0;
		}
		static drained(e) {
			if (e.destroyed) return Promise.resolve(!1);
			const E = e._writableState,
				J =
					(Ot(e) ? Math.min(1, E.queue.length) : E.queue.length) +
					(e._duplexState & we ? 1 : 0);
			return J === 0
				? Promise.resolve(!0)
				: (E.drains === null && (E.drains = []),
					new Promise((oe) => {
						E.drains.push({ writes: J, resolve: oe });
					}));
		}
		write(e) {
			return (
				this._writableState.updateNextTick(),
				this._writableState.push(e)
			);
		}
		end(e) {
			return (
				this._writableState.updateNextTick(),
				this._writableState.end(e),
				this
			);
		}
	}
	class Ae extends Se {
		constructor(e) {
			(super(e),
				(this._duplexState = l | (this._duplexState & u)),
				(this._writableState = new Ue(this, e)),
				e &&
					(e.writev && (this._writev = e.writev),
					e.write && (this._write = e.write),
					e.final && (this._final = e.final)));
		}
		cork() {
			this._duplexState |= p;
		}
		uncork() {
			((this._duplexState &= Ie), this._writableState.updateNextTick());
		}
		_writev(e, E) {
			E(null);
		}
		_write(e, E) {
			this._writableState.autoBatch(e, E);
		}
		_final(e) {
			e(null);
		}
		write(e) {
			return (
				this._writableState.updateNextTick(),
				this._writableState.push(e)
			);
		}
		end(e) {
			return (
				this._writableState.updateNextTick(),
				this._writableState.end(e),
				this
			);
		}
	}
	class Be extends Ae {
		constructor(e) {
			(super(e),
				(this._transformState = new ft(this)),
				e &&
					(e.transform && (this._transform = e.transform),
					e.flush && (this._flush = e.flush)));
		}
		_write(e, E) {
			this._readableState.buffered >= this._readableState.highWaterMark
				? (this._transformState.data = e)
				: this._transform(e, this._transformState.afterTransform);
		}
		_read(e) {
			if (this._transformState.data !== null) {
				const E = this._transformState.data;
				((this._transformState.data = null),
					e(null),
					this._transform(E, this._transformState.afterTransform));
			} else e(null);
		}
		destroy(e) {
			(super.destroy(e),
				this._transformState.data !== null &&
					((this._transformState.data = null),
					this._transformState.afterTransform()));
		}
		_transform(e, E) {
			E(null, e);
		}
		_flush(e) {
			e(null);
		}
		_final(e) {
			((this._transformState.afterFinal = e), this._flush(Tt.bind(this)));
		}
	}
	class Et extends Be {}
	function Tt(A, e) {
		const E = this._transformState.afterFinal;
		if (A) return E(A);
		(e != null && this.push(e), this.push(null), E(null));
	}
	function Lt(...A) {
		return new Promise((e, E) =>
			ze(...A, (G) => {
				if (G) return E(G);
				e();
			}),
		);
	}
	function ze(A, ...e) {
		const E = Array.isArray(A) ? [...A, ...e] : [A, ...e],
			G = E.length && typeof E[E.length - 1] == "function" ? E.pop() : null;
		if (E.length < 2) throw new Error("Pipeline requires at least 2 streams");
		let J = E[0],
			oe = null,
			ae = null;
		for (let te = 1; te < E.length; te++)
			((oe = E[te]),
				ve(J) ? J.pipe(oe, Ee) : (be(J, !0, te > 1, Ee), J.pipe(oe)),
				(J = oe));
		if (G) {
			let te = !1;
			const pe =
				ve(oe) || !!(oe._writableState && oe._writableState.autoDestroy);
			(oe.on("error", (ye) => {
				ae === null && (ae = ye);
			}),
				oe.on("finish", () => {
					((te = !0), pe || G(ae));
				}),
				pe && oe.on("close", () => G(ae || (te ? null : s))));
		}
		return oe;
		function be(te, pe, ye, De) {
			(te.on("error", De), te.on("close", Ct));
			function Ct() {
				if (
					(te._readableState && !te._readableState.ended) ||
					(ye && te._writableState && !te._writableState.ended)
				)
					return De(s);
			}
		}
		function Ee(te) {
			if (!(!te || ae)) {
				ae = te;
				for (const pe of E) pe.destroy(te);
			}
		}
	}
	function kt(A) {
		return A;
	}
	function He(A) {
		return !!A._readableState || !!A._writableState;
	}
	function ve(A) {
		return typeof A._duplexState == "number" && He(A);
	}
	function Rt(A) {
		return !!A._readableState && A._readableState.ended;
	}
	function At(A) {
		return !!A._writableState && A._writableState.ended;
	}
	function Dt(A, e = {}) {
		const E =
			(A._readableState && A._readableState.error) ||
			(A._writableState && A._writableState.error);
		return !e.all && E === o ? null : E;
	}
	function It(A) {
		return ve(A) && A.readable;
	}
	function Nt(A) {
		return (A._duplexState & l) !== l || (A._duplexState & Te) !== 0;
	}
	function Pt(A) {
		return (
			typeof A == "object" && A !== null && typeof A.byteLength == "number"
		);
	}
	function je(A) {
		return Pt(A) ? A.byteLength : 1024;
	}
	function Ve() {}
	function qt() {
		this.destroy(new Error("Stream aborted."));
	}
	function Ot(A) {
		return (
			A._writev !== Me.prototype._writev && A._writev !== Ae.prototype._writev
		);
	}
	return (
		(streamx = {
			pipeline: ze,
			pipelinePromise: Lt,
			isStream: He,
			isStreamx: ve,
			isEnded: Rt,
			isFinished: At,
			isDisturbed: Nt,
			getStreamError: Dt,
			Stream: Re,
			Writable: Me,
			Readable: Se,
			Duplex: Ae,
			Transform: Be,
			PassThrough: Et,
		}),
		streamx
	);
}
var headers = {},
	hasRequiredHeaders;
function requireHeaders() {
	if (hasRequiredHeaders) return headers;
	hasRequiredHeaders = 1;
	const t = requireBrowser(),
		o = "0000000000000000000",
		s = "7777777777777777777",
		c = 48,
		r = t.from([117, 115, 116, 97, 114, 0]),
		i = t.from([c, c]),
		a = t.from([117, 115, 116, 97, 114, 32]),
		l = t.from([32, 0]),
		f = 4095,
		d = 257,
		v = 263;
	((headers.decodeLongPath = function (u, k) {
		return I(u, 0, u.length, k);
	}),
		(headers.encodePax = function (u) {
			let k = "";
			(u.name &&
				(k += T(
					" path=" +
						u.name +
						`
`,
				)),
				u.linkname &&
					(k += T(
						" linkpath=" +
							u.linkname +
							`
`,
					)));
			const M = u.pax;
			if (M)
				for (const ne in M)
					k += T(
						" " +
							ne +
							"=" +
							M[ne] +
							`
`,
					);
			return t.from(k);
		}),
		(headers.decodePax = function (u) {
			const k = {};
			for (; u.length; ) {
				let M = 0;
				for (; M < u.length && u[M] !== 32; ) M++;
				const ne = parseInt(t.toString(u.subarray(0, M)), 10);
				if (!ne) return k;
				const Z = t.toString(u.subarray(M + 1, ne - 1)),
					he = Z.indexOf("=");
				if (he === -1) return k;
				((k[Z.slice(0, he)] = Z.slice(he + 1)), (u = u.subarray(ne)));
			}
			return k;
		}),
		(headers.encode = function (u) {
			const k = t.alloc(512);
			let M = u.name,
				ne = "";
			if (
				(u.typeflag === 5 && M[M.length - 1] !== "/" && (M += "/"),
				t.byteLength(M) !== M.length)
			)
				return null;
			for (; t.byteLength(M) > 100; ) {
				const Z = M.indexOf("/");
				if (Z === -1) return null;
				((ne += ne ? "/" + M.slice(0, Z) : M.slice(0, Z)),
					(M = M.slice(Z + 1)));
			}
			return t.byteLength(M) > 100 ||
				t.byteLength(ne) > 155 ||
				(u.linkname && t.byteLength(u.linkname) > 100)
				? null
				: (t.write(k, M),
					t.write(k, K(u.mode & f, 6), 100),
					t.write(k, K(u.uid, 6), 108),
					t.write(k, K(u.gid, 6), 116),
					S(u.size, k, 124),
					t.write(k, K((u.mtime.getTime() / 1e3) | 0, 11), 136),
					(k[156] = c + H(u.type)),
					u.linkname && t.write(k, u.linkname, 157),
					t.copy(r, k, d),
					t.copy(i, k, v),
					u.uname && t.write(k, u.uname, 265),
					u.gname && t.write(k, u.gname, 297),
					t.write(k, K(u.devmajor || 0, 6), 329),
					t.write(k, K(u.devminor || 0, 6), 337),
					ne && t.write(k, ne, 345),
					t.write(k, K($(k), 6), 148),
					k);
		}),
		(headers.decode = function (u, k, M) {
			let ne = u[156] === 0 ? 0 : u[156] - c,
				Z = I(u, 0, 100, k);
			const he = L(u, 100, 8),
				y = L(u, 108, 8),
				P = L(u, 116, 8),
				B = L(u, 124, 12),
				D = L(u, 136, 12),
				R = F(ne),
				x = u[157] === 0 ? null : I(u, 157, 100, k),
				C = I(u, 265, 32),
				U = I(u, 297, 32),
				q = L(u, 329, 8),
				O = L(u, 337, 8),
				W = $(u);
			if (W === 256) return null;
			if (W !== L(u, 148, 8))
				throw new Error(
					"Invalid tar header. Maybe the tar is corrupted or it needs to be gunzipped?",
				);
			if (z(u)) u[345] && (Z = I(u, 345, 155, k) + "/" + Z);
			else if (!V(u)) {
				if (!M) throw new Error("Invalid tar header: unknown format.");
			}
			return (
				ne === 0 && Z && Z[Z.length - 1] === "/" && (ne = 5),
				{
					name: Z,
					mode: he,
					uid: y,
					gid: P,
					size: B,
					mtime: new Date(1e3 * D),
					type: R,
					linkname: x,
					uname: C,
					gname: U,
					devmajor: q,
					devminor: O,
					pax: null,
				}
			);
		}));
	function z(m) {
		return t.equals(r, m.subarray(d, d + 6));
	}
	function V(m) {
		return (
			t.equals(a, m.subarray(d, d + 6)) && t.equals(l, m.subarray(v, v + 2))
		);
	}
	function b(m, u, k) {
		return typeof m != "number"
			? k
			: ((m = ~~m), m >= u ? u : m >= 0 || ((m += u), m >= 0) ? m : 0);
	}
	function F(m) {
		switch (m) {
			case 0:
				return "file";
			case 1:
				return "link";
			case 2:
				return "symlink";
			case 3:
				return "character-device";
			case 4:
				return "block-device";
			case 5:
				return "directory";
			case 6:
				return "fifo";
			case 7:
				return "contiguous-file";
			case 72:
				return "pax-header";
			case 55:
				return "pax-global-header";
			case 27:
				return "gnu-long-link-path";
			case 28:
			case 30:
				return "gnu-long-path";
		}
		return null;
	}
	function H(m) {
		switch (m) {
			case "file":
				return 0;
			case "link":
				return 1;
			case "symlink":
				return 2;
			case "character-device":
				return 3;
			case "block-device":
				return 4;
			case "directory":
				return 5;
			case "fifo":
				return 6;
			case "contiguous-file":
				return 7;
			case "pax-header":
				return 72;
		}
		return 0;
	}
	function _(m, u, k, M) {
		for (; k < M; k++) if (m[k] === u) return k;
		return M;
	}
	function $(m) {
		let u = 256;
		for (let k = 0; k < 148; k++) u += m[k];
		for (let k = 156; k < 512; k++) u += m[k];
		return u;
	}
	function K(m, u) {
		return (
			(m = m.toString(8)),
			m.length > u ? s.slice(0, u) + " " : o.slice(0, u - m.length) + m + " "
		);
	}
	function Q(m, u, k) {
		u[k] = 128;
		for (let M = 11; M > 0; M--)
			((u[k + M] = m & 255), (m = Math.floor(m / 256)));
	}
	function S(m, u, k) {
		m.toString(8).length > 11 ? Q(m, u, k) : t.write(u, K(m, 11), k);
	}
	function w(m) {
		let u;
		if (m[0] === 128) u = !0;
		else if (m[0] === 255) u = !1;
		else return null;
		const k = [];
		let M;
		for (M = m.length - 1; M > 0; M--) {
			const he = m[M];
			u ? k.push(he) : k.push(255 - he);
		}
		let ne = 0;
		const Z = k.length;
		for (M = 0; M < Z; M++) ne += k[M] * Math.pow(256, M);
		return u ? ne : -1 * ne;
	}
	function L(m, u, k) {
		if (((m = m.subarray(u, u + k)), (u = 0), m[u] & 128)) return w(m);
		{
			for (; u < m.length && m[u] === 32; ) u++;
			const M = b(_(m, 32, u, m.length), m.length, m.length);
			for (; u < M && m[u] === 0; ) u++;
			return M === u ? 0 : parseInt(t.toString(m.subarray(u, M)), 8);
		}
	}
	function I(m, u, k, M) {
		return t.toString(m.subarray(u, _(m, 0, u, u + k)), M);
	}
	function T(m) {
		const u = t.byteLength(m);
		let k = Math.floor(Math.log(u) / Math.log(10)) + 1;
		return (u + k >= Math.pow(10, k) && k++, u + k + m);
	}
	return headers;
}
var extract, hasRequiredExtract;
function requireExtract() {
	if (hasRequiredExtract) return extract;
	hasRequiredExtract = 1;
	const { Writable: t, Readable: o, getStreamError: s } = requireStreamx(),
		c = requireFastFifo(),
		r = requireBrowser(),
		i = requireHeaders(),
		a = r.alloc(0);
	class l {
		constructor() {
			((this.buffered = 0),
				(this.shifted = 0),
				(this.queue = new c()),
				(this._offset = 0));
		}
		push(b) {
			((this.buffered += b.byteLength), this.queue.push(b));
		}
		shiftFirst(b) {
			return this._buffered === 0 ? null : this._next(b);
		}
		shift(b) {
			if (b > this.buffered) return null;
			if (b === 0) return a;
			let F = this._next(b);
			if (b === F.byteLength) return F;
			const H = [F];
			for (; (b -= F.byteLength) > 0; ) ((F = this._next(b)), H.push(F));
			return r.concat(H);
		}
		_next(b) {
			const F = this.queue.peek(),
				H = F.byteLength - this._offset;
			if (b >= H) {
				const _ = this._offset ? F.subarray(this._offset, F.byteLength) : F;
				return (
					this.queue.shift(),
					(this._offset = 0),
					(this.buffered -= H),
					(this.shifted += H),
					_
				);
			}
			return (
				(this.buffered -= b),
				(this.shifted += b),
				F.subarray(this._offset, (this._offset += b))
			);
		}
	}
	class f extends o {
		constructor(b, F, H) {
			(super(), (this.header = F), (this.offset = H), (this._parent = b));
		}
		_read(b) {
			(this.header.size === 0 && this.push(null),
				this._parent._stream === this && this._parent._update(),
				b(null));
		}
		_predestroy() {
			this._parent.destroy(s(this));
		}
		_detach() {
			this._parent._stream === this &&
				((this._parent._stream = null),
				(this._parent._missing = z(this.header.size)),
				this._parent._update());
		}
		_destroy(b) {
			(this._detach(), b(null));
		}
	}
	class d extends t {
		constructor(b) {
			(super(b),
				b || (b = {}),
				(this._buffer = new l()),
				(this._offset = 0),
				(this._header = null),
				(this._stream = null),
				(this._missing = 0),
				(this._longHeader = !1),
				(this._callback = v),
				(this._locked = !1),
				(this._finished = !1),
				(this._pax = null),
				(this._paxGlobal = null),
				(this._gnuLongPath = null),
				(this._gnuLongLinkPath = null),
				(this._filenameEncoding = b.filenameEncoding || "utf-8"),
				(this._allowUnknownFormat = !!b.allowUnknownFormat),
				(this._unlockBound = this._unlock.bind(this)));
		}
		_unlock(b) {
			if (((this._locked = !1), b)) {
				(this.destroy(b), this._continueWrite(b));
				return;
			}
			this._update();
		}
		_consumeHeader() {
			if (this._locked) return !1;
			this._offset = this._buffer.shifted;
			try {
				this._header = i.decode(
					this._buffer.shift(512),
					this._filenameEncoding,
					this._allowUnknownFormat,
				);
			} catch (b) {
				return (this._continueWrite(b), !1);
			}
			if (!this._header) return !0;
			switch (this._header.type) {
				case "gnu-long-path":
				case "gnu-long-link-path":
				case "pax-global-header":
				case "pax-header":
					return (
						(this._longHeader = !0),
						(this._missing = this._header.size),
						!0
					);
			}
			return (
				(this._locked = !0),
				this._applyLongHeaders(),
				this._header.size === 0 || this._header.type === "directory"
					? (this.emit(
							"entry",
							this._header,
							this._createStream(),
							this._unlockBound,
						),
						!0)
					: ((this._stream = this._createStream()),
						(this._missing = this._header.size),
						this.emit("entry", this._header, this._stream, this._unlockBound),
						!0)
			);
		}
		_applyLongHeaders() {
			(this._gnuLongPath &&
				((this._header.name = this._gnuLongPath), (this._gnuLongPath = null)),
				this._gnuLongLinkPath &&
					((this._header.linkname = this._gnuLongLinkPath),
					(this._gnuLongLinkPath = null)),
				this._pax &&
					(this._pax.path && (this._header.name = this._pax.path),
					this._pax.linkpath && (this._header.linkname = this._pax.linkpath),
					this._pax.size && (this._header.size = parseInt(this._pax.size, 10)),
					(this._header.pax = this._pax),
					(this._pax = null)));
		}
		_decodeLongHeader(b) {
			switch (this._header.type) {
				case "gnu-long-path":
					this._gnuLongPath = i.decodeLongPath(b, this._filenameEncoding);
					break;
				case "gnu-long-link-path":
					this._gnuLongLinkPath = i.decodeLongPath(b, this._filenameEncoding);
					break;
				case "pax-global-header":
					this._paxGlobal = i.decodePax(b);
					break;
				case "pax-header":
					this._pax =
						this._paxGlobal === null
							? i.decodePax(b)
							: Object.assign({}, this._paxGlobal, i.decodePax(b));
					break;
			}
		}
		_consumeLongHeader() {
			((this._longHeader = !1), (this._missing = z(this._header.size)));
			const b = this._buffer.shift(this._header.size);
			try {
				this._decodeLongHeader(b);
			} catch (F) {
				return (this._continueWrite(F), !1);
			}
			return !0;
		}
		_consumeStream() {
			const b = this._buffer.shiftFirst(this._missing);
			if (b === null) return !1;
			this._missing -= b.byteLength;
			const F = this._stream.push(b);
			return this._missing === 0
				? (this._stream.push(null),
					F && this._stream._detach(),
					F && this._locked === !1)
				: F;
		}
		_createStream() {
			return new f(this, this._header, this._offset);
		}
		_update() {
			for (; this._buffer.buffered > 0 && !this.destroying; ) {
				if (this._missing > 0) {
					if (this._stream !== null) {
						if (this._consumeStream() === !1) return;
						continue;
					}
					if (this._longHeader === !0) {
						if (this._missing > this._buffer.buffered) break;
						if (this._consumeLongHeader() === !1) return !1;
						continue;
					}
					const b = this._buffer.shiftFirst(this._missing);
					b !== null && (this._missing -= b.byteLength);
					continue;
				}
				if (this._buffer.buffered < 512) break;
				if (this._stream !== null || this._consumeHeader() === !1) return;
			}
			this._continueWrite(null);
		}
		_continueWrite(b) {
			const F = this._callback;
			((this._callback = v), F(b));
		}
		_write(b, F) {
			((this._callback = F), this._buffer.push(b), this._update());
		}
		_final(b) {
			((this._finished = this._missing === 0 && this._buffer.buffered === 0),
				b(this._finished ? null : new Error("Unexpected end of data")));
		}
		_predestroy() {
			this._continueWrite(null);
		}
		_destroy(b) {
			(this._stream && this._stream.destroy(s(this)), b(null));
		}
		[Symbol.asyncIterator]() {
			let b = null,
				F = null,
				H = null,
				_ = null,
				$ = null;
			const K = this;
			return (
				this.on("entry", w),
				this.on("error", (T) => {
					b = T;
				}),
				this.on("close", L),
				{
					[Symbol.asyncIterator]() {
						return this;
					},
					next() {
						return new Promise(S);
					},
					return() {
						return I(null);
					},
					throw(T) {
						return I(T);
					},
				}
			);
			function Q(T) {
				if (!$) return;
				const m = $;
				(($ = null), m(T));
			}
			function S(T, m) {
				if (b) return m(b);
				if (_) {
					(T({ value: _, done: !1 }), (_ = null));
					return;
				}
				((F = T),
					(H = m),
					Q(null),
					K._finished && F && (F({ value: void 0, done: !0 }), (F = H = null)));
			}
			function w(T, m, u) {
				(($ = u),
					m.on("error", v),
					F ? (F({ value: m, done: !1 }), (F = H = null)) : (_ = m));
			}
			function L() {
				(Q(b),
					F && (b ? H(b) : F({ value: void 0, done: !0 }), (F = H = null)));
			}
			function I(T) {
				return (
					K.destroy(T),
					Q(T),
					new Promise((m, u) => {
						if (K.destroyed) return m({ value: void 0, done: !0 });
						K.once("close", function () {
							T ? u(T) : m({ value: void 0, done: !0 });
						});
					})
				);
			}
		}
	}
	extract = function (b) {
		return new d(b);
	};
	function v() {}
	function z(V) {
		return ((V &= 511), V && 512 - V);
	}
	return extract;
}
var constants = { exports: {} };
const empty = {},
	empty$1 = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, default: empty },
			Symbol.toStringTag,
			{ value: "Module" },
		),
	),
	require$$0 = getAugmentedNamespace(empty$1);
var hasRequiredConstants;
function requireConstants() {
	if (hasRequiredConstants) return constants.exports;
	hasRequiredConstants = 1;
	const t = {
		S_IFMT: 61440,
		S_IFDIR: 16384,
		S_IFCHR: 8192,
		S_IFBLK: 24576,
		S_IFIFO: 4096,
		S_IFLNK: 40960,
	};
	try {
		constants.exports = require$$0.constants || t;
	} catch {
		constants.exports = t;
	}
	return constants.exports;
}
var pack, hasRequiredPack;
function requirePack() {
	if (hasRequiredPack) return pack;
	hasRequiredPack = 1;
	const { Readable: t, Writable: o, getStreamError: s } = requireStreamx(),
		c = requireBrowser(),
		r = requireConstants(),
		i = requireHeaders(),
		a = 493,
		l = 420,
		f = c.alloc(1024);
	class d extends o {
		constructor(_, $, K) {
			(super({ mapWritable: F, eagerOpen: !0 }),
				(this.written = 0),
				(this.header = $),
				(this._callback = K),
				(this._linkname = null),
				(this._isLinkname = $.type === "symlink" && !$.linkname),
				(this._isVoid = $.type !== "file" && $.type !== "contiguous-file"),
				(this._finished = !1),
				(this._pack = _),
				(this._openCallback = null),
				this._pack._stream === null
					? (this._pack._stream = this)
					: this._pack._pending.push(this));
		}
		_open(_) {
			((this._openCallback = _),
				this._pack._stream === this && this._continueOpen());
		}
		_continuePack(_) {
			if (this._callback === null) return;
			const $ = this._callback;
			((this._callback = null), $(_));
		}
		_continueOpen() {
			this._pack._stream === null && (this._pack._stream = this);
			const _ = this._openCallback;
			if (((this._openCallback = null), _ !== null)) {
				if (this._pack.destroying) return _(new Error("pack stream destroyed"));
				if (this._pack._finalized)
					return _(new Error("pack stream is already finalized"));
				((this._pack._stream = this),
					this._isLinkname || this._pack._encode(this.header),
					this._isVoid && (this._finish(), this._continuePack(null)),
					_(null));
			}
		}
		_write(_, $) {
			if (this._isLinkname)
				return (
					(this._linkname = this._linkname ? c.concat([this._linkname, _]) : _),
					$(null)
				);
			if (this._isVoid)
				return _.byteLength > 0
					? $(new Error("No body allowed for this entry"))
					: $();
			if (((this.written += _.byteLength), this._pack.push(_))) return $();
			this._pack._drain = $;
		}
		_finish() {
			this._finished ||
				((this._finished = !0),
				this._isLinkname &&
					((this.header.linkname = this._linkname
						? c.toString(this._linkname, "utf-8")
						: ""),
					this._pack._encode(this.header)),
				b(this._pack, this.header.size),
				this._pack._done(this));
		}
		_final(_) {
			if (this.written !== this.header.size)
				return _(new Error("Size mismatch"));
			(this._finish(), _(null));
		}
		_getError() {
			return s(this) || new Error("tar entry destroyed");
		}
		_predestroy() {
			this._pack.destroy(this._getError());
		}
		_destroy(_) {
			(this._pack._done(this),
				this._continuePack(this._finished ? null : this._getError()),
				_());
		}
	}
	class v extends t {
		constructor(_) {
			(super(_),
				(this._drain = V),
				(this._finalized = !1),
				(this._finalizing = !1),
				(this._pending = []),
				(this._stream = null));
		}
		entry(_, $, K) {
			if (this._finalized || this.destroying)
				throw new Error("already finalized or destroyed");
			(typeof $ == "function" && ((K = $), ($ = null)),
				K || (K = V),
				(!_.size || _.type === "symlink") && (_.size = 0),
				_.type || (_.type = z(_.mode)),
				_.mode || (_.mode = _.type === "directory" ? a : l),
				_.uid || (_.uid = 0),
				_.gid || (_.gid = 0),
				_.mtime || (_.mtime = new Date()),
				typeof $ == "string" && ($ = c.from($)));
			const Q = new d(this, _, K);
			return c.isBuffer($)
				? ((_.size = $.byteLength), Q.write($), Q.end(), Q)
				: (Q._isVoid, Q);
		}
		finalize() {
			if (this._stream || this._pending.length > 0) {
				this._finalizing = !0;
				return;
			}
			this._finalized ||
				((this._finalized = !0), this.push(f), this.push(null));
		}
		_done(_) {
			_ === this._stream &&
				((this._stream = null),
				this._finalizing && this.finalize(),
				this._pending.length && this._pending.shift()._continueOpen());
		}
		_encode(_) {
			if (!_.pax) {
				const $ = i.encode(_);
				if ($) {
					this.push($);
					return;
				}
			}
			this._encodePax(_);
		}
		_encodePax(_) {
			const $ = i.encodePax({ name: _.name, linkname: _.linkname, pax: _.pax }),
				K = {
					name: "PaxHeader",
					mode: _.mode,
					uid: _.uid,
					gid: _.gid,
					size: $.byteLength,
					mtime: _.mtime,
					type: "pax-header",
					linkname: _.linkname && "PaxHeader",
					uname: _.uname,
					gname: _.gname,
					devmajor: _.devmajor,
					devminor: _.devminor,
				};
			(this.push(i.encode(K)),
				this.push($),
				b(this, $.byteLength),
				(K.size = _.size),
				(K.type = _.type),
				this.push(i.encode(K)));
		}
		_doDrain() {
			const _ = this._drain;
			((this._drain = V), _());
		}
		_predestroy() {
			const _ = s(this);
			for (this._stream && this._stream.destroy(_); this._pending.length; ) {
				const $ = this._pending.shift();
				($.destroy(_), $._continueOpen());
			}
			this._doDrain();
		}
		_read(_) {
			(this._doDrain(), _());
		}
	}
	pack = function (_) {
		return new v(_);
	};
	function z(H) {
		switch (H & r.S_IFMT) {
			case r.S_IFBLK:
				return "block-device";
			case r.S_IFCHR:
				return "character-device";
			case r.S_IFDIR:
				return "directory";
			case r.S_IFIFO:
				return "fifo";
			case r.S_IFLNK:
				return "symlink";
		}
		return "file";
	}
	function V() {}
	function b(H, _) {
		((_ &= 511), _ && H.push(f.subarray(0, 512 - _)));
	}
	function F(H) {
		return c.isBuffer(H) ? H : c.from(H);
	}
	return pack;
}
var hasRequiredTarStream;
function requireTarStream() {
	return (
		hasRequiredTarStream ||
			((hasRequiredTarStream = 1),
			(tarStream.extract = requireExtract()),
			(tarStream.pack = requirePack())),
		tarStream
	);
}
var tarStreamExports = requireTarStream();
const tar = getDefaultExportFromCjs(tarStreamExports);
var streamxExports = requireStreamx();
function fromWeb(t, o = {}) {
	if (t instanceof ReadableStream && t instanceof WritableStream)
		return new DuplexWebStream(t, t, o);
	if (t instanceof ReadableStream) return new ReadableWebStream(t, o);
	if (t instanceof WritableStream) return new WritableWebStream(t, o);
	if (t.readable && t.writable)
		return new DuplexWebStream(t.readable, t.writable, o);
	if (t.readable) return new ReadableWebStream(t.readable, o);
	if (t.writable) return new WritableWebStream(t.writable, o);
	throw new Error("fromWeb: Requires at least a readable or writable stream.");
}
class ReadableWebStream extends streamxExports.Readable {
	constructor(o, s) {
		(super(s), (this._reader = o.getReader()), this._attachErrorHandler());
	}
	_attachErrorHandler() {
		this._reader.closed.catch((o) => {
			this.destroy(o);
		});
	}
	async _read(o) {
		try {
			const { done: s, value: c } = await this._reader.read();
			(s ? this.push(null) : this.push(c), o());
		} catch (s) {
			(this.destroy(s), o(s));
		}
	}
	_destroy(o) {
		(this._reader.releaseLock(), o());
	}
}
class WritableWebStream extends streamxExports.Writable {
	constructor(o, s) {
		(super(s), (this._writer = o.getWriter()));
	}
	async _write(o, s) {
		try {
			(await this._writer.write(o), s());
		} catch (c) {
			(this.destroy(c), s(c));
		}
	}
	async _final(o) {
		try {
			(await this._writer.close(), o());
		} catch (s) {
			(this.destroy(s), o(s));
		}
	}
	_destroy(o) {
		(this._writer.releaseLock(), o());
	}
}
class DuplexWebStream extends streamxExports.Duplex {
	constructor(o, s, c) {
		(super(c),
			(this._reader = o.getReader()),
			(this._writer = s.getWriter()),
			this._attachErrorHandler(),
			this._handleCompletion());
	}
	_attachErrorHandler() {
		(this._reader.closed.catch((o) => {
			this.destroy(o);
		}),
			this._writer.closed.catch((o) => {
				this.destroy(o);
			}));
	}
	async _read(o) {
		try {
			const { done: s, value: c } = await this._reader.read();
			(s ? this.push(null) : this.push(c), o());
		} catch (s) {
			(this.destroy(s), o(s));
		}
	}
	async _write(o, s) {
		try {
			(await this._writer.write(o), s());
		} catch (c) {
			(this.destroy(c), s(c));
		}
	}
	async _final(o) {
		try {
			(await this._writer.close(), o());
		} catch (s) {
			(this.destroy(s), o(s));
		}
	}
	_destroy(o) {
		(this._reader.releaseLock(), this._writer.releaseLock(), o());
	}
	_handleCompletion() {
		this.on("finish", () => {
			this.emit("end");
		});
	}
}
function isStreamx(t) {
	return typeof t._duplexState == "number" && isStream(t);
}
function isStream(t) {
	return !!t._readableState || !!t._writableState;
}
function isReadableStream(t) {
	return !!t._readableState;
}
function isWritableStream(t) {
	return !!t._writableState;
}
const WRITE_WRITING = 256 << 17;
function drained(t, o = !1) {
	if (t.destroyed) return Promise.resolve(!1);
	const s = t._writableState,
		r =
			(o ? Math.min(1, s.queue.length) : s.queue.length) +
			(t._duplexState & WRITE_WRITING ? 1 : 0);
	return r === 0
		? Promise.resolve(!0)
		: (s.drains === null && (s.drains = []),
			new Promise((i) => {
				s.drains.push({ writes: r, resolve: i });
			}));
}
var browserExports = requireBrowser();
const b4a = getDefaultExportFromCjs(browserExports);
function handleReadable(t, o) {
	let s = !1;
	const c = {};
	return new ReadableStream({
		start(r) {
			((c.data = i), (c.end = a), (c.close = a), (c.error = l));
			for (const d in c) t.on(d, c[d]);
			t.pause();
			function i(d) {
				s ||
					(d === null
						? a()
						: (r.enqueue(typeof d == "string" ? b4a.from(d) : d), t.pause()));
			}
			function a() {
				(f(), r.close());
			}
			function l(d) {
				(f(), r.error(d));
			}
			function f() {
				if (!s) {
					s = !0;
					for (const d in c) t.off(d, c[d]);
				}
			}
		},
		pull() {
			s || t.resume();
		},
		cancel() {
			s = !0;
			for (const r in c) t.off(r, c[r]);
			t.destroy ? t.destroy() : t.close && t.close();
		},
		type: void 0,
	});
}
function handleWritable(t) {
	return new WritableStream({
		async write(o) {
			try {
				const s = typeof o == "string" ? b4a.from(o) : o;
				t.write(s) || (await drained(t, !1));
			} catch (s) {
				(t.destroy(s), setTimeout(() => t.emit("error", s), 0));
			}
		},
		async close() {
			t.end && t.end();
		},
		abort(o) {
			(t.destroy && t.destroy(o), setTimeout(() => t.emit("error", o), 0));
		},
	});
}
function toWeb(t, o) {
	let s;
	if (t && !isStreamx(t)) {
		let i;
		(({ readable: t, writable: s, duplex: i } = t),
			i && !t && !s && ((t = i), (s = i)));
	} else
		isReadableStream(t) && isWritableStream(t)
			? (s = t)
			: isReadableStream(t)
				? (s = null)
				: isWritableStream(t) && ((s = t), (t = null));
	if (!t && !s) {
		const i = "Invalid stream";
		throw new Error(i);
	}
	let c, r;
	return (
		t && (c = handleReadable(t)),
		s && (r = handleWritable(s)),
		c && r ? { readable: c, writable: r } : c || r
	);
}
const data$d = {
		width: 24,
		height: 24,
		body: '<path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20z"/>',
	},
	data$c = {
		width: 24,
		height: 24,
		body: '<path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13h5l-5-5z"/>',
	},
	data$b = {
		width: 24,
		height: 24,
		body: '<path fill="currentColor" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"/>',
	},
	data$a = {
		width: 24,
		height: 24,
		body: '<path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"/>',
	},
	data$9 = {
		width: 24,
		height: 24,
		body: '<path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/>',
	},
	data$8 = {
		width: 24,
		height: 24,
		body: '<path fill="currentColor" d="M21 7v12q0 .825-.587 1.413T19 21H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h12zm-9 11q1.25 0 2.125-.875T15 15t-.875-2.125T12 12t-2.125.875T9 15t.875 2.125T12 18m-6-8h9V6H6z"/>',
	},
	data$7 = {
		width: 24,
		height: 24,
		body: '<path fill="currentColor" d="M11 19h2v-4.175l1.6 1.6L16 15l-4-4l-4 4l1.425 1.4L11 14.825zm-5 3q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13h5l-5-5z"/>',
	},
	data$6 = {
		width: 24,
		height: 24,
		body: '<path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm7-3h2v-4.2l1.6 1.6L16 13l-4-4l-4 4l1.4 1.4l1.6-1.6z"/>',
	},
	data$5 = {
		width: 24,
		height: 24,
		body: '<path fill="currentColor" d="m12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14zm-7 3q-.825 0-1.412-.587T3 19V6.525q0-.35.113-.675t.337-.6L4.7 3.725q.275-.35.687-.538T6.25 3h11.5q.45 0 .863.188t.687.537l1.25 1.525q.225.275.338.6t.112.675V19q0 .825-.587 1.413T19 21zm.4-15h13.2l-.85-1H6.25z"/>',
	},
	data$4 = {
		width: 24,
		height: 24,
		body: '<path fill="currentColor" d="m12 10l-4 4l1.4 1.4l1.6-1.6V18h2v-4.2l1.6 1.6L16 14zM5 21q-.825 0-1.412-.587T3 19V6.525q0-.35.113-.675t.337-.6L4.7 3.725q.275-.35.687-.538T6.25 3h11.5q.45 0 .863.188t.687.537l1.25 1.525q.225.275.338.6t.112.675V19q0 .825-.587 1.413T19 21zm.4-15h13.2l-.85-1H6.25z"/>',
	},
	data$3 = {
		width: 24,
		height: 24,
		body: '<path fill="currentColor" d="m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2z"/>',
	},
	PICKERS_UNAVAILABLE =
		!window.showDirectoryPicker || !window.showOpenFilePicker,
	rootFolder = await navigator.storage.getDirectory(),
	TAR_TYPES = [
		{
			description: "TAR archive (.tar)",
			accept: { "application/x-tar": ".tar" },
		},
		{
			description: "GZip compressed TAR archive (.tar.gz)",
			accept: {
				"application/x-gzip": ".tar.gz",
				"application/gzip": ".tar.gz",
			},
		},
	];
async function skipOobe() {
	await rootFolder.getFileHandle(".ContentExists", { create: !0 });
	const t = await rootFolder.getDirectoryHandle("Content", { create: !0 });
	for (const o of ["Fonts", "Images", "Sound"])
		await t.getDirectoryHandle(o, { create: !0 });
}
self.skipOobe = skipOobe;
async function copyFile(t, o) {
	const s = await t.getFile().then((i) => i.stream()),
		r = await (await o.getFileHandle(t.name, { create: !0 })).createWritable();
	await s.pipeTo(r);
}
async function copyFolder(t, o, s) {
	async function c(i, a) {
		for await (const [l, f] of i)
			if (f.kind === "file") await copyFile(f, a);
			else {
				const d = await a.getDirectoryHandle(l, { create: !0 });
				await c(f, d);
			}
	}
	const r = await o.getDirectoryHandle(t.name, { create: !0 });
	await c(t, r);
}
async function hasContent() {
	try {
		const t = await rootFolder.getDirectoryHandle("Content", { create: !1 });
		for (const o of ["Fonts", "Images", "Sounds"])
			try {
				await t.getDirectoryHandle(o, { create: !1 });
			} catch {
				return !1;
			}
		return (
			await rootFolder.getFileHandle(".ContentExists", { create: !1 }),
			!0
		);
	} catch {
		return !1;
	}
}
async function createEntry(t, o, s) {
	let c = null,
		r = null;
	const i = new Promise((l, f) => {
			((c = l), (r = f));
		}),
		a = t.entry(o, (l) => {
			l ? r(l) : c();
		});
	if (s) {
		const l = s.getReader();
		for (;;) {
			const { value: f, done: d } = await l.read();
			if (d || !f) break;
			a.write(f);
		}
		a.end();
	} else a.end();
	await i;
}
function createTar(t, o) {
	const s = tar.pack();
	async function c(r, i) {
		for await (const [a, l] of i)
			if ((o && o(l.kind, a), l.kind == "file")) {
				const f = await l.getFile(),
					d = f.stream();
				await createEntry(s, { name: r + a, type: l.kind, size: f.size }, d);
			} else
				(await createEntry(s, { name: r + a, type: l.kind }),
					await c(r + a + "/", l));
	}
	return (c("", t).then(() => s.finalize()), toWeb(s));
}
async function countTarEntries(t) {
	const o = fromWeb(t),
		s = tar.extract();
	let c = 0;
	s.on("entry", async (i, a, l) => {
		(c++, a.resume(), a.on("end", l));
	});
	const r = new Promise((i, a) => {
		(s.on("finish", () => i()), s.on("error", (l) => a(l)));
	});
	return (o.pipe(s), await r, c);
}
async function extractTar(t, o, s) {
	const c = fromWeb(t),
		r = tar.extract();
	let i = 0;
	r.on("entry", async (l, f, d) => {
		const v = toWeb(f);
		async function z() {
			const F = v.getReader();
			for (;;) {
				const { done: H, value: _ } = await F.read();
				if (H || !_) break;
			}
		}
		const V = l.name.split("/");
		if (
			(V[V.length - 1] === "" && V.pop(),
			V[0] === o.name && V.shift(),
			V.length === 0)
		) {
			(await z(), d());
			return;
		}
		let b = o;
		for (const F of V.splice(0, V.length - 1))
			b = await b.getDirectoryHandle(F, { create: !0 });
		if (l.type === "directory")
			(await b.getDirectoryHandle(V[0], { create: !0 }),
				await z(),
				s && s("directory", V[0], ++i));
		else if (l.type === "file") {
			const H = await (
				await b.getFileHandle(V[0], { create: !0 })
			).createWritable();
			(await v.pipeTo(H), s && s("file", V[0], ++i));
		} else await z();
		d();
	});
	const a = new Promise((l, f) => {
		(r.on("finish", () => l()), r.on("error", (d) => f(d)));
	});
	(c.pipe(r), await a);
}
async function recursiveGetDirectory(t, o) {
	return o.length === 0
		? t
		: recursiveGetDirectory(await t.getDirectoryHandle(o[0]), o.slice(1));
}
const OpfsExplorer = function () {
		((this.path = rootFolder),
			(this.components = []),
			(this.entries = []),
			(this.uploading = !1),
			(this.downloading = !1),
			(this.css = `
		display: flex;
		flex-direction: column;
		gap: 1em;
		flex: 1;

		.path {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			margin: 0 0.5rem;
		}
		.path h3 {
			font-family: var(--font-mono);
			margin: 0;
		}

		.entries {
			display: flex;
			flex-direction: column;
			gap: 0.5em;
		}

		.entry {
			display: flex;
			align-items: center;
			gap: 0.5rem;

			font-family: var(--font-mono);
		}

		.entry > svg {
			width: 1.5rem;
			height: 1.5rem;
		}

		.editor {
			display: flex;
			flex-direction: column;
			gap: 0.5em;
		}
		.editor .controls {
			display: flex;
			gap: 0.5em;
			align-items: center;
		}
		.editor .controls .name {
			font-family: var(--font-mono);
		}
		.editor textarea {
			min-height: 16rem;
			background: var(--bg-sub);
			color: var(--fg);
			border: 2px solid var(--surface4);
			border-radius: 0.5rem;
		}

		.expand { flex: 1 }
		.hidden { visibility: hidden }

		.archive {
			display: flex;
			flex-direction: row;
			gap: 0.5em;

		}

		.archive > * {
			flex: 1;
		}
	`),
			useChange([this.open], () => (this.path = this.path)),
			useChange([this.path], async () => {
				this.components = (await rootFolder.resolve(this.path)) || [];
				let a = [];
				this.components.length > 0 &&
					a.push({
						name: "..",
						entry: await recursiveGetDirectory(
							rootFolder,
							this.components.slice(0, this.components.length - 1),
						),
					});
				for await (const [l, f] of this.path) a.push({ name: l, entry: f });
				(a.sort((l, f) => {
					const d = l.entry.kind.localeCompare(f.entry.kind);
					return d === 0 ? l.name.localeCompare(f.name) : d;
				}),
					(this.entries = a));
			}));
		const t = async () => {
				const a = await showOpenFilePicker({ multiple: !0 });
				this.uploading = !0;
				for (const l of a) await copyFile(l, this.path);
				((this.path = this.path), (this.uploading = !1));
			},
			o = async () => {
				const a = await showDirectoryPicker();
				((this.uploading = !0),
					await copyFolder(a, this.path),
					(this.path = this.path),
					(this.uploading = !1));
			},
			s = async () => {
				const a = this.components.at(-1) || "terraria-wasm",
					l = await showSaveFilePicker({
						excludeAcceptAllOption: !0,
						suggestedName: a + ".tar",
						types: TAR_TYPES,
					});
				this.downloading = !0;
				let f = createTar(this.path, (v, z) =>
					console.log(`tarring ${v} ${z}`),
				);
				l.name.endsWith(".gz") &&
					(f = f.pipeThrough(new CompressionStream("gzip")));
				const d = await l.createWritable();
				(await f.pipeTo(d), (this.downloading = !1));
			},
			c = async () => {
				const a = await showOpenFilePicker({ multiple: !0 });
				this.uploading = !0;
				for (const l of a) {
					let f = await l.getFile().then((d) => d.stream());
					(l.name.endsWith(".gz") &&
						(f = f.pipeThrough(new DecompressionStream("gzip"))),
						await extractTar(f, this.path, (d, v) =>
							console.log(`untarring ${d} ${v}`),
						));
				}
				this.uploading = !1;
			},
			r = use(this.uploading, (a) => a || PICKERS_UNAVAILABLE),
			i = use(this.downloading, (a) => a || PICKERS_UNAVAILABLE);
		return h(
			"div",
			null,
			h(
				"div",
				{ class: "path" },
				$if(
					use(this.components, (a) => a.length > 0),
					h(
						Button,
						{
							type: "normal",
							icon: "full",
							disabled: !1,
							"on:click": async () => {
								this.path = this.entries[0].entry;
							},
							title: "Up A Level",
						},
						h(Icon, { icon: data$3 }),
					),
				),
				h(
					"h3",
					null,
					use(this.components, (a) =>
						a.length == 0 ? "Root Directory" : "/" + a.join("/"),
					),
				),
				h("div", { class: "expand" }),
				h(
					Button,
					{
						type: "normal",
						icon: "full",
						disabled: r,
						"on:click": t,
						title: "Upload File",
					},
					h(Icon, { icon: data$7 }),
				),
				h(
					Button,
					{
						type: "normal",
						icon: "full",
						disabled: r,
						"on:click": o,
						title: "Upload Folder",
					},
					h(Icon, { icon: data$6 }),
				),
			),
			$if(use(this.uploading), h("span", null, "Uploading files...")),
			$if(use(this.downloading), h("span", null, "Downloading files...")),
			h(
				"div",
				{ class: "entries" },
				use(this.entries, (a) =>
					a
						.filter((l) => l.name != "..")
						.map((l) => {
							const f = l.entry.kind === "directory" ? data$d : data$c,
								d = async (V) => {
									(V.stopImmediatePropagation(),
										this.editing?.name === l.name && (this.editing = null),
										await this.path.removeEntry(l.name, { recursive: !0 }),
										(this.path = this.path));
								},
								v = async (V) => {
									if ((V.stopImmediatePropagation(), l.entry.kind === "file")) {
										const F = await l.entry.getFile(),
											H = URL.createObjectURL(F),
											_ = document.createElement("a");
										((_.href = H),
											(_.download = l.name),
											_.click(),
											await new Promise(($) => setTimeout($, 100)),
											URL.revokeObjectURL(H));
									}
								},
								z = () => {
									l.entry.kind === "directory"
										? ((this.editing = null), (this.path = l.entry))
										: (this.editing = l.entry);
								};
							return h(
								Button,
								{
									"on:click": z,
									icon: "none",
									type: "listitem",
									disabled: !1,
									class: "entry",
								},
								h(Icon, { icon: l.name == ".." ? data$6 : f }),
								h("span", null, l.name === ".." ? "Parent Directory" : l.name),
								h("div", { class: "expand" }),
								h(
									Button,
									{
										class: l.entry.kind !== "file" ? "hidden" : "",
										"on:click": v,
										icon: "full",
										type: "listaction",
										disabled: !1,
										title: "Download File",
									},
									h(Icon, { icon: data$b }),
								),
								h(
									Button,
									{
										class: l.name === ".." ? "hidden" : "",
										"on:click": d,
										icon: "full",
										type: "listaction",
										disabled: !1,
										title: "Delete File",
									},
									h(Icon, { icon: data$a }),
								),
							);
						}),
				),
			),
			use(this.editing, (a) => {
				if (a) {
					const l = h("textarea", null);
					((l.value = "Loading file..."),
						a
							.getFile()
							.then((d) => d.text())
							.then((d) => (l.value = d)));
					const f = async () => {
						const d = await a.createWritable();
						(await d.write(l.value), await d.close(), (this.editing = null));
					};
					return h(
						"div",
						{ class: "editor" },
						h(
							"div",
							{ class: "controls" },
							h("div", { class: "name" }, a.name),
							h("div", { class: "expand" }),
							h(
								Button,
								{ "on:click": f, icon: "left", type: "primary", disabled: !1 },
								h(Icon, { icon: data$8 }),
								"Save",
							),
							h(
								Button,
								{
									"on:click": () => (this.editing = null),
									icon: "full",
									type: "normal",
									disabled: !1,
								},
								h(Icon, { icon: data$9 }),
							),
						),
						l,
					);
				}
			}),
			h("div", { style: { flexGrow: 1 } }),
			h(
				"div",
				{ class: "archive" },
				h(
					Button,
					{ type: "normal", icon: "full", disabled: r, "on:click": c },
					h(Icon, { icon: data$4 }),
					" Upload Folder Archive",
				),
				h(
					Button,
					{ type: "normal", icon: "full", disabled: i, "on:click": s },
					h(Icon, { icon: data$5 }),
					" Download Folder Archive",
				),
			),
		);
	},
	Dialog = function () {
		return (
			(this.css = `
		display: flex;
		flex-direction: column;
		gap: 0.8rem;

		background: var(--bg);
		color: var(--fg);
		border: 1.25px solid var(--surface3);
		border-radius: 1.5rem;

		width: min(40rem, 100%);
		min-height: min(50rem, 100%);
		max-height: min(50rem, 100%);

		position: fixed;
		inset: 0;
		opacity: 0;

		scale: .9;
		transform: rotate3d(1, 0, 0, -20deg);
		filter: brightness(1.5);

		pointer-events: none;
		transition: opacity 0.25s, transform 0.175s, filter 0.2s, scale 0.2s, background 0.1s, border-color 0.1s;
		transition-timing-function: ease;
		transition-delay: 0.05s, 0.05s, 0.05s, 0.05s;
		transform-origin: 50% 0%;
		perspective: 1250px;

		&[open] {
			opacity: 1;
			transform: rotate3d(1,0,0,0deg);
			filter: brightness(1.0);
			transition-delay: 0.05s, 0.05s, 0.05s, 0.2s;
			pointer-events: auto;
		}

		&[open]::backdrop {
			background: rgba(32, 28, 28, 0.35);
		}

		&::backdrop {
			background: rgba(32, 28, 28, 0);
			transition: background 0.2s;
		}

		.header {
			display: flex;
			gap: 0.5rem;
			align-items: center;
			border-bottom: 1.8px solid var(--surface2);
			transition: border-color 0.1s ease;
			padding-bottom: 0.5rem;
			user-select: none;
			-webkit-user-select: none;
		}

		.header h2 {
			margin: 0;
		}

		.children {
			overflow-y: scroll;
			overflow-x: hidden;
			scrollbar-width: none;
			scrollbar-color: transparent transparent;
			flex: 1;
			display: flex;
			flex-direction: column;
		}

		.expand { flex: 1 }
	`),
			(this.mount = () => {
				const t = this.root;
				useChange([this.open], () => {
					this.open ? t.showModal() : t.close();
				});
			}),
			h(
				"dialog",
				{ class: "component-dialog" },
				h(
					"div",
					{ class: "header" },
					h("h2", null, this.name),
					h("div", { class: "expand" }),
					h(
						Button,
						{
							"on:click": () => {
								this.open = !1;
							},
							type: "normal",
							icon: "full",
							disabled: !1,
							title: "Close",
						},
						h(Icon, { icon: data$9 }),
					),
				),
				h("div", { class: "children" }, this.children),
			)
		);
	},
	data$2 = {
		width: 24,
		height: 24,
		body: '<path fill="currentColor" d="M8 19V5l11 7z"/>',
	},
	data$1 = {
		width: 24,
		height: 24,
		body: '<path fill="currentColor" d="M3 21v-5h2v3h3v2zm13 0v-2h3v-3h2v5zM3 8V3h5v2H5v3zm16 0V5h-3V3h5v5z"/>',
	},
	data = {
		width: 24,
		height: 24,
		body: '<path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8H4v10l2.4-8h17.1l-2.575 8.575q-.2.65-.737 1.038T19 20z"/>',
	},
	NAME = "terrarium",
	Logo = function () {
		return (
			(this.css = `
		display: flex;
		align-items: center;
		font-size: 1.5rem;

		font-family: Andy Bold;

		img {
			image-rendering: pixelated;
			-ms-interpolation-mode: nearest-neighbor;
			width: 3rem;
			height: 3rem;
		}

		.extras {
			align-self: start;
			padding: 0.25rem 0;
			font-size: 1rem;
			color: var(--fg6);

			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
	`),
			h(
				"div",
				null,
				h("img", { src: "./app.webp", alt: "Terraria icon" }),
				h("span", null, NAME),
			)
		);
	},
	TopBar = function () {
		return (
			(this.css = `
		padding: 0.5em;

		display: flex;
		align-items: stretch;
		gap: 0.5rem;

		.group {
			display: flex;
			align-items: center;
			gap: 1rem;
		}

		.expand { flex: 1; }

		@media (max-width: 750px) {
			& {
				flex-direction: column;
			}
			.group {
				justify-content: space-evenly;
			}
		}
	`),
			useChange([gameState.ready, gameState.playing], () => {
				this.allowPlay = gameState.ready && !gameState.playing;
			}),
			h(
				"div",
				null,
				h("div", { class: "group" }, h(Logo, null)),
				h("div", { class: "expand" }),
				h(
					"div",
					{ class: "group" },
					h(
						Button,
						{
							"on:click": () => (this.fsOpen = !0),
							icon: "full",
							type: "normal",
							disabled: !1,
							label: "File System",
						},
						h(Icon, { icon: data }),
					),
					h(
						Button,
						{
							"on:click": async () => {
								try {
									(navigator.keyboard.lock(),
										await this.canvas.requestFullscreen({
											navigationUI: "hide",
										}));
								} catch {}
							},
							icon: "full",
							type: "normal",
							disabled: use(gameState.playing, (t) => !t),
							label: "Fullscreen",
						},
						h(Icon, { icon: data$1 }),
					),
					h(
						Button,
						{
							"on:click": () => {
								play();
							},
							icon: "left",
							type: "primary",
							disabled: use(this.allowPlay, (t) => !t),
						},
						h(Icon, { icon: data$2 }),
						"Play",
					),
				),
			)
		);
	},
	BottomBar = function () {
		return (
			(this.css = `
		background: var(--bg);
		border-top: 2px solid var(--surface1);
		padding: 0.5rem;
		font-size: 0.8rem;

		display: flex;
		align-items: center;
		justify-content: space-between;

		span {
			text-align: center;
		}

		@media (max-width: 750px) {
			& {
				flex-direction: column;
				gap: 0.5rem;
			}
		}
	`),
			h(
				"div",
				null,
				h(
					"span",
					null,
					"Original port by ",
					h(Link, { href: "https://github.com/velzie" }, "velzie"),
					", updated to 1.4.5.5 by",
					" ",
					h(Link, { href: "https://github.com/slqntdevss" }, "slant"),
				),
				h(
					"span",
					null,
					"All game assets and code belong to",
					" ",
					h(Link, { href: "https://re-logic.com/" }, "Re-Logic"),
					" All rights reserved.",
				),
			)
		);
	},
	GameView = function () {
		this.css = `
		aspect-ratio: 16 / 9;
		user-select: none;
		display: grid;
		grid-template-areas: "overlay";
		max-height: 90rem;

		div, canvas {
			grid-area: overlay;
			width: 100%;
			height: 100%;
		}

		div.started, canvas.stopped {
			display: none;
		}

		div {
			font-size: 2rem;
			font-weight: 570;

			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		canvas:fullscreen {
			border: none;
			border-radius: 0;
			background: black;
		}
	`;
		const t = use(gameState.playing, (s) => (s ? "started" : "stopped")),
			o = use(gameState.playing, (s) =>
				s ? "canvas started" : "canvas stopped",
			);
		return (
			(this.start = async () => {
				await preInit();
			}),
			h(
				"div",
				{ class: "tcontainer" },
				h("div", { class: t }, "Game not running."),
				h("canvas", {
					id: "canvas",
					class: o,
					"bind:this": use(this.canvas),
					"on:contextmenu": (s) => s.preventDefault(),
				}),
			)
		);
	},
	Main = function () {
		((this.css = `
		width: 100%;
		height: 100%;
		background: url(./backdrop.webp);
		color: var(--fg);

		display: flex;
		flex-direction: column;
		overflow: scroll;

		.main {
			flex: 1;
			display: flex;
			flex-direction: column;
			padding: 1rem 0;

			gap: 1em;

			margin: auto;
			width: min(1300px, calc(100% - 2rem));
		}

		.main h2 {
			margin: 0;
		}
	`),
			(this.fsOpen = !1));
		let t = h(GameView, { "bind:canvas": use(this.canvas) });
		return (
			(this.start = () => t.$.start()),
			h(
				"div",
				null,
				h(TopBar, {
					canvas: use(this.canvas),
					"bind:fsOpen": use(this.fsOpen),
				}),
				h("div", { class: "main" }, t, h(LogView, null)),
				h(
					Dialog,
					{ name: "File System", "bind:open": use(this.fsOpen) },
					h(OpfsExplorer, { open: use(this.fsOpen) }),
				),
				h(BottomBar, null),
			)
		);
	},
	CONTENT_PARTS = 36,
	CONTENT_BASE_PATH = "./content/Content.tar.part",
	Progress = function () {
		return (
			(this.css = `
		background: var(--surface1);
		border-radius: 1rem;
		height: 1rem;

		.bar {
			background: var(--accent);
			border-radius: 1rem;
			height: 1rem;
			transition: width 250ms;
		}
	`),
			h(
				"div",
				null,
				h("div", { class: "bar", style: use`width:${this.percent}%` }),
			)
		);
	},
	AutoInstall = function () {
		return (
			(this.extracting = !1),
			(this.fetching = !1),
			(this.counting = !1),
			(this.status = ""),
			(this.percent = 0),
			(this.currentPart = 0),
			(this.partProgress = 0),
			(this.totalProgress = 0),
			(this.extractProgress = 0),
			(this.extractTotal = 0),
			(this.mount = async () => {
				try {
					this.fetching = !0;
					const t = [];
					for (let d = 1; d <= CONTENT_PARTS; d++) {
						this.currentPart = d;
						const v = `${CONTENT_BASE_PATH}${d}`,
							z = await fetch(v);
						if (!z.ok)
							throw new Error(
								`Failed to fetch ${v}: ${z.status} ${z.statusText}`,
							);
						const V = z.headers.get("content-length"),
							b = V ? parseInt(V, 10) : null;
						if (!z.body) throw new Error("No response body");
						const F = z.body.getReader();
						let H = 0;
						const _ = [];
						for (;;) {
							const { value: Q, done: S } = await F.read();
							if (S) break;
							Q &&
								(_.push(Q),
								(H += Q.byteLength),
								b &&
									((this.partProgress = (H / b) * 100),
									(this.totalProgress =
										((d - 1) / CONTENT_PARTS) * 100 +
										(H / b / CONTENT_PARTS) * 100)));
						}
						const $ = new Uint8Array(_.reduce((Q, S) => Q + S.byteLength, 0));
						let K = 0;
						for (const Q of _) ($.set(Q, K), (K += Q.byteLength));
						(t.push($), (this.totalProgress = (d / CONTENT_PARTS) * 100));
					}
					this.fetching = !1;
					const o = t.reduce((d, v) => d + v.byteLength, 0),
						s = new Uint8Array(o);
					let c = 0;
					for (const d of t) (s.set(d, c), (c += d.byteLength));
					const r = new Blob([s], { type: "application/x-tar" });
					this.counting = !0;
					const i = r.stream(),
						a = await countTarEntries(i);
					((this.extractTotal = a),
						(this.counting = !1),
						(this.extracting = !0));
					const l = r.stream(),
						f = this;
					(await extractTar(l, rootFolder, (d, v, z) => {
						((f.extractProgress = z), (f.percent = (z / a) * 100));
					}),
						await rootFolder.getFileHandle(".ContentExists", { create: !0 }),
						(this.extracting = !1),
						(this.percent = 100),
						this["on:done"]());
				} catch (t) {
					((this.fetching = !1),
						(this.extracting = !1),
						(this.counting = !1),
						(this.status = `Failed to install content: ${t}`),
						console.error(t));
				}
			}),
			(this.css = `
		@keyframes pulse {
			0%, 100% { opacity: 1; }
			50% { opacity: 0.4; }
		}
		.fetching {
			text-align: center;
			animation: pulse 1.2s ease-in-out infinite;
		}
		.status {
			text-align: center;
			margin-bottom: 0.5rem;
		}
	`),
			h(
				"div",
				{ class: "step" },
				h("p", { class: "center" }, "Installing Terraria content..."),
				$if(
					use(this.fetching),
					h(
						"div",
						null,
						h(
							"p",
							{ class: "status" },
							"Fetching part ",
							use(this.currentPart),
							" of ",
							CONTENT_PARTS,
							"...",
						),
						$if(
							use(this.totalProgress, (t) => t > 0),
							h(
								"div",
								null,
								h(Progress, { percent: use(this.totalProgress) }),
								h(
									"p",
									{ style: "text-align:center" },
									use(this.totalProgress, (t) => t.toFixed(1)),
									"%",
								),
							),
						),
					),
				),
				$if(
					use(this.counting),
					h("p", { style: "text-align:center" }, "Counting files..."),
				),
				$if(use(this.status), h("div", { class: "error" }, use(this.status))),
				$if(
					use(this.extracting),
					h(
						"div",
						null,
						h("p", { class: "status" }, "Extracting files..."),
						$if(
							use(this.extractTotal, (t) => t > 0),
							h(
								"div",
								null,
								h(Progress, { percent: use(this.percent) }),
								h(
									"p",
									{ style: "text-align:center" },
									use(this.extractProgress),
									" / ",
									use(this.extractTotal),
									" files",
								),
							),
						),
					),
				),
			)
		);
	},
	Splash = function () {
		return (
			(this.css = `
		position: relative;

		.splash, .blur, .main {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
		}

		.splash {
			object-fit: cover;
			z-index: 1;
		}

		.blur {
			backdrop-filter: blur(0.5vw);
			z-index: 2;
		}

		.main {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			z-index: 3;
			padding: 0.5em;
		}

		.container {
			backdrop-filter: blur(0.5vw);
			width: min(50rem, 100%);
			margin: 0 1rem;
			padding: 1em;
			font-size: 18pt;

			color: var(--fg);

			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}

		.logo {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.logo img {
			width: 100%;
			height: auto;
			aspect-ratio: 3.01;
		}
	`),
			(this.mount = () => {
				this.start().catch(console.error);
			}),
			h(
				"div",
				null,
				h("img", {
					class: "splash",
					src: "./backdrop.webp",
					alt: "Terraria art background",
				}),
				h("div", { class: "blur" }),
				h(
					"div",
					{ class: "main" },
					h(
						"div",
						{ class: "logo" },
						h("img", {
							src: "./logo.webp",
							alt: "Terraria logo",
							width: "421",
							height: "140",
							fetchpriority: "high",
						}),
					),
					h(
						"div",
						{ class: "container tcontainer" },
						h(AutoInstall, { "on:done": this["on:next"] }),
					),
				),
			)
		);
	},
	initialHasContent = await hasContent(),
	App = function () {
		this.css = `
		position: relative;

		div {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
		}
		#splash {
			z-index: 1;
		}

		@keyframes fadeout {
			from { opacity: 1; scale: 1; }
			to { opacity: 0; scale: 1.2; }
		}
	`;
		let t = h(Main, null),
			o = null;
		const s = () => (o ??= t.$.start()),
			c = () => {
				(this.el.addEventListener("animationend", this.el.remove),
					(this.el.style.animation = "fadeout 0.5s ease"),
					s());
			};
		return (
			(this.mount = () => {
				initialHasContent && s();
			}),
			h(
				"div",
				{ id: "app", class: "dark" },
				initialHasContent
					? null
					: h(
							"div",
							{ id: "splash", "bind:this": use(this.el) },
							h(Splash, { "on:next": c, start: s }),
						),
				h("div", { id: "main" }, t),
			)
		);
	},
	root = document.getElementById("app");
try {
	root.replaceWith(h(App, null));
} catch (t) {
	(console.log(t),
		root.replaceWith(document.createTextNode(`Failed to load: ${t}`)));
}
