const cursorSpeedSlider = document.getElementById("cursorSpeed");
const currentSpeed = document.getElementById("currentSpeed");

cursorSpeedSlider.addEventListener("input", (e) => {
	console.log(e.target.value);
	currentSpeed.textContent = e.target.value;
	localStorage.setItem("cursorSpeed", e.target.value);
});
