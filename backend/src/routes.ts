const express = require('express');

const ControllerUser = require('./controller/ControllerUser');

const routes = express.Router();

routes.get('/', ControllerUser.index);

module.exports = routes;