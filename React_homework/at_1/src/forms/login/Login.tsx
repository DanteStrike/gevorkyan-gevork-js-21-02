import React from 'react';
import ContentLayout, {ContentLayoutType} from '../../components/content-layout/ContentLayout';
import LoginForm from '../../components/login-form/LoginForm';

function Login() {
  return (
    <ContentLayout type={ContentLayoutType.CONTENT} title="Вход">
      <LoginForm />
    </ContentLayout>
  );
}

export default React.memo(Login);
