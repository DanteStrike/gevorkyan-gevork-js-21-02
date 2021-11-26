import types from './types';
import {InferValueTypes, IUser} from '../../types';

const setupUser = (user: IUser) =>
  ({
    type: types.SETUP,
    payload: user,
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
  startLoading,
  loadingComplete,
  setupUser,
};

export type ActionsTypes = ReturnType<InferValueTypes<typeof actions>>;
export default actions;
