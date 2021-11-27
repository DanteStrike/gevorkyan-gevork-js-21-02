import {itemActions} from "./slices/item";
import {fetchActions} from "./slices/fetch";

const actions = {
  ...fetchActions,
  ...itemActions
};

export default actions;
