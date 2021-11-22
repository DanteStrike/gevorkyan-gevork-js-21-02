import {IRegistrationStore} from './reducers';

const getStoreSpace = (store: {reg: IRegistrationStore}) => store.reg;
const getLoadingStatus = (store: {reg: IRegistrationStore}) => getStoreSpace(store).isLoading;
const getErrorStatus = (store: {reg: IRegistrationStore}) => getStoreSpace(store).isError;
const getErrorMsg = (store: {reg: IRegistrationStore}) => getStoreSpace(store).errMsg;
const getNewUserID = (store: {reg: IRegistrationStore}) => getStoreSpace(store).userID;

export default {
  getLoadingStatus,
  getErrorStatus,
  getErrorMsg,
  getNewUserID,
};
