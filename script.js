const movies = [
  {
    title: "Peaceful Warrior",
    image: "assets/images/Peaceful-Warrior.jpg",
    quote: "The journey begins within.",
    reflection: "Reflections on the Movie"
  }
];

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

renderMovies();