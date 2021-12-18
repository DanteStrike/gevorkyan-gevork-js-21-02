import {Router} from 'express';
import CommentService from "../services/commentService";

const commentRouter = Router()
commentRouter.get(`/:id/comment`, CommentService.getComments);

export default commentRouter;
