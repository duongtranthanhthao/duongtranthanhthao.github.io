const audio = document.getElementById("audio");
const btn = document.getElementById("musicBtn");
const icon = document.getElementById("musicIcon");
const text = document.getElementById("musicText");

btn.addEventListener("click", async () => {
  if (audio.paused) {
    try {
      await audio.play();
      icon.textContent = "⏸️";
      text.textContent = "Đang phát";
    } catch {
      text.textContent = "Thêm assets/tusu.mp3";
    }
  } else {
    audio.pause();
    icon.textContent = "🎵";
    text.textContent = "Phát nhạc";
  }
});

audio.addEventListener("ended", () => {
  icon.textContent = "🎵";
  text.textContent = "Phát nhạc";
});
