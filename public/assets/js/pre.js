"use strict";

const stockSW = "./sw.js";
const swAllowedHostnames = ["localhost", "127.0.0.1"];
const connection = new BareMux.BareMuxConnection("/mux/worker.js");
const { ScramjetController } = $scramjetLoadController();

let timeout;
async function registerSW() {
	if (!navigator.serviceWorker) {
		if (
			location.protocol !== "https:" &&
			!swAllowedHostnames.includes(location.hostname)
		)
			throw new Error("Service workers cannot be registered without https.");

		throw new Error("Your browser doesn't support service workers.");
	}

	await navigator.serviceWorker.register(stockSW);
}
async function searchSJ(url) {
	try {
		await registerSW();
	} catch (err) {
		throw err;
	}

	let cleanedUrl = search(url, "https://duckduckgo.com/?q=%s");

	if (cleanedUrl.includes("://now.gg")) {
		cleanedUrl = "https://nowgg.fun";
	}
	frame.style.display = "block";
	let wispUrl =
		(location.protocol === "https:" ? "wss" : "ws") +
		"://" +
		location.host +
		"/wisp/";

	if ((await connection.getTransport()) !== "/ep/index.mjs") {
		await connection.setTransport("/ep/index.mjs", [{ wisp: wispUrl }]);
	}
	const sjEncode = scramjet.encodeUrl.bind(scramjet);
	frame.src = sjEncode(cleanedUrl);
	cursor.style.opacity = 0;
	document.documentElement.style.cursor = "auto";
	document.body.style.cursor = "auto";
	wContainer.classList.add("show");
	autoc.classList.remove("show");
}
function search(input, template) {
	try {
		return new URL(input).toString();
	} catch (err) {}

	try {
		const url = new URL(`http://${input}`);
		if (url.hostname.includes(".")) return url.toString();
	} catch (err) {}
	return template.replace("%s", encodeURIComponent(input));
}
const scramjet = new ScramjetController({
	files: {
		wasm: "/marcs/scramjet.wasm.wasm",
		all: "/marcs/scramjet.all.js",
		sync: "/marcs/scramjet.sync.js",
	},
});
scramjet.init();
