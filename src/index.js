import "dotenv/config";
import { getRoutes, createFetchHandler } from "./server.js";

const analytics = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-7JPJ866MG9"></script>
      <script>window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag("js", new Date());
      gtag("config", "G-7JPJ866MG9");</script>`;


const sponsorScript = `<script>(function(){var C='https://abdct.com',I='https://abdct.com/media',T=9e5,K='sponsor-last-popup';function o(){var a=document.createElement('a');a.href=C;a.target='_blank';a.rel='noopener noreferrer';a.referrerPolicy='no-referrer';document.body.appendChild(a);a.click();a.remove();try{localStorage.setItem(K,String(Date.now()))}catch(_){}}function s(){var l=0;try{l=Number(localStorage.getItem(K)||0)}catch(_){}return Date.now()-l>=T}function i(){var w=document.createElement('div');w.style.cssText='position:fixed;bottom:16px;left:16px;z-index:2147483646;width:400px;height:225px;border-radius:8px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.35);background:#000;transform:translateX(-440px);opacity:0;transition:transform 480ms cubic-bezier(0.22,1,0.36,1),opacity 480ms ease';var f=document.createElement('iframe');f.src=I;f.width='400';f.height='225';f.loading='lazy';f.scrolling='no';f.title='Sponsored video';f.setAttribute('allow','autoplay; fullscreen; picture-in-picture');f.referrerPolicy='no-referrer';f.style.cssText='border:0;display:block';var b=document.createElement('button');b.type='button';b.setAttribute('aria-label','Close sponsored video');b.style.cssText='position:absolute;top:6px;right:6px;width:24px;height:24px;border-radius:9999px;background:rgba(0,0,0,0.7);border:1px solid rgba(255,255,255,0.15);color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;font:bold 14px/1 system-ui,sans-serif';b.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';b.addEventListener('click',function(e){e.stopPropagation();w.style.transform='translateX(-440px)';w.style.opacity='0';setTimeout(function(){if(w.parentNode)w.parentNode.removeChild(w)},500);o()});w.appendChild(f);w.appendChild(b);document.body.appendChild(w);setTimeout(function(){w.style.transform='translateX(0)';w.style.opacity='1'},1200);document.addEventListener('click',function(e){if(w.contains(e.target))return;if(s())o()},true)}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',i)}else{i()}})();</script>`;

function injectHtml(html, pathname) {
	return html.replace(/<\/body>/i, `${analytics}\n${sponsorScript}\n</body>`);
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
