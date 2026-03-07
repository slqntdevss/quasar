"use strict";
const stockSW = "./sw.js";
const form = document.getElementById("form");
const connection = new BareMux.BareMuxConnection("/mux/worker.js");
const { ScramjetController } = $scramjetLoadController();
const autoc = document.getElementById("autoc");
const wContainer = document.querySelector(".w-container");
const backBtn = document.getElementById("backBtn");
const forwardBtn = document.getElementById("forwardBtn");
const reloadBtn = document.getElementById("reloadBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const closeBtn = document.getElementById("closeBtn");
let extensions;

// FUCK COMMONJS BRO
async function loadExtensions() {
	extensions = await (await fetch("/assets/json/extensions.json")).json();
}
loadExtensions();
const frame = document.getElementById("frame");
let timeout;
async function searchSJ(url) {
	let cleanedUrl = search(url, "https://duckduckgo.com/?q=%s");

	if (cleanedUrl.includes("://now.gg")) {
		cleanedUrl = "https://nowgg.fun";
	}
	frame.style.display = "block";
	/*let wispUrl =
		(location.protocol === "https:" ? "wss" : "ws") +
		"://" +
		location.host +
		"/wisp/";*/
	let wispUrl = "ws://localhost:3001";

	if ((await connection.getTransport()) !== "/ep/index.mjs") {
		await connection.setTransport("/ep/index.mjs", [{ wisp: wispUrl }]);
	}
	cursor.style.opacity = 0;
	document.documentElement.style.cursor = "auto";
	document.body.style.cursor = "auto";
	wContainer.classList.add("show");
	const videoEl = document.querySelector('[data-ad="video"]');
	if (videoEl) videoEl.style.top = "1rem";
	autoc.classList.remove("show");
	const sjEncode = scramjet.encodeUrl.bind(scramjet);
	frame.src = sjEncode(cleanedUrl);
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
	searchSJ(address.value);
});

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

	newCloseBtn.addEventListener("click", (e) => {
		popup.classList.remove("visible");
		activatedExtensions.add(extensionKey);
	});
	newActivateBtn.addEventListener("click", (e) => {
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
	frame.contentWindow.location.reload();
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
	const videoEl = document.querySelector('[data-ad="video"]');
	if (videoEl) videoEl.style.top = "900px";
	if (localStorage.getItem("customCursor") !== "false") {
		cursor.style.opacity = 1;
		document.documentElement.style.cursor = "none";
		document.body.style.cursor = "none";
	}
});
document.getElementById("urlForm").addEventListener("submit", async (e) => {
	event.preventDefault();
	searchSJ(document.getElementById("urlInput").value);
});

(async function () {
	const grid = document.getElementById("quick-apps-grid");
	if (!grid) return;
	try {
		const resp = await fetch("/assets/json/apps.json");
		if (!resp.ok) {
			grid.innerHTML =
				'<div style="color: var(--main-text, white); text-align:center;">No apps found.</div>';
			return;
		}
		const apps = await resp.json();
		const gridHTML = `<div class="apps-grid-container">
		${apps
			.slice(0, 6)
			.map(
				(app, idx) => `
			<div class="apps-grid-tile" tabindex="0" data-url="${app.url}">
				<img src="/assets/img${app.img}" alt="${app.name}" />
				<span class="apps-grid-label">${app.name}</span>
			</div>
		`,
			)
			.join("")}
		</div>`;
		grid.innerHTML = gridHTML;
		Array.from(grid.querySelectorAll(".apps-grid-tile")).forEach((tile) => {
			tile.addEventListener("click", async () => {
				let url = tile.getAttribute("data-url");
				searchSJ(url);
			});
		});
	} catch (e) {
		grid.innerHTML =
			'<div style="color: var(--main-text, white); text-align:center;">Error loading apps.</div>';
	}
})();
