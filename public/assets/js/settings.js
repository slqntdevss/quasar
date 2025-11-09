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
	const allThemes = document.querySelectorAll(".theme-option");
	document.body.classList.add(
		localStorage.getItem("activeTheme") || "theme-classic"
	);
	allThemes.forEach((option) => {
		option.addEventListener("click", () => {
			document.body.classList.remove(localStorage.getItem("activeTheme"));
			const theme = option.getAttribute("data-theme-class");
			localStorage.setItem("activeTheme", theme);
			document.body.classList.add(theme);
		});
	});
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
		<iframe
			width="100%"
			height="100%"
			style="margin: 0"
			src="${window.location.origin}"
		></iframe>
	</body>
</html>

					`);
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
		<iframe
			width="100%"
			height="100%"
			style="margin: 0"
			src="${window.location.origin}"
		></iframe>
	</body>
</html>

					`);
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
