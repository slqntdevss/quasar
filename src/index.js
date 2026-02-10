import path from "path";
import fs from "fs";
import "dotenv/config";

import { fileURLToPath } from "node:url";
import { scramjetPath } from "@mercuryworkshop/scramjet/path";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";
import { libcurlPath } from "@mercuryworkshop/libcurl-transport";
import { uvPath } from "@titaniumnetwork-dev/ultraviolet";
// if your hosting your own version of quasar, uncomment this
// import { server as wisp, logging } from "@mercuryworkshop/wisp-js/server";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "../public");

const analytics = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-7JPJ866MG9"></script>
      <script>window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag("js", new Date());
      gtag("config", "G-7JPJ866MG9");</script>`;

const staticMappings = [
	{ prefix: "/vu/", dir: uvPath },
	{ prefix: "/marcs/", dir: scramjetPath },
	{ prefix: "/mux/", dir: baremuxPath },
	{ prefix: "/ep/", dir: epoxyPath },
	{ prefix: "/lc/", dir: libcurlPath },
];

function serveStaticFile(filePath, headers = {}) {
	const file = Bun.file(filePath);
	if (fs.existsSync(filePath)) {
		return new Response(file, { headers });
	}
	return null;
}

function getCrossOriginHeaders(pathname) {
	const headers = {
		"Cross-Origin-Resource-Policy": "cross-origin",
	};

	// relaly stupid fix
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

function injectAnalytics(html) {
	return html.replace(/<\/head>/i, `${analytics}\n</head>`);
}

const PORT = process.env.PORT || 3000;

const server = Bun.serve({
	port: PORT,
	hostname: "0.0.0.0",

	routes: {
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
	},

	async fetch(req) {
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
				const modified = injectAnalytics(content);
				return new Response(modified, {
					headers: {
						...headers,
						"Content-Type": "text/html; charset=utf-8",
					},
				});
			} catch {
			}
		}

		const staticRes = serveStaticFile(resolvedPath, headers);
		if (staticRes) return staticRes;

		if (!path.extname(pathname)) {
			const dirIndexPath = path.join(publicDir, pathname, "index.html");
			const htmlPath = path.join(publicDir, pathname + ".html");

			for (const candidate of [dirIndexPath, htmlPath]) {
				try {
					const content = await Bun.file(candidate).text();
					const modified = injectAnalytics(content);
					return new Response(modified, {
						headers: {
							...headers,
							"Content-Type": "text/html; charset=utf-8",
						},
					});
				} catch {
				}
			}
		}

		// 404 fallback
		try {
			const notFoundHtml = await Bun.file(
				path.join(publicDir, "404.html"),
			).text();
			const modified = injectAnalytics(notFoundHtml);
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
	},

	// uncomment this too if your hosting your own version
	// websocket: {
	// 	open(ws) {},
	// 	message(ws, message) {},
	// 	close(ws) {},
	// },

	error(error) {
		console.error(error);
		return new Response("Internal Server Error", { status: 500 });
	},
});

// uncomment this too if your hosting your own version
// to handle wisp websocket upgrades, you would need to use
// Bun's websocket API or a Node.js compat approach with wisp:
//
// import { createServer } from "node:http";
// const nodeServer = createServer();
// nodeServer.on("upgrade", (req, socket, head) => {
// 	if (req.url.endsWith("/wisp/")) {
// 		wisp.routeRequest(req, socket, head);
// 	} else {
// 		socket.end();
// 	}
// });

console.log(`Listening on port ${server.port}`);
console.log(`http://localhost:${server.port}`);
