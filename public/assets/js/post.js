document.title = "Quasar";
const title = document.querySelectorAll("#title");
const address = document.getElementById("address");
title.forEach((t) => (t.textContent = "Quasar"));
address.placeholder = "browse the internet";

setTimeout(() => {
	loadAds({
		banner: "94d3e6b189169213c968a0f35cf2c24b",
		native: "976e351ff44eac06013f3d88e10200d0",
	});
}, 2000);
