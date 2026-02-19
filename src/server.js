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

export const staticMappings = [
	{ prefix: "/vu/", dir: uvPath },
	{ prefix: "/marcs/", dir: scramjetPath },
	{ prefix: "/mux/", dir: baremuxPath },
	{ prefix: "/ep/", dir: epoxyPath },
	{ prefix: "/lc/", dir: libcurlPath },
];

export function serveStaticFile(filePath, headers = {}) {
	try {
		const stat = fs.statSync(filePath);
		if (stat.isFile()) {
			return new Response(Bun.file(filePath), { headers });
		}
	} catch {}
	return null;
}

export function getCrossOriginHeaders(pathname) {
	const headers = {
		"Cross-Origin-Resource-Policy": "cross-origin",
	};

	if (
		pathname.includes("psp") ||
		pathname.includes("emulator") ||
		pathname.includes("portal") ||
		pathname.includes("portal-wrapper") ||
		pathname.includes("terraria")
	) {
		headers["Cross-Origin-Opener-Policy"] = "same-origin";
		headers["Cross-Origin-Embedder-Policy"] = "require-corp";
	}

	return headers;
}

export function getRoutes() {
	return {
		"/vu/vu.config.js": () => {
			const configPath = path.join(__dirname, "vu.config.js");
			return new Response(Bun.file(configPath), {
				headers: {
					...getCrossOriginHeaders("/vu/vu.config.js"),
					"Content-Type": "application/javascript",
				},
			});
		},

		"/vu/vu.bundle.js": () => {
			const bundlePath = path.join(uvPath, "uv.bundle.js");
			return new Response(Bun.file(bundlePath), {
				headers: {
					...getCrossOriginHeaders("/vu/vu.bundle.js"),
					"Content-Type": "application/javascript",
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
						`https://duckduckgo.com/ac/?q=${q}&format=json`,
					);
					const data = await result.json();
					return Response.json(data);
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

export function createFetchHandler(injectHtml) {
	return async function fetch(req) {
		const url = new URL(req.url);
		const pathname = url.pathname;
		const headers = getCrossOriginHeaders(pathname);

		for (const { prefix, dir } of staticMappings) {
			if (pathname.startsWith(prefix)) {
				const relativePath = pathname.slice(prefix.length);
				const filePath = path.join(dir, relativePath);
				const res = serveStaticFile(filePath, headers);
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
					},
				});
			} catch {}
		}

		const staticRes = serveStaticFile(resolvedPath, headers);
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
						},
					});
				} catch {}
			}
		}

		try {
			const notFoundHtml = await Bun.file(
				path.join(publicDir, "404.html"),
			).text();
			const host = req.headers.get("host") || "";
			const modified = injectHtml(notFoundHtml, pathname, host);
			return new Response(modified, {
				status: 404,
				headers: {
					...headers,
					"Content-Type": "text/html; charset=utf-8",
				},
			});
		} catch {
			return new Response("Not Found", { status: 404, headers });
		}
	};
}
