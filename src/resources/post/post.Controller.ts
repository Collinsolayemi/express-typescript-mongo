import { Router, Request, Response, NextFunction } from 'express';
import Controller from '@utilis/interfaces/controllers.interface';
import HttpExeption from '@utilis/exceptions/http.exception';
import validationMiddleware from '@middleware/error.middleware';
import validate from '@resources/post/post.validation';
import postService from '@resources/post/post.service';

class PostController implements Controller {
    public path = '/posts';
    public router = Router();

    constructor() {
        this.initialiseRoute();
    }

    private initialiseRoute(): void {}
}
