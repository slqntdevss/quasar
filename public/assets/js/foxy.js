import getscaredUrl from "../img/getscared.gif";
import thinkingUrl from "../audio/thinking.ogg";

document.addEventListener("click", () => {
	if (Math.random() < 0.0001) {
		const screen = document.createElement("div");
		screen.className = "surprise";

		const pic = document.createElement("img");
		pic.src = getscaredUrl;
		pic.className = "surprisemf";

		const sound = new Audio(thinkingUrl);
		sound.volume = 1.0;
		sound.play();

		screen.appendChild(pic);
		document.body.appendChild(screen);

		setTimeout(
			() => {
				document.body.removeChild(screen);
				sound.pause();
				sound.currentTime = 0;
			},
			2000 + Math.random() * 500,
		);
	}
});
