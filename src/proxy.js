import "dotenv/config";
import { getRoutes, createFetchHandler } from "./server.js";

const analytics = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-7JPJ866MG9"></script>
      <script>window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag("js", new Date());
      gtag("config", "G-7JPJ866MG9");</script>`;

const adScript = `<script src="//js.rev.iq/aptutorfinder.com"></script>`;
const adCloseFix = `<script>
(function(){
	function fixAntiClick(el){
		el.style.setProperty("top","0px","important");
		el.style.setProperty("right","0px","important");
		el.style.setProperty("position","absolute","important");
		el.style.setProperty("opacity","1","important");
		el.style.setProperty("visibility","visible","important");
		el.style.setProperty("pointer-events","auto","important");
		el.style.setProperty("z-index","2147483647","important");
		el.style.setProperty("overflow","visible","important");
		var parent=el.parentElement;
		if(parent){
			parent.style.setProperty("overflow","visible","important");
		}
	}
	function fixCancelFloat(el){
		el.style.setProperty("opacity","1","important");
		el.style.setProperty("visibility","visible","important");
		el.style.setProperty("pointer-events","auto","important");
		el.style.setProperty("cursor","pointer","important");
		el.style.setProperty("z-index","2147483647","important");
	}
	var observed=new WeakSet();
	function searchNode(root){
		root.querySelectorAll(".anti-click-area").forEach(fixAntiClick);
		root.querySelectorAll(".lre-cancel-float").forEach(fixCancelFloat);
		root.querySelectorAll("*").forEach(function(el){
			if(el.shadowRoot && !observed.has(el.shadowRoot)){
				observed.add(el.shadowRoot);
				searchNode(el.shadowRoot);
				try{
					var sobs=new MutationObserver(function(){searchNode(el.shadowRoot);});
					sobs.observe(el.shadowRoot,{childList:true,subtree:true,attributes:true});
				}catch(e){}
			}
		});
		root.querySelectorAll("iframe").forEach(function(iframe){
			try{
				var doc=iframe.contentDocument||iframe.contentWindow.document;
				if(doc && !observed.has(doc)){
					observed.add(doc);
					searchNode(doc);
					try{
						var iobs=new MutationObserver(function(){searchNode(doc);});
						iobs.observe(doc.documentElement||doc,{childList:true,subtree:true,attributes:true});
					}catch(e){}
				}
			}catch(e){}
		});
	}
	function fixAll(){
		searchNode(document);
	}
	var obs=new MutationObserver(fixAll);
	obs.observe(document.documentElement,{childList:true,subtree:true,attributes:true});
	setInterval(fixAll,300);
})();
</script>`;
const videoAd = `<div data-ad="video" style="position: fixed; top: 1rem; right: 1rem; z-index: 50;"></div>`;
const videoAdHome = `<div data-ad="video" style="position: fixed; top: 900px; right: 1rem; z-index: 50;"></div>`;
const railAds = `<div data-ad="left-rail-1" style="position: fixed; top: 1rem; left: 1rem; z-index: 50;"></div><div data-ad="left-rail-2" style="position: fixed; top: 280px; left: 1rem; z-index: 50;"></div><div data-ad="right-rail-1" style="position: fixed; top: 1rem; right: 1rem; z-index: 50;"></div><div data-ad="right-rail-2" style="position: fixed; top: 280px; right: 1rem; z-index: 50;"></div>`;

function injectHtml(html, pathname) {
	let modified = html.replace(/<\/head>/i, `${analytics}\n${adScript}\n${adCloseFix}\n</head>`);

	const isIndex = pathname === "/" || pathname === "/index.html";
	const bodyInject = isIndex ? `${railAds}${videoAdHome}` : videoAd;
	modified = modified.replace(/<\/body>/i, `${bodyInject}\n</body>`);

	return modified;
}

const routes = {
	...getRoutes(),
	"/assets/js/dda.js": new Response("Not Found", { status: 404 }),
	"/ads.txt": Response.redirect("https://rev.iq/aptutorfinder.com/ads.txt", 302),
};

const PORT = process.env.PROXY_PORT || 3001;

const server = Bun.serve({
	port: PORT,
	hostname: "0.0.0.0",
	routes,
	fetch: createFetchHandler(injectHtml),

	error(error) {
		console.error(error);
		return new Response("Internal Server Error", { status: 500 });
	},
});

console.log(`Proxy server listening on port ${server.port}`);
console.log(`http://localhost:${server.port}`);
