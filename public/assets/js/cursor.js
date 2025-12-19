const cursor = document.querySelector(".cursor");
const customCursor = document.getElementById("customMouse");

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

if (!localStorage.getItem("customCursor")) {
	localStorage.setItem("customCursor", "false");
}
if (customCursor) {
	customCursor.classList.toggle(
		"active",
		localStorage.getItem("customCursor") === "true"
	);
	customCursor.addEventListener("click", () => {
		customCursor.classList.toggle("active");
		localStorage.setItem(
			"customCursor",
			customCursor.classList.contains("active")
		);
		if (localStorage.getItem("customCursor") === "false") {
			cursor.style.opacity = 0;
			document.documentElement.style.cursor = "auto";
			document.body.style.cursor = "auto";
		} else {
			cursor.style.opacity = 1;
			document.documentElement.style.cursor = "none";
			document.body.style.cursor = "none";
		}
	});
}

if (localStorage.getItem("customCursor") === "false") {
	cursor.style.opacity = 0;
	document.documentElement.style.cursor = "auto";
	document.body.style.cursor = "auto";
} else {
	cursor.style.opacity = 1;
	document.documentElement.style.cursor = "none";
	document.body.style.cursor = "none";
}

if (localStorage.getItem("cursorSpeed") == null) {
	localStorage.setItem("cursorSpeed", 1);
}

let lastScrollX = window.scrollX;
let lastScrollY = window.scrollY;

window.addEventListener("mousemove", (e) => {
	mouseX = e.clientX + window.scrollX - 24;
	mouseY = e.clientY + window.scrollY - 24;
});

window.addEventListener("scroll", () => {
	const dx = window.scrollX - lastScrollX;
	const dy = window.scrollY - lastScrollY;

	mouseX += dx;
	mouseY += dy;

	lastScrollX = window.scrollX;
	lastScrollY = window.scrollY;
});

function animate() {
	if (localStorage.getItem("customCursor") === "false") return;
	cursorX += (mouseX - cursorX) * localStorage.getItem("cursorSpeed") || 0.08;
	cursorY += (mouseY - cursorY) * localStorage.getItem("cursorSpeed") || 0.08;

	if (cursor) {
		cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
	}

	requestAnimationFrame(animate);
}

animate();
