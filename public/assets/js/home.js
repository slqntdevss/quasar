//testing for secuirly

function addScript(src, defer = false) {
	const s = document.createElement("script");
	s.src = src;
	if (defer) s.defer = true;
	document.head.appendChild(s);
}

addScript("/marcs/scramjet.all.js");
addScript("mux/index.js");
addScript("ep/index.js");
addScript("assets/js/pre.js");
