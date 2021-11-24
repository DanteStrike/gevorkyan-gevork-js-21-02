import React from 'react';
import './Header.scss';
import Logo from '../logo/Logo';
import Menu from '../menu/Menu';
import Auth from '../auth/Auth';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__item header__item--logo">
          <Logo />
        </div>
        <div className="header__item header__item--menu">
          <Menu />
        </div>
        <div className="header__item header__item--auth">
          <Auth />
        </div>
      </div>
    </header>
  );
}

export default React.memo(Header);
