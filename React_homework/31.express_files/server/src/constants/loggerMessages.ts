export namespace LoggerMessages {
  export enum AppCore {
    FATAL_ERROR = `app crashed with unexpected fatal error`,
  }

  export enum FileService {
    GET_FILE_INPUT_PARAMS = `[FileService.getFile] NO NEED INPUT PARAMS`,
    GET_FILE_SUCCESS = '[FileService.getFile] success status={} response={}',
    GET_FILE_ERROR = '[FileService.getFile] error status={} response={}',
    UPDATE_FILE_INPUT_PARAMS = '[FileService.updateFile] INPUT PARAMS body={}',
    UPDATE_FILE_INPUT_PARAMS_FILE = '[FileService.updateFile] INPUT PARAMS body.file undefined',
    UPDATE_FILE_SUCCESS = '[FileService.updateFile] success status={} response={}',
    UPDATE_FILE_ERROR = '[FileService.updateFile] error status={} response={}',
  }

  export enum FileRepository {
    GET_FILE_CONTENT_READ = '[FileRepository.getFileContent] invoke fs.readFile',
    GET_FILE_CONTENT_READ_SUCCESS = '[FileRepository.getFileContent] fs.readFile success result={}',
    GET_FILE_CONTENT_READ_ERROR = '[FileRepository.getFileContent] fs.readFile error {}',
    UPDATE_FILE_CONTENT_WRITE = '[FileRepository.updateFileContent] invoke fs.writeFile',
    UPDATE_FILE_CONTENT_WRITE_SUCCESS = '[FileRepository.updateFileContent] fs.writeFile success',
    UPDATE_FILE_CONTENT_WRITE_ERROR = '[FileRepository.updateFileContent] fs.writeFile error {}',
    UPDATE_FILE_CONTENT_READ = '[FileRepository.updateFileContent] invoke [FileRepository.getFileContent]',
  }
}

type ValuesOf<E> = E[keyof E];
type Enums = typeof LoggerMessages;
export type LoggerMessagesType = {
  [k in keyof Enums]: ValuesOf<Enums[k]>;
}[keyof Enums];
