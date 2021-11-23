import React from 'react';
import "./Auth.scss";

function Auth() {
  return (
    <div className="auth">
      <a className="auth__link auth__link--left" href="#е">Вход</a>
      <a className="auth__link" href="#е">Регистрация</a>
    </div>
  );
};

export default Auth;
