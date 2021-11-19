import {IUsersReducerStore} from './reducers';

const getStoreSpace = (store: {users: IUsersReducerStore}) => store.users;
const getUsersList = (store: {users: IUsersReducerStore}) => getStoreSpace(store).data;
const getUsersLimit = (store: {users: IUsersReducerStore}) => getStoreSpace(store).limit;
const getUsersLimitOptions = (store: {users: IUsersReducerStore}) => getStoreSpace(store).limitOptions;
const getUsersTotal = (store: {users: IUsersReducerStore}) => getStoreSpace(store).total;
const getUsersPage = (store: {users: IUsersReducerStore}) => getStoreSpace(store).curPage;
const getUsersLoadingStatus = (store: {users: IUsersReducerStore}) => getStoreSpace(store).isLoading;

export default {
  getUsersList,
  getUsersLimit,
  getUsersTotal,
  getUsersPage,
  getUsersLimitOptions,
  getUsersLoadingStatus,
};
