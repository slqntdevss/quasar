//testing for secuirly

function addScript(src) {
	return new Promise((resolve, reject) => {
		const s = document.createElement("script");
		s.src = src;
		s.onload = resolve;
		s.onerror = reject;
		document.head.appendChild(s);
	});
}

(async () => {
	await Promise.all([
		addScript("/marcs/scramjet.all.js"),
		addScript("mux/index.js"),
		addScript("ep/index.js"),
		addScript("lc/index.js"),
	]);

	await addScript("/assets/js/pre.js");
})();
