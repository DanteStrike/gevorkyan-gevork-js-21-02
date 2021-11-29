import {AxiosInstance} from 'axios';
import actions from './actions';
import {FetchErrorType, IUser, IUserRegistration} from '../../types';
import {authStorageKey} from './types';

const login = (id: string) => (dispatch: any, _: any, api: AxiosInstance) => {
  const controller = new AbortController();

  api
    .get<IUser>(`/user/${id}`, {signal: controller.signal})
    .then((response) => {
      dispatch(actions.login(response.data.id, response.data.firstName, response.data.picture || ``));
      localStorage.setItem(authStorageKey, response.data.id);
      dispatch(actions.requestFinished());
    })
    .catch((err) => {
      if (err.response?.data?.error === FetchErrorType.PARAMS_NOT_VALID) {
        dispatch(actions.requestFailed(`Такого ID не существует`));
        dispatch(actions.logout());
      } else {
        dispatch(actions.requestFailed(err.message));
      }
    });
  dispatch(actions.requestStart(controller));
};

const registration = (data: IUserRegistration) => (dispatch: any, _: any, api: AxiosInstance) => {
  const controller = new AbortController();

  api
    .post<IUser>(`/user/create`, data, {signal: controller.signal})
    .then((response) => {
      dispatch(actions.login(response.data.id, response.data.firstName, response.data.picture || ``));
      localStorage.setItem(authStorageKey, response.data.id);
      dispatch(actions.requestFinished());
    })
    .catch((err) => {
      if (err.response?.data?.error === FetchErrorType.BODY_NOT_VALID && err.response?.data?.data?.email) {
        dispatch(actions.requestFailed(`Пользователь с такой почтой уже зарегистрирован`));
      } else {
        dispatch(actions.requestFailed(err.message));
      }
    });

  dispatch(actions.requestStart(controller));
};

export default {
  login,
  registration,
};
