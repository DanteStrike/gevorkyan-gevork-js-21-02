import {Request, Response} from "express";
import * as core from "express-serve-static-core";
import {logger} from "../utils";
import {LoggerMessages} from "../constants/loggerMessages";
import {IError} from "../types/error";
import PostRepository from "../repositories/postRepository";
import PostMapper from "../mappers/postMapper";
import {IPosts} from "../types/lists";
import {IPaginationParams} from "../types/params";

class PostService {
  static getPost(req: Request<{id: string},any,any,{locale?: string}>, res: Response) {
    logger.info(LoggerMessages.PostService.GET_POST_INPUT_PARAMS, req.params.id);

    PostRepository.getPostFromDummyAPI(req.params.id)
      .then((response) => {

        logger.info(LoggerMessages.PostService.GET_POST_SUCCESS, response.status, response.data);

        const result = PostMapper.normalizePostForClient(response.data);

        logger.info(LoggerMessages.PostService.GET_POST_NORMALIZED, result);

        res.status(response.status).json(result);
      })
      .catch((error: IError) => {

        logger.info(LoggerMessages.PostService.GET_POST_ERROR, error.status, error.data);

        res.status(error.status).json(error.data);
      })
  }

  static getPosts(req: Request<core.ParamsDictionary,IPosts,any,IPaginationParams & {locale?: string}>, res: Response) {
    const params: Required<IPaginationParams> = {
      limit: req.query.limit || `0`,
      page: req.query.page || `0`
    }

    logger.info(LoggerMessages.PostService.GET_POSTS_LIST_INPUT_PARAMS, params.limit, params.page);

    PostRepository.getPostsFromDummyAPI(params.limit, params.page)
      .then((response) => {

        logger.info(LoggerMessages.PostService.GET_POSTS_LIST_SUCCESS, response.status, response.data);

        const result = response.data;
        result.data = PostMapper.normalizePostsForClient(result.data, req.query.locale);

        logger.info(LoggerMessages.PostService.GET_POSTS_LIST_NORMALIZED, result);

        res.status(response.status).json(response.data);
      })
      .catch((error: IError) => {

        logger.info(LoggerMessages.PostService.GET_POSTS_LIST_ERROR, error.status, error.data);

        res.status(error.status).json(error.data);
      })
  }
}

export default PostService;
