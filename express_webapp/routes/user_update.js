var express = require('express');
var router = express.Router();
var user_dao = require('sport-track-db').user_dao;

// router.get('/', function(req, res, next) {
        
//         res.render('user_update', {
//             user:
//                 "prenom": });
//     });
// });

router.post('/', (req, res, next) => {
    // uq = true;
    // user_dao.findAll(function(rows) {
    //     for (let i=0; i < rows.length; i++) {
    //         if (rows[i].email == req.body.email){
    //             uq = false;
    //         };
    //     };
    // });
    // if(uq){
    //     user_dao.insert([req.body.nom,req.body.prenom,req.body.dateDeNaissance,req.body.sexe,req.body.taille,req.body.poids,req.body.email,req.body.motDePasse], (userId) => {
    //         req.session.user = {
    //             id: userId,
    //             prenom: req.body.prenom,
    //             register: true
    //         };
    //         res.redirect('/valid');
    //     });
    // } else {
    //     res.redirect('/users');
    // };
});

module.exports = router;
