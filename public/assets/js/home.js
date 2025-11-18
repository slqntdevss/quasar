//testing for secuirly

async function addScript(src, defer = false) {
	return new Promise((resolve, reject) => {
		const s = document.createElement("script");
		s.src = src;
		s.onload = resolve;
		s.onerror = reject;
		document.head.appendChild(s);
	});
}

(async () => {
	await addScript("/marcs/scramjet.all.js");
	await addScript("mux/index.js");
	await addScript("ep/index.js");
	await new Promise((r) => setTimeout(r, 150));

	await addScript("/assets/js/pre.js");
})();
