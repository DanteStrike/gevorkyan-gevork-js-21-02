import {AxiosInstance} from 'axios';
import actions from './actions';
import {IUser} from '../../types';

const loadUser = (id: string) => (dispatch: any, _: any, api: AxiosInstance) => {
  dispatch(actions.startLoading());
  api.get<IUser>(`/user/${id}`).then((response) => {
    dispatch(actions.setupUser(response.data));
    dispatch(actions.loadingComplete());
  });
};

export default {
  loadUser,
};
