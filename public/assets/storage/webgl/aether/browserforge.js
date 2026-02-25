import MinecraftClient from "./minecraftClient.js";
import ModManager from "./modManager.js";

const modManager = new ModManager();
await modManager.init();

const mpList = document.getElementById("modpacks-list");
const createMpBtn = document.getElementById("create-modpack-btn");
const importMpBtn = document.getElementById("import-modpack-btn");
const importMpInput = document.getElementById("import-modpack-input");
const mpModal = document.getElementById("modpack-modal");
const mpSaveBtn = document.getElementById("mp-save-btn");
const mpCancelBtn = document.getElementById("mp-cancel-btn");
const mpName = document.getElementById("mp-name");
const mpDesc = document.getElementById("mp-desc");
const mpIcon = document.getElementById("mp-icon");
const mpFiles = document.getElementById("mp-files");
const mpFileList = document.getElementById("mp-file-list");

let editingId = null;

async function renderModpacks() {
	mpList.innerHTML = "";
	const modpacks = await modManager.getAllModpacks();

	if (modpacks.length === 0) {
		mpList.innerHTML =
			'<p style="color:#aaa; font-style:italic;">No modpacks found. Create one to get started!</p>';
		return;
	}

	modpacks.forEach((mp) => {
		const card = document.createElement("div");
		card.className = "modpack-card";
		card.style.border = "1px solid #444";
		card.style.borderRadius = "8px";
		card.style.padding = "10px";
		card.style.marginBottom = "10px";
		card.style.background = "#333";
		card.style.display = "flex";
		card.style.alignItems = "center";
		card.style.gap = "10px";

		const img = document.createElement("img");
		img.style.width = "64px";
		img.style.height = "64px";
		img.style.objectFit = "cover";
		img.style.borderRadius = "4px";
		img.style.background = "#222";
		if (mp.icon) {
			img.src = URL.createObjectURL(mp.icon);
		}
		card.appendChild(img);

		const info = document.createElement("div");
		info.style.flex = "1";

		const name = document.createElement("h4");
		name.textContent = mp.name;
		name.style.margin = "0 0 5px 0";
		info.appendChild(name);

		const desc = document.createElement("p");
		desc.textContent = mp.description || "";
		desc.style.margin = "0";
		desc.style.fontSize = "0.9em";
		desc.style.color = "#ccc";
		info.appendChild(desc);

		const modCount = document.createElement("small");
		modCount.textContent = `${mp.mods.length} Mods`;
		modCount.style.display = "block";
		modCount.style.marginTop = "5px";
		modCount.style.color = "#aaa";
		info.appendChild(modCount);

		card.appendChild(info);

		const actions = document.createElement("div");
		actions.style.display = "flex";
		actions.style.flexDirection = "column";
		actions.style.gap = "5px";

		const playBtn = document.createElement("button");
		playBtn.textContent = "Play";
		playBtn.style.background = "#4CAF50";
		playBtn.onclick = () => playModpack(mp);
		actions.appendChild(playBtn);

		const editBtn = document.createElement("button");
		editBtn.textContent = "Edit";
		editBtn.style.background = "#f0ad4e";
		editBtn.onclick = () => editModpack(mp);
		actions.appendChild(editBtn);

		const exportBtn = document.createElement("button");
		exportBtn.textContent = "Export";
		exportBtn.onclick = () => exportModpack(mp.id);
		actions.appendChild(exportBtn);

		const deleteBtn = document.createElement("button");
		deleteBtn.textContent = "Delete";
		deleteBtn.style.background = "#d9534f";
		deleteBtn.onclick = async () => {
			if (confirm(`Delete modpack "${mp.name}"?`)) {
				await modManager.deleteModpack(mp.id);
				renderModpacks();
			}
		};
		actions.appendChild(deleteBtn);

		card.appendChild(actions);
		mpList.appendChild(card);
	});
}

function openModal(isEdit = false) {
	document.getElementById("modal-title").textContent = isEdit
		? "Edit Modpack"
		: "Create Modpack";
	mpModal.style.display = "flex";
}

