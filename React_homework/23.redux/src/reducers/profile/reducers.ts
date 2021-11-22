import {IUser} from '../../app-types';
import types from './types';
import updateObject from '../../utils/update-object';
import {ActionsTypes} from './actions';

export interface IProfileReducerStore {
  isLoading: boolean;
  user: IUser;
}

const initProfileState: IProfileReducerStore = {
  isLoading: false,
  user: {
    id: ``,
    title: ``,
    firstName: ``,
    lastName: ``,
    gender: ``,
    email: ``,
    dateOfBirth: ``,
    registerDate: ``,
    phone: ``,
    picture: ``,
    location: {
      street: ``,
      city: ``,
      state: ``,
      country: ``,
      timezone: ``,
    },
  },
};

const reducer = (state = initProfileState, action: ActionsTypes): IProfileReducerStore => {
  switch (action.type) {
    case types.SETUP:
      return updateObject(state, {user: action.payload});

    case types.START_LOADING:
      return updateObject(state, {isLoading: true});

    case types.LOADING_COMPLETE:
      return updateObject(state, {isLoading: false});

    default:
      return state;
  }
};

export default reducer;
