import {AxiosInstance} from 'axios';
import actions from './actions';
import {IPosts} from '../../types';

const load = (limit: number, page: number) => (dispatch: any, _: any, api: AxiosInstance) => {
  const controller = new AbortController();

  api
    .get<IPosts>(`/post?page=${page - 1}&limit=${limit}`, {signal: controller.signal})
    .then((response) => {
      dispatch(actions.setup(response.data));
      dispatch(actions.requestFinished());
    })
    .catch((err) => {
      dispatch(actions.requestFailed(err.message));
    });
  dispatch(actions.requestStart(controller));
};

export default {
  load,
};
