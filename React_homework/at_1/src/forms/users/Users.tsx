import React, {useEffect} from 'react';
import ContentLayout, {ContentLayoutType} from '../../components/content-layout/ContentLayout';
import UsersList from '../../components/users-list/UsersList';
import {usersSelectors, usersOperations, usersActions} from '../../store/users';
import useAppDispatch from '../../hooks/use-app-dispatch';
import useAppSelector from '../../hooks/use-app-selector';

function Users() {
  const dispatch = useAppDispatch();
  const page = useAppSelector(usersSelectors.getPage);
  const total = useAppSelector(usersSelectors.getTotal);
  const users = useAppSelector(usersSelectors.getData);
  const isLoading = useAppSelector(usersSelectors.getIsLoading);

  useEffect(() => {
    dispatch(usersOperations.load(6, page));
  }, [dispatch, page]);

  const handlePaginationChange = (newPage: number) => {
    dispatch(usersActions.changePage(newPage));
  };

  return (
    <ContentLayout type={ContentLayoutType.FULL} hideTitle title="Спиок слушателей">
      <UsersList current={page} total={total} users={users} onChange={handlePaginationChange} isLoading={isLoading} />
    </ContentLayout>
  );
}

export default Users;
