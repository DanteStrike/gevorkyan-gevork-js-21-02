import NameSpace from '../name-space';
import {IDuckStore} from './reducers';
import {itemSelectors} from './slices/item';
import {fetchSelectors, RequestType} from './slices/fetch';
import {listSelectors} from './slices/list';

const getStoreSpace = (store: IDuckStore) => store[NameSpace.PROFILE];

const getFetchSpace = (store: IDuckStore, requestType: RequestType) => getStoreSpace(store).fetch[requestType];
const getUserSpace = (store: IDuckStore) => getStoreSpace(store).user;
const getUserPostsSpace = (store: IDuckStore) => getStoreSpace(store).posts;

const getProfile = (store: IDuckStore) => itemSelectors.getItem(getUserSpace(store));

const getPosts = (store: IDuckStore) => listSelectors.getData(getUserPostsSpace(store));
const getTotal = (store: IDuckStore) => listSelectors.getTotal(getUserPostsSpace(store));
const getPage = (store: IDuckStore) => listSelectors.getPage(getUserPostsSpace(store));

const getProfileIsLoading = (store: IDuckStore, requestType = RequestType.LOAD_PROFILE) =>
  fetchSelectors[requestType].getIsLoading(getFetchSpace(store, requestType));
const getProfileIsError = (store: IDuckStore, requestType = RequestType.LOAD_PROFILE) =>
  fetchSelectors[requestType].getIsError(getFetchSpace(store, requestType));
const getProfileError = (store: IDuckStore, requestType = RequestType.LOAD_PROFILE) =>
  fetchSelectors[requestType].getError(getFetchSpace(store, requestType));

const getUserPostsIsLoading = (store: IDuckStore, requestType = RequestType.LOAD_USER_POSTS) =>
  fetchSelectors[requestType].getIsLoading(getFetchSpace(store, requestType));
const getUserPostsIsError = (store: IDuckStore, requestType = RequestType.LOAD_USER_POSTS) =>
  fetchSelectors[requestType].getIsError(getFetchSpace(store, requestType));
const getUserPostsError = (store: IDuckStore, requestType = RequestType.LOAD_USER_POSTS) =>
  fetchSelectors[requestType].getError(getFetchSpace(store, requestType));

export default {
  getProfile,
  getPosts,
  getTotal,
  getPage,
  getProfileIsLoading,
  getProfileIsError,
  getProfileError,
  getUserPostsIsLoading,
  getUserPostsIsError,
  getUserPostsError,
};
