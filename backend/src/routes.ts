const express = require('express');
import AuthMiddlere from './middlewares/AuthMiddleware'; 

import { UserCreateController } from './controller/UserCreateController';
import AuthController from './controller/AuthController';

const routes = express.Router();
const UserCreate = new UserCreateController();

routes.post('/signup', UserCreate.store);
routes.get('/signup', AuthMiddlere, UserCreate.index);

routes.post('/signin', AuthController.store);

module.exports = routes;