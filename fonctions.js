function calculDistance2PointsGPS(latitude1, longitude1,latitude2,longitude2){
    var lat1 = Number(latitude1);
    var long1 = Number(longitude1);
    var lat2 = Number(latitude2);
    var long2 = Number(longitude2);

    var earthRadius = 6371000; // Terre = sphère de 6371km de rayon
    var dLat = degrees_to_radians(lat2 - lat1);
    var dLong = degrees_to_radians(long2 - long1);

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * atan2(sqrt($a), sqrt(1 - $a)); // pas la bonne écriture
    var distance = earthRadius * c;

    return distance;
}

function degrees_to_radians(degrees){
  var pi = Math.PI;
  return degrees * (pi/180);
}

activite = {
    bpmMoy : 2,
    latitude : function() {

    }
}

objet.activite