document.addEventListener("DOMContentLoaded", async () => {
	const response = await fetch("/assets/json/storage.json");
	const data = await response.json();

	data.sort((a, b) => a.name.localeCompare(b.name));

	for (const game of data) {
		const card = document.createElement("div");
		card.id = game.id;
		card.classList.add("card");
		const img = document.createElement("img");
		img.src = `/assets/img${game.img}`;
		card.appendChild(img);
		const p = document.createElement("p");
		p.textContent = game.name;
		card.appendChild(p);
		document.querySelector(".container").appendChild(card);
		card.addEventListener("click", () => {
			location.href = `/assets/storage${game.path}`;
		});
	}
});
