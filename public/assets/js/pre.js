"use strict";
import extensionsData from "../json/extensions.json";
import { qsrPath } from "./qsr-base.js";

let extensions = extensionsData;
let timeout;
let transportReady = false;

let connection;
let scramjet;
let initialized = false;

const GAME_MODE = import.meta.env.VITE_GAME_MODE || "selfhosted";
const WISP_URL = import.meta.env.VITE_WISP_URL;

function getWispUrl() {
	if (GAME_MODE === "static" && WISP_URL) {
		return WISP_URL;
	}
	return (location.protocol === "https:" ? "wss" : "ws") +
		"://" +
		location.host +
		qsrPath("wisp/");
}

async function registerSW() {
	if (!navigator.serviceWorker) {
		throw new Error("Service workers not supported");
	}
	await navigator.serviceWorker.register(qsrPath("sw.js"), {
		scope: qsrPath(""),
	});
	await navigator.serviceWorker.ready;
}

async function setupTransport() {
	if (transportReady) return;
	try {
		await registerSW();
	} catch (e) {
		console.error("SW registration failed:", e);
	}
	const wispUrl = getWispUrl();
	const currentTransport = await connection.getTransport();
	if (currentTransport !== qsrPath("ep/index.mjs")) {
		await connection.setTransport(qsrPath("ep/index.mjs"), [{ wisp: wispUrl }]);
	}
	transportReady = true;
}

function search(input, template) {
	try {
		return new URL(input).toString();
	} catch (err) {}
	try {
		const url = new URL(`https://${input}`);
		if (url.hostname.includes(".")) return url.toString();
	} catch (err) {}
	return template.replace("%s", encodeURIComponent(input));
}

let frame, autoc, wContainer, cursor, address, form;

async function searchSJ(url) {
	if (!initialized) initPre();
	let cleanedUrl = search(url, "https://duckduckgo.com/?q=%s");
	if (cleanedUrl.includes("://now.gg")) {
		cleanedUrl = "https://nowgg.fun";
	}
	frame.style.display = "block";
	await setupTransport();
	if (cursor) {
		cursor.style.opacity = 0;
	}
	document.documentElement.style.cursor = "auto";
	document.body.style.cursor = "auto";
	wContainer.classList.add("show");
	const videoEl = document.querySelector('[data-ad="video"]');
	if (videoEl) videoEl.style.top = "1rem";
	if (autoc) autoc.classList.remove("show");
	const sjEncode = scramjet.encodeUrl.bind(scramjet);
	frame.src = sjEncode(cleanedUrl);
}

const activatedExtensions = new Set();

function showAddonPopup(addonData, url) {
	const extensionKey = `${addonData.extensionName}_${new URL(url).hostname}`;
	if (activatedExtensions.has(extensionKey)) {
		return;
	}
	const popup = document.querySelector(".addon-popup");
	popup.classList.add("visible");
	const title = popup.querySelector(".addon-popup-title");
	const name = document.getElementById("script-name");
	const description = document.getElementById("script-description");
	const closeAddon = document.getElementById("addon-cancel");
	const activateAddon = document.getElementById("addon-inject");

	title.textContent = `Extension available for ${addonData.site}`;
	name.textContent = addonData.extensionName + ":";
	description.textContent = addonData.description;
	const newCloseBtn = closeAddon.cloneNode(true);
	const newActivateBtn = activateAddon.cloneNode(true);
	closeAddon.parentNode.replaceChild(newCloseBtn, closeAddon);
	activateAddon.parentNode.replaceChild(newActivateBtn, activateAddon);

	newCloseBtn.addEventListener("click", () => {
		popup.classList.remove("visible");
		activatedExtensions.add(extensionKey);
	});
	newActivateBtn.addEventListener("click", () => {
		const scriptEl = document.createElement("script");
		scriptEl.innerHTML = addonData.code;
		frame.contentDocument.body.insertAdjacentElement("afterbegin", scriptEl);
		popup.classList.remove("visible");
		activatedExtensions.add(extensionKey);
	});
}

let lastIframeUrl = "";

function injectExtensions() {
	if (!frame.contentDocument || !frame.contentDocument.body) return;

	const url = scramjet.decodeUrl(frame.contentWindow.location.href);
	document.getElementById("urlInput").value = url;

	for (const ext of extensions) {
		if (ext.site === "*") {
			const scriptEl = document.createElement("script");
			scriptEl.innerHTML = ext.code;
			frame.contentDocument.body.insertAdjacentElement("afterbegin", scriptEl);
		} else if (url.includes(ext.site)) {
			showAddonPopup(ext, url);
			break;
		}
	}
}

