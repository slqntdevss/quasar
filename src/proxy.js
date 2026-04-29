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

const CDN_REWRITE_RE =
	/(src|href)=(["'])(\/?assets\/(?:js|css|json|img)\/[^"']+)(["'])/gi;

function rewriteAssetsToCdn(html) {
	return html.replace(CDN_REWRITE_RE, (_match, attr, q1, assetPath, q2) => {
		if (assetPath.endsWith("dda.js")) return _match;
		const cleanPath = assetPath.startsWith("/") ? assetPath : "/" + assetPath;
		return `${attr}=${q1}${CDN_BASE}${cleanPath}?t=${STARTUP_TIME}${q2}`;
	});
}

function injectHtml(html, pathname, host) {
	const modified = rewriteAssetsToCdn(html);
	return modified.replace(/<\/body>/i, `${analytics}\n</body>`);
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