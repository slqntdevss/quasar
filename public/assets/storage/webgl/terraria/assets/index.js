(function () {
	const e = document.createElement("link").relList;
	if (e && e.supports && e.supports("modulepreload")) return;
	for (const v of document.querySelectorAll('link[rel="modulepreload"]')) S(v);
	new MutationObserver((v) => {
		for (const O of v)
			if (O.type === "childList")
				for (const L of O.addedNodes)
					L.tagName === "LINK" && L.rel === "modulepreload" && S(L);
	}).observe(document, { childList: !0, subtree: !0 });
	function _(v) {
		const O = {};
		return (
			v.integrity && (O.integrity = v.integrity),
			v.referrerPolicy && (O.referrerPolicy = v.referrerPolicy),
			v.crossOrigin === "use-credentials"
				? (O.credentials = "include")
				: v.crossOrigin === "anonymous"
					? (O.credentials = "omit")
					: (O.credentials = "same-origin"),
			O
		);
	}
	function S(v) {
		if (v.ep) return;
		v.ep = !0;
		const O = _(v);
		fetch(v.href, O);
	}
})();
(function (x) {
	const [e, _, S, v, O, L, T] = Array.from(Array(7), Symbol),
		j = "dlcomponent",
		A = {};
	function N() {
		return `${Array(4)
			.fill(0)
			.map(() => Math.floor(36 * Math.random()).toString(36))
			.join("")}`;
	}
	const ie = (W) =>
			function (X, ...ce) {
				let K = "";
				for (let G of X) K += G + (ce.shift() || "");
				return ne("dl" + N(), K, W);
			},
		le = ie(!1),
		q = ie(!0);
	function ne(W, X, ce) {
		let K = A[X];
		if (K) return K;
		A[X] = W;
		const G = document.createElement("style");
		document.head.appendChild(G);
		let U = "",
			te = "";
		for (
			X += `
`;
			;
		) {
			let [Z, ...ee] = X.split(`
`);
			if (
				Z.trim().endsWith("{") ||
				((te +=
					Z +
					`
`),
				!(X = ee.join(`
`)))
			)
				break;
		}
		G.textContent = X;
		let re = !0;
		if (((re = !!window.CSSScopeRule), ce && re)) {
			let Z = "";
			for (const ee of G.sheet.cssRules)
				ee.selectorText || ee.media
					? ee.selectorText?.startsWith(":")
						? ((ee.selectorText = `.${W}${ee.selectorText}`), (Z += ee.cssText))
						: (U += ee.cssText)
					: (Z += ee.cssText);
			G.textContent = `.${W} {${te}} @scope (.${W}) to (:not(.${W}).${j} *) { ${U} } ${Z}`;
		} else {
			let Z = "";
			ce &&
				!re &&
				(Z = (function (se) {
					let de = `:not(${se}).${j}`,
						xe = (ve, we) =>
							`${ve} *${we > 50 ? "" : `:not(${xe(ve + " " + (we % 2 == 0 ? se : de), we + 1)})`}`;
					return `:not(${xe(de, 0)})`;
				})(`.${W}`));
			const ee = (se) => {
				(se.selectorText &&
					(se.selectorText = se.selectorText
						.split(",")
						.map((de) =>
							(de = de.trim())[0] === "&"
								? `.${W}${de.slice(1)}${Z}`
								: de[0] === ":"
									? `.${W}${de}${Z}`
									: `.${W} ${de}${Z}`,
						)
						.join(", ")),
					(U += se.cssText));
			};
			for (const se of G.sheet.cssRules)
				se.media && se.media.mediaText
					? ((U += `@media(${se.media.mediaText}){`),
						Array.from(se.cssRules).map(ee),
						(U += "}"))
					: ee(se);
			G.textContent = `.${W} {${te}}${U}`;
		}
		return W;
	}
	let ue = document;
	const P = Symbol();
	let oe = !1;
	(Object.defineProperty(window, "use", {
		get: () => (
			(oe = !0),
			(W, X, ...ce) => {
				if (W instanceof Array) return pe(W, X, ...ce);
				(J(W) || V(W), (oe = !1));
				let K = {
					get value() {
						return (function (G) {
							let U = G[S],
								te = U[v],
								re = G[e],
								Z = U[_];
							for (let ee of te) if (((Z = Z[ee]), !M(Z))) break;
							for (let ee of re) Z = ee(Z);
							return Z;
						})(K);
					},
				};
				if (V(W)) {
					let G = [...W[e]];
					(X && G.push(X), (K[S] = W[S]), (K[e] = G));
				} else ((K[S] = W), (K[e] = X ? [X] : []));
				return K;
			}
		),
	}),
		Object.defineProperty(window, "useChange", {
			get: () => (
				(oe = !0),
				(W, X) => {
					((oe = !1), (W = W instanceof Array ? W : [W]));
					for (let ce of W) (J(ce) || V(ce), D(use(ce), X));
				}
			),
		}));
	const pe = (W, ...X) => {
		oe = !1;
		let ce = z({});
		const K = [];
		for (const G in W)
			if ((K.push(W[G]), X[G])) {
				let U = X[G];
				if ((J(U) && (U = use(U)), V(U))) {
					const te = K.length;
					let re;
					D(use(U), (Z) => {
						K[te] = String(Z);
						let ee = K.join("");
						(ee != re && (ce.string = ee), (re = ee));
					});
				} else K.push(String(U));
			}
		return ((ce.string = K.join("")), use(ce.string));
	};
	let Se = new Map();
	function z(W) {
		(M(W), (W[O] = []), (W[_] = W));
		let X = Symbol.toPrimitive;
		return new Proxy(W, {
			get(K, G, U) {
				if (oe) {
					let te = Symbol(),
						re = new Proxy(
							{ [_]: K, [S]: U, [v]: [G], [X]: () => te },
							{
								get: (Z, ee) =>
									[_, S, v, e, X].includes(ee)
										? Z[ee]
										: ((ee = Se.get(ee) || ee), Z[v].push(ee), re),
							},
						);
					return (Se.set(te, re), re);
				}
				return Reflect.get(K, G, U);
			},
			set(K, G, U) {
				let te = Reflect.set(K, G, U);
				for (let re of K[O]) re(K, G, U);
				return (K[T] && K[T](K, G, K[G]), te);
			},
		});
	}
	let M = (W) => W instanceof Object;
	function $(W) {
		return M(W) && O in W;
	}
	function J(W) {
		return M(W) && v in W;
	}
	function V(W) {
		return M(W) && e in W;
	}
	function F(W) {
		return W[e].length != 0;
	}
	function D(W, X) {
		V(W);
		let ce,
			K = W[S],
			G = W[e],
			U = [];
		function te() {
			let ee = K[_];
			for (ce of U) if (((ee = ee[ce]), !M(ee))) break;
			for (let se of G) ee = se(ee);
			X(ee);
		}
		let re = (ee, se) =>
			function de(xe, ve, we) {
				if (ve === U[se] && ee === xe && (te(), M(we))) {
					let Te = we[O];
					Te && !Te.includes(de) && Te.push(re(we[_], se + 1));
				}
			};
		for (let ee in K[v]) {
			let se = K[v][ee];
			M(se) && se[_]
				? D(se, (de) => {
						((U[ee] = de), te());
					})
				: (U[ee] = se);
		}
		let Z = re(K[_], 0);
		(K[_][O].push(Z), Z(K[_], U[0], K[_][U[0]]));
	}
	function B(W, X, ce) {
		let K, G, U, te;
		D(W, (re) => {
			((U = G?.[0]),
				U && (K = U.previousSibling || (te = U.parentNode)),
				G && G.forEach((Z) => Z.remove()),
				(G = ge(ce ? (re ? ce.then : ce.otherwise) : re, (Z) => {
					K ? (te ? (K.prepend(Z), (te = null)) : K.after(Z), (K = Z)) : X(Z);
				})));
		});
	}
	let ae = (W) => (X) => {
		let ce = W[S],
			K = W[v],
			G = 0;
		for (; G < K.length - 1; G++) if (((ce = ce[K[G]]), !M(ce))) return;
		ce[K[G]] = X;
	};
	function ye(W, X, ...ce) {
		if (W == P) return ce;
		if (typeof W == "function") {
			let U = z(Object.create(W.prototype));
			for (let se in X) {
				let de = X[se];
				if (se.startsWith("bind:")) {
					(V(de), F(de));
					let xe = ae(de[S]),
						ve = se.substring(5);
					if (ve == "this") xe(U);
					else {
						let we = !1;
						(D(de, (Te) => {
							we ? (we = !1) : ((we = !0), (U[ve] = Te));
						}),
							D(use(U[ve]), (Te) => {
								we ? (we = !1) : ((we = !0), xe(Te));
							}));
					}
					delete X[se];
				} else V(de) && (D(de, (xe) => (U[se] = xe)), delete X[se]);
			}
			(Object.assign(U, X), (U.children = []));
			for (let se of ce) ge(se, U.children.push.bind(U.children));
			let te = W.apply(U);
			((te.$ = U), (U.root = te));
			let re = te.classList,
				Z = U.css,
				ee = W.name.replace(/\$/g, "-");
			return (
				Z && re.add(ne(`${ee}-${N()}`, Z, !0)),
				U._leak || re.add(j),
				te.setAttribute("data-component", W.name),
				typeof U.mount == "function" && U.mount(),
				te
			);
		}
		let K = X?.xmlns,
			G = K ? ue.createElementNS(K, W) : ue.createElement(W);
		for (let U of ce) ge(U, G.append.bind(G));
		if (!X) return G;
		((U, te) => {
			U in X && (te(X[U]), delete X[U]);
		})("class", (U) => {
			if (
				(typeof U == "string" || U instanceof Array || V(U),
				typeof U != "string")
			)
				if (V(U)) {
					let te = "";
					D(U, (re) => {
						for (let Z of te.split(" ")) Z && G.classList.remove(Z);
						if (typeof re == "string") {
							for (let Z of re.split(" ")) Z && G.classList.add(Z);
							te = re;
						}
					});
				} else
					for (let te of U)
						if (V(te)) {
							let re = null;
							D(te, (Z) => {
								(typeof re == "string" && G.classList.remove(re),
									G.classList.add(Z),
									(re = Z));
							});
						} else G.classList.add(te);
			else G.setAttribute("class", U);
		});
		for (let U in X) {
			let te = X[U];
			if (U.startsWith("bind:")) {
				(V(te), F(te));
				let re = U.substring(5),
					Z = ae(te[S]);
				(re == "this"
					? Z(G)
					: re == "value"
						? (D(te, (ee) => (G.value = ee)),
							G.addEventListener("change", () => Z(G.value)))
						: re == "checked" &&
							(D(te, (ee) => (G.checked = ee)),
							G.addEventListener("click", () => Z(G.checked))),
					delete X[U]);
			}
			if (U.startsWith("class:")) {
				let re = U.substring(6);
				(V(te)
					? D(te, (Z) => {
							Z ? G.classList.add(re) : G.classList.remove(re);
						})
					: te && G.classList.add(re),
					delete X[U]);
			}
			if (U == "style" && M(te) && !V(te)) {
				for (let re in te) {
					let Z = $(te) ? use(te[re]) : te[re];
					V(Z) ? D(Z, (ee) => (G.style[re] = ee)) : (G.style[re] = Z);
				}
				delete X[U];
			}
		}
		for (let U in X) {
			let te = X[U];
			V(te)
				? D(te, (re) => {
						Ae(G, U, re);
					})
				: Ae(G, U, te);
		}
		return (K && (G.innerHTML = G.innerHTML), G);
	}
	function ge(W, X) {
		let ce, K, G;
		if (V(W)) B(W, X);
		else {
			if (!M(W) || !(L in W)) {
				if (W instanceof Node) return (X(W), [W]);
				if (W instanceof Array) {
					for (ce of ((K = []), W)) K = K.concat(ge(ce, X));
					return (K[0] || (K = ge("", X)), K);
				}
				return (W == null && (W = ""), (G = ue.createTextNode(W)), X(G), [G]);
			}
			B(W[L], X, W);
		}
	}
	function Ae(W, X, ce) {
		if ((!ce && W.hasAttribute(X) && W.removeAttribute(X), ce))
			if (X.startsWith("on:")) {
				let K = X.substring(3);
				for (let G of K.split("$"))
					W.addEventListener(G, (...U) => {
						((self.$el = W), ce(...U));
					});
			} else W.setAttribute(X, ce);
	}
	((x.$if = function (W, X, ce) {
		return (
			(ce ??= ue.createTextNode("")),
			V(W) ? { [L]: W, then: X, otherwise: ce } : W ? X : ce
		);
	}),
		(x.$state = z),
		(x.$store = function (W, { ident: X, backing: ce, autosave: K }) {
			let G, U;
			typeof ce == "string"
				? ce === "localstorage" &&
					((G = () => localStorage.getItem(X)),
					(U = (ee, se) => {
						localStorage.setItem(ee, se);
					}))
				: ({ read: G, write: U } = ce);
			let te = () => {
					console.info("[dreamland.js]: saving " + X);
					let ee = {},
						se = 0,
						de = (ve) => {
							let we = { stateful: $(ve), values: {} },
								Te = se++;
							ee[Te] = we;
							for (let Re in ve) {
								let Le = ve[Re];
								if (!V(Le))
									switch (typeof Le) {
										case "string":
										case "number":
										case "boolean":
										case "undefined":
											we.values[Re] = JSON.stringify(Le);
											break;
										case "object":
											if (Le instanceof Array) {
												we.values[Re] = Le.map((Ce) =>
													typeof Ce == "object" ? de(Ce) : JSON.stringify(Ce),
												);
												break;
											}
											Le === null
												? (we.values[Re] = "null")
												: (Le.__proto__, (we.values[Re] = de(Le)));
									}
							}
							return Te;
						};
					de(W);
					let xe = JSON.stringify(ee);
					U(X, xe);
				},
				re = (ee, se, de) => {
					($(de) && (de[_][T] = re), te());
				},
				Z = JSON.parse(G(X));
			if (Z) {
				let ee = {},
					se = (de) => {
						if (ee[de]) return ee[de];
						let xe = Z[de],
							ve = {};
						for (let Te in xe.values) {
							let Re = xe.values[Te];
							ve[Te] =
								typeof Re == "string"
									? JSON.parse(Re)
									: Re instanceof Array
										? Re.map((Le) =>
												typeof Le == "string" ? JSON.parse(Le) : se(Le),
											)
										: se(Re);
						}
						xe.stateful && K == "auto" && (ve[T] = re);
						let we = xe.stateful ? z(ve) : ve;
						return ((ee[de] = we), we);
					};
				W = se(0);
			}
			switch (K) {
				case "beforeunload":
					addEventListener("beforeunload", te);
					break;
				case "manual":
					break;
				case "auto":
					W[T] = re;
			}
			return z(W);
		}),
		(x.Fragment = P),
		(x.css = le),
		(x.h = ye),
		(x.html = function (W, ...X) {
			W = [...W];
			let ce = "",
				K = {};
			for (let U = 0; U < W.length; U++) {
				let te = W[U],
					re = X[U],
					Z = X[U] instanceof Function && /^ *\/>/.exec(W[U + 1]);
				if (
					(/< *$/.test(te) &&
						Z &&
						(W[U + 1] = W[U + 1].substr(Z.index + Z[0].length)),
					(ce += te),
					U < X.length)
				) {
					let ee,
						se = Object.values(K).findIndex((de) => de === re);
					(se !== -1
						? (ee = Object.keys(K)[se])
						: ((ee = "h" + N()), (K[ee] = re)),
						(ce += ee),
						Z && (ce += `></${ee}>`));
				}
			}
			let G = new DOMParser().parseFromString(ce, "text/html");
			return (
				G.body.children.length,
				(function U(te) {
					let re = te.nodeName.toLowerCase();
					if (re === "#text") return te.textContent;
					re in K && (re = K[re]);
					let Z = [...te.childNodes].map(U);
					for (let se = 0; se < Z.length; se++) {
						let de = Z[se];
						if (typeof de == "string")
							for (const [xe, ve] of Object.entries(K)) {
								if (!de) break;
								if (!de.includes(xe)) continue;
								let we;
								(([we, de] = de.split(xe)),
									(Z = [...Z.slice(0, se), we, ve, de, ...Z.slice(se + 1)]),
									(se += 2));
							}
					}
					let ee = {};
					if (!te.attributes) return te;
					for (const se of [...te.attributes]) {
						let de = se.nodeValue;
						(de in K && (de = K[de]), (ee[se.name] = de));
					}
					return ye(re, ee, Z);
				})(G.body.children[0])
			);
		}),
		(x.isDLPtr = V),
		(x.isStateful = $),
		(x.scope = q));
})(window);
function ws_protocol() {
	return ("10000000-1000-4000-8000" + -1e11).replace(/[018]/g, (x) =>
		(
			x ^
			(crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (x / 4)))
		).toString(16),
	);
}
function object_get(x, e) {
	try {
		return x[e];
	} catch {
		return;
	}
}
function object_set(x, e, _) {
	try {
		x[e] = _;
	} catch {}
}
async function convert_body_inner(x) {
	let e = new Request("", { method: "POST", duplex: "half", body: x }),
		_ = e.headers.get("content-type");
	return [new Uint8Array(await e.arrayBuffer()), _];
}
async function convert_streaming_body_inner(x) {
	try {
		let e = new Request("", { method: "POST", body: x }),
			_ = e.headers.get("content-type");
		return [!1, new Uint8Array(await e.arrayBuffer()), _];
	} catch {
		let _ = new Request("", { method: "POST", duplex: "half", body: x }),
			S = _.headers.get("content-type");
		return [!0, _.body, S];
	}
}
function entries_of_object_inner(x) {
	return Object.entries(x).map((e) => e.map(String));
}
function define_property(x, e, _) {
	Object.defineProperty(x, e, { value: _, writable: !1 });
}
function ws_key() {
	let x = new Uint8Array(16);
	return (crypto.getRandomValues(x), btoa(String.fromCharCode.apply(null, x)));
}
function from_entries(x) {
	for (var e = {}, _ = 0; _ < x.length; _++) e[x[_][0]] = x[_][1];
	return e;
}
let wasm;
const heap = new Array(128).fill(void 0);
heap.push(void 0, null, !0, !1);
function getObject(x) {
	return heap[x];
}
let heap_next = heap.length;
function addHeapObject(x) {
	heap_next === heap.length && heap.push(heap.length + 1);
	const e = heap_next;
	return ((heap_next = heap[e]), (heap[e] = x), e);
}
function isLikeNone(x) {
	return x == null;
}
function handleError(x, e) {
	try {
		return x.apply(this, e);
	} catch (_) {
		wasm.__wbindgen_exn_store(addHeapObject(_));
	}
}
function dropObject(x) {
	x < 132 || ((heap[x] = heap_next), (heap_next = x));
}
function takeObject(x) {
	const e = getObject(x);
	return (dropObject(x), e);
}
const cachedTextDecoder =
	typeof TextDecoder < "u"
		? new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 })
		: {
				decode: () => {
					throw Error("TextDecoder not available");
				},
			};
typeof TextDecoder < "u" && cachedTextDecoder.decode();
let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
	return (
		(cachedUint8ArrayMemory0 === null ||
			cachedUint8ArrayMemory0.byteLength === 0) &&
			(cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer)),
		cachedUint8ArrayMemory0
	);
}
function getStringFromWasm0(x, e) {
	return (
		(x = x >>> 0),
		cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(x, x + e))
	);
}
let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
	return (
		(cachedDataViewMemory0 === null ||
			cachedDataViewMemory0.buffer.detached === !0 ||
			(cachedDataViewMemory0.buffer.detached === void 0 &&
				cachedDataViewMemory0.buffer !== wasm.memory.buffer)) &&
			(cachedDataViewMemory0 = new DataView(wasm.memory.buffer)),
		cachedDataViewMemory0
	);
}
let WASM_VECTOR_LEN = 0;
function passArrayJsValueToWasm0(x, e) {
	const _ = e(x.length * 4, 4) >>> 0,
		S = getDataViewMemory0();
	for (let v = 0; v < x.length; v++)
		S.setUint32(_ + 4 * v, addHeapObject(x[v]), !0);
	return ((WASM_VECTOR_LEN = x.length), _);
}
const cachedTextEncoder =
		typeof TextEncoder < "u"
			? new TextEncoder("utf-8")
			: {
					encode: () => {
						throw Error("TextEncoder not available");
					},
				},
	encodeString =
		typeof cachedTextEncoder.encodeInto == "function"
			? function (x, e) {
					return cachedTextEncoder.encodeInto(x, e);
				}
			: function (x, e) {
					const _ = cachedTextEncoder.encode(x);
					return (e.set(_), { read: x.length, written: _.length });
				};
function passStringToWasm0(x, e, _) {
	if (_ === void 0) {
		const T = cachedTextEncoder.encode(x),
			j = e(T.length, 1) >>> 0;
		return (
			getUint8ArrayMemory0()
				.subarray(j, j + T.length)
				.set(T),
			(WASM_VECTOR_LEN = T.length),
			j
		);
	}
	let S = x.length,
		v = e(S, 1) >>> 0;
	const O = getUint8ArrayMemory0();
	let L = 0;
	for (; L < S; L++) {
		const T = x.charCodeAt(L);
		if (T > 127) break;
		O[v + L] = T;
	}
	if (L !== S) {
		(L !== 0 && (x = x.slice(L)),
			(v = _(v, S, (S = L + x.length * 3), 1) >>> 0));
		const T = getUint8ArrayMemory0().subarray(v + L, v + S),
			j = encodeString(x, T);
		((L += j.written), (v = _(v, S, L, 1) >>> 0));
	}
	return ((WASM_VECTOR_LEN = L), v);
}
function getArrayU8FromWasm0(x, e) {
	return ((x = x >>> 0), getUint8ArrayMemory0().subarray(x / 1, x / 1 + e));
}
const CLOSURE_DTORS =
	typeof FinalizationRegistry > "u"
		? { register: () => {}, unregister: () => {} }
		: new FinalizationRegistry((x) => {
				wasm.__wbindgen_export_3.get(x.dtor)(x.a, x.b);
			});
function makeMutClosure(x, e, _, S) {
	const v = { a: x, b: e, cnt: 1, dtor: _ },
		O = (...L) => {
			v.cnt++;
			const T = v.a;
			v.a = 0;
			try {
				return S(T, v.b, ...L);
			} finally {
				--v.cnt === 0
					? (wasm.__wbindgen_export_3.get(v.dtor)(T, v.b),
						CLOSURE_DTORS.unregister(v))
					: (v.a = T);
			}
		};
	return ((O.original = v), CLOSURE_DTORS.register(O, v, v), O);
}
function makeClosure(x, e, _, S) {
	const v = { a: x, b: e, cnt: 1, dtor: _ },
		O = (...L) => {
			v.cnt++;
			try {
				return S(v.a, v.b, ...L);
			} finally {
				--v.cnt === 0 &&
					(wasm.__wbindgen_export_3.get(v.dtor)(v.a, v.b),
					(v.a = 0),
					CLOSURE_DTORS.unregister(v));
			}
		};
	return ((O.original = v), CLOSURE_DTORS.register(O, v, v), O);
}
function debugString(x) {
	const e = typeof x;
	if (e == "number" || e == "boolean" || x == null) return `${x}`;
	if (e == "string") return `"${x}"`;
	if (e == "symbol") {
		const v = x.description;
		return v == null ? "Symbol" : `Symbol(${v})`;
	}
	if (e == "function") {
		const v = x.name;
		return typeof v == "string" && v.length > 0 ? `Function(${v})` : "Function";
	}
	if (Array.isArray(x)) {
		const v = x.length;
		let O = "[";
		v > 0 && (O += debugString(x[0]));
		for (let L = 1; L < v; L++) O += ", " + debugString(x[L]);
		return ((O += "]"), O);
	}
	const _ = /\[object ([^\]]+)\]/.exec(toString.call(x));
	let S;
	if (_ && _.length > 1) S = _[1];
	else return toString.call(x);
	if (S == "Object")
		try {
			return "Object(" + JSON.stringify(x) + ")";
		} catch {
			return "Object";
		}
	return x instanceof Error
		? `${x.name}: ${x.message}
${x.stack}`
		: S;
}
function getArrayJsValueFromWasm0(x, e) {
	x = x >>> 0;
	const _ = getDataViewMemory0(),
		S = [];
	for (let v = x; v < x + 4 * e; v += 4) S.push(takeObject(_.getUint32(v, !0)));
	return S;
}
function _assertClass(x, e) {
	if (!(x instanceof e)) throw new Error(`expected instance of ${e.name}`);
}
function __wbg_adapter_32(x, e) {
	wasm._dyn_core__ops__function__Fn_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hd3bdd319eab06bae(
		x,
		e,
	);
}
function __wbg_adapter_35(x, e, _) {
	wasm._dyn_core__ops__function__Fn__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hdbe711adc2cc07e4(
		x,
		e,
		addHeapObject(_),
	);
}
function __wbg_adapter_40(x, e, _) {
	wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h37dcdaabe9b4189a(
		x,
		e,
		addHeapObject(_),
	);
}
function __wbg_adapter_43(x, e) {
	wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h62ca192d761bcd0a(
		x,
		e,
	);
}
function __wbg_adapter_169(x, e, _, S) {
	wasm.wasm_bindgen__convert__closures__invoke2_mut__h87dcae41de9150ab(
		x,
		e,
		addHeapObject(_),
		addHeapObject(S),
	);
}
const __wbindgen_enum_BinaryType = ["blob", "arraybuffer"],
	EpoxyClientFinalization =
		typeof FinalizationRegistry > "u"
			? { register: () => {}, unregister: () => {} }
			: new FinalizationRegistry((x) =>
					wasm.__wbg_epoxyclient_free(x >>> 0, 1),
				);
