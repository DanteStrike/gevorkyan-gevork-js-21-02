import React, {useEffect} from 'react';
import ContentLayout, {ContentLayoutType} from '../../components/content-layout/ContentLayout';
import UsersList from '../../components/users-list/UsersList';
import {usersSelectors, usersOperations, usersActions} from "../../store/users";
import useAppDispatch from "../../hooks/use-app-dispatch";
import useAppSelector from "../../hooks/use-app-selector";

function Users() {
  const dispatch = useAppDispatch();
  const page = useAppSelector(usersSelectors.getUsersPage);
  const total = useAppSelector(usersSelectors.getUsersTotal);
  const users = useAppSelector(usersSelectors.getUsersList);
  const isLoading = useAppSelector(usersSelectors.getUsersLoadingStatus);

  useEffect(() => {
    dispatch(usersOperations.loadUsers(6, page));
  }, [dispatch, page]);

  const handlePaginationChange = (newPage: number) => {
      dispatch(usersActions.changeUsersPage(newPage));
  };

  return (
    <ContentLayout type={ContentLayoutType.FULL} hideTitle title="Спиок слушателей">
      <UsersList current={page} total={total} users={users} onChange={handlePaginationChange} isLoading={isLoading}/>
    </ContentLayout>
  );
}

export default Users;
