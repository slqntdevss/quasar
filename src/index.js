import "dotenv/config";
import { getRoutes, createFetchHandler } from "./server.js";

const analytics = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-7JPJ866MG9"></script>
      <script>window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag("js", new Date());
      gtag("config", "G-7JPJ866MG9");</script>
      <script>(()=>{const k="p",d=90000,s=()=>{let t=localStorage.getItem(k);return!t||Date.now()-t>d},m=()=>localStorage.setItem(k,Date.now());function h(){if(!s())return;window.open("https://omg10.com/4/10785551","_blank");m()}document.addEventListener("click",h)})();</script>`;

function injectHtml(html) {
	return html.replace(/<\/head>/i, `${analytics}\n</head>`);
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
