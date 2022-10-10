var ActivityDAO = function(){
    this.insert = function(values, callback){
        db.run('INSERT INTO Activite(date,description,lUtilisateur) VALUES (?,?,?);', values, callback);
    };

    this.delete = function(values, callback){
        db.run('DELETE FROM Activite WHERE ID = ?;', values, callback);
    };

    this.update = function(values, callback){
        db.run('update Activite set date = ?, description = ? lUtilisateur = ? where id = ? ;',[...values, key], callback);
    };

    this.findAll = function(callback){
        db.all('SELECT * FROM Activite ORDER BY id', function(err, rows) {
            if (err) {
                callback(err, null);
            } else {
                callback(err, rows);
            }
        });
    };

    this.findByUser = function(key, callback){
        db.run('select * from Activite where lUtilisateur = ?', key, function(err, rows) {
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