import {Request, Response} from "express";
import * as core from "express-serve-static-core";
import {logger, RequestUtils} from "../utils";
import {LoggerMessages} from "../constants/loggerMessages";
import UserRepository from "../repositories/userRepository";
import {IPaginationParams} from "../types/params";
import {IError} from "../types/error";
import UserMapper from "../mappers/userMapper";
import {IUser, IUserRegistration, IUserUpdate} from "../types/user";
import {IPosts, IUsers} from "../types/lists";
import UserActions from "../actions/userActions";

class UserService {
  static getUser(req: Request<{id: string},any,any,{locale?: string}>, res: Response) {
    const userID = req.params.id;
    const {locale} = req.query;

    logger.info(LoggerMessages.UserService.GET_USER_INPUT_PARAMS, userID);

    UserRepository.getUserByIDFromDummyAPI(userID)
      .then((response) => {

        logger.info(LoggerMessages.UserService.GET_USER_SUCCESS, response.status, response.data);

        const result = UserMapper.normalizeUserForClient(response.data, locale);

        logger.info(LoggerMessages.UserService.GET_USER_NORMALIZED, result);

        res.status(response.status).json(result);
      })
      .catch((error: IError) => {

        logger.info(LoggerMessages.UserService.GET_USER_ERROR, error.status, error.data);

        res.status(error.status).json(error.data);
      })
  }

  static getUsersList(req: Request<core.ParamsDictionary,IUsers,any,IPaginationParams>, res: Response) {
    const params: Required<IPaginationParams> = {
      limit: req.query.limit || `0`,
      page: req.query.page || `0`
    }

    logger.info(LoggerMessages.UserService.GET_USERS_LIST_INPUT_PARAMS, params.limit, params.page);

    UserRepository.getUsersListFromDummyAPI(params.limit, params.page)
      .then((response) => {

        logger.info(LoggerMessages.UserService.GET_USERS_LIST_SUCCESS, response.status, response.data);

        res.status(response.status).json(response.data);
      })
      .catch((error: IError) => {

        logger.info(LoggerMessages.UserService.GET_USERS_LIST_ERROR, error.status, error.data);

        res.status(error.status).json(error.data);
      })
  }

  static createUser(req: Request<core.ParamsDictionary,IUser,IUserRegistration>, res: Response) {
    logger.info(LoggerMessages.UserService.CREATE_USER_INPUT_BODY, req.body);

    UserActions.createUserOnDummyAPI(req.body)
      .then((response) => {

        logger.info(LoggerMessages.UserService.CREATE_USER_SUCCESS, response.status, response.data);

        res.status(response.status).json(response.data);
      })
      .catch((error: IError) => {

        logger.info(LoggerMessages.UserService.CREATE_USER_ERROR, error.status, error.data);

        res.status(error.status).json(error.data);
      })
  }

  static updateUser(req: Request<{id: string},IUser,IUserUpdate>, res: Response) {
    logger.info(LoggerMessages.UserService.UPDATE_USER_INPUT_PARAMS, req.body, req.params);

    UserActions.updateUserOnDummyAPI(req.params.id, req.body)
      .then((response) => {

        logger.info(LoggerMessages.UserService.UPDATE_USER_SUCCESS, response.status, response.data);

        res.status(response.status).json(response.data);
      })
      .catch((error: IError) => {

        logger.info(LoggerMessages.UserService.UPDATE_USER_ERROR, error.status, error.data);

        res.status(error.status).json(error.data);
      })
  }

  static getUserPosts(req: Request<{id: string},IPosts,any,IPaginationParams>, res: Response) {
    const params: Required<IPaginationParams> = {
      limit: req.query.limit || `0`,
      page: req.query.page || `0`
    }

    const normalized = RequestUtils.normalizeQuery(Number(params.page), Number(params.limit), 5);

    logger.info(LoggerMessages.UserService.GET_USER_POSTS_INPUT_PARAMS, req.params.id, params.limit, params.page)

    UserRepository.getUserPostsFromDummyAPI(req.params.id, normalized.limit.toString(), normalized.page.toString())
      .then((response) => {

        logger.info(LoggerMessages.UserService.GET_USER_POSTS_SUCCESS, response.status, response.data);

        const result: IPosts = {
          limit: response.data.limit,
          page: response.data.page,
          total: response.data.total,
          data: response.data.data,
        };
        if (normalized.dataSlice) {
          result.data =
            result.data.length < Number(params.limit)
              ? result.data.slice()
              : result.data.slice(normalized.dataSlice.left, normalized.dataSlice.right);
        }

        res.status(response.status).json(result);
      })
      .catch((error: IError) => {

        logger.info(LoggerMessages.UserService.GET_USER_POSTS_ERROR, error.status, error.data);

        res.status(error.status).json(error.data);
      })
  }
}

export default UserService;
