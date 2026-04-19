import { qsrPath } from "./qsr-base.js";

function addScript(src) {
	return new Promise((resolve, reject) => {
		const s = document.createElement("script");
		s.src = src;
		s.onload = resolve;
		s.onerror = reject;
		document.head.appendChild(s);
	});
}

let proxyLoaded = false;
let proxyPromise = null;

export function loadProxyLibs() {
	if (proxyPromise) return proxyPromise;
	proxyPromise = (async () => {
		await Promise.all([
			addScript(qsrPath("marcs/scramjet.all.js")),
			addScript(qsrPath("mux/index.js")),
			addScript(qsrPath("ep/index.js")),
			addScript(qsrPath("lc/index.js")),
		]);
		const pre = await import("./pre.js");
		pre.initPre();
		proxyLoaded = true;
	})();
	return proxyPromise;
}

export function isProxyLoaded() {
	return proxyLoaded;
}

const _addr = document.getElementById("address");
const _form = document.getElementById("form");
const _grid = document.getElementById("quick-apps-grid");

if (_addr) {
	_addr.addEventListener("focus", () => loadProxyLibs(), { once: true });
}

if (_form) {
	_form.addEventListener("submit", async (e) => {
		if (!proxyLoaded) {
			e.preventDefault();
			e.stopImmediatePropagation();
			await loadProxyLibs();
			_form.requestSubmit();
		}
	});
}

if (_grid) {
	_grid.addEventListener("click", async (e) => {
		const tile = e.target.closest(".apps-grid-tile");
		if (!tile) return;
		
		const url = tile.getAttribute("data-url");
		if (!url) return;
		
		if (!proxyLoaded) {
			await loadProxyLibs();
		}
		
		const { searchSJ } = await import("./pre.js");
		searchSJ(url);
	});
}
