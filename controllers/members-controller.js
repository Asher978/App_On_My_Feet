const Member = require('../models/member');

const memberController = {};

memberController.index = (req, res) => {
    Member.findAll()
    .then(members => {
        res.render('members/member-index', {
            currentPage: 'index',
            data: members, 
        });
    }).catch(err => {
        console.log(err);
        res.status(500).josn(err);
    })
};




module.exports = memberController;