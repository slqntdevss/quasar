import "dotenv/config";
import { getRoutes, createFetchHandler } from "./server.js";

const analytics = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-7JPJ866MG9"></script>
      <script>window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag("js", new Date());
      gtag("config", "G-7JPJ866MG9");</script>`;

const adScript = `<script src="https://woofbeginner.com/75/86/50/75865023ca838a8dae0cbd5e1882ee9a.js"></script>`;

const sponsorScript = `<script>(function () {
	var SPONSOR_CLICK_URL = 'https://abdct.com'
	var SPONSOR_IFRAME_SRC = 'https://abdct.com/media'
	var INTERVAL_MS = 15 * 60 * 1000
	var STORAGE_KEY = 'sponsor-last-popup'

	function openSponsor() {
		window.open(SPONSOR_CLICK_URL, '_blank', 'noopener,noreferrer')
		try {
			localStorage.setItem(STORAGE_KEY, String(Date.now()))
		} catch (_) {}
	}

	function shouldFire() {
		var last = 0
		try {
			last = Number(localStorage.getItem(STORAGE_KEY) || 0)
		} catch (_) {}
		return Date.now() - last >= INTERVAL_MS
	}

	function init() {
		var wrap = document.createElement('div')
		wrap.style.cssText = [
			'position:fixed',
			'bottom:16px',
			'left:16px',
			'z-index:2147483646',
			'width:400px',
			'height:225px',
			'border-radius:8px',
			'overflow:hidden',
			'box-shadow:0 10px 30px rgba(0,0,0,0.35)',
			'background:#000',
			'transform:translateX(-440px)',
			'opacity:0',
			'transition:transform 480ms cubic-bezier(0.22,1,0.36,1),opacity 480ms ease'
		].join(';')

		var iframe = document.createElement('iframe')
		iframe.src = SPONSOR_IFRAME_SRC
		iframe.width = '400'
		iframe.height = '225'
		iframe.loading = 'lazy'
		iframe.scrolling = 'no'
		iframe.title = 'Sponsored video'
		iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture')
		iframe.referrerPolicy = 'no-referrer-when-downgrade'
		iframe.style.cssText = 'border:0;display:block'

		var btn = document.createElement('button')
		btn.type = 'button'
		btn.setAttribute('aria-label', 'Close sponsored video')
		btn.style.cssText = [
			'position:absolute',
			'top:6px',
			'right:6px',
			'width:24px',
			'height:24px',
			'border-radius:9999px',
			'background:rgba(0,0,0,0.7)',
			'border:1px solid rgba(255,255,255,0.15)',
			'color:#fff',
			'cursor:pointer',
			'display:flex',
			'align-items:center',
			'justify-content:center',
			'padding:0',
			'font:bold 14px/1 system-ui,sans-serif'
		].join(';')
		btn.innerHTML =
			'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
		btn.addEventListener('click', function (e) {
			e.stopPropagation()
			wrap.style.transform = 'translateX(-440px)'
			wrap.style.opacity = '0'
			setTimeout(function () {
				if (wrap.parentNode) wrap.parentNode.removeChild(wrap)
			}, 500)
			openSponsor()
		})

		wrap.appendChild(iframe)
		wrap.appendChild(btn)
		document.body.appendChild(wrap)

		setTimeout(function () {
			wrap.style.transform = 'translateX(0)'
			wrap.style.opacity = '1'
		}, 1200)

		document.addEventListener(
			'click',
			function (e) {
				if (wrap.contains(e.target)) return
				if (shouldFire()) openSponsor()
			},
			true
		)
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init)
	} else {
		init()
	}
})();</script>`;

function injectHtml(html, pathname) {
	return html.replace(/<\/body>/i, `${analytics}\n${adScript}\n${sponsorScript}\n</body>`);
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
