import React, {useEffect, useState} from 'react';
import {PageHeader} from 'antd';
import {useHistory} from 'react-router-dom';
import {IApi, IUser} from '../../types';
import Loading from '../../components/loading/Loading';
import UserProfile from '../../components/user-profile/UserProfile';

interface IUserProfileProps {
  id: string;
  api: IApi;
}
interface IUserProfileState {
  isLoading: boolean;
  userProfile: IUser;
}

function UserProfileForm({id, api}: IUserProfileProps) {
  const [loading, setLoading] = useState<IUserProfileState>({
    isLoading: true,
    userProfile: {
      id: ``,
      title: ``,
      firstName: ``,
      lastName: ``,
      gender: ``,
      email: ``,
      dateOfBirth: ``,
      registerDate: ``,
      phone: ``,
      picture: ``,
      location: {
        street: ``,
        city: ``,
        state: ``,
        country: ``,
        timezone: ``,
      },
    },
  });

  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  };

  useEffect(() => {
    api.getUser(id).then((userProfile) =>
      setLoading(() => ({
        isLoading: false,
        userProfile,
      }))
    );
  }, [api, id]);

  const {isLoading, userProfile} = loading;
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
