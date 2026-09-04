const audio = document.getElementById("audio");
const btn = document.getElementById("musicBtn");
const icon = document.getElementById("musicIcon");
const text = document.getElementById("musicText");

audio.volume = 1.0;

btn.addEventListener("click", async () => {
  if (audio.paused) {
    text.textContent = "Đang tải...";
    try {
      await audio.play();
      icon.textContent = "⏸️";
      text.textContent = "Đang phát";
    } catch (error) {
      console.error("Music error:", error);
      icon.textContent = "⚠️";
      text.textContent = "Không phát được nhạc";
    }
  } else {
    audio.pause();
    icon.textContent = "🎵";
    text.textContent = "Phát nhạc";
  }
});

audio.addEventListener("play", () => {
  icon.textContent = "⏸️";
  text.textContent = "Đang phát";
});

audio.addEventListener("pause", () => {
  if (!audio.ended) {
    icon.textContent = "🎵";
    text.textContent = "Phát nhạc";
  }
});

audio.addEventListener("error", () => {
  icon.textContent = "⚠️";
  text.textContent = "Kiểm tra assets/tusu.mp3";
});

audio.addEventListener("ended", () => {
  icon.textContent = "🎵";
  text.textContent = "Phát nhạc";
});