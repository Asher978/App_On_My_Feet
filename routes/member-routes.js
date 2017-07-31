const express = require('express');
const memberRoutes = express.Router();
const memberController = require('../controllers/members-controller');

memberRoutes.get('/', memberController.index);




module.exports = memberRoutes;