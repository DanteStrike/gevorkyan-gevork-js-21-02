import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import configureAPI from '../server/cofigure-api';
import {usersReducer} from './users';
import NameSpace from "./name-space";

const api = configureAPI();
const rootReducer = combineReducers({
  [NameSpace.USERS]: usersReducer,
});

const configuredStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));
export type RootState = ReturnType<typeof configuredStore.getState>;
export type AppDispatch = typeof configuredStore.dispatch;
export default configuredStore;
