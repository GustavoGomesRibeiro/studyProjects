const authConfig = require('../config/auth.json'); 
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../app/models/User';

class AuthController {
    async index(req: Request, res: Response){
        const repository = getRepository(User);

        const getUser = await repository.find({select: ['id', 'email']});
        
        return res.json({
            getUser
        })
    }

    async store (req: Request, res: Response) {
        const repository = getRepository(User);
        const { email, password } = req.body

        const verifyIfExistUser = await repository.findOne({ where: { email }});

        if(!verifyIfExistUser){
            return res.sendStatus(401);
        }

        const isValidPassword = await bcrypt.compare(password, verifyIfExistUser.password )

        if(!isValidPassword){
            return res.sendStatus(401)
        }

        const token = jwt.sign({id: verifyIfExistUser.id}, authConfig.secret , { expiresIn: '1d' });
               
        return res.json({ 
            id: verifyIfExistUser.id,
            email: verifyIfExistUser.email,
            token,
        })
    }
}

export default new AuthController();