import path from "path";
import fs from "fs";
import { fileURLToPath } from "node:url";
import { scramjetPath } from "@mercuryworkshop/scramjet/path";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";
import { libcurlPath } from "@mercuryworkshop/libcurl-transport";
import { uvPath } from "@titaniumnetwork-dev/ultraviolet";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const publicDir = path.join(__dirname, "../public");

export const STARTUP_TIME = Date.now();
export const CDN_BASE =
	"https://cdn.jsdelivr.net/gh/slqntdevss/quasar@latest/public";

export const staticMappings = [
	{ prefix: "/vu/", dir: uvPath },
	{ prefix: "/marcs/", dir: scramjetPath },
	{ prefix: "/mux/", dir: baremuxPath },
	{ prefix: "/ep/", dir: epoxyPath },
	{ prefix: "/lc/", dir: libcurlPath },
];

const MIME_TYPES = {
	".html": "text/html; charset=utf-8",
	".js": "application/javascript",
	".mjs": "application/javascript",
	".css": "text/css",
	".json": "application/json",
	".png": "image/png",
	".jpg": "image/jpeg",
	".jpeg": "image/jpeg",
	".gif": "image/gif",
	".svg": "image/svg+xml",
	".webp": "image/webp",
	".ico": "image/x-icon",
	".woff": "font/woff",
	".woff2": "font/woff2",
	".ttf": "font/ttf",
	".otf": "font/otf",
	".wasm": "application/wasm",
	".mp3": "audio/mpeg",
	".ogg": "audio/ogg",
	".wav": "audio/wav",
	".mp4": "video/mp4",
	".webm": "video/webm",
	".zip": "application/zip",
	".pdf": "application/pdf",
};

function getMimeType(filePath) {
	const ext = path.extname(filePath).toLowerCase();
	return MIME_TYPES[ext] || "application/octet-stream";
}

function getCacheControl(filePath) {
	const ext = path.extname(filePath).toLowerCase();
	if (ext === ".html") return "no-cache";
	if ([".js", ".mjs", ".css", ".wasm"].includes(ext)) {
		return "public, max-age=86400, stale-while-revalidate=3600";
	}
	if (
		[
			".png",
			".jpg",
			".jpeg",
			".gif",
			".svg",
			".webp",
			".ico",
			".woff",
			".woff2",
			".ttf",
			".otf",
		].includes(ext)
	) {
		return "public, max-age=604800, stale-while-revalidate=86400";
	}
	return "public, max-age=3600";
}

let cached404Html = null;
try {
	cached404Html = await Bun.file(path.join(publicDir, "404.html")).text();
} catch {}

export function serveStaticFile(req, filePath, headers = {}) {
	try {
		const stat = fs.statSync(filePath);
		if (!stat.isFile()) return null;

		const file = Bun.file(filePath);
		const size = stat.size;
		const range = req.headers.get("range");

		const contentType = getMimeType(filePath);
		const cacheControl = getCacheControl(filePath);

		const outHeaders = new Headers({
			...headers,
			"Accept-Ranges": "bytes",
			"Content-Type": contentType,
			"Cache-Control": cacheControl,
		});

		if (!range) {
			outHeaders.set("Content-Length", String(size));
			return new Response(file, { status: 200, headers: outHeaders });
		}

		const m = /^bytes=(\d+)-(\d+)?$/i.exec(range);
		if (!m) {
			outHeaders.set("Content-Range", `bytes */${size}`);
			return new Response(null, { status: 416, headers: outHeaders });
		}

		let start = Number(m[1]);
		let end = m[2] ? Number(m[2]) : size - 1;

		if (
			Number.isNaN(start) ||
			Number.isNaN(end) ||
			start < 0 ||
			end < 0 ||
			start > end ||
			start >= size
		) {
			outHeaders.set("Content-Range", `bytes */${size}`);
			return new Response(null, { status: 416, headers: outHeaders });
		}

		end = Math.min(end, size - 1);
		const chunkSize = end - start + 1;

		outHeaders.set("Content-Range", `bytes ${start}-${end}/${size}`);
		outHeaders.set("Content-Length", String(chunkSize));

		return new Response(file.slice(start, end + 1), {
			status: 206,
			headers: outHeaders,
		});
	} catch {
		return null;
	}
}

const COOP_FRAGMENTS = [
	"psp",
	"emulator",
	"portal",
	"portal-wrapper",
	"terraria",
];

