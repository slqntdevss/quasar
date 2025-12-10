const cursorSpeedSlider = document.getElementById("cursorSpeed");
const currentSpeed = document.getElementById("currentSpeed");
const panicButton = document.getElementById("panicKey");
const panicURL = document.getElementById("panicURL");
const abCloak = document.getElementById("abCloak");
const abCloak2 = document.getElementById("abCloak2");
const exportBtn = document.getElementById("export");
const importBtn = document.getElementById("import");
const clear = document.getElementById("clear");
const themeOptions = document.querySelectorAll(".theme-option");
let listening = false;
let debounce = false;

let shaderList;

(async () => {
	const response = await fetch("/assets/json/shaders.json");
	shaderList = await response.json();
})();

if (localStorage.getItem("activeTheme") == null) {
	localStorage.setItem("activeTheme", "theme-classic");
}

if (cursorSpeedSlider != null) {
	cursorSpeedSlider.addEventListener("input", (e) => {
		console.log(e.target.value);
		currentSpeed.textContent = e.target.value;
		localStorage.setItem("cursorSpeed", e.target.value);
	});
}

window.addEventListener("keypress", (e) => {
	if (listening) {
		localStorage.setItem("panicKey", e.key);
		console.log(e.key);
		listening = false;
		if (panicButton) {
			panicButton.textContent = `Panic Key set to ${e.key}`;
			setTimeout(() => {
				panicButton.textContent = `Panic Key: ${localStorage.getItem(
					"panicKey"
				)}`;
			}, 3000);
		}
	} else {
		if (e.key == localStorage.getItem("panicKey") && !debounce) {
			debounce = true;
			window.open(localStorage.getItem("panicURL"));
			setTimeout((debounce = false), 100);
		}
	}
});
function startGLSL(gl, canvas) {
	window.addEventListener("resize", () => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		gl.viewport(0, 0, canvas.width, canvas.height);
	});

	const vertexShaderSource = `
		attribute vec2 position;
		void main() {
			gl_Position = vec4(position, 0.0, 1.0);
		}
	`;

	const fragmentShaderSource = localStorage.getItem("fragmentShader");

	function createShader(gl, type, source) {
		const shader = gl.createShader(type);
		gl.shaderSource(shader, source);
		gl.compileShader(shader);
		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			console.error(gl.getShaderInfoLog(shader));
			gl.deleteShader(shader);
			return null;
		}
		return shader;
	}

	const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
	const fragmentShader = createShader(
		gl,
		gl.FRAGMENT_SHADER,
		fragmentShaderSource
	);

	if (!fragmentShader) {
		console.error("Failed to compile fragment shader");
		return;
	}

	const program = gl.createProgram();
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.linkProgram(program);
	gl.useProgram(program);

	const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
	const buffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

	const positionLocation = gl.getAttribLocation(program, "position");
	gl.enableVertexAttribArray(positionLocation);
	gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

	const resolutionLocation = gl.getUniformLocation(program, "resolution");
	const timeLocation = gl.getUniformLocation(program, "time");

	function render(time) {
		time *= 0.001;
		gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
		gl.uniform1f(timeLocation, time);
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
		requestAnimationFrame(render);
	}

	requestAnimationFrame(render);
}

