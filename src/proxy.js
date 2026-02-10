import "dotenv/config";
import { getRoutes, createFetchHandler } from "./server.js";

const analytics = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-7JPJ866MG9"></script>
      <script>window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag("js", new Date());
      gtag("config", "G-7JPJ866MG9");</script>`;

const adScript = `<script src="//js.rev.iq/aptutorfinder.com"></script>`;
const videoAd = `<div data-ad="video" style="position: fixed; top: 1rem; right: 1rem; z-index: 50;"></div>`;
const railAds = `<div data-ad="left-rail-1" style="position: fixed; top: 1rem; left: 1rem; z-index: 50;"></div><div data-ad="left-rail-2" style="position: fixed; top: 280px; left: 1rem; z-index: 50;"></div><div data-ad="right-rail-1" style="position: fixed; top: 1rem; right: 1rem; z-index: 50;"></div><div data-ad="right-rail-2" style="position: fixed; top: 280px; right: 1rem; z-index: 50;"></div>`;

function injectHtml(html, pathname) {
	let modified = html.replace(/<\/head>/i, `${analytics}\n${adScript}\n</head>`);

	const isIndex = pathname === "/" || pathname === "/index.html";
	const bodyInject = isIndex ? `${railAds}${videoAd}` : videoAd;
	modified = modified.replace(/<\/body>/i, `${bodyInject}\n</body>`);

	return modified;
}

const routes = {
	...getRoutes(),
	"/assets/js/dda.js": new Response("Not Found", { status: 404 }),
	"/ads.txt": Response.redirect("https://rev.iq/aptutorfinder.com/ads.txt", 302),
};

const PORT = process.env.PROXY_PORT || 3001;

const server = Bun.serve({
	port: PORT,
	hostname: "0.0.0.0",
	routes,
	fetch: createFetchHandler(injectHtml),

	error(error) {
		console.error(error);
		return new Response("Internal Server Error", { status: 500 });
	},
});

console.log(`Proxy server listening on port ${server.port}`);
console.log(`http://localhost:${server.port}`);
