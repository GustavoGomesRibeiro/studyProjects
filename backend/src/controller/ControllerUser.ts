import { NextFunction, Request, Response, Router } from 'express';

module.exports = {

    async index(req: Request, res: Response) {
        return res.json({Hello: "It's works 🚀"});
    }
};