class EpoxyClient {
	toJSON() {
		return {
			redirect_limit: this.redirect_limit,
			user_agent: this.user_agent,
			buffer_size: this.buffer_size,
		};
	}
	toString() {
		return JSON.stringify(this);
	}
	__destroy_into_raw() {
		const e = this.__wbg_ptr;
		return ((this.__wbg_ptr = 0), EpoxyClientFinalization.unregister(this), e);
	}
	free() {
		const e = this.__destroy_into_raw();
		wasm.__wbg_epoxyclient_free(e, 0);
	}
	get redirect_limit() {
		return wasm.__wbg_get_epoxyclient_redirect_limit(this.__wbg_ptr) >>> 0;
	}
	set redirect_limit(e) {
		wasm.__wbg_set_epoxyclient_redirect_limit(this.__wbg_ptr, e);
	}
	get user_agent() {
		let e, _;
		try {
			const O = wasm.__wbindgen_add_to_stack_pointer(-16);
			wasm.__wbg_get_epoxyclient_user_agent(O, this.__wbg_ptr);
			var S = getDataViewMemory0().getInt32(O + 0, !0),
				v = getDataViewMemory0().getInt32(O + 4, !0);
			return ((e = S), (_ = v), getStringFromWasm0(S, v));
		} finally {
			(wasm.__wbindgen_add_to_stack_pointer(16), wasm.__wbindgen_free(e, _, 1));
		}
	}
	set user_agent(e) {
		const _ = passStringToWasm0(
				e,
				wasm.__wbindgen_malloc,
				wasm.__wbindgen_realloc,
			),
			S = WASM_VECTOR_LEN;
		wasm.__wbg_set_epoxyclient_user_agent(this.__wbg_ptr, _, S);
	}
	get buffer_size() {
		return wasm.__wbg_get_epoxyclient_buffer_size(this.__wbg_ptr) >>> 0;
	}
	set buffer_size(e) {
		wasm.__wbg_set_epoxyclient_buffer_size(this.__wbg_ptr, e);
	}
	constructor(e, _) {
		try {
			const T = wasm.__wbindgen_add_to_stack_pointer(-16);
			_assertClass(_, EpoxyClientOptions);
			var S = _.__destroy_into_raw();
			wasm.epoxyclient_new(T, addHeapObject(e), S);
			var v = getDataViewMemory0().getInt32(T + 0, !0),
				O = getDataViewMemory0().getInt32(T + 4, !0),
				L = getDataViewMemory0().getInt32(T + 8, !0);
			if (L) throw takeObject(O);
			return (
				(this.__wbg_ptr = v >>> 0),
				EpoxyClientFinalization.register(this, this.__wbg_ptr, this),
				this
			);
		} finally {
			wasm.__wbindgen_add_to_stack_pointer(16);
		}
	}
	replace_stream_provider() {
		const e = wasm.epoxyclient_replace_stream_provider(this.__wbg_ptr);
		return takeObject(e);
	}
	connect_websocket(e, _, S, v) {
		_assertClass(e, EpoxyHandlers);
		var O = e.__destroy_into_raw();
		const L = passArrayJsValueToWasm0(S, wasm.__wbindgen_malloc),
			T = WASM_VECTOR_LEN,
			j = wasm.epoxyclient_connect_websocket(
				this.__wbg_ptr,
				O,
				addHeapObject(_),
				L,
				T,
				addHeapObject(v),
			);
		return takeObject(j);
	}
	connect_tcp(e) {
		const _ = wasm.epoxyclient_connect_tcp(this.__wbg_ptr, addHeapObject(e));
		return takeObject(_);
	}
	connect_tls(e) {
		const _ = wasm.epoxyclient_connect_tls(this.__wbg_ptr, addHeapObject(e));
		return takeObject(_);
	}
	connect_udp(e) {
		const _ = wasm.epoxyclient_connect_udp(this.__wbg_ptr, addHeapObject(e));
		return takeObject(_);
	}
	fetch(e, _) {
		const S = wasm.epoxyclient_fetch(
			this.__wbg_ptr,
			addHeapObject(e),
			addHeapObject(_),
		);
		return takeObject(S);
	}
}
const EpoxyClientOptionsFinalization =
	typeof FinalizationRegistry > "u"
		? { register: () => {}, unregister: () => {} }
		: new FinalizationRegistry((x) =>
				wasm.__wbg_epoxyclientoptions_free(x >>> 0, 1),
			);
class EpoxyClientOptions {
	__destroy_into_raw() {
		const e = this.__wbg_ptr;
		return (
			(this.__wbg_ptr = 0),
			EpoxyClientOptionsFinalization.unregister(this),
			e
		);
	}
	free() {
		const e = this.__destroy_into_raw();
		wasm.__wbg_epoxyclientoptions_free(e, 0);
	}
	get wisp_v2() {
		return wasm.__wbg_get_epoxyclientoptions_wisp_v2(this.__wbg_ptr) !== 0;
	}
	set wisp_v2(e) {
		wasm.__wbg_set_epoxyclientoptions_wisp_v2(this.__wbg_ptr, e);
	}
	get udp_extension_required() {
		return (
			wasm.__wbg_get_epoxyclientoptions_udp_extension_required(
				this.__wbg_ptr,
			) !== 0
		);
	}
	set udp_extension_required(e) {
		wasm.__wbg_set_epoxyclientoptions_udp_extension_required(this.__wbg_ptr, e);
	}
	get title_case_headers() {
		return (
			wasm.__wbg_get_epoxyclientoptions_title_case_headers(this.__wbg_ptr) !== 0
		);
	}
	set title_case_headers(e) {
		wasm.__wbg_set_epoxyclientoptions_title_case_headers(this.__wbg_ptr, e);
	}
	get ws_title_case_headers() {
		return (
			wasm.__wbg_get_epoxyclientoptions_ws_title_case_headers(
				this.__wbg_ptr,
			) !== 0
		);
	}
	set ws_title_case_headers(e) {
		wasm.__wbg_set_epoxyclientoptions_ws_title_case_headers(this.__wbg_ptr, e);
	}
	get websocket_protocols() {
		try {
			const v = wasm.__wbindgen_add_to_stack_pointer(-16);
			wasm.__wbg_get_epoxyclientoptions_websocket_protocols(v, this.__wbg_ptr);
			var e = getDataViewMemory0().getInt32(v + 0, !0),
				_ = getDataViewMemory0().getInt32(v + 4, !0),
				S = getArrayJsValueFromWasm0(e, _).slice();
			return (wasm.__wbindgen_free(e, _ * 4, 4), S);
		} finally {
			wasm.__wbindgen_add_to_stack_pointer(16);
		}
	}
	set websocket_protocols(e) {
		const _ = passArrayJsValueToWasm0(e, wasm.__wbindgen_malloc),
			S = WASM_VECTOR_LEN;
		wasm.__wbg_set_epoxyclientoptions_websocket_protocols(this.__wbg_ptr, _, S);
	}
	get redirect_limit() {
		return (
			wasm.__wbg_get_epoxyclientoptions_redirect_limit(this.__wbg_ptr) >>> 0
		);
	}
	set redirect_limit(e) {
		wasm.__wbg_set_epoxyclientoptions_redirect_limit(this.__wbg_ptr, e);
	}
	get header_limit() {
		return wasm.__wbg_get_epoxyclientoptions_header_limit(this.__wbg_ptr) >>> 0;
	}
	set header_limit(e) {
		wasm.__wbg_set_epoxyclientoptions_header_limit(this.__wbg_ptr, e);
	}
	get user_agent() {
		let e, _;
		try {
			const O = wasm.__wbindgen_add_to_stack_pointer(-16);
			wasm.__wbg_get_epoxyclientoptions_user_agent(O, this.__wbg_ptr);
			var S = getDataViewMemory0().getInt32(O + 0, !0),
				v = getDataViewMemory0().getInt32(O + 4, !0);
			return ((e = S), (_ = v), getStringFromWasm0(S, v));
		} finally {
			(wasm.__wbindgen_add_to_stack_pointer(16), wasm.__wbindgen_free(e, _, 1));
		}
	}
	set user_agent(e) {
		const _ = passStringToWasm0(
				e,
				wasm.__wbindgen_malloc,
				wasm.__wbindgen_realloc,
			),
			S = WASM_VECTOR_LEN;
		wasm.__wbg_set_epoxyclientoptions_user_agent(this.__wbg_ptr, _, S);
	}
	get pem_files() {
		try {
			const v = wasm.__wbindgen_add_to_stack_pointer(-16);
			wasm.__wbg_get_epoxyclientoptions_pem_files(v, this.__wbg_ptr);
			var e = getDataViewMemory0().getInt32(v + 0, !0),
				_ = getDataViewMemory0().getInt32(v + 4, !0),
				S = getArrayJsValueFromWasm0(e, _).slice();
			return (wasm.__wbindgen_free(e, _ * 4, 4), S);
		} finally {
			wasm.__wbindgen_add_to_stack_pointer(16);
		}
	}
	set pem_files(e) {
		const _ = passArrayJsValueToWasm0(e, wasm.__wbindgen_malloc),
			S = WASM_VECTOR_LEN;
		wasm.__wbg_set_epoxyclientoptions_pem_files(this.__wbg_ptr, _, S);
	}
	get disable_certificate_validation() {
		return (
			wasm.__wbg_get_epoxyclientoptions_disable_certificate_validation(
				this.__wbg_ptr,
			) !== 0
		);
	}
	set disable_certificate_validation(e) {
		wasm.__wbg_set_epoxyclientoptions_disable_certificate_validation(
			this.__wbg_ptr,
			e,
		);
	}
	get buffer_size() {
		return wasm.__wbg_get_epoxyclientoptions_buffer_size(this.__wbg_ptr) >>> 0;
	}
	set buffer_size(e) {
		wasm.__wbg_set_epoxyclientoptions_buffer_size(this.__wbg_ptr, e);
	}
	constructor() {
		const e = wasm.epoxyclientoptions_new_default();
		return (
			(this.__wbg_ptr = e >>> 0),
			EpoxyClientOptionsFinalization.register(this, this.__wbg_ptr, this),
			this
		);
	}
}
const EpoxyHandlersFinalization =
	typeof FinalizationRegistry > "u"
		? { register: () => {}, unregister: () => {} }
		: new FinalizationRegistry((x) =>
				wasm.__wbg_epoxyhandlers_free(x >>> 0, 1),
			);
class EpoxyHandlers {
	__destroy_into_raw() {
		const e = this.__wbg_ptr;
		return (
			(this.__wbg_ptr = 0),
			EpoxyHandlersFinalization.unregister(this),
			e
		);
	}
	free() {
		const e = this.__destroy_into_raw();
		wasm.__wbg_epoxyhandlers_free(e, 0);
	}
	get onopen() {
		const e = wasm.__wbg_get_epoxyhandlers_onopen(this.__wbg_ptr);
		return takeObject(e);
	}
	set onopen(e) {
		wasm.__wbg_set_epoxyhandlers_onopen(this.__wbg_ptr, addHeapObject(e));
	}
	get onclose() {
		const e = wasm.__wbg_get_epoxyhandlers_onclose(this.__wbg_ptr);
		return takeObject(e);
	}
	set onclose(e) {
		wasm.__wbg_set_epoxyhandlers_onclose(this.__wbg_ptr, addHeapObject(e));
	}
	get onerror() {
		const e = wasm.__wbg_get_epoxyhandlers_onerror(this.__wbg_ptr);
		return takeObject(e);
	}
	set onerror(e) {
		wasm.__wbg_set_epoxyhandlers_onerror(this.__wbg_ptr, addHeapObject(e));
	}
	get onmessage() {
		const e = wasm.__wbg_get_epoxyhandlers_onmessage(this.__wbg_ptr);
		return takeObject(e);
	}
	set onmessage(e) {
		wasm.__wbg_set_epoxyhandlers_onmessage(this.__wbg_ptr, addHeapObject(e));
	}
	constructor(e, _, S, v) {
		const O = wasm.epoxyhandlers_new(
			addHeapObject(e),
			addHeapObject(_),
			addHeapObject(S),
			addHeapObject(v),
		);
		return (
			(this.__wbg_ptr = O >>> 0),
			EpoxyHandlersFinalization.register(this, this.__wbg_ptr, this),
			this
		);
	}
}
const EpoxyWebSocketFinalization =
	typeof FinalizationRegistry > "u"
		? { register: () => {}, unregister: () => {} }
		: new FinalizationRegistry((x) =>
				wasm.__wbg_epoxywebsocket_free(x >>> 0, 1),
			);
class EpoxyWebSocket {
	static __wrap(e) {
		e = e >>> 0;
		const _ = Object.create(EpoxyWebSocket.prototype);
		return (
			(_.__wbg_ptr = e),
			EpoxyWebSocketFinalization.register(_, _.__wbg_ptr, _),
			_
		);
	}
	__destroy_into_raw() {
		const e = this.__wbg_ptr;
		return (
			(this.__wbg_ptr = 0),
			EpoxyWebSocketFinalization.unregister(this),
			e
		);
	}
	free() {
		const e = this.__destroy_into_raw();
		wasm.__wbg_epoxywebsocket_free(e, 0);
	}
	send(e) {
		const _ = wasm.epoxywebsocket_send(this.__wbg_ptr, addHeapObject(e));
		return takeObject(_);
	}
	close(e, _) {
		const S = passStringToWasm0(
				_,
				wasm.__wbindgen_malloc,
				wasm.__wbindgen_realloc,
			),
			v = WASM_VECTOR_LEN,
			O = wasm.epoxywebsocket_close(this.__wbg_ptr, e, S, v);
		return takeObject(O);
	}
}
typeof FinalizationRegistry > "u" ||
	new FinalizationRegistry((x) =>
		wasm.__wbg_intounderlyingbytesource_free(x >>> 0, 1),
	);
const IntoUnderlyingSinkFinalization =
	typeof FinalizationRegistry > "u"
		? { register: () => {}, unregister: () => {} }
		: new FinalizationRegistry((x) =>
				wasm.__wbg_intounderlyingsink_free(x >>> 0, 1),
			);
class IntoUnderlyingSink {
	static __wrap(e) {
		e = e >>> 0;
		const _ = Object.create(IntoUnderlyingSink.prototype);
		return (
			(_.__wbg_ptr = e),
			IntoUnderlyingSinkFinalization.register(_, _.__wbg_ptr, _),
			_
		);
	}
	__destroy_into_raw() {
		const e = this.__wbg_ptr;
		return (
			(this.__wbg_ptr = 0),
			IntoUnderlyingSinkFinalization.unregister(this),
			e
		);
	}
	free() {
		const e = this.__destroy_into_raw();
		wasm.__wbg_intounderlyingsink_free(e, 0);
	}
	write(e) {
		const _ = wasm.intounderlyingsink_write(this.__wbg_ptr, addHeapObject(e));
		return takeObject(_);
	}
	close() {
		const e = this.__destroy_into_raw(),
			_ = wasm.intounderlyingsink_close(e);
		return takeObject(_);
	}
	abort(e) {
		const _ = this.__destroy_into_raw(),
			S = wasm.intounderlyingsink_abort(_, addHeapObject(e));
		return takeObject(S);
	}
}
const IntoUnderlyingSourceFinalization =
	typeof FinalizationRegistry > "u"
		? { register: () => {}, unregister: () => {} }
		: new FinalizationRegistry((x) =>
				wasm.__wbg_intounderlyingsource_free(x >>> 0, 1),
			);
