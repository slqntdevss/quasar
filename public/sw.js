importScripts("/marcs/scramjet.all.js");
importScripts("/vu/vu.bundle.js");
importScripts("/vu/vu.config.js");
importScripts("/vu/uv.sw.js");

const { ScramjetServiceWorker } = $scramjetLoadWorker();
const scramjet = new ScramjetServiceWorker();

const uvsw = new UVServiceWorker();

// prevent some dumb error with scramjet when the sw is updated its weird idk
async function initScramjetDB() {
	return new Promise((resolve, reject) => {
		const request = indexedDB.open("$scramjet", 1);

		request.onupgradeneeded = function (event) {
			const db = event.target.result;
			if (!db.objectStoreNames.contains("config")) {
				db.createObjectStore("config");
			}
		};

		request.onsuccess = () => resolve(request.result);
		request.onerror = () => reject(request.error);
	});
}

self.addEventListener("install", (event) => {
	event.waitUntil(initScramjetDB().then(() => self.skipWaiting()));
});

async function handleRequest(event) {
	await scramjet.loadConfig();
	if (scramjet.route(event)) return await scramjet.fetch(event);
	if (uvsw.route(event)) return await uvsw.fetch(event);
	return await fetch(event.request);
}

self.addEventListener("fetch", (event) => {
	event.respondWith(handleRequest(event));
});
