import { Request, Response, NextFunction } from 'express';
import HttpExeption from '@utilis/exceptions/http.exception';

function errorMiddleware(
    error: HttpExeption,
    req: Request,
    res: Response,
    next: NextFunction
): void {
    const status = error.status || 500;
    const message = error.message || 'something went wrong';

    res.status(status).send({
        status,
        message,
    });
}

export default errorMiddleware;
