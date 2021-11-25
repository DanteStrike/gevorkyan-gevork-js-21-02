import React, {useState} from 'react';
import './Auth.scss';
import {Avatar} from 'antd';
import CustomLink from '../custom-link/CustomLink';

function Auth() {
  const [isAuth] = useState(true);

  return (
    <div className="auth">
      {!isAuth ? (
        <>
          <CustomLink className="auth__link auth__link--left" to="/login">
            Вход
          </CustomLink>
          <CustomLink className="auth__link" to="/registration">
            Регистрация
          </CustomLink>
        </>
      ) : (
        <>
          <CustomLink className="auth__link auth__link--left auth__link--profile" to="/profile">
            <Avatar />
            <span className="auth__user">Анжелика</span>
          </CustomLink>
          <CustomLink className="auth__link auth__link--small" to="/login">
            Выход
          </CustomLink>
        </>
      )}
    </div>
  );
}

export default React.memo(Auth);
