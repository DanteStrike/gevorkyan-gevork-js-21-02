import types from './types';
import updateObject from '../../utils/update-object';
import {ActionsTypes} from './actions';

export interface IRegistrationStore {
  isLoading: boolean;
  isError: boolean;
  errMsg: string;
  userID: string | null;
}

const initRegistrationState: IRegistrationStore = {
  isLoading: false,
  isError: false,
  errMsg: ``,
  userID: null,
};

const reducer = (state = initRegistrationState, action: ActionsTypes): IRegistrationStore => {
  switch (action.type) {
    case types.START_LOADING:
      return updateObject(state, {isLoading: true});

    case types.LOADING_COMPLETE:
      return updateObject(state, {isLoading: false});

    case types.SAVE_NEW_USER_ID:
      return updateObject(state, {userID: action.payload});

    case types.SETUP_ERR:
      return updateObject(state, {isError: true, errMsg: action.payload});

    case types.RESET:
      return updateObject(state, initRegistrationState);

    default:
      return state;
  }
};

export default reducer;
