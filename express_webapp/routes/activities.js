var express = require('express');
var router = express.Router();
var user_dao = require('sport-track-db').user_dao;
var activity_dao = require('sport-track-db').activity_dao;
var activity_entry_dao = require('sport-track-db').activity_entry_dao;
var fonctions_calcul = require('sport-track-db').fonctions_calcul;

module.exports = function showActivities(callback){
    let infosTab = [];
    user_dao.findAll((rows) => {
        let idUser = -1;
        for (let i=0; i < rows.length;i++) {
            if (rows[i].email == "annacacao@gmail.com" /*à changer quand y'aura les sessions*/){
                idUser = rows[i].id;
            }
        };
        
        activity_dao.findByUser(idUser,(rows) => {
            let finishedCount = 0;
            for (let j=0; j < rows.length;j++) {
                activity_entry_dao.findByActivity(rows[j].id, (rows2) => {
                    let heure = rows2[0].heure;
                    let temps = [];
                    for (let k = 0; k < rows2.length; k++) {
                        temps[k] = rows2[k].heure;
                    }
                    let leTemps = fonctions_calcul.temps(temps);

                    let latLong = [];
                    for (let k = 0; k < rows2.length; k++) {
                        latLong.push([rows2[k].latitude,rows2[k].longitude]);
                    }
                    let distance = fonctions_calcul.calculDistanceTrajet(latLong);

                    let freqCard = [];
                    for (let k = 0; k < rows2.length; k++) {
                        freqCard [k] = rows2[k].cardio_frequency;
                    }
                    let moyenneFreqCard = fonctions_calcul.moyenneFreqCard(freqCard);
                    let minMaxFreq = fonctions_calcul.minFreqCard(freqCard) + ' - '+ fonctions_calcul.maxFreqCard(freqCard);
                    infosTab.push([rows[j].description,rows[j].date,heure,leTemps,distance,moyenneFreqCard,minMaxFreq]);
                    finishedCount++;
                    if (finishedCount == rows.length) {
                        callback(infosTab);
                    }
                });
            };
        });
    });
};




