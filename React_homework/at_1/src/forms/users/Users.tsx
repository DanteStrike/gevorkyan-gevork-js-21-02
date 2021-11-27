import React, {useEffect} from 'react';
import ContentLayout, {ContentLayoutType} from '../../components/content-layout/ContentLayout';
import AppList from '../../components/app-list/AppList';
import {usersSelectors, usersOperations, usersActions} from '../../store/users';
import useAppDispatch from '../../hooks/use-app-dispatch';
import useAppSelector from '../../hooks/use-app-selector';
import {IUserPreview} from '../../types';
import UserCard from '../../components/user-card/UserCard';
import CustomLink from "../../components/custom-link/CustomLink";

function Users() {
  const dispatch = useAppDispatch();
  const page = useAppSelector(usersSelectors.getPage);
  const total = useAppSelector(usersSelectors.getTotal);
  const users = useAppSelector(usersSelectors.getData);
  const isLoading = useAppSelector(usersSelectors.getIsLoading);
  const itemPerPage = 6;

  useEffect(() => {
    dispatch(usersOperations.load(itemPerPage, page));
  }, [dispatch, page]);

  const handlePaginationChange = (newPage: number) => {
    dispatch(usersActions.changePage(newPage));
  };

  return (
    <ContentLayout type={ContentLayoutType.FULL} hideTitle title="Спиок слушателей">
      <AppList
        current={page}
        total={total}
        dataSource={users}
        onChange={handlePaginationChange}
        isLoading={isLoading}
        pageSize={itemPerPage}
        renderItem={(user: IUserPreview) => (
          <AppList.Item key={user.id} id={`users-item-${user.id}`}>
            <CustomLink to={`/profile/${user.id}`}>
              <UserCard user={user} />
            </CustomLink>
          </AppList.Item>
        )}
      />
    </ContentLayout>
  );
}

export default Users;
