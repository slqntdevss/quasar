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

function loadProxyLibs() {
	if (proxyPromise) return proxyPromise;
	proxyPromise = (async () => {
		await Promise.all([
			addScript("/marcs/scramjet.all.js"),
			addScript("mux/index.js"),
			addScript("ep/index.js"),
			addScript("lc/index.js"),
		]);
		await addScript("/assets/js/pre.js");
		proxyLoaded = true;
	})();
	return proxyPromise;
}

const _addr = document.getElementById("address");
const _form = document.getElementById("form");

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
