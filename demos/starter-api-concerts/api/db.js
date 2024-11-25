//Les Modèles de données

class Concert {
  constructor(id, artistName, date, location, description, nbSeats) {
    this.id = id;
    this.artistName = artistName;
    this.date = date;
    this.location = location;
    this.description = description;
    this.nbSeats = nbSeats;
  }
}

//La base de données mockée

const concerts = [
  new Concert(
    1,
    "Taylor Swift",
    new Date(2024, 11, 22, 20, 0, 0),
    "Stereolux",
    "Lorem ipsum",
    1000
  ),
  new Concert(
    2,
    "Sting",
    new Date(2025, 1, 13, 21, 30, 0),
    "Stereolux",
    "Lorem ipsum",
    500
  ),
];

/**
 * Simulation d'une base de données utilisateur
 */
const users = [
  {
    login: "ed",
    password: "astrongpassword",
    role: "admin",
  },
  {
    login: "john",
    password: "",
    role: "visitor",
  },
];

module.exports = { concerts, users };
