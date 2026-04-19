import { build } from "vite";
import { resolve, dirname, extname } from "path";
import { fileURLToPath } from "url";
import {
	copyFileSync,
	cpSync,
	rmSync,
	mkdirSync,
	readdirSync,
	statSync,
} from "fs";
import { scramjetPath } from "@mercuryworkshop/scramjet/path";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";
import { libcurlPath } from "@mercuryworkshop/libcurl-transport";
import { uvPath } from "@titaniumnetwork-dev/ultraviolet";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

process.env.VITE_GAME_MODE = "static";

const entries = [
	{ name: "main", input: "public/index.html" },
	{ name: "work", input: "public/work/index.html" },
	{ name: "settings", input: "public/settings/index.html" },
	{ name: "notfound", input: "public/404.html" },
];

const distDir = resolve(root, "dist");
rmSync(distDir, { recursive: true, force: true });
mkdirSync(distDir, { recursive: true });

for (const entry of entries) {
	console.log(`\n=== Building ${entry.name} (${entry.input}) ===`);
	await build({
		configFile: resolve(root, "vite.config.js"),
		mode: "production",
		build: {
			emptyOutDir: false,
			rollupOptions: {
				input: { [entry.name]: resolve(root, entry.input) },
			},
		},
	});
}

copyFileSync(resolve(root, "public/sw.js"), resolve(distDir, "sw.js"));
console.log("\nCopied sw.js");

const RUNTIME_EXTS = new Set([".js", ".mjs", ".cjs", ".wasm"]);
const SKIP_DIRS = new Set(["types"]);

function copyRuntimeOnly(srcDir, dstDir) {
	mkdirSync(dstDir, { recursive: true });
	for (const name of readdirSync(srcDir)) {
		if (SKIP_DIRS.has(name)) continue;
		const src = resolve(srcDir, name);
		const dst = resolve(dstDir, name);
		const st = statSync(src);
		if (st.isDirectory()) {
			copyRuntimeOnly(src, dst);
		} else {
			if (name.endsWith(".d.ts")) continue;
			if (name.endsWith(".map")) continue;
			if (!RUNTIME_EXTS.has(extname(name))) continue;
			copyFileSync(src, dst);
		}
	}
}

const proxyLibs = [
	{ prefix: "marcs", dir: scramjetPath },
	{ prefix: "mux", dir: baremuxPath },
	{ prefix: "ep", dir: epoxyPath },
	{ prefix: "lc", dir: libcurlPath },
	{ prefix: "vu", dir: uvPath },
];

for (const { prefix, dir } of proxyLibs) {
	copyRuntimeOnly(dir, resolve(distDir, prefix));
	console.log(`Copied ${prefix}/ from ${dir}`);
}

const scramjetWasm = resolve(scramjetPath, "scramjet.wasm.wasm");
copyFileSync(scramjetWasm, resolve(distDir, "marcs/scramjet.wasm.wasm"));

copyFileSync(resolve(root, "src/vu.config.js"), resolve(distDir, "vu/vu.config.js"));
copyFileSync(resolve(uvPath, "uv.bundle.js"), resolve(distDir, "vu/vu.bundle.js"));
console.log("Copied UV config and bundle");

console.log("\nStatic build complete.");
