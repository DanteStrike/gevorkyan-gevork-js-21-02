import {Router} from 'express';
import commonRouter from "./commonRouter";
import userRouter from "./userRouter";

const APIRouter = Router();
APIRouter.use(`/user`, userRouter);

const router = Router();
router.use(`/api`, APIRouter);
router.use(`*`, commonRouter);

export default router;
