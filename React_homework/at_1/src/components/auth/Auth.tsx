import React, {useState} from 'react';
import './Auth.scss';
import {Avatar} from 'antd';

function Auth() {
  const [isAuth] = useState(true);

  return (
    <div className="auth">
      {!isAuth ? (
        <>
          <a className="auth__link auth__link--left" href="#е">
            Вход
          </a>
          <a className="auth__link" href="#е">
            Регистрация
          </a>
        </>
      ) : (
        <>
          <Avatar />
          <a className="auth__link auth__link--left" href="#е">
            Анжелика
          </a>
          <a className="auth__link auth__link--small" href="#е">
            Выход
          </a>
        </>
      )}
    </div>
  );
}

export default React.memo(Auth);
