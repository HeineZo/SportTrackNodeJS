const express = require('express');
const router = express.Router();
const user_dao = require('sport-track-db').user_dao;

router.get('/', function(req, res, next) {
    if (req.session) {
        delete req.session;
    }
    res.render('index', {session: 'disconnected'});
});


module.exports = router;
