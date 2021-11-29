import React, {useEffect, useState} from 'react';
import './App.scss';
import {message} from "antd";
import useAppSelector from "./hooks/use-app-selector";
import {authSelectors} from "./store/auth";
import Loading from "./components/loading/Loading";
import MainLayout from "./components/main-layout/MainLayout";

function App() {
  const [isAppSetup, setIsAppSetup] = useState(false);

  const isAuthWait = useAppSelector(authSelectors.getIsAuthWait);
  const isAuthError = useAppSelector(authSelectors.getIsError);

  useEffect(() => {
    if (!isAuthWait || isAuthError) {
      setIsAppSetup(true)
    }
  }, [isAuthWait, isAuthError])

  useEffect(() => {
    if (isAppSetup) {
      message.error(`Ошибка авторизации`)
    }
  }, [isAppSetup])

  if (!isAppSetup) {
    return <Loading isLoading />;
  }

  return <MainLayout/>;
}

export default App;
