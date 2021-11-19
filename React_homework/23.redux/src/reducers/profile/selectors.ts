import {IProfileReducerStore} from './reducers';

const getStoreSpace = (store: {profile: IProfileReducerStore}) => store.profile;
const getUserProfile = (store: {profile: IProfileReducerStore}) => getStoreSpace(store).user;
const getProfileLoadingStatus = (store: {profile: IProfileReducerStore}) => getStoreSpace(store).isLoading;

export default {
  getProfileLoadingStatus,
  getUserProfile,
};
