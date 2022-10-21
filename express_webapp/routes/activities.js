var express = require('express');
var router = express.Router();
var user_dao = require('sport-track-db').user_dao;
var activity_dao = require('sport-track-db').activity_dao;
var activity_entry_dao = require('sport-track-db').activity_entry_dao;
var fonctions_calcul = require('sport-track-db').fonctions_calcul;

module.exports = function showActivities(userId, callback){
    let infosTab = [];

    activity_dao.findByUser(userId, (rows) => {
        let finishedCount = 0;
        if (rows.length === 0) {
            callback(infosTab);
        }

        for (let j=0; j < rows.length;j++) {
            activity_entry_dao.findByActivity(rows[j].id, (rows2) => {
                console.log(rows2);
                let heure = rows2[0].heure;
                let temps = [];
                for (let k = 0; k < rows2.length; k++) {
                    temps[k] = rows2[k].heure;
                }
                // let leTemps = fonctions_calcul.temps(temps);

                let latLong = [];
                for (let k = 0; k < rows2.length; k++) {
                    latLong.push([rows2[k].latitude,rows2[k].longitude]);
                }
                let distance = fonctions_calcul.calculDistanceTrajet(latLong);

                let freqTab = [];
                for (let k = 0; k < rows2.length; k++) {
                    freqTab[k] = rows2[k].freqCard;
                }
                let moyenneFreqCard = fonctions_calcul.moyenneFreqCard(freqTab);
                let minMaxFreq = fonctions_calcul.minFreqCard(freqTab) + ' - '+ fonctions_calcul.maxFreqCard(freqTab);
                infosTab.push([rows[j].description,rows[j].date,heure,'10:00',distance,moyenneFreqCard,minMaxFreq]);
                finishedCount++;
                if (finishedCount == rows.length) {
                    callback(infosTab);
                }
            });
        };
    });
};




