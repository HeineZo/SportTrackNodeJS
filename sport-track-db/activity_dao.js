const db = require('./sqlite_connection');

const ActivityDAO = function(){
    // Check
    this.insert = function(values, callback){
        db.run('INSERT INTO Activite(date,description,lUtilisateur) VALUES (?,?,?);', values, function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Insertion de l'activité réussie à la ligne "+this.lastID);
                callback(this.lastID);
            }
        });
    };

    // Check
    this.delete = function(values, callback){
        db.run('DELETE FROM Activite WHERE ID = ?;', values, callback);
    };

    this.update = function(values, callback){
        db.run('update Activite set date = ?, description = ?, lUtilisateur = ? where id = ? ', values, function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Modification de l'activité réussie à la ligne "+this.lastID);
                callback(this.lastID);
            }
        });
    };

    // Check
    this.findAll = function(callback){
        db.all('SELECT * FROM Activite ORDER BY id', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                callback(data);
            }
        });
    };

    // Check
    this.findByUser = function(key, callback){
        db.all('select * from Activite where lUtilisateur = ?', key, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
                callback(data);
            }
        });
    };
}
let dao = new ActivityDAO();
module.exports = dao;