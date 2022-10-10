function calculDistance2PointsGPS(latitude1, longitude1,latitude2,longitude2){
  let lat1 = Number(latitude1);
  let long1 = Number(longitude1);
  let lat2 = Number(latitude2);
  let long2 = Number(longitude2);

  let earthRadius = 6371000; // Terre = sphère de 6371km de rayon
  let dLat = degrees_to_radians(lat2 - lat1);
  let dLong = degrees_to_radians(long2 - long1);

  let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(degrees_to_radians(lat1)) * Math.cos(degrees_to_radians(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
  let distance = earthRadius * c;

  return distance;
};

function degrees_to_radians(degrees){
  let pi = Math.PI;
  return degrees * (pi/180);
};

function calculDistanceTrajet(lActivity){
  let ret = 0;
  for (let i = 0; i < lActivity.data.length - 1;i++){
    ret += calculDistance2PointsGPS(lActivity.data[i].latitude,lActivity.data[i].longitude,lActivity.data[i+1].latitude,lActivity.data[i+1].longitude);
  };
  return ret;
};

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

let result = calculDistanceTrajet(obj);
console.log(result);
