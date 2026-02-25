async function downloadFileToCheerpJ(e, r, t) {
	let s = await fetch(e),
		i = s.body.getReader(),
		a = +s.headers.get("Content-Length"),
		n = new Uint8Array(a);
	t?.(0, a);
	let o = 0;
	for (;;) {
		let { done: l, value: h } = await i.read();
		if (l) break;
		(n.set(h, o), t?.((o += h.length), a));
	}
	return new Promise((e, t) => {
		var s = [];
		cheerpOSOpen(s, r, "w", (r) => {
			cheerpOSWrite(s, r, n, 0, n.length, () => {
				cheerpOSClose(s, r, e);
			});
		});
	});
}
export default class e {
	#a;
	#b;
	#c;
	#d;
	#e;
	#f;
	#g;
	#h;
	constructor(e, r, t) {
		((this.#a = document.querySelector("button")),
			this.#a.addEventListener("click", () => this.run()),
			(this.#b = t || document.querySelector("progress")),
			this.#b && (this.#b.style.display = "none"),
			(this.#c = document.querySelector(".intro")),
			(this.#d = document.querySelector(".display")),
			cheerpjCreateDisplay(-1, -1, this.#d),
			(this.#e = !1),
			(this.#f = e),
			(this.#g = "function" == typeof r ? r : function () {}),
			(this.#h = this.#b));
	}
	async run() {
		if (this.#e) throw Error("Already running");
		((this.#e = !0),
			self.plausible && self.plausible("Play"),
			(this.#c.style.display = "none"),
			this.#b && (this.#b.style.display = "unset"));
		let e = "/files/client.jar";
		if (this.#f instanceof Blob) {
			this.#g("Writing modded jar to CheerpJ VFS...");
			let r = await this.#f.arrayBuffer();
			(await new Promise((t, s) => {
				var i = [];
				cheerpOSOpen(i, e, "w", (e) => {
					cheerpOSWrite(i, e, new Uint8Array(r), 0, r.byteLength, () => {
						cheerpOSClose(i, e, t);
					});
				});
			}),
				this.#h && (this.#h.value = 2));
		} else if ("string" == typeof this.#f)
			(this.#g("Downloading original jar to CheerpJ VFS..."),
				await downloadFileToCheerpJ(this.#f, e, (e, r) => {
					this.#h && ((this.#h.value = 1 + e / (r || 1)), (this.#h.max = 4));
				}));
		else
			throw (
				this.#g("No jar source provided!"),
				Error("No jar source provided")
			);
		if ("jar" === window.versionType || "jar-zip" === window.versionType)
			try {
				await cheerpjFSDeleteTree("/files/.minecraft/mods");
			} catch (t) {}
		if ("jar" === window.versionType || "jar-zip" === window.versionType) {
			try {
				cheerpjCreateDirectory("/files/.minecraft");
			} catch (s) {}
			try {
				cheerpjCreateDirectory("/files/.minecraft/mods");
			} catch (i) {}
			if (
				window.uploadedMods &&
				Array.isArray(window.uploadedMods) &&
				window.uploadedMods.length > 0
			)
				for (let a of window.uploadedMods) {
					if (!a.name.endsWith(".jar")) continue;
					let n = await a.arrayBuffer();
					await new Promise((e, r) => {
						var t = [];
						cheerpOSOpen(t, `/files/.minecraft/mods/${a.name}`, "w", (r) => {
							cheerpOSWrite(t, r, new Uint8Array(n), 0, n.byteLength, () => {
								cheerpOSClose(t, r, e);
							});
						});
					});
				}
		}
		(this.#b && (this.#b.style.display = "none"),
			this.#d && (this.#d.style.display = "unset"));
		let o = "net.minecraft.client.Minecraft";
		if (
			(window.selectedVersionClass &&
				"string" == typeof window.selectedVersionClass &&
				(o = window.selectedVersionClass),
			Array.isArray(window.selectedVersionLibraries))
		)
			for (let l of window.selectedVersionLibraries) {
				if (!l.url || !l.path) continue;
				let h = l.path.substring(0, l.path.lastIndexOf("/"));
				try {
					cheerpjCreateDirectory(h);
				} catch (p) {}
				await downloadFileToCheerpJ(l.url, l.path, (e, r) => {});
			}
		let c = `${e}`;
		if (Array.isArray(window.selectedVersionLibraries))
			for (let d of window.selectedVersionLibraries)
				d.path && (c = `${d.path}:${c}`);
		((c = `${c}:/app/lwjgl-2.9.3.jar:/app/lwjgl_util-2.9.3.jar`),
			this.#g("Launching Minecraft from /files/client.jar ..."));
		let u = await cheerpjRunMain(
			o,
			c,
			...(Array.isArray(window.selectedVersionJvmArgs)
				? window.selectedVersionJvmArgs
				: []),
		);
		return ((this.#e = !1), u);
	}
	get isRunning() {
		return this.#e;
	}
}
async function prepareLibrariesAndLaunch(e, r) {
	let t = window.selectedVersionLibraries || [];
	for (let s of t) {
		if (!s.url || !s.path) continue;
		await cheerpjCreateDirectory(
			s.path.substring(0, s.path.lastIndexOf("/")),
			!0,
		);
		let i = await (await fetch(s.url)).arrayBuffer();
		await cheerpOSOpen(s.path, "w").then((e) =>
			e.write(new Uint8Array(i)).then(() => e.close()),
		);
	}
	let a = [...t.map((e) => e.path), e, ...r].join(":"),
		n = window.selectedVersionJvmArgs || [];
	cheerpjRunMain({
		classpath: a,
		mainClass: window.selectedVersionClass || "net.minecraft.client.Minecraft",
		args: [],
		jvmArgs: n,
	});
}
