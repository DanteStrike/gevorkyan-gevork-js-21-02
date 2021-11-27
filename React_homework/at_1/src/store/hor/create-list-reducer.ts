import {AnyAction} from "redux";
import {ObjectUtils} from "../../utils";

export interface IListStore<T> {
  current: number;
  total: number;
  data: T[];
}

export const createListReducer = <T>(name: string) => {
  const SETUP = `${name}/list/SETUP`;
  const CHANGE_PAGE = `${name}/list/CHANGE_PAGE`;

  const setup = (users: {total: number, data: T[]}) =>
    ({
      type: SETUP,
      payload: {
        total: users.total,
        data: users.data,
      },
    });



  const changePage = (page: number) =>
    ({
      type: CHANGE_PAGE,
      payload: page,
    });

  const actions = {
    setup,
    changePage
  }

  const initStore: IListStore<T> = {
    current: 1,
    total: 0,
    data: []
  }

  const reducer = (state = initStore, action: AnyAction): IListStore<T> => {
    switch (action.type) {
      case SETUP:
        return ObjectUtils.updateObject(state, {
          total: action.payload.total,
          data: action.payload.data,
        });

      case CHANGE_PAGE:
        return ObjectUtils.updateObject(state, {current: action.payload});

      default:
        return state;
    }
  };

  const getData = (store: IListStore<T>) => store.data;
  const getTotal = (store: IListStore<T>) => store.total;
  const getPage = (store: IListStore<T>) => store.current;
  const selectors = {
    getData,
    getTotal,
    getPage,
  }

  return {
    actions,
    selectors,
    reducer,
  }
}
