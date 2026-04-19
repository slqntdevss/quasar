const GAME_MODE = import.meta.env.VITE_GAME_MODE || "selfhosted";

const gameFrame = document.querySelector(".gameframe");
const container = document.querySelector(".container");
const searchBar = document.querySelector(".search-bar");
const categoriesSwitcher = document.getElementById("categories");
const sortMethodSwitcher = document.getElementById("sortMethod");
const paginationContainer = document.getElementById("pagination");

let activeGames = [];
let allGames = [];
let originalList = null;
let activeCategory = "all";
let sortMethod = "alphabetically";
let search = "";
let currentPage = 1;
let totalPages = 1;
let totalGames = 0;
const GAMES_PER_PAGE = 100;

let luminReady = false;

async function initLuminSDK() {
	if (GAME_MODE !== "static") return;

	try {
		await Lumin.init({
			headless: true,
			onReady: () => {
				console.log("LuminSDK connected");
				luminReady = true;
			},
			onError: (err) => {
				console.error("LuminSDK error:", err);
			},
		});
	} catch (err) {
		console.error("Failed to initialize LuminSDK:", err);
	}
}

function loadIframeSelfhosted(path) {
	gameFrame.style.display = "block";
	const actualFrame = document.getElementById("actualGameFrame");
	actualFrame.src = `/assets/storage${path}`;

	actualFrame.addEventListener("load", () => {
		actualFrame.contentWindow.document.addEventListener("keydown", (e) => {
			if (e.key === localStorage.getItem("panicKey")) {
				window.open(localStorage.getItem("panicURL"));
			}
		});
	});
	console.log("loading:" + path);
}

async function loadGameLumin(gameId) {
	try {
		await Lumin.loadGame(gameId);
	} catch (err) {
		console.error("Failed to load game:", err);
	}
}

async function waitForLumin() {
	if (!luminReady) {
		await new Promise((resolve) => {
			const checkReady = setInterval(() => {
				if (luminReady) {
					clearInterval(checkReady);
					resolve();
				}
			}, 100);
		});
	}
}

async function fetchLuminGamesPage(page) {
	await waitForLumin();

	try {
		const result = await Lumin.getGames({
			page: page,
			limit: GAMES_PER_PAGE,
			q: search || undefined,
		});

		totalPages = result.pages;
		totalGames = result.total;

		const games = await Promise.all(
			result.games.map(async (game) => {
				const imgUrl = await Lumin.getImageUrl(game.image_token);
				return {
					id: game.id,
					name: game.name,
					img: imgUrl,
					category: game.category ? [game.category] : ["Arcade"],
					path: null,
					isLumin: true,
				};
			})
		);

		return games;
	} catch (err) {
		console.error("Failed to fetch Lumin games:", err);
		return [];
	}
}

async function fetchSelfhostedGames() {
	if (originalList != null) {
		return [...originalList];
	}

	const response = await fetch("/assets/json/storage.json");
	originalList = await response.json();
	return [...originalList];
}

function getTotalPages() {
	if (GAME_MODE === "static") {
		return totalPages;
	}
	return Math.ceil(activeGames.length / GAMES_PER_PAGE);
}

function getPagedGames() {
	const start = (currentPage - 1) * GAMES_PER_PAGE;
	const end = start + GAMES_PER_PAGE;
	return activeGames.slice(start, end);
}

function renderPagination() {
	if (!paginationContainer) return;
	
	const pages = getTotalPages();
	paginationContainer.innerHTML = "";
	
	if (pages <= 1) return;

	const prevBtn = document.createElement("button");
	prevBtn.className = "pagination-btn";
	prevBtn.textContent = "Prev";
	prevBtn.disabled = currentPage === 1;
	prevBtn.addEventListener("click", () => {
		if (currentPage > 1) {
			currentPage--;
			renderGames();
			container.scrollIntoView({ behavior: "smooth" });
		}
	});
	paginationContainer.appendChild(prevBtn);

	const maxVisiblePages = 5;
	let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
	let endPage = Math.min(pages, startPage + maxVisiblePages - 1);
	
	if (endPage - startPage + 1 < maxVisiblePages) {
		startPage = Math.max(1, endPage - maxVisiblePages + 1);
	}

	if (startPage > 1) {
		const firstBtn = document.createElement("button");
		firstBtn.className = "pagination-btn";
		firstBtn.textContent = "1";
		firstBtn.addEventListener("click", () => {
			currentPage = 1;
			renderGames();
			container.scrollIntoView({ behavior: "smooth" });
		});
		paginationContainer.appendChild(firstBtn);
		
		if (startPage > 2) {
			const ellipsis = document.createElement("span");
			ellipsis.className = "pagination-ellipsis";
			ellipsis.textContent = "...";
			paginationContainer.appendChild(ellipsis);
		}
	}

	for (let i = startPage; i <= endPage; i++) {
		const pageBtn = document.createElement("button");
		pageBtn.className = "pagination-btn" + (i === currentPage ? " active" : "");
		pageBtn.textContent = i;
		pageBtn.addEventListener("click", () => {
			currentPage = i;
			renderGames();
			container.scrollIntoView({ behavior: "smooth" });
		});
		paginationContainer.appendChild(pageBtn);
	}

	if (endPage < pages) {
		if (endPage < pages - 1) {
			const ellipsis = document.createElement("span");
			ellipsis.className = "pagination-ellipsis";
			ellipsis.textContent = "...";
			paginationContainer.appendChild(ellipsis);
		}
		
		const lastBtn = document.createElement("button");
		lastBtn.className = "pagination-btn";
		lastBtn.textContent = pages;
		lastBtn.addEventListener("click", () => {
			currentPage = pages;
			renderGames();
			container.scrollIntoView({ behavior: "smooth" });
		});
		paginationContainer.appendChild(lastBtn);
	}

	const nextBtn = document.createElement("button");
	nextBtn.className = "pagination-btn";
	nextBtn.textContent = "Next";
	nextBtn.disabled = currentPage === pages;
	nextBtn.addEventListener("click", () => {
		if (currentPage < pages) {
			currentPage++;
			renderGames();
			container.scrollIntoView({ behavior: "smooth" });
		}
	});
	paginationContainer.appendChild(nextBtn);
}