document.addEventListener("DOMContentLoaded", () => {
	if (
		localStorage.getItem("cursorSpeed") != null &&
		currentSpeed != null &&
		cursorSpeedSlider != null
	) {
		currentSpeed.textContent = localStorage.getItem("cursorSpeed");
		cursorSpeedSlider.value = localStorage.getItem("cursorSpeed");
	}
	if (localStorage.getItem("panicKey") == null) {
		localStorage.setItem("panicKey", "`");
	}
	if (localStorage.getItem("panicURL") == null) {
		localStorage.setItem("panicURL", "https://classroom.google.com");
	}
	if (localStorage.getItem("focusCloaking") == null) {
		localStorage.setItem("focusCloaking", true);
	}
	if (localStorage.getItem("autoCloak") == null) {
		localStorage.setItem("autoCloak", false);
	}

	if (
		localStorage.getItem("autoCloak") == "true" &&
		window.top === window.self
	) {
		const ab = window.open("about:blank", "_blank");
		if (ab) {
			ab.document.write(`
<!DOCTYPE html>
<html lang="en" style="margin: 0; padding: 0; height: 100vh">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body style="margin: 0; padding: 0; height: 100vh; overflow: hidden">
		<iframe width="100%" height="100%" style="margin: 0" src="${window.location.origin}"></iframe>
	</body>
</html>`);
			window.location.href = "https://classroom.google.com";
		}
	}

	const allThemes = document.querySelectorAll(".theme-option");
	if (localStorage.getItem("activeTheme").includes("glsl")) {
		const canvas = document.querySelector(".glslCanvas");
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		canvas.classList.add("enabled");
		startGLSL(canvas.getContext("webgl"), canvas);
	}
	document.body.classList.add(
		localStorage.getItem("activeTheme") || "theme-classic"
	);
	allThemes.forEach((option) => {
		option.addEventListener("click", () => {
			document.body.classList.remove("theme");
			const theme = option.getAttribute("data-theme-class");
			const canvas = document.querySelector(".glslCanvas");

			if (theme.includes("glsl")) {
				let shaderToUse;
				localStorage.setItem("activeTheme", "theme-glsl");
				document.body.classList.add("theme-glsl");

				if (theme === "theme-glsl-orb") {
					shaderToUse = shaderList.orb;
				} else if (theme === "theme-glsl-vortex") {
					shaderToUse = shaderList.vortex;
				} else if (theme === "theme-glsl-gc") {
					shaderToUse = shaderList.gc;
				} else if (theme === "theme-glsl-polygons") {
					shaderToUse = shaderList.polygons;
				} else {
					shaderToUse = localStorage.getItem("fragmentShader");
				}

				if (shaderToUse) {
					localStorage.setItem("fragmentShader", shaderToUse);
					const gl = canvas.getContext("webgl");
					canvas.width = window.innerWidth;
					canvas.height = window.innerHeight;
					canvas.classList.add("enabled");
					gl.viewport(0, 0, canvas.width, canvas.height);
					startGLSL(gl, canvas);
				}
			} else {
				canvas.classList.remove("enabled");
				localStorage.setItem("activeTheme", theme);
				document.body.classList.add(theme);
			}
		});
	});

	if (document.getElementById("autoCloak")) {
		document
			.getElementById("autoCloak")
			.classList.toggle("active", localStorage.getItem("autoCloak") === "true");
		document.getElementById("autoCloak").addEventListener("click", () => {
			document.getElementById("autoCloak").classList.toggle("active");
			localStorage.setItem(
				"autoCloak",
				document.getElementById("autoCloak").classList.contains("active")
			);
		});
	}

	if (document.getElementById("focusCloaking")) {
		document
			.getElementById("focusCloaking")
			.classList.toggle(
				"active",
				localStorage.getItem("focusCloaking") === "true"
			);
		document.getElementById("focusCloaking").addEventListener("click", () => {
			document.getElementById("focusCloaking").classList.toggle("active");
			localStorage.setItem(
				"focusCloaking",
				document.getElementById("focusCloaking").classList.contains("active")
			);
		});
	}

	if (abCloak2 != null) {
		abCloak2.addEventListener("click", (e) => {
			const privateWindow = window.open(
				"",
				"privateWindow",
				"scrollbars=1,height=" +
					screen.availHeight +
					",width=" +
					screen.availWidth
			);
			if (privateWindow) {
				privateWindow.document.write(`
<!DOCTYPE html>
<html lang="en" style="margin: 0; padding: 0; height: 100vh">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Untitled</title>
	</head>
	<body style="margin: 0; padding: 0; height: 100vh; overflow: hidden">
		<iframe width="100%" height="100%" style="margin: 0" src="${window.location.origin}"></iframe>
	</body>
</html>`);
				window.location.href = "https://classroom.google.com";
			}
		});
	}

	if (abCloak != null) {
		abCloak.addEventListener("click", (e) => {
			const ab = window.open("about:blank", "_blank");
			if (ab) {
				ab.document.write(`
<!DOCTYPE html>
<html lang="en" style="margin: 0; padding: 0; height: 100vh">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body style="margin: 0; padding: 0; height: 100vh; overflow: hidden">
		<iframe width="100%" height="100%" style="margin: 0" src="${window.location.origin}"></iframe>
	</body>
</html>`);
				window.location.href = "https://classroom.google.com";
			}
		});
	}

	if (panicButton != null) {
		panicButton.textContent = `Panic Key: ${localStorage.getItem("panicKey")}`;
		panicButton.addEventListener("click", (e) => {
			listening = !listening;
			if (listening) {
				panicButton.textContent = "Listening...";
			} else {
				panicButton.textContent = `Panic Key: ${localStorage.getItem(
					"panicKey"
				)}`;
			}
		});
	}

	if (panicURL != null) {
		panicURL.value = localStorage.getItem("panicURL");
		panicURL.addEventListener("change", (e) => {
			let url = e.target.value.trim();
			if (!e.target.value.includes("https") || !e.target.value.includes("http"))
				url = "https://" + url;
			localStorage.setItem("panicURL", url);
		});
	}

	if (clear != null) {
		clear.addEventListener("click", () => {
			const res = confirm("Are you sure you want to wipe your data?");
			if (res) {
				localStorage.clear();
				if ("indexedDB" in window) {
					indexedDB.databases().then((dbs) => {
						dbs.forEach((db) => {
							indexedDB.deleteDatabase(db.name);
						});
					});
				}
				alert("Data wiped, refresh to see changes.");
			}
		});
	}

	if (exportBtn != null) {
		exportBtn.addEventListener("click", async () => {
			let saveData = { lStorage: [], iDB: [] };
			for (const item in localStorage) {
				if (localStorage.getItem(item)) {
					saveData.lStorage.push({
						name: item,
						value: localStorage.getItem(item),
					});
				}
			}
			const dbNames = await indexedDB.databases();
			for (const { name } of dbNames) {
				const dbDump = await new Promise((resolve, reject) => {
					const openReq = indexedDB.open(name);
					const dbData = { name, stores: [] };
					openReq.onsuccess = () => {
						const db = openReq.result;
						if (Array.from(db.objectStoreNames).length === 0) {
							resolve(dbData);
							db.close();
							return;
						}
						const tx = db.transaction(db.objectStoreNames, "readonly");
						let pending = db.objectStoreNames.length;
						if (!pending) resolve(dbData);
						for (const storeName of db.objectStoreNames) {
							const store = tx.objectStore(storeName);
							const getAllReq = store.getAll();
							getAllReq.onsuccess = () => {
								dbData.stores.push({ name: storeName, data: getAllReq.result });
								if (--pending === 0) resolve(dbData);
							};
							getAllReq.onerror = () => reject(getAllReq.error);
						}
					};
					openReq.onerror = () => reject(openReq.error);
				});
				saveData.iDB.push(dbDump);
			}
			console.log(saveData);
			const blob = new Blob([JSON.stringify(saveData, null, 2)], {
				type: "application/json",
			});
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = `export-data-${
				new Date().getMonth() + 1
			}-${new Date().getDate()}-${new Date().getFullYear()}`;
			a.click();
			URL.revokeObjectURL(url);
		});
	}

	if (importBtn != null) {
		importBtn.addEventListener("click", async () => {
			try {
				const [fileHandle] = await window.showOpenFilePicker({
					types: [
						{
							description: "JSON files",
							accept: { "application/json": [".json"] },
						},
					],
				});
				const file = await fileHandle.getFile();
				const text = await file.text();
				const saveData = JSON.parse(text);
				if (saveData.lStorage) {
					for (const item of saveData.lStorage) {
						localStorage.setItem(item.name, item.value);
					}
				}
				if (saveData.iDB) {
					for (const dbDump of saveData.iDB) {
						const openReq = indexedDB.open(dbDump.name);
						openReq.onupgradeneeded = () => {
							const db = openReq.result;
							for (const store of dbDump.stores) {
								if (!db.objectStoreNames.contains(store.name)) {
									db.createObjectStore(store.name, { autoIncrement: true });
								}
							}
						};
						openReq.onsuccess = () => {
							const db = openReq.result;
							const storeNames = dbDump.stores.map((s) => s.name);
							if (storeNames.length === 0) {
								db.close();
								return;
							}
							const tx = db.transaction(
								dbDump.stores.map((s) => s.name),
								"readwrite"
							);
							for (const store of dbDump.stores) {
								const objectStore = tx.objectStore(store.name);
								for (const record of store.data) {
									try {
										objectStore.add(record);
									} catch {}
								}
							}
							tx.oncomplete = () => db.close();
						};
					}
				}
				alert("Import successful! Refresh to see the changes.");
			} catch (err) {
				console.log(err);
				alert("Import failed! Try again later.");
			}
		});
	}
});

