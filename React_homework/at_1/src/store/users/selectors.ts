import {IUsersReducerStore} from './reducers';
import NameSpace from '../name-space';

interface IDuckStore {
  [NameSpace.USERS]: IUsersReducerStore;
}

const getStoreSpace = (store: IDuckStore) => store[NameSpace.USERS];
const getUsersList = (store: IDuckStore) => getStoreSpace(store).data;
const getUsersTotal = (store: IDuckStore) => getStoreSpace(store).total;
const getUsersPage = (store: IDuckStore) => getStoreSpace(store).curPage;
const getUsersLoadingStatus = (store: IDuckStore) => getStoreSpace(store).isLoading;

export default {
  getUsersList,
  getUsersTotal,
  getUsersPage,
  getUsersLoadingStatus,
};
