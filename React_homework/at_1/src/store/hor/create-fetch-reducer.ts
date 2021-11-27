import {ObjectUtils} from "../../utils";
import {InferValueTypes} from "../../types";

export const enum FetchStatus {
  IDLE = `idle`,
  LOADING = `loading`,
  SUCCESS = `success`,
  ERROR = `error`
}

export interface IFetchStore {
  status: FetchStatus
  error: null | string
}

export const createFetchReducer = (name: string) => {
  const REQUEST_STARTED = `${name}/fetch/REQUEST_STARTED` as const;
  const REQUEST_FINISHED = `${name}/fetch/REQUEST_FINISHED` as const;
  const REQUEST_FAILED = `${name}/fetch/REQUEST_FAILED` as const;
  const REQUEST_RESET = `${name}/fetch/REQUEST_RESET` as const;

  const requestStart = () =>
    ({
      type: REQUEST_STARTED,
      payload: undefined
    });

  const requestFinished = () =>
    ({
      type: REQUEST_FINISHED,
      payload: undefined
    });

  const requestFailed = (errMsg: string) =>
    ({
      type: REQUEST_FAILED,
      payload: errMsg
    });

  const requestReset = () =>
    ({
      type: REQUEST_RESET,
      payload: undefined
    });

  const actions = {
    requestStart,
    requestFinished,
    requestFailed,
    requestReset
  }
  type ActionsTypes = ReturnType<InferValueTypes<typeof actions>>;

  const initStore: IFetchStore = {
    status: FetchStatus.IDLE,
    error: null
  }

  const reducer = (state = initStore, action: ActionsTypes): IFetchStore => {
    switch (action.type) {
      case REQUEST_STARTED:
        return ObjectUtils.updateObject(state, {
          status: FetchStatus.LOADING
        });

      case REQUEST_FINISHED:
        return ObjectUtils.updateObject(state, {
          status: FetchStatus.SUCCESS
        });

      case REQUEST_FAILED:
        return ObjectUtils.updateObject(state, {
          status: FetchStatus.ERROR,
          error: action.payload
        });

      case REQUEST_RESET:
        return ObjectUtils.updateObject(state, initStore);

      default:
        return state;
    }
  };

  const getStatus = (store: IFetchStore) => store.status;
  const getIsLoading = (store: IFetchStore) => store.status === FetchStatus.LOADING;
  const getIsError = (store: IFetchStore) => store.status === FetchStatus.ERROR;
  const getError = (store: IFetchStore) => store.error;
  const selectors = {
    getStatus,
    getIsLoading,
    getIsError,
    getError
  }

  return {
    actions,
    selectors,
    reducer,
  }
}
