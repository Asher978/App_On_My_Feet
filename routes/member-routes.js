const express = require('express');
const memberRoutes = express.Router();
const memberController = require('../controllers/members-controller');


memberRoutes.get('/', memberController.index);

memberRoutes.get('/add', (req, res) => {
    res.render('members/member-add', {
        currentPage: 'add',
    });
});
memberRoutes.get('/:id/addRun', (req, res) => {
    res.render('members/member-addRun', {
        currentPage: 'addRun',
        id: req.params.id,
    });
});


memberRoutes.get('/:id', memberController.show);
memberRoutes.post('/:id/new', memberController.createRun);
memberRoutes.get('/:id/edit', memberController.edit);
memberRoutes.put('/:id', memberController.update);
memberRoutes.delete('/:id', memberController.delete);
memberRoutes.post('/', memberController.create);



module.exports = memberRoutes;