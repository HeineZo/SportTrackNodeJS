var express = require('express');
var router = express.Router();
var user_dao = require('sport-track-db').user_dao;
// r_dao.findAll(function(rows) {
//     //         res.render('connect', {data:rows});
//     // });
router.get('/', function(req, res, next) {
    res.render('connect');
});

router.post('/', (req, res, next) => {
    find = false;
    user_dao.findAll(function(rows) {
        for (let i=0; i < rows.length;i++ && !find) {
            console.log(rows[i].email);
            console.log(req.body.email);
            console.log(rows[i].motDePasse);
            console.log(req.body.motDePasse);
            if (rows[i].email == req.body.email && rows[i].motDePasse == req.body.motDePasse){
                find = true;
                res.redirect('/upload');
            };
        };
        console.log(find);
    });
    if(find == false){
        res.redirect('/connect');
    };
});
module.exports = router;
