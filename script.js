const audio = document.getElementById("audio");
const btn = document.getElementById("musicBtn");
const icon = document.getElementById("musicIcon");
const text = document.getElementById("musicText");

btn.addEventListener("click", async () => {
    if (audio.paused) {
        text.textContent = "Đang phát...";

        try {
            await audio.play();
        } catch (err) {
            console.error("Lỗi phát nhạc:", err);
            icon.textContent = "⚠️";
            text.textContent = "Không phát được nhạc";
        }
    } else {
        audio.pause();
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
    console.error("Audio error:", audio.error);
    icon.textContent = "⚠️";
    text.textContent = "Lỗi file nhạc";
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
