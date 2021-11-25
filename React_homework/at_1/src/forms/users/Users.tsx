import React from 'react';
import ContentLayout, {ContentLayoutType} from '../../components/content-layout/ContentLayout';
import UsersList from '../../components/users-list/UsersList';

function Users() {
  return (
    <ContentLayout type={ContentLayoutType.FULL} hideTitle title="Спиок слушателей">
      <UsersList />
    </ContentLayout>
  );
}

export default Users;
