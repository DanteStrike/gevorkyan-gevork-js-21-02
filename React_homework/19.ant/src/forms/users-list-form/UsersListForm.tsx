import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Pagination, PageHeader} from 'antd';
import Loading from '../../components/loading/Loading';
import Users from '../../components/users/Users';
import Switcher from '../../components/switcher/Switcher';
import {IApi, IUserPreview} from '../../types';
import './UsersListForm.css';
import useQuery from "../../hooks/useQuery";

interface IUsersListProps {
  api: IApi;
}
interface IUsersListState {
  isLoading: boolean;
  users: IUserPreview[];
  total: number;
}

const defaultState = {
  loading: {
    isLoading: false,
    users: [],
    total: 0,
  },
  page: 1,
  limit: 20,
  pageSizeOptions: [`5`, `10`, `20`, `50`, `100`],
};

function UsersListForm({api}: IUsersListProps) {
  const history = useHistory();
  const query = useQuery();

  const [loading, setLoading] = useState<IUsersListState>({...defaultState.loading});
  const [page, setPage] = useState<number>(Number(query.get(`page`)) || defaultState.page);
  const [limit, setLimit] = useState<number>(Number(query.get(`limit`)) || defaultState.limit);
  useEffect(() => {
    setPage(Number(query.get(`page`)) || defaultState.page);
    setLimit(Number(query.get(`limit`)) || defaultState.limit);
  }, [query]);

  useEffect(() => {
    history.push({
      ...history.location,
      search: `?page=${page}&limit=${limit}`,
    });
  }, [history, page, limit]);

  const handlePaginationChange = (selectedPage: number, selectedPageSize?: number) => {
    if (selectedPage !== page) {
      setPage(selectedPage);
    }

    if (selectedPageSize && selectedPageSize !== limit) {
      setLimit(selectedPageSize);
    }
  };
  useEffect(() => {
    setLoading((prevLoading) => ({...prevLoading, isLoading: true}));

    api.getUsers(page - 1, limit).then((list) =>
      setLoading((prevLoading) => ({
        ...prevLoading,
        users: list.data,
        total: list.total,
        isLoading: false,
      }))
    );
  }, [page, limit, api]);

  const {users, total, isLoading} = loading;

  return (
    <div className="users-list">
      <PageHeader backIcon={false} title="Пользователи" />
      <Loading isLoading={isLoading}>
        <Users users={users} />
      </Loading>
      <div className="users-list__wrap">
        <Pagination
          current={page}
          total={total}
          pageSizeOptions={defaultState.pageSizeOptions}
          onChange={handlePaginationChange}
          disabled={isLoading}
          defaultCurrent={defaultState.page}
          defaultPageSize={defaultState.limit}
        />
        <Switcher />
      </div>
    </div>
  );
}

export default UsersListForm;