let faviconLink = document.querySelector('link[rel*="icon"]');
if (!faviconLink) {
	faviconLink = document.createElement("link");
	faviconLink.rel = "icon";
	document.head.appendChild(faviconLink);
}

document.addEventListener("visibilitychange", (e) => {
	if (document.hidden && localStorage.getItem("focusCloaking") == "true") {
		document.title = "Home";
		faviconLink.href = "/assets/img/gclass.png";
	} else {
		document.title = "Quasar";
		faviconLink.href = "/assets/img/favicon.png";
	}
});
const shaderModal = document.getElementById("shaderModal");
const uploadShaderBtn = document.getElementById("uploadShader");
const closeModal = document.getElementById("closeModal");
const dropZone = document.getElementById("dropZone");
const fileInput = document.getElementById("fileInput");
const shaderCodeArea = document.getElementById("shaderCode");
const applyShaderBtn = document.getElementById("applyShader");
const resetShaderBtn = document.getElementById("resetShader");

let customShaderCode = "";

if (uploadShaderBtn) {
	uploadShaderBtn.addEventListener("click", () => {
		shaderModal.classList.add("show");
		if (localStorage.getItem("fragmentShader")) {
			shaderCodeArea.value = localStorage.getItem("fragmentShader");
		}
	});
}

