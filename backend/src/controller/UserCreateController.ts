import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../app/models/User';

class UserCreateController {
    async index(req: Request, res: Response){
        const repository = getRepository(User);

        const getUser = await repository.find({select: ['id', 'email']});
        
        return res.json({
            getUser
        })
    }
    
    async store(req: Request, res: Response) {
        const repository = getRepository(User);

        const { email, password } = req.body;

        const verifyIfExist = await repository.findOne({ where: { email } });

        if(verifyIfExist){
            return res.status(409).json({message: 'User already exists'});
        }

        const createUser = repository.create({ email, password });
        await repository.save(createUser);

        return res.json(createUser);
        
    } 
};

export {UserCreateController}