class IntoUnderlyingSource {
	static __wrap(e) {
		e = e >>> 0;
		const _ = Object.create(IntoUnderlyingSource.prototype);
		return (
			(_.__wbg_ptr = e),
			IntoUnderlyingSourceFinalization.register(_, _.__wbg_ptr, _),
			_
		);
	}
	__destroy_into_raw() {
		const e = this.__wbg_ptr;
		return (
			(this.__wbg_ptr = 0),
			IntoUnderlyingSourceFinalization.unregister(this),
			e
		);
	}
	free() {
		const e = this.__destroy_into_raw();
		wasm.__wbg_intounderlyingsource_free(e, 0);
	}
	pull(e) {
		const _ = wasm.intounderlyingsource_pull(this.__wbg_ptr, addHeapObject(e));
		return takeObject(_);
	}
	cancel() {
		const e = this.__destroy_into_raw();
		wasm.intounderlyingsource_cancel(e);
	}
}
async function __wbg_load(x, e) {
	if (typeof Response == "function" && x instanceof Response) {
		if (typeof WebAssembly.instantiateStreaming == "function")
			try {
				return await WebAssembly.instantiateStreaming(x, e);
			} catch (S) {
				if (x.headers.get("Content-Type") != "application/wasm")
					console.warn(
						"`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
						S,
					);
				else throw S;
			}
		const _ = await x.arrayBuffer();
		return await WebAssembly.instantiate(_, e);
	} else {
		const _ = await WebAssembly.instantiate(x, e);
		return _ instanceof WebAssembly.Instance ? { instance: _, module: x } : _;
	}
}
function __wbg_get_imports() {
	const x = {};
	return (
		(x.wbg = {}),
		(x.wbg.__wbg_abort_2d215a4bf861d1a2 = function (e) {
			const _ = getObject(e).abort();
			return addHeapObject(_);
		}),
		(x.wbg.__wbg_at_479807bfddde3a33 = function (e, _) {
			const S = getObject(e).at(_);
			return addHeapObject(S);
		}),
		(x.wbg.__wbg_buffer_61b7ce01341d7f88 = function (e) {
			const _ = getObject(e).buffer;
			return addHeapObject(_);
		}),
		(x.wbg.__wbg_buffer_dc5dbfa8d5fb28cf = function (e) {
			const _ = getObject(e).buffer;
			return addHeapObject(_);
		}),
		(x.wbg.__wbg_byobRequest_1fc36a0c1e98611b = function (e) {
			const _ = getObject(e).byobRequest;
			return isLikeNone(_) ? 0 : addHeapObject(_);
		}),
		(x.wbg.__wbg_byteLength_1b2d953758afc500 = function (e) {
			return getObject(e).byteLength;
		}),
		(x.wbg.__wbg_byteOffset_7ef484c6c1d473e9 = function (e) {
			return getObject(e).byteOffset;
		}),
		(x.wbg.__wbg_call_500db948e69c7330 = function () {
			return handleError(function (e, _, S) {
				const v = getObject(e).call(getObject(_), getObject(S));
				return addHeapObject(v);
			}, arguments);
		}),
		(x.wbg.__wbg_call_b0d8e36992d9900d = function () {
			return handleError(function (e, _) {
				const S = getObject(e).call(getObject(_));
				return addHeapObject(S);
			}, arguments);
		}),
		(x.wbg.__wbg_cancel_ac971f285f1e9ab3 = function (e) {
			const _ = getObject(e).cancel();
			return addHeapObject(_);
		}),
		(x.wbg.__wbg_catch_d0fc80129c999ab3 = function (e, _) {
			const S = getObject(e).catch(getObject(_));
			return addHeapObject(S);
		}),
		(x.wbg.__wbg_close_4063e1bcbd6d5fe2 = function () {
			return handleError(function (e) {
				getObject(e).close();
			}, arguments);
		}),
		(x.wbg.__wbg_close_59511bda900d85a8 = function () {
			return handleError(function (e) {
				getObject(e).close();
			}, arguments);
		}),
		(x.wbg.__wbg_close_65cb23eb0316f916 = function () {
			return handleError(function (e) {
				getObject(e).close();
			}, arguments);
		}),
		(x.wbg.__wbg_convertbodyinner_567022e12dbe671d = function () {
			return handleError(function (e) {
				const _ = convert_body_inner(takeObject(e));
				return addHeapObject(_);
			}, arguments);
		}),
		(x.wbg.__wbg_convertstreamingbodyinner_6e59b294ea57edab = function () {
			return handleError(function (e) {
				const _ = convert_streaming_body_inner(takeObject(e));
				return addHeapObject(_);
			}, arguments);
		}),
		(x.wbg.__wbg_crypto_ed58b8e10a292839 = function (e) {
			const _ = getObject(e).crypto;
			return addHeapObject(_);
		}),
		(x.wbg.__wbg_data_4ce8a82394d8b110 = function (e) {
			const _ = getObject(e).data;
			return addHeapObject(_);
		}),
		(x.wbg.__wbg_defineproperty_191d90918b7f6248 = function (e, _, S, v) {
			define_property(getObject(e), getStringFromWasm0(_, S), takeObject(v));
		}),
		(x.wbg.__wbg_enqueue_3997a55771b5212a = function () {
			return handleError(function (e, _) {
				getObject(e).enqueue(getObject(_));
			}, arguments);
		}),
		(x.wbg.__wbg_entriesofobjectinner_ab1a59c8cab0f815 = function (e, _) {
			const S = entries_of_object_inner(getObject(_)),
				v = passArrayJsValueToWasm0(S, wasm.__wbindgen_malloc),
				O = WASM_VECTOR_LEN;
			(getDataViewMemory0().setInt32(e + 4, O, !0),
				getDataViewMemory0().setInt32(e + 0, v, !0));
		}),
		(x.wbg.__wbg_epoxywebsocket_new = function (e) {
			const _ = EpoxyWebSocket.__wrap(e);
			return addHeapObject(_);
		}),
		(x.wbg.__wbg_error_f4add1ed4f180dc2 = function (e, _) {
			console.error(getStringFromWasm0(e, _));
		}),
		(x.wbg.__wbg_from_d68eaa96dba25449 = function (e) {
			const _ = Array.from(getObject(e));
			return addHeapObject(_);
		}),
		(x.wbg.__wbg_fromentries_752aac1fe771623d = function () {
			return handleError(function (e) {
				const _ = from_entries(getObject(e));
				return addHeapObject(_);
			}, arguments);
		}),
		(x.wbg.__wbg_getRandomValues_bcb4912f16000dc4 = function () {
			return handleError(function (e, _) {
				getObject(e).getRandomValues(getObject(_));
			}, arguments);
		}),
		(x.wbg.__wbg_getReader_48e00749fe3f6089 = function () {
			return handleError(function (e) {
				const _ = getObject(e).getReader();
				return addHeapObject(_);
			}, arguments);
		}),
		(x.wbg.__wbg_getWriter_dd1c7a1972bcd348 = function () {
			return handleError(function (e) {
				const _ = getObject(e).getWriter();
				return addHeapObject(_);
			}, arguments);
		}),
		(x.wbg.__wbg_get_9aa3dff3f0266054 = function (e, _) {
			const S = getObject(e)[_ >>> 0];
			return addHeapObject(S);
		}),
		(x.wbg.__wbg_get_bbccf8970793c087 = function () {
			return handleError(function (e, _) {
				const S = Reflect.get(getObject(e), getObject(_));
				return addHeapObject(S);
			}, arguments);
		}),
		(x.wbg.__wbg_getdone_c9ef3af0d247e580 = function (e) {
			const _ = getObject(e).done;
			return isLikeNone(_) ? 16777215 : _ ? 1 : 0;
		}),
		(x.wbg.__wbg_getvalue_3597a1222fac0ae0 = function (e) {
			const _ = getObject(e).value;
			return addHeapObject(_);
		}),
		(x.wbg.__wbg_href_e02c8426b1c9033d = function (e, _) {
			const S = getObject(_).href,
				v = passStringToWasm0(
					S,
					wasm.__wbindgen_malloc,
					wasm.__wbindgen_realloc,
				),
				O = WASM_VECTOR_LEN;
			(getDataViewMemory0().setInt32(e + 4, O, !0),
				getDataViewMemory0().setInt32(e + 0, v, !0));
		}),
		(x.wbg.__wbg_instanceof_ArrayBuffer_670ddde44cdb2602 = function (e) {
			let _;
			try {
				_ = getObject(e) instanceof ArrayBuffer;
			} catch {
				_ = !1;
			}
			return _;
		}),
		(x.wbg.__wbg_instanceof_Error_2b29c5b4afac4e22 = function (e) {
			let _;
			try {
				_ = getObject(e) instanceof Error;
			} catch {
				_ = !1;
			}
			return _;
		}),
		(x.wbg.__wbg_instanceof_Headers_a54ae4b841040dde = function (e) {
			let _;
			try {
				_ = getObject(e) instanceof Headers;
			} catch {
				_ = !1;
			}
			return _;
		}),
		(x.wbg.__wbg_instanceof_Promise_0aa3a90cfe6672c9 = function (e) {
			let _;
			try {
				_ = getObject(e) instanceof Promise;
			} catch {
				_ = !1;
			}
			return _;
		}),
		(x.wbg.__wbg_instanceof_Url_e66a981eb3cc407a = function (e) {
			let _;
			try {
				_ = getObject(e) instanceof URL;
			} catch {
				_ = !1;
			}
			return _;
		}),
		(x.wbg.__wbg_length_65d1cd11729ced11 = function (e) {
			return getObject(e).length;
		}),
		(x.wbg.__wbg_length_d65cf0786bfc5739 = function (e) {
			return getObject(e).length;
		}),
		(x.wbg.__wbg_log_2f95d903e184aa9a = function (e, _) {
			console.log(getStringFromWasm0(e, _));
		}),
		(x.wbg.__wbg_msCrypto_0a36e2ec3a343d26 = function (e) {
			const _ = getObject(e).msCrypto;
			return addHeapObject(_);
		}),
		(x.wbg.__wbg_new_254fa9eac11932ae = function () {
			const e = new Array();
			return addHeapObject(e);
		}),
		(x.wbg.__wbg_new_3d446df9155128ef = function (e, _) {
			try {
				var S = { a: e, b: _ },
					v = (L, T) => {
						const j = S.a;
						S.a = 0;
						try {
							return __wbg_adapter_169(j, S.b, L, T);
						} finally {
							S.a = j;
						}
					};
				const O = new Promise(v);
				return addHeapObject(O);
			} finally {
				S.a = S.b = 0;
			}
		}),
		(x.wbg.__wbg_new_3ff5b33b1ce712df = function (e) {
			const _ = new Uint8Array(getObject(e));
			return addHeapObject(_);
		}),
		(x.wbg.__wbg_new_6799ef630abee97c = function (e, _) {
			const S = new Error(getStringFromWasm0(e, _));
			return addHeapObject(S);
		}),
		(x.wbg.__wbg_new_688846f374351c92 = function () {
			const e = new Object();
			return addHeapObject(e);
		}),
		(x.wbg.__wbg_new_9b6c38191d7b9512 = function () {
			return handleError(function (e, _) {
				const S = new WebSocket(getStringFromWasm0(e, _));
				return addHeapObject(S);
			}, arguments);
		}),
		(x.wbg.__wbg_newnoargs_fd9e4bf8be2bc16d = function (e, _) {
			const S = new Function(getStringFromWasm0(e, _));
			return addHeapObject(S);
		}),
		(x.wbg.__wbg_newwithbyteoffsetandlength_ba35896968751d91 = function (
			e,
			_,
			S,
		) {
			const v = new Uint8Array(getObject(e), _ >>> 0, S >>> 0);
			return addHeapObject(v);
		}),
		(x.wbg.__wbg_newwithintounderlyingsink_08f1a3e40fc70d83 = function (e) {
			const _ = new WritableStream(IntoUnderlyingSink.__wrap(e));
			return addHeapObject(_);
		}),
		(x.wbg.__wbg_newwithintounderlyingsource_b47f6a6a596a7f24 = function (
			e,
			_,
		) {
			const S = new ReadableStream(
				IntoUnderlyingSource.__wrap(e),
				takeObject(_),
			);
			return addHeapObject(S);
		}),
		(x.wbg.__wbg_newwithlength_34ce8f1051e74449 = function (e) {
			const _ = new Uint8Array(e >>> 0);
			return addHeapObject(_);
		}),
		(x.wbg.__wbg_newwithoptreadablestreamandinit_79299cc49f3b9bdd =
			function () {
				return handleError(function (e, _) {
					const S = new Response(getObject(e), getObject(_));
					return addHeapObject(S);
				}, arguments);
			}),
		(x.wbg.__wbg_newwithstrsequence_5b5601fc2c0bff30 = function () {
			return handleError(function (e, _, S) {
				const v = new WebSocket(getStringFromWasm0(e, _), getObject(S));
				return addHeapObject(v);
			}, arguments);
		}),
		(x.wbg.__wbg_node_02999533c4ea02e3 = function (e) {
			const _ = getObject(e).node;
			return addHeapObject(_);
		}),
		(x.wbg.__wbg_now_62a101fe35b60230 = function (e) {
			return getObject(e).now();
		}),
		(x.wbg.__wbg_now_64d0bb151e5d3889 = function () {
			return Date.now();
		}),
		(x.wbg.__wbg_now_71123b9940376874 = function (e) {
			return getObject(e).now();
		}),
		(x.wbg.__wbg_objectget_27e77920d8f6dba4 = function (e, _, S) {
			const v = object_get(getObject(e), getStringFromWasm0(_, S));
			return addHeapObject(v);
		}),
		(x.wbg.__wbg_objectset_aa9d510c6eb29bc3 = function (e, _, S, v) {
			object_set(getObject(e), getStringFromWasm0(_, S), takeObject(v));
		}),
		(x.wbg.__wbg_of_437cdae2760f8b94 = function (e, _) {
			const S = Array.of(getObject(e), getObject(_));
			return addHeapObject(S);
		}),
		(x.wbg.__wbg_performance_1a2515c93daf8b0c = function (e) {
			const _ = getObject(e).performance;
			return addHeapObject(_);
		}),
		(x.wbg.__wbg_process_5c1d670bc53614b8 = function (e) {
			const _ = getObject(e).process;
			return addHeapObject(_);
		}),
		(x.wbg.__wbg_push_6edad0df4b546b2c = function (e, _) {
			return getObject(e).push(getObject(_));
		}),
		(x.wbg.__wbg_queueMicrotask_2181040e064c0dc8 = function (e) {
			queueMicrotask(getObject(e));
		}),
		(x.wbg.__wbg_queueMicrotask_ef9ac43769cbcc4f = function (e) {
			const _ = getObject(e).queueMicrotask;
			return addHeapObject(_);
		}),
		(x.wbg.__wbg_randomFillSync_ab2cfe79ebbf2740 = function () {
			return handleError(function (e, _) {
				getObject(e).randomFillSync(takeObject(_));
			}, arguments);
		}),
		(x.wbg.__wbg_read_4d173e86f707008c = function (e) {
			const _ = getObject(e).read();
			return addHeapObject(_);
		}),
		(x.wbg.__wbg_readyState_236b61903e1dbb47 = function (e) {
			return getObject(e).readyState;
		}),
		(x.wbg.__wbg_releaseLock_2d9136d592a32095 = function (e) {
			getObject(e).releaseLock();
		}),
		(x.wbg.__wbg_require_79b1e9274cde3c87 = function () {
			return handleError(function () {
				const e = module.require;
				return addHeapObject(e);
			}, arguments);
		}),
		(x.wbg.__wbg_resolve_0bf7c44d641804f9 = function (e) {
			const _ = Promise.resolve(getObject(e));
			return addHeapObject(_);
		}),
		(x.wbg.__wbg_respond_88fe7338392675f2 = function () {
			return handleError(function (e, _) {
				getObject(e).respond(_ >>> 0);
			}, arguments);
		}),
		(x.wbg.__wbg_send_c2b76ede40fcced1 = function () {
			return handleError(function (e, _, S) {
				getObject(e).send(getArrayU8FromWasm0(_, S));
			}, arguments);
		}),
		(x.wbg.__wbg_setTimeout_efd7c11531df1743 = function () {
			return handleError(function (e, _, S) {
				return getObject(e).setTimeout(getObject(_), S);
			}, arguments);
		}),
		(x.wbg.__wbg_set_23d69db4e5c66a6e = function (e, _, S) {
			getObject(e).set(getObject(_), S >>> 0);
		}),
		(x.wbg.__wbg_setbinaryType_3fa4a9e8d2cc506f = function (e, _) {
			getObject(e).binaryType = __wbindgen_enum_BinaryType[_];
		}),
		(x.wbg.__wbg_setheaders_9d4b8241e8063a9f = function (e, _) {
			getObject(e).headers = getObject(_);
		}),
		(x.wbg.__wbg_sethighwatermark_af796d9564f89270 = function (e, _) {
			getObject(e).highWaterMark = _;
		}),
		(x.wbg.__wbg_setonclose_f9c609d8c9938fa5 = function (e, _) {
			getObject(e).onclose = getObject(_);
		}),
		(x.wbg.__wbg_setonerror_8ae2b387470ec52e = function (e, _) {
			getObject(e).onerror = getObject(_);
		}),
		(x.wbg.__wbg_setonmessage_5e7ade2af360de9d = function (e, _) {
			getObject(e).onmessage = getObject(_);
		}),
		(x.wbg.__wbg_setonopen_54faa9e83483da1d = function (e, _) {
			getObject(e).onopen = getObject(_);
		}),
		(x.wbg.__wbg_setstatus_9b90889d616b0586 = function (e, _) {
			getObject(e).status = _;
		}),
		(x.wbg.__wbg_setstatustext_414bdc4b61159b75 = function (e, _, S) {
			getObject(e).statusText = getStringFromWasm0(_, S);
		}),
		(x.wbg.__wbg_static_accessor_GLOBAL_0be7472e492ad3e3 = function () {
			const e = typeof global > "u" ? null : global;
			return isLikeNone(e) ? 0 : addHeapObject(e);
		}),
		(x.wbg.__wbg_static_accessor_GLOBAL_THIS_1a6eb482d12c9bfb = function () {
			const e = typeof globalThis > "u" ? null : globalThis;
			return isLikeNone(e) ? 0 : addHeapObject(e);
		}),
		(x.wbg.__wbg_static_accessor_SELF_1dc398a895c82351 = function () {
			const e = typeof self > "u" ? null : self;
			return isLikeNone(e) ? 0 : addHeapObject(e);
		}),
		(x.wbg.__wbg_static_accessor_WINDOW_ae1c80c7eea8d64a = function () {
			const e = typeof window > "u" ? null : window;
			return isLikeNone(e) ? 0 : addHeapObject(e);
		}),
		(x.wbg.__wbg_subarray_46adeb9b86949d12 = function (e, _, S) {
			const v = getObject(e).subarray(_ >>> 0, S >>> 0);
			return addHeapObject(v);
		}),
		(x.wbg.__wbg_tee_15d2d039bef462ae = function () {
			return handleError(function (e) {
				const _ = getObject(e).tee();
				return addHeapObject(_);
			}, arguments);
		}),
		(x.wbg.__wbg_then_0438fad860fe38e1 = function (e, _) {
			const S = getObject(e).then(getObject(_));
			return addHeapObject(S);
		}),
		(x.wbg.__wbg_then_0ffafeddf0e182a4 = function (e, _, S) {
			const v = getObject(e).then(getObject(_), getObject(S));
			return addHeapObject(v);
		}),
		(x.wbg.__wbg_toString_cbcf95f260c441ae = function (e) {
			const _ = getObject(e).toString();
			return addHeapObject(_);
		}),
		(x.wbg.__wbg_versions_c71aa1626a93e0a1 = function (e) {
			const _ = getObject(e).versions;
			return addHeapObject(_);
		}),
		(x.wbg.__wbg_view_a03cbb1d55c73e57 = function (e) {
			const _ = getObject(e).view;
			return isLikeNone(_) ? 0 : addHeapObject(_);
		}),
		(x.wbg.__wbg_write_0aea81ae26043440 = function (e, _) {
			const S = getObject(e).write(getObject(_));
			return addHeapObject(S);
		}),
		(x.wbg.__wbg_wskey_c8415c057e84eaff = function (e) {
			const _ = ws_key(),
				S = passStringToWasm0(
					_,
					wasm.__wbindgen_malloc,
					wasm.__wbindgen_realloc,
				),
				v = WASM_VECTOR_LEN;
			(getDataViewMemory0().setInt32(e + 4, v, !0),
				getDataViewMemory0().setInt32(e + 0, S, !0));
		}),
		(x.wbg.__wbg_wsprotocol_b497ba0bd4aa0a6e = function (e) {
			const _ = ws_protocol(),
				S = passStringToWasm0(
					_,
					wasm.__wbindgen_malloc,
					wasm.__wbindgen_realloc,
				),
				v = WASM_VECTOR_LEN;
			(getDataViewMemory0().setInt32(e + 4, v, !0),
				getDataViewMemory0().setInt32(e + 0, S, !0));
		}),
		(x.wbg.__wbindgen_cb_drop = function (e) {
			const _ = takeObject(e).original;
			return _.cnt-- == 1 ? ((_.a = 0), !0) : !1;
		}),
		(x.wbg.__wbindgen_closure_wrapper1458 = function (e, _, S) {
			const v = makeMutClosure(e, _, 212, __wbg_adapter_40);
			return addHeapObject(v);
		}),
		(x.wbg.__wbindgen_closure_wrapper4222 = function (e, _, S) {
			const v = makeMutClosure(e, _, 212, __wbg_adapter_43);
			return addHeapObject(v);
		}),
		(x.wbg.__wbindgen_closure_wrapper477 = function (e, _, S) {
			const v = makeClosure(e, _, 19, __wbg_adapter_32);
			return addHeapObject(v);
		}),
		(x.wbg.__wbindgen_closure_wrapper479 = function (e, _, S) {
			const v = makeClosure(e, _, 19, __wbg_adapter_35);
			return addHeapObject(v);
		}),
		(x.wbg.__wbindgen_closure_wrapper481 = function (e, _, S) {
			const v = makeClosure(e, _, 19, __wbg_adapter_35);
			return addHeapObject(v);
		}),
		(x.wbg.__wbindgen_debug_string = function (e, _) {
			const S = debugString(getObject(_)),
				v = passStringToWasm0(
					S,
					wasm.__wbindgen_malloc,
					wasm.__wbindgen_realloc,
				),
				O = WASM_VECTOR_LEN;
			(getDataViewMemory0().setInt32(e + 4, O, !0),
				getDataViewMemory0().setInt32(e + 0, v, !0));
		}),
		(x.wbg.__wbindgen_error_new = function (e, _) {
			const S = new Error(getStringFromWasm0(e, _));
			return addHeapObject(S);
		}),
		(x.wbg.__wbindgen_is_array = function (e) {
			return Array.isArray(getObject(e));
		}),
		(x.wbg.__wbindgen_is_falsy = function (e) {
			return !getObject(e);
		}),
		(x.wbg.__wbindgen_is_function = function (e) {
			return typeof getObject(e) == "function";
		}),
		(x.wbg.__wbindgen_is_object = function (e) {
			const _ = getObject(e);
			return typeof _ == "object" && _ !== null;
		}),
		(x.wbg.__wbindgen_is_string = function (e) {
			return typeof getObject(e) == "string";
		}),
		(x.wbg.__wbindgen_is_undefined = function (e) {
			return getObject(e) === void 0;
		}),
		(x.wbg.__wbindgen_memory = function () {
			const e = wasm.memory;
			return addHeapObject(e);
		}),
		(x.wbg.__wbindgen_object_clone_ref = function (e) {
			const _ = getObject(e);
			return addHeapObject(_);
		}),
		(x.wbg.__wbindgen_object_drop_ref = function (e) {
			takeObject(e);
		}),
		(x.wbg.__wbindgen_string_get = function (e, _) {
			const S = getObject(_),
				v = typeof S == "string" ? S : void 0;
			var O = isLikeNone(v)
					? 0
					: passStringToWasm0(
							v,
							wasm.__wbindgen_malloc,
							wasm.__wbindgen_realloc,
						),
				L = WASM_VECTOR_LEN;
			(getDataViewMemory0().setInt32(e + 4, L, !0),
				getDataViewMemory0().setInt32(e + 0, O, !0));
		}),
		(x.wbg.__wbindgen_string_new = function (e, _) {
			const S = getStringFromWasm0(e, _);
			return addHeapObject(S);
		}),
		(x.wbg.__wbindgen_throw = function (e, _) {
			throw new Error(getStringFromWasm0(e, _));
		}),
		x
	);
}
function __wbg_finalize_init(x, e) {
	return (
		(wasm = x.exports),
		(__wbg_init.__wbindgen_wasm_module = e),
		(cachedDataViewMemory0 = null),
		(cachedUint8ArrayMemory0 = null),
		wasm
	);
}
async function __wbg_init(x) {
	if (wasm !== void 0) return;
	(typeof x < "u" &&
		(Object.getPrototypeOf(x) === Object.prototype
			? ({ module_or_path: x } = x)
			: console.warn(
					"using deprecated parameters for the initialization function; pass a single object instead",
				)),
		typeof x > "u" &&
			(x = new URL(
				"" + new URL("epoxy.wasm", import.meta.url).href,
				import.meta.url,
			)));
	const e = __wbg_get_imports();
	(typeof x == "string" ||
		(typeof Request == "function" && x instanceof Request) ||
		(typeof URL == "function" && x instanceof URL)) &&
		(x = fetch(x));
	const { instance: _, module: S } = await __wbg_load(await x, e);
	__wbg_finalize_init(_, S);
}
const info = {
		version: "2.1.17-1",
		release: !0,
		commit: "2e8ac98d79f687b0f26f799207cae1824f5edcbb",
	},
	EPOXY_PATH = "" + new URL("epoxy.wasm", import.meta.url).href;
let store = $store(
		{
			theme:
				window.matchMedia &&
				window.matchMedia("(prefers-color-scheme: light)").matches
					? "light"
					: "dark",
			wisp: "wss://anura.pro/",
			epoxyVersion: "",
		},
		{ ident: "options", backing: "localstorage", autosave: "auto" },
	),
	epoxyVersion = info.version + info.commit + info.release,
	cache = await window.caches.open("epoxy"),
	initted = !1,
	currentClient,
	currentWispUrl;
async function evict() {
	await cache.delete(EPOXY_PATH);
}
async function instantiate() {
	(await cache.match(EPOXY_PATH)) || (await cache.add(EPOXY_PATH));
	const x = await cache.match(EPOXY_PATH);
	(await __wbg_init({ module_or_path: x }), (initted = !0));
}
async function tryInit() {
	(initted ||
		(epoxyVersion === store.epoxyVersion
			? await instantiate()
			: (await evict(),
				await instantiate(),
				console.log(
					`evicted epoxy "${store.epoxyVersion}" from cache because epoxy "${epoxyVersion}" is available`,
				),
				(store.epoxyVersion = epoxyVersion))),
		currentWispUrl !== store.wisp && (await createEpoxy()));
}
function getWispUrl() {
	return currentWispUrl;
}
async function createEpoxy() {
	let x = new EpoxyClientOptions();
	((x.user_agent =
		navigator.userAgent + " Terraria/WASM TerrariaWasm/" + location.hostname),
		(x.udp_extension_required = !1),
		(currentWispUrl = store.wisp),
		(currentClient = new EpoxyClient(currentWispUrl, x)));
}
async function epoxyFetchStreaming(x, e) {
	return (await tryInit(), await currentClient.fetch(x, e));
}
async function epoxyFetch(x, e) {
	await tryInit();
	try {
		return await currentClient.fetch(x, e);
	} catch (_) {
		let S = _;
		throw (console.log(S), S);
	}
}
const WebSocketFields = {
	CLOSED: WebSocket.CLOSED,
	CLOSING: WebSocket.CLOSING,
	CONNECTING: WebSocket.CONNECTING,
	OPEN: WebSocket.OPEN,
};
class EpxTcpWs extends EventTarget {
	url;
	readyState = WebSocketFields.CONNECTING;
	ws;
	binaryType = "blob";
	bufferedAmount = 0;
	onopen;
	onclose;
	onmessage;
	onerror;
	realOnClose;
	constructor(e, _) {
		(super(), (this.url = e.toString()));
		const S = () => {
				this.readyState = WebSocketFields.OPEN;
				const T = new Event("open");
				(this.dispatchEvent(T), this.onopen && this.onopen(T));
			},
			v = async (T) => {
				let j;
				this.binaryType === "blob"
					? (j = new Blob([T]))
					: this.binaryType === "arraybuffer" && (j = T.buffer);
				const A = new MessageEvent("message", { data: j });
				(this.dispatchEvent(A), this.onmessage && this.onmessage(A));
			},
			O = (T, j) => {
				this.readyState = WebSocketFields.CLOSED;
				const A = new CloseEvent("close", { code: T, reason: j });
				(this.dispatchEvent(A), this.onclose && this.onclose(A));
			};
		this.realOnClose = O;
		const L = () => {
			this.readyState = WebSocketFields.CLOSED;
			const T = new Event("error");
			(this.dispatchEvent(T), this.onerror && this.onerror(T));
		};
		if (!["tcp", "udp", "tls"].includes(_)) throw "invalid";
		(async () => {
			await tryInit();
			let T = null;
			try {
				_ === "tcp"
					? (T = await currentClient.connect_tcp(e))
					: _ === "udp"
						? (T = await currentClient.connect_udp(e))
						: _ === "tls" && (T = await currentClient.connect_tls(e));
			} catch (N) {
				(console.error("tcpws connect error", N), L());
				return;
			}
			this.ws = T.write.getWriter();
			const j = T.read.getReader();
			((this.readyState = WebSocketFields.OPEN), S());
			let A = !1;
			for (;;)
				try {
					const { value: N, done: ie } = await j.read();
					if (ie || !N) break;
					v(N);
				} catch (N) {
					(L(), console.error(N), (A = !0));
					break;
				}
			((this.readyState = WebSocketFields.CLOSED),
				O(A ? 1011 : 1e3, A ? "epoxy.ts errored" : "normal"));
		})();
	}
	send(...e) {
		if (this.readyState === WebSocketFields.CONNECTING || !this.ws)
			throw new DOMException(
				"Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.",
			);
		let _ = e[0];
		(_.buffer &&
			(_ = _.buffer.slice(_.byteOffset, _.byteOffset + _.byteLength)),
			this.bufferedAmount++,
			this.ws.write(_).then(() => {
				this.bufferedAmount--;
			}));
	}
	close(e, _) {
		this.readyState === WebSocketFields.OPEN &&
			((this.readyState = WebSocketFields.CLOSING),
			this.ws?.close().then((S) => console.log("really closed", S)),
			(this.readyState = WebSocketFields.CLOSED),
			this.realOnClose(1e3, "normal"));
	}
}
self.epoxyFetch = epoxyFetch;
const gameState = $state({
		qr: null,
		ready: !1,
		loginstate: 0,
		playing: !1,
		logbuf: [],
	}),
	dotnet = (await eval('import("../_framework/dotnet.js")')).dotnet;
