let db = require('./sqlite_connection');

const ActivityEntryDAO = function(){
    // Check
    this.insert = function(values, callback){
        db.run('INSERT INTO Donnee (heure,freqCard,latitude,longitude,altitude,lActivite) VALUES (?,?,?,?,?,?);', values, function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Insertion des données réussie à la ligne "+this.lastID);
                callback(this.lastID);
            }
        });
    };

    // Check
    this.delete = function(values, callback){
        db.run('DELETE FROM Donnee WHERE ID = ?;', values, callback);
    };

    // Check 
    this.update = function(values, callback){
        db.run('update Donnee set heure = ?, freqCard = ?, latitude = ?, longitude = ?, altitude = ? where lActivite = ?;', values, function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Modification des données réussie à la ligne "+this.lastID);
                callback(this.lastID);
            }
        });
    };

    // Check
    this.findAll = function(callback){
        db.all('SELECT * FROM Donnee ORDER BY heure;', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                callback(data);
            }
        });
    };

    // Check
    this.findByActivity = function(key, callback){
        db.all('select * from Donnee WHERE lActivite = ? ORDER BY id;', key, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                callback(data);
            }
        });
    };

    this.deleteByActivity = function(activityId, callback){
        db.run('DELETE FROM Donnee WHERE lActivite = ?;', activityId, callback);
    };
}
let dao = new ActivityEntryDAO();
module.exports = dao;