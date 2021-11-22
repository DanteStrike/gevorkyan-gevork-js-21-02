import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Pagination, PageHeader} from 'antd';
import Loading from '../../components/loading/Loading';
import Users from '../../components/users/Users';
import Switcher from '../../components/switcher/Switcher';
import './UsersListForm.css';
import {usersActions, usersOperations, usersSelectors} from '../../reducers/users';

function UsersListForm() {
  const dispatch = useDispatch();
  const page = useSelector(usersSelectors.getUsersPage);
  const limit = useSelector(usersSelectors.getUsersLimit);
  const total = useSelector(usersSelectors.getUsersTotal);
  const users = useSelector(usersSelectors.getUsersList);
  const limitOptions = useSelector(usersSelectors.getUsersLimitOptions);
  const isLoading = useSelector(usersSelectors.getUsersLoadingStatus);

  useEffect(() => {
    dispatch(usersOperations.loadUsers(limit, page));
  }, [dispatch, limit, page]);

  const handlePaginationChange = (newPage: number, newLimit?: number) => {
    if (newPage !== page) {
      dispatch(usersActions.changeUsersPage(newPage));
    }

    if (newLimit && newLimit !== limit) {
      dispatch(usersActions.changeUsersLimit(newLimit));
      dispatch(usersActions.changeUsersPage(1));
    }
  };

  const history = useHistory();
  useEffect(() => {
    history.push({
      ...history.location,
      search: `?page=${page}&limit=${limit}`,
    });
  }, [history, page, limit]);

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
          pageSizeOptions={limitOptions}
          onChange={handlePaginationChange}
          disabled={isLoading}
          defaultPageSize={limit}
        />
        <Switcher />
      </div>
    </div>
  );
}

export default UsersListForm;
