const express = require('express');
const router = express.Router();
const user_dao = require('sport-track-db').user_dao;
// r_dao.findAll(function(rows) {
//     //         res.render('connect', {data:rows});
//     // });
router.get('/', function(req, res, next) {
    res.render('connect');
});

router.post('/', (req, res, next) => {
    const {email, motDePasse} = req.body;
    let find = false;
    let i = 0;
    user_dao.findAll(function(rows) {
        while(i < rows.length && !find) {
            if (rows[i].email === email && rows[i].motDePasse === motDePasse){
                find = true;
                req.session.user = {
                    id: rows[i].id,
                    prenom: rows[i].prenom
                };
                res.redirect('/valid');
            };
            i++;
        };
        if(find == false){
            res.render('connect', {valid: false});
        };
    });
});
module.exports = router;
