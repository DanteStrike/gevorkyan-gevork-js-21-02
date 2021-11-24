import React from 'react';
import './Menu.scss';
import {Menu as MenuANTD} from 'antd';
import {UserOutlined, PictureOutlined} from '@ant-design/icons';

const iconStyle = {
  fontSize: `20px`,
};

function Menu() {
  return (
    <MenuANTD className="menu" mode="horizontal">
      <MenuANTD.Item className="menu__item" key="users" icon={<UserOutlined style={iconStyle} />}>
        Пользователи
      </MenuANTD.Item>
      <MenuANTD.Item className="menu__item" key="posts" icon={<PictureOutlined style={iconStyle} />}>
        Посты
      </MenuANTD.Item>
    </MenuANTD>
  );
}

export default React.memo(Menu);
