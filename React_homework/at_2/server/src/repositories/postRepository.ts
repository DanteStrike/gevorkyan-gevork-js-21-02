import {AxiosError} from 'axios';
import {dummyAPI, logger} from '../utils';
import {IComments, IPosts} from '../types/lists';
import {LoggerMessages} from '../constants/loggerMessages';
import ErrorMapper from '../mappers/errorMapper';
import {IPostPreview} from '../types/post';

class PostRepository {
  static getPostFromDummyAPI(id: string) {
    const requestURL = `/post/${id}`;

    logger.info(LoggerMessages.PostRepository.GET_POST_FROM_DUMMY_API_START, requestURL);

    return dummyAPI
      .get<IPostPreview>(requestURL)
      .then((response) => {
        logger.info(LoggerMessages.PostRepository.GET_POST_FROM_DUMMY_API_SUCCESS, response.status, response.data);

        return response;
      })
      .catch((error: AxiosError) => {
        const mappedErr = ErrorMapper.mapAxiosError(error);

        logger.info(LoggerMessages.PostRepository.GET_POST_FROM_DUMMY_API_ERROR, mappedErr.status, mappedErr.data);

        return Promise.reject(mappedErr);
      });
  }

  static getPostsFromDummyAPI(limit: string, page: string) {
    const requestURL = `/post?page=${page}&limit=${limit}`;

    logger.info(LoggerMessages.PostRepository.GET_POSTS_FROM_DUMMY_API_START, requestURL);

    return dummyAPI
      .get<IPosts>(requestURL)
      .then((response) => {
        logger.info(LoggerMessages.PostRepository.GET_POSTS_FROM_DUMMY_API_SUCCESS, response.status, response.data);

        return response;
      })
      .catch((error: AxiosError) => {
        const mappedErr = ErrorMapper.mapAxiosError(error);

        logger.info(LoggerMessages.PostRepository.GET_POSTS_FROM_DUMMY_API_ERROR, mappedErr.status, mappedErr.data);

        return Promise.reject(mappedErr);
      });
  }

  static getPostCommentsFromDummyAPI(id: string, limit: string, page: string) {
    const requestURL = `/post/${id}/comment?page=${page}&limit=${limit}`;

    logger.info(LoggerMessages.PostRepository.GET_POST_COMMENTS_FROM_DUMMY_API_START, requestURL);

    return dummyAPI
      .get<IComments>(requestURL)
      .then((response) => {
        logger.info(
          LoggerMessages.PostRepository.GET_POST_COMMENTS_FROM_DUMMY_API_SUCCESS,
          response.status,
          response.data
        );

        return response;
      })
      .catch((error: AxiosError) => {
        const mappedErr = ErrorMapper.mapAxiosError(error);

        logger.info(
          LoggerMessages.PostRepository.GET_POST_COMMENTS_FROM_DUMMY_API_ERROR,
          mappedErr.status,
          mappedErr.data
        );

        return Promise.reject(mappedErr);
      });
  }
}

export default PostRepository;
