import types from './types';
import {InferValueTypes} from '../../app-types';

const startLoading = () =>
  ({
    type: types.START_LOADING,
  } as const);

const loadingComplete = () =>
  ({
    type: types.LOADING_COMPLETE,
  } as const);

const reset = () =>
  ({
    type: types.RESET,
  } as const);

const setupErr = (errMsg: string) =>
  ({
    type: types.SETUP_ERR,
    payload: errMsg,
  } as const);

const saveNewUserID = (id: string) =>
  ({
    type: types.SAVE_NEW_USER_ID,
    payload: id,
  } as const);

const actions = {
  startLoading,
  loadingComplete,
  reset,
  setupErr,
  saveNewUserID,
};

export type ActionsTypes = ReturnType<InferValueTypes<typeof actions>>;
export default actions;
