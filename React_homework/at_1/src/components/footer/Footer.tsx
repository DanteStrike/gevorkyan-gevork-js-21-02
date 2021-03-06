import React from 'react';
import './Footer.scss';
import ThemeSwitcher from '../theme-switcher/ThemeSwitcher';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__item footer__item--copyright">Delta World &copy; 1970-2077</p>
        <div className="footer__item footer__item--switcher">
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
