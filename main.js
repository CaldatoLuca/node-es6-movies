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
  #title;
  #year;
  #genre;
  #rating;

  constructor(title, year, genre, rating) {
    this.#title = title;
    this.#year = year;
    this.#genre = genre;
    this.#rating = rating;
    this.price = 3.99;
  }

  get title() {
    return this.#title;
  }

  set title(title) {
    this.#title = title;
  }

  get year() {
    return this.#year;
  }

  set year(year) {
    this.#year = year;
  }

  get genre() {
    return this.#genre;
  }

  set genre(genre) {
    this.#genre = genre;
  }

  get rating() {
    return this.#rating;
  }

  set rating(rating) {
    this.#rating = rating;
  }

  toString() {
    return `${this.title} è un film creato l' anno ${this.year} del genere ${this.genre} con votazione ${this.rating}`;
  }
}

//Classe SERIE TV
class TvSerie extends Movie {
  #seasons;

  constructor(title, year, genre, rating, seasons) {
    super(title, year, genre, rating);
    this.#seasons = seasons;
  }

  get seasons() {
    return this.#seasons;
  }

  set seasons(seasons) {
    this.#seasons = seasons;
  }

  toString() {
    return `${this.title} è una serie tv dell' anno (${this.year}) del genere ${this.genre} con votazione ${this.rating} e ${this.seasons} stagioni`;
  }
}

//Classe CARRELLO
class Cart {
  #items;
  #total;

  constructor() {
    this.#items = [];
    this.#total = 0;
  }

  get items() {
    return this.#items;
  }
  addItem(item) {
    this.#items.push(item.title);
    this.#total += item.price;
  }

  removeItem(item) {
    this.#items.splice(this.#items.indexOf(item), 1);
    this.#total -= item.price;
  }

  clearCart() {
    this.#items = [];
    this.#total = 0;
  }

  get total() {
    return this.#total + "$";
  }
}

//Creazione di array di oggetti mappando i dati
//si poteva anche destrutturare al posto di element, evito element.
const movies = media.map((element) => {
  if (element.type === "movie") {
    return new Movie(
      element.title,
      element.year,
      element.genre,
      element.rating
    );
  }
  return new TvSerie(
    element.title,
    element.year,
    element.genre,
    element.rating,
    element.seasons
  );
});

/**
 * Funzione che determina in base a un array e a un genere la media voti
 * @param {array} arr
 * @param {string} genre
 */
const averageVote = (arr, genre) => {
  let sumVote = 0;
  let mediaCount = 0;
  arr.forEach((item) => {
    if (item.genre.toLowerCase() === genre.toLocaleLowerCase()) {
      sumVote += item.rating;
      mediaCount++;
    }
  });

  return sumVote / mediaCount;
};
console.log("Funzione Media Voti: " + averageVote(movies, "crime"));
console.log("---------------------------");

/**
 * Funzione che determina in base a un array la lista dei generi
 * @param {array} arr
 */
const genreList = (arr) => {
  //   let genres = [];
  //   arr.forEach((item) => {
  //     if (!genres.includes(item.genre)) {
  //       genres.push(item.genre);
  //     }
  //   });
  //   return genres;

  return arr.reduce(
    (curr, media) =>
      curr.includes(media.genre) ? curr : [...curr, media.genre],
    []
  );
};
console.log("Funzione Lista dei Generi: " + genreList(movies));
console.log("---------------------------");

/**
 * Funzione che determina in base a un genere restituisce la lista dei media con quel genere.toString()
 * @param {string} genre
 */
const filterByGenre = (genre) => {
  //   return movies
  //     .filter((media) => {
  //       return media.genre.toLowerCase() === genre.toLowerCase();
  //     })
  //     .map((media) => media.toString());

  return movies.reduce(
    (curr, media) =>
      media.genre.toLocaleLowerCase() === genre.toLocaleLowerCase()
        ? [...curr, media.toString()]
        : curr,
    []
  );
};
console.log("Funzione filtro per genere:");
console.log(filterByGenre("crime"));
console.log("---------------------------");

//Creazione dell' oggetto carrello
const cart = new Cart();

//Aggiunta degli items
cart.addItem(movies[0]);
cart.addItem(movies[4]);
cart.addItem(movies[7]);
cart.addItem(movies[9]);

console.log("Items nel carrello: metodo addItem");
console.log(cart.items);

console.log("---");

//Rimozione degli items
cart.removeItem(movies[4]);
cart.removeItem(movies[9]);

console.log("Items nel carrello: dopo removeItem");
console.log(cart.items);

console.log("---");

//Vista del prezzo
console.log("Prezzo del carrello: " + cart.total);
console.log("---");

//Pulizia carrello
cart.clearCart();

console.log("Items nel carrello e prezzo: dopo clearCart");
console.log(cart.items);
console.log(cart.total);
