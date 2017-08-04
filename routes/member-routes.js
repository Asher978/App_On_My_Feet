const express = require('express');
const memberRoutes = express.Router();
const memberController = require('../controllers/members-controller');
const authHelpers = require('../services/auth/auth-helpers');
const markerHelper = require('../services/marker/marker-helper');
// const {getLngLat} = require('../services/marker/marker-helper');


memberRoutes.get('/', memberController.index);

// adding a memeber
memberRoutes.get('/add', authHelpers.loginRequired, (req, res) => {
    res.render('members/member-add', {
        currentPage: 'add',
    });
});

// getting runs by member-id
memberRoutes.get('/:id/run', memberController.showRuns);


// adding a run by member ID
memberRoutes.get('/:id/addRun', (req, res) => {
    res.render('members/member-addRun', {
        currentPage: 'addRun',
        id: req.params.id,
    });
});

memberRoutes.post('/:id/new', markerHelper.getLngLat, memberController.createRun);
memberRoutes.get('/:id/edit', memberController.edit);
memberRoutes.get('/:id', memberController.show);
memberRoutes.put('/:id', memberController.update);
memberRoutes.delete('/:id', memberController.delete);
memberRoutes.post('/', authHelpers.loginRequired, memberController.create);



module.exports = memberRoutes;