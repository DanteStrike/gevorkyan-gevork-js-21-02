import {AxiosInstance} from 'axios';
import actions from './actions';
import {IUsers} from '../../types';

const loadUsers = (limit: number, page: number) => (dispatch: any, _: any, api: AxiosInstance) => {
  dispatch(actions.startLoading());
  api.get<IUsers>(`/user?page=${page - 1}&limit=${limit}`).then((response) => {
    dispatch(actions.setupUsers(response.data));
    dispatch(actions.loadingComplete());
  });
};

export default {
  loadUsers,
};
