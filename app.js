const btn = document.getElementById("btn");
const result = document.getElementById("result");

const genreText = document.getElementById("genre");
const descText = document.getElementById("desc");
const songsList = document.getElementById("songs");

const resetBtn = document.getElementById("reset");

btn.addEventListener("click", () => {
  const q1 = document.getElementById("q1").value;
  const q2 = document.getElementById("q2").value;
  const q3 = document.getElementById("q3").value;

  if (!q1 || !q2 || !q3) {
    alert("Answer all questions!");
    return;
  }

  // 🎯 scoring system
  let scores = {
    indie: 0,
    hiphop: 0,
    pop: 0,
    rnb: 0,
    rock: 0,
    lofi: 0
  };

  // vibe
  if (q1 === "night") { scores.indie += 2; scores.rnb += 2; }
  if (q1 === "gym") { scores.hiphop += 3; scores.rock += 1; }
  if (q1 === "study") { scores.lofi += 3; }
  if (q1 === "party") { scores.pop += 3; }

  // energy
  if (q2 === "low") { scores.lofi += 2; scores.indie += 1; }
  if (q2 === "mid") { scores.pop += 2; scores.rnb += 1; }
  if (q2 === "high") { scores.hiphop += 2; scores.rock += 2; }

  // sound
  if (q3 === "soft") { scores.rnb += 2; scores.indie += 2; }
  if (q3 === "beats") { scores.hiphop += 3; }
  if (q3 === "upbeat") { scores.pop += 3; }
  if (q3 === "raw") { scores.rock += 3; }

  // find highest
  let topGenre = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  showResult(topGenre);
});

function showResult(type) {
  const data = {
    indie: {
      title: "🌙 Indie / Alt",
      desc: "You like deep, emotional and atmospheric music.",
      songs: ["The Night We Met", "Sweater Weather", "505"]
    },
    hiphop: {
      title: "🔥 Hip-Hop / Trap",
      desc: "You love strong beats and high energy.",
      songs: ["SICKO MODE", "HUMBLE.", "Nonstop"]
    },
    pop: {
      title: "☀️ Pop",
      desc: "You enjoy catchy, upbeat music.",
      songs: ["Levitating", "Blinding Lights", "Shake It Off"]
    },
    rnb: {
      title: "💜 R&B",
      desc: "Smooth, emotional, and vibey music fits you.",
      songs: ["Best Part", "Location Unknown", "Earned It"]
    },
    rock: {
      title: "⚡ Rock",
      desc: "You like loud, raw, and powerful music.",
      songs: ["Smells Like Teen Spirit", "Do I Wanna Know?", "Numb"]
    },
    lofi: {
      title: "🧠 Lo-fi / Chill",
      desc: "You prefer calm, focus-friendly music.",
      songs: ["Lo-fi Beats", "Weightless", "Snowman"]
    }
  };

  const g = data[type];

  genreText.textContent = g.title;
  descText.textContent = g.desc;

  songsList.innerHTML = "";
  g.songs.forEach(song => {
    const li = document.createElement("li");
    li.textContent = song;
    songsList.appendChild(li);
  });

  result.classList.remove("hidden");
}

resetBtn.addEventListener("click", () => {
  result.classList.add("hidden");
});