createMpBtn.onclick = () => {
	editingId = null;
	mpName.value = "";
	mpDesc.value = "";
	mpIcon.value = "";
	mpFiles.value = "";
	mpFileList.innerHTML = "";

	document.getElementById("mp-memory").value = "default";
	document.getElementById("mp-opengl").checked = false;
	document.getElementById("mp-gc").value = "";
	document.getElementById("mp-aggressive").checked = false;
	document.getElementById("mp-width").value = "854";
	document.getElementById("mp-height").value = "480";
	document.getElementById("mp-flags").value = "";
	openModal(false);
};

function editModpack(mp) {
	editingId = mp.id;
	mpName.value = mp.name;
	mpDesc.value = mp.description;
	mpIcon.value = "";
	document.getElementById("mp-memory").value = mp.config?.memory || "default";
	document.getElementById("mp-opengl").checked =
		mp.config?.opengl !== undefined ? mp.config.opengl : false;
	document.getElementById("mp-gc").value = mp.config?.gc || "";
	document.getElementById("mp-aggressive").checked =
		mp.config?.aggressive || false;
	document.getElementById("mp-width").value = mp.config?.width || "854";
	document.getElementById("mp-height").value = mp.config?.height || "480";
	document.getElementById("mp-flags").value = mp.config?.flags || "";

	mpFileList.innerHTML = "";
	mp.mods.forEach((f) => {
		const li = document.createElement("li");
		li.textContent = f.name + " (Existing)";
		mpFileList.appendChild(li);
	});
	openModal(true);
}

mpCancelBtn.onclick = () => {
	mpModal.style.display = "none";
};

mpFiles.onchange = () => {
	mpFileList.innerHTML = "";
	for (let f of mpFiles.files) {
		const li = document.createElement("li");
		li.textContent = f.name;
		mpFileList.appendChild(li);
	}
};

mpSaveBtn.onclick = async () => {
	const name = mpName.value.trim();
	if (!name) return alert("Name required!");

	const desc = mpDesc.value.trim();
	const icon = mpIcon.files[0] || null;
	const files = Array.from(mpFiles.files);

	const config = {
		memory: document.getElementById("mp-memory").value,
		opengl: document.getElementById("mp-opengl").checked,
		gc: document.getElementById("mp-gc").value,
		aggressive: document.getElementById("mp-aggressive").checked,
		width: document.getElementById("mp-width").value,
		height: document.getElementById("mp-height").value,
		flags: document.getElementById("mp-flags").value.trim(),
	};

	try {
		if (editingId) {
			const updates = { name, description: desc, config };
			if (icon) updates.icon = icon;
			if (files.length > 0) updates.mods = files;

			await modManager.updateModpack(editingId, updates);
		} else {
			await modManager.createModpack(name, desc, icon, files, config);
		}
		mpModal.style.display = "none";
		renderModpacks();
	} catch (e) {
		alert("Error saving: " + e.message);
		console.error(e);
	}
};

importMpBtn.onclick = () => importMpInput.click();
importMpInput.onchange = async (e) => {
	const file = e.target.files[0];
	if (!file) return;
	try {
		await modManager.importModpack(file);
		renderModpacks();
		alert("Import successful!");
	} catch (err) {
		alert("Import failed: " + err.message);
	}
	importMpInput.value = "";
};

async function exportModpack(id) {
	try {
		const { blob, filename } = await modManager.exportModpack(id);
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = filename;
		a.click();
		URL.revokeObjectURL(url);
	} catch (e) {
		alert("Export failed: " + e.message);
	}
}

async function playModpack(mp) {
	uploadedMods = [];

	mp.mods.forEach((f) => uploadedMods.push(f));
	updateModList();

	if (mp.config) {
		document.getElementById("memory-select").value =
			mp.config.memory || "default";
		document.getElementById("opengl-toggle").checked =
			mp.config.opengl !== undefined ? mp.config.opengl : false;
		document.getElementById("gc-select").value = mp.config.gc || "";
		document.getElementById("aggressive-opts").checked =
			mp.config.aggressive || false;
		document.getElementById("custom-args").value = mp.config.flags || "";
		updateArgsPreview();
	}

	window.scrollTo({ top: 0, behavior: "smooth" });

	const label = document.querySelector('label[for="mod-upload"]');
	if (label) label.textContent = `Playing: ${mp.name}`;

	playBtn.click();
}

renderModpacks();
const versionSelect = document.getElementById("version-select");
let versionType = "zip";

function syncVersionConfig() {
	const idx = versionSelect.selectedIndex;
	const selected = window.versionsData[idx];
	if (!selected) return;

	window.selectedVersionClass = selected.class;
	window.selectedVersionLibraries = selected.libraries || [];
	window.selectedVersionJvmArgs = selected.jvmArgs || [];
	versionType = selected.type || "zip";

	updateModUploadLabel();
	uploadedMods = [];
	updateModList();

	document.getElementById("memory-select").value = "1024M";
	document.getElementById("gc-select").value = "";
	document.getElementById("aggressive-opts").checked = false;
	document.getElementById("username").value = "Player";
	document.getElementById("custom-args").value = "";

	const args = selected.jvmArgs || [];
	let unmanaged = [];

	for (let i = 0; i < args.length; i++) {
		const arg = args[i];
		if (arg === "--username") {
			const val = args[i + 1];
			if (val) {
				document.getElementById("username").value = val;
				i++;
			}
		} else if (arg === "--width") {
			const val = args[i + 1];
			if (val) {
				i++;
			}
		} else if (arg === "--height") {
			const val = args[i + 1];
			if (val) {
				i++;
			}
		} else if (arg.startsWith("-Xmx")) {
			document.getElementById("memory-select").value = arg.substring(4);
		} else if (
			arg === "-XX:+UseG1GC" ||
			arg === "-XX:+UseParallelGC" ||
			arg === "-XX:+UseConcMarkSweepGC"
		) {
			document.getElementById("gc-select").value = arg;
		} else if (arg === "-XX:+AggressiveOpts") {
			document.getElementById("aggressive-opts").checked = true;
		} else {
			unmanaged.push(arg);
		}
	}

	if (unmanaged.length > 0) {
		document.getElementById("custom-args").value = unmanaged.join(" ");
	}

	updateArgsPreview();
}

function updateArgsPreview() {
	const customArgsInput = document.getElementById("custom-args");
	if (!customArgsInput) return;

	const currentVal = customArgsInput.value || "";
	const existingFlags = currentVal.split(/\s+/).filter((f) => f.length > 0);
	const managedPrefixes = [
		"-Xmx",
		"-XX:+Use",
		"-XX:+AggressiveOpts",
		"-Dsun.java2d.opengl=",
		"--username",
		"--width",
		"--height",
	];

	let manualFlags = [];
	for (let i = 0; i < existingFlags.length; i++) {
		const flag = existingFlags[i];

		if (flag === "--username" || flag === "--width" || flag === "--height") {
			i++;
			continue;
		}

		if (!managedPrefixes.some((p) => flag.startsWith(p))) {
			manualFlags.push(flag);
		}
	}

	const memorySelect = document.getElementById("memory-select");
	const openglToggle = document.getElementById("opengl-toggle");
	const gcSelect = document.getElementById("gc-select");
	const aggressiveOpts = document.getElementById("aggressive-opts");
	const usernameInput = document.getElementById("username");
	const resWidth = document.getElementById("res-width");
	const resHeight = document.getElementById("res-height");

	let managed = [];
	if (memorySelect && memorySelect.value !== "default") {
		managed.push(`-Xmx${memorySelect.value}`);
	}
	if (openglToggle && openglToggle.checked) {
		managed.push("-Dsun.java2d.opengl=true");
	}
	if (gcSelect && gcSelect.value) {
		managed.push(gcSelect.value);
	}
	if (aggressiveOpts && aggressiveOpts.checked) {
		managed.push("-XX:+AggressiveOpts");
	}

	const user = usernameInput ? usernameInput.value.trim() : "Player";
	const w = resWidth ? resWidth.value : "854";
	const h = resHeight ? resHeight.value : "480";
	managed.push(`--username`, user, `--width`, w, `--height`, h);

	customArgsInput.value = (
		managed.join(" ") +
		" " +
		manualFlags.join(" ")
	).trim();
}

fetch("./mc/versions.json")
	.then((res) => res.json())
	.then((versions) => {
		window.versionsData = versions;
		versions.forEach((v, i) => {
			const opt = document.createElement("option");
			opt.value = v.jar;
			opt.textContent = v.name;
			opt.dataset.type = v.type || "zip";
			if (v.class) opt.dataset.class = v.class;
			versionSelect.appendChild(opt);
		});
		const first = versions[0];
		if (first) {
			syncVersionConfig();
		} else {
			window.selectedVersionJvmArgs = [];
		}
	});

