import {AxiosInstance} from 'axios';
import actions from './actions';
import {IUser} from '../../types';

const load = (id: string) => (dispatch: any, getState: any, api: AxiosInstance) => {
  const controller = new AbortController();

  api.get<IUser>(`/user/${id}`, {signal: controller.signal}).then((response) => {
    dispatch(actions.set(response.data));
    dispatch(actions.requestFinished());
  });
  dispatch(actions.requestStart(controller));
};

export default {
  load,
};
