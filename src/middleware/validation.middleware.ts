import { Request, Response, NextFunction, RequestHandler } from 'express';
import joi from 'joi';

function validationMiddleware(schema: joi.Schema): RequestHandler {
    return async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        const validationOption = {
            abortEarly: false,
        };
    };
}
