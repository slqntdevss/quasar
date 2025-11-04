"use strict";
const stockSW = "./sw.js";
const swAllowedHostnames = ["localhost", "127.0.0.1"];
const form = document.getElementById("form");
const address = document.getElementById("address");
const connection = new BareMux.BareMuxConnection("/mux/worker.js");
const { ScramjetController } = $scramjetLoadController();
const autoc = document.getElementById("autoc");
const wContainer = document.querySelector(".w-container");
const backBtn = document.getElementById("backBtn");
const forwardBtn = document.getElementById("forwardBtn");
const reloadBtn = document.getElementById("reloadBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const closeBtn = document.getElementById("closeBtn");
let frame = document.getElementById("frame");
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
form.addEventListener("submit", async (event) => {
	event.preventDefault();

	try {
		await registerSW();
	} catch (err) {
		throw err;
	}

	const url = search(address.value, "https://duckduckgo.com/?q=%s");

	frame.style.display = "block";
	let wispUrl =
		(location.protocol === "https:" ? "wss" : "ws") +
		"://" +
		location.host +
		"/wisp/";
	if ((await connection.getTransport()) !== "/ep/index.mjs") {
		await connection.setTransport("/ep/index.mjs", [{ wisp: wispUrl }]);
	}
	console.log(wispUrl);
	console.log(wispUrl);
	console.log(wispUrl);
	const sjEncode = scramjet.encodeUrl.bind(scramjet);
	frame.src = sjEncode(url);
	cursor.style.opacity = 0;
	document.documentElement.style.cursor = "auto";
	document.body.style.cursor = "auto";
	wContainer.classList.add("show");
	autoc.classList.remove("show");
});

frame.addEventListener("load", () => {
	const url = scramjet.decodeUrl(frame.src);
	console.log(url);
	document.getElementById("urlInput").value = url;
});

address.addEventListener("input", (e) => {
	clearTimeout(timeout);
	timeout = setTimeout(async () => {
		const query = e.target.value.trim();
		if (query.length > 0) {
			try {
				const response = await fetch(`/autoc?q=${encodeURIComponent(query)}`);
				if (!response.ok) {
					console.error("autocomplete request failed", response.status);
					return;
				}
				const suggestions = await response.json();
				console.log(suggestions);
				autoc.innerHTML = "";
				if (suggestions.length > 0) {
					for (const suggestion of suggestions) {
						const div = document.createElement("div");
						div.classList.add("autoc-item");
						div.textContent = suggestion.phrase;
						div.addEventListener("click", () => {
							address.value = suggestion.phrase;
							form.requestSubmit();
							autoc.classList.remove("show");
						});
						autoc.appendChild(div);
					}
					autoc.classList.add("show");
				} else {
					autoc.classList.remove("show");
				}
			} catch (err) {
				console.log("autocomplete failed: " + err);
			}
		} else {
			autoc.classList.remove("show");
		}
	});
});
backBtn.addEventListener("click", () => {
	if (frame.contentWindow) {
		frame.contentWindow.history.back();
	}
});
forwardBtn.addEventListener("click", () => {
	if (frame.contentWindow) {
		frame.contentWindow.history.forward();
	}
});
reloadBtn.addEventListener("click", () => {
	frame.src = frame.src;
});
fullscreenBtn.addEventListener("click", () => {
	if (!document.fullscreenElement) {
		frame.requestFullscreen().catch((err) => {
			console.error(`Error attempting to enable fullscreen: ${err.message}`);
		});
	} else {
		document.exitFullscreen();
	}
});
closeBtn.addEventListener("click", () => {
	frame.src = "about:blank";
	document.querySelector(".center").style.display = "flex";
	document.querySelector(".w-container").classList.remove("show");
	frame.style.display = "none";
	cursor.style.opacity = 1;
	document.documentElement.style.cursor = "none";
	document.body.style.cursor = "none";
});
document.getElementById("urlForm").addEventListener("submit", async (e) => {
	event.preventDefault();

	try {
		await registerSW();
	} catch (err) {
		throw err;
	}

	const url = search(
		document.getElementById("urlInput").value,
		"https://duckduckgo.com/?q=%s"
	);

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
	frame.src = sjEncode(url);
});
