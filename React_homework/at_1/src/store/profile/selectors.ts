import {IProfileReducerStore} from './reducers';
import NameSpace from '../name-space';

interface IDuckStore {
  [NameSpace.PROFILE]: IProfileReducerStore;
}

const getStoreSpace = (store: IDuckStore) => store[NameSpace.PROFILE];
const getUserProfile = (store: IDuckStore) => getStoreSpace(store).user;
const getProfileLoadingStatus = (store: IDuckStore) => getStoreSpace(store).isLoading;

export default {
  getProfileLoadingStatus,
  getUserProfile,
};