versionSelect.addEventListener("change", syncVersionConfig);

[
	"memory-select",
	"opengl-toggle",
	"gc-select",
	"aggressive-opts",
	"username",
	"res-width",
	"res-height",
].forEach((id) => {
	const el = document.getElementById(id);
	if (el) {
		el.addEventListener("input", updateArgsPreview);
		el.addEventListener("change", updateArgsPreview);
	}
});

function updateModUploadLabel() {
	const label = document.querySelector('label[for="mod-upload"]');
	if (versionType === "jar") {
		label.textContent = "Upload Mod JAR:";
		modUpload.accept = ".jar";
	} else if (versionType === "jar-zip") {
		label.textContent = "Upload Mod ZIP or JAR:";
		modUpload.accept = ".zip,.jar";
	} else {
		label.textContent = "Upload Mod ZIP:";
		modUpload.accept = ".zip";
	}
}
let moddedJarBlob = null;
const modUpload = document.getElementById("mod-upload");
const modList = document.getElementById("mod-list");
let uploadedMods = [];
function updateModList() {
	modList.innerHTML = "";
	uploadedMods.forEach((mod, idx) => {
		const li = document.createElement("li");
		li.textContent = mod.name + " ";
		const removeBtn = document.createElement("button");
		removeBtn.textContent = "Remove";
		removeBtn.onclick = () => {
			uploadedMods.splice(idx, 1);
			updateModList();
		};
		li.appendChild(removeBtn);
		modList.appendChild(li);
	});
}
const progress = document.querySelector("progress");
const initStatus = document.getElementById("init-status");
window.uploadedMods = uploadedMods;
window.versionType = versionType;
const selected = versionSelect.options[versionSelect.selectedIndex];
window.selectedVersionClass = selected?.dataset.class || undefined;
const playBtn = document.getElementById("play-btn");
playBtn.addEventListener("click", async () => {
	progress.style.display = "";
	progress.value = 0;
	progress.max = 4;
	try {
		let jarBlob = null;
		let jarSource;
		if (initStatus) {
			initStatus.style.display = "";
			initStatus.textContent = "Initializing...";
		}
		if (
			uploadedMods.length > 0 &&
			(versionType === "zip" || versionType === "jar-zip")
		) {
			jarBlob = await patchJarWithMods();
			jarSource = jarBlob;
		} else {
			jarSource = versionSelect.value;
		}
		window.uploadedMods = uploadedMods;
		window.versionType = versionType;
		progress.value = 1;

		const customArgsInput = document.getElementById("custom-args");
		let javaProps = [
			"java.library.path=/app/assets/storage/webgl/aether/libraries/",
		];
		let runArgs = [];

		if (customArgsInput && customArgsInput.value.trim()) {
			const allTokens = customArgsInput.value.trim().split(/\s+/);
			for (let i = 0; i < allTokens.length; i++) {
				const t = allTokens[i];
				if (
					t.startsWith("-D") ||
					t.startsWith("-X") ||
					t.startsWith("-XX") ||
					t.startsWith("_JAVA_")
				) {
					if (t.startsWith("-D")) {
						javaProps.push(t.substring(2));
					} else if (t.startsWith("-X")) {
						if (t.startsWith("-Xmx")) {
							javaProps.push(`_JAVA_OPTIONS=${t}`);
						} else {
							javaProps.push(t);
						}
					} else {
						javaProps.push(t);
					}
				} else {
					runArgs.push(t);
				}
			}
		}

		let libs = {
			"libGL.so.1": "/app/assets/storage/webgl/aether/libraries/gl4es.wasm",
		};

		if (initStatus) initStatus.textContent = "Initializing CheerpJ...";
		await cheerpjInit({
			version: 8,
			javaProperties: javaProps,
			libraries: libs,
			enableX11: true,

			preloadResources: {
				"/lt/8/jre/lib/rt.jar": [
					0, 131072, 1310720, 1572864, 4456448, 4849664, 5111808, 5505024,
					7995392, 8126464, 9699328, 9830400, 9961472, 11534336, 11665408,
					12189696, 12320768, 12582912, 13238272, 13369344, 15073280, 15335424,
					15466496, 15597568, 15990784, 16121856, 16252928, 16384000, 16777216,
					16908288, 17039360, 17563648, 17694720, 17825792, 17956864, 18087936,
					18219008, 18612224, 18743296, 18874368, 19005440, 19136512, 19398656,
					19791872, 20054016, 20709376, 20840448, 21757952, 21889024, 26869760,
				],
				"/lt/etc/users": [0, 131072],
				"/lt/etc/localtime": [],
				"/lt/8/jre/lib/cheerpj-awt.jar": [0, 131072],
				"/lt/8/lib/ext/meta-index": [0, 131072],
				"/lt/8/lib/ext": [],
				"/lt/8/lib/ext/index.list": [],
				"/lt/8/lib/ext/localedata.jar": [],
				"/lt/8/jre/lib/jsse.jar": [0, 131072, 786432, 917504],
				"/lt/8/jre/lib/jce.jar": [0, 131072],
				"/lt/8/jre/lib/charsets.jar": [0, 131072, 1703936, 1835008],
				"/lt/8/jre/lib/resources.jar": [0, 131072, 917504, 1179648],
				"/lt/8/jre/lib/javaws.jar": [0, 131072, 1441792, 1703936],
				"/lt/8/lib/ext/sunjce_provider.jar": [],
				"/lt/8/lib/security/java.security": [0, 131072],
				"/lt/8/jre/lib/meta-index": [0, 131072],
				"/lt/8/jre/lib": [],
				"/lt/8/lib/accessibility.properties": [],
				"/lt/8/lib/fonts/LucidaSansRegular.ttf": [],
				"/lt/8/lib/currency.data": [0, 131072],
				"/lt/8/lib/currency.properties": [],
				"/lt/libraries/libGLESv2.so.1": [0, 262144],
				"/lt/libraries/libEGL.so.1": [0, 262144],
				"/lt/8/lib/fonts/badfonts.txt": [],
				"/lt/8/lib/fonts": [],
				"/lt/etc/hosts": [],
				"/lt/etc/resolv.conf": [0, 131072],
				"/lt/8/lib/fonts/fallback": [],
				"/lt/fc/fonts/fonts.conf": [0, 131072],
				"/lt/fc/ttf": [],
				"/lt/fc/cache/e21edda6a7db77f35ca341e0c3cb2a22-le32d8.cache-7": [
					0, 131072,
				],
				"/lt/fc/ttf/LiberationSans-Regular.ttf": [0, 131072, 262144, 393216],
				"/lt/8/lib/jaxp.properties": [],
				"/lt/etc/timezone": [],
				"/lt/8/lib/tzdb.dat": [0, 131072],
			},
		});
		progress.value = 2;
		if (initStatus) initStatus.textContent = "Launching Minecraft...";

		window.selectedVersionJvmArgs = runArgs;

		const mc = new MinecraftClient(jarSource, undefined, progress);
		await mc.run();
		progress.value = 4;
		if (initStatus) {
			initStatus.textContent = "Ready";
			setTimeout(() => {
				initStatus.style.display = "none";
			}, 1000);
		}
		setTimeout(() => {
			progress.style.display = "none";
		}, 1000);
	} catch (err) {
		progress.style.display = "none";
		if (initStatus) initStatus.style.display = "none";
		console.error(err);
	}
});
modUpload.addEventListener("change", async (e) => {
	try {
		const files = Array.from(e.target.files);
		if (!files.length) {
			return;
		}
		files.forEach((file) => {
			if (!uploadedMods.some((f) => f.name === file.name)) {
				if (versionType === "jar" && !file.name.endsWith(".jar")) return;
				if (versionType === "zip" && !file.name.endsWith(".zip")) return;
				if (
					versionType === "jar-zip" &&
					!(file.name.endsWith(".zip") || file.name.endsWith(".jar"))
				)
					return;
				uploadedMods.push(file);
			}
		});
		updateModList();
	} catch (err) {
		console.error(err);
	}
});
const AETHER_URL = "demo/aether.zip";
const PLAYER_API_URL = "demo/player-api.zip";
const loadAetherBtn = document.getElementById("load-aether-demo-btn");
const aetherStatus = document.getElementById("aether-demo-status");
loadAetherBtn.addEventListener("click", async () => {
	try {
		loadAetherBtn.disabled = true;
		aetherStatus.style.display = "";
		aetherStatus.textContent = "Initializing demo...";
		if (versionType !== "zip" && versionType !== "jar-zip") {
			for (let i = 0; i < versionSelect.options.length; i++) {
				const type = versionSelect.options[i].dataset.type;
				if (type === "zip" || type === "jar-zip") {
					versionSelect.selectedIndex = i;
					versionSelect.dispatchEvent(new Event("change"));
					break;
				}
			}
		}

		progress.style.display = "";
		progress.value = 0;
		progress.max = 3;

		const urls = [
			{ url: AETHER_URL, name: "The Aether Mod.zip" },
			{ url: PLAYER_API_URL, name: "MC Player API.zip" },
		];

		for (let i = 0; i < urls.length; i++) {
			const entry = urls[i];
			aetherStatus.textContent = `Fetching ${entry.name}...`;
			const resp = await fetch(entry.url);
			if (!resp.ok) throw new Error("Failed to fetch " + entry.url);
			const blob = await resp.blob();
			blob.name = entry.name;
			if (!uploadedMods.some((m) => m.name === blob.name)) {
				uploadedMods.push(blob);
			}
			progress.value = i + 1;
		}

		updateModList();
		aetherStatus.textContent = "Starting demo...";
		playBtn.click();
	} catch (err) {
		console.error(err);
		aetherStatus.textContent = "Demo load failed: " + (err.message || err);
		loadAetherBtn.disabled = false;
		setTimeout(() => {
			aetherStatus.style.display = "none";
		}, 5000);
	}
});
async function patchJarWithMods() {
	try {
		if (versionType === "jar") {
			return null;
		}
		if (versionType === "zip" || versionType === "jar-zip") {
			const zipMods = uploadedMods.filter((f) => f.name.endsWith(".zip"));
			if (zipMods.length === 0) {
				progress.style.display = "none";
				return null;
			}
			progress.style.display = "";
			progress.value = 0;
			let totalFiles = 0;
			for (const file of zipMods) {
				try {
					const modZip = await JSZip.loadAsync(file);
					totalFiles += Object.keys(modZip.files).filter(
						(fname) => !modZip.files[fname].dir,
					).length;
				} catch {}
			}
			progress.max = totalFiles + 2;
			const versionJarPath = versionSelect.value;
			let jarResp;
			try {
				jarResp = await fetch(versionJarPath);
				if (!jarResp.ok)
					throw new Error("Failed to fetch base jar: " + jarResp.statusText);
			} catch (err) {
				progress.style.display = "none";
				throw err;
			}
			let jarBuf;
			try {
				jarBuf = await jarResp.arrayBuffer();
			} catch (err) {
				progress.style.display = "none";
				throw err;
			}
			progress.value++;
			const zip = new JSZip();
			try {
				await zip.loadAsync(jarBuf);
			} catch (err) {
				progress.style.display = "none";
				throw err;
			}
			let doneFiles = 0;
			for (const [i, file] of zipMods.entries()) {
				let modZip;
				try {
					modZip = await JSZip.loadAsync(file);
				} catch (err) {
					continue;
				}
				const modFileNames = Object.keys(modZip.files).filter(
					(fname) => !modZip.files[fname].dir,
				);
				for (const fname of modFileNames) {
					try {
						const content = await modZip.files[fname].async("uint8array");
						zip.file(fname, content);
						doneFiles++;
						progress.value = 1 + doneFiles;
					} catch (err) {}
				}
			}
			progress.value = totalFiles + 1;
			let newJarBuf;
			try {
				newJarBuf = await zip.generateAsync({ type: "uint8array" });
			} catch (err) {
				progress.style.display = "none";
				throw err;
			}
			progress.value = progress.max;
			setTimeout(() => {
				progress.style.display = "none";
			}, 1000);
			return new Blob([newJarBuf], { type: "application/java-archive" });
		}
		return null;
	} catch (err) {
		progress.style.display = "none";
		throw err;
	}
}
