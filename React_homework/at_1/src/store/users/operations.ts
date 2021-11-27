import {AxiosInstance} from 'axios';
import actions from './actions';
import {IUsers} from '../../types';

const load = (limit: number, page: number) => (dispatch: any, _: any, api: AxiosInstance) => {
  dispatch(actions.requestStart());
  api.get<IUsers>(`/user?page=${page - 1}&limit=${limit}`).then((response) => {
    dispatch(actions.setup(response.data));
    dispatch(actions.requestFinished());
  });
};

export default {
  load,
};
