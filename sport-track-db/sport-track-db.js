let db_connection = require('./sqlite_connection');
let user_dao = require('./user_dao');
let activity_dao = require('./activity_dao');
let activity_entry_dao = require('./activity_entry_dao');
module.exports = {db: db_connection, user_dao: user_dao, activity_dao: activity_dao, activity_entry_dao: activity_entry_dao};