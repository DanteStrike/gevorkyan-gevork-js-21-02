import React, {useEffect} from 'react';
import ContentLayout, {ContentLayoutType} from '../../components/content-layout/ContentLayout';
import UserPreview from '../../components/user-preview/UserPreview';
import useAppDispatch from '../../hooks/use-app-dispatch';
import useAppSelector from '../../hooks/use-app-selector';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {profileActions, profileOperations, profileSelectors} from '../../store/profile';
// import AppList from "../../components/app-list/AppList";

interface IProfileProps {
  id: string;
}

function Profile({id}: IProfileProps) {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(profileSelectors.getIsLoading);
  const userProfile = useAppSelector(profileSelectors.getProfile);

  useEffect(() => {
    dispatch(profileOperations.load(id));
  }, [dispatch, id]);

  useEffect(
    () => () => {
      dispatch(profileActions.requestAbort());
      dispatch(profileActions.reset());
    },
    [dispatch]
  );

  return (
    <ContentLayout type={ContentLayoutType.FULL} hideTitle title="Профиль пользователя">
      <UserPreview user={userProfile} isLoading={isLoading} />
      {/* <AppList current={} dataSource={} isLoading onChange={} renderItem={} total={}/> */}
    </ContentLayout>
  );
}

export default Profile;
