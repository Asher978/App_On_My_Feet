const db = require('../db/config');

const User = {};

User.findByUserName = (userName, firstname, lastname, email) => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE username = $1
  `, [userName, firstname, lastname, email]);
};

User.create = user => {
  return db.one(`
    INSERT INTO users
    (username, email, password_digest, firstname, lastname)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `, [user.username, user.email, user.password_digest, user.firstname, user.lastname]);
};

User.findUserMember = (id) => {
  return db.manyOrNone(`
    SELECT * FROM members
    WHERE user_id = $1
  `, [id]);
};

module.exports = User;