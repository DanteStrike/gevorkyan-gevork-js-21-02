import React, {useEffect} from 'react';
import ContentLayout, {ContentLayoutType} from '../../components/content-layout/ContentLayout';
import UserPreview from '../../components/user-preview/UserPreview';
import useAppDispatch from '../../hooks/use-app-dispatch';
import useAppSelector from '../../hooks/use-app-selector';
import {profileActions, profileOperations, profileSelectors} from '../../store/profile';
import {RequestType} from '../../store/profile/slices/fetch';
import AppList, {AppListMod} from '../../components/app-list/AppList';
import {IPostPreview} from '../../types';
import PostCard from '../../components/post-card/PostCard';
import {authSelectors} from '../../store/auth';

interface IProfileProps {
  id: string;
}

function Profile({id}: IProfileProps) {
  const dispatch = useAppDispatch();
  const authID = useAppSelector(authSelectors.getID);
  const isProfileLoading = useAppSelector(profileSelectors.getProfileIsLoading);
  const userProfile = useAppSelector(profileSelectors.getProfile);
  const isUserPostsLoading = useAppSelector(profileSelectors.getUserPostsIsLoading);
  const userPosts = useAppSelector(profileSelectors.getPosts);
  const page = useAppSelector(profileSelectors.getPage);
  const total = useAppSelector(profileSelectors.getTotal);
  const itemPerPage = 3;

  const isUserPostsError = useAppSelector(profileSelectors.getUserPostsIsError);
  const errMsgUserPosts = useAppSelector(profileSelectors.getUserPostsError);

  const isProfileError = useAppSelector(profileSelectors.getProfileIsError);
  const errMsgProfile = useAppSelector(profileSelectors.getProfileError);

  useEffect(() => {
    dispatch(profileOperations.loadProfile(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(profileOperations.loadUserPosts(id, itemPerPage, page));
  }, [dispatch, id, page]);

  useEffect(
    () => () => {
      dispatch(profileActions.fetchActions[RequestType.LOAD_PROFILE].requestAbort());
      dispatch(profileActions.fetchActions[RequestType.LOAD_USER_POSTS].requestAbort());
      dispatch(profileActions.reset());
      dispatch(profileActions.resetList());
    },
    [dispatch]
  );

  const handlePaginationChange = (newPage: number) => {
    dispatch(profileActions.changePage(newPage));
  };

  return (
    <ContentLayout
      type={ContentLayoutType.FULL}
      hideTitle
      title="Профиль пользователя"
      isError={isProfileError || isUserPostsError}
      errMsg={errMsgProfile || errMsgUserPosts}
    >
      <UserPreview user={userProfile} isLoading={isProfileLoading} isUser={id === authID} />
      <AppList
        current={page}
        dataSource={userPosts}
        isLoading={isUserPostsLoading}
        onChange={handlePaginationChange}
        renderItem={(post: IPostPreview) => (
          <AppList.Item>
            <PostCard post={post} hideTop />
          </AppList.Item>
        )}
        total={total}
        pageSize={itemPerPage}
        mod={AppListMod.ROW}
      />
    </ContentLayout>
  );
}

export default Profile;