export function getCrossOriginHeaders(pathname) {
	const headers = {
		"Cross-Origin-Resource-Policy": "cross-origin",
	};

	for (const frag of COOP_FRAGMENTS) {
		if (pathname.includes(frag)) {
			headers["Cross-Origin-Opener-Policy"] = "same-origin";
			headers["Cross-Origin-Embedder-Policy"] = "require-corp";
			break;
		}
	}

	return headers;
}

function redirectToWork(req) {
	const url = new URL(req.url);
	return Response.redirect(`/work/${url.search}`, 302);
}

export function getRoutes() {
	return {
		"/g": {
			GET: (req) => redirectToWork(req),
		},

		"/g/": {
			GET: (req) => redirectToWork(req),
		},

		"/vu/vu.config.js": () => {
			const configPath = path.join(__dirname, "vu.config.js");
			return new Response(Bun.file(configPath), {
				headers: {
					...getCrossOriginHeaders("/vu/vu.config.js"),
					"Content-Type": "application/javascript",
					"Cache-Control": "public, max-age=86400",
				},
			});
		},

		"/vu/vu.bundle.js": () => {
			const bundlePath = path.join(uvPath, "uv.bundle.js");
			return new Response(Bun.file(bundlePath), {
				headers: {
					...getCrossOriginHeaders("/vu/vu.bundle.js"),
					"Content-Type": "application/javascript",
					"Cache-Control": "public, max-age=86400",
				},
			});
		},

		"/autoc": {
			GET: async (req) => {
				const url = new URL(req.url);
				const q = url.searchParams.get("q");

				if (!q) {
					return Response.json(
						{ error: "Query parameter is required" },
						{ status: 400 },
					);
				}

				try {
					const result = await fetch(
						`https://duckduckgo.com/ac/?q=${encodeURIComponent(q)}&format=json`,
					);
					const data = await result.json();
					return Response.json(data, {
						headers: { "Cache-Control": "public, max-age=60" },
					});
				} catch (err) {
					console.log(err);
					return Response.json(
						{ error: "Failed to fetch autocomplete" },
						{ status: 500 },
					);
				}
			},
		},
	};
}

export function createFetchHandler(injectHtml, { useCdn = false } = {}) {
	return async function fetch(req) {
		const url = new URL(req.url);
		const pathname = url.pathname;

		if (pathname === "/g" || pathname === "/g/") {
			return redirectToWork(req);
		}

		if (
			useCdn &&
			(pathname.startsWith("/assets/js/") ||
				pathname.startsWith("/assets/css/") ||
				pathname.startsWith("/assets/json/") ||
				pathname.startsWith("/assets/img/"))
		) {
			return Response.redirect(`${CDN_BASE}${pathname}?t=${STARTUP_TIME}`, 302);
		}

		const headers = getCrossOriginHeaders(pathname);

		for (const { prefix, dir } of staticMappings) {
			if (pathname.startsWith(prefix)) {
				const relativePath = pathname.slice(prefix.length);
				const filePath = path.join(dir, relativePath);
				const res = serveStaticFile(req, filePath, headers);
				if (res) return res;
			}
		}

		const isDir = pathname.endsWith("/");
		const resolvedPath = isDir
			? path.join(publicDir, pathname, "index.html")
			: path.join(publicDir, pathname);

		if (resolvedPath.endsWith(".html")) {
			try {
				const content = await Bun.file(resolvedPath).text();
				const host = req.headers.get("host") || "";
				const modified = injectHtml(content, pathname, host);

				return new Response(modified, {
					headers: {
						...headers,
						"Content-Type": "text/html; charset=utf-8",
						"Cache-Control": "no-cache",
					},
				});
			} catch {}
		}

		const staticRes = serveStaticFile(req, resolvedPath, headers);
		if (staticRes) return staticRes;

		if (!path.extname(pathname)) {
			const dirIndexPath = path.join(publicDir, pathname, "index.html");
			const htmlPath = path.join(publicDir, pathname + ".html");

			for (const candidate of [dirIndexPath, htmlPath]) {
				try {
					const content = await Bun.file(candidate).text();
					const host = req.headers.get("host") || "";
					const modified = injectHtml(content, pathname, host);

					return new Response(modified, {
						headers: {
							...headers,
							"Content-Type": "text/html; charset=utf-8",
							"Cache-Control": "no-cache",
						},
					});
				} catch {}
			}
		}

		if (cached404Html) {
			const host = req.headers.get("host") || "";
			const modified = injectHtml(cached404Html, pathname, host);

			return new Response(modified, {
				status: 404,
				headers: {
					...headers,
					"Content-Type": "text/html; charset=utf-8",
					"Cache-Control": "no-cache",
				},
			});
		}

		return new Response("Not Found", { status: 404, headers });
	};
}
