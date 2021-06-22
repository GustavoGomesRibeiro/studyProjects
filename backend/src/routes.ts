const express = require('express');
import AuthMiddlere from './middlewares/AuthMiddleware'; 

import UserCreateController from './controller/UserCreateController';
import AuthController from './controller/AuthController';

const routes = express.Router();

routes.post('/signup', UserCreateController.store);

routes.get('/signin', AuthMiddlere, AuthController.index);
routes.post('/signin', AuthController.store);

module.exports = routes;