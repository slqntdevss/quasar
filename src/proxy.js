import "dotenv/config";
import {
	getRoutes,
	createFetchHandler,
	CDN_BASE,
	STARTUP_TIME,
} from "./server.js";

const analytics = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-7JPJ866MG9"></script>
      <script>window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag("js", new Date());
      gtag("config", "G-7JPJ866MG9");</script>`;

function getAdScript(host) {
	const hostname = host.split(":")[0];
	return `<script src="//js.rev.iq/${hostname}"></script>`;
}

const videoAd = `<div data-ad="video" />`;
const videoAdAi = `<div data-ad="video" style="position:fixed!important;top:1rem!important;right:1rem!important;bottom:auto!important;left:auto!important;z-index:50!important;" />`;
const mobileAdScript = `<script>(function(){var m=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);if(!m)return;var v=document.querySelector('[data-ad="video"]');if(v)v.remove();setTimeout(function(){var d=document.createElement("div");d.setAttribute("data-ad","video");document.body.appendChild(d)},30000)})();</script>`;

const CDN_REWRITE_RE =
	/(src|href)=(["'])(\/?assets\/(?:js|css|json|img)\/[^"']+)(["'])/gi;

function rewriteAssetsToCdn(html) {
	return html.replace(CDN_REWRITE_RE, (_match, attr, q1, assetPath, q2) => {
		if (assetPath.endsWith("dda.js")) return _match;
		const cleanPath = assetPath.startsWith("/") ? assetPath : "/" + assetPath;
		return `${attr}=${q1}${CDN_BASE}${cleanPath}?t=${STARTUP_TIME}${q2}`;
	});
}

const AD_PAGES = new Set([
	"/",
	"/index.html",
	"/work",
	"/work/",
	"/ai",
	"/ai/",
	"/ai/index.html",
	"/settings",
	"/settings/",
]);

function injectHtml(html, pathname, host) {
	const isAdPage = AD_PAGES.has(pathname);
	const adScript = isAdPage ? getAdScript(host) : "";

	let modified = rewriteAssetsToCdn(html);

	if (adScript) {
		modified = modified.replace(/<\/head>/i, `${adScript}\n</head>`);
	}

	if (!isAdPage) {
		return modified.replace(/<\/body>/i, `${analytics}\n</body>`);
	}

	const isAi =
		pathname === "/ai/" || pathname === "/ai" || pathname === "/ai/index.html";

	if (isAi) {
		modified = modified.replace(
			/<\/body>/i,
			`${analytics}\n${videoAdAi}\n</body>`,
		);
	} else {
		modified = modified.replace(
			/<\/body>/i,
			`${analytics}\n${videoAd}\n${mobileAdScript}\n</body>`,
		);
	}

	return modified;
}

function redirectToWork(req) {
	const url = new URL(req.url);
	return Response.redirect(`/work/${url.search}`, 302);
}

const routes = {
	...getRoutes(),

	"/g": {
		GET: (req) => redirectToWork(req),
	},

	"/g/": {
		GET: (req) => redirectToWork(req),
	},

	"/assets/js/dda.js": new Response("Not Found", { status: 404 }),

	"/ads.txt": () => {
		return Response.redirect("https://rev.iq/aptutorfinder.com/ads.txt", 302);
	},
};

const PORT = process.env.PROXY_PORT || 3001;

const server = Bun.serve({
	port: PORT,
	hostname: "0.0.0.0",
	routes,
	fetch: createFetchHandler(injectHtml, { useCdn: true }),

	error(error) {
		console.error(error);
		return new Response("Internal Server Error", { status: 500 });
	},
});

console.log(`Proxy server listening on port ${server.port}`);
console.log(`http://localhost:${server.port}`);