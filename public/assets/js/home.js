//testing for secuirly

function addScript(src, defer = false) {
	const s = document.createElement("script");
	s.src = src;
	if (defer) s.defer = true;
	document.head.appendChild(s);
}

(async () => {
	await addScript("/marcs/scramjet.all.js");
	await addScript("mux/index.js");
	await addScript("ep/index.js");
	await addScript("assets/js/pre.js");
})();
