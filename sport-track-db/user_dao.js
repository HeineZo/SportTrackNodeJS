let db = require('./sqlite_connection');

const UserDAO = function(){
    this.insert = function(values, callback){
        db.run('INSERT INTO Utilisateur(nom,prenom,dateDeNaissance,sexe,taille,poids,email,motDePasse) VALUES(?,?,?,?,?,?,?,?)', values, function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Insertion de l'utilisateur réussie à la ligne "+this.lastID);
                callback(this.lastID);
            }
        });
    };

    this.update = function(key, values, callback){
        db.run('update Utilisateur set nom = ?, prenom = ?, dateDeNaissance = ?, sexe = ?, taille = ?, poids = ?, email = ?, motDePasse = ? where id = ?', [...values, key], (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Modification réussie à la ligne "+key);
                callback();
            }
        });
    };

    this.delete = function(key, callback){
        db.run('delete from Utilisateur where id = ?;', key, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Suppression réussie");
            }
        }); 
    };

    this.findAll = function(callback){
        db.all('select * from Utilisateur order by id', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                callback(data);
            }
        });
    };

    this.findByKey = function(key, callback){
        db.all('select * from Utilisateur where id = ?', key, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
                callback(data);
            }
        });
    };
};
const dao = new UserDAO();
module.exports = dao;