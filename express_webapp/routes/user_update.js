var express = require('express');
var router = express.Router();
var user_dao = require('sport-track-db').user_dao;

router.get('/', function(req, res, next) {
    let user = "";
    user_dao.findAll((users) => {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === req.session.user.id) {
                user = users[i];
            }
        }
        res.render('user_update', {user});
    });
});

router.post('/', (req, res, next) => {
    user_dao.update(req.session.user.id, [req.body.nom,req.body.prenom,req.body.dateDeNaissance,req.body.sexe,req.body.taille,req.body.poids,req.body.email,req.body.motDePasse], () => {
        res.render('upload', {modified: true});
    });
});

module.exports = router;
