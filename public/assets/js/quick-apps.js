(async function () {
	const grid = document.getElementById("quick-apps-grid");
	if (!grid) return;
	try {
		const resp = await fetch("/assets/json/apps.json");
		if (!resp.ok) {
			grid.innerHTML =
				'<div style="color: var(--main-text, white); text-align:center;">No apps found.</div>';
			return;
		}
		const apps = await resp.json();
		grid.innerHTML = `<div class="apps-grid-container">
		${apps
			.slice(0, 6)
			.map(
				(app) => `
			<div class="apps-grid-tile" tabindex="0" data-url="${app.url}">
				<img src="/assets/img${app.img}" alt="${app.name}" />
				<span class="apps-grid-label">${app.name}</span>
			</div>
		`,
			)
			.join("")}
		</div>`;
	} catch (e) {
		grid.innerHTML =
			'<div style="color: var(--main-text, white); text-align:center;">Error loading apps.</div>';
	}
})();
