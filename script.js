const beginButton = document.getElementById("beginButton");
const letter = document.getElementById("letter");
const soundToggle = document.getElementById("soundToggle");
const backgroundMusic = document.getElementById("backgroundMusic");

beginButton.addEventListener("click", () => {
  letter.scrollIntoView({ behavior: "smooth" });
});

soundToggle.addEventListener("click", async () => {
  if (backgroundMusic.paused) {
    try {
      await backgroundMusic.play();
      soundToggle.innerHTML = "♪ <span>Pause</span>";
    } catch (error) {
      alert("music.mp3");
    }
  } else {
    backgroundMusic.pause();
    soundToggle.innerHTML = "♪ <span>Play</span>";
  }
});
