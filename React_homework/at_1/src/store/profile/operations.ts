import {AxiosInstance} from 'axios';
import actions from './actions';
import {FetchErrorType, IPosts, IUser} from '../../types';
import {RequestType} from './slices/fetch';
import {RequestUtils} from '../../utils';

const loadProfile = (id: string) => (dispatch: any, getState: any, api: AxiosInstance) => {
  const controller = new AbortController();

  api
    .get<IUser>(`/user/${id}`, {signal: controller.signal})
    .then((response) => {
      dispatch(actions.set(response.data));
      dispatch(actions.fetchActions[RequestType.LOAD_PROFILE].requestFinished());
    })
    .catch((err) => {
      if (err.response?.data?.error === FetchErrorType.PARAMS_NOT_VALID) {
        dispatch(actions.fetchActions[RequestType.LOAD_PROFILE].requestFailed(`Профиль не найден`));
      } else {
        dispatch(actions.fetchActions[RequestType.LOAD_PROFILE].requestFailed(err.message));
      }
    });
  dispatch(actions.fetchActions[RequestType.LOAD_PROFILE].requestStart(controller));
};

const loadUserPosts =
  (id: string, limit: number, page: number) => (dispatch: any, getState: any, api: AxiosInstance) => {
    const controller = new AbortController();

    const normalized = RequestUtils.normalizeParams(page, limit, 5);

    api
      .get<IPosts>(`/user/${id}/post?page=${normalized.page - 1}&limit=${normalized.limit}`, {
        signal: controller.signal,
      })
      .then((response) => {
        const data: IPosts = {
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
        dispatch(actions.fetchActions[RequestType.LOAD_USER_POSTS].requestFinished());
      })
      .catch((err) => {
        if (err.response?.data?.error === FetchErrorType.PARAMS_NOT_VALID) {
          dispatch(actions.fetchActions[RequestType.LOAD_USER_POSTS].requestFailed(`Профиль не найден`));
        } else {
          dispatch(actions.fetchActions[RequestType.LOAD_USER_POSTS].requestFailed(err.message));
        }
      });
    dispatch(actions.fetchActions[RequestType.LOAD_USER_POSTS].requestStart(controller));
  };

export default {
  loadProfile,
  loadUserPosts,
};
