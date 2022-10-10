var express = require('express');
var router = express.Router();
var user_dao = require('sport-track-db').user_dao;
router.get('/', function(req, res, next) {
    user_dao.findAll(function(err, rows) {
        if(err != null){
            console.log("ERROR= " +err);
        }else {
            res.render('users', {data:rows});
        }
    });
});
module.exports = router;
