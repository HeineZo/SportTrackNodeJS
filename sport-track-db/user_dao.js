var db = require('./sqlite_connection');

var UserDAO = function(){
    this.insert = function(values, callback){
        db.run('INSERT INTO Utilisateur(nom,prenom,dateDeNaissance,sexe,taille,poids,email,motDePasse) VALUES(?,?,?,?,?,?,?,?)', values, (err) => {
            if(err) {
                return console.log(err.message); 
            }
            console.log('Row was added to the table: ${this.lastID}');
        })
    };

    this.update = function(key, values, callback){
        const stmt = db.prepare('update Utilisateur set nom = ?, prenom = ?, dateDeNaissance = ?, sexe = ?, taille = ?, poids = ?, email = ?, motDePasse = ? where id = ?'); 
        const updates = stmt.run(nom, prenom, dateDeNaissance, sexe, taille, poids, email, motDePasse, id);
        db.run('update Utilisateur set nom = :nom, prenom = :prenom, dateDeNaissance = :dateDeNaissance, sexe = :sexe, taille = :taille, poids = :poids, email = :email, motDePasse = :motDePasse where id = :id;', values, (err) => {
            if(err) {
                return console.log(err.message); 
            }
            console.log('Row was added to the table: ${this.lastID}');
        })
    };

    this.delete = function(key, callback){
        
    };

    this.findAll = function(callback){
        
    };

    this.findByKey = function(key, callback){
        
    };
};
var dao = new UserDAO();
module.exports = dao;