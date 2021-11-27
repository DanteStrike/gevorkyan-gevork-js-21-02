import {IDuckStore} from './reducers';
import NameSpace from '../name-space';
import {fetchSelectors} from './slices/fetch';
import {listSelectors} from './slices/list';

const getStoreSpace = (store: IDuckStore) => store[NameSpace.USERS];

const getFetchSpace = (store: IDuckStore) => getStoreSpace(store).fetch;
const getListSpace = (store: IDuckStore) => getStoreSpace(store).list;

const getIsLoading = (store: IDuckStore) => fetchSelectors.getIsLoading(getFetchSpace(store));
const getIsError = (store: IDuckStore) => fetchSelectors.getIsError(getFetchSpace(store));
const getError = (store: IDuckStore) => fetchSelectors.getError(getFetchSpace(store));

const getData = (store: IDuckStore) => listSelectors.getData(getListSpace(store));
const getTotal = (store: IDuckStore) => listSelectors.getTotal(getListSpace(store));
const getPage = (store: IDuckStore) => listSelectors.getPage(getListSpace(store));

export default {
  getData,
  getTotal,
  getPage,
  getIsLoading,
  getIsError,
  getError,
};
