import {combineReducers} from "redux";
import {fetchReducer} from "./slices/fetch";
import {itemReducer} from "./slices/item";
import NameSpace from "../name-space";
import {IFetchStore, IItemStore} from "../hor";
import {IUser} from "../../types";

const reducer = combineReducers({
  fetch: fetchReducer,
  data: itemReducer
})
export interface IDuckStore {
  [NameSpace.PROFILE]: {
    fetch: IFetchStore
    data: IItemStore<IUser>
  }
}
export default reducer;
