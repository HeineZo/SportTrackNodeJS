var ActivityEntryDAO = function(){
    this.insert = function(values, callback){
        db.run('INSERT INTO Donnee (heure,freqCard,latitude,longitude,altitude,lActivite) VALUES (?,?,?,?,?,?);', values, callback);
    };

    this.delete = function(values, callback){
        db.run('DELETE FROM Donnee WHERE ID = ?;', values, callback);
    };

    this.update = function(values, callback){
        db.run('update Activite set date = ?, description = ? lUtilisateur = ? where id = ? ;',[...values, key], callback);
    };

    this.findAll = function(callback){
        db.all('SELECT * FROM Donnee ORDER BY heure;', function(err, rows) {
            if (err) {
                callback(err, null);
            } else {
                callback(err, rows);
            }
        });
    };

    this.findByActivity = function(key, callback){
        db.run('select * from Donnee WHERE lActivite = ? ORDER BY id;', key, function(err, rows) {
            if (err) {
                callback(err, null);
            } else {
                callback(rows[0]);
            }
        });
    };
}
let dao = new ActivityDAO();
module.exports = dao;