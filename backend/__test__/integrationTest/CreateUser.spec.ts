 import { getRepository } from 'typeorm';
 import connection from '../mockConnectionToDatabase/mockConnectionTest';
 import User from '../../src/app/models/User';

 const request = require('supertest');
 const app = require('../../__test__/mockConnectionToDatabase/mockIndex'); 



 describe('Create User', () => {
  
     beforeAll(async () => {
       await connection.create();
     });

     afterAll(async ()=>{
       await connection.close();
     });

     beforeEach(async () => {
       await connection.clear();
     });

     it('should be able to create a user', async () => {
         const repository = getRepository(User);

         const createUser = await repository.create({
             email: 'gustavo.ribeiro@gruponzn.com',
             password: '123123'
         });

         const response = await request(app)
             .post('/signup')
             .send({
                 email: createUser.email, 
                 password: createUser.password 
             });

         expect(response.status).toBe(200);
     })

     it('should be return status code 409, if user already registered.',  async () => {
       const repository = getRepository(User);

       const createUser = await repository.create({
         email: 'gustavo.ribeiro@gruponzn.com',
         password: '123456'
       });

       await request(app)
       .post('/signup')
       .send({
           email: createUser.email,
           password: createUser.password
       });

       const response = await request(app)
       .post('/signup')
       .send({
           email: createUser.email,
           password: createUser.password
       });

       expect(response.status).toBe(409);

     });
 });