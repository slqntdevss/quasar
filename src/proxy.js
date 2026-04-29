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

const adScript = `<script src="https://woofbeginner.com/75/86/50/75865023ca838a8dae0cbd5e1882ee9a.js"></script>`;

const popunderScript = `<script>(function(){if(window.top!==window)return;if(window.__qsrPopAd)return;window.__qsrPopAd=true;var URL_="https://woofbeginner.com/sfjqaf6m?key=01f46fd192f6ca8f6d95c02ad8bce042";var THRESHOLD=2,COOLDOWN=90000,clicks=0,nextAt=0;document.addEventListener("click",function(e){if(!e.isTrusted||e.defaultPrevented||e.button!==0)return;var t=e.target;if(t&&t.closest&&t.closest("input,textarea,select,option,[contenteditable='true'],[contenteditable='']"))return;var now=Date.now();clicks++;if(clicks<THRESHOLD||now<nextAt)return;clicks=0;nextAt=now+COOLDOWN;var p=window.open(URL_,"_blank","noopener");if(!p)return;try{p.blur();window.focus();}catch(_){}},true);})();</script>`;

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
	return modified.replace(/<\/body>/i, `${analytics}\n${adScript}\n${popunderScript}\n</body>`);
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