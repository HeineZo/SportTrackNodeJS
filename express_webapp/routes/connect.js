var express = require('express');
var router = express.Router();
var user_dao = require('sport-track-db').user_dao;

router.get('/', function(req, res, next) {
    res.render('connect');
});

router.post('/', (req, res, next) => {
    let find = false;
    user_dao.findAll(function(rows) {
        for (let i=0; i < rows.length;i++ && !find) {
            if (rows[i].email == req.body.email && rows[i].motDePasse == req.body.motDePasse){
                find = true;
                res.redirect('/upload');
            };
        };
        if(find == false){
            res.redirect('connect');
        };
    });
});
module.exports = router;
