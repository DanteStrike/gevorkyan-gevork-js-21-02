import types from './types';
import {InferValueTypes, IUsers} from '../../app-types';

const setupUsers = (users: IUsers) =>
  ({
    type: types.SETUP,
    payload: {
      total: users.total,
      data: users.data,
    },
  } as const);

const changeUsersLimit = (limit: number) =>
  ({
    type: types.CHANGE_LIMIT,
    payload: limit,
  } as const);

const changeUsersTotal = (total: number) =>
  ({
    type: types.CHANGE_LIMIT,
    payload: total,
  } as const);

const changeUsersPage = (page: number) =>
  ({
    type: types.CHANGE_PAGE,
    payload: page,
  } as const);

const startLoading = () =>
  ({
    type: types.START_LOADING,
  } as const);

const loadingComplete = () =>
  ({
    type: types.LOADING_COMPLETE,
  } as const);

const actions = {
  setupUsers,
  changeUsersLimit,
  changeUsersPage,
  changeUsersTotal,
  startLoading,
  loadingComplete,
};

export type ActionsTypes = ReturnType<InferValueTypes<typeof actions>>;
export default actions;
