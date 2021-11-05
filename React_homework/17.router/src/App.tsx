import React, {useContext} from 'react';
import './App.css';
import {IApi} from './types';
import {ThemeContext} from './context/ThemeContext';
import UsersList from "./forms/users-list/UsersList";

interface IAppProps {
  api: IApi;
}

function App({api}: IAppProps) {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`app app--theme_${theme}`}>
      <main className="app__container">
        <UsersList api={api}/>
      </main>
    </div>
  );
}

export default App;
