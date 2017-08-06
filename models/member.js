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

Member.create = (member, userid) => {
    return db.one(`
        INSERT INTO members
        (first_name, last_name, h_marathon, f_marathon, t_miles, pic, user_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING * 
    `, [member.first_name, member.last_name, member.h_marathon, member.f_marathon, member.t_miles, member.pic, userid]);
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

// for posting member runs
Member.createRun = (run, id) => {
     return db.one(`
         INSERT INTO runs
         (rundate, milesRan, street1, street2, city, member_id, lat, log)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
         RETURNING *
   `, [run.rundate, run.milesRan, run.street1, run.street2, run.city, id, run.lat, run.log]);
}

Member.RunsById = (id) => {
    return db.query(`
        SELECT * FROM runs
        WHERE member_id = $1
    `, [id]);
}

// for posting comments
Member.createComment = (comment, id) => {
    return db.one(`
        INSERT INTO comments
        (comments, rcvngmember, lvngmember)
        VALUES ($1, $2, $3)
        RETURNING *
    `, [comment.comments, id, process.env.user_id])
}





module.exports = Member;