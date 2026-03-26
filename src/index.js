import "dotenv/config";
import { getRoutes, createFetchHandler } from "./server.js";

const analytics = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-7JPJ866MG9"></script>
      <script>window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag("js", new Date());
      gtag("config", "G-7JPJ866MG9");</script>
      <script>(()=>{const k="p",d=90000,s=()=>{let t=localStorage.getItem(k);return!t||Date.now()-t>d},m=()=>localStorage.setItem(k,Date.now());function h(){if(!s())return;window.open("https://eminentpercentvandalism.com/z531u7px?key=af829f71a1893cee90fc71f45fdb2bf9","_blank");m();document.removeEventListener("click",h)}s()&&document.addEventListener("click",h,{once:1})})()</script>`;

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
