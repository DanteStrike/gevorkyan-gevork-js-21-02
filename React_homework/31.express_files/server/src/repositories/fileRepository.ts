import fsp from 'fs/promises';
import fileConfig from '../configs/fileConfig';
import logger from '../logger';
import {LoggerMessages} from '../constants/loggerMessages';

const {path, name, unicode} = fileConfig;
const fullPath = `${path}/${name}`;

class FileRepository {
  static getFileContent(): Promise<string> {
    logger.info(LoggerMessages.FileRepository.GET_FILE_CONTENT_READ);
    return fsp
      .readFile(fullPath, unicode)
      .then((result) => {
        logger.info(LoggerMessages.FileRepository.GET_FILE_CONTENT_READ_SUCCESS, result);
        return result;
      })
      .catch((err) => {
        logger.info(LoggerMessages.FileRepository.GET_FILE_CONTENT_READ_ERROR, err);
        return Promise.reject(err);
      });
  }

  static updateFileContent(data: string): Promise<string> {
    logger.info(LoggerMessages.FileRepository.UPDATE_FILE_CONTENT_WRITE);
    return fsp
      .writeFile(fullPath, data, unicode)
      .then(() => {
        logger.info(LoggerMessages.FileRepository.UPDATE_FILE_CONTENT_WRITE_SUCCESS);
        logger.info(LoggerMessages.FileRepository.UPDATE_FILE_CONTENT_READ);
        return FileRepository.getFileContent();
      })
      .catch((err) => {
        logger.info(LoggerMessages.FileRepository.UPDATE_FILE_CONTENT_WRITE_ERROR, err);
        return Promise.reject(err);
      });
  }
}

export default FileRepository;
