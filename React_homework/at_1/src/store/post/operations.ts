import {AxiosInstance} from 'axios';
import actions from './actions';
import {FetchErrorType, IComments, IPostPreview} from '../../types';
import {RequestType} from './slices/fetch';
import {RequestUtils} from '../../utils';

const loadPost = (id: string) => (dispatch: any, getState: any, api: AxiosInstance) => {
  const controller = new AbortController();

  api
    .get<IPostPreview>(`/post/${id}`, {signal: controller.signal})
    .then((response) => {
      dispatch(actions.set(response.data));
      dispatch(actions.fetchActions[RequestType.LOAD_POST].requestFinished());
    })
    .catch((err) => {
      if (err.response?.data?.error === FetchErrorType.PARAMS_NOT_VALID) {
        dispatch(actions.fetchActions[RequestType.LOAD_POST].requestFailed(`Пост не найден`));
      } else {
        dispatch(actions.fetchActions[RequestType.LOAD_POST].requestFailed(err.message));
      }
    });
  dispatch(actions.fetchActions[RequestType.LOAD_POST].requestStart(controller));
};

const loadComments =
  (id: string, limit: number, page: number) => (dispatch: any, getState: any, api: AxiosInstance) => {
    const controller = new AbortController();

    const normalized = RequestUtils.normalizeParams(page, limit, 5);

    api
      .get<IComments>(`/post/${id}/comment?page=${normalized.page - 1}&limit=${normalized.limit}`, {
        signal: controller.signal,
      })
      .then((response) => {
        const data: IComments = {
          limit: response.data.limit,
          page: response.data.page,
          total: response.data.total,
          data: response.data.data,
        };
        if (normalized.dataSlice) {
          data.data =
            data.data.length < limit
              ? data.data.slice()
              : data.data.slice(normalized.dataSlice.left, normalized.dataSlice.right);
        }
        dispatch(actions.setup(data));
        dispatch(actions.fetchActions[RequestType.LOAD_COMMENTS].requestFinished());
      })
      .catch((err) => {
        if (err.response?.data?.error === FetchErrorType.PARAMS_NOT_VALID) {
          dispatch(actions.fetchActions[RequestType.LOAD_COMMENTS].requestFailed(`Пост не найден`));
        } else {
          dispatch(actions.fetchActions[RequestType.LOAD_COMMENTS].requestFailed(err.message));
        }
      });
    dispatch(actions.fetchActions[RequestType.LOAD_COMMENTS].requestStart(controller));
  };

export default {
  loadPost,
  loadComments,
};
