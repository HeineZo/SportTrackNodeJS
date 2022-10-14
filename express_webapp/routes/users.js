var express = require('express');
var router = express.Router();
var user_dao = require('sport-track-db').user_dao;

router.get('/', function(req, res, next) {
    user_dao.findAll(function(rows) {
            res.render('connect', {data:rows});
    });
});

router.post('/', (req, res, next) => {
    user_dao.findAll(function(rows) {
        for (let i=0; i < rows.length;i++) {
            console.log(rows[i].email);
        };
    });
});

module.exports = router;
