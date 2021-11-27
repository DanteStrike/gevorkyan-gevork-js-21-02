import NameSpace from '../name-space';
import {IDuckStore} from "./reducers";
import {itemSelectors} from "./slices/item";
import {fetchSelectors} from "./slices/fetch";

const getStoreSpace = (store: IDuckStore) => store[NameSpace.PROFILE];

const getFetchSpace = (store: IDuckStore) => getStoreSpace(store).fetch;
const getDataSpace = (store: IDuckStore) => getStoreSpace(store).data;

const getProfile = (store: IDuckStore) => itemSelectors.getItem(getDataSpace(store));

const getIsLoading = (store: IDuckStore) => fetchSelectors.getIsLoading(getFetchSpace(store));
const getIsError = (store: IDuckStore) => fetchSelectors.getIsError(getFetchSpace(store));
const getError = (store: IDuckStore) => fetchSelectors.getError(getFetchSpace(store));

export default {
  getProfile,
  getIsLoading,
  getIsError,
  getError
};
