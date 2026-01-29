const connection = new BareMux.BareMuxConnection("/mux/worker.js");
const stockSW = "/sw.js";
async function registerSW() {
	if (!navigator.serviceWorker)
		throw new Error("Service workers not supported.");
	await navigator.serviceWorker.register(stockSW);
}
document.addEventListener("DOMContentLoaded", async () => {
	try {
		await registerSW();
	} catch (err) {
		throw err;
	}

	let frame = document.getElementById("frame");
	frame.style.display = "block";
	let wispUrl =
		(location.protocol === "https:" ? "wss" : "ws") +
		"://" +
		location.host +
		"/wisp/";
	if ((await connection.getTransport()) !== "/ep/index.mjs") {
		await connection.setTransport("/ep/index.mjs", [{ wisp: wispUrl }]);
	}
	frame.src =
		__uv$config.prefix +
		__uv$config.encodeUrl(
			"https://astra.pxi-fusion.com/embed/quasar/clash-royale",
		);
	document.querySelector("h1").remove();
});
