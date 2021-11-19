import {IApi} from '../../app-types';
import actions from './actions';

const loadUsers = (limit: number, page: number) => (dispatch: any, _: any, api: IApi) => {
  dispatch(actions.startLoading());
  api.getUsers(page - 1, limit).then((response) => {
    dispatch(actions.setupUsers(response));
    dispatch(actions.loadingComplete());
  });
};

export default {
  loadUsers,
};
