import React, {useEffect} from 'react';
import {PageHeader} from 'antd';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../../components/loading/Loading';
import UserProfile from '../../components/user-profile/UserProfile';
import {profileOperations, profileSelectors} from '../../reducers/profile';

interface IUserProfileProps {
  id: string;
}

function UserProfileForm({id}: IUserProfileProps) {
  const dispatch = useDispatch();
  const isLoading = useSelector(profileSelectors.getProfileLoadingStatus);
  const userProfile = useSelector(profileSelectors.getUserProfile);

  useEffect(() => {
    dispatch(profileOperations.loadUser(id));
  }, [dispatch, id]);

  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  };

  return (
    <>
      <PageHeader title="Профиль пользователя" onBack={handleClick} />
      <Loading isLoading={isLoading}>
        <UserProfile userProfile={userProfile} />
      </Loading>
    </>
  );
}

export default UserProfileForm;
