document.body.addEventListener("click", () => {
    if (Math.random() < 0.0001) {
        const screen = document.createElement("div");
        screen.className = "surprise";

        const pic = document.createElement("img");
        pic.src = "assets/getscared.gif";
        pic.className = "surprisemf";

        const sound = new Audio("assets/imaginegettingjumpscared.mp3");
        sound.volume = 1.0;
        sound.play();

        screen.appendChild(pic);
        document.body.appendChild(screen);

        setTimeout(() => {
            document.body.removeChild(screen);
            sound.pause();
            sound.currentTime = 0;
        }, 2000 + Math.random() * 500);
    }
}, { once: true });