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

function getAdScript(host) {
  const hostname = host.split(":")[0];
  return `<script src="//js.rev.iq/${hostname}"></script>`;
}

const videoAd = `<div data-ad="video" />`;
const videoAdAi = `<div data-ad="video" style="position:fixed!important;top:1rem!important;right:1rem!important;bottom:auto!important;left:auto!important;z-index:50!important;" />`;
const railAds = `<style>.q-rail-ads{display:none}@media(min-width:1300px){.q-rail-ads{display:block}}</style><div class="q-rail-ads"><div data-ad="left-rail-1" style="position: fixed; top: 1rem; left: 1rem; z-index: 50;"></div><div data-ad="left-rail-2" style="position: fixed; top: 280px; left: 1rem; z-index: 50;"></div><div data-ad="video" /><div data-ad="right-rail-1" style="position: fixed; top: 1rem; right: 1rem; z-index: 50;"></div></div>`;
const mobileAdScript = `<script>(function(){var m=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);if(!m)return;var r=document.querySelector(".q-rail-ads");if(r)r.remove();var v=document.querySelector('[data-ad="video"]');if(v)v.remove();setTimeout(function(){var d=document.createElement("div");d.setAttribute("data-ad","video");document.body.appendChild(d)},30000)})();</script>`;

function rewriteAssetsToCdn(html) {
  return html.replace(
    /(src|href)=(["'])(\/?assets\/(?:js|css|json)\/[^"']+)(["'])/gi,
    (_match, attr, q1, assetPath, q2) => {
      const cleanPath = assetPath.startsWith("/")
        ? assetPath
        : "/" + assetPath;
      return `${attr}=${q1}${CDN_BASE}${cleanPath}?t=${STARTUP_TIME}${q2}`;
    },
  );
}

function injectHtml(html, pathname, host) {
  const adScript = getAdScript(host);
  let modified = rewriteAssetsToCdn(html);
  modified = modified.replace(/<\/head>/i, `${analytics}\n${adScript}\n</head>`);

  const isIndex = pathname === "/" || pathname === "/index.html";
  const isAi = pathname === "/ai/" || pathname === "/ai" || pathname === "/ai/index.html";
  if (isIndex) {
    modified = modified.replace(/<\/body>/i, `${railAds}\n${mobileAdScript}\n</body>`);
  } else if (isAi) {
    modified = modified.replace(/<\/body>/i, `${videoAdAi}\n</body>`);
  } else {
    modified = modified.replace(/<\/body>/i, `${videoAd}\n${mobileAdScript}\n</body>`);
  }

  return modified;
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

  "/ads.txt": () => {
    return Response.redirect("https://rev.iq/aptutorfinder.com/ads.txt", 302);
  },
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
