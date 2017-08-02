const express = require('express');
const memberRoutes = express.Router();
const memberController = require('../controllers/members-controller');
const markerHelper = require('../services/marker/marker-helper');
// const {getLngLat} = require('../services/marker/marker-helper');


memberRoutes.get('/', memberController.index);

// adding a memeber
memberRoutes.get('/add', (req, res) => {
    res.render('members/member-add', {
        currentPage: 'add',
    });
});

// getting runs by member-id
memberRoutes.get('/:id/run', memberController.showRuns);
// memberRoutes.post('/:id/run', markerHelper.googleMarker, (req, res) => {
//     res.render('/members/member-run')
// });

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
memberRoutes.post('/', memberController.create);



module.exports = memberRoutes;