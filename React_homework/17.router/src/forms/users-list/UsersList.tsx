import React, {useEffect, useState} from 'react';
import Loading from '../../components/loading/Loading';
import Users from '../../components/users/Users';
import Pagination from '../../components/pagination/Pagination';
import Selector from '../../components/selector/Selector';
import Switcher from '../../components/switcher/Switcher';
import {IApi, IUserPreview} from '../../types';
import './UsersList.css';

interface IUsersListProps {
  api: IApi;
}
interface IUsersListState {
  isLoading: boolean;
  users: IUserPreview[];
  pageAmount: number;
}

function UsersList({api}: IUsersListProps) {
  const [loading, setLoading] = useState<IUsersListState>({
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

export default UsersList;
