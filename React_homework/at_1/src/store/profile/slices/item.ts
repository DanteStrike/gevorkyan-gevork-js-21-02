import NameSpace from "../../name-space";
import {createItemReducer} from "../../hor";
import {IUser} from "../../../types";

const initProfile: IUser = {
  id: ``,
  title: ``,
  firstName: ``,
  lastName: ``,
  gender: ``,
  email: ``,
  dateOfBirth: ``,
  registerDate: ``,
  phone: ``,
  picture: ``,
  location: {
    street: ``,
    city: ``,
    state: ``,
    country: ``,
    timezone: ``,
  },
}

const item = createItemReducer<IUser>([NameSpace.PROFILE] as unknown as string, initProfile);
const itemActions = item.actions;
const itemSelectors = item.selectors;
const itemReducer = item.reducer;

export {
  itemActions,
  itemSelectors,
  itemReducer
}
