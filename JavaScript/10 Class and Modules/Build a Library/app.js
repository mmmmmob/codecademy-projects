class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._rating = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get rating() {
    return this._rating;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    let sumRatings = this._rating.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
    return Math.floor(sumRatings / this._rating.length);
  }
  addRating(rating) {
    if (rating < 1 || rating > 5) {
      return console.log("Please enter rating between 1 - 5");
    } else return this._rating.push(rating);
  }
  set isCheckedOut(isCheckedOut) {
    this._isCheckedOut = isCheckedOut;
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this.pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime, movieCast) {
    super(title);
    this._director = director;
    this._runTime = runTime;
    this._movieCast = movieCast;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
  get movieCast() {
    return this._movieCast;
  }
}

class CD extends Media {
  constructor(title, artist) {
    super(title);
    this._songTitle = [];
    this._artist = artist;
  }
  get songTitle() {
    return this._songTitle;
  }
  get artist() {
    return this._artist;
  }
  addTracks(trackname) {
    return this._songTitle.push(trackname);
  }
  shuffleSongs() {
    let randomNumber = Math.floor(Math.random() * this.songTitle.length);
    console.log(randomNumber);
    return `now playing: ${this.songTitle[randomNumber]}.`;
  }
}

const NJWMX = new CD("NJWMX", "NewJeans");

NJWMX.addTracks("Ditto (250 Remix)");
NJWMX.addTracks("OMG (FRNK Remix)");
NJWMX.addTracks("Attention (250 Remix)");

console.log(NJWMX.songTitle);
console.log(NJWMX.shuffleSongs());

const historyOfEverything = new Book(
  "A Short History of Nearly Everything",
  "Bill Bryson",
  544
);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.rating);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie("Speed", "Jan de Bont", 116, "Sandra Bullock");
speed.toggleCheckOutStatus();
console.log(speed.movieCast);
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.rating);
console.log(speed.getAverageRating());
