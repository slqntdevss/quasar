const cursor = document.querySelector(".cursor");
const customCursor = document.getElementById("customMouse");

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

let cursorEnabled = localStorage.getItem("customCursor") !== "false";
let cursorSpeed = parseFloat(localStorage.getItem("cursorSpeed")) || 0.08;
let animating = false;

if (!localStorage.getItem("customCursor")) {
	localStorage.setItem("customCursor", "false");
	cursorEnabled = false;
}

function applyCursorState() {
	if (cursorEnabled) {
		cursor.style.opacity = 1;
		document.documentElement.style.cursor = "none";
		document.body.style.cursor = "none";
		if (!animating) {
			animating = true;
			requestAnimationFrame(animate);
		}
	} else {
		cursor.style.opacity = 0;
		document.documentElement.style.cursor = "auto";
		document.body.style.cursor = "auto";
		animating = false;
	}
}

if (customCursor) {
	customCursor.classList.toggle("active", cursorEnabled);
	customCursor.addEventListener("click", () => {
		customCursor.classList.toggle("active");
		cursorEnabled = customCursor.classList.contains("active");
		localStorage.setItem("customCursor", cursorEnabled);
		applyCursorState();
	});
}

applyCursorState();

if (localStorage.getItem("cursorSpeed") == null) {
	localStorage.setItem("cursorSpeed", 1);
	cursorSpeed = 1;
}

window.addEventListener("storage", (e) => {
	if (e.key === "cursorSpeed") {
		cursorSpeed = parseFloat(e.newValue) || 0.08;
	} else if (e.key === "customCursor") {
		cursorEnabled = e.newValue !== "false";
		applyCursorState();
	}
});

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
	if (!cursorEnabled) {
		animating = false;
		return;
	}

	cursorX += (mouseX - cursorX) * cursorSpeed;
	cursorY += (mouseY - cursorY) * cursorSpeed;

	if (cursor) {
		cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
	}

	requestAnimationFrame(animate);
}
