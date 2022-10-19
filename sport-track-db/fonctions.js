class Fonctions{
  calculDistance2PointsGPS(latitude1, longitude1,latitude2,longitude2){
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

  degrees_to_radians(degrees){
    let pi = Math.PI;
    return degrees * (pi/180);
  };

  calculDistanceTrajet(lActivity){
    let ret = 0;
    for (let i = 0; i < lActivity.length - 1;i++){
      ret += this.calculDistance2PointsGPS(lActivity[i][0],lActivity[i][1],lActivity[i+1][0],lActivity[i+1][1]);
    };
    return ret;
  };

  moyenneFreqCard(freqCard) {
    let sum = 0;
    for (let i = 0; i < freqCard.length; i++) {
      sum = sum + freqCard[i];
    }
    return sum/freqCard.length;
  }

  minFreqCard(freqs){
    return Math.min(...freqs);
  }

  maxFreqCard(freqs){
    return Math.max(...freqs);
  }

  temps(heures){
    String.prototype.toMinutes=function(){return parseInt(this.substr(0,2),10)*60+parseInt(this.substr(3,2),10)};
    Number.prototype.withLeadingZero=function(){var str=''+this;while(str.length<2) str='0'+str;return str}
    Number.prototype.toHHMMString=function(){return Math.floor(this/60).withLeadingZero()+':'+(this%60).withLeadingZero();}
    let min = heures[0].toMinutes();
    let max = heures[0].toMinutes();
    for (let i = 1; i < heures.length; i++){
        if (heures[i].toMinutes() < min){
            min = heures[i].toMinutes();
        } else if (heures[i].toMinutes() > max){
            max = heures[i].toMinutes();
        }
    }
    let duree = (min-max)
    duree = duree.toHHMMString();
    return duree;
  }
}

let instance = new Fonctions();

let obj ={
  activity:{
    date:"01/09/2022",
    description : "IUT -> RU"
  },
  data:[
    {time:"13:00:00",cardio_frequency:99,latitude:47.644795,longitude:-2.776605,altitude:18},
    {time:"13:00:05",cardio_frequency:100,latitude:47.646870,longitude:-2.778911,altitude:18},
    {time:"13:00:10",cardio_frequency:102,latitude:47.646197,longitude:-2.780220,altitude:18},
    {time:"13:00:15",cardio_frequency:100,latitude:47.646992,longitude:-2.781068,altitude:17},
    {time:"13:00:20",cardio_frequency:98,latitude:47.647867,longitude:-2.781744,altitude:16},
    {time:"13:00:25",cardio_frequency:103,latitude:47.648510,longitude:-2.780145,altitude:16}
  ]
};

console.log(instance.calculDistanceTrajet(obj));

let freqCard = [2,9,3,1];
console.log(instance.moyenneFreqCard(freqCard));

let heure = ["13:00:00","13:00:10","13:00:25"];
console.log(instance.temps(heure));

let fonc = new Fonctions();
module.exports = fonc;