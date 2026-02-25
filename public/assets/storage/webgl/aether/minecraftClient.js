// Fixed CheerpJ launcher with fullscreen display + LWJGL canvas binding + safer downloads

async function downloadFileToCheerpJ(url, vfsPath, onProgress) {
	const res = await fetch(url);
	if (!res.ok) throw new Error(`Fetch failed ${res.status} for ${url}`);

	// Some servers don't send Content-Length; handle both cases.
	const lenHeader = res.headers.get("Content-Length");
	const total = lenHeader ? Number(lenHeader) : 0;

	const reader = res.body?.getReader();
	if (!reader) {
		// Fallback (no streaming): just buffer whole response
		const buf = new Uint8Array(await res.arrayBuffer());
		onProgress?.(buf.length, buf.length);
		await new Promise((resolve, reject) => {
			const ctx = [];
			cheerpOSOpen(ctx, vfsPath, "w", (fd) => {
				cheerpOSWrite(ctx, fd, buf, 0, buf.length, () => {
					cheerpOSClose(ctx, fd, resolve);
				});
			});
		});
		return;
	}

	onProgress?.(0, total);

	let received = 0;
	const chunks = [];

	for (;;) {
		const { done, value } = await reader.read();
		if (done) break;
		chunks.push(value);
		received += value.length;
		onProgress?.(received, total || received);
	}

	const out = new Uint8Array(received);
	let off = 0;
	for (const c of chunks) {
		out.set(c, off);
		off += c.length;
	}

	await new Promise((resolve, reject) => {
		const ctx = [];
		cheerpOSOpen(ctx, vfsPath, "w", (fd) => {
			cheerpOSWrite(ctx, fd, out, 0, out.length, () => {
				cheerpOSClose(ctx, fd, resolve);
			});
		});
	});
}

export default class Launcher {
	#a;
	#b;
	#c;
	#d;
	#e;
	#f;
	#g;
	#h;

	constructor(jarSource, statusCb, progressEl) {
		this.#a = document.querySelector("button");
		this.#b = progressEl || document.querySelector("progress");
		this.#c = document.querySelector(".intro");
		this.#d = document.querySelector(".display");

		this.#e = false;
		this.#f = jarSource;
		this.#g = typeof statusCb === "function" ? statusCb : () => {};
		this.#h = this.#b;

		if (this.#b) this.#b.style.display = "none";

		// IMPORTANT: do NOT call cheerpjCreateDisplay here if .display is hidden.
		this.#a?.addEventListener("click", () => this.run());
	}

	async run() {
		if (this.#e) throw Error("Already running");
		this.#e = true;

		try {
			self.plausible && self.plausible("Play");

			// Hide intro, show progress
			if (this.#c) this.#c.style.display = "none";
			if (this.#b) {
				this.#b.style.display = "unset";
				this.#b.max = 4;
				this.#b.value = 0;
			}

			// Show display BEFORE creating it, so it has real size.
			if (this.#d) this.#d.style.display = "block";

			// Create CheerpJ display now that container is visible.
			cheerpjCreateDisplay(-1, -1, this.#d);

			// LWJGL: bind canvas element BEFORE launching Java main.
			// You said you added <canvas id="lwjgl"></canvas>
			const lwjglCanvas = document.getElementById("lwjgl");
			if (lwjglCanvas) {
				window.lwjglCanvasElement = lwjglCanvas;
				// Some builds use this alternative name; harmless if unused.
				window.lwjglCanvas = lwjglCanvas;
			} else {
				console.warn("No #lwjgl canvas found; LWJGL may fail to init.");
			}

			// --- Write/Download the main client jar into CheerpJ VFS ---
			const clientJarVfs = "/files/client.jar";

			if (this.#f instanceof Blob) {
				this.#g("Writing modded jar to CheerpJ VFS...");
				const ab = await this.#f.arrayBuffer();
				const bytes = new Uint8Array(ab);

				await new Promise((resolve) => {
					const ctx = [];
					cheerpOSOpen(ctx, clientJarVfs, "w", (fd) => {
						cheerpOSWrite(ctx, fd, bytes, 0, bytes.length, () => {
							cheerpOSClose(ctx, fd, resolve);
						});
					});
				});

				if (this.#h) this.#h.value = 1;
			} else if (typeof this.#f === "string") {
				this.#g("Downloading original jar to CheerpJ VFS...");
				await downloadFileToCheerpJ(this.#f, clientJarVfs, (done, total) => {
					if (this.#h) {
						this.#h.value = 1 + done / (total || 1);
						this.#h.max = 4;
					}
				});
			} else {
				this.#g("No jar source provided!");
				throw Error("No jar source provided");
			}

			// --- Mods setup (unchanged) ---
			if (window.versionType === "jar" || window.versionType === "jar-zip") {
				try {
					await cheerpjFSDeleteTree("/files/.minecraft/mods");
				} catch {}
				try {
					cheerpjCreateDirectory("/files/.minecraft");
				} catch {}
				try {
					cheerpjCreateDirectory("/files/.minecraft/mods");
				} catch {}

				if (
					Array.isArray(window.uploadedMods) &&
					window.uploadedMods.length > 0
				) {
					for (const mod of window.uploadedMods) {
						if (!mod.name.endsWith(".jar")) continue;
						const buf = new Uint8Array(await mod.arrayBuffer());
						await new Promise((resolve) => {
							const ctx = [];
							cheerpOSOpen(
								ctx,
								`/files/.minecraft/mods/${mod.name}`,
								"w",
								(fd) => {
									cheerpOSWrite(ctx, fd, buf, 0, buf.length, () => {
										cheerpOSClose(ctx, fd, resolve);
									});
								},
							);
						});
					}
				}
			}

			// --- Download selected version libraries into VFS ---
			if (Array.isArray(window.selectedVersionLibraries)) {
				for (const lib of window.selectedVersionLibraries) {
					if (!lib.url || !lib.path) continue;
					const dir = lib.path.substring(0, lib.path.lastIndexOf("/"));
					try {
						cheerpjCreateDirectory(dir);
					} catch {}

					await downloadFileToCheerpJ(lib.url, lib.path);
				}
			}

			// --- LWJGL jars: download into VFS and include from there (NO /app hardcode) ---
			// Set this to your actual server directory:

			const lwjglVfs = "/app/assets/storage/webgl/aether/lwjgl-2.9.3.jar";
			const lwjglUtilVfs =
				"/app/assets/storage/webgl/aether/lwjgl_util-2.9.3.jar";

			this.#g("Downloading LWJGL jars...");
			await downloadFileToCheerpJ(`lwjgl-2.9.3.jar`, lwjglVfs);
			await downloadFileToCheerpJ(`lwjgl_util-2.9.3.jar`, lwjglUtilVfs);

			// --- Build classpath ---
			let mainClass = "net.minecraft.client.Minecraft";
			if (typeof window.selectedVersionClass === "string")
				mainClass = window.selectedVersionClass;

			let cp = `${clientJarVfs}`;
			if (Array.isArray(window.selectedVersionLibraries)) {
				for (const lib of window.selectedVersionLibraries) {
					if (lib.path) cp = `${lib.path}:${cp}`;
				}
			}
			cp = `${cp}:${lwjglVfs}:${lwjglUtilVfs}`;

			// Hide progress
			if (this.#b) this.#b.style.display = "none";

			this.#g("Launching Minecraft...");
			try {
				const result = await cheerpjRunMain(
					mainClass,
					cp,
					...(Array.isArray(window.selectedVersionJvmArgs)
						? window.selectedVersionJvmArgs
						: []),
				);
				return result;
			} catch (err) {
				console.error("cheerpjRunMain failed:", err);
				throw err;
			}
		} finally {
			this.#e = false;
		}
	}

	get isRunning() {
		return this.#e;
	}
}
