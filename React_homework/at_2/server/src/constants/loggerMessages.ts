export namespace LoggerMessages {
  export enum CommonService {
    PATH_NOT_FOUND = `[CommonService.getAppPathNotFoundError] route not found: route = {}`,
    INTERNAL_SERVER_ERROR = `[CommonService.getUnexpectedServerError] unexpected error: error = {}`
  }

  export enum UserService {
    GET_USER_INPUT_PARAMS = `[UserService.getUser] Input params: id = {}`,
    GET_USER_SUCCESS = `[UserService.getUser] success: status = {}, response = {}`,
    GET_USER_ERROR = `[UserService.getUser] failed: status = {}, response = {}`,
    GET_USER_NORMALIZED = `[UserService.getUser] after mapping date = {}`,

    GET_USERS_LIST_INPUT_PARAMS = `[UserService.getUsersList] Input params: limit = {}, page = {}`,
    GET_USERS_LIST_SUCCESS = `[UserService.getUsersList] success: status = {}, response = {}`,
    GET_USERS_LIST_ERROR = `[UserService.getUsersList] failed: status = {}, response = {}`,

    CREATE_USER_INPUT_BODY = `[UserService.createUser] Input body: body = {}`,
    CREATE_USER_SUCCESS = `[UserService.createUser] success: status = {}, response = {}`,
    CREATE_USER_ERROR = `[UserService.createUser] failed: status = {}, response = {}`,

    UPDATE_USER_INPUT_PARAMS = `[UserService.updateUser] Input: body = {}, params = {}`,
    UPDATE_USER_SUCCESS = `[UserService.updateUser] success: status = {}, response = {}`,
    UPDATE_USER_ERROR = `[UserService.updateUser] failed: status = {}, response = {}`
  }

  export enum UserRepository {
    GET_USERS_LIST_FROM_DUMMY_API_START = `[UserRepository.getUsersListFromDummyAPI] starting request to dummyAPI: req = {}`,
    GET_USERS_LIST_FROM_DUMMY_API_SUCCESS = `[UserRepository.getUsersListFromDummyAPI] request success: status = {}, data = {}`,
    GET_USERS_LIST_FROM_DUMMY_API_ERROR = `[UserRepository.getUsersListFromDummyAPI] request failed: status = {}, error = {}`,

    GET_USER_BY_ID_FROM_DUMMY_API_START = `[UserRepository.getUserByIDFromDummyAPI] starting request to dummyAPI: req = {}`,
    GET_USER_BY_ID_FROM_DUMMY_API_SUCCESS = `[UserRepository.getUserByIDFromDummyAPI] request success: status = {}, data = {}`,
    GET_USER_BY_ID_FROM_DUMMY_API_ERROR = `[UserRepository.getUserByIDFromDummyAPI] request failed: status = {}, error = {}`,
  }

  export enum UserActions {
    CREATE_USER_ON_DUMMY_API_START = `[UserActions.createUserOnDummyAPI] starting request to dummyAPI: req = {}, data = {}`,
    CREATE_USER_ON_DUMMY_API_SUCCESS = `[UserActions.createUserOnDummyAPI] request success: status = {}, data = {}`,
    CREATE_USER_ON_DUMMY_API_ERROR = `[UserActions.createUserOnDummyAPI] request failed: status = {}, error = {}`,

    UPDATE_USER_ON_DUMMY_API_START = `[UserActions.updateUserOnDummyAPI] starting request to dummyAPI: req = {}, data = {}`,
    UPDATE_USER_ON_DUMMY_API_SUCCESS = `[UserActions.updateUserOnDummyAPI] request success: status = {}, data = {}`,
    UPDATE_USER_ON_DUMMY_API_ERROR = `[UserActions.updateUserOnDummyAPI] request failed: status = {}, error = {}`,
  }

  export enum PostService {
    GET_POST_INPUT_PARAMS = `[PostService.getPost] Input params: id = {}`,
    GET_POST_SUCCESS = `[PostService.getPost] success: status = {}, response = {}`,
    GET_POST_ERROR = `[PostService.getPost] failed: status = {}, response = {}`,
    GET_POST_NORMALIZED = `[PostService.getPost] after mapping date = {}`,

    GET_POSTS_LIST_INPUT_PARAMS = `[PostService.getPosts] Input params: limit = {}, page = {}`,
    GET_POSTS_LIST_SUCCESS = `[PostService.getPosts] success: status = {}, response = {}`,
    GET_POSTS_LIST_ERROR = `[PostService.getPosts] failed: status = {}, response = {}`,
    GET_POSTS_LIST_NORMALIZED = `[PostService.getPosts] after mapping date = {}`,
  }

  export enum PostRepository {
    GET_POSTS_FROM_DUMMY_API_START = `[PostRepository.getPostsFromDummyAPI] starting request to dummyAPI: req = {}`,
    GET_POSTS_FROM_DUMMY_API_SUCCESS = `[PostRepository.getPostsFromDummyAPI] request success: status = {}, data = {}`,
    GET_POSTS_FROM_DUMMY_API_ERROR = `[PostRepository.getPostsFromDummyAPI] request failed: status = {}, error = {}`,

    GET_POST_FROM_DUMMY_API_START = `[PostRepository.getPostFromDummyAPI] starting request to dummyAPI: req = {}`,
    GET_POST_FROM_DUMMY_API_SUCCESS = `[PostRepository.getPostFromDummyAPI] request success: status = {}, data = {}`,
    GET_POST_FROM_DUMMY_API_ERROR = `[PostRepository.getPostFromDummyAPI] request failed: status = {}, error = {}`,
  }

  export enum CommentService {
    GET_COMMENTS_INPUT_PARAMS = `[CommentService.getComments] Input params: postId = {}, limit = {}, page = {}`,
    GET_COMMENTS_SUCCESS = `[CommentService.getComments] success: status = {}, response = {}`,
    GET_COMMENTS_ERROR = `[CommentService.getComments] failed: status = {}, response = {}`,
    GET_COMMENTS_NORMALIZED = `[CommentService.getComments] after mapping date = {}`,
  }

  export enum CommentRepository {
    GET_COMMENTS_FROM_DUMMY_API_START = `[CommentRepository.getCommentsFromDummyAPI] starting request to dummyAPI: req = {}`,
    GET_COMMENTS_FROM_DUMMY_API_SUCCESS = `[CommentRepository.getCommentsFromDummyAPI] request success: status = {}, data = {}`,
    GET_COMMENTS_FROM_DUMMY_API_ERROR = `[CommentRepository.getCommentsFromDummyAPI] request failed: status = {}, error = {}`,
  }
}

type ValuesOf<E> = E[keyof E];
type Enums = typeof LoggerMessages;
export type LoggerMessagesType = {
  [k in keyof Enums]: ValuesOf<Enums[k]>;
}[keyof Enums];
