import {Router} from 'express';
import FileService from '../services/fileService';

const fileRouter = Router();

fileRouter.get(``, FileService.getFile);
fileRouter.put(``, FileService.updateFile);

export default fileRouter;
