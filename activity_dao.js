var UserDAO = function(){
    this.insert = function(values, callback){
        db.run('INSERT INTO Activite(date,description,lUtilisateur) VALUES (?,?,?);', values, callback);
    };

    this.delete = function(values, callback){
        db.run('DELETE FROM Activite WHERE ID = ?;', values, callback);
    };

    this.update = function(values, callback){
        db.run('update Activite set date = ?, description = ? lUtilisateur = ? where id = ? ;',[...values, key], callback);
    };

    public final function all(): Array{
        $dbc = SqliteConnection::getInstance()->getConnection();
        $query = "select * from Activite order by id ;";
        $stmt = $dbc->query($query);
        $results = $stmt->fetchAll(PDO::FETCH_CLASS, 'Activite');
        return $results;
    }

    public final function allByUser(int $idUser): Array{
        $dbc = SqliteConnection::getInstance()->getConnection();
        $query = "select * from Activite WHERE lUtilisateur = :id;";
        $stmt = $dbc->prepare($query);
        $stmt->bindValue(':id',$idUser,PDO::PARAM_INT);
        $results = $stmt->fetchAll(PDO::FETCH_CLASS, 'Activite');
        return $results;
    }

    public function delete(Activite $obj): void {
        if($obj instanceof Activite){
            $dbc = SqliteConnection::getInstance()->getConnection();
            $query = "delete from Activite where id = :id ;";
            $stmt = $dbc->prepare($query);
            $stmt->bindValue(':id',$obj->getId(),PDO::PARAM_INT);
            $stmt->execute();
        }
    }

    public function update(Activite $obj): void {
        if($obj instanceof Activite){
            $dbc = SqliteConnection::getInstance()->getConnection();
            $query = "update Activite set date = :date, description = :description, lUtilisateur = :lUtilisateur where id = :id ;";
            $stmt = $dbc->prepare($query);
            $stmt->bindValue(':id',$obj->getId(),PDO::PARAM_INT);
            $stmt->bindValue(':date',$obj->getDate(),PDO::PARAM_STR);
            $stmt->bindValue(':description',$obj->getDescription(),PDO::PARAM_STR);
            $stmt->bindValue(':lUtilisateur',$obj->getLUtilisateur(),PDO::PARAM_INT);
            $stmt->execute();
        }
    }

    public function activitiesUser(Utilisateur $use) : Array {
        if ($use instanceOf Utilisateur) {
            $dbc = SqliteConnection::getInstance()->getConnection();
            $query = "select * from Activite where lUtilisateur = :id ;";
            $stmt = $dbc->prepare($query);
            $stmt->bindValue(':id',$use->getId(),PDO::PARAM_INT);
            $stmt->execute();
            $results = $stmt->fetchAll(PDO::FETCH_CLASS, 'Activite');
            return $results;
        }
    }
}