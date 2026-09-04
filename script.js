const audio = document.getElementById("audio");
const btn = document.getElementById("musicBtn");
const icon = document.getElementById("musicIcon");
const text = document.getElementById("musicText");

// Use a path relative to the actual GitHub Pages page.
audio.src = new URL("./assets/tusu.mp3", document.baseURI).href;
audio.load();

btn.addEventListener("click", async () => {
  if (!audio.paused) {
    audio.pause();
    return;
  }

  text.textContent = "Đang tải...";

  try {
    await audio.play();
  } catch (err) {
    console.error(err);
    icon.textContent = "⚠️";
    text.textContent = "Không đọc được file nhạc";
  }
});

audio.addEventListener("playing", () => {
  icon.textContent = "⏸️";
  text.textContent = "Đang phát";
});

audio.addEventListener("pause", () => {
  icon.textContent = "🎵";
  text.textContent = "Phát nhạc";
});

audio.addEventListener("error", () => {
  icon.textContent = "⚠️";
  text.textContent = "Không tìm thấy tusu.mp3";
});

audio.addEventListener("ended", () => {
  icon.textContent = "🎵";
  text.textContent = "Phát nhạc";
});