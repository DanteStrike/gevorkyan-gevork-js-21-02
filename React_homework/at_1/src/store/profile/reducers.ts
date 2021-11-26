import types from './types';
import {ActionsTypes} from './actions';
import {ObjectUtils} from '../../utils';
import {IUser} from '../../types';

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
      return ObjectUtils.updateObject(state, {user: action.payload});

    case types.START_LOADING:
      return ObjectUtils.updateObject(state, {isLoading: true});

    case types.LOADING_COMPLETE:
      return ObjectUtils.updateObject(state, {isLoading: false});

    default:
      return state;
  }
};

export default reducer;
