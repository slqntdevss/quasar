//testing for secuirly

function addScript(src, defer = false) {
	const s = document.createElement("script");
	s.src = src;
	if (defer) s.defer = true;
	document.head.appendChild(s);
}

addScript("/marcs/scramjet.all.js");
addScript("mux/index.js", true);
addScript("ep/index.js", true);
document.addEventListener("DOMContentLoaded", () => {
	addScript("assets/js/pre.js", true);
});
