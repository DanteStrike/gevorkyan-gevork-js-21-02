import {AnyAction} from "redux";
import {ObjectUtils} from "../../utils";

export interface IItemStore<T> {
  item: T;
}

export const createItemReducer = <T>(name: string, initItem: T) => {
  const SET = `${name}/item/SET`;

  const set = (data: T) =>
    ({
      type: SET,
      payload: data,
    });

  const actions = {
    set
  }

  const initStore: IItemStore<T> = {
    item: initItem
  }

  const reducer = (state = initStore, action: AnyAction): IItemStore<T> => {
    if (action.type === SET) {
      return ObjectUtils.updateObject(state, {
        item: action.payload
      });
    }

    return state;
  };

  const getItem = (store: IItemStore<T>) => store.item;
  const selectors = {
    getItem
  }

  return {
    actions,
    selectors,
    reducer,
  }
}
