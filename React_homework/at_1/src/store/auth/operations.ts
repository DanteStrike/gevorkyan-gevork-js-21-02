import {AxiosInstance} from 'axios';
import actions from './actions';
import {FetchErrorType, IUser} from '../../types';
import {authStorageKey} from './types';

const login = (id: string) => (dispatch: any, _: any, api: AxiosInstance) => {
  const controller = new AbortController();

  api
    .get<IUser>(`/user/${id}`, {signal: controller.signal})
    .then((response) => {
      dispatch(actions.login(response.data.id, response.data.firstName, response.data.picture));
      localStorage.setItem(authStorageKey, id);
    })
    .catch((err) => {
      dispatch(actions.logout());

      if (err.response?.data?.error === FetchErrorType.PARAMS_NOT_VALID) {
        dispatch(actions.requestFailed(`Такого ID не существует`));
      } else {
        dispatch(actions.requestFailed(err.message));
      }

      console.log(err);
    });
  dispatch(actions.requestStart(controller));
};

export default {
  login,
};
