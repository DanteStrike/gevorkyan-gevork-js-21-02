import {useCallback, useState} from 'react';
import {AxiosResponse, AxiosError} from 'axios';
import api from '../server/api';

export const enum Status {
  IDLE = `idle`,
  LOADING = `loading`,
  SUCCESS = `success`,
  ERROR = `error`,
}

interface IFetchAPIState {
  status: Status;
  data: string;
  errMsg: string;
}

const useFileAPI = () => {
  const [fetchAPI, setFetchAPI] = useState<IFetchAPIState>({
    status: Status.IDLE,
    data: ``,
    errMsg: ``,
  });

  const initFetchStart = useCallback(
    () => setFetchAPI({status: Status.LOADING, data: ``, errMsg: ``}),
    []
  );
  const initFetchSuccess = useCallback(
    (data: string) => setFetchAPI({status: Status.SUCCESS, data, errMsg: ``}),
    []
  );
  const initFetchError = useCallback(
    (errMsg: string) => setFetchAPI({status: Status.ERROR, data: ``, errMsg}),
    []
  );

  const handleRequest = useCallback(
    (request: Promise<AxiosResponse<string, any>>) => {
      request
        .then(({data}) => initFetchSuccess(data))
        .catch((err: AxiosError) => {
          if (err.code === `ECONNABORTED`) {
            initFetchError(`Connection timeout`);
            return;
          }
          initFetchError(err.message);
        });
    },
    [initFetchSuccess, initFetchError]
  );

  const saveFile = useCallback(
    (text: {file: string}) => {
      initFetchStart();
      handleRequest(api.put<string>(``, text));
    },
    [handleRequest, initFetchStart]
  );

  const loadFile = useCallback(() => {
    initFetchStart();
    handleRequest(api.get<string>(``));
  }, [handleRequest, initFetchStart]);

  return {...fetchAPI, saveFile, loadFile};
};

export default useFileAPI;
