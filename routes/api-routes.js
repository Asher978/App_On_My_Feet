const express = require('express');
const apiRoutes = express.Router();
const apiController = require('../controllers/api-controller');

apiRoutes.get('/:id', apiController.show);


module.exports = apiRoutes;