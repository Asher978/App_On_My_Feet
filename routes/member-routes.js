const express = require('express');
const memberRoutes = express.Router();
const memberController = require('../controllers/members-controller');

memberRoutes.get('/', memberController.index);
memberRoutes.post('/', memberController.create);
memberRoutes.get('/add', (req, res) => {
    res.render('members/member-add', {
        currentPage: 'add',
    });
});

memberRoutes.get('/:id', memberController.show);
memberRoutes.get('/:id/edit', memberController.edit);
memberRoutes.put('/:id', memberController.update);
memberRoutes.delete('/:id', memberController.delete);




module.exports = memberRoutes;