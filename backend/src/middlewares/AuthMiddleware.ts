const authConfig = require('../config/auth.json');
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'; 

interface Token {
    id: string,
    iat: number,
    exp: number,
}

export default function(req: Request, res: Response, next: NextFunction) {

    const {authorization} = req.headers;

    if(!authorization){
        return res.sendStatus(401);
    }

    const token = authorization.replace('Bearer','').trim();

    try {
        const data = jwt.verify(token, authConfig.secret);

        const { id } = data as Token;

        req.userId = id;
        
        return next();

    } catch (error) {
        return res.sendStatus(401)
    }
}