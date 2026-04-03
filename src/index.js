import "dotenv/config";
import { getRoutes, createFetchHandler } from "./server.js";

const analytics = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-7JPJ866MG9"></script>
      <script>window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag("js", new Date());
      gtag("config", "G-7JPJ866MG9");</script>`;

const popunderScript = `<script>!function(){document.addEventListener("click",function(e){const t=sessionStorage.getItem("last_pop_time"),n=Date.now();!(!e.isTrusted||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||t&&n-t<12e4)&&(window.open("https://woofbeginner.com/sfjqaf6m?key=01f46fd192f6ca8f6d95c02ad8bce042","_blank","noopener,noreferrer"),sessionStorage.setItem("last_pop_time",n))},!0)}();</script>`;
function injectHtml(html, pathname) {
	let bodyInject = analytics;
	if (
		pathname === "/" ||
		pathname === "/index.html" ||
		pathname === "/work" ||
		pathname === "/work/" ||
		pathname === "/ai" ||
		pathname === "/ai/" ||
		pathname === "/settings" ||
		pathname === "/settings/" ||
		pathname === "/404.html"
	) {
		bodyInject += "\n" + popunderScript;
	}
	return html.replace(/<\/body>/i, `${bodyInject}\n</body>`);
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
