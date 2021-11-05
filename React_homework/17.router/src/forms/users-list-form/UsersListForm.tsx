import React, {useEffect, useState} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import Users from '../../components/users/Users';
import Pagination from '../../components/pagination/Pagination';
import Selector from '../../components/selector/Selector';
import Switcher from '../../components/switcher/Switcher';
import {IApi, IUserPreview} from '../../types';
import './UsersListForm.css';

interface IUsersListProps {
  api: IApi;
}
interface IUsersListState {
  isLoading: boolean;
  users: IUserPreview[];
  pageAmount: number;
}

function UsersListForm({api}: IUsersListProps) {
  const history = useHistory();
  const {search} = useLocation();
  const query = React.useMemo(() => new URLSearchParams(search), [search]);

  const [loading, setLoading] = useState<IUsersListState>({
    isLoading: false,
    users: [],
    pageAmount: 0,
  });
  const [page, setPage] = useState<number>(Number(query.get(`page`) || 0));
  const [limit, setLimit] = useState<number>(Number(query.get(`limit`) || 20));
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

  useEffect(() => {
    setPage(Number(query.get(`page`) || 0));
    setLimit(Number(query.get(`limit`) || 20));
  }, [query]);

  useEffect(() => {
    history.push({
      ...history.location,
      search: `?page=${page}&limit=${limit}`,
    });
  }, [history, page, limit, loading.pageAmount]);

  const {users, pageAmount, isLoading} = loading;

  return (
    <>
      <h1 className="users-list__title">Пользователи</h1>
      <Loading isLoading={isLoading}>
        <Users users={users} />
      </Loading>
      <div className="users-list__wrap">
        <Pagination value={pageAmount} defaultValue={page} onChange={handlePageChange} />
        <Selector options={limitOptions} defaultOption={limit} onChange={handleUsersPageLimitChange} />
        <Switcher />
      </div>
    </>
  );
}

export default UsersListForm;
