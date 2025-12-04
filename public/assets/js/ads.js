// func to load adsterra banner ads

// ad server thing
const host = "brillianceremisswhistled.com";

// banner config
globalThis.atOptions = {
	key: "",
	format: "iframe",
	height: 600,
	width: 160,
	params: {},
};

// global function to load ads
globalThis.loadAds = function (config) {
	const scripts = [];

	if (config.banner) {
		// set banner key
		globalThis.atOptions.key = config.banner;
		scripts.push(`//${host}/${config.banner}/invoke.js`);
	}

	if (config.native) {
		// create native banner container
		document.body.insertAdjacentHTML(
			"beforeend",
			`<div id="container-${config.native}"></div>`
		);
		scripts.push(`//${host}/${config.native}/invoke.js`);
	}

	// load scripts
	scripts.forEach((link) => {
		const script = document.createElement("script");
		script.src = link;
		document.body.appendChild(script);
	});
};

// AD FRAUD EZ

// hook XHR and fetch to prevent redirects
const originalXHROpen = XMLHttpRequest.prototype.open;
const originalXHRSend = XMLHttpRequest.prototype.send;

XMLHttpRequest.prototype.open = function (method, url, ...args) {
	this._url = url;
	return originalXHROpen.apply(this, [method, url, ...args]);
};

XMLHttpRequest.prototype.send = function (...args) {
	// check if domain is external
	const urlObj = new URL(this._url, window.location.href);
	if (urlObj.hostname !== window.location.hostname) {
		const originalOnReadyStateChange = this.onreadystatechange;
		this.onreadystatechange = function () {
			if (this.readyState === 4) {
				const status = this.status;
				if (status >= 300 && status < 400) {
					this.abort();
					return;
				}
			}
			if (originalOnReadyStateChange) {
				originalOnReadyStateChange.apply(this, arguments);
			}
		};
	}
	return originalXHRSend.apply(this, args);
};

const originalFetch = window.fetch;
window.fetch = function (url, options = {}) {
	const urlObj = new URL(url, window.location.href);
	if (urlObj.hostname !== window.location.hostname) {
		options.redirect = "error";
		return originalFetch(url, options).catch(() => {
			return new Response(null, { status: 200 });
		});
	}
	return originalFetch(url, options);
};

// hide ads
setInterval(() => {
	document.querySelectorAll('iframe[src="about:blank"]').forEach((iframe) => {
		iframe.style.display = "none";
		iframe.style.visibility = "hidden";
		iframe.style.pointerEvents = "none";
		iframe.style.position = "absolute";
		iframe.style.width = "0";
		iframe.style.height = "0";
	});
	document.querySelectorAll("[id]").forEach((element) => {
		if (/container-[a-zA-Z0-9]{5,}/i.test(element.id)) {
			element.style.display = "none";
			element.style.visibility = "hidden";
			element.style.pointerEvents = "none";
			element.style.position = "absolute";
			element.style.width = "0";
			element.style.height = "0";
		}
	});
}, 100);
