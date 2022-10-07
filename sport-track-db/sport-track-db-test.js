var user_dao = require('./sport-track-db').user_dao;
var db = require('./sport-track-db').db_connection;

all = user_dao.findAll((err, result) => console.log(err, result));
// if (all !== undefined) {
//     for (let i = 0; i < all.length; i++) {
//         user_dao.delete(i, (err) => callback(err, console.log("L'utilisateur a été supprimé à la ligne ")));
//     }
// }

// user_dao.insert(['cacao', 'enzo', '13/08/2003', 'Homme', 180, 80, 'enzocacao@gmail.com', 'enzocacao'], 
//                     (err, result) => callback(err, ("Insertion réussie à la ligne " + result)));

