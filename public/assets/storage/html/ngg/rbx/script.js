const stockSW = "/sw.js";
const connection = new BareMux.BareMuxConnection("/mux/worker.js");
const { ScramjetController } = $scramjetLoadController();
const frame = document.getElementById("frame");

async function registerSW() {
	if (!navigator.serviceWorker)
		throw new Error("Service workers not supported.");
	await navigator.serviceWorker.register(stockSW);
}

const scramjet = new ScramjetController({
	files: {
		wasm: "/marcs/scramjet.wasm.wasm",
		all: "/marcs/scramjet.all.js",
		sync: "/marcs/scramjet.sync.js",
	},
});
scramjet.init();

(async () => {
	try {
		await registerSW();
		const wispUrl =
			(location.protocol === "https:" ? "wss" : "ws") +
			"://" +
			location.host +
			"/wisp/";

		if ((await connection.getTransport()) !== "/ep/index.mjs") {
			await connection.setTransport("/ep/index.mjs", [{ wisp: wispUrl }]);
		}

		const sjEncode = scramjet.encodeUrl.bind(scramjet);

		const ipInfo = await fetch("https://api.ipify.org?format=json");
		if (!ipInfo.ok) {
			alert("failed to load, try refreshing.");
		}

		const res = await ipInfo.json();

		const prefix = res.ip.split(".")[0];

		console.log(prefix);

		const nowggFunUrl = `https://${prefix}.ip.nowgg.ing/apps/a/19900/b.html`;

		console.log(nowggFunUrl);

		frame.src = sjEncode(nowggFunUrl);
		document.querySelector("h1").remove();
		frame.style.display = "block";
	} catch (err) {
		console.error("Error loading frame:", err);
	}
})();
