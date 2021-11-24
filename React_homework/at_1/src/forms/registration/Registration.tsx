import React from 'react';
import './Registration.scss';
import RegForm from '../../components/reg-form/RegForm';

function Registration() {
  return (
    <main className="registration">
      <h1 className="registration__title">Регистрация</h1>
      <RegForm />
    </main>
  );
}

export default React.memo(Registration);
