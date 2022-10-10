const db = require('./sqlite_connection');

const UserDAO = function(){
    this.insert = function(values, callback){
        db.run('INSERT INTO Utilisateur(nom,prenom,dateDeNaissance,sexe,taille,poids,email,motDePasse) VALUES(?,?,?,?,?,?,?,?)', values, function(err) {
            if (err) {
                callback(err);
            } else {
                callback("Insertion réussie à la ligne "+this.lastID);
            }
        });
    };

    this.update = function(key, values, callback){
        db.run('update Utilisateur set nom = ?, prenom = ?, dateDeNaissance = ?, sexe = ?, taille = ?, poids = ?, email = ?, motDePasse = ? where id = ?', [values, key], callback);
    };

    this.delete = function(key, callback){
        db.run('delete from Utilisateur where id = ?;', key, (err) => {
            if (err) {
                callback(err);
            } else {
                callback(null);
            }
        }); 
    };

    this.findAll = function(callback){
        let rows = db.all('select * from Utilisateur order by id', (err) => {
            if (err) {
                console.log(err);
            } else {
                callback(rows);
            }
        });
    };

    this.findByKey = function(key, callback){
        db.run('select * from Utilisateur where id = ?', key, function(err, rows) {
            if (err) {
                callback(err);
            } else {
                callback(rows);
            }
        });
    };
};
const dao = new UserDAO();
module.exports = dao;