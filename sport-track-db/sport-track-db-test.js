const user_dao = require('./sport-track-db').user_dao;
const db = require('./sport-track-db').db_connection;

user_dao.findAll((data) => {
    if (data.length > 0) {
        for (user of data) {
            user_dao.delete(user.id);
        }
    }
    user_dao.insert(['cacao', 'enzo', '13/08/2003', 'Homme', 180, 80, 'enzocacao@gmail.com', 'enzocacao'],
        () => {
            user_dao.update(1, ['cacao', 'ANNITO', '28/12/2003', 'Femme', 161, 55, 'annacacao@gmail.com', 'annacacao'], () => {
                user_dao.findByKey(1, () => {});
            });
        });
});






