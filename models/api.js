const db = require('../db/config');
const Api = {};

Api.findById = (id) => {
    return db.query(`SELECT lat, log, milesRan from runs WHERE member_id = $1
    `, [id]);
}
module.exports = Api;