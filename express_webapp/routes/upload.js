var express = require('express');
var router = express.Router();
var user_dao = require('sport-track-db').user_dao;
var activity_dao = require('sport-track-db').activity_dao;
var activity_entry_dao = require('sport-track-db').activity_entry_dao;
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var activities = require('./activities.js');

router.get('/', function(req, res, next) {
    let tab = activities.showActivities();
    render('upload',{liste : tab});
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
            for (i = 0; i < json.data.length; i++){
                let heure = json.data[i].time;
                let freqCard = json.data[i].cardio_frequency;
                let latitude = json.data[i].latitude;
                let longitude = json.data[i].longitude;
                let altitude = json.data[i].altitude;
                let idActivite = -1;
                activity_dao.findAll(function(rows) {
                    for (let j=0; j < rows.length;j++) {
                        if (rows[j].lUtilisateur == 1 /*à changer quand y'aura les sessions*/){
                            idActivite = rows[j].id;
                        }
                    };
                    let activityEntryData = [heure,freqCard,latitude,longitude,altitude,idActivite];
                    activity_entry_dao.insert(activityEntryData,()=>{});
                });
                
            }
            let tab = activities.showActivities();
            res.render('upload',{liste:tab});
        }
    });
});
module.exports = router;