if (closeModal) {
	closeModal.addEventListener("click", () => {
		shaderModal.classList.remove("show");
	});
}

shaderModal.addEventListener("click", (e) => {
	if (e.target === shaderModal) {
		shaderModal.classList.remove("show");
	}
});

dropZone.addEventListener("click", () => {
	fileInput.click();
});

dropZone.addEventListener("dragover", (e) => {
	e.preventDefault();
	dropZone.classList.add("drag-over");
});

dropZone.addEventListener("dragleave", () => {
	dropZone.classList.remove("drag-over");
});

dropZone.addEventListener("drop", (e) => {
	e.preventDefault();
	dropZone.classList.remove("drag-over");
	const files = e.dataTransfer.files;
	if (files.length > 0) {
		handleFile(files[0]);
	}
});

fileInput.addEventListener("change", (e) => {
	if (e.target.files.length > 0) {
		handleFile(e.target.files[0]);
	}
});

function handleFile(file) {
	const reader = new FileReader();
	reader.onload = (e) => {
		customShaderCode = e.target.result;
		shaderCodeArea.value = customShaderCode;
	};
	reader.readAsText(file);
}

applyShaderBtn.addEventListener("click", () => {
	const shaderCode = shaderCodeArea.value.trim();
	if (shaderCode) {
		localStorage.setItem("fragmentShader", shaderCode);
		shaderModal.classList.remove("show");
		location.reload();
	}
});

resetShaderBtn.addEventListener("click", () => {
	if (confirm("Reset to default shader?")) {
		localStorage.removeItem("fragmentShader");
		shaderCodeArea.value = "";
		location.reload();
	}
});
