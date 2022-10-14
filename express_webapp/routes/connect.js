var express = require('express');
var router = express.Router();
var user_dao = require('sport-track-db').user_dao;
r_dao.findAll(function(rows) {
    //         res.render('connect', {data:rows});
    // });
router.get('/', function(req, res, next) {
    res.render('connect');
    // use
});
module.exports = router;
