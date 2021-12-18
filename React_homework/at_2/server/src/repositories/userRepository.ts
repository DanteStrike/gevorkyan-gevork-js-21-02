import {AxiosError, AxiosResponse} from 'axios';
import {logger, dummyAPI} from '../utils';
import {LoggerMessages} from '../constants/loggerMessages';
import ErrorMapper from '../mappers/errorMapper';
import {IPosts, IUsers} from '../types/lists';
import {IUser} from '../types/user';

class UserRepository {
  static getUserByIDFromDummyAPI(id: string): Promise<AxiosResponse<IUser, any>> {
    const requestURL = `/user/${id}`;

    logger.info(LoggerMessages.UserRepository.GET_USER_BY_ID_FROM_DUMMY_API_START, requestURL);

    return dummyAPI
      .get<IUser>(requestURL)
      .then((response) => {
        logger.info(
          LoggerMessages.UserRepository.GET_USER_BY_ID_FROM_DUMMY_API_SUCCESS,
          response.status,
          response.data
        );

        return response;
      })
      .catch((error: AxiosError) => {
        const mappedErr = ErrorMapper.mapAxiosError(error);

        logger.info(
          LoggerMessages.UserRepository.GET_USER_BY_ID_FROM_DUMMY_API_ERROR,
          mappedErr.status,
          mappedErr.data
        );

        return Promise.reject(mappedErr);
      });
  }

  static getUserPostsFromDummyAPI(id: string, limit: string, page: string) {
    const requestURL = `/user/${id}/post?page=${page}&limit=${limit}`;

    logger.info(LoggerMessages.UserRepository.GET_USER_POSTS_FROM_DUMMY_API_START, requestURL);

    return dummyAPI
      .get<IPosts>(requestURL)
      .then((response) => {
        logger.info(
          LoggerMessages.UserRepository.GET_USER_POSTS_FROM_DUMMY_API_SUCCESS,
          response.status,
          response.data
        );

        return response;
      })
      .catch((error: AxiosError) => {
        const mappedErr = ErrorMapper.mapAxiosError(error);

        logger.info(
          LoggerMessages.UserRepository.GET_USER_POSTS_FROM_DUMMY_API_ERROR,
          mappedErr.status,
          mappedErr.data
        );

        return Promise.reject(mappedErr);
      });
  }

  static getUsersListFromDummyAPI(limit: string, page: string): Promise<AxiosResponse<IUsers, any>> {
    const requestURL = `/user?page=${page}&limit=${limit}`;

    logger.info(LoggerMessages.UserRepository.GET_USERS_LIST_FROM_DUMMY_API_START, requestURL);

    return dummyAPI
      .get<IUsers>(requestURL)
      .then((response) => {
        logger.info(
          LoggerMessages.UserRepository.GET_USERS_LIST_FROM_DUMMY_API_SUCCESS,
          response.status,
          response.data
        );

        return response;
      })
      .catch((error: AxiosError) => {
        const mappedErr = ErrorMapper.mapAxiosError(error);

        logger.info(
          LoggerMessages.UserRepository.GET_USERS_LIST_FROM_DUMMY_API_ERROR,
          mappedErr.status,
          mappedErr.data
        );

        return Promise.reject(mappedErr);
      });
  }
}

export default UserRepository;
