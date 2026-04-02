importScripts("/marcs/scramjet.all.js");
importScripts("/vu/vu.bundle.js");
importScripts("/vu/vu.config.js");
importScripts("/vu/uv.sw.js");

const { ScramjetServiceWorker } = $scramjetLoadWorker();
const scramjet = new ScramjetServiceWorker();

const uvsw = new UVServiceWorker();

self.addEventListener("error", function (event) {
	if (event.error?.name === "NotFoundError") {
		event.preventDefault();
		cleanup();
	}
});

self.addEventListener("unhandledrejection", function (event) {
	if (event.reason?.name === "NotFoundError") {
		event.preventDefault();
		cleanup();
	}
});

async function cleanup() {
	try {
		indexedDB.deleteDatabase("$scramjet");

		await self.registration.unregister();
	} catch (err) {
		console.error("failed to fix:", err);
	}
}
async function handleRequest(event) {
	await scramjet.loadConfig();
	if (scramjet.route(event)) return await scramjet.fetch(event);
	if (uvsw.route(event)) return await uvsw.fetch(event);
	return await fetch(event.request);
}

self.addEventListener("fetch", (event) => {
	const path = new URL(event.request.url).pathname;
	if (path.includes("/scramjet/") || path.includes("/qsr/")) {
		event.respondWith(handleRequest(event));
	}
});
