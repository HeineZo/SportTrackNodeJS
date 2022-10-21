const Fonctions = function() {
  
  this.calculDistance2PointsGPS = (latitude1, longitude1,latitude2,longitude2) => {
    let lat1 = Number(latitude1);
    let long1 = Number(longitude1);
    let lat2 = Number(latitude2);
    let long2 = Number(longitude2);

    let earthRadius = 6371000; // Terre = sphère de 6371km de rayon
    let dLat = this.degrees_to_radians(lat2 - lat1);
    let dLong = this.degrees_to_radians(long2 - long1);

    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.degrees_to_radians(lat1)) * Math.cos(this.degrees_to_radians(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
    let distance = earthRadius * c;

    return distance;
  };

  this.degrees_to_radians = (degrees) => {
    let pi = Math.PI;
    return degrees * (pi/180);
  };

  this.calculDistanceTrajet = (lActivity) => {
    let ret = 0;
    for (let i = 0; i < lActivity.length - 1;i++){
      ret += this.calculDistance2PointsGPS(lActivity[i][0],lActivity[i][1],lActivity[i+1][0],lActivity[i+1][1]);
    };
    return ret;
  };

  this.moyenneFreqCard = (freqCard) => {
    let sum = 0;
    for (let i = 0; i < freqCard.length; i++) {
      sum = sum + freqCard[i];
    }
    return sum/freqCard.length;
  }

  this.minFreqCard = (freqs) => {
    return Math.min(...freqs);
  }

  this.maxFreqCard = (freqs) => {
    return Math.max(...freqs);
  }

  this.temps = (heures) => {
    function getDateFromHours(time) {
      time = time.split(':');
      let now = new Date();
      return new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...time);
    }
    function leadingZero(i) {
      return (i < 10) ? "0" + i : "" + i;
    }

    let min = getDateFromHours(heures[0]);
    let max = getDateFromHours(heures[0]);
    for (let i = 1; i < heures.length; i++){
        if (getDateFromHours(heures[i]) < min){
            min = getDateFromHours(heures[i]);
        } else if (getDateFromHours(heures[i]) > max){
            max = getDateFromHours(heures[i]);
        }
    }
    let duree = new Date(Math.abs(max-min));
    duree = `${leadingZero(duree.getMinutes())}:${leadingZero(duree.getSeconds())}`;
    return duree;
  }
}


let fonc = new Fonctions();
module.exports = fonc;