let exports$1;
function encryptRSA(x, e, _) {
	const S = (j, A, N) => {
			let ie = 1n;
			for (j = j % N; A > 0n; )
				(A % 2n === 1n && (ie = (ie * j) % N),
					(A = A >> 1n),
					(j = (j * j) % N));
			return ie;
		},
		O = ((j, A) => {
			const N = j.length,
				ie = Math.ceil(A.toString(16).length / 2);
			if (N > ie - 11) throw new Error("Message too long for RSA encryption");
			const le = ie - N - 3,
				q = Array(le).fill(255);
			return BigInt(
				"0x" +
					[
						"00",
						"02",
						...q.map((ne) => ne.toString(16).padStart(2, "0")),
						"00",
						...Array.from(j).map((ne) => ne.toString(16).padStart(2, "0")),
					].join(""),
			);
		})(x, e);
	let T = S(O, _, e).toString(16);
	return (
		T.length % 2 && (T = "0" + T),
		new Uint8Array(
			Array.from(T.match(/.{2}/g) || []).map((j) => parseInt(j, 16)),
		)
	);
}
const realFetch = window.fetch;
async function preInit() {
	console.debug("initializing dotnet");
	const x = await dotnet
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
		.withResourceLoader((_, S, v, O, L) => {
			if (_ === "dotnetwasm" && L === "dotnetwasm")
				return (async () => {
					let T = 0,
						j = async () => {
							let q = await realFetch(v + T);
							if ((T++, !q.body)) throw new Error("no body in fetch response");
							return q.status === 200
								? q.body.getReader()
								: null;
						},
						A = await j();
					if (!A) throw new Error("failed to fetch first chunk");
					let N = A,
						ie = new ReadableStream({
							async pull(q) {
								let { value: ne, done: ue } = await N.read();
								ue || !ne
									? ((A = await j()),
										A ? ((N = A), await this.pull(q)) : q.close())
									: q.enqueue(ne);
							},
						});
					return new Response(ie, {
						headers: new Headers({ "Content-Type": "application/wasm" }),
					});
				})();
		})
		.create();
	(console.log("loading epoxy"),
		(window.WebSocket = new Proxy(WebSocket, {
			construct(_, S, v) {
				const O = new URL(S[0]);
				return S[0] === getWispUrl() || O.host === location.host
					? Reflect.construct(_, S, v)
					: O.hostname.startsWith("__terraria_wisp_proxy_ws__")
						? new EpxTcpWs(
								O.pathname.substring(1),
								O.hostname.replace("__terraria_wisp_proxy_ws__", ""),
							)
						: new EpxWs(...S);
			},
		})),
		(window.fetch = epoxyFetch));
	const e = x.getConfig();
	((exports$1 = await x.getAssemblyExports(e.mainAssemblyName)),
		(window.exports = exports$1),
		x.setModuleImports("interop.js", {
			encryptrsa: (_, S, v) => {
				let O = BigInt("0x" + _),
					L = BigInt("0x" + S),
					T = encryptRSA(v, O, L);
				return new Uint8Array(T);
			},
		}),
		x.setModuleImports("depot.js", {
			newqr: (_) => {
				gameState.qr = _;
			},
		}),
		(self.wasm = {
			Module: x.Module,
			dotnet,
			runtime: x,
			config: e,
			exports: exports$1,
		}),
		console.debug("PreInit..."),
		await x.runMain(),
		await exports$1.Program.PreInit(),
		console.debug("dotnet initialized"),
		(gameState.ready = !0));
}
async function play() {
	((gameState.playing = !0), console.debug("Init..."));
	const x = performance.now();
	await exports$1.Program.Init(screen.width, screen.height);
	const e = performance.now();
	(console.debug(`Init : ${(e - x).toFixed(2)}ms`),
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
	} catch (x) {
		console.log("keyboard lock error:", x);
	}
});
document.addEventListener("keydown", (x) => {
	gameState.playing &&
		[
			"Space",
			"ArrowUp",
			"ArrowDown",
			"ArrowLeft",
			"ArrowRight",
			"Tab",
		].includes(x.code) &&
		x.preventDefault();
});
function proxyConsole(x, e) {
	const _ = console[x].bind(console);
	console[x] = (...S) => {
		let v;
		try {
			v = S.join(" ");
		} catch {
			v = "<failed to render>";
		}
		(_(...S),
			(gameState.logbuf = [
				{ color: e, log: `[${new Date().toISOString()}]: ${v}` },
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
		const x = (e, _) => {
			const S = document.createElement("div");
			return ((S.innerText = _), (S.style.color = e), S);
		};
		return (
			(this.mount = () => {
				useChange([gameState.logbuf], () => {
					if (gameState.logbuf.length > 0) {
						for (const e of gameState.logbuf)
							this.root.appendChild(x(e.color, e.log));
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
function getDefaultExportFromCjs(x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default")
		? x.default
		: x;
}
function getAugmentedNamespace(x) {
	if (Object.prototype.hasOwnProperty.call(x, "__esModule")) return x;
	var e = x.default;
	if (typeof e == "function") {
		var _ = function S() {
			return this instanceof S
				? Reflect.construct(e, arguments, this.constructor)
				: e.apply(this, arguments);
		};
		_.prototype = e.prototype;
	} else _ = {};
	return (
		Object.defineProperty(_, "__esModule", { value: !0 }),
		Object.keys(x).forEach(function (S) {
			var v = Object.getOwnPropertyDescriptor(x, S);
			Object.defineProperty(
				_,
				S,
				v.get
					? v
					: {
							enumerable: !0,
							get: function () {
								return x[S];
							},
						},
			);
		}),
		_
	);
}
var tarStream = {},
	events = { exports: {} },
	hasRequiredEvents;
function requireEvents() {
	if (hasRequiredEvents) return events.exports;
	hasRequiredEvents = 1;
	var x = typeof Reflect == "object" ? Reflect : null,
		e =
			x && typeof x.apply == "function"
				? x.apply
				: function (M, $, J) {
						return Function.prototype.apply.call(M, $, J);
					},
		_;
	x && typeof x.ownKeys == "function"
		? (_ = x.ownKeys)
		: Object.getOwnPropertySymbols
			? (_ = function (M) {
					return Object.getOwnPropertyNames(M).concat(
						Object.getOwnPropertySymbols(M),
					);
				})
			: (_ = function (M) {
					return Object.getOwnPropertyNames(M);
				});
	function S(z) {
		console && console.warn && console.warn(z);
	}
	var v =
		Number.isNaN ||
		function (M) {
			return M !== M;
		};
	function O() {
		O.init.call(this);
	}
	((events.exports = O),
		(events.exports.once = oe),
		(O.EventEmitter = O),
		(O.prototype._events = void 0),
		(O.prototype._eventsCount = 0),
		(O.prototype._maxListeners = void 0));
	var L = 10;
	function T(z) {
		if (typeof z != "function")
			throw new TypeError(
				'The "listener" argument must be of type Function. Received type ' +
					typeof z,
			);
	}
	(Object.defineProperty(O, "defaultMaxListeners", {
		enumerable: !0,
		get: function () {
			return L;
		},
		set: function (z) {
			if (typeof z != "number" || z < 0 || v(z))
				throw new RangeError(
					'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
						z +
						".",
				);
			L = z;
		},
	}),
		(O.init = function () {
			((this._events === void 0 ||
				this._events === Object.getPrototypeOf(this)._events) &&
				((this._events = Object.create(null)), (this._eventsCount = 0)),
				(this._maxListeners = this._maxListeners || void 0));
		}),
		(O.prototype.setMaxListeners = function (M) {
			if (typeof M != "number" || M < 0 || v(M))
				throw new RangeError(
					'The value of "n" is out of range. It must be a non-negative number. Received ' +
						M +
						".",
				);
			return ((this._maxListeners = M), this);
		}));
	function j(z) {
		return z._maxListeners === void 0 ? O.defaultMaxListeners : z._maxListeners;
	}
	((O.prototype.getMaxListeners = function () {
		return j(this);
	}),
		(O.prototype.emit = function (M) {
			for (var $ = [], J = 1; J < arguments.length; J++) $.push(arguments[J]);
			var V = M === "error",
				F = this._events;
			if (F !== void 0) V = V && F.error === void 0;
			else if (!V) return !1;
			if (V) {
				var D;
				if (($.length > 0 && (D = $[0]), D instanceof Error)) throw D;
				var B = new Error(
					"Unhandled error." + (D ? " (" + D.message + ")" : ""),
				);
				throw ((B.context = D), B);
			}
			var ae = F[M];
			if (ae === void 0) return !1;
			if (typeof ae == "function") e(ae, this, $);
			else
				for (var ye = ae.length, ge = ne(ae, ye), J = 0; J < ye; ++J)
					e(ge[J], this, $);
			return !0;
		}));
	function A(z, M, $, J) {
		var V, F, D;
		if (
			(T($),
			(F = z._events),
			F === void 0
				? ((F = z._events = Object.create(null)), (z._eventsCount = 0))
				: (F.newListener !== void 0 &&
						(z.emit("newListener", M, $.listener ? $.listener : $),
						(F = z._events)),
					(D = F[M])),
			D === void 0)
		)
			((D = F[M] = $), ++z._eventsCount);
		else if (
			(typeof D == "function"
				? (D = F[M] = J ? [$, D] : [D, $])
				: J
					? D.unshift($)
					: D.push($),
			(V = j(z)),
			V > 0 && D.length > V && !D.warned)
		) {
			D.warned = !0;
			var B = new Error(
				"Possible EventEmitter memory leak detected. " +
					D.length +
					" " +
					String(M) +
					" listeners added. Use emitter.setMaxListeners() to increase limit",
			);
			((B.name = "MaxListenersExceededWarning"),
				(B.emitter = z),
				(B.type = M),
				(B.count = D.length),
				S(B));
		}
		return z;
	}
	((O.prototype.addListener = function (M, $) {
		return A(this, M, $, !1);
	}),
		(O.prototype.on = O.prototype.addListener),
		(O.prototype.prependListener = function (M, $) {
			return A(this, M, $, !0);
		}));
	function N() {
		if (!this.fired)
			return (
				this.target.removeListener(this.type, this.wrapFn),
				(this.fired = !0),
				arguments.length === 0
					? this.listener.call(this.target)
					: this.listener.apply(this.target, arguments)
			);
	}
	function ie(z, M, $) {
		var J = { fired: !1, wrapFn: void 0, target: z, type: M, listener: $ },
			V = N.bind(J);
		return ((V.listener = $), (J.wrapFn = V), V);
	}
	((O.prototype.once = function (M, $) {
		return (T($), this.on(M, ie(this, M, $)), this);
	}),
		(O.prototype.prependOnceListener = function (M, $) {
			return (T($), this.prependListener(M, ie(this, M, $)), this);
		}),
		(O.prototype.removeListener = function (M, $) {
			var J, V, F, D, B;
			if ((T($), (V = this._events), V === void 0)) return this;
			if (((J = V[M]), J === void 0)) return this;
			if (J === $ || J.listener === $)
				--this._eventsCount === 0
					? (this._events = Object.create(null))
					: (delete V[M],
						V.removeListener &&
							this.emit("removeListener", M, J.listener || $));
			else if (typeof J != "function") {
				for (F = -1, D = J.length - 1; D >= 0; D--)
					if (J[D] === $ || J[D].listener === $) {
						((B = J[D].listener), (F = D));
						break;
					}
				if (F < 0) return this;
				(F === 0 ? J.shift() : ue(J, F),
					J.length === 1 && (V[M] = J[0]),
					V.removeListener !== void 0 &&
						this.emit("removeListener", M, B || $));
			}
			return this;
		}),
		(O.prototype.off = O.prototype.removeListener),
		(O.prototype.removeAllListeners = function (M) {
			var $, J, V;
			if (((J = this._events), J === void 0)) return this;
			if (J.removeListener === void 0)
				return (
					arguments.length === 0
						? ((this._events = Object.create(null)), (this._eventsCount = 0))
						: J[M] !== void 0 &&
							(--this._eventsCount === 0
								? (this._events = Object.create(null))
								: delete J[M]),
					this
				);
			if (arguments.length === 0) {
				var F = Object.keys(J),
					D;
				for (V = 0; V < F.length; ++V)
					((D = F[V]), D !== "removeListener" && this.removeAllListeners(D));
				return (
					this.removeAllListeners("removeListener"),
					(this._events = Object.create(null)),
					(this._eventsCount = 0),
					this
				);
			}
			if ((($ = J[M]), typeof $ == "function")) this.removeListener(M, $);
			else if ($ !== void 0)
				for (V = $.length - 1; V >= 0; V--) this.removeListener(M, $[V]);
			return this;
		}));
	function le(z, M, $) {
		var J = z._events;
		if (J === void 0) return [];
		var V = J[M];
		return V === void 0
			? []
			: typeof V == "function"
				? $
					? [V.listener || V]
					: [V]
				: $
					? P(V)
					: ne(V, V.length);
	}
	((O.prototype.listeners = function (M) {
		return le(this, M, !0);
	}),
		(O.prototype.rawListeners = function (M) {
			return le(this, M, !1);
		}),
		(O.listenerCount = function (z, M) {
			return typeof z.listenerCount == "function"
				? z.listenerCount(M)
				: q.call(z, M);
		}),
		(O.prototype.listenerCount = q));
	function q(z) {
		var M = this._events;
		if (M !== void 0) {
			var $ = M[z];
			if (typeof $ == "function") return 1;
			if ($ !== void 0) return $.length;
		}
		return 0;
	}
	O.prototype.eventNames = function () {
		return this._eventsCount > 0 ? _(this._events) : [];
	};
	function ne(z, M) {
		for (var $ = new Array(M), J = 0; J < M; ++J) $[J] = z[J];
		return $;
	}
	function ue(z, M) {
		for (; M + 1 < z.length; M++) z[M] = z[M + 1];
		z.pop();
	}
	function P(z) {
		for (var M = new Array(z.length), $ = 0; $ < M.length; ++$)
			M[$] = z[$].listener || z[$];
		return M;
	}
	function oe(z, M) {
		return new Promise(function ($, J) {
			function V(D) {
				(z.removeListener(M, F), J(D));
			}
			function F() {
				(typeof z.removeListener == "function" && z.removeListener("error", V),
					$([].slice.call(arguments)));
			}
			(Se(z, M, F, { once: !0 }), M !== "error" && pe(z, V, { once: !0 }));
		});
	}
	function pe(z, M, $) {
		typeof z.on == "function" && Se(z, "error", M, $);
	}
	function Se(z, M, $, J) {
		if (typeof z.on == "function") J.once ? z.once(M, $) : z.on(M, $);
		else if (typeof z.addEventListener == "function")
			z.addEventListener(M, function V(F) {
				(J.once && z.removeEventListener(M, V), $(F));
			});
		else
			throw new TypeError(
				'The "emitter" argument must be of type EventEmitter. Received type ' +
					typeof z,
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
				constructor(e) {
					if (!(e > 0) || ((e - 1) & e) !== 0)
						throw new Error(
							"Max size for a FixedFIFO should be a power of two",
						);
					((this.buffer = new Array(e)),
						(this.mask = e - 1),
						(this.top = 0),
						(this.btm = 0),
						(this.next = null));
				}
				clear() {
					((this.top = this.btm = 0),
						(this.next = null),
						this.buffer.fill(void 0));
				}
				push(e) {
					return this.buffer[this.top] !== void 0
						? !1
						: ((this.buffer[this.top] = e),
							(this.top = (this.top + 1) & this.mask),
							!0);
				}
				shift() {
					const e = this.buffer[this.btm];
					if (e !== void 0)
						return (
							(this.buffer[this.btm] = void 0),
							(this.btm = (this.btm + 1) & this.mask),
							e
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
	const x = requireFixedSize();
	return (
		(fastFifo = class {
			constructor(_) {
				((this.hwm = _ || 16),
					(this.head = new x(this.hwm)),
					(this.tail = this.head),
					(this.length = 0));
			}
			clear() {
				((this.head = this.tail), this.head.clear(), (this.length = 0));
			}
			push(_) {
				if ((this.length++, !this.head.push(_))) {
					const S = this.head;
					((this.head = S.next = new x(2 * this.head.buffer.length)),
						this.head.push(_));
				}
			}
			shift() {
				this.length !== 0 && this.length--;
				const _ = this.tail.shift();
				if (_ === void 0 && this.tail.next) {
					const S = this.tail.next;
					return ((this.tail.next = null), (this.tail = S), this.tail.shift());
				}
				return _;
			}
			peek() {
				const _ = this.tail.peek();
				return _ === void 0 && this.tail.next ? this.tail.next.peek() : _;
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
	function x(S) {
		return S.length;
	}
	function e(S) {
		const v = S.byteLength;
		let O = "";
		for (let L = 0; L < v; L++) O += String.fromCharCode(S[L] & 127);
		return O;
	}
	function _(S, v) {
		const O = S.byteLength;
		for (let L = 0; L < O; L++) S[L] = v.charCodeAt(L);
		return O;
	}
	return ((ascii = { byteLength: x, toString: e, write: _ }), ascii);
}
var base64, hasRequiredBase64;
function requireBase64() {
	if (hasRequiredBase64) return base64;
	hasRequiredBase64 = 1;
	const x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
		e = new Uint8Array(256);
	for (let O = 0; O < x.length; O++) e[x.charCodeAt(O)] = O;
	((e[45] = 62), (e[95] = 63));
	function _(O) {
		let L = O.length;
		return (
			O.charCodeAt(L - 1) === 61 && L--,
			L > 1 && O.charCodeAt(L - 1) === 61 && L--,
			(L * 3) >>> 2
		);
	}
	function S(O) {
		const L = O.byteLength;
		let T = "";
		for (let j = 0; j < L; j += 3)
			T +=
				x[O[j] >> 2] +
				x[((O[j] & 3) << 4) | (O[j + 1] >> 4)] +
				x[((O[j + 1] & 15) << 2) | (O[j + 2] >> 6)] +
				x[O[j + 2] & 63];
		return (
			L % 3 === 2
				? (T = T.substring(0, T.length - 1) + "=")
				: L % 3 === 1 && (T = T.substring(0, T.length - 2) + "=="),
			T
		);
	}
	function v(O, L) {
		const T = O.byteLength;
		for (let j = 0, A = 0; A < T; j += 4) {
			const N = e[L.charCodeAt(j)],
				ie = e[L.charCodeAt(j + 1)],
				le = e[L.charCodeAt(j + 2)],
				q = e[L.charCodeAt(j + 3)];
			((O[A++] = (N << 2) | (ie >> 4)),
				(O[A++] = ((ie & 15) << 4) | (le >> 2)),
				(O[A++] = ((le & 3) << 6) | (q & 63)));
		}
		return T;
	}
	return ((base64 = { byteLength: _, toString: S, write: v }), base64);
}
var hex, hasRequiredHex;
function requireHex() {
	if (hasRequiredHex) return hex;
	hasRequiredHex = 1;
	function x(v) {
		return v.length >>> 1;
	}
	function e(v) {
		const O = v.byteLength;
		v = new DataView(v.buffer, v.byteOffset, O);
		let L = "",
			T = 0;
		for (let j = O - (O % 4); T < j; T += 4)
			L += v.getUint32(T).toString(16).padStart(8, "0");
		for (; T < O; T++) L += v.getUint8(T).toString(16).padStart(2, "0");
		return L;
	}
	function _(v, O) {
		const L = v.byteLength;
		for (let T = 0; T < L; T++) {
			const j = S(O.charCodeAt(T * 2)),
				A = S(O.charCodeAt(T * 2 + 1));
			if (j === void 0 || A === void 0) return v.subarray(0, T);
			v[T] = (j << 4) | A;
		}
		return L;
	}
	hex = { byteLength: x, toString: e, write: _ };
	function S(v) {
		if (v >= 48 && v <= 57) return v - 48;
		if (v >= 65 && v <= 70) return v - 65 + 10;
		if (v >= 97 && v <= 102) return v - 97 + 10;
	}
	return hex;
}
var latin1, hasRequiredLatin1;
function requireLatin1() {
	if (hasRequiredLatin1) return latin1;
	hasRequiredLatin1 = 1;
	function x(S) {
		return S.length;
	}
	function e(S) {
		const v = S.byteLength;
		let O = "";
		for (let L = 0; L < v; L++) O += String.fromCharCode(S[L]);
		return O;
	}
	function _(S, v) {
		const O = S.byteLength;
		for (let L = 0; L < O; L++) S[L] = v.charCodeAt(L);
		return O;
	}
	return ((latin1 = { byteLength: x, toString: e, write: _ }), latin1);
}
var utf8, hasRequiredUtf8;
function requireUtf8() {
	if (hasRequiredUtf8) return utf8;
	hasRequiredUtf8 = 1;
	function x(S) {
		let v = 0;
		for (let O = 0, L = S.length; O < L; O++) {
			const T = S.charCodeAt(O);
			if (T >= 55296 && T <= 56319 && O + 1 < L) {
				const j = S.charCodeAt(O + 1);
				if (j >= 56320 && j <= 57343) {
					((v += 4), O++);
					continue;
				}
			}
			T <= 127 ? (v += 1) : T <= 2047 ? (v += 2) : (v += 3);
		}
		return v;
	}
	let e;
	if (typeof TextDecoder < "u") {
		const S = new TextDecoder();
		e = function (O) {
			return S.decode(O);
		};
	} else
		e = function (v) {
			const O = v.byteLength;
			let L = "",
				T = 0;
			for (; T < O; ) {
				let j = v[T];
				if (j <= 127) {
					((L += String.fromCharCode(j)), T++);
					continue;
				}
				let A = 0,
					N = 0;
				if (
					(j <= 223
						? ((A = 1), (N = j & 31))
						: j <= 239
							? ((A = 2), (N = j & 15))
							: j <= 244 && ((A = 3), (N = j & 7)),
					O - T - A > 0)
				) {
					let ie = 0;
					for (; ie < A; )
						((j = v[T + ie + 1]), (N = (N << 6) | (j & 63)), (ie += 1));
				} else ((N = 65533), (A = O - T));
				((L += String.fromCodePoint(N)), (T += A + 1));
			}
			return L;
		};
	let _;
	if (typeof TextEncoder < "u") {
		const S = new TextEncoder();
		_ = function (O, L) {
			return S.encodeInto(L, O).written;
		};
	} else
		_ = function (v, O) {
			const L = v.byteLength;
			let T = 0,
				j = 0;
			for (; T < O.length; ) {
				const A = O.codePointAt(T);
				if (A <= 127) {
					((v[j++] = A), T++);
					continue;
				}
				let N = 0,
					ie = 0;
				for (
					A <= 2047
						? ((N = 6), (ie = 192))
						: A <= 65535
							? ((N = 12), (ie = 224))
							: A <= 2097151 && ((N = 18), (ie = 240)),
						v[j++] = ie | (A >> N),
						N -= 6;
					N >= 0;
				)
					((v[j++] = 128 | ((A >> N) & 63)), (N -= 6));
				T += A >= 65536 ? 2 : 1;
			}
			return L;
		};
	return ((utf8 = { byteLength: x, toString: e, write: _ }), utf8);
}
var utf16le, hasRequiredUtf16le;
function requireUtf16le() {
	if (hasRequiredUtf16le) return utf16le;
	hasRequiredUtf16le = 1;
	function x(S) {
		return S.length * 2;
	}
	function e(S) {
		const v = S.byteLength;
		let O = "";
		for (let L = 0; L < v - 1; L += 2)
			O += String.fromCharCode(S[L] + S[L + 1] * 256);
		return O;
	}
	function _(S, v) {
		const O = S.byteLength;
		let L = O;
		for (let T = 0; T < v.length && !((L -= 2) < 0); ++T) {
			const j = v.charCodeAt(T),
				A = j >> 8,
				N = j % 256;
			((S[T * 2] = N), (S[T * 2 + 1] = A));
		}
		return O;
	}
	return ((utf16le = { byteLength: x, toString: e, write: _ }), utf16le);
}
var hasRequiredBrowser;
function requireBrowser() {
	return (
		hasRequiredBrowser ||
			((hasRequiredBrowser = 1),
			(function (x, e) {
				const _ = requireAscii(),
					S = requireBase64(),
					v = requireHex(),
					O = requireLatin1(),
					L = requireUtf8(),
					T = requireUtf16le(),
					j = new Uint8Array(Uint16Array.of(255).buffer)[0] === 255;
				function A(R) {
					switch (R) {
						case "ascii":
							return _;
						case "base64":
							return S;
						case "hex":
							return v;
						case "binary":
						case "latin1":
							return O;
						case "utf8":
						case "utf-8":
						case void 0:
						case null:
							return L;
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return T;
						default:
							throw new Error(`Unknown encoding '${R}'`);
					}
				}
				function N(R) {
					return R instanceof Uint8Array;
				}
				function ie(R) {
					try {
						return (A(R), !0);
					} catch {
						return !1;
					}
				}
				function le(R, I, C) {
					const Q = new Uint8Array(R);
					return (I !== void 0 && e.fill(Q, I, 0, Q.byteLength, C), Q);
				}
				function q(R) {
					return new Uint8Array(R);
				}
				function ne(R) {
					return new Uint8Array(R);
				}
				function ue(R, I) {
					return A(I).byteLength(R);
				}
				function P(R, I) {
					if (R === I) return 0;
					const C = Math.min(R.byteLength, I.byteLength);
					((R = new DataView(R.buffer, R.byteOffset, R.byteLength)),
						(I = new DataView(I.buffer, I.byteOffset, I.byteLength)));
					let Q = 0;
					for (let fe = C - (C % 4); Q < fe; Q += 4) {
						const be = R.getUint32(Q, j),
							Ee = I.getUint32(Q, j);
						if (be !== Ee) break;
					}
					for (; Q < C; Q++) {
						const fe = R.getUint8(Q),
							be = I.getUint8(Q);
						if (fe < be) return -1;
						if (fe > be) return 1;
					}
					return R.byteLength > I.byteLength
						? 1
						: R.byteLength < I.byteLength
							? -1
							: 0;
				}
				function oe(R, I) {
					I === void 0 && (I = R.reduce((fe, be) => fe + be.byteLength, 0));
					const C = new Uint8Array(I);
					let Q = 0;
					for (const fe of R) {
						if (Q + fe.byteLength > C.byteLength)
							return (C.set(fe.subarray(0, C.byteLength - Q), Q), C);
						(C.set(fe, Q), (Q += fe.byteLength));
					}
					return C;
				}
				function pe(R, I, C = 0, Q = 0, fe = R.byteLength) {
					if ((C < 0 && (C = 0), C >= I.byteLength)) return 0;
					const be = I.byteLength - C;
					if ((Q < 0 && (Q = 0), Q >= R.byteLength || fe <= Q)) return 0;
					(fe > R.byteLength && (fe = R.byteLength),
						fe - Q > be && (fe = Q + be));
					const Ee = fe - Q;
					return (
						R === I
							? I.copyWithin(C, Q, fe)
							: ((Q !== 0 || fe !== R.byteLength) && (R = R.subarray(Q, fe)),
								I.set(R, C)),
						Ee
					);
				}
				function Se(R, I) {
					return R === I
						? !0
						: R.byteLength !== I.byteLength
							? !1
							: P(R, I) === 0;
				}
				function z(R, I, C = 0, Q = R.byteLength, fe = "utf8") {
					if (
						(typeof I == "string"
							? typeof C == "string"
								? ((fe = C), (C = 0), (Q = R.byteLength))
								: typeof Q == "string" && ((fe = Q), (Q = R.byteLength))
							: typeof I == "number"
								? (I = I & 255)
								: typeof I == "boolean" && (I = +I),
						C < 0 && (C = 0),
						C >= R.byteLength || Q <= C)
					)
						return R;
					if ((Q > R.byteLength && (Q = R.byteLength), typeof I == "number"))
						return R.fill(I, C, Q);
					typeof I == "string" && (I = e.from(I, fe));
					const be = I.byteLength;
					for (let Ee = 0, Ne = Q - C; Ee < Ne; ++Ee) R[Ee + C] = I[Ee % be];
					return R;
				}
				function M(R, I, C) {
					return typeof R == "string"
						? $(R, I)
						: Array.isArray(R)
							? J(R)
							: ArrayBuffer.isView(R)
								? V(R)
								: F(R, I, C);
				}
				function $(R, I) {
					const C = A(I),
						Q = new Uint8Array(C.byteLength(R));
					return (C.write(Q, R), Q);
				}
				function J(R) {
					const I = new Uint8Array(R.length);
					return (I.set(R), I);
				}
				function V(R) {
					const I = new Uint8Array(R.byteLength);
					return (I.set(R), I);
				}
				function F(R, I, C) {
					return new Uint8Array(R, I, C);
				}
				function D(R, I, C, Q) {
					return B(R, I, C, Q) !== -1;
				}
				function B(R, I, C, Q) {
					return ye(R, I, C, Q, !0);
				}
				function ae(R, I, C, Q) {
					return ye(R, I, C, Q, !1);
				}
				function ye(R, I, C, Q, fe) {
					if (R.byteLength === 0) return -1;
					if (
						(typeof C == "string"
							? ((Q = C), (C = 0))
							: C === void 0
								? (C = fe ? 0 : R.length - 1)
								: C < 0 && (C += R.byteLength),
						C >= R.byteLength)
					) {
						if (fe) return -1;
						C = R.byteLength - 1;
					} else if (C < 0)
						if (fe) C = 0;
						else return -1;
					if (typeof I == "string") I = M(I, Q);
					else if (typeof I == "number")
						return ((I = I & 255), fe ? R.indexOf(I, C) : R.lastIndexOf(I, C));
					if (I.byteLength === 0) return -1;
					if (fe) {
						let be = -1;
						for (let Ee = C; Ee < R.byteLength; Ee++)
							if (R[Ee] === I[be === -1 ? 0 : Ee - be]) {
								if ((be === -1 && (be = Ee), Ee - be + 1 === I.byteLength))
									return be;
							} else (be !== -1 && (Ee -= Ee - be), (be = -1));
					} else {
						C + I.byteLength > R.byteLength &&
							(C = R.byteLength - I.byteLength);
						for (let be = C; be >= 0; be--) {
							let Ee = !0;
							for (let Ne = 0; Ne < I.byteLength; Ne++)
								if (R[be + Ne] !== I[Ne]) {
									Ee = !1;
									break;
								}
							if (Ee) return be;
						}
					}
					return -1;
				}
				function ge(R, I, C) {
					const Q = R[I];
					((R[I] = R[C]), (R[C] = Q));
				}
				function Ae(R) {
					const I = R.byteLength;
					if (I % 2 !== 0)
						throw new RangeError("Buffer size must be a multiple of 16-bits");
					for (let C = 0; C < I; C += 2) ge(R, C, C + 1);
					return R;
				}
				function W(R) {
					const I = R.byteLength;
					if (I % 4 !== 0)
						throw new RangeError("Buffer size must be a multiple of 32-bits");
					for (let C = 0; C < I; C += 4) (ge(R, C, C + 3), ge(R, C + 1, C + 2));
					return R;
				}
				function X(R) {
					const I = R.byteLength;
					if (I % 8 !== 0)
						throw new RangeError("Buffer size must be a multiple of 64-bits");
					for (let C = 0; C < I; C += 8)
						(ge(R, C, C + 7),
							ge(R, C + 1, C + 6),
							ge(R, C + 2, C + 5),
							ge(R, C + 3, C + 4));
					return R;
				}
				function ce(R) {
					return R;
				}
				function K(R, I = "utf8", C = 0, Q = R.byteLength) {
					return arguments.length === 1
						? L.toString(R)
						: arguments.length === 2
							? A(I).toString(R)
							: (C < 0 && (C = 0),
								C >= R.byteLength || Q <= C
									? ""
									: (Q > R.byteLength && (Q = R.byteLength),
										(C !== 0 || Q !== R.byteLength) && (R = R.subarray(C, Q)),
										A(I).toString(R)));
				}
				function G(R, I, C, Q, fe) {
					if (arguments.length === 2) return L.write(R, I);
					(typeof C == "string"
						? ((fe = C), (C = 0), (Q = R.byteLength))
						: typeof Q == "string" && ((fe = Q), (Q = R.byteLength - C)),
						(Q = Math.min(Q, e.byteLength(I, fe))));
					let be = C;
					if ((be < 0 && (be = 0), be >= R.byteLength)) return 0;
					let Ee = C + Q;
					return Ee <= be
						? 0
						: (Ee > R.byteLength && (Ee = R.byteLength),
							(be !== 0 || Ee !== R.byteLength) && (R = R.subarray(be, Ee)),
							A(fe).write(R, I));
				}
				function U(R, I = 0) {
					return new DataView(R.buffer, R.byteOffset, R.byteLength).getFloat64(
						I,
						!1,
					);
				}
				function te(R, I = 0) {
					return new DataView(R.buffer, R.byteOffset, R.byteLength).getFloat64(
						I,
						!0,
					);
				}
				function re(R, I = 0) {
					return new DataView(R.buffer, R.byteOffset, R.byteLength).getFloat32(
						I,
						!1,
					);
				}
				function Z(R, I = 0) {
					return new DataView(R.buffer, R.byteOffset, R.byteLength).getFloat32(
						I,
						!0,
					);
				}
				function ee(R, I = 0) {
					return new DataView(R.buffer, R.byteOffset, R.byteLength).getInt32(
						I,
						!1,
					);
				}
				function se(R, I = 0) {
					return new DataView(R.buffer, R.byteOffset, R.byteLength).getInt32(
						I,
						!0,
					);
				}
				function de(R, I = 0) {
					return new DataView(R.buffer, R.byteOffset, R.byteLength).getUint32(
						I,
						!1,
					);
				}
				function xe(R, I = 0) {
					return new DataView(R.buffer, R.byteOffset, R.byteLength).getUint32(
						I,
						!0,
					);
				}
				function ve(R, I, C = 0) {
					return (
						new DataView(R.buffer, R.byteOffset, R.byteLength).setFloat64(
							C,
							I,
							!1,
						),
						C + 8
					);
				}
				function we(R, I, C = 0) {
					return (
						new DataView(R.buffer, R.byteOffset, R.byteLength).setFloat64(
							C,
							I,
							!0,
						),
						C + 8
					);
				}
				function Te(R, I, C = 0) {
					return (
						new DataView(R.buffer, R.byteOffset, R.byteLength).setFloat32(
							C,
							I,
							!1,
						),
						C + 4
					);
				}
				function Re(R, I, C = 0) {
					return (
						new DataView(R.buffer, R.byteOffset, R.byteLength).setFloat32(
							C,
							I,
							!0,
						),
						C + 4
					);
				}
				function Le(R, I, C = 0) {
					return (
						new DataView(R.buffer, R.byteOffset, R.byteLength).setInt32(
							C,
							I,
							!1,
						),
						C + 4
					);
				}
				function Ce(R, I, C = 0) {
					return (
						new DataView(R.buffer, R.byteOffset, R.byteLength).setInt32(
							C,
							I,
							!0,
						),
						C + 4
					);
				}
				function Fe(R, I, C = 0) {
					return (
						new DataView(R.buffer, R.byteOffset, R.byteLength).setUint32(
							C,
							I,
							!1,
						),
						C + 4
					);
				}
				function Pe(R, I, C = 0) {
					return (
						new DataView(R.buffer, R.byteOffset, R.byteLength).setUint32(
							C,
							I,
							!0,
						),
						C + 4
					);
				}
				x.exports = e = {
					isBuffer: N,
					isEncoding: ie,
					alloc: le,
					allocUnsafe: q,
					allocUnsafeSlow: ne,
					byteLength: ue,
					compare: P,
					concat: oe,
					copy: pe,
					equals: Se,
					fill: z,
					from: M,
					includes: D,
					indexOf: B,
					lastIndexOf: ae,
					swap16: Ae,
					swap32: W,
					swap64: X,
					toBuffer: ce,
					toString: K,
					write: G,
					readDoubleBE: U,
					readDoubleLE: te,
					readFloatBE: re,
					readFloatLE: Z,
					readInt32BE: ee,
					readInt32LE: se,
					readUInt32BE: de,
					readUInt32LE: xe,
					writeDoubleBE: ve,
					writeDoubleLE: we,
					writeFloatBE: Te,
					writeFloatLE: Re,
					writeInt32BE: Le,
					writeInt32LE: Ce,
					writeUInt32BE: Fe,
					writeUInt32LE: Pe,
				};
			})(browser, browser.exports)),
		browser.exports
	);
}
var passThroughDecoder, hasRequiredPassThroughDecoder;
function requirePassThroughDecoder() {
	if (hasRequiredPassThroughDecoder) return passThroughDecoder;
	hasRequiredPassThroughDecoder = 1;
	const x = requireBrowser();
	return (
		(passThroughDecoder = class {
			constructor(_) {
				this.encoding = _;
			}
			get remaining() {
				return 0;
			}
			decode(_) {
				return x.toString(_, this.encoding);
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
	const x = requireBrowser();
	utf8Decoder = class {
		constructor() {
			this._reset();
		}
		get remaining() {
			return this.bytesSeen;
		}
		decode(v) {
			if (v.byteLength === 0) return "";
			if (this.bytesNeeded === 0 && e(v, 0) === 0)
				return ((this.bytesSeen = _(v)), x.toString(v, "utf8"));
			let O = "",
				L = 0;
			if (this.bytesNeeded > 0) {
				for (; L < v.byteLength; ) {
					const A = v[L];
					if (A < this.lowerBoundary || A > this.upperBoundary) {
						((O += "�"), this._reset());
						break;
					}
					if (
						((this.lowerBoundary = 128),
						(this.upperBoundary = 191),
						(this.codePoint = (this.codePoint << 6) | (A & 63)),
						this.bytesSeen++,
						L++,
						this.bytesSeen === this.bytesNeeded)
					) {
						((O += String.fromCodePoint(this.codePoint)), this._reset());
						break;
					}
				}
				if (this.bytesNeeded > 0) return O;
			}
			const T = e(v, L),
				j = v.byteLength - T;
			j > L && (O += x.toString(v, "utf8", L, j));
			for (let A = j; A < v.byteLength; A++) {
				const N = v[A];
				if (this.bytesNeeded === 0) {
					N <= 127
						? ((this.bytesSeen = 0), (O += String.fromCharCode(N)))
						: N >= 194 && N <= 223
							? ((this.bytesNeeded = 2),
								(this.bytesSeen = 1),
								(this.codePoint = N & 31))
							: N >= 224 && N <= 239
								? (N === 224
										? (this.lowerBoundary = 160)
										: N === 237 && (this.upperBoundary = 159),
									(this.bytesNeeded = 3),
									(this.bytesSeen = 1),
									(this.codePoint = N & 15))
								: N >= 240 && N <= 244
									? (N === 240
											? (this.lowerBoundary = 144)
											: N === 244 && (this.upperBoundary = 143),
										(this.bytesNeeded = 4),
										(this.bytesSeen = 1),
										(this.codePoint = N & 7))
									: ((this.bytesSeen = 1), (O += "�"));
					continue;
				}
				if (N < this.lowerBoundary || N > this.upperBoundary) {
					((O += "�"), A--, this._reset());
					continue;
				}
				((this.lowerBoundary = 128),
					(this.upperBoundary = 191),
					(this.codePoint = (this.codePoint << 6) | (N & 63)),
					this.bytesSeen++,
					this.bytesSeen === this.bytesNeeded &&
						((O += String.fromCodePoint(this.codePoint)), this._reset()));
			}
			return O;
		}
		flush() {
			const v = this.bytesNeeded > 0 ? "�" : "";
			return (this._reset(), v);
		}
		_reset() {
			((this.codePoint = 0),
				(this.bytesNeeded = 0),
				(this.bytesSeen = 0),
				(this.lowerBoundary = 128),
				(this.upperBoundary = 191));
		}
	};
	function e(S, v) {
		const O = S.byteLength;
		if (O <= v) return 0;
		const L = Math.max(v, O - 4);
		let T = O - 1;
		for (; T > L && (S[T] & 192) === 128; ) T--;
		if (T < v) return 0;
		const j = S[T];
		let A;
		if (j <= 127) return 0;
		if (j >= 194 && j <= 223) A = 2;
		else if (j >= 224 && j <= 239) A = 3;
		else if (j >= 240 && j <= 244) A = 4;
		else return 0;
		const N = O - T;
		return N < A ? N : 0;
	}
	function _(S) {
		const v = S.byteLength;
		if (v === 0) return 0;
		const O = S[v - 1];
		if (O <= 127) return 0;
		if ((O & 192) !== 128) return 1;
		const L = Math.max(0, v - 4);
		let T = v - 2;
		for (; T >= L && (S[T] & 192) === 128; ) T--;
		if (T < 0) return 1;
		const j = S[T];
		let A;
		if (j >= 194 && j <= 223) A = 2;
		else if (j >= 224 && j <= 239) A = 3;
		else if (j >= 240 && j <= 244) A = 4;
		else return 1;
		if (v - T !== A) return 1;
		if (A >= 3) {
			const N = S[T + 1];
			if (
				(j === 224 && N < 160) ||
				(j === 237 && N > 159) ||
				(j === 240 && N < 144) ||
				(j === 244 && N > 143)
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
	const x = requirePassThroughDecoder(),
		e = requireUtf8Decoder();
	textDecoder = class {
		constructor(v = "utf8") {
			switch (((this.encoding = _(v)), this.encoding)) {
				case "utf8":
					this.decoder = new e();
					break;
				case "utf16le":
				case "base64":
					throw new Error("Unsupported encoding: " + this.encoding);
				default:
					this.decoder = new x(this.encoding);
			}
		}
		get remaining() {
			return this.decoder.remaining;
		}
		push(v) {
			return typeof v == "string" ? v : this.decoder.decode(v);
		}
		write(v) {
			return this.push(v);
		}
		end(v) {
			let O = "";
			return (v && (O = this.push(v)), (O += this.decoder.flush()), O);
		}
	};
	function _(S) {
		switch (((S = S.toLowerCase()), S)) {
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
				return S;
			default:
				throw new Error("Unknown encoding: " + S);
		}
	}
	return textDecoder;
}
var streamx, hasRequiredStreamx;
function requireStreamx() {
	if (hasRequiredStreamx) return streamx;
	hasRequiredStreamx = 1;
	const { EventEmitter: x } = require_default(),
		e = new Error("Stream was destroyed"),
		_ = new Error("Premature close"),
		S = requireFastFifo(),
		v = requireTextDecoder(),
		O =
			typeof queueMicrotask > "u"
				? (Y) => commonjsGlobal.process.nextTick(Y)
				: queueMicrotask,
		L = (1 << 29) - 1,
		T = 1,
		j = 2,
		A = 4,
		N = 8,
		ie = L ^ T,
		le = L ^ j,
		q = 16,
		ne = 32,
		ue = 64,
		P = 128,
		oe = 256,
		pe = 512,
		Se = 1024,
		z = 2048,
		M = 4096,
		$ = 8192,
		J = 16384,
		V = 32768,
		F = 65536,
		D = 131072,
		B = oe | pe,
		ae = q | F,
		ye = ue | q,
		ge = M | P,
		Ae = oe | D,
		W = L ^ q,
		X = L ^ ue,
		ce = L ^ (ue | F),
		K = L ^ F,
		G = L ^ oe,
		U = L ^ (P | $),
		te = L ^ Se,
		re = L ^ B,
		Z = L ^ V,
		ee = L ^ ne,
		se = L ^ D,
		de = L ^ Ae,
		xe = 1 << 18,
		ve = 2 << 18,
		we = 4 << 18,
		Te = 8 << 18,
		Re = 16 << 18,
		Le = 32 << 18,
		Ce = 64 << 18,
		Fe = 128 << 18,
		Pe = 256 << 18,
		R = 512 << 18,
		I = 1024 << 18,
		C = L ^ (xe | Pe),
		Q = L ^ we,
		fe = L ^ (xe | R),
		be = L ^ Re,
		Ee = L ^ Te,
		Ne = L ^ Fe,
		ht = L ^ ve,
		Je = L ^ I,
		qe = q | xe,
		Qe = L ^ qe,
		Be = J | Le,
		De = A | N | j,
		je = De | T,
		Xe = De | Be,
		ft = Q & X,
		Ve = Fe | V,
		_t = Ve & Qe,
		Ze = je | _t,
		pt = je | Se | J,
		et = je | J | P,
		gt = je | Se | P,
		bt = je | M | P | $,
		wt = je | q | Se | J | F | D,
		mt = De | Se | J,
		yt = ne | je | V | ue,
		xt = V | T,
		St = je | R | Le,
		vt = Te | Re,
		tt = Te | xe,
		Et = Te | Re | je | xe,
		nt = je | xe | Te | I,
		Ot = we | xe,
		kt = xe | Pe,
		Tt = je | R | tt | Le,
		Lt = Re | De | R | Le,
		Rt = ve | je | Fe | we,
		At = R | Le | De,
		$e = Symbol.asyncIterator || Symbol("asyncIterator");
	class rt {
		constructor(
			E,
			{
				highWaterMark: H = 16384,
				map: he = null,
				mapWritable: _e,
				byteLength: ke,
				byteLengthWritable: Oe,
			} = {},
		) {
			((this.stream = E),
				(this.queue = new S()),
				(this.highWaterMark = H),
				(this.buffered = 0),
				(this.error = null),
				(this.pipeline = null),
				(this.drains = null),
				(this.byteLength = Oe || ke || ut),
				(this.map = _e || he),
				(this.afterWrite = Ft.bind(this)),
				(this.afterUpdateNextTick = Pt.bind(this)));
		}
		get ended() {
			return (this.stream._duplexState & Le) !== 0;
		}
		push(E) {
			return (this.stream._duplexState & At) !== 0
				? !1
				: (this.map !== null && (E = this.map(E)),
					(this.buffered += this.byteLength(E)),
					this.queue.push(E),
					this.buffered < this.highWaterMark
						? ((this.stream._duplexState |= Te), !0)
						: ((this.stream._duplexState |= vt), !1));
		}
		shift() {
			const E = this.queue.shift();
			return (
				(this.buffered -= this.byteLength(E)),
				this.buffered === 0 && (this.stream._duplexState &= Ee),
				E
			);
		}
		end(E) {
			(typeof E == "function"
				? this.stream.once("finish", E)
				: E != null && this.push(E),
				(this.stream._duplexState = (this.stream._duplexState | R) & Q));
		}
		autoBatch(E, H) {
			const he = [],
				_e = this.stream;
			for (he.push(E); (_e._duplexState & nt) === tt; )
				he.push(_e._writableState.shift());
			if ((_e._duplexState & je) !== 0) return H(null);
			_e._writev(he, H);
		}
		update() {
			const E = this.stream;
			E._duplexState |= ve;
			do {
				for (; (E._duplexState & nt) === Te; ) {
					const H = this.shift();
					((E._duplexState |= kt), E._write(H, this.afterWrite));
				}
				(E._duplexState & Ot) === 0 && this.updateNonPrimary();
			} while (this.continueUpdate() === !0);
			E._duplexState &= ht;
		}
		updateNonPrimary() {
			const E = this.stream;
			if ((E._duplexState & Tt) === R) {
				((E._duplexState = E._duplexState | xe), E._final(Nt.bind(this)));
				return;
			}
			if ((E._duplexState & De) === A) {
				(E._duplexState & Ve) === 0 &&
					((E._duplexState |= qe), E._destroy(it.bind(this)));
				return;
			}
			(E._duplexState & Ze) === T &&
				((E._duplexState = (E._duplexState | qe) & ie), E._open(st.bind(this)));
		}
		continueUpdate() {
			return (this.stream._duplexState & Fe) === 0
				? !1
				: ((this.stream._duplexState &= Ne), !0);
		}
		updateCallback() {
			(this.stream._duplexState & Rt) === we
				? this.update()
				: this.updateNextTick();
		}
		updateNextTick() {
			(this.stream._duplexState & Fe) === 0 &&
				((this.stream._duplexState |= Fe),
				(this.stream._duplexState & ve) === 0 && O(this.afterUpdateNextTick));
		}
	}
	class jt {
		constructor(
			E,
			{
				highWaterMark: H = 16384,
				map: he = null,
				mapReadable: _e,
				byteLength: ke,
				byteLengthReadable: Oe,
			} = {},
		) {
			((this.stream = E),
				(this.queue = new S()),
				(this.highWaterMark = H === 0 ? 1 : H),
				(this.buffered = 0),
				(this.readAhead = H > 0),
				(this.error = null),
				(this.pipeline = null),
				(this.byteLength = Oe || ke || ut),
				(this.map = _e || he),
				(this.pipeTo = null),
				(this.afterRead = Wt.bind(this)),
				(this.afterUpdateNextTick = Mt.bind(this)));
		}
		get ended() {
			return (this.stream._duplexState & J) !== 0;
		}
		pipe(E, H) {
			if (this.pipeTo !== null)
				throw new Error("Can only pipe to one destination");
			if (
				(typeof H != "function" && (H = null),
				(this.stream._duplexState |= pe),
				(this.pipeTo = E),
				(this.pipeline = new It(this.stream, E, H)),
				H && this.stream.on("error", dt),
				He(E))
			)
				((E._writableState.pipeline = this.pipeline),
					H && E.on("error", dt),
					E.on("finish", this.pipeline.finished.bind(this.pipeline)));
			else {
				const he = this.pipeline.done.bind(this.pipeline, E),
					_e = this.pipeline.done.bind(this.pipeline, E, null);
				(E.on("error", he),
					E.on("close", _e),
					E.on("finish", this.pipeline.finished.bind(this.pipeline)));
			}
			(E.on("drain", Ct.bind(this)),
				this.stream.emit("piping", E),
				E.emit("pipe", this.stream));
		}
		push(E) {
			const H = this.stream;
			return E === null
				? ((this.highWaterMark = 0),
					(H._duplexState = (H._duplexState | Se) & ce),
					!1)
				: this.map !== null && ((E = this.map(E)), E === null)
					? ((H._duplexState &= K), this.buffered < this.highWaterMark)
					: ((this.buffered += this.byteLength(E)),
						this.queue.push(E),
						(H._duplexState = (H._duplexState | P) & K),
						this.buffered < this.highWaterMark);
		}
		shift() {
			const E = this.queue.shift();
			return (
				(this.buffered -= this.byteLength(E)),
				this.buffered === 0 && (this.stream._duplexState &= U),
				E
			);
		}
		unshift(E) {
			const H = [this.map !== null ? this.map(E) : E];
			for (; this.buffered > 0; ) H.push(this.shift());
			for (let he = 0; he < H.length - 1; he++) {
				const _e = H[he];
				((this.buffered += this.byteLength(_e)), this.queue.push(_e));
			}
			this.push(H[H.length - 1]);
		}
		read() {
			const E = this.stream;
			if ((E._duplexState & et) === P) {
				const H = this.shift();
				return (
					this.pipeTo !== null &&
						this.pipeTo.write(H) === !1 &&
						(E._duplexState &= re),
					(E._duplexState & z) !== 0 && E.emit("data", H),
					H
				);
			}
			return (
				this.readAhead === !1 && ((E._duplexState |= D), this.updateNextTick()),
				null
			);
		}
		drain() {
			const E = this.stream;
			for (; (E._duplexState & et) === P && (E._duplexState & B) !== 0; ) {
				const H = this.shift();
				(this.pipeTo !== null &&
					this.pipeTo.write(H) === !1 &&
					(E._duplexState &= re),
					(E._duplexState & z) !== 0 && E.emit("data", H));
			}
		}
		update() {
			const E = this.stream;
			E._duplexState |= ne;
			do {
				for (
					this.drain();
					this.buffered < this.highWaterMark && (E._duplexState & wt) === D;
				)
					((E._duplexState |= ae), E._read(this.afterRead), this.drain());
				((E._duplexState & bt) === ge &&
					((E._duplexState |= $), E.emit("readable")),
					(E._duplexState & ye) === 0 && this.updateNonPrimary());
			} while (this.continueUpdate() === !0);
			E._duplexState &= ee;
		}
		updateNonPrimary() {
			const E = this.stream;
			if (
				((E._duplexState & gt) === Se &&
					((E._duplexState = (E._duplexState | J) & te),
					E.emit("end"),
					(E._duplexState & Xe) === Be && (E._duplexState |= A),
					this.pipeTo !== null && this.pipeTo.end()),
				(E._duplexState & De) === A)
			) {
				(E._duplexState & Ve) === 0 &&
					((E._duplexState |= qe), E._destroy(it.bind(this)));
				return;
			}
			(E._duplexState & Ze) === T &&
				((E._duplexState = (E._duplexState | qe) & ie), E._open(st.bind(this)));
		}
		continueUpdate() {
			return (this.stream._duplexState & V) === 0
				? !1
				: ((this.stream._duplexState &= Z), !0);
		}
		updateCallback() {
			(this.stream._duplexState & yt) === ue
				? this.update()
				: this.updateNextTick();
		}
		updateNextTickIfOpen() {
			(this.stream._duplexState & xt) === 0 &&
				((this.stream._duplexState |= V),
				(this.stream._duplexState & ne) === 0 && O(this.afterUpdateNextTick));
		}
		updateNextTick() {
			(this.stream._duplexState & V) === 0 &&
				((this.stream._duplexState |= V),
				(this.stream._duplexState & ne) === 0 && O(this.afterUpdateNextTick));
		}
	}
	class Dt {
		constructor(E) {
			((this.data = null),
				(this.afterTransform = Ut.bind(E)),
				(this.afterFinal = null));
		}
	}
	class It {
		constructor(E, H, he) {
			((this.from = E),
				(this.to = H),
				(this.afterPipe = he),
				(this.error = null),
				(this.pipeToFinished = !1));
		}
		finished() {
			this.pipeToFinished = !0;
		}
		done(E, H) {
			if (
				(H && (this.error = H),
				E === this.to && ((this.to = null), this.from !== null))
			) {
				((this.from._duplexState & J) === 0 || !this.pipeToFinished) &&
					this.from.destroy(
						this.error || new Error("Writable stream closed prematurely"),
					);
				return;
			}
			if (E === this.from && ((this.from = null), this.to !== null)) {
				(E._duplexState & J) === 0 &&
					this.to.destroy(
						this.error || new Error("Readable stream closed before ending"),
					);
				return;
			}
			(this.afterPipe !== null && this.afterPipe(this.error),
				(this.to = this.from = this.afterPipe = null));
		}
	}
	function Ct() {
		((this.stream._duplexState |= pe), this.updateCallback());
	}
	function Nt(Y) {
		const E = this.stream;
		(Y && E.destroy(Y),
			(E._duplexState & De) === 0 && ((E._duplexState |= Le), E.emit("finish")),
			(E._duplexState & Xe) === Be && (E._duplexState |= A),
			(E._duplexState &= fe),
			(E._duplexState & ve) === 0 ? this.update() : this.updateNextTick());
	}
	function it(Y) {
		const E = this.stream;
		(!Y && this.error !== e && (Y = this.error),
			Y && E.emit("error", Y),
			(E._duplexState |= N),
			E.emit("close"));
		const H = E._readableState,
			he = E._writableState;
		if (
			(H !== null && H.pipeline !== null && H.pipeline.done(E, Y), he !== null)
		) {
			for (; he.drains !== null && he.drains.length > 0; )
				he.drains.shift().resolve(!1);
			he.pipeline !== null && he.pipeline.done(E, Y);
		}
	}
	function Ft(Y) {
		const E = this.stream;
		(Y && E.destroy(Y),
			(E._duplexState &= C),
			this.drains !== null && qt(this.drains),
			(E._duplexState & Et) === Re &&
				((E._duplexState &= be),
				(E._duplexState & Ce) === Ce && E.emit("drain")),
			this.updateCallback());
	}
	function Wt(Y) {
		(Y && this.stream.destroy(Y),
			(this.stream._duplexState &= W),
			this.readAhead === !1 &&
				(this.stream._duplexState & oe) === 0 &&
				(this.stream._duplexState &= se),
			this.updateCallback());
	}
	function Mt() {
		(this.stream._duplexState & ne) === 0 &&
			((this.stream._duplexState &= Z), this.update());
	}
	function Pt() {
		(this.stream._duplexState & ve) === 0 &&
			((this.stream._duplexState &= Ne), this.update());
	}
	function qt(Y) {
		for (let E = 0; E < Y.length; E++)
			--Y[E].writes === 0 && (Y.shift().resolve(!0), E--);
	}
	function st(Y) {
		const E = this.stream;
		(Y && E.destroy(Y),
			(E._duplexState & A) === 0 &&
				((E._duplexState & pt) === 0 && (E._duplexState |= ue),
				(E._duplexState & St) === 0 && (E._duplexState |= we),
				E.emit("open")),
			(E._duplexState &= Qe),
			E._writableState !== null && E._writableState.updateCallback(),
			E._readableState !== null && E._readableState.updateCallback());
	}
	function Ut(Y, E) {
		(E != null && this.push(E), this._writableState.afterWrite(Y));
	}
	function Ht(Y) {
		(this._readableState !== null &&
			(Y === "data" &&
				((this._duplexState |= z | Ae), this._readableState.updateNextTick()),
			Y === "readable" &&
				((this._duplexState |= M), this._readableState.updateNextTick())),
			this._writableState !== null &&
				Y === "drain" &&
				((this._duplexState |= Ce), this._writableState.updateNextTick()));
	}
	class Ge extends x {
		constructor(E) {
			(super(),
				(this._duplexState = 0),
				(this._readableState = null),
				(this._writableState = null),
				E &&
					(E.open && (this._open = E.open),
					E.destroy && (this._destroy = E.destroy),
					E.predestroy && (this._predestroy = E.predestroy),
					E.signal && E.signal.addEventListener("abort", Zt.bind(this))),
				this.on("newListener", Ht));
		}
		_open(E) {
			E(null);
		}
		_destroy(E) {
			E(null);
		}
		_predestroy() {}
		get readable() {
			return this._readableState !== null ? !0 : void 0;
		}
		get writable() {
			return this._writableState !== null ? !0 : void 0;
		}
		get destroyed() {
			return (this._duplexState & N) !== 0;
		}
		get destroying() {
			return (this._duplexState & De) !== 0;
		}
		destroy(E) {
			(this._duplexState & De) === 0 &&
				(E || (E = e),
				(this._duplexState = (this._duplexState | A) & ft),
				this._readableState !== null &&
					((this._readableState.highWaterMark = 0),
					(this._readableState.error = E)),
				this._writableState !== null &&
					((this._writableState.highWaterMark = 0),
					(this._writableState.error = E)),
				(this._duplexState |= j),
				this._predestroy(),
				(this._duplexState &= le),
				this._readableState !== null && this._readableState.updateNextTick(),
				this._writableState !== null && this._writableState.updateNextTick());
		}
	}
	class Ue extends Ge {
		constructor(E) {
			(super(E),
				(this._duplexState |= T | Le | D),
				(this._readableState = new jt(this, E)),
				E &&
					(this._readableState.readAhead === !1 && (this._duplexState &= se),
					E.read && (this._read = E.read),
					E.eagerOpen && this._readableState.updateNextTick(),
					E.encoding && this.setEncoding(E.encoding)));
		}
		setEncoding(E) {
			const H = new v(E),
				he = this._readableState.map || Bt;
			return ((this._readableState.map = _e), this);
			function _e(ke) {
				const Oe = H.push(ke);
				return Oe === "" && (ke.byteLength !== 0 || H.remaining > 0)
					? null
					: he(Oe);
			}
		}
		_read(E) {
			E(null);
		}
		pipe(E, H) {
			return (
				this._readableState.updateNextTick(),
				this._readableState.pipe(E, H),
				E
			);
		}
		read() {
			return (this._readableState.updateNextTick(), this._readableState.read());
		}
		push(E) {
			return (
				this._readableState.updateNextTickIfOpen(),
				this._readableState.push(E)
			);
		}
		unshift(E) {
			return (
				this._readableState.updateNextTickIfOpen(),
				this._readableState.unshift(E)
			);
		}
		resume() {
			return (
				(this._duplexState |= Ae),
				this._readableState.updateNextTick(),
				this
			);
		}
		pause() {
			return (
				(this._duplexState &= this._readableState.readAhead === !1 ? de : G),
				this
			);
		}
		static _fromAsyncIterator(E, H) {
			let he;
			const _e = new Ue({
				...H,
				read(Oe) {
					E.next().then(ke).then(Oe.bind(null, null)).catch(Oe);
				},
				predestroy() {
					he = E.return();
				},
				destroy(Oe) {
					if (!he) return Oe(null);
					he.then(Oe.bind(null, null)).catch(Oe);
				},
			});
			return _e;
			function ke(Oe) {
				Oe.done ? _e.push(null) : _e.push(Oe.value);
			}
		}
		static from(E, H) {
			if (Jt(E)) return E;
			if (E[$e]) return this._fromAsyncIterator(E[$e](), H);
			Array.isArray(E) || (E = E === void 0 ? [] : [E]);
			let he = 0;
			return new Ue({
				...H,
				read(_e) {
					(this.push(he === E.length ? null : E[he++]), _e(null));
				},
			});
		}
		static isBackpressured(E) {
			return (
				(E._duplexState & mt) !== 0 ||
				E._readableState.buffered >= E._readableState.highWaterMark
			);
		}
		static isPaused(E) {
			return (E._duplexState & oe) === 0;
		}
		[$e]() {
			const E = this;
			let H = null,
				he = null,
				_e = null;
			return (
				this.on("error", (me) => {
					H = me;
				}),
				this.on("readable", ke),
				this.on("close", Oe),
				{
					[$e]() {
						return this;
					},
					next() {
						return new Promise(function (me, Ie) {
							((he = me), (_e = Ie));
							const We = E.read();
							We !== null ? Me(We) : (E._duplexState & N) !== 0 && Me(null);
						});
					},
					return() {
						return ze(null);
					},
					throw(me) {
						return ze(me);
					},
				}
			);
			function ke() {
				he !== null && Me(E.read());
			}
			function Oe() {
				he !== null && Me(null);
			}
			function Me(me) {
				_e !== null &&
					(H
						? _e(H)
						: me === null && (E._duplexState & J) === 0
							? _e(e)
							: he({ value: me, done: me === null }),
					(_e = he = null));
			}
			function ze(me) {
				return (
					E.destroy(me),
					new Promise((Ie, We) => {
						if (E._duplexState & N) return Ie({ value: void 0, done: !0 });
						E.once("close", function () {
							me ? We(me) : Ie({ value: void 0, done: !0 });
						});
					})
				);
			}
		}
	}
	class at extends Ge {
		constructor(E) {
			(super(E),
				(this._duplexState |= T | J),
				(this._writableState = new rt(this, E)),
				E &&
					(E.writev && (this._writev = E.writev),
					E.write && (this._write = E.write),
					E.final && (this._final = E.final),
					E.eagerOpen && this._writableState.updateNextTick()));
		}
		cork() {
			this._duplexState |= I;
		}
		uncork() {
			((this._duplexState &= Je), this._writableState.updateNextTick());
		}
		_writev(E, H) {
			H(null);
		}
		_write(E, H) {
			this._writableState.autoBatch(E, H);
		}
		_final(E) {
			E(null);
		}
		static isBackpressured(E) {
			return (E._duplexState & Lt) !== 0;
		}
		static drained(E) {
			if (E.destroyed) return Promise.resolve(!1);
			const H = E._writableState,
				_e =
					(en(E) ? Math.min(1, H.queue.length) : H.queue.length) +
					(E._duplexState & Pe ? 1 : 0);
			return _e === 0
				? Promise.resolve(!0)
				: (H.drains === null && (H.drains = []),
					new Promise((ke) => {
						H.drains.push({ writes: _e, resolve: ke });
					}));
		}
		write(E) {
			return (
				this._writableState.updateNextTick(),
				this._writableState.push(E)
			);
		}
		end(E) {
			return (
				this._writableState.updateNextTick(),
				this._writableState.end(E),
				this
			);
		}
	}
	class Ye extends Ue {
		constructor(E) {
			(super(E),
				(this._duplexState = T | (this._duplexState & D)),
				(this._writableState = new rt(this, E)),
				E &&
					(E.writev && (this._writev = E.writev),
					E.write && (this._write = E.write),
					E.final && (this._final = E.final)));
		}
		cork() {
			this._duplexState |= I;
		}
		uncork() {
			((this._duplexState &= Je), this._writableState.updateNextTick());
		}
		_writev(E, H) {
			H(null);
		}
		_write(E, H) {
			this._writableState.autoBatch(E, H);
		}
		_final(E) {
			E(null);
		}
		write(E) {
			return (
				this._writableState.updateNextTick(),
				this._writableState.push(E)
			);
		}
		end(E) {
			return (
				this._writableState.updateNextTick(),
				this._writableState.end(E),
				this
			);
		}
	}
	class ot extends Ye {
		constructor(E) {
			(super(E),
				(this._transformState = new Dt(this)),
				E &&
					(E.transform && (this._transform = E.transform),
					E.flush && (this._flush = E.flush)));
		}
		_write(E, H) {
			this._readableState.buffered >= this._readableState.highWaterMark
				? (this._transformState.data = E)
				: this._transform(E, this._transformState.afterTransform);
		}
		_read(E) {
			if (this._transformState.data !== null) {
				const H = this._transformState.data;
				((this._transformState.data = null),
					E(null),
					this._transform(H, this._transformState.afterTransform));
			} else E(null);
		}
		destroy(E) {
			(super.destroy(E),
				this._transformState.data !== null &&
					((this._transformState.data = null),
					this._transformState.afterTransform()));
		}
		_transform(E, H) {
			H(null, E);
		}
		_flush(E) {
			E(null);
		}
		_final(E) {
			((this._transformState.afterFinal = E), this._flush(Vt.bind(this)));
		}
	}
	class zt extends ot {}
	function Vt(Y, E) {
		const H = this._transformState.afterFinal;
		if (Y) return H(Y);
		(E != null && this.push(E), this.push(null), H(null));
	}
	function $t(...Y) {
		return new Promise((E, H) =>
			ct(...Y, (he) => {
				if (he) return H(he);
				E();
			}),
		);
	}
	function ct(Y, ...E) {
		const H = Array.isArray(Y) ? [...Y, ...E] : [Y, ...E],
			he = H.length && typeof H[H.length - 1] == "function" ? H.pop() : null;
		if (H.length < 2) throw new Error("Pipeline requires at least 2 streams");
		let _e = H[0],
			ke = null,
			Oe = null;
		for (let me = 1; me < H.length; me++)
			((ke = H[me]),
				He(_e) ? _e.pipe(ke, ze) : (Me(_e, !0, me > 1, ze), _e.pipe(ke)),
				(_e = ke));
		if (he) {
			let me = !1;
			const Ie =
				He(ke) || !!(ke._writableState && ke._writableState.autoDestroy);
			(ke.on("error", (We) => {
				Oe === null && (Oe = We);
			}),
				ke.on("finish", () => {
					((me = !0), Ie || he(Oe));
				}),
				Ie && ke.on("close", () => he(Oe || (me ? null : _))));
		}
		return ke;
		function Me(me, Ie, We, Ke) {
			(me.on("error", Ke), me.on("close", tn));
			function tn() {
				if (
					(me._readableState && !me._readableState.ended) ||
					(We && me._writableState && !me._writableState.ended)
				)
					return Ke(_);
			}
		}
		function ze(me) {
			if (!(!me || Oe)) {
				Oe = me;
				for (const Ie of H) Ie.destroy(me);
			}
		}
	}
	function Bt(Y) {
		return Y;
	}
	function lt(Y) {
		return !!Y._readableState || !!Y._writableState;
	}
	function He(Y) {
		return typeof Y._duplexState == "number" && lt(Y);
	}
	function Gt(Y) {
		return !!Y._readableState && Y._readableState.ended;
	}
	function Yt(Y) {
		return !!Y._writableState && Y._writableState.ended;
	}
	function Kt(Y, E = {}) {
		const H =
			(Y._readableState && Y._readableState.error) ||
			(Y._writableState && Y._writableState.error);
		return !E.all && H === e ? null : H;
	}
	function Jt(Y) {
		return He(Y) && Y.readable;
	}
	function Qt(Y) {
		return (Y._duplexState & T) !== T || (Y._duplexState & Ve) !== 0;
	}
	function Xt(Y) {
		return (
			typeof Y == "object" && Y !== null && typeof Y.byteLength == "number"
		);
	}
	function ut(Y) {
		return Xt(Y) ? Y.byteLength : 1024;
	}
	function dt() {}
	function Zt() {
		this.destroy(new Error("Stream aborted."));
	}
	function en(Y) {
		return (
			Y._writev !== at.prototype._writev && Y._writev !== Ye.prototype._writev
		);
	}
	return (
		(streamx = {
			pipeline: ct,
			pipelinePromise: $t,
			isStream: lt,
			isStreamx: He,
			isEnded: Gt,
			isFinished: Yt,
			isDisturbed: Qt,
			getStreamError: Kt,
			Stream: Ge,
			Writable: at,
			Readable: Ue,
			Duplex: Ye,
			Transform: ot,
			PassThrough: zt,
		}),
		streamx
	);
}
var headers = {},
	hasRequiredHeaders;
function requireHeaders() {
	if (hasRequiredHeaders) return headers;
	hasRequiredHeaders = 1;
	const x = requireBrowser(),
		e = "0000000000000000000",
		_ = "7777777777777777777",
		S = 48,
		v = x.from([117, 115, 116, 97, 114, 0]),
		O = x.from([S, S]),
		L = x.from([117, 115, 116, 97, 114, 32]),
		T = x.from([32, 0]),
		j = 4095,
		A = 257,
		N = 263;
	((headers.decodeLongPath = function (D, B) {
		return J(D, 0, D.length, B);
	}),
		(headers.encodePax = function (D) {
			let B = "";
			(D.name &&
				(B += V(
					" path=" +
						D.name +
						`
`,
				)),
				D.linkname &&
					(B += V(
						" linkpath=" +
							D.linkname +
							`
`,
					)));
			const ae = D.pax;
			if (ae)
				for (const ye in ae)
					B += V(
						" " +
							ye +
							"=" +
							ae[ye] +
							`
`,
					);
			return x.from(B);
		}),
		(headers.decodePax = function (D) {
			const B = {};
			for (; D.length; ) {
				let ae = 0;
				for (; ae < D.length && D[ae] !== 32; ) ae++;
				const ye = parseInt(x.toString(D.subarray(0, ae)), 10);
				if (!ye) return B;
				const ge = x.toString(D.subarray(ae + 1, ye - 1)),
					Ae = ge.indexOf("=");
				if (Ae === -1) return B;
				((B[ge.slice(0, Ae)] = ge.slice(Ae + 1)), (D = D.subarray(ye)));
			}
			return B;
		}),
		(headers.encode = function (D) {
			const B = x.alloc(512);
			let ae = D.name,
				ye = "";
			if (
				(D.typeflag === 5 && ae[ae.length - 1] !== "/" && (ae += "/"),
				x.byteLength(ae) !== ae.length)
			)
				return null;
			for (; x.byteLength(ae) > 100; ) {
				const ge = ae.indexOf("/");
				if (ge === -1) return null;
				((ye += ye ? "/" + ae.slice(0, ge) : ae.slice(0, ge)),
					(ae = ae.slice(ge + 1)));
			}
			return x.byteLength(ae) > 100 ||
				x.byteLength(ye) > 155 ||
				(D.linkname && x.byteLength(D.linkname) > 100)
				? null
				: (x.write(B, ae),
					x.write(B, pe(D.mode & j, 6), 100),
					x.write(B, pe(D.uid, 6), 108),
					x.write(B, pe(D.gid, 6), 116),
					z(D.size, B, 124),
					x.write(B, pe((D.mtime.getTime() / 1e3) | 0, 11), 136),
					(B[156] = S + ue(D.type)),
					D.linkname && x.write(B, D.linkname, 157),
					x.copy(v, B, A),
					x.copy(O, B, N),
					D.uname && x.write(B, D.uname, 265),
					D.gname && x.write(B, D.gname, 297),
					x.write(B, pe(D.devmajor || 0, 6), 329),
					x.write(B, pe(D.devminor || 0, 6), 337),
					ye && x.write(B, ye, 345),
					x.write(B, pe(oe(B), 6), 148),
					B);
		}),
		(headers.decode = function (D, B, ae) {
			let ye = D[156] === 0 ? 0 : D[156] - S,
				ge = J(D, 0, 100, B);
			const Ae = $(D, 100, 8),
				W = $(D, 108, 8),
				X = $(D, 116, 8),
				ce = $(D, 124, 12),
				K = $(D, 136, 12),
				G = ne(ye),
				U = D[157] === 0 ? null : J(D, 157, 100, B),
				te = J(D, 265, 32),
				re = J(D, 297, 32),
				Z = $(D, 329, 8),
				ee = $(D, 337, 8),
				se = oe(D);
			if (se === 256) return null;
			if (se !== $(D, 148, 8))
				throw new Error(
					"Invalid tar header. Maybe the tar is corrupted or it needs to be gunzipped?",
				);
			if (ie(D)) D[345] && (ge = J(D, 345, 155, B) + "/" + ge);
			else if (!le(D)) {
				if (!ae) throw new Error("Invalid tar header: unknown format.");
			}
			return (
				ye === 0 && ge && ge[ge.length - 1] === "/" && (ye = 5),
				{
					name: ge,
					mode: Ae,
					uid: W,
					gid: X,
					size: ce,
					mtime: new Date(1e3 * K),
					type: G,
					linkname: U,
					uname: te,
					gname: re,
					devmajor: Z,
					devminor: ee,
					pax: null,
				}
			);
		}));
	function ie(F) {
		return x.equals(v, F.subarray(A, A + 6));
	}
	function le(F) {
		return (
			x.equals(L, F.subarray(A, A + 6)) && x.equals(T, F.subarray(N, N + 2))
		);
	}
	function q(F, D, B) {
		return typeof F != "number"
			? B
			: ((F = ~~F), F >= D ? D : F >= 0 || ((F += D), F >= 0) ? F : 0);
	}
	function ne(F) {
		switch (F) {
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
	function ue(F) {
		switch (F) {
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
	function P(F, D, B, ae) {
		for (; B < ae; B++) if (F[B] === D) return B;
		return ae;
	}
	function oe(F) {
		let D = 256;
		for (let B = 0; B < 148; B++) D += F[B];
		for (let B = 156; B < 512; B++) D += F[B];
		return D;
	}
	function pe(F, D) {
		return (
			(F = F.toString(8)),
			F.length > D ? _.slice(0, D) + " " : e.slice(0, D - F.length) + F + " "
		);
	}
	function Se(F, D, B) {
		D[B] = 128;
		for (let ae = 11; ae > 0; ae--)
			((D[B + ae] = F & 255), (F = Math.floor(F / 256)));
	}
	function z(F, D, B) {
		F.toString(8).length > 11 ? Se(F, D, B) : x.write(D, pe(F, 11), B);
	}
	function M(F) {
		let D;
		if (F[0] === 128) D = !0;
		else if (F[0] === 255) D = !1;
		else return null;
		const B = [];
		let ae;
		for (ae = F.length - 1; ae > 0; ae--) {
			const Ae = F[ae];
			D ? B.push(Ae) : B.push(255 - Ae);
		}
		let ye = 0;
		const ge = B.length;
		for (ae = 0; ae < ge; ae++) ye += B[ae] * Math.pow(256, ae);
		return D ? ye : -1 * ye;
	}
	function $(F, D, B) {
		if (((F = F.subarray(D, D + B)), (D = 0), F[D] & 128)) return M(F);
		{
			for (; D < F.length && F[D] === 32; ) D++;
			const ae = q(P(F, 32, D, F.length), F.length, F.length);
			for (; D < ae && F[D] === 0; ) D++;
			return ae === D ? 0 : parseInt(x.toString(F.subarray(D, ae)), 8);
		}
	}
	function J(F, D, B, ae) {
		return x.toString(F.subarray(D, P(F, 0, D, D + B)), ae);
	}
	function V(F) {
		const D = x.byteLength(F);
		let B = Math.floor(Math.log(D) / Math.log(10)) + 1;
		return (D + B >= Math.pow(10, B) && B++, D + B + F);
	}
	return headers;
}
var extract, hasRequiredExtract;
function requireExtract() {
	if (hasRequiredExtract) return extract;
	hasRequiredExtract = 1;
	const { Writable: x, Readable: e, getStreamError: _ } = requireStreamx(),
		S = requireFastFifo(),
		v = requireBrowser(),
		O = requireHeaders(),
		L = v.alloc(0);
	class T {
		constructor() {
			((this.buffered = 0),
				(this.shifted = 0),
				(this.queue = new S()),
				(this._offset = 0));
		}
		push(q) {
			((this.buffered += q.byteLength), this.queue.push(q));
		}
		shiftFirst(q) {
			return this._buffered === 0 ? null : this._next(q);
		}
		shift(q) {
			if (q > this.buffered) return null;
			if (q === 0) return L;
			let ne = this._next(q);
			if (q === ne.byteLength) return ne;
			const ue = [ne];
			for (; (q -= ne.byteLength) > 0; ) ((ne = this._next(q)), ue.push(ne));
			return v.concat(ue);
		}
		_next(q) {
			const ne = this.queue.peek(),
				ue = ne.byteLength - this._offset;
			if (q >= ue) {
				const P = this._offset ? ne.subarray(this._offset, ne.byteLength) : ne;
				return (
					this.queue.shift(),
					(this._offset = 0),
					(this.buffered -= ue),
					(this.shifted += ue),
					P
				);
			}
			return (
				(this.buffered -= q),
				(this.shifted += q),
				ne.subarray(this._offset, (this._offset += q))
			);
		}
	}
	class j extends e {
		constructor(q, ne, ue) {
			(super(), (this.header = ne), (this.offset = ue), (this._parent = q));
		}
		_read(q) {
			(this.header.size === 0 && this.push(null),
				this._parent._stream === this && this._parent._update(),
				q(null));
		}
		_predestroy() {
			this._parent.destroy(_(this));
		}
		_detach() {
			this._parent._stream === this &&
				((this._parent._stream = null),
				(this._parent._missing = ie(this.header.size)),
				this._parent._update());
		}
		_destroy(q) {
			(this._detach(), q(null));
		}
	}
	class A extends x {
		constructor(q) {
			(super(q),
				q || (q = {}),
				(this._buffer = new T()),
				(this._offset = 0),
				(this._header = null),
				(this._stream = null),
				(this._missing = 0),
				(this._longHeader = !1),
				(this._callback = N),
				(this._locked = !1),
				(this._finished = !1),
				(this._pax = null),
				(this._paxGlobal = null),
				(this._gnuLongPath = null),
				(this._gnuLongLinkPath = null),
				(this._filenameEncoding = q.filenameEncoding || "utf-8"),
				(this._allowUnknownFormat = !!q.allowUnknownFormat),
				(this._unlockBound = this._unlock.bind(this)));
		}
		_unlock(q) {
			if (((this._locked = !1), q)) {
				(this.destroy(q), this._continueWrite(q));
				return;
			}
			this._update();
		}
		_consumeHeader() {
			if (this._locked) return !1;
			this._offset = this._buffer.shifted;
			try {
				this._header = O.decode(
					this._buffer.shift(512),
					this._filenameEncoding,
					this._allowUnknownFormat,
				);
			} catch (q) {
				return (this._continueWrite(q), !1);
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
		_decodeLongHeader(q) {
			switch (this._header.type) {
				case "gnu-long-path":
					this._gnuLongPath = O.decodeLongPath(q, this._filenameEncoding);
					break;
				case "gnu-long-link-path":
					this._gnuLongLinkPath = O.decodeLongPath(q, this._filenameEncoding);
					break;
				case "pax-global-header":
					this._paxGlobal = O.decodePax(q);
					break;
				case "pax-header":
					this._pax =
						this._paxGlobal === null
							? O.decodePax(q)
							: Object.assign({}, this._paxGlobal, O.decodePax(q));
					break;
			}
		}
		_consumeLongHeader() {
			((this._longHeader = !1), (this._missing = ie(this._header.size)));
			const q = this._buffer.shift(this._header.size);
			try {
				this._decodeLongHeader(q);
			} catch (ne) {
				return (this._continueWrite(ne), !1);
			}
			return !0;
		}
		_consumeStream() {
			const q = this._buffer.shiftFirst(this._missing);
			if (q === null) return !1;
			this._missing -= q.byteLength;
			const ne = this._stream.push(q);
			return this._missing === 0
				? (this._stream.push(null),
					ne && this._stream._detach(),
					ne && this._locked === !1)
				: ne;
		}
		_createStream() {
			return new j(this, this._header, this._offset);
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
					const q = this._buffer.shiftFirst(this._missing);
					q !== null && (this._missing -= q.byteLength);
					continue;
				}
				if (this._buffer.buffered < 512) break;
				if (this._stream !== null || this._consumeHeader() === !1) return;
			}
			this._continueWrite(null);
		}
		_continueWrite(q) {
			const ne = this._callback;
			((this._callback = N), ne(q));
		}
		_write(q, ne) {
			((this._callback = ne), this._buffer.push(q), this._update());
		}
		_final(q) {
			((this._finished = this._missing === 0 && this._buffer.buffered === 0),
				q(this._finished ? null : new Error("Unexpected end of data")));
		}
		_predestroy() {
			this._continueWrite(null);
		}
		_destroy(q) {
			(this._stream && this._stream.destroy(_(this)), q(null));
		}
		[Symbol.asyncIterator]() {
			let q = null,
				ne = null,
				ue = null,
				P = null,
				oe = null;
			const pe = this;
			return (
				this.on("entry", M),
				this.on("error", (V) => {
					q = V;
				}),
				this.on("close", $),
				{
					[Symbol.asyncIterator]() {
						return this;
					},
					next() {
						return new Promise(z);
					},
					return() {
						return J(null);
					},
					throw(V) {
						return J(V);
					},
				}
			);
			function Se(V) {
				if (!oe) return;
				const F = oe;
				((oe = null), F(V));
			}
			function z(V, F) {
				if (q) return F(q);
				if (P) {
					(V({ value: P, done: !1 }), (P = null));
					return;
				}
				((ne = V),
					(ue = F),
					Se(null),
					pe._finished &&
						ne &&
						(ne({ value: void 0, done: !0 }), (ne = ue = null)));
			}
			function M(V, F, D) {
				((oe = D),
					F.on("error", N),
					ne ? (ne({ value: F, done: !1 }), (ne = ue = null)) : (P = F));
			}
			function $() {
				(Se(q),
					ne &&
						(q ? ue(q) : ne({ value: void 0, done: !0 }), (ne = ue = null)));
			}
			function J(V) {
				return (
					pe.destroy(V),
					Se(V),
					new Promise((F, D) => {
						if (pe.destroyed) return F({ value: void 0, done: !0 });
						pe.once("close", function () {
							V ? D(V) : F({ value: void 0, done: !0 });
						});
					})
				);
			}
		}
	}
	extract = function (q) {
		return new A(q);
	};
	function N() {}
	function ie(le) {
		return ((le &= 511), le && 512 - le);
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
	const x = {
		S_IFMT: 61440,
		S_IFDIR: 16384,
		S_IFCHR: 8192,
		S_IFBLK: 24576,
		S_IFIFO: 4096,
		S_IFLNK: 40960,
	};
	try {
		constants.exports = require$$0.constants || x;
	} catch {
		constants.exports = x;
	}
	return constants.exports;
}
var pack, hasRequiredPack;
function requirePack() {
	if (hasRequiredPack) return pack;
	hasRequiredPack = 1;
	const { Readable: x, Writable: e, getStreamError: _ } = requireStreamx(),
		S = requireBrowser(),
		v = requireConstants(),
		O = requireHeaders(),
		L = 493,
		T = 420,
		j = S.alloc(1024);
	class A extends e {
		constructor(P, oe, pe) {
			(super({ mapWritable: ne, eagerOpen: !0 }),
				(this.written = 0),
				(this.header = oe),
				(this._callback = pe),
				(this._linkname = null),
				(this._isLinkname = oe.type === "symlink" && !oe.linkname),
				(this._isVoid = oe.type !== "file" && oe.type !== "contiguous-file"),
				(this._finished = !1),
				(this._pack = P),
				(this._openCallback = null),
				this._pack._stream === null
					? (this._pack._stream = this)
					: this._pack._pending.push(this));
		}
		_open(P) {
			((this._openCallback = P),
				this._pack._stream === this && this._continueOpen());
		}
		_continuePack(P) {
			if (this._callback === null) return;
			const oe = this._callback;
			((this._callback = null), oe(P));
		}
		_continueOpen() {
			this._pack._stream === null && (this._pack._stream = this);
			const P = this._openCallback;
			if (((this._openCallback = null), P !== null)) {
				if (this._pack.destroying) return P(new Error("pack stream destroyed"));
				if (this._pack._finalized)
					return P(new Error("pack stream is already finalized"));
				((this._pack._stream = this),
					this._isLinkname || this._pack._encode(this.header),
					this._isVoid && (this._finish(), this._continuePack(null)),
					P(null));
			}
		}
		_write(P, oe) {
			if (this._isLinkname)
				return (
					(this._linkname = this._linkname ? S.concat([this._linkname, P]) : P),
					oe(null)
				);
			if (this._isVoid)
				return P.byteLength > 0
					? oe(new Error("No body allowed for this entry"))
					: oe();
			if (((this.written += P.byteLength), this._pack.push(P))) return oe();
			this._pack._drain = oe;
		}
		_finish() {
			this._finished ||
				((this._finished = !0),
				this._isLinkname &&
					((this.header.linkname = this._linkname
						? S.toString(this._linkname, "utf-8")
						: ""),
					this._pack._encode(this.header)),
				q(this._pack, this.header.size),
				this._pack._done(this));
		}
		_final(P) {
			if (this.written !== this.header.size)
				return P(new Error("Size mismatch"));
			(this._finish(), P(null));
		}
		_getError() {
			return _(this) || new Error("tar entry destroyed");
		}
		_predestroy() {
			this._pack.destroy(this._getError());
		}
		_destroy(P) {
			(this._pack._done(this),
				this._continuePack(this._finished ? null : this._getError()),
				P());
		}
	}
	class N extends x {
		constructor(P) {
			(super(P),
				(this._drain = le),
				(this._finalized = !1),
				(this._finalizing = !1),
				(this._pending = []),
				(this._stream = null));
		}
		entry(P, oe, pe) {
			if (this._finalized || this.destroying)
				throw new Error("already finalized or destroyed");
			(typeof oe == "function" && ((pe = oe), (oe = null)),
				pe || (pe = le),
				(!P.size || P.type === "symlink") && (P.size = 0),
				P.type || (P.type = ie(P.mode)),
				P.mode || (P.mode = P.type === "directory" ? L : T),
				P.uid || (P.uid = 0),
				P.gid || (P.gid = 0),
				P.mtime || (P.mtime = new Date()),
				typeof oe == "string" && (oe = S.from(oe)));
			const Se = new A(this, P, pe);
			return S.isBuffer(oe)
				? ((P.size = oe.byteLength), Se.write(oe), Se.end(), Se)
				: (Se._isVoid, Se);
		}
		finalize() {
			if (this._stream || this._pending.length > 0) {
				this._finalizing = !0;
				return;
			}
			this._finalized ||
				((this._finalized = !0), this.push(j), this.push(null));
		}
		_done(P) {
			P === this._stream &&
				((this._stream = null),
				this._finalizing && this.finalize(),
				this._pending.length && this._pending.shift()._continueOpen());
		}
		_encode(P) {
			if (!P.pax) {
				const oe = O.encode(P);
				if (oe) {
					this.push(oe);
					return;
				}
			}
			this._encodePax(P);
		}
		_encodePax(P) {
			const oe = O.encodePax({
					name: P.name,
					linkname: P.linkname,
					pax: P.pax,
				}),
				pe = {
					name: "PaxHeader",
					mode: P.mode,
					uid: P.uid,
					gid: P.gid,
					size: oe.byteLength,
					mtime: P.mtime,
					type: "pax-header",
					linkname: P.linkname && "PaxHeader",
					uname: P.uname,
					gname: P.gname,
					devmajor: P.devmajor,
					devminor: P.devminor,
				};
			(this.push(O.encode(pe)),
				this.push(oe),
				q(this, oe.byteLength),
				(pe.size = P.size),
				(pe.type = P.type),
				this.push(O.encode(pe)));
		}
		_doDrain() {
			const P = this._drain;
			((this._drain = le), P());
		}
		_predestroy() {
			const P = _(this);
			for (this._stream && this._stream.destroy(P); this._pending.length; ) {
				const oe = this._pending.shift();
				(oe.destroy(P), oe._continueOpen());
			}
			this._doDrain();
		}
		_read(P) {
			(this._doDrain(), P());
		}
	}
	pack = function (P) {
		return new N(P);
	};
	function ie(ue) {
		switch (ue & v.S_IFMT) {
			case v.S_IFBLK:
				return "block-device";
			case v.S_IFCHR:
				return "character-device";
			case v.S_IFDIR:
				return "directory";
			case v.S_IFIFO:
				return "fifo";
			case v.S_IFLNK:
				return "symlink";
		}
		return "file";
	}
	function le() {}
	function q(ue, P) {
		((P &= 511), P && ue.push(j.subarray(0, 512 - P)));
	}
	function ne(ue) {
		return S.isBuffer(ue) ? ue : S.from(ue);
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
function fromWeb(x, e = {}) {
	if (x instanceof ReadableStream && x instanceof WritableStream)
		return new DuplexWebStream(x, x, e);
	if (x instanceof ReadableStream) return new ReadableWebStream(x, e);
	if (x instanceof WritableStream) return new WritableWebStream(x, e);
	if (x.readable && x.writable)
		return new DuplexWebStream(x.readable, x.writable, e);
	if (x.readable) return new ReadableWebStream(x.readable, e);
	if (x.writable) return new WritableWebStream(x.writable, e);
	throw new Error("fromWeb: Requires at least a readable or writable stream.");
}
class ReadableWebStream extends streamxExports.Readable {
	constructor(e, _) {
		(super(_), (this._reader = e.getReader()), this._attachErrorHandler());
	}
	_attachErrorHandler() {
		this._reader.closed.catch((e) => {
			this.destroy(e);
		});
	}
	async _read(e) {
		try {
			const { done: _, value: S } = await this._reader.read();
			(_ ? this.push(null) : this.push(S), e());
		} catch (_) {
			(this.destroy(_), e(_));
		}
	}
	_destroy(e) {
		(this._reader.releaseLock(), e());
	}
}
class WritableWebStream extends streamxExports.Writable {
	constructor(e, _) {
		(super(_), (this._writer = e.getWriter()));
	}
	async _write(e, _) {
		try {
			(await this._writer.write(e), _());
		} catch (S) {
			(this.destroy(S), _(S));
		}
	}
	async _final(e) {
		try {
			(await this._writer.close(), e());
		} catch (_) {
			(this.destroy(_), e(_));
		}
	}
	_destroy(e) {
		(this._writer.releaseLock(), e());
	}
}
class DuplexWebStream extends streamxExports.Duplex {
	constructor(e, _, S) {
		(super(S),
			(this._reader = e.getReader()),
			(this._writer = _.getWriter()),
			this._attachErrorHandler(),
			this._handleCompletion());
	}
	_attachErrorHandler() {
		(this._reader.closed.catch((e) => {
			this.destroy(e);
		}),
			this._writer.closed.catch((e) => {
				this.destroy(e);
			}));
	}
	async _read(e) {
		try {
			const { done: _, value: S } = await this._reader.read();
			(_ ? this.push(null) : this.push(S), e());
		} catch (_) {
			(this.destroy(_), e(_));
		}
	}
	async _write(e, _) {
		try {
			(await this._writer.write(e), _());
		} catch (S) {
			(this.destroy(S), _(S));
		}
	}
	async _final(e) {
		try {
			(await this._writer.close(), e());
		} catch (_) {
			(this.destroy(_), e(_));
		}
	}
	_destroy(e) {
		(this._reader.releaseLock(), this._writer.releaseLock(), e());
	}
	_handleCompletion() {
		this.on("finish", () => {
			this.emit("end");
		});
	}
}
function isStreamx(x) {
	return typeof x._duplexState == "number" && isStream(x);
}
function isStream(x) {
	return !!x._readableState || !!x._writableState;
}
function isReadableStream(x) {
	return !!x._readableState;
}
function isWritableStream(x) {
	return !!x._writableState;
}
const WRITE_WRITING = 256 << 17;
function drained(x, e = !1) {
	if (x.destroyed) return Promise.resolve(!1);
	const _ = x._writableState,
		v =
			(e ? Math.min(1, _.queue.length) : _.queue.length) +
			(x._duplexState & WRITE_WRITING ? 1 : 0);
	return v === 0
		? Promise.resolve(!0)
		: (_.drains === null && (_.drains = []),
			new Promise((O) => {
				_.drains.push({ writes: v, resolve: O });
			}));
}
var browserExports = requireBrowser();
const b4a = getDefaultExportFromCjs(browserExports);
function handleReadable(x, e) {
	let _ = !1;
	const S = {};
	return new ReadableStream({
		start(v) {
			((S.data = O), (S.end = L), (S.close = L), (S.error = T));
			for (const A in S) x.on(A, S[A]);
			x.pause();
			function O(A) {
				_ ||
					(A === null
						? L()
						: (v.enqueue(typeof A == "string" ? b4a.from(A) : A), x.pause()));
			}
			function L() {
				(j(), v.close());
			}
			function T(A) {
				(j(), v.error(A));
			}
			function j() {
				if (!_) {
					_ = !0;
					for (const A in S) x.off(A, S[A]);
				}
			}
		},
		pull() {
			_ || x.resume();
		},
		cancel() {
			_ = !0;
			for (const v in S) x.off(v, S[v]);
			x.destroy ? x.destroy() : x.close && x.close();
		},
		type: void 0,
	});
}
function handleWritable(x) {
	return new WritableStream({
		async write(e) {
			try {
				const _ = typeof e == "string" ? b4a.from(e) : e;
				x.write(_) || (await drained(x, !1));
			} catch (_) {
				(x.destroy(_), setTimeout(() => x.emit("error", _), 0));
			}
		},
		async close() {
			x.end && x.end();
		},
		abort(e) {
			(x.destroy && x.destroy(e), setTimeout(() => x.emit("error", e), 0));
		},
	});
}
function toWeb(x, e) {
	let _;
	if (x && !isStreamx(x)) {
		let O;
		(({ readable: x, writable: _, duplex: O } = x),
			O && !x && !_ && ((x = O), (_ = O)));
	} else
		isReadableStream(x) && isWritableStream(x)
			? (_ = x)
			: isReadableStream(x)
				? (_ = null)
				: isWritableStream(x) && ((_ = x), (x = null));
	if (!x && !_) {
		const O = "Invalid stream";
		throw new Error(O);
	}
	let S, v;
	return (
		x && (S = handleReadable(x)),
		_ && (v = handleWritable(_)),
		S && v ? { readable: S, writable: v } : S || v
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
	const x = await rootFolder.getDirectoryHandle("Content", { create: !0 });
	for (const e of ["Fonts", "Images", "Sound"])
		await x.getDirectoryHandle(e, { create: !0 });
}
self.skipOobe = skipOobe;
async function copyFile(x, e) {
	const _ = await x.getFile().then((O) => O.stream()),
		v = await (await e.getFileHandle(x.name, { create: !0 })).createWritable();
	await _.pipeTo(v);
}
async function copyFolder(x, e, _) {
	async function S(O, L) {
		for await (const [T, j] of O)
			if (j.kind === "file") await copyFile(j, L);
			else {
				const A = await L.getDirectoryHandle(T, { create: !0 });
				await S(j, A);
			}
	}
	const v = await e.getDirectoryHandle(x.name, { create: !0 });
	await S(x, v);
}
async function hasContent() {
	try {
		const x = await rootFolder.getDirectoryHandle("Content", { create: !1 });
		for (const e of ["Fonts", "Images", "Sounds"])
			try {
				await x.getDirectoryHandle(e, { create: !1 });
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
async function createEntry(x, e, _) {
	let S = null,
		v = null;
	const O = new Promise((T, j) => {
			((S = T), (v = j));
		}),
		L = x.entry(e, (T) => {
			T ? v(T) : S();
		});
	if (_) {
		const T = _.getReader();
		for (;;) {
			const { value: j, done: A } = await T.read();
			if (A || !j) break;
			L.write(j);
		}
		L.end();
	} else L.end();
	await O;
}
function createTar(x, e) {
	const _ = tar.pack();
	async function S(v, O) {
		for await (const [L, T] of O)
			if ((e && e(T.kind, L), T.kind == "file")) {
				const j = await T.getFile(),
					A = j.stream();
				await createEntry(_, { name: v + L, type: T.kind, size: j.size }, A);
			} else
				(await createEntry(_, { name: v + L, type: T.kind }),
					await S(v + L + "/", T));
	}
	return (S("", x).then(() => _.finalize()), toWeb(_));
}
async function extractTar(x, e, _) {
	const S = fromWeb(x),
		v = tar.extract();
	v.on("entry", async (L, T, j) => {
		const A = toWeb(T);
		async function N() {
			const q = A.getReader();
			for (;;) {
				const { done: ne, value: ue } = await q.read();
				if (ne || !ue) break;
			}
		}
		const ie = L.name.split("/");
		if (
			(ie[ie.length - 1] === "" && ie.pop(),
			ie[0] === e.name && ie.shift(),
			ie.length === 0)
		) {
			(await N(), j());
			return;
		}
		let le = e;
		for (const q of ie.splice(0, ie.length - 1))
			le = await le.getDirectoryHandle(q, { create: !0 });
		if (L.type === "directory")
			(await le.getDirectoryHandle(ie[0], { create: !0 }),
				await N(),
				_ && _("directory", ie[0]));
		else if (L.type === "file") {
			const ne = await (
				await le.getFileHandle(ie[0], { create: !0 })
			).createWritable();
			(await A.pipeTo(ne), _ && _("file", ie[0]));
		} else await N();
		j();
	});
	const O = new Promise((L, T) => {
		(v.on("finish", () => L()), v.on("error", (j) => T(j)));
	});
	(S.pipe(v), await O);
}
async function recursiveGetDirectory(x, e) {
	return e.length === 0
		? x
		: recursiveGetDirectory(await x.getDirectoryHandle(e[0]), e.slice(1));
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
				let L = [];
				this.components.length > 0 &&
					L.push({
						name: "..",
						entry: await recursiveGetDirectory(
							rootFolder,
							this.components.slice(0, this.components.length - 1),
						),
					});
				for await (const [T, j] of this.path) L.push({ name: T, entry: j });
				(L.sort((T, j) => {
					const A = T.entry.kind.localeCompare(j.entry.kind);
					return A === 0 ? T.name.localeCompare(j.name) : A;
				}),
					(this.entries = L));
			}));
		const x = async () => {
				const L = await showOpenFilePicker({ multiple: !0 });
				this.uploading = !0;
				for (const T of L) await copyFile(T, this.path);
				((this.path = this.path), (this.uploading = !1));
			},
			e = async () => {
				const L = await showDirectoryPicker();
				((this.uploading = !0),
					await copyFolder(L, this.path),
					(this.path = this.path),
					(this.uploading = !1));
			},
			_ = async () => {
				const L = this.components.at(-1) || "terraria-wasm",
					T = await showSaveFilePicker({
						excludeAcceptAllOption: !0,
						suggestedName: L + ".tar",
						types: TAR_TYPES,
					});
				this.downloading = !0;
				let j = createTar(this.path, (N, ie) =>
					console.log(`tarring ${N} ${ie}`),
				);
				T.name.endsWith(".gz") &&
					(j = j.pipeThrough(new CompressionStream("gzip")));
				const A = await T.createWritable();
				(await j.pipeTo(A), (this.downloading = !1));
			},
			S = async () => {
				const L = await showOpenFilePicker({ multiple: !0 });
				this.uploading = !0;
				for (const T of L) {
					let j = await T.getFile().then((A) => A.stream());
					(T.name.endsWith(".gz") &&
						(j = j.pipeThrough(new DecompressionStream("gzip"))),
						await extractTar(j, this.path, (A, N) =>
							console.log(`untarring ${A} ${N}`),
						));
				}
				this.uploading = !1;
			},
			v = use(this.uploading, (L) => L || PICKERS_UNAVAILABLE),
			O = use(this.downloading, (L) => L || PICKERS_UNAVAILABLE);
		return h(
			"div",
			null,
			h(
				"div",
				{ class: "path" },
				$if(
					use(this.components, (L) => L.length > 0),
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
					use(this.components, (L) =>
						L.length == 0 ? "Root Directory" : "/" + L.join("/"),
					),
				),
				h("div", { class: "expand" }),
				h(
					Button,
					{
						type: "normal",
						icon: "full",
						disabled: v,
						"on:click": x,
						title: "Upload File",
					},
					h(Icon, { icon: data$7 }),
				),
				h(
					Button,
					{
						type: "normal",
						icon: "full",
						disabled: v,
						"on:click": e,
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
				use(this.entries, (L) =>
					L.filter((T) => T.name != "..").map((T) => {
						const j = T.entry.kind === "directory" ? data$d : data$c,
							A = async (le) => {
								(le.stopImmediatePropagation(),
									this.editing?.name === T.name && (this.editing = null),
									await this.path.removeEntry(T.name, { recursive: !0 }),
									(this.path = this.path));
							},
							N = async (le) => {
								if ((le.stopImmediatePropagation(), T.entry.kind === "file")) {
									const ne = await T.entry.getFile(),
										ue = URL.createObjectURL(ne),
										P = document.createElement("a");
									((P.href = ue),
										(P.download = T.name),
										P.click(),
										await new Promise((oe) => setTimeout(oe, 100)),
										URL.revokeObjectURL(ue));
								}
							},
							ie = () => {
								T.entry.kind === "directory"
									? ((this.editing = null), (this.path = T.entry))
									: (this.editing = T.entry);
							};
						return h(
							Button,
							{
								"on:click": ie,
								icon: "none",
								type: "listitem",
								disabled: !1,
								class: "entry",
							},
							h(Icon, { icon: T.name == ".." ? data$6 : j }),
							h("span", null, T.name === ".." ? "Parent Directory" : T.name),
							h("div", { class: "expand" }),
							h(
								Button,
								{
									class: T.entry.kind !== "file" ? "hidden" : "",
									"on:click": N,
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
									class: T.name === ".." ? "hidden" : "",
									"on:click": A,
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
			use(this.editing, (L) => {
				if (L) {
					const T = h("textarea", null);
					((T.value = "Loading file..."),
						L.getFile()
							.then((A) => A.text())
							.then((A) => (T.value = A)));
					const j = async () => {
						const A = await L.createWritable();
						(await A.write(T.value), await A.close(), (this.editing = null));
					};
					return h(
						"div",
						{ class: "editor" },
						h(
							"div",
							{ class: "controls" },
							h("div", { class: "name" }, L.name),
							h("div", { class: "expand" }),
							h(
								Button,
								{ "on:click": j, icon: "left", type: "primary", disabled: !1 },
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
						T,
					);
				}
			}),
			h("div", { style: { flexGrow: 1 } }),
			h(
				"div",
				{ class: "archive" },
				h(
					Button,
					{ type: "normal", icon: "full", disabled: v, "on:click": S },
					h(Icon, { icon: data$4 }),
					" Upload Folder Archive",
				),
				h(
					Button,
					{ type: "normal", icon: "full", disabled: O, "on:click": _ },
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
				const x = this.root;
				useChange([this.open], () => {
					this.open ? x.showModal() : x.close();
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
				h("img", { src: "app.webp", alt: "Terraria icon" }),
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
							disabled: use(gameState.playing, (x) => !x),
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
							disabled: use(this.allowPlay, (x) => !x),
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
		const x = use(gameState.playing, (_) => (_ ? "started" : "stopped")),
			e = use(gameState.playing, (_) =>
				_ ? "canvas started" : "canvas stopped",
			);
		return (
			(this.start = async () => {
				await preInit();
			}),
			h(
				"div",
				{ class: "tcontainer" },
				h("div", { class: x }, "Game not running."),
				h("canvas", {
					id: "canvas",
					class: e,
					"bind:this": use(this.canvas),
					"on:contextmenu": (_) => _.preventDefault(),
				}),
			)
		);
	},
	Main = function () {
		((this.css = `
		width: 100%;
		height: 100%;
		background: url(backdrop.webp);
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
		let x = h(GameView, { "bind:canvas": use(this.canvas) });
		return (
			(this.start = () => x.$.start()),
			h(
				"div",
				null,
				h(TopBar, {
					canvas: use(this.canvas),
					"bind:fsOpen": use(this.fsOpen),
				}),
				h("div", { class: "main" }, x, h(LogView, null)),
				h(
					Dialog,
					{ name: "File System", "bind:open": use(this.fsOpen) },
					h(OpfsExplorer, { open: use(this.fsOpen) }),
				),
				h(BottomBar, null),
			)
		);
	},
	t = globalThis.fetch,
	r = globalThis.SharedWorker,
	a = globalThis.localStorage,
	s = globalThis.navigator.serviceWorker,
	o = MessagePort.prototype.postMessage,
	n = {
		CLOSED: WebSocket.CLOSED,
		CONNECTING: WebSocket.CONNECTING,
		OPEN: WebSocket.OPEN,
	};
async function c() {
	const x = (
			await self.clients.matchAll({ type: "window", includeUncontrolled: !0 })
		).map(async (_) => {
			const S = await (function (v) {
				let O = new MessageChannel();
				return new Promise((L) => {
					(v.postMessage({ type: "getPort", port: O.port2 }, [O.port2]),
						(O.port1.onmessage = (T) => {
							L(T.data);
						}));
				});
			})(_);
			return (await i(S), S);
		}),
		e = Promise.race([
			Promise.any(x),
			new Promise((_, S) => setTimeout(S, 1e3, new TypeError("timeout"))),
		]);
	try {
		return await e;
	} catch (_) {
		if (_ instanceof AggregateError)
			throw (
				console.error(
					"bare-mux: failed to get a bare-mux SharedWorker MessagePort as all clients returned an invalid MessagePort.",
				),
				new Error("All clients returned an invalid MessagePort.")
			);
		return (
			console.warn(
				"bare-mux: failed to get a bare-mux SharedWorker MessagePort within 1s, retrying",
			),
			await c()
		);
	}
}
function i(x) {
	const e = new MessageChannel(),
		_ = new Promise((S, v) => {
			((e.port1.onmessage = (O) => {
				O.data.type === "pong" && S();
			}),
				setTimeout(v, 1500));
		});
	return (
		o.call(x, { message: { type: "ping" }, port: e.port2 }, [e.port2]),
		_
	);
}
function l(x, e) {
	const _ = new r(x, "bare-mux-worker");
	return (
		e &&
			s.addEventListener("message", (S) => {
				if (S.data.type === "getPort" && S.data.port) {
					console.debug("bare-mux: recieved request for port from sw");
					const v = new r(x, "bare-mux-worker");
					o.call(S.data.port, v.port, [v.port]);
				}
			}),
		_.port
	);
}
let h$1 = null;
function d() {
	if (h$1 === null) {
		const x = new MessageChannel(),
			e = new ReadableStream();
		let _;
		try {
			(o.call(x.port1, e, [e]), (_ = !0));
		} catch {
			_ = !1;
		}
		return ((h$1 = _), _);
	}
	return h$1;
}
class p {
	constructor(e) {
		((this.channel = new BroadcastChannel("bare-mux")),
			e instanceof MessagePort || e instanceof Promise
				? (this.port = e)
				: this.createChannel(e, !0));
	}
	createChannel(e, _) {
		if (self.clients)
			((this.port = c()),
				(this.channel.onmessage = (S) => {
					S.data.type === "refreshPort" && (this.port = c());
				}));
		else if (e && SharedWorker) {
			if (!e.startsWith("/") && !e.includes(":"))
				throw new Error("Invalid URL. Must be absolute or start at the root.");
			((this.port = l(e, _)),
				console.debug("bare-mux: setting localStorage bare-mux-path to", e),
				(a["bare-mux-path"] = e));
		} else {
			if (!SharedWorker)
				throw new Error("Unable to get a channel to the SharedWorker.");
			{
				const S = a["bare-mux-path"];
				if ((console.debug("bare-mux: got localStorage bare-mux-path:", S), !S))
					throw new Error(
						"Unable to get bare-mux workerPath from localStorage.",
					);
				this.port = l(S, _);
			}
		}
	}
	async sendMessage(e, _) {
		this.port instanceof Promise && (this.port = await this.port);
		try {
			await i(this.port);
		} catch {
			return (
				console.warn(
					"bare-mux: Failed to get a ping response from the worker within 1.5s. Assuming port is dead.",
				),
				this.createChannel(),
				await this.sendMessage(e, _)
			);
		}
		const S = new MessageChannel(),
			v = [S.port2, ...(_ || [])],
			O = new Promise((L, T) => {
				S.port1.onmessage = (j) => {
					const A = j.data;
					A.type === "error" ? T(A.error) : L(A);
				};
			});
		return (o.call(this.port, { message: e, port: S.port2 }, v), await O);
	}
}
class w extends EventTarget {
	constructor(e, _ = [], S, v) {
		(super(),
			(this.protocols = _),
			(this.readyState = n.CONNECTING),
			(this.url = e.toString()),
			(this.protocols = _));
		const O = (A) => {
				((this.protocols = A), (this.readyState = n.OPEN));
				const N = new Event("open");
				this.dispatchEvent(N);
			},
			L = async (A) => {
				const N = new MessageEvent("message", { data: A });
				this.dispatchEvent(N);
			},
			T = (A, N) => {
				this.readyState = n.CLOSED;
				const ie = new CloseEvent("close", { code: A, reason: N });
				this.dispatchEvent(ie);
			},
			j = () => {
				this.readyState = n.CLOSED;
				const A = new Event("error");
				this.dispatchEvent(A);
			};
		((this.channel = new MessageChannel()),
			(this.channel.port1.onmessage = (A) => {
				A.data.type === "open"
					? O(A.data.args[0])
					: A.data.type === "message"
						? L(A.data.args[0])
						: A.data.type === "close"
							? T(A.data.args[0], A.data.args[1])
							: A.data.type === "error" && j();
			}),
			S.sendMessage(
				{
					type: "websocket",
					websocket: {
						url: e.toString(),
						protocols: _,
						requestHeaders: v,
						channel: this.channel.port2,
					},
				},
				[this.channel.port2],
			));
	}
	send(...e) {
		if (this.readyState === n.CONNECTING)
			throw new DOMException(
				"Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.",
			);
		let _ = e[0];
		(_.buffer &&
			(_ = _.buffer.slice(_.byteOffset, _.byteOffset + _.byteLength)),
			o.call(
				this.channel.port1,
				{ type: "data", data: _ },
				_ instanceof ArrayBuffer ? [_] : [],
			));
	}
	close(e, _) {
		o.call(this.channel.port1, { type: "close", closeCode: e, closeReason: _ });
	}
}
function u(x, e, _) {
	(console.error(`error while processing '${_}': `, e),
		x.postMessage({ type: "error", error: e }));
}
function f(x) {
	for (let e = 0; e < x.length; e++) {
		const _ = x[e];
		if (
			!"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~".includes(
				_,
			)
		)
			return !1;
	}
	return !0;
}
const g = ["ws:", "wss:"],
	y = [101, 204, 205, 304],
	b = [301, 302, 303, 307, 308];
class m {
	constructor(e) {
		this.worker = new p(e);
	}
	async getTransport() {
		return (await this.worker.sendMessage({ type: "get" })).name;
	}
	async setTransport(e, _, S) {
		await this.setManualTransport(
			`
			const { default: BareTransport } = await import("${e}");
			return [BareTransport, "${e}"];
		`,
			_,
			S,
		);
	}
	async setManualTransport(e, _, S) {
		if (e === "bare-mux-remote") throw new Error("Use setRemoteTransport.");
		await this.worker.sendMessage(
			{ type: "set", client: { function: e, args: _ } },
			S,
		);
	}
	async setRemoteTransport(e, _) {
		const S = new MessageChannel();
		((S.port1.onmessage = async (v) => {
			const O = v.data.port,
				L = v.data.message;
			if (L.type === "fetch")
				try {
					(e.ready || (await e.init()),
						await (async function (T, j, A) {
							const N = await A.request(
								new URL(T.fetch.remote),
								T.fetch.method,
								T.fetch.body,
								T.fetch.headers,
								null,
							);
							if (!d() && N.body instanceof ReadableStream) {
								const ie = new Response(N.body);
								N.body = await ie.arrayBuffer();
							}
							N.body instanceof ReadableStream || N.body instanceof ArrayBuffer
								? o.call(j, { type: "fetch", fetch: N }, [N.body])
								: o.call(j, { type: "fetch", fetch: N });
						})(L, O, e));
				} catch (T) {
					u(O, T, "fetch");
				}
			else if (L.type === "websocket")
				try {
					(e.ready || (await e.init()),
						await (async function (T, j, A) {
							const [N, ie] = A.connect(
								new URL(T.websocket.url),
								T.websocket.protocols,
								T.websocket.requestHeaders,
								(le) => {
									o.call(T.websocket.channel, { type: "open", args: [le] });
								},
								(le) => {
									le instanceof ArrayBuffer
										? o.call(
												T.websocket.channel,
												{ type: "message", args: [le] },
												[le],
											)
										: o.call(T.websocket.channel, {
												type: "message",
												args: [le],
											});
								},
								(le, q) => {
									o.call(T.websocket.channel, { type: "close", args: [le, q] });
								},
								(le) => {
									o.call(T.websocket.channel, { type: "error", args: [le] });
								},
							);
							((T.websocket.channel.onmessage = (le) => {
								le.data.type === "data"
									? N(le.data.data)
									: le.data.type === "close" &&
										ie(le.data.closeCode, le.data.closeReason);
							}),
								o.call(j, { type: "websocket" }));
						})(L, O, e));
				} catch (T) {
					u(O, T, "websocket");
				}
		}),
			await this.worker.sendMessage(
				{
					type: "set",
					client: { function: "bare-mux-remote", args: [S.port2, _] },
				},
				[S.port2],
			));
	}
	getInnerPort() {
		return this.worker.port;
	}
}
class k {
	constructor(e) {
		this.worker = new p(e);
	}
	createWebSocket(e, _ = [], S, v) {
		try {
			e = new URL(e);
		} catch {
			throw new DOMException(
				`Faiiled to construct 'WebSocket': The URL '${e}' is invalid.`,
			);
		}
		if (!g.includes(e.protocol))
			throw new DOMException(
				`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${e.protocol}' is not allowed.`,
			);
		(Array.isArray(_) || (_ = [_]), (_ = _.map(String)));
		for (const O of _)
			if (!f(O))
				throw new DOMException(
					`Failed to construct 'WebSocket': The subprotocol '${O}' is invalid.`,
				);
		return ((v = v || {}), new w(e, _, this.worker, v));
	}
	async fetch(e, _) {
		const S = new Request(e, _),
			v = _?.headers || S.headers,
			O = v instanceof Headers ? Object.fromEntries(v) : v,
			L = S.body;
		let T = new URL(S.url);
		if (T.protocol.startsWith("blob:")) {
			const j = await t(T),
				A = new Response(j.body, j);
			return (
				(A.rawHeaders = Object.fromEntries(j.headers)),
				(A.rawResponse = {
					body: j.body,
					headers: Object.fromEntries(j.headers),
					status: j.status,
					statusText: j.statusText,
				}),
				(A.finalURL = T.toString()),
				A
			);
		}
		for (let j = 0; ; j++) {
			let A = (
					await this.worker.sendMessage(
						{
							type: "fetch",
							fetch: {
								remote: T.toString(),
								method: S.method,
								headers: O,
								body: L || void 0,
							},
						},
						L ? [L] : [],
					)
				).fetch,
				N = new Response(y.includes(A.status) ? void 0 : A.body, {
					headers: new Headers(A.headers),
					status: A.status,
					statusText: A.statusText,
				});
			((N.rawHeaders = A.headers),
				(N.rawResponse = A),
				(N.finalURL = T.toString()));
			const ie = _?.redirect || S.redirect;
			if (!b.includes(N.status)) return N;
			switch (ie) {
				case "follow": {
					const le = N.headers.get("location");
					if (20 > j && le !== null) {
						T = new URL(le, T);
						continue;
					}
					throw new TypeError("Failed to fetch");
				}
				case "error":
					throw new TypeError("Failed to fetch");
				case "manual":
					return N;
			}
		}
	}
}
console.debug("bare-mux: running v2.1.8 (build 75b1f5a)");
const connection = new m("/mux/worker.js");
new k();
window.MonoWasmThreads = !1;
let initialized = !1;
async function ensureWisp() {
	if (initialized) return;
	const x =
		(location.protocol === "https:" ? "wss" : "ws") +
		"://" +
		location.host +
		"/wisp/";
	(await connection.setTransport("/ep/index.mjs", [{ wisp: x }]),
		(initialized = !0));
}
async function wispFetchStream(x, e = {}) {
	await ensureWisp();
	const _ = await epoxyFetchStreaming(x, {
		method: e.method || "GET",
		body: e.body || null,
		headers: new Headers(e.headers || {}),
		signal: e.signal,
	});
	if (!_.ok) throw new Error(`Wisp-fetch failed: ${_.status} ${_.statusText}`);
	if (!_.body) throw new Error("No response body");
	const S = _.headers.get("content-length"),
		v = S ? parseInt(S, 10) : null;
	return { stream: _.body, totalBytes: v };
}
const CONTENT_ARCHIVE_PATH =
		"https://b2.crosbreaker.dev/file/crosbreaker/Webports/Terraria/Content.tar",
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
			(this.downloading = !1),
			(this.status = ""),
			(this.percent = 0),
			(this.downloadedMB = "0.0"),
			(this.totalMB = null),
			(this.mount = async () => {
				try {
					const x = new URL(CONTENT_ARCHIVE_PATH, location.href).href;
					this.downloading = !0;
					const { stream: e, totalBytes: _ } = await wispFetchStream(x, {
						method: "GET",
						headers: {
							Accept: "*/*",
							"Accept-Encoding": "identity",
							"User-Agent": navigator.userAgent,
						},
					});
					((this.downloading = !1),
						(this.totalMB = _ ? (_ / 1024 / 1024).toFixed(1) : null));
					const S = this;
					let v = 0;
					const O = e.getReader();
					let L = new ReadableStream({
						async pull(T) {
							const { value: j, done: A } = await O.read();
							if (A || !j) {
								T.close();
								return;
							}
							(T.enqueue(j),
								(v += j.byteLength),
								(S.downloadedMB = (v / 1024 / 1024).toFixed(1)),
								_ && (S.percent = (v / _) * 100));
						},
					});
					((this.extracting = !0),
						x.endsWith(".gz") &&
							(L = L.pipeThrough(new DecompressionStream("gzip"))),
						await extractTar(L, rootFolder),
						await rootFolder.getFileHandle(".ContentExists", { create: !0 }),
						(this.extracting = !1),
						(this.percent = 100),
						this["on:done"]());
				} catch (x) {
					((this.extracting = !1),
						(this.status = `Failed to install content: ${x}`),
						console.error(x));
				}
			}),
			(this.css = `
		@keyframes pulse {
			0%, 100% { opacity: 1; }
			50% { opacity: 0.4; }
		}
		.downloading {
			text-align: center;
			animation: pulse 1.2s ease-in-out infinite;
		}
	`),
			h(
				"div",
				{ class: "step" },
				h("p", { class: "center" }, "Installing Terraria content..."),
				$if(
					use(this.downloading),
					h(
						"p",
						{ class: "downloading" },
						"Downloading... (this may take a while)",
					),
				),
				$if(
					use(this.totalMB, (x) => x !== null),
					h(
						"div",
						null,
						h(Progress, { percent: use(this.percent) }),
						h(
							"p",
							{ style: "text-align:center" },
							use(this.downloadedMB),
							" / ",
							use(this.totalMB),
							" MB",
						),
					),
				),
				$if(use(this.status), h("div", { class: "error" }, use(this.status))),
				$if(
					use(this.extracting, (x) => x),
					h(
						"p",
						{ style: "text-align:center" },
						"Extracting... this may take a few minutes.",
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
					src: "backdrop.webp",
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
							src: "logo.webp",
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
		let x = h(Main, null),
			e = null;
		const _ = () => (e ??= x.$.start()),
			S = () => {
				(this.el.addEventListener("animationend", this.el.remove),
					(this.el.style.animation = "fadeout 0.5s ease"),
					_());
			};
		return (
			(this.mount = () => {
				initialHasContent && _();
			}),
			h(
				"div",
				{ id: "app", class: "dark" },
				initialHasContent
					? null
					: h(
							"div",
							{ id: "splash", "bind:this": use(this.el) },
							h(Splash, { "on:next": S, start: _ }),
						),
				h("div", { id: "main" }, x),
			)
		);
	},
	root = document.getElementById("app");
try {
	root.replaceWith(h(App, null));
} catch (x) {
	(console.log(x),
		root.replaceWith(document.createTextNode(`Failed to load: ${x}`)));
}
