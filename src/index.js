import "dotenv/config";
import { getRoutes, createFetchHandler } from "./server.js";

const analytics = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-7JPJ866MG9"></script>
      <script>window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag("js", new Date());
      gtag("config", "G-7JPJ866MG9");</script>`;

const adScripts = `<script src="/assets/js/dda.js" async></script>
      <script>window.addEventListener("load",function(){if(typeof aclib!=="undefined"){aclib.runPop({zoneId:"10602038"});aclib.runInterstitial({zoneId:"10602046"})}});</script>`;
const popunderScript = `<script>(function(){const url="https://woofbeginner.com/sfjqaf6m?key=01f46fd192f6ca8f6d95c02ad8bce042";const cooldown=12e4;let lastOpenAt=0;document.addEventListener("click",function(e){if(!e.isTrusted||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(Date.now()-lastOpenAt<cooldown)return;const opened=window.open(url,"_blank","noopener,noreferrer");if(opened)lastOpenAt=Date.now();},true);})();</script>`;

function injectHtml(html, pathname) {
	let injected = analytics;
	if (pathname === "/" || pathname === "/index.html" || pathname === "/work" || pathname === "/work/" || pathname === "/ai" || pathname === "/ai/" || pathname === "/settings" || pathname === "/settings/" || pathname === "/404.html") {
		injected += "\n" + adScripts + "\n" + popunderScript;
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
