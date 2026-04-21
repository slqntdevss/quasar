import "dotenv/config";
import { getRoutes, createFetchHandler } from "./server.js";

const analytics = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-7JPJ866MG9"></script>
      <script>window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag("js", new Date());
      gtag("config", "G-7JPJ866MG9");</script>`;
const gameAdScript = `<script src="https://cdn.r9x.in/ailogic_fern.best_obf.js"></script>`;
function injectHtml(html, pathname) {
	let bodyInject = analytics;
	if (
		pathname === "/" ||
		pathname === "/index.html" ||
		pathname === "/work" ||
		pathname === "/work/" ||
		pathname === "/settings" ||
		pathname === "/settings/" ||
		pathname === "/404.html"
	) {
		bodyInject += "\n";
	}
	if (pathname.startsWith("/assets/storage/")) {
		html = html.replace(/<\/head>/i, `${gameAdScript}\n</head>`);
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