function initPre() {
	if (initialized) return;
	initialized = true;

	form = document.getElementById("form");
	autoc = document.getElementById("autoc");
	wContainer = document.querySelector(".w-container");
	const backBtn = document.getElementById("backBtn");
	const forwardBtn = document.getElementById("forwardBtn");
	const reloadBtn = document.getElementById("reloadBtn");
	const fullscreenBtn = document.getElementById("fullscreenBtn");
	const closeBtn = document.getElementById("closeBtn");
	frame = document.getElementById("frame");
	address = document.getElementById("address");
	cursor = document.querySelector(".cursor");

	connection = new window.BareMux.BareMuxConnection(qsrPath("mux/worker.js"));
	const { ScramjetController } = window.$scramjetLoadController();
	scramjet = new ScramjetController({
		files: {
			wasm: qsrPath("marcs/scramjet.wasm.wasm"),
			all: qsrPath("marcs/scramjet.all.js"),
			sync: qsrPath("marcs/scramjet.sync.js"),
		},
		prefix: qsrPath("scramjet/"),
	});
	scramjet.init();

	setupTransport();

	if (form) {
		form.addEventListener("submit", async (event) => {
			event.preventDefault();
			searchSJ(address.value);
		});
	}

	if (frame) {
		frame.addEventListener("load", () => {
			injectExtensions();
			const checkUrlChange = setInterval(() => {
				if (!frame.contentWindow) {
					clearInterval(checkUrlChange);
					return;
				}
				try {
					const currentUrl = scramjet.decodeUrl(frame.contentWindow.location.href);
					if (currentUrl !== lastIframeUrl && lastIframeUrl !== "") {
						lastIframeUrl = currentUrl;
						injectExtensions();
					}
					lastIframeUrl = currentUrl;
				} catch (e) {}
			}, 500);
		});
	}

	if (address) {
		address.addEventListener("input", (e) => {
			clearTimeout(timeout);
			timeout = setTimeout(async () => {
				const query = e.target.value.trim();
				if (query.length > 0) {
					try {
						const response = await fetch(qsrPath(`autoc?q=${encodeURIComponent(query)}`));
						if (!response.ok) {
							console.error("autocomplete request failed", response.status);
							return;
						}
						const suggestions = await response.json();
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
			}, 250);
		});
	}

	if (backBtn) {
		backBtn.addEventListener("click", () => {
			if (frame.contentWindow) frame.contentWindow.history.back();
		});
	}

	if (forwardBtn) {
		forwardBtn.addEventListener("click", () => {
			if (frame.contentWindow) frame.contentWindow.history.forward();
		});
	}

	if (reloadBtn) {
		reloadBtn.addEventListener("click", () => {
			frame.contentWindow.location.reload();
		});
	}

	if (fullscreenBtn) {
		fullscreenBtn.addEventListener("click", () => {
			if (!document.fullscreenElement) {
				frame.requestFullscreen().catch((err) => {
					console.error(`Error attempting to enable fullscreen: ${err.message}`);
				});
			} else {
				document.exitFullscreen();
			}
		});
	}

	if (closeBtn) {
		closeBtn.addEventListener("click", () => {
			frame.src = "about:blank";
			document.querySelector(".center").style.display = "flex";
			document.querySelector(".w-container").classList.remove("show");
			frame.style.display = "none";
			const videoEl = document.querySelector('[data-ad="video"]');
			if (videoEl) videoEl.style.top = "900px";
			if (localStorage.getItem("customCursor") !== "false" && cursor) {
				cursor.style.opacity = 1;
				document.documentElement.style.cursor = "none";
				document.body.style.cursor = "none";
			}
		});
	}

	const urlForm = document.getElementById("urlForm");
	if (urlForm) {
		urlForm.addEventListener("submit", async (e) => {
			e.preventDefault();
			searchSJ(document.getElementById("urlInput").value);
		});
	}

	const grid = document.getElementById("quick-apps-grid");
	if (grid) {
		grid.addEventListener("click", (e) => {
			const tile = e.target.closest(".apps-grid-tile");
			if (tile) searchSJ(tile.getAttribute("data-url"));
		});
	}
}

export { searchSJ, search, initPre };
