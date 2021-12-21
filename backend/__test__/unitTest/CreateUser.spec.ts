import { getRepository } from 'typeorm';
import User from '../../src/app/models/User';
import connection from '../mockConnectionToDatabase/mockConnectionTest';

import { UserCreateController } from "../../src/controller/UserCreateController";


describe("UserCreateController", () => {

    let createUserController: UserCreateController; 

    beforeAll( async () => {
        await connection.create();
        createUserController = new UserCreateController();
    })

    afterAll(async ()=>{
      await connection.close();
    });

    beforeEach(async () => {
      await connection.clear();
    });

    it('should be able to create a new user', async() => {
        const repository = getRepository(User);

        const createNewUser = await repository.create({
            email: 'gustavo.ribeiro@gruponzn.com',
            password: '123123'
        });


        expect(createNewUser).toBe(createNewUser);

    });
})