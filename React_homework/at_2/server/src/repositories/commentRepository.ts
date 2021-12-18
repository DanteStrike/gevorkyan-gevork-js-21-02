import {AxiosError} from "axios";
import {dummyAPI, logger} from "../utils";
import {LoggerMessages} from "../constants/loggerMessages";
import {IComments} from "../types/lists";
import ErrorMapper from "../mappers/errorMapper";

class CommentRepository {
  static getCommentsFromDummyAPI(limit: string, page: string) {
    const requestURL = `/comment?page=${page}&limit=${limit}`;

    logger.info(LoggerMessages.CommentRepository.GET_COMMENTS_FROM_DUMMY_API_START, requestURL);

    return dummyAPI.get<IComments>(requestURL)
      .then((response) => {

        logger.info(LoggerMessages.CommentRepository.GET_COMMENTS_FROM_DUMMY_API_SUCCESS, response.status, response.data);

        return response;
      })
      .catch((error: AxiosError) => {
        const mappedErr = ErrorMapper.mapAxiosError(error);

        logger.info(LoggerMessages.CommentRepository.GET_COMMENTS_FROM_DUMMY_API_ERROR, mappedErr.status, mappedErr.data);

        return Promise.reject(mappedErr);
      });
  }
}

export default CommentRepository;
