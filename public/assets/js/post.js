document.title = "Quasar";
const title = document.querySelectorAll("#title");
const address = document.getElementById("address");
title.forEach((t) => (t.textContent = "Quasar"));
address.placeholder = "browse the internet";
async function registerSW() {
	if (!navigator.serviceWorker) {
		if (
			location.protocol !== "https:" &&
			!swAllowedHostnames.includes(location.hostname)
		)
			throw new Error("Service workers cannot be registered without https.");

		throw new Error("Your browser doesn't support service workers.");
	}

	await navigator.serviceWorker.register("/sw.js");
}
