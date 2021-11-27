import {AxiosInstance} from 'axios';
import actions from './actions';
import {IPosts, IUser} from '../../types';
import {RequestType} from './slices/fetch';

const loadProfile = (id: string) => (dispatch: any, getState: any, api: AxiosInstance) => {
  const controller = new AbortController();

  api.get<IUser>(`/user/${id}`, {signal: controller.signal}).then((response) => {
    dispatch(actions.set(response.data));
    dispatch(actions.fetchActions[RequestType.LOAD_PROFILE].requestFinished());
  });
  dispatch(actions.fetchActions[RequestType.LOAD_PROFILE].requestStart(controller));
};

const loadUserPosts =
  (id: string, limit: number, page: number) => (dispatch: any, getState: any, api: AxiosInstance) => {
    const controller = new AbortController();

    const minLimit = 5;
    let normalizedLimit = limit;
    let normalizedPage = page;
    const pageLimit = Math.ceil(minLimit / limit);
    if (limit < minLimit) {
      normalizedLimit = pageLimit * limit;
      normalizedPage = Math.ceil(page / pageLimit);
    }

    api
      .get<IPosts>(`/user/${id}/post?page=${normalizedPage - 1}&limit=${normalizedLimit}`, {signal: controller.signal})
      .then((response) => {
        const data: IPosts = {
          limit: response.data.limit,
          page: response.data.page,
          total: response.data.total,
          data: response.data.data,
        };
        if (limit < minLimit) {
          data.data =
            data.data.length < limit
              ? data.data.slice()
              : data.data.slice(((page - 1) % pageLimit) * limit, (((page - 1) % pageLimit) + 1) * limit);
        }
        dispatch(actions.setup(data));
        dispatch(actions.fetchActions[RequestType.LOAD_USER_POSTS].requestFinished());
      });
    dispatch(actions.fetchActions[RequestType.LOAD_USER_POSTS].requestStart(controller));
  };

export default {
  loadProfile,
  loadUserPosts,
};
