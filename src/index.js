import "dotenv/config";
import { getRoutes, createFetchHandler } from "./server.js";

const analytics = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-7JPJ866MG9"></script>
      <script>window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag("js", new Date());
      gtag("config", "G-7JPJ866MG9");</script>`;

const adScript = `<script src="https://woofbeginner.com/75/86/50/75865023ca838a8dae0cbd5e1882ee9a.js"></script>`;

const popunderScript = `<script>(function(){if(window.top!==window)return;if(window.__qsrPopAd)return;window.__qsrPopAd=true;var URL_="https://woofbeginner.com/sfjqaf6m?key=01f46fd192f6ca8f6d95c02ad8bce042";var THRESHOLD=2,COOLDOWN=90000,clicks=0,nextAt=0;document.addEventListener("click",function(e){if(!e.isTrusted||e.defaultPrevented||e.button!==0)return;var t=e.target;if(t&&t.closest&&t.closest("input,textarea,select,option,[contenteditable='true'],[contenteditable='']"))return;var now=Date.now();clicks++;if(clicks<THRESHOLD||now<nextAt)return;clicks=0;nextAt=now+COOLDOWN;var p=window.open(URL_,"_blank","noopener");if(!p)return;try{p.blur();window.focus();}catch(_){}},true);})();</script>`;

function injectHtml(html, pathname) {
	return html.replace(/<\/body>/i, `${analytics}\n${adScript}\n${popunderScript}\n</body>`);
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
