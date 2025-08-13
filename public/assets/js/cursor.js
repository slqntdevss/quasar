const cursor = document.querySelector(".cursor");

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

if (localStorage.getItem("cursorSpeed") == null) {
	localStorage.setItem("cursorSpeed", 0.1);
}

window.addEventListener("mousemove", (e) => {
	mouseX = e.clientX - 22;
	mouseY = e.clientY - 22;
});

function animate() {
	cursorX += (mouseX - cursorX) * localStorage.getItem("cursorSpeed") || 0.1;
	cursorY += (mouseY - cursorY) * localStorage.getItem("cursorSpeed") || 0.1;

	if (cursor) {
		cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
	}

	requestAnimationFrame(animate);
}
document.querySelectorAll(".card").forEach((card) => {
	card.addEventListener("mouseenter", () => {
		console.log("enter");
		cursor.style.opacity = "0";
	});
	card.addEventListener("mouseleave", () => (cursor.style.opacity = "1"));
});

animate();
