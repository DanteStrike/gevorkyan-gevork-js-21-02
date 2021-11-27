import React, {useEffect} from 'react';
import {Tooltip} from 'antd';
import ContentLayout, {ContentLayoutType} from '../../components/content-layout/ContentLayout';
import AppList from '../../components/app-list/AppList';
import {usersSelectors, usersOperations, usersActions} from '../../store/users';
import useAppDispatch from '../../hooks/use-app-dispatch';
import useAppSelector from '../../hooks/use-app-selector';
import {IUserPreview} from '../../types';
import CustomLink from '../../components/custom-link/CustomLink';
import UserCard from '../../components/user-card/UserCard';

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
      <AppList
        current={page}
        total={total}
        dataSource={users}
        onChange={handlePaginationChange}
        isLoading={isLoading}
        renderItem={(user: IUserPreview) => (
          <AppList.Item key={user.id} id={`users-item-${user.id}`}>
            <Tooltip
              placement="topLeft"
              title={user.id}
              getPopupContainer={() => document.querySelector(`#users-item-${user.id}`) || document.body}
            >
              <CustomLink to={`/profile/${user.id}`}>
                <UserCard user={user} />
              </CustomLink>
            </Tooltip>
          </AppList.Item>
        )}
      />
    </ContentLayout>
  );
}

export default Users;