function renderGameCards(games) {
	container.innerHTML = "";
	const fragment = document.createDocumentFragment();

	for (const game of games) {
		const card = document.createElement("div");
		card.id = game.id;
		card.classList.add("card");

		if (game.isLumin) {
			card.setAttribute("data-lumin-id", game.id);
		} else {
			card.setAttribute("data-path", game.path);
		}

		const img = document.createElement("img");
		img.src = game.isLumin ? game.img : `/assets/img${game.img}`;
		img.alt = game.name;
		img.loading = "lazy";
		card.appendChild(img);

		const p = document.createElement("p");
		p.textContent = game.name;
		card.appendChild(p);

		fragment.appendChild(card);
	}

	container.appendChild(fragment);
}

async function renderGames() {
	if (GAME_MODE === "static") {
		const games = await fetchLuminGamesPage(currentPage);
		renderGameCards(games);
		renderPagination();
		searchBar.placeholder = `Search all of our ${totalGames} games!`;
	} else {
		let data = await fetchSelfhostedGames();

		switch (sortMethod) {
			case "alphabetically":
				data.sort((a, b) => a.name.localeCompare(b.name));
				break;
			case "dateadded":
				data = data.slice().reverse();
				break;
			default:
				data = data.slice().reverse();
				break;
		}

		allGames = data;

		activeGames = allGames.filter((game) => {
			const categories = Array.isArray(game.category)
				? game.category
				: [game.category];
			const categoryMatch =
				categories.map((c) => c.toLowerCase()).includes(activeCategory.toLowerCase()) ||
				activeCategory === "all";

			const searchMatch =
				search === "" ||
				game.name.toLowerCase().trim().includes(search.toLowerCase()) ||
				game.id.toLowerCase().trim().includes(search.toLowerCase());

			return categoryMatch && searchMatch;
		});

		const pagedGames = getPagedGames();
		renderGameCards(pagedGames);
		renderPagination();
		searchBar.placeholder = `Search all of our ${activeGames.length} games!`;
	}
}

container.addEventListener("click", (e) => {
	const card = e.target.closest(".card");
	if (!card) return;

	if (GAME_MODE === "static") {
		const luminId = card.getAttribute("data-lumin-id");
		if (luminId) {
			loadGameLumin(luminId);
		}
	} else {
		const path = card.dataset.path;
		if (path) {
			loadIframeSelfhosted(path);
		}
	}
});

document.addEventListener("DOMContentLoaded", async () => {
	if (GAME_MODE === "static") {
		await initLuminSDK();
	}

	await renderGames();
});

let searchDebounce;
searchBar.addEventListener("input", (e) => {
	clearTimeout(searchDebounce);
	searchDebounce = setTimeout(() => {
		search = e.target.value.trim();
		currentPage = 1;
		renderGames();
	}, 300);
});

categoriesSwitcher?.addEventListener("change", async (e) => {
	activeCategory = e.target.value.toLowerCase();
	currentPage = 1;
	await renderGames();
});

sortMethodSwitcher?.addEventListener("change", async (e) => {
	sortMethod = e.target.value.toLowerCase();
	currentPage = 1;
	await renderGames();
});

const closeFrameBtn = document.getElementById("closeFrame");
const fullscreenBtn = document.getElementById("fullscreen");
const reloadBtn = document.getElementById("reload");

if (closeFrameBtn) {
	closeFrameBtn.addEventListener("click", () => {
		gameFrame.style.display = "none";
		document.getElementById("actualGameFrame").src = "about:blank";
	});
}

if (fullscreenBtn) {
	fullscreenBtn.addEventListener("click", () => {
		document.getElementById("actualGameFrame").requestFullscreen();
	});
}

if (reloadBtn) {
	reloadBtn.addEventListener("click", () => {
		document.getElementById("actualGameFrame").contentWindow.location.reload();
	});
}

export { GAME_MODE, renderGames, activeGames };
