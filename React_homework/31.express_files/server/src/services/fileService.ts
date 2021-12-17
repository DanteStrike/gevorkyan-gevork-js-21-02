import {Request, Response} from 'express';
import FileRepository from '../repositories/fileRepository';
import logger from '../logger';
import {LoggerMessages} from '../constants/loggerMessages';

class FileService {
  static getFile(req: Request, res: Response) {
    logger.info(LoggerMessages.FileService.GET_FILE_INPUT_PARAMS);
    FileRepository.getFileContent()
      .then((result) => {
        const code = 200;
        const response = JSON.stringify(result);
        logger.info(LoggerMessages.FileService.GET_FILE_SUCCESS, code, response);
        res.status(code).send(response);
      })
      .catch((err) => {
        const code = 500;
        logger.info(LoggerMessages.FileService.GET_FILE_ERROR, code, err);
        res.status(code).json(`Internal Server Error`);
      });
  }

  static updateFile(req: Request, res: Response) {
    logger.info(LoggerMessages.FileService.UPDATE_FILE_INPUT_PARAMS, JSON.stringify(req.body));

    if (req.body.file === undefined) {
      logger.info(LoggerMessages.FileService.UPDATE_FILE_INPUT_PARAMS_FILE);
      res.status(404).json(`Not found: file params undefined`);
      return;
    }

    FileRepository.updateFileContent(req.body.file)
      .then((result) => {
        const code = 200;
        const response = JSON.stringify(result);
        logger.info(LoggerMessages.FileService.UPDATE_FILE_SUCCESS, code, response);
        res.status(code).send(response);
      })
      .catch((err) => {
        const code = 500;
        logger.info(LoggerMessages.FileService.UPDATE_FILE_ERROR, code, err);
        res.status(code).json(`Internal Server Error`);
      });
  }
}

export default FileService;
