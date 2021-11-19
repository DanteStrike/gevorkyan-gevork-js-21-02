import {IApi, IUser} from '../../app-types';
import actions from './actions';

const registerUser = (data: IUser) => (dispatch: any, _: any, api: IApi) => {
  dispatch(actions.reset());
  dispatch(actions.startLoading());
  api
    .createUser(data)
    .then((response) => {
      if ('id' in response && response.id) {
        dispatch(actions.saveNewUserID(response.id));
      }

      if ('data' in response && response.data) {
        dispatch(actions.setupErr(Object.values(response.data).join(` | `)));
      }
      dispatch(actions.loadingComplete());
    })
    .catch((err) => {
      dispatch(actions.setupErr(err.message));
      dispatch(actions.loadingComplete());
    });
};

export default {
  registerUser,
};
