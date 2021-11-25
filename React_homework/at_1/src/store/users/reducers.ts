import types from './types';
import {ActionsTypes} from './actions';
import {ObjectUtils} from '../../utils';
import {IUserPreview} from '../../types';

export interface IUsersReducerStore {
  isLoading: boolean;
  curPage: number;
  limit: number;
  total: number;
  limitOptions: string[];
  data: IUserPreview[];
}

const initUsersState: IUsersReducerStore = {
  isLoading: false,
  curPage: 1,
  limit: 20,
  limitOptions: [`5`, `10`, `20`, `50`, `100`],
  total: 0,
  data: [],
};

const reducer = (state = initUsersState, action: ActionsTypes): IUsersReducerStore => {
  switch (action.type) {
    case types.SETUP:
      return ObjectUtils.updateObject(state, {
        total: action.payload.total,
        data: action.payload.data,
      });

    case types.CHANGE_LIMIT:
      return ObjectUtils.updateObject(state, {limit: action.payload});

    case types.CHANGE_PAGE:
      return ObjectUtils.updateObject(state, {curPage: action.payload});

    case types.START_LOADING:
      return ObjectUtils.updateObject(state, {isLoading: true});

    case types.LOADING_COMPLETE:
      return ObjectUtils.updateObject(state, {isLoading: false});

    default:
      return state;
  }
};

export default reducer;
