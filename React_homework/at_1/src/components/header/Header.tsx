import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo"/>
        <div className="header__menu"/>
        <div className="header__auth"/>
      </div>
    </header>
  );
}

export default Header;
