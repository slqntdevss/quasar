importScripts("/marcs/scramjet.all.js");
importScripts("/vu/vu.bundle.js");
importScripts("/vu/vu.config.js");
importScripts("/vu/uv.sw.js");

const { ScramjetServiceWorker } = $scramjetLoadWorker();
const scramjet = new ScramjetServiceWorker();

const uvsw = new UVServiceWorker();

async function handleRequest(event) {
	await scramjet.loadConfig();
	if (scramjet.route(event)) return await scramjet.fetch(event);
	if (uvsw.route(event)) return await uvsw.fetch(event);
	return await fetch(event.request);
}

self.addEventListener("fetch", (event) => {
	event.respondWith(handleRequest(event));
});
