import {AxiosInstance} from 'axios';
import actions from './actions';
import {IUser} from '../../types';

const load = (id: string) => (dispatch: any, _: any, api: AxiosInstance) => {
  dispatch(actions.requestStart());
  api.get<IUser>(`/user/${id}`).then((response) => {
    dispatch(actions.set(response.data));
    dispatch(actions.requestFinished());
  });
};

export default {
  load,
};
