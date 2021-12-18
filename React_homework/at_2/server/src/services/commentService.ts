import {Request, Response} from "express";
import * as core from "express-serve-static-core";
import {IComments} from "../types/lists";
import {IPaginationParams} from "../types/params";
import {logger} from "../utils";
import {LoggerMessages} from "../constants/loggerMessages";
import {IError} from "../types/error";
import CommentRepository from "../repositories/commentRepository";
import CommentsMapper from "../mappers/commentsMapper";

class CommentService {
  static getComments(req: Request<core.ParamsDictionary,IComments,any,IPaginationParams & {locale?: string}>, res: Response) {
    const params: Required<IPaginationParams> = {
      limit: req.query.limit || `0`,
      page: req.query.page || `0`
    }

    logger.info(LoggerMessages.CommentService.GET_COMMENTS_INPUT_PARAMS, params.limit, params.page);

    CommentRepository.getCommentsFromDummyAPI(params.limit, params.page)
      .then((response) => {

        logger.info(LoggerMessages.CommentService.GET_COMMENTS_SUCCESS, response.status, response.data);

        const result = response.data;
        result.data = CommentsMapper.normalizePostsForClient(result.data, req.query.locale);

        logger.info(LoggerMessages.CommentService.GET_COMMENTS_NORMALIZED, result);

        res.status(response.status).json(response.data);
      })
      .catch((error: IError) => {

        logger.info(LoggerMessages.CommentService.GET_COMMENTS_ERROR, error.status, error.data);

        res.status(error.status).json(error.data);
      })
  }
}

export default CommentService;
