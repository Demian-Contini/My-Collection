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
  },
    {
    title: "Daredevil",
    image: "assets/images/Daredevil.jpg",
    quote: "A man without fear is a man without hope.",
    reflection: "Matt Murdock taught me that being 'blind' isn't the same as not seeing — sometimes what we lack becomes the reason we learn to perceive things differently."
  },
  {
    title: "The Punisher",
    image: "assets/images/The-Punisher.jpg",
    quote: "One batch, two batch, penny and dash.",
    reflection: "Frank Castle's story showed me how far pain can take someone when it's left unprocessed — and how important it is to face it instead of letting it define every choice."
  },
  {
    title: "Iron Fist",
    image: "assets/images/Iron-Fist.jpg",
    quote: "The Iron Fist is a weapon we wield in the battle against evil.",
    reflection: "A reminder that discipline and inner training matter more than raw power — mastery comes from patience, not from rushing the process."
  },
  {
    title: "Doctor Strange",
    image: "assets/images/Dr-strange.jpg",
    quote: "It's not about you.",
    reflection: "Stephen Strange's arc taught me that real growth often starts by losing control of what defined you, and learning to build yourself again from a place of humility."
  },
  {
    title: "Dragon Ball",
    image: "assets/images/Dragon-Ball.jpg",
    quote: "I don't fight out of hatred, I fight to protect what I love.",
    reflection: "Dragon Ball was probably my first lesson in perseverance — Goku never stopped training or pushing his limits, and that idea that you can always keep growing stuck with me since childhood."
  },
  {
    title: "Kung Fu Panda",
    image: "assets/images/Kun-Fu-Panda.jpg",
    quote: "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.",
    reflection: "Po reminded me that you don't need to stop being who you are to become powerful — self-acceptance is often the real first step of any transformation."
  },
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

// ---------------- Reflexion ------------------
const reflections = [
  {
    text: "A young fish swims up to an older fish and asks, \"I'm trying to find the ocean.\" The older fish smiles and replies, \"The ocean? You're in it right now.\" The young fish looks around and says, \"This? This is water. What I want is the ocean.\"",
    source: "Soul"
  },
  {
    text: "Become the world you're seeking.",
    source: null
  },
  {
    text: "Growth is a spiral, not a straight line.",
    source: null
  }
];

function createReflection(item) {
  const sourceTag = item.source ? `<span>${item.source}:</span> ` : "";
  return `<blockquote class="reflection">${sourceTag}${item.text}</blockquote>`;
}

function renderReflections() {
  const container = document.querySelector(".reflections-container");
  container.innerHTML = reflections.map(createReflection).join("");
}

renderReflections();// ---------------- RenderReflection ------------------

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