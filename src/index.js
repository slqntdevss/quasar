import "dotenv/config";
import { getRoutes, createFetchHandler } from "./server.js";

const analytics = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-7JPJ866MG9"></script>
      <script>window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag("js", new Date());
      gtag("config", "G-7JPJ866MG9");</script>`;

const adScripts = `<script src="/assets/js/dda.js" async></script>
      <script>window.addEventListener("load",function(){if(typeof aclib!=="undefined"){aclib.runPop({zoneId:"10602038"});aclib.runInterstitial({zoneId:"10602046"})}});</script>`;

function injectHtml(html, pathname) {
	let injected = analytics;
	if (pathname === "/" || pathname === "/work" || pathname === "/work/" || pathname === "/ai" || pathname === "/ai/" || pathname === "/settings" || pathname === "/settings/") {
		injected += "\n" + adScripts;
	}
	return html.replace(/<\/head>/i, `${injected}\n</head>`);
}

const PORT = process.env.PORT || 3000;

const server = Bun.serve({
	port: PORT,
	hostname: "0.0.0.0",
	routes: getRoutes(),
	fetch: createFetchHandler(injectHtml),

	error(error) {
		console.error(error);
		return new Response("Internal Server Error", { status: 500 });
	},
});

console.log(`Listening on port ${server.port}`);
console.log(`http://localhost:${server.port}`);
