var express = require('express');
var router = express.Router();
var user_dao = require('sport-track-db').user_dao;

router.get('/', function(req, res, next) {
    res.render('connect');
    // user_dao.findAll(function(rows) {
    //         res.render('connect', {data:rows});
    // });
});
module.exports = router;
