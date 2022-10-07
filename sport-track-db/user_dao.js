var db = require('./sqlite_connection');

var UserDAO = function(){
    this.insert = function(values, callback){
        db.run('INSERT INTO Utilisateur(nom,prenom,dateDeNaissance,sexe,taille,poids,email,motDePasse) VALUES(?,?,?,?,?,?,?,?)', values, callback);
    };

    this.update = function(key, values, callback){
        db.run('update Utilisateur set nom = ?, prenom = ?, dateDeNaissance = ?, sexe = ?, taille = ?, poids = ?, email = ?, motDePasse = ? where id = ?', [values, key], callback);
    };

    this.delete = function(key, callback){
        db.run('delete from Utilisateur where id = ?;', key, callback); 
    };

    this.findAll = function(callback){
        db.all('select * from Utilisateur order by id', function(err, rows) {
            if (err) {
                callback(err, null);
            } else {
                callback(err, rows);
            }
        });
    };

    this.findByKey = function(key, callback){
        db.run('select * from Utilisateur where id = ?', key, function(err, rows) {
            if (err) {
                callback(err, null);
            } else {
                callback(rows[0]);
            }
        });
    };
};
var dao = new UserDAO();
module.exports = dao;