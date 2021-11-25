import React from 'react';
import ContentLayout, {ContentLayoutType} from '../../components/content-layout/ContentLayout';
import UserPreview from '../../components/user-preview/UserPreview';
import UserPosts from '../../components/user-posts/UserPosts';

function Profile() {
  return (
    <ContentLayout type={ContentLayoutType.FULL} hideTitle title="Профиль пользователя">
      <UserPreview />
      <UserPosts />
    </ContentLayout>
  );
}

export default Profile;
