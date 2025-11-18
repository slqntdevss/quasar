import express from "express";
import path from "path";
import fs from "fs";
import "dotenv/config";
import cors from "cors";

import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { scramjetPath } from "@mercuryworkshop/scramjet/path";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";
import { libcurlPath } from "@mercuryworkshop/libcurl-transport";

const app = express();

app.use(express.json());
app.use(cors());

const publicDir = path.join(
	path.dirname(fileURLToPath(import.meta.url)),
	`../public`
);

const server = createServer(app);

app.use((req, res, next) => {
	// relaly stupid fix

	if (req.path.includes("psp") || req.path.includes("emulator")) {
		res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
		res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
	} else {
		res.removeHeader("Cross-Origin-Opener-Policy");
		res.removeHeader("Cross-Origin-Embedder-Policy");
	}

	res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
	res.setHeader(
		"Cache-Control",
		"no-store, no-cache, must-revalidate, private"
	);
	res.setHeader("Pragma", "no-cache");
	res.setHeader("Expires", "0");
	next();
});

app.use((req, res, next) => {
	const isDir = req.path.endsWith("/");

	// determine file path
	const filePath = isDir
		? path.join(publicDir, req.path, "index.html")
		: path.join(publicDir, req.path);

	// only modify if it’s an HTML file
	if (filePath.endsWith(".html")) {
		fs.readFile(filePath, "utf8", (err, data) => {
			if (err) return next();

			const analytics = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-7JPJ866MG9"></script>
      <script>window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag("js", new Date());
      gtag("config", "G-7JPJ866MG9");</script>`;

			const modified = data.replace(/<\/head>/i, `${analytics}\n</head>`);
			res.type("html").send(modified);
		});
	} else {
		next();
	}
});

app.use((req, res, next) => {
	express.static(publicDir)(req, res, next);
});

app.use("/marcs", express.static(scramjetPath));
app.use("/mux", express.static(baremuxPath));
app.use("/ep", express.static(epoxyPath));
app.use("/lc", express.static(libcurlPath));

app.get("/autoc", async (req, res) => {
	const { q } = req.query;
	if (!q) {
		return res.status(400).send({ error: "Query parameter is required" });
	}
	const result = await fetch(
		`https://duckduckgo.com/ac/?q=${q}&format=json`
	).then((response) => response.json());
	res.status(200).send(result);
});

app.use((req, res) => {
	res.status(404).sendFile(path.join(publicDir, "/404.html"));
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, "0.0.0.0", () => {
	console.log(`Listening on port ${PORT}`);
	console.log(`http://localhost:${PORT}`);
});
