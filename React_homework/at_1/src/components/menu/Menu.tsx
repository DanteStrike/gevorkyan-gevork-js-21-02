import React from 'react';
import {Menu as MenuANTD} from 'antd';
import {UserOutlined, PictureOutlined} from '@ant-design/icons';
import CustomLink from '../custom-link/CustomLink';
import './Menu.scss';

const iconStyle = {
  fontSize: `20px`,
};

function Menu() {
  return (
    <MenuANTD className="menu" mode="horizontal" selectedKeys={[]}>
      <MenuANTD.Item className="menu__item" key="users" icon={<UserOutlined style={iconStyle} />}>
        <CustomLink className="menu__link" to="/users">
          <span className="menu__text">Пользователи</span>
        </CustomLink>
      </MenuANTD.Item>
      <MenuANTD.Item className="menu__item" key="posts" icon={<PictureOutlined style={iconStyle} />}>
        <CustomLink className="menu__link" to="/posts">
          <span className="menu__text">Посты</span>
        </CustomLink>
      </MenuANTD.Item>
    </MenuANTD>
  );
}

export default React.memo(Menu);
