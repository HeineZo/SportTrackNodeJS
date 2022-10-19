var express = require('express');
var router = express.Router();
var user_dao = require('sport-track-db').user_dao;
var activity_dao = require('sport-track-db').activity_dao;
var activity_entry_dao = require('sport-track-db').activity_entry_dao;
var fonctions_calcul = require('sport-track-db').fonctions_calcul;

router.get('/', function(req, res, next) {
    res.render('upload',{liste:tab});
});

// router.showActivity('/',function(req, res) {
//     let infosTab = new Array();
//     user_dao.findAll(function(rows) {
//         let idUser = -1;
//         for (let i=0; i < rows.length;i++) {
//             if (rows[i].email == "annacacao@gmail.com" /*à changer quand y'aura les sessions*/){
//                 idUser = rows[i].id;
//             }
//         };

//         activity_dao.findByUser(idUser,function(rows) {
//             for (let j=0; j < rows.length;j++) {
//                 infosTab.push(rows[j].date,rows[j].description);
//                 activity_entry_dao.findByActivity(rows[j].id,function(rows2){
//                     let heure = rows2[k].heure;
//                     let temps = [];
//                     for (let k = 0; k < rows2.length; k++) {
//                         temps[k] = rows2[k].heure;
//                     }
//                     let leTemps = fonctions_calcul.temps(temps);

//                     let latLong = [];
//                     for (let k = 0; k < rows2.length; k++) {
//                         latLong[j] = [
//                             rows2[k].latitude,
//                             rows2[k].longitude
//                         ];
//                     }
//                     let distance = fonctions_calcul.calculDistanceTrajet(latLong);

//                     let freqCard = [];
//                     for (let k = 0; k < rows2.length; k++) {
//                         freqCard [k] = rows2[k].cardio_frequency;
//                     }
//                     let moyenneFreqCard = fonctions_calcul.moyenneFreqCard(freqCard);
//                     let minMaxFreq = fonctions_calcul.minFreqCard(freqCard) + ' - '+ fonctions_calcul.maxFreqCard(freqCard);
//                     infosTab[j] = array(rows[j].description,rows[j].date,heure,leTemps,distance,moyenneFreqCard,minMaxFreq);
//                 });
                
//             };
//         });
//         return infosTab;
//     });
// });

