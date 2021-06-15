const express = require('express');

import ControllerUser from './controller/ControllerUser';
import AuthController from './controller/AuthController';

const routes = express.Router();

// routes.get('/login', ControllerUser.index);
routes.post('/signup', ControllerUser.store);
routes.post('/signin', AuthController.index);

module.exports = routes;