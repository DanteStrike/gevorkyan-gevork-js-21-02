import React, {useContext} from 'react';
import {Menu} from 'antd';
import {useLocation, withRouter} from 'react-router-dom';
import {ThemeContext} from '../../context/ThemeContext';
import './AppMenu.css';
import CustomLink from '../custom-link/CustomLink';

function AppMenu() {
  const {theme} = useContext(ThemeContext);
  const {pathname} = useLocation();

  return (
    <Menu id="app-menu" className="app-menu" mode="horizontal" theme={theme} selectedKeys={[pathname]}>
      <Menu.Item className="app-menu__item" key="/users">
        <CustomLink to="/users" />
        Пользователи
      </Menu.Item>
      <Menu.Item className="app-menu__item" key="/registration">
        <CustomLink to="/registration" />
        Регистрация
      </Menu.Item>
    </Menu>
  );
}

export default withRouter(AppMenu);
