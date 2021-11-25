import React from 'react';
import ContentLayout, {ContentLayoutType} from "../../components/content-layout/ContentLayout";
import UserProfile from "../../components/user-profile/UserProfile";

function Profile() {
  return (
    <ContentLayout type={ContentLayoutType.FULL} hideTitle title="Профиль пользователя">
      <UserProfile/>
    </ContentLayout>
  );
};

export default Profile;
