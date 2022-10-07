// Connexion à la base de donnée

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('sport-track-db.db');

module.exports = db;

