import React, {useContext, useEffect, useState} from 'react';
import './App.css';
import {IApi, IUserPreview} from './types';
import Users from './components/users/Users';
import Pagination from './components/pagination/Pagination';
import Selector from './components/selector/Selector';
import {ThemeContext} from './context/ThemeContext';
import Switcher from './components/switcher/Switcher';
import Loading from './components/loading/Loading';

interface IAppProps {
  api: IApi;
}
interface IAppState {
  isLoading: boolean;
  users: IUserPreview[];
  pageAmount: number;
}

function App({api}: IAppProps) {
  const [loading, setLoading] = useState<IAppState>({
    isLoading: false,
    users: [],
    pageAmount: 0,
  });
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(20);
  const [limitOptions] = useState<number[]>([5, 10, 20]);

  const handlePageChange = (value: number) => {
    setPage(value);
  };
  const handleUsersPageLimitChange = (value: number) => {
    setLimit(value);
    setPage(0);
  };
  useEffect(() => {
    setLoading((prevLoading) => ({...prevLoading, isLoading: true}));

    api.getUsers(page, limit).then((list) =>
      setLoading((prevLoading) => ({
        ...prevLoading,
        users: list.data,
        pageAmount: Math.ceil(list.total / list.limit),
        isLoading: false,
      }))
    );
  }, [page, limit, api]);

  const {users, pageAmount, isLoading} = loading;
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`app app--theme_${theme}`}>
      <main className="app__container">
        <h1 className="app__title">Пользователи</h1>
        <Loading isLoading={isLoading}>
          <Users users={users} />
        </Loading>
        <div className="app__wrap">
          <Pagination value={pageAmount} defaultValue={page} onChange={handlePageChange} />
          <Selector options={limitOptions} defaultOption={limit} onChange={handleUsersPageLimitChange} />
          <Switcher />
        </div>
      </main>
    </div>
  );
}

export default App;
