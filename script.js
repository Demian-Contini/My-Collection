// ---------------- Movies ------------------
const movies = [
  {
    title: "Peaceful Warrior",
    image: "assets/images/Peaceful-Warrior.jpg",
    quote: "There are no ordinary moments",
    reflection: "This film taught me that discipline and self-awareness matter more than talent."
  },
  {
    title: "Creed",
    image: "assets/images/Creed.jpg",
    quote: "One step at a time. One punch at a time. One round at a time.",
    reflection: "Creed taught me that the past can explain who I am, but it doesn't get to decide who I will become. Every day, I have the opportunity to build my own identity."
  },
  {
    title: "Soul",
    image: "assets/images/Soul.jpeg",
    quote: "The spark isn't your purpose",
    reflection: "Soul reminded me that my purpose isn't hidden in a single passion. Life begins when I become ready to truly live and appreciate the ordinary moments"
  }
];
// ---------------- Musica ------------------
const music = [
  { artist: "Gojira", song: "Born in Winter", spotifyId: "" },
  { artist: "Papa Roach", song: "Between Angels and Insects", spotifyId: "24z528iI9kZu5LbkLainjI" },
  { artist: "Linkin Park", song: "Faint", spotifyId: "" },
  { artist: "Slipknot", song: "Before I Forget", spotifyId: "" },
  { artist: "Audioslave", song: "Like a Stone", spotifyId: "" },
  { artist: "While She Sleeps", song: "Enlightenment (?)", spotifyId: "" },
  { artist: "Three Days Grace", song: "Never Too Late", spotifyId: "" },
  { artist: "Seether", song: "Words as Weapons", spotifyId: "" },
  { artist: "Chevelle", song: "Send the Pain Below", spotifyId: "" },
  { artist: "Nothing More", song: "Fade In / Fade Out", spotifyId: "" },
  { artist: "Muse", song: "Map of the Problematique", spotifyId: "" },
  { artist: "Imagine Dragons", song: "Hear Me", spotifyId: "" }
];

function createMusicCard(item) {
  return `
    <div class="music-card">
      <h3>${item.artist}</h3>
      <p class="song-title">${item.song}</p>
      <iframe
        src="https://open.spotify.com/embed/track/${item.spotifyId}?theme=0"
        width="100%"
        height="152"
        frameborder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy">
      </iframe>
    </div>
  `;
}

function renderMusic() {
  const container = document.querySelector(".music-container");
  container.innerHTML = music.map(createMusicCard).join("");
}

renderMusic(); // ---------------- RenderMusic ------------------

function createMovieCard(movie, index) {
  return `
    <div class="movie-card">
      <img src="${movie.image}" alt="${movie.title} Poster">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p class="movie-quote">"${movie.quote}"</p>
        <button data-index="${index}">Read Reflection</button>
        <p class="movie-reflection" hidden>${movie.reflection}</p>
      </div>
    </div>
  `;
}

function renderMovies() {
  const container = document.querySelector(".movies-container");
  container.innerHTML = movies.map(createMovieCard).join("");

  container.addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") return;

    const card = event.target.closest(".movie-card");
    const reflection = card.querySelector(".movie-reflection");
    reflection.hidden = !reflection.hidden;
    event.target.textContent = reflection.hidden ? "Read Reflection" : "Hide Reflection";
  });
}

renderMovies();// ---------------- RenderMovie ------------------