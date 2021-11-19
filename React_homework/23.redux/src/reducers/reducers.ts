import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import Api from '../server/api';
import serveConfig from '../configs/serve-config';
import {usersReducer} from './users';
import {profileReducer} from './profile';
import {registrationReducer} from './registration';

const api = new Api(serveConfig);
const rootReducer = combineReducers({
  profile: profileReducer,
  users: usersReducer,
  reg: registrationReducer,
});

const configuredStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));
export default configuredStore;
