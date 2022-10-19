const express = require('express');
const router = express.Router();
const user_dao = require('sport-track-db').user_dao;

router.get('/', function(req, res, next) {
    let text = `Bienvenue ${req.session.user.prenom}`;
    if (req.session.user.register === true) {
        text = 'Votre compte a bien été créé';
    }

    res.render('valid', {text});
});


module.exports = router;
