//Dati iniziali
const media = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    rating: 9.3,
    type: "movie",
  },
  {
    title: "Forrest Gump",
    year: 1994,
    genre: "Drama",
    rating: 8.8,
    type: "movie",
  },
  {
    title: "The Godfather",
    year: 1972,
    genre: "Crime",
    rating: 9.2,
    type: "movie",
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crime",
    rating: 8.9,
    type: "movie",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    type: "movie",
  },
  {
    title: "Inception",
    year: 2010,
    genre: "Action",
    rating: 8.8,
    type: "movie",
  },
  {
    title: "Breaking Bad",
    year: 2008,
    genre: "Crime",
    rating: 9.5,
    type: "tv",
    seasons: 5,
  },
  {
    title: "The Sopranos",
    year: 1999,
    genre: "Crime",
    rating: 9.2,
    type: "tv",
    seasons: 6,
  },
  {
    title: "Game of Thrones",
    year: 2011,
    genre: "Fantasy",
    rating: 9.3,
    type: "tv",
    seasons: 8,
  },
  {
    title: "Stranger Things",
    year: 2016,
    genre: "Sci-Fi",
    rating: 8.7,
    type: "tv",
    seasons: 4,
  },
];

//Classe MOVIE
class Movie {
  constructor(title, year, genre, rating, type) {
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.rating = rating;
    this.type = type;
  }

  toString() {
    return `${this.title} (${this.year}) - ${this.genre} - ${this.rating} - ${this.type}`;
  }
}

//Classe SERIE TV
class TvSerie extends Movie {
  constructor(title, year, genre, rating, type, seasons) {
    super(title, year, genre, rating, type);
    this.seasons = seasons;
  }
  toString() {
    return `${this.title} (${this.year}) - ${this.genre} - ${this.rating} - ${this.type} - ${this.seasons} seasons`;
  }
}

//Creazione di array di oggetti mappando i dati
const movies = media.map((element) => {
  if (element.type === "movie") {
    return new Movie(
      element.title,
      element.year,
      element.genre,
      element.rating,
      element.type
    );
  } else {
    return new TvSerie(
      element.title,
      element.year,
      element.genre,
      element.rating,
      element.type,
      element.seasons
    );
  }
});
