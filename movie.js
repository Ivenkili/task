// Initial Movies
let movies = [
    { id: 1, title: "Inception", genre: "Sci-Fi", year: 2010, watched: false },
    { id: 2, title: "Titanic", genre: "Romance", year: 1997, watched: true },
    { id: 3, title: "The Matrix", genre: "Sci-Fi", year: 1999, watched: false },
    { id: 4, title: "The Godfather", genre: "Crime", year: 1972, watched: true }
  ];
  
  let nextMovieId = 5;
  
  // ➕ Add a movie
  function addMovie(title, genre, year) {
    const movie = {
      id: nextMovieId++,
      title,
      genre,
      year,
      watched: false
    };
    movies.push(movie);
    console.log(` Added: "${title}"`);
    console.log("Current Movie List:", movies);

  }
  addMovie("Avatar", "Sci-Fi", 2009);
  
  // Mark as watched/unwatched
  function toggleWatched(id) {
    const movie = movies.find(m => m.id === id);
    if (movie) {
      movie.watched = !movie.watched;
      console.log(`"${movie.title}" is now ${movie.watched ? "watched" : "unwatched"}`);
    } else {
      console.log("❌ Movie not found.");
    }
  }
  toggleWatched(5);
  toggleWatched(4); 
  
  //  List by genre
  function listByGenre(genre) {
    const filtered = movies.filter(m => m.genre.toLowerCase() === genre.toLowerCase());
    console.log(`Movies in genre "${genre}":`);
    console.log(filtered);
  }
    listByGenre("Sci-Fi");
    listByGenre("Romance");
  
  // ✅ /  List by watched status
  function listByWatchedStatus(watched) {
    const filtered = movies.filter(m => m.watched === watched);
    console.log(watched ? "Watched Movies:" : "Unwatched Movies:");
    console.log(filtered);
  }
    listByWatchedStatus(true); 
  
  // 🗑 Delete a movie
  function deleteMovie(id) {
    const index = movies.findIndex(m => m.id === id);
    if (index !== -1) {
      const removed = movies.splice(index, 1)[0];
      console.log(`Deleted: "${removed.title}"`);
    } else {
      console.log("❌ Movie not found.");
    }
  }
  deleteMovie(3);

  // 📅 Sort by year
  function sortByYear() {
    movies.sort((a, b) => a.year - b.year);
    console.log("Sorted by year:");
    console.log(movies);
  }
    sortByYear();

  
  // 🔠 Sort by title
  function sortByTitle() {
    movies.sort((a, b) => a.title.localeCompare(b.title));
    console.log("Sorted by title:");
    console.log(movies);
  }
  sortByTitle();
  
  // 🔍 View all movies
  function showAllMovies() {
    console.log("Current Movie List:");
    console.log(movies);
  }
  showAllMovies();
  