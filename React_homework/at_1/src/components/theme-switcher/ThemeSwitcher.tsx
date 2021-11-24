import React from 'react';
import {Switch} from 'antd';
import './ThemeSwithcer.scss';

function ThemeSwitcher() {
  return <Switch className="theme-switcher" checkedChildren="Темная тема" unCheckedChildren="Светлая тема" />;
}

export default React.memo(ThemeSwitcher);
