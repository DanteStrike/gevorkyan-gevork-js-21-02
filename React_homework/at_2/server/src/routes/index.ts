import {Router} from 'express';
import commonRouter from "./commonRouter";
import userRouter from "./userRouter";
import postRouter from "./postRouter";
import commentRouter from "./commentRouter";

const APIRouter = Router();
APIRouter.use(`/user`, userRouter);
APIRouter.use(`/post`, postRouter);
APIRouter.use(`/post`, commentRouter);

const router = Router();
router.use(`/api`, APIRouter);
router.use(`*`, commonRouter);

export default router;
