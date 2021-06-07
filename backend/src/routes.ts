const express = require('express');

const ControllerUser = require('./controller/ControllerUser');

const routes = express.Router();

routes.get('/login', ControllerUser.index);

module.exports = routes;