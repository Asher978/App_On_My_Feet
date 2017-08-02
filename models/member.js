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
    return db.one(`
        INSERT INTO members
        (first_name, last_name, h_marathon, f_marathon, t_miles, pic)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING * 
    `, [member.first_name, member.last_name, member.h_marathon, member.f_marathon, member.t_miles, member.pic]);
}

Member.update = (member, id) => {
    return db.one(`
        UPDATE members SET
        first_name = $1,
        last_name = $2,
        h_marathon = $3,
        f_marathon = $4,
        t_miles = $5,
        pic = $6
        WHERE id = $7
        RETURNING * 
    `, [member.first_name, member.last_name, member.h_marathon, member.f_marathon, member.t_miles, member.pic, id]);
}

Member.destroy = (id) => {
    return db.none(`
        DELETE FROM members
        WHERE id = $1    
    `, [id]);
}

// for logging member runs
Member.createRun = (run, id) => {
     return db.one(`
         INSERT INTO runs
         (rundate, milesRan, street1, street2, city, member_id)
         VALUES ($1, $2, $3, $4, $5, $6)
         RETURNING *
   `, [run.rundate, run.milesRan, run.street1, run.street2, run.city, id]);
}



module.exports = Member;