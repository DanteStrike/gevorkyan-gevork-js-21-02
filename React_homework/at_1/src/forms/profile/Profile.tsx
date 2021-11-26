import React, {useEffect} from 'react';
import ContentLayout, {ContentLayoutType} from '../../components/content-layout/ContentLayout';
import UserPreview from '../../components/user-preview/UserPreview';
import UserPosts from '../../components/user-posts/UserPosts';
import useAppDispatch from "../../hooks/use-app-dispatch";
import useAppSelector from "../../hooks/use-app-selector";
import {profileOperations, profileSelectors} from "../../store/profile";

interface IProfileProps {
  id: string
}

function Profile({id}: IProfileProps) {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(profileSelectors.getProfileLoadingStatus);
  const userProfile = useAppSelector(profileSelectors.getUserProfile);

  useEffect(() => {
    dispatch(profileOperations.loadUser(id));
  }, [dispatch, id]);

  return (
    <ContentLayout type={ContentLayoutType.FULL} hideTitle title="Профиль пользователя">
      <UserPreview user={userProfile} isLoading={isLoading}/>
      <UserPosts />
    </ContentLayout>
  );
}

export default Profile;
