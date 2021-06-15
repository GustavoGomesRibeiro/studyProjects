import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../app/models/User';

class ControllerUser {

    async store(req: Request, res: Response) {
        const repository = getRepository(User);

        const { email, password } = req.body;

        const verifyIfExist = await repository.findOne({ where: { email } });

        if(verifyIfExist){
            return res.sendStatus(409);
        }

        const createUser = repository.create({ email, password });
        await repository.save(createUser);

        return res.json(createUser);
        
    } 
};

export default new ControllerUser();