import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";
import { copyFileSync, cpSync, existsSync, mkdirSync, symlinkSync, readFileSync, writeFileSync } from "fs";
import obfuscatorPlugin from "vite-plugin-bundle-obfuscator";

const analytics = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-7JPJ866MG9"></script>
<script>window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "G-7JPJ866MG9");</script>`;

const popunderScript = `<script>!function(){document.addEventListener("click",function(e){const t=sessionStorage.getItem("last_pop_time"),n=Date.now();!(!e.isTrusted||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||t&&n-t<12e4)&&(window.open("https://woofbeginner.com/sfjqaf6m?key=01f46fd192f6ca8f6d95c02ad8bce042","_blank","noopener,noreferrer"),sessionStorage.setItem("last_pop_time",n))},!0)}();</script>`;

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	const gameMode = process.env.VITE_GAME_MODE || "selfhosted";
	const wispUrl = env.VITE_WISP_URL || process.env.VITE_WISP_URL || "";

	return {
		root: "public",
		base: "/",

		define: {
			"import.meta.env.VITE_GAME_MODE": JSON.stringify(gameMode),
			"import.meta.env.VITE_WISP_URL": wispUrl ? JSON.stringify(wispUrl) : "undefined",
		},

		build: {
			outDir: "../dist",
			emptyOutDir: true,
			rollupOptions: {
				input: {
					main: resolve(__dirname, "public/index.html"),
					work: resolve(__dirname, "public/work/index.html"),
					settings: resolve(__dirname, "public/settings/index.html"),
				},
			},
			assetsDir: "assets",
			copyPublicDir: false,
		},

		plugins: [
			{
				name: "html-transform",
				transformIndexHtml(html) {
					let transformed = html
						.replace(/"%VITE_WISP_URL%"/g, wispUrl ? `"${wispUrl}"` : "null")
						.replace(/%VITE_GAME_MODE%/g, gameMode);
					
					if (gameMode === "static") {
						const bodyInject = analytics + "\n" + popunderScript;
						transformed = transformed.replace(/<\/body>/i, `${bodyInject}\n</body>`);
					}
					
					return transformed;
				},
			},
			obfuscatorPlugin({
				enable: true,
				log: false,
				options: {
					compact: true,
					controlFlowFlattening: true,
					controlFlowFlatteningThreshold: 0.5,
					deadCodeInjection: true,
					deadCodeInjectionThreshold: 0.2,
					stringArray: true,
					stringArrayThreshold: 0.5,
					stringArrayEncoding: ["base64"],
					splitStrings: true,
					splitStringsChunkLength: 5,
				},
			}),
			{
				name: "copy-static-assets",
				closeBundle() {
					const distDir = resolve(__dirname, "dist");
					const publicDir = resolve(__dirname, "public");

					const dirs = ["assets/css", "assets/img", "assets/json", "assets/audio", "assets/vendor"];

					for (const dir of dirs) {
						const targetDir = resolve(distDir, dir);
						if (!existsSync(targetDir)) {
							mkdirSync(targetDir, { recursive: true });
						}
					}

					cpSync(resolve(publicDir, "assets/css"), resolve(distDir, "assets/css"), { recursive: true });
					cpSync(resolve(publicDir, "assets/img"), resolve(distDir, "assets/img"), { recursive: true });
					cpSync(resolve(publicDir, "assets/json"), resolve(distDir, "assets/json"), { recursive: true });

					if (existsSync(resolve(publicDir, "assets/audio"))) {
						cpSync(resolve(publicDir, "assets/audio"), resolve(distDir, "assets/audio"), { recursive: true });
					}

					if (existsSync(resolve(publicDir, "assets/vendor"))) {
						cpSync(resolve(publicDir, "assets/vendor"), resolve(distDir, "assets/vendor"), { recursive: true });
					}

					copyFileSync(resolve(publicDir, "sw.js"), resolve(distDir, "sw.js"));
					
					let html404 = readFileSync(resolve(publicDir, "404.html"), "utf-8");
					if (gameMode === "static") {
						const bodyInject = analytics + "\n" + popunderScript;
						html404 = html404.replace(/<\/body>/i, `${bodyInject}\n</body>`);
					}
					writeFileSync(resolve(distDir, "404.html"), html404);

					if (gameMode === "selfhosted") {
						const storageSource = resolve(publicDir, "assets/storage");
						const storageTarget = resolve(distDir, "assets/storage");
						
						if (!existsSync(storageTarget)) {
							symlinkSync(storageSource, storageTarget, "dir");
							console.log("Created symlink for game storage");
						}
					} else {
						console.log("Static mode: Skipping game storage (using LuminSDK)");
					}
				},
			},
		],

		server: {
			port: 3000,
			proxy: {
				"/autoc": "http://localhost:8080",
				"/wisp": { target: "ws://localhost:8080", ws: true },
				"/marcs": "http://localhost:8080",
				"/mux": "http://localhost:8080",
				"/ep": "http://localhost:8080",
				"/lc": "http://localhost:8080",
				"/vu": "http://localhost:8080",
				"/scramjet": "http://localhost:8080",
			},
		},

		resolve: {
			alias: {
				"@": resolve(__dirname, "public/assets"),
			},
		},
	};
});
