import {IApi} from '../../app-types';
import actions from './actions';

const loadUser = (id: string) => (dispatch: any, _: any, api: IApi) => {
  dispatch(actions.startLoading());
  api.getUser(id).then((response) => {
    dispatch(actions.setupUser(response));
    dispatch(actions.loadingComplete());
  });
};

export default {
  loadUser,
};
