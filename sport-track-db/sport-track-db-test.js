const user = require('./sport-track-db').user_dao;
const activities = require('./sport-track-db').activity_dao;
const activities_entry = require('./sport-track-db').activity_entry_dao;

console.log('\n --- Partie utilisateur --- \n');
user.findAll((data) => {
    if (data.length > 0) {
        for (result of data) {
            user.delete(result.id);
        }
    }
    user.insert(['cacao', 'enzo', '13/08/2003', 'Homme', 180, 80, 'enzocacao@gmail.com', 'enzocacao'],
        (newUserID) => {
            user.findByKey(newUserID, () => {
                user.update(newUserID, ['cacao', 'ANNITO', '28/12/2003', 'Femme', 161, 55, 'annacacao@gmail.com', 'annacacao'], () => {
                    user.findByKey(newUserID, () => {
                        console.log('\n --- Partie activité --- \n');
                    });


                        activities.findAll((data_activity) => {
                            if (data_activity.length > 0) {
                                for (activity of data_activity) {
                                    activities.delete(activity.id);
                                }
                            }
                        
                            activities_entry.findAll((data_entry) => {
                                if (data_entry.length > 0) {
                                    for (activity_entry of data_entry) {
                                        activities_entry.delete(activity_entry.id);
                                    }
                                }
                            })
                        
                            activities.insert(['25/11/2022', 'Maison -> Boulangerie', 1],
                            (newActivityID) => {
                                activities.findAll((data_activity) => {
                                    console.log(data_activity);
                                    activities_entry.insert(['13:03:12', 99, 47.644, -2.77, 18, newActivityID], (newActivityEntryID) => {
                                        activities_entry.findByActivity(newActivityID, () => {
                                            activities_entry.update(['12:00:00', 100, 50, -3, 20, newActivityID], () => {
                                                activities_entry.findByActivity(newActivityID, () => {
                                                    activities.update(['13/08/2003', 'Salle de sport -> Maison', newUserID, newActivityID], (newActivityID) => {
                                                        activities.findByUser(newActivityID, () => {});
                                                    })
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
            });
        });
    });
});







