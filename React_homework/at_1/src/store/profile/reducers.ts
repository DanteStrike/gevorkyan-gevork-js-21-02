import {combineReducers} from 'redux';
import {fetchReducer, RequestType} from './slices/fetch';
import {itemReducer} from './slices/item';
import NameSpace from '../name-space';
import {IFetchStore, IItemStore, IListStore} from '../hor';
import {IPostPreview, IUser} from '../../types';
import {listReducer} from './slices/list';

const reducer = combineReducers({
  fetch: fetchReducer,
  user: itemReducer,
  posts: listReducer,
});
export interface IDuckStore {
  [NameSpace.PROFILE]: {
    fetch: {
      [RequestType.LOAD_PROFILE]: IFetchStore;
      [RequestType.LOAD_USER_POSTS]: IFetchStore;
    };
    user: IItemStore<IUser>;
    posts: IListStore<IPostPreview>;
  };
}
export default reducer;
