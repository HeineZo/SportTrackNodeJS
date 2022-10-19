var express = require('express');
var router = express.Router();
var user_dao = require('sport-track-db').user_dao;
var activity_dao = require('sport-track-db').activity_dao;
var activity_dao = require('sport-track-db').activity_entry_dao;
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

router.get('/', function(req, res, next) {
    res.render('upload');
});

router.post('/', function(req, res) {
    upload.single('file')(req, res, function (err) {
        if (err) {
            console.log(err);
            res.redirect('/upload');
        } else {
            const fs = require('fs')
            let fichier = fs.readFileSync(req.file.path);
            let json = JSON.parse(fichier);
            let userId = 1;
            let activityData = [json.activity.date,json.activity.description,userId];
            activity_dao.insert(activityData,()=>{});
            activity_dao.findAll(function(rows) {
                for (let i=0; i < rows.length;i++) {
                    if (rows[i].lUtilisateur == 1/*à changer quand y'aura les sessions*/){
                        let idActivite = rows[i].id;
                    }
                };
            });
            let activityEntryData = [json.activity.date,json.activity.description,userId];
        }
    });
});
module.exports = router;
