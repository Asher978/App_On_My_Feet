const db = require('../db/config');

const Member = {};

Member.findAll = () => {
    return db.query('SELECT * FROM members');
};

Member.findById = (id) => {
    return db.oneOrNone(`
        SELECT * FROM members
        WHERE id = $1
    `, [id]);
}

Member.create = (member) => {
    return db.One(`
        INSERT INTO members
        (first_name, last_name, h_marathon, f_marathon)
        VALUES ($1, $2, $3, $4)
        RETURNING * 
    `, [member.first_name, member.last_name, member.h_marathon, member.f_marathon]);
}


module.exports